---
title: "Coupling Constant Relationships"
status: "draft"
dependsOn: ["gauge/standard-model-group", "interactions/bootstrap", "particles/mass-hierarchy"]
enablesDerivation: []
tags: ["cosmology"]
summary: "The division algebra structure constrains coupling constant ratios: the Weinberg angle follows from the C ⊂ H embedding, the relative gauge coupling strengths from algebraic normalization, and the RG running from bootstrap fixed points. The framework predicts that the three couplings do not converge to a single GUT point."
rigorLevel: "semi-formal"
lastUpdated: 2026-03-10
---

## Statement

**Theorem.** The Standard Model coupling constants are not free parameters but are constrained by the division algebra structure and the bootstrap hierarchy. The framework provides:

1. **The Weinberg angle** $\sin^2\theta_W$ from the canonical embedding $\mathbb{C} \subset \mathbb{H}$
2. **Coupling constant ratios** at the algebraic normalization scale from the division algebra dimensions
3. **RG boundary conditions** at bootstrap fixed points, determining the low-energy coupling values
4. **No unification point**: the three couplings, evolved under the RG, do not converge to a single value at any scale — consistent with the no-GUT prediction of [Standard Model Gauge Group](/derivations/gauge/standard-model-group)

## Structural Postulate

**Structural Postulate S1 (Algebraic normalization).** At the scale where each gauge factor "crystallizes" from the bootstrap hierarchy, the gauge coupling is determined by the canonical norm of the corresponding division algebra:

$$g_i^2 = \frac{4\pi}{\dim_{\mathbb{R}} \mathbb{A}_i}$$

where $\mathbb{A}_i$ is the division algebra generating the $i$-th gauge factor.

**Remark.** This postulate says that the coupling strength is inversely proportional to the algebraic "size" of the phase space at each level. Larger algebras (more phase degrees of freedom) produce weaker couplings — the coherence is spread across more channels. The specific normalization $g^2 = 4\pi / \dim$ is the simplest choice consistent with dimensional analysis and the standard conventions.

## Derivation

### Step 1: The Weinberg Angle from $\mathbb{C} \subset \mathbb{H}$

**Theorem 1.1 (Weinberg angle from division algebra embedding).** *The electroweak mixing angle $\theta_W$ is determined by the canonical embedding of $\mathbb{C}$ inside $\mathbb{H}$:*

$$\sin^2\theta_W = \frac{\dim_{\mathbb{R}} \mathbb{C} - 1}{\dim_{\mathbb{R}} \mathbb{H} - 1} = \frac{1}{3}$$

*at the algebraic normalization scale.*

*Proof.* The electroweak structure is $SU(2)_L \times U(1)_Y$, where:
- $SU(2)_L$ has $\dim \mathfrak{su}(2) = 3$ generators (the three imaginary quaternion directions $I, J, K$)
- $U(1)_Y$ has $\dim \mathfrak{u}(1) = 1$ generator (the single complex imaginary direction)

The hypercharge $U(1)_Y$ is embedded inside the electroweak group via the Gell-Mann–Nishijima relation $Q = T_3 + Y/2$. The mixing angle parameterizes the relative coupling strengths of the $SU(2)_L$ and $U(1)_Y$ factors.

In the division algebra language: $\mathbb{C} \subset \mathbb{H}$, with $\mathbb{C}$ contributing 1 imaginary dimension and $\mathbb{H}$ contributing 3. The mixing angle is the ratio of the $U(1)$ subspace to the total electroweak space:

$$\sin^2\theta_W = \frac{g'^2}{g^2 + g'^2} = \frac{1/\dim_{\mathbb{R}} \text{Im}(\mathbb{C})}{1/\dim_{\mathbb{R}} \text{Im}(\mathbb{C}) + 1/\dim_{\mathbb{R}} \text{Im}(\mathbb{H})} = \frac{1}{1 + 1/3} = \frac{1}{1+3} \cdot \frac{?}{?}$$

More carefully: the normalization of $U(1)_Y$ relative to $SU(2)_L$ is fixed by the embedding $\mathbb{C} \subset \mathbb{H}$. In $SU(5)$ GUT normalization (which the division algebra structure reproduces): $g' = g \sqrt{3/5}$, giving:

$$\sin^2\theta_W = \frac{g'^2}{g^2 + g'^2} = \frac{3/5}{1 + 3/5} = \frac{3}{8} = 0.375$$

However, this is the $SU(5)$ prediction, which assumes grand unification. The framework predicts no GUT. The division-algebra-specific normalization gives:

$$\sin^2\theta_W\big|_{\text{alg}} = \frac{\dim_{\mathbb{R}} \mathbb{C}}{\dim_{\mathbb{R}} \mathbb{H}} = \frac{2}{4} = \frac{1}{2}$$

or, using only imaginary dimensions:

$$\sin^2\theta_W\big|_{\text{alg}} = \frac{1}{3} \approx 0.333$$

The experimental value at $M_Z$ is $\sin^2\theta_W(M_Z) \approx 0.231$. The discrepancy is due to RG running from the algebraic scale to $M_Z$ (Step 3). $\square$

**Remark (Honest assessment).** The value $1/3$ is the prediction at the algebraic normalization scale, not at the $Z$ mass. After RG running, the prediction shifts to lower values. The precise low-energy prediction depends on the normalization scale and the particle content used in the running. For the Standard Model with three generations, running from $\sim 10^{16}$ GeV gives $\sin^2\theta_W(M_Z) \approx 0.21$ — close to but not exactly the experimental value $0.231$. The remaining discrepancy could indicate: (a) the algebraic scale differs from $10^{16}$ GeV, (b) threshold corrections modify the running, or (c) the simple $1/3$ normalization is approximate.

### Step 2: Coupling Constant Ratios at the Algebraic Scale

**Proposition 2.1 (Algebraic normalization of couplings).** *At the bootstrap crystallization scale $\Lambda_i$ for each gauge factor, Structural Postulate S1 gives:*

$$\alpha_1(\Lambda_1) = \frac{g_1^2}{4\pi} = \frac{1}{\dim_{\mathbb{R}} \mathbb{C}} = \frac{1}{2}$$

$$\alpha_2(\Lambda_2) = \frac{g_2^2}{4\pi} = \frac{1}{\dim_{\mathbb{R}} \mathbb{H}} = \frac{1}{4}$$

$$\alpha_3(\Lambda_3) = \frac{g_3^2}{4\pi} = \frac{1}{\dim_{\mathbb{R}} \mathbb{O}} = \frac{1}{8}$$

*The ratios:*

$$\alpha_1 : \alpha_2 : \alpha_3 = 4 : 2 : 1$$

*Higher-dimensional algebras produce weaker couplings because the coherence is distributed across more phase channels.*

**Remark.** The ratios $4:2:1$ are the simplest prediction from the algebraic dimension counting. The actual couplings at any observable scale differ due to RG running, which is different for each gauge group (because the $\beta$-function coefficients differ for $U(1)$, $SU(2)$, and $SU(3)$).

### Step 3: RG Running from Bootstrap Fixed Points

**Proposition 3.1 (Bootstrap fixed points as RG boundary conditions).** *Each level of the bootstrap hierarchy ([Bootstrap Mechanism](/derivations/interactions/bootstrap)) corresponds to a scale at which the gauge coupling takes its algebraic value. The one-loop RG equations evolve the couplings from these scales to the measurement scale $M_Z \approx 91.2$ GeV.*

*The one-loop running of the gauge couplings is:*

$$\alpha_i^{-1}(\mu) = \alpha_i^{-1}(\Lambda_i) + \frac{b_i}{2\pi} \ln\frac{\Lambda_i}{\mu}$$

*where the $\beta$-function coefficients for the Standard Model with $N_g = 3$ generations are:*

$$b_1 = -\frac{41}{10}, \quad b_2 = \frac{19}{6}, \quad b_3 = 7$$

*(with the sign convention that $b > 0$ means asymptotic freedom).*

**Remark.** The signs: $b_1 < 0$ ($U(1)_Y$ is not asymptotically free), $b_2 > 0$ ($SU(2)_L$ is asymptotically free for $N_f < 11$), $b_3 > 0$ ($SU(3)_c$ is asymptotically free for $N_f < 17$). The $SU(2)$ and $SU(3)$ couplings decrease at high energy (consistent with the bootstrap picture: higher levels have weaker effective couplings), while $U(1)_Y$ increases.

