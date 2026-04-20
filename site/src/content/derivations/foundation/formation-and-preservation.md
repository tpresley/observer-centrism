---
title: "Formation and Preservation as Complementary Mechanisms"
status: "provisional"
dependsOn: ["foundation/substrate-noise-and-profile-coupling", "foundation/observer-as-error-correcting-code", "particles/mass-hierarchy", "foundation/coherence-lagrangian", "axioms/coherence-conservation"]
enablesDerivation: []
tags: ["foundation", "error-correction", "mass-hierarchy"]
summary: "Stable observer existence requires two distinct mechanisms, both necessary and neither reducible to the other. Formation, governed by Mass Hierarchy's WKB tunneling through coherence barriers, selects a specific mass for each profile with exponential suppression e^(-c/g²) in the binding coupling. Preservation, governed by the observer-projection error-correcting code under profile-dependent substrate noise, bounds viable mass from below via the condition d_achieved(m) ≥ d_req(𝓘_A) with d_achieved scaling as m_P/m and d_req scaling logarithmically in coherence lifetime. The two mechanisms have incompatible functional dependencies on gauge coupling: the QEC quantity (d_req/2)·log(p_th/p_phys^eff), which is the natural candidate for direct identification with the WKB action S/ℏ, simplifies algebraically to c_logic·log(T_coh/τ_P) — coupling-independent after cancellation — while WKB retains its 1/g² dependence. No linear or monomial identification matches the two across the SM coupling range; the mechanisms are genuinely complementary, not two descriptions of one mechanism. The large preservation margins observed across the SM spectrum (ratio d_achieved/d_req in the 10^15–10^25 range) are the structural consequence of exponential formation competing with logarithmic preservation at SM couplings — a derived quantity rather than arbitrary, and the most visible signature that the two mechanisms operate independently. Three framework-native unification candidates remain open: joint fixed-point selection, Coherence Lagrangian common-saddle derivation, and shared-facts distinguishability layer. None have been formalized; none are required for the complementarity result; each would tighten the combined mechanism story if developed."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-19
---

## Overview

A stable observer requires two distinct dynamical conditions to be satisfied. First, the observer must form: substrate-level fluctuations must tunnel into the code space specified by the observer-projection with high enough probability that the crystallization occurs somewhere in cosmological history. Second, the observer must preserve: once formed, the code's integer-invariant profile must survive substrate noise with high enough probability to persist over observer-relevant timescales. This derivation establishes that these two conditions correspond to two distinct mechanisms in the framework — WKB tunneling from [Mass Hierarchy](/derivations/particles/mass-hierarchy) (formation) and QEC preservation from [Observer as an Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code) under the noise model of [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) (preservation) — and that these two mechanisms are genuinely complementary, not two descriptions of one underlying process.

**The central structural result.** Formation suppression scales exponentially in inverse coupling squared: $P_{\mathrm{form}} \sim e^{-c/g^2}$, with the exponent given by the WKB tunneling action $S/\hbar = c/g^2$. Preservation suppression, parameterized in QEC by the code-distance-times-log-threshold-ratio product $(d_{\mathrm{req}}/2)\log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}})$, simplifies algebraically to $c_{\mathrm{logic}} \log(T_{\mathrm{coh}}/\tau_P)$ — coupling-independent after cancellation by the definition of $d_{\mathrm{req}}$. These two quantities have fundamentally different functional dependencies on gauge coupling: one is $1/g^2$-dependent, the other is $g$-invariant. No linear or monomial identification of the two is possible, and the two mechanisms are therefore distinct.

**What this gives.**

1. *Mass determination sits with Mass Hierarchy.* Specific SM masses are selected by WKB tunneling through coherence barriers; the error-correction program does not, and cannot, derive absolute masses via its own content.

2. *Preservation is the QEC role.* The error-correction program's contribution to the SM-spectrum story is a consistency check on mass-hierarchy-selected masses, not an independent mass predictor. QEC is the compatibility framework; Mass Hierarchy is the mass-determination engine.

3. *The enormous preservation margins observed for SM particles are structurally derived.* The ratio $d_{\mathrm{achieved}}/d_{\mathrm{req}}$ at WKB-selected mass $m_k$ is $\sim e^{c_k/g_k^2}/\log(T_{\mathrm{coh}}/\tau_P)$ — exponential formation over logarithmic preservation gives $10^{15}$–$10^{25}$ margins across the SM spectrum. Not arbitrary; not coincidental; derived.

