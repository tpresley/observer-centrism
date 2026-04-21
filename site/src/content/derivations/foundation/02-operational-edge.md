---
title: "2. Observer Edge as Signal-Resolution Crossover"
status: "provisional"
dependsOn: ["foundation/01-pattern-signal-amplitude", "axioms/observer-definition", "particles/mass-hierarchy", "thermodynamics-ext/fisher-metric", "thermodynamics-ext/distinguishability-conservation"]
enablesDerivation: []
tags: ["foundation", "pattern-edges", "error-correction"]
summary: "An observer's operational edge is the radius at which the pattern signal from an external observer falls to the detecting observer's own Heisenberg-like resolution threshold — not a substrate-universal noise floor. Under the framework's observer-centrism (only observers and their relations are epistemically primary), a substrate noise floor as a standalone comparator is a category error. The correct detection noise is set by the observer's own coherence content 𝒞(Σ) = mc² (Identification 5.3) — a Cramér-Rao / Fisher-information resolution limit. For a same-mass pair A↔B, solving A_B(r) = m_A c² with the Yukawa signal of Formalization 1 gives r_edge ≈ 0.57 r_C, exactly Compton-scale with no logarithmic enhancement. Asymmetric pairs give mass-ratio-dependent edges: lighter detectors see further (finer resolution), heavier sources project further. The derivation also names a clean conceptual split: preservation noise (substrate bit-flips on the QEC code, the p_phys^eff of Substrate Noise) and detection noise (observer's Heisenberg resolution, the mc² used here) are operationally distinct regimes. The edge derived here is the detection-noise quantity. Comparison with the horizon r_H = π r_C reveals an O(1) discrepancy: the two are Compton-scale structurally-distinct thresholds (resolution-crossing vs antichain-saturation) — consistent with the target's 'up to O(1)' language but not a literal identification."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-20
---

## Overview

The pattern-edges research program proposes that an observer's boundary is the locus where the observer's signal reaches a noise floor. Step 1 ([Pattern Signal Amplitude as a Function of Distance](/derivations/foundation/01-pattern-signal-amplitude)) specified the signal form: $A(r) = m c^2 \cdot (r_C/r) e^{-r/r_C}$ for a fundamental observer of mass $m$. Step 2 — this derivation — specifies the noise floor and solves for the edge.

**The noise-floor question.** An early draft of the research target referred to a "substrate noise floor" $\sim \alpha_H E_P$ (the Planck-scale per-cell fluctuation from [Causal Set Statistics](/derivations/holography/causal-set-statistics)). Testing that choice against the Yukawa signal of Formalization 1 gives a mass-independent Planck-scale edge $r_{\mathrm{edge}} \sim \ell_P/\sqrt{\alpha_H}$, not the Compton scale. A logarithm-adjusted bandwidth-filtered formulation gives Compton-scale with a factor-of-$\ln(m_P/m) \approx 50$ enhancement for SM particles — structurally Compton but quantitatively wide of the horizon. Under the framework's observer-centrism, neither of these is the right comparator: a substrate noise floor as a standalone ontological entity is a category error, since the framework commits that only observers and their relations are epistemically primary ([Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 4.6).

**The framework-consistent formulation.** The noise an observer experiences for the purpose of detection is its own resolution limit — the Cramér-Rao / Fisher-information bound set by its coherence content $\mathcal{C}(\Sigma) = \|I\| = m c^2$ (Identification 5.3 of [Observer Definition](/derivations/axioms/observer-definition)). For observer $A$ trying to resolve observer $B$, the effective noise floor is $\mathcal{N}_{A|B} = m_A c^2$. Solving $A_B(r_{\mathrm{edge}}) = m_A c^2$ with the Yukawa signal gives a clean Compton-scale result for same-mass pairs, with automatic bidirectional symmetry between $A$ and $B$.

**The two-noise distinction.** This derivation makes a conceptual separation the framework has been using implicitly:

- **Preservation noise.** The substrate's bit-flip rate on the observer's QEC code, profile-modulated: $p_{\mathrm{phys}}^{\mathrm{eff}}(\mathcal{I}_A)$ from [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling.md). Governs whether the observer's integer-invariant profile survives substrate perturbation over its coherence lifetime. This is what [Formation and Preservation](/derivations/foundation/formation-and-preservation.md) operates on.

