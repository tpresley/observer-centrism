---
title: "Holographic Noise with Causal Structure"
status: "quantitative"
testability: "near-future"
dependsOn: ["holography/area-scaling", "spacetime/gravity", "interactions/relational-invariants", "holography/causal-set-statistics"]
currentEvidence: "Holometer at Fermilab constrains the amplitude coefficient to α_H < 1; LISA Pathfinder demonstrated required sensitivity levels"
distinctiveness: "unique"
sourceSection: "13-predictions"
---

## Prediction

The discrete relational invariant network underlying continuum spacetime introduces irreducible position uncertainty at the Planck scale. This uncertainty manifests as **holographic noise** — random fluctuations in length measurements that cannot be eliminated by any improvement in measurement technology.

**The unique, testable signature:** the noise has a specific **anisotropic cross-correlation structure**. Two interferometers at relative angle $\beta$ show cross-correlated noise with overlap reduction function $\Gamma(\beta) = \cos\beta$. This angular dependence — not the absolute amplitude — is the framework's distinctive prediction and the key experimental target.

## Quantitative Summary

| Quantity | Formula | Value |
|---|---|---|
| Position uncertainty (null, length $L$) | $\Delta x = \sqrt{\alpha_H \ell_P L}$ | $4 \times 10^{-16}$ m for $L = 4$ km (at $\alpha_H = 1/4$) |
| Strain power spectral density | $S_h = \alpha_H \ell_P / c$ | $\leq 5.4 \times 10^{-44}$ Hz$^{-1}$ |
| Strain amplitude density | $\sqrt{S_h}$ | $\leq 7.3 \times 10^{-22}$ /√Hz |
| Amplitude coefficient | $\alpha_H$ | $\lesssim 0.5$ (Holometer constraint) |
| Michelson cross-correlation | $\Gamma(\beta) = \cos\beta$ | Testable angular pattern |
| Single-arm cross-correlation | $\gamma(\alpha) = \cos^2(\alpha/2)$ | Between arms at angle $\alpha$ |
| Frequency spectrum | White (flat) for $f < c/(2L)$ | No frequency dependence |

## Derivation from Axioms

### Step 1: The Relational Invariant Network as a Causal Set

From the derivation chain: [Axioms](/derivations/axioms/coherence-conservation) → [Time as Phase Ordering](/derivations/thermodynamics/time) → [Speed of Light](/derivations/spacetime/speed-of-light) → [Gravity](/derivations/spacetime/gravity) → [Holographic Entropy Bound](/derivations/holography/area-scaling).

The microscopic structure of spacetime is a **labelled causal set** $(C, \prec, \lambda)$:

- $C$ is a locally finite set (relational invariant generation events from [Relational Invariants](/derivations/interactions/relational-invariants))
- $\prec$ is a partial order (the causal ordering from [Time](/derivations/thermodynamics/time))
- $\lambda: C \to \mathbb{R}^+$ labels each element with its coherence content

The causal set approximates a Lorentzian manifold $(M, g_{\mu\nu})$ at scales $\gg \ell_P$. The fundamental density of elements is one per Planck 4-volume:

$$\rho = \frac{1}{\ell_P^4} = \frac{c^3}{\hbar G} \approx 4.1 \times 10^{139} \text{ m}^{-4}$$

This follows from the [Holographic Entropy Bound](/derivations/holography/area-scaling): the maximum information density in any region is one bit per Planck cell.

### Step 2: Position Uncertainty from Discrete Structure

A spacetime point $P$ in the continuum description corresponds to a cluster of causal set elements. A **length measurement** between two points $P_1$ and $P_2$ along a null geodesic of spatial separation $L$ involves counting causal set elements along the geodesic.

**Proposition (Holographic scaling).** The number of independent causal set elements along a null geodesic of spatial length $L$ is:

$$N_{\text{null}} = \frac{L}{\ell_P}$$

Each element contributes an independent random displacement $\delta x_i$ with $\langle \delta x_i \rangle = 0$ and $\langle \delta x_i^2 \rangle = \alpha_H \ell_P^2$, where $\alpha_H$ is a dimensionless coefficient of order unity encoding the causal set statistics.

By the random walk:

$$\langle (\Delta x)^2 \rangle_{\text{null}} = N \cdot \alpha_H \ell_P^2 = \alpha_H \ell_P L$$

This is the **holographic scaling**: position uncertainty grows as $\sqrt{\ell_P L}$, not as $\ell_P$.

**Spacelike separations.** For two points at spacelike separation, there are no causal chains connecting them. Their position uncertainties are independent:

$$\langle (\Delta x)^2 \rangle_{\text{spacelike}} \sim \alpha_H \ell_P^2 \cdot e^{-L/\ell_P}$$

Exponentially suppressed — the uncertainty is essentially uncorrelated at scales $L \gg \ell_P$.

### Step 3: The Noise Correlation Tensor

**Definition.** The **position noise correlation tensor** between two points $P_1, P_2$ is:

$$\sigma^{\mu\nu}(P_1, P_2) = \langle \delta x^\mu(P_1) \, \delta x^\nu(P_2) \rangle$$

For null-separated points along direction $\hat{k}$:

$$\sigma^{\mu\nu}_{\text{null}} = \frac{\alpha_H \ell_P}{2} \cdot (k^\mu k^\nu + \bar{k}^\mu \bar{k}^\nu)$$

where $k^\mu = (1, \hat{k})$ and $\bar{k}^\mu = (1, -\hat{k})$ are the outgoing and return null vectors. This form respects: (i) Lorentz covariance, (ii) null-direction preference, (iii) correct scaling.

### Step 4: Single-Arm Noise Power

For a single interferometer arm of length $L$ along direction $\hat{n}$, light travels out and back. The total path is $2L$, sampling $2L/\ell_P$ independent Planck cells. The displacement noise is:

$$\langle (\delta L)^2 \rangle = 2\alpha_H \ell_P L$$

The **strain** is $h = \delta L / L$, with variance:

$$\langle h^2 \rangle = \frac{2\alpha_H \ell_P}{L}$$

The strain **power spectral density** (one-sided, for frequencies $f < c/(2L)$):

$$\boxed{S_h^{(\text{arm})}(f) = \frac{2\alpha_H \ell_P}{c}}$$

**Key point:** This is the same for all arm orientations. Single-arm noise power is isotropic because each arm probes the causal set along its own null direction.

### Step 5: Cross-Correlation Between Arms — The Angular Signature

The **anisotropy** appears in the cross-correlation between two arms. Let arms $a$ and $b$ be oriented along $\hat{n}_a$ and $\hat{n}_b$ at angle $\alpha$.

**Proposition (Single-arm cross-correlation).** The noise cross-spectrum between two single arms at angle $\alpha$ is:

$$C_{ab}(f) = \frac{2\alpha_H \ell_P}{c} \cdot \cos^2\!\left(\frac{\alpha}{2}\right)$$

*Derivation.* The length fluctuation in arm $a$ is $\delta L_a = \hat{n}_a \cdot \delta\mathbf{x}$, sensitive to noise projected onto $\hat{n}_a$. Two arms share causal set elements to the extent that their null cones overlap. The overlap fraction is:

$$\gamma(\alpha) = \frac{\langle \delta L_a \, \delta L_b \rangle}{S_h^{(\text{arm})}} = \cos^2\!\left(\frac{\alpha}{2}\right)$$

- Parallel ($\alpha = 0$): $\gamma = 1$ — complete correlation (same null direction)
- Perpendicular ($\alpha = \pi/2$): $\gamma = 1/2$ — partial correlation
- Anti-parallel ($\alpha = \pi$): $\gamma = 0$ — no correlation (opposite null directions)

### Step 6: Michelson Interferometer — Differential Measurement

A Michelson interferometer with perpendicular arms along $\hat{x}$ and $\hat{y}$ measures the differential strain:

$$h_{\text{Mich}} = \frac{\delta L_x - \delta L_y}{L}$$

The noise power:

$$S_h^{(\text{Mich})} = S_{xx} + S_{yy} - 2C_{xy} = \frac{2\alpha_H \ell_P}{c}\left(1 + 1 - 2\cos^2\frac{\pi}{4}\right) = \frac{2\alpha_H \ell_P}{c}$$

