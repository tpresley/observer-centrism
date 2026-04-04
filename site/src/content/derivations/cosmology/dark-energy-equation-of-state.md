---
title: "Dark Energy Equation of State"
status: "provisional"
dependsOn: ["thermodynamics-ext/distinguishability-conservation", "cosmology/observer-loop-viability", "axioms/coherence-conservation", "axioms/loop-closure", "holography/area-scaling", "spacetime/singularity-resolution"]
enablesDerivation: []
tags: ["cosmology", "quantum-gravity"]
summary: "Distinguishability conservation constrains the dark energy equation of state: phantom energy (w < -1) is axiomatically excluded because the Big Rip destroys all coherence carriers, and w = -1 (cosmological constant) is the unique asymptotic fixed point where coherence flux across the horizon vanishes and observer loops are exactly Lyapunov-stable. The Gibbons-Hawking characterization of non-self relational invariants provides a horizon distinguishability bound on Λ."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-03
---

## Overview

This derivation asks: **what kinds of dark energy are compatible with the axioms?**

The framework already constrains the cosmological constant's existence (Lovelock), sign ($\Lambda \geq 0$, from [Observer Loop Viability Bounds](/derivations/cosmology/observer-loop-viability)), and Planck-scale upper bound. But these results all assume dark energy is a cosmological constant ($w = -1$). The real universe might have dark energy with a different equation of state — quintessence ($w > -1$), phantom energy ($w < -1$), or a time-varying $w(t)$. This derivation constrains which possibilities survive.

**The approach.** The key tool is [Conservation of Distinguishability](/derivations/thermodynamics-ext/distinguishability-conservation) (Theorem 2.1): admissible transformations preserve all coherence-derived distance measures. Applied cosmologically, this conservation law governs how coherence partitions between the accessible region and the cosmological horizon. The partition depends on the dark energy equation of state.

Three results follow:

- **Phantom exclusion.** For $w < -1$, the scale factor diverges at finite time (Big Rip). All bound structures — atoms, observers, relational invariants — are torn apart. Coherence has no carrier, violating Axiom 1. This is the expansion-side analogue of the bounce dissolution that excludes $\Lambda < 0$.
- **Constancy preference.** Among all $w \geq -1$, only $w = -1$ gives a time-independent coherence partition in the asymptotic future. This is the unique fixed point where coherence flux across the horizon vanishes and observer loops are exactly (not approximately) Lyapunov-stable.
- **Horizon distinguishability bound.** In de Sitter equilibrium, the non-self side of every observer's boundary $\mathcal{B}$ is characterized by the Gibbons-Hawking temperature — the effective temperature of relational invariants crossing the horizon. The observer's ability to extract distinguishable information from its non-self environment constrains $\Lambda$ from both sides: too large and the non-self coherence is too coarse-grained; too small and the distinguishable interaction rate is too slow.

**The result.** The dark energy equation of state satisfies $w \geq -1$, with $w = -1$ as the unique asymptotic attractor. This is the null energy condition for dark energy, derived from coherence conservation rather than imposed.

**Why this matters.** The same conservation law that excludes the Big Crunch ($\Lambda < 0$, via observer-loop-viability) also excludes the Big Rip ($w < -1$). The universe is bounded between these two catastrophes: it must expand forever at a bounded rate. The preference for $w = -1$ is a genuine prediction — consistent with current observations ($w = -1.03 \pm 0.04$ from Planck + DESI) but falsifiable by future surveys detecting $w < -1$.

**An honest caveat.** The constancy result shows $w = -1$ is preferred but does not rigorously exclude $|1 + w| > 0$. Quintessence with $w$ close to $-1$ is approximately stable and not axiomatically forbidden. The horizon distinguishability bound (Step 4) is semi-formal and requires the minimum non-self coherence (an open problem) to become quantitative.

## Statement