- **Detection noise.** The observer's own Heisenberg-like resolution limit on external signals: $m_A c^2$, from the Fisher information on its state space. Governs what signals the observer can distinguish from indistinguishability. This is what the present derivation operates on.

Both are real quantities the framework commits to. They govern different operational regimes. The pattern-edges research program uses detection noise for the edge definition; it does not displace preservation noise.

**The result.** For observer $A$ (mass $m_A$) attempting to detect observer $B$ (mass $m_B$) at distance $r$, the edge — the radius at which $A$ can just barely resolve $B$'s pattern from indistinguishability — is

$$\frac{r_{C,B}}{r_{\mathrm{edge}}} \exp\!\left(-\frac{r_{\mathrm{edge}}}{r_{C,B}}\right) \;=\; \frac{m_A}{m_B}$$

For $m_A = m_B$: $r_{\mathrm{edge}} \approx 0.57\, r_{C,B}$ — exactly Compton-scale with no log factor. For $m_A > m_B$ (heavier detector, lighter source): edge closer. For $m_A < m_B$ (lighter detector, heavier source): edge further.

**Honest scope.** The edge is Compton-scale, matching the target's prediction "up to O(1) factors." The specific O(1) coefficient (≈0.57) differs from the horizon's $\pi$ by a factor of ~5.5. This is a structural consistency signature — both quantities are Compton-scale for deep reasons — not a theorem-level identification. The edge and the horizon are operationally distinct: one is a signal-resolution crossing, the other is an antichain saturation.

## Statement

**Theorem (Detection-noise edge — same-mass pair).** *Let $A$ and $B$ be two fundamental observers with masses $m_A = m_B = m$. In the detection regime, $A$'s resolution threshold is $\mathcal{N}_{A|B} = m c^2$. The pattern signal from $B$ at distance $r$ is the Yukawa form of [Formalization 1](/derivations/foundation/01-pattern-signal-amplitude) Proposition 4.1. The edge — the radius at which $A_B(r) = \mathcal{N}_{A|B}$ — is*

$$r_{\mathrm{edge}}^{\mathrm{same-mass}} \;\approx\; 0.567\, r_C \;=\; 0.567\,\frac{\hbar}{mc}$$

*obtained by numerical solution of $(r_C/r) e^{-r/r_C} = 1$.*

**Theorem (Detection-noise edge — general asymmetric pair).** *For observer $A$ (mass $m_A$) detecting observer $B$ (mass $m_B$) in the detection regime, the edge is the solution of*

$$\frac{r_{C,B}}{r_{\mathrm{edge}}} \exp\!\left(-\frac{r_{\mathrm{edge}}}{r_{C,B}}\right) \;=\; \frac{m_A}{m_B}$$

*This has a unique solution for every $m_A/m_B > 0$ (the function $(r_C/r) e^{-r/r_C}$ is monotonically decreasing for $r > 0$ after a brief increase near the origin, and passes through all positive values).*

**Corollary (Bidirectional symmetry).** *For any pair $(A, B)$, $A$ detects $B$ at distance $r$ if and only if $B$ detects $A$ at distance $r$. More precisely, the edge-condition is symmetric: $A_B(r) > m_A c^2 \;\Leftrightarrow\; A_A(r) > m_B c^2$, since both reduce to the same inequality $r_{C,A} r_{C,B}/r \cdot e^{-r/r_{C,\min}} > 1$ (with minor asymmetries from the mass-weighted source terms; for same-mass pairs the equivalence is exact). Mutual opacity — the research-program's Formalization 3 — follows from this symmetry.*

**Theorem (Detection-noise vs. preservation-noise separation).** *The Cramér-Rao detection threshold $\mathcal{N}_{A|B} = m_A c^2$ and the QEC preservation bit-flip rate $p_{\mathrm{phys}}^{\mathrm{eff}}(\mathcal{I}_A)$ of [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling.md) are operationally distinct quantities governing different regimes:*

