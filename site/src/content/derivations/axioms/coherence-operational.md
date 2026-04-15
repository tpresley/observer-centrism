---
title: "Coherence as Physical Primitive"
status: "derived"
dependsOn: ["axioms/coherence-conservation", "axioms/loop-closure", "quantum/born-rule"]
enablesDerivation: []
tags: ["foundation"]
summary: "Convergence of the coherence conditions with quantum information theory — von Neumann entropy correspondence, operational meaning, and classical limit"
rigorLevel: "formal"
lastUpdated: 2026-04-12
---

## Overview

This derivation answers a challenge: **what is coherence, concretely?**

Axiom 1 ([Coherence Conservation](/derivations/axioms/coherence-conservation)) defines coherence as a subadditive measure on a $\sigma$-algebra with five conditions — positivity (C1), normalization (C2), null empty set (C3), subadditivity (C4), and strong subadditivity (C5). But a skeptic may ask: is this a genuine physical quantity or an abstract placeholder? Does coherence connect to anything already known?

**The argument.** Coherence converges with established physics from three independent directions:

- **Quantum information theory.** The five conditions of Axiom 1 are exactly the axioms satisfied by von Neumann entropy on quantum subsystems. Strong subadditivity (C5) is the Lieb–Ruskai theorem (1973). Relational coherence equals quantum mutual information.
- **Operational meaning.** Coherence of a subsystem measures information capacity — the maximum number of distinguishable states. Relational coherence measures correlation between subsystems. Conservation means no information is created or destroyed.
- **Classical limit.** In the classical regime, coherence reduces to Shannon entropy, and coherence conservation becomes Liouville's theorem (phase space volume preservation).

The functional uniqueness of coherence on quantum states — that the unique $U(1)$-invariant, composition-compatible coherence functional is $\mathcal{C}(|\psi\rangle) = \langle\psi|\psi\rangle$ — is established in [Born Rule](/derivations/quantum/born-rule), Theorem 6c.1, where it follows from the Cauchy multiplicative equation and the coherence-fraction bridge.

**The result.** Coherence is not a new invention. It is a unifying name for quantities that already pervade physics — entropy, information, inner product — recognized here as manifestations of a single conserved primitive. The conditions of Axiom 1 are the minimal properties shared by all these realizations.

**Why this matters.** This removes the worry that "coherence" is doing enormous conceptual work without clear content. The content is quantum information theory. The axioms are not ad hoc — they are the axioms of quantum entropy, discovered independently by Lieb and Ruskai.

**Why "coherence" and not "entropy"?** If the conditions of Axiom 1 match the axioms of quantum entropy, why introduce a new name? Because Axiom 1 is *stronger* than entropy conservation alone. Conservation (C2) says the total is constant under admissible evolution — that is unitarity, and entropy has it. But subadditivity (C4) and strong subadditivity (C5) constrain how subsystem values relate to each other: they are compositional axioms about structure, not just a statement about a conserved total. Von Neumann entropy happens to satisfy them [Araki–Lieb, 1970]; [Lieb–Ruskai, 1973], but those are deep *theorems*, not part of entropy's definition. Moreover, the inner product $\langle\psi|\psi\rangle$ ([Born Rule](/derivations/quantum/born-rule), Theorem 6c.1) is also a realization of the same axioms, and no one would call it entropy. "Coherence" names the abstract structure — positive, subadditive, conserved — that entropy, inner products, and phase space volumes share. The abstraction earns its own name because it is the load-bearing primitive: the derivation chain runs from C1–C5, not from any single realization.

**An honest caveat.** The convergence establishes structural isomorphism — the same mathematical axioms, the same derived quantities. It does not establish ontological identity: whether coherence *is* entropy, or whether both are aspects of something deeper, remains a philosophical question the framework does not attempt to settle.


## Statement

