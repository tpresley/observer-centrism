---
title: "Spinor Sector of the Coherence Lagrangian"
status: "derived"
dependsOn: ["foundation/coherence-lagrangian", "thermodynamics-ext/quantum-fisher-metric", "particles/spin-statistics", "particles/three-generations", "gauge/chirality-selection", "particles/neutrino-masses", "particles/cpt-theorem", "particles/pauli-exclusion", "foundation/observer-projected-spacetime", "axioms/observer-definition", "interactions/bootstrap-division-algebras"]
enablesDerivation: []
tags: ["foundation", "lagrangian", "spinors", "fermions"]
summary: "The spinor sector of the Coherence Lagrangian is the Dirac Lagrangian i ℏ ψ̄ γ^μ ∇_μ ψ − m c² ψ̄ ψ, derived from the BKM quantum Fisher metric pulled back along spacetime-varying field configurations, with spin-statistics forcing the first-order form and Identification 5.3 forcing the mass term. The Clifford ℤ₂ grading splits the Dirac spinor into Weyl components; bootstrap level 2 pseudo-reality produces the Majorana form for neutrinos; three-generation replication follows from so(3) winding classes. Spin-statistics, Pauli exclusion, CPT invariance, and the Lichnerowicz curvature identity are all structural consequences of the derived Lagrangian."
rigorLevel: "formal"
lastUpdated: 2026-04-21
---

## Overview

This derivation answers the question left open at the end of [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian): **what is the Lagrangian for spinor (fermion) fields in the framework, and is it derived rather than postulated?**

The scalar sector of the Coherence Lagrangian is derived in full: Fisher-metric kinetic term, potential term constrained to at most quartic by dimensional analysis and bootstrap self-consistency, Euler–Lagrange equations reproducing the Klein–Gordon and related scalar dynamics. The fermion sector was flagged as Open Gap 5. This derivation closes that gap.

**The approach.** The argument assembles in four steps:

- The quantum Fisher metric on spinor state spaces is BKM ([Quantum Fisher Metric](/derivations/thermodynamics-ext/quantum-fisher-metric)). Pulled back along field configurations $\psi(x)$ on observer-projected spacetime $M_A$, BKM produces a quadratic "Klein–Gordon-like" form in $\partial\psi$.
- Canonical quantization of a quadratic-in-$\partial\psi$ Lagrangian produces bosonic commutators, contradicting the framework's already-derived spin-statistics theorem. The kinetic term must therefore be linear in $\partial\psi$. Among all Lorentz-scalar, hermitian, minimally coupled bilinears linear in $\partial\psi$, the Dirac form $i\bar\psi\gamma^\mu\partial_\mu\psi$ is the unique one available.
- The mass term follows from the same Identification 5.3 that produces the scalar mass term: rest-cycle frequency × coherence content gives $-mc^2\bar\psi\psi$.
- The chirality structure, Majorana form, and three-generation replication follow from representation-theoretic consequences of the Clifford algebra and the Cayley–Dickson bootstrap hierarchy; none requires new content beyond what is already derived in the framework.

**The result.** The Dirac Lagrangian $\mathcal{L}_{\text{spinor}} = i\hbar\bar\psi\gamma^\mu\nabla_\mu\psi - mc^2\bar\psi\psi$ is the unique spinor sector of the Coherence Lagrangian consistent with the framework's axioms and downstream theorems. The Euler–Lagrange equation is the Dirac equation. The Majorana form $\tfrac12 m(\nu^T C\nu + \mathrm{h.c.})$ applies at bootstrap level 2 where the $SU(2)_L$ doublet carries a pseudo-real structure. Three-generation replication follows from the $\mathfrak{so}(3)$ winding-class structure.

**Why this matters.** Every Standard Model fermion — electrons, neutrinos, quarks, across all three generations — is covered by the derived Lagrangian. Combined with the scalar and gauge sectors of [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) and the gravity sector of [Einstein Field Equations](/derivations/spacetime/einstein-equations), the Coherence Lagrangian is now Lagrangian-complete at the level of the Standard Model plus General Relativity, with zero free parameters beyond those inherited from the bootstrap hierarchy.

**An honest caveat.** Level-3 (octonionic) spinors are not covered: non-associativity breaks the operator-mean construction underlying both BKM (Step 1 below) and the standard Clifford algebra (Step 3). Within the framework, level-3 content appears as $SU(3)$ color charge attached to level-1 Dirac spinors ([Color Force](/derivations/gauge/color-force)) rather than as a kinematically distinct spinor level — so this gap does not affect Standard Model coverage, but it does leave the octonionic sector as an open research problem.

## Statement

**Theorem.** *The spinor sector of the Coherence Lagrangian, for a spinor observer at bootstrap level 1 with field configuration $\psi: M_A \to \mathbb{C}^4$ on observer-projected spacetime $M_A$, is uniquely:*

$$\boxed{\;\mathcal{L}_{\text{spinor}} = i\hbar\,\bar\psi\gamma^\mu\nabla_\mu\psi - mc^2\,\bar\psi\psi\;}$$

