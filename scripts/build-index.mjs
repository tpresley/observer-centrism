#!/usr/bin/env node
/**
 * build-index.mjs — Knowledge index generator for the observer-centrism project.
 *
 * Scans all derivation and prediction markdown files, extracts structured data
 * (frontmatter, proof steps, formal objects, open gaps, cross-references, etc.),
 * computes reverse dependencies and upgrade eligibility, and writes a comprehensive
 * JSON index to site/src/data/knowledge-index.json.
 *
 * No external dependencies — uses only Node built-ins (fs, path).
 *
 * Usage:  node scripts/build-index.mjs
 */

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync, unlinkSync } from 'fs'
import { join, relative, basename, dirname } from 'path'
import { execSync } from 'child_process'

// ─── Paths ──────────────────────────────────────────────────────────────────────
const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '')
const DERIVATIONS_DIR = join(ROOT, 'site/src/content/derivations')
const PREDICTIONS_DIR = join(ROOT, 'site/src/content/predictions')
const GA_DIR = join(ROOT, 'site/src/content/geometric-algebra')
const GRAPH_PATH = join(ROOT, 'site/src/data/dependency-graph.json')
const POSTULATES_PATH = join(ROOT, 'site/src/data/structural-postulates.json')
const OUTPUT_PATH = join(ROOT, 'site/src/data/knowledge-index.json')
const DB_PATH = join(ROOT, 'site/src/data/knowledge.db')
const SQL_TEMP_PATH = join(ROOT, 'site/src/data/_build_temp.sql')

// ─── Helpers ────────────────────────────────────────────────────────────────────

/** Recursively collect all .md files under a directory */
function collectMdFiles(dir) {
  const results = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...collectMdFiles(full))
    } else if (entry.name.endsWith('.md')) {
      results.push(full)
    }
  }
  return results.sort()
}

/** Parse YAML-like frontmatter (between --- delimiters) into an object.
 *  Handles: strings, numbers, dates, booleans, arrays of strings.
 *  No external deps — handles only the subset used in this project. */
