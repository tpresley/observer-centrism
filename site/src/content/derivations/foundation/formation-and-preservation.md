---
title: "Observer Viability: Formation, Preservation, and Detection"
status: "provisional"
dependsOn: ["foundation/substrate-noise-and-profile-coupling", "foundation/observer-as-error-correcting-code", "foundation/observer-pattern-signal", "foundation/observer-edges-and-mutual-opacity", "foundation/profile-dependent-edges-and-confinement", "particles/mass-hierarchy", "foundation/coherence-lagrangian", "axioms/coherence-conservation"]
enablesDerivation: []
tags: ["foundation", "observer-structure", "mass-hierarchy", "viability"]
summary: "An observer is viable iff three independent conditions all hold: (F) Formation — the mass is a WKB crystallization scale at some bootstrap level, with substrate tunneling into the code space occurring in cosmological history; (P) Preservation — the three-axis QEC code's achieved distance exceeds required distance under substrate noise; (D) Detection — the edge equation has a finite-r solution for the profile's signal structure, i.e., the observer has a well-defined operational edge. The three mechanisms operate in structurally distinct regimes (formation-time substrate-to-code transition; lifetime-long preservation under noise; spatial-instantaneous inter-observer resolution), with incompatible functional dependencies on coupling (exponential e^(-c/g²) for formation; logarithmic log(T_coh/τ_P) after algebraic cancellation for preservation; Compton-scale r_C = ℏ/(mc) for detection). No two are reducible to each other — the scaling-mismatch arguments rule out simple-functional identifications pairwise. The observed Standard Model spectrum is the simultaneous-satisfaction set of all three conditions. The structural preservation-margin ratio d_achieved/d_req ~ e^(c/g²) / log(T_coh/τ_P) gives the observed 10^15–10^25 preservation margins across the SM spectrum as a derived quantity rather than a coincidence. Free quarks fail (D) alone — confinement is a detection-axis-specific failure, complementary to the Wilson-loop and QEC-threshold pictures."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-21
---

## Overview

An observer is a localized, persistent, detectable coherence pattern. "Existing as an observer" has three distinct structural components, and this derivation establishes them as the three independent viability conditions of the framework:

- **Formation.** The observer must come into being — substrate fluctuations must tunnel into the observer's code space with enough probability for crystallization to occur somewhere in cosmological history. This is [Mass Hierarchy](/derivations/particles/mass-hierarchy)'s WKB mechanism, operating at formation time.

- **Preservation.** Once formed, the observer's integer-invariant profile must survive substrate noise over its coherence lifetime. This is the QEC preservation condition $d_{\mathrm{achieved}} \geq d_{\mathrm{req}}$ derived from [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) on the three-axis code of [Observer as an Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code), operating throughout the observer's lifetime.

- **Detection.** The observer must have a well-defined operational edge — a finite radius at which external observers' resolution matches the observer's pattern signal. This is the edge equation of [Observer Edges and Mutual Opacity](/derivations/foundation/observer-edges-and-mutual-opacity), operating in inter-observer relation.

**The viability theorem.** An observer is viable iff all three conditions hold. The three are pairwise-distinct in functional form — no two are reducible to a single mechanism via simple-functional identification. The SM spectrum is the simultaneous-satisfaction set of all three.

**Structural distinctness.** The three mechanisms have characteristic functional dependences:

- Formation: $P_{\mathrm{form}} \sim e^{-c/g^2}$, exponential in inverse coupling squared.
- Preservation: the QEC exponent $(d_{\mathrm{req}}/2)\log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}})$ simplifies algebraically to $c_{\mathrm{logic}} \log(T_{\mathrm{coh}}/\tau_P)$ — coupling-independent after cancellation.
- Detection: $r_{\mathrm{edge}} \sim r_C = \hbar/(mc)$, Compton-scaled, mass-linear.

Pairwise scaling-mismatch arguments confirm that no two of these functional forms can be identified — each is a distinct mechanism. The three together constitute the complete axis set for observer existence under the framework's current commitments.

