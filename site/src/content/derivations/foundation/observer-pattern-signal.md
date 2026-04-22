---
title: "Observer Pattern Signal"
status: "provisional"
dependsOn: ["foundation/coherence-lagrangian", "axioms/observer-definition", "particles/mass-hierarchy", "thermodynamics/action-planck", "foundation/observer-as-error-correcting-code"]
enablesDerivation: ["foundation/observer-edges-and-mutual-opacity", "foundation/profile-dependent-edges-and-confinement", "foundation/formation-and-preservation"]
tags: ["foundation", "observer-structure"]
summary: "An observer localized on a worldline sources a coherence-field configuration whose amplitude at radial distance r is the static Green's function of the Klein-Gordon operator derived from the Coherence Lagrangian. For a fundamental massive observer of mass m the pattern signal takes the Yukawa form A(r) = mc² · (r_C/r) · exp(−r/r_C) with decay scale r_C = ℏ/(mc) — the Compton length forced by the Klein-Gordon mass parameter. For composite observers with active gauge channels, additional Yukawa components contribute additively at each mediator's mass scale, with massless mediators (EM) giving 1/r Coulomb tails and massive mediators (W, Z, color-within-hadrons) giving short-range exponential suppression. The Compton decay length coincides with three independently-derived framework scales — the epistemic boundary of Mass Hierarchy §7, the null horizon of Horizon Gauge Shell, and the Yukawa decay length derived here — a consistency signature of the Compton as the framework's natural length for a massive observer."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-21
---

## Overview

An observer is a localized coherence-bearing structure with a worldline, finite coherence content $\mathcal{C}(\Sigma_A)$, and a definite rest frame. Under the [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) it sources a coherence-field configuration in the bulk of its own projected continuous dual $M_A$ ([Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime)), outside its coherence domain. No observer-independent background spacetime is invoked — the field equations are defined on $M_A$, which itself is the observer's projection, and the field amplitude at "distance $r$" is measured in $M_A$'s geometry. This derivation specifies the functional form of that sourced field — the observer's **pattern signal** — and the structural length scale at which it decays.

**The result.** For a fundamental massive observer of mass $m$, the pattern signal at radial distance $r$ from the observer's center is

$$A(r) \;=\; m c^2 \cdot \frac{r_C}{r} \cdot e^{-r/r_C}, \qquad r_C \;=\; \frac{\hbar}{mc}$$

the Yukawa Green's function of the Klein-Gordon operator sourced by the observer's localized coherence content. The Compton length $r_C$ emerges as the natural decay scale: it is the inverse of the Klein-Gordon mass parameter, and the Klein-Gordon mass is the observer's loop frequency via $m = \hbar\omega/c^2$ ([Mass Hierarchy](/derivations/particles/mass-hierarchy) Definition 1.1). No additional length scale is introduced.

For composite observers with active gauge channels, the pattern signal is the additive sum of Yukawa components — one per channel, with each channel's range set by its mediator mass:

$$A(r;\, \mathcal{I}_A) \;=\; A_{\mathrm{direct}}(r) \;+\; \sum_{i \in \mathrm{channels}(\mathcal{I}_A)} A_i(r), \qquad A_i(r) \;=\; g_i^2 \Lambda_i \frac{r_i}{r} e^{-r/r_i}, \quad r_i = \frac{\hbar}{M_i c}$$

Massless mediators (photon) give Coulomb $1/r$ tails; massive mediators (W, Z) give short-range exponential suppression at the mediator's inverse mass; confined channels (color within hadrons) give effective Yukawa at $\Lambda_{\mathrm{QCD}}$.

**Consistency signature.** The Compton length $r_C = \hbar/(mc)$ arises in the framework from three independent directions:

