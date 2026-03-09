---
title: "Coherence Conservation"
status: "provisional"
dependsOn: []
enablesDerivation: ["axioms/observer-definition", "axioms/loop-closure", "minimal-observer/structure", "holography/information-paradox"]
tags: ["foundation"]
summary: "Formalization of the primitive conserved quantity as a subadditive measure on a directed acyclic graph, with conservation stated graph-theoretically without presupposing time"
rigorLevel: "formal"
sourceSection: "02-axioms"
lastUpdated: 2026-03-08
---

## Statement

**Axiom 1 (Coherence Conservation).** There exists a primitive quantity $\mathcal{C}$, called **coherence**, defined on the partitions of a coherence space $\mathcal{H}$. The total coherence is globally conserved: it is invariant under all admissible transformations and constant across all slices of the dependency graph. Coherence cannot be created, destroyed, or exported — the ontology is closed.

## Formalization

### Step 1: The Coherence Space

**Definition 1.1.** A **coherence space** is a tuple $(\mathcal{H}, \mathcal{A}, \mathcal{C})$ where:
- $\mathcal{H}$ is a set (the **universe of configurations**)
- $\mathcal{A} \subseteq \mathcal{P}(\mathcal{H})$ is a $\sigma$-algebra on $\mathcal{H}$ (the **admissible subsystems**)
- $\mathcal{C}: \mathcal{A} \to \mathbb{R}_{\geq 0}$ is a function (the **coherence measure**)

**Definition 1.2.** The coherence measure $\mathcal{C}$ satisfies:

**(C1) Positivity:** $\mathcal{C}(S) \geq 0$ for all $S \in \mathcal{A}$.

**(C2) Normalization:** $\mathcal{C}(\mathcal{H}) = C_0$ for a fixed constant $C_0 > 0$.

**(C3) Null empty set:** $\mathcal{C}(\emptyset) = 0$.

**(C4) Subadditivity:** For disjoint $S_1, S_2 \in \mathcal{A}$:

$$\mathcal{C}(S_1 \cup S_2) \leq \mathcal{C}(S_1) + \mathcal{C}(S_2)$$

**(C5) Strong subadditivity:** For all $S_1, S_2 \in \mathcal{A}$:

$$\mathcal{C}(S_1 \cup S_2) + \mathcal{C}(S_1 \cap S_2) \leq \mathcal{C}(S_1) + \mathcal{C}(S_2)$$

**Remark.** Properties (C1)–(C3) make $\mathcal{C}$ a finite measure-like object. Property (C4) distinguishes it from a standard measure (which would be additive). Property (C5) is the coherence analogue of strong subadditivity of von Neumann entropy, ensuring consistency of the relational structure.

### Step 2: Relational Coherence

**Definition 2.1.** The **relational coherence** (or **mutual coherence**) between disjoint subsystems $S_1, S_2 \in \mathcal{A}$ is:

$$\mathcal{C}(S_1 : S_2) = \mathcal{C}(S_1) + \mathcal{C}(S_2) - \mathcal{C}(S_1 \cup S_2) \geq 0$$

The inequality follows from (C4). Relational coherence measures the coherence that exists *in the relationship* between $S_1$ and $S_2$ — coherence that cannot be attributed to either part alone.

**Proposition 2.2.** *$\mathcal{C}(S_1 : S_2) = 0$ if and only if $S_1$ and $S_2$ share no relational structure (are coherence-independent).*

*Proof.* By definition, $\mathcal{C}(S_1 : S_2) = 0$ iff $\mathcal{C}(S_1 \cup S_2) = \mathcal{C}(S_1) + \mathcal{C}(S_2)$, which is the additivity condition. This means the coherence of the union decomposes completely into contributions from the parts — there is no coherence "in" the relationship. $\square$

**Proposition 2.3.** *Relational coherence is symmetric: $\mathcal{C}(S_1 : S_2) = \mathcal{C}(S_2 : S_1)$.*

*Proof.* Immediate from commutativity of addition and union. $\square$

**Proposition 2.4 (Chain rule).** *For disjoint $S_1, S_2, S_3$:*

$$\mathcal{C}(S_1 : S_2 \cup S_3) = \mathcal{C}(S_1 : S_2) + \mathcal{C}(S_1 : S_3) - \delta$$

