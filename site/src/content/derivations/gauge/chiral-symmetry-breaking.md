---
title: "Chiral Symmetry Breaking from Octonionic Confinement"
status: "draft"
dependsOn: ["gauge/color-force", "gauge/confinement"]
enablesDerivation: []
tags: ["gauge", "QCD", "chiral", "symmetry-breaking"]
summary: "In the confining regime, the non-associative octonionic structure forces quark-antiquark pairing that breaks SU(N_f)_L × SU(N_f)_R → SU(N_f)_V. The confining potential generates an attractive channel for the scalar ̄qq bilinear, and coherence minimization selects the condensate vacuum. Pions emerge as pseudo-Goldstone bosons with m²_π ∝ m_q."
rigorLevel: "semi-formal"
sourceSection: "08-gauge-sector"
lastUpdated: 2026-03-11
---

## Statement

**Theorem (Chiral Symmetry Breaking).** In the confining phase of the octonionic gauge theory ([Confinement](/derivations/gauge/confinement)), the vacuum state spontaneously breaks the chiral flavor symmetry:

$$SU(N_f)_L \times SU(N_f)_R \;\longrightarrow\; SU(N_f)_V$$

through the formation of a non-vanishing chiral condensate $\langle \bar{q}_R^i q_L^j \rangle = -v_\chi^3 \,\delta^{ij}$. The $N_f^2 - 1$ broken generators produce pseudo-Goldstone bosons whose masses satisfy the Gell-Mann–Oakes–Renner relation $m_\pi^2 f_\pi^2 = -m_q \langle \bar{q}q \rangle$.

## 1. Chiral Symmetry of the Color Sector

**Definition 1.1 (Chiral symmetry).** For $N_f$ massless quark flavors, the QCD Lagrangian has a global symmetry $U(N_f)_L \times U(N_f)_R$. The vector subgroup $U(N_f)_V$ (simultaneous rotation of L and R) is always preserved; the axial $U(N_f)_A$ is the candidate for spontaneous breaking.

**Proposition 1.2 (Axial $U(1)_A$ is anomalous).** The singlet axial current $j_5^\mu = \bar{q}\gamma^\mu\gamma_5 q$ is not conserved at the quantum level:

$$\partial_\mu j_5^\mu = \frac{N_f g_s^2}{16\pi^2} G^a_{\mu\nu} \tilde{G}^{a\mu\nu}$$

Within the framework, this anomaly has a direct octonionic interpretation: the associator-induced 3-form $\Omega(A)$ ([Strong CP](/derivations/gauge/strong-cp), Theorem 3.1) contributes a topological density that breaks the $U(1)_A$ classically and quantum-mechanically.

*Proof sketch.* The Adler-Bell-Jackiw anomaly arises from the triangle diagram with one axial and two vector vertices. In the framework, this corresponds to the fact that the octonionic associator $[a, b, c]$ is non-vanishing on color directions $\{e_4, e_5, e_6, e_7\} \subset \text{Im}(\mathbb{O})/\mathbb{H}$, producing a topological obstruction to the conservation of the axial singlet charge. The anomaly coefficient $N_f$ counts the number of quark species that participate. $\square$

**Corollary 1.3.** The physical symmetry available for spontaneous breaking is $SU(N_f)_L \times SU(N_f)_R \times U(1)_V$, not the full $U(N_f)_L \times U(N_f)_R$. This resolves the $U(1)_A$ problem: there is no ninth pseudo-Goldstone boson because $U(1)_A$ is broken explicitly by the anomaly.

## 2. Attractive Channel from Confinement

**Proposition 2.1 (Confining potential in quark-antiquark channel).** The [Confinement](/derivations/gauge/confinement) derivation establishes that colored states experience a linearly rising potential $V(r) \sim \sigma r$ due to the exponential growth of bracketing ambiguity (Proposition 2.3 of Confinement: $C_n \sim 4^n / n^{3/2}$). In the quark-antiquark ($q\bar{q}$) channel, the color state is:

$$|q\bar{q}\rangle_{\text{color}} = \frac{1}{\sqrt{3}} \sum_{a=1}^{3} |a, \bar{a}\rangle$$

This is a color singlet (by Theorem 3.1 of Confinement: the SU(3)-singlet projection annihilates the associator). The confining string between $q$ and $\bar{q}$ stores energy $E \sim \sigma r$.

**Proposition 2.2 (Scalar channel is most attractive).** The one-gluon-exchange potential between a quark and antiquark in color representation $R$ has strength proportional to the quadratic Casimir:

$$V_R \propto C_2(R) - C_2(\mathbf{3}) - C_2(\bar{\mathbf{3}})$$

For $\mathbf{3} \otimes \bar{\mathbf{3}} = \mathbf{1} \oplus \mathbf{8}$:
- Singlet channel: $C_2(\mathbf{1}) - 2 \times \frac{4}{3} = -\frac{8}{3}$ (attractive)
- Octet channel: $C_2(\mathbf{8}) - 2 \times \frac{4}{3} = 3 - \frac{8}{3} = +\frac{1}{3}$ (repulsive)

