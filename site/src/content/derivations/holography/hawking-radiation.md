---
title: "Hawking Radiation"
status: "draft"
dependsOn: ["holography/black-hole-entropy", "minimal-observer/coherence-dual-pairs"]
enablesDerivation: ["holography/information-paradox"]
tags: ["holography"]
summary: "Loop closure at horizons forces coherence-dual pair production — one falls in, one radiates out; thermal spectrum from maximal entropy"
rigorLevel: "semi-formal"
sourceSection: "10-holography"
lastUpdated: 2026-03-08
---

## Statement

Minimal observer loops straddling a black hole horizon cannot close normally — the horizon prevents the inward-directed part of the loop from returning. The resolution: a coherence-dual pair is produced at the horizon. One member falls inward; the other propagates outward as Hawking radiation. The thermal spectrum follows from the maximal-entropy character of the horizon state.

## Derivation

### Step 1: Loop Closure at Horizons

From [Gravity](/derivations/spacetime/gravity), the event horizon is the surface where the relational invariant density is so high that no outward-directed loop can close. Consider a minimal observer loop whose spatial extent straddles the horizon — part inside, part outside.

The loop closure condition requires the loop to complete a full cycle. But at the horizon, the inward-directed phase propagation cannot return outward (the escape velocity exceeds $c$). The loop is **broken** — it cannot close across the horizon.

### Step 2: Coherence-Dual Pair Production

A broken loop violates the loop closure axiom (Axiom 3). The coherence carried by the loop must be conserved (Axiom 1). The resolution is forced by these two constraints:

From [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs), every observer has a coherence-dual partner — equal mass, conjugate charges. At the horizon, the broken loop resolves into a coherence-dual pair:

$$\text{vacuum loop} \to \mathcal{O}_{\text{in}} + \bar{\mathcal{O}}_{\text{out}}$$

- $\mathcal{O}_{\text{in}}$: falls through the horizon (the inward portion of the broken loop, completing its cycle inside)
- $\bar{\mathcal{O}}_{\text{out}}$: propagates outward (the outward portion, completing its cycle as radiation)

The total coherence is conserved: the outgoing radiation carries coherence extracted from the black hole's gravitational field (the coherence geometry itself supplies the energy).

### Step 3: The Hawking Temperature

The energy of the outgoing partner is determined by the horizon's surface gravity $\kappa$, which measures how strongly the coherence geometry resists loop closure:

$$T_H = \frac{\hbar \kappa}{2\pi c k_B}$$

For a Schwarzschild black hole of mass $M$: $\kappa = c^4 / (4GM)$, giving:

$$T_H = \frac{\hbar c^3}{8\pi G M k_B}$$

*Why this temperature?* The horizon is a surface of maximal entropy (from [Black Hole Entropy](/derivations/holography/black-hole-entropy)). A maximal-entropy surface in thermal equilibrium has a unique temperature — the one that maximizes the total entropy of the horizon plus its surroundings. This is the Hawking temperature.

### Step 4: Thermal Spectrum

The radiation has a **thermal** (Planck) spectrum at temperature $T_H$. This follows from the maximal-entropy principle:

1. The horizon state has maximum entropy for its area (it is a saturated holographic surface)
2. The radiation emitted by a maximum-entropy state is thermal (this is the definition of thermal equilibrium)
3. The spectrum is determined by $T_H$ alone, independent of the black hole's formation history

The thermal spectrum means the radiation carries no information about the black hole's interior beyond its mass, charge, and angular momentum. This is the origin of the information paradox — addressed in [Information Paradox](/derivations/holography/information-paradox).

### Step 5: Black Hole Evaporation

As Hawking radiation carries energy away, the black hole loses mass:

$$\frac{dM}{dt} = -\frac{\hbar c^6}{15360 \pi G^2 M^2}$$

The evaporation rate increases as $M$ decreases (smaller black holes are hotter). The total evaporation time scales as $M^3$:

$$t_{\text{evap}} \sim \frac{5120 \pi G^2 M^3}{\hbar c^4}$$

For a solar-mass black hole, $t_{\text{evap}} \sim 10^{67}$ years. For a Planck-mass black hole, $t_{\text{evap}} \sim t_P$.

In the final stages, the black hole approaches the Planck scale where the continuum approximation fails. The discrete relational invariant network takes over — the endpoint of evaporation requires the full discrete theory.

## Rigor Assessment

**What is established:**
- The broken-loop argument at the horizon is structurally sound
- Pair production from vacuum fluctuations near horizons is standard physics (Unruh effect generalizes this)
- The Hawking temperature formula is well-established
- The thermal spectrum from maximal entropy is thermodynamically rigorous

**What needs work:**
- The "loop straddling the horizon" picture is qualitative — a rigorous version needs the quantum field theory in curved spacetime formalism
- The energy source (extracted from the gravitational field) needs quantitative treatment
- The transition from the continuous Hawking calculation to the discrete framework at the Planck scale is not addressed
- The coherence-dual pair identification is assumed to be the unique resolution — alternatives need to be ruled out

## Open Gaps

1. **Trans-Planckian problem**: Standard Hawking radiation involves modes with arbitrarily high frequency near the horizon (blue-shifted to trans-Planckian). The discrete framework should regulate this.
2. **Greybody factors**: The actual spectrum deviates from perfect thermal due to the effective potential barrier around the black hole. These corrections should be derivable.
3. **End state**: What happens at the endpoint of evaporation? A Planck-mass remnant? Complete evaporation? The answer depends on the discrete structure.
