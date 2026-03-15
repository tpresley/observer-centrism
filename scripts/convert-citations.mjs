#!/usr/bin/env node
/**
 * convert-citations.mjs — One-time batch conversion of inline parenthetical
 * citations to markdown reference links.
 *
 * Before: ...unique smooth structure (Moise, 1952).
 * After:  ...unique smooth structure [Moise, 1952].
 *
 * Appends link definitions at the bottom of each file:
 *   <!-- References -->
 *   [Moise, 1952]: /references#moise-1952
 *
 * Usage:
 *   node scripts/convert-citations.mjs --dry-run   # preview changes
 *   node scripts/convert-citations.mjs              # apply changes
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join, relative } from 'path'

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '')
const CONTENT_DIR = join(ROOT, 'site/src/content')
const DRY_RUN = process.argv.includes('--dry-run')

// ─── Helpers ─────────────────────────────────────────────────────────────────

function collectMdFiles(dir) {
  const results = []
  try {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name)
      if (entry.isDirectory()) results.push(...collectMdFiles(full))
      else if (entry.name.endsWith('.md')) results.push(full)
    }
  } catch { /* skip */ }
  return results.sort()
}

function normalizeForKey(authors, year) {
  return authors
    .toLowerCase()
    .replace(/[–—]/g, '-')
    .replace(/\s*&\s*/g, '-')
    .replace(/\s+and\s+/g, '-')
    .replace(/,\s*/g, '-')
    .replace(/\s+/g, '-')
    .replace(/[.'ʼ']/g, '')
    .replace(/et-al-?/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    + '-' + year
}

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
  'draft', 'provisional', 'stub', 'status',
  'mod', 'round', 'here', 'exactly', 'approximately', 'roughly',
  'typically', 'currently', 'previously', 'generally', 'specifically',
  'coherence', 'observer', 'boundary', 'interaction', 'evolution',
  'state', 'spectrum', 'particle', 'boson', 'fermion', 'quark', 'lepton',
  'higgs', 'neutrino', 'photon', 'gluon', 'graviton',
  'euclidean', 'standard', 'proven', 'published', 'identified',
  'fermilab',
])

function isLikelyAuthor(text) {
  const lower = text.toLowerCase().trim()
  if (BLACKLIST.has(lower)) return false
  if (!/^[A-ZÀ-ÖØ-ÝĀ-Ž]/.test(text.trim())) return false
  if (/^[A-Z]{5,}$/.test(text.trim())) return false
  if (text.trim().length < 2) return false
  return true
}

// ─── Citation parsing ────────────────────────────────────────────────────────

/**
 * Known journal / non-author words that indicate "what follows is a journal, not an author"
 */
const JOURNAL_INDICATORS = /^(?:Nucl|Phys|Rev|Ann|Comm|Math|Lett|Proc|Trans|Mod|Class|Quantum|Gen|Int|New|Eur|Chin)\b/

/**
 * Strip contextual prefix text from a citation string.
 * "(proved by Araki and Lieb, 1970)" → "Araki and Lieb, 1970"
 * "(Euclidean periodicity argument, Gibbons-Hawking 1977)" → "Gibbons-Hawking 1977"
 */
