---
title: "Anomaly Cancellation from Coherence Conservation"
status: "provisional"
dependsOn: ["gauge/chirality-selection", "gauge/standard-model-group", "axioms/coherence-conservation"]
enablesDerivation: []
tags: ["gauge", "anomaly", "fermion-content"]
summary: "Coherence conservation requires the quantum partition function to be gauge-invariant under all large gauge transformations, which is precisely the anomaly-freedom condition. The chirality-selected fermion representations from the division-algebra decomposition C⊗O ≅ Cℓ(6) automatically satisfy all four independent anomaly cancellation conditions, generation by generation."
rigorLevel: "semi-formal"
sourceSection: "08-gauge-sector"
lastUpdated: 2026-03-11
---

## Statement

**Theorem (Anomaly Cancellation).** The chiral fermion content selected by the boundary operator $\mathcal{B}$ (Derivation: [Chirality Selection](/derivations/gauge/chirality-selection)) within the gauge group $SU(3)_C \times SU(2)_L \times U(1)_Y$ (Derivation: [SM Gauge Group](/derivations/gauge/standard-model-group)) satisfies all independent anomaly cancellation conditions. This is not a numerical coincidence but a structural consequence of coherence conservation (Axiom 1) applied to the division-algebra framework.

## 1. Coherence Conservation Implies Anomaly Freedom

**Definition 1.1 (Gauge anomaly).** A gauge anomaly is a violation of gauge invariance at the quantum level: the partition function $\mathcal{Z}[A]$ transforms non-trivially under a gauge transformation $A \to A^g$,

$$\mathcal{Z}[A^g] = \mathcal{Z}[A] \cdot e^{i\,\Gamma[g, A]}$$

where $\Gamma[g, A]$ is the anomalous phase functional.

**Theorem 1.2 (Coherence conservation requires anomaly freedom).** Let $(\mathcal{H}, \mathcal{A}, \mathcal{C})$ be a coherence space satisfying Axiom 1 (coherence conservation). If the coherence measure $\mathcal{C}$ is quantized via a path integral with gauge field $A$, then $\Gamma[g, A] = 0$ for all gauge transformations $g$.

*Proof.* The argument proceeds in three steps.

**Step 1 (Gauge invariance of coherence).** Coherence conservation (Axiom 1) states that the coherence measure $\mathcal{C}$ is a gauge-invariant functional: $\mathcal{C}[\Phi^g] = \mathcal{C}[\Phi]$ for any gauge transformation $g$, because gauge transformations relabel internal degrees of freedom without altering the relational invariant content (they preserve the DAG structure and all Noether invariants $I_\alpha$).

**Step 2 (Partition function as coherence generator).** The coherence measure on a field configuration is computed from the path integral partition function via $\mathcal{C}[\Phi] = -\partial_\beta \ln \mathcal{Z}[\beta, \Phi]\big|_{\beta=1}$, where $\beta$ is the coherence inverse temperature ([Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric)). If $\mathcal{Z}[A^g] = \mathcal{Z}[A] \cdot e^{i\Gamma[g,A]}$ with $\Gamma \neq 0$, then $\ln \mathcal{Z}$ acquires a gauge-dependent imaginary part, and the derived coherence measure becomes gauge-dependent: $\mathcal{C}[A^g] \neq \mathcal{C}[A]$.

**Step 3 (Contradiction).** Gauge-dependent coherence contradicts Step 1. Therefore $\Gamma[g, A] = 0$ for all $g$, and the theory is anomaly-free. $\square$

**Remark.** This is the framework-intrinsic version of the standard argument that anomalous gauge theories are inconsistent. The difference is that the consistency requirement here follows from Axiom 1 (coherence conservation as an exact conservation law on Cauchy slices of the DAG) rather than from an external demand for unitarity or renormalizability. The three-step structure makes explicit that the anomaly-freedom condition is not merely analogous to coherence conservation but is a direct consequence of it, mediated by the path-integral formulation of the coherence measure.

## 2. Fermion Content from Division-Algebra Decomposition

The [SM Gauge Group](/derivations/gauge/standard-model-group) derivation (Proposition 4.1) establishes that the minimal left ideal of $\mathbb{C} \otimes \mathbb{O} \cong \mathbb{C}\ell(6)$ decomposes under $U(1)_Y \times SU(3)_C$ as:

$$\mathbf{8} = (\mathbf{1})_0 \oplus (\bar{\mathbf{3}})_{1/3} \oplus (\mathbf{3})_{-2/3} \oplus (\mathbf{1})_1$$

**Definition 2.1 (One-generation fermion content).** Combining with the [Chirality Selection](/derivations/gauge/chirality-selection) result (Theorem 3.1 and Corollary 4.2) that $SU(2)_L$ couples exclusively to left-handed fermions, one generation of fermions carries the quantum numbers:

| Field | $SU(3)_C$ | $SU(2)_L$ | $Y$ | Chirality |
|---|---|---|---|---|
| $Q_L = (u_L, d_L)$ | $\mathbf{3}$ | $\mathbf{2}$ | $+1/6$ | L |
| $u_R$ | $\mathbf{3}$ | $\mathbf{1}$ | $+2/3$ | R |
| $d_R$ | $\mathbf{3}$ | $\mathbf{1}$ | $-1/3$ | R |
| $L_L = (\nu_L, e_L)$ | $\mathbf{1}$ | $\mathbf{2}$ | $-1/2$ | L |
| $e_R$ | $\mathbf{1}$ | $\mathbf{1}$ | $-1$ | R |

**Proposition 2.2 (Hypercharge quantization).** The hypercharge assignments follow from the $\mathbb{C}\ell(6)$ decomposition via $Y = \frac{1}{6}(B - L) + \frac{1}{2}T_{3R}$, where $B - L$ is the number operator on the $\mathbb{C}\ell(6)$ vacuum. This produces the quantized values $Y \in \{-1, -1/2, -1/3, 1/6, 2/3, 1\}$ without any free parameters.

*Proof.* The $\mathbb{C}\ell(6)$ algebra has a natural $U(1)$ charge operator $Q_{B-L}$ counting the creation/annihilation operator content of each state. The left-handed doublet structure from chirality selection combines states into $SU(2)_L$ multiplets, and the Gell-Mann–Nishijima relation $Q = T_3 + Y$ determines $Y$ uniquely from the $\mathbb{C}\ell(6)$ quantum numbers and the $SU(2)_L$ representation. $\square$

## 3. Anomaly Polynomial Computation

There are four independent anomaly cancellation conditions for $SU(3)_C \times SU(2)_L \times U(1)_Y$ with chiral fermions.

**Theorem 3.1 (All anomalies cancel, per generation).** For the fermion content of Definition 2.1, all four anomaly traces vanish:

**(a) $SU(3)^2 \times U(1)_Y$:** The condition is $\sum_{\text{colored}} Y_L - \sum_{\text{colored}} Y_R = 0$.

$$\text{L-handed colored:} \quad 2 \times \frac{1}{6} = \frac{1}{3} \qquad \text{(doublet } Q_L \text{, 2 members)}$$

$$\text{R-handed colored:} \quad \frac{2}{3} + \left(-\frac{1}{3}\right) = \frac{1}{3}$$

$$\sum_L Y - \sum_R Y = \frac{1}{3} - \frac{1}{3} = 0 \quad \checkmark$$

**(b) $SU(2)^2 \times U(1)_Y$:** The condition is $\sum_{\text{doublets}} Y = 0$.

$$3 \times \frac{1}{6} + \left(-\frac{1}{2}\right) = \frac{1}{2} - \frac{1}{2} = 0 \quad \checkmark$$

where the factor of 3 counts colors for the quark doublet.

**(c) $U(1)_Y^3$ (cubic anomaly):** The condition is $\sum_L Y^3 - \sum_R Y^3 = 0$.

Left-handed:

$$6 \times \left(\frac{1}{6}\right)^3 + 2 \times \left(-\frac{1}{2}\right)^3 = \frac{6}{216} - \frac{2}{8} = \frac{1}{36} - \frac{1}{4} = -\frac{2}{9}$$

Right-handed:

$$3 \times \left(\frac{2}{3}\right)^3 + 3 \times \left(-\frac{1}{3}\right)^3 + 1 \times (-1)^3 = \frac{8}{9} - \frac{1}{9} - 1 = -\frac{2}{9}$$

$$\sum_L Y^3 - \sum_R Y^3 = -\frac{2}{9} - \left(-\frac{2}{9}\right) = 0 \quad \checkmark$$

