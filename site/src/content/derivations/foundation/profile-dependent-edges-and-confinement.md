---
title: "Profile-Dependent Edges and Confinement"
status: "provisional"
dependsOn: ["foundation/observer-pattern-signal", "foundation/observer-edges-and-mutual-opacity", "gauge/confinement", "foundation/substrate-noise-and-profile-coupling", "gauge/color-force"]
enablesDerivation: ["foundation/formation-and-preservation"]
tags: ["foundation", "observer-structure", "gauge", "confinement"]
summary: "For observers with active gauge channels, the pattern signal is a sum of Yukawa contributions at each mediator's mass scale. The detection-noise edge equation solves against this composite signal, giving profile-dependent edges whose dominant channel depends on distance regime: short-range weak and color contributions at sub-weak scales, Coulomb-like EM at long distances. The observed interaction-range hierarchy — EM infinite, weak ~10⁻¹⁸ m, strong ~1 fm — emerges from the mediator mass hierarchy via the Yukawa range r_i = ℏ/(M_i c). For isolated color-charged profiles (free quarks) the color channel is structurally different: color flux has nowhere to terminate except at another color-charge, giving a linear confinement potential V ~ σr rather than Yukawa decay. The edge equation has no finite-r solution with this divergent signal — the isolated color-charged profile fails the edge-viability criterion. Color-neutral composites (hadrons) terminate internal flux tubes within the composite, giving exterior color signals Yukawa-screened at the Λ_QCD scale; hadrons have well-defined edges at ~1 fm. Confinement — the observed non-existence of free quarks — is thereby derived as a consequence of edge-viability failure, complementary to the Wilson-loop area-law picture of Confinement and the QEC-threshold picture of Substrate Noise Corollary 6.2. Three mutually-consistent mechanisms land on the same conclusion via different routes."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-21
---

## Overview

[Observer Pattern Signal](/derivations/foundation/observer-pattern-signal) derived the pattern signal as a sum of Yukawa components, one per active gauge channel, with each channel's range set by its mediator mass via $r_i = \hbar/(M_i c)$. [Observer Edges and Mutual Opacity](/derivations/foundation/observer-edges-and-mutual-opacity) established the edge as the signal-resolution crossover. This derivation combines the two for composite observers and derives two structurally important consequences: the interaction-range hierarchy and the confinement of isolated color charges.

**The short-range / long-range picture.** For a composite observer, the dominant channel at distance $r$ depends on $r$'s relationship to each channel's range:

- *Short distances* ($r \lesssim r_W \sim \hbar/(M_W c)$): all channels contribute; massive-mediator channels (weak, color-within-hadron) dominate via their strong coupling at short range.
- *Long distances* ($r \gg r_W$): only massless-mediator channels (Coulomb-like EM) survive; their $1/r$ tail is the only signal that reaches asymptotically.

This recovers the observed fact that long-range interactions are electromagnetic and short-range ones involve weak and strong channels. The range hierarchy EM > weak > strong follows from the mediator mass hierarchy $M_\gamma = 0 < M_W \sim 80\,\mathrm{GeV} < \Lambda_{\mathrm{QCD}}$ via the Yukawa range formula.

**Confinement.** An isolated color-charged observer presents a qualitatively different situation. The color channel does not behave as a Yukawa field for an isolated source: color flux has nowhere to terminate except at another color charge, giving a linear confinement potential $V(r) \sim \sigma r$ rather than Yukawa decay. This signal does not fall off with distance — it diverges. The edge equation has no finite-$r$ solution with a diverging signal; the isolated color-charged profile fails the edge-viability criterion. It is not a viable observer.

For color-neutral composites (hadrons), the internal flux tube terminates within the composite. The composite's exterior color signal is Yukawa-screened at the $\Lambda_{\mathrm{QCD}}$ scale; hadrons have well-defined edges at the fm scale.

**Three mutually consistent confinement pictures.** Confinement — the observed non-existence of free quarks — is derived here as a direct consequence of the edge-viability requirement. This joins two other framework-internal arguments:

- **Wilson-loop area-law** ([Confinement](/derivations/gauge/confinement)): non-associativity of $\mathbb{O}$ produces bracketing-ambiguity phase decoherence with path length, giving linear potential $V(r) \sim \sigma r$ at large $r$.
- **QEC-threshold** ([Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) Corollary 6.2): at $\alpha_s \to 1$, per-cell bit-flip rate $p_{\mathrm{phys}}^{\mathrm{eff,sp}}$ approaches threshold $p_{th}$; free-quark code fails preservation.
- **Edge-viability** (this derivation): isolated color-charged profiles have no finite-edge solution; not viable as isolated observers.

