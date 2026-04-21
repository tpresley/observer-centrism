---
title: "5. The Tripartite Viability Theorem"
status: "provisional"
dependsOn: ["foundation/01-pattern-signal-amplitude", "foundation/02-operational-edge", "foundation/03-mutual-opacity", "foundation/04-profile-dependent-edges", "foundation/formation-and-preservation", "foundation/substrate-noise-and-profile-coupling", "foundation/observer-as-error-correcting-code", "particles/mass-hierarchy"]
enablesDerivation: []
tags: ["foundation", "pattern-edges", "error-correction", "viability"]
summary: "An observer is viable iff three independent conditions all hold: (1) Formation — the mass is a WKB crystallization scale at some bootstrap level (Mass Hierarchy Theorem 3.1); (2) Preservation — the QEC code's achieved distance exceeds required distance on all three axes under substrate noise (Formation-and-Preservation); (3) Detection — the edge equation has a finite-r solution for the profile's signal structure (Formalizations 1-4). The three conditions operate in structurally distinct regimes (formation-time substrate-to-code transition; lifetime-long preservation under noise; spatial-instantaneous inter-observer resolution), have incompatible functional dependencies (exponential in 1/g² vs logarithmic in lifetime vs Compton-scale), and are jointly necessary and sufficient for observer existence under the framework's commitments. The observed Standard Model spectrum is the simultaneous-satisfaction set of all three conditions. Free quarks fail condition (3) alone (Formalization 4 signal pathology); sub-preservation-margin masses fail (2); non-crystallized masses fail (1). This theorem completes the research program's consolidation task: the original target of showing the edge fixed-point isomorphic to WKB or Three-Generations has no positive solution under the Option-3 detection-noise formulation — no such isomorphism exists because detection is structurally distinct from mass-selection. What replaces it is the tripartite viability theorem, which achieves the consolidation via a stronger claim: the three mechanisms form a complete axis set for observer existence, with detection as the third leg extending the Formation-and-Preservation pair theorem."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-20
---

## Overview

The pattern-edges-and-mutual-opacity research program began with the conjecture that the bidirectional edge condition, formulated as a self-consistency fixed-point equation in the observer's mass, would have discrete solutions isomorphic to the WKB crystallization scales of [Mass Hierarchy](/derivations/particles/mass-hierarchy) Theorem 3.1 or the misalignment-angle spectrum of [Three Generations](/derivations/particles/three-generations) Theorem 4.2. This conjecture — Prediction 7 of the original research target — aimed to subsume Mass Hierarchy's mass-determination mechanism within the edge structure.