**The structural preservation margin.** At a WKB-selected mass $m_k = m_P e^{-c_k/g_k^2}$ with profile $\mathcal{I}_A$:

$$\frac{d_{\mathrm{achieved}}(m_k)}{d_{\mathrm{req}}(\mathcal{I}_A)} \;\sim\; \frac{e^{c_k/g_k^2}}{c_{\mathrm{logic}}\, \log(T_{\mathrm{coh}}/\tau_P)}$$

— an exponential in WKB action over a logarithmic preservation demand. For SM couplings ($c/g^2 \in [20, 60]$) and cosmological lifetime ($\log(T_{\mathrm{coh}}/\tau_P) \approx 138$): ratio $\sim 10^{9}$–$10^{25}$. The large observed preservation margins are a structural consequence of the mechanism split at SM couplings.

**Confinement as (D)-axis failure.** Free quarks form (they crystallize at the QCD bootstrap level, satisfying F) and would preserve (their QEC code is viable within confining hadrons, satisfying P). They fail detection: by [Profile-Dependent Edges and Confinement](/derivations/foundation/profile-dependent-edges-and-confinement) Theorem 7.1, isolated color-charged profiles have no finite edge — the color channel's linear-confining signal has no Yukawa-like radial decay. Color-neutral composites (hadrons) satisfy all three conditions.

**Scope.** Each of (F), (P), (D) is a theorem or structural-correspondence argument in its own right (inheriting the rigor of its source derivation). Joint sufficiency — the claim that no fourth independent axis is needed — is a framework-completeness assertion rather than a theorem. A fourth axis could in principle be identified in future work.

## Statement

**Observer Viability Theorem (Tripartite).** *A candidate observer profile $\mathcal{I}_A$ with mass $m_A$ is viable — corresponds to a stable, detectable, persistent observer in the framework's sense — iff all three conditions hold:*

**(F) Formation.** *$m_A$ is a WKB crystallization scale at some bootstrap level: tunneling probability is sufficient for crystallization over cosmological history,*

$$P_{\mathrm{form}}(m_A; \mathcal{I}_A) \cdot \frac{V_4^{\mathrm{cosmo}}}{V_4^{\mathrm{Planck}}} \geq 1$$

*with $P_{\mathrm{form}} \sim e^{-c/g^2}$ by WKB ([Mass Hierarchy](/derivations/particles/mass-hierarchy) Theorem 3.1).*

**(P) Preservation.** *The three-axis QEC code achieves sufficient distance to preserve its integer invariants under substrate noise over its coherence lifetime,*

$$d_{\mathrm{achieved}}(m_A) \geq d_{\mathrm{req}}(\mathcal{I}_A; T_{\mathrm{coh}})$$

*on spatial, algebraic, and temporal axes ([Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) Proposition 2.5).*

**(D) Detection.** *The edge equation of [Observer Edges and Mutual Opacity](/derivations/foundation/observer-edges-and-mutual-opacity) has a finite-$r$ solution for the profile's pattern signal; equivalently, $A(r; \mathcal{I}_A)$ has Yukawa-like decay at large $r$ (not pathological linear-confining divergence),*

$$\exists\, r_{\mathrm{edge}} \in (0, \infty): \quad A(r_{\mathrm{edge}}; \mathcal{I}_A) = m_B c^2 \text{ for any reference detector } B$$

*([Observer Pattern Signal](/derivations/foundation/observer-pattern-signal); [Observer Edges and Mutual Opacity](/derivations/foundation/observer-edges-and-mutual-opacity); [Profile-Dependent Edges and Confinement](/derivations/foundation/profile-dependent-edges-and-confinement) Theorem 7.1).*

**Theorem (Pairwise distinctness).** *No two of (F), (P), (D) are reducible to each other via simple-functional identification:*

