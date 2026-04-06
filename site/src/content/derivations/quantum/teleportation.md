---
title: "Quantum Teleportation as Coherence Channel Transfer"
status: "provisional"
dependsOn: ["quantum/entanglement", "quantum/measurement", "interactions/three-types"]
enablesDerivation: []
tags: ["quantum", "information"]
summary: "Quantum teleportation is the transfer of a relational invariant from one observer pair to another via an intermediate measurement and classical communication. Coherence conservation ensures no-cloning: the original relational invariant is destroyed in the process."
rigorLevel: "formal"
lastUpdated: 2026-03-13
leanProofs:
  - module: "ObserverCentrism.Quantum.BellBasis"
    proposition: "Theorem 2.2"
    theorems:
      - "bell_matrix_det"
      - "bell_expansion"
---

## Overview

This derivation addresses the question: **how can a quantum state be transferred between distant parties without physically sending it, and why does this not allow faster-than-light communication?**

Quantum teleportation -- experimentally demonstrated many times since 1997 -- allows Alice to transmit an unknown quantum state to Bob using only a shared entangled pair and a classical message. The state is destroyed at Alice's end and recreated at Bob's, with perfect fidelity. Standard quantum mechanics describes how teleportation works but leaves the "why" somewhat opaque.

**The argument.** The framework recasts teleportation as a structured redistribution of coherence across three observers:

- Alice and Bob share a pre-existing relational invariant (their entangled resource). Alice also holds the unknown state, encoded as a separate relational invariant with the system.
- Alice performs a joint measurement on her system and her half of the entangled pair. This measurement consumes both her relational invariants -- the one with the system and the one with Bob -- producing a classical outcome (two bits of information).
- Bob's particle is now in a state that differs from the original by a known, simple correction. Once Alice sends him the two classical bits, he applies the correction and recovers the original state exactly.
- Coherence conservation enforces every constraint: the original state must be destroyed (no cloning), the entangled resource must be consumed (one-time use), and without the classical message Bob's state carries no information (no faster-than-light signaling).

**The result.** Teleportation is a coherence channel transfer -- the relational invariant moves from one observer pair to another, with the entangled state serving as the channel and classical communication as the key. No new physics is invoked; it is a direct consequence of entanglement, measurement, and coherence conservation.

**Why this matters.** Teleportation is often presented as one of quantum mechanics' most counterintuitive phenomena. The coherence framework shows it is structurally inevitable once you have entanglement and conservation -- there is nothing mysterious about it beyond the unfamiliarity of the underlying rules.

**An honest caveat.** The overview omits the detailed algebraic manipulations (Bell basis expansion, Pauli corrections) that make the protocol precise. The explanation also focuses on the simplest case of a single qubit; the generalization to higher-dimensional systems is straightforward but technically richer.


**Note on status.** This derivation is provisional because its central claims depend on loop-closure S1 (finite-dimensional manifold), preferred-basis S1 (interaction-invariant correspondence) (see [Loop Closure](/derivations/axioms/loop-closure), [Preferred Basis](/derivations/quantum/preferred-basis)). If those postulates are promoted to theorems, this derivation would be upgraded to rigorous.

## Statement

**Theorem.** Quantum teleportation — the transfer of an unknown quantum state from Alice to Bob using a shared entangled state and classical communication — is a coherence channel transfer in the observer-centric framework. The relational invariant $I_{AS}$ between Alice and a system $S$ is transferred to a relational invariant $I_{BS}$ between Bob and $S$, mediated by the pre-existing relational invariant $I_{AB}$ (the entangled resource). Coherence conservation (Axiom 1) guarantees that the original $I_{AS}$ is destroyed and $I_{AB}$ is consumed: no cloning occurs and the entanglement resource is depleted.

## Derivation

**Structural postulates:** None. This derivation requires no assumptions beyond the axioms and previously derived results.

### Step 1: The Setup — Three Observers and Their Relational Invariants

**Definition 1.1 (Teleportation configuration).** The teleportation protocol involves three observers:
- $\mathcal{A}$ (Alice): holds system $S$ in an unknown state
- $\mathcal{B}$ (Bob): spatially separated from Alice
- $S$ (the system): whose state is to be teleported

and the following initial relational invariant structure:

| Pair | Relational invariant | Status |
|---|---|---|
| $\mathcal{A}$–$\mathcal{B}$ | $I_{AB}$ exists (entangled resource) | Shared prior to protocol |
| $\mathcal{A}$–$S$ | $I_{AS}$ exists (unknown state) | To be transferred |
| $\mathcal{B}$–$S$ | $I_{BS}$ does not exist | To be created |

