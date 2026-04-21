---
title: "Substrate Noise and Profile-Dependent Coupling Modulation"
status: "provisional"
dependsOn: ["foundation/observer-as-error-correcting-code", "holography/causal-set-statistics", "holography/area-scaling", "interactions/relational-invariants", "gauge/electromagnetism", "gauge/weak-interaction", "gauge/color-force", "axioms/coherence-conservation", "interactions/moufang-loop-phase-closure"]
enablesDerivation: []
tags: ["foundation", "error-correction", "noise-model", "gauge"]
summary: "The observer-projection error-correcting code operates under substrate noise with two additive components. Universal geometric noise from Planck-scale spacetime fluctuations: each Planck cell carries displacement variance α_H ℓ_P² (Causal Set Statistics / Holographic Noise, with α_H ∼ 1/4 the natural target), giving per-cell per-tick bit-flip probability p_phys^geom = erfc(1/√(8α_H)) ≈ 0.05 at α_H = 1/4 under a full-cell-exceedance threshold convention — below typical topological-code thresholds and placing the code in the protected regime. Profile-dependent gauge-coupling noise: each active gauge channel in an observer's profile contributes an additional additive term at per-cell rate g²·η, via Type III carrier exchanges with the vacuum at Poisson-density-matched rate, composed additively by Coherence Conservation subadditivity and Standard Model gauge group's direct-product channel independence. Per-axis achieved code distances scale polynomially (d_achieved ∼ m_P/m) while required distances scale logarithmically in coherence lifetime, giving the observed enormous preservation margins. The additive profile map is axis-selective: EM modulates spatial axis only (horizon charge-crossings), weak modulates spatial plus algebraic (flavor change is algebraic-invariant change), color modulates spatial plus algebraic and drives temporal-axis divergence as α_s → 1 — predicting confinement as a QEC threshold mechanism. Gauge-mediator profiles (photon, gluon) are structurally exempt from their own channel's noise because their profile has no logical content exposed to the coupling they mediate, giving the massless vector boson limit by construction."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-19
---

## Overview

The observer-projection error-correcting code specified in [Observer as an Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code) does not operate in a noise-free environment. The substrate — the causal-set-structured Planck-scale content underlying observer dynamics — fluctuates, and these fluctuations act as bit-flip errors on the code's integer-invariant profile. This derivation specifies the noise the code must correct against.

**Two additive components.**

1. *Universal geometric substrate noise.* Every Planck cell of the substrate carries a displacement fluctuation whose variance is set by the framework's holographic-noise amplitude $\alpha_H \sim 1/4$ ([Holographic Noise](/predictions/holographic-noise), [Causal Set Statistics](/derivations/holography/causal-set-statistics)). Translated into a per-cell, per-Planck-tick bit-flip probability via Gaussian-tail exceedance, this gives $p_{\mathrm{phys}}^{\mathrm{geom}} \approx 0.05$ — below standard topological-code thresholds and placing the code in the protected regime.

2. *Profile-dependent gauge-coupling noise.* Each gauge coupling an observer carries adds an independent per-cell noise term at rate $\sim g_i^2 \eta_{i, \mathrm{axis}}$ via Type III carrier exchanges with the vacuum. The composition across channels is additive, enforced by Coherence Conservation subadditivity and by the Standard Model gauge group's direct-product channel independence.

**The composed noise rate**:

$$p_{\mathrm{phys}}^{\mathrm{eff}}(\mathcal{I}_A,\, \mathrm{axis}) \;=\; p_{\mathrm{phys}}^{\mathrm{geom}}(\alpha_H,\, \mathrm{axis}) \;+\; \sum_{i \in \mathrm{channels}(\mathrm{axis})} g_i^2 \cdot \eta_{i,\mathrm{axis}}$$

is axis-selective — each coupling modulates only the axes whose integer invariants it tests.

**Per-axis code-distance structure.** Under this noise model, the code's required distance per axis $d_{\mathrm{req}}^{\mathrm{axis}}$ scales linearly in the profile's axis-specific integer bit content and logarithmically in the coherence lifetime. Its achieved distance scales polynomially in inverse observer mass: $d_{\mathrm{achieved}} \sim m_P/m_A$ on all three axes. The ratio of these scalings — polynomial in $m_P/m$ versus logarithmic in lifetime — is what downstream derivations exploit.

**Two structural corollaries.**

1. *Gauge-mediator masslessness.* Photons and gluons are the carriers of EM and color respectively. Their profiles have no logical content exposed to their own coupling, so the coupling-induced-noise sum has an empty index set on the relevant axes. The effective noise reduces to $p_{\mathrm{phys}}^{\mathrm{geom}}$ alone, and the minimum-viable profile degenerates to the massless limit structurally — not by fiat.

2. *Confinement as a noise threshold.* For color-charged profiles (quarks), $\alpha_s \to 1$ at the Planck scale drives $p_{\mathrm{phys}}^{\mathrm{eff,\,spatial}}$ toward the topological-code threshold $p_{th}$. Above threshold, no stable code exists for the free-quark profile; color-neutral composites (hadrons) restore viability via the effective-coupling screening between Planck and $\Lambda_{\mathrm{QCD}}$ scales.