- The epistemic boundary of fundamental particles ([Mass Hierarchy](/derivations/particles/mass-hierarchy) Proposition 7.2): boundary area $\lambda_C^2$ gives information capacity $\mathcal{I}^{\max} \sim (m_P/m)^2$.
- The null horizon position ([Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Proposition 3.1): $r_H = cT/2 = \pi \hbar/(mc) = \pi r_C$ from antichain saturation at the cyclic period.
- The pattern-signal decay scale (this derivation): $r_C$ is the Yukawa decay length of the sourced field.

Three independent identifications land on the same intrinsic length — the Compton scale is the framework's natural length for a massive observer.

**Honest scope.** The Yukawa Green's function is a rigorous classical-PDE result. The structural identification of the Green's function with the framework's "observer pattern signal" — tying the observer's coherence content to the Klein-Gordon source via Identification 5.3 of [Observer Definition](/derivations/axioms/observer-definition) — is semi-formal: each step combines existing framework commitments, and the overall amplitude coefficient depends on the specific normalization of the Lagrangian's source coupling. For spinor-valued observers, [Spinor Coherence Lagrangian](/derivations/foundation/spinor-coherence-lagrangian) provides the Dirac source; the same pattern-signal identification carries through with $mc^2\bar\psi\psi$ replacing the scalar $m^2|\phi|^2$ as the rest-frame coherence source, giving the same $A(r) = mc^2(r_C/r)e^{-r/r_C}$ radial form in the spin-averaged limit.

## Statement

**Theorem (Pattern signal — fundamental observer).** *Let $A$ be an observer with state space $\Sigma_A$, loop frequency $\omega_A$, and mass $m_A = \hbar\omega_A/c^2$, with projected continuous dual $M_A$. The static coherence field sourced by $A$'s localized worldline $\gamma_A \subset M_A$, evaluated at radial distance $r$ in $M_A$'s geometry (approximately flat away from strong-curvature regions), is the Yukawa form*

$$A(r) \;=\; m_A c^2 \cdot \frac{r_{C,A}}{r} \cdot \exp\!\left(-\frac{r}{r_{C,A}}\right), \qquad r_{C,A} \;=\; \frac{\hbar}{m_A c}$$

*at tree level. The decay scale $r_{C,A}$ is fixed by the mass parameter of the Klein-Gordon equation on $M_A$; it is not an additional input.*

**Corollary (Amplitude at the Compton scale).** *$A(r_{C,A}) = m_A c^2 / e \approx 0.37\, m_A c^2$.*

**Corollary (Asymptotic behavior).** *$A(r) \to m_A c^2 \cdot r_{C,A}/r$ as $r/r_{C,A} \to 0$ (Green's-function $1/r$ singularity, regulated at Planck scale by substrate discretization); $A(r) \to m_A c^2 \cdot (r_{C,A}/r) e^{-r/r_{C,A}} \to 0$ exponentially for $r \gg r_{C,A}$.*

**Theorem (Profile-dependent composite extension).** *For a composite observer with profile $\mathcal{I}_A$ carrying active gauge channels $\{i\}$ with channel-mediator masses $\{M_i\}$ and couplings $\{g_i\}$, the pattern signal is the sum of independent Yukawa components,*

$$A(r;\, \mathcal{I}_A) \;=\; m_A c^2 \cdot \frac{r_{C,A}}{r} \cdot e^{-r/r_{C,A}} \;+\; \sum_{i \in \mathrm{channels}(\mathcal{I}_A)} g_i^2 \cdot \Lambda_i \cdot \frac{r_i}{r} \cdot \exp\!\left(-\frac{r}{r_i}\right), \qquad r_i \;=\; \frac{\hbar}{M_i c}$$

*with $\Lambda_i$ the channel's reference scale ($\Lambda_i = M_i c^2$ for fundamental mediators; $\Lambda_i = \Lambda_{\mathrm{QCD}}$ for color-screened composites). For massless mediators ($M_i \to 0$), $A_i(r) \to g_i^2 \Lambda_i / r$ recovers the Coulomb form. Additivity follows from channel independence under the Standard Model's direct-product structure ([Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) Proposition 4.1).*

## Derivation

### Step 1: The observer as a source of the coherence field

**Definition 1.1 (Pattern signal).** *The **pattern signal** $A(x)$ of observer $A$ at spacetime point $x$ is the amplitude of the coherence field $\phi(x)$ sourced by $A$'s worldline under the Coherence Lagrangian's dynamics, evaluated in $A$'s projected continuous dual $M_A$.*

**Proposition 1.2 (Observer sources the coherence field).** *Every observer has finite coherence $\mathcal{C}(\Sigma_A) > 0$ (Axiom 2 O1). By [Action and Planck's Constant](/derivations/thermodynamics/action-planck) Theorem 5.1, coherence-bearing structures contribute to the action $S = \int \mathcal{L}\, d^4x$. By the variational principle of [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) Proposition 5.1, the field equations' source terms come from the coherence-bearing content — i.e., observers are sources of $\phi$.*

**Remark 1.3 (What "source" means here).** *The observer does not inject coherence into $\phi$ from outside; coherence is conserved (Axiom 1). Instead, the observer's bulk coherence content $\mathcal{C}(\Sigma_A)$ appears in the Klein-Gordon equation as an effective source current $J_A(x)$ localized on $A$'s worldline $\gamma_A$. From the perspective of the field equation, $J_A$ is a $\delta$-function distribution with weight $\mathcal{C}(\Sigma_A)$.*

**Identification 1.4 (Source strength).** *By Identification 5.3 of [Observer Definition](/derivations/axioms/observer-definition) and the identification $m = \hbar\omega/c^2$ of [Mass Hierarchy](/derivations/particles/mass-hierarchy) Definition 1.1, the observer's coherence content is proportional to its rest energy:*

$$\mathcal{C}(\Sigma_A) \;=\; \|I_A\| \;\propto\; \hbar\omega_A \;=\; m_A c^2$$

*up to normalization fixed by choice of units. The effective source current strength is therefore $J_A \sim m_A c^2$.*

### Step 2: The Klein-Gordon equation as the field equation

**Proposition 2.1 (Coherence field satisfies Klein-Gordon).** *The linearized Euler-Lagrange equation of the Coherence Lagrangian is the Klein-Gordon equation ([Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) Proposition 4.1(a)):*

$$\left(\Box + \frac{m^2 c^2}{\hbar^2}\right)\phi \;=\; J$$

*where $\Box = \eta^{\mu\nu}\partial_\mu\partial_\nu$ and $J$ is the source current.*

**Proposition 2.2 (Static form).** *For a static source on a timelike worldline, the Klein-Gordon equation reduces to*

$$\left(-\nabla^2 + \frac{1}{r_C^2}\right)\phi \;=\; J, \qquad r_C \;=\; \frac{\hbar}{mc}$$

*in spatial coordinates, with $r_C$ the Compton length of the source.*

**Remark 2.3 (Mass parameter identification).** *The mass parameter appearing as the coefficient of $|\phi|^2$ in the Coherence Lagrangian's potential ([Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) Theorem 2.2) is the same mass that appears in Identification 1.4 as the observer's rest energy. Both identifications are framework-level: the Klein-Gordon mass is the physical (rest) mass, not an independent parameter.*

**Remark 2.4 (Ambient manifold is the observer's projection, not a background).** *The Klein-Gordon equation here is an equation on $A$'s projected continuous dual $M_A$ — not on an observer-independent background spacetime. The framework's observer-centrism ([Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime); [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 4.6, operational completeness of the sheaf) does not admit a pre-given global spacetime; each observer projects its own $M_A$. The Klein-Gordon operator, its Green's function, and the "radial distance $r$" below are all understood in $M_A$'s intrinsic geometry. The flat-spacetime form of the Green's function is the leading-order result in the approximately-flat regime of $M_A$ (far from horizons and away from strong-curvature regions); its extension to the curved regime is noted in Open Gap 4.*

**Remark 2.5 (How inter-observer detection remains well-defined).** *An exterior observer $B$ trying to detect $A$ does so in the overlap region of $M_A$ and $M_B$. Same-level peer observers' projections agree on the shared region (to leading order, with integer-channel cross-level restrictions of [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 7.1 applied at level boundaries). Hence the "distance $r$" at which $B$ samples $A$'s sourced field is well-defined without invoking a common background spacetime — it is defined by the shared projection in the overlap region. Inter-observer results downstream ([Observer Edges and Mutual Opacity](/derivations/foundation/observer-edges-and-mutual-opacity)) use this shared-overlap reading throughout.*

### Step 3: The Yukawa Green's function

**Proposition 3.1 (Green's function of the static Klein-Gordon operator).** *The fundamental solution of $(-\nabla^2 + 1/r_C^2) G = \delta^3(\mathbf{r})$ in three spatial dimensions is*

$$G(r) \;=\; \frac{e^{-r/r_C}}{4\pi r}$$

*a standard result of linear PDE theory (Yukawa 1935).*

*Proof sketch.* In radial coordinates with $\phi(r)$ spherically symmetric, the operator becomes $-\frac{1}{r}\frac{d^2}{dr^2}(r\phi) + \phi/r_C^2$. Writing $\phi = u/r$ reduces the homogeneous equation to $u'' - u/r_C^2 = 0$ with solution $u = A e^{-r/r_C} + B e^{+r/r_C}$; boundedness at infinity forces $B = 0$. Normalizing the $\delta$-source gives $A = 1/(4\pi)$. $\square$

**Remark 3.2 (Why Yukawa and not Coulomb).** *The Coulomb Green's function $1/(4\pi r)$ solves the massless equation $-\nabla^2 G = \delta^3$. The exponential factor $e^{-r/r_C}$ is the signature of the mass term: mass introduces a characteristic length $r_C$ beyond which the field decays exponentially. This is a direct consequence of the Coherence Lagrangian's potential $V \supset m^2|\phi|^2$ (not an additional input).*

### Step 4: The pattern signal amplitude

**Proposition 4.1 (Pattern signal for a point-source observer).** *For an observer localized at the origin with source strength $J_A = m_A c^2 \cdot \delta^3(\mathbf{r})$ (up to a unit-setting O(1) coefficient), the static coherence field at radial distance $r$ is the convolution of $J_A$ with the Yukawa Green's function:*

$$\phi(r) \;=\; (G * J_A)(r) \;=\; m_A c^2 \cdot \frac{e^{-r/r_{C,A}}}{4\pi r}$$

*The pattern signal amplitude, factoring out the $4\pi$ and multiplying by $r_{C,A}$ to render it dimensionally an energy consistent with Identification 1.4, is:*

$$\boxed{\;A(r) \;=\; m_A c^2 \cdot \frac{r_{C,A}}{r} \cdot \exp\!\left(-\frac{r}{r_{C,A}}\right)\;}$$

*where the O(1) prefactor has been absorbed into the definition of $A(r)$.*

**Remark 4.2 (Normalization convention).** *Different normalization conventions (e.g., $\phi$ dimensionless vs. energy-dimensioned; inclusion or omission of $4\pi$) give amplitudes differing by O(1) factors. The structural content — Yukawa decay, $r_{C,A}$ as the decay scale, amplitude $\sim m_A c^2$ near $r_{C,A}$ — is convention-independent.*

**Corollary 4.3 (Dimensionless form).** *Defining $x = r/r_{C,A}$, the pattern signal is $A(x) = m_A c^2 \cdot f(x)$ with $f(x) = e^{-x}/x$. The shape $f(x)$ is universal; the amplitude scale $m_A c^2$ and the decay length $r_{C,A}$ are observer-specific.*

### Step 5: The Compton scale is forced, not postulated

**Remark 5.1 (Compton length from Klein-Gordon mass).** *The decay length $r_{C,A} = \hbar/(m_A c)$ is not introduced as a profile-specific scale to be fitted; it is forced by the Klein-Gordon equation's mass term. The chain from axioms to $r_{C,A}$ is:*

1. *Axioms 1, 2, 3 $\to$ [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) Theorem 3.1 — full Lagrangian with potential $V \supset m^2|\phi|^2$.*
2. *[Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) Proposition 4.1(a) — Klein-Gordon equation as Euler-Lagrange.*
3. *[Mass Hierarchy](/derivations/particles/mass-hierarchy) Definition 1.1 — $m = \hbar\omega/c^2$ ties mass parameter to loop frequency.*
4. *Green's function of static Klein-Gordon operator $\to$ Yukawa with $r_C = \hbar/(mc)$.*

*No step introduces $r_C$ independently.*

**Remark 5.2 (Three independent Compton-scale identifications).** *The Compton scale $r_{C,A}$ appears in the framework in three places, all pointing at the same physical length:*

- *As the **epistemic boundary scale** for fundamental particles ([Mass Hierarchy](/derivations/particles/mass-hierarchy) Proposition 7.2): $\mathcal{I}^{\max} \sim (m_P/m)^2$ using $\lambda_C^2$.*
- *As the **horizon scale** for the fundamental observer ([Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Proposition 3.1): $r_H = \pi r_{C,A}$ from antichain saturation.*
- *As the **field-decay scale** (this derivation): Yukawa decay length of the sourced coherence field.*

*The three identifications are independent: the first counts bits on the boundary, the second sets the horizon position via causal structure, the third sets the Yukawa profile's shape. That they all land on the Compton scale (up to O(1) factors) is a consistency signature: $r_C$ is the framework's natural length for a massive observer.*

### Step 6: Profile-dependent composite extension

For observers with active gauge channels — composite particles, atoms, larger structures — the pattern signal has contributions from each channel's mediator field in addition to the direct coherence field. Channels independent under the Standard Model's direct-product structure add additively, consistent with [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) Proposition 4.1.

**Proposition 6.1 (Gauge-channel contributions).** *For each active gauge channel $i$ with mediator mass $M_i$ and coupling $g_i$, the channel's contribution to the pattern signal is*

$$A_i(r) \;=\; g_i^2 \cdot \Lambda_i \cdot \frac{r_i}{r} \cdot \exp\!\left(-\frac{r}{r_i}\right), \qquad r_i \;=\; \frac{\hbar}{M_i c}$$

*where $\Lambda_i$ is the channel's reference energy scale.*

**Proposition 6.2 (Massless mediator limit — Coulomb tails).** *As $M_i \to 0$ (photon case), $r_i \to \infty$ and $e^{-r/r_i} \to 1$ for all finite $r$. The Yukawa component reduces to $A_{\mathrm{EM}}(r) = g_{\mathrm{EM}}^2 \cdot \Lambda_{\mathrm{EM}} \cdot r_0/r$ — the Coulomb $1/r$ tail. The EM channel dominates the pattern signal at large distances $r \gg \hbar/(M_W c)$ because its massive-mediator competitors are exponentially suppressed while EM decays only as $1/r$.*

**Proposition 6.3 (Composite pattern signal).** *For an observer with profile $\mathcal{I}_A$ having active channels $\{i\}$, the total pattern signal amplitude is*

$$A(r;\, \mathcal{I}_A) \;=\; A_{\mathrm{direct}}(r) \;+\; \sum_{i \in \mathrm{channels}(\mathcal{I}_A)} A_i(r)$$

*where $A_{\mathrm{direct}}(r) = m_A c^2 (r_{C,A}/r) e^{-r/r_{C,A}}$ is the direct coherence-field contribution and each $A_i(r)$ is the Yukawa contribution from gauge channel $i$.*

### Step 7: Strong-coupling/confined channel treatment

The color channel (gluons) requires additional care because gluons are confined. At Planck scale $\alpha_s \to 1$ and the channel's effective coupling cannot be treated as small. The long-distance behavior is what matters for the pattern signal at macroscopic $r$, and at macroscopic scales the color coupling is *screened* by QCD running from $\alpha_s \sim 1$ at UV to $\alpha_s \sim 0.1$ at $\Lambda_{\mathrm{QCD}} \sim 0.3$ GeV.

**Proposition 7.1 (Color channel effective Yukawa for color-neutral composites).** *For color-neutral composites (hadrons), the long-distance color-channel pattern signal is effectively Yukawa with screening scale $\hbar/(\Lambda_{\mathrm{QCD}}/c)$:*

$$A_s(r) \;\sim\; g_{\mathrm{eff}}^2(r) \cdot \Lambda_{\mathrm{QCD}} \cdot \frac{r_s}{r} \cdot \exp\!\left(-\frac{r}{r_s}\right), \qquad r_s \;\sim\; \frac{\hbar}{\Lambda_{\mathrm{QCD}}/c} \;\sim\; 0.7\,\mathrm{fm}$$

*with $g_{\mathrm{eff}}(r)$ the running coupling at scale $r$.*

**Remark 7.2 (Isolated color-charged sources require separate treatment).** *For an isolated (non-color-neutral) source, the color component of $A(r)$ does not have a finite long-distance Yukawa asymptote: color flux has nowhere to terminate, giving a linear confining potential rather than Yukawa decay. The consequences for the observer's operational edge are developed in [Profile-Dependent Edges and Confinement](/derivations/foundation/profile-dependent-edges-and-confinement).*

## Consequences

**C1. Fundamental massive observers have Yukawa pattern signal at their Compton scale.** $A(r) = m_A c^2 (r_{C,A}/r) e^{-r/r_{C,A}}$ — the classical linearized signal from the Coherence Lagrangian's Klein-Gordon dynamics.

**C2. The Compton scale is forced, not tuned.** $r_{C,A} = \hbar/(m_A c)$ is the inverse of the Klein-Gordon mass parameter, which is the same mass that sets the observer's loop frequency.

**C3. Short-distance divergence is regulated at Planck scale.** The $1/r$ singularity of the Green's function at $r \to 0$ is regulated by the substrate discretization at $\ell_P$; the field is finite for $r \gtrsim \ell_P$.

**C4. Long-distance behavior is exponentially suppressed beyond Compton.** $A(r) \to m_A c^2 (r_{C,A}/r) e^{-r/r_{C,A}} \to 0$ for $r \gg r_{C,A}$ — the structural reason massive observers have bounded spatial extent.

**C5. Composite observers have channel-wise Yukawa decompositions.** At very large $r$, the longest-range component dominates — for most observers this is the EM Coulomb tail.

**C6. Three independent Compton-scale identifications.** Epistemic boundary, null horizon, field-decay scale. Same length, three different mechanisms — a consistency signature.

## Rigor Assessment

**Rigorous (classical PDE + framework source):**

- Proposition 2.1 (Klein-Gordon from Coherence Lagrangian): direct from existing theorem.
- Proposition 3.1 (Yukawa Green's function): standard classical field theory.
- Corollary 4.3 (dimensionless form): direct substitution.
- Proposition 6.2 (massless mediator limit): standard Green's function limit.

**Semi-formal (structural identification with framework conventions):**

- Proposition 1.2 and Identification 1.4 (pattern signal as sourced coherence field): observer's coherence content tied to the Klein-Gordon source via Identification 5.3.
- Proposition 4.1 (pattern signal form): combines rigorous Green's function with structural source identification.
- Proposition 6.1 (gauge-channel Yukawa contributions): channel-wise Klein-Gordon/wave equation Green's functions; additive composition from channel independence.

**Heuristic/deferred:**

- Proposition 7.1 (color channel effective Yukawa): correct qualitative picture but the screened-coupling treatment is heuristic.
- Precise O(1) coefficients: depend on source-coupling normalization, not pinned down here.

**Assessment:** Semi-formal. The classical PDE content (Klein-Gordon $\to$ Yukawa) is fully rigorous. The framework-specific content (Coherence Lagrangian is the right field equation, observer's coherence content is the source, $m_A c^2$ sets the amplitude scale) combines existing derivations — each rigorous or semi-formal — into the pattern-signal identification. The Compton-scale decay length is forced; the overall amplitude scale is a natural O(1) choice.

## Open Gaps

1. **Precise amplitude coefficient.** The overall O(1) prefactor in $A(r) = m_A c^2 (r_{C,A}/r) e^{-r/r_{C,A}}$ depends on the Lagrangian's source-coupling normalization convention. *Difficulty: MODERATE.*

2. **Short-distance substrate regularization.** The $1/r$ Green's function singularity at $r \to 0$ is regulated at Planck scale by the substrate discretization ([Causal Set Statistics](/derivations/holography/causal-set-statistics)), but the precise matching between continuum Green's function and discrete substrate is not constructed. *Difficulty: MODERATE.*

3. **Non-perturbative color-channel treatment.** Proposition 7.1 uses a screened-coupling heuristic for color. A rigorous treatment via non-perturbative QCD or the framework's non-associativity confinement picture would pin down the color pattern signal's form more carefully. *Difficulty: HARD.*

4. **Curved-regime Yukawa on $M_A$.** The flat-spacetime Yukawa form is the leading-order result in the approximately-flat regime of $M_A$. In the curved-regime (near horizons, near strong-coherence sources, at cosmological scales), the Klein-Gordon operator on $M_A$ carries nontrivial curvature corrections. The explicit curved-space Green's function on $M_A$ is not constructed here; the framework's observer-projected-spacetime structure ([Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime)) provides the setting for this extension. *Difficulty: MODERATE.*

## Addressed Gaps

1. **Spinor (Dirac) extension** — *Resolved by [Spinor Coherence Lagrangian](/derivations/foundation/spinor-coherence-lagrangian)* (Theorems 2.4 and 3.2). The Dirac field $\psi$ on $M_A$ has the same observer-as-source identification as the scalar: varying the Dirac Lagrangian with respect to the metric produces a stress-energy tensor whose source of the $M_A$ curvature (and, by the same coupling mechanism, of the coherence pattern field) carries the spinor's rest-energy content $mc^2$. The pattern signal $A(r) = mc^2(r_C/r)e^{-r/r_C}$ survives as the spin-averaged radial form; spin-dependent corrections enter as higher-order multipoles in the Dirac-source decomposition and vanish in the isotropic (rest-frame) limit. The amplitude scale $mc^2$ is unchanged because Identification 5.3 — the source of the $mc^2$ prefactor — is the same for scalar and spinor observers.

## References and further reading

**Framework inputs.**

- [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) — Theorem 3.1 (full Lagrangian with quartic potential); Proposition 4.1 (Klein-Gordon as Euler-Lagrange).
- [Observer Definition](/derivations/axioms/observer-definition) — Axiom 2; Identification 5.3 ($\mathcal{C}(\Sigma) = \|I\|$).
- [Mass Hierarchy](/derivations/particles/mass-hierarchy) — Definition 1.1 ($m = \hbar\omega/c^2$); Proposition 7.2 (epistemic boundary scaling).
- [Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) — Proposition 3.1 (horizon at $\pi r_C$).
- [Action and Planck's Constant](/derivations/thermodynamics/action-planck) — Theorem 5.1 stationary action principle.
- [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) — Proposition 4.1 (channel independence / additive composition).

**Classical field theory.**

- Yukawa, H. (1935). *On the interaction of elementary particles.* Proc. Phys.-Math. Soc. Japan 17:48. — Original Yukawa potential.
