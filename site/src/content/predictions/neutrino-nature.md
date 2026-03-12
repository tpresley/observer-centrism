---
title: "Neutrino Mass Ordering and Majorana Nature"
status: "qualitative"
testability: "near-future"
dependsOn: ["particles/neutrino-masses", "particles/three-generations", "flavor/mixing-angles"]
currentEvidence: "NOvA and T2K combined data show mild (~2σ) preference for normal ordering; neutrinoless double-beta decay not yet observed, consistent with normal-ordering Majorana prediction of |m_ββ| ~ 1-5 meV"
distinctiveness: "shared"
sourceSection: "13-predictions"
---

## Prediction

The framework makes two linked predictions about the neutrino sector:

1. **Normal mass ordering**: $m_1 < m_2 < m_3$. The inverted ordering ($m_3 < m_1 \approx m_2$) is excluded because it would require the third-generation Dirac Yukawa coupling to be suppressed relative to the first two, contradicting the universal winding-axis hierarchy that governs all fermion masses.

2. **Majorana nature**: Neutrinos are their own antiparticles (self-conjugate windings). This follows from the pseudo-real representation structure of $SU(2)_L$: the fundamental representation satisfies $\sigma_2 \sigma_i^* \sigma_2 = -\sigma_i$, making the conjugate representation equivalent to the fundamental. Fermions in pseudo-real representations admit self-conjugate winding configurations, which generate Majorana mass terms via the seesaw mechanism.

## Derivation Sketch

1. The $SU(2)_L$ fundamental representation is pseudo-real ($\mathbf{2} \cong \bar{\mathbf{2}}$ via $\sigma_2$)
2. Fermions in pseudo-real representations have self-conjugate windings $\to$ Majorana mass terms
3. Charged fermions ($SU(3)$ or $U(1)_{\text{em}}$ charged) cannot be Majorana because charge conservation forbids it; only neutrinos (neutral under unbroken gauge symmetries) realize the Majorana option
4. The seesaw mechanism $m_\nu \sim v^2 / M_R$ explains the lightness of observed neutrinos
5. Normal ordering follows from the universal winding-axis hierarchy: $y_{\nu_3} > y_{\nu_2} > y_{\nu_1}$ gives $m_3 > m_2 > m_1$

## Current Evidence

Current oscillation data (NOvA, T2K, Super-Kamiokande atmospheric) mildly favor normal ordering at $\sim 2\sigma$. No neutrinoless double-beta decay ($0\nu\beta\beta$) signal has been observed. For normal ordering with $m_1 \lesssim 10$ meV, the effective Majorana mass is $|m_{\beta\beta}| \sim 1$-$5$ meV — below current experimental sensitivity but within reach of next-generation experiments.

## Key Experiments

| Experiment | Target | Timeline |
|---|---|---|
| JUNO | Mass ordering via reactor $\bar{\nu}_e$ disappearance | Operating; result expected late 2020s |
| DUNE | Mass ordering via $\nu_\mu \to \nu_e$ appearance | First physics ~2030 |
| LEGEND-1000 | $0\nu\beta\beta$ in $^{76}$Ge ($|m_{\beta\beta}|$ down to $\sim 10$ meV) | Construction; data ~2030s |
| nEXO | $0\nu\beta\beta$ in $^{136}$Xe ($|m_{\beta\beta}|$ down to $\sim 5$ meV) | Proposed; data ~2030s |

## Falsification Conditions

- **Inverted ordering confirmed**: If JUNO or DUNE definitively establish $m_3 < m_1$, the universal winding-axis hierarchy is falsified.
- **Dirac neutrinos confirmed**: If $0\nu\beta\beta$ is absent at the level $|m_{\beta\beta}| < 1$ meV with normal ordering confirmed (ruling out Majorana), the pseudo-real representation argument is falsified.
- **Detection of $0\nu\beta\beta$ is consistent**: A positive signal would confirm the Majorana prediction.

## Distinctiveness

The normal-ordering prediction is **shared** with many other frameworks (it is the "default" expectation from hierarchical Yukawa structures). The Majorana prediction is also shared with standard seesaw models. The combination — Majorana nature derived specifically from the pseudo-real $SU(2)$ representation structure of the framework, with ordering derived from the same winding-axis hierarchy that produces charged lepton masses — is distinctive in its economy: no new particles or symmetries are introduced beyond what the axioms already provide.