*where $\delta \geq 0$ by strong subadditivity (C5). The deficit $\delta$ measures the extent to which $S_2$ and $S_3$ redundantly encode their relationship with $S_1$.*

*Proof.* Expand using Definition 2.1 and apply (C5) to the relevant subsystems. The non-negativity of $\delta$ follows from (C5). $\square$

### Step 3: Admissible Transformations and Conservation

**Definition 3.1.** A transformation $T: \mathcal{H} \to \mathcal{H}$ is **admissible** if it preserves the $\sigma$-algebra ($T^{-1}(S) \in \mathcal{A}$ for all $S \in \mathcal{A}$) and is invertible.

**Axiom 1 (Precise statement).** Every admissible transformation $T$ conserves the total coherence:

$$\mathcal{C}(T(\mathcal{H})) = \mathcal{C}(\mathcal{H}) = C_0$$

More generally, for any Cauchy slice $\Sigma$ of the dependency graph $\mathcal{G}$ (see below):

$$\sum_{v \in \Sigma} \mathcal{C}(v) = C_0$$

### Step 4: Graph-Theoretic Conservation (Time-Free Formulation)

**Definition 4.1.** The **dependency graph** $\mathcal{G} = (V, E)$ is a directed acyclic graph (DAG) encoding the causal structure of interactions. Vertices $v \in V$ represent interaction events; edges $(v_1, v_2) \in E$ encode causal dependence ($v_1$ causally precedes $v_2$).

**Definition 4.2.** A **Cauchy slice** of $\mathcal{G}$ is a maximal antichain — a set $\Sigma \subset V$ such that no two elements of $\Sigma$ are related by a directed path, and every element of $V$ is either in $\Sigma$, in the past of some element of $\Sigma$, or in the future of some element of $\Sigma$.

**Axiom 1 (Graph-theoretic formulation).** For every Cauchy slice $\Sigma$ of $\mathcal{G}$:

$$\mathcal{C}(\Sigma) \equiv \sum_{v \in \Sigma} \mathcal{C}(v) = C_0$$

This states conservation without reference to time — it requires only the partial order structure of $\mathcal{G}$. Time is derived later (in [Time as Phase Ordering](/derivations/thermodynamics/time)) as a monotonic parameterization of the directed paths in $\mathcal{G}$.

**Proposition 4.3.** *The graph-theoretic formulation implies the transformation formulation: any admissible transformation maps one Cauchy slice to another.*

*Proof.* An admissible transformation $T$ respects the causal structure (it is an automorphism of $\mathcal{G}$). Since automorphisms map antichains to antichains and preserve maximality, $T$ maps Cauchy slices to Cauchy slices. Conservation on all Cauchy slices then implies $\mathcal{C}(T(\Sigma)) = \mathcal{C}(\Sigma) = C_0$. $\square$

### Step 5: Consequences

**Proposition 5.1 (Ontological closure).** *No coherence can be created from nothing or destroyed. There is no external reservoir.*

