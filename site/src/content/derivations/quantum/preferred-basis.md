---
title: "Preferred Basis from Relational Invariants"
status: "provisional"
dependsOn: ["quantum/born-rule"]
enablesDerivation: ["quantum/measurement"]
tags: ["quantum"]
summary: "Measurement basis is determined by which relational invariants are generated in the observer-system interaction"
rigorLevel: "formal"
sourceSection: "12-quantum-mechanics"
lastUpdated: 2026-03-08
---

## Statement

**Theorem.** The preferred basis for measurement outcomes is the eigenbasis of the relational invariant generated in the Type III interaction between observer and system. This basis is the unique one in which the relational invariant takes definite values — the coherence-stable states. Different interaction configurations generate different relational invariants, hence different measurement bases. This resolves the basis problem structurally, with environmental decoherence recovered as the macroscopic limit.

## Derivation

### Step 1: The Basis Problem

**Definition 1.1 (Basis ambiguity).** In a Hilbert space $\mathcal{H}_S$ of dimension $d$ ([Born Rule](/derivations/quantum/born-rule), Theorem 7.1), any state $|\psi\rangle \in \mathcal{H}_S$ can be expanded in infinitely many orthonormal bases. The Born rule $P(k) = |\langle k | \psi \rangle|^2$ gives probabilities **given** a basis $\{|k\rangle\}$, but does not select the basis.

**Proposition 1.2 (Logical priority).** *The basis selection problem is logically prior to the probability problem. Without specifying the measurement basis, the Born rule is incomplete — it gives probabilities for every possible set of outcomes, but does not determine which set is physically realized in a given measurement.*

### Step 2: Relational Invariants and Self-Adjoint Operators

**Definition 2.1.** Let $\mathcal{O}$ (the observer/measurer) and $S$ (the system) undergo a Type III interaction ([Three Interaction Types](/derivations/interactions/three-types)). The interaction generates a relational invariant $I_{\mathcal{O}S}$ ([Relational Invariants](/derivations/interactions/relational-invariants)).

**Proposition 2.2 (Operator structure).** *The relational invariant $I_{\mathcal{O}S}$, restricted to the system's Hilbert space $\mathcal{H}_S$ for a fixed observer state $\sigma_\mathcal{O} \in \Sigma_\mathcal{O}$, defines a self-adjoint operator on $\mathcal{H}_S$:*

$$\hat{I}_{\mathcal{O}S} : \mathcal{H}_S \to \mathcal{H}_S$$

*Proof.* The relational invariant $I_{\mathcal{O}S}: \Sigma_\mathcal{O} \times \Sigma_S \to \mathbb{R}$ is real-valued (it encodes a coherence content, which is real by [Coherence Conservation](/derivations/axioms/coherence-conservation), Definition 1.1). For fixed $\sigma_\mathcal{O}$, the map $I_{\mathcal{O}S}(\sigma_\mathcal{O}, \cdot): \Sigma_S \to \mathbb{R}$ is a real-valued function on the system's state space.

In the Hilbert space formulation (Theorem 7.1 of [Born Rule](/derivations/quantum/born-rule)), real-valued observables correspond to self-adjoint (Hermitian) operators. The coherence content is preserved under unitary evolution (coherence conservation), so $\hat{I}_{\mathcal{O}S}$ commutes with the joint unitary dynamics — it is a constant of the motion. By the spectral theorem for self-adjoint operators on finite-dimensional Hilbert spaces, $\hat{I}_{\mathcal{O}S}$ has a complete orthonormal eigenbasis. $\square$

### Step 3: The Eigenbasis Is the Measurement Basis

**Theorem 3.1 (Basis selection).** *The measurement basis for the $\mathcal{O}$-$S$ interaction is the eigenbasis of $\hat{I}_{\mathcal{O}S}$:*

$$\hat{I}_{\mathcal{O}S} |k\rangle = \lambda_k |k\rangle, \quad k = 1, \ldots, d$$

*The states $\{|k\rangle\}$ are the possible measurement outcomes; the eigenvalues $\{\lambda_k\}$ are the measured values.*

*Proof.* The relational invariant $I_{\mathcal{O}S}$ is a conserved quantity (by [Coherence Conservation](/derivations/axioms/coherence-conservation), Axiom 1): once generated, it maintains a definite value. The post-measurement state must therefore be one in which $\hat{I}_{\mathcal{O}S}$ takes a definite value — an eigenstate.

A superposition $|\psi\rangle = \sum_k \psi_k |k\rangle$ with $\lambda_j \neq \lambda_k$ for some $j, k$ does not have a definite value of $\hat{I}_{\mathcal{O}S}$:

$$\hat{I}_{\mathcal{O}S}|\psi\rangle = \sum_k \lambda_k \psi_k |k\rangle \neq \lambda |\psi\rangle \text{ for any single } \lambda$$

