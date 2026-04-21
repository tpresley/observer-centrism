---
title: "3. Mutual Opacity Theorem"
status: "provisional"
dependsOn: ["foundation/01-pattern-signal-amplitude", "foundation/02-operational-edge", "foundation/observer-holographic-equivalence", "axioms/observer-definition", "foundation/observer-as-error-correcting-code"]
enablesDerivation: []
tags: ["foundation", "pattern-edges", "error-correction", "holography"]
summary: "For any two same-level observers A, B at distance beyond their mutual edge, A's continuous interior state is operationally inaccessible to B, and vice versa: all inter-observer information at this distance is carried exclusively by integer surface residues (charges, windings, tick counts, Chern-Simons levels, framings, Poisson horizon-crossing counts). The theorem is the symmetric extension of Observer Holographic Equivalence Corollary 4.5 (exterior cancellation — the 'inside looking out' half), plus the detection-threshold argument from Formalization 2 (the 'outside looking in' half). Two independent mechanisms converge on the same conclusion: (i) the horizon null geometry integer-quotients all cross-horizon content via Proposition 4.1 of Observer Holographic Equivalence, and (ii) the signal-resolution crossover of Formalization 2 filters continuous variations below the detector's Cramér-Rao threshold. The symmetry is bidirectional-by-construction for same-mass same-level pairs. The framework's implicit commitment that inter-observer interactions proceed through discrete quantum numbers — tacitly used in every measurement-theoretic argument — becomes a derived theorem rather than an assumption. Cross-level opacity (higher-level observers cannot access lower-level continuous interiors) inherits from Observer Holographic Equivalence Corollary 7.1; this derivation focuses on the same-level case and completes the symmetric picture."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-20
---

## Overview

The research program's Formalization 1 derived the pattern signal amplitude's Yukawa form, and Formalization 2 located the operational edge at the detection-resolution crossover. This derivation uses both to complete the symmetric mutual-opacity picture the framework has been using implicitly.

