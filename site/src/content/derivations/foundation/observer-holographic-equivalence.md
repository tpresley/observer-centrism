---
title: "Observer Holographic Equivalence"
status: "provisional"
dependsOn: ["axioms/coherence-conservation", "axioms/observer-definition", "axioms/loop-closure", "holography/area-scaling", "holography/horizon-gauge-shell", "thermodynamics-ext/distinguishability-conservation", "foundation/observer-projected-spacetime", "interactions/bootstrap", "foundation/knot-theoretic-bootstrap"]
enablesDerivation: []
tags: ["foundation", "holography", "structure"]
summary: "Three complementary theses. (A, time-like) For any observer A and any closed surface Σ enclosing A's coherence domain within its projected continuous dual, the sequenced record of Type III carrier crossings of Σ over A's history determines A's state at each tick. (A', space-like) For any Cauchy slice through the interior of A's coherence domain at tick t_k, the instantaneous configuration of constituents and their space-like correlations determines A's state at t_k. A and A' are unitarily equivalent dual descriptions. (B) Phase discard is a property of null portions of enclosing surfaces: wherever a surface is null, its encoding carries only integer/topological data; wherever it is timelike or spacelike, it carries full continuous phase. The null horizon ∂M_A is entirely null and therefore entirely integer-encoded — the canonical coarsest holographic surface. Consequences: the three-region decomposition of M_A is a phase-resolution ladder, level transitions propagate only integer data across bootstrap levels, and the cosmological constant hierarchy is a combinatorial obstruction class."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-17
---

## Overview

The framework already commits, in scattered derivations, to several specific facts about observer boundaries:

- Coherence is conserved and information is not deleted ([Coherence Conservation](/derivations/axioms/coherence-conservation), [Distinguishability Conservation](/derivations/thermodynamics-ext/distinguishability-conservation) Theorem 6.1).
- A region's degrees of freedom are bounded by its boundary area ([Area Scaling](/derivations/holography/area-scaling)).
- Null horizons are permanent structural features of every observer ([Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Propositions 3.1, 3.2).
- Horizon descriptions are integer- and topology-valued: linking numbers ([Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap) Proposition 1.5), Chern–Simons levels ([Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap) Proposition 2.4), integer framings ([Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap) Proposition 1.3), integer coherence quanta ([Bootstrap](/derivations/interactions/bootstrap) Corollary 2.3), Poisson counts ([Causal Set Statistics](/derivations/holography/causal-set-statistics)).
- Gibbons–Hawking horizon temperature is phase-decoherence ([Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Open Gap 5).

This derivation unifies these under three complementary structural theses. Two of them (A and A') state that an observer's state can be encoded either time-like (on an enclosing surface, accumulated over history) or space-like (on a Cauchy slice through the interior, at a single instant). The third (B) identifies where in that encoding continuous phase is present and where it is discarded.

**Thesis A (Time-like holographic equivalence).** For any observer $A$ and any closed surface $\Sigma$ enclosing $A$'s coherence domain within its projected continuous dual $M_A$, the sequenced record of Type III carrier crossings of $\Sigma$ over $A$'s history up to tick $t_k$ is sufficient to determine $A$'s state at $t_k$.

**Thesis A' (Space-like holographic equivalence).** For any Cauchy slice through the interior of $A$'s coherence domain at tick $t_k$, the instantaneous configuration of $A$'s constituents and their space-like correlations (entanglement, Type I intrinsic dynamics, Type II coherence-preserving evolution, internal Type III relations) is sufficient to determine $A$'s state at $t_k$. Theses A and A' are unitarily equivalent — each determines the other under $A$'s intrinsic dynamics — and neither is prior.

**Thesis B (Null portions carry integer content).** On any enclosing surface, phase discard is a property of the surface's null portions: any null piece of the surface carries integer/topological data only, and any timelike or spacelike piece carries full continuous phase. The null horizon $\partial M_A$ is entirely null, and its entire encoding is therefore integer — making it the canonical coarsest holographic surface. Other enclosing surfaces with mixed causal character carry mixed encodings.

Together these resolve the coherence-domain-vs-horizon ambiguity latent in the framework's boundary language: $\mathcal{B}_A$ and $\partial M_A$ are two enclosing surfaces encoding the same observer state at different resolutions (finest and coarsest), a continuous family of intermediate surfaces lies between them, and a complementary Cauchy-slice description (Thesis A') carries the same content in the orthogonal space-like direction. The horizon is not "the" boundary — it is a canonical boundary, distinguished as the coarsest encoding by being entirely null.

**Honest status.** Thesis B is now proved rigorously (Proposition 4.1) via Axiom 3's phase-advance rule and classical Lorentzian null-geometry. Theses A and A' remain structural sufficiency arguments grounded in framework commitments; their rigorous reconstruction theorems (inverse propagation for A, Cauchy evolution for A') are the central remaining open gaps.

## Statement

**Thesis A (Time-like holographic equivalence).** Let $A$ be an observer with projected continuous dual $M_A$ and coherence-domain boundary $\mathcal{B}_A \subset M_A$ ([Observer Definition](/derivations/axioms/observer-definition) Axiom 2). Let $\Sigma \subset M_A$ be any closed surface enclosing $\mathcal{B}_A$ and contained within $M_A$. Let $R_\Sigma(A, t_k)$ denote the sequenced record of all Type III carrier crossings of $\Sigma$ over A's history up to tick $t_k$. Then $R_\Sigma(A, t_k)$ determines $A$'s state at $t_k$.

**Thesis A' (Space-like holographic equivalence).** Let $\Xi \subset M_A$ be a Cauchy slice through the interior of $\mathcal{B}_A$ at $A$'s tick $t_k$ — a space-like 3-surface parameterizing $A$'s internal configuration at one instant. Let $K_\Xi(A, t_k)$ denote the instantaneous configuration of $A$'s constituents and their space-like correlations (entanglement amplitudes, Type I intrinsic symmetries, Type II coherence-preserving relations, internal Type III carriers across sub-observer boundaries). Then $K_\Xi(A, t_k)$ determines $A$'s state at $t_k$. Moreover, $R_\Sigma(A, t_k)$ and $K_\Xi(A, t_k)$ are related by a unitary map: each determines the other under $A$'s dynamics.

**Thesis B (Null portions carry integer content).** Let $\Sigma$ be any surface embedded in $M_A$, and let $\Sigma = \Sigma_{\text{null}} \sqcup \Sigma_{\text{non-null}}$ be the decomposition of $\Sigma$ into its null and non-null (timelike or spacelike) portions. The encoding of $A$'s state on $\Sigma_{\text{null}}$ reduces to integer/topological data alone — topological invariants (linking, framing), integer quantum numbers (CS levels, coherence quanta counts), Poisson event counts. The encoding on $\Sigma_{\text{non-null}}$ retains full continuous phase. The null horizon $\partial M_A$ is entirely null; its encoding is therefore entirely integer. The coherence-domain boundary $\mathcal{B}_A$ is timelike; its encoding is entirely continuous-phase. Mixed surfaces get mixed encodings.

## Derivation

### Step 1: Enclosing Surfaces and the Crossing Record

**Definition 1.1 (Enclosing surface).** *For an observer $A$ with coherence-domain boundary $\mathcal{B}_A$ in projected continuous dual $M_A$, an **enclosing surface** is a closed 2-surface $\Sigma \subset M_A$ such that $\mathcal{B}_A$ lies in the bounded interior of $\Sigma$. The family of enclosing surfaces ranges from $\mathcal{B}_A$ itself (tightest) to $\partial M_A$ (outermost, null).*

**Definition 1.2 (Sequenced crossing record).** *Let $\Sigma$ be an enclosing surface for $A$ and let $[\tau_0, t_k]$ be $A$'s proper-time history up to tick $t_k$. The **sequenced crossing record** $R_\Sigma(A, t_k)$ is the ordered collection of all Type III carriers that cross $\Sigma$ during $[\tau_0, t_k]$, each tagged with:*

1. *Its crossing time $\tau \in [\tau_0, t_k]$ (A's proper-time parameter),*
2. *Its spatial crossing location on $\Sigma$,*
3. *Its coherence content (magnitude + phase),*
4. *Its causal orientation (inward-to-$\mathcal{B}_A$ or outward-from-$\mathcal{B}_A$).*

*The record is sequenced: it preserves the temporal order in which crossings occur.*

**Remark 1.3 (Two limiting cases).** *On $\mathcal{B}_A$ itself, $R_{\mathcal{B}_A}$ is the full record of everything that has entered or left $A$'s coherence domain — the complete interaction history of the observer at its own skin. On $\partial M_A$, $R_{\partial M_A}$ is the record on the outermost causal boundary of $A$'s projection.*

**Remark 1.4 (Intermediate surfaces).** *Any surface $\Sigma$ with $\mathcal{B}_A \subsetneq \mathcal{B}_A \cup \text{int}(\Sigma) \subsetneq M_A$ is an intermediate enclosing surface. Such surfaces live in the bulk of $M_A$ between the coherence-domain boundary and the horizon. Physically these correspond to coarser causal surfaces than the skin but finer than the cosmic horizon — e.g., the boundary of a local environment, a laboratory wall, a room, a planet's gravity well.*

### Step 2: Time-Like Holographic Equivalence (Thesis A)

**Proposition 2.1 (Holographic equivalence).** *For any enclosing surface $\Sigma$ of $A$, the sequenced crossing record $R_\Sigma(A, t_k)$ is sufficient to determine $A$'s state at $t_k$.*

**Structural argument.** Three framework commitments combine:

**(i) Coherence conservation (Axiom 1).** $A$'s state at tick $t_k$ is fully determined by $A$'s intrinsic dynamics (Axiom 3 loop closure) plus all coherence exchanges $A$ has had with non-self. Coherence exchanges are Type III relations; by [Area Scaling](/derivations/holography/area-scaling) Proposition 1.2 (boundary mediation), every such exchange crosses $\mathcal{B}_A$.

**(ii) No-deleting theorem.** Information that enters $A$ cannot be destroyed ([Distinguishability Conservation](/derivations/thermodynamics-ext/distinguishability-conservation) Theorem 6.1). The record of past crossings is preserved in $A$'s evolved state.

**(iii) Containment and unitary evolution.** Any enclosing surface $\Sigma \supset \mathcal{B}_A$ has the property: every carrier that crosses $\mathcal{B}_A$ must first have crossed $\Sigma$ (by topological containment). The dynamics between $\Sigma$-crossing and $\mathcal{B}_A$-crossing is unitary (Born rule + coherence conservation) and hence invertible in principle. So $R_\Sigma$ determines $R_{\mathcal{B}_A}$ via the inverse of the bulk propagation from $\Sigma$ to $\mathcal{B}_A$. By (i) and (ii), $R_{\mathcal{B}_A}$ determines $A$'s state at $t_k$. Therefore $R_\Sigma$ determines $A$'s state at $t_k$. $\square$

**Remark 2.2 (Not a practical reconstruction).** *Proposition 2.1 is a structural claim about what data is sufficient, not a constructive recipe for reconstruction. The inverse propagation from $\Sigma$ to $\mathcal{B}_A$ requires solving a detailed backward dynamics — generally as hard as solving the forward problem. The proposition asserts that the information is not lost, not that it is cheap to recover.*

**Remark 2.3 (Correspondence with the holographic bound).** *[Area Scaling](/derivations/holography/area-scaling) bounds the mode count on $\Sigma$ by $\text{Area}(\Sigma)/(4\ell_P^2)$. Proposition 2.1 is the qualitative partner of the quantitative bound: not only is the count bounded, but the data on $\Sigma$ is sufficient to reconstruct the state.*

### Step 3: Space-Like Holographic Equivalence (Thesis A')

**Proposition 3.1 (Space-like holographic equivalence).** *For a Cauchy slice $\Xi$ through the interior of $A$'s coherence domain at tick $t_k$, the instantaneous space-like configuration $K_\Xi(A, t_k)$ — the positions, phases, and space-like correlations of $A$'s constituents at $t_k$, together with all Type I and Type II dynamics and internal Type III relations — determines $A$'s state at $t_k$.*

**Structural argument.** Three framework commitments combine:

**(i) Cauchy-slice completeness.** Every Cauchy slice in $M_A$ contains the full coherence state on it, by the temporal completeness of antichains in the DAG ([Cyclic Cosmology](/derivations/cosmology/cyclic-cosmology) Proposition 5.4). A Cauchy slice is the space-like analog of "the state at a moment": it intersects every inextendible causal curve exactly once, and therefore captures every piece of information at its parameter value.

**(ii) Entanglement is relational coherence.** The space-like correlations among $A$'s constituents are the relational coherence between them ([Entanglement](/derivations/quantum/entanglement) Theorem 2.1). The Cauchy slice carries these correlations as its entanglement structure.

**(iii) Hilbert-space wavefunction at an instant.** The Born rule derivation ([Born Rule](/derivations/quantum/born-rule) Theorem 6c.1) forces $A$'s state to live in Hilbert space; the wavefunction at a single instant fully determines the state. $K_\Xi(A, t_k)$ is the framework's expression of that wavefunction — it is the instantaneous complex-valued specification of $A$'s configuration. $\square$

**Proposition 3.2 (Unitary equivalence of A and A').** *The time-like record $R_\Sigma(A, t_k)$ of Thesis A and the space-like configuration $K_\Xi(A, t_k)$ of Thesis A' are related by a unitary map: each determines the other under $A$'s evolution.*

**Structural argument.** The evolution from a Cauchy slice $\Xi_0$ at an earlier tick to $\Xi_k$ at tick $t_k$ is unitary (Born rule + coherence conservation). The sequenced record $R_\Sigma(A, t_k)$ is the history of boundary crossings accumulated along that evolution; given $\Xi_0$, the record determines the evolution trajectory and hence $\Xi_k$. Conversely, given $\Xi_k$, the unitary structure allows reconstruction of the past Cauchy slices and therefore the historical record of boundary crossings. Both directions of the equivalence are invertible in principle. $\square$

**Remark 3.3 (Orthogonal directions through the same 4-manifold).** *$R_\Sigma$ and $K_\Xi$ are $3$-dimensional slices through the $4$-dimensional $M_A$: $R_\Sigma$ runs along the temporal direction on an enclosing (spatial/null) 2-surface; $K_\Xi$ is a single space-like 3-surface at a fixed instant. Both carry the full state; they live in orthogonal directions of $M_A$. Thesis A' is the natural space-like dual of Thesis A.*

**Remark 3.4 (Vacuous for minimal observers, non-trivial for composites).** *A minimal observer has no internal space-like structure — its configuration on any Cauchy slice is a single phase value on $S^1$. Thesis A' becomes non-trivial once an observer has level-lower constituents. For a macro observer the space-like configuration at $t_k$ is the full instantaneous arrangement of all its cells, atoms, and their entanglement — a rich, continuous, complex-valued description containing everything that makes the observer what it is at that moment.*

### Step 4: Null Portions Force Phase Discard (Thesis B)

**Proposition 4.1 (Null portions carry integer content).** *Let $\Sigma$ be any embedded hypersurface in $M_A$, with causal decomposition $\Sigma = \Sigma_{\text{null}} \sqcup \Sigma_{\text{non-null}}$. Let $\varphi: M_A \to U(1)$ be the U(1) phase field satisfying $d\varphi/d\tau = \omega$ along every timelike worldline, where $\tau$ is proper time and $\omega = 2\pi/T_A$ (Axiom 3). Then:*

1. *The phase field restricted to $\Sigma_{\text{null}}$ is constant along each null generator of $\Sigma_{\text{null}}$. The effective phase-like degrees of freedom on $\Sigma_{\text{null}}$ quotient to integer topological invariants — winding numbers of null generators, linking numbers with transverse worldlines, and framings of the normal bundle — carrying no continuous $U(1)$ content.*
2. *The phase field restricted to $\Sigma_{\text{non-null}}$ varies continuously along every tangent direction; the encoding retains full $U(1)$-valued data.*

**Proof.**

*Part 1 (null case).* Let $p \in \Sigma_{\text{null}}$ and let $k^\mu \in T_p\Sigma$ be a null tangent vector: $g_{\mu\nu} k^\mu k^\nu = 0$. For an infinitesimal displacement $\epsilon k^\mu$ along the null direction, the induced proper-time interval is

$$d\tau = \sqrt{-g_{\mu\nu}\, (\epsilon k^\mu)(\epsilon k^\nu)} = |\epsilon|\sqrt{-g_{\mu\nu} k^\mu k^\nu} = 0.$$

By Axiom 3, $d\varphi = \omega\, d\tau$ along any worldline segment parameterized by proper time. Applied to the null displacement: $d\varphi(\epsilon k^\mu) = \omega\cdot 0 = 0$. The phase is therefore constant along any null generator of $\Sigma_{\text{null}}$.

A null hypersurface $\Sigma_{\text{null}}$ carries a distinguished null direction field (its unique lightlike tangent, up to rescaling), and the integral curves of this field — the null generators — foliate $\Sigma_{\text{null}}$ [Galloway 2014; Chruściel–Galloway 2019]. The phase field, being constant along each generator, descends to a function on the quotient space $\Sigma_{\text{null}} / \sim_{\text{gen}}$ obtained by collapsing each null generator to a point.

On a closed null hypersurface (e.g., the horizon $\partial M_A \cong S^2 \times S^1$ of [Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Proposition 3.1), null generators either close into loops or connect the past and future boundaries of $\Sigma_{\text{null}}$. The surviving phase-like data — what distinguishes one generator from another — is captured by the holonomy of $\varphi$ around closed loops in $\Sigma_{\text{null}} / \sim_{\text{gen}}$ and the linking / winding / framing of generators with neighboring worldlines. These holonomy data lie in $\pi_1(U(1)) = \mathbb{Z}$: integer-valued invariants. Specifically:

- *Winding number of a closed null generator.* An integer $w \in \mathbb{Z}$.
- *Linking number with a transverse worldline.* An integer $\text{Lk} \in \mathbb{Z}$ ([Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap) Proposition 1.3).
- *Framing of a loop in its normal bundle.* An integer framing number from the $U(1)$ structure on the oriented rank-2 normal bundle ([Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap) Proposition 1.3, Observation 1.3c).

All continuous $U(1)$ content is quotiented out by the null-generator foliation; only the discrete topological holonomy data survive.

*Part 2 (non-null case).* Let $p \in \Sigma_{\text{non-null}}$ and let $v^\mu \in T_p\Sigma$ be a tangent vector that is either spacelike ($g_{\mu\nu} v^\mu v^\nu > 0$) or timelike ($g_{\mu\nu} v^\mu v^\nu < 0$). The proper-time interval along $\epsilon v^\mu$ is

$$d\tau = |\epsilon|\sqrt{|g_{\mu\nu} v^\mu v^\nu|} \neq 0.$$

By Axiom 3, $d\varphi = \omega\, d\tau \neq 0$ along this direction. The phase field varies smoothly and non-trivially along any non-null tangent direction of $\Sigma_{\text{non-null}}$.

Since a non-null hypersurface admits a non-degenerate induced metric (Riemannian if spacelike, Lorentzian of lower dimension if timelike), the phase field $\varphi|_{\Sigma_{\text{non-null}}}$ is a smooth $U(1)$-valued map on a smooth manifold with non-degenerate intrinsic geometry. No null-generator quotient applies; the full continuous $U(1)$ target space is preserved pointwise. $\square$

**Remark 4.1a (What the proof uses).** *The argument requires: (a) the framework's commitment that the U(1) phase advances with proper time (Axiom 3); (b) the standard Lorentzian-geometry fact that null hypersurfaces are foliated by null generators [Galloway 2014; Wald 1984, §9.4]; (c) the homotopy-theoretic identification $\pi_1(U(1)) = \mathbb{Z}$. Each is a classical result. The only framework-specific input is the phase-advance rate $\omega$, which is the observer-defining frequency of Axiom 3.*

**Remark 4.1b (Consistency with Gibbons–Hawking thermality).** *An independent check: every observer's horizon carries a thermal spectrum at $T_{\text{GH}}^{(A)} = \hbar/(2\pi k_B L_A)$ ([Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Proposition 3.2; [Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell)). A thermal state is a phase-averaged distribution over the U(1) orbit — it carries integer mode occupation numbers but no continuous phase coherence. Thermality on the horizon is therefore the thermodynamic face of Part 1: phase is quotiented out by the null-generator structure, leaving only occupation statistics. Timelike and spacelike surfaces are not thermal from their intrinsic geometry — consistent with Part 2.*

**Remark 4.1c (Consistency with existing integer horizon descriptions).** *A second independent check: every prior framework derivation that describes horizon content does so in integer / topological terms — linking numbers ([Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap) Proposition 1.5), Chern–Simons levels ([Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap) Propositions 2.4, 2.5), framings ([Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap) Proposition 1.3), holographic mode counts $A/(4\ell_P^2)$ and Poisson event statistics ([Causal Set Statistics](/derivations/holography/causal-set-statistics)). None has required continuous-phase horizon data. Proposition 4.1 Part 1 is the structural reason: the continuous phase is eliminated by the null-generator foliation, so only the integer invariants could ever survive.*

**Corollary 4.2 (Distinguished status of $\partial M_A$).** *The null horizon $\partial M_A$ is entirely null by construction ([Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Proposition 2.2), so its entire encoding is integer. $\partial M_A$ is not uniquely phase-discarding as a surface category (any null piece of any surface is equally phase-discarding), but it is the **only** enclosing surface of $A$ that is entirely null — and therefore the only enclosing surface whose full encoding is integer. The coherence-domain boundary $\mathcal{B}_A$ is entirely timelike; any intermediate surface is generically mixed; only $\partial M_A$ is entirely null.*

**Remark 4.3 (Mixed surfaces have mixed encodings).** *An enclosing surface with a null portion (e.g., a "stretched horizon" that extends just outside $\partial M_A$ and joins $\mathcal{B}_A$ via a timelike tube) would have its null portion integer-encoded and its timelike portion continuous-encoded. The phase-discard line runs along the surface's causal character, not along its topological role as "boundary vs interior." This refinement was implicit in earlier framework commitments; Proposition 4.1 makes it explicit.*

**Remark 4.4 (Not a loss of information).** *By Thesis A, the horizon encoding is still sufficient to determine $A$'s state. Thesis B does not contradict this — it specifies the **form** of the encoding on each piece of a surface (integer where null, continuous where non-null) while preserving sufficiency. The observer's state, expressed in horizon variables, is a collection of discrete invariants that combine to reconstruct the full continuous-phase description held at $\mathcal{B}_A$ or on any Cauchy slice through the interior.*

### Step 5: The Horizon as Canonical Holographic Surface

**Corollary 5.1 (Horizon as canonical holographic surface).** *The null horizon $\partial M_A$ is the **canonical coarsest holographic surface** for observer $A$: among all enclosing surfaces that suffice to encode $A$'s state (Thesis A), it is the only one whose encoding is entirely integer/topological (Corollary 4.2).*

**Interpretation.** All enclosing surfaces are sufficient; the horizon is *simplest*. Just as a geometry admits many coordinate systems that describe the same structure but specific coordinates diagonalize that structure, the enclosing-surface family admits many holographic descriptions that encode the same observer state but the null horizon diagonalizes the integer content. The horizon is the "rational normal form" of the observer's holographic encoding.

**Remark 5.2 (Why the framework's horizon derivations have only ever needed integers).** *This corollary explains a pattern visible across existing derivations: whenever a framework derivation describes horizon content (holographic bound, linking numbers, CS levels, framing, causal-set Poisson statistics, coherence quanta), the description is integer. No derivation has needed continuous phase at the horizon. Under Corollary 5.1 this is not coincidence but structural necessity — the horizon description is inherently discrete because it is entirely null.*

### Step 6: The Three-Region Decomposition as a Phase-Resolution Ladder

The projected continuous dual $M_A$ decomposes into three regions distinguished by their enclosing-surface role ([Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Step 1, [Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Step 2):

1. **Interior of $\mathcal{B}_A$** (the "self" region): contains level-lower constituents of $A$ forming its internal coherence loops.
2. **Between $\mathcal{B}_A$ and $\partial M_A$** (the "environment" region): bulk causally accessible to $A$ but not part of $A$'s self-maintenance.
3. **The horizon $\partial M_A$** itself: null 2-sphere at proper distance $c T_A / 2$ from $\gamma_A$.

**Proposition 6.1 (Phase-resolution ladder).** *The three-region decomposition is a phase-resolution ladder for the holographic encoding of $A$'s state. Enclosing surfaces drawn at different radial depths carry different phase-resolution content:*

- *$\mathcal{B}_A$ (tightest enclosing surface, entirely timelike): **finest resolution**. The crossing record carries full continuous complex-valued data — phase, temporal sequence, coherence magnitude. This is the raw interaction history at the observer's skin.*
- *Intermediate surfaces in region 2: **partial coarse-graining**. Some phase averaging from propagation through the bulk between surface and $\mathcal{B}_A$; some topological content already manifest.*
- *$\partial M_A$ (outermost enclosing surface, entirely null): **coarsest resolution**. Pure integer/topological content (Corollary 4.2). No continuous phase.*

*Cauchy slices through the interior (Thesis A') give a complementary family of complete descriptions in the orthogonal direction — space-like rather than time-like — carrying continuous phase content throughout (since Cauchy slices are spacelike).*

**Structural argument.** Moving from an enclosing surface at radius $r_1$ to another at radius $r_2 > r_1$ corresponds to propagating the crossing record outward through the bulk by proper distance $r_2 - r_1$. This propagation is unitary but decohering in the sense that continuous phase content at $r_1$ is packaged into coarser variables at $r_2$. As the surface approaches the null horizon, its null portion grows to fill the whole surface, and by Proposition 4.1 the encoding becomes entirely integer. At the horizon, this coarsening is complete. $\square$

**Remark 6.2 (Analogy to Wilson coarse-graining).** *The phase-resolution ladder is structurally analogous to Wilsonian renormalization group coarse-graining, where fine-grained high-momentum modes are integrated out as one moves from short to long distance scales. Here the integration is radial within the observer's projection, and the "modes" are crossing-event phases. A quantitative dictionary between the two may be derivable; see Open Gap 3.*

### Step 7: Level Transitions Propagate Only Integer Data

**Corollary 7.1 (Inter-level integer restriction).** *Bootstrap composition $\mathcal{R}: \mathbf{Obs}_n \times \mathbf{Obs}_n \to \mathbf{Obs}_{n+1}$ that builds level-$(n{+}1)$ observers from level-$n$ constituents operates only on integer/topological data across level boundaries. Continuous phase information does not propagate from level $n$ to level $n{+}1$.*

**Structural argument.** Level-$n$ observers' contributions to level-$(n{+}1)$ composites enter through relations that cross the level-$(n{+}1)$ observer's coherence-domain boundary $\mathcal{B}_{n+1}$ and, at asymptotic distance, its horizon $\partial M_{n+1}$. By Proposition 4.1 (Thesis B), the encoding on the null portion $\partial M_{n+1}$ is integer only. Therefore the level-$n$ contributions that the level-$(n{+}1)$ observer has access to through its own horizon are integer-only. Continuous phase content internal to a level-$n$ observer's own coherence domain does not cross to the level-$(n{+}1)$ level — it is phase-discarded at each inter-level horizon traversal. $\square$

**Remark 7.2 (Consistency with existing framework commitments).** *This corollary makes coherent a pattern already present across the framework's level-structured derivations:*

- *Coherence quantum $\hbar\omega_0$ is integer-counted at every level ([Bootstrap](/derivations/interactions/bootstrap) Corollary 2.3).*
- *Framings (integer) survive cross-level, not continuous almost-complex-structure parameters ([Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap) Observations 1.3c).*
- *Division algebra dimensions (2, 4, 8) are integer structural data propagating up the Cayley–Dickson tower ([Bootstrap Division Algebras](/derivations/interactions/bootstrap-division-algebras)).*
- *Three generations, three interaction types, three algebraic transitions: integer enumerations ([Three Generations](/derivations/particles/three-generations), [Three Interaction Types](/derivations/interactions/three-types)).*
- *Chern–Simons level ratios $k_1 : k_2 : k_3 = 4 : 2 : 1$ are integer and constrain cross-level gauge coupling ([Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap) Proposition 2.4).*

*In each case, the data that crosses a level boundary is integer. Corollary 6.1 says this is structural, not coincidental — only integer data can cross a level boundary, because the inter-level surface is null and phase-decohered.*

**Remark 6.3 (Continuous dynamics is per-level).** *The complementary reading of Corollary 6.1: continuous (complex-valued, phase-carrying) dynamics lives within a single observer's coherence domain. Field theory, smooth evolution, continuous phase evolution — all happen inside $\mathcal{B}_A$ for an observer at a fixed bootstrap level. Cross-level coupling is categorically different: it is combinatorial, topological, integer-valued. This clean separation rescues the framework's discrete-continuous duality from awkwardness: per-level continuous, cross-level discrete, with the horizon as the interface.*

### Step 8: The Obstruction Class as a Combinatorial Invariant

**Corollary 8.1 (Obstruction class is combinatorial).** *The gluing obstruction of the observer-indexed spacetime sheaf ([Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Step 6) is a combinatorial/topological invariant — specifically, the failure of integer horizon data to piece together consistently across cross-level phase-discard transitions.*

**Structural argument.** The obstruction class measures how the observer-indexed family $\{M_A\}$ fails to glue into a single manifold. Gluing is a compatibility condition on restriction maps between projections of observers related by shared Type III relations. By Corollary 7.1, the data that must be compatible on cross-level restriction maps is integer (the level boundary is a horizon, phase-discarded). Therefore the obstruction class is constructed from integer data and is itself a combinatorial invariant — not a continuous-parameter fine-tuning. This makes the obstruction class a candidate for explicit computation using combinatorial/topological tools (simplicial cohomology on the observer category, tensor-network renormalization invariants, K-theoretic classes on the bootstrap tower). $\square$

**Remark 8.2 (The cosmological constant problem reframed, again).** *The $\Lambda$ hierarchy — framed in [Cosmological Constant](/derivations/cosmology/cosmological-constant) and [Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) as the obstruction class of the observer-indexed spacetime sheaf — now acquires a specifically combinatorial flavor. Not a continuous parameter to be tuned, not a cohomology class in an unspecified category, but a **combinatorial invariant computable from the integer structure of horizon-level coarse-graining**. This sharpens the computational target: the $\Lambda$ hierarchy is the combinatorial signature of repeated phase-discard across many bootstrap levels.*

## Consequences

**C1. Resolution of the boundary ambiguity.** The framework's use of "boundary" for both $\mathcal{B}_A$ and $\partial M_A$ is not sloppy; it reflects that both are enclosing surfaces for the same observer, related by the phase-resolution ladder. They encode the same state at different resolutions.

**C2. Shared horizon, private identity.** Same-level observers have nearly identical horizons ([Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Consequence 1) and therefore nearly identical integer horizon data. The content they agree on (the "shared facts" of cosmic observation) is this common horizon data. Observer-specific identity content lives in the fine-resolution $\mathcal{B}_A$-level data — full continuous phase — where each observer's distinct interaction history gives a distinct record. Private identity is high-resolution; shared cosmos is low-resolution.

**C3. The bootstrap hierarchy as holographic renormalization.** Going up a bootstrap level is phase-discarding coarse-graining. Going down is refinement. The geometry functor $G: \mathbf{Obs} \to \mathbf{Geom}$ has a natural action under this reading: coarse-graining maps level-$n$ holographic descriptions to level-$(n{+}1)$ ones. The bootstrap map $\mathcal{R}$ is holographic renormalization group flow.

**C4. Per-level continuous, cross-level discrete.** Field theory, continuous dynamics, smooth geometric structures are natural *within* a level. Bootstrap composition, integer enumerations, topological invariants are natural *across* levels. The framework's two-sidedness is cleanly organized by the phase-resolution ladder.

**C5. Thermal horizons are a structural feature.** Gibbons–Hawking temperature for each observer's horizon is not a separate postulate — it is the Thesis B phase-decoherence at the null surface expressed thermodynamically.

**C6. Time-space duality of the holographic encoding.** Thesis A and Thesis A' give two complete descriptions of $A$'s state: the time-like accumulated boundary record and the space-like instantaneous interior configuration. Neither is prior; they are unitarily related. An observer's state is describable either as "what has crossed this enclosing surface over its history" or as "what is configured inside it right now." The framework's two descriptions of physics — processes over time and states at an instant — are the natural projections of the single 4-dimensional holographic structure onto its orthogonal axes.

## Rigor Assessment

**Rigorous (Thesis B):**
- **Proposition 4.1 (null portions classification)** is proved rigorously in Step 4. The proof uses: (a) Axiom 3's commitment $d\varphi/d\tau = \omega$; (b) the classical fact that null hypersurfaces are foliated by null generators; (c) $\pi_1(U(1)) = \mathbb{Z}$. The result — integer-only encoding on null portions, continuous $U(1)$ encoding on non-null portions — is a theorem given the framework's Axiom 3 commitment and standard Lorentzian geometry.
- **Corollary 4.2 (distinguished status of $\partial M_A$)**: direct application of Proposition 4.1 to the entirely-null horizon.
- **Remarks 4.1b, 4.1c** (Gibbons–Hawking thermality, existing integer horizon descriptions): two independent consistency checks on the rigorous result.

**Structurally grounded (from existing framework results):**
- The three framework commitments supporting Thesis A (coherence conservation, no-deleting, boundary mediation) are individually rigorous.
- The three framework commitments supporting Thesis A' (Cauchy-slice completeness, entanglement-as-relational-coherence, Hilbert-space wavefunction uniqueness) are individually rigorous.

**Conjectural (theses pending rigorous proof):**
- Thesis A (Proposition 2.1): the structural argument establishes sufficiency of the sequenced crossing record but does not construct the reconstruction. A rigorous proof requires the inverse-propagation problem (Open Gap 1).
- Thesis A' (Proposition 3.1): analogous sufficiency argument, with rigorous reconstruction again pending (Open Gap 1 covers both).
- Thesis A / A' unitary equivalence (Proposition 3.2): structurally forced by Born rule + coherence conservation; a rigorous construction of the equivalence map is open (Open Gap 2).

**Corollaries:**
- Corollary 4.2 (distinguished status of $\partial M_A$): follows from Proposition 4.1 applied to $\partial M_A$'s entirely-null causal character.
- Corollary 5.1 (horizon as canonical holographic surface): follows from Theses A and Corollary 4.2.
- Proposition 6.1 (three-region phase-resolution ladder): structural; makes the phase-decoherence gradient explicit.
- Corollary 7.1 (inter-level integer restriction): follows from Corollary 5.1 applied across level boundaries.
- Corollary 8.1 (obstruction class is combinatorial): follows from Corollary 7.1 applied to the observer-indexed sheaf.

## Open Gaps

1. **Rigorous reconstruction theorems (Theses A and A').** Prove that for any enclosing surface $\Sigma \subset M_A$, the sequenced crossing record $R_\Sigma(A, t_k)$ reconstructs $A$'s state at $t_k$; and for any Cauchy slice $\Xi$, the configuration $K_\Xi(A, t_k)$ reconstructs the state. Requires formalizing the inverse propagation (for Thesis A) and Cauchy-slice evolution (for Thesis A') as explicit unitary maps. Tools: bulk reconstruction in AdS/CFT, Cauchy-problem well-posedness in Lorentzian geometry, or a direct no-deleting argument. *Difficulty: HARD.*

2. **Unitary equivalence of time-like and space-like descriptions.** Construct the explicit unitary map $U: R_\Sigma \leftrightarrow K_\Xi$ identifying time-like and space-like holographic encodings. This is the framework's version of state-path-integral duality in QFT. *Difficulty: HARD.*

3. ~~**Classification of phase behavior by causal character.**~~ *Closed in this revision.* Proposition 4.1 is now proved rigorously using Axiom 3 + classical Lorentzian null-geometry. What remains is a quantitative extension: for a mixed surface with both null and non-null portions, characterize the smoothness class of the phase field at the causal-character transition locus (where null portions meet non-null portions). This is a local PDE regularity question rather than a structural one. *Difficulty: MODERATE.*

4. **Quantitative coarse-graining maps.** The phase-resolution ladder (Proposition 6.1) is qualitative. A quantitative account — what information is lost as an enclosing surface moves outward, and how integer invariants accumulate — would formalize the "holographic renormalization" reading. Likely tools: operator algebraic entropy, entanglement wedge flows, tensor-network coarse-graining. *Difficulty: HARD.*

5. **Formal statement of inter-level integer restriction.** Corollary 7.1 asserts that bootstrap composition operates only on integer data across levels. Formalizing this requires specifying the integer-only data type (perhaps a category of integer-augmented observers) and showing the bootstrap map $\mathcal{R}$ factors through this category at every cross-level edge. *Difficulty: MODERATE.*

6. **Combinatorial obstruction class computation.** Corollary 8.1 identifies the obstruction class as combinatorial. A computation: specify the simplicial / tensor-network / K-theoretic structure on the observer category, identify the cocycle, compute the invariant, match to the observed $\Lambda$ hierarchy. Connects directly to [Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Open Gap 4 and [Cosmological Constant](/derivations/cosmology/cosmological-constant) Open Gap 2. *Difficulty: HARD.*

7. **Shared-horizon theorem for same-level observers.** State and prove: for two level-$n$ observers $A, B$ at spatial separation $d \ll L_n$ within each other's bulk, the horizon integer data $R_{\partial M_A}$ and $R_{\partial M_B}$ agree to order $(d/L_n)^2$. Corollary: observer identity (the high-resolution $\mathcal{B}_A$-level content) has disagreement size $O(d/L_n)^2$ relative to the full record. *Difficulty: MODERATE.*

8. **Connection to Gibbons–Hawking thermodynamics.** Thesis B identifies horizon thermality as phase-decoherence on a null surface. A derivation that produces the Gibbons–Hawking temperature $T_{\text{GH}}^{(A)} = \hbar/(2\pi k_B L_A)$ directly from the phase-discard structure would tie this derivation to [Hawking Radiation](/derivations/holography/hawking-radiation) and close [Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Open Gap 5. *Difficulty: MODERATE.*
