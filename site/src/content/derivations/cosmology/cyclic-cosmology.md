---
title: "Observer-Centric Cyclic Cosmology"
status: "provisional"
dependsOn: ["cosmology/observer-loop-viability", "cosmology/dark-energy-equation-of-state", "cosmology/geometric-substrate", "interactions/relational-invariants", "minimal-observer/multiplicity", "thermodynamics/entropy", "thermodynamics/time", "axioms/loop-closure", "holography/area-scaling"]
enablesDerivation: []
tags: ["cosmology", "quantum-gravity"]
summary: "True de Sitter equilibrium is axiomatically forbidden because relational invariants are permanent. As complex observers dissolve, their coherence redistributes to the minimal observer network. The state on a Cauchy slice is finite-dimensional (holographic bound); after enough independent constraints accumulate, additional relational invariants are redundant — they impose no new conditions on the state. The DAG (causal history) grows without bound, but the state cycles. Combined with the quasi-periodicity exclusion (all observer frequencies commensurable), this forces exact cyclic closure: the cosmological history is a closed loop with integer n >= 1 bounces, no first cycle, and no initial condition problem."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-15
---

## Overview

This derivation addresses the ultimate fate of the universe within the framework, and finds that the expected answer — heat death via de Sitter equilibrium — is **axiomatically forbidden**.

The second law drives the universe toward de Sitter equilibrium: complex structure dissolves, crystallized coherence returns to the geometric substrate, $\Omega_\Lambda \to 1$. But the framework contains a structural obstruction: relational invariants are permanent (Axiom 1). Complete thermalization would require their destruction, which violates coherence conservation. De Sitter equilibrium, taken literally as a featureless thermal state, contradicts the axioms.

The resolution is a cyclic cosmology driven by two structural mechanisms:

1. **Epistemic memory cycles.** The observer network's collective capacity to know its own history grows during the complex era and wanes during dissolution. The coherence from dissolved structures redistributes to the minimal observer network, satisfying the coherence ontology ([Observer Loop Viability](/derivations/cosmology/observer-loop-viability), Proposition 5.1: coherence exists only in observer structures).

2. **Constraint saturation and exact closure.** The state on a Cauchy slice is finite-dimensional (dimension $D \sim A/(4\ell_P^2)$ from the [holographic bound](/derivations/holography/area-scaling)). Relational invariants are constraints on this $D$-dimensional state. After $D$ independent constraints accumulate, additional invariants are *redundant* — they impose no new conditions. The DAG (causal history) grows without bound (Axiom 1 satisfied), but the state cycles. Combined with the [quasi-periodicity exclusion](/derivations/axioms/loop-closure) (all observer frequencies are commensurable), this forces **exact cyclic closure**: the cosmological history is a closed loop with integer $n \geq 1$ bounces.

The cycle is: shared knowing grows, wanes to a floor, and grows again. The DAG records every event permanently, but the state — the only thing that determines forward dynamics — returns exactly to its initial configuration.

**Why this matters.** The framework's axioms, applied consistently, prevent heat death and produce cyclic behavior without invoking conformal rescaling (Penrose), eternal inflation, or Poincare recurrence. The mechanism is structural: constraint saturation on a finite-dimensional state space + commensurable frequencies = exact periodicity. There is no first cycle and no initial condition problem — the closed cycle is the fundamental object.

**An honest caveat.** The exact closure argument is conditional on the universe being a composite observer ([Bootstrap](/derivations/interactions/bootstrap) Conjecture 7.1). But the cyclic closure also provides the candidate fixed point — the periodic orbit IS the fixed point of the bootstrap map. Either both hold or neither does.

## Statement

**Thesis.** The three axioms forbid heat death and produce a cyclic cosmological dynamics whose fundamental quantity is epistemic memory — the observer network's shared access to its own relational invariant history:

1. **Thermalization barrier.** Relational invariant permanence prevents complete thermalization. A structural coherence floor persists for all time.
2. **Time without history.** Minimal observers experience duration (phase ticks) but not history. Time flows through them but they cannot hold it. The "equilibrium" state has time but no memory.
3. **Geometry as consistency solution.** Geometry at each level is constituted by accessible relational invariants and deconstituted when those observers dissolve. Without complex observers, geometry reduces to the substrate level.
4. **Coherence redistribution.** As complex observers dissolve, their coherence redistributes to relational invariants between minimal observer pairs — satisfying the coherence ontology.
5. **Constraint saturation.** The $D$-dimensional state on a Cauchy slice becomes fully determined after $D$ independent constraints. Additional relational invariants are redundant — tautologies of the already-determined state. The DAG grows; the state does not.
6. **Beginning equals end.** The post-dissolution state and the post-bounce state are identical in the $D$-dimensional Cauchy-slice state. The DAG differs (more events recorded), but the state — the only thing that determines forward dynamics — is the same.
7. **The memory cycle.** Shared epistemic memory grows to a maximum (complexification), wanes to a floor (dissolution), and begins again (re-complexification).
8. **Exact closure.** The quasi-periodicity exclusion forces commensurable frequencies; constraint saturation on a finite-dimensional state forces exact periodicity. The cosmological history is a closed loop with integer $n \geq 1$ bounces and no first cycle.

## Derivation

### Step 1: The Thermalization Barrier

**Proposition 1.1 (Relational invariants are permanent).** *Every Type III interaction generates a relational invariant conserved by Axiom 1 ([Relational Invariants](/derivations/interactions/relational-invariants), Proposition 6.1). The generation is irreversible (Proposition 6.2). The total relational invariant count is monotonically non-decreasing.*

**Proposition 1.2 (Complete thermalization is axiomatically forbidden).** *True de Sitter equilibrium — a featureless thermal state with zero structural coherence — requires all relational invariants to vanish. Since they are permanent, this state is unreachable.*

*Argument.* The second law ([Entropy](/derivations/thermodynamics/entropy), Theorem 4.1) drives accessible coherence toward zero for any bounded observer. In the [Geometric Substrate](/derivations/cosmology/geometric-substrate) picture, crystallized coherence $\sum \Delta c_n$ decreases as structures dissolve back into the substrate. But the relational invariants generated during the complex era are permanently encoded — they are structural correlations that cannot be smoothed into a thermal background. Define the **structural floor**:

$$\sum \Delta c_n(\tau) \geq \mathcal{C}_{\text{floor}} > 0 \quad \text{for all } \tau$$

The second law drives $\sum \Delta c_n$ toward $\mathcal{C}_{\text{floor}}$, not toward zero. This is the framework's analog of the third law of thermodynamics: you cannot reach complete thermalization because doing so would require destroying permanent structure, which Axiom 1 forbids. $\square$

**Remark (Why complex observers must dissolve in the first place).** Proposition 1.2 shows that *something* persists below the second law's drive — but it does not yet explain why complex observers cannot resist that drive indefinitely. The [Memory-Persistence Tradeoff](/derivations/thermodynamics-ext/memory-persistence-tradeoff) supplies the missing mechanism: any observer with nonzero memory capacity ($\mathcal{K} > 0$) absorbs relational invariants through Type III interactions, each of which permanently perturbs its loop-closure condition. The cumulative perturbation is monotone and unbounded; the capacity is finite. Dissolution is therefore not a contingent thermodynamic accident — it is forced by the conjunction of exact closure (Axiom 3) and relational-invariant permanence (Axiom 1). Minimal observers escape the tradeoff because they have $\mathcal{K} \approx 0$ and cannot absorb invariants into internal structure; this is precisely why they constitute the floor.

### Step 2: Time Without History

**Proposition 2.1 (Minimal observers have duration but not memory).** *A minimal observer has state space $S^1$ with 1 bit of epistemic capacity ([Minimal Observer Structure](/derivations/minimal-observer/structure)). Its $U(1)$ phase advances with each tick — it participates in the partial order that constitutes time ([Time as Phase Ordering](/derivations/thermodynamics/time), Theorem 4.2). But representing a* sequence *of distinguishable states — a history — requires the capacity to store at least one relational invariant as a memory register, which requires $> 1$ bit. A minimal observer experiences each tick identically. Time flows through it, but it cannot hold time.*