**The conjecture does not hold.** Under the Option-3 detection-noise formulation adopted in [Formalization 2](/derivations/foundation/02-operational-edge) (noise floor is the detecting observer's own $m_A c^2$, not a profile-dependent substrate quantity), the edge equation has no natural multi-valued structure and does not select discrete masses. For any given source-detector mass pair, the edge is a single continuous function of the mass ratio. The edge reflects masses — edge radius is Compton-scale — but does not select them.

**What replaces the isomorphism conjecture is a stronger structural result.** The research program has established that *detection* (signal-resolution crossover) is a framework-level structural mechanism distinct from both *formation* (WKB tunneling) and *preservation* (QEC code viability). The three mechanisms form a complete triplet of observer-viability conditions:

- **Formation**: does the candidate observer ever come into being via substrate tunneling? ([Mass Hierarchy](/derivations/particles/mass-hierarchy) Theorem 3.1; [Formation and Preservation](/derivations/foundation/formation-and-preservation.md))
- **Preservation**: does the observer's integer-invariant profile survive substrate noise over its coherence lifetime? ([Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling.md); [Formation and Preservation](/derivations/foundation/formation-and-preservation.md))
- **Detection**: can other observers resolve this observer via its pattern signal; equivalently, does the observer have a well-defined edge? ([Formalization 2](/derivations/foundation/02-operational-edge); [Formalization 4](/derivations/foundation/04-profile-dependent-edges))

The triplet extends the Formation-and-Preservation *pair* theorem of [Formation and Preservation](/derivations/foundation/formation-and-preservation.md) (which established that formation and preservation are distinct, non-isomorphic mechanisms) by adding the third leg of detection. All three are structurally distinct: they have incompatible functional dependencies on coupling (exponential for formation, logarithmic for preservation, Compton-scale for detection), they operate in different regimes (formation-time vs. lifetime vs. spatial-inter-observer), and none subsumes the others.

**The theorem.** An observer is viable iff all three conditions hold simultaneously. The observed Standard Model spectrum is the simultaneous-satisfaction set; failures in any single condition exclude a profile from being a viable observer. Free quarks fail detection (Formalization 4's signal pathology); hypothetical masses outside the bootstrap crystallization scales fail formation; masses with insufficient QEC margin fail preservation.

**Honest scope.** The theorem is a consolidation rather than a first-principles derivation: each of the three conditions is a theorem or structural-correspondence argument in its own right (inheriting the rigor of its source derivation), and this theorem asserts their joint structure. The distinctness of the three mechanisms is rigorous at the scaling-argument level for each pair. The joint sufficiency (the claim that no fourth independent axis is needed) is a framework-completeness assertion rather than a theorem; a fourth axis could in principle be identified in future work.

## Statement

**Observer Viability Theorem (Tripartite).** *A candidate observer profile $\mathcal{I}_A$ with mass $m_A$ is viable — i.e., corresponds to a stable, detectable, persistent observer in the framework's sense — if and only if all three conditions hold:*

**(F) Formation.** *$m_A$ is a WKB crystallization scale at some bootstrap level: the tunneling probability from substrate to the profile's code space is sufficient for crystallization over cosmological history,*
$$P_{\mathrm{form}}(m_A; \mathcal{I}_A) \cdot \frac{V_4^{\mathrm{cosmo}}}{V_4^{\mathrm{Planck}}} \geq 1$$
*with $P_{\mathrm{form}} \sim e^{-c/g^2}$ by WKB ([Mass Hierarchy](/derivations/particles/mass-hierarchy) Theorem 3.1; [Formation and Preservation](/derivations/foundation/formation-and-preservation.md) Definition 1.1).*

**(P) Preservation.** *The profile's three-axis QEC code achieves sufficient distance to preserve its integer invariants under substrate noise over its coherence lifetime,*
$$d_{\mathrm{achieved}}(m_A) \geq d_{\mathrm{req}}(\mathcal{I}_A; T_{\mathrm{coh}})$$
*on spatial, algebraic, and temporal axes ([Formation and Preservation](/derivations/foundation/formation-and-preservation.md) Definition 1.2; [Substrate Noise](/derivations/foundation/substrate-noise-and-profile-coupling.md) Proposition 2.5).*

**(D) Detection.** *The edge equation from [Formalization 2](/derivations/foundation/02-operational-edge) has a finite-$r$ solution for the profile's pattern signal; equivalently, $A(r; \mathcal{I}_A)$ has Yukawa-like decay at large $r$ (not pathological linear-confining divergence),*
$$\exists\, r_{\mathrm{edge}} \in (0, \infty): \quad A(r_{\mathrm{edge}}; \mathcal{I}_A) = m_B c^2 \text{ for any reference detector } B$$
*([Formalization 1](/derivations/foundation/01-pattern-signal-amplitude); [Formalization 2](/derivations/foundation/02-operational-edge); [Formalization 4](/derivations/foundation/04-profile-dependent-edges) Theorem 7.1).*

**Corollary (Standard Model spectrum).** *The observed Standard Model spectrum is the set of profiles satisfying (F) ∧ (P) ∧ (D):*

- *Each SM fundamental fermion (electrons, muons, taus, neutrinos, up-type quarks, down-type quarks) passes all three.*
- *Each SM gauge boson (photon, $W$, $Z$, gluon-within-hadron) passes all three, with massless-mediator profiles taking specific limits.*
- *Free quarks fail (D) only: they form (F), they would preserve if they existed (P), but they have no well-defined detection edge (D) — hence confinement.*

**Corollary (The triplet is tight).** *None of the three conditions is reducible to the other two. Pairwise distinctness:*

- *Formation ≠ Preservation: [Formation and Preservation](/derivations/foundation/formation-and-preservation.md) Propositions 4.1, 4.2 establish that WKB action $S/\hbar = c/g^2$ and the QEC candidate $(d_{\mathrm{req}}/2)\log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}})$ have incompatible scaling with coupling — one is $1/g^2$-dependent, the other (after cancellation) coupling-independent. No simple-functional identification.*
- *Preservation ≠ Detection: Preservation is coupling-independent (from F&P cancellation); Detection scales as $r_C = \hbar/(mc)$, Compton-dependent. Different functional forms.*
- *Formation ≠ Detection: Formation is exponential in $1/g^2$; Detection is Compton-linear. Different scalings.*