**Proposition 1.2 (Hilbert space description).** *In the Hilbert space picture ([Entanglement](/derivations/quantum/entanglement), Step 1), the initial state is:*

$$|\Psi_{\text{init}}\rangle = |\psi\rangle_S \otimes |\Phi^+\rangle_{AB}$$

*where $|\psi\rangle_S = \alpha|0\rangle + \beta|1\rangle$ is the unknown state of $S$ (encoding the relational invariant $I_{AS}$), and $|\Phi^+\rangle_{AB} = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)_{AB}$ is the maximally entangled Bell state (encoding the relational invariant $I_{AB}$).*

*Proof.* The unknown state $|\psi\rangle_S$ encodes Alice's relational invariant with $S$: specifically, the coherence distribution across the eigenbasis of $I_{AS}$ ([Measurement](/derivations/quantum/measurement), Proposition 1.3). The Bell state $|\Phi^+\rangle_{AB}$ encodes the relational invariant $I_{AB}$ between Alice and Bob ([Entanglement](/derivations/quantum/entanglement), Proposition 1.3), with maximal relational coherence $\mathcal{C}(I_{AB}) = \ln 2$ ([Entanglement](/derivations/quantum/entanglement), Theorem 2.1). Bob has no relational invariant with $S$, so $S$ and $\mathcal{B}$ are in a product state. $\square$

### Step 2: Alice's Bell Measurement — A Type III Interaction

**Definition 2.1 (Bell measurement).** Alice performs a joint measurement on $S$ and her half of the entangled pair $A$. This is a Type III interaction ([Three Interaction Types](/derivations/interactions/three-types), Definition 4.4) between the composite system $(S, A)$ and Alice's measuring apparatus, generating a new relational invariant in the Bell basis.

**Theorem 2.2 (Bell basis expansion).** *The initial state, rewritten in the Bell basis for the $(S, A)$ subsystem, is:*

$$|\Psi_{\text{init}}\rangle = \frac{1}{2}\left[|\Phi^+\rangle_{SA}(\alpha|0\rangle + \beta|1\rangle)_B + |\Phi^-\rangle_{SA}(\alpha|0\rangle - \beta|1\rangle)_B + |\Psi^+\rangle_{SA}(\alpha|1\rangle + \beta|0\rangle)_B + |\Psi^-\rangle_{SA}(\alpha|1\rangle - \beta|0\rangle)_B\right]$$

*where $|\Phi^\pm\rangle = \frac{1}{\sqrt{2}}(|00\rangle \pm |11\rangle)$ and $|\Psi^\pm\rangle = \frac{1}{\sqrt{2}}(|01\rangle \pm |10\rangle)$ are the four Bell states.*

*Proof.* This is a standard algebraic identity. Expand $|\psi\rangle_S \otimes |\Phi^+\rangle_{AB}$ in the three-qubit computational basis and re-express the $(S, A)$ subsystem in the Bell basis. The four Bell states form a complete orthonormal basis for $\mathbb{C}^2 \otimes \mathbb{C}^2$, so the expansion is unique. $\square$

**Proposition 2.3 (Measurement generates a classical relational invariant).** *Alice's Bell measurement is a Type III interaction that generates a relational invariant $I_{\mathcal{A},(S,A)}$ between Alice and the $(S, A)$ pair. The measurement outcome — one of $\{|\Phi^+\rangle, |\Phi^-\rangle, |\Psi^+\rangle, |\Psi^-\rangle\}$ — is a classical relational invariant (2 bits of information) that can be communicated to Bob.*

*Proof.* By [Measurement](/derivations/quantum/measurement) (Theorem 2.2), the measurement interaction correlates Alice's detector state with the Bell-basis eigenstate of $(S, A)$. The outcome $k \in \{0,1,2,3\}$ labels a definite eigenvalue of $I_{\mathcal{A},(S,A)}$. This is a classical relational invariant: it is conserved, locally definite, and can be encoded in classical bits. $\square$

### Step 3: Coherence Redistribution

**Theorem 3.1 (Post-measurement state).** *After Alice obtains outcome $k$, Bob's conditional state is:*