4. *Mass Hierarchy's structural postulate S1 is not promoted via QEC.* The tunneling–crystallization correspondence remains the framework's specific commitment to how bootstrap crystallization realizes itself geometrically. Its status is unchanged by this derivation.

**Honest scope.** The distinctness result operates at the scaling-argument level, ruling out simple-functional identifications (linear, monomial, and combinations thereof). Richer relationships remain logically available — three framework-native candidates are flagged as open threads (joint fixed-point selection, Coherence Lagrangian common-saddle derivation, shared-facts distinguishability layer). None have been formalized; none are required for the complementarity statement; each would, if developed, tighten the combined mechanism story without altering the principal conclusion that formation and preservation are distinct but jointly necessary.

## Statement

**Theorem (Formation and preservation as the two stability conditions).** *An observer with profile $\mathcal{I}_A$ and candidate mass $m_A$ realizes as a stable particle if and only if two independent conditions hold:*

1. **Formation.** *The WKB tunneling probability from substrate into the observer's code space is sufficient for the crystallization to occur within cosmological history: $P_{\mathrm{form}}(m_A; \mathcal{I}_A) \cdot V_4^{\mathrm{cosmo}}/V_4^{\mathrm{Planck}} \geq 1$.*
2. **Preservation.** *The QEC preservation probability is sufficient for logical content to survive over the observer's coherence lifetime: $d_{\mathrm{achieved}}(m_A) \geq d_{\mathrm{req}}(\mathcal{I}_A;\, T_{\mathrm{coh}})$ on each of the three code axes.*

*Formation bounds $m_A$ from above (too-heavy profiles do not form in cosmic history). Preservation bounds $m_A$ from below (too-light profiles do not meet the distance requirement — though at observed SM masses, this bound is loose by $\sim 10^{19}$). Both conditions are independent and neither implies the other.*

**Theorem (Formation–preservation scaling mismatch).** *The natural QEC candidate for functional identification with the WKB tunneling action — $(d_{\mathrm{req}}/2) \cdot \log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}})$ — simplifies algebraically by the definition of $d_{\mathrm{req}}$ (from [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) Proposition 2.5) to:*

$$\frac{d_{\mathrm{req}}(\mathcal{I}_A)}{2} \cdot \log\!\left(\frac{p_{th}}{p_{\mathrm{phys}}^{\mathrm{eff}}(\mathcal{I}_A)}\right) \;=\; c_{\mathrm{logic}}(\mathcal{I}_A) \cdot \log\!\left(\frac{T_{\mathrm{coh}}}{\tau_P}\right)$$

*— a **coupling-independent** quantity. Compared to WKB's $S/\hbar = c/g^2$, which is strongly coupling-dependent, the two cannot be equal for more than one specific coupling value. No linear or monomial identification $S/\hbar = F(d_{\mathrm{req}},\, \log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}}))$ matches both scalings. Formation and preservation are distinct mechanisms.*

**Theorem (Structural margin ratio).** *At the WKB-selected mass $m_k = m_P \cdot e^{-c_k/g_k^2}$ from [Mass Hierarchy](/derivations/particles/mass-hierarchy) Theorem 3.1, the ratio of achieved to required code distance is:*

$$\frac{d_{\mathrm{achieved}}(m_k)}{d_{\mathrm{req}}(\mathcal{I}_A)} \;\sim\; \frac{m_P/m_k}{c_{\mathrm{logic}}(\mathcal{I}_A) \log(T_{\mathrm{coh}}/\tau_P) / \log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}})} \;\sim\; \frac{e^{c_k/g_k^2}}{c_{\mathrm{logic}} \log(T_{\mathrm{coh}}/\tau_P)}$$

*— an **exponential** in WKB action over a **logarithmic** preservation demand. For SM couplings ($c/g^2 \in [20, 60]$) and cosmological lifetime ($\log(T_{\mathrm{coh}}/\tau_P) \approx 138$): ratio $\sim 10^{9}$–$10^{25}$. The large observed preservation margins are a structural consequence of the mechanism split, not a tuning or coincidence.*

**Corollary (Mass Hierarchy is the mass-determination mechanism; QEC is the consistency framework).** *The error-correction program's content (code structure, substrate noise, preservation) does not determine specific observer masses. Specific masses are WKB-selected by Mass Hierarchy's bootstrap crystallization. The QEC machinery validates compatibility at WKB-selected masses, abundantly.*

