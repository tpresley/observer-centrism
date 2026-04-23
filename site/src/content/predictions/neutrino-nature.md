---
title: "Neutrino Mass Ordering and Majorana Nature"
status: "semi-quantitative"
testability: "near-future"
dependsOn: ["particles/neutrino-masses", "particles/three-generations", "flavor/mixing-angles"]
currentEvidence: "NOvA and T2K combined data show mild (~2σ) preference for normal ordering; neutrinoless double-beta decay not yet observed, consistent with normal-ordering Majorana expectation |m_ββ| ~ 1-5 meV; no heavy sterile neutrinos at 10²-10³ GeV observed at colliders."
distinctiveness: "shared"
---

## Prediction

The framework makes three linked predictions about the neutrino sector:

1. **Normal mass ordering**: $m_1 < m_2 < m_3$. The inverted ordering ($m_3 < m_1 \approx m_2$) is excluded because it would require the third-generation Dirac Yukawa coupling to be suppressed relative to the first two, contradicting the universal winding-axis hierarchy that governs all fermion masses.

2. **Majorana nature**: Neutrinos are their own antiparticles (self-conjugate windings). This follows from the pseudo-real representation structure of $SU(2)_L$: the fundamental representation satisfies $\sigma_2 \sigma_i^* \sigma_2 = -\sigma_i$, making the conjugate representation equivalent to the fundamental. Fermions in pseudo-real representations admit self-conjugate winding configurations, which generate Majorana mass terms via the seesaw mechanism.

3. **Heavy Majorana mass at the electroweak scale**: $M_R \sim 10^2{-}10^3$ GeV (not $10^{14}{-}10^{16}$ GeV as in standard GUT seesaw scenarios). This is a framework-distinctive quantitative prediction — **eleven orders of magnitude below the standard expectation** — and follows rigorously from three facts ([Neutrino Mass Mechanism](/derivations/particles/neutrino-masses), Theorem 3.1): (a) the right-handed neutrino $\nu_R$ is a complete Standard Model gauge singlet, so its Majorana mass term is not protected by any gauge symmetry; (b) the only available mass scale after electroweak crystallization is $v = 246$ GeV; (c) cosmological neutrino-mass bounds plus perturbativity constrain the dimensionless Yukawa coupling to $y_R \sim O(1{-}10)$. Heavy Majorana neutrinos in this mass range are in principle accessible to current and future collider searches (LHC, FCC).

## Derivation Sketch

1. The $SU(2)_L$ fundamental representation is pseudo-real ($\mathbf{2} \cong \bar{\mathbf{2}}$ via $\sigma_2$)
2. Fermions in pseudo-real representations have self-conjugate windings $\to$ Majorana mass terms
3. Charged fermions ($SU(3)$ or $U(1)_{\text{em}}$ charged) cannot be Majorana because charge conservation forbids it; only neutrinos (neutral under unbroken gauge symmetries) realize the Majorana option
4. The seesaw mechanism $m_\nu \sim v^2 / M_R$ explains the lightness of observed neutrinos
5. Normal ordering follows from the universal winding-axis hierarchy: $y_{\nu_3} > y_{\nu_2} > y_{\nu_1}$ gives $m_3 > m_2 > m_1$

## Current Evidence

Current oscillation data (NOvA, T2K, Super-Kamiokande atmospheric) mildly favor normal ordering at $\sim 2\sigma$. No neutrinoless double-beta decay ($0\nu\beta\beta$) signal has been observed. For normal ordering with $m_1 \lesssim 10$ meV (cosmological bound, Planck 2018), the effective Majorana mass is $|m_{\beta\beta}| \sim 1$-$5$ meV — below current experimental sensitivity but within reach of next-generation experiments. The framework's seesaw estimate with $\epsilon_\nu \sim 10^{-5}$ and $y_R \sim O(1)$ gives $m_{\nu_3} \sim 0.025$ eV ([Neutrino Mass Mechanism](/derivations/particles/neutrino-masses), Proposition 4.1) — in the correct phenomenological range but with an order-of-magnitude uncertainty from the unresolved winding-overlap coefficient $\epsilon_\nu$. No evidence for heavy sterile neutrinos at the electroweak scale has been reported by LHC searches to date; current exclusion limits do not yet cover the entire framework-predicted $M_R$ range.

