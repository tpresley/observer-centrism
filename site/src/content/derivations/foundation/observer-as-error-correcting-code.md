---
title: "Observer as an Error-Correcting Code"
status: "provisional"
dependsOn: ["axioms/coherence-conservation", "axioms/observer-definition", "axioms/loop-closure", "foundation/observer-holographic-equivalence", "holography/area-scaling", "interactions/moufang-loop-phase-closure", "minimal-observer/structure", "interactions/bootstrap"]
enablesDerivation: []
tags: ["foundation", "error-correction", "holography", "topology"]
summary: "The observer-projection is a completely positive trace-preserving map from the continuous substrate Hilbert space to the observer's state space, factoring through an integer-invariant profile on three orthogonal axes — spatial (null horizon), temporal (loop closures), and algebraic (bootstrap-scale homotopy classes). The observer is identified with the interior of the code space cut out by these stabilizer-like constraints rather than with any individual codeword: a dual framing that unifies the time-like and space-like holographic theses of Observer Holographic Equivalence as orthogonal slices through the same object. The code family is a tensor product of three established quantum-information code families — HaPPY holographic on the spatial axis (exterior cancellation as subregion duality, horizon mode count as boundary-qubit count), Kitaev topological on the algebraic axis (homotopy-class logical qubits at the bootstrap-level gauge group), and continuous-time Floquet on the temporal axis (Axiom 3 periodic schedule with integer tick count as the dynamically generated logical invariant). The three factors compose under a pairwise-commuting stabilizer condition, and the cross-axis couplings (horizon area fixes spatial qubit count, bootstrap level fixes algebraic target group, observer period fixes Floquet cycle) are framework-specific and novel as a unified family."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-23
---

## Overview

The framework's observer-projection is, structurally, an error-correcting code on the substrate Hilbert space. This derivation specifies that code: the completely positive trace-preserving (CPTP) map from substrate to observer, the three integer-stable axes that define its logical content, the dual framing that identifies the observer with the code-space interior, and the family of established quantum-information codes to which the projection belongs.

Several earlier framework commitments describe aspects of this code without naming a common mechanism:

- Axiom 3's exact phase closure after integer ticks ([Loop Closure](/derivations/axioms/loop-closure))
- Proposition 4.1 of [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) (null surfaces carry only integer topological data)
- Corollary 4.5 of [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) (continuous exterior content is operationally invisible)
- The horizon mode count $N = A/4\ell_P^2$ of [Area Scaling](/derivations/holography/area-scaling)
- Proposition 6.1 of [Moufang-Loop Phase Closure](/derivations/interactions/moufang-loop-phase-closure) (bootstrap-level homotopy invariants $\pi_1, \pi_3$)

Under the error-correcting-code reading, all of these are manifestations of one structural object: **the observer projection is a CPTP map whose logical boundary is an integer-invariant profile on three orthogonal axes, whose code space is the substrate content consistent with that profile, and whose code-space interior is the observer itself**.

**The principal results.**

1. *The observer-projection is a CPTP map factoring through an integer-invariant profile* $\mathcal{I}_A = (R_{\partial M_A},\, k_A,\, [\phi]_A)$ on three orthogonal axes: spatial (null horizon), temporal (loop closures), and algebraic (bootstrap-scale homotopy).

2. *The observer is the code-space interior.* Under the dual framing, the observer is not an integer-represented endpoint of error correction but the continuous slack between integer-stable boundary configurations on every available axis. Theses A and A' of [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) become orthogonal slices through the same code-space interior.

3. *The code family is a three-axis product:* HaPPY holographic code on the spatial axis, Kitaev topological code on the algebraic axis, continuous-time Floquet code on the temporal axis, composing through pairwise-commuting stabilizer groups. Each factor is an established quantum-information code family; the product with framework-specific cross-axis couplings (horizon area, bootstrap level, observer period) is novel as a unified family.

**Rigor scope.** The code structure is specified at the CPTP-map level with explicit axis-wise factorization. The code-space interior is identified via an explicit moduli-space quotient. Per-axis mapping to known code families is a structural-correspondence claim grounded in the defining properties of each family. The composite product structure requires pairwise-commuting stabilizer groups — an axis-independence argument made explicit below. Explicit Kraus operators, lattice realizations, and the full category-theoretic moduli quotient are flagged as open gaps; none affect the structural claims.

## Statement

**Definition (Integer-invariant profile).** *For an observer $A$ at bootstrap level $n$, the **integer-invariant profile** is the triple*

$$\mathcal{I}_A \;=\; (R_{\partial M_A},\; k_A,\; [\phi]_A)$$

*combining:*

