# Observer-Centrism

**Physics from Three Axioms**

Observer-Centrism is a theoretical physics framework that derives the major structures of known physics — quantum mechanics, general relativity, the Standard Model gauge group, thermodynamics, and holographic entropy bounds — from three axioms about what it means to be an observer.

## The Three Axioms

1. **Coherence Conservation.** There exists a primitive quantity — *coherence* — that is globally conserved. It cannot be created, destroyed, or exported to an external reservoir.

2. **Observer Definition.** Any structure that maintains at least one invariant quantity across transformations, together with a self/non-self boundary, qualifies as an observer.

3. **Loop Closure.** Observer dynamics must be closed loops: the internal state returns to its initial configuration after a finite time. Non-closing configurations dissipate.

## Project Structure

```
observer-centrism/
├── observer_centrism.docx     # Original source document (canonical reference)
├── site/                      # Astro website with interactive components
│   ├── src/
│   │   ├── content/
│   │   │   ├── source/        # 15 markdown files from the original document
│   │   │   ├── derivations/   # 61 derivations organized by group
│   │   │   ├── predictions/   # 10 testable predictions
│   │   │   └── guide/         # Narrative walkthrough (9 chapters)
│   │   ├── components/        # Astro layouts + Sygnal interactive components
│   │   ├── data/              # Knowledge database, dependency graph, indexes
│   │   └── pages/             # Astro page routes
│   └── public/                # Static assets
├── lean/                      # Lean 4 formal verification
│   ├── ObserverCentrism/
│   │   ├── Algebra/           # Cayley-Dickson construction, Hurwitz theory
│   │   ├── Gauge/             # Sedenion zero divisors, anomaly cancellation
│   │   ├── Quantum/           # No-cloning theorem, Bell basis completeness
│   │   └── Particles/         # Spin-statistics, generation counting
│   ├── lakefile.toml          # Lake build configuration
│   └── lean-toolchain         # Lean version (v4.29.0-rc6)
└── scripts/
    ├── build-index.mjs        # Regenerates knowledge.db and knowledge-index.json
    └── lean-status.mjs        # Reports Lean verification status
```

## Building the Site

The site is built with [Astro](https://astro.build/) and uses [Sygnal](https://github.com/tpresley/sygnal) for interactive components (dependency graph, prediction tracker, proof step viewer). Math rendering uses KaTeX via remark-math and rehype-katex.

```bash
cd site
npm install
npm run dev       # Development server on http://localhost:4321
npm run build     # Production build to site/dist/
npm run preview   # Preview production build locally
```

To regenerate the knowledge index (after modifying derivation content):

```bash
node scripts/build-index.mjs
```

## Lean 4 Verification

The `lean/` directory contains machine-verified proofs of key mathematical claims from the derivation chain. These verify structural results where mechanical verification adds genuine confidence — not arithmetic a human could check at a glance.

**Verified results include:**
- Cayley-Dickson doubling construction (ℝ → ℂ → ℍ → 𝕆)
- Sedenion zero divisors (the sequence terminates at octonions)
- Anomaly cancellation with Standard Model hypercharges
- No-cloning theorem
- Bell basis completeness
- Spin-statistics core identities
- CKM generation counting

**Prerequisites:** [Lean 4](https://lean-lang.org/) and [elan](https://github.com/leanprover/elan) (Lean version manager).

```bash
cd lean
lake exe cache get    # Download precompiled mathlib (required, ~1 GB)
lake build            # Type-check all proofs
```

A successful `lake build` with no errors means every theorem statement and proof in the project has been mechanically verified.

## License

This work is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) (Creative Commons Attribution 4.0 International).

You are free to share, adapt, and build upon this material for any purpose, including commercially, provided you give appropriate credit. When citing this work:

> Troy Presley, *Observer-Centrism: Physics from Three Axioms*, 2026.
> https://github.com/tpresley/observer-centrism
