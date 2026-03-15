/**
 * Remark plugin: replaces {{key}} placeholders in markdown text nodes
 * with live framework statistics from knowledge-index.json and
 * structural-postulates.json.
 *
 * Runs at build time — stats are read once per build, not per file.
 */

import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { visit } from 'unist-util-visit'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataDir = join(__dirname, '..', 'data')

/** Read JSON files and compute all derived stats. */
function loadStats() {
  const index = JSON.parse(readFileSync(join(dataDir, 'knowledge-index.json'), 'utf8'))
  const postulates = JSON.parse(readFileSync(join(dataDir, 'structural-postulates.json'), 'utf8'))

  const s = index.stats

  const totalPostulates = postulates.length
  const derivedPostulates = postulates.filter(p => p.derivedFrom).length
  const activePostulates = totalPostulates - derivedPostulates

  // Count derivations that still require at least one active (non-promoted) postulate
  const activePostulateEntries = postulates.filter(p => !p.derivedFrom)
  const derivationsWithPostulates = new Set(activePostulateEntries.map(p => p.derivation)).size

  return {
    derivationCount:                  s.derivationCount,
    rigorousCount:                    s.byStatus.rigorous     || 0,
    provisionalCount:                 s.byStatus.provisional  || 0,
    nonViableCount:                   s.byStatus['non-viable'] || 0,
    predictionCount:                  s.predictionCount,
    activePostulateCount:             activePostulates,
    nowTheoremCount:                  derivedPostulates,
    totalPostulateCount:              totalPostulates,
    derivationsWithPostulatesCount:   derivationsWithPostulates,
    derivationsWithoutPostulatesCount: s.derivationCount - derivationsWithPostulates,
    openGapCount:                     s.openGapCount,
    leanTheoremCount:                 s.leanTheoremCount,
    leanVerifiedCount:                s.leanVerifiedCount,
  }
}

// Cache at module level — read once per build
let _stats = null
function getStats() {
  if (!_stats) _stats = loadStats()
  return _stats
}

const PLACEHOLDER_RE = /\{\{(\w+)\}\}/g

export default function remarkStats() {
  return (tree) => {
    const stats = getStats()

    visit(tree, 'text', (node) => {
      if (node.value.includes('{{')) {
        node.value = node.value.replace(PLACEHOLDER_RE, (match, key) => {
          return stats[key] !== undefined ? String(stats[key]) : match
        })
      }
    })
  }
}
