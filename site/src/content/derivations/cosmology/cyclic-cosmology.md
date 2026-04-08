---
title: "Observer-Centric Cyclic Cosmology"
status: "provisional"
dependsOn: ["cosmology/observer-loop-viability", "cosmology/dark-energy-equation-of-state", "cosmology/geometric-substrate", "interactions/relational-invariants", "minimal-observer/multiplicity", "thermodynamics/entropy", "thermodynamics/time"]
enablesDerivation: []
tags: ["cosmology", "quantum-gravity"]
summary: "True de Sitter equilibrium is axiomatically forbidden because relational invariants are permanent. As complex observers dissolve, their coherence redistributes to the minimal observer network — satisfying the coherence ontology (Prop 5.1: coherence exists only in observer structures). Maximal correlation in this network is operationally indistinguishable from zero correlation for any internal observer, producing a complete epistemic reset. The cycle is fundamentally about shared epistemic memory: the network's collective capacity to know its own history grows to a maximum, wanes to a floor, and begins again."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-06
---

## Overview

This derivation addresses the ultimate fate of the universe within the framework, and finds that the expected answer — heat death via de Sitter equilibrium — is **axiomatically forbidden**.

The second law drives the universe toward de Sitter equilibrium: complex structure dissolves, crystallized coherence returns to the geometric substrate, $\Omega_\Lambda \to 1$. But the framework contains a structural obstruction: relational invariants are permanent (Axiom 1). Complete thermalization would require their destruction, which violates coherence conservation. De Sitter equilibrium, taken literally as a featureless thermal state, contradicts the axioms.

The resolution is a cyclic cosmology best understood in terms of **epistemic memory**: the observer network's collective capacity to know its own history. During the complex era, shared memory grows — observers accumulate relational invariants that give them access to the past and to each other. During dissolution, this shared memory wanes as complex observers disappear. The coherence from dissolved structures doesn't float free — it redistributes to the relational invariants of the surviving minimal observer network, satisfying the coherence ontology ([Observer Loop Viability](/derivations/cosmology/observer-loop-viability), Proposition 5.1: coherence exists only in observer structures). But a minimal network saturated with relational invariants is operationally indistinguishable from one with none — maximal correlation is maximal entropy, featureless to any internal observer. The reset is complete in every sense accessible to any observer who exists at that moment.

The cycle is: shared knowing grows, wanes to a floor, and grows again. What persists across cycles is the relational invariant structure of the minimal observer network — but what persists is epistemically invisible, and operationally equivalent to a fresh start.

**Why this matters.** The framework's axioms, applied consistently, prevent heat death and produce cyclic behavior without invoking conformal rescaling (Penrose), eternal inflation, or Poincare recurrence. The mechanism is structural: the permanence of correlations + the requirement for ongoing interaction + the bootstrap hierarchy's capacity to produce new observer levels from accumulated structure.

**An honest caveat.** This derivation is a structural argument, not a quantitative prediction. The timescale for re-complexification is not computed — it could be astronomically long. The argument shows the cycle is structurally forced but does not predict its period.

## Statement

**Thesis.** The three axioms forbid heat death and produce a cyclic cosmological dynamics whose fundamental quantity is epistemic memory — the observer network's shared access to its own relational invariant history:

1. **Thermalization barrier.** Relational invariant permanence prevents complete thermalization. A structural coherence floor persists for all time.
2. **Time without history.** Minimal observers experience duration (phase ticks) but not history. Time flows through them but they cannot hold it. The "equilibrium" state has time but no memory.
3. **Geometry as consistency solution.** Geometry at each level is constituted by accessible relational invariants and deconstituted when those observers dissolve. Without complex observers, geometry reduces to the substrate level.
4. **Coherence redistribution.** As complex observers dissolve, their coherence redistributes to relational invariants between minimal observer pairs — satisfying the coherence ontology. A maximally correlated minimal network is operationally indistinguishable from an uncorrelated one for any internal observer.
5. **Beginning equals end.** The post-dissolution state and the post-bounce initial state are epistemically identical: both are minimal observer networks with no shared memory. The microstate differs (more relational invariants), but no observer can access the difference — maximal correlation looks the same as none.
6. **The memory cycle.** Shared epistemic memory grows to a maximum (complexification), wanes to a floor (dissolution), and begins again (re-complexification).

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