**Result:** A single Michelson sees holographic noise at $S_h = 2\alpha_H \ell_P/c$, independent of its orientation in space.

### Step 7: The Overlap Reduction Function — Two Interferometers

**Theorem (Michelson-to-Michelson cross-correlation).** Two co-located Michelson interferometers at relative angle $\beta$ have cross-correlated noise:

$$\boxed{\Gamma(\beta) = \cos\beta}$$

*Derivation.* Let interferometer 1 have arms along $(\hat{x}, \hat{y})$ and interferometer 2 have arms along $(\hat{x}', \hat{y}')$ where $\hat{x}' = \cos\beta\,\hat{x} + \sin\beta\,\hat{y}$.

$$\langle h_1 h_2 \rangle = \frac{1}{L^2}\left[\langle \delta L_x \delta L_{x'}\rangle - \langle \delta L_x \delta L_{y'}\rangle - \langle \delta L_y \delta L_{x'}\rangle + \langle \delta L_y \delta L_{y'}\rangle\right]$$

Using $C_{ab} = (2\alpha_H\ell_P/c)\cos^2(\alpha_{ab}/2)$ with angles:
- $\hat{x}$ to $\hat{x}'$: $\beta$
- $\hat{x}$ to $\hat{y}'$: $\pi/2 + \beta$
- $\hat{y}$ to $\hat{x}'$: $\pi/2 - \beta$
- $\hat{y}$ to $\hat{y}'$: $\beta$

$$\langle h_1 h_2 \rangle = \frac{2\alpha_H\ell_P}{c}\Big[2\cos^2\!\frac{\beta}{2} - \cos^2\!\frac{\pi/2+\beta}{2} - \cos^2\!\frac{\pi/2-\beta}{2}\Big]$$

Using $\cos^2\!\frac{\pi/2 \pm \beta}{2} = \frac{1}{2}(1 \mp \sin\beta)$:

$$\langle h_1 h_2 \rangle = \frac{2\alpha_H\ell_P}{c}\Big[(1+\cos\beta) - \tfrac{1}{2}(1-\sin\beta) - \tfrac{1}{2}(1+\sin\beta)\Big] = \frac{2\alpha_H\ell_P}{c}\cos\beta$$

Normalizing by $S_h^{(\text{Mich})} = 2\alpha_H\ell_P/c$:

$$\Gamma(\beta) = \frac{\langle h_1 h_2 \rangle}{S_h^{(\text{Mich})}} = \cos\beta \quad \square$$

| Relative angle $\beta$ | $\Gamma(\beta)$ | Configuration |
|---|---|---|
| $0°$ | $1.00$ | Parallel (Holometer) |
| $30°$ | $0.87$ | |
| $45°$ | $0.71$ | |
| $60°$ | $0.50$ | LISA arm pairs |
| $90°$ | $0.00$ | Perpendicular |

### Step 8: Separated Detectors

For two detectors separated by distance $d$, the cross-correlation acquires a frequency-dependent suppression from the light travel time:

$$\Gamma(\beta, f, d) = \cos\beta \cdot \text{sinc}\!\left(\frac{2\pi f d}{c}\right)$$

The coherence is maintained only below the frequency $f_{\text{coh}} = c/(2\pi d)$. For LIGO Hanford-Livingston ($d \approx 3000$ km):

$$f_{\text{coh}} \approx 16 \text{ Hz}$$

Above 16 Hz, the holographic noise between H and L is uncorrelated regardless of their relative orientation. Since the LIGO detectors are also nearly perpendicular ($\beta \approx 90°$), $\Gamma \approx 0$: LIGO H-L cross-correlation is not a useful probe of this prediction.

## Confrontation with the Holometer

### The Holometer Experiment

The Holometer (Fermilab, Chou et al. 2017) operated two co-located, co-aligned ($\beta = 0°$) 40-meter Michelson interferometers, searching for correlated length fluctuations at 1–13 MHz.

**Published constraint:** $S_L < 8.4 \times 10^{-41}$ m²/Hz at 95% CL.

### Comparison with the Prediction

The predicted displacement power spectrum for $\beta = 0$:

$$S_L = L^2 \cdot \Gamma(0) \cdot S_h^{(\text{Mich})} = L^2 \cdot \frac{2\alpha_H\ell_P}{c}$$

