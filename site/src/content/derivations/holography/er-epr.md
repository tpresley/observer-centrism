---
title: "ER=EPR Formalization"
status: "stub"
dependsOn: ["quantum/entanglement", "holography/area-scaling", "holography/causal-set-statistics", "spacetime/einstein-equations"]
enablesDerivation: []
tags: ["holography", "entanglement", "wormhole", "ER-EPR"]
summary: "Relational invariants between spatially separated observers manifest as both entanglement (EPR) and non-traversable wormholes (ER). The framework predicts ER=EPR is exact because relational invariants are the fundamental objects underlying both."
rigorLevel: "informal"
lastUpdated: 2026-03-11
---

## Statement

**Target Theorem.** For any two observers $\mathcal{O}_1, \mathcal{O}_2$ sharing a relational invariant $I_{12}$, the coherence channel associated with $I_{12}$ has dual descriptions:

1. **Quantum (EPR)**: The relational invariant produces entanglement between the observers' subsystems, as derived in [Entanglement](/derivations/quantum/entanglement).

2. **Geometric (ER)**: The coherence concentration along the channel curves spacetime geometry (via [Einstein Equations](/derivations/spacetime/einstein-equations)), producing a non-traversable Einstein-Rosen bridge whose throat area is

$$A_{\text{ER}} = 4 \ell_P^2\, S_{\text{ent}}(I_{12})$$

where $S_{\text{ent}}$ is the entanglement entropy of the relational invariant.

These are not two different phenomena connected by a conjecture — they are the same underlying structure (the relational invariant) viewed in two different descriptions.

## Motivation

The Maldacena-Susskind conjecture (ER=EPR, 2013) proposes that entangled particles are connected by non-traversable wormholes. Within the framework, this should be a *theorem*, not a conjecture, because:

- Entanglement arises from relational invariants ([Entanglement](/derivations/quantum/entanglement))
- Geometry arises from coherence concentration ([Einstein Equations](/derivations/spacetime/einstein-equations))
- Relational invariants *are* coherence channels, so they simultaneously produce both entanglement and geometric structure
- The [Area Scaling](/derivations/holography/area-scaling) derivation already connects coherence to area, providing the bridge

The [Entanglement](/derivations/quantum/entanglement) derivation contains a sketch of this argument (Proposition 5.1) that needs to be made rigorous.

## Derivation Strategy

1. **Relational invariant as coherence channel**: From the [Entanglement](/derivations/quantum/entanglement) derivation, a relational invariant $I_{12}$ between separated observers defines a coherence channel $\gamma_{12}$ in the causal set.

2. **Entanglement entropy from channel**: The entanglement entropy $S_{\text{ent}}$ is determined by the coherence measure on $\gamma_{12}$, as established in the entanglement derivation.

3. **Geometric dual of channel**: By the [Einstein Equations](/derivations/spacetime/einstein-equations), the coherence-energy density along $\gamma_{12}$ produces spacetime curvature. Show that the resulting geometry contains a minimal surface (the wormhole throat) whose area satisfies the [Area Scaling](/derivations/holography/area-scaling) bound.

4. **Non-traversability**: The coherence channel preserves the Noether invariant $I_{12}$ but cannot transmit independent coherence (by the no-signaling constraint from relational invariants). Show this implies the wormhole is non-traversable.

5. **Exact correspondence**: Use the [Causal Set Statistics](/derivations/holography/causal-set-statistics) derivation to show the correspondence is exact at all orders — the causal set structure of the coherence channel is isomorphic to the discrete wormhole geometry.

## Dependencies

| Derivation | What it provides |
|---|---|
| [Entanglement](/derivations/quantum/entanglement) | Relational invariants as source of entanglement; Proposition 5.1 sketch |
| [Area Scaling](/derivations/holography/area-scaling) | Coherence–area connection |
| [Causal Set Statistics](/derivations/holography/causal-set-statistics) | Discrete geometry statistics |
| [Einstein Equations](/derivations/spacetime/einstein-equations) | Coherence concentration → curvature |

## Open Gaps

**Gap 1.** The central argument — that a coherence channel's geometric dual is an Einstein-Rosen bridge — requires showing that the coherence energy distribution along $\gamma_{12}$ produces a topology change (from $\mathbb{R}^3$ to $\mathbb{R}^3 \# \mathbb{R}^3$). This is the hardest step and may require the full causal set machinery.

**Gap 2.** The no-signaling constraint must be derived from relational invariant properties, not assumed. The [Entanglement](/derivations/quantum/entanglement) derivation's Proposition 5.1 states this but does not prove it from the axioms.

**Gap 3.** The exact area-entropy correspondence ($A = 4\ell_P^2 S$) for an arbitrary relational invariant (not just black hole horizons) needs to be derived from [Area Scaling](/derivations/holography/area-scaling), which currently proves it for causal horizons only.

## Addresses Gaps In

- [Entanglement](/derivations/quantum/entanglement), Gap: "Make the ER=EPR sketch (Proposition 5.1) rigorous by connecting to the Area Scaling and Causal Set Statistics derivations"
- [Information Paradox](/derivations/holography/information-paradox), Gap: "Relational invariants between coherence-dual pairs are the structural analogue of Einstein-Rosen bridges. Formalizing this connection would strengthen the information paradox resolution."
