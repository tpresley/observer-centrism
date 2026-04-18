---
title: "Non-Ergodicity and Conditional Thermalization"
status: "provisional"
dependsOn: ["thermodynamics/entropy", "thermodynamics/time", "thermodynamics-ext/renormalization", "interactions/bootstrap", "foundation/aperiodic-order"]
enablesDerivation: ["cosmology/cosmological-arrow", "thermodynamics-ext/biological-non-ergodicity"]
tags: ["thermo-ext"]
summary: "Generic systems are non-ergodic: the bootstrap hierarchy, aperiodic matching rules, and coherence correlations partition phase space. Statistical mechanics succeeds because conditional ergodicity holds within matching-rule hulls — deriving the domain of validity of the microcanonical ensemble, eigenstate thermalization conditions, and glassy dynamics as corollaries"
rigorLevel: "semi-formal"
lastUpdated: 2026-04-17
---

## Overview

This derivation addresses a question that statistical mechanics typically assumes away: **why does the ergodic hypothesis work, given that generic systems should not be ergodic?**

In standard physics, the ergodic hypothesis — that time averages equal ensemble averages — is assumed as a foundational postulate of statistical mechanics. Despite a century of effort, rigorous proofs of ergodicity exist only for a handful of idealized systems (hard spheres, geodesic flows on negatively curved manifolds). The empirical success of stat mech suggests something weaker than full ergodicity is at work, but what that something is has remained unclear.

The observer-centrism framework predicts that generic systems are **fundamentally non-ergodic**, from three independent mechanisms:

1. **Bootstrap hierarchy barriers**: The categorical structure of the observer hierarchy (observers composed of observers across multiple levels) creates effective barriers in phase space that are topological, not merely energetic. Transitions between hierarchy levels require restructuring the observer-geometry relationship.

2. **Aperiodic matching rules**: The observer network is forced into aperiodic order ([Aperiodic Order](/derivations/foundation/aperiodic-order)) — periodicity trivializes C5 while disorder violates constitutive universality. The dynamics are confined to the hull of the substitution tiling, a measure-zero subset of the full configuration space.

3. **Coherence correlations**: Subadditivity ($\mathcal{C}(A \cup B) \leq \mathcal{C}(A) + \mathcal{C}(B)$) means subsystems are generically correlated, confining trajectories to a correlated submanifold of the product state space.

**The resolution.** Statistical mechanics succeeds not because full ergodicity holds, but because a weaker property — **conditional ergodicity** — holds within each matching-rule sector. Time averages equal ensemble averages when the ensemble is restricted to configurations compatible with the aperiodic order, the hierarchy level, and the coherence correlation structure. The microcanonical ensemble is not wrong — it is implicitly conditioned on these constraints.

**The payoff.** This framework naturally explains three phenomena that are anomalous under the ergodic hypothesis:

- **Eigenstate thermalization**: ETH holds within a single hierarchy level where the matching rules permit full exploration; it fails across hierarchy boundaries (many-body localization).
- **Glassy dynamics**: When the matching-rule constraints are tight (many hierarchy levels coupled), the accessible phase space fragments into ultrametrically organized sectors — the Parisi picture emerges from the bootstrap hierarchy.
- **Memory and aging**: History-dependence is not a failure of equilibration but a structural consequence of non-ergodic confinement to a hierarchy-specific sector.

**An honest caveat.** The conditional ergodicity claim (Step 5) is argued by structural analogy with quasicrystal dynamics rather than proved from a rigorous mixing theorem. The glassy dynamics result (Step 7) identifies the correct structure but does not derive specific aging exponents.

## Statement

**Theorem (structural).** *Generic physical systems are non-ergodic. Phase space is partitioned by three independent mechanisms — bootstrap hierarchy level, aperiodic matching rules, and coherence correlations — into sectors within which conditional ergodicity holds. The microcanonical ensemble of statistical mechanics is the conditional measure on a single sector.*

**Corollary (ETH).** *The eigenstate thermalization hypothesis holds for systems confined to a single bootstrap hierarchy level with weak inter-level coupling. It fails when the coupling to adjacent hierarchy levels exceeds a threshold set by the coherence gap between levels.*

**Corollary (Glassy dynamics).** *When multiple hierarchy levels are strongly coupled, the accessible phase space fragments into sectors organized by the ultrametric structure of the bootstrap tree. The resulting dynamics exhibit aging, history-dependence, and stretched-exponential relaxation.*