All three derive from different framework commitments; all three reach the same conclusion. Their mutual consistency is a framework-level coherence check.

**Honest scope.** The signal-side mechanism is structurally sound and follows from [Observer Pattern Signal](/derivations/foundation/observer-pattern-signal) plus standard QCD facts about color flux termination. The linear-potential value $\sigma$ and the $\Lambda_{\mathrm{QCD}}$ scale are empirical inputs here (they would require a first-principles Yang-Mills mass-gap derivation — the Clay Millennium problem — to be derived framework-internally). The precise matching of the edge location to $\Lambda_{\mathrm{QCD}}$ requires O(1) coefficient tracking not pinned down here.

## Statement

**Theorem (Composite-profile edge).** *Let $A$ be a composite observer with profile $\mathcal{I}_A$ active in gauge channels $\{i\}$ with mediator masses $\{M_i\}$ and couplings $\{g_i\}$. The pattern signal at distance $r$ is the sum of Yukawa components ([Observer Pattern Signal](/derivations/foundation/observer-pattern-signal) Proposition 6.3). The detection-noise edge for observer $B$ trying to resolve $A$ satisfies:*

$$\sum_{i \in \mathrm{channels}(\mathcal{I}_A)} g_i^2 \Lambda_i \frac{r_i}{r_{\mathrm{edge}}} \exp\!\left(-\frac{r_{\mathrm{edge}}}{r_i}\right) \;+\; A_{\mathrm{direct}}(r_{\mathrm{edge}};\, m_A) \;=\; m_B c^2$$

*with $r_i = \hbar/(M_i c)$ each channel's Yukawa range. This equation has a unique positive solution when every channel's signal is Yukawa-like (exponentially or power-law decaying) at large $r$.*

**Theorem (Range hierarchy from mediator mass hierarchy).** *The observed hierarchy of interaction ranges — EM (infinite), weak ($\sim 10^{-18}$ m), strong ($\sim 1$ fm) — follows from the mediator mass hierarchy $M_\gamma = 0 < M_W \sim 80\,\mathrm{GeV} < \Lambda_{\mathrm{QCD}} \sim 0.3\,\mathrm{GeV}$ via the Yukawa range $r_i = \hbar/(M_i c)$.*

**Theorem (Dominant channel by distance regime).** *At distance $r$, the dominant contribution to $A(r; \mathcal{I}_A)$ is the channel with the largest $r_i$ satisfying $r \lesssim r_i$:*

- *$r \lesssim r_s \sim \hbar/(\Lambda_{\mathrm{QCD}}/c) \sim 1$ fm: color channel (within hadrons) dominates.*
- *$r_s \ll r \lesssim r_W \sim \hbar/(M_W c) \sim 10^{-18}$ m: weak channel dominates.*
- *$r \gg r_W$: EM Coulomb ($1/r$) is the only surviving channel.*

**Theorem (Free-quark edge pathology).** *For an isolated color-charged profile, the color channel's signal does not have a Yukawa-like form at any coupling strength. Non-termination of color flux (no external color-charge sink for an isolated source) produces a linear confining potential $V(r) \sim \sigma r$ at large $r$ (consistent with [Confinement](/derivations/gauge/confinement) and lattice QCD). The signal diverges rather than decays; the edge equation has no finite-$r$ solution. The isolated color-charged profile fails the edge-viability criterion.*

**Corollary (Confinement from edge-viability).** *An isolated color-charged profile does not satisfy the edge-existence requirement. Free quarks are not viable as asymptotic observers.*

**Theorem (Hadrons recover viability).** *For a color-neutral composite (a meson, $q\bar{q}$; a baryon, $qqq$; etc.), internal color flux tubes terminate between constituents within the composite. The exterior color signal is Yukawa-screened at the hadron scale, with effective screening length $r_s \sim \hbar/(\Lambda_{\mathrm{QCD}}/c) \sim 1$ fm. The composite has a well-defined edge at the hadron scale.*

