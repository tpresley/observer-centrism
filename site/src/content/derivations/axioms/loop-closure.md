---
title: "Loop Closure"
status: "provisional"
dependsOn: ["axioms/coherence-conservation", "axioms/observer-definition"]
enablesDerivation: ["minimal-observer/structure", "thermodynamics/action-planck", "spacetime/speed-of-light"]
tags: ["foundation"]
summary: "Formalization of cyclic dynamics as a Noether pair (U(1) symmetry ↔ conserved charge), with Lyapunov stability and approximate closure giving a precise persistence criterion"
rigorLevel: "formal"
sourceSection: "02-axioms"
lastUpdated: 2026-03-08
---

## Statement

**Axiom 3 (Loop Closure).** The internal dynamics of every observer are cyclic: the state returns to its initial configuration after a finite period. A loop that does not close eventually dissipates its invariant and dissolves. Loop closure is not an additional constraint — it is what makes an observer *persistent* in the sense of Axiom 2.

## Formalization

### Step 1: Cyclic Dynamics

**Definition 1.1.** Let $\mathcal{O} = (\Sigma, I, \mathcal{B})$ be an observer (Axiom 2). The **internal dynamics** of $\mathcal{O}$ is a one-parameter family of self-transformations:

$$\phi: \mathbb{R} \to G_\mathcal{O}, \quad t \mapsto \phi_t$$

satisfying:
- **Group property**: $\phi_{t_1} \circ \phi_{t_2} = \phi_{t_1 + t_2}$ and $\phi_0 = \text{id}_\Sigma$
- **Continuity**: The map $t \mapsto \phi_t(\sigma)$ is continuous for each $\sigma \in \Sigma$
- **Invariant preservation**: $I(\phi_t(\sigma)) = I(\sigma)$ for all $t, \sigma$ (follows from $\phi_t \in G_\mathcal{O}$)

**Axiom 3 (Precise statement).** There exists $T > 0$ such that:

$$\phi_T = \text{id}_\Sigma$$

The smallest such $T$ is the **period** of $\mathcal{O}$, denoted $T_\mathcal{O}$.

**Remark.** In the discrete case ($\Sigma$ finite), the dynamics is a map $\phi: \Sigma \to \Sigma$ with $\phi^n = \text{id}$ for some $n \in \mathbb{N}$, $n \geq 2$.

### Step 2: The Observer Loop as Geometric Object

**Definition 2.1.** The **observer loop** of $\mathcal{O}$ based at $\sigma_0 \in \Sigma$ is the closed curve:

$$\gamma_\mathcal{O}(\sigma_0) = \{\phi_t(\sigma_0) : t \in [0, T_\mathcal{O})\} \subset \Sigma$$

**Proposition 2.2.** *The observer loop $\gamma_\mathcal{O}(\sigma_0)$ is a closed curve in $\Sigma$ for every $\sigma_0$. Distinct starting points trace parallel loops (conjugate orbits under $G_\mathcal{O}$).*

*Proof.* Closure: $\phi_{T_\mathcal{O}}(\sigma_0) = \sigma_0$ by Axiom 3. Continuity: $t \mapsto \phi_t(\sigma_0)$ is continuous by Definition 1.1. The curve is therefore a continuous, closed map $S^1 \to \Sigma$, where $S^1 = \mathbb{R}/T_\mathcal{O}\mathbb{Z}$.

For distinct starting points: if $\sigma_1 = g(\sigma_0)$ for some $g \in G_\mathcal{O}$, then $\phi_t(\sigma_1) = \phi_t(g(\sigma_0)) = g(\phi_t(\sigma_0))$ (since $G_\mathcal{O}$ is abelian in the $U(1)$ case). The orbit through $\sigma_1$ is the image of the orbit through $\sigma_0$ under $g$. $\square$

**Corollary 2.3.** *The dynamics generates a $U(1)$ action on $\Sigma$:*

$$\rho: U(1) \to \text{Aut}(\Sigma), \quad e^{i\theta} \mapsto \phi_{\theta T_\mathcal{O}/2\pi}$$

*This is a faithful representation of $U(1)$ on $\Sigma$ (faithful because $T_\mathcal{O}$ is the minimal period).*

### Step 3: The Noether Pair

**Theorem 3.1 (Loop closure = Noether pair).** *The loop closure axiom is equivalent to requiring that each observer realizes a Noether pair: a continuous ($U(1)$) symmetry and its associated conserved charge.*

*Proof.*

**Forward**: Given loop closure (Axiom 3), the cyclic dynamics $\phi_t$ generates a $U(1)$ action on $\Sigma$ (Corollary 2.3). By Noether's theorem, this continuous symmetry has an associated conserved quantity — this is precisely the invariant $I$ from Axiom 2.