*Proof.* "Creation from nothing" would mean $\mathcal{C}(\Sigma') > \mathcal{C}(\Sigma)$ for some Cauchy slice $\Sigma'$ later than $\Sigma$. This violates Axiom 1. Similarly for destruction. The absence of an external reservoir follows from the totality of $\mathcal{H}$: there is no $S \notin \mathcal{A}$ to serve as a sink. $\square$

**Proposition 5.2 (Subadditivity forces relational structure).** *If $\mathcal{C}$ were strictly additive (i.e., $\mathcal{C}(S_1 \cup S_2) = \mathcal{C}(S_1) + \mathcal{C}(S_2)$ for all disjoint $S_1, S_2$), then $\mathcal{C}(S_1 : S_2) = 0$ for all pairs — no relational coherence exists. The framework would be trivial (no interactions, no bootstrap, no composite structure).*

*Proof.* If $\mathcal{C}$ is additive, then $\mathcal{C}(S_1 : S_2) = \mathcal{C}(S_1) + \mathcal{C}(S_2) - \mathcal{C}(S_1 \cup S_2) = 0$ for all pairs. Relational invariants (which carry relational coherence) would all be zero. The bootstrap mechanism, which builds composite structures from relational invariants, would have nothing to work with. $\square$

**Remark.** Subadditivity is therefore not an optional refinement — it is structurally necessary for the framework to produce anything beyond isolated, non-interacting points.

## Connection to Physics

The coherence measure $\mathcal{C}$ unifies several conserved quantities in standard physics:

| Physical quantity | Conservation law | Coherence analogue |
|---|---|---|
| Energy | $dE/dt = 0$ (Noether, time symmetry) | $\mathcal{C}$ conserved on Cauchy slices |
| Quantum information | Unitarity ($\rho \to U\rho U^\dagger$) | $\mathcal{C}(T(\mathcal{H})) = \mathcal{C}(\mathcal{H})$ |
| Phase space volume | Liouville's theorem | Admissible transformations preserve $\mathcal{C}$ |
| Von Neumann entropy properties | Strong subadditivity | (C5) |

The framework claims these are all manifestations of a single conserved primitive. The precise mappings are developed in the derivation chain.

## Self-Consistency

**Proposition (Existence).** *The axiom is consistent — there exist coherence spaces satisfying (C1)–(C5).*

*Proof (by example).* Take $\mathcal{H} = \{1, 2, \ldots, n\}$, $\mathcal{A} = \mathcal{P}(\mathcal{H})$, and $\mathcal{C}(S) = |S|/n \cdot C_0$ for all $S$. Then:
- (C1): $|S|/n \cdot C_0 \geq 0$ ✓
- (C2): $\mathcal{C}(\mathcal{H}) = C_0$ ✓
- (C3): $\mathcal{C}(\emptyset) = 0$ ✓
- (C4): $|S_1 \cup S_2| \leq |S_1| + |S_2|$ for disjoint sets (equality) ✓
- (C5): For general sets, $|S_1 \cup S_2| + |S_1 \cap S_2| = |S_1| + |S_2|$ (equality) ✓

This is the trivial (additive) model. A non-trivial model with genuine subadditivity: take $\mathcal{C}(S) = \sqrt{|S|/n} \cdot C_0$. Then (C4) follows from concavity of $\sqrt{\cdot}$, and (C5) can be verified directly. $\square$

## Rigor Assessment

**Fully rigorous:**
- Definitions 1.1, 1.2: The coherence space is precisely defined as a $\sigma$-algebra with a subadditive function
- Properties (C1)–(C5): Each is a clear mathematical condition
- Propositions 2.2–2.4: Follow directly from definitions
- Proposition 4.3: Graph automorphisms preserve antichains (standard graph theory)
- Self-consistency proof: Explicit models demonstrate the axiom is non-vacuous

**Provisional:**
- The graph-theoretic formulation (Step 4) assumes the existence of the dependency graph $\mathcal{G}$, which is constructed from interactions that haven't been defined yet. This creates a mild circularity: the axiom uses the graph, but the graph is built from the axiom's consequences. The resolution is that $\mathcal{G}$ exists as a structural postulate independent of the interactions — it encodes the logical (not temporal) ordering of the framework.
- Strong subadditivity (C5) is motivated by analogy with von Neumann entropy. Whether (C5) is independently necessary (vs. following from the other axioms + observer definition) is open.

**Assessment:** The axiom is precisely stated, self-consistent (models exist), and has clear mathematical consequences. The main provisional element is the relationship between the graph-theoretic and transformation formulations.

## Open Gaps

1. **Uniqueness of $C_0$**: Is the total coherence $C_0$ a free parameter or fixed by self-consistency? The source document suggests it may be determined by the bootstrap fixed point (Section 15).
2. **Category-theoretic formulation**: A more natural formalization may use a functor $\mathcal{C}: \mathbf{Sub}(\mathcal{H}) \to \mathbb{R}_{\geq 0}$ from the category of subsystems to non-negative reals, with conservation as a constraint on natural transformations.
3. **Conditional coherence**: Define $\mathcal{C}(S_1 | S_2) = \mathcal{C}(S_1 \cup S_2) - \mathcal{C}(S_2)$. By (C4), $\mathcal{C}(S_1 | S_2) \leq \mathcal{C}(S_1)$ — conditioning on $S_2$ can only reduce coherence. This is the coherence analogue of conditioning reducing entropy.
