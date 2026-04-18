---
title: "Horizon as Null Boundary Shell"
status: "provisional"
dependsOn: ["cosmology/cyclic-cosmology", "holography/area-scaling", "axioms/loop-closure", "axioms/observer-definition", "interactions/bootstrap"]
enablesDerivation: []
tags: ["holography", "gauge", "foundation"]
summary: "Every observer's cosmological horizon is a permanent null shell of relational carriers — A–B relations at the distance where Cauchy-slice tilts exactly saturate the cyclic period. Inside this distance the A–B relation is timelike; outside it is fully spacelike; at the saturation distance it is null-tangent. The shell's permanence follows from Axiom 2 (observer boundary); its null character follows from the antichain-boundary structure of the covering property, without invoking a pre-existing Lorentzian metric. The holographic bound counts the independent relational carriers on this shell. Identification of these carriers with specific gauge bosons (spin, group, representation) is an open extension."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-17
---

## Overview

This derivation connects holography, inter-observer relations, and cyclic cosmology through a single structural observation about the observer's cosmological horizon.

The starting point is the **Cauchy slice covering property** ([Cyclic Cosmology](/derivations/cosmology/cyclic-cosmology), Proposition 5.4): during a single tick of a level-$n$ observer $A$, the Cauchy slices through that tick cover the entire time index of most level-$m \leq n$ observers at cosmological distance. This follows from exact cyclic closure (finite $T_\mathcal{U}$), temporal completeness of antichains in the DAG, and the tilt range available at cosmological distance.

The central object is not a free-standing "entity" at the horizon, but the **relational carrier** between $A$ and a distant observer $B$ — the locus of DAG events jointly accessible to both. The A–B relational carrier has three distinct regimes determined by $B$'s distance from $A$:

- **Inside the horizon:** tilt range $< T_\mathcal{U}$; some B-events are strictly in A's causal future or past; A–B relation is *timelike*.
- **Outside the horizon:** tilt range $> T_\mathcal{U}$; every B-event is antichain-compatible with $A(t_k)$ many times over; A–B relation is *fully spacelike*.
- **At the horizon:** tilt range exactly saturates $T_\mathcal{U}$; every B-event is antichain-compatible with $A(t_k)$ exactly once, at the margin; A–B relation is *null-tangent*.

Every observer has a self/non-self boundary $\mathcal{B}$ by [Axiom 2](/derivations/axioms/observer-definition), so this null shell is a permanent structural feature of being an observer, not a transient geometric accident. The [holographic bound](/derivations/holography/area-scaling) counts the independent relational carriers on this shell; the area-scaling of the bound reflects the area-scaling of the null boundary locus.

What the derivation establishes is that the horizon's null character is a *derived* consequence of DAG-level antichain structure plus exact cyclic closure — not a metric-geometric input. What it does **not** yet establish is the identification of these null relational carriers with specific gauge bosons. Necessary kinematic properties (massless, boundary-mediating, permanent) are shared by gauge bosons, gravitons, and any massless field; the derivation of the specific gauge group and spin content is deferred to [Open Gap 1](#open-gaps).

## Step 1: The Cauchy Slice Covering Property

**Proposition 1.1 (Covering).** *For observer $A$ at bootstrap level $n$, during a single A-tick $(t_k \to t_{k+1})$, there exist observers $B$ at level $m \leq n$ such that the Cauchy slices through A's tick cover all of B's time indexes. In a cosmological setting, the majority of level-$m$ observers satisfy this condition.*

*Argument.* Three ingredients:

**(i) Spatial separation.** In a universe with $\sim 10^{122}$ observers, the overwhelming majority are at cosmological distance from $A$ — beyond A's causal cone during a single tick. Observer counts in 3D grow as $d^2$, so the bulk of the population sits near horizon-scale distances.

**(ii) Incomparability.** For $B$ entirely outside A's causal future/past during A's tick, every pair $(A(t_k), B(\tau))$ is incomparable in the DAG's partial order. Incomparable events can coexist in an antichain. Therefore, for each time index $\tau$ of $B$, there exists a Cauchy slice containing both $A(t_k)$ and $B(\tau)$.

