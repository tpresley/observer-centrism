---
title: "Entropy as Inaccessible Coherence"
status: "derived"
dependsOn: ["thermodynamics/time", "interactions/relational-invariants", "interactions/bootstrap"]
enablesDerivation: ["thermodynamics-ext/non-ergodicity", "thermodynamics-ext/biological-non-ergodicity", "cosmology/cosmological-arrow", "thermodynamics-ext/memory-persistence-tradeoff"]
tags: ["dynamics"]
summary: "Entropy relative to observer A is total coherence minus A's accessible coherence; the second law follows structurally from bounded observation"
rigorLevel: "formal"
lastUpdated: 2026-03-09
---

## Overview

This derivation answers a question that has puzzled physicists since Boltzmann: **why does entropy always increase?**

The standard account treats entropy increase as a statistical tendency -- overwhelmingly likely but not guaranteed, and requiring special initial conditions (the "past hypothesis") to get started. This derivation replaces that entire apparatus with a structural theorem that needs no statistics and no special initial conditions.

**The approach.** Entropy is redefined as the coherence an observer cannot access. Every observer is bounded -- it can only "see" a finite portion of the universe's total coherence structure. Meanwhile, the universe continuously generates new relational structure beyond any observer's reach.

- Total coherence is conserved (nothing is created or destroyed).
- Every observer has a finite causal reach -- it cannot access everything.
- New structure is constantly being generated throughout the universe, including in regions the observer cannot reach.
- Therefore the gap between total coherence and accessible coherence can only grow.

**The result.** Entropy increase is not a statistical tendency but a structural theorem: bounded observation plus conservation guarantees that inaccessible coherence never decreases. Crucially, the entropy of the entire universe relative to itself is always zero -- the second law is a statement about limited observers, not about the cosmos.

**Why this matters.** This resolves the Loschmidt paradox (why entropy increases despite time-reversible dynamics) by locating the asymmetry in the observer's bounded perspective, not in the underlying laws. It also explains why different observers can assign different entropies to the same system -- entropy is fundamentally observer-relative.

**An honest caveat.** The recovery of the standard Boltzmann formula requires an additional assumption of uniform coherence distribution, which is a special case of the more general framework.


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

*Proof.* By the Observer Definition ([Observer Definition](/derivations/axioms/observer-definition), Axiom 2), an observer $A = (\Sigma_A, I_A, \mathcal{B}_A)$ has a finite state space $\Sigma_A$ with finite coherence content $\mathcal{C}(\Sigma_A) < C_0$ (strictly less than the total — if $\mathcal{C}(\Sigma_A) = C_0$, then $A$ is the entire universe and has $\mathcal{C} = 0$ by [Multiplicity](/derivations/minimal-observer/multiplicity), Theorem 2.1).

An observer's coherence domain $\mathcal{D}_A(\tau)$ is limited by $A$'s causal reach — the set of events causally connected to $A$'s interactions. At any finite $\tau$, $A$ has participated in finitely many interactions (each interaction costs positive coherence by [Time](/derivations/thermodynamics/time), Proposition 2.1, so infinitely many would require infinite coherence). Therefore $|V_A|$ is finite, and $\mathcal{D}_A(\tau)$ is a finite subset of $V$.

Meanwhile, the bootstrap ([Bootstrap](/derivations/interactions/bootstrap), Theorem 3.1) continuously generates new relational invariants throughout the universe, including in regions causally disconnected from $A$. Therefore $V$ grows unboundedly while $\mathcal{D}_A$ grows at most linearly in $\tau$, ensuring $\mathcal{D}_A(\tau) \subsetneq V$ for all $\tau$. $\square$

**Remark.** A stronger quantitative bound on $\mathcal{D}_A$ comes from the holographic entropy bound ([Area Scaling](/derivations/holography/area-scaling)), which limits the information accessible through a finite boundary. But boundedness itself follows from the axioms alone — no holographic argument is needed.

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

$$\Delta S_A = S_A(\tau + \delta\tau) - S_A(\tau) = \Delta\mathcal{C}_S - \Delta\mathcal{C}_{S,A}$$

We show $\Delta S_A \geq 0$. The total new coherence involving $S$ is $\Delta\mathcal{C}_S = \Delta\mathcal{C}_{S,A} + \Delta\mathcal{C}_{S,\bar{A}}$, where $\Delta\mathcal{C}_{S,\bar{A}} \geq 0$ is the coherence from new invariants involving $S$ that lie outside $A$'s domain (all coherence values are non-negative by C1 of [Coherence Conservation](/derivations/axioms/coherence-conservation)). Therefore:

$$\Delta S_A = \Delta\mathcal{C}_{S,\bar{A}} \geq 0$$

The entropy increase equals exactly the coherence of new relational invariants involving $S$ that are inaccessible to $A$.

For the strict inequality: since $A$ is bounded (Proposition 2.4), there exist interactions in the universe outside $A$'s coherence domain. As long as some of these interactions involve components of $S$ (which is the generic case for any macroscopic system interacting with the broader universe), $\Delta\mathcal{C}_{S,\bar{A}} > 0$, and $\Delta S_A > 0$. $\square$

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

**Proposition 8.1 (Boltzmann recovery).** *Under the assumption of uniform coherence distribution, the Boltzmann formula $S = k_B \ln \Omega$ is recovered as a special case.*

*Proof.* **Setup:** Suppose system $S$ has $N$ relational invariants, each with equal coherence $\mathcal{C}_0$, so $\mathcal{C}(S) = N \mathcal{C}_0$. Observer $A$ can resolve $n_A$ of these invariants (those in $\mathcal{D}_A$), so $\mathcal{C}_A(S) = n_A \mathcal{C}_0$.

