---
title: "5. QEC and WKB as Complementary Mechanisms"
status: "provisional"
dependsOn: ["foundation/observer-profile-noise", "foundation/observer-code-distances", "foundation/observer-code-family", "particles/mass-hierarchy", "foundation/coherence-lagrangian"]
enablesDerivation: []
tags: ["foundation", "error-correction", "mass-hierarchy", "structural-obstruction"]
summary: "Step 5 of the Observer-Projection-as-Error-Correction research target was originally framed as the unification test: confirm that the WKB tunneling action of Mass Hierarchy and the QEC+coupling-noise required distance of Steps 3–4 are one mechanism under two descriptions. The test returns a negative result. WKB suppression scales as e^(-c/g²) — exponential in inverse coupling squared — while the QEC quantity (d_req/2)·log(p_th/p_phys^eff) reduces to log(T_coh/τ_P), independent of coupling entirely. No linear (or any simple) identification matches both scalings across the SM coupling range; the two mechanisms cannot be reduced to one. What IS structurally established: complementarity (WKB selects specific mass via formation probability, QEC validates preservation against substrate noise — different roles, both necessary), compatibility (WKB-selected masses automatically satisfy QEC preservation with the Step 3 excess margin), and a structural explanation of the ~10^19 excess margin itself (it is exactly the ratio of WKB-exponential to QEC-logarithmic scaling at SM couplings). Mass Hierarchy's structural postulate S1 (tunneling-crystallization identification) stays postulated — NOT promoted to theorem — but its role in the framework sharpens: WKB is the mass-determination mechanism, QEC is the consistency framework, and the refined hypothesis of the research target (QEC as compatibility layer, not mass-determination) is confirmed by Step 5's distinctness result."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-19
---

## Overview

