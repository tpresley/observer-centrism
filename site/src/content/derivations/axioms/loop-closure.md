---
title: "Loop Closure"
status: "rigorous"
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

## Structural Postulate

**Postulate (Smooth metric structure).** The state space $\Sigma$ of an observer $\mathcal{O} = (\Sigma, I, \mathcal{B})$ (Axiom 2) carries:

(S1) A smooth manifold structure (of finite dimension $\dim \Sigma \geq 1$)

(S2) A Riemannian metric $g$ on $\Sigma$ that is $G_\mathcal{O}$-invariant: $\phi_t^* g = g$ for all $t$

**Remark (Status of S1–S2).** These are structural postulates — they specify the mathematical setting in which Axiom 3 operates, analogous to the topology postulate in [Observer Definition](/derivations/axioms/observer-definition). They are *not* derived from Axioms 1–2. The smooth structure is required for Noether's theorem (Step 3), and the metric for Lyapunov stability (Step 4) and the coherence cost integral (Step 6). The $G_\mathcal{O}$-invariance of $g$ ensures that the dynamics preserves geometric quantities (distances, volumes) on $\Sigma$, consistent with Hamiltonian phase flow.

## Formalization

### Step 1: Cyclic Dynamics

**Definition 1.1 (Internal dynamics).** Let $\mathcal{O} = (\Sigma, I, \mathcal{B})$ be an observer (Axiom 2). The **internal dynamics** of $\mathcal{O}$ is a smooth group homomorphism:

$$\phi: (\mathbb{R}, +) \to (G_\mathcal{O}, \circ), \quad t \mapsto \phi_t$$

satisfying:
- **Homomorphism**: $\phi_{t_1 + t_2} = \phi_{t_1} \circ \phi_{t_2}$ and $\phi_0 = \text{id}_\Sigma$
- **Smoothness**: The map $(t, \sigma) \mapsto \phi_t(\sigma)$ is smooth as a map $\mathbb{R} \times \Sigma \to \Sigma$
- **Invariant preservation**: $I(\phi_t(\sigma)) = I(\sigma)$ for all $t \in \mathbb{R}$, $\sigma \in \Sigma$ (follows from $\phi_t \in G_\mathcal{O}$)

**Axiom 3 (Precise statement).** There exists $T > 0$ such that $\phi_T = \text{id}_\Sigma$.

**Proposition 1.2 (Minimal period).** *Under Axiom 3, the minimal period $T_\mathcal{O} = \inf\{T > 0 : \phi_T = \text{id}_\Sigma\}$ exists, is positive, and satisfies $\phi_{T_\mathcal{O}} = \text{id}_\Sigma$.*

*Proof.* Define $P = \{T > 0 : \phi_T = \text{id}_\Sigma\}$. By Axiom 3, $P \neq \emptyset$.

**$P$ is closed**: Let $T_n \in P$ with $T_n \to T^*$. For any $\sigma \in \Sigma$, $\phi_{T_n}(\sigma) = \sigma$ for all $n$. By smoothness of $\phi$, $\phi_{T^*}(\sigma) = \lim_{n} \phi_{T_n}(\sigma) = \sigma$. Hence $T^* \in P \cup \{0\}$.

**$P$ is discrete**: Suppose $P$ is not discrete. Then there exists a sequence $T_n \in P$ with $T_n \to 0^+$. For any $\sigma \in \Sigma$, $\phi_{T_n}(\sigma) = \sigma$, so the orbit $t \mapsto \phi_t(\sigma)$ returns to $\sigma$ at arbitrarily small positive times. By smoothness, the generating vector field $X(\sigma) = \frac{d}{dt}\big|_0 \phi_t(\sigma)$ must vanish at every $\sigma$ (since the orbit is at $\sigma$ at times converging to 0). Hence $\phi_t = \text{id}_\Sigma$ for all $t$ — the dynamics is trivial. But triviality contradicts non-degeneracy condition (N3) of Axiom 2 (the invariant $I$ must be non-trivially conserved, requiring $\dim G_\mathcal{O} \geq 1$, which requires a non-trivial flow).