**Corollary (Three complementary confinement pictures).** *The framework has three framework-internal arguments for QCD confinement — Wilson-loop area-law ([Confinement](/derivations/gauge/confinement)), QEC-threshold ([Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) Corollary 6.2), and edge-viability failure (this derivation) — derived via different mechanisms and reaching the same conclusion. Their mutual consistency is a framework-level coherence check.*

## Derivation

### Step 1: Composite-profile edge equation

From [Observer Pattern Signal](/derivations/foundation/observer-pattern-signal) Proposition 6.3, the composite signal is

$$A(r;\, \mathcal{I}_A) \;=\; A_{\mathrm{direct}}(r;\, m_A) \;+\; \sum_{i \in \mathrm{channels}(\mathcal{I}_A)} A_i(r)$$

where $A_{\mathrm{direct}}(r; m_A) = m_A c^2 (r_{C,A}/r) e^{-r/r_{C,A}}$ is the direct Yukawa from $A$'s rest mass, and each $A_i(r) = g_i^2 \Lambda_i (r_i/r) e^{-r/r_i}$ is a channel-wise contribution with $r_i = \hbar/(M_i c)$.

**Proposition 1.1 (Composite edge equation).** *Combining this with the edge condition $A(r_{\mathrm{edge}}) = m_B c^2$ from [Observer Edges and Mutual Opacity](/derivations/foundation/observer-edges-and-mutual-opacity) Proposition 2.2:*

$$m_A c^2 \frac{r_{C,A}}{r_{\mathrm{edge}}} e^{-r_{\mathrm{edge}}/r_{C,A}} \;+\; \sum_{i} g_i^2 \Lambda_i \frac{r_i}{r_{\mathrm{edge}}} e^{-r_{\mathrm{edge}}/r_i} \;=\; m_B c^2$$

*has a unique positive solution for all profiles where every channel's signal is Yukawa-like (including the massless-mediator limit $r_i \to \infty$ where $A_i(r) \to g_i^2 \Lambda_i / r$, the Coulomb form).*

### Step 2: Short-range regime — massive-mediator channels

**Proposition 2.1 (Short-range dominance).** *At distances $r$ much smaller than all channel ranges $r_i$, each channel contributes its near-source form $A_i(r) \to g_i^2 \Lambda_i (r_i/r)$ (Yukawa factor $e^{-r/r_i} \to 1$). Shortest-range channels dominate when their couplings are comparable to others.*

**Concretely, for SM particles:**

- *Direct coherence: $r_{C,A}$ is the observer's Compton length.*
- *EM channel: $r_\gamma = \infty$, contributes $\alpha_{\mathrm{EM}}/r$ for all $r$.*
- *Weak channel: $r_W = \hbar/(M_W c) \approx 2.5 \times 10^{-18}$ m.*
- *Color channel (color-neutral profiles): $r_s \sim 10^{-15}$ m (hadron scale).*

*At $r \sim r_s$: all channels contribute. At $r \sim r_W$: color channel exponentially small; weak, EM, direct contribute. At $r \gg r_W$: only EM survives.*

### Step 3: Long-range regime — EM Coulomb dominates

**Proposition 3.1 (Long-distance edge determined by EM).** *At distances $r \gg r_W$, the only surviving channel is EM. The edge equation simplifies to*

$$\frac{\alpha_{\mathrm{EM}} \cdot r_0}{r_{\mathrm{edge}}} \;\approx\; \frac{m_B c^2}{\Lambda_{\mathrm{EM}}}$$

*(keeping only the EM Coulomb term, with $r_0$ a reference length). For charge-$Q$ observers with $Q^2 \alpha_{\mathrm{EM}}$ dimensionless coupling, the edge at large distance is set by the detector's resolution and the source's charge.*

### Step 4: The color channel — pathological for isolated sources

**Proposition 4.1 (Color channel has no Yukawa-like isolated-source form).** *For an isolated color-charged profile (a single quark with no color-partner), the color-channel signal does not take the Yukawa form. Non-abelian gauge-field dynamics at strong coupling produce a linear confinement potential $V(r) \sim \sigma r$ at large $r$, where $\sigma \sim (440\,\mathrm{MeV})^2$ is the QCD string tension ([Confinement](/derivations/gauge/confinement) Proposition 4.1).*

**Structural argument.** Color flux lines from an isolated source cannot terminate in vacuum — there is no external color charge to receive them. Unlike EM (where $\nabla \cdot \mathbf{E} \sim \rho$ allows flux to diverge radially into vacuum), color flux must terminate at another color charge. For an isolated source, the flux is forced into a finite-cross-section "tube" or "string" configuration, giving energy $V(r) \sim \sigma r$ at distance $r$ from the source. This is the Wilson-loop area-law from the perspective of a single source. $\square$

