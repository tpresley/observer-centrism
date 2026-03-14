# Lean 4 Formal Verification

Machine-verified mathematical claims from the [Observer-Centrism](../site/) derivations.

## What "Lean Verified" Means

Each Lean file in this project formalizes one or more specific mathematical claims made in the derivation markdown files. When Lean's type-checker accepts a theorem, it provides a machine-checkable proof that the claim is correct — no human review required, no possibility of error in the verified portion.

### What IS verified

- **Structural algebraic facts**: the sedenion zero divisor, non-division-algebra status, norm-composition failure
- **Universal identities**: the quaternion composition property (Euler's four-square identity), CKM parameter formulas for all N
- **Impossibility results**: no-cloning theorem, Pauli exclusion core
- **Linear algebra**: Bell basis completeness and determinant
- **Consistency conditions**: all four anomaly cancellation identities with fractional hypercharges

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

| Module | Derivation | What it verifies |
|--------|-----------|-----------------|
| `Algebra.CayleyDickson` | (infrastructure) | Cayley-Dickson doubling ℝ → ℂ → ℍ → 𝕆 → 𝕊 with explicit multiplication tables |
| `Algebra.HurwitzNormed` | bootstrap-division-algebras Thm 1.2 | Quaternion composition property (Euler's four-square identity), sedenion norm-composition failure, Hurwitz dimension constraint |
| `Gauge.SedenionZeroDivisor` | standard-model-group Prop 2.2 | (e₃+e₁₀)(e₆-e₁₅) = 0 in the sedenions, with both factors nonzero |
| `Gauge.SedenionNonDivision` | bootstrap-division-algebras Thm 7.1 | Sedenions are not a division algebra (formal conclusion from zero divisor) |
| `Gauge.AnomalyCancellation` | standard-model-group Prop 5.1 | All four anomaly conditions (U(1)³, SU(3)²×U(1), SU(2)²×U(1), gravity) cancel with exact rational hypercharges |
| `Quantum.NoCloning` | entanglement Thm 3.1 | No linear map can clone arbitrary quantum states (linearity + cloning → contradiction on superposition) |
| `Quantum.BellBasis` | teleportation Thm 2.2 | Bell states form a basis for ℚ⁴ (det ≠ 0) with explicit expansion coefficients |
| `Particles.SpinStatistics` | pauli-exclusion Thm 4.1, spin-statistics Prop 3.2 | Pauli exclusion core (x = -x → x = 0), boson/fermion sign rules |
| `Particles.GenerationCounting` | three-generations Prop 5.3, baryogenesis Prop 3.2 | CKM parameter identities for all N (universal, not point-evaluated) |

## Design Principles

Every proof in this project satisfies at least one of:

1. **Structural**: Proves a universal algebraic identity or impossibility result (e.g., no-cloning, quaternion composition)
2. **Computational**: Verifies a computation too complex for confident hand-checking (e.g., 16-component sedenion product, multi-term anomaly sums)
3. **Foundational**: Establishes a mathematical fact that anchors a significant portion of the derivation chain (e.g., sedenions are not a division algebra → gauge hierarchy terminates)

We deliberately exclude trivial arithmetic (e.g., `3+1=4`, `8/2=4`) that a human would never get wrong. The goal is verification depth, not proof count.

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

## Future Targets

- Homotopy groups: π₁(SO(3)) = ℤ₂, π₃(SU(2)) = ℤ
- G₂ stabilizer identification: Stab_{G₂}(ℍ) ≅ SU(3)
- ℂ ⊗ 𝕆 ≅ Cl(6) isomorphism
- A₅ representation theory for flavor mixing
- Axiom structures as Lean types (coherence space, observer triple)

## Dependencies

- **Lean 4**: Version specified in `lean-toolchain`
- **Mathlib4**: Lean's standard mathematics library (provides `norm_num`, `ring`, rational arithmetic, matrix theory, etc.)

The `lake-manifest.json` file locks exact dependency versions (analogous to `package-lock.json`).