**Corollary (Mass Hierarchy structural postulate S1 is unchanged).** *The tunneling–crystallization correspondence of [Mass Hierarchy](/derivations/particles/mass-hierarchy) structural postulate S1 is not promoted to a theorem by the error-correction program. The only path through which QEC could have promoted it — functional identification with the WKB action — is ruled out by the scaling mismatch. S1 remains a structural postulate in Mass Hierarchy's committed form.*

## Derivation

### The two mechanisms

The framework's account of why an observer exists at a specific mass has two parts operating at different scales. One asks: *how does the observer form in the first place?* The other asks: *once formed, does its logical content survive substrate noise?*

**Definition 1.1 (Formation).** *The **formation probability** $P_{\mathrm{form}}(m_A; \mathcal{I}_A)$ is the probability per unit cosmological 4-volume that substrate fluctuations crystallize into a stable observer with profile $\mathcal{I}_A$ at mass scale $m_A$. Under [Mass Hierarchy](/derivations/particles/mass-hierarchy) structural postulate S1 (tunneling–crystallization correspondence), this is the WKB tunneling probability through a coherence barrier:*

$$P_{\mathrm{form}}(m_A; \mathcal{I}_A) \;\sim\; e^{-S(\mathcal{I}_A)/\hbar}$$

*with $S(\mathcal{I}_A)/\hbar = c/g^2$ depending on the profile's binding-coupling at its crystallization level ([Mass Hierarchy](/derivations/particles/mass-hierarchy) Theorem 3.1).*

**Definition 1.2 (Preservation).** *The **preservation probability** $P_{\mathrm{preserve}}(m_A; \mathcal{I}_A, T_{\mathrm{coh}})$ is the probability that a formed observer's code-space integer-invariant profile survives substrate noise over lifetime $T_{\mathrm{coh}}$. Under the error-correction machinery, this is parameterized by the per-axis condition $d_{\mathrm{achieved}}(m_A) \geq d_{\mathrm{req}}(\mathcal{I}_A; T_{\mathrm{coh}})$, with:*

- *Logical error per cycle: $P_L \sim (p_{\mathrm{phys}}^{\mathrm{eff}}/p_{th})^{d/2}$ (standard QEC).*
- *Composite logical error over lifetime: $P_L \cdot T_{\mathrm{coh}}/\tau_P < 1$ for preservation.*

*Solving for the required distance gives $d_{\mathrm{req}} = 2 c_{\mathrm{logic}} \log(T_{\mathrm{coh}}/\tau_P)/\log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}})$ ([Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) Proposition 2.5). Preservation holds when $d_{\mathrm{achieved}} \geq d_{\mathrm{req}}$ on each code axis.*

**Proposition 1.3 (Both conditions required for observer existence).** *For a profile $\mathcal{I}_A$ to correspond to an observed stable particle at mass $m_A$, both formation and preservation must be satisfied:*

- *If formation fails ($P_{\mathrm{form}} \cdot V_{\mathrm{cosmo}} \ll 1$), the profile never crystallizes and does not appear as an observed particle regardless of preservation.*
- *If preservation fails ($d_{\mathrm{achieved}} < d_{\mathrm{req}}$ on any axis), formed instances decohere before persisting and do not appear as stable particles regardless of formation.*

*The two conditions are mutually independent: formation concerns the probability of substrate-to-code-space tunneling (an aspect of dynamics); preservation concerns the stability of code content under noise (an aspect of information protection).*

### Formation: exponential in inverse coupling squared

**Proposition 2.1 (WKB exponential form).** *[Mass Hierarchy](/derivations/particles/mass-hierarchy) Theorem 3.1 establishes that the crystallization scale at bootstrap level $k$ is related to the level-$(k-1)$ scale by:*

$$\Lambda_k \;\sim\; \Lambda_{k-1} \cdot e^{-c_k/g_k^2}$$

*where $g_k$ is the effective coupling at level $k$ and $c_k$ is an O(1) geometric constant. The tunneling action through the coherence barrier is:*

$$\frac{S_k}{\hbar} \;=\; \frac{V \cdot a}{\hbar} \;=\; \frac{c_k}{g_k^2}$$

*with barrier height $V \sim \Lambda_{k-1}/g_k^2$ and width $a \sim 1/\Lambda_{k-1}$.*

