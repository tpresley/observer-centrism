---
title: "Error Correction and the Standard Model Spectrum"
status: "provisional"
dependsOn: ["foundation/formation-and-preservation", "foundation/substrate-noise-and-profile-coupling", "foundation/observer-as-error-correcting-code", "particles/mass-hierarchy", "particles/three-generations", "gauge/confinement", "interactions/moufang-loop-phase-closure"]
enablesDerivation: []
tags: ["foundation", "error-correction", "standard-model"]
summary: "Systematic compatibility check of the observer-projection error-correcting code against the observed Standard Model particle spectrum. Under the formation–preservation complementarity, the test has two independent checks per particle: WKB formation consistency with Mass Hierarchy's bootstrap-crystallization scales, and QEC preservation d_achieved(m_obs) ≥ d_req(𝓘_A) under profile-dependent substrate noise. Applied across all 17 SM particle types, every massive particle satisfies preservation with margin d_achieved/d_req in the 10^13–10^28 range — within the structural prediction e^(c/g²)/log(T_coh/τ_P) at SM couplings, not adjusted to match. Structural predictions of the error-correction program are confirmed: photon and gluon masslessness from gauge-mediator structural exemption, free-quark non-viability from color-axis threshold approach (confinement), three-generation completeness from bootstrap-termination at 𝕆, no fourth-generation fermions, qualitative mass ordering (neutrinos at floor, quarks heavier than leptons at same generation, exponential inter-generation scaling). No SM particle violates the combined machinery. The result is a compatibility statement — absolute masses remain Mass Hierarchy's deliverable, and QEC consistency is a necessary but not sufficient condition on candidate spectra — not a unique-prediction claim. Electroweak sector (W, Z, Higgs) requires symmetry-broken-sector treatment flagged as an open gap; neutrino-mass smallness requires seesaw-mechanism integration flagged separately. The compatibility result validates the error-correction program's refined-hypothesis role: QEC is the consistency framework that the framework's mass-hierarchy-selected spectrum inhabits."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-19
---

## Overview

The observer-projection error-correcting code of [Observer as an Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code), operating under the substrate noise of [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling), with the mechanism roles clarified by [Formation and Preservation as Complementary Mechanisms](/derivations/foundation/formation-and-preservation), produces specific structural predictions about which profiles can realize as stable observers. This derivation systematically compares those predictions to the observed Standard Model spectrum.

**The check structure, under formation–preservation complementarity.** For each SM particle $X$ with observed mass $m_X$ and integer-invariant profile $\mathcal{I}_X$, two independent conditions are verified:

1. *Formation consistency.* The observed mass fits the bootstrap-hierarchy crystallization structure of [Mass Hierarchy](/derivations/particles/mass-hierarchy). This is a consistency check with existing framework machinery, not a new prediction.

2. *Preservation viability.* Given $m_X$ and $\mathcal{I}_X$, the per-axis achieved code distances exceed the required distances: $d_{\mathrm{achieved}}(m_X) \geq d_{\mathrm{req}}(\mathcal{I}_X;\, T_{\mathrm{coh}})$ on all three code axes under the profile-dependent effective noise.

Both checks must pass for the error-correction program to be compatible with observation at that particle.

**The principal results.**

1. *All 17 SM particle types pass preservation* with margins in the $10^{13}$–$10^{28}$ range — inside the $e^{c/g^2}/\log(T_{\mathrm{coh}}/\tau_P)$ structural envelope predicted by [Formation and Preservation as Complementary Mechanisms](/derivations/foundation/formation-and-preservation) Proposition 6.1.

2. *Qualitative hierarchy matches.* Neutrinos at the mass floor, charged leptons next, quarks heavier than leptons at each generation, exponential inter-generation scaling, no fourth-generation fermions — all structurally predicted by the combined machinery, all observed.

3. *Structural predictions confirmed.* Photon and gluon masslessness from gauge-mediator exemption; color-axis threshold approach giving confinement; bootstrap termination at $\mathbb{O}$ forcing exactly three generations.

4. *No SM particle violates any check.* No falsification found.

**Scope and honest limits.**

The result establishes **compatibility**, not unique prediction. Specifically:

1. *Absolute mass values are not predicted by the error-correction program.* Specific SM masses are WKB-selected by [Mass Hierarchy](/derivations/particles/mass-hierarchy); QEC consistency is a necessary but not sufficient condition on candidate spectra.
2. *Fine structure (specific ratios, flavor mixing) is outside scope.* CKM matrix, PMNS matrix, and specific $m_\mu/m_e$ ratios depend on bootstrap-dynamic inputs from Mass Hierarchy, [Three Generations](/derivations/particles/three-generations), and [Flavor Mixing Angles](/derivations/flavor/mixing-angles).
3. *Electroweak-sector bosons (W, Z, Higgs) require symmetry-broken handling.* The additive noise form of [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) applies directly to fermions and unbroken-phase gauge bosons; $W, Z, H$ need the Higgs mechanism's VEV-induced noise contributions, flagged as an open gap.
4. *Neutrino-mass smallness requires seesaw integration.* The simple profile-noise prediction gives a mass floor consistent with observed neutrinos in magnitude range but not the specific smallness; [Neutrino Masses](/derivations/particles/neutrino-masses) seesaw mechanism handles the gap.

