---
title: "Observer-Centric Cyclic Cosmology"
status: "provisional"
dependsOn: ["cosmology/observer-loop-viability", "cosmology/dark-energy-equation-of-state", "cosmology/geometric-substrate", "interactions/relational-invariants", "minimal-observer/multiplicity", "thermodynamics/entropy", "thermodynamics/time"]
enablesDerivation: []
tags: ["cosmology", "quantum-gravity"]
summary: "True de Sitter equilibrium is axiomatically forbidden because relational invariants are permanent. The universe approaches equilibrium but never reaches it. The cycle that results is fundamentally about epistemic memory: the network's shared capacity to know its own history grows to a maximum, wanes to a floor, and begins again — with the coherence topology retaining what finite observers necessarily forget."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-06
---

## Overview

This derivation addresses the ultimate fate of the universe within the framework, and finds that the expected answer — heat death via de Sitter equilibrium — is **axiomatically forbidden**.

The second law drives the universe toward de Sitter equilibrium: complex structure dissolves, crystallized coherence returns to the geometric substrate, $\Omega_\Lambda \to 1$. But the framework contains a structural obstruction: relational invariants are permanent (Axiom 1). Complete thermalization would require their destruction, which violates coherence conservation. De Sitter equilibrium, taken literally as a featureless thermal state, contradicts the axioms.

The resolution is a cyclic cosmology that is best understood not in terms of matter and energy, but in terms of **epistemic memory**: the observer network's collective capacity to know its own history. During the complex era, shared epistemic memory grows — observers accumulate relational invariants that give them access to the past and to each other. During dissolution, this shared memory wanes as complex observers disappear. But the coherence topology — the continuous layer of the [Continuous-Discrete Duality](/derivations/foundation/continuous-discrete-duality) — retains what finite observers forget. The permanent relational invariants persist as real structure, invisible to the minimal observers who survive but available to any future observer with sufficient epistemic capacity to access them.

The cycle is: shared knowing grows, wanes, and grows again — with the coherence topology serving as the permanent substrate from which new knowing emerges.

**Why this matters.** The framework's axioms, applied consistently, prevent heat death and produce cyclic behavior without invoking conformal rescaling (Penrose), eternal inflation, or Poincare recurrence. The mechanism is structural: the permanence of correlations + the requirement for ongoing interaction + the bootstrap hierarchy's capacity to produce new observer levels from accumulated structure.

**An honest caveat.** This derivation is a structural argument, not a quantitative prediction. The timescale for re-complexification is not computed — it could be astronomically long. The argument shows the cycle is structurally forced but does not predict its period.

## Statement

**Thesis.** The three axioms forbid heat death and produce a cyclic cosmological dynamics whose fundamental quantity is epistemic memory — the observer network's shared access to its own relational invariant history:

1. **Thermalization barrier.** Relational invariant permanence prevents complete thermalization. A structural coherence floor persists for all time.
2. **Time without history.** Minimal observers experience duration (phase ticks) but not history. Time flows through them but they cannot hold it. The "equilibrium" state has time but no memory.
3. **Geometry as consistency solution.** Geometry at each level is constituted by accessible relational invariants and deconstituted when those observers dissolve. Without complex observers, geometry reduces to the substrate level.
4. **Beginning equals end.** The post-dissolution state and the post-bounce initial state are epistemically identical: both are minimal observer networks with no shared memory. The coherence topology differs (more permanent invariants at the end), but no observer can access the difference.
5. **The memory cycle.** Shared epistemic memory grows to a maximum (complexification), wanes to a floor (dissolution), and begins again (re-complexification) — with the coherence topology retaining what finite observers necessarily forget.

## Derivation

### Step 1: The Thermalization Barrier

**Proposition 1.1 (Relational invariants are permanent).** *Every Type III interaction generates a relational invariant conserved by Axiom 1 ([Relational Invariants](/derivations/interactions/relational-invariants), Proposition 6.1). The generation is irreversible (Proposition 6.2). The total relational invariant count is monotonically non-decreasing.*