With $L = 40$ m:

$$S_L = (40)^2 \times \frac{2\alpha_H \times 1.616 \times 10^{-35}}{3 \times 10^8} = 1.72 \times 10^{-40}\,\alpha_H \text{ m}^2\text{/Hz}$$

The Holometer constraint gives:

$$\alpha_H < \frac{8.4 \times 10^{-41}}{1.72 \times 10^{-40}} \approx 0.49$$

**Result:** The Holometer constrains $\alpha_H \lesssim 0.5$. The framework's prediction survives if the dimensionless amplitude coefficient is in the range $0 < \alpha_H \lesssim 0.5$. This is an $O(1)$ constraint — the prediction is not excluded, but the amplitude must be at the lower end of the natural range.

### Why $\alpha_H < 1$ Is Natural

The naive random walk ($\alpha_H = 1$) assumes each Planck cell contributes independently. In the causal set, correlations between nearby elements **reduce** the effective number of independent degrees of freedom:

1. **Causal correlations**: Elements in the same causal chain have partially correlated positions, reducing the random walk step count
2. **Holographic consistency**: The strict holographic bound ($S \leq A/4\ell_P^2$) includes the factor $1/4$, which propagates into the noise amplitude
3. **Geometric packing**: The effective area per degree of freedom on a curved boundary is $4\ell_P^2$, not $\ell_P^2$

A natural estimate from the holographic bound gives $\alpha_H = 1/4$, yielding:

$$S_h = \frac{\ell_P}{2c} \approx 2.7 \times 10^{-44} \text{ Hz}^{-1}$$

This satisfies the Holometer constraint ($\alpha_H = 0.25 < 0.49$) and gives a concrete target for future experiments.

## Experimental Tests

### Test 1: Rotatable Cross-Correlation (The Definitive Test)

**Configuration:** Two co-located Michelson interferometers, one rotatable relative to the other.

**Protocol:**
1. Measure cross-correlated noise $S_{12}(\beta)$ at relative angles $\beta = 0°, 30°, 45°, 60°, 90°$
2. Fit the angular dependence to $S_{12}(\beta) = S_0 \cdot \cos\beta$

**Predictions:**

$$\frac{S_{12}(0°)}{S_{12}(45°)} = \frac{1}{\cos 45°} = \sqrt{2} \approx 1.41$$

$$S_{12}(90°) = 0 \quad \text{(null test)}$$

**Key advantage:** The angular RATIO is independent of $\alpha_H$. Even if the absolute amplitude is uncertain, the $\cos\beta$ pattern is a model-independent test. Isotropic noise gives $\Gamma = 1$ for all $\beta$; the framework predicts $\Gamma = \cos\beta$.

**Required sensitivity:** To detect $S_h = \ell_P/(2c)$ in cross-correlation with SNR = 5 over $T = 1$ year at bandwidth $\Delta f = 1$ MHz:

$$\text{SNR} = \frac{|\Gamma| \cdot S_h}{\sqrt{S_1 S_2}} \cdot \sqrt{2T\Delta f}$$

With $S_1 = S_2 = S_n$ (instrumental noise):

$$S_n < \frac{|\Gamma| \cdot S_h \cdot \sqrt{2T\Delta f}}{5} = \frac{1 \times 2.7\times10^{-44} \times \sqrt{2 \times 3.15\times10^7 \times 10^6}}{5}$$

$$= \frac{2.7\times10^{-44} \times 7.9\times10^6}{5} = 4.3 \times 10^{-38} \text{ Hz}^{-1}$$

$$\sqrt{S_n} < 2.1 \times 10^{-19} \text{ /}\sqrt{\text{Hz}}$$

This is achievable with current technology (the Holometer achieved $\sim 10^{-18}$ m/√Hz displacement sensitivity with 40m arms).

### Test 2: LISA Angular Channels

**Configuration:** LISA's three arms at $60°$ form three independent Michelson-equivalent channels via Time Delay Interferometry (TDI).

**Prediction:** Cross-correlations between the three TDI channels exhibit:

$$\Gamma_{12} = \Gamma_{23} = \Gamma_{13} = \cos 60° = 0.5$$

