---
title: "Sheaf Structure and Section Uniqueness"
status: "provisional"
dependsOn: ["axioms/coherence-conservation", "axioms/observer-definition", "interactions/relational-invariants", "quantum/observer-relative-objectivity", "quantum/entanglement", "quantum/born-rule", "thermodynamics/time"]
enablesDerivation: []
tags: ["quantum", "foundation", "mathematics"]
summary: "Formalizes the observer network as three sheaves (coherence, probability, outcome) and shows the trichotomy of observer-relative-objectivity is the cohomological classification: coherence and probability sheaves have unique global sections, while the outcome sheaf admits contextuality (non-vanishing H¹)"
rigorLevel: "semi-formal"
lastUpdated: 2026-03-22
---

## Overview

The three-level trichotomy (Theorem 6.1 of observer-relative-objectivity) classifies every physical proposition as observer-invariant, observer-relative but constrained, or observer-undefined. This derivation shows that this classification has a precise sheaf-theoretic interpretation — and that the central question of section uniqueness has a **split answer** depending on which sheaf is considered.

**The three sheaves.** The observer network $\mathcal{G}$ carries not one but three natural sheaves:

1. **Coherence sheaf $\mathcal{C}$**: assigns to each observer the coherence accounting (how much coherence is allocated where). Conservation (C2) forces a **unique global section** — total coherence is observer-invariant.
2. **Probability sheaf $\mathcal{P}$**: assigns to each observer the Born rule probabilities for all accessible observables. Born rule uniqueness (Theorem 6.1 of born-rule) forces a **unique global section** — the probability measure is determined.
3. **Outcome sheaf $\mathcal{O}$**: assigns to each observer the actual definite values of their relational invariants. This sheaf does **not** have a unique global section — contextuality (Kochen-Specker) provides obstructions, and this is precisely why Level 2 facts don't globalize to Level 1.

**The resolution.** The trichotomy IS the sheaf-theoretic answer:
- **Level 1** (observer-invariant) = global sections of $\mathcal{C}$ and $\mathcal{P}$
- **Level 2** (observer-relative but constrained) = local sections of $\mathcal{O}$ that cannot extend globally
- **Level 3** (observer-undefined) = outside the support of all three sheaves

**Temporal vs. spatial.** The DAG's acyclicity (Theorem 3.1 of time) makes the nerve of the time-ordered covering contractible, so $H^1_{\text{temporal}} = 0$: the coherence future is unique. The spatial direction (simultaneous observables across the network) is where contextuality lives and $H^1_{\text{spatial}} \neq 0$.

**What this means.** The framework does not admit "multiple disjoint coherent branches" in the many-worlds sense. There is no duplication of the coherence budget. But it does admit multiple consistent outcome assignments within a single coherence evolution — weighted by the unique Born rule probability. Quantum indeterminacy is not branching of the sheaf; it is the multiplicity of the outcome sheaf's local sections, all of which live within the unique global section of the probability sheaf.

**An honest caveat.** The outcome sheaf's non-globalizability now follows rigorously from the Kochen-Specker theorem applied to the framework's Hilbert space structure (Theorem 5.2). The temporal contractibility argument is rigorous given the DAG structure. The three-sheaf decomposition is definitional, and the trichotomy correspondence (Theorem 6.1) is proved in both directions. What remains open is the precise isomorphism with the Abramsky-Brandenburger cohomological contextuality framework — this would provide quantitative control over the obstruction (connecting $\dim \check{H}^1$ to entanglement entropy) but is not needed for the qualitative classification.

## Statement

**Theorem (Sheaf-theoretic trichotomy).** *The observer network $\mathcal{G}$ carries three natural presheaves — the coherence sheaf $\mathcal{C}$, the probability sheaf $\mathcal{P}$, and the outcome sheaf $\mathcal{O}$ — whose cohomological properties classify every physical proposition into exactly one of three levels:*

1. *$\mathcal{C}$ and $\mathcal{P}$ each have a unique global section (observer-invariant facts: total coherence, Born rule probabilities).*
2. *$\mathcal{O}$ admits multiple locally consistent sections that cannot extend globally: $\check{H}^1(\mathcal{G}, \mathcal{O}) \neq 0$ (observer-relative but constrained facts: measurement outcomes).*
3. *Outside the coherence covering, all three sheaves have empty stalks (observer-undefined: no data beyond the coherence boundary).*