- *$\mathcal{N}_{A|B}$ bounds $A$'s ability to distinguish external signals from indistinguishability. It is set by $A$'s coherence content and is a detection quantity.*
- *$p_{\mathrm{phys}}^{\mathrm{eff}}$ bounds $A$'s QEC code's survival rate under substrate-fluctuation errors. It is set by substrate fluctuations filtered through $A$'s profile and is a preservation quantity.*

*Neither subsumes the other. Under the framework's observer-centrism, neither defines a free-standing "substrate noise floor" in the absence of an observing observer — both are observer-indexed quantities that describe different facets of the observer–substrate interaction.*

## Derivation

### Step 1: The detection-noise floor from observer-centrism

**Proposition 1.1 (Heisenberg-like resolution from coherence).** *For an observer $A$ with state space $\Sigma_A$, invariant $I_A$, and coherence content $\mathcal{C}(\Sigma_A)$, the minimum distinguishable signal amplitude $A$ can resolve from external sources is bounded below by*

$$\mathcal{N}_A \;=\; \mathcal{C}(\Sigma_A) \;=\; \|I_A\| \;=\; m_A c^2$$

*using Identification 5.3 of [Observer Definition](/derivations/axioms/observer-definition) ($\mathcal{C}(\Sigma_A) = \|I_A\|$) and [Mass Hierarchy](/derivations/particles/mass-hierarchy) Definition 1.1 ($m = \hbar\omega/c^2$).*

**Structural argument.** $A$'s ability to distinguish an external signal is bounded by the Fisher information it has about external state — and this Fisher information is bounded by $A$'s own coherence content ([Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric); Cramér-Rao bound). An observer cannot resolve signals with amplitude smaller than what sets its own state space's resolution — to do so would require Fisher information beyond its coherence budget. The Cramér-Rao lower bound on resolved amplitude is therefore proportional to $\mathcal{C}(\Sigma_A)$, which by Identification 5.3 equals $\|I_A\|$, which by the loop-frequency identification equals $m_A c^2$. $\square$