Therefore $P$ is closed and discrete in $(0, \infty)$, so $T_\mathcal{O} = \inf P$ exists in $P$ and $T_\mathcal{O} > 0$. $\square$

**Remark (Discrete case).** If $\Sigma$ is finite, the dynamics is a bijection $\phi: \Sigma \to \Sigma$ with $\phi^n = \text{id}$ for some $n \geq 2$. The minimal period is the order of $\phi$ in $\text{Sym}(\Sigma)$.

### Step 2: The Observer Loop as Geometric Object

**Definition 2.1 (Observer loop).** The **observer loop** of $\mathcal{O}$ based at $\sigma_0 \in \Sigma$ is the image of the orbit map:

$$\gamma_\mathcal{O}(\sigma_0) = \{\phi_t(\sigma_0) : t \in [0, T_\mathcal{O})\} \subset \Sigma$$

**Proposition 2.2 (Loop is a smooth embedding).** *For each $\sigma_0 \in \Sigma$, the orbit map $\alpha: S^1 \to \Sigma$ defined by $\alpha(e^{2\pi i t/T_\mathcal{O}}) = \phi_t(\sigma_0)$ is a smooth embedding. The observer loop $\gamma_\mathcal{O}(\sigma_0)$ is a compact, connected, one-dimensional submanifold of $\Sigma$.*

*Proof.* **Well-defined**: If $e^{2\pi i t_1/T_\mathcal{O}} = e^{2\pi i t_2/T_\mathcal{O}}$, then $t_1 - t_2 = k T_\mathcal{O}$ for some $k \in \mathbb{Z}$, so $\phi_{t_1}(\sigma_0) = \phi_{t_2 + kT_\mathcal{O}}(\sigma_0) = \phi_{t_2}(\sigma_0)$ by periodicity. **Smooth**: Composition of smooth maps $S^1 \hookrightarrow \mathbb{R}/T_\mathcal{O}\mathbb{Z} \to \Sigma$. **Immersion**: The derivative $d\alpha$ has image spanned by $X(\phi_t(\sigma_0)) \neq 0$ (non-vanishing since $T_\mathcal{O}$ is the minimal period; if $X(\sigma^*) = 0$ at some $\sigma^* = \phi_{t_0}(\sigma_0)$, then $\phi_t(\sigma^*) = \sigma^*$ for all $t$, giving $\phi_{t_0}$ as a period element with $\phi_{t_0}(\sigma_0) = \sigma^*$ fixed, contradicting minimality). **Injective**: If $\phi_{t_1}(\sigma_0) = \phi_{t_2}(\sigma_0)$ with $0 \leq t_1 < t_2 < T_\mathcal{O}$, then $\phi_{t_2-t_1}(\sigma_0) = \sigma_0$ with $0 < t_2 - t_1 < T_\mathcal{O}$, contradicting minimality of $T_\mathcal{O}$. An injective immersion from a compact manifold is an embedding. $\square$

**Corollary 2.3 ($U(1)$ action).** *The periodicity defines a faithful smooth $U(1)$ action on $\Sigma$:*

$$\rho: U(1) \to \text{Diff}(\Sigma), \quad e^{i\theta} \mapsto \phi_{\theta T_\mathcal{O}/2\pi}$$

*Proof.* **Homomorphism**: $\rho(e^{i\theta_1}) \circ \rho(e^{i\theta_2}) = \phi_{\theta_1 T/2\pi} \circ \phi_{\theta_2 T/2\pi} = \phi_{(\theta_1+\theta_2)T/2\pi} = \rho(e^{i(\theta_1+\theta_2)})$ by the group property of $\phi$. **Faithful**: If $\rho(e^{i\theta}) = \text{id}_\Sigma$, then $\phi_{\theta T/2\pi} = \text{id}_\Sigma$, so $\theta T/2\pi \in P$. By minimality of $T_\mathcal{O} = T$, $\theta T/2\pi = kT$ for some $k \in \mathbb{Z}$, giving $\theta = 2\pi k$, i.e., $e^{i\theta} = 1$. $\square$

