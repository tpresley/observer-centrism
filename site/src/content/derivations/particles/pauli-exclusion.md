---
title: "Pauli Exclusion Principle"
status: "provisional"
dependsOn: ["particles/spin-statistics"]
enablesDerivation: []
tags: ["particles"]
summary: "Antisymmetric relational invariants forbid identical fermions in the same state — a coherence consistency condition, not an additional postulate"
rigorLevel: "formal"
sourceSection: "09-spin-statistics"
lastUpdated: 2026-03-08
---

## Statement

**Theorem.** Two identical fermions cannot occupy the same quantum state. This is not an additional postulate but an algebraic consequence of the antisymmetry of fermionic relational invariants (from [Spin and Statistics](/derivations/particles/spin-statistics)): if $I_{12}$ is antisymmetric under exchange and the exchange is trivial (same state), then $I_{12} = 0$ — the configuration is coherence-forbidden.

## Derivation

### Step 1: Setup and Definitions

**Definition 1.1.** Let $\mathcal{H}$ be the single-particle Hilbert space of states for a fermion species. A **two-fermion state** is a vector in $\mathcal{H} \otimes \mathcal{H}$. The **exchange operator** $P_{12}: \mathcal{H} \otimes \mathcal{H} \to \mathcal{H} \otimes \mathcal{H}$ is the linear map defined by $P_{12}(|\psi\rangle \otimes |\phi\rangle) = |\phi\rangle \otimes |\psi\rangle$.

**Definition 1.2.** The **relational invariant** $I_{12}$ of two identical observers $\mathcal{O}_1, \mathcal{O}_2$ in states $|\psi_1\rangle, |\psi_2\rangle \in \mathcal{H}$ is a function on $\mathcal{H} \otimes \mathcal{H}$ encoding the joint coherence structure of the pair. Physically, $I_{12}$ is the outcome of a Type III interaction between $\mathcal{O}_1$ and $\mathcal{O}_2$ (from [Relational Invariants](/derivations/interactions/relational-invariants)).

### Step 2: Antisymmetry from Spin-Statistics

**Proposition 2.1.** *For identical fermions (half-integer winding class $[1] \in \pi_1(SO(3)) = \mathbb{Z}_2$), the relational invariant is antisymmetric under exchange:*

$$I_{12}(|\psi_1\rangle, |\psi_2\rangle) = -I_{12}(|\psi_2\rangle, |\psi_1\rangle)$$

*Proof.* This is Proposition 4.1 of [Spin and Statistics](/derivations/particles/spin-statistics). The exchange phase for winding class $[1]$ is $e^{i\phi} = (-1)^1 = -1$. The relational invariant, as a function on $\Sigma_1 \times \Sigma_2$, inherits this phase under the swap $(|\psi_1\rangle, |\psi_2\rangle) \mapsto (|\psi_2\rangle, |\psi_1\rangle)$. $\square$

**Corollary 2.2.** *The physical two-fermion state lies in the antisymmetric subspace $\bigwedge^2 \mathcal{H} \subset \mathcal{H} \otimes \mathcal{H}$.*

*Proof.* The antisymmetric subspace is the $(-1)$-eigenspace of $P_{12}$:

$$\bigwedge^2 \mathcal{H} = \{|\Psi\rangle \in \mathcal{H} \otimes \mathcal{H} : P_{12}|\Psi\rangle = -|\Psi\rangle\}$$

Proposition 2.1 requires that the two-fermion state $|\Psi_{12}\rangle$ satisfies $P_{12}|\Psi_{12}\rangle = -|\Psi_{12}\rangle$, which is precisely the membership condition for $\bigwedge^2 \mathcal{H}$. $\square$

### Step 3: Same-State Exchange Is the Identity

**Proposition 3.1.** *If $|\psi_1\rangle = |\psi_2\rangle = |\psi\rangle$, the exchange operator acts as the identity on the two-particle state.*

*Proof.* This is immediate from the definition of $P_{12}$:

$$P_{12}(|\psi\rangle \otimes |\psi\rangle) = |\psi\rangle \otimes |\psi\rangle$$

The swap of two identical copies is the identity map. This is a purely algebraic statement about tensor products — it requires no physical assumptions. $\square$

**Remark.** This step does not assume a "preferred basis." For any $|\psi\rangle \in \mathcal{H}$, the product state $|\psi\rangle \otimes |\psi\rangle$ is invariant under exchange by definition of the tensor product. The argument holds in any basis.