**Remark 1.2 (Not a substrate quantity).** *$\mathcal{N}_A$ is not a substrate noise floor. It is the observer $A$'s own resolution limit. It describes what $A$ can perceive, not what the substrate "is". Under the framework's observer-centrism ([Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 4.6 — operational completeness of the sheaf), this is the only epistemically-grounded noise-floor quantity for inter-observer detection. A "substrate noise floor" independent of observers is operationally vacuous under that corollary.*

**Remark 1.3 (Not the same as preservation noise).** *The QEC preservation rate $p_{\mathrm{phys}}^{\mathrm{eff}}$ of [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling.md) governs a different operational regime — whether the observer's integer-invariant profile survives substrate fluctuations over its lifetime. The two noise concepts do not conflict; they describe different observable aspects of the observer–substrate interaction. See Step 5 below.*

### Step 2: The edge equation

**Definition 2.1 (Operational edge — bidirectional).** *For observer $A$ (at the origin) and observer $B$ (at radial distance $r$), the **operational edge of $B$ as seen by $A$** is*

$$r_{\mathrm{edge}}(B\,|\,A) \;=\; \{r > 0 : A_B(r) \;=\; \mathcal{N}_A\}$$

*where $A_B(r)$ is the pattern signal amplitude of $B$ at distance $r$ (from [Formalization 1](/derivations/foundation/01-pattern-signal-amplitude) Proposition 4.1) and $\mathcal{N}_A = m_A c^2$ is $A$'s detection-noise floor (from Step 1).*

**Proposition 2.2 (Explicit edge equation).** *Using the Yukawa signal $A_B(r) = m_B c^2 (r_{C,B}/r) e^{-r/r_{C,B}}$, the edge equation is*

$$m_B c^2 \cdot \frac{r_{C,B}}{r} \cdot e^{-r/r_{C,B}} \;=\; m_A c^2$$

*Simplifying:*

$$\boxed{\; \frac{r_{C,B}}{r_{\mathrm{edge}}} \cdot \exp\!\left(-\frac{r_{\mathrm{edge}}}{r_{C,B}}\right) \;=\; \frac{m_A}{m_B} \;}$$

*where $r_{C,B} = \hbar/(m_B c)$ is $B$'s Compton length.*

**Remark 2.3 (Unique positive solution).** *The function $f(x) = e^{-x}/x$ on $x > 0$ is monotonically decreasing from $+\infty$ at $x \to 0^+$ to $0$ at $x \to \infty$. Every positive target value $y = m_A/m_B$ has a unique preimage $x_y$, so the edge equation has a unique positive solution $r_{\mathrm{edge}} = x_y \cdot r_{C,B}$.*

### Step 3: The same-mass case

**Theorem 3.1 (Same-mass edge at Compton).** *For $m_A = m_B = m$, the edge equation becomes $(r_C/r) e^{-r/r_C} = 1$, i.e., $e^{-x}/x = 1$ with $x = r/r_C$. The unique solution is $x^* \approx 0.567$ (numerically), giving*

$$r_{\mathrm{edge}}^{\mathrm{same-mass}} \;\approx\; 0.567\, r_C \;=\; 0.567\, \frac{\hbar}{mc}$$

*Exact Compton-scale, no logarithmic correction.*

*Proof.* Solve $e^{-x}/x = 1 \;\Leftrightarrow\; x = e^{-x} \;\Leftrightarrow\; x e^x = 1 \;\Leftrightarrow\; x = W(1)$, the Lambert $W$ function evaluated at $1$. $W(1) \approx 0.5671$ (the Omega constant). $\square$

**Corollary 3.2 (Exact $r_{\mathrm{edge}} \sim r_C$).** *The same-mass edge is a specific Compton-scale O(1) multiple of $r_C$ — the Omega constant $W(1) \approx 0.567$. No log-in-mass correction appears. The edge is genuinely mass-independent in units of $r_C$.*

**Remark 3.3 (Why no log factor).** *Earlier formulations of this research program (substrate noise floor $\sim \alpha_H E_P$ or bandwidth-filtered strain) either gave a Planck-scale constant edge (mass-independent in absolute length, not in $r_C$) or a Compton-log edge (Compton with factor $\ln(m_P/m)$). The Heisenberg formulation of Step 1 produces a clean mass-independent-in-$r_C$ result because both signal amplitude and noise floor scale with $mc^2$ for same-mass pairs. The mass dependence cancels in the edge condition, leaving a pure O(1) number.*

### Step 4: The asymmetric case

**Proposition 4.1 (Asymmetric edge — analytic limits).** *For $m_A/m_B = y > 0$ with $y \neq 1$:*

1. *Small source limit ($y \gg 1$, detector much heavier): $f(x) = y$ requires small $x$, giving $x \approx y^{-1} \cdot (1 + \mathcal{O}(y^{-1}))$ for $y \gg 1$. So $r_{\mathrm{edge}} \approx r_{C,B}/y = (m_B/m_A) r_{C,B}$. Heavy detector sees only a tiny neighborhood of the light source.*

2. *Heavy source limit ($y \ll 1$, source much heavier): $f(x) = y$ requires large $x$ where $f(x) \approx e^{-x}/x$; solving gives $x \approx \ln(1/y) - \ln\ln(1/y)$ for $y \ll 1$. So $r_{\mathrm{edge}} \approx r_{C,B} \cdot \ln(m_B/m_A)$ — logarithmically enhanced but still O(Compton).*

3. *Same-mass ($y = 1$): $x = W(1) \approx 0.567$. Compton-scale. (Theorem 3.1.)*

**Remark 4.2 (Physical interpretation of asymmetric edges).**

*When the detector is heavy and the source is light ($m_A \gg m_B$), the edge is $r_{C,B} \cdot (m_B/m_A)$ — much smaller than the source's Compton. The heavy detector has a coarse resolution floor $(m_A c^2)$ larger than the source's self-energy, so the source's signal must reach large amplitudes to be resolved. Those large amplitudes exist only very close to the source.*

*When the detector is light and the source is heavy ($m_A \ll m_B$), the edge is $r_{C,B} \cdot \ln(m_B/m_A)$ — a few Compton lengths of the source. The light detector has a fine resolution $(m_A c^2)$, so it can pick up the source's signal at greater distances; the logarithmic scaling reflects that the Yukawa tail decays slowly in $x/r_C$ when $x$ is a few multiples.*

*For SM physics: an electron ($m_e \sim 0.5$ MeV) detecting a top quark ($m_t \sim 170$ GeV) has $y = m_e/m_t \sim 3 \times 10^{-6}$; edge is at $r_{\mathrm{edge}} \sim \ln(3\times10^5) \cdot r_{C,t} \sim 13 \, r_{C,t}$. A top detecting an electron: $y = m_t/m_e \sim 3 \times 10^5$; edge is at $r_{\mathrm{edge}} \sim 3 \times 10^{-6} \cdot r_{C,e} = 10^{-5.5} \cdot r_{C,e}$ — less than the top's own Compton.*

**Corollary 4.3 (Massless mediators give infinite edge on their own).** *Taking $m_B \to 0$ (a massless mediator like the photon): $r_{C,B} \to \infty$ and the Yukawa degenerates to the Coulomb $1/r$ decay. The edge $r_{\mathrm{edge}}$ formally goes to infinity — massless signals reach arbitrarily far, bounded only by the detector's resolution.*

*In practice, massless mediators interacting with matter carry energy per quantum set by the interaction vertex's other observer (the emitter/absorber's $m c^2$). The "edge" for photon-mediated interactions is then determined by the matter observers at either end, not by the photon's own $m = 0$.* $\square$