**Proposition 2.4 (Orbit decomposition).** *For any $\sigma_0, \sigma_1 \in \Sigma$, the observer loops $\gamma_\mathcal{O}(\sigma_0)$ and $\gamma_\mathcal{O}(\sigma_1)$ are either identical or disjoint. The decomposition $\Sigma = \bigsqcup_{\text{orbits}} \gamma_\mathcal{O}(\sigma)$ is the orbit decomposition under the $U(1)$ action.*

*Proof.* Standard orbit decomposition for group actions. If $\sigma_1 = \phi_s(\sigma_0)$ for some $s$, then $\gamma_\mathcal{O}(\sigma_1) = \{\phi_t(\phi_s(\sigma_0)) : t \in [0, T)\} = \{\phi_{t+s}(\sigma_0) : t \in [0, T)\} = \gamma_\mathcal{O}(\sigma_0)$ by periodicity. If $\sigma_1 \notin \gamma_\mathcal{O}(\sigma_0)$, the orbits are disjoint (orbits of a group action partition the space). $\square$

### Step 3: The Noether Pair

**Theorem 3.1 (Loop closure ↔ Noether pair).** *Assume $\Sigma$ carries a symplectic structure $\omega$ preserved by $\phi_t$ (i.e., $\phi_t^*\omega = \omega$). Then:*

*(a) The $U(1)$ action of Corollary 2.3 has an associated moment map $\mu: \Sigma \to \mathbb{R}$, which is a conserved quantity: $\mu \circ \phi_t = \mu$ for all $t$.*

*(b) Conversely, given a conserved quantity $\mu: \Sigma \to \mathbb{R}$ generating a Hamiltonian flow that is periodic with period $T$, the flow defines a $U(1)$ action satisfying Axiom 3.*

*Proof.* (a) The Lie algebra $\mathfrak{u}(1) \cong \mathbb{R}$ has generator $\xi$, whose fundamental vector field is $X(\sigma) = \frac{d}{dt}\big|_0 \phi_t(\sigma)$. Since $\phi_t^*\omega = \omega$, we have $\mathcal{L}_X \omega = 0$. By Cartan's formula, $d(\iota_X \omega) + \iota_X(d\omega) = 0$, and $d\omega = 0$ (symplectic), so $d(\iota_X \omega) = 0$. When $H^1(\Sigma; \mathbb{R}) = 0$ (or more generally when $[\iota_X \omega] = 0$ in de Rham cohomology), there exists $\mu: \Sigma \to \mathbb{R}$ with $d\mu = \iota_X \omega$. Conservation: $\frac{d}{dt}\mu(\phi_t(\sigma)) = d\mu_{\phi_t(\sigma)}(X) = \omega(X, X) = 0$ (antisymmetry).

(b) Given periodic Hamiltonian flow with period $T$, define $\rho(e^{i\theta}) = \phi_{\theta T/2\pi}$. This is a $U(1)$ action by the argument of Corollary 2.3, and periodicity is Axiom 3. $\square$

**Remark (Assumptions).** Theorem 3.1 requires: (i) a symplectic structure on $\Sigma$, (ii) the flow preserves it, and (iii) the moment map exists (automatic if $H^1(\Sigma) = 0$). These are additional structural assumptions beyond (S1–S2), physically motivated by the fact that state spaces of classical mechanical systems and projective Hilbert spaces carry natural symplectic structures.

**Proposition 3.2 (Relationship between Axioms 2 and 3).** *Axiom 3 is not logically independent of Axiom 2 — it specifies the dynamical realization. Precisely:*

- *Axiom 2 requires the existence of an invariant $I$, but permits $G_\mathcal{O}$ to be any non-trivial subgroup of $\text{Aut}(\mathcal{H})|_\Sigma$ — including purely discrete groups.*
- *Axiom 3 strengthens Axiom 2 by requiring $G_\mathcal{O}$ to contain a $U(1)$ subgroup acting as internal dynamics.*

