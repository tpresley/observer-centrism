---
title: "Time as Phase Ordering"
status: "provisional"
dependsOn: ["minimal-observer/structure", "interactions/three-types"]
enablesDerivation: ["thermodynamics/entropy", "thermodynamics/action-planck", "quantum/born-rule"]
tags: ["dynamics"]
summary: "Time is the partial ordering on the interaction graph induced by directed phase transfer — a DAG structure derived from positive coherence cost, not a background parameter"
rigorLevel: "formal"
sourceSection: "05-time-entropy-action"
lastUpdated: 2026-03-08
---

## Statement

**Theorem.** Time is not a background parameter. It is the **partial order** on interaction events induced by directed phase transfer across the observer network. The arrow of time is the direction of relational invariant accumulation — a structural consequence of coherence conservation, not a statistical tendency.

## Derivation

### Step 1: The Interaction Graph

**Definition 1.1.** The **interaction graph** $\mathcal{G} = (V, E)$ is defined by:
- **Vertices** $V$: each $v \in V$ represents an interaction event — a point where two or more observers undergo a Type I, II, or III interaction (from [Three Interaction Types](/derivations/interactions/three-types))
- **Edges** $E \subset V \times V$: directed edges connect events related by phase transfer. If event $A$ transfers phase to event $B$ (through an observer's internal loop connecting them), there is a directed edge $A \to B$

**Definition 1.2.** Each minimal observer $\mathcal{O}_k$ contributes a **worldline** to $\mathcal{G}$: a sequence of vertices $v_1^k, v_2^k, v_3^k, \ldots$ ordered by the observer's internal phase. Between consecutive interaction events, $\mathcal{O}_k$ completes one or more cycles of its $U(1)$ loop (from [Minimal Observer Structure](/derivations/minimal-observer/structure)). The phase advances monotonically along this sequence.

### Step 2: Phase Transfer Is Directed

**Proposition 2.1.** *Phase transfer in the interaction graph is directed: for each edge $A \to B$, the direction is determined by the internal phase advance of the mediating observer.*

*Proof.* Consider an observer $\mathcal{O}_k$ participating in event $A$ at phase $\theta_A$ and later in event $B$ at phase $\theta_B$. By loop closure (Axiom 3), the phase advances monotonically:

$$\theta_B = \theta_A + \omega_k \cdot \Delta\tau > \theta_A$$

where $\Delta\tau > 0$ is the proper "time" between events (measured in cycles of $\mathcal{O}_k$'s loop) and $\omega_k > 0$ is the angular frequency.

The phase cannot run backward ($\theta_B < \theta_A$) because this would require negative coherence cost — extracting coherence from the loop rather than expending it — which violates the positivity of the coherence measure (C1 of [Coherence Conservation](/derivations/axioms/coherence-conservation)). Specifically: each cycle of the loop has coherence cost $S_k = \mathcal{C}(\Sigma_k) \cdot T_k > 0$ (from [Loop Closure](/derivations/axioms/loop-closure), Proposition 6.2). Running backward would require $S_k < 0$, contradicting (C1). $\square$

### Step 3: Acyclicity

**Theorem 3.1.** *The interaction graph $\mathcal{G}$ is a directed acyclic graph (DAG).*

*Proof.* Suppose for contradiction that $\mathcal{G}$ contains a directed cycle: $v_1 \to v_2 \to \cdots \to v_n \to v_1$.

Along each edge $v_i \to v_{i+1}$, some observer $\mathcal{O}_{k_i}$ mediates the connection, advancing its phase by $\Delta\theta_i > 0$ (Proposition 2.1). Following the cycle back to $v_1$:

$$\sum_{i=1}^n \Delta\theta_i > 0$$

But this means the total phase advance around the cycle is strictly positive. If $v_1 = v_n$ (same event), the phase at $v_1$ would need to be simultaneously $\theta$ and $\theta + \sum \Delta\theta_i > \theta$ — a contradiction.

Alternatively: a directed cycle would mean information can be sent from $v_1$ back to $v_1$, creating a causal loop. Each leg of this loop costs positive coherence (Proposition 2.1). But the loop returns to the same event, meaning the same coherence has been "spent" along the cycle without being replenished — violating conservation (the total at the starting event is both $C$ and $C - \sum S_i < C$). $\square$

### Step 4: The Partial Order

**Definition 4.1.** Define the relation $\preceq$ on $V$:

$$A \preceq B \iff A = B \text{ or there exists a directed path from } A \text{ to } B \text{ in } \mathcal{G}$$

**Theorem 4.2.** *$(V, \preceq)$ is a partial order.*

*Proof.* We verify the three axioms:

**Reflexivity:** $A \preceq A$ by definition (the $A = B$ case). $\checkmark$

**Antisymmetry:** Suppose $A \preceq B$ and $B \preceq A$ with $A \neq B$. Then there exist directed paths $A \to \cdots \to B$ and $B \to \cdots \to A$. Concatenating gives a directed cycle, contradicting Theorem 3.1. Therefore $A = B$. $\checkmark$

**Transitivity:** If $A \preceq B$ and $B \preceq C$, then (if $A = B$, then $A \preceq C$; if $B = C$, then $A \preceq C$; otherwise) concatenate the directed paths $A \to \cdots \to B$ and $B \to \cdots \to C$ to get $A \to \cdots \to C$, so $A \preceq C$. $\checkmark$ $\square$

### Step 5: The Partial Order Is Time

**Theorem 5.1.** *The partial order $(V, \preceq)$ has exactly the operational properties of physical time:*

| Operational property | Formal statement |
|---|---|
| "$A$ happened before $B$" | $A \prec B$ (strict: $A \preceq B$ and $A \neq B$) |
| "$A$ and $B$ are simultaneous" | $A \not\preceq B$ and $B \not\preceq A$ (incomparable) |
| Time flows forward | Edges are directed (positive coherence cost) |
| Time is universal | $\preceq$ defined on all of $V$ |
| Time is observer-dependent | Different observers traverse different paths through $\mathcal{G}$ |
| Causality | $A$ can influence $B$ only if $A \preceq B$ |

*Proof.* Each row is verified:

- "Before/after": Corresponds to causal ancestry — $A$ before $B$ means $A$'s information (phase, relational invariants) can reach $B$ via directed paths. This is the operational definition of temporal order.
- "Simultaneity": Two events are simultaneous (for a given observer) if neither causally precedes the other. This is spacelike separation in the graph.
- "Forward flow": Follows from Proposition 2.1 (directed edges from positive coherence cost).
- "Universality": $\preceq$ is defined on all $V$ because every event is in $\mathcal{G}$.
- "Observer dependence": Different observers have different worldlines through $\mathcal{G}$, giving different orderings of events they participate in. This is the discrete analogue of time dilation.
- "Causality": Information propagates along directed edges only; $A$ can influence $B$ only if there is a directed path $A \to \cdots \to B$. $\square$

### Step 6: The Arrow of Time

**Theorem 6.1 (Arrow of time).** *Along any directed path in $\mathcal{G}$, the number of relational invariants accessible at each vertex is monotonically non-decreasing.*

*Proof.* Define the **relational invariant depth** at vertex $v$:

$$d(v) = |\{I_{jk} : I_{jk} \text{ is a relational invariant generated at or before } v\}|$$

If $A \prec B$, then every relational invariant generated at or before $A$ is also generated at or before $B$ (it was generated in $A$'s past, which is a subset of $B$'s past). Additionally, further relational invariants may have been generated between $A$ and $B$ (via Type III interactions along the path). Therefore:

$$A \prec B \implies d(A) \leq d(B)$$

The inequality is strict whenever at least one Type III interaction occurs on the path from $A$ to $B$. $\square$

**Corollary 6.2 (Structural arrow).** *The arrow of time points in the direction of increasing relational invariant depth. This is not a statistical tendency (as in the Boltzmann account) but a structural consequence of:*
1. *Type III interactions generate relational invariants (Definition 4.4 of [Three Types](/derivations/interactions/three-types))*
2. *Relational invariants are permanent (Proposition 6.1 of [Relational Invariants](/derivations/interactions/relational-invariants))*
3. *Therefore $d(v)$ can only increase along directed paths*

### Step 7: Connection to Continuum Spacetime

**Proposition 7.1.** *At scales much larger than the Planck scale ($\gg \ell_P$), the partial order $(V, \preceq)$ approximates the causal structure of a Lorentzian manifold.*

*Proof sketch.* This is the **Hauptvermutung of causal set theory** (Bombelli, Lee, Meyer, Sorkin 1987): a locally finite partial order with a faithful embedding into a Lorentzian manifold $(M, g)$ determines the conformal geometry of $(M, g)$ up to a volume factor. The volume factor is supplied by counting: the number of vertices in a region is proportional to its spacetime volume (at the Planck density $\rho \sim 1/\ell_P^4$).

The framework arrives at the same mathematical structure (causal set) that causal set theory postulates as primitive. The difference: the partial order is derived from the axioms via the interaction graph, not postulated. $\square$

### Step 8: No Observers, No Time

**Proposition 8.1.** *A universe with no observers has no interaction graph and therefore no partial order. Time does not exist in the absence of observers — not merely because no one measures it, but because the ordering structure is constituted by the observer network.*

*Proof.* If $V = \emptyset$, the partial order is empty. There is no "before" or "after" because there are no events to order. $\square$

## Comparison with Standard Physics

| Aspect | Standard physics | Observer-centrism |
|---|---|---|
| Time | Background parameter (Newtonian) or metric component (GR) | Partial order on interaction graph |
| Arrow of time | Statistical (entropy increase) or cosmological (initial conditions) | Structural (relational invariant accumulation) |
| Causal structure | From metric signature in GR | From directed edges in $\mathcal{G}$ |
| Time dilation | From Lorentz transformation | Different worldlines through $\mathcal{G}$ |
| Causal set theory | Postulated | Derived from axioms |

## Rigor Assessment

**Fully rigorous:**
- Definition 1.1: Interaction graph is precisely defined
- Proposition 2.1: Directed phase transfer from positive coherence cost (follows from Axioms 1 + 3)
- Theorem 3.1: Acyclicity (follows from Proposition 2.1 by contradiction)
- Theorem 4.2: Partial order (standard verification of three axioms)
- Theorem 6.1: Monotonicity of relational invariant depth (follows from permanence of relational invariants)

**Provisional:**
- Proposition 7.1: Connection to Lorentzian manifold uses the Hauptvermutung of causal set theory, which is a conjecture (supported by extensive evidence, not fully proved). The discrete-to-continuum transition is the main open mathematical problem.
- The "positive coherence cost" used in Proposition 2.1 is motivated by (C1) positivity and loop closure, but the precise argument depends on [Action and Planck's Constant](/derivations/thermodynamics/action-planck) (at draft level). Without this, the directionality of phase transfer is assumed rather than derived.
- Proposition 8.1 (no observers, no time) is a philosophical consequence of the formalism. It is logically valid within the framework but not independently testable.

**Assessment:** The derivation of time as a partial order is mathematically rigorous. The arrow of time follows structurally from the axioms. The main provisional elements are the positive coherence cost argument and the continuum limit.

## Open Gaps

1. **Metric from order**: Recovering the spacetime metric from the partial order requires a volume measure (event counting). This is the central open problem of causal set theory.
2. **Quantum time**: The derivation gives a single partial order. Quantum mechanics suggests superpositions of causal orders may be physical (indefinite causal structure). The framework should address this.
3. **Cosmological arrow**: The structural arrow (increasing $d(v)$) is local. The global cosmological arrow (expansion) may require boundary conditions on the fixed-point solution.
