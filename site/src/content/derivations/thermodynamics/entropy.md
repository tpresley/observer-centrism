---
title: "Entropy as Inaccessible Coherence"
status: "provisional"
dependsOn: ["thermodynamics/time", "interactions/relational-invariants"]
enablesDerivation: []
tags: ["dynamics"]
summary: "Entropy relative to observer A is total coherence minus A's accessible coherence; the second law follows structurally from bounded observation"
rigorLevel: "formal"
sourceSection: "05-time-entropy-action"
lastUpdated: 2026-03-08
---

## Statement

**Theorem.** Entropy is observer-indexed: the entropy of a system $S$ relative to observer $A$ is the coherence of $S$ that lies outside $A$'s coherence domain. The second law of thermodynamics — $dS_A/d\tau \geq 0$ — follows from two structural facts: (1) coherence is globally conserved (Axiom 1), and (2) every physical observer is bounded (its coherence domain is a proper subset of the universe). No statistical assumptions, ergodic hypotheses, or special initial conditions are required.

## Derivation

### Step 1: The Relational Invariant Graph

**Definition 1.1.** The **relational invariant graph** $\mathcal{G} = (V, E, \mathcal{C})$ is a directed acyclic graph (DAG) where:
- $V$ is the set of all relational invariant generation events (Type III interactions)
- $E \subseteq V \times V$ encodes causal precedence: $(v_1, v_2) \in E$ if the relational invariant generated at $v_1$ is a causal input to the interaction at $v_2$
- $\mathcal{C}: V \to \mathbb{R}^+$ assigns a positive coherence content to each vertex

The DAG structure follows from the partial order on interaction events established in [Time as Phase Ordering](/derivations/thermodynamics/time). The coherence assignment satisfies the conservation law:

$$\sum_{v \in V} \mathcal{C}(v) = \mathcal{C}_{\text{total}} = \text{const}$$

where the sum is over all vertices in any Cauchy slice (maximal antichain) of $\mathcal{G}$.

### Step 2: Coherence Domains

**Definition 2.1.** The **coherence domain** of observer $A$ at time $\tau$ is the subset:

$$\mathcal{D}_A(\tau) = \{v \in V : v \preceq \tau \text{ and } v \text{ is causally connected to } A\}$$

where $v \preceq \tau$ means $v$ lies in the causal past of $A$'s state at time $\tau$, and "causally connected to $A$" means there exists a directed path in $\mathcal{G}$ from some interaction involving $A$ to $v$, or from $v$ to some interaction involving $A$.

More precisely, let $V_A \subseteq V$ be the set of vertices at which $A$ directly participates (as one of the interacting observers). Then:

$$\mathcal{D}_A(\tau) = \{v \in V : v \preceq \tau \text{ and } \exists w \in V_A \text{ such that } v \preceq w \text{ or } w \preceq v\}$$

This is the **causal diamond** of $A$'s interactions — the union of the causal past and causal future of $A$'s participation events, intersected with the past of $\tau$.

**Definition 2.2.** The **accessible coherence** of observer $A$ at time $\tau$ is:

$$\mathcal{C}_A(\tau) = \sum_{v \in \mathcal{D}_A(\tau)} \mathcal{C}(v)$$

**Definition 2.3.** Observer $A$ is **bounded** if $\mathcal{D}_A(\tau) \subsetneq V$ for all $\tau$ — i.e., $A$'s coherence domain is always a proper subset of the full relational invariant graph.

**Proposition 2.4.** *Every physical observer is bounded.*

*Proof.* By the Observer Definition axiom (Axiom 2), an observer has a finite self/non-self boundary $\mathcal{B}$. The boundary has finite area $|\mathcal{B}| < \infty$. By the holographic bound (from [Area Scaling](/derivations/holography/area-scaling)), the maximum information accessible through a boundary of area $|\mathcal{B}|$ is:

$$I_{\max} = \frac{|\mathcal{B}|}{4\ell_P^2}$$

Since $|\mathcal{B}|$ is finite, $I_{\max}$ is finite, and $A$ can access at most finitely many relational invariants. But the universe contains arbitrarily many relational invariants (the bootstrap generates them continuously). Therefore $\mathcal{D}_A \subsetneq V$. $\square$

