---
title: "Black Hole Scrambling and Non-Ergodicity"
status: "provisional"
dependsOn: ["holography/black-hole-entropy", "holography/er-epr", "holography/information-paradox", "thermodynamics-ext/non-ergodicity"]
enablesDerivation: []
tags: ["holography"]
summary: "Black holes are fast scramblers within the coherence-saturated sector but non-ergodic in the full Hilbert space — resolving the tension between scrambling and fundamental non-ergodicity via sector-restricted maximal mixing"
rigorLevel: "semi-formal"
lastUpdated: 2026-04-17
---

## Overview

This derivation addresses an apparent tension: **if generic systems are non-ergodic, how can black holes be fast scramblers?**

Black holes are conjectured to be the fastest scramblers in nature — systems that spread initially localized quantum information across all degrees of freedom in the minimum possible time, $t_* \sim \beta \ln S$ where $\beta$ is the inverse temperature and $S$ is the entropy. This appears to require maximal ergodicity: the black hole explores its entire Hilbert space as quickly as causality allows. Yet the non-ergodicity derivation ([Non-Ergodicity and Conditional Thermalization](/derivations/thermodynamics-ext/non-ergodicity)) shows that generic systems are fundamentally non-ergodic due to the bootstrap hierarchy, aperiodic matching rules, and coherence correlations.

**The resolution.** Black holes are not ergodic in the full Hilbert space $\mathcal{H}$. They are maximally ergodic *within the coherence-saturated sector* — the subspace of states that saturate the holographic bound $S = A/4\ell_P^2$. This sector is a single level of the bootstrap hierarchy at which all coherence is allocated to boundary degrees of freedom, leaving no internal structure to create further partitioning. Within this sector, the absence of sub-hierarchy structure removes the barriers that prevent ergodicity in generic systems, and the matching-rule constraints collapse to a single rule (area saturation). The result is maximal scrambling within a sector, combined with non-ergodicity between sectors.

**The approach.**

1. Identify the coherence-saturated sector of the black hole Hilbert space using [Area Scaling](/derivations/holography/area-scaling) and [Black Hole Entropy](/derivations/holography/black-hole-entropy).
2. Show that within this sector, the bootstrap hierarchy collapses to a single effective level — there is no further subdivision because all coherence is boundary-allocated.
3. Show that the matching-rule constraints reduce to a single constraint (area saturation), which is automatically satisfied by all states in the sector.
4. Apply conditional ergodicity (Theorem 5.2 of [Non-Ergodicity](/derivations/thermodynamics-ext/non-ergodicity)) to conclude that the sector is ergodic.
5. Derive the scrambling time $t_* \sim \beta \ln S$ from the dimension of the saturated sector and the Lyapunov exponent set by the surface gravity.

**Why this matters.** This resolves a tension that would otherwise threaten the non-ergodicity framework. If black holes were counterexamples to non-ergodicity, the framework would be inconsistent. Instead, black holes are the *extreme case* of conditional ergodicity: systems where the sector is maximally large (saturating the holographic bound) and the within-sector dynamics are maximally mixing. They are the most ergodic systems allowed by the framework — and yet they are still non-ergodic in the full Hilbert space.

**An honest caveat.** The identification of the coherence-saturated sector with a single hierarchy level (Step 2) is a structural argument. The scrambling time derivation (Step 6) uses the Maldacena-Shenker-Stanford chaos bound, which is an external result not derived from the axioms. The loop-tilt mechanism (Step 5) uses standard GR results about Killing vectors at horizons.

## Statement

**Theorem (structural).** *A black hole of area $A$ scrambles information at the maximum rate allowed by causality within the coherence-saturated sector $\mathcal{H}_{\text{sat}} \subset \mathcal{H}$, which has dimension $\exp(A/4\ell_P^2)$. The scrambling time is $t_* = (4\pi T_H)^{-1} \ln \dim\mathcal{H}_{\text{sat}}$. The black hole is non-ergodic in the full Hilbert space $\mathcal{H}$ because states outside $\mathcal{H}_{\text{sat}}$ are separated by coherence gaps (hierarchy barriers) from the saturated sector.*

## Derivation

### Step 1: The Coherence-Saturated Sector

