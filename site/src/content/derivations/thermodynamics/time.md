---
title: "Time as Phase Ordering"
status: "draft"
dependsOn: ["minimal-observer/structure", "interactions/three-types"]
enablesDerivation: ["thermodynamics/entropy", "thermodynamics/action-planck", "quantum/born-rule"]
tags: ["dynamics"]
summary: "Time is the partial ordering of events induced by phase transfer across the observer network — derived, not postulated"
rigorLevel: "semi-formal"
sourceSection: "05-time-entropy-action"
lastUpdated: 2026-03-08
---

## Statement

Time is not a background parameter against which physics unfolds. It is the ordering structure forced by coherence-preserving interactions across the observer network. The arrow of time is the direction of relational invariant accumulation.

## Derivation

### Step 1: The Interaction Graph

Define the **interaction graph** $\mathcal{G} = (V, E)$:

- **Vertices** $V$: each vertex represents an interaction event — a point where two or more observers exchange phase (Type I) or generate relational invariants (Type III) or fuse (Type II)
- **Edges** $E$: directed edges connect events related by phase transfer. If event $A$ transfers phase to event $B$, there is a directed edge $A \to B$

Each minimal observer contributes a sequence of vertices to $\mathcal{G}$ — one for each cycle of its internal loop. The observer's phase advances monotonically along this sequence.

### Step 2: Phase Transfer Is Directed

In a Type I interaction, observer $\mathcal{O}_1$ at phase $\theta_1$ transfers phase $\delta\theta$ to observer $\mathcal{O}_2$ at phase $\theta_2$:

$$\theta_1 \mapsto \theta_1 - \delta\theta, \qquad \theta_2 \mapsto \theta_2 + \delta\theta$$

This transfer is **directed** because of the loop closure condition. Each observer's phase advances monotonically (the loop only runs forward — running backward would require negative coherence cost, which violates Axiom 1). The transfer therefore has a definite direction in the interaction graph: from the source observer's current phase position to the receiving observer's current phase position.

*Why can't the loop run backward?* A forward phase advance costs coherence $\delta\mathcal{C} > 0$ (the loop closure condition requires positive coherence expenditure per cycle, to be formalized in [Action and Planck's Constant](/derivations/thermodynamics/action-planck)). Running backward would require $\delta\mathcal{C} < 0$ — extracting coherence from the loop — which would violate the loop's invariant preservation. The observer would lose its conserved charge and dissolve.

### Step 3: The Partial Order

Define the relation $\prec$ on vertices of $\mathcal{G}$:

$$A \prec B \iff \text{there exists a directed path from } A \text{ to } B \text{ in } \mathcal{G}$$

**Claim.** $(\mathcal{G}, \prec)$ is a **partial order** (reflexive, antisymmetric, transitive):

- **Reflexive**: $A \prec A$ trivially (path of length 0)
- **Transitive**: If $A \prec B$ and $B \prec C$, the paths concatenate, so $A \prec C$. $\checkmark$
- **Antisymmetric**: If $A \prec B$ and $B \prec A$, there would be a directed cycle in $\mathcal{G}$. But a directed cycle would mean an observer's phase returns to a previous value via external interactions — effectively running the observer's loop backward through the network. This requires negative coherence cost along some segment, violating Axiom 1. Therefore no directed cycles exist, and $A \prec B \land B \prec A \implies A = B$. $\checkmark$

The acyclicity of $\mathcal{G}$ is the structural core of the argument. It follows from the positivity of coherence cost.

### Step 4: This Partial Order Is Time

The partial order $\prec$ has precisely the properties we associate with time:

| Property of time | Property of $\prec$ |
|---|---|
| "A is earlier than B" | $A \prec B$ (coherence ancestor) |
| Events may be simultaneous | $A \not\prec B$ and $B \not\prec A$ (spacelike separation) |
| Time flows forward | Directed edges only point forward (positive coherence cost) |
| Time is universal | $\prec$ is defined on the entire interaction graph |
| Time is observer-dependent (relativity) | Different observers traverse different paths through $\mathcal{G}$ |

The partial order $\prec$ is not a proxy for time or an approximation to time. It **is** time, in the following precise sense: every operational definition of temporal order ("A happened before B") reduces to a statement about coherence ancestry in the interaction graph.

### Step 5: The Arrow of Time

The arrow of time follows from the irreversibility of relational invariant generation:

1. Type III interactions generate relational invariants
2. Relational invariants, once generated, are conserved (Axiom 1)
3. Therefore the set of relational invariants grows monotonically along any forward path in $\mathcal{G}$

The **relational invariant depth** $d(v) = |\{I : I \text{ is a relational invariant accessible at vertex } v\}|$ is a monotonically non-decreasing function along directed paths:

$$A \prec B \implies d(A) \leq d(B)$$

Time flows in the direction of increasing relational invariant depth. This is not a statistical tendency (as in the standard account via entropy) but a structural consequence of coherence conservation applied to a network of interacting observers.

### Step 6: No Observers, No Time

A universe with no observers would have no vertices in $\mathcal{G}$ (no interaction events) and therefore no partial order. This is not merely the epistemic point that nobody would be around to notice — it is the structural point that the ordering relation itself would not exist.

Time is **constituted by** the observer network, not merely **measured by** it.

## Connection to Standard Physics

The partial order $(\mathcal{G}, \prec)$ is a **causal set** in the sense of Bombelli, Lee, Meyer, and Sorkin (1987). The framework's derivation of time from observer interactions arrives at the same mathematical structure that causal set theory postulates. The difference: causal set theory takes the causal set as primitive; observer-centrism derives it from the axioms.

The connection to special relativity: when the interaction graph is approximated by a continuous manifold (valid at scales $\gg \ell_P$), the partial order becomes the causal structure of Minkowski spacetime. The light cone structure — the set of events causally accessible from any given event — is the continuous limit of the directed paths in $\mathcal{G}$.

## Rigor Assessment

**What is established:**
- The interaction graph construction is explicit
- The directed nature of phase transfer follows from positive coherence cost
- The acyclicity argument (no directed cycles ↔ no negative coherence cost) is clean
- The monotonicity of relational invariant depth gives a structural arrow

**What needs work:**
- The "positive coherence cost" claim is used but not yet proven from the axioms — it is developed in [Action and Planck's Constant](/derivations/thermodynamics/action-planck)
- The connection between the discrete partial order and continuous Minkowski spacetime requires the geometry derivation (Section 6)
- The reflexivity convention ($A \prec A$) is a choice; some causal set frameworks use strict partial orders

## Open Gaps

1. **Metric from order**: Recovering the spacetime metric from the partial order requires additional structure (volume measure, or equivalently a counting of interaction events per region). This is a known problem in causal set theory.
2. **Quantum time**: The derivation gives a single partial order, but quantum mechanics suggests superpositions of causal orders may be physical. How does the framework handle indefinite causal structure?
3. **Cosmological time**: The arrow of time derived here is local (along paths in $\mathcal{G}$). The global arrow (cosmological expansion) may require additional input from the boundary conditions of the fixed-point solution.
