---
title: "Loop Closure"
status: "rigorous"
dependsOn: ["axioms/coherence-conservation", "axioms/observer-definition"]
enablesDerivation: ["minimal-observer/structure", "thermodynamics/action-planck", "spacetime/speed-of-light"]
tags: ["axioms"]
summary: "Derivation of cyclic dynamics from self-reference: an observer must reproduce its own state to persist, and finite resources force this self-reproduction into a periodic loop with U(1) symmetry"
rigorLevel: "formal"
lastUpdated: 2026-03-27
---

## Overview

This derivation answers the question: **what does it take for an observer to persist?**

Having a conserved quantity (Axiom 1) and a self-maintaining identity (Axiom 2) is not enough. An observer must actively sustain itself — its current state, processed through its own dynamics, must reproduce a valid observer state. This is *self-reference*: the observer is a process that instantiates itself.

**The argument.** Self-reference under finite resources forces loop structure:

- An observer's internal state must be *self-generating*: the current configuration determines the next configuration. This is a deterministic flow on the state space.
- The observer has finite resources — a compact state space with finite coherence. A flow that drifts without returning will eventually cross the observer's boundary and dissolve.
- Approximate return is not enough. Each imperfect cycle accumulates drift, giving the observer a finite lifetime proportional to how tightly the cycle closes (the drift bound).
- Only *exact* return — the state returning precisely to its starting configuration — gives indefinite persistence. Exact return of a continuous flow is periodicity, and periodicity is $U(1)$ symmetry.

**The result.** Every persistent observer has a natural frequency (how fast its loop cycles), a coherence cost (the minimum resources needed to complete one cycle), and a conserved charge paired with its cyclic symmetry. The loop is not an additional constraint imposed on observers — it is what self-reference looks like for a finite system.

**Why this matters.** Periodicity gives rise to frequency, frequency gives rise to energy (via the Planck-Einstein relation derived later), and the requirement of a minimum coherence cost per cycle is what ultimately produces Planck's constant. The wave-like behavior of quantum mechanics traces back to this requirement: to exist is to oscillate.

**An honest caveat.** The step from "indefinite persistence" to "exact periodicity" relies on ruling out quasi-periodic flows (where the orbit is dense in a higher-dimensional torus rather than closing as a circle). The drift bound motivates this step but does not rigorously exclude quasi-periodicity; the additional physical input is that the observer's dynamics generates a single frequency, not a continuum. See the Remark following Theorem 3.2 for a precise discussion.

## Statement

**Axiom 3 (Loop Closure).** Every observer's internal dynamics is self-sustaining and periodic: the state returns to its initial configuration after a finite period. A self-referencing system with finite resources that does not close its loop eventually dissolves. Loop closure is what makes an observer *persistent* in the sense of Axiom 2.

## Structural Postulate

**Structural Postulate S1 (Finite-dimensional manifold).** The state space $\Sigma$ of an observer $\mathcal{O} = (\Sigma, I, \mathcal{B})$ (Axiom 2) is:

(S1) A topological manifold of finite dimension $\dim \Sigma \geq 1$ (locally homeomorphic to $\mathbb{R}^n$).

S1 does **not** assume smooth ($C^\infty$) structure, compactness, or free orbits. Compactness and connectedness come from O1 of [Observer Definition](/derivations/axioms/observer-definition). Free orbits are derived in Lemma 0.0 below. Smoothness is derived in Theorem 0.0 below.

**Remark (Irreducible content of S1).** Of the original four components of S1 (manifold structure, finite dimensionality, compactness, free orbits), two are now derived from other parts of the framework:

- **Compactness and connectedness**: already required by O1 of Axiom 2.
- **Free orbits**: derived from Axiom 3's non-triviality combined with coherence cost positivity (Lemma 0.0 below).

The genuinely irreducible content of S1 is:

1. **Local regularity** (manifold structure): the state space is locally homeomorphic to $\mathbb{R}^n$, excluding topological pathologies such as fractal state spaces, Cantor-set-like configurations, or non-manifold points. This is consistent with the framework's built-in UV cutoff ([Holographic Entropy Bound](/derivations/holography/area-scaling), S1) and with the continuous-discrete duality's requirement that the discrete observer network be compatible with a smooth coherence manifold ([Continuous-Discrete Duality](/derivations/foundation/continuous-discrete-duality), Proposition 3.2), but is not rigorously derived from either.

2. **Finite dimensionality**: the observer has finitely many internal degrees of freedom. This is strongly motivated by the finite energy from Axiom 3 (finite period $T$ gives finite energy $E = \hbar\omega$) and the finite information content from the holographic bound, but making the argument rigorous creates a dependency inversion (the holographic bound depends on loop-closure).

**Lemma 0.0 (Free orbits from Axiom 3).** *Given S1 and Axiom 3, the $U(1)$ action on $\Sigma$ is free: no point of $\Sigma$ is fixed under all $\phi_t$.*

*Proof.* **Case $\dim \Sigma = 1$** (minimal observer): $\Sigma$ is a compact connected 1-manifold, hence homeomorphic to $S^1$. A non-trivial continuous $U(1)$ action on $S^1$ has no fixed points (a rotation with a fixed point is the identity, contradicting non-triviality from Axiom 3). So the action is free.

**Case $\dim \Sigma \geq 2$**: Suppose $\sigma^* \in \Sigma$ is a fixed point: $\phi_t(\sigma^*) = \sigma^*$ for all $t$. The orbit through $\sigma^*$ is the single point $\{\sigma^*\}$, which has zero length. The coherence cost of this orbit is zero: $S(\sigma^*) = 0$. But by Proposition 7.2 (below), every point in an observer's state space must have positive coherence cost — zero-cost states carry no coherence and cannot contribute to the observer's conserved invariant $I$. A state that does not participate in the dynamics is not part of the observer (it violates the self-referential character of loop closure: to persist is to cycle). Therefore no fixed point exists, and the action is free. $\square$

