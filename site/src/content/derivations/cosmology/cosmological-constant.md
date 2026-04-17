---
title: "Cosmological Constant"
status: "stub"
dependsOn: ["spacetime/einstein-equations", "holography/area-scaling", "foundation/observer-projected-spacetime", "cosmology/observer-loop-viability", "cosmology/dark-energy-equation-of-state"]
enablesDerivation: []
tags: ["cosmology", "holography"]
summary: "The cosmological constant is an observer-level-indexed effective parameter. At bootstrap level n with characteristic period T_n, the projected effective value is Λ_n = 12/(cT_n)². Existence (Lovelock), non-negativity (coherence conservation), Planck-scale upper bound, equation of state w = -1, and absence of a vacuum catastrophe are derived. The ~120-order ratio between the Planck-scale and cosmic-scale projections is the obstruction class of the observer-indexed spacetime sheaf — the cohomological signature of its failure to reduce to a single background manifold. A specific numerical value at a given observer level requires computing that obstruction class."
rigorLevel: "informal"
lastUpdated: 2026-04-16
---

## Overview

The cosmological constant $\Lambda$ is one of the most closely examined parameters in physics. Quantum field theory naively predicts a vacuum energy density $\sim M_P^4$; the observed value is $\sim 10^{-120} M_P^4$. In the standard framing this ~120-order gap is a fine-tuning puzzle: why is a single geometric constant so improbably small?

In the present framework the puzzle is structural rather than numerical. The continuous dual of the observer network is not a single spacetime — it is an observer-indexed family of Lorentzian patches ([Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime)). Each bootstrap level $n$ projects its own de Sitter static patch with de Sitter radius $L_n = c T_n / 2$ and effective cosmological constant

$$\Lambda_n = \frac{12}{(c T_n)^2}$$

There is no single $\Lambda$ that all observers share. The ~120-order ratio between the Planck-scale projection $\Lambda_0 \sim 1/\ell_P^2$ and the cosmic-scale projection $\Lambda_N \sim H^2$ is the **obstruction class** of the observer-indexed spacetime sheaf: the cohomological signature of its failure to glue to a single background manifold across bootstrap levels. The cosmological constant problem, in this framing, is not "why is $\Lambda$ so small?" but "compute the obstruction class."

The framework derives directly:

1. **Existence.** $\Lambda$ is the unique dimension-0 term in the gravitational action by Lovelock's theorem.
2. **Non-negativity.** $\Lambda \geq 0$ from coherence conservation.
3. **Planck-scale upper bound.** $\Lambda < 3/\ell_P^2$ from observer-existence constraints.
4. **Equation of state.** $w \geq -1$ (null energy condition from coherence conservation); $w = -1$ is the unique time-independent fixed point.
5. **No vacuum catastrophe.** Per-observer holographic bound caps mode count without summing over an unbounded global background.

Open:

- The specific numerical value at a given observer level (requires the obstruction class computation).
- The mapping from bootstrap levels to the observer population we inhabit.
- Upstream: Conjecture 3.1 of [Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) (minimal-observer projection as static dS patch), on which the per-level formula depends.

## Statement

**Thesis.** The cosmological constant is an observer-level-indexed effective parameter. At bootstrap level $n$ with characteristic period $T_n$ the projected effective value is $\Lambda_n = 12/(c T_n)^2$. Existence, non-negativity, a Planck-scale upper bound, and the equation of state $w = -1$ are derived. The ~120-order Planck/observed ratio is the obstruction class of the observer-indexed spacetime sheaf. A specific numerical prediction at a given observer level requires computing that class — a concrete categorical-cohomology target, not an inaccessible boundary datum.

## Step 1: Existence

**Proposition 1.1.** *$\Lambda$ is the unique dimension-0 term allowed in the gravitational action.*

*Proof.* Lovelock's theorem: in a 4-dimensional smooth Lorentzian geometry, the most general symmetric divergence-free tensor constructed from the metric and its first two derivatives is $G_{\mu\nu} + \Lambda g_{\mu\nu}$, with $\Lambda$ the unique dimension-0 addition to the Einstein tensor. See [Einstein Field Equations](/derivations/spacetime/einstein-equations) for the full argument. No covariance or dimensional reasoning excludes the $\Lambda$ term; its presence in the theory is a theorem, not a postulate. $\square$

## Step 2: Observer-Indexed Effective Value

**Proposition 2.1.** *For a bootstrap-level-$n$ observer $\mathcal{O}_n$ with characteristic period $T_n$, the effective cosmological constant in $\mathcal{O}_n$'s projected continuous dual is*

$$\Lambda_n = \frac{3}{L_n^2} = \frac{12}{(c T_n)^2}, \qquad L_n = \frac{c T_n}{2}$$