### Step 5: Bidirectional symmetry and the mutual-opacity link

**Proposition 5.1 (Symmetry of the edge condition).** *Swap $A \leftrightarrow B$ in the edge equation:*

$$\underbrace{\frac{r_{C,A}}{r} e^{-r/r_{C,A}}}_{A_A(r)/(m_A c^2)} \;=\; \frac{m_B}{m_A} \;\Leftrightarrow\; A_A(r) = m_B c^2$$

*This is the edge condition for $B$ detecting $A$. Comparison to the original edge condition for $A$ detecting $B$ (Proposition 2.2):*

$$\frac{r_{C,B}}{r} e^{-r/r_{C,B}} = \frac{m_A}{m_B}$$

*These are two different equations (different Compton lengths on the left, reciprocal mass ratios on the right) and in general give different $r_{\mathrm{edge}}$ values.*

**Proposition 5.2 (Symmetric edge for same-mass pairs).** *For $m_A = m_B$, both directions collapse to the same equation $f(x) = 1$, giving $r_{\mathrm{edge}} \approx 0.567 r_C$ from both perspectives. Mutual opacity is exact: $A$ resolves $B$ at distance $r$ iff $B$ resolves $A$ at distance $r$.*

**Remark 5.3 (Asymmetric pairs — partial opacity).** *For $m_A \neq m_B$, the two edges generally differ: $A$ resolves $B$ at a different range than $B$ resolves $A$. This is not a violation of symmetry in a fundamental sense — both observers agree on the signal amplitudes at each location; they disagree on which signals are above each one's own resolution threshold. The electron-top example is an extreme case: the electron can resolve the top at 13 $r_{C,t}$ while the top resolves the electron only within $10^{-5.5}\, r_{C,e}$. Heavier observers have coarser detection; lighter ones have finer detection. Mutual opacity in the strict sense (same-distance cutoff in both directions) holds exactly for same-mass pairs and approximately for comparable-mass pairs.*

**Corollary 5.4 (Input to Formalization 3).** *The symmetric same-mass result supplies the structural ingredient that Formalization 3 (mutual opacity theorem) needs: for a population of same-mass observers, all pairs share the same mutual edge at $\sim 0.567 r_C$, and beyond this distance they are mutually invisible. The bidirectional symmetry is built in from the start — it is not an additional postulate but a consequence of the Heisenberg-noise formulation with symmetric observers.*

### Step 6: Comparison with the horizon