**Rigor scope.** The two noise components are each derived from explicit framework inputs. The additive composition form is forced by framework commitments (Relational Invariants + Coherence Conservation + SM gauge group structure); the multiplicative alternative is explicitly rejected. The numerical coefficients $\eta_{i, \mathrm{axis}}$ are O(1) substrate-QFT quantities that this derivation parameterizes without pinning down — flagged as the principal open gap. All structural predictions (axis selectivity, massless mediators, confinement) are invariant under O(1) changes in these coefficients.

## Statement

**Theorem (Universal geometric per-cell noise).** *Each Planck cell of the substrate carries an independent Gaussian displacement with $\langle \delta x_i \rangle = 0$ and $\langle \delta x_i^2 \rangle = \alpha_H \ell_P^2$ (from [Causal Set Statistics](/derivations/holography/causal-set-statistics) Proposition 2.2 and Heuristic 2.3, plus [Holographic Noise](/predictions/holographic-noise) identifying $\alpha_H \sim 1/4$ as the natural target). Under a full-cell-exceedance convention — an integer-crossing residue is flipped when the cell's displacement exceeds $\ell_P$ — the per-cell, per-Planck-tick bit-flip probability is:*

$$p_{\mathrm{phys}}^{\mathrm{geom}} \;=\; \mathrm{erfc}\!\left(\frac{1}{\sqrt{2\alpha_H}}\right).$$

*At $\alpha_H = 1/4$: $p_{\mathrm{phys}}^{\mathrm{geom}} \approx 0.046$. At the Holometer bound $\alpha_H \leq 0.24$: $p_{\mathrm{phys}}^{\mathrm{geom}} \leq 0.041$. Below standard topological-code thresholds $p_{th} \in [0.03, 0.15]$.*

**Theorem (Gauge couplings as additive noise channels).** *For an observer with profile $\mathcal{I}_A$ and active gauge channels $\{g_i\}$, each channel contributes an independent additive noise term via Type III carrier exchanges with the substrate vacuum. The composed per-cell per-tick bit-flip probability on each code axis is:*

$$p_{\mathrm{phys}}^{\mathrm{eff}}(\mathcal{I}_A,\, \mathrm{axis}) \;=\; p_{\mathrm{phys}}^{\mathrm{geom}}(\alpha_H,\, \mathrm{axis}) \;+\; \sum_{i \in \mathrm{channels}(\mathrm{axis})} g_i^2 \cdot \eta_{i,\mathrm{axis}}$$

*where $\mathrm{channels}(\mathrm{axis})$ is the set of active gauge channels that test integer invariants on that axis, and $\eta_{i,\mathrm{axis}}$ is an O(1) axis-specific coefficient encoding the coupling normalization and the per-event invariant-flip fraction.*

**Theorem (Axis selectivity).** *Each gauge coupling modulates noise only on the code axes corresponding to the integer invariants it tests:*

- *Electromagnetic coupling $\alpha_{\mathrm{EM}}$: **spatial axis only** (horizon charge-crossings); $\eta_{\mathrm{EM},\mathrm{alg}} = \eta_{\mathrm{EM},\mathrm{tmp}} = 0$.*
- *Weak coupling $g_W^2$: **spatial and algebraic axes** (weak-isospin testing and flavor-change instanton-class change at bootstrap level 2); $\eta_{W,\mathrm{tmp}} = 0$.*
- *Color coupling $g_s^2$: **spatial and algebraic axes** (color-index permutation and $\pi_3(SU(3))$ instanton-class change at bootstrap level 3), plus **temporal-axis divergence** as $g_s^2 \eta_{s,\mathrm{sp}}$ approaches $p_{th}$ from below (confinement mechanism).*

**Theorem (Achieved code distances scale polynomially in inverse mass).** *From [Observer as an Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code) Theorem 5.3 (cross-axis couplings), the per-axis achieved code distances at mass $m_A$ scale as:*

- *Spatial: $d_{\mathrm{achieved}}^{\mathrm{sp}} \sim \sqrt{N_A} \sim m_P/(2 m_A)$, using $r_H \sim \hbar/m_A c$ and $N_A = A_A/4\ell_P^2$.*
- *Algebraic: $d_{\mathrm{achieved}}^{\mathrm{alg}} \sim m_P/m_n$, with $m_n$ the observer's characteristic mass at bootstrap level $n$.*
- *Temporal: $d_{\mathrm{achieved}}^{\mathrm{tmp}} \sim T_A/\tau_P \sim 2\pi m_P/m_A$, from the Compton period $T_A$.*

**Theorem (Required code distances scale logarithmically in lifetime).** *For the composite logical error probability to remain below unity over coherence lifetime $T_{\mathrm{coh}}$ (measured in Planck ticks), the required distance per axis is:*

$$d_{\mathrm{req}}^{\mathrm{axis}}(\mathcal{I}_A,\, T_{\mathrm{coh}}) \;=\; \frac{2 c_{\mathrm{axis}}(\mathcal{I}_A)}{\log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff},\,\mathrm{axis}})} \cdot \log\!\left(\frac{T_{\mathrm{coh}}}{\tau_P}\right)$$

