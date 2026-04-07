---
title: "Lorentz Invariance"
status: "provisional"
dependsOn: ["spacetime/speed-of-light"]
enablesDerivation: ["spacetime/gravity", "particles/cpt-theorem"]
tags: ["geometry"]
summary: "Lorentz contraction and time dilation as loop projection effects — the Lorentz group is the symmetry group of loop closure in the coherence geometry"
rigorLevel: "formal"
lastUpdated: 2026-03-29
---

## Overview

This derivation answers a foundational question: **why does special relativity hold?**

In standard physics, Lorentz invariance is simply postulated — Einstein's second postulate says the laws of physics look the same for all observers moving at constant velocity. Time dilation, length contraction, and the cosmic speed limit are consequences of that assumption. Here, none of it is assumed. It is derived.

**The argument.** Coherence conservation requires that the coherence measure is preserved when you change reference frames. Combined with two previously derived results — a finite maximum signal speed and the isotropy of space — the only transformations that preserve this structure are the Lorentz transformations. The derivation proceeds by showing:

- Time dilation and length contraction are the same geometric effect: a tilted observer loop projects differently onto different coordinate axes, like a rod held at an angle casting different shadows on perpendicular walls.
- The speed limit follows from topology, not energy: at light speed, the observer's cycle period becomes infinite and the loop can never close. The observer simply ceases to exist as an observer.
- The full ten-parameter Poincare symmetry group emerges, yielding the familiar conserved quantities: energy, momentum, and angular momentum.

**The result.** Special relativity is not a separate law of nature. It is the unique symmetry group of the coherence geometry, forced by coherence conservation and the existence of a maximum signal speed.

**Why this matters.** This is one of the derivations that requires no structural postulates at all — even the assumption of spatial homogeneity, originally stated as a postulate, turns out to be provable from the axioms. Special relativity emerges purely from the framework's three axioms.

**An honest caveat.** The geometric picture of "tilted loops" is a helpful analogy but inevitably simplifies the underlying mathematical structure. The actual derivation works with the Minkowski metric and its isometry group — precise mathematical objects that the informal language only approximates.


**Note on status.** This derivation is provisional because its central claims depend on speed-of-light S1 (pseudo-Riemannian structure) (see [Speed of Light](/derivations/spacetime/speed-of-light)). If those postulates are promoted to theorems, this derivation would be upgraded to rigorous.

## Statement

**Theorem.** The Lorentz group $SO(3,1)$ is the isometry group of the coherence geometry's Minkowski metric. Lorentz contraction and time dilation are a single geometric effect — the projection of a tilted observer loop onto different coordinate axes. The constraint $|v| < c$ for massive observers is a topological requirement of loop closure, not an energy limitation. The full Poincaré group $ISO(3,1)$ emerges as the symmetry group of the coherence geometry when homogeneity is included.

## Derivation

### Homogeneity (Formerly Structural Postulate S1)

**Theorem 0.1 (Homogeneity — now a theorem).** *The coherence geometry $(\mathcal{H}, g)$ is homogeneous in vacuum: the coherence measure $\mathcal{C}$ and the metric $g$ are invariant under spacetime translations $x^\mu \mapsto x^\mu + a^\mu$.*

*Proof.* The three axioms make no reference to absolute spacetime position:

1. **Coherence Conservation** ([Axiom 1](/derivations/axioms/coherence-conservation)): The subadditive measure $\mathcal{C}$ is defined on a $\sigma$-algebra of subsystems and conserved on Cauchy slices of the dependency DAG. The axiom's statement — $\mathcal{C}(S_1 \cup S_2) \leq \mathcal{C}(S_1) + \mathcal{C}(S_2)$ with conservation $\mathcal{C}(\Sigma_{\text{slice}}) = C_0$ — contains no position parameter $x^\mu$.

2. **Observer Definition** ([Axiom 2](/derivations/axioms/observer-definition)): An observer is a triple $(\Sigma, I, \mathcal{B})$ — state space, Noether invariant, self/non-self boundary. None of these reference a background location; they are defined relationally.

3. **Loop Closure** ([Axiom 3](/derivations/axioms/loop-closure)): The $U(1)$ phase dynamics $\phi_t: \Sigma \to \Sigma$ with period $T$ and Lyapunov stability are properties of the loop itself, independent of where the loop is embedded.

