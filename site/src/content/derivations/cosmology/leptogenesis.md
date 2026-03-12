---
title: "Leptogenesis"
status: "stub"
dependsOn: ["cosmology/baryogenesis", "particles/neutrino-masses", "flavor/mixing-angles"]
enablesDerivation: []
tags: ["cosmology", "baryogenesis", "neutrino", "cp-violation"]
summary: "If neutrinos are Majorana particles (as the framework predicts), heavy right-handed neutrino decays generate a lepton asymmetry that sphalerons convert to the observed baryon asymmetry."
rigorLevel: "informal"
lastUpdated: 2026-03-11
---

## Statement

**Target Theorem.** The Majorana neutrino mass mechanism (Derivation: [Neutrino Masses](/derivations/particles/neutrino-masses)) combined with the PMNS CP phases (Derivation: [Mixing Angles](/derivations/flavor/mixing-angles)) generates a lepton asymmetry $\eta_L$ through heavy right-handed neutrino decays, which $SU(2)_L$ sphalerons partially convert to the baryon asymmetry:

$$\eta_B = \frac{28}{79}\, \eta_L \sim 6 \times 10^{-10}$$

consistent with observation.

## Motivation

The [Baryogenesis](/derivations/cosmology/baryogenesis) derivation establishes that the framework satisfies the Sakharov conditions via coherence-dual pair CP violation. However, the CKM CP phase alone is too small to generate sufficient asymmetry. The framework predicts Majorana neutrinos with potentially large PMNS CP phases, opening a more efficient leptogenesis pathway:

1. Heavy right-handed neutrinos (from the seesaw mechanism in [Neutrino Masses](/derivations/particles/neutrino-masses)) decay out of equilibrium in the early universe
2. CP violation in the decays generates a lepton asymmetry
3. $B+L$-violating sphalerons convert the lepton asymmetry to a baryon asymmetry while preserving $B-L$

## Derivation Strategy

1. **Majorana mass spectrum**: From the [Neutrino Masses](/derivations/particles/neutrino-masses) seesaw mechanism, determine the heavy right-handed neutrino mass scale $M_R$.

2. **CP asymmetry parameter**: Compute the CP asymmetry $\varepsilon_i$ in heavy neutrino decays $N_i \to \ell H$ from the interference of tree and loop diagrams, using the PMNS phases from [Mixing Angles](/derivations/flavor/mixing-angles).

3. **Washout and efficiency**: Estimate the washout factor $\kappa$ from inverse decays and scattering processes. The efficiency depends on $\tilde{m}_1 = (Y_\nu^\dagger Y_\nu)_{11} v^2 / M_1$.

4. **Sphaleron conversion**: Apply the sphaleron conversion factor $28/79$ to obtain $\eta_B$ from $\eta_L$.

5. **Consistency check**: Verify that the predicted $\eta_B$ is consistent with the CMB-measured value $\eta_B = (6.14 \pm 0.02) \times 10^{-10}$.

## Dependencies

| Derivation | What it provides |
|---|---|
| [Baryogenesis](/derivations/cosmology/baryogenesis) | Sakharov conditions, sphaleron mechanism |
| [Neutrino Masses](/derivations/particles/neutrino-masses) | Majorana nature, seesaw mechanism, $M_R$ scale |
| [Mixing Angles](/derivations/flavor/mixing-angles) | PMNS CP phases |

## Open Gaps

**Gap 1.** The heavy right-handed neutrino mass scale $M_R$ is not precisely determined by the [Neutrino Masses](/derivations/particles/neutrino-masses) derivation. The leptogenesis asymmetry is sensitive to this scale — the Davidson-Ibarra bound requires $M_1 \gtrsim 10^9$ GeV for sufficient asymmetry.

**Gap 2.** The PMNS CP phases are constrained by the [Mixing Angles](/derivations/flavor/mixing-angles) derivation but not numerically predicted. The Dirac phase $\delta_{CP}$ and Majorana phases $\alpha_{21}, \alpha_{31}$ all contribute to leptogenesis.

**Gap 3.** Resonant leptogenesis (when two heavy neutrinos are nearly degenerate) could relax the mass-scale bound. Whether the framework's seesaw mechanism produces the requisite near-degeneracy is unknown.

## Addresses Gaps In

- [Baryogenesis](/derivations/cosmology/baryogenesis), Gap: "If neutrinos are Majorana... right-handed neutrino decays could generate $\eta_B$ through leptogenesis. Derive the neutrino mass mechanism and the lepton CP phases."
- [Neutrino Masses](/derivations/particles/neutrino-masses), Gap: "Majorana neutrinos enable leptogenesis as a baryogenesis mechanism. The connection to the Baryogenesis derivation should be made explicit."
