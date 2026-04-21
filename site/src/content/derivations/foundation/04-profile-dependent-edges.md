---
title: "4. Profile-Dependent Edges and Confinement as Signal Pathology"
status: "provisional"
dependsOn: ["foundation/01-pattern-signal-amplitude", "foundation/02-operational-edge", "foundation/03-mutual-opacity", "gauge/confinement", "foundation/substrate-noise-and-profile-coupling", "gauge/color-force"]
enablesDerivation: []
tags: ["foundation", "pattern-edges", "gauge", "confinement"]
summary: "For observers with active gauge channels, the pattern signal is a sum of Yukawa contributions at each channel's mediator mass scale (Formalization 1). The detection-noise edge (Formalization 2) solves against this composite signal, giving profile-dependent edges whose dominant channel depends on distance: short-range weak/strong contributions at sub-weak scales, Coulomb-like EM at long distances. For isolated color-charged profiles (free quarks), the color channel is structurally different: color flux has nowhere to terminate except at another color-charge, so the isolated-source field does not have a Yukawa-like radial decay but a linear-confinement potential V ∼ σr. This is not a Yukawa signal that decays; it is a signal that diverges, which does not define a finite edge from the F2 edge equation — the isolated color-charged profile fails the edge-viability criterion. Color-neutral composites (hadrons) terminate internal flux tubes within the composite, giving an exterior color signal Yukawa-screened at Λ_QCD scale; hadrons have well-defined edges at ~1 fm. Confinement — the observed non-existence of free quarks — is thereby derived as a direct consequence of the edge-viability requirement, complementary to the Wilson-loop area-law picture of Confinement and the QEC-threshold picture of Substrate Noise Corollary 6.2. Three mutually consistent mechanisms land on the same conclusion via different routes. Under the Option-3 detection-noise formulation adopted in Formalization 2, confinement is signal-side pathology (isolated color-charged signals do not have a finite-edge solution), not noise-side threshold crossing (as the original research target phrased it). The interaction-range hierarchy of EM (infinite) / weak (10⁻¹⁸ m) / strong (1 fm) is also derived, from the mediator mass hierarchy via the Yukawa range r_i = ℏ/(M_i c) — not from coupling-dependent noise."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-20
---

## Overview

Formalization 1 derived the pattern signal amplitude as a sum of Yukawa components, one per active gauge channel:

$$A(r;\, \mathcal{I}_A) \;=\; A_{\mathrm{direct}}(r) \;+\; \sum_{i \in \mathrm{channels}(\mathcal{I}_A)} A_i(r)$$

with each $A_i(r) = g_i^2 \Lambda_i (r_i/r) e^{-r/r_i}$ and $r_i = \hbar/(M_i c)$ the mediator's Compton length. Formalization 2 established the edge as the signal-resolution crossover $A(r_{\mathrm{edge}}; \mathcal{I}_A) = m_B c^2$. This derivation puts the two together: for a composite observer with active gauge channels, what does the edge look like? What does it say about confinement?

**The short-range / long-range picture.** For a composite observer, the dominant channel at distance $r$ depends on $r$'s relationship to each channel's range $r_i$:

- *Short distances* ($r \lesssim r_W \sim \hbar/(M_W c)$): all channels contribute; massive-mediator channels (weak, color-within-hadron) dominate via their strong coupling at short range.
- *Long distances* ($r \gg r_W$): only massless-mediator channels (Coulomb-like EM) survive; their $1/r$ tail is the only signal that reaches asymptotically.

This recovers the observed fact that long-range interactions are electromagnetic; short-range ones involve weak and strong channels. The *range hierarchy* EM > weak > strong falls out of the *mediator mass hierarchy* $M_\gamma = 0 < M_W \sim 80\,\mathrm{GeV} < \Lambda_{\mathrm{QCD}}$ via the Yukawa range formula. No coupling-dependent noise is invoked — just signal-side Yukawa decay.