**Theorem (Dark Energy Equation of State).** Conservation of distinguishability (Axiom 1) constrains the dark energy equation of state:

1. **Phantom exclusion.** $w \geq -1$. Phantom energy ($w < -1$) produces a Big Rip at finite time, destroying all coherence carriers and violating Axiom 1.

2. **Constancy preference.** Among all $w \geq -1$, only $w = -1$ (cosmological constant) produces a time-independent coherence partition in the asymptotic future. This is the unique equation of state for which the coherence flux across the cosmological horizon vanishes and observer loops are exactly Lyapunov-stable indefinitely.

3. **Horizon distinguishability bound.** In de Sitter equilibrium ($w = -1$), the Gibbons-Hawking temperature characterizing the non-self side of the observer's boundary constrains $\Lambda$ through the observer's minimum distinguishable information extraction rate.

## Derivation

### Step 1: Coherence Partition Across the Cosmological Horizon

**Definition 1.1 (Coherence partition).** In an FRW cosmology with dark energy, the total coherence on a Cauchy slice $\Sigma_t$ decomposes into accessible and horizon components:

$$\mathcal{C}_{\text{total}} = \mathcal{C}_{\text{acc}}(t) + \mathcal{C}_{\text{hor}}(t)$$

where $\mathcal{C}_{\text{acc}}(t)$ is the coherence carried by observer structures and relational invariants within the cosmological horizon, and $\mathcal{C}_{\text{hor}}(t)$ is the coherence associated with the horizon itself (the Gibbons-Hawking entropy $S_H = A_H/(4\ell_P^2)$, counting degrees of freedom beyond causal reach).

By [Coherence Conservation](/derivations/axioms/coherence-conservation) (Axiom 1), $\mathcal{C}_{\text{total}}$ is conserved on every Cauchy slice. This is the cosmological application of [Conservation of Distinguishability](/derivations/thermodynamics-ext/distinguishability-conservation) (Theorem 2.1): the total ability to distinguish subsystems is preserved, though it may redistribute between the accessible and horizon sectors.

**Definition 1.2 (Coherence flux).** The coherence flux across the cosmological horizon is:

$$\Phi(t) = \frac{d\mathcal{C}_{\text{hor}}}{dt} = -\frac{d\mathcal{C}_{\text{acc}}}{dt}$$

This measures the rate at which coherence becomes causally inaccessible. By conservation, $\Phi > 0$ means coherence flows from accessible to horizon (the accessible region loses distinguishability), and $\Phi < 0$ means the reverse.

**Proposition 1.3 (Horizon area and equation of state).** *The cosmological horizon area $A_H(t)$ depends on the dark energy equation of state $w = p_{\text{DE}}/(\rho_{\text{DE}} c^2)$:*

- *For $w = -1$ (cosmological constant): $\Lambda$ is constant, and $A_H = 12\pi/\Lambda$ is constant in the de Sitter phase.*
- *For $-1 < w < -1/3$ (quintessence): the dark energy density $\rho_{\text{DE}} \propto a^{-3(1+w)}$ dilutes with expansion. The effective horizon area $A_H(t)$ increases as the dark energy dilutes, approaching the $w = -1$ value asymptotically.*
- *For $w < -1$ (phantom): $\rho_{\text{DE}}$ grows with expansion. The horizon area shrinks to zero at finite time (the Big Rip).*

*Proof.* The Friedmann equation in the dark-energy-dominated era gives $H^2 = (8\pi G/3)\rho_{\text{DE}}$. The event horizon radius is $R_H = c \int_t^\infty dt'/a(t')$. For constant $w$, the scale factor is $a(t) \propto t^{2/[3(1+w)]}$ (for $w > -1$) or $a(t) \propto (t_{\text{rip}} - t)^{2/[3|1+w|]}$ (for $w < -1$). Direct integration gives:

- $w = -1$: $a \propto e^{Ht}$, $R_H = c/H = \sqrt{3/\Lambda}$, constant.
- $-1 < w < -1/3$: $R_H$ grows without bound as $t \to \infty$.
- $w < -1$: $R_H \to 0$ as $t \to t_{\text{rip}}$. $\square$

**Corollary 1.4 (Coherence flux and equation of state).** *The sign and magnitude of the coherence flux depend on $w$:*

- *$w = -1$: $\Phi = 0$ in the de Sitter phase (equilibrium).*
- *$-1 < w < -1/3$: $\Phi < 0$ (coherence flows from horizon to accessible region as $A_H$ grows).*
- *$w < -1$: $\Phi > 0$, diverging as $t \to t_{\text{rip}}$ (coherence drains from accessible to horizon as $A_H$ shrinks to zero).* $\square$

### Step 2: Phantom Energy Exclusion

**Theorem 2.1 (No phantom energy).** *The three axioms require $w \geq -1$. Phantom dark energy ($w < -1$) is axiomatically excluded.*

*Proof.* Suppose $w < -1$. The dark energy density $\rho_{\text{DE}} = \rho_0 a^{-3(1+w)}$ grows without bound as $a \to \infty$ (since $-3(1+w) > 0$). The scale factor diverges at a finite cosmic time:

$$t_{\text{rip}} = t_0 + \frac{2}{3|1+w|H_0}$$

We give three independent arguments, each sufficient for the exclusion. The logical structure mirrors the three-pronged proof of bounce dissolution in [Observer Loop Viability Bounds](/derivations/cosmology/observer-loop-viability) (Theorem 4.1), now applied to expansion rather than contraction.

**(i) Carrier destruction (primary argument).** As $t \to t_{\text{rip}}$, the effective dark energy pressure $p_{\text{DE}} = w\rho_{\text{DE}}c^2$ diverges. The tidal force on a structure of size $\ell$ is:

$$F_{\text{tidal}} \sim H^2 \ell \to \infty$$

At a time $\Delta t$ before the rip, structures bound with energy $E_b$ are torn apart when $H^2(t)\ell^3 > E_b/c^2$. This occurs at progressively smaller scales: galaxy clusters disintegrate first, then galaxies, then stellar systems, then atoms. At $t = t_{\text{rip}}$, all bound structures are destroyed — including all observer triples $(\Sigma_i, I_i, \mathcal{B}_i)$.

By the coherence ontology ([Observer Loop Viability](/derivations/cosmology/observer-loop-viability), Proposition 5.1), coherence resides only in observer state spaces and relational invariants. With all carriers destroyed, $\mathcal{C}_{\text{total}}$ has no substrate. On the last pre-rip Cauchy slice where observers exist, $\mathcal{C}_0 > 0$. At $t_{\text{rip}}$, the coherence has no carrier. This violates Axiom 1. $\square$

**(ii) Geodesic incompleteness.** The Big Rip is a future singularity: timelike geodesics are incomplete (they reach infinite expansion in finite proper time). The spacetime has no valid Cauchy slice at or beyond $t_{\text{rip}}$. Since Axiom 1 requires coherence conservation on every Cauchy slice, the conservation law is not merely violated — it becomes *undefined*. A spacetime where the conservation law cannot even be stated is inadmissible. $\square$

**(iii) Horizon shrinkage to zero.** As $t \to t_{\text{rip}}$, the event horizon radius $R_H(t) \to 0$. By the holographic bound ([Area Scaling](/derivations/holography/area-scaling), Theorem 5.2), the maximum information content within the horizon is $S_H = A_H/(4\ell_P^2) \to 0$. But any observer requires at least one bit of non-self coherence ([Multiplicity](/derivations/minimal-observer/multiplicity), Theorem 2.1). When $A_H < 4\ell_P^2$, even a minimal observer cannot fit within the causal patch — the same geometric argument as [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) (Theorem 2.1), now with a shrinking horizon rather than a small static horizon. $\square$