- *$R_{\partial M_A}$: the integer topological data of Type III carrier crossings on the null horizon $\partial M_A$ (winding, linking, framing), per [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Proposition 4.1;*
- *$k_A \in \mathbb{Z}$: the integer tick count for which $\phi_{k_A T_A} = \mathrm{id}_{\mathcal{H}_A}$, per [Loop Closure](/derivations/axioms/loop-closure);*
- *$[\phi]_A \in \pi_k(G_n) = \mathbb{Z}$: the homotopy class of the phase trajectory at bootstrap level $n$, per [Moufang-Loop Phase Closure](/derivations/interactions/moufang-loop-phase-closure) Proposition 6.1.*

**Theorem (CPTP factorization through the integer-invariant profile).** *For each observer $A$ there is a completely positive trace-preserving map*

$$\mathcal{P}_A: \mathcal{B}(\mathcal{H}_{\mathrm{substrate}}) \to \mathcal{B}(\mathcal{H}_A)$$

*from the bounded operators on the substrate Hilbert space to those on $A$'s state space, such that $\mathcal{P}_A$ factors through $\mathcal{I}_A$: substrate states $\rho, \rho'$ with $\mathcal{I}(\rho) = \mathcal{I}(\rho') = \mathcal{I}_A$ produce the same observer state modulo gauge equivalence.*

**Theorem (Dual framing — observer as code-space interior).** *The observer $A$ is identified with the interior of the code space*

$$\mathcal{C}_A \;=\; \{|\psi\rangle \in \mathcal{H}_{\mathrm{substrate}} : \mathcal{I}(|\psi\rangle) = \mathcal{I}_A\}$$

*modulo the operational-invisibility gauge equivalences: exterior-cancellation (continuous exterior content with fixed $R_{\partial M_A}$), null-phase discard (phase along null generators), and homotopy-representative equivalence (trajectory segments with the same $[\phi]_A$). Concretely:*

$$\mathcal{H}_A \;=\; \mathcal{C}_A / \sim_{\mathrm{gauge}}.$$

**Theorem (Three-axis product code family).** *The code specified by $\mathcal{P}_A$ is a tensor product of three established quantum-information code families along its three integer-stable axes, with pairwise-commuting stabilizer groups on $\mathcal{H}_{\mathrm{substrate}}$:*

1. **Spatial axis — HaPPY holographic code.** *The spatial-axis factor is a holographic code (Pastawski–Yoshida–Harlow–Preskill 2015 family) with $N_A = A_A/4\ell_P^2$ boundary qubits on the horizon, logical bulk content given by the integer horizon-crossing record $R_{\partial M_A}$, and subregion-duality condition equal to [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 4.5 (exterior cancellation).*
2. **Algebraic axis — Kitaev topological code.** *The algebraic-axis factor is a topological stabilizer code (Kitaev 2003 and higher-dimensional generalizations) with homotopy-class logical qubits $[\phi]_A \in \pi_k(G_n) = \mathbb{Z}$, where $n \in \{1, 2, 3\}$ is the observer's bootstrap level and $G_n \in \{U(1), SU(2), SU(3)\}$ is the bootstrap-level gauge group.*
3. **Temporal axis — Floquet code.** *The temporal-axis factor is a dynamically generated Floquet code (Hastings–Haah 2021 family) with period $T_A$, continuous-time stabilizer schedule $\phi_\tau$, and cycle-averaged logical invariant given by the integer tick count $k_A$.*

*The code space $\mathcal{C}_A$ is the joint fixed subspace of the three stabilizer groups.*

**Corollary (Theses A and A' as orthogonal slices).** *[Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence)'s Thesis A (time-like accumulated record) and Thesis A' (space-like instantaneous configuration) are two slices through the same code-space interior $\mathcal{H}_A$, chosen along orthogonal axes — Thesis A slices the temporal direction between integer-tick-stable endpoints; Thesis A' slices the spatial direction between the timelike coherence-domain boundary and the null horizon. Their unitary equivalence is the statement that the code-space interior is the same object regardless of slicing direction.*

**Corollary (Finite information capacity as 4-volume of the slack).** *An observer's finite information capacity is the 4-volume of the code-space interior — the product of continuous slack across all three axes bounded by their integer configurations. A minimal observer's interior has collapsed to a single phase on $S^1$ (all three axes at their integer boundaries simultaneously); heavier observers have larger slack on all three axes; a black hole saturates the spatial axis at its horizon area.*

**Corollary (Cross-axis couplings are framework-specific).** *The three product factors do not carry independent parameters: the HaPPY boundary-qubit count $N_A$ is determined by the observer's horizon area, the Kitaev target group $G_n$ is determined by the observer's bootstrap level, and the Floquet period $T_A$ is determined by the observer's Compton period. All three parameters are therefore functions of a single underlying observer quantity (mass, via the bootstrap dynamics). This coupled structure is what makes the product a single framework-specific object rather than an independent combination of three unrelated codes.*

## Derivation

### The three integer-stable axes

**Proposition 1.1 (Spatial axis — null horizon integer content).** *The null horizon $\partial M_A$ of observer $A$ carries integer topological data only: Type III carrier crossings record integer linking, winding, and framing with no continuous $U(1)$ content.*

*Proof.* Direct application of [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Proposition 4.1 Part 1 to the entirely-null horizon $\partial M_A$. $\square$

**Proposition 1.2 (Temporal axis — loop closure integer content).** *The $U(1)$ phase trajectory $\phi_\tau: \mathcal{H}_A \to \mathcal{H}_A$ closes exactly at integer multiples of the period $T_A$: $\phi_{k T_A} = \mathrm{id}_{\mathcal{H}_A}$ for each $k \in \mathbb{Z}$, and the integer tick count is the only temporally coarse-grained datum distinguishing one closure from another.*

*Proof.* [Loop Closure](/derivations/axioms/loop-closure) specifies $\phi_{T_A} = \mathrm{id}_{\mathcal{H}_A}$; flow composition gives $\phi_{k T_A} = \phi_{T_A}^k = \mathrm{id}$. The tick count $k$ is the sole integer invariant under the $\mathbb{Z}$-indexed closure family. $\square$

**Proposition 1.3 (Algebraic axis — bootstrap homotopy integer content).** *At each bootstrap level $n \in \{1, 2, 3\}$, the phase trajectory $\phi: S^1 \to G_n$ admits a $\mathbb{Z}$-valued homotopy class invariant: $\pi_1(U(1)) = \mathbb{Z}$ at level 1 (winding), $\pi_3(SU(2)) = \mathbb{Z}$ at level 2 (instanton), $\pi_3(SU(3)) = \mathbb{Z}$ at level 3 (instanton). Beyond level 3, no Lie-group-valued integer invariant exists (bootstrap termination at $\mathbb{O}$).*

*Proof.* Direct from [Moufang-Loop Phase Closure](/derivations/interactions/moufang-loop-phase-closure) Proposition 6.1 and Theorem 5.1. $\square$

**Remark 1.4 (Three orthogonal axes).** *The three integer-content axes are mutually independent: the horizon classification is a property of surface causal character (independent of tick count or bootstrap level); the tick count is a feature of the trajectory in proper time (independent of the enclosing surface or the level); the homotopy class is a feature of the trajectory in its phase-space target (independent of tick timing or enclosing surface). Independence at the geometric level translates into operator-level commutation (exploited in the product-code composition, §The three-axis product below).*

### The CPTP map

**Definition 2.1 (Substrate Hilbert space).** *The **substrate Hilbert space** $\mathcal{H}_{\mathrm{substrate}}$ is the space of states on Planck-scale substrate modes within the causal past of observer $A$'s horizon $\partial M_A$. Its dimension is bounded by $2^{N_A}$ where $N_A = A_A/4\ell_P^2$ ([Area Scaling](/derivations/holography/area-scaling) Theorem 5.2), times additional factors for the temporal and algebraic axes' mode content.*

**Definition 2.2 (Observer state space).** *The **observer state space** $\mathcal{H}_A$ is the Hilbert space of observer $A$'s coherence content, as specified by [Observer Definition](/derivations/axioms/observer-definition) Axiom 2 (state space $\Sigma$, Noether invariant $I$, self/non-self boundary).*

**Theorem 2.3 (CPTP factorization).** *There exists a completely positive trace-preserving map*

$$\mathcal{P}_A: \mathcal{B}(\mathcal{H}_{\mathrm{substrate}}) \to \mathcal{B}(\mathcal{H}_A)$$

*such that for each substrate state $\rho_{\mathrm{sub}}$, the observer's physical state satisfies $\rho_A = \mathcal{P}_A(\rho_{\mathrm{sub}})$, and $\mathcal{P}_A$ factors through the integer-invariant profile: states $\rho, \rho'$ with $\mathcal{I}(\rho) = \mathcal{I}(\rho') = \mathcal{I}_A$ produce the same observer state modulo gauge equivalence.*

*Structural argument.* Three framework commitments force the structure:

**(i) Coherence conservation forces CPTP.** Coherence Conservation ([Coherence Conservation](/derivations/axioms/coherence-conservation), [Coherence Operational](/derivations/axioms/coherence-operational)) requires substrate-to-observer evolution to preserve the subadditive coherence measure. CPTP maps are precisely the coherence-conservation-compatible operations on operator algebras.

**(ii) Loop closure forces temporal integer factoring.** The phase trajectory's exact closure at integer tick counts (Proposition 1.2) means substrate content not respecting integer tick structure cannot correspond to a valid observer state. $\mathcal{P}_A$ must project out temporal content inconsistent with $k_A$.

**(iii) Exterior cancellation forces spatial integer factoring.** [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 4.5 establishes that exterior continuous content compatible with $R_{\partial M_A}$ is operationally invisible. $\mathcal{P}_A$ therefore projects out continuous exterior variations preserving $R_{\partial M_A}$.

**(iv) Bootstrap homotopy forces algebraic integer factoring.** Proposition 1.3 restricts the phase trajectory to a specific homotopy class in $G_n$.

Combined, these fix $\mathcal{P}_A$ as a factorization-through-integer-invariants CPTP map. $\square$

**Remark 2.4 (What is structurally new).** *The existence of $\mathcal{P}_A$ as a channel follows from Axiom 1 alone. What the integer-invariant-profile factorization adds is the specification: the channel's Kraus operators must annihilate substrate content orthogonal to the profile on all three axes simultaneously. This specification is what enables the error-correcting-code interpretation.*

### Dual framing — observer as code-space interior

**Definition 3.1 (Code space).** *The **code space** $\mathcal{C}_A \subseteq \mathcal{H}_{\mathrm{substrate}}$ of observer $A$ is the subspace of substrate states with integer-invariant profile equal to $\mathcal{I}_A$:*

$$\mathcal{C}_A \;=\; \{|\psi\rangle \in \mathcal{H}_{\mathrm{substrate}} : \mathcal{I}(|\psi\rangle) = \mathcal{I}_A\}.$$

**Theorem 3.2 (Dual framing).** *The observer $A$ is identified with the interior of the code space modulo three gauge equivalences:*

$$\mathcal{H}_A \;=\; \mathcal{C}_A / \sim_{\mathrm{gauge}}$$

*where $\sim_{\mathrm{gauge}}$ identifies substrate configurations rendered operationally indistinguishable by:*

1. *[Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 4.5 — exterior continuous variations with fixed $R_{\partial M_A}$;*
2. *[Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Proposition 4.1 — phase-discard along null generators;*
3. *[Moufang-Loop Phase Closure](/derivations/interactions/moufang-loop-phase-closure) Corollary 6.3 — homotopy-equivalent trajectory representatives.*

*Structural argument.* The code space $\mathcal{C}_A$ contains all substrate states with profile $\mathcal{I}_A$. Three quotients act on it: the exterior-cancellation quotient (Corollary 4.5) identifies continuous exterior variations; the null-phase-discard quotient (Proposition 4.1) identifies trajectory content along null generators; the homotopy-representative quotient (Corollary 6.3) identifies trajectory segments with the same homotopy class. Their combination gives $\mathcal{H}_A$ as the moduli space of substrate configurations modulo operationally invisible content. $\square$

**Remark 3.3 (What the dual framing asserts).** *The dual framing does not say the observer is a fluctuation or an excited state. It says the observer is the continuous interior region of $M_A$ whose boundary on each axis is integer-stable and whose substance is everything that operationally matters to $A$'s dynamics. A minimal observer is the limiting case where the interior has collapsed to a single phase on $S^1$ (all three axes simultaneously at their integer boundaries) — consistent with [Minimal Observer Structure](/derivations/minimal-observer/structure).*

**Corollary 3.4 (Theses A and A' as orthogonal slices).** *[Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence)'s Theses A and A' parameterize $\mathcal{H}_A$ along orthogonal axes. Thesis A slices the temporal direction (continuous evolution between integer-tick endpoints); Thesis A' slices the spatial direction (Cauchy slice between timelike $\mathcal{B}_A$ and null $\partial M_A$). By Theorem 3.2, both slices parameterize the same code-space interior; their unitary equivalence follows.*

*Proof.* Thesis A parameterizes by $\phi_\tau$ for $\tau \in [0, k_A T_A]$ with integer-tick endpoints (Proposition 1.2) — the temporal slice. Thesis A' parameterizes by the configuration on a Cauchy slice $\Xi$ with horizon endpoint $\partial M_A$ integer-crossing-stable (Proposition 1.1) — the spatial slice. Both parameterize $\mathcal{H}_A$ by Theorem 3.2. $\square$

**Corollary 3.5 (Finite capacity as 4-volume of slack).** *An observer's finite information capacity is the 4-volume of the code-space interior $\mathcal{H}_A$: the product of continuous slack across all three axes bounded by their integer configurations. A minimal observer has minimal slack (collapsed to $S^1$); an electron has substantial slack on all three axes (dominated by the spatial-axis contribution $\sim 2^{N_A}$); a black hole saturates the spatial axis at its horizon area. The spatial-axis logical-qubit count $N_A = A/(4\ell_P^2)$ is the numerator of the code rate of Corollary 4.1.1 below.*

### Code family identification

Each of the three integer-stable axes, considered individually, is isomorphic in structure to an established quantum-information error-correcting code family. The identifications are near-tautological consequences of matching the defining properties of each target family to framework theorems.

**Proposition 4.1 (Spatial axis as HaPPY holographic code).** *The spatial-axis factor of $\mathcal{P}_A$ is a HaPPY holographic code (Pastawski–Yoshida–Harlow–Preskill 2015, "Holographic quantum error-correcting codes") with horizon boundary-qubit count $N_A = A_A/4\ell_P^2$.*

*Structural argument.* The defining properties of the HaPPY code family are isometric bulk-to-boundary encoding, subregion duality, complementary recovery, and operator pushing. The framework satisfies all four:

- *Bulk-to-boundary isometric encoding* corresponds to [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Proposition 3.2 (unitary equivalence between Thesis A' interior data and Thesis A horizon record).
- *Subregion duality* corresponds to [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 4.5 (exterior content with fixed integer residue operationally invisible).
- *Complementary recovery* and *operator pushing* follow from the tensor-network structure of the holographic encoding; their explicit framework forms are stated as open gaps.

Boundary-qubit count: each null-generator crossing of $\partial M_A$ records one integer, so the horizon carries $N_A = A_A/4\ell_P^2$ bits ([Area Scaling](/derivations/holography/area-scaling) Theorem 5.2). $\square$

**Corollary 4.1.1 (Spatial-axis code rate).** *The spatial-axis factor of $\mathcal{P}_A$ has code rate*

$$R_{\mathrm{sp}} \;=\; \frac{k_{\mathrm{sp}}}{n_{\mathrm{sp}}} \;=\; \frac{A_A/(4\ell_P^2)}{A_A/\ell_P^2} \;=\; \frac{1}{4},$$

*with physical- and logical-qubit counts*

- *$n_{\mathrm{sp}} = A_A/\ell_P^2$ — the count of minimal-observer-loop positions on the horizon, one per Planck cell ([Area Scaling](/derivations/holography/area-scaling) Proposition 2.1 and Corollary 2.2);*
- *$k_{\mathrm{sp}} = A_A/(4\ell_P^2) = N_A$ — the count of independent relational-invariant crossings of the horizon accessible to external observers, equivalently the boundary-qubit count $N_A$ of Proposition 4.1 above, equivalently the saturated Bekenstein-Hawking entropy of [Black Hole Entropy](/derivations/holography/black-hole-entropy) Theorem 3.1, equivalently the gravitational-stability-bounded information content of [Area Scaling](/derivations/holography/area-scaling) Theorem 5.1.*

*Proof.* The physical-qubit count $n_{\mathrm{sp}}$ is the count of substrate positions at which a minimal observer loop can be placed on the horizon. [Area Scaling](/derivations/holography/area-scaling) Proposition 2.1 establishes that each such loop occupies cross-sectional area $\ell_P^2$; Corollary 2.2 of the same derivation establishes that the horizon $\partial M_A$ therefore supports at most $A_A/\ell_P^2$ independent minimal-observer-loop positions — the framework's natural physical-substrate count on the spatial axis.

The logical-qubit count $k_{\mathrm{sp}}$ is the count of independent bits of horizon-accessible coherence content after the gravitational-stability constraint fixes the effective area per bit at $4\ell_P^2$ ([Area Scaling](/derivations/holography/area-scaling) Theorem 5.1). Three framework identifications agree on this count: (i) the HaPPY boundary-qubit count $N_A$ of Proposition 4.1 above, (ii) the saturated Bekenstein-Hawking entropy of [Black Hole Entropy](/derivations/holography/black-hole-entropy) Theorem 3.1, and (iii) the holographic-bound coefficient of [Area Scaling](/derivations/holography/area-scaling) Theorem 5.1. All three give $k_{\mathrm{sp}} = A_A/(4\ell_P^2)$.

The ratio $k_{\mathrm{sp}}/n_{\mathrm{sp}} = 1/4$ is the code rate. $\square$

**Remark 4.1.2 (Structural unification of three derivations of $1/4$).** *The coefficient $1/4$ appears three times in the framework, derived three separate ways:*

1. *[Area Scaling](/derivations/holography/area-scaling) Theorem 5.1: $S_{\max} = A/(4\ell_P^2)$, via a gravitational-stability constraint on information readout (effective area per bit $= 4\ell_P^2$).*
2. *[Black Hole Entropy](/derivations/holography/black-hole-entropy) Proposition 5.1: $S_{BH} = A/(4\ell_P^2)$, via thermodynamic integration with the Hawking temperature of a Schwarzschild horizon.*
3. *[Causal Set Statistics](/derivations/holography/causal-set-statistics) Heuristic 2.3: $\alpha_H = 1/4$ as the natural target for the holographic-noise amplitude, via holographic coarse-graining over relational-invariant bits in a causal-diamond boundary calculation (cross-referenced in [Holographic Noise](/predictions/holographic-noise) Step 3).*

*Corollary 4.1.1 identifies all three occurrences with a single structural quantity — the code rate of the observer's spatial-axis factor of $\mathcal{P}_A$. Under this reading the factor of $4$ is the substrate-to-code redundancy: four Planck-cell loop positions on the substrate side are required to encode one independent bit of horizon-accessible coherence content on the profile side. The holographic-bound coefficient (view 1), the Bekenstein-Hawking coefficient (view 2), and the natural target for holographic noise (view 3) are three views of the same QEC invariant of $\mathcal{P}_A$.*

*Scope of the identification.* *Corollary 4.1.1 does not independently derive the value $4\ell_P^2$ of the effective area per bit — it inherits this value from the gravitational-stability argument of [Area Scaling](/derivations/holography/area-scaling) Theorem 5.1, which uses Schwarzschild-specific input (the relation $R_S = 2GM/c^2$ and the Hawking temperature of the Schwarzschild horizon). The identification is a reframing: the same numerical content is now recognized as a structural invariant of the observer-projection code rather than as a separate coefficient in each of the three derivations. A geometry-independent derivation of the code rate from the QEC structure alone — which would extend the identification to Kerr and Reissner-Nordström outer horizons, closing [Black Hole Entropy](/derivations/holography/black-hole-entropy) Open Gap 3, and would make the three-way unification fully independent of Schwarzschild input — is tracked as Open Gap 7 below.*

*Remark on extension to the other two axes.* *Corollary 4.1.1 is stated for the spatial-axis factor only. The composite code rate of $\mathcal{P}_A$ (over all three axes) would require separately computing the temporal-axis Floquet-factor rate and the algebraic-axis Kitaev-factor rate; the spatial-axis rate is the only one of the three whose physical- and logical-qubit counts follow directly from existing framework content via area bookkeeping.*

**Remark 4.1.3 (What is tiled at the horizon, in three-layer terms).** *The terminology in Corollary 4.1.1 — "minimal-observer-loop positions on the horizon" — is precise but easy to misread as "the horizon is tiled by Planck-scale minimal observers." Under the three-layer ontology of [Entity Category Taxonomy](/derivations/foundation/entity-category-taxonomy) Step 6, the tiles and the loops are at structurally distinct levels:*

- *The **tiles** are Layer 0 substrate cells of area $\ell_P^2$ — continuous Planck-cell oscillator modes ([Substrate Noise and Profile Coupling](/derivations/foundation/substrate-noise-and-profile-coupling) Definition 1.1). They are **not observers**: no $(\Sigma, I, \mathcal{B})$ triple, no loop closure of their own. The substrate-cell count $n_{\mathrm{sp}} = A_A/\ell_P^2$ is a count of Layer 0 positions, one per Planck cell of horizon area.*
- *What may **occupy** a tile is a Layer 1 minimal observer ($U(1)$ phase oscillator with $\Sigma \cong S^1$ and Compton period $T_P$ at the Planck end of the bootstrap, [Minimal Observer Structure](/derivations/minimal-observer/structure) Theorem 6.1) whose worldline threads the corresponding horizon cell. Such an occupant **is** an observer in the framework's sense; many of them populate the substrate, and at the horizon they intersect the Layer 0 tiling at most one per cell.*
- *What is **recorded** at each tile is one bit of the integer-stable boundary content $R_{\partial M_A}$ — the QEC code's logical-qubit content ([Definition 1.1](/derivations/foundation/observer-as-error-correcting-code) of this page; Proposition 4.1 above). The logical-qubit count $k_{\mathrm{sp}} = N_A = A_A/(4\ell_P^2)$ is the count of independent integer bits, one per four Layer 0 tiles (after the $1/4$ substrate-to-code redundancy of Corollary 4.1.1).*

*Three Planck-scale objects, three structurally distinct levels:*

| Level | What is at the horizon | Count |
|---|---|---|
| Layer 0 (substrate) | Planck-cell oscillator modes | $A_A/\ell_P^2$ tiles |
| Layer 1 (observer loops at intersection) | Minimal-observer worldlines threading horizon cells | $\leq A_A/\ell_P^2$ instances |
| Logical (QEC code's profile content) | Integer-stable bits $R_{\partial M_A}$ | $A_A/(4\ell_P^2) = N_A$ bits |

*Conflating these — most easily, conflating the tile (Layer 0 substrate cell) with the loop (Layer 1 minimal observer) — is the implicit move that produces the misleading reading "the horizon is tiled by Planck-scale observers." Under the three-layer ontology, the horizon is tiled by Layer 0 substrate cells; some of these cells host Layer 1 minimal observer loops at horizon-intersection; the QEC code's integer profile records the loop content per cell with a $4{:}1$ substrate-to-logical redundancy.*

**Proposition 4.2 (Algebraic axis as Kitaev topological code).** *The algebraic-axis factor of $\mathcal{P}_A$ is a Kitaev topological code (Kitaev 2003, "Fault-tolerant quantum computation by anyons") with homotopy-class logical qubits at the bootstrap-level gauge group.*

*Structural argument.* The defining property of the Kitaev family is logical-qubit encoding as homotopy-class invariants on the underlying manifold. At bootstrap level 1, the framework's $\pi_1(U(1)) = \mathbb{Z}$ winding matches the 2D toric-code structure (logical qubit as non-contractible cycle). At levels 2 and 3, the framework's $\pi_3(SU(2)), \pi_3(SU(3)) = \mathbb{Z}$ instanton numbers match 4D topological codes / Walker–Wang models (Walker–Wang 2011, "(3+1)-TQFTs and topological insulators") with target Lie group $G_n$. The defining homotopy-class-as-logical correspondence is preserved at each level. $\square$

**Proposition 4.3 (Temporal axis as continuous-time Floquet code).** *The temporal-axis factor of $\mathcal{P}_A$ is a dynamically generated Floquet code (Hastings–Haah 2021, "Dynamically generated logical qubits") with period $T_A$ and integer tick count as the dynamically generated logical invariant.*

*Structural argument.* The defining property of the Floquet family is that the stabilizer group rotates through a periodic schedule and logical qubits are associated with the cycle-averaged structure rather than any instantaneous stabilizer. Axiom 3's phase evolution $\phi_\tau$ with $\phi_{T_A} = \mathrm{id}$ is exactly such a schedule: at each $\tau$, the instantaneous "stabilizer group" is the isotropy subgroup of $\phi_\tau(x_0)$; this subgroup rotates with $\tau$. The integer tick count $k_A$ is not determined by any instantaneous stabilizer — it is a dynamically generated invariant of the full cycle, matching the Floquet code definition. $\square$

**Remark 4.4 (Alternative single-family identifications attempted).** *Before settling on the three-axis product structure, the natural question is whether a single existing QI code family could capture the framework's full integer content. Three attempts do not work:*

- *Pure HaPPY holographic: captures the spatial axis (horizon encoding) but provides no structural location for either the bootstrap-level homotopy classes or the Axiom 3 periodic tick structure.*
- *Pure Kitaev topological: captures the algebraic axis (homotopy classes) but has no natural home for either the horizon mode count or the temporal-axis periodic closure.*
- *Pure Floquet dynamical: captures the temporal axis (periodic stabilizer schedule) but not the spatial or algebraic integer content.*

*Each single-family candidate captures one-third of the framework's integer structure. The three-axis product is required to capture all three, and the composition theorem below shows the product is well-defined.*

### The three-axis product structure

**Theorem 5.1 (Pairwise-commuting stabilizer product).** *Let $\mathcal{S}^{\mathrm{sp}}$ denote the HaPPY stabilizer group on the spatial axis, $\mathcal{S}^{\mathrm{alg}}$ the Kitaev stabilizer group on the algebraic axis, and $\mathcal{S}^{\mathrm{tmp}}(\tau)$ the Floquet stabilizer schedule on the temporal axis. These three groups pairwise commute on the substrate Hilbert space:*

$$[S^{\mathrm{sp}}, S^{\mathrm{alg}}] \;=\; [S^{\mathrm{alg}}, S^{\mathrm{tmp}}(\tau)] \;=\; [S^{\mathrm{sp}}, S^{\mathrm{tmp}}(\tau)] \;=\; 0$$

*for all generators and all $\tau \in [0, T_A)$. The code space $\mathcal{C}_A$ is their joint fixed subspace:*

$$\mathcal{C}_A \;=\; \{|\psi\rangle \in \mathcal{H}_{\mathrm{substrate}} : S|\psi\rangle = |\psi\rangle \text{ for all } S \in \mathcal{S}^{\mathrm{sp}} \cup \mathcal{S}^{\mathrm{alg}} \cup \mathcal{S}^{\mathrm{tmp}}(\tau),\, \tau \in [0, T_A)\}.$$

*Structural argument.* The axis-independence of Remark 1.4 translates to operator-level commutation: HaPPY stabilizers act on horizon modes; Kitaev topological stabilizers act on phase-space modes at bootstrap scale $L_n$; Floquet time-dependent stabilizers act on the temporal continuation of the phase trajectory. These three domains are disjoint substrate degrees of freedom — operators acting on non-overlapping degrees commute. The joint fixed subspace of three commuting stabilizer groups is the intersection of their individual fixed subspaces, which is the subspace consistent with $\mathcal{I}_A$ on all three axes — i.e., $\mathcal{C}_A$. $\square$

**Remark 5.2 (Product, not concatenation).** *Concatenated codes apply one code inside another hierarchically (the physical qubits of an outer code are themselves logical qubits of an inner code). The observer-projection code is not concatenated — the three factors act on simultaneously-present, orthogonal degrees of freedom rather than hierarchically. This matters for downstream analysis: concatenated codes have multiplicative distance and thresholds; product codes have minimum-over-factors distance with correlated-error penalties. The correct analog here is a 3D product stabilizer code (close to Bombin–Martin-Delgado 2007 "Topological Quantum Distillation") with a bootstrap-coupled parameter set.*

**Theorem 5.3 (Cross-axis couplings make the product framework-specific).** *The three-axis factors share a single underlying observer parameter: each factor's characteristic scale is set by the observer's mass $m_A$ through framework dynamics.*

1. *HaPPY boundary-qubit count: $N_A = A_A/4\ell_P^2 \sim (m_P/m_A)^2$ via the Compton horizon $r_H \sim \hbar/m_A c$.*
2. *Kitaev target group: $G_n \in \{U(1), SU(2), SU(3)\}$ determined by the observer's bootstrap level $n$, which is determined by its profile via [Moufang-Loop Phase Closure](/derivations/interactions/moufang-loop-phase-closure) Theorem 5.1 (bootstrap termination at $n = 3$).*
3. *Floquet period: $T_A = 2\pi\hbar/(m_A c^2)$, the observer's Compton period.*

*All three parameters are functions of $m_A$ (with the level-structure discretization). Absent this coupling, the three factors would be an independent tensor product of three established codes with no framework-specific content. The couplings are what make the observer-projection code a single unified object rather than an arbitrary composition.*

*Proof.* $N_A$: substitute $r_H = \hbar/m_A c$ into $A = 4\pi r_H^2$ and $N = A/4\ell_P^2$. $G_n$: direct from Moufang-Loop termination. $T_A$: direct from $m = \hbar\omega/c^2$ ([Mass Hierarchy](/derivations/particles/mass-hierarchy) Definition 1.1). $\square$

**Corollary 5.4 (Product structure with framework couplings is novel).** *The product family above is not a known quantum-information code family in the combined form. Each factor is drawn from established literature (HaPPY, Kitaev, Floquet); the three-axis composition with the specific cross-axis couplings of Theorem 5.3 is novel as a unified family. No prior quantum-information construction combines all three with the framework's specific area/level/period parameters.*

## Consequences

**C1. The observer has a specific error-correcting-code identity.** The CPTP factorization through the integer-invariant profile is an explicit specification of the observer-projection as an error-correcting code with physical qubits (substrate modes), logical qubits (the profile), and a code space (substrate content consistent with the profile).

**C2. The observer is ontologically the code-space interior.** Under the dual framing, the observer is the continuous slack bounded by integer-stable configurations on all three axes — not the boundary profile itself. This is an ontological refinement of the framework's observer definition compatible with the minimal-observer limit (slack collapses to $S^1$).

**C3. Observer Holographic Equivalence Theses A and A' are unified as orthogonal slices.** Their unitary equivalence is not a coincidence but a tautology — they parameterize the same object along orthogonal axes.

**C4. The code family is structurally a three-axis product of HaPPY × Kitaev × Floquet.** Each axis-to-family identification is near-tautological given existing framework theorems; the product with cross-axis couplings is novel as a unified family.

**C5. Finite capacity is structural.** An observer's capacity is the 4-volume of its code-space interior. The familiar $A/4\ell_P^2$ bound captures the spatial-axis contribution; the temporal and algebraic axes contribute additional slack volume.

**C6. The observer-projection code is the formal object on which downstream error-correction derivations operate.** [Substrate Noise and Profile-Dependent Coupling](#) (noise mechanics, Planck-cell error rates, and profile-specific coupling modulation), [Formation and Preservation as Complementary Mechanisms](#) (the relationship between code preservation and Mass Hierarchy's WKB tunneling), and [Error Correction and the Standard Model Spectrum](#) (systematic compatibility audit) all take the code structure derived here as input.

**C7. The $1/4$ coefficient is the spatial-axis code rate.** Corollary 4.1.1 identifies the coefficient $1/4$ appearing in the holographic entropy bound ([Area Scaling](/derivations/holography/area-scaling) Theorem 5.1), the Bekenstein-Hawking entropy ([Black Hole Entropy](/derivations/holography/black-hole-entropy) Proposition 5.1), and the holographic-noise natural target ([Causal Set Statistics](/derivations/holography/causal-set-statistics) Heuristic 2.3) as a single structural quantity — the substrate-to-code redundancy of the observer's spatial-axis factor of $\mathcal{P}_A$: four Planck-cell loop positions per encoded bit of horizon-accessible coherence content.

## Rigor Assessment

**Rigorous (consolidation inheriting from source derivations and standard QEC):**

- Propositions 1.1–1.3 (three axes of integer content): direct application of existing framework theorems.
- Theorem 2.3 (CPTP factorization): structurally forced by Axiom 1 (coherence conservation as CPTP) + integer-axis projections.
- Propositions 4.1–4.3 (per-axis code-family identifications): structural-correspondence arguments grounded in defining properties of each target family.
- Corollary 4.1.1 (spatial-axis code rate): direct bookkeeping on two established framework counts — the Planck-cell physical count of [Area Scaling](/derivations/holography/area-scaling) Corollary 2.2 and the gravitational-stability-bounded logical count of [Area Scaling](/derivations/holography/area-scaling) Theorem 5.1. The identification inherits the Schwarzschild-specific input of Theorem 5.1 (see Remark 4.1.2 and Open Gap 7 for the geometry-independent goal).

**Semi-formal (stated structurally but not explicitly constructed):**

- Theorem 3.2 (dual framing moduli quotient): structural argument via three gauge equivalences; explicit category-theoretic quotient not constructed.
- Theorem 5.1 (pairwise-commuting stabilizer composition): axis-independence forces commutation structurally, but explicit stabilizer generators for each factor are not enumerated (this requires tensor-network construction for HaPPY, Hamiltonian realization for Walker–Wang, explicit Floquet schedule for continuous-time dynamics).

**Deferred as open gaps:**

- Explicit Kraus operator construction for $\mathcal{P}_A$ (Open Gap 1).
- Explicit HaPPY tensor-network realization on the horizon (Open Gap 2).
- Explicit Walker–Wang Hamiltonian for the algebraic-factor realization (Open Gap 3).
- Continuous-time Floquet-code formalism (less developed in the QI literature than discrete Floquet; Open Gap 4).

## Open Gaps

1. **Explicit Kraus operator construction.** Construct $\mathcal{P}_A(\rho) = \sum_k K_k \rho K_k^\dagger$ via explicit Kraus operators annihilating substrate content orthogonal to the integer-invariant profile on all three axes simultaneously. *Difficulty: MODERATE.*

2. **Explicit HaPPY tensor-network construction on the horizon.** Give the hyperbolic tiling, perfect-tensor choices, and bulk-boundary map that realize the spatial-axis isometric encoding. *Difficulty: MODERATE.*

3. **Explicit Walker–Wang realization for algebraic-axis code.** Give the local 4D lattice Hamiltonian whose ground-state space realizes the framework's $\pi_3(SU(2))$ or $\pi_3(SU(3))$ logical content at bootstrap levels 2 and 3. *Difficulty: MODERATE-HARD.*

4. **Continuous-time Floquet-code formalism.** The Hastings–Haah 2021 framework is discrete-measurement; the framework's Axiom 3 phase evolution is continuous. Formalize the continuous-time extension, including the distance formula on the temporal axis. *Difficulty: MODERATE.*

5. **Category-theoretic moduli quotient.** Theorem 3.2 identifies $\mathcal{H}_A$ with a moduli space under three gauge equivalences. A rigorous category-theoretic formulation would specify the site (observer category or substrate-lift), the gauge groupoid acting on substrate configurations, and the observer state space as an associated stack. *Difficulty: MODERATE-HARD.*

6. **Explicit verification of pairwise commutation on generators.** Given Gaps 2 and 3 (explicit HaPPY and Walker–Wang generators), verify directly that the three stabilizer groups pairwise commute on the substrate Hilbert space. Structural argument for commutation is given in Theorem 5.1; explicit generator-level verification is desirable. *Difficulty: MODERATE; prerequisite is Gaps 2–3.*

7. **Geometry-independent derivation of the spatial-axis code rate.** Corollary 4.1.1 identifies the $1/4$ coefficient as the code rate $R_{\mathrm{sp}} = k_{\mathrm{sp}}/n_{\mathrm{sp}}$ of the spatial-axis factor of $\mathcal{P}_A$ but inherits the factor-$4$ substrate-to-code redundancy from the Schwarzschild-specific gravitational-stability argument of [Area Scaling](/derivations/holography/area-scaling) Theorem 5.1. A geometry-independent derivation of the rate from the observer-projection code structure alone — without routing through Schwarzschild thermodynamics — would extend the identification to Kerr and Reissner-Nordström outer horizons, closing [Black Hole Entropy](/derivations/holography/black-hole-entropy) Open Gap 3, and would make the three-way unification of Remark 4.1.2 fully independent of Schwarzschild input. Candidate route: use the isometric bulk-to-boundary encoding property of the HaPPY family (Proposition 4.1 structural argument) with the minimal-observer-loop area of [Area Scaling](/derivations/holography/area-scaling) Proposition 2.1 as the physical-qubit area and a QEC-structural argument for the $4\ell_P^2$ logical-qubit effective area. *Difficulty: MODERATE-HARD.*

## References and further reading

**Foundational code family literature.**
- Pastawski, F., Yoshida, B., Harlow, D., Preskill, J. (2015). *Holographic quantum error-correcting codes: Toy models for the bulk/boundary correspondence.* JHEP 06:149. — The HaPPY family on the spatial axis.
- Kitaev, A. (2003). *Fault-tolerant quantum computation by anyons.* Annals of Physics 303:2–30. — The Kitaev topological family on the algebraic axis.
- Walker, K., Wang, Z. (2011). *(3+1)-TQFTs and topological insulators.* — Higher-dimensional Walker–Wang models for algebraic axis at bootstrap levels 2 and 3.
- Hastings, M., Haah, J. (2021). *Dynamically generated logical qubits.* Quantum 5:564. — The Floquet family on the temporal axis.
- Dennis, E., Kitaev, A., Landahl, A., Preskill, J. (2002). *Topological quantum memory.* J. Math. Phys. 43:4452–4505. — 4D toric code and topological distance scaling.
- Bombin, H., Martin-Delgado, M.A. (2007). *Topological Quantum Distillation.* — 3D product stabilizer codes close in spirit to the three-axis product.

**Research-program context.** The code structure and dual framing of this derivation are the consolidated content of Steps 1–2 of the Observer-Projection-as-Error-Correction research program (see `research-targets/observer-projection-as-error-correction.md` in the repository for historical context and the step-by-step exploration record).
