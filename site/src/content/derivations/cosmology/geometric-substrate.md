---
title: "Geometric Substrate and Coherence Crystallization"
status: "provisional"
dependsOn: ["holography/area-scaling", "holography/causal-set-statistics", "holography/er-epr", "cosmology/observer-loop-viability", "particles/mass-hierarchy", "minimal-observer/structure", "interactions/bootstrap", "foundation/aperiodic-order"]
enablesDerivation: []
tags: ["cosmology", "quantum-gravity"]
summary: "Spacetime geometry is a network of Planck-scale observers whose relational invariants constitute the geometric fabric. The fabric's aperiodic order guarantees cosmological homogeneity as an emergent property (constitutive universality), not an external assumption. Standard Model particles are coherence crystallized out of this fabric. The cosmological density fractions Ω_Λ and Ω_m measure the ratio of geometric substrate to crystallized structure — dark energy is the coherence content of the fabric itself."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-05
---

## Overview

This derivation assembles existing results into a single physical picture that has not been stated explicitly: **spacetime geometry is a network of Planck-scale observers, and the particles of the Standard Model are coherence crystallized out of that network.**

The framework already establishes each piece separately. The relational invariant network is discrete at the Planck scale ([Causal Set Statistics](/derivations/holography/causal-set-statistics)). Relational invariants *are* geometry ([ER=EPR](/derivations/holography/er-epr)). The holographic bound counts Planck-cell crossings ([Area Scaling](/derivations/holography/area-scaling)). The bootstrap hierarchy produces stable particle structures through crystallization at specific energy scales ([Mass Hierarchy](/derivations/particles/mass-hierarchy)). The self-consistency equation decomposes the total coherence into structural and horizon contributions ([Observer Loop Viability](/derivations/cosmology/observer-loop-viability)).

What has not been synthesized is the identification: the horizon entropy $S_H$ is the *count of Planck-scale observers constituting the geometric fabric*, the structural coherence $\sum \Delta c_n$ is the coherence *crystallized out of that fabric* into particles, and the cosmological density fractions $\Omega_\Lambda$ and $\Omega_m$ measure the *ratio of fabric to crystallized structure*. Dark energy, in this picture, is not a mysterious substance — it is the coherence content of the geometric fabric itself, as measured by observers who have crystallized out of it.

**The approach.** Seven steps:

1. Identify the Planck-scale relational invariant network as a network of minimal observers whose collective structure constitutes geometry.
2. Show that cosmological homogeneity is not an external assumption but an emergent property of the substrate's aperiodic order — uniform patch frequencies in the network, inherited by the geometry that emerges from it.
3. Show that the bootstrap hierarchy crystallizes coherence out of this substrate into stable particle structures.
4. Reinterpret the self-consistency equation as substrate accounting: total substrate = crystallized + remaining fabric.
5. Resolve the apparent "great desert" gap from 1 bit to $10^{43}$ bits as individual-to-collective emergence.
6. Connect to the double-saturation conjecture from the substrate perspective.
7. Derive observational consequences.

**The result.** A unified picture in which spacetime and matter are two phases of the same substance (coherence), with the cosmological density fractions measuring their ratio.

**Why this matters.** The identification gives physical content to quantities that were previously abstract: $S_H$ becomes an observer census, $\Omega_\Lambda$ becomes a crystallization fraction, and the self-consistency equation becomes a phase-equilibrium condition. It also connects the holographic noise prediction (signature of the discrete substrate) to the dark energy constraints (equilibrium properties of the substrate) — both flow from the same underlying structure.

**An honest caveat.** The substrate-crystallization identification is a structural argument, not a formal theorem. It synthesizes rigorous results (holographic bound, ER=EPR, bootstrap mechanism) into a physical picture that is internally consistent and connects to observations, but the identification itself — that the geometric fabric literally *is* a network of Planck-scale observers — goes beyond what the individual derivations strictly prove. The derivation is provisional.