## Derivation

### Step 1: Phase Space Partitioning by Hierarchy Level

**Definition 1.1.** For a system $\mathcal{S}$ composed of observers at bootstrap hierarchy levels $\ell = 1, 2, \ldots, L$, the **level-$\ell$ configuration space** is:

$$\Gamma_\ell = \prod_{k: \text{level}(k) = \ell} \Sigma_k$$

where $\Sigma_k$ is the state space of observer $\mathcal{O}_k$ ([Minimal Observer Structure](/derivations/minimal-observer/structure), Definition 1.1). The full configuration space is $\Gamma = \Gamma_1 \times \Gamma_2 \times \cdots \times \Gamma_L$.

**Proposition 1.2 (Hierarchy barriers).** *The bootstrap hierarchy creates effective barriers in $\Gamma$. A trajectory in $\Gamma$ that changes the hierarchy level of any constituent observer requires a restructuring of the observer-geometry relationship (a Type III interaction that dissolves and reconstitutes the observer). Such transitions have coherence cost bounded below by the minimum cycle cost $\hbar$ per level crossed.*

*Proof sketch.* An observer at level $\ell$ is a bound state of observers at level $\ell - 1$ ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Definition 2.1). Changing its level requires either (a) binding additional sub-observers (increasing $\ell$, cost $\geq \hbar$ for the new binding cycle) or (b) dissolving the bound state (decreasing $\ell$, releasing $\geq \hbar$ of binding coherence). In both cases, the transition crosses a coherence gap $\Delta\mathcal{C} \geq \hbar$, which acts as a barrier in phase space. Continuous trajectories within a fixed-$\ell$ sector never cross this barrier. $\square$

**Remark 1.3.** These barriers are topological, not thermal. Unlike energy barriers that can be overcome by fluctuations, hierarchy barriers require categorical restructuring — the observer must be destroyed and reconstituted. This is why MBL (many-body localization) systems, which have strong disorder at a fixed hierarchy level, can still fail to thermalize: the disorder creates additional barriers *within* a hierarchy level that mimic the inter-level structure.

### Step 2: Aperiodic Matching Rules Confine Dynamics

**Proposition 2.1 (Matching-rule confinement).** *The aperiodic order of the observer network ([Aperiodic Order](/derivations/foundation/aperiodic-order)) confines the dynamics to the hull $\Omega_{\mathcal{T}}$ of the substitution tiling $\mathcal{T}$. The hull is a compact metric space under the tiling metric, and $\Omega_\mathcal{T}$ has measure zero in the space of all configurations.*

*Proof sketch.* The observer network at any time is a point in the hull $\Omega_\mathcal{T}$ — the closure of the translation orbit of $\mathcal{T}$ under the tiling metric. Time evolution (phase ordering from [Time as Phase Ordering](/derivations/thermodynamics/time)) maps points in $\Omega_\mathcal{T}$ to points in $\Omega_\mathcal{T}$ because the matching rules are preserved by the dynamics: a configuration that satisfies the substitution rules at time $\tau$ continues to satisfy them at $\tau + \delta\tau$ (the rules are local and time evolution preserves locality). Since $\Omega_\mathcal{T}$ is compact and invariant, the dynamics are confined to it. The hull of a non-periodic tiling has Lebesgue measure zero in $\mathbb{R}^d$ (it is a Cantor-like set in the transversal direction). $\square$

**Remark 2.2.** This is the analog of the quasicrystal situation. In a Penrose tiling, the dynamics are ergodic on the hull (translations explore all local patterns) but non-ergodic in physical space (most configurations of tiles are not Penrose tilings). The framework predicts the same structure: ergodic within $\Omega_\mathcal{T}$, non-ergodic in $\Gamma$.

### Step 3: Coherence Correlations Reduce Effective Dimension

**Proposition 3.1 (Correlated submanifold).** *Subadditivity of coherence ($\mathcal{C}(A \cup B) \leq \mathcal{C}(A) + \mathcal{C}(B)$, Axiom 1, property C5) constrains the joint state of any composite system to a correlated submanifold $\mathcal{M}_{\text{corr}} \subseteq \Gamma$ of dimension strictly less than $\dim\Gamma$.*