**Remark (Symmetry between Big Crunch and Big Rip).** The phantom exclusion is the expansion-side mirror of the bounce dissolution that excludes $\Lambda < 0$. Both are instances of the same principle: coherence conservation forbids cosmological endpoints where all observer structures are destroyed. The Big Crunch destroys observers by compression (divergent pressure, saturated phase space, no distinguishable boundary). The Big Rip destroys observers by expansion (divergent tidal forces, vanishing horizon, no causal contact). The axioms exclude both:

| Catastrophe | Cause | Mechanism | Excluded by |
|---|---|---|---|
| Big Crunch | $\Lambda < 0$ | Divergent pressure at $\rho_P$ | Observer-loop-viability Thm 5.4 |
| Big Rip | $w < -1$ | Divergent tidal force at $t_{\text{rip}}$ | This derivation, Thm 2.1 |

The surviving cosmologies are those that expand forever at a bounded rate: $\Lambda \geq 0$ and $w \geq -1$.

**Corollary 2.2 (Null energy condition for dark energy).** *Theorem 2.1 is equivalent to the null energy condition (NEC) applied to the dark energy component: $\rho_{\text{DE}} + p_{\text{DE}}/c^2 \geq 0$, i.e., $\rho_{\text{DE}}(1 + w) \geq 0$. Since $\rho_{\text{DE}} > 0$ (the universe is accelerating), this gives $w \geq -1$.*

*Proof.* The NEC states $T_{\mu\nu}k^\mu k^\nu \geq 0$ for all null vectors $k^\mu$. For a perfect fluid with equation of state $p = w\rho c^2$, this reduces to $\rho(1 + w) \geq 0$. For $\rho > 0$, this is $w \geq -1$. The framework derives this from coherence conservation rather than imposing it as an energy condition. $\square$

### Step 3: Constancy Preference

**Theorem 3.1 (Uniqueness of the $w = -1$ fixed point).** *Among all dark energy equations of state $w \geq -1$ (constant), only $w = -1$ produces a spacetime where:*
1. *The coherence partition $\mathcal{C}_{\text{acc}}/\mathcal{C}_{\text{hor}}$ reaches a time-independent equilibrium.*
2. *Observer loops in the static patch are exactly Lyapunov-stable for all future time.*
3. *The coherence flux across the horizon vanishes: $\Phi = 0$.*

*Proof.* We establish each property for $w = -1$ and show it fails for $w \neq -1$.

**(1) Time-independent partition.** For $w = -1$, the late-time geometry is exact de Sitter with constant $\Lambda$. The static patch metric (Definition 1.2 of [Observer Loop Viability](/derivations/cosmology/observer-loop-viability)) is time-independent: $\partial_t g_{\mu\nu} = 0$. The horizon area $A_H = 12\pi/\Lambda$ is constant, so $\mathcal{C}_{\text{hor}} = A_H/(4\ell_P^2)$ is constant, and $\mathcal{C}_{\text{acc}} = \mathcal{C}_{\text{total}} - \mathcal{C}_{\text{hor}}$ is constant. The partition is time-independent.

For $-1 < w < -1/3$, $\rho_{\text{DE}} \propto a^{-3(1+w)}$ dilutes. The effective Hubble parameter $H(t) \propto \rho_{\text{DE}}^{1/2}(t)$ decreases, the horizon radius $R_H(t) \sim c/H(t)$ grows, and $A_H(t)$ increases monotonically. The partition evolves: $\mathcal{C}_{\text{hor}}$ grows and $\mathcal{C}_{\text{acc}}$ decreases as the horizon absorbs more of the coherence budget.

For $w = -1$, the partition is stationary. For $w > -1$, it asymptotically approaches the $w = -1$ partition from below, but never reaches stationarity at any finite time.