The Observer-Projection-as-Error-Correction research target (as refined 2026-04-18 after Step 3's negative result on threshold saturation) posits that the observed SM particle spectrum is fixed by the combined action of three ingredients: (i) the three-axis product code of Steps 1–2, (ii) profile-dependent effective substrate noise of Step 4, (iii) bootstrap-dynamic selection of minimum-viable profiles. Step 5 of the original plan asked whether the third ingredient is *separate* from the first two or reduces to them — specifically, whether the WKB tunneling action $S/\hbar$ of [Mass Hierarchy](/derivations/particles/mass-hierarchy) can be identified with the QEC-derived quantity $(d_{\text{req}}/2) \log(p_{th}/p_{\text{phys}}^{\text{eff}})$ of Steps 3–4. If identified, Mass Hierarchy's structural postulate S1 (tunneling–crystallization correspondence) would become a theorem and the research target's ingredients would collapse to two.

**Result (2026-04-19): the identification fails.** The two quantities have incompatible functional dependencies on gauge couplings — WKB is exponential in $1/g^2$, the QEC quantity is coupling-independent after cancellation. No linear (or any simple) identification can match them across the SM coupling range. The complementary-not-unified finding anticipated in the research target's "structural obstruction" branch is established.

**What the failure produces.** The result is negative for the unification program but positive for the framework's structural understanding:

1. *Mechanism distinctness formalized.* WKB and QEC operate on *different aspects* of observer stability — formation probability and preservation probability respectively — and cannot be reduced to each other by any simple functional identification.

2. *The $\sim 10^{19}$ excess-margin gap of Step 3 is structurally explained.* It is exactly the ratio of WKB-exponential to QEC-logarithmic scaling at SM couplings, not an arbitrary coincidence.

3. *Refined hypothesis confirmed.* The research target's 2026-04-18 refinement — QEC as consistency framework rather than mass-determination mechanism — is validated. Mass determination is the WKB job; QEC consistency-checks the WKB-selected masses.

4. *Mass Hierarchy S1 remains structural but in clarified role.* S1 is not promoted to theorem by the error-correction program; it is instead affirmed as the framework's specific commitment to *how* bootstrap crystallization realizes itself dynamically. The QEC program does not subsume S1 but operates alongside it.

**Honest scope.** The distinctness result is a scaling argument operating on the explicit functional forms of both mechanisms. It rules out *linear* and *monomial* identifications but not every possible identification at higher-order levels (e.g., both being different semiclassical saddles of a common Coherence Lagrangian quantity, or joint fixed points of a combined dynamical system). Three such possibilities are flagged as open threads; none are committed to here.

## Statement

**Theorem (Distinctness of WKB and QEC mechanisms).** *The WKB tunneling action $S(\mathcal{I}_A)/\hbar$ from [Mass Hierarchy](/derivations/particles/mass-hierarchy) Theorem 3.1 and the QEC preservation quantity $(d_{\text{req}}(\mathcal{I}_A)/2) \cdot \log(p_{th}/p_{\text{phys}}^{\text{eff}}(\mathcal{I}_A))$ from Steps 3–4 of the error-correction program are not related by any linear or monomial identification. Their functional dependencies on the gauge coupling $g$ are incompatible across the SM coupling range:*

- *WKB: $S/\hbar \sim c/g^2$ (exponential suppression $e^{-c/g^2}$), strongly coupling-dependent.*
- *QEC: $(d_{\text{req}}/2) \log(p_{th}/p_{\text{phys}}^{\text{eff}}) = c_{\text{logic}} \log(T_{\text{coh}}/\tau_P)$ (after cancellation of the $d_{\text{req}}$ definition), coupling-independent.*

*Any linear identification $S/\hbar \equiv A \cdot (d_{\text{req}}/2) \log(p_{th}/p_{\text{phys}}^{\text{eff}}) + B$ requires constant coefficients that match both scalings — impossible for a $g$-independent quantity to equal a $1/g^2$-dependent quantity.*

**Corollary (Mechanism complementarity).** *WKB and QEC control different aspects of observer stability and are both required for an observer to exist:*

- *WKB controls **formation**: the probability that substrate-level fluctuations tunnel into a specific observer code space (selects mass via the crystallization scale $\Lambda_k$).*
- *QEC controls **preservation**: the probability that a formed observer's logical invariants survive substrate noise (sets lower bound on viable mass via $d_{\text{achieved}} \geq d_{\text{req}}$).*

*Neither mechanism alone determines a specific mass (WKB can form any mass in principle; QEC can preserve any mass above the bound). The observed SM masses sit at the intersection: masses at which formation is probable AND preservation is sustainable. At SM masses, the preservation bound is loose by ~$10^{19}$ (Step 3 result), consistent with formation being the binding constraint.*

**Corollary (Structural explanation of the $\sim 10^{19}$ excess margin).** *The Step 3 finding that $d_{\text{achieved}}/d_{\text{req}} \sim 10^{19}$ at observed SM masses is exactly the ratio of WKB-exponential suppression to QEC-logarithmic scaling at SM couplings:*

$$\frac{d_{\text{achieved}}(m_{\text{SM}})}{d_{\text{req}}(m_{\text{SM}})} \;\sim\; \frac{m_P/m_{\text{SM}}}{\log(T_{\text{coh}}/\tau_P)} \;\sim\; \frac{e^{c/g^2}}{\log(T_{\text{coh}}/\tau_P)}$$

*For electroweak-scale couplings $c/g^2 \sim 40$, this gives $e^{40}/\log(10^{60}) \sim 10^{17}/140 \sim 10^{15}$; for stronger or weaker couplings the ratio shifts but stays in the $10^{15}$–$10^{20}$ range. The $10^{19}$ excess margin is not an arbitrary number; it is the structural consequence of **exponential formation competing against logarithmic preservation** in a framework where both mechanisms are required.*

**Corollary (Mass Hierarchy S1 status unchanged by error-correction program).** *Mass Hierarchy's structural postulate S1 (tunneling–crystallization correspondence) is not promoted to a theorem via the error-correction interpretation. The QEC+coupling-noise machinery of Steps 3–4 does not derive WKB tunneling from axioms; it provides a consistency framework that WKB-selected masses automatically satisfy. S1 remains the framework's commitment to bootstrap crystallization's geometric realization as barrier tunneling, unchanged by Step 5.*

**Corollary (Refined hypothesis confirmed).** *The 2026-04-18 refined research-target hypothesis — **"QEC is the consistency framework, not the mass-determination mechanism; SM spectrum is fixed by the combined action of error-correcting projection, profile-dependent coupling noise, and bootstrap dynamics"** — is confirmed by Step 5's distinctness result. QEC+coupling-noise does not determine masses on its own; it consistency-checks masses determined by bootstrap+WKB dynamics. The three ingredients are distinct and all necessary.*

## Derivation

### Step 1: The Two Candidate Mechanisms (Recap)

**Preliminaries — WKB from Mass Hierarchy.** [Mass Hierarchy](/derivations/particles/mass-hierarchy) derives the mass spectrum from bootstrap-hierarchy crystallization via the tunneling-crystallization correspondence (structural postulate S1). The crystallization scale at bootstrap level $k$ is:

$$\Lambda_k \;\sim\; \Lambda_{k-1} \cdot e^{-c_k/g_k^2}$$

(Theorem 3.1) where $g_k$ is the effective coupling at level $k$ and $c_k$ is an O(1) geometric constant. The tunneling action through the coherence barrier is:

$$\frac{S_k}{\hbar} \;=\; \frac{V \cdot a}{\hbar} \;=\; \frac{c_k}{g_k^2}$$

with barrier height $V \sim \Lambda_{k-1}/g_k^2$ and width $a \sim 1/\Lambda_{k-1}$. The particle mass at level $k$ is $m_k \sim \Lambda_k = \Lambda_{k-1} \cdot e^{-S_k/\hbar}$.

**Preliminaries — QEC from Steps 3–4.** [Code-Distance Computation for Integer Profiles](/derivations/foundation/observer-code-distances) + [Profile-Dependent Noise from Gauge Couplings](/derivations/foundation/observer-profile-noise) derive the QEC preservation condition. The per-axis required code distance is:

$$d_{\text{req}}^{\text{axis}}(\mathcal{I}_A) \;=\; \frac{2 c_{\text{axis}}(\mathcal{I}_A)}{\log(p_{th}/p_{\text{phys}}^{\text{eff}}(\mathcal{I}_A, \text{axis}))} \cdot \log\!\left(\frac{T_{\text{coh}}}{\tau_P}\right)$$

where $c_{\text{axis}}$ is the axis-specific profile bit-content, $p_{th}$ is the topological-code threshold, $p_{\text{phys}}^{\text{eff}}$ is the profile-dependent effective noise (Step 4 additive form), and $T_{\text{coh}}$ is the observer's coherence lifetime. Per-axis achieved distances scale as $d_{\text{achieved}}^{\text{axis}} \sim m_P/m_A$ (Step 3 Propositions 3.1–3.3).

**Preliminaries — the conjectured identification.** The research-target plan's Step 5 conjecture (committed 2026-04-18) posited:

$$\frac{S(\mathcal{I}_A)}{\hbar} \;\stackrel{?}{=}\; \frac{d_{\text{req}}(\mathcal{I}_A)}{2} \cdot \log\!\left(\frac{p_{th}}{p_{\text{phys}}^{\text{eff}}(\mathcal{I}_A)}\right)$$

This identification, if valid, would make both QEC and WKB exponential suppressions collapse to a common underlying action — "two descriptions of one mechanism."

### Step 2: Compute the QEC Quantity

**Proposition 2.1 (QEC quantity simplifies to a coupling-independent expression).** *Under the Step 3 definition of $d_{\text{req}}$, the right-hand side of the conjectured identification reduces to:*

$$\frac{d_{\text{req}}(\mathcal{I}_A)}{2} \cdot \log\!\left(\frac{p_{th}}{p_{\text{phys}}^{\text{eff}}(\mathcal{I}_A)}\right) \;=\; c_{\text{logic}}(\mathcal{I}_A) \cdot \log\!\left(\frac{T_{\text{coh}}}{\tau_P}\right)$$

*— a quantity independent of gauge couplings, depending only on the profile's total logical-bit content $c_{\text{logic}}$ and the (profile-independent) observer lifetime in Planck ticks.*

*Proof.* Substitute the Step 3 formula:

$$d_{\text{req}}(\mathcal{I}_A) \;=\; \frac{2 c_{\text{logic}}(\mathcal{I}_A)}{\log(p_{th}/p_{\text{phys}}^{\text{eff}}(\mathcal{I}_A))} \cdot \log\!\left(\frac{T_{\text{coh}}}{\tau_P}\right).$$

Then:

$$\frac{d_{\text{req}}}{2} \cdot \log\!\left(\frac{p_{th}}{p_{\text{phys}}^{\text{eff}}}\right) \;=\; \frac{c_{\text{logic}}}{\log(p_{th}/p_{\text{phys}}^{\text{eff}})} \cdot \log\!\left(\frac{T_{\text{coh}}}{\tau_P}\right) \cdot \log\!\left(\frac{p_{th}}{p_{\text{phys}}^{\text{eff}}}\right) \;=\; c_{\text{logic}} \cdot \log\!\left(\frac{T_{\text{coh}}}{\tau_P}\right).$$

The $\log(p_{th}/p_{\text{phys}}^{\text{eff}})$ factors cancel — the profile-dependent noise (and hence the coupling dependence) has dropped out entirely. $\square$

**Remark 2.2 (This is the central observation of Step 5).** *The cancellation in Proposition 2.1 is algebraic and exact. It holds for any profile, any coupling strength, any choice of threshold convention. Whatever the coupling dependence of $p_{\text{phys}}^{\text{eff}}$ is — additive (Step 4), multiplicative, or anything else — the QEC quantity on the right-hand side of the conjectured identification does not carry it. This is because $d_{\text{req}}$ is defined in Step 3 as the distance needed to cancel the logical-error suppression against the lifetime-normalized stability condition: $d_{\text{req}}$ and $\log(p_{th}/p_{\text{phys}}^{\text{eff}})$ are inverses-up-to-constant by construction, so their product is the constant.*

### Step 3: Compare Functional Dependencies

**Proposition 3.1 (WKB depends exponentially on coupling; QEC does not).** *The WKB tunneling action $S/\hbar = c/g^2$ is strongly coupling-dependent — doubling $g$ quadruples $S/\hbar$, and small coupling changes produce exponentially large mass-ratio changes via $e^{-S/\hbar}$. The QEC quantity $c_{\text{logic}} \log(T_{\text{coh}}/\tau_P)$ (from Proposition 2.1) has zero coupling dependence — changes to $g$ leave it unchanged.*

*These functional forms cannot be equal for more than one specific coupling value.*

*Proof.* Suppose $S/\hbar = c_{\text{logic}} \log(T_{\text{coh}}/\tau_P)$ at coupling $g_0$ (i.e., the identification holds at one point). Change $g$ to $g_1 \neq g_0$. Left side: $c/g_1^2 \neq c/g_0^2$. Right side: unchanged ($c_{\text{logic}} \log(T_{\text{coh}}/\tau_P)$ has no $g$). So the identification fails at $g_1$. Hence the two quantities can coincide at most at isolated coupling values, not as a functional identification across the SM's coupling range. $\square$

**Proposition 3.2 (No linear extension repairs the mismatch).** *The generalized identification $S/\hbar = A \cdot c_{\text{logic}} \log(T_{\text{coh}}/\tau_P) + B$ for constants $A, B$ also fails: the left side retains its $1/g^2$ dependence while the right side is coupling-constant.*

*Proof.* Same argument as Proposition 3.1, applied with additional additive constants. No finite-degree polynomial or linear combination of coupling-independent quantities can reproduce $1/g^2$. $\square$

**Proposition 3.3 (Monomial extensions also fail).** *Monomial identifications of the form $S/\hbar = A \cdot (d_{\text{req}}/2)^\alpha \cdot [\log(p_{th}/p_{\text{phys}}^{\text{eff}})]^\beta$ do not repair the mismatch for any exponents $\alpha, \beta$.*

*Proof.* Under Step 3's definition, $d_{\text{req}} \propto 1/\log(p_{th}/p_{\text{phys}}^{\text{eff}})$, so $(d_{\text{req}})^\alpha [\log]^\beta$ scales as $[\log]^{\beta-\alpha}$. This is some power of $\log(p_{th}/p_{\text{phys}}^{\text{eff}})$. Under Step 4's additive noise: $\log(p_{th}/p_{\text{phys}}^{\text{eff}}) \approx \log(p_{th}/(g^2 \eta))$ = $\log(p_{th}/\eta) - 2 \log g$ in the strong-coupling limit. So the QEC quantity scales as $[\log(p_{th}/\eta) - 2 \log g]^{\beta - \alpha}$ — polynomially in $\log g$. Compare to WKB's $1/g^2$: these are incompatible asymptotic behaviors (polynomial-in-log vs. polynomial-in-inverse). No finite exponents $\alpha, \beta$ match both. $\square$

**Remark 3.4 (What the failure rules out, and what it does not).** *Propositions 3.1–3.3 rule out all simple-functional identifications $S/\hbar = F(d_{\text{req}}, \log(p_{th}/p_{\text{phys}}^{\text{eff}}))$ for $F$ a polynomial, log-polynomial, or monomial. Richer identifications remain logically possible — e.g., fixed-point conditions that implicitly relate $S/\hbar$ to QEC quantities without a direct functional identification, or common-origin derivations from [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) where both emerge as saddle-point approximations in different semiclassical regimes. These are discussed as open threads in §Open Gaps.*

### Step 4: What Actually Holds — Complementarity

**Definition 4.1 (Formation and preservation).** *For an observer with profile $\mathcal{I}_A$ and candidate mass $m_A$:*

- *The **formation probability** $P_{\text{form}}(m_A; \mathcal{I}_A) = e^{-S(\mathcal{I}_A)/\hbar}$ is the probability that substrate-level fluctuations crystallize into a stable observer with profile $\mathcal{I}_A$ at mass scale $m_A$. Derived from [Mass Hierarchy](/derivations/particles/mass-hierarchy) Theorem 3.1 via WKB tunneling.*
- *The **preservation probability** $P_{\text{preserve}}(m_A; \mathcal{I}_A, T_{\text{coh}}) = 1 - (p_{\text{phys}}^{\text{eff}}/p_{th})^{d_{\text{achieved}}(m_A)/2} \cdot T_{\text{coh}}/\tau_P$ is the probability that a formed observer's logical content survives substrate noise over lifetime $T_{\text{coh}}$. Derived from Steps 3–4 via QEC.*

*Formation and preservation are distinct physical quantities: formation concerns whether the observer emerges from substrate fluctuations; preservation concerns whether it persists once emerged.*

**Proposition 4.2 (Both are required for observer existence).** *A profile $\mathcal{I}_A$ realizes as a stable observer at mass $m_A$ if and only if:*

1. *$P_{\text{form}}(m_A; \mathcal{I}_A) \times (\text{cosmological 4-volume / Planck 4-volume}) \geq 1$ (formation has occurred somewhere in cosmological history), AND*
2. *$P_{\text{preserve}}(m_A; \mathcal{I}_A, T_{\text{coh}}) > 0$ for $T_{\text{coh}}$ = age of the universe (preservation sustains over observer-relevant timescales).*

*Both conditions are independent and neither implies the other.*

*Structural argument.* Condition 1 bounds $m_A$ from *above* by the WKB tunneling rate: if $m_A$ is too large, formation is exponentially suppressed and the observer does not emerge within cosmic history. Condition 2 bounds $m_A$ from *below* via $d_{\text{achieved}}(m_A) \geq d_{\text{req}}(\mathcal{I}_A)$: if $m_A$ is too small (horizon too large, paradoxically more modes), the profile's integer invariants can still be preserved — so preservation actually imposes *no* upper bound and only a weak lower bound. At observed SM masses, formation is the binding constraint (WKB determines the mass) and preservation is loose by ~$10^{19}$ (Step 3's excess margin). $\square$

