---
title: "From Observation to Axioms"
status: "rigorous"
dependsOn: []
enablesDerivation: ["axioms/coherence-conservation", "axioms/observer-definition", "axioms/loop-closure"]
tags: ["foundation", "axioms"]
summary: "Five operational definitions of observation and observerhood, and the formal structure they force — the starting point for the three axioms"
rigorLevel: "formal"
lastUpdated: 2026-04-11
---

## Overview

This page answers a foundational question: **what formal mathematical structure is forced by taking observation seriously as a physical primitive?**

The [Motivation](/motivation) page describes the project's starting point in plain language: observation is the residue of interaction, remembered; an observer is a system that has an identity, participates in interactions, and maintains its identity through those interactions. Before deriving anything, we need to sharpen these ideas into precise operational definitions that a mathematician can act on.

**The argument.** Five operational definitions — of observation, observer, persistence, closed ontology, and composition — are stated below. Each captures one aspect of what it means to observe. From these five definitions, the formal apparatus of the three axioms follows: the σ-algebra and coherence measure of [Coherence Conservation](/derivations/axioms/coherence-conservation), the observer triple and Hausdorff topology of [The Observer Definition](/derivations/axioms/observer-definition), and the full dynamical structure of [Loop Closure](/derivations/axioms/loop-closure). All forty formal elements introduced across the three axioms are forced by these five definitions.

**The result.** The framework's claim is: the entire formal apparatus of the three axioms follows from five operational definitions about observation. Smooth dynamics is forced by the structural Noether link between identity and dynamics. Symplectic structure is forced by the existence of composite observers. Even the exclusion of quasi-periodicity — which might appear to require an appeal to the discrete energy spectrum — is forced by the requirement that composites satisfy loop closure. No additional input beyond the five definitions is needed.

**An honest caveat.** "Forced" here means: given the operational definition, the formal element is the unique (or minimal) mathematical structure consistent with it. This is a claim about logical entailment from precisely stated premises, not about the absence of alternatives in some absolute sense. A reader who questions a specific forcing argument should consult the relevant axiom page, where each argument is given in full.

## The Five Operational Definitions

### Definition 1 (Observation)

**To observe is to interact with a separate system in a way that updates the observing system's state without destroying it in the process.** Observation is the residue of interaction, remembered.

Operational content:
- There are at least two systems involved (the observer and the observed) that are operationally distinguishable from each other.
- The interaction modifies the observer's internal state.
- The modification persists after the interaction ends — observation produces a *residue*.
- The observer survives the interaction — its identity is preserved across the modification.

### Definition 2 (Observer)

**An observer is a system that has an identity, participates in interactions, and maintains its identity through those interactions.**

Operational content:
- An observer has an *identity* — something that distinguishes it from non-observer systems and from other observers.
- An observer has *internal states* — configurations that can be modified by interactions while the identity persists.
- An observer participates in interactions of the kind described in Definition 1.
- The identity is *maintained through* (not destroyed by) those interactions.

### Definition 3 (Persistence)

**An observer persists if it continues to satisfy Definition 2 over the course of repeated interactions.**

Operational content:
- Persistence is defined relative to repeated interaction, not relative to a clock or time parameter.
- Persistence requires that the observer remain in a configuration that still satisfies Definition 2 after each interaction.
- An observer that loses its identity in any interaction has not persisted.

### Definition 4 (Closed ontology)

**The universe of all observers and observed systems is closed: there is no external reservoir from which new content can flow in or to which content can leak out.**

Operational content:
- The total "stuff" of reality is bounded.
- Operationally, this means any interaction is *between* systems that are already part of the universe — interactions do not create new ontology.

### Definition 5 (Composition)

**Given two observers, their composite — the system consisting of both, together with any relational structure between them — is itself a system capable of observation.**

Operational content:
- If two systems can each observe, their combination can also observe.
- The composite *contains* its sub-observers: any information a sub-observer has about an external system, the composite also has, because the sub-observer is a part of it.
- Widening the observer boundary (including additional sub-observers in the composite) is not an interaction — it does not create or destroy residue (Definition 1). The existing relational coherence between a sub-observer and an external system persists when the boundary is widened.
- Composition is the operational basis of the bootstrap mechanism (derived later): observers can build hierarchies of composite observers through repeated interaction.

## What the Definitions Imply

The five definitions above determine most of the mathematical structure that the three axiom pages introduce. The logic is traced in full in the Operational Grounding section of each axiom page; what follows is a summary.

**Coherence Conservation** ([Axiom 1](/derivations/axioms/coherence-conservation)). The requirement that subsystems be operationally composable and complementable forces a $\sigma$-algebra of admissible subsystems (Definitions 1 and 2). Closed ontology with finite total resources forces a conserved, positive, finite measure — the coherence measure with its conditions C1–C3 (Definition 4). The requirement that grouping disjoint subsystems cannot create currency forces subadditivity, C4 (Definition 1). The requirement that composite observers contain their sub-observers, combined with the fact that widening a boundary is not an interaction, forces strong subadditivity, C5 (Definitions 5 and 1): a composite's relational coherence with any external system is at least as large as any sub-observer's. The interaction residue being operationally binary forces the dependency graph to be discrete, directed, and acyclic (Definitions 1 and 3), and closed ontology applied to graph slices forces conservation across Cauchy slices (Definition 4). All thirteen formal elements of this axiom are traced to the operational definitions; no additional input is required.

**The Observer Definition** ([Axiom 2](/derivations/axioms/observer-definition)). The operational definition of observer (Definition 2) directly yields the triple $(\Sigma, I, \mathcal{B})$ — state space, conserved invariant, and self/non-self boundary. The requirement that observers have well-defined states forces the Hausdorff condition on the topology: uniqueness of limits for convergent nets is equivalent to T2 separation, and ambiguous limits would make the observer's identity indeterminate (Definition 2). The requirement that admissible transformations preserve operational similarity forces the homeomorphism condition on automorphisms. Non-triviality conditions follow from "real internal structure" (N1), "threats exist" (N2), and "identity carries information" (N3). All fourteen formal elements of this axiom are traced to the operational definitions.

**Loop Closure** ([Axiom 3](/derivations/axioms/loop-closure)). Persistence (Definition 3) forces self-sustaining one-parameter dynamics — the current state must determine the next state. Finite resources (from Axiom 1) combined with the drift bound forces recurrence: a non-recurrent flow on a compact state space has finite lifetime. Smooth ($C^\infty$) dynamics is forced by Definition 2's requirement that identity be maintained *through* interactions — the structural Noether link between the invariant and the $U(1)$ dynamics requires a Lie algebra, a smooth action, and a smooth manifold. Symplectic structure is forced by composition (Definition 5): the product of two $U(1)$ orbits carries a canonical symplectic form, and constrained composites inherit it via symplectic reduction. Exact periodicity (excluding quasi-periodicity) is forced by composition and loop closure together: composite observers must satisfy Axiom 3, which requires a common period for all sub-observer frequencies, forcing all frequencies to be commensurate. Once these structures are established, the $U(1)$ action, free orbits, Lyapunov stability, invariant Riemannian metric, and positive coherence cost all follow. All thirteen formal elements of this axiom are traced to the operational definitions.

## Open Gaps

None. All formal elements are traced to the five operational definitions, and the downstream connections (Born rule chain, manifold structure induction) are resolved in the relevant derivation pages.
