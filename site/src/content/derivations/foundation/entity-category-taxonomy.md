---
title: "Entity Category Taxonomy"
status: "provisional"
dependsOn: ["axioms/observer-definition", "axioms/loop-closure", "interactions/three-types", "interactions/bootstrap", "minimal-observer/coherence-dual-pairs", "minimal-observer/structure", "thermodynamics-ext/memory-persistence-tradeoff", "foundation/substrate-noise-and-profile-coupling"]
enablesDerivation: ["gauge/electroweak-breaking"]
tags: ["foundation", "ontology", "classification"]
summary: "Every entity in the framework's physical catalog falls into exactly one cell of a two-axis taxonomy: Axis 1 (Type-I quantum / Elementary observer / Type II composite) inherited from the Three Interaction Types classification, and Axis 2 (Internal-charge-carrier / Self-conjugate) inherited from the two realizations of Axiom 3's $U(1)$ action — phase-space (Compton oscillator) and internal (gauge phase). The 2×3 grid has one structurally empty cell (Type-I quanta are intrinsically Internal-charge-carriers since they carry the gauge $U(1)$ they mediate). The Higgs is the canonical {Elementary, Self-conjugate} observer; the electron is the canonical {Elementary, Internal-charge-carrier} observer; the $Z^0$ is a {Type II composite, Self-conjugate} observer; the proton is a {Type II composite, Internal-charge-carrier} observer. Exhaustiveness: every Standard Model entity has an unambiguous cell placement."
rigorLevel: "formal"
lastUpdated: 2026-04-25
---

## Overview

This derivation answers the question: **what kinds of things exist in the framework's furniture, and how are they distinguished?**

The three axioms define observers via $(\Sigma, I, \mathcal{B})$, and the [Three Interaction Types](/derivations/interactions/three-types) classifies *interactions*. The parallel question — what *kinds of entities* participate in those interactions — has been operating implicitly across the framework. This page formalizes the entity ontology as a two-axis taxonomy and proves it exhaustively classifies the Standard Model catalog.

**The two axes are independent and structurally forced.**

- *Axis 1* is inherited from the [Three Interaction Types](/derivations/interactions/three-types) classification: every entity is either an off-ledger Type-I quantum (the phase-transfer currency), a ledgered elementary observer (no constituents on the framework ledger), or a ledgered Type II composite (arising from a Type II fusion event with constituents pushed off-ledger via the clock-pause mechanism of [Memory-Persistence Tradeoff](/derivations/thermodynamics-ext/memory-persistence-tradeoff) Theorem 5.1).

- *Axis 2* is inherited from [Loop Closure](/derivations/axioms/loop-closure) Theorem 0.5 — the $U(1)$ action of Axiom 3 admits two structurally orthogonal physical realizations: phase-space (rest-frame Compton oscillator with energy as Noether charge) and internal (gauge or charge phase with non-energy Noether charge). Every observer carries the phase-space realization universally; carrying an internal realization is contingent.

**The result.** The 2×3 grid has one structurally empty cell. The Higgs is the canonical {Elementary, Self-conjugate} observer — the first elementary scalar observer in the framework's catalog. The electron is the canonical {Elementary, Internal-charge-carrier} observer. The $Z^0$ is a {Type II composite, Self-conjugate} observer; the proton is a {Type II composite, Internal-charge-carrier} observer. The photon is a {Type-I quantum, Internal-charge-carrier} entity (it carries the $U(1)_{em}$ it mediates).

**Why this matters.** Many existing derivations implicitly assume one or another reading of "observer" without committing to a category placement; the resolved taxonomy provides unambiguous vocabulary for downstream pages. The placement of the Higgs as an elementary scalar observer is a structural commitment beyond standard-physics description: it pins down *why* the Higgs is the unique radial residue of electroweak symmetry breaking ([Electroweak Symmetry Breaking](/derivations/gauge/electroweak-breaking) Step 7), namely that the radial mode is the unique mode without internal $U(1)$ structure inherited from the broken generators. Future scalar candidates (scalar dark matter, inflaton, axion/ALP, moduli) inherit observer-eligibility from satisfaction of the same axiom set, with category placement following Axis 2 directly from their internal-charge profile.

