---
title: "Euclidean Coherence Lagrangian"
status: "derived"
dependsOn: ["foundation/coherence-lagrangian", "foundation/spinor-coherence-lagrangian", "foundation/observer-projected-spacetime", "thermodynamics-ext/quantum-fisher-metric"]
enablesDerivation: ["particles/coherence-bounces"]
tags: ["foundation", "lagrangian", "euclidean"]
summary: "The Coherence Lagrangian (scalar + gauge + gravity + spinor sectors) admits an unambiguous Euclidean continuation on each observer's projected static de Sitter patch M_A. The static Killing vector of M_A fixes the Wick rotation t → -iτ; the horizon at r = L_A forces Euclidean time periodicity β_A = π T_A, reproducing the Gibbons–Hawking thermal structure. The Euclidean action is positive-definite for the bosonic sectors (modulo the standard conformal-mode treatment) and takes the expected Grassmann determinantal form for the fermionic sector. Cross-observer consistency is inherited from the presheaf structure of observer-projected spacetime; the Euclidean continuation is operationally well-defined on all shared Type III relational content."
rigorLevel: "formal"
lastUpdated: 2026-04-21
---

## Overview

This derivation supplies a prerequisite for any thermal or tunneling calculation in the framework: **what is the Euclidean continuation of the Coherence Lagrangian, and does it behave as standard Euclidean field theory on observer-projected spacetime?**

The Lorentzian Coherence Lagrangian — scalar + gauge + gravity from [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) Theorem 3.1, extended to the spinor sector via [Spinor Coherence Lagrangian](/derivations/foundation/spinor-coherence-lagrangian) Theorem 2.7 — is the framework's classical dynamics. Quantum effects in the semi-classical (WKB) limit, thermal field theory at Gibbons–Hawking temperature, and instanton/bounce amplitudes all require the Euclidean continuation. This derivation makes that continuation explicit.

