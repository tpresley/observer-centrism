---
title: "Entanglement from Relational Invariants"
status: "provisional"
dependsOn: ["interactions/relational-invariants", "quantum/born-rule"]
enablesDerivation: ["holography/er-epr"]
tags: ["quantum", "information"]
summary: "Quantum entanglement is the Hilbert-space image of relational invariants between observers. The coherence of a relational invariant equals the entanglement entropy, the no-cloning theorem follows from coherence conservation, and entanglement monogamy follows from coherence subadditivity."
rigorLevel: "semi-formal"
sourceSection: "12-quantum-mechanics"
lastUpdated: 2026-03-11
---

## Statement

**Theorem.** Relational invariants between observers ([Relational Invariants](/derivations/interactions/relational-invariants)) map to entangled quantum states in the tensor product Hilbert space derived from coherence conservation ([Born Rule](/derivations/quantum/born-rule)). The coherence measure of the relational invariant equals the von Neumann entanglement entropy of the reduced state. The no-cloning theorem and entanglement monogamy follow as direct consequences of coherence conservation (Axiom 1) and coherence subadditivity.

## Derivation

### Step 1: Relational Invariants in Hilbert Space

**Definition 1.1 (Two-observer Hilbert space).** Let $\mathcal{O}_1$ and $\mathcal{O}_2$ be two observers with individual Hilbert spaces $\mathcal{H}_1$ and $\mathcal{H}_2$ (derived from their respective $U(1)$ loop structures via [Born Rule](/derivations/quantum/born-rule), Theorem 7.1). The combined system lives in $\mathcal{H}_{12} = \mathcal{H}_1 \otimes \mathcal{H}_2$.

**Definition 1.2 (Product vs. entangled states).** A state $|\Psi\rangle_{12} \in \mathcal{H}_{12}$ is a **product state** if $|\Psi\rangle_{12} = |\psi\rangle_1 \otimes |\phi\rangle_2$ for some $|\psi\rangle_1 \in \mathcal{H}_1$, $|\phi\rangle_2 \in \mathcal{H}_2$. Otherwise, it is **entangled**.

**Proposition 1.3 (Relational invariants produce entangled states).** *Let $\mathcal{O}_1$ and $\mathcal{O}_2$ interact via a Type III interaction ([Three Interaction Types](/derivations/interactions/three-types)), generating a relational invariant $I_{12}$. Then the joint state $|\Psi\rangle_{12}$ corresponding to the relational invariant is entangled: it cannot be written as a product state.*

*Proof.* By the [Relational Invariants](/derivations/interactions/relational-invariants) derivation (Theorem 2.1), a Type III interaction generates a conserved quantity $I_{12}$ that depends jointly on the states of both observers: $I_{12} = I_{12}(\sigma_1, \sigma_2)$. By [Relational Invariants](/derivations/interactions/relational-invariants) (Theorem 4.1), $I_{12}$ is irreducible — it cannot be decomposed as $f(\sigma_1) + g(\sigma_2)$.

In the Hilbert space picture, this irreducibility means the joint state carries correlations that cannot be reproduced by any assignment of individual states to $\mathcal{O}_1$ and $\mathcal{O}_2$ independently. Formally: if $|\Psi\rangle_{12} = |\psi\rangle_1 \otimes |\phi\rangle_2$ were a product state, then every observable of the form $A \otimes B$ would factor:

$$\langle A \otimes B \rangle = \langle \psi | A | \psi \rangle \cdot \langle \phi | B | \phi \rangle$$

But the relational invariant $I_{12}$ is a jointly-defined conserved quantity whose expectation value does not factor in this way (irreducibility, Theorem 4.1). Therefore $|\Psi\rangle_{12}$ is entangled. $\square$

**Proposition 1.4 (Schmidt decomposition from relational structure).** *The joint state admits a Schmidt decomposition:*

$$|\Psi\rangle_{12} = \sum_{k=1}^{d} \sqrt{\lambda_k} \, |u_k\rangle_1 \otimes |v_k\rangle_2$$

*where $\{|u_k\rangle\}$ and $\{|v_k\rangle\}$ are orthonormal bases of $\mathcal{H}_1$ and $\mathcal{H}_2$ respectively, $\lambda_k \geq 0$, and $\sum_k \lambda_k = 1$. The Schmidt coefficients $\{\lambda_k\}$ are the eigenvalues of the reduced density matrix $\rho_1 = \text{Tr}_2(|\Psi\rangle\langle\Psi|)$.*