- *Formation ≠ Preservation: WKB action $S/\hbar = c/g^2$ is $1/g^2$-dependent; QEC exponent $(d_{\mathrm{req}}/2)\log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}})$ simplifies algebraically to $c_{\mathrm{logic}} \log(T_{\mathrm{coh}}/\tau_P)$, coupling-independent. No linear or monomial identification matches.*
- *Preservation ≠ Detection: preservation quantities cancel coupling dependence; detection edge $r_{\mathrm{edge}} \approx W(1) r_C$ is Compton-scaled and mass-dependent via $r_C$.*
- *Formation ≠ Detection: formation is exponential in $1/g^2$, detection Compton-linear in $1/m$.*

**Theorem (Structural preservation margin).** *At the WKB-selected mass $m_k = m_P e^{-c_k/g_k^2}$:*

$$\frac{d_{\mathrm{achieved}}(m_k)}{d_{\mathrm{req}}(\mathcal{I}_A)} \;\sim\; \frac{e^{c_k/g_k^2}}{c_{\mathrm{logic}}\, \log(T_{\mathrm{coh}}/\tau_P)}$$

*— an exponential in WKB action over a logarithmic preservation demand. For SM couplings and cosmological lifetime: ratio $\sim 10^{9}$–$10^{25}$. The observed large preservation margins are derived, not arbitrary.*

**Corollary (Standard Model spectrum).** *The observed SM spectrum is the set of profiles satisfying (F) ∧ (P) ∧ (D):*

- *SM fundamental fermions, gauge mediators, and their composites satisfy all three.*
- *Free quarks fail (D) only: they form, preserve within hadrons, but have no well-defined detection edge as isolated particles — hence confinement.*
- *Color-neutral hadrons satisfy all three with Yukawa-screened exterior color signal at $\Lambda_{\mathrm{QCD}}$.*

**Corollary (Confinement as (D)-axis failure).** *Under the triplet, confinement is a specific viability-axis failure — free quarks fail detection while satisfying formation and preservation — rather than a mixed formation/preservation issue.*

## Derivation

### Step 1: The three mechanisms

**Formation — WKB tunneling.** The mass spectrum of viable observers is set by crystallization at each bootstrap level: $\Lambda_k \sim \Lambda_{k-1} e^{-c/g_k^2}$ ([Mass Hierarchy](/derivations/particles/mass-hierarchy) Theorem 3.1). The exponential suppression in inverse coupling squared is the framework's natural mechanism for the observed mass hierarchy — logarithmically natural ratios of modest couplings produce exponentially separated mass scales.

**Definition 1.1 (Formation).** *The **formation probability** $P_{\mathrm{form}}(m_A; \mathcal{I}_A)$ is the probability per unit cosmological 4-volume that substrate fluctuations crystallize into a stable observer with profile $\mathcal{I}_A$ at mass scale $m_A$. Under [Mass Hierarchy](/derivations/particles/mass-hierarchy) structural postulate S1 (tunneling–crystallization correspondence), this is the WKB tunneling probability through a coherence barrier: $P_{\mathrm{form}}(m_A; \mathcal{I}_A) \sim e^{-S(\mathcal{I}_A)/\hbar}$ with $S(\mathcal{I}_A)/\hbar = c/g^2$.*

**Preservation — QEC code viability.** Once formed, an observer's profile is a three-axis integer-invariant code ([Observer as an Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code)) subject to substrate bit-flip rates $p_{\mathrm{phys}}^{\mathrm{eff}}(\mathcal{I}_A) = p_{\mathrm{phys}}^{\mathrm{geom}} + \sum g_i^2 \eta_i$ ([Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) Corollary 4.3).

**Definition 1.2 (Preservation).** *The **preservation condition** is the QEC viability inequality*

$$d_{\mathrm{achieved}}(m_A) \;\geq\; d_{\mathrm{req}}(\mathcal{I}_A; T_{\mathrm{coh}}) \;=\; \frac{2 c_{\mathrm{axis}}(\mathcal{I}_A)}{\log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}})} \cdot \log(T_{\mathrm{coh}}/\tau_P)$$

*on each axis, with $d_{\mathrm{achieved}} \sim m_P/m_A$ (polynomial in inverse mass) and $d_{\mathrm{req}}$ logarithmic in lifetime.*