What persists is not geometry but the **relational invariant structure of the minimal observer network**. As complex observers dissolve, their coherence redistributes to pairs of minimal observers via Type III interactions (the same mechanism as Hawking radiation — [Information Paradox](/derivations/holography/information-paradox)). The coherence ontology ([Observer Loop Viability](/derivations/cosmology/observer-loop-viability), Proposition 5.1) is satisfied: all coherence remains in observer structures — specifically, in the relational invariants between minimal observer pairs. The [Continuous-Discrete Duality](/derivations/foundation/continuous-discrete-duality)'s continuous layer provides the mathematical description of this invariant structure, but it is not a separate carrier. Geometry is the level-specific consistency solution projected from the invariants an observer can access; the invariant structure itself is the physical substrate from which any future geometry would be constituted. $\square$

**Remark (De Sitter "equilibrium" is epistemically incoherent).** The prediction "$\Omega_\Lambda \to 1$" is a level-$N$ description projected onto a future that no level-$N$ observer will occupy. Minimal observers always see $\Omega_\Lambda^{(0)} \approx 1$ (Proposition 8.6 of observer-loop-viability). From their perspective, no transition occurs, no equilibrium is approached, and no heat death happens. These are level-$N$ concepts that lose their referent when level $N$ dissolves.

### Step 4: Coherence Redistribution and the Saturation Equivalence

**Proposition 4.0 (Coherence redistributes to the minimal network).** *As complex observers dissolve, their coherence does not float free or persist in an abstract topology. It redistributes via Type III interactions to the relational invariants between pairs of minimal observers in the surviving network. The coherence ontology ([Observer Loop Viability](/derivations/cosmology/observer-loop-viability), Proposition 5.1) is satisfied at all times: coherence exists only in observer state spaces and relational invariants.*

*Argument.* The mechanism is the same as Hawking radiation ([Information Paradox](/derivations/holography/information-paradox)): when a structure evaporates, its coherence is transferred to other observer structures via Type III interactions. There is no "bath" or non-observer reservoir. As each complex observer dissolves, its relational invariants with other observers are transferred to the remaining network. In the final stage, the only remaining structures are minimal observer pairs. The total capacity of $\sim 10^{122}$ minimal observers ($\sim 10^{244}$ possible pairs, each carrying up to $\sim 1$ bit of relational coherence) vastly exceeds $C_0 \sim 10^{122}$. The coherence fits. $\square$

**Proposition 4.1 (Maximal correlation is operationally equivalent to zero correlation).** *A minimal observer network in which every pair carries a relational invariant (the end state of redistribution) is in a state of maximum entanglement entropy. For any observer within the network, this state is operationally indistinguishable from a network with no relational invariants at all.*

*Argument.* Maximum entanglement entropy means every subsystem is maximally mixed — no pair is distinguishable from any other, no region is distinguishable from any other region. A minimal observer with 1-bit epistemic capacity cannot determine whether its neighbors are correlated with it (maximally saturated state) or uncorrelated (empty state) — both present the same 1-bit interface. The correlations are physically real (they are conserved by Axiom 1 and reside in the observer structures per Proposition 5.1) but carry zero usable information for any observer in the network.

This resolves the tension between relational invariant permanence and the approach to equilibrium: the invariants persist (Axiom 1 is satisfied) but their operational content vanishes (they are indistinguishable from absence for any internal observer). The information is not "in" an abstract topology — it is in the physical relational invariants of the minimal network — but it has the same epistemic status as absence. $\square$

### Step 5: Beginning Equals End