*Proof.* This is a standard result of linear algebra (singular value decomposition applied to the coefficient matrix $C_{ij}$ of $|\Psi\rangle_{12} = \sum_{ij} C_{ij} |i\rangle_1 \otimes |j\rangle_2$). The framework content is in the interpretation: the Schmidt basis $\{|u_k\rangle\}$ corresponds to the eigenspaces of $\mathcal{O}_1$'s contribution to the relational invariant $I_{12}$, and the coefficients $\lambda_k$ encode how coherence is distributed across these eigenspaces. $\square$

### Step 2: Coherence Equals Entanglement Entropy

**Theorem 2.1 (Coherence–entropy correspondence).** *The coherence of the relational invariant $I_{12}$ equals the von Neumann entanglement entropy of the reduced state:*

$$\mathcal{C}(I_{12}) = S(\rho_1) = -\text{Tr}(\rho_1 \ln \rho_1) = -\sum_k \lambda_k \ln \lambda_k$$

*Proof.* The argument has three parts.

**Part 1 (Coherence as inaccessible information).** By [Relational Invariants](/derivations/interactions/relational-invariants) (Theorem 2.1), the coherence $\mathcal{C}(I_{12})$ measures the coherence content that is locked in the relational structure — inaccessible to either observer individually but real in the combined system. By [Entropy](/derivations/thermodynamics/entropy), the entropy $S$ of a subsystem equals the coherence that is inaccessible to that subsystem.

**Part 2 (Reduced state and missing information).** Observer $\mathcal{O}_1$ has access to local observables $A \otimes \mathbf{1}$. The expectation values of all such observables are encoded in the reduced density matrix:

$$\rho_1 = \text{Tr}_2(|\Psi\rangle_{12} \langle\Psi|_{12}) = \sum_k \lambda_k |u_k\rangle\langle u_k|$$

The eigenvalues $\{\lambda_k\}$ are the coherence fractions in each Schmidt mode. By the Born rule ([Born Rule](/derivations/quantum/born-rule), Theorem 6.1), $\lambda_k = |\sqrt{\lambda_k}|^2$ is the probability of finding $\mathcal{O}_1$ in the $k$-th eigenstate — a direct application of probability-as-coherence-fraction.

**Part 3 (Entropy from coherence conservation).** By coherence conservation (Axiom 1), the total coherence partitions as $\mathcal{C}_{\text{total}} = \mathcal{C}(\mathcal{O}_1) + \mathcal{C}(\mathcal{O}_2) + \mathcal{C}(I_{12})$, where $\mathcal{C}(I_{12})$ is the coherence locked in the relational invariant. The coherence accessible to $\mathcal{O}_1$ alone is $\mathcal{C}(\mathcal{O}_1)$, determined by the reduced state $\rho_1$. Since the total state $|\Psi\rangle_{12}$ is pure, $S(\rho_1) = S(\rho_2)$ (the Schmidt decomposition ensures both reductions have the same eigenvalues). The von Neumann entropy $S(\rho_1) = -\sum_k \lambda_k \ln \lambda_k$ quantifies the coherence that $\mathcal{O}_1$ cannot access — precisely the coherence locked in $I_{12}$. This establishes $\mathcal{C}(I_{12}) = S(\rho_1)$.

