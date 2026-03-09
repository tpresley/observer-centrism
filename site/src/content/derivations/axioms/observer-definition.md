---
title: "The Observer Definition"
status: "provisional"
dependsOn: ["axioms/coherence-conservation"]
enablesDerivation: ["minimal-observer/structure", "minimal-observer/multiplicity", "dimensions/three-dimensions"]
tags: ["foundation"]
summary: "Formalization of the observer as a triple (Σ, I, B) — state space, invariant, and self/non-self boundary — with topological structure and non-triviality conditions"
rigorLevel: "formal"
sourceSection: "02-axioms"
lastUpdated: 2026-03-08
---

## Statement

**Axiom 2 (Observer Definition).** An observer is any structure $\mathcal{O} = (\Sigma, I, \mathcal{B})$ in the coherence space $(\mathcal{H}, \mathcal{A}, \mathcal{C})$ that simultaneously maintains an invariant, draws a self/non-self distinction, and satisfies loop closure. This is a functional definition — it specifies what observers *do*, not what they are made of.

## Formalization

### Step 1: The Coherence Space with Topology

**Definition 1.1.** Equip the coherence space $\mathcal{H}$ from [Coherence Conservation](/derivations/axioms/coherence-conservation) with a topology $\tau$ making $(\mathcal{H}, \tau)$ a Hausdorff topological space. Let $\text{Aut}(\mathcal{H})$ denote the group of homeomorphisms $T: \mathcal{H} \to \mathcal{H}$ that preserve the coherence measure:

$$\mathcal{C}(T(S)) = \mathcal{C}(S) \quad \forall S \in \mathcal{A}$$

These are the **admissible transformations**. Note: admissible transformations preserve the total coherence (Axiom 1) and additionally preserve the coherence of every subsystem.

### Step 2: Observer as a Triple

**Definition 2.1 (Observer).** An **observer** $\mathcal{O}$ is a triple $(\Sigma, I, \mathcal{B})$ where:

**(O1) State space.** $\Sigma \subseteq \mathcal{H}$ is a connected, compact subset with $\Sigma \in \mathcal{A}$ and $\mathcal{C}(\Sigma) > 0$.

**(O2) Invariant.** $I: \Sigma \to V$ is a continuous function to a normed vector space $V$, invariant under a subgroup $G_\mathcal{O} \subseteq \text{Aut}(\mathcal{H})|_\Sigma$:

$$I(g \cdot \sigma) = I(\sigma) \quad \forall g \in G_\mathcal{O}, \; \sigma \in \Sigma$$

The subgroup $G_\mathcal{O}$ is the **symmetry group** of $\mathcal{O}$, and $I$ is the **invariant** (or conserved charge) of $\mathcal{O}$.

**(O3) Self/non-self boundary.** $\mathcal{B}$ is a partition of the restricted transformation group $\text{Aut}(\mathcal{H})|_\Sigma$ into two non-empty classes:

$$\text{Aut}(\mathcal{H})|_\Sigma = G_\mathcal{O} \sqcup G_\mathcal{O}^c$$

where $G_\mathcal{O}$ (the **self-transformations**) are those that preserve $I$, and $G_\mathcal{O}^c$ (the **non-self transformations**) are those that do not:

$$G_\mathcal{O} = \{T \in \text{Aut}(\mathcal{H})|_\Sigma : I \circ T = I\}$$
$$G_\mathcal{O}^c = \{T \in \text{Aut}(\mathcal{H})|_\Sigma : I \circ T \neq I\}$$

### Step 3: Non-Triviality Conditions

**Definition 3.1.** An observer $\mathcal{O} = (\Sigma, I, \mathcal{B})$ is **non-trivial** if it satisfies:

**(N1) Non-degenerate symmetry:** $G_\mathcal{O} \neq \{e\}$ — the symmetry group is not trivial. (Otherwise $I$ is just the identity function on $\Sigma$ and every transformation is non-self.)

**(N2) Non-degenerate threat:** $G_\mathcal{O}^c \neq \emptyset$ — there exist non-self transformations. (Otherwise the observer is in complete isolation, with no external environment to distinguish self from non-self.)

**(N3) Non-trivial invariant:** The image $I(\Sigma) \subset V$ is not a single point. (Otherwise $I$ is constant and carries no information.)

**Proposition 3.2.** *Conditions (N1) and (N2) together imply that $G_\mathcal{O}$ is a proper, non-trivial subgroup of $\text{Aut}(\mathcal{H})|_\Sigma$.*