*Proof sketch.* If the system were uncorrelated, $\mathcal{C}(A \cup B) = \mathcal{C}(A) + \mathcal{C}(B)$ and the accessible space would be the full product $\Gamma_A \times \Gamma_B$. Subadditivity means $\mathcal{C}(A \cup B) \leq \mathcal{C}(A) + \mathcal{C}(B)$ with equality only in the absence of correlations. For generic interacting systems, the inequality is strict: the mutual coherence $\mathcal{C}(A) + \mathcal{C}(B) - \mathcal{C}(A \cup B) > 0$ implies that knowing $A$'s state constrains $B$'s state. The set of joint states satisfying this constraint is a proper submanifold $\mathcal{M}_{\text{corr}} \subset \Gamma$. $\square$

**Proposition 3.2 (Dimension deficit).** *The dimension deficit $\delta = \dim\Gamma - \dim\mathcal{M}_{\text{corr}}$ is bounded below by the number of independent coherence constraints:*

$$\delta \geq \sum_{\text{pairs } (i,j)} \mathbb{1}[\mathcal{C}(i) + \mathcal{C}(j) > \mathcal{C}(i \cup j)]$$

*For a system of $N$ mutually interacting observers, $\delta$ scales at least as $N$, making the correlated submanifold an exponentially small fraction of $\Gamma$.*

### Step 4: The Three Mechanisms Are Independent

**Proposition 4.1 (Independence).** *The three phase-space partitioning mechanisms — hierarchy barriers (Step 1), matching-rule confinement (Step 2), and coherence correlations (Step 3) — are independent. Each reduces the accessible phase space by a factor that does not depend on the others.*

*Argument.* Hierarchy barriers partition $\Gamma$ into discrete sectors labeled by the hierarchy level assignment. Matching rules confine dynamics within each sector to the tiling hull. Coherence correlations further reduce the accessible space within the hull. The constraints operate on different aspects of the state: hierarchy level (categorical), spatial arrangement (geometric), and inter-observer correlations (information-theoretic). Removing any one constraint does not eliminate the others. $\square$

**Corollary 4.2.** *The accessible phase space $\Gamma_{\text{acc}}$ satisfies:*

$$\text{vol}(\Gamma_{\text{acc}}) \leq \text{vol}(\Gamma_\ell) \cdot \mu(\Omega_\mathcal{T}) \cdot 2^{-\delta}$$

*where $\Gamma_\ell$ is the fixed-level sector, $\mu(\Omega_\mathcal{T})$ is the hull measure (zero in the Lebesgue sense, finite in the tiling metric), and $2^{-\delta}$ is the correlation reduction factor.*

### Step 5: Conditional Ergodicity Within Sectors

**Definition 5.1.** A system is **conditionally ergodic** with respect to a partition $\{\Gamma_\alpha\}$ if, for each sector $\Gamma_\alpha$, time averages equal ensemble averages computed with the measure restricted to $\Gamma_\alpha$:

$$\lim_{T \to \infty} \frac{1}{T}\int_0^T f(\gamma(t))\,dt = \int_{\Gamma_\alpha} f\, d\mu_\alpha$$

for $\mu_\alpha$-almost every initial condition $\gamma(0) \in \Gamma_\alpha$, and for every integrable observable $f$.

**Theorem 5.2 (Conditional ergodicity).** *Within a single sector $\Gamma_\alpha$ (fixed hierarchy level, fixed matching-rule class, fixed correlation structure), the dynamics are ergodic with respect to the natural measure $\mu_\alpha$ on $\Gamma_\alpha$.*