**Detection — pattern-edge viability.** The observer's pattern signal must cross external observers' resolution threshold at some finite radius ([Observer Edges and Mutual Opacity](/derivations/foundation/observer-edges-and-mutual-opacity) Step 2).

**Definition 1.3 (Detection).** *The **detection condition** is that the edge equation*

$$A(r_{\mathrm{edge}}; \mathcal{I}_A) \;=\; m_B c^2$$

*has a finite-$r$ solution, where $A(r; \mathcal{I}_A)$ is the pattern signal ([Observer Pattern Signal](/derivations/foundation/observer-pattern-signal)). Equivalently, the profile's signal must be Yukawa-like (or Coulomb-like for massless components) at large $r$, not linearly divergent.*

### Step 2: Pairwise distinctness — scaling arguments

**Proposition 2.1 (Formation ≠ Preservation).** *WKB action: $S/\hbar = c/g^2$, exponential in $1/g^2$. QEC candidate: $(d_{\mathrm{req}}/2)\log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}})$, which by direct substitution equals*

$$\frac{d_{\mathrm{req}}(\mathcal{I}_A)}{2} \cdot \log\!\left(\frac{p_{th}}{p_{\mathrm{phys}}^{\mathrm{eff}}}\right) \;=\; c_{\mathrm{logic}}(\mathcal{I}_A) \cdot \log\!\left(\frac{T_{\mathrm{coh}}}{\tau_P}\right)$$

*— coupling-independent after algebraic cancellation (the $d_{\mathrm{req}}$ definition and $\log$ factor are inverses-up-to-constant by construction). The two have incompatible functional dependence on coupling. No linear or monomial identification $S/\hbar = F(d_{\mathrm{req}}, \log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}}))$ matches.*

**Proposition 2.2 (Preservation ≠ Detection).** *Preservation quantities cancel coupling dependence (Proposition 2.1); detection edge $r_{\mathrm{edge}} \approx W(1) r_C = W(1) \hbar/(mc)$ is Compton-scaled and mass-dependent via $r_C$, not coupling-canceled. Different functional forms; no identification possible.*

**Proposition 2.3 (Formation ≠ Detection).** *Formation: $P_{\mathrm{form}} \sim e^{-c/g^2}$, exponential in coupling. Detection: $r_{\mathrm{edge}} \sim r_C$, Compton-linear in $1/m$. Different scalings; no functional identification.*

### Step 3: Necessity of each condition

**Proposition 3.1 (Formation is necessary).** *A profile that fails (F) never crystallizes from substrate in cosmological history. Even if it would preserve and have a well-defined edge, no instance exists.*

**Proposition 3.2 (Preservation is necessary).** *A profile that fails (P) — $d_{\mathrm{achieved}} < d_{\mathrm{req}}$ on some axis — decoheres under substrate noise within its intended coherence lifetime. Even if it forms and has a well-defined edge, formed instances do not persist as stable observers.*

**Proposition 3.3 (Detection is necessary).** *A profile that fails (D) — no finite-$r$ edge solution — lacks a well-defined spatial boundary as a pattern. By [Observer Edges and Mutual Opacity](/derivations/foundation/observer-edges-and-mutual-opacity), inter-observer relations require that each observer have a finite edge beyond which it is mutually opaque. A pathological-signal profile has no such edge; it cannot participate in the observer network.*

*Proof.* By the framework's observer-centrism ([Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Corollary 4.6), every observer is defined by its relations with other observers. A pattern with no finite edge cannot be in well-defined relation with peers at any distance. The profile fails to constitute a framework observer. $\square$

**Corollary 3.4 (Tripartite necessity).** *All three conditions are necessary for observer viability; no single condition implies the others.*

### Step 4: Joint sufficiency

**Proposition 4.1 (Joint sufficiency).** *Under the framework's current commitments — Axioms 1–3, bootstrap hierarchy, three-axis QEC code, pattern-edge structure — (F) ∧ (P) ∧ (D) are jointly sufficient for observer viability: any profile satisfying all three is realized as a stable, detectable observer, and the observed SM spectrum consists of such profiles.*