*where $c_{\mathrm{axis}}$ is the profile's axis-specific bit-content. The required distance is **linear in profile complexity** and **logarithmic in lifetime** — a slowly-growing function.*

**Corollary (Gauge mediator masslessness).** *Gauge bosons carry the coupling of the channel they mediate, not the coupling's testable quantum numbers: photon profile has electric charge 0; gluon profile has net color 0. Their $\eta_{i,\mathrm{axis}}$ coefficients vanish on the axes that coupling tests. The effective noise reduces to $p_{\mathrm{phys}}^{\mathrm{geom}}$ alone — the universal geometric floor. Under minimum-viable-code selection, this corresponds to the massless limit. The photon and gluon are massless by structural exemption, not by input tuning.*

**Corollary (Confinement as QEC threshold).** *For color-charged profiles, $g_s^2 \eta_{s,\mathrm{sp}} \to \eta_{s,\mathrm{sp}}$ as $\alpha_s \to 1$ at Planck scale. Combined with other active channels' contributions, $p_{\mathrm{phys}}^{\mathrm{eff,\,spatial}}$ approaches $p_{th}$: the free color-charged profile's code fails at or above threshold, giving diverging required distance and no stable code realization. Color-neutral composites (hadrons) screen the effective color coupling from Planck-scale $\alpha_s \sim 1$ to hadron-scale $\alpha_s \sim 0.1$ via running, dropping $p_{\mathrm{phys}}^{\mathrm{eff,\,spatial}}$ below $p_{th}$ and restoring code viability. This is the QEC reading of QCD confinement, structurally complementary to the Wilson-loop argument of [Confinement](/derivations/gauge/confinement).*

## Derivation

### Universal geometric noise from Planck-scale fluctuations

The substrate noise originates in the Planck-scale causal-set structure established by [Causal Set Statistics](/derivations/holography/causal-set-statistics).

**Proposition 1.1 (Poisson density and per-cell displacement variance).** *The causal set underlying the substrate is Poisson-sprinkled at density $\rho_P = \ell_P^{-4}$ — one element per Planck 4-volume. Each Planck cell along a geodesic carries an independent displacement with zero mean and variance $\alpha_H \ell_P^2$, where $\alpha_H$ is a dimensionless O(1) coefficient whose natural-target value is $\alpha_H \sim 1/4$ from saturation of the holographic entropy bound ([Causal Set Statistics](/derivations/holography/causal-set-statistics) Heuristic 2.3).*

*Proof.* Direct from [Causal Set Statistics](/derivations/holography/causal-set-statistics) Propositions 1.3 and 2.2. $\square$

**Proposition 1.2 (Gaussian per-cell distribution).** *The per-cell displacement is Gaussian with variance $\alpha_H \ell_P^2$, by central-limit-theorem on the Poisson sub-structure within each Planck cell ([Causal Set Statistics](/derivations/holography/causal-set-statistics) Step 2c of Proposition 2.2 proof).*

**Proposition 1.3 (Per-cell bit-flip probability).** *Under a threshold convention $x_{th}$ for flipping the cell's integer-crossing residue, the per-cell per-Planck-tick bit-flip probability is:*

$$p_{\mathrm{phys}}^{\mathrm{geom}}(x_{th}) \;=\; \mathrm{Pr}[\,|\delta x| > x_{th}\,] \;=\; \mathrm{erfc}\!\left(\frac{x_{th}}{\sigma\sqrt{2}}\right) \;=\; \mathrm{erfc}\!\left(\frac{x_{th}}{\ell_P \sqrt{2\alpha_H}}\right).$$

*Direct Gaussian tail calculation.* $\square$

**Remark 1.4 (Threshold convention).** *Three natural thresholds give different numerical values:*

- *$x_{th} = \ell_P/2$ (half-cell): $p_{\mathrm{phys}}^{\mathrm{geom}} = \mathrm{erfc}(1/\sqrt{8\alpha_H}) \approx 0.157$ at $\alpha_H = 1/4$.*
- *$x_{th} = \ell_P$ (full-cell): $p_{\mathrm{phys}}^{\mathrm{geom}} = \mathrm{erfc}(1/\sqrt{2\alpha_H}) \approx 0.046$ at $\alpha_H = 1/4$.*
- *$x_{th} = 2\ell_P$ (two-cell): $p_{\mathrm{phys}}^{\mathrm{geom}} \approx 5 \times 10^{-4}$ at $\alpha_H = 1/4$.*

*The full-cell convention is the natural reading: a Planck-cell crossing is "flipped" when the noise displaces the crossing record across one full cell, not by a half-cell fraction. All structural results of this derivation are invariant under O(1) changes in this convention; the numerical value enters downstream formulas only through $\log(p_{th}/p_{\mathrm{phys}})$. The derivation commits to the full-cell reading: $p_{\mathrm{phys}}^{\mathrm{geom}} \approx 0.046$ at $\alpha_H = 1/4$.*