Therefore the post-measurement state must be an eigenstate $|k\rangle$, and the measurement outcomes are the eigenstates. $\square$

### Step 4: Coherence Stability

**Definition 4.1.** A state $|\phi\rangle \in \mathcal{H}_S$ is **coherence-stable** with respect to $\hat{I}_{\mathcal{O}S}$ if:

$$\hat{I}_{\mathcal{O}S}|\phi\rangle = \lambda |\phi\rangle \quad \text{for some } \lambda \in \mathbb{R}$$

**Proposition 4.2.** *The eigenbasis $\{|k\rangle\}$ is the unique basis of coherence-stable states.*

*Proof.* By the spectral theorem, the eigenstates of a self-adjoint operator form a complete orthonormal basis, and they are the only states with definite eigenvalues. Any non-eigenstate has a variance $(\Delta I)^2 = \langle \hat{I}^2 \rangle - \langle \hat{I} \rangle^2 > 0$, meaning the relational invariant does not take a definite value. $\square$

**Proposition 4.3 (Uniqueness of basis).** *For non-degenerate $\hat{I}_{\mathcal{O}S}$ (all $\lambda_k$ distinct), the measurement basis is unique up to phase.*

*Proof.* A non-degenerate self-adjoint operator has a unique eigenbasis (up to individual phase factors $|k\rangle \mapsto e^{i\phi_k}|k\rangle$, which do not affect the Born probabilities $|\langle k|\psi\rangle|^2$). $\square$

### Step 5: Different Interactions, Different Bases

**Theorem 5.1 (Interaction-dependence of basis).** *The measurement basis is a property of the Type III interaction, not of the system alone. Different interactions generate different relational invariants, hence different eigenbases.*

*Proof.* Let $\hat{I}^{(A)}_{\mathcal{O}S}$ and $\hat{I}^{(B)}_{\mathcal{O}S}$ be the relational invariants generated by two different Type III interactions between the same observer $\mathcal{O}$ and system $S$. If the interactions differ (different interaction Hamiltonians), then in general $\hat{I}^{(A)} \neq \hat{I}^{(B)}$, and their eigenbases $\{|a_k\rangle\}$ and $\{|b_k\rangle\}$ differ.

*Example.* A Stern-Gerlach apparatus oriented along $\hat{z}$ generates $\hat{I}^{(z)}_{\mathcal{O}S} \propto \hat{S}_z$, with eigenbasis $\{|\uparrow_z\rangle, |\downarrow_z\rangle\}$. The same apparatus rotated to $\hat{x}$ generates $\hat{I}^{(x)}_{\mathcal{O}S} \propto \hat{S}_x$, with eigenbasis $\{|\uparrow_x\rangle, |\downarrow_x\rangle\}$. The physical configuration of the observer determines which relational invariant is generated. $\square$

### Step 6: Complementarity

**Definition 6.1.** Two observables $\hat{I}^{(A)}$ and $\hat{I}^{(B)}$ are **complementary** if they do not commute: $[\hat{I}^{(A)}, \hat{I}^{(B)}] \neq 0$.

**Theorem 6.2 (Complementarity from relational structure).** *Complementary observables arise when different Type III interactions generate non-commuting relational invariants. No state can be simultaneously an eigenstate of both.*

*Proof.* If $[\hat{I}^{(A)}, \hat{I}^{(B)}] \neq 0$, then by a standard result in linear algebra, there is no common eigenbasis. The system cannot simultaneously have definite values for both relational invariants.

This non-commutativity is structural: different Type III interactions probe different "directions" in the joint state space $\Sigma_\mathcal{O} \times \Sigma_S$. The relational invariants they generate act on different subspaces, and these subspaces are generically non-commuting. $\square$

**Corollary 6.3 (Uncertainty from complementarity).** *For complementary observables $\hat{I}^{(A)}, \hat{I}^{(B)}$ with $[\hat{I}^{(A)}, \hat{I}^{(B)}] = i\hat{C}$:*

$$\Delta I^{(A)} \cdot \Delta I^{(B)} \geq \frac{1}{2}|\langle \hat{C} \rangle|$$

*This is the Robertson uncertainty relation — a consequence of non-commuting relational invariants.*

### Step 7: Recovery of Decoherence

