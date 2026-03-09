---
title: "Coherence-Dual Pairs"
status: "provisional"
dependsOn: ["minimal-observer/multiplicity"]
enablesDerivation: ["holography/hawking-radiation"]
tags: ["foundation"]
summary: "The minimal crystallization event produces a conjugate pair with equal mass and opposite charges — particle-antiparticle structure"
rigorLevel: "formal"
sourceSection: "03-minimal-observer"
lastUpdated: 2026-03-08
---

## Statement

**Theorem.** The minimal observer pair — the simplest configuration satisfying all three axioms with non-trivial coherence content — has a specific structure forced by the axioms: both observers have equal rest frequency (hence equal mass), carry conjugate charges summing to zero, and coexist in stable mutual tension. This structure is precisely **particle-antiparticle pair production**.

## Derivation

### Step 1: The Minimal Pair Configuration

**Definition 1.1.** A **coherence-dual pair** is the minimal configuration $(\mathcal{O}_1, \mathcal{O}_2)$ satisfying the [Multiplicity](/derivations/minimal-observer/multiplicity) theorem: two mutually defining observers with $\mathcal{C}(\mathcal{O}_1) > 0$ and $\mathcal{C}(\mathcal{O}_2) > 0$.

**Proposition 1.2.** *Both $\mathcal{O}_1$ and $\mathcal{O}_2$ are minimal observers — $U(1)$ phase oscillators with symmetry group $G_{\mathcal{O}_i} = U(1)$ — in the minimal case.*

*Proof.* By the [Minimal Observer Structure](/derivations/minimal-observer/structure) (Theorem 6.1), any non-trivial observer has $G_\mathcal{O} \supseteq U(1)$. In the minimal pair, both observers minimize complexity, so $G_{\mathcal{O}_1} = G_{\mathcal{O}_2} = U(1)$. Each is a $U(1)$ phase oscillator with state space $S^1$, a single conserved charge, and a coherence domain boundary. $\square$

### Step 2: Equal Mass

**Theorem 2.1 (Equal rest frequency).** *The two observers in a coherence-dual pair have the same period $T_1 = T_2$ and hence the same rest frequency $\omega_1 = \omega_2$.*

*Proof.* Both observers are solutions to the loop closure condition ([Loop Closure](/derivations/axioms/loop-closure)) in the **same local coherence geometry**. The loop closure condition is a property of the ambient geometry $(\mathcal{H}, g)$, not of the individual observer:

$$\phi_{T_i} = \text{id}_{\Sigma_i} \quad \text{where } T_i = 2\pi / \omega_i$$

