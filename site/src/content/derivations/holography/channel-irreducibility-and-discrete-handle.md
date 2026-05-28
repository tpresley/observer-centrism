---
title: "Channel Irreducibility and the Discrete Handle"
status: "draft"
dependsOn: ["axioms/coherence-conservation", "interactions/relational-invariants", "holography/causal-set-statistics", "foundation/substrate-noise-and-profile-coupling"]
enablesDerivation: ["holography/er-epr"]
tags: ["holography", "topology", "causal-set", "wormhole", "irreducibility", "ER-EPR"]
summary: "Strict irreducibility of a coherence channel between two observers (Relational Invariants Theorem 4.1) forbids the channel's causal-set elements from having ambient neighbors except at the observer endpoints, by an embedding-implies-decoherence argument. The resulting causally-insulated channel forces a spatial handle in the continuum sprinkling limit, via the Major-Rideout-Surya thickened-antichain construction together with a flat-space-exclusion argument that avoids the unproven Hauptvermutung. This is the lemma that upgrades the ER=EPR derivation's Theorem 3.2 Step 2 from coherence-flux-tube to bona-fide Einstein-Rosen bridge in non-AdS settings."
rigorLevel: "semi-formal"
lastUpdated: 2026-05-27
---

## Overview

This lemma closes the load-bearing open gap (Open Gap 3) in the non-AdS extension of the [ER=EPR derivation](/derivations/holography/er-epr). The gap was: Theorem 3.2 Step 2 establishes that the coherence channel $\gamma_{12}$ is irreducibly connected and non-pinching, but does not establish that the ambient Cauchy slice acquires a non-contractible 1-cycle (a spatial handle) as a result. A flux tube embedded in flat $\mathbb{R}^3$ satisfies the same connectivity properties without forcing any handle. Closing the gap means showing that the framework's irreducibility property forces the handle reading, ruling out the flux-tube interpretation.

**The argument has four logical steps:**

1. **Define ambient embedding** of a sub-causal-set: every element of the sub-causal-set has a causal-set neighbor outside the sub-causal-set within a Planck-scale region.

2. **Embedding implies decoherence.** If the channel $\gamma_{12}$ is ambient-embedded, then ambient causal-set elements adjacent to channel elements participate in relational invariants with them, siphoning coherence from $I_{12}$ via Coherence Conservation. This is the framework-internal definition of decoherence.

3. **Irreducibility implies non-embedding.** Strict irreducibility ([ER=EPR](/derivations/holography/er-epr) Proposition 1.2c, derived from [Relational Invariants](/derivations/interactions/relational-invariants) Theorem 4.1) requires $\mathcal{C}(I_{12})$ to be fully conserved on every Cauchy slice intersecting $\gamma_{12}$, which is incompatible with any positive coherence drain to ambient. By contraposition of Step 2, $\gamma_{12}$ is not ambient-embedded — its elements are causally insulated from ambient except at the observer-region endpoints.

4. **Non-embedding lifts to handle topology in the continuum.** The argument splits into existence, exclusion, and the explicit antichain construction the Major–Rideout–Surya machinery requires:
   - **(4a) Existence.** An explicit globally-hyperbolic wormhole manifold (e.g., the eternal Schwarzschild bridge or a Morris–Thorne traversable wormhole with appropriate matter content) has spatial slices with $H_1 = \mathbb{Z}$ (a handle), and admits sprinklings whose combinatorial structure matches the framework's (ambient ∪ channel) pattern. By [Major–Rideout–Surya, 2007] (Theorem 2 and Corollary 2; see [Causal Set Statistics](/derivations/holography/causal-set-statistics)), the thickened-antichain construction recovers the wormhole's spatial homology — including $H_1$ — from this causal set.
   - **(4b) Exclusion.** A faithful embedding of (ambient ∪ channel) into flat $\mathbb{R}^3 \times \mathbb{R}$ requires the channel elements to participate in the Poisson neighbor statistics of flat-space sprinkling everywhere along the channel's length. The non-embedding result of Step 3 forbids this. Therefore flat space is excluded as a continuum approximation of (ambient ∪ channel).
   - **(4c) Spanning antichain construction (Theorem 4.7).** The Major–Rideout–Surya construction invoked in (4a) requires an inextendible antichain spanning both regions, with cardinality $N_{\min}$ on the channel side. The smooth-Cauchy-hypersurface theorem of [Bernal–Sánchez, 2003] supplies this: extend the bottleneck 2-surface to a Cauchy hypersurface of $(M_W, g_W)$, sprinkle it via the standard thickened-antichain construction, and the result has all three required properties (maximality, ambient-restriction inextendibility, channel restriction = bottleneck cut). The high-probability nature of the construction is the standard CST caveat from [Major–Rideout–Surya, 2007], not a derivation-specific gap.

Together, Steps 4a, 4b, and 4c establish: the handle interpretation is consistent (4a + 4c), the flux-tube interpretation is excluded (4b). This is the content needed for the [ER=EPR](/derivations/holography/er-epr) argument. Hauptvermutung uniqueness (which remains conjectural in causal-set theory) would upgrade this to "the handle is the unique continuum class," but the argument does not require the upgrade.

**Status: draft, on track for provisional.** Steps 1–3 are framework-internal logic and are stated with full proofs below. Steps 4a (existence) and 4c (spanning antichain) cite published results, with the framework-internal portion being the consistency of the embedding and the bottleneck saturation. Step 4b (exclusion) follows from Step 3 plus the definition of faithful embedding. The principal remaining gap is the *quantitative* matching of channel element density to a Morris–Thorne sprinkling — this is the kind of construction that would benefit from an explicit numerical simulation in the spirit of [Cunningham–Surya, 2019] on dimensionally-restricted CST with non-trivial spatial topology. Once Gap 1 closes, this lemma promotes to `provisional`, which in turn promotes [ER=EPR](/derivations/holography/er-epr) Theorem 3.2 to full derived rigor in non-AdS settings.

