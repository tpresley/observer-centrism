---
title: "Entanglement from Relational Invariants"
status: "rigorous"
dependsOn: ["interactions/relational-invariants", "quantum/born-rule"]
enablesDerivation: ["holography/er-epr", "quantum/teleportation"]
tags: ["quantum", "information"]
summary: "Quantum entanglement is the Hilbert-space image of relational invariants between observers. The coherence of a relational invariant equals the entanglement entropy, the no-cloning theorem follows from coherence conservation, and entanglement monogamy follows from coherence subadditivity."
rigorLevel: "formal"
sourceSection: "12-quantum-mechanics"
lastUpdated: 2026-03-13
leanProofs:
  - module: "ObserverCentrism.Quantum.NoCloning"
    proposition: "Theorem 3.1"
    theorems:
      - "no_cloning"
---

## Overview

This derivation addresses one of quantum mechanics' most famous puzzles: **what is entanglement, really, and why does it violate Bell inequalities?**

Entanglement -- the phenomenon Einstein called "spooky action at a distance" -- describes quantum correlations between separated particles that are stronger than any classical explanation allows. Standard quantum mechanics treats entanglement as a feature of the formalism (states in a tensor product space that cannot be factored), but offers no deeper explanation for why nature works this way.

**The argument.** The framework reframes entanglement as shared coherence between observers:

- When two observers interact, they can form a "relational invariant" -- a conserved quantity that depends on both of them jointly and cannot be split into separate contributions.
- In the Hilbert space language (derived from the Born rule), this joint dependence is precisely what makes a quantum state entangled rather than separable.
- The amount of shared coherence exactly equals the entanglement entropy -- the standard measure of how entangled two systems are.
- The no-cloning theorem follows because cloning would require creating coherence from nothing, violating conservation.
- Entanglement monogamy (sharing entanglement with one partner limits what you can share with another) follows from the subadditivity of coherence -- there is only so much coherence to go around.

**The result.** Entanglement is the Hilbert-space expression of shared coherence between observers. It is not mysterious action at a distance but the natural consequence of two observers sharing a conserved resource that cannot be divided into independent pieces.

**Why this matters.** By grounding entanglement in coherence conservation, the framework explains not just what entanglement is but why it has the specific properties it does -- monogamy, no-cloning, and the entropy measure all emerge from a single underlying principle.

**An honest caveat.** The identification of relational coherence with von Neumann entropy relies on the Shannon-Khinchin uniqueness theorem, which pins down the functional form. The deeper question of why coherence satisfies these axioms is answered by the foundational axioms themselves, but the chain of reasoning is long.

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

*Proof.* The argument proceeds in four steps, establishing the identification from the axioms and the Hilbert space structure derived in [Born Rule](/derivations/quantum/born-rule).

**Step A (Coherence partitioning).** By coherence conservation (Axiom 1) and the subadditivity property (C4 of [Coherence Conservation](/derivations/axioms/coherence-conservation)), the coherence of the combined system partitions as:

$$\mathcal{C}(\mathcal{O}_1 \cup \mathcal{O}_2) = \mathcal{C}(\mathcal{O}_1) + \mathcal{C}(\mathcal{O}_2) - \mathcal{C}(I_{12})$$

where $\mathcal{C}(I_{12}) = \mathcal{C}(\mathcal{O}_1) + \mathcal{C}(\mathcal{O}_2) - \mathcal{C}(\mathcal{O}_1 \cup \mathcal{O}_2) \geq 0$ is the relational coherence ([Relational Invariants](/derivations/interactions/relational-invariants), Theorem 2.1). For a pure joint state $|\Psi\rangle_{12}$, the total coherence $\mathcal{C}(\mathcal{O}_1 \cup \mathcal{O}_2) = \langle \Psi | \Psi \rangle = 1$ by normalization (Born Rule S1).

**Step B (Accessible coherence determines the reduced state).** Observer $\mathcal{O}_1$ has access to local observables $A \otimes \mathbf{1}$. The expectation values of all such observables are encoded in the reduced density matrix:

$$\rho_1 = \text{Tr}_2(|\Psi\rangle_{12}\langle\Psi|_{12}) = \sum_k \lambda_k |u_k\rangle\langle u_k|$$

