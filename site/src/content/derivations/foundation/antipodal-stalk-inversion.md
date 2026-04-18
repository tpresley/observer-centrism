---
title: "Antipodal Stalk Inversion"
status: "provisional"
dependsOn: ["foundation/observer-projected-spacetime", "foundation/observer-holographic-equivalence", "holography/horizon-gauge-shell", "foundation/knot-theoretic-bootstrap", "minimal-observer/multiplicity", "minimal-observer/coherence-dual-pairs", "particles/cpt-theorem", "axioms/loop-closure", "axioms/observer-definition"]
enablesDerivation: []
tags: ["foundation", "spacetime", "structure", "holography"]
summary: "At the sheaf level, the observer-indexed family of stalks admits an antipodal inversion morphism I_A for each observer A, pairing A with its coherence-dual peer A' across a shared horizon. The morphism equals the framework's CPT operator acting on observer structure: its C component is the coherence-dual stalk exchange, its P component is angular antipodal reflection on the horizon S², and its T component is loop-closure phase reversal. Consequences: (1) partner worldlines identified across paired stalks via CPT, (2) the Thesis A / Thesis A' unitary equivalence is implemented by CPT itself, (3) Möbius/Chern-Simons modular-equivariant structure on the horizon, (4) the cross-level Λ-hierarchy as antipodal rescaling cocycle — with suggestive combinatorial match to the Kobayashi-Maskawa CP-phase count. Under Corollary 4.5 of Observer Holographic Equivalence these sheaf-level claims are operationally complete — no manifold extension is needed."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-17
---

## Overview

[Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Theorem 3.1 establishes each minimal observer's projection $M_A$ as a de Sitter static patch. [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 4.5 establishes that continuous exterior content is operationally null for $A$'s dynamics — A's state transitions depend only on the integer residue at $\partial M_A$. This derivation asks a structural question that follows from their combination: **what categorical structure carries the integer residue between observers?**

The answer is an **antipodal inversion morphism** in the observer-indexed sheaf. For each observer $A$ at bootstrap level $n$, there is a canonical morphism $I_A$ that pairs $A$ with a same-level peer $A'$ across their shared horizon, fixing the shared horizon's integer data pointwise and implementing the framework's $A \leftrightarrow A'$ structural equivalences.

**Central identification.** The antipodal peer $A'$ is $A$'s **coherence-dual** in the sense of [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs) (equal mass, opposite charges, conjugate boundaries, forced by multiplicity), and the morphism $I_A$ equals the framework's **CPT operator** as characterized by [CPT Theorem](/derivations/particles/cpt-theorem) Theorem 4.1 Step A. Its C component is the coherence-dual stalk exchange (charge conjugation); its P component is the angular antipodal reflection on the horizon $S^2$ (spatial reflection of the winding structure); its T component is the loop-closure phase reversal (time reversal). The geometric decomposition of the de Sitter antipodal involution $X \mapsto -X$ along the C/P/T axes matches the framework's CPT construction term-for-term.

**The sheaf-level framing is the natural one.** It would be tempting to present this morphism as a geometric extension — extending $M_A$ past its horizon by attaching an antipodal de Sitter static patch and treating $I_A$ as a manifold-level isometric involution. That geometric picture is consistent with, and suggestive of, the structural content here; the standard antipodal structure of $\mathrm{dS}_4$ provides the geometric interpretation that the sheaf morphism formalizes. But the framework's manifold-with-boundary commitment ([Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Definition 1.1) is not modified by this derivation, because it does not need to be — see Proposition 1.1 (operational completeness) below. The sheaf-level content captures everything any observer can testably distinguish.

**What this derivation delivers.**

1. A precise sheaf-level statement of the antipodal morphism $I_A$, its properties, and its **identification with the framework's CPT operator** (Steps 1–2).
2. Partner worldline identification across paired stalks as the sheaf-level image of CPT exchange — a theorem-level statement of what [Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Remark 3.3 describes as prescribed-boundary-conditions (Step 3).
3. Realization of the Thesis A / Thesis A' unitary equivalence as CPT acting on observer structure — supplying the explicit unitary map flagged as Open Gap 2 of [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) (Step 4).
4. Modular-equivariant structure for the framework's horizon Chern–Simons theory ([Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap)), via the Möbius automorphism group of the conformal horizon $S^2$ (Step 5).
5. Concrete identification of the $\Lambda$-hierarchy obstruction class ([Cosmological Constant](/derivations/cosmology/cosmological-constant) Proposition 6.3) as a Čech 1-cocycle of cross-level rescaling factors, with suggestive combinatorial match to the Kobayashi-Maskawa CP-phase count of [Baryogenesis](/derivations/cosmology/baryogenesis) Proposition 3.2 (Step 6).

## Statement

**Proposition 1.1 (Operational completeness of the sheaf-level description).** *The observer-indexed sheaf of manifold-with-boundary stalks ([Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Definition 1.1) is operationally complete: every testable consequence of any hypothetical geometric extension $M_A \hookrightarrow M_A^{\text{ext}}$ past the horizon is already captured by the sheaf's integer horizon data.*

*Argument.* By [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 4.5, $A$'s state transitions at any tick depend on content beyond $\partial M_A$ only through the integer horizon-crossing record on $\partial M_A$. Continuous variations of that exterior content that preserve the integer record produce no observable effect in $A$. This holds for every observer. Any hypothetical geometric extension adds ontological content — new bulk points, new smooth structure past the horizon — whose continuous character is exactly what cancels. No observer's dynamics distinguishes the extended framework from the unextended one. The sheaf-level categorical structure already encodes the full observable content. $\square$

*Remark.* This promotes the framework's manifold-with-boundary commitment from a choice among alternatives to the operationally sharp description. It is not that the framework *refuses* to extend stalks; it is that extending them would be operationally vacuous.

**Main Theorem (Antipodal sheaf morphism).** *For each observer $A$ at bootstrap level $n$, there exists a canonical antipodal inversion morphism $I_A$ in the observer-indexed sheaf, with the following structural consequences:*

- **(T1) Partner identification.** *Partner worldlines $\gamma_B^{(A)}$ in $M_A$ terminating null-tangent at $\partial M_A$ are identified, via the sheaf's restriction maps, with the self-worldlines of peer observers on the other side of the antipodal pairing — the partner-line boundary data is the trace of this sheaf-level identification.*
- **(T2) Thesis A ↔ Thesis A' unitary realization.** *The unitary equivalence of the time-like crossing record $R_{\partial M_A}$ and the space-like interior configuration $K_\Xi$ ([Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Proposition 3.2) is implemented by $I_A$ as an explicit sheaf morphism.*
- **(T3) Möbius / Chern–Simons equivariance.** *The horizon's conformal $S^2$ carries an $\mathrm{PSL}(2, \mathbb{C})$ automorphism group. The framework's horizon Chern–Simons theory ([Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap) Propositions 2.4–2.5) is equivariant under its arithmetic subgroup $\mathrm{SL}(2, \mathbb{Z})$, with $I_A$ realizing a distinguished involutive element.*
- **(T4) Cross-level obstruction cocycle.** *Same-level antipodal morphisms compose consistently within a single bootstrap level. Cross-level morphisms require rescaling by the level-ratio $L_n / L_m$. The family $\{L_m / L_n\}$ forms a Čech 1-cocycle on the bootstrap-graded observer category; this cocycle is the concrete form of the abstract $\Lambda$-hierarchy obstruction class of [Cosmological Constant](/derivations/cosmology/cosmological-constant) Proposition 6.3.*

## Derivation

### Step 1: The Sheaf-Level Setting

The observer-indexed sheaf $M: \mathbf{Obs}^{\text{op}} \to \mathbf{LorPatch}$ ([Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Definition 1.2) assigns to each observer $A$ its projection $M_A$ — a dS static patch with boundary $\partial M_A$ — and to each Type III relation $I_{AB}$ a restriction morphism $\rho_{AB}$ identifying the portions of $M_A$ and $M_B$ that share the relation.

Under Proposition 1.1 (operational completeness), all observational content of the framework lives in this sheaf. Any geometric structure that would extend beyond individual stalks — antipodal patches, continuations of partner worldlines, bulk beyond horizons — is either (a) encoded already at the sheaf level via the shared horizon's integer data, or (b) operationally invisible. This derivation works entirely at level (a).

**Remark 1.2 (Geometric interpretation vs. commitment).** *Standard $\mathrm{dS}_4$ geometry has an antipodal involution $X \mapsto -X$ mapping each static patch to its antipode, with a shared bifurcate Killing horizon as fixed locus [Hawking–Ellis 1973, §5.2]. This geometric picture serves as an **interpretation** of the sheaf-level structure derived below — a consistency check that the categorical claims have a well-behaved geometric home. The derivation does not commit to extending any stalk into this geometric home; by Proposition 1.1, it cannot need to. Readers may find the geometric interpretation useful for intuition; the formal content is the sheaf morphism.*

### Step 2: The Antipodal Morphism

**Definition 2.1 (Antipodal peer and morphism).** *Let $A$ be an observer at bootstrap level $n$. The **antipodal peer** $A'$ of $A$ is a same-level observer (bootstrap level $n$, same de Sitter radius $L_A$) whose horizon $\partial M_{A'}$ is identified with $\partial M_A$ under the sheaf's restriction maps — that is, $A$ and $A'$ share the same horizon. The **antipodal morphism** $I_A$ is a sheaf automorphism swapping $(A, M_A)$ and $(A', M_{A'})$ while fixing the shared-horizon data pointwise.*

*Remark (Identification with the coherence dual).* *The antipodal peer $A'$ has the same period (same bootstrap level $\Rightarrow$ same de Sitter radius $\Rightarrow$ same rest frequency), opposite charges (forced by the sheaf morphism's swap combined with Noether charge conservation at pair creation), and conjugate self/non-self boundaries (automatic from stalk exchange). These are the defining properties of the **coherence-dual** pair in [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs) (Theorem 2.1, Theorem 3.1, Proposition 4.1). The antipodal peer is therefore not a new structural posit — it is the already-derived coherence-dual, viewed from the sheaf-morphism side rather than the pair-creation side.*

**Proposition 2.2 (Properties of $I_A$).** *The antipodal morphism $I_A$ satisfies:*

1. *$I_A^2 = \mathrm{id}$ (involution)*
2. *$I_A$ fixes the integer crossing record on $\partial M_A = \partial M_{A'}$ pointwise*
3. *$I_A$ swaps partner worldlines in $M_A$ with corresponding self-worldlines in $M_{A'}$ (and vice versa)*
4. *The composition $I_A \circ I_{A'} = \mathrm{id}$ on the shared-horizon data*

*Argument.* Properties (1)–(4) are abstracted from the standard $\mathrm{dS}_4$ antipodal involution's action restricted to the shared Killing horizon. Crucially, the sheaf-level claims only concern the shared-horizon content (integer residue per Corollary 4.5) plus the pairing of stalks; the full geometric involution is not invoked. Property (1): antipodal pairing is an involutive relation. Property (2): the horizon's integer data is invariant under the pairing by construction. Property (3): partner worldlines in $M_A$ terminate null-tangent at $\partial M_A$ and are, under the sheaf's restriction maps, identified with self-worldlines of observers sharing those termini — $I_A$ makes this identification explicit. Property (4): $A$ is the antipodal peer of $A'$, so $I_{A'}$ is the inverse pairing of $I_A$, and the composition on shared-horizon data is trivial. $\square$

**Proposition 2.3 ($I_A$ is the CPT operator).** *The antipodal morphism $I_A$ equals the framework's CPT operator as defined in [CPT Theorem](/derivations/particles/cpt-theorem) Theorem 4.1 Step A. Explicitly, its action on observer structure is:*

$$I_A: (\Sigma, I, \mathcal{B}, Q, \omega, s, t, \mathbf{x}) \;\mapsto\; (\Sigma, I, \bar{\mathcal{B}}, -Q, \omega, s, -t, -\mathbf{x})$$

*with state space $\Sigma$, Noether invariant $I$, rest frequency $\omega$, and spin $s$ preserved; boundary $\mathcal{B}$ mapped to its conjugate $\bar{\mathcal{B}}$; charges reversed; time and spatial coordinates inverted. The C, P, T components decompose as:*

- ***C (charge conjugation):*** *the stalk exchange $A \leftrightarrow A'$, which by [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs) Theorem 3.1 reverses all Noether charges and swaps boundaries.*
- ***P (parity):*** *the angular antipodal reflection on the horizon $S^2$ (Proposition 5.1 below) — spatial reflection of the winding structure in three dimensions, matching [CPT Theorem](/derivations/particles/cpt-theorem) Definition 2.1.*
- ***T (time reversal):*** *the time-reversal component on the horizon $S^1$ (Proposition 5.1 below) — loop-closure phase conjugation, matching [CPT Theorem](/derivations/particles/cpt-theorem) Definition 3.1.*

*Proof.* Compare Proposition 2.2's properties of $I_A$ (involution, stalk exchange, boundary conjugation) and Proposition 5.1's explicit horizon action (angular antipodal reflection on $S^2$ composed with time reversal on $S^1$) with [CPT Theorem](/derivations/particles/cpt-theorem) Theorem 4.1 Step A. The observer-structure action is identical on every coordinate. Since each transformation is defined by its action on observer structure (the framework's CPT theorem gives definitions via this action), and both morphisms agree on that action, they are equal as operators. $\square$

**Remark 2.4 (Uniqueness).** *For a given horizon $\partial M_A$ shared between $A$ and $A'$, the antipodal morphism $I_A$ is unique: the CPT operator on the framework's observer structure is uniquely defined by its action in Proposition 2.3, and any sheaf automorphism implementing the same action is the same operator.*

**Remark 2.5 (Multiplicity compatibility).** *[Multiplicity Theorem 7.2](/derivations/minimal-observer/multiplicity) forces at least 3 observers. Under the identification with coherence-dual pairs, the antipodal-pair structure is already derived at [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs) (Theorem 2.1 + 3.1): observers arise in dual pairs with equal mass and opposite charges. In a minimal 3-observer configuration $\{A, A', C\}$ where $(A, A')$ are coherence-dual (hence antipodal), the third observer $C$ must either be its own coherence-dual (a self-dual neutral — photon or graviton, per [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs) Corollary 3.2 with all charges zero) or participate in a second pair forcing minimum multiplicity to 4. The framework commits to self-dual neutrals existing, so minimum multiplicity 3 is licensed.*

### Step 3: Partner Worldlines Identified Across Paired Stalks

[Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Remark 3.3 currently describes partner worldlines $\gamma_B^{(A)}$ in $M_A$ as prescribed timelike curves with null-tangent endpoints at $\partial M_A$. Under the antipodal morphism, this prescription is reinterpreted as a sheaf-level identification.

**Proposition 3.1 (Partner-line identification).** *For same-level peer observers $A, B$ sharing a horizon segment, the partner worldline $\gamma_B^{(A)} \subset M_A$ is identified with the self-worldline $\gamma_B \subset M_B$ via $I_A$. Specifically: $\gamma_B^{(A)}$'s null-tangent endpoint at $\partial M_A$ is the image under $I_A$ of $\gamma_B$'s own worldline-origin endpoint in $M_B$.*

*Argument.* In $M_B$, $B$'s self-worldline $\gamma_B$ passes through the origin $r = 0$. In $M_A$, $B$ appears as the partner worldline $\gamma_B^{(A)}$ terminating null-tangent at $\partial M_A$. The shared-horizon data on $\partial M_A = \partial M_B$ must agree between A's and B's perspectives (sheaf restriction compatibility). By uniqueness (Remark 2.3), the sheaf automorphism implementing this agreement is $I_A$. Hence $I_A(\gamma_B^{(A)}) = \gamma_B$ on the shared-horizon data. $\square$

**Corollary 3.2 (Boundary prescription upgrades to theorem).** *The prescription "partner worldlines terminate null-tangent at $\partial M_A$" ([Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Remark 3.3) becomes a theorem when sharpened by the sheaf-level identification: partner worldlines are not independently prescribed; they are the sheaf-level image of peer observers' self-worldlines under the antipodal morphism. The "boundary data" is a consequence of the pairing, not a free input.*

### Step 4: Thesis A ↔ Thesis A' Unitary via $I_A$

[Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) asserts that $A$'s state is determined by either the time-like record $R_\Sigma$ on an enclosing surface (Thesis A) or the space-like configuration $K_\Xi$ on a Cauchy slice (Thesis A'). Their unitary equivalence (Proposition 3.2 there) has an explicit construction flagged as Open Gap 2.

**Proposition 4.1 ($I_A$ implements the Thesis A ↔ Thesis A' unitary).** *For same-level antipodal peers $A, A'$, the sheaf morphism $I_A$ — which by Proposition 2.3 is the CPT operator — provides an explicit unitary $U: R_{\partial M_A}(A, t_k) \to K_{\Xi'}(A', t_k)$, where $\Xi' \subset M_{A'}$ is a Cauchy slice of the peer's stalk.*

*Argument.* Three ingredients combine:

(a) By [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 4.5, $R_{\partial M_A}$ consists entirely of integer data on the shared horizon $\partial M_A = \partial M_{A'}$ — precisely the fixed-point data of $I_A$.

(b) Thesis A' applied to $A'$ in its own projection $M_{A'}$: the space-like configuration $K_{\Xi'}(A', t_k)$ on a Cauchy slice $\Xi' \subset M_{A'}$ is sufficient to determine $A'$'s state at $t_k$.

(c) By Proposition 2.3, $I_A$ acts on observer structure as CPT. [CPT Theorem](/derivations/particles/cpt-theorem) Theorem 4.1 establishes that CPT is an exact symmetry of the coherence Lagrangian, and Step A there specifies its action on observer structure (matching Proposition 2.3). Applying CPT to $A$'s data at $t_k$ produces $A'$'s data at $t_k$ with $t \to -t$ and $\mathbf{x} \to -\mathbf{x}$. Restricting to the horizon's fixed-point data (which CPT preserves per Corollary 4.5) and then to the antipodal Cauchy slice gives the unitary map $U$.

The map is invertible via $I_{A'} = I_A^{-1} = I_A$ (CPT is its own inverse), giving a genuine unitary.

*Rigor.* *Rigorous modulo the inherited framework commitments of the CPT theorem. [CPT Theorem](/derivations/particles/cpt-theorem) has rigor level formal; its status is provisional because it inherits speed-of-light-s1 through upstream. Proposition 4.1 inherits the same status: the unitary is CPT acting on observer structure, supplying Open Gap 2 of [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) with an explicit construction rather than a novel one.*

**Remark 4.2 (Time-space duality is antipodal duality).** *The Thesis A / Thesis A' distinction (time-like boundary record vs. space-like interior configuration) is, from this perspective, the same duality as $A$ / $A'$. "Describing A via crossings on its horizon" and "describing $A'$ via configuration on its Cauchy slice" are two views of the same integer horizon data — related by the antipodal morphism. The framework's two descriptions of physics — processes over time and states at an instant — are the natural projections of the single sheaf-level structure onto its two antipodal stalks.*

### Step 5: Möbius Structure and Chern–Simons Equivariance

The horizon $\partial M_A$ has topology $S^2 \times S^1$ ([Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Proposition 3.1 plus Axiom 3's time-compactification). The $S^2$ factor carries a conformal structure inherited from the dS angular metric.

**Proposition 5.1 (Möbius automorphism group of the horizon).** *The conformal $S^2$ of $\partial M_A$ admits the orientation-preserving conformal automorphism group $\mathrm{PSL}(2, \mathbb{C})$ (the Möbius group). Combined with $T_A$-periodic translations on the $S^1$ factor, the full horizon automorphism group is $\mathrm{PSL}(2, \mathbb{C}) \times U(1)$. The antipodal morphism $I_A$ restricted to shared-horizon data corresponds to (angular antipodal reflection on $S^2$) composed with (time-reversal on $S^1$) — a distinguished involutive element of this group.*

*Argument.* Classical conformal geometry: $\mathrm{Conf}^+(S^2) = \mathrm{PSL}(2, \mathbb{C})$ [Schottenloher 1997, §2]. The dS static-patch metric restricted to the Killing horizon induces the round conformal structure on the $S^2$ factor [Anderson–Chruściel 2005]. $I_A$'s action is the sheaf-level abstraction of the geometric antipodal involution, which acts on horizon data as stated. $\square$

**Proposition 5.2 (Chern–Simons equivariance).** *The framework's horizon Chern–Simons theory — with integer level ratios $k_1 : k_2 : k_3 = 4 : 2 : 1$ per [Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap) Proposition 2.4 — is equivariant under $\mathrm{SL}(2, \mathbb{Z})$ (the arithmetic subgroup of $\mathrm{PSL}(2, \mathbb{C})$) via modular transformations on the boundary torus $T^2$.*

*Argument sketch.* The Chern–Simons partition function on a 3-manifold with $T^2$ boundary is a modular form under $\mathrm{SL}(2, \mathbb{Z})$ [Witten 1989, §4]. CS quantization at integer level produces Verlinde characters that transform under $\mathrm{SL}(2, \mathbb{Z})$ via specific modular matrices [Moore–Seiberg 1989]. For the framework's CS levels (finite Verlinde algebras at $k_n = 4m, 2m, m$), the modular equivariance is explicit; $I_A$'s action corresponds to a specific $\mathrm{SL}(2, \mathbb{Z})$ element (Open Gap 3).

*Rigor.* *Semi-formal. Proposition 5.1 is rigorous classical conformal geometry. Proposition 5.2 is rigorous as a structural claim (CS modular theory is classical); the identification of $I_A$ with a specific $\mathrm{SL}(2, \mathbb{Z})$ element is pending explicit computation.*

### Step 6: Cross-Level Obstruction as Sheaf Cocycle

**Proposition 6.1 (Same-level antipodal composition).** *For observers $A, B$ at the same bootstrap level $n$ (both with de Sitter radius $L_n$) and their respective antipodal peers $A', B'$, the sheaf morphisms $I_A$ and $I_B$ compose consistently: their composition is another automorphism within the level-$n$ sub-sheaf, with no rescaling obstruction.*

*Argument.* Same-level observers' stalks have identical de Sitter radii. The sheaf's level-$n$ sub-sheaf has a single intrinsic scale $L_n$; the antipodal morphisms are isometries within this scale. Compositions remain isometries. $\square$

**Proposition 6.2 (Cross-level rescaling).** *For observers $A$ at level $n$ and $B$ at level $m \neq n$ with $L_n \neq L_m$, the antipodal morphisms $I_A$ and $I_B$ act on sub-sheaves with different intrinsic scales. Any cross-level identification on shared-horizon data requires rescaling by the level-ratio $L_n / L_m$.*

*Argument.* Level-$n$ and level-$m$ sub-sheaves have distinct intrinsic scales (de Sitter radii $L_n, L_m$ respectively). The sheaf's level-indexing is not conformally flat: cross-level restriction maps are not isometries but conformal maps with rescaling factor. This rescaling is the minimal modification needed for cross-level sheaf compatibility. $\square$

**Proposition 6.3 (Obstruction cocycle).** *The family $\{L_m / L_n\}$ indexed by ordered pairs of bootstrap levels forms a Čech 1-cocycle on the bootstrap-graded observer category. This cocycle is the concrete realization of the abstract $\Lambda$-hierarchy obstruction class identified by [Cosmological Constant](/derivations/cosmology/cosmological-constant) Proposition 6.3.*

*Argument sketch.* A sheaf's obstruction class is, in Čech cohomology terms, the non-trivial 1-cocycle formed by the transition functions between local identifications [Hartshorne 1977, Ch. III]. Here the local identifications are the antipodal morphisms $I_{\mathcal{O}_n}$ per level; cross-level transitions require rescaling by $L_m / L_n$. The cocycle on the bootstrap-level graph is:

$$c(m, n) = \log(L_m / L_n).$$

Sums around cycles: zero for same-level cycles (trivial rescaling) and $\log(L_0 / L_N)$ for the Planck-to-cosmic cycle. The observed $\Lambda$-hierarchy $\log(\Lambda_0 / \Lambda_N) \approx 280$ becomes $2 \log(L_N / L_0) \approx 280$, i.e., $L_N / L_0 \approx 10^{60}$ — exactly the Planck-to-cosmic-horizon scale ratio. The hierarchy is not a fine-tuning but the integral of this sheaf cocycle.

*Rigor.* *Structural identification. Proposition 6.3 names the right categorical object (Čech 1-cocycle on the bootstrap-graded observer category) but does not derive the quantitative cocycle values from first principles. A first-principles match requires Gaps 4–5.*

**Remark 6.4 (Suggestive combinatorial match to the KM CP-phase count).** *[Baryogenesis](/derivations/cosmology/baryogenesis) Proposition 3.2 notes that an $N_g \times N_g$ unitary mixing matrix has $(N_g - 1)(N_g - 2)/2$ irremovable CP-violating phases; at $N_g = 3$ (the framework's value, from $\dim SO(3) = 3$) there is exactly one. The framework has four division-algebra bootstrap levels ($\mathbb{R}, \mathbb{C}, \mathbb{H}, \mathbb{O}$) and hence three cross-level transitions on which the rescaling cocycle is non-trivial. The combinatorics match: three bootstrap transitions $\leftrightarrow$ three generations $\leftrightarrow$ one irremovable CP phase. Under Proposition 2.3 ($I_A = \mathrm{CPT}$), the cocycle's antisymmetric part is the natural candidate for a framework-level realization of the KM CP phase. This is a research target rather than a derived result: making the connection precise requires (i) the Čech cohomology formalization of Open Gap 4, (ii) a complex structure on the cocycle (currently it is real-valued via $\log(L_m/L_n)$) connecting to CP phases, (iii) explicit identification of the cocycle's three independent values with the three generation-transition structures. If the connection holds, the $\Lambda$-hierarchy and the KM CP phase would be different projections of a single sheaf cocycle — a genuinely novel structural unification. Flagged as Gap 5 below.*

## Consistency Model

**Model.** *Three level-1 minimal observers $A, B, C$ with period $T_1$ and de Sitter radius $L_1 = c T_1 / 2$. The sheaf assigns to each observer a dS static patch stalk $M_\bullet$ bounded by horizon $\partial M_\bullet$ at $r = L_1$. Antipodal pairing: $A' = B$ (so $B$ is $A$'s antipodal peer). The third observer $C$ is at angular position not antipodal to either $A$ or $B$.*

**Checks:**

- **Multiplicity.** Three distinct observers — consistent with [Multiplicity Theorem 7.2](/derivations/minimal-observer/multiplicity).
- **Coherence-dual pairing.** $A$ and $B$ form a coherence-dual pair by Proposition 2.3's identification: they have equal mass (same bootstrap level), opposite charges (from the stalk exchange $I_A = \mathrm{CPT}$ + Noether conservation), and conjugate boundaries.
- **Self-dual neutral.** $C$ is its own coherence-dual: all Noether charges zero, so [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs) Corollary 3.2 (with $Q = 0$) gives $C = \bar{C}$. Physically this corresponds to a neutral mediator like the framework's photon or graviton. No fourth observer is required.
- **Pairwise partners.** From $A$'s perspective: $B$ appears as a partner worldline $\gamma_B^{(A)}$ in $M_A$; by Proposition 3.1 this is identified via $I_A$ with $B$'s self-worldline $\gamma_B$ in $M_B$. $C$ appears as a second partner worldline $\gamma_C^{(A)}$ at a non-antipodal angular position; $I_A(\gamma_C^{(A)})$ lands on $C$'s image in $M_B$, which must by sheaf consistency be $C$'s appearance in $M_B$ as one of $B$'s partner worldlines. Self-duality of $C$ ensures this sheaf constraint is satisfied by a single observer at a consistent angular position.
- **CPT action.** $I_A$ acts as CPT: it swaps $A \leftrightarrow B$, reverses their charges (consistent with C), reflects angular positions on $\partial M_A$ (consistent with P), and reverses time orientation along $\gamma_A, \gamma_B$ (consistent with T). $C$ is fixed up to angular reflection (P acting on its horizon position) since it's self-dual under C and T.

The model is consistent with minimum multiplicity 3 and with the framework's derived commitments.

## Rigor Assessment

**Rigorous (classical mathematics plus framework commitments):**
- Proposition 1.1 (operational completeness): direct from Corollary 4.5.
- Proposition 2.3 ($I_A$ is the CPT operator): direct comparison with [CPT Theorem](/derivations/particles/cpt-theorem) Theorem 4.1 Step A; each C/P/T component matches a framework-derived structure.
- Proposition 5.1 (Möbius structure on horizon): classical conformal geometry.
- Proposition 6.1 (same-level composition): same-scale sub-sheaf is isometric.
- Proposition 6.2 (cross-level rescaling requirement): direct from distinct de Sitter radii.

**Semi-formal (rigorous modulo upstream semi-formal/provisional results):**
- Proposition 2.2 (properties of $I_A$): inherited from Proposition 2.3's identification with CPT; the properties match the CPT theorem's Step A action.
- Proposition 3.1 (partner-line identification): rigorous given Propositions 2.2–2.3 and the sheaf's restriction structure.
- Proposition 4.1 ($I_A$ implements A ↔ A' unitary): inherits the status of [CPT Theorem](/derivations/particles/cpt-theorem) Theorem 4.1 (provisional via speed-of-light-s1). The unitary map flagged as Open Gap 2 of [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) is supplied by CPT acting on observer structure.
- Proposition 5.2 (CS equivariance): CS modular theory is classical; identification of $I_A$ with specific $\mathrm{SL}(2, \mathbb{Z})$ element pending.
- Corollary 3.2 (boundary prescription upgrades to theorem): follows from Proposition 3.1.

**Structural identification (awaiting quantitative match):**
- Proposition 6.3 (obstruction cocycle): names the right object; first-principles derivation of $L_N/L_0 \approx 10^{60}$ from bootstrap structure remains open.
- Remark 6.4 (KM CP-phase count match): combinatorial coincidence flagged as a research target; not a derived claim.

## Open Gaps

1. **Upstream closure of [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Open Gap 2.** Proposition 4.1 supplies the explicit unitary $U = \mathrm{CPT}$, but its rigor depends on (a) promoting Theses A and A' from semi-formal to rigorous in the upstream derivation, and (b) the [CPT Theorem](/derivations/particles/cpt-theorem)'s rigor inheriting from resolution of speed-of-light-s1. Both are upstream tasks rather than content this derivation must supply. *Difficulty: MODERATE (inheritance only).*

2. **Identification of $I_A = \mathrm{CPT}$ with specific $\mathrm{SL}(2, \mathbb{Z})$ element.** Proposition 5.2 places $I_A$ in the modular group; which specific element (S-inversion $\tau \to -1/\tau$, charge conjugation C, or product) is not yet pinned down. Resolution via explicit computation of CS modular matrices at the framework's levels matching $I_A$'s action on Verlinde characters. Connects to [Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap) Open Gap 1 (absolute $m$). *Difficulty: MODERATE.*

3. **Čech cohomology on the observer category.** Proposition 6.3 identifies the obstruction class as a Čech 1-cocycle. Formalizing requires: (a) specifying the cover (observer-pairs with shared/adjacent horizons), (b) computing the cohomology, (c) matching to the $\Lambda$-hierarchy. Connects to [Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Open Gap 3 (sheaf property) and [Cosmological Constant](/derivations/cosmology/cosmological-constant) Open Gap 2. *Difficulty: HARD.*

4. **Quantitative match to observed $\Lambda$.** Proposition 6.3 predicts $\log(\Lambda_0/\Lambda_N) = 2 \log(L_N/L_0)$; matching $\sim 280$ requires $L_N/L_0 \sim 10^{60}$. Deriving this from bootstrap structure (4 division-algebra levels, 3 generations, CS levels $4:2:1$) is the quantitative target. Connects to [Coupling Constants](/derivations/cosmology/coupling-constants) and [Mass Hierarchy](/derivations/particles/mass-hierarchy). *Difficulty: HARD.*

5. **KM CP-phase ↔ cocycle connection.** Remark 6.4 notes a suggestive combinatorial match: 3 bootstrap transitions ↔ 3 generations ↔ 1 irremovable CP phase (per [Baryogenesis](/derivations/cosmology/baryogenesis) Proposition 3.2). Making this precise requires: (a) a complex structure on the currently-real-valued cocycle $c(m,n) = \log(L_m/L_n)$; (b) explicit identification of the three independent cocycle values with the three generation-transition structures; (c) matching the cocycle's antisymmetric part to the Jarlskog-like CP-violating invariant. If established, the $\Lambda$-hierarchy and the KM CP phase become different projections of a single sheaf cocycle. *Difficulty: HARD (research target, not a derived claim).*
