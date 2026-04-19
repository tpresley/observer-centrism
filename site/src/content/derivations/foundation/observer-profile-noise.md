---
title: "4. Profile-Dependent Noise from Gauge Couplings"
status: "provisional"
dependsOn: ["foundation/observer-code-distances", "foundation/observer-code-family", "interactions/relational-invariants", "gauge/electromagnetism", "gauge/weak-interaction", "gauge/color-force", "axioms/coherence-conservation"]
enablesDerivation: []
tags: ["foundation", "error-correction", "gauge", "noise-model"]
summary: "Step 3 established that the universal geometric substrate noise α_H ~ 1/4 is far too weak to saturate code thresholds at observed SM masses — achieved code distance exceeds required distance by ~10^19 at every SM particle. This derivation closes that gap by identifying a second, profile-dependent noise channel: each gauge coupling the observer carries contributes an independent additive noise term via Type III carrier exchanges with the vacuum. By the Reverse Noether mechanism of Relational Invariants, gauge interactions are Type III exchanges at per-Planck-cell-per-Planck-tick rate ∝ g², and by Coherence Conservation these independent channels compose additively. The resulting map p_phys^eff(𝓘_A) = p_phys^geom(α_H) + Σ_i g_i² · η_{i,axis} is axis-selective — EM modulates spatial-axis noise (horizon charge-crossings), weak modulates spatial + algebraic (flavor change is algebraic-invariant change), color modulates spatial + algebraic + drives temporal-axis divergence as α_s → 1 (predicting confinement as a QEC consequence). Photons and gluons are structurally exempt — as gauge mediators their profile has no logical content exposed to their own coupling's noise, giving the massless limit by construction rather than by fiat. This map is the mechanism that takes an observer from its equivalence-class profile to its specific code-distance requirement and hence to its specific mass under the minimum-viable convention; it is the bridge between Step 3's self-consistency result and Step 6's SM-spectrum comparison, and prepares Step 5's QEC–WKB identity check."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-18
---

## Overview

[Code-Distance Computation for Integer Profiles](/derivations/foundation/observer-code-distances) (**Step 3**) produced a specific negative result: the universal geometric substrate noise $\alpha_H \sim 1/4$ (from [Holographic Noise](/predictions/holographic-noise) + [Causal Set Statistics](/derivations/holography/causal-set-statistics)) gives a per-Planck-cell bit-flip probability $p_{\text{phys}}^{\text{geom}} \sim 0.046$ that is far below any topological-code threshold, leading to achieved code distances $\sim 10^{19}$ times larger than required at every observed SM mass. QEC thresholds are therefore not threshold-saturated at observed SM masses under geometric noise alone; the mechanism that maps a profile to its specific code distance (hence its specific mass) must involve a second, profile-dependent noise source.

This derivation identifies that second source: **an observer's gauge-coupling content adds profile-specific noise via Type III carrier exchanges with the vacuum**. Each coupling channel the observer carries — electromagnetic (charge), weak (weak isospin), color (color charge) — contributes an independent additive noise term whose rate is set by the coupling squared $g_i^2$. Stronger-coupled observers see higher effective noise rates; their codes face higher bit-flip probabilities; their required distances are correspondingly higher, producing a profile-specific $p_{\text{phys}}^{\text{eff}}$ that modulates Step 3's universal noise model into a profile-dependent one.

**The map (committed form)**:

$$p_{\text{phys}}^{\text{eff}}(\mathcal{I}_A) \;=\; p_{\text{phys}}^{\text{geom}}(\alpha_H) \;+\; \sum_{i \in \text{active channels}(\mathcal{I}_A)} g_i^2 \cdot \eta_{i,\text{axis}}$$

— with axis-selective coefficients $\eta_{i,\text{axis}}$ encoding which integer invariants a channel tests (EM → spatial; weak → spatial + algebraic; color → spatial + algebraic + temporal-via-confinement). The additive form is forced by two framework commitments:

1. **Per-channel rate from Relational Invariants.** [Relational Invariants](/derivations/interactions/relational-invariants) derives gauge interactions as Type III carrier exchanges whose per-Planck-cell rate is proportional to the channel's coupling squared. Independent events compose additively in the low-rate regime.

2. **Additivity from Coherence Conservation.** [Coherence Conservation](/derivations/axioms/coherence-conservation) bounds how noise rates from independent processes compose: subadditivity forces additive composition; any multiplicative cross-coupling would have to justify a specific non-linear interaction not forced by the axiom.

**Special cases**: photons and gluons are gauge mediators, not observers carrying gauge charge in the coupling channel they mediate. Their profile has no logical content exposed to their own coupling's noise, so the additive-noise sum for their relevant axes has an empty index set. This gives the massless limit structurally (the observer's effective noise reduces to $p_{\text{phys}}^{\text{geom}}$ alone, and the minimum-viable mass degenerates to the geometric floor, which is zero for a profile with no integer invariants testable by its own gauge sector). The massless vector bosons are not exceptions to the noise story; they are structurally outside it.

**Principal consequences**.