## Key Experiments

| Experiment | Target | Timeline |
|---|---|---|
| JUNO | Mass ordering via reactor $\bar{\nu}_e$ disappearance | Operating; result expected late 2020s |
| DUNE | Mass ordering via $\nu_\mu \to \nu_e$ appearance | First physics ~2030 |
| LEGEND-1000 | $0\nu\beta\beta$ in $^{76}$Ge ($|m_{\beta\beta}|$ down to $\sim 10$ meV) | Construction; data ~2030s |
| nEXO | $0\nu\beta\beta$ in $^{136}$Xe ($|m_{\beta\beta}|$ down to $\sim 5$ meV) | Proposed; data ~2030s |
| LHC / HL-LHC | Heavy sterile-$\nu$ searches in $M_R \sim 10^2{-}10^3$ GeV window | Ongoing |
| FCC-ee / FCC-hh | Direct $\nu_R$ production at electroweak / TeV scales | 2040+ |

## Falsification Conditions

- **Inverted ordering confirmed**: If JUNO or DUNE definitively establish $m_3 < m_1$, the universal winding-axis hierarchy is falsified.
- **Dirac neutrinos confirmed**: If $0\nu\beta\beta$ is absent at the level $|m_{\beta\beta}| < 1$ meV with normal ordering confirmed (ruling out Majorana), the pseudo-real representation argument is falsified.
- **$M_R$ observed at GUT scale**: If heavy sterile neutrinos are detected at $\sim 10^{14}$ GeV or above (or equivalently ruled out at the electroweak scale with no alternative consistent mechanism), the framework's electroweak-scale $M_R$ prediction is falsified.
- **Detection of $0\nu\beta\beta$ is consistent**: A positive signal would confirm the Majorana prediction.

## Distinctiveness

The normal-ordering prediction is **shared** with many other frameworks (it is the "default" expectation from hierarchical Yukawa structures). The Majorana prediction is also shared with standard seesaw models. The **electroweak-scale $M_R$ prediction is framework-distinctive**: standard type-I seesaw typically places $M_R$ near the GUT scale ($\sim 10^{14}$ GeV), driven by a hypothetical unified gauge coupling at high energies; the framework's bootstrap hierarchy has no such scale, so the Majorana mass is pinned at $v$ by 't Hooft naturalness. The combination — Majorana nature derived specifically from the pseudo-real $SU(2)$ representation structure of the framework, ordering derived from the same winding-axis hierarchy that produces charged lepton masses, and $M_R$ pinned at the electroweak scale by gauge-singlet naturalness plus the framework's absence of intermediate scales — is distinctive in its economy: no new particles or symmetries are introduced beyond what the axioms already provide.

## Quantitative Status

This prediction is **semi-quantitative**: it specifies (i) a specific categorical ordering ($m_1 < m_2 < m_3$, rigorous), (ii) a specific representation-theoretic category (Majorana, rigorous from pseudo-real $SU(2)_L$), (iii) a specific numerical scale for the heavy Majorana mass ($M_R \sim 10^2{-}10^3$ GeV, rigorous from gauge non-protection + naturalness), and (iv) a specific order-of-magnitude estimate for the light neutrino mass ($m_{\nu_3} \sim 0.025$ eV, semi-formal — depends on the unresolved $\epsilon_\nu$ coefficient). What is missing — and would promote to fully quantitative — is (a) computing the winding-overlap coefficient $\epsilon_\nu$ from first principles to pin absolute neutrino masses, and (b) computing the two Majorana CP phases $\alpha_1, \alpha_2$ from the $A_5$ breaking pattern to pin $|m_{\beta\beta}|$ within the normal-ordering envelope. Both items are tracked as [Neutrino Mass Mechanism](/derivations/particles/neutrino-masses) Gaps 1 and 2. Gap 2 in particular extends [Flavor Mixing](/derivations/flavor/mixing-angles) Step 6, which currently covers only the Dirac CP phase $\delta$.
