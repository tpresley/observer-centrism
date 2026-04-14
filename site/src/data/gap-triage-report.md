# Gap Triage Report — 2026-03-29

## Summary

| Status | Count |
|--------|-------|
| **Closed** (moved to Addressed Gaps) | 13 |
| **Partially closed** (significant progress) | 29 |
| **Open** (no resolution) | 173 |
| **Total assessed** | 215 |

Open gaps in knowledge DB after cleanup: **202** (was 213).

### Plausibility breakdown (open + partially-closed = 202)

| Plausibility | Count | Description |
|-------------|-------|-------------|
| **achievable** | 89 | Resolvable within current framework |
| **stretch** | 73 | Needs new math or conceptual advance |
| **hard-open** | 32 | Equivalent to unsolved problems |
| **out-of-scope** | 6 | Requires external input (experiments) |

### Effort breakdown (where applicable)

| Effort | Count |
|--------|-------|
| **low** | 14 |
| **moderate** | 92 |
| **high** | 88 |

### Plausibility × Effort matrix

| | low | moderate | high | N/A |
|---|---|---|---|---|
| **achievable** | 13 | 76 | — | — |
| **stretch** | — | 16 | 57 | — |
| **hard-open** | — | — | 30 | 2 |
| **out-of-scope** | 1 | — | 1 | 4 |

---

## Closed Gaps (13)

| Derivation | Gap | Closed by |
|-----------|-----|-----------|
| axioms/coherence-conservation | 3. Conditional coherence | coherence-operational Thm 2.1 |
| axioms/observer-definition | 1. Composite observers | relational-invariants |
| flavor/mixing-angles | 3. Neutrino masses | neutrino-masses (derived) |
| gauge/electromagnetism | 2. Magnetic monopoles | Structural exclusion (prediction) |
| gauge/electromagnetism | 4. Non-abelian extension | weak-interaction + color-force |
| gauge/electroweak-breaking | 2. Weinberg angle | weinberg-angle (derived) |
| holography/area-scaling | 5. Holographic noise connection | causal-set-statistics (derived) |
| interactions/relational-invariants | 3. Bootstrap transition | bootstrap (derived) |
| minimal-observer/coherence-dual-pairs | 1. CPT theorem | cpt-theorem (derived) |
| minimal-observer/structure | 3. Anti-observers | coherence-dual-pairs (derived) |
| particles/spin-statistics | 2. Supersymmetry impossible | supersymmetry-impossibility (derived) |
| quantum/entanglement | 1. Quantum teleportation | teleportation (derived) |
| quantum/entanglement | 3. Holographic connection | er-epr (derived) |

---

## Low-Hanging Fruit: Achievable + Low Effort (10 gaps)

These can likely be resolved in a single focused session:

1. **axioms/observer-definition Gap 2** — Observer equivalence: identical particles as isomorphic observers at same bootstrap level
2. **cosmology/coupling-constants Gap 5** — Experimental test of non-convergence: prediction is made, document comparison with measurements
3. **interactions/bootstrap-division-algebras Gap 4** — Alternative algebras: explicit Hurwitz exclusion of Clifford/Jordan
4. **particles/pauli-exclusion Gap 1** — Partial exclusion: formalize species labels within winding classes
5. **quantum/born-rule Gap 3** — Mixed states: connect entropy derivation to Tr(ρ|k⟩⟨k|)
6. **quantum/measurement Gap 4** — Delayed choice: worked example showing no retrocausality from DAG order
7. **spacetime/lorentz-invariance Gap 2** — Thomas precession: Berry phase calculation in boost space
8. **spacetime/lorentz-invariance Gap 3** — Lorentz violation tests: document prediction vs SME bounds
9. **thermodynamics-ext/first-law Gap 2** — Free energy / Legendre transforms: bookkeeping exercise
10. **thermodynamics/entropy Gap 1** — Boltzmann's constant: dimensional analysis once ℏ and T identified

Plus 3 partially-closed gaps at low effort:
- axioms/coherence-conservation Gap 3 (Monotonicity) — largely academic now
- spacetime/singularity-resolution Gap 5 (Information preservation) — editorial connection
- thermodynamics-ext/distinguishability-conservation Gap 1 (Čencov verification) — formalize for all Markov maps