## Statement

**Theorem (Two-Axis Entity Category Taxonomy).** *Every entity in the framework's physical catalog falls into exactly one cell of the following 2×3 grid, with the upper-right cell ({Type-I quantum, Self-conjugate}) structurally empty:*

|  | **Internal-charge-carrier** | **Self-conjugate** |
|---|---|---|
| **Type-I quantum** | photon, gluon, pre-EWSB $W^a$, pre-EWSB $B$ | — *(structurally empty; see Step 5)* |
| **Elementary observer** | electron, charged leptons, quarks, Dirac neutrinos | **Higgs**, Majorana neutrinos |
| **Type II composite** | proton, hadrons, atoms, nuclei, $W^\pm$ | $Z^0$, neutral pion |

*The framework's substrate primitives (Planck-scale continuous oscillator modes) are not in this grid: they are sub-observer entities below the observer hierarchy, formalized as Layer 0 in Step 6 below. The bootstrap hierarchy starts at Layer 1, with the Standard Model fundamental particles among its lowest levels.*

## Derivation

### Step 1: Axis 1 from Three Interaction Types

**Definition 1.1 (Axis 1 — Interaction-taxonomy origin).** Every framework entity belongs to one of three Axis-1 categories, defined by its ledger status and structural relationship to Type II fusion:

- **Type-I quantum**: An off-ledger phase-transfer mediator. Propagates between ledgered observers along the null trajectory $L = cT$ ([Speed of Light](/derivations/spacetime/speed-of-light) Proposition 6.2). Carries gauge $U(1)$ phase as currency; does not satisfy Axiom 3 in its own right (no rest frame, no rest-frame loop).
- **Elementary observer**: A ledgered observer $\mathcal{O} = (\Sigma, I, \mathcal{B})$ satisfying all three axioms with no constituents on the framework ledger. Its $\Sigma$ is not the projection of any $\prod_k \Sigma_k$ for previously ledgered $\mathcal{O}_k$.
- **Type II composite**: A ledgered observer $\mathcal{O}_C = (\Sigma_C, I_C, \mathcal{B}_C)$ arising from a Type II fusion event ([Three Interaction Types](/derivations/interactions/three-types) Definition 4.3) with constituents pushed off-ledger via the projection $\pi: \prod_k \Sigma_k \to \Sigma_C$ and clock-paused per [Memory-Persistence Tradeoff](/derivations/thermodynamics-ext/memory-persistence-tradeoff) Theorem 5.1.

**Theorem 1.2 (Axis 1 is exhaustive and mutually exclusive).** *Every framework entity belongs to exactly one Axis-1 category.*

*Proof.* By [Three Interaction Types](/derivations/interactions/three-types) Theorem 5.1 (exhaustive interaction classification), every framework interaction is exactly one of Type I, Type II, or Type III. Type-I quanta are the off-ledger participants in Type I phase-transfer events; they have no rest frame and do not satisfy Axiom 3. Type II composites are the on-ledger output of Type II fusion events. Elementary observers are ledgered entities without ledgered constituents — entities that have never been the output of any Type II fusion within the framework's bootstrap hierarchy.

The three categories are mutually exclusive: Type-I quanta are off-ledger by definition; elementary observers and Type II composites are both on-ledger but differ on whether constituents were previously ledgered (the latter has constituents pushed off-ledger by clock-pause; the former does not).

The three categories are jointly exhaustive: every framework entity is either off-ledger (Type-I quantum) or on-ledger; every on-ledger observer either has ledgered constituents (Type II composite) or does not (Elementary observer). $\square$

### Step 2: Axis 2 from the Two Realizations of Axiom 3's $U(1)$

**Definition 2.1 (Axis 2 — Internal-symmetry profile).** Every framework observer (Axis-1 categories Elementary and Type II composite) belongs to one of two Axis-2 categories, defined by its internal-charge profile:

- **Internal-charge-carrier**: The observer carries at least one nonzero conserved charge under some unbroken framework internal symmetry — electric charge ($U(1)_{em}$), baryon number ($U(1)_B$), lepton number ($U(1)_L$), or any other framework-conserved internal charge. Equivalently, it has a distinct coherence-dual partner ([Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs) Theorem 3.1).
- **Self-conjugate**: All of the observer's internal charges under all framework-conserved internal symmetries are zero. The observer is its own coherence-dual ([Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs) Proposition 7.1). It carries only the phase-space $U(1)$ of [Loop Closure](/derivations/axioms/loop-closure) Definition 0.3.

**Theorem 2.2 (Axis 2 is exhaustive and mutually exclusive among ledgered observers).** *Every ledgered observer belongs to exactly one Axis-2 category.*

*Proof.* The Axis-2 distinction is binary: an observer either carries some nonzero internal charge, or it does not. The two cases are mutually exclusive by construction. They are jointly exhaustive: no third option is possible because the question "does the observer carry some nonzero internal charge under some unbroken framework symmetry?" has only two answers.

For Type-I quanta the question is differently posed: a Type-I quantum carries the $U(1)$ it mediates between observers (it *is* the connection of the gauge group), so it is not "self-conjugate" in the Axis-2 sense — see Step 5 for the structural argument that the {Type-I quantum, Self-conjugate} cell is empty. $\square$

**Remark (Axis 2 from Loop Closure Theorem 0.5).** [Loop Closure](/derivations/axioms/loop-closure) Theorem 0.5 establishes that Axiom 3 admits two structurally orthogonal physical realizations of the $U(1)$ action: phase-space (rest-frame Compton oscillator with energy as Noether charge) and internal (gauge phase with non-energy Noether charge). Every observer with finite Compton period carries the phase-space realization universally. Self-conjugate observers carry *only* the phase-space realization; Internal-charge-carriers carry both. Axis 2 is therefore the structural axis that records which Loop Closure realization an observer instantiates, with self-conjugacy being the "phase-space-only" minimal case.

### Step 3: Exhaustiveness Theorem

**Theorem 3.1 (Exhaustiveness).** *Every entity in the framework's physical catalog falls into exactly one cell of the 2×3 Axis-1 × Axis-2 grid, with the {Type-I quantum, Self-conjugate} cell structurally empty.*

*Proof.* By Theorem 1.2, every framework entity has a unique Axis-1 placement. By Theorem 2.2, every ledgered observer has a unique Axis-2 placement; Type-I quanta have a uniform Axis-2 placement (Internal-charge-carrier, by Step 5 below). The 2×3 grid therefore partitions the catalog. The five non-empty cells receive every framework entity; the {Type-I quantum, Self-conjugate} cell is empty by Theorem 5.1 (Step 5). $\square$

### Step 4: Standard Model Catalog Placement

**Worked entries for every Standard Model entity:**