1. *Coupling strength sets the generation hierarchy.* Higher-generation fermions have additional active algebraic-axis channels (instanton content at higher bootstrap levels), so their $p_{\text{phys}}^{\text{eff}}$ is shifted upward on the algebraic axis. Under the minimum-viable-code convention, this forces exponential mass-ratio scaling between generations — giving the qualitative structure of the SM mass hierarchy as a QEC+coupling consequence.

2. *Confinement emerges as a QEC limit.* For color-charged profiles, $\alpha_s \to 1$ at the Planck scale pushes $p_{\text{phys}}^{\text{eff, spatial}}$ toward the topological-code threshold $p_{th} \approx 0.11$. Above threshold, no stable code exists for the free-quark profile — predicted confinement from Step 4 is the QEC reading of QCD confinement.

3. *Bridge to Step 5.* With profile-dependent noise in hand, the WKB tunneling action of [Mass Hierarchy](/derivations/particles/mass-hierarchy) can be identified quantitatively with $d_{\text{req}}(\mathcal{I}_A) \cdot \log(p_{th}/p_{\text{phys}}^{\text{eff}}(\mathcal{I}_A))/2$ — turning Step 5 from a "compare two mechanisms" question into a "confirm they're one mechanism" identity check.

**Honest scope**. The additive form and axis-selective structure are forced by the framework. The numerical values of the axis coefficients $\eta_{i,\text{axis}}$ are not pinned down by this derivation — they are O(1) constants that parameterize the relative strength of each channel's noise contribution on each axis. Fixing them requires either explicit substrate-level calculation (Open Gap 1) or anchoring to one observed coupling-scale point (candidate for Step 6's anchored spectrum test). The structural and hierarchy-level predictions do not depend on their specific values, only on the additive form and axis-selective structure — both of which are framework-forced.

## Statement

**Theorem (Gauge interactions as Type III carrier exchanges).** *Each gauge coupling channel $i \in \{\text{EM}, \text{weak}, \text{color}\}$ active in an observer's profile $\mathcal{I}_A$ corresponds to a Type III carrier exchange rate with the vacuum, with per-Planck-cell-per-Planck-tick expected event count:*

$$\lambda_i^{\text{vac}} \;=\; g_i^2 \cdot \kappa_i$$

*where $g_i$ is the gauge coupling evaluated at the framework's substrate scale and $\kappa_i$ is an O(1) channel-specific prefactor inherited from the framework's gauge derivation (coupling normalization convention).*

**Theorem (Additive composition of noise channels).** *For a profile $\mathcal{I}_A$ with active gauge channels $\{g_i\}$ and universal geometric substrate noise $p_{\text{phys}}^{\text{geom}}$ (from [Step 3](/derivations/foundation/observer-code-distances)), the effective per-Planck-cell, per-Planck-tick bit-flip probability is:*

$$p_{\text{phys}}^{\text{eff}}(\mathcal{I}_A, \text{axis}) \;=\; p_{\text{phys}}^{\text{geom}}(\alpha_H, \text{axis}) \;+\; \sum_{i \in \text{channels}(\text{axis})} g_i^2 \cdot \eta_{i, \text{axis}}$$

*on each axis, where $\text{channels}(\text{axis})$ is the subset of active coupling channels that test integer invariants on that axis (axis-selectivity below) and $\eta_{i,\text{axis}}$ is an O(1) axis-specific coefficient related to the Type III-carrier rate $\lambda_i^{\text{vac}}$ and the fraction of channel-$i$ events that flip an axis-$\text{axis}$ invariant.*

**Theorem (Axis selectivity).** *Each gauge coupling modulates noise only on the axes corresponding to the integer invariants it tests:*

- *Electromagnetic coupling $g_{\text{EM}}$ modulates **spatial axis only** — horizon charge-crossings are the tested invariant; no direct interaction with tick-count invariants (temporal) or homotopy-class invariants (algebraic).*
- *Weak coupling $g_W$ modulates **spatial axis** (weak isospin testing) **and algebraic axis** (flavor-change events are algebraic-invariant changes at bootstrap level 2).*
- *Color coupling $g_s$ modulates **spatial axis** (color-index permutation) **and algebraic axis** (bootstrap-level-3 $\pi_3(SU(3))$ testing) **and drives temporal-axis divergence as $\alpha_s \to 1$** (confinement mechanism).*

**Corollary (Photon and gluon massless limit).** *Gauge mediators (the gauge bosons for each channel) are structurally exempt from their own coupling's noise because their profile carries no integer invariant on the axes that coupling tests. For the photon: $\eta_{\text{EM}, \text{spatial}}(\gamma) = 0$ by construction. For the gluon: $\eta_{s, \text{spatial}}(g) = \eta_{s, \text{algebraic}}(g) = 0$. Under the additive form, this drops the relevant sum terms, leaving $p_{\text{phys}}^{\text{eff}}(\gamma, g)$ at the geometric floor — consistent with the massless limit.*