**(d) Gravitational $[\text{grav}]^2 \times U(1)_Y$:** The condition is $\sum_L Y - \sum_R Y = 0$.

$$\text{L:} \quad 6 \times \frac{1}{6} + 2 \times \left(-\frac{1}{2}\right) = 1 - 1 = 0$$

$$\text{R:} \quad 3 \times \frac{2}{3} + 3 \times \left(-\frac{1}{3}\right) + 1 \times (-1) = 2 - 1 - 1 = 0$$

$$\sum_L Y - \sum_R Y = 0 - 0 = 0 \quad \checkmark$$

*Proof.* Each computation is a direct evaluation of the trace over the fermion representations specified in Definition 2.1. The multiplicity factors account for $SU(3)_C$ and $SU(2)_L$ dimensions. $\square$

**Remark.** The $SU(2)^2$ (Witten) and $SU(3)^3$ anomalies vanish automatically for any fermion content because $\text{Tr}[T_a \{T_b, T_c\}] = 0$ for $SU(2)$ (all representations are pseudo-real) and the quarks are vector-like under $SU(3)$ (equal left and right color content). The four conditions above are the only non-trivial ones.

## 4. Generation Independence

**Proposition 4.1 (Generation-by-generation cancellation).** Each of the three generations ([Three Generations](/derivations/particles/three-generations)) independently satisfies all anomaly conditions. Therefore the full three-generation Standard Model is anomaly-free.

*Proof.* The [Three Generations](/derivations/particles/three-generations) derivation establishes that the three generations arise from three independent winding-axis configurations in $SO(3)$. Each generation carries identical gauge quantum numbers — the generation index is a flavor label that does not affect gauge representations. Since each generation is an identical copy of the fermion content in Definition 2.1, and that content satisfies all anomaly conditions (Theorem 3.1), the full content with $N_g$ generations also satisfies them (anomaly traces are linear in the number of generations with identical representations). $\square$

## 5. Structural Necessity: Why This Content Is Unique

**Theorem 5.1 (Anomaly freedom is automatic, not tuned).** The vanishing of all anomaly traces is a consequence of the $\mathbb{C}\ell(6)$ algebraic structure and chirality selection — it cannot be deformed.

*Proof.* The fermion representations are fixed by two rigid algebraic inputs with no continuous deformation parameters:

**Input 1: $\mathbb{C} \otimes \mathbb{O} \cong \mathbb{C}\ell(6)$ determines color and hypercharge.** The minimal left ideal of $\mathbb{C}\ell(6)$ is an 8-dimensional complex vector space. Its decomposition under the $SU(3)$ automorphism subgroup of $G_2 = \text{Aut}(\mathbb{O})$ is uniquely:

$$\mathbf{8}_\mathbb{C} = (\mathbf{1})_0 \oplus (\bar{\mathbf{3}})_{1/3} \oplus (\mathbf{3})_{-2/3} \oplus (\mathbf{1})_1$$

The subscripts (hypercharges) are eigenvalues of the $U(1)$ generator $Q_{B-L} = \frac{1}{3}\sum_{k=1}^3 a_k^\dagger a_k$ acting on the Fock space of three creation operators $a_k^\dagger$ corresponding to the three complex directions in $\mathbb{C} \otimes \text{Im}(\mathbb{O})/\mathbb{H}$. These eigenvalues are $\{0, 1/3, -2/3, 1\}$ — determined by the integer eigenvalues of the number operator $n_k \in \{0,1\}$ and the Grassmann nature of the $a_k^\dagger$. No continuous parameter can alter them.

**Input 2: Chirality selection determines $SU(2)_L$ assignment.** The [Chirality Selection](/derivations/gauge/chirality-selection) derivation (Theorem 3.1) establishes that the quaternionic factor $\mathbb{H}$ in $\mathbb{R} \otimes \mathbb{C} \otimes \mathbb{H} \otimes \mathbb{O}$ produces $SU(2)_L$ acting exclusively on left-handed fields. This is a discrete choice — the orientation of the $\mathbb{H}$ action relative to the Lorentz chirality operator — with no continuous deformation.

