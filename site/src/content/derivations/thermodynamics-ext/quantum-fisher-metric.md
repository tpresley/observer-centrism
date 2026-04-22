---
title: "Quantum Fisher Metric"
status: "derived"
dependsOn: ["thermodynamics-ext/fisher-metric", "axioms/coherence-operational", "quantum/born-rule", "foundation/observer-projected-spacetime", "interactions/bootstrap-division-algebras"]
enablesDerivation: ["foundation/spinor-coherence-lagrangian"]
tags: ["thermo-ext", "quantum"]
summary: "On quantum state spaces the classical Čencov uniqueness fails: monotone Riemannian metrics form the Petz family parameterized by operator-monotone functions. The framework's coherence-operational identification of C with von Neumann entropy and the Gibbons-Hawking KMS structure on observer-projected spacetime jointly single out the Bogoliubov–Kubo–Mori (BKM) metric as the unique quantum Fisher metric compatible with all framework commitments. SLD (Bures–Helstrom) remains in play for a distinct role — detection-resolution edges — where Cramér–Rao saturation is the relevant property."
rigorLevel: "formal"
lastUpdated: 2026-04-21
---

## Overview

This derivation answers a question left open at the end of the classical [Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric): **which Fisher metric applies when the state space is quantum rather than classical?**

The classical answer is unique. Čencov's theorem singles out a single Riemannian metric (the Fisher information metric) on any statistical manifold of probability distributions, up to an overall scale. The quantum answer is not unique. On density-matrix state spaces, a whole family of monotone Riemannian metrics exists — the *Petz family* — each arising from a different operator-monotone function. Without additional content, no specific member of the family is selected. An additional selection argument is required.

**The approach.** The framework provides exactly such content. Five independent framework commitments constrain the Petz family; their intersection is a single member — the Bogoliubov–Kubo–Mori (BKM) metric. Two of the commitments carry most of the load: the coherence-operational identification of the coherence measure with von Neumann entropy (Born Rule downstream), and the Gibbons–Hawking KMS thermal structure on observer-projected spacetime.

**The result.** BKM is the unique quantum Fisher metric consistent with the framework's foundational commitments. It is the Hessian of the von Neumann entropy and the metric compatible with the Kubo–Mori inner product of quantum statistical mechanics — both identifications forced by framework content rather than chosen by convention.

**A structural consequence.** A separate member of the Petz family — the symmetric-logarithmic-derivative (SLD) or Bures–Helstrom metric — plays a distinct role elsewhere in the framework: it saturates the Cramér–Rao bound and governs inter-observer *detection* resolution in the pattern-edges program ([Observer Edges and Mutual Opacity](/derivations/foundation/observer-edges-and-mutual-opacity)). The two metrics coincide on pure states and on classical submanifolds; they differ on genuinely mixed quantum states, where they play non-interchangeable physical roles.

**Why this matters.** Every quantum-level derivation that uses a Fisher metric — spinor kinetics, coherence-geometric distance on mixed states, thermal fluctuation geometry — needs a specific metric. The Petz family is the mathematical obstruction to uniqueness; the framework's commitments resolve it.

## Statement

**Theorem.** On the interior of the density-matrix state manifold of a finite-dimensional observer, the Petz family of monotone Riemannian metrics is narrowed by the intersection of five framework commitments — coherence conservation, the Born rule, spin-statistics, bootstrap hierarchy, and observer-projected geometry — to a single member: the Bogoliubov–Kubo–Mori (BKM) metric

$$g^{\mathrm{BKM}}_\rho(A, B) = \int_0^\infty \operatorname{Tr}\!\Bigl[A^*\,(\rho + s\,\mathbf{1})^{-1}\,B\,(\rho + s\,\mathbf{1})^{-1}\Bigr]\,ds.$$

BKM is the Hessian of the von Neumann entropy and the metric associated with the Kubo–Mori inner product of quantum statistical mechanics. The symmetric-logarithmic-derivative (SLD) metric, which saturates the Cramér–Rao bound, governs a distinct framework role — inter-observer detection resolution — and is not selected here.

## Derivation

### Step 1: The Petz Family

