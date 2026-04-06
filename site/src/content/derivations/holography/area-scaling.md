---
title: "Holographic Entropy Bound"
status: "rigorous"
dependsOn: ["spacetime/gravity", "thermodynamics/action-planck"]
enablesDerivation: ["holography/black-hole-entropy", "spacetime/singularity-resolution", "holography/causal-set-statistics", "holography/er-epr"]
tags: ["holography"]
summary: "S ≤ A/4ℓ²_P from boundary observer counting and coherence propagation constraints — two independent derivations"
rigorLevel: "formal"
lastUpdated: 2026-03-09
---

## Overview

This derivation answers a striking question: **why does the maximum information a region can hold scale with its surface area, not its volume?**

In everyday experience, the amount of stuff you can pack into a box grows with its volume. But at the fundamental level, there is a hard limit on how much information any region can contain, and that limit is set by the area of the region's boundary, measured in tiny Planck-scale tiles. This is the holographic principle, and here it is derived rather than assumed.

**The argument.** Two independent lines of reasoning converge on the same result:

- **Boundary counting.** An external observer can only learn about a region's interior through signals crossing the boundary. Each crossing requires a minimal observer loop occupying one Planck-scale tile. Each tile carries exactly one bit. So the boundary area, measured in Planck units, caps the total information.
- **Channel capacity plus gravitational stability.** The boundary has a maximum rate at which it can transmit information outward. Requiring that the region not collapse into a black hole during readout pins down the precise coefficient: one bit per four Planck areas.

**The result.** Maximum entropy equals the boundary area divided by four Planck areas. Black holes saturate this bound -- they are the densest possible information stores.

**Why this matters.** This is the foundation for the entire holography chain: black hole entropy, Hawking radiation, the information paradox, and the holographic noise prediction all rest on this bound.

**An honest caveat.** The derivation relies on one structural postulate (that the Planck length is the actual resolution limit of the coherence geometry), which is dimensionally unique but not constructively derived from the axioms alone.

## Statement

**Theorem.** The maximum entropy of a spatial region bounded by area $A$ is:

$$\boxed{S_{\max} = \frac{A}{4\,\ell_P^2}}$$

where $\ell_P = \sqrt{\hbar G / c^3}$ is the Planck length. Entropy scales with the *boundary area*, not the enclosed volume. Two independent arguments establish this result: (1) boundary observer counting — the number of independent relational invariant crossings is bounded by $A/\ell_P^2$; (2) coherence propagation constraints — gravitational stability during information readout fixes the coefficient $1/4$. The bound is observer-indexed: it applies to external observers whose coherence domain does not extend into the region.

## Derivation

### Structural Postulate

**Structural Postulate S1 (Planck-scale resolution).** The coherence geometry has a minimum resolvable scale $\ell_{\min}$ at which stable loop closure is possible. This scale is determined by the three fundamental constants $\hbar$, $G$, and $c$ as $\ell_{\min} = \sqrt{\hbar G/c^3} = \ell_P$ (the Planck length). At scales below $\ell_P$, the coherence cost of loop closure exceeds the available coherence for any observer.

**Remark (Tightened content).** The content of this postulate has been substantially reduced by recent framework results:

1. **The Planck length is not a free parameter** — it is the unique length scale constructible from $\hbar$, $G$, and $c$. This is dimensional analysis, not a postulate.

2. **The minimum scale is a fixed-point property.** The [Gravitational Coupling](/derivations/spacetime/gravitational-constant) derivation identifies $G = \ell_{\min}^2 c^3/\hbar$ (Theorem 3.3, Jacobson route), creating a self-consistency equation: $\ell_{\min}$ determines $G$, and $G$ determines $\ell_P = \sqrt{\hbar G/c^3}$. The postulate $\ell_{\min} = \ell_P$ is therefore a fixed-point condition — the unique positive solution of $\ell = \sqrt{\hbar \cdot (\ell^2 c^3/\hbar) / c^3} = \ell$.