**(2) Exact Lyapunov stability.** As noted in [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) (Step 3, Remark), the time-independence of the static patch metric for $w = -1$ guarantees that Lyapunov-stable loops remain exactly stable: the eigenvalues of the linearized flow are time-independent, so the Lyapunov exponents are constant.

For $w \neq -1$, the metric is time-dependent. The Lyapunov exponents acquire time-dependent corrections. Specifically, the effective Hubble parameter $H(t)$ enters the tidal tensor, contributing a time-varying perturbation to the linearized flow around the observer's phase trajectory. The magnitude of this perturbation scales as:

$$\delta\lambda \sim |1 + w| \cdot H(t)$$

For $|1 + w| \ll 1$, this is a small correction and the loop remains approximately stable. But the Lyapunov stability is approximate, not exact, for any $w \neq -1$.

**(3) Vanishing flux.** By Corollary 1.4, $\Phi = 0$ if and only if $A_H$ is constant, which holds if and only if $w = -1$. $\square$

**Remark (Quintessence is not excluded).** Theorem 3.1 shows that $w = -1$ is the unique fixed point, but does not exclude $w > -1$. Quintessence with $|1 + w| \ll 1$ gives approximately Lyapunov-stable loops and a slowly evolving partition. The axioms require exact conservation of total coherence (which is satisfied for any $w \geq -1$) but do not require exact stationarity of the partition. The preference for $w = -1$ is structural (it is the unique equilibrium) but not a hard exclusion of alternatives.

**Remark (Observational consistency).** Current measurements give $w = -1.03 \pm 0.04$ (Planck 2018 + DESI 2024 BAO). The phantom exclusion ($w \geq -1$) is consistent at $\lesssim 1\sigma$. The constancy preference is consistent with the data — the central value is within the allowed range, and the framework predicts that improved measurements will converge toward $w = -1$.

### Step 4: Horizon Distinguishability in the Static Patch

**Proposition 4.1 (Gibbons-Hawking characterization of non-self coherence).** *In the de Sitter static patch ($w = -1$), the relational invariants crossing the observer's boundary $\mathcal{B}$ from the non-self side are asymptotically characterized by the Gibbons-Hawking temperature:*

$$T_{\text{GH}} = \frac{\hbar}{2\pi k_B} \sqrt{\frac{\Lambda}{3}} \cdot \frac{1}{c} = \frac{\hbar c}{2\pi k_B R_H}$$

*This is the unique temperature consistent with the periodicity of the Euclidean continuation of de Sitter space. In the framework's language, $T_{\text{GH}}$ characterizes the effective energy scale of Type III interactions ([Three Interaction Types](/derivations/interactions/three-types)) between the observer and the horizon-adjacent portion of the observer network. It is not an external reservoir but a property of how coherence distributes across the horizon.*

**Proposition 4.2 (Distinguishability of horizon-dominated interactions).** *An observer whose non-self environment is dominated by horizon-scale relational invariants at effective temperature $T$ can extract distinguishable information at a maximum rate bounded by the energy available for discrimination. By the Margolus-Levitin theorem, the maximum number of distinguishable operations per unit time for a system with energy $E$ above the ground state is:*

$$\dot{N}_{\text{dist}} \leq \frac{2E}{\pi\hbar}$$

*For an observer of mass $m$ whose non-self interactions are characterized by $T_{\text{GH}}$, the available energy for information extraction per interaction is bounded by $E_{\text{th}} \sim k_B T_{\text{GH}}$ per degree of freedom.*

**Proposition 4.3 (Minimum distinguishability requirement).** *An observer loop with period $T$ must extract at least one distinguishable bit per cycle from the non-self side of $\mathcal{B}$. If the non-self observer network provides only indistinguishable (maximally coarse-grained) relational invariants, the boundary $\mathcal{B}$ between self and non-self becomes operationally meaningless: the observer cannot update its state in response to environmental variation, and the self/non-self distinction collapses.*

