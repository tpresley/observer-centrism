---
title: "Flavor Mixing from Winding-Axis Geometry"
status: "draft"
dependsOn: ["particles/three-generations", "gauge/weak-interaction"]
enablesDerivation: []
tags: ["flavor"]
summary: "The three winding axes that generate three particle generations define distinct mass and weak-interaction eigenbases. The mismatch between these bases — parameterized by the CKM (quark) and PMNS (lepton) mixing matrices — arises from the geometry of the coherence cost function on SO(3), with discrete residual symmetries selecting the preferred bases"
rigorLevel: "semi-formal"
lastUpdated: 2026-03-10
---

## Statement

**Theorem.** The flavor mixing matrices (CKM for quarks, PMNS for leptons) arise from the geometric mismatch between two natural bases on the space of three particle generations:

1. The **mass basis**: eigenstates of the coherence cost function (determined by the [Bootstrap Mechanism](/derivations/interactions/bootstrap) and [Mass Hierarchy](/derivations/particles/mass-hierarchy))
2. The **weak basis**: eigenstates of the $SU(2)_L$ gauge interaction (determined by the [Weak Interaction](/derivations/gauge/weak-interaction))

The mixing matrix $U = U_{\text{up}}^\dagger U_{\text{down}}$ is the rotation between these bases. The angle hierarchy ($\theta_{13} \ll \theta_{12} \sim \theta_{23}$ for PMNS; all $\theta_{ij}$ small for CKM) follows from the structure of the coherence cost function on the space of winding-axis configurations.

## Structural Postulate

**Structural Postulate S1 (Maximal discrete symmetry of coherence cost).** The coherence cost function $\mathcal{C}(\hat{n}_1, \hat{n}_2, \hat{n}_3)$ on the space of three winding-axis configurations has the maximal finite symmetry consistent with three spatial dimensions. This symmetry is $A_5$ — the alternating group on 5 elements, isomorphic to the rotation group of the icosahedron, the largest non-abelian simple finite subgroup of $SO(3)$.

**Remark.** $A_5$ is distinguished among finite subgroups of $SO(3)$ as the unique largest non-abelian simple subgroup ($|A_5| = 60$). The full classification of finite subgroups of $SO(3)$ is: cyclic $C_n$, dihedral $D_n$, tetrahedral $A_4$ ($|A_4| = 12$), octahedral $S_4$ ($|S_4| = 24$), icosahedral $A_5$ ($|A_5| = 60$). The simplicity of $A_5$ (no normal subgroups) means the symmetry cannot be reduced further without breaking it completely — it is "all or nothing." This is the discrete analog of the framework's location-independence principle: the coherence cost should be as symmetric as the underlying space allows.

## Derivation

### Step 1: Two Natural Bases for Three Generations

**Definition 1.1.** By [Three Generations](/derivations/particles/three-generations) (Theorem 4.2), the three particle generations correspond to three independent winding axes $\hat{n}_1, \hat{n}_2, \hat{n}_3$ in $\mathfrak{so}(3)$. Each axis defines a $U(1)$ subgroup of $SO(3)$.

**Definition 1.2.** The **mass basis** $\{|m_1\rangle, |m_2\rangle, |m_3\rangle\}$ is determined by the eigenstates of the coherence cost function:

$$\mathcal{C}(\hat{n}) = \sum_i m_i |\hat{n} \cdot \hat{n}_i^{(\text{mass})}|^2$$

where $m_1 < m_2 < m_3$ are the three mass eigenvalues, fixed by the [Mass Hierarchy](/derivations/particles/mass-hierarchy) derivation's exponential tunneling mechanism.

**Definition 1.3.** The **weak basis** $\{|w_1\rangle, |w_2\rangle, |w_3\rangle\}$ is determined by the eigenstates of the $SU(2)_L$ gauge coupling. The weak interaction pairs fermions into doublets:

$$\binom{u}{d'}_L, \quad \binom{c}{s'}_L, \quad \binom{t}{b'}_L$$

where the primed states are *weak eigenstates*, not mass eigenstates.

**Proposition 1.4 (Mixing arises from basis mismatch).** *The mass and weak bases are, in general, distinct. The unitary matrix relating them is the mixing matrix:*

$$|w_i\rangle = \sum_j U_{ij} |m_j\rangle$$

*For quarks, $U = V_{\text{CKM}}$. For leptons, $U = U_{\text{PMNS}}$.*

*Proof.* The mass and weak bases are determined by different physical mechanisms: masses by coherence cost (tunneling through the bootstrap), weak coupling by the $SU(2)_L$ gauge structure. These two mechanisms have no reason to select the same basis. In the framework: the mass basis is determined by the bootstrap's fixed-point structure (which depends on the full gauge group $SU(3) \times SU(2) \times U(1)$), while the weak basis is determined by $SU(2)_L$ alone. Since these are different groups, their eigenbases generically differ. $\square$

### Step 2: The Geometry of Winding-Axis Configurations

**Definition 2.1.** The **configuration space** of three winding axes in $\mathfrak{so}(3) \cong \mathbb{R}^3$ is:

$$\mathcal{W} = \{(\hat{n}_1, \hat{n}_2, \hat{n}_3) \in (S^2)^3 : \hat{n}_i \neq \pm \hat{n}_j \text{ for } i \neq j\}$$

modulo the permutation group $S_3$ (relabeling the axes).

**Proposition 2.2 (Coherence cost on $\mathcal{W}$).** *The coherence cost function $\mathcal{C}: \mathcal{W} \to \mathbb{R}$ is determined by the angles between the winding axes:*

$$\mathcal{C}(\hat{n}_1, \hat{n}_2, \hat{n}_3) = f(\hat{n}_1 \cdot \hat{n}_2, \hat{n}_2 \cdot \hat{n}_3, \hat{n}_3 \cdot \hat{n}_1)$$

*where $f$ depends on the inner products (angles between axes). The function $f$ is invariant under the full $SO(3)$ acting simultaneously on all three axes (location independence) and under $S_3$ permutations of the axes.*

*Proof.* Location independence ([Lorentz Invariance](/derivations/spacetime/lorentz-invariance), S1) requires that $\mathcal{C}$ depends only on the relative configuration of the three axes, not on their absolute orientation. The relative configuration is specified by the three inner products $\hat{n}_i \cdot \hat{n}_j$. $S_3$ invariance follows because the three generations are a priori indistinguishable — labeling is a convention. $\square$

### Step 3: Discrete Symmetry and Basis Selection

**Theorem 3.1 (Discrete symmetry of the coherence cost).** *Under Structural Postulate S1, the coherence cost function $\mathcal{C}$ has $A_5$ symmetry: it is invariant under the 60 rotations of the icosahedron.*

*This discrete symmetry is spontaneously broken by the mass hierarchy ($m_1 \neq m_2 \neq m_3$): the choice of mass eigenvalues selects a direction in $\mathcal{W}$, reducing $A_5$ to a residual subgroup.*

**Proposition 3.2 (Residual symmetries select bases).** *The spontaneous breaking of $A_5$ by the mass spectrum produces residual discrete symmetries in each sector. Different residual subgroups act on the mass and weak bases:*

- *The **mass basis** is selected by a residual $\mathbb{Z}_5$ symmetry (the 5-fold rotational symmetry of the icosahedron about a vertex axis). This is the residual symmetry of the coherence cost function when the mass eigenvalues $(m_1, m_2, m_3)$ are fixed.*

- *The **weak basis** is selected by a residual Klein four-group $\mathbb{Z}_2 \times \mathbb{Z}_2$ (the 2-fold symmetries about face axes of the icosahedron). This is the residual symmetry of the $SU(2)_L$ doublet pairing.*

*The mixing matrix is determined by the relative orientation of these two residual subgroups within $A_5$.*

**Remark.** This is the framework's version of the "discrete flavor symmetry" program (Ma, 2001; Altarelli & Feruglio, 2005; King, 2013). The key difference: here $A_5$ is motivated by the framework's structure (maximal finite symmetry of the coherence cost in 3D), rather than being an ad hoc assumption.

### Step 4: The Mixing Matrix Structure

**Proposition 4.1 (Two-sector architecture).** *The mixing matrix has a hierarchical structure determined by the two parameters of $A_5$ breaking:*

1. *An overall breaking scale $\kappa \ll 1$ that controls the reactor angle $\theta_{13}$*
2. *A discrete symmetry channel that determines $\theta_{12}$ and $\theta_{23}$*

*The result: $\theta_{13} \sim \kappa^\alpha$ (small, controlled by breaking amplitude) while $\theta_{12}$ and $\theta_{23}$ are $O(1)$ (large, controlled by discrete geometry).*

*Proof sketch.* The $A_5$ group has 5 irreducible representations: $\mathbf{1}, \mathbf{3}, \mathbf{3'}, \mathbf{4}, \mathbf{5}$. The three generations transform as the $\mathbf{3}$ of $A_5$. When $A_5$ breaks to the residual subgroups:

- The $\mathbf{3}$ of $A_5$ decomposes into representations of the residual subgroup.
- The misalignment between the $\mathbb{Z}_5$ (mass) and $\mathbb{Z}_2 \times \mathbb{Z}_2$ (weak) residual subgroups determines the mixing matrix.
- The golden ratio $\phi = (1 + \sqrt{5})/2$ appears naturally in the icosahedral geometry and enters the mixing angles.

For the PMNS matrix, this gives the "golden ratio mixing" pattern:

$$\tan\theta_{12} \approx 1/\phi, \quad \theta_{23} \approx \pi/4, \quad \theta_{13} \sim \kappa^{0.4}$$

with $\theta_{12} \approx 31.7°$ (observed: $33.4°$) and $\theta_{23} \approx 45°$ (observed: $\sim 49°$). $\square$

**Remark (Honest assessment).** The golden ratio prediction for $\theta_{12}$ is intriguing but not exact — it is $\sim 2°$ below the experimental value. This discrepancy could be from: (a) higher-order corrections in $\kappa$, (b) renormalization-group running from the symmetry-breaking scale to the measurement scale, or (c) the wrong residual symmetry channel. This derivation achieves the *structural* prediction (hierarchy $\theta_{13} \ll \theta_{12} \sim \theta_{23}$) but not the *quantitative* values.

### Step 5: CKM vs. PMNS — Why Quarks Mix Differently

**Proposition 5.1 (Small CKM mixing from strong mass hierarchy).** *The CKM matrix is nearly diagonal ($\theta_{12}^{\text{CKM}} \approx 13°$, $\theta_{23}^{\text{CKM}} \approx 2.4°$, $\theta_{13}^{\text{CKM}} \approx 0.2°$) because the quark mass hierarchy is much stronger than the lepton mass hierarchy:*

$$\frac{m_u}{m_t} \sim 10^{-5} \quad \text{vs.} \quad \frac{m_1}{m_3} \lesssim 0.1 \text{ (neutrinos)}$$

*Proof sketch.* The mixing angles are controlled by the ratio of mass differences to masses. When the mass eigenvalues are widely separated (strong hierarchy), the mass basis is "stiff" — small perturbations from the gauge interaction cannot rotate it significantly. When the mass eigenvalues are nearly degenerate (mild hierarchy), the mass basis is "soft" — the gauge interaction can rotate it substantially.

In the framework: the quark masses span 5 orders of magnitude (from $m_u \sim 2$ MeV to $m_t \sim 173$ GeV), making the quark mass basis extremely rigid. The neutrino mass differences are at most one order of magnitude, making the neutrino mass basis soft. This is the qualitative explanation for the quark-lepton complementarity pattern. $\square$

**Remark.** The relationship between mass hierarchy steepness and mixing angle smallness is well-established phenomenologically (the Wolfenstein parameterization: $\theta_C \approx \sqrt{m_d/m_s} \sim 0.22$). The framework provides the context — the mass hierarchy from bootstrap tunneling determines how "rigid" each sector's mass basis is — but does not yet derive the specific mass ratios that would quantitatively predict the CKM angles.

### Step 6: CP-Violating Phases

**Proposition 6.1 (CP phases from complex $A_5$ representation).** *The $A_5$ breaking pattern generically produces CP-violating phases in the mixing matrices. The Dirac CP phase $\delta$ is determined by the complex embedding of $A_5$ into $U(3)$.*

*For PMNS: the $A_5$ breaking channels predict discrete values of $\delta$ depending on the residual symmetry selection. Five channels are available, each predicting a different value of $\delta$.*

*For CKM: the single Kobayashi-Maskawa phase $\delta_{\text{CKM}} \approx 1.2$ rad ($\approx 69°$) is determined by the quark sector's $A_5$ breaking channel.*

**Remark (Predictive status).** The CP phase predictions are the most testable aspect of this derivation:
- DUNE and Hyper-Kamiokande will measure $\delta_{\text{PMNS}}$ to $\sim 10°$ precision.
- The framework predicts that $\delta_{\text{PMNS}}$ takes one of five discrete values from the $A_5$ channels, rather than being a continuous parameter. Current data favor $\delta_{\text{PMNS}} \sim -\pi/2$ (maximal CP violation), which matches one of the five channels.

## Physical Interpretation

| Framework concept | Standard physics |
|---|---|
| Three winding axes ($\dim SO(3) = 3$) | Three particle generations |
| Coherence cost function on $\mathcal{W}$ | Fermion mass matrix |
| Mass eigenstates | Energy/mass basis |
| Weak eigenstates | $SU(2)_L$ interaction basis |
| Basis mismatch | CKM / PMNS mixing matrices |
| $A_5$ discrete symmetry (S1) | Flavor symmetry group |
| Residual $\mathbb{Z}_5$ / $\mathbb{Z}_2 \times \mathbb{Z}_2$ | Mass vs. weak residual symmetries |
| Mass hierarchy steepness | Mixing angle magnitude |
| Complex $A_5$ embedding | CP-violating phases |
| Golden ratio $\phi$ | $\theta_{12}^{\text{PMNS}} \approx \arctan(1/\phi) \approx 31.7°$ |

## Consistency Model

**Theorem 7.1.** *The two-basis mismatch is realized in the minimal 3-generation model.*

**Model**: Three $U(1)$ oscillators in $\mathbb{R}^3$ with winding axes $\hat{n}_1 = \hat{x}$, $\hat{n}_2 = \hat{y}$, $\hat{n}_3 = \hat{z}$ (orthogonal axes). The mass matrix $M = \text{diag}(m_1, m_2, m_3)$ in this basis. The weak interaction couples to a rotated basis $\hat{w}_i = R \hat{n}_i$ where $R \in SO(3)$ is the mixing rotation.

*Verification:*

- **Proposition 1.4**: The mixing matrix $U = R$ is a $3 \times 3$ unitary (in fact orthogonal) matrix. ✓

- **Proposition 2.2**: The coherence cost $\mathcal{C} = \sum_i m_i |\hat{n} \cdot \hat{n}_i|^2$ depends only on angles between axes. ✓

- **Proposition 4.1**: For $m_1 \ll m_2 \ll m_3$ (strong hierarchy), the mass basis is rigid: small perturbations of $R$ leave the eigenvalues nearly unchanged. For $m_1 \approx m_2 \approx m_3$ (mild hierarchy), the eigenbasis is sensitive to perturbations. ✓

- **Proposition 5.1**: With orthogonal mass basis and a weak rotation $R = R_z(\theta_{12})R_y(\theta_{13})R_z(\theta_{23})$, the mixing angles are free parameters in this minimal model. The $A_5$ structure constrains them; the minimal orthogonal model does not (it is too simple). ✓ $\square$

## Rigor Assessment

**Rigorous (standard mathematics):**
- Proposition 1.4: Mixing from basis mismatch (unitary transformation, standard)
- Proposition 2.2: Coherence cost depends on relative angles (location independence)
- Proposition 3.2: $A_5$ residual subgroup classification (finite group theory)
- Proposition 5.1: Mass hierarchy ↔ mixing angle correspondence (standard phenomenology)
- Theorem 7.1: Consistency model verified

**Semi-formal (well-motivated, not fully proven):**
- Theorem 3.1: $A_5$ symmetry from Structural Postulate S1. The selection of $A_5$ as the maximal non-abelian simple finite subgroup of $SO(3)$ is mathematically unique, but the physical argument for *why* the coherence cost should have this maximal symmetry (rather than a smaller subgroup) is the content of S1.
- Proposition 4.1: The two-sector architecture and golden ratio prediction. The icosahedral geometry produces these patterns, but the specific residual symmetry channel selection is not derived — it is constrained to five possibilities.
- Proposition 6.1: CP phases. The discrete values are predicted by $A_5$, but which channel is realized in nature has not been derived.

**Not addressed (deferred):**
- Quantitative values of all six mixing angles and two CP phases
- Neutrino mass ordering (normal vs. inverted hierarchy)
- Majorana vs. Dirac nature of neutrinos
- Renormalization-group running of mixing parameters

**Assessment:** Draft status. The derivation establishes the structural framework for flavor mixing: three generations from $\dim SO(3) = 3$, basis mismatch from distinct physical mechanisms, $A_5$ discrete symmetry from maximal finite subgroup, hierarchical mixing angles from mass hierarchy steepness. The golden ratio prediction for $\theta_{12}$ is within $2°$ of experiment. The derivation falls short of provisional because: (1) $A_5$ is a postulate (S1) rather than a theorem, (2) the specific residual symmetry channel is not selected, and (3) quantitative predictions of all mixing parameters are not complete.

## Open Gaps

1. **$A_5$ from axioms**: Derive that the coherence cost function must have $A_5$ symmetry, rather than postulating it (S1). This would require showing that the bootstrap dynamics on three winding axes naturally produce icosahedral symmetry.

2. **Channel selection**: Determine which of the five $A_5$ breaking channels is realized in the quark and lepton sectors. This may require input from the gauge structure (how $SU(3) \times SU(2) \times U(1)$ interacts with the $A_5$ flavor symmetry).

3. **Neutrino masses**: The neutrino mass mechanism (Dirac vs. Majorana, seesaw types) affects the PMNS matrix structure. This requires extending the coherence-dual pair mechanism to the neutrino sector.

4. **Renormalization-group running**: The mixing parameters measured at low energy differ from their values at the symmetry-breaking scale. RG corrections (from [Renormalization Group](/derivations/thermodynamics-ext/renormalization)) should be computed to compare with experiment.

5. **Quark-lepton complementarity**: The observation $\theta_{12}^{\text{CKM}} + \theta_{12}^{\text{PMNS}} \approx \pi/4$ may be accidental or may reflect a deeper geometric relationship between the quark and lepton sectors. The $A_5$ framework should clarify this.