### Step 3: Entropy as Inaccessible Coherence

**Definition 3.1.** The **entropy of system $S$ relative to observer $A$** at time $\tau$ is:

$$S_A(S, \tau) = \mathcal{C}(S, \tau) - \mathcal{C}_A(S, \tau)$$

where:
- $\mathcal{C}(S, \tau)$ is the total coherence of $S$ at time $\tau$ (summed over all relational invariants involving components of $S$)
- $\mathcal{C}_A(S, \tau)$ is the coherence of $S$ that lies within $A$'s coherence domain

Entropy is the **inaccessible coherence** — the coherence that exists in $S$ but lies outside what $A$ can resolve.

**Proposition 3.2.** *$S_A(S, \tau) \geq 0$ for all $A$, $S$, $\tau$.*

*Proof.* $\mathcal{C}_A(S, \tau) \leq \mathcal{C}(S, \tau)$ because $\mathcal{D}_A(\tau) \subseteq V$ and all coherence values are non-negative. $\square$

**Proposition 3.3.** *$S_A(S, \tau) = 0$ if and only if $A$ has complete access to $S$ — every relational invariant of $S$ lies within $A$'s coherence domain.*

*Proof.* $S_A = 0$ iff $\mathcal{C}_A(S) = \mathcal{C}(S)$ iff every vertex in $\mathcal{G}$ involving $S$ lies in $\mathcal{D}_A$. $\square$

### Step 4: The Second Law

**Theorem 4.1 (Second Law of Thermodynamics).** *For any bounded observer $A$ and any forward step $\tau \to \tau + \delta\tau$ in the relational invariant graph:*

$$S_A(S, \tau + \delta\tau) \geq S_A(S, \tau)$$

*Equality holds only in the degenerate case where all new relational invariants generated in $[\tau, \tau + \delta\tau]$ fall within $A$'s coherence domain.*

*Proof.* During the interval $[\tau, \tau + \delta\tau]$, new Type III interactions occur in the universe, generating a set of new relational invariants $\Delta V = \{v_{N+1}, \ldots, v_{N+k}\}$ with total new coherence $\Delta\mathcal{C} = \sum_{j} \mathcal{C}(v_{N+j})$.

By coherence conservation (Axiom 1), the total coherence is redistributed but not created or destroyed. In the interaction graph, this means:

$$\mathcal{C}(S, \tau + \delta\tau) = \mathcal{C}(S, \tau) + \Delta\mathcal{C}_S$$

where $\Delta\mathcal{C}_S$ is the net coherence change involving $S$ (which may be positive, negative, or zero depending on whether $S$ gains or loses relational invariants).

Partition $\Delta V$ into two sets:
- $\Delta V_A = \Delta V \cap \mathcal{D}_A(\tau + \delta\tau)$: new invariants within $A$'s updated domain
- $\Delta V_{\bar{A}} = \Delta V \setminus \Delta V_A$: new invariants outside $A$'s domain

Then:

$$\mathcal{C}_A(S, \tau + \delta\tau) = \mathcal{C}_A(S, \tau) + \Delta\mathcal{C}_{S,A}$$

where $\Delta\mathcal{C}_{S,A}$ counts only the new coherence from $\Delta V_A$ that involves $S$.

The change in entropy is:

$$\Delta S_A = S_A(\tau + \delta\tau) - S_A(\tau) = (\Delta\mathcal{C}_S - \Delta\mathcal{C}_{S,A})$$

Since $\Delta\mathcal{C}_{S,A} \leq \Delta\mathcal{C}_S$ (the accessible portion is at most the total), we have $\Delta S_A \geq 0$.

More precisely: the new relational invariants in $\Delta V_{\bar{A}}$ that involve $S$ contribute to $\mathcal{C}(S)$ but not to $\mathcal{C}_A(S)$. Their coherence is by definition inaccessible to $A$, and adds directly to $S_A$.