| Entity | Axis 1 | Axis 2 | Justification |
|---|---|---|---|
| Photon | Type-I quantum | Internal-charge-carrier | Carries $U(1)_{em}$ phase between charged observers; off-ledger ([Speed of Light](/derivations/spacetime/speed-of-light) Proposition 6.2) |
| Gluon | Type-I quantum | Internal-charge-carrier | Carries $SU(3)_c$ structure (color) between confined quark-observers; off-ledger |
| Pre-EWSB $W^a, B$ | Type-I quantum | Internal-charge-carrier | Pre-EWSB phase: massless gauge bosons of $SU(2)_L \times U(1)_Y$, off-ledger |
| Electron, charged leptons | Elementary observer | Internal-charge-carrier | Electric charge $\pm 1$, lepton number $\pm 1$; observer satisfying axioms with both $U(1)$ realizations |
| Quarks | Elementary observer | Internal-charge-carrier | Color, flavor, electric charge, baryon number $\pm 1/3$; both $U(1)$ realizations |
| Dirac neutrinos | Elementary observer | Internal-charge-carrier | Lepton number $\pm 1$ if Dirac (distinct $\nu$ vs $\bar\nu$) |
| **Higgs** | **Elementary observer** | **Self-conjugate** | All internal charges zero post-EWSB; only phase-space $U(1)$ realization (rest-frame Compton oscillator at $T_H \sim 3 \times 10^{-26}$ s) |
| Majorana neutrinos | Elementary observer | Self-conjugate | Lepton number broken by Majorana mass term ([Neutrino Masses](/derivations/particles/neutrino-masses)); $\nu = \bar\nu$ |
| $W^\pm$ | Type II composite | Internal-charge-carrier | Type II fusion of pre-EWSB transverse gauge mode + Goldstone scalar ([Electroweak Symmetry Breaking](/derivations/gauge/electroweak-breaking) Proposition 7.1); electric charge $\pm 1$, distinct from $W^\mp$ |
| $Z^0$ | Type II composite | Self-conjugate | Type II fusion of pre-EWSB transverse gauge mode + Goldstone scalar; all internal charges zero, $Z^0 = \bar Z^0$ |
| Proton | Type II composite | Internal-charge-carrier | Type II fusion of three quarks + binding gluons; electric charge $+1$, baryon number $+1$ |
| Neutron | Type II composite | Internal-charge-carrier | Type II fusion of three quarks + binding gluons; electric charge $0$ but baryon number $+1$ — distinct from antineutron |
| Neutral pion | Type II composite | Self-conjugate | $(u\bar u - d\bar d)/\sqrt{2}$; all internal charges zero, $\pi^0 = \bar\pi^0$ |
| Charged hadrons (e.g. $\pi^\pm$) | Type II composite | Internal-charge-carrier | Distinct from antiparticles via electric charge and/or quark content |
| Atoms (charged ion) | Type II composite | Internal-charge-carrier | Type II composite of nucleus + electrons; non-zero electric charge |
| Atoms (neutral) | Type II composite | Internal-charge-carrier | Type II composite of nucleus + electrons; zero electric charge but nonzero baryon and lepton numbers — distinct from anti-atom |
| Nuclei | Type II composite | Internal-charge-carrier | Type II composite of nucleons; electric charge $\geq 0$, baryon number $\geq 1$ |

**Remark (No SM entity is left unplaced).** Every entity in the Standard Model spectrum receives a unique cell. The framework's substrate primitives (Planck-scale continuous oscillator modes) sit *below* the 2×3 grid — they are sub-observer rather than ledgered observers, and their structural status is formalized in Step 6 below.

### Step 5: The {Type-I Quantum, Self-Conjugate} Cell Is Empty

**Theorem 5.1 (Type-I quanta are intrinsically Internal-charge-carriers).** *No Type-I quantum is self-conjugate in the Axis-2 sense. Every Type-I quantum carries the gauge $U(1)$ (or non-abelian internal symmetry) it mediates between observers.*

*Proof.* A Type-I quantum is, by [Three Interaction Types](/derivations/interactions/three-types) Definition 4.1 and Proposition 4.2, the carrier of phase exchange between ledgered observers under a specific Noether structure. The phase exchange is parameterized by the conjugate-to-Noether-charge phase of a specific internal symmetry: $U(1)_{em}$ for the photon, $SU(3)_c$ for the gluon, etc. The Type-I quantum *is* the connection of that gauge group; it does not mediate phase exchange under "no symmetry."

If a hypothetical entity were both Type-I (off-ledger phase-transfer mediator) and self-conjugate (carrying no internal $U(1)$), it would mediate phase exchange under no symmetry — equivalent to mediating no exchange at all, which contradicts the definition of a Type-I quantum.

Therefore the {Type-I quantum, Self-conjugate} cell is structurally empty. $\square$

