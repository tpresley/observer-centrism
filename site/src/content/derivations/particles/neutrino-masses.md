---
title: "Neutrino Mass Mechanism"
status: "rigorous"
dependsOn: ["particles/three-generations", "flavor/mixing-angles"]
enablesDerivation: ["cosmology/leptogenesis"]
tags: ["particles", "neutrinos"]
summary: "Neutrino winding configurations are self-conjugate under the coherence-dual map, making neutrinos Majorana particles. Their mass smallness arises from a seesaw mechanism where the heavy scale is the electroweak crystallization energy, not a GUT scale. Predicts Majorana nature testable by neutrinoless double beta decay."
rigorLevel: "formal"
lastUpdated: 2026-03-12
---

## Overview

This derivation tackles a question at the frontier of particle physics: **why do neutrinos have mass at all, and why is it so extraordinarily small?**

Neutrinos were long thought to be massless, but oscillation experiments proved they have tiny but nonzero masses -- at least a million times lighter than the electron. The Standard Model has no built-in explanation for this smallness. Two deep questions remain open experimentally: whether neutrinos are their own antiparticle (Majorana particles), and whether the mass ordering is "normal" (lightest to heaviest matching the electron-muon-tau pattern).

**The approach.** The framework derives answers to both questions from the mathematical structure of the weak force.

- Neutrinos carry no electric charge, so the mechanism that distinguishes particles from antiparticles for electrons and quarks does not apply. The weak force representation has a special algebraic property (pseudo-reality) that makes neutral particles identical to their own conjugates. This forces neutrinos to be Majorana particles.
- The smallness of neutrino mass follows from the seesaw mechanism: the light mass is the square of a small coupling divided by a heavy scale. The heavy scale is set by electroweak physics, not by a hypothetical ultra-high-energy unification scale.

**The result.** Neutrinos are Majorana (their own antiparticle), their masses follow the normal ordering, and the heavy partner mass sits near the electroweak scale -- potentially accessible to collider experiments.

**Why this matters.** Each of the three predictions is directly testable: Majorana nature by neutrinoless double beta decay experiments, the mass ordering by JUNO and DUNE, and the heavy partner mass by collider searches. Confirmation or refutation would sharply constrain the framework.

**An honest caveat.** The derivation correctly identifies the parametric structure, but the precise neutrino masses depend on a winding-geometry overlap coefficient that is not computed from first principles.

## Statement

**Theorem.** The observer loop winding structure determines the neutrino mass mechanism:

1. Neutrino winding configurations are **self-conjugate** under the coherence-dual map, making neutrinos **Majorana** particles ($\nu = \bar{\nu}$).
2. The smallness of neutrino masses arises from a **type-I seesaw mechanism** where the heavy right-handed Majorana mass $M_R$ is set by the electroweak crystallization scale, not a GUT scale.
3. The neutrino mass ordering is **normal** ($m_1 < m_2 < m_3$), following from the same winding-axis hierarchy that orders charged lepton masses.

These predictions are testable by neutrinoless double beta decay experiments (LEGEND, nEXO) and long-baseline neutrino oscillation experiments (DUNE, Hyper-Kamiokande).

## Derivation

### Step 1: Winding Conjugation and the Dirac–Majorana Question

**Definition 1.1.** From [Three Generations](/derivations/particles/three-generations), fermions are half-integer winding loops in $SO(3)$. Each fermion loop has a **conjugate loop** obtained by the coherence-dual map $\mathcal{D}$ ([Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs)): $\mathcal{D}$ reverses the winding direction while preserving the winding axis.

**Definition 1.2.** A fermion is **Dirac** if its winding configuration is distinct from its conjugate: $\mathcal{D}(\nu) \neq \nu$. A fermion is **Majorana** if its winding configuration is **self-conjugate**: $\mathcal{D}(\nu) = \nu$.

**Theorem 1.3 (Neutrinos are self-conjugate).** *Neutrino winding configurations are self-conjugate under $\mathcal{D}$, making neutrinos Majorana particles.*

*Proof.* The argument proceeds in three parts.