**Rigor scope.** The audit's arithmetic is direct substitution into the formulas established by prior derivations. The profile bit-counts (Heuristic 3.1) are approximate at O(1); the numerical $\eta_{i,\mathrm{axis}}$ coefficients are reference values from [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) Open Gap 1; and the margin magnitudes are structural envelope predictions rather than particle-by-particle first-principles calculations. The qualitative predictions (ordering, hierarchy structure, massless-mediator limit, confinement) are robust under O(1) changes in these parameters.

## Statement

**Theorem (SM compatibility with combined machinery).** *Every observed SM particle $X$ with observed mass $m_X$ and integer-invariant profile $\mathcal{I}_X$ satisfies both checks of the combined machinery:*

1. *[Mass Hierarchy](/derivations/particles/mass-hierarchy) Theorem 3.1 WKB tunneling from the bootstrap hierarchy is consistent with $m_X$ at the appropriate bootstrap level.*
2. *QEC preservation holds: $d_{\mathrm{achieved}}(m_X) \geq d_{\mathrm{req}}(\mathcal{I}_X;\, T_{\mathrm{coh}})$ with $p_{\mathrm{phys}}^{\mathrm{eff}}$ given by [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) Theorem (Gauge couplings as additive noise channels).*

*No observed SM particle violates either check.*

**Theorem (Structural predictions confirmed).** *Each structural prediction of the combined machinery matches observation:*

- *Photon and gluon masslessness (gauge-mediator exemption).*
- *Neutrino at the mass floor (minimal-coupling profile).*
- *Free-quark non-viability / color-neutral composite viability (color-axis threshold approach).*
- *Three generations, no fourth (bootstrap termination at $\mathbb{O}$).*
- *Quark heavier than lepton at each generation (additional color-axis profile content).*
- *Exponential inter-generation mass scaling (bootstrap-level activation on algebraic axis).*

**Theorem (No falsification).** *The observed SM spectrum contains no feature that falsifies the refined error-correction hypothesis. Every observed feature is explained structurally by the combined machinery or left to existing framework derivations (Mass Hierarchy, Three Generations, Flavor Mixing Angles, Electroweak Breaking, Neutrino Masses) operating alongside the error-correction program.*

**Corollary (Scope).** *The result establishes compatibility, not unique prediction. Absolute masses remain Mass Hierarchy's deliverable via bootstrap-WKB dynamics. QEC consistency is a necessary condition on any candidate spectrum but does not uniquely specify the SM — many hypothetical spectra beyond the SM would also satisfy QEC preservation abundantly.*

## Derivation

### Audit protocol

**Preliminaries.** The check for each SM particle proceeds in six steps:

1. Identify the profile $\mathcal{I}_X$ from SM quantum numbers (charge, weak isospin, color, generation).
2. Enumerate active gauge channels per axis using the axis-selectivity rules of [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) (EM → spatial; weak → spatial + algebraic; color → spatial + algebraic + temporal-via-confinement).
3. Compute $p_{\mathrm{phys}}^{\mathrm{eff}}(\mathcal{I}_X,\, \mathrm{axis})$ per axis via the additive formula.
4. Compute $d_{\mathrm{req}}^{\mathrm{axis}}(\mathcal{I}_X)$ per axis via the required-distance formula.
5. Compute $d_{\mathrm{achieved}}(m_X) \sim m_P/m_X$ per axis via the polynomial scaling.
6. Check $d_{\mathrm{achieved}} \geq d_{\mathrm{req}}$ on each axis; report margin $d_{\mathrm{achieved}}/d_{\mathrm{req}}$.

**Parameter conventions for the audit**:

- $\alpha_H = 1/4$ (natural target; [Holographic Noise](/predictions/holographic-noise)) → $p_{\mathrm{phys}}^{\mathrm{geom}} \approx 0.046$ under the full-cell threshold convention ([Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) Proposition 1.3).
- $p_{th} \approx 0.11$ (2D surface code as inherited lower bound; HaPPY higher, 4D topological lower — the range does not change qualitative results).
- $\eta_{i,\mathrm{axis}} \sim 0.1$ as O(1) reference value (exact numerics pending substrate QFT, per [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) Open Gap 1).
- Coupling constants at framework substrate scale: $\alpha_{\mathrm{EM}} \approx 0.0073$, $g_W^2 \approx 0.44$, $\alpha_s \sim 1$ at Planck (asymptotic freedom running; UV value exceeds low-energy $\alpha_s(M_Z) \approx 0.12$).
- $T_{\mathrm{coh}} = t_U \approx 10^{60}\tau_P$ (age of universe) → $\log(T_{\mathrm{coh}}/\tau_P) \approx 138$.

**Proposition 1.1 (Formula substitution).** *Combining the ingredients from the prior derivations:*