**Remark 2.2 (Functional dependence on coupling).** *$S/\hbar = c/g^2$ is strongly coupling-dependent: small changes in $g$ produce exponentially large changes in mass via $m_k \sim \Lambda_{k-1} e^{-c/g^2}$. A modest coupling ratio $g^2 \sim 1/40$ gives $e^{-40} \sim 10^{-17}$, the electroweak-to-Planck ratio. The WKB exponent is what makes the framework's mass hierarchy quantitatively natural (logarithmically natural ratios of exponentials of modest numbers).*

### Preservation: cancellation to coupling-independent form

**Proposition 3.1 (QEC candidate simplifies algebraically).** *The natural candidate for functional identification with $S/\hbar$ — the QEC exponent $(d_{\mathrm{req}}/2) \cdot \log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}})$ — simplifies algebraically by substituting the definition of $d_{\mathrm{req}}$:*

$$\frac{d_{\mathrm{req}}(\mathcal{I}_A)}{2} \cdot \log\!\left(\frac{p_{th}}{p_{\mathrm{phys}}^{\mathrm{eff}}}\right) \;=\; \frac{c_{\mathrm{logic}}(\mathcal{I}_A)}{\log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}})} \cdot \log\!\left(\frac{T_{\mathrm{coh}}}{\tau_P}\right) \cdot \log\!\left(\frac{p_{th}}{p_{\mathrm{phys}}^{\mathrm{eff}}}\right) \;=\; c_{\mathrm{logic}}(\mathcal{I}_A) \cdot \log\!\left(\frac{T_{\mathrm{coh}}}{\tau_P}\right)$$

*— coupling-independent after cancellation.*

**Remark 3.2 (The cancellation is algebraic and exact).** *This cancellation holds for any profile, any coupling strength, any choice of per-cell threshold convention, and any axis. Whatever the coupling dependence of $p_{\mathrm{phys}}^{\mathrm{eff}}$ (additive form from [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling), multiplicative refinements under its Open Gap 2, or other candidates), the right-hand side of the QEC candidate does not carry it. The reason: $d_{\mathrm{req}}$ is defined in the first place as the distance needed to cancel the logical-error suppression against the lifetime-normalized stability condition. $d_{\mathrm{req}}$ and $\log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}})$ are inverses-up-to-constant by construction, so their product is the construction constant $c_{\mathrm{logic}} \log(T_{\mathrm{coh}}/\tau_P)$.*

**Remark 3.3 (Why the QEC candidate was natural in the first place).** *In standard topological QEC, the per-tick logical error rate under independent noise is $(p_{\mathrm{phys}}/p_{th})^{d/2}$ — an exponential in $d$ with base $p_{\mathrm{phys}}/p_{th} < 1$. Its logarithm, $(d/2)\log(p_{th}/p_{\mathrm{phys}})$, is the natural QEC analogue of a tunneling action: it controls the exponential suppression of failure probability. The identification attempt compares this to the WKB action $S/\hbar$, which controls the exponential suppression of formation probability. Both are exponents of "rare events" — an identification looked structurally plausible until the scaling analysis showed the quantities have incompatible functional forms.*

### Scaling incompatibility

**Proposition 4.1 (Linear identifications fail).** *No identification of the form $S/\hbar = A \cdot (d_{\mathrm{req}}/2) \log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}}) + B$ for constants $A, B$ can match across the SM coupling range.*

*Proof.* By Proposition 3.1, the right-hand side equals $A \cdot c_{\mathrm{logic}} \log(T_{\mathrm{coh}}/\tau_P) + B$, which is coupling-independent. The left-hand side $c/g^2$ is strongly coupling-dependent. A coupling-independent quantity cannot equal a $1/g^2$-dependent quantity except at isolated points. $\square$

**Proposition 4.2 (Monomial identifications fail).** *Monomial identifications of the form $S/\hbar = A \cdot (d_{\mathrm{req}})^\alpha \cdot [\log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}})]^\beta$ also fail.*

*Proof.* Under $d_{\mathrm{req}} \propto 1/\log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}})$, the right-hand side scales as $[\log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}})]^{\beta-\alpha}$ — some power of $\log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}})$. Under the additive noise form $p_{\mathrm{phys}}^{\mathrm{eff}} \sim g^2 \eta$ in the coupling-dominant regime, this scales as $[\log(p_{th}/\eta) - 2\log g]^{\beta-\alpha}$ — polynomial in $\log g$. Compare to WKB's $1/g^2$: incompatible asymptotic behaviors (polynomial in log vs. polynomial in inverse). No finite $\alpha, \beta$ match. $\square$

