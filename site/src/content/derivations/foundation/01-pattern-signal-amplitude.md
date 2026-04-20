---
title: "1. Pattern Signal Amplitude as a Function of Distance"
status: "provisional"
dependsOn: ["foundation/coherence-lagrangian", "axioms/observer-definition", "particles/mass-hierarchy", "thermodynamics/action-planck", "foundation/observer-as-error-correcting-code"]
enablesDerivation: []
tags: ["foundation", "pattern-edges", "error-correction"]
summary: "An observer localized on a worldline sources a coherence-field configuration whose amplitude at radial distance r is the Green's function of the Klein-Gordon operator derived from the Coherence Lagrangian. For a fundamental massive observer of mass m, the field takes the Yukawa form A(r) = mc² · (r_C/r) · exp(−r/r_C) with decay scale r_C = ℏ/(mc) — the Compton length. The Compton scale is not postulated: it is the inverse mass parameter in the Klein-Gordon equation that the Coherence Lagrangian's Euler-Lagrange equations produce. For composite observers with active gauge channels, additional Yukawa components contribute at each channel's mass scale, with massless mediators (EM) giving 1/r tails and massive mediators (weak, QCD-screened) giving short-range exponential suppression. This is step 1 of the pattern-edges-and-mutual-opacity research program: it supplies the signal-amplitude form that subsequent steps combine with the substrate noise floor to derive the operational edge, confinement as edge-collapse, and a mass fixed-point."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-20
---

## Overview

The pattern-edges research program proposes that an observer's operational boundary is the locus where the observer's pattern signal decays to the substrate noise floor. Making this precise requires specifying, at the framework level, how the observer's signal amplitude depends on radial distance from the observer's center.

This derivation performs that specification. The observer is a localized coherence-bearing structure with a worldline; by the Coherence Lagrangian, its coherence field satisfies the Klein-Gordon equation in the free/linearized regime; the Green's function of a static point source on that equation is the Yukawa form with decay scale set by the mass parameter. The mass parameter, in turn, is the observer's loop frequency via the framework's identification $m = \hbar\omega/c^2$ ([Mass Hierarchy](/derivations/particles/mass-hierarchy) Definition 1.1). Every ingredient comes from existing derivations; nothing new is postulated.

**The result.** For a fundamental massive observer of mass $m$, the pattern signal amplitude at radial distance $r$ from the observer's center is

$$A(r) \;=\; mc^2 \cdot \frac{r_C}{r} \cdot e^{-r/r_C}, \qquad r_C \;=\; \frac{\hbar}{mc}$$

at the leading classical (tree-level) order. The Compton length $r_C$ emerges as the decay scale because it is the inverse of the Klein-Gordon mass term; no short-distance or long-distance scale has to be introduced by hand. At $r = r_C$ the amplitude is $mc^2/e$; at $r \gg r_C$ it is exponentially suppressed; at $r \ll r_C$ it has the $1/r$ Green's function singularity, regulated at the Planck scale by the substrate discretization.

**For composite observers** with active gauge channels, each channel contributes an independent Yukawa component at its own mass scale. Photons (massless) give Coulomb $1/r$ tails; $W$, $Z$ (massive) give short-range exponential suppression at $\hbar/(M_W c)$; gluons (confined, screened at $\Lambda_{\mathrm{QCD}}$) give effective Yukawa suppression at the QCD screening scale. The composite profile's signal amplitude is

$$A(r;\, \mathcal{I}_A) \;=\; \sum_{i \in \mathrm{channels}(\mathcal{I}_A)} A_i(r)$$

with each $A_i(r)$ a Yukawa component at its channel's mass scale.

**Honest scope.** The Green's function form of Yukawa is a classical PDE result, rigorous. The identification of this Green's function as the framework's "pattern signal" is a structural commitment that ties the observer (Axiom 2) to its sourced coherence field (Coherence Lagrangian); it rests on existing derivations but was not previously stated. The overall amplitude coefficient — written here as $mc^2$ via the identification $\mathcal{C}(\Sigma) = \|I\|$ and $m = \hbar\omega/c^2$ — is a natural O(1) choice consistent with the framework's dimensional conventions, but depends on the specific normalization of the Lagrangian's source coupling. Spin-$1/2$ (Dirac) observers carry additional structure; this derivation works at the scalar level.