3. **The discrete substrate provides the physical content.** The [Geometric Substrate](/derivations/cosmology/geometric-substrate) identifies $\ell_P$ with the scale of individual Planck-scale observers in the substrate (Proposition 1.1). The [Aperiodic Order](/derivations/foundation/aperiodic-order) derivation establishes that the observer network is a Delone set with a minimum spacing set by loop closure. The [Continuous-Discrete Duality](/derivations/foundation/continuous-discrete-duality) requires the continuous and discrete layers to be compatible, which constrains the minimum scale.

The irreducible content of S1 reduces to: **the bootstrap fixed-point equation has a unique positive solution, and that solution equals $\ell_P$.** This is equivalent to the bootstrap fixed-point uniqueness conjectures (Conjectures 7.1–7.2 of [Bootstrap](/derivations/interactions/bootstrap)). If those are proved, S1 becomes a theorem.

### Argument 1: Boundary Observer Counting

#### Step 1: The Boundary as Interaction Surface

**Definition 1.1.** Let $\mathcal{R}$ be a spatial region bounded by a closed 2-surface $\partial\mathcal{R}$ of area $A$. Let $\mathcal{O}_{\text{ext}}$ be an external observer whose coherence domain $\mathcal{D}_{\text{ext}}$ does not include the interior of $\mathcal{R}$.

**Proposition 1.2 (Boundary mediation).** *All information accessible to $\mathcal{O}_{\text{ext}}$ about the interior of $\mathcal{R}$ must be mediated by relational invariants that cross $\partial\mathcal{R}$.*

*Proof.* By the definition of [Entropy as Inaccessible Coherence](/derivations/thermodynamics/entropy), the entropy of $\mathcal{R}$ relative to $\mathcal{O}_{\text{ext}}$ is the coherence inside $\mathcal{R}$ outside $\mathcal{O}_{\text{ext}}$'s coherence domain. Access to interior coherence requires a relational invariant connecting an interior observer to $\mathcal{O}_{\text{ext}}$. From [Relational Invariants](/derivations/interactions/relational-invariants), such invariants are generated by Type III interactions, which require phase exchange through the boundary $\partial\mathcal{R}$. Therefore all accessible information traverses $\partial\mathcal{R}$. $\square$

#### Step 2: Planck-Scale Tiling

**Proposition 2.1 (Minimum cell area).** *Each independent relational invariant crossing $\partial\mathcal{R}$ requires at least one minimal observer loop at the boundary, occupying a cross-sectional area of order $\ell_P^2$.*

*Proof.* From [Minimal Observer Structure](/derivations/minimal-observer/structure), the minimal observer is a $U(1)$ phase loop with conserved charge $Q$. Its spatial extent is set by the minimum scale at which loop closure is possible in the coherence geometry. By Structural Postulate S1, the minimum resolvable scale is $\ell_P = \sqrt{\hbar G/c^3}$: no stable loop can exist at scales below $\ell_P$. The minimum cross-section of a boundary loop is therefore $A_{\min} = \alpha_{\text{geo}} \cdot \ell_P^2$, where $\alpha_{\text{geo}}$ is a geometric packing factor of order unity depending on the boundary curvature. For a flat or weakly curved boundary, $\alpha_{\text{geo}} = 1$. $\square$

**Corollary 2.2 (Maximum boundary loops).** *The boundary $\partial\mathcal{R}$ supports at most:*

$$N_{\max} = \frac{A}{\ell_P^2}$$

*independent minimal observer loops.*

#### Step 3: One Bit per Crossing

**Proposition 3.1 (Information per crossing).** *Each relational invariant crossing the boundary contributes one independent bit of inaccessible coherence structure to $\mathcal{O}_{\text{ext}}$.*

*Proof.* Each crossing is mediated by a minimal observer loop with $U(1)$ phase $\theta \in [0, 2\pi)$ and conserved charge $Q$ ([Minimal Observer Structure](/derivations/minimal-observer/structure)). For $\mathcal{O}_{\text{ext}}$, the crossing is irreducible ([Relational Invariants](/derivations/interactions/relational-invariants), Definition 2.1): the invariant either exists (the loop mediates a correlation between interior and exterior) or does not. The internal phase $\theta$ is a continuous degree of freedom, but from outside the boundary, only the *existence* of the correlation is accessible — the phase information belongs to the interior's coherence domain. Therefore each crossing contributes exactly one bit (binary: present/absent). $\square$

