---
title: "Observer-Relative Objectivity"
status: "provisional"
dependsOn: ["axioms/coherence-conservation", "axioms/observer-definition", "interactions/relational-invariants", "quantum/measurement", "quantum/entanglement", "quantum/born-rule", "thermodynamics/time"]
enablesDerivation: []
tags: ["quantum", "foundation"]
summary: "Facts are observer-relative but not subjective: coherence conservation constrains all observer descriptions, certain structural facts are observer-invariant, and the subjective/objective dichotomy is replaced by a precise three-level classification"
rigorLevel: "semi-formal"
lastUpdated: 2026-03-15
---

## Overview

This derivation addresses one of the oldest questions in the philosophy of physics: **is the physical world objective or subjective?**

Standard physics assumes a clear answer: there is one objective reality, and observers are passive witnesses to it. Quantum mechanics complicates this picture — measurement outcomes depend on the observer, entangled particles have no individual definite states, and the Wigner's friend scenario suggests that even "facts" can be observer-dependent. This has led some to conclude that quantum mechanics implies subjectivism, while others insist on a fully observer-independent reality.

**The argument.** The observer-centric framework dissolves this dichotomy by showing it rests on a false binary:

- All measurement outcomes are observer-relative: the "state of a system" is always relative to a specific observer's relational invariants. There is no view from nowhere.
- But observer-relativity is not subjectivity. Coherence conservation and the Born rule uniquely constrain what any observer can describe. No observer can fabricate outcomes or assign arbitrary states.
- Certain structural facts — total coherence, conservation laws, network topology — are genuinely observer-invariant: true for all observers regardless of perspective.
- The result is a precise three-level classification: observer-invariant facts, observer-relative but constrained facts, and observer-undefined propositions. This trichotomy replaces the blunt subjective/objective binary.
- A key dissolution: scenarios like Wigner's friend appear paradoxical only when an external time parameter is assumed. In the framework, time is phase ordering on the dependency DAG — there is no observer-independent "now" at which contradictory descriptions must be reconciled. Descriptions need only agree when observers actually interact, and the DAG structure guarantees they will.

**The result.** "Objective" does not mean "observer-independent." It means "constrained by structure that no observer can violate." Observer-centrism provides a form of objectivity that is stronger than subjectivism (coherence conservation enforces agreement) but weaker than classical realism (no single description captures everything for all observers).

**Why this matters.** The subjective/objective debate has confused discussions of quantum mechanics for a century. By making the three-level structure precise, the framework removes the confusion: quantum mechanics is neither subjective nor classically objective — it is observer-relatively objective.

**An honest caveat.** The comparison with other interpretive frameworks (Step 7) is structural and philosophical rather than mathematical. The core trichotomy (Theorem 6.1) is rigorous given the axioms, but its full formalization as a functor on the observer category remains an open gap.

## Statement

**Theorem.** Every physical proposition falls into exactly one of three levels: (1) observer-invariant — true for all observers in a coherence-connected network, (2) observer-relative but constrained — truth value depends on the observer but is uniquely determined by coherence relations, or (3) observer-undefined — no observer in the network can assign a truth value. This trichotomy is exhaustive and exclusive. Observer-relative facts are not subjective: coherence conservation and Born rule uniqueness forbid arbitrary assignment. Classical observer-independence fails: entanglement monogamy prevents any single description from being definite for all observers simultaneously.

## Derivation

### Step 1: Observer-Relative Descriptions

**Definition 1.1 (Observer-relative fact).** A proposition $P$ is **observer-relative** if its truth value is defined only with respect to a specific observer $\mathcal{O} = (\Sigma, I, \mathcal{B})$. Formally, $P$ is a function $P: \text{Obs} \to \{\text{true}, \text{false}, \text{undefined}\}$ from the observer category ([Observer Definition](/derivations/axioms/observer-definition), Definition 4.1) to truth values, where different observers may yield different values.