**Remark 1.5 (Alternative readings attempted).** *A first attempt identified $\alpha_H$ directly with the per-mode bit-flip probability. This identification is incorrect: $\alpha_H$ is a dimensionless coefficient of a displacement variance with units of length-squared, not a probability. The Gaussian-tail translation above gives the correct probabilistic reading. A second attempt identified the bit-flip probability with the raw Poisson-density rate $\rho_P \ell_P^4 = 1$ — this is the expected number of causal-set events per cell per tick, not a bit-flip probability, and is order unity so would place the code above threshold universally (no particles could exist). The Gaussian-tail reading correctly distinguishes expected events from invariant-flipping events.*

**Proposition 1.6 (Below-threshold operation).** *For $\alpha_H \leq 0.24$ (Holometer-constrained upper bound) under the full-cell convention, $p_{\mathrm{phys}}^{\mathrm{geom}} \leq 0.041$. Standard topological-code thresholds span $p_{th} \in [0.029, 0.15]$ across the code-family variants (2D toric $\approx 0.11$, 4D toric / Walker–Wang $\approx 0.029$, HaPPY $\approx 0.15$). The universal geometric component sits below threshold on all three code factors — the observer-projection code operates in the protected regime under geometric noise alone.*

### Per-axis code distance scalings

**Proposition 2.1 (Spatial-axis achieved distance).** *From [Observer as an Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code) Theorem 5.3 and standard HaPPY-scaling (boundary-linear-size ~ √boundary-qubit-count):*

$$d_{\mathrm{achieved}}^{\mathrm{sp}}(m_A) \;\sim\; \sqrt{N_A} \;=\; \sqrt{\frac{A_A}{4\ell_P^2}} \;\sim\; \frac{r_H}{2\ell_P} \;\sim\; \frac{m_P}{2 m_A}$$

*using the Compton horizon $r_H \sim \hbar/(m_A c)$ for a fundamental particle.*

**Proposition 2.2 (Algebraic-axis achieved distance).** *From [Observer as an Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code) Theorem 5.3 and standard Kitaev/Walker–Wang scaling (distance ~ system linear size):*

$$d_{\mathrm{achieved}}^{\mathrm{alg}}(m_A,\, n) \;\sim\; \frac{L_n}{\ell_P} \;\sim\; \frac{\hbar}{m_A c \ell_P} \;\sim\; \frac{m_P}{m_A}$$

*at the observer's bootstrap-level-$n$ characteristic scale.*

**Proposition 2.3 (Temporal-axis achieved distance).** *From [Observer as an Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code) Theorem 5.3 and continuous-time Floquet-code scaling (distance ~ Planck-tick count per period):*

$$d_{\mathrm{achieved}}^{\mathrm{tmp}}(m_A) \;\sim\; \frac{T_A}{\tau_P} \;\sim\; \frac{2\pi m_P}{m_A}$$

*using the Compton period $T_A = 2\pi\hbar/(m_A c^2)$.*

**Remark 2.4 (All three axes scale as $m_P/m_A$).** *All three achieved distances go as $m_P/m_A$ up to O(1) factors. Heavier observers have smaller achieved distances; lighter observers have larger achieved distances. This is the unexpectedly strong polynomial-in-inverse-mass scaling that downstream derivations contrast with the slower logarithmic-in-lifetime scaling of required distances.*

**Proposition 2.5 (Per-axis required distance).** *For a topological stabilizer code operating at per-cell noise rate $p_{\mathrm{phys}}$ below threshold $p_{th}$, the logical error probability per code cycle is $P_L \sim (p_{\mathrm{phys}}/p_{th})^{d/2}$ (standard QEC result, Dennis–Kitaev–Landahl–Preskill 2002). For the composite logical error probability over a coherence lifetime $T_{\mathrm{coh}}$ to remain below unity:*

$$c_{\mathrm{axis}} \cdot P_L(d^{\mathrm{axis}}) \cdot \frac{T_{\mathrm{coh}}}{\tau_P} \;<\; 1.$$

*Solving for $d^{\mathrm{axis}}$:*

$$d_{\mathrm{req}}^{\mathrm{axis}}(\mathcal{I}_A,\, T_{\mathrm{coh}}) \;=\; \frac{2 c_{\mathrm{axis}}(\mathcal{I}_A)}{\log(p_{th}/p_{\mathrm{phys}}^{\mathrm{axis}})} \cdot \log\!\left(\frac{T_{\mathrm{coh}}}{\tau_P}\right).$$

*The required distance grows linearly in profile complexity $c_{\mathrm{axis}}$ and logarithmically in lifetime ratio $T_{\mathrm{coh}}/\tau_P$. For cosmological-lifetime observers ($T_{\mathrm{coh}} \sim t_U \approx 10^{60}\tau_P$), $\log(T_{\mathrm{coh}}/\tau_P) \approx 138$, and required distances are of order a few hundred times the profile's axis-specific bit content. Achieved distances $\sim m_P/m$ exceed this by many orders of magnitude at SM-scale masses — the large-margin regime analyzed structurally in [Formation and Preservation as Complementary Mechanisms](/derivations/foundation/formation-and-preservation).*