**Note on novelty.** The chain of reasoning "operationally-defined irreducibility of a sub-causal-set ⇒ non-embedding in ambient ⇒ handle topology in the continuum sprinkling limit" appears to be new. To the best of this derivation's literature scout (2026-05-27), no published CST result establishes this implication. The framework's contribution is the irreducibility-to-non-embedding link (Steps 2–3); the non-embedding-to-handle link (Step 4) is novel but constructible from existing CST machinery (Major–Rideout–Surya + topology-change literature).

## Statement

**Lemma (Channel Handle).** *Let $\mathcal{O}_1, \mathcal{O}_2$ be two spatially separated observers sharing a coherence channel $\gamma_{12} \subset \mathcal{C}$ generated by a relational invariant $I_{12}$ ([ER=EPR](/derivations/holography/er-epr) Definition 1.1). Assume:*

*(i) **Strict irreducibility:** $\gamma_{12}$ satisfies [ER=EPR](/derivations/holography/er-epr) Proposition 1.2c — it cannot be decomposed into channels via any intermediary observer.*

*(ii) **Manifold-like ambient:** The ambient causal set $\mathcal{C} \setminus \gamma_{12}$ faithfully embeds into a globally hyperbolic spacetime $(M_{\text{amb}}, g_{\text{amb}})$ at sprinkling density $V_c^{-1}$ satisfying the scale separation $V_c \ll v_0 \ll v \ll \tilde{v}$ of [Major–Rideout–Surya, 2007].*

*Then the combined causal set $\mathcal{C} = (\mathcal{C} \setminus \gamma_{12}) \cup \gamma_{12}$ has continuum approximation $(M, g)$ whose Cauchy slice $\Sigma$ satisfies $H_1(\Sigma; \mathbb{Z}) \neq 0$. In particular, there exists a non-contractible loop on $\Sigma$ that traverses the channel in one direction and ambient space in the other.*

*Furthermore, $(M, g)$ does **not** faithfully embed into $(M_{\text{amb}}, g_{\text{amb}})$ at the same density. The flux-tube reading — $\gamma_{12}$ as a localized coherence density region within the ambient manifold — is excluded.*

## 1. Channel-Ambient Embedding

**Definition 1.1 (Causal-set neighbor).** Two distinct elements $x, y \in \mathcal{C}$ are **causally adjacent** if they are causally related ($x \prec y$ or $y \prec x$) and the Alexandrov interval between them has spacetime volume $\leq V_c$, the discreteness scale.

**Remark.** This is the standard CST definition of a "link" — an irreducible causal relation not factored through any intermediate element. Equivalently, $x$ and $y$ are causally adjacent iff there is no $z$ with $x \prec z \prec y$ (or $y \prec z \prec x$).

**Definition 1.2 (Ambient embedding of a sub-causal-set).** A sub-causal-set $X \subset \mathcal{C}$ is **ambient-embedded** if every element $x \in X$ has at least one causal-set neighbor in $\mathcal{C} \setminus X$ that lies in the Planck-ball causal-future or causal-past of $x$ (i.e., in a region of Alexandrov volume $\leq V_c$ from $x$, in either causal direction).

**Equivalently:** $X$ is ambient-embedded iff the *boundary set* $\partial X \equiv \{(x, y) : x \in X, y \in \mathcal{C} \setminus X, x \text{ and } y \text{ are causally adjacent}\}$ projects onto every element of $X$.

**Definition 1.3 (Endpoint regions).** The observer neighborhoods $\mathcal{N}_1, \mathcal{N}_2$ are the causal-set elements corresponding (in the continuum approximation) to small open regions of $M_{\text{amb}}$ around the two observers' worldlines, of spatial extent much larger than the discreteness scale.

**Definition 1.4 (Endpoint-only embedding).** A channel $\gamma_{12}$ is **endpoint-only embedded** if all elements of $\partial \gamma_{12}$ (boundary pairs from Definition 1.2) project from $\gamma_{12}$ into $\mathcal{N}_1 \cup \mathcal{N}_2$ — i.e., the only ambient neighbors of channel elements are within the two observer regions.

**Proposition 1.5 (Mutually exclusive).** A channel $\gamma_{12}$ that is endpoint-only embedded is *not* ambient-embedded (in the sense of Definition 1.2), since elements of $\gamma_{12}$ in the channel interior have no ambient neighbors at all (their only neighbors are other channel elements). Conversely, a channel that is ambient-embedded has interior elements with ambient neighbors, hence is not endpoint-only embedded.

*Proof.* Immediate from Definitions 1.2 and 1.4: ambient embedding requires *every* element of the channel to have ambient neighbors; endpoint-only embedding requires *no* interior element to have ambient neighbors. These are negations restricted to the channel interior. $\square$

## 2. Embedding Implies Decoherence

**Proposition 2.1 (Adjacent ambient elements form relational invariants).** Let $x \in \gamma_{12}$ be an interior channel element (not in $\mathcal{N}_1 \cup \mathcal{N}_2$), and let $y \in \mathcal{C} \setminus \gamma_{12}$ be causally adjacent to $x$ (in the sense of Definition 1.1). Then there exists a relational invariant $I_{x,y}$ between the local degrees of freedom at $x$ and the local degrees of freedom at $y$, with positive coherence content $\mathcal{C}(I_{x,y}) > 0$.

*Proof.* Causal adjacency means $x$ and $y$ are connected by a causal-set link — a direct causal relation not factored through any intermediary. By construction $x \in \gamma_{12}$ belongs to the channel-carrying observer system (the joint structure of $\mathcal{O}_1, \mathcal{O}_2$ with the relational invariant $I_{12}$), and $y \in \mathcal{C} \setminus \gamma_{12}$ belongs to a distinct ambient observer $\mathcal{O}_y$. The link $x \prec y$ therefore constitutes an observer-observer interaction event between $\mathcal{O}_y$ and the channel-carrying side.