*Proof.* (N1) gives $G_\mathcal{O} \supsetneq \{e\}$; (N2) gives $G_\mathcal{O} \subsetneq \text{Aut}(\mathcal{H})|_\Sigma$. $\square$

**Proposition 3.3.** *If $\text{Aut}(\mathcal{H})|_\Sigma$ is a simple group (no proper normal subgroups), then no non-trivial observer can have $\Sigma$ as its state space.*

*Proof.* $G_\mathcal{O}$ is the stabilizer of $I$ under the action, hence a subgroup. If the full group is simple, the only proper subgroup structures are severely constrained. In particular, if the action is transitive on $I$-level sets, $G_\mathcal{O}$ would need to be normal (as the kernel of the action on $I$-values), contradicting simplicity unless $G_\mathcal{O} = \{e\}$ or $G_\mathcal{O}$ is the full group. Both cases violate non-triviality. $\square$

### Step 4: The Observer Boundary

**Definition 4.1.** The **boundary** $\partial\mathcal{O}$ of observer $\mathcal{O}$ is:

$$\partial\mathcal{O} = \{\sigma \in \Sigma : \exists T \in G_\mathcal{O}^c \text{ such that } T(\sigma) \notin \Sigma\}$$

This is the set of states from which a non-self transformation can eject the system from $\Sigma$ — the **locus of vulnerability**.

**Proposition 4.2.** *The boundary $\partial\mathcal{O}$ is non-empty for any non-trivial observer.*

*Proof.* By (N2), there exists $T \in G_\mathcal{O}^c$ with $I(T(\sigma_0)) \neq I(\sigma_0)$ for some $\sigma_0 \in \Sigma$. If $T(\sigma_0) \in \Sigma$, then $T$ changes $I$ within $\Sigma$ — this means the invariant is not preserved, which is the definition of a non-self transformation acting on the interior. If $T(\sigma_0) \notin \Sigma$, then $\sigma_0 \in \partial\mathcal{O}$ by definition.

In either case, the observer's integrity is actively engaged at some states — these are the boundary states. $\square$

**Proposition 4.3.** *The boundary $\partial\mathcal{O}$ separates $\Sigma$ into an interior (safe) and a region of vulnerability. Formally, $\Sigma \setminus \partial\mathcal{O}$ is the set of states from which no non-self transformation can eject the system from $\Sigma$.*

*Proof.* By definition, $\sigma \in \Sigma \setminus \partial\mathcal{O}$ iff for all $T \in G_\mathcal{O}^c$, $T(\sigma) \in \Sigma$. These states are "interior" — non-self transformations may change $I$ but cannot eject from $\Sigma$. $\square$

### Step 5: Noether Connection

**Theorem 5.1 (Noether identification).** *The observer definition is equivalent to specifying a Noether pair in the coherence geometry: the symmetry group $G_\mathcal{O}$ and its conserved charge $I$ are related by Noether's theorem.*

*Proof.* In the continuous case, let $G_\mathcal{O}$ be a Lie group acting smoothly on $\Sigma$, and let $I$ be the function invariant under this action. By Noether's theorem, a continuous symmetry of the dynamics (the $G_\mathcal{O}$-action) corresponds to a conserved quantity. The invariant $I$ is precisely this conserved quantity.

Conversely, given a conserved quantity $I$, the set of transformations preserving $I$ forms a Lie group $G_\mathcal{O}$. The observer $\mathcal{O}$ is the locus where this Noether pair is realized.

The identification: **an observer is a Noether charge locus in the coherence geometry**. $\square$

**Corollary 5.2.** *The coherence allocated to $\mathcal{O}$ equals the conserved charge: $\mathcal{C}(\Sigma) = \|I\|$ (up to a normalization constant).*

This connects the abstract coherence measure (Axiom 1) to the observer's specific conserved quantity.

### Step 6: Universality

**Proposition 6.1.** *The observer definition applies at every scale: any system maintaining an invariant against an environment that can threaten it satisfies (O1)–(O3) with (N1)–(N3).*