**Confinement under this formulation.** An isolated color-charged observer (free quark) presents a qualitatively different problem. The color channel does not behave as a Yukawa field for an isolated source: color flux has nowhere to terminate except at another color charge, giving a linear confinement potential $V(r) \sim \sigma r$ rather than Yukawa decay $(r_i/r) e^{-r/r_i}$. This signal does not fall off with distance — it diverges. The edge equation $A(r_{\mathrm{edge}}) = m_B c^2$ has no finite-$r$ solution with a diverging signal; the free-quark profile fails the edge-viability criterion. The isolated color-charged profile is not a viable observer.

For color-neutral composites (hadrons), the internal flux tube terminates within the composite. The composite's exterior color signal is effectively Yukawa-screened at the $\Lambda_{\mathrm{QCD}}$ scale (internal cancellation of color charges leaves only short-range color-dipole effects at the hadron boundary). Hadrons have well-defined edges at the fm scale $\sim \hbar/(\Lambda_{\mathrm{QCD}}/c)$.

**Three mutually consistent confinement pictures.** This derivation gives a third framework-internal argument for quark confinement, complementary to:

- **Wilson-loop area-law** ([Confinement](/derivations/gauge/confinement.md)): non-associativity of $\mathbb{O}$ produces bracketing-ambiguity phase decoherence with path length, giving linear potential $V(r) \sim \sigma r$ at large $r$. Color-singlet projection annihilates the associator, recovering free transport for hadrons.
- **QEC-threshold** ([Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling.md) Corollary 6.2): at $\alpha_s \to 1$, per-cell bit-flip rate $p_{\mathrm{phys}}^{\mathrm{eff,sp}}$ approaches threshold $p_{th}$; free-quark code fails preservation at Planck-scale color coupling.
- **Edge pathology** (this derivation): isolated color-charged profiles have no finite-edge solution under the F2 edge equation; not viable as isolated observers.

All three derive from different framework commitments and all three reach the same conclusion: isolated quarks do not exist as asymptotic states; quarks are observed only in color-neutral bound states.

**Under the Option-3 detection-noise formulation** (adopted in F2), confinement is *signal-side pathology* — the color channel's ill-defined radial structure for isolated sources — not *noise-side threshold crossing* as the original research target phrased it. The target's language "$r_{\mathrm{edge}}^{\mathrm{eff}} \to 0$ as $\alpha_s \to 1$" is replaced by "$r_{\mathrm{edge}}$ is undefined for isolated color-charged profiles." The phenomenology (confinement) is recovered; the structural mechanism is more consistent with the framework's observer-centrism.

**Honest scope.** The signal-side mechanism is structurally sound but inherits the semi-formal status of Formalization 1 (classical-field pattern signal). The long-distance QCD behavior (linear potential, flux-tube dynamics) uses standard non-perturbative QCD as a consistency input rather than deriving it from framework first principles. The precise matching of the edge location to $\Lambda_{\mathrm{QCD}}$ requires O(1) coefficient tracking not pinned down here.

## Statement

**Theorem (Composite-profile edge).** *Let $A$ be a composite observer with profile $\mathcal{I}_A$ active in gauge channels $\{i\}$ with mediator masses $\{M_i\}$ and couplings $\{g_i\}$. The pattern signal at distance $r$ is the sum of Yukawa components (Formalization 1 Proposition 6.3). The detection-noise edge for observer $B$ trying to resolve $A$ satisfies:*

$$\sum_{i \in \mathrm{channels}(\mathcal{I}_A)} g_i^2 \Lambda_i \frac{r_i}{r_{\mathrm{edge}}} \exp\!\left(-\frac{r_{\mathrm{edge}}}{r_i}\right) \;+\; A_{\mathrm{direct}}(r_{\mathrm{edge}};\, m_A) \;=\; m_B c^2$$

*This equation has a unique positive solution when every channel's signal is Yukawa-like (exponentially or power-law decaying) at large $r$.*

**Theorem (Dominant channel by distance regime).** *At distance $r$, the dominant contribution to $A(r; \mathcal{I}_A)$ is the channel $i$ with the largest $r_i$ satisfying $r \lesssim r_i$:*