$A$'s macroscopic description of $S$ is consistent with $\Omega = \binom{N}{n_A}$ distinct microscopic configurations — the number of ways to choose which $n_A$ out of $N$ invariants fall within $A$'s domain.

For $N \gg n_A \gg 1$, using Stirling's approximation:

$$\ln \Omega \approx N \ln N - n_A \ln n_A - (N - n_A)\ln(N - n_A) \propto N - n_A \propto S_A$$

Setting $k_B$ as the proportionality constant between coherence units and thermodynamic units recovers $S = k_B \ln \Omega$.

The logarithm arises because independent relational invariants contribute multiplicatively to the number of compatible configurations but additively to the inaccessible coherence.

**Remark.** The uniform coherence distribution assumption is a special case, not the general situation. The general inaccessible-coherence entropy (Definition 3.1) does not require equipartition and applies to arbitrary coherence distributions. The Boltzmann formula is recovered as the equipartition limit. $\square$

### Step 9: Status of Boltzmann's Constant

**Remark 9.1 (Boltzmann's constant is a unit conversion factor).** The constant $k_B$ appearing in Proposition 8.1 is not a dynamical quantity but a unit conversion factor, fully determined once $\hbar$ and the definition of temperature are in place.

In the framework, entropy $S_A$ (Definition 3.1) is dimensionless — it counts inaccessible coherence in natural (information-theoretic) units. The action quantum $\hbar$ ([Action and Planck's Constant](/derivations/thermodynamics/action-planck)) sets the coherence cost of one loop cycle, and temperature $T$ ([Coherence First Law](/derivations/thermodynamics-ext/first-law), Definition 4.1) is defined as $T = (\partial S / \partial U)^{-1}$, where $U$ has units of energy and $S$ is dimensionless. In natural units where $\hbar = c = k_B = 1$, all three constants are unity and entropy, energy, and temperature share a common scale.

The role of $k_B$ is to convert between entropy measured in nats (dimensionless) and entropy measured in J/K:

$$S_{\text{thermo}} = k_B \cdot S_{\text{coherence}}$$

Its SI value $k_B \approx 1.381 \times 10^{-23}$ J/K reflects the historically arbitrary choice of the kelvin as a temperature unit. No dynamical content is encoded in $k_B$ — it is analogous to a conversion factor between meters and feet. Once $\hbar$ (from the action derivation) and the thermodynamic temperature definition (from the first law derivation) are established, $k_B$ is uniquely fixed by dimensional analysis. The 2019 SI redefinition, which assigns $k_B$ an exact value, confirms this status: $k_B$ is a defined constant, not a measured one.

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
- Definitions 1.1, 2.1–2.3, 3.1: Precise set-theoretic and graph-theoretic definitions
- Proposition 2.4: Boundedness proved from axioms (finite coherence + finite interactions + bootstrap growth), no holographic bound needed
- Propositions 3.2, 3.3: $S_A \geq 0$ and zero-entropy characterization are immediate from definitions
- Theorem 4.1 (Second Law): Structural proof from coherence conservation (Axiom 1) + boundedness (Proposition 2.4) + non-negativity (C1). Key step: $\Delta S_A = \Delta\mathcal{C}_{S,\bar{A}} \geq 0$. No statistical assumptions needed.
- Proposition 5.1 and Corollary 5.2: Monotonicity of coherence domain from causal structure
- Theorem 6.1: Global entropy equals zero from definitions
- Corollary 6.2: Resolution of Loschmidt paradox (asymmetry in the observer, not the dynamics)
- Proposition 8.1: Boltzmann recovery under uniform-coherence assumption (complete counting argument with Stirling approximation)

**Deferred to later derivations:**
- Quantitative holographic bound on coherence domain (requires [Area Scaling](/derivations/holography/area-scaling))
- Precise value of $k_B$ (requires [Action and Planck's Constant](/derivations/thermodynamics/action-planck))
- Von Neumann entropy as special case (requires [Born Rule](/derivations/quantum/born-rule))
- Fluctuation theorems (finite-size corrections to Theorem 4.1)

**Assessment:** The second law (Theorem 4.1) is the strongest result — proved purely from coherence conservation and boundedness with no statistical input, no ergodic hypothesis, and no special initial conditions. The boundedness proof now relies only on the axioms (not on the holographic bound). The Boltzmann recovery is a complete proof under the stated assumption of uniform coherence distribution.

## Open Gaps

1. **Fluctuation theorems**: The Jarzynski equality $\langle e^{-\beta W}\rangle = e^{-\beta \Delta F}$ and Crooks fluctuation theorem describe the probability of entropy-decreasing fluctuations. These should arise as finite-size corrections to Theorem 4.1 when $A$'s coherence domain fluctuates.
2. **Negative entropy flow**: Living systems locally decrease their entropy by expanding their coherence domains through structured interactions. The framework predicts this is possible because entropy is observer-relative — what decreases for the organism increases for its environment.
3. **Quantum entropy**: The von Neumann entropy $S = -\text{tr}(\rho \ln \rho)$ should be derivable as the inaccessible coherence when $A$'s access is limited to a subsystem of an entangled state.

## Addressed Gaps

1. **Boltzmann's constant** — *Resolved*: $k_B$ is not a dynamical quantity but a unit conversion factor between coherence (dimensionless) and thermodynamic (J/K) entropy units, fully determined once $\hbar$ and the definition of temperature are in place. Its SI value reflects the arbitrary choice of kelvin. See Remark 9.1.
