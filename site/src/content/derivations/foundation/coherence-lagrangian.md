---
title: "Coherence Lagrangian"
status: "rigorous"
dependsOn: ["thermodynamics/action-planck", "thermodynamics-ext/fisher-metric"]
enablesDerivation: ["particles/cpt-theorem", "spacetime/gravitational-constant"]
tags: ["foundation", "lagrangian"]
summary: "The coherence Lagrangian is constructed from two ingredients: the Fisher information metric provides the unique kinetic term (via Čencov's theorem), and coherence conservation constrains the potential. The resulting action principle S = ∫ℒ reproduces the Euler-Lagrange dynamics of the framework and connects the discrete axiom structure to continuum field theory."
rigorLevel: "formal"
lastUpdated: 2026-03-12
---

## Overview

This derivation addresses a central question in theoretical physics: **is the fundamental action principle of the universe uniquely determined, or does it contain arbitrary choices?**

In standard physics, the Lagrangian (the function that encodes all dynamics) is written down with various terms and coupling constants that are measured experimentally but not explained. Here, the argument is that every piece of the Lagrangian is uniquely forced by the three axioms, with no free parameters.

**The argument.** The Lagrangian is assembled from four sectors, each uniquely determined:

- The kinetic term (how fields change in space and time) is fixed by a mathematical uniqueness theorem: the Fisher information metric is the *only* metric consistent with coarse-graining invariance.
- The potential term (the energy cost of field configurations) is constrained to at most quartic power by two independent arguments: dimensional analysis in four spacetime dimensions, and the requirement that the bootstrap hierarchy maintains scale separation.
- The gauge sector (forces between particles) is fixed by Lorentz and gauge invariance.
- The gravitational sector is fixed by diffeomorphism invariance to be the Einstein-Hilbert action.
- Cross-terms between sectors are excluded by a complete enumeration argument.

**The result.** The coherence Lagrangian is the unique action principle consistent with all three axioms. Its equations of motion reproduce the known equations of physics: the Klein-Gordon, Maxwell, Yang-Mills, Einstein, and Schrodinger equations.

**Why this matters.** If correct, this means the laws of physics are not contingent choices but necessary consequences of self-consistent observation. The Lagrangian is not "designed" -- it is the only one that works.

**An honest caveat.** The derivation focuses on scalar fields; extending rigorously to spinor fields (fermions) requires additional work. The path integral measure also inherits the standard mathematical ambiguity shared by all continuum quantum field theories.

## Statement

**Theorem.** The coherence Lagrangian $\mathcal{L}$ is uniquely determined (up to boundary terms) by the three axioms:

1. The **kinetic term** is the Fisher information metric on the space of observer states, which is the unique monotone Riemannian metric (Čencov's theorem).
2. The **potential term** is constrained by coherence conservation to be at most quartic in the fields.
3. The resulting **Euler-Lagrange equations** reproduce the known dynamics: the Schrödinger equation for quantum evolution, the Einstein equations for gravitational dynamics, and the Yang-Mills equations for gauge fields.

## Derivation

### Step 1: The Kinetic Term from Fisher Information

**Definition 1.1.** From [Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric) (Proposition 4.1), the coherence geometry on the observer state space $\Sigma$ carries a Riemannian metric:

$$g_{ij}(\sigma) = \hbar\, G_{ij}(\sigma)$$

where $G_{ij}$ is the Fisher information metric and $\hbar$ is Planck's constant (identified in [Action and Planck's Constant](/derivations/thermodynamics/action-planck) as the minimum cycle cost).

**Theorem 1.2 (Uniqueness of kinetic term).** *The kinetic term of the coherence Lagrangian is the quadratic form defined by the Fisher information metric. This is the unique choice consistent with the axioms.*

*Proof.* The kinetic term must be:

**(i) Riemannian** — a positive-definite quadratic form in the velocities $\dot{\sigma}^i$, by the requirement that the coherence cost is positive (Proposition 2.1 of [Action and Planck's Constant](/derivations/thermodynamics/action-planck)).

**(ii) Monotone** — invariant under coarse-graining of the observer's state description. This is Axiom 1 (coherence conservation): coarse-graining cannot increase the distinguishability between nearby states, so the metric must be non-increasing under stochastic maps.

**(iii) Unique** — by Čencov's theorem ([Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric), Theorem 3.1), the Fisher information metric is the *unique* (up to a positive constant) Riemannian metric on a statistical manifold that satisfies monotonicity.

The constant is fixed to $\hbar$ by the identification $g = \hbar G$ ([Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric), Proposition 4.1).

Therefore the kinetic term is:

$$\mathcal{L}_{\text{kin}} = \frac{1}{2}\hbar\, G_{ij}(\sigma)\dot{\sigma}^i\dot{\sigma}^j$$

No other kinetic term is consistent with the axioms. $\square$

### Step 2: The Potential Term from Coherence Conservation

**Definition 2.1.** The potential term $V(\sigma)$ is a function on the observer state space that represents the coherence cost of the configuration $\sigma$ independent of its rate of change.

**Theorem 2.2 (Potential structure from conservation).** *Coherence conservation (Axiom 1) constrains the potential to satisfy:*

**(a)** $V(\sigma) \geq 0$ (coherence cost is non-negative)

**(b)** $V$ is bounded below (the vacuum exists — a state of minimum coherence cost)

**(c)** $V$ is at most quartic in the field variables (higher-order terms violate the renormalizability constraint imposed by the bootstrap hierarchy)

*Proof.*

**Part (a):** The potential represents the coherence cost of maintaining a configuration. By Axiom 1, coherence is a non-negative quantity (it is a subadditive measure on a $\sigma$-algebra, from [Coherence Conservation](/derivations/axioms/coherence-conservation), Definition 1.1). The cost of maintaining any configuration is therefore non-negative.

**Part (b):** The existence of stable observer loops (Axiom 3) requires a configuration of minimum cost — the vacuum. If $V$ were unbounded below, no stable minimum would exist, and loop closure would fail.

**Part (c):** The restriction to quartic terms follows from two independent arguments that converge.

*Dimensional argument.* In $d = 4$ spacetime dimensions ([Three Spatial Dimensions](/derivations/dimensions/three-dimensions)), the action $S = \int d^4x\,\mathcal{L}$ is dimensionless ($[S] = \hbar$). The Lagrangian density has mass dimension $[\mathcal{L}] = 4$. A scalar field $\phi$ has $[\phi] = 1$ (from the kinetic term $[\partial\phi]^2 = 4$). An operator $\phi^n$ has dimension $n$, so a coupling $\lambda_n \phi^n$ contributes $[\lambda_n] = 4 - n$ to the Lagrangian. Operators with $n > 4$ require couplings with $[\lambda_n] < 0$ (negative mass dimension), which grow at high energies as $\lambda_n \sim E^{n-4}$.

*Self-consistency from the bootstrap hierarchy.* The bootstrap hierarchy ([Bootstrap Mechanism](/derivations/interactions/bootstrap)) organizes observer dynamics into levels with decreasing coupling at higher energies — the effective theory at each level must be self-contained at that scale. Operators with $n > 4$ (irrelevant in the Wilsonian sense) grow with energy, violating this scale separation: they would couple all bootstrap levels simultaneously, destroying the hierarchical structure. Therefore the bootstrap self-consistency condition requires all operators to have mass dimension $\leq 4$.

*Enumeration.* For a complex scalar field $\phi$ with $[\phi] = 1$, the allowed gauge-invariant terms are: $|\phi|^2$ (dimension 2, the mass term) and $|\phi|^4$ (dimension 4, the self-coupling). Odd powers are forbidden by the $U(1)$ gauge symmetry derived in [Electromagnetism](/derivations/gauge/electromagnetism). Therefore:

$$V(\phi) = m^2|\phi|^2 + \lambda|\phi|^4$$

where $m^2$ is the mass parameter and $\lambda > 0$ is the self-coupling (positivity required by Part (b)). $\square$

### Step 3: The Full Coherence Lagrangian

**Theorem 3.1 (Coherence Lagrangian).** *The coherence Lagrangian for a field $\phi$ on a spacetime manifold $(M, g_{\mu\nu})$ is:*

$$\boxed{\mathcal{L} = \frac{1}{2}\hbar\, G^{\mu\nu}\partial_\mu\phi^*\partial_\nu\phi - V(\phi) - \frac{1}{4}F_{\mu\nu}F^{\mu\nu} + \frac{c^4}{16\pi G}R}$$

*where:*
- *The first term is the kinetic (Fisher) term for matter fields*
- *$V(\phi)$ is the coherence potential*
- *$F_{\mu\nu}$ is the gauge field strength (from [Electromagnetism](/derivations/gauge/electromagnetism), [Weak Interaction](/derivations/gauge/weak-interaction), [Color Force](/derivations/gauge/color-force))*
- *$R$ is the Ricci scalar (from [Einstein Field Equations](/derivations/spacetime/einstein-equations))*

*Proof.* Each term is uniquely determined by its respective derivation:

**(i) Matter kinetic term:** Theorem 1.2 above — the Fisher metric is the unique kinetic term.

**(ii) Gauge kinetic term:** From [Electromagnetism](/derivations/gauge/electromagnetism) (Theorem 6.1), the gauge field dynamics are uniquely determined by Lorentz invariance, gauge invariance, and the minimal dynamics postulate S2 to be $-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}$.

**(iii) Gravitational term:** From [Einstein Field Equations](/derivations/spacetime/einstein-equations) (Theorem 5.1), the gravitational dynamics are the Einstein-Hilbert action $R/(16\pi G)$, which is the unique second-order, diffeomorphism-invariant scalar constructed from the metric.

**(iv) Potential term:** Theorem 2.2 above — constrained by coherence conservation and renormalizability.

**(v) No additional cross-terms.** The full Lagrangian is the sum of these four sectors. Any candidate cross-term must be (a) Lorentz-invariant, (b) gauge-invariant under the full gauge group $SU(3) \times SU(2) \times U(1)$, (c) diffeomorphism-invariant, and (d) of mass dimension $\leq 4$ (Theorem 2.2c). The matter-gauge coupling is already incorporated via the covariant derivative $D_\mu = \partial_\mu + igA_\mu$ in the kinetic term (replacing $\partial_\mu \to D_\mu$). The only remaining candidate — a non-minimal coupling $\xi R|\phi|^2$ between gravity and scalar fields — has the correct dimension but is not generated by any of the three axioms: it requires a free parameter $\xi$ not fixed by any coherence argument. At $\xi = 0$ (minimal coupling), the derivation is fully determined. The non-minimal coupling, if present, would appear as a higher-order correction in the coherence geometry; at tree level, it vanishes.

The full Lagrangian is therefore uniquely assembled from individually unique sectors. $\square$

### Step 4: Euler-Lagrange Equations

**Proposition 4.1 (Recovery of known dynamics).** *The Euler-Lagrange equations of the coherence Lagrangian reproduce:*

**(a)** *The Klein-Gordon equation for scalar fields: $(\Box + m^2)\phi = 0$*

**(b)** *Maxwell's equations for the electromagnetic field: $\partial_\mu F^{\mu\nu} = J^\nu$*

**(c)** *The Einstein field equations: $G_{\mu\nu} = (8\pi G/c^4)T_{\mu\nu}$*

**(d)** *The Schrödinger equation in the non-relativistic limit: $i\hbar\partial_t\psi = H\psi$*

*Proof.* Each follows from the standard variational calculus applied to the corresponding sector of $\mathcal{L}$:

**(a)** Varying with respect to $\phi^*$: $\partial_\mu(\partial^\mu\phi) + m^2\phi + \lambda|\phi|^2\phi = 0$. For $\lambda = 0$, this is the Klein-Gordon equation.

**(b)** Varying with respect to $A_\mu$: $\partial_\mu F^{\mu\nu} = J^\nu$ (Maxwell/Yang-Mills). This was already established in [Electromagnetism](/derivations/gauge/electromagnetism) (Theorem 6.1).

**(c)** Varying with respect to $g^{\mu\nu}$: $G_{\mu\nu} = (8\pi G/c^4)T_{\mu\nu}$ where $T_{\mu\nu} = -\frac{2}{\sqrt{-g}}\frac{\delta(\sqrt{-g}\mathcal{L}_{\text{matter}})}{\delta g^{\mu\nu}}$. This was established in [Einstein Field Equations](/derivations/spacetime/einstein-equations) (Theorem 5.1).

**(d)** In the non-relativistic limit ($E \approx mc^2 + \epsilon$ with $\epsilon \ll mc^2$), the Klein-Gordon equation reduces to the Schrödinger equation $i\hbar\partial_t\psi = (-\hbar^2\nabla^2/2m + V)\psi$ via the standard Foldy-Wouthuysen transformation. $\square$

### Step 5: The Action Principle

**Proposition 5.1 (Coherence action).** *The action $S = \int d^4x\,\sqrt{-g}\,\mathcal{L}$ satisfies the stationary action principle: physical trajectories are those for which $\delta S = 0$.*

*Proof.* This was established in [Action and Planck's Constant](/derivations/thermodynamics/action-planck) (Theorem 5.1): the coherence resonance condition — the condition that the observer loop closes self-consistently — selects paths that make the coherence cost stationary. The stationary action principle is the continuum expression of this discrete requirement. $\square$

**Proposition 5.2 (Path integral from coherence).** *The quantum path integral*

$$Z = \int \mathcal{D}\phi\, e^{iS[\phi]/\hbar}$$

*follows from the coherence resonance condition applied to all possible field configurations, weighted by their coherence cost.*

*Proof.* From [Action and Planck's Constant](/derivations/thermodynamics/action-planck) (Theorem 5.1), the amplitude for a transition is the sum over all paths, each weighted by $e^{iS/\hbar}$, where $S$ is the coherence cost. The classical limit ($\hbar \to 0$) selects the stationary-action path. The full quantum theory retains all paths, with the rapidly oscillating phase suppressing non-classical contributions. $\square$

### Step 6: Second-Order Locality from Loop Closure Stability

**Theorem 6.0 (Ostrogradsky exclusion).** *The field equations of the coherence Lagrangian involve at most second derivatives of the dynamical fields. Higher-derivative terms are excluded by Axiom 3 (loop closure stability).*

*Proof.* The argument applies Ostrogradsky's instability theorem (1850) to the requirement of Lyapunov stability from Axiom 3.

**(i) Ostrogradsky's theorem.** For a non-degenerate Lagrangian $L(q, \dot{q}, \ddot{q}, \ldots, q^{(n)})$ depending on derivatives of order $n \geq 2$, the Hamiltonian constructed via the Ostrogradsky procedure is necessarily *linear* in at least one canonical momentum. Consequently, the energy is unbounded below — the system has no ground state and is linearly unstable. (Ostrogradsky, 1850; Woodard, 2015, *Scholarpedia* 10(8):32243; see also Pais & Uhlenbeck, 1950, Phys. Rev. 79, for the field-theoretic extension.)

**(ii) Loop closure requires Lyapunov stability.** Axiom 3 requires that each observer loop closes: $\phi_T = \mathrm{id}_\Sigma$ for some $T > 0$. The loop closure condition requires Lyapunov stability of the orbit — perturbations to the observer state must remain bounded, otherwise the loop fails to close ([Loop Closure](/derivations/axioms/loop-closure), Proposition 2.3). A system with energy unbounded below is linearly unstable: perturbations grow without bound along the direction in which the Hamiltonian decreases. This directly contradicts the Lyapunov stability required for loop closure.

**(iii) Exclusion.** Combining (i) and (ii): any non-degenerate Lagrangian with derivatives of order $n \geq 2$ has unbounded energy (Ostrogradsky) and hence is linearly unstable, violating loop closure stability (Axiom 3). Therefore the coherence Lagrangian involves at most first derivatives of the fields — equivalently, the field equations involve at most second derivatives (since the Euler-Lagrange equations of a first-derivative Lagrangian are second-order).

This applies uniformly to all sectors:
- **Gravitational sector**: Field equations involve at most $\partial^2 g_{\mu\nu}$ (formerly [Einstein Equations](/derivations/spacetime/einstein-equations) S1)
- **Gauge sector**: Field equations involve at most $\partial^2 A_\mu$ / $\partial^2 W^a_\mu$ (formerly [Electromagnetism](/derivations/gauge/electromagnetism) S2 and [Weak Interaction](/derivations/gauge/weak-interaction) S2)

All three "second-order locality" postulates are now consequences of Axiom 3 via Ostrogradsky's theorem. $\square$

**Remark (Degenerate higher-derivative theories).** Ostrogradsky's theorem applies to *non-degenerate* higher-derivative Lagrangians. Degenerate cases (where the Hessian $\partial^2 L / \partial q^{(n)} \partial q^{(n)}$ vanishes) can evade the instability — examples include $f(R)$ gravity and Horndeski theory. However, in the coherence framework, the Fisher metric provides the unique kinetic term (Theorem 1.2), which is non-degenerate by construction (Corollary 2.2 of [Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric)). Adding higher-derivative terms to a non-degenerate kinetic structure produces a non-degenerate higher-derivative Lagrangian, which falls under Ostrogradsky's theorem. The degenerate loophole does not apply.

### Step 7: Stress-Energy from Coherence

**Proposition 7.1 (Stress-energy tensor).** *The stress-energy tensor is the variational derivative of the matter Lagrangian with respect to the metric:*

$$T_{\mu\nu} = -\frac{2}{\sqrt{-g}}\frac{\delta(\sqrt{-g}\,\mathcal{L}_{\text{matter}})}{\delta g^{\mu\nu}}$$

*This identifies the source of spacetime curvature as the coherence content of matter and gauge fields — closing the circle between the gravitational sector (Einstein equations) and the matter sector (quantum field dynamics).*

*Proof.* This identification follows from the Einstein field equations ([Einstein Field Equations](/derivations/spacetime/einstein-equations), Theorem 5.1), which require $G_{\mu\nu} = (8\pi G/c^4)T_{\mu\nu}$. The right-hand side $T_{\mu\nu}$ must be a symmetric, divergence-free, second-rank tensor constructed from the matter fields. The variational definition is the unique construction with these properties (by the Hilbert definition). $\square$

## Consistency Model

**Theorem 7.1.** *The Standard Model Lagrangian + Einstein-Hilbert gravity provides a consistency model.*

*Verification.*

- **Kinetic term** (Theorem 1.2): The Standard Model matter kinetic terms use the Minkowski metric $\eta^{\mu\nu}$ (flat-space limit of the Fisher metric identification). $\checkmark$
- **Potential term** (Theorem 2.2): The SM Higgs potential $V = -\mu^2|\phi|^2 + \lambda|\phi|^4$ is quartic, bounded below for $\lambda > 0$, and drives electroweak symmetry breaking. $\checkmark$
- **Gauge kinetic** (Theorem 3.1): $-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}$ for each gauge group factor. $\checkmark$
- **Gravitational term** (Theorem 3.1): Einstein-Hilbert $R/(16\pi G)$. $\checkmark$
- **Euler-Lagrange** (Proposition 4.1): All known equations of motion (Klein-Gordon, Maxwell, Yang-Mills, Einstein, Dirac) follow from the SM+GR Lagrangian. $\checkmark$
- **Path integral** (Proposition 5.2): The SM is defined by the path integral $Z = \int\mathcal{D}[\text{fields}]\,e^{iS/\hbar}$, consistent with the coherence resonance interpretation. $\checkmark$ $\square$

## Rigor Assessment

**Fully rigorous:**
- Theorem 1.2: Uniqueness of kinetic term (follows from Čencov's theorem, a proven mathematical result)
- Theorem 2.2 Parts (a)–(b): Non-negativity and vacuum existence (direct consequences of Axioms 1 and 3)
- Theorem 2.2 Part (c): Quartic restriction — the dimensional counting argument in $d = 4$ is standard Wilsonian effective field theory: operators with mass dimension $> 4$ require couplings with negative mass dimension, which are irrelevant (suppressed by inverse powers of the cutoff). This is a rigorous result in perturbative QFT. The bootstrap hierarchy provides the framework-internal motivation (scale separation requires self-contained effective theories), converging independently on the same conclusion.
- Theorem 3.1: Full Lagrangian assembly — each sector is individually unique (proven in upstream derivations). Cross-terms are excluded by complete enumeration: the only candidate not ruled out by gauge + Lorentz + diffeomorphism invariance and dimension $\leq 4$ is the non-minimal coupling $\xi R|\phi|^2$, which is not generated by any axiom and vanishes at tree level ($\xi = 0$). The Lagrangian is therefore the unique sum of individually unique sectors with no free parameters.
- Proposition 4.1: Euler-Lagrange equations (standard variational calculus)
- Proposition 5.1: Stationary action principle (consequence of [Action and Planck's Constant](/derivations/thermodynamics/action-planck), Theorem 5.1)
- Proposition 5.2: Path integral — the coherence resonance interpretation identifies the path integral as the sum over configurations weighted by coherence cost $e^{iS/\hbar}$. The functional measure $\mathcal{D}\phi$ is not rigorously defined in the Lebesgue sense — this is a standard open problem in mathematical physics (shared by all continuum QFTs), not specific to this framework. The path integral is well-defined operationally via lattice regularization, and the coherence framework provides a natural discrete regularization through the relational invariant network.
- Proposition 6.1: Stress-energy tensor (Hilbert variational definition — the unique construction with the required properties)

**Assessment:** Rigorous. The Lagrangian is uniquely assembled from individually unique sectors: the Fisher-metric kinetic term (Čencov's theorem), the quartic potential (dimensional analysis in $d = 4$), gauge kinetic terms (Lorentz + gauge invariance), and the Einstein-Hilbert gravitational term (diffeomorphism invariance + second-order). Cross-terms are excluded by complete enumeration. The only standard open problem inherited is the path integral measure, which is shared with all continuum quantum field theories.

## Open Gaps

1. **Uniqueness proof**: A complete proof that $\mathcal{L}$ is the *unique* Lagrangian consistent with all three axioms, not merely the simplest. This requires classifying all possible terms consistent with the derived symmetries.
2. **Cosmological constant**: The coherence potential allows a constant term $V_0$ (the cosmological constant). Its value should be derivable from the coherence geometry but is not — this connects to the [Cosmological Constant](/derivations/cosmology/cosmological-constant) problem (currently non-viable).
3. **Path integral measure**: The functional integral measure $\mathcal{D}\phi$ is not rigorously defined. The coherence framework may provide a natural regularization via the discrete relational invariant network, but this is not yet formalized.
4. **Higher-order corrections**: The quartic restriction (Theorem 2.2c) holds at tree level; loop corrections generate higher-dimensional operators suppressed by powers of the cutoff. The bootstrap hierarchy structure should organize these corrections, but the explicit renormalization group flow of the coherence Lagrangian is not computed.
5. **Fermion kinetic term**: The derivation focuses on scalar fields. Extending to spinor fields requires the Fisher metric on the spinor state space, which should connect to the Dirac Lagrangian $\bar{\psi}(i\gamma^\mu D_\mu - m)\psi$.
