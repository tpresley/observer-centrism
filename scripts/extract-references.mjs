#!/usr/bin/env node
/**
 * extract-references.mjs — Academic reference extractor for the observer-centrism project.
 *
 * Scans all derivation, prediction, guide, and source markdown files for
 * parenthetical citations (e.g., "(Lieb & Ruskai, 1973)"), normalizes and
 * deduplicates them, and writes a reference index JSON file.
 *
 * No external dependencies — uses only Node built-ins.
 *
 * Usage:  node scripts/extract-references.mjs
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join, relative } from 'path'

// ─── Paths ──────────────────────────────────────────────────────────────────────
const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '')
const CONTENT_DIR = join(ROOT, 'site/src/content')
const DERIVATIONS_DIR = join(CONTENT_DIR, 'derivations')
const PREDICTIONS_DIR = join(CONTENT_DIR, 'predictions')
const GUIDE_DIR = join(CONTENT_DIR, 'guide')
const SOURCE_DIR = join(CONTENT_DIR, 'source')
const INDEX_PATH = join(ROOT, 'site/src/data/knowledge-index.json')
const OUTPUT_PATH = join(ROOT, 'site/src/data/references-index.json')

// ─── Category overrides for well-known references ───────────────────────────────
const CATEGORY_OVERRIDES = {
  'hurwitz-1898': 'mathematical-foundations',
  'aczel-1966': 'mathematical-foundations',
  'aczel-dhombres-1989': 'mathematical-foundations',
  'klein-1884': 'mathematical-foundations',
  'smale-1961': 'mathematical-foundations',
  'moise-1952': 'mathematical-foundations',
  'lovelock-1971': 'spacetime-geometry',
  'penrose-1965': 'spacetime-geometry',
  'hawking-1967': 'spacetime-geometry',
  'einstein-1915': 'spacetime-geometry',
  'jacobson-1995': 'spacetime-geometry',
  'jacobson-1991': 'spacetime-geometry',
  'unruh-1976': 'quantum-mechanics',
  'unruh-1995': 'quantum-mechanics',
  'lieb-ruskai-1973': 'quantum-information',
  'araki-lieb-1970': 'quantum-information',
  'bennett-bernstein-popescu-schumacher-1996': 'quantum-information',
  'schumacher-1995': 'quantum-information',
  'groisman-popescu-winter-2005': 'quantum-information',
  'pauli-1940': 'quantum-mechanics',
  'bell-1964': 'quantum-mechanics',
  'born-1926': 'quantum-mechanics',
  'gleason-1957': 'quantum-mechanics',
  'bombelli-lee-meyer-sorkin-1987': 'spacetime-geometry',
  'bombelli-1987': 'spacetime-geometry',
  'coleman-weinberg-1973': 'field-theory',
  'coleman-mandula-1967': 'field-theory',
  'fujikawa-1979': 'field-theory',
  'wetterich-1993': 'field-theory',
  'morris-1994': 'field-theory',
  'peccei-quinn-1977': 'particle-physics',
  'maldacena-susskind-2013': 'holography',
  'page-1993': 'holography',
  'rovelli-vidotto-2014': 'spacetime-geometry',
  'ashtekar-singh-2011': 'spacetime-geometry',
  'tegmark-1997': 'cosmology',
  'weinberg-1987': 'cosmology',
  'chou-2017': 'experimental',
  'abel-2020': 'experimental',
  'wu-1957': 'experimental',
  'dixon-1994': 'mathematical-foundations',
  'furey-2016': 'particle-physics',
  'stoica-2018': 'particle-physics',
  'rovelli-1996': 'quantum-mechanics',
  'haag-lopuszanski-sohnius-1975': 'field-theory',
  'moreno-1998': 'mathematical-foundations',
  'petz-1996': 'quantum-information',
  'leinaas-myrheim-1977': 'quantum-mechanics',
  'laidlaw-dewitt-1971': 'quantum-mechanics',
  'machacek-vaughn-1984': 'field-theory',
  'sekino-susskind-2008': 'holography',
  'almheiri-2019': 'holography',
  'brightwell-gregory-1991': 'spacetime-geometry',
  'dowker-2004': 'spacetime-geometry',
  'corley-jacobson-1996': 'spacetime-geometry',
  'brout-1995': 'spacetime-geometry',
  'aharonov-albert-vaidman-1988': 'quantum-mechanics',
  'ma-2001': 'particle-physics',
  'altarelli-feruglio-2005': 'particle-physics',
  'king-2013': 'particle-physics',
}

// Map derivation group directory to reference category
const GROUP_TO_CATEGORY = {
  'axioms': 'quantum-information',
  'foundation': 'quantum-information',
  'minimal-observer': 'quantum-mechanics',
  'interactions': 'field-theory',
  'thermodynamics': 'field-theory',
  'dimensions': 'spacetime-geometry',
  'spacetime': 'spacetime-geometry',
  'quantum': 'quantum-mechanics',
  'particles': 'particle-physics',
  'gauge': 'particle-physics',
  'holography': 'holography',
  'flavor': 'particle-physics',
  'cosmology': 'cosmology',
  'thermodynamics-ext': 'field-theory',
}

const CATEGORY_NAMES = {
  'mathematical-foundations': 'Mathematical Foundations',
  'quantum-mechanics': 'Quantum Mechanics',
  'quantum-information': 'Quantum Information',
  'field-theory': 'Field Theory',
  'spacetime-geometry': 'Spacetime & Geometry',
  'cosmology': 'Cosmology',
  'particle-physics': 'Particle Physics',
  'holography': 'Holography & Black Holes',
  'experimental': 'Experimental',
}

const CATEGORY_ORDER = [
  'mathematical-foundations',
  'quantum-mechanics',
  'quantum-information',
  'field-theory',
  'spacetime-geometry',
  'particle-physics',
  'holography',
  'cosmology',
  'experimental',
]

// ─── Helpers ────────────────────────────────────────────────────────────────────

/** Recursively collect all .md files under a directory */
function collectMdFiles(dir) {
  const results = []
  try {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name)
      if (entry.isDirectory()) {
        results.push(...collectMdFiles(full))
      } else if (entry.name.endsWith('.md')) {
        results.push(full)
      }
    }
  } catch {
    // directory doesn't exist — skip silently
  }
  return results.sort()
}