**Structural argument.** A profile satisfying (F) has at least one instance formed. A profile satisfying (P) preserves its integer-invariant profile. A profile satisfying (D) has a well-defined operational edge. These three together exhaust the framework's current conditions on observer existence.

**Remark 4.2.** *Joint sufficiency is a framework-completeness claim. A fourth axis could in principle be identified — for instance, a bootstrap-composition viability condition distinct from (F) — but none is currently known to be independent of the three.*

### Step 5: Structural preservation margin

**Proposition 5.1 (Margin as exponential-over-logarithmic).** *At the WKB-selected mass $m_k = m_P e^{-c_k/g_k^2}$ and profile $\mathcal{I}_A$:*

$$\frac{d_{\mathrm{achieved}}(m_k)}{d_{\mathrm{req}}(\mathcal{I}_A)} \;=\; \frac{m_P/m_k}{c_{\mathrm{logic}} \log(T_{\mathrm{coh}}/\tau_P)/\log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}})} \;\sim\; \frac{e^{c_k/g_k^2}}{c_{\mathrm{logic}} \log(T_{\mathrm{coh}}/\tau_P)}$$

*— the ratio of WKB-exponential formation suppression to QEC-logarithmic preservation demand.*

*Proof.* Substitute $m_k = m_P e^{-c_k/g_k^2}$ into $d_{\mathrm{achieved}} \sim m_P/m_k$ and the $d_{\mathrm{req}}$ formula from [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) Proposition 2.5. $\square$

**Remark 5.2 (Magnitude for SM couplings).**

- *Electroweak-scale WKB ($c/g^2 \sim 40$): margin $\sim e^{40}/(10^2) \sim 10^{15}$.*
- *Lighter-fermion ratios ($c/g^2 \sim 60$): margin $\sim e^{60}/(10^2) \sim 10^{24}$.*
- *Planck-near scales ($c/g^2 \sim 10$): margin $\sim e^{10}/(10^2) \sim 10^2$ — still $> 1$.*

*The $10^{15}$–$10^{25}$ range is the structural prediction; observed SM preservation margins fall within it.*

**Remark 5.3 (The margin is derived, not arbitrary).** *The enormous preservation margins observed when applying the QEC machinery to the SM spectrum reflect the ratio of formation-exponential to preservation-logarithmic at SM couplings. The margin value is derived from the functional forms of the two mechanisms, not a degree of freedom adjustable by choice.*

### Step 6: SM spectrum as simultaneous-satisfaction set

**Proposition 6.1 (SM satisfies all three conditions).** *Each observed SM particle passes (F), (P), and (D):*

- *SM fundamental fermions (electrons, muons, taus, neutrinos, up-type and down-type quarks): (F) by WKB at appropriate bootstrap level; (P) with $10^{15}$–$10^{25}$ margins (Remark 5.2); (D) at Compton scale via Yukawa signal.*
- *SM gauge mediators (photon, $W$, $Z$, gluon-within-hadron): (F) at gauge-sector crystallization; (P) via gauge-mediator massless exemption ([Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) Corollary 6.1); (D) via Coulomb tail (photon) or hadron-confined Yukawa (gluon).*

**Proposition 6.2 (Free quarks fail (D) only).** *Free quarks satisfy (F) — they form at QCD bootstrap level. They would satisfy (P) — their QEC code preservation is viable within confining hadrons. They fail (D) alone: isolated color-charged profiles have pathological non-Yukawa signal ([Profile-Dependent Edges and Confinement](/derivations/foundation/profile-dependent-edges-and-confinement) Proposition 5.1). The triplet renders confinement a (D)-axis failure.*

**Proposition 6.3 (Color-neutral hadrons satisfy all three).** *Hadrons satisfy (F) by binding at QCD scale, (P) with preservation margin, (D) with Yukawa-screened exterior color signal at the hadron scale ([Profile-Dependent Edges and Confinement](/derivations/foundation/profile-dependent-edges-and-confinement) Proposition 6.3). Hadrons are the viable observer profiles at QCD bootstrap level.*

