---
title: "Electromagnetism from Phase Coherence"
status: "draft"
dependsOn: ["axioms/loop-closure", "spacetime/speed-of-light", "spacetime/lorentz-invariance"]
enablesDerivation: ["gauge/weak-interaction", "gauge/standard-model-group"]
tags: ["gauge"]
summary: "The U(1) phase symmetry of observer loops, combined with finite signal propagation and the relational nature of physics, forces a local gauge connection whose curvature is the electromagnetic field. Maxwell's equations follow from coherence conservation and uniqueness in 3+1 dimensions."
rigorLevel: "semi-formal"
lastUpdated: 2026-03-09
---

## Statement

**Theorem.** The $U(1)$ phase symmetry of each observer ([Loop Closure](/derivations/axioms/loop-closure), Axiom 3) cannot be globally synchronized: finite signal propagation ([Speed of Light](/derivations/spacetime/speed-of-light)) and the relational nature of physics ([Relational Invariants](/derivations/interactions/relational-invariants)) imply that each observer's phase convention is independent. Maintaining phase coherence across spacetime requires a connection $A_\mu$ on a principal $U(1)$ bundle. The curvature $F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$ is the electromagnetic field. Maxwell's equations follow from coherence conservation (Axiom 1) and a Lovelock-type uniqueness argument for gauge field dynamics in $3+1$ dimensions. Electric charge is the winding number of the observer loop, already quantized by the topological structure of [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs).

## Structural Postulates

**Structural Postulate S1 (Locality of phase comparison).** The comparison of $U(1)$ phases between observers at distinct spacetime points $x$ and $y$ requires smooth parallel transport along paths in the coherence geometry. This parallel transport is described by a connection 1-form $A$ on a principal $U(1)$ bundle $P \to \mathcal{M}$ over the spacetime manifold $\mathcal{M}$.

**Remark.** This postulate is the gauge-theory analog of the pseudo-Riemannian structural postulate S1 in [Speed of Light](/derivations/spacetime/speed-of-light). Both provide the geometric language for a physical requirement: S1 there says spacetime has a metric; S1 here says phase space has a connection. The physical motivation (Steps 1–2 below) is that relational physics with finite signal speed makes global phase conventions impossible, so phase comparison must be mediated by a local geometric structure.

**Structural Postulate S2 (Minimal gauge dynamics).** The self-consistency condition for the gauge connection involves at most second derivatives of $A_\mu$ — equivalently, at most first derivatives of $F_{\mu\nu}$.

**Remark.** This is the gauge-theory analog of S1 in [Einstein Field Equations](/derivations/spacetime/einstein-equations) (second-order locality for gravity). The justification is the same: higher-derivative equations would couple the field to non-local coherence information, violating the principle that the interaction graph determines dynamics locally.

## Derivation

### Step 1: Observer Phases and Relational Physics

**Definition 1.1.** Let $\mathcal{O}_x = (\Sigma_x, I_x, \mathcal{B}_x)$ be an observer at spacetime point $x$. By [Loop Closure](/derivations/axioms/loop-closure) (Corollary 2.3), $\mathcal{O}_x$ has a faithful $U(1)$ action with internal phase $\theta_x \in [0, 2\pi)$.

**Proposition 1.2 (Phase redundancy).** *Physical observables depend only on phase differences between observers, not on absolute phase values.*

*Proof.* By [Relational Invariants](/derivations/interactions/relational-invariants) (Definition 1.1), a relational invariant $I_{12}$ between observers $\mathcal{O}_1$ and $\mathcal{O}_2$ satisfies condition (R1): invariance under the diagonal $U(1)$ action $(\theta_1, \theta_2) \mapsto (\theta_1 + \alpha, \theta_2 + \alpha)$. Therefore $I_{12}$ depends only on $\theta_1 - \theta_2$.

More concretely, the consistency model of [Relational Invariants](/derivations/interactions/relational-invariants) (Theorem 7.1) constructs $I_{12}(\theta_1, \theta_2) = \cos(\theta_1 - \theta_2)$, which manifestly depends only on the phase difference.

Under a global phase shift $\theta(x) \to \theta(x) + \alpha$ for constant $\alpha$, all relational invariants are unchanged. This is the global $U(1)$ symmetry of the observer network — the same symmetry established in [Loop Closure](/derivations/axioms/loop-closure) (Theorem 3.1), now recognized as a redundancy. $\square$