**Proposition 1.2 (Complete thermalization is axiomatically forbidden).** *True de Sitter equilibrium — a featureless thermal state with zero structural coherence — requires all relational invariants to vanish. Since they are permanent, this state is unreachable.*

*Argument.* The second law ([Entropy](/derivations/thermodynamics/entropy), Theorem 4.1) drives accessible coherence toward zero for any bounded observer. In the [Geometric Substrate](/derivations/cosmology/geometric-substrate) picture, crystallized coherence $\sum \Delta c_n$ decreases as structures dissolve back into the substrate. But the relational invariants generated during the complex era are permanently encoded — they are structural correlations that cannot be smoothed into a thermal background. Define the **structural floor**:

$$\sum \Delta c_n(\tau) \geq \mathcal{C}_{\text{floor}} > 0 \quad \text{for all } \tau$$

The second law drives $\sum \Delta c_n$ toward $\mathcal{C}_{\text{floor}}$, not toward zero. This is the framework's analog of the third law of thermodynamics: you cannot reach complete thermalization because doing so would require destroying permanent structure, which Axiom 1 forbids. $\square$

### Step 2: Time Without History

**Proposition 2.1 (Minimal observers have duration but not memory).** *A minimal observer has state space $S^1$ with 1 bit of epistemic capacity ([Minimal Observer Structure](/derivations/minimal-observer/structure)). Its $U(1)$ phase advances with each tick — it participates in the partial order that constitutes time ([Time as Phase Ordering](/derivations/thermodynamics/time), Theorem 4.2). But representing a* sequence *of distinguishable states — a history — requires the capacity to store at least one relational invariant as a memory register, which requires $> 1$ bit. A minimal observer experiences each tick identically. Time flows through it, but it cannot hold time.*