## Statement

**Theorem (Pattern signal Yukawa form).** *Let $A$ be an observer with state space $\Sigma_A$, loop frequency $\omega_A$, and mass $m_A = \hbar\omega_A/c^2$ ([Mass Hierarchy](/derivations/particles/mass-hierarchy) Definition 1.1). Let $\phi(x)$ be the coherence field solving the Coherence Lagrangian's Euler-Lagrange equations with source localized on $A$'s worldline. Then in the static limit and at linearized (tree) order, the radial pattern signal amplitude at distance $r$ from $A$'s center is*

$$A(r) \;=\; m_A c^2 \cdot \frac{r_{C,A}}{r} \cdot \exp\!\left(-\frac{r}{r_{C,A}}\right), \qquad r_{C,A} \;=\; \frac{\hbar}{m_A c}$$

*at tree level. The decay scale $r_{C,A}$ is the Compton length of $A$ and is fixed by the mass parameter of the Klein-Gordon equation; it is not an additional input.*

**Corollary (Amplitude at the Compton scale).** *$A(r_{C,A}) = m_A c^2 / e \approx 0.37\, m_A c^2$.*

**Corollary (Asymptotic behavior).** *$A(r) \to m_A c^2 \cdot r_{C,A}/r$ as $r/r_{C,A} \to 0$ (Green's-function singularity, regulated at Planck scale); $A(r) \to m_A c^2 \cdot (r_{C,A}/r) e^{-r/r_{C,A}} \to 0$ exponentially for $r \gg r_{C,A}$.*

**Theorem (Profile-dependent composite extension).** *For a composite observer with profile $\mathcal{I}_A$ carrying active gauge channels $\{i\}$ with channel-mediator masses $\{M_i\}$, the pattern signal amplitude is the sum of independent Yukawa components,*

$$A(r;\, \mathcal{I}_A) \;=\; \sum_{i \in \mathrm{channels}(\mathcal{I}_A)} g_i^2 \cdot \Lambda_i \cdot \frac{r_i}{r} \cdot \exp\!\left(-\frac{r}{r_i}\right), \qquad r_i \;=\; \frac{\hbar}{M_i c}$$

*with $\Lambda_i$ the channel's reference scale ($\Lambda_i = M_i c^2$ for fundamental mediators; $\Lambda_i = \Lambda_{\mathrm{QCD}}$ for color-screened composites) and $g_i$ the observer's coupling to channel $i$. For massless mediators ($M_i \to 0$), $A_i(r) \to g_i^2 \Lambda_i / r$ recovers the Coulomb form.*

## Derivation

### Step 1: The observer as a source of the coherence field

**Definition 1.1 (Pattern signal).** *The **pattern signal** $A(x)$ of observer $A$ at spacetime point $x$ is the amplitude of the coherence field $\phi(x)$ sourced by $A$'s worldline under the Coherence Lagrangian's dynamics, evaluated in $A$'s projected continuous dual $M_A$.*

**Proposition 1.2 (Observer sources the coherence field).** *Every observer has finite coherence $\mathcal{C}(\Sigma_A) > 0$ (Axiom 2 O1). By [Action and Planck's Constant](/derivations/thermodynamics/action-planck) Theorem 5.1, coherence-bearing structures contribute to the action $S = \int \mathcal{L}\, d^4x$. By the variational principle of the Coherence Lagrangian ([Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) Proposition 5.1), the field equations source terms come from the coherence-bearing content — i.e., observers are sources of $\phi$.*

**Remark 1.3 (What "source" means here).** *The observer does not inject coherence into $\phi$ from outside — coherence is conserved (Axiom 1). Instead, the observer's bulk coherence content $\mathcal{C}(\Sigma_A)$ appears in the Klein-Gordon equation as an effective source current $J_A(x)$ localized on $A$'s worldline $\gamma_A$. From the perspective of the field equation, $J_A$ plays the role of a $\delta$-function distribution with weight $\mathcal{C}(\Sigma_A)$.*

**Identification 1.4 (Source strength).** *By Identification 5.3 of [Observer Definition](/derivations/axioms/observer-definition.md) and the identification $m = \hbar\omega/c^2$ of [Mass Hierarchy](/derivations/particles/mass-hierarchy) Definition 1.1, the observer's coherence content is proportional to its rest energy:*

$$\mathcal{C}(\Sigma_A) \;=\; \|I_A\| \;\propto\; \hbar\omega_A \;=\; m_A c^2$$

*up to normalization fixed by choice of units. The effective source current strength is therefore $J_A \sim m_A c^2$.*

### Step 2: The Klein-Gordon equation as the field equation

**Proposition 2.1 (Coherence field satisfies Klein-Gordon).** *The linearized (small-$\phi$) Euler-Lagrange equation of the Coherence Lagrangian with quartic potential $V(\phi) = m^2|\phi|^2 + \lambda|\phi|^4$ is the Klein-Gordon equation:*

$$\left(\Box + \frac{m^2 c^2}{\hbar^2}\right)\phi \;=\; J$$

*where $\Box = \eta^{\mu\nu}\partial_\mu\partial_\nu$ is the d'Alembertian and $J$ is the source current. This is [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) Proposition 4.1(a).*

**Proposition 2.2 (Static form).** *For a static source on a timelike worldline, $\partial_t \phi = 0$ and the Klein-Gordon equation reduces to the Helmholtz-like equation*

$$\left(-\nabla^2 + \frac{1}{r_C^2}\right)\phi \;=\; J, \qquad r_C \;=\; \frac{\hbar}{mc}$$

*in spatial coordinates, with $r_C$ the Compton length of the source.*

**Remark 2.3 (Mass parameter identification).** *The mass parameter appearing as the coefficient of $|\phi|^2$ in the potential ([Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) Theorem 2.2) is the same mass that appears in Identification 1.4 as the observer's rest energy. Both identifications are framework-level: the Klein-Gordon mass is the physical (rest) mass, not an independent parameter.*

### Step 3: The Yukawa Green's function

**Proposition 3.1 (Green's function of the static Klein-Gordon operator).** *The fundamental solution of $(-\nabla^2 + 1/r_C^2) G = \delta^3(\mathbf{r})$ in three spatial dimensions is*

$$G(r) \;=\; \frac{e^{-r/r_C}}{4\pi r}$$

*a standard result of linear PDE theory (Yukawa 1935; any classical-field-theory text).*

*Proof sketch.* In radial coordinates with $\phi(r)$ spherically symmetric, the operator becomes $-\frac{1}{r}\frac{d^2}{dr^2}(r\phi) + \phi/r_C^2$. Writing $\phi = u/r$ reduces the homogeneous equation to $u'' - u/r_C^2 = 0$ with solution $u = A e^{-r/r_C} + B e^{+r/r_C}$; boundedness at infinity forces $B = 0$. Normalizing the $\delta$-source gives $A = 1/(4\pi)$. $\square$

**Remark 3.2 (Why Yukawa and not Coulomb).** *The Coulomb Green's function $1/(4\pi r)$ solves the massless equation $-\nabla^2 G = \delta^3$. The exponential factor $e^{-r/r_C}$ is the signature of the mass term: mass introduces a characteristic length $r_C$ beyond which the field decays exponentially. This is a direct consequence of the Coherence Lagrangian's potential $V \supset m^2|\phi|^2$ (not an additional input).*

### Step 4: The pattern signal amplitude

**Proposition 4.1 (Pattern signal for a point-source observer).** *For an observer localized at the origin with source strength $J_A = m_A c^2 \cdot \delta^3(\mathbf{r})$ (up to a unit-setting O(1) coefficient), the static coherence field at radial distance $r$ is the convolution of $J_A$ with the Yukawa Green's function:*

$$\phi(r) \;=\; (G * J_A)(r) \;=\; m_A c^2 \cdot \frac{e^{-r/r_{C,A}}}{4\pi r}$$

*The pattern signal amplitude, factoring out the $4\pi$ and multiplying by $r_{C,A}$ to render it dimensionally an energy (consistent with Identification 1.4), is:*

$$\boxed{\;A(r) \;=\; m_A c^2 \cdot \frac{r_{C,A}}{r} \cdot \exp\!\left(-\frac{r}{r_{C,A}}\right)\;}$$

*where the O(1) prefactor has been absorbed into the definition of $A(r)$ — this is a natural-units convention.*

**Remark 4.2 (Normalization convention).** *Different normalization conventions (e.g., $\phi$ dimensionless vs. energy-dimensioned; inclusion or omission of $4\pi$) give amplitudes differing by O(1) factors. The structural content — Yukawa decay, $r_{C,A}$ as the decay scale, amplitude $\sim m_A c^2$ near $r_{C,A}$ — is convention-independent and is what subsequent steps of the research program use.*

**Corollary 4.3 (Dimensionless form).** *Defining the dimensionless distance $x = r/r_{C,A}$, the pattern signal is $A(x) = m_A c^2 \cdot f(x)$ with $f(x) = e^{-x}/x$. The shape $f(x)$ is universal; the amplitude scale $m_A c^2$ and the decay length $r_{C,A}$ are observer-specific.*

**Corollary 4.4 (Amplitude at the Compton scale).** *$f(1) = 1/e \approx 0.368$, so $A(r_{C,A}) = m_A c^2 / e$. The Compton scale is where the signal amplitude is an O(1) fraction of the observer's rest energy.*

### Step 5: The Compton scale emerges, not postulated

**Remark 5.1 (Compton length from Klein-Gordon mass, not by hand).** *The decay length $r_{C,A} = \hbar/(m_A c)$ in Proposition 4.1 is not introduced as a profile-specific scale to be fitted; it is forced by the Klein-Gordon equation's mass term (Proposition 2.2). The chain from axioms to $r_{C,A}$ is:*

1. *Axioms 1, 2, 3 $\to$ [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) Theorem 3.1 — full Lagrangian with potential $V \supset m^2|\phi|^2$.*
2. *[Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) Proposition 4.1(a) — Klein-Gordon equation as Euler-Lagrange.*
3. *[Mass Hierarchy](/derivations/particles/mass-hierarchy) Definition 1.1 — $m = \hbar\omega/c^2$ ties mass parameter to loop frequency.*
4. *Green's function of static Klein-Gordon operator $\to$ Yukawa with $r_C = \hbar/(mc)$.*

*No step introduces $r_C$ independently. The Compton scale is the framework's natural field-decay scale for a massive observer.*

**Remark 5.2 (Consistency with other framework commitments).** *The Compton scale $r_{C,A}$ appears in the framework in three places, all pointing at the same physical length:*

- *As the **epistemic boundary scale** for fundamental particles: [Mass Hierarchy](/derivations/particles/mass-hierarchy) Proposition 7.2 derives $\mathcal{I}^{\max} \sim (m_P/m)^2$ using the Compton boundary area $\lambda_C^2$ where $\lambda_C = \hbar/(mc) = r_{C,A}$.*
- *As the **horizon scale** for the fundamental observer: [Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) derives $r_H = cT/2 = \pi\hbar/(mc) = \pi r_{C,A}$ from DAG antichain saturation at the observer's own cyclic period.*
- *As the **field-decay scale** (this derivation): $r_{C,A}$ is the Yukawa decay length of the observer's sourced coherence field.*

*The three identifications are independent: the first counts bits on the boundary, the second sets the horizon position via causal structure, the third sets the Yukawa profile's shape. That they all land on the Compton scale (up to O(1) factors) is a consistency signature: $r_C$ is the framework's natural length for a massive observer.*

### Step 6: Profile-dependent composite extension

For observers with active gauge channels — composite particles, atoms, larger structures — the pattern signal has contributions from each channel's mediator field in addition to the direct coherence field. Channels independent under the Standard Model's direct-product structure add additively, consistent with [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling.md) Proposition 4.1.

**Proposition 6.1 (Gauge-channel contributions).** *For each active gauge channel $i$ with mediator mass $M_i$ and coupling $g_i$, the channel's contribution to the pattern signal is*

$$A_i(r) \;=\; g_i^2 \cdot \Lambda_i \cdot \frac{r_i}{r} \cdot \exp\!\left(-\frac{r}{r_i}\right), \qquad r_i \;=\; \frac{\hbar}{M_i c}$$

*where $\Lambda_i$ is the channel's reference energy scale. For fundamental mediators ($\gamma$, $W$, $Z$), $\Lambda_i = M_i c^2$ with $M_\gamma = 0$, $M_W \approx 80$ GeV$/c^2$, $M_Z \approx 91$ GeV$/c^2$. For color-confined channels (gluons), the effective screened form uses $\Lambda_i = \Lambda_{\mathrm{QCD}}$ and $r_i \sim \hbar/(\Lambda_{\mathrm{QCD}}/c)$ — see Step 7.*

*Structural argument.* Each gauge channel's mediator field satisfies its own Klein-Gordon equation (for massive mediators) or massless wave equation (for $\gamma$), with the observer's gauge coupling acting as a source term. The Green's function argument of Step 3 applies channel-wise; the result is a Yukawa profile at the channel's mass scale. Channel independence (Standard Model direct-product structure, [Substrate Noise](/derivations/foundation/substrate-noise-and-profile-coupling.md) Proposition 4.1) forces additive composition. $\square$

**Proposition 6.2 (Massless mediator limit — Coulomb tails).** *As $M_i \to 0$ (photon case), $r_i \to \infty$ and $e^{-r/r_i} \to 1$ for all finite $r$. The Yukawa component reduces to*

$$A_{\mathrm{EM}}(r) \;=\; g_{\mathrm{EM}}^2 \cdot \Lambda_{\mathrm{EM}} \cdot \frac{r_0}{r}$$

*with $r_0$ a reference length — the Coulomb $1/r$ tail. The EM channel dominates the pattern signal at large distances $r \gg \hbar/(M_W c)$ because its massive-mediator competitors are exponentially suppressed while EM decays only as $1/r$.*

**Proposition 6.3 (Composite pattern signal).** *For an observer with profile $\mathcal{I}_A$ having active channels $\{i\}$, the total pattern signal amplitude is*

$$A(r;\, \mathcal{I}_A) \;=\; A_{\mathrm{direct}}(r) \;+\; \sum_{i \in \mathrm{channels}(\mathcal{I}_A)} A_i(r)$$

*where $A_{\mathrm{direct}}(r) = m_A c^2 (r_{C,A}/r) e^{-r/r_{C,A}}$ is the direct coherence-field contribution (Proposition 4.1) and each $A_i(r)$ is the Yukawa contribution from gauge channel $i$ (Proposition 6.1).*

### Step 7: Strong-coupling/confined channel treatment

The color channel (gluons) requires additional care because gluons are confined. At Planck scale $\alpha_s \to 1$ and the channel's effective coupling cannot be treated as small. However, the long-distance behavior is what matters for the pattern signal at macroscopic $r$, and at macroscopic scales the color coupling is *screened* by QCD running from $\alpha_s \sim 1$ at UV to $\alpha_s \sim 0.1$ at $\Lambda_{\mathrm{QCD}} \sim 0.3$ GeV.

**Proposition 7.1 (Color channel effective Yukawa).** *For a color-charged source, the long-distance color-channel pattern signal is effectively Yukawa with screening scale $\hbar/(\Lambda_{\mathrm{QCD}}/c)$:*

$$A_s(r) \;\sim\; g_{\mathrm{eff}}^2(r) \cdot \Lambda_{\mathrm{QCD}} \cdot \frac{r_s}{r} \cdot \exp\!\left(-\frac{r}{r_s}\right), \qquad r_s \;\sim\; \frac{\hbar}{\Lambda_{\mathrm{QCD}}/c} \;\sim\; 0.7\,\mathrm{fm}$$

*with $g_{\mathrm{eff}}(r)$ the running coupling at scale $r$. The exponential factor reflects the confinement flux-tube's linear potential translating into an effective screening length at hadron scale.*

**Remark 7.2 (Free quarks have no color component).** *For an isolated (non-color-neutral) quark, the color component of $A(r)$ does not have a finite long-distance asymptote: the linear confining potential grows without bound. This is the signature that the free-quark profile has no stable pattern signal at large distances — a property that Step 4 of the research program (coupling-dependent edge and confinement as edge collapse) exploits directly.*

## Consequences

**C1. Fundamental massive observers have Yukawa pattern signal at their Compton scale.** The direct coherence-field contribution is $A(r) = m_A c^2 (r_{C,A}/r) e^{-r/r_{C,A}}$. This is the classical linearized signal from the Coherence Lagrangian's Klein-Gordon dynamics.

**C2. The Compton scale is forced, not tuned.** $r_{C,A} = \hbar/(m_A c)$ is the inverse of the Klein-Gordon mass parameter. It is the same mass that sets the observer's loop frequency ($m = \hbar\omega/c^2$). No additional length scale is introduced.

**C3. Short-distance divergence is regulated at Planck scale.** The $1/r$ singularity of the Green's function at $r \to 0$ is regulated by the substrate discretization at $\ell_P$: the continuum-limit $\delta^3$-source is a coarse-graining of Planck-scale structure, and the field is finite for $r \gtrsim \ell_P$.

**C4. Long-distance behavior is exponentially suppressed beyond Compton.** At $r \gg r_{C,A}$, $A(r) \sim m_A c^2 (r_{C,A}/r) e^{-r/r_{C,A}} \to 0$. This is the structural reason why massive observers have bounded spatial extent: the pattern dies exponentially.

**C5. Composite observers have channel-wise Yukawa decompositions.** $A(r; \mathcal{I}_A)$ is additively the direct coherence contribution plus each gauge channel's Yukawa component. At very large $r$, the longest-range component dominates — for most observers this is the EM (Coulomb) tail.

**C6. The Compton-scale identification aligns with existing framework commitments.** [Mass Hierarchy](/derivations/particles/mass-hierarchy) (epistemic boundary), [Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) (null horizon position), and this derivation (field-decay scale) independently identify the same length. This is a consistency signature, not a new input.

**C7. The pattern signal is ready to be combined with the substrate noise floor.** Step 2 of the research program combines $A(r)$ with $\mathcal{N}(\mathcal{I}_A)$ from [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling.md) to define the operational edge. The Yukawa form of $A(r)$ will determine the edge-scale structure in Step 2.

## Rigor Assessment

**Rigorous (classical PDE + framework source):**

- Proposition 2.1 (Klein-Gordon from Coherence Lagrangian): direct from [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) Proposition 4.1.
- Proposition 3.1 (Yukawa Green's function): standard classical field theory.
- Corollaries 4.3–4.4 (dimensionless form, amplitude at Compton scale): direct substitution.
- Proposition 6.2 (massless mediator limit): standard Green's function limit.

**Semi-formal (structural identification with framework conventions):**

- Definition 1.1 and Proposition 1.2 (pattern signal as sourced coherence field): structural identification; the observer's coherence content is tied to the Klein-Gordon source via Identification 1.4.
- Identification 1.4 (source strength $\sim m_A c^2$): natural O(1) coefficient, depends on normalization convention; sensitivity of subsequent steps to the O(1) factor is flagged (all structural results of the research program are invariant under such rescalings).
- Proposition 4.1 (pattern signal form): combines rigorous Green's function with structural source identification; the specific amplitude form is the natural one under dimensional analysis and unit conventions.
- Proposition 6.1 (gauge-channel Yukawa contributions): channel-wise Klein-Gordon/wave equation Green's functions; additive composition from [Substrate Noise](/derivations/foundation/substrate-noise-and-profile-coupling.md) Proposition 4.1.

**Heuristic/deferred:**

- Proposition 7.1 (color channel effective Yukawa with QCD screening): correct qualitative picture but the screened-coupling treatment is heuristic; a rigorous non-perturbative derivation is flagged for subsequent work.
- Spinor observers: the derivation works at the scalar level. Fermionic observers (electrons, quarks, neutrinos) carry Dirac-spinor structure; the scalar Yukawa form is expected to be approximately correct for their coherence-field projection but a rigorous spinor-level derivation is an open gap.
- Precise O(1) coefficients: the amplitude $A(r) = m_A c^2 (r_{C,A}/r) e^{-r/r_{C,A}}$ is written without an overall O(1) prefactor; the prefactor depends on the Lagrangian's source-coupling normalization and is not pinned down here.

**Assessment:** The derivation is semi-formal. The classical PDE content (Klein-Gordon $\to$ Yukawa) is fully rigorous. The framework-specific content (coherence Lagrangian is the right field equation, observer's coherence content is the source, $m_A c^2$ sets the amplitude scale) combines existing derivations — each rigorous or semi-formal in its own right — into the pattern-signal identification. The Compton-scale decay length is forced by the framework; the overall amplitude scale is a natural O(1) choice. No structural postulate is introduced.

## Open Gaps

1. **Precise amplitude coefficient.** The overall O(1) prefactor in $A(r) = m_A c^2 (r_{C,A}/r) e^{-r/r_{C,A}}$ depends on the Lagrangian's source-coupling normalization convention. A rigorous pin-down would specify this prefactor from the Fisher-metric normalization in [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) and the coherence content's explicit identification with rest energy. *Difficulty: MODERATE.* All subsequent research-program results are invariant under O(1) rescalings.

2. **Spinor (Dirac) extension.** The Coherence Lagrangian derivation focuses on scalar fields ([Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) Open Gap 5); extending to spinor observers requires the Dirac Lagrangian treatment. For fundamental fermions, the pattern signal is expected to take a spinor-weighted form that reduces to the scalar Yukawa in the spin-averaged limit. *Difficulty: MODERATE.*

3. **Short-distance substrate regularization.** The $1/r$ Green's function singularity at $r \to 0$ is regulated at Planck scale by the substrate discretization ([Causal Set Statistics](/derivations/holography/causal-set-statistics)), but the precise matching between continuum Green's function and discrete substrate is not constructed. *Difficulty: MODERATE.*

4. **Non-perturbative color-channel treatment.** Proposition 7.1 uses a screened-coupling heuristic for color. A rigorous treatment via non-perturbative QCD or the framework's non-associativity confinement picture ([Confinement](/derivations/gauge/confinement.md)) would pin down the color pattern signal's form more carefully. *Difficulty: HARD.*

5. **Observer-projected geometry and distance definition.** In curved spacetime (near a massive observer or at cosmological scales), "radial distance" must be interpreted in the observer's projected continuous dual $M_A$ ([Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime.md)). The flat-spacetime Yukawa form is expected to generalize via the appropriate Klein-Gordon operator on $M_A$, but the explicit curved-space Green's function is not constructed. *Difficulty: MODERATE.*

6. **Relation to QEC pattern structure.** The pattern signal of this derivation is a classical-field amplitude; the observer's quantum-mechanical content is captured by the three-axis QEC code ([Observer as an Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code.md)). Making explicit how the classical pattern signal relates to the QEC code's spatial-axis boundary encoding ($N_A = A_A/4\ell_P^2$ horizon qubits) would tighten the program's structural story. *Difficulty: MODERATE.*

## References and further reading

**Framework inputs.**
- [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) — Theorem 3.1 full Lagrangian with quartic potential, Proposition 4.1 Klein-Gordon as Euler-Lagrange.
- [Observer Definition](/derivations/axioms/observer-definition) — Axiom 2 O1–O3; Identification 5.3 $\mathcal{C}(\Sigma) = \|I\|$.
- [Mass Hierarchy](/derivations/particles/mass-hierarchy) — Definition 1.1 $m = \hbar\omega/c^2$.
- [Action and Planck's Constant](/derivations/thermodynamics/action-planck) — Theorem 5.1 stationary action principle.
- [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) — Proposition 4.1 channel independence / additive composition.
- [Observer as an Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code) — three-axis code structure referenced in Open Gap 6.

**Classical field theory.**
- Yukawa, H. (1935). *On the interaction of elementary particles.* Proc. Phys.-Math. Soc. Japan 17:48. — Original Yukawa potential.
- Any classical field theory text: Green's function of $(-\nabla^2 + m^2)$ operator.

**Research-program context.** This is step 1 of the pattern-edges-and-mutual-opacity research program (see `research-targets/pattern-edges-and-mutual-opacity.md`). Subsequent steps combine the pattern signal $A(r)$ derived here with the substrate noise floor to define the operational edge, derive confinement as edge collapse, and investigate the edge fixed-point isomorphism with existing mass-selection mechanisms.