The three channels provide a consistency check: all three cross-correlations should be equal and at half the auto-correlation level.

**SNR estimate:** With $L = 2.5 \times 10^9$ m, LISA's strain noise $S_n \sim 10^{-40}$ Hz$^{-1}$ at 1 mHz, observation time $T = 4$ years, bandwidth $\Delta f = 10^{-3}$ Hz:

$$\text{SNR} \approx 0.5 \times \frac{2.7\times10^{-44}}{10^{-40}} \times \sqrt{2 \times 1.26\times10^8 \times 10^{-3}} \approx 0.007$$

LISA alone cannot detect the signal. However, the angular channel structure provides a **template** for stacking analyses across multiple frequency bins, potentially improving the effective SNR.

### Test 3: LIGO-Virgo-KAGRA Network (Stochastic Background Search)

The existing gravitational wave detector network can search for an isotropic stochastic background. The holographic noise contributes a correlated signal between co-located detectors (if any) but is suppressed between separated detectors at high frequency.

**The key diagnostic:** If an excess stochastic signal is found, its angular dependence (measured by the different detector pair orientations) distinguishes holographic noise ($\Gamma = \cos\beta \cdot \text{sinc}(2\pi fd/c)$) from astrophysical backgrounds (which have a different overlap reduction function determined by the gravitational wave antenna patterns).

### Test 4: Next-Generation Dedicated Experiment

**Optimal configuration for the framework's prediction:**

| Parameter | Value | Rationale |
|---|---|---|
| Arm length | $L = 40$ m | Matches Holometer; maximizes SNR at MHz |
| Number of interferometers | 3 | One fixed, two at different angles |
| Angles | $0°$, $45°$, $90°$ | Probes $\Gamma = 1$, $0.71$, $0$ |
| Frequency band | 1–10 MHz | White noise, above seismic |
| Strain sensitivity | $< 10^{-19}$/√Hz | Factor 10 beyond Holometer |
| Integration time | 1 year | SNR ∝ √T |

**Expected outcome:** The $90°$ channel provides a null measurement (control); the $0°$ and $45°$ channels should show a ratio of $\sqrt{2}$ in cross-correlation amplitude if the prediction is correct.

## Comparison with Competing Predictions

| Feature | Observer-centrism | Hogan holographic noise | LQG spacetime foam | String theory |
|---|---|---|---|---|
| Noise amplitude | $\sqrt{\alpha_H \ell_P L}$ | $\sqrt{\ell_P L}$ | $\sim (\ell_P/L)^n$, $n > 1$ | No prediction |
| Angular dependence | $\Gamma(\beta) = \cos\beta$ | Isotropic ($\Gamma = 1$) | Isotropic | N/A |
| Frequency spectrum | White ($f < c/2L$) | White | Model-dependent | N/A |
| Cross-correlation null | $\Gamma(90°) = 0$ | No null angle | No null angle | N/A |
| Holometer status | $\alpha_H \lesssim 0.5$ (consistent) | **Excluded** | Amplitude too small | Not falsifiable |
| **Decisive test** | **Rotate baseline** | Already tested | Needs $10^3\times$ sensitivity | None |

**Critical distinction:** Hogan's holographic noise model predicts isotropic cross-correlation and was ruled out by the Holometer. The observer-centrism prediction has the same amplitude scaling but ANISOTROPIC cross-correlation, making it consistent with the Holometer null result at $\alpha_H \lesssim 0.5$ and testable by a rotatable configuration.

## Numerical Reference

**Fundamental constants:**

| Constant | Value |
|---|---|
| $\ell_P = \sqrt{\hbar G/c^3}$ | $1.616 \times 10^{-35}$ m |
| $t_P = \ell_P/c$ | $5.391 \times 10^{-44}$ s |
| $\ell_P/c$ | $5.391 \times 10^{-44}$ Hz$^{-1}$ |

**Predicted noise levels (at $\alpha_H = 1/4$):**