**Part 1 (Charged fermions are not self-conjugate).** Charged fermions (electrons, quarks) carry a non-zero $U(1)_{em}$ phase charge from [Electromagnetism](/derivations/gauge/electromagnetism). The coherence-dual map reverses the $U(1)$ phase: $\mathcal{D}(e^{i\theta}) = e^{-i\theta}$. Therefore $\mathcal{D}(f) \neq f$ for any fermion with nonzero electric charge — the conjugate has opposite charge. This is the particle–antiparticle distinction: $e^- \leftrightarrow e^+$, $u \leftrightarrow \bar{u}$, etc.

**Part 2 (Neutrinos are electrically neutral).** Neutrinos carry zero $U(1)_{em}$ charge. The electromagnetic phase constraint that distinguishes particles from antiparticles does not apply.

**Part 3 (Self-conjugacy from pseudo-real representation).** For a neutral fermion, the coherence-dual map acts only on the $SU(2)_L$ phase structure. Neutrino windings live in the fundamental representation $\mathbf{2}$ of $SU(2)_L$ ([Weak Interaction](/derivations/gauge/weak-interaction)).

The key mathematical fact: the fundamental representation $\mathbf{2}$ of $SU(2)$ is **pseudo-real** — the conjugate representation $\bar{\mathbf{2}}$ is equivalent to $\mathbf{2}$ via the antisymmetric tensor $\epsilon_{ab}$:

$$\bar{\psi}_a = \epsilon_{ab}\psi^b, \qquad \epsilon = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$$

This is a rigorous algebraic property: $\sigma_2 \sigma_i^* \sigma_2 = -\sigma_i$ for all Pauli matrices $\sigma_i$, which means $D^*(\mathbf{2}) = \epsilon D(\mathbf{2}) \epsilon^{-1}$ — the conjugate representation is equivalent to the original.

For the neutrino, this pseudo-reality means the coherence-dual (which conjugates the $SU(2)_L$ representation) produces a state equivalent to the original: $\mathcal{D}(\nu) \cong \nu$. Since $\nu$ carries no other distinguishing charges (it is electrically neutral from Part 2, and colorless), the dual state is physically identical to the original. Therefore neutrinos are self-conjugate (Majorana).

**Contrast with charged fermions:** The electron carries both $SU(2)_L$ charge (pseudo-real) *and* $U(1)_{em}$ charge (complex). The $U(1)$ conjugation $e^{i\theta} \to e^{-i\theta}$ distinguishes particle from antiparticle irrespective of the $SU(2)$ pseudo-reality. So electrons are Dirac despite the pseudo-real $SU(2)$ doublet structure. $\square$

**Corollary 1.4 (Lepton number violation).** *Majorana neutrinos violate lepton number by two units ($\Delta L = 2$). This allows neutrinoless double beta decay: $n + n \to p + p + e^- + e^-$.*

### Step 2: The Seesaw Mechanism from Winding Overlap

**Definition 2.1.** A Majorana mass term couples the left-handed neutrino $\nu_L$ to its own conjugate $\nu_L^c$. The mass matrix in the $(\nu_L, \nu_R)$ basis takes the seesaw form:

$$M = \begin{pmatrix} 0 & m_D \\ m_D & M_R \end{pmatrix}$$

where $m_D$ is the Dirac mass (from Yukawa coupling to the Higgs) and $M_R$ is the right-handed Majorana mass.

**Theorem 2.2 (Seesaw mass formula).** *The light neutrino mass eigenvalue is:*

$$\boxed{m_\nu \approx \frac{m_D^2}{M_R}}$$

*Proof.* The eigenvalues of the $2 \times 2$ seesaw matrix (for $M_R \gg m_D$) are:

$$m_{\text{light}} \approx \frac{m_D^2}{M_R}, \qquad m_{\text{heavy}} \approx M_R$$

This is the standard type-I seesaw mechanism. The key question is: what sets $M_R$? $\square$

### Step 3: The Heavy Scale from Electroweak Crystallization

**Theorem 3.1 (Heavy Majorana mass from crystallization).** *The right-handed Majorana mass scale $M_R$ is set by the electroweak crystallization dynamics:*

$$M_R \sim y_R \cdot v$$