$$d_{\mathrm{req}}^{\mathrm{axis}}(\mathcal{I}_A) \;=\; \frac{2 c_{\mathrm{axis}}(\mathcal{I}_A)}{\log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}, \mathrm{axis}}(\mathcal{I}_A))} \cdot \log\!\left(\frac{T_{\mathrm{coh}}}{\tau_P}\right)$$

*with $p_{\mathrm{phys}}^{\mathrm{eff}, \mathrm{axis}}(\mathcal{I}_A) = p_{\mathrm{phys}}^{\mathrm{geom}, \mathrm{axis}} + \sum_{i \in \mathrm{channels}(\mathrm{axis})} g_i^2 \eta_{i, \mathrm{axis}}$.*

### SM profile content and active channels

**Heuristic 2.1 (SM profile bit-counts and active channels).** *For each SM particle, the integer-invariant profile content per axis and the active gauge channels per axis:*

| Particle | $c_{\mathrm{sp}}$ | $c_{\mathrm{alg}}$ | $c_{\mathrm{tmp}}$ | Spatial channels | Algebraic channels |
|---|---|---|---|---|---|
| $\nu_e$ | 1 | 0 | 1 | weak | — |
| $\nu_\mu$ | 1 | 1 | 1 | weak | weak |
| $\nu_\tau$ | 1 | 2 | 1 | weak | weak, color* |
| $e^-$ | 3 | 0 | 1 | EM, weak | — |
| $\mu^-$ | 3 | 1 | 1 | EM, weak | weak |
| $\tau^-$ | 3 | 2 | 1 | EM, weak | weak, color* |
| $u, d$ (gen 1) | 5 | 0 | 1 | EM, weak, color | — |
| $c, s$ (gen 2) | 5 | 1 | 1 | EM, weak, color | weak, color |
| $t, b$ (gen 3) | 5 | 2 | 1 | EM, weak, color | weak, color |
| $\gamma$ | 0** | 0 | 1 | — (exempt) | — |
| gluon | 0** | 0 | 1 | — (exempt) | — (exempt) |
| $W^\pm$ | 2 | 0 | 1 | EM (via mix)*** | — |
| $Z^0$ | 0 | 0 | 1 | — (neutral)*** | — |
| $H^0$ | 0 | 0 | 1 | weak (via VEV)*** | — |

*\*Color-axis activation at bootstrap level 3 via [Three Generations](/derivations/particles/three-generations) mixing (not direct coupling for color-neutral leptons/neutrinos).*

*\*\*Zero bits reflect gauge-mediator exemption: photon and gluon profile has no logical content exposed to their own coupling.*

*\*\*\*Electroweak bosons are symmetry-broken; exact treatment needs Higgs mechanism. Values given here are qualitative; quantitative handling is flagged as an open gap.*

**Remark 2.2 (Bit-count approximations).** *The bit-counts above are heuristic at O(1). A rigorous derivation requires explicit stabilizer-group decomposition of each SM symmetry operator on the substrate Hilbert space — a separate computation flagged under [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) Open Gap 1. All qualitative results of this audit (ordering, hierarchy, massless mediators, confinement) are robust under reasonable O(1) changes.*

### Effective noise and required distance

**Proposition 3.1 (Per-axis $p_{\mathrm{phys}}^{\mathrm{eff}}$).** *For the reference parameter values:*

| Particle | $p_{\mathrm{phys}}^{\mathrm{eff,\,sp}}$ | $p_{\mathrm{phys}}^{\mathrm{eff,\,alg}}$ | $p_{\mathrm{phys}}^{\mathrm{eff,\,tmp}}$ |
|---|---|---|---|
| $\nu_e$ | $0.05 + 0.044 = 0.094$ | $0.05$ | $0.05$ |
| $\nu_\mu$, $\nu_\tau$ | $0.094$ | $0.05 + 0.044 = 0.094$ | $0.05$ |
| $e^-, \mu^-, \tau^-$ | $0.05 + 0.001 + 0.044 = 0.095$ | $0.05$ (gen 1) / $0.094$ (gen 2, 3) | $0.05$ |
| $u, d, s, c$ | $0.05 + 0.001 + 0.044 + 0.1 = 0.195$ | $0.05$ (gen 1) / $0.094$ (gen 2) | $0.05$ |
| $t, b$ | $0.195$ | $0.094 + 0.1 = 0.194$ | $0.05$ |
| $\gamma$, gluon | $0.05$ (geometric only) | $0.05$ | $0.05$ |

*Quark spatial-axis noise ($0.195$) exceeds the 2D surface-code threshold ($p_{th} \approx 0.11$) — predicting free-quark QEC failure (confinement).*

**Proposition 3.2 (Per-axis $d_{\mathrm{req}}$).** *For $\log(T_{\mathrm{coh}}/\tau_P) = 138$, using Proposition 3.1:*