*Structural argument.* [Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Conjecture 3.1 asserts that a minimal observer's projected continuous dual $M_{\mathcal{O}_0}$ is the static patch of de Sitter space with de Sitter radius $L_0 = c T_0/2$. [Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Proposition 4.1 extends this to higher bootstrap levels. The effective cosmological constant of a de Sitter patch of radius $L$ is $\Lambda = 3/L^2$, giving the formula above.

The level-indexed decomposition of coherence entropy $\mathcal{C}_0 = \mathcal{C}_\text{acc}^{(n)} + S^{(n)}$ in [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) Step 8 is the coherence-theoretic face of the same observer-indexing: each level projects its own effective cosmological parameters; cross-level comparisons mix quantities belonging to different projections.

**Proposition 2.2 (No single shared $\Lambda$).** *Observers at different bootstrap levels project de Sitter patches of different radii. No isometric embedding of two patches with different $L_n$ into a single de Sitter manifold exists ([Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Proposition 6.1). There is therefore no universal $\Lambda$ that all observers share; each level projects its own.*

**Planck and cosmic endpoints.** A minimal observer has $T_0 \sim T_P = \ell_P/c$, so $L_0 \sim \ell_P$ and $\Lambda_0 \sim 1/\ell_P^2$. A horizon-scale observer has $T_N \sim H^{-1}$, so $L_N \sim c/H$ and $\Lambda_N \sim H^2$. These are the two endpoints of the Λ hierarchy; see Step 6 for the structural interpretation of their ratio.

## Step 3: Non-Negativity

**Proposition 3.1.** *$\Lambda \geq 0$.*

*Proof.* A negative cosmological constant forces eventual contraction; at Planck density the resulting bounce would destroy all coherence carriers, violating Axiom 1 (coherence conservation). [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) Theorem 5.4 formalizes this argument: the divergent effective pressure at the Planck-density bounce is incompatible with finite observer energy $E_\mathcal{O} = \hbar\omega$, so observer loops cannot survive the transition. A $\Lambda < 0$ cosmology cannot host framework-valid observers at late times. $\square$

## Step 4: Planck-Scale Upper Bound

**Proposition 4.1.** *$\Lambda < 3/\ell_P^2$.*

*Proof.* [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) Theorem 2.1 establishes that minimum observer spatial extent must exceed $\ell_P$, otherwise loop closure (Axiom 3) fails. For a de Sitter patch with radius $L = c T/2$, this requires $L > \ell_P$, i.e., $\Lambda = 3/L^2 < 3/\ell_P^2$. This is a genuine constraint on the value of $\Lambda$ at level 0: not every value in $[0, \infty)$ is compatible with observer existence, only $[0, 3/\ell_P^2)$. $\square$

## Step 5: Equation of State

**Proposition 5.1.** *The effective dark-energy component satisfies $w \geq -1$, and $w = -1$ is the unique time-independent fixed point.*

*Proof.* See [Dark Energy Equation of State](/derivations/cosmology/dark-energy-equation-of-state) Theorems 2.1, 3.1. Phantom energy $w < -1$ would destroy all coherence carriers at the Big Rip in finite proper time, violating Axiom 1 — this is the null energy condition derived from coherence conservation rather than postulated. Among $w \in [-1, \infty)$, only $w = -1$ gives zero coherence flux between the accessible and inaccessible sectors and exhibits exact Lyapunov stability, making the cosmological constant the unique thermodynamic equilibrium. $\square$

## Step 6: The 120-Order Hierarchy as Obstruction Class

**Proposition 6.1.** *The ratio $\Lambda_0 / \Lambda_N \sim (T_N/T_0)^2 \sim 10^{122}$ is the magnitude of the gluing obstruction for the observer-indexed spacetime sheaf between levels 0 and $N$.*

*Structural argument.* By [Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Proposition 6.3, the failure of observer-projected de Sitter patches at different levels to share a single background manifold is quantified by the ratio of their de Sitter radii (equivalently, of their effective cosmological constants). The Planck-scale projection has $L_0 \sim \ell_P$; the cosmic-scale projection has $L_N \sim c/H$; the ratio $L_N/L_0 \sim 10^{60}$ squares to $10^{120}$ in the $\Lambda$ ratio.

**Consequence.** In this framing, the cosmological constant problem is not a question about why a single quantity takes an improbably small value. It is a question about the structure of the observer-indexed spacetime sheaf: what is the obstruction class, and which observer level's projection does our measurement of $\Lambda$ correspond to? The target is a categorical-cohomology computation, not a fine-tuning mystery. The 120 orders are an observable signature of the gluing obstruction — they *should* be there.

## Step 7: No Vacuum Catastrophe

**Proposition 7.1.** *The standard QFT vacuum-energy catastrophe — the prediction of vacuum energy ~120 orders above the observed $\Lambda$ — does not arise in this framework.*

*Argument.* The naive QFT calculation sums zero-point modes over an assumed global background. The framework has no such background: each observer projects its own patch ([Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Step 2). The per-observer holographic bound ([Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Consequence 1) caps the mode count on each $M_{\mathcal{O}_n}$ at $\pi L_n^2/\ell_P^2$, which exactly equals $3\pi/(\Lambda_n \ell_P^2)$ — the mode count and the projected $\Lambda$ are linked by the geometry of the single projection, with no unbounded global sum. The QFT divergence reflects the assumption of a global background, not a feature of the coherence structure.

## Obvious Approaches That Do Not Close the Argument

Two natural routes are often proposed for deriving a numerical $\Lambda$. Neither closes the argument; the failure modes are informative about what the correct target is.

### Holographic self-consistency — circular

Setting $S \leq A_H / (4\ell_P^2)$ for a cosmic horizon with $A_H = 4\pi/\Lambda$ gives $\Lambda \sim 3\pi/(S\,\ell_P^2)$. This inverts the holographic bound but does not determine $\Lambda$ independently: the total entropy $S$ is not fixed by the axioms — it depends on the number and distribution of observers within the horizon. The "observed scaling" $\Lambda \sim H_0^2/c^2$ recovered this way is tautological: the de Sitter horizon radius is $R_H \sim c/H_0$ by definition.

### Single-observer universe — dimensional analysis

Treating the universe as a single self-observing entity with characteristic timescale $\sim 1/H_0$ and minimum-cycle cost $\hbar$ yields $\Lambda \sim \hbar H_0/c^2$ by dimensional analysis. This is not a prediction: $H_0$ is an observed quantity, not derived, and the argument returns $\Lambda \sim H_0^2$ — the Friedmann equation, not a cosmological-constant calculation. More fundamentally, treating the universe as a single observer presupposes a shared horizon and thus a single background, which the observer-projected reframing of Step 2 rejects.

Both routes assume a single global $\Lambda$ to derive. The correct object to compute, per Step 6, is the obstruction class of an observer-indexed sheaf — not a single number.

## Rigor Assessment

**Derived (from the framework's structural results):**
- Proposition 1.1 (existence): Lovelock theorem, direct.
- Proposition 3.1 (non-negativity): [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) Theorem 5.4.
- Proposition 4.1 (Planck-scale upper bound): [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) Theorem 2.1.
- Proposition 5.1 (equation of state): [Dark Energy Equation of State](/derivations/cosmology/dark-energy-equation-of-state) Theorems 2.1, 3.1.
- Proposition 7.1 (no vacuum catastrophe): direct consequence of the per-observer holographic bound.

**Informal (observer-indexed reframing; conditional on upstream conjecture):**
- Proposition 2.1 (per-level $\Lambda_n$): conditional on [Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Conjecture 3.1 (minimal-observer projection as static dS patch).
- Proposition 2.2 (no single shared $\Lambda$): follows from the projection conjecture plus the isometric-embedding obstruction ([Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Proposition 6.1).
- Proposition 6.1 (hierarchy as obstruction class): structural identification; quantitative computation requires the sheaf-cohomology setup ([Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Open Gaps 3 and 4).

**Open:**
- Specific numerical value of $\Lambda$ at a given observer level.
- Mapping between observer populations and bootstrap levels.
- Quantitative obstruction class computation.

## Open Gaps

1. **Minimal-observer projection theorem.** Proposition 2.1 depends on [Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Conjecture 3.1. A rigorous projection theorem would promote Proposition 2.1 from informal to derived. *Difficulty: MODERATE.*

2. **Obstruction class computation.** Compute the obstruction class of the observer-indexed spacetime sheaf and relate it quantitatively to the measured $\Lambda$. Requires the categorical-semantics setup on $\mathbf{Obs}$ (see [Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Open Gap 3) and a target expression for the class. *Difficulty: HARD.*

3. **Observer-level identification.** Identify which bootstrap level our measurement of $\Lambda$ corresponds to. If level $N$ is pinned by observer-existence conditions or by the cosmic horizon structure, the specific value of $\Lambda_N$ becomes predictable once the obstruction class is computed. *Difficulty: MODERATE.*

4. **Crystallization fraction.** The coherence partition $\mathcal{C}_0 = \sum \Delta c_n + S_H$ has a free parameter — the crystallization fraction $\Omega_m$. An independent derivation of $\Omega_m$ from the Standard Model structure (4 algebra levels, 3 generations, known couplings) would provide a cross-check on the obstruction class computation. See [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) Gap 6 (geometry functor). *Difficulty: HARD.*

5. **Sheaf cohomology on $\mathbf{Obs}$.** Formalizing the observer-indexed spacetime sheaf requires a Grothendieck topology on the observer category. Inherited from [Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) Open Gap 3. *Difficulty: HARD.*