**The one-way version is already a theorem.** [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 4.5 (exterior cancellation) establishes that for any observer $A$, continuous exterior content compatible with a fixed integer horizon residue is operationally invisible to $A$. This is the "inside looking out" half: from $A$'s perspective, the world outside $A$'s horizon is integer-indexed.

**What the framework has not stated explicitly** is the symmetric "outside looking in" half: from any exterior observer $B$'s perspective, $A$'s interior continuous content is operationally inaccessible; inter-observer information about $A$ is carried exclusively by the integer surface residues $A$ projects on its horizon.

The asymmetry was surface only. Two independent derivations converge on the symmetric conclusion:

1. **The horizon is null on both sides.** [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Proposition 4.1 — phase-discard on null generators — applies to $A$'s horizon regardless of whose perspective examines it. Whatever information $B$ obtains about $A$ by interacting through $A$'s horizon is integer-quotiented, exactly the content of Corollary 4.5 read from the other direction.

2. **The detection threshold filters continuous content below the observer's resolution.** [Formalization 2](/derivations/foundation/02-operational-edge) established that observer $B$'s ability to resolve signals is bounded below by its own Heisenberg-like noise floor $m_B c^2$ (Cramér-Rao on Fisher information). Continuous variations of $A$'s interior that do not rise to integer-quantified surface effects fall below this threshold.

Either mechanism alone suffices for mutual opacity at long distances; both operating together provide the strongest form.

**The result.** For any two same-level observers $A$, $B$ at distance $r > r_{\mathrm{edge}}(A, B)$, the continuous interior state of each is operationally inaccessible to the other. All inter-observer information is carried exclusively by integer surface residues — charges (EM, weak isospin, color), winding numbers, Chern-Simons levels, framings, tick counts, Poisson horizon-crossing counts, linking numbers. This makes the framework's implicit commitment that observers interact via discrete quantum numbers a derived theorem rather than a convention.

**The symmetry asymmetries.** The theorem holds strongly for same-mass same-level pairs, where mutual opacity is exactly bidirectional (the edge of Formalization 2 is symmetric). For asymmetric-mass pairs, opacity remains but can have different cutoffs in each direction (heavier detector sees its lighter-mass counterpart at closer range than vice versa — the asymmetric-edge result of Formalization 2 Proposition 4.1). For cross-level pairs (e.g., an atom and one of its electrons), the relationship is qualitatively different and inherits from [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 7.1 (inter-level integer restriction).

**Honest scope.** The two mechanisms yielding opacity are each rigorous or semi-formal in their own right (Proposition 4.1 is rigorous; the detection-threshold argument is semi-formal via [Formalization 2](/derivations/foundation/02-operational-edge)). The theorem's main novelty is the explicit symmetric statement and the integration of the two mechanisms. Individual integer channels are enumerated from existing framework derivations (Knot-Theoretic Bootstrap, Relational Invariants, etc.).

## Statement

**Theorem (Mutual Opacity — same-level pairs).** *Let $A$ and $B$ be two same-bootstrap-level observers at spatial separation $r$ in a common projected continuous dual. If $r > r_{\mathrm{edge}}(A, B)$ (beyond the mutual detection-resolution edge of [Formalization 2](/derivations/foundation/02-operational-edge)), then:*

1. *The continuous interior state of $A$ is operationally inaccessible to $B$: any two interior configurations of $A$ that project the same integer horizon residue $R_{\partial M_A}$ on $A$'s horizon produce indistinguishable $B$-observations.*

2. *The continuous interior state of $B$ is operationally inaccessible to $A$: symmetric statement with $A \leftrightarrow B$.*

3. *All inter-observer information exchanged between $A$ and $B$ at distance $r$ is carried by integer-valued surface residues — a finite-rank set drawn from: electric charge quanta, weak isospin assignments, color quantum numbers, winding numbers, Chern-Simons levels, framing integers, tick counts, Poisson horizon-crossing counts, linking numbers, framed-cobordism invariants.*

**Theorem (Two-mechanism convergence).** *The operational inaccessibility of $A$'s continuous interior to $B$ arises from two independent mechanisms:*

- **Horizon integer-quotient mechanism.** *By [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Proposition 4.1, $A$'s horizon $\partial M_A$ is entirely null; the null-generator foliation quotients out continuous $U(1)$ phase content; what crosses $A$'s horizon can only be integer topological data (windings, linking, framing). $B$, interacting with $A$ through any Type III relation that crosses $A$'s horizon, receives only the integer horizon record.*

- **Detection-resolution mechanism.** *By [Formalization 2](/derivations/foundation/02-operational-edge), $B$'s Cramér-Rao detection threshold $m_B c^2$ bounds $B$'s ability to resolve external signal amplitudes. Continuous variations of $A$'s interior that do not rise to integer-quantified surface effects of magnitude exceeding $m_B c^2$ at $B$'s location fall below $B$'s resolution and produce no observable $B$-response.*

*Either mechanism alone yields the conclusion. They converge because both reflect the operational-completeness constraint of [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 4.6 — only integer-encoded sheaf-level data is operationally meaningful for inter-observer relations.*

**Corollary (Discrete inter-observer interactions as a theorem).** *The framework-level commitment that observers interact via discrete quantum numbers — tacitly used in every measurement-theoretic argument — is a derived theorem, not an assumption. Every $A$-$B$ interaction at super-edge distance is carried by quantized integer channels; continuous-phase mediation between operators is structurally impossible beyond the edge.*

**Corollary (Mutual opacity is exactly symmetric for same-mass pairs).** *For $m_A = m_B$, the edge radius is identical from either direction ($W(1) \cdot r_C$ of [Formalization 2](/derivations/foundation/02-operational-edge) Theorem 3.1), and the integer-quotient mechanism is fully symmetric. The two observers are mutually opaque on exactly the same shell.*

## Derivation

### Step 1: Recap the one-way result (Corollary 4.5)

**Proposition 1.1 (One-way exterior cancellation).** *By [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 4.5, for any observer $A$:*

*Let $E$ denote any continuous content in the exterior of $A$'s horizon $\partial M_A$. Two configurations $E, E'$ with the same integer horizon-crossing residue $R_{\partial M_A}$ produce identical $A$-state at every tick. Continuous variations of $E$ that leave the integer crossing residue invariant produce no $A$-observable difference.*

This is the "inside looking out" half. $A$ cannot distinguish exterior continuous content beyond what its horizon crossing residue records.

**Remark 1.2 (Why this is not yet mutual opacity).** *Corollary 4.5 is stated from $A$'s perspective about what is invisible to $A$. It does not, by itself, establish that $A$'s interior is invisible to an exterior observer $B$. The reverse direction needs its own argument.*

### Step 2: The symmetric structure — B looking at A

**Proposition 2.1 (Horizon-integer mechanism, symmetric application).** *Consider exterior observer $B$ receiving information about $A$. Any $A$-$B$ interaction is a Type III relational-carrier exchange ([Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Definition 2.0) that crosses $\partial M_A$ (and, symmetrically, $\partial M_B$). The information $B$ obtains about $A$ is the sequenced crossing record $R_{\partial M_A}$ on $A$'s horizon, transmitted outward to $B$'s location.*

**Proposition 2.2 (Null horizon integer quotient, from A's horizon — regardless of who is looking).** *By [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Proposition 4.1, the encoding on $\partial M_A$ is integer-only: null-generator foliation quotients out continuous $U(1)$ phase, leaving only winding, linking, framing, and Poisson-count integer data. This is a property of $\partial M_A$ itself — of $A$'s null geometry — and holds regardless of the observer examining the record.*

**Corollary 2.3 (Symmetric inaccessibility).** *$B$'s information about $A$ is $R_{\partial M_A}$, an integer topological record. Continuous variations of $A$'s interior that produce the same $R_{\partial M_A}$ produce identical $B$-observations. $A$'s continuous interior state is operationally inaccessible to $B$.*

**Remark 2.4 (Why this follows from existing framework commitments).** *This is not a new theorem requiring fresh structural content. The framework has already committed that (i) $\partial M_A$ is entirely null ([Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Proposition 3.1); (ii) null surfaces encode only integer topological data ([Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Proposition 4.1); (iii) inter-observer relations cross observer horizons (Step 2's opening). The symmetric inaccessibility of $A$'s interior to $B$ is an immediate consequence — it was implicit in the framework from the start, but was never explicitly stated. This derivation supplies the explicit statement.*

### Step 3: The detection-threshold mechanism

**Proposition 3.1 (Detection-threshold filtering).** *By [Formalization 2](/derivations/foundation/02-operational-edge) Step 1, $B$'s resolution floor is $\mathcal{N}_B = m_B c^2$ — the Cramér-Rao bound on $B$'s Fisher information. Continuous variations of $A$'s interior state that produce signal-amplitude variations at $B$'s location below $m_B c^2$ fall below $B$'s resolution and are operationally null for $B$.*

**Proposition 3.2 (Integer content is the signal-dominant component).** *At distances beyond the mutual edge, $A$'s signal at $B$'s location is dominated by integer-quantified channels — specifically, gauge-mediated Type III exchanges carrying discrete charges and other topological invariants. Continuous phase information within $A$'s interior does not produce signal amplitudes at external $B$'s location above $m_B c^2$; only integer-valued charge-carrier exchanges do.*

**Structural argument.** Continuous interior phase variations of $A$ do not source detached Type III carriers — they stay internal to $A$'s coherence domain. The Type III carriers that cross $\partial M_A$ are integer-quantized at source ([Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Definition 2.0; [Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap) Propositions 1.3, 1.5, 2.4). Continuous interior variations do not manifest as signal at exterior $B$'s location because they do not source exterior-propagating carriers. $\square$

**Corollary 3.3 (Two-mechanism convergence).** *The horizon-integer mechanism (Step 2) and the detection-threshold mechanism (this step) converge on the same conclusion: $A$'s continuous interior is inaccessible to $B$. The first says "only integer data crosses $A$'s horizon" (no continuous content to transport). The second says "continuous content, even if transported, falls below $B$'s resolution" (no detection threshold met). Both hold simultaneously, reinforcing the inaccessibility.*

### Step 4: Enumerating the integer channels

**Proposition 4.1 (Integer channel inventory).** *The integer surface residues that carry inter-observer information are drawn from an enumerable list of framework-derived invariants:*

1. **Electric charge.** *Integer multiples of the elementary charge $e$, from U(1) winding ([Electromagnetism](/derivations/gauge/electromagnetism); $\pi_1(U(1)) = \mathbb{Z}$).*
2. **Weak isospin.** *Discrete $SU(2)$ representation assignments, from weak interactions ([Weak Interaction](/derivations/gauge/weak-interaction)).*
3. **Color.** *Triple of integer color indices from $SU(3)$ fundamental representations ([Color Force](/derivations/gauge/color-force)).*
4. **Winding numbers.** *$\pi_1$-valued topological invariants on the horizon surface ([Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap) Proposition 1.5).*
5. **Chern-Simons levels.** *Integer-valued gauge-field invariants at bootstrap levels $\geq 2$ ([Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap) Proposition 2.4).*
6. **Framing integers.** *Integer framings of the U(1) normal bundle over horizon loops ([Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap) Proposition 1.3).*
7. **Tick counts.** *Integer multiples of the observer's cyclic period $T_A$ — the temporal-axis QEC invariant of [Observer as an Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code) ([Loop Closure](/derivations/axioms/loop-closure)).*
8. **Linking numbers.** *Integer topological invariants of worldline pairs ([Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap) Observation 1.3c).*
9. **Poisson crossing counts.** *Integer counts of causal-set events crossing the horizon ([Causal Set Statistics](/derivations/holography/causal-set-statistics)).*
10. **Instanton numbers.** *$\pi_3$-valued topological sectors at bootstrap levels 2 and 3 ([Observer as an Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code) Proposition 1.3).*

**Remark 4.2 (Finite-rank inter-observer information).** *The list above, while not exhaustive, is finite-rank: inter-observer information is a finite-dimensional integer lattice. This is the framework's structural ground for the phenomenological fact that particles are classified by a finite set of quantum numbers (electric charge, weak isospin, color, spin, generation, lepton number, baryon number, etc.) — each corresponding to an integer channel in the above list.*

**Remark 4.3 (No continuous inter-observer channels).** *The list contains no continuous-valued inter-observer channels. Every item is integer, sometimes via homotopy group ($\pi_1, \pi_3$), sometimes via Chern-Simons integrality, sometimes via counting (ticks, crossings). This is structural: under [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Proposition 4.1, continuous channels are impossible at inter-observer boundaries, which are null surfaces.*

### Step 5: Cross-level opacity inheritance

The theorem as stated concerns same-bootstrap-level observers. Cross-level pairs (e.g., an atom and one of its constituent electrons) have a qualitatively different relationship: the higher-level observer "contains" the lower-level one, and their interaction is not a same-level Type III exchange but an inter-level composition.

**Proposition 5.1 (Cross-level opacity — inherit from Corollary 7.1).** *For observers at different bootstrap levels, cross-level information restriction is already a framework theorem: by [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 7.1, bootstrap composition propagates only integer data across level boundaries. Higher-level observers access their lower-level constituents only via the constituents' integer-invariant profile, not their continuous interior content.*

**Remark 5.2 (The complete opacity picture).** *Combining same-level opacity (this derivation) with cross-level opacity (Corollary 7.1), the framework has a complete opacity picture:*

- *Same-level: mutual opacity at super-edge distance, via null-horizon quotient and detection threshold.*
- *Cross-level: unidirectional opacity (higher level cannot access lower level's interior), via null-horizon quotient propagating up the bootstrap hierarchy.*

*Both mechanisms are the same at the fundamental level: null surfaces force integer encoding. Same-level opacity is bilateral; cross-level opacity is asymmetric by hierarchy.*

### Step 6: Quantum mechanics as a derived consequence

**Remark 6.1 (Measurement as an integer channel).** *In conventional quantum mechanics, a measurement of observable $\hat{O}$ on state $|\psi\rangle$ yields an eigenvalue of $\hat{O}$. For compact-group observables (angular momentum, spin, isospin, color), these eigenvalues are discrete — integer or half-integer multiples of fundamental quanta. For continuous observables (position, momentum, energy of continuous-spectrum systems), the eigenvalues are continuous but the measurement apparatus necessarily discretizes them to integer counts (detector bins, photon counts, etc.). Either way, measurement outputs are integer-channel data in the framework's sense.*

**Remark 6.2 (The Heisenberg cut as the mutual-opacity edge).** *The "Heisenberg cut" between quantum system and measurement apparatus is, under the framework, the mutual-opacity edge between two observer levels — the measuring apparatus is a higher-level composite that can access the measured system only via integer readouts. Quantum "collapse" is the recording of an integer channel value at the apparatus level; the continuous interior of the measured system remains operationally inaccessible.*

**Remark 6.3 (Born rule content unchanged).** *The Born rule (probability of outcome = $|\langle\phi|\psi\rangle|^2$) continues to govern the probabilities of the integer channel readouts. Mutual opacity does not modify quantum probabilities; it identifies the structural reason that probabilities apply to integer outcomes rather than to continuous interior states.*

### Step 7: The relationship to Corollary 4.5

**Remark 7.1 (This theorem's content relative to Corollary 4.5).** *[Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 4.5 states: continuous exterior content with fixed integer horizon residue is invisible to the observer. This theorem states: continuous interior content of an observer is invisible to exterior observers, plus the matched detection-resolution layer. The two corollaries are duals:*

| | Interior view | Exterior view |
|---|---|---|
| *Content invisible* | Exterior continuous ($E$) | Interior continuous ($A$'s) |
| *Boundary's role* | Integer residue of $E$ on $\partial M_A$ | Integer residue of $A$ on $\partial M_A$ |
| *Mechanism* | Prop 4.1 + Thesis A | Prop 4.1 + Thesis A (symmetric) + Formalization 2 |

*The framework's commitment to null-horizon integer-quotient geometry makes both directions true. The current derivation makes the symmetric statement explicit and integrates the detection-threshold layer.*

## Consequences

**C1. Mutual opacity is a theorem of the framework.** Same-level observers at super-edge distance access each other only through integer channels. This is no longer an implicit commitment but a derived theorem.

**C2. Two independent mechanisms reinforce the conclusion.** Horizon null-quotient (Proposition 4.1) and detection-resolution (Formalization 2) converge. The opacity would hold from either alone; both together give a robust statement.

**C3. Quantum discreteness is structural.** The framework's commitment that observables are quantized — discrete eigenvalues for compact symmetries, integer readouts for continuous ones — now has a structural derivation from mutual opacity plus the enumerated integer-channel list.

**C4. Measurement is an inter-observer integer readout.** The "Heisenberg cut" is the same structural object as the mutual-opacity edge between apparatus and measured system. Born-rule probabilities govern the integer readouts; the measured system's continuous interior remains inaccessible.

**C5. Cross-level opacity integrates with same-level.** Corollary 7.1 and this derivation's theorem combine into a complete picture: same-level pairs are mutually opaque beyond their edges; cross-level pairs have integer-only upward propagation.

**C6. Inter-observer information is finite-dimensional.** The integer channel inventory (Proposition 4.1) is finite-rank. All inter-observer information lives on a finite-dimensional integer lattice. This matches the phenomenological fact that particles have finitely many quantum numbers.

**C7. Continuous content exists internally — but only integer projections escape.** Observers have rich continuous interiors (Cauchy-slice configurations, Thesis A' of Observer Holographic Equivalence); these are not zero — they govern the observer's own intrinsic dynamics. But they are not communicable across the observer's horizon. Continuous phase dynamics is a per-level feature; integer data is the cross-level currency.

## Rigor Assessment

**Rigorous (inherit from existing framework theorems):**

- Proposition 2.2 (null-horizon integer-quotient mechanism): direct application of [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Proposition 4.1, which is rigorously proved.
- Corollary 2.3 (symmetric inaccessibility from horizon mechanism): direct corollary of Proposition 2.2 applied to $B$ examining $A$'s horizon record.
- Proposition 4.1 (integer channel inventory): each channel is drawn from an existing rigorous or semi-formal derivation; the inventory is a consolidation, not a novel claim.
- Proposition 5.1 (cross-level opacity): direct reference to [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 7.1.
- Remark 7.1 (dual relationship to Corollary 4.5): structural observation.

**Semi-formal (inherit from Formalization 2):**

- Proposition 3.1 (detection-threshold filtering): inherits from [Formalization 2](/derivations/foundation/02-operational-edge) Proposition 1.1, which is semi-formal via Cramér-Rao applied to Fisher information on observer state space.
- Proposition 3.2 (integer content is signal-dominant): structural argument that continuous interior phase does not source exterior-propagating carriers; relies on the horizon-integer-quotient mechanism being primary.

**Novel content (this derivation):**

- The explicit symmetric statement of the theorem (Theorem at top of Statement).
- The integration of horizon-integer and detection-threshold mechanisms (Corollary 3.3).
- The integer-channel inventory (Proposition 4.1).
- The connection to quantum-mechanical measurement structure (Step 6).

**Deferred/semi-formal:**

- The measurement/Heisenberg-cut interpretation (Step 6) is qualitative; a rigorous embedding of standard QM measurement theory into the framework's integer-channel structure is an open program.
- Continuous content inside observers is mentioned but not quantitatively characterized — this is the content of [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Thesis A' (space-like), which is itself semi-formal.

**Assessment:** The theorem's core (mutual opacity from horizon null-quotient) is rigorous given the rigor of [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Proposition 4.1, which is fully proved. The detection-threshold layer adds a second mechanism that reinforces the conclusion but is semi-formal (inherits from Formalization 2). The theorem's main novelty is the explicit symmetric statement and the integration of the two mechanisms into a unified picture; neither requires new axioms or structural postulates.

## Open Gaps

1. **Intermediate-distance (inside-edge) regime.** For $r < r_{\mathrm{edge}}$, mutual opacity does not hold — observers inside each other's edge can have partial continuous-content access. Characterizing this regime (which is where coherent multi-observer phenomena live: entanglement, superposition, interference) requires a more nuanced opacity statement. Likely tools: [Entanglement](/derivations/quantum/entanglement) + [ER=EPR](/derivations/holography/er-epr). *Difficulty: MODERATE.*

2. **Multi-observer networks.** The theorem is stated for pairs. For populations of 3+ observers, opacity is not simply pairwise — there can be collective effects (coherent superpositions, collective modes) that persist even when all pairs are mutually opaque. Formalize. *Difficulty: MODERATE.*

3. **Rigorous QM-measurement-theory embedding.** Step 6's remarks identify measurement as an integer-channel readout between observer levels. A rigorous construction — specifying the apparatus's integer-channel structure, showing that Born-rule probabilities arise, and matching standard projective measurements — would complete the picture. Connects to [Born Rule](/derivations/quantum/born-rule) and the Heisenberg-cut discussions in Copenhagen QM. *Difficulty: MODERATE-HARD.*

4. **Finite-rank inter-observer information.** The integer channel inventory (Proposition 4.1) is enumerated from existing framework derivations. A rigorous proof that it is exhaustive — that no other integer channels exist — requires classifying all topological / integer-valued inter-observer invariants. Likely tools: classification of null-surface topological invariants, K-theory of observer horizons. *Difficulty: HARD.*

5. **Asymmetric-mass opacity sharpness.** For $m_A \neq m_B$, the Formalization 2 edge differs in each direction. This derivation asserts mutual opacity at super-edge distances in both directions but does not sharply characterize the intermediate regime where $B$ can detect $A$ but $A$ cannot detect $B$ (or vice versa). The asymmetric one-way-visibility regime may have interesting observable consequences. *Difficulty: MODERATE.*

6. **Relation to decoherence in standard QM.** Standard decoherence theory (Zurek and collaborators) derives classicality from environmental interaction. The framework's mutual opacity derives discreteness from horizon null-geometry plus detection resolution — a different mechanism landing on the same conclusion. A systematic comparison would clarify the relationship between the two approaches. *Difficulty: MODERATE.*

## References and further reading

**Framework inputs.**

- [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) — Proposition 4.1 (null-generator phase discard); Corollary 4.5 (exterior cancellation, one-way); Corollary 4.6 (operational completeness); Corollary 7.1 (cross-level integer restriction); Thesis A' (space-like interior description).
- [Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) — Proposition 3.1 (permanence of null horizon); Definition 2.0 (relational carriers as Type III exchanges).
- [Pattern Signal Amplitude as a Function of Distance](/derivations/foundation/01-pattern-signal-amplitude) — pattern signal Yukawa form.
- [Observer Edge as Signal-Resolution Crossover](/derivations/foundation/02-operational-edge) — detection-threshold noise floor; bidirectional edge symmetry.
- [Observer as an Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code) — three integer-stable axes (spatial, algebraic, temporal).
- [Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap) — Propositions 1.3, 1.5, 2.4 (winding, linking, framing, Chern-Simons levels).
- [Causal Set Statistics](/derivations/holography/causal-set-statistics) — Poisson crossing counts.
- [Born Rule](/derivations/quantum/born-rule) — probability structure.

**Research-program context.** This is step 3 of the pattern-edges-and-mutual-opacity research program (`research-targets/pattern-edges-and-mutual-opacity.md`). The derivation integrates [Formalization 1](/derivations/foundation/01-pattern-signal-amplitude) (signal), [Formalization 2](/derivations/foundation/02-operational-edge) (edge), and [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 4.5 (one-way cancellation) into the symmetric mutual-opacity theorem.
