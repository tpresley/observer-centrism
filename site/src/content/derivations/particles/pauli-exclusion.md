---
title: "Pauli Exclusion Principle"
status: "rigorous"
dependsOn: ["particles/spin-statistics"]
enablesDerivation: []
tags: ["particles"]
summary: "Antisymmetric relational invariants forbid identical fermions in the same state — a coherence consistency condition, not an additional postulate"
rigorLevel: "formal"
sourceSection: "09-spin-statistics"
lastUpdated: 2026-03-09
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

*Proof.* Consider $N$ identical fermions confined to a volume $V$ with density $n = N/V$. The available single-particle states in $V$ are plane waves with momenta $\mathbf{p}$ at discrete values set by the boundary conditions, with spacing $\Delta p \sim \hbar/V^{1/3}$ in each direction (standard quantum mechanics in a box).

By Theorem 4.1, each state accommodates at most one fermion per spin component. At zero temperature, fermions fill states from lowest energy upward until all $N$ particles are placed. The highest occupied momentum is the **Fermi momentum** $p_F$, determined by the phase-space counting:

$$N = g_s \cdot \frac{V}{(2\pi\hbar)^3} \cdot \frac{4\pi p_F^3}{3}$$

where $g_s = 2s+1$ is the spin degeneracy ($g_s = 2$ for spin-1/2). Solving: $p_F = \hbar(6\pi^2 n/g_s)^{1/3} \propto n^{1/3}$.

The total kinetic energy is $E = g_s \cdot \frac{V}{(2\pi\hbar)^3} \int_0^{p_F} \frac{p^2}{2m} \cdot 4\pi p^2 dp = \frac{3}{5}N \frac{p_F^2}{2m} \propto N \cdot n^{2/3}$. The degeneracy pressure is:

$$P_{\text{deg}} = -\frac{\partial E}{\partial V}\bigg|_N = \frac{2E}{3V} = \frac{(6\pi^2)^{2/3}\hbar^2}{5m g_s^{2/3}} n^{5/3}$$

This pressure diverges as $V \to 0$ ($n \to \infty$), preventing complete collapse — a geometric consequence of the vanishing of $\bigwedge^N \mathcal{H}$ when more fermions are added than available states. In white dwarfs, electron degeneracy pressure supports the star against gravity ($M_{\text{Ch}} \approx 1.4 M_\odot$, Chandrasekhar 1931). In neutron stars, neutron degeneracy pressure plays the same role. $\square$

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

### Consistency Model

**Theorem 8.1.** *The helium atom provides a consistency model for the Pauli exclusion principle.*

*Verification.* Take two electrons ($s = 1/2$, fermions) in the helium atom with $\mathcal{H} = L^2(\mathbb{R}^3) \otimes \mathbb{C}^2$.

- **Antisymmetry** (Corollary 2.2): The ground-state wavefunction $\Psi(\mathbf{r}_1, s_1; \mathbf{r}_2, s_2)$ is antisymmetric under exchange: $\Psi(2,1) = -\Psi(1,2)$. $\checkmark$
- **Exclusion** (Theorem 4.1): Both electrons in $1s$ with same spin would give $\Psi = c \cdot \phi_{1s}(\mathbf{r}_1)\phi_{1s}(\mathbf{r}_2)|\uparrow\uparrow\rangle$, which is symmetric — forbidden. $\checkmark$
- **Ground state**: The $1s^2$ configuration has spatial wavefunction $\phi_{1s}(\mathbf{r}_1)\phi_{1s}(\mathbf{r}_2)$ (symmetric) times spin singlet $(|\uparrow\downarrow\rangle - |\downarrow\uparrow\rangle)/\sqrt{2}$ (antisymmetric). Product is antisymmetric. $\checkmark$
- **Shell structure** (Corollary 5.2): The $1s$ shell accommodates exactly 2 electrons ($n=1$, $2n^2=2$). A third electron must go to $2s$ — beginning lithium. $\checkmark$
- **Degeneracy pressure** (Proposition 6.1): White dwarf Sirius B has $M \approx 1.0 M_\odot$, $R \approx 0.008 R_\odot$ — supported by electron degeneracy pressure against gravitational collapse. $\checkmark$ $\square$

## Rigor Assessment

**Fully rigorous:**
- Theorem 4.1: The exclusion argument ($x = -x \implies x = 0$) is a tautology of linear algebra — the core of the derivation
- Corollary 4.2: Antisymmetrized product vanishing at coincidence (standard exterior algebra)
- Theorem 5.1: $\dim(\bigwedge^N \mathcal{H}) = \binom{d}{N}$ (standard multilinear algebra)
- Proposition 6.1: Degeneracy pressure from Fermi momentum counting (standard quantum statistical mechanics)
- Proposition 7.1: Bosonic non-exclusion (symmetric counterpart)
- Theorem 8.1: Consistency model verified on helium atom

**Rigorous given spin-statistics:**
- Proposition 2.1, Corollary 2.2: Antisymmetry of fermionic states follows from [Spin and Statistics](/derivations/particles/spin-statistics) (Theorem 3.3 + Proposition 4.1), which is now rigorous.

**Upstream dependency:**
- The identification of abstract relational invariants $I_{12}$ with quantum-mechanical wavefunctions uses the amplitude–coherence identification (S1 of [Born Rule](/derivations/quantum/born-rule)). Given this identification, the exclusion principle follows with mathematical certainty.

**Assessment:** The Pauli exclusion principle is rigorous. The core theorem (Theorem 4.1) is a pure algebraic identity: antisymmetry + same state → zero. The antisymmetry itself is rigorous (from the spin-statistics connection, now upgraded to rigorous). The physical consequences — shell structure, degeneracy pressure, stability of matter — are standard results following from the algebraic structure.

## Open Gaps

1. **Partial exclusion**: The exclusion principle applies to identical fermions. Non-identical fermions (e.g., electron and muon) are not exchangeable and have no antisymmetry requirement. The framework correctly predicts this — exchange symmetry applies only within a winding class — but should formalize the "species" concept.
2. **Fermi-Dirac statistics**: The full Fermi-Dirac distribution $\langle n_k \rangle = 1/(e^{(\epsilon_k - \mu)/k_BT} + 1)$ should be derivable from the exclusion principle (each state occupied by 0 or 1 fermion) plus the entropy framework ([Entropy](/derivations/thermodynamics/entropy)).
3. **Stability of matter**: Lieb and Thirring (1975) proved that the stability of ordinary matter (energy extensive in particle number) requires the Pauli exclusion principle. This should be connected to the framework's structural explanation of matter stability.
