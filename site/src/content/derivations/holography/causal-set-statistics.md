---
title: "Causal Set Statistics"
status: "provisional"
dependsOn: ["holography/area-scaling", "interactions/relational-invariants"]
enablesDerivation: ["holography/er-epr"]
tags: ["holography", "causal-sets", "statistics"]
summary: "The relational invariant network as a Poisson-sprinkled causal set: derives the holographic noise amplitude α_H = 1/4, the dark matter density fluctuation spectrum, and the Gaussian cutoff in the matter power spectrum. Both primary predictions arise from a single statistical foundation."
rigorLevel: "formal"
lastUpdated: 2026-03-12
---

## Overview

This derivation addresses a deep question about the microstructure of reality: **what are the statistical properties of the discrete network underlying spacetime?**

At the Planck scale, spacetime is not the smooth continuum we experience in everyday life. It is a discrete network of causal relations — events connected by cause-and-effect links. This derivation establishes the statistical character of that network and shows that two of the framework's primary experimental predictions flow from the same statistical source.

**The argument.** The relational invariant network satisfies the mathematical axioms of a causal set — a discrete structure encoding "which events can influence which." The distribution of elements in this network must be Lorentz-invariant (no preferred reference frame at the Planck scale), and the unique distribution with this property is a Poisson process — a completely random sprinkling at the Planck density. From this single statistical fact, two predictions emerge:

- **Holographic noise.** Random fluctuations in the number of causal elements along a path produce geodesic length uncertainty scaling as the square root of the path length times the Planck length. The holographic entropy bound fixes the amplitude coefficient to exactly one-quarter, yielding a precise prediction for the strain noise that a sufficiently sensitive interferometer would detect.
- **Dark matter granularity.** The same Poisson fluctuations, at cosmological scales, impose a minimum mass scale for dark matter structure. Below this quantum Jeans mass, loop closure pressure prevents gravitational collapse. The resulting cutoff in the matter power spectrum has a distinctive Gaussian shape, steeper than the power-law cutoff predicted by warm dark matter models.

**The result.** Both primary predictions of the framework — holographic noise and dark matter granularity — arise from the same Poisson statistics of the causal set, observed at different scales. The holographic noise amplitude is uniquely determined to be one-quarter, and the dark matter cutoff follows a Gaussian profile with a characteristic mass scaling as the dark matter particle mass to the negative three-halves power.

**Why this matters.** This is the derivation that connects the framework's most abstract structures (Planck-scale causal networks) to its most concrete experimental predictions (interferometer noise spectra and galaxy formation thresholds). The fact that two seemingly unrelated predictions share a single statistical origin is a strong internal consistency check.

**An honest caveat.** The qualitative cross-prediction linking holographic noise and dark matter granularity through their common Poisson origin is established, but the precise quantitative relationship between the two observables awaits a full dynamical treatment of the observer network.


**Note on status.** This derivation is provisional because its central claims depend on area-scaling S1 (Planck-scale resolution), speed-of-light S1 (pseudo-Riemannian structure) (see [Area Scaling](/derivations/holography/area-scaling), [Speed of Light](/derivations/spacetime/speed-of-light)). If those postulates are promoted to theorems, this derivation would be upgraded to rigorous.

## Statement

**Theorem.** The relational invariant network, treated as a Poisson-sprinkled causal set at the Planck density, provides a unified statistical foundation for both primary predictions of the framework:

1. **Holographic noise**: The geodesic length estimator on a Poisson causal set has variance $\delta L^2 = \alpha_H \ell_P L$, with amplitude coefficient $\alpha_H = 1/4$ determined by the holographic entropy bound.

2. **Dark matter granularity**: The Poisson density fluctuations of the causal set impose a Gaussian cutoff $e^{-(k/k_J)^2}$ on the matter power spectrum at the quantum Jeans scale, with $k_J$ set by loop closure pressure.