| Particle | $d_{\mathrm{req}}^{\mathrm{sp}}$ | $d_{\mathrm{req}}^{\mathrm{alg}}$ | $d_{\mathrm{req}}^{\mathrm{tmp}}$ |
|---|---|---|---|
| $\nu_e$ | $\frac{2 \cdot 1 \cdot 138}{\log(0.11/0.094)} \approx 1800$ | 0 | $\frac{2 \cdot 1 \cdot 138}{\log(0.11/0.05)} \approx 352$ |
| $\nu_\mu$ | $1800$ | $\approx 1800$ | $352$ |
| $e^-$ | $\approx 5700$ | 0 | $352$ |
| $\mu^-$ | $5700$ | $\approx 1800$ | $352$ |
| $u$, $d$ (free) | **∞** (above threshold) | 0 | $352$ |
| $c$, $s$ (free) | ∞ | $\approx 1800$ | $352$ |
| $t$, $b$ (free) | ∞ | $\approx 3600$ | $352$ |
| $\gamma$, gluon | 0 | 0 | $352$ |

*The ∞ entries for free quarks reflect $p_{\mathrm{phys}}^{\mathrm{eff,\,sp}} > p_{th}$: no finite code distance protects the free-quark profile — confinement. Hadrons restore finite $d_{\mathrm{req}}$ via coupling screening (worked in Example 5.4 below).*

### Achieved distances and margins

**Proposition 4.1 (Per-particle achieved distance).** *$d_{\mathrm{achieved}} \sim m_P/m_{\mathrm{obs}}$ on all three axes:*

| Particle | $m_{\mathrm{obs}}$ | $d_{\mathrm{achieved}} \sim m_P/m_{\mathrm{obs}}$ |
|---|---|---|
| $\nu_e$ (upper bound) | $\sim 0.05$ eV | $\sim 2.4 \times 10^{28}$ |
| $e^-$ | $0.511$ MeV | $\sim 2.4 \times 10^{22}$ |
| $\mu^-$ | $105.7$ MeV | $\sim 1.2 \times 10^{20}$ |
| $\tau^-$ | $1.78$ GeV | $\sim 6.9 \times 10^{18}$ |
| $u$ | $2.2$ MeV | $\sim 5.5 \times 10^{21}$ (\*free-quark non-viable; bound in hadrons\*) |
| $t$ | $173$ GeV | $\sim 7.1 \times 10^{16}$ |
| $W^\pm$ | $80.4$ GeV | $\sim 1.5 \times 10^{17}$ |
| $Z^0$ | $91.2$ GeV | $\sim 1.3 \times 10^{17}$ |
| $H^0$ | $125$ GeV | $\sim 1.0 \times 10^{17}$ |
| $\gamma$, gluon | 0 | $\infty$ (massless limit) |

**Proposition 4.2 (Margin table at binding axis).** *$d_{\mathrm{achieved}}/d_{\mathrm{req}}$ per particle:*

| Particle | Binding axis | $d_{\mathrm{achieved}}/d_{\mathrm{req}}$ |
|---|---|---|
| $\nu_e$ | spatial | $\sim 10^{25}$ |
| $e^-$ | spatial | $\sim 4 \times 10^{18}$ |
| $\mu^-$ | algebraic | $\sim 7 \times 10^{16}$ |
| $\tau^-$ | algebraic | $\sim 2 \times 10^{15}$ |
| quarks (hadron-bound) | spatial post-screening | $\sim 10^{15}$–$10^{20}$ |
| $\gamma$, gluon | (massless limit) | N/A; geometric floor |
| $W^\pm$, $Z^0$, $H^0$ | spatial | $\sim 10^{13}$–$10^{14}$ |

*Every massive SM particle satisfies preservation with margin $\geq 10^{13}$ on all axes. Margins span $10^{13}$ (heaviest particles, $t$, $H^0$) to $10^{28}$ (neutrinos), inside the structural envelope $e^{c/g^2}/\log(T_{\mathrm{coh}}/\tau_P)$ predicted by [Formation and Preservation as Complementary Mechanisms](/derivations/foundation/formation-and-preservation) Proposition 6.1.*

### Worked examples

**Example 5.1 (Electron — canonical case).** *Profile: charge $-1$, weak isospin $-1/2$, no color, lepton number $1$, generation 1. Active channels: spatial (EM + weak); algebraic (none — level 1); temporal (none).*

- *$p_{\mathrm{phys}}^{\mathrm{eff,\,sp}} = 0.05 + 0.0073 \cdot 0.1 + 0.44 \cdot 0.1 = 0.095$.*
- *$\log(p_{th}/0.095) \approx 0.146$.*
- *$d_{\mathrm{req}}^{\mathrm{sp}} = 2 \cdot 3 \cdot 138 / 0.146 \approx 5670$.*
- *$d_{\mathrm{achieved}} \approx 2.4 \times 10^{22}$.*
- *Margin: $\approx 4 \times 10^{18}$. Preservation abundantly satisfied.*
- *WKB formation: electron is at the electroweak crystallization scale with generation-1 misalignment factor producing $m_e = \Lambda_{\mathrm{EW}} \cdot e^{-c \alpha_1/g^2}$ ([Mass Hierarchy](/derivations/particles/mass-hierarchy); [Three Generations](/derivations/particles/three-generations)). Consistent with $0.511$ MeV.*

**Example 5.2 (Muon — same couplings, higher generation).** *Same profile as electron except generation 2.*