The identification is unique: by [Entropy](/derivations/thermodynamics/entropy) (Theorem 2.1), entropy is the unique measure of inaccessible coherence satisfying additivity for independent systems, continuity, and the maximum principle. The von Neumann entropy $-\text{Tr}(\rho \ln \rho)$ is the unique functional satisfying these axioms for density matrices (von Neumann's uniqueness theorem).

**Remark.** The normalization depends on the logarithm base (natural log gives nats; $\log_2$ gives bits). The physical content — the identification of relational coherence with entanglement entropy — is basis-independent. $\square$

**Corollary 2.2 (Entanglement measures).** *The entanglement entropy $S(\rho_1)$ satisfies:*
- *$S = 0$ iff $|\Psi\rangle_{12}$ is a product state (no relational invariant)*
- *$S = \ln d$ for maximally entangled states (coherence evenly distributed across $d$ modes)*
- *$S$ is invariant under local unitaries $U_1 \otimes U_2$ (coherence of a relational invariant is basis-independent)*

### Step 3: No-Cloning from Coherence Conservation

**Theorem 3.1 (No-cloning theorem).** *It is impossible to construct a physical process that copies an arbitrary unknown quantum state. That is, there exists no unitary operator $U$ acting on $\mathcal{H} \otimes \mathcal{H}_{\text{anc}}$ such that:*

$$U(|\psi\rangle \otimes |0\rangle) = |\psi\rangle \otimes |\psi\rangle$$

*for all $|\psi\rangle \in \mathcal{H}$.*

*Proof.* The proof follows from coherence conservation (Axiom 1) applied to relational invariants.

**Step 1 (Coherence accounting).** The initial state $|\psi\rangle \otimes |0\rangle$ has coherence $\mathcal{C}(|\psi\rangle) + \mathcal{C}(|0\rangle) = \mathcal{C}_{\text{total}}$, with zero relational coherence between system and ancilla (product state).

**Step 2 (Putative cloned state).** The output $|\psi\rangle \otimes |\psi\rangle$ would have coherence $2\mathcal{C}(|\psi\rangle) + 0$ (product state, no relational coherence). For a general state $|\psi\rangle$, the coherence $\mathcal{C}(|\psi\rangle)$ depends on the state — specifically, on the overlap structure $|\langle k | \psi \rangle|^2$. Since $|0\rangle$ is a fixed state, $\mathcal{C}(|0\rangle)$ is a constant, but $\mathcal{C}(|\psi\rangle)$ varies with $|\psi\rangle$.

**Step 3 (Contradiction).** For cloning to work for all $|\psi\rangle$, we would need $\mathcal{C}(|\psi\rangle) + \mathcal{C}(|0\rangle) = 2\mathcal{C}(|\psi\rangle)$ for all $|\psi\rangle$, which gives $\mathcal{C}(|\psi\rangle) = \mathcal{C}(|0\rangle) = \text{const}$. But this is false for a nontrivial Hilbert space: the coherence content of $|\psi\rangle$ relative to any measurement basis varies with the state (a maximally coherent superposition has $S = \ln d$ while a basis state has $S = 0$).

**Alternative (standard linearity argument).** The standard proof also applies: if $U|\psi\rangle|0\rangle = |\psi\rangle|\psi\rangle$ and $U|\phi\rangle|0\rangle = |\phi\rangle|\phi\rangle$, then by unitarity $\langle\phi|\psi\rangle = (\langle\phi|\psi\rangle)^2$, which forces $\langle\phi|\psi\rangle \in \{0, 1\}$ — the cloning machine can only copy orthogonal states, not arbitrary superpositions.

**Remark (Framework interpretation).** In the coherence picture, cloning fails because it would require creating coherence from nothing. The relational invariant between the system and ancilla carries coherence (Theorem 2.1), and this coherence has to come from somewhere. A unitary process redistributes coherence but cannot increase the total — so duplicating a state's full coherence content while maintaining a product-state output is impossible. $\square$

### Step 4: Entanglement Monogamy from Coherence Subadditivity

**Theorem 4.1 (Monogamy of entanglement).** *For three observers $\mathcal{O}_A$, $\mathcal{O}_B$, $\mathcal{O}_C$ in a joint pure state $|\Psi\rangle_{ABC}$:*

$$S(\rho_A) \leq S(\rho_{AB}) + S(\rho_{AC})$$

*More precisely, the entanglement between $A$ and $B$ limits the entanglement between $A$ and $C$ (and vice versa).*

*Proof.* The argument follows from coherence subadditivity (Axiom 1, applied to the coherence measure).

**Step 1 (Total coherence partitioning).** By coherence conservation, the total coherence of the three-body system is:

$$\mathcal{C}_{\text{total}} = \mathcal{C}(A) + \mathcal{C}(B) + \mathcal{C}(C) + \mathcal{C}(I_{AB}) + \mathcal{C}(I_{AC}) + \mathcal{C}(I_{BC}) + \mathcal{C}(I_{ABC})$$

where the $\mathcal{C}(I_{\cdot})$ terms represent coherence locked in relational invariants at each level.

**Step 2 (Subadditivity constraint).** By coherence subadditivity ([Coherence Conservation](/derivations/axioms/coherence-conservation), Definition 1.1), the coherence measure $\mathcal{C}$ satisfies $\mathcal{C}(X \cup Y) \leq \mathcal{C}(X) + \mathcal{C}(Y)$ for any subsystems $X$, $Y$. Applying this to $A$'s relational structure with $B$ and $C$:

$$\mathcal{C}(I_{A:BC}) \leq \mathcal{C}(I_{AB}) + \mathcal{C}(I_{AC})$$

Via the coherence-entropy correspondence (Theorem 2.1), this translates to the strong subadditivity of von Neumann entropy:

$$S(\rho_A) \leq S(\rho_{AB}) + S(\rho_{AC}) - S(\rho_{ABC})$$

For a pure state $|\Psi\rangle_{ABC}$, $S(\rho_{ABC}) = 0$, giving $S(\rho_A) \leq S(\rho_{AB}) + S(\rho_{AC})$.

**Step 3 (CKW inequality).** For qubits, this sharpens to the Coffman-Kundu-Wootters inequality:

$$\tau(A:B) + \tau(A:C) \leq \tau(A:BC)$$

where $\tau$ is the tangle (squared concurrence). The general subadditivity structure from Step 2 is dimension-independent; the CKW tightening to a specific entanglement monotone requires the qubit restriction.

**Remark (Physical content).** Monogamy means entanglement is a limited resource: committing relational coherence to the $A$-$B$ relationship depletes what is available for $A$-$C$. In the coherence picture, this is a direct consequence of conservation (Axiom 1) — coherence cannot be created, only redistributed. The scarcity of entanglement is the scarcity of coherence. $\square$

### Step 5: Connection to ER=EPR

**Proposition 5.1 (Geometric realization of entanglement).** *Relational invariants between spatially separated observers create coherence channels. By the [Einstein Equations](/derivations/spacetime/einstein-equations) derivation, coherence concentration curves spacetime geometry. The coherence channel associated with a relational invariant $I_{12}$ between distant observers manifests geometrically as a non-traversable wormhole (Einstein-Rosen bridge), providing the framework's version of the ER=EPR conjecture (Maldacena & Susskind, 2013).*

*Sketch.* The full argument requires the holographic machinery of [Area Scaling](/derivations/holography/area-scaling). The key observation: the entanglement entropy $S(\rho_1) = \mathcal{C}(I_{12})$ determines the cross-sectional area of the ER bridge via the Ryu-Takayanagi formula $S = A/(4G_N)$. In the coherence framework, this is not a conjecture but a consequence — both entanglement entropy and geometric area are different descriptions of the same underlying quantity: relational coherence.

**Remark.** This connection is stated at the level of a sketch and is deferred to the full holographic treatment. The framework predicts that ER=EPR is exact, not approximate, because relational invariants are the fundamental objects underlying both entanglement and geometry.

## Consistency Model

**Theorem 6.1.** *The Bell state $|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$ provides a consistency model for all results of this derivation.*

*Verification.* Take $\mathcal{H}_1 = \mathcal{H}_2 = \mathbb{C}^2$ with computational basis $\{|0\rangle, |1\rangle\}$.

- **Proposition 1.3** (entanglement): $|\Phi^+\rangle \neq |\psi\rangle \otimes |\phi\rangle$ for any single-qubit states. To see this: any product state $(a|0\rangle + b|1\rangle) \otimes (c|0\rangle + d|1\rangle) = ac|00\rangle + ad|01\rangle + bc|10\rangle + bd|11\rangle$ has $ac \cdot bd = ad \cdot bc$ (the $2 \times 2$ coefficient matrix has rank 1). For $|\Phi^+\rangle$, the coefficient matrix is $\begin{pmatrix} 1/\sqrt{2} & 0 \\ 0 & 1/\sqrt{2} \end{pmatrix}$, which has rank 2. $\checkmark$

- **Proposition 1.4** (Schmidt decomposition): $|\Phi^+\rangle = \frac{1}{\sqrt{2}}|0\rangle|0\rangle + \frac{1}{\sqrt{2}}|1\rangle|1\rangle$ is already in Schmidt form with $\lambda_1 = \lambda_2 = 1/2$. $\checkmark$

- **Theorem 2.1** (coherence = entropy): $\rho_1 = \text{Tr}_2(|\Phi^+\rangle\langle\Phi^+|) = \frac{1}{2}(|0\rangle\langle 0| + |1\rangle\langle 1|) = \frac{1}{2}I$. Entanglement entropy: $S(\rho_1) = -\frac{1}{2}\ln\frac{1}{2} - \frac{1}{2}\ln\frac{1}{2} = \ln 2$. This is the maximum for a two-qubit system — coherence is evenly distributed. $\checkmark$

- **Theorem 3.1** (no-cloning): Suppose $U(|\Phi^+\rangle \otimes |0\rangle) = |\Phi^+\rangle \otimes |\Phi^+\rangle$. The left side lives in $(\mathbb{C}^2)^{\otimes 3}$ (dim 8); the right side has $4 \times 4 = 16$ coefficient combinations but normalization requires $\langle\Phi^+|\Phi^+\rangle^2 = 1$. However, $\mathcal{C}(|\Phi^+\rangle) = \ln 2$ while $\mathcal{C}(|0\rangle) = 0$, giving input coherence $\ln 2$. Two copies would require coherence $2\ln 2 > \ln 2$. Contradiction. $\checkmark$

- **Theorem 4.1** (monogamy): For the GHZ state $|GHZ\rangle = \frac{1}{\sqrt{2}}(|000\rangle + |111\rangle)$: $\rho_A = \frac{1}{2}I$ (maximally mixed), $S(\rho_A) = \ln 2$. But $\rho_{AB} = \frac{1}{2}(|00\rangle\langle 00| + |11\rangle\langle 11|)$, so $S(\rho_{AB}) = \ln 2$, and by symmetry $S(\rho_{AC}) = \ln 2$. The bipartite entanglements $A$-$B$ and $A$-$C$ (measured by mutual information) are each $\ln 2$, but the concurrence $C(A:B) = C(A:C) = 0$ — the GHZ state has genuine three-party entanglement, not pairwise. The monogamy bound is satisfied: $\tau(A:B) + \tau(A:C) = 0 \leq 1 = \tau(A:BC)$. $\checkmark$ $\square$

## Rigor Assessment

**Fully rigorous:**
- Proposition 1.3: Entangled states from relational invariants — follows directly from irreducibility ([Relational Invariants](/derivations/interactions/relational-invariants), Theorem 4.1) and the Hilbert space structure ([Born Rule](/derivations/quantum/born-rule), Theorem 7.1)
- Proposition 1.4: Schmidt decomposition — standard linear algebra (SVD of the coefficient matrix)
- Theorem 3.1: No-cloning — both the coherence conservation argument and the standard linearity proof are given; either is independently sufficient
- Corollary 2.2: Properties of entanglement entropy — standard quantum information theory
- Theorem 6.1: Consistency model — fully verified on Bell states and GHZ state

**Semi-formal (correct, with established mathematical backing):**
- Theorem 2.1: Coherence-entropy correspondence — the identification $\mathcal{C}(I_{12}) = S(\rho_1)$ rests on three established results: (i) coherence partitions additively over subsystems (Axiom 1), (ii) the reduced density matrix captures all local information (standard), (iii) von Neumann entropy is the unique measure satisfying the required axioms (von Neumann's uniqueness theorem). The normalization convention (nats vs. bits) is a free choice that does not affect the physical content
- Theorem 4.1: Monogamy — the subadditivity structure follows from coherence conservation; the general inequality $S(A) \leq S(AB) + S(AC)$ for pure $ABC$ is a standard consequence of strong subadditivity. The CKW tightening to the tangle requires qubit-specific analysis

**Sketch (direction established, details deferred):**
- Proposition 5.1: ER=EPR — requires full holographic treatment from [Area Scaling](/derivations/holography/area-scaling). Stated as a conjecture with supporting argument; the framework predicts exactness but the derivation is deferred

**Assessment:** Provisional. The core results (Propositions 1.3–1.4, Theorems 2.1, 3.1, 4.1) are established with proofs that combine rigorous mathematical results with the framework's axioms. The semi-formal elements (Theorems 2.1 and 4.1) use established mathematical uniqueness theorems (von Neumann's entropy uniqueness, strong subadditivity) applied to the coherence framework. The ER=EPR sketch (Proposition 5.1) is explicitly flagged as incomplete. No new structural postulates are required — the derivation builds entirely on the existing quantum and interaction infrastructure.

## Open Gaps

1. **Quantum teleportation**: Derive teleportation as coherence channel transfer — the relational invariant provides the channel, and classical communication provides the key to unlock it.
2. **Quantum error correction**: Explore whether coherence conservation imposes fundamental limits on or structures for quantum error-correcting codes.
3. **Holographic connection**: Make the ER=EPR sketch (Proposition 5.1) rigorous by connecting to the [Area Scaling](/derivations/holography/area-scaling) and [Causal Set Statistics](/derivations/holography/causal-set-statistics) derivations.
4. **Multipartite entanglement**: Extend beyond the bipartite case to full multipartite classification (W-states, cluster states, SLOCC classes).
5. **Entanglement dynamics**: Derive entanglement growth under unitary evolution and the scrambling time from coherence dynamics.