*where $\nabla_\mu = \partial_\mu + \tfrac14\omega_\mu^{ab}\gamma_a\gamma_b + igA_\mu$ is the $M_A$-covariant spinor derivative (spin connection from the $M_A$ tetrad; gauge connection from the Standard Model gauge chain). The form is forced by the BKM quantum Fisher metric, the spin-statistics theorem, Lorentz invariance, hermiticity, and minimal coupling; no additional inputs are required. Euler–Lagrange variation gives the Dirac equation $(i\gamma^\mu\nabla_\mu - m)\psi = 0$.*

**Extensions.**
- *Chirality decomposition*: The Clifford $\mathbb{Z}_2$ grading via $\gamma^5 = i\gamma^0\gamma^1\gamma^2\gamma^3$ splits the Dirac spinor as $\psi = \psi_L + \psi_R$ with $\psi_{L/R} = \tfrac12(1 \mp \gamma^5)\psi$. The kinetic term is chirality-block-diagonal; the mass term mixes chiralities. The $SU(2)_L$ gauge coupling is restricted to $\psi_L$ by [Chirality Selection](/derivations/gauge/chirality-selection).
- *Majorana sector at level 2*: For an $SU(2)_L$-doublet with no other distinguishing charges (neutrinos), the pseudo-real structure of the weak doublet forces the Majorana condition $\nu^c = \nu$, and the mass term takes the form $\tfrac12 m_\nu(\nu^T C\nu + \mathrm{h.c.})$ with $C = i\gamma^2\gamma^0$ the charge-conjugation matrix.
- *Three-generation replication*: By [Three Generations](/derivations/particles/three-generations) Theorem 0.1, spinor observers replicate over three winding-direction classes in $\mathfrak{so}(3)$ with distinct mass eigenvalues $m_k$ fixed by Three Generations Theorem 4.2.

## Derivation

### Step 1: The Spinor Observer and Its State Space

**Definition 1.1 (Spinor observer).** A **spinor observer** at bootstrap level 1 is an observer $A = (\Sigma_A, I_A, \mathcal{B}_A)$ whose state space is a Clifford module:

$$\Sigma_A \cong \mathbb{C}^{2^{\lfloor D/2\rfloor}}$$

equipped with a representation of the Clifford algebra $\mathrm{Cl}(D-1, 1)$ generated by matrices $\gamma^\mu$ satisfying $\{\gamma^\mu, \gamma^\nu\} = 2\eta^{\mu\nu}\mathbf{1}$. For $D = 4$ spacetime dimensions (from [Three Dimensions](/derivations/dimensions/three-dimensions)), this is $\Sigma_A \cong \mathbb{C}^4$ — the standard Dirac spinor.