**The approach.** Each observer projects its own Lorentzian static de Sitter patch $M_A$ (from [Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Theorem 3.1). The patch has a distinguished static Killing vector — the generator of $A$'s own rest-frame time translations — which fixes the Wick rotation $t \to -i\tau$ unambiguously. Absence of conical singularity at the horizon $r = L_A$ determines the Euclidean time periodicity, reproducing the Gibbons–Hawking inverse temperature $\beta_A = 2\pi L_A/c = \pi T_A$. The Euclidean Coherence Lagrangian is then the standard Wick-rotated form of the Lorentzian Lagrangian, with fermion fields treated as independent Grassmann variables and anti-periodic in Euclidean time.

**The result.** The Euclidean Coherence Lagrangian $\mathcal{L}_E$ is explicit on each observer's Euclidean patch $M_A^E$, with:

- Bosonic action bounded below (modulo the Gibbons–Hawking–Perry conformal-mode treatment).
- Fermionic action producing the expected Grassmann determinants and Pfaffians.
- Lichnerowicz identity $(\gamma^\mu_E\nabla_\mu)^2 = \Box_E - R_E/4$ on the Euclidean de Sitter background.
- Cross-observer compatibility via the presheaf structure of observer-projected spacetime.

**Why this matters.** The Euclidean Coherence Lagrangian is the object used by [Coherence Bounces](/derivations/particles/coherence-bounces) to compute WKB tunneling amplitudes and by any future thermal field theory work in the framework (finite-temperature bootstrap analysis, early-universe crystallization, KMS state structure on observer-projected patches).

## Statement

**Theorem.** *Under the Wick rotation $t \to -i\tau$ on each observer's projected static de Sitter patch $M_A$, the Lorentzian Coherence Lagrangian (scalar + gauge + gravity + spinor sectors) admits an unambiguous Euclidean continuation with the following properties:*

1. *The rotation is fixed by the static Killing vector $\xi_A = \partial_t$ of $M_A$ — a framework-intrinsic object.*
2. *Absence of conical singularity at the horizon $r = L_A$ forces $\tau$ to be periodic with period $\beta_A = 2\pi L_A/c = \pi T_A$, giving Gibbons–Hawking temperature $T_{\mathrm{GH},A} = \hbar c/(2\pi k_B L_A) = \hbar/(\pi k_B T_A)$.*
3. *The Euclidean bosonic action is positive-definite on the scalar and gauge sectors; the gravitational sector requires the standard Gibbons–Hawking–Perry conformal-mode treatment.*
4. *The Euclidean fermionic action takes the standard Grassmann form with $\bar\psi, \psi$ independent and $\tau$-anti-periodic; Majorana fermions contribute via Pfaffians, Dirac fermions via determinants.*
5. *Cross-observer consistency on shared Type III relational content is inherited from the observer-projected-spacetime presheaf structure — no additional postulate required.*

## Derivation

### Step 1: Wick rotation on a single observer's patch

**Setup.** By [Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Theorem 3.1, observer $A$'s projected continuous dual $M_A$ is the static patch of 4D de Sitter space with de Sitter radius $L_A = cT_A/2$:

$$g_A = -\left(1 - \frac{r^2}{L_A^2}\right)c^2\,dt^2 + \left(1 - \frac{r^2}{L_A^2}\right)^{-1}dr^2 + r^2\,d\Omega^2, \qquad r \in [0, L_A).$$

The static Killing vector is $\xi_A = \partial_t$; timelike in the interior and null on the horizon.

**Proposition 1.1 (Wick rotation).** *The Euclidean continuation of $M_A$ is*

$$g_A^E = \left(1 - \frac{r^2}{L_A^2}\right)c^2\,d\tau^2 + \left(1 - \frac{r^2}{L_A^2}\right)^{-1}dr^2 + r^2\,d\Omega^2$$

*under $\tau := it$. This metric is positive-definite for $r \in [0, L_A)$ and is uniquely fixed by the static Killing vector $\xi_A$.*

*Proof.* Positive-definiteness is direct: each diagonal entry of $g_A^E$ is positive on the stated domain. Uniqueness follows from static-patch rigidity: any other timelike Killing vector on $M_A$ coincides with $\xi_A$ up to a constant rescaling (standard result; see Hawking–Ellis, *The Large Scale Structure of Space-Time*, §6.3). $\square$

**Proposition 1.2 (Euclidean periodicity).** *To avoid a conical singularity at the horizon $r = L_A$, the Euclidean time coordinate $\tau$ must be periodic with period*

$$\beta_A = \frac{2\pi L_A}{c} = \pi T_A.$$

*Equivalently, the Gibbons–Hawking temperature is $T_{\mathrm{GH},A} = 1/\beta_A = \hbar c/(2\pi k_B L_A) = \hbar/(\pi k_B T_A)$.*

*Proof.* Near the horizon, set $r = L_A - \epsilon$ with small $\epsilon > 0$. Expanding: $1 - r^2/L_A^2 \approx 2\epsilon/L_A$. Change radial coordinate to $\rho := \sqrt{2L_A\epsilon}/\sqrt{c^2}$; then $d\rho^2 = (L_A/(2\epsilon))\,c^{-2}\,d\epsilon^2$ and the near-horizon metric reduces to

$$g_A^E \approx d\rho^2 + \rho^2\bigl(c\,d\tau/L_A\bigr)^2 + L_A^2\,d\Omega^2.$$

Setting $\theta := c\tau/L_A$, the $(\rho, \theta)$ plane is Euclidean flat with polar coordinates. Absence of conical defect requires $\theta$ to be $2\pi$-periodic, hence $\tau$ is $(2\pi L_A/c)$-periodic. $\square$

**Remark 1.3 (boundary conditions for fields).** Standard thermal-field-theory rules apply on the Euclidean patch: bosonic fields (scalars, gauge fields, metric perturbations) are $\tau$-periodic with period $\beta_A$; fermionic fields are $\tau$-anti-periodic with period $\beta_A$. The anti-periodicity is universal for KMS thermal states at finite temperature and carries through from standard flat-space thermal field theory unchanged.

### Step 2: Euclidean bosonic Lagrangian

**Proposition 2.1 (Euclidean continuation of the bosonic sectors).** *Under the Wick rotation of Proposition 1.1, the bosonic sectors of the Coherence Lagrangian transform as:*

**Scalar sector.** *The Lorentzian kinetic term $\tfrac12 \hbar G^{\mu\nu}\partial_\mu\phi^*\partial_\nu\phi$ (signature $(+, -, -, -)$) becomes, with $\mathcal{L}_E = -\mathcal{L}_L|_{\text{Wick}}$:*

$$\mathcal{L}_E^{\text{scalar}} = \tfrac12\hbar\, g_E^{\mu\nu}\partial_\mu\phi^*\partial_\nu\phi + V(\phi)$$

*with $g_E^{\mu\nu}$ positive-definite and $V(\phi) = m^2|\phi|^2 + \lambda|\phi|^4$ unchanged (potentials are Wick-invariant scalars).*

**Gauge sector.** *The Yang–Mills kinetic term $-\tfrac14 F_{\mu\nu}F^{\mu\nu}$ becomes $+\tfrac14 F^E_{\mu\nu}F^{E\,\mu\nu}$ under the Wick rotation, with indices raised by $g_E^{\mu\nu}$.*

**Gravity sector.** *The Einstein–Hilbert term $\tfrac{c^4}{16\pi G}\sqrt{-g}\,R$ becomes $\tfrac{c^4}{16\pi G}\sqrt{g_E}\,R_E$. On the Euclideanized static de Sitter patch, $R_E = 12/L_A^2$ (constant positive scalar curvature of $S^4$-type).*

*Total Euclidean bosonic action:*

$$S_E^{\text{boson}}[\phi, A_\mu, g_E] = \int_{M_A^E}d^4x_E\,\sqrt{g_E}\,\Bigl[\tfrac12\hbar|\partial\phi|^2 + V(\phi) + \tfrac14 F^E_{\mu\nu}F^{E\,\mu\nu} - \tfrac{c^4}{16\pi G}(R_E - 2\Lambda)\Bigr].$$

*The scalar and gauge contributions are manifestly non-negative; the gravity sector requires the Gibbons–Hawking–Perry conformal-mode treatment (Gibbons–Hawking–Perry 1978).*

*Proof.* Each term is the direct Wick rotation of the corresponding Lorentzian term via the standard rules: $t \to -i\tau$ (hence $\partial_t \to i\partial_\tau$), $d^4x \to -i\,d^4x_E$, $\eta^{\mu\nu} \to \delta^{\mu\nu}$ (flat-space reduction; on curved $M_A^E$ the metric $g_E^{\mu\nu}$ replaces $\delta^{\mu\nu}$). The sign convention $\mathcal{L}_E = -\mathcal{L}_L|_{\text{Wick}}$ renders the scalar kinetic term positive; the gauge kinetic term changes sign relative to Lorentzian because $F_{\mu\nu}F^{\mu\nu} = -2|E|^2 + 2|B|^2$ in Minkowski and the electric-field term flips under Wick rotation. Full details in Weinberg *QFT* Vol. II §23.2. $\square$

### Step 3: Euclidean fermionic Lagrangian

**Setup.** From [Spinor Coherence Lagrangian](/derivations/foundation/spinor-coherence-lagrangian) Theorem 2.7, the Lorentzian Dirac action on $M_A$ is

$$S_L^{\text{spinor}} = \int_{M_A}d^4x\,\sqrt{-g_A}\,\Bigl[i\hbar\,\bar\psi\gamma^\mu\nabla_\mu\psi - mc^2\,\bar\psi\psi\Bigr]$$

with $\{\gamma^\mu, \gamma^\nu\} = 2\eta^{\mu\nu}\mathbf{1}$ in signature $(+,-,-,-)$.

**Proposition 3.1 (Euclidean Dirac action).** *Under the Wick rotation of Proposition 1.1 and standard Euclidean conventions, the Dirac action on $M_A^E$ is*

$$S_E^{\text{spinor}}[\bar\psi, \psi] = \int_{M_A^E}d^4x_E\,\sqrt{g_E}\,\bar\psi\bigl(\gamma^\mu_E\nabla_\mu + m\bigr)\psi$$

*where:*

- *The Euclidean gamma matrices $\gamma^\mu_E$ satisfy $\{\gamma^\mu_E, \gamma^\nu_E\} = 2\delta^{\mu\nu}\mathbf{1}$ (positive-definite signature), with $\gamma^0_E := i\gamma^0$ and $\gamma^i_E := \gamma^i$.*
- *$\bar\psi$ and $\psi$ are treated as **independent Grassmann fields** — not hermitian conjugates (standard Euclidean Dirac convention; see Zinn-Justin, *Quantum Field Theory and Critical Phenomena*, §5.1).*
- *$\nabla_\mu$ is the $M_A^E$-covariant Dirac operator with spin connection from the $M_A^E$ tetrad.*
- *$\psi$ is $\tau$-anti-periodic with period $\beta_A$ (Remark 1.3).*

*Proof.* Direct Wick rotation of the Dirac action (Zinn-Justin §5.1; Peskin–Schroeder §9.6). The convention $\gamma^0_E = i\gamma^0$ gives $\{\gamma^\mu_E, \gamma^\nu_E\} = 2\delta^{\mu\nu}$. The $i\bar\psi\gamma^0\partial_t\psi$ Lorentzian kinetic piece becomes $\bar\psi\gamma^0_E\partial_\tau\psi$ (real under Euclidean conjugation, as required). The mass term's sign follows from the $\mathcal{L}_E = -\mathcal{L}_L|_{\text{Wick}}$ convention. $\square$

**Proposition 3.2 (Euclidean Majorana action).** *For a Majorana field $\nu$ satisfying the Majorana condition $\nu^c = \nu$ (from [Spinor Coherence Lagrangian](/derivations/foundation/spinor-coherence-lagrangian) Theorem 5.3 or [Neutrino Masses](/derivations/particles/neutrino-masses) Theorem 1.3), the Euclidean action on $M_A^E$ is*

$$S_E^{\text{Majorana}}[\nu] = \tfrac12\int_{M_A^E}d^4x_E\,\sqrt{g_E}\,\nu^T C\bigl(\gamma^\mu_E\nabla_\mu + M\bigr)\nu$$

*with $C$ the charge-conjugation matrix. The factor of $1/2$ reflects the Majorana condition; Grassmann Gaussian integration yields a Pfaffian rather than a determinant.*

*Proof.* Standard Euclidean Majorana formalism (Wetterich 1990; Zinn-Justin §5.1). $\square$

**Proposition 3.3 (Euclidean Lichnerowicz identity).** *The square of the Euclidean Dirac operator on $M_A^E$ is*

$$\bigl(\gamma^\mu_E\nabla_\mu\bigr)^2 = g_E^{\mu\nu}\nabla_\mu\nabla_\nu - \frac{R_E}{4} = \Box_E - \frac{3}{L_A^2}$$

*where the last equality uses $R_E = 12/L_A^2$ for the Euclidean de Sitter patch. The Laplacian $\Box_E = g_E^{\mu\nu}\nabla_\mu\nabla_\nu$ is negative-semi-definite in Euclidean signature.*

*Proof.* Direct application of the Lichnerowicz identity (Lawson–Michelsohn, *Spin Geometry*, §II.8) in Euclidean signature using $R_E = 12/L_A^2$ for the 4-sphere-like curvature at radius $L_A$. $\square$

**Remark 3.4 (Grassmann path integration).** The Euclidean Dirac action is bilinear in Grassmann fields $\bar\psi, \psi$. The path integral

$$Z = \int\mathcal{D}\bar\psi\,\mathcal{D}\psi\,e^{-S_E^{\text{spinor}}[\bar\psi,\psi]}$$

is Grassmann Gaussian and evaluates to $\det(\gamma^\mu_E\nabla_\mu + m)$ — a determinant in the numerator, not the denominator as for bosonic Gaussian integrals. The Majorana case gives a Pfaffian $\mathrm{Pf}(C\cdot(\gamma^\mu_E\nabla_\mu + M)) = \sqrt{\det(\cdots)}$. These determinantal factors are the fermion one-loop prefactors multiplying any bosonic-sector bounce saddle and are the source of, e.g., the top-quark contribution to the Standard Model Higgs effective potential.

### Step 4: Cross-observer consistency

**Setup.** The Wick rotation of Proposition 1.1 is defined on each observer's patch $M_A$ individually, using that observer's own static Killing vector. For observers $A, B$ sharing a Type III relation $I_{AB}$ with restriction morphism $\rho_{AB}: M_A|_{I_{AB}} \to M_B|_{I_{AB}}$ (from [Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Definition 1.2), the induced Wick-rotated restriction $\rho_{AB}^E$ between the Euclidean patches must be consistently defined.

**Proposition 4.1 (Cross-observer compatibility).** *The induced Wick-rotated restriction morphism*

$$\rho_{AB}^E: M_A^E|_{I_{AB}} \to M_B^E|_{I_{AB}}$$

*is well-defined. Both sides identify the same level-$(n+1)$ relational content at their common slice. No additional postulate is required; the compatibility is inherited from the observer-projected-spacetime presheaf structure.*

*Proof.* The Type III relation $I_{AB}$ carries level-$(n+1)$ relational coherence content ([Coherence Conservation](/derivations/axioms/coherence-conservation) Proposition 5.7). On $M_A$, this content lives on a distinguished timelike worldline $\gamma_B^{(A)}$ with periodicity $T_B$; on $M_B$, on $\gamma_A^{(B)}$ with periodicity $T_A$. Each patch's Wick rotation acts on its own static Killing vector ($\partial_{t_A}$ for $M_A$; $\partial_{t_B}$ for $M_B$) and Wick-rotates its own partner line with respect to its own ambient time structure. The restriction morphism $\rho_{AB}^E$ identifies the two resulting Euclidean worldlines as *the same* relational invariant content embedded into the two patches' Euclidean sections; the relational coherence (a scalar quantity) is invariant under the embedding, so the identification is consistent at the level of Euclidean action integrals over the shared content. $\square$

**Remark 4.2.** This is a weaker claim than "the two Euclidean patches glue into a single Euclidean manifold" — the framework's observer-projected structure does not admit a single global Euclidean spacetime any more than it admits a single global Lorentzian one. What Proposition 4.1 establishes is that the relational content — which is all that enters bounce-action integrals and other observables of physical interest — is invariantly defined across observers.

### Step 5: Boundedness

**Proposition 5.1 (Boundedness of the bosonic action).** *For scalar fields $\phi$ satisfying $V(\phi) \geq 0$ (which holds by [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) Theorem 2.2(a)), gauge fields with finite norm, and metric configurations near the classical $M_A^E$ background, the bosonic Euclidean action is bounded below, with the gravitational sector handled by the standard Gibbons–Hawking–Perry prescription.*

*Proof.* Each of the scalar kinetic, scalar potential, and gauge kinetic terms is manifestly $\geq 0$ under Euclidean positive-definite contractions. The gravitational action's conformal-mode problem is resolved by contour deformation along the imaginary axis for the conformal factor (Gibbons–Hawking–Perry 1978), giving a bounded path integral. At the level of bounce calculations for sub-Planckian fields, gravitational fluctuations are suppressed by $M_{\mathrm{Pl}}^{-2}$ and the conformal-mode issue does not affect leading-order results. $\square$

**Remark 5.2 (fermion sector).** The Euclidean fermion action is bilinear in Grassmann variables and has no conventional "positivity" — the relevant criterion is the determinant of $(\gamma^\mu_E\nabla_\mu + m)$ (Dirac) or the Pfaffian (Majorana). These are non-zero for generic mass $m \neq 0$ on $M_A^E$ by the Lichnerowicz identity (Proposition 3.3): the operator's spectrum avoids zero when $m^2 \neq R_E/4 = 3/L_A^2$ (the cosmological-scale fermion mass, negligible for fundamental particles).

## Physical Interpretation

| Framework concept | Standard physics |
|---|---|
| Static Killing vector $\xi_A = \partial_t$ | Observer's rest-frame time |
| Wick rotation $t \to -i\tau$ | Euclidean time |
| Conical-singularity avoidance at horizon | Hawking's original argument for BH temperature |
| Gibbons–Hawking period $\beta_A$ | Thermal inverse temperature of the vacuum |
| Euclidean $M_A^E$ | Static-patch 4-sphere (de Sitter Euclidean continuation) |
| Grassmann $\bar\psi, \psi$ anti-periodic | Thermal fermion boundary conditions |
| Lichnerowicz identity $D^2 = \Box - R/4$ | Dirac operator square on curved manifold |
| Cross-observer compatibility | Presheaf agreement on shared content |

## Consistency Model

**Theorem 6.1.** *On the minimal observer's projected patch $M_A$ (de Sitter radius $L_A = cT_A/2$), the Euclidean Coherence Lagrangian reproduces standard thermal de Sitter field theory with Gibbons–Hawking temperature $T_{\mathrm{GH},A} = \hbar/(\pi k_B T_A)$.*

*Verification:*
- *Wick rotation (Proposition 1.1) gives the standard Euclidean de Sitter metric on the static patch.*
- *Periodicity (Proposition 1.2) matches the standard Gibbons–Hawking (1977) result.*
- *Boson/fermion boundary conditions (Remark 1.3) match standard KMS thermal field theory.*
- *Lichnerowicz identity (Proposition 3.3) with $R_E = 12/L_A^2$ matches standard $S^4$ curvature result.*

*All structural elements reduce to standard thermal de Sitter QFT in the appropriate limit. $\square$

## Rigor Assessment

**Fully rigorous:**
- Propositions 1.1, 1.2: Wick rotation and Gibbons–Hawking period (standard de Sitter thermal field theory)
- Propositions 2.1, 3.1, 3.2: Euclidean bosonic and fermionic actions (standard QFT Wick-rotation rules)
- Proposition 3.3: Lichnerowicz identity [Lichnerowicz, 1963]
- Proposition 4.1: Cross-observer compatibility (inherits from [Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) presheaf structure)
- Proposition 5.1: Bosonic boundedness [Gibbons–Hawking–Perry, 1978]
- Theorem 6.1: Consistency with standard thermal de Sitter QFT

**Assessment:** Derived. All structural content is standard QFT Wick-rotation applied to the framework's already-derived Lorentzian Lagrangian. The framework-specific content — that the rotation lives on observer-projected spacetime rather than a shared background — inherits consistency from Observer-Projected Spacetime Definition 1.2. No structural postulates introduced.

## Open Gaps

1. **Euclidean–Lorentzian correspondence at cosmological scales.** For observables with characteristic scale comparable to $L_A$ (cosmological scale), the simple Wick rotation may receive corrections from boundary conditions at the de Sitter horizon. Addressing these requires Coleman–De Luccia-type analysis of bubble nucleation on curved backgrounds. Not relevant for sub-cosmological bounces (fermion-mass scales) targeted by [Coherence Bounces](/derivations/particles/coherence-bounces), but an open question for cosmological applications.

2. **Infinite-dimensional rigor.** The derivation assumes finite-dimensional observer Hilbert spaces. For quantum field theory (infinite-dimensional state spaces), the Wick rotation inherits the standard functional-analytic issues shared with all continuum QFT; no framework-specific new issues arise at this layer.

<!-- References -->
[Lichnerowicz, 1963]: /references#lichnerowicz-1963
[Gibbons–Hawking–Perry, 1978]: /references#gibbons-hawking-perry-1978
