---
title: "Quantum Foundations"
subtitle: "A complete derivation of quantum mechanics from the structural definition of observers"
order: 1
relatedDerivations:
  - "quantum/born-rule"
  - "quantum/preferred-basis"
  - "quantum/measurement"
  - "quantum/entanglement"
  - "quantum/teleportation"
  - "quantum/observer-relative-objectivity"
  - "quantum/sheaf-section-uniqueness"
  - "axioms/coherence-operational"
  - "thermodynamics-ext/distinguishability-conservation"
relatedPredictions:
  - "exact-unitarity"
  - "holographic-noise"
---

## The Problem

The measurement problem has persisted for a century. Quantum mechanics predicts outcomes with extraordinary precision, but it cannot describe the process that produces those outcomes without invoking an undefined entity — the observer — from outside the theory. Every proposed resolution makes a trade-off: Copenhagen accepts the gap and refuses to analyze measurement further. Many Worlds eliminates collapse but multiplies universes. Bohmian mechanics restores determinism but adds hidden variables. GRW modifies the Schr&ouml;dinger equation itself. Decoherence explains the *appearance* of collapse but cannot select a single outcome.

All of these approaches share a common assumption: that the observer is external to physics, and the best we can do is manage the consequences of that externality.

Observer-Centrism takes a different path. It defines what an observer *is* — structurally, mathematically, with no reference to consciousness or awareness — and derives quantum mechanics as a consequence of any universe that contains such observers. The measurement problem dissolves not because it is declared unphysical, but because the framework has the formal tools to describe every step of the process.

## The Key Move

An observer is a triple: a state space, a conserved quantity (Noether invariant), and a boundary between self and non-self. A proton qualifies. An electron qualifies. Nothing about consciousness, intelligence, or subjective experience enters at any point.

Measurement, in this framework, is a **Type III interaction** — a specific kind of exchange between observers that generates a new relational invariant. A relational invariant is a structural correlation between two observers that, once created, cannot be undone without violating coherence conservation. It is the physical residue of an interaction, permanently recorded in the relationship between the interacting systems.

What conventional quantum mechanics calls "collapse" is the creation of this relational invariant. It is local (happens where the interaction occurs), unitary (the joint system evolves unitarily throughout), and irreversible (the relational invariant is permanent). No non-unitary process is invoked. No external observer is needed. No special "measurement apparatus" is distinguished from ordinary physical interactions — because there is no fundamental distinction.

## What the Framework Derives

The following results are all rigorous derivations from the three axioms — not postulates, not interpretive choices, not assumptions:

### The Born Rule Is Unique

The probability rule $P(k) = |\psi_k|^2$ is not one of many possible rules — it is the **only** probability measure compatible with coherence conservation, phase covariance (from the $U(1)$ loop closure), and the composition structure of the observer network. The derivation goes through a Cauchy multiplicative equation: the constraints force $\mathcal{C}(|\psi\rangle) = \langle\psi|\psi\rangle$, and the Born rule follows. This is not a philosophical argument for why probabilities should be this way — it is a mathematical uniqueness theorem.

**Formal derivation:** [Born Rule from Coherence Conservation](/derivations/quantum/born-rule)

### The Measurement Basis Is Determined by the Interaction

The "preferred basis problem" — why does measurement yield position or momentum or spin, rather than some arbitrary superposition? — is resolved structurally. When two observers interact, the interaction generates a specific relational invariant. The eigenbasis of that invariant is the measurement basis. Different interactions generate different relational invariants, hence different bases.

This is not environment-induced superselection (einselection). The basis is determined by the *interaction Hamiltonian*, not by decoherence from an environment. Complementarity and the uncertainty principle emerge naturally: interactions that generate position-type relational invariants are incompatible with those that generate momentum-type invariants, because the corresponding operators do not commute.

**Formal derivation:** [Preferred Basis from Relational Invariants](/derivations/quantum/preferred-basis)

### Measurement Is Ordinary Physics

The measurement process has three steps, all of which are standard physical interactions:

1. The observer and system interact (Type III interaction), generating a relational invariant.
2. The relational invariant's eigenbasis determines which observable was "measured."
3. The outcome is the eigenvalue corresponding to the generated invariant.

There is no "collapse postulate." There is no moment where unitarity is suspended. The Wigner's friend scenario is resolved without contradiction: each observer has a consistent description in terms of its own relational invariants, and these descriptions are compatible (though not identical) when compared via the sheaf structure of the observer network.

**Formal derivation:** [Measurement as Relational Invariant Generation](/derivations/quantum/measurement)

### Entanglement Is Relational Coherence

Quantum entanglement is the Hilbert-space image of relational invariants between observers. The coherence of a relational invariant maps exactly to the von Neumann entanglement entropy. No-cloning and entanglement monogamy follow directly from coherence conservation — you cannot create correlations from nothing, and you cannot share a correlation with a third party without diluting it.