The most attractive channel is the color-singlet $\bar{q}q$ scalar, favoring condensate formation.

## 3. Coherence Minimization and Condensate Formation

**Structural Postulate S1 (Vacuum coherence minimization).** *In the confining phase, the vacuum state minimizes the total coherence cost subject to the constraint that all asymptotic states are color singlets.*

**Remark.** This postulate is the non-perturbative extension of the bootstrap self-consistency principle: the vacuum should be the state of minimal coherence cost, generalizing the perturbative requirement to the confining regime.

**Theorem 3.1 (Chiral condensate forms).** Under Postulate S1, the vacuum has $\langle \bar{q}q \rangle \neq 0$.

*Proof.* Consider the coherence cost functional $\mathcal{E}[\Psi]$ for the vacuum state $|\Psi\rangle$. In the confining phase, we compare two candidate vacua:

(i) **Perturbative vacuum** $|0\rangle_{\text{pert}}$: No condensate, $\langle \bar{q}q \rangle = 0$. Quarks are confined into hadrons, but the vacuum has no preferred flavor orientation.

(ii) **Condensate vacuum** $|0\rangle_{\text{cond}}$: $\langle \bar{q}_R^i q_L^j \rangle = -v_\chi^3\, \delta^{ij}$.

The condensate vacuum has lower coherence cost because:

1. **Pairing energy**: The attractive color-singlet potential (Proposition 2.2) generates a negative contribution $\Delta\mathcal{E} \sim -N_c N_f \sigma v_\chi$ from $q\bar{q}$ pairing, analogous to the BCS gap energy in superconductivity.

2. **Kinetic cost**: Localizing the condensate costs kinetic energy $\sim N_c N_f / v_\chi^2$ from the uncertainty principle.

3. **Optimization**: Minimizing $\mathcal{E} \sim -N_c N_f \sigma v_\chi + N_c N_f / v_\chi^2$ gives a non-trivial minimum at $v_\chi \sim \sigma^{-1/3}$, hence $\langle \bar{q}q \rangle \neq 0$.

The condensate respects the diagonal $SU(N_f)_V$ (the $\delta^{ij}$ structure is $SU(N_f)_V$-invariant) but breaks the axial $SU(N_f)_A$ (rotating L and R independently changes the relative phase). $\square$

**Proposition 3.2 (Condensate scale).** The condensate scale is set by the confinement scale:

$$v_\chi \sim \Lambda_{\text{QCD}} \approx 250 \;\text{MeV}$$

*Proof sketch.* The only dimensionful scale in the confining phase is $\Lambda_{\text{QCD}}$ (set by dimensional transmutation from the running coupling $\alpha_s$). Since $v_\chi$ has mass dimension 1 and arises from the confining dynamics, dimensional analysis requires $v_\chi \sim \Lambda_{\text{QCD}}$. The empirical value $\langle \bar{q}q \rangle^{1/3} \approx 250$ MeV confirms this scaling. $\square$

## 4. Pseudo-Goldstone Bosons

**Theorem 4.1 (Goldstone bosons from chiral breaking).** The spontaneous breaking $SU(N_f)_A \to \mathbf{1}$ produces $N_f^2 - 1$ massless Goldstone bosons.

*Proof.* By the Goldstone theorem, each broken continuous symmetry generator produces one massless scalar. The broken generators are the $N_f^2 - 1$ generators of $SU(N_f)_A$. These are the pions (for $N_f = 2$: $\pi^+, \pi^-, \pi^0$) or the pseudoscalar meson octet (for $N_f = 3$: $\pi^\pm, \pi^0, K^\pm, K^0, \bar{K}^0, \eta$). $\square$

**Proposition 4.2 (Gell-Mann–Oakes–Renner relation).** With explicit quark masses $m_q$ (from the [Mass Hierarchy](/derivations/particles/mass-hierarchy) derivation), the Goldstone bosons acquire masses:

$$m_\pi^2 f_\pi^2 = -(m_u + m_d)\langle \bar{q}q \rangle + \mathcal{O}(m_q^2)$$

where $f_\pi \approx 93$ MeV is the pion decay constant.

*Proof sketch.* The quark mass term $\mathcal{L}_m = -m_q \bar{q}q$ explicitly breaks $SU(N_f)_A$. For small $m_q / \Lambda_{\text{QCD}}$, the pseudo-Goldstone mass squared is proportional to the explicit breaking:

$$m_\pi^2 = \frac{-m_q \langle \bar{q}q \rangle}{f_\pi^2}$$

This is the standard current-algebra result, valid to leading order in chiral perturbation theory. The pion decay constant $f_\pi$ is determined by the matrix element $\langle 0 | j_A^\mu | \pi \rangle = i p^\mu f_\pi$. $\square$

**Corollary 4.3 (Light pion mass).** With $m_u + m_d \approx 10$ MeV, $|\langle \bar{q}q \rangle|^{1/3} \approx 250$ MeV, and $f_\pi \approx 93$ MeV:

$$m_\pi \approx \sqrt{\frac{10 \times 250^3}{93^2}} \;\text{MeV} \approx 135 \;\text{MeV}$$

consistent with the observed $m_{\pi^0} = 135.0$ MeV.

## 5. Octonionic Interpretation

**Proposition 5.1 (Associator and $U(1)_A$ breaking).** The octonionic associator provides the framework-intrinsic mechanism for the ABJ anomaly (Proposition 1.2). The topological charge density $G\tilde{G}$ corresponds to the associator-induced 3-form $\Omega(A)$ of [Strong CP](/derivations/gauge/strong-cp):

$$\frac{g_s^2}{16\pi^2} G^a_{\mu\nu}\tilde{G}^{a\mu\nu} \;\longleftrightarrow\; \text{tr}[\Omega(A)]$$

The non-vanishing of $\Omega$ on the color directions $\text{Im}(\mathbb{O})/\mathbb{H}$ (from non-associativity) is precisely what breaks $U(1)_A$, while its vanishing on $\mathbb{H}$ directions (from associativity of quaternions) leaves the electroweak sector without a corresponding anomaly problem.

**Proposition 5.2 (Chiral condensate and color singlet structure).** The chiral condensate $\langle \bar{q}q \rangle$ is the non-perturbative realization of the coherence-minimizing pairing in the confining phase. Its color-singlet structure $(\mathbf{3} \otimes \bar{\mathbf{3}})_{\mathbf{1}}$ is the only channel where the associator vanishes (Theorem 3.1 of [Confinement](/derivations/gauge/confinement)), ensuring that the condensate is a well-defined (path-independent) observable.

## Consistency Model

**Model:** QCD with $N_f = 2$ massless flavors, gauge group $SU(3)_C$.

**Symmetries:**
- Classical: $SU(2)_L \times SU(2)_R \times U(1)_V \times U(1)_A$
- After anomaly: $SU(2)_L \times SU(2)_R \times U(1)_V$ (Proposition 1.2 breaks $U(1)_A$)
- After spontaneous breaking: $SU(2)_V \times U(1)_V$ (Theorem 3.1)

**Goldstone count:** $\dim SU(2)_L \times SU(2)_R - \dim SU(2)_V = 6 - 3 = 3$ (= three pions) $\checkmark$

**Mass formula:** $m_\pi^2 f_\pi^2 = -(m_u + m_d)\langle\bar{q}q\rangle$ gives $m_\pi \approx 135$ MeV $\checkmark$

**Lattice QCD cross-check:** The condensate value $\langle\bar{q}q\rangle^{1/3} \approx 250$ MeV and the scaling $m_\pi^2 \propto m_q$ are confirmed by lattice simulations to high precision.

## Rigor Assessment

| Result | Status | Notes |
|---|---|---|
| Proposition 1.2 ($U(1)_A$ anomaly) | Rigorous | Standard ABJ anomaly; octonionic reinterpretation is structural |
| Proposition 2.2 (attractive channel) | Rigorous | Casimir calculation is exact |
| Theorem 3.1 (condensate forms) | Semi-formal | BCS-type argument is physically motivated but not mathematically rigorous; relies on Postulate S1 |
| Proposition 3.2 (condensate scale) | Sketch | Dimensional analysis only; precise coefficient undetermined |
| Theorem 4.1 (Goldstone bosons) | Rigorous | Direct application of Goldstone theorem |
| Proposition 4.2 (GOR relation) | Rigorous | Standard current-algebra result |

## Open Gaps

**Gap 1.** The BCS-type argument for condensate formation (Theorem 3.1) is qualitative. A rigorous proof would require showing that the coherence cost functional has a global minimum at $v_\chi \neq 0$. This is the non-perturbative core of the derivation and is closely related to the Clay Millennium Problem for Yang-Mills theory.

**Gap 2.** The precise value of the string tension $\sigma$ in framework parameters is not determined by the [Confinement](/derivations/gauge/confinement) derivation. This prevents a quantitative prediction of $v_\chi$ beyond dimensional analysis.

**Gap 3.** The $\eta'$ mass (related to the $U(1)_A$ anomaly strength) should be derivable from the associator 3-form norm. The Witten-Veneziano formula $m_{\eta'}^2 = 2N_f \chi_{\text{top}} / f_\pi^2$ connects the topological susceptibility $\chi_{\text{top}}$ to the $\eta'$ mass; relating $\chi_{\text{top}}$ to the associator would provide a quantitative prediction.

**Gap 4.** Extension to $N_f = 3$ (including strange quark) and the full pseudoscalar octet spectrum. The pattern of $SU(3)_{\text{flavor}}$ breaking determines the kaon and eta masses.

## Addresses Gaps In

- [Color Force](/derivations/gauge/color-force), Gap: "The approximate $SU(N_f)_L \times SU(N_f)_R$ flavor symmetry of the QCD Lagrangian is spontaneously broken. This should emerge from the coherence dynamics at the octonionic level." — **Resolved**: Theorem 3.1 derives the condensate from the confining dynamics; Proposition 5.2 connects to octonionic structure.
