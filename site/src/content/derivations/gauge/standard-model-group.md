---
title: "Standard Model Gauge Group"
status: "stub"
dependsOn: ["gauge/electromagnetism", "gauge/weak-interaction", "gauge/color-force"]
enablesDerivation: ["cosmology/coupling-constants"]
tags: ["gauge"]
summary: "Deriving that U(1)×SU(2)×SU(3) is the complete gauge group from the termination of the division algebra hierarchy"
rigorLevel: "informal"
lastUpdated: 2026-03-09
---

## Target

**Prove that the Standard Model gauge group $U(1) \times SU(2) \times SU(3)$ is the unique and complete gauge group consistent with the framework's axioms.**

The four normed division algebras ($\mathbb{R}, \mathbb{C}, \mathbb{H}, \mathbb{O}$) generate gauge groups (trivial, U(1), SU(2), SU(3)). Since Hurwitz's theorem (1898) proves no further normed division algebras exist, the gauge hierarchy terminates. The full Standard Model group is the product of all non-trivial factors: $U(1) \times SU(2) \times SU(3)$.

This derivation would explain one of the deepest unexplained facts in physics: why the gauge group is what it is, and why there is no larger (grand unified) group.

## Prior Work

The earlier whitepaper (idea #14) proposed that the SM gauge group arises as the complete set of informational calibrations consistent with finite self-reference. The hierarchy $\mathbb{R} \to \mathbb{C} \to \mathbb{H} \to \mathbb{O}$ terminates because the Cayley-Dickson construction beyond octonions (sedenions, etc.) loses the normed division algebra property — specifically, sedenions have zero divisors.

The mathematical fact is solid: Hurwitz's theorem is a classical result in algebra. The physical connection (division algebras → gauge groups) has been explored by Furey (2012–present), Dixon (1994), and Todorov-Drenska (2018), with significant partial results including derivations of the Standard Model fermion representations.

## Proposed Approach

1. **Synthesize the three gauge derivations**: Electromagnetism ($\mathbb{C} \to U(1)$), Weak Interaction ($\mathbb{H} \to SU(2)$), Color Force ($\mathbb{O} \to SU(3)$) are individual results. This derivation proves their product is the complete gauge group.
2. **No further extension**: Show that attempting to extend the gauge hierarchy beyond octonions (i.e., to sedenions $\mathbb{S}$) violates a framework axiom — likely coherence conservation, since sedenions have zero divisors (non-zero elements whose product is zero), which would allow coherence to vanish.
3. **Representation theory**: The division algebra approach also constrains the fermion representations. Show that the known Standard Model fermion multiplets are the unique representations consistent with the octonionic structure.
4. **No grand unification**: As a corollary, show that no simple group $G \supset U(1) \times SU(2) \times SU(3)$ can arise from the framework. This is a prediction: the gauge group does not unify.

### Structural Postulate Needed

This derivation should require no additional postulates beyond those of the three individual gauge derivations. It is a closure result: given the three factors, the product is complete.

## Key Challenges

1. **Product vs. simple**: Why is the gauge group a direct product $U(1) \times SU(2) \times SU(3)$ rather than a simple group? Standard grand unification assumes a simple group breaks down to the SM group. The framework should explain why the product structure is fundamental.
2. **Zero divisors as coherence violation**: The argument that sedenions are excluded because zero divisors violate coherence conservation needs to be made precise. A zero divisor $a \cdot b = 0$ with $a, b \neq 0$ would mean two non-zero coherence contributions combine to zero — violating the subadditivity or positivity properties of coherence.
3. **Hypercharge assignments**: The specific U(1) hypercharge assignments of SM fermions should follow from the octonionic structure. This is where Furey's work has had significant success — the charges emerge from the algebra's split complex structure.

## Connection to Existing Derivations

| Prerequisite | What it provides |
|---|---|
| [Electromagnetism](/derivations/gauge/electromagnetism) | U(1) gauge factor |
| [Weak Interaction](/derivations/gauge/weak-interaction) | SU(2) gauge factor |
| [Color Force](/derivations/gauge/color-force) | SU(3) gauge factor |
| [Bootstrap Mechanism](/derivations/interactions/bootstrap) | Hierarchy with ceiling |
| [Coherence Conservation](/derivations/axioms/coherence-conservation) | Excludes zero-divisor algebras |

## Success Criteria

1. Prove the SM gauge group is the unique product consistent with the division algebra hierarchy
2. Show that extending beyond octonions violates coherence conservation (zero divisors)
3. Derive the fermion representations (or at least constrain them) from the algebraic structure
4. Prove no grand unified group exists as a consequence (negative prediction)
5. Explain the product structure (why not a simple group)