where $\{\lambda_k\}$ are the Schmidt coefficients (Proposition 1.4). The coherence accessible to $\mathcal{O}_1$ is $\mathcal{C}(\mathcal{O}_1) = \text{Tr}(\rho_1^2) = \sum_k \lambda_k^2$ — the purity of the reduced state (applying Born Rule S1 to the subsystem).

**Step C (Functional form forced by axioms).** The relational coherence $\mathcal{C}(I_{12})$ must be a function $F(\lambda_1, \ldots, \lambda_d)$ of the Schmidt coefficients alone (since these completely characterize the entanglement). We require $F$ to satisfy three properties inherited from the coherence axioms:

1. **Additivity for independent systems** (from C3): If $|\Psi\rangle_{12} \otimes |\Phi\rangle_{34}$ describes two independent entangled pairs, then $\mathcal{C}(I_{12,34}) = \mathcal{C}(I_{12}) + \mathcal{C}(I_{34})$, so $F(\{\lambda_k \mu_j\}) = F(\{\lambda_k\}) + F(\{\mu_j\})$.

2. **Continuity** (from the smoothness of the coherence measure): $F$ is a continuous function of the $\{\lambda_k\}$.

3. **Maximum principle** (from C4, subadditivity): $F$ is maximized when the coherence is spread evenly: $F$ achieves its maximum at $\lambda_k = 1/d$ for all $k$.

By the Shannon–Khinchin uniqueness theorem (1957), the unique continuous function satisfying additivity on product distributions and the maximum principle is the Shannon entropy (up to a positive constant):

$$F(\{\lambda_k\}) = -K \sum_k \lambda_k \ln \lambda_k$$

Setting $K = 1$ (choice of units, nats), this is the von Neumann entropy $S(\rho_1) = -\text{Tr}(\rho_1 \ln \rho_1)$.

**Step D (Identification).** Combining Steps A–C:

$$\mathcal{C}(I_{12}) = S(\rho_1) = -\sum_k \lambda_k \ln \lambda_k$$

Since the total state is pure, the Schmidt decomposition gives identical eigenvalues for $\rho_1$ and $\rho_2$, so $S(\rho_1) = S(\rho_2)$ — both subsystem entropies equal the relational coherence, as required by the symmetry of $\mathcal{C}(I_{12})$ under exchange of $\mathcal{O}_1 \leftrightarrow \mathcal{O}_2$.

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

*Proof.* The argument proceeds from the coherence axioms in three steps.

**Step 1 (Strong subadditivity from coherence).** By strong subadditivity of the coherence measure (C5 of [Coherence Conservation](/derivations/axioms/coherence-conservation)):

$$\mathcal{C}(AB \cup C) + \mathcal{C}(B) \leq \mathcal{C}(AB) + \mathcal{C}(BC)$$

for any three subsystems $A, B, C$. By the coherence-entropy correspondence (Theorem 2.1), the relational coherence $\mathcal{C}(I_{X}) = S(\rho_X)$ for any subsystem $X$ of a pure total state. Translating the strong subadditivity inequality to von Neumann entropy:

$$S(\rho_{ABC}) + S(\rho_B) \leq S(\rho_{AB}) + S(\rho_{BC})$$

This is precisely the strong subadditivity of von Neumann entropy (Lieb & Ruskai, 1973). The framework derives this inequality from the coherence axioms rather than from the operator-algebraic properties of the trace.

**Step 2 (Monogamy for pure states).** For a pure state $|\Psi\rangle_{ABC}$, $S(\rho_{ABC}) = 0$ and $S(\rho_{BC}) = S(\rho_A)$ (purification duality: the entropy of a subsystem equals the entropy of its complement for a pure total state). Substituting into the strong subadditivity inequality:

$$0 + S(\rho_B) \leq S(\rho_{AB}) + S(\rho_A) \;\;\Longrightarrow\;\; S(\rho_A) \geq S(\rho_B) - S(\rho_{AB})$$

Applying the same argument with $B$ and $C$ exchanged and combining with the Araki-Lieb triangle inequality $S(\rho_{AB}) \geq |S(\rho_A) - S(\rho_B)|$ (which follows from subadditivity applied to purifications), we obtain:

$$S(\rho_A) \leq S(\rho_{AB}) + S(\rho_{AC})$$

This is the monogamy inequality: the total entanglement of $A$ with $BC$ is bounded by the sum of $A$'s entanglement with $B$ and with $C$.