By [Three Interaction Types](/derivations/interactions/three-types) Theorem 5.1 (derived), every such observer-observer interaction event is exhaustively classified into exactly one of Type I (Passage, phase exchange), Type II (Fusion, composite formation), Type III (Resonance, new relational invariant), or dissolution (Case D of three-types Step 2).

**Dissolution at $(x, y)$ is precluded by the lemma's persistence hypothesis on $\gamma_{12}$.** The strict-irreducibility hypothesis requires $\gamma_{12}$ to be a coherent persistent channel carrying $I_{12}$ undiminished through every Cauchy slice ([ER=EPR](/derivations/holography/er-epr) Proposition 1.2c). Case D1 (mutual annihilation; [Three Interaction Types](/derivations/interactions/three-types) Proposition 2.1, sub-case D1) would remove $x$ from $\gamma_{12}$, contradicting persistence. Case D2 (reorganization; same Proposition, sub-case D2) produces new observers whose new invariants are "indistinguishable from Case A" by three-types' own analysis — i.e., they reduce to one of Types I, II, or III. The direct possibilities are therefore Type I, II, or III.

**Type III generates the relational invariant directly.** If the interaction at $(x, y)$ is Type III, the relational invariant $I_{x, y}$ between the local degrees of freedom at $x$ and $y$ is generated by definition ([Three Interaction Types](/derivations/interactions/three-types), Definition 4.4) with $\mathcal{C}(I_{x, y}) > 0$ ([Relational Invariants](/derivations/interactions/relational-invariants), Definition 2.1).