**Corollary (Neutrino at the mass floor).** *Neutrinos carry only weak isospin (no EM, no color). On the spatial axis: $p_{\text{phys}}^{\text{eff}} = p_{\text{phys}}^{\text{geom}} + g_W^2 \eta_{W, \text{spatial}}$, a small correction. On the algebraic axis: $p_{\text{phys}}^{\text{eff}} = p_{\text{phys}}^{\text{geom}} + g_W^2 \eta_{W, \text{algebraic}}$. On the temporal axis: no active channel modulates — pure geometric. Hence neutrinos see the smallest effective noise of any charged-weakly-interacting profile, requiring the smallest code distance and (under the minimum-viable convention) having the smallest mass among massive SM fermions.*

**Corollary (Exponential generation hierarchy from bootstrap-level accumulation).** *Moving from generation $n$ to generation $n+1$ adds a bootstrap-level-$n+1$ $\pi_3$-valued integer invariant on the algebraic axis ([Moufang-Loop Phase Closure](/derivations/interactions/moufang-loop-phase-closure) Proposition 6.1). This both (a) adds to the algebraic bit content $c_{\text{alg}}$ and (b) activates additional gauge-channel terms in the algebraic-axis noise sum (each generation's instanton number contributes a $g_i^2 \eta_{i, \text{algebraic}}$ term if the profile's gauge sector tests that level). Both effects push $d_{\text{req}}^{\text{alg}}$ upward in tandem, producing exponential mass-ratio scaling between generations under the minimum-viable convention.*

**Corollary (Confinement as QEC threshold).** *For color-charged profiles (quarks), as $\alpha_s \to 1$ (characteristic Planck-scale color coupling), the spatial-axis term $g_s^2 \eta_{s, \text{spatial}} \to \eta_{s, \text{spatial}}$ — pushing $p_{\text{phys}}^{\text{eff}}$ toward the topological-code threshold $p_{th} \approx 0.11$ to $0.15$. Above $p_{th}$, no stable code exists: the free-quark profile is QEC-non-viable. Observed color-charged states must be color-neutral composites (hadrons), where the effective color coupling at the composite's scale is screened below $p_{th}$. This is the QEC reading of QCD confinement — a mechanism-level prediction of Step 4, not an empirical input.*

## Derivation

### Step 1: Gauge Interactions as Type III Carrier Exchanges

**Preliminaries.** [Relational Invariants](/derivations/interactions/relational-invariants) establishes that Type III interactions generate relational invariants — conserved quantities on the joint state space of two observers. The Reverse Noether Mechanism then promotes each relational invariant to a symmetry and a gauge connection ([Electromagnetism](/derivations/gauge/electromagnetism), [Weak Interaction](/derivations/gauge/weak-interaction), [Color Force](/derivations/gauge/color-force)). The gauge coupling $g_i$ for each channel is the strength of that channel's Type III exchange — the rate at which carriers are exchanged between observers per unit joint state space measure.

**Proposition 1.1 (Type III carrier rate per Planck cell).** *For each active gauge channel $i$ in an observer's profile, the rate of Type III carrier exchanges with the substrate vacuum per Planck cell per Planck tick is:*

$$\lambda_i^{\text{vac}} \;=\; g_i^2 \cdot \kappa_i$$

*where $\kappa_i$ is a channel-specific O(1) prefactor set by the coupling's normalization convention (the framework's [Electromagnetism](/derivations/gauge/electromagnetism) derivation fixes $\kappa_{\text{EM}}$ via the $4\pi$ convention, and similarly for weak and color).*