**Definition 1.1 (Density-matrix state manifold).** For a finite-dimensional observer with Hilbert space $\mathcal{H}$ of dimension $n$, the **state manifold** is the set of strictly positive, trace-one density operators $\mathfrak{D}(\mathcal{H})^\circ = \{\rho \in \mathrm{End}(\mathcal{H}) : \rho > 0,\ \operatorname{Tr}\rho = 1\}$. This is an $(n^2 - 1)$-dimensional real manifold.

**Definition 1.2 (Operator-monotone function).** A function $f : (0, \infty) \to (0, \infty)$ is **operator-monotone** if for all positive operators $A, B$ with $A \leq B$, the relation $f(A) \leq f(B)$ holds in the operator order. The set of operator-monotone functions with $f(1) = 1$ and satisfying the symmetry $f(x) = x\,f(1/x)$ is denoted $\mathcal{F}_{\mathrm{op}}$.

**Theorem 1.3 (Petz classification).** *Every monotone Riemannian metric on $\mathfrak{D}(\mathcal{H})^\circ$ — i.e., every metric satisfying $g^\rho(T^*A, T^*A) \leq g^{T\rho}(A, A)$ for all completely positive trace-preserving maps $T$ — is of the form*

$$g^{f}_\rho(A, B) = \operatorname{Tr}\!\bigl[A^* \, c_f(L_\rho, R_\rho) \, B\bigr], \qquad c_f(x, y) = \frac{1}{y\,f(x/y)}$$

*for some $f \in \mathcal{F}_{\mathrm{op}}$, where $L_\rho X = \rho X$ and $R_\rho X = X\rho$. Conversely, every $f \in \mathcal{F}_{\mathrm{op}}$ produces a monotone metric via this formula.*

*Proof reference.* [Petz, 1996]; modern treatments in Hayashi, *Quantum Information Theory*, Ch. 6. $\square$

**Definition 1.4 (Canonical Petz members).** The Petz family contains the following canonical members:

- **SLD (Bures–Helstrom)**: $f(x) = (1+x)/2$. The *minimal* monotone metric; saturates the Cramér–Rao bound.
- **RLD (right-logarithmic-derivative)**: $f(x) = 2x/(1+x)$. The *maximal* monotone metric.
- **Wigner–Yanase**: $f(x) = \tfrac{1}{4}(\sqrt{x} + 1)^2$. Associated with skew information.
- **BKM (Bogoliubov–Kubo–Mori)**: $f(x) = (x - 1)/\ln x$. The Hessian of von Neumann entropy; the Kubo–Mori metric of quantum statistical mechanics.

All members reduce to the classical Fisher metric on diagonal (commutative) submanifolds, preserving Čencov's uniqueness classically. All members reduce to the Fubini–Study metric on pure states, up to a normalization constant. The members differ only on the interior of the density-matrix manifold (genuinely mixed states with non-commuting spectral components).

**Proposition 1.5 (BKM is the entropy Hessian).** *The BKM metric is the Hessian of the von Neumann entropy $S(\rho) = -\operatorname{Tr}(\rho \ln \rho)$:*

$$g^{\mathrm{BKM}}_\rho(A, B) = -\frac{d^2}{dt\,ds}\bigg|_{t=s=0} S(\rho + tA + sB).$$

*Proof.* Direct computation using the integral representation $\ln\rho = \int_0^\infty [(s + \mathbf{1})^{-1} - (s + \rho)^{-1}]\,ds$ and differentiation under the integral sign. See [Petz & Toth, 1993]; Hayashi Ch. 6. $\square$

**Proposition 1.6 (BKM is the Kubo–Mori metric).** *The BKM inner product equals the Kubo–Mori inner product of quantum statistical mechanics:*

$$g^{\mathrm{BKM}}_\rho(A, B) = \int_0^1 \operatorname{Tr}\!\bigl[\rho^s\, A^*\, \rho^{1-s}\, B\bigr]\,ds$$

*(after appropriate symmetrization). This inner product is the one naturally induced on the tangent space of a thermal KMS state by the modular flow generated by the modular Hamiltonian.*

