# How to Contribute

**Repository:** [github.com/tpresley/observer-centrism](https://github.com/tpresley/observer-centrism)

Contributions to Observer-Centrism are welcome. You can submit pull requests for new derivations, corrections to existing ones, or additions that strengthen the derivation chain.

## What you can contribute

- **New derivations** that extend the framework from its axioms or existing results to new physical consequences
- **Corrections** to existing derivations — errors in proofs, unjustified steps, missing assumptions
- **Strengthening existing derivations** — closing open gaps, tightening bounds, promoting structural postulates to theorems
- **Lean 4 formalization** of derivations that lack mechanical verification

## Derivation file structure

Derivations live in `site/src/content/derivations/`, organized by topic subdirectory:

```
site/src/content/derivations/
  axioms/           # The three axioms + operational coherence
  foundation/       # Multiplicity, bootstrap, observer-loop-viability
  minimal-observer/ # Minimal observer structure, interactions
  interactions/     # Three interaction types, relational invariants
  thermodynamics/   # Time, action-planck, entropy, arrow of time
  spacetime/        # Speed of light, Lorentz invariance, Einstein eqs
  dimensions/       # Three spatial dimensions
  quantum/          # Born rule, measurement, entanglement, decoherence
  holography/       # Holographic bound, Bekenstein, causal set statistics
  particles/        # Spin-statistics, Pauli exclusion, mass hierarchy
  gauge/            # Standard Model group, electroweak, strong CP
  flavor/           # Three generations, CKM/PMNS, Weinberg angle
  cosmology/        # Dark matter, dark energy, baryogenesis, singularity
  thermodynamics-ext/ # Extended thermodynamic derivations
```

### Frontmatter

Every derivation file begins with YAML frontmatter:

```yaml
---
title: "Descriptive Title"
status: "draft"                     # stub | draft | provisional | rigorous | non-viable
dependsOn:                          # Full paths to upstream derivations
  - "axioms/loop-closure"
  - "thermodynamics/action-planck"
enablesDerivation:                  # Full paths to downstream derivations
  - "spacetime/lorentz-invariance"
tags: ["geometry"]                  # Sidebar grouping (see below)
summary: "One-line summary for navigation and index display"
rigorLevel: "semi-formal"           # informal | semi-formal | formal
lastUpdated: 2026-03-15             # ISO date
leanProofs: []                      # Lean 4 verification references (if any)
---
```

**Status values:**

| Status | Meaning |
|---|---|
| `stub` | Placeholder with direction but little formal content |
| `draft` | Argument sketched but significant gaps remain |
| `provisional` | Main structure sound but some steps rely on conjectures |
| `rigorous` | All steps formally justified, no unresolved gaps |
| `non-viable` | Approach assessed as fundamentally blocked |

New contributions should typically start as `draft` or `provisional`. Status upgrades happen through review.

**Tag values** (determines sidebar grouping):

| Tag | Sidebar group | Examples |
|---|---|---|
| `axioms` | Axioms | Coherence conservation, observer definition, loop closure |
| `foundation` | Foundation | Multiplicity, bootstrap, observer-loop-viability |
| `dynamics` | Dynamics | Minimal observer structure, three interaction types |
| `geometry` | Geometry | Speed of light, Lorentz invariance, Einstein equations |
| `quantum` | Quantum | Born rule, measurement, entanglement, decoherence |
| `particles` | Particles | Spin-statistics, Pauli exclusion, mass hierarchy |
| `holography` | Holography | Holographic bound, Bekenstein, causal set statistics |
| `gauge` | Gauge | Standard Model group, electroweak breaking, strong CP |
| `flavor` | Flavor | Three generations, CKM/PMNS, Weinberg angle |
| `cosmology` | Cosmology | Dark matter, dark energy, baryogenesis, singularity |
| `thermo-ext` | Thermo Extensions | Extended thermodynamic derivations |

### Required sections

Every derivation must include these sections, in this order:

#### 1. Overview

A narrative explanation accessible to physicists who may not follow every line of the proof. Should include:

- **Bold opening question** — what physical question does this derivation answer?
- **The argument** — a plain-language summary of the logical steps
- **The result** — what is derived
- **Why this matters** — connection to known physics
- **An honest caveat** — any structural postulates required, known limitations, or open issues

#### 2. Statement

A formal theorem statement with all variables defined. Begin with `**Theorem.**` followed by the precise claim in mathematical notation.

#### 3. Derivation

The main proof body, structured as numbered steps:

- **Structural Postulates** (if any) — listed first, before Step 1. Each postulate gets a label (e.g., "Structural Postulate S1") and a remark explaining its motivation.
- **Step 1, Step 2, ...** — each step contains Definitions, Propositions, and Proofs. Use the standard format:
  - `**Definition N.M.**` for new definitions
  - `**Proposition N.M.**` or `**Theorem N.M.**` for claims
  - `*Proof.*` followed by the argument, ending with `$\square$`
  - `**Remark.**` for clarifications and context
  - `**Corollary N.M.**` for immediate consequences

#### 4. Rigor Assessment

An honest evaluation of the derivation's logical strength. Categorize each major result:

- **Fully rigorous** — complete proofs from stated assumptions
- **Rigorous given axioms** — relies on the framework's axioms being correct
- **Semi-formal** — argument is sound but some steps appeal to physical intuition
- **Structural** — analogies or motivated arguments rather than proofs

#### 5. Open Gaps

A numbered list of specific issues that remain unresolved. Each gap should identify:
- What is missing or incomplete
- What would be needed to close it
- Whether it is a tightening exercise or a deep open problem

#### 6. Comparison with Other Frameworks (optional)

A table comparing how the result is obtained in standard physics versus the framework. Useful for making the derivation's contribution clear.

### Citing external papers

Use inline author-date references in the text:

```
This is the quantum subadditivity theorem [Araki & Lieb, 1970].
```

For multiple authors, list up to four; beyond that use "et al.":

```
[Bennett, Bernstein, Popescu, Schumacher, 1996]
[Lieb & Ruskai, 1973]
[Hawking et al., 1995]
```

External references are collected in `site/src/data/reference-links.json` with DOI or arXiv URLs. Add an entry for any new paper you cite:

```json
{
  "araki-lieb-1970": {
    "title": "Entropy Inequalities",
    "url": "https://doi.org/10.1007/BF01646092"
  }
}
```

The key should be `lowercase-author-year` format. Prefer DOI links where available; use arXiv URLs for preprints.

### Mathematical notation

- Inline math: `$...$`
- Display math: `$$...$$`
- KaTeX is the rendering engine — use KaTeX-compatible LaTeX
- Cross-reference other derivations with markdown links: `[Link Text](/derivations/category/slug)`

### Dependency graph

When you add a new derivation, its `dependsOn` and `enablesDerivation` fields automatically integrate it into the dependency graph visible on the [Map](/map) page. Make sure these are accurate — the graph is generated from frontmatter, not from in-text links.

After adding or modifying derivations, regenerate the knowledge index:

```bash
node scripts/build-index.mjs
```

This updates both `site/src/data/knowledge.db` (SQLite) and `site/src/data/knowledge-index.json` (consumed by the site).

## Submitting

1. Fork [tpresley/observer-centrism](https://github.com/tpresley/observer-centrism)
2. Create a branch for your contribution
3. Add or modify files following the conventions above
4. Run `node scripts/build-index.mjs` to regenerate the index
5. Run `cd site && npm run build` to verify the site builds cleanly
6. Submit a pull request with a clear description of what you're contributing and why

For corrections, reference the specific step, proposition, or gap number you're addressing.