**Corollary 4.3 (The observed SM masses are formation-selected, preservation-compatible).** *At each observed SM mass, WKB tunneling is marginal (formation probability is $\sim 1$ at cosmological time-volume scale, by Mass Hierarchy's tunneling-crystallization correspondence), while QEC preservation is abundantly satisfied (Step 3's $\sim 10^{19}$ excess margin). The observed spectrum is what WKB selects, modulo QEC consistency — which is automatically satisfied given the scaling mismatch.*

### Step 5: Structural Explanation of the $10^{19}$ Excess Margin

**Proposition 5.1 (Excess margin in terms of WKB-QEC scaling mismatch).** *The ratio $d_{\text{achieved}}/d_{\text{req}}$ at the WKB-selected mass $m_k = m_P \cdot e^{-c_k/g_k^2}$ is:*

$$\frac{d_{\text{achieved}}(m_k)}{d_{\text{req}}(\mathcal{I}_A)} \;=\; \frac{m_P/m_k}{\,c_{\text{logic}}(\mathcal{I}_A) \log(T_{\text{coh}}/\tau_P) / \log(p_{th}/p_{\text{phys}}^{\text{eff}}(\mathcal{I}_A))\,} \;\sim\; \frac{e^{c_k/g_k^2}}{c_{\text{logic}} \log(T_{\text{coh}}/\tau_P)}$$