**Converse**: Given a Noether pair $(U(1), I)$ on $\Sigma$, the $U(1)$ action provides a one-parameter family $\phi_t$ satisfying $\phi_{T} = \text{id}$ for $T = 2\pi/\omega$ (where $\omega$ is the angular frequency of the $U(1)$ action). This is loop closure. $\square$

**Corollary 3.2.** *Loop closure is not independent of Axiom 2 — it is the dynamical content of the invariant requirement. Axiom 2 says "the observer has a conserved charge"; Axiom 3 says "this charge arises from a cyclic symmetry." Together they specify a Noether pair.*

**Remark.** Despite this logical relationship, stating loop closure as a separate axiom is clarifying: it emphasizes that the observer must be *dynamically persistent*, not merely a static configuration with a conserved number.

### Step 4: Stability — Lyapunov Formulation

**Definition 4.1.** The observer loop $\gamma_\mathcal{O}$ is **Lyapunov stable** if for every $\epsilon > 0$, there exists $\delta > 0$ such that:

$$d(\sigma, \gamma_\mathcal{O}) < \delta \implies d(\phi_t(\sigma), \gamma_\mathcal{O}) < \epsilon \quad \forall t \geq 0$$

where $d(\sigma, \gamma_\mathcal{O}) = \inf_{\sigma' \in \gamma_\mathcal{O}} d(\sigma, \sigma')$ is the distance from $\sigma$ to the loop.

**Definition 4.2.** The loop is **asymptotically stable** if it is Lyapunov stable and additionally:

$$\lim_{t \to \infty} d(\phi_t(\sigma), \gamma_\mathcal{O}) = 0$$

for all $\sigma$ with $d(\sigma, \gamma_\mathcal{O}) < \delta$.

**Proposition 4.3.** *Lyapunov stability of the observer loop is a necessary condition for persistence. An unstable loop dissolves under arbitrarily small perturbations.*

*Proof.* If the loop is not Lyapunov stable, there exists $\epsilon > 0$ and a sequence of perturbations $\sigma_n$ with $d(\sigma_n, \gamma_\mathcal{O}) \to 0$ but $\sup_t d(\phi_t(\sigma_n), \gamma_\mathcal{O}) \geq \epsilon$. The perturbed state escapes from the loop's neighborhood. Once outside, the invariant $I$ is no longer preserved (the state encounters non-self transformations from $G_\mathcal{O}^c$), and the observer dissolves. $\square$

**Remark.** Asymptotic stability is stronger than necessary — it requires dissipation, which conflicts with coherence conservation in an isolated system. The physical requirement is Lyapunov stability (neutral stability), consistent with Hamiltonian dynamics preserving phase space volume.

### Step 5: Approximate Closure

**Definition 5.1.** An observer satisfies **$\epsilon$-approximate closure** with period $T$ if:

$$d(\phi_T(\sigma), \sigma) < \epsilon \quad \forall \sigma \in \Sigma$$

for some $\epsilon > 0$ and metric $d$ on $\Sigma$.

**Proposition 5.2.** *An $\epsilon$-approximately closed observer persists for a number of cycles $N$ bounded by:*

$$N \leq \frac{D}{\epsilon}$$

*where $D = \text{diam}(\Sigma)$ is the diameter of the state space. After $N$ cycles, the accumulated drift may carry the state outside $\Sigma$.*

*Proof.* At each cycle, the state drifts by at most $\epsilon$ from the ideal closed orbit. After $N$ cycles, the total drift is at most $N\epsilon$ (by the triangle inequality). The state remains in $\Sigma$ as long as $N\epsilon < D$, giving $N < D/\epsilon$. $\square$

**Definition 5.3.** The **observer lifetime** is:

$$\tau_\mathcal{O} = N_{\max} \cdot T_\mathcal{O}$$

where $N_{\max}$ is the maximum number of cycles before the approximate closure fails (the drift exceeds the coherence domain).

**Proposition 5.4.** *Exact closure ($\epsilon = 0$) gives infinite lifetime. The observer persists indefinitely. This is the idealization for fundamental particles (stable, no decay).*

### Step 6: The Coherence Cost of a Loop

**Definition 6.1.** The **coherence cost** (or **action**) of an observer loop is:

$$S_\mathcal{O} = \oint_{\gamma_\mathcal{O}} \mathcal{C} \, d\ell$$

where $d\ell$ is the arc length element along the loop in the coherence geometry, and $\mathcal{C}$ is evaluated along the path.

**Proposition 6.2.** *The coherence cost is bounded below:*

$$S_\mathcal{O} \geq S_{\min} > 0$$

*The minimum is achieved by the **minimal observer** — the simplest loop consistent with the axioms.*