*Argument.* By [Observer Definition](/derivations/axioms/observer-definition) (Axiom 2), the observer triple $(\Sigma, I, \mathcal{B})$ requires a boundary $\mathcal{B}$ that distinguishes self from non-self. This distinction is maintained dynamically through Type III interactions ([Three Interaction Types](/derivations/interactions/three-types)) that transport relational invariants across $\mathcal{B}$. If the non-self network is maximally coarse-grained — all relational invariants across $\mathcal{B}$ are at the Gibbons-Hawking scale with no distinguishable structure — no new relational invariant can be established. Every interaction yields the same statistical outcome. The relational coherence across $\mathcal{B}$ vanishes:

$$\mathcal{C}(\text{self} : \text{non-self}) = 0 \quad \text{(maximally coarse-grained non-self)}$$

By [Multiplicity](/derivations/minimal-observer/multiplicity) (Proposition 4.1), positive relational coherence requires at least one independent correlation across $\mathcal{B}$. With $\mathcal{C}(\text{self} : \text{non-self}) = 0$, the observer is isolated and $\mathcal{C}(\Sigma) = 0$ — it is vacuous. Therefore, the non-self side must contain at least some structured coherence beyond the horizon-scale coarse-graining: distinguishable relational invariants that the observer can correlate with. $\square$

**Proposition 4.4 (Two-sided bound on $\Lambda$).** *The thermal distinguishability requirement constrains $\Lambda$ from both sides:*

**(i) Upper bound (non-self too coarse).** *If $\Lambda$ is too large, $T_{\text{GH}}$ is high and the non-self relational invariants are dominated by high-energy, maximally mixed horizon modes. The entropy per mode is large ($\sim k_B \log(k_B T/E_0)$), but the modes are maximally coarse-grained — each individual degree of freedom is nearly indistinguishable from the horizon average. The rate at which a low-energy observer can extract distinguishable bits saturates. For an observer with loop period $T$ and mass $m$:*

$$T_{\text{GH}} > \frac{mc^2}{k_B} \implies \text{horizon-scale fluctuations overwhelm observer structure}$$

*This gives $\Lambda < 12\pi m^2 c^2/(k_B^2 \cdot c^2/c^2) = 12\pi(mc/\hbar)^2$, which for a minimal (Planck-mass) observer recovers the Planck-scale bound $\Lambda < 3/\ell_P^2$, consistent with [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) (Theorem 2.1).*

**(ii) Lower bound (non-self too sparse).** *If $\Lambda$ is too small, $T_{\text{GH}}$ is low and the non-self interaction rate across the horizon is correspondingly slow. The maximum distinguishable information extraction rate from horizon-characterized interactions at effective temperature $T$ is proportional to $T$. For the observer to extract one distinguishable bit per loop period $T_{\text{loop}}$:*

$$\frac{k_B T_{\text{GH}}}{\hbar} \cdot T_{\text{loop}} \gtrsim 1 \implies T_{\text{GH}} \gtrsim \frac{\hbar}{k_B T_{\text{loop}}}$$

*Substituting $T_{\text{GH}} = (\hbar c)/(2\pi k_B R_H)$ and $R_H = \sqrt{3/\Lambda}$:*

$$\Lambda \gtrsim \frac{12\pi^2}{c^2 T_{\text{loop}}^2}$$

*For an observer with $T_{\text{loop}} \sim 1\;\text{s}$ (biological timescale), this gives $\Lambda \gtrsim 10^{-19}\;\text{m}^{-2}$, far below the observed $\Lambda_{\text{obs}} \sim 10^{-52}\;\text{m}^{-2}$. The lower bound is extremely weak for macroscopic observers because their loop periods are astronomically long compared to Planck time.*

