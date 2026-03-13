---
title: "Observer Loop Viability Bounds"
status: "stub"
dependsOn: ["spacetime/singularity-resolution", "holography/area-scaling", "minimal-observer/structure", "axioms/loop-closure"]
enablesDerivation: []
tags: ["cosmology", "quantum-gravity"]
summary: "Investigate whether the structural requirements of Axioms 2 and 3 (observer loops must close with Lyapunov stability) restrict which spacetimes can host valid observer DAGs, yielding constraints on the cosmological constant and potentially its sign"
rigorLevel: "informal"
lastUpdated: 2026-03-12
---

## Status: Stub

> This derivation is at stub status. The target and strategy are outlined below, but no formal work has been done. The motivation comes from the ontic/epistemic analysis in [Cosmological Constant](/derivations/cosmology/cosmological-constant) (§Root Cause: The self-consistency loop).

## Target

**Determine whether the three axioms — specifically the structural requirements on observer loops — constrain the cosmological constant $\Lambda$.**

The [Cosmological Constant](/derivations/cosmology/cosmological-constant) derivation is non-viable: both proposed routes to computing $\Lambda$ fail. However, it identifies a potential Route 3: the axioms require observer structures (state space, Noether invariant, self/non-self boundary, Lyapunov-stable loop closure) that may not be realizable in arbitrary spacetimes. If only certain values of $\Lambda$ permit valid observer DAGs, this constrains the solution space from above (and possibly constrains the sign).

This is **not** anthropic reasoning. It does not ask "can observers like us exist?" but rather "can observer triples $(\Sigma, I, \mathcal{B})$ satisfying Axioms 2 and 3 exist at all?"

## Key Questions

### Q1: Upper bound on $|\Lambda|$

In de Sitter space ($\Lambda > 0$), the cosmological horizon has radius $R_H = \sqrt{3/\Lambda}$. An observer loop (Axiom 3) requires:
- Spatial extent $\geq \ell_P$ ([Minimal Observer Structure](/derivations/minimal-observer/structure))
- Temporal period $T$ satisfying Lyapunov stability
- Coherence content within the observer's boundary $\mathcal{B}$

If $R_H \lesssim \ell_P$ (i.e., $\Lambda \gtrsim 3/\ell_P^2$), no observer fits within the horizon. This gives a trivial **Planck-scale upper bound**: $\Lambda \lesssim \ell_P^{-2} \sim 10^{66}\;\text{cm}^{-2}$.

The interesting question is whether **Lyapunov stability** tightens this. The de Sitter expansion rate $H = \sqrt{\Lambda/3}$ sets a coherence dissipation timescale: coherence at the observer boundary is redshifted away at rate $H$. For a loop of period $T$ to be Lyapunov stable, the coherence refreshed per cycle must exceed the coherence lost to expansion:

$$\frac{\mathcal{C}_{\text{refreshed}}}{T} > H \cdot \mathcal{C}_{\text{boundary}}$$

If this gives a bound tighter than $\Lambda \lesssim \ell_P^{-2}$, it would be a nontrivial result.

### Q2: Sign of $\Lambda$

For $\Lambda < 0$ (anti-de Sitter), the universe recollapses in finite conformal time. The [Singularity Resolution](/derivations/spacetime/singularity-resolution) derivation shows the crunch bounces at Planck density rather than forming a singularity. But the question is whether observer loops can maintain Lyapunov stability through a bounce — the curvature diverges to the Planck bound, and the coherence geometry undergoes maximal disruption.

If observer loops **cannot** survive a bounce while maintaining their Noether invariant $I$ (Axiom 2), then $\Lambda < 0$ spacetimes are excluded and the framework predicts $\Lambda \geq 0$.

A separate argument may come from the [Cosmological Arrow](/derivations/thermodynamics/time) (Gap 3): if the structural arrow of time (monotonically increasing relational invariant depth) requires monotonically growing "room" in the coherence geometry, this implies expansion, which implies $\Lambda > 0$ (or at minimum $\Lambda \geq 0$).

### Q3: Can the bound be tighter than Planck-scale?