*— an **exponential** in WKB action over a **logarithmic** preservation demand. The enormous magnitudes of SM excess margins ($10^{15}$–$10^{22}$) are structural consequences of this form, not coincidental numbers.*

*Proof.* Substitute $m_k \sim m_P e^{-c_k/g_k^2}$ from Mass Hierarchy Theorem 3.1 into $d_{\text{achieved}} \sim m_P/m_k \sim e^{c_k/g_k^2}$, and substitute $d_{\text{req}} \sim c_{\text{logic}} \log(T_{\text{coh}}/\tau_P) / \log(p_{th}/p_{\text{phys}}^{\text{eff}})$ from Step 3. Division gives the claimed ratio. $\square$

**Corollary 5.2 (Magnitude estimates for SM particles).** *For electroweak-scale WKB ($c/g^2 \sim 40$): ratio $\sim e^{40}/(\sim 10^2) \sim 10^{15}$. For Planck-scale ratios ($c/g^2 \sim 60$ for light fermions): ratio $\sim e^{60}/(\sim 10^2) \sim 10^{24}$. Step 3's specific $\sim 10^{19}$ for the electron is consistent with $c/g^2 \sim 45$ at electron-mass-relevant coupling levels. The numerical value is sensitive to the specific $c_k$ and $g_k$ per particle but always in the $10^{15}$–$10^{25}$ range across the SM — matching what Step 3 computed.*