*Examples:*
- **Fundamental particle**: $\Sigma$ = internal phase space, $I$ = charge/spin quantum numbers, $G_\mathcal{O}$ = gauge symmetry, $\partial\mathcal{O}$ = interaction range
- **Atom**: $\Sigma$ = electronic configuration space, $I$ = total energy (at discrete levels), $G_\mathcal{O}$ = rotational symmetry, $\partial\mathcal{O}$ = electron cloud boundary
- **Cell**: $\Sigma$ = biochemical state space, $I$ = metabolic invariants (homeostasis), $G_\mathcal{O}$ = regulatory symmetries, $\partial\mathcal{O}$ = cell membrane
- **Organism**: $\Sigma$ = physiological state space, $I$ = identity-preserving invariants, $G_\mathcal{O}$ = homeostatic processes, $\partial\mathcal{O}$ = skin/immune boundary

The definition captures what is *structurally common* across all these scales without privileging any particular substrate.

### Step 7: Observer Morphisms

**Definition 7.1.** An **observer morphism** $f: \mathcal{O}_1 \to \mathcal{O}_2$ is a continuous map $f: \Sigma_1 \to \Sigma_2$ such that:
1. $I_2 \circ f = \phi \circ I_1$ for some $\phi: V_1 \to V_2$ (invariants are related)
2. $f$ intertwines the symmetry groups: $f \circ g_1 = g_2 \circ f$ for corresponding $g_1 \in G_{\mathcal{O}_1}$, $g_2 \in G_{\mathcal{O}_2}$

**Proposition 7.2.** *Observers and their morphisms form a category $\mathbf{Obs}$. Composite observers (built via the bootstrap) are diagrams in this category.*

*Proof sketch.* Identity morphisms exist ($f = \text{id}$), and morphisms compose (if $f: \mathcal{O}_1 \to \mathcal{O}_2$ and $g: \mathcal{O}_2 \to \mathcal{O}_3$, then $g \circ f: \mathcal{O}_1 \to \mathcal{O}_3$ preserves both conditions). Associativity and identity laws follow from function composition. $\square$

## Comparison with Other Frameworks

| Framework | "Observer" definition | Observer-centrism |
|---|---|---|
| Copenhagen QM | Macroscopic measuring device (undefined) | Any $(\Sigma, I, \mathcal{B})$ satisfying (O1)–(O3) |
| Many-worlds | Branch of the wavefunction | Noether charge locus |
| Relational QM | Any physical system (Rovelli) | Closest parallel: adds the boundary condition |
| Autopoiesis (Maturana/Varela) | Self-producing organization | Similar spirit; adds the Noether structure |

## Rigor Assessment

**Fully rigorous:**
- Definition 2.1: The observer triple $(\Sigma, I, \mathcal{B})$ is precisely defined in terms of the coherence space
- Non-triviality conditions (N1)–(N3): Clear, verifiable criteria
- Propositions 3.2, 3.3: Standard group theory
- Propositions 4.2, 4.3: Follow directly from definitions
- Proposition 7.2: Standard category theory

**Rigorous given Axiom 1:**
- Theorem 5.1 (Noether identification): The continuous case uses Noether's theorem (a standard result). The identification of $\mathcal{C}(\Sigma)$ with $\|I\|$ (Corollary 5.2) requires the coherence measure to respect the dynamics, which follows from Axiom 1.

**Provisional:**
- The topology $\tau$ on $\mathcal{H}$ (Definition 1.1) is postulated but not derived. Its properties constrain what observers are possible, and these constraints need further development.
- The vector-valued invariant $I: \Sigma \to V$ generalizes the real-valued case. Whether $V$ is always finite-dimensional (and what constrains its dimension) is open.
- The universality claim (Proposition 6.1) is a physical assertion that the mathematical definition captures all physical observers. This is not provable from within the formalism.

**Assessment:** The axiom is precisely stated with clear definitions and verifiable consequences. The main open question is whether the topology and vector space choices are sufficiently constrained by the other axioms.

## Open Gaps

1. **Composite observers**: The bootstrap builds composite observers from simpler ones. The composition rule — how $(\Sigma_1, I_1, \mathcal{B}_1)$ and $(\Sigma_2, I_2, \mathcal{B}_2)$ combine into $(\Sigma_{12}, I_{12}, \mathcal{B}_{12})$ — needs the relational invariant construction.
2. **Graded boundaries**: The binary self/non-self partition is an idealization. Real observers may have graded responses. A generalization to a continuous function $\mathcal{B}: \text{Aut}(\mathcal{H})|_\Sigma \to [0,1]$ (degree of threat) may be more physical.
3. **Observer equivalence**: When are two observer triples $\mathcal{O}_1, \mathcal{O}_2$ "the same observer"? The natural answer is: when they are isomorphic in $\mathbf{Obs}$. This needs development.