- *$r \lesssim r_s \sim \hbar/(\Lambda_{\mathrm{QCD}}/c)$ ($\sim 1$ fm): color channel (in hadrons) dominates.*
- *$r_s \ll r \lesssim r_W \sim \hbar/(M_W c)$ ($\sim 10^{-18}$ m): weak channel dominates.*
- *$r \gg r_W$: EM Coulomb ($1/r$) is the only surviving channel.*

**Theorem (Interaction range hierarchy from mediator mass hierarchy).** *The observed hierarchy of interaction ranges — EM (infinite), weak ($\sim 10^{-18}$ m), strong ($\sim 1$ fm) — is derived from the mediator mass hierarchy $M_\gamma = 0 < M_W \sim 80\,\mathrm{GeV} < \Lambda_{\mathrm{QCD}} \sim 0.3\,\mathrm{GeV}$ via the Yukawa range $r_i = \hbar/(M_i c)$. No coupling-dependent noise is invoked.*

**Theorem (Free-quark edge pathology).** *For an isolated color-charged profile (a free quark), the color channel's signal does not have a Yukawa-like form at any coupling strength. Instead, non-termination of color flux (no external color-charge sink for isolated source) produces a linear confining potential $V(r) \sim \sigma r$ at large $r$ (consistent with [Confinement](/derivations/gauge/confinement.md) and lattice QCD). The signal thus diverges rather than decays; the edge equation has no finite-$r$ solution. The isolated color-charged profile fails the edge-viability criterion.*

**Corollary (Free quarks are not viable isolated observers).** *An isolated color-charged profile does not satisfy the edge-existence requirement of [Formalization 2](/derivations/foundation/02-operational-edge). Free quarks are not viable as asymptotic states. This is confinement, derived from the edge-viability criterion.*

**Theorem (Hadrons restore viability).** *For a color-neutral composite (a hadron), internal color flux tubes terminate between constituents within the composite's own coherence domain. The exterior color signal is effectively Yukawa-screened at the hadron scale, with effective screening length $r_s \sim \hbar/(\Lambda_{\mathrm{QCD}}/c) \sim 1$ fm. The composite has a well-defined edge at the hadron scale.*

**Corollary (Three complementary confinement pictures).** *The framework has three framework-internal arguments for QCD confinement:*

1. *Wilson-loop area-law from octonionic non-associativity ([Confinement](/derivations/gauge/confinement.md)).*
2. *QEC-threshold crossing for color-charged codes ([Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling.md) Corollary 6.2).*
3. *Edge-viability failure for isolated color-charged profiles (this derivation).*

*All three are structurally distinct; all three reach the same conclusion (free quarks not viable); their mutual consistency is a framework-level coherence check.*

## Derivation

### Step 1: Composite-profile edge equation

**Recap from Formalization 1.** For a composite observer $A$ with profile $\mathcal{I}_A$, the pattern signal at distance $r$ is

$$A(r;\, \mathcal{I}_A) \;=\; A_{\mathrm{direct}}(r;\, m_A) \;+\; \sum_{i \in \mathrm{channels}(\mathcal{I}_A)} A_i(r)$$

where $A_{\mathrm{direct}}(r; m_A) = m_A c^2 (r_{C,A}/r) e^{-r/r_{C,A}}$ is the direct Yukawa from $A$'s rest mass, and each $A_i(r) = g_i^2 \Lambda_i (r_i/r) e^{-r/r_i}$ is a channel-wise contribution with mediator range $r_i = \hbar/(M_i c)$.

**Proposition 1.1 (Composite edge equation).** *Combining Formalization 1's composite signal with Formalization 2's edge condition $A(r_{\mathrm{edge}}) = m_B c^2$:*

$$m_A c^2 \frac{r_{C,A}}{r_{\mathrm{edge}}} e^{-r_{\mathrm{edge}}/r_{C,A}} \;+\; \sum_{i} g_i^2 \Lambda_i \frac{r_i}{r_{\mathrm{edge}}} e^{-r_{\mathrm{edge}}/r_i} \;=\; m_B c^2$$