### Step 2: Local Phase Independence

**Theorem 2.1 (Local phase independence).** *In the coherence geometry with finite phase propagation speed $c$ ([Speed of Light](/derivations/spacetime/speed-of-light), Theorem 2.2), the global $U(1)$ redundancy extends to a local gauge redundancy:*

$$\theta(x) \to \theta(x) + \alpha(x)$$

*for arbitrary smooth $\alpha: \mathcal{M} \to \mathbb{R}$, leaving all relational invariants unchanged.*

*Proof.* The argument has two parts.

**Part 1 (Spacelike separation).** Consider observers $\mathcal{O}_A$ at $x$ and $\mathcal{O}_B$ at $y$ with spacelike separation ($|x - y|^2 > c^2|t_x - t_y|^2$). By the maximal signaling speed ([Speed of Light](/derivations/spacetime/speed-of-light), Proposition 4.2), no phase information propagates between them. Therefore $\mathcal{O}_A$ and $\mathcal{O}_B$ cannot coordinate their phase conventions — each must choose independently.

**Part 2 (General separation).** For any spacetime point $x$, the set of points that have interacted with $x$ (i.e., are connected by directed paths in the interaction graph) is bounded by the past light cone. At any time $t$, the phase convention at $x$ is unconstrained by the conventions at all points outside the past light cone of $x$.

Consequently, the phase convention at each spacetime point is independent of the convention at every spacelike-separated point. A change $\theta(x) \to \theta(x) + \alpha(x)$ with smoothly varying $\alpha$ changes no relational invariant between spacelike-separated observers (by Proposition 1.2). For timelike-separated observers, their relational invariants depend on the *transported* phase difference — and this transport is precisely what the connection $A_\mu$ (Step 3) encodes.

The physical content: the symmetry $\theta(x) \to \theta(x) + \alpha(x)$ is a genuine redundancy of the framework, because absolute phases are unphysical (Proposition 1.2) and phase conventions cannot be globally coordinated (finite $c$). $\square$

**Remark (Why local gauge symmetry is not assumed).** In standard gauge theory, local $U(1)$ symmetry is typically *postulated*. Here, it is *motivated* by the framework's combination of (a) relational physics — only phase differences are physical — and (b) finite signal propagation — global coordination is impossible. These are both established results, not assumptions. The structural postulate S1 then provides the *mathematical implementation* of this physical reality (a principal bundle with connection), just as the pseudo-Riemannian postulate in [Speed of Light](/derivations/spacetime/speed-of-light) implements the physical reality of finite propagation speed.

### Step 3: The Gauge Connection

**Definition 3.1 (Covariant phase transport).** Using Structural Postulate S1, the principal $U(1)$ bundle $P \to \mathcal{M}$ carries a connection 1-form $A \in \Omega^1(\mathcal{M}, \mathfrak{u}(1))$. The **covariant phase transport** from $x$ to $x + dx$ is:

$$\theta(x + dx) = \theta(x) + q A_\mu(x) \, dx^\mu + O(dx^2)$$

where $q$ is the observer's charge — the Noether charge of its $U(1)$ symmetry ([Minimal Observer Structure](/derivations/minimal-observer/structure), Theorem 4.1).

**Definition 3.2 (Covariant derivative).** The **covariant derivative** of the phase field is:

$$D_\mu \theta = \partial_\mu \theta + q A_\mu$$

This extracts the physical (gauge-invariant) rate of phase change from the coordinate-dependent expression $\partial_\mu \theta$.

**Proposition 3.3 (Gauge transformation law).** *Under the local phase reparametrization $\theta(x) \to \theta(x) + \alpha(x)$, the connection transforms as:*

$$A_\mu \to A_\mu - \frac{1}{q} \partial_\mu \alpha$$

*Proof.* The covariant derivative must be gauge-covariant: $D'_\mu \theta' = D_\mu \theta + \partial_\mu \alpha + q \delta A_\mu = D_\mu \theta$ requires $q \, \delta A_\mu = -\partial_\mu \alpha$, giving $\delta A_\mu = -(1/q)\partial_\mu \alpha$. $\square$

