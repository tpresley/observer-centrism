---
title: "Coherence Conservation"
status: "rigorous"
dependsOn: []
enablesDerivation: ["axioms/observer-definition", "axioms/loop-closure", "minimal-observer/structure", "holography/information-paradox", "gauge/anomaly-cancellation"]
tags: ["axioms"]
summary: "Formalization of the primitive conserved quantity as a subadditive measure on a directed acyclic graph, with conservation stated graph-theoretically without presupposing time"
rigorLevel: "formal"
lastUpdated: 2026-03-08
---

## Overview

This derivation answers a foundational question: **what is the most primitive thing that must be true for observers to exist at all?**

Before we can talk about what observers are or how they behave, we need a conserved quantity -- something that cannot be created from nothing or destroyed into nothing. Without such a quantity, the entire framework has no ground to stand on. We call this quantity "coherence."

**The argument.** Coherence is formalized as a kind of bookkeeping system with specific rules:

- Every subsystem carries a non-negative amount of coherence (you cannot have negative existence).
- The total coherence across all of reality is fixed -- it never increases or decreases.
- Combining two systems gives you at most the sum of their individual coherences, never more. This "subadditivity" means there is no free coherence to be gained by merging.
- Conservation holds across every "slice" of the causal dependency graph -- a time-free statement that does not presuppose a clock.

**The result.** Coherence behaves like a conserved currency of existence. Observers can redistribute it through interactions, but the total ledger always balances. When two systems share coherence beyond what simple addition would predict, that excess is "relational coherence" -- the irreducible connection between them.

**Why this matters.** This axiom plays the role that energy conservation plays in standard physics, but for a more primitive quantity. Everything downstream -- observer identity, dynamics, interactions, and eventually all of physics -- is built on this conservation law.

**An honest caveat.** The word "coherence" is doing heavy lifting here. The formal object is a subadditive measure on a mathematical structure called a sigma-algebra, with conservation stated on directed acyclic graphs. The intuition of a "conserved currency" is helpful but cannot capture the full algebraic content, particularly the distinction between subadditivity and strong subadditivity.

## Statement

**Axiom 1 (Coherence Conservation).** There exists a primitive quantity $\mathcal{C}$, called **coherence**, defined on the partitions of a coherence space $\mathcal{H}$. The total coherence is globally conserved: it is invariant under all admissible transformations and constant across all slices of the dependency graph. Coherence cannot be created, destroyed, or exported — the ontology is closed.

## Formalization

### Step 1: The Coherence Space

**Definition 1.1 (Coherence space).** A **coherence space** is a tuple $(\mathcal{H}, \mathcal{A}, \mathcal{C})$ where:
- $\mathcal{H}$ is a non-empty set (the **universe of configurations**)
- $\mathcal{A} \subseteq \mathcal{P}(\mathcal{H})$ is a $\sigma$-algebra on $\mathcal{H}$ (the **admissible subsystems**)
- $\mathcal{C}: \mathcal{A} \to \mathbb{R}_{\geq 0}$ is a function (the **coherence measure**) satisfying axioms (C1)–(C5) below

**Definition 1.2 (Coherence axioms).** The coherence measure $\mathcal{C}$ satisfies:

**(C1) Positivity:** $\mathcal{C}(S) \geq 0$ for all $S \in \mathcal{A}$.

**(C2) Normalization:** $\mathcal{C}(\mathcal{H}) = C_0$ for a fixed constant $C_0 > 0$.

**(C3) Null empty set:** $\mathcal{C}(\emptyset) = 0$.

**(C4) Subadditivity:** For disjoint $S_1, S_2 \in \mathcal{A}$ with $S_1 \cap S_2 = \emptyset$:

$$\mathcal{C}(S_1 \cup S_2) \leq \mathcal{C}(S_1) + \mathcal{C}(S_2)$$

**(C5) Strong subadditivity:** For all $S_1, S_2 \in \mathcal{A}$ (not necessarily disjoint):

$$\mathcal{C}(S_1 \cup S_2) + \mathcal{C}(S_1 \cap S_2) \leq \mathcal{C}(S_1) + \mathcal{C}(S_2)$$