/** Parse YAML-like frontmatter to extract title */
function extractTitle(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return null
  const titleMatch = match[1].match(/^title:\s*"(.+)"/m)
  return titleMatch ? titleMatch[1] : null
}

/** Strip frontmatter from content, return body only */
function stripFrontmatter(content) {
  return content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '')
}

/** Normalize author string for dedup key generation */
function normalizeForKey(authors, year) {
  return authors
    .toLowerCase()
    .replace(/[–—]/g, '-')        // normalize dashes
    .replace(/\s*&\s*/g, '-')     // & → hyphen
    .replace(/\s+and\s+/g, '-')   // and → hyphen
    .replace(/,\s*/g, '-')        // commas → hyphen
    .replace(/\s+/g, '-')         // spaces → hyphen
    .replace(/[.']/g, '')         // remove dots and apostrophes
    .replace(/et-al-?/g, '')      // remove et al
    .replace(/-+/g, '-')          // collapse multiple hyphens
    .replace(/^-|-$/g, '')        // trim leading/trailing hyphens
    + '-' + year
}

/** Check if a string looks like a genuine author name (not a physics term) */
function isLikelyAuthor(text) {
  // Filter out common false positives
  const BLACKLIST = new Set([
    'step', 'theorem', 'proposition', 'corollary', 'definition', 'lemma',
    'remark', 'proof', 'example', 'equation', 'section', 'chapter',
    'figure', 'table', 'appendix', 'note', 'see', 'from', 'where',
    'since', 'because', 'given', 'assuming', 'using', 'hence', 'thus',
    'therefore', 'type', 'class', 'group', 'case', 'part', 'item',
    'discovered', 'measured', 'observed', 'confirmed', 'predicted',
    'described', 'introduced', 'defined', 'shown', 'proved', 'derived',
    'established', 'spin', 'mass', 'energy', 'force', 'field',
    'dimension', 'gauge', 'loop', 'axiom', 'condition', 'constraint',
    'phase', 'amplitude', 'angle', 'coupling', 'constant', 'ratio',
    'bound', 'limit', 'scale', 'level', 'order', 'term', 'factor',
    'contribution', 'correction', 'effect', 'mechanism', 'process',
    'structure', 'symmetry', 'invariance', 'conservation', 'transformation',
    'density', 'potential', 'metric', 'tensor', 'operator', 'function',
    'space', 'surface', 'manifold', 'bundle', 'fiber', 'section',
    'review', 'overview', 'summary', 'rigorous', 'formal', 'semi',
    'draft', 'provisional', 'stub', 'status', 'e.g', 'i.e',
    'mod', 'round', 'here', 'exactly', 'approximately', 'roughly',
    'typically', 'currently', 'previously', 'generally', 'specifically',
    'coherence', 'observer', 'boundary', 'interaction', 'evolution',
    'state', 'spectrum', 'particle', 'boson', 'fermion', 'quark', 'lepton',
    'higgs', 'neutrino', 'photon', 'gluon', 'graviton',
  ])

  const lower = text.toLowerCase().trim()
  if (BLACKLIST.has(lower)) return false

  // Must start with uppercase letter (proper noun)
  if (!/^[A-Z]/.test(text.trim())) return false

  // Must not be all uppercase (likely an acronym like AMPS — except short ones are OK)
  if (/^[A-Z]{5,}$/.test(text.trim())) return false

  // Very short single words that aren't names
  if (text.trim().length < 2) return false

  return true
}

// ─── Citation extraction ────────────────────────────────────────────────────────

/**
 * Extract citations from markdown body text.
 * Supports both the new markdown reference link format [Author, Year] and
 * legacy parenthetical format (Author, Year).
 * Returns array of { authors, year, rawText }
 */
function extractCitations(body) {
  const citations = []
  let match

  // ─── Primary: Markdown reference link definitions ──────────────────────────
  // These are at the bottom of files after conversion: [Author, Year]: /references#id
  const linkDefRegex = /^\[([^\]]+)\]:\s*\/references#([\w-]+)\s*$/gm
  while ((match = linkDefRegex.exec(body)) !== null) {
    const displayText = match[1]
    const yearMatch = displayText.match(/\b(1[6-9]\d{2}|20[0-2]\d)\b/)
    if (!yearMatch) continue
    const year = yearMatch[1]
    let authors = displayText.slice(0, yearMatch.index).replace(/[,\s]+$/, '').trim()
    if (!authors) continue
    // Clean et al.
    authors = authors.replace(/\s+et\s+al\.?$/, ' et al.')
    citations.push({ authors, year, rawText: displayText })
  }

  // If we found link definitions, skip legacy patterns (the file has been converted)
  if (citations.length > 0) return citations

  // ─── Fallback: Legacy parenthetical citations ──────────────────────────────
  const parenRegex = /\(([^()]*?\b(?:1[6-9]\d{2}|20[0-2]\d))\)/g
  while ((match = parenRegex.exec(body)) !== null) {
    const inner = match[1].trim()

    if (/[$\\]/.test(inner)) continue
    if (/^\d+$/.test(inner)) continue
    if (/^\[/.test(inner)) continue
    if (/^\d{4}$/.test(inner)) continue

    const parts = inner.split(/\s*;\s*|\s*,\s*(?=\s*[A-Z][a-z])/)
    for (const part of parts) {
      const parsed = parseSingleCitation(part.trim())
      if (parsed) {
        citations.push({ ...parsed, rawText: part.trim() })
      }
    }
  }

  // Pattern 2: "Author's theorem (Year)"
  const namedTheoremRegex = /([A-Z][a-zà-ü]+(?:[–-][A-Z][a-zà-ü]+)*)'?s?\s+(?:theorem|inequality|lemma|conjecture|principle|formula|equation|bound|rule|construction|criterion|model|mechanism|effect|experiment|result|law|hypothesis|ansatz|metric|potential)\s+\((\d{4})\)/g
  while ((match = namedTheoremRegex.exec(body)) !== null) {
    const authors = match[1]
    const year = match[2]
    if (isLikelyAuthor(authors)) {
      citations.push({ authors, year, rawText: `${authors}, ${year}` })
    }
  }

  // Pattern 3: "Author–Author theorem (Year)" with en-dash
  const dashTheoremRegex = /([A-Z][a-zà-ü]+[–-][A-Z][a-zà-ü]+(?:[–-][A-Z][a-zà-ü]+)*)\s+(?:theorem|inequality|lemma|result)\s+\((\d{4})\)/g
  while ((match = dashTheoremRegex.exec(body)) !== null) {
    const authors = match[1].replace(/[–]/g, ' & ')
    const year = match[2]
    citations.push({ authors, year, rawText: `${match[1]}, ${year}` })
  }

  return citations
}

/**
 * Parse a single citation string like "Lieb & Ruskai, 1973" into { authors, year }
 */
function parseSingleCitation(text) {
  // Extract year (last 4-digit number)
  const yearMatch = text.match(/\b(1[6-9]\d{2}|20[0-2]\d)\b/)
  if (!yearMatch) return null
  const year = yearMatch[1]

  // Extract author portion (everything before the year, minus trailing comma/space)
  let authors = text.slice(0, yearMatch.index).replace(/[,\s]+$/, '').trim()

  // Skip if no author portion
  if (!authors) return null

  // Skip entries that don't look like author names
  // Must contain at least one capitalized word
  if (!/[A-Z][a-zà-ü]/.test(authors)) {
    // Allow all-caps short forms like AMPS, ADMX
    if (!/^[A-Z]{2,6}$/.test(authors)) return null
  }

  // Clean up "et al." variants
  authors = authors.replace(/\s+et\s+al\.?$/, ' et al.')

  // Skip if it's clearly not a citation (common false positives)
  if (/^(?:Step|Type|Round|Tier|Gap|Part|Stage|Figure|Table|Axiom|C\d)\b/i.test(authors)) return null
  if (/^\d/.test(authors)) return null  // starts with number

  // Additional filter: author should have at least one word starting with uppercase
  const words = authors.split(/[\s,&]+/).filter(w => w.length > 0 && w !== 'et' && w !== 'al.' && w !== 'and')
  const hasUpperWord = words.some(w => /^[A-Z]/.test(w))
  if (!hasUpperWord) return null

  // Filter out common non-citation parens
  if (/^(?:see|cf|viz|note|i\.e|e\.g|roughly|approximately)/i.test(authors)) return null

  return { authors, year }
}

// ─── Main ───────────────────────────────────────────────────────────────────────

function main() {
  console.log('Extracting academic references...\n')

  // Load knowledge index for derivation titles
  let knowledgeIndex = {}
  try {
    knowledgeIndex = JSON.parse(readFileSync(INDEX_PATH, 'utf-8'))
  } catch {
    console.warn('  Warning: knowledge-index.json not found. Titles will be derived from filenames.')
  }

  // Collect all markdown files
  const dirs = [
    { dir: DERIVATIONS_DIR, prefix: '' },
    { dir: PREDICTIONS_DIR, prefix: 'predictions' },
    { dir: GUIDE_DIR, prefix: 'guide' },
    { dir: SOURCE_DIR, prefix: 'source' },
  ]

  // Map: normalized key → reference entry
  const refMap = new Map()

  let totalFiles = 0
  let totalCitations = 0

  for (const { dir, prefix } of dirs) {
    const files = collectMdFiles(dir)
    for (const filepath of files) {
      totalFiles++
      const content = readFileSync(filepath, 'utf-8')
      const title = extractTitle(content) || filepath.split('/').pop().replace('.md', '')
      const body = stripFrontmatter(content)

      // Compute derivation ID (relative path without .md)
      let derivId
      if (prefix === '') {
        derivId = relative(DERIVATIONS_DIR, filepath).replace(/\.md$/, '')
      } else if (prefix === 'predictions') {
        derivId = 'predictions/' + relative(PREDICTIONS_DIR, filepath).replace(/\.md$/, '')
      } else if (prefix === 'guide') {
        derivId = 'guide/' + relative(GUIDE_DIR, filepath).replace(/\.md$/, '')
      } else {
        derivId = 'source/' + relative(SOURCE_DIR, filepath).replace(/\.md$/, '')
      }

      const group = prefix === '' ? derivId.split('/')[0] : prefix

      const citations = extractCitations(body)
      totalCitations += citations.length

      for (const cit of citations) {
        const key = normalizeForKey(cit.authors, cit.year)

        if (!refMap.has(key)) {
          // Determine category
          const category = CATEGORY_OVERRIDES[key] || GROUP_TO_CATEGORY[group] || 'field-theory'

          refMap.set(key, {
            id: key,
            authors: cit.authors,
            year: parseInt(cit.year),
            citedAs: new Set(),
            citedIn: new Map(), // derivId → title
            category,
          })
        }

        const ref = refMap.get(key)
        ref.citedAs.add(cit.rawText)
        if (!ref.citedIn.has(derivId)) {
          // Look up title from knowledge index
          const kiTitle = knowledgeIndex.derivations?.[derivId]?.title
          ref.citedIn.set(derivId, kiTitle || title)
        }

        // Prefer longer author names over "et al." forms
        if (cit.authors.length > ref.authors.length && !cit.authors.includes('et al')) {
          ref.authors = cit.authors
        }
      }
    }
  }

  // Convert to sorted array
  const references = [...refMap.values()]
    .map(ref => ({
      id: ref.id,
      authors: ref.authors,
      year: ref.year,
      citedAs: [...ref.citedAs].sort(),
      citedIn: [...ref.citedIn.entries()]
        .map(([id, title]) => ({ derivationId: id, title }))
        .sort((a, b) => a.derivationId.localeCompare(b.derivationId)),
      category: ref.category,
    }))
    .sort((a, b) => {
      // Sort by category order, then by author, then by year
      const catA = CATEGORY_ORDER.indexOf(a.category)
      const catB = CATEGORY_ORDER.indexOf(b.category)
      if (catA !== catB) return catA - catB
      const authCmp = a.authors.localeCompare(b.authors)
      if (authCmp !== 0) return authCmp
      return a.year - b.year
    })

  // Build category stats
  const byCategory = {}
  for (const cat of CATEGORY_ORDER) {
    const count = references.filter(r => r.category === cat).length
    if (count > 0) {
      byCategory[cat] = { name: CATEGORY_NAMES[cat], count }
    }
  }

  const citingDerivations = new Set()
  for (const ref of references) {
    for (const c of ref.citedIn) {
      citingDerivations.add(c.derivationId)
    }
  }

  const output = {
    meta: {
      generatedAt: new Date().toISOString(),
      totalReferences: references.length,
      totalCitations: totalCitations,
      citingFiles: citingDerivations.size,
      generator: 'scripts/extract-references.mjs',
    },
    categoryNames: CATEGORY_NAMES,
    categoryOrder: CATEGORY_ORDER,
    byCategory,
    references,
  }

  writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2) + '\n')

  // Print summary
  console.log('═══════════════════════════════════════════════════')
  console.log('  REFERENCE INDEX GENERATED')
  console.log('═══════════════════════════════════════════════════')
  console.log()
  console.log(`  Files scanned:     ${totalFiles}`)
  console.log(`  Citations found:   ${totalCitations}`)
  console.log(`  Unique references: ${references.length}`)
  console.log(`  Citing files:      ${citingDerivations.size}`)
  console.log()
  console.log('  By category:')
  for (const cat of CATEGORY_ORDER) {
    if (byCategory[cat]) {
      console.log(`    ${CATEGORY_NAMES[cat].padEnd(28)} ${byCategory[cat].count}`)
    }
  }
  console.log()
  console.log('  Most cited:')
  const topRefs = [...references]
    .sort((a, b) => b.citedIn.length - a.citedIn.length)
    .slice(0, 10)
  for (const r of topRefs) {
    console.log(`    ${r.authors} (${r.year}) — cited in ${r.citedIn.length} file${r.citedIn.length > 1 ? 's' : ''}`)
  }
  console.log()
  console.log(`  Output: ${relative(ROOT, OUTPUT_PATH)}`)
  console.log('═══════════════════════════════════════════════════')
}

main()