**Definition 1.1.** For a region of area $A$, the **coherence-saturated sector** $\mathcal{H}_{\text{sat}}$ is the subspace of the Hilbert space consisting of states that saturate the holographic bound:

$$\mathcal{H}_{\text{sat}} = \{|\psi\rangle \in \mathcal{H} : S_{\text{ent}}(|\psi\rangle) = A / 4\ell_P^2\}$$

where $S_{\text{ent}}$ is the entanglement entropy across the boundary of the region ([Area Scaling](/derivations/holography/area-scaling), Theorem 4.1).

**Proposition 1.2.** *$\dim\mathcal{H}_{\text{sat}} = \exp(A/4\ell_P^2)$. This is the Bekenstein-Hawking entropy $S_{BH}$ ([Black Hole Entropy](/derivations/holography/black-hole-entropy), Theorem 3.1).*

### Step 2: Hierarchy Collapse in the Saturated Sector

**Proposition 2.1 (Single effective level).** *Within $\mathcal{H}_{\text{sat}}$, the bootstrap hierarchy collapses to a single effective level. All coherence is allocated to boundary (horizon) degrees of freedom, leaving no residual coherence for internal hierarchical structure.*

*Argument.* The bootstrap hierarchy requires coherence allocation across multiple levels: coherence binds sub-observers into observers at each level ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Definition 2.1). In $\mathcal{H}_{\text{sat}}$, the total coherence is $\mathcal{C} = A/4\ell_P^2$ (in natural units), which is entirely accounted for by the horizon area. If any coherence were allocated to internal hierarchy structure, the boundary coherence would be less than $A/4\ell_P^2$, contradicting saturation. Therefore, in the saturated sector, all coherence is boundary-localized and the internal hierarchy is trivial (single effective level). $\square$

### Step 3: Matching-Rule Reduction

**Proposition 3.1.** *In $\mathcal{H}_{\text{sat}}$, the aperiodic matching rules reduce to a single constraint: the total boundary coherence equals $A/4\ell_P^2$. All states satisfying this constraint are in the sector, and the within-sector dynamics are unconstrained by additional matching rules.*

*Argument.* The matching rules of the aperiodic tiling ([Aperiodic Order](/derivations/foundation/aperiodic-order)) enforce consistency between hierarchy levels. With only one effective level (Proposition 2.1), the inter-level matching rules become vacuous. The remaining constraint is the single-level rule: total coherence is fixed. This is automatically satisfied by all states in $\mathcal{H}_{\text{sat}}$. $\square$

### Step 4: Maximal Within-Sector Ergodicity

**Theorem 4.1 (Sector ergodicity).** *The dynamics within $\mathcal{H}_{\text{sat}}$ satisfy conditional ergodicity (Definition 5.1 of [Non-Ergodicity](/derivations/thermodynamics-ext/non-ergodicity)). Moreover, the mixing is maximal: the spectral gap of the within-sector evolution operator is as large as causality allows.*

*Argument.* By Propositions 2.1 and 3.1, the only active constraint within $\mathcal{H}_{\text{sat}}$ is the total coherence. The degrees of freedom are the $\exp(S_{BH})$ boundary modes, which interact via the ER=EPR connections across the horizon ([ER=EPR Correspondence](/derivations/holography/er-epr)). These connections form a complete graph on the boundary modes (every horizon degree of freedom is connected to every other through the interior geometry). Complete-graph dynamics have maximal spectral gap, giving the fastest possible mixing. $\square$

### Step 5: Loop-Tilt Mechanism at the Horizon

**Proposition 5.1 (Loop projection tilt).** *As an observer approaches the event horizon, the projection of its U(1) loop closure onto the spacetime manifold tilts from the timelike direction toward the null direction, reaching the null limit at the horizon itself. This tilt continuously removes the time-space asymmetry that is the primary source of non-ergodicity in the bulk.*

*Argument.* In the bulk, the observer's loop closure generates phase advance $\theta(\tau) = \theta_0 + \omega\tau$ along the observer's worldline ([Loop Closure](/derivations/axioms/loop-closure), Corollary 4.3). This phase advance defines the timelike direction ([Time as Phase Ordering](/derivations/thermodynamics/time), Proposition 2.1). The structural asymmetry between this loop-generated time direction and the boundary-generated spatial directions is one of the three mechanisms producing non-ergodicity ([Non-Ergodicity](/derivations/thermodynamics-ext/non-ergodicity), Step 1): trajectories are channeled along the time axis, preventing exploration of the full configuration space.