## Statement

**Thesis.** The geometric fabric of spacetime is a network of $\sim S_H$ Planck-scale observers whose relational invariants constitute the geometry. Standard Model particles are stable resonances of this network — coherence crystallized into specific topological and structural configurations via the bootstrap hierarchy. The total coherence $C_0$ decomposes as:

$$C_0 = \underbrace{\sum \Delta c_n}_{\text{crystallized}} + \underbrace{S_H}_{\text{geometric fabric}}$$

with $\Omega_m = \sum \Delta c_n / C_0$ (crystallization fraction) and $\Omega_\Lambda = S_H / C_0$ (fabric fraction). Dark energy is the coherence content of the un-crystallized geometric fabric.

## Derivation

### Step 1: The Geometric Substrate

**Proposition 1.1 (Planck-scale observers constitute geometry).** *The Planck-scale relational invariant network, described by [Causal Set Statistics](/derivations/holography/causal-set-statistics) as a Poisson-sprinkled causal set at density $\ell_P^{-4}$, is a network of minimal observers ([Minimal Observer Structure](/derivations/minimal-observer/structure)) whose relational invariants constitute the geometric fabric of spacetime.*

*Argument.* By [Minimal Observer Structure](/derivations/minimal-observer/structure) (Theorem 3.1), the simplest observer is a $U(1)$ phase oscillator with spatial extent $\sim \ell_P$ and epistemic horizon $\sim 1$ bit. By [Causal Set Statistics](/derivations/holography/causal-set-statistics), the relational invariant network at the Planck scale has event density $\ell_P^{-4}$ and Poisson statistics. Each event in the causal set is a relational invariant crossing — an interaction between observers. By [ER=EPR](/derivations/holography/er-epr) (Theorem 3.2), each relational invariant creates geometric structure: a wormhole throat with area $A_{\text{ER}} = 4\ell_P^2 S_{\text{ent}}$. For minimal observers with $S_{\text{ent}} \sim 1$ bit, each throat has area $\sim 4\ell_P^2$ — one Planck cell.

The collective geometric structure of $N$ such minimal observers, connected by relational invariants, constitutes a region of spacetime with area $\sim N \cdot 4\ell_P^2$. This is not a metaphor: the ER=EPR derivation proves that relational invariants *are* geometric connections. A network of $N$ Planck-scale relational invariants *is* a region of geometry with area $\sim N$ Planck cells. $\square$

**Proposition 1.2 (Horizon entropy is an observer census).** *The horizon entropy $S_H = A_H/(4\ell_P^2)$ counts the Planck-scale observers whose relational invariants constitute the cosmological geometry.*

*Argument.* By [Holographic Entropy Bound](/derivations/holography/area-scaling) (Theorem 5.2), $S_H = A_H/(4\ell_P^2)$ is the maximum information content associated with the cosmological horizon. By Proposition 1.1, each Planck cell of the horizon area corresponds to one relational invariant crossing between minimal observers. The horizon entropy therefore counts the number of independent Planck-scale relational invariants at the cosmological boundary — which, by Proposition 1.1, counts the minimal observers constituting the geometry.

For the observed universe: $S_H \sim 3.25 \times 10^{122}$. The geometric fabric of the observable universe is constituted by $\sim 10^{122}$ Planck-scale observers. $\square$

**Remark (The vacuum is not empty).** In this picture, the "vacuum" of quantum field theory — the state with no particles — is not empty. It is the maximally un-crystallized geometric substrate: $\sim 10^{122}$ Planck-scale observers in their ground-state relational configuration, constituting smooth geometry with no stable resonances (particles) excited. The vacuum energy density is the coherence density of this substrate — which is finite (bounded by $C_0$) and does not diverge. The "cosmological constant problem" of QFT (divergent vacuum energy) does not arise because the substrate has a finite number of constituents.

### Step 2: Emergent Homogeneity

