---
title: "No False Vacuum Decay"
status: "qualitative"
testability: "currently-tested"
dependsOn: ["gauge/electroweak-breaking", "foundation/coherence-lagrangian", "particles/coherence-bounces"]
currentEvidence: "Universe persists 13.8 Gyr without observed bubble-nucleation events. Precision m_t and m_h measurements place the SM-extrapolated Higgs quartic near the stability/metastability boundary, but the framework rejects this extrapolation as exceeding the SM's validity range."
distinctiveness: "shared"
---

## Prediction

The observed electroweak vacuum will not decay via Coleman bubble-nucleation into a deeper vacuum. There is no metastable false-vacuum scenario for the framework's universe — neither now nor in the future.

**Hard prediction**: No bubble-nucleation event of the standard false-vacuum kind. A confirmed nucleation event of any size would falsify.

**Soft prediction**: The radiative running of the Higgs self-coupling does not extend usefully past the next bootstrap level. SM extrapolations carrying $\lambda(\mu)$ to $\mu \sim M_P$ are category errors against the framework's UV completion structure, regardless of whether they suggest stability or metastability at the Planck scale.

## Derivation Sketch

1. The framework derives the Higgs potential structurally from the [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) rather than postulating it. The derived form is $V(\phi) = m^2|\phi|^2 + \lambda|\phi|^4$ with the EWSB direction selected by coherence crystallization ([Electroweak Symmetry Breaking](/derivations/gauge/electroweak-breaking) Theorem 1.3).

2. This potential has exactly one minimum modulo the $SU(2)_L$ orbit of the broken phase. There is no second minimum at any field value.

3. [Coherence Bounces](/derivations/particles/coherence-bounces) Remark 3.2 makes this explicit at the Lagrangian level: the framework's quartic potential admits no Coleman bounce because there is no metastable false vacuum with a barrier to tunnel through.

4. The standard SM metastability argument relies on running the Higgs quartic to the Planck scale, where for the measured top quark and Higgs masses it extrapolates negative — implying a deeper minimum at Planck-scale field values.

5. [Electroweak Symmetry Breaking](/derivations/gauge/electroweak-breaking) Theorem 5.1 (hierarchy protection) identifies the effective ultraviolet cutoff for electroweak physics as the next bootstrap level, not the Planck scale. The running terminates structurally well before the quartic could turn negative.

6. Even granting an alternative interpretation in which multiple coherence-supporting bootstrap fixed points exist, transit between them would require a transitional region failing the axioms. No coherence-conserving decay path connects observation-supporting configurations.

## What This Rules Out

| Scenario | Status |
|---|---|
| Coleman bubble-nucleation from the electroweak vacuum | **Excluded** — no second minimum in derived potential |
| SM-extrapolation metastability scenario (quartic negative at $\sim 10^{10}$ GeV) | **Excluded** — running cuts off at next bootstrap level, not Planck scale |
| Any future false-vacuum decay event | **Excluded** — observed vacuum is the unique stable configuration the bootstrap produces |
| Past vacuum transitions (EWSB, QCD confinement) | **Permitted** — these are completed thermodynamic crystallizations to the unique vacuum, not metastable phases |
| Vacuum fluctuations and zero-point activity | **Permitted** — vacuum has dynamic structure but no path to a deeper minimum |

## Connection to Other Predictions

The hierarchy-protection argument behind this prediction also underlies the [Great Desert](/predictions/great-desert): both rest on the framework's UV cutoff being the next bootstrap level rather than the Planck scale. Together they constrain the energy frontier — no new particles, no new vacuum structure, no new physics between the electroweak scale and the next bootstrap level.

The vacuum-uniqueness reading connects to:
- [No Phantom Dark Energy](/predictions/no-phantom-dark-energy) — both rule out catastrophic vacuum-restructuring scenarios that would destroy coherence carriers
- [Exact Unitarity](/predictions/exact-unitarity) — both require the universe to remain itself: no spontaneous-collapse transitions, no false-vacuum decay
- The cosmological constant's positive lower bound from per-observer coherence accounting in [Observer Loop Viability](/derivations/cosmology/observer-loop-viability)

These cluster into a single structural commitment: the framework's vacuum is constructively determined, not selected from alternatives, and has no path to a different configuration.

## Current Evidence

The universe has persisted approximately 13.8 Gyr without observed bubble-nucleation events. This is consistent with the prediction but also consistent with very long metastability lifetimes in SM extrapolations, so cosmic age alone does not favor the framework over the SM-metastable scenario.

Precision measurements of the top quark mass ($m_t \approx 172.5$ GeV) and Higgs mass ($m_h \approx 125.1$ GeV) by ATLAS, CMS, and Tevatron place the SM-extrapolated Higgs quartic near the stability/metastability boundary at high field values. The framework rejects this extrapolation as exceeding the SM's validity range, but the empirical question of where the running actually terminates is currently undetermined. Improvements in $m_t$ and $m_h$ precision will sharpen the SM extrapolation but cannot directly probe the framework's bootstrap-level cutoff.

Searches for cosmological signatures of past or distant bubble-nucleation events — primordial-black-hole signatures, CMB anomalies, gravitational-wave backgrounds from first-order phase transitions — have placed no constraints inconsistent with the framework.

## Distinctiveness

The conclusion (universe is stable against vacuum decay) is shared with several other approaches:
- Beyond-Standard-Model extensions in which new bosons or symmetries stabilize the running
- Anthropic arguments that select for stable vacua among a population
- Some quantum-gravity scenarios in which Planck-scale physics modifies the high-energy potential

The framework's distinctive contribution is the route to the conclusion. The Higgs potential is *derived* with single-minimum structure rather than *fitted* to observed metastability. The SM running is *structurally* terminated at the next bootstrap level rather than ad-hoc-modified by new physics. The vacuum is *constructively* unique under the bootstrap construction (modulo Conjecture 7.2 of [Bootstrap Mechanism](/derivations/interactions/bootstrap)) rather than one stable point among many. The framework predicts no false vacuum decay because the framework's universe has no second vacuum to decay to and no surviving path to one even if such a configuration could be specified.

## Quantitative Status

This prediction is **qualitative**. There is no numerical bound on a continuous parameter; the claim is structural — about the shape of the derived Higgs potential and the validity range of radiative running.

Promotion to **semi-quantitative** would require either:

1. A framework-internal calculation of the bootstrap-level UV cutoff in physical units (currently the framework identifies "the next bootstrap level" structurally but does not compute its numerical scale).
2. A direct prediction of the Higgs self-coupling $\lambda(\mu)$ at framework-relevant scales, distinguishing it from SM-extrapolated values.

Promotion to **fully quantitative** would additionally require the proof of bootstrap fixed-point uniqueness (Conjecture 7.2), which would close the question of whether alternative observation-supporting configurations could exist as candidate decay endpoints. Both routes are tracked as future work in the framework's gap inventory.