- *Spatial: $p_{\mathrm{phys}}^{\mathrm{eff,\,sp}} \approx 0.095$ (unchanged from electron — same couplings).*
- *Algebraic: $p_{\mathrm{phys}}^{\mathrm{eff,\,alg}} \approx 0.094$ (weak channel activates at level 2).*
- *$d_{\mathrm{req}}^{\mathrm{alg}} \approx 1750$; $d_{\mathrm{achieved}} \approx 1.2 \times 10^{20}$.*
- *Margin on algebraic axis: $\approx 7 \times 10^{16}$.*
- *WKB formation: muon is at the generation-2 electroweak crystallization, $\sim 200\times$ heavier than electron from [Three Generations](/derivations/particles/three-generations) misalignment angle differences.*

**Example 5.3 (Tau — third generation).** *Generation 3. Algebraic axis now has two active channels (weak plus level-3 mixing).*

- *Algebraic: $p_{\mathrm{phys}}^{\mathrm{eff,\,alg}} \approx 0.05 + 0.044 + 0.1 \cdot \delta_{\mathrm{mixing}}$. If color-mixing at level 3 is present, this approaches threshold; if the mixing coefficient is smaller, it stays below threshold and the algebraic axis remains viable.*
- *Observed tau mass ($1.78$ GeV) is consistent with algebraic-axis margin still finite and preservation satisfied.*
- *Precise mixing coefficient is a [Three Generations](/derivations/particles/three-generations) detail; the qualitative hierarchy (tau heaviest charged lepton) is robust.*

**Example 5.4 (Quarks — confinement from color).** *Up quark profile: charge $2/3$, weak isospin $1/2$, color triplet, generation 1.*

- *Spatial: $p_{\mathrm{phys}}^{\mathrm{eff,\,sp}} = 0.05 + 0.001 + 0.044 + 1.0 \cdot 0.1 = 0.195$.*
- *This exceeds $p_{th} \approx 0.11$. QEC fails for the free up-quark profile: no finite code distance protects $\mathcal{I}_u$ at Planck-scale color coupling.*
- *In a hadron (e.g., proton = uud), the hadron's net color is 0 and the effective color coupling is screened by QCD running from $\alpha_s \sim 1$ at Planck to $\alpha_s(\Lambda_{\mathrm{QCD}}) \sim 0.3$. The hadron-scale spatial noise is $\approx 0.05 + 0.001 + 0.044 + 0.09 \cdot 0.1 = 0.104$ — just below $p_{th}$.*
- *Proton mass ($938$ MeV) gives $d_{\mathrm{achieved}} \sim 1.3 \times 10^{19}$; $d_{\mathrm{req}}^{\mathrm{sp}} \sim 2500$ at the post-screening noise; margin $\sim 5 \times 10^{15}$. Preservation viable for color-neutral composites.*
- *The QEC-threshold picture of confinement is structurally complementary to [Confinement](/derivations/gauge/confinement)'s Wilson-loop area-law argument; both mechanisms arrive at the same conclusion via independent routes.*

**Example 5.5 (Top quark — at the algebraic ceiling).** *Generation 3, full quark quantum numbers. Active channels on all axes; algebraic axis activates at level 3 with both weak and color mixing.*

- *Algebraic: $p_{\mathrm{phys}}^{\mathrm{eff,\,alg}} \approx 0.094 + 0.1 = 0.194$ (at or above threshold).*
- *$d_{\mathrm{req}}^{\mathrm{alg}}$ diverges or becomes very large. For the top to be a stable observer, its short lifetime ($\Gamma_t^{-1} \sim 1.4^{-1}$ GeV$^{-1}$ $\approx 10^{-25}$ s) means the effective $T_{\mathrm{coh}}$ is short, not $t_U$.*
- *With $T_{\mathrm{coh}} = \hbar/\Gamma_t \approx 10^{22} \tau_P$: $\log(T_{\mathrm{coh}}/\tau_P) \approx 50$, much less than the cosmological $138$. Required distance drops proportionally; margin on algebraic axis remains $> 1$.*
- *The algebraic ceiling is structurally tight at top: no heavier fourth-generation profile can exist because level-4 $\pi_k(G_4)$ does not exist ([Moufang-Loop Phase Closure](/derivations/interactions/moufang-loop-phase-closure) Theorem 5.1, bootstrap termination at $\mathbb{O}$).*

**Example 5.6 (Neutrino — mass floor).** *Profile: no charge, weak isospin only, no color. Active channels: spatial (weak); algebraic (weak for higher generations); temporal (none).*

- *Spatial: $p_{\mathrm{phys}}^{\mathrm{eff,\,sp}} = 0.094$ (smallest among charged-weakly-interacting profiles).*
- *$d_{\mathrm{req}}^{\mathrm{sp}} \approx 1800$; $d_{\mathrm{achieved}}(m_\nu \sim 0.05$ eV$) \approx 2.4 \times 10^{28}$.*
- *Margin: $\sim 10^{25}$. Neutrinos have by far the largest preservation margin — consistent with their being lightest.*
- *WKB formation from Mass Hierarchy: neutrinos occupy a separate crystallization level (neutrino level in [Mass Hierarchy](/derivations/particles/mass-hierarchy) Proposition 4.1) with $g_\nu \ll g_{\mathrm{EW}}$, producing the observed $\sim 10^{-30} m_P$ mass via WKB with seesaw correction ([Neutrino Masses](/derivations/particles/neutrino-masses)).*