**Proposition 1.3 (Monotonicity).** *For all $S_1, S_2 \in \mathcal{A}$ with $S_1 \subseteq S_2$: $\mathcal{C}(S_1) \leq \mathcal{C}(S_2)$.*

*Proof.* Set $A = S_1$ and $B = S_2$ in (C5). Then $A \cup B = S_2$ and $A \cap B = S_1$. So (C5) gives $\mathcal{C}(S_2) + \mathcal{C}(S_1) \leq \mathcal{C}(S_1) + \mathcal{C}(S_2)$, which is an equality. This does not directly give monotonicity.

Instead, write $S_2 = S_1 \cup (S_2 \setminus S_1)$ where $S_1$ and $S_2 \setminus S_1$ are disjoint. By (C4): $\mathcal{C}(S_2) \leq \mathcal{C}(S_1) + \mathcal{C}(S_2 \setminus S_1)$. But we need the reverse inequality. Note that by (C1), $\mathcal{C}(S_2 \setminus S_1) \geq 0$, so $\mathcal{C}(S_1) \leq \mathcal{C}(S_1) + \mathcal{C}(S_2 \setminus S_1)$. However, (C4) gives an upper bound on the union, not a lower bound on the parts.

**Remark:** Monotonicity does not follow from (C1)–(C5) alone. A subadditive set function need not be monotone. If monotonicity is required, it must be added as a separate axiom or derived from additional structure. In this framework, monotonicity follows once the coherence measure is connected to the observer definition (Axiom 2), where $\mathcal{C}(\Sigma) > 0$ for any observer state space implies larger subsystems contain at least as much coherence as their sub-observers. We do *not* assume monotonicity at this stage.

**Proposition 1.4 (C5 implies C4).** *Strong subadditivity (C5) implies subadditivity (C4) for disjoint sets, given (C3).*

*Proof.* Let $S_1 \cap S_2 = \emptyset$. Then $\mathcal{C}(S_1 \cap S_2) = \mathcal{C}(\emptyset) = 0$ by (C3). Substituting into (C5): $\mathcal{C}(S_1 \cup S_2) + 0 \leq \mathcal{C}(S_1) + \mathcal{C}(S_2)$, which is (C4). $\square$