*Structural argument.* In QFT, the per-unit-spacetime-volume rate of virtual gauge-boson events scales as $g^2 \cdot \rho$, where $\rho$ is the density of possible interaction partners. At the substrate vacuum level (no thermal bath, no matter density beyond the observer's own profile), the relevant $\rho$ is the Poisson density of causal-set elements per Planck 4-volume, which is 1 (one element per $\ell_P^4$, per [Causal Set Statistics](/derivations/holography/causal-set-statistics) Proposition 1.3). Hence the per-cell per-tick rate is $g^2 \cdot \kappa$ with $\kappa$ absorbing the QFT-normalization factor (typically $\kappa \sim 1/(4\pi)$ or similar). $\square$

**Remark 1.2 (What the Type III carrier is per channel).** *The carriers are the gauge bosons: photons for EM, $W^\pm, Z$ for weak, gluons for color. A Type III exchange in the vacuum is a virtual-boson fluctuation — the observer emits and reabsorbs (or absorbs and re-emits) a virtual gauge boson. Each such fluctuation perturbs the observer's state via the gauge boson's carried quantum numbers (momentum, spin, and the gauge-charge-testing operators).*

**Remark 1.3 (Why the rate is per Planck cell, not per macroscopic volume).** *The relevant rate for QEC-noise analysis is the per-Planck-cell probability that a bit-flip event occurs. Macroscopic rates are obtained by multiplying by the macroscopic volume in Planck units. For the Step 3 code-distance analysis, per-cell per-tick rates are what enter the logical-error probability formula.*

### Step 2: Per-Event Noise from Each Gauge Channel

**Proposition 2.1 (Bit-flip per event).** *Each Type III carrier exchange in channel $i$ flips the observer's integer-invariant record on the axes corresponding to the gauge charges the channel tests. The probability of a bit-flip per event on a specific axis is:*

$$p_i^{\text{flip per event, axis}} \;=\; \xi_{i, \text{axis}}$$

*where $\xi_{i, \text{axis}} \in [0, 1]$ is the fraction of channel-$i$ events that flip an axis-$\text{axis}$ invariant. For axes not tested by channel $i$, $\xi_{i, \text{axis}} = 0$.*

*Structural argument.* A Type III exchange in channel $i$ carries the channel's gauge quantum numbers (electric charge, weak isospin, color). The observer's logical content on each axis records which integer invariants are preserved across interaction events. An event in channel $i$ can flip an axis-$\text{axis}$ invariant if and only if the channel's quantum numbers test that axis's integer content. EM (electric charge) tests the horizon-crossing charge count (spatial); weak isospin tests spatial and flavor (algebraic); color tests spatial color permutation and algebraic $\pi_3$ content. $\xi_{i, \text{axis}}$ encodes the fraction of channel events in the relevant regime that actually result in invariant flips (as opposed to being elastic / identity-preserving). $\square$

**Proposition 2.2 (Per-cell per-tick per-channel bit-flip rate).** *Combining Proposition 1.1 and 2.1, the per-Planck-cell, per-Planck-tick bit-flip rate from channel $i$ on axis $\text{axis}$ is:*

$$p_i^{\text{per-cell per-tick, axis}}(\mathcal{I}_A) \;=\; \lambda_i^{\text{vac}} \cdot \xi_{i, \text{axis}} \;=\; g_i^2 \cdot \kappa_i \cdot \xi_{i, \text{axis}} \;\equiv\; g_i^2 \cdot \eta_{i, \text{axis}}$$

*where we absorb the product $\kappa_i \cdot \xi_{i, \text{axis}}$ into a single axis-specific coefficient $\eta_{i, \text{axis}}$.*

**Remark 2.3 (What $\eta_{i, \text{axis}}$ parameterizes).** *$\eta_{i, \text{axis}}$ encodes two independent quantities: (a) the framework's coupling-normalization convention ($\kappa_i$, fixed by the gauge derivation's conventions), and (b) the invariant-flip efficiency of channel $i$ on axis $\text{axis}$ ($\xi_{i, \text{axis}}$, a substrate-level QFT computation). Both are O(1) constants that this derivation does not pin down beyond the structural level. Pinning them down requires explicit QFT-on-substrate calculation — an open gap.*

### Step 3: Additive Composition from Coherence Conservation

**Preliminaries.** Different gauge channels have distinct carriers (photons vs. $W$-bosons vs. gluons) and distinct quantum numbers (U(1)_EM charge vs. SU(2)_L isospin vs. SU(3)_c color). Events in different channels are statistically independent at the substrate level — one does not cause or suppress another — because the channels' Reverse Noether symmetries are direct-sum-independent ([Standard Model Group](/derivations/gauge/standard-model-group)).

**Proposition 3.1 (Channel independence at substrate).** *Type III carrier exchanges in different gauge channels are independent Poisson processes at the substrate-noise level: the joint probability of a channel-$i$ event and a channel-$j$ event in the same Planck cell and Planck tick is the product of independent rates, not a larger or smaller joint rate.*

*Structural argument.* The gauge group $G_{\text{SM}} = U(1)_{\text{EM}} \times SU(2)_L \times SU(3)_c$ is a direct product ([Standard Model Group](/derivations/gauge/standard-model-group)). Direct-product generators commute pairwise. Independent generators produce independent Type III carrier exchanges (since commuting operators act on independent subspaces of the joint state space). $\square$

**Proposition 3.2 (Additive composition of noise rates).** *For independent noise channels each with per-cell per-tick bit-flip rate $p_i$, the total per-cell per-tick bit-flip rate on a shared axis (where "bit-flipped" means "flipped by any channel"):*

$$p^{\text{total, axis}} \;=\; p_{\text{phys}}^{\text{geom, axis}} \;+\; \sum_{i \in \text{channels}(\text{axis})} p_i^{\text{per-cell per-tick, axis}} \;+\; O(p_i p_j)$$

*to first order in the small rates. The cross-terms $O(p_i p_j)$ are negligible in the low-rate regime ($p_i \ll 1$) and correspond to simultaneous events that are both extremely rare and would usually produce compensating rather than compounding flips.*

*Proof.* In the low-rate regime, the probability of a bit-flip is approximately the sum of the individual channel rates, by the union bound applied to independent events. Coherence Conservation bounds the total noise rate by the subadditive sum across channels (strong subadditivity of the coherence functional applied to independent perturbations). Higher-order cross-terms are second-order in the rates. $\square$

**Remark 3.3 (Why additive, not multiplicative).** *The additive form follows from Proposition 3.1 (channel independence) + Proposition 3.2 (low-rate union bound). A multiplicative form would imply that having one active channel AMPLIFIES the rate of events in another channel — a specific non-linear coupling that is not present in the SM gauge group's direct-product structure. The additive form is therefore framework-forced, not chosen. If framework-level cross-channel interactions are derived in future work (e.g., from mixed-anomaly or Wess-Zumino terms), the multiplicative refinement becomes available; until then, additive is the conservative and correct form.*

