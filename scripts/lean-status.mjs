#!/usr/bin/env node
/**
 * lean-status.mjs — Cross-reference Lean proofs with derivation frontmatter
 *
 * Scans lean/ObserverCentrism/**\/*.lean for theorem declarations and
 * checks that every theorem referenced in derivation leanProofs frontmatter
 * exists in a corresponding Lean file.
 *
 * Usage: node scripts/lean-status.mjs
 *
 * No external dependencies — uses only Node built-ins.
 */

import { readFileSync, readdirSync, existsSync, statSync } from 'fs'
import { join, relative, resolve } from 'path'

const ROOT = resolve(import.meta.dirname, '..')
const LEAN_DIR = join(ROOT, 'lean', 'ObserverCentrism')
const DERIVATIONS_DIR = join(ROOT, 'site', 'src', 'content', 'derivations')

// ─── Scan Lean files ────────────────────────────────────────────────────

function findLeanFiles(dir) {
  const results = []
  if (!existsSync(dir)) return results
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...findLeanFiles(fullPath))
    } else if (entry.name.endsWith('.lean')) {
      results.push(fullPath)
    }
  }
  return results
}

function extractTheorems(filePath) {
  const content = readFileSync(filePath, 'utf-8')
  const theorems = []
  // Match: theorem name, def name, lemma name at start of line (after optional whitespace)
  const regex = /^(?:theorem|lemma)\s+(\w+)/gm
  let match
  while ((match = regex.exec(content)) !== null) {
    theorems.push(match[1])
  }
  return theorems
}

function filePathToModule(filePath) {
  const rel = relative(join(ROOT, 'lean'), filePath)
    .replace(/\.lean$/, '')
    .replace(/\//g, '.')
  return rel
}

// ─── Scan derivation frontmatter ────────────────────────────────────────

function findMarkdownFiles(dir) {
  const results = []
  if (!existsSync(dir)) return results
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...findMarkdownFiles(fullPath))
    } else if (entry.name.endsWith('.md')) {
      results.push(fullPath)
    }
  }
  return results
}

function parseFrontmatter(filePath) {
  const content = readFileSync(filePath, 'utf-8')
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/)
  if (!fmMatch) return null

  const fm = fmMatch[1]
  // Extract derivation ID from path
  const rel = relative(DERIVATIONS_DIR, filePath).replace(/\.md$/, '')

  // Parse leanProofs (simple YAML array parsing)
  const leanProofs = []
  const proofBlocks = fm.split(/^\s+-\s+module:/m).slice(1)
  for (const block of proofBlocks) {
    const moduleMatch = block.match(/^\s*"([^"]+)"/)
    const propMatch = block.match(/proposition:\s*"([^"]+)"/)
    const theorems = []
    const thmMatches = block.matchAll(/^\s+-\s+"([^"]+)"/gm)
    for (const m of thmMatches) {
      // Skip the module and proposition values
      if (m[1] !== moduleMatch?.[1] && m[1] !== propMatch?.[1]) {
        theorems.push(m[1])
      }
    }
    if (moduleMatch) {
      leanProofs.push({
        module: moduleMatch[1],
        proposition: propMatch?.[1] || '',
        theorems,
      })
    }
  }

  return { id: rel, leanProofs }
}

// ─── Main ───────────────────────────────────────────────────────────────

console.log('Checking Lean verification status...\n')

// 1. Index all Lean theorems by module
const leanFiles = findLeanFiles(LEAN_DIR)
const leanModules = {}
let totalLeanTheorems = 0

for (const file of leanFiles) {
  const module = filePathToModule(file)
  const theorems = extractTheorems(file)
  leanModules[module] = { file: relative(ROOT, file), theorems }
  totalLeanTheorems += theorems.length
}

// 2. Index all derivation frontmatter references
const mdFiles = findMarkdownFiles(DERIVATIONS_DIR)
const derivationsWithProofs = []
let totalRefTheorems = 0
let errors = 0

for (const file of mdFiles) {
  const data = parseFrontmatter(file)
  if (!data || data.leanProofs.length === 0) continue

  derivationsWithProofs.push(data)
  for (const proof of data.leanProofs) {
    for (const thm of proof.theorems) {
      totalRefTheorems++
      const mod = leanModules[proof.module]
      if (!mod) {
        console.error(`  ✗ ${data.id}: module "${proof.module}" not found in lean/`)
        errors++
      } else if (!mod.theorems.includes(thm)) {
        console.error(`  ✗ ${data.id}: theorem "${thm}" not found in ${proof.module}`)
        errors++
      }
    }
  }
}

// 3. Print summary
console.log('═══════════════════════════════════════════════════')
console.log('  LEAN VERIFICATION STATUS')
console.log('═══════════════════════════════════════════════════')
console.log()
console.log(`  Lean modules:          ${Object.keys(leanModules).length}`)
console.log(`  Lean theorems:         ${totalLeanTheorems}`)
console.log(`  Derivations with Lean: ${derivationsWithProofs.length}`)
console.log(`  Referenced theorems:   ${totalRefTheorems}`)
console.log()

if (derivationsWithProofs.length > 0) {
  console.log('  Derivations:')
  for (const d of derivationsWithProofs) {
    const thmCount = d.leanProofs.reduce((s, p) => s + p.theorems.length, 0)
    const props = d.leanProofs.map(p => p.proposition).join(', ')
    console.log(`    ${d.id}`)
    console.log(`      Propositions: ${props}`)
    console.log(`      Theorems: ${thmCount}`)
  }
  console.log()
}

if (Object.keys(leanModules).length > 0) {
  console.log('  Lean modules:')
  for (const [mod, data] of Object.entries(leanModules)) {
    console.log(`    ${mod} (${data.theorems.length} theorems)`)
    for (const thm of data.theorems) {
      console.log(`      - ${thm}`)
    }
  }
  console.log()
}

if (errors > 0) {
  console.log(`  ✗ ${errors} error(s) — frontmatter references unresolved`)
  console.log()
  console.log('═══════════════════════════════════════════════════')
  process.exit(1)
} else if (!existsSync(LEAN_DIR)) {
  console.log('  ⚠ lean/ObserverCentrism/ directory not found — skipping Lean file checks')
  console.log()
  console.log('═══════════════════════════════════════════════════')
} else {
  console.log('  ✓ All frontmatter references resolve to Lean files')
  console.log()
  console.log('═══════════════════════════════════════════════════')
}