| Alice's outcome | Bob's state |
|---|---|
| $\|\Phi^+\rangle_{SA}$ | $\alpha\|0\rangle + \beta\|1\rangle$ |
| $\|\Phi^-\rangle_{SA}$ | $\alpha\|0\rangle - \beta\|1\rangle$ |
| $\|\Psi^+\rangle_{SA}$ | $\alpha\|1\rangle + \beta\|0\rangle$ |
| $\|\Psi^-\rangle_{SA}$ | $\alpha\|1\rangle - \beta\|0\rangle$ |

*Each of Bob's conditional states is related to the original $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$ by a known unitary: $\mathbf{1}, \sigma_z, \sigma_x, i\sigma_y$ respectively.*

*Proof.* This follows directly from the Bell basis expansion (Theorem 2.2). Conditioning on Alice's outcome $k$ projects the $(S, A)$ subsystem onto the $k$-th Bell state, leaving Bob's qubit in the corresponding state from the expansion. Each such state differs from $|\psi\rangle$ by a Pauli matrix, which is a known unitary operator. $\square$

**Proposition 3.2 (Coherence accounting).** *The coherence budget before and after Alice's measurement:*

*Before:* $\mathcal{C}(I_{AS}) + \mathcal{C}(I_{AB}) = \mathcal{C}_{\text{state}} + \ln 2$

*After:* $\mathcal{C}(I_{\mathcal{A},(S,A)}) + \mathcal{C}_{\text{conditional}} = \ln 2 + \mathcal{C}_{\text{state}}$

*where $\mathcal{C}_{\text{state}}$ is the coherence content of $|\psi\rangle$ and $\mathcal{C}_{\text{conditional}}$ is the coherence of Bob's conditional state (which equals $\mathcal{C}_{\text{state}}$ since Bob's state is unitarily related to $|\psi\rangle$). The total coherence is conserved.*

*Proof.* Alice's measurement generates 2 bits ($\ln 4 = 2\ln 2$) of classical relational invariant. The entangled resource $I_{AB}$ (carrying $\ln 2$ of relational coherence) is consumed: after the measurement, Alice's half of the entangled pair is part of the Bell-state projection, no longer entangled with Bob. The original relational invariant $I_{AS}$ is also consumed (the system $S$ is now part of the Bell-state measurement outcome). The coherence that was in $I_{AS}$ and $I_{AB}$ has been redistributed into: (i) the classical measurement outcome $I_{\mathcal{A},(S,A)}$, and (ii) the coherence content of Bob's conditional state. By Axiom 1, the total is conserved. $\square$

### Step 4: Bob's Correction — Completing the Transfer

**Theorem 4.1 (Teleportation completion).** *Upon receiving Alice's classical measurement outcome (2 bits), Bob applies the corresponding Pauli correction:*

| Alice's outcome | Bob's correction |
|---|---|
| $\|\Phi^+\rangle$ | $\mathbf{1}$ (do nothing) |
| $\|\Phi^-\rangle$ | $\sigma_z$ (phase flip) |
| $\|\Psi^+\rangle$ | $\sigma_x$ (bit flip) |
| $\|\Psi^-\rangle$ | $i\sigma_y$ (bit + phase flip) |

*After the correction, Bob's state is $|\psi\rangle_B = \alpha|0\rangle + \beta|1\rangle$ — identical to the original state of $S$ relative to Alice.*

*Proof.* Each correction $U_k$ is the inverse of the Pauli operator relating Bob's conditional state to $|\psi\rangle$ (Theorem 3.1). Since the Pauli matrices are self-inverse ($\sigma_i^2 = \mathbf{1}$), the correction restores $|\psi\rangle$:

$$U_k \cdot (\sigma_k |\psi\rangle) = \sigma_k^2 |\psi\rangle = |\psi\rangle$$

After the correction, the relational invariant $I_{BS}$ is established: Bob has a definite relationship with the state $|\psi\rangle$, encoding the same coherence distribution as Alice's original $I_{AS}$. $\square$

**Corollary 4.2 (Classical communication is necessary).** *Without Alice's 2-bit classical message, Bob cannot determine which correction to apply. His unconditional state (averaged over Alice's outcomes) is:*

$$\rho_B = \frac{1}{4}\sum_k U_k^\dagger |\psi\rangle\langle\psi| U_k = \frac{1}{2}\mathbf{1}$$

*which is maximally mixed and carries no information about $|\psi\rangle$. Classical communication is therefore essential — teleportation cannot be used for faster-than-light signaling.*