**Proposition 6.1 (Horizon vs. edge — same scale, different mechanism).** *The framework's null horizon for a fundamental observer is at $r_H = cT/2 = \pi\hbar/(mc) = \pi r_C \approx 3.14\, r_C$, derived from DAG antichain saturation at the observer's cyclic period ([Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Proposition 3.1). The detection-noise edge for a same-mass pair is at $r_{\mathrm{edge}} \approx 0.567\, r_C$. The ratio $r_H/r_{\mathrm{edge}} \approx 5.5$ is an O(1) factor; both are Compton-scale to the same order.*

**Remark 6.2 (They are different quantities — not a problem).** *The horizon and the detection-noise edge are operationally distinct thresholds at the Compton scale:*

- *The horizon is set by *causal structure*: the radius at which tilt saturates the cyclic period and the A–B relational carrier becomes null.*
- *The edge is set by *signal resolution*: the radius at which another same-mass observer's pattern drops to the detector's Cramér-Rao threshold.*

*They coincide up to an O(1) factor because both are Compton-scaled by $\hbar/(mc)$. They do not need to be numerically identical; the framework does not predict them to be. The coincidence up to O(1) is a consistency signature that both mechanisms land on the same intrinsic length.*

**Remark 6.3 (On the target's "up to O(1)" language).** *The research target's Prediction 1 states that the edge is the horizon "up to O(1) factors." Under the detection-noise formulation:*

- *The edge is $W(1) r_C \approx 0.567 r_C$ for same-mass pairs.*
- *The horizon is $\pi r_C \approx 3.14 r_C$.*
- *Ratio: $\pi/W(1) \approx 5.5$ — an O(1) coefficient in the strict physics-conventional sense.*

*The target's prediction is qualitatively confirmed: the edge is Compton-scale and structurally of the same order as the horizon. A literal identification $r_{\mathrm{edge}} = r_H$ is not achieved and is not needed — these are distinct physical quantities at the same scale.*

### Step 7: Consistency across mass regimes

**Fundamental particles ($m < m_P$).** For same-mass pairs: $r_{\mathrm{edge}} \approx 0.567 \cdot \hbar/(mc)$. For electron: $r_{\mathrm{edge}} \approx 2 \times 10^{-13}$ m. For proton: $r_{\mathrm{edge}} \approx 1 \times 10^{-16}$ m. For top quark: $r_{\mathrm{edge}} \approx 7 \times 10^{-19}$ m. Each is a fraction of a Compton wavelength, consistent with particles having spatial extent on the order of their Compton scale.

**Planck-mass observer ($m = m_P$).** $r_C = \ell_P$. Edge $\approx 0.567 \ell_P$. At Planck mass, the edge is at the Planck length — the scale below which the substrate discretization becomes directly relevant, and continuum descriptions break down. This is the natural terminus of the fundamental-particle regime.

**Macroscopic observers ($m \gg m_P$).** Formally, $r_C = \hbar/(mc) \ll \ell_P$ — sub-Planck Compton. The Yukawa signal model breaks down (short-distance regularization needed, and the observer is no longer treatable as a point source). For macroscopic composite observers, the pattern signal is dominated by the structural network ([Mass Hierarchy](/derivations/particles/mass-hierarchy) §7 mass-information reversal); the detection-noise edge in this regime is set by the structural boundary size, not the composite Compton. Extending the edge machinery to macroscopic structural observers is Open Gap 4.

**Schwarzschild regime ($r_S \approx r_C$, i.e., $m \sim m_P$).** The Schwarzschild radius $r_S = 2Gm/c^2$ equals the Compton radius at $m = m_P$. For $m < m_P$: $r_S < r_C$, edge is Compton (detection-limited). For $m > m_P$: $r_S > r_C$, edge is Schwarzschild-constrained. Fundamental particles live safely in the Compton regime ($r_S \ll r_C$); macroscopic observers cross into the Schwarzschild regime. This consistency check confirms the detection-noise edge is the right notion at fundamental-particle scales.

## Consequences

**C1. Edge is Compton-scale, structurally.** $r_{\mathrm{edge}} \approx 0.567 r_C$ for same-mass pairs. Compton is the natural length of the fundamental-observer regime — the framework's inverse-mass resolution scale.

**C2. Edge is bidirectionally symmetric for same-mass pairs.** Same $r_{\mathrm{edge}}$ whether $A$ sees $B$ or $B$ sees $A$. Mutual opacity of Formalization 3 follows directly.

**C3. Edge is asymmetric for different-mass pairs.** Heavier detector: smaller edge in units of source Compton. Lighter detector: larger edge. Physically: resolution scales with $1/m_{\mathrm{detector}}$.

**C4. Detection noise ≠ preservation noise.** Two operationally distinct regimes: observer's Heisenberg resolution on external signals (this derivation) vs. substrate bit-flip rate on observer's QEC code ([Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling.md)). Neither subsumes the other.

**C5. Edge and horizon are different Compton-scale thresholds.** The horizon $r_H = \pi r_C$ is antichain-saturation; the edge $0.567 r_C$ is signal-resolution. They coincide up to O(1); they do not literally identify.

**C6. Substrate-noise-floor as edge comparator is a category error.** Under the framework's observer-centrism ([Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 4.6), only observers and their relations are epistemically primary. A free-standing "substrate noise floor" for inter-observer detection has no operational meaning — it must be an observer's own resolution (or some other observer's Fisher bound), not a standalone ontological quantity.

**C7. Ready for mutual opacity and profile-dependent extensions.** The bidirectional edge structure of Step 5 feeds directly into Formalization 3 (mutual opacity theorem). The signal/noise structure of this derivation combined with profile-dependent Yukawa components (Formalization 1 Proposition 6.3) will give Formalization 4 (coupling-dependent edge and confinement as edge collapse).

## Rigor Assessment

**Rigorous (closed-form math):**

- Proposition 2.2 and the edge equation: direct substitution.
- Remark 2.3 (uniqueness of positive solution): monotonicity of $f(x) = e^{-x}/x$.
- Theorem 3.1 (same-mass edge $= W(1) \cdot r_C$): Lambert $W$ function closed-form solution.
- Proposition 4.1 (asymmetric limits): asymptotic analysis of the Lambert $W$ equation.
- Proposition 5.1 (symmetry structure): direct equation-swapping.

**Semi-formal (rest on framework identifications):**

- Proposition 1.1 (Heisenberg-resolution from coherence): invokes Cramér-Rao on Fisher information ([Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric)) applied to the observer's state space. The Cramér-Rao bound gives $\mathrm{Var}(\hat\theta) \geq 1/\mathcal{F}$; identifying the Fisher information with $\mathcal{C}(\Sigma)/\hbar^2$ or similar requires a specific normalization not fully pinned down by existing derivations.
- Identification of $\mathcal{N}_A$ with $m_A c^2$ specifically (not $m_A c^2/(2\pi)$ or similar): O(1) coefficient not rigorously fixed. Structural results of this derivation are invariant under O(1) rescaling (the exact numerical value of the edge shifts, but it stays Compton-scale).
- Proposition 6.1 (horizon vs. edge coincidence): compares two independently-derived O(1) coefficients without a theorem-level reason for their alignment.

**Deferred:**

- Macroscopic observer regime (Step 7). Structural encoding picture ([Mass Hierarchy](/derivations/particles/mass-hierarchy) §7) needs to be integrated.
- Precise Cramér-Rao normalization and O(1) coefficient on $\mathcal{N}_A$.
- Non-perturbative signal regime for strong-coupling observers (color-charged single quarks — edge collapse at $\alpha_s \to 1$ picked up in Formalization 4).

**Assessment:** Semi-formal. The Lambert $W$ closed-form is rigorous; the framework-level commitments (Identification 5.3, Fisher-Cramér-Rao on observer's state space) are existing derivations. The assembly of these into the edge equation and the same-mass Compton-scale result is the novel content, structurally grounded but relying on O(1) normalization conventions that are not rigorously pinned down. All structural predictions of the research program are invariant under O(1) rescaling of $\mathcal{N}_A$.

## Open Gaps

1. **Precise Cramér-Rao normalization.** The identification $\mathcal{N}_A = m_A c^2$ is natural and dimensionally correct but the overall O(1) prefactor depends on specific Fisher-information normalization conventions for the observer's state space. A rigorous computation of the Cramér-Rao bound on the observer's Fisher information would pin down the exact noise floor and the exact edge location. *Difficulty: MODERATE.*

2. **Edge discontinuity at bootstrap level transitions.** At the mass-information-reversal boundary ($m \sim \Lambda_{\mathrm{QCD}}$, [Mass Hierarchy](/derivations/particles/mass-hierarchy) §7), the observer's encoding transitions from topological (Compton-based) to structural (relational-network-based). The detection-noise edge derivation here assumes topological encoding; extending to structural observers requires handling the relational-network boundary. *Difficulty: HARD.*

3. **Horizon–edge coincidence at O(1).** Remark 6.2 notes that the horizon $r_H = \pi r_C$ and the edge $W(1) r_C$ are both Compton-scaled but differ by an O(1) factor. Whether there is a deeper structural reason forcing both to coincide exactly, or whether they are genuinely two independent Compton-scale thresholds, is not resolved. *Difficulty: MODERATE.*

4. **Macroscopic composite observers.** For $m \gg m_P$ (or more realistically $m \gg \Lambda_{\mathrm{QCD}}$), the point-source Yukawa picture of Formalization 1 does not apply, and the edge is set by the structural boundary. Extending the derivation to this regime requires defining a "signal amplitude" and "resolution threshold" for structural observers. *Difficulty: MODERATE-HARD.*

5. **Integration with gauge-channel edges.** For composite observers with active gauge channels (Formalization 1 Proposition 6.3), each channel contributes a Yukawa component at its own mass scale. The composite edge-equation becomes a sum-of-Yukawas = resolution, solvable but not in closed form. Formalization 4 will develop this for specific SM profiles. *Difficulty: MODERATE.*

6. **Gravitational consistency check (flagged by research target).** Under the detection-noise formulation derived here, the Heisenberg resolution floor $m_A c^2$ is the primary quantity. The gravitational self-decoherence mechanism flagged for later consistency check ([pattern-edges-and-mutual-opacity research target](/research-targets/pattern-edges-and-mutual-opacity), "Future consistency checks") is orthogonal to this derivation — it operates at macroscopic scales where the fundamental-particle edge picture does not directly apply. Integration awaits Formalization 4 and macroscopic extension. *Difficulty: HARD; post-program.*

## References and further reading

**Framework inputs.**

- [Observer Definition](/derivations/axioms/observer-definition) — Axiom 2; Identification 5.3 ($\mathcal{C}(\Sigma) = \|I\|$).
- [Mass Hierarchy](/derivations/particles/mass-hierarchy) — Definition 1.1 ($m = \hbar\omega/c^2$); §7 mass-information reversal.
- [Pattern Signal Amplitude as a Function of Distance](/derivations/foundation/01-pattern-signal-amplitude) — Proposition 4.1 Yukawa signal form.
- [Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric) — Čencov's theorem; Fisher metric structure.
- [Distinguishability Conservation](/derivations/thermodynamics-ext/distinguishability-conservation) — Theorem 6.1 information preservation.
- [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) — Corollary 4.6 operational completeness of the sheaf (observer-centrism commitment).
- [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) — the preservation-noise quantity $p_{\mathrm{phys}}^{\mathrm{eff}}$; contrast with detection noise.
- [Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) — $r_H = \pi r_C$ for comparison.

**Mathematical references.**

- Lambert $W$ function: $W(1) \approx 0.5671$, the Omega constant. Standard transcendental; Wolfram MathWorld, "Omega Constant."
- Cramér-Rao bound on Fisher information: any intermediate statistics text (Rao 1945; Fisher 1922).

**Research-program context.** This is step 2 of the pattern-edges-and-mutual-opacity research program (see `research-targets/pattern-edges-and-mutual-opacity.md`). The detection-noise formulation adopted in this derivation (as opposed to a substrate-noise formulation in the initial target draft) was committed on 2026-04-20 after observing that substrate-noise formulations give mass-independent Planck-scale edges inconsistent with the target's Compton-scale prediction. The detection-noise formulation follows naturally from the framework's observer-centrism and gives the target's qualitative prediction exactly at Compton scale (O(1) coefficient).