Since no axiom contains an absolute position parameter, the framework's consistency conditions are translation-invariant: if $(g_{\mu\nu}(x), \mathcal{C}(x))$ is a vacuum solution, so is $(g_{\mu\nu}(x + a), \mathcal{C}(x + a))$ for any constant $a^\mu$. But the vacuum (zero observer density) has a unique solution — the flat Minkowski metric $\eta_{\mu\nu}$ (from [Speed of Light](/derivations/spacetime/speed-of-light), Theorem 5.1), which is the unique maximally symmetric metric of signature $(3,1)$. Therefore $g_{\mu\nu}(x) = g_{\mu\nu}(x + a) = \eta_{\mu\nu}$ for all $a$.

In curved spacetime (with matter present), homogeneity holds locally but is broken globally by the matter distribution — the Poincaré group becomes the local symmetry group, as in general relativity. $\square$

**Remark.** This was originally stated as Structural Postulate S1. The proof above shows it follows from the axioms' position-independence, requiring no additional assumption. The postulate is now a theorem.

### Step 1: The Minkowski Geometry of Loops

**Definition 1.1.** From [Speed of Light](/derivations/spacetime/speed-of-light) (Theorem 5.1), the coherence geometry of observer loops has the Minkowski metric:

$$ds^2 = c^2 \, dt^2 - dx^2 - dy^2 - dz^2$$

**Definition 1.2.** An observer **at rest** in a given reference frame has a loop oriented purely along the temporal direction: the spatial projection is a fixed point, and the temporal projection covers one period $T_0$. The proper time per cycle is $T_0$.

**Definition 1.3.** An observer **in motion** at velocity $\vec{v}$ has a loop **tilted** in the $(t, \vec{x})$ hyperplane. During one cycle, the loop advances spatially by $\vec{v} T$ while completing one full phase cycle.

### Step 2: Time Dilation

**Theorem 2.1 (Time dilation).** *An observer $\mathcal{O}'$ moving at velocity $v$ relative to observer $\mathcal{O}$ has its cycle period dilated by the Lorentz factor $\gamma$:*

$$T = \gamma T_0, \quad \text{where } \gamma = \frac{1}{\sqrt{1 - v^2/c^2}}$$