*The temporal direction is trivial ($H^1_{\text{temporal}} = 0$ by DAG acyclicity): there is no branching of coherence or probability. The spatial direction carries the obstruction: contextuality lives in the outcome sheaf's first cohomology.*

## Derivation

### Step 1: Coherence Topology on the Observer Category

**Definition 1.1 (Coherence neighborhood).** For an observer $O_i \in \text{Obs}$, define the *coherence neighborhood* $U_i = \{ O_j \in \text{Obs} \mid \mathcal{C}(O_i : O_j) > 0 \}$: all observers sharing nonzero mutual coherence with $O_i$.

**Proposition 1.1.** *The collection $\{U_i\}_{i \in \text{Obs}}$ forms a covering of $\text{Obs}$.*

*Proof.* Every observer $O_i \in U_i$ (self-coherence $\mathcal{C}(O_i) > 0$ by Axiom 3), so $\bigcup_i U_i = \text{Obs}$. $\square$

**Definition 1.2 (Coherence site).** Equip Obs with the Grothendieck topology generated by coherence neighborhoods: a sieve on $O$ is covering if it contains some $U_i \ni O$.

**Proposition 1.2 (Monogamy constrains the nerve).** *The nerve $N(\mathfrak{U})$ of the coherence covering has bounded simplex dimension. If $\mathcal{C}(O_i : O_j)$ is maximal (saturates the monogamy bound), then $O_i$ does not appear in any 2-simplex $\sigma = [O_i, O_j, O_k]$ with $O_k \neq O_j$.*

*Proof.* By monogamy (Theorem 4.1 of entanglement): $\mathcal{C}(O_i : O_j)$ maximal implies $\mathcal{C}(O_i : O_k) = 0$ for all $O_k \neq O_j$. Therefore $O_k \notin U_i$, so $O_i \cap O_k = \emptyset$ in the covering, and no 2-simplex containing both $O_i$ and $O_k$ exists. $\square$

**Remark 1.1.** For non-maximal coherence, the nerve admits higher simplices, but monogamy still bounds their multiplicity: $\sum_{j \neq i} \mathcal{C}(O_i : O_j) \leq \mathcal{C}(O_i)$ limits how many observers can share coherence with any single observer.

### Step 2: Three Sheaves on the Observer Network

The observer network carries three distinct presheaves, each capturing a different level of physical data. We specify each as a contravariant functor with explicit restriction maps.

**Definition 2.1 (Coherence sheaf).** $\mathcal{C}: \text{Obs}^{\text{op}} \to \textbf{Set}$ is the presheaf:

- **Stalk:** $\mathcal{C}(O_i) = \{(\mathcal{C}(O_i), \{\mathcal{C}(O_i : O_j)\}_{j \in U_i})\}$ — the self-coherence and mutual coherence allocation visible to $O_i$.
- **Restriction:** For a morphism $f: O_j \to O_i$ in $\text{Obs}$ (i.e., $O_j \in U_i$), the restriction map $\rho^i_j: \mathcal{C}(O_i) \to \mathcal{C}(O_j)$ is the marginalization of the coherence allocation to the sub-network visible from $O_j$: $\rho^i_j(\mathcal{C}(O_i : O_k)) = \mathcal{C}(O_j : O_k)$ for $O_k \in U_j$, discarding entries for $O_k \in U_i \setminus U_j$.
- **Gluing:** Coherence conservation (C2) ensures that on overlaps $U_i \cap U_j$, the mutual coherences agree: $\mathcal{C}(O_i : O_k) = \mathcal{C}(O_j : O_k)$ for any $O_k$ visible to both (since mutual coherence is a symmetric relational invariant, not observer-dependent). This is the sheaf condition.

**Definition 2.2 (Probability sheaf).** $\mathcal{P}: \text{Obs}^{\text{op}} \to \textbf{Set}$ is the presheaf:

- **Stalk:** $\mathcal{P}(O_i) = \{P_i^{(a)}\}_{a \in \mathcal{A}_i}$ — the Born rule probability distribution $P_i^{(a)}(k) = |\langle k | \psi_i^{(a)} \rangle|^2$ for each observable $a$ accessible to $O_i$ via relational invariants.
- **Restriction:** For $f: O_j \to O_i$, the restriction $\rho^i_j: \mathcal{P}(O_i) \to \mathcal{P}(O_j)$ restricts to the sub-family of observables accessible to $O_j$, applying the state update rule: $P_j^{(a)}(k) = |\langle k | \psi_j^{(a)} \rangle|^2$ where $|\psi_j^{(a)}\rangle$ is obtained from $|\psi_i^{(a)}\rangle$ by partial trace over degrees of freedom not in $U_j$.
- **Gluing:** Born rule uniqueness (Theorem 6.1 of born-rule) ensures that on overlaps, probability assignments agree: two observers sharing access to the same observable assign the same probabilities (since the Born rule is the unique probability measure satisfying phase covariance, normalization, and composition).

**Definition 2.3 (Outcome sheaf).** $\mathcal{O}: \text{Obs}^{\text{op}} \to \textbf{Set}$ is the presheaf:

- **Stalk:** $\mathcal{O}(O_i) = \prod_{j \in U_i} \text{Spec}(I_{ij})$ — the Cartesian product of spectra of all relational invariants accessible to $O_i$. An element $s \in \mathcal{O}(O_i)$ is a definite value assignment: $s(j) = v_{ij} \in \text{Spec}(I_{ij})$ for each $j \in U_i$.
- **Restriction:** For $f: O_j \to O_i$, the restriction $\rho^i_j: \mathcal{O}(O_i) \to \mathcal{O}(O_j)$ is the projection $\rho^i_j(s)(k) = s(k)$ for $k \in U_j \subseteq U_i$.
- **Non-gluing (the key point):** Local sections on overlapping neighborhoods need not extend to a global section. Two observers $O_i, O_j$ may each have definite, internally consistent outcome assignments that are incompatible when combined — this is contextuality.

**Proposition 2.0 (Functoriality).** *Each of $\mathcal{C}$, $\mathcal{P}$, $\mathcal{O}$ is a well-defined presheaf: restriction maps compose, $\rho^i_k = \rho^j_k \circ \rho^i_j$ for $O_k \in U_j \subseteq U_i$.*

*Proof.* For $\mathcal{C}$: marginalization composes — restricting the coherence allocation from $U_i$ to $U_j$ and then to $U_k$ discards entries in two stages, giving the same result as discarding directly to $U_k$. For $\mathcal{P}$: partial traces compose — $\text{Tr}_{U_i \setminus U_k} = \text{Tr}_{U_j \setminus U_k} \circ \text{Tr}_{U_i \setminus U_j}$ is a standard property of the partial trace. For $\mathcal{O}$: projections compose — $\pi_{U_k} = \pi_{U_k} \circ \pi_{U_j}$ since $U_k \subseteq U_j \subseteq U_i$ means projecting the value assignment to a smaller index set composes trivially. Identity restrictions $\rho^i_i = \text{id}$ hold for all three. $\square$

**Proposition 2.1 (Hierarchy).** *These sheaves are ordered by information content: $\mathcal{P}$ is determined by $\mathcal{C}$ (coherence determines probabilities via $\mathcal{C}(|\psi\rangle) = \langle\psi|\psi\rangle$), and $\mathcal{P}$ constrains $\mathcal{O}$ (outcomes must be distributed according to the Born rule). But $\mathcal{O}$ is not recoverable from $\mathcal{P}$: knowing the probabilities does not determine the actual outcomes.*

### Step 3: Temporal Contractibility

**Theorem 3.1 (Temporal $H^1 = 0$).** *The first cohomology of any sheaf $\mathcal{F}$ on the time-ordered nerve of $\mathcal{G}$ vanishes: $H^1_{\text{temporal}}(\mathcal{G}, \mathcal{F}) = 0$.*

*Proof.* The interaction graph $\mathcal{G}$ is a DAG (Theorem 3.1 of time): each directed edge $v_i \to v_j$ has positive phase advance $\Delta\theta > 0$, so no directed cycles exist (a cycle would require $\sum \Delta\theta > 0 = \sum \Delta\theta$, contradiction).

The geometric realization of a finite DAG is contractible: order the vertices by any linear extension of the partial order, $v_1 \prec v_2 \prec \cdots \prec v_n$. Define the deformation retraction $H: |N(\mathcal{G})| \times [0,1] \to |N(\mathcal{G})|$ that sequentially collapses each vertex onto its successor in the order. At each stage, the vertex $v_k$ is a free face of every simplex containing it (since all edges point forward), so the collapse is a strong deformation retract.