The 120-order-of-magnitude hierarchy ($\Lambda_{\text{obs}} \sim 10^{-122}\;\ell_P^{-2}$) is the heart of the cosmological constant problem. A Planck-scale bound does not explain this hierarchy.

A tighter bound would require showing that observer loops need not just *fit* inside the horizon but require a large hierarchy between the loop scale and the horizon scale — i.e., that $R_H \gg \ell_P$ is required for Lyapunov stability. One possible mechanism: Axiom 2 requires a self/non-self boundary $\mathcal{B}$, and [Multiplicity](/derivations/minimal-observer/multiplicity) proves the non-self side must contain at least one other observer. Lyapunov-stable loop closure (Axiom 3) requires ongoing Type III interactions across $\mathcal{B}$ to replenish the observer's coherence — the observer cannot cycle in isolation. If sustaining these interactions requires a minimum non-self coherence content (and therefore a minimum spacetime volume), this would force $R_H / \ell_P \gg 1$.

Whether this actually gives $R_H / \ell_P \sim 10^{61}$ (the observed ratio) seems unlikely without additional input.

## Strategy

1. **Formalize observer loop requirements in curved spacetime.** Express the Lyapunov stability condition (Axiom 3) in terms of the spacetime metric. What does "stable phase cycling" mean when the background is expanding?

2. **Compute coherence dissipation from expansion.** In de Sitter space, coherence at the observer boundary redshifts. Quantify the rate as a function of $\Lambda$ and the observer's spatial extent.

3. **Derive the viability condition.** Combine the Lyapunov condition with the coherence dissipation to obtain $\Lambda_{\max}$: the maximum $\Lambda$ compatible with at least one observer loop closing.

4. **Analyze the $\Lambda < 0$ case.** Determine whether observer loops survive the AdS crunch/bounce. This requires combining the singularity resolution (Planck-density bounce) with the observer structure analysis.

5. **Assess the sign prediction.** If $\Lambda < 0$ is excluded and $\Lambda = 0$ permits observers, the framework predicts $\Lambda \geq 0$. If additionally $\Lambda = 0$ is unstable (the structural arrow requires expansion), the framework predicts $\Lambda > 0$.

## Dependencies

| Prerequisite | What it provides |
|---|---|
| [Minimal Observer Structure](/derivations/minimal-observer/structure) | Minimum spatial extent, coherence requirements |
| [Loop Closure](/derivations/axioms/loop-closure) | Lyapunov stability condition, period $T$ |
| [Holographic Entropy Bound](/derivations/holography/area-scaling) | Maximum coherence within a horizon |
| [Singularity Resolution](/derivations/spacetime/singularity-resolution) | Planck-density bounce replaces Big Crunch |
| [Entropy](/derivations/thermodynamics/entropy) | Bounded observer theorem, coherence domains |
| [Time as Phase Ordering](/derivations/thermodynamics/time) | Structural arrow, cosmological arrow (Gap 3) |

## Connection to Cosmological Constant

This derivation addresses [Cosmological Constant](/derivations/cosmology/cosmological-constant), Route 3 ("An observer-existence constraint"). Even partial results would be valuable:
- An upper bound on $|\Lambda|$ (even if Planck-scale) establishes the principle that axioms constrain solutions, not just dynamics
- A sign prediction ($\Lambda > 0$) would upgrade the cosmological constant page's item 2 from ✗ to ✓
- A tighter bound (sub-Planck) would be a major result

## Open Gaps

1. **Lyapunov stability in expanding spacetime**: The existing loop closure analysis assumes flat or slowly-varying backgrounds. Extending to de Sitter requires explicit treatment of cosmological expansion effects on phase cycling.
2. **Observer survival through bounce**: Whether the Noether invariant $I$ (Axiom 2) can be preserved through a Planck-density bounce is an open question that connects to the black hole information paradox resolution.
3. **Non-self coherence requirement**: Axiom 2 requires a self/non-self boundary $\mathcal{B}$, and the non-self side must contain other observers (not a background — [Multiplicity](/derivations/minimal-observer/multiplicity) proves at least two must coexist). Does the minimum complexity or number of non-self observers needed to sustain a stable loop constrain the spacetime volume, and therefore $\Lambda$?