**Rigidity.** The combined representation content (Definition 2.1) depends on: (a) Hurwitz's theorem (exactly four normed division algebras $\mathbb{R}, \mathbb{C}, \mathbb{H}, \mathbb{O}$), (b) the $\mathbb{C}\ell(6)$ isomorphism (a theorem of Clifford algebra theory), and (c) the orientation lock (a $\mathbb{Z}_2$ choice, fixed by chirality selection). None of these admits a continuous parameter. The anomaly traces (Theorem 3.1) are therefore fixed rational numbers, and their vanishing is a theorem about the algebra of octonions — not a fine-tuning. $\square$

**Remark.** This explains why the Standard Model fermion content "happens" to be anomaly-free: it is the unique content compatible with the four normed division algebras and coherence conservation. Deforming any hypercharge assignment would require modifying the $U(1)$ eigenvalues of the $\mathbb{C}\ell(6)$ number operator, which are integer-valued and hence rigid. Adding or removing representations would change the $\mathbb{C}\ell(6)$ ideal dimension, which is fixed at $2^3 = 8$ by the three complex directions in the octonions.

## Consistency Model

Let $V$ denote the vector space of one-generation fermion representations with basis $\{Q_L, u_R, d_R, L_L, e_R\}$. Define the anomaly functional:

$$\mathcal{A}_{abc} = \sum_f \eta_f \, \text{Tr}[T_a^{(f)} \{T_b^{(f)}, T_c^{(f)}\}]$$

where $\eta_f = +1$ for left-handed and $-1$ for right-handed fermions, and $T_a^{(f)}$ is the generator in representation $f$.

**Verification:** The anomaly functional evaluated on all independent generator combinations yields zero (Theorem 3.1 parts a–d). The verification is purely arithmetic and could be automated.

**Cross-check with [SM Gauge Group](/derivations/gauge/standard-model-group) Proposition 5.1:** That proposition performs the same computation with the same fermion content and reaches the same conclusion. The present derivation adds the conceptual layer: *why* this fermion content (answer: division algebras + chirality), and *why* anomaly freedom is required (answer: coherence conservation, Theorem 1.2).

## Rigor Assessment

| Result | Status | Notes |
|---|---|---|
| Theorem 1.2 (coherence → anomaly freedom) | Semi-formal | Three-step argument is explicit but Step 2 (coherence as partition-function derivative) relies on the Fisher metric formulation |
| Proposition 2.2 (hypercharge quantization) | Rigorous | Follows from published $\mathbb{C}\ell(6)$ decomposition (Furey, 2016; Stoica, 2018) |
| Theorem 3.1 (anomaly traces vanish) | Rigorous | Pure arithmetic on fixed representations |
| Proposition 4.1 (generation independence) | Rigorous | Immediate from identical representations |
| Theorem 5.1 (structural necessity) | Semi-formal | Rigidity argument now explicit; depends on Hurwitz's theorem and $\mathbb{C}\ell(6)$ number-operator eigenvalue discreteness |

## Open Gaps

**Gap 1.** Theorem 1.2 now provides an explicit three-step proof, but Step 2 relies on the coherence-as-partition-function-derivative identification from the Fisher metric derivation. A fully rigorous proof would axiomatically construct this identification from the coherence measure alone, without invoking the path integral formulation as an intermediate.

**Gap 2.** The fermion representations (Definition 2.1) rely on the $\mathbb{C} \otimes \mathbb{O} \cong \mathbb{C}\ell(6)$ identification, which is a published mathematical result applied to the framework. A fully intrinsic derivation would construct the fermion representations directly from the bootstrap mechanism without invoking Clifford algebra theory.

**Gap 3.** The derivation shows anomaly cancellation for each generation independently, but does not address potential inter-generational anomalies (which vanish trivially in the SM but could arise in extensions). The framework's prediction of exactly three generations should be connected to the non-existence of higher-generation anomalies.

## Addresses Gaps In

- [Chirality Selection](/derivations/gauge/chirality-selection), Gap: "SM chiral fermion content is anomaly-free... constraint should follow from coherence conservation... but the calculation has not been performed" — **Resolved**: Theorem 3.1 performs the explicit computation; Theorem 1.2 provides the coherence-conservation connection.
- [Weak Interaction](/derivations/gauge/weak-interaction), Gap: "SM is free of gauge anomalies... framework should reproduce this constraint from coherence conservation" — **Resolved**: Full computation with framework-intrinsic justification.
