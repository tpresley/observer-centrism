---
title: "Renormalization Group from Coherence"
status: "stub"
dependsOn: ["thermodynamics/entropy", "thermodynamics/action-planck"]
enablesDerivation: ["cosmology/coupling-constants"]
tags: ["thermo-ext"]
summary: "Deriving the renormalization group as coherence redistribution across scales, connecting UV and IR physics through the bootstrap hierarchy"
rigorLevel: "informal"
lastUpdated: 2026-03-09
---

## Target

**Derive the renormalization group (RG) as the coherence analog of coarse-graining: integrating out short-distance coherence modes transfers coherence from UV to IR, and the 'running' of couplings tracks this redistribution.**

The RG is the central tool of modern quantum field theory, explaining how physics changes with energy scale. The framework does not yet address scale dependence or running couplings. The entropy derivation shows that coherence redistributes irreversibly (second law), and the bootstrap mechanism shows that structure forms hierarchically. RG flow should be the scale-dependent version of these mechanisms.

## Prior Work

The extension paper on plateau equivalence (idea #16) proposed that the FRG flow equation is the radial (in $\ln k$) expression of the OC coherence continuity law $\nabla_\mu J^\mu = 0$. The anomalous dimension $\eta$ measures coherence flux across scale shells, and $d\eta/d(\ln k) = 0$ means zero divergence — a flux equilibrium (the plateau).

The transferable insight: RG flow is not just a computational tool but has a physical interpretation as coherence redistribution across scales. The framework's coherence conservation axiom should constrain the form of RG equations, and the bootstrap hierarchy's fixed points should correspond to RG fixed points.

## Proposed Approach

1. **Scale-dependent coherence**: Define a scale-dependent coherence measure $C_k$ that counts the coherence accessible above scale $k$ (analogous to the Wilsonian effective action). By coherence conservation, what is integrated out at scale $k$ must appear as effective interactions at scale $k$.
2. **Coherence flow equation**: The rate of change of $C_k$ with scale gives a flow equation:
   $$\frac{dC_k}{d(\ln k)} = \beta_C(C_k)$$
   This is the coherence analog of the Wetterink-Morris exact RG equation.
3. **Bootstrap fixed points as RG fixed points**: Each level of the bootstrap hierarchy (interactions/bootstrap) is a fixed point where the coherence dynamics stabilize. These should correspond to RG fixed points where $\beta_C = 0$.
4. **Running couplings**: Near each fixed point, linearizing the flow gives the anomalous dimensions and running coupling constants. The mass hierarchy's exponential tunneling between fixed points corresponds to RG running between widely separated scales.
5. **Asymptotic behavior**: UV completeness (the framework is defined at all scales via the axioms) corresponds to asymptotic safety or asymptotic freedom. The specific behavior depends on the gauge structure.

### Structural Postulate Needed

Likely: **Scale decomposition** — the coherence measure admits a decomposition by characteristic scale $k$, such that modes at different scales can be treated independently (at least approximately). This is the Wilsonian assumption, formalized in the coherence language.

## Key Challenges

1. **Defining scale**: In the framework, what is "scale"? In standard QFT, it's energy/momentum. In the framework, it could be: the number of relational invariants involved (bootstrap level), the spatial extent of the coherence pattern, or the phase frequency (via $E = \hbar\omega$). These should be equivalent, but showing this requires the full geometric and quantum derivations.
2. **Functional RG vs. perturbative RG**: The framework should give the exact (functional) RG, not just the perturbative $\beta$-functions. This is more powerful but technically demanding.
3. **Connection to gauge couplings**: Extracting the running of $\alpha_s$, $\alpha_{em}$, $\sin^2\theta_W$ requires the full gauge structure (Standard Model Gauge Group stub). This derivation provides the general framework; coupling constant predictions require the gauge derivations as input.
4. **UV completeness**: The framework's axioms are exact (no cutoff). Does this mean the theory is UV complete? If so, the RG flow should be well-defined at all scales, with no Landau poles.

## Connection to Existing Derivations

| Prerequisite | What it provides |
|---|---|
| [Entropy](/derivations/thermodynamics/entropy) | Coherence redistribution as irreversible process |
| [Action and Planck's Constant](/derivations/thermodynamics/action-planck) | Energy-scale correspondence via $E = \hbar\omega$ |
| [Bootstrap Mechanism](/derivations/interactions/bootstrap) | Hierarchical fixed-point structure |
| [Mass Hierarchy](/derivations/particles/mass-hierarchy) | Exponential tunneling between fixed points |

**What this enables**: Coupling Constant Relationships (scale-dependent couplings needed for predictions at $M_Z$).

## Success Criteria

1. Define scale-dependent coherence $C_k$ from the framework's axioms
2. Derive a coherence flow equation (exact RG analog)
3. Show that bootstrap fixed points correspond to RG fixed points
4. Recover the standard one-loop $\beta$-function coefficients for known gauge theories
5. Address UV completeness — show whether the theory has Landau poles or is asymptotically safe
