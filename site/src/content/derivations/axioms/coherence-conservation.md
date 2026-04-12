---
title: "Coherence Conservation"
status: "rigorous"
dependsOn: ["axioms/00-from-observation-to-axioms"]
enablesDerivation: ["axioms/observer-definition", "axioms/loop-closure", "minimal-observer/structure", "holography/information-paradox", "gauge/anomaly-cancellation"]
tags: ["axioms"]
summary: "Formalization of the primitive conserved quantity as a subadditive measure on a directed acyclic graph, with conservation stated graph-theoretically without presupposing time"
rigorLevel: "formal"
lastUpdated: 2026-04-11
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

**An honest caveat.** The word "coherence" is doing heavy lifting here. The formal object is a subadditive measure on a mathematical structure called a sigma-algebra, with conservation stated on directed acyclic graphs. The intuition of a "conserved currency" is helpful but cannot capture the full algebraic content, particularly the distinction between subadditivity and strong subadditivity. The question of *which* parts of this formal apparatus are forced by the operational definition of observation and which are genuinely additional content is addressed explicitly in Step 0 below — the bridge work that ties this axiom page back to [From Observation to Axioms](/derivations/axioms/00-from-observation-to-axioms).

## Statement

**Axiom 1 (Coherence Conservation).** There exists a primitive quantity $\mathcal{C}$, called **coherence**, defined on the partitions of a coherence space $\mathcal{H}$. The total coherence is globally conserved: it is invariant under all admissible transformations and constant across all slices of the dependency graph. Coherence cannot be created, destroyed, or exported — the ontology is closed.

## Formalization

### Step 0: From Operational Definition to Formal Target

This section does the bridge work from the operational definitions in [From Observation to Axioms](/derivations/axioms/00-from-observation-to-axioms) to the formal apparatus introduced in Step 1 and beyond. Each formal element is labeled **bucket A** (forced once the operational requirement is stated precisely) or **bucket B** (genuinely additional content with irreducible physical input). The point of the bridge work is to make the distinction visible: this axiom page does not start from "nothing but observerhood," but it does not start from arbitrary mathematical convenience either, and the split is recorded here.

**The operational starting points cited.** Step 0 cites four operational definitions from the bridge page:

- **Definition 1 (Observation):** to observe is to interact with a separate system in a way that updates the observing system's state without destroying it — observation is the residue of interaction, remembered.
- **Definition 2 (Observer):** a system that has an identity, participates in interactions, and maintains its identity through those interactions.
- **Definition 3 (Persistence):** an observer persists if it continues to satisfy Definition 2 over the course of repeated interactions.
- **Definition 4 (Closed ontology):** the universe of all observers and observed systems is closed — no external reservoir exists.

**Summary table.**

| Formal element (introduced below) | Bucket | Forced by / additional content |
|---|---|---|
| Universe of configurations $\mathcal{H}$ as a set | A | Def 1 + 2: systems exist and can be collected |
| $\sigma$-algebra $\mathcal{A}$ closure under complement, finite union | A | Def 1 + 2: operational composition + self/non-self distinction |
| Countable union closure (vs. finite) | A | Def 3: iterated interaction without bound — see note below |
| Coherence measure $\mathcal{C}: \mathcal{A} \to \mathbb{R}_{\geq 0}$ as a set function | A | Def 4: closed currency assigned to subsystems |
| (C1) Positivity | A | Def 4: no negative existence |
| (C2) Normalization $\mathcal{C}(\mathcal{H}) = C_0$, finite, $C_0 > 0$ | A | Def 4 (finite total) + Def 2 (non-triviality) |
| (C3) Null empty set | A | Convention-level sanity: the empty collection carries nothing |
| (C4) Subadditivity | A | Def 1: operational composition does not create currency |
| **(C5) Strong subadditivity** | **B** | **Not forced by the operational definitions alone** |
| Admissible transformations preserve $\mathcal{C}$ (Axiom 1(i)) | A | Def 1 + 3: observation doesn't create/destroy, persistence is invariant |
| Dependency graph $\mathcal{G}$ is directed and acyclic | A | Def 3: "residue remembered" implies ordering without loops |
| $\mathcal{G}$ is discrete (countable vertices) vs. continuous | B | Modeling choice — discrete is simpler but not forced |
| Conservation across Cauchy slices of $\mathcal{G}$ (Axiom 1(ii)) | A | Def 4 applied to the graph structure |