Near a black hole of mass $M$, the Killing vector $\partial/\partial t$ has norm $\|\partial_t\|^2 = -(1 - r_s/r)$, where $r_s = 2GM/c^2$. For a stationary observer at radius $r$, the relationship between proper time $\tau$ and coordinate time $t$ is $d\tau = \sqrt{1 - r_s/r}\, dt$. The loop closure phase advance per unit coordinate time is:

$$\frac{d\theta}{dt} = \omega\sqrt{1 - r_s/r}$$

As $r \to r_s$, this rate vanishes: the loop projection onto the coordinate time direction goes to zero. In the local frame, the observer's phase still advances at rate $\omega$ — but the direction of that advance, as embedded in the spacetime manifold, tilts from purely timelike toward null. At $r = r_s$, the Killing vector is null: $\|\partial_t\|^2 = 0$. The loop closure direction coincides with the horizon generator — a null direction that is the boundary between timelike and spacelike.

The non-ergodicity obstruction requires a strictly timelike loop direction to channel trajectories. A null direction does not partition the configuration space into time-ordered sectors, because null directions are simultaneously spatial and temporal. At the horizon, the loop no longer picks out a preferred time axis distinct from space, and the phase-space confinement that this asymmetry produces disappears. $\square$

**Corollary 5.2 (Continuous ergodicity gradient).** *The degree of ergodicity increases continuously as a function of the tilt angle $\alpha$ between the loop projection and the local spatial hypersurface:*

$$\alpha(r) = \arctan\left(\frac{1}{\sqrt{1 - r_s/r}}\right)$$

*At $r \gg r_s$, $\alpha \approx \pi/4$ (45-degree timelike, standard non-ergodic regime). As $r \to r_s$, $\alpha \to \pi/2$ (fully null, maximally ergodic). This provides a smooth interpolation between non-ergodic bulk dynamics and maximally ergodic horizon dynamics.*

**Remark 5.3.** This connects to three known results:

1. *Unruh effect*: A stationary observer at radius $r$ has proper acceleration $a = (GM/r^2)(1 - r_s/r)^{-1/2}$, diverging at the horizon. The Unruh temperature $T_U = \hbar a/(2\pi c k_B)$ diverges correspondingly — maximal thermalization is the macroscopic signature of maximal ergodicity.

2. *Membrane paradigm*: The stretched horizon (at $r = r_s + \epsilon$) behaves as a viscous fluid with maximal dissipation rate. Dissipation is the macroscopic consequence of ergodic mixing of microscopic degrees of freedom.

3. *No-hair theorems*: All multipole information about the collapsed matter is radiated away or absorbed by the horizon, leaving only mass, charge, and angular momentum. This information loss is precisely the statement that the horizon degrees of freedom are maximally mixed — the system has ergodically explored its full accessible sector, erasing all memory of the initial configuration.

**Remark 5.4 (Relationship to Steps 2–4).** The loop-tilt mechanism provides the geometric *reason* for the hierarchy collapse (Step 2) and matching-rule reduction (Step 3). The bootstrap hierarchy requires a timelike loop direction to define the inter-level binding structure — observers at level $\ell$ are bound states that persist *in time*. When the loop direction becomes null, the concept of "persistent bound state" loses meaning: there is no distinguished time direction along which the binding is maintained. The hierarchy collapses not merely because coherence is boundary-allocated, but because the geometric prerequisite for hierarchy — a timelike loop — is absent at the horizon.

### Step 6: Scrambling Time

**Proposition 6.1 (Scrambling time bound).** *The scrambling time for a black hole of Hawking temperature $T_H$ and entropy $S_{BH}$ is:*

$$t_* = \frac{1}{2\pi T_H} \ln S_{BH} = \frac{1}{2\pi T_H} \ln\left(\frac{A}{4\ell_P^2}\right)$$

*This saturates the chaos bound of Maldacena, Shenker, and Stanford.*

