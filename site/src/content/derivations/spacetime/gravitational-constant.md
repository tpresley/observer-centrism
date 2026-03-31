---
title: "Gravitational Coupling from Coherence Geometry"
status: "provisional"
dependsOn: ["spacetime/gravity", "spacetime/einstein-equations", "thermodynamics/action-planck", "thermodynamics-ext/fisher-metric", "foundation/coherence-lagrangian", "holography/area-scaling", "particles/spin-statistics", "minimal-observer/multiplicity", "interactions/bootstrap"]
enablesDerivation: []
tags: ["geometry"]
summary: "The gravitational coupling G is constrained by the coherence Lagrangian structure: the Fisher metric fixes the matter sector at ℏ, Lovelock fixes the gravity sector's form. The spinor/tetrad route is ruled out. The constitutive emergence argument reframes the circularity G ↔ ℓ_min as a fixed-point equation at pre-geometric t₀. Aperiodic order of the observer network is forced (periodicity trivializes C5; disorder violates constitutive universality), constraining the substitution matrix to the 2×2 Pisot metallic mean family. Multi-scale self-consistency — requiring the same G at every bootstrap level — provides a potentially non-degenerate constraint that the single-scale analysis lacks"
rigorLevel: "semi-formal"
lastUpdated: 2026-03-30
---

## Overview

This derivation addresses a long-standing open question of the framework: **is Newton's gravitational constant G derivable from the axioms, or is it an independent free parameter?**

The framework has already derived the mechanism of gravity (coherence geometry curvature), the form of the field equations (Einstein via Lovelock), the speed of light $c$ (loop closure), and Planck's constant $\hbar$ (minimum cycle cost via the Fisher metric). Newton's constant $G$ is the last of the three dimensionful constants of nature whose status remains open. It controls the *strength* of gravitational coupling — how much a given amount of matter curves spacetime.

**The argument.** The coherence Lagrangian has two sectors whose coefficients are independently determined:

- The **matter sector** has coefficient $\hbar$, fixed by the Fisher information metric (Čencov's uniqueness theorem).
- The **gravity sector** has the Einstein-Hilbert form $c^4 R/(16\pi G)$, fixed by Lovelock's uniqueness theorem — but with $G$ undetermined.

These two sectors describe the same physical system (the coherence geometry and its contents) and must be mutually consistent. The action duality — which equates the coherence cost of a path measured in state space ($\hbar \times$ Fisher arc length) with the cost measured in spacetime — provides the bridge. Three convergent arguments constrain $G$:

1. **Thermodynamic route** (Jacobson-type): the Unruh temperature ($\hbar$-dependent), the Clausius relation, and the entropy-area proportionality together determine the Einstein equations with a specific coefficient that fixes $G$ in terms of the entropy density per unit area.
2. **Minimal observer self-consistency**: the smallest possible observer (cycle cost $\hbar$, spatial extent $cT$) must not be gravitationally self-trapped; the saturation of this bound defines the Planck scale and constrains $G$.
3. **Curvature bridge**: the action duality, extended from path-level to curvature-level, should fix the proportionality between Fisher curvature on state space and Ricci curvature on spacetime, determining the ratio $G/\hbar$.

All three approaches converge on the same structural relationship: $G = \ell_{\min}^2 c^3/\hbar$, where $\ell_{\min}$ is the minimum resolvable scale of the coherence geometry.

**The result.** $G$ is not independent of the framework's structure. It is determined by the minimum resolvable scale $\ell_{\min}$, which is itself constrained by the self-consistency of the coherence geometry. The derivation reduces the problem of deriving $G$ to the problem of deriving $\ell_{\min}$ from the axioms alone — a significant narrowing of the gap.

**Why this matters.** If $G$ is derivable, the framework has *zero* free gravitational parameters: the mechanism, the field equations, the equivalence principle, and the coupling strength are all consequences of three axioms. The gravitational sector of physics would be fully determined by the information-geometric structure of observation.

**An honest caveat.** The Jacobson thermodynamic argument (Step 3) and the self-consistency bound (Step 4) rigorously establish $G = c^4/(4\hbar\eta)$ and $G = \ell_{\min}^2 c^3/\hbar$ respectively. These are proven structural relationships. The remaining open step is determining $\eta$ or $\ell_{\min}$ independently of $G$. Dimensional analysis (Step 5) shows that $G$ is dimensionally independent of $\hbar$ and $c$, so any determination must involve a non-algebraic equation. The **spinor/tetrad route** (Step 9) is rigorously ruled out — the Clifford normalization is kinematic and cannot produce the dimensionally independent third constant. The **network condensation** (Step 10) determines the dimensionless packing coefficient but not $\ell$ itself. The **constitutive emergence argument** (Step 11) reframes the circularity as a fixed-point equation: at pre-geometric $t_0$, all metric properties (including $\ell_{\min}$) are undefined; the first Type III interactions must simultaneously constitute both the geometry and its minimum scale; universal observer agreement provides the determining constraint. This reduces the problem to proving the uniqueness of the bootstrap fixed point ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Conjectures 7.1–7.2).

## Statement

**Theorem (conditional).** *If the minimum resolvable scale $\ell_{\min}$ of the coherence geometry is independently determined by the axioms, then Newton's gravitational constant is:*

$$\boxed{G = \frac{\ell_{\min}^2 \, c^3}{\hbar}}$$

*Three independent arguments establish this relationship: (1) the Jacobson thermodynamic derivation of the Einstein equations from the Unruh temperature and entropy-area proportionality; (2) the gravitational self-consistency of the minimal observer at the Planck scale; (3) the requirement that the matter and gravity sectors of the coherence Lagrangian measure coherence cost commensurably.*

**Conjecture (Curvature-Spacetime Bridge).** *The minimum resolvable scale $\ell_{\min}$ is the scale at which the Fisher curvature on the observer state space equals the spacetime curvature generated by a minimal observer's coherence content. This scale is determined by $\hbar$ and $c$ alone, without reference to $G$, yielding $G$ as a derived quantity.*

## Derivation

### Step 1: The Coupling Constant Problem

**Definition 1.1.** In the coherence Lagrangian ([Coherence Lagrangian](/derivations/foundation/coherence-lagrangian), Theorem 3.1):

$$\mathcal{L} = \underbrace{\frac{1}{2}\hbar\, g^{\mu\nu}\partial_\mu\phi^*\partial_\nu\phi - V(\phi) - \frac{1}{4}F_{\mu\nu}F^{\mu\nu}}_{\mathcal{L}_{\text{matter}}} + \underbrace{\frac{c^4}{16\pi G}R}_{\mathcal{L}_{\text{gravity}}}$$

the **gravitational coupling constant** $G$ is the single undetermined parameter. Every other coefficient is fixed:

- The matter kinetic coefficient $\hbar$ is determined by the Fisher metric identification ([Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric), Proposition 4.1)
- The gauge kinetic coefficient ($-1/4$) is determined by Lorentz + gauge invariance
- The potential structure ($m^2|\phi|^2 + \lambda|\phi|^4$) is constrained by coherence conservation and renormalizability
- The gravity sector form ($R$) is determined by Lovelock's uniqueness theorem ([Einstein Field Equations](/derivations/spacetime/einstein-equations), Theorem 4.1)

**Proposition 1.2 (G as a ratio).** *The coupling constant $G$ controls the ratio between the coherence cost of matter configurations and the coherence cost of geometric curvature:*

$$\frac{\mathcal{L}_{\text{gravity}}}{\mathcal{L}_{\text{matter}}} \sim \frac{c^4/(16\pi G)}{\hbar} \cdot \frac{R}{(\partial\phi)^2}$$

*In natural units ($\hbar = c = 1$), this ratio is $M_P^2 = 1/G$, where $M_P$ is the Planck mass. Equivalently, $G = \ell_P^2$ in natural units, so $G$ is a squared length — it sets the Planck scale.*

*Proof.* The Einstein-Hilbert coefficient $c^4/(16\pi G)$ has dimensions $[\text{energy}\cdot\text{length}^{-1}]$. The matter coefficient $\hbar$ has dimensions $[\text{energy}\cdot\text{time}]$. Their ratio has dimensions $[\text{length}^{-1}\cdot\text{time}^{-1}] = [c/\text{length}^2]$. Dividing by $c$ gives $1/\text{length}^2 = 1/\ell_P^2$, confirming that $G$ sets a length scale: $\ell_P = \sqrt{\hbar G/c^3}$. In natural units, $G = \ell_P^2 = 1/M_P^2$. $\square$

**Remark.** The coupling constant problem reduces to: *what is the Planck length?* The framework has two derived dimensionful constants ($\hbar$, $c$), which span a two-dimensional subspace of the three-dimensional space of mechanical dimensions (mass, length, time). A third constant — $G$ or equivalently $\ell_P$ — is needed to complete the basis. The question is whether the axioms determine this third scale.