*Argument.* Within a single sector, all three partitioning mechanisms are inactive: the hierarchy level is fixed, the matching rules are satisfied everywhere in $\Gamma_\alpha$, and the correlations are built into the measure $\mu_\alpha$. The remaining dynamics are generated by the U(1) phase evolution of each observer at the fixed level. This evolution is generated by frequencies $\omega_k$ that are (generically) rationally independent — a consequence of the aperiodic order, which prevents commensurability. On the torus $\prod_k S^1_k$ parameterized by the phases, irrational flow is uniquely ergodic (Weyl's equidistribution theorem). The internal state spaces $\Sigma_k$ are explored by interactions between phase-locked observers, which shuffle the non-phase degrees of freedom. The combination — ergodic phase flow plus interaction-driven mixing — yields ergodicity on $\Gamma_\alpha$. $\square$

**Remark 5.3.** This is why statistical mechanics works. The microcanonical ensemble $\mu_{\text{mc}}(E)$ at energy $E$ is implicitly conditioned on a fixed sector: the system's hierarchy level, matching-rule class, and correlation structure are all fixed by the preparation procedure. Within this sector, conditional ergodicity justifies ensemble averaging. The ergodic hypothesis is not wrong — it is tacitly conditioned.

### Step 6: Eigenstate Thermalization and Its Failure

**Definition 6.1 (ETH).** The eigenstate thermalization hypothesis states that for a quantum system with Hamiltonian $H$ and energy eigenstates $|E_n\rangle$, the matrix elements of local observables satisfy:

$$\langle E_m | \hat{O} | E_n \rangle = O(\bar{E})\,\delta_{mn} + e^{-S(\bar{E})/2} f_O(\bar{E}, \omega)\, R_{mn}$$

where $\bar{E} = (E_m + E_n)/2$, $\omega = E_n - E_m$, $S$ is the microcanonical entropy, $O(\bar{E})$ is the thermal expectation value, $f_O$ is a smooth function, and $R_{mn}$ is a random variable with zero mean and unit variance.

**Theorem 6.2 (ETH within a hierarchy level).** *ETH holds for quantum systems whose Hamiltonian couples only observers within a single bootstrap hierarchy level $\ell$. The smoothness condition on $O(\bar{E})$ follows from the conditional ergodicity of the phase dynamics (Theorem 5.2), and the exponential suppression of off-diagonal elements follows from the dimension of the fixed-level Hilbert space.*

*Proof sketch.* Within level $\ell$, the Hamiltonian generates the U(1) phase evolution of the constituent observers. The energy eigenstates are products of phase eigenstates, which (by conditional ergodicity) explore the full fixed-level sector. For local observables, the diagonal matrix elements are smooth functions of energy because they average over the conditionally ergodic measure, which varies smoothly with energy. The off-diagonal suppression $e^{-S/2}$ reflects the dimension of $\Gamma_\ell$: the overlap between two random states in a space of dimension $e^S$ is $O(e^{-S/2})$ by concentration of measure. $\square$

**Theorem 6.3 (ETH failure across hierarchy levels).** *ETH fails when the Hamiltonian significantly couples observers at different hierarchy levels. The failure mechanism is the coherence gap $\Delta\mathcal{C} \geq \hbar$ between levels, which prevents the smooth dependence of matrix elements on energy.*

*Proof sketch.* When $H$ couples levels $\ell$ and $\ell + 1$, the energy spectrum contains both intra-level excitations (continuous, densely spaced) and inter-level transitions (gapped by $\Delta\mathcal{C} \geq \hbar$). A local observable that straddles the gap has matrix elements that are not smooth functions of energy — the diagonal elements jump discontinuously at the gap, violating the smoothness condition of ETH. This is structurally identical to the MBL mechanism, where disorder creates effective level structure within the many-body spectrum. $\square$

**Remark 6.4.** The framework predicts that MBL is not a special phenomenon requiring fine-tuned disorder, but a generic consequence of the bootstrap hierarchy. Any system where the effective disorder strength exceeds the intra-level bandwidth will exhibit MBL-like non-thermalization. The "MBL transition" corresponds to the inter-level coupling crossing the coherence gap threshold.

### Step 7: Glassy Dynamics from the Bootstrap Tree

**Definition 7.1.** The **bootstrap tree** $\mathcal{B}$ is the rooted tree whose vertices are the bootstrap levels $\ell = 1, \ldots, L$ and whose edges connect adjacent levels. The ultrametric distance between two states $\gamma_1, \gamma_2 \in \Gamma$ is defined as the level of their lowest common ancestor in $\mathcal{B}$.

**Theorem 7.2 (Ultrametric phase-space structure).** *When multiple hierarchy levels are strongly coupled (inter-level coupling $g_{\ell,\ell+1}$ exceeds the intra-level bandwidth $W_\ell$ for several levels), the accessible phase space fragments into sectors organized by the ultrametric distance on $\mathcal{B}$. The resulting structure is isomorphic to the Parisi replica-symmetry-breaking picture of spin glasses.*

*Argument.* Strong inter-level coupling means the system cannot be decomposed into independent levels. The matching-rule constraints from different levels compete: satisfying the rules at level $\ell$ constrains the configurations at level $\ell + 1$, and vice versa. This mutual constraint creates a hierarchy of free-energy barriers indexed by the levels at which the constraints conflict. Two configurations that agree at all levels up to $\ell$ but differ at level $\ell + 1$ are separated by a barrier of height $\sim \ell \cdot \Delta\mathcal{C}$. This is precisely the ultrametric barrier structure of the Parisi solution, where the overlap between two states determines the height of the barrier separating them. $\square$

**Corollary 7.3 (Aging and history-dependence).** *In the glassy regime, the system's relaxation function $C(t_w, t_w + t)$ depends on the waiting time $t_w$ (aging). This follows from the ultrametric structure: the system first equilibrates within the smallest (lowest-barrier) sectors, then slowly explores progressively larger sectors. At any finite time, the system has only equilibrated within sectors up to a barrier height $\sim \ln t$, so the correlation function depends on both $t$ and $t_w$.*

**Corollary 7.4 (Stretched exponentials).** *Relaxation within the glassy regime follows stretched-exponential form $C(t) \sim \exp(-(t/\tau)^\beta)$ with $0 < \beta < 1$. The exponent $\beta$ reflects the distribution of barrier heights in the bootstrap tree, which is determined by the substitution matrix of the aperiodic tiling.*

## Comparison with Standard Approaches

| Feature | Ergodic hypothesis | Observer-centrism |
|---|---|---|
| Ergodicity status | Assumed universally | Generic non-ergodicity; conditional ergodicity in sectors |
| Mechanism | Phase space exploration | Phase partitioned by hierarchy + matching rules + correlations |
| Statistical mechanics | Justified by ergodicity | Justified by conditional ergodicity (weaker, more accurate) |
| ETH validity | Expected generically | Holds within hierarchy levels; fails across levels |
| MBL | Anomalous, requires disorder | Generic consequence of hierarchy barriers |
| Glassy dynamics | Phenomenological (Parisi ansatz) | Derived from bootstrap tree ultrametric structure |
| Memory effects | Failure of equilibration | Structural feature of non-ergodic sectors |

## Rigor Assessment

**What is rigorous:**
- Step 1: Hierarchy barriers from coherence gaps follow directly from [Bootstrap Mechanism](/derivations/interactions/bootstrap) and the minimum cycle cost $\hbar$ from [Action and Planck's Constant](/derivations/thermodynamics/action-planck).
- Steps 2–3: Matching-rule confinement and coherence correlations follow from [Aperiodic Order](/derivations/foundation/aperiodic-order) and Axiom 1 (C5).
- Step 4: Independence of the three mechanisms is a structural observation.

**What is semi-formal:**
- Step 5: Conditional ergodicity argument uses Weyl equidistribution on the phase torus, which is rigorous, but the extension to non-phase degrees of freedom via interaction-driven mixing is argued rather than proved. A full proof would require a mixing theorem for the specific dynamics.
- Step 6: ETH conditions are argued from concentration of measure and spectral structure. The identification with MBL is structural.
- Step 7: The isomorphism with the Parisi picture is structural — the ultrametric distances match, but the detailed free-energy landscape is not computed.

## Open Gaps

1. **Mixing theorem**: Prove conditional ergodicity (Theorem 5.2) rigorously from the dynamics, not just from the equidistribution of phases. This requires a mixing-time bound for the interaction-driven shuffling of non-phase degrees of freedom.
2. **ETH transition threshold**: Quantify the critical inter-level coupling strength at which ETH fails. This should be expressible in terms of the coherence gap $\Delta\mathcal{C}$ and the intra-level density of states.
3. **Aging exponents**: Derive the specific aging exponents and stretched-exponential parameters $\beta$ from the substitution matrix of the aperiodic tiling. The metallic-mean family ([Aperiodic Order](/derivations/foundation/aperiodic-order)) constrains the substitution matrix to a 2×2 Pisot form — this should determine $\beta$.
4. **Fluctuation theorems**: The Jarzynski equality and Crooks theorem should arise as finite-size corrections to the conditional-ergodicity framework. This overlaps with Gap 1 of [Entropy as Inaccessible Coherence](/derivations/thermodynamics/entropy).
5. **Quantum conditional ergodicity**: Extend Theorem 5.2 to the quantum regime, where the phase torus is replaced by a Hilbert space and Weyl equidistribution by quantum ergodicity of eigenfunctions.