**Type I and Type II reduce to a Type III paired ledger.** [Three Interaction Types](/derivations/interactions/three-types) Step 6, Remark on "Type I as currency, Type III as accounting," establishes the structural identification: most physically realized Type III correlations are produced *through* Type I-mediated traffic, and the paired ledger entry on either side of a Type I transfer IS a Type III relational invariant on the joint state space of the two observers post-transfer. Applied to the link $(x, y)$: a Type I event leaves a Type III invariant $I_{x, y}$ at the channel-ambient interface, indexed by the link itself or its immediate causal successor. For Type II, the binding-coherence accounting (three-types Proposition 7.3, reverse direction) requires a coherence source for any composite formed at $(x, y)$; the source can only be $\mathcal{C}(I_{12})$ (the channel's coherence) feeding into the binding, which is recorded as a Type III binding-ledger entry on the joint state space. In either case, a Type III relational invariant $I_{x, y}$ exists with $\mathcal{C}(I_{x, y}) > 0$. $\square$

**Remark 2.2.** The proof above rests on [Three Interaction Types](/derivations/interactions/three-types) Theorem 5.1, which is at full `derived` rigor (see that derivation's Rigor Assessment) and explicitly establishes the exhaustive four-case classification (Types I, II, III, or dissolution) for every observer-observer interaction event. The mapping from causal-set links between distinct observers to such interaction events is the standard CST reading of links as elementary interaction loci. The framework does not admit "ghost" causal links between distinct observers with no associated interaction type — three-types Theorem 5.1's exhaustiveness (its Step 5) excludes this by construction. The reduction of Type I and Type II to a Type III paired ledger at the next causal step uses three-types Step 6's currency-vs-accounting structural identification, which is also at full derived rigor.

**Proposition 2.3 (Boundary invariants drain channel coherence).** If $\gamma_{12}$ is ambient-embedded, then the family of boundary relational invariants $\{I_{x, y(x)} : x \in \gamma_{12} \text{ interior}, y(x) \in \mathcal{C} \setminus \gamma_{12} \text{ adjacent}\}$ contributes strictly positive total coherence $\Delta \mathcal{C} > 0$ that must be subtracted from $\mathcal{C}(I_{12})$ in any Cauchy-slice accounting.

*Proof.* By Coherence Conservation (Axiom 1), the total coherence on any Cauchy slice $\Sigma$ intersecting both $\gamma_{12}$ and the boundary region equals the sum of contributions from all relational invariants whose carriers pass through $\Sigma$. The invariants $\{I_{x, y(x)}\}$ from Proposition 2.1 have carriers that pass through every Cauchy slice intersecting the channel interior (since the boundary pairs are local to the channel-ambient interface). Each such invariant contributes $\mathcal{C}(I_{x, y(x)}) > 0$ to the total. By subadditivity of the coherence measure ([Coherence Conservation](/derivations/axioms/coherence-conservation), C1), the contribution of $I_{12}$ alone is bounded above:

$$\mathcal{C}(I_{12}) \leq \mathcal{C}_{\text{total}}(\Sigma) - \sum_{x \in \gamma_{12}^{\text{int}}} \mathcal{C}(I_{x, y(x)}) = \mathcal{C}_{\text{total}}(\Sigma) - \Delta \mathcal{C}.$$

In particular, if $\Delta \mathcal{C} > 0$, then $\mathcal{C}(I_{12}) < \mathcal{C}_{\text{total}}(\Sigma)$ — strictly less than the full Cauchy-slice coherence flowing through the channel region. This is the framework-internal definition of **decoherence** of $I_{12}$: a positive fraction of its potential coherence content is siphoned into ambient-channel invariants and is no longer available to $I_{12}$ for observer-pair correlation purposes. See [Substrate Noise and Profile Coupling](/derivations/foundation/substrate-noise-and-profile-coupling) for the related notion of profile-mediated coherence loss; the present argument is a structural counterpart at the channel-ambient interface. $\square$

**Corollary 2.4 (Embedding ⇒ partial decoherence).** Any ambient-embedded channel is decohered to a degree proportional to the number of interior channel elements with ambient neighbors.

## 3. Irreducibility Implies Non-Embedding

**Theorem 3.1 (Strict irreducibility forbids ambient embedding).** Let $\gamma_{12}$ satisfy the strict irreducibility hypothesis of [ER=EPR](/derivations/holography/er-epr) Proposition 1.2c — namely, $\mathcal{C}(\gamma_{12}) = \mathcal{C}(I_{12})$ is conserved on every Cauchy slice that intersects $\gamma_{12}$, and $I_{12}$ does not decompose through any intermediary observer. Then $\gamma_{12}$ is endpoint-only embedded (Definition 1.4) — its interior elements have no ambient causal-set neighbors.

*Proof.* By contradiction. Suppose $\gamma_{12}$ has at least one interior element $x \in \gamma_{12}^{\text{int}}$ with an ambient neighbor $y \in \mathcal{C} \setminus \gamma_{12}$. By Proposition 2.1, there exists a relational invariant $I_{x,y}$ with $\mathcal{C}(I_{x,y}) > 0$. By Proposition 2.3, this contributes $\Delta \mathcal{C} \geq \mathcal{C}(I_{x,y}) > 0$ to the boundary-invariant total, draining $\mathcal{C}(I_{12})$ below the full Cauchy-slice coherence: $\mathcal{C}(I_{12}) < \mathcal{C}_{\text{total}}(\Sigma)$.

But the strict irreducibility hypothesis requires $\mathcal{C}(\gamma_{12}) = \mathcal{C}(I_{12})$ to be the full conserved coherence content of the channel, with no positive coherence routed elsewhere on the same slice. The ambient-channel invariant $I_{x,y}$ provides exactly such a positive coherence routed elsewhere — specifically, into ambient. Contradiction.

Therefore $\gamma_{12}$ has no interior element with an ambient neighbor. By Proposition 1.5, $\gamma_{12}$ is endpoint-only embedded. $\square$

**Remark 3.2 (Operational picture).** Theorem 3.1 captures the framework's existing position that perfect entanglement is incompatible with decoherence. In the standard quantum-mechanics picture, a Bell pair perfectly isolated from the environment retains its full entanglement entropy; once the pair interacts with environment degrees of freedom, the entanglement is dispersed across the system + environment, leaving the pair in a mixed state with reduced bipartite entanglement. The framework's channel formulation makes this precise: full irreducibility of $I_{12}$ ⇔ no ambient interaction ⇔ endpoint-only embedding of $\gamma_{12}$. Real Bell pairs in practice are partially decohered, which corresponds to *partial* ambient embedding; the framework's ER=EPR claim refers to the idealized perfect-isolation limit, which is also the standard Maldacena–Susskind setting.

**Corollary 3.3 (Partial irreducibility ⇒ partial handle).** A channel with partial decoherence has an intermediate topological character between perfect handle (perfectly insulated) and pure flux tube (fully ambient-embedded). This provides a continuous interpolation between the two pictures, with the "handle fraction" measurable in principle as the channel's entanglement preservation fidelity. This corollary will not be used in the main argument; it is noted as a framework-distinctive structural prediction.

## 4. Non-Embedding Implies Handle Topology

This section establishes Step 4 of the program: that an endpoint-only-embedded channel forces a spatial handle in the continuum sprinkling limit. The argument has two parts: existence of a consistent handle interpretation (Section 4.1) and exclusion of the flat-space (flux-tube) interpretation (Section 4.2).

### 4.1 Handle Existence (Constructive)

**Proposition 4.1 (Wormhole manifold construction).** There exists a globally hyperbolic Lorentzian manifold $(M_W, g_W)$ with the following properties:

(a) **Asymptotic structure:** $(M_W, g_W)$ contains a region asymptotically isometric to two disjoint copies of flat $\mathbb{R}^3 \times \mathbb{R}$, each containing one of the observer worldlines.

(b) **Spatial handle:** Cauchy slices of $(M_W, g_W)$ have spatial topology $\mathbb{R}^3 \# (\mathbb{R} \times S^2)$, the connected sum of flat space with the "handle" $\mathbb{R} \times S^2$. The first homology is $H_1(\Sigma; \mathbb{Z}) = \mathbb{Z}$, generated by a loop traversing the wormhole throat in one direction and ambient space in the other.

(c) **Global hyperbolicity:** $(M_W, g_W)$ is globally hyperbolic in the bifurcate-horizon sense (admits a global Cauchy surface).

*Existence proof.* Two canonical examples:

- **Eternal Schwarzschild–Kruskal extension.** The maximal extension of Schwarzschild has spatial slices $\mathbb{R} \times S^2$ (with one $S^2$ pinch at the bifurcation surface). This satisfies (a) with the two asymptotic regions joined through the Einstein–Rosen bridge, (b) with the handle being the bridge, and (c) by standard arguments (the Kruskal extension is globally hyperbolic; see [Hawking–Ellis, 1973]). However, the Schwarzschild throat is non-traversable and contains a horizon — not all framework applications require this.

- **Morris–Thorne traversable wormhole** ([Morris–Thorne, 1988]). For appropriate (exotic-matter-violating-the-NEC) stress-energy, this is a globally hyperbolic spacetime with two asymptotically flat regions connected by a throat of finite area. Spatial slices have the connected-sum topology required by (b). $\square$

**Proposition 4.2 (Wormhole sprinkling matches the framework's combinatorial pattern).** A Poisson sprinkling of $(M_W, g_W)$ at density $V_c^{-1}$ produces a causal set $\mathcal{C}_W$ that decomposes into:

- An ambient sprinkling of the two asymptotic regions (faithful embedding into the two disjoint $\mathbb{R}^3 \times \mathbb{R}$ copies), and
- A throat sub-causal-set $\gamma_W$ of elements sprinkled into the wormhole bridge region.

The throat sub-causal-set $\gamma_W$ is endpoint-only embedded in the sense of Definition 1.4: its interior elements (those sprinkled into the bridge interior, not its mouths) have causal-set neighbors only with other throat elements, not with elements sprinkled into the asymptotic regions. This is because the bridge interior is spatially separated from both asymptotic regions by the topology of the manifold itself — there is no Planck-scale region of $M_W$ that contains both a bridge-interior point and an asymptotic-region point.

*Proof.* The Poisson sprinkling of $(M_W, g_W)$ assigns each spacetime point an independent probability of being a causal-set element, proportional to spacetime volume. Causal adjacency in the resulting causal set $\mathcal{C}_W$ is determined by the manifold's causal structure: $x$ and $y$ are adjacent iff they are causally related in $(M_W, g_W)$ and lie within Alexandrov volume $\leq V_c$ of each other.

By the topology of $M_W$ (connected sum, not simply-connected), the bridge interior and the asymptotic regions are spatially separated: a Planck-ball at any bridge-interior point is contained entirely within the bridge region (does not extend into the asymptotic regions), and vice versa. The only points of the manifold where bridge and asymptotic regions meet are the mouth regions $\mathcal{N}_1, \mathcal{N}_2$.

Therefore, an element $x$ sprinkled into the bridge interior has Planck-ball causal neighbors only at other bridge interior points or at mouth points. By Definition 1.4, $\gamma_W$ is endpoint-only embedded. $\square$

**Theorem 4.3 (Handle existence for the framework's channel).** Let $\gamma_{12}$ be the framework's strictly irreducible channel (satisfying Theorem 3.1, hence endpoint-only embedded). There exists a globally hyperbolic wormhole manifold $(M_W, g_W)$ (Proposition 4.1) such that the framework's combined causal set $\mathcal{C} = (\mathcal{C} \setminus \gamma_{12}) \cup \gamma_{12}$ is consistent with a faithful embedding into $(M_W, g_W)$: the ambient portion embeds into the asymptotic regions, and the channel $\gamma_{12}$ embeds into the bridge.

By [Major–Rideout–Surya, 2007] Theorem 2 and Corollary 2 (also reviewed in [Causal Set Statistics](/derivations/holography/causal-set-statistics)), the thickened-antichain construction $\mathsf{T}_n(A)$ on $\mathcal{C}$ recovers the spatial homology of $(M_W, g_W)$ with high probability under the scale separation $V_c \ll v_0 \ll v \ll \tilde{v}$. In particular, $H_1(\Sigma; \mathbb{Z}) = \mathbb{Z}$ is recoverable: there is a non-contractible 1-cycle in the antichain nerve that corresponds to the manifold's handle.

*Proof.* The consistency of the embedding follows directly from Propositions 4.1 and 4.2: the manifold exists, its sprinkling has the right combinatorial structure, and the framework's channel maps to the bridge sub-causal-set. The homology recovery is the content of the cited Major–Rideout–Surya theorem, whose hypotheses (globally hyperbolic, scale separation, inextendible antichain through both ambient and channel regions) are all satisfied by the present setup. $\square$

### 4.2 Flat-Space Exclusion

**Theorem 4.4 (No faithful flat-space embedding).** The framework's causal set $\mathcal{C} = (\mathcal{C} \setminus \gamma_{12}) \cup \gamma_{12}$, with $\gamma_{12}$ strictly irreducible (hence endpoint-only embedded by Theorem 3.1), does **not** faithfully embed into flat Minkowski space $\mathbb{R}^3 \times \mathbb{R}$ at the ambient sprinkling density.

*Proof.* A faithful embedding $\Phi: \mathcal{C} \to (M_{\text{flat}}, \eta)$ at density $V_c^{-1}$ requires:

(i) The number of elements of $\mathcal{C}$ in any spacetime region of volume $V$ is Poisson-distributed with mean $V / V_c$.

(ii) Order relations in $\mathcal{C}$ correspond to causal relations in $(M_{\text{flat}}, \eta)$.

Consider an interior channel element $x \in \gamma_{12}^{\text{int}}$. Under the hypothesized embedding $\Phi$, $\Phi(x)$ is a point in $\mathbb{R}^3 \times \mathbb{R}$. Consider a small spacetime ball around $\Phi(x)$ of volume $V$ with $V_c \ll V \ll v_0$ (Planck-scale region). By the Poisson condition (i), this ball contains on average $V / V_c \gg 1$ elements of $\mathcal{C}$.

But by Theorem 3.1, $x$ has no ambient causal-set neighbors — its only causal-set neighbors are other elements of $\gamma_{12}$. The local density of $\gamma_{12}$ elements near $x$ is at most the "cross-section count" $N_{\min} = S_{\text{ent}}(I_{12})$ per cross-section ([ER=EPR](/derivations/holography/er-epr) Section 3.4 discrete-throat picture). For a microscopic Bell pair, $S_{\text{ent}} = \ln 2$, and the local channel density is at most $\sim \ln 2$ elements per Planck cross-section.

The ambient density required by (i) is $V / V_c \gg \ln 2$ for any region above the discreteness scale. Therefore the local element count near $\Phi(x)$ is far below the Poisson mean required by (i). This violates faithful embedding.

Concretely: the channel has $O(1)$ elements per Planck cross-section (set by the irreducible coherence count); flat-space sprinkling at density $V_c^{-1}$ has $V / V_c$ elements in any volume-$V$ region. For $V \gg V_c$, the deficit is enormous (factor of $V / V_c$). This is the "void cutting through" the causal set that the [Major–Rideout–Surya, 2007] paper (page 19, $P_0 = \exp(-V/V_c)$) identifies as the principal obstacle to faithful embedding for under-stuffed regions.

Therefore $\Phi$ is not faithful, and no faithful embedding into flat space exists. $\square$

**Remark 4.5 (The geometric meaning of the exclusion).** Flat-space sprinkling fills space densely with causal-set elements; the framework's channel is a sparse, irreducible thread of $O(1)$ elements per cross-section. The two are not topologically compatible at the discreteness scale, even though they might appear compatible at large scales (where a thin tube of high-coherence-density region in flat space is a legitimate continuum object). The framework's irreducibility property is what makes the channel sparse-not-dense — it fixes the channel cross-section to the minimum coherence count $S_{\text{ent}}$, not to the ambient sprinkling density.

### 4.3 Combined Conclusion

**Corollary 4.6 (Handle topology forced).** Combining Theorems 4.3 (handle existence) and 4.4 (flat-space exclusion):

- The handle interpretation is consistent: there exists a wormhole manifold whose sprinkling matches the framework's combinatorial structure, with $H_1 = \mathbb{Z}$ recoverable by the Major–Rideout–Surya construction.

- The flux-tube interpretation is excluded: the framework's causal set cannot faithfully embed into flat space.

The conjunction rules out flux-tube and exhibits a consistent handle interpretation. This is the content needed for [ER=EPR](/derivations/holography/er-epr) Theorem 3.2 Step 2: the ambient Cauchy slice acquires a non-contractible 1-cycle as a result of the channel's irreducibility.

**Hauptvermutung note.** If the Hauptvermutung of causal-set theory (uniqueness of continuum approximation) is proved, Corollary 4.6 upgrades from "handle is consistent, flat space is excluded" to "handle is the unique continuum class compatible with the framework's combinatorial structure." The framework's ER=EPR claim does not require this upgrade — uniqueness is a stronger result than needed.

### 4.4 Spanning Inextendible Antichain

Theorem 4.3 invoked the Major–Rideout–Surya construction, which requires an *inextendible* antichain $A$ spanning both the ambient region and the channel, with $A \cap \gamma_{12}$ realising the bottleneck cross-section. This subsection constructs such an antichain explicitly, completing the formal infrastructure on which Theorem 4.3 implicitly relied.

**Theorem 4.7 (Spanning inextendible antichain).** *Under the hypotheses of the Lemma (strict irreducibility of $\gamma_{12}$, manifold-like ambient with the scale separation $V_c \ll v_0 \ll v \ll \tilde{v}$), there exists an antichain $A \subset \mathcal{C}$ with all three of the following properties:*

*(a) **Maximality in $\mathcal{C}$**: no element of $\mathcal{C} \setminus A$ can be added to $A$ while preserving mutual incomparability — equivalently, the partition $\mathcal{C} = \mathrm{Past}(A) \cup A \cup \mathrm{Fut}(A)$ is exhaustive.*

*(b) **Ambient restriction**: $A_{\text{amb}} := A \cap (\mathcal{C} \setminus \gamma_{12})$ is an inextendible antichain in the ambient sub-causal-set $\mathcal{C} \setminus \gamma_{12}$.*

*(c) **Channel restriction**: $A_{\text{chan}} := A \cap \gamma_{12}$ is the minimal antichain cut $\Sigma_{\min}^{\mathcal{C}}$ of the channel graph, with $|A_{\text{chan}}| = N_{\min} = S_{\text{ent}}(I_{12})$.*

*Proof.* By Proposition 4.1, the combined causal set $\mathcal{C}$ is consistent with a faithful embedding $\Phi: \mathcal{C} \to (M_W, g_W)$ into a globally hyperbolic wormhole manifold whose Cauchy slices have spatial topology $\mathbb{R}^3 \, \# \, (\mathbb{R} \times S^2)$. The proof constructs $A$ as the sprinkling of a particular Cauchy hypersurface of $M_W$.

**Step 1: A Cauchy hypersurface containing the bottleneck exists.** The throat of $M_W$ has a minimum-area 2-surface $\Sigma_{\min} \subset M_W$ — the wormhole bottleneck ([ER=EPR](/derivations/holography/er-epr) Theorem 3.2 Step 3, extreme value theorem on the throat cross-sections). $\Sigma_{\min}$ is a compact spacelike 2-submanifold of $M_W$ (hence achronal).

By the smooth-splitting refinement of Geroch's theorem ([Bernal–Sánchez, 2003]), every globally hyperbolic spacetime admits a smooth foliation by spacelike Cauchy hypersurfaces, parameterised by a smooth time function $t: M_W \to \mathbb{R}$ with $\{t = \tau\}$ Cauchy for each $\tau$. Since $\Sigma_{\min}$ is a compact achronal spacelike submanifold, one can choose the smooth time function $t$ so that $\Sigma_{\min} \subset \{t = 0\}$. Concrete constructions are immediate for the two canonical wormhole geometries used in Proposition 4.1:

- **Eternal Schwarzschild–Kruskal.** The bifurcate 2-sphere at $T = X = 0$ in Kruskal coordinates lies on the $T = 0$ spatial slice, which is a Cauchy hypersurface with topology $\mathbb{R} \times S^2$.
- **Symmetric Morris–Thorne.** The throat 2-sphere at proper-radial-distance $\ell = 0$ lies on any constant-$t$ slice of the static metric; each such slice is a Cauchy hypersurface with topology $\mathbb{R}^3 \, \# \, (\mathbb{R} \times S^2)$.

In either case, denote the chosen Cauchy hypersurface $\Sigma_W \subset M_W$, with $\Sigma_{\min} \subset \Sigma_W$. For asymmetric wormhole geometries (e.g., dynamical throats), the Bernal–Sánchez existence statement still applies, though the time function may be less geometrically transparent.

**Step 2: Sprinkling $\Sigma_W$ gives an antichain.** Following [Major–Rideout–Surya, 2007] Section 3, define the **thickened antichain on $\Sigma_W$**:

$$A \equiv \{x \in \mathcal{C} \mid \Phi(x) \text{ lies in a } V_c\text{-thin spacetime neighbourhood of } \Sigma_W\}.$$

Under the scale separation $V_c \ll v_0 \ll v \ll \tilde{v}$, the set $A$ is an antichain in $\mathcal{C}$ with high probability. The justification is that elements of $A$ have $\Phi$-images on a spacelike slice with $O(V_c)$ thickness, and the probability that two such elements are causally related decreases with the slice thickness — precisely the void-probability argument of [Major–Rideout–Surya, 2007] (their $\mathfrak{N} P_1 \ll 1$ in equation 12).

**Step 3: $A$ is inextendible in $\mathcal{C}$.** $\Sigma_W$ is a Cauchy hypersurface of $(M_W, g_W)$, so by definition every inextendible causal curve in $M_W$ crosses $\Sigma_W$ exactly once. For any $x \in \mathcal{C}$ with $\Phi(x) \notin \Sigma_W$, the continuum causal curve from $\Phi(x)$ to the future or past crosses $\Sigma_W$, so $\Phi(x)$ is in either the causal past or the causal future of $\Sigma_W$. Under the sprinkling correspondence, $x$ is therefore in $\mathrm{Past}(A)$ or $\mathrm{Fut}(A)$. The partition

$$\mathcal{C} = \mathrm{Past}(A) \cup A \cup \mathrm{Fut}(A)$$

is exhaustive, which is the discrete characterisation of an inextendible antichain. Property (a) is established.

**Step 4: Ambient restriction $A_{\text{amb}}$ is inextendible in $\mathcal{C} \setminus \gamma_{12}$.** Restricting the partition argument of Step 3 to the ambient sub-causal-set: every $x \in \mathcal{C} \setminus \gamma_{12}$ is either in $A_{\text{amb}}$, or in the ambient causal past of $A_{\text{amb}}$, or in the ambient causal future. Property (b) is established.

**Step 5: Channel restriction $A_{\text{chan}}$ is the bottleneck cut with $N_{\min}$ elements.** $A_{\text{chan}}$ is the sprinkling of $\Sigma_W \cap M_{\text{throat}}$, the bottleneck portion of the Cauchy hypersurface. By the choice of $\Sigma_W$ to contain $\Sigma_{\min}$, $A_{\text{chan}}$ is exactly the discrete realisation of $\Sigma_{\min}$ in the channel sub-causal-set:

- Every causal-set path in $\gamma_{12}$ from $\mathcal{N}_1$ to $\mathcal{N}_2$ must cross $A_{\text{chan}}$, since the continuum analog (every causal curve from $\mathcal{N}_1$ to $\mathcal{N}_2$ through the throat) must cross $\Sigma_W$.

- $A_{\text{chan}}$ is a minimal cut (no proper subset disconnects $\gamma_{12}$), since $\Sigma_{\min}$ is the minimum-area cross-section of the throat ([ER=EPR](/derivations/holography/er-epr) Theorem 3.2 Step 3) and any sub-collection of its sprinkled elements would fail to cover the full 2-surface.

- The cardinality $|A_{\text{chan}}| = N_{\min} = S_{\text{ent}}(I_{12})$ by the saturation argument of [ER=EPR](/derivations/holography/er-epr) Proposition 3.3 (area-scaling lower bound is tight under irreducibility) combined with the Section 3.4 discrete-throat picture ($N_{\min}$ elements per Planck cross-section, each contributing $4\ell_P^2$).

Property (c) is established. $\square$

**Remark 4.8 (Symmetric vs. asymmetric wormholes).** For the symmetric wormhole geometries used in Proposition 4.1's existence argument (eternal Schwarzschild, symmetric Morris–Thorne), Step 1's construction is immediate: the time-reflection-symmetric slice $\{t = 0\}$ is automatically a Cauchy hypersurface containing the bottleneck. Asymmetric wormhole geometries (dynamical throats, non-static matter content) require the more general Bernal–Sánchez argument to construct the time function, but the existence statement is unchanged. The lemma's downstream conclusions are insensitive to which case applies.

**Remark 4.9 (Discrete-continuum correspondence at the antichain level).** Theorem 4.7's construction follows the same discrete-continuum correspondence used throughout the lemma: a continuum object (the Cauchy hypersurface $\Sigma_W$) is mapped to a discrete object (the thickened antichain $A$) via Poisson sprinkling, and the discrete object inherits structural properties (here: inextendibility) from the continuum source. The high-probability nature of the correspondence (Step 2's $\mathfrak{N} P_1 \ll 1$ bound) is the standard CST caveat — the construction works for almost all sprinkling realisations under the scale separation, not deterministically. This is the same caveat that applies to [Major–Rideout–Surya, 2007] Theorem 2 in Section 4.1; the present construction does not strengthen or weaken that caveat.

## Consistency Check: Bell Pair

**Model:** A perfectly-isolated Bell pair $|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|0\rangle|0\rangle + |1\rangle|1\rangle)$ between two qubit observers at proper distance $L$, with $L$ much larger than the Planck scale.

**Channel coherence:** $\mathcal{C}(I_{12}) = S_{\text{ent}} = \ln 2$.

**Channel cross-section:** $N_{\min} = \ln 2 \approx 0.69$ causal-set elements per Planck cross-section (interpret integer-valued: one element per cross-section, contributing $\ln 2$ on average).

**Endpoint-only embedded?** Yes, by hypothesis of perfect isolation (no decoherence). Theorem 3.1 applies.

**Handle topology?** Yes, by Corollary 4.6. The channel forces a Planck-scale wormhole connecting the two observer regions.

**Throat area:** $A = 4\ell_P^2 \ln 2$ ([ER=EPR](/derivations/holography/er-epr) Proposition 3.3).

**Throat element count:** $N_{\min} = S_{\text{ent}} = \ln 2$, consistent with the discrete-throat picture ([ER=EPR](/derivations/holography/er-epr) Section 3.4).

**Topologically:** Spatial slice acquires a Planck-scale handle. The non-contractible loop is: leave $\mathcal{O}_1$, traverse flat space to $\mathcal{O}_2$ (length $L$), enter the wormhole, traverse the handle back to $\mathcal{O}_1$ (Planck-scale length). This loop generates $H_1 = \mathbb{Z}$.

**Decoherence effect:** If the Bell pair partially decoheres (interacts with environment), some channel elements acquire ambient neighbors. By Corollary 3.3, the channel transitions from pure handle to handle-plus-flux-tube hybrid. In the limit of complete decoherence, the channel is fully ambient-embedded and the handle disappears — the entangled state has become a product state. This is consistent with the experimental fact that decoherent quantum systems do not exhibit wormhole-like correlations.

## Open Gaps

**Gap 1 (Quantitative sprinkling match for Step 4a).** Proposition 4.2 establishes that wormhole-manifold sprinkling has endpoint-only-embedded throat sub-causal-set. What is not verified explicitly is the *quantitative* matching of the framework's channel element density (set by $N_{\min} = S_{\text{ent}}$) to the wormhole-bridge sprinkling density. A precise statement: for what wormhole geometries (throat radius, bridge length, matter content) does the Poisson sprinkling produce exactly $N_{\min}$ elements per Planck cross-section? This would require either an analytic argument or a numerical simulation in the spirit of [Cunningham–Surya, 2019]. The framework's expectation: the framework's $N_{\min}$ matches the Planck-scale throat of a Morris–Thorne wormhole with throat radius $r_0 \sim \ell_P \sqrt{S_{\text{ent}}}$.

**Gap 2 (Connection to Hauptvermutung).** The lemma's conclusion is the weaker "handle is consistent, flat space is excluded." A full uniqueness statement ("handle is the unique class") would require the Hauptvermutung. The argument provides one of the strongest currently-available specific instances supporting the Hauptvermutung: the framework's irreducibility condition picks out a specific topology class from the causal-set structure. If the Hauptvermutung is later proved, this lemma's conclusion strengthens automatically.

*(Notes on earlier closed gaps: an earlier draft listed dependence on the three-interaction-type taxonomy as a separate gap, closed by [Three Interaction Types](/derivations/interactions/three-types) Theorem 5.1 — see Remark 2.2. A later draft listed antichain inextendibility as a separate gap, closed by Theorem 4.7 above using the smooth-Cauchy-hypersurface theorem of [Bernal–Sánchez, 2003] together with the bottleneck saturation of [ER=EPR](/derivations/holography/er-epr) Proposition 3.3.)*

## Rigor Assessment

| Result | Status | Notes |
|---|---|---|
| Definition 1.2 (ambient embedding) | Derived | Standard CST notion adapted to sub-causal-sets |
| Definition 1.4 (endpoint-only embedding) | Derived | Framework-specific specialization |
| Proposition 1.5 (mutually exclusive) | Derived | Immediate from definitions |
| Proposition 2.1 (boundary invariants exist) | Derived | Rests on [Three Interaction Types](/derivations/interactions/three-types) Theorem 5.1 (derived), with explicit case analysis for dissolution exclusion under the lemma's persistence hypothesis and Type I/II → Type III reduction via three-types Step 6 currency-vs-accounting structure |
| Proposition 2.3 (boundary invariants drain coherence) | Derived | Direct application of [Coherence Conservation](/derivations/axioms/coherence-conservation) C1 (subadditivity) |
| Corollary 2.4 (embedding ⇒ partial decoherence) | Derived | Immediate corollary |
| Theorem 3.1 (irreducibility ⇒ non-embedding) | Derived | Contradiction with Propositions 2.1, 2.3, irreducibility hypothesis |
| Corollary 3.3 (partial irreducibility ⇒ partial handle) | Semi-formal | Framework-distinctive prediction; not used in main argument |
| Proposition 4.1 (wormhole exists) | Derived | Standard GR; Schwarzschild and Morris–Thorne examples |
| Proposition 4.2 (wormhole sprinkling matches) | Semi-formal | Topology argument is rigorous; quantitative density matching is Gap 1 |
| Theorem 4.3 (handle existence) | Derived modulo Gap 1 | Cites Major–Rideout–Surya 2007 (published, proven); spanning antichain construction supplied by Theorem 4.7 below; framework-internal portion is the consistency of embedding |
| Theorem 4.4 (flat-space exclusion) | Derived | Follows from Theorem 3.1 + Poisson density requirement |
| Corollary 4.6 (handle forced) | Derived modulo Gap 1 | Combines 4.3 and 4.4 |
| Theorem 4.7 (spanning inextendible antichain) | Derived | Standard application of Bernal–Sánchez 2003 (existence of Cauchy hypersurface containing a compact achronal submanifold) combined with the Major–Rideout–Surya thickened-antichain construction for sprinkling and [ER=EPR](/derivations/holography/er-epr) Proposition 3.3 for the bottleneck count. High-probability nature is the standard CST caveat, not a derivation-specific gap |

## Addresses Gaps In

- [ER=EPR](/derivations/holography/er-epr), Open Gap 3 (flux tube vs. spatial handle): **closed modulo Gap 1 above**. Theorem 3.2 Step 2 can now cite this lemma to upgrade from "channel is irreducibly connected and non-pinching" to "channel induces a spatial handle in the continuum." The Rigor Assessment row for Theorem 3.2 should be upgraded from "Partial" to "Derived" (in non-AdS settings, modulo this lemma's Gap 1), and similarly for Proposition 3.3 and Theorem 5.1.

## References

- [Major–Rideout–Surya, 2007] — provides the thickened-antichain construction and the discrete-continuum homology correspondence.
- [Surya, 2008] — review of CST topology results, including the Hauptvermutung status.
- [Morris–Thorne, 1988] — explicit globally-hyperbolic traversable wormhole construction used in Proposition 4.1.
- [Hawking–Ellis, 1973] — standard reference for the Kruskal extension of Schwarzschild and its global hyperbolicity.
- [Cunningham–Surya, 2019] — worked examples of CST with non-trivial spatial topology ($S^1$, $T^2$); template for the Gap 1 simulation work.
- [Bernal–Sánchez, 2003] — smooth-Cauchy-hypersurface refinement of Geroch's splitting theorem, used in Theorem 4.7 Step 1 to construct a Cauchy hypersurface containing the bottleneck.

<!-- References -->
[Major–Rideout–Surya, 2007]: /references#major-rideout-surya-2007
[Surya, 2008]: /references#surya-2008
[Morris–Thorne, 1988]: /references#morris-thorne-1988
[Hawking–Ellis, 1973]: /references#hawking-ellis-1973
[Cunningham–Surya, 2019]: /references#cunningham-surya-2019
[Bernal–Sánchez, 2003]: /references#bernal-sanchez-2003