### Step 4: The Electromagnetic Field Strength

**Definition 4.1.** The **field strength tensor** is the curvature 2-form of the $U(1)$ connection:

$$F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$$

**Proposition 4.2 (Gauge invariance).** *$F_{\mu\nu}$ is invariant under gauge transformations.*

*Proof.* $F'_{\mu\nu} = \partial_\mu(A_\nu - \frac{1}{q}\partial_\nu\alpha) - \partial_\nu(A_\mu - \frac{1}{q}\partial_\mu\alpha) = F_{\mu\nu} - \frac{1}{q}(\partial_\mu\partial_\nu - \partial_\nu\partial_\mu)\alpha = F_{\mu\nu}$, since partial derivatives commute on smooth functions. $\square$

**Proposition 4.3 (Holonomy interpretation).** *$F_{\mu\nu}$ measures the path-dependence of phase transport. The phase accumulated around an infinitesimal loop in the $(\mu,\nu)$ plane is:*

$$\Delta\theta = q \oint A_\mu \, dx^\mu = q F_{\mu\nu} \, \Delta S^{\mu\nu}$$

*where $\Delta S^{\mu\nu}$ is the oriented area of the loop.*

*Proof.* Stokes' theorem applied to the $U(1)$ connection: $\oint_{\partial S} A = \int_S dA = \int_S F$. $\square$

**Remark.** Non-zero $F_{\mu\nu}$ means that phase transport depends on the path taken — there is an obstruction to global phase synchronization. This is the precise sense in which the electromagnetic field is the *curvature* of the phase space.

**Proposition 4.4 (Bianchi identity — homogeneous Maxwell equations).**

$$\partial_{[\mu} F_{\nu\rho]} = 0$$

*Equivalently, $\partial_\mu (\star F^{\mu\nu}) = 0$, where $\star F$ is the Hodge dual. In 3-vector notation: $\nabla \cdot \mathbf{B} = 0$ and $\partial\mathbf{B}/\partial t + \nabla \times \mathbf{E} = 0$.*

*Proof.* Since $F = dA$ (the exterior derivative of a 1-form), $dF = d^2 A = 0$ by the nilpotency of the exterior derivative. In components: $\partial_{[\mu} F_{\nu\rho]} = \partial_{[\mu}\partial_\nu A_{\rho]} - \partial_{[\mu}\partial_\rho A_{\nu]} = 0$ by antisymmetrization of commuting derivatives. $\square$

### Step 5: Charge Conservation

**Definition 5.1.** The **phase current** $J^\mu$ is the Noether current associated with the $U(1)$ symmetry. For a collection of point-like observers with charges $q_i$ and worldlines $x_i^\mu(\tau)$:

$$J^\mu(x) = \sum_i q_i \int d\tau \, \frac{dx_i^\mu}{d\tau} \, \delta^4(x - x_i(\tau))$$

**Theorem 5.2 (Charge conservation).** $\partial_\mu J^\mu = 0$.

*Proof.* By [Coherence Conservation](/derivations/axioms/coherence-conservation) (Axiom 1), the $U(1)$ Noether charge is conserved: the total charge $Q = \int J^0 \, d^3x$ is constant on every Cauchy slice. The local form $\partial_\mu J^\mu = 0$ follows from the continuum limit, exactly as $\nabla_\mu T^{\mu\nu} = 0$ follows from Axiom 1 in the gravity derivation ([Einstein Field Equations](/derivations/spacetime/einstein-equations), Theorem 2.2). $\square$

**Remark.** The parallel between charge conservation and energy-momentum conservation is structural: both are local expressions of Axiom 1 (Coherence Conservation) applied to different Noether charges. Energy-momentum corresponds to the translational symmetry of the Poincaré group; electric charge corresponds to the $U(1)$ phase symmetry of loop closure.

### Step 6: Inhomogeneous Maxwell Equations — Uniqueness

**Theorem 6.1 (Maxwell equations from uniqueness).** *The unique field equation for the $U(1)$ gauge field satisfying:*

*(i) Lorentz covariance (from [Lorentz Invariance](/derivations/spacetime/lorentz-invariance))*

*(ii) Gauge invariance (dependence on $F_{\mu\nu}$, not directly on $A_\mu$)*

*(iii) At most first-order derivatives of $F_{\mu\nu}$ (Structural Postulate S2)*