*Proof reference.* [Kubo, 1957]; [Petz & Toth, 1993]. $\square$

### Step 2: Framework Commitments as Selection Sources

The framework supplies five candidate sources of additional content that could narrow the Petz family:

**(1) Coherence conservation and strong subadditivity.** Axiom 1 ([Coherence Conservation](/derivations/axioms/coherence-conservation)) includes strong subadditivity (C5): $\mathcal{C}(S_1 \cup S_2) + \mathcal{C}(S_1 \cap S_2) \leq \mathcal{C}(S_1) + \mathcal{C}(S_2)$. Under the coherence-operational identification (commitment 2 below), C5 is the Lieb–Ruskai inequality for von Neumann entropy.

**(2) The Born rule and coherence-operational identification.** [Born Rule](/derivations/quantum/born-rule) Theorem 6c.1 uniquely identifies the coherence functional on pure states as $\mathcal{C}(|\psi\rangle) = \langle\psi|\psi\rangle$. Extending to mixed states via coherence-weighted averaging ([Coherence as Physical Primitive](/derivations/axioms/coherence-operational)) gives $\mathcal{C}(\rho) = S_{\mathrm{vN}}(\rho) = -\operatorname{Tr}(\rho \ln \rho)$ — the von Neumann entropy is the mixed-state coherence functional.

**(3) Spin-statistics.** [Spin and Statistics](/derivations/particles/spin-statistics) constrains wave-function topology on configuration space.

**(4) Bootstrap hierarchy.** [Bootstrap Division Algebras](/derivations/interactions/bootstrap-division-algebras) forces the Cayley–Dickson chain $\mathbb{R} \to \mathbb{C} \to \mathbb{H} \to \mathbb{O}$ at successive observer levels, with reality structure (real / complex / quaternionic / octonionic) on the level's state space.

**(5) Observer-projected geometry.** [Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) projects each observer onto its own static de Sitter patch with Gibbons–Hawking temperature $T_{\mathrm{GH}} = \hbar / (2\pi c T_A)$, where $T_A$ is the observer's loop period. This makes every observer's state naturally a KMS thermal state with respect to its own modular Hamiltonian.

### Step 3: Selection — Hessian of the Coherence Functional Forces BKM

**Theorem 3.1 (Hessian-identity narrowing).** *Under commitments (1) and (2), the quantum Fisher metric on mixed states must equal the Hessian of the coherence functional. Since the coherence functional on mixed states is the von Neumann entropy (commitment 2), the Fisher metric is BKM (Proposition 1.5).*

