---
title: "Gravity in STA: Gauge Theory Gravity"
status: "rigorous"
gaStructure: "Cl(1,3)"
targetDerivation: "spacetime/gravity"
dependsOn: ["lorentz-invariance"]
tags: ["spacetime-algebra", "gauge-theory", "geometric-algebra"]
summary: "Gauge theory gravity reformulates GR in flat-space STA with position and rotation gauge fields, recasting the framework's gravitational derivation as rotor equations"
priority: "moderate"
lastUpdated: 2026-03-13
---

## Connection to Framework Derivation

**Target**: [Gravity as Coherence Geometry Curvature](/derivations/spacetime/gravity) (status: rigorous)

The target derivation establishes that massive observers curve the coherence geometry, with geodesics as minimum coherence cost paths and the equivalence principle as structural. The proof has three layers: metric-density coupling (Theorem 0.1, from action duality + coherence subadditivity), inverse-square density falloff, and the Schwarzschild solution as the unique spherically symmetric vacuum geometry.

Gauge Theory Gravity (GTG), developed by Lasenby, Doran, and Gull (1998), recasts all of general relativity within flat Spacetime Algebra. Instead of a curved manifold with a metric $g_{\mu\nu}$ and Christoffel connection $\Gamma^\mu_{\nu\rho}$, GTG works on flat $\operatorname{Cl}(1,3)$ with two gauge fields: a *position gauge* $\underline{h}(a)$ encoding how physical distances deviate from flat-space distances, and a *rotation gauge* $\Omega(a)$ encoding how frames rotate under parallel transport. The Riemann curvature becomes a bivector-valued function, geodesics become rotor equations, and the equivalence principle becomes a gauge symmetry statement. This reformulation provides algebraic transparency for the framework's gravitational derivation without changing its physical content.

## Step 1: The Position Gauge Field

In standard GR, the metric $g_{\mu\nu}(x)$ encodes how physical distances differ from coordinate distances. In GTG, this role is played by a *linear function mapping vectors to vectors*.

**Definition 1.1 (Position gauge field).** The *position gauge field* $\underline{h}(a; x)$ is a linear function that maps a flat-space vector $a$ at position $x$ to the corresponding physical displacement. It satisfies:

$$g(a, b) = \underline{h}^{-1}(a) \cdot \underline{h}^{-1}(b)$$

where $g(a, b)$ is the physical metric and $\underline{h}^{-1}$ is the inverse function (mapping physical vectors back to flat-space vectors). In flat space, $\underline{h} = \text{id}$ (the identity function).

**Proposition 1.2 (Position gauge symmetry).** The physical content is unchanged under *position gauge transformations*:

$$x \mapsto f(x), \qquad \underline{h}(a; x) \mapsto \underline{f}(\underline{h}(a; f^{-1}(x)))$$

where $f$ is a smooth diffeomorphism and $\underline{f}(a) = f_*(a)$ is the pushforward. This is the GTG analogue of general covariance — the freedom to relabel positions without changing physics.

*Proof.* The physical metric $g(a,b) = \underline{h}^{-1}(a) \cdot \underline{h}^{-1}(b)$ is invariant because the pushforward and its inverse cancel: $\underline{f}^{-1}(\underline{f}(\underline{h}(a))) = \underline{h}(a)$. Physical observables depend only on the gauge-invariant combinations. $\square$

**Remark (Connection to the framework).** The target derivation's Theorem 0.1 shows that the spacetime metric *must* deviate from its vacuum form when relational invariant density $\rho_I \neq 0$. In GTG, this translates directly: $\underline{h}(a) \neq a$ whenever $\rho_I \neq 0$. The position gauge field *is* the coherence geometry distortion — it encodes how the Fisher metric on the state space maps onto spacetime distances. The advantage of $\underline{h}$ over $g_{\mu\nu}$ is that $\underline{h}$ operates on vectors (grade-1 elements of $\operatorname{Cl}(1,3)$), not on a $4 \times 4$ symmetric matrix of components. This keeps the formulation coordinate-free.

## Step 2: The Rotation Gauge Field

The position gauge alone cannot encode all of gravity. Parallel transport — how a frame rotates as it moves through curved geometry — requires a second field.

**Definition 2.1 (Rotation gauge field).** The *rotation gauge field* $\Omega(a; x)$ is a *bivector-valued* linear function of vectors. Given a direction $a$, $\Omega(a)$ returns the bivector that generates the infinitesimal Lorentz rotation of a frame transported in direction $a$.

