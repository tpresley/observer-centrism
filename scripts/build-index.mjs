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

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'fs'
import { join, relative, basename, dirname } from 'path'

// ─── Paths ──────────────────────────────────────────────────────────────────────
const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '')
const DERIVATIONS_DIR = join(ROOT, 'site/src/content/derivations')
const PREDICTIONS_DIR = join(ROOT, 'site/src/content/predictions')
const GRAPH_PATH = join(ROOT, 'site/src/data/dependency-graph.json')
const OUTPUT_PATH = join(ROOT, 'site/src/data/knowledge-index.json')

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

  const stats = {
    byStatus,
    derivationCount: Object.keys(derivations).length,
    predictionCount: Object.keys(predictions).length,
    edgeCount: graph.edges.length,
    formalObjectCount: allFormalObjects.length,
    openGapCount: allOpenGaps.length,
    upgradeEligibleCount: upgradeEligible.length,
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
      generator: 'scripts/build-index.mjs',
    },
    stats,
    derivations,
    predictions,
    allFormalObjects,
    allOpenGaps,
    upgradeAnalysis: {
      eligible: upgradeEligible,
      blocked: upgradeBlocked,
    },
    warnings,
  }

  // ── Write output ──
  writeFileSync(OUTPUT_PATH, JSON.stringify(index, null, 2) + '\n')

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
  console.log()
  if (warnings.length > 0) {
    console.log(`  ⚠ Warnings (${warnings.length}):`)
    for (const w of warnings) {
      console.log(`    ${w}`)
    }
  } else {
    console.log('  ✓ No warnings — graph and files are in sync')
  }
  console.log()
  console.log(`  Output: ${relative(ROOT, OUTPUT_PATH)}`)
  console.log('═══════════════════════════════════════════════════')
}

main()