**Step 0a (Bucket A items — justifications).**

**Universe $\mathcal{H}$ as a set, and $\sigma$-algebra $\mathcal{A}$.** Definition 1 requires at least two distinguishable systems (observer and observed); Definition 2 requires observers to draw a self/non-self boundary. Both require that "subsystem" be a meaningful category, and that category must be closed under (i) taking the complement (the "non-self" of any "self"), (ii) unions (the operational composition of two subsystems is itself a subsystem), and (iii) containing the trivial cases $\mathcal{H}$ and $\emptyset$. These are exactly the defining closure properties of a Boolean algebra. **Note on countable vs. finite unions.** Definition 3 (persistence under *repeated* interaction, without a bound on the number of interactions) pushes closure from finite unions to countable unions — iterated operational composition is unbounded, so the closure property must survive countably many applications. This is the standard move from Boolean algebra to $\sigma$-algebra. Arbitrary uncountable unions are *not* forced by any operational requirement and are deliberately excluded. The $\sigma$-algebra is the minimal structure consistent with the operational requirements, not a chosen package.

**Measure $\mathcal{C}$ as a function $\mathcal{A} \to \mathbb{R}_{\geq 0}$.** Definition 4 (closed ontology) says the universe carries a conserved currency. Definition 2 says that currency must be attributable to observers and hence to the subsystems $\mathcal{A}$. A set function assigning a non-negative scalar to each admissible subsystem is the minimal formalization — any less structure cannot represent "how much currency this subsystem carries." The choice of $\mathbb{R}_{\geq 0}$ as the codomain (rather than, say, an ordered semigroup) is the minimal mathematical setting in which the conservation constraints below can be stated.

**(C1) Positivity.** A negative value would mean a subsystem carries "less than nothing," which has no operational meaning. Definition 4 implicitly rules this out.

**(C2) Normalization $\mathcal{C}(\mathcal{H}) = C_0$ with $C_0 > 0$ finite.** Three sub-claims: *constancy* (total is the same across every configuration) is forced by Definition 4 — closed ontology means the total doesn't change. *Finiteness* is forced by "the universe is bounded" interpreted operationally: the total currency available to all observers must be finite or Definition 2 (identity distinguishable against a non-trivial background) becomes vacuous. *Positivity* ($C_0 > 0$) is forced by Definition 2 — observers exist and carry some coherence, so the total cannot be zero.

**(C3) Null empty set.** Forced at the convention level: the empty collection is not a subsystem with content. This is a sanity condition rather than a physical claim.

**(C4) Subadditivity.** The operational claim is that merging two disjoint subsystems cannot create currency that wasn't there before. Argument: suppose, for contradiction, $\mathcal{C}(S_1 \cup S_2) > \mathcal{C}(S_1) + \mathcal{C}(S_2)$ for some disjoint pair. Then the act of *grouping* $S_1$ and $S_2$ (a purely notational move, not an interaction) has created $\mathcal{C}(S_1 \cup S_2) - \mathcal{C}(S_1) - \mathcal{C}(S_2) > 0$ units of currency. This contradicts Definition 1 (observation-as-residue does not create stuff) and Definition 4 (closed ontology). Therefore subadditivity holds.

**Admissible transformations preserve $\mathcal{C}$ (Axiom 1 part (i)).** Definition 1 says observation does not create or destroy stuff; Definition 3 says persistence is invariant over repeated interaction. An admissible transformation is the formal analogue of "a change that an observer could undergo while remaining an observer" — it must therefore preserve each subsystem's coherence content. The group structure of $\text{Aut}(\mathcal{H}, \mathcal{A})$ is standard mathematical packaging: identity is admissible, composition of admissible transformations is admissible, inverses exist.

