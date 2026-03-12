---
title: "Anomaly Cancellation"
status: "stub"
dependsOn: ["gauge/chirality-selection", "gauge/standard-model-group", "axioms/coherence-conservation"]
enablesDerivation: []
tags: ["gauge", "anomaly", "fermion-content"]
summary: "The Standard Model's chiral fermion content is anomaly-free. This constraint should follow from coherence conservation applied to the chirality-selected gauge group."
rigorLevel: "informal"
lastUpdated: 2026-03-11
---

## Statement

**Target Theorem.** The fermion representations selected by the chirality mechanism (Derivation: [Chirality Selection](/derivations/gauge/chirality-selection)) satisfy all gauge anomaly cancellation conditions:

$$\text{Tr}[T_a^2 Y] = 0, \qquad \text{Tr}[Y^3] = 0, \qquad \text{Tr}[\text{grav}^2 Y] = 0$$

for all generators $T_a$ of $SU(3)_C \times SU(2)_L \times U(1)_Y$.

## Motivation

In the Standard Model, anomaly cancellation is a non-trivial constraint that the observed fermion content happens to satisfy. Within the framework, this should not be a coincidence — coherence conservation (Axiom 1) requires the quantum theory to be consistent, which demands anomaly freedom. The chirality-selection mechanism already restricts which representations can appear; the claim is that this restriction is *exactly* sufficient to guarantee anomaly cancellation.

## Derivation Strategy

1. **Coherence-conservation constraint**: Coherence conservation on a Cauchy slice requires the partition function to be gauge-invariant under all large gauge transformations. This is precisely the anomaly-freedom condition.

2. **Chirality-selected representations**: From the [Chirality Selection](/derivations/gauge/chirality-selection) derivation, the boundary operator $\mathcal{B}$ selects chiral fermions in representations determined by the division-algebra structure. Enumerate the allowed representations.

3. **Anomaly polynomial computation**: Compute the anomaly polynomial $I_6$ for the chirality-selected fermion content and show it vanishes identically.

4. **Generation structure**: Use the [Three Generations](/derivations/particles/three-generations) result to show that each generation independently satisfies the anomaly conditions, so the full three-generation content is anomaly-free.

## Dependencies

| Derivation | What it provides |
|---|---|
| [Chirality Selection](/derivations/gauge/chirality-selection) | Chiral fermion representations from boundary operator |
| [SM Gauge Group](/derivations/gauge/standard-model-group) | $SU(3)_C \times SU(2)_L \times U(1)_Y$ structure |
| [Coherence Conservation](/derivations/axioms/coherence-conservation) | Partition function consistency requirement |

## Open Gaps

**Gap 1.** The explicit computation of the anomaly polynomial for the chirality-selected representations has not been performed. This is the core calculation needed.

**Gap 2.** The connection between coherence conservation on Cauchy slices and the perturbative anomaly cancellation conditions needs to be made precise — specifically, showing that coherence conservation implies the Wess-Zumino consistency conditions.

**Gap 3.** The [SM Gauge Group](/derivations/gauge/standard-model-group) derivation already contains Proposition 5.1 on anomaly cancellation, but it relies on the known fermion content rather than deriving it from the chirality mechanism. This derivation should close that gap.

## Addresses Gaps In

- [Chirality Selection](/derivations/gauge/chirality-selection), Gap: "SM chiral fermion content is anomaly-free... constraint should follow from coherence conservation... but the calculation has not been performed"
- [Weak Interaction](/derivations/gauge/weak-interaction), Gap: "SM is free of gauge anomalies... framework should reproduce this constraint from coherence conservation"