**Remark 4.3 (What the scaling result rules out, and what it does not).** *Propositions 4.1–4.2 rule out all simple-functional identifications $S/\hbar = F(d_{\mathrm{req}}, \log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}}))$ with $F$ linear, polynomial, log-polynomial, or monomial. Richer identifications remain logically available — implicit fixed-point conditions, common saddles of a deeper action, or identifications through a third variable not present in this parameterization. Three framework-native candidates along these lines are discussed at the end of this derivation as open threads.*

### Complementarity: what actually holds

**Corollary 5.1 (Two conditions, not one).** *Formation and preservation are logically independent conditions on $(m_A, \mathcal{I}_A)$. The WKB action $S/\hbar$ and the QEC exponent $(d_{\mathrm{req}}/2)\log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}})$ are distinct quantities with distinct functional dependencies on the underlying couplings and distinct physical roles.*

**Corollary 5.2 (Mass selection is WKB's role).** *Formation picks out a discrete set of viable masses — the crystallization scales $\Lambda_k$ of [Mass Hierarchy](/derivations/particles/mass-hierarchy) Theorem 3.1. Preservation does not pick out specific masses; it sets a lower-bound constraint satisfied by any $m \gtrsim m_{\min}^{\mathrm{QEC}}(\mathcal{I}_A)$, where $m_{\min}^{\mathrm{QEC}}$ is the smallest mass where $d_{\mathrm{achieved}} = d_{\mathrm{req}}$. The observed SM masses are formation-selected; preservation is satisfied at those masses with large margin.*

**Corollary 5.3 (QEC is the consistency framework).** *The error-correction program's contribution is to verify that WKB-selected masses satisfy preservation. It does not, and cannot, derive specific SM masses from its own content alone. Its role relative to the SM spectrum is compatibility-checking, not prediction.*

**Corollary 5.4 (S1 of Mass Hierarchy is unchanged by the error-correction program).** *Mass Hierarchy's structural postulate S1 (tunneling–crystallization correspondence) was a candidate for promotion to theorem via functional identification with the QEC exponent. That path is closed by Propositions 4.1–4.2. S1 remains a structural postulate, committed to by [Mass Hierarchy](/derivations/particles/mass-hierarchy) as the framework's specific choice for how bootstrap crystallization realizes itself geometrically.*

### The structural margin ratio

**Proposition 6.1 (Margin as exponential-over-logarithmic).** *At the WKB-selected mass $m_k = m_P e^{-c_k/g_k^2}$ and profile $\mathcal{I}_A$:*

$$\frac{d_{\mathrm{achieved}}(m_k)}{d_{\mathrm{req}}(\mathcal{I}_A)} \;=\; \frac{m_P/m_k}{c_{\mathrm{logic}} \log(T_{\mathrm{coh}}/\tau_P)/\log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}})} \;\sim\; \frac{e^{c_k/g_k^2}}{c_{\mathrm{logic}} \log(T_{\mathrm{coh}}/\tau_P)}$$

*— the ratio of WKB-exponential formation suppression (numerator via $d_{\mathrm{achieved}} \sim m_P/m_k$) to QEC-logarithmic preservation demand (denominator).*

*Proof.* Substitute $m_k = m_P e^{-c_k/g_k^2}$ into $d_{\mathrm{achieved}} \sim m_P/m_k$. Substitute the $d_{\mathrm{req}}$ formula from [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) Proposition 2.5. $\square$

**Remark 6.2 (Magnitude for SM couplings).**

- *Electroweak-scale WKB ($c/g^2 \sim 40$): margin $\sim e^{40}/(10^2) \sim 10^{15}$.*
- *Lighter-fermion ratios ($c/g^2 \sim 60$): margin $\sim e^{60}/(10^2) \sim 10^{24}$.*
- *Planck-near scales ($c/g^2 \sim 10$): margin $\sim e^{10}/(10^2) \sim 10^2$ — still well above 1, preservation still holds, just with less margin.*

*The $10^{15}$–$10^{25}$ range is the structural prediction; observed SM preservation margins fall within it.*

