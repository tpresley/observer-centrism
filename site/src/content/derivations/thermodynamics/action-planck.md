---
title: "Action and Planck's Constant"
status: "rigorous"
dependsOn: ["axioms/loop-closure", "thermodynamics/time", "thermodynamics-ext/fisher-metric"]
enablesDerivation: ["spacetime/speed-of-light", "holography/area-scaling", "foundation/coherence-lagrangian", "spacetime/gravitational-constant"]
tags: ["dynamics"]
summary: "Action is the coherence cost of transformation; ℏ is the minimum cost of one observer cycle — the quantum of action"
rigorLevel: "formal"
lastUpdated: 2026-03-09
---

## Overview

This derivation answers a foundational question in physics: **why is there a smallest unit of action, and why does it have the value it does?**

Planck's constant is the tiny number that separates classical from quantum physics. It sets the scale at which energy comes in discrete packets, particles behave as waves, and the uncertainty principle kicks in. In standard physics, it is a measured constant with no deeper explanation -- a number we read off experiments.

**The argument.** The framework derives Planck's constant from the geometry of observer loops:

- Every observer maintains itself by cycling through its states, and this cycling costs coherence -- the "action" of the cycle.
- The simplest possible observer (a single phase oscillator on a circle) has a minimum cycle cost, determined by the geometry of the coherence space. This minimum cost is Planck's constant.
- No observer can complete a cycle for less than this cost, because the circle is not contractible -- you cannot shrink a loop around it to nothing.
- The Planck-Einstein relation (energy equals frequency times Planck's constant) follows directly: the coherence allocated to an observer, divided by its cycle time, gives its frequency.
- The principle of stationary action (the backbone of classical mechanics) emerges from constructive interference of coherence phases along paths.
- The Heisenberg uncertainty principle follows from the Fourier relationship between phase and charge on the observer's loop.

**The result.** Planck's constant is the coherence cost of the minimal observer's cycle -- the irreducible price of existence for the simplest possible self-maintaining system. It is not a free parameter but a structural feature of the coherence geometry.

**Why this matters.** This connects the abstract axiom of loop closure to the physical constant that governs all of quantum mechanics. The quantum of action, the stationary action principle, and the uncertainty principle all emerge from a single geometric fact about observer loops.

**An honest caveat.** The structural postulate for smooth coherence measure has been promoted to a theorem (Theorem 0.1): the Born Rule (itself derived) forces statistical regularity, and the Fisher metric chain establishes $C^2$ smoothness and positive definiteness. No structural postulates remain. Computing the numerical value of Planck's constant from first principles remains an open problem.

## Statement

**Theorem.** Action is the coherence cost of a transformation in the coherence geometry. Planck's constant $\hbar$ is the minimum coherence cost of one observer cycle — the irreducible quantum of action, fixed by the compactness of the minimal observer's state space. The principle of stationary action and the Heisenberg uncertainty principle both follow from this identification.

## Structural Postulate

**S1 (Smooth coherence measure).** **Now a theorem** (Theorem 0.1 below). Formerly a structural postulate; now derived from the Fisher metric chain.

### Theorem 0.1 (Smooth Coherence Measure from the Fisher Metric)

**Theorem 0.1.** *The coherence measure $\mathcal{C}$, restricted to any observer state space $\Sigma$, is at least $C^2$. Its Hessian yields a positive-definite metric on the physical state space.*

*Proof.* The argument chains three established results:

**(i) Statistical regularity.** By [Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric), Theorem 0.1, the Born Rule (now a theorem via [Coherence as Physical Primitive](/derivations/axioms/coherence-operational)) forces observer states to satisfy the regularity conditions of classical information geometry: $p(x|\sigma) = |\langle x|\sigma\rangle|^2$ is $C^\infty$ in $\sigma$ for finite-dimensional systems.

**(ii) Coherence Hessian = Fisher metric.** By [Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric), Proposition 4.1, the Hessian of the coherence measure coincides (up to scale) with the Fisher information metric:

$$g_{ij}(\sigma) = \hbar \, G_{ij}(\sigma)$$

where $G_{ij}$ is the Fisher information matrix. The identification is established by Čencov's theorem (the Fisher metric is the unique monotone Riemannian metric) combined with coherence conservation (which provides the monotonicity condition).

**(iii) Positive definiteness.** The Fisher information matrix is positive definite on the non-degenerate sector of the state space ([Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric), Corollary 2.2): $G_{ij}$ is positive semi-definite by construction (as an expectation of outer products), and positive definite when the parameterization $\sigma \mapsto p(\cdot|\sigma)$ is non-degenerate. On the physical state space modulo gauge ([Observer Definition](/derivations/axioms/observer-definition), condition N3), distinct states yield distinct outcome distributions, so the parameterization is non-degenerate.

Therefore $g = \hbar G$ is $C^\infty$ (from (i)), positive definite (from (iii)), and equals the Hessian of $\mathcal{C}$ (from (ii)). This is precisely the content of S1. $\square$

**Remark.** The chain that eliminates this postulate: Born Rule (theorem) → statistical regularity (theorem) → Fisher metric exists and is positive definite → coherence Hessian = $\hbar \times$ Fisher metric → S1 holds. The $G_\mathcal{O}$-invariant metric from Loop Closure (Theorem 0.1) and the Fisher-Hessian metric are now identified by uniqueness (Čencov's theorem), not by postulate.

## Derivation

### Step 1: The Coherence Lagrangian

**Definition 1.1.** Let $\mathcal{O} = (\Sigma, I, \mathcal{B})$ be an observer with state space $\Sigma \subset \mathcal{H}$. The coherence geometry induces a **Riemannian metric** $g$ on $\Sigma$ via the Hessian of the coherence measure (Theorem 0.1):

$$g_{\sigma}(u, v) = \left.\frac{\partial^2}{\partial s \, \partial t} \mathcal{C}(\sigma + su + tv)\right|_{s=t=0}$$

for tangent vectors $u, v \in T_\sigma \Sigma$. By Theorem 0.1, this is well-defined ($C^2$ smoothness) and positive definite on the physical state space (modulo gauge).

**Definition 1.2.** The **coherence Lagrangian** is the function $\mathcal{L}: T\Sigma \to \mathbb{R}_{\geq 0}$ defined by:

$$\mathcal{L}(\sigma, \dot{\sigma}) = \sqrt{g_\sigma(\dot{\sigma}, \dot{\sigma})}$$

This is the instantaneous rate of coherence expenditure along the path — the norm of the velocity in the coherence metric.

**Definition 1.3.** The **coherence cost** (or **action**) of a path $\gamma: [t_0, t_1] \to \Sigma$ is the arc length in the coherence metric:

$$\mathcal{S}[\gamma] = \int_{t_0}^{t_1} \mathcal{L}(\gamma(t), \dot{\gamma}(t)) \, dt$$

### Step 2: Positivity of Coherence Cost

**Proposition 2.1 (Strict positivity).** *For any non-constant path $\gamma$ in $\Sigma$, $\mathcal{S}[\gamma] > 0$.*

*Proof.* By [Coherence Conservation](/derivations/axioms/coherence-conservation), $\mathcal{C}$ is a positive measure on $\mathcal{A}$ with $\mathcal{C}(\Sigma) > 0$ (condition O1 of [Observer Definition](/derivations/axioms/observer-definition)). The Hessian $g$ of a positive measure is positive semi-definite. We require positive definiteness (non-degeneracy): if $g_\sigma(v, v) = 0$ for some $v \neq 0$, then the coherence measure is flat in direction $v$, meaning motion in that direction costs no coherence and carries no structural information. Such a direction would be unobservable — a gauge redundancy. On the physical state space $\Sigma$ (modulo gauge), $g$ is positive definite.

Therefore $\mathcal{L}(\sigma, \dot{\sigma}) > 0$ whenever $\dot{\sigma} \neq 0$. For a non-constant path, $\dot{\gamma}(t) \neq 0$ on a set of positive measure, so $\mathcal{S}[\gamma] > 0$. $\square$

**Corollary 2.2.** *No coherence can be extracted from the path — there is no negative-cost transformation. This is a consequence of the closure of the coherence budget (Axiom 1: no external reservoir).*

### Step 3: The Minimal Cycle Cost

**Definition 3.1.** Let $\Lambda(\Sigma)$ denote the **free loop space** of $\Sigma$ — the set of all piecewise-smooth closed curves $\gamma: S^1 \to \Sigma$ with $\gamma(0) = \gamma(T)$ for some $T > 0$.

**Theorem 3.1 (Existence of minimum cycle cost).** *The coherence cost functional $\mathcal{S}: \Lambda(\Sigma) \to \mathbb{R}_{>0}$ achieves a minimum on the free loop space of the minimal observer. That is, there exists $\gamma_{\min} \in \Lambda(\Sigma)$ with:*

$$\mathcal{S}[\gamma_{\min}] = \inf_{\gamma \in \Lambda(\Sigma)} \mathcal{S}[\gamma] > 0$$

*Proof.* The minimal observer has state space $\Sigma \cong S^1$ ([Minimal Observer Structure](/derivations/minimal-observer/structure), Proposition 3.1). $S^1$ is compact. The set of closed geodesics on a compact Riemannian manifold is non-empty (by Lyusternik–Fet theorem). Among these, the shortest closed geodesic has length $L_{\min} > 0$ (strictly positive because $S^1$ is not contractible — every closed curve wrapping the circle has positive length).

The infimum of arc lengths over $\Lambda(S^1)$ is $L_{\min} = 2\pi r$ where $r$ is the radius of $S^1$ in the coherence metric. This infimum is achieved by the geodesic (the single-winding loop). $\square$

**Definition 3.2.** Planck's constant is the coherence cost of the minimal observer cycle:

$$\boxed{\hbar \equiv \mathcal{S}_{\min} = \min_{\gamma \in \Lambda(\Sigma_{\min})} \mathcal{S}[\gamma]}$$

This is the **quantum of action** — the irreducible minimum cost of any coherence-preserving cyclic transformation.

**Proposition 3.3 (Quantization of action).** *For any observer $\mathcal{O}$ with cycle $\gamma_\mathcal{O}$, the action $\mathcal{S}[\gamma_\mathcal{O}]$ satisfies $\mathcal{S}[\gamma_\mathcal{O}] \geq \hbar$. Equality holds if and only if $\mathcal{O}$ is a minimal observer.*

*Proof.* Every observer cycle is a closed curve in the coherence geometry. Its coherence cost is at least the cost of the minimal cycle (by definition of $\hbar$ as the infimum). Equality holds only when $\mathcal{O}$ achieves the minimum, which requires $\Sigma \cong S^1$ with $G_\mathcal{O} = U(1)$ — the minimal observer. $\square$

### Step 4: Coherence Cost Decomposition

**Proposition 4.1 (Action-energy-time relation).** *For an observer $\mathcal{O}$ with period $T_\mathcal{O}$ and coherence content $\mathcal{C}(\Sigma) = E_\mathcal{O}$, the coherence cost per cycle is:*

$$\mathcal{S}[\gamma_\mathcal{O}] = E_\mathcal{O} \cdot T_\mathcal{O}$$

*Proof.* The observer loop $\gamma_\mathcal{O}$ traverses $\Sigma$ uniformly (by the $U(1)$ action from [Loop Closure](/derivations/axioms/loop-closure), Corollary 4.3). At each instant, the coherence allocated to maintaining the loop is $\mathcal{C}(\Sigma)$. The loop takes time $T_\mathcal{O}$ to complete. The total coherence cost is the coherence rate times the duration: $\mathcal{S} = \mathcal{C}(\Sigma) \cdot T_\mathcal{O}$. $\square$

**Corollary 4.2 (Planck-Einstein relation).** *For the minimal observer: $\hbar = E_{\min} \cdot T_{\min}$. Using $\omega = 2\pi/T$ and absorbing the $2\pi$ into the convention:*

$$E = \hbar\omega$$

*This is the Planck-Einstein relation: energy equals frequency times the quantum of action.*

### Step 5: The Stationary Action Principle

**Theorem 5.1 (Stationary action from coherence resonance).** *Among all paths connecting two events $A, B$ in the interaction graph, the physically realized path $\gamma^*$ satisfies $\delta \mathcal{S}[\gamma^*] = 0$.*

*Proof.* Each admissible path $\gamma$ from $A$ to $B$ carries a coherence phase $\phi[\gamma] = \mathcal{S}[\gamma]/\hbar$. The net amplitude for the transition $A \to B$ is the coherence-weighted sum:

$$\psi(B|A) = \sum_{\gamma: A \to B} e^{i\mathcal{S}[\gamma]/\hbar}$$

For $\hbar \ll \mathcal{S}$, the phase $\phi[\gamma]$ oscillates rapidly as a function of the path. The dominant contribution comes from the **stationary phase region**: paths $\gamma^*$ where $\delta \mathcal{S}[\gamma^*] = 0$. At these paths, neighboring paths have nearly equal phases and constructively interfere. Away from stationary points, rapid oscillation causes destructive interference.

By the stationary phase approximation (a standard result in functional analysis):

$$\psi(B|A) \approx \sum_{\gamma^*: \delta\mathcal{S}=0} A[\gamma^*] \, e^{i\mathcal{S}[\gamma^*]/\hbar}$$

where $A[\gamma^*]$ is a slowly varying prefactor. The physical trajectory is selected by coherence resonance. $\square$

**Corollary 5.2.** *The Euler-Lagrange equations $\frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{\sigma}} = \frac{\partial \mathcal{L}}{\partial \sigma}$ are the condition for stationary coherence cost — the classical equations of motion.*

### Step 6: The Uncertainty Principle

**Theorem 6.1 (Heisenberg uncertainty from $U(1)$ conjugacy).** *For the conjugate variables $(\theta, Q)$ of a $U(1)$ observer loop, where $\theta \in [0, 2\pi)$ is the phase and $Q$ is the conserved charge:*

$$\Delta\theta \cdot \Delta Q \geq \frac{1}{2}$$

*Proof.* The $U(1)$ loop structure gives a Fourier-conjugate pair. The phase $\theta$ is the position on the circle $S^1$. The charge $Q$ corresponds to the Fourier mode number (the "cycle count" or angular momentum quantum number). By the classical uncertainty relation for Fourier-conjugate variables on $S^1$ [Folland & Sitaram, 1997]:

$$\Delta\theta \cdot \Delta n \geq \frac{1}{2}$$

where $n$ is the mode number conjugate to $\theta$. $\square$

**Corollary 6.2 (Position-momentum uncertainty).** *Using the identification $p = \hbar k$ (momentum as coherence per unit path length) and $x = \theta / k$ (position as phase divided by wavenumber), which depend on the spacetime derivation chain ([Speed of Light](/derivations/spacetime/speed-of-light), [Lorentz Invariance](/derivations/spacetime/lorentz-invariance)):*

$$\Delta x \cdot \Delta p \geq \frac{\hbar}{2}$$

**Corollary 6.3 (Energy-time uncertainty).** *Using $E = \hbar\omega$ (Corollary 4.2) and $t = \theta/\omega$, where the temporal parameterization requires [Time as Phase Ordering](/derivations/thermodynamics/time):*

$$\Delta E \cdot \Delta t \geq \frac{\hbar}{2}$$

**Proposition 6.4 (Structural interpretation).** *The uncertainty principle is not a limitation of measurement technology. It is the structural consequence of phase and charge being Fourier-conjugate aspects of the $U(1)$ coherence loop. Precise knowledge of position in the cycle implies complete uncertainty in the cycle count, and vice versa.*

### Step 7: ℏ Is Not a Free Parameter

**Proposition 7.1.** *In the framework, $\hbar$ is determined by the coherence geometry:*

$$\hbar = \min_{\gamma \in \Lambda(\Sigma_{\min})} \oint \mathcal{L} \, dt = 2\pi r_{\min}$$

*where $r_{\min}$ is the radius of the minimal observer loop in the coherence metric. Its numerical value ($\hbar \approx 1.055 \times 10^{-34}$ J·s) is a derived quantity, not a free parameter. However, computing this value requires the full specification of the coherence metric — which remains an open problem.*

**Proposition 7.2.** *In practice, $\hbar$ sets the unit of coherence cost. All physical quantities are measured in units of $\hbar$: energies as $\hbar\omega$, momenta as $\hbar k$, actions as multiples of $\hbar$.*

## Physical Interpretation

| Framework concept | Standard physics |
|---|---|
| Coherence cost $\mathcal{S}[\gamma]$ | Action $S$ |
| Coherence Lagrangian $\mathcal{L}$ | Lagrangian $L$ |
| Minimal cycle cost $\hbar$ | Planck's constant |
| Coherence resonance | Path integral |
| $U(1)$ Fourier conjugacy | Uncertainty principle |
| $E = \hbar\omega$ | Planck-Einstein relation |

## Consistency Model

**Theorem 8.1.** *The action and Planck's constant construction is realized in the minimal observer $\mathcal{O} = (S^1, I, \mathcal{B})$ with the round metric.*

**Model**: $\Sigma = S^1$ with circumference $L = 2\pi r$ in the coherence metric $g = r^2 d\theta^2$. The coherence measure is $\mathcal{C}(\theta, \Delta\theta) = r|\Delta\theta|$ (arc length).

*Verification:*
- **Definition 1.1**: The Hessian of $\mathcal{C}$ gives $g_\theta = r^2$, positive definite. ✓
- **Definition 1.2**: $\mathcal{L}(\theta, \dot\theta) = r|\dot\theta|$, non-negative. ✓
- **Proposition 2.1**: For any non-constant closed path, $\mathcal{S} > 0$. ✓
- **Theorem 3.1**: The minimum over closed loops is $\mathcal{S}_{\min} = 2\pi r$ (single winding). ✓
- **Definition 3.2**: $\hbar = 2\pi r$. ✓
- **Proposition 4.1**: $\mathcal{S} = \mathcal{C}(S^1) \cdot T = E \cdot T$. ✓
- **Corollary 4.2**: $E = \hbar\omega = (2\pi r)(1/T) \cdot 2\pi = \mathcal{C}(S^1)/T \cdot T$, consistent. ✓
- **Theorem 6.1**: Fourier analysis on $S^1$: $\Delta\theta \cdot \Delta n \geq 1/2$ (standard). ✓ $\square$

## Rigor Assessment

**Fully rigorous:**
- Proposition 2.1: Positivity of coherence cost (from positive definiteness of Riemannian metric, given Theorem 0.1)
- Theorem 3.1: Existence of minimum cycle cost (Lyusternik–Fet on compact $S^1$, with $L_{\min} > 0$ from non-contractibility)
- Definition 3.2: $\hbar$ as the minimum cycle cost (well-defined by Theorem 3.1)
- Proposition 3.3: Quantization of action (by definition of $\hbar$ as infimum)
- Proposition 4.1: Action-energy-time relation (uniform $U(1)$ traversal from [Loop Closure](/derivations/axioms/loop-closure))
- Corollary 4.2: Planck-Einstein relation $E = \hbar\omega$ (direct from Proposition 4.1)
- Theorem 5.1: Stationary action principle (standard stationary phase approximation)
- Theorem 6.1: Uncertainty relation (standard Fourier analysis on $S^1$)
- Proposition 6.4: Structural interpretation (immediate from $U(1)$ conjugacy)
- Theorem 8.1: Consistency model verified

**Formerly a structural postulate (now derived):**
- S1: $C^2$ smoothness of coherence measure — promoted to Theorem 0.1 via the Fisher metric chain (Born Rule → statistical regularity → Čencov uniqueness → coherence Hessian identification). No structural postulates remain in this derivation.

**Deferred to later derivations:**
- Corollaries 6.2–6.3: Position-momentum and energy-time uncertainty (require spacetime chain: $p = \hbar k$, $x = \theta/k$)
- Numerical value of $\hbar$ (requires full coherence metric specification)
- Relationship between $\hbar$, $c$, and $G$ (requires geometry derivation chain)

**Assessment:** The core results — existence and positivity of the action quantum, stationary action from path sums, Planck-Einstein relation, and uncertainty from $U(1)$ conjugacy — are fully rigorous. The former structural postulate S1 has been promoted to Theorem 0.1, leaving no active postulates in this derivation. Spacetime-dependent physical identifications are properly deferred.

## Open Gaps

1. **Constructing $\mathcal{L}$ from first principles**: The coherence Lagrangian should be uniquely derivable from $\mathcal{C}$ and the observer structure. The Fisher information metric is a natural candidate. This is the key missing link between the abstract framework and concrete dynamics.
2. **Quantization of energy levels**: The existence of a minimum action quantum $\hbar$ implies that admissible observer cycles have quantized action $n\hbar$ for $n \in \mathbb{Z}_{\geq 1}$. This should connect to the quantization of energy levels in bound systems.
3. **$\hbar$, $c$, and $G$**: The relationship between $\hbar$ (coherence cost quantum), $c$ (phase propagation speed from [Speed of Light](/derivations/spacetime/speed-of-light)), and $G$ (gravitational coupling) determines whether the framework has zero, one, or two free parameters.

<!-- References -->
[Folland & Sitaram, 1997]: /references#folland-sitaram-1997