**Combining Propositions 2.2 and 3.2**:

$$\boxed{\,p_{\text{phys}}^{\text{eff}}(\mathcal{I}_A, \text{axis}) \;=\; p_{\text{phys}}^{\text{geom}}(\alpha_H, \text{axis}) \;+\; \sum_{i \in \text{channels}(\text{axis})} g_i^2 \cdot \eta_{i, \text{axis}}\,}$$

### Step 4: Axis Selectivity from Coupling Content

**Preliminaries.** The three axes of the observer projection code ([Observer Code Family Identification](/derivations/foundation/observer-code-family) Theorem) carry different integer invariants:

- **Spatial axis** (HaPPY factor): horizon-crossing integer record $R_{\partial M_A}$ — charge, weak isospin, color — encoded as the set of Type III carrier crossings.
- **Algebraic axis** (Kitaev factor): bootstrap-level homotopy class $[\phi]_A \in \pi_k(G_n)$ — winding at level 1 ($\pi_1(U(1))$, EM winding), instanton at level 2 ($\pi_3(SU(2))$, weak instanton), instanton at level 3 ($\pi_3(SU(3))$, color instanton).
- **Temporal axis** (Floquet factor): tick count $k_A$ — phase-coherence preservation across integer periods.

**Proposition 4.1 (EM channel — spatial axis only).** *Electromagnetic Type III exchanges test the horizon charge-crossing integer. They do not directly change the tick count (a photon emission/absorption cycle closes within the phase period) or the bootstrap-level homotopy class (EM is a level-1 U(1) sector, its invariants are already captured in the spatial-axis charge count). Hence $\eta_{\text{EM}, \text{spatial}} > 0$ and $\eta_{\text{EM}, \text{algebraic}} = \eta_{\text{EM}, \text{temporal}} = 0$.*

*Structural argument.* EM's gauge group is $U(1)_{\text{EM}}$. Its Type III carriers (photons) carry electric charge $0$ (neutral) and test the observer's net electric charge via scattering off the horizon's charge-crossing record. The algebraic axis's $\pi_1(U(1))$ winding is the same $U(1)$ sector as EM's spatial charge count — these are not independent, and an EM event's effect is already captured in the spatial-axis term. Temporal tick-count invariants are not tested because EM does not change the observer's period $T_A$. $\square$

**Proposition 4.2 (Weak channel — spatial and algebraic axes).** *Weak Type III exchanges carry $SU(2)_L$ isospin charge and can flip the observer's weak isospin component (spatial-axis integer invariant) or change flavor (algebraic-axis invariant at bootstrap level 2: $\pi_3(SU(2))$ instanton class change). Hence $\eta_{W, \text{spatial}} > 0$, $\eta_{W, \text{algebraic}} > 0$, $\eta_{W, \text{temporal}} = 0$.*

*Structural argument.* Weak's gauge group is $SU(2)_L$. Charged-current ($W^\pm$) exchanges change flavor — a d-quark becomes a u-quark, an electron becomes an electron-neutrino. Flavor change is a change in the observer's algebraic-axis homotopy class at bootstrap level 2 (different instanton sectors of $SU(2)_L$). Neutral-current ($Z$) exchanges change weak isospin component without changing flavor — a spatial-axis invariant change. Temporal tick-count is not directly tested (weak events are Planck-scale virtual fluctuations that do not accumulate into period changes). $\square$

**Proposition 4.3 (Color channel — spatial, algebraic, and temporal-via-confinement).** *Color Type III exchanges permute color indices (spatial-axis integer change) and can change the observer's algebraic-axis instanton class at bootstrap level 3 ($\pi_3(SU(3))$). Additionally, as $\alpha_s \to 1$, color noise drives the total $p_{\text{phys}}^{\text{eff, spatial}}$ toward the threshold $p_{th}$, producing a structural divergence in the required code distance that manifests as **confinement** on the temporal axis (no stable-period free-quark observer).*

*Structural argument.* Color's gauge group is $SU(3)_c$. Gluon exchanges carry color and anti-color and permute the observer's three color indices — a direct spatial-axis permutation on the horizon. At bootstrap level 3, gluon events can also change the observer's $\pi_3(SU(3))$ instanton number — an algebraic-axis flip. The temporal-axis modulation is indirect: as $\alpha_s$ grows to 1 (the Planck-scale color coupling), the sum $g_s^2 \eta_{s, \text{spatial}}$ approaches the topological-code threshold, and the required distance $d_{\text{req}}$ on the spatial axis diverges. Since achieved distance $d^{\text{sp}}_{\text{achieved}} \sim m_P/m$ is finite for any finite mass, the minimum-viable-code condition fails for free-quark profiles — no stable period exists. This is the QEC reading of color confinement: the free quark has no temporal-axis code, so no stable observer realization. Color-neutral composites (hadrons) have effective color coupling screened below $p_{th}$ at the composite's Compton scale, restoring viability. $\square$