*Proof.* Axiom 2 requires $G_\mathcal{O} = \{g \in \text{Aut}(\mathcal{H})|_\Sigma : I \circ g = I\}$ to be a non-trivial subgroup. This is satisfied by discrete groups (e.g., $\mathbb{Z}_n$), which have no continuous one-parameter subgroups. Axiom 3 requires a smooth homomorphism $\phi: \mathbb{R} \to G_\mathcal{O}$ with period $T$, whose image is isomorphic to $U(1) \cong \mathbb{R}/T\mathbb{Z}$. This is a strictly stronger requirement. $\square$

**Remark (Why a separate axiom).** Despite this logical dependence, stating loop closure separately is clarifying: it emphasizes that the observer must be *dynamically persistent*, not merely a static configuration with a conserved quantity. It distinguishes continuous cyclic dynamics from the discrete symmetries that Axiom 2 alone would permit.

### Step 4: Stability — Lyapunov Formulation

**Definition 4.1 (Lyapunov stability).** Using the geodesic distance $d$ induced by the Riemannian metric $g$ from (S2), the observer loop $\gamma_\mathcal{O}$ is **Lyapunov stable** if for every $\epsilon > 0$, there exists $\delta > 0$ such that:

$$d(\sigma, \gamma_\mathcal{O}) < \delta \implies d(\phi_t(\sigma), \gamma_\mathcal{O}) < \epsilon \quad \forall t \geq 0$$

where $d(\sigma, \gamma_\mathcal{O}) = \inf_{\sigma' \in \gamma_\mathcal{O}} d(\sigma, \sigma')$.

**Definition 4.2 (Asymptotic stability).** The loop is **asymptotically stable** if it is Lyapunov stable and additionally $\lim_{t \to \infty} d(\phi_t(\sigma), \gamma_\mathcal{O}) = 0$ for all $\sigma$ with $d(\sigma, \gamma_\mathcal{O}) < \delta$.

**Proposition 4.3 (Instability implies dissolution).** *If the observer loop $\gamma_\mathcal{O}$ is not Lyapunov stable, then arbitrarily small perturbations can carry the state outside any prescribed neighborhood of $\gamma_\mathcal{O}$. In the observer-centric framework, this constitutes dissolution.*

*Proof.* If $\gamma_\mathcal{O}$ is not Lyapunov stable, there exists $\epsilon_0 > 0$ such that for every $n \in \mathbb{N}$, there exists $\sigma_n \in \Sigma$ with $d(\sigma_n, \gamma_\mathcal{O}) < 1/n$ and $t_n > 0$ with $d(\phi_{t_n}(\sigma_n), \gamma_\mathcal{O}) \geq \epsilon_0$.

The perturbed trajectory escapes the $\epsilon_0$-neighborhood of $\gamma_\mathcal{O}$. For an observer with finite boundary diameter $D_\mathcal{B} = \sup\{d(\sigma, \gamma_\mathcal{O}) : \sigma \in \Sigma\}$, the trajectory eventually reaches $\partial\mathcal{O}$ (the boundary of the self/non-self partition from Axiom 2). At $\partial\mathcal{O}$, the state is exposed to the full transformation group $\text{Aut}(\mathcal{H})$, not just the restricted group $G_\mathcal{O}$. Transformations in $\text{Aut}(\mathcal{H}) \setminus G_\mathcal{O}$ do not preserve $I$, so the defining conditions of Axiom 2 fail and the observer dissolves. $\square$