*This has a unique positive solution for all profiles where every channel's signal is Yukawa-like (including the massless-mediator limit $r_i \to \infty$ where $A_i(r) \to g_i^2 \Lambda_i / r$, the Coulomb form).*

### Step 2: Short-range regime — massive-mediator channels

**Proposition 2.1 (Short-range dominance).** *At distances $r$ much smaller than all channel ranges $r_i$, each channel contributes its asymptotic near-source form $A_i(r) \to g_i^2 \Lambda_i (r_i/r)$ (Yukawa factor $e^{-r/r_i} \to 1$). The shortest-range channels dominate when their couplings are comparable to others, because their $\Lambda_i r_i = \hbar c / g_i$ reference scale is set by the mediator mass.*

**Concretely, for SM particles:**

- *Direct coherence: $r_{C,A}$ is the observer's Compton length.*
- *EM channel: $r_\gamma = \infty$, contributes $\alpha_{\mathrm{EM}}/r$ for all $r$.*
- *Weak channel: $r_W = \hbar/(M_W c) \approx 2.5 \times 10^{-18}$ m.*
- *Color channel (for color-neutral profiles): $r_s \sim 10^{-15}$ m (hadron scale).*

*At $r \sim r_s$: all channels contribute; the dominant depends on the profile's couplings.*

*At $r \sim r_W$: color channel exponentially small (if $r_s < r_W$, which is true for hadrons); weak, EM, direct contribute.*

*At $r \gg r_W$: only EM and direct remain; for macroscopic observers where $r_{C,A}$ is sub-Planck, only EM survives.*

### Step 3: Long-range regime — EM Coulomb dominates

**Proposition 3.1 (Long-distance edge determined by EM).** *At distances $r \gg r_W$ (outside the weak range), the only surviving channel is EM. The edge equation simplifies to*

$$\frac{\alpha_{\mathrm{EM}} \cdot r_0}{r_{\mathrm{edge}}} \;\approx\; \frac{m_B c^2}{\Lambda_{\mathrm{EM}}}$$

*(keeping only the EM Coulomb term, with $r_0$ a reference length). For charge-$Q$ observers with $Q^2 \alpha_{\mathrm{EM}}$ dimensionless coupling, the edge at large distance is set by the detector's resolution and the source's charge.*

**Remark 3.2 (Why EM is the long-range signature).** *The target's Prediction 6 — that interaction ranges correspond to coupling-dependent noise — is replaced under Option 3 by: interaction ranges correspond to mediator mass hierarchy via $r_i = \hbar/(M_i c)$. The EM channel's infinite range is a structural consequence of photon masslessness; weak and strong channel finite ranges reflect their mediators' masses. This is the standard Standard Model picture, recovered here as a direct consequence of the Formalization 1 signal form.*

### Step 4: Color channel — the pathological exception

**Proposition 4.1 (Color channel has no Yukawa-like isolated-source form).** *For an isolated color-charged profile (a single quark with no color-partner), the color-channel signal does not take the Yukawa form of Formalization 1 Proposition 6.1. Instead, non-abelian gauge-field dynamics at strong coupling produce a linear confinement potential $V(r) \sim \sigma r$ at large $r$, where $\sigma \sim (440\,\mathrm{MeV})^2$ is the QCD string tension ([Confinement](/derivations/gauge/confinement.md)).*

**Structural argument.** Color flux lines from an isolated source cannot terminate in vacuum — there is no external color-charge to receive them. Unlike EM (where $\nabla \cdot \mathbf{E} \sim \rho$ allows flux to diverge radially into vacuum), color flux must terminate at another color charge. For an isolated source, the flux is forced into a finite-cross-section "tube" or "string" configuration, giving energy $V(r) \sim \sigma r$ at distance $r$ from the source. This is the Wilson-loop area-law ([Confinement](/derivations/gauge/confinement.md) Proposition 4.1) from the perspective of a single source. $\square$