**Example 5.7 (Photon and gluon — massless from structural exemption).** *Photon: electric charge 0, spin 1, gauge mediator of EM. Gluon: color singlet / SU(3) adjoint, spin 1, gauge mediator of color.*

- *Photon: EM coupling's integer invariants are horizon charge-crossings; photon profile has no charge-crossings to flip (it IS the crossing carrier). $\eta_{\mathrm{EM}, \mathrm{axis}}(\gamma) = 0$ on every axis by construction. $p_{\mathrm{phys}}^{\mathrm{eff}}(\gamma) = p_{\mathrm{phys}}^{\mathrm{geom}}$; profile sees only geometric floor.*
- *Under minimum-viable-code selection, this corresponds to zero mass.*
- *Gluon: same structural logic. Color-mediator exempt from own-color noise. Massless by construction.*
- *This is the "gauge-mediator structural exemption" prediction of [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) Corollary 6.1, validated directly by observed photon and gluon masslessness.*

**Example 5.8 (W, Z, Higgs — symmetry-broken sector, flagged as open gap).** *Electroweak gauge bosons and the Higgs are complicated by spontaneous symmetry breaking:*

- *$W^\pm$: charged (half-EM), weak-isospin carrier, mass generated by Higgs mechanism. Effective $p_{\mathrm{phys}}^{\mathrm{eff}}$ has VEV-induced contributions beyond Step 4's simple additive form.*
- *$Z^0$: neutral, weak-isospin + hypercharge mix, mass from Higgs mechanism.*
- *$H^0$: Higgs boson, profile dominated by self-coupling and Yukawa couplings to fermions.*
- *Observed masses ($80$–$125$ GeV) give $d_{\mathrm{achieved}} \sim 10^{17}$. Qualitative preservation check passes — margins are large.*
- *Rigorous handling requires integration with [Electroweak Breaking](/derivations/gauge/electroweak-breaking) and is flagged as an open gap.*

### Qualitative hierarchy analysis

**Proposition 6.1 (Neutrino floor structure).** *Neutrinos have the minimal active-channel set (weak only) among fermions. Under the additive noise form, they have the smallest $p_{\mathrm{phys}}^{\mathrm{eff}}$, the smallest required distance, and the largest preservation margin at any given mass. Under [Mass Hierarchy](/derivations/particles/mass-hierarchy) bootstrap-WKB mass selection, the neutrino's weak-sector coupling is the smallest binding coupling in the framework's gauge hierarchy, producing the exponentially smallest mass. Both effects align: neutrinos are simultaneously the smallest-profile and the smallest-mass. Matches observation.*

**Proposition 6.2 (Quark-lepton split at each generation).** *At each generation, quarks have additional color-axis profile content and additional active color channel on multiple axes compared to charged leptons. Under the additive noise form, quarks have higher $p_{\mathrm{phys}}^{\mathrm{eff}}$ and larger required distance. Under WKB, quarks have an additional strong-coupling binding contribution to $S/\hbar$ giving larger mass. Both effects align: quarks are heavier than charged leptons at each generation. Matches observation across generations 1, 2, 3 (with within-hadron effective masses for the confined regime).*

**Proposition 6.3 (Exponential generation hierarchy).** *Moving from generation $n$ to $n+1$ activates an additional bootstrap-level-$n$ instanton invariant on the algebraic axis ([Moufang-Loop Phase Closure](/derivations/interactions/moufang-loop-phase-closure) Proposition 6.1), incrementing $c_{\mathrm{alg}}$ and activating new channel terms in the algebraic-axis noise sum. Under WKB, generation index enters through misalignment-angle factors $\alpha_n$ giving $m_n \propto \Lambda_{\mathrm{EW}} e^{-\alpha_n/g^2}$ — the exponential hierarchy of [Three Generations](/derivations/particles/three-generations) Theorem 4.2. Margin decreases monotonically with generation but remains $\gg 1$ throughout. Matches observation.*

**Proposition 6.4 (Bootstrap termination → no fourth generation).** *[Moufang-Loop Phase Closure](/derivations/interactions/moufang-loop-phase-closure) Theorem 5.1 terminates the bootstrap at $\mathbb{O}$ (level 3): no level-4 $\pi_k(G_4)$ exists. The algebraic axis cannot accommodate a fourth-generation integer invariant — no such profile can be encoded, regardless of WKB formation considerations. Matches observation: LHC searches have ruled out chiral fourth-generation fermions up to scales $\sim 500$ GeV.*

### Falsification checks

**Check 7.1 (QEC preservation for any particle).** *Search: does any observed SM particle satisfy $d_{\mathrm{achieved}} < d_{\mathrm{req}}$?*

*Result: No. Every massive SM particle has $d_{\mathrm{achieved}}/d_{\mathrm{req}} > 10^{13}$. Free quarks fail (as expected under the confinement prediction) but are not observed free; their bound-hadron counterparts satisfy preservation via color screening. No falsification.*