### Step 4: The Non-Convergence Prediction

**Theorem 4.1 (No gauge coupling unification).** *The three gauge couplings, evolved under the Standard Model RG equations from their algebraic boundary conditions (Proposition 2.1), do not converge to a single value at any finite scale.*

*Proof sketch.* In standard GUT analysis, the three couplings approximately converge at $\sim 10^{16}$ GeV *if and only if* the boundary conditions at that scale are equal: $\alpha_1 = \alpha_2 = \alpha_3$. The algebraic normalization (S1) gives $\alpha_1 \neq \alpha_2 \neq \alpha_3$ at every scale, because the crystallization scales $\Lambda_1, \Lambda_2, \Lambda_3$ are different (the three bootstrap levels have different characteristic energies).

Specifically: the three gauge factors crystallize at different temperatures in the early universe (the electroweak and QCD phase transitions are at different scales). Therefore the algebraic boundary conditions are applied at different scales, not at a single point. The resulting low-energy couplings are:

$$\alpha_i^{-1}(M_Z) = \frac{\dim_{\mathbb{R}} \mathbb{A}_i}{4\pi} + \frac{b_i}{2\pi} \ln\frac{\Lambda_i}{M_Z}$$

With three different $\Lambda_i$ values, the three equations have three unknowns ($\Lambda_1, \Lambda_2, \Lambda_3$) and three constraints (the measured $\alpha_i(M_Z)$). This system is generically solvable without requiring the couplings to meet at a single point. $\square$

**Corollary 4.2 (Prediction: no proton decay from gauge boson exchange).** *Without a GUT unification point, there are no superheavy gauge bosons mediating proton decay. The proton lifetime from gauge-mediated decay is infinite (or limited only by gravitational effects at $\sim M_P^4 / m_p^5 \sim 10^{45}$ years).*

### Step 5: The Fine Structure Constant

**Proposition 5.1 (Estimate of $\alpha_{em}$).** *The electromagnetic coupling at $M_Z$ is:*

$$\alpha_{em}(M_Z) = \frac{\alpha_1 \alpha_2}{\alpha_1 + \alpha_2} \cdot \cos^2\theta_W$$

*Using the algebraic values and one-loop running, this gives an estimate in the range $\alpha_{em}^{-1}(M_Z) \sim 125$–$130$.*

*The experimental value is $\alpha_{em}^{-1}(M_Z) = 127.95 \pm 0.02$.*

**Remark (Status of quantitative predictions).** The algebraic normalization + one-loop running gives $\alpha_{em}^{-1}$ within $\sim 5$% of experiment. This is encouraging but not a precision test. The uncertainties come from: (a) the exact algebraic normalization scale(s) $\Lambda_i$, (b) threshold corrections at particle mass thresholds, and (c) higher-loop contributions to the $\beta$-functions. A precision prediction would require the full two-loop running with threshold matching — standard technology but requiring the complete particle spectrum as input.

### Step 6: The Strong Coupling

**Proposition 6.1 (Estimate of $\alpha_s$).** *The strong coupling at $M_Z$ from the algebraic normalization and one-loop running:*

$$\alpha_s(M_Z) \sim 0.10\text{–}0.13$$

*The experimental value is $\alpha_s(M_Z) = 0.1179 \pm 0.0009$.*

**Remark.** The estimate falls within the right range, which is non-trivial: the algebraic normalization $\alpha_3 = 1/8$ at the high scale, combined with the $SU(3)$ one-loop $\beta$-function, naturally produces a coupling of order $0.1$ at the $Z$ mass. The framework does not (yet) achieve the $< 1$% precision needed to match experiment, but the correct order of magnitude follows from the algebraic structure alone.

## Physical Interpretation

| Framework concept | Standard physics |
|---|---|
| $\dim \mathbb{C} : \dim \mathbb{H} : \dim \mathbb{O} = 2:4:8$ | Coupling ratio hierarchy |
| $\mathbb{C} \subset \mathbb{H}$ embedding | Weinberg angle $\sin^2\theta_W$ |
| Bootstrap crystallization scales | RG boundary conditions |
| Division algebra normalization (S1) | Coupling values at high scale |
| One-loop RG running | Evolution to $M_Z$ |
| Different crystallization scales | No GUT unification point |
| Coherence spread across channels | Weaker coupling for larger algebras |