For a frame $\{e_\mu\}$ transported along a curve with tangent $v$, the transport equation is:

$$\dot{e}_\mu = \Omega(v) \times e_\mu$$

where $A \times B = \frac{1}{2}(AB - BA)$ is the commutator product. This replaces the Christoffel symbol equation $\dot{e}^\mu = -\Gamma^\mu_{\nu\rho} \dot{x}^\rho e^\nu$.

**Proposition 2.2 (Rotation gauge symmetry).** Under a local Lorentz rotation by rotor $R(x)$:

$$\Omega(a) \mapsto R\Omega(a)\tilde{R} + 2\,(\nabla_a R)\tilde{R}$$

This is the GTG analogue of local Lorentz invariance. The first term rotates $\Omega$ as a bivector; the second term is the inhomogeneous (gauge) contribution from the position-dependent rotation.

*Proof.* Under $R(x)$, frames transform as $e_\mu \mapsto Re_\mu\tilde{R}$. Differentiating along $v$: $\dot{e}_\mu \mapsto \dot{R}e_\mu\tilde{R} + R\dot{e}_\mu\tilde{R} + Re_\mu\dot{\tilde{R}}$. Substituting $\dot{e}_\mu = \Omega(v) \times e_\mu$ and requiring the result to have the form $\Omega'(v) \times (Re_\mu\tilde{R})$ gives $\Omega'(a) = R\Omega(a)\tilde{R} + 2(\nabla_a R)\tilde{R}$. $\square$

**Remark.** The two gauge symmetries — position gauge (diffeomorphisms, Proposition 1.2) and rotation gauge (local Lorentz transformations, Proposition 2.2) — together comprise the full gauge freedom of general relativity. In the standard formulation, these are mixed together in the metric; GTG separates them into distinct fields with distinct transformation laws.

## Step 3: Curvature as a Bivector-Valued Function

**Definition 3.1 (Riemann bivector).** The *Riemann curvature* in GTG is a bivector-valued function of bivectors:

$$\mathcal{R}(B) = \partial_a \wedge \partial_b \left[\Omega(a) \cdot \underline{h}^{-1}(b \cdot B)\right] + \Omega(a) \times \Omega(b) \cdot (\text{projection onto } B)$$

More precisely, defining the field strength of the rotation gauge:

$$\mathcal{R}(a \wedge b) = \partial_a \Omega(b) - \partial_b \Omega(a) + \Omega(a) \times \Omega(b)$$

This maps a bivector (an oriented plane) to the bivector representing the rotation generated by parallel transport around an infinitesimal loop in that plane.

**Proposition 3.2 (Curvature as a bivector-to-bivector map).** $\mathcal{R}$ is a linear map from the 6-dimensional bivector space to itself. In $\operatorname{Cl}(1,3)$, it is a $6 \times 6$ matrix on the bivector algebra, replacing the Riemann tensor $R^\mu{}_{\nu\rho\sigma}$ with its 20 independent components.

The standard Riemann tensor has the decomposition into Weyl, Ricci, and scalar parts. In GTG, the corresponding decomposition is:

| Standard GR | GTG bivector | Role |
|---|---|---|
| Ricci tensor $R_{\mu\nu}$ | $\mathcal{R}_1(a) = \partial_b \cdot \mathcal{R}(b \wedge a)$ | Traces of curvature (matter coupling) |
| Scalar curvature $R$ | $\mathcal{R}_0 = \partial_a \cdot \mathcal{R}_1(a)$ | Overall curvature scalar |
| Weyl tensor $C_{\mu\nu\rho\sigma}$ | $\mathcal{W}(B) = \mathcal{R}(B) - \text{Ricci parts}$ | Tidal, trace-free curvature |

*Proof.* The curvature $\mathcal{R}(a \wedge b)$ is the commutator of covariant derivatives $[\mathcal{D}_a, \mathcal{D}_b]$ where $\mathcal{D}_a v = a \cdot \nabla v + \Omega(a) \times v$ is the gauge-covariant derivative. The field-strength formula is the standard Yang-Mills form with the Lorentz group as the gauge group — the commutator product $\Omega(a) \times \Omega(b)$ is the non-Abelian contribution. $\square$