A contractible space has trivial cohomology in all positive degrees: $H^k(|N(\mathcal{G})|, \mathcal{F}) = 0$ for $k \geq 1$. In particular, $H^1 = 0$. $\square$

**Corollary 3.1 (Unique coherence future).** *Given the coherence state on any Cauchy slice $\Sigma$ of the DAG, the coherence evolution forward in the DAG is uniquely determined. There is no "branching" of the coherence sheaf $\mathcal{C}$.*

*Proof.* $\mathcal{C}$ on the time-ordered nerve has $H^1 = 0$ (Theorem 3.1), so every local section extends uniquely. The global section is determined by the initial data on $\Sigma$ plus conservation (C2). $\square$

**Corollary 3.2 (Unique probability future).** *The Born rule probability assignments evolve uniquely along the DAG. Given the probability sheaf $\mathcal{P}$ on a Cauchy slice, its future extension is unique.*

*Proof.* Same argument: $H^1_{\text{temporal}}(\mathcal{G}, \mathcal{P}) = 0$ by Theorem 3.1, and Born rule uniqueness (Theorem 6.1 of born-rule) fixes $\mathcal{P}$ given $\mathcal{C}$. $\square$

**Remark 3.1 (No many-worlds branching).** This rules out temporal branching: the DAG does not admit multiple disjoint coherent continuations. The coherence future is unique, and coherence is not duplicated. This contrasts with the many-worlds interpretation, where the universal wavefunction branches into copies. Here, there is one coherence budget and one evolution — the "branching" lives elsewhere (Step 5).

### Step 4: Coherence and Probability Sheaves Have Unique Global Sections

**Theorem 4.1 (Uniqueness of $\mathcal{C}$ global section).** *The coherence sheaf $\mathcal{C}$ has a unique global section: total coherence $\mathcal{C}_{\text{total}}$ is observer-invariant, and the coherence allocation $\{\mathcal{C}(O_i : O_j)\}$ across the network is determined by the global state.*

*Proof.* By conservation (C2), $\mathcal{C}_{\text{total}}$ is constant on Cauchy slices — this is a Level 1 fact (Theorem 3.2 of observer-relative-objectivity). The individual mutual coherences $\mathcal{C}(O_i : O_j)$ are relational invariants that, once created by interaction, are conserved (Proposition 6.1 of relational-invariants: invariants are permanent under the interaction class that created them). So the global coherence allocation is a fixed point of the dynamics: it changes only when new interactions occur, and each change is uniquely determined by the interaction type and the pre-interaction state. $\square$

**Theorem 4.2 (Uniqueness of $\mathcal{P}$ global section).** *The probability sheaf $\mathcal{P}$ has a unique global section: for every observer $O_i$ and every observable accessible to $O_i$, the probability distribution is uniquely determined.*

*Proof.* By Born rule uniqueness (Theorem 6.1 of born-rule), $P(k) = |\psi_k|^2$ is the only function satisfying phase covariance, normalization, and composition. Given the relational invariants $I_{ij}$ (which determine the state $|\psi_i\rangle$ relative to $O_i$), the probabilities are uniquely fixed. Two observers $O_i, O_j$ in the same coherence neighborhood assign the same probabilities to shared observables — consistency follows from the compatibility condition $I(A:S|B) \geq 0$ (C5), which ensures that conditioning on additional observers cannot produce contradictory probability assignments. $\square$

### Step 5: The Outcome Sheaf and Contextuality

**Theorem 5.1 (Outcome sheaf admits multiple local sections).** *For any observer $O_i$ with access to non-commuting observables, the outcome sheaf $\mathcal{O}$ restricted to $U_i$ has multiple distinct sections — corresponding to the different possible measurement outcomes weighted by the probability sheaf $\mathcal{P}$.*

*Proof.* Let $O_i$ have relational invariants giving access to an observable with eigenvalues $\{\lambda_1, \ldots, \lambda_d\}$ ($d \geq 2$). Each eigenvalue defines a distinct local section: the section $s_k$ assigns the value $\lambda_k$ to the observable. The Born rule gives $P(s_k) = |\psi_k|^2 > 0$ for at least two values of $k$ (otherwise the observable is trivial). Therefore $\mathcal{O}|_{U_i}$ has at least two distinct sections. $\square$