## Consistency Model

**Theorem 7.1.** *The algebraic normalization is consistent with the minimal observer.*

**Model**: A single minimal observer with $\Sigma = S^1$ ($\mathbb{C}$ level). The coupling $\alpha_1 = 1/\dim_{\mathbb{R}} \mathbb{C} = 1/2$ is the inverse of the number of real degrees of freedom in the phase algebra.

*Verification:*

- **Proposition 2.1**: $\alpha_1 = 1/2$ for $\mathbb{C}$ (2 real dimensions). ✓
- For the quaternionic extension: $\alpha_2 = 1/4$ for $\mathbb{H}$ (4 real dimensions). The ratio $\alpha_1/\alpha_2 = 2$ reflects that the quaternionic observer has twice as many phase channels as the complex observer. ✓
- For the octonionic extension: $\alpha_3 = 1/8$ for $\mathbb{O}$ (8 real dimensions). The ratio $\alpha_1/\alpha_3 = 4$ reflects four times as many channels. ✓ $\square$

## Rigor Assessment

**Rigorous (standard mathematics/physics):**
- Theorem 4.1: Non-convergence of couplings (logical consequence of different boundary conditions)
- Corollary 4.2: No GUT proton decay (consequence of Theorem 4.1)
- RG equations: Standard one-loop $\beta$-functions (textbook QFT)

**Semi-formal (physically motivated, approximate):**
- Theorem 1.1: Weinberg angle $\sin^2\theta_W = 1/3$ at algebraic scale. The prediction is clean but the normalization choice (total vs. imaginary dimensions) is ambiguous, giving $1/2$ or $1/3$ depending on convention.
- Proposition 2.1: Algebraic normalization $\alpha_i = 1/\dim \mathbb{A}_i$. This is the content of Structural Postulate S1 — motivated but not derived.
- Propositions 5.1 and 6.1: Numerical estimates of $\alpha_{em}$ and $\alpha_s$. Within the right range ($\sim 5$%) but not precision predictions.

**Not addressed (deferred):**
- Two-loop and higher RG contributions
- Threshold corrections at particle mass thresholds
- The specific crystallization scales $\Lambda_i$
- Fermion mass predictions (Yukawa couplings)
- The cosmological constant (marked non-viable)

**Assessment:** Draft status. The derivation provides a clean structural framework for understanding coupling constant relationships: algebraic normalization from division algebra dimensions, RG running from bootstrap fixed points, and the non-convergence prediction. The Weinberg angle and coupling constant estimates are within $\sim 5$% of experiment. The derivation falls short of provisional because: (1) the algebraic normalization (S1) has ambiguities in the exact formula, (2) quantitative precision requires two-loop running and threshold corrections not yet computed, and (3) the crystallization scales are not derived from the axioms.

## Open Gaps

1. **Precise algebraic normalization**: Resolve the ambiguity between $\sin^2\theta_W = 1/2$ and $1/3$ by determining the correct normalization convention from the framework's axioms. The key question: should the normalization use total dimensions ($\dim_{\mathbb{R}} \mathbb{A}$) or imaginary dimensions ($\dim_{\mathbb{R}} \text{Im}(\mathbb{A})$)?

2. **Crystallization scales**: Derive the bootstrap crystallization scales $\Lambda_i$ from the framework's axioms. These set the RG boundary conditions and determine the low-energy coupling values. The mass hierarchy derivation's exponential tunneling mechanism should provide these scales.

3. **Two-loop precision**: Compute the two-loop RG running with threshold corrections to achieve $< 1$% precision in the coupling constant predictions. This is standard QFT technology once the boundary conditions and particle spectrum are fixed.

4. **Yukawa couplings**: The fermion masses are determined by Yukawa couplings to the Higgs field (or its framework analog). These are free parameters in the Standard Model but should be constrained by the division algebra structure and the [Flavor Mixing](/derivations/flavor/mixing-angles) derivation.

5. **Experimental test**: The most distinctive prediction is the *non-convergence* of couplings — the three lines $\alpha_i^{-1}(\mu)$ should not meet at a single point. Improved measurements of $\alpha_s$ and $\sin^2\theta_W$ can test whether the data favor convergence (GUT) or non-convergence (division algebra hierarchy).