### Gauge couplings as profile-dependent additive noise

Universal geometric noise is insufficient to capture the framework's full substrate-level perturbation picture. Each gauge coupling an observer carries also contributes to the noise its logical content experiences. The mechanism: gauge interactions are Type III carrier exchanges with the substrate vacuum, and their rate is set by the coupling squared.

**Proposition 3.1 (Gauge interactions as Type III carrier exchanges).** *From [Relational Invariants](/derivations/interactions/relational-invariants), Type III interactions generate relational invariants — conserved quantities on the joint state space of two observers, promoted to gauge connections via the Reverse Noether Mechanism ([Electromagnetism](/derivations/gauge/electromagnetism), [Weak Interaction](/derivations/gauge/weak-interaction), [Color Force](/derivations/gauge/color-force)). The gauge coupling $g_i$ for each channel is the strength of that channel's Type III exchange.*

**Proposition 3.2 (Per-Planck-cell per-Planck-tick exchange rate).** *For each active gauge channel $i$, the expected number of Type III carrier exchanges with the substrate vacuum per Planck 4-volume is:*

$$\lambda_i^{\mathrm{vac}} \;=\; g_i^2 \cdot \kappa_i$$

*where $\kappa_i$ is a channel-specific O(1) prefactor set by the coupling's normalization convention (the QFT-standard $1/(4\pi)$ or analogous factor for each channel).*

*Structural argument.* In QFT, the per-unit-spacetime-volume rate of virtual gauge-boson events scales as $g^2 \cdot \rho$ where $\rho$ is the density of interaction partners. In the substrate vacuum, $\rho$ is the Poisson density of causal-set elements ($\rho_P = \ell_P^{-4}$, one per Planck 4-volume). The per-Planck-cell per-Planck-tick rate is therefore $g^2 \cdot \kappa$ with $\kappa$ absorbing the QFT-normalization prefactor. $\square$

**Proposition 3.3 (Bit-flip per Type III event).** *Each Type III exchange in channel $i$ flips the observer's integer-invariant record on the axes corresponding to the gauge charges the channel tests. The probability of flipping an axis-$\mathrm{axis}$ invariant per event is:*

$$p_i^{\mathrm{flip\,per\,event},\,\mathrm{axis}} \;=\; \xi_{i,\mathrm{axis}} \;\in\; [0, 1]$$

*where $\xi_{i,\mathrm{axis}}$ is the fraction of channel-$i$ events that flip an axis-$\mathrm{axis}$ invariant (for axes not tested by channel $i$, $\xi_{i,\mathrm{axis}} = 0$). Combined with Proposition 3.2:*

$$p_i^{\mathrm{per\,cell\,per\,tick},\,\mathrm{axis}}(\mathcal{I}_A) \;=\; \lambda_i^{\mathrm{vac}} \cdot \xi_{i,\mathrm{axis}} \;=\; g_i^2 \cdot \kappa_i \cdot \xi_{i,\mathrm{axis}} \;\equiv\; g_i^2 \cdot \eta_{i,\mathrm{axis}}$$

*absorbing the product $\kappa_i \xi_{i,\mathrm{axis}}$ into a single axis-specific O(1) coefficient $\eta_{i,\mathrm{axis}}$.*

### Additive composition from Coherence Conservation

**Proposition 4.1 (Channel independence at substrate level).** *Type III carrier exchanges in different gauge channels are independent Poisson processes: the joint probability of a channel-$i$ event and a channel-$j$ event in the same Planck cell and Planck tick is the product of independent rates.*

*Structural argument.* The Standard Model gauge group $G_{\mathrm{SM}} = U(1)_{\mathrm{EM}} \times SU(2)_L \times SU(3)_c$ is a direct product ([Standard Model Group](/derivations/gauge/standard-model-group)). Direct-product generators commute pairwise and act on independent subspaces of the joint state space. Independent generators produce independent Type III carrier exchanges. $\square$

**Proposition 4.2 (Additive composition at low rate).** *For independent per-cell per-tick bit-flip rates $\{p_i\}$ across multiple channels, the composite rate on a shared axis (where "bit-flipped" means "flipped by any channel") to first order is:*

$$p^{\mathrm{total},\,\mathrm{axis}} \;=\; p_{\mathrm{phys}}^{\mathrm{geom},\,\mathrm{axis}} \;+\; \sum_{i \in \mathrm{channels}(\mathrm{axis})} p_i^{\mathrm{per\,cell\,per\,tick},\,\mathrm{axis}} \;+\; O(p_i p_j).$$

*The cross-terms $O(p_i p_j)$ are second-order in small rates and correspond to simultaneous multi-channel events (rare by channel independence, and usually compensating rather than compounding when they occur). Coherence Conservation ([Coherence Conservation](/derivations/axioms/coherence-conservation)) bounds the total noise rate by the subadditive sum across channels (strong subadditivity applied to independent perturbations).* $\square$

**Corollary 4.3 (Additive form of $p_{\mathrm{phys}}^{\mathrm{eff}}$).** *Combining Propositions 3.3 and 4.2:*

