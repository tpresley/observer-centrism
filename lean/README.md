# Lean 4 Formal Verification

Machine-verified mathematical claims from the [Observer-Centrism](../site/) derivations.

## What "Lean Verified" Means

Each Lean file in this project formalizes one or more specific mathematical claims made in the derivation markdown files. When Lean's type-checker accepts a theorem, it provides a machine-checkable proof that the claim is correct — no human review required, no possibility of arithmetic error.

### What IS verified

- Specific numerical identities (e.g., anomaly cancellation sums equal zero)
- Algebraic facts (e.g., the sedenion zero divisor product is zero)
- Dimensional calculations (e.g., coupling constant ratios from algebra dimensions)

### What is NOT verified

- Physical correctness of the framework
- Physical interpretation of mathematical results (e.g., "zero divisors violate coherence")
- The framework's axioms or structural postulates
- Steps in the derivation chain that involve physics reasoning rather than pure mathematics

## Prerequisites

Install Lean 4 and Lake via [elan](https://github.com/leanprover/elan):

```bash
curl https://elan-init.trycloudflare.com/elan-init.sh -sSf | sh
```

Or see the full [Lean 4 installation guide](https://leanprover-community.github.io/install/index.html).

## Quick Start

```bash
cd lean

# Download precompiled mathlib (first time only — avoids hours of compilation)
lake exe cache get

# Type-check all proofs
lake build
```

If `lake build` exits with code 0, all proofs are verified.

## Project Structure

| Module | Derivation | Proposition | What it verifies |
|--------|-----------|-------------|-----------------|
| `Gauge.AnomalyCancellation` | gauge/standard-model-group | Prop 5.1 | All four anomaly cancellation conditions (U(1)³, SU(3)²×U(1), SU(2)²×U(1), gravity) are exact rational identities |
| `Gauge.SedenionZeroDivisor` | gauge/standard-model-group | Prop 2.2 | The sedenion product (e₃+e₁₀)(e₆-e₁₅) = 0, proving zero divisors exist beyond the octonions |
| `Algebra.CayleyDickson` | (infrastructure) | — | Cayley-Dickson doubling construction: ℝ → ℂ → ℍ → 𝕆 → 𝕊 with explicit multiplication |
| `Cosmology.CouplingRatios` | cosmology/coupling-constants | Prop 2.1 + Thm 1.1 | Coupling ratios α₁:α₂:α₃ = 4:2:1 and Weinberg angle sin²θ_W = 1/3 from division algebra dimensions |

## Adding New Proofs

1. Create a new `.lean` file in the appropriate subdirectory under `ObserverCentrism/`
2. Import it in `ObserverCentrism.lean` (the root file)
3. Run `lake build` to verify
4. Add `leanProofs` frontmatter to the corresponding derivation markdown file:

```yaml
leanProofs:
  - module: "ObserverCentrism.YourModule"
    proposition: "Proposition X.Y"
    theorems:
      - "your_theorem_name"
```

5. Run `node scripts/lean-status.mjs` to verify the cross-reference

## Verification Tiers

### Tier 1: Pure Computations (current)
Rational arithmetic identities and dimensional calculations. Verified by `norm_num` (Lean's numeric normalization tactic). These are the simplest proofs with the highest confidence-to-effort ratio.

### Tier 2: Established Algebra (planned)
- Hurwitz's theorem (classification of normed division algebras)
- Homotopy groups: π₁(SO(3)) = ℤ₂, π₃(SU(2)) = ℤ
- G₂ stabilizer: Stab_{G₂}(ℍ) ≅ SU(3)

### Tier 3: Representation Theory (future)
- ℂ ⊗ 𝕆 ≅ Cl(6) isomorphism
- A₅ representation theory for flavor mixing

### Tier 4: Meta-Level (future)
- Dependency DAG consistency verification

## Dependencies

- **Lean 4**: Version specified in `lean-toolchain`
- **Mathlib4**: Lean's standard mathematics library (provides `norm_num`, rational arithmetic, etc.)

The `lake-manifest.json` file locks exact dependency versions (analogous to `package-lock.json`).