**Proposition 7.1 (Structural decoherence).** *The standard decoherence program (Zurek's pointer basis) is recovered as the macroscopic limit of the relational-invariant mechanism.*

*Proof sketch.* When the observer $\mathcal{O}$ is a macroscopic apparatus with many internal degrees of freedom, the Type III interaction with $S$ generates a relational invariant $\hat{I}_{\mathcal{O}S}$ whose eigenbasis is determined by the apparatus's macroscopic configuration. Simultaneously, $S$ interacts (via Type III) with environmental observers $\mathcal{E}_1, \mathcal{E}_2, \ldots$, generating relational invariants $\hat{I}_{\mathcal{E}_1 S}, \hat{I}_{\mathcal{E}_2 S}, \ldots$.

The pointer basis is the common eigenbasis of all these relational invariants — the basis that is simultaneously stable under all environmental interactions. This is Zurek's einselection criterion: the pointer states are those that survive decoherence by the environment.

The framework adds precision: the pointer basis is exact (determined by the eigenbasis of the joint relational invariant), not approximate (off-diagonal elements suppressed but never exactly zero, as in standard decoherence theory). $\square$

**Proposition 7.2 (Comparison with decoherence).** *The relationship between the two approaches:*

| Decoherence program | Observer-centric framework |
|---|---|
| Environment selects pointer basis | Relational invariant selects eigenbasis |
| Pointer basis robust against entanglement | Eigenbasis is coherence-stable under $\hat{I}_{\mathcal{O}S}$ |
| Decoherence is approximate | Basis selection is exact (spectral theorem) |
| Requires tracing over environment | No trace — basis determined by interaction structure |
| Basis depends on environment partition | Basis depends on which relational invariant is generated |

### Step 8: Degenerate Spectra

**Proposition 8.1 (Degeneracy resolution).** *When $\hat{I}_{\mathcal{O}S}$ has degenerate eigenvalues ($\lambda_j = \lambda_k$ for $j \neq k$), the eigenbasis is not unique within the degenerate subspace. The degeneracy is resolved by higher-order relational invariants from the same interaction.*

*Proof sketch.* A Type III interaction between $\mathcal{O}$ and $S$ may generate multiple relational invariants $\hat{I}^{(1)}, \hat{I}^{(2)}, \ldots$ (corresponding to different conserved quantities). The measurement basis is the simultaneous eigenbasis of the maximal commuting set $\{\hat{I}^{(1)}, \hat{I}^{(2)}, \ldots\}$. This is the standard procedure: a complete set of commuting observables (CSCO) uniquely determines the measurement basis, resolving all degeneracies. $\square$

## Rigor Assessment

**Fully rigorous:**
- Proposition 2.2: $\hat{I}_{\mathcal{O}S}$ is self-adjoint (real-valued + conserved → Hermitian operator via spectral theorem)
- Theorem 3.1: Eigenbasis is the measurement basis (definite value requirement + spectral theorem)
- Proposition 4.2–4.3: Uniqueness of coherence-stable basis (standard spectral theory)
- Theorem 6.2: Complementarity from non-commutativity (standard linear algebra)

**Rigorous given axioms:**
- Theorem 5.1: Different interactions give different bases (follows from different relational invariants having different spectra)
- Corollary 6.3: Robertson uncertainty (standard operator inequality)
- Proposition 8.1: Degeneracy resolution via CSCO (standard quantum mechanics)

**Provisional:**
- The mechanism by which the physical configuration of $\mathcal{O}$ determines **which** relational invariant is generated is not formalized. This requires a map from interaction Hamiltonians $H_{\text{int}}$ to relational invariants $I_{\mathcal{O}S}$. The natural candidate is: $I_{\mathcal{O}S}$ is the conserved quantity corresponding to the symmetry of $H_{\text{int}}$ (by Noether's theorem), but the explicit construction has not been carried out.
- The recovery of Zurek's pointer basis (Proposition 7.1) is a structural argument, not a quantitative derivation. Showing that the joint eigenbasis of multiple relational invariants converges to the environmentally selected pointer basis requires the statistics of many-body Type III interactions.
- The extension to continuous spectra (position, momentum) requires replacing discrete eigenbases with spectral measures, which is mathematically standard but not carried out explicitly here.

**Assessment:** The core result — the measurement basis is the eigenbasis of the relational invariant — is rigorously established from spectral theory and coherence conservation. The main provisional elements are the interaction-to-invariant map and the quantitative recovery of decoherence.

## Open Gaps

1. **Interaction Hamiltonian mapping**: The explicit map $H_{\text{int}} \mapsto \hat{I}_{\mathcal{O}S}$ from the physical interaction to the relational invariant is needed for concrete predictions.
2. **Contextuality**: The Kochen-Specker theorem shows that quantum observables cannot all have simultaneous definite values. This should follow from the relational-invariant mechanism: each measurement context generates a specific $\hat{I}_{\mathcal{O}S}$, and values are context-dependent. Explicit formalization is needed.
3. **Continuous observables**: Extension to position, momentum, and other continuous-spectrum observables via spectral measures.
4. **Weak measurements**: For partial (weak) Type III interactions, the relational invariant is not fully generated, and the system is left in a superposition of eigenstates with small disturbance. This should connect to the weak measurement formalism (Aharonov, Albert, Vaidman 1988).