**Theorem.** The conditions of Axiom 1 (C1–C5, as defined in [Coherence Conservation](/derivations/axioms/coherence-conservation)) are structurally isomorphic to the axioms of quantum entropy. This isomorphism identifies relational coherence with quantum mutual information, coherence conservation with unitarity, and the coherence measure on quantum states with the squared norm $\langle\psi|\psi\rangle$ (uniqueness established in [Born Rule](/derivations/quantum/born-rule), Theorem 6c.1).

## Derivation

### Step 1: Coherence Conditions as Entropy Axioms

**Theorem 1.1 (Quantum entropy satisfies Axiom 1).** *Let $\rho$ be a density operator on a composite Hilbert space $\mathcal{H} = \bigotimes_i \mathcal{H}_i$. For any subsystem $S$ (a subset of the tensor factors), define $\mathcal{C}(S) = S(\rho_S)$ where $S(\rho_S) = -\text{Tr}(\rho_S \log \rho_S)$ is the von Neumann entropy of the reduced state $\rho_S = \text{Tr}_{\bar{S}}(\rho)$. Then $\mathcal{C}$ satisfies all five conditions (C1)–(C5) of Axiom 1.*

*Proof.* We verify each condition:

**(C1) Positivity.** $S(\rho_S) \geq 0$ for any density operator $\rho_S$, since the eigenvalues $\lambda_i \in [0,1]$ satisfy $-\lambda_i \log \lambda_i \geq 0$. $\checkmark$

**(C2) Local finiteness and non-triviality.** For any subsystem $S$ with finite-dimensional Hilbert space, $S(\rho_S) < \infty$ (von Neumann entropy is bounded by $\log \dim \mathcal{H}_S$). And $S(\rho) > 0$ for any mixed global state. Under unitary evolution $\rho \mapsto U\rho U^\dagger$, the von Neumann entropy is invariant: $S(U\rho U^\dagger) = S(\rho)$ (since the eigenvalues are preserved by unitary conjugation). $\checkmark$

**(C3) Null empty set.** The empty subsystem has a one-dimensional Hilbert space ($\mathbb{C}$) with the unique density operator $\rho_\emptyset = 1$. Then $S(\rho_\emptyset) = 0$. $\checkmark$

**(C4) Subadditivity.** For disjoint subsystems $A, B$ with $\rho_{AB} = \text{Tr}_{\overline{AB}}(\rho)$:

$$S(\rho_{AB}) \leq S(\rho_A) + S(\rho_B)$$

This is the quantum subadditivity theorem [Araki & Lieb, 1970]. Equality holds iff $\rho_{AB} = \rho_A \otimes \rho_B$ (the subsystems are uncorrelated). $\checkmark$

**(C5) Strong subadditivity.** For any subsystems $A, B, C$ (not necessarily disjoint, with natural identification of overlapping tensor factors):

$$S(\rho_{AB}) + S(\rho_{BC}) \geq S(\rho_{ABC}) + S(\rho_B)$$

This is the Lieb–Ruskai theorem (1973), one of the deepest results in quantum information theory. Proved using the joint convexity of relative entropy. $\checkmark$ $\square$

**Corollary 1.2 (Converse direction).** *The quantum entropy model satisfies Axiom 1 with strict subadditivity whenever the global state is entangled: for any entangled $\rho$, there exist subsystems $A, B$ with $\mathcal{C}(A : B) > 0$.*

*Proof.* If $\rho$ is entangled across the $A|B$ cut, then $\rho_{AB} \neq \rho_A \otimes \rho_B$, so $S(\rho_{AB}) < S(\rho_A) + S(\rho_B)$ (strict subadditivity). Therefore $\mathcal{C}(A:B) = S(\rho_A) + S(\rho_B) - S(\rho_{AB}) > 0$. $\square$

**Remark.** The converse direction shows that the non-trivial model of [Coherence Conservation](/derivations/axioms/coherence-conservation) (Model 2, strictly subadditive) has a concrete realization: quantum systems in entangled states. Strict subadditivity — and hence non-zero relational coherence — is the norm in quantum mechanics, not the exception.

### Step 2: Relational Coherence Is Mutual Information