**(iii) Temporal completeness + tilt range.** Every antichain in the framework's DAG includes nodes from every time index ([Cyclic Cosmology](/derivations/cosmology/cyclic-cosmology), Proposition 5.4). Within A's single tick, the Cauchy-slice family has a tilt range $\pm d/c$ at B's location. For $B$ at distance $d \sim cT_\mathcal{U}/2$, the total available tilt range $2d/c$ equals $T_\mathcal{U}$, which is exactly B's cyclic period. Every B-event is therefore reachable by some Cauchy slice through A's tick. $\square$

**Proposition 1.2 (Level-indexed scope).** *The scope of the covering grows monotonically with observer level. A level-$n$ observer's single tick covers:*

- *All level-$0$ observers at cosmological distance (level 0 ticks fastest — most time indexes per cycle)*
- *All level-$m$ observers at cosmological distance, for $m \leq n$ (lower levels tick faster, more easily covered)*
- *The scope is bounded by the level-$n$ horizon area: $\dim(\text{accessible state space}) \leq A_{\text{horizon}}^{(n)} / (4\ell_P^2)$*

*The covering scope is proportional to horizon area, which increases monotonically with level.* $\square$

## Step 2: The A–B Relational Carrier and its Null Character

**Definition 2.0 (Relational carrier).** *For observers $A$ and $B$, the **A–B relational carrier** is the set of DAG events lying on A's self/non-self boundary $\mathcal{B}_A$ that participate in a Type III relation between $A$ and $B$ over one cyclic period $T_\mathcal{U}$. The carrier is a relation, not a particle: it has no intrinsic proper-time loop of its own, and its existence across $T_\mathcal{U}$ is contingent on both A's and B's loop closures (Axiom 3 enters as a precondition on the endpoints, not as a constraint on the carrier).*

**Proposition 2.1 (Three regimes).** *The A–B relational carrier has three kinematic regimes, determined by B's distance $d$ from $A$:*

1. *$d < cT_\mathcal{U}/2$ (inside horizon):* *tilt range $2d/c < T_\mathcal{U}$; some B-events lie strictly in A's causal future or past (comparable, not antichain-compatible with any A(t_k)); the A–B relation is **timelike**.*
2. *$d > cT_\mathcal{U}/2$ (outside horizon):* *tilt range $2d/c > T_\mathcal{U}$; every B-event is antichain-compatible with $A(t_k)$ many times over (by cyclic identification); the A–B relation is **fully spacelike**.*
3. *$d = cT_\mathcal{U}/2$ (at horizon):* *tilt range $2d/c = T_\mathcal{U}$ exactly; every B-event is antichain-compatible with $A(t_k)$ exactly once; the A–B relation is at the **marginal boundary** between timelike and fully spacelike.*

*Argument.* The three cases follow directly from comparing the tilt range $2d/c$ to the cyclic period $T_\mathcal{U}$. In the partial order on antichains parameterized by tilt, the horizon distance is the unique value where the set of (A(t_k), B(τ)) antichain configurations has coordinate-measure $T_\mathcal{U}$ — precisely the cycle length, no more, no less. $\square$

**Proposition 2.2 (Null character of the horizon carrier).** *The A–B relational carrier at horizon distance has null worldline character.*

*Argument.* By Proposition 2.1 case 3, at horizon distance every B-event is antichain-compatible with $A(t_k)$ exactly once, at the margin. This marginal compatibility is the DAG-level expression of causal-cone tangency: the A–B relation is incomparable (antichain-compatible) but sits on the boundary of the comparability region. In DAG terms, the horizon-distance locus is $\partial J^\pm(A(t_k))$, the boundary of A's causal future and past. This boundary is the null-cone structure of the DAG — and in any continuum limit where the DAG supports a Lorentzian metric (as developed in the [Geometric Substrate](/derivations/cosmology/geometric-substrate) and [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) derivations), $\partial J^\pm$ is a null hypersurface. The carrier's worldline therefore lies on this null hypersurface.

Critically, the null character here is a property of the A–B *pair*, not an intrinsic property of a particle-like entity. The carrier has no proper-time clock of its own to "freeze." Null-ness refers to the tangency of the relation to A's causal cone, and is derived from DAG antichain structure without invoking a pre-existing Lorentzian metric on ambient spacetime. $\square$

**Remark (Why this sidesteps the entity conflation).** An earlier version of this derivation argued that the "entity" at the horizon has zero proper time because its loop closure spans all of A's coordinate time. That framing conflated a relation with a particle. A timelike observer $B$ with proper period $T_B = T_\mathcal{U}$ also satisfies "one loop spans one cycle" but is not null. The correction is to identify the null object as the *relation*, not as $B$ itself: $B$ is a perfectly ordinary observer with its own proper time, but the A–B relational carrier — the boundary locus connecting them — lies on A's null cone.