**Remark 4.2 (Not a Yukawa signal).** *A Yukawa signal decays: $A_i(r) \to 0$ as $r \to \infty$. A linear confining potential grows: $V(r) \to \infty$ as $r \to \infty$. These are qualitatively different and cannot be reconciled by any choice of coupling — the Yukawa form is the radial Green's function of a massive scalar, the linear form is the energy of a 1D flux tube. Formalization 1's Proposition 6.1 does not apply to isolated color-charged sources.*

### Step 5: The edge equation has no finite-$r$ solution for isolated color

**Proposition 5.1 (Edge equation fails for isolated color-charged source).** *For an isolated color-charged profile, the color-channel contribution to $A(r)$ is not $A_{\mathrm{color}}(r) = g_s^2 \Lambda_s (r_s/r) e^{-r/r_s}$ (Yukawa) but rather $A_{\mathrm{color}}(r) \sim \sigma r$ (linear growth) at large $r$. Substituting into the composite edge equation (Proposition 1.1):*

$$\sigma r_{\mathrm{edge}} \;+\; (\mathrm{other\ channels}) \;=\; m_B c^2$$

*For any finite $\sigma > 0$ and any finite detector mass $m_B$, the equation has no large-$r$ solution: as $r \to \infty$, $\sigma r \to \infty \gg m_B c^2$. The other channels' contributions at large $r$ are bounded (they fall off Yukawa-like); the color term dominates and diverges. No finite $r_{\mathrm{edge}}$ satisfies the equation in the large-$r$ regime.*

*At small $r$, the equation has a solution, but that is the "inside the source" regime where the signal-to-noise crossover does not have the structural meaning of an observer edge — it is the Green's function short-distance divergence regulated at Planck scale. The intended meaning of the edge (where external observers resolve the source from indistinguishability) has no finite-$r$ solution.*

**Remark 5.2 (No Yukawa-screening rescue).** *One might try: maybe a finite self-screening scale $r_s$ regularizes the linear growth. But for an isolated source, there is no internal screening (no color partner within the source). The screening is provided only by another color charge external to the source. An isolated color-charged profile cannot self-screen.*

**Corollary 5.3 (Free quark is not a viable isolated observer).** *The isolated color-charged profile fails the edge-viability criterion of [Formalization 2](/derivations/foundation/02-operational-edge). Free quarks do not exist as asymptotic observers.*

### Step 6: Hadrons recover viability

**Proposition 6.1 (Color-neutral composites have terminating flux tubes).** *For a color-neutral composite (a meson, $q\bar{q}$; a baryon, $qqq$; etc.), the color flux between constituents terminates within the composite. There is no net external color flux — internally, flux tubes connect constituents; externally, the color charge is zero.*

**Proposition 6.2 (Exterior color signal is Yukawa-screened at $\Lambda_{\mathrm{QCD}}$).** *The hadron's exterior color-dipole signal has effective screening length $r_s \sim \hbar/(\Lambda_{\mathrm{QCD}}/c) \sim 0.7$ fm (Formalization 1 Proposition 7.1). The color component of $A(r; \mathcal{I}_{\mathrm{hadron}})$ at distances exceeding the hadron scale is exponentially suppressed:*

$$A_{\mathrm{color}}^{\mathrm{hadron}}(r) \;\sim\; (\mathrm{color\text{-}dipole\ moment}) \cdot e^{-r/r_s}/r$$

*This is a well-defined Yukawa signal with finite range. The hadron's composite signal satisfies the edge equation with a finite $r_{\mathrm{edge}}$ at the hadron scale.*

**Proposition 6.3 (Hadron edge is at the hadron scale).** *For a color-neutral composite with direct-coherence mass $m_{\mathrm{hadron}}$ and Yukawa-screened color channel, the composite edge is at*

$$r_{\mathrm{edge}}^{\mathrm{hadron}} \;\approx\; \min\!\left(r_{C,\mathrm{hadron}}, r_s\right) \;\sim\; 1\,\mathrm{fm}$$

*with $r_s \sim 0.7$ fm for color-dipole-screened signal and $r_{C,\mathrm{hadron}}$ of order the Compton length of the composite (for the proton, $r_{C,p} \sim 0.2$ fm). Both are fm-scale; the composite has a well-defined edge at the fm scale, consistent with hadron sizes observed in scattering experiments.*