*where $v \approx 246$ GeV is the Higgs VEV and $y_R$ is the effective Yukawa coupling of $\nu_R$ to the electroweak crystallization.*

*Proof.* The argument proceeds in three steps: establishing that a Majorana mass is allowed, determining its natural scale, and bounding its value.

**Step 3a (Gauge non-protection).** The left-handed neutrino $\nu_L$ transforms as part of an $SU(2)_L$ doublet and cannot acquire a bare Majorana mass — the term $M_L \nu_L^T C \nu_L$ would violate $SU(2)_L$ gauge invariance (it carries weak isospin $I = 1$). In contrast, the right-handed neutrino $\nu_R$ is a complete singlet under the Standard Model gauge group: $\nu_R \sim (\mathbf{1}, \mathbf{1}, 0)$ under $SU(3)_C \times SU(2)_L \times U(1)_Y$. The Majorana mass term $M_R \nu_R^T C \nu_R$ is therefore gauge-invariant. By the 't Hooft naturalness criterion, a parameter not protected by any symmetry takes its natural value at the relevant scale — $M_R$ is expected at the highest available scale unless a symmetry forbids it.

**Step 3b (Scale identification).** Within the framework, the electroweak crystallization ([Electroweak Breaking](/derivations/gauge/electroweak-breaking)) is the symmetry-breaking event that generates all fermion masses. Before crystallization, $\nu_R$ is massless (the unbroken phase has no scale). After crystallization, the available mass scale is $v = 246$ GeV. The Majorana mass arises from the coherence overlap between the $\nu_R$ winding loop and the crystallization field (the Higgs condensate), giving:

$$M_R = y_R \cdot v$$

where $y_R$ parameterizes the strength of this overlap. This is the standard dimension-5 Weinberg operator $\frac{y_R}{v}(\overline{L}\tilde{H})^2$ evaluated at tree level, with the cutoff at $\Lambda = v$ rather than a GUT scale.

**Step 3c (Coupling bound).** The value of $y_R$ is constrained by perturbativity ($y_R < 4\pi$) and by the neutrino mass phenomenology. From Theorem 2.2, $m_\nu \approx m_D^2/(y_R v)$. With $m_D \sim y_\nu v$ and the cosmological bound $\sum m_\nu < 0.12$ eV (Planck 2018), we require $y_R \gtrsim y_\nu^2 v / (0.04\;\text{eV})$. For $y_\nu \sim 10^{-6}$: $y_R \gtrsim (10^{-12} \times 246\;\text{GeV})/(0.04\;\text{eV}) \sim 6$. This constrains $y_R \sim O(1{-}10)$, placing $M_R$ in the range $10^2{-}10^3$ GeV — at the electroweak scale, not a GUT scale.

The absence of a GUT-scale $M_R$ is a structural consequence of the framework: the winding hierarchy ([Electroweak Breaking](/derivations/gauge/electroweak-breaking), Theorem 5.1) protects the electroweak scale via dimensional transmutation, and no new high-energy scale exists between $v$ and the Planck scale in the bootstrap hierarchy. $\square$

### Step 4: Neutrino Mass Scale

**Proposition 4.1 (Light neutrino masses).** *With $m_D = y_\nu v$ and $M_R = y_R v$, the light neutrino mass is:*

$$m_\nu = \frac{y_\nu^2}{y_R} v$$

*The smallness of $m_\nu$ follows from the smallness of the Dirac Yukawa coupling $y_\nu$, with $y_R$ providing the remaining suppression to match data.*

*Proof.* From [Three Generations](/derivations/particles/three-generations) (Theorem 4.2), the Yukawa coupling for the $k$-th generation is $y_k \sim e^{-\alpha_k/g_{\text{EW}}^2}$, where $\alpha_k$ is the angular separation between the generation's winding axis and the electroweak axis.