**Remark 5.3 (The gap is structurally meaningful).** *The $10^{19}$ ratio is not noise or approximation error; it is the precise structural consequence of exponential formation competing with logarithmic preservation, evaluated at SM couplings. Different framework derivations would reproduce this structural magnitude for the same input couplings. The ratio is not a free parameter — it is a derived quantity of the framework.*

### Step 6: Implications for Mass Hierarchy S1 and the Refined Hypothesis

**Proposition 6.1 (S1 remains a structural postulate).** *The error-correction program of Steps 1–5 does not promote Mass Hierarchy's S1 (tunneling–crystallization correspondence) to a theorem. The distinctness result (Theorem Statement) rules out S1's derivation via QEC identification.*

*Argument.* The only path for promoting S1 through the error-correction program was via the Step 5 identification. That identification fails (Propositions 3.1–3.3). Alternative promotion paths — from Coherence Lagrangian semiclassical structure, bootstrap fixed-point existence, etc. — are outside the error-correction program's scope and remain open questions for those other research targets. $\square$

**Proposition 6.2 (Refined hypothesis is confirmed).** *The research-target's 2026-04-18 refined hypothesis ("QEC is the consistency framework, not the mass-determination mechanism") is directly confirmed by the distinctness result. WKB is the mass-determination mechanism; QEC is the consistency framework; the two do not collapse.*