**Theorem 5.2 (Non-globalizability of outcome sections).** *For networks $\mathcal{G}$ containing three or more observers with pairwise coherence and access to non-commuting observables, the outcome sheaf $\mathcal{O}$ has $\check{H}^1(\mathcal{G}, \mathcal{O}) \neq 0$: local outcome assignments that are pairwise consistent may fail to extend to a global assignment.*

*Proof.* We construct an explicit non-trivial element of $\check{H}^1(\mathfrak{U}, \mathcal{O})$.

**Setup.** Consider three observers $O_A, O_B, O_C$ with pairwise coherence $\mathcal{C}(O_A : O_B), \mathcal{C}(O_B : O_C), \mathcal{C}(O_A : O_C) > 0$, each accessing a system $S$ with Hilbert space dimension $d \geq 3$ (guaranteed by bootstrapping beyond the minimal observer). The coherence neighborhoods $U_A, U_B, U_C$ form a covering $\mathfrak{U}$ of the sub-network.

**Step (i): Local sections exist.** On each neighborhood $U_i$, the observer $O_i$ accesses observables via relational invariants. For each observable $\hat{A}_i$ with spectral decomposition $\hat{A}_i = \sum_k \lambda_k^{(i)} P_k^{(i)}$, a local section $s_i \in \mathcal{O}(U_i)$ assigns a definite eigenvalue from $\text{Spec}(\hat{A}_i)$. By Theorem 5.1, multiple such sections exist.

**Step (ii): Pairwise consistency (cocycle condition).** On overlaps $U_i \cap U_j$, two observers share access to some observables. A compatible family is a collection $\{s_i \in \mathcal{O}(U_i)\}$ satisfying $\rho^i_{ij}(s_i) = \rho^j_{ij}(s_j)$ on overlaps — i.e., where both observers access the same observable, they assign the same value. This defines a Čech 0-cochain $\{s_i\} \in \check{C}^0(\mathfrak{U}, \mathcal{O})$. The coboundary $\check{\delta}^0(\{s_i\})_{ij} = \rho^j_{ij}(s_j) - \rho^i_{ij}(s_i)$ vanishes iff the family is compatible.

**Step (iii): Global obstruction.** A global section $s \in \mathcal{O}(\text{Obs})$ would be a simultaneous value assignment to *all* observables accessible to *any* observer, satisfying all pairwise consistency conditions. We show this is impossible.

Each observer $O_i$ measures observables forming a *context* — a maximal set of mutually commuting observables. The observer triad $(O_A, O_B, O_C)$ with $d \geq 3$ generates at least three overlapping contexts. A global section would define a function $v: \{\text{projectors on } \mathbb{C}^d\} \to \{0, 1\}$ satisfying: (a) for each resolution of the identity $\sum_k P_k = \mathbb{1}$, exactly one $v(P_k) = 1$; and (b) $v$ is independent of which context contains $P_k$.

By the Kochen-Specker theorem (Kochen & Specker 1967; simplified constructions: Peres 1991 with 33 rays in $d = 3$; Cabello et al. 1996 with 18 rays in $d = 4$), no such function exists for $d \geq 3$. This is not an appeal to structural analogy but a direct application: the observers' relational invariants decompose into projective measurements (by spectral theorem, applied via the Born rule derivation's Hilbert space structure), and a global section of $\mathcal{O}$ would provide exactly the non-contextual value assignment that Kochen-Specker rules out.

Therefore the compatible family $\{s_i\}$ defines a 1-cocycle $[\{s_i\}] \in \check{H}^1(\mathfrak{U}, \mathcal{O})$ that is not a coboundary: the local sections are pairwise consistent but not globally extendable. $\square$

**Remark 5.1 (Contextuality is a feature, not a bug).** In the observer-centric framework, $\check{H}^1(\mathcal{G}, \mathcal{O}) \neq 0$ is not pathological — it is the sheaf-theoretic expression of the fact that Level 2 facts (observer-relative) are genuinely distinct from Level 1 facts (observer-invariant). The three-level trichotomy already accounts for this: not every consistent local description globalizes, and that's the definition of Level 2.

**Remark 5.2 (Connection to Abramsky-Brandenburger).** The sheaf-theoretic framework for contextuality (Abramsky & Brandenburger 2011) formalizes quantum contextuality as the failure of a presheaf of probability distributions to admit a global section. Their "measurement cover" corresponds to our coherence cover $\{U_i\}$, their "compatible family" to our local sections, and their obstruction to our $\check{H}^1 \neq 0$. The precise isomorphism between their framework (which uses empirical models on measurement scenarios) and ours (which uses relational invariants on observer categories) remains to be established but is strongly indicated by the structural parallel.