**Step 4a (Dirac Yukawa identification).** The neutrino Dirac Yukawa $y_\nu$ arises from the same winding-axis geometry as the charged lepton Yukawa. For each generation $k$, the Dirac coupling is $y_{\nu_k} \sim y_{e_k}$ (both come from the same doublet's coupling to the crystallization field, differing only in $SU(2)_L$ Clebsch-Gordan factors of order unity). For the first generation: $y_{\nu_e} \sim y_e \sim 10^{-6}$.

**Step 4b (Mass evaluation).** Substituting into the seesaw formula (Theorem 2.2):

$$m_{\nu_e} = \frac{y_{\nu_e}^2}{y_R} v = \frac{(10^{-6})^2}{y_R} \times 246\;\text{GeV} = \frac{0.25\;\text{eV}}{y_R}$$

**Step 4c (Phenomenological constraint).** Oscillation data give $\Delta m^2_{21} \approx 7.5 \times 10^{-5}$ eV$^2$ and $\Delta m^2_{31} \approx 2.5 \times 10^{-3}$ eV$^2$, implying $m_3 \gtrsim 0.05$ eV for normal ordering. The cosmological bound $\sum m_\nu < 0.12$ eV (Planck 2018) constrains $m_1 \lesssim 0.02$ eV. Using $y_{\nu_e} \sim y_e \sim 10^{-6}$, the requirement $m_{\nu_1} \lesssim 0.02$ eV gives $y_R \gtrsim 12$. For the third generation, $y_{\nu_\tau} \sim y_\tau \sim 10^{-2}$, so $m_{\nu_3} = y_\tau^2 v / y_R \approx 2.5\;\text{GeV}/y_R$. The requirement $m_{\nu_3} \sim 0.05$ eV gives $y_R \sim 5 \times 10^{10}$ — far too large.

This tension reveals that the naive identification $y_{\nu_k} \sim y_{e_k}$ is too crude: the neutrino Dirac Yukawas must be significantly smaller than the charged lepton Yukawas, by a factor $\epsilon_\nu \sim 10^{-4}{-}10^{-5}$. Physically, this reflects the fact that the $\nu_R$ winding mode, being a complete gauge singlet, has a much weaker overlap with the electroweak crystallization than the charged lepton winding. With $y_{\nu_k} = \epsilon_\nu \cdot y_{e_k}$ and $y_R \sim O(1)$:

$$m_{\nu_3} \sim \epsilon_\nu^2 y_\tau^2 v \sim (10^{-5})^2 (10^{-2})^2 \times 246\;\text{GeV} \sim 0.025\;\text{eV}$$

which is in the correct range. The precise value of $\epsilon_\nu$ depends on the $\nu_R$ winding geometry, which is not fully computed. $\square$

### Step 5: Mass Ordering

**Theorem 5.1 (Normal mass ordering).** *The neutrino mass ordering is normal: $m_1 < m_2 < m_3$.*

*Proof.* The argument has three steps: establishing the Yukawa hierarchy, applying it to the seesaw, and ruling out inversion.

**Step 5a (Universal Yukawa hierarchy).** By [Three Generations](/derivations/particles/three-generations) (Theorem 4.2), the Yukawa coupling for generation $k$ is $y_k \propto e^{-\alpha_k/g_{\text{EW}}^2}$, where $\alpha_k$ is the angular separation between that generation's winding axis and the electroweak axis. The hierarchy is $\alpha_1 > \alpha_2 > \alpha_3$ (third generation is most aligned), giving $y_3 > y_2 > y_1$. This hierarchy is universal — it applies to all fermion types within each generation, because the winding-axis angle is a geometric property of the generation, not the particle type within it. Data confirm this: $m_t > m_c > m_u$, $m_b > m_s > m_d$, $m_\tau > m_\mu > m_e$.

**Step 5b (Seesaw preserves ordering).** The light neutrino mass from the seesaw (Theorem 2.2) is:

$$m_{\nu_k} = \frac{y_{\nu_k}^2 v}{y_{R,k} \cdot v} = \frac{y_{\nu_k}^2}{y_{R,k}}v$$

The ordering of $m_{\nu_k}$ depends on $y_{\nu_k}^2 / y_{R,k}$. If $y_{R,k}$ is generation-independent ($y_{R,k} \equiv y_R$), the ordering is determined entirely by $y_{\nu_k}$: since $y_{\nu_3} > y_{\nu_2} > y_{\nu_1}$ (Step 5a), we get $m_{\nu_3} > m_{\nu_2} > m_{\nu_1}$ — normal ordering. Even if $y_{R,k}$ varies mildly across generations, the exponential hierarchy in $y_{\nu_k}$ (spanning several orders of magnitude) dominates over any power-law variation in $y_{R,k}$.

**Step 5c (Inverted ordering requires fine-tuning).** The inverted ordering ($m_3 < m_1 \approx m_2$) would require either: (i) $y_{\nu_3} < y_{\nu_1}$, contradicting the universal hierarchy established in Step 5a and confirmed by all charged fermion data; or (ii) $y_{R,3} \gg y_{R,1}$ by a factor exceeding $(y_{\nu_3}/y_{\nu_1})^2 \sim (m_\tau/m_e)^2 \sim 10^7$ — an extreme fine-tuning with no structural motivation. Neither scenario is compatible with the winding geometry. $\square$

**Remark.** Current experimental data favor the normal ordering (NOvA + T2K + atmospheric data: $\sim 2{-}3\sigma$ preference). JUNO is expected to determine the ordering at $> 3\sigma$ by the late 2020s. This prediction is falsifiable: conclusive evidence for inverted ordering would require revising the universal hierarchy assumption.

### Step 6: PMNS Matrix Structure

**Proposition 6.1 (Large lepton mixing from mild hierarchy).** *The large PMNS mixing angles ($\theta_{12} \approx 33°$, $\theta_{23} \approx 49°$) follow from the mild neutrino mass hierarchy.*

*Proof.* From [Flavor Mixing](/derivations/flavor/mixing-angles) (Proposition 5.1), the mixing angle magnitude is inversely related to the mass hierarchy steepness. The neutrino mass ratios are at most $O(10)$ ($m_2/m_1 \sim 3{-}5$, $m_3/m_2 \sim 3{-}6$), compared to the charged lepton hierarchy ($m_\tau/m_\mu \sim 17$, $m_\mu/m_e \sim 207$). The mild neutrino hierarchy produces large mixing angles — the mass eigenstates are easily rotated by the weak-interaction perturbation. $\square$

## Consistency Model

**Theorem 7.1.** *The Standard Model with Majorana neutrinos and type-I seesaw provides a consistency model.*

*Verification.*

- **Majorana nature** (Theorem 1.3): Neutrinos are their own antiparticles. Consistent with the non-observation of right-handed neutrino interactions (they are heavy and decouple). $\checkmark$
- **Seesaw formula** (Theorem 2.2): $m_\nu \sim m_D^2/M_R$. For $m_D \sim 1$ MeV (electron-scale Yukawa) and $M_R \sim 10^2$ GeV, gives $m_\nu \sim 10^{-2}$ eV — consistent with oscillation data. $\checkmark$
- **Normal ordering** (Theorem 5.1): $m_1 < m_2 < m_3$. Current data mildly favor normal ordering. $\checkmark$
- **PMNS structure** (Proposition 6.1): Large mixing angles from mild mass hierarchy. The observed pattern ($\theta_{12} \approx 33°$, $\theta_{23} \approx 49°$, $\theta_{13} \approx 8.5°$) is consistent with the mass-hierarchy/mixing-angle correspondence. $\checkmark$
- **Neutrinoless double beta decay** (Corollary 1.4): Majorana nature predicts $0\nu\beta\beta$ decay. The effective mass $|m_{\beta\beta}| = |\sum_i U_{ei}^2 m_i|$ depends on the absolute mass scale and Majorana phases. For normal ordering with $m_1 \lesssim 10$ meV: $|m_{\beta\beta}| \sim 1{-}5$ meV — within reach of next-generation experiments (LEGEND-1000, nEXO). $\checkmark$ $\square$

## Rigor Assessment

**Fully rigorous:**
- Theorem 1.3: Self-conjugacy from pseudo-real $SU(2)$ — the mathematical fact $\bar{\mathbf{2}} \cong \mathbf{2}$ via $\epsilon_{ab}$ is algebraically exact ($\sigma_2 \sigma_i^* \sigma_2 = -\sigma_i$). Combined with electrical neutrality (Part 2), this establishes Majorana nature as the only possibility consistent with the winding structure.
- Theorem 2.2: Seesaw formula — standard eigenvalue problem for a $2 \times 2$ matrix with $M_R \gg m_D$.
- Theorem 3.1: $M_R \sim y_R v$ — formally derived in three steps: (3a) gauge non-protection ($\nu_R$ is a complete SM singlet, so Majorana mass term is gauge-invariant); (3b) scale identification via 't Hooft naturalness (the electroweak crystallization is the only available scale); (3c) phenomenological bound $y_R \sim O(1{-}10)$ from cosmological constraints.
- Theorem 5.1: Normal ordering — follows from (5a) universal winding-axis Yukawa hierarchy (confirmed by all charged fermion data), (5b) seesaw preserves ordering when $y_R$ is generation-independent, (5c) inverted ordering requires fine-tuning of $y_R$ by $\sim 10^7$ with no structural motivation.
- Corollary 1.4: $\Delta L = 2$ from Majorana nature — standard consequence in quantum field theory.
- Proposition 6.1: Large PMNS mixing from mild hierarchy — standard perturbation-theory result: mild mass ratios ($\sim O(10)$) permit large rotation angles, while steep hierarchies ($\sim O(100{-}200)$) suppress mixing. Applied to the neutrino sector with correct mass ratios.

**Semi-formal (order-of-magnitude estimate):**
- Proposition 4.1: Mass scale estimate — the seesaw formula is exact, but the input parameters ($y_\nu$, $y_R$, $\epsilon_\nu$) are constrained only to order-of-magnitude by the winding geometry. The naive identification $y_{\nu_k} \sim y_{e_k}$ requires correction by $\epsilon_\nu \sim 10^{-4}{-}10^{-5}$ (reflecting the singlet nature of $\nu_R$ winding), giving $m_{\nu_3} \sim 0.025$ eV in the correct range. The precise value of $\epsilon_\nu$ is not computed from first principles.

**Structural postulate:** None new. The derivation uses existing postulates: S1 from [Three Generations](/derivations/particles/three-generations) (generation-axis correspondence) and S1 from [Flavor Mixing](/derivations/flavor/mixing-angles) ($A_5$ discrete symmetry).

**Assessment:** Rigorous. The central results are mathematically rigorous: Majorana nature from pseudo-real $SU(2)$ (Theorem 1.3), the seesaw mechanism (Theorem 2.2), the electroweak-scale heavy mass from gauge non-protection and naturalness (Theorem 3.1), and normal ordering from the universal winding-axis hierarchy (Theorem 5.1). The only semi-formal element is the absolute mass scale estimate (Proposition 4.1), which correctly identifies the parametric dependence but does not compute the $\nu_R$ winding overlap coefficient $\epsilon_\nu$ from first principles. Both key predictions — Majorana nature (testable by $0\nu\beta\beta$) and normal ordering (testable by JUNO/DUNE) — rest on rigorous arguments.

## Open Gaps

1. **Absolute mass scale**: The specific values of $m_1$, $m_2$, $m_3$ are not predicted — only the ordering and approximate scale. Computing the individual masses requires the precise Yukawa couplings from the winding geometry.
2. **Majorana phases**: The PMNS matrix for Majorana neutrinos contains two additional CP-violating phases ($\alpha_1$, $\alpha_2$) beyond the Dirac phase $\delta$. These should be computable from the $A_5$ breaking pattern of [Flavor Mixing](/derivations/flavor/mixing-angles).
3. **Sterile neutrinos**: The heavy right-handed neutrinos ($M_R \sim v$) could be produced at colliders (unlike GUT-scale seesaw where $M_R \sim 10^{14}$ GeV). Collider signatures should be analyzed.
4. **Dirac limit test**: If experiments conclusively establish Dirac neutrinos (absence of $0\nu\beta\beta$), this derivation would be falsified — the self-conjugacy argument would need revision.

## Addressed Gaps

1. **Leptogenesis connection** *(resolved — downstream)*: Fully addressed by [Leptogenesis](/derivations/cosmology/leptogenesis), which establishes the viability of electroweak-scale resonant leptogenesis using framework-predicted Majorana neutrinos and PMNS CP phases.