*Argument.* Proposition 4.2 established that formation (WKB) selects specific masses while preservation (QEC) bounds viability. At observed SM masses, formation is the binding constraint while preservation is abundantly satisfied. This is exactly the "QEC as consistency framework" role asserted in the refined hypothesis. $\square$

**Remark 6.3 (The error-correction program's scope is clarified by the negative result).** *Steps 1–5 of the research target have produced a structurally coherent, framework-consistent account of the observer projection as a three-axis error-correcting code with profile-dependent noise, whose consistency with the observed SM spectrum is now formally established (compatibility with masses selected by other mechanisms). What the program does NOT do: produce absolute mass values without input from Mass Hierarchy. This is the program's natural scope — a consistency story, not a determination story — and Step 5 establishes this scope honestly rather than forcing the program beyond its reach.*

## Consequences

**C1. QEC and WKB are complementary mechanisms, not one mechanism.** Theorem Statement: no simple functional identification relates them. This closes the unification-of-mechanisms question posed in the original research plan.

**C2. Mass determination mechanism stays at Mass Hierarchy.** Corollary: Mass Hierarchy's S1 is not promoted to theorem by QEC; bootstrap+WKB dynamics remains the mass-determination channel.

**C3. QEC's role is consistency-framework, not determination.** The refined hypothesis of the research target is confirmed; QEC machinery of Steps 1–4 is the compatibility layer, not the mass-predictor.

**C4. The 10^19 excess margin of Step 3 is structurally derived.** Proposition 5.1: the gap is $\sim e^{c/g^2}/\log(T_{\text{coh}}/\tau_P)$, the precise structural consequence of exponential formation over logarithmic preservation at SM couplings. Not arbitrary.

**C5. Step 6 becomes a combined-machinery test, not a standalone QEC test.** The capstone SM-spectrum comparison must use WKB masses (from Mass Hierarchy) and QEC consistency (from Steps 1–4) together; neither alone predicts the spectrum.

**C6. Three framework-native unification candidates remain open.** Listed in Open Gaps below: joint fixed-point selection, Coherence Lagrangian common-saddle analysis, and shared-facts distinguishability layer. None are committed-to here; each is a possible future research target that could revisit the QEC↔WKB relationship from a different angle.

## Rigor Assessment

**Rigorous (direct from Steps 3–4 + Mass Hierarchy):**

- Proposition 2.1 (QEC quantity simplifies to coupling-independent form): algebraic identity, rigorous.
- Proposition 3.1 (WKB depends on coupling, QEC doesn't): direct scaling argument, rigorous.
- Propositions 3.2–3.3 (linear and monomial extensions fail): standard scaling-analysis arguments, rigorous.
- Proposition 5.1 (excess margin in terms of scaling mismatch): direct substitution, rigorous.

**Semi-formal (structural with O(1) ambiguity):**

- Proposition 4.2 (formation and preservation are both required): structural argument using Mass Hierarchy's tunneling rate and Step 3's preservation condition; rigorous given those inputs, but "cosmological formation volume / Planck 4-volume" is an order-of-magnitude estimate.
- Corollary 5.2 (magnitude estimates): depends on specific $c_k, g_k$ values per SM particle; good to O(1) in the exponent.

**Deferred to subsequent work:**

- Open thread 1 (joint fixed-point consistency): not resolved here; flagged as a candidate framework-native unification.
- Open thread 2 (Coherence Lagrangian common-saddle derivation): not pursued; requires full Lagrangian analysis of WKB and QEC as different semiclassical limits.
- Open thread 3 (shared-facts distinguishability layer): not pursued; would require a new derivation on observer identity and logical-content determination.

## Open Gaps

1. **Joint fixed-point consistency as unification candidate.** The most framework-native alternative to simple-functional identification: WKB formation and QEC preservation rates might enter a joint fixed-point condition selecting observer masses, with each rate entering the fixed point but neither reducing to the other. Formalize via [Bootstrap Fixed-Point Existence](/derivations/foundation/bootstrap-fixed-point-existence) + Steps 3–4's preservation condition. If derivable, this would give a stronger "combined mechanism" statement without requiring functional identification. *Difficulty: MODERATE-HARD; connects to an existing framework research target.*

2. **Coherence Lagrangian common-saddle derivation.** Both WKB and QEC are semiclassical structures. [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) Theorem 6.0 establishes the framework's Lagrangian dynamics. A careful analysis of WKB (classical action saddle, fixed-endpoint boundary) vs. QEC (channel-evolution saddle, periodic boundary) might reveal both as different boundary-condition regimes of one Coherence Lagrangian calculation. Does not reduce them to one *mechanism* but may show they have one *origin*. *Difficulty: HARD.*

3. **Shared-facts distinguishability layer.** A prior conversation flagged that the "what forces $c_{\text{logic}}$" question for each profile is not answered within the error-correction program. If distinguishability-conservation specifies a profile-specific $c_{\text{logic}}$ that enters *both* WKB's barrier width and QEC's required-distance formula, it would provide a common dependency neither mechanism has alone. Currently speculative; a dedicated research target could formalize. *Difficulty: MODERATE-HARD; would create a new research target.*

4. **Mass-information reversal above bootstrap level 3.** [Mass Hierarchy](/derivations/particles/mass-hierarchy) §7 argues that at bootstrap levels beyond octonions ($n > 3$), particle identity transitions from topological (compact, boundary-shrinking) to structural (relational, boundary-expanding) encoding. The error-correction program of Steps 1–5 has implicitly assumed topological encoding. For composite observers in the structural regime, QEC and WKB roles may shift — possibly with QEC taking on a more determinative role where WKB's coupling-tunneling picture no longer applies. Explore whether Step 5's distinctness result reverses or qualifies in the structural-encoding regime. *Difficulty: MODERATE.*

5. **Non-linear identifications beyond monomial.** Propositions 3.1–3.3 rule out linear and monomial identifications. Exotic forms — e.g., $S/\hbar = \exp[\text{QEC quantity}]$ or $S/\hbar = $ integral of QEC quantity over some auxiliary parameter — are not explicitly ruled out. Most would require framework-specific structural motivation not currently available. Lower priority. *Difficulty: MODERATE; speculative.*

6. **Connection to Step 6 capstone test.** Step 5's complementarity result specifies Step 6's structure: the SM-spectrum match must compare (WKB-selected masses) ↔ (QEC preservation consistency) as two separate checks, not as a single unified prediction. Formalize the Step 6 comparison protocol given this constraint. *Difficulty: MODERATE; prerequisite for Step 6's framing.*