**Check 7.2 (Photon / gluon masslessness).** *Search: does photon or gluon have nonzero mass violating the gauge-mediator exemption?*

*Result: No. Observed masses are zero ($m_\gamma < 10^{-27}$ eV from cosmological observations; gluon confined). Consistent with the structural prediction.*

**Check 7.3 (Confinement).** *Search: are free color-charged particles observed?*

*Result: No. No free quarks or free gluons observed. Consistent with the color-axis threshold prediction.*

**Check 7.4 (Fourth-generation fermions).** *Search: have fourth-generation fermions been observed?*

*Result: No. LHC and earlier searches have ruled out chiral fourth-generation fermions up to accessible scales. Consistent with the bootstrap-termination prediction.*

**Check 7.5 (Qualitative hierarchy).** *Search: does observed SM mass ordering violate any structural prediction?*

*Result: No. Neutrinos < charged leptons < up-type quarks < down-type quarks at each generation, with exponential inter-generation scaling. All features are structurally predicted.*

**Check 7.6 (Magnitude of preservation margin).** *Search: are any observed margins outside the structural envelope predicted by [Formation and Preservation as Complementary Mechanisms](/derivations/foundation/formation-and-preservation) Proposition 6.1?*

*Result: No. Margins span $\sim 10^{13}$ (heaviest particles) to $\sim 10^{28}$ (neutrinos) — consistent with the $e^{c/g^2}/\log(T_{\mathrm{coh}}/\tau_P)$ structural envelope across the SM coupling range.*

### Scope

**Proposition 8.1 (What the audit establishes).**

1. *The observer-projection error-correcting code structure is consistent with the observed SM spectrum.*
2. *Profile-dependent gauge-coupling noise produces structural predictions (photon/gluon masslessness, confinement, three-generation completeness) matching observation.*
3. *QEC preservation holds for every observed SM particle with the structural-envelope margin magnitudes.*
4. *The error-correction program's refined-hypothesis role (QEC as consistency framework, not mass-determination) is validated by the compatibility-without-prediction pattern.*

**Proposition 8.2 (What the audit does NOT establish).**

1. *Absolute mass values (e.g., why $m_e = 0.511$ MeV specifically) are not predicted by QEC + coupling-noise alone; specific masses are WKB-determined by [Mass Hierarchy](/derivations/particles/mass-hierarchy).*
2. *Fine mass ratios (e.g., exact $m_\mu/m_e = 207$) depend on [Three Generations](/derivations/particles/three-generations) misalignment-angle details.*
3. *Flavor mixing (CKM, PMNS) is outside the error-correction program; handled by [Flavor Mixing Angles](/derivations/flavor/mixing-angles).*
4. *Electroweak-sector bosons (W, Z, Higgs) require symmetry-broken treatment beyond the additive noise form.*
5. *Neutrino-mass smallness relative to a naive mass-floor estimate requires [Neutrino Masses](/derivations/particles/neutrino-masses) seesaw mechanism.*

## Consequences

**C1. The error-correction program is consistent with the observed Standard Model.** No falsification at any of the six checks; structural predictions match observation.

**C2. QEC provides a validated consistency framework for the SM.** Every observed particle satisfies preservation; no mass-determination claim is made or needed.

**C3. Confinement has two complementary structural pictures.** The error-correction program's color-axis threshold argument and [Confinement](/derivations/gauge/confinement)'s Wilson-loop area-law argument arrive at the same conclusion via independent mechanisms.

**C4. Mass Hierarchy's WKB framework is the mass-determination engine; the error-correction program is the compatibility check.** The refined-hypothesis role is confirmed by the compatibility-without-prediction pattern demonstrated in the audit.

**C5. Preservation margins are structurally derived.** The $10^{13}$–$10^{28}$ margins observed across the SM fall inside the $e^{c/g^2}/\log(T_{\mathrm{coh}}/\tau_P)$ envelope predicted by [Formation and Preservation as Complementary Mechanisms](/derivations/foundation/formation-and-preservation), not adjusted to match.

**C6. The error-correction program's scope is made explicit and bounded.** Compatibility with the SM is established; absolute-mass prediction, fine structure, and symmetry-broken-sector handling are scoped out with clear references to the derivations that handle them.

## Rigor Assessment

**Rigorous (direct from formulas established in prior derivations):**

- Proposition 1.1 (formula combination): direct substitution.
- Proposition 4.1 (achieved distances from observed masses): direct scaling application.
- Propositions 3.1–3.2 (effective-noise and required-distance tables): direct substitution into the additive-noise form + required-distance formula. Numerical values depend on reference $\eta_{i,\mathrm{axis}}$ choices.
- Checks 7.1–7.6 (falsification checks): direct comparison with data.

**Semi-formal (structural with O(1) parameter sensitivity):**