**Remark (Consistency with GR).** In general relativity, any observer's de Sitter cosmological horizon is a null hypersurface generated by null geodesics. The framework reaches the same conclusion through a different route: the antichain boundary of a DAG with finite cyclic period, not the causal geometry of a presupposed dS metric. Agreement is a consistency check, not an import.

## Step 3: The Horizon Shell

**Proposition 3.1 (The horizon is a shell of null relational carriers).** *The cosmological horizon of observer $A$ is the locus $\{B : d(A, B) = cT_\mathcal{U}/2\}$. By Proposition 2.2, every A–B relational carrier at this locus is null. The horizon is therefore a shell of null carriers.*

*Argument.* Direct application of Proposition 2.1 to every B in A's universe. The horizon shell is the 2-sphere of spatial points at distance $cT_\mathcal{U}/2$, populated by one A–B relational carrier per distant observer B. $\square$

**Proposition 3.2 (Permanence).** *The null shell is permanent. Every observer has a self/non-self boundary $\mathcal{B}$ ([Axiom 2](/derivations/axioms/observer-definition)). The horizon exists at all observer times, so the shell of null carriers is a structural feature of being an observer, not a transient phenomenon.*

**Remark (Observer-universal, not just cosmological).** The argument applies to any observer at any bootstrap level, with the appropriate level-indexed horizon distance (Proposition 1.2). Every observer — minimal or composite — has a null boundary shell. The shell's area scales with the level's horizon, which grounds the level-indexed holographic bound.

**Remark (On "spacelike" language).** Outside the horizon, A–B events are *causally disconnected* (no signal can propagate between them within $T_\mathcal{U}$) rather than strictly spacelike in the single-interval sense of flat Minkowski space. The framework's DAG captures this via antichain compatibility: outside-horizon events are antichain-compatible cyclically many times, inside-horizon events not at all, at-horizon events exactly once.

## Step 4: Kinematic Properties of the Null Shell