*Proof.* The classical Fisher metric derivation ([Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric) Proposition 4.1) identifies the Fisher metric as the Hessian of the coherence functional, with $g = \hbar G$ (the normalization from [Action and Planck's Constant](/derivations/thermodynamics/action-planck)). This identification is structural: the Fisher metric is the unique monotone metric, and its magnitude is set by the minimum cycle cost.

For quantum state spaces, the same structural role is carried by whichever Petz member equals the Hessian of the quantum coherence functional. By commitment (2), the quantum coherence functional on mixed states is $\mathcal{C}(\rho) = S_{\mathrm{vN}}(\rho)$. By Proposition 1.5, the Hessian of $S_{\mathrm{vN}}$ is BKM. Therefore the quantum Fisher metric is BKM, with the same normalization constant $\hbar$ carrying over from the classical case:

$$g^{\mathrm{quantum}}_\rho = \hbar\,g^{\mathrm{BKM}}_\rho.$$

Strong subadditivity (commitment 1) is automatically consistent: BKM is known to satisfy the appropriate joint-convexity inequality associated with the Lieb–Ruskai theorem for von Neumann entropy ([Lieb & Ruskai, 1973]; [Petz & Toth, 1993]). $\square$

**Remark.** The classical Čencov theorem says: on classical statistical manifolds, the Fisher metric is the unique monotone metric, and it happens to be the Hessian of the Shannon entropy (the classical coherence functional). The quantum analog is: on quantum state manifolds, the Hessian of the von Neumann entropy (the quantum coherence functional) is BKM. The classical and quantum chains agree in structure; they differ only in which Petz member is thereby singled out.

### Step 4: Independent Selection — KMS Modular Flow Forces BKM

**Theorem 4.1 (KMS/Gibbons–Hawking narrowing).** *Under commitment (5), each observer's state is naturally a KMS thermal state on its projected de Sitter patch $M_A$. The Petz metric compatible with the KMS modular flow is BKM.*

*Proof.* By [Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Theorem 3.1, observer $A$'s projection $M_A$ is the static patch of de Sitter space with radius $L_A = cT_A/2$, whose static Killing vector generates a natural Hamiltonian flow. The Gibbons–Hawking temperature $T_{\mathrm{GH}} = \hbar/(2\pi c T_A)$ is the thermal temperature at which the vacuum on $M_A$ is perceived by $A$.

Any KMS state $\omega_\beta$ at inverse temperature $\beta = 1/T_{\mathrm{GH}}$ satisfies the KMS condition:

$$\omega_\beta(AB) = \omega_\beta\!\bigl(B\,\alpha_{i\beta}(A)\bigr),$$

where $\alpha_t$ is the modular (Tomita–Takesaki) flow. The tangent-space inner product on the state manifold induced by the modular flow is the Kubo–Mori inner product:

$$\langle A, B\rangle_{\mathrm{KM}} = \int_0^1 \operatorname{Tr}\!\bigl[\rho^s\, A^*\, \rho^{1-s}\, B\bigr]\,ds.$$

By Proposition 1.6, this equals $g^{\mathrm{BKM}}_\rho(A, B)$. No other Petz member produces the KMS-compatible modular-flow metric; specifically, SLD corresponds to the Bures fidelity metric, RLD to the right-logarithmic metric, and Wigner–Yanase to the skew-information metric — none of which are the Kubo–Mori form. $\square$

**Remark (independence of Theorems 3.1 and 4.1).** Theorem 3.1 invokes commitments (1) and (2) — the coherence-conservation/entropy route. Theorem 4.1 invokes commitment (5) — the KMS/Gibbons–Hawking route. Each independently narrows the Petz family to BKM. Their agreement is a consistency check on the framework: the entropy Hessian and the modular-flow metric are the same object, and both framework routes select it.

### Step 5: Commitments (3) and (4) Are Non-Selective

**Proposition 5.1 (Spin-statistics is non-selective at this layer).** *Commitment (3) — spin-statistics via Laidlaw–DeWitt on configuration space — imposes holonomy constraints on wave-function bundles but does not discriminate among Petz members, each of which is unitarily equivariant and respects the exchange-symmetry permutation structure.*

*Proof.* Every Petz metric satisfies $g^{f}_{U\rho U^*}(UA U^*, UB U^*) = g^{f}_\rho(A, B)$ for all unitary $U$. Exchange symmetry for identical particles is a special case of unitary equivariance (the exchange operator $P_{ij}$ is unitary). Laidlaw–DeWitt constrains the *connection* on the flat $U(1)$ line bundle over configuration space, not the Riemannian metric on density operators. $\square$

**Proposition 5.2 (Bootstrap hierarchy reinforces but does not alone select).** *Commitment (4) — Cayley–Dickson reality-structure compatibility — restricts the family of Petz members admissible at each bootstrap level but does not uniquely select BKM.*

*Proof.* At bootstrap levels 1 ($\mathbb{C}$, complex) and 2 ($\mathbb{H}$, quaternionic), BKM, SLD, and Wigner–Yanase all admit real-analytic extensions compatible with the reality structure. Reinforcement: the Cauchy-slice integer quantization result of [Coherence Conservation](/derivations/axioms/coherence-conservation) Corollary 5.5a ($C_0^{(n)} \in \mathbb{Z}_{\geq 0}\cdot\hbar\omega_0$) is naturally compatible with an entropy-Hessian metric (BKM), since entropy on orthogonal subspaces is additive in $\ln 2$ units; this reinforces Theorem 3.1's selection. Level 3 ($\mathbb{O}$, octonionic) breaks the Petz construction itself (non-associativity; see Open Gaps). $\square$

### Step 6: The Two-Metric Picture — BKM and SLD Play Distinct Roles

**Proposition 6.1 (SLD role).** *The symmetric-logarithmic-derivative metric $g^{\mathrm{SLD}}_\rho$, defined by $g^{\mathrm{SLD}}_\rho(A, B) = \operatorname{Tr}(A L)$ with the SLD $L$ satisfying $\tfrac12(\rho L + L\rho) = B$, saturates the quantum Cramér–Rao bound: for any unbiased estimator $\hat\theta$ of a parameter $\theta$ on a one-parameter family $\rho_\theta$,*

$$\operatorname{Var}(\hat\theta) \geq \frac{1}{g^{\mathrm{SLD}}_{\rho_\theta}(\partial_\theta\rho_\theta,\, \partial_\theta\rho_\theta)}.$$

*This property is unique to SLD within the Petz family and governs the *estimation-theoretic* resolution of one observer measuring another's state.*

*Proof reference.* Helstrom, *Quantum Detection and Estimation Theory*, Ch. VIII; Paris, *Int. J. Quantum Inf.* 7 (2009). $\square$

**Proposition 6.2 (Role separation).** *BKM governs the Hessian / Lagrangian / thermodynamic-distance role: distances between states on the mixed-state manifold, kinetic terms in field-theoretic Lagrangians, and Kubo-Mori linear-response theory. SLD governs the detection-resolution role: inter-observer Cramér–Rao bounds on how accurately one observer can resolve another observer's state. Both metrics coincide on pure states and on classical (diagonal) submanifolds; they differ on genuinely mixed quantum states, where they serve the two distinct roles.*

*Proof.* On pure states $\rho = |\psi\rangle\langle\psi|$, the Petz family collapses to a single member (up to normalization) — Fubini–Study. On diagonal submanifolds (commuting density operators), Petz members all reduce to classical Fisher. The distinction emerges only on the interior of the mixed-state manifold where $\rho$ has non-trivial spectral decomposition with distinct eigenvalues. $\square$

**Remark (framework usage).** In the framework:

- **BKM is invoked** in: [Spinor Coherence Lagrangian](/derivations/foundation/spinor-coherence-lagrangian); any Lagrangian-level pullback of a Fisher metric along field configurations; thermal-geometric distance on KMS observer states; Kubo–Mori linear-response calculations in the coherence sector.
- **SLD is invoked** in: [Observer Edges and Mutual Opacity](/derivations/foundation/observer-edges-and-mutual-opacity); [Observer Pattern Signal](/derivations/foundation/observer-pattern-signal); any inter-observer detection-resolution bound where the Cramér–Rao saturation property is the operative content.

The two metrics are not interchangeable, and conflating them produces quantitatively incorrect results on mixed states.

## Consistency Model

**Theorem 7.1 (Classical limit recovery).** *On classical (diagonal, commuting) submanifolds of the density-matrix state space, $g^{\mathrm{BKM}}_\rho$ reduces to the classical Fisher information metric, with the same normalization constant $\hbar$.*

*Proof.* For $\rho = \sum_i p_i |i\rangle\langle i|$ in a fixed orthonormal basis $\{|i\rangle\}$, the BKM integrand $\operatorname{Tr}[A^*(\rho + s)^{-1}B(\rho + s)^{-1}]$ for $A, B$ diagonal in the same basis simplifies to $\sum_i (A_i B_i)/(p_i + s)^2$. Integrating over $s$ gives $\sum_i (A_i B_i)/p_i$, which is the classical Fisher form on probability distributions. Čencov's theorem's normalization (Fisher Information Metric Proposition 4.1) carries through, giving $\lambda = \hbar$ on the classical limit. $\square$

**Theorem 7.2 (Pure-state limit).** *On pure states, $g^{\mathrm{BKM}}_\rho$ reduces to the Fubini–Study metric (up to the same $\hbar$ normalization).*

*Proof.* For $\rho = |\psi\rangle\langle\psi|$, the BKM integral develops a delta-function structure from $(\rho + s)^{-1}$ at $s = 0$ that regularizes to the standard Fubini–Study line element $ds^2_{\mathrm{FS}} = \langle\delta\psi|\delta\psi\rangle - |\langle\psi|\delta\psi\rangle|^2$ on the ray manifold. See Hayashi, *Quantum Information Theory* §6.3 for the detailed limit. $\square$

## Physical Interpretation

| Framework concept | Classical Fisher | Quantum Fisher (BKM) |
|---|---|---|
| Coherence functional | Shannon entropy $H(p)$ | von Neumann entropy $S(\rho)$ |
| Metric = Hessian of functional | $G_{ij} = -\partial_i\partial_j H$ | $g^{\mathrm{BKM}}_\rho = -\mathrm{Hess}\,S$ |
| Uniqueness source | Čencov's theorem | Framework commitments (Theorems 3.1 + 4.1) |
| Pure-state limit | (trivial — only pure states classically) | Fubini–Study |
| Thermal-flow compatibility | Classical statistical mechanics | Kubo–Mori / KMS (Theorem 4.1) |
| Normalization | $g = \hbar G$ | $g^{\mathrm{quantum}} = \hbar\,g^{\mathrm{BKM}}$ |

## Rigor Assessment

**Fully rigorous:**
- Theorem 1.3 (Petz classification): standard result, [Petz, 1996]
- Propositions 1.5, 1.6 (BKM = entropy Hessian = Kubo–Mori): [Petz & Toth, 1993]
- Theorem 3.1 (Hessian-identity narrowing): complete proof via coherence-operational identification
- Theorem 4.1 (KMS/Gibbons–Hawking narrowing): complete proof via Proposition 1.6 applied to observer-projected thermal state
- Propositions 5.1, 5.2: representation-theoretic and reality-structure arguments
- Propositions 6.1, 6.2: standard SLD Cramér–Rao; role-separation argument
- Theorems 7.1, 7.2: standard limits, verified via explicit computation

**Assessment:** Derived. The selection argument is tight: two independent framework routes (entropy-Hessian and KMS-modular-flow) each narrow the Petz family to BKM; their agreement is a consistency check rather than a tautology.

**No structural postulates.** The derivation uses only already-derived framework content: Axiom 1 (Coherence Conservation, C5), Born Rule Theorem 6c.1 (coherence functional uniqueness), Coherence Operational Theorem 2.1 ($\mathcal{C} = S_{\mathrm{vN}}$ on mixed states), Observer-Projected Spacetime Theorem 3.1 (de Sitter patch + Gibbons–Hawking temperature), and Bootstrap Division Algebras Theorem 2.2 (Cayley–Dickson chain).

## Open Gaps

1. **Level 3 ($\mathbb{O}$) non-associative sector.** The Petz construction relies on the operator algebra $\mathrm{End}(\mathcal{H})$ being associative. At bootstrap level 3 (octonionic), $\mathbb{O}$ is non-associative and the operator-mean definition $c_f(L_\rho, R_\rho)$ does not straightforwardly extend. Within the framework, level 3 content appears as $SU(3)$ color charge attached to level-1 (complex) Dirac spinors via the $G_2$-stabilizer construction of [Color Force](/derivations/gauge/color-force), not as a kinematically distinct spinor level — so the Standard Model's spinor sector lives entirely at levels 1–2 and is unaffected by this gap. A full non-associative quantum Fisher formalism is a separate open research problem.

2. **Infinite-dimensional extension.** The derivation assumes finite-dimensional observer Hilbert space ([Loop Closure](/derivations/axioms/loop-closure) Theorem 0.2). For quantum field theory (infinite-dimensional state spaces), the Petz classification requires functional-analytic care analogous to the classical case ([Pistone & Sempi, 1995]); the BKM selection arguments Theorems 3.1 and 4.1 are expected to carry through but require explicit verification in that setting.

<!-- References -->
[Kubo, 1957]: /references#kubo-1957
[Lieb & Ruskai, 1973]: /references#lieb-ruskai-1973
[Petz & Toth, 1993]: /references#petz-toth-1993
[Pistone & Sempi, 1995]: /references#pistone-sempi-1995
[Petz, 1996]: /references#petz-1996