**Proposition 1.1 (All measurement outcomes are observer-relative).** *The outcome of measuring observable $\hat{A}$ on system $S$ depends on which observer performs the measurement. Different observers can simultaneously hold different but compatible descriptions of the same system.*

*Proof.* This is [Measurement](/derivations/quantum/measurement), Theorem 4.1 and Proposition 4.2. After observer $\mathcal{O}$ measures $S$, a relational invariant $I_{\mathcal{O}S}$ is generated and $S$ is in a definite eigenstate relative to $\mathcal{O}$. A third observer $\mathcal{P}$ who has not interacted with $S$ still describes $S$ in a superposition. Both descriptions are simultaneously correct — they are different conditional descriptions of the same joint state. $\square$

**Proposition 1.2 (Basis decomposition is observer-relative).** *The preferred basis in which a system's state is expressed depends on the observer's interaction structure.*

*Proof.* This is [Preferred Basis](/derivations/quantum/preferred-basis), Theorem 3.1. The preferred basis is determined by the interaction Hamiltonian between observer and system. Different observers, interacting via different Hamiltonians, obtain different basis decompositions. $\square$

### Step 2: Consistency Across Observers

**Theorem 2.1 (Relational consistency).** *For observers $\mathcal{O}_A$, $\mathcal{O}_B$ with shared coherence $\mathcal{C}(I_{AB}) > 0$, their observer-relative descriptions of any system $S$ with which both share relational invariants satisfy:*

$$\mathcal{C}(I_{AS}) + \mathcal{C}(I_{BS}) \leq \mathcal{C}(I_{AS}) + \mathcal{C}(I_{BS}) + \mathcal{C}(I_{AB}) - \mathcal{C}(I_{A \cup B, S})$$

*That is, the shared coherence between $A$ and $B$ constrains the joint coherence structure. The descriptions cannot be independently arbitrary.*

*Proof.* By coherence conservation (Axiom 1, property C5 — strong subadditivity), for subsystems $A$, $B$, $S$:

$$\mathcal{C}(A \cup B \cup S) + \mathcal{C}(B) \leq \mathcal{C}(A \cup B) + \mathcal{C}(B \cup S)$$

This constrains how coherence distributes across the three-party system. In particular, the relational coherences $\mathcal{C}(I_{AS})$, $\mathcal{C}(I_{BS})$, and $\mathcal{C}(I_{AB})$ are not independent — they satisfy inequalities inherited from strong subadditivity. The shared coherence $\mathcal{C}(I_{AB}) > 0$ between $A$ and $B$ forces correlations between their respective descriptions of $S$. $\square$