**Corollary (Complete viability axis set).** *The three mechanisms form a complete axis set for observer existence under the framework's current commitments. Every failure mode of observer existence that the framework distinguishes corresponds to failure of at least one of (F), (P), (D). No fourth independent viability axis has been identified.*

## Derivation

### Step 1: Recap the three mechanisms

**Formation — WKB tunneling (Mass Hierarchy).** The mass spectrum of viable observers is set by crystallization at each bootstrap level: $\Lambda_k \sim \Lambda_{k-1} e^{-c/g_k^2}$ ([Mass Hierarchy](/derivations/particles/mass-hierarchy) Theorem 3.1). The exponential suppression in inverse coupling squared is the framework's natural mechanism for the observed mass hierarchy — logarithmically natural ratios of modest couplings produce exponentially separated mass scales.

Formation-time: during cosmological history, substrate fluctuations tunnel into the candidate profile's code space with probability $P_{\mathrm{form}} \sim e^{-S/\hbar} = e^{-c/g^2}$. If $P_{\mathrm{form}} \cdot V_4^{\mathrm{cosmo}}/V_4^{\mathrm{Planck}} \geq 1$, crystallization occurs; otherwise it doesn't.

**Preservation — QEC code viability (Substrate Noise + Formation-Preservation).** Once formed, an observer's profile is a three-axis integer-invariant code ([Observer as an Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code.md)) subject to substrate bit-flip rates $p_{\mathrm{phys}}^{\mathrm{eff}}(\mathcal{I}_A) = p_{\mathrm{phys}}^{\mathrm{geom}} + \sum g_i^2 \eta_i$ ([Substrate Noise](/derivations/foundation/substrate-noise-and-profile-coupling.md) Corollary 4.3). Preservation requires:

$$d_{\mathrm{achieved}}(m_A) \;\geq\; d_{\mathrm{req}}(\mathcal{I}_A;\, T_{\mathrm{coh}}) \;=\; \frac{2 c_{\mathrm{axis}}}{\log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}})} \log(T_{\mathrm{coh}}/\tau_P)$$

on each of the three code axes ([Substrate Noise](/derivations/foundation/substrate-noise-and-profile-coupling.md) Proposition 2.5). [Formation and Preservation](/derivations/foundation/formation-and-preservation.md) Theorem (formation-preservation scaling mismatch) establishes that the required QEC distance has a functional form incompatible with the WKB action, confirming these are distinct mechanisms.

**Detection — pattern edges (this research program).** The observer's pattern signal $A(r; \mathcal{I}_A)$ is a sum of Yukawa components ([Formalization 1](/derivations/foundation/01-pattern-signal-amplitude) Proposition 6.3). External observer $B$ resolves the pattern iff $A(r) \geq m_B c^2$ at some radius $r$; the edge is where equality holds ([Formalization 2](/derivations/foundation/02-operational-edge) Step 2). Detection viability requires a well-defined edge — i.e., the signal decays Yukawa-like at large $r$, crossing the detector's resolution threshold at a finite radius. Free quarks fail this ([Formalization 4](/derivations/foundation/04-profile-dependent-edges) Step 5): their color-channel signal is not Yukawa but linear-confining, and the edge equation has no finite-$r$ solution.

### Step 2: Distinctness — functional-form arguments

**Proposition 2.1 (Formation ≠ Preservation).** *From [Formation and Preservation](/derivations/foundation/formation-and-preservation.md) Propositions 4.1, 4.2: The WKB action scales as $S/\hbar = c/g^2$. The QEC candidate $(d_{\mathrm{req}}/2)\log(p_{th}/p_{\mathrm{phys}}^{\mathrm{eff}})$ simplifies algebraically to $c_{\mathrm{logic}} \log(T_{\mathrm{coh}}/\tau_P)$ — coupling-independent after cancellation by the definition of $d_{\mathrm{req}}$. The two have incompatible functional dependence on coupling. No linear or monomial identification matches.*