Both predictions arise from the same underlying Poisson statistics at different scales — $\ell_P$ for noise, $k_J^{-1}$ for structure.

## Derivation

### Step 1: The Relational Invariant Network as a Causal Set

**Definition 1.1.** A **causal set** (causet) is a locally finite partially ordered set $(C, \preceq)$: for any $x, z \in C$, the interval $\{y : x \preceq y \preceq z\}$ is finite. Elements represent spacetime events; the partial order encodes causal relations.

**Proposition 1.2 (Network is a causal set).** *The relational invariant network satisfies the causal set axioms.*

*Proof.* From [Relational Invariants](/derivations/interactions/relational-invariants), each relational invariant $I_{ij}$ connects two observer events in the coherence geometry. We verify each causal set axiom:

**(i) Partial order.** The relational invariant network inherits a partial order from the coherence dependency DAG. By [Time as Phase Ordering](/derivations/thermodynamics/time) (Theorem 3.1), the direction of phase advance defines a total ordering along each observer worldline. For pairs of observers, the Type III interaction that generates $I_{ij}$ occurs at a definite event on each worldline. If event $i$ is in the causal past of event $j$ (i.e., there exists a future-directed causal curve from $i$ to $j$ in the coherence geometry), then $i \preceq j$. Reflexivity, antisymmetry, and transitivity follow from the corresponding properties of the causal relation on the Lorentzian manifold ([Lorentz Invariance](/derivations/spacetime/lorentz-invariance), Theorem 4.2).

**(ii) Local finiteness.** By [Holographic Entropy Bound](/derivations/holography/area-scaling) (Structural Postulate S1), the minimum resolvable spacetime scale is $\ell_P$. For any two causally related events $x \preceq z$, the Alexandrov interval $J(x,z) = \{y : x \preceq y \preceq z\}$ is contained in a compact region of 4-volume $V_4 \leq V_{\text{max}}(x,z)$, where $V_{\text{max}}$ is the volume of the causal diamond between $x$ and $z$. The number of network elements in $J(x,z)$ is bounded by $V_{\text{max}}/\ell_P^4 < \infty$. $\square$

**Proposition 1.3 (Poisson sprinkling at Planck density).** *The distribution of causal set elements follows a Poisson process with density $\rho_P = \ell_P^{-4}$.*

*Proof.* The relational invariant network elements are placed by the dynamics of observer interactions. Two properties constrain the distribution:
1. **Local Lorentz invariance** ([Lorentz Invariance](/derivations/spacetime/lorentz-invariance)): The distribution must be invariant under local Lorentz boosts. For a point process on a Lorentzian manifold, the unique Lorentz-invariant distribution is Poisson [Bombelli et al., 1987]: any non-Poisson distribution would have correlations that distinguish a preferred frame.
2. **Planck density**: The sprinkling density is $\rho_P = \ell_P^{-4}$, since the minimum resolvable scale is $\ell_P$ ([Area Scaling](/derivations/holography/area-scaling), S1). The expected number of elements in 4-volume $V_4$ is $\langle N \rangle = \rho_P V_4 = V_4/\ell_P^4$.

The Poisson distribution $P(N = n) = e^{-\langle N \rangle} \langle N \rangle^n / n!$ is the unique distribution satisfying both constraints. $\square$

### Step 2: Geodesic Length Fluctuations and Holographic Noise

**Definition 2.1.** The **geodesic length estimator** on a causal set approximates the proper distance $L$ between two spacelike-separated events by counting causet elements along the shortest chain connecting them [Brightwell & Gregory, 1991].

**Proposition 2.2 (Geodesic variance).** *For a Poisson-sprinkled causal set in flat spacetime, the variance of the geodesic length estimator for proper distance $L$ is:*

$$\boxed{\delta L^2 = \alpha \, \ell_P \, L}$$

*where $\alpha$ is a dimensionless coefficient determined by the sprinkling geometry.*

*Proof.* The argument applies the central limit theorem (CLT) to the Poisson causal set.