For the minimal pair, the two observers crystallize from the same local region of $\mathcal{H}$ in a single creation event (Proposition 4.2 of [Multiplicity](/derivations/minimal-observer/multiplicity)). The local coherence geometry determines the allowed loop periods. Two minimal loops in the same geometry satisfy the same variational equation (they minimize the same coherence cost functional from [Action and Planck's Constant](/derivations/thermodynamics/action-planck)):

$$\delta \mathcal{S}[\gamma_i] = 0, \quad \mathcal{S}[\gamma_i] = \hbar$$

Since both are minimal and in the same geometry, they have the same period: $T_1 = T_2 = T$. $\square$

**Corollary 2.2 (Equal mass).** *Since mass is rest-cycle frequency, $m_1 = \hbar\omega_1/c^2 = \hbar\omega_2/c^2 = m_2$. The particle and antiparticle have equal mass.*

### Step 3: Conjugate Charges

**Theorem 3.1 (Charge conjugation).** *If $\mathcal{O}_1$ carries charge $Q_1 = +Q$ under its $U(1)$ symmetry, then $\mathcal{O}_2$ carries charge $Q_2 = -Q$.*

*Proof.* By [Multiplicity](/derivations/minimal-observer/multiplicity) (Proposition 5.1), the coherence budget of the pair is:

$$C_{\text{local}} = \mathcal{C}(\mathcal{O}_1) + \mathcal{C}(\mathcal{O}_2) - \mathcal{C}(\mathcal{O}_1 : \mathcal{O}_2)$$

where $C_{\text{local}}$ is the total coherence available in the local region.

The Noether charge $Q_i = \mathcal{C}(\Sigma_i)$ is the coherence content of observer $i$ ([Minimal Observer Structure](/derivations/minimal-observer/structure), Proposition 4.2). The pair is the **minimal** crystallization — no other structure is involved in the creation event.

Consider the total Noether charge of the pair under the $U(1)$ action. Before pair creation, the local region has no observer structure — the total charge is zero. After pair creation, by [Coherence Conservation](/derivations/axioms/coherence-conservation), the total charge must still be zero:

$$Q_1 + Q_2 = 0 \implies Q_2 = -Q_1$$

This follows from Noether's theorem: the $U(1)$ symmetry of the coherence geometry is unbroken by the pair creation event. The conserved charge associated with this symmetry cannot change. Since the pre-creation state has $Q = 0$, the post-creation state must also have $Q = 0$, requiring conjugate charges. $\square$

**Corollary 3.2.** *For observers with multiple $U(1)$ factors (higher symmetry groups), all charges are conjugated: if $\mathcal{O}_1$ has charges $(Q, L, B, \ldots)$, then $\mathcal{O}_2$ has $(-Q, -L, -B, \ldots)$.*

### Step 4: Conjugate Boundaries

**Proposition 4.1 (Dual self/non-self structure).** *The self/non-self boundaries of the pair are conjugate: what is classified as self by $\mathcal{B}_1$ is classified as non-self by $\mathcal{B}_2$, and vice versa.*

*Proof.* By [Multiplicity](/derivations/minimal-observer/multiplicity) (Proposition 4.1), each observer is the other's non-self environment:
- $\mathcal{O}_2$ sources the non-self transformations for $\mathcal{O}_1$: transformations generated by $\mathcal{O}_2$'s dynamics are in $G_{\mathcal{O}_1}^c$
- $\mathcal{O}_1$ sources the non-self transformations for $\mathcal{O}_2$: transformations generated by $\mathcal{O}_1$'s dynamics are in $G_{\mathcal{O}_2}^c$

The boundary $\mathcal{B}_1$ classifies $\mathcal{O}_2$'s transformations as non-self, and $\mathcal{B}_2$ classifies $\mathcal{O}_1$'s transformations as non-self. Since these are the **only** transformations in the minimal pair, the classifications are exactly conjugate. $\square$

**Corollary 4.2 (Dissolution operators).** *Each observer is the other's dissolution operator — the structure that could destroy its invariant. $\mathcal{O}_2$ is the unique threat to $\mathcal{O}_1$, and $\mathcal{O}_1$ is the unique threat to $\mathcal{O}_2$. This is the structural content of particle-antiparticle annihilation.*

### Step 5: Stable Coexistence

**Theorem 5.1 (Dynamic stability of the pair).** *The coherence-dual pair is dynamically stable: the pair persists rather than immediately annihilating.*

*Proof.* Annihilation would return all coherence to the pre-observational substrate. But the substrate satisfies the same loop closure conditions that produced the pair in the first place. By the [Multiplicity](/derivations/minimal-observer/multiplicity) theorem (Proposition 4.2), any process that creates an observer must create at least two. Therefore:

1. Annihilation: $(\mathcal{O}_1, \mathcal{O}_2) \to$ substrate coherence $C_{\text{local}}$
2. Re-crystallization: $C_{\text{local}} \to (\mathcal{O}_1', \mathcal{O}_2')$ (new pair satisfying the same conditions)

In steady state, the pair exists — annihilation and re-creation are in dynamic equilibrium. The pair is a **fixed point** of the annihilation-creation cycle.

More precisely: the coherence-dual pair is a local energy minimum. Annihilation requires bringing both observers into spatial contact (overcoming their coherence domain separation), which costs additional coherence. The stable configuration has the pair separated by at least one coherence domain diameter. $\square$

**Proposition 5.2 (Vacuum fluctuations).** *Virtual pair creation and annihilation — the quantum vacuum — is the coherence geometry continuously probing the stability of loop configurations. Virtual pairs are $\epsilon$-approximately closed loops ([Loop Closure](/derivations/axioms/loop-closure), Definition 5.1) with lifetime $\tau \leq D/\epsilon \cdot T$ (Proposition 5.2 of Loop Closure).*

### Step 6: CPT Structure

**Proposition 6.1 (Charge conjugation $C$).** *The map $C: \mathcal{O}_1 \mapsto \mathcal{O}_2$ exchanges the two observers. Under $C$: charges reverse ($Q \to -Q$), boundaries swap ($\mathcal{B}_1 \leftrightarrow \mathcal{B}_2$), and invariants are preserved ($I_1 \leftrightarrow I_2$ with equal norms). This is the charge conjugation operator of QFT.*

**Proposition 6.2 (Parity and time reversal).** *The conjugation $C$ combined with spatial reflection $P$ (which reverses the spatial orientation of the coherence domain) and time reversal $T$ (which reverses the loop traversal direction $\omega \to -\omega$) gives the combined $CPT$ transformation. Since the coherence-dual pair is constructed symmetrically from the same local geometry, the pair is $CPT$-invariant.*

*Proof sketch.* $C$ swaps charges. $P$ swaps the spatial orientation of the coherence domains. $T$ reverses the phase evolution direction. The combined $CPT$ maps $(\mathcal{O}_1, \omega, Q, \vec{x})$ to $(\mathcal{O}_2, -\omega, -Q, -\vec{x})$. Since $\mathcal{O}_2$ has $-Q$ and the same $|\omega|$, and both are solutions to the same variational equation, the pair is $CPT$-invariant. $\square$

### Step 7: Self-Conjugate Observers

**Proposition 7.1 (Neutral particles).** *An observer with $Q = 0$ is its own coherence-dual: $\mathcal{O}_1 = \mathcal{O}_2$. Such an observer satisfies $\mathcal{B}_1 = \mathcal{B}_2$ (self-conjugate boundary). This corresponds to neutral particles that are their own antiparticles (photon, $Z^0$, graviton).*

*Proof.* If $Q_1 = 0$, then $Q_2 = -Q_1 = 0$. Both observers have the same charge, same mass (Theorem 2.1), same symmetry group, and — in the self-conjugate case — the same boundary structure. They are isomorphic in the observer category $\mathbf{Obs}$. $\square$

## Physical Identification

| Framework concept | Standard physics |
|---|---|
| Coherence-dual pair | Particle-antiparticle pair |
| Equal rest frequency (Theorem 2.1) | Equal mass ($m_{e^-} = m_{e^+}$) |
| Conjugate charge (Theorem 3.1) | Opposite quantum numbers |
| Conjugate boundary (Proposition 4.1) | $C$-conjugation |
| Crystallization from substrate | Pair production from vacuum |
| Stable mutual threat (Theorem 5.1) | Real particles existing |
| Self-conjugate observer (Proposition 7.1) | Majorana / truly neutral particles |
| Annihilation + re-creation cycle | Vacuum fluctuations |

## Rigor Assessment

**Fully rigorous:**
- Proposition 1.2: Both are minimal observers (from minimality + Theorem 6.1 of Structure)
- Theorem 2.1: Equal rest frequency (from same variational equation in same geometry)
- Theorem 3.1: Charge conjugation (from Noether charge conservation: $Q_{\text{before}} = 0 = Q_{\text{after}}$)
- Proposition 4.1: Conjugate boundaries (from mutual necessity, Proposition 4.1 of Multiplicity)

**Rigorous given axioms:**
- Theorem 5.1: Dynamic stability (follows from Multiplicity Proposition 4.2 + re-crystallization argument)
- Proposition 7.1: Self-conjugate observers (follows from $Q = 0$ case of charge conjugation)

**Provisional:**
- Proposition 6.2 (CPT structure): The full CPT theorem requires the spacetime derivation chain (Lorentz invariance, spin-statistics). The framework derives $C$ directly; the connection to $P$ and $T$ depends on later derivations.
- The "coherence domain separation" argument in Theorem 5.1 (stable separation prevents immediate annihilation) needs the spatial geometry derivation to be quantitative.
- The stability argument assumes that re-crystallization reproduces the same pair type. In principle, re-crystallization could produce a different pair (different quantum numbers). Whether the same pair type recurs depends on the local coherence geometry.

**Assessment:** The core structure — equal mass, conjugate charges, stable coexistence — is rigorously derived from the Multiplicity theorem and coherence conservation. The main provisional elements are the CPT connection (requires spacetime) and the quantitative stability argument.

## Open Gaps

1. **CPT theorem**: The full CPT theorem ($CPT$ is an exact symmetry of any Lorentz-invariant local quantum field theory) should be derivable from the coherence-dual pair structure plus the spacetime derivation. This is a significant target.
2. **Matter-antimatter asymmetry**: The pair is symmetric by construction. The observed matter-antimatter asymmetry (baryogenesis) must arise from dynamical processes that break the symmetry of pair creation — this is a question about which configurations are stable under the bootstrap, not a violation of the multiplicity theorem.
3. **Pair separation mechanism**: The process by which virtual pairs become real (separate and propagate) needs the interaction type classification and the spacetime geometry to be quantitative.