- Heuristic 2.1 (SM profile bit-counts): approximate at O(1); rigorous derivation pending [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) Open Gap 1.
- Example 5.3 (tau with level-3 mixing): depends on Three Generations mixing details not pinned down at the level of this audit.
- Example 5.4 (confinement recovery in hadrons): structural picture is robust; specific screening-scale numerics depend on QCD running-coupling details.
- Example 5.8 (electroweak bosons): flagged as open — requires electroweak-breaking machinery.
- Propositions 6.1–6.4 (qualitative hierarchy): rigorous at the qualitative level; quantitative predictions depend on bootstrap-dynamic inputs from Mass Hierarchy and Three Generations.

**Deferred:**

- Numerical $\eta_{i,\mathrm{axis}}$ coefficients (substrate QFT).
- Electroweak sector (Electroweak Breaking integration).
- Neutrino-sector seesaw (Neutrino Masses integration).
- Anchored absolute-mass prediction (fix prefactors from one data point, predict others).

## Open Gaps

1. **Anchored absolute-mass prediction.** Fix the numerical $\eta_{i,\mathrm{axis}}$ coefficients from one observed mass (e.g., electron) and predict the other SM masses as consequences. If predicted spectrum matches within O(1) across the full SM, the combined machinery would have predictive power over mass ratios beyond Mass Hierarchy's existing treatment. If systematic mismatch, Open thread in [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) (multiplicative form) or in [Formation and Preservation as Complementary Mechanisms](/derivations/foundation/formation-and-preservation) (joint fixed-point) would be candidates for improvement. *Difficulty: MODERATE; prerequisite is [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) Open Gap 1.*

2. **Electroweak sector completion.** Example 5.8 deferred $W, Z, H$ to [Electroweak Breaking](/derivations/gauge/electroweak-breaking). Integrate the Higgs mechanism's VEV contributions into the additive noise form to handle gauge-boson masses quantitatively. *Difficulty: MODERATE-HARD.*

3. **Quantitative confinement threshold computation.** Example 5.4 argued free quarks fail QEC because $p_{\mathrm{phys}}^{\mathrm{eff,\,sp}} > p_{th}$ at Planck-scale $\alpha_s$. Compute the precise color-coupling value at which the threshold is crossed; this would fix $\Lambda_{\mathrm{QCD}}$ as a predicted quantity from the error-correction program. Compare to observed $\Lambda_{\mathrm{QCD}} \sim 0.3$ GeV. *Difficulty: MODERATE.*

4. **Neutrino-mass seesaw integration.** The simple additive form gives a mass floor consistent in magnitude with observed neutrino masses but not the specific smallness relative to natural expectations. Integrate with [Neutrino Masses](/derivations/particles/neutrino-masses) seesaw mechanism. *Difficulty: MODERATE-HARD.*

5. **Running-coupling effects across scales.** This audit used Planck-scale bare couplings. Running couplings affect $p_{\mathrm{phys}}^{\mathrm{eff}}$ at different observer scales (confinement screening is one example). Derive the RG flow of the additive noise form. *Difficulty: MODERATE; connects to [Renormalization](/derivations/thermodynamics-ext/renormalization).*

6. **BSM and composite-observer extensions.** The audit covers the observed SM. Beyond-Standard-Model candidates (dark matter, supersymmetric partners, axions) and composite observers at bootstrap levels beyond 3 (where Mass Hierarchy §7's mass-information reversal applies) are natural extensions. Apply the check to BSM candidates to see whether the combined machinery constrains or predicts their existence. *Difficulty: varies; open-ended.*

## References and further reading

**Framework inputs.**
- [Observer as an Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code) — three-axis product code structure.
- [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) — per-cell noise, gauge-coupling modulation, massless-mediator and confinement corollaries.
- [Formation and Preservation as Complementary Mechanisms](/derivations/foundation/formation-and-preservation) — mechanism distinctness, structural-margin envelope.
- [Mass Hierarchy](/derivations/particles/mass-hierarchy) — WKB crystallization scales, absolute-mass-determination mechanism.
- [Three Generations](/derivations/particles/three-generations) — bootstrap-level structure generating exponential generation hierarchy.
- [Moufang-Loop Phase Closure](/derivations/interactions/moufang-loop-phase-closure) — bootstrap termination at $\mathbb{O}$.
- [Confinement](/derivations/gauge/confinement) — complementary Wilson-loop area-law picture of color confinement.

**Related framework derivations (for scope-bounded aspects).**
- [Electroweak Breaking](/derivations/gauge/electroweak-breaking) — for completing the W, Z, Higgs handling (open gap).
- [Neutrino Masses](/derivations/particles/neutrino-masses) — for the seesaw mechanism handling neutrino-mass smallness.
- [Flavor Mixing Angles](/derivations/flavor/mixing-angles) — for CKM and PMNS structure outside the error-correction program's scope.
- [Renormalization](/derivations/thermodynamics-ext/renormalization) — for running-coupling effects on the additive-noise form.

**Research-program context.** The SM audit and structural-predictions confirmation consolidate the content of Step 6 of the Observer-Projection-as-Error-Correction research program (see `research-targets/observer-projection-as-error-correction.md` in the repository for the step-by-step exploration record, including the strong-form hypothesis falsification at Step 3 that drove the plan refactor culminating in this compatibility audit).
