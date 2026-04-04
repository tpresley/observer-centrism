---
title: "No Phantom Dark Energy"
status: "qualitative"
testability: "currently-tested"
dependsOn: ["cosmology/dark-energy-equation-of-state", "cosmology/observer-loop-viability"]
currentEvidence: "Planck 2018 + DESI 2024 BAO measure w = -1.03 ± 0.04, consistent with w ≥ -1. No evidence for phantom crossing."
distinctiveness: "shared"
---

## Prediction

The dark energy equation of state satisfies $w \geq -1$. Phantom energy ($w < -1$) is axiomatically forbidden. The preferred value is exactly $w = -1$ (a cosmological constant).

**Hard prediction**: $w \geq -1$. Any confirmed detection of $w < -1$ would falsify coherence conservation.

**Soft prediction**: $w = -1$ exactly. Among all permitted equations of state, only $w = -1$ gives a time-independent coherence partition, exact Lyapunov stability for observer loops, and zero coherence flux across the cosmological horizon — making it the unique asymptotic fixed point.

## Derivation Sketch

1. Coherence resides only in observer state spaces and relational invariants — there is no background reservoir ([Observer Loop Viability](/derivations/cosmology/observer-loop-viability), Prop 5.1)
2. Phantom energy ($w < -1$) produces a Big Rip at finite time: $t_{\text{rip}} = t_0 + 2/[3|1+w|H_0]$
3. At the Big Rip, all bound structures are torn apart by divergent tidal forces — including all observer triples and relational invariants
4. With no coherence carriers, Axiom 1 (coherence conservation) is violated
5. This is the expansion-side mirror of the bounce dissolution that excludes $\Lambda < 0$
6. Among the surviving equations of state ($w \geq -1$), only $w = -1$ gives time-independent geometry in the static patch, making it the unique equilibrium

## What This Rules Out

| Scenario | Status |
|---|---|
| Phantom dark energy ($w < -1$) | **Excluded** — Big Rip destroys all coherence carriers |
| Big Rip singularity | **Excluded** — geodesic incompleteness makes conservation law undefined |
| Phantom divide crossing ($w$ passing through $-1$) | **Excluded** — would require a phantom phase |
| Quintessence ($-1 < w < -1/3$) | **Permitted** but disfavored — approximate, not exact, Lyapunov stability |
| Cosmological constant ($w = -1$) | **Preferred** — unique fixed point |

## Connection to Other Predictions

The same conservation law (Axiom 1) that excludes phantom energy also:
- Excludes the Big Crunch ($\Lambda < 0$) via bounce dissolution ([Observer Loop Viability](/derivations/cosmology/observer-loop-viability), Thm 5.4)
- Implies the null energy condition for dark energy (Corollary 2.2 of the derivation)
- Connects to the [holographic noise](/predictions/holographic-noise) prediction — both flow from coherence conservation applied to horizons

Together, these constrain the universe to **bounded eternal expansion**: $\Lambda \geq 0$, $w \geq -1$, $\Lambda < 3/\ell_P^2$.

## Current Evidence

Planck 2018 + DESI 2024 BAO: $w = -1.03 \pm 0.04$, consistent with both the hard prediction ($w \geq -1$) and the soft prediction ($w = -1$). Euclid and Rubin Observatory (2024–2034) will measure $w$ to $\sim 1\%$ precision, providing a stringent test.

## Distinctiveness

The hard prediction ($w \geq -1$) is shared with general relativity's null energy condition. The framework's contribution is *deriving* it from coherence conservation rather than imposing it, and identifying $w = -1$ as structurally preferred rather than merely one option among many. Most dark energy models treat $w$ as a free parameter; this framework constrains it.