$$\boxed{\; p_{\mathrm{phys}}^{\mathrm{eff}}(\mathcal{I}_A,\, \mathrm{axis}) \;=\; p_{\mathrm{phys}}^{\mathrm{geom}}(\alpha_H,\, \mathrm{axis}) \;+\; \sum_{i \in \mathrm{channels}(\mathrm{axis})} g_i^2 \cdot \eta_{i,\mathrm{axis}} \;}$$

**Remark 4.4 (Additive rather than multiplicative).** *A multiplicative form $p_{\mathrm{phys}}^{\mathrm{eff}} = p_{\mathrm{phys}}^{\mathrm{geom}} \prod_i (1 + g_i^2 \eta_i)$ would imply that having one active channel amplifies the rate of events in another channel — a specific non-linear cross-coupling not present in the SM gauge group's direct-product structure. The additive form follows from channel independence (Proposition 4.1) plus the low-rate union bound (Proposition 4.2), both forced by framework commitments. The multiplicative form is available as a refinement if future derivations identify framework-level cross-channel interactions (e.g., from mixed-anomaly terms); until then, additive is the conservative and correct form.*

### Axis selectivity from coupling quantum numbers

Each gauge coupling tests specific integer invariants of the observer's profile. Only axes carrying those invariants see noise modulation from that coupling.

**Proposition 5.1 (EM channel — spatial axis only).** *Electromagnetic Type III exchanges test horizon-crossing electric-charge integer residue. They do not directly change the observer's tick count (photon emission/absorption cycles close within the phase period) or the bootstrap-level homotopy class (EM is already the level-1 $U(1)$ sector, its invariants captured in the spatial-axis charge count). Hence $\eta_{\mathrm{EM},\mathrm{sp}} > 0$ and $\eta_{\mathrm{EM},\mathrm{alg}} = \eta_{\mathrm{EM},\mathrm{tmp}} = 0$.*

**Proposition 5.2 (Weak channel — spatial and algebraic axes).** *Weak Type III exchanges carry $SU(2)_L$ isospin charge. Charged-current ($W^\pm$) events change flavor — an algebraic-axis invariant change at bootstrap level 2 ($\pi_3(SU(2))$ instanton sectors). Neutral-current ($Z$) events change weak isospin component — a spatial-axis invariant change. Temporal tick-count is not directly tested. Hence $\eta_{W,\mathrm{sp}} > 0$, $\eta_{W,\mathrm{alg}} > 0$, $\eta_{W,\mathrm{tmp}} = 0$.*

**Proposition 5.3 (Color channel — spatial, algebraic, and temporal-via-confinement).** *Gluon exchanges permute color indices (spatial-axis invariant change) and can change the observer's algebraic-axis instanton class at bootstrap level 3 ($\pi_3(SU(3))$). Additionally — and structurally distinctively — as $\alpha_s \to 1$ at Planck scale, $g_s^2 \eta_{s,\mathrm{sp}}$ approaches $p_{th}$ from below, producing the threshold-approach that manifests on the temporal axis as divergence of the required distance (confinement).*

### Structural corollaries

**Corollary 6.1 (Massless gauge mediators).** *Gauge-boson profiles carry no logical content exposed to the coupling they mediate. For the photon: profile electric charge is 0; there is no horizon-charge-crossing integer to flip, so EM noise contribution vanishes for the photon's own code. For the gluon: profile net color is 0; no color-index to permute, color noise contribution vanishes for its own code. Consequently:*

- *$\eta_{\mathrm{EM},\mathrm{axis}}(\gamma) = 0$ on every axis.*
- *$\eta_{s,\mathrm{axis}}(g) = 0$ on every axis.*

*Under the additive form (Corollary 4.3), these profiles see only $p_{\mathrm{phys}}^{\mathrm{geom}}$. Under minimum-viable code selection (Definition 1.1 of [Mass Hierarchy](/derivations/particles/mass-hierarchy)), this drives the profile's required-mass to the geometric floor — the massless limit. Photon and gluon are massless by structural exemption from their own coupling's noise, not by input.*

*Weak gauge bosons ($W$, $Z$) are an intermediate case: the electroweak sector is symmetry-broken, the physical gauge bosons mix weak and hypercharge gauge states, and the Higgs mechanism provides their mass. A full treatment requires [Electroweak Breaking](/derivations/gauge/electroweak-breaking) and is not contained in this derivation.*

**Corollary 6.2 (Confinement as noise threshold).** *For color-charged profiles (quarks), the spatial-axis noise term is:*

$$p_{\mathrm{phys}}^{\mathrm{eff,\,sp}}(q) \;=\; p_{\mathrm{phys}}^{\mathrm{geom}} \;+\; \alpha_{\mathrm{EM}} \cdot \eta_{\mathrm{EM},\mathrm{sp}} \;+\; g_W^2 \cdot \eta_{W,\mathrm{sp}} \;+\; g_s^2 \cdot \eta_{s,\mathrm{sp}}.$$