function stripPrefix(text) {
  // Strip "e.g." / "e.g.," / "i.e." prefixes
  text = text.replace(/^(?:e\.g\.?,?\s*|i\.e\.?,?\s*)/i, '')

  // Pattern: "prefix text — Author, Year" (require SPACES around dash to avoid Araki–Lieb)
  const dashSplit = text.match(/^.+?\s+(?:—|–)\s+(?:see\s+(?:also\s+)?)?(.+)$/)
  if (dashSplit) return dashSplit[1]

  // Pattern: "prefix text: Author Year" — but only if text before colon has no author names
  const colonSplit = text.match(/^(.+?):\s*(?:see\s+(?:also\s+)?)?(.+)$/)
  if (colonSplit) {
    const beforeColon = colonSplit[1]
    const afterColon = colonSplit[2]
    // Only strip if the text before the colon doesn't start with an author name
    const firstWord = beforeColon.trim().split(/[\s,]+/)[0]
    if (!isLikelyAuthor(firstWord)) {
      return afterColon
    }
  }

  // Pattern: "prefix by Author, Year" or "by the theorem of Author, Year"
  const byMatch = text.match(/^.*?\bby\s+(?:the\s+)?(?:\w+\s+of\s+)?([A-ZÀ-ÖØ-ÝĀ-Ž].+)$/)
  if (byMatch) return byMatch[1]

  // Pattern: "observed in Author experiment, Year" → "Author, Year"
  const observedMatch = text.match(/^\w+\s+in\s+([A-ZÀ-ÖØ-ÝĀ-Ž][a-zà-ü]+)(?:\s+experiment)?\s*,?\s*(\d{4}.*)$/)
  if (observedMatch) return `${observedMatch[1]}, ${observedMatch[2]}`

  // Pattern: "prefix, Author Year" where prefix has no uppercase author-like words
  const commaSplitMatch = text.match(/^(.+?),\s+((?:see\s+(?:also\s+)?|cf\.\s*)?[A-ZÀ-ÖØ-ÝĀ-Ž'][a-zà-ü].*?\d{4}.*)$/)
  if (commaSplitMatch) {
    const prefix = commaSplitMatch[1]
    const prefixWords = prefix.split(/[\s,]+/)
    const hasAuthorInPrefix = prefixWords.some(w => /^[A-ZÀ-ÖØ-ÝĀ-Ž][a-zà-ü]/.test(w) && isLikelyAuthor(w))
    if (!hasAuthorInPrefix) {
      return commaSplitMatch[2]
    }
  }

  return text
}

/**
 * Parse a single citation string like "Lieb & Ruskai, 1973" into { authors, year }.
 * Handles multi-author formats: "A, B, and C, Year" and "A-B-C, Year".
 */
function parseSingleCitation(text) {
  const yearMatch = text.match(/\b(1[6-9]\d{2}|20[0-2]\d)\b/)
  if (!yearMatch) return null
  const year = yearMatch[1]

  let authors = text.slice(0, yearMatch.index).replace(/[,\s]+$/, '').trim()
  if (!authors) return null

  // Remove trailing period
  authors = authors.replace(/\.\s*$/, '')

  // Strip "in" before year: "Sakharov in" → "Sakharov"
  authors = authors.replace(/\s+in\s*$/, '')

  // Strip "'s theorem" / "theorem" etc: "Birkhoff's theorem" → "Birkhoff", "DHR theorem" → "DHR"
  authors = authors.replace(/(?:'s?)?\s+(?:theorem|conjecture|lemma|inequality|principle|formula|bound|rule|law)\s*$/i, '')

  // Strip book titles in italics: "Author, *Title*" → "Author"
  const bookMatch = authors.match(/^(.+?)\s*,\s*\*[^*]+\*/)
  if (bookMatch) {
    authors = bookMatch[1]
  }

  // Strip journal info: "Author, Nucl. Phys. B 692, 303" → "Author"
  // Only strip if what follows the comma looks like a journal (not another author)
  const parts = authors.split(/,\s*/)
  if (parts.length > 1) {
    // Check if anything after the first part looks like a journal
    const restJoined = parts.slice(1).join(', ')
    if (JOURNAL_INDICATORS.test(restJoined) || /\b\d{1,4}\b/.test(restJoined) || /§/.test(restJoined)) {
      authors = parts[0]
    } else {
      // Could be multi-author with commas: "Groisman, Popescu, and Winter"
      // Keep all parts that look like author names, drop the rest
      const authorParts = []
      for (const p of parts) {
        const cleaned = p.replace(/^\s*and\s+/, '').trim()
        if (isLikelyAuthor(cleaned.split(/\s+/)[0])) {
          authorParts.push(cleaned)
        }
      }
      if (authorParts.length > 0) {
        authors = authorParts.join(', ')
      }
    }
  }

  // Clean up "and" to "&" for consistency: "Araki and Lieb" → "Araki & Lieb"
  authors = authors.replace(/,?\s+and\s+/g, ' & ')

  // Clean up "et al." variants
  authors = authors.replace(/\s+et\s+al\.?$/, ' et al.')

  // Validation
  if (/^(?:Step|Type|Round|Tier|Gap|Part|Stage|Figure|Table|Axiom|C\d)\b/i.test(authors)) return null
  if (/^\d/.test(authors)) return null

  // Must contain at least one likely author name
  const words = authors.split(/[\s,&–-]+/).filter(w => w.length > 0 && w !== 'et' && w !== 'al.')
  if (!words.some(w => /^[A-ZÀ-ÖØ-ÝĀ-Ž]/.test(w) && isLikelyAuthor(w))) return null

  // Author string shouldn't be too long (>60 chars suggests it's not just names)
  if (authors.length > 60) return null

  return { authors, year }
}

// ─── Splitting multi-citations ───────────────────────────────────────────────

/**
 * Split a citation string on semicolons AND on comma-separated citations
 * where each part has its own year.
 * "(Jacobson, 1991; Unruh, 1995)" → ["Jacobson, 1991", "Unruh, 1995"]
 * "(Dixon 1994, Furey 2016)" → ["Dixon 1994", "Furey 2016"]
 * "(Araki–Lieb 1970, Lieb–Ruskai 1973)" → ["Araki–Lieb 1970", "Lieb–Ruskai 1973"]
 * "(Schumacher 1995, Bennett et al. 1996, Groisman et al. 2005)" → 3 parts
 */
function splitMultiCitations(text) {
  // First split on semicolons (primary separator)
  const semiParts = text.split(/\s*;\s*/)

  // Then check each semi-part for comma-separated citations with multiple years
  const result = []
  for (const part of semiParts) {
    const yearMatches = [...part.matchAll(/\b(?:1[6-9]\d{2}|20[0-2]\d)\b/g)]
    if (yearMatches.length <= 1) {
      result.push(part)
      continue
    }

    // Multiple years — split on commas, then greedily group so each segment
    // contains exactly one year. This handles both "Dixon 1994, Furey 2016"
    // and "Groisman, Popescu, and Winter, 2005" correctly.
    const commaParts = part.split(/,\s*/)
    const segments = []
    let current = ''
    const yearRe = /\b(?:1[6-9]\d{2}|20[0-2]\d)\b/

    for (const cp of commaParts) {
      if (current && yearRe.test(current) && yearRe.test(cp)) {
        // Both current accumulation and next part have years — split
        segments.push(current.trim())
        current = cp
      } else {
        current = current ? current + ', ' + cp : cp
      }
    }
    if (current) segments.push(current.trim())

    if (segments.length > 1 && segments.every(s => yearRe.test(s))) {
      result.push(...segments)
    } else {
      result.push(part)
    }
  }

  return result.map(r => r.trim()).filter(r => r.length > 0)
}

// ─── Core conversion ─────────────────────────────────────────────────────────

function convertFile(filepath) {
  const content = readFileSync(filepath, 'utf-8')

  const fmMatch = content.match(/^(---\r?\n[\s\S]*?\r?\n---\r?\n?)/)
  const frontmatter = fmMatch ? fmMatch[1] : ''
  let body = fmMatch ? content.slice(fmMatch[1].length) : content

  const segments = splitCodeBlocks(body)
  const linkDefs = new Map()
  const changes = []

  for (const seg of segments) {
    if (seg.isCode) continue

    seg.text = seg.text.replace(
      /\(([^()]*?\b(?:1[6-9]\d{2}|20[0-2]\d)[^()]*?)\)/g,
      (fullMatch, inner) => {
        return processParenCitation(fullMatch, inner.trim(), linkDefs, changes)
      }
    )
  }

  if (linkDefs.size === 0) return null

  body = segments.map(s => s.text).join('')
  body = body.replace(/\s+$/, '')
  body += '\n\n<!-- References -->\n'
  const sortedDefs = [...linkDefs.entries()].sort((a, b) => {
    const yearA = a[0].match(/\d{4}/)?.[0] || ''
    const yearB = b[0].match(/\d{4}/)?.[0] || ''
    if (yearA !== yearB) return yearA.localeCompare(yearB)
    return a[0].localeCompare(b[0])
  })
  for (const [displayText, refId] of sortedDefs) {
    body += `[${displayText}]: /references#${refId}\n`
  }

  return { content: frontmatter + body, changes, linkDefs }
}

function processParenCitation(fullMatch, inner, linkDefs, changes) {
  // Skip math, links, pure numbers
  if (/[$\\]/.test(inner)) return fullMatch
  if (/^\d+$/.test(inner)) return fullMatch
  if (/^\[/.test(inner)) return fullMatch
  if (/^\d{4}$/.test(inner)) return fullMatch
  // Skip if too long (likely a full sentence, not a citation)
  if (inner.length > 120) return fullMatch

  // Check for "see" / "cf." prefix
  let prefix = ''
  let citationText = inner
  const prefixMatch = inner.match(/^(see\s+also\s+|see\s+|cf\.\s*)/i)
  if (prefixMatch) {
    prefix = prefixMatch[1]
    citationText = inner.slice(prefixMatch[0].length)
  }

  // Strip contextual prefix text (e.g., "proved by", "Euclidean periodicity argument,")
  citationText = stripPrefix(citationText)

  // Re-check for "see" after prefix stripping (e.g., "text — see Author, Year")
  if (!prefix) {
    const innerPrefixMatch = citationText.match(/^(see\s+also\s+|see\s+|cf\.\s*)/i)
    if (innerPrefixMatch) {
      prefix = innerPrefixMatch[1]
      citationText = citationText.slice(innerPrefixMatch[0].length)
    }
  }

  // Split multiple citations
  const parts = splitMultiCitations(citationText)
  const converted = []

  for (const part of parts) {
    // Strip prefix from each part too (for cases like "see also Orlik, 1972" in a second part)
    let cleanedPart = part.trim()
    // First pass: check for "see/cf." prefix
    let partPrefix = cleanedPart.match(/^(?:see\s+also\s+|see\s+|cf\.\s*)/i)
    if (partPrefix) cleanedPart = cleanedPart.slice(partPrefix[0].length)
    // Strip contextual text
    cleanedPart = stripPrefix(cleanedPart)
    // Re-check for "see/cf." after stripPrefix (e.g., "prefix, see also Author, Year")
    partPrefix = cleanedPart.match(/^(?:see\s+also\s+|see\s+|cf\.\s*)/i)
    if (partPrefix) cleanedPart = cleanedPart.slice(partPrefix[0].length)

    const parsed = parseSingleCitation(cleanedPart)
    if (!parsed) {
      // If any part fails, keep the entire thing unchanged
      return fullMatch
    }

    const displayText = `${parsed.authors}, ${parsed.year}`
    const refId = normalizeForKey(parsed.authors, parsed.year)
    linkDefs.set(displayText, refId)
    converted.push(`[${displayText}]`)
  }

  const replacement = converted.join('; ')
  const result = prefix ? `(${prefix}${replacement})` : replacement

  changes.push({ from: fullMatch, to: result })
  return result
}

function splitCodeBlocks(text) {
  const segments = []
  const codeBlockRegex = /```[\s\S]*?```|~~~[\s\S]*?~~~/g
  let lastIndex = 0
  let match

  while ((match = codeBlockRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ text: text.slice(lastIndex, match.index), isCode: false })
    }
    segments.push({ text: match[0], isCode: true })
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    segments.push({ text: text.slice(lastIndex), isCode: false })
  }

  return segments
}

// ─── Main ────────────────────────────────────────────────────────────────────

function main() {
  const dirs = [
    join(CONTENT_DIR, 'derivations'),
    join(CONTENT_DIR, 'predictions'),
    join(CONTENT_DIR, 'guide'),
    join(CONTENT_DIR, 'source'),
    join(CONTENT_DIR, 'axioms'),
  ]

  const allFiles = dirs.flatMap(d => collectMdFiles(d))
  let totalChanges = 0
  let filesModified = 0

  console.log(DRY_RUN ? '═══ DRY RUN — no files will be modified ═══\n' : '═══ CONVERTING CITATIONS ═══\n')

  for (const filepath of allFiles) {
    const result = convertFile(filepath)
    if (!result) continue

    filesModified++
    const relPath = relative(ROOT, filepath)

    console.log(`\n── ${relPath} (${result.changes.length} citations) ──`)
    for (const ch of result.changes) {
      console.log(`  ${ch.from}`)
      console.log(`  → ${ch.to}`)
    }
    console.log(`  Link defs: ${[...result.linkDefs.entries()].map(([k, v]) => `[${k}] → #${v}`).join(', ')}`)

    if (!DRY_RUN) {
      writeFileSync(filepath, result.content)
    }
  }

  console.log('\n═══════════════════════════════════════════════════')
  console.log(`  Files modified:      ${filesModified}`)
  console.log(`  Citations converted: ${totalChanges || 'see above'}`)
  console.log(DRY_RUN ? '  Mode: DRY RUN (no changes written)' : '  Mode: APPLIED')
  console.log('═══════════════════════════════════════════════════')
}

main()