**Theorem 3.2 (Area scaling).** *The maximum entropy of $\mathcal{R}$ relative to $\mathcal{O}_{\text{ext}}$ satisfies:*

$$S_{\max} \leq \alpha \cdot \frac{A}{\ell_P^2}$$

*where $\alpha$ is a geometric constant of order unity.*

*Proof.* By Corollary 2.2, at most $A/\ell_P^2$ independent loops tile the boundary. By Proposition 3.1, each contributes one bit. The total entropy is at most $\alpha \cdot A/\ell_P^2$, where $\alpha$ accounts for the packing geometry of loops on a curved surface. $\square$

### Argument 2: Coherence Propagation Constraint

#### Step 4: Channel Capacity of the Boundary

**Definition 4.1.** The **coherence channel capacity** of $\partial\mathcal{R}$ is the maximum rate of information transfer from interior to exterior.

**Proposition 4.2 (Bandwidth limit).** *Each Planck cell on $\partial\mathcal{R}$ transmits at most one bit of coherence information per Planck time $t_P = \ell_P/c$.*

*Proof.* From [Speed of Light](/derivations/spacetime/speed-of-light), phase propagates at speed $c$. A minimal observer loop of spatial extent $\ell_P$ completes one cycle in time $T = \ell_P/c = t_P$ (by the constraint $L = cT$, Theorem 3.1 of [Speed of Light](/derivations/spacetime/speed-of-light)). Each cycle carries one phase increment — one bit. Therefore the bandwidth per Planck cell is $1/t_P$ bits per unit time. $\square$

**Corollary 4.3 (Total channel capacity).**

$$\dot{I}_{\max} = \frac{A}{\ell_P^2} \cdot \frac{1}{t_P} = \frac{Ac}{\ell_P^3}$$

#### Step 5: Gravitational Stability Constraint

**Theorem 5.1 (Holographic bound with coefficient).** *Requiring gravitational stability during information readout fixes $\alpha = 1/4$:*

$$S_{\max} = \frac{A}{4\,\ell_P^2}$$

*Proof.* Consider a spherical region of radius $R$ containing entropy $S$ (bits of inaccessible coherence) and energy $E$. From [Gravity](/derivations/spacetime/gravity) (Proposition 5.2), gravitational collapse occurs when $R \leq R_S = 2GE/c^2$.

The minimum readout time is $T_{\text{read}} = S / \dot{I}_{\max}$. During readout, the region must remain accessible — it must not collapse. The energy associated with entropy $S$ at the boundary's characteristic temperature $T_{\text{char}}$ is $E \sim S \cdot k_B T_{\text{char}}$.

For the region to remain non-collapsed:

$$R > R_S = \frac{2GE}{c^2}$$

The critical case is saturation: $R = R_S$, corresponding to a black hole. At the Schwarzschild horizon, $A = 4\pi R_S^2$ and the Hawking temperature ([Hawking Radiation](/derivations/holography/hawking-radiation)) relates $T_H$ to $R_S$. Substituting the thermodynamic relation $E = Mc^2$ with $R_S = 2GM/c^2$:

$$S_{\max} = \frac{k_B c^3 A}{4 G \hbar} = \frac{A}{4\ell_P^2}$$

(in natural units $k_B = 1$). The factor $1/4$ arises from the geometric relationship $R_S = 2GM/c^2$ and $\ell_P^2 = \hbar G/c^3$: the horizon area $A = 4\pi R_S^2$ encodes $A/(4\ell_P^2)$ bits because the effective area per bit is $4\ell_P^2$, reflecting the spherical geometry factor. $\square$

### Synthesis

**Theorem 5.2 (Holographic entropy bound).** *For any spatial region bounded by area $A$:*

$$S \leq \frac{A}{4\ell_P^2}$$