### Step 7: Detection and the earlier-open joint-fixed-point thread

Earlier framing of this derivation (when it was a pair theorem) flagged a "joint fixed-point consistency" thread as a future-work direction: whether formation and preservation might jointly enter a single fixed-point condition selecting observer masses. With detection as the third leg, the joint-mechanism picture takes a different form than that thread anticipated.

**Remark 7.1 (Resolution of the joint-fixed-point thread).** *Under the triplet, the three mechanisms are not unified into a single fixed-point equation; they are three independent viability axes. The "joint-fixed-point" conception — where one quantity self-consistently determines mass — is replaced by the simultaneous-satisfaction picture — where three independent conditions must each hold. This is structurally stronger than a single fixed-point would have been: three distinct constraints are jointly tighter than any single constraint.*

*The three mechanisms do interact at the phenomenological level:*

- *Detection reflects masses selected by formation: the detection edge is at Compton scale of the WKB-selected mass.*
- *Preservation and detection both depend on profile structure — profiles that fail detection (free quarks) typically also fail preservation at the free-quark level, but the mechanisms are logically distinct.*
- *None of the three determines masses independently of the others; formation is the mass-selection mechanism, while detection and preservation are constraints the formation-selected masses must also satisfy.*

## Consequences

**C1. Observer viability is tripartite.** (F) ∧ (P) ∧ (D) is the complete axis set for observer existence under the framework's current commitments.

**C2. The three mechanisms are structurally distinct.** Formation: exponential in coupling (WKB). Preservation: logarithmic in lifetime, coupling-cancelled (QEC). Detection: Compton-linear in mass (pattern edges). Pairwise-incompatible scalings.

**C3. Confinement is a (D)-axis failure.** Free quarks fail detection (no finite edge for isolated color); hadrons satisfy (D). Confinement is a specific viability-axis failure.

**C4. Massless gauge mediators are limits of all three conditions.** Photon and gluon satisfy (F), (P), (D) in their respective massless / confined-composite limits. No fine-tuning; structural.

**C5. SM preservation margins $10^{15}$–$10^{25}$ are derived.** Large SM preservation margins fall out of the triplet: formation-exponential dominates preservation-logarithmic at SM couplings, while detection-Compton completes the viability picture.

**C6. Mass selection is formation's domain.** Detection reflects masses selected by formation (via $r_C = \hbar/(mc)$); it does not independently select masses. The mass-selection mechanism is WKB ([Mass Hierarchy](/derivations/particles/mass-hierarchy)).

**C7. Bootstrap composition is not automatically a fourth axis.** Higher-level composite observers satisfy their own (F) ∧ (P) ∧ (D) at the composite level. Whether bootstrap composition requires an additional viability condition (cross-level consistency) is a question for future work.

**C8. The observed SM spectrum is the intersection.** SM = (F)-viable ∩ (P)-viable ∩ (D)-viable. Each SM particle passes all three; each non-observed profile fails at least one.

## Rigor Assessment

**Rigorous (direct consolidation of source theorems):**

- Proposition 2.1 (Formation ≠ Preservation scaling mismatch): rigorous algebraic cancellation + scaling argument.
- Propositions 3.1, 3.2, 3.3 (necessity of each condition): each follows directly from corresponding source derivation.
- Propositions 5.1 (structural margin): direct substitution.
- Propositions 6.1–6.3 (SM consistency): empirical check + direct cross-reference.

**Semi-formal (structural arguments):**

- Proposition 2.2 (Preservation ≠ Detection): scaling-argument comparison.
- Proposition 2.3 (Formation ≠ Detection): same.
- Proposition 3.3 (detection necessity): structural argument via observer-centrism and operational completeness.

**Conjectural (framework-completeness):**

- Proposition 4.1 (joint sufficiency): asserts no fourth independent axis; this is a framework-completeness claim, not a theorem.

**Deferred:**