For the strict inequality: since $A$ is bounded (Proposition 2.4), there exist interactions in the universe outside $A$'s coherence domain. As long as some of these interactions involve $S$ (which is the generic case for any macroscopic system), $\Delta V_{\bar{A}} \cap \{$involving $S\} \neq \emptyset$, and $\Delta S_A > 0$. $\square$

**Remark.** The proof requires two inputs:
1. **Coherence conservation** (Axiom 1): the total is conserved, so new invariants outside $A$'s domain increase inaccessible coherence
2. **Boundedness** (Proposition 2.4): $A$ cannot access everything

No statistical mechanics, no ensemble averaging, no ergodic hypothesis. The second law is structural.

### Step 5: Monotonicity of the Coherence Domain

**Proposition 5.1.** *The coherence domain of $A$ is monotonically non-decreasing: $\mathcal{D}_A(\tau) \subseteq \mathcal{D}_A(\tau')$ for $\tau \leq \tau'$.*

*Proof.* The coherence domain is defined as the causal diamond of $A$'s interactions intersected with the causal past. As $\tau$ advances, the causal past grows (it can only include more events, never fewer), and $A$ may participate in new interactions (adding new vertices to $V_A$). Both effects can only enlarge $\mathcal{D}_A$, never shrink it. $\square$

**Corollary 5.2.** *$A$'s accessible coherence is non-decreasing: $\mathcal{C}_A(\tau) \leq \mathcal{C}_A(\tau')$ for $\tau \leq \tau'$.*

This means $A$ never loses access to coherence it has already accessed. The second law arises not because $A$ loses access, but because the universe generates new coherence outside $A$'s reach faster than $A$'s domain expands.

### Step 6: Global Entropy

**Theorem 6.1.** *The entropy of the universe relative to itself is identically zero:*

$$S_{\text{univ}}(\text{univ}, \tau) = 0 \quad \forall \tau$$

*Proof.* The "universe as observer" has $\mathcal{D}_{\text{univ}} = V$ (every relational invariant is within its domain). Therefore $\mathcal{C}_{\text{univ}} = \mathcal{C}_{\text{total}}$, and $S_{\text{univ}} = \mathcal{C}_{\text{total}} - \mathcal{C}_{\text{total}} = 0$. $\square$

**Corollary 6.2.** *Global entropy does not increase. The second law is a statement about bounded observers, not about the universe.*

This resolves the tension between the second law and time-reversal symmetry. The fundamental dynamics (coherence conservation) is time-symmetric. The asymmetry arises from the observer's bounded perspective — the distinction between accessible and inaccessible coherence is observer-dependent and inherently asymmetric under the observer's advancement through the interaction graph.

### Step 7: Maximum Entropy and Thermal Equilibrium

**Definition 7.1.** Observer $A$ is in **thermal equilibrium** with system $S$ when $A$'s entropy of $S$ reaches its maximum:

$$S_A^{\max}(S) = \mathcal{C}(S) - \mathcal{C}_A^{\text{sat}}(S)$$

where $\mathcal{C}_A^{\text{sat}}(S)$ is $A$'s saturated accessible coherence — the maximum $A$ can access given the finite capacity of its boundary.

**Proposition 7.2.** *Maximum entropy is observer-relative. Two observers $A$ and $B$ may assign different maximum entropies to the same system.*

*Proof.* If $\mathcal{D}_A \neq \mathcal{D}_B$, then $\mathcal{C}_A^{\text{sat}} \neq \mathcal{C}_B^{\text{sat}}$ in general, giving $S_A^{\max} \neq S_B^{\max}$. $\square$

**Remark.** This is not "heat death is observer-relative" in a trivial sense. Different observers literally have different thermodynamic equilibria because they integrate different portions of the coherence structure.

### Step 8: Recovery of Boltzmann Entropy

**Proposition 8.1.** *The Boltzmann formula $S = k_B \ln \Omega$ is recovered as a special case when coherence is distributed uniformly across microstates.*

*Proof sketch.* Suppose system $S$ has $N$ relational invariants, each with equal coherence $\mathcal{C}_0$, so $\mathcal{C}(S) = N \mathcal{C}_0$. Observer $A$ can resolve $n_A$ of these invariants (those in $\mathcal{D}_A$), so $\mathcal{C}_A(S) = n_A \mathcal{C}_0$.