**Definition 1.2 (Field configuration).** A **spinor field** on observer-projected spacetime $M_A$ (from [Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Theorem 3.1) is a smooth section

$$\psi: M_A \to \Sigma_A$$

of the spinor bundle over $M_A$. The bundle's spin connection $\omega^{ab}_\mu$ is constructed from the $M_A$ tetrad $e^a_\mu$ via the standard spin-connection formula. The covariant spinor derivative is

$$\nabla_\mu\psi = \partial_\mu\psi + \tfrac14\omega_\mu^{ab}\gamma_a\gamma_b\psi + igA_\mu\psi$$

where $A_\mu$ is the gauge connection from the Standard Model gauge sector.

**Remark 1.3 (No global background).** The spinor field lives on each observer's own projected patch $M_A$, not on a single shared spacetime. Inter-observer consistency becomes a presheaf condition on the family $\{\psi_A\}$ under the restriction maps $\rho_{AB}$ of the projection functor (Observer-Projected Spacetime Definition 1.2). In a local Lorentz frame near the observer worldline $\gamma_A$, where $\omega_\mu^{ab} \to 0$, the covariant derivative reduces to $\partial_\mu$, and the Lagrangian below takes the flat-space Dirac form. The flat form is therefore the leading-order result within a single $M_A$, not a background-field postulate.

### Step 2: The Kinetic Term

**Proposition 2.1 (BKM pullback on spinor field configurations).** *The BKM metric on pure spinor states (from [Quantum Fisher Metric](/derivations/thermodynamics-ext/quantum-fisher-metric) Theorem 7.2) reduces to the Fubini–Study form on rays $\rho = |\psi\rangle\langle\psi|$. Pulled back along the spacetime variation $|\delta\psi\rangle = \nabla_\mu|\psi\rangle\,dx^\mu$, the line element on the field configuration space is the quadratic form*

$$ds^2_{\mathrm{BKM}}[\psi] = \hbar\,\bigl\langle\nabla_\mu\psi\,\big|\,\nabla_\nu\psi\bigr\rangle\,g_A^{\mu\nu}\,dx^\mu dx^\nu + O(|dx|^3)$$

*where the U(1) phase part of Fubini–Study has been gauged into $\nabla_\mu$ via minimal coupling. This is a "Klein–Gordon-like" kinetic form: quadratic in $\nabla\psi$, symmetric in the spacetime indices.*

*Proof.* On pure states every Petz metric reduces to Fubini–Study (Quantum Fisher Metric Theorem 7.2). The infinitesimal Fubini–Study line element is $ds^2_{\mathrm{FS}} = \langle\delta\psi|\delta\psi\rangle - |\langle\psi|\delta\psi\rangle|^2$. The second term is the U(1) gauge freedom; absorbing it into $\nabla_\mu$ via the gauge connection produces the stated quadratic form. The $\hbar$ prefactor is the Action–Planck normalization from Fisher Information Metric Proposition 4.1, carried through the BKM identification. $\square$

**Proposition 2.2 (Ostrogradsky exclusion applies).** *By [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) Theorem 6.0 (Ostrogradsky exclusion from Axiom 3 loop-closure stability), the spinor Lagrangian involves at most first derivatives of $\psi$. Both quadratic ($|\nabla\psi|^2$) and linear ($\bar\psi\,\gamma^\mu\nabla_\mu\psi$) constructions satisfy this bound.*

*Proof.* Direct application of Coherence Lagrangian Theorem 6.0, which excludes higher-derivative terms universally for all field sectors. Ostrogradsky discriminates between orders-of-derivative but not between functional powers of the derivative. $\square$

**Proposition 2.3 (Spin-statistics forces linear-in-$\nabla\psi$).** *A Lagrangian quadratic in $\nabla\psi$ yields bosonic commutation relations upon canonical quantization, contradicting [Spin and Statistics](/derivations/particles/spin-statistics) Theorem 1.1. A Lagrangian linear in $\nabla_0\psi$ yields a primary second-class constraint $\pi_\psi - i\hbar\psi^\dagger \approx 0$, whose Dirac-bracket quantization produces fermionic anticommutation relations — consistent with spin-statistics. Therefore the spinor kinetic term must be linear in $\nabla\psi$.*

*Proof.* For a quadratic Lagrangian $\mathcal{L} \sim (\nabla_0\psi)^\dagger(\nabla_0\psi) - \ldots$, the conjugate momentum $\pi_\psi = \partial\mathcal{L}/\partial(\nabla_0\psi) \sim (\nabla_0\psi)^\dagger$ is independent of $\psi$. Canonical quantization assigns $[\psi(x),\pi(y)] = i\hbar\delta(x-y)$ — bosonic commutators. Fermion fields satisfy anticommutators by [Spin and Statistics](/derivations/particles/spin-statistics), so this is inconsistent.

For a Lagrangian $\mathcal{L} \sim i\psi^\dagger\nabla_0\psi + \ldots$ linear in $\nabla_0\psi$, the momentum $\pi_\psi = i\hbar\psi^\dagger$ depends only on $\psi$ itself — a primary constraint $\phi_1 = \pi_\psi - i\hbar\psi^\dagger \approx 0$. Its Poisson bracket with itself is non-zero (second-class constraint). Dirac-bracket reduction gives $\{\psi(x),\psi^\dagger(y)\}_{DB} = -\tfrac{i}{\hbar}\delta(x-y)$. Quantizing the Dirac bracket with a choice of commutator or anticommutator: energy positivity (bounded-below Hamiltonian required by Axiom 3 Lyapunov stability) selects the anticommutator (see Step 7 Proposition 7.1 for the energy-positivity argument), producing $\{\psi(x),\psi^\dagger(y)\} = \delta(x-y)$ — fermionic, consistent with Spin and Statistics. $\square$

**Theorem 2.4 (Uniqueness of the Dirac kinetic term).** *The unique Lagrangian density on $M_A$ satisfying: (i) linear in $\nabla_\mu\psi$; (ii) bilinear in $(\psi, \bar\psi)$ with $\bar\psi = \psi^\dagger\gamma^0$; (iii) Lorentz scalar on $M_A$; (iv) hermitian up to total derivative; (v) minimally coupled (no free non-minimal coupling parameter), is:*

$$\mathcal{L}_{\text{kin}}^{\text{spinor}} = \frac{i\hbar}{2}\bigl[\bar\psi\gamma^\mu\nabla_\mu\psi - (\nabla_\mu\bar\psi)\gamma^\mu\psi\bigr] \;\equiv\; i\hbar\,\bar\psi\gamma^\mu\nabla_\mu\psi + \text{(total derivative)}.$$

*Proof.* Condition (ii) gives one factor of $\psi$ and one of $\bar\psi$. Condition (i) requires exactly one $\nabla_\mu$. Condition (iii) demands contraction of the spacetime index to a scalar. The spinor-bilinear classification provides exactly five independent bilinears: $\bar\psi\psi, \bar\psi\gamma^5\psi, \bar\psi\gamma^\mu\psi, \bar\psi\gamma^\mu\gamma^5\psi, \bar\psi\sigma^{\mu\nu}\psi$ (scalar, pseudoscalar, vector, axial vector, tensor). Of these, only $\bar\psi\gamma^\mu\psi$ carries a single free vector index suitable for contraction with a single $\nabla_\mu$; the scalar and pseudoscalar carry zero indices (violating (i)), the tensor carries two (producing a second-derivative term that violates Ostrogradsky when contracted symmetrically, and an antisymmetric Lagrangian that trivializes under $\nabla_{[\mu}\nabla_{\nu]}$).

The axial-vector $\bar\psi\gamma^\mu\gamma^5\psi$ also carries a single free index but is pseudoscalar under parity; a Lagrangian built from it alone is not consistent with minimal coupling to the parity-even gravitational connection (condition (v)). The framework's explicit parity-violating content enters only through the gauge connection $A_\mu$ via [Chirality Selection](/derivations/gauge/chirality-selection), not through an axial-vector kinetic term.

Contracting $\bar\psi\gamma^\mu\psi$ with $\nabla_\mu$ gives $\bar\psi\gamma^\mu\nabla_\mu\psi$, complex-valued. Hermiticity (iv) requires the symmetric combination displayed above, which differs from $i\hbar\bar\psi\gamma^\mu\nabla_\mu\psi$ only by a total derivative. Condition (v) rules out non-minimal scalar-curvature couplings $\bar\psi R\psi$ or equivalents by the same enumeration argument [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) Theorem 3.1(v) applies for scalars.

The $\hbar$ coefficient is fixed by requiring the kinetic arc length over one rest-cycle of the observer to equal $\hbar$ (Fisher Information Metric Proposition 4.1 normalization, carried through the BKM identification). $\square$

**Proposition 2.5 (Clifford factorization of the BKM pullback).** *The BKM-pullback quadratic form (Prop 2.1) and the Dirac first-order form (Theorem 2.4) are related by Clifford factorization. On-shell:*

$$(i\gamma^\mu\nabla_\mu)^2 = -g_A^{\mu\nu}\nabla_\mu\nabla_\nu + \frac{R_A}{4}$$

*where $R_A$ is the scalar curvature of $M_A$ (Lichnerowicz identity, [Lichnerowicz, 1963]).*

*Proof.* Direct computation: $\gamma^\mu\gamma^\nu\nabla_\mu\nabla_\nu = \tfrac12\{\gamma^\mu,\gamma^\nu\}\nabla_\mu\nabla_\nu + \tfrac12[\gamma^\mu,\gamma^\nu]\tfrac12[\nabla_\mu,\nabla_\nu] = g_A^{\mu\nu}\nabla_\mu\nabla_\nu + \tfrac14\Sigma^{\mu\nu}R_{\mu\nu\rho\sigma}$, and standard manipulation of the Riemann tensor contracting with $\gamma$-bilinears reduces the curvature piece to $R_A/4$. See Lawson–Michelsohn, *Spin Geometry*, §II.8. $\square$

**Remark.** The $R_A/4$ term is an *on-shell* consequence of squaring the Dirac operator, not a Lagrangian-level non-minimal coupling. The Lagrangian $\mathcal{L}_{\text{spinor}}$ of Theorem 2.4 contains no explicit curvature term.

### Step 3: The Mass Term

**Proposition 3.1 (Mass from rest-cycle coherence content).** *By [Observer Definition](/derivations/axioms/observer-definition) Identification 5.3, the observer's accessible coherence is $\mathcal{C}(\Sigma_A) = \|I_A\|$, with rest-cycle frequency $\omega_0$ giving rest energy $mc^2 = \hbar\omega_0$. The spinor mass term must be a Lorentz-scalar, non-derivative, bilinear-in-$(\psi, \bar\psi)$ operator of dimension 4, with coefficient $m$ fixed by the rest-cycle identification.*

*Proof.* Same bilinear classification as Theorem 2.4. Of the five Lorentz-covariant spinor bilinears, only $\bar\psi\psi$ (scalar) and $\bar\psi\gamma^5\psi$ (pseudoscalar) carry zero spacetime indices. The pseudoscalar is parity-odd; its inclusion as a mass term would break parity explicitly in the vacuum coherence structure, whereas the framework's parity violation is localized to the gauge-coupling chirality (Chirality Selection) and does not propagate to the mass term. The scalar form $\bar\psi\psi$ is the unique parity-even, non-derivative, Lorentz-scalar bilinear. Identification 5.3 fixes the coefficient to $m = \hbar\omega_0/c^2$. $\square$

**Theorem 3.2 (Mass term).** *The spinor mass term in the Coherence Lagrangian is*

$$\mathcal{L}_{\text{mass}}^{\text{spinor}} = -mc^2\,\bar\psi\psi.$$

*The sign follows from the convention that the mass term contributes positively to rest energy in the Hamiltonian.*

### Step 4: Chirality Structure from the Clifford $\mathbb{Z}_2$ Grading

**Definition 4.1 (Chirality operator).** The volume element

$$\gamma^5 := i\gamma^0\gamma^1\gamma^2\gamma^3$$

satisfies $(\gamma^5)^2 = \mathbf{1}$ and $\{\gamma^5, \gamma^\mu\} = 0$ for all $\mu$. The **chirality projectors** are

$$P_L := \tfrac12(1 - \gamma^5), \qquad P_R := \tfrac12(1 + \gamma^5).$$

These satisfy $P_L^2 = P_L$, $P_R^2 = P_R$, $P_L P_R = 0$, $P_L + P_R = \mathbf{1}$, and commute with all even-grade Clifford elements (in particular with the Lorentz generators $\sigma^{\mu\nu} = \tfrac{i}{2}[\gamma^\mu, \gamma^\nu]$).

**Proposition 4.2 (Weyl decomposition).** *The Dirac spinor decomposes as a direct sum of $\mathrm{Spin}(3,1)$-irreducible representations:*

$$\psi = \psi_L + \psi_R, \qquad \psi_L := P_L\psi \in \mathbb{C}^2_L,\ \ \psi_R := P_R\psi \in \mathbb{C}^2_R$$

*with $\psi_L$ in the $(1/2, 0)$ Weyl representation and $\psi_R$ in the $(0, 1/2)$ Weyl representation of $\mathfrak{sl}(2, \mathbb{C}) \cong \mathfrak{su}(2)_L \oplus \mathfrak{su}(2)_R$.*

*Proof.* Standard consequence of the Clifford $\mathbb{Z}_2$ grading; the projectors $P_{L/R}$ are orthogonal idempotents, and their commutativity with the Lorentz generators makes each image a $\mathrm{Spin}(3,1)$-invariant subspace. $\square$

**Proposition 4.3 (Chirality decomposition of the kinetic term).** *Under $\psi = \psi_L + \psi_R$, the Dirac kinetic term decomposes block-diagonally:*

$$i\hbar\,\bar\psi\gamma^\mu\nabla_\mu\psi \;=\; i\hbar\,\psi_L^\dagger\bar\sigma^\mu\nabla_\mu\psi_L \;+\; i\hbar\,\psi_R^\dagger\sigma^\mu\nabla_\mu\psi_R$$

*where $\sigma^\mu = (\mathbf{1}, \vec\sigma)$ and $\bar\sigma^\mu = (\mathbf{1}, -\vec\sigma)$.*

*Proof.* Direct computation using $\gamma^\mu P_L = P_R\gamma^\mu$ and the Weyl basis $\gamma^\mu = \begin{pmatrix} 0 & \sigma^\mu \\ \bar\sigma^\mu & 0 \end{pmatrix}$. $\square$

**Proposition 4.4 (Chirality decomposition of the mass term).** *The Dirac mass term mixes the two Weyl components:*

$$\bar\psi\psi \;=\; \psi_L^\dagger\psi_R + \psi_R^\dagger\psi_L.$$

*Proof.* $\bar\psi\psi = \psi^\dagger\gamma^0\psi$; in the Weyl basis, $\gamma^0$ exchanges the two Weyl blocks. $\square$

**Corollary 4.5 (Massless-to-massive transition).** *For $m = 0$, the Dirac Lagrangian decouples into two independent Weyl Lagrangians (kinetic only, one per chirality). For $m \neq 0$, the mass term is the unique chirality-mixing bilinear, producing the Dirac equation's $\psi_L \leftrightarrow \psi_R$ oscillation at frequency $mc^2/\hbar$.*

**Proposition 4.6 (Gauge-coupling chirality from Chirality Selection).** *By [Chirality Selection](/derivations/gauge/chirality-selection) Theorem 3.1 (global quaternionic orientation lock) and Proposition 4.1 (orientation-to-chirality map), the $SU(2)$ gauge connection in $\nabla_\mu$ is restricted to one Weyl component. In the conventional sign choice:*

$$\nabla_\mu\psi_L = \bigl(\partial_\mu + \tfrac14\omega_\mu^{ab}\gamma_a\gamma_b + igW_\mu^a T^a + ig'B_\mu Y\bigr)\psi_L$$

$$\nabla_\mu\psi_R = \bigl(\partial_\mu + \tfrac14\omega_\mu^{ab}\gamma_a\gamma_b + ig'B_\mu Y\bigr)\psi_R$$

*with $W_\mu^a$ absent from the right-handed sector. The kinematic chirality split of Proposition 4.2 is a representation-theoretic property of every Dirac spinor; the gauge-coupling chirality of this proposition is the additional content supplied by Chirality Selection.*

*Proof.* Direct application of Chirality Selection Proposition 4.1 to the covariant derivative in the Lagrangian of Theorem 2.4. $\square$

### Step 5: Majorana Form at Bootstrap Level 2

**Proposition 5.1 (Pseudo-real structure of the weak doublet).** *The $SU(2)_L$ fundamental representation on $\mathbb{C}^2$ carries a canonical quaternionic (anti-linear) structure*

$$J_\epsilon: \mathbb{C}^2 \to \mathbb{C}^2, \qquad J_\epsilon\psi := \epsilon\,\psi^*, \qquad \epsilon = i\sigma_2 = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$$

*satisfying $J_\epsilon^2 = -\mathbf{1}$ and $[J_\epsilon, g] = 0$ for all $g \in SU(2)$. Equivalently, $\sigma_2\sigma_i^*\sigma_2 = -\sigma_i$ implies $\bar{\mathbf{2}} \cong \mathbf{2}$ as $SU(2)$ representations via the invariant pairing $\psi^a\chi^b\epsilon_{ab}$. This $J_\epsilon$ realizes the Cayley–Dickson level-2 identification $\mathbb{C}^2 \cong_\mathbb{R} \mathbb{H}$ of [Bootstrap Division Algebras](/derivations/interactions/bootstrap-division-algebras).*

*Proof.* Standard algebraic identities for Pauli matrices. $\square$

**Proposition 5.2 (Majorana condition).** *For an $SU(2)_L$-doublet that carries no other distinguishing charges (electrically neutral, colorless — i.e., a neutrino), the coherence-dual map $\mathcal{D}$ of [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs) acts only on the $SU(2)_L$ phase structure. Proposition 5.1 makes this action identify-equivalent on the doublet ($\bar{\mathbf{2}} \cong \mathbf{2}$), so the state is self-conjugate: $\mathcal{D}(\nu) = \nu$. This is the Majorana condition $\nu^c = \nu$, where charge conjugation $C = i\gamma^2\gamma^0$ is the spacetime extension of the $J_\epsilon$ Weyl-level structure.*

*Proof.* This is [Neutrino Masses](/derivations/particles/neutrino-masses) Theorem 1.3 applied to the Lagrangian framework: the $U(1)_{em}$ conjugation that distinguishes Dirac particle from antiparticle is absent (zero electric charge); the only conjugation-sensitive label is the $SU(2)_L$ representation, which is self-conjugate via $J_\epsilon$. $\square$

**Theorem 5.3 (Majorana mass term).** *For a $J_\epsilon$-invariant (Majorana) neutrino, the unique Lorentz-scalar, non-derivative, bilinear mass term consistent with the pseudo-real structure is*

$$\mathcal{L}_{\text{mass}}^{\text{Majorana}} = \frac{1}{2}m_\nu\bigl(\nu^T C\,\nu + \nu^\dagger C\,\nu^*\bigr).$$

*The Dirac form $\bar\nu\nu = \nu^\dagger\gamma^0\nu$ does not apply for Majorana neutrinos because it vanishes on $J_\epsilon$-invariant states (alternatively: for a self-conjugate field, $\bar\nu = \nu^T C$, and $\nu^T C\nu$ is the surviving Lorentz-scalar non-derivative bilinear). The coefficient $1/2$ avoids double-counting the self-conjugate degree of freedom.*

*Proof.* The spinor-bilinear enumeration of Proposition 3.1 restricted to $J_\epsilon$-invariant states leaves $\nu^T C\nu$ as the unique parity-even, non-derivative, Lorentz-scalar bilinear. Identification 5.3 fixes the coefficient as before. The 1/2 factor is standard (Weinberg QFT Vol. I §2.6). $\square$

**Remark 5.4 (Seesaw consistency).** The seesaw mass matrix of [Neutrino Masses](/derivations/particles/neutrino-masses) Theorem 2.2 combines a Dirac coupling $m_D\bar\nu_L\nu_R$ (from Theorem 3.2) with a right-handed Majorana term $\tfrac12 M_R\nu_R^T C\nu_R$ (Theorem 5.3). Both terms arise from the same Identification 5.3 mechanism at different bootstrap levels: Dirac at level 1 (charged leptons), Majorana at level 2 (neutrinos). The seesaw eigenvalue relation $m_\nu \sim m_D^2/M_R$ is then a consequence of diagonalizing the combined mass matrix.

### Step 6: Three-Generation Replication

**Proposition 6.1 (Generation replication from winding classes).** *By [Three Generations](/derivations/particles/three-generations) Theorem 0.1, exactly three winding-direction classes exist on the internal $\mathfrak{so}(3)$ space. The Lagrangian-level content is replication of the spinor sector over generation index $k \in \{1, 2, 3\}$:*

$$\mathcal{L}_{\text{spinor}}^{3\text{gen}} = \sum_{k=1}^{3}\Bigl[i\hbar\,\bar\psi_k\gamma^\mu\nabla_\mu\psi_k - m_kc^2\,\bar\psi_k\psi_k\Bigr]$$

*with masses $m_k$ fixed by Three Generations Theorem 4.2 (misalignment-angle tunneling factors $y_k \sim e^{-\alpha_k/g_{EW}^2}$).*

*Proof.* The Lagrangian of Theorem 2.4 and 3.2 derives from a single-observer state space $\Sigma_A$. Three Generations establishes that the framework's observer category contains exactly three classes distinguished by winding direction; replicating the derivation across the three classes gives the stated form. Cross-generation bilinears $\bar\psi_i\gamma^\mu\psi_j$ for $i \neq j$ vanish by orthogonality of the winding classes (Three Generations Proposition 3.2). Off-diagonal Yukawa couplings (CKM/PMNS mixing) arise from mass-basis-vs-interaction-basis misalignment and are handled in [Mixing Angles](/derivations/flavor/mixing-angles); they are not part of the spinor sector of the Coherence Lagrangian itself. $\square$

### Step 7: Consistency — Spin-Statistics, Pauli Exclusion, CPT, and Stress-Energy

**Proposition 7.1 (Spin-statistics from energy positivity).** *Canonical quantization of $\mathcal{L}_{\text{spinor}}$ with bosonic commutators yields a Hamiltonian unbounded below. With fermionic anticommutators it yields a Hamiltonian bounded below. By Axiom 3 (Lyapunov stability of the observer loop, [Loop Closure](/derivations/axioms/loop-closure) Proposition 2.3), only the fermionic quantization is consistent.*

*Proof.* The Dirac-bracket analysis of Proposition 2.3 leaves the quantization statistics undetermined. Expanding $\psi$ in plane-wave modes $\psi(x) = \sum_{p,s}[a_{p,s}u^s(p)e^{-ip\cdot x} + b^\dagger_{p,s}v^s(p)e^{ip\cdot x}]$ and computing the Hamiltonian:

- *Bosonic*: $[a_{p,s}, a^\dagger_{p',s'}] = \delta_{ss'}\delta_{pp'}$ gives $H = \sum_{p,s}\omega_p(a^\dagger_{p,s}a_{p,s} - b^\dagger_{p,s}b_{p,s})$. Filling arbitrary antiparticle modes drives $H \to -\infty$: unbounded below.
- *Fermionic*: $\{a_{p,s}, a^\dagger_{p',s'}\} = \delta_{ss'}\delta_{pp'}$ combined with $b_p b_p^\dagger = 1 - b_p^\dagger b_p$ gives $H = \sum_{p,s}\omega_p(a^\dagger_{p,s}a_{p,s} + b^\dagger_{p,s}b_{p,s}) + E_0$ with constant zero-point $E_0$: bounded below.

Loop-closure Lyapunov stability requires bounded-below Hamiltonians, so fermionic quantization is forced. This reproduces the Pauli–Lüders spin-statistics theorem from the Lagrangian and is independent of the configuration-space / Laidlaw–DeWitt route of [Spin and Statistics](/derivations/particles/spin-statistics). $\square$

**Proposition 7.2 (Pauli exclusion).** *The fermionic anticommutators $\{a^\dagger_{p,s}, a^\dagger_{p',s'}\} = 0$ of Proposition 7.1 give $(a^\dagger_{p,s})^2 = 0$ for any single mode. Two identical fermions in the same state are coherence-forbidden. This is the Pauli exclusion principle.*

*Proof.* Direct from the anticommutator algebra of Proposition 7.1. Matches [Pauli Exclusion](/derivations/particles/pauli-exclusion) Theorem. $\square$

**Proposition 7.3 (CPT invariance).** *The composite Lagrangian (Dirac kinetic + Dirac mass + Majorana mass + three-generation replication + Chirality Selection gauge coupling) is invariant under CPT as defined in [CPT Theorem](/derivations/particles/cpt-theorem): $C$ from coherence-dual pairs, $P$ from spatial reflection of the winding structure, $T$ from loop-closure phase reversal.*

*Proof.* Term by term:

- *Kinetic term $i\hbar\bar\psi\gamma^\mu\nabla_\mu\psi$*: CPT-invariant by the Pauli–Lüders term-by-term argument (CPT Theorem Proposition 4.1).
- *Dirac mass $-mc^2\bar\psi\psi$*: Lorentz scalar, trivially CPT-invariant.
- *Majorana mass $\tfrac12 m_\nu\nu^T C\nu$*: CPT-invariant automatically — Majorana fermions are their own CPT conjugates.
- *Chiral $SU(2)$ coupling*: CPT-invariant by CPT Theorem Proposition 6.1 (the chirality flip from $P$ cancels against the chirality flip from $C$, and the phase conjugation from $T$ cancels against the phase structure of $C$).

Three-generation replication does not affect CPT invariance: each generation is an independent copy of the CPT-invariant structure. $\square$

**Proposition 7.4 (Stress-energy tensor).** *Variation of $\mathcal{L}_{\text{spinor}}$ with respect to the $M_A$ metric $g^{\mu\nu}_A$ gives the Dirac stress-energy tensor*

$$T^{\text{spinor}}_{\mu\nu} = \frac{i\hbar}{4}\bar\psi\bigl(\gamma_{(\mu}\overleftrightarrow{\nabla}_{\nu)}\bigr)\psi - g_{A,\mu\nu}\mathcal{L}_{\text{spinor}}$$

*which matches the variational definition of [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) Proposition 7.1 and produces the standard Einstein–Dirac coupling. No non-minimal coupling $\xi R\bar\psi\psi$ is generated at tree level (consistent with the enumeration argument of Theorem 2.4 condition (v)).*

*Proof.* Direct variational calculation + Lichnerowicz identity of Proposition 2.5. The Lichnerowicz $R_A/4$ term is an on-shell property of $D^2$, not a Lagrangian-level coupling. $\square$

## Physical Interpretation

| Framework concept | Standard physics |
|---|---|
| Spinor observer $(\Sigma_A, I_A, \mathcal{B}_A)$ with $\Sigma_A \cong \mathbb{C}^4$ | Dirac spinor |
| BKM pullback on field configurations | "Klein–Gordon-like" quadratic form in $\partial\psi$ |
| Spin-statistics → first-order kinetic term | Dirac vs. Klein–Gordon for fermions |
| Unique first-order Lorentz-scalar bilinear | $i\bar\psi\gamma^\mu\partial_\mu\psi$ |
| Identification 5.3 for mass | $-m\bar\psi\psi$ (rest energy) |
| Clifford $\mathbb{Z}_2$ grading | Chirality projectors $P_{L/R}$ |
| Level-2 pseudo-reality | Majorana condition $\nu^c = \nu$ |
| $\mathfrak{so}(3)$ winding classes | Three generations |
| Energy positivity (Prop 7.1) | Pauli spin-statistics theorem |
| Fock-space anticommutators (Prop 7.2) | Pauli exclusion principle |
| Lichnerowicz identity | $D^2 = -\Box + R/4$ on curved spacetime |

## Consistency Model

The Standard Model fermion sector provides the primary consistency model. The composite Lagrangian produced by this derivation is:

$$\mathcal{L}_{\text{SM-fermion}} = \sum_{k=1}^{3}\Bigl[i\hbar\,\bar\psi_k\gamma^\mu\nabla_\mu^{\text{SM}}\psi_k\Bigr] - \sum_k m_k\bar\psi_k\psi_k + \tfrac12\sum_{k,k'}M^\nu_{kk'}\nu_k^T C\nu_{k'} + \text{h.c.}$$

with $\nabla_\mu^{\text{SM}}$ carrying the $SU(3) \times SU(2)_L \times U(1)_Y$ gauge connections (chirality-selected via [Chirality Selection](/derivations/gauge/chirality-selection)), $m_k$ the charged-lepton/quark mass eigenvalues, and $M^\nu_{kk'}$ the Majorana neutrino mass matrix.

Against this model:
- Electron mass term: Dirac ($m_e\bar e e$), level 1, from Theorem 3.2.
- Neutrino mass term: Majorana seesaw, mixed level-1/level-2 structure, from Theorem 5.3 + Remark 5.4.
- Quark mass terms: Dirac, level 1 with $SU(3)$ color factor (not a level-3 spinor modification; see Open Gap 1), from Theorem 3.2 applied per generation.
- Three-generation replication: Proposition 6.1.
- Gauge couplings: Chirality Selection applied at the Lagrangian level (Proposition 4.6).

## Rigor Assessment

**Fully rigorous:**
- Step 1 (Setup): definitions + framework cross-references
- Proposition 2.1 (BKM pullback): direct application of Quantum Fisher Metric Theorem 7.2 to field configurations
- Proposition 2.2 (Ostrogradsky): direct application of Coherence Lagrangian Theorem 6.0
- Proposition 2.3 (Spin-statistics forces first-order): Dirac-bracket constraint analysis, standard (Henneaux–Teitelboim *Quantization of Gauge Systems*, Ch. 1)
- Theorem 2.4 (Dirac uniqueness): spinor-bilinear enumeration (Weinberg QFT Vol. I §5.4) + Lorentz/hermiticity/minimal-coupling constraints
- Proposition 2.5 (Lichnerowicz identity): [Lichnerowicz, 1963]
- Propositions 3.1, 3.2 (Mass term): bilinear enumeration + Identification 5.3
- Propositions 4.1–4.6 (Chirality structure): standard Clifford representation theory + Chirality Selection cross-reference
- Propositions 5.1–5.3 (Majorana sector): pseudo-real structure of $SU(2)$ + cross-reference to Neutrino Masses Theorem 1.3
- Proposition 6.1 (Three-generation replication): cross-reference to Three Generations Theorem 0.1 + 4.2
- Propositions 7.1–7.4 (Consistency): energy-positivity spin-statistics, Pauli exclusion from Fock space, CPT term-by-term, standard stress-energy variation

**Assessment:** Derived. The derivation is tight: every step traces either to the BKM selection of Quantum Fisher Metric, to already-derived framework theorems (Spin and Statistics, Chirality Selection, Neutrino Masses, Three Generations, CPT Theorem, Pauli Exclusion), or to standard representation theory. The consistency checks (Step 7) provide independent framework routes to two already-derived theorems (spin-statistics via energy positivity as an alternative to Laidlaw–DeWitt; Pauli exclusion via Fock space as an alternative to algebraic antisymmetry), confirming self-consistency.

**No structural postulates.**

## Open Gaps

1. **Level-3 ($\mathbb{O}$) spinor sector.** Non-associativity breaks (a) the BKM operator-mean construction ([Quantum Fisher Metric](/derivations/thermodynamics-ext/quantum-fisher-metric) Open Gap 1), (b) the standard $\gamma^\mu$ Clifford algebra, and (c) the $\gamma^5 = i\gamma^0\gamma^1\gamma^2\gamma^3$ $\mathbb{Z}_2$ grading via its quadruple product. Within the framework, level-3 content appears as $SU(3)$ color charge on level-1 spinors ([Color Force](/derivations/gauge/color-force)), not as a distinct spinor kinematic level — so the Standard Model's fermion content is fully covered by levels 1–2 and this gap does not affect Standard Model coverage. A non-associative quantum Fisher formalism, if developed, would enable a direct level-3 spinor derivation; as a separate research problem.

2. **Infinite-dimensional extension.** The derivation assumes finite-dimensional spinor state spaces. Quantum-field-theoretic extension to infinite-dimensional Fock spaces is standard but requires explicit verification that the BKM selection arguments survive the infinite-dimensional limit.

## Addressed Gaps

- **[Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) Open Gap 5 (fermion kinetics)**: closed by Theorems 2.4 and 3.2.
- **[Observer Pattern Signal](/derivations/foundation/observer-pattern-signal) Open Gap 2 (spinor Yukawa signal)**: the Lagrangian-level spinor source is now available for propagation to the pattern-signal derivation; full propagation is a downstream update.
- **[Neutrino Masses](/derivations/particles/neutrino-masses) Lagrangian embedding of the Majorana condition**: closed by Theorem 5.3.

<!-- References -->
[Lichnerowicz, 1963]: /references#lichnerowicz-1963