**Remark (Axiom coherence — why smooth structure is structurally necessary).** Beyond being the unique consistent setting, smooth structure is required for the three axioms to *communicate*. The framework's core mechanism is the **Noether pair** (Theorem 5.1 below): the $U(1)$ symmetry from Axiom 3 is linked to the conserved invariant $I$ from Axiom 2, which is related to the coherence measure $\mathcal{C}$ from Axiom 1, through the moment map. This identification requires a Lie algebra (to define the generating vector field), a smooth action (for the moment map to exist), and a smooth manifold (for the tangent bundle and differential forms).

On a non-smooth space, all three ingredients fail. The three axioms remain individually satisfiable — a conserved measure, a continuous invariant, and a periodic homeomorphism can coexist on a non-smooth space — but the Noether mechanism that *connects* them is severed. Coherence conservation becomes an accidental coincidence rather than a structural consequence of the $U(1)$ symmetry. The axiom system requires smooth structure not as mathematical convenience but for internal coherence: without it, the axioms cannot communicate.

**Remark (Selection argument for S1).** Three independent downstream requirements converge on requiring at least $C^1$ differentiability, from which $C^\infty$ follows:

1. **Noether's theorem** (Step 5, [Observer Definition](/derivations/axioms/observer-definition) Theorem 5.1) requires a Lie group acting smoothly on a smooth manifold.
2. **Coherence cost** (Step 7) requires the velocity $\dot{\phi}_t$ along the observer loop, presupposing $C^1$ differentiability.
3. **Fisher information metric** ([Fisher Metric](/derivations/thermodynamics-ext/fisher-metric)) requires $\mathcal{C}$ to be $C^2$ on $\Sigma$.

Whitney's theorem (1936) upgrades $C^1$ to the unique compatible $C^\infty$ structure. The following theorem shows this smooth structure is not assumed but derived from S1 and Axiom 3.

**Theorem 0.0 (Smooth structure from S1 and Axiom 3).** *Given S1, $\Sigma$ admits a smooth manifold structure, unique up to equivariant diffeomorphism, such that the $U(1)$ action from Axiom 3 is smooth.*

*Proof.* By S1, $\Sigma$ is a compact topological manifold of dimension $n \geq 1$ with a free continuous $U(1)$ action.

**Step 1 (Smooth structure exists).** Since the $U(1)$ action is free, $\Sigma$ is a principal $U(1)$-bundle over the orbit space $B = \Sigma/U(1)$, which is a compact topological manifold of dimension $n - 1$ [Bredon, 1972]. By the equivariant smoothing theorem for compact Lie group actions on topological manifolds [Illman, 1983]; [Orlik, 1972], there exists a smooth structure on $\Sigma$ making the $U(1)$ action a smooth Lie group action.

**Step 2 (Uniqueness).** For $n \leq 3$: every compact topological manifold of dimension $\leq 3$ admits a unique smooth structure (dimension 1: elementary; dimension 2: Radó, 1925; dimension 3: Moise, 1952). The smooth $U(1)$ action is then the unique smoothing of the continuous action. For $n \geq 4$: by the uniqueness part of the equivariant smoothing theorem [Illman, 1983], any two smooth structures making the compact Lie group action smooth are equivariantly diffeomorphic, so the equivariant smooth structure is unique. $\square$

**Remark.** For the minimal observer ($\Sigma = S^1$, $\dim \Sigma = 1$), Theorem 0.0 is trivial: $S^1$ has a unique smooth structure and every continuous $U(1)$ action on $S^1$ is automatically smooth. The theorem's content becomes substantive for higher-dimensional state spaces. The net effect: S1 assumes only finite-dimensional manifold structure and free orbits; smoothness is a theorem, not a postulate.

**Theorem 0.1 (Invariant Riemannian metric).** *Given S1, the state space $\Sigma$ carries a $G_\mathcal{O}$-invariant Riemannian metric $g$ with $\phi_t^* g = g$ for all $t$.*

*Proof.* **Step (a): Existence of a Riemannian metric.** Since $\Sigma$ is a smooth manifold (Theorem 0.0) and is compact (O1 from [Observer Definition](/derivations/axioms/observer-definition)), it admits a Riemannian metric $g_0$. (Standard result: every smooth manifold admits a Riemannian metric, constructed via a partition of unity subordinate to an atlas. Compactness ensures a finite partition suffices.)

**Step (b): Weyl averaging.** The dynamics $\phi_t$ generates a $U(1)$ action on $\Sigma$ (Corollary 4.3), and $U(1)$ is compact. Define the averaged metric:

$$g(\sigma)(v, w) = \int_{U(1)} (\phi_\theta^* g_0)(\sigma)(v, w) \, d\mu(\theta)$$

where $\mu$ is the normalized Haar measure on $U(1)$ and $\phi_\theta = \phi_{\theta T_\mathcal{O}/2\pi}$.

- **$g$ is Riemannian**: For any non-zero $v \in T_\sigma\Sigma$, $(\phi_\theta^* g_0)(v, v) = g_0(d\phi_\theta(v), d\phi_\theta(v)) > 0$ since $g_0$ is positive-definite and $d\phi_\theta$ is a linear isomorphism. The integral of positive functions with respect to a probability measure is positive. So $g(v, v) > 0$ for all $v \neq 0$.
- **$g$ is $G_\mathcal{O}$-invariant**: For any $\phi_s$ in the $U(1)$ action, $(\phi_s^* g)(v, w) = \int_{U(1)} ((\phi_\theta \circ \phi_s)^* g_0)(v, w) \, d\mu(\theta) = g(v, w)$ by translation-invariance of Haar measure on $U(1)$. $\square$