**Remark 4.2 (Not a Yukawa signal).** *A Yukawa signal decays: $A_i(r) \to 0$ as $r \to \infty$. A linear confining potential grows: $V(r) \to \infty$ as $r \to \infty$. These are qualitatively different; the Yukawa form is the radial Green's function of a massive scalar, the linear form is the energy of a 1D flux tube. The composite-profile edge equation's assumption of Yukawa-like channel contributions does not apply to isolated color-charged sources.*

### Step 5: The edge equation has no finite-$r$ solution for isolated color

**Proposition 5.1 (Edge equation fails for isolated color-charged source).** *For an isolated color-charged profile, the color-channel contribution to $A(r)$ is not $A_{\mathrm{color}}(r) = g_s^2 \Lambda_s (r_s/r) e^{-r/r_s}$ (Yukawa) but rather $A_{\mathrm{color}}(r) \sim \sigma r$ (linear growth) at large $r$. Substituting into the composite edge equation:*

$$\sigma r_{\mathrm{edge}} \;+\; (\mathrm{other\ channels}) \;=\; m_B c^2$$

*For any finite $\sigma > 0$ and any finite detector mass $m_B$, the equation has no large-$r$ solution: as $r \to \infty$, $\sigma r \to \infty \gg m_B c^2$. The other channels' contributions at large $r$ are bounded (Yukawa-decaying); the color term dominates and diverges. No finite $r_{\mathrm{edge}}$ satisfies the equation in the large-$r$ regime.*

*At small $r$ the equation has a formal solution, but that is the Green's function short-distance divergence regulated at Planck scale, not the external-observer-resolvability edge.*

**Remark 5.2 (No self-screening rescue).** *An isolated source has no internal screening (no color partner within the source). Screening is provided only by another color charge external to the source. An isolated color-charged profile cannot self-screen.*

**Corollary 5.3 (Free quark is not a viable isolated observer).** *The isolated color-charged profile fails the edge-viability criterion. Free quarks do not exist as asymptotic observers.*

### Step 6: Hadrons recover viability

**Proposition 6.1 (Color-neutral composites have terminating flux tubes).** *For a color-neutral composite, color flux between constituents terminates within the composite. There is no net external color flux — internally, flux tubes connect constituents; externally, the color charge is zero.*

**Proposition 6.2 (Exterior color signal Yukawa-screened at $\Lambda_{\mathrm{QCD}}$).** *The hadron's exterior color-dipole signal has effective screening length $r_s \sim \hbar/(\Lambda_{\mathrm{QCD}}/c) \sim 0.7$ fm ([Observer Pattern Signal](/derivations/foundation/observer-pattern-signal) Proposition 7.1). The color component of $A(r; \mathcal{I}_{\mathrm{hadron}})$ at distances exceeding the hadron scale is exponentially suppressed:*

$$A_{\mathrm{color}}^{\mathrm{hadron}}(r) \;\sim\; (\mathrm{color\text{-}dipole\ moment}) \cdot e^{-r/r_s}/r$$

*This is a well-defined Yukawa signal with finite range. The hadron's composite signal satisfies the edge equation with a finite $r_{\mathrm{edge}}$.*

**Proposition 6.3 (Hadron edge is at the hadron scale).** *For a color-neutral composite with direct-coherence mass $m_{\mathrm{hadron}}$ and Yukawa-screened color channel, the composite edge is at*

$$r_{\mathrm{edge}}^{\mathrm{hadron}} \;\approx\; \min\!\left(r_{C,\mathrm{hadron}}, r_s\right) \;\sim\; 1\,\mathrm{fm}$$

*with $r_s \sim 0.7$ fm for color-dipole-screened signal and $r_{C,\mathrm{hadron}}$ of order the Compton length of the composite (for the proton, $r_{C,p} \sim 0.2$ fm). Both are fm-scale; the composite has a well-defined edge at the fm scale, consistent with hadron sizes observed in scattering experiments.*

### Step 7: Confinement as edge-viability failure

**Theorem 7.1 (Confinement from edge-viability).** *QCD confinement — the observed non-existence of free quarks — is a consequence of the edge-viability requirement applied to isolated color-charged profiles (Proposition 5.1), combined with the edge-viability of color-neutral composites (Proposition 6.3).*