function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return { data: {}, body: content }

  const yamlStr = match[1]
  const body = content.slice(match[0].length).trimStart()
  const data = {}

  let currentKey = null
  let currentArray = null

  for (const line of yamlStr.split('\n')) {
    const trimmed = line.trim()

    // Array continuation:  - "value"
    if (currentArray !== null && /^\s*-\s+/.test(line)) {
      const val = trimmed.replace(/^-\s+/, '').replace(/^["']|["']$/g, '')
      currentArray.push(val)
      continue
    }

    // If we were collecting an array and hit a non-continuation, close it
    if (currentArray !== null) {
      data[currentKey] = currentArray
      currentArray = null
      currentKey = null
    }

    if (!trimmed || trimmed.startsWith('#')) continue

    const kvMatch = trimmed.match(/^(\w+)\s*:\s*(.*)$/)
    if (!kvMatch) continue

    const key = kvMatch[1]
    let value = kvMatch[2].trim()

    // Inline array: ["a", "b", "c"]
    if (value.startsWith('[')) {
      const items = value.slice(1, -1)
      if (items.trim() === '') {
        data[key] = []
      } else {
        data[key] = items.split(',').map(s => s.trim().replace(/^["']|["']$/g, ''))
      }
      continue
    }

    // Start of block array (no value on same line)
    if (value === '') {
      currentKey = key
      currentArray = []
      continue
    }

    // Remove surrounding quotes
    value = value.replace(/^["']|["']$/g, '')

    // Parse types
    if (value === 'true') { data[key] = true; continue }
    if (value === 'false') { data[key] = false; continue }
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) { data[key] = value; continue }  // keep dates as strings
    if (/^\d+(\.\d+)?$/.test(value)) { data[key] = parseFloat(value); continue }

    data[key] = value
  }

  // Close trailing array
  if (currentArray !== null) {
    data[currentKey] = currentArray
  }

  return { data, body }
}

/** Parse leanProofs from YAML frontmatter string (handles nested array of objects) */
function parseLeanProofs(yamlStr) {
  const proofs = []
  // Find the leanProofs: section
  const startMatch = yamlStr.match(/^leanProofs:\s*$/m)
  if (!startMatch) return proofs

  const startIdx = startMatch.index + startMatch[0].length
  const lines = yamlStr.slice(startIdx).split('\n')

  let current = null
  let inTheorems = false

  for (const line of lines) {
    // Stop at next top-level key (no leading whitespace, has colon)
    if (/^\S/.test(line) && line.includes(':')) break

    const trimmed = line.trim()
    if (!trimmed) continue

    // New proof object: "  - module: ..."
    const moduleMatch = trimmed.match(/^-\s+module:\s*"([^"]+)"/)
    if (moduleMatch) {
      if (current) proofs.push(current)
      current = { module: moduleMatch[1], proposition: '', theorems: [] }
      inTheorems = false
      continue
    }

    if (!current) continue

    // Proposition field
    const propMatch = trimmed.match(/^proposition:\s*"([^"]+)"/)
    if (propMatch) {
      current.proposition = propMatch[1]
      inTheorems = false
      continue
    }

    // Theorems array start
    if (trimmed === 'theorems:') {
      inTheorems = true
      continue
    }

    // Theorem item
    if (inTheorems) {
      const thmMatch = trimmed.match(/^-\s+"([^"]+)"/)
      if (thmMatch) {
        current.theorems.push(thmMatch[1])
      }
    }
  }

  if (current) proofs.push(current)
  return proofs
}

/** Strip LaTeX for preview: remove $...$ wrappers and common commands */
function stripLatex(text) {
  return text
    .replace(/\$\$[^$]*\$\$/g, '(...)')      // display math
    .replace(/\$([^$]+)\$/g, '$1')              // inline math — keep content
    .replace(/\\(?:mathcal|mathbb|text|mathrm|operatorname)\{([^}]*)\}/g, '$1')
    .replace(/\\(?:frac|sqrt|sum|prod|int|partial|nabla|infty|leq|geq|neq|approx|equiv|to|mapsto|rightarrow|Rightarrow|leftarrow|subset|subseteq|cup|cap|times|cdot|otimes|oplus|bar|hat|tilde|vec)\b/g, '')
    .replace(/[{}_^\\]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Extract first ~120 chars of a statement (the italicized part after the bold marker) */
function extractStatementPreview(sectionText) {
  // Match: **Type N.N (Name).** *Statement text...*
  // or: **Type N.N (Name).** Statement text...
  const m = sectionText.match(/\*\*[^*]+\*\*\.?\s*\*?([^*\n][^\n]{0,200})/)
  if (!m) return ''
  let preview = stripLatex(m[1].replace(/^\*/, '').trim())
  if (preview.length > 120) preview = preview.slice(0, 117) + '...'
  return preview
}

// ─── Extract Steps ──────────────────────────────────────────────────────────────

function extractSteps(body) {
  const stepRegex = /^###\s+Step\s+(\d+)[:\s]+(.+)$/gm
  const steps = []
  let m
  while ((m = stepRegex.exec(body)) !== null) {
    steps.push({ number: parseInt(m[1]), title: m[2].trim() })
  }
  return steps
}

// ─── Extract Formal Objects ─────────────────────────────────────────────────────

function extractFormalObjects(body) {
  // Match: **Theorem 2.1 (Name).** or **Definition 1.1 (Name).** etc.
  // Also: **Structural Postulate S1 (Name).**
  // Also: **Axiom 1 (Name).**
  const regex = /\*\*(Theorem|Proposition|Corollary|Definition|Lemma|Axiom|Structural Postulate)\s+([\d.]+|S\d+)(?:\s*\(([^)]+)\))?\.?\*\*/g
  const objects = []
  let m
  while ((m = regex.exec(body)) !== null) {
    objects.push({
      type: m[1],
      id: m[2],
      name: m[3] || '',
      // Get a short preview of what follows
      statementPreview: extractStatementPreview(body.slice(m.index, m.index + 500))
    })
  }
  return objects
}

// ─── Extract Structural Postulates ──────────────────────────────────────────────

function extractStructuralPostulates(body) {
  const regex = /\*\*Structural Postulate\s+(S\d+)(?:\s*\(([^)]+)\))?\.?\*\*/g
  const postulates = []
  let m
  while ((m = regex.exec(body)) !== null) {
    postulates.push({ id: m[1], name: m[2] || '' })
  }
  return postulates
}

// ─── Extract Open Gaps ──────────────────────────────────────────────────────────

function extractOpenGaps(body) {
  // Find ## Open Gaps section
  const gapSectionMatch = body.match(/## Open Gaps\s*\n([\s\S]*?)(?=\n## |\n$|$)/)
  if (!gapSectionMatch) return []

  const section = gapSectionMatch[1]
  const gaps = []

  // Match numbered items: 1. **Title**: Description...  (may span multiple lines)
  const lines = section.split('\n')
  let currentGap = null

  for (const line of lines) {
    const gapStart = line.match(/^(\d+)\.\s+\*\*([^*]+)\*\*[:\s]*(.*)/)
    if (gapStart) {
      if (currentGap) gaps.push(currentGap)
      currentGap = {
        number: parseInt(gapStart[1]),
        title: gapStart[2].trim(),
        description: gapStart[3].trim()
      }
    } else if (currentGap && line.trim() && !line.startsWith('#')) {
      // Continuation line
      currentGap.description += ' ' + line.trim()
    }
  }
  if (currentGap) gaps.push(currentGap)

  // Clean up descriptions
  for (const gap of gaps) {
    gap.description = stripLatex(gap.description).slice(0, 200)
  }

  return gaps
}

// ─── Extract Cross-References ───────────────────────────────────────────────────

function extractCrossReferences(body) {
  // Match: [Text](/derivations/some/path) optionally followed by (Theorem X.Y) etc.
  const regex = /\[([^\]]+)\]\(\/derivations\/([^)]+)\)(?:\s*\(([^)]+)\))?/g
  const refs = []
  const seen = new Set()
  let m
  while ((m = regex.exec(body)) !== null) {
    const target = m[2].replace(/\/$/, '')
    const context = m[3] || m[1] || ''
    const key = `${target}::${context}`
    if (!seen.has(key)) {
      seen.add(key)
      refs.push({ target, context: context.slice(0, 80) })
    }
  }
  return refs
}

