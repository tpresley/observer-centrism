---
title: "Holographic Noise with Causal Structure"
status: "semi-quantitative"
testability: "near-future"
dependsOn: ["holography/area-scaling", "spacetime/gravity", "interactions/relational-invariants"]
currentEvidence: "Holometer at Fermilab searched for related signatures; LISA Pathfinder demonstrated required sensitivity levels"
distinctiveness: "unique"
sourceSection: "13-predictions"
---

## Prediction

The discrete relational invariant network underlying continuum spacetime introduces irreducible position uncertainty at the Planck scale. This uncertainty manifests as **holographic noise** — random fluctuations in position measurements that cannot be eliminated by any improvement in measurement technology.

The key distinctive prediction: this noise has a specific **anisotropic correlation structure**. It is correlated along **null (light-cone) directions** more than along spacelike directions, because the dependency graph underlying the coherence geometry is ordered by causal relationships.

## Why This Prediction Is Unique

Most approaches to quantum gravity predict some form of Planck-scale discreteness. What distinguishes observer-centrism's prediction is the **directional structure** of the noise:

| Approach | Noise prediction |
|---|---|
| Generic Planck discreteness | Isotropic position uncertainty $\sim \ell_P$ |
| Loop quantum gravity | Area/volume quantization, specific spectra |
| String theory | No sub-Planck structure (strings smooth it out) |
| **Observer-centrism** | **Anisotropic noise correlated along null geodesics** |

The null correlation arises because:
1. The relational invariant network has a causal ordering (the dependency graph)
2. Edges in this graph connect events along causal (null or timelike) paths
3. Position uncertainty from the discrete structure inherits this causal alignment
4. Correlations between position measurements are stronger when the measurement events are connected by null paths in the dependency graph

## Derivation Chain

1. **Axioms** → Observers are real structures in a conserved coherence space
2. **Interactions** → Type III interactions create relational invariants
3. **Bootstrap** → Relational invariants accumulate into a network
4. **Geometry** → The network's large-scale average is smooth spacetime
5. **Holography** → Degrees of freedom scale with boundary area, not volume
6. **Discreteness** → Below the Planck scale, the network is individually visible
7. **Causal ordering** → Network edges follow the dependency (causal) structure
8. **Noise correlation** → Position uncertainty inherits the causal alignment → **null-correlated noise**

All steps now have draft-level derivations.

## Quantitative Formulation

### 1. The Relational Invariant Network as a Causal Set

Formalize the microscopic structure as a **labelled causal set** $(C, \prec, \lambda)$:

- $C$ is a locally finite set of elements (relational invariant generation events)
- $\prec$ is a partial order (the causal ordering from [Time as Phase Ordering](/derivations/thermodynamics/time))
- $\lambda: C \to \mathbb{R}^+$ labels each element with its coherence content

The causal set approximates a Lorentzian manifold $(M, g_{\mu\nu})$ at scales $\gg \ell_P$. The fundamental density of elements is:

$$\rho = \frac{1}{\ell_P^4} = \frac{c^3}{\hbar G}$$

one element per Planck 4-volume. This follows from the holographic bound: the maximum information density in any spacetime region is one bit per Planck cell.

### 2. Position Uncertainty from Discrete Structure

A spacetime point $P$ in the continuum description corresponds to a **cluster** of causal set elements. The position of $P$ has an irreducible uncertainty:

$$\delta x^\mu \sim \ell_P$$

in each direction. But the uncertainty is not isotropic in spacetime. It inherits the causal structure of the underlying set.

**Definition.** The **position uncertainty tensor** at a point $P$ is:

$$\sigma^{\mu\nu}(P) = \langle \delta x^\mu \, \delta x^\nu \rangle$$

where the average is over realizations of the causal set consistent with the macroscopic geometry.

### 3. The Two-Point Noise Correlation Function

The central observable is the **noise correlation function** between two spacetime events $P_1$ and $P_2$ separated by $\Delta x^\mu$:

$$\Xi^{\mu\nu\alpha\beta}(\Delta x) = \langle \delta x^\mu(P_1) \, \delta x^\nu(P_1) \, \delta x^\alpha(P_2) \, \delta x^\beta(P_2) \rangle - \sigma^{\mu\nu}(P_1) \, \sigma^{\alpha\beta}(P_2)$$

This measures the **correlated** part of the position uncertainty — the extent to which the noise at $P_1$ is statistically related to the noise at $P_2$.

**The key claim:** $\Xi$ depends on the causal relationship between $P_1$ and $P_2$.

### 4. Causal Dependence of Correlations