**Remark 6.3 (The margin is derived, not arbitrary).** *The enormous preservation margins observed when applying the QEC machinery to the SM spectrum are sometimes read as "the framework's redundancy is far more than needed." The structural-margin formula of Proposition 6.1 reframes this reading: the margin is exactly the ratio of formation-exponential to preservation-logarithmic at SM couplings, and its value is derived from the functional forms of the two mechanisms. It is a quantitative prediction of the framework — distinct for each profile, computable from the profile's binding coupling and bit-content — not a degree of freedom adjustable by choice.*

### Framework-native unification candidates

The scaling-argument result of this derivation rules out direct functional identifications but leaves three richer possibilities open. None has been formalized; each would, if developed, tighten the mechanism story without altering the complementarity conclusion.

**Open thread 7.1 (Joint fixed-point consistency).** *WKB formation and QEC preservation rates might jointly enter a single fixed-point condition selecting observer masses — with each rate entering the fixed point but neither reducing to the other. Formalize via [Bootstrap Fixed-Point Existence](/derivations/foundation/bootstrap-fixed-point-existence) combined with the preservation condition. Under this reading, "formation" and "preservation" are not two sequential conditions but two components of a simultaneous selection equation; the observed SM spectrum is the fixed point that satisfies both. This is the most framework-native alternative because bootstrap-fixed-point structure already operates at this level.*

**Open thread 7.2 (Coherence Lagrangian common-saddle derivation).** *Both WKB and QEC are semiclassical structures of one underlying Lagrangian. [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) Theorem 6.0 establishes the framework's Lagrangian dynamics. A careful analysis of WKB (classical action saddle, fixed-endpoint boundary) versus QEC (channel-evolution saddle, periodic boundary) may reveal both as different boundary-condition regimes of one Coherence Lagrangian calculation. This would give a common origin without collapsing the two mechanisms — consistent with the distinctness result but providing a structural lens.*

**Open thread 7.3 (Shared-facts distinguishability layer).** *The logical-bit content $c_{\mathrm{logic}}$ appearing on the right-hand side of the QEC exponent is itself a framework-level quantity — the number of bits needed to distinguish the observer's profile from other observers in the distinguishability-conservation network ([Distinguishability Conservation](/derivations/thermodynamics-ext/distinguishability-conservation) Theorem 6.1). If $c_{\mathrm{logic}}$ also enters WKB's barrier-width $a$ — as seems plausible under a full accounting of what defines the coherence barrier each profile must tunnel through — then the two mechanisms would share a dependency neither has alone, providing a common-denominator view even without direct identification.*

**Remark 7.4 (Not required for the principal result).** *The complementarity theorem and the structural-margin-ratio result are established without invoking any of these three candidates. They are future research directions that would enrich the combined-mechanism account, not gaps that threaten it.*

## Consequences

**C1. The observed SM spectrum requires both mechanisms.** Specific masses are WKB-selected (Mass Hierarchy); preservation at those masses is QEC-verified.

**C2. The WKB–QEC scaling mismatch is a structural fact.** It is not a modeling choice but a consequence of the functional definitions: $S/\hbar$ has $1/g^2$ dependence by WKB geometry, the QEC exponent cancels coupling dependence by its definition.

**C3. Mass Hierarchy's S1 stays postulated.** Promotion via QEC identification is closed. Other promotion paths (via Coherence Lagrangian analysis, bootstrap fixed-point structure) remain open and are flagged as research threads.

**C4. Preservation margins are structurally predicted.** The $e^{c/g^2}/\log(T/\tau_P)$ form predicts $10^{15}$–$10^{25}$ margins across the SM spectrum, which matches observation when the error-correction machinery is applied to observed masses.

**C5. The error-correction program's scope is made explicit.** Structurally, QEC is compatibility-framework, not mass-determination-mechanism. This bounds the program's predictive claims honestly.

**C6. Three open unification threads remain.** Joint fixed-point, Coherence Lagrangian common-saddle, shared-facts distinguishability. Each could strengthen the combined-mechanism story; none is required for the complementarity result.

## Rigor Assessment

**Rigorous (direct argument from definitions and source derivations):**

- Propositions 1.3, 2.1 (mechanism forms): direct from Mass Hierarchy and error-correction program.
- Proposition 3.1 (QEC cancellation): algebraic identity, rigorous.
- Propositions 4.1–4.2 (linear and monomial identifications fail): direct scaling arguments.
- Proposition 6.1 (margin ratio formula): direct substitution.