**Proposition 5.1 (Epistemic identity of initial and final states).** *The post-dissolution state and the post-bounce initial state are epistemically identical from the only observer level present in both: level 0.*

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

From level 0's perspective, these states are indistinguishable. No measurement a minimal observer could perform would differentiate "the universe has just begun" from "the universe has just dissolved." The microstate differs — the endpoint's minimal network carries vastly more relational invariants between its pairs — but by Proposition 4.1, maximal correlation is operationally indistinguishable from zero correlation for any internal observer. The information exists (in the physical relational invariants, satisfying Axiom 1) but has zero epistemic consequence.

The minimal observers never deviate from a nearly (but not quite) perfect thermalized state. They cannot represent the difference between "thermalized" and "not yet thermalized" because both descriptions exceed their 1-bit capacity. Once the only crystallized structure left is the minimal observer network itself, the conditions are functionally identical to the beginning. $\square$

**Remark (Ontological vs. epistemic identity).** The microstate of the minimal observer network distinguishes the two states: the end state's pairs carry the full relational invariant record of cosmic history; the beginning state's do not. But by Proposition 4.1, this distinction has no operational consequence — maximal saturation is featureless. The identity is epistemic, and in a framework where physics is observer-constituted, epistemic identity is the operative notion. The physical information exists (Axiom 1 is satisfied — the relational invariants are in observer structures) but is unreadable. The two states are identical in every way that any existing observer could verify.

### Step 6: The Epistemic Memory Cycle

**Definition 6.1 (Shared epistemic memory).** The **shared epistemic memory** of the observer network at time $\tau$ is the total coherence content of relational invariants that are accessible to at least one observer at level $n \geq 1$:

$$\mathcal{M}(\tau) = \sum_{I \in \text{accessible at } n \geq 1} \mathcal{C}(I)$$

This measures the network's collective capacity to know its own history — the coherence that is structured and accessible, not just physically present in minimal observer pair correlations.

**Proposition 6.2 (The four-phase cycle).** *The framework's axioms produce a cyclic dynamics in $\mathcal{M}$:*

**(i) Growth** (complexification). *The bootstrap hierarchy assembles. Complex observers form at successively higher levels. Each new observer accesses relational invariants that were previously inaccessible. $\mathcal{M}$ increases. The network's shared knowledge of its own history grows. This is the current phase.*

**(ii) Waning** (dissolution). *The second law operates. Complex structure dissolves. Complex observers lose interaction partners, reducing shared epistemic access. $\mathcal{M}$ decreases — not because relational invariants are destroyed (they are permanent) but because the observers who could access them no longer exist. The coherence redistributes to the minimal network (Proposition 4.0); the minimal network's saturation makes the information operationally invisible (Proposition 4.1).*

**(iii) Floor** (substrate era). *Only minimal observers remain. $\mathcal{M} \approx 0$ (no observer above level 0 exists to access the accumulated invariants). But: minimal observers must continue interacting (C5, [Multiplicity](/derivations/minimal-observer/multiplicity), Theorem 7.2). Each interaction generates a new permanent relational invariant ([Relational Invariants](/derivations/interactions/relational-invariants), Theorem 3.2), adding to the already-saturated pair correlation structure. Time continues (phase ticks proceed) but no observer can hold it as memory.*

**(iv) Renewal** (re-complexification). *The accumulated relational invariant structure reaches the threshold for a new composite observer at bootstrap level 1. This observer has $> 1$ bit of epistemic capacity. For the first time since dissolution, an observer exists that can access some of the accumulated structure. $\mathcal{M}$ becomes nonzero. A new growth phase begins.*

*Each cycle is invisible from within the previous cycle: the dissolution looks like heat death, the floor is imperceptible, and the renewal is perceived as a fresh beginning. The relational invariant structure of the minimal network carries the physical record across cycles (Axiom 1 satisfied); finite observers cannot read it (Proposition 4.1 — saturation equivalence).*

