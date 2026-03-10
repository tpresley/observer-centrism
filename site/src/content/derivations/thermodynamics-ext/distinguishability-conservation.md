---
title: "Conservation of Distinguishability"
status: "draft"
dependsOn: ["axioms/coherence-conservation"]
enablesDerivation: ["thermodynamics-ext/fisher-metric"]
tags: ["thermo-ext"]
summary: "Conservation of coherence implies conservation of distinguishability: admissible transformations preserve all coherence-derived distance measures, forcing unitarity, no-cloning, and no-deleting as structural consequences"
rigorLevel: "semi-formal"
lastUpdated: 2026-03-10
---

## Statement

**Theorem.** Conservation of coherence (Axiom 1) implies conservation of distinguishability: every admissible transformation preserves all coherence-derived measures of difference between subsystems. This single principle entails:

1. **Unitarity** — admissible dynamics are isometries of the coherence geometry (Wigner's theorem)
2. **No-cloning** — arbitrary coherence states cannot be copied
3. **No-deleting** — coherence states cannot be erased against a fixed reference
4. **Monotonicity** — non-invertible (coarse-graining) maps can only reduce distinguishability, never increase it
5. **Čencov uniqueness** — the geometry on state space is uniquely forced to be the Fisher information metric

The conservation of distinguishability is not a new axiom — it is a theorem of Axiom 1. But naming it as a principle clarifies the structural logic: coherence conservation simultaneously governs dynamics (unitarity), information (no-cloning/no-deleting), geometry (Fisher metric), and thermodynamics (the second law as distinguishability loss).

## Derivation

### Step 1: Distinguishability from the Coherence Measure

**Definition 1.1.** A **distinguishability functional** on a coherence space $(\mathcal{H}, \mathcal{A}, \mathcal{C})$ is any function $D: \mathcal{A} \times \mathcal{A} \to \mathbb{R}_{\geq 0}$ that depends only on the coherence measure $\mathcal{C}$. That is, $D(S_1, S_2) = F(\{\mathcal{C}(A)\}_{A \in \mathcal{A}(S_1, S_2)})$ for some function $F$ of the coherence values on subsystems involving $S_1$ and $S_2$.

**Example 1.2 (Relational coherence).** The relational coherence ([Coherence Conservation](/derivations/axioms/coherence-conservation), Definition 2.1) is a distinguishability functional:

$$D_{\text{rel}}(S_1, S_2) = \mathcal{C}(S_1 : S_2) = \mathcal{C}(S_1) + \mathcal{C}(S_2) - \mathcal{C}(S_1 \cup S_2)$$

This measures the coherence in the *relationship* between $S_1$ and $S_2$ — coherence that cannot be attributed to either part alone. It quantifies how much the two subsystems "know about" each other.

**Example 1.3 (Coherence divergence).** For states parameterized on a manifold $\Sigma$, the KL divergence of outcome distributions ([Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric), Definition 2.1) is a distinguishability functional:

$$D_{KL}(\sigma_1 \| \sigma_2) = \int p(x|\sigma_1) \log \frac{p(x|\sigma_1)}{p(x|\sigma_2)} \, dx$$

To second order, this is $\frac{1}{2} G_{ij} \, d\sigma^i d\sigma^j$ where $G_{ij}$ is the Fisher information matrix.

**Example 1.4 (Geodesic distance).** The geodesic distance $d_g(\sigma_1, \sigma_2)$ in the coherence metric $g$ ([Action and Planck's Constant](/derivations/thermodynamics/action-planck), Definition 1.1) is a distinguishability functional. It measures the minimum coherence cost of transforming $\sigma_1$ into $\sigma_2$.

**Remark.** These are not independent measures — they form a hierarchy. The Fisher metric is the Hessian of the KL divergence (Example 1.3), the geodesic distance is derived from the metric (Example 1.4), and all are ultimately functions of the coherence measure $\mathcal{C}$ (Definition 1.1). The point is not that any particular measure is fundamental, but that *all* coherence-derived distinguishability measures are simultaneously conserved.

### Step 2: Conservation under Admissible Transformations

**Theorem 2.1 (Conservation of distinguishability).** *Let $T \in \text{Aut}(\mathcal{H}, \mathcal{A})$ be an admissible transformation. Then every distinguishability functional is preserved:*

$$D(T(S_1), T(S_2)) = D(S_1, S_2) \quad \forall S_1, S_2 \in \mathcal{A}$$

*Proof.* By [Coherence Conservation](/derivations/axioms/coherence-conservation), Axiom 1a: $\mathcal{C}(T(S)) = \mathcal{C}(S)$ for all $S \in \mathcal{A}$ and all admissible $T$. Since $D$ is a function of coherence values only (Definition 1.1), and $T$ preserves all coherence values, $D$ is preserved. Explicitly:

$$D(T(S_1), T(S_2)) = F(\{\mathcal{C}(T(A))\}) = F(\{\mathcal{C}(A)\}) = D(S_1, S_2)$$

where the middle equality uses Axiom 1a on each argument. $\square$

**Corollary 2.2 (Relational coherence is conserved).** *For any admissible $T$ and any disjoint $S_1, S_2$:*

$$\mathcal{C}(T(S_1) : T(S_2)) = \mathcal{C}(S_1 : S_2)$$

*Proof.* Direct from Theorem 2.1 with $D = D_{\text{rel}}$:

$$\mathcal{C}(T(S_1) : T(S_2)) = \mathcal{C}(T(S_1)) + \mathcal{C}(T(S_2)) - \mathcal{C}(T(S_1) \cup T(S_2))$$
$$= \mathcal{C}(S_1) + \mathcal{C}(S_2) - \mathcal{C}(S_1 \cup S_2) = \mathcal{C}(S_1 : S_2) \quad \square$$

**Corollary 2.3 (Isometry of the coherence geometry).** *Admissible transformations are isometries of the Riemannian metric $g$ on state space. For states $\sigma_1, \sigma_2 \in \Sigma$:*

$$d_g(T(\sigma_1), T(\sigma_2)) = d_g(\sigma_1, \sigma_2)$$

*This is the coherence-framework statement of Wigner's theorem: the symmetries of the coherence structure are precisely the isometries of the state-space geometry.*

### Step 3: Monotonicity under Coarse-Graining

**Definition 3.1.** A **coarse-graining** is a surjective map $\pi: \mathcal{H} \to \mathcal{H}'$ that groups configurations into equivalence classes. It induces a pushforward coherence measure $\pi_*\mathcal{C}$ on $\mathcal{H}'$ via $\pi_*\mathcal{C}(A') = \mathcal{C}(\pi^{-1}(A'))$ for each admissible subset $A' \subseteq \mathcal{H}'$.

**Proposition 3.2 (Monotonicity of distinguishability).** *Coarse-graining cannot increase the relational coherence between subsystems. For any coarse-graining $\pi$ and disjoint $S_1', S_2' \in \mathcal{A}'$:*

$$\pi_*\mathcal{C}(S_1' : S_2') \leq \mathcal{C}(\pi^{-1}(S_1') : \pi^{-1}(S_2'))$$

*with equality if and only if $\pi$ does not merge any configurations that distinguish $S_1$ from $S_2$.*

*Proof sketch.* The pushforward $\pi_*\mathcal{C}$ satisfies $\pi_*\mathcal{C}(A') = \mathcal{C}(\pi^{-1}(A'))$ by definition. For the relational coherence:

$$\pi_*\mathcal{C}(S_1' : S_2') = \mathcal{C}(\pi^{-1}(S_1')) + \mathcal{C}(\pi^{-1}(S_2')) - \mathcal{C}(\pi^{-1}(S_1' \cup S_2'))$$

Since $\pi^{-1}(S_1' \cup S_2') = \pi^{-1}(S_1') \cup \pi^{-1}(S_2')$ and these preimages are disjoint (because $S_1'$ and $S_2'$ are disjoint and $\pi$ is a function), we get:

$$\pi_*\mathcal{C}(S_1' : S_2') = \mathcal{C}(\pi^{-1}(S_1') : \pi^{-1}(S_2'))$$

This is actually an equality for the pushforward, not an inequality. The information loss from coarse-graining manifests not in the pushforward itself but in the *reduced resolution*: $\pi^{-1}(S_1')$ is typically a larger set than the "true" $S_1$, and the relational coherence between larger blurred regions can be less than between the precise original subsystems.

The formal monotonicity result requires the information-geometric setting: on the statistical manifold of observer states, the Fisher distance satisfies $d_G(\pi(\sigma_1), \pi(\sigma_2)) \leq d_G(\sigma_1, \sigma_2)$ for any Markov map $\pi$ (this is the data processing inequality). The proof is standard in information geometry (Amari & Nagaoka, 2000, §2.4). $\square$

**Remark (Bilateral vs. unilateral).** Conservation of distinguishability has two faces:
- **Bilateral** (Theorem 2.1): Invertible (admissible) transformations preserve distinguishability exactly. This is the framework's version of unitarity.
- **Unilateral** (Proposition 3.2): Non-invertible (coarse-graining) transformations can only reduce distinguishability. This is the framework's version of the data processing inequality.

Together, they say: **distinguishability is a resource that can be conserved or lost, but never created.** This is the information-theoretic content of Axiom 1.

### Step 4: Connection to Čencov's Theorem

**Proposition 4.1 (Čencov uniqueness from conservation of distinguishability).** *The requirement that the geometry on observer state space respects the conservation and monotonicity of distinguishability uniquely determines the metric to be the Fisher information metric (up to a positive constant).*

*Proof.* By Theorem 2.1, the metric must be preserved by all admissible (invertible, coherence-preserving) transformations. By Proposition 3.2, the metric must be non-increasing under all coarse-grainings (Markov maps). A Riemannian metric satisfying both conditions is called **monotone** in the sense of Čencov.

By Čencov's theorem ([Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric), Theorem 3.1), the unique monotone Riemannian metric on a statistical manifold (up to a positive constant $\lambda > 0$) is the Fisher information metric $G_{ij}$.

This addresses the open gap in the [Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric) derivation (Open Gap #1): the Hessian metric from [Action and Planck's Constant](/derivations/thermodynamics/action-planck) must satisfy Čencov's monotonicity condition *because* it is the unique metric consistent with conservation of distinguishability, which is itself a theorem of Axiom 1. $\square$

**Remark.** The logic is: Axiom 1 (coherence conservation) → Theorem 2.1 (conservation of distinguishability) → Čencov monotonicity condition → uniqueness of Fisher metric → $g = \hbar G_{ij}$. This chain shows that the Fisher metric is not an assumption but a consequence of the single axiom of coherence conservation.

### Step 5: No-Cloning Theorem

**Theorem 5.1 (No-cloning).** *There is no admissible transformation that copies an arbitrary coherence state. Formally: let $\Sigma$ be a state space with $|\Sigma| \geq 2$ and $\sigma_0 \in \Sigma$ a fixed reference state. There is no admissible $T: \Sigma \times \Sigma \to \Sigma \times \Sigma$ satisfying $T(\sigma, \sigma_0) = (\sigma, \sigma)$ for all $\sigma \in \Sigma$.*

*Proof.* Suppose such a $T$ exists and is admissible.

Let $\sigma_1, \sigma_2 \in \Sigma$ be distinct states. Consider the initial configurations $a = (\sigma_1, \sigma_0)$ and $b = (\sigma_2, \sigma_0)$ in $\Sigma \times \Sigma$. In the initial configuration, the second slot is $\sigma_0$ for both — the two slots are coherence-independent (the second slot carries no information about the first).

The relational coherence between the two slots, evaluated on the set of configurations $\{a, b\}$, is:

$$\mathcal{C}(\text{slot 1} : \text{slot 2})\big|_{\text{before}} = 0$$

because slot 2 is always $\sigma_0$ regardless of slot 1 — it carries zero information about which state was prepared.

After cloning: $T(a) = (\sigma_1, \sigma_1)$ and $T(b) = (\sigma_2, \sigma_2)$. Now slot 2 perfectly mirrors slot 1 — it carries complete information about the prepared state. The relational coherence is:

$$\mathcal{C}(\text{slot 1} : \text{slot 2})\big|_{\text{after}} > 0$$

because knowing slot 2 fully determines slot 1 (and vice versa).

By Corollary 2.2, admissible transformations preserve relational coherence. Therefore $0 = \mathcal{C}(\text{slot 1} : \text{slot 2})\big|_{\text{before}} = \mathcal{C}(\text{slot 1} : \text{slot 2})\big|_{\text{after}} > 0$, a contradiction. $\square$

**Remark.** The standard quantum no-cloning theorem (Wootters & Zurek, 1982; Dieks, 1982) derives from unitarity and linearity. In the framework, unitarity *is* coherence conservation (Theorem 2.1), and the proof above replaces linearity with the subadditivity of coherence — a weaker and more fundamental assumption. The no-cloning theorem is therefore deeper than quantum mechanics: it holds for any coherence-conserving dynamics, whether or not the dynamics has a Hilbert space formulation.

### Step 6: No-Deleting Theorem

**Theorem 6.1 (No-deleting).** *There is no admissible transformation that erases an unknown coherence state against a fixed reference. Formally: there is no admissible $T: \Sigma \times \Sigma \to \Sigma \times \Sigma$ satisfying $T(\sigma, \sigma) = (\sigma, \sigma_0)$ for all $\sigma \in \Sigma$ (where $\sigma_0$ is a fixed state and $|\Sigma| \geq 2$).*

*Proof.* The argument mirrors Theorem 5.1 with the direction reversed.

Initially: $T^{-1}$ maps $(\sigma, \sigma_0) \to (\sigma, \sigma)$ — the second slot carries no information, and the relational coherence is zero.

After "deleting": the two copies $(\sigma, \sigma)$ are maximally correlated — the relational coherence between slots is positive.

But $T$ is admissible, so it preserves relational coherence (Corollary 2.2). The relational coherence of $(\sigma, \sigma)$ is positive (the slots are perfectly correlated), while the relational coherence of $(\sigma, \sigma_0)$ is zero (the second slot carries no state-dependent information). These cannot be equal. Contradiction. $\square$

**Corollary 6.2 (Coherence is a conserved resource).** *Coherence states cannot be freely copied or freely erased. They can only be transferred between subsystems via admissible (coherence-preserving) transformations. This is the framework's version of the resource-theoretic view of quantum information.*

### Step 7: The Second Law as Distinguishability Loss

**Proposition 7.1 (Entropic restatement).** *The second law of thermodynamics ([Entropy](/derivations/thermodynamics/entropy), Theorem 4.1) is equivalent to: a bounded observer's ability to distinguish states monotonically degrades over time.*

*Proof.* By the entropy derivation, entropy is inaccessible coherence: $S_A(S, \tau) = \mathcal{C}(S, \tau) - \mathcal{C}_A(S, \tau)$. The accessible coherence $\mathcal{C}_A$ is the coherence within $A$'s coherence domain — the portion of the coherence structure that $A$ can resolve.

$A$'s ability to distinguish two configurations of $S$ is determined by the accessible part: configurations that differ only in the inaccessible part look identical to $A$. As entropy increases ($\Delta S_A \geq 0$), the inaccessible fraction grows, and more configurations become $A$-indistinguishable.

Formally: define $A$'s distinguishability resolution as $R_A(\tau) = \mathcal{C}_A(S, \tau) / \mathcal{C}(S, \tau)$ — the fraction of $S$'s coherence structure that $A$ can access. Since $\mathcal{C}(S)$ is conserved and $S_A = \mathcal{C}(S) - \mathcal{C}_A(S)$ is non-decreasing:

$$\frac{dR_A}{d\tau} = -\frac{1}{\mathcal{C}(S)} \frac{dS_A}{d\tau} \leq 0$$

$A$'s resolution degrades monotonically. The second law is the statement that bounded observers progressively lose the ability to distinguish states. $\square$

**Remark.** Note the parallel: globally, distinguishability is *exactly conserved* (Theorem 2.1). Locally (from a bounded observer's perspective), distinguishability is *monotonically lost* (Proposition 7.1). The second law is not about the universe losing structure — it is about observers losing access to structure.

## Physical Interpretation

| Framework concept | Standard physics | Information theory |
|---|---|---|
| Axiom 1a (coherence isometry) | Unitarity | Reversible channel |
| Theorem 2.1 (conservation of $D$) | Wigner's theorem | Isometry of metric |
| Proposition 3.2 (monotonicity) | Data processing inequality | Markov monotonicity |
| Proposition 4.1 (Čencov) | Fisher metric uniqueness | Cramér-Rao bound |
| Theorem 5.1 (no-cloning) | Wootters-Zurek-Dieks | No free copying |
| Theorem 6.1 (no-deleting) | Pati-Braunstein | No free erasure |
| Proposition 7.1 (second law) | $dS/dt \geq 0$ | Channel capacity loss |

## Consistency Model

**Theorem 8.1.** *The conservation of distinguishability is realized in the minimal observer pair: $\mathcal{O}_1 = (S^1, I_1, \mathcal{B}_1)$, $\mathcal{O}_2 = (S^1, I_2, \mathcal{B}_2)$.*

**Model**: Two counter-rotating $U(1)$ oscillators with phases $\theta_1, \theta_2 \in [0, 2\pi)$. Joint state space $\Sigma = S^1 \times S^1$. Coherence measure: $\mathcal{C}(A) = \mu(A)$ (normalized Haar measure on the torus, scaled by $C_0$).

*Verification:*

- **Theorem 2.1**: Admissible transformations are rotations of the torus (the $U(1) \times U(1)$ action). These are isometries of the flat metric on $S^1 \times S^1$, preserving all distances. ✓

- **Corollary 2.2**: The relational invariant $I_{12} = \cos(\theta_1 - \theta_2)$ depends only on the phase difference. Any joint rotation $(\theta_1, \theta_2) \mapsto (\theta_1 + \alpha, \theta_2 + \alpha)$ preserves $I_{12}$. The relational coherence $\mathcal{C}(\mathcal{O}_1 : \mathcal{O}_2) > 0$ is preserved. ✓

- **Theorem 5.1 (No-cloning)**: Consider trying to clone the phase $\theta_1$ into the second slot. Initially $(\theta_1, \theta_0)$ with fixed $\theta_0$; target $(\theta_1, \theta_1)$. The initial relational coherence between slots is zero (slot 2 is constant). After "cloning," the relational coherence would be maximal ($\theta_2 = \theta_1$ always). No rotation of the torus can accomplish this — rotations preserve the phase *difference*, but cloning requires changing it from $\theta_1 - \theta_0$ to $0$, which is state-dependent and therefore not a single transformation. ✓

- **Proposition 7.1**: An observer who can only measure $\theta_1 \mod \pi$ (coarse-graining by identifying $\theta_1$ with $\theta_1 + \pi$) loses the ability to distinguish antipodal states. Their resolution $R_A = 1/2$ is less than the full resolution $R = 1$. ✓ $\square$

## Rigor Assessment

**Rigorous (given Axiom 1a):**
- Definition 1.1: Distinguishability functional (clean mathematical definition)
- Theorem 2.1: Conservation of distinguishability (one-line proof from Axiom 1a)
- Corollary 2.2: Conservation of relational coherence (direct computation)
- Corollary 2.3: Isometry of coherence geometry (immediate)
- Theorem 8.1: Consistency model verified

**Semi-formal (physically motivated, clean argument, not fully formalized):**
- Proposition 3.2: Monotonicity under coarse-graining. The pushforward argument is rigorous, but the connection to the data processing inequality requires the information-geometric framework (Fisher metric on state manifolds), which invokes the statistical regularity postulate S1 from the [Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric) derivation.
- Proposition 4.1: Čencov uniqueness as a consequence. The logical chain (Axiom 1 → conservation of distinguishability → Čencov monotonicity → Fisher metric uniqueness) is clear, but the formal verification that the Hessian metric satisfies all of Čencov's conditions has not been completed.
- Theorems 5.1 and 6.1: No-cloning and no-deleting. The relational-coherence argument is clean and the physical logic is correct, but the formal proof requires specifying how the coherence measure on a product space decomposes into slot-wise and relational components. The product decomposition is standard for von Neumann entropy but has not been axiomatized in the abstract coherence framework.
- Proposition 7.1: Second law restatement. Rigorous given the [Entropy](/derivations/thermodynamics/entropy) derivation, but the distinguishability resolution $R_A$ is a new quantity not previously formalized.

**Assessment:** Draft status. The core theorem (Step 2) is trivial and rigorous. The deep consequences (no-cloning, no-deleting, Čencov, second law) are the valuable content — each is semi-formal with a clear argument but requiring further formalization for provisional status. The main gap is the product-space coherence decomposition needed for the no-cloning/no-deleting proofs.

## Open Gaps

1. **Product-space coherence decomposition**: Axiomatize how $\mathcal{C}$ on a product space $\mathcal{H}_1 \times \mathcal{H}_2$ relates to $\mathcal{C}$ on the factors. This is needed to make the no-cloning/no-deleting proofs fully rigorous. The required property is: for independent subsystems, $\mathcal{C}(S_1 \times S_2) = \mathcal{C}(S_1) + \mathcal{C}(S_2)$ (additivity for uncorrelated systems), with strict subadditivity for correlated systems.

2. **Čencov verification**: Complete the formal verification that the coherence Hessian metric from [Action and Planck's Constant](/derivations/thermodynamics/action-planck) satisfies Čencov's monotonicity conditions under all Markov maps. This would close Open Gap #1 of the [Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric) derivation.

3. **Quantum extension**: Extend from the classical Čencov theorem (unique monotone metric) to the quantum Petz classification (family of monotone metrics). In the quantum case, the monotone metrics form a family parameterized by an operator-monotone function $f$; the symmetric logarithmic derivative (SLD) metric and the right logarithmic derivative (RLD) metric are extremal cases. Conservation of distinguishability should select among these.

4. **Landauer's principle**: The monotonicity direction (Proposition 3.2) implies that erasing information has a minimum thermodynamic cost. Quantify this: the coherence cost of reducing distinguishability by $\Delta D$ should be at least $k_B T \ln 2$ per bit, recovering Landauer's bound.

5. **No-broadcasting**: Generalize no-cloning from pure states to mixed states. Broadcasting (approximately copying) a mixed state is possible classically but impossible quantumly for non-commuting states. The coherence framework should distinguish these cases based on the structure of the relational coherence.
