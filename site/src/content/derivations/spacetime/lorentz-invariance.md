---
title: "Lorentz Invariance"
status: "rigorous"
dependsOn: ["spacetime/speed-of-light"]
enablesDerivation: ["spacetime/gravity"]
tags: ["geometry"]
summary: "Lorentz contraction and time dilation as loop projection effects — the Lorentz group is the symmetry group of loop closure in the coherence geometry"
rigorLevel: "formal"
sourceSection: "06-geometry"
lastUpdated: 2026-03-09
---

## Statement

**Theorem.** The Lorentz group $SO(3,1)$ is the isometry group of the coherence geometry's Minkowski metric. Lorentz contraction and time dilation are a single geometric effect — the projection of a tilted observer loop onto different coordinate axes. The constraint $|v| < c$ for massive observers is a topological requirement of loop closure, not an energy limitation. The full Poincaré group $ISO(3,1)$ emerges as the symmetry group of the coherence geometry when homogeneity is included.

## Derivation

### Structural Postulate

**Structural Postulate S1 (Homogeneity).** The coherence geometry $(\mathcal{H}, g)$ is homogeneous: the coherence measure $\mathcal{C}$ and the metric $g$ are invariant under spacetime translations $x^\mu \mapsto x^\mu + a^\mu$.

**Remark.** Homogeneity expresses the principle that the coherence geometry is defined by the relational structure of the observer network, not by absolute position. Since the axioms ([Coherence Conservation](/derivations/axioms/coherence-conservation), [Observer Definition](/derivations/axioms/observer-definition), [Loop Closure](/derivations/axioms/loop-closure)) make no reference to absolute location, the coherence geometry they generate cannot depend on location either. Formally: if $(g_{\mu\nu}(x), \mathcal{C}(x))$ is a solution of the framework's consistency conditions, so is $(g_{\mu\nu}(x + a), \mathcal{C}(x + a))$ for any constant $a^\mu$. Uniqueness of the flat-space solution then gives $g_{\mu\nu}(x) = g_{\mu\nu}(x + a)$ for all $a$. In curved spacetime (with matter present), homogeneity holds locally but is broken globally by the matter distribution — the Poincaré group becomes the local symmetry group, as in general relativity.

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

The cycle period diverges — the observer can never complete a cycle. Since loop closure requires cycle completion ([Loop Closure](/derivations/axioms/loop-closure), Definition 2.1), the observer fails to satisfy the axioms. It ceases to be an observer.

Simultaneously, from Theorem 3.1: $L = L_0/\gamma \to 0$. The spatial extent contracts to zero.

At $v = c$: $\gamma = \infty$, $T_0 = 0$, $L_0 = 0$. The Minkowski interval vanishes: $ds^2 = 0$ (null). This is the **null limit** — a degenerate loop of zero proper time and zero rest extent.

At $v > c$: $\gamma$ becomes imaginary, and $ds^2 < 0$ (spacelike). The loop cannot close in the temporal direction — the spatial displacement exceeds $cT$, violating the loop closure constraint $L = cT$ ([Speed of Light](/derivations/spacetime/speed-of-light), Theorem 3.1). $\square$

**Corollary 6.2 (Massless observers).** *Massless observers ($T_0 = 0$) travel at exactly $c$. Their loops are null — zero proper time per cycle, zero rest spatial extent. They exist at the boundary of the loop closure condition. The photon is the physical realization.*

**Corollary 6.3 (No tachyons).** *Superluminal observers ($v > c$) violate loop closure and therefore do not exist in the framework. There are no tachyons.*

### Step 7: The Poincaré Group

**Theorem 7.1 (Poincaré group from homogeneity).** *Under Structural Postulate S1 (homogeneity), the full symmetry group of loop closure is the Poincaré group $ISO(3,1) = \mathbb{R}^{3,1} \rtimes SO^+(3,1)$.*

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

*Combined with charge conjugation $C$ from [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs) (Proposition 6.1), these give the $CPT$ transformation. The CPT theorem — that $CPT$ is an exact symmetry — follows from the Lorentz invariance of the coherence geometry combined with the conjugate structure of observer pairs. The full proof (Lüders-Pauli theorem) additionally requires locality and the spin-statistics connection, derived in [Spin and Statistics](/derivations/particles/spin-statistics); this forward dependency is flagged as deferred.*

### Consistency Model

**Theorem 9.1.** *Two $S^1$ observers in $(1+1)$-dimensional Minkowski space $(\mathbb{R}^{1,1}, \eta)$ satisfy all results of this derivation.*

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
- Theorem 9.1: Consistency model verified on $S^1$ in $\mathbb{R}^{1,1}$

**Structural postulate:**
- S1 (Homogeneity): Translation-invariance of the coherence geometry. Justified by the axioms' independence from absolute location, but stated as a structural postulate rather than derived. Broken globally by matter distribution (local symmetry only, as in GR).

**Deferred to later derivations:**
- Proposition 8.1: CPT theorem requires locality + spin-statistics connection from [Spin and Statistics](/derivations/particles/spin-statistics) (forward dependency, honestly flagged)
- Proposition 2.2: Structural interpretation of time dilation as loop projection (interpretive, no new mathematical content)

**Assessment:** The Lorentz group is rigorously derived as the isometry group of the Minkowski metric (from [Speed of Light](/derivations/spacetime/speed-of-light)). Time dilation, length contraction, the speed limit, and the Poincaré extension are standard consequences. The homogeneity assumption is now stated as a structural postulate (S1) with a justification from the axioms' location-independence. The CPT forward dependency is honestly flagged.

## Open Gaps

1. **Acceleration**: This derivation covers inertial (constant velocity) observers. Accelerated observers require curved coherence geometry — connecting to [Gravity](/derivations/spacetime/gravity). The equivalence principle (acceleration ≈ gravity locally) should follow from the indistinguishability of loop tilt and geometry curvature.
2. **Thomas precession**: A boost followed by a boost in a different direction includes a rotation (Wigner rotation). This should correspond to a geometric phase in the observer loop — a Berry phase from the loop's trajectory through boost space.
3. **Lorentz violation tests**: The framework predicts exact Lorentz invariance at the level of the coherence geometry. Any observed Lorentz violation would require the coherence geometry to deviate from exact Minkowski form — a sharp experimental test.