### Step 7: Confinement as edge-viability failure

**Theorem 7.1 (Confinement from edge-viability).** *QCD confinement — the observed non-existence of free quarks — is a consequence of the edge-viability requirement applied to isolated color-charged profiles (Proposition 5.1), combined with the edge-viability of color-neutral composites (Proposition 6.3).*

*Formally: free quarks fail the F2 edge-existence criterion; hadrons satisfy it. The framework's commitment to observers having well-defined edges (the operational content of being a pattern in the first place) therefore excludes free quarks and admits hadrons. Confinement is structural.*

**Remark 7.2 (Complementary to Wilson-loop and QEC-threshold).** *This is a third framework-internal argument for confinement:*

1. ***Wilson-loop area-law*** *([Confinement](/derivations/gauge/confinement.md) Proposition 4.1): non-associativity of $\mathbb{O}$ produces bracketing-ambiguity phase decoherence growing as path length; random-walk mixing on $SU(3)$ gives amplitude decay $\sim e^{-r/r_0}$ and effective potential $V(r) \sim \sigma r$.*
2. ***QEC-threshold*** *([Substrate Noise](/derivations/foundation/substrate-noise-and-profile-coupling.md) Corollary 6.2): color-charged profile's QEC spatial-axis noise $p^{\mathrm{eff,sp}} \to p_{th}$ as $\alpha_s \to 1$; free-quark code fails preservation.*
3. ***Edge-pathology*** *(this derivation): color flux for isolated source has no Yukawa-like radial decay; the edge equation has no finite solution.*

*Each is a distinct mechanism landing on the same phenomenological conclusion.*