**Dependency graph $\mathcal{G}$ is directed and acyclic.** Definition 3 (persistence through repeated interaction) implies some notion of "one interaction before another" — not a clock-based time, but a logical ordering. This ordering must be *asymmetric*: cyclic causation ("A is input to B is input to A") is incompatible with "residue remembered," because it would mean observer state depends on its own not-yet-produced residue. The set of interaction events together with the asymmetric "is-input-to" relation is, by construction, a directed acyclic graph.

**Conservation across Cauchy slices of $\mathcal{G}$ (Axiom 1 part (ii)).** Given the DAG structure above, a Cauchy slice is any maximal antichain — an operational "snapshot" of the ongoing interaction network that is consistent with the ordering. Closed ontology (Definition 4) applied to such a snapshot says the total coherence recorded in the snapshot is the same constant $C_0$ as applied to the universe as a whole. Part (ii) is therefore Definition 4 restated for graph slices rather than for the universe directly.

**Step 0b (Bucket B items — genuinely additional content).**

**(C5) Strong subadditivity is not forced by the operational definitions alone.** C4 says grouping two disjoint subsystems cannot create currency. C5 says something stronger and subtler: that the way currency is distributed across overlapping subsystems satisfies a specific inequality,
$$\mathcal{C}(S_1 \cup S_2) + \mathcal{C}(S_1 \cap S_2) \leq \mathcal{C}(S_1) + \mathcal{C}(S_2).$$
There is no short operational argument from Definitions 1–4 that forces this inequality. In the physical realization where $\mathcal{C}$ specializes to von Neumann entropy, C5 is the Lieb–Ruskai theorem (1973) — a deep mathematical result, proved via the joint convexity of relative entropy, that took decades to establish. Its holding in the quantum model is *evidence* that C5 is the right constraint for physical coherence, but the framework imposes C5 as part of Axiom 1 rather than deriving it from operational primitives. This is the axiom's most contentful single step, and honest bookkeeping requires calling it bucket B. The downstream convergence — that C5 corresponds to the deepest non-trivial property of quantum entropy — is argued in [Coherence as Physical Primitive](/derivations/axioms/coherence-operational); that convergence is what makes the choice of C5 reasonable, but it does not make C5 forced by operational observerhood alone.

**Discreteness of the dependency graph $\mathcal{G}$.** The *directed + acyclic* structure is bucket A (argued above), but the choice to model $\mathcal{G}$ as a discrete graph with countably many vertices — rather than as a continuous partial order, a Lorentzian manifold, or a causal set with a different measure-theoretic structure — is a modeling choice. Discrete is simpler and sufficient for everything the framework derives from $\mathcal{G}$, but it is not the only formalization consistent with the operational definitions. This is acknowledged here as bucket B; no alternative formalization has been developed within the framework, so the discreteness is effectively a working assumption.

**Step 0c (What this does and does not change).**

This Step 0 does not alter any of the downstream content of this page. Steps 1–6 below proceed from the axiom as stated and derive the same consequences as before. What Step 0 does is make the *status* of each formal element explicit, so that a reader reviewing the framework can see which parts are consequences of operational observerhood and which parts are additional commitments the framework makes.

Of the thirteen formal elements in the summary table, eleven are bucket A (forced once the operational definitions are stated precisely) and two are bucket B: strong subadditivity (C5) and the discreteness of the dependency graph. The C5 commitment is the significant one — it is the single most contentful mathematical step in Axiom 1, and the framework's physical interpretation of coherence as von Neumann entropy is what retroactively justifies the commitment. The discreteness of $\mathcal{G}$ is a working-assumption-level choice.