*For the minimal observer ($T_{\text{loop}} = t_P$), the lower bound is $\Lambda \gtrsim 1/\ell_P^2$ — the same Planck scale. This means the minimal observer requires $\Lambda \sim \ell_P^{-2}$ from the upper bound AND $\Lambda \sim \ell_P^{-2}$ from the lower bound — but these are the wrong order by $10^{122}$. The gap between the minimal-observer constraint and the observed value is the same hierarchy addressed in [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) (Step 7). $\square$

**Remark (Connection to Gap 2 of observer-loop-viability).** Proposition 4.4 provides a concrete mechanism for the minimum non-self coherence identified as Gap 2 in [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) (Proposition 6.2): the minimum is set by the distinguishability of relational invariants characterized by $T_{\text{GH}}$. The bound becomes quantitatively interesting only when combined with a specific model of which observers the universe must support — not just the minimal observer, but the full bootstrap hierarchy. This connection remains open (Gap 2 below).

### Step 5: Cross-Predictions and Consistency

**Proposition 5.1 (Bounded eternal expansion).** *The combined results of this derivation and [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) constrain the universe to bounded eternal expansion:*

| Constraint | Source | Result |
|---|---|---|
| $\Lambda \geq 0$ | Observer-loop-viability Thm 5.4 | No Big Crunch |
| $w \geq -1$ | This derivation, Thm 2.1 | No Big Rip |
| $\Lambda < 3/\ell_P^2$ | Observer-loop-viability Thm 2.1 | Bounded expansion rate |
| $w = -1$ preferred | This derivation, Thm 3.1 | Unique equilibrium |

*The physically realized spacetimes are those that expand forever at a bounded rate, asymptoting to de Sitter. This is not a philosophical preference but a consequence of coherence conservation applied to both cosmological endpoints.*

**Proposition 5.2 (Connection to holographic noise).** *The phantom exclusion and constancy preference both flow from coherence conservation applied to horizons. The same principle, applied to local interferometer horizons rather than cosmological horizons, produces the holographic noise prediction ([Holographic Noise](/derivations/holography/holographic-noise)): strain PSD $S_h = 2\alpha_H \ell_P/c$ with angular structure $\Gamma(\beta) = \cos\beta$. Both predictions are facets of the same structural fact: coherence is conserved, and horizons partition it.*

**Proposition 5.3 (Falsifiability).** *The derivation makes two falsifiable predictions:*

1. *$w \geq -1$ is a hard prediction. Any confirmed detection of $w < -1$ (phantom energy) would falsify the framework's coherence conservation axiom.*
2. *$w = -1$ is a soft prediction. Detection of $w \neq -1$ (quintessence) would not falsify the framework but would indicate that the universe has not yet reached coherence equilibrium — the coherence partition is still evolving.*

*Current data (Planck 2018 + DESI 2024 BAO: $w = -1.03 \pm 0.04$) is consistent with both predictions. The Euclid and Rubin Observatory surveys (2024–2034) will measure $w$ to $\sim 1\%$ precision, providing a stringent test.* $\square$

## Open Gaps

**Gap 1 (Quintessence bound).** Theorem 3.1 shows $w = -1$ is the unique fixed point but does not bound $|1 + w|$. A rigorous bound from the Lyapunov correction $\delta\lambda \sim |1 + w| \cdot H$ would require showing that the correction accumulates over cosmic time and eventually destabilizes the loop — giving a maximum $|1 + w|$ consistent with observer persistence over the age of the universe. *Difficulty: HARD.*

**Gap 2 (Quantitative $\Lambda$ from horizon distinguishability).** Proposition 4.4 gives bounds on $\Lambda$ that are either Planck-scale (minimal observer) or extremely weak (macroscopic observer). A tighter bound requires computing the minimum non-self distinguishability for the full bootstrap hierarchy — not just one observer, but the network of observers at all scales that the axioms require. This connects to [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) Gap 2 (minimum non-self coherence) and to the [Hierarchical Geometry Functor](cosmology/observer-loop-viability#hierarchical-geometry) program. *Difficulty: HARD.*