*Argument.* The Lyapunov exponent of the within-sector dynamics is set by the surface gravity $\kappa = 2\pi T_H$ (the natural frequency scale of the horizon). The scrambling time is the time for a single-mode perturbation to spread across all $S_{BH}$ modes. With Lyapunov exponent $\lambda_L = 2\pi T_H$, a perturbation grows as $e^{\lambda_L t}$ and reaches all modes when $e^{\lambda_L t_*} \sim S_{BH}$, giving $t_* = \ln(S_{BH}) / (2\pi T_H)$. $\square$

### Step 7: Non-Ergodicity in the Full Hilbert Space

**Theorem 7.1.** *The black hole is non-ergodic in the full Hilbert space $\mathcal{H}$. States outside $\mathcal{H}_{\text{sat}}$ (sub-saturated states with $S < S_{BH}$) are separated from $\mathcal{H}_{\text{sat}}$ by hierarchy barriers of height $\geq \hbar$.*

*Proof sketch.* A sub-saturated state has some coherence allocated to internal structure (hierarchy levels $\ell > 1$). Transitioning to a saturated state requires dissolving this internal structure and reallocating the coherence to the boundary. This is a hierarchy-level change, which costs $\geq \hbar$ per level crossed (Proposition 1.2 of [Non-Ergodicity](/derivations/thermodynamics-ext/non-ergodicity)). The black hole evolution (exterior time evolution generated by the Hamiltonian) preserves the boundary coherence and cannot cross these barriers in finite time. $\square$

**Remark 7.2.** This explains why the Hawking evaporation process is slow ($t_{\text{evap}} \sim S_{BH}^{3/2}$) compared to scrambling ($t_* \sim \ln S_{BH}$): evaporation requires crossing hierarchy barriers (coherence must be transferred from boundary to radiation), while scrambling occurs within a single sector. The ratio $t_{\text{evap}}/t_* \sim S_{BH}^{3/2}/\ln S_{BH}$ reflects the exponential difficulty of inter-sector transitions relative to intra-sector mixing.

## Comparison with Standard Approaches

| Feature | Standard scrambling | Observer-centrism |
|---|---|---|
| Ergodicity | Assumed for the full Hilbert space | Conditional: maximal within saturated sector only |
| Mechanism | Unspecified (fast thermalization assumed) | Loop-tilt: time-space asymmetry dissolves at null horizon |
| Scrambling time | $t_* \sim \beta \ln S$ (conjectured) | Same, derived from sector dimension + Lyapunov exponent |
| Ergodicity gradient | Not considered | Continuous: tilt angle $\alpha(r)$ interpolates bulk to horizon |
| Evaporation | Information paradox | Slow inter-sector transition (hierarchy barriers) |
| Non-saturated states | Not distinguished | Separated by coherence gaps; non-ergodic |
| Chaos bound | External input (MSS) | External input (not yet derived from axioms) |

## Open Gaps

1. **Chaos bound from axioms**: Derive the Maldacena-Shenker-Stanford chaos bound $\lambda_L \leq 2\pi T$ from coherence conservation and the observer axioms, rather than importing it as an external result.
2. **Evaporation dynamics**: Connect the inter-sector transition rate (hierarchy barrier crossing) to the Hawking evaporation rate $\Gamma \sim T_H^2$. This should give a derivation of the Page curve from the coherence-sector framework.
3. **Sub-saturated scrambling**: Characterize the scrambling dynamics for states that do not saturate the holographic bound. The scrambling time should increase as the hierarchy becomes more complex (more levels, tighter matching rules). The loop-tilt angle $\alpha(r)$ (Corollary 5.2) should give a quantitative measure of the scrambling rate at each radius.
4. **Scrambling and ER=EPR**: Make the connection between maximal within-sector mixing and the ER=EPR bridge structure more precise. The complete-graph argument (Step 4) should follow from the ER bridge connectivity derived in [ER=EPR Correspondence](/derivations/holography/er-epr).
5. **Loop-tilt for other horizons**: Extend the loop-tilt mechanism (Step 5) to cosmological horizons (de Sitter), Rindler horizons (uniformly accelerating observers), and inner horizons of rotating black holes (Kerr). The de Sitter case is particularly interesting: every observer has a cosmological horizon, so there should be a universal low-level ergodicity associated with the cosmological tilt.