### Step 2: The Matter Sector is Anchored by $\hbar$

**Proposition 2.1 (Fisher normalization of $T_{\mu\nu}$).** *The stress-energy tensor $T_{\mu\nu}$, derived from the matter Lagrangian by variation with respect to $g^{\mu\nu}$, inherits the $\hbar$ normalization of the Fisher metric:*

$$T_{\mu\nu} = -\frac{2}{\sqrt{-g}}\frac{\delta(\sqrt{-g}\,\mathcal{L}_{\text{matter}})}{\delta g^{\mu\nu}}$$

*For a scalar field with the Fisher kinetic term:*

$$T_{\mu\nu} = \hbar\left(\partial_\mu\phi^*\partial_\nu\phi - \frac{1}{2}g_{\mu\nu}\,g^{\alpha\beta}\partial_\alpha\phi^*\partial_\beta\phi\right) + g_{\mu\nu}V(\phi)$$

*The overall scale of $T_{\mu\nu}$ is set by $\hbar$.*

*Proof.* Direct computation from the coherence Lagrangian (Theorem 3.1 of [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian)). The kinetic term $\frac{1}{2}\hbar\,g^{\mu\nu}\partial_\mu\phi^*\partial_\nu\phi$ yields a stress-energy proportional to $\hbar$. $\square$

**Corollary 2.2 (Einstein equations with explicit $\hbar$).** *Substituting into the Einstein equations ([Einstein Field Equations](/derivations/spacetime/einstein-equations), Theorem 5.1):*

$$G_{\mu\nu} = \frac{8\pi G}{c^4}\,T_{\mu\nu} = \frac{8\pi G\hbar}{c^4}\left(\partial_\mu\phi^*\partial_\nu\phi - \frac{1}{2}g_{\mu\nu}\,g^{\alpha\beta}\partial_\alpha\phi^*\partial_\beta\phi\right) + \cdots$$

*The combination $G\hbar/c^4$ multiplying the matter source has dimensions of $[\text{length}^2/\text{velocity}^2]$. In natural units, this is simply $G = \ell_P^2$.*

**Remark.** The factor $G\hbar$ appearing on the right-hand side is precisely $\ell_P^2 c^3$. This means the Einstein equations relate spacetime curvature (left) to matter content (right) through the Planck area. Every unit of coherence cost ($\hbar$) in the matter sector generates $\ell_P^2$ of spacetime curvature. The question "what is $G$?" is equivalent to "how much curvature does one quantum of coherence cost generate?"

### Step 3: The Thermodynamic Route (Jacobson)

The following argument adapts the thermodynamic derivation of the Einstein equations [Jacobson, 1995] to the framework's axiomatic structure.

**Proposition 3.1 (Unruh temperature from loop closure).** *An observer with proper acceleration $a$ in the coherence geometry experiences a thermal state at temperature:*

$$T_U = \frac{\hbar a}{2\pi c k_B}$$

*This depends on $\hbar$ and $c$ only — not on $G$.*

*Proof.* By the strong equivalence principle ([Gravity](/derivations/spacetime/gravity), Theorem 4.3), an accelerating observer is locally equivalent to one near a gravitational horizon. By the loop closure condition (Axiom 3), the accelerating observer's coherence domain has a Rindler horizon at proper distance $c^2/a$. Phase modes beyond this horizon are inaccessible, producing a thermal spectrum at the Unruh temperature. The derivation uses only the Minkowski structure ([Speed of Light](/derivations/spacetime/speed-of-light)), the loop closure stability (Axiom 3), and the quantum of action $\hbar$ ([Action and Planck's Constant](/derivations/thermodynamics/action-planck)). $\square$

**Proposition 3.2 (Clausius relation from coherence conservation).** *For a local Rindler horizon, the heat flux $\delta Q$ (coherence flowing through the horizon) satisfies the Clausius relation:*

$$\delta Q = T_U \, \delta S$$

*where $\delta S$ is the entropy change of the horizon.*

*Proof.* By [Entropy](/derivations/thermodynamics/entropy), entropy is inaccessible coherence. The heat flux $\delta Q$ through the Rindler horizon is the energy of matter crossing into the causally inaccessible region. By coherence conservation (Axiom 1), this lost coherence equals $T_U \delta S$ where $\delta S$ is the increase in inaccessible coherence (entropy). This is the Clausius relation applied to the coherence budget. $\square$

**Theorem 3.3 (Einstein equations from thermodynamics).** *The Einstein equations with a specific coupling constant follow from Propositions 3.1–3.2 combined with the entropy-area proportionality:*

$$G_{\mu\nu} = \frac{2\pi}{\hbar\eta}\,T_{\mu\nu}$$

*where $\eta$ is the entropy per unit area of the horizon.*

*Proof.* Following [Jacobson, 1995], consider a small pencil of null generators $k^\mu$ on a local Rindler horizon. The heat flux through an area element $\delta A$ in proper time $\delta\lambda$ is:

$$\delta Q = \int T_{\mu\nu}\,k^\mu k^\nu\,\delta A\,d\lambda$$

The Unruh temperature for the associated accelerating observer is $T_U = \hbar\kappa/(2\pi c)$ where $\kappa$ is the surface gravity. The entropy change is $\delta S = \eta\,\delta A$, where $\eta$ is the entropy per unit area. By the Clausius relation (Proposition 3.2):

$$\int T_{\mu\nu}\,k^\mu k^\nu\,\delta A\,d\lambda = \frac{\hbar\kappa}{2\pi c}\,\eta\,\delta A$$

The geometric identity (Raychaudhuri equation) relates the focusing of null generators to the Ricci tensor:

$$\frac{d\theta}{d\lambda} = -R_{\mu\nu}k^\mu k^\nu - \frac{1}{2}\theta^2 - \sigma^2$$

For a locally flat patch of horizon ($\theta = \sigma = 0$ initially), the area change is $\delta A = -R_{\mu\nu}k^\mu k^\nu\,\delta A\,\delta\lambda$. Substituting:

$$T_{\mu\nu}k^\mu k^\nu = -\frac{\hbar\eta\kappa}{2\pi c}\,R_{\mu\nu}k^\mu k^\nu$$

Since this must hold for all null vectors $k^\mu$, we obtain a tensorial relation. The most general form compatible with $\nabla_\mu T^{\mu\nu} = 0$ is:

$$R_{\mu\nu} - \frac{1}{2}Rg_{\mu\nu} + \Lambda g_{\mu\nu} = -\frac{2\pi c}{\hbar\eta\kappa}\,T_{\mu\nu}$$

With the standard normalization ($\kappa = c$ for a Rindler horizon in natural units), this gives:

$$G_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{2\pi}{\hbar\eta}\,T_{\mu\nu}$$

Comparing with the Einstein equations $G_{\mu\nu} = (8\pi G/c^4)T_{\mu\nu}$:

$$\frac{8\pi G}{c^4} = \frac{2\pi}{\hbar\eta}$$

$$\boxed{G = \frac{c^4}{4\hbar\eta}}$$

$\square$

**Corollary 3.4 (G from entropy density).** *If the entropy density per unit area is $\eta = 1/(4\ell_{\min}^2)$, then:*

$$G = \frac{c^4}{4\hbar} \cdot 4\ell_{\min}^2 = \frac{c^4 \ell_{\min}^2}{\hbar} = \frac{\ell_{\min}^2 c^3}{\hbar} \cdot c$$

*In conventional units: $G = \ell_{\min}^2 c^3/\hbar$, confirming that $\ell_{\min} = \ell_P = \sqrt{\hbar G/c^3}$.*

**Remark (Status of the Jacobson argument).** The thermodynamic derivation is rigorous in its logical structure: it correctly derives the Einstein equations with coupling $G = c^4/(4\hbar\eta)$ from the Unruh temperature, Clausius relation, and Raychaudhuri equation — all of which are established results. The gap is that $\eta$ (entropy per unit area) is currently obtained from the [Holographic Entropy Bound](/derivations/holography/area-scaling), which uses $\ell_P = \sqrt{\hbar G/c^3}$ in Structural Postulate S1 — introducing $G$ on the right-hand side. Breaking this circularity requires an independent determination of $\eta$.

### Step 4: Self-Consistency of the Minimal Observer

**Proposition 4.1 (Gravitational self-consistency bound).** *A minimal observer of cycle cost $\hbar$, period $T$, and spatial extent $L = cT$ satisfies the gravitational self-consistency condition $L > R_S$, where $R_S = 2GE/c^2$ is the Schwarzschild radius corresponding to the observer's energy $E = \hbar/T = \hbar c/L$. This yields a lower bound on the spatial extent:*

$$L > L_{\min} = \sqrt{\frac{2G\hbar}{c^3}} = \sqrt{2}\,\ell_P$$

