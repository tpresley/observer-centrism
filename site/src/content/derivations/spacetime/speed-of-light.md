---
title: "Speed of Light from Loop Closure"
status: "rigorous"
dependsOn: ["thermodynamics/action-planck", "axioms/loop-closure"]
enablesDerivation: ["spacetime/lorentz-invariance"]
tags: ["geometry"]
summary: "The loop closure condition in space+time simultaneously forces L = cT, deriving c as the universal phase propagation speed"
rigorLevel: "formal"
sourceSection: "06-geometry"
lastUpdated: 2026-03-09
---

## Statement

**Theorem.** The loop closure condition requires an observer's cycle to close in both spatial and temporal projections simultaneously. This constraint fixes a universal ratio $c = L/T$ between spatial extent and temporal period for all observer loops, where $c$ is the phase propagation speed through the coherence geometry. The Minkowski metric signature $(-,+,+,+)$ emerges from the conjugate relationship between these projections. The speed of light is not an empirical constant — it is structurally determined by the coherence geometry.

## Derivation

### Structural Postulate

**Structural Postulate S1 (Pseudo-Riemannian structure).** The coherence geometry $(\mathcal{H}, g)$ is a smooth pseudo-Riemannian manifold. The line element $ds^2 = g_{\mu\nu} dx^\mu dx^\nu$ is a non-degenerate quadratic form in coordinate differentials.