**Theorem 2.1 (Dictionary).** *Under the identification $\mathcal{C}(S) = S(\rho_S)$, every derived quantity from [Coherence Conservation](/derivations/axioms/coherence-conservation) maps to a standard quantum information quantity:*

| Framework quantity | Definition | Quantum information quantity |
|---|---|---|
| Coherence $\mathcal{C}(S)$ | Axiom 1 | Von Neumann entropy $S(\rho_S)$ |
| Relational coherence $\mathcal{C}(A:B)$ | $\mathcal{C}(A) + \mathcal{C}(B) - \mathcal{C}(A \cup B)$ | Quantum mutual information $I(A:B)$ |
| Conditional coherence $\mathcal{C}(A\mid B)$ | $\mathcal{C}(A \cup B) - \mathcal{C}(B)$ | Conditional entropy $S(A\mid B)$ |
| Chain rule correction $\delta$ | Proposition 2.5 | Conditional mutual information $I(A;C\mid B)$ |
| Coherence independence | $\mathcal{C}(A:B) = 0$ | Zero mutual information (product state) |
| Conservation | Local conservation at each node | Unitarity ($S(\rho)$ constant under $U\rho U^\dagger$) |
| Admissible transformation | Isometry of $\mathcal{C}$ | Unitary channel |

*Proof.* Each identification is verified by expanding definitions:

**Relational coherence.** $\mathcal{C}(A:B) = S(\rho_A) + S(\rho_B) - S(\rho_{AB}) = I(A:B)$, the quantum mutual information. By [Coherence Conservation](/derivations/axioms/coherence-conservation) Proposition 2.2, $\mathcal{C}(A:B) \geq 0$; this recovers the non-negativity of mutual information.

**Conditional coherence.** $\mathcal{C}(A|B) = S(\rho_{AB}) - S(\rho_B) = S(A|B)$, the quantum conditional entropy. Unlike classical conditional entropy, this can be negative (when $A$ and $B$ are entangled and $S(\rho_{AB}) < S(\rho_B)$). This is consistent with [Coherence Conservation](/derivations/axioms/coherence-conservation): the axioms do not constrain the sign of $\mathcal{C}(A|B)$.

**Chain rule correction.** The correction $\delta$ in Proposition 2.5 equals the conditional mutual information $I(A;C|B) = S(\rho_{AB}) + S(\rho_{BC}) - S(\rho_B) - S(\rho_{ABC}) \geq 0$. The non-negativity follows from strong subadditivity (C5). In the general framework, the sign of $\delta$ is model-dependent ([Coherence Conservation](/derivations/axioms/coherence-conservation), Remark after Proposition 2.5); in the quantum model, it is always non-negative. $\square$

### Step 3: Operational Meaning

**Definition 3.1 (Operational coherence).** The coherence of a subsystem $S$ has three equivalent operational interpretations:

**(i) Information capacity.** $\mathcal{C}(S) = S(\rho_S)$ quantifies the information carried by $S$ about the rest of the system. It equals the maximum number of bits that could be extracted from $S$ by an optimal measurement, given knowledge of the global state.

**(ii) Entanglement witness.** For a bipartite pure state $|\psi_{AB}\rangle$, $\mathcal{C}(A) = \mathcal{C}(B) = S(\rho_A)$ equals the entanglement entropy — the unique measure of bipartite entanglement for pure states [Bennett, Bernstein, Popescu, Schumacher, 1996].

**(iii) Compression limit.** By Schumacher's quantum noiseless coding theorem (1995), $\mathcal{C}(S) = S(\rho_S)$ equals the minimum number of qubits per copy needed to faithfully represent the state of $S$ in the asymptotic limit.

**Proposition 3.2 (Operational relational coherence).** *Relational coherence $\mathcal{C}(A:B) = I(A:B)$ quantifies the total correlations (both classical and quantum) between $A$ and $B$. It equals the cost in bits of erasing all correlations between $A$ and $B$ while preserving the individual states $\rho_A$ and $\rho_B$ [Groisman, Popescu, Winter, 2005].*