**Remark.** Hence (C4) is logically redundant given (C3) and (C5). We state it separately because subadditivity has a direct physical interpretation (the coherence of a composite system does not exceed the sum of its parts' coherences), and because many results require only (C4) and not the full strength of (C5).

### Step 2: Relational Coherence

**Definition 2.1 (Relational coherence).** The **relational coherence** (or **mutual coherence**) between disjoint subsystems $S_1, S_2 \in \mathcal{A}$ with $S_1 \cap S_2 = \emptyset$ is:

$$\mathcal{C}(S_1 : S_2) \equiv \mathcal{C}(S_1) + \mathcal{C}(S_2) - \mathcal{C}(S_1 \cup S_2)$$

**Proposition 2.2 (Non-negativity).** *$\mathcal{C}(S_1 : S_2) \geq 0$ for disjoint $S_1, S_2$.*

*Proof.* Direct from (C4): $\mathcal{C}(S_1 \cup S_2) \leq \mathcal{C}(S_1) + \mathcal{C}(S_2)$, so $\mathcal{C}(S_1) + \mathcal{C}(S_2) - \mathcal{C}(S_1 \cup S_2) \geq 0$. $\square$

**Proposition 2.3 (Independence characterization).** *$\mathcal{C}(S_1 : S_2) = 0$ if and only if $\mathcal{C}$ is additive on $\{S_1, S_2\}$: $\mathcal{C}(S_1 \cup S_2) = \mathcal{C}(S_1) + \mathcal{C}(S_2)$. We say $S_1$ and $S_2$ are **coherence-independent**.*

*Proof.* By definition, $\mathcal{C}(S_1 : S_2) = 0$ iff $\mathcal{C}(S_1) + \mathcal{C}(S_2) - \mathcal{C}(S_1 \cup S_2) = 0$ iff $\mathcal{C}(S_1 \cup S_2) = \mathcal{C}(S_1) + \mathcal{C}(S_2)$. $\square$

**Proposition 2.4 (Symmetry).** *$\mathcal{C}(S_1 : S_2) = \mathcal{C}(S_2 : S_1)$.*

*Proof.* $\mathcal{C}(S_1 : S_2) = \mathcal{C}(S_1) + \mathcal{C}(S_2) - \mathcal{C}(S_1 \cup S_2) = \mathcal{C}(S_2) + \mathcal{C}(S_1) - \mathcal{C}(S_2 \cup S_1) = \mathcal{C}(S_2 : S_1)$. $\square$

**Proposition 2.5 (Chain rule).** *For pairwise disjoint $S_1, S_2, S_3 \in \mathcal{A}$:*

$$\mathcal{C}(S_1 : S_2 \cup S_3) = \mathcal{C}(S_1 : S_2) + \mathcal{C}(S_1 : S_3) - \delta$$

*where:*

$$\delta = \mathcal{C}(S_1) + \mathcal{C}(S_2) + \mathcal{C}(S_3) - \mathcal{C}(S_1 \cup S_2) - \mathcal{C}(S_1 \cup S_3) - \mathcal{C}(S_2 \cup S_3) + \mathcal{C}(S_1 \cup S_2 \cup S_3)$$

*The sign of $\delta$ is not determined by (C1)–(C5) alone.*

*Proof.* Expand each relational coherence using Definition 2.1:

$$\mathcal{C}(S_1 : S_2) = \mathcal{C}(S_1) + \mathcal{C}(S_2) - \mathcal{C}(S_1 \cup S_2)$$
$$\mathcal{C}(S_1 : S_3) = \mathcal{C}(S_1) + \mathcal{C}(S_3) - \mathcal{C}(S_1 \cup S_3)$$
$$\mathcal{C}(S_1 : S_2 \cup S_3) = \mathcal{C}(S_1) + \mathcal{C}(S_2 \cup S_3) - \mathcal{C}(S_1 \cup S_2 \cup S_3)$$

Computing $\mathcal{C}(S_1 : S_2) + \mathcal{C}(S_1 : S_3) - \mathcal{C}(S_1 : S_2 \cup S_3)$ directly:

$$\delta = \mathcal{C}(S_1) + \mathcal{C}(S_2) + \mathcal{C}(S_3) - \mathcal{C}(S_1 \cup S_2) - \mathcal{C}(S_1 \cup S_3) - \mathcal{C}(S_2 \cup S_3) + \mathcal{C}(S_1 \cup S_2 \cup S_3)$$

This is the alternating sum (or Möbius function) over the three-element partition, and the identity holds by construction. $\square$

**Remark (Sign of $\delta$).** The correction term $\delta$ decomposes into two parts with opposite signs. Applying (C5) to $A = S_1 \cup S_2$, $B = S_1 \cup S_3$ gives $\mathcal{C}(S_1) - \mathcal{C}(S_1 \cup S_2) - \mathcal{C}(S_1 \cup S_3) + \mathcal{C}(S_1 \cup S_2 \cup S_3) \leq 0$, while (C4) gives $\mathcal{C}(S_2) + \mathcal{C}(S_3) - \mathcal{C}(S_2 \cup S_3) \geq 0$. Since $\delta$ is the sum of these, its sign is model-dependent.

In the physical regime where $\mathcal{C}$ specializes to von Neumann entropy, $\delta$ equals the conditional mutual information $I(S_2; S_3 | S_1) \geq 0$, guaranteed by strong subadditivity. In the general framework, the sign of $\delta$ carries physical meaning: $\delta > 0$ when $S_2$ and $S_3$ redundantly encode their relationship with $S_1$; $\delta < 0$ when they synergistically encode it.

### Step 3: Admissible Transformations and Conservation

**Definition 3.1.** A bijection $T: \mathcal{H} \to \mathcal{H}$ is **admissible** if:
1. $T$ preserves the $\sigma$-algebra: $T(S) \in \mathcal{A}$ and $T^{-1}(S) \in \mathcal{A}$ for all $S \in \mathcal{A}$
2. $T$ is invertible: $T^{-1}$ exists and is also admissible

**Definition 3.2.** The set of admissible transformations forms a group $\text{Aut}(\mathcal{H}, \mathcal{A})$ under composition. (This is a standard result: identity is admissible, composition of $\sigma$-algebra-preserving bijections is $\sigma$-algebra-preserving, and inverses exist by construction.)

**Axiom 1a (Conservation under transformations).** Every admissible transformation $T \in \text{Aut}(\mathcal{H}, \mathcal{A})$ conserves the coherence of every subsystem:

$$\mathcal{C}(T(S)) = \mathcal{C}(S) \quad \forall S \in \mathcal{A}$$

**Remark.** This is stronger than conserving only the total coherence $\mathcal{C}(\mathcal{H}) = C_0$. It states that admissible transformations are *isometries* of the coherence measure — they preserve the entire coherence structure, not just its global sum. This is the coherence analogue of unitarity preserving the full density matrix, not just the trace.

### Step 4: Graph-Theoretic Conservation (Time-Free Formulation)

**Definition 4.1 (Dependency graph).** The **dependency graph** $\mathcal{G} = (V, E)$ is a finite or countable directed acyclic graph (DAG) that is postulated as part of the framework's structure. Vertices $v \in V$ represent interaction events; directed edges $(v_1, v_2) \in E$ encode causal dependence ($v_1$ is an input to $v_2$).

**Remark (Status of $\mathcal{G}$).** The dependency graph $\mathcal{G}$ is a structural postulate — it encodes the logical ordering of interactions. It is not derived from the coherence space alone, and it does not presuppose time. Time is derived later (in [Time as Phase Ordering](/derivations/thermodynamics/time)) as a monotonic parameterization of directed paths in $\mathcal{G}$. The existence of $\mathcal{G}$ is a co-axiom with the coherence space: together, $(\mathcal{H}, \mathcal{A}, \mathcal{C}, \mathcal{G})$ constitute the foundational structure.

**Definition 4.2 (Cauchy slice).** A **Cauchy slice** of $\mathcal{G}$ is a maximal antichain $\Sigma \subset V$: a set such that
1. **Antichain:** No two elements of $\Sigma$ are related by a directed path in $\mathcal{G}$
2. **Maximality:** Every vertex $v \in V$ is either in $\Sigma$, or is connected to some element of $\Sigma$ by a directed path (either forward or backward)

**Proposition 4.3 (Cauchy slices exist).** *Every finite DAG has at least one Cauchy slice.*

*Proof.* In any finite poset, every antichain can be extended to a maximal antichain (by finiteness: iteratively add elements that are incomparable to all current members; the process terminates). Hence at least one maximal antichain exists. Concretely: take any topological ordering $v_1, v_2, \ldots, v_n$ and select the set of all vertices at a fixed topological depth — this forms an antichain, which can be extended to a maximal antichain. $\square$

**Definition 4.4 (Vertex coherence).** Each vertex $v \in V$ carries a coherence value $\mathcal{C}(v) \geq 0$, defined as the coherence of the subsystem represented by $v$.

**Axiom 1b (Graph-theoretic conservation).** For every Cauchy slice $\Sigma$ of $\mathcal{G}$:

$$\mathcal{C}(\Sigma) \equiv \sum_{v \in \Sigma} \mathcal{C}(v) = C_0$$

**Theorem 4.5 (Consistency of formulations).** *Given $(\mathcal{H}, \mathcal{A}, \mathcal{C}, \mathcal{G})$ with the vertex-to-subsystem identification $v \mapsto S_v \in \mathcal{A}$, Axioms 1a and 1b are consistent: Axiom 1a (isometric admissible transformations) is sufficient to ensure Axiom 1b (Cauchy slice conservation) when admissible transformations correspond to graph automorphisms.*

*Proof.* Let $\phi: \mathcal{G} \to \mathcal{G}$ be a graph automorphism, and let $T_\phi: \mathcal{H} \to \mathcal{H}$ be the corresponding admissible transformation. Since $\phi$ is a graph automorphism, it maps antichains to antichains and preserves maximality, so it maps Cauchy slices to Cauchy slices: if $\Sigma$ is a Cauchy slice, so is $\phi(\Sigma)$.

By Axiom 1a, $\mathcal{C}(T_\phi(S_v)) = \mathcal{C}(S_v)$ for each vertex $v$. Under the identification $T_\phi(S_v) = S_{\phi(v)}$:

$$\mathcal{C}(\phi(\Sigma)) = \sum_{v \in \phi(\Sigma)} \mathcal{C}(v) = \sum_{v \in \Sigma} \mathcal{C}(\phi(v)) = \sum_{v \in \Sigma} \mathcal{C}(v) = \mathcal{C}(\Sigma)$$

If any one Cauchy slice has total coherence $C_0$, and every other Cauchy slice can be reached via a sequence of local moves (each corresponding to a graph automorphism), then all Cauchy slices have total coherence $C_0$.

For general DAGs, the assumption that all Cauchy slices are connected by automorphisms is restrictive. Axiom 1b therefore adds genuine content beyond Axiom 1a: it asserts conservation even between Cauchy slices that are *not* related by a global automorphism. This is the graph-theoretic analogue of conservation holding across all spacelike slices, not just those related by Poincaré transformations. $\square$

### Step 5: Consequences

**Proposition 5.1 (Ontological closure).** *No coherence can be created from nothing or destroyed. Formally: there exists no admissible transformation $T$ and subsystem $S \in \mathcal{A}$ with $\mathcal{C}(T(S)) \neq \mathcal{C}(S)$.*

*Proof.* Direct from Axiom 1a: $\mathcal{C}(T(S)) = \mathcal{C}(S)$ for all $S \in \mathcal{A}$ and all admissible $T$. $\square$

**Proposition 5.2 (Subadditivity forces relational structure).** *If $\mathcal{C}$ were strictly additive (i.e., $\mathcal{C}(S_1 \cup S_2) = \mathcal{C}(S_1) + \mathcal{C}(S_2)$ for all disjoint $S_1, S_2$), then $\mathcal{C}(S_1 : S_2) = 0$ for all disjoint pairs — no relational coherence exists.*

*Proof.* If $\mathcal{C}$ is additive, then $\mathcal{C}(S_1 : S_2) = \mathcal{C}(S_1) + \mathcal{C}(S_2) - \mathcal{C}(S_1 \cup S_2) = 0$ for all disjoint pairs, by the additivity assumption. $\square$

**Corollary 5.3 (Necessity of strict subadditivity).** *For the framework to support relational invariants (and hence the bootstrap mechanism, composite observers, and interactions), there must exist at least one pair of disjoint subsystems with $\mathcal{C}(S_1 : S_2) > 0$ — i.e., $\mathcal{C}$ must be strictly subadditive on at least one pair.*

## Self-Consistency

**Theorem 6.1 (Existence of models).** *The axiom is consistent: there exist coherence spaces $(\mathcal{H}, \mathcal{A}, \mathcal{C})$ satisfying (C1)–(C5).*

*Proof.* We construct two explicit models.

**Model 1 (Additive/trivial).** Let $\mathcal{H} = \{1, 2, \ldots, n\}$ with $n \geq 1$, $\mathcal{A} = \mathcal{P}(\mathcal{H})$, and $\mathcal{C}(S) = |S|/n \cdot C_0$. Then:
- (C1): $|S| \geq 0$, so $\mathcal{C}(S) \geq 0$. ✓
- (C2): $\mathcal{C}(\mathcal{H}) = n/n \cdot C_0 = C_0$. ✓
- (C3): $\mathcal{C}(\emptyset) = 0/n \cdot C_0 = 0$. ✓
- (C4): For disjoint $S_1, S_2$: $\mathcal{C}(S_1 \cup S_2) = (|S_1| + |S_2|)/n \cdot C_0 = \mathcal{C}(S_1) + \mathcal{C}(S_2)$. Equality holds, which is $\leq$. ✓
- (C5): For any $S_1, S_2$: $|S_1 \cup S_2| + |S_1 \cap S_2| = |S_1| + |S_2|$ (inclusion-exclusion). Equality holds. ✓

This is additive — $\mathcal{C}(S_1 : S_2) = 0$ for all disjoint pairs. It satisfies the axioms but produces no relational structure (Proposition 5.2).

**Model 2 (Strictly subadditive/non-trivial).** Let $\mathcal{H} = \{1, 2, \ldots, n\}$ with $n \geq 2$, $\mathcal{A} = \mathcal{P}(\mathcal{H})$, and $\mathcal{C}(S) = f(|S|) \cdot C_0 / f(n)$ where $f(k) = \ln(1 + k)$. Then:
- (C1): $\ln(1 + |S|) \geq 0$ since $|S| \geq 0$. ✓
- (C2): $\mathcal{C}(\mathcal{H}) = f(n) \cdot C_0 / f(n) = C_0$. ✓
- (C3): $\mathcal{C}(\emptyset) = f(0) \cdot C_0/f(n) = \ln(1) \cdot C_0/f(n) = 0$. ✓
- (C4): For disjoint $S_1, S_2$ with $|S_1| = a, |S_2| = b$: $f(a+b) = \ln(1+a+b) \leq \ln((1+a)(1+b)) = \ln(1+a) + \ln(1+b) = f(a) + f(b)$ since $1+a+b \leq (1+a)(1+b) = 1+a+b+ab$ for $a,b \geq 0$. ✓
- (C5): For any $S_1, S_2$ with $|S_1| = a$, $|S_2| = b$, $|S_1 \cap S_2| = c$, $|S_1 \cup S_2| = a+b-c$: Need $f(a+b-c) + f(c) \leq f(a) + f(b)$, i.e., $\ln(1+a+b-c) + \ln(1+c) \leq \ln(1+a) + \ln(1+b)$, i.e., $(1+a+b-c)(1+c) \leq (1+a)(1+b)$. Expanding: $1+c+a+b-c+ac+bc-c^2 = 1+a+b+ac+bc-c^2 \leq 1+a+b+ab$. So need $ac+bc-c^2 \leq ab$, i.e., $c(a+b-c) \leq ab$. Since $c \leq \min(a,b)$, we have $c \leq a$ and $a+b-c \leq a+b$, but more precisely $c(a+b-c) = ca + cb - c^2 \leq ca + c(b-c) \leq ca + (b-c)a = a(b) = ab$ (using $c \leq a$ in the last step: $c \leq a \Rightarrow cb - c^2 \leq ab - ac \Rightarrow ca + cb - c^2 \leq ab$). ✓

This model has $\mathcal{C}(S_1 : S_2) > 0$ for disjoint non-empty $S_1, S_2$: $\mathcal{C}(S_1 : S_2) = [f(a) + f(b) - f(a+b)] \cdot C_0/f(n) > 0$ since $\ln(1+a) + \ln(1+b) > \ln(1+a+b)$ for $a,b \geq 1$. $\square$

**Proposition 6.2 (Independence of (C5) from (C1)–(C4)).** *(C5) does not follow from (C1)–(C4) alone.*

*Proof.* We construct a set function satisfying (C1)–(C4) but violating (C5). Let $\mathcal{H} = \{1, 2, 3\}$, $\mathcal{A} = \mathcal{P}(\mathcal{H})$, and define:

$$\mathcal{C}(\emptyset) = 0, \quad \mathcal{C}(\{i\}) = 1 \text{ for each } i, \quad \mathcal{C}(\{i,j\}) = 1.5 \text{ for each pair}, \quad \mathcal{C}(\{1,2,3\}) = 2.2$$

Verify (C1)–(C4):
- (C1)–(C3): Satisfied by construction. ✓
- (C4): For disjoint singletons: $\mathcal{C}(\{i,j\}) = 1.5 \leq 1 + 1 = 2$. ✓ For a singleton and a disjoint pair: $\mathcal{C}(\{1,2,3\}) = 2.2 \leq 1 + 1.5 = 2.5$. ✓

Now check (C5) for $S_1 = \{1,2\}$, $S_2 = \{2,3\}$: $S_1 \cup S_2 = \{1,2,3\}$, $S_1 \cap S_2 = \{2\}$.

$$\mathcal{C}(S_1 \cup S_2) + \mathcal{C}(S_1 \cap S_2) = 2.2 + 1 = 3.2 > 1.5 + 1.5 = 3 = \mathcal{C}(S_1) + \mathcal{C}(S_2)$$

This violates (C5). Hence (C5) is independent of (C1)–(C4).

**Remark.** In the restricted class of set functions determined purely by subset cardinality, (C5) follows from (C4) via concavity arguments. For general set functions on $\sigma$-algebras, (C5) is independent of (C4), as the counterexample above demonstrates. This is a special case of the general independence of submodularity from subadditivity in the theory of set functions (see [Fujishige, 2005]). $\square$

## Connection to Physics

| Physical quantity | Conservation law | Coherence analogue |
|---|---|---|
| Energy | $dE/dt = 0$ (Noether, time symmetry) | $\mathcal{C}$ conserved on Cauchy slices (Axiom 1b) |
| Quantum information | Unitarity ($\rho \to U\rho U^\dagger$) | $\mathcal{C}(T(S)) = \mathcal{C}(S)$ (Axiom 1a) |
| Phase space volume | Liouville's theorem | Admissible transformations preserve $\mathcal{C}$ |
| Von Neumann entropy properties | Strong subadditivity | (C5) |

## Rigor Assessment

**Fully rigorous:**
- Definitions 1.1, 1.2, 2.1, 3.1, 3.2, 4.1, 4.2, 4.4: Precise mathematical definitions with all conditions explicitly stated
- Propositions 1.4, 2.2–2.4, 4.3, 5.1, 5.2: Complete proofs from the stated axioms
- Theorem 6.1: Two explicit models demonstrate consistency, with all five axioms verified step by step
- Proposition 2.5 (chain rule): Full algebraic derivation; the sign issue with $\delta$ is resolved by explicitly noting it requires additional structure and is not a consequence of (C1)–(C5) alone

**Structural assumptions (co-axioms, not derived):**
- The dependency graph $\mathcal{G}$ is a structural postulate (Definition 4.1, Remark). This is not a gap — it is an acknowledged foundational element alongside the coherence space.
- The vertex-to-subsystem identification $v \mapsto S_v$ connecting $\mathcal{G}$ to $(\mathcal{H}, \mathcal{A}, \mathcal{C})$ is postulated. Its precise construction requires the interaction types (developed in [Three Interaction Types](/derivations/interactions/three-types)).

**Assessment:** The axiom is rigorously formalized with complete definitions, proofs, and explicit consistency models. All assumptions are stated. The main structural postulate (the dependency graph) is acknowledged as a co-axiom. The relationship between the two formulations (Axiom 1a and 1b) is made precise in Theorem 4.5, which clearly identifies where 1b adds content beyond 1a.

## Open Gaps

1. **Uniqueness of $C_0$**: Is the total coherence $C_0$ a free parameter or fixed by self-consistency? Without loss of generality, one may normalize $C_0 = 1$ for the abstract theory; the physical value of $C_0$ (if any) would be determined by the bootstrap fixed point.
2. **Category-theoretic formulation**: A more natural formalization may use a functor $\mathcal{C}: \mathbf{Sub}(\mathcal{H}) \to \mathbb{R}_{\geq 0}$ from the category of subsystems to non-negative reals, with conservation as a constraint on natural transformations.
3. **Conditional coherence**: Define $\mathcal{C}(S_1 | S_2) = \mathcal{C}(S_1 \cup S_2) - \mathcal{C}(S_2)$. By (C4), $\mathcal{C}(S_1 | S_2) \leq \mathcal{C}(S_1)$ for disjoint $S_1, S_2$ — conditioning reduces coherence. This is the coherence analogue of conditioning reducing entropy.
4. **Monotonicity**: Whether monotonicity ($S_1 \subseteq S_2 \Rightarrow \mathcal{C}(S_1) \leq \mathcal{C}(S_2)$) should be added as axiom (C6) depends on whether all physically relevant coherence measures are monotone. The non-trivial model (Model 2) is monotone; whether non-monotone models are physically meaningful is open.

<!-- References -->
[Fujishige, 2005]: /references#fujishige-2005