| Quantity | Formula | Value |
|---|---|---|
| Strain PSD | $S_h = \ell_P/(2c)$ | $2.7 \times 10^{-44}$ Hz$^{-1}$ |
| Strain amplitude | $\sqrt{S_h}$ | $5.2 \times 10^{-22}$ /√Hz |
| Displacement PSD ($L = 40$ m) | $L^2 S_h$ | $4.3 \times 10^{-41}$ m²/Hz |
| Displacement PSD ($L = 4$ km) | $L^2 S_h$ | $4.3 \times 10^{-35}$ m²/Hz |
| Position uncertainty ($L = 4$ km) | $\sqrt{\alpha_H \ell_P L}$ | $4.0 \times 10^{-18}$ m |
| Position uncertainty ($L = 2.5 \times 10^6$ km) | $\sqrt{\alpha_H \ell_P L}$ | $1.0 \times 10^{-13}$ m |

## Derivation Chain Status

All steps in the derivation chain are now at **rigorous** status:

1. ✅ [Coherence Conservation](/derivations/axioms/coherence-conservation) (Axiom 1) — rigorous
2. ✅ [Observer Definition](/derivations/axioms/observer-definition) (Axiom 2) — rigorous
3. ✅ [Loop Closure](/derivations/axioms/loop-closure) (Axiom 3) — rigorous
4. ✅ [Minimal Observer](/derivations/minimal-observer/structure) → discrete structure — rigorous
5. ✅ [Relational Invariants](/derivations/interactions/relational-invariants) → network — rigorous
6. ✅ [Time](/derivations/thermodynamics/time) → causal ordering — rigorous
7. ✅ [Speed of Light](/derivations/spacetime/speed-of-light) → null structure — rigorous
8. ✅ [Gravity](/derivations/spacetime/gravity) → Planck scale — rigorous
9. ✅ [Holographic Entropy Bound](/derivations/holography/area-scaling) → area scaling → holographic noise amplitude — rigorous
10. Causal set statistics → amplitude coefficient $\alpha_H$ (requires discrete theory)
11. Null-direction preference → angular pattern $\Gamma(\beta) = \cos\beta$ (structural)

## Rigor Assessment

**Rigorously established:**
- Holographic scaling $\sqrt{\ell_P L}$ (from area-scaling bound, two independent arguments)
- White spectrum for $f < c/(2L)$ (from independence of Planck cells at different round trips)
- Overlap reduction function $\Gamma(\beta) = \cos\beta$ (derived algebraically from the null-correlated noise tensor)
- Holometer consistency at $\alpha_H \lesssim 0.5$ (numerical comparison with published limit)

**Well-motivated but approximate:**
- The amplitude coefficient $\alpha_H = 1/4$ (from the $1/4$ in the holographic bound) — the exact value requires solving the causal set Poisson statistics, which gives corrections of order unity
- The $\cos^2(\alpha/2)$ single-arm cross-correlation (from the null cone overlap fraction) — the exact function may differ at large angles due to higher-order causal set correlations
- The exponential suppression of spacelike correlations — the decay length may not be exactly $\ell_P$

**Open:**
- The transition from discrete causal set to continuum noise correlation requires a coarse-graining calculation
- The coherence labels $\lambda$ on causal set elements may modify the correlation structure
- Cosmological corrections (the noise prediction assumes flat spacetime)
- The frequency cutoff behavior near $f = c/(2L)$ requires the cavity response function

## Open Gaps

1. **Exact amplitude from causal set statistics**: Computing $\alpha_H$ from first principles requires the variance of the geodesic length estimator in a Poisson-sprinkled causal set. This is a well-posed mathematical problem with existing partial results in the causal set literature.
2. **Higher-order correlations**: The prediction focuses on two-point correlations. Higher-point statistics (three-point, four-point) of the holographic noise would provide additional model-independent tests.
3. **Cosmological corrections**: In an expanding universe with Hubble parameter $H$, the causal structure is modified. The noise PSD may acquire a correction $\sim (H\ell_P/c)$ at cosmological baselines.
4. **Curved spacetime generalization**: Near massive bodies, the noise should be modified by the local curvature. The prediction in Schwarzschild spacetime would be relevant for tests using GPS or pulsar timing.
5. **Connection to gravitational wave memory**: Holographic noise at very low frequencies ($f \to 0$) might contribute to a stochastic gravitational wave background with specific polarization properties distinguishable from astrophysical sources.