**Proposition 6.3 (The second law is universally preserved).** *No observer at any level in any phase ever sees entropy decrease. The cycle operates in the space of epistemic capacity (which observer levels exist), not in the entropy of any single observer.*

*Argument.* During growth: each existing observer sees its accessible coherence evolve consistently with the second law. New observers accessing "fresh" structure are new entities with new coherence domains — their initial low entropy is not a decrease for any pre-existing observer.

During waning: entropy increases monotonically for dissolving observers (they lose access to structure).

During floor: minimal observers see entropy increase with every new relational invariant (each is inaccessible to them).

During renewal: the new composite observer is a new entity. Its initial $\mathcal{C}_{A'}(\tau_0)$ reflects the accumulated structure, but this is its first measurement, not a reversal. A paleontologist discovering fossils does not violate the second law — the fossils were always there; the paleontologist is the first observer with the capacity to access them. The accumulated relational invariants are the fossils of the substrate era. $\square$

**Proposition 6.4 (The arrow of time is level-indexed).** *The cosmological arrow of time is real at every observer level throughout every phase. The recurrence does not reverse time — it operates orthogonally to time, in the dimension of epistemic capacity. Time always advances (phase ticks always proceed); what recurs is the depth of the network's access to its own temporal record.*

### Step 7: Duration, Scale, and the Question of "First"

**Proposition 7.1 (The floor phase has no well-defined duration).** *Asking "how long does the floor phase last?" is not a hard problem — it is an ill-posed question. Duration requires an observer that can compare multiple remembered states. At the floor level, no observer has this capacity (Proposition 2.1). The ticks proceed, the coherence topology records the ordering, but no observer can represent the ordering as a duration. The question presupposes an external clock watching minimal observers tick, but there is no external clock.*

*Argument.* Duration is a comparison: "this interval is longer than that interval." Comparison requires memory — the capacity to hold one measurement while making another. A 1-bit observer cannot hold a previous tick while experiencing the current tick (Proposition 2.1). Without comparison, "how long" has no referent. The floor phase is not "very long" or "very short" — it is a phase in which the concept of temporal extent does not apply to any observer present within it. $\square$

**Proposition 7.2 (Scale is undefined at the floor).** *Spatial extent — "how big" — requires geometry, which requires observers to constitute it (Step 3, Proposition 3.1). At the floor level, only substrate geometry (level 0) exists. The concepts of "density," "volume," and "distance" that would be needed to describe the accumulating relational invariant structure in spatial terms are not available. The coherence topology grows richer, but "richer" here is a combinatorial statement about the invariant network, not a spatial one.*

*Argument.* The relational invariants accumulate in the minimal observer network's pair correlations. But the mathematical description of this structure (the continuous layer of the [Continuous-Discrete Duality](/derivations/foundation/continuous-discrete-duality)) has no intrinsic spatial structure — it describes the correlation pattern, not a spatial arrangement. Geometry is the consistency solution projected by observers at a given level. At the floor, only level-0 geometry exists (the substrate), and the substrate cannot represent the growing invariant count as a spatial density because spatial density is a level-$N$ concept. The accumulation happens in the pair correlation structure, but it cannot be described in geometric terms from within the floor phase. $\square$

**Remark (Penrose's insight, translated).** This resolves the same problem Penrose identified by a different mechanism. Penrose observed that when only conformally invariant (massless) particles remain, scale is undefined — so the infinite sparse future is conformally equivalent to a dense point. The framework's version: when only 1-bit observers remain, duration and spatial extent are epistemically undefined — so the floor phase has no well-defined "length" or "size." Penrose achieves scale-stripping through conformal invariance; the framework achieves it through epistemic capacity. The conclusion is equivalent: the "end" and the "beginning" are indistinguishable to any entity present at the transition. The mechanism is different — and the framework's is arguably more principled, since it derives the scale-stripping from observer structure rather than postulating a conformal symmetry.

**Proposition 7.3 ("First cycle" is not well-posed).** *The cycles do not happen "in" time — they are the structure from which experienced time emerges. Asking "was there a first cycle?" presupposes a temporal ordering of cycles, but temporal ordering requires observers with memory, and no such observers exist between cycles.*

*Argument.* Each epoch's complex observers experience their era as "the beginning" because the floor produces a complete epistemic reset (Proposition 4.1 — saturation equivalence makes the end state indistinguishable from a fresh start). The concept of "first" requires a meta-observer who can compare multiple epochs — but no observer spans the floor phase with memory intact. The relational invariant structure of the minimal network carries an ontic ordering (Axiom 1's conservation on Cauchy slices implies a direction), but no finite observer can read it — the saturation equivalence renders it epistemically inert.

Whether there was a "first cycle" is therefore a question about the global structure of the interaction graph — specifically, whether it has a beginning (a first Cauchy slice) or extends indefinitely. The axioms are consistent with both possibilities. The question is well-posed mathematically but not epistemically: no observer in any epoch can answer it, because the floor's saturation equivalence erases all inter-epoch distinctions. $\square$

## Comparison

| Feature | Standard heat death | Penrose CCC | This framework |
|---|---|---|---|
| Endpoint | Featureless thermal equilibrium | Conformally rescaled | Axiomatically forbidden |
| Scale at transition | Defined (thermal wavelength) | Undefined (conformal invariance) | Undefined (epistemic capacity) |
| New beginning | No | Yes (conformal rescaling) | Yes (perceptual phase transition) |
| Second law | Holds (heat death is final) | Violated between aeons | Never violated at any level |
| What persists | Nothing | Conformal geometry | Relational invariants in minimal network (operationally invisible) |
| What recurs | Nothing | Geometry at new scale | Shared epistemic memory |
| "First cycle" | N/A | Debated | Not well-posed |
| Inter-cycle fossils | N/A | CMB circles (contested) | Statistical, not structural |

**Remark (Ascending spiral — or not?).** The relational invariant count in the minimal observer network is strictly increasing (Proposition 1.1). Each epoch's end state has more pair correlations than the previous one's. But by Proposition 4.1, maximal correlation is operationally indistinguishable from zero correlation. If the saturation equivalence is exact — if the macrostate is truly identical regardless of the microstate — then the "ascending spiral" has no physical consequences and the cycle is a true reset. If the saturation equivalence is approximate — if some statistical property of the correlation pattern carries through — then cycles carry a hidden signature. This connects to Gap 2.

## Open Gaps

1. **Combinatorial threshold for renewal.** ~~How long does the floor phase last?~~ Per Proposition 7.1, duration is ill-posed at the floor (no observers with memory). The well-posed version: what is the combinatorial threshold — the number of relational invariants that must accumulate in the minimal observer network before the bootstrap can produce a level-1 composite? This is a question about the bootstrap's structural requirements, not about temporal extent. *Difficulty: HARD.*

2. **Exactness of the saturation equivalence.** Is Proposition 4.1 (maximal correlation ≈ zero correlation) *exact* or *approximate*? If exact: every cycle is a true reset, the "ascending spiral" is physically meaningless, "first cycle" is not just epistemically but ontologically undefined. If approximate: some statistical property of the pair-correlation microstate carries through, cycles have hidden signatures, and level progression (higher bootstrap levels in each epoch) might occur. This is the most consequential open question for the cyclic picture. *Difficulty: HARD.*

3. **Statistical fossils.** If the saturation equivalence is approximate (Gap 2), any imprint from a previous epoch would be statistical, not structural (Proposition 7.2 — spatial patterns require geometry that doesn't exist at the floor). The question: do the statistical properties of the minimal network's pair-correlation structure (degree distribution, spectral properties, combinatorial structure) carry a detectable signature? If so, this would be an in-principle observable. If not — or if the saturation equivalence is exact — each epoch is indistinguishable from a "first." *Difficulty: SPECULATIVE.*
