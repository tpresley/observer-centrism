---
title: "2. Observer Code Family Identification"
status: "provisional"
dependsOn: ["foundation/observer-error-correction", "foundation/observer-holographic-equivalence", "interactions/moufang-loop-phase-closure", "holography/area-scaling", "axioms/loop-closure"]
enablesDerivation: []
tags: ["foundation", "error-correction", "holography", "topology"]
summary: "The observer projection CPTP map 𝒫_A of Observer Projection as Error Correction belongs to a hybrid code family factoring as a tensor product of three established quantum-error-correction families along the three integer-stable axes: a HaPPY-style holographic code on the spatial axis (bulk-to-boundary encoding with N = A/4ℓ_P² boundary qubits; exterior cancellation is the subregion-duality condition), a Kitaev-style topological code on the algebraic axis (homotopy-class logical qubits π_k(G_n) at bootstrap level n, with π_1 at level 1 and π_3 at levels 2–3), and a continuous-time Floquet code on the temporal axis (Axiom 3 loop closure as a periodic stabilizer schedule; integer tick count k_A as the dynamically generated logical invariant). The three factors share a compatibility condition — their stabilizer groups pairwise commute on the substrate Hilbert space, and their joint fixed subspace is the code space 𝒞_A of Step 1. The three-axis simultaneous combination is novel as a unified family: each factor is a known code family in quantum information theory, but no prior code combines all three with the specific cross-axis couplings forced by bootstrap level and horizon area. This is Step 2 of the Observer-Projection-as-Error-Correction research target; it sets the stage for Step 3 (code-distance computation) by providing a distance prescription on each factor that the product structure composes multiplicatively modulo correlated error channels."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-18
---

## Overview

[Observer Projection as Error Correction](/derivations/foundation/observer-error-correction) (hereafter **Step 1**) specifies the observer projection as a CPTP map $\mathcal{P}_A: \mathcal{B}(\mathcal{H}_{\text{substrate}}) \to \mathcal{B}(\mathcal{H}_A)$ factoring through an integer-invariant profile $\mathcal{I}_A = (R_{\partial M_A}, k_A, [\phi]_A)$ on three orthogonal axes — spatial (null horizon), temporal (loop closure), algebraic (bootstrap-scale homotopy). Open Gap 3 of Step 1 asks which quantum-error-correcting code family $\mathcal{P}_A$ belongs to. This derivation addresses that gap.

**The answer — axis by axis.** Each of Step 1's three integer-stable axes is, on its own, isomorphic in structure to a well-studied quantum-error-correcting code family:

1. **Spatial axis.** The null horizon's integer-residue encoding matches the **HaPPY holographic code** family (Pastawski–Yoshida–Harlow–Preskill 2015). The horizon mode count $N = A/4\ell_P^2$ is the boundary-qubit count; [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 4.5 (exterior cancellation) is the code's subregion-duality condition; Theses A and A' are the bulk/boundary complementary-recovery pair.

2. **Algebraic axis.** The bootstrap-level homotopy-class logical content matches the **Kitaev topological code** family (Kitaev 2003 and higher-dimensional generalizations). The level-1 winding $\pi_1(U(1)) = \mathbb{Z}$ is the 2D toric-code structure; the level-2 and level-3 instantons $\pi_3(SU(2)) = \pi_3(SU(3)) = \mathbb{Z}$ are the 4D / Walker–Wang topological-code structure.

3. **Temporal axis.** The Axiom 3 periodic phase evolution $\phi_\tau$ with exact integer-tick closure matches the **Floquet code** family (Hastings–Haah 2021). The instantaneous phase $\phi_\tau(x_0)$ is continuous and does not uniquely specify the logical invariant; only the cycle-averaged integer tick count $k_A$ is dynamically preserved — which is the defining signature of Floquet-code logical qubits.

**The three-axis product.** The observer-projection code is the tensor product of these three factors with a commuting-stabilizer compatibility condition:

$$\text{Code}(\mathcal{P}_A) \;\cong\; \underbrace{\text{HaPPY}(N_A)}_{\text{spatial}} \;\boxtimes\; \underbrace{\text{Kitaev}(G_n)}_{\text{algebraic}} \;\boxtimes\; \underbrace{\text{Floquet}(T_A)}_{\text{temporal}}$$

where $\boxtimes$ denotes the compatible tensor product: the three stabilizer groups pairwise commute on $\mathcal{H}_{\text{substrate}}$, and the code space $\mathcal{C}_A$ of Step 1 is their joint fixed subspace.

**What is novel, what is not.** Each factor individually is an established code family; the product structure with the specific cross-axis couplings forced by the framework (bootstrap-level selecting the topological-factor target group, horizon area setting the holographic-factor qubit count, loop-closure period setting the Floquet-factor cycle length) is **novel as a unified family** — no prior quantum-information code combines all three with these couplings. The structural-argument identification of this novel product-family as the code of the observer projection is the content of this derivation.

