---
title: "Electromagnetism from Phase Coherence"
status: "stub"
dependsOn: ["axioms/loop-closure", "spacetime/speed-of-light", "spacetime/lorentz-invariance"]
enablesDerivation: ["gauge/weak-interaction", "gauge/standard-model-group"]
tags: ["gauge"]
summary: "Deriving Maxwell's equations and the U(1) gauge field from local phase redundancy of observer loops"
rigorLevel: "informal"
lastUpdated: 2026-03-09
---

## Target

**Derive Maxwell's equations and the electromagnetic gauge field from the observer framework's axioms.**

The minimal observer is a U(1) phase oscillator (Loop Closure). When two observers at different spacetime points describe the same coherence exchange, they may assign different internal phases. The requirement that physics be independent of this local phase choice forces the introduction of a compensating connection field $A_\mu$. The covariant derivative $D_\mu = \partial_\mu + iqA_\mu$ and its curvature $F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$ reproduce the Maxwell-Dirac system.

This would be the first gauge theory derivation in the framework and would establish electromagnetism as a structural consequence of observer coherence rather than an independent postulate.

## Prior Work

The earlier whitepaper (idea #11) proposed this derivation using the OC action formalism: distinct observers describing the same exchange with different internal phases require a compensating connection. The construction follows the standard gauge theory route (local symmetry → connection → curvature → field equations) but grounds the local symmetry in observer coherence rather than assuming it.

The key insight that transfers to the current framework: the U(1) symmetry is not assumed — it is already present as the fundamental observer symmetry from Loop Closure (Axiom 3). The minimal observer is a U(1) phase oscillator (Minimal Observer Structure, Theorem 5.1). Making this symmetry local (position-dependent) is the natural step when multiple observers at different locations must maintain mutual coherence.

## Proposed Approach

### Route 1: Local phase redundancy (most direct)

1. **Start from Loop Closure**: Each observer has a U(1) phase $\phi(x)$. This is already established.
2. **Relational coherence requires comparison**: When observer $\mathcal{O}_A$ at $x$ and $\mathcal{O}_B$ at $y$ interact (Type I passage), they must compare phases. The comparison $\phi_A(x) - \phi_B(y)$ is not gauge-invariant.
3. **Introduce connection**: Define parallel transport of phase along paths. The connection $A_\mu$ compensates for the local phase difference: $D_\mu\phi = \partial_\mu\phi + qA_\mu$.
4. **Derive field equations**: The curvature $F_{\mu\nu}$ is the obstruction to path-independent phase transport. Coherence conservation (Axiom 1) applied to the phase current gives $\nabla_\mu F^{\mu\nu} = J^\nu$ (Maxwell's equations with source).
5. **Identify with electromagnetism**: The charge $q$ is the winding number from the Coherence-Dual Pairs derivation. The field $A_\mu$ is the electromagnetic potential.

### Route 2: Noether current promotion

1. The global U(1) symmetry of loop closure gives a conserved Noether current (charge conservation).
2. Promoting the global symmetry to a local one (following the standard Noether → gauge logic) forces the gauge field.
3. The minimal coupling prescription follows from coherence cost minimization.

### Structural Postulate Needed

Likely one structural postulate: **Locality of phase comparison** — the comparison of observer phases at distinct spacetime points requires a smooth connection (parallel transport), not action at a distance. This is the geometric content of the gauge principle.

## Key Challenges

1. **Why local?** The framework establishes global U(1) symmetry. The step from global to local symmetry requires justification — why can't distant observers simply share a global phase? The answer should come from the causal structure (Speed of Light derivation): information propagates at finite speed, so phase comparison must be local.
2. **Uniqueness**: Need to show that U(1) gauge theory is the *unique* way to maintain phase coherence locally, not just *a* way. Čech cohomology on the observer manifold may provide this.
3. **Quantization of charge**: The framework already has integer winding numbers (Coherence-Dual Pairs). Need to connect these to quantized electric charge explicitly.
4. **Coupling constant**: The framework should not predict the value of $e$ (the electric charge) at this stage — this is an open problem (see Coupling Constants stub). But it should explain why the coupling is universal.

## Connection to Existing Derivations

| Prerequisite | What it provides |
|---|---|
| [Loop Closure](/derivations/axioms/loop-closure) | U(1) phase structure of minimal observers |
| [Minimal Observer Structure](/derivations/minimal-observer/structure) | Observer as U(1) oscillator (Theorem 5.1) |
| [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs) | Charge conjugation, integer winding numbers |
| [Speed of Light](/derivations/spacetime/speed-of-light) | Causal structure requiring local (not global) phase comparison |
| [Lorentz Invariance](/derivations/spacetime/lorentz-invariance) | Relativistic covariance of the gauge field |
| [Action and Planck's Constant](/derivations/thermodynamics/action-planck) | Variational principle for field dynamics |

**What this enables**: Weak Interaction (SU(2) extension), Standard Model Gauge Group (full gauge structure), Baryogenesis (gauge anomalies).

## Success Criteria

A complete derivation would:

1. Show that local phase coherence maintenance uniquely requires a U(1) connection $A_\mu$
2. Derive the Maxwell equations $\nabla_\mu F^{\mu\nu} = J^\nu$ and $\nabla_{[\mu} F_{\nu\rho]} = 0$ from coherence conservation
3. Identify electric charge with the winding number from Coherence-Dual Pairs
4. Prove charge quantization follows from the topological structure
5. Recover the Lorentz force law as a coherence cost gradient
6. Require at most one structural postulate (locality of phase comparison)
7. Be independent of the specific value of the coupling constant $e$