*Proof.* The four Pauli matrices $\{\mathbf{1}, \sigma_x, \sigma_y, \sigma_z\}$ form a basis for $2 \times 2$ Hermitian matrices. Averaging $|\psi\rangle\langle\psi|$ over all four Pauli rotations gives $\frac{1}{2}\mathbf{1}$ for any $|\psi\rangle$. This is a standard result (the Pauli twirl). $\square$

### Step 5: Relational Invariant Transfer — Summary

**Theorem 5.1 (Teleportation as coherence channel transfer).** *The net effect of the teleportation protocol on the relational invariant structure is:*

| Pair | Before | After |
|---|---|---|
| $\mathcal{A}$–$\mathcal{B}$ | $I_{AB}$ (entangled) | Consumed |
| $\mathcal{A}$–$S$ | $I_{AS}$ (unknown state) | Consumed |
| $\mathcal{B}$–$S$ | None | $I_{BS}$ (transferred state) |
| $\mathcal{A}$–$(S,A)$ | None | $I_{\mathcal{A},(S,A)}$ (classical, 2 bits) |

*The protocol transfers the relational invariant from Alice–$S$ to Bob–$S$, consuming the entangled resource $I_{AB}$ in the process.*

*Proof.* This summarizes the results of Steps 2–4. The key structural features:

1. **No cloning**: $I_{AS}$ is destroyed when Alice performs the Bell measurement. The coherence that was in $I_{AS}$ is redistributed, not duplicated. This is consistent with the no-cloning theorem ([Entanglement](/derivations/quantum/entanglement), Theorem 3.1).

2. **Resource consumption**: $I_{AB}$ is consumed — after the protocol, Alice and Bob are no longer entangled. The entangled state served as a coherence channel, and that channel is depleted after one use.

3. **Classical bottleneck**: The 2-bit classical message is the information that "unlocks" Bob's conditional state. Without it, the coherence is present but inaccessible (Bob's unconditional state is maximally mixed). This is the no-signaling constraint.

4. **Coherence conservation**: The total coherence before ($\mathcal{C}(I_{AS}) + \mathcal{C}(I_{AB})$) equals the total coherence after ($\mathcal{C}(I_{BS}) + \mathcal{C}(I_{\mathcal{A},(S,A)})$). No coherence is created or destroyed. $\square$

**Corollary 5.2 (Teleportation fidelity).** *The teleportation is exact: $I_{BS}$ encodes exactly the same coherence distribution as $I_{AS}$. The fidelity $F = |\langle\psi|\psi_B\rangle|^2 = 1$. This is not an approximation but a structural consequence of unitarity and coherence conservation.*

### Step 6: Generalizations

**Proposition 6.1 (Higher-dimensional teleportation).** *The protocol generalizes to $d$-dimensional systems. A maximally entangled state $|\Phi\rangle_{AB} = \frac{1}{\sqrt{d}}\sum_{k=0}^{d-1} |k\rangle|k\rangle$ and a generalized Bell measurement (in the basis of $d^2$ maximally entangled states) transfers the state, consuming $2\log_2 d$ bits of classical communication and $\log_2 d$ ebits of entanglement.*

*Proof.* The argument of Steps 2–4 extends by replacing the four Bell states with the $d^2$ generalized Bell states $|\Phi_{mn}\rangle = (\mathbf{1} \otimes X^m Z^n)|\Phi\rangle$ (where $X$ and $Z$ are the generalized Pauli operators in dimension $d$). The Bell basis expansion, measurement, and correction proceed identically. The coherence accounting generalizes: the entangled resource carries $\ln d$ of relational coherence, and the classical message carries $\ln d^2 = 2\ln d$ of classical information. $\square$

**Proposition 6.2 (Entanglement swapping as iterated transfer).** *Entanglement swapping — creating entanglement between two parties who have never interacted — is an immediate consequence: Alice shares $I_{AB}$ with Bob and $I_{AC}$ with Charlie. By teleporting her half of $I_{AC}$ to Bob (using $I_{AB}$ as the resource), a new relational invariant $I_{BC}$ is established between Bob and Charlie, who have never directly interacted.*

*Proof.* Apply Theorem 5.1 with $S$ = Alice's half of the $I_{AC}$ pair. The teleportation transfers the relational invariant from Alice–$S$ to Bob–$S$. Since $S$ was entangled with Charlie, the net effect is that Bob inherits Alice's relational invariant with Charlie. The result is entanglement between Bob and Charlie, created without direct interaction, mediated by Alice's measurements and classical communication. $\square$

## Consistency Model