$A$'s macroscopic description of $S$ is consistent with $\Omega = \binom{N}{n_A}$ distinct microscopic configurations — the number of ways to choose which $n_A$ out of $N$ invariants fall within $A$'s domain.

For $N \gg n_A \gg 1$, using Stirling's approximation:

$$\ln \Omega \approx N \ln N - n_A \ln n_A - (N - n_A)\ln(N - n_A) \propto N - n_A \propto S_A$$

Setting $k_B$ as the proportionality constant between coherence units and thermodynamic units recovers $S = k_B \ln \Omega$.

The logarithm arises because independent relational invariants contribute multiplicatively to the number of compatible configurations but additively to the inaccessible coherence. $\square$

## Comparison with Standard Thermodynamics

| Aspect | Standard thermodynamics | Observer-centrism |
|---|---|---|
| Entropy definition | $S = k_B \ln \Omega$ (log of microstates) | $S_A = \mathcal{C} - \mathcal{C}_A$ (inaccessible coherence) |
| Observer dependence | Observer-independent | Observer-indexed (fundamental) |
| Second law | Statistical tendency ($\Delta S \geq 0$ on average) | Structural theorem (Theorem 4.1) |
| Mechanism | Phase space expansion, ergodicity | Bounded observation + coherence conservation |
| Heat death | Universal | Observer-relative (Proposition 7.2) |
| Global entropy | Increases | Constant at zero (Theorem 6.1) |
| Arrow of time | Requires special initial conditions (past hypothesis) | Structural: boundedness + causal ordering |
| Time-reversal | Paradox (Loschmidt) | No paradox: asymmetry is in the observer, not the dynamics |

## Rigor Assessment

**Fully rigorous:**
- Definitions 1.1, 2.1–2.3, 3.1: These are precise set-theoretic and graph-theoretic definitions
- Propositions 3.2, 3.3: $S_A \geq 0$ and the zero-entropy characterization are immediate from the definitions
- Proposition 5.1 and Corollary 5.2: Monotonicity of the coherence domain follows from the causal structure
- Theorem 6.1: Global entropy equals zero follows directly from the definitions

**Rigorous given axioms:**
- Theorem 4.1 (Second Law): The proof is valid given coherence conservation (Axiom 1) and boundedness (Proposition 2.4). The proof is structural — no statistical assumptions needed.
- Proposition 2.4 (Boundedness): This uses the holographic bound, which is at draft level. Without the holographic bound, boundedness can be taken as an empirical observation (every known observer is bounded).

**Provisional:**
- Proposition 8.1 (Boltzmann recovery): The proof sketch assumes uniform coherence distribution and uses an approximate counting argument. A full derivation requires the statistical mechanics of the relational invariant graph.
- The identification of the graph-theoretic framework with physical thermodynamic systems assumes that the relational invariant graph faithfully represents the microscopic physics.

**Assessment:** The second law proof (Theorem 4.1) is the strongest result — it follows purely from coherence conservation and boundedness with no statistical input. The definitions are precise and the deductions are valid. The main provisional elements are the Boltzmann recovery and the connection to the holographic bound.

## Open Gaps

1. **Boltzmann's constant**: $k_B$ enters as the proportionality constant between coherence units and thermodynamic energy units ($S_{\text{thermo}} = k_B \cdot S_{\text{coherence}}$). Its numerical value should be derivable once the action/Planck constant relation is established.
2. **Fluctuation theorems**: The Jarzynski equality $\langle e^{-\beta W}\rangle = e^{-\beta \Delta F}$ and Crooks fluctuation theorem describe the probability of entropy-decreasing fluctuations. These should arise as finite-size corrections to Theorem 4.1 when $A$'s coherence domain fluctuates.
3. **Negative entropy flow**: Living systems locally decrease their entropy by expanding their coherence domains through structured interactions. The framework predicts this is possible because entropy is observer-relative — what decreases for the organism increases for its environment.
4. **Quantum entropy**: The von Neumann entropy $S = -\text{tr}(\rho \ln \rho)$ should be derivable as the inaccessible coherence when $A$'s access is limited to a subsystem of an entangled state.