// ─── Extract Rigor Assessment ───────────────────────────────────────────────────

function extractAssessmentVerdict(body) {
  // Match: **Assessment:** text...  (may span multiple lines until next section)
  const m = body.match(/\*\*Assessment:\*\*\s*(.+?)(?=\n\n|\n## |$)/s)
  if (!m) return ''
  return stripLatex(m[1].trim()).slice(0, 300)
}

// ─── Check for Consistency Model ────────────────────────────────────────────────

function hasConsistencyModel(body) {
  return /^## (Consistency Model|Self-Consistency)/m.test(body)
}

// ─── Process a Single Derivation File ───────────────────────────────────────────

function processDerivation(filePath) {
  const content = readFileSync(filePath, 'utf-8')
  const { data, body } = parseFrontmatter(content)

  // Parse leanProofs separately (nested YAML the simple parser can't handle)
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  const leanProofs = fmMatch ? parseLeanProofs(fmMatch[1]) : []

  // Derive id from path: site/src/content/derivations/axioms/foo.md → axioms/foo
  const relPath = relative(DERIVATIONS_DIR, filePath)
  const id = relPath.replace(/\.md$/, '')
  const group = dirname(relPath)  // axioms, gauge, etc.

  return {
    id,
    filePath: relative(ROOT, filePath),
    title: data.title || basename(filePath, '.md'),
    status: data.status || 'unknown',
    rigorLevel: data.rigorLevel || 'unknown',
    group,
    tags: data.tags || [],
    summary: data.summary || '',
    lastUpdated: data.lastUpdated || null,
    dependsOn: data.dependsOn || [],
    enablesDerivation: data.enablesDerivation || [],
    dependedOnBy: [],  // computed later
    steps: extractSteps(body),
    formalObjects: extractFormalObjects(body),
    structuralPostulates: extractStructuralPostulates(body),
    openGaps: extractOpenGaps(body),
    assessmentVerdict: extractAssessmentVerdict(body),
    hasConsistencyModel: hasConsistencyModel(body),
    crossReferences: { outgoing: extractCrossReferences(body), incoming: [] },
    leanVerification: {
      hasProofs: leanProofs.length > 0,
      proofCount: leanProofs.reduce((sum, p) => sum + p.theorems.length, 0),
      modules: leanProofs.map(p => p.module),
      propositions: leanProofs.map(p => p.proposition),
    },
    upgradeEligible: false,  // computed later
    upgradeBlockers: [],     // computed later
  }
}

// ─── Process a Single Prediction File ───────────────────────────────────────────

function processPrediction(filePath) {
  const content = readFileSync(filePath, 'utf-8')
  const { data } = parseFrontmatter(content)

  const id = basename(filePath, '.md')

  return {
    id,
    filePath: relative(ROOT, filePath),
    title: data.title || id,
    status: data.status || 'unknown',
    testability: data.testability || 'unknown',
    distinctiveness: data.distinctiveness || 'unknown',
    dependsOn: data.dependsOn || [],
    currentEvidence: data.currentEvidence || '',
  }
}

// ─── Process a Single GA Page ────────────────────────────────────────────────────

function processGAPage(filePath) {
  const content = readFileSync(filePath, 'utf-8')
  const { data, body } = parseFrontmatter(content)

  const id = basename(filePath, '.md')

  return {
    id,
    filePath: relative(ROOT, filePath),
    title: data.title || id,
    status: data.status || 'stub',
    gaStructure: data.gaStructure || '',
    targetDerivation: data.targetDerivation || null,
    priority: data.priority || 'moderate',
    summary: data.summary || '',
    tags: data.tags || [],
    lastUpdated: data.lastUpdated || null,
    formalObjects: extractFormalObjects(body),
    openGaps: extractOpenGaps(body),
    crossReferences: extractCrossReferences(body),
  }
}

// ─── SQLite Knowledge Database ──────────────────────────────────────────────────

/** Escape a string for SQL single-quoted literals */
function esc(s) {
  if (s == null) return ''
  return String(s).replace(/'/g, "''")
}

/** Build and write the SQLite knowledge database */
function buildSQLiteDB(index, graph) {
  const lines = []

  // ── Schema ──
  lines.push(`
-- Knowledge database for Observer-Centrism project
-- Generated by scripts/build-index.mjs — do not edit manually
PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;

CREATE TABLE derivations (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  status TEXT NOT NULL,
  rigor_level TEXT,
  group_name TEXT NOT NULL,
  summary TEXT,
  last_updated TEXT,
  assessment_verdict TEXT,
  has_consistency_model INTEGER DEFAULT 0,
  source_section TEXT,
  file_path TEXT
);

CREATE TABLE predictions (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  status TEXT,
  testability TEXT,
  distinctiveness TEXT,
  current_evidence TEXT,
  file_path TEXT
);

CREATE TABLE edges (
  from_id TEXT NOT NULL,
  to_id TEXT NOT NULL,
  PRIMARY KEY (from_id, to_id)
);

CREATE TABLE formal_objects (
  derivation_id TEXT NOT NULL,
  type TEXT NOT NULL,
  obj_id TEXT NOT NULL,
  name TEXT,
  statement_preview TEXT,
  PRIMARY KEY (derivation_id, type, obj_id)
);

CREATE TABLE gaps (
  derivation_id TEXT NOT NULL,
  number INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  PRIMARY KEY (derivation_id, number)
);

CREATE TABLE steps (
  derivation_id TEXT NOT NULL,
  number INTEGER NOT NULL,
  title TEXT NOT NULL,
  PRIMARY KEY (derivation_id, number)
);

CREATE TABLE cross_references (
  source_id TEXT NOT NULL,
  target_id TEXT NOT NULL,
  context TEXT
);

CREATE TABLE tags (
  derivation_id TEXT NOT NULL,
  tag TEXT NOT NULL,
  PRIMARY KEY (derivation_id, tag)
);

CREATE TABLE postulates (
  id TEXT PRIMARY KEY,
  derivation TEXT NOT NULL,
  derivation_title TEXT,
  postulate_id TEXT NOT NULL,
  short_name TEXT,
  statement TEXT,
  justification TEXT,
  group_name TEXT,
  derived_from TEXT,
  derived_from_title TEXT
);

CREATE TABLE lean_proofs (
  derivation_id TEXT NOT NULL,
  module TEXT NOT NULL,
  proposition TEXT,
  theorem_name TEXT
);

CREATE TABLE ga_pages (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  status TEXT NOT NULL,
  ga_structure TEXT,
  target_derivation TEXT,
  priority TEXT,
  summary TEXT,
  last_updated TEXT,
  file_path TEXT
);
`)

  // ── Views ──
  lines.push(`
CREATE VIEW v_status_summary AS
  SELECT status, COUNT(*) as count FROM derivations GROUP BY status ORDER BY count DESC;

CREATE VIEW v_derivation_overview AS
  SELECT d.id, d.title, d.status, d.group_name,
    (SELECT COUNT(*) FROM edges e WHERE e.to_id = d.id) as depends_on_count,
    (SELECT COUNT(*) FROM edges e WHERE e.from_id = d.id) as enables_count,
    (SELECT COUNT(*) FROM formal_objects fo WHERE fo.derivation_id = d.id) as formal_object_count,
    (SELECT COUNT(*) FROM gaps g WHERE g.derivation_id = d.id) as gap_count
  FROM derivations d;

CREATE VIEW v_active_postulates AS
  SELECT * FROM postulates WHERE derived_from IS NULL;

CREATE VIEW v_now_theorems AS
  SELECT * FROM postulates WHERE derived_from IS NOT NULL;

CREATE VIEW v_gaps_by_group AS
  SELECT d.group_name, COUNT(g.number) as gap_count
  FROM derivations d JOIN gaps g ON d.id = g.derivation_id
  GROUP BY d.group_name ORDER BY gap_count DESC;

CREATE VIEW v_ga_status_summary AS
  SELECT status, COUNT(*) as count FROM ga_pages GROUP BY status ORDER BY count DESC;
`)

  // ── Insert derivations ──
  for (const d of Object.values(index.derivations)) {
    lines.push(`INSERT INTO derivations VALUES ('${esc(d.id)}','${esc(d.title)}','${esc(d.status)}','${esc(d.rigorLevel)}','${esc(d.group)}','${esc(d.summary)}','${esc(d.lastUpdated)}','${esc(d.assessmentVerdict)}',${d.hasConsistencyModel ? 1 : 0},'${esc(d.sourceSection)}','${esc(d.filePath)}');`)
  }

  // ── Insert predictions ──
  for (const p of Object.values(index.predictions)) {
    lines.push(`INSERT INTO predictions VALUES ('${esc(p.id)}','${esc(p.title)}','${esc(p.status)}','${esc(p.testability)}','${esc(p.distinctiveness)}','${esc(p.currentEvidence)}','${esc(p.filePath)}');`)
  }

  // ── Insert edges (from dependency graph) ──
  for (const e of graph.edges) {
    lines.push(`INSERT OR IGNORE INTO edges VALUES ('${esc(e.from)}','${esc(e.to)}');`)
  }

  // ── Insert formal objects ──
  for (const fo of index.allFormalObjects) {
    lines.push(`INSERT OR IGNORE INTO formal_objects VALUES ('${esc(fo.derivationId)}','${esc(fo.type)}','${esc(fo.id)}','${esc(fo.name)}','${esc(fo.statementPreview || '')}');`)
  }

  // ── Insert open gaps ──
  for (const gap of index.allOpenGaps) {
    lines.push(`INSERT OR IGNORE INTO gaps VALUES ('${esc(gap.derivationId)}',${gap.number},'${esc(gap.title)}','${esc(gap.description)}');`)
  }

  // ── Insert steps ──
  for (const d of Object.values(index.derivations)) {
    for (const step of d.steps) {
      lines.push(`INSERT OR IGNORE INTO steps VALUES ('${esc(d.id)}',${step.number},'${esc(step.title)}');`)
    }
  }

  // ── Insert cross-references ──
  for (const d of Object.values(index.derivations)) {
    for (const ref of d.crossReferences.outgoing) {
      lines.push(`INSERT INTO cross_references VALUES ('${esc(d.id)}','${esc(ref.target)}','${esc(ref.context)}');`)
    }
  }

  // ── Insert tags ──
  for (const d of Object.values(index.derivations)) {
    for (const tag of d.tags) {
      lines.push(`INSERT OR IGNORE INTO tags VALUES ('${esc(d.id)}','${esc(tag)}');`)
    }
  }

  // ── Insert postulates (from structural-postulates.json) ──
  if (existsSync(POSTULATES_PATH)) {
    const postulates = JSON.parse(readFileSync(POSTULATES_PATH, 'utf-8'))
    for (const p of postulates) {
      lines.push(`INSERT OR IGNORE INTO postulates VALUES ('${esc(p.id)}','${esc(p.derivation)}','${esc(p.derivationTitle)}','${esc(p.postulateId)}','${esc(p.shortName)}','${esc(p.statement)}','${esc(p.justification)}','${esc(p.group)}',${p.derivedFrom ? `'${esc(p.derivedFrom)}'` : 'NULL'},${p.derivedFromTitle ? `'${esc(p.derivedFromTitle)}'` : 'NULL'});`)
    }
  }

  // ── Insert Lean proofs ──
  for (const d of Object.values(index.derivations)) {
    if (!d.leanVerification.hasProofs) continue
    // Reconstruct from the stored verification data
    for (let i = 0; i < d.leanVerification.modules.length; i++) {
      const mod = d.leanVerification.modules[i]
      const prop = d.leanVerification.propositions[i] || ''
      // We don't have individual theorem names per module in the index,
      // so insert one row per module with proposition
      lines.push(`INSERT INTO lean_proofs VALUES ('${esc(d.id)}','${esc(mod)}','${esc(prop)}','');`)
    }
  }

  // ── Insert GA pages ──
  if (index.gaPages) {
    for (const ga of Object.values(index.gaPages)) {
      lines.push(`INSERT INTO ga_pages VALUES ('${esc(ga.id)}','${esc(ga.title)}','${esc(ga.status)}','${esc(ga.gaStructure)}','${esc(ga.targetDerivation)}','${esc(ga.priority)}','${esc(ga.summary)}','${esc(ga.lastUpdated)}','${esc(ga.filePath)}');`)
    }
  }

  // ── Write and execute ──
  const sqlContent = lines.join('\n')

  // Remove existing DB
  if (existsSync(DB_PATH)) unlinkSync(DB_PATH)

  // Write temp SQL file
  writeFileSync(SQL_TEMP_PATH, sqlContent)

  try {
    execSync(`sqlite3 "${DB_PATH}" < "${SQL_TEMP_PATH}"`, { stdio: 'pipe' })
  } finally {
    // Clean up temp file
    if (existsSync(SQL_TEMP_PATH)) unlinkSync(SQL_TEMP_PATH)
  }

  // Report size
  const dbSize = statSync(DB_PATH).size
  const dbSizeKB = (dbSize / 1024).toFixed(0)
  console.log(`  SQLite DB:       ${relative(ROOT, DB_PATH)} (${dbSizeKB} KB)`)
}

// ─── Main ───────────────────────────────────────────────────────────────────────

function main() {
  console.log('Building knowledge index...\n')

  // Load dependency graph for validation
  const graph = JSON.parse(readFileSync(GRAPH_PATH, 'utf-8'))
  const graphNodeIds = new Set(graph.nodes.map(n => n.id))

  // ── Process derivations ──
  const derivationFiles = collectMdFiles(DERIVATIONS_DIR)
  const derivations = {}
  for (const f of derivationFiles) {
    const d = processDerivation(f)
    derivations[d.id] = d
  }

  // ── Process predictions ──
  const predictionFiles = collectMdFiles(PREDICTIONS_DIR)
  const predictions = {}
  for (const f of predictionFiles) {
    const p = processPrediction(f)
    predictions[p.id] = p
  }

  // ── Process GA pages (separate from main derivations) ──
  const gaPages = {}
  if (existsSync(GA_DIR)) {
    const gaFiles = collectMdFiles(GA_DIR)
    for (const f of gaFiles) {
      const ga = processGAPage(f)
      gaPages[ga.id] = ga
    }
  }

  // ── Compute reverse dependencies (dependedOnBy) ──
  for (const d of Object.values(derivations)) {
    for (const depId of d.dependsOn) {
      if (derivations[depId]) {
        derivations[depId].dependedOnBy.push(d.id)
      }
    }
  }

  // ── Compute incoming cross-references ──
  for (const d of Object.values(derivations)) {
    for (const ref of d.crossReferences.outgoing) {
      if (derivations[ref.target]) {
        derivations[ref.target].crossReferences.incoming.push({
          source: d.id,
          context: ref.context
        })
      }
    }
  }

  // ── Compute upgrade eligibility ──
  const upgradeEligible = []
  const upgradeBlocked = []

  for (const d of Object.values(derivations)) {
    if (d.status !== 'draft') continue

    const draftDeps = d.dependsOn.filter(depId => {
      const dep = derivations[depId]
      return dep && dep.status === 'draft'
    })

    if (draftDeps.length === 0) {
      d.upgradeEligible = true
      upgradeEligible.push({
        id: d.id,
        currentStatus: d.status,
        gapCount: d.openGaps.length,
        formalObjectCount: d.formalObjects.length,
      })
    } else {
      d.upgradeBlockers = draftDeps
      upgradeBlocked.push({
        id: d.id,
        currentStatus: d.status,
        blockedBy: draftDeps,
        reason: `Depends on ${draftDeps.length} draft derivation(s)`,
      })
    }
  }

  // ── Build flat arrays ──
  const allFormalObjects = []
  const allOpenGaps = []

  for (const d of Object.values(derivations)) {
    for (const fo of d.formalObjects) {
      allFormalObjects.push({
        derivationId: d.id,
        type: fo.type,
        id: fo.id,
        name: fo.name,
        fullRef: `${d.id}:${fo.type} ${fo.id}`,
      })
    }
    for (const gap of d.openGaps) {
      allOpenGaps.push({
        derivationId: d.id,
        derivationStatus: d.status,
        number: gap.number,
        title: gap.title,
        description: gap.description,
      })
    }
  }

  // ── Compute stats ──
  const byStatus = {}
  for (const d of Object.values(derivations)) {
    byStatus[d.status] = (byStatus[d.status] || 0) + 1
  }

  const leanVerifiedCount = Object.values(derivations).filter(d => d.leanVerification.hasProofs).length
  const leanTheoremCount = Object.values(derivations).reduce((sum, d) => sum + d.leanVerification.proofCount, 0)

  // ── Compute GA stats (separate from main derivation stats) ──
  const gaByStatus = {}
  for (const ga of Object.values(gaPages)) {
    gaByStatus[ga.status] = (gaByStatus[ga.status] || 0) + 1
  }
  const gaStats = {
    pageCount: Object.keys(gaPages).length,
    byStatus: gaByStatus,
    byPriority: {
      high: Object.values(gaPages).filter(ga => ga.priority === 'high').length,
      moderate: Object.values(gaPages).filter(ga => ga.priority === 'moderate').length,
      low: Object.values(gaPages).filter(ga => ga.priority === 'low').length,
    },
  }

  const stats = {
    byStatus,
    derivationCount: Object.keys(derivations).length,
    predictionCount: Object.keys(predictions).length,
    edgeCount: graph.edges.length,
    formalObjectCount: allFormalObjects.length,
    openGapCount: allOpenGaps.length,
    upgradeEligibleCount: upgradeEligible.length,
    leanVerifiedCount,
    leanTheoremCount,
  }

  // ── Validation: cross-check graph nodes vs files ──
  const fileIds = new Set(Object.keys(derivations))
  const warnings = []

  for (const nodeId of graphNodeIds) {
    if (!fileIds.has(nodeId)) {
      warnings.push(`Graph node "${nodeId}" has no corresponding derivation file`)
    }
  }
  for (const fileId of fileIds) {
    if (!graphNodeIds.has(fileId)) {
      warnings.push(`Derivation file "${fileId}" has no corresponding graph node`)
    }
  }

  // Check dependsOn references are valid
  for (const d of Object.values(derivations)) {
    for (const depId of d.dependsOn) {
      if (!derivations[depId]) {
        warnings.push(`${d.id}: dependsOn "${depId}" not found in derivation files`)
      }
    }
  }

  // ── Assemble index ──
  const index = {
    meta: {
      generatedAt: new Date().toISOString(),
      derivationCount: stats.derivationCount,
      predictionCount: stats.predictionCount,
      gaPageCount: gaStats.pageCount,
      generator: 'scripts/build-index.mjs',
    },
    stats,
    derivations,
    predictions,
    gaPages,
    gaStats,
    allFormalObjects,
    allOpenGaps,
    upgradeAnalysis: {
      eligible: upgradeEligible,
      blocked: upgradeBlocked,
    },
    warnings,
  }

  // ── Write JSON output ──
  writeFileSync(OUTPUT_PATH, JSON.stringify(index, null, 2) + '\n')

  // ── Build SQLite database ──
  try {
    buildSQLiteDB(index, graph)
  } catch (err) {
    console.error(`  ⚠ SQLite build failed: ${err.message}`)
    console.error('    (knowledge-index.json was still generated successfully)')
  }

  // ── Extract references ──
  try {
    execSync(`node ${join(ROOT, 'scripts/extract-references.mjs')}`, { stdio: 'inherit' })
  } catch (err) {
    console.error(`  ⚠ Reference extraction failed: ${err.message}`)
    console.error('    (knowledge-index.json was still generated successfully)')
  }

  // ── Print summary ──
  console.log('═══════════════════════════════════════════════════')
  console.log('  KNOWLEDGE INDEX GENERATED')
  console.log('═══════════════════════════════════════════════════')
  console.log()
  console.log(`  Derivations:     ${stats.derivationCount}`)
  console.log(`  Predictions:     ${stats.predictionCount}`)
  console.log(`  Graph edges:     ${stats.edgeCount}`)
  console.log(`  Formal objects:  ${stats.formalObjectCount}`)
  console.log(`  Open gaps:       ${stats.openGapCount}`)
  console.log()
  console.log('  Status breakdown:')
  for (const [status, count] of Object.entries(byStatus).sort((a, b) => b[1] - a[1])) {
    console.log(`    ${status.padEnd(15)} ${count}`)
  }
  console.log()
  console.log(`  Upgrade-eligible drafts: ${upgradeEligible.length}`)
  for (const e of upgradeEligible) {
    console.log(`    → ${e.id} (${e.gapCount} gaps, ${e.formalObjectCount} formal objects)`)
  }
  if (upgradeBlocked.length > 0) {
    console.log(`  Upgrade-blocked drafts:  ${upgradeBlocked.length}`)
    for (const b of upgradeBlocked) {
      console.log(`    ✗ ${b.id} — blocked by: ${b.blockedBy.join(', ')}`)
    }
  }
  if (leanVerifiedCount > 0) {
    console.log(`  Lean-verified derivations: ${leanVerifiedCount} (${leanTheoremCount} theorems)`)
    for (const d of Object.values(derivations).filter(d => d.leanVerification.hasProofs)) {
      console.log(`    ✓ ${d.id} (${d.leanVerification.proofCount} theorems: ${d.leanVerification.propositions.join(', ')})`)
    }
    console.log()
  }
  if (gaStats.pageCount > 0) {
    console.log(`  GA Exploration pages: ${gaStats.pageCount}`)
    console.log('  GA status breakdown:')
    for (const [status, count] of Object.entries(gaByStatus).sort((a, b) => b[1] - a[1])) {
      console.log(`    ${status.padEnd(15)} ${count}`)
    }
    console.log(`  GA priority: ${gaStats.byPriority.high} high, ${gaStats.byPriority.moderate} moderate, ${gaStats.byPriority.low} low`)
    console.log()
  }
  if (warnings.length > 0) {
    console.log(`  ⚠ Warnings (${warnings.length}):`)
    for (const w of warnings) {
      console.log(`    ${w}`)
    }
  } else {
    console.log('  ✓ No warnings — graph and files are in sync')
  }
  console.log()
  console.log(`  JSON output: ${relative(ROOT, OUTPUT_PATH)}`)
  if (existsSync(DB_PATH)) {
    console.log(`  SQLite DB:   ${relative(ROOT, DB_PATH)}`)
  }
  console.log('═══════════════════════════════════════════════════')
}

main()