*(iv) Consistency with charge conservation ($\partial_\mu J^\mu = 0$)*

*(v) Linearity in $F$ and $J$*

*is:*

$$\boxed{\partial_\mu F^{\mu\nu} = \mu_0 J^\nu}$$

*In 3-vector notation: $\nabla \cdot \mathbf{E} = \rho/\varepsilon_0$ and $\nabla \times \mathbf{B} - (1/c^2)\partial\mathbf{E}/\partial t = \mu_0 \mathbf{J}$.*

*Proof.* We seek a relation $\mathcal{E}^\nu(F, J) = 0$ that is a Lorentz 4-vector (one free index $\nu$). The available building blocks are:

- $F^{\mu\nu}$ (antisymmetric 2-tensor, gauge-invariant)
- $g^{\mu\nu}$ (Minkowski metric, from [Speed of Light](/derivations/spacetime/speed-of-light))
- $J^\nu$ (4-current)
- $\partial_\mu$ (partial derivative)
- $\varepsilon^{\mu\nu\rho\sigma}$ (Levi-Civita tensor)

**Construction.** A Lorentz 4-vector built from one derivative of $F$ can be either $\partial_\mu F^{\mu\nu}$ or $\partial_\mu(\star F^{\mu\nu})$. The second vanishes identically by the Bianchi identity (Proposition 4.4). Therefore $\partial_\mu F^{\mu\nu}$ is the unique available object.

**Consistency check.** The identity $\partial_\nu \partial_\mu F^{\mu\nu} = 0$ (antisymmetry of $F^{\mu\nu}$ under $\mu \leftrightarrow \nu$ combined with symmetry of $\partial_\mu\partial_\nu$) guarantees $\partial_\nu J^\nu = 0$ automatically — the field equation is consistent with charge conservation (iv) without additional constraints.

**Proportionality constant.** The coefficient $\mu_0$ relating the field strength to the source is a free parameter at this stage — it sets the units of charge. Its value is fixed empirically ($\mu_0 = 4\pi \times 10^{-7}$ N/A² in SI) or, in the framework, should ultimately follow from the Coupling Constants derivation. $\square$

**Remark (Parallel with gravity).** This uniqueness argument mirrors the Lovelock theorem for gravity:

| Gravity | Electromagnetism |
|---|---|
| Metric $g_{\mu\nu}$ | Connection $A_\mu$ |
| Riemann curvature $R^\mu{}_{\nu\rho\sigma}$ | Field strength $F_{\mu\nu}$ |
| Einstein tensor $G^{\mu\nu}$ | Divergence $\partial_\mu F^{\mu\nu}$ |
| Conservation: $\nabla_\mu G^{\mu\nu} = 0$ | Identity: $\partial_\nu(\partial_\mu F^{\mu\nu}) = 0$ |
| Source: $T^{\mu\nu}$ | Source: $J^\nu$ |
| Uniqueness: Lovelock theorem | Uniqueness: gauge + Lorentz + linearity |

In both cases, the combination of covariance, locality (second-order derivatives), and conservation uniquely determines the field equations. This is not coincidence — both are self-consistency conditions for geometric structures in $3+1$ dimensions, constrained by the same principles.

### Step 7: Charge Quantization

**Theorem 7.1 (Charge quantization from $U(1)$ topology).** *Electric charge is quantized: $q = ne$ for $n \in \mathbb{Z}$, where $e$ is the fundamental charge quantum.*

*Proof.* The observer's $U(1)$ phase $\theta \in [0, 2\pi)$ is periodic. The charge $q_i$ of observer $\mathcal{O}_i$ is its Noether charge under the $U(1)$ symmetry ([Minimal Observer Structure](/derivations/minimal-observer/structure), Theorem 4.1), which corresponds to the representation label of its $U(1)$ action — the winding number.

By [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs) (Theorem 3.1), pair creation produces charges $Q_1 = +Q$ and $Q_2 = -Q$ with $Q_1 + Q_2 = 0$. The minimal observer has winding number $\pm 1$ (the fundamental representation of $U(1)$), giving the minimal charge $\pm e$.