The correlation function has three regimes:

**Null separation** ($\Delta x^2 = 0$, $P_1$ and $P_2$ connected by a light ray):

$$\Xi_{\text{null}} \sim \frac{\ell_P^2}{L} \cdot \hat{k}^\mu \hat{k}^\nu \hat{k}^\alpha \hat{k}^\beta$$

where $L = |\Delta \mathbf{x}|$ is the spatial separation and $\hat{k}^\mu$ is the null direction. The $1/L$ scaling follows from the holographic bound: the number of independent causal set elements along a null geodesic of length $L$ scales as $L/\ell_P$, and the cumulative uncertainty is a random walk:

$$\delta x_{\text{cumulative}} \sim \ell_P \cdot \sqrt{N} = \ell_P \cdot \sqrt{L/\ell_P} = \sqrt{\ell_P \cdot L}$$

The variance is:

$$\langle (\delta x)^2 \rangle_{\text{null}} \sim \ell_P \cdot L$$

This is the **holographic scaling** — position uncertainty grows as $\sqrt{\ell_P L}$, not as $\ell_P$ (which would be the naive Planck-scale estimate).

**Timelike separation** ($\Delta x^2 > 0$):

$$\Xi_{\text{timelike}} \sim \frac{\ell_P^2}{L} \cdot f(v/c)$$

where $v$ is the relative velocity and $f(v/c)$ is a suppression factor with $f(1) = 1$ (null limit) and $f(0) \ll 1$ (static limit). The suppression for $v \ll c$ occurs because timelike-separated events share fewer causal set chains than null-separated events at the same spatial distance.

**Spacelike separation** ($\Delta x^2 < 0$):

$$\Xi_{\text{spacelike}} \sim \frac{\ell_P^2}{L} \cdot e^{-L/\ell_P}$$

Exponentially suppressed. Spacelike-separated events share no causal chains — their uncertainties are essentially independent. Correlations exist only through shared causal ancestors, which introduce exponential falloff.

### 5. Noise Power Spectrum for an Interferometer

For a Michelson interferometer with arm length $L$ measuring along direction $\hat{n}$, the noise power spectral density is:

$$\boxed{S_h(f) = \frac{\ell_P}{c} \cdot F(\theta)}$$

where $\theta$ is the angle between the interferometer arm $\hat{n}$ and the light propagation direction $\hat{k}$, and the **angular pattern function** is:

$$F(\theta) = \cos^2\theta$$

The $\cos^2\theta$ pattern arises because the noise is projected onto the interferometer arm. Maximum noise occurs when the arm is aligned with the light direction ($\theta = 0$, probing null correlations); zero noise when perpendicular ($\theta = \pi/2$, probing only spacelike correlations).

**Characteristic strain amplitude:**

$$h_{\text{holo}} \sim \sqrt{S_h \cdot f} \sim \sqrt{\frac{\ell_P \cdot f}{c}} \sim 10^{-22} \sqrt{\frac{f}{100 \text{ Hz}}}$$

At $f = 100$ Hz (LIGO band): $h_{\text{holo}} \sim 10^{-22}$, which is at the edge of current gravitational wave detector sensitivity.

At $f = 1$ mHz (LISA band): $h_{\text{holo}} \sim 10^{-24}$, potentially accessible by LISA.

### 6. The Distinguishing Signature

The unique signature that separates this prediction from all competing models:

**Test 1: Directional dependence.** Rotate the interferometer baseline. The noise power should follow $\cos^2\theta$:

$$\frac{S_h(\theta = 0)}{S_h(\theta = \pi/4)} = 2$$

Isotropic Planck-scale noise would give no angular dependence. The anisotropy is the smoking gun.

**Test 2: Cross-correlation between non-parallel interferometers.** Two interferometers at angle $\alpha$ should show:

$$\Xi_{12} \propto \cos^2\left(\frac{\alpha}{2}\right)$$

Maximum correlation when aligned ($\alpha = 0$); zero when perpendicular ($\alpha = \pi/2$).

**Test 3: Frequency scaling.** The power spectral density $S_h(f) = \ell_P/c$ is frequency-independent (white noise) — distinguishing it from instrumental noise (typically $1/f$ or steeper) and gravitational wave backgrounds (which have specific spectral shapes).

## Comparison with Competing Predictions

