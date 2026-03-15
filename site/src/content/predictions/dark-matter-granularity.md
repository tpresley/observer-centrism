---
title: "Dark Matter Granularity"
status: "semi-quantitative"
testability: "near-future"
dependsOn: ["minimal-observer/structure", "axioms/loop-closure", "particles/mass-hierarchy", "holography/causal-set-statistics"]
currentEvidence: "Missing satellites problem and small-scale structure suppression in dwarf galaxies are consistent; Lyman-alpha forest constrains the free-streaming length"
distinctiveness: "unique"
---

## Prediction

Dark matter particles are stable observer loops. The loop closure condition (Axiom 3) imposes a **minimum coherence domain size** — the de Broglie wavelength $\lambda_{dB} = \hbar/(m_{DM}v)$ — below which dark matter cannot form self-gravitating structures. This quantum pressure creates:

1. A **minimum halo mass** $M_J$ below which no dark matter halos form
2. **Solitonic cores** in the centers of all dark matter halos (constant density, not cusped)
3. **Granular substructure** from interference between overlapping coherence domains

The mechanism is **loop closure pressure** (quantum pressure from the Heisenberg uncertainty principle applied to observer loops), not thermal free-streaming. This gives a different scaling from warm dark matter: $M_J \propto m_{DM}^{-3/2}$ (loop closure) vs. $M_{\min} \propto m_{DM}^{-4}$ (free-streaming). The predictions are parameterized by the dark matter mass $m_{DM}$ and connect to the holographic noise prediction through the shared discrete relational structure.

## Quantitative Summary

| Quantity | Formula | Value ($m_{DM} = 10^{-22}$ eV) |
|---|---|---|
| Compton wavelength | $\lambda_C = \hbar/(m_{DM}c)$ | $0.6$ pc |
| De Broglie wavelength ($v = 200$ km/s) | $\lambda_{dB} = \hbar/(m_{DM}v)$ | $600$ pc |
| Loop closure period | $T = 2\pi\hbar/(m_{DM}c^2)$ | $1.3$ yr |
| Quantum Jeans mass | $M_J \sim (\hbar^6\rho_{\text{vir}})^{1/4}/(m_{DM}^{3/2}G^{3/4})$ | $\sim 10^{6\text{--}7} M_\odot$ |
| Solitonic core radius | $r_c \sim \lambda_{dB}/2$ | $\sim 300$ pc |
| Density granularity scale | $\delta\rho/\rho \sim 1$ on scale $\lambda_{dB}$ | Detectable in simulations |

## Derivation

### Step 1: Dark Matter as Observer Loops

**Proposition 1.1 (Universality).** *Any persistent, self-maintaining physical structure — including dark matter particles — is an observer in the sense of Axiom 2.*

By [Observer Definition](/derivations/axioms/observer-definition), an observer is a triple $(\Sigma, I, \mathcal{B})$ with a non-trivial self-transformation group. By [Loop Closure](/derivations/axioms/loop-closure), the observer's internal dynamics are cyclic with period $T$. Dark matter particles are stable (they persist for cosmological timescales), so they must satisfy exact or near-exact loop closure ($\epsilon \approx 0$ in the notation of [Loop Closure](/derivations/axioms/loop-closure), Definition 5.1).

**Proposition 1.2 (Dark matter properties).** *Dark matter observer loops have:*
- *A $U(1)$ phase $\theta \in S^1$ (from [Minimal Observer Structure](/derivations/minimal-observer/structure))*
- *A conserved charge $Q_{DM}$ (the "dark charge" that prevents decay)*
- *A coherence domain $\mathcal{D}_{DM}$ with characteristic size $\lambda_C = \hbar/(m_{DM}c)$*
- *Very weak coupling to Standard Model observer loops (dark matter interacts gravitationally but not electromagnetically)*

### Step 2: The Coherence Domain and Quantum Pressure

**Definition 2.1.** The **loop closure wavelength** of a dark matter particle of mass $m_{DM}$ is its Compton wavelength:

$$\lambda_C = \frac{\hbar}{m_{DM} c}$$

This is the minimum spatial extent of the observer loop in its rest frame, set by the loop closure condition $L = cT$ ([Speed of Light](/derivations/spacetime/speed-of-light), Theorem 3.1) with $T = 2\pi\hbar/(m_{DM}c^2)$ ([Loop Closure](/derivations/axioms/loop-closure), Proposition 7.1).

**Proposition 2.2 (Effective coherence domain in a halo).** *In a gravitationally bound halo where dark matter has virial velocity $v$, the effective coherence domain size is the de Broglie wavelength:*

