---
title: "Coherence First Law"
status: "stub"
dependsOn: ["thermodynamics/entropy", "thermodynamics/action-planck"]
enablesDerivation: []
tags: ["thermo-ext"]
summary: "Deriving the explicit first-law form dU = δQ − δW in coherence variables from the existing entropy and action derivations"
rigorLevel: "informal"
lastUpdated: 2026-03-09
---

## Target

**State and prove an explicit First Law of Coherence Thermodynamics: $dU = \delta Q - \delta W$, where all quantities are expressed in coherence variables.**

The framework derives the second law (entropy increases) and recovers Boltzmann entropy. The first law — energy conservation in thermodynamic form — is implicit in coherence conservation (Axiom 1) but has not been stated explicitly in the dU = δQ − δW form with clear identification of internal coherence energy $U$, heat $Q$ (coherence transferred via uncontrolled channels), and work $W$ (coherence transferred via controlled channels).

This is the most straightforward of the extension stubs — all ingredients already exist.

## Prior Work

The earlier whitepaper (idea #19) proposed: $dU = \delta Q - \delta W$ where $U$ is internal coherence, $Q$ is curvature work (coherence exchange mediated by geometry), and $W$ is flux loss (coherence leaving the observer's domain). This maps cleanly onto the current framework's existing concepts.

## Proposed Approach

1. **Internal coherence $U$**: For an observer system $\mathcal{A}$, define $U_\mathcal{A} = C(\mathcal{A}) - C_{\text{ground}}$, where $C(\mathcal{A})$ is the total coherence content and $C_{\text{ground}}$ is the ground-state coherence (the minimum compatible with $\mathcal{A}$'s structure).
2. **Heat $\delta Q$**: Coherence exchanged via Type III interactions (uncontrolled, irreversible) — the channels that generate new relational invariants. This corresponds to the entropy-generating processes in the existing entropy derivation.
3. **Work $\delta W$**: Coherence exchanged via Type I interactions (controlled, reversible) — the channels that preserve existing relational invariants. This corresponds to adiabatic processes.
4. **First Law**: Coherence conservation (Axiom 1) applied to system $\mathcal{A}$ gives:
   $$dC(\mathcal{A}) = \delta C_{\text{in}} - \delta C_{\text{out}}$$
   Decomposing each term into controlled (work) and uncontrolled (heat) channels:
   $$dU = \delta Q - \delta W$$
5. **Temperature**: Define coherence temperature $T_C = \partial U / \partial S_C$, where $S_C$ is the coherence entropy from the entropy derivation.
6. **Recover standard thermodynamics**: Under the uniform-coherence assumption (already used in the entropy derivation to recover Boltzmann entropy), show that $T_C$ reduces to standard thermodynamic temperature and the first law reduces to the standard form.

### Structural Postulate Needed

None — this derivation uses only existing results (Axiom 1, entropy derivation, action-planck derivation, interaction type classification).

## Key Challenges

1. **Clean decomposition**: The split between "heat" and "work" requires a clear criterion for which coherence exchanges are controlled vs. uncontrolled. The interaction type classification (Type I = passage, Type II = fusion, Type III = irreversible) provides this, but the boundary may not always be sharp.
2. **Temperature identification**: The coherence temperature $T_C$ must reduce to standard temperature $T$. This follows from the Boltzmann entropy recovery in the entropy derivation, but the proof needs to be explicit.
3. **Scope**: This derivation applies to systems described by the bootstrap hierarchy. Extending to arbitrary quantum systems requires the Born rule and preferred basis results.

## Connection to Existing Derivations

| Prerequisite | What it provides |
|---|---|
| [Coherence Conservation](/derivations/axioms/coherence-conservation) | Global conservation law ($dC = 0$ for closed systems) |
| [Three Interaction Types](/derivations/interactions/three-types) | Classification of coherence exchange channels |
| [Entropy](/derivations/thermodynamics/entropy) | Second law, coherence entropy $S_C$, Boltzmann recovery |
| [Action and Planck's Constant](/derivations/thermodynamics/action-planck) | Coherence cost as action, energy-time Noether pair |

## Success Criteria

1. State the first law in coherence variables with precise definitions of $U$, $Q$, $W$
2. Prove it from Axiom 1 and the interaction type classification
3. Recover the standard first law under the uniform-coherence assumption
4. Define coherence temperature and show equivalence to thermodynamic temperature
5. Require no additional structural postulates