### Step 4: The Exclusion Theorem

**Theorem 4.1 (Pauli Exclusion).** *No nonzero antisymmetric state exists in which both fermions occupy the same single-particle state.*

*Proof.* Suppose for contradiction that $|\Psi\rangle \in \bigwedge^2 \mathcal{H}$ has both particles in state $|\psi\rangle$. Then $|\Psi\rangle = c \cdot |\psi\rangle \otimes |\psi\rangle$ for some $c \neq 0$.

By Corollary 2.2 (antisymmetry):

$$P_{12}|\Psi\rangle = -|\Psi\rangle$$

By Proposition 3.1 (same-state identity):

$$P_{12}|\Psi\rangle = P_{12}(c \cdot |\psi\rangle \otimes |\psi\rangle) = c \cdot |\psi\rangle \otimes |\psi\rangle = |\Psi\rangle$$

Therefore $|\Psi\rangle = -|\Psi\rangle$, which implies $2|\Psi\rangle = 0$, hence $|\Psi\rangle = 0$.

This contradicts $c \neq 0$. Therefore no such state exists. $\square$

**Corollary 4.2.** *The antisymmetric two-fermion state for states $|\psi\rangle, |\phi\rangle$ is unique up to normalization:*

$$|\Psi_{12}\rangle = \frac{1}{\sqrt{2}}\left(|\psi\rangle \otimes |\phi\rangle - |\phi\rangle \otimes |\psi\rangle\right)$$

*This vanishes identically when $|\phi\rangle = |\psi\rangle$.*

*Proof.* The general element of $\bigwedge^2 \mathcal{H}$ built from $|\psi\rangle$ and $|\phi\rangle$ is $|\psi\rangle \wedge |\phi\rangle = |\psi\rangle \otimes |\phi\rangle - |\phi\rangle \otimes |\psi\rangle$. Setting $|\phi\rangle = |\psi\rangle$ gives $|\psi\rangle \otimes |\psi\rangle - |\psi\rangle \otimes |\psi\rangle = 0$. $\square$

### Step 5: Generalization to $N$ Fermions

**Theorem 5.1.** *For $N$ identical fermions with single-particle Hilbert space $\mathcal{H}$ of dimension $\dim \mathcal{H} = d$, the $N$-particle state lies in $\bigwedge^N \mathcal{H}$, which has dimension $\binom{d}{N}$. In particular:*
- *If $N > d$, then $\bigwedge^N \mathcal{H} = \{0\}$ — no valid state exists.*
- *At most $d$ identical fermions can coexist.*

*Proof.* The antisymmetric $N$-fold tensor product $\bigwedge^N \mathcal{H}$ has dimension $\binom{d}{N}$, which equals zero when $N > d$ (by convention, $\binom{d}{N} = 0$ for $N > d$). This is because an antisymmetric tensor on $N$ vectors from a $d$-dimensional space vanishes identically when $N > d$ — the vectors cannot all be linearly independent, and antisymmetry forces the tensor to vanish when any two inputs coincide. $\square$

**Corollary 5.2 (Atomic shell structure).** *Electrons have $\mathcal{H} = L^2(\mathbb{R}^3) \otimes \mathbb{C}^2$ (position $\times$ spin). For a hydrogen-like atom with principal quantum number $n$, the number of available states at level $n$ is $2n^2$ (factor of 2 from spin-1/2). The exclusion principle forces electrons into successively higher levels, producing the shell structure $1s^2 \, 2s^2 \, 2p^6 \, 3s^2 \, \ldots$ of the periodic table.*

### Step 6: Connection to Degeneracy Pressure

**Proposition 6.1.** *The exclusion principle generates a quantum pressure (degeneracy pressure) that resists compression of fermionic matter. This pressure is geometric — it is the vanishing of the antisymmetric state space, not a dynamical force.*

*Proof sketch.* Consider $N$ identical fermions confined to a volume $V$ with density $n = N/V$. The available single-particle states in $V$ have momenta $\mathbf{p}$ with spacing $\Delta p \sim \hbar/V^{1/3}$. By the exclusion principle, each state accommodates at most one fermion (per spin component). At high density, all low-momentum states are occupied up to the **Fermi momentum** $p_F$, determined by:

$$\frac{4\pi p_F^3}{3} \cdot \frac{V}{(2\pi\hbar)^3} \cdot g_s = N$$