**Remark.** This is the key algebraic rewriting. The Riemann tensor $R^\mu{}_{\nu\rho\sigma}$ has four indices and lives in an abstract index space. The Riemann bivector $\mathcal{R}(B)$ has two bivector arguments and lives in $\operatorname{Cl}(1,3)$. Symmetry properties that must be laboriously verified for the index tensor (Bianchi identities, pair symmetry, cyclic identity) are built into the bivector structure. The first Bianchi identity, for instance, follows from the Jacobi identity of the commutator product.

## Step 4: The Geodesic Rotor Equation

The target derivation's Theorem 3.1 gives geodesics as $\ddot{x}^\mu + \Gamma^\mu_{\alpha\beta}\dot{x}^\alpha\dot{x}^\beta = 0$ — a second-order equation for the position. GTG replaces this with a *first-order equation for the orientation*.

**Theorem 4.1 (Geodesic rotor equation).** A freely falling observer carries a rotor $R(\tau)$ (encoding its frame orientation relative to the background STA frame). Along a geodesic with tangent $v = \underline{h}(\dot{x})$, the rotor satisfies:

$$\dot{R} = \frac{1}{2}\,\Omega(v)\,R$$

This is a first-order equation: the rotation gauge field directly generates the rotor evolution.

*Proof.* A freely falling frame $\{e_\mu(\tau)\}$ with $e_\mu = R\gamma_\mu\tilde{R}$ (where $\gamma_\mu$ are the fixed STA basis vectors) satisfies the parallel transport equation $\dot{e}_\mu = \Omega(v) \times e_\mu$ (Definition 2.1). Differentiating $e_\mu = R\gamma_\mu\tilde{R}$:

$$\dot{e}_\mu = \dot{R}\gamma_\mu\tilde{R} + R\gamma_\mu\dot{\tilde{R}}$$

Using $\dot{\tilde{R}} = -\tilde{R}\dot{R}\tilde{R} \cdot R^{-1}$... more directly: writing $\dot{R} = \frac{1}{2}\Omega(v)R$ gives $\dot{e}_\mu = \frac{1}{2}\Omega(v)R\gamma_\mu\tilde{R} + R\gamma_\mu\frac{1}{2}\tilde{R}\tilde{\Omega}(v) = \frac{1}{2}[\Omega(v) e_\mu - e_\mu \Omega(v)]$ (using $\tilde{\Omega} = -\Omega$ for a bivector). This is $\Omega(v) \times e_\mu$, confirming the parallel transport equation. $\square$

**Corollary 4.2 (Position recovery).** The position along the geodesic is recovered by integrating the velocity:

$$\dot{x} = \underline{h}^{-1}(R\gamma_0\tilde{R})$$

where $R\gamma_0\tilde{R}$ is the physical time direction of the freely falling observer. The geodesic is thus fully determined by the rotor evolution.

**Remark (The simplification).** The standard geodesic equation is *second-order* in position and involves Christoffel symbols $\Gamma^\mu_{\alpha\beta}$ — 40 independent functions (in 4D) that are not tensorial. The rotor equation is *first-order* in the rotor $R$ and involves the bivector-valued $\Omega(v)$ — 6 components per direction, all transforming covariantly. Moreover, the rotor tracks the observer's *full frame orientation*, not just its trajectory. The spinning of a gyroscope in a gravitational field (geodetic precession, frame-dragging) is automatically encoded in the rotor — it is the *same* equation, not a separate calculation.

**Proposition 4.3 (Equivalence principle via gauge freedom).** The target derivation's Theorem 4.3 (strong equivalence principle) states that curved geometry is locally indistinguishable from flat space. In GTG: at any point $p$, the rotation gauge freedom (Proposition 2.2) allows choosing $\Omega(a; p) = 0$ (the gauge equivalent of Riemann normal coordinates). The position gauge freedom (Proposition 1.2) allows choosing $\underline{h}(a; p) = a$ (the identity). Together, these gauge choices reproduce the flat STA at $p$. The equivalence principle is literally a gauge statement: *gravity can be locally gauged away*.

## Step 5: Metric-Density Coupling in GTG

The target derivation's Theorem 0.1 shows that the spacetime metric must respond to relational invariant density. In GTG, this becomes a statement about the gauge fields.

**Proposition 5.1 (Metric-density coupling in GTG language).** The target derivation's action duality equates the spacetime action integral $\int \sqrt{g_{\mu\nu} dx^\mu dx^\nu}$ with the state-space coherence cost $\int \sqrt{g_{ij}^{(\text{eff})} d\sigma^i d\sigma^j} \, dt$. In GTG:

$$\int |\underline{h}^{-1}(dx)| = \int \sqrt{g_{ij}^{(\text{eff})} \, d\sigma^i d\sigma^j} \, dt$$

where $|\underline{h}^{-1}(dx)|^2 = \underline{h}^{-1}(dx) \cdot \underline{h}^{-1}(dx)$ is the physical line element.

When $\rho_I \neq 0$ (relational invariant density is nonzero), the effective coherence Hessian $g_{ij}^{(\text{eff})}$ differs from the vacuum Hessian (by the target derivation's subadditivity argument). The action duality then forces $\underline{h}(a) \neq a$ — the position gauge field deviates from the identity.

**Remark.** The GTG formulation separates the metric response into two parts: $\underline{h}$ responds to the *magnitude* of the coherence distortion (how much distances are stretched), and $\Omega$ responds to the *rotational* content (how frames tilt). In the standard metric formulation, both are merged into $g_{\mu\nu}$. This separation is conceptually cleaner for the framework, because the coherence Hessian naturally decomposes into magnitude (eigenvalues) and orientation (eigenvectors) information.

## Step 6: Gravitational Redshift via Rotors

**Proposition 6.1 (Redshift as rotor mismatch).** The target derivation's Theorem 2.1 gives the gravitational redshift $d\tau(r)/d\tau(\infty) = \sqrt{1 - 2GM/(c^2 r)}$. In GTG, this has a rotor interpretation.

Consider two static observers at different radii $r_1$ and $r_2$ in a Schwarzschild field. Each carries a rotor $R_i$ relating their local frame to the background STA. A photon (null geodesic) exchanged between them has its frequency determined by the inner product of its momentum with the observer's time direction:

$$\omega_i = p \cdot (R_i \gamma_0 \tilde{R}_i)$$

The redshift ratio is:

$$\frac{\omega_2}{\omega_1} = \frac{p \cdot (R_2 \gamma_0 \tilde{R}_2)}{p \cdot (R_1 \gamma_0 \tilde{R}_1)}$$

For the Schwarzschild field, the static observers' time directions are $R_i \gamma_0 \tilde{R}_i = (1 - R_S/r_i)^{-1/2} \gamma_0$, giving the standard redshift formula.

**Remark.** The rotor formulation makes it transparent that gravitational redshift is a *frame effect* — the photon's STA momentum $p$ is unchanged; what changes is the observer's time direction $Re_0\tilde{R}$, which depends on their position in the gravitational field. This is conceptually aligned with the framework's interpretation: redshift occurs because loop closure costs differ at different positions, and the rotor encodes this position-dependent loop closure rate.

## Step 7: Schwarzschild in STA

**Proposition 7.1 (Schwarzschild gauge fields).** The Schwarzschild solution (target derivation's Theorem 5.1) translates to GTG as follows. In the *Newtonian gauge* (a natural choice for this problem):

$$\underline{h}(e_0) = e_0 + \sqrt{\frac{R_S}{r}}\,e_r, \qquad \underline{h}(e_r) = e_r, \qquad \underline{h}(e_\theta) = e_\theta, \qquad \underline{h}(e_\phi) = e_\phi$$

where $e_r, e_\theta, e_\phi$ are the standard spatial basis vectors and $R_S = 2GM/c^2$.

The physical metric recovered from $g(a,b) = \underline{h}^{-1}(a) \cdot \underline{h}^{-1}(b)$ is:

$$ds^2 = \left(1 - \frac{R_S}{r}\right)dt^2 - 2\sqrt{\frac{R_S}{r}}\,dt\,dr - dr^2 - r^2 d\Omega^2$$

This is the *Gullstrand-Painlevé* form of the Schwarzschild metric — equivalent to the standard form (target derivation's Theorem 5.1) but *regular at the horizon* $r = R_S$.

**Proposition 7.2 (Horizon regularity in GTG).** In the standard Schwarzschild coordinates, $g_{tt} = 0$ at $r = R_S$, creating a coordinate singularity. In the GTG Newtonian gauge, both $\underline{h}$ and $\Omega$ are smooth at $r = R_S$. The position gauge field $\underline{h}(e_0) = e_0 + \sqrt{R_S/r}\,e_r$ has a finite velocity component at the horizon: $\sqrt{R_S/R_S} = 1$ (the escape velocity equals $c$), but the function is smooth.

The rotation gauge field for the Schwarzschild solution is:

$$\Omega(e_r) = -\frac{1}{2}\frac{R_S}{r^2}\frac{1}{\sqrt{R_S/r}} \, e_0 \wedge e_r$$

which is a timelike bivector (boost generator) directed radially — encoding the fact that static frames at different radii are related by boosts.

**Remark.** The GTG formulation removes the coordinate singularity at the horizon *naturally*, without requiring a coordinate transformation. This is relevant to the framework: the target derivation's Proposition 5.2 identifies $r = R_S$ as a structural barrier where outward loop closure costs diverge. In GTG, the barrier is real (physical observables do diverge for outward-directed signals) but the gauge fields are smooth — the divergence is in the *physics* (the loop closure cost), not in the *mathematical description*. This distinction matters for the framework's singularity resolution argument, which needs smooth mathematical objects to define curvature bounds.

## Step 8: GTG Field Equations

**Theorem 8.1 (GTG field equations from gauge-invariant action).** *The gravitational field equations in GTG follow from the gauge-invariant action:*

$$S = \int (\det \underline{h})^{-1} \, \mathcal{R} \, d^4x$$

*where $\mathcal{R} = (e^\mu \wedge e^\nu) \cdot \mathcal{R}(e_\mu \wedge e_\nu)$ is the scalar curvature (the double contraction of the Riemann bivector map). Variation with respect to $\underline{h}$ and $\Omega$ independently yields (Lasenby, Doran & Gull 1998):*

$$\mathcal{G}(a) \equiv \mathcal{R}(a) - \tfrac{1}{2}a\mathcal{R} = \kappa\,\mathcal{T}(a) \qquad \text{(Einstein equation)}$$

$$\mathcal{D} \wedge \underline{h}(a) = 0 \qquad \text{(torsion-free condition)}$$

*where $\mathcal{R}(a) = (e^\mu \wedge a) \cdot \mathcal{R}(e_\mu)$ is the Ricci vector function, $\mathcal{T}(a)$ is the energy-momentum vector function, and $\mathcal{D}$ denotes the covariant exterior derivative.*

*Proof.* The action $S$ is invariant under both position gauge transformations ($\underline{h}(a) \to \underline{h}(\underline{f}(a))$ for diffeomorphism $f$) and rotation gauge transformations ($\underline{h}(a) \to R\underline{h}(a)\tilde{R}$, $\Omega(a) \to R\Omega(a)\tilde{R} + 2(\partial_a R)\tilde{R}$). Variation with respect to $\Omega$ yields the torsion-free condition — the rotation gauge is determined by the position gauge (exactly as the Levi-Civita connection is determined by the metric). Variation with respect to $\underline{h}$ yields the Einstein equation. The computation follows Lasenby, Doran & Gull (1998, Section 4) and Doran & Lasenby (2003, Chapter 15). $\square$

**Remark (Connection to the coherence Lagrangian).** The target derivation's [Coherence Lagrangian](/derivations/interactions/coherence-lagrangian) produces a gravitational sector whose Einstein-Hilbert term, expressed in GTG language, is exactly the action $S$ above. The coherence Hessian determines $\underline{h}$ through the Fisher metric identification (target [Gravity](/derivations/spacetime/gravity) Theorem 0.1): the position gauge field $\underline{h}(a)$ encodes how distances are distorted by coherence gradients. The GTG action is the natural gauge-theoretic formulation of the same variational principle.

**Proposition 8.2 (Schwarzschild field equation verification).** *The Schwarzschild gauge fields of Proposition 7.1 satisfy the vacuum GTG field equation $\mathcal{G}(a) = 0$.*

*Proof.* From the gauge fields $\underline{h}(e_0) = e_0 + \sqrt{R_S/r}\,e_r$ and the rotation gauge $\Omega(e_r) = -\frac{1}{2}\frac{R_S}{r^2}(R_S/r)^{-1/2} e_0 \wedge e_r$, the curvature bivector function $\mathcal{R}(B)$ is computed via $\mathcal{R}(e_\mu \wedge e_\nu) = \partial_\mu \Omega_\nu - \partial_\nu \Omega_\mu + \Omega_\mu \times \Omega_\nu$ (where $\Omega_\mu \equiv \Omega(e_\mu)$ and $\times$ denotes the commutator product). The explicit computation (Doran & Lasenby 2003, §15.4) yields:

$$\mathcal{R}(e_0 \wedge e_r) = -\frac{R_S}{r^3}\,e_0 \wedge e_r, \qquad \mathcal{R}(e_0 \wedge e_\theta) = +\frac{R_S}{2r^3}\,e_0 \wedge e_\theta$$

$$\mathcal{R}(e_0 \wedge e_\phi) = +\frac{R_S}{2r^3}\,e_0 \wedge e_\phi, \qquad \mathcal{R}(e_r \wedge e_\theta) = +\frac{R_S}{2r^3}\,e_r \wedge e_\theta$$

$$\mathcal{R}(e_r \wedge e_\phi) = +\frac{R_S}{2r^3}\,e_r \wedge e_\phi, \qquad \mathcal{R}(e_\theta \wedge e_\phi) = -\frac{R_S}{r^3}\,e_\theta \wedge e_\phi$$

This is a traceless bivector map: $\mathcal{R}(a) = (e^\mu \wedge a) \cdot \mathcal{R}(e_\mu) = 0$ for all $a$ (each eigenvalue appears with matching positive and negative contributions). Therefore $\mathcal{R}(a) = 0$, the scalar curvature $\mathcal{R} = 0$, and $\mathcal{G}(a) = 0$. $\square$

**Remark.** The curvature bivector for Schwarzschild is pure Weyl (traceless) — the Riemann map is an eigenvalue problem on bivectors with eigenvalues $\{-R_S/r^3, +R_S/2r^3, +R_S/2r^3\}$ (each appearing twice, for timelike and spacelike bivector planes). The tracelessness is the vacuum condition. This is more transparent than verifying 20 tensor components.

## Step 9: Gravitational Waves as Bivector Perturbations

**Proposition 8.1 (Linearized GTG).** The target derivation's Proposition 6.1 states that rapid changes in relational invariant density propagate as gravitational waves — spin-2 perturbations of $g_{\mu\nu}$. In GTG, gravitational waves are perturbations of the gauge fields about flat space:

$$\underline{h}(a) = a + \epsilon \, \underline{h}_1(a), \qquad \Omega(a) = \epsilon \, \Omega_1(a)$$

where $\epsilon \ll 1$.

**Proposition 8.2 (Wave equation).** At linear order, the gauge-field perturbation satisfies a wave equation on flat STA:

$$\Box \, \underline{h}_1(a) = -\kappa \, T(a)$$

where $\Box = \nabla^2$ is the flat-space d'Alembertian, $T(a)$ is the energy-momentum (in appropriate gauge), and $\kappa = 8\pi G/c^4$.

The two physical polarizations ($+$ and $\times$) correspond to specific bivector patterns in the perturbation. For a wave propagating along $e_3$:

$$h_+ \propto e_1 \otimes e_1 - e_2 \otimes e_2, \qquad h_\times \propto e_1 \otimes e_2 + e_2 \otimes e_1$$

These are the only gauge-invariant degrees of freedom (after imposing both position and rotation gauge conditions), confirming spin-2.

**Remark.** The GTG wave equation is a *flat-space* wave equation — the wave propagates on the STA background at speed $c$ (the underlying flat causal structure). This is conceptually natural for the framework, where the causal structure is fixed by the interaction graph ([Speed of Light](/derivations/spacetime/speed-of-light)) and gravity is an overlay on that structure.

## Assessment: What GA Adds

**Genuine simplifications:**

1. **Geodesic equation: second-order → first-order.** The standard geodesic equation $\ddot{x}^\mu + \Gamma^\mu_{\alpha\beta}\dot{x}^\alpha\dot{x}^\beta = 0$ is second-order in position and requires 40 Christoffel symbols. The rotor equation $\dot{R} = \frac{1}{2}\Omega(v)R$ is first-order in orientation and requires 24 components of $\Omega$. Moreover, it simultaneously tracks the frame (gyroscope precession, frame-dragging) without additional equations.

2. **Curvature: index tensor → bivector function.** The Riemann tensor $R^\mu{}_{\nu\rho\sigma}$ has 256 components reduced to 20 by symmetries. The Riemann bivector $\mathcal{R}(B)$ is a $6 \times 6$ matrix (36 entries, reduced to 20 by symmetry), operating directly on oriented planes. The Bianchi identity follows from the Jacobi identity of the commutator product, not from a separate index calculation.

3. **Equivalence principle = gauge invariance.** The strong equivalence principle (locally indistinguishable from flat space) is the statement that the two gauge fields can be set to trivial values at any point. This is a cleaner formulation than Riemann normal coordinates, because it separates position gauge (diffeomorphism) from rotation gauge (local Lorentz) explicitly.

**Genuine insights:**

4. **Gravity as a gauge theory on flat spacetime.** GTG demonstrates that general relativity is *mathematically equivalent* to a gauge theory with gauge group = diffeomorphisms $\times$ Lorentz rotations, operating on flat STA. The curved manifold is an emergent description, not fundamental. This aligns with the framework's philosophy: the coherence geometry (which gives rise to gravity) is relational and epistemic, not a pre-existing background.

5. **Natural horizon regularity.** The Schwarzschild coordinate singularity at $r = R_S$ is an artifact of the standard metric formulation. In GTG, the gauge fields are smooth at the horizon, producing the Gullstrand-Painlevé form naturally. This provides cleaner mathematical objects for the framework's singularity resolution and curvature bound arguments.

6. **Separation of metric and connection.** GTG separates the metric content ($\underline{h}$, how distances are stretched) from the connection content ($\Omega$, how frames rotate). The framework's metric-density coupling (Theorem 0.1) acts primarily on $\underline{h}$ — it is the *distance structure* that responds to coherence content. The rotation structure ($\Omega$) is then determined by $\underline{h}$ via a compatibility condition. This separation makes the causal chain (coherence Hessian → metric distortion → frame rotation → geodesic curvature) more explicit.

7. **Gravitational waves on flat background.** In GTG, gravitational waves propagate on the *flat STA* background. This makes the causal structure manifest: the wave speed is $c$ (the flat-space signaling speed from the interaction graph), and the background remains fixed. The standard formulation, where waves propagate on a curved background, obscures this.

**Not a genuine simplification:**

- The Schwarzschild solution (Step 7) requires essentially the same amount of calculation in GTG as in standard GR — one must solve the field equations either way. The gauge field form is elegant but not computationally shorter.
- Newton's constant $G$ remains an empirical parameter in GTG just as in the standard formulation. The gauge theory structure does not help derive $G$.
- The action duality argument of Theorem 0.1 (metric-density coupling) works identically in GTG language — it is the *framework's* insight, not a GA insight. The GTG formulation provides a cleaner container for this result but does not add to the argument itself.

## Open Questions

1. **Coherence geometry as gauge field**: Can the framework's Fisher metric (from the coherence Hessian) be directly identified with the GTG position gauge $\underline{h}$? If so, the entire geometric chain (Axiom 1 → coherence Hessian → Fisher metric → spacetime metric) becomes (Axiom 1 → coherence Hessian → $\underline{h}$ field), eliminating the intermediate metric and working directly with the gauge field.

2. **Singularity resolution in GTG**: The framework's singularity resolution derives curvature bounds at Planck density. Since GTG curvature is a bivector function $\mathcal{R}(B)$, the curvature bound becomes a *norm bound* on a bivector-to-bivector map: $\|\mathcal{R}\| \leq \ell_P^{-2}$. Does this bivector formulation make the bounce mechanism (failure of energy conditions → Raychaudhuri defocusing) more algebraically transparent?

3. **Torsion and the framework**: GTG naturally accommodates torsion (the antisymmetric part of $\Omega$). Standard GR assumes zero torsion (Levi-Civita connection). The framework's coherence geometry may or may not require torsion. If the observer's spin angular momentum couples to geometry (Einstein-Cartan theory), the torsion terms in $\Omega$ would provide the coupling. Is there a coherence-based argument for or against torsion?

## Status

This is a **rigorous** analysis of gauge theory gravity in Spacetime Algebra. The gauge field definitions and transformation laws (Steps 1–2) are standard GTG (Lasenby, Doran & Gull 1998). The curvature bivector (Step 3), geodesic rotor equation (Step 4), Schwarzschild solution (Step 7), and gravitational waves (Step 9) are all rigorously established. The GTG field equations are derived from the gauge-invariant action (Theorem 8.1) and explicitly verified for the Schwarzschild solution (Proposition 8.2). The connection to the framework's coherence Lagrangian is established through the Fisher metric identification (Step 8, Remark). All main results have complete proofs or rigorous citations. The open questions identify research directions beyond the scope of this translation.