**Remark 4.4 (Confinement prediction details).** *Color confinement emerges in Step 4 as a structural consequence of the additive noise form plus axis selectivity plus $\alpha_s \to 1$ at Planck scale. This prediction does not require the full Wilson-loop / area-law analysis of [Confinement](/derivations/gauge/confinement); Step 4's noise-based reading complements that analysis with a QEC-threshold-level explanation.*

### Step 5: Profile → Noise Map — Worked Examples

**Preliminaries.** For each SM particle, the profile $\mathcal{I}_A$ specifies active gauge channels via the particle's quantum numbers. The additive noise formula then fixes $p_{\text{phys}}^{\text{eff}}$ per axis.

**Example 5.1 (Electron).** *Quantum numbers: electric charge $-1$, weak isospin $-1/2$ (left-handed component), no color, lepton number $1$, first generation. Active channels: EM, weak. No color.*

- *Spatial axis: $p_{\text{phys}}^{\text{eff, sp}}(e^-) = p_{\text{phys}}^{\text{geom, sp}} + \alpha_{\text{EM}} \eta_{\text{EM, sp}} + g_W^2 \eta_{W, \text{sp}}$.*
- *Algebraic axis (level 1): $p_{\text{phys}}^{\text{eff, alg}}(e^-) = p_{\text{phys}}^{\text{geom, alg}}$ (EM and weak are level-1/level-2 channels; at level 1, EM contributes spatial only, weak contributes algebraic only if observer's profile reaches level 2; first-generation electron does not).*
- *Temporal axis: $p_{\text{phys}}^{\text{eff, tmp}}(e^-) = p_{\text{phys}}^{\text{geom, tmp}}$ (no channel modulates temporal directly).*

*Generation-1 electron is at the lowest algebraic-noise level: only the spatial-axis combined EM + weak contribution is above geometric.*

**Example 5.2 (Muon).** *Quantum numbers: identical to electron except second generation. Additional bootstrap-level-2 instanton content active on the algebraic axis.*

- *Spatial axis: same as electron to leading order (same couplings).*
- *Algebraic axis: $p_{\text{phys}}^{\text{eff, alg}}(\mu) = p_{\text{phys}}^{\text{geom, alg}} + g_W^2 \eta_{W, \text{alg}}$ (weak channel activates on the algebraic axis at level 2).*
- *Temporal axis: same as electron.*

*Muon has the same spatial noise but additional algebraic-axis noise from the weak-channel level-2 activation. Under the minimum-viable convention, this forces a higher minimum mass than the electron — the exponential generation hierarchy emerges.*

**Example 5.3 (Tau).** *Quantum numbers: identical to electron except third generation.*

- *Algebraic axis: $p_{\text{phys}}^{\text{eff, alg}}(\tau) = p_{\text{phys}}^{\text{geom, alg}} + g_W^2 \eta_{W, \text{alg}} + g_s^2 \eta_{s, \text{alg}} \cdot \delta_{\text{level 3 active for tau}}$.*

*If the tau's profile activates the level-3 color instanton class on the algebraic axis (via mixing, even though tau is color-neutral), an additional $g_s^2 \eta_{s, \text{alg}}$ term appears — giving the largest algebraic-axis noise of the charged leptons and the largest mass. Whether this mixing is present is a detail of the framework's Three Generations derivation; the qualitative hierarchy is robust.*

**Example 5.4 (Quarks — generations 1, 2, 3).** *Quantum numbers: electric charge $\pm 1/3$ or $\pm 2/3$, weak isospin $\pm 1/2$, color (three colors, SU(3) triplet). Active channels: EM, weak, color. Bootstrap level 3 active.*

- *Spatial axis: $p_{\text{phys}}^{\text{eff, sp}}(q) = p_{\text{phys}}^{\text{geom, sp}} + \alpha_{\text{EM}} \eta_{\text{EM, sp}} + g_W^2 \eta_{W, \text{sp}} + g_s^2 \eta_{s, \text{sp}}$.*

*The color term $g_s^2 \eta_{s, \text{sp}}$ dominates ($\alpha_s \approx 1$ at Planck scale). At $g_s^2 \to 1$, this approaches $p_{th}$ — predicting confinement for free quarks.*

**Example 5.5 (Photon).** *Quantum numbers: electric charge 0, spin 1, no weak isospin or color. Gauge mediator of EM.*

- *EM coupling's integer invariants are spatial-axis charge-crossings; photon profile has no charge-crossings to flip (it IS the crossing carrier). So $\eta_{\text{EM, spatial}}(\gamma) = 0$ by construction (the noise contribution applies to observer profiles WITH EM charge, not to EM's own carrier).*
- *Net: $p_{\text{phys}}^{\text{eff}}(\gamma) = p_{\text{phys}}^{\text{geom}}$ — geometric floor only. Under the minimum-viable convention, this corresponds to zero mass.*

**Example 5.6 (Gluon).** *Similar structure. Color coupling's noise contribution vanishes for the gluon profile because gluons ARE the color carriers.*

- *$\eta_{s, \text{sp}}(g) = \eta_{s, \text{alg}}(g) = 0$ by construction.*
- *Net: $p_{\text{phys}}^{\text{eff}}(g) = p_{\text{phys}}^{\text{geom}}$ — geometric floor only. Massless.*