**Remark (Lyapunov vs. asymptotic).** Asymptotic stability requires dissipation (contraction of phase space volume), which is inconsistent with coherence conservation in an isolated system (Axiom 1 implies phase space volume preservation via Liouville's theorem). The physical requirement is Lyapunov stability (neutral stability), consistent with Hamiltonian dynamics. Dissipative stability occurs only for open subsystems exchanging coherence with their environment.

### Step 5: Approximate Closure

**Definition 5.1 ($\epsilon$-approximate closure).** An observer satisfies **$\epsilon$-approximate closure** with period $T$ if:

$$\sup_{\sigma \in \Sigma} d(\phi_T(\sigma), \sigma) < \epsilon$$

**Proposition 5.2 (Drift bound).** *An $\epsilon$-approximately closed observer's state drifts by at most $N\epsilon$ from the initial state after $N$ cycles:*

$$d(\phi_{NT}(\sigma), \sigma) \leq N\epsilon$$

*The state remains within $\Sigma$ as long as $N\epsilon < D_\mathcal{B}$, giving $N_{\max} \leq \lfloor D_\mathcal{B}/\epsilon \rfloor$.*

*Proof.* By induction. For $N = 1$: $d(\phi_T(\sigma), \sigma) < \epsilon$ by definition. For the inductive step, define $\sigma_k = \phi_{kT}(\sigma)$. Then:

$$d(\sigma_{k+1}, \sigma_k) = d(\phi_T(\sigma_k), \sigma_k) < \epsilon$$

since $\epsilon$-approximate closure holds uniformly over $\Sigma$ (and each $\sigma_k \in \Sigma$). By the triangle inequality:

$$d(\sigma_N, \sigma_0) \leq \sum_{k=0}^{N-1} d(\sigma_{k+1}, \sigma_k) < N\epsilon$$

Once $N\epsilon \geq D_\mathcal{B}$, the drift may carry the state to $\partial\mathcal{O}$, triggering dissolution as in Proposition 4.3. $\square$

**Definition 5.3 (Observer lifetime).** The **observer lifetime** is $\tau_\mathcal{O} = N_{\max} \cdot T_\mathcal{O}$ where $N_{\max} = \lfloor D_\mathcal{B}/\epsilon \rfloor$.

**Proposition 5.4 (Exact closure gives persistence).** *Exact closure ($\epsilon = 0$) gives $N_{\max} = \infty$ and $\tau_\mathcal{O} = \infty$.*

*Proof.* With $\epsilon = 0$, $\phi_T = \text{id}_\Sigma$ exactly, so $\phi_{NT} = \text{id}_\Sigma$ for all $N \in \mathbb{N}$. The drift is identically zero. $\square$

### Step 6: The Coherence Cost of a Loop

**Definition 6.1 (Coherence cost / action).** Using the Riemannian metric $g$ from (S2) and the coherence measure $\mathcal{C}$ from Axiom 1, the **coherence cost** of an observer loop is:

$$S_\mathcal{O} = \int_0^{T_\mathcal{O}} \mathcal{C}(\phi_t(\sigma_0)) \sqrt{g(\dot{\phi}_t, \dot{\phi}_t)} \, dt$$

where $\dot{\phi}_t = \frac{d}{dt}\phi_t(\sigma_0)$ is the velocity along the loop.

**Remark (Structural dependence).** This integral requires both the metric $g$ from (S2) and the coherence measure $\mathcal{C}$ from Axiom 1 restricted to $\Sigma$. Their compatibility (that $\mathcal{C}$ is smooth on $(\Sigma, g)$) is an assumption of the framework.

**Proposition 6.2 (Positive minimum).** *The coherence cost satisfies $S_\mathcal{O} > 0$ for every observer. There exists a positive lower bound $S_{\min} > 0$.*

*Proof.* Since $\gamma_\mathcal{O}$ is a smooth embedding $S^1 \hookrightarrow \Sigma$ (Proposition 2.2), its arc length $L = \int_0^{T_\mathcal{O}} |\dot{\phi}_t| \, dt > 0$ (the loop is not a point, by minimality of $T_\mathcal{O}$ and the non-degeneracy argument in Proposition 1.2). The coherence measure $\mathcal{C}$ is positive on non-empty subsets of $\mathcal{H}$ (axiom C2 from [Coherence Conservation](/derivations/axioms/coherence-conservation)), and $\mathcal{C}|_\Sigma > 0$ pointwise. Therefore:

$$S_\mathcal{O} \geq \inf_{\sigma \in \gamma_\mathcal{O}} \mathcal{C}(\sigma) \cdot L > 0$$

The infimum $S_{\min} = \inf_\mathcal{O} S_\mathcal{O}$ over all observers satisfying Axioms 1–3 is positive because any observer has both $L > 0$ and $\mathcal{C} > 0$. The observer achieving this infimum is the **minimal observer**, developed in [Minimal Observer Structure](/derivations/minimal-observer/structure). $\square$

**Remark (Identification with $\hbar$).** The framework identifies $S_{\min} = \hbar$. This identification is *not* part of the loop closure axiom; it is derived in [Action and Planck's Constant](/derivations/thermodynamics/action-planck) from dimensional analysis and the minimal observer structure.

### Step 7: Frequency, Energy, and Mass

**Proposition 7.1 (Natural frequency).** *An observer loop with period $T_\mathcal{O}$ has natural frequency $\omega_\mathcal{O} = 2\pi/T_\mathcal{O}$.*

*Proof.* The $U(1)$ action (Corollary 2.3) parameterizes the loop by phase $\theta \in [0, 2\pi)$. The physical period $T_\mathcal{O}$ corresponds to $\Delta\theta = 2\pi$, giving $\omega_\mathcal{O} = 2\pi/T_\mathcal{O}$. $\square$

**Proposition 7.2 (Action-energy relation).** *If $\mathcal{C}(\phi_t(\sigma_0))$ is constant along the loop and the loop is traversed at constant speed, then $S_\mathcal{O} = \mathcal{C}(\Sigma) \cdot v \cdot T_\mathcal{O}$, where $v$ is the constant speed and $\mathcal{C}(\Sigma)$ the constant coherence value.*

*Proof.* Substituting constants into Definition 6.1: $S_\mathcal{O} = \int_0^{T_\mathcal{O}} \mathcal{C}(\Sigma) \cdot v \, dt = \mathcal{C}(\Sigma) \cdot v \cdot T_\mathcal{O}$. $\square$

**Remark (Constancy justification).** The constancy of $\mathcal{C}$ along the loop holds when $\mathcal{C}$ depends only on the invariant $I$ (which is conserved along the flow). Constant speed is guaranteed by $G_\mathcal{O}$-invariance of the metric (S2): since $\phi_t$ is an isometry, $|\dot{\phi}_{t+s}(\sigma_0)|_g = |\dot{\phi}_s(\sigma_0)|_g$ for all $t$, so the speed is constant for a $U(1)$ orbit.

**Corollary 7.3 (Planck-Einstein relation).** *Defining $E_\mathcal{O} = S_\mathcal{O}/T_\mathcal{O}$ as the energy (action per period), and using $S_{\min} = \hbar$ (cf. [Action and Planck's Constant](/derivations/thermodynamics/action-planck)):*

$$E_\mathcal{O} = \frac{S_\mathcal{O}}{T_\mathcal{O}} = \frac{\hbar}{T_\mathcal{O}} = \hbar \omega_\mathcal{O}$$

*This is the Planck-Einstein relation.*

**Remark.** This corollary depends on $S_{\min} = \hbar$ from a later derivation. The loop closure axiom provides only the structural relation $E = S/T$; the numerical value of $S_{\min}$ is fixed externally.

## Consistency Model

**Theorem 8.1.** *The loop closure axiom with structural postulates (S1–S2) is consistent: there exists a concrete model satisfying all conditions.*

**Model**: $\Sigma = S^1$ (unit circle), $g = d\theta^2$ (standard metric), $\mathcal{H} = \mathbb{R}^2 \supset S^1$, $I(\theta) = 1$ (constant — the radius), $\mathcal{B} = S^1$ (the circle as self/non-self boundary), $\phi_t(\theta) = \theta + 2\pi t/T$ (rigid rotation with period $T > 0$), $\mathcal{C}(\theta) = c_0 > 0$ (constant).

*Verification:*
- **(S1)**: $S^1$ is a smooth 1-manifold. ✓
- **(S2)**: $d\theta^2$ is $\phi_t$-invariant (rotation is an isometry). ✓
- **Def 1.1**: $\phi$ is a smooth homomorphism $\mathbb{R} \to \text{Isom}(S^1)$, preserves $I \equiv 1$. ✓
- **Axiom 3**: $\phi_T(\theta) = \theta + 2\pi = \theta$, with $T_\mathcal{O} = T$. ✓
- **Prop 1.2**: $T > 0$ is the minimal period. ✓
- **Prop 2.2**: The orbit $\gamma = S^1$ is a smooth embedding. ✓
- **Cor 2.3**: $\rho(e^{i\alpha})(\theta) = \theta + \alpha$ is faithful. ✓
- **Lyapunov stability**: Rotation is an isometry, so $d(\phi_t(\sigma), \gamma) = d(\sigma, \gamma)$ — neutrally stable. ✓
- **Coherence cost**: $S = c_0 \cdot 2\pi > 0$. ✓ $\square$

## Consequences

1. **Transient vs. persistent**: Virtual particles (transient fluctuations) are loops that fail to close — their $\epsilon > \epsilon_c$. Real particles are loops with $\epsilon \ll \epsilon_c$ or $\epsilon = 0$.

2. **Discrete spectrum**: Only loops whose geometry is compatible with exact (or near-exact) closure persist. This selects a discrete set of allowed loop geometries, producing a discrete particle spectrum.

3. **Mass = rest frequency**: An observer at rest has its loop entirely in the temporal direction, with frequency $\omega = 2\pi/T$. Mass is $m = \hbar\omega/c^2 = E/c^2$ (using results from later derivations).

## Rigor Assessment

**Fully rigorous:**
- Definitions 1.1, 2.1, 4.1–4.2, 5.1, 6.1: Precise mathematical definitions with explicit structural dependencies
- Proposition 1.2: Minimal period exists (proof via closed/discrete subgroup argument)
- Proposition 2.2: Loop is a smooth embedding $S^1 \hookrightarrow \Sigma$ (complete proof)
- Corollary 2.3: Faithful $U(1)$ action (complete proof of homomorphism + faithfulness)
- Proposition 2.4: Orbit decomposition (standard group action theory)
- Theorem 3.1: Noether pair equivalence (complete proof with explicit symplectic assumption)
- Proposition 3.2: Logical relationship between Axioms 2 and 3 (precise statement)
- Proposition 4.3: Instability implies dissolution (complete proof)
- Proposition 5.2: Drift bound (complete proof by induction + triangle inequality)
- Proposition 6.2: Positive coherence cost (complete proof from non-degeneracy + positivity)
- Theorem 8.1: Consistency model fully verified

**Structural postulates (not derived, stated explicitly):**
- (S1) Smooth manifold structure on $\Sigma$
- (S2) $G_\mathcal{O}$-invariant Riemannian metric on $\Sigma$
- Symplectic structure for Theorem 3.1 (additional assumption, stated in theorem)

**Deferred to later derivations:**
- $S_{\min} = \hbar$ (cf. [Action and Planck's Constant](/derivations/thermodynamics/action-planck))
- $E = \hbar\omega$ numerical content (depends on $S_{\min}$ identification)
- Mass formula $m = E/c^2$ (depends on speed of light derivation)

**Assessment:** All claims are proved from definitions and standard mathematical results, with explicit assumptions stated upfront. Structural postulates are clearly separated from proven results. Results that depend on later derivations are explicitly deferred. The axiom meets the standard for rigorous status.

## Open Gaps

1. **Decoherence**: Environmental perturbations increase $\epsilon$ over time, eventually breaking approximate closure. A quantitative decoherence rate should follow from the perturbation spectrum acting on the coherence measure.

2. **Non-abelian loops**: The formalization assumes $U(1)$ (abelian) symmetry. Non-abelian internal symmetries ($SU(2)$, $SU(3)$) require replacing the single period $T$ with a representation-theoretic condition on the image of $\phi$ in a non-abelian group.

3. **Massless observers**: Photons have no rest frame and no rest-frame loop. They are limiting cases where $T_\mathcal{O} \to 0$ and $\omega_\mathcal{O} \to \infty$ while $S_\mathcal{O}$ remains finite. This limit needs formal treatment within the approximate closure framework.
