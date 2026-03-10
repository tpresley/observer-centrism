---
title: "Fisher Information Metric"
status: "stub"
dependsOn: ["thermodynamics/action-planck"]
enablesDerivation: ["thermodynamics-ext/renormalization"]
tags: ["thermo-ext"]
summary: "Deriving the Fisher information metric as the natural Riemannian geometry on the space of coherence states"
rigorLevel: "informal"
lastUpdated: 2026-03-09
---

## Target

**Derive the Fisher information metric $G_{ij}$ as the natural (and unique) Riemannian metric on the manifold of coherence states, and connect it to the framework's coherence cost.**

The Fisher information metric measures the distinguishability of nearby probability distributions: $G_{ij}(\theta) = \mathbb{E}[\partial_i \log p(x|\theta) \, \partial_j \log p(x|\theta)]$. Čencov's theorem (1972/1982) proves it is the unique Riemannian metric (up to scaling) on statistical manifolds that is invariant under sufficient statistics. If the framework's coherence states can be expressed as a statistical manifold, the Fisher metric emerges as the unique natural geometry.

## Prior Work

The earlier whitepaper (idea #2) placed the Fisher metric at the center of the framework: the second-order expansion of KL divergence defines $G_{ij}$ on the parameter manifold, with curvature corresponding to physical curvature. The current framework derives geometry differently — from coherence density gradients and loop closure — but the Action-Planck derivation's structural postulate S1 (smooth coherence measure inducing a C² metric) is closely related to the Fisher metric's role.

The transferable insight: the Fisher metric is not an assumption but a theorem. If coherence states form a statistical manifold, the Fisher metric is the unique natural geometry. This would strengthen the theoretical foundation of the Action-Planck derivation.

## Proposed Approach

1. **Coherence states as statistical manifold**: An observer's state is characterized by a probability distribution over outcomes of possible interactions (Born Rule derivation: $p(x|\psi) = |\langle x|\psi\rangle|^2$). The space of observer states is therefore a statistical manifold.
2. **Apply Čencov's theorem**: On this statistical manifold, the unique (up to scaling) monotone Riemannian metric is the Fisher metric. This requires no additional assumptions — it follows from the mathematical structure.
3. **Connect to coherence cost**: The Action-Planck derivation defines action as coherence cost. Show that the coherence cost of transitioning between nearby states is:
   $$\delta S = \frac{1}{2} G_{ij} \, d\theta^i \, d\theta^j$$
   where $G_{ij}$ is the Fisher metric on the state space. This identifies the Hessian metric in the Action-Planck structural postulate S1 with the Fisher metric.
4. **Curvature correspondence**: The Ricci curvature of the Fisher metric on the state space is related to the physical curvature via the Gravity derivation's metric-density coupling. Trace this connection explicitly.

### Structural Postulate Needed

Possibly none — if the Born Rule derivation establishes that observer states define probability distributions, Čencov's theorem applies automatically. The Fisher metric is then a theorem, not a postulate.

## Key Challenges

1. **Infinite-dimensional state space**: Quantum state spaces are infinite-dimensional (Hilbert spaces). The Fisher metric on infinite-dimensional manifolds requires functional analysis (the theory exists but is technically demanding).
2. **Connection to gravity**: The prior work claimed that Fisher curvature corresponds to physical spacetime curvature. The current framework derives gravity from coherence density gradients. The bridge between "curvature of the statistical manifold" and "curvature of spacetime" needs to be made explicit. This is the most important and most difficult step.
3. **Scaling ambiguity**: Čencov's theorem fixes the metric up to a single overall constant. This constant should be related to $\hbar$ (via the Action-Planck identification).
4. **Classical vs. quantum Fisher metric**: There are both classical and quantum versions (the latter is the Bures metric / quantum Fisher information). The quantum version is relevant here.

## Connection to Existing Derivations

| Prerequisite | What it provides |
|---|---|
| [Action and Planck's Constant](/derivations/thermodynamics/action-planck) | Coherence cost, structural postulate S1 (Hessian metric) |
| [Born Rule](/derivations/quantum/born-rule) | Probability structure on observer states |
| [Gravity](/derivations/spacetime/gravity) | Physical curvature from coherence density |

## Success Criteria

1. Show that coherence states form a statistical manifold
2. Apply Čencov's theorem to obtain the Fisher metric as the unique natural geometry
3. Identify the Fisher metric with the Hessian metric in the Action-Planck structural postulate S1
4. Fix the scaling constant in terms of $\hbar$
5. Trace the connection between Fisher curvature and physical spacetime curvature (at least at the conceptual level)