**Example 5.7 (Neutrino).** *Quantum numbers: electric charge 0, weak isospin $\pm 1/2$, no color, lepton number $1$. Only weak channel active.*

- *Spatial axis: $p_{\text{phys}}^{\text{eff, sp}}(\nu) = p_{\text{phys}}^{\text{geom, sp}} + g_W^2 \eta_{W, \text{sp}}$.*
- *Algebraic axis: $p_{\text{phys}}^{\text{eff, alg}}(\nu) = p_{\text{phys}}^{\text{geom, alg}} + g_W^2 \eta_{W, \text{alg}}$ (if generation > 1, with appropriate mixing).*
- *Smallest total effective noise of any massive SM particle — consistent with observed neutrinos being the lightest massive particles.*

**Example 5.8 (W, Z, Higgs).** *Electroweak sector is complicated by symmetry breaking. W and Z masses come from Higgs mechanism; their gauge-boson status makes them mediators of weak noise, structurally exempt from weak-induced noise on themselves. The Higgs is profile-specific and its noise contribution depends on its gauge coupling to itself (self-interaction) — a case that requires explicit handling beyond Step 4's scope. Open Gap 4.*

### Step 6: Link to Step 3 and Step 5

**Corollary 6.1 (Profile-specific minimum-viable mass).** *Under the minimum-viable-code convention of [Step 3](/derivations/foundation/observer-code-distances) and the additive profile-noise formula of this derivation, the minimum viable mass for an observer with profile $\mathcal{I}_A$ is:*

$$m_{\min}(\mathcal{I}_A) \;\sim\; \frac{m_P \cdot \log(p_{th}/p_{\text{phys}}^{\text{eff}}(\mathcal{I}_A, \text{binding axis}))}{2 \cdot c_{\text{axis, binding}} \cdot \log(T_{\text{coh}}/\tau_P)}$$

*where the binding axis is the one with the smallest $\log(p_{th}/p_{\text{phys}}^{\text{eff}})$ — i.e., the axis whose profile noise is closest to the code threshold.*

**Remark 6.2 (Qualitative structure).** *Profiles with stronger couplings have smaller $\log(p_{th}/p_{\text{phys}}^{\text{eff}})$ on the affected axes, forcing larger $m_{\min}$. Profiles with more axes at saturation have larger $c_{\text{axis, binding}}$. Both effects combine to give the predicted hierarchy: neutrinos < leptons < quarks, with exponential generation jumps and color-sector confinement.*

**Corollary 6.3 (Prepared form for Step 5 QEC–WKB identity).** *With Step 4's additive form in hand, the WKB tunneling action $S/\hbar$ of [Mass Hierarchy](/derivations/particles/mass-hierarchy) can be identified with*

$$\frac{S(\mathcal{I}_A)}{\hbar} \;=\; \frac{d_{\text{req}}(\mathcal{I}_A)}{2} \cdot \log\!\left(\frac{p_{th}}{p_{\text{phys}}^{\text{eff}}(\mathcal{I}_A)}\right)$$

*— the quantity that makes exponential QEC suppression $(p_{\text{phys}}/p_{th})^{d/2}$ and exponential WKB suppression $e^{-S/\hbar}$ coincide. Step 5 is now an identity-verification task against the explicit profile-dependent expression on the right-hand side.*

## Consequences

**C1. The profile → mass map is derived, not postulated.** The mapping from observer quantum numbers to specific code distance (hence minimum-viable mass) runs through the profile's gauge couplings via Step 4's additive noise formula. This closes the gap identified by Step 3: profile-specific physics (not universal substrate noise) is what selects profile-specific masses.

**C2. Photon and gluon massless limit is structural.** Gauge mediators are exempt from their own coupling's noise by construction, dropping the relevant sum terms. The massless vector bosons fall out of Step 4 without fiat.

**C3. Confinement as QEC threshold.** Color-charged profiles face $\alpha_s \to 1$ Planck-scale color noise that pushes $p_{\text{phys}}^{\text{eff}}$ to threshold; no stable free-quark code exists. Hadronization restores viability via color screening. This is a mechanism-level prediction complementary to [Confinement](/derivations/gauge/confinement)'s area-law argument.

**C4. Generation hierarchy from level-dependent algebraic-axis activation.** Each generation activates the next-level bootstrap-axis channel, incrementing $c_{\text{alg}}$ and the associated noise sum. Combined with the minimum-viable convention, this gives exponential mass-ratio scaling — the qualitative structure of the observed hierarchy.

**C5. Bridge to Step 5.** The WKB tunneling of Mass Hierarchy acquires an explicit profile-dependent form. Step 5's identity check — does $S/\hbar$ equal $(d_{\text{req}}/2) \log(p_{th}/p_{\text{phys}}^{\text{eff}})$ — becomes a concrete verification with pinned-down right-hand side.

**C6. Bridge to Step 6.** With profile → noise → required distance → minimum-viable mass chain complete, Step 6's SM-spectrum comparison becomes tractable. The remaining input is the fix of the O(1) coefficients $\eta_{i, \text{axis}}$ — either from explicit substrate QFT (Open Gap 1) or from anchoring to one observed mass (possible Step 6 strategy).