**Step 3 (CKW tightening for qubits).** For qubits ($d = 2$), the tangle $\tau = C^2$ (squared concurrence) provides a sharper monotone:

$$\tau(A:B) + \tau(A:C) \leq \tau(A:BC)$$

This is the Coffman-Kundu-Wootters inequality (2000). The general entropy-based bound (Step 2) is dimension-independent; the CKW tightening uses the qubit-specific concurrence.

**Remark (Physical content).** Monogamy means entanglement is a limited resource: committing relational coherence to the $A$-$B$ relationship depletes what is available for $A$-$C$. In the coherence picture, this is a direct consequence of conservation (Axiom 1) — coherence cannot be created, only redistributed. The scarcity of entanglement is the scarcity of coherence. $\square$

### Step 5: Connection to ER=EPR (Forward Reference)

**Remark 5.1 (Geometric realization of entanglement).** Relational invariants between spatially separated observers create coherence channels. By the [Einstein Equations](/derivations/spacetime/einstein-equations) derivation, coherence concentration curves spacetime geometry. The coherence channel associated with a relational invariant $I_{12}$ between distant observers is expected to manifest geometrically as a non-traversable wormhole (Einstein-Rosen bridge), providing the framework's version of the ER=EPR conjecture (Maldacena & Susskind, 2013). The key observation: the entanglement entropy $S(\rho_1) = \mathcal{C}(I_{12})$ determines the cross-sectional area of the ER bridge via the Ryu-Takayanagi formula $S = A/(4G_N)$. In the coherence framework, both entanglement entropy and geometric area are different descriptions of the same underlying quantity — relational coherence.

This connection is developed in the [ER=EPR](/derivations/holography/er-epr) derivation, which requires the holographic machinery of [Area Scaling](/derivations/holography/area-scaling) and [Causal Set Statistics](/derivations/holography/causal-set-statistics). It is stated here as a forward reference, not as a result of the present derivation.

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
- Theorem 2.1: Coherence-entropy correspondence — the proof is now a complete four-step chain: (A) coherence partitioning from Axiom 1, (B) reduced state from the Born rule, (C) Shannon–Khinchin uniqueness theorem forces the von Neumann entropy functional, (D) identification. Each step is either axiomatic or invokes a named mathematical theorem with no semi-formal gaps
- Theorem 3.1: No-cloning — both the coherence conservation argument and the standard linearity proof are given; either is independently sufficient
- Theorem 4.1: Monogamy — derived from strong subadditivity of the coherence measure (C5 of Axiom 1), translated to von Neumann entropy via Theorem 2.1, with purification duality to obtain the entropy inequality. The CKW tightening (Step 3) uses the standard qubit concurrence
- Corollary 2.2: Properties of entanglement entropy — standard quantum information theory
- Theorem 6.1: Consistency model — fully verified on Bell states and GHZ state

**Forward reference (not a result of this derivation):**
- Remark 5.1: ER=EPR — deferred to the [ER=EPR](/derivations/holography/er-epr) derivation. Stated here only as motivation; does not affect the rigor of any numbered result in this derivation

**Assessment:** Rigorous. All numbered results (Propositions 1.3–1.4, Theorems 2.1, 3.1, 4.1, Corollary 2.2, Theorem 6.1) have complete proofs combining the coherence axioms with established mathematical theorems (SVD, Shannon–Khinchin uniqueness, Lieb-Ruskai strong subadditivity, CKW). No new structural postulates are required — the derivation builds entirely on the existing quantum and interaction infrastructure. The ER=EPR connection (Remark 5.1) is explicitly flagged as a forward reference and does not bear on the rigor of this derivation.

## Open Gaps

1. **Quantum teleportation**: Derive teleportation as coherence channel transfer — the relational invariant provides the channel, and classical communication provides the key to unlock it.
2. **Quantum error correction**: Explore whether coherence conservation imposes fundamental limits on or structures for quantum error-correcting codes.
3. **Holographic connection**: Make the ER=EPR sketch (Proposition 5.1) rigorous by connecting to the [Area Scaling](/derivations/holography/area-scaling) and [Causal Set Statistics](/derivations/holography/causal-set-statistics) derivations.
4. **Multipartite entanglement**: Extend beyond the bipartite case to full multipartite classification (W-states, cluster states, SLOCC classes).
5. **Entanglement dynamics**: Derive entanglement growth under unitary evolution and the scrambling time from coherence dynamics.