*At Planck scale, $\alpha_s \sim 1$ (asymptotic-freedom running reverses at ultraviolet scales), so $g_s^2 \eta_{s,\mathrm{sp}}$ dominates and approaches $p_{th}$ from below. For $\eta_{s,\mathrm{sp}} \sim 0.1$ and $p_{th} \approx 0.11$: the free-quark spatial-axis noise is above threshold, $d_{\mathrm{req}}^{\mathrm{sp}}$ diverges, no finite-mass free-quark code exists.*

*Color-neutral composites (hadrons) carry net color 0 at the composite scale. The effective color coupling is screened by QCD running from $\alpha_s \sim 1$ at Planck to $\alpha_s \sim 0.1$ at $\Lambda_{\mathrm{QCD}} \sim 0.3$ GeV. At the screened-coupling scale, $g_s^2 \eta_{s,\mathrm{sp}} \sim 0.01$, and $p_{\mathrm{phys}}^{\mathrm{eff,\,sp}}$ drops below $p_{th}$ — preservation viable. Observed color-charged states are therefore always color-neutral composites. This is the QEC reading of color confinement, structurally complementary to the Wilson-loop area-law picture of [Confinement](/derivations/gauge/confinement).*

**Remark 6.3 (Three complementary pictures of confinement).** *The Wilson-loop area-law argument of [Confinement](/derivations/gauge/confinement) demonstrates that the energy to separate a color-charged pair grows linearly with separation — making isolated free quarks energetically forbidden. The QEC-threshold argument above demonstrates that free-quark profiles fail code preservation at Planck-scale color coupling — making isolated free quarks informationally non-viable. A third framework-internal argument, the edge-viability picture of [Profile-Dependent Edges and Confinement](/derivations/foundation/profile-dependent-edges-and-confinement) Theorem 7.1, demonstrates that isolated color-charged profiles have no finite-radius operational edge because their color signal is linearly divergent rather than Yukawa-decaying. All three arguments reach the same conclusion (confinement) via independent mechanisms; all three are consistent with the observed color-neutral hadron spectrum. Their mutual consistency is a framework-level coherence check. The QEC reading adds: the specific $\Lambda_{\mathrm{QCD}}$ scale at which confinement becomes hadronization is the scale at which screened $\alpha_s$ first drops $g_s^2 \eta_{s,\mathrm{sp}}$ below $p_{th}$, a structural prediction that could in principle fix $\Lambda_{\mathrm{QCD}}$ as a function of $\eta_{s,\mathrm{sp}}$ and $p_{th}$.*

## Consequences

**C1. The substrate noise against which the observer-projection code operates is specified explicitly.** Two components: universal geometric from $\alpha_H$ ($p_{\mathrm{phys}}^{\mathrm{geom}} \approx 0.05$) and profile-dependent additive from gauge couplings.

**C2. The observer-projection code operates in the protected regime under geometric noise alone.** $p_{\mathrm{phys}}^{\mathrm{geom}} < p_{th}$ for all three code factors; logical error is exponentially suppressed in code distance.

**C3. Profile-dependent noise modulates only the axes that a coupling's quantum numbers test.** Axis selectivity follows from matching coupling quantum numbers to code-axis integer invariants.

**C4. Achieved code distances scale polynomially in $m_P/m_A$ while required distances scale logarithmically in lifetime.** The scaling mismatch is the structural basis for the large preservation margins analyzed in downstream derivations.

**C5. Gauge-mediator masslessness is structural.** Photons and gluons are exempt from their own coupling's noise because their profile has no logical content in the channel they mediate.

**C6. Confinement emerges as a QEC threshold consequence.** Free color-charged profiles fail code preservation at Planck-scale $\alpha_s$; color-neutral composites restore viability via coupling screening. Complementary to the Wilson-loop area-law picture of [Confinement](/derivations/gauge/confinement).

**C7. The additive form of profile-dependent noise is framework-forced.** Relational-Invariants Type III structure + SM direct-product channel independence + Coherence Conservation subadditivity determine additive composition. The multiplicative alternative is rejected absent specific non-linear cross-channel interactions not currently derivable from the framework.

## Rigor Assessment

**Rigorous (direct from source derivations and standard QI):**

- Proposition 1.1 (Poisson density and displacement variance): direct from Causal Set Statistics.
- Proposition 1.2 (Gaussian per-cell distribution): CLT, rigorous.
- Proposition 1.3 (bit-flip probability from Gaussian tail): standard probability calculation.
- Propositions 2.1–2.3 (per-axis achieved distances): direct from Observer as an Error-Correcting Code Theorem 5.3.
- Proposition 3.1 (gauge interactions as Type III): direct from Relational Invariants.
- Proposition 4.1 (channel independence): direct from Standard Model Group direct-product structure.
- Proposition 4.2 (additive composition at low rate): standard union-bound argument.

**Semi-formal (structural with parameterized O(1) coefficients):**