*Formally: free quarks fail the edge-existence criterion; hadrons satisfy it. The framework's commitment to observers having well-defined edges (the operational content of being a pattern) therefore excludes free quarks and admits hadrons. Confinement is structural.*

**Remark 7.2 (Three framework-internal confinement arguments).**

1. ***Wilson-loop area-law*** *([Confinement](/derivations/gauge/confinement) Proposition 4.1): non-associativity of $\mathbb{O}$ produces bracketing-ambiguity phase decoherence growing with path length; random-walk mixing on $SU(3)$ gives amplitude decay $\sim e^{-r/r_0}$ and effective potential $V(r) \sim \sigma r$.*
2. ***QEC-threshold*** *([Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) Corollary 6.2): color-charged profile's QEC spatial-axis noise $p^{\mathrm{eff,sp}} \to p_{th}$ as $\alpha_s \to 1$; free-quark code fails preservation.*
3. ***Edge-viability*** *(this derivation): color flux for isolated source has no Yukawa-like radial decay; the edge equation has no finite solution.*

*Each is a distinct mechanism landing on the same phenomenological conclusion.*

### Step 8: Interaction range hierarchy from mediator mass hierarchy

**Proposition 8.1 (Yukawa range formula).** *For each gauge channel with mediator mass $M_i$, the channel's signal falls off exponentially at distances $r \gtrsim r_i = \hbar/(M_i c)$.*

**Numerical consequences for the SM:**

| Channel | Mediator | $M_i$ | $r_i = \hbar/(M_i c)$ |
|---|---|---|---|
| EM | $\gamma$ | $0$ | $\infty$ |
| Weak | $W^\pm, Z$ | $\sim 80$–$91$ GeV | $\sim 2.5 \times 10^{-18}$ m |
| Strong (effective, within hadrons) | (color dipole) | $\Lambda_{\mathrm{QCD}} \sim 0.3$ GeV | $\sim 7 \times 10^{-16}$ m |
| Strong (isolated, free quark) | — | no well-defined mediator mass | — (edge pathology) |

**Theorem 8.2 (Observed range hierarchy matches framework prediction).** *The observed interaction-range hierarchy — EM infinite, weak $\sim 10^{-18}$ m, strong $\sim 1$ fm — matches the Yukawa range formula applied to SM mediator masses. The range hierarchy follows from the mass hierarchy.*

## Consequences

**C1. Composite observers have multi-channel Yukawa edges.** The edge equation sums Yukawa contributions from each active gauge channel; the dominant channel depends on distance regime.

**C2. Range hierarchy from mediator mass hierarchy.** Observed EM/weak/strong range hierarchy follows from the Yukawa range formula $r_i = \hbar/(M_i c)$ applied to SM mediator masses.

**C3. Confinement as edge-viability failure.** Isolated color-charged profiles have pathological (non-Yukawa, linearly-divergent) signals; the edge equation has no finite solution. Free quarks are not viable observers.

**C4. Hadrons satisfy edge viability at fm scale.** Color-neutral composites screen internal flux tubes; exterior color signal is Yukawa-screened at $\Lambda_{\mathrm{QCD}}$; composite edge at $\sim 1$ fm.

**C5. Three framework-internal confinement pictures converge.** Wilson-loop area-law, QEC-threshold, and edge-viability all give confinement. Their mutual consistency is a framework coherence check.

**C6. Mass-to-range connection at observational scales.** The Yukawa range formula $r \sim \hbar/(Mc)$ between mediator mass and effective interaction range is recovered directly from the composite-profile edge structure.

## Rigor Assessment

**Rigorous (from source derivations):**

- Proposition 1.1 (composite edge equation): direct substitution.
- Proposition 8.1 (Yukawa range formula): from [Observer Pattern Signal](/derivations/foundation/observer-pattern-signal) Proposition 6.1.
- Theorem 8.2 (range hierarchy matches observation): direct numerical comparison.

**Semi-formal (standard-physics inputs):**

- Proposition 4.1 (non-Yukawa color signal): uses standard QCD result on linear confinement; consistent with [Confinement](/derivations/gauge/confinement) Proposition 4.1.
- Proposition 5.1 (no finite edge for isolated color): structural consequence of Proposition 4.1.
- Proposition 6.2 (hadron exterior signal Yukawa-screened): standard non-perturbative QCD result.

