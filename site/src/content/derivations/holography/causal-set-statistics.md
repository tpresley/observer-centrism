---
title: "Causal Set Statistics"
status: "stub"
dependsOn: ["holography/area-scaling", "interactions/relational-invariants"]
enablesDerivation: []
tags: ["holography", "causal-sets", "statistics"]
summary: "Compute the statistical properties of the relational invariant network as a causal set. The Poisson-sprinkled causal set statistics simultaneously quantify the holographic noise amplitude coefficient alpha_H and the dark matter density fluctuation spectrum, providing a unified statistical foundation for both primary predictions."
rigorLevel: "informal"
lastUpdated: 2026-03-11
---

## Statement

**Goal.** Derive the statistical properties of the discrete relational invariant network, treated as a Poisson-sprinkled causal set, providing quantitative input to both the holographic noise and dark matter granularity predictions.

The derivation should:

1. Establish that the relational invariant network forms a causal set with Poisson sprinkling at the Planck density
2. Compute the variance of the geodesic length estimator, yielding $\alpha_H = 1/4$ for the holographic noise amplitude
3. Derive the Poisson density fluctuation statistics for dark matter halos
4. Show the Gaussian cutoff $e^{-(k/k_J)^2}$ in the matter power spectrum from loop closure pressure
5. Demonstrate that both predictions arise from the same underlying causal set statistics

## Dependencies

This derivation requires:
- [Holographic Entropy Bound](/derivations/holography/area-scaling) — the area-scaling that sets the Planck-scale discreteness
- [Relational Invariants](/derivations/interactions/relational-invariants) — the network structure

## Cross-Predictions

This derivation would simultaneously sharpen:
- [Holographic Noise](/predictions/holographic-noise) — by deriving $\alpha_H = 1/4$ rather than bounding it
- [Dark Matter Granularity](/predictions/dark-matter-granularity) — by computing the exact cutoff scale

## Open Questions

1. Can the Poisson sprinkling assumption be derived rather than postulated?
2. What corrections arise from the non-trivial causal structure (beyond flat-space Poisson)?
3. How do the statistics change in strong gravitational fields?
