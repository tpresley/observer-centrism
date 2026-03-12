---
title: "Weinberg Angle"
status: "stub"
dependsOn: ["gauge/weak-interaction", "gauge/electroweak-breaking", "cosmology/coupling-constants"]
enablesDerivation: []
tags: ["gauge", "electroweak", "mixing-angle"]
summary: "The weak mixing angle sin²θ_W ≈ 0.231 at the Z mass should follow from the relative coupling strengths at the electroweak crystallization scale."
rigorLevel: "informal"
lastUpdated: 2026-03-11
---

## Statement

**Target Theorem.** The weak mixing angle at the $Z$-boson mass scale is

$$\sin^2\theta_W(M_Z) \approx 0.231$$

following from the ratio of the $SU(2)_L$ and $U(1)_Y$ coupling constants at the coherence crystallization scale, evolved down via the renormalization group.

## Motivation

The Weinberg angle $\theta_W$ determines the mixing between $SU(2)_L$ and $U(1)_Y$ that produces the photon and $Z$ boson. Its value is currently an empirical input to the Standard Model. Within the framework:

- The [Coupling Constants](/derivations/cosmology/coupling-constants) derivation constrains the gauge couplings at the crystallization scale via bootstrap self-consistency
- The [Electroweak Breaking](/derivations/gauge/electroweak-breaking) derivation determines the symmetry-breaking pattern
- The ratio $g'/g$ at the crystallization scale, evolved to $M_Z$ by the [Renormalization Group](/derivations/thermodynamics-ext/renormalization), should yield $\sin^2\theta_W$

## Derivation Strategy

1. **Coupling ratio at crystallization**: From the [Coupling Constants](/derivations/cosmology/coupling-constants) derivation, extract the ratio $g_1/g_2$ (or equivalently $g'/g$) at the coherence crystallization scale $\Lambda_{\text{cryst}}$.

2. **RG evolution**: Use the [Renormalization Group](/derivations/thermodynamics-ext/renormalization) flow with the Standard Model beta functions (whose field content is fixed by the [Three Generations](/derivations/particles/three-generations) and [Chirality Selection](/derivations/gauge/chirality-selection) derivations) to evolve the coupling ratio from $\Lambda_{\text{cryst}}$ down to $M_Z$.

3. **Weinberg angle extraction**: At the $Z$ mass, $\sin^2\theta_W = g'^2/(g^2 + g'^2)$.

4. **Comparison with observation**: Verify consistency with $\sin^2\theta_W(M_Z) = 0.23122 \pm 0.00004$.

## Dependencies

| Derivation | What it provides |
|---|---|
| [Weak Interaction](/derivations/gauge/weak-interaction) | $SU(2)_L$ gauge structure |
| [Electroweak Breaking](/derivations/gauge/electroweak-breaking) | Symmetry-breaking pattern, $W/Z$ mass relation |
| [Coupling Constants](/derivations/cosmology/coupling-constants) | Gauge couplings at crystallization scale |

## Open Gaps

**Gap 1.** The [Coupling Constants](/derivations/cosmology/coupling-constants) derivation currently yields coupling ratios but does not isolate $g'/g$ with sufficient precision to predict $\theta_W$. This is the primary bottleneck.

**Gap 2.** The crystallization scale $\Lambda_{\text{cryst}}$ itself is not precisely determined. Its value affects the RG running distance and thus the low-energy prediction.

**Gap 3.** Whether the framework predicts the GUT-normalization $g_1 = \sqrt{5/3}\, g'$ or a different normalization at the crystallization scale is an open question that affects the numerical result.

## Addresses Gaps In

- [Weak Interaction](/derivations/gauge/weak-interaction), Gap: "The Weinberg angle $\sin^2\theta_W \approx 0.231$ at the $Z$ mass is an empirical parameter... value should ultimately follow from the Coupling Constants derivation"
- [Electroweak Breaking](/derivations/gauge/electroweak-breaking), Gap: "The value $\sin^2\theta_W \approx 0.231$ should be derivable from the relative strengths of $SU(2)_L$ and $U(1)_Y$ at the crystallization scale"