A reader who rejects C5 as an operational primitive can still read this page as a proof that "given C5 plus operational observerhood, the rest of the formal structure follows." A reader who accepts the convergence argument in [Coherence as Physical Primitive](/derivations/axioms/coherence-operational) may prefer to read C5 as forced-by-convergence rather than forced-by-operation. The framework's claim is the narrower of the two: C5 is an axiom, justified post-hoc by its physical realization, and labeled honestly in the bridge work here.

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

**Remark 1.3 (Monotonicity).** Monotonicity ($S_1 \subseteq S_2 \Rightarrow \mathcal{C}(S_1) \leq \mathcal{C}(S_2)$) does not follow from (C1)–(C5) alone. Subadditivity (C4) bounds the union from above, not the parts from below, and (C5) applied to nested sets yields only a tautology. A subadditive set function need not be monotone. In this framework, monotonicity follows once the coherence measure is connected to the observer definition (Axiom 2), where $\mathcal{C}(\Sigma) > 0$ for any observer state space implies larger subsystems contain at least as much coherence as their sub-observers. We do *not* assume monotonicity at this stage.

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

**Axiom 1 (Conservation).** Coherence is conserved in two senses simultaneously:

**(i) Under transformations.** Every admissible transformation $T \in \text{Aut}(\mathcal{H}, \mathcal{A})$ conserves the coherence of every subsystem:

$$\mathcal{C}(T(S)) = \mathcal{C}(S) \quad \forall S \in \mathcal{A}$$

**(ii) Across Cauchy slices.** For every Cauchy slice $\Sigma$ of the dependency graph $\mathcal{G}$ (defined below):

$$\mathcal{C}(\Sigma) \equiv \sum_{v \in \Sigma} \mathcal{C}(v) = C_0$$

**Remark.** Part (i) states that admissible transformations are *isometries* of the coherence measure — they preserve the entire coherence structure, not just its global sum. This is the coherence analogue of unitarity preserving the full density matrix, not just the trace. Part (ii) extends conservation to Cauchy slices that are not related by any global automorphism, analogous to energy conservation holding across all spacelike slices rather than just those related by Poincaré transformations. Neither part implies the other in general: (i) guarantees slice conservation only between automorphism-related slices, while (ii) asserts it universally.

### Step 4: The Dependency Graph

**Definition 4.1 (Dependency graph).** The **dependency graph** $\mathcal{G} = (V, E)$ is a finite or countable directed acyclic graph (DAG) that is postulated as part of the framework's structure. Vertices $v \in V$ represent interaction events; directed edges $(v_1, v_2) \in E$ encode causal dependence ($v_1$ is an input to $v_2$).

**Remark (Status of $\mathcal{G}$).** The dependency graph $\mathcal{G}$ is a structural postulate — it encodes the logical ordering of interactions. It is not derived from the coherence space alone, and it does not presuppose time. Time is derived later (in [Time as Phase Ordering](/derivations/thermodynamics/time)) as a monotonic parameterization of directed paths in $\mathcal{G}$. The existence of $\mathcal{G}$ is a co-axiom with the coherence space: together, $(\mathcal{H}, \mathcal{A}, \mathcal{C}, \mathcal{G})$ constitute the foundational structure.

**Definition 4.2 (Cauchy slice).** A **Cauchy slice** of $\mathcal{G}$ is a maximal antichain $\Sigma \subset V$: a set such that
1. **Antichain:** No two elements of $\Sigma$ are related by a directed path in $\mathcal{G}$
2. **Maximality:** Every vertex $v \in V$ is either in $\Sigma$, or is connected to some element of $\Sigma$ by a directed path (either forward or backward)

**Proposition 4.3 (Cauchy slices exist).** *Every finite DAG has at least one Cauchy slice.*

*Proof.* In any finite poset, every antichain can be extended to a maximal antichain (by finiteness: iteratively add elements that are incomparable to all current members; the process terminates). Hence at least one maximal antichain exists. Concretely: take any topological ordering $v_1, v_2, \ldots, v_n$ and select the set of all vertices at a fixed topological depth — this forms an antichain, which can be extended to a maximal antichain. $\square$