**Deferred (standard-physics inputs):**

- Linear potential value $\sigma \sim (440\,\mathrm{MeV})^2$: empirical QCD parameter, not derived here.
- $\Lambda_{\mathrm{QCD}} \sim 0.3$ GeV: empirical.
- Precise $r_s$ for hadron color-dipole screening depends on hadron species; this derivation uses the generic fm-scale.
- A rigorous first-principles derivation of the linear potential from non-abelian gauge-field dynamics is the content of the Yang-Mills mass gap problem (Clay Millennium). Not attempted.

**Assessment:** Semi-formal. The core structural content — composite signal as multi-channel Yukawa sum, color-channel pathology for isolated sources, edge-viability failure giving confinement — follows from [Observer Pattern Signal](/derivations/foundation/observer-pattern-signal) and [Observer Edges and Mutual Opacity](/derivations/foundation/observer-edges-and-mutual-opacity) plus standard QCD facts. Specific numerical scales are empirical inputs. The three-way consistency with Wilson-loop and QEC-threshold pictures is a framework-level coherence check.

## Open Gaps

1. **First-principles linear-potential derivation.** The linear confinement potential $V(r) \sim \sigma r$ is taken as input from standard QCD. A fully framework-internal first-principles derivation of $\sigma$ would tighten this derivation. *Difficulty: HARD; connects to the Clay Millennium mass gap problem.*

2. **Explicit hadron-edge computation.** The hadron edge at $\sim 1$ fm is asserted from the $\Lambda_{\mathrm{QCD}}$ screening scale. A specific computation for each hadron (proton, neutron, pion, $\Delta$-baryon) deriving the precise $r_{\mathrm{edge}}$ as a function of quark content and binding structure would test the composite-profile edge framework phenomenologically. *Difficulty: MODERATE.*

3. **Short-range weak-channel dominance regime.** At distances $r \sim r_W$, the weak channel is at its peak relative contribution. Deriving observed short-range weak physics (beta decay, neutrino interactions) from the framework's edge structure would be an informative test. *Difficulty: MODERATE.*

4. **Gravitational channel.** A gravitational channel is not explicitly treated here. For macroscopic observers, gravitational effects can dominate the signal at large distances. Extending to gravitational signals requires integration with [Gravity](/derivations/spacetime/gravity) and [Einstein Field Equations](/derivations/spacetime/einstein-equations). *Difficulty: HARD.*

## Addressed Gaps

1. **Fermion profiles** — *Resolved by [Spinor Coherence Lagrangian](/derivations/foundation/spinor-coherence-lagrangian)* via [Observer Pattern Signal](/derivations/foundation/observer-pattern-signal) Addressed Gap 1. The composite-profile edge equation is agnostic to the spin structure of the source: it takes as input the channel-wise Yukawa contributions from the upstream pattern-signal derivation, and the spin-averaged Dirac source produces the same radial Yukawa form $A_i(r) = g_i m c^2 (r_i/r) e^{-r/r_i}$ that the scalar source produces. The composite-profile derivation therefore applies unchanged to fermion observers (electrons, neutrinos, quarks within color-neutral composites). The confinement analysis for isolated color charges is similarly source-agnostic — the structural content is color-flux termination, not the spin of the colored source.

## References and further reading

**Framework inputs.**

- [Observer Pattern Signal](/derivations/foundation/observer-pattern-signal) — Proposition 6.1 (gauge-channel Yukawa contributions); Proposition 7.1 (color-channel treatment).
- [Observer Edges and Mutual Opacity](/derivations/foundation/observer-edges-and-mutual-opacity) — edge equation, detection-noise formulation.
- [Confinement](/derivations/gauge/confinement) — Wilson-loop area-law picture; Proposition 4.1 (linear potential from random walk on $SU(3)$).
- [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) — QEC-threshold picture of confinement (Corollary 6.2).
- [Color Force](/derivations/gauge/color-force) — $SU(3)$ gauge structure from octonion stabilizer.
- [Observer as an Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code) — three-axis profile structure.

**Standard QCD.**

- String tension $\sigma \sim (440\,\mathrm{MeV})^2$ from lattice QCD.
- $\Lambda_{\mathrm{QCD}} \sim 0.3$ GeV from asymptotic-freedom running.
- Wilson, K. G. (1974). *Confinement of quarks.* Phys. Rev. D 10:2445.