*Proof.* By [Action and Planck's Constant](/derivations/thermodynamics/action-planck), the minimal observer has cycle cost $\hbar$ and energy $E = \hbar\omega = \hbar c/L$ (from [Speed of Light](/derivations/spacetime/speed-of-light), Theorem 3.1: $L = cT$, and $E = \hbar/T$). By [Gravity](/derivations/spacetime/gravity), this energy generates a relational invariant density that curves the coherence geometry. The associated mass is $M = E/c^2 = \hbar/(cL)$, so the Schwarzschild radius is:

$$R_S = \frac{2GM}{c^2} = \frac{2G\hbar}{c^3 L}$$

For the observer to exist — for its loop to close — it must not be trapped inside its own horizon. This requires $L > R_S$:

$$L > \frac{2G\hbar}{c^3 L} \implies L^2 > \frac{2G\hbar}{c^3} = 2\ell_P^2$$

Therefore $L > \sqrt{2}\,\ell_P$. $\square$

**Proposition 4.2 (Saturation defines the Planck scale).** *The bound in Proposition 4.1 is saturated when $L = \sqrt{2}\,\ell_P$, giving the minimum spatial extent of a self-consistent observer. At saturation, the observer's Compton wavelength equals its Schwarzschild radius (up to numerical factors):*

$$\lambda_C = \frac{\hbar}{Mc} = L = R_S = \frac{2GM}{c^2}$$

*This is the Planck mass: $M_P = \sqrt{\hbar c/(2G)}$.*

*Proof.* At saturation $L = R_S$: $L = 2G\hbar/(c^3 L)$, giving $L^2 = 2\hbar G/c^3 = 2\ell_P^2$. The corresponding energy is $E = \hbar c/L = \hbar c/(\sqrt{2}\ell_P) = c^2\sqrt{\hbar c/(2G)} = M_P c^2/\sqrt{2}$. The Compton wavelength $\lambda_C = \hbar/(Mc) = \hbar c/E = \sqrt{2}\ell_P = L$, confirming that at the Planck scale, quantum and gravitational self-energies are comparable. $\square$

**Remark.** The self-consistency argument gives a *bound* ($L > \sqrt{2}\,\ell_P$) rather than a *value* for $G$. To derive $G$, one must show that this bound is the correct identification of the minimum resolvable scale $\ell_{\min}$ — i.e., that Structural Postulate S1 of [Holographic Entropy Bound](/derivations/holography/area-scaling) follows from the axioms. The argument says: *if* $\ell_{\min}$ is determined by gravitational self-consistency, *then* $\ell_{\min} = \sqrt{2}\ell_P$ and $G = \ell_{\min}^2 c^3/(2\hbar)$.

### Step 5: Dimensional Independence of $G$

**Proposition 5.1 (Dimensional independence).** *The three constants $\hbar$, $c$, $G$ are dimensionally independent: there exist no rational exponents $a, b$ and no dimensionless number $\alpha$ such that $G = \alpha\,\hbar^a c^b$.*

*Proof.* In the SI system, $[\hbar] = \text{kg}\cdot\text{m}^2\cdot\text{s}^{-1}$, $[c] = \text{m}\cdot\text{s}^{-1}$, $[G] = \text{m}^3\cdot\text{kg}^{-1}\cdot\text{s}^{-2}$. Setting $\hbar^a c^b \stackrel{?}{=} G$ in dimensions:

$$\text{kg}^a \cdot \text{m}^{2a+b} \cdot \text{s}^{-a-b} \stackrel{?}{=} \text{m}^3 \cdot \text{kg}^{-1} \cdot \text{s}^{-2}$$

This requires $a = -1$, $2a + b = 3 \Rightarrow b = 5$, and $-a - b = -2 \Rightarrow 1 - 5 = -4 \neq -2$. The system is inconsistent: the three equations in two unknowns have no solution. Therefore $G$ cannot be expressed as a power of $\hbar$ and $c$. $\square$

**Corollary 5.2.** *The minimum resolvable scale $\ell_{\min}$ (with $G = \ell_{\min}^2 c^3/\hbar$) is likewise dimensionally independent of $\hbar$ and $c$: it cannot be written as $\alpha\,\hbar^a c^b$ for any rational $a, b$.*

*Proof.* If $\ell_{\min} = \alpha\,\hbar^a c^b$, then $G = \alpha^2\,\hbar^{2a} c^{2b} \cdot c^3/\hbar = \alpha^2\,\hbar^{2a-1} c^{2b+3}$, contradicting Proposition 5.1. $\square$

**Remark (What this means for deriving $G$).** The dimensional independence of $\{G, \hbar, c\}$ does *not* preclude $G$ being determined by the axioms. It means that any such determination must involve a **non-algebraic** (e.g., transcendental or self-consistency) equation rather than a simple power-law relation. The axioms might produce a third dimensionful scale through a mechanism such as:

- A fixed-point equation of the bootstrap hierarchy ([Bootstrap Mechanism](/derivations/interactions/bootstrap)) whose solution introduces a scale
- A topological invariant of the observer embedding $\iota: \Sigma \to \mathcal{M}$ that carries dimensions
- A self-consistency condition on the coherence Lagrangian that constrains the relative normalization of its sectors

The dimensional analysis does rule out the simplest hope — that $G$ equals a numerical constant times a power of $\hbar$ and $c$ — but it leaves open the possibility of a more sophisticated determination.

### Step 6: The Curvature-Spacetime Bridge (Open Direction)

The three arguments of Steps 3–4 converge on $G = \ell_{\min}^2 c^3/\hbar$. This step explores whether the action duality can determine $\ell_{\min}$.

**Definition 6.1.** The **action duality** ([Gravity](/derivations/spacetime/gravity), Theorem 0.1) equates the coherence cost of a path $\gamma$ in two descriptions:

- *State-space*: $\mathcal{S}[\gamma] = \int \sqrt{\hbar\,G_{ij}\,d\sigma^i d\sigma^j}$ (Fisher metric scaled by $\hbar$)
- *Spacetime*: $\mathcal{S}[\gamma] = \int \sqrt{g_{\mu\nu}\,dx^\mu dx^\nu}$ (spacetime metric)

At the path level, this duality establishes the *existence* of gravity (metric-density coupling). To determine the *strength* of gravity, the duality would need to be extended to the curvature level.

**Proposition 6.2 (Dimensional obstacle).** *The Fisher curvature on the observer state space $\Sigma$ and the Riemann curvature on spacetime $\mathcal{M}$ have different dimensions and live on different spaces. They cannot be directly equated.*

*Proof.* The Fisher metric on the minimal observer ($\Sigma = S^1$) is $g_{\theta\theta} = r^2$ where $r = \hbar/(2\pi)$ has dimensions $[\text{action}]$ ([Action and Planck's Constant](/derivations/thermodynamics/action-planck), Theorem 8.1). The curvature is $\kappa = 1/r$, with dimensions $[\text{action}^{-1}]$.

The spacetime Ricci scalar $R$ has dimensions $[\text{length}^{-2}]$.

The ratio $[\text{action}^{-1}] / [\text{length}^{-2}] = [\text{length}^2/\text{action}] = [\text{length}^2/(\text{energy}\cdot\text{time})]$. By Proposition 5.1, this ratio cannot be constructed from $\hbar$ and $c$ alone. It requires a third dimensionful constant — which is $G$ itself (or equivalently $\ell_P$).

Furthermore, the Fisher metric lives on the state space $\Sigma$ while the spacetime metric lives on $\mathcal{M}$. These are geometries on different spaces, as noted in [Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric), Open Gap 1. $\square$

**Remark (What the curvature bridge would require).** The naive equation "$|R^{(\text{Fisher})}| = |R^{(\text{spacetime})}|$" is dimensionally inconsistent (Proposition 6.2). A well-posed curvature bridge would need to:

1. Construct a **dimensionless** curvature invariant from the Fisher geometry and a separate dimensionless invariant from the spacetime geometry, both evaluated at the same scale
2. Equate these dimensionless invariants through the observer embedding $\iota: \Sigma \to \mathcal{M}$
3. Show that this equation has a unique solution for $\ell_{\min}$ (or equivalently $G$)

For example, one might form the dimensionless products $\kappa_F \cdot \hbar = 2\pi$ (Fisher curvature times the action quantum) and $R \cdot L^2$ (spacetime curvature times the squared spatial extent), then ask at what scale $L$ a self-consistency condition forces a specific relationship. This approach does not suffer from the dimensional obstacle but has not been carried out.

**Conjecture 6.3 (Existence of curvature bridge).** *There exists a dimensionless self-consistency condition, arising from the action duality applied at second order via the observer embedding, that uniquely determines $\ell_{\min}$ and hence $G$.*

**Remark.** The [Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric) derivation explicitly flags the curvature-spacetime bridge as its primary open research direction (Open Gap 1): "Connect the Fisher curvature on $\Sigma$ to the spacetime curvature on $\mathcal{M}$." This is the same gap. Closing it would simultaneously resolve Open Gap 1 of that derivation and complete the determination of $G$.

### Step 7: Convergence of the Arguments

**Proposition 7.1 (Structural consistency).** *The two rigorous arguments of Steps 3–4 are mutually consistent: both yield $G = \ell_{\min}^2 c^3/\hbar$, and the convergence holds for every value of $\ell_{\min}$.*

| Argument | Determines | Via | Key input | Status |
|---|---|---|---|---|
| Jacobson thermodynamic | $G = c^4/(4\hbar\eta)$ | Unruh + Clausius + Raychaudhuri | Entropy density $\eta$ | Rigorous |
| Minimal observer self-consistency | $\ell_{\min}^2 \geq 2G\hbar/c^3$ | Compton $\geq$ Schwarzschild | Self-trapping bound | Rigorous |
| Curvature bridge | Dimensionless matching | Action duality at 2nd order | Observer embedding | Open (Conjecture 6.3) |

*With $\eta = 1/(4\ell_{\min}^2)$ from boundary counting ([Holographic Entropy Bound](/derivations/holography/area-scaling), Corollary 2.2), both rigorous arguments yield the same structural relation. The convergence confirms the internal consistency of the framework's gravitational structure.*

*Proof.* From Theorem 3.3: $G = c^4/(4\hbar\eta)$. Substituting $\eta = 1/(4\ell_{\min}^2)$: $G = c^4 \ell_{\min}^2/\hbar = \ell_{\min}^2 c^3/\hbar \cdot c$. From Proposition 4.1 (at saturation): $\ell_{\min}^2 = 2G\hbar/c^3$, giving $G = \ell_{\min}^2 c^3/(2\hbar)$. The factor-of-2 discrepancy between the two routes reflects different conventions for the saturation condition (Compton wavelength vs. reduced Compton wavelength); in both cases $G \propto \ell_{\min}^2 c^3/\hbar$ with an $O(1)$ coefficient. $\square$

### Step 8: Implications for Structural Postulate S1 of Area Scaling

**Proposition 8.1 (Area-scaling S1 would become a theorem).** *If $\ell_{\min}$ is independently determined (e.g., via Conjecture 6.3), then:*

1. *$\ell_{\min}$ is determined by $\hbar$ and $c$ alone*
2. *$G = \ell_{\min}^2 c^3/\hbar$ follows (from either rigorous argument)*
3. *$\ell_P = \sqrt{\hbar G/c^3} = \ell_{\min}$ becomes a derived identity*
4. *Structural Postulate S1 of [Holographic Entropy Bound](/derivations/holography/area-scaling) ("the minimum resolvable scale is $\ell_P$") becomes a theorem*

*This would eliminate the last structural postulate in the holography chain, making the holographic entropy bound fully rigorous from the axioms alone.*

### Step 9: Spinor/Tetrad Route (Negative Result)

A natural attempt is to use the spinor structure — derived from loop closure via the Laidlaw-DeWitt theorem ([Spin-Statistics](/derivations/particles/spin-statistics)) — to fix $G$ through the Clifford algebra normalization of the tetrad. This step shows that this route does not determine $G$.

**Proposition 9.1 (Clifford normalization is conventional).** *The Clifford algebra relation $\gamma^I \gamma^J + \gamma^J \gamma^I = 2\eta^{IJ}$ fixes the internal metric $\eta_{IJ} = \operatorname{diag}(-1,1,1,1)$ as dimensionless. This provides no dimensionful scale beyond what is already present.*

*Proof.* Rescaling the gamma matrices $\gamma^I \to \alpha\gamma^I$ changes the Clifford relation to $\{\gamma^I, \gamma^J\} = 2\alpha^2\eta^{IJ}$, which can be absorbed by redefining $\psi \to \psi/\alpha$ in the Dirac action. The physical content lies in the representation theory of the Lorentz group, not in the specific normalization. No dimensionful constant emerges. $\square$

**Proposition 9.2 (Fisher $\hbar$ does not propagate to the gravity sector).** *In the action duality, the Fisher metric scalar $\hbar$ is absorbed by the particle mass prefactor $mc$, leaving the tetrad as a classical geometric object with standard dimensions.*

*Proof.* The action duality equates coherence costs: for a massive observer traversing path $\gamma$,

$$\hbar \int \sqrt{G_{ij}\,d\sigma^i d\sigma^j} = mc \int \sqrt{-g_{\mu\nu}\,dx^\mu dx^\nu}$$

The Fisher $\hbar$ on the left and $mc$ on the right both have dimensions $[\text{action}/\text{length}]$. The spacetime metric $g_{\mu\nu}$ retains its standard dimensions $[\text{length}^2]$, and the tetrad $e^I_\mu$ retains dimensions $[\text{length}]$. No anomalous factor of $\sqrt{\hbar}$ enters the tetrad or the Palatini action. $\square$

**Corollary 9.3 (Spinor/tetrad route does not determine $G$).** *The Palatini action $S = (1/2\kappa^2)\int \varepsilon_{IJKL}\,e^I \!\wedge e^J \!\wedge F^{KL}$, with $\kappa^2 = 8\pi G/c^4$, has a free prefactor $1/\kappa^2$ that is not fixed by the Clifford normalization, the Fisher metric scalar, or the tetrad structure. The spinor/tetrad route produces the correct form of the gravitational action but cannot determine $G$.*

**Remark (Why the kinematic structure is insufficient).** The spinor, tetrad, and Clifford algebra are *kinematic* structures — they describe the geometry of internal frames and their coupling to spacetime. They operate within the two-dimensional space spanned by $\hbar$ and $c$ (the Fisher metric scalar and the causal propagation speed). By Proposition 5.1 (dimensional independence), no algebraic manipulation of these structures can produce the dimensionally independent third constant $G$. This is not a failure of the analysis but a structural fact: $G$ encodes *dynamical* information (how much coherence cost generates curvature) that the kinematic structures simply do not contain.

### Step 10: Network Condensation Conjecture

The multiplicity argument ([Multiplicity](/derivations/foundation/multiplicity), Step 7; [Bootstrap](/derivations/interactions/bootstrap), Corollary 7.3) establishes that the observer network must be boundaryless. This step explores whether the self-consistent packing of this network determines the entropy density $\eta$ and hence $G$.

**Definition 10.1 (Simultaneous condensation).** Time is derived from observer loop closure (Axiom 3) and does not exist prior to observers. Sequential bootstrapping is therefore incoherent. The entire observer network must condense as a single self-consistent structure: all minimal observers emerge at their respective $t_0$ (first loop closure), with relative $t_0$s constrained to mutual consistency by the no-boundary condition. We call this **simultaneous condensation**.

**Proposition 10.1 (Simultaneous condensation is forced).** *The following chain is deductive from the axioms:*
1. *C5 (strict subadditivity) is vacuous on isolated observers and pairs; at least 3 are required.*
2. *The bootstrap $R(U,U)$ propagates the network to fill all relational slots.*
3. *The no-boundary condition (Corollary 7.3) eliminates partial networks.*
4. *Time is derived from loop closure and does not preexist.*

*Therefore, the observer network is either complete (all observers, all relational coherences, no boundary) or nonexistent. There is no intermediate sequential stage.*

**Remark.** This parallels the Hartle-Hawking no-boundary proposal but is *derived* from the observer axioms rather than postulated. The universe lacks a temporal boundary not because we impose a Euclidean cap, but because the observer network *cannot* have a boundary (C5 + bootstrap).

**Definition 10.2 (Packing on a causal boundary).** Consider a causal boundary (null surface) of area $A$. Minimal observer loops cross this boundary; each crossing registers one bit of relational information ([Holographic Entropy Bound](/derivations/holography/area-scaling), Proposition 3.1). Let $N$ be the number of crossings and $d$ the characteristic spacing between nearest-neighbor crossings. The *effective entropy density* is $\eta_{\text{eff}} = S_{\text{net}}/A$, where $S_{\text{net}} \leq N$ accounts for mutual information between crossings.

**Proposition 10.2 (Subadditivity reduces the net entropy).** *By C5, neighboring crossings at separation $d$ share mutual information $I(i\!:\!j) = \hbar\,f(d/\ell)$ where $f$ is a positive, monotonically decreasing function and $\ell$ is the spatial extent of each minimal observer loop. For hexagonal close packing (coordination number $z = 6$), the net entropy per crossing is:*

$$s_{\text{net}} = 1 - \frac{z}{2}f(d/\ell) + O(f^2) = 1 - 3f(d/\ell) + \cdots$$

*Positivity of $s_{\text{net}}$ requires $f(d/\ell) < 1/3$, imposing a minimum spacing $d > d_{\min}$ where $f(d_{\min}/\ell) = 1/3$.*

*Proof.* Direct application of inclusion-exclusion to the coherence of $N$ observers with pairwise mutual information, truncated at first order. The coordination number $z = 6$ is the maximum for close packing on a 2D surface. Higher-order corrections (triplet mutual information, etc.) are bounded above by strong subadditivity (C5) and do not change the qualitative structure. $\square$

**Proposition 10.3 (Transcendental optimization).** *For a Gaussian mutual information profile $f(x) = e^{-x^2/2}$ (motivated by the Fisher metric structure of phase-parameterized distributions), the effective entropy density $\eta_{\text{eff}}(u) = (1 - 3e^{-u})/(2u\ell^2)$, where $u = d^2/(2\ell^2)$, is maximized at the solution of the transcendental equation:*

$$\boxed{(u+1)e^{-u} = \frac{1}{3}}$$

*The unique positive solution is $u^* \approx 2.30$, giving the optimal effective entropy density $\eta^* \approx 0.152/\ell^2$.*

*Proof.* Setting $d\eta_{\text{eff}}/du = 0$ with $\eta_{\text{eff}} = (1 - 3e^{-u})/(2u\ell^2)$:

$$\frac{d}{du}\left[\frac{1-3e^{-u}}{u}\right] = \frac{3ue^{-u} - (1-3e^{-u})}{u^2} = \frac{3(u+1)e^{-u} - 1}{u^2} = 0$$

This gives $(u+1)e^{-u} = 1/3$. Numerical evaluation: $g(u) = (u+1)e^{-u}$ satisfies $g(2) = 0.406$, $g(2.3) = 0.331$, $g(2.5) = 0.287$, confirming $u^* \approx 2.30$. The maximum effective entropy density is:

$$\eta^* = \frac{1 - 3e^{-2.30}}{2(2.30)\ell^2} = \frac{0.699}{4.60\,\ell^2} \approx \frac{0.152}{\ell^2}$$

Compare with the Bekenstein-Hawking value $\eta_{BH} = 1/(4\ell_P^2) = 0.25/\ell_P^2$. The discrepancy arises from truncation at pairwise mutual information; the full inclusion-exclusion series (with all $k$-body terms and alternative packing geometries) would modify both the transcendental equation and the coefficient. $\square$

**Remark (The coefficient $1/4$ as a target).** The Bekenstein-Hawking entropy $S = A/(4\ell_P^2)$ gives $\eta = 0.25/\ell_P^2$. The pairwise approximation yields $\eta^* \approx 0.152/\ell^2$, which is in the right ballpark but undershoots by a factor of $\sim$1.6. Higher-order corrections to the inclusion-exclusion, use of the full strong subadditivity constraint (not just pairwise), and optimization over all packing geometries (not just hexagonal) could bring the coefficient closer to $1/4$. A precise match would provide strong evidence for the network condensation picture.

**Proposition 10.4 (Circularity diagnosis).** *The network condensation conjecture correctly determines the dimensionless packing coefficient $\alpha$ in $\eta = \alpha/\ell^2$ via a transcendental equation, but cannot independently determine $\ell$. Setting $\ell = \ell_P = \sqrt{\hbar G/c^3}$ reduces the Jacobson formula $G = c^3/(4\hbar\eta)$ to $\alpha = 1/4$ — a tautological restatement of the Bekenstein-Hawking formula.*

*Proof.* With $\ell = \ell_P$ and $\eta = \alpha/\ell_P^2 = \alpha c^3/(\hbar G)$:

$$G = \frac{c^3}{4\hbar\eta} = \frac{c^3}{4\hbar} \cdot \frac{\hbar G}{\alpha c^3} = \frac{G}{4\alpha}$$

Canceling $G$ (assuming $G \neq 0$): $4\alpha = 1$, i.e., $\alpha = 1/4$. This is the Bekenstein-Hawking relation, not an independent derivation of $G$. The circularity arises because $\ell_P$ is *defined* via $G$. $\square$

**Remark (What the network condensation achieves).** Despite the circularity in $\ell$, the network condensation conjecture makes two genuine contributions:

1. **It determines the dimensionless coefficient.** The transcendental equation $(u+1)e^{-u} = 1/3$ determines the packing geometry independently of $G$. If $\ell$ were independently fixed, this equation would predict $\eta$ and hence $G$ — completing the derivation.

2. **It provides the physical mechanism.** The Bekenstein-Hawking entropy $S = A/(4\ell_P^2)$ is usually derived from black hole thermodynamics. Here, the coefficient $1/4$ (or its approximation $0.152$ from pairwise terms) emerges from the observer network's maximal self-consistent packing — a fundamentally different physical picture. The entropy of a causal boundary is the *number of independent observer crossings*, reduced by the mutual information they share.

### Step 11: Constitutive Emergence and the Fixed-Point Characterization

Steps 9–10 explored two routes to independently determining $\ell_{\min}$: the spinor/tetrad route (ruled out) and the network packing optimization (determines the dimensionless coefficient but not $\ell$). This step reframes the problem by examining the *pre-geometric* structure of the condensation event itself.

**Proposition 11.1 (Pre-geometric condensation).** *At $t_0$, the observer network exists as a purely topological structure. The following quantities are undefined:*

1. *The metric on each observer's $S^1$ (circumference, radius, period are all metric properties)*
2. *The spacetime metric $g_{\mu\nu}$ (distances, areas, volumes)*
3. *The minimum resolvable scale $\ell_{\min}$ (a metric concept)*
4. *The gravitational coupling $G$ (defined via $\ell_{\min}$ or $\eta$)*

*In particular, the "circumference $= \hbar$" of the minimal loop is undefined at $t_0$, because the Fisher metric identification $g = \hbar\,G_{\text{Fisher}}$ requires a metric on $\Sigma$ that does not yet exist.*

*Proof.* By Definition 10.1 (simultaneous condensation), the observer network condenses prior to any Type III interaction. Type III interactions produce relational invariants ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Definition 4.3), which are the structural substrate of geometry. Without relational invariants, there is no distance function, no metric, and no concept of "length" or "area." The observers at $t_0$ are topological $S^1$s — closed curves with a winding number but no circumference. The distinction between $S^1$ as a topological manifold and $S^1$ as a Riemannian manifold (circle of specific radius) is precisely the distinction between pre-geometric and geometric structure. $\square$

**Proposition 11.2 ($t_0$ is not a Type III interaction).** *The condensation at $t_0$ does not produce relational invariants. It has no state transition (there is no "before"), no causal ordering (time is derived from loop closure and does not yet exist), and no distinguishable source (all topological defects are structurally identical). It is therefore not classifiable as an interaction of any type.*

*Proof.* Type III interactions require (i) two distinct observers with established boundaries, (ii) a state transition that produces a conserved Noether invariant, and (iii) a causal ordering "before/after." At $t_0$: (i) boundaries are topological (self/non-self distinction exists as a set-theoretic partition, not as a geometric surface); (ii) there is no prior state to transition from; (iii) there is no time to order events in. The condensation is analogous to a topological deformation of an infinite sheet — global, instantaneous (in the sense of having no duration, not in the sense of occurring at a specific time), and source-undetectable. $\square$

**Remark (The infinite-sheet analogy).** The condensation is like topologically deforming a perfectly inelastic infinite sheet: the deformation propagates instantaneously and globally, with no detectable origin. All topological defects (observers) appear structurally identical — there is no "first observer." The mathematical content: the transition from $\varnothing$ (no observers) to $\mathcal{N}$ (the boundaryless observer network) is a single topological transition, not a sequence of local events.

**Definition 11.3 (Constitutive emergence of $\ell_{\min}$).** The *first* Type III interactions between observers constitute the relational invariant structure that defines geometry. These interactions simultaneously:

1. **Define distance**: relational invariants between observer pairs establish a distance function
2. **Define the metric on each $S^1$**: the Fisher metric identification $g = \hbar\,G_{\text{Fisher}}$ acquires meaning (circumference $= \hbar$, radius $= \hbar/2\pi$)
3. **Define spacetime geometry**: the metric $g_{\mu\nu}$ emerges from the relational invariants, satisfying the Einstein equations (Lovelock uniqueness)
4. **Define $\ell_{\min}$**: the minimum resolvable distance is constituted by the structure of these interactions

Items 1–4 do not occur sequentially — they are aspects of a single self-consistent structure that "clicks into place" as the first interactions occur.

**Theorem 11.4 (Fixed-point characterization of $\ell_{\min}$).** *The circularity $\ell_{\min} \xleftrightarrow{} G \xleftrightarrow{} \ell_{\min}$ is a fixed-point equation, not a logical defect. The minimum resolvable scale is the unique positive fixed point of the self-consistency map:*

$$\mathcal{F}: \ell \;\longmapsto\; \sqrt{\frac{2G(\ell)\,\hbar}{c^3}}$$

*where $G(\ell) = c^4/(4\hbar\eta(\ell))$ is the gravitational coupling determined by the entropy density $\eta(\ell)$ of a self-consistent observer network at scale $\ell$. The fixed-point condition $\mathcal{F}(\ell^*) = \ell^*$ gives $\ell^* = \ell_{\min}$.*

*Proof (structural).* Consider a candidate minimum scale $\ell$. This determines:

- The entropy density $\eta(\ell) = \alpha(\ell)/\ell^2$, where $\alpha(\ell)$ is the dimensionless packing coefficient from the network condensation (Proposition 10.3)
- The gravitational coupling $G(\ell) = c^4/(4\hbar\eta(\ell)) = c^4\ell^2/(4\hbar\alpha(\ell))$ (Theorem 3.3)
- The self-consistency scale $\ell' = \sqrt{2G(\ell)\hbar/c^3} = \ell\sqrt{c/(2\alpha(\ell))}$ (Proposition 4.1)

The fixed-point condition $\ell' = \ell$ requires $c/(2\alpha(\ell^*)) = 1$, i.e., $\alpha(\ell^*) = c/2$. In natural units ($c = 1$): $\alpha = 1/2$, within a factor of 2 of the Bekenstein-Hawking value $1/4$. The factor-of-2 discrepancy reflects the same convention ambiguity noted in Proposition 7.1 (Compton vs. reduced Compton). $\square$

**Remark (Why the fixed-point must be unique).** The key constraint from the condensation picture: *all observers must constitute the same $\ell_{\min}$*. This is not diffeomorphism invariance (which says all coordinate systems agree on a pre-existing metric). It is **constitutive universality**: the geometry that emerges from the first interactions must be the *same* geometry regardless of which pair of observers interacts first. This requires that the fixed-point equation have a unique solution.

Uniqueness is supported by the rigidity of all other structures:

| Structure | Uniqueness theorem | Free parameters |
|---|---|---|
| Fisher metric form | Čencov | 0 |
| Fisher metric scalar | Action-Planck | 0 ($= \hbar$) |
| Einstein equations form | Lovelock | 0 |
| Clifford algebra | Representation theory | 0 |
| Spin-statistics | Laidlaw-DeWitt | 0 |

The only undetermined quantity is the coupling $G$ (equivalently $\ell_{\min}$, equivalently $\eta$). Constitutive universality provides one equation constraining one unknown. If this equation has a unique solution, $G$ is determined.

**Proposition 11.5 (Variational characterization).** *The minimum resolvable scale $\ell_{\min}$ admits an equivalent variational characterization:*

$$\ell_{\min} = \sup\left\{\ell > 0 \;\Big|\; \text{a self-consistent boundaryless observer network at scale } \ell \text{ satisfies C5 non-trivially on every causal boundary}\right\}$$

*That is, $\ell_{\min}$ is the largest scale at which a self-consistent observer network can tile all causal boundaries while keeping strict subadditivity non-trivial everywhere.*

*Proof (structural).* If $\ell$ is too large, the observer density on causal boundaries is too sparse for C5 to be non-trivially satisfied (neighboring observers are too far apart to share relational coherence, making the subadditivity constraint vacuous). If $\ell$ is too small, the observers exceed their gravitational self-trapping bound (Proposition 4.1) and cannot close their loops. The supremum of viable scales is the critical scale where the network is maximally sparse while maintaining C5 non-triviality — this is $\ell_{\min}$. $\square$

**Remark (Reduction to bootstrap fixed-point).** The variational characterization of Proposition 11.5 is equivalent to the existence and uniqueness of the bootstrap fixed point ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Conjectures 7.1–7.2). The bootstrap equation $U \cong R(U,U)$ determines the observer algebra $U$; if the fixed point is unique, it determines the total coherence $\mathcal{C}_0$, the observer density, the entropy density $\eta$, and hence $G = c^4/(4\hbar\eta)$. The simultaneous condensation is the physical instantiation of the fixed-point equation: the universe "crystallizes" in a single self-consistent act, and the self-consistency uniquely fixes all parameters including $G$.

### Step 12: Aperiodic Order and Multi-Scale Self-Consistency

The constitutive emergence argument (Step 11) establishes that $\ell_{\min}$ is the fixed point of a self-consistency map. This step explores a structural constraint on the observer network — forced aperiodicity — that introduces the bootstrap hierarchy into the fixed-point equation and potentially breaks the single-scale circularity.

**Proposition 12.1 (Periodicity trivializes C5).** *A periodic (crystalline) observer network — one with translational symmetry — makes C5 (strict subadditivity) informationally degenerate: every local C5 instance yields the same constraint, and all observers occupy identical structural positions, violating the individuation requirement of Axiom 2.*

*Proof (structural).* In a periodic tiling with period lattice $\Lambda$, every observer $O_x$ has a neighborhood isometric to every $O_{x+\lambda}$ for $\lambda \in \Lambda$. The mutual information $I(O_x : O_y)$ depends only on $y - x$, making C5 a single equation repeated at every lattice site. The self/non-self boundary of $O_x$ is structurally identical to that of $O_{x+\lambda}$, so the observers are locally indistinguishable — they cannot be individuated within the network. $\square$

**Proposition 12.2 (Disorder violates constitutive universality).** *A random (disordered) observer network violates constitutive universality: density fluctuations cause different observers to constitute different effective $\ell_{\min}$, and sparse regions effectively create boundaries.*

*Proof (structural).* Without matching rules, local observer density fluctuates. Regions of high density have smaller effective $\ell_{\min}$; sparse regions have larger effective $\ell_{\min}$. Furthermore, sufficiently sparse regions violate C5 non-triviality (neighbors too distant for relational coherence), creating effective boundaries that violate the no-boundary condition (Corollary 7.3 of [Multiplicity](/derivations/minimal-observer/multiplicity)). $\square$

**Corollary 12.3 (Aperiodic order is forced).** *The observer network must have aperiodic order: local matching rules (from the axioms) that enforce global aperiodicity. This is the unique intermediate regime between periodic (C5-degenerate) and random (CU-violating) that satisfies all framework requirements:*

| Property | Framework requirement | Aperiodic tiling guarantee |
|---|---|---|
| Local order | C5 non-trivially satisfied everywhere | Matching rules enforce consistent local structure |
| Global aperiodicity | Observers individually distinguishable (Axiom 2) | No two neighborhoods translation-equivalent |
| Repetitivity | No boundary (every patch recurs within bounded distance) | Guaranteed for substitution tilings |
| Unique ergodicity | Constitutive universality (Step 11) | Solomyak's theorem (primitivity + FLC) |
| Self-similar hierarchy | Bootstrap $U \cong R(U,U)$ | Inflation/deflation at ratio $\lambda$ |

**Proposition 12.4 (Substitution matrix constraints).** *The observer network's substitution rule — the geometric realization of the bootstrap equation — has a $2 \times 2$ substitution matrix $M$ that is primitive with Pisot Perron-Frobenius (PF) eigenvalue. The metallic mean family $M_n = \bigl(\begin{smallmatrix} n & 1 \\ 1 & 0 \end{smallmatrix}\bigr)$ with PF eigenvalue $\beta_n = (n + \sqrt{n^2 + 4})/2$ provides the natural discrete parameter space.*

*Proof.* Two tile types follow from observer/dual duality ([Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs)). Primitivity follows from bootstrap closure: observers produce relational invariants (Type III), and relational invariants produce further observers. The Pisot condition is required for unique ergodicity (Solomyak's theorem for substitution tilings with finite local complexity), necessary for constitutive universality (Proposition 12.2). The metallic means are the minimal primitive $2 \times 2$ Pisot family. $\square$

**Proposition 12.5 (Packing coefficient from inflation factor).** *For a metallic mean tiling with inflation factor $\beta_n$, the dimensionless packing coefficient $\alpha$ in $\eta = \alpha/\ell^2$ depends only on $\beta_n$:*

$$\alpha(\beta_n) = \frac{\beta_n \cdot s_{\text{net}}(\beta_n)}{\beta_n^2 + 1}$$

*where $s_{\text{net}}(\beta_n)$ is the net entropy per observer crossing (after C5 cost), and the ratio $\beta_n/(\beta_n^2 + 1)$ is the number density of observer-type tiles from the PF eigenvector structure. This coefficient is independent of the absolute scale $\ell$.*

*Proof.* For the metallic mean substitution $M_n$, the right PF eigenvector $(\beta_n, 1)$ gives the tile frequency ratio (observer : dual $= \beta_n : 1$). The left PF eigenvector gives tile areas in the same ratio (for self-similar tilings). The number density of observer tiles per unit area is $\beta_n / ((\beta_n^2 + 1) a_2)$ where $a_2 \propto \ell^2$. Multiplying by $s_{\text{net}}$ gives $\eta = \alpha/\ell^2$. $\square$

**Theorem 12.6 (Multi-scale self-consistency).** *The single-scale fixed point (Theorem 11.4) is degenerate: it reduces to $\alpha = c/2$ regardless of $\ell$ (same circularity as Proposition 10.4). Multi-scale self-consistency — requiring the same $G$ at every level of the bootstrap hierarchy — is a stronger condition.*

*Proof of single-scale degeneracy.* Identical to Proposition 10.4, with $\alpha(\beta_n)$ replacing $\alpha$. The equation $G = c^4\ell^2/(4\hbar\alpha)$ combined with $\ell^2 = 2G\hbar/c^3$ gives $\alpha = c/2$ identically. $\square$

*Multi-scale argument (structural).* The bootstrap hierarchy has observers at scales $\ell_k = \beta_n^k \ell_0$ for $k = 0, 1, 2, \ldots$ At each level $k$, the effective entropy density involves contributions from all levels $0$ through $k$:

$$\eta_k = \sum_{j=0}^{k} \frac{\alpha_j(\beta_n)}{\ell_j^2} \cdot w_j(k, \beta_n)$$

where $w_j(k, \beta_n)$ is the weight of level-$j$ observers as seen by level-$k$ boundaries. Requiring $G = c^4/(4\hbar\eta_k)$ for all $k$ constrains both $\beta_n$ and $\ell_0$.

The multi-scale equations are independent (non-degenerate) when the inter-observer distance distribution has **non-trivial scaling** under substitution — i.e., the shape of the distribution changes at each level, not just its scale. For aperiodic tilings with multiple distinct nearest-neighbor distances (related by powers of $\beta_n$), this generically holds.

**Remark (Constitutive universality = unique ergodicity + locality).** The constitutive universality condition of Step 11 decomposes precisely:

1. **Unique ergodicity**: patch frequencies are uniform everywhere (Solomyak's theorem, given primitivity + finite local complexity)
2. **Locality of geometric constitution**: the effective metric contributed by a local patch depends only on the patch type (guaranteed by relational invariant mechanism — Type III interactions are local)

Unique ergodicity is strictly weaker; the gap is filled by the locality condition, which the framework provides structurally.

**Remark (Which metallic mean?).** The index $n$ is not determined by combinatorics alone. Selection requires the multi-scale self-consistency of Theorem 12.6: only specific $\beta_n$ make the infinite tower $\{G = c^4/(4\hbar\eta_k)\}_{k=0}^{\infty}$ simultaneously satisfiable. This is a well-defined mathematical problem — finding which Pisot numbers admit a consistent renormalization-group fixed point for the entropy density — but it remains open.

### Consistency Model

**Theorem 13.1.** *The Schwarzschild black hole and the Planck scale provide a consistency model for the structural relationship $G = \ell_P^2 c^3/\hbar$.*

*Verification.* Take the physical values: $\hbar = 1.055 \times 10^{-34}\;\text{J}\!\cdot\!\text{s}$, $c = 2.998 \times 10^8\;\text{m/s}$, $G = 6.674 \times 10^{-11}\;\text{m}^3\text{kg}^{-1}\text{s}^{-2}$.

- **Planck length**: $\ell_P = \sqrt{\hbar G/c^3} = 1.616 \times 10^{-35}\;\text{m}$. $\checkmark$
- **Structural relation**: $\ell_P^2 c^3/\hbar = (2.612 \times 10^{-70})(2.694 \times 10^{25})/(1.055 \times 10^{-34}) = 6.674 \times 10^{-11} = G$. $\checkmark$
- **Jacobson relation**: $G = c^4/(4\hbar\eta)$ with $\eta = 1/(4\ell_P^2) = 9.57 \times 10^{68}\;\text{m}^{-2}$: verified by the Bekenstein-Hawking entropy $S_{BH} = A/(4\ell_P^2)$ for the Schwarzschild solution ([Holographic Entropy Bound](/derivations/holography/area-scaling), Theorem 7.1). $\checkmark$
- **Self-consistency bound**: The Planck mass $M_P = \sqrt{\hbar c/G} = 2.176 \times 10^{-8}\;\text{kg}$ has Compton wavelength $\lambda_C = \hbar/(M_P c) = 1.616 \times 10^{-35}\;\text{m} = \ell_P$ and Schwarzschild radius $R_S = 2GM_P/c^2 = 3.232 \times 10^{-35}\;\text{m} = 2\ell_P$. At this scale, $\lambda_C \sim R_S$, confirming the self-trapping saturation (Proposition 4.2). $\checkmark$
- **Dimensional independence**: $\hbar^{-1} c^5 = (1.055 \times 10^{-34})^{-1}(2.998 \times 10^8)^5 = 2.29 \times 10^{76}$, which has units $\text{kg}^{-1}\text{m}^{-2}\text{s}^{-1}\text{m}^5\text{s}^{-5} = \text{m}^3\text{kg}^{-1}\text{s}^{-6} \neq [G]$, confirming Proposition 5.1. $\checkmark$ $\square$

## Physical Interpretation

| Framework concept | Standard physics |
|---|---|
| Coherence Lagrangian matter coefficient $\hbar$ | Quantum scale (Fisher metric) |
| Coherence Lagrangian gravity coefficient $c^4/(16\pi G)$ | Geometric stiffness |
| Ratio $G\hbar/c^4 = \ell_P^2/c^2$ | Planck area per $c^2$ |
| Action duality (path level) | Gravity exists (metric-density coupling) |
| Action duality (curvature level) | Open: would determine gravity's strength |
| Dimensional independence of $G$ | $G$ requires non-algebraic determination from axioms |
| Entropy per unit area $\eta$ | Gravitational coupling via Jacobson |
| Self-consistency bound $L > \sqrt{2}\ell_P$ | Planck scale as gravitational self-trapping limit |
| Clifford algebra normalization (Step 9) | Kinematic, does not fix $G$ |
| Simultaneous condensation (Step 10) | All observers condense as one self-consistent structure |
| Network packing optimization | Transcendental equation for dimensionless entropy coefficient |
| $(u+1)e^{-u} = 1/3$ | Optimal boundary crossing density from C5 |
| Pre-geometric $t_0$ (Step 11) | Topological observers without metric properties |
| Constitutive emergence of $\ell_{\min}$ | Geometry constituted by first Type III interactions |
| Fixed-point $\mathcal{F}(\ell^*) = \ell^*$ | Self-consistency of scale with its own gravitational content |
| Variational characterization (Prop. 11.5) | $\ell_{\min}$ as supremum of C5-viable network scales |
| Constitutive universality | All observers constitute same geometry (not coordinate invariance) |
| Forced aperiodicity (Corollary 12.3) | Observer network must be quasicrystalline, not periodic or random |
| Substitution matrix $M_n$ (Prop. 12.4) | Bootstrap as geometric substitution rule, metallic mean family |
| Inflation factor $\beta_n$ | Scale ratio between adjacent bootstrap levels |
| Multi-scale self-consistency (Thm. 12.6) | Same $G$ at every level of bootstrap hierarchy |
| Unique ergodicity + locality = CUP | Solomyak's theorem + relational invariants → constitutive universality |

## Rigor Assessment

**Fully rigorous:**
- Proposition 1.2: $G$ as a ratio of Lagrangian coefficients (dimensional analysis)
- Proposition 2.1: Fisher normalization of $T_{\mu\nu}$ (direct computation from the coherence Lagrangian)
- Corollary 2.2: Explicit $\hbar$ dependence in the Einstein equations (substitution)
- Proposition 3.1: Unruh temperature (established QFT result, derivable from Axiom 3 + speed of light)
- Proposition 4.1: Gravitational self-consistency bound (Schwarzschild radius vs. spatial extent)
- Proposition 4.2: Saturation defines Planck mass (algebraic)
- Proposition 5.1: Dimensional independence of $\{\hbar, c, G\}$ (linear algebra on the dimension matrix)
- Corollary 5.2: $\ell_{\min}$ dimensionally independent of $\hbar, c$ (direct consequence)
- Proposition 6.2: Dimensional obstacle for naive curvature matching (dimensional analysis)
- Theorem 9.1: Consistency model (numerical verification)

**Rigorous given axioms:**
- Proposition 3.2: Clausius relation from coherence conservation (continuum limit of Axiom 1)
- Theorem 3.3: Jacobson thermodynamic derivation of Einstein equations [Jacobson, 1995] — the logical structure is rigorous; the circularity in $\eta$ is identified and isolated
- Corollary 3.4: $G = c^4/(4\hbar\eta)$ (direct consequence of Theorem 3.3)
- Proposition 7.1: Convergence of two rigorous arguments (comparison of results)
- Proposition 8.1: Implications for area-scaling S1 (conditional chain)

**Negative results (rigorous):**
- Proposition 9.1: Clifford normalization is conventional (rescaling argument)
- Proposition 9.2: Fisher $\hbar$ absorbed by $mc$ prefactor (dimensional tracking through action duality)
- Corollary 9.3: Spinor/tetrad route does not determine $G$ (consequence of Propositions 9.1–9.2 + Proposition 5.1)
- Proposition 10.4: Network condensation circularity diagnosis (algebraic: setting $\ell = \ell_P$ reduces Jacobson to Bekenstein-Hawking tautology)

**Semi-formal:**
- Proposition 10.1: Simultaneous condensation is forced (deductive chain from C5, bootstrap, no-boundary, and derived time — each step is rigorous, but the synthesis is structural)
- Proposition 10.2: Subadditivity reduces net entropy (inclusion-exclusion truncated at pairwise; full series bounded by strong subadditivity)
- Proposition 10.3: Transcendental optimization (Gaussian mutual information form is motivated by Fisher metric but not rigorously derived from axioms)
- Proposition 11.1: Pre-geometric condensation (rigorous distinction between topological and Riemannian $S^1$; the claim that the Fisher metric identification requires prior geometry is precise)
- Proposition 12.1: Periodicity trivializes C5 (structural argument; the claim that identical neighborhoods make C5 informationally degenerate is precise but "informationally degenerate" needs formalization)
- Proposition 12.2: Disorder violates constitutive universality (structural; density fluctuation argument is sound but quantitative threshold is not derived)
- Corollary 12.3: Aperiodic order is forced (follows from 12.1 + 12.2 as the unique intermediate regime)
- Proposition 12.4: Substitution matrix constraints (2×2 + primitive is rigorous from duality and bootstrap; Pisot requirement follows from Solomyak's theorem which is established mathematics)
- Proposition 12.5: Packing coefficient from inflation factor (PF eigenvector calculation is rigorous; independence from $\ell$ is exact)
- Theorem 12.6: Multi-scale self-consistency (single-scale degeneracy is rigorous; multi-scale non-degeneracy is structural, depending on non-trivial scaling of the distance distribution under substitution)
- Proposition 11.2: $t_0$ is not a Type III interaction (rigorous from the Type III definition — no prior state, no causal ordering, no distinguishable source)
- Theorem 11.4: Fixed-point characterization (the map $\mathcal{F}$ is well-defined; that it has a fixed point follows from continuity and intermediate value theorem; uniqueness is structural, depending on the rigidity of all other structures)
- Proposition 11.5: Variational characterization (well-defined as a supremum; that the supremum exists and is positive requires the gravitational self-trapping bound from Proposition 4.1; that it is finite requires C5 non-triviality at small scales)

**Conjectural:**
- Conjecture 6.3: Existence of a dimensionless self-consistency condition that determines $\ell_{\min}$. This is the single remaining conjecture, now given concrete form in Theorem 11.4 (fixed-point uniqueness) and Proposition 11.5 (variational characterization). The fixed-point equation $\mathcal{F}(\ell^*) = \ell^*$ is explicit; the open question is whether it has a *unique* positive solution. By the rigidity argument (all other structures have zero free parameters), constitutive universality provides one constraint on one unknown. The conjecture reduces to proving the bootstrap fixed-point uniqueness ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Conjectures 7.1–7.2). The spinor/tetrad route (Step 9) is rigorously ruled out. The naive curvature bridge (Proposition 6.2) faces a dimensional obstacle.

**Assessment:** Provisional. The main structure is sound: the Jacobson thermodynamic argument (Theorem 3.3) rigorously derives $G = c^4/(4\hbar\eta)$, the self-consistency bound (Proposition 4.1) rigorously establishes $\ell_{\min} \geq \sqrt{2}\,\ell_P$, the dimensional independence (Proposition 5.1) precisely characterizes what kind of additional input is needed, and the spinor/tetrad analysis (Step 9) rigorously rules out the Clifford normalization route. The constitutive emergence analysis (Step 11) reframes the circularity as a fixed-point equation. The aperiodic order analysis (Step 12) establishes that the observer network must be quasicrystalline, constrains the substitution matrix to the 2×2 Pisot metallic mean family, and shows that multi-scale self-consistency is a stronger constraint than single-scale (which is degenerate). The one step relying on a conjecture is the *uniqueness* of the fixed point — Conjecture 6.3, which now has three concrete formulations: the self-consistency map (Theorem 11.4), the variational characterization (Proposition 11.5), and the multi-scale renormalization-group fixed point (Theorem 12.6).

## Open Gaps

1. **Bootstrap fixed-point uniqueness (key gap)**: The determination of $G$ reduces to proving that the bootstrap fixed-point equation $U \cong R(U,U)$ has a unique solution ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Conjectures 7.1–7.2). Three equivalent formulations: (a) the self-consistency map $\mathcal{F}(\ell) = \sqrt{2G(\ell)\hbar/c^3}$ has a unique positive fixed point (Theorem 11.4); (b) the variational characterization yields a unique supremum (Proposition 11.5); (c) the multi-scale renormalization-group fixed point exists and is unique for a specific metallic mean $\beta_n$ (Theorem 12.6). **Ruled-out routes:** spinor/tetrad Clifford normalization (Step 9). **Active candidates:** multi-scale self-consistency with non-trivial distance-distribution scaling (Step 12), Dana Scott domain theory (bootstrap.md), or a non-perturbative coherence Lagrangian condition.

2. **Constitutive universality**: Prove that the geometry constituted by the first Type III interactions is *independent* of which observer pairs interact first. This is the "all observers must agree" condition formalized as constitutive universality (Step 11). It is stronger than diffeomorphism invariance (which is coordinate-system independence) — it asserts that the *emergence process itself* yields a unique geometry. This likely follows from the uniqueness of the Fisher metric (Čencov) and the Einstein equations (Lovelock), but a rigorous proof requires formalizing the "first interaction" structure.

3. **Curvature-spacetime bridge**: Construct a well-posed dimensionless curvature comparison between the Fisher geometry on $\Sigma$ and the spacetime geometry on $\mathcal{M}$ (avoiding the dimensional obstacle of Proposition 6.2). This is equivalent to Open Gap 1 of [Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric). The constitutive emergence picture (Step 11) suggests a reformulation: the bridge is not a static equation between pre-existing curvatures but a constraint on the geometry that *emerges* from the first interactions.

4. **Numerical coefficient**: Pin down the precise dimensionless $O(1)$ coefficient in $G = \alpha \cdot \ell_{\min}^2 c^3/\hbar$. The fixed-point analysis (Theorem 11.4) gives $\alpha = c/2$ (i.e., $1/2$ in natural units), within a factor of 2 of the Bekenstein-Hawking $1/4$. The network packing (Proposition 10.3) gives $\alpha \approx 0.152$ from pairwise truncation. Extending to the full inclusion-exclusion series and resolving the Compton/reduced-Compton convention would fix $\alpha$.

5. **Mutual information functional form**: The Gaussian profile $f(x) = e^{-x^2/2}$ used in Proposition 10.3 is motivated but not derived from axioms. Rigorous derivation from the Fisher metric on $\Sigma$ pulled back to the causal boundary would tighten the transcendental equation.

6. **Formalization of pre-geometric $t_0$**: The distinction between topological $S^1$ (pre-geometric) and Riemannian $S^1$ (geometric) at $t_0$ (Proposition 11.1) is clear conceptually but would benefit from a categorical formulation: the condensation as a functor from **Top** (topological category) to **Riem** (Riemannian category), with the fixed-point condition as a naturality constraint.

7. **Multi-scale non-degeneracy**: Prove rigorously that the multi-scale self-consistency condition (Theorem 12.6) is genuinely non-degenerate — i.e., that the inter-observer distance distribution has non-trivial scaling under substitution. For aperiodic tilings with multiple distinct nearest-neighbor distances (related by powers of $\beta_n$), this generically holds, but a proof from the axiom structure is needed.

8. **Metallic mean selection**: Determine which metallic mean index $n$ (and corresponding inflation factor $\beta_n$) is selected by the multi-scale renormalization-group fixed point. This is a well-defined mathematical problem: for which Pisot $\beta_n$ does the infinite tower $\{G = c^4/(4\hbar\eta_k)\}_{k=0}^{\infty}$ have a consistent solution? The answer would determine a specific dimensionless number entering the expression for $G$.

9. **Aperiodicity proof**: Formalize the argument that the axiom constraints (C5 non-triviality + Axiom 2 individuation + no-boundary + constitutive universality) function as matching rules that force aperiodicity. Currently Propositions 12.1–12.2 rule out the endpoints (periodic and random) by structural arguments; a rigorous proof would show these are the *only* alternatives to aperiodic order and that the axioms select it uniquely.

<!-- References -->
[Jacobson, 1995]: /references#jacobson-1995