**Proposition 4.1 (The horizon shell's necessary kinematic properties).** *Every A–B relational carrier at the horizon shell exhibits:*

1. *Null worldline character (Proposition 2.2) — **massless***
2. *Location on A's boundary $\mathcal{B}_A$ (Definition 2.0) — **boundary-mediating***
3. *Permanence (Proposition 3.2) — **always present***

*These are the defining kinematic properties of massless, boundary-mediating, persistent relational structure in the framework.*

**Remark (Necessary but not sufficient for gauge-boson identification).** The three properties above are shared by gauge bosons, gravitons, and any massless field mediating boundary interactions. Null worldline + boundary location + permanence does *not* uniquely pick out gauge bosons — it picks out any massless boundary-mediating mode. The further identification of horizon shell modes with specific gauge bosons (U(1), SU(2), SU(3)) requires:

- Derivation of spin-1 (gauge-vector character) from horizon-shell structure
- Connection to the bootstrap's Cayley-Dickson tower ([Bootstrap Division Algebras](/derivations/interactions/bootstrap-division-algebras))
- Matching the specific representation content of the Standard Model

These are deferred to Open Gap 1. The present derivation establishes that the horizon shell *carries* massless boundary modes — the identification of those modes with specific gauge bosons is an open extension, not a result.

**Remark (What the shell excludes).** The null shell is not a shell of gravitons, fermions, or other massless objects in general — it is the shell of *A–B relational carriers*, which are Type III boundary relations by construction (Definition 2.0). Gravitons (if present in the framework's geometry) may propagate in the bulk rather than live on the boundary shell; massless fermions are not boundary-mediating in the same relational sense. The type distinction is given by the object's role in the observer structure, not by its kinematics alone.

## Step 5: The Holographic Connection

**Proposition 5.1 (The holographic bound counts horizon shell modes).** *The [holographic entropy bound](/derivations/holography/area-scaling) states that the number of independent degrees of freedom on a boundary surface of area $A$ is at most $A/(4\ell_P^2)$. By Propositions 3.1 and 4.1, this boundary is a shell of null A–B relational carriers with massless, boundary-mediating, persistent kinematic character. The bound counts the number of independent such carriers at the horizon.*

*Argument.* The holographic bound counts maximal independent states on A's boundary. By construction, the only persistent boundary degrees of freedom are the null relational carriers on the horizon shell (other boundary structures — internal coherence invariants, self-self Type I/II relations — do not occupy the horizon shell). The area-proportionality of the bound reflects the area-proportionality of independent A–B relational carriers, one per distant observer B on the horizon sphere. $\square$

**Remark (Quantitative mode counting is open).** Proposition 5.1 identifies what the bound counts but does not independently compute the count and match $A/(4\ell_P^2)$. A quantitative match would require counting independent A–B relational carriers as a function of horizon area, using the level-indexed bootstrap structure. This is Open Gap 3.

**Remark (Three-sector unification).** The derivation links three separately-developed sectors:

1. **Holography** (area-scaling): the bound counts boundary degrees of freedom.
2. **Relational structure** (Type III interactions): inter-observer relations at $\mathcal{B}$ are the objects counted.
3. **Cyclic cosmology** (exact closure): finite $T_\mathcal{U}$ produces the tilt-saturation that makes the horizon a null transition.

The holographic bound is reframed not as an independent postulate about information capacity, but as the mode count of null inter-observer relational carriers at A's boundary, derived from DAG-level antichain boundary structure plus cyclic closure.

## Rigor Assessment

**Structurally grounded (follow from existing rigorous or semi-formal results):**

- Proposition 1.1 (covering): exact cyclic closure + temporal completeness + 3D observer count scaling.
- Proposition 2.1 (three regimes): direct comparison of tilt range to cyclic period.
- Proposition 3.2 (permanence): Axiom 2 directly.

**Semi-formal (structural argument, but relies on implicit continuum-limit step):**

- Proposition 2.2 (null character via antichain boundary): the DAG-level argument "marginal antichain compatibility = causal-cone tangency = null" is clean at the discrete level. The step to a null hypersurface in the continuum limit relies on the framework's emergent-geometry layer (Geometric Substrate, Observer Loop Viability), which is itself semi-formal. Formalizing the continuum limit rigorously is deferred.
- Proposition 5.1 (holographic count): identifies the object counted but not the count itself; quantitative match to $A/(4\ell_P^2)$ is Open Gap 3.

**Consistency-only (agreement, not derivation):**

- The null character of the horizon is a standard GR result (de Sitter horizon generators are null). Proposition 2.2 derives it independently via antichain structure; agreement is a consistency check, not an import.

## Open Gaps

1. **Gauge-group and spin-1 identification.** The shell has the necessary kinematic properties of gauge bosons (null, boundary-mediating, permanent) but not sufficient. Spin-1 is not derived from horizon structure, and the specific gauge group (U(1) × SU(2) × SU(3)) is not tied to the shell. Connecting to the [Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap) and the Cayley-Dickson tower in [Bootstrap Division Algebras](/derivations/interactions/bootstrap-division-algebras) may supply the missing content, but the connection is not yet drawn. *Difficulty: HARD.*

2. **Continuum-limit formalization of antichain-boundary → null-hypersurface.** Proposition 2.2's discrete DAG argument "marginal antichain compatibility = null-cone tangency" is clean but informal. A rigorous continuum limit showing that $\partial J^\pm$ on the DAG becomes a null hypersurface under the emergent-metric correspondence would tighten this step. Likely requires the covering-order topology on antichains, which the framework does not yet formalize. *Difficulty: MODERATE.*

3. **Quantitative mode counting.** Proposition 5.1 identifies the holographic bound as counting A–B relational carriers but does not independently compute the count. A match between the carrier count (derived from bootstrap structure) and $A/(4\ell_P^2)$ would make the connection quantitative. *Difficulty: HARD.*

4. **Distinguishing the shell from graviton / bulk-massless content.** The remark after Proposition 4.1 asserts that the shell carries only Type III relational carriers, not gravitons or bulk massless fields. This type distinction needs to be proved from the framework's structural definitions, not just asserted. *Difficulty: MODERATE.*

5. **Gibbons–Hawking connection.** The Gibbons–Hawking thermal spectrum from de Sitter horizons should follow from the permanent null shell: if the horizon carries a permanent population of null relational carriers, the thermal spectrum is the mode occupation at $T_{GH} = H/(2\pi)$. Deriving this from the shell structure would tie back to the existing [Hawking Radiation](/derivations/holography/hawking-radiation) derivation. *Difficulty: MODERATE.*