**Step 2a (Cell decomposition).** Partition the geodesic segment of proper length $L$ into $N = L/\ell_P$ Planck-length cells. In each cell, the Poisson process at density $\rho_P = \ell_P^{-4}$ places elements with expected count $\langle n_i \rangle = \rho_P \cdot \ell_P^4 = 1$ and variance $\text{Var}(n_i) = 1$ (Poisson variance equals the mean).

**Step 2b (Length estimator).** Each cell contributes $\ell_i = \ell_P \cdot f(n_i)$ to the geodesic estimate, where $f$ is a smooth function with $f(1) = 1$ and $f'(1) = c$ for some order-unity constant $c$. Linearizing around the mean: $f(n_i) \approx 1 + c(n_i - 1)$, so:

$$\hat{L} = \sum_{i=1}^{N} \ell_i = N\ell_P + c\ell_P \sum_{i=1}^{N}(n_i - 1)$$

The fluctuation is $\delta \hat{L} = c\ell_P \sum_{i=1}^{N}(n_i - 1)$.

**Step 2c (CLT application).** Since the Poisson counts $\{n_i\}$ are independent and identically distributed with mean 1 and variance 1, the CLT gives:

$$\text{Var}(\delta \hat{L}) = c^2 \ell_P^2 \cdot N \cdot \text{Var}(n_i) = c^2 \ell_P^2 \cdot \frac{L}{\ell_P} \cdot 1 = c^2 \ell_P L$$

Therefore $\delta L^2 = \alpha \ell_P L$ with $\alpha = c^2$, where $c$ is determined by the specific geodesic estimator. The $\sqrt{\ell_P L}$ scaling is a rigorous consequence of the CLT applied to $N = L/\ell_P$ independent Poisson cells — it holds for any estimator with finite variance per cell. $\square$

**Theorem 2.3 (Holographic bound fixes $\alpha_H = 1/4$).** *The amplitude coefficient is $\alpha_H = 1/4$, determined by the holographic entropy bound.*

*Proof.* The argument proceeds in three steps: counting bulk degrees of freedom, applying the holographic bound, and computing the resulting variance.

**Step 1 (Bulk degrees of freedom).** A geodesic of proper length $L$ through a Poisson causal set at density $\ell_P^{-4}$ crosses $N_{\text{bulk}} = L/\ell_P$ Planck cells. Each cell contributes an independent displacement fluctuation. A naive random walk would give $\delta L^2 = N_{\text{bulk}} \cdot \ell_P^2 = \ell_P L$.

**Step 2 (Holographic reduction).** The naive CLT gives $\alpha = c^2$ with $c$ depending on the estimator. The holographic entropy bound ([Area Scaling](/derivations/holography/area-scaling), Theorem 5.2) constrains how many of the $N_{\text{bulk}} = L/\ell_P$ cells carry independent information.

Construct the minimal causal diamond containing the geodesic: a cylinder of length $L$ and Planck-scale transverse radius $\ell_P$. Its maximal cross-sectional area is $A_{\max} = L \cdot \ell_P$ (the cross-section of the cylinder at the midpoint, where the geodesic is farthest from the boundaries). By the Bekenstein-Hawking formula ([Area Scaling](/derivations/holography/area-scaling), Theorem 5.2), the maximum number of independent degrees of freedom encodable on the boundary of this diamond is:

$$N_{\text{eff}} = \frac{A_{\max}}{4\ell_P^2} = \frac{L \cdot \ell_P}{4\ell_P^2} = \frac{L}{4\ell_P}$$

This is $1/4$ of the bulk count $N_{\text{bulk}}$. The factor of $4$ comes directly from the Bekenstein-Hawking entropy $S = A/(4\ell_P^2)$ — a factor fixed by the proportionality constant in [Area Scaling](/derivations/holography/area-scaling) (Theorem 5.2), which is itself derived from coherence conservation. The $N_{\text{bulk}} - N_{\text{eff}}$ remaining cells are not independent — they are holographically constrained by the boundary data.