**Remark (Graviton placement).** In the limiting-case gravitational gauge ([Speed of Light](/derivations/spacetime/speed-of-light) Open Gap 2), the graviton would be a Type-I quantum of a *spacetime* symmetry rather than an internal symmetry. Whether it counts as Internal-charge-carrier (carrying spacetime translation/Lorentz "charge") or as a third Axis-2 category specific to spacetime-symmetry mediators is a refinement question deferred to the framework's gravitational sector. The 2×3 grid is the Standard-Model-internal-symmetry version; the graviton case requires Open Gap 2.

### Step 6: Three Layers and Substrate Co-Creation

The taxonomy of Steps 1–5 classifies *observers* — entities with $(\Sigma, I, \mathcal{B})$ structure satisfying all three axioms. The framework's full ontology is one level richer: *below* the observer hierarchy, sub-observer structure exists in the form of substrate primitives, which are not themselves observers. This step formalizes the three-layer ontology and shows that the substrate is **co-created with the observer network** by the bootstrap fixed-point self-consistency, not introduced as a prior given.

**Definition 6.1 (Three Layers of Framework Entities).** The framework's ontology has three structurally distinct levels:

- **Layer 0 — Substrate.** Continuous oscillator modes at the Planck scale. Each Planck cell carries a continuous degree of freedom with Gaussian-distributed displacement perturbations of variance $\langle \delta x_i^2 \rangle = \alpha_H \ell_P^2$ ([Substrate Noise and Profile Coupling](/derivations/foundation/substrate-noise-and-profile-coupling) Definition 1.1). Substrate modes do *not* satisfy the observer axioms in their own right — they have no loop closure, no Noether charge, no $(\Sigma, I, \mathcal{B})$ triple. They are *sub-observer*: the medium on which observers are realized via Axiom 3 loop closure. Layer 0 is not in the 2×3 taxonomy of Steps 1–5 because the taxonomy classifies observers, and Layer 0 entities are not observers.