Teleportation is relational invariant transfer: the original invariant is destroyed (no-cloning), the entangled channel is consumed (one-time use), and classical communication is necessary (no superluminal signaling). The framework reproduces the standard teleportation protocol and proves its exact fidelity.

**Formal derivations:** [Entanglement](/derivations/quantum/entanglement), [Teleportation](/derivations/quantum/teleportation)

### Unitarity, No-Cloning, and No-Deleting Are Theorems

These are not independent physical laws — they are all consequences of a single principle: **conservation of distinguishability**. Coherence conservation (Axiom 1) implies that all coherence-derived distance measures are preserved under admissible transformations. This immediately forces:

- **Unitarity**: dynamics are isometries of the coherence geometry (Wigner's theorem)
- **No-cloning**: copying a state would create correlations from nothing, violating conservation
- **No-deleting**: erasing a state would destroy correlations, violating conservation
- **Monotonicity**: coarse-graining (losing track of degrees of freedom) can only reduce distinguishability, never increase it — this is the second law of thermodynamics

**Formal derivation:** [Conservation of Distinguishability](/derivations/thermodynamics-ext/distinguishability-conservation)

### Observer-Relativity Is Structural, Not Subjective

The framework produces a precise three-level classification of physical facts:

- **Level 1 (observer-invariant):** Conservation laws, network topology, total coherence. These are the same for all observers.
- **Level 2 (observer-relative but constrained):** Measurement outcomes. Each observer has its own outcomes, but they are uniquely determined by the Born rule and the relational invariants that observer has generated. Different observers' outcomes are compatible — they can be stitched together into a consistent global picture via a sheaf structure.
- **Level 3 (observer-undefined):** Facts about systems an observer has never interacted with. These are not "unknown" — they are structurally undefined, because no relational invariant exists to make them definite.

This dissolves the subjective-vs-objective debate: physical facts are neither purely subjective (they are constrained by the Born rule and coherence conservation) nor purely objective in the classical sense (they depend on which relational invariants the observer has generated).

**Formal derivations:** [Observer-Relative Objectivity](/derivations/quantum/observer-relative-objectivity), [Sheaf Structure](/derivations/quantum/sheaf-section-uniqueness)

## How It Compares to Existing Interpretations

| | Copenhagen | Many Worlds | Bohmian | GRW | Relational QM | This framework |
|---|---|---|---|---|---|---|
| Collapse? | Postulated | Denied (branching) | Apparent (guidance) | Modified dynamics | Relational | Derived (invariant generation) |
| Observer defined? | No | No | No | No | Partially | Yes (axiom) |
| Unitarity? | Suspended | Exact | Exact | Modified | Exact | Derived as theorem |
| Outcomes? | Single, undefined | All, in branches | Single, guided | Single, stochastic | Relative | Relative, constrained |
| Born rule? | Postulated | Derived (contested) | Postulated | Modified | Postulated | Derived (uniqueness theorem) |
| Testable difference? | None | None (in practice) | None | Collapse rate | None | Exact unitarity, holographic noise |

The framework is closest to Rovelli's Relational QM in spirit — both reject observer-independent states and ground physics in relations between systems. The key differences: this framework *derives* the relational structure from axioms (Relational QM postulates it), provides a formal definition of observer (Relational QM does not), and derives the Born rule as a uniqueness theorem (Relational QM takes it as given).

## What's Testable

Two predictions directly relevant to quantum foundations:

**Exact unitarity at all scales.** The framework derives unitarity from coherence conservation — there is no room for GRW-style spontaneous collapse modifications. Any detected violation of unitarity (e.g., anomalous decoherence rates in macroscopic superposition experiments) would falsify the framework.

**Holographic noise with angular structure.** The same coherence conservation that gives the Born rule, applied to interferometer horizons, predicts a specific holographic noise signature: strain PSD $S_h = 2\alpha_H \ell_P/c$ with overlap reduction function $\Gamma(\beta) = \cos\beta$ between interferometers at angle $\beta$. This is measurable with co-located interferometers and distinguishable from other holographic noise models by its angular dependence.

## What's Open

**The single-outcome question.** The framework explains *why* measurement has definite outcomes (relational invariant generation is a discrete event) and *which* outcomes occur (Born rule), but the question "why *this* outcome and not that one?" receives a structural answer: the coherence dependency graph contains all outcomes as nodes, and the observer's trajectory through the graph appears random from within but is determined from the atemporal perspective of the complete graph. Whether this fully resolves the question or merely relocates it is a matter of ongoing assessment.

**Hilbert space structure.** The Born rule derivation forces $\mathcal{C}(|\psi\rangle) = \langle\psi|\psi\rangle$, which implies Hilbert space. But the derivation assumes the coherence measure is continuous and the state space is a manifold (from the loop closure axiom). Whether these assumptions can be further weakened is open.