For composite observers, the charge is the sum of constituent charges — always an integer multiple of $e$. Topologically: the principal $U(1)$ bundle $P \to \mathcal{M}$ has Chern class $c_1(P) \in H^2(\mathcal{M}; \mathbb{Z})$, and the $U(1)$ representations are labeled by integers $n \in \mathbb{Z}$. Every observer must carry an integer representation label, so $q = ne$. $\square$

**Remark.** This is the framework's version of the Dirac quantization condition, derived from the topological structure of the observer's $U(1)$ phase rather than from the existence of magnetic monopoles.

### Step 8: The Lorentz Force Law

**Theorem 8.1 (Lorentz force from coherence cost).** *A charged observer with charge $q$ and mass $m$ in an external electromagnetic field $F_{\mu\nu}$ follows the trajectory:*

$$m \frac{d^2 x^\mu}{d\tau^2} = q F^{\mu}{}_\nu \frac{dx^\nu}{d\tau}$$

*Proof.* The coherence cost (action) of a charged observer's loop in the presence of $A_\mu$ includes the gauge coupling. The total action per cycle is:

$$\mathcal{S} = \int \left( mc \sqrt{g_{\mu\nu} \, dx^\mu dx^\nu} + q A_\mu \, dx^\mu \right)$$

The first term is the free observer's coherence cost ([Action and Planck's Constant](/derivations/thermodynamics/action-planck), Definition 1.3). The second term is the phase accumulated from the background connection — the coherence cost of maintaining phase coherence in a non-trivial gauge field.