**Corollary 2.2 (Wigner's friend consistency).** *In the Wigner's friend scenario, when Wigner ($\mathcal{W}$) finally interacts with the friend ($\mathcal{F}$), the outcome $\mathcal{W}$ obtains is necessarily consistent with the outcome $\mathcal{F}$ obtained earlier.*

*Proof.* This is [Measurement](/derivations/quantum/measurement), Theorem 5.2(iii). The existing relational invariant $I_{\mathcal{F}S}$ constrains the entanglement structure, so the new invariant $I_{\mathcal{W}\mathcal{F}}$ correlates with $I_{\mathcal{F}S}$. Consistency is not optional — it is enforced by the coherence structure of the joint state. $\square$

**Remark 2.3 (No external time parameter).** The Wigner's friend scenario appears paradoxical in standard treatments because an external time parameter is assumed: at time $t_1$ the friend measures and gets a definite result, while "at the same time" Wigner describes the lab in superposition. The apparent contradiction — two incompatible descriptions holding "simultaneously" — demands resolution.

In the observer-centric framework, this pressure evaporates. Time is not an external parameter but phase ordering on the dependency DAG ([Time](/derivations/thermodynamics/time)). Wigner and his friend each have their own causal path through $\mathcal{G}$, and there is no observer-independent "now" at which both descriptions coexist. The question "what is *really* happening inside the lab right now?" is malformed — it presupposes an external simultaneity that the framework does not provide.

Descriptions need to be reconciled only when a new vertex in $\mathcal{G}$ connects the two causal paths — i.e., when Wigner actually interacts with the friend. At that vertex, Corollary 2.2 guarantees consistency. Before that vertex exists, there is no slice of the DAG on which both descriptions are jointly evaluated, and therefore no contradiction to resolve. The paradox is an artifact of smuggling an external clock into a framework that has none.

### Step 3: Observer-Invariant Facts

**Definition 3.1 (Observer-invariant fact).** A proposition $P$ is **observer-invariant** if $P(\mathcal{O}) = \text{true}$ for every observer $\mathcal{O}$ in a coherence-connected network $\mathcal{N}$ (a connected component of the interaction graph $\mathcal{G}$).

**Theorem 3.2 (Total coherence is observer-invariant).** *The total coherence $\mathcal{C}(\mathcal{H}) = C_0$ is the same for all observers.*

*Proof.* This follows directly from Axiom 1 ([Coherence Conservation](/derivations/axioms/coherence-conservation), Definition 1.2, property C2). The total coherence is a global constant, not relative to any observer. No measurement, interaction, or change of perspective can alter it. $\square$

**Theorem 3.3 (Conservation laws are observer-invariant).** *The conservation of coherence on Cauchy slices of the dependency DAG ([Coherence Conservation](/derivations/axioms/coherence-conservation), Theorem 3.1) holds for all observers. No observer can witness a violation of coherence conservation.*

*Proof.* Coherence conservation is an axiom (Axiom 1c), not a derived observer-relative statement. Any admissible transformation $T \in \text{Aut}(\mathcal{H})$ preserves $\mathcal{C}$ ([Observer Definition](/derivations/axioms/observer-definition), Definition 1.2). Since every observer's dynamics are admissible transformations (by definition of the observer category), every observer's description respects conservation. $\square$

**Theorem 3.4 (Network topology is observer-invariant).** *Whether two observers share a relational invariant ($\mathcal{C}(I_{AB}) > 0$) is an observer-invariant fact.*

*Proof.* A relational invariant $I_{AB}$ is a conserved quantity on the joint state space $\Sigma_A \times \Sigma_B$ satisfying conditions R1–R3 ([Relational Invariants](/derivations/interactions/relational-invariants), Definition 1.1). Its existence is a structural property of the interaction graph — either a Type III interaction has occurred between $A$ and $B$ or it has not. This is recorded in the graph $\mathcal{G}$, which is observer-invariant (all observers share the same interaction graph by Axiom 1c — conservation is stated on $\mathcal{G}$). A third observer $\mathcal{O}_C$ may not know the value of $I_{AB}$, but the existence of the relationship is a fact about $\mathcal{G}$, not about any observer's perspective. $\square$

### Step 4: Subjectivity Is Impossible

**Definition 4.1 (Subjective fact).** A proposition $P$ is **subjective** if an observer $\mathcal{O}$ can assign it any truth value without constraint from the coherence structure, inter-observer relations, or the axioms.

**Theorem 4.1 (Non-fabrication).** *No observer $\mathcal{O}$ can assign arbitrary measurement outcomes to a system $S$. The probability of outcome $k$ is uniquely determined:*

$$P(k) = |\psi_k|^2$$

*where $\psi_k = \langle k | \psi_S \rangle_\mathcal{O}$ and $|\psi_S\rangle_\mathcal{O}$ is $S$'s state relative to $\mathcal{O}$.*

*Proof.* The Born rule $P(k) = |\psi_k|^2$ is the **unique** probability assignment compatible with coherence conservation, $U(1)$ phase covariance, and composition ([Born Rule](/derivations/quantum/born-rule), Theorem 6.1). Uniqueness is the key: there is no freedom in the assignment. Given the observer's relational invariants with $S$, the state $|\psi_S\rangle_\mathcal{O}$ is determined, and the probabilities follow uniquely.

The coherence content of the outcome is also fixed: the entropy change upon measurement is $\Delta S = -\mathcal{C}(I_{\mathcal{O}S})$ ([Measurement](/derivations/quantum/measurement), Theorem 6.1). The observer cannot choose how much information the measurement yields — that is determined by the coherence structure of the interaction. $\square$

**Corollary 4.2 (Observer-relative ≠ subjective).** *The fact that measurement outcomes are observer-relative (Proposition 1.1) does not imply they are subjective (Definition 4.1). Each observer's outcomes are uniquely constrained by coherence conservation and the Born rule. Observer-relativity governs which observer holds the fact; coherence conservation governs what facts can be held.*

### Step 5: Pure Observer-Independence Fails

**Definition 5.1 (Observer-independent fact).** A proposition $P$ is **observer-independent** (in the classical realist sense) if there exists a single assignment of definite values to all observables of $S$ that is simultaneously valid for all observers.

**Theorem 5.1 (No universal definiteness).** *There exists no assignment of simultaneous definite values to all observables of a system $S$ that is consistent with all observers' descriptions.*

*Proof.* The proof proceeds by contradiction using entanglement monogamy.

**Step A.** Suppose a universal assignment $v: \text{Obs}(S) \to \text{Values}$ exists, assigning a definite value $v(\hat{A})$ to every observable $\hat{A}$ of $S$ for all observers simultaneously.

**Step B.** Consider observers $\mathcal{O}_A$, $\mathcal{O}_B$, $\mathcal{O}_C$ sharing entanglement with $S$. By entanglement monogamy ([Entanglement](/derivations/quantum/entanglement), Theorem 4.1):

$$\mathcal{C}(I_{AS}) + \mathcal{C}(I_{CS}) \leq f[\mathcal{C}(I_{(AC)S})]$$

The shared coherence is a finite resource — maximally entangling $S$ with $\mathcal{O}_A$ leaves no coherence for $\mathcal{O}_C$.

**Step C.** A universal definite-value assignment requires that each observer's measurement reveals a pre-existing value — equivalently, that $S$ has zero entanglement entropy relative to every observer simultaneously. But if $S$ is entangled with $\mathcal{O}_A$ (i.e., $\mathcal{C}(I_{AS}) > 0$), then $S$'s reduced state relative to $\mathcal{O}_A$ is mixed ([Entanglement](/derivations/quantum/entanglement), Corollary 2.2), meaning not all observables have definite values from $\mathcal{O}_A$'s perspective.

**Step D.** For $S$ to have definite values for all observables relative to all observers, $S$ must be in a pure product state with every observer — but this contradicts the existence of any relational invariant $I_{\mathcal{O}S}$ with non-zero coherence. Since interactions generically generate relational invariants ([Relational Invariants](/derivations/interactions/relational-invariants), Theorem 2.1), universal definiteness is generically impossible. $\square$

**Remark.** This does not mean reality is unknowable. It means that "the complete state of $S$" is not a single object but a network of relational descriptions, each valid from a particular observer's perspective and all constrained by coherence conservation.

### Step 6: The Three-Level Trichotomy

**Theorem 6.1 (Trichotomy).** *Every physical proposition $P$ about a system $S$ within a coherence-connected network $\mathcal{N}$ falls into exactly one of three categories:*

**(Level 1) Observer-invariant.** $P(\mathcal{O}) = \text{true}$ for all $\mathcal{O} \in \mathcal{N}$. Examples: conservation laws (Theorem 3.2–3.3), network topology (Theorem 3.4), total coherence, the dimensionality of Hilbert spaces.

**(Level 2) Observer-relative but constrained.** $P(\mathcal{O})$ depends on $\mathcal{O}$, but the value is uniquely determined by $\mathcal{O}$'s relational invariants with $S$ and the coherence structure. Examples: measurement outcomes (Proposition 1.1), basis decompositions (Proposition 1.2), the reduced density matrix of $S$ relative to $\mathcal{O}$.

**(Level 3) Observer-undefined.** $P(\mathcal{O}) = \text{undefined}$ for all $\mathcal{O} \in \mathcal{N}$. Examples: the value of an observable for which no relational invariant has been generated, properties behind a coherence boundary that no observer in $\mathcal{N}$ can access.

*Proof.* **Exhaustiveness:** Let $P$ be any physical proposition about $S$. Either $P$ has a truth value for at least one observer, or it does not. If it does not, $P$ is Level 3 (observer-undefined). If it does, either $P$ has the same truth value for all observers in $\mathcal{N}$ (Level 1) or it differs across observers (Level 2).

**Exclusiveness:** The three levels are mutually exclusive by construction: Level 1 requires unanimity, Level 2 requires variation, and Level 3 requires universal undefinedness.

**Level 2 is constrained, not arbitrary:** By Theorem 4.1, any observer who holds a truth value for $P$ holds the uniquely determined value — coherence conservation and Born rule uniqueness forbid arbitrary assignment. This distinguishes Level 2 from subjectivity (Definition 4.1).

**Level 1 is non-trivial:** The examples in Theorems 3.2–3.4 show that genuinely observer-invariant facts exist — the framework is not purely relativistic.

**Level 3 is non-trivial:** By the pre-measurement condition ([Measurement](/derivations/quantum/measurement), Definition 1.2), before interaction no relational invariant links $\mathcal{O}$ to $S$ for the observable in question. The observable's value is undefined for $\mathcal{O}$ — not unknown (epistemic uncertainty) but genuinely without truth value (ontological indefiniteness for bounded observers). $\square$

**Corollary 6.2 (Dissolution of the subjective/objective dichotomy).** *The classical binary — "either subjective or objective" — is a false dichotomy. The framework replaces it with a three-level structure:*

| Classical label | Framework replacement | Status |
|---|---|---|
| "Objective" (observer-independent) | Level 1: observer-invariant | Exists but limited to structural facts |
| — | Level 2: observer-relative but constrained | The bulk of physical facts; neither subjective nor classically objective |
| "Subjective" (arbitrary) | Forbidden | Coherence conservation prevents arbitrary assignment |

*The missing piece in the classical dichotomy is Level 2: facts that are genuinely observer-dependent but equally genuinely constrained. This is the novel ontological category that observer-centrism identifies.*

### Step 7: Comparison with Other Frameworks

**Proposition 7.1 (Structural positioning).** *The three-level trichotomy relates to existing interpretive frameworks as follows:*

**(a) QBism** (Fuchs, Mermin, Schack). QBism holds that quantum states are subjective degrees of belief. The framework agrees that states are observer-relative (Level 2) but disagrees that they are subjective: the Born rule uniqueness (Theorem 4.1) means probabilities are constrained by structure, not chosen by the agent. QBism's "participatory realism" is closest to Level 2, but without the coherence constraints that prevent arbitrariness.

**(b) Relational Quantum Mechanics** (Rovelli). RQM holds that quantum states are relational — defined only relative to a reference system. The framework is structurally closest to RQM but differs in grounding: RQM postulates relationality as a basic principle, while observer-centrism derives it from the three axioms ([Measurement](/derivations/quantum/measurement), Proposition 7.2). Additionally, RQM does not provide a mechanism preventing arbitrary assignment — the framework's coherence constraints (Theorem 2.1) add teeth to the relational picture.

**(c) Many-Worlds** (Everett). Many-Worlds maintains observer-independent realism by declaring all outcomes equally real in different branches. The framework achieves consistency without branching: the interaction graph $\mathcal{G}$ is a single structure, and different observers hold different relational perspectives on it. The ontological cost of many-worlds (exponentially many branches) is avoided, while the explanatory benefit (no collapse) is retained.

**(d) Copenhagen**. Copenhagen draws a sharp classical/quantum boundary and postulates collapse. The framework has no such boundary — all systems are observers at some level ([Observer Definition](/derivations/axioms/observer-definition)), and measurement is ordinary coherence dynamics ([Measurement](/derivations/quantum/measurement), Step 2). The observer-relativity of outcomes (Level 2) replaces the classical observer of Copenhagen.

## Rigor Assessment

**Fully rigorous (following from established upstream results):**
- Proposition 1.1: Observer-relativity of measurements (direct application of Measurement Theorem 4.1)
- Proposition 1.2: Observer-relativity of basis (direct application of Preferred Basis Theorem 3.1)
- Corollary 2.2: Wigner's friend consistency (direct application of Measurement Theorem 5.2)
- Theorem 3.2: Total coherence invariance (direct from Axiom 1, C2)
- Theorem 3.3: Conservation law invariance (direct from Axiom 1c)
- Theorem 4.1: Non-fabrication (direct from Born Rule uniqueness, Theorem 6.1)
- Corollary 4.2: Observer-relative ≠ subjective (logical consequence of Theorem 4.1 + Proposition 1.1)

**Rigorous given axioms:**
- Theorem 2.1: Relational consistency (uses strong subadditivity C5, rigorous from Axiom 1)
- Remark 2.3: No external time parameter (follows from Time as phase ordering on the DAG; the absence of observer-independent simultaneity is a structural consequence of the framework)
- Theorem 3.4: Network topology invariance (relies on interaction graph structure from Axiom 1c)
- Theorem 5.1: No universal definiteness (uses entanglement monogamy, rigorous from Entanglement Theorem 4.1)
- Theorem 6.1: Trichotomy (logical classification; exhaustiveness and exclusiveness are definitional; the substantive content — that Level 2 is constrained — relies on Theorem 4.1)

**Semi-formal:**
- Proposition 7.1: Comparison with other frameworks (structural/philosophical comparison, not mathematical)

**Assessment:** The core results (three-level trichotomy, non-fabrication, failure of universal definiteness) are rigorous given the axioms and build directly on established upstream derivations. The main semi-formal element is the interpretive comparison (Step 7), which positions the framework relative to existing approaches but does not make mathematical claims. The derivation is assessed as **provisional** because the full category-theoretic formalization of the trichotomy (as a functor on Obs) remains open.

## Open Gaps

1. **Quantum Darwinism formalization**: When many independent observers measure the same system and all obtain consistent results, this creates effective observer-invariance (promotion from Level 2 to effective Level 1). Formalizing this requires showing that redundant encoding of relational invariants in the environment produces convergence of observer descriptions — connecting to Zurek's quantum Darwinism program.

2. **Contextuality connection**: The Kochen-Specker theorem shows that non-contextual hidden variable models are impossible. This is closely related to Theorem 5.1 (no universal definiteness) but approaches from a different direction. A formal connection would strengthen the Level 2 characterization by linking it to the established contextuality literature.

3. **Extended Wigner's friend**: The Frauchiger-Renner no-go theorem constrains theories with certain assumptions about nested observers. The framework should be formally tested against this theorem — the three-level structure may provide a precise diagnosis of which assumption is violated (likely the assumption of observer-independent facts, replaced by the Level 1/2/3 distinction).

4. **Continuous observables**: The current treatment focuses on discrete measurement outcomes. Extending the trichotomy to continuous-spectrum observables requires care with the notion of "definite value" (replaced by spectral measures) and the definition of observer-relative POVMs.

5. **Category-theoretic objectivity**: The trichotomy (Theorem 6.1) could be formalized as a functor from the observer category Obs to a suitable truth-value category. Level 1 facts correspond to natural transformations (invariant across all observers), Level 2 to sections of a sheaf (locally defined, globally constrained), and Level 3 to the complement of the functor's image. This formalization would make the three-level structure intrinsic to the mathematical framework rather than a classification imposed from outside.