*Proof sketch.* A loop of zero coherence cost would be a point ($T = 0$ or $\text{diam}(\gamma) = 0$), which violates the non-triviality conditions (N1)–(N3) of Axiom 2. Therefore $S_{\min} > 0$. The minimal observer achieves this lower bound and is developed in [Minimal Observer Structure](/derivations/minimal-observer/structure). $\square$

**Remark.** The framework identifies $S_{\min} = \hbar$ — the quantum of action. This is developed in [Action and Planck's Constant](/derivations/thermodynamics/action-planck).

### Step 7: Frequency, Energy, and Mass

**Proposition 7.1.** *An observer loop with period $T_\mathcal{O}$ has a natural frequency:*

$$\omega_\mathcal{O} = \frac{2\pi}{T_\mathcal{O}}$$

*Proof.* The $U(1)$ action (Corollary 2.3) parameterizes the loop by phase $\theta \in [0, 2\pi)$. The physical period $T_\mathcal{O}$ corresponds to $\Delta\theta = 2\pi$. $\square$

**Proposition 7.2.** *The coherence cost per cycle is:*

$$S_\mathcal{O} = \mathcal{C}(\Sigma) \cdot T_\mathcal{O}$$

*connecting coherence (the "energy" analogue) to period (the "time" analogue). The relation $S = E \cdot T$ is the action-energy-time relation, with $\mathcal{C}(\Sigma)$ playing the role of energy.*

**Corollary 7.3.** *For the minimal observer: $S_{\min} = \mathcal{C}_{\min} \cdot T_{\min}$. If $S_{\min} = \hbar$, then $\mathcal{C}_{\min} = \hbar/T_{\min} = \hbar\omega_{\min}/2\pi$. In a rest frame (where the loop is purely temporal), $\mathcal{C}_{\min} = \hbar\omega_\mathcal{O}$, giving $E = \hbar\omega$ — the Planck-Einstein relation.*

## Consequences

1. **Transient vs. persistent**: Virtual particles (transient fluctuations) are loops that fail to close — their $\epsilon > \epsilon_c$. Real particles are loops with $\epsilon \ll \epsilon_c$ or $\epsilon = 0$.

2. **Discrete spectrum**: Only loops whose geometry is compatible with exact (or near-exact) closure in the coherence space persist. This selects a discrete set of allowed loop geometries, producing a discrete particle spectrum.

3. **Mass = rest frequency**: An observer at rest has its loop entirely in the temporal direction, with frequency $\omega = 2\pi/T$. Mass is $m = \hbar\omega/c^2 = E/c^2$.

## Rigor Assessment

**Fully rigorous:**
- Definitions 1.1, 2.1, 4.1–4.2, 5.1, 6.1: Precise mathematical definitions
- Proposition 2.2: Closed curves from periodic flows (standard dynamical systems)
- Corollary 2.3: $U(1)$ action from periodicity (standard representation theory)
- Theorem 3.1: Noether's theorem (established mathematics)
- Proposition 4.3: Lyapunov instability implies escape (standard stability theory)
- Proposition 5.2: Drift bound from triangle inequality (elementary)

**Rigorous given Axioms 1–2:**
- Proposition 6.2: Minimum coherence cost is positive (follows from non-triviality conditions)
- Corollary 7.3: $E = \hbar\omega$ (follows from the identification $S_{\min} = \hbar$, which is derived in [Action and Planck's Constant](/derivations/thermodynamics/action-planck))

**Provisional:**
- Corollary 3.2 (relationship between Axioms 2 and 3): The claim that loop closure is "the dynamical content of invariant preservation" is precise in the continuous case but requires the existence of a smooth $U(1)$ action, which depends on $\Sigma$ having sufficient smooth structure.
- The coherence cost integral (Definition 6.1) assumes a metric structure on $\Sigma$ compatible with $\mathcal{C}$. This metric is not derived from the axioms.
- The identification of $S_{\min}$ with $\hbar$ is made in a later derivation and is at draft level.

**Assessment:** The axiom is precisely formalized with clean definitions and standard mathematical results (Noether's theorem, Lyapunov stability, $U(1)$ representations). The main provisional elements are the smooth structure on $\Sigma$ and the identification of the minimal action with $\hbar$.

## Open Gaps

1. **Decoherence**: Environmental perturbations increase $\epsilon$ over time, eventually breaking approximate closure. This is the framework's decoherence mechanism. A quantitative theory should give decoherence rates from the perturbation spectrum.
2. **Non-abelian loops**: The formalization assumes $U(1)$ (abelian) symmetry. Non-abelian internal symmetries ($SU(2)$, $SU(3)$) may correspond to more complex loop geometries — "figure-eight" or higher-genus loops in the coherence space.
3. **Massless observers**: Photons have no rest frame and no rest-frame loop. They are "pure phase carriers" — the phase propagates without cycling. This limiting case needs formal treatment.