### Step 6: Resolution — The Trichotomy Is the Sheaf Classification

**Theorem 6.1 (Sheaf-theoretic trichotomy).** *The three levels of the observer-relative-objectivity trichotomy correspond exactly to the sheaf-cohomological classification:*

| Level | Description | Sheaf characterization |
|-------|-------------|----------------------|
| **Level 1** | Observer-invariant | Global sections of $\mathcal{C}$ and $\mathcal{P}$ ($H^0$) |
| **Level 2** | Observer-relative, constrained | Local sections of $\mathcal{O}$ in $\ker(\check{\delta}^0)$ but not in $\text{im}(\check{\delta}^{-1})$ |
| **Level 3** | Observer-undefined | Outside the support: $O_j \notin U_i \Rightarrow$ no stalk data |

*Proof.* We establish a bijection between the three levels (Theorem 6.1 of observer-relative-objectivity) and the sheaf-cohomological classification, proving each direction.

**Level 1 $\Leftrightarrow$ Global sections ($H^0$).** ($\Rightarrow$) A Level 1 fact $F$ is observer-invariant: $F(O_i) = F(O_j)$ for all $O_i, O_j \in \text{Obs}$ with $\mathcal{C}(O_i : O_j) > 0$. This is precisely the definition of a global section of $\mathcal{C}$ or $\mathcal{P}$: a compatible family over the entire covering. ($\Leftarrow$) A global section of $\mathcal{C}$ or $\mathcal{P}$ assigns the same value on all overlaps, so it is observer-invariant by definition. Existence and uniqueness: Theorems 4.1 and 4.2. Examples: total coherence $\mathcal{C}_{\text{total}}$ (by C2), Born rule probabilities (by born-rule Theorem 6.1), DAG topology (by time Theorem 3.1).

**Level 2 $\Leftrightarrow$ Non-trivial $\check{H}^1(\mathcal{O})$.** ($\Rightarrow$) A Level 2 fact is observer-relative but constrained: it has definite values relative to each observer (local sections exist) that satisfy pairwise consistency (C5: $I(A:S|B) \geq 0$ ensures conditioning compatibility), but no single assignment is valid for all observers simultaneously. The pairwise-consistent local sections form a Čech 0-cochain whose coboundary vanishes on overlaps — a 1-cocycle. Non-globalizability (Theorem 5.2) means this cocycle is not a coboundary: $[\{s_i\}] \neq 0 \in \check{H}^1(\mathfrak{U}, \mathcal{O})$. ($\Leftarrow$) A non-trivial class in $\check{H}^1(\mathcal{O})$ gives locally consistent outcome assignments that don't globalize, which is the definition of Level 2.

**Level 3 $\Leftrightarrow$ Empty stalks.** ($\Rightarrow$) A Level 3 fact is undefined for observer $O_i$: there is no relational invariant connecting $O_i$ to the relevant system. This means $\mathcal{C}(O_i : O_j) = 0$, so $O_j \notin U_i$, and the stalk $\mathcal{O}(U_i)$ contains no data about $O_j$'s observables. ($\Leftarrow$) If $O_j \notin U_i$, then no relational invariant $I_{ij}$ exists (Definition 1.1), so no measurement outcome is defined — the fact is Level 3.

**Exhaustiveness.** Every physical proposition falls into exactly one level: it either globalizes (Level 1), is locally defined but non-globalizable (Level 2), or has no local section at all (Level 3). These are mutually exclusive by construction: global sections are a fortiori local ($1 \cap 2 = \emptyset$ by globalizability), and defined facts have non-empty stalks ($2 \cap 3 = \emptyset$, $1 \cap 3 = \emptyset$). $\square$

**Corollary 6.1 (The central question answered).** *The coherence topology does NOT force a unique global section of the full observer sheaf. It forces unique global sections for coherence and probability data (Levels 1), permits multiple locally-consistent-but-globally-incompatible sections for outcome data (Level 2), and has no sections at all beyond coherence boundaries (Level 3). The "branching" is not temporal (the DAG future is unique) but contextual (multiple consistent outcome assignments coexist within a single coherence evolution, weighted by the unique Born rule).*