**Remark 7.3 (On the research target's "edge collapse" language).** *The initial research target framed confinement as $r_{\mathrm{edge}}^{\mathrm{eff}} \to 0$ at $\alpha_s \to 1$ — a substrate-noise picture where strong coupling drives the noise floor above the signal. Under Option 3's detection-noise formulation (noise floor is the detector's own $m_B c^2$, independent of source's coupling), this mechanism does not directly apply. The revised picture is signal-side pathology: the color channel for isolated sources is not Yukawa but linear, and the edge equation has no finite solution. The phenomenological conclusion (confinement) is unchanged; the structural mechanism is refined to be consistent with the framework's observer-centrism.*

### Step 8: Interaction range hierarchy from mediator mass hierarchy

**Proposition 8.1 (Yukawa range formula).** *For each gauge channel with mediator mass $M_i$, the channel's signal falls off exponentially at distances $r \gtrsim r_i = \hbar/(M_i c)$. This is the Yukawa range formula, direct from Proposition 3.1 of [Formalization 1](/derivations/foundation/01-pattern-signal-amplitude).*

**Numerical consequences for the SM:**

| Channel | Mediator | $M_i$ | $r_i = \hbar/(M_i c)$ |
|---|---|---|---|
| EM | $\gamma$ | $0$ | $\infty$ |
| Weak | $W^\pm, Z$ | $\sim 80$–$91$ GeV | $\sim 2.5 \times 10^{-18}$ m |
| Strong (effective, within hadrons) | (color dipole) | $\Lambda_{\mathrm{QCD}} \sim 0.3$ GeV | $\sim 7 \times 10^{-16}$ m |
| Strong (isolated, free quark) | — | no well-defined mediator mass | — (edge pathology) |

**Theorem 8.2 (Observed range hierarchy matches framework prediction).** *The observed interaction-range hierarchy — EM infinite, weak $\sim 10^{-18}$ m, strong $\sim 1$ fm — matches the Yukawa range formula applied to SM mediator masses. The mass hierarchy is the structural origin of the range hierarchy.*

**Remark 8.3 (Revised Prediction 6 of the research target).** *The original Prediction 6 connected interaction ranges to coupling-dependent noise. Under Option 3 (detection-noise formulation), this connection is replaced by the Yukawa range formula (mediator mass $\to$ channel range). The revised prediction is: interaction ranges are determined by mediator masses via $r_i = \hbar/(M_i c)$, and the observed hierarchy is a consequence of the SM mediator mass spectrum. The hierarchy prediction is confirmed; the mechanism is the mass hierarchy rather than a coupling-noise mechanism.*

## Consequences

**C1. Composite observers have multi-channel Yukawa edges.** The edge equation sums Yukawa contributions from each active gauge channel; dominant channel depends on distance regime.

**C2. Range hierarchy from mediator mass hierarchy.** Observed EM/weak/strong range hierarchy ~ mediator mass hierarchy via $r_i = \hbar/(M_i c)$. No coupling-dependent noise is invoked.

**C3. Confinement as edge-viability failure.** Isolated color-charged profile has pathological (non-Yukawa, linearly divergent) signal; F2 edge equation has no finite solution. Free quarks are not viable observers.

**C4. Hadrons satisfy edge viability at fm scale.** Color-neutral composites screen internal flux tubes; exterior color signal is Yukawa-screened at $\Lambda_{\mathrm{QCD}}$; composite edge at $\sim 1$ fm.

**C5. Three framework-internal confinement pictures converge.** Wilson-loop area-law, QEC-threshold, and edge-pathology all give confinement. Their mutual consistency is a framework coherence check.

**C6. Mass-to-range connection at observational scales.** The Yukawa range formula is the standard-physics relationship $r \sim \hbar/(Mc)$ between mediator mass and effective interaction range. That the framework's composite-profile edge structure produces this relationship is a direct consistency test.

**C7. Detection-noise formulation preserves phenomenology with refined mechanism.** Under the Option-3 detection-noise reformulation adopted in F2, confinement and the range hierarchy are recovered. The mechanisms are signal-side (pathology, Yukawa ranges) rather than noise-side (threshold crossings, coupling-dependent noise). Observer-centrism consistency is maintained throughout.

## Rigor Assessment

**Rigorous (from source derivations):**

- Proposition 1.1 (composite edge equation): direct substitution of F1 Proposition 6.3 into F2 edge condition.
- Proposition 8.1 (Yukawa range formula): from F1 Proposition 6.1's Green's function derivation.
- Theorem 8.2 (range hierarchy matches observation): direct numerical comparison.

**Semi-formal (structural arguments with standard-physics inputs):**

- Proposition 4.1 (non-Yukawa color signal): uses standard QCD result on linear confinement; consistent with [Confinement](/derivations/gauge/confinement.md) Proposition 4.1. Structural argument rather than first-principles derivation of the linear potential.
- Proposition 5.1 (no finite edge for isolated color): structural consequence of Proposition 4.1.
- Proposition 6.2 (hadron exterior signal Yukawa-screened): standard non-perturbative QCD result (confinement scale $\Lambda_{\mathrm{QCD}}$); the screening structure is argued structurally rather than derived from framework first principles.

**Deferred (standard-physics inputs):**

- The linear potential value $\sigma \sim (440\,\mathrm{MeV})^2$ is an empirical QCD parameter, not derived here.
- The $\Lambda_{\mathrm{QCD}}$ scale $\sim 0.3$ GeV is empirical.
- The precise $r_s$ for hadron color-dipole screening depends on hadron species (nucleon vs. meson vs. excited states); this derivation uses the generic fm-scale.
- A rigorous classical-field theory for non-abelian gauge fields that produces the linear potential from first principles is the content of the Yang-Mills mass gap problem (Clay Millennium). Not attempted.

**Assessment:** The derivation is semi-formal. Its core structural content — composite signal as multi-channel Yukawa sum, color-channel pathology for isolated sources, edge-viability failure giving confinement — is structurally sound and follows from F1/F2 plus standard QCD facts. The specific numerical scales ($\Lambda_{\mathrm{QCD}}$, $\sigma$, fm) are empirical inputs rather than framework-derived. The three-way consistency with Wilson-loop and QEC-threshold pictures is a framework-level coherence check, not an independent derivation of any single value.

## Open Gaps

1. **First-principles linear-potential derivation.** The linear confinement potential $V(r) \sim \sigma r$ is taken as input from standard QCD ([Confinement](/derivations/gauge/confinement.md) derives it from octonionic non-associativity, but semi-formally). A fully framework-internal first-principles derivation of $\sigma$ from framework parameters would tighten this derivation. *Difficulty: HARD; connects to the Clay Millennium mass gap problem.*

2. **Explicit hadron-edge computation.** The hadron edge at $\sim 1$ fm is asserted from the $\Lambda_{\mathrm{QCD}}$ screening scale. A specific computation for each hadron (proton, neutron, pion, $\Delta$-baryon, etc.) deriving the precise $r_{\mathrm{edge}}$ as a function of quark content and binding structure would test the composite-profile edge framework at the phenomenological level. *Difficulty: MODERATE.*

3. **Short-range weak-channel dominance regime.** At distances $r \sim r_W$, the weak channel is at its peak relative contribution. Deriving the observed short-range weak physics (beta decay, neutrino interactions) from the framework's edge structure would be an informative test. *Difficulty: MODERATE.*

4. **Interaction-range hierarchy independence from coupling noise.** This derivation's Remark 8.3 asserts that the interaction-range hierarchy is independent of coupling-dependent noise under the Option-3 detection-noise formulation. A rigorous consistency check — confirming that the ranges derived from mediator masses alone agree with those obtained under coupling-noise formulations where applicable — would tighten the research-program landscape. *Difficulty: MODERATE.*

5. **Edge pathology for strong-coupling non-gauge profiles.** The edge pathology here is specific to non-abelian gauge channels (color) where flux must terminate at charge. Other strong-coupling contexts (e.g., very strong Yukawa scalar self-couplings from Higgs-like fields at Planck scale) may or may not exhibit similar pathology. Investigating is an extension. *Difficulty: MODERATE.*

6. **Gravitational channel (emergent).** A gravitational channel is not explicitly treated here. Gravity is not a gauge channel in the SM sense, but for macroscopic observers, gravitational effects can dominate the signal at large distances. Extending the composite-profile edge framework to gravitational signals requires integration with [Gravity](/derivations/spacetime/gravity) and [Einstein Field Equations](/derivations/spacetime/einstein-equations). Connects also to the future consistency check on macro-observer gravitational decoherence (noted in the research target). *Difficulty: HARD.*

## References and further reading

**Framework inputs.**

- [Pattern Signal Amplitude as a Function of Distance](/derivations/foundation/01-pattern-signal-amplitude) — Proposition 6.1 (gauge-channel Yukawa contributions); Proposition 7.1 (color-channel treatment).
- [Observer Edge as Signal-Resolution Crossover](/derivations/foundation/02-operational-edge) — edge equation, detection-noise formulation.
- [Mutual Opacity Theorem](/derivations/foundation/03-mutual-opacity) — integer-channel inventory (Proposition 4.1) for inter-observer information.
- [Confinement](/derivations/gauge/confinement) — Wilson-loop area-law picture of confinement; Proposition 4.1 (linear potential from random walk on $SU(3)$).
- [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) — QEC-threshold picture of confinement (Corollary 6.2).
- [Color Force](/derivations/gauge/color-force) — $SU(3)$ gauge structure from octonion stabilizer.
- [Observer as an Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code) — three-axis profile structure.

**Standard QCD.**

- String tension $\sigma \sim (440\,\mathrm{MeV})^2$ from lattice QCD.
- $\Lambda_{\mathrm{QCD}} \sim 0.3$ GeV from asymptotic-freedom running.
- Wilson, K. G. (1974). *Confinement of quarks.* Phys. Rev. D 10:2445. — Wilson-loop area-law formulation.

**Research-program context.** This is step 4 of the pattern-edges-and-mutual-opacity research program (`research-targets/pattern-edges-and-mutual-opacity.md`). Under the Option-3 detection-noise reformulation adopted in F2, this derivation gives confinement as signal-side pathology rather than noise-side threshold crossing; the target's original framing is explicitly updated. The interaction-range hierarchy is recovered from mediator mass hierarchy via the Yukawa range formula, independent of coupling noise.