where $g_s$ is the spin degeneracy ($g_s = 2$ for spin-1/2). This gives $p_F \propto n^{1/3}$. The kinetic energy per particle is $\sim p_F^2/2m \propto n^{2/3}$, and the pressure is:

$$P_{\text{deg}} = -\frac{\partial E}{\partial V}\bigg|_N \propto n^{5/3}$$

This pressure diverges as $V \to 0$ ($n \to \infty$), preventing complete collapse. In white dwarfs, electron degeneracy pressure supports the star against gravity. In neutron stars, neutron degeneracy pressure plays the same role. $\square$

### Step 7: Bosonic Contrast

**Proposition 7.1.** *For identical bosons (integer winding class $[0]$), the relational invariant is symmetric: $I_{12}(|\psi_1\rangle, |\psi_2\rangle) = I_{12}(|\psi_2\rangle, |\psi_1\rangle)$. No exclusion applies — arbitrarily many identical bosons can occupy the same state.*

*Proof.* The symmetric subspace $\text{Sym}^2(\mathcal{H}) \subset \mathcal{H} \otimes \mathcal{H}$ contains the state $|\psi\rangle \otimes |\psi\rangle$ for any $|\psi\rangle$. The exchange operator acts as $P_{12}(|\psi\rangle \otimes |\psi\rangle) = |\psi\rangle \otimes |\psi\rangle = +1 \cdot (|\psi\rangle \otimes |\psi\rangle)$, consistent with the symmetric requirement. No contradiction arises. This is the basis for Bose-Einstein condensation — macroscopic occupation of a single quantum state. $\square$

## Comparison with Standard Physics

| Aspect | Standard QM | Observer-centrism |
|---|---|---|
| Pauli exclusion | Postulated (or derived from QFT) | Derived from $\pi_1(SO(3)) = \mathbb{Z}_2$ + algebra |
| Antisymmetry | Postulated for fermions | Topological: winding class $[1]$ |
| Why $\psi = 0$ for same state | "$x = -x \implies x = 0$" | Same algebraic identity, but the antisymmetry itself is derived |
| Degeneracy pressure | Kinetic energy + exclusion | Geometric: vanishing of $\bigwedge^N \mathcal{H}$ |
| Bose-Einstein condensation | Symmetric wavefunctions | Winding class $[0]$ permits same-state occupation |

## Rigor Assessment

**Fully rigorous:**
- Theorem 4.1: The exclusion argument ($x = -x \implies x = 0$) is a tautology of linear algebra
- Corollary 4.2: The antisymmetrized product vanishing at coincidence is standard exterior algebra
- Theorem 5.1: The dimension of $\bigwedge^N \mathcal{H}$ is a standard result
- Proposition 7.1: Bosonic non-exclusion is the symmetric counterpart

**Rigorous given the spin-statistics input:**
- Proposition 2.1 and Corollary 2.2: These depend on the spin-statistics connection (Theorem 3.3 of [Spin and Statistics](/derivations/particles/spin-statistics)), which is itself provisional. If the spin-statistics connection is accepted, the exclusion principle follows with mathematical certainty.

**Provisional:**
- Proposition 6.1: The degeneracy pressure derivation is a proof sketch that uses standard quantum statistical mechanics. A full derivation within the framework would need the Born rule and preferred basis results.
- The identification of the abstract relational invariant $I_{12}$ with the standard quantum mechanical wavefunction relies on assumptions from the Born rule derivation.

**Assessment:** The core exclusion theorem (Theorem 4.1) is a pure algebraic identity — it cannot fail given antisymmetry. The only provisional element is the chain connecting the framework's topological antisymmetry to the Hilbert space formalism. The physical consequences (shell structure, degeneracy pressure) are standard physics.

## Open Gaps

1. **Partial exclusion**: The exclusion principle applies to identical fermions. Non-identical fermions (e.g., electron and muon) are not exchangeable and have no antisymmetry requirement. The framework correctly predicts this — exchange symmetry applies only within a winding class — but should formalize the "species" concept.
2. **Fermi-Dirac statistics**: The full Fermi-Dirac distribution $\langle n_k \rangle = 1/(e^{(\epsilon_k - \mu)/k_BT} + 1)$ should be derivable from the exclusion principle (each state occupied by 0 or 1 fermion) plus the entropy framework ([Entropy](/derivations/thermodynamics/entropy)).
3. **Stability of matter**: Lieb and Thirring (1975) proved that the stability of ordinary matter (energy extensive in particle number) requires the Pauli exclusion principle. This should be connected to the framework's structural explanation of matter stability.