- Per-particle quantitative verification of (F) ∧ (P) ∧ (D) for each SM entity.
- Whether bootstrap composition constitutes a distinct fourth axis.
- Systematic classification of profiles satisfying (F) ∧ (P) ∧ (D) (hypothetical dark matter candidates, for instance).

**Assessment:** Semi-formal. Each of (F), (P), (D) is a well-established condition from existing derivations; this theorem asserts their joint structure. Distinctness of each pair is rigorous via scaling arguments; necessity of each is rigorous given the source derivations; joint sufficiency is a completeness assertion.

## Open Gaps

1. **Framework-completeness of the triplet.** Joint sufficiency (Proposition 4.1) asserts no fourth viability axis; this is not proved. Investigating whether bootstrap composition, internal consistency (Axiom 3 loop closure), or other framework commitments constitute independent viability axes. *Difficulty: MODERATE-HARD.*

2. **Per-particle verification.** For each SM particle, compute (F), (P), (D) quantitatively and verify simultaneous satisfaction. This would provide a framework-level prediction of the SM mass spectrum given the three mechanisms as inputs. *Difficulty: MODERATE.*

3. **Non-SM profiles.** Could there be profiles satisfying (F) ∧ (P) ∧ (D) that we have not observed — hypothetical dark matter candidates, other stable structures? The triplet predicts the set of viable observers; matching to observation requires accounting for additional profiles. *Difficulty: HARD.*

4. **Composite observers and cross-level viability.** Bootstrap composition creates higher-level observers from collections of lower-level ones. Whether the higher-level observer's viability requires its own (F), (P), (D) satisfaction independently is a question not fully addressed. *Difficulty: MODERATE.*

5. **Macroscopic observers and mass-information reversal.** [Mass Hierarchy](/derivations/particles/mass-hierarchy) §7 notes a mass-information reversal at bootstrap level 3: composite observers transition from topological to structural encoding. The triplet as formulated assumes topological encoding; extension to structural observers requires revisiting (F), (P), (D) in the structural regime. *Difficulty: MODERATE-HARD.*

6. **Relation to the bootstrap fixed-point structure.** [Bootstrap Fixed-Point Existence](/derivations/foundation/bootstrap-fixed-point-existence) establishes the universe as a Kleene fixed point under compactness, dcpo, and Scott continuity prerequisites. Whether the triplet is a consequence of the fixed-point structure, or an independent structural constraint, is not explicitly established. *Difficulty: MODERATE.*

7. **Coherence Lagrangian common-saddle analysis.** Whether (F), (P), (D) can be understood as different boundary-condition regimes of one Coherence Lagrangian calculation — a shared-origin view that doesn't reduce them but shows common structural origin. *Difficulty: HARD.*

## References and further reading

**Framework inputs.**

- [Mass Hierarchy](/derivations/particles/mass-hierarchy) — Theorem 3.1 (WKB crystallization); §7 (topological-structural transition).
- [Observer as an Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code) — three-axis profile structure.
- [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling) — per-cell bit-flip rate; additive-coupling noise; Proposition 2.5 for $d_{\mathrm{req}}$.
- [Observer Pattern Signal](/derivations/foundation/observer-pattern-signal) — Yukawa signal form; (D) axis input.
- [Observer Edges and Mutual Opacity](/derivations/foundation/observer-edges-and-mutual-opacity) — detection edge equation; (D) axis.
- [Profile-Dependent Edges and Confinement](/derivations/foundation/profile-dependent-edges-and-confinement) — (D)-axis failure for free quarks; confinement.
- [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) — Corollary 4.6 operational completeness.
- [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) — Theorem 6.0 Lagrangian dynamics.
- [Bootstrap Fixed-Point Existence](/derivations/foundation/bootstrap-fixed-point-existence) — Kleene fixed-point framework.

**Standard QEC background.**

- Dennis, E., Kitaev, A., Landahl, A., Preskill, J. (2002). *Topological quantum memory.* J. Math. Phys. 43:4452–4505. — Logical error rate $P_L \sim (p/p_{th})^{d/2}$.