**Honest status.** Each axis-to-family identification is structurally clean — the defining properties of the target family match framework commitments via existing framework theorems. The product-compatibility theorem (Theorem 4.1) is stated at the level of commutation requirements without an explicit constructive intertwiner between the three stabilizer algebras. Explicit distance formulas on each factor are stated (via citations to the target family's literature); their product-level composition (Step 3 of the research target) is deferred.

## Statement

**Theorem (Three-axis code-family identification).** *The observer-projection CPTP map $\mathcal{P}_A$ of [Observer Projection as Error Correction](/derivations/foundation/observer-error-correction) is isomorphic — as a code on the substrate Hilbert space $\mathcal{H}_{\text{substrate}}$ — to a tensor product of three established quantum-error-correcting code families along its three integer-stable axes:*

1. **Spatial axis — HaPPY holographic code.** *The spatial-axis factor $\mathcal{P}_A^{\text{sp}}$ is a holographic code (Pastawski–Yoshida–Harlow–Preskill 2015 family) with $N_A = A_A/4\ell_P^2$ boundary qubits, logical bulk content determined by the integer horizon-crossing record $R_{\partial M_A}$, and subregion-duality condition given by [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 4.5 (exterior cancellation).*

2. **Algebraic axis — Kitaev topological code.** *The algebraic-axis factor $\mathcal{P}_A^{\text{alg}}$ is a topological stabilizer code (Kitaev 2003 and higher-dimensional generalizations) with homotopy-class logical qubits $[\phi]_A \in \pi_k(G_n) = \mathbb{Z}$, where $n \in \{1, 2, 3\}$ is the observer's bootstrap level and $G_n \in \{U(1), SU(2), SU(3)\}$ is the bootstrap-level gauge group of [Moufang-Loop Phase Closure](/derivations/interactions/moufang-loop-phase-closure).*

3. **Temporal axis — Floquet code.** *The temporal-axis factor $\mathcal{P}_A^{\text{tmp}}$ is a dynamically generated Floquet code (Hastings–Haah 2021 family) with period $T_A$, continuous-time stabilizer schedule $\phi_\tau$, and cycle-averaged logical invariant given by the integer tick count $k_A \in \mathbb{Z}$ of [Loop Closure](/derivations/axioms/loop-closure).*

*These three factors satisfy a pairwise-commuting stabilizer condition on $\mathcal{H}_{\text{substrate}}$, and the code space $\mathcal{C}_A$ of Step 1 Proposition 3.3 is their joint fixed subspace. The product family — HaPPY × Kitaev × Floquet with these specific cross-axis couplings — is novel as a unified family; no prior quantum-information code combines all three with the framework's specific area/level/period parameters.*

**Corollary (Code-distance prescription).** *For each axis, the standard distance formula of the target code family applies:*

- *Spatial distance $d^{\text{sp}}$: minimum horizon-supported logical-operator weight under the HaPPY tensor-network isometric encoding. Scales as $d^{\text{sp}} \sim N_A^{1/2} \sim (A_A/4\ell_P^2)^{1/2}$ by standard HaPPY scaling.*
- *Algebraic distance $d^{\text{alg}}$: minimum length of a non-contractible cycle representative in the target homotopy class. At level 1, $d^{\text{alg}}$ is the circumference of the $\pi_1$-generating loop; at levels 2 and 3, it is the instanton-core size in the $\pi_3$ target.*
- *Temporal distance $d^{\text{tmp}}$: minimum Floquet-cycle-averaged error weight that flips $k_A$. Scales linearly with the number of sub-tick substrate events in one period.*

*The total distance of the product code bounds correlated-error performance; the independent-error distance is the minimum $d_{\text{ind}} = \min(d^{\text{sp}}, d^{\text{alg}}, d^{\text{tmp}})$ with the caveat that cross-axis correlated errors (simultaneous errors on multiple factors) require joint analysis — the code is a product code in structure, not a concatenated code, and its correlated-error distance is set by the minimum cross-axis product-error weight.*

**Corollary (Novelty — minimum additional structure).** *The product family above is not a known code family; the novel content is the **cross-axis coupling**:*

1. *The spatial-factor's boundary-qubit count $N_A = A_A/4\ell_P^2$ is determined by the horizon area of $M_A$, which depends on observer mass — hence is determined by the framework's bootstrap dynamics, not freely chosen as in standard HaPPY.*
2. *The algebraic-factor's target group $G_n$ is determined by the observer's bootstrap level $n$, not freely chosen as in standard Kitaev. The framework's bootstrap termination at $\mathbb{O}$ ([Moufang-Loop Phase Closure](/derivations/interactions/moufang-loop-phase-closure) Theorem 5.1) restricts $n \in \{1, 2, 3\}$, hence $G_n \in \{U(1), SU(2), SU(3)\}$.*
3. *The temporal-factor's period $T_A$ is determined by the observer's characteristic frequency, which couples to the spatial and algebraic factors through the Noether invariant $I_A$ of [Observer Definition](/derivations/axioms/observer-definition) Axiom 2.*

*Absent these couplings, the three factors would be an independent tensor product of three established codes with no predictive relationship. The couplings are what make the observer-projection code a single object with a single integer-invariant profile $\mathcal{I}_A$.*

## Derivation

### Step 1: Spatial Axis — HaPPY Holographic Code Identification

**Preliminaries.** The HaPPY code family (Pastawski, Yoshida, Harlow, Preskill 2015, "Holographic quantum error-correcting codes: Toy models for the bulk/boundary correspondence," *JHEP* 06 (2015) 149) is a tensor-network realization of bulk-to-boundary encoding with the defining properties:

1. **Isometric encoding** from bulk logical Hilbert space to boundary physical Hilbert space via perfect-tensor contractions.
2. **Subregion duality**: any boundary region of size exceeding half the boundary can reconstruct the bulk in its entanglement wedge.
3. **Complementary recovery**: if boundary region $R$ can reconstruct bulk operator $O$, then its complement $R^c$ cannot.
4. **Operator pushing**: any bulk operator has a boundary representation via tensor-network contractions; dually, any boundary operator in the code space has a bulk representation.

**Proposition 1.1 (Spatial-axis isometric encoding).** *The spatial-axis factor $\mathcal{P}_A^{\text{sp}}$ of the observer-projection CPTP map admits an isometric restriction from the interior of $M_A$ (bulk logical content) to the null horizon $\partial M_A$ (boundary physical content): for each substrate state $\rho \in \mathcal{H}_{\text{substrate}}$ with integer-invariant profile $\mathcal{I}_A$ on the spatial axis, there is a unitary intertwiner $V_{\text{sp}}: \mathcal{H}_A^{\text{bulk}} \to \mathcal{H}_{\partial M_A}$ between the observer's interior bulk Hilbert space and the horizon's boundary Hilbert space.*

*Structural argument.* Thesis A / Thesis A' unitary equivalence ([Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Proposition 3.2): the interior Cauchy-slice configuration determines and is determined by the horizon-crossing record, via a unitary intertwiner. This intertwiner is precisely the holographic isometric encoding of HaPPY: bulk-to-boundary direction is Thesis A' → Thesis A (interior to horizon-record); boundary-to-bulk direction is Thesis A → Thesis A' (horizon-record to interior). The horizon is entirely null (Thesis B), so its encoding is integer-valued — making it a natural "boundary Hilbert space" in the HaPPY sense, with each null-generator crossing contributing one integer-valued boundary qubit. $\square$

**Proposition 1.2 (Spatial-axis subregion duality).** *[Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 4.5 (exterior cancellation) is the subregion-duality condition for the HaPPY-style encoding on the spatial axis: any exterior substrate content compatible with a given integer horizon-residue $R_{\partial M_A}$ is operationally invisible to $A$.*

*Structural argument.* Subregion duality in HaPPY: if the substrate on the boundary carries integer data that uniquely determines the bulk logical content (full boundary reconstructs full bulk), then exterior-to-the-boundary substrate cannot be independently observed — it is gauge-equivalent under the boundary's encoding. Corollary 4.5 states exactly this: exterior continuous content with fixed $R_{\partial M_A}$ is operationally invisible. The exterior is the substrate "outside" the horizon; the horizon is the HaPPY-code boundary; the invisibility is the subregion-duality invariance. $\square$

**Proposition 1.3 (Spatial-axis boundary-qubit count).** *The horizon mode count $N_A = A_A/4\ell_P^2$ of [Area Scaling](/derivations/holography/area-scaling) Theorem 5.2 is the HaPPY-style boundary-qubit count of the spatial-axis factor.*

*Proof.* Direct from [Area Scaling](/derivations/holography/area-scaling) Theorem 5.2: the horizon carries one bit per Planck-area cell, with total $N_A = A_A/4\ell_P^2$. This is the defining quantity for boundary-qubit count in any tensor-network holographic code. $\square$

**Proposition 1.4 (Spatial-axis distance scaling).** *The code distance on the spatial axis scales as $d^{\text{sp}} \sim N_A^{1/2}$, matching the standard HaPPY family distance formula (radius-scale bulk operators require boundary-region-circumference-scale boundary support).*

*Proof-sketch.* HaPPY codes on an AdS-like hyperbolic lattice have distance $d \sim L$ where $L$ is the linear size of the boundary. For a horizon of area $A_A$ with $N_A = A_A/4\ell_P^2$ qubits distributed on its 2-surface, the linear size is $L \sim \sqrt{A_A}/\ell_P = \sqrt{N_A}$. Standard HaPPY distance formula gives $d^{\text{sp}} \sim \sqrt{N_A}$. $\square$

**Remark 1.5 (The fit is near-tautological).** *The framework's holographic commitments — Area Scaling, Observer Holographic Equivalence Theses A/A'/B, exterior cancellation — are structurally equivalent to HaPPY's defining properties. This is not a coincidence: both the framework and HaPPY were motivated by the same underlying intuition (AdS/CFT-style bulk-boundary duality). What this derivation adds is the explicit identification: the framework's horizon-integer-encoding is a HaPPY-style holographic code with framework-specific parameters (area-bounded $N_A$, integer-residue logical content).*

### Step 2: Algebraic Axis — Kitaev Topological Code Identification

**Preliminaries.** The Kitaev topological code family (Kitaev 2003, "Fault-tolerant quantum computation by anyons," *Annals of Physics* 303 (2003) 2–30) realizes logical qubits as homotopy-class invariants on a lattice of physical qubits:

1. **Logical qubits = homotopy classes.** The code space is the ground-state space of a local Hamiltonian; logical qubits are encoded in non-contractible homotopy classes of the underlying manifold.
2. **Stabilizer generators are local.** Vertex and plaquette operators act on finitely many physical qubits and generate the stabilizer group.
3. **Logical operators are non-contractible cycles.** Logical Pauli-X and Pauli-Z are represented by minimum-length non-contractible cycles.
4. **Distance = system size.** Code distance scales with the linear size of the manifold.

Higher-dimensional variants (4D toric code; Walker–Wang models of Walker–Wang 2011 "(3+1)-TQFTs and topological insulators"; 5D Kitaev codes) extend to logical qubits protected by $\pi_k$ for $k > 1$.

**Proposition 2.1 (Algebraic-axis homotopy-class logical content).** *The algebraic-axis factor $\mathcal{P}_A^{\text{alg}}$ encodes logical content as the homotopy class $[\phi]_A \in \pi_k(G_n) = \mathbb{Z}$ of the phase trajectory at bootstrap level $n$, per [Moufang-Loop Phase Closure](/derivations/interactions/moufang-loop-phase-closure) Proposition 6.1.*

*Proof.* Direct statement of Moufang-Loop Prop 6.1 and Step 1 Proposition 1.3. $\square$

**Proposition 2.2 (Level-1 case — 2D toric-code structure).** *At bootstrap level 1, the logical content is the $\pi_1(U(1)) = \mathbb{Z}$ winding number of the phase trajectory. This is isomorphic in structure to the 2D toric code's logical qubit: a $\mathbb{Z}$-valued invariant associated with a non-contractible cycle of the underlying space.*

*Structural argument.* The 2D toric code on a torus has four ground states, corresponding to four elements of $\pi_1(T^2) = \mathbb{Z}^2$ (two winding directions) reduced mod 2 to get a 2-qubit logical space. The underlying structure — logical content as winding invariant, code stabilizers as local operators that preserve winding, local errors as small deformations that do not change winding — is preserved in the framework's level-1 case. The framework's $\pi_1(U(1)) = \mathbb{Z}$ is non-reduced (full $\mathbb{Z}$ rather than $\mathbb{Z}/2$), matching unreduced $\mathbb{Z}$-variants of the toric code. $\square$

**Proposition 2.3 (Level-2 and level-3 cases — 4D topological / Walker–Wang structure).** *At bootstrap levels 2 and 3, the logical content is the $\pi_3(SU(2)) = \mathbb{Z}$ or $\pi_3(SU(3)) = \mathbb{Z}$ instanton number of the phase trajectory. This is isomorphic in structure to 4D topological-code logical qubits: $\mathbb{Z}$-valued invariants associated with $\pi_3$-nontrivial maps from a $4$-sphere to the target gauge group.*

*Structural argument.* The 4D toric code (Dennis–Kitaev–Landahl–Preskill 2002, "Topological quantum memory," *J. Math. Phys.* 43 (2002) 4452–4505) encodes logical qubits via $\pi_2$-valued invariants on a 4-torus. Walker–Wang models extend to $\pi_3$-valued invariants with target a generic compact Lie group; the framework's $G_n = SU(2)$ at level 2 and $G_n = SU(3)$ at level 3 are exactly the target groups of the simplest non-Abelian Walker–Wang realizations. The logical-content-as-instanton-number correspondence is preserved; the framework adds the physical interpretation that the instanton number is a bootstrap-level-specific observer invariant (color at level 3, weak isospin at level 2). $\square$

**Proposition 2.4 (Algebraic-axis distance scaling).** *The code distance on the algebraic axis scales as $d^{\text{alg}} \sim L_n$, where $L_n$ is the linear size of the bootstrap-scale region (the characteristic length at bootstrap level $n$).*

*Proof-sketch.* Standard topological-code distance: $d \sim L$ where $L$ is the system's linear size. For the algebraic axis, $L_n = (\hbar / m_n c)$ at bootstrap level $n$ — the Compton wavelength of the observer type at that level. So $d^{\text{alg}} \sim \hbar / m_n c$ in Planck units. $\square$

**Remark 2.5 (What the framework adds to Kitaev).** *Standard topological codes operate on a fixed lattice with a fixed target group. The framework's algebraic axis has a bootstrap-level-indexed family of codes, each with a different target group $G_n$ and a different linear size $L_n$. The bootstrap termination at level 3 means there is no level-4 code — this is the framework's analogue of "the topological code family has three levels and stops." This is absent from standard Kitaev, which has no natural termination at any specific level.*

### Step 3: Temporal Axis — Floquet Code Identification

**Preliminaries.** The Floquet code family (Hastings, Haah 2021, "Dynamically generated logical qubits," *Quantum* 5 (2021) 564) generalizes stabilizer codes to time-dependent stabilizer groups:

1. **Time-dependent stabilizer group.** The stabilizer group $\mathcal{S}(\tau)$ rotates through a periodic schedule $\mathcal{S}(\tau + T) = \mathcal{S}(\tau)$.
2. **Dynamically generated logical qubits.** Logical qubits are not associated with any single $\mathcal{S}(\tau)$ but with the cycle-averaged / periodic structure of the schedule.
3. **Measurement-based realization.** Each step of the cycle performs a commuting-stabilizer measurement; the logical content accumulates across full cycles.
4. **Period-scaled distance.** Distance depends on the number of sub-cycle measurement steps and the connectivity of the schedule.

**Proposition 3.1 (Temporal-axis periodic stabilizer schedule).** *The Axiom 3 phase evolution $\phi_\tau: \mathcal{H}_A \to \mathcal{H}_A$ is a continuous-time periodic stabilizer schedule with period $T_A$, whose instantaneous "stabilizer group" at time $\tau$ is the group of substrate operators that preserve $\phi_\tau(x_0)$ for some reference basepoint $x_0 \in \Sigma$.*

*Structural argument.* Axiom 3 specifies $\phi_\tau$ as a one-parameter $U(1)$ action with $\phi_{T_A} = \mathrm{id}$ and continuity in $\tau$. For each $\tau \in [0, T_A)$, the observer state at that instant is characterized by the phase value $\phi_\tau(x_0)$ — a continuous element of the level-$n$ group $G_n$. The stabilizer group at $\tau$ is the isotropy subgroup of $\phi_\tau(x_0)$ in the substrate automorphism group. This isotropy subgroup rotates with $\tau$ following $\phi_\tau$'s action, giving a periodic schedule with period $T_A$. $\square$

**Proposition 3.2 (Temporal-axis dynamically generated logical content).** *The integer tick count $k_A$ is a dynamically generated logical invariant: it is not determined by any instantaneous stabilizer group $\mathcal{S}(\tau)$, but only by the cycle structure of the full schedule.*

*Proof.* The instantaneous phase $\phi_\tau(x_0)$ at any fixed $\tau$ is a continuous value with no integer content. The integer count $k_A$ of completed cycles up to a given proper time is undefined without the full closure structure $\phi_{k T_A} = \mathrm{id}$ for all $k$ (Step 1 Proposition 1.2). Hence $k_A$ is a dynamically generated invariant of the Floquet schedule, not an instantaneous eigenvalue. This is the defining signature of a Floquet-code logical qubit (Hastings–Haah 2021 Theorem 1). $\square$

**Proposition 3.3 (Temporal-axis distance scaling).** *The code distance on the temporal axis scales linearly with the number of sub-tick substrate events per period: $d^{\text{tmp}} \sim T_A / \tau_P$, where $\tau_P$ is the Planck time.*

*Proof-sketch.* Floquet-code distance in continuous time: the number of independent Planck-tick events during one period, each of which could contribute an error. With $T_A$ the period and $\tau_P$ the Planck time, this is $d^{\text{tmp}} \sim T_A / \tau_P$ events. For an observer with period $T_A = 2\pi\hbar / m_A c^2$, this gives $d^{\text{tmp}} \sim (m_P/m_A)$. $\square$

**Remark 3.4 (Continuous-time Floquet codes are less standard).** *Hastings–Haah 2021 uses discrete measurement schedules. Continuous-time Floquet codes exist (see, e.g., Aasen–Bonderson–Knapp 2022, "Characterization and classification of interacting (2+1)-D Floquet topological phases") but the theory is less developed. The framework's temporal-axis factor is naturally continuous-time (Axiom 3 specifies a continuous $\phi_\tau$, not a discrete schedule). This is a point where the framework's structural commitments sit slightly ahead of the quantum-information-theory literature — continuous-time Floquet codes are a recognized but less fully analyzed family.*

### Step 4: Compatibility — The Three-Axis Product

**Theorem 4.1 (Three-axis commuting-stabilizer product).** *The three axis-specific stabilizer groups $\mathcal{S}^{\text{sp}}$ (HaPPY on spatial), $\mathcal{S}^{\text{alg}}$ (Kitaev on algebraic), $\mathcal{S}^{\text{tmp}}(\tau)$ (Floquet on temporal) pairwise commute on the substrate Hilbert space $\mathcal{H}_{\text{substrate}}$:*

$$[S^{\text{sp}}, S^{\text{alg}}] = [S^{\text{alg}}, S^{\text{tmp}}(\tau)] = [S^{\text{sp}}, S^{\text{tmp}}(\tau)] = 0$$

*for all generators $S^{\text{sp}} \in \mathcal{S}^{\text{sp}}$, $S^{\text{alg}} \in \mathcal{S}^{\text{alg}}$, $S^{\text{tmp}}(\tau) \in \mathcal{S}^{\text{tmp}}(\tau)$, and all $\tau \in [0, T_A)$. Consequently, the code space $\mathcal{C}_A$ of Step 1 Proposition 3.3 is the joint fixed subspace*

$$\mathcal{C}_A = \{|\psi\rangle \in \mathcal{H}_{\text{substrate}} : S|\psi\rangle = |\psi\rangle \text{ for all } S \in \mathcal{S}^{\text{sp}} \cup \mathcal{S}^{\text{alg}} \cup \mathcal{S}^{\text{tmp}}(\tau), \text{ for all } \tau \in [0, T_A)\}.$$

*Structural argument.* Step 1 Remark 1.4 establishes that the three axes are mutually independent: the horizon classification (spatial) is a property of surface causal character, independent of tick count or bootstrap level; the tick count (temporal) is a feature of the trajectory in time, independent of the surface it crosses or the level it lives in; the homotopy class (algebraic) is a feature of the trajectory in its phase-space target, independent of tick timing or enclosing surface.

This independence translates to commutation at the operator level: the stabilizer generators for each axis act on independent substrate degrees of freedom. The HaPPY boundary-operator stabilizers act on horizon modes; the Kitaev topological stabilizers act on phase-space modes at bootstrap scale $L_n$; the Floquet time-dependent stabilizers act on the temporal continuation of the phase trajectory. Two operators acting on non-overlapping degrees of freedom commute. Hence the three stabilizer groups pairwise commute.

The code space $\mathcal{C}_A$ of Step 1 Proposition 3.3 is the subspace of substrate states with integer-invariant profile $\mathcal{I}_A$ on all three axes. By the commutation, this subspace is the joint fixed subspace of all three stabilizer groups — the intersection of three independent code-space constraints. $\square$

**Remark 4.2 (Why this is a product, not a concatenation).** *Concatenated codes (e.g., concatenated stabilizer codes) apply one code inside another hierarchically: the physical qubits of an outer code are themselves logical qubits of an inner code. The observer projection code is not concatenated — the three factors act on simultaneously-present, orthogonal degrees of freedom, not hierarchically. This matters for correlated-error performance: concatenated codes have multiplicative distance and thresholds; product codes have minimum-over-factors distance with correlated-error penalties. The correct analog structure here is closest to a 3D product code or a subsystem code with factored gauge algebra.*

**Corollary 4.3 (Code-rate calculation).** *The product code's rate — logical qubits per physical qubit — is the product of axis-wise rates:*

$$\text{rate}(\mathcal{P}_A) = \text{rate}^{\text{sp}} \cdot \text{rate}^{\text{alg}} \cdot \text{rate}^{\text{tmp}}.$$

*For a typical Standard Model particle (Step 1 Remark 1.6, $\sim 9$ bits of logical content distributed across the three axes), this gives a total rate of $\sim 2^9 / \dim(\mathcal{C}_A) \sim 2^9 / 2^{N_A}$, consistent with Step 1 Corollary 3.4.*

### Step 5: What Is Novel — The Cross-Axis Couplings

**Proposition 5.1 (Cross-axis couplings are framework-specific).** *The three-axis product family with pairwise-commuting stabilizers is a known construction in quantum information (3D product stabilizer codes, e.g., Bombin–Martin-Delgado 2007 "Topological Quantum Distillation"). What is novel in the observer-projection code is not the product structure itself but the specific cross-axis couplings:*

1. *Boundary-qubit count $N_A$ (spatial-factor parameter) is determined by the observer's horizon area $A_A$, which depends on observer mass via $r_H = 2Gm/c^2$, which is determined by bootstrap dynamics.*

2. *Target group $G_n$ (algebraic-factor parameter) is determined by the observer's bootstrap level $n$, which is the level at which the observer's crystallization stabilizes in the Cayley–Dickson tower.*

3. *Period $T_A$ (temporal-factor parameter) is determined by the observer's characteristic frequency $\omega_A = m_A c^2 / \hbar$, which depends on the observer's mass — which again feeds back to bootstrap dynamics.*

*All three parameters ($N_A$, $G_n$, $T_A$) are functions of a single underlying quantity — the observer's mass $m_A$ — constrained by the framework's bootstrap dynamics. This is the novel content: the product code's three factors are not independent parameters but coupled functions of a single observer parameter.*

**Proposition 5.2 (Minimum additional structure required beyond known families).** *Formalizing the observer-projection code as a specific, named family requires exactly the following additional structure beyond standard HaPPY × Kitaev × Floquet products:*

1. *A **coupling map** $m_A \mapsto (N_A, G_n, T_A)$ specifying how observer mass determines the three factor parameters. This map is a framework-specific physical constraint, not a code-theoretic one.*

2. *A **bootstrap-termination constraint** $n \in \{1, 2, 3\}$ restricting the algebraic-factor's target group. This is the [Moufang-Loop Phase Closure](/derivations/interactions/moufang-loop-phase-closure) Theorem 5.1 constraint, not present in standard Kitaev.*

3. *A **continuous-time Floquet schedule** rather than a discrete one. This is a non-standard but recognized variant of the Floquet-code family.*

*With these three additions, the resulting family could be named (e.g., "bootstrap-coupled three-axis observer code"); without them, the family is the standard HaPPY × Kitaev × Floquet product with no physics content.*

**Corollary 5.3 (Implication for Step 3 of the research target).** *Step 3 (code-distance computation for Standard Model integer profiles) can proceed by computing distances on each factor using the target family's distance formulas and then composing via Theorem 4.1's product structure. The correlated-error analysis is non-trivial but structurally tractable given the pairwise commutation. Specifically:*

- *Spatial-factor distance $d^{\text{sp}} \sim N_A^{1/2}$ from HaPPY scaling.*
- *Algebraic-factor distance $d^{\text{alg}} \sim L_n \sim \hbar / m_n c$ from topological-code scaling.*
- *Temporal-factor distance $d^{\text{tmp}} \sim T_A / \tau_P$ from Floquet scaling.*

*The product-code's total capacity against independent Planck-noise errors is bounded below by the minimum of the three; its capacity against correlated errors requires the joint analysis of Step 3 proper.*

### Step 6: Consistency with Step 1 and Existing Framework Commitments

**Check 6.1 (Step 1 CPTP map).** *Step 1 Proposition 2.3 establishes $\mathcal{P}_A$ as a CPTP map factoring through $\mathcal{I}_A$. The present derivation refines this: the factorization through $\mathcal{I}_A$ is the three-axis stabilizer-preserving factorization, with each axis's stabilizer group identified with a known code family.* ✓

**Check 6.2 (Observer Holographic Equivalence).** *Theses A and A' of [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) correspond to the HaPPY spatial-factor's bulk/boundary duality (Proposition 1.1). Thesis B corresponds to the boundary being a null surface with integer content — the HaPPY code's boundary integer-valued Hilbert space.* ✓

**Check 6.3 (Moufang-Loop Phase Closure).** *[Moufang-Loop Phase Closure](/derivations/interactions/moufang-loop-phase-closure) Proposition 6.1 provides the Kitaev algebraic-factor's logical content ($\pi_1(U(1)), \pi_3(SU(2)), \pi_3(SU(3))$). Theorem 5.1 (bootstrap termination at $\mathbb{O}$) is the algebraic-factor's termination at level 3.* ✓

**Check 6.4 (Loop Closure).** *[Loop Closure](/derivations/axioms/loop-closure) Axiom 3 provides the Floquet temporal-factor's periodic structure ($\phi_\tau$, $T_A$, integer-tick closure).* ✓

**Check 6.5 (Area Scaling).** *[Area Scaling](/derivations/holography/area-scaling) Theorem 5.2 provides the HaPPY spatial-factor's boundary-qubit count ($N_A = A_A/4\ell_P^2$).* ✓

**Check 6.6 (Minimum additional structure — summary).** *The two framework-specific additions (the bootstrap-termination constraint and the coupling map $m_A \mapsto (N_A, G_n, T_A)$) are the only pieces required beyond standard HaPPY × Kitaev × Floquet. Both are established within the framework (Moufang-Loop Theorem 5.1; bootstrap-mass relation from Mass Hierarchy and horizon-area relation from Schwarzschild radius). Hence the identification does not require any new framework postulates.* ✓

## Consequences

**C1. Code family identification closes Step 1 Open Gap 3.** The observer-projection code is a hybrid HaPPY × Kitaev × Floquet product family with bootstrap-coupled parameters, not a novel family requiring new quantum-information theory. Each factor is drawn from an established literature; the unified product with cross-axis couplings is novel but assembled from known parts.

**C2. Step 3 (code-distance computation) is now tractable.** With the three factors identified, distance computation proceeds by applying each target family's distance formula and composing via the product-code structure of Theorem 4.1. Corollary 5.3 provides the axis-wise distance prescriptions.

**C3. Standard Model matching (Step 4) becomes a specific computation.** Predicting minimum-viable horizon areas for specific Standard Model integer profiles reduces to: (i) specify the profile $\mathcal{I}_A$, (ii) compute the required distance on each factor, (iii) invert for the minimum horizon area that achieves the distance, (iv) compare to the observed Compton scale.

**C4. The continuous-time Floquet factor links to the Axiom 3 non-triviality.** Axiom 3's content — that continuous phase evolution produces exact integer-tick closure — is recognized here as the defining signature of a (continuous-time) Floquet code: dynamically generated logical qubits from a periodic schedule. This reinforces the framework's intuition that Axiom 3 is the observer's dynamically-generated integer.

**C5. Bootstrap termination becomes a code-theoretic fact.** The algebraic-factor's target group $G_n \in \{U(1), SU(2), SU(3)\}$ terminating at level 3 is, within the three-axis code family, the algebraic-factor's termination at level 3. This is consistent with [Moufang-Loop Phase Closure](/derivations/interactions/moufang-loop-phase-closure) Theorem 5.1 and gives a code-theoretic reading of bootstrap termination: only three homotopy-class logical-content levels are algebraically admissible.

**C6. The $10^{43}$-redundancy of Step 1 Corollary 3.4 is distributed across three factors.** The huge redundancy ratio ($\dim \mathcal{C}_A / \dim \mathcal{H}_A^{\text{logical}} \sim 10^{43}$) is not concentrated on one axis but distributed: spatial ($\sim 2^{N_A} / \sim 2^6$ for horizon-residue content), algebraic ($\sim 2^{L_n^3} / \sim 2^1$ for homotopy-class content), temporal ($\sim 2^{T_A/\tau_P} / \sim 2^1$ for tick-count content). Correlated-error performance across the three axes determines the effective code threshold.

## Rigor Assessment

**Rigorous (consolidation — inherits rigor from source derivations and standard QEC literature):**

- Proposition 1.2 (subregion duality from Corollary 4.5): direct.
- Proposition 1.3 (boundary-qubit count from Area Scaling): direct.
- Proposition 2.1 (homotopy-class logical content from Moufang-Loop): direct.
- Proposition 3.1 (periodic stabilizer schedule from Axiom 3): direct.
- Proposition 3.2 (dynamically generated logical content): direct, given the standard Floquet-code definition.

**Semi-formal (structural argument, not explicit construction):**

- Proposition 1.1 (spatial-axis isometric encoding): structural argument via Observer Holographic Equivalence Proposition 3.2, but the HaPPY tensor-network reconstruction of the intertwiner $V_{\text{sp}}$ is not given explicitly. Open Gap 1.
- Propositions 2.2, 2.3 (level-1 toric-code structure, level-2/3 Walker–Wang structure): structural argument via homotopy-class matching, but the explicit Hamiltonian realization of the algebraic-factor's stabilizers is not given. Open Gap 2.
- Theorem 4.1 (three-axis commuting stabilizer): structural argument via axis independence, but pairwise commutation at the operator-algebra level is asserted rather than verified on explicit generators. Open Gap 3.
- Proposition 3.3 (temporal-axis distance): scaling stated, but continuous-time Floquet distance formulas are less standard than discrete Floquet; the scaling inherits literature uncertainty. Open Gap 4.

**Deferred to subsequent derivations (Steps 3–5 of the research target):**

- Code-distance computation for specific SM integer profiles.
- Matching the predicted threshold spectrum to the observed Standard Model.
- Unifying the tunneling mechanism of Mass Hierarchy with code-distance requirements.

## Open Gaps

1. **Explicit HaPPY tensor-network construction for the spatial factor.** Give the tensor-network geometry on the horizon (hyperbolic tiling, perfect-tensor choices, bulk-boundary map) that realizes the spatial-axis isometric encoding. Likely tools: AdS-like horizon metric + Pastawski–Yoshida–Harlow–Preskill tensor-network construction. *Difficulty: MODERATE.*

2. **Explicit Walker–Wang Hamiltonian for the algebraic factor.** Give the local Hamiltonian on a 4D lattice whose ground-state space realizes the framework's $\pi_3(SU(2))$ or $\pi_3(SU(3))$ logical content at bootstrap levels 2 and 3. Likely tools: Walker–Wang 2011 for target Lie groups; care with 3+1 vs 4 dimensional realizations. *Difficulty: MODERATE-HARD.*

3. **Pairwise-commutation verification on explicit generators.** Given explicit stabilizer generators from Gaps 1 and 2 (plus a Floquet schedule derived from Axiom 3), verify that the three groups pairwise commute on the full substrate Hilbert space. This checks that the axis-independence structural argument survives explicit construction. *Difficulty: MODERATE; prerequisite is Gaps 1 and 2.*

4. **Continuous-time Floquet-code distance formula.** Derive or cite the distance formula for a continuous-time Floquet code with period $T_A$ and single-Planck-tick error rate. Current literature focuses on discrete schedules; the continuous case may require new analysis. *Difficulty: MODERATE.*

5. **Correlated-error analysis across the three axes.** Analyze correlated errors that simultaneously flip invariants on multiple axes (e.g., a Planck event that changes both $k_A$ and $R_{\partial M_A}$). Determines the product code's effective threshold under realistic framework-noise models. *Difficulty: MODERATE-HARD.*

6. **Code-distance computation for specific SM profiles (Research Target Step 3).** With Gaps 1–5 addressed, compute the minimum horizon area (hence mass) that achieves the required distance on each factor for each SM particle's integer profile. Produces the quantitative predicted spectrum for Step 4. *Difficulty: HARD; prerequisite is Gaps 1–5.*

7. **Cross-check against Bootstrap Fixed-Point Existence.** The bootstrap-coupling map $m_A \mapsto (N_A, G_n, T_A)$ is itself a fixed-point structure (observer mass determines code parameters, which constrain stable-observer spectrum, which determines admissible masses). Cross-check with [Bootstrap Fixed-Point Existence](/derivations/foundation/bootstrap-fixed-point-existence) to verify consistency. *Difficulty: MODERATE.*