| Feature | Observer-centrism | Hogan holographic noise | LQG foam | String theory |
|---|---|---|---|---|
| Noise amplitude | $\sim \sqrt{\ell_P/L}$ | $\sim \sqrt{\ell_P/L}$ | $\sim (\ell_P/L)^n$, $n > 1$ | No prediction |
| Angular dependence | $\cos^2\theta$ | Isotropic | Isotropic | N/A |
| Frequency spectrum | White | White | Model-dependent | N/A |
| Cross-correlation | $\propto \cos^2(\alpha/2)$ | $\propto 1$ (isotropic) | $\propto 1$ | N/A |
| **Distinguishing test** | **Rotate baseline** | Ruled out by Holometer | Amplitude too small | Not falsifiable |

The Holometer at Fermilab (Hogan et al.) searched for isotropic holographic noise and found no signal. This result **does not constrain** the observer-centrism prediction because:
1. The Holometer's two interferometers were co-located and parallel — they primarily probed the $\alpha = 0$ cross-correlation
2. The null result is consistent with anisotropic noise if the Holometer's orientation was not optimal for the null-correlation signal
3. A definitive test requires measuring the angular dependence by rotating the baseline

## Experimental Landscape

### Current Experiments

**Holometer (Fermilab):** Two co-located 40m Michelson interferometers. Searched for correlated length fluctuations at MHz frequencies. Null result at isotropic sensitivity $\sim 10^{-21}/\sqrt{\text{Hz}}$. The result constrains isotropic models but not anisotropic ones.

**LIGO/Virgo/KAGRA:** Sensitivity $\sim 10^{-23}/\sqrt{\text{Hz}}$ at 100 Hz. The holographic noise is near the noise floor. A dedicated search for the specific angular pattern could be performed using existing data from detectors at different orientations and locations.

### Near-Future Experiments

**LISA (ESA/NASA, ~2035):** Three spacecraft in triangular formation, million-km baselines. Sensitivity $\sim 10^{-20}/\sqrt{\text{Hz}}$ at mHz. The triangular geometry provides three different baseline orientations, enabling a direct test of the angular pattern. The predicted signal-to-noise ratio:

$$\text{SNR} \sim h_{\text{holo}} \cdot \sqrt{T_{\text{obs}} / S_n} \sim \sqrt{\frac{\ell_P \cdot f \cdot T_{\text{obs}}}{c \cdot S_n}}$$

For $T_{\text{obs}} = 1$ year, $f = 1$ mHz, $S_n \sim 10^{-40}$ Hz$^{-1}$: SNR $\sim 1$. Marginal detection, but the angular pattern test may be feasible.

### Proposed Dedicated Experiment

An optimal experiment would have:
- Baseline length $L \sim 1$ km (maximizes $\sqrt{\ell_P/L}$ while maintaining technical feasibility)
- Rotatable baseline (to map the angular dependence)
- Sensitivity $\sim 10^{-22}/\sqrt{\text{Hz}}$ at $\sim 100$ Hz
- Two non-parallel interferometers for cross-correlation

The angular dependence prediction ($\cos^2\theta$) is testable with existing technology — the main requirement is a purpose-built rotatable interferometer.

## Rigor Assessment

**What is now established:**
- The derivation chain from axioms to the discrete causal set structure is complete at draft level
- The holographic scaling ($\sqrt{\ell_P L}$) follows from the area-scaling bound
- The null-direction preference follows from the causal ordering of the relational invariant network
- The $\cos^2\theta$ angular pattern follows from the projection of null-correlated noise onto the interferometer baseline
- The noise power spectral density has a definite form: $S_h(f) = \ell_P/c \cdot \cos^2\theta$

**What needs further work:**
- The exact coefficient in $S_h(f)$ (the factor in front of $\ell_P/c$) requires a detailed calculation from the causal set statistics — currently order-of-magnitude
- The suppression factor $f(v/c)$ for timelike separations needs derivation
- The cross-correlation formula for non-parallel interferometers should be derived from the full $\Xi^{\mu\nu\alpha\beta}$ tensor
- The transition from the discrete causal set to the continuum correlation function needs a proper coarse-graining calculation

## Open Gaps

1. **Exact amplitude coefficient**: The $S_h = \ell_P/c$ scaling is established, but the dimensionless prefactor (currently $\sim 1$) requires the full causal set calculation. This factor could be $4\pi$, $1/4$, or another geometric constant.
2. **Coherence labels**: The causal set elements carry coherence labels $\lambda$. How these labels affect the noise correlation is not yet computed.
3. **Cosmological background**: The noise prediction is for flat spacetime. In an expanding universe, the causal structure is modified — the noise power spectrum may have cosmological corrections.
4. **Detector response**: The full detector response function (including arm cavity effects, suspension noise coupling, etc.) needs to be convolved with the predicted noise spectrum for realistic detectability estimates.