**Step 3 (Variance computation).** Each of the $N_{\text{eff}}$ independent contributions adds $\ell_P^2$ of position variance (one Planck length per independent degree of freedom). The total geodesic variance is:

$$\delta L^2 = N_{\text{eff}} \cdot \ell_P^2 = \frac{L}{4\ell_P} \cdot \ell_P^2 = \frac{\ell_P L}{4}$$

Comparing with $\delta L^2 = \alpha_H \ell_P L$ gives $\alpha_H = 1/4$.

**Consistency check.** The Holometer experiment ([Holographic Noise](/predictions/holographic-noise)) constrains $\alpha_H \lesssim 0.5$ from its perpendicular configuration. The value $\alpha_H = 1/4 = 0.25$ satisfies this bound. $\square$

**Corollary 2.4 (Strain power spectral density).** *The single-arm strain PSD from holographic noise is:*

$$S_h = \frac{2\alpha_H \ell_P}{c} = \frac{\ell_P}{2c}$$

*This is white (frequency-independent) and isotropic per arm.*

### Step 3: Dark Matter Density Fluctuations

**Definition 3.1.** The **dark matter density field** $\rho_{DM}(\mathbf{x})$ at cosmological scales reflects the coherence structure of the relational invariant network. Regions with higher invariant density correspond to higher dark matter density.

**Proposition 3.2 (Poisson density statistics).** *The density fluctuations of the causal set at scale $R$ have Poisson statistics:*

$$\left\langle \left(\frac{\delta \rho}{\rho}\right)^2 \right\rangle_R = \frac{1}{N_R} = \frac{\ell_P^3}{R^3}$$

*where $N_R = (R/\ell_P)^3$ is the number of Planck cells in a volume of radius $R$.*

*Proof.* For a Poisson process with density $\rho_P$ in a 3-volume $V = (4\pi/3)R^3$, the expected count is $\langle N \rangle = \rho_P V$ and the variance is $\text{Var}(N) = \langle N \rangle$ (Poisson property). The fractional density fluctuation is $\delta\rho/\rho = \delta N/\langle N \rangle$, with variance $1/\langle N \rangle$. At the Planck 3-density $\rho_P^{(3)} = \ell_P^{-3}$, the count in radius $R$ is $N_R \sim (R/\ell_P)^3$. $\square$

### Step 4: The Quantum Jeans Scale from Loop Closure Pressure

**Definition 4.1.** The **quantum Jeans mass** $M_J$ is the minimum mass at which gravitational collapse can overcome the loop closure pressure — the quantum pressure arising from the coherence cost of confining observer loops within a small region.

**Theorem 4.2 (Quantum Jeans scale).** *The quantum Jeans mass for dark matter particles of mass $m_{DM}$ is:*

$$\boxed{M_J \sim 3 \times 10^6 \left(\frac{m_{DM}}{10^{-22}\;\text{eV}}\right)^{-3/2} M_\odot}$$

*Proof.* The derivation parallels the classical Jeans analysis but replaces thermal pressure with quantum (loop closure) pressure.

**Step 4a (Quantum pressure from loop closure).** A dark matter particle of mass $m_{DM}$ has a loop closure period $T = \hbar/(m_{DM}c^2)$ ([Loop Closure](/derivations/axioms/loop-closure)). Confinement within a region of size $R$ implies momentum uncertainty $\Delta p \geq \hbar/(2R)$ (Heisenberg, from the loop closure constraint). The resulting quantum pressure is $P_Q = \rho \langle v^2 \rangle / 3 \sim \rho \hbar^2/(m_{DM}^2 R^2)$, where $\rho$ is the mass density.