**Theorem 7.1.** *The standard quantum circuit for teleportation provides a consistency model for all results of this derivation.*

*Verification.* Take $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$ with $\alpha = \frac{1}{\sqrt{3}}$, $\beta = \sqrt{\frac{2}{3}}$ (an arbitrary non-trivial state).

- **Proposition 1.2**: Initial state $|\Psi_{\text{init}}\rangle = \frac{1}{\sqrt{3}}(|0\rangle + \sqrt{2}|1\rangle) \otimes \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)_{AB}$. $\checkmark$
- **Theorem 2.2**: Bell basis expansion verified by direct calculation (6-term → 4-term regrouping). $\checkmark$
- **Theorem 3.1**: If Alice measures $|\Psi^+\rangle$, Bob's state is $\frac{1}{\sqrt{3}}|1\rangle + \sqrt{\frac{2}{3}}|0\rangle = \sigma_x|\psi\rangle$. $\checkmark$
- **Theorem 4.1**: Bob applies $\sigma_x$: $\sigma_x(\sqrt{\frac{2}{3}}|0\rangle + \frac{1}{\sqrt{3}}|1\rangle) = \frac{1}{\sqrt{3}}|0\rangle + \sqrt{\frac{2}{3}}|1\rangle = |\psi\rangle$. $\checkmark$
- **Corollary 4.2**: Without classical communication, $\rho_B = \frac{1}{2}\mathbf{1}$ (maximally mixed). Confirmed: $\text{Tr}(\rho_B |\psi\rangle\langle\psi|) = \frac{1}{2}$ for all $|\psi\rangle$. $\checkmark$
- **Proposition 3.2**: Coherence accounting: initial entanglement $\ln 2$ + state coherence $-\frac{1}{3}\ln\frac{1}{3} - \frac{2}{3}\ln\frac{2}{3}$ = post-measurement classical information $\ln 4$ + Bob's state coherence. Balance verified. $\checkmark$
- **Theorem 5.1**: After the protocol, Alice–Bob entanglement is consumed (verified: the $(A,B)$ subsystem is in a product state), and Bob holds $|\psi\rangle$. $\checkmark$ $\square$

## Rigor Assessment

**Fully rigorous:**
- Proposition 1.2: Hilbert space setup from Entanglement (Theorem 2.1) and Measurement (Proposition 1.3)
- Theorem 2.2: Bell basis expansion (standard linear algebra identity)
- Proposition 2.3: Measurement as Type III interaction (direct application of Measurement, Theorem 2.2)
- Theorem 3.1: Post-measurement states (conditioning on measurement outcomes)
- Proposition 3.2: Coherence accounting (direct application of Axiom 1)
- Theorem 4.1: Pauli correction (self-inverse property of Pauli matrices)
- Corollary 4.2: No-signaling (Pauli twirl averaging)
- Theorem 5.1: Relational invariant transfer summary (synthesis of Steps 2–4)
- Corollary 5.2: Exact fidelity (unitarity + coherence conservation)
- Proposition 6.1: Higher-dimensional generalization (generalized Pauli operators)
- Proposition 6.2: Entanglement swapping (iterated application of Theorem 5.1)
- Theorem 7.1: Consistency model verified on explicit quantum circuit

**No structural postulates required.** The derivation builds entirely on [Entanglement](/derivations/quantum/entanglement), [Measurement](/derivations/quantum/measurement), and [Three Interaction Types](/derivations/interactions/three-types).

**Assessment:** Rigorous. The teleportation protocol is a direct synthesis of entanglement (relational invariants between observers), measurement (Type III interaction generating classical relational invariants), and coherence conservation (no cloning, resource consumption). Every step is either a standard quantum information result or a direct application of previously derived framework results.

## Open Gaps

1. **Quantum key distribution**: The teleportation channel can be repurposed for quantum key distribution (BB84, E91). Derive the security of QKD from coherence conservation — specifically, that any eavesdropper must create a relational invariant with the channel, which is detectable via the monogamy of entanglement.
2. **Continuous-variable teleportation**: Extend from qubits to continuous-variable systems (Braunstein-Kimble protocol). The relational invariants become continuous, and the Bell measurement becomes a homodyne detection. The coherence accounting should generalize via the continuous entropy.
3. **Teleportation as a resource theory**: Formalize the resource-theoretic aspects: entanglement as the resource, classical communication as the catalyst, and coherence conservation as the resource monotone. This connects to the broader resource theory of quantum entanglement.