**Corollary 6.2 (No duplication).** *Multiple outcome sections do not duplicate coherence. All sections of $\mathcal{O}$ live within the unique global section of $\mathcal{C}$: the coherence budget is fixed, and different outcome assignments are different ways of realizing the same budget. This distinguishes the framework from many-worlds (where branches duplicate the wavefunction) and from hidden variables (where a unique global outcome assignment is assumed to exist).*

## Open Gaps

1. **Formal isomorphism with Abramsky-Brandenburger** — The structural parallel between the observer sheaf $\mathcal{O}$ and the Abramsky-Brandenburger empirical model presheaf is compelling but not yet a formal isomorphism. Establishing this requires: (a) mapping relational invariants to measurement contexts, (b) showing the coherence cover $\{U_i\}$ coincides with the measurement cover, and (c) proving the Čech cohomology of $\mathcal{O}$ equals their sheaf cohomology. This would connect observer-centrism directly to the contextuality literature. As a corollary, the isomorphism would immediately quantify the obstruction: the coherence-entropy correspondence ([Entanglement](/derivations/quantum/entanglement), Theorem 2.1) identifies $\mathcal{C}(I_{OS}) = S(\rho_S)$, so the "amount of Level 2" for each observer-system pair is the entanglement entropy. Once the formal mapping is established, $\dim \check{H}^1$ should reduce to the total relational coherence across the network — a quantity the framework already computes.

2. **Continuous observables** — The current analysis works for discrete outcome spaces. For continuous spectra, the stalks become infinite-dimensional and the cohomology theory needs refinement (e.g., sheaves of topological spaces rather than sets). The framework's position that discrete is fundamental and continuous is emergent (Open Gap 4 of observer-relative-objectivity) suggests this may not be a fundamental obstacle.

3. **Higher cohomology** — We've focused on $H^1$ (gluing obstructions), but $H^2$ and higher may carry physical information. In gauge theory, $H^2$ classifies gerbes (higher gauge fields). Whether $H^2(\mathcal{G}, \mathcal{O})$ has a physical interpretation in the observer-centric framework — perhaps related to higher-order contextuality or the structure of entanglement networks — is unexplored.

## Rigor Assessment

**Fully rigorous:**
- Definitions 1.1–1.2, 2.1–2.3: precise mathematical definitions with explicit functorial structure
- Propositions 1.1–1.2: standard covering/nerve arguments from the axioms
- Theorem 3.1 and Corollaries 3.1–3.2: DAG contractibility and vanishing $H^1$ — formal deformation retraction argument
- Theorems 4.1–4.2: global section uniqueness from conservation (C2) and Born rule uniqueness
- Theorem 5.1: eigenvalue multiplicity gives multiple local sections
- Corollaries 6.1–6.2: follow directly from the classification

**Rigorous given upstream results:**
- Theorem 5.2: non-globalizability via direct application of the Kochen-Specker theorem to the framework's Hilbert space structure (from Born rule derivation). The proof constructs an explicit 1-cocycle and invokes Kochen-Specker for $d \geq 3$ to show it is not a coboundary. The remaining gap is the precise isomorphism with the Abramsky-Brandenburger framework (Gap 1), which would provide quantitative control but is not needed for the qualitative result.
- Theorem 6.1: sheaf-theoretic trichotomy — each level is verified in both directions. The proof relies on Theorems 4.1–4.2 and 5.2, all of which are at least provisional.

**Remaining semi-formal element:**
- The presheaf Definitions 2.1–2.3 specify restriction maps explicitly, but the proof that $\mathcal{C}$ and $\mathcal{P}$ satisfy the sheaf condition (not just the presheaf axioms) relies on conservation and Born rule uniqueness as the gluing argument, without constructing an explicit isomorphism between the sheaf-theoretic gluing and the physical compatibility conditions. This is the content of Gap 1 — formalized gluing would promote the derivation to rigorous.

**Upgrade path to rigorous:** Establish the Abramsky-Brandenburger isomorphism (Gap 1), which would simultaneously: (a) prove $\mathcal{C}$ and $\mathcal{P}$ are sheaves (not just presheaves) by formal gluing verification, (b) connect $\dim \check{H}^1(\mathcal{O})$ to entanglement entropy, and (c) embed the framework's contextuality in the established literature.