---

## Hard-Open Gaps (32 gaps)

These correspond to unsolved problems in physics/mathematics. Grouped by theme:

### Fundamental constants (5 gaps)
- spacetime/gravity Gap 1, spacetime/einstein-equations Gap 2, spacetime/speed-of-light Gap 1 — Deriving G and/or c from fewer parameters
- particles/mass-hierarchy Gap 1 — Computing specific particle masses
- particles/mass-hierarchy Gap 2 — Coupling constant values from bootstrap

### Cosmological constant (3 gaps)
- foundation/coherence-lagrangian Gap 2, particles/mass-hierarchy Gap 4, spacetime/einstein-equations Gap 1 — Λ ∼ 10⁻¹²² unexplained

### Yang-Mills / confinement cluster (5 gaps)
- gauge/confinement Gap 3 (mass gap), Gap 4 (glueball spectrum)
- gauge/color-force Gap 1 (chiral symmetry breaking — Clay Millennium)
- interactions/bootstrap-division-algebras Gap 3 (confinement from octonions)
- thermodynamics-ext/renormalization Gap 3 (non-perturbative effects)

### Quantum gravity / Planck scale (5 gaps)
- spacetime/einstein-equations Gap 3 (full quantization)
- holography/area-scaling Gap 3 (sub-Planckian structure)
- holography/hawking-radiation Gap 2 (evaporation endpoint)
- spacetime/singularity-resolution Gap 2 (black hole end state)
- holography/causal-set-statistics Gap 5 (continuum limit)

### Bootstrap fixed-point (3 gaps)
- interactions/bootstrap Gap 3 (existence — Conjecture 7.1)
- interactions/bootstrap Gap 4 (uniqueness — Conjecture 7.2)
- minimal-observer/multiplicity Gap 1 (minimum network cardinality)

### Other deep problems (11 gaps)
- foundation/coherence-lagrangian Gap 3 (path integral measure — constructive QFT)
- dimensions/three-dimensions Gap 3 (3+1=4 coincidence)
- flavor/mixing-angles Gap 1 (A5 from axioms)
- cosmology/baryogenesis Gap 2 (quantitative η_B)
- cosmology/coupling-constants Gap 4 (Yukawa couplings)
- cosmology/observer-loop-viability Gap 6 (geometry functor → quantitative Λ)
- gauge/proton-stability Gap 3 (gravitational amplitude)
- particles/cpt-theorem Gap 3 (gravitational CPT)
- particles/supersymmetry-impossibility Gap 3 (implications for string theory)
- quantum/sheaf-section-uniqueness Gap 3 (higher cohomology)
- thermodynamics-ext/fisher-metric Gap 1 (curvature–spacetime bridge)
- thermodynamics/time Gap 1 (metric from order — causal set Hauptvermutung)

---

## Out-of-Scope Gaps (6 gaps)

These require experimental data or external numerical computation:

1. gauge/chirality-selection Gap 1 — Left-right symmetric extensions (experimental test)
2. particles/cpt-theorem Gap 2 — CPT tests (experimental precision)
3. particles/neutrino-masses Gap 4 — Dirac limit test (0νββ experiments)
4. particles/supersymmetry-impossibility Gap 1 — Experimental sharpening (collider tests)
5. spacetime/einstein-equations Gap 1 — Cosmological constant (also hard-open, out-of-scope overlap)
6. holography/information-paradox Gap 4 — Observational signatures (analog experiments)

---

## Querying the Triage Data

The triage results are stored in `gap_triage` table in `knowledge.db`:

```sql
-- Summary
SELECT resolution_status, COUNT(*) FROM gap_triage GROUP BY resolution_status;

-- All achievable low-effort gaps
SELECT * FROM v_triage_detail WHERE plausibility='achievable' AND effort='low';

-- Hard-open by group
SELECT group_name, COUNT(*) FROM v_triage_detail WHERE plausibility='hard-open' GROUP BY group_name;

-- Gaps closed by a specific derivation
SELECT * FROM gap_triage WHERE closed_by LIKE '%teleportation%';
```