By the stationary action principle ([Action and Planck's Constant](/derivations/thermodynamics/action-planck), Theorem 5.1), $\delta \mathcal{S} = 0$ gives the Euler-Lagrange equations. In flat spacetime:

$$m \frac{d^2 x^\mu}{d\tau^2} = q(\partial^\mu A_\nu - \partial_\nu A^\mu) \frac{dx^\nu}{d\tau} = q F^{\mu}{}_\nu \frac{dx^\nu}{d\tau}$$

This is the Lorentz force law. In curved spacetime, additional Christoffel terms appear (as in [Gravity](/derivations/spacetime/gravity), Theorem 3.1):

$$m \frac{d^2 x^\mu}{d\tau^2} + m\Gamma^\mu_{\alpha\beta} \frac{dx^\alpha}{d\tau}\frac{dx^\beta}{d\tau} = q F^{\mu}{}_\nu \frac{dx^\nu}{d\tau} \quad \square$$

### Step 9: The Complete Maxwell System

Assembling Steps 4 and 6:

**Homogeneous equations** (Bianchi identity, Proposition 4.4):
$$\partial_{[\mu} F_{\nu\rho]} = 0$$

**Inhomogeneous equations** (uniqueness, Theorem 6.1):
$$\partial_\mu F^{\mu\nu} = \mu_0 J^\nu$$

With the standard identifications $E^i = cF^{0i}$ (electric field) and $B^i = -\frac{1}{2}\varepsilon^{ijk}F_{jk}$ (magnetic field), these are the four Maxwell equations:

1. $\nabla \cdot \mathbf{E} = \rho/\varepsilon_0$ (Gauss's law)
2. $\nabla \cdot \mathbf{B} = 0$ (no magnetic monopoles)
3. $\partial\mathbf{B}/\partial t + \nabla \times \mathbf{E} = 0$ (Faraday's law)
4. $\nabla \times \mathbf{B} - (1/c^2)\partial\mathbf{E}/\partial t = \mu_0 \mathbf{J}$ (Ampère-Maxwell law)

**Proposition 9.1 (Electromagnetic waves).** *In vacuum ($J^\mu = 0$), the Maxwell equations give wave solutions propagating at $c$.*

*Proof.* Taking the curl of equation 3 and substituting equation 4 (with $J = 0$) gives $\nabla^2 \mathbf{E} = (1/c^2)\partial^2\mathbf{E}/\partial t^2$ — the wave equation with propagation speed $c$. This is consistent with [Speed of Light](/derivations/spacetime/speed-of-light): electromagnetic waves propagate at the universal phase speed. $\square$

## Consistency Model

**Theorem 10.1.** *A coherence-dual pair in flat Minkowski space with a trivial $U(1)$ bundle satisfies all results of this derivation.*

**Model**: $\mathcal{O}_1 = (S^1, +e, \omega)$ and $\mathcal{O}_2 = (S^1, -e, \omega)$ (a coherence-dual pair from [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs)) at rest in $\mathcal{M} = \mathbb{R}^{3,1}$, with $P = \mathcal{M} \times U(1)$ (trivial bundle).

*Verification:*
- **Prop 1.2**: The relational invariant $I_{12} = \cos(\theta_1 - \theta_2)$ depends only on the phase difference. Global $U(1)$ shift $\theta_i \to \theta_i + \alpha$ leaves $I_{12}$ unchanged. $\checkmark$
- **Thm 2.1**: $\mathcal{O}_1$ and $\mathcal{O}_2$ at spacelike separation have independent phase conventions — no signal can coordinate them. $\checkmark$
- **Def 3.1**: $A_\mu = 0$ in the absence of external fields (trivial connection). $\checkmark$
- **Def 4.1**: $F_{\mu\nu} = 0$ (flat connection). $\checkmark$
- **Thm 5.2**: $J^0 = e\delta^3(\mathbf{x} - \mathbf{x}_1) - e\delta^3(\mathbf{x} - \mathbf{x}_2)$. For static charges: $\partial_\mu J^\mu = 0$. $\checkmark$
- **Thm 6.1**: $\partial_\mu F^{\mu\nu} = \mu_0 J^\nu$ reduces to $\nabla^2 \Phi = -\rho/\varepsilon_0$, solved by $\Phi = \frac{e}{4\pi\varepsilon_0 r}$ (Coulomb potential for each charge). $\checkmark$
- **Thm 7.1**: $q_1 = +e = +1 \cdot e$, $q_2 = -e = -1 \cdot e$, both integer multiples. $\checkmark$
- **Thm 8.1**: $\mathbf{F}_{12} = q_1 \mathbf{E}_2 = -e^2/(4\pi\varepsilon_0 |\mathbf{x}_1 - \mathbf{x}_2|^2) \, \hat{r}$ (attractive Coulomb force). $\checkmark$ $\square$

## Physical Interpretation

| Framework concept | Standard physics |
|---|---|
| Observer $U(1)$ phase (Loop Closure) | Quantum phase of charged particle |
| Local phase independence (Thm 2.1) | Local gauge invariance |
| Connection $A_\mu$ (S1) | Electromagnetic 4-potential |
| Curvature $F_{\mu\nu}$ (Def 4.1) | Electromagnetic field tensor |
| Bianchi identity (Prop 4.4) | Homogeneous Maxwell equations |
| Coherence conservation + uniqueness (Thm 6.1) | Inhomogeneous Maxwell equations |
| Winding number (Thm 7.1) | Quantized electric charge |
| Phase coupling $q\int A \cdot dx$ (Thm 8.1) | Minimal coupling / Lorentz force |
| Coherence-dual pair (Thm 3.1 of CDP) | Particle-antiparticle with opposite charges |
| Vacuum wave solutions (Prop 9.1) | Photons |

## Connection to Existing Derivations

| Prerequisite | What it provides |
|---|---|
| [Loop Closure](/derivations/axioms/loop-closure) | $U(1)$ phase structure of every observer |
| [Minimal Observer Structure](/derivations/minimal-observer/structure) | Observer as $U(1)$ oscillator, Noether charge $Q$ |
| [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs) | Charge conjugation, integer winding numbers |
| [Relational Invariants](/derivations/interactions/relational-invariants) | Physics depends on phase *differences* only (R1) |
| [Speed of Light](/derivations/spacetime/speed-of-light) | Finite $c$ prevents global phase coordination |
| [Lorentz Invariance](/derivations/spacetime/lorentz-invariance) | Covariance constraint on field equations |
| [Action and Planck's Constant](/derivations/thermodynamics/action-planck) | Variational principle, coherence cost of gauge coupling |

**What this enables**: [Weak Interaction](/derivations/gauge/weak-interaction) ($SU(2)$ extension), [Standard Model Gauge Group](/derivations/gauge/standard-model-group) (full gauge structure).

## Rigor Assessment

**Fully rigorous (standard mathematics):**
- Proposition 1.2: Phase redundancy from relational invariant condition (R1)
- Proposition 3.3: Gauge transformation law (standard calculation)
- Proposition 4.2: Gauge invariance of $F_{\mu\nu}$ (commutativity of partial derivatives)
- Proposition 4.3: Holonomy interpretation (Stokes' theorem)
- Proposition 4.4: Bianchi identity ($d^2 = 0$)
- Theorem 5.2: Charge conservation from Axiom 1 (same argument as $\nabla_\mu T^{\mu\nu} = 0$)
- Theorem 6.1: Uniqueness of inhomogeneous Maxwell equations (representation theory + antisymmetry identity)
- Theorem 7.1: Charge quantization from $U(1)$ bundle topology
- Theorem 8.1: Lorentz force from stationary action (standard variational calculus)
- Proposition 9.1: Wave equation from Maxwell in vacuum (standard vector calculus)
- Theorem 10.1: Consistency model verified

**Framework-derived (depends on earlier rigorous results):**
- Theorem 2.1: Local phase independence (from Speed of Light + relational nature of invariants). The argument is physically compelling but the step from "cannot coordinate" to "the symmetry is local" relies on a physical reasoning chain rather than a single mathematical theorem.

**Structural postulates (not derived, stated explicitly):**
- S1 (Locality of phase comparison): principal $U(1)$ bundle with connection. Motivated by Steps 1–2 but not uniquely forced by them — one could in principle imagine non-geometric implementations of local phase comparison.
- S2 (Minimal gauge dynamics): second-order in $A_\mu$. Same justification and status as S1 of [Einstein Field Equations](/derivations/spacetime/einstein-equations).

**Not addressed:**
- The coupling constant $e$ is a free parameter (deferred to [Coupling Constants](/derivations/cosmology/coupling-constants))
- Quantization of the gauge field (photon) requires the [Born Rule](/derivations/quantum/born-rule) applied to the gauge sector
- Non-abelian extension to $SU(2)$, $SU(3)$ is deferred to subsequent stubs

**Assessment:** The derivation achieves **draft** status. The logical chain from axioms + structural postulates to Maxwell's equations is complete. The structural postulates are explicit and well-motivated (paralleling those in the gravity derivation chain). The uniqueness argument is sound. Charge quantization follows from existing framework topology. The main limitation preventing "provisional" status is that Theorem 2.1 (the localization argument) is physically motivated rather than mathematically forced — a fully rigorous version would need to prove that *any* theory consistent with the framework's causal structure must be expressible in gauge-invariant terms.

## Open Gaps

1. **Coupling constant**: The electric charge $e$ (or equivalently $\alpha_{em} = e^2/(4\pi\varepsilon_0\hbar c) \approx 1/137$) is a free parameter. Its value should ultimately follow from the [Coupling Constants](/derivations/cosmology/coupling-constants) derivation.

2. **Magnetic monopoles**: The derivation gives $\nabla \cdot \mathbf{B} = 0$ (no monopoles) from the Bianchi identity on a topologically trivial bundle. Non-trivial bundle topology ($c_1(P) \neq 0$) would allow magnetic monopoles. Whether the framework permits non-trivial $U(1)$ bundles is an open question.

3. **Quantum electrodynamics**: This derivation gives classical Maxwell equations. The quantized theory (QED) requires applying the [Born Rule](/derivations/quantum/born-rule) to the gauge field: the photon is the quantum of $F_{\mu\nu}$, and Feynman diagrams describe coherence exchanges between charged observers mediated by virtual photons.

4. **Non-abelian extension**: The weak and color forces require extending from $U(1)$ to $SU(2)$ and $SU(3)$. The proposed route — through the division algebra hierarchy $\mathbb{R} \to \mathbb{C} \to \mathbb{H} \to \mathbb{O}$ — is the subject of the [Weak Interaction](/derivations/gauge/weak-interaction) and [Color Force](/derivations/gauge/color-force) stubs. This derivation establishes the template: the pattern of (local symmetry → connection → curvature → uniqueness → field equations) should generalize to non-abelian groups.

5. **Localization rigor**: The argument from "finite signal speed" to "local gauge symmetry" (Theorem 2.1) could be strengthened. A fully rigorous version would prove that the algebra of gauge-invariant observables is generated by Wilson loops $W(\gamma) = \exp(iq\oint_\gamma A)$ and their correlators, making the redundancy manifest. This would upgrade the derivation to provisional status.