**Definition 4.4 (Vertex coherence).** Each vertex $v \in V$ carries a coherence value $\mathcal{C}(v) \geq 0$, defined as the coherence of the subsystem represented by $v$.

### Step 5: Consequences

**Proposition 5.1 (Ontological closure).** *No coherence can be created from nothing or destroyed. Formally: there exists no admissible transformation $T$ and subsystem $S \in \mathcal{A}$ with $\mathcal{C}(T(S)) \neq \mathcal{C}(S)$.*

*Proof.* Direct from Axiom 1(i): $\mathcal{C}(T(S)) = \mathcal{C}(S)$ for all $S \in \mathcal{A}$ and all admissible $T$. $\square$

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
| Energy | $dE/dt = 0$ (Noether, time symmetry) | $\mathcal{C}$ conserved on Cauchy slices (Axiom 1(ii)) |
| Quantum information | Unitarity ($\rho \to U\rho U^\dagger$) | $\mathcal{C}(T(S)) = \mathcal{C}(S)$ (Axiom 1(i)) |
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

**Assessment:** The axiom is rigorously formalized with complete definitions, proofs, and explicit consistency models. All assumptions are stated. The main structural postulate (the dependency graph) is acknowledged as a co-axiom. Conservation is stated as a single axiom with two parts — transformation isometry (i) and Cauchy slice invariance (ii) — with their logical independence noted in the remark following the axiom statement.

**Remark (Monotonicity as a theorem).** The question of whether monotonicity ($S_1 \subseteq S_2 \Rightarrow \mathcal{C}(S_1) \leq \mathcal{C}(S_2)$) should be added as axiom (C6) is resolved by the operational identification developed in [Coherence Operational](/derivations/axioms/coherence-operational). Theorem 4.1 of that derivation establishes a uniqueness result: under the axioms (C1)–(C5) together with the observer structure (Axiom 2) and the operational constraints (channel additivity, composition, continuity), the coherence functional is uniquely identified with the von Neumann entropy $S(\rho) = -\text{tr}(\rho \ln \rho)$. Von Neumann entropy is monotone for subsystems of a fixed system — this is a standard consequence of strong subadditivity applied to the purification. Therefore monotonicity follows as a theorem once the operational identification is established and need not be added as a separate axiom. The question of whether non-monotone coherence measures are physically relevant is moot: the uniqueness theorem selects the von Neumann entropy uniquely, and von Neumann entropy is monotone.

## Open Gaps

1. **Uniqueness of $C_0$**: Is the total coherence $C_0$ a free parameter or fixed by self-consistency? Without loss of generality, one may normalize $C_0 = 1$ for the abstract theory; the physical value of $C_0$ (if any) would be determined by the bootstrap fixed point.
2. **Category-theoretic formulation**: A more natural formalization may use a functor $\mathcal{C}: \mathbf{Sub}(\mathcal{H}) \to \mathbb{R}_{\geq 0}$ from the category of subsystems to non-negative reals, with conservation as a constraint on natural transformations.

## Addressed Gaps

1. **Conditional coherence** — *Resolved by [Coherence Operational](/derivations/axioms/coherence-operational) (Theorem 2.1)*: The dictionary identifying coherence with quantum entropy identifies conditional coherence $\mathcal{C}(S_1 | S_2) = \mathcal{C}(S_1 \cup S_2) - \mathcal{C}(S_2)$ with quantum conditional entropy, completing the formal characterization.
2. **Monotonicity** — *Resolved*: The operational identification in [Coherence Operational](/derivations/axioms/coherence-operational) (Theorem 4.1) uniquely selects von Neumann entropy as the coherence functional. Von Neumann entropy is monotone for subsystems of a fixed system, so monotonicity follows as a theorem and need not be added as axiom (C6). See the Remark preceding this section.

<!-- References -->
[Fujishige, 2005]: /references#fujishige-2005
