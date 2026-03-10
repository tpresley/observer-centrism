---
title: "Coupling Constant Relationships"
status: "stub"
dependsOn: ["gauge/standard-model-group", "interactions/bootstrap", "particles/mass-hierarchy"]
enablesDerivation: []
tags: ["cosmology"]
summary: "Deriving relationships between Standard Model coupling constants from the bootstrap hierarchy and division algebra structure"
rigorLevel: "informal"
lastUpdated: 2026-03-09
---

## Target

**Derive relationships between the Standard Model coupling constants ($\alpha_{em}$, $\alpha_s$, $\sin^2\theta_W$) from the framework's algebraic and hierarchical structure.**

The Standard Model has three independent gauge coupling constants, which are experimentally measured but not theoretically predicted. If the gauge group arises from division algebras (Standard Model Gauge Group stub), the algebraic structure may constrain the relative coupling strengths. The mass-hierarchy derivation already shows that the bootstrap mechanism produces exponential hierarchies — the same mechanism might relate the gauge couplings.

## Prior Work

The earlier whitepaper (idea #28) claimed that numerical simulations reproduce Standard Model coupling constants within 1% from a single parameter. The extension paper on plateau equivalence (ideas #17, #22) proposed a specific pipeline: compute the FRG plateau scale $k^*$, fix the SU(3) projector normalization from parent-action duality, then RG-run to $M_Z$.

These specific mechanisms depend on the OC action formalism and cannot be transferred directly. The transferable insight: the coupling constants are not free parameters but are fixed by the self-consistency structure of the gauge hierarchy.

## Proposed Approach

1. **Division algebra normalization**: Each normed division algebra ($\mathbb{C}, \mathbb{H}, \mathbb{O}$) has a natural norm. The gauge coupling at each level should be related to the algebraic norm. Ratios of coupling constants would then follow from ratios of algebraic norms: $\dim(\mathbb{C})/\dim(\mathbb{H})/\dim(\mathbb{O}) = 2/4/8$.
2. **Bootstrap fixed points**: The mass-hierarchy derivation shows that bootstrap levels correspond to fixed points of the coherence dynamics. At each fixed point, the effective coupling is determined by the coherence geometry. The gauge couplings are the coupling constants at specific bootstrap fixed points.
3. **Renormalization group constraints**: Once gauge dynamics are established, RG equations relate couplings at different energy scales. The framework's coherence structure may provide boundary conditions (the values at the bootstrap fixed points) that determine the low-energy values.
4. **Weinberg angle**: $\sin^2\theta_W$ describes the mixing of U(1) and SU(2). Its value should follow from the embedding of $\mathbb{C}$ inside $\mathbb{H}$ (there is a canonical embedding, fixing the mixing geometrically).

### Structural Postulate Needed

Possibly: **Algebraic normalization** — gauge couplings at the unification scale are determined by the canonical norms of the corresponding division algebras.

## Key Challenges

1. **Deep in the dependency chain**: Requires the full gauge derivation sequence plus the RG derivation. This is among the most ambitious targets.
2. **RG running**: Predicting coupling constants at $M_Z$ from algebraic values at the unification scale requires precise RG running, including threshold corrections. This is standard QFT technology but requires the full particle spectrum as input.
3. **No grand unification**: The framework predicts no grand unified group (Standard Model Gauge Group stub). This means the three couplings need not converge at a single point. Instead, the division algebra structure provides individual boundary conditions at each level.
4. **Experimental precision**: Coupling constants are measured to high precision ($\alpha_{em}^{-1} = 137.036...$, $\alpha_s(M_Z) = 0.1179 \pm 0.0009$). Any prediction must be quantitatively precise or clearly state its parametric limitations.

## Connection to Existing Derivations

| Prerequisite | What it provides |
|---|---|
| [Standard Model Gauge Group](/derivations/gauge/standard-model-group) | U(1)×SU(2)×SU(3) from division algebras |
| [Bootstrap Mechanism](/derivations/interactions/bootstrap) | Fixed-point hierarchy |
| [Mass Hierarchy](/derivations/particles/mass-hierarchy) | Exponential tunneling, dimensional transmutation |
| [Renormalization Group](/derivations/thermodynamics-ext/renormalization) | Scale-dependent coupling evolution |

## Success Criteria

1. Derive at least one non-trivial relationship between coupling constants (e.g., a prediction for $\sin^2\theta_W$)
2. Show that the relationship follows from the division algebra structure
3. Achieve quantitative accuracy comparable to experimental precision (within a few percent)
4. Explain why the couplings have different magnitudes ($\alpha_{em} \ll \alpha_s$)