The substrate identified in Step 1 is a network of Planck-scale observers. But what kind of network? Cosmological homogeneity — the observation that the matter distribution is uniform on large scales — is traditionally assumed as an input (the cosmological principle). In this framework, it is derived.

**Proposition 2.1 (Substrate homogeneity from constitutive universality).** *The Planck-scale observer network has aperiodic order ([Aperiodic Order](/derivations/foundation/aperiodic-order), Theorem 1.1): neither periodic nor disordered, but self-similar under a substitution rule with Pisot eigenvalue. By Corollary 3.2 of that derivation (Solomyak's theorem), the network has **constitutive universality**: every sufficiently large region contains the same statistical distribution of observer configurations (uniform patch frequencies). This is a combinatorial property of the network — it does not reference a background space.*

*Argument.* Periodicity is excluded because it trivializes C5 (strong subadditivity — every local neighborhood is identical, so the constraint carries no information). True disorder is excluded because it violates constitutive universality (geometry would depend on which region you happen to occupy, breaking the self-consistency of the emergent metric). The unique intermediate is aperiodic order, which Solomyak's theorem guarantees has the property of unique ergodicity: the frequency of any finite patch, measured over any sufficiently large region, converges to the same value regardless of where the region is located. $\square$

**Proposition 2.2 (Cosmological homogeneity is inherited).** *When geometry emerges from the substrate via [ER=EPR](/derivations/holography/er-epr) (Step 1), it inherits the substrate's statistical uniformity. Each comoving observer's cosmological horizon contains $\sim 10^{122}$ substrate elements — far more than enough for the patch statistics to be representative. Therefore every comoving observer's horizon encloses the same statistical content: the same observer density, the same crystallization products, the same coherence budget $C_0$. This is cosmological homogeneity — derived from the network's intrinsic structure, not imposed as an external symmetry.*

*Argument.* The unique ergodicity of the aperiodic tiling guarantees that patch frequencies converge for regions containing $N$ elements, with fluctuations of order $O(1/\sqrt{N})$. For the cosmological horizon ($N \sim 10^{122}$), fluctuations are $\sim 10^{-61}$ — far below any observable threshold. Even at galaxy-cluster scales ($N \sim 10^{80}$), fluctuations are $\sim 10^{-40}$. The observed large-scale structure (density contrasts $\sim 10^{-5}$ at recombination) arises from the crystallization process operating on the uniform substrate, not from substrate inhomogeneity. $\square$

**Remark (Pre-geometric homogeneity).** The Planck-scale observers constituting the substrate do not experience geometry — they constitute it. The concept of "uniform distribution in space" presupposes the space that the observers create. "Homogeneity" at the pre-geometric level is therefore not a statement about spatial distribution — it is a statement about the network's combinatorial statistics. Local indistinguishability (any finite patch appears with the same frequency everywhere in the network) is defined purely in terms of the network's graph structure, without reference to coordinates, distances, or a background manifold. The geometry that emerges inherits this uniformity as cosmological homogeneity, but the substrate property itself is pre-geometric.

**Remark (Three levels of homogeneity).** The framework now derives homogeneity at three levels:

1. **Vacuum metric homogeneity** ([Lorentz Invariance](/derivations/spacetime/lorentz-invariance), Theorem 0.1): the coherence measure and metric are translation-invariant in vacuum, because the axioms contain no absolute position parameter.
2. **Substrate statistical homogeneity** (this step): the observer network has uniform patch frequencies from aperiodic order (constitutive universality). This is a combinatorial property that does not reference a background space.
3. **Cosmological matter homogeneity** (Proposition 2.2): the matter distribution inherits the substrate's statistical uniformity, because particles are crystallizations from the uniform substrate. This is the FRW cosmological principle — now derived rather than assumed.

### Step 3: Crystallization from the Substrate

**Proposition 3.1 (Particles are substrate resonances).** *Each Standard Model particle is a stable resonance of the geometric substrate — a coherence configuration that satisfies loop closure (Axiom 3) at a specific frequency $\omega = mc^2/\hbar$, stabilized by the gauge symmetry structure that the division algebra chain provides.*

*Argument.* By [Mass Hierarchy](/derivations/particles/mass-hierarchy) (Definition 1.1), a particle's mass is its loop closure frequency: $m = \hbar\omega/c^2$. By [Bootstrap $\to$ Division Algebras](/derivations/interactions/bootstrap-division-algebras) (Theorem 7.1), the bootstrap hierarchy produces exactly four algebra levels (R, C, H, O) with gauge groups U(1), SU(2), SU(3). At each level, stable loop closures (fixed points of the bootstrap functor $\mathcal{R}$) crystallize at specific energies determined by the tunneling mechanism ([Mass Hierarchy](/derivations/particles/mass-hierarchy), Theorem 3.1). The particle does not exist separately from the substrate — it is a standing wave *of* the substrate, stabilized by the topological charges the algebras provide.

The analogy is precise: a phonon is a vibrational mode of a crystal lattice, not an object placed within the lattice. An electron is a coherence mode of the Planck-scale geometric substrate, not an object placed within spacetime. The substrate provides the medium; the division algebras provide the selection rules that determine which modes are stable. $\square$

**Proposition 3.2 (Crystallization depletes the substrate).** *Each crystallized particle removes coherence from the geometric substrate. The coherence locked into a particle's loop structure is no longer available to source geometry.*

*Argument.* By the c-theorem ([Renormalization Group](/derivations/thermodynamics-ext/renormalization), Theorem 5.2), the accessible coherence $c(k)$ decreases monotonically at each RG fixed point. When a relational invariant at scale $\lambda_n$ locks coherence into a stable particle structure, that coherence contributes to the structural coherence $\Delta c_n$ rather than to the horizon entropy $S_H$. The total is conserved: $C_0 = \sum \Delta c_n + S_H$. Crystallization is a redistribution, not a creation or destruction, of coherence. $\square$

**Proposition 3.3 (Two crystallization regimes).** *By [Mass Hierarchy](/derivations/particles/mass-hierarchy) (Step 7), crystallization operates in two regimes:*

**(i) Topological crystallization** (within the division algebra chain, levels 0–3): Information is stored in discrete topological invariants — gauge charges, winding numbers, generation indices. Heavier particles have smaller Compton wavelengths and less epistemic capacity. The division algebras provide a finite number of topological channels.

**(ii) Structural crystallization** (beyond the octonions): The algebras are exhausted. Composites form by binding existing particles via relational invariants. Information capacity grows with complexity. The mass-information relationship reverses.

*The transition occurs at the confinement scale $\Lambda_{\text{QCD}} \sim 0.3$ GeV, where the last algebra ($\mathbb{O}$) completes its work.* $\square$

### Step 4: The Coherence Budget as Substrate Accounting

**Proposition 4.1 (Cosmological fractions are crystallization fractions).** *The coherence partition within each observer's horizon ([Observer Loop Viability](/derivations/cosmology/observer-loop-viability), Proposition 7.4) is substrate accounting:*

$$C_0^{(A)} = \underbrace{\sum \Delta c_n^{(A)}}_{\text{crystallized coherence}} + \underbrace{S_H^{(A)}}_{\text{substrate coherence}}$$

*Each comoving observer $A$ has their own cosmological horizon, centered on themselves, enclosing their own coherence budget $C_0^{(A)}$. No two observers share exactly the same horizon — but by Proposition 2.2 (substrate homogeneity), the budget has the same value for all comoving observers: the substrate's constitutive universality guarantees that every horizon volume has the same statistical content. We write $C_0$ without superscript.*

*The cosmological density fractions are the crystallization fractions:*

$$\Omega_m = \frac{\sum \Delta c_n}{C_0} \qquad \Omega_\Lambda = \frac{S_H}{C_0}$$

*$\Omega_m$ measures the fraction of the per-horizon coherence budget that has been crystallized into particles and composite structures. $\Omega_\Lambda$ measures the fraction that remains in the geometric substrate.*

*Argument.* This is Proposition 7.5 of [Observer Loop Viability](/derivations/cosmology/observer-loop-viability), now with a physical interpretation for each term. The partition equation is an accounting identity — it holds for any $\Lambda$ and any $\Omega_m$ (Proposition 8.8 of observer-loop-viability). It describes how the budget splits but does not determine $\Lambda$. The genuine unknown is the crystallization fraction: how much coherence the bootstrap hierarchy extracts from the substrate. Computing this independently from the SM structure would determine $\Lambda$ (see Conjecture 8.9).

| Partition term | Substrate interpretation | Observed quantity |
|---|---|---|
| $C_0$ | Per-horizon substrate (Planck observers within horizon) | $\sim 4.6 \times 10^{122}$ |
| $\sum \Delta c_n$ | Coherence crystallized into particles | $\sim 1.4 \times 10^{122}$ |
| $S_H$ | Remaining geometric fabric | $\sim 3.25 \times 10^{122}$ |
| $\Omega_m$ | Crystallization fraction | $\approx 0.3$ |
| $\Omega_\Lambda$ | Fabric fraction | $\approx 0.7$ |

The second law ([Entropy](/derivations/thermodynamics/entropy), Theorem 4.1) drives $\Omega_\Lambda \to 1$ as the universe approaches de Sitter equilibrium — crystallized structures gradually dissolve back into the substrate as entropy grows. The observed $\Omega_\Lambda \approx 0.7$ is a snapshot of this process: the universe has crystallized about 30% of its per-horizon substrate into observable structure, and the fraction is slowly decreasing. $\square$

**Proposition 4.2 (Dark energy is substrate coherence).** *Dark energy, in this picture, is not a new form of energy or a cosmological constant added to the Einstein equations by hand. It is the coherence content of the un-crystallized geometric fabric — the $\sim 70\%$ of the per-horizon coherence budget that remains in the Planck-scale observer network constituting the geometry, rather than crystallized into particles.*

*The equation of state $w = -1$ ([Dark Energy Equation of State](/derivations/cosmology/dark-energy-equation-of-state), Theorem 3.1) follows because the substrate in de Sitter equilibrium has zero net coherence flux: the geometric fabric is static, with no tendency to crystallize further or to dissolve existing structure. This is the unique equilibrium of the substrate.* $\square$

**Remark ($C_0$ is per-observer, not global).** The quantity $C_0$ entering the substrate accounting is the coherence within a single observer's cosmological horizon — not the total coherence of the universe. The global total $\mathcal{C}_{\text{global}}$ (conserved on full Cauchy slices by Axiom 1) may be much larger, or even infinite if the observer network extends beyond the horizon. No observer can access $\mathcal{C}_{\text{global}}$. What each observer can account for is the substrate within their own causal patch. The universality of $C_0$ among comoving observers follows from the substrate's constitutive universality (Step 2) — a derived property of the aperiodic observer network, not an external assumption.

### Step 5: The Desert as Collective Emergence

**Proposition 5.1 (The great desert is substrate-filled).** *Between the Planck scale ($\sim 10^{19}$ GeV) and the electroweak scale ($\sim 10^2$ GeV), there are no stable particles ([Mass Hierarchy](/derivations/particles/mass-hierarchy), Proposition 6.1). But the desert is not empty — it is filled by the collective geometric substrate. The $\sim 10^{43}$ Planck-scale observers constituting a region of geometry at the electron's boundary scale are all present; they simply have not crystallized into particles.*

*Argument.* The electron's Compton wavelength is $\lambda_C = \hbar/(m_e c) \approx 3.9 \times 10^{-13}$ m $\approx 2.4 \times 10^{22}\,\ell_P$. Its boundary area is $A_\mathcal{B} \sim \lambda_C^2 \approx 5.8 \times 10^{44}\,\ell_P^2$. By Proposition 1.1, this boundary interfaces with $\sim A_\mathcal{B}/(4\ell_P^2) \approx 1.4 \times 10^{44}$ Planck-scale relational invariant crossings — each one a minimal observer in the substrate.

The electron's epistemic horizon ($\sim 10^{43}$ bits, from [Observer Loop Viability](/derivations/cosmology/observer-loop-viability), Proposition 1.5) is therefore not mysterious: it reflects the number of substrate elements the electron's boundary contacts. The "jump" from 1 bit (individual Planck observer) to $10^{43}$ bits (electron) is the transition from *individual* to *collective*: a single substrate element has 1 bit, but $10^{43}$ substrate elements collectively support a resonance mode with $10^{43}$ bits of epistemic capacity. $\square$

**Proposition 5.2 (First crystallization scale).** *The electroweak scale is the first scale at which the bootstrap supports stable crystallization from the substrate. Above this scale (higher energy, closer to Planck), the bootstrap functor $\mathcal{R}$ has no stable fixed points — the substrate is too "hot" (too dense, too energetic) for stable resonances to persist. At the electroweak scale, the quaternionic crystallization (SU(2) breaking) provides the first stable channel, and the electron, muon, and tau crystallize as the three generation-axis modes.*

*Argument.* By [Mass Hierarchy](/derivations/particles/mass-hierarchy) (Proposition 6.1), bootstrap fixed points are discrete. Between the Planck and electroweak scales, the exponential tunneling function $e^{-c/g^2}$ maps a continuous range of couplings to an empty set of stable modes (the fixed points are too widely spaced). The first stable modes appear at the electroweak crystallization, where the quaternionic structure provides the symmetry-breaking channel. Below this scale, the QCD crystallization provides additional stable modes (quarks, gluons). The great desert is the energy range where the substrate exists but no stable resonance modes are supported. $\square$

### Step 6: Dual Saturation from the Substrate Perspective

**Proposition 6.1 (Substrate perspective on double saturation).** *The double-saturation boundary condition ([Observer Loop Viability](/derivations/cosmology/observer-loop-viability), Conjecture 8.9) has a natural interpretation in the substrate picture:*

**(i) Bottom saturation (Planck).** *Each substrate element is at maximum information density — 1 bit per Planck cell, the holographic bound saturated. The substrate cannot be packed more densely without forming black holes. This is the maximum substrate density.*

**(ii) Top saturation (cosmological).** *The total substrate fills the cosmological horizon to its gravitational collapse limit: the enclosed mass $M_H = c^2 R_H/(2G)$ has Schwarzschild radius $R_S = R_H$. The substrate cannot be larger without collapsing.*

**(iii) The bridge.** *Between these two saturated endpoints, the SM particle content (determined by the division algebra chain) crystallizes a specific fraction of the substrate. The crystallization fraction $\Omega_m$ is determined by the particle content, and $C_0$ is whatever value makes the saturated substrate self-consistent with the observed crystallization.*

*The fixed-point equation from Conjecture 8.9 becomes: how much substrate must exist so that the SM crystallization, operating between Planck density (bottom) and horizon saturation (top), produces a self-consistent geometry?* $\square$

**Proposition 6.2 (Holographic bound on crystallization).** *The crystallized coherence cannot exceed the substrate coherence: $\sum \Delta c_n \leq S_H$. This follows from the holographic bound — the information content of matter within the horizon cannot exceed the horizon entropy. In substrate language: you cannot crystallize more coherence than the fabric contains.*

*Consequence: $\Omega_\Lambda \geq 0.5$. The universe must be substrate-dominated (dark-energy-dominated). The observed $\Omega_\Lambda \approx 0.7$ satisfies this bound.* $\square$

### Step 7: Observational Consequences

**Proposition 7.1 (Holographic noise as substrate signature).** *The discrete Planck-scale substrate produces a measurable signature: holographic noise with strain power spectral density $S_h = 2\alpha_H \ell_P/c$ and angular structure $\Gamma(\beta) = \cos\beta$ between interferometers at angle $\beta$ ([Causal Set Statistics](/derivations/holography/causal-set-statistics), [Holographic Noise prediction](/predictions/holographic-noise)). This noise is the direct observational signature of the substrate's discreteness.*

*The substrate picture explains why the noise has the specific angular structure it does: the Poisson statistics of the Planck-scale relational invariant network (Proposition 1.1) produce fluctuations that are correlated along each interferometer arm (because each arm samples a string of substrate elements) but independent between arms at different angles. The $\cos\beta$ overlap reduction is the geometric projection of arm-aligned Planck fluctuations.*

**Proposition 7.2 (Unified source of dark energy constraints and holographic noise).** *The dark energy constraints ([Dark Energy Equation of State](/derivations/cosmology/dark-energy-equation-of-state): $w \geq -1$, $w = -1$ preferred) and the holographic noise prediction both flow from the same substrate:*

- *$w \geq -1$ (no phantom energy): the substrate cannot be destroyed faster than it can redistribute — this would violate coherence conservation, tearing apart the geometric fabric itself.*
- *$w = -1$ (cosmological constant preferred): the substrate in de Sitter equilibrium has zero net coherence flux — no tendency to crystallize or dissolve. This is the unique equilibrium.*
- *$S_h = 2\alpha_H \ell_P/c$ (holographic noise): the discrete substrate fluctuates at the Planck scale, producing measurable strain.*

*These are not independent predictions — they are three aspects of the same physical substrate. Observational confirmation of any one strengthens the case for the others.* $\square$

**Proposition 7.3 (Cross-prediction with dark matter).** *Dark matter particles, if they are stable observer loops satisfying Axiom 3, are additional crystallizations from the substrate. Their loop closure pressure creates minimum halo masses $M_J \propto m_{\text{DM}}^{-3/2}$ with a Gaussian power-spectrum cutoff ([Dark Matter Granularity prediction](/predictions/dark-matter-granularity)). In the substrate picture, the dark matter coherence contributes to $\sum \Delta c_n$ (the crystallized fraction), and the dark matter mass scale is one of the discrete fixed points of the bootstrap functor that the division algebra chain supports. The total crystallization fraction $\Omega_m \approx 0.3$ includes both baryonic ($\Omega_b \approx 0.05$) and dark ($\Omega_{\text{DM}} \approx 0.25$) matter — both are coherence crystallized from the same substrate.* $\square$

## Open Gaps

1. **Quantitative crystallization fraction.** The substrate picture identifies $\Omega_m$ as the crystallization fraction but does not compute it from first principles. [Continuous-Discrete Duality](/derivations/foundation/continuous-discrete-duality) reformulates this: $\Omega_m$ is not computed by one layer operating on the other — it is a property of the fixed point where the smooth coherence manifold and the discrete observer network are simultaneously satisfied. The compatibility condition between these co-formed layers determines the crystallization fraction. The packing coefficient $\alpha(\beta)$ from [Aperiodic Order](/derivations/foundation/aperiodic-order) bridges the layers. Connects to [Mass Hierarchy](/derivations/particles/mass-hierarchy) Gap 5 and [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) Gap 6. *Difficulty: HARD.*

2. **Substrate dynamics.** This derivation treats the substrate in de Sitter equilibrium. In the early universe, the substrate density evolves from the post-bounce state ([Singularity Resolution](/derivations/spacetime/singularity-resolution)) through geometric inflation ([Geometric Inflation](/derivations/cosmology/geometric-inflation)) to the current epoch. How the crystallization fraction changes over cosmic time — and whether it tracks the observed $\Omega_m(z)$ evolution — is open. The substrate picture may provide a new handle on the geometric inflation derivation (currently provisional), by interpreting inflation as rapid substrate densification. *Difficulty: HARD.*