- Remark 1.4 (threshold convention): the choice of $x_{th}$ is a modeling commitment, not derived.
- Proposition 3.2 ($\kappa_i$ prefactor): O(1) coupling-normalization convention, not pinned to specific value.
- Proposition 3.3 ($\xi_{i,\mathrm{axis}}$ flip-fraction): substrate-QFT quantity requiring explicit calculation; parameterized.
- Proposition 5.3 + Corollary 6.2 (confinement threshold): structural claim that $\alpha_s \to 1$ drives $p_{\mathrm{phys}}^{\mathrm{eff}} \to p_{th}$ is rigorous; specific value of the crossing scale depends on O(1) coefficients.

**Deferred to subsequent work:**

- Numerical values of $\eta_{i,\mathrm{axis}}$ for each channel × axis combination (Open Gap 1).
- Multiplicative-refinement cross-channel interactions, if any, from higher-order framework structure (Open Gap 2).
- Electroweak gauge boson (W, Z) and Higgs profile handling under symmetry breaking (Open Gap 3).

## Open Gaps

1. **Numerical $\eta_{i,\mathrm{axis}}$ coefficients.** Compute the axis-specific invariant-flip fractions for each gauge channel via substrate-scale QFT. For EM on the spatial axis: fraction of virtual-photon events that flip the horizon charge-crossing integer. Similarly for weak and color on their active axes. *Difficulty: MODERATE; QFT computation at Planck scale.*

2. **Cross-channel correlated errors from mixed anomalies.** Framework-level cross-channel interactions (e.g., mixed anomaly structures, Wess–Zumino-Witten terms) could modify the additive form to multiplicative or to a specific mixed composition. Derive whether any such interactions are present in the SM gauge structure as committed-to by the framework. *Difficulty: MODERATE.*

3. **Electroweak sector handling.** The additive form applies to gauge couplings in the unbroken-phase regime. Physical $W$, $Z$, Higgs are electroweak symmetry-broken states with mixed weak-hypercharge quantum numbers and Higgs-VEV-generated mass contributions. Extend the noise map to handle these explicitly. *Difficulty: MODERATE-HARD; requires [Electroweak Breaking](/derivations/gauge/electroweak-breaking) integration.*

4. **Running-coupling scale dependence.** Gauge couplings run with energy scale. The noise formula as stated uses Planck-scale bare couplings; relating to low-energy effective couplings (e.g., for the confinement-screening argument of Corollary 6.2) requires [Renormalization](/derivations/thermodynamics-ext/renormalization) integration. Derive whether Step 4's additive form is scale-invariant or flows non-trivially under RG. *Difficulty: MODERATE.*

5. **Explicit confinement-threshold computation.** Corollary 6.2's $\alpha_s \to 1$-drives-$p_{\mathrm{phys}}^{\mathrm{eff}} \to p_{th}$ argument is structural. Compute the precise $\alpha_s$ value and Planck-scale-to-$\Lambda_{\mathrm{QCD}}$ ratio at which the threshold is crossed; compare to observed $\Lambda_{\mathrm{QCD}} \sim 0.3$ GeV as a predicted quantity. *Difficulty: MODERATE; prerequisite is Gap 1.*

6. **Neutrino-sector seesaw integration.** Minimal-coupling profiles (neutrinos) have smallest $p_{\mathrm{phys}}^{\mathrm{eff}}$ and smallest $d_{\mathrm{req}}$. Observed neutrino masses ($\sim 10^{-30} m_P$) are far below any naive mass floor this derivation would predict. Integrate with [Neutrino Masses](/derivations/particles/neutrino-masses) seesaw mechanism to handle the specific smallness. *Difficulty: MODERATE-HARD.*

## References and further reading

**Foundational inputs.**
- [Causal Set Statistics](/derivations/holography/causal-set-statistics) — Poisson-sprinkled substrate at Planck density, per-cell displacement variance $\alpha_H \ell_P^2$.
- [Holographic Noise](/predictions/holographic-noise) — $\alpha_H \sim 1/4$ as natural target, Holometer bound $\alpha_H \leq 0.24$.
- [Relational Invariants](/derivations/interactions/relational-invariants) — Type III carrier exchanges as framework-level interaction mechanism.
- [Coherence Conservation](/derivations/axioms/coherence-conservation) — subadditivity of noise composition.
- [Standard Model Group](/derivations/gauge/standard-model-group) — direct-product structure $U(1) \times SU(2) \times SU(3)$ ensuring channel independence.

**Standard QEC literature.**
- Dennis, E., Kitaev, A., Landahl, A., Preskill, J. (2002). *Topological quantum memory.* J. Math. Phys. 43:4452–4505. — Logical error rate $P_L \sim (p/p_{th})^{d/2}$ under independent Pauli noise.
- Pastawski, F., Yoshida, B., Harlow, D., Preskill, J. (2015). *Holographic quantum error-correcting codes.* JHEP 06:149. — HaPPY threshold estimates.

**Research-program context.** The noise machinery and axis-selective coupling modulation of this derivation consolidate the content of Steps 3–4 of the Observer-Projection-as-Error-Correction research program (see `research-targets/observer-projection-as-error-correction.md` in the repository for the step-by-step exploration and the historical record of modeling choices attempted, including the initial $\alpha_H$-as-bit-flip-probability misreading that motivated the Gaussian-tail translation).