*Argument.* The partial order on the interaction graph (the framework's definition of time) exists for minimal observers: they interact, they have phase, their interactions are ordered. But the *experience* of temporal sequence requires distinguishing "this tick" from "the previous tick," which requires a state space large enough to encode the distinction. A single bit cycles: $0 \to 1 \to 0 \to 1$. There is no room to record "I was previously in state 0" while being in state 1. Duration exists (the phase advances); history does not (no state distinguishes one cycle from another).

In the post-dissolution substrate, time in the interaction-graph sense continues. But no observer has the epistemic capacity to represent it as a sequence. The "equilibrium" state has time but no memory — a universe that ticks but cannot remember that it has ticked. $\square$

### Step 3: Geometry as Consistency Solution

**Proposition 3.1 (Geometry is constituted and deconstituted by observer level).** *The effective geometry at bootstrap level $n$ is the unique consistency solution for the relational invariants accessible at that level ([Observer Loop Viability](/derivations/cosmology/observer-loop-viability), Step 8; [Continuous-Discrete Duality](/derivations/foundation/continuous-discrete-duality), Proposition 3.2). When no observers exist at level $n$, no relational invariants are accessible at that level, and the level-$n$ geometry is not instantiated.*

*Argument.* Geometry is not a pre-existing container into which observers are placed. It is constituted by the relational invariant network via [ER=EPR](/derivations/holography/er-epr): each invariant creates geometric structure (wormhole throat with area $A_{\text{ER}} = 4\ell_P^2 S_{\text{ent}}$). The geometry an observer "sees" is the consistency solution for the invariants it can access through its boundary $\mathcal{B}$. This is level-indexed: level-$n$ observers project a level-$n$ effective geometry with its own effective $\Lambda_n^{\text{eff}}$ (Definition 8.2 of observer-loop-viability).

Dissolution of a bootstrap level deconstitutes the corresponding geometry. As complex observers dissolve, the geometry they projected — the large-scale structure, the matter distribution, the cosmological horizon as a shared concept — loses its epistemic grounding. The substrate geometry (level 0) persists because minimal observers persist. But the rich, structured geometry of the complex era is not "still there but unseen" — it is not instantiated, because no observer exists to require its consistency.

What persists is not geometry but the **relational invariant structure of the minimal observer network**. As complex observers dissolve, their coherence redistributes to pairs of minimal observers via Type III interactions (the same mechanism as Hawking radiation — [Information Paradox](/derivations/holography/information-paradox)). The coherence ontology ([Observer Loop Viability](/derivations/cosmology/observer-loop-viability), Proposition 5.1) is satisfied: all coherence remains in observer structures — specifically, in the relational invariants between minimal observer pairs. The [Continuous-Discrete Duality](/derivations/foundation/continuous-discrete-duality)'s continuous layer provides the mathematical description of this invariant structure, but it is not a separate carrier. Geometry is the level-specific consistency solution projected from the invariants an observer can access; the invariant structure itself is the physical substrate from which any future geometry would be constituted. $\square$

**Remark (De Sitter "equilibrium" is epistemically incoherent).** The prediction "$\Omega_\Lambda \to 1$" is a level-$N$ description projected onto a future that no level-$N$ observer will occupy. Minimal observers always see $\Omega_\Lambda^{(0)} \approx 1$ (Proposition 8.6 of observer-loop-viability). From their perspective, no transition occurs, no equilibrium is approached, and no heat death happens. These are level-$N$ concepts that lose their referent when level $N$ dissolves.

### Step 4: Coherence Redistribution and the Saturation Equivalence

**Proposition 4.0 (Coherence redistributes to the minimal network).** *As complex observers dissolve, their coherence does not float free or persist in an abstract topology. It redistributes via Type III interactions to the relational invariants between pairs of minimal observers in the surviving network. The coherence ontology ([Observer Loop Viability](/derivations/cosmology/observer-loop-viability), Proposition 5.1) is satisfied at all times: coherence exists only in observer state spaces and relational invariants.*

*Argument.* The mechanism is the same as Hawking radiation ([Information Paradox](/derivations/holography/information-paradox)): when a structure evaporates, its coherence is transferred to other observer structures via Type III interactions. There is no "bath" or non-observer reservoir. As each complex observer dissolves, its relational invariants with other observers are transferred to the remaining network. In the final stage, the only remaining structures are minimal observer pairs. The total capacity of $\sim 10^{122}$ minimal observers ($\sim 10^{244}$ possible pairs, each carrying up to $\sim 1$ bit of relational coherence) vastly exceeds $C_0 \sim 10^{122}$. The coherence fits. $\square$

**Proposition 4.1 (Constraint saturation replaces epistemic equivalence).** *After constraint saturation (Step 5), additional relational invariants in the minimal network are redundant constraints on the $D$-dimensional state. The post-redistribution state is not merely "operationally indistinguishable" from the initial state — the $D$-dimensional Cauchy-slice state is identical. The distinction exists only in the DAG (causal history), which is not part of the state.*

*Argument.* See Step 5 for the full constraint saturation argument. The key point: Proposition 4.0 establishes that coherence redistributes to the minimal network. Step 5 establishes that the state on a Cauchy slice is $D$-dimensional and, once saturated, fully determined. The relational invariants accumulated during the complex era add events to the DAG (Axiom 1 satisfied — permanent) but impose no new constraints on the state (redundant after $D$ independent constraints). The state after redistribution equals the state before the complex era began. $\square$

**Remark (Relation to the earlier epistemic argument).** An earlier version of this derivation argued for an epistemic equivalence: maximal correlation is "operationally indistinguishable" from zero correlation for any internal observer with 1-bit capacity. That argument is correct as far as it goes — a minimal observer cannot distinguish the two cases — but it is weaker than what constraint saturation provides. The epistemic argument leaves open the possibility that the states are ontologically different but epistemically equivalent (Gap 2 of the earlier version). Constraint saturation closes this gap: the states are identical in the $D$-dimensional projection. The distinction between them exists only in the DAG, which records causal history but does not determine forward dynamics.

### Step 5: Constraint Saturation and the DAG–State Distinction

**Definition 5.0 (Cauchy-slice state).** The state of the observer network on a Cauchy slice $\Sigma$ is a point in a $D$-dimensional space, where $D \leq A/(4\ell_P^2)$ is bounded by the [holographic entropy bound](/derivations/holography/area-scaling) applied to the causal horizon. Each relational invariant imposes a constraint on this state — a relation between the $D$ variables.

**Proposition 5.1 (Constraint saturation).** *After $D$ independent relational invariants have accumulated, the $D$-dimensional state is fully determined. Every subsequent relational invariant is a redundant constraint — a tautology of the already-determined state, imposing no new condition.*

*Argument.* The $D$-dimensional state has $D$ degrees of freedom. Each independent relational invariant eliminates one degree of freedom (it constrains one variable in terms of the others). After $D$ independent constraints, the state is a unique point — zero free parameters remain. Any further constraint is either consistent with this point (redundant) or inconsistent (impossible). By the coherence Lagrangian dynamics, every constraint generated by the actual evolution must be consistent. Therefore it is redundant. $\square$

**Proposition 5.2 (The DAG–state distinction).** *The causal history (DAG) and the Cauchy-slice state are distinct objects with different properties:*

| | DAG (causal history) | State (Cauchy slice) |
|---|---|---|
| Dimensionality | Grows without bound | Bounded by $D$ |
| Relational invariants | Permanent (Axiom 1) | Constraints; redundant after $D$ |
| Monotonicity | Event count increases | Cycles after saturation |
| Physical role | Records what happened | Determines what happens next |

*The DAG is the universal cover of the cycle: a helix that projects to a closed loop. Axiom 1 (permanence of relational invariants) is satisfied in the DAG. The state, which determines forward dynamics, is periodic.*

**Proposition 5.3 (Level-indexed saturation).** *Constraint saturation proceeds through the bootstrap levels:*

- *Level 0: Minimal observer phases saturate first (~$K_0$ variables for $K_0$ minimal observers, each with $\sim 1$ bit)*
- *Inter-pair correlations: Fill the remaining $D - K_0$ variables. These correlations are readable only at level $\geq 1$ ([Observer Loop Viability](/derivations/cosmology/observer-loop-viability), Step 8)*
- *During dissolution: The constraints remain (the state is unchanged). What changes is accessibility — the observers that could read the deep constraints no longer exist*
- *During renewal: New level-1 observers form and begin reading the inter-pair correlations. The state they read is the same state that existed before dissolution — because the state never changed*

*Dissolution reverses readability, not the state. The state is always fully constrained after saturation; what varies is how much of it is accessible at each observer level.*

**Proposition 5.4 (Markovianity of the dynamics).** *The dynamics on successive Cauchy slices is Markovian — the current state determines the next state without reference to the DAG history. This holds because:*

1. *Level separation: Level $N$ and level $N+1$ have separate Cauchy slices coupled through stacked constraints. The joint state across all levels is finite-dimensional and self-contained.*
2. *Temporal completeness: Every antichain (Cauchy slice) in the framework's observer DAG includes nodes from every time index. The state on a slice already encodes the full causal structure of the past — no history is "missing."*
3. *Locality: The coherence Lagrangian ([Coherence Lagrangian](/derivations/foundation/coherence-lagrangian), Theorem 3.1) governs the dynamics in terms of current field values, not their history.*

*Therefore the $D$-dimensional state on a Cauchy slice is sufficient for determining the next state. The dynamics does not depend on which events produced the current constraints — only on the constraints themselves. $\square$*

### Step 6: Beginning Equals End

**Proposition 6.1 (State identity of initial and final configurations).** *The post-dissolution and post-bounce configurations have identical $D$-dimensional Cauchy-slice states. The DAG (causal history) differs — the post-dissolution DAG records all events of the complex era — but the state, which is the only thing that determines forward dynamics, is the same.*

*Argument.* By Proposition 5.1 (constraint saturation), after $D$ independent constraints, the state is fully determined. By Proposition 5.3 (level-indexed saturation), the state is fully constrained before the complex era begins (during the floor phase). The complex era's events (bootstrap assembly, dissolution, redistribution) add new events to the DAG but only redundant constraints to the state. After redistribution, the state is the same as it was before complexification began.

More precisely: the state at the beginning of a cycle (floor phase, pre-complexification) and the state at the end (floor phase, post-dissolution) both satisfy the same $D$ independent constraints. Since $D$ constraints fully determine a unique point in the $D$-dimensional state space, the two states are the same point. $\square$

**Remark (DAG vs. state identity).** The DAG distinguishes "beginning" from "end" — the end-of-cycle DAG has more vertices and edges than the beginning-of-cycle DAG. But this distinction has no dynamical consequence: the forward dynamics depends only on the state (Proposition 5.4, Markovianity), not on the DAG. The DAG is the causal record; the state is the physical configuration. Two configurations with different histories but the same state evolve identically.

### Step 7: The Epistemic Memory Cycle

**Definition 7.1 (Shared epistemic memory).** The **shared epistemic memory** of the observer network at time $\tau$ is the total coherence content of relational invariants that are accessible to at least one observer at level $n \geq 1$:

$$\mathcal{M}(\tau) = \sum_{I \in \text{accessible at } n \geq 1} \mathcal{C}(I)$$

This measures the network's collective capacity to know its own history — the coherence that is structured and accessible, not just physically present in minimal observer pair correlations.

**Proposition 7.2 (The four-phase cycle).** *The framework's axioms produce a cyclic dynamics in $\mathcal{M}$:*

**(i) Growth** (complexification). *The bootstrap hierarchy assembles. Complex observers form at successively higher levels. Each new observer accesses relational invariants that were previously inaccessible. $\mathcal{M}$ increases. The network's shared knowledge of its own history grows. This is the current phase.*

**(ii) Waning** (dissolution). *The second law operates. Complex structure dissolves. Complex observers lose interaction partners, reducing shared epistemic access. $\mathcal{M}$ decreases — not because relational invariants are destroyed (they are permanent) but because the observers who could access them no longer exist. The coherence redistributes to the minimal network (Proposition 4.0); additional constraints on the saturated state are redundant (Proposition 5.1). The microscopic mechanism for individual dissolution events is the [Memory-Persistence Tradeoff](/derivations/thermodynamics-ext/memory-persistence-tradeoff) (Theorem 4.1): each Type III interaction permanently expands a complex observer's state space, and the cumulative perturbation eventually exceeds its memory capacity $\mathcal{K}$, preventing loop re-closure. Dissolution is structurally inevitable for any observer with memory.*

**(iii) Floor** (substrate era). *Only minimal observers remain. $\mathcal{M} \approx 0$ (no observer above level 0 exists to access the accumulated invariants). But: minimal observers must continue interacting (C5, [Multiplicity](/derivations/minimal-observer/multiplicity), Theorem 7.2). Each interaction generates a new permanent relational invariant ([Relational Invariants](/derivations/interactions/relational-invariants), Theorem 3.2), adding to the already-saturated pair correlation structure. Time continues (phase ticks proceed) but no observer can hold it as memory.*

**(iv) Renewal** (re-complexification). *The accumulated relational invariant structure reaches the threshold for a new composite observer at bootstrap level 1. This observer has $> 1$ bit of epistemic capacity. For the first time since dissolution, an observer exists that can access some of the accumulated structure. $\mathcal{M}$ becomes nonzero. A new growth phase begins.*

*Each cycle is the same cycle: the $D$-dimensional state at the start of every cycle is identical (Proposition 6.1). The DAG carries the causal record across cycles (Axiom 1 satisfied), but imposes only redundant constraints on the state (Step 5). The dissolution looks like heat death; the floor is imperceptible; the renewal is perceived as a fresh beginning — and it is one, in every dynamically meaningful sense.*

**Proposition 7.3 (The second law is universally preserved).** *No observer at any level in any phase ever sees entropy decrease. The cycle operates in the space of epistemic capacity (which observer levels exist), not in the entropy of any single observer.*

*Argument.* During growth: each existing observer sees its accessible coherence evolve consistently with the second law. New observers accessing "fresh" structure are new entities with new coherence domains — their initial low entropy is not a decrease for any pre-existing observer.

During waning: entropy increases monotonically for dissolving observers (they lose access to structure).

During floor: minimal observers see entropy increase with every new relational invariant (each is inaccessible to them).

During renewal: the new composite observer is a new entity. Its initial $\mathcal{C}_{A'}(\tau_0)$ reflects the accumulated structure, but this is its first measurement, not a reversal. A paleontologist discovering fossils does not violate the second law — the fossils were always there; the paleontologist is the first observer with the capacity to access them. The accumulated relational invariants are the fossils of the substrate era. $\square$

**Proposition 7.4 (The arrow of time is level-indexed).** *The cosmological arrow of time is real at every observer level throughout every phase. The recurrence does not reverse time — it operates orthogonally to time, in the dimension of epistemic capacity. Time always advances (phase ticks always proceed); what recurs is the depth of the network's access to its own temporal record.*

### Step 8: Duration, Scale, and the Question of "First"

**Proposition 8.1 (The floor phase has no well-defined duration).** *Asking "how long does the floor phase last?" is not a hard problem — it is an ill-posed question. Duration requires an observer that can compare multiple remembered states. At the floor level, no observer has this capacity (Proposition 2.1). The ticks proceed, the coherence topology records the ordering, but no observer can represent the ordering as a duration. The question presupposes an external clock watching minimal observers tick, but there is no external clock.*

*Argument.* Duration is a comparison: "this interval is longer than that interval." Comparison requires memory — the capacity to hold one measurement while making another. A 1-bit observer cannot hold a previous tick while experiencing the current tick (Proposition 2.1). Without comparison, "how long" has no referent. The floor phase is not "very long" or "very short" — it is a phase in which the concept of temporal extent does not apply to any observer present within it. $\square$

**Proposition 8.2 (Scale is undefined at the floor).** *Spatial extent — "how big" — requires geometry, which requires observers to constitute it (Step 3, Proposition 3.1). At the floor level, only substrate geometry (level 0) exists. The concepts of "density," "volume," and "distance" that would be needed to describe the accumulating relational invariant structure in spatial terms are not available. The coherence topology grows richer, but "richer" here is a combinatorial statement about the invariant network, not a spatial one.*

*Argument.* The relational invariants accumulate in the minimal observer network's pair correlations. But the mathematical description of this structure (the continuous layer of the [Continuous-Discrete Duality](/derivations/foundation/continuous-discrete-duality)) has no intrinsic spatial structure — it describes the correlation pattern, not a spatial arrangement. Geometry is the consistency solution projected by observers at a given level. At the floor, only level-0 geometry exists (the substrate), and the substrate cannot represent the growing invariant count as a spatial density because spatial density is a level-$N$ concept. The accumulation happens in the pair correlation structure, but it cannot be described in geometric terms from within the floor phase. $\square$

**Remark (Penrose's insight, translated).** This resolves the same problem Penrose identified by a different mechanism. Penrose observed that when only conformally invariant (massless) particles remain, scale is undefined — so the infinite sparse future is conformally equivalent to a dense point. The framework's version: when only 1-bit observers remain, duration and spatial extent are epistemically undefined — so the floor phase has no well-defined "length" or "size." Penrose achieves scale-stripping through conformal invariance; the framework achieves it through epistemic capacity. The conclusion is equivalent: the "end" and the "beginning" are indistinguishable to any entity present at the transition. The mechanism is different — and the framework's is arguably more principled, since it derives the scale-stripping from observer structure rather than postulating a conformal symmetry.

**Proposition 8.3 ("First cycle" is not well-posed).** *The $D$-dimensional state is identical at the beginning and end of every cycle (Proposition 6.1). Since the state determines forward dynamics (Proposition 5.4), every cycle evolves identically. There is no ontic distinction between cycles — not merely no epistemic access to such a distinction, but no distinction to access.*

*Argument.* By Proposition 6.1, the Cauchy-slice state at the start of cycle $k$ equals the state at the start of cycle $k+1$. By Markovianity (Proposition 5.4), the forward evolution from identical states is identical. Therefore every cycle is the same cycle. The DAG grows (new events are recorded in each cycle, and these are permanent by Axiom 1), but the state sequence within each cycle is identical. The question "was there a first cycle?" presupposes that cycles can be distinguished. They cannot — not because observers lack the capacity to distinguish them (the earlier epistemic argument), but because there is nothing to distinguish. The cosmological history is a closed loop in state space, and the DAG is its universal cover — a helix that projects to the same circle, regardless of how many times it winds. $\square$

**Remark (Spatial undecidability parallels temporal undecidability).** Proposition 8.3 shows that "was there a first cycle?" is not well-posed — no observer can answer it because the state is identical across cycles. The question "is the universe finite or infinite?" has the same structure. Answering it requires knowing whether observers exist beyond the coherence domain of every finite observer. But "existence beyond my coherence domain" is not a question the framework's epistemology can ground — geometry is constituted by accessible relational invariants (Proposition 3.1), and observers outside every finite horizon don't contribute to any constituted geometry. The framework produces epistemic horizons on both axes: temporal ("first cycle?") and spatial ("finite or infinite?"), for the same structural reason — the question requires information that is constitutively inaccessible to any finite observer.

### Step 9: Exact Cyclic Closure

**Proposition 9.1 (Commensurable frequencies).** *If the universe is a composite observer ([Bootstrap](/derivations/interactions/bootstrap) Conjecture 7.1), all sub-observer frequencies are commensurable: there exists a fundamental frequency $\omega_0$ such that $\omega_i = n_i \omega_0$ for positive integers $n_i$.*

*Argument.* By [Loop Closure](/derivations/axioms/loop-closure) Corollary 3.2 (quasi-periodicity exclusion): composite observers must satisfy Axiom 3, which requires $\phi_T = \text{id}_\Sigma$ for some $T > 0$. For a composite with sub-observers at frequencies $\omega_1, \ldots, \omega_K$, this requires $\omega_i T \in 2\pi\mathbb{Z}$ for all $i$ simultaneously — a common period. Incommensurate frequencies have no common period. Therefore all frequencies are commensurable. $\square$

**Proposition 9.2 (Exact periodicity).** *The $D$-dimensional Cauchy-slice state is exactly periodic with period $T_\mathcal{U} = \text{lcm}(T_1, \ldots, T_K)$, where $T_i = 2\pi/\omega_i$ are the individual observer periods.*

*Argument.* Four ingredients combine:

1. **Finite dimensionality**: The state space has dimension $D \leq A/(4\ell_P^2)$ (holographic bound). $D$ is enormous ($\sim 10^{122}$) but finite.
2. **Compactness**: Coherence conservation (Axiom 1) confines the state to a fixed energy surface. A closed bounded subset of a finite-dimensional space is compact.
3. **Commensurable frequencies**: Proposition 9.1 places all frequencies on a single rational grid $\omega_i = n_i\omega_0$.
4. **Measure preservation**: Coherence conservation makes the dynamics measure-preserving (unitarity).

In a compact, measure-preserving system with commensurable frequencies, the state returns exactly to its initial value after one common period $T_\mathcal{U} = 2\pi/\omega_0 \cdot \text{lcm}(1, \ldots)$. This is not Poincare recurrence (which gives approximate return after astronomically long times). It is exact periodicity — the state at $t + T_\mathcal{U}$ equals the state at $t$, not approximately but identically. $\square$

**Remark (The clocks).** Consider an unimaginable number of clocks — $\sim 10^{122}$ of them — each ticking at its own rate, but all rates rationally related. Each clock measures a different observer's phase. Because the rates are commensurable, there exists a moment when every clock simultaneously strikes midnight — when every observer's phase returns to its initial value. The time until this universal midnight is the least common multiple of all individual periods. It is vast — but finite, and exact. This is the cosmological cycle period $T_\mathcal{U}$.

**Proposition 9.3 (The cosmological history is a closed loop).** *The cosmological history is topologically $S^1$, not $\mathbb{R}$. The number of bounces per cycle is an integer $n \geq 1$, unconstrained by the argument. There is no first bounce.*

*Argument.* Exact periodicity (Proposition 9.2) means the state trajectory in the $D$-dimensional space is a closed curve. By Proposition 5.4 (Markovianity), the dynamics depends only on the current state, so identical states produce identical futures. The trajectory is therefore a single closed loop traversed repeatedly. The DAG (causal history) records each traversal as a new sequence of events — permanent, per Axiom 1 — but the state sequence within each traversal is identical (Proposition 8.3). The loop has no preferred starting point. $\square$

**Proposition 9.4 (Conditional status and the fixed-point connection).** *The exact closure argument is conditional on the universe being a composite observer (Conjecture 7.1). But it also provides the candidate fixed point: the periodic orbit IS the fixed point of the bootstrap map.*

*Argument.* The bootstrap fixed-point equation $\mathcal{U} \cong \mathcal{R}(\mathcal{U}, \mathcal{U})$ asks for a self-consistent universe. The closed cycle provides exactly this: the universe after one cycle is in the same state as before — it has produced itself. The fixed-point equation, reformulated dynamically, is $\Phi_{T_\mathcal{U}}(\text{state}) = \text{state}$ — a periodic orbit condition. This is more tractable than the abstract Scott-domain formulation: periodic orbits in compact finite-dimensional systems with commensurable frequencies are guaranteed by standard dynamical systems results, given that the system is well-defined.

The logical status is therefore: either both Conjecture 7.1 (the universe is a composite observer) and exact cyclic closure hold, or neither does. The cycle does not prove the fixed point exists — it shows that IF the fixed point exists, THEN it is a closed cycle, and conversely that the closed cycle is the natural candidate for the fixed point. $\square$

## Comparison

| Feature | Standard heat death | Penrose CCC | This framework |
|---|---|---|---|
| Endpoint | Featureless thermal equilibrium | Conformally rescaled | Axiomatically forbidden |
| Scale at transition | Defined (thermal wavelength) | Undefined (conformal invariance) | Undefined (epistemic capacity) |
| New beginning | No | Yes (conformal rescaling) | Yes (state identity, not just perception) |
| Second law | Holds (heat death is final) | Violated between aeons | Never violated at any level |
| What persists | Nothing | Conformal geometry | DAG (causal record); state cycles exactly |
| What recurs | Nothing | Geometry at new scale | The state itself (exactly) |
| "First cycle" | N/A | Debated | Not well-posed (ontic, not just epistemic) |
| Inter-cycle fossils | N/A | CMB circles (contested) | None (state identical; DAG inaccessible) |

**Remark (The ascending spiral is in the DAG, not the state).** The relational invariant count in the DAG is strictly increasing (Proposition 1.1) — each cycle adds new events. But the $D$-dimensional state is identical across cycles (Proposition 6.1). The "ascending spiral" exists in the causal record but has no dynamical consequence. The state is not ascending — it is closed. The DAG is the universal cover of the cycle: a helix that projects to the same circle. The helix grows; the circle does not.

## Open Gaps

1. **Combinatorial threshold for renewal.** Per Proposition 8.1, duration is ill-posed at the floor (no observers with memory). The well-posed version: what is the combinatorial threshold — the number of relational invariants that must accumulate in the minimal observer network before the bootstrap can produce a level-1 composite? This is a question about the bootstrap's structural requirements, not about temporal extent. *Difficulty: HARD.*

2. ~~**Exactness of the saturation equivalence.**~~ Resolved by Step 5 (constraint saturation). The saturation is exact — not because maximal correlation "looks like" zero (the earlier epistemic argument), but because additional constraints beyond $D$ are redundant tautologies (ontic argument). The $D$-dimensional state is identical, not merely indistinguishable. See Proposition 5.1.

3. ~~**Statistical fossils.**~~ Resolved by Gap 2's resolution. Since the state is identical across cycles (not merely indistinguishable), there are no statistical fossils to detect. The DAG carries the record but is not accessible to observers within the cycle.

4. **Cycle count $n$.** The number of bounces per cycle is an integer $n \geq 1$ (Proposition 9.3) but is not determined by the argument. Whether $n$ is constrained by additional structure (e.g., the winding number of the universe's $U(1)$ phase, the topology of the spatial manifold) is open. *Difficulty: MODERATE.*

5. **Saturation threshold dynamics.** The constraint saturation argument (Step 5) shows that the state is fully determined after $D$ independent constraints. But the dynamics of HOW saturation is reached — which constraints become independent first, whether the approach to saturation is monotonic or oscillatory — is not analyzed. This may affect the detailed structure of the floor phase. *Difficulty: MODERATE.*