$$\lambda_{dB} = \frac{\hbar}{m_{DM} v} = \lambda_C \cdot \frac{c}{v}$$

*This is the scale below which the dark matter's wave nature dominates over its particle nature.*

*Proof.* In the halo rest frame, the dark matter particle has momentum $p = m_{DM} v$. The loop closure condition in the moving frame gives a spatial extent $\lambda_{dB} = \hbar/p = \hbar/(m_{DM}v)$ ([Action and Planck's Constant](/derivations/thermodynamics/action-planck), uncertainty relation $\Delta x \cdot \Delta p \geq \hbar$). For a typical galaxy with $v \sim 200$ km/s, $c/v \sim 1500$, so $\lambda_{dB} \sim 1500 \lambda_C$. $\square$

### Step 3: The Quantum Jeans Mass

**Theorem 3.1 (Minimum halo mass from loop closure).** *The quantum Jeans mass — the minimum mass for which gravitational self-binding exceeds quantum (loop closure) pressure — is:*

$$\boxed{M_J = \left(\frac{\pi \hbar^6 \rho_{\text{vir}}}{6 \, m_{DM}^6 G^3}\right)^{1/4}}$$

*where $\rho_{\text{vir}} \approx 200\rho_{\text{crit}}$ is the virial overdensity.*

*Derivation.* Consider a self-gravitating sphere of $N$ dark matter particles of mass $m_{DM}$, total mass $M = Nm_{DM}$, radius $R$, and uniform density $\rho = 3M/(4\pi R^3)$.

**Gravitational energy:**

$$E_G = -\frac{3GM^2}{5R}$$

**Quantum kinetic energy** (from loop closure pressure — dark matter is bosonic, so all $N$ particles occupy the same ground state with momentum uncertainty $\Delta p \sim \hbar/R$):

$$E_Q = N \cdot \frac{(\hbar/R)^2}{2m_{DM}} = \frac{N\hbar^2}{2m_{DM} R^2} = \frac{\hbar^2 M}{2m_{DM}^{2} R^2}$$

Setting $|E_G| = E_Q$ gives the Jeans radius:

$$R_J = \frac{5\hbar^2 M}{6 G M^2 m_{DM}^{2}} = \frac{5\hbar^2}{6 G m_{DM}^{2} M}$$

Using $M = (4\pi/3)R_J^3 \rho_{\text{vir}}$ and solving for $M$:

$$M^{4/3} = \frac{5\hbar^2}{6Gm_{DM}^{2}} \cdot \left(\frac{4\pi\rho_{\text{vir}}}{3}\right)^{1/3}$$

$$M_J = \left(\frac{5}{6}\right)^{3/4} \cdot \frac{\hbar^{3/2}}{G^{3/4} m_{DM}^{3/2}} \cdot \left(\frac{4\pi\rho_{\text{vir}}}{3}\right)^{1/4} \sim \frac{\hbar^{3/2} \rho_{\text{vir}}^{1/4}}{G^{3/4} m_{DM}^{3/2}}$$

(absorbing numerical factors of order unity). $\square$

**Corollary 3.2 (Scaling law).** *The minimum halo mass scales as $m_{DM}^{-3/2}$ in the standard parameterization:*

$$M_J \approx 3 \times 10^6 \left(\frac{m_{DM}}{10^{-22}\text{ eV}/c^2}\right)^{-3/2} M_\odot$$

*This is the quantum Jeans scaling, distinct from the thermal free-streaming scaling $M_{\min} \propto m_{DM}^{-4}$ of warm dark matter.*

### Step 4: The Solitonic Core

**Proposition 4.1 (Ground-state core).** *Below the Jeans scale, the dark matter settles into a coherence-domain ground state — a solitonic core with approximately constant density:*

$$\rho_{\text{core}}(r) \approx \rho_0 \left[1 + c_1\left(\frac{r}{r_c}\right)^2\right]^{-8}$$

*where $r_c \sim \lambda_{dB}/2$ is the core radius and $c_1 \approx 0.091$ is a numerical constant.*

*Derivation.* The dark matter in the core region satisfies the Schrödinger-Poisson system (the non-relativistic limit of the loop closure dynamics in a gravitational potential):

$$i\hbar\frac{\partial\psi}{\partial t} = -\frac{\hbar^2}{2m_{DM}}\nabla^2\psi + m_{DM}\Phi\,\psi$$
$$\nabla^2\Phi = 4\pi G m_{DM}|\psi|^2$$

where $\psi$ is the dark matter wave function (the macroscopic phase of the overlapping observer loops) and $\Phi$ is the gravitational potential. The ground state solution of this coupled system is the solitonic profile above, established numerically by cosmological simulations. $\square$

**Proposition 4.2 (Core-halo relation).** *The solitonic core mass $M_c$ scales with the total halo mass $M_h$ as:*

$$M_c \propto M_h^{1/3}$$

*This means smaller halos are more core-dominated (larger core fraction). The minimum halo $M_J$ is essentially all core — it is the ground state of the Schrödinger-Poisson system.*

### Step 5: Granular Substructure

**Proposition 5.1 (Interference granularity).** *Outside the solitonic core, the dark matter consists of overlapping coherence domains with random phases. The interference between these domains creates density fluctuations:*

$$\frac{\delta\rho}{\rho} \sim 1 \quad \text{on scale } \lambda_{dB}$$

*The pattern is time-dependent, with a coherence time $\tau_c \sim \hbar/(m_{DM}v^2)$.*

*Derivation.* Each DM particle occupies a coherence domain of size $\sim \lambda_{dB}$. In the halo, many coherence domains overlap. The total wave function is:

$$\psi(\mathbf{x}) = \sum_{i=1}^{N} a_i \, e^{i(\mathbf{k}_i \cdot \mathbf{x} - \omega_i t)}$$

where $|\mathbf{k}_i| \sim m_{DM}v/\hbar$ and the phases are random. The density $|\psi|^2$ exhibits granular fluctuations with:

- Characteristic spatial scale: $\lambda_{dB} = 2\pi\hbar/(m_{DM}v)$
- Characteristic temporal scale: $\tau_c = 2\pi\hbar/(m_{DM}v^2)$
- Amplitude: $\delta\rho/\rho \sim 1/\sqrt{N_{\text{cell}}}$ where $N_{\text{cell}}$ is the number of coherence domains overlapping at a point

In the central regions of dwarf galaxies (where $N_{\text{cell}}$ is modest), the granularity can be of order unity — producing observable density fluctuations. $\square$

### Step 6: Matter Power Spectrum Suppression

**Proposition 6.1 (Power spectrum cutoff).** *The matter power spectrum is suppressed below a characteristic wavenumber:*

$$k_J = \left(\frac{6\pi G \rho_0 m_{DM}^2}{\hbar^2}\right)^{1/4}$$

*Below $k_J$ (large scales), the DM behaves as cold dark matter. Above $k_J$ (small scales), quantum pressure prevents collapse and the power spectrum is exponentially suppressed:*

$$P(k) \propto P_{\text{CDM}}(k) \cdot e^{-(k/k_J)^2}$$

*This Gaussian suppression is steeper than the warm dark matter transfer function, which falls as a power law. The shape difference is a distinguishing test.*

## Numerical Predictions

### Minimum Halo Mass vs. Dark Matter Mass

| $m_{DM}$ (eV/$c^2$) | $\lambda_C$ | $\lambda_{dB}$ ($v = 200$ km/s) | $M_J$ ($M_\odot$) | Status |
|---|---|---|---|---|
| $10^{-24}$ | $60$ pc | $10^5$ pc | $\sim 10^{10}$ | **Excluded** (suppresses Milky Way-mass halos) |
| $10^{-23}$ | $6$ pc | $10^4$ pc | $\sim 3 \times 10^{8}$ | Marginally consistent |
| $10^{-22}$ | $0.6$ pc | $600$ pc | $\sim 3 \times 10^{6}$ | **Consistent** with observations |
| $10^{-21}$ | $0.06$ pc | $60$ pc | $\sim 10^{5}$ | Consistent; weaker observational signatures |
| $10^{-20}$ | $0.006$ pc | $6$ pc | $\sim 3 \times 10^{3}$ | Negligible effect on structure |
| $10^{-18}$ | $60$ nm | $0.06$ pc | $\sim 1$ | Indistinguishable from CDM |
| $1$ keV | $2\times10^{-13}$ m | — | $\sim 10^{-33}$ | Pure CDM behavior |

### Observationally Preferred Range

Current observations constrain the DM mass in the loop closure (quantum pressure) scenario:

**Lower bound** ($m_{DM} \gtrsim 10^{-23}$ eV): Lyman-alpha forest measurements require sufficient small-scale power. Masses below $\sim 10^{-23}$ eV suppress too much structure. Strong gravitational lensing constrains the minimum halo mass to $M_{\min} \lesssim 10^{8\text{--}9} M_\odot$.

**Upper bound** (no strict upper bound): For $m_{DM} \gtrsim 10^{-20}$ eV, the quantum pressure effects become too small to detect with current observations. The prediction becomes indistinguishable from CDM.

**Sweet spot:** $10^{-22}$ eV $\lesssim m_{DM} \lesssim 10^{-20}$ eV — observable effects in dwarf galaxy populations, halo density profiles, and gravitational lensing substructure.

## Comparison with Competing Models

| Feature | Observer-centrism (loop closure) | Fuzzy DM (scalar field) | Warm DM (thermal relic) | CDM (WIMP) |
|---|---|---|---|---|
| Mechanism | Quantum pressure from loop closure | Quantum pressure from wave mechanics | Free-streaming | None (no cutoff) |
| Scaling | $M_J \propto m^{-3/2}$ | $M_J \propto m^{-3/2}$ | $M_{\min} \propto m^{-4}$ | $M_{\min} \sim 10^{-6} M_\odot$ |
| Core structure | Solitonic (ground state) | Solitonic (ground state) | Phase-space limited | NFW cusp |
| Granularity | Interference + causal set | Interference only | None | None |
| Power spectrum | Gaussian cutoff $e^{-(k/k_J)^2}$ | Gaussian cutoff | Power-law cutoff | No cutoff |
| Connection to quantum gravity | Yes (holographic noise) | No | No | No |
| Internal structure | Observer loop ($U(1)$ phase) | Scalar field oscillation | Thermal particle | Point particle |

### What Distinguishes Loop Closure DM from Fuzzy DM

The quantum Jeans mass and solitonic core structure are shared between loop closure DM and standard fuzzy DM — both arise from quantum pressure. The distinguishing features are:

1. **Cross-prediction with holographic noise.** Both predictions originate from the same discrete relational structure. The Planck-scale causal set that produces holographic noise also determines the dark matter coherence domain statistics. A detection of holographic noise at amplitude $\alpha_H$ constrains the dark matter granularity amplitude.

2. **Density fluctuation statistics.** In the framework, the granular density fluctuations follow the statistics of the underlying causal set — which is Poisson rather than Gaussian. Standard fuzzy DM predicts Gaussian fluctuations (from random superposition of plane waves). The difference is measurable in simulations and potentially in observations of stellar heating by DM substructure.

3. **The dark matter charge.** The framework predicts that dark matter carries a conserved "dark charge" $Q_{DM}$ from loop closure — not just a mass. This charge ensures stability (no decay) and may produce dark matter self-interactions at the level set by the charge coupling. Standard fuzzy DM is a neutral scalar field with no self-interaction (unless added by hand).

4. **Coherence domain boundary.** Each DM particle has a well-defined coherence domain boundary ([Minimal Observer Structure](/derivations/minimal-observer/structure), Definition 5.1). At this boundary, the $U(1)$ symmetry breaks. The boundary structure may produce observable effects in DM-baryon interactions at the coherence domain scale.

## Experimental Tests

### Test 1: Dwarf Galaxy Counts

**Observable:** The number of satellite galaxies around Milky Way-mass hosts as a function of satellite mass.

**Prediction:** Suppressed below $M_J$. The halo mass function has a cutoff:

$$\frac{dn}{dM} \propto M^{-1.9} \cdot \text{erfc}\!\left(\frac{M_J}{M}\right)$$

**Current status:** The "missing satellites problem" and "too big to fail problem" are consistent with $M_J \sim 10^{6\text{--}8} M_\odot$. Upcoming surveys (Rubin/LSST, Roman Space Telescope) will detect fainter satellites, constraining $M_J$ to $\sim 10^{6} M_\odot$.

### Test 2: Halo Density Profiles

**Observable:** Inner density profiles of dwarf galaxies from stellar kinematics.

**Prediction:** Constant-density solitonic cores with radius $r_c \sim 300 (m_{DM}/10^{-22}\text{ eV})^{-1}(v/200\text{ km/s})^{-1}$ pc, not NFW cusps.

**Current status:** Many observed dwarf galaxies show cored profiles ("cusp-core problem"), consistent with the prediction. However, baryonic feedback can also produce cores — distinguishing loop closure cores from feedback cores requires precision measurements of the core-halo mass relation ($M_c \propto M_h^{1/3}$).

### Test 3: Strong Gravitational Lensing Substructure

**Observable:** Flux ratio anomalies in multiply-imaged quasars caused by dark matter subhalos.

**Prediction:** Suppressed subhalo population below $M_J$. The flux anomaly statistics depend on the minimum subhalo mass. For $m_{DM} = 10^{-22}$ eV, the suppression begins at $M \sim 10^7 M_\odot$, detectable with current lensing surveys.

**Current status:** Eight quadruple-image strong gravitational lenses constrain the WDM particle mass to $> 5.2$ keV (for thermal relics). In the loop closure scenario, the equivalent constraint on $m_{DM}$ is weaker because the cutoff shape differs (Gaussian vs. power-law).

### Test 4: Lyman-Alpha Forest

**Observable:** The small-scale power spectrum of the intergalactic medium.

**Prediction:** Suppressed power below wavenumber $k_J$, with Gaussian rather than power-law shape. The Gaussian cutoff is steeper than WDM and distinguishable in high-resolution quasar spectra.

**Current status:** Lyman-alpha forest data constrain WDM mass to $> 5.3$ keV (at 2$\sigma$). For loop closure DM with Gaussian cutoff, the constraint on $m_{DM}$ translates to $m_{DM} \gtrsim 2 \times 10^{-21}$ eV (approximate, pending detailed transfer function computation).

### Test 5: Stellar Stream Gaps

**Observable:** Gaps in cold stellar streams caused by encounters with dark matter subhalos.

**Prediction:** Reduced gap rate below $M_J$. For $m_{DM} = 10^{-22}$ eV, gaps from subhalos with $M < 10^7 M_\odot$ are absent.

**Current status:** Gaia and upcoming surveys are mapping streams with sufficient precision to detect or constrain gaps at the predicted scale.

## Connection to Holographic Noise

Both the holographic noise prediction and the dark matter granularity prediction originate from the discrete relational invariant network:

- **Holographic noise**: Position fluctuations from the Planck-scale causal set → strain noise in interferometers
- **Dark matter granularity**: Coherence domain structure of DM observer loops → minimum halo mass and density fluctuations

The connection is that the **same causal set statistics** govern both. The holographic noise amplitude $\alpha_H$ and the dark matter granularity statistics are determined by the same Poisson process of relational invariant generation. A measurement of $\alpha_H$ from interferometric cross-correlation constrains the variance of position fluctuations, which in turn constrains the coherence domain size and hence the dark matter granularity amplitude.

This cross-prediction is unique to the framework: no other approach to quantum gravity connects laboratory interferometry to cosmological dark matter structure.

## Rigor Assessment

**Rigorously established:**
- Proposition 1.1: Universality of the observer definition (axiomatic)
- Theorem 3.1: Quantum Jeans mass from loop closure pressure (standard quantum mechanics applied to self-gravitating systems)
- Corollary 3.2: $M_J \propto m_{DM}^{-3/2}$ scaling (algebraic consequence of Theorem 3.1)
- Proposition 6.1: Matter power spectrum suppression shape (follows from the Schrödinger-Poisson system)

**Well-motivated:**
- Proposition 4.1: Solitonic core profile (established numerically in fuzzy DM simulations; the profile shape is generic for the Schrödinger-Poisson ground state)
- Proposition 5.1: Interference granularity with $\delta\rho/\rho \sim 1$ on scale $\lambda_{dB}$ (follows from random-phase superposition)
- The observationally preferred mass range $10^{-22}$ to $10^{-20}$ eV (from current satellite counts and Lyman-alpha constraints)

**Open:**
- The dark matter mass $m_{DM}$ is not predicted from the axioms. It depends on the dark matter crystallization scale in the bootstrap hierarchy, which requires the full coherence geometry.
- The Poisson (vs. Gaussian) density fluctuation statistics are a framework-specific prediction that needs verification in dedicated simulations.
- The connection between $\alpha_H$ and the dark matter granularity amplitude is qualitative — a quantitative relation requires computing both from the same causal set model.
- The dark matter self-interaction strength from the dark charge coupling is not derived.

## Open Gaps

1. **Deriving $m_{DM}$**: The dark matter mass should be a crystallization scale in the [Mass Hierarchy](/derivations/particles/mass-hierarchy). Computing it from the coherence geometry would make the prediction fully quantitative.
2. **Dark matter self-interactions**: The dark charge $Q_{DM}$ implies self-interactions. The coupling strength should be derivable from the relational invariant structure. Self-interactions at the level $\sigma/m \sim 1$ cm²/g are observationally interesting (they would explain galaxy cluster core offsets).
3. **Multi-component DM**: The bootstrap hierarchy might produce multiple stable dark matter species at different crystallization scales. This would lead to a mixed DM scenario with multiple Jeans scales.
4. **Causal set simulations**: A full simulation of the causal set density fluctuation statistics, compared to standard fuzzy DM simulations, would sharpen the distinction between the predictions.
5. **Baryonic effects**: The interaction between the DM solitonic core and baryonic matter (stars, gas) modifies the core structure. A self-consistent treatment requires coupling the Schrödinger-Poisson system to baryonic hydrodynamics.