**Proposition 2.2 (Preservation ≠ Detection).** *Preservation quantities cancel coupling dependence (by F&P Proposition 3.1); Detection edge $r_{\mathrm{edge}} \approx W(1) r_C = W(1) \hbar/(mc)$ is Compton-scaled and depends on source mass through $r_C$, not on coupling. Different scalings; no identification.*

**Proposition 2.3 (Formation ≠ Detection).** *Formation: $P_{\mathrm{form}} \sim e^{-c/g^2}$, exponential in inverse coupling squared, mass determined by bootstrap level. Detection: $r_{\mathrm{edge}} \sim r_C$, Compton-linear in $1/m$. Different scalings; fails any functional identification.*

**Remark 2.4 (Why the original target conjecture failed).** *Prediction 7 of the original research target proposed that the detection-edge fixed-point would be isomorphic to the WKB crystallization scales (formation). This was contingent on a substrate-noise formulation (the noise floor depends on the observer's profile-coupling), under which the edge equation has coupling-dependent multi-valued structure. Under the Option-3 detection-noise formulation adopted in [Formalization 2](/derivations/foundation/02-operational-edge), the noise floor is the detector's own mass — independent of source profile — so the edge equation's coupling structure is much simpler, and no multi-valued-in-mass solution set emerges. The isomorphism conjecture has no positive target under Option 3. The three mechanisms are genuinely distinct, and the consolidation the target sought is achieved via the triplet framing rather than via reduction.*

### Step 3: Necessity — each condition is required

**Proposition 3.1 (Formation is necessary).** *A profile that fails (F) never crystallizes from substrate in cosmological history. Even if it would preserve and have a well-defined detection edge, no instance of it exists — no substrate-to-code tunneling event occurs. The profile is not realized.*

*Proof.* Direct from the definition of formation. $P_{\mathrm{form}} \cdot V_4^{\mathrm{cosmo}}/V_4^{\mathrm{Planck}} < 1$ means the expected number of instances in cosmological 4-volume is less than one. The profile is present at most as a statistical fluctuation vanishing in the cosmological limit. $\square$

**Proposition 3.2 (Preservation is necessary).** *A profile that fails (P) — $d_{\mathrm{achieved}} < d_{\mathrm{req}}$ on some code axis — decoheres under substrate noise within its intended coherence lifetime. Even if it forms and has a well-defined detection edge, formed instances do not persist as stable observers.*

*Proof.* Direct from QEC: logical error probability $P_L \sim (p_{\mathrm{phys}}/p_{th})^{d/2}$ exceeds $1$ over the lifetime when $d < d_{\mathrm{req}}$ ([Substrate Noise](/derivations/foundation/substrate-noise-and-profile-coupling.md) Proposition 2.5). The integer-invariant profile randomizes; the observer's identity does not persist. $\square$

**Proposition 3.3 (Detection is necessary).** *A profile that fails (D) — no finite-$r$ edge solution — lacks a well-defined spatial boundary as a pattern. The observer cannot participate in inter-observer relations: by [Formalization 3](/derivations/foundation/03-mutual-opacity) (mutual opacity), inter-observer information transfer requires that each observer have a finite edge beyond which it is mutually opaque to others. A pathological-signal profile has no such edge; it cannot be a peer in the observer network.*

*Proof.* By the framework's observer-centrism ([Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence.md) Corollary 4.6, operational completeness of the sheaf), every observer is defined by its relations with other observers. A pattern with no finite edge cannot be in well-defined relation with peer observers at any distance — the signal either dominates the detection threshold at all distances (not physical for any bounded pattern) or fails to have the Yukawa structure required for finite-amplitude radial decay. The former contradicts finite coherence content (Axiom 1); the latter is the free-quark case of Formalization 4. Either way, the profile fails to constitute a framework observer. $\square$

**Corollary 3.4 (Tripartite necessity).** *All three conditions are necessary for observer viability: failure of any single condition is sufficient to exclude the profile. No single condition implies the others, by Propositions 2.1–2.3 (functional-form distinctness).*

### Step 4: Joint sufficiency — the complete axis set

**Proposition 4.1 (Joint sufficiency, conditional on framework-completeness).** *Under the framework's current commitments — Axioms 1–3, bootstrap hierarchy, three-axis QEC code, pattern-edge structure — (F) ∧ (P) ∧ (D) are jointly sufficient for observer viability: any profile satisfying all three is realized as a stable, detectable observer, and the observed SM spectrum consists of exactly such profiles.*

**Structural argument.** A profile satisfying (F) has at least one instance formed in cosmological history. A profile satisfying (P) preserves its integer-invariant profile against substrate noise over its lifetime. A profile satisfying (D) has a well-defined operational edge and can be in relation with other observers. These three together exhaust the framework's conditions on observer existence: there is nothing else the framework requires of a pattern to be a viable observer.

**Remark 4.2 (What this proposition does not prove).** *Joint sufficiency is an assertion about framework-completeness — that no fourth condition is needed because the framework does not yet identify one. This is not a theorem proving the framework complete; it is a claim that the current axis set suffices for known cases. A fourth axis could in principle be identified: for instance, a bootstrap-composition viability condition (whether the profile composes into higher-level observers) might be argued to be a distinct fourth condition rather than an extension of (F). Investigating whether such a fourth axis is genuinely independent is a structural question for future work.*

**Remark 4.3 (Comparison with the observed SM spectrum).** *Each SM fundamental particle satisfies (F) ∧ (P) ∧ (D):*

- *Electrons, muons, taus, neutrinos: formation by WKB at appropriate bootstrap level; preservation with $10^{15}$–$10^{25}$ margins ([Formation and Preservation](/derivations/foundation/formation-and-preservation.md) Remark 6.2); detection at Compton scale with Yukawa signal.*
- *Up-type and down-type quarks as constituents of hadrons: same. Free quarks isolated fail (D) alone, not (F) or (P).*
- *Photon: formation of the minimal EM mediator profile; preservation in the massless limit (gauge-mediator exemption, [Substrate Noise](/derivations/foundation/substrate-noise-and-profile-coupling.md) Corollary 6.1); detection with Coulomb $1/r$ signal at infinite range.*
- *$W, Z$: analogous with massive-mediator Yukawa.*
- *Gluons: formation and preservation analogous; detection only within hadrons where color-neutral composite has well-defined edge.*

### Step 5: The triplet as a structural extension of Formation-Preservation

**Proposition 5.1 (Extending the Formation-Preservation pair theorem).** *[Formation and Preservation](/derivations/foundation/formation-and-preservation.md) established that formation and preservation are two distinct necessary conditions for observer existence, forming a pair theorem with scaling-mismatch at the functional level. The pattern-edges research program (Formalizations 1-4) establishes detection as a third distinct mechanism, extending the pair to a triplet. The pair's scaling-mismatch argument generalizes: detection has its own distinctive scaling (Compton) differing from both formation (exponential) and preservation (logarithmic).*

**Proposition 5.2 (Detection is neither formation nor preservation — but interacts with both).**

- *Detection interacts with formation: the detection edge is at the Compton scale of the source's mass, which is set by formation (WKB). Detection reflects masses selected by formation without determining them.*
- *Detection interacts with preservation: the detection-viability criterion (finite edge) and preservation-viability criterion (code distance) both depend on profile structure. Profiles that fail detection (free quarks) generally fail preservation too (high-color-coupling → high noise → small margin) but the mechanisms are logically distinct: detection fails from signal pathology, preservation fails from noise-threshold crossing.*
- *Detection does not independently select masses: given a mass $m$, detection determines where $r_{\mathrm{edge}}$ is; it does not determine which $m$ values are viable. Mass selection is formation's domain.*

**Remark 5.3 (The original conjecture as a special case).** *If one had adopted Option 1 (substrate-noise formulation with $\mathcal{N}(\mathrm{profile}) \sim \sum g_i^2 \eta_i$), the detection-edge equation's dependence on profile-coupling would couple mass selection to detection. In principle, under that formulation, the edge equation could have multi-valued structure in $m$ (a fixed-point set), and this set might have matched WKB crystallization scales. This was Prediction 7 of the original target. Under Option 3, this connection is broken by design: detection-noise depends on detector's own mass, not source's profile. The isomorphism conjecture has no target; the three mechanisms are cleanly separated. This is a feature, not a bug — the triplet framing is stronger than an isomorphism reduction would be, because it preserves the independence of the three regimes.*

### Step 6: Consistency with observed physics

**Proposition 6.1 (SM as the simultaneous-satisfaction set).** *The Standard Model spectrum is, empirically, the set of observed viable observers. Under the triplet theorem, SM = (F)-viable ∩ (P)-viable ∩ (D)-viable. Each SM particle passes all three; each non-observed profile fails at least one.*

**Proposition 6.2 (Confinement as (D)-failure).** *Free quarks satisfy (F) — they form at the QCD bootstrap level — and would satisfy (P) — their QEC code preservation is viable within confining hadrons. They fail (D) alone: color-channel signal is not Yukawa for isolated sources ([Formalization 4](/derivations/foundation/04-profile-dependent-edges) Proposition 5.1). The triplet theorem renders confinement a (D)-axis failure: free quarks are not viable as isolated observers because they fail the detection-viability criterion.*

*Color-neutral composites (hadrons) satisfy all three: (F) by binding at QCD scale, (P) with preservation margin, (D) with Yukawa-screened exterior color signal at the hadron scale ([Formalization 4](/derivations/foundation/04-profile-dependent-edges) Proposition 6.3). Hadrons are the viable observer profiles at QCD bootstrap level.*

**Proposition 6.3 (Massless gauge mediators as limits).** *Photon and gluon profiles satisfy (F) ∧ (P) ∧ (D) in specific limits:*

- *Formation: mediator profile at appropriate gauge-sector crystallization.*
- *Preservation: structural exemption from own-channel noise ([Substrate Noise](/derivations/foundation/substrate-noise-and-profile-coupling.md) Corollary 6.1) drives the minimum-viable mass to zero.*
- *Detection: Coulomb $1/r$ (photon) or hadron-confined Yukawa (gluon) gives finite-edge signal.*

*The massless limit is structural, not input.*

**Remark 6.4 (Heuristic quantitative consistency).** *[Formation and Preservation](/derivations/foundation/formation-and-preservation.md) Theorem (structural margin ratio) derives the observed $10^{15}$–$10^{25}$ preservation margins across the SM spectrum. Under the triplet theorem, this is the natural margin when (F) and (P) are both satisfied — WKB-selected masses at bootstrap crystallization always satisfy preservation with large margin because formation exponentials dominate over preservation logarithms. The detection condition (D) at these masses is the Compton-scale edge, which is met by the Yukawa signal structure. The margin pattern is a consequence of the triplet structure with SM-scale couplings.*

### Step 7: What the triplet theorem accomplishes for the research program

**The research program's goal.** The pattern-edges-and-mutual-opacity research program set out to formalize a proposal that observer boundaries are operational (signal-to-noise crossovers) rather than ontic, with the ambitious payoff being a unifying mass-determination mechanism (Prediction 7 — edge fixed-point isomorphic to WKB or Three-Generations).

**What the program delivered:**

1. [**Formalization 1**](/derivations/foundation/01-pattern-signal-amplitude): Pattern signal form from the Coherence Lagrangian — Yukawa at Compton scale.
2. [**Formalization 2**](/derivations/foundation/02-operational-edge): Operational edge as signal-resolution crossover; same-mass Compton scale.
3. [**Formalization 3**](/derivations/foundation/03-mutual-opacity): Mutual opacity as a theorem — symmetric exterior cancellation via integer channels.
4. [**Formalization 4**](/derivations/foundation/04-profile-dependent-edges): Profile-dependent edges; confinement as signal-side pathology; range hierarchy from mediator masses.
5. **Formalization 5** (this derivation): Tripartite viability theorem — observer existence = (F) ∧ (P) ∧ (D).

**What the program did not deliver (but redirected productively):**

- The edge fixed-point isomorphism with WKB or Three-Generations does not hold under Option 3 (the framework-consistent detection-noise formulation). The isomorphism conjecture had no positive solution.
- This was a *productive* negative result: it forced the recognition that detection is a third mechanism distinct from formation and preservation, which is the stronger structural claim.

**Net contribution.** The research program's contribution to the framework is the articulation of detection as a framework-level structural mechanism, completing the viability triplet (F) ∧ (P) ∧ (D). Observer existence is now structurally characterized as simultaneous satisfaction of three distinct conditions, each with independent content and independent empirical signatures.

## Consequences

**C1. Observer viability is tripartite.** (F) ∧ (P) ∧ (D) is the complete axis set for observer existence under the framework's current commitments. The SM spectrum is the simultaneous-satisfaction set.

**C2. The three mechanisms are structurally distinct.** Formation: exponential in coupling (WKB). Preservation: logarithmic in lifetime, coupling-cancelled (QEC). Detection: Compton-linear in mass (pattern edges). Pairwise-incompatible scalings.

**C3. Confinement is a (D)-axis failure.** Free quarks fail detection (no finite edge for isolated color); hadrons satisfy (D). The triplet makes confinement a specific viability-axis failure rather than a mixed formation/preservation issue.

**C4. Massless gauge mediators are limits of all three conditions.** Photon and gluon satisfy (F), (P), (D) in their respective massless / confined-composite limits. No fine-tuning; structural.

**C5. The original edge-fixed-point isomorphism conjecture is refuted by structural incompatibility.** Under Option 3's detection-noise formulation, detection is too decoupled from profile structure to reproduce the WKB mass-selection pattern. The three mechanisms are genuinely distinct; no isomorphism exists.

**C6. The research program completes a pair theorem into a triplet theorem.** [Formation and Preservation](/derivations/foundation/formation-and-preservation.md) established the formation/preservation pair as structurally distinct. This program adds detection as the third structurally-distinct mechanism, extending to a triplet.

**C7. Preservation margins $10^{15}$–$10^{25}$ are the structural consequence.** Large SM preservation margins fall out of the triplet: formation-exponential dominates preservation-logarithmic at SM couplings, and detection-Compton completes the viability picture.

**C8. Bootstrap composition is not automatically a fourth axis.** Higher-level composite observers satisfy their own (F) ∧ (P) ∧ (D) at the composite level. Whether bootstrap composition requires an additional viability condition (e.g., cross-level consistency beyond the per-level triplet) is a question for future work.

## Rigor Assessment

**Rigorous (direct consolidation of source theorems):**

- Proposition 2.1 (Formation ≠ Preservation): direct from [Formation and Preservation](/derivations/foundation/formation-and-preservation.md) Propositions 4.1, 4.2 (rigorous functional-form argument).
- Propositions 3.1, 3.2, 3.3 (necessity of each condition): each follows directly from the corresponding source derivation's definitions and theorems.
- Proposition 6.1 (SM as simultaneous-satisfaction): empirical consistency check.
- Proposition 6.2 (confinement as (D)-failure): direct from [Formalization 4](/derivations/foundation/04-profile-dependent-edges) Theorem 7.1 and Proposition 6.3.

**Semi-formal (structural distinctness from scaling arguments):**

- Proposition 2.2 (Preservation ≠ Detection): scaling-argument comparison; confirms no simple-functional identification but doesn't rule out richer couplings.
- Proposition 2.3 (Formation ≠ Detection): same.
- Proposition 3.3 (detection necessity): structural argument invoking observer-centrism; relies on the framework-completeness of the sheaf description ([Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence.md) Corollary 4.6).

**Conjectural (framework-completeness assertions):**

- Proposition 4.1 (joint sufficiency): asserts no fourth independent axis is needed; this is a claim about the framework's current commitments, not a proof of framework-completeness.
- Proposition 5.1 (triplet as complete): analogous.

**Deferred:**

- Systematic per-particle quantitative verification of (F) ∧ (P) ∧ (D) for each SM particle.
- Investigation of whether composition-across-levels is a distinct fourth axis.
- Examination of whether other (non-SM) profiles satisfying (F) ∧ (P) ∧ (D) could exist — hypothetical dark matter candidates, for instance.

**Assessment:** Semi-formal. The theorem is primarily a structural consolidation: each of (F), (P), (D) is a well-established condition from existing derivations, and this theorem asserts their joint structure. Distinctness of each pair is rigorous via scaling arguments; necessity of each is rigorous given the source derivations; joint sufficiency is a completeness assertion rather than a theorem. The main novel content is the framing of (D) as a third distinct mechanism, completing the Formation-Preservation pair into a triplet.

## Open Gaps

1. **Framework-completeness of the triplet.** Joint sufficiency (Proposition 4.1) asserts no fourth viability axis; this is not proved. Investigating whether bootstrap composition, internal consistency (Axiom 3 loop closure), or other framework commitments constitute independent viability axes is a structural program. *Difficulty: MODERATE-HARD.*

2. **Per-particle verification.** For each SM particle, compute (F), (P), (D) quantitatively and verify simultaneous satisfaction. This would provide a framework-level prediction of the SM mass spectrum given the three mechanisms as inputs. *Difficulty: MODERATE; depends on precise values of $c_k, g_k, \eta_i$ parameters.*

3. **Non-SM profiles.** Could there be profiles satisfying (F) ∧ (P) ∧ (D) that we have not observed — hypothetical dark matter candidates, other stable structures? The triplet theorem predicts the set of viable observers; matching to observation requires ruling out or accounting for such additional profiles. *Difficulty: HARD.*

4. **Composite observers and cross-level viability.** Bootstrap composition creates higher-level observers from collections of lower-level ones. Whether the higher-level observer's viability requires its own (F), (P), (D) satisfaction independently, or whether it inherits from the constituents' viability, is a question not fully addressed. *Difficulty: MODERATE.*

5. **Macroscopic observers and mass-information reversal.** [Mass Hierarchy](/derivations/particles/mass-hierarchy.md) §7 notes a mass-information reversal at bootstrap level 3: composite observers transition from topological to structural encoding. The triplet theorem as formulated assumes topological encoding; extension to structural observers requires revisiting (F), (P), (D) in the structural regime. *Difficulty: MODERATE-HARD.*

6. **Relation to the bootstrap fixed-point structure.** [Bootstrap Fixed-Point Existence](/derivations/foundation/bootstrap-fixed-point-existence.md) establishes the universe as a Kleene fixed point under compactness, dcpo, and Scott continuity prerequisites. Whether the triplet theorem is a consequence of the fixed-point structure, or an independent structural constraint, is not explicitly established. *Difficulty: MODERATE.*

## References and further reading

**Framework inputs.**

- [Mass Hierarchy](/derivations/particles/mass-hierarchy) — Theorem 3.1, WKB crystallization scales; (F) axis.
- [Formation and Preservation](/derivations/foundation/formation-and-preservation.md) — Formation vs. preservation pair theorem; scaling-mismatch arguments.
- [Substrate Noise and Profile-Dependent Coupling Modulation](/derivations/foundation/substrate-noise-and-profile-coupling.md) — QEC preservation; (P) axis.
- [Observer as an Error-Correcting Code](/derivations/foundation/observer-as-error-correcting-code.md) — three-axis profile structure.
- [Pattern Signal Amplitude as a Function of Distance](/derivations/foundation/01-pattern-signal-amplitude.md) — pattern signal Yukawa form; (D) axis input.
- [Observer Edge as Signal-Resolution Crossover](/derivations/foundation/02-operational-edge.md) — detection edge equation; (D) axis.
- [Mutual Opacity Theorem](/derivations/foundation/03-mutual-opacity.md) — symmetric exterior cancellation; supports (D).
- [Profile-Dependent Edges and Confinement as Signal Pathology](/derivations/foundation/04-profile-dependent-edges.md) — (D)-axis failure for free quarks; confinement from detection-viability failure.
- [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence.md) — Corollary 4.6 operational completeness; foundation for observer-centrism.
- [Bootstrap Fixed-Point Existence](/derivations/foundation/bootstrap-fixed-point-existence.md) — Kleene fixed-point framework.

**Research-program context.** This is step 5 and the culminating derivation of the pattern-edges-and-mutual-opacity research program (`research-targets/pattern-edges-and-mutual-opacity.md`). The original target (Prediction 7) conjectured an edge fixed-point isomorphism with WKB or Three-Generations mass-selection. Under the Option-3 detection-noise formulation adopted in Formalization 2, this conjecture has no positive solution — detection is structurally too decoupled from profile-coupling to reproduce WKB-style mass selection. The research program's productive redirection was to recognize detection as a third mechanism distinct from both formation and preservation, forming the tripartite viability theorem stated here. The triplet extends the Formation-and-Preservation pair theorem into a complete viability axis set for observer existence under the framework's current commitments.