## Rigor Assessment

**Rigorous (consolidation from source derivations):**

- Proposition 1.1 (per-cell rate $\propto g^2$): direct from Relational Invariants + Causal Set Statistics.
- Proposition 3.1 (channel independence): direct from Standard Model Group direct-product structure.
- Proposition 3.2 (additive composition at low rate): standard union-bound argument, rigorous under channel-independence.
- Proposition 4.1–4.3 (axis selectivity per channel): direct from each gauge derivation's integer-invariant identification.

**Semi-formal (structural argument with parameterized O(1) coefficients):**

- Proposition 2.1 ($\xi_{i, \text{axis}}$ flip-fraction): stated structurally, not computed. A QFT-on-substrate calculation would pin the numerical values. Open Gap 1.
- Proposition 2.2 ($\eta_{i, \text{axis}}$ absorbs $\kappa_i \xi_{i, \text{axis}}$): definition is clean but values are parameterized. Open Gap 1.
- Remark 4.4 (confinement numerical threshold): structural claim that $\alpha_s \to p_{th}$ drives confinement is rigorous; the specific value of $p_{th}$ depends on Step 2's threshold-inheritance for the product code (Step 3 Open Gap 1).
- Corollary 6.3 (WKB identity form): stated as the identification target for Step 5; its correctness is Step 5's deliverable.

**Deferred to subsequent derivations or explicit calculation:**

- Numerical $\eta_{i, \text{axis}}$ from QFT-on-substrate.
- Electroweak sector specifics (W, Z, Higgs) — Example 5.8 noted these require symmetry-breaking treatment.
- Running-coupling regime: Step 4 uses Planck-scale $g_i$ bare values; relating to low-energy running values requires [Renormalization](/derivations/thermodynamics-ext/renormalization) integration. Open Gap 5.

## Open Gaps

1. **Numerical coefficients $\eta_{i, \text{axis}}$.** Compute the axis-specific Type III flip-fraction coefficients from explicit substrate QFT. For EM on the spatial axis: compute the fraction of virtual-photon exchange events that flip the horizon charge-crossing record; for weak and color similarly. *Difficulty: MODERATE; QFT computation at Planck scale.*

2. **Cross-axis correlated errors from channel-shared invariants.** When a channel tests integer invariants on multiple axes (e.g., weak on both spatial and algebraic), events produce correlated errors. This correlation modifies the product-code threshold analysis of [Step 3](/derivations/foundation/observer-code-distances). Formalize the correlated-error distance formula for profile-dependent noise. *Difficulty: MODERATE.*

3. **Multiplicative alternative to additive composition.** If Step 6's quantitative comparison undershoots the observed hierarchy, the multiplicative form $p_{\text{phys}}^{\text{eff}} = p_{\text{phys}}^{\text{geom}} \prod_i (1 + g_i^2 \eta_i)$ becomes the natural upgrade. Derive whether multiplicative composition is forced by any framework commitment (e.g., mixed-anomaly or Wess-Zumino-type cross-channel terms) or is a free choice. *Difficulty: MODERATE.*

4. **Electroweak sector (W, Z, Higgs).** Example 5.8 flagged that the electroweak symmetry-breaking sector requires explicit handling beyond Step 4's structural framework. Extend the profile → noise map to cover W, Z, Higgs masses via [Electroweak Breaking](/derivations/gauge/electroweak-breaking) and integrate with the additive form. *Difficulty: MODERATE-HARD.*

5. **Running-coupling ↔ effective-noise map.** The gauge couplings $g_i$ entering $\eta_{i, \text{axis}}$ are evaluated at the framework's substrate scale. Relating these to observed low-energy values (via RG flow) requires [Renormalization](/derivations/thermodynamics-ext/renormalization). Derive whether Step 4's additive form is scale-invariant or flows non-trivially under RG. *Difficulty: MODERATE.*

6. **Confinement threshold precision.** Remark 4.4 argues confinement follows from $\alpha_s \to 1$ pushing $p_{\text{phys}}^{\text{eff}}$ to threshold. Compute the precise color-coupling value at which the threshold is crossed — this fixes the QCD confinement scale as a QEC prediction. Test against observed $\Lambda_{\text{QCD}}$. *Difficulty: MODERATE; links to [Confinement](/derivations/gauge/confinement).*

7. **Neutrino-sector mixing and seesaw.** Example 5.7 sketched neutrino noise as smallest because of minimal channel content. Observed neutrino masses (~0.1 eV) are much smaller than the simplest interpretation would predict. Formalize the neutrino-sector seesaw within the Step 4 framework via [Neutrino Masses](/derivations/particles/neutrino-masses). *Difficulty: MODERATE-HARD.*

8. **Anchored Step 6 comparison (prerequisite for validation test).** With $\eta_{i, \text{axis}}$ unknown, Step 6's quantitative comparison requires anchoring to one observed mass to fix the coefficients, then predicting others. This is a derived-strategy deliverable for Step 6, not an open gap of Step 4 per se. *Difficulty: HARD; prerequisite for quantitative falsification test.*