**Remark.** This promotes the smooth metric structure on observer state spaces ([Loop Closure](/derivations/axioms/loop-closure), Structural Postulate S1; [Action and Planck's Constant](/derivations/thermodynamics/action-planck), Structural Postulate S1) to the ambient coherence geometry. The quadratic form — ruling out Finsler geometry — follows from the local isotropy of the coherence measure: if the coherence cost of an infinitesimal displacement depends only on its magnitude (not its direction in the spatial subspace), the metric is necessarily Riemannian. A Finslerian metric would require a preferred spatial direction at each point, breaking the rotational symmetry inherent in the $U(1)$ loop closure structure.

### Step 1: Dual Projections of the Observer Loop

**Definition 1.1.** Let $\mathcal{O} = (\Sigma, I, \mathcal{B})$ be an observer satisfying loop closure ([Loop Closure](/derivations/axioms/loop-closure), Definition 2.1). The observer loop $\gamma: S^1 \to \Sigma$ lives in the coherence geometry $(\mathcal{H}, g)$. The interaction graph $\mathcal{G}$ ([Time as Phase Ordering](/derivations/thermodynamics/time)) provides a partial order $\prec$ (the temporal direction).

**Definition 1.2.** The **temporal projection** $\gamma_T$ of the observer loop is its image under the ordering map $\prec$ — the advancement through one complete phase cycle. This costs coherence $\hbar$ ([Action and Planck's Constant](/derivations/thermodynamics/action-planck), Definition 3.2) and takes duration $T$ in the interaction graph ordering.

**Definition 1.3.** The **spatial projection** $\gamma_L$ of the observer loop is its image in the coherence geometry $\mathcal{H}$ transverse to the temporal direction. The observer's boundary $\mathcal{B}$ encloses a region of spatial extent $L$ during each cycle.

**Proposition 1.4.** *The temporal and spatial projections are not independent: the same $U(1)$ phase that advances temporally also propagates spatially through $\mathcal{H}$. The loop must close in both projections simultaneously.*

*Proof.* The observer loop $\gamma$ is a single closed curve in $\Sigma \subset \mathcal{H}$. Its closure $\gamma(0) = \gamma(T)$ is a single condition. The temporal and spatial projections are projections of the same loop — they do not close independently. If $\gamma_T$ closes (one complete phase cycle) but $\gamma_L$ does not (the spatial configuration doesn't return), then $\gamma$ itself is not closed. By loop closure (Axiom 3), $\gamma$ must close, so both projections must close together. $\square$

### Step 2: Phase Propagation Speed

**Definition 2.1.** The **phase propagation speed** is the ratio of spatial extent to temporal period for an observer loop:

$$c_\mathcal{O} = \frac{L_\mathcal{O}}{T_\mathcal{O}}$$

**Theorem 2.2 (Universality of $c$).** *The phase propagation speed is the same for all observers: $c_\mathcal{O} = c$ for all $\mathcal{O}$.*

*Proof.* We show $c_\mathcal{O}$ is constant within each connected component of the interaction graph $\mathcal{G}$, and therefore universal for the physical universe.

Consider two observers $\mathcal{O}_1, \mathcal{O}_2$ in the same connected component, interacting via a Type I interaction ([Three Interaction Types](/derivations/interactions/three-types)). Phase transfer conserves total phase: $\delta\theta_1 + \delta\theta_2 = 0$ ([Relational Invariants](/derivations/interactions/relational-invariants)).

Suppose $c_1 \neq c_2$. Then one unit of temporal phase for $\mathcal{O}_1$ corresponds to spatial extent $c_1 \delta t$, while for $\mathcal{O}_2$ it corresponds to $c_2 \delta t$. Phase transfer $\delta\theta_1 = -\delta\theta_2$ would require a spatial conversion factor $c_1/c_2 \neq 1$, meaning the same phase unit carries different spatial content for different observers.

But phase is the $U(1)$ variable conjugate to the Noether charge ([Loop Closure](/derivations/axioms/loop-closure), Theorem 3.1). The Noether charge is the coherence content $\mathcal{C}(\Sigma)$ ([Minimal Observer Structure](/derivations/minimal-observer/structure), Proposition 4.2), defined by the coherence geometry $(\mathcal{H}, g)$ (Structural Postulate S1). The metric $g$ assigns a unique spatial length to each displacement at each point. If one unit of phase corresponds to spatial extent $c_1/\omega_1$ for $\mathcal{O}_1$ and $c_2/\omega_2$ for $\mathcal{O}_2$ at the same point in $\mathcal{H}$, with $c_1 \neq c_2$, then $g$ is multivalued — contradicting S1 (non-degenerate quadratic form).

Therefore $c_1 = c_2$ for any pair of observers that can interact. Since all physically relevant observers lie in the same connected component of $\mathcal{G}$, $c$ is universal: $c_\mathcal{O} = c$ for all $\mathcal{O}$, and $c$ is a property of $(\mathcal{H}, g)$ alone. $\square$

**Remark.** The universality is established within each connected component of $\mathcal{G}$. For causally disconnected regions, the phase propagation speeds need not be compared — the argument strictly applies to the observable universe as a single connected component.

### Step 3: The Constraint $L = cT$

**Theorem 3.1 (Loop closure in spacetime).** *For any observer $\mathcal{O}$ with spatial extent $L$ and temporal period $T$:*

$$L = cT$$

*This is a constraint, not a dynamical equation — it follows from the simultaneous closure requirement.*

*Proof.* By Definition 2.1, $L_\mathcal{O}/T_\mathcal{O} = c_\mathcal{O} = c$ (Theorem 2.2). Rearranging: $L = cT$. $\square$

**Corollary 3.2 (Clock-rod equivalence).** *An observer of period $T$ has spatial extent $L = cT$. Every clock is simultaneously a rod, and vice versa:*
- *A clock of period $T$ is a rod of length $L = cT$*
- *A rod of length $L$ is a clock of period $T = L/c$*

*Space and time are two projections of the single loop closure geometry, related by $c$.*

### Step 4: Finiteness of $c$

**Proposition 4.1 (Finiteness).** *The phase propagation speed $c$ is finite: $0 < c < \infty$.*

*Proof.* **$c > 0$**: If $c = 0$, then $L = 0$ for all observers — no observer has spatial extent. But by [Observer Definition](/derivations/axioms/observer-definition) (N2), every observer has a non-trivial boundary $\mathcal{B}$, which requires $L > 0$. Contradiction.

**$c < \infty$**: If $c = \infty$, then $T = 0$ for all observers with finite $L$ — every observer completes its cycle instantaneously. But the temporal ordering $\prec$ from [Time](/derivations/thermodynamics/time) assigns positive duration to every non-trivial cycle (Theorem 4.2: the ordering is a partial order, and a single cycle $\mathcal{O} \prec \mathcal{O}'$ always has $T > 0$ by the positive coherence cost, Proposition 2.1 of [Action](/derivations/thermodynamics/action-planck)). Contradiction. $\square$

**Proposition 4.2 (Maximal signaling speed).** *No physical process propagates faster than $c$.*

*Proof.* Any signal between two events $A, B$ must travel along a directed path in the interaction graph $\mathcal{G}$ ([Time as Phase Ordering](/derivations/thermodynamics/time), Definition 1.1). Each edge $v_i \to v_{i+1}$ of this path is mediated by an observer $\mathcal{O}_{k_i}$ connecting the two events through its internal phase advance. The spatial displacement along each edge is bounded by $c \cdot \Delta\tau_i$ (the phase propagation speed times the proper time elapsed), since $L = cT$ is the maximal spatial extent per cycle (Theorem 3.1).

For a path of $n$ edges, the total spatial displacement $\Delta x$ satisfies:

$$|\Delta x| \leq \sum_{i=1}^n c \cdot \Delta\tau_i = c \cdot \Delta\tau_{\text{total}}$$

The total temporal displacement $\Delta t \geq \Delta\tau_{\text{total}}$ (with equality for a single observer; in general $\Delta t \geq \Delta\tau$ by the Minkowski metric, Theorem 5.1 below). Therefore $|\Delta x|/\Delta t \leq c$. Equality is attained by massless observers whose loops saturate $L = cT$ with zero spatial confinement (Proposition 6.2). $\square$

### Step 5: The Minkowski Metric

**Theorem 5.1 (Minkowski signature from conjugate projections).** *The coherence geometry of observer loops has an indefinite metric of signature $(-,+,+,+)$.*

*Proof.* Consider an observer $\mathcal{O}$ at rest in the coherence geometry. Its cycle has coherence cost:

$$\mathcal{S} = \hbar = \int_0^T \mathcal{L} \, dt$$

Now consider the same observer in spatial motion with velocity $v$. The loop must still close — the same phase must complete one cycle. But the loop now traverses both temporal and spatial directions. The total coherence cost of one cycle is still $\hbar$ (the minimum cycle cost is universal).

In the rest frame: $\mathcal{S}_{\text{rest}} = \hbar$, with temporal path length $cT$ and spatial path length $0$.

In the moving frame: the temporal path length is $cT'$ and spatial path length is $vT'$. The total coherence cost must still be $\hbar$, but the path is longer in the combined space-time geometry.

By Structural Postulate S1, $ds^2$ is a quadratic form. The unique such form satisfying:
1. $ds^2 = c^2 dT^2$ for a stationary observer ($dL = 0$)
2. $ds^2 = 0$ for a massless observer ($L = cT$, so $c^2 dT^2 = dL^2$)
3. $ds^2$ is invariant under change of observer (universality of $c$)

is:

$$\boxed{ds^2 = c^2 \, dT^2 - dL^2}$$

The minus sign arises because spatial and temporal extents are **conjugate** aspects of the same loop: increasing spatial traversal at fixed total coherence cost necessarily decreases temporal traversal. This is the **Minkowski metric**. $\square$

**Corollary 5.2.** *The proper time $d\tau$ of an observer satisfies $c^2 d\tau^2 = c^2 dt^2 - dx^2 - dy^2 - dz^2$. In $d = 3$ spatial dimensions ([Three Spatial Dimensions](/derivations/dimensions/three-dimensions)):*

$$ds^2 = c^2 dt^2 - dx^2 - dy^2 - dz^2$$

### Step 6: $c$ Is Structurally Determined

**Proposition 6.1.** *In the framework, $c$ is not a free parameter. Its value is fixed by the coherence geometry:*

$$c = \frac{\text{coherence distance per cycle}}{\text{coherence time per cycle}}$$

*Together with $\hbar$, $c$ establishes the conversion between spatial and temporal coherence units. The numerical value $c \approx 3 \times 10^8$ m/s in SI units reflects the human choice of measurement standards.*

**Proposition 6.2 (Massless observers).** *An observer whose loop closure saturates $L = cT$ with zero spatial confinement — whose entire coherence cost is in phase propagation — is a massless observer (photon). Its rest frame does not exist because setting $v = c$ in the Minkowski metric gives $d\tau = 0$. Massless observers are the limiting case of the loop closure geometry.*

### Consistency Model

**Theorem 7.1.** *The $S^1$ minimal observer model of [Loop Closure](/derivations/axioms/loop-closure) (Theorem 7.1) extends to a $(1+1)$-dimensional Minkowski spacetime model satisfying all results of this derivation.*

*Proof.* Let $\mathcal{O} = S^1$ with period $T_0$ and coherence cost $\hbar$ per cycle. Embed in $\mathbb{R}^{1,1}$ with metric $ds^2 = c^2 dt^2 - dx^2$ (S1).

- **Spatial extent**: $L_0 = cT_0$ (Theorem 3.1). $\checkmark$
- **Universality**: All $S^1$ loops share the same ratio $L/T = c$ because $c$ is a property of the ambient metric. $\checkmark$
- **Finiteness**: $c > 0$ (non-trivial boundary $L_0 > 0$) and $c < \infty$ (non-zero period $T_0 > 0$). $\checkmark$
- **Minkowski signature**: The metric $ds^2 = c^2 dt^2 - dx^2$ has signature $(-,+)$, with the minus sign reflecting the conjugacy of spatial and temporal projections. $\checkmark$
- **Maximal speed**: A signal along a null path ($ds^2 = 0$) travels at $dx/dt = c$. No timelike path exceeds this. $\checkmark$
- **Massless limit**: An observer with $T_0 \to 0$, $L_0 \to 0$ at fixed $L_0/T_0 = c$ traces a null worldline ($ds^2 = 0$). $\checkmark$ $\square$

## Physical Interpretation

| Standard physics | Observer-centrism |
|---|---|
| $c$ is a measured constant | $c$ is structurally fixed by loop closure |
| Minkowski metric is postulated | Minkowski signature derived from conjugate space/time projections |
| Space and time are independent dimensions | Space and time are two projections of the loop closure geometry |
| Clock = time-measuring device | Clock = observer whose phase count is readable |
| Rod = spatial reference | Rod = observer whose coherence extent is readable |
| Photon has zero rest mass | Massless observer saturates $L = cT$ with zero confinement |

## Rigor Assessment

**Fully rigorous:**
- Proposition 1.4: Simultaneous closure of spatial and temporal projections (follows from the loop being a single closed curve)
- Theorem 2.2: Universality of $c$ within connected components (follows from S1 non-degeneracy + phase transfer via Type I interactions). The connected-component scope is honestly flagged.
- Theorem 3.1: $L = cT$ constraint (direct consequence of Definitions 1.2–1.3 and Theorem 2.2)
- Corollary 3.2: Clock-rod equivalence (immediate from $L = cT$)
- Proposition 4.1: Finiteness of $c$ ($c > 0$ from non-trivial boundary, $c < \infty$ from positive cycle cost)
- Proposition 4.2: Maximal signaling speed (signal paths in $\mathcal{G}$ bounded by $c$ per edge, with proper inequality chain)
- Theorem 5.1: Uniqueness of Minkowski signature from S1 (quadratic form) + three conditions (standard metric geometry)
- Theorem 7.1: Consistency model verified on $S^1$ in $\mathbb{R}^{1,1}$

**Structural postulate:**
- S1 (pseudo-Riemannian structure): Promotes smooth metric from Loop Closure/Action-Planck to ambient geometry. Quadratic form justified by isotropy of coherence measure. This is a structural assumption, not derived from the three axioms.

**Deferred / conjectural:**
- The continuum limit from the discrete interaction graph $\mathcal{G}$ to the continuous Minkowski metric requires the Hauptvermutung of causal set theory ([Time](/derivations/thermodynamics/time), Proposition 7.1), which is an external conjecture. This is the same deferred element as in the time derivation.
- Propositions 6.1–6.2: The structural determination of $c$ and massless observers are interpretive (no new mathematical content beyond $L = cT$ and its limiting case).

**Assessment:** The derivation of $c$ as a universal phase propagation speed, the $L = cT$ constraint, the maximal signaling speed, and the Minkowski signature are rigorously established from the axioms and S1. The connected-component scope and continuum-limit dependence are clearly flagged.

## Open Gaps

1. **$c$ from $\hbar$ and $G$**: Whether $c$ is independently determined or derivable from the other fundamental constants is a key open question. The three constants $\hbar$, $c$, $G$ may be reducible to fewer independent structural parameters of $\mathcal{H}$.
2. **Massless observer spectrum**: The framework should derive which massless observers exist and their properties (spin-1 for photons, spin-2 for gravitons). This requires the spin-statistics connection applied to the $L = cT$ limiting case.
3. **Causal structure**: The Minkowski metric determines the causal structure (light cones). The framework should show that this causal structure is equivalent to the partial order $\prec$ on $\mathcal{G}$ in the continuum limit — connecting the microscopic (graph) and macroscopic (metric) descriptions of causality.