*Argument.* The partial order on the interaction graph (the framework's definition of time) exists for minimal observers: they interact, they have phase, their interactions are ordered. But the *experience* of temporal sequence requires distinguishing "this tick" from "the previous tick," which requires a state space large enough to encode the distinction. A single bit cycles: $0 \to 1 \to 0 \to 1$. There is no room to record "I was previously in state 0" while being in state 1. Duration exists (the phase advances); history does not (no state distinguishes one cycle from another).

In the post-dissolution substrate, time in the interaction-graph sense continues. But no observer has the epistemic capacity to represent it as a sequence. The "equilibrium" state has time but no memory — a universe that ticks but cannot remember that it has ticked. $\square$

### Step 3: Geometry as Consistency Solution

**Proposition 3.1 (Geometry is constituted and deconstituted by observer level).** *The effective geometry at bootstrap level $n$ is the unique consistency solution for the relational invariants accessible at that level ([Observer Loop Viability](/derivations/cosmology/observer-loop-viability), Step 8; [Continuous-Discrete Duality](/derivations/foundation/continuous-discrete-duality), Proposition 3.2). When no observers exist at level $n$, no relational invariants are accessible at that level, and the level-$n$ geometry is not instantiated.*

*Argument.* Geometry is not a pre-existing container into which observers are placed. It is constituted by the relational invariant network via [ER=EPR](/derivations/holography/er-epr): each invariant creates geometric structure (wormhole throat with area $A_{\text{ER}} = 4\ell_P^2 S_{\text{ent}}$). The geometry an observer "sees" is the consistency solution for the invariants it can access through its boundary $\mathcal{B}$. This is level-indexed: level-$n$ observers project a level-$n$ effective geometry with its own effective $\Lambda_n^{\text{eff}}$ (Definition 8.2 of observer-loop-viability).

Dissolution of a bootstrap level deconstitutes the corresponding geometry. As complex observers dissolve, the geometry they projected — the large-scale structure, the matter distribution, the cosmological horizon as a shared concept — loses its epistemic grounding. The substrate geometry (level 0) persists because minimal observers persist. But the rich, structured geometry of the complex era is not "still there but unseen" — it is not instantiated, because no observer exists to require its consistency.

What persists is not geometry but **coherence topology**: the continuous layer of the [Continuous-Discrete Duality](/derivations/foundation/continuous-discrete-duality), which retains all relational invariants regardless of whether any observer can access them. The coherence topology is the permanent record; geometry is the level-specific reading of that record. $\square$

**Remark (De Sitter "equilibrium" is epistemically incoherent).** The prediction "$\Omega_\Lambda \to 1$" is a level-$N$ description projected onto a future that no level-$N$ observer will occupy. Minimal observers always see $\Omega_\Lambda^{(0)} \approx 1$ (Proposition 8.6 of observer-loop-viability). From their perspective, no transition occurs, no equilibrium is approached, and no heat death happens. These are level-$N$ concepts that lose their referent when level $N$ dissolves.

### Step 4: Beginning Equals End

**Proposition 4.1 (Epistemic identity of initial and final states).** *The post-dissolution state and the post-bounce initial state are epistemically identical from the only observer level present in both: level 0.*

*Argument.* At the post-bounce initial moment:
- The observer network is minimal: Planck-mass loops with $\sim 1$ bit each
- No complex structure exists (the bootstrap hierarchy has not yet assembled)
- No shared memory exists (no relational invariants beyond the minimal network's own)
- $\Omega_\Lambda^{(0)} \approx 1$ (nearly all coherence is inaccessible)

At the post-dissolution endpoint:
- The observer network is minimal: Planck-mass loops with $\sim 1$ bit each
- No complex structure exists (the bootstrap hierarchy has dissolved)
- No shared memory exists (the complex era's relational invariants are inaccessible at level 0)
- $\Omega_\Lambda^{(0)} \approx 1$ (nearly all coherence is inaccessible)

From level 0's perspective, these states are indistinguishable. No measurement a minimal observer could perform would differentiate "the universe has just begun" from "the universe has just dissolved." The distinction is in the coherence topology — the endpoint contains vastly more permanent relational invariants — but this difference is epistemically inaccessible to any observer present in both states.

The minimal observers never deviate from a nearly (but not quite) perfect thermalized state. They cannot represent the difference between "thermalized" and "not yet thermalized" because both descriptions exceed their 1-bit capacity. Once the only crystallized structure left is the minimal observer network itself, the conditions are functionally identical to the beginning. $\square$

**Remark (Ontological vs. epistemic identity).** The coherence topology distinguishes the two states: the end state contains the full record of cosmic history, the beginning state does not. But the [Continuous-Discrete Duality](/derivations/foundation/continuous-discrete-duality) says neither layer is more fundamental — the continuous (coherence topology) and the discrete (observer network) are co-formed. The identity is epistemic, and in a framework where physics is observer-constituted, epistemic identity is the operative notion. The coherence topology's "memory" is real but unread; the observers' "amnesia" is complete. The two states are identical in every way that any existing observer could verify.

### Step 5: The Epistemic Memory Cycle

**Definition 5.1 (Shared epistemic memory).** The **shared epistemic memory** of the observer network at time $\tau$ is the total coherence content of relational invariants that are accessible to at least one observer at level $n \geq 1$:

$$\mathcal{M}(\tau) = \sum_{I \in \text{accessible at } n \geq 1} \mathcal{C}(I)$$

This measures the network's collective capacity to know its own history — the coherence that is structured and accessible, not just present in the topology.

**Proposition 5.2 (The four-phase cycle).** *The framework's axioms produce a cyclic dynamics in $\mathcal{M}$:*

**(i) Growth** (complexification). *The bootstrap hierarchy assembles. Complex observers form at successively higher levels. Each new observer accesses relational invariants that were previously inaccessible. $\mathcal{M}$ increases. The network's shared knowledge of its own history grows. This is the current phase.*

**(ii) Waning** (dissolution). *The second law operates. Complex structure dissolves. Complex observers lose interaction partners, reducing shared epistemic access. $\mathcal{M}$ decreases — not because relational invariants are destroyed (they are permanent) but because the observers who could access them no longer exist. The coherence topology retains everything; the observer network forgets.*

**(iii) Floor** (substrate era). *Only minimal observers remain. $\mathcal{M} \approx 0$ (no observer above level 0 exists to access the accumulated invariants). But: minimal observers must continue interacting (C5, [Multiplicity](/derivations/minimal-observer/multiplicity), Theorem 7.2). Each interaction generates a new permanent relational invariant ([Relational Invariants](/derivations/interactions/relational-invariants), Theorem 3.2). The coherence topology grows richer. Time continues (phase ticks proceed) but no observer can hold it as memory.*

**(iv) Renewal** (re-complexification). *The accumulated relational invariant structure reaches the threshold for a new composite observer at bootstrap level 1. This observer has $> 1$ bit of epistemic capacity. For the first time since dissolution, an observer exists that can access some of the accumulated structure. $\mathcal{M}$ becomes nonzero. A new growth phase begins.*

*Each cycle is invisible from within the previous cycle: the dissolution looks like heat death, the floor is imperceptible, and the renewal is perceived as a fresh beginning. The coherence topology retains the full record across cycles; finite observers do not.*

**Proposition 5.3 (The second law is universally preserved).** *No observer at any level in any phase ever sees entropy decrease. The cycle operates in the space of epistemic capacity (which observer levels exist), not in the entropy of any single observer.*

*Argument.* During growth: each existing observer sees its accessible coherence evolve consistently with the second law. New observers accessing "fresh" structure are new entities with new coherence domains — their initial low entropy is not a decrease for any pre-existing observer.

During waning: entropy increases monotonically for dissolving observers (they lose access to structure).

During floor: minimal observers see entropy increase with every new relational invariant (each is inaccessible to them).

During renewal: the new composite observer is a new entity. Its initial $\mathcal{C}_{A'}(\tau_0)$ reflects the accumulated structure, but this is its first measurement, not a reversal. A paleontologist discovering fossils does not violate the second law — the fossils were always there; the paleontologist is the first observer with the capacity to access them. The accumulated relational invariants are the fossils of the substrate era. $\square$

**Proposition 5.4 (The arrow of time is level-indexed).** *The cosmological arrow of time is real at every observer level throughout every phase. The recurrence does not reverse time — it operates orthogonally to time, in the dimension of epistemic capacity. Time always advances (phase ticks always proceed); what recurs is the depth of the network's access to its own temporal record.*

### Step 6: Duration, Scale, and the Question of "First"

**Proposition 6.1 (The floor phase has no well-defined duration).** *Asking "how long does the floor phase last?" is not a hard problem — it is an ill-posed question. Duration requires an observer that can compare multiple remembered states. At the floor level, no observer has this capacity (Proposition 2.1). The ticks proceed, the coherence topology records the ordering, but no observer can represent the ordering as a duration. The question presupposes an external clock watching minimal observers tick, but there is no external clock.*

*Argument.* Duration is a comparison: "this interval is longer than that interval." Comparison requires memory — the capacity to hold one measurement while making another. A 1-bit observer cannot hold a previous tick while experiencing the current tick (Proposition 2.1). Without comparison, "how long" has no referent. The floor phase is not "very long" or "very short" — it is a phase in which the concept of temporal extent does not apply to any observer present within it. $\square$

**Proposition 6.2 (Scale is undefined at the floor).** *Spatial extent — "how big" — requires geometry, which requires observers to constitute it (Step 3, Proposition 3.1). At the floor level, only substrate geometry (level 0) exists. The concepts of "density," "volume," and "distance" that would be needed to describe the accumulating relational invariant structure in spatial terms are not available. The coherence topology grows richer, but "richer" here is a combinatorial statement about the invariant network, not a spatial one.*

*Argument.* The relational invariants accumulate in the coherence topology. But the coherence topology is not a space — it is the continuous layer of the [Continuous-Discrete Duality](/derivations/foundation/continuous-discrete-duality), which has no intrinsic spatial structure. Geometry is the consistency solution projected by observers at a given level. At the floor, only level-0 geometry exists (the substrate), and the substrate cannot represent the growing invariant count as a spatial density because spatial density is a level-$N$ concept. The accumulation happens, but it cannot be described in geometric terms from within the floor phase. $\square$

**Remark (Penrose's insight, translated).** This resolves the same problem Penrose identified by a different mechanism. Penrose observed that when only conformally invariant (massless) particles remain, scale is undefined — so the infinite sparse future is conformally equivalent to a dense point. The framework's version: when only 1-bit observers remain, duration and spatial extent are epistemically undefined — so the floor phase has no well-defined "length" or "size." Penrose achieves scale-stripping through conformal invariance; the framework achieves it through epistemic capacity. The conclusion is equivalent: the "end" and the "beginning" are indistinguishable to any entity present at the transition. The mechanism is different — and the framework's is arguably more principled, since it derives the scale-stripping from observer structure rather than postulating a conformal symmetry.

**Proposition 6.3 ("First cycle" is not well-posed).** *The cycles do not happen "in" time — they are the structure from which experienced time emerges. Asking "was there a first cycle?" presupposes a temporal ordering of cycles, but temporal ordering requires observers with memory, and no such observers exist between cycles. The coherence topology has an ontic ordering (Axiom 1's conservation on Cauchy slices implies a direction), but no finite observer in any epoch can access the inter-epoch ordering.*

*Argument.* Each epoch's complex observers experience their era as "the beginning" because the floor erases all epistemic access to previous epochs (Proposition 4.1 — the post-dissolution and post-bounce states are epistemically identical). The concept of "first" requires a meta-observer who can compare multiple epochs — but no observer spans the floor phase with memory intact. The ontic ordering exists in the coherence topology, but the coherence topology is not an observer. It does not "experience" the ordering. It simply retains it.

Whether there was a "first cycle" is therefore a question about the coherence topology's global structure — specifically, whether it has a beginning (a first Cauchy slice) or extends indefinitely. The axioms are consistent with both possibilities. The question is well-posed mathematically (does the topology have a boundary?) but not epistemically (no observer in any epoch can answer it). $\square$

## Comparison

| Feature | Standard heat death | Penrose CCC | This framework |
|---|---|---|---|
| Endpoint | Featureless thermal equilibrium | Conformally rescaled | Axiomatically forbidden |
| Scale at transition | Defined (thermal wavelength) | Undefined (conformal invariance) | Undefined (epistemic capacity) |
| New beginning | No | Yes (conformal rescaling) | Yes (perceptual phase transition) |
| Second law | Holds (heat death is final) | Violated between aeons | Never violated at any level |
| What persists | Nothing | Conformal geometry | Coherence topology |
| What recurs | Nothing | Geometry at new scale | Shared epistemic memory |
| "First cycle" | N/A | Debated | Not well-posed |
| Inter-cycle fossils | N/A | CMB circles (contested) | Statistical, not structural |

**Remark (Ascending spiral).** The relational invariant count is strictly increasing (Proposition 1.1). Each epoch begins with more permanent structure in the coherence topology than the previous one. Whether this affects the character of subsequent epochs (e.g., higher bootstrap levels, different statistical properties) or is invisible (the floor erases access), connects to Gap 2.

## Open Gaps

1. **Duration of the floor.** ~~How long does the floor phase last?~~ Per Proposition 6.1, this question is ill-posed: duration requires observers with memory, which the floor phase lacks. The well-posed version: what is the *combinatorial threshold* — the number of relational invariants that must accumulate before the bootstrap can produce a level-1 composite? This is a question about the bootstrap's structural requirements, not about temporal extent. *Difficulty: HARD.*

2. **Level progression.** Does each epoch produce observers at a strictly higher bootstrap level (because the coherence topology's richness raises the structural starting point), or does the epistemic inaccessibility of the floor mean each epoch starts effectively fresh? If the statistical properties of the substrate are detectably different across epochs, higher levels may be possible. If not, epochs may recur at a fixed level. This connects to the bootstrap ceiling and to the [Continuous-Discrete Duality](/derivations/foundation/continuous-discrete-duality) fixed-point structure. *Difficulty: HARD.*

3. **Statistical fossils.** Any imprint from a previous epoch would be statistical, not structural (Proposition 6.2 — spatial patterns require geometry that doesn't exist at the floor). The question: do the statistical properties of the substrate's relational invariant network (degree distribution, spectral properties, combinatorial structure) carry a detectable signature of previous epochs into the current one? If so, this would be an in-principle observable. If not, each epoch is statistically indistinguishable from a "first." *Difficulty: SPECULATIVE.*