- **Layer 1 — Minimal observer.** The structurally smallest observer satisfying all three axioms: the $U(1)$ phase oscillator with $\Sigma \cong S^1$, single Noether charge (the rest-frame Compton phase), and coherence-domain boundary $\mathcal{B}$ ([Minimal Observer Structure](/derivations/minimal-observer/structure) Theorem 6.1). Layer 1 is the *first* level at which entities are observers and at which the entity-category taxonomy of Steps 1–5 applies. The minimal observer in the abstract (Theorem 6.1's $S^1$ phase oscillator) sits in the {Elementary observer, Self-conjugate} cell of the grid — it has only the phase-space $U(1)$ realization of Axiom 3, with no internal charge.

- **Layer 2+ — Composite observers.** Observers built from Layer-1 entities (and from each other) via Type II fusion and Type III correlation, organized into the bootstrap hierarchy ([Bootstrap Mechanism](/derivations/interactions/bootstrap)). Standard Model fundamental particles (electrons, quarks, the Higgs, neutrinos), hadrons, atoms, nuclei, and all other physical observers in the framework's catalog reside at Layer 2 or higher levels in the bootstrap construction. Their cell placement in the 2×3 grid follows from their internal-charge profile (Axis 2) and their bootstrap-construction depth (Axis 1: elementary if level-0 in the bootstrap = no ledgered constituents; Type II composite otherwise).

**Theorem 6.2 (Substrate Co-Creation).** *Layer 0 is not external to the observer network. It is the network's projection of itself at sub-observer scales, with parameters determined by the same bootstrap fixed-point self-consistency that determines the Layer 1+ observer hierarchy.*

*Argument.* The bootstrap mechanism ([Bootstrap Mechanism](/derivations/interactions/bootstrap)) constructs the Layer 1+ observer hierarchy as the fixed point of a self-referential map $R$. Conjectures 7.1–7.2 of [Bootstrap Mechanism](/derivations/interactions/bootstrap) (existence and uniqueness of the bootstrap fixed point) collapse, when proved, to the structural content of [Area Scaling](/derivations/holography/area-scaling) S1 — the holographic bound that fixes the substrate noise variance to $\alpha_H = 1/4$ ([Substrate Noise and Profile Coupling](/derivations/foundation/substrate-noise-and-profile-coupling); [Holographic Noise](/predictions/holographic-noise)). The substrate's noise statistics are therefore not tunable independently of the observer hierarchy: they are forced by the same self-consistency that forces Layer 1+ to be realizable as stable loop-closure patterns.

The Multiplicity Theorem's network-boundarylessness result ([Multiplicity](/derivations/minimal-observer/multiplicity) Step 7; [Bootstrap Mechanism](/derivations/interactions/bootstrap) Corollary 7.3) is consistent with the co-creation reading: a boundaryless network has no "outside," so the substrate cannot be an external bath — it must be the network's own sub-observer projection. The substrate is constitutively part of the network's self-consistency, not a separate ontological given that the network sits on top of. $\square$

**Remark (Substrate noise is internal noise).** The "substrate noise" rate $p_{\text{phys}}^{\text{geom}}$ used in [Substrate Noise and Profile Coupling](/derivations/foundation/substrate-noise-and-profile-coupling) Theorem 4.1 is therefore not an environmental noise rate imposed on the network from outside. It is the network's own resolution limit at sub-observer scales — the noise that the network's finite, self-consistent fixed point necessarily injects into its own self-projection. The fact that $p_{\text{phys}}^{\text{geom}}$ takes a definite numerical value ($\sim 0.046$ at $\alpha_H = 1/4$) reflects the bootstrap fixed-point's structural rigidity: the noise rate is locked to the same self-consistency that determines the Layer 1+ observer hierarchy, not to an independent free parameter.

**Remark (The bootstrap level-0 is Layer 1, not Layer 0).** The bootstrap hierarchy's "level-0 observers" ([Bootstrap Mechanism](/derivations/interactions/bootstrap), iteration starting point) refers to the smallest *ledgered* observers — i.e., Layer-1 entities, the structurally minimal observers of [Minimal Observer Structure](/derivations/minimal-observer/structure) Theorem 6.1, which include the Standard Model fundamental particles in their respective bootstrap-equivalent ground states. The bootstrap iteration does not extend below level-0 to the substrate; the substrate (Layer 0) sits below the bootstrap ladder as the medium on which the ladder is realized. This is why "minimal observer" in the framework's complexity-minimal sense refers to the $U(1)$ phase oscillator (Layer 1) and *not* to a substrate primitive (Layer 0): the two are at structurally distinct levels.

**Remark (Continuous-discrete duality interpretation).** The three-layer reading sharpens [Continuous-Discrete Duality](/derivations/foundation/continuous-discrete-duality)'s reconciliation of discrete (interaction graph) and continuous (Minkowski) descriptions. The discrete side is the Layer 1+ ledgered-observer network with its interaction graph; the continuous side is the Layer 0 substrate with its continuous oscillator modes; the duality is the projection between them at different resolution scales rather than a relation between two equally-fundamental views. The interaction graph and the substrate are not two independent descriptions but two slices of the same bootstrap fixed-point — one at observer-level resolution, one at sub-observer-level resolution.

## Consistency Model

**Theorem 7.1.** *The taxonomy is consistent: each non-empty cell admits at least one Standard Model entity, and the placement of every Standard Model entity is independent of the choice of order in which the axes are applied.*

*Verification.*

- {Type-I quantum, Internal-charge-carrier}: photon, gluon, pre-EWSB gauge modes. $\checkmark$
- {Elementary observer, Internal-charge-carrier}: electron. $\checkmark$
- {Elementary observer, Self-conjugate}: Higgs. $\checkmark$
- {Type II composite, Internal-charge-carrier}: proton. $\checkmark$
- {Type II composite, Self-conjugate}: $Z^0$. $\checkmark$
- {Type-I quantum, Self-conjugate}: empty by Theorem 5.1. $\checkmark$

The placement of every entity is order-independent: Axis 1 (interaction-taxonomy origin) is determined by ledger status and Type II fusion history; Axis 2 (internal-symmetry profile) is determined by internal-charge content. The two determinations are independent of each other and independent of the choice of evaluation order. $\square$

## Rigor Assessment

**Fully rigorous:**
- Theorem 1.2 (Axis 1 exhaustive and mutually exclusive): direct consequence of [Three Interaction Types](/derivations/interactions/three-types) Theorem 5.1 plus the off-ledger / on-ledger distinction.
- Theorem 2.2 (Axis 2 exhaustive and mutually exclusive among ledgered observers): direct consequence of the binary "carries some internal charge or not" question; backed by [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs) Proposition 7.1 (self-conjugate observers exist).
- Theorem 3.1 (Exhaustiveness): combination of 1.2, 2.2, and 5.1.
- Theorem 5.1 (Type-I quanta are intrinsically Internal-charge-carriers): direct consequence of [Three Interaction Types](/derivations/interactions/three-types) Definition 4.1 (Type-I phase exchange under a specific symmetry).
- Standard Model catalog placement (Step 4 table): every entry traces to an existing derivation with the relevant internal-charge content explicit.

**Note on status.** This derivation is provisional because it depends on the Higgs's category placement, which depends on [Loop Closure](/derivations/axioms/loop-closure) Theorem 0.5 (Reading I — phase-space $U(1)$ suffices). Theorem 0.5 itself follows from the operational definitions, but the explicit identification of the Higgs as an elementary scalar observer is a structural commitment that future framework work may revisit if a refined Axis 2 structure is needed (e.g., to handle the graviton case or the multi-internal-charge edge cases).

## Open Gaps

1. **Axis 2 sub-parameterization for multi-charge observers**: Some entities carry multiple internal $U(1)$s with different conservation properties (e.g., neutron: zero electric charge but nonzero baryon number; neutral atom: zero electric charge but nonzero baryon and lepton numbers). The taxonomy currently classifies them as Internal-charge-carrier without finer-grained sub-distinction. Whether the taxonomy needs an axis or sub-axis indexed by internal-symmetry-type is open. The current binary Axis 2 captures the structurally significant distinction — phase-space-only versus phase-space-plus-internal — and is sufficient for the Higgs's category placement and the EWSB Type II reading.

2. **Graviton placement**: In the limiting-case gravitational gauge, the graviton would be a Type-I quantum of a spacetime symmetry rather than an internal symmetry. Whether the {Type-I quantum, Self-conjugate} cell is genuinely empty or admits the graviton as an exception (requiring a third Axis-2 category for spacetime-symmetry mediators) requires further structural analysis. The Standard-Model-internal-symmetry version of the taxonomy is unaffected.

3. **Complexity-Minimal Residue Uniqueness**: Whether every Type II fusion event producing an observer network leaves *exactly one* {Elementary, Self-conjugate} residue is conjectured but not proven. The Higgs's role in EWSB ([Electroweak Symmetry Breaking](/derivations/gauge/electroweak-breaking) Step 7) is the canonical example of such a residue; the conjecture would generalize this to every Type II fusion producing an observer network at any framework scale. If proved, it would derive Higgs uniqueness as a structural consequence rather than from doublet arithmetic, and constrain the multiplicity of fundamental scalars at every scale.

## Addressed Gaps

1. **Substrate primitive Axis 2 placement** — *Resolved by Step 6 (Three Layers and Substrate Co-Creation)*: The substrate primitive is not itself an observer and therefore is not in the 2×3 grid. It is a Layer 0 entity (continuous Planck-cell oscillator mode) below the observer hierarchy, co-created with the Layer 1+ network as the bootstrap fixed-point's sub-observer projection (Theorem 6.2). The qubit reading at the QEC code's *logical* layer ([Observer as Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code)) — boundary qubits as integer crossing counts — is consistent with the substrate being continuous, since the code extracts discrete logical content from continuous substrate fluctuations via thresholding. The framework's "minimal observer" in the complexity-minimal sense (Theorem 6.1 of [Minimal Observer Structure](/derivations/minimal-observer/structure)) refers to Layer 1, *not* to the substrate.