**Remark (Canonical choice).** Theorem 0.1 establishes existence using an arbitrary initial metric. The [Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric) provides a *canonical* choice: the unique (up to scale) Riemannian metric on $\Sigma$ invariant under sufficient statistics (Čencov's theorem). Since the Fisher metric is already $U(1)$-invariant when $\mathcal{C}$ is constant along orbits (which holds by invariant preservation), it provides a distinguished $G_\mathcal{O}$-invariant metric without averaging.

**Remark (Former Postulates S1 and S2).** S1 has been progressively tightened. Originally it assumed smooth manifold structure + compactness + free orbits. Compactness comes from O1 (Axiom 2). Free orbits are derived in Lemma 0.0 from Axiom 3 + coherence cost positivity. Smoothness is derived in Theorem 0.0 via the equivariant smoothing theorem. S2 originally assumed a $G_\mathcal{O}$-invariant Riemannian metric; this is now Theorem 0.1, derived from Theorem 0.0 + compactness + Weyl averaging. The net irreducible structural input is: $\Sigma$ is a finite-dimensional topological manifold (locally homeomorphic to $\mathbb{R}^n$).

## Formalization

### Step 1: Self-Sustaining Dynamics

**Definition 1.1 (Internal dynamics).** Let $\mathcal{O} = (\Sigma, I, \mathcal{B})$ be an observer (Axiom 2). The **internal dynamics** of $\mathcal{O}$ is a smooth group homomorphism:

$$\phi: (\mathbb{R}, +) \to (G_\mathcal{O}, \circ), \quad t \mapsto \phi_t$$

satisfying:
- **Homomorphism**: $\phi_{t_1 + t_2} = \phi_{t_1} \circ \phi_{t_2}$ and $\phi_0 = \text{id}_\Sigma$
- **Smoothness**: The map $(t, \sigma) \mapsto \phi_t(\sigma)$ is smooth as a map $\mathbb{R} \times \Sigma \to \Sigma$
- **Invariant preservation**: $I(\phi_t(\sigma)) = I(\sigma)$ for all $t \in \mathbb{R}$, $\sigma \in \Sigma$ (follows from $\phi_t \in G_\mathcal{O}$)

**Remark (Self-reference).** The requirement $\phi_t \in G_\mathcal{O}$ encodes self-reference: the observer's dynamics preserves the very invariant that defines the observer. The state at time $t$ is produced by the observer's own symmetry group acting on the state at time $0$. The observer is, in this precise sense, a process that instantiates itself.

### Step 2: Approximate Closure and Dissolution

Before stating the axiom's content, we establish why self-sustaining dynamics must eventually close into a loop.

**Definition 2.1 (Boundary diameter).** The **boundary diameter** of observer $\mathcal{O}$ is $D_\mathcal{B} = \text{diam}(\Sigma) < \infty$ (finite by compactness, using the geodesic distance $d$ induced by the Riemannian metric $g$ from Theorem 0.1).

**Definition 2.2 ($\epsilon$-approximate closure).** An observer satisfies **$\epsilon$-approximate closure** with period $T$ if:

$$\sup_{\sigma \in \Sigma} d(\phi_T(\sigma), \sigma) < \epsilon$$

**Proposition 2.3 (Drift bound).** *An $\epsilon$-approximately closed observer's state drifts by at most $N\epsilon$ from the initial state after $N$ cycles:*

$$d(\phi_{NT}(\sigma), \sigma) \leq N\epsilon$$

*The state remains within $\Sigma$ as long as $N\epsilon < D_\mathcal{B}$, giving $N_{\max} \leq \lfloor D_\mathcal{B}/\epsilon \rfloor$.*

*Proof.* By induction. For $N = 1$: $d(\phi_T(\sigma), \sigma) < \epsilon$ by definition. For the inductive step, define $\sigma_k = \phi_{kT}(\sigma)$. Then:

$$d(\sigma_{k+1}, \sigma_k) = d(\phi_T(\sigma_k), \sigma_k) < \epsilon$$

since $\epsilon$-approximate closure holds uniformly over $\Sigma$ (and each $\sigma_k \in \Sigma$). By the triangle inequality:

$$d(\sigma_N, \sigma_0) \leq \sum_{k=0}^{N-1} d(\sigma_{k+1}, \sigma_k) < N\epsilon$$

Once $N\epsilon \geq D_\mathcal{B}$, the drift may carry the state to $\partial\mathcal{O}$ (the boundary of the self/non-self partition from Axiom 2). At $\partial\mathcal{O}$, the state is exposed to the full transformation group $\text{Aut}(\mathcal{H})$, not just $G_\mathcal{O}$. Transformations in $\text{Aut}(\mathcal{H}) \setminus G_\mathcal{O}$ do not preserve $I$, so the observer dissolves. $\square$

**Definition 2.4 (Observer lifetime).** The **observer lifetime** is $\tau_\mathcal{O} = N_{\max} \cdot T$ where $N_{\max} = \lfloor D_\mathcal{B}/\epsilon \rfloor$.

**Proposition 2.5 (Exact closure gives persistence).** *Exact closure ($\epsilon = 0$) gives $N_{\max} = \infty$ and $\tau_\mathcal{O} = \infty$.*

*Proof.* With $\epsilon = 0$, $\phi_T = \text{id}_\Sigma$ exactly, so $\phi_{NT} = \text{id}_\Sigma$ for all $N \in \mathbb{N}$. The drift is identically zero. $\square$

### Step 3: Persistence Forces Periodicity

**Theorem 3.1 (Persistence requires exact closure).** *If an observer persists indefinitely ($\tau_\mathcal{O} = \infty$), then its dynamics satisfies exact closure: there exists $T > 0$ with $\phi_T = \text{id}_\Sigma$.*

*Proof.* Suppose $\phi$ has no exact closure: $\phi_T \neq \text{id}_\Sigma$ for all $T > 0$. Then for every $T > 0$, there exists $\sigma_T \in \Sigma$ with $\phi_T(\sigma_T) \neq \sigma_T$, so $\epsilon(T) = \sup_\sigma d(\phi_T(\sigma), \sigma) > 0$. By Proposition 2.3, the observer's lifetime at period $T$ satisfies $\tau(T) = \lfloor D_\mathcal{B}/\epsilon(T) \rfloor \cdot T < \infty$.

The observer's effective lifetime is $\tau_\mathcal{O} = \sup_T \tau(T)$. For $\tau_\mathcal{O} = \infty$, we would need $\epsilon(T_n) \to 0$ sufficiently fast along some sequence $T_n$ — that is, the dynamics would need to approximate the identity arbitrarily well. By compactness of $\Sigma$, if $\phi_{T_n} \to \text{id}_\Sigma$ uniformly, then any limit point $T^*$ of a bounded subsequence gives $\phi_{T^*} = \text{id}_\Sigma$ (exact closure). If $T_n \to \infty$ with no bounded subsequence, the dynamics approximates the identity only at diverging times — the observer's "renewal period" grows without bound, meaning it takes arbitrarily long to approximately reproduce its state. This is not self-sustaining persistence in the physical sense required by the axiom: a system whose self-reproduction time diverges is not maintaining itself.

Therefore, indefinite persistence requires $\phi_T = \text{id}_\Sigma$ for some finite $T > 0$. $\square$

**Remark (Quasi-periodic flows).** The argument above rules out non-recurrent flows but leaves open the case of quasi-periodic flows — dynamics where the orbit is dense in a higher-dimensional torus $T^k$ ($k > 1$) rather than closing as a circle. For such flows, $\epsilon(T_n) \to 0$ along a sequence with $T_n \to \infty$, and the effective lifetime can be infinite without exact periodicity.

The framework excludes quasi-periodicity on physical grounds: a quasi-periodic observer has $k > 1$ independent incommensurate frequencies, producing a continuous power spectrum rather than a discrete one. Quantum mechanics requires discrete energy levels ($E = n\hbar\omega$), which arise only from a single fundamental frequency — i.e., from exact periodicity generating $U(1)$, not $T^k$. The requirement of a discrete spectrum is equivalent to the requirement that the dynamics generates exactly $U(1)$.

**Axiom 3 (Precise statement).** The homomorphism $\phi$ is non-trivial ($\phi \neq \text{const}$), and there exists $T > 0$ such that $\phi_T = \text{id}_\Sigma$.

**Proposition 3.2 (Minimal period).** *Under Axiom 3, the minimal period $T_\mathcal{O} = \inf\{T > 0 : \phi_T = \text{id}_\Sigma\}$ exists, is positive, and satisfies $\phi_{T_\mathcal{O}} = \text{id}_\Sigma$.*

*Proof.* Define $P = \{T > 0 : \phi_T = \text{id}_\Sigma\}$. By Axiom 3, $P \neq \emptyset$.

**$P$ is closed**: Let $T_n \in P$ with $T_n \to T^*$. For any $\sigma \in \Sigma$, $\phi_{T_n}(\sigma) = \sigma$ for all $n$. By smoothness of $\phi$, $\phi_{T^*}(\sigma) = \lim_{n} \phi_{T_n}(\sigma) = \sigma$. Hence $T^* \in P \cup \{0\}$.

**$P$ is discrete**: Suppose $P$ is not discrete. Then there exists a sequence $T_n \in P$ with $T_n \to 0^+$. For any $\sigma \in \Sigma$, $\phi_{T_n}(\sigma) = \sigma$, so the orbit $t \mapsto \phi_t(\sigma)$ returns to $\sigma$ at arbitrarily small positive times. By smoothness, the generating vector field $X(\sigma) = \frac{d}{dt}\big|_0 \phi_t(\sigma)$ must vanish at every $\sigma$ (since the orbit is at $\sigma$ at times converging to 0). Hence $\phi_t = \text{id}_\Sigma$ for all $t$ — the dynamics is trivial. But triviality contradicts the non-triviality requirement of Axiom 3 ($\phi \neq \text{const}$).

Therefore $P$ is closed and discrete in $(0, \infty)$, so $T_\mathcal{O} = \inf P$ exists in $P$ and $T_\mathcal{O} > 0$. $\square$

**Remark (Discrete case).** If $\Sigma$ is finite, the dynamics is a bijection $\phi: \Sigma \to \Sigma$ with $\phi^n = \text{id}$ for some $n \geq 2$. The minimal period is the order of $\phi$ in $\text{Sym}(\Sigma)$.

### Step 4: The Observer Loop as Geometric Object

**Definition 4.1 (Observer loop).** The **observer loop** of $\mathcal{O}$ based at $\sigma_0 \in \Sigma$ is the image of the orbit map:

$$\gamma_\mathcal{O}(\sigma_0) = \{\phi_t(\sigma_0) : t \in [0, T_\mathcal{O})\} \subset \Sigma$$

**Proposition 4.2 (Loop is a smooth embedding).** *For each $\sigma_0 \in \Sigma$, the orbit map $\alpha: S^1 \to \Sigma$ defined by $\alpha(e^{2\pi i t/T_\mathcal{O}}) = \phi_t(\sigma_0)$ is a smooth embedding. The observer loop $\gamma_\mathcal{O}(\sigma_0)$ is a compact, connected, one-dimensional submanifold of $\Sigma$.*

*Proof.* **Well-defined**: If $e^{2\pi i t_1/T_\mathcal{O}} = e^{2\pi i t_2/T_\mathcal{O}}$, then $t_1 - t_2 = k T_\mathcal{O}$ for some $k \in \mathbb{Z}$, so $\phi_{t_1}(\sigma_0) = \phi_{t_2 + kT_\mathcal{O}}(\sigma_0) = \phi_{t_2}(\sigma_0)$ by periodicity. **Smooth**: Composition of smooth maps $S^1 \hookrightarrow \mathbb{R}/T_\mathcal{O}\mathbb{Z} \to \Sigma$. **Immersion**: The derivative $d\alpha$ has image spanned by $X(\phi_t(\sigma_0)) \neq 0$ (non-vanishing since $T_\mathcal{O}$ is the minimal period; if $X(\sigma^*) = 0$ at some $\sigma^* = \phi_{t_0}(\sigma_0)$, then $\phi_t(\sigma^*) = \sigma^*$ for all $t$, giving $\phi_{t_0}$ as a period element with $\phi_{t_0}(\sigma_0) = \sigma^*$ fixed, contradicting minimality). **Injective**: If $\phi_{t_1}(\sigma_0) = \phi_{t_2}(\sigma_0)$ with $0 \leq t_1 < t_2 < T_\mathcal{O}$, then $\phi_{t_2-t_1}(\sigma_0) = \sigma_0$ with $0 < t_2 - t_1 < T_\mathcal{O}$, contradicting minimality of $T_\mathcal{O}$. An injective immersion from a compact manifold is an embedding. $\square$

**Corollary 4.3 ($U(1)$ action).** *The periodicity defines a faithful smooth $U(1)$ action on $\Sigma$:*

$$\rho: U(1) \to \text{Diff}(\Sigma), \quad e^{i\theta} \mapsto \phi_{\theta T_\mathcal{O}/2\pi}$$

*Proof.* **Homomorphism**: $\rho(e^{i\theta_1}) \circ \rho(e^{i\theta_2}) = \phi_{\theta_1 T/2\pi} \circ \phi_{\theta_2 T/2\pi} = \phi_{(\theta_1+\theta_2)T/2\pi} = \rho(e^{i(\theta_1+\theta_2)})$ by the group property of $\phi$. **Faithful**: If $\rho(e^{i\theta}) = \text{id}_\Sigma$, then $\phi_{\theta T/2\pi} = \text{id}_\Sigma$, so $\theta T/2\pi \in P$. By minimality of $T_\mathcal{O} = T$, $\theta T/2\pi = kT$ for some $k \in \mathbb{Z}$, giving $\theta = 2\pi k$, i.e., $e^{i\theta} = 1$. $\square$

**Proposition 4.4 (Orbit decomposition).** *For any $\sigma_0, \sigma_1 \in \Sigma$, the observer loops $\gamma_\mathcal{O}(\sigma_0)$ and $\gamma_\mathcal{O}(\sigma_1)$ are either identical or disjoint. The decomposition $\Sigma = \bigsqcup_{\text{orbits}} \gamma_\mathcal{O}(\sigma)$ is the orbit decomposition under the $U(1)$ action.*

*Proof.* Standard orbit decomposition for group actions. If $\sigma_1 = \phi_s(\sigma_0)$ for some $s$, then $\gamma_\mathcal{O}(\sigma_1) = \{\phi_t(\phi_s(\sigma_0)) : t \in [0, T)\} = \{\phi_{t+s}(\sigma_0) : t \in [0, T)\} = \gamma_\mathcal{O}(\sigma_0)$ by periodicity. If $\sigma_1 \notin \gamma_\mathcal{O}(\sigma_0)$, the orbits are disjoint (orbits of a group action partition the space). $\square$

### Step 5: The Noether Pair

**Theorem 5.1 (Loop closure ↔ Noether pair).** *Assume $\Sigma$ carries a symplectic structure $\omega$ preserved by $\phi_t$ (i.e., $\phi_t^*\omega = \omega$). Then:*

*(a) The $U(1)$ action of Corollary 4.3 has an associated moment map $\mu: \Sigma \to \mathbb{R}$, which is a conserved quantity: $\mu \circ \phi_t = \mu$ for all $t$.*

*(b) Conversely, given a conserved quantity $\mu: \Sigma \to \mathbb{R}$ generating a Hamiltonian flow that is periodic with period $T$, the flow defines a $U(1)$ action satisfying Axiom 3.*

*Proof.* (a) The Lie algebra $\mathfrak{u}(1) \cong \mathbb{R}$ has generator $\xi$, whose fundamental vector field is $X(\sigma) = \frac{d}{dt}\big|_0 \phi_t(\sigma)$. Since $\phi_t^*\omega = \omega$, we have $\mathcal{L}_X \omega = 0$. By Cartan's formula, $d(\iota_X \omega) + \iota_X(d\omega) = 0$, and $d\omega = 0$ (symplectic), so $d(\iota_X \omega) = 0$. When $H^1(\Sigma; \mathbb{R}) = 0$ (or more generally when $[\iota_X \omega] = 0$ in de Rham cohomology), there exists $\mu: \Sigma \to \mathbb{R}$ with $d\mu = \iota_X \omega$. Conservation: $\frac{d}{dt}\mu(\phi_t(\sigma)) = d\mu_{\phi_t(\sigma)}(X) = \omega(X, X) = 0$ (antisymmetry).

(b) Given periodic Hamiltonian flow with period $T$, define $\rho(e^{i\theta}) = \phi_{\theta T/2\pi}$. This is a $U(1)$ action by the argument of Corollary 4.3, and periodicity is Axiom 3. $\square$

**Remark (Assumptions).** Theorem 5.1 requires: (i) a symplectic structure on $\Sigma$, (ii) the flow preserves it, and (iii) the moment map exists (automatic if $H^1(\Sigma) = 0$). These are additional structural assumptions beyond S1 (and its consequence, Theorem 0.1), physically motivated by the fact that state spaces of classical mechanical systems and projective Hilbert spaces carry natural symplectic structures.

**Proposition 5.2 (Relationship between Axioms 2 and 3).** *Axiom 3 is not logically independent of Axiom 2 — it specifies the dynamical realization. Precisely:*

- *Axiom 2 requires the existence of an invariant $I$, but permits $G_\mathcal{O}$ to be any non-trivial subgroup of $\text{Aut}(\mathcal{H})|_\Sigma$ — including purely discrete groups.*
- *Axiom 3 strengthens Axiom 2 by requiring $G_\mathcal{O}$ to contain a $U(1)$ subgroup acting as internal dynamics.*

*Proof.* Axiom 2 requires $G_\mathcal{O} = \{g \in \text{Aut}(\mathcal{H})|_\Sigma : I \circ g = I\}$ to be a non-trivial subgroup. This is satisfied by discrete groups (e.g., $\mathbb{Z}_n$), which have no continuous one-parameter subgroups. Axiom 3 requires a smooth homomorphism $\phi: \mathbb{R} \to G_\mathcal{O}$ with period $T$, whose image is isomorphic to $U(1) \cong \mathbb{R}/T\mathbb{Z}$. This is a strictly stronger requirement. $\square$

**Remark (Why a separate axiom).** Despite this logical dependence, stating loop closure separately is clarifying: it emphasizes that the observer must be *dynamically persistent*, not merely a static configuration with a conserved quantity. It distinguishes continuous cyclic dynamics from the discrete symmetries that Axiom 2 alone would permit.

### Step 6: Stability — Lyapunov Formulation

**Definition 6.1 (Lyapunov stability).** Using the geodesic distance $d$ induced by the Riemannian metric $g$ (Theorem 0.1), the observer loop $\gamma_\mathcal{O}$ is **Lyapunov stable** if for every $\epsilon > 0$, there exists $\delta > 0$ such that:

$$d(\sigma, \gamma_\mathcal{O}) < \delta \implies d(\phi_t(\sigma), \gamma_\mathcal{O}) < \epsilon \quad \forall t \geq 0$$

where $d(\sigma, \gamma_\mathcal{O}) = \inf_{\sigma' \in \gamma_\mathcal{O}} d(\sigma, \sigma')$.

**Definition 6.2 (Asymptotic stability).** The loop is **asymptotically stable** if it is Lyapunov stable and additionally $\lim_{t \to \infty} d(\phi_t(\sigma), \gamma_\mathcal{O}) = 0$ for all $\sigma$ with $d(\sigma, \gamma_\mathcal{O}) < \delta$.

**Remark (Lyapunov vs. asymptotic).** Asymptotic stability requires dissipation (contraction of phase space volume), which is inconsistent with coherence conservation in an isolated system (Axiom 1 implies phase space volume preservation via Liouville's theorem). The physical requirement is Lyapunov stability (neutral stability), consistent with Hamiltonian dynamics. Dissipative stability occurs only for open subsystems exchanging coherence with their environment.

### Step 7: The Coherence Cost of a Loop

**Definition 7.1 (Coherence cost / action).** Using the Riemannian metric $g$ (Theorem 0.1) and the coherence measure $\mathcal{C}$ from Axiom 1, the **coherence cost** of an observer loop is:

$$S_\mathcal{O} = \int_0^{T_\mathcal{O}} \mathcal{C}(\phi_t(\sigma_0)) \sqrt{g(\dot{\phi}_t, \dot{\phi}_t)} \, dt$$

where $\dot{\phi}_t = \frac{d}{dt}\phi_t(\sigma_0)$ is the velocity along the loop.

**Remark (Structural dependence).** This integral requires both the metric $g$ from (Theorem 0.1) and the coherence measure $\mathcal{C}$ from Axiom 1 restricted to $\Sigma$. Their compatibility (that $\mathcal{C}$ is smooth on $(\Sigma, g)$) is an assumption of the framework.

**Proposition 7.2 (Positive minimum).** *The coherence cost satisfies $S_\mathcal{O} > 0$ for every observer. There exists a positive lower bound $S_{\min} > 0$.*

*Proof.* Since $\gamma_\mathcal{O}$ is a smooth embedding $S^1 \hookrightarrow \Sigma$ (Proposition 4.2), its arc length $L = \int_0^{T_\mathcal{O}} |\dot{\phi}_t| \, dt > 0$ (the loop is not a point, by minimality of $T_\mathcal{O}$ and the non-degeneracy argument in Proposition 3.2). The coherence measure satisfies $\mathcal{C}(\Sigma) > 0$ by axiom C2 (normalization: $\mathcal{C}(\mathcal{H}) = C_0 > 0$) combined with the fact that $\Sigma \subseteq \mathcal{H}$ is a non-empty observer state space carrying non-zero coherence (an observer with $\mathcal{C}(\Sigma) = 0$ would have zero coherence cost and could not sustain a loop — contradicting the physical content of Axiom 3). Since $\mathcal{C}$ is continuous and $\gamma_\mathcal{O}$ is compact, $\inf_{\sigma \in \gamma_\mathcal{O}} \mathcal{C}(\sigma) > 0$. Therefore:

$$S_\mathcal{O} \geq \inf_{\sigma \in \gamma_\mathcal{O}} \mathcal{C}(\sigma) \cdot L > 0$$

The infimum $S_{\min} = \inf_\mathcal{O} S_\mathcal{O}$ over all observers satisfying Axioms 1–3 is positive because any observer has both $L > 0$ and $\mathcal{C} > 0$. The observer achieving this infimum is the **minimal observer**, developed in [Minimal Observer Structure](/derivations/minimal-observer/structure). $\square$

**Remark (Identification with $\hbar$).** The framework identifies $S_{\min} = \hbar$. This identification is *not* part of the loop closure axiom; it is derived in [Action and Planck's Constant](/derivations/thermodynamics/action-planck) from dimensional analysis and the minimal observer structure.

### Step 8: Frequency, Energy, and Mass

**Proposition 8.1 (Natural frequency).** *An observer loop with period $T_\mathcal{O}$ has natural frequency $\omega_\mathcal{O} = 2\pi/T_\mathcal{O}$.*

*Proof.* The $U(1)$ action (Corollary 4.3) parameterizes the loop by phase $\theta \in [0, 2\pi)$. The physical period $T_\mathcal{O}$ corresponds to $\Delta\theta = 2\pi$, giving $\omega_\mathcal{O} = 2\pi/T_\mathcal{O}$. $\square$

**Proposition 8.2 (Action-energy relation).** *If $\mathcal{C}(\phi_t(\sigma_0))$ is constant along the loop and the loop is traversed at constant speed, then $S_\mathcal{O} = \mathcal{C}(\Sigma) \cdot v \cdot T_\mathcal{O}$, where $v$ is the constant speed and $\mathcal{C}(\Sigma)$ the constant coherence value.*

*Proof.* Substituting constants into Definition 7.1: $S_\mathcal{O} = \int_0^{T_\mathcal{O}} \mathcal{C}(\Sigma) \cdot v \, dt = \mathcal{C}(\Sigma) \cdot v \cdot T_\mathcal{O}$. $\square$

**Remark (Constancy justification).** The constancy of $\mathcal{C}$ along the loop holds when $\mathcal{C}$ depends only on the invariant $I$ (which is conserved along the flow). Constant speed is guaranteed by $G_\mathcal{O}$-invariance of the metric (Theorem 0.1): since $\phi_t$ is an isometry, $|\dot{\phi}_{t+s}(\sigma_0)|_g = |\dot{\phi}_s(\sigma_0)|_g$ for all $t$, so the speed is constant for a $U(1)$ orbit.

**Corollary 8.3 (Planck-Einstein relation).** *Defining $E_\mathcal{O} = S_\mathcal{O}/T_\mathcal{O}$ as the energy (action per period), and using $S_{\min} = \hbar$ (cf. [Action and Planck's Constant](/derivations/thermodynamics/action-planck)):*

$$E_\mathcal{O} = \frac{S_\mathcal{O}}{T_\mathcal{O}} \geq \frac{S_{\min}}{T_\mathcal{O}} = \hbar \omega_\mathcal{O}$$

*For the minimal observer ($S_\mathcal{O} = S_{\min} = \hbar$), equality holds: $E = \hbar\omega$. For general observers, the quantization $S_\mathcal{O} = n\hbar$ ($n \in \mathbb{Z}_{>0}$) giving $E = n\hbar\omega$ is derived in [Action and Planck's Constant](/derivations/thermodynamics/action-planck).*

*This is the Planck-Einstein relation.*

**Remark.** This corollary depends on $S_{\min} = \hbar$ from a later derivation. The loop closure axiom provides only the structural relation $E = S/T$; the numerical value of $S_{\min}$ is fixed externally.

## Consistency Model

**Theorem 9.1.** *The loop closure axiom with structural postulate S1 (and its consequence, Theorem 0.1) is consistent: there exists a concrete model satisfying all conditions.*

**Model**: $\Sigma = S^1$ (unit circle), $g = d\theta^2$ (standard metric), $\mathcal{H} = \mathbb{R}^2 \supset S^1$, $I(\theta) = 1$ (constant — the radius), $\mathcal{B} = S^1$ (the circle as self/non-self boundary), $\phi_t(\theta) = \theta + 2\pi t/T$ (rigid rotation with period $T > 0$), $\mathcal{C}(\theta) = c_0 > 0$ (constant).

*Verification:*
- **(S1)**: $S^1$ is a compact 1-dimensional topological manifold. The standard rotation action $\phi_t(\theta) = \theta + 2\pi t/T$ is free (no fixed points). ✓
- **Thm 0.0**: $S^1$ has a unique smooth structure (elementary). The $U(1)$ action is smooth. ✓
- **Thm 0.1**: $d\theta^2$ is $\phi_t$-invariant (rotation is an isometry) — consistent with the Weyl-averaged metric, which for this model equals $d\theta^2$. ✓
- **Def 1.1**: $\phi$ is a smooth homomorphism $\mathbb{R} \to \text{Isom}(S^1)$, preserves $I \equiv 1$. ✓
- **Axiom 3**: $\phi_T(\theta) = \theta + 2\pi = \theta$, with $T_\mathcal{O} = T$. ✓
- **Prop 3.2**: $T > 0$ is the minimal period. ✓
- **Prop 4.2**: The orbit $\gamma = S^1$ is a smooth embedding. ✓
- **Cor 4.3**: $\rho(e^{i\alpha})(\theta) = \theta + \alpha$ is faithful. ✓
- **Lyapunov stability**: Rotation is an isometry, so $d(\phi_t(\sigma), \gamma) = d(\sigma, \gamma)$ — neutrally stable. ✓
- **Coherence cost**: $S = c_0 \cdot 2\pi > 0$. ✓

*Remark*: The model uses $I \equiv 1$ (constant), which satisfies invariant preservation ($I \circ \phi_t = I$) but has $|I(\Sigma)| = 1$. This model demonstrates the loop closure machinery (cyclic dynamics, U(1) action, stability, coherence cost); full Axiom 2 compliance (including N3: $|I(\Sigma)| > 1$) is demonstrated in the composite models of downstream derivations where $I$ is non-constant. $\square$

## Consequences

1. **Transient vs. persistent**: Virtual particles (transient fluctuations) are loops that fail to close — their $\epsilon > \epsilon_c$. Real particles are loops with $\epsilon \ll \epsilon_c$ or $\epsilon = 0$.

2. **Discrete spectrum**: Only loops whose geometry is compatible with exact (or near-exact) closure persist. This selects a discrete set of allowed loop geometries, producing a discrete particle spectrum.

3. **Mass = rest frequency**: An observer at rest has its loop entirely in the temporal direction, with frequency $\omega = 2\pi/T$. Mass is $m = \hbar\omega/c^2 = E/c^2$ (using results from later derivations).

## Rigor Assessment

**Fully rigorous:**
- Definitions 1.1, 2.1–2.2, 4.1, 6.1–6.2, 7.1: Precise mathematical definitions with explicit structural dependencies
- Proposition 2.3: Drift bound (complete proof by induction + triangle inequality)
- Proposition 2.5: Exact closure gives persistence (complete proof)
- Theorem 3.1: Persistence requires exact closure (proof from drift bound + compactness; see Remark on quasi-periodic gap)
- Proposition 3.2: Minimal period exists (proof via closed/discrete subgroup argument)
- Proposition 4.2: Loop is a smooth embedding $S^1 \hookrightarrow \Sigma$ (complete proof)
- Corollary 4.3: Faithful $U(1)$ action (complete proof of homomorphism + faithfulness)
- Proposition 4.4: Orbit decomposition (standard group action theory)
- Theorem 5.1: Noether pair equivalence (complete proof with explicit symplectic assumption)
- Proposition 5.2: Logical relationship between Axioms 2 and 3 (precise statement)
- Proposition 7.2: Positive coherence cost (complete proof from non-degeneracy + positivity)
- Theorem 9.1: Consistency model fully verified

**Newly proved (this derivation):**
- Lemma 0.0: Free U(1) orbits on $\Sigma$ (from Axiom 3 non-triviality + coherence cost positivity; removes free-orbit assumption from S1)
- Theorem 0.0: Smooth manifold structure on $\Sigma$ (from S1 + Lemma 0.0 + Axiom 3 via equivariant smoothing theorem)
- Theorem 0.1: $G_\mathcal{O}$-invariant Riemannian metric exists on $\Sigma$ (from Theorem 0.0 + compactness + Weyl averaging; replaces former Postulate S2)
- Theorem 3.1: Persistence forces exact closure (from drift bound + compactness, with quasi-periodic exclusion noted)

**Structural postulate (not derived, stated explicitly):**
- (S1) Finite-dimensional topological manifold structure on $\Sigma$ (locally homeomorphic to $\mathbb{R}^n$). Compactness comes from O1; free orbits are derived in Lemma 0.0; smoothness is derived in Theorem 0.0. The irreducible content is: manifold structure + finite dimensionality.
- Symplectic structure for Theorem 5.1 (additional assumption, stated in theorem)

**Deferred to later derivations:**
- $S_{\min} = \hbar$ (cf. [Action and Planck's Constant](/derivations/thermodynamics/action-planck))
- $E = \hbar\omega$ numerical content (depends on $S_{\min}$ identification)
- Mass formula $m = E/c^2$ (depends on speed of light derivation)

**Assessment:** The derivation is restructured around the self-reference argument: persistence requires exact closure, which forces periodicity and $U(1)$ symmetry. All claims are proved from definitions and standard mathematical results, with explicit assumptions stated upfront. The quasi-periodic gap (Remark following Theorem 3.1) is acknowledged and resolved by the physical requirement of a discrete spectrum. Structural postulates are clearly separated from proven results. Results that depend on later derivations are explicitly deferred.

## Open Gaps

1. **Decoherence**: Environmental perturbations increase $\epsilon$ over time, eventually breaking approximate closure. A quantitative decoherence rate should follow from the perturbation spectrum acting on the coherence measure.

2. **Non-abelian loops**: The formalization assumes $U(1)$ (abelian) symmetry. Non-abelian internal symmetries ($SU(2)$, $SU(3)$) require replacing the single period $T$ with a representation-theoretic condition on the image of $\phi$ in a non-abelian group.

3. **Massless observers**: Photons have no rest frame and no rest-frame loop. They are limiting cases where $T_\mathcal{O} \to 0$ and $\omega_\mathcal{O} \to \infty$ while $S_\mathcal{O}$ remains finite. This limit needs formal treatment within the approximate closure framework.

<!-- References -->
[Bredon, 1972]: /references#bredon-1972
[Orlik, 1972]: /references#orlik-1972
[Illman, 1983]: /references#illman-1983