**Proposition 3.3 (Operational conservation).** *Local coherence conservation (inputs equal outputs at every interaction node) is operationally equivalent to:*

*(i)* ***No-creation:*** *No physical process can increase the total information content of the universe.*

*(ii)* ***No-destruction:*** *No physical process can decrease the total information content of the universe (unitarity / reversibility).*

*(iii)* ***Closed ontology:*** *There is no external reservoir from which information could flow in or to which it could leak out.*

*Proof.* (i) and (ii) follow from local conservation at each interaction node: coherence cannot increase (no creation) or decrease (no destruction) through any admissible process. (iii) follows from the structure of the $\sigma$-algebra: $\mathcal{H}$ is the universe of all configurations, so there is no "outside." $\square$

### Step 4: Classical Limit

**Proposition 5.1 (Classical convergence).** *In the classical limit (diagonal density matrices $\rho = \text{diag}(p_1, \ldots, p_d)$), the von Neumann entropy reduces to Shannon entropy: $S(\rho) = -\sum_k p_k \log p_k = H(\mathbf{p})$. The conditions of Axiom 1 reduce to the Shannon entropy axioms, and coherence conservation becomes Liouville's theorem.*

*Proof.* For diagonal $\rho$, the eigenvalues are the probabilities $p_k$, and $S(\rho) = H(\mathbf{p})$ by definition. Classical subadditivity of Shannon entropy is standard. Classical strong subadditivity $H(X,Y) + H(Y,Z) \geq H(X,Y,Z) + H(Y)$ holds for joint distributions (equivalent to non-negativity of conditional mutual information, proved by Shannon). Conservation of Shannon entropy under invertible transformations is Liouville's theorem for Hamiltonian flows (measure preservation $\Leftrightarrow$ entropy preservation). $\square$

### Step 5: Why Coherence Is Primitive

**Proposition 6.1 (Primitive status).** *Coherence occupies the same epistemological position as mass in Newtonian mechanics: it is characterized by its axioms and measured by its operational consequences, not defined in terms of other quantities.*

The analogy is precise:

| | Mass (Newtonian) | Coherence (Observer-Centrism) |
|---|---|---|
| **Axioms** | Positive, additive, conserved | Positive, subadditive, conserved (Axiom 1: C1–C5) |
| **Operational meaning** | Resistance to acceleration ($F = ma$) | Information capacity ($S(\rho)$) |
| **Conservation law** | $\sum m_i = \text{const}$ | Local conservation at each interaction node |
| **Relational quantity** | Gravitational interaction ($Gm_1 m_2/r^2$) | Mutual information ($I(A:B)$) |
| **Known realizations** | Inertial mass, gravitational mass, relativistic energy | Entropy, inner product, phase space volume |

Like mass, coherence is not "nothing but entropy" or "nothing but the inner product." It is the abstract property that entropy, inner products, and phase space volumes share — conservation under admissible dynamics, positivity, and subadditivity — extracted as a foundational primitive.

### Consistency Model

**Theorem 7.1.** *A qubit pair $\mathcal{H} = \mathbb{C}^2 \otimes \mathbb{C}^2$ in the Bell state $|\Phi^+\rangle = (|00\rangle + |11\rangle)/\sqrt{2}$ provides a consistency model for all results of this derivation.*

*Verification.* **Note on non-triviality:** A pure global state has $S(\rho) = 0$, which would violate C2's requirement $\mathcal{C}(\mathcal{H}) > 0$. We therefore use the Bell state as the *accessible* state of a bounded observer, embedded in a larger thermal environment with $\mathcal{C}(\mathcal{H}) > 0$. Concretely, take the total system in a thermal state $\rho_{\text{total}} = e^{-\beta H}/Z$ with $S(\rho_{\text{total}}) = \beta \langle H \rangle + \log Z > 0$, and the Bell pair as a subsystem. The axiom structure is verified on the subsystem:

- **C1**: $S(\rho_A) = \log 2 \geq 0$. $\checkmark$
- **C4**: $S(\rho_{AB}) = 0 \leq S(\rho_A) + S(\rho_B) = 2\log 2$. $\checkmark$
- **C5**: Trivially satisfied (only two subsystems). $\checkmark$
- **Relational coherence**: $\mathcal{C}(A:B) = \log 2 + \log 2 - 0 = 2\log 2 > 0$. Maximal entanglement produces maximal relational coherence. $\checkmark$
- **Coherence functional**: The inner product $\langle\psi|\psi\rangle = 1$ is the unique U(1)-invariant quadratic functional ([Born Rule](/derivations/quantum/born-rule), Theorem 6c.1). $\checkmark$
- **Classical limit**: Replace $|\Phi^+\rangle$ with classical correlation $p(00) = p(11) = 1/2$. Then $H(AB) = \log 2$, $H(A) = H(B) = \log 2$, $I(A:B) = \log 2$. All axioms satisfied. $\checkmark$ $\square$

## Rigor Assessment

**Fully rigorous (established mathematics):**
- Theorem 1.1: Von Neumann entropy satisfies Axiom 1 [Araki–Lieb, 1970]; [Lieb–Ruskai, 1973]
- Theorem 2.1: Dictionary (definitions match by construction)
- Definition 3.1: Operational interpretations [Schumacher, 1995]; [Bennett et al., 1996]; [Groisman et al., 2005]
- Proposition 4.1: Classical limit (Shannon entropy properties)

**Rigorous given axioms:**
- Proposition 3.3: Operational conservation (from axiom structure)

**Structural:**
- Proposition 5.1: Primitive status analogy (philosophical, not mathematical)

**Assessment:** The convergence results are mathematical facts — they show that the conditions of Axiom 1 are satisfied by quantum entropy, that the derived quantities match quantum information quantities, and that coherence connects to established physics from multiple independent directions. The uniqueness of the coherence functional on quantum states ($\mathcal{C}(|\psi\rangle) = \langle\psi|\psi\rangle$) is established in [Born Rule](/derivations/quantum/born-rule), Theorem 6c.1.

## Open Gaps

1. **Quantitative Cauchy-slice total**: The derived Cauchy-slice total $C_0$ (Proposition 5.5 of [Coherence Conservation](/derivations/axioms/coherence-conservation)) corresponds to $S(\rho_{\text{total}})$ in the quantum realization. Its value is determined by the bootstrap fixed point — it is an output of the self-consistent solution, not a free parameter.
2. **Rényi generalization**: Axiom 1 is also satisfied by Rényi entropies $S_\alpha(\rho) = (1-\alpha)^{-1}\log\text{Tr}(\rho^\alpha)$ for $\alpha \in (0,1)$ (strong subadditivity holds in this range). Whether the framework selects von Neumann ($\alpha = 1$) over other Rényi orders, or whether this is a free choice, is open.
3. **Algebraic vs. measure-theoretic coherence**: The σ-algebra formulation (Axiom 1, conditions C1–C5) and the Hilbert space formulation ($\mathcal{C} = \langle\psi|\psi\rangle$) operate at different levels. The former concerns subsystem structure; the latter concerns state-level properties. A unified formulation treating both as aspects of a single categorical structure (a functor from subsystem inclusions to coherence values) would strengthen the convergence.

<!-- References -->
[Araki & Lieb, 1970]: /references#araki-lieb-1970
[Araki–Lieb, 1970]: /references#araki-lieb-1970
[Lieb–Ruskai, 1973]: /references#lieb-ruskai-1973
[Aczél & Dhombres, 1989]: /references#aczél-dhombres-1989
[Schumacher, 1995]: /references#schumacher-1995
[Bennett et al., 1996]: /references#bennett-1996
[Bennett, Bernstein, Popescu, Schumacher, 1996]: /references#bennett-bernstein-popescu-schumacher-1996
[Groisman et al., 2005]: /references#groisman-2005
[Groisman, Popescu, Winter, 2005]: /references#groisman-popescu-winter-2005
