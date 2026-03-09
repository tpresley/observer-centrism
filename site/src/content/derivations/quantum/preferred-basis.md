---
title: "Preferred Basis from Relational Invariants"
status: "draft"
dependsOn: ["quantum/born-rule"]
enablesDerivation: ["quantum/measurement"]
tags: ["quantum"]
summary: "Measurement basis is determined by which relational invariants are generated in the observer-system interaction"
rigorLevel: "semi-formal"
sourceSection: "12-quantum-mechanics"
lastUpdated: 2026-03-08
---

## Statement

The preferred basis for measurement outcomes -- the specific observable in which a measurement yields definite results -- is determined by the relational invariant structure of the Type III interaction between observer and system. Different interaction configurations generate different relational invariants, and each relational invariant selects a basis. This resolves the basis problem without invoking environmental decoherence as the fundamental mechanism.

## Derivation

### Step 1: The Basis Problem

In standard quantum mechanics, a state $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$ can be expanded in infinitely many bases. If we define $|+\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |1\rangle)$ and $|-\rangle = \frac{1}{\sqrt{2}}(|0\rangle - |1\rangle)$, then $|\psi\rangle$ is equally well expressed as a superposition of $|+\rangle$ and $|-\rangle$. Yet a measurement apparatus yields outcomes in one specific basis, not another. Why?

The [Born rule](/derivations/quantum/born-rule) gives the probability of each outcome **given** a basis, but it does not select the basis. The basis problem is logically prior to the probability problem.

### Step 2: Relational Invariants Select the Basis

Consider observer $\mathcal{O}$ (the measurer) and system $S$ undergoing a [Type III interaction](/derivations/interactions/three-types). By definition, a Type III interaction generates a new [relational invariant](/derivations/interactions/relational-invariants) $I_{\mathcal{O}S}$ on the joint state space $\Sigma_\mathcal{O} \times \Sigma_S$.

The relational invariant $I_{\mathcal{O}S}$ is a function:

$$I_{\mathcal{O}S}: \Sigma_\mathcal{O} \times \Sigma_S \to \mathbb{R}$$

that is conserved under the joint dynamics and irreducible to properties of $\mathcal{O}$ or $S$ alone.

**Key observation.** The relational invariant $I_{\mathcal{O}S}$ determines a **preferred decomposition** of the system's state space. The eigenbasis of $I_{\mathcal{O}S}$ -- the basis in which $I_{\mathcal{O}S}$ is diagonal on $\Sigma_S$ -- is the measurement basis.

Formally, for each fixed observer state $\sigma_\mathcal{O} \in \Sigma_\mathcal{O}$, the function $I_{\mathcal{O}S}(\sigma_\mathcal{O}, \cdot): \Sigma_S \to \mathbb{R}$ defines a real-valued function on the system's state space. This function has a spectral decomposition:

$$I_{\mathcal{O}S}(\sigma_\mathcal{O}, \cdot) = \sum_k \lambda_k |k\rangle\langle k|$$

where $\{|k\rangle\}$ is the eigenbasis and $\{\lambda_k\}$ are the eigenvalues. The states $|k\rangle$ are the possible measurement outcomes. The eigenvalues $\lambda_k$ are the measured values.

### Step 3: Different Interactions, Different Bases

The measurement basis is not a property of the system alone -- it is a property of the **interaction**. Different Type III interactions between $\mathcal{O}$ and $S$ generate different relational invariants, and different relational invariants have different eigenbases.

**Example.** Consider a spin-$\frac{1}{2}$ system $S$:

- A Stern-Gerlach apparatus oriented along $\hat{z}$ implements a Type III interaction whose relational invariant $I^{(z)}_{\mathcal{O}S}$ is diagonal in the $\{|\uparrow_z\rangle, |\downarrow_z\rangle\}$ basis. The measurement yields "spin up" or "spin down" along $z$.

- The same apparatus rotated to $\hat{x}$ implements a different Type III interaction with relational invariant $I^{(x)}_{\mathcal{O}S}$ diagonal in $\{|\uparrow_x\rangle, |\downarrow_x\rangle\}$. The measurement yields spin outcomes along $x$.

The physical configuration of the measuring observer determines **which** relational invariant is generated, and therefore which basis is selected.

### Step 4: Why the Eigenbasis Is Preferred

The eigenbasis of $I_{\mathcal{O}S}$ is preferred because it is the unique basis in which the post-measurement state is **coherence-stable**. This means:

**Definition.** A state $|k\rangle$ of $S$ is **coherence-stable** with respect to a relational invariant $I_{\mathcal{O}S}$ if the relational invariant takes a definite value on $|k\rangle$:

$$I_{\mathcal{O}S} |k\rangle = \lambda_k |k\rangle$$

In any other basis, the relational invariant does not take a definite value. A superposition $|\psi\rangle = \alpha|k\rangle + \beta|k'\rangle$ (with $\lambda_k \neq \lambda_{k'}$) gives:

$$\langle \psi | I_{\mathcal{O}S} | \psi \rangle = |\alpha|^2 \lambda_k + |\beta|^2 \lambda_{k'}$$

but $I_{\mathcal{O}S}|\psi\rangle \neq \lambda |\psi\rangle$ for any single $\lambda$. The relational invariant is **indefinite** on such superpositions.

Since the relational invariant is a conserved quantity (by [Coherence Conservation](/derivations/axioms/coherence-conservation)), the post-measurement state must be one in which $I_{\mathcal{O}S}$ takes a definite conserved value. Only eigenstates of $I_{\mathcal{O}S}$ satisfy this requirement. Therefore the measurement outcomes are the eigenstates, and the measurement basis is the eigenbasis.

### Step 5: Structural Decoherence

The standard decoherence program (Zurek, Zeh, Joos et al.) explains basis selection through the interaction between a system and its environment: the environment-preferred basis (the "pointer basis") is the one that is robust against entanglement with environmental degrees of freedom.

The framework's mechanism is structurally identical but more fundamental:

| Decoherence program | Observer-centric framework |
|---|---|
| Environment selects pointer basis | Relational invariant selects eigenbasis |
| Pointer basis is robust against environmental entanglement | Eigenbasis is coherence-stable under $I_{\mathcal{O}S}$ |
| Decoherence is approximate (off-diagonal elements suppressed, never exactly zero) | Basis selection is exact (eigenbasis is mathematically determined by $I_{\mathcal{O}S}$) |
| Requires tracing over environment | No trace required -- basis is determined by the specific interaction structure |
| Basis depends on which degrees of freedom are "environment" | Basis depends on which relational invariant is generated |

The decoherence program's results are **recovered** as the macroscopic limit of this mechanism. When the observer $\mathcal{O}$ is a macroscopic apparatus with many internal degrees of freedom, the Type III interaction generates a relational invariant whose eigenbasis coincides with Zurek's pointer basis. Environmental decoherence is the statistical effect of many Type III interactions with environmental observers, each generating relational invariants that reinforce the same basis.

### Step 6: Complementarity

Two observables $A$ and $B$ are **complementary** (in the sense of Bohr) if no state is simultaneously an eigenstate of both. In the framework, this means:

The relational invariants $I^{(A)}_{\mathcal{O}S}$ and $I^{(B)}_{\mathcal{O}S}$ generated by the two interaction configurations have **non-commuting** eigenbases:

$$[I^{(A)}_{\mathcal{O}S}, I^{(B)}_{\mathcal{O}S}] \neq 0$$

This non-commutativity is not a mysterious quantum postulate -- it reflects the fact that different Type III interactions generate relational invariants on different "directions" in the joint state space. A single Type III interaction generates one relational invariant with one eigenbasis. The system cannot simultaneously be in an eigenstate of two non-commuting relational invariants, because no single state can have definite values for both.

Complementarity is therefore the structural consequence of the fact that different interactions probe different aspects of the coherence geometry. It follows from the same source as the preferred basis: the relational invariant structure of the observer-system interaction.

## Rigor Assessment

**What is established:**
- The spectral decomposition of $I_{\mathcal{O}S}$ on $\Sigma_S$ is mathematically well-defined (given that $I_{\mathcal{O}S}$ is a self-adjoint operator on the Hilbert space)
- The coherence-stability argument (eigenstates are the only states with definite invariant values) is a standard consequence of spectral theory
- The structural parallel with decoherence is sound, and the recovery of pointer basis selection in the macroscopic limit is plausible

**What needs work:**
- The identification of $I_{\mathcal{O}S}$ as a self-adjoint operator on a Hilbert space assumes the Hilbert space structure derived in the [Born rule](/derivations/quantum/born-rule) derivation. This dependency should be made more explicit.
- The claim that the macroscopic limit recovers Zurek's pointer basis needs a quantitative demonstration -- the connection is currently stated as a structural parallel rather than derived
- The mechanism by which the physical configuration of $\mathcal{O}$ determines **which** $I_{\mathcal{O}S}$ is generated is not formalized. This requires a theory of how interaction Hamiltonians map to relational invariants.

## Open Gaps

1. **Interaction Hamiltonian mapping**: The derivation explains that different interaction configurations generate different relational invariants, but does not provide the map from the physical interaction (described by an interaction Hamiltonian $H_{\text{int}}$) to the resulting relational invariant $I_{\mathcal{O}S}$. This map is needed to make concrete predictions.
2. **Degenerate spectra**: When $I_{\mathcal{O}S}$ has degenerate eigenvalues ($\lambda_k = \lambda_{k'}$ for $k \neq k'$), the eigenbasis is not uniquely determined within the degenerate subspace. The framework needs to address how degeneracy is broken -- likely by higher-order relational invariants from the same interaction.
3. **Continuous observables**: For observables with continuous spectra (position, momentum), the eigenbasis is not normalizable in the standard sense. The preferred basis should be formulated in terms of spectral measures rather than discrete eigenstates.
4. **Contextuality**: The Kochen-Specker theorem shows that quantum observables cannot all be assigned definite values simultaneously. The framework's relational-invariant mechanism should naturally produce this result -- each measurement context generates a specific $I_{\mathcal{O}S}$, and the values are context-dependent. This connection deserves explicit formalization.