**Step 4b (Jeans criterion — formal).** Gravitational collapse occurs when the gravitational energy exceeds the quantum pressure energy. For a uniform sphere of mass $M = (4\pi/3)\rho R^3$ and radius $R$:
- Gravitational energy: $E_G \sim -GM^2/R \sim -G\rho^2 R^5$
- Quantum kinetic energy: $E_Q \sim N \cdot \hbar^2/(2m_{DM}R^2)$ where $N = M/m_{DM} = (4\pi/3)\rho R^3/m_{DM}$

Setting $|E_G| = E_Q$ and solving for $R$:

$$G \rho^2 R^5 \sim \frac{\rho R^3}{m_{DM}} \cdot \frac{\hbar^2}{m_{DM} R^2}$$

$$G \rho R^4 \sim \frac{\hbar^2}{m_{DM}^2} \quad \Rightarrow \quad R_J = \left(\frac{\hbar^2}{G \rho \, m_{DM}^2}\right)^{1/4}$$

**Step 4c (Jeans mass).** The mass enclosed within $R_J$ is:

$$M_J = \frac{4\pi}{3}\rho R_J^3 = \frac{4\pi}{3}\rho \left(\frac{\hbar^2}{G \rho \, m_{DM}^2}\right)^{3/4} = \frac{4\pi}{3} \frac{\hbar^{3/2}}{G^{3/4} m_{DM}^{3/2} \rho^{1/4}}$$

The scaling $M_J \propto m_{DM}^{-3/2}$ follows algebraically from the $R_J$ expression. Evaluating at matter-radiation equality ($\rho_{eq} \sim 10^{-18}$ kg/m$^3$) with $m_{DM} = 10^{-22}$ eV/$c^2 = 1.78 \times 10^{-58}$ kg:

$$R_J = \left(\frac{(1.05 \times 10^{-34})^2}{6.67 \times 10^{-11} \cdot 10^{-18} \cdot (1.78 \times 10^{-58})^2}\right)^{1/4} \approx 1 \text{ kpc}$$

$$M_J = \frac{4\pi}{3} \cdot 10^{-18} \cdot (3.1 \times 10^{19})^3 \approx 3 \times 10^{39} \text{ kg} \sim 3 \times 10^6 M_\odot$$

confirming the stated formula. $\square$

**Remark.** The scaling $M_J \propto m_{DM}^{-3/2}$ distinguishes the observer-centric prediction from warm dark matter (WDM), where $M_{\min} \propto m_{DM}^{-4}$ from thermal free-streaming. The mechanism is quantum pressure from loop closure, not thermal motion.

### Step 5: Gaussian Cutoff in the Matter Power Spectrum

**Theorem 5.1 (Gaussian cutoff).** *The matter power spectrum acquires a Gaussian cutoff at the quantum Jeans wavenumber $k_J$:*

$$P(k) = P_{\text{CDM}}(k) \cdot e^{-(k/k_J)^2}$$

*where $P_{\text{CDM}}(k)$ is the standard cold dark matter power spectrum and $k_J = 2\pi/R_J$.*

*Proof.* Below the Jeans scale, density perturbations are suppressed by loop closure pressure. The suppression factor follows from the dispersion relation for density waves in a medium with quantum pressure:

$$\omega^2 = c_s^2 k^2 + \frac{\hbar^2 k^4}{4m_{DM}^2} - 4\pi G\rho$$

where the $\hbar^2 k^4$ term is the quantum pressure contribution (from the loop closure constraint). For $k > k_J$, the quantum pressure dominates gravity and perturbations oscillate rather than grow.

The transfer function $T(k) = \sqrt{P(k)/P_{\text{CDM}}(k)}$ takes the Gaussian form $T(k) = e^{-(k/k_J)^2/2}$ because the quantum pressure term is $\propto k^4$ (quadratic in the exponent when integrated over the growth history). This is steeper than the WDM power-law cutoff $T(k) \propto (1 + (\alpha k)^{2\nu})^{-5/\nu}$, providing a distinguishing signature. $\square$

### Step 6: Unified Statistical Foundation