**Semi-formal (structural with O(1) parameter sensitivity):**

- Definition 1.1's $V_4^{\mathrm{cosmo}}/V_4^{\mathrm{Planck}}$: cosmological formation-volume-to-Planck-4-volume ratio is an order-of-magnitude estimate, not derived precisely.
- Remark 6.2 (magnitude estimates for SM): depends on specific $c_k, g_k$ values per particle, good to O(1) in the exponent.

**Deferred as open threads:**

- Open thread 7.1 (joint fixed-point): not resolved; framework-native alternative to simple-functional identification.
- Open thread 7.2 (common-saddle): not pursued; requires full Lagrangian analysis.
- Open thread 7.3 (shared-facts distinguishability): speculative; would need new derivation on profile-bit-count determination.

## Open Gaps

1. **Joint fixed-point formalization.** Formalize the joint-fixed-point alternative to simple-functional identification as described in Open thread 7.1. This would require extending [Bootstrap Fixed-Point Existence](/derivations/foundation/bootstrap-fixed-point-existence) to simultaneously enforce formation and preservation conditions on candidate masses. If derivable, the framework would have a stronger "combined mechanism" statement than the complementarity result. *Difficulty: MODERATE-HARD.*

2. **Coherence Lagrangian common-saddle analysis.** Explicitly compute WKB and QEC as different boundary-condition regimes of one Coherence Lagrangian calculation (Open thread 7.2). Does not reduce the two mechanisms but would show they have one origin. *Difficulty: HARD.*

3. **Shared-facts distinguishability derivation.** Derive the profile's logical-bit content $c_{\mathrm{logic}}(\mathcal{I}_A)$ from distinguishability-conservation principles, and check whether the same quantity appears in WKB's barrier-width definition (Open thread 7.3). *Difficulty: MODERATE-HARD; would spawn a new derivation.*

4. **Mass-information reversal above bootstrap level 3.** [Mass Hierarchy](/derivations/particles/mass-hierarchy) §7 argues that at bootstrap levels beyond $\mathbb{O}$ ($n > 3$), particle identity transitions from topological to structural encoding, reversing the mass-information relation. The complementarity result has implicitly assumed topological encoding. Investigate whether the roles of formation and preservation shift for composite observers in the structural-encoding regime — possibly with preservation taking on a more determinative role where WKB's coupling-tunneling picture no longer applies. *Difficulty: MODERATE.*

5. **Explicit formation-rate check at SM masses.** The complementarity statement establishes both conditions must hold but does not compute $P_{\mathrm{form}}$ numerically for each SM particle. A quantitative check — does the WKB-selected mass satisfy $P_{\mathrm{form}} \cdot V_4^{\mathrm{cosmo}}/V_4^{\mathrm{Planck}} \geq 1$ in each case — would verify that formation is the tight constraint while preservation is loose, as assumed in the qualitative arguments here. *Difficulty: MODERATE.*

## References and further reading

**Framework inputs.**
- [Mass Hierarchy](/derivations/particles/mass-hierarchy) — WKB tunneling, dimensional transmutation, Theorem 3.1 exponential crystallization, structural postulate S1.
- [Observer as an Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code) — three-axis product code structure.
- [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) — per-cell bit-flip rate, additive-coupling noise, Proposition 2.5 for $d_{\mathrm{req}}$.
- [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) — Theorem 6.0 (framework dynamics are Lagrangian); the common-origin basis referenced in Open thread 7.2.
- [Bootstrap Fixed-Point Existence](/derivations/foundation/bootstrap-fixed-point-existence) — bootstrap-dynamic framework for joint fixed-point candidates referenced in Open thread 7.1.
- [Distinguishability Conservation](/derivations/thermodynamics-ext/distinguishability-conservation) — Theorem 6.1 referenced in Open thread 7.3.

**Standard QEC background.**
- Dennis, E., Kitaev, A., Landahl, A., Preskill, J. (2002). *Topological quantum memory.* — Logical error rate $P_L \sim (p/p_{th})^{d/2}$ structure.

**Research-program context.** The formation–preservation complementarity and the structural-margin-ratio result consolidate the content of Step 5 of the Observer-Projection-as-Error-Correction research program (see `research-targets/observer-projection-as-error-correction.md` in the repository for the step-by-step exploration record and the specific identification attempts that motivated the scaling-argument analysis).