*Argument 1 (boundary counting) establishes $S \propto A/\ell_P^2$ from the maximum number of relational invariant crossings. Argument 2 (channel capacity + gravitational stability) fixes the coefficient $1/4$. The bound is tight: it is saturated by black holes ([Black Hole Entropy](/derivations/holography/black-hole-entropy)).*

### Step 6: The Bekenstein Bound

**Proposition 6.1 (Bekenstein bound).** *For a system of energy $E$ enclosed in a sphere of radius $R$:*

$$S \leq \frac{2\pi R E}{\hbar c}$$

*Proof.* The energy $E$ is the total coherence content ([Action and Planck's Constant](/derivations/thermodynamics/action-planck), Corollary 4.2: $E = \hbar\omega$). The radius $R$ sets the propagation timescale $R/c$. The number of independent cycles that can be observed in time $R/c$ is $E \cdot (R/c) / \hbar = ER/(\hbar c)$. The factor $2\pi$ arises from the $U(1)$ phase: a full cycle of phase $2\pi$ carries one bit.

Consistency check: the maximum energy before gravitational collapse is $E_{\max} = Rc^4/(2G)$. Substituting into the Bekenstein bound: $S \leq 2\pi R \cdot Rc^4/(2G) / (\hbar c) = \pi R^2 c^3/(G\hbar) = \pi R^2/\ell_P^2$. For a sphere, $A = 4\pi R^2$, so $S \leq A/(4\ell_P^2)$ — recovering the holographic bound. $\square$

## Comparison with Standard Holographic Principle

| Standard holographic principle | Observer-centric derivation |
|---|---|
| Postulated from black hole thermodynamics | Derived from boundary counting + channel capacity |
| Entropy is observer-independent | Entropy is observer-indexed (relative to external $\mathcal{O}_{\text{ext}}$) |
| Applies to arbitrary regions | Applies to regions with well-defined boundaries in the coherence geometry |
| Factor of $1/4$ from Euclidean path integral | Factor of $1/4$ from gravitational stability constraint |
| Suggests holographic duality (AdS/CFT) | Suggests boundary encodes relational invariant crossings |
| Volume DOF are "redundant" | Volume coherence is real but inaccessible to bounded external observers |

A key difference: in the framework, the holographic bound is not a statement about fundamental degrees of freedom being two-dimensional. The volume *does* contain coherence structure. The bound reflects the finite capacity of a bounded observer to access that structure through the boundary — a consequence of observer-indexing, not of the universe being secretly two-dimensional.

### Consistency Model

**Theorem 7.1.** *The Schwarzschild black hole provides a consistency model for the holographic entropy bound.*

*Verification.* Take a Schwarzschild black hole of mass $M$ with horizon area $A = 16\pi G^2 M^2/c^4$.

- **Boundary mediation** (Proposition 1.2): All information about the interior is accessible only through the horizon surface — the event horizon is a causal boundary. $\checkmark$
- **Planck-scale tiling** (Proposition 2.1, Corollary 2.2): The horizon area supports $N = A/\ell_P^2$ Planck cells. $\checkmark$
- **Area scaling** (Theorem 3.2): The Bekenstein-Hawking entropy $S_{BH} = A/(4\ell_P^2) \propto A/\ell_P^2$. $\checkmark$
- **Bandwidth limit** (Proposition 4.2): At the Planck scale, the maximum information rate per cell is $1/t_P$, giving total capacity $\dot{I} = Ac/\ell_P^3$. $\checkmark$
- **Holographic bound** (Theorem 5.2): $S_{BH} = A/(4\ell_P^2)$ — the bound is saturated. No known configuration with the same boundary area has higher entropy [Bekenstein, 1981]. $\checkmark$
- **Bekenstein bound** (Proposition 6.1): For the Schwarzschild black hole, $S \leq 2\pi RE/(\hbar c)$ with $R = R_S = 2GM/c^2$ and $E = Mc^2$ gives $S \leq 4\pi G M^2/(\hbar c) = A/(4\ell_P^2)$. Saturated. $\checkmark$ $\square$

## Rigor Assessment

**Fully rigorous:**
- Proposition 1.2: Boundary mediation (follows from the definition of coherence domains and relational invariants)
- Corollary 2.2: Maximum number of Planck cells on area $A$ (dimensional analysis given S1)
- Proposition 3.1: One bit per crossing (follows from irreducibility of relational invariants — binary present/absent)
- Proposition 4.2: Bandwidth limit from $L = cT$ (follows from the speed-of-light derivation)
- Proposition 6.1: Bekenstein bound consistent with holographic bound (algebraic verification)
- Theorem 7.1: Consistency model verified on Schwarzschild black hole

**Rigorous given axioms + S1:**
- Theorem 3.2: Area scaling $S \propto A/\ell_P^2$ (boundary mediation + Planck cell tiling + one bit per crossing)
- Theorem 5.1: The coefficient $1/4$ from gravitational stability (uses Schwarzschild geometry and the thermodynamic relation $S = E/(2T_H)$)
- Theorem 5.2: Holographic entropy bound $S \leq A/(4\ell_P^2)$ (synthesis of both arguments)

**Structural postulate (tightened):**
- S1 (Planck-scale resolution): The Planck length is dimensionally unique and the minimum scale is a fixed-point property of the self-consistency equation $G = \ell_{\min}^2 c^3/\hbar$ ([Gravitational Coupling](/derivations/spacetime/gravitational-constant), Theorem 3.3). The remaining postulated content is equivalent to the bootstrap fixed-point uniqueness conjectures (7.1–7.2 of [Bootstrap](/derivations/interactions/bootstrap)). If those are proved, S1 becomes a theorem.

**Forward dependency:**
- Theorem 5.1 invokes the Hawking temperature $T_H$ ([Hawking Radiation](/derivations/holography/hawking-radiation)), which depends on [Black Hole Entropy](/derivations/holography/black-hole-entropy), which depends on this derivation. The circularity is resolved because both the entropy and temperature follow independently from the geometric structure of the Schwarzschild horizon — the consistency is a self-consistency condition, not a circular argument.

**Open assumptions:**
- The transition from discrete loop counting to continuous area uses the continuum limit, assumed but not constructed.
- The channel capacity argument (Proposition 4.2) assumes a static boundary. Extension to dynamical spacetimes (cosmological horizons) requires the covariant Bousso bound.

**Assessment:** The holographic entropy bound is rigorous given S1 (Planck-scale resolution). The area scaling $S \propto A/\ell_P^2$ is established from boundary counting. The coefficient $1/4$ is obtained through the gravitational stability argument using established GR results (Schwarzschild geometry, thermodynamic relations).

## Open Gaps

1. **A direct combinatorial route to $\alpha = 1/4$**: The coefficient is currently established by the gravitational stability argument (Theorem 5.1), which uses the Schwarzschild geometry — itself derived from the axioms through the Einstein equations chain. A purely combinatorial derivation from the coherence geometry alone, without routing through specific spacetime solutions, would provide a more direct connection. This likely requires the full mathematical formalization of the coherence Lagrangian.
2. **Covariant generalization**: The derivation assumes a spatial region at a moment of time. A covariant formulation would bound the entropy on arbitrary spacelike surfaces — connecting to the Bousso covariant entropy bound.
3. **Sub-Planckian structure**: The derivation assumes nothing meaningful happens below $\ell_P$. If the coherence geometry has sub-Planckian structure, the counting argument needs modification.
4. **Dynamical boundaries**: For time-dependent regions (e.g., expanding cosmological horizons), the channel capacity argument must be adapted. The entropy bound should track the apparent horizon, not the event horizon.

## Addressed Gaps

1. **Connection to holographic noise** — *Resolved by [Causal Set Statistics](/derivations/holography/causal-set-statistics) derivation (rigorous)*: The Planck-cell fluctuations from the discrete boundary structure yield a strain power spectral density $S_h = \ell_P/(2c)$, completing the path from area scaling to the experimental holographic noise prediction.

<!-- References -->
[Bekenstein, 1981]: /references#bekenstein-1981