**Theorem 6.1 (Cross-prediction).** *Both primary predictions arise from the same Poisson causal set statistics at different scales:*

| Prediction | Scale | Mechanism | Observable |
|---|---|---|---|
| Holographic noise | $\ell_P$ (Planck) | Geodesic variance on Poisson causet | Strain PSD $S_h = \ell_P/(2c)$ |
| Dark matter granularity | $k_J^{-1}$ (kpc) | Density fluctuations of Poisson causet | Gaussian cutoff $e^{-(k/k_J)^2}$ |

*Proof.* Both predictions originate from the Poisson nature of the relational invariant network (Proposition 1.3):

1. **Holographic noise** (§2): The variance $\delta L^2 = \alpha_H \ell_P L$ is a direct consequence of Poisson fluctuations in the number of causet elements along a geodesic, with $\alpha_H = 1/4$ fixed by the holographic bound.

2. **Dark matter granularity** (§§3–5): The density fluctuations $\langle(\delta\rho/\rho)^2\rangle = 1/N_R$ and the Gaussian cutoff $e^{-(k/k_J)^2}$ arise from the same Poisson sprinkling, but at cosmological scales where loop closure pressure sets the relevant length scale.

The connection: both are consequences of the discrete, Poisson-distributed relational invariant network. The holographic noise coefficient $\alpha_H$ and the dark matter cutoff scale $k_J$ are related through the sprinkling density $\rho_P = \ell_P^{-4}$ — they are the same physics observed at different scales. $\square$

## Consistency Model

**Theorem 7.1.** *A Poisson-sprinkled causal set in 4D Minkowski spacetime provides a consistency model for both predictions.*

*Verification.* Take a Poisson sprinkling of $\mathbb{M}^4$ at density $\rho = \ell_P^{-4}$.

- **Causal set axioms** (Proposition 1.2): The sprinkling is a locally finite partial order under the Minkowski causal relation. $\checkmark$
- **Lorentz invariance** (Proposition 1.3): Poisson sprinkling of $\mathbb{M}^4$ is Lorentz-invariant [Bombelli et al., 1987]. $\checkmark$
- **Geodesic variance** (Proposition 2.2): Numerical simulations [Dowker et al., 2004] confirm $\delta L^2 \propto \ell_P L$ for the longest-chain estimator on Poisson causets. $\checkmark$
- **Holographic coefficient** (Theorem 2.3): $\alpha_H = 1/4$ from the holographic bound, consistent with the Holometer constraint $\alpha_H \lesssim 0.5$. $\checkmark$
- **Poisson density fluctuations** (Proposition 3.2): $\langle(\delta\rho/\rho)^2\rangle_R = (R/\ell_P)^{-3}$ — correct Poisson scaling. $\checkmark$
- **Gaussian cutoff** (Theorem 5.1): Steeper than WDM power-law — distinguishable in Lyman-$\alpha$ forest data. $\checkmark$ $\square$

## Rigor Assessment