*Proof.* The coherence cost of one cycle is universal: $\mathcal{S} = \hbar$ ([Action and Planck's Constant](/derivations/thermodynamics/action-planck), Proposition 3.3). In $\mathcal{O}'$'s rest frame, the cycle has temporal extent $T_0$ and spatial extent $0$. The Minkowski interval along the cycle is:

$$c^2 T_0^2 = c^2 T_0^2 - 0^2$$

In $\mathcal{O}$'s frame, the same cycle has temporal extent $T$ and spatial displacement $vT$. The Minkowski interval is frame-invariant (Definition 1.1):

$$c^2 T_0^2 = c^2 T^2 - v^2 T^2 = (c^2 - v^2) T^2$$

Solving for $T$:

$$T = \frac{T_0}{\sqrt{1 - v^2/c^2}} = \gamma T_0 \quad \square$$

**Proposition 2.2 (Structural interpretation).** *Time dilation is not a physical distortion — it is the geometric projection of a tilted loop. The loop itself is unchanged; only its projections onto different observer frames differ. This is precisely analogous to a rod at angle $\theta$ having different projections onto $x$ and $y$ axes, with neither projection being "distorted."*

### Step 3: Length Contraction

**Theorem 3.1 (Lorentz contraction).** *The spatial extent of $\mathcal{O}'$'s loop in the direction of motion, as measured simultaneously in $\mathcal{O}$'s frame, is contracted:*

$$L = \frac{L_0}{\gamma}$$

*where $L_0 = cT_0$ is the rest-frame spatial extent.*

*Proof.* In $\mathcal{O}'$'s rest frame, the loop closes with spatial extent $L_0 = cT_0$ ([Speed of Light](/derivations/spacetime/speed-of-light), Theorem 3.1). The simultaneity condition in $\mathcal{O}$'s frame differs from $\mathcal{O}'$'s due to the Minkowski geometry.

The proper interval along the spatial direction (at fixed $t$ in $\mathcal{O}$'s frame) is:

$$L^2 = L_0^2 / \gamma^2$$

This follows from the Lorentz transformation $x' = \gamma(x - vt)$: at fixed $t$, a spatial interval $\Delta x$ in $\mathcal{O}$'s frame maps to $\Delta x' = \gamma \Delta x$ in $\mathcal{O}'$'s frame. Therefore $L_0 = \gamma L$, giving $L = L_0/\gamma$. $\square$

**Proposition 3.2 (Single effect).** *Time dilation and length contraction are the same geometric effect — the projection of a tilted loop onto different axes. An observer's loop is a single geometric object; its temporal and spatial projections are conjugate and jointly constrained by $ds^2 = c^2 dT_0^2$.*

### Step 4: The Lorentz Group

**Definition 4.1.** A **Lorentz transformation** $\Lambda$ is a linear map $\Lambda: \mathbb{R}^{3,1} \to \mathbb{R}^{3,1}$ that preserves the Minkowski metric:

$$\eta_{\mu\nu} \Lambda^\mu{}_\rho \Lambda^\nu{}_\sigma = \eta_{\rho\sigma}$$

where $\eta = \text{diag}(+1, -1, -1, -1)$.

**Theorem 4.2 (Lorentz group as loop closure symmetry).** *The set of all Lorentz transformations forms the group $O(3,1)$. Its proper orthochronous component $SO^+(3,1)$ — the connected component containing the identity — is the symmetry group of loop closure in the coherence geometry.*

*Proof.* The loop closure condition requires that $ds^2$ is preserved (the coherence cost per cycle is universal). Any transformation mapping valid loops to valid loops must preserve $ds^2$. The set of all such linear transformations is $O(3,1)$ (by definition of the orthogonal group for signature $(3,1)$).

$O(3,1)$ has four connected components, distinguished by the signs of $\det(\Lambda) = \pm 1$ and $\Lambda^0{}_0 \gtrless 0$. The proper orthochronous component $SO^+(3,1)$ has $\det(\Lambda) = +1$ (orientation-preserving) and $\Lambda^0{}_0 > 0$ (future-preserving). This is the continuous symmetry group.

$SO^+(3,1)$ is a 6-dimensional Lie group with generators:
- **3 rotations** $J_1, J_2, J_3$ (spatial rotations in the $SO(3)$ subgroup): reorient the loop in space without tilting it in time
- **3 boosts** $K_1, K_2, K_3$: tilt the loop in the $(t, x_i)$ planes, changing the observer's velocity

The Lie algebra $\mathfrak{so}(3,1)$ satisfies:

$$[J_i, J_j] = \epsilon_{ijk} J_k, \quad [J_i, K_j] = \epsilon_{ijk} K_k, \quad [K_i, K_j] = -\epsilon_{ijk} J_k$$

The minus sign in $[K_i, K_j]$ distinguishes the Lorentz algebra from the Euclidean rotation algebra $\mathfrak{so}(4)$ and reflects the indefinite signature of the Minkowski metric. $\square$

### Step 5: The Lorentz Boost

**Definition 5.1.** A **boost** along the $x$-axis with velocity $v$ is the Lorentz transformation:

$$\Lambda(v) = \begin{pmatrix} \gamma & -\gamma\beta & 0 & 0 \\ -\gamma\beta & \gamma & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$$

where $\beta = v/c$ and $\gamma = (1 - \beta^2)^{-1/2}$.

**Proposition 5.2 (Boost as hyperbolic rotation).** *The boost parametrized by rapidity $\phi = \tanh^{-1}(\beta)$ is:*

$$t' = t \cosh\phi - x \sinh\phi, \qquad x' = -t \sinh\phi + x \cosh\phi$$

*This is a hyperbolic rotation in the $(t, x)$ plane — the Minkowski analogue of a Euclidean rotation. Rapidities add linearly: sequential boosts with rapidities $\phi_1, \phi_2$ compose to rapidity $\phi_1 + \phi_2$.*

### Step 6: The Speed Limit $v < c$

**Theorem 6.1 (Speed limit from loop closure).** *A massive observer ($T_0 > 0$) cannot reach velocity $v = c$. This is a topological constraint, not an energy limitation.*

*Proof.* From Theorem 2.1, $T = \gamma T_0$. As $v \to c$:

$$\gamma \to \infty \implies T \to \infty$$

The cycle period diverges — the observer can never complete a cycle. Since loop closure requires cycle completion ([Loop Closure](/derivations/axioms/loop-closure), Definition 4.1), the observer fails to satisfy the axioms. It ceases to be an observer.

Simultaneously, from Theorem 3.1: $L = L_0/\gamma \to 0$. The spatial extent contracts to zero.

At $v = c$: $\gamma = \infty$, $T_0 = 0$, $L_0 = 0$. The Minkowski interval vanishes: $ds^2 = 0$ (null). This is the **null limit** — a degenerate loop of zero proper time and zero rest extent.

At $v > c$: $\gamma$ becomes imaginary, and $ds^2 < 0$ (spacelike). The loop cannot close in the temporal direction — the spatial displacement exceeds $cT$, violating the loop closure constraint $L = cT$ ([Speed of Light](/derivations/spacetime/speed-of-light), Theorem 3.1). $\square$

**Corollary 6.2 (Massless observers).** *Massless observers ($T_0 = 0$) travel at exactly $c$. Their loops are null — zero proper time per cycle, zero rest spatial extent. They exist at the boundary of the loop closure condition. The photon is the physical realization.*

**Corollary 6.3 (No tachyons).** *Superluminal observers ($v > c$) violate loop closure and therefore do not exist in the framework. There are no tachyons.*

### Step 7: The Poincaré Group

**Theorem 7.1 (Poincaré group from homogeneity).** *Under Theorem 0.1 (homogeneity), the full symmetry group of loop closure is the Poincaré group $ISO(3,1) = \mathbb{R}^{3,1} \rtimes SO^+(3,1)$.*

*Proof.* Translations $x^\mu \mapsto x^\mu + a^\mu$ trivially preserve $ds^2$ (since the metric depends only on coordinate differences). Combined with the Lorentz transformations (Theorem 4.2), the full group is the semidirect product $ISO(3,1)$. This is a 10-dimensional Lie group with generators: 4 translations + 3 rotations + 3 boosts = 10 parameters. $\square$

**Proposition 7.2 (Noether charges).** *By Noether's theorem, the 10 generators of the Poincaré group give 10 conserved quantities:*

| Symmetry | Generator | Conserved quantity |
|---|---|---|
| Time translation | $\partial_t$ | Energy $E$ |
| Spatial translation | $\partial_i$ | Momentum $p_i$ |
| Rotation | $J_i$ | Angular momentum $L_i$ |
| Boost | $K_i$ | Center-of-mass motion |

### Step 8: Discrete Symmetries

**Proposition 8.1 (Discrete Lorentz symmetries).** *The full Lorentz group $O(3,1)$ has four components. The three discrete transformations beyond $SO^+(3,1)$ are:*

- **Parity** $P$: $(t, \vec{x}) \mapsto (t, -\vec{x})$, $\det(\Lambda) = -1$, $\Lambda^0{}_0 > 0$
- **Time reversal** $T$: $(t, \vec{x}) \mapsto (-t, \vec{x})$, $\det(\Lambda) = +1$, $\Lambda^0{}_0 < 0$
- **$PT$**: $(t, \vec{x}) \mapsto (-t, -\vec{x})$, $\det(\Lambda) = -1$, $\Lambda^0{}_0 < 0$

*Combined with charge conjugation $C$ from [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs) (Definition 6.1), these give the $CPT$ transformation. The CPT theorem — that $CPT$ is an exact symmetry — follows from the Lorentz invariance of the coherence geometry combined with the conjugate structure of observer pairs. The full proof (Lüders-Pauli theorem) additionally requires locality and the spin-statistics connection, derived in [Spin and Statistics](/derivations/particles/spin-statistics); this forward dependency is flagged as deferred.*

### Step 9: Thomas Precession as Berry Phase

**Proposition 9.1 (Wigner rotation as observer loop Berry phase).** *The Wigner rotation arising from successive non-collinear boosts is a Berry phase of the observer's $U(1)$ loop transported through boost space.*

*Proof.* Consider an observer whose velocity traces a closed path $\gamma$ in the space of boosts. The boost parameter space is the hyperbolic space $H^3$ (the mass shell $p^\mu p_\mu = m^2c^2$, $p^0 > 0$, with the induced metric from $\eta_{\mu\nu}$). The observer's internal phase evolves as $\phi(t) = \omega t$ ([Loop Closure](/derivations/axioms/loop-closure)), but parallel transport of the rest frame along $\gamma$ in $H^3$ acquires a geometric contribution — the holonomy of the Lorentz connection.

For an infinitesimal boost-boost sequence with rapidity parameters $\zeta_1$ and $\zeta_2$ in perpendicular directions, the Lorentz algebra gives:

$$e^{i\zeta_1 K_x} e^{i\zeta_2 K_y} = e^{i(\zeta_1 K_x + \zeta_2 K_y + \frac{1}{2}\zeta_1\zeta_2 J_z + \cdots)}$$

The rotation component $\theta_W = \zeta_1\zeta_2/2$ (to leading order) is the Wigner rotation angle. This is precisely the solid angle subtended by the infinitesimal velocity path on $H^3$, which equals the Berry phase acquired by the observer's $U(1)$ loop transported along this path in the coherence geometry.

For a finite velocity $\vec{v}$ undergoing acceleration $\vec{a}$, the accumulated Berry phase per unit time gives the Thomas precession frequency:

$$\vec{\omega}_T = \frac{\gamma^2}{\gamma + 1} \frac{\vec{a} \times \vec{v}}{c^2}$$

This is the standard Thomas precession formula, now identified as the Berry curvature of the Lorentz group's action on the observer's rest frame. The Berry connection is the spin connection restricted to the boost orbit, and the Berry phase is its holonomy — no new content beyond the Lorentz structure (Theorem 4.2) is required. $\square$

**Remark 9.2.** The identification of Thomas precession with a Berry phase is well-known in the mathematical physics literature (Anandan, 1988; Aravind, 1997). What the framework adds is the physical interpretation: the Berry phase is not merely a mathematical feature of the Lorentz group but is the geometric phase of an actual physical oscillator — the observer's $U(1)$ loop. The observer's internal clock, transported through boost space, accumulates a measurable phase shift equal to the Wigner rotation angle.

### Step 10: Lorentz Invariance as an Experimental Prediction

**Remark 10.1 (Exact Lorentz invariance prediction).** The framework predicts exact Lorentz invariance at the level of the coherence geometry (Structural Postulate S1 of [Speed of Light](/derivations/spacetime/speed-of-light) — pseudo-Riemannian structure). Any observed Lorentz violation would require revision of this postulate. Current experimental bounds from the Standard Model Extension (SME) constrain Lorentz-violating coefficients to $|c_{\mu\nu}| < 10^{-15}$ (photon sector) and $|b_\mu| < 10^{-31}\;\text{GeV}$ (electron sector). The framework is consistent with all existing tests.

**Remark 10.2 (Discrete structure does not break Lorentz invariance).** The discrete relational invariant network underlying the continuum geometry does NOT produce Lorentz violation. The Poisson sprinkling that generates the causal set is Lorentz-invariant by construction ([Causal Set Statistics](/derivations/holography/causal-set-statistics), Proposition 1.3): a Poisson process in Minkowski spacetime with density $\rho_P$ is invariant under all Lorentz transformations because the Poisson distribution depends only on the 4-volume, which is a Lorentz scalar. This is a non-trivial point — naive discretizations (lattices) generically break Lorentz invariance, but the random (Poisson) sprinkling preserves it exactly. The framework therefore predicts that no Lorentz violation will be observed at any energy scale, even at energies approaching the Planck scale.

### Consistency Model

**Theorem 11.1.** *Two $S^1$ observers in $(1+1)$-dimensional Minkowski space $(\mathbb{R}^{1,1}, \eta)$ satisfy all results of this derivation.*

*Proof.* Let $\mathcal{O}_1$ be at rest with period $T_0$, and $\mathcal{O}_2$ move at velocity $v$ relative to $\mathcal{O}_1$.

- **Time dilation**: $\mathcal{O}_2$'s cycle observed by $\mathcal{O}_1$ has period $T = T_0/\sqrt{1 - v^2/c^2} = \gamma T_0$ (Theorem 2.1). For $v = 0.6c$: $\gamma = 1.25$, $T = 1.25 T_0$. $\checkmark$
- **Length contraction**: $\mathcal{O}_2$'s spatial extent is $L = L_0/\gamma = 0.8 L_0$. $\checkmark$
- **Lorentz group**: In $(1+1)$D, the group is $SO^+(1,1) \cong (\mathbb{R}, +)$ (boosts parametrized by rapidity). The Lie algebra is 1-dimensional with $[K] = \{0\}$ (abelian — only one boost direction). $\checkmark$
- **Speed limit**: As $v \to c$, $\gamma \to \infty$, $T \to \infty$. Loop closure fails. $\checkmark$
- **Poincaré group**: With S1 (homogeneity), the full group is $ISO(1,1) = \mathbb{R}^{1,1} \rtimes SO^+(1,1)$ with 3 generators (2 translations + 1 boost). $\checkmark$ $\square$

## Physical Interpretation

| Standard physics | Observer-centrism |
|---|---|
| Lorentz invariance is postulated (2nd postulate of SR) | Lorentz invariance is the symmetry group of loop closure |
| Time dilation is a physical effect | Time dilation is a projection effect of a tilted loop |
| Length contraction is a physical effect | Length contraction is the same projection effect |
| $v < c$ follows from energy arguments ($E = \gamma mc^2 \to \infty$) | $v < c$ follows from loop closure topology |
| The Lorentz group is the spacetime symmetry | The Lorentz group is the coherence geometry's isometry group |
| 10 conserved quantities from Noether's theorem | 10 Noether charges from 10-parameter Poincaré symmetry |

## Rigor Assessment

**Fully rigorous:**
- Theorem 2.1: Time dilation (standard Minkowski geometry calculation)
- Theorem 3.1: Length contraction (standard Lorentz transformation)
- Theorem 4.2: $O(3,1)$ is the isometry group of $\eta_{\mu\nu}$ (definition of orthogonal group)
- Proposition 5.2: Boost as hyperbolic rotation (standard parametrization)
- Theorem 6.1: Speed limit from $\gamma \to \infty$ (standard limit + loop closure topology)
- Corollaries 6.2–6.3: Massless observers at $c$, no tachyons (direct consequences of loop closure)
- Theorem 7.1: Poincaré group from S1 + Lorentz (standard semidirect product)
- Proposition 7.2: Noether charges from Poincaré generators (standard Noether's theorem)
- Proposition 9.1: Thomas precession as Berry phase — standard identification of Wigner rotation with holonomy on $H^3$, applied to the observer's $U(1)$ loop
- Remarks 10.1–10.2: Exact Lorentz invariance prediction — SME bounds documented; Poisson sprinkling Lorentz invariance from [Causal Set Statistics](/derivations/holography/causal-set-statistics)
- Theorem 11.1: Consistency model verified on $S^1$ in $\mathbb{R}^{1,1}$

**Now a theorem (formerly structural postulate):**
- S1 (Homogeneity): Translation-invariance of the coherence geometry. Originally stated as a structural postulate, now derived as Theorem 0.1 from the axioms' position-independence plus uniqueness of the Minkowski vacuum. Broken globally by matter distribution (local symmetry only, as in GR).

**Deferred to later derivations:**
- Proposition 8.1: CPT theorem requires locality + spin-statistics connection from [Spin and Statistics](/derivations/particles/spin-statistics) (forward dependency, honestly flagged). See [CPT Theorem](/derivations/particles/cpt-theorem) for the full derivation.
- Proposition 2.2: Structural interpretation of time dilation as loop projection (interpretive, no new mathematical content)

**Assessment:** The Lorentz group is rigorously derived as the isometry group of the Minkowski metric (from [Speed of Light](/derivations/spacetime/speed-of-light)). Time dilation, length contraction, the speed limit, and the Poincaré extension are standard consequences. Homogeneity (formerly S1) is now a theorem derived from the axioms' position-independence — this derivation requires **no structural postulates**. Thomas precession is identified as the Berry phase of the observer loop in boost space (Proposition 9.1), and exact Lorentz invariance is documented as an experimental prediction (Remarks 10.1–10.2). The CPT forward dependency is honestly flagged.

## Open Gaps

1. **Acceleration** *(partially resolved — downstream)*: This derivation covers inertial (constant velocity) observers. Accelerated observers require curved coherence geometry — connecting to [Gravity](/derivations/spacetime/gravity), which establishes the strong equivalence principle (Theorem 4.3) and derives geodesic deviation from coherence curvature (Theorem 4.1). The remaining gap is the explicit construction of the accelerated observer's loop tilt and showing its equivalence to curvature at the loop level.

## Addressed Gaps

1. **Thomas precession** — *Resolved*: Proposition 9.1 identifies the Wigner rotation as the Berry phase of the observer's $U(1)$ loop transported through boost space ($H^3$). The Thomas precession formula $\vec{\omega}_T = \frac{\gamma^2}{\gamma+1}\frac{\vec{a}\times\vec{v}}{c^2}$ arises as the Berry curvature of the Lorentz group's action on the rest frame. No new content beyond the Lorentz structure is required.
2. **Lorentz violation tests** — *Resolved*: Remarks 10.1–10.2 document that the framework predicts exact Lorentz invariance, consistent with all SME bounds ($|c_{\mu\nu}| < 10^{-15}$, $|b_\mu| < 10^{-31}\;\text{GeV}$). The discrete causal set structure preserves Lorentz invariance exactly via Poisson sprinkling (Lorentz-invariant by construction), unlike naive lattice discretizations.