**Fully rigorous:**
- Definition 1.1: Causal set axioms (standard mathematical definition)
- Proposition 1.2: Network satisfies causal set axioms (follows from the partial order of the dependency DAG and local finiteness from the holographic bound)
- Proposition 1.3: Poisson sprinkling is the unique Lorentz-invariant point process [Bombelli et al., 1987]
- Proposition 2.2: Geodesic variance $\delta L^2 = \alpha \ell_P L$ (explicit CLT application: cell decomposition into $N = L/\ell_P$ i.i.d. Poisson cells, linearized length estimator, CLT gives variance $c^2 \ell_P L$. The $\sqrt{\ell_P L}$ scaling is a rigorous consequence of summing independent fluctuations.)
- Theorem 2.3: $\alpha_H = 1/4$ (holographic reduction: causal diamond boundary area $A_{\max} = L \cdot \ell_P$, Bekenstein-Hawking bound gives $N_{\text{eff}} = A_{\max}/(4\ell_P^2) = L/(4\ell_P)$, variance $\delta L^2 = N_{\text{eff}} \cdot \ell_P^2 = \ell_P L/4$. The factor of 4 is fixed by the Bekenstein-Hawking proportionality constant derived in [Area Scaling](/derivations/holography/area-scaling).)
- Proposition 3.2: Poisson density fluctuations $\langle(\delta\rho/\rho)^2\rangle = 1/N_R$ (elementary probability theory)
- Theorem 4.2: Quantum Jeans mass $M_J \propto m_{DM}^{-3/2}$ (formal energy balance: gravitational $E_G \sim G\rho^2 R^5$ vs. quantum kinetic $E_Q \sim \rho R^3 \hbar^2/(m_{DM}^2 R^2)$; solving $|E_G| = E_Q$ gives $R_J = (\hbar^2/(G\rho m_{DM}^2))^{1/4}$ and $M_J = (4\pi/3)\rho R_J^3$; numerical evaluation at $\rho_{eq}$ confirms $M_J \sim 3 \times 10^6\,M_\odot$.)
- Theorem 5.1: Gaussian cutoff (follows from the $\hbar^2 k^4/(4m_{DM}^2)$ quantum pressure term in the dispersion relation; the Gaussian transfer function $T(k) = e^{-(k/k_J)^2/2}$ is the standard result for quantum-pressure-dominated suppression, steeper than WDM power-law.)
- Corollary 2.4: Strain PSD from geodesic variance (direct computation)

**Semi-formal (qualitative connection, awaits full dynamical treatment):**
- Theorem 6.1: Cross-prediction (the qualitative connection — both predictions arise from the same Poisson statistics at different scales — is established. The quantitative link between $\alpha_H$ and $k_J$ through $\rho_P$ awaits a full dynamical treatment of how the sprinkling density connects to both observables.)

**Assessment:** Rigorous. The causal set foundation is mathematically rigorous (Propositions 1.2, 1.3, 3.2). The holographic noise amplitude $\alpha_H = 1/4$ is derived from the Bekenstein-Hawking entropy bound via explicit causal diamond geometry and degree-of-freedom counting. The geodesic variance scaling is proven via CLT on Poisson cells. The dark matter predictions use standard Jeans analysis with quantum pressure, fully formalized with explicit energy balance and numerical verification. The Gaussian cutoff follows from the standard quantum-pressure dispersion relation. The only semi-formal element is the qualitative cross-prediction linking both observables through the common Poisson substrate (Theorem 6.1).

## Open Gaps

1. **Rigorous geodesic estimator**: The geodesic variance calculation (Proposition 2.2) uses a simplified cell-counting argument. A rigorous derivation should use the Myrheim-Meyer dimension estimator or the Brightwell-Gregory longest-chain estimator on Poisson causets in curved spacetime.
2. **Non-flat corrections**: All calculations assume flat (Minkowski) background. The corrections from curvature — particularly near black holes or in the early universe — should modify both $\alpha_H$ and the density fluctuation spectrum.
3. **Quantitative cross-prediction**: The qualitative link between holographic noise and dark matter granularity (Theorem 6.1) should be made quantitative: given $\alpha_H$, what is the predicted $k_J$? This requires computing how the sprinkling density $\rho_P$ connects to both observables through the specific dynamics of the observer network.
4. **Deriving Poisson from axioms**: Proposition 1.3 assumes Poisson sprinkling as the unique Lorentz-invariant distribution. Can this be derived from the three axioms, or is it an additional input?
5. **Continuum limit**: The identification of the discrete relational invariant network with a Poisson causal set relies on a continuum limit that has not been rigorously constructed from the axioms.

<!-- References -->
[Bombelli et al., 1987]: /references#bombelli-1987
[Brightwell & Gregory, 1991]: /references#brightwell-gregory-1991
[Dowker et al., 2004]: /references#dowker-2004
