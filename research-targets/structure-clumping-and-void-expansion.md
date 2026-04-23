# Structure Clumping and Void Expansion as Joint Consistency Solutions

**Type**: Research target (closed — negative/clarifying result, no consolidation)
**Status**: Closed 2026-04-22. Correlation confirmed observationally (Step 1); Step 2 determined the original target's spatial $\Lambda^{\text{eff}}(x)$ formulation was mis-posed; no new framework content produced. Two speculative residual flags recorded for future programs.
**Last updated**: 2026-04-22

## Framing note (load-bearing)

The natural shorthand for this program — "clumping causes void expansion" — uses causal language that fails here. In the framework, projections and relations are simultaneous consistency solutions of the coherence-conservation equations, not temporal cause-and-effect sequences. What this program proposes to derive is not *that clumping causes expansion*, but that **structure clumping at the network level and metric expansion in the voids are jointly forced by the same self-consistency condition** — they are two aspects of a single solution, not two ends of a causal chain.

Preserving this framing throughout is essential to the program. The deliverable is a *correlation theorem*, not a causal mechanism.

## The goal

**Derive a quantitative prediction for void expansion rates as a function of adjacent filament density, from framework-internal coherence accounting (Axiom 1 on Cauchy slices + level-indexed $\Lambda_n^{\text{eff}}$ from [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Step 8 + continuous-discrete duality from [Continuous-Discrete Duality](../site/src/content/derivations/foundation/continuous-discrete-duality.md)). Cross-check the prediction against observed cosmic void kinematics from existing large-scale structure surveys.**

The framework has the pieces in hand: (i) global coherence conservation on Cauchy slices ([Coherence Conservation](../site/src/content/derivations/axioms/coherence-conservation.md) Axiom 1 + Proposition 5.4 + Corollary 5.5a), (ii) an explicit formula $\Lambda_n^{\text{eff}} = 3\pi/(S^{(n)}\ell_P^2)$ relating level-indexed cosmological constant to level-indexed entropy, (iii) a co-formation principle ([Continuous-Discrete Duality](../site/src/content/derivations/foundation/continuous-discrete-duality.md)) stating that discrete observer clustering and continuous metric are co-formed duals. These ingredients together should give a structural relation between observed filament density and adjacent void expansion — but the relation has never been made explicit or tested.

## Why the target is plausible

**Four framework commitments stand at the cosmological-structure level, together supplying the derivation's inputs:**

1. **Global coherence conservation on Cauchy slices.** [Coherence Conservation](../site/src/content/derivations/axioms/coherence-conservation.md) Proposition 5.4 + Corollary 5.5a: the total coherence on any Cauchy slice is an integer multiple of $\hbar\omega_0$, invariant across slices at a given bootstrap level. This is the *budget* — not a distinguishability budget (which would be a misreading), but a coherence budget. Redistribution of coherence between accessible and inaccessible partitions is constrained by this global invariant.

2. **Level-indexed effective cosmological constant.** [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Definition 8.2: $\Lambda_n^{\text{eff}} = 3\pi/(S^{(n)}\ell_P^2)$, where $S^{(n)}$ is the inaccessible coherence (entropy) at bootstrap level $n$. Different levels project different effective cosmological constants. The formula is explicit; the remaining question is how to apply it across spatial regions with different structure density.

3. **Continuous-discrete duality.** [Continuous-Discrete Duality](../site/src/content/derivations/foundation/continuous-discrete-duality.md) asserts that discrete observer network structure and continuous metric geometry are co-formed, each constraining the other. If the discrete side clusters (forms new relational invariants at higher bootstrap levels), the continuous side must adjust to preserve the duality. The derivation states this as a consistency condition rather than computing the specific adjustment.

4. **Observer-projected spacetime with presheaf gluing structure.** [Observer-Projected Spacetime](../site/src/content/derivations/foundation/observer-projected-spacetime.md) Remark 1.3: the cosmological constant hierarchy is the obstruction class of the presheaf's failure to reduce to a single manifold across levels. Different bootstrap levels project different de Sitter patches; their cross-level disagreement is the cosmological-constant hierarchy. A program that computes void expansion from spatially-varying structure density is computing a *local* instance of this obstruction class — not globally (which is the 120-order-of-magnitude problem) but locally (tractable because the local variation is observationally constrained).

Each piece is already in the framework. The derivation's content is in composing them into a quantitative prediction.

## What the target buys

**B1. A specific testable cosmological prediction.** Void expansion rates are measured quantities (BOSS, DES, DESI void catalogs; Sutter et al. 2012; Hamaus et al. 2020). A framework-internal prediction of the relationship between void expansion and adjacent filament density would be cross-checkable against existing data on scales from ~10 Mpc to ~100 Mpc.

**B2. Framework content for "structure-formation-expansion correspondence."** The framework currently asserts level-indexed $\Lambda_n^{\text{eff}}$ without applying it to observed structure. This program converts the abstract formula into a concrete claim about large-scale-structure kinematics.

**B3. Empirical test of the level-indexed $\Lambda_n^{\text{eff}}$ formula.** If the prediction matches observation, the level-indexed formula gains substantial empirical support. If it fails, the failure mode (which regions disagree, by how much) constrains the specific form of the formula and potentially refines Observer Loop Viability's Step 8.

**B4. Distinguishing prediction from $\Lambda$CDM.** Standard $\Lambda$CDM takes $\Lambda$ as spatially uniform. The framework's level-indexed structure predicts spatial variation correlated with local structure density. Even if the variation is small, it should be detectable at sufficient statistical precision in large void catalogs — and it is qualitatively distinct from standard cosmology.

**B5. Clarification of the "causal language fails" observation.** A rigorous derivation of the clumping-expansion correspondence as joint consistency solutions — not cause-effect — would be the first framework result making the coherence-conservation self-consistency equation explicit in observed phenomenology. Valuable beyond this specific program as a demonstration of how to state framework predictions without invoking misleading temporal-causal language.

**B6. Potential bridge to the hierarchical-geometry functor.** The level-indexed $\Lambda_n^{\text{eff}}$ applied spatially connects naturally to the [hierarchical-geometry](../site/src/data/future-targets.json) research target, which formalizes the geometry functor $G: \mathbf{Obs} \to \mathbf{Geom}$. If the void-expansion derivation requires $G$, it becomes a specific application of that separate target; if it can proceed without $G$, it provides an independent line of evidence for the level-indexed-geometry picture.

## The central challenge

**Multi-fold:**

1. **Mapping observed structure density to bootstrap level.** Filaments, clusters, and voids correspond to different ontological scales in standard cosmology. The framework's bootstrap levels give explicit mass-scale categories (Planck, GUT, EW, QCD, neutrino) but no immediate map to large-scale-structure categories. Establishing a level → structure-scale correspondence is a prerequisite.

2. **Translating discrete coherence accounting to continuous void-filament fields.** Axiom 1's integer coherence budget on Cauchy slices is a discrete object. Observational void kinematics is a continuous field. A rigorous bridge is needed — probably leveraging [Continuous-Discrete Duality](../site/src/content/derivations/foundation/continuous-discrete-duality.md) plus the geometry functor (if available).

3. **Local vs global $\Lambda^{\text{eff}}$.** The formula $\Lambda_n^{\text{eff}} = 3\pi/(S^{(n)}\ell_P^2)$ uses the level-$n$ *total* entropy. Applying it locally requires a spatially-resolved version: $\Lambda^{\text{eff}}(x)$ depending on the local structure density rather than the global entropy. This generalization is not currently formalized.

4. **Causal-language framing.** The derivation must state results as joint consistency solutions of the coherence-conservation self-consistency equation, not as "clumping at time $t_1$ produces expansion at time $t_2 > t_1$." Observationally, we measure a static (or slowly-evolving) snapshot; the derivation should match this phenomenology rather than invoking a time-ordered mechanism.

5. **$\Lambda$CDM consistency check.** Standard $\Lambda$CDM fits observations extremely well with uniform $\Lambda$. Any framework-predicted spatial variation in $\Lambda^{\text{eff}}$ must be small enough to be compatible with CMB + BAO + SN Ia data, while still producing detectable void-kinematics signatures. Calibrating these constraints is non-trivial.

## Candidate approaches

Three routes to the derivation, each with different tractability and risk:

**Route A (analytical, fastest).** Work out the filament-void correspondence in a simple toy model: a single spherical filament embedded in an isotropic void, both at a fixed bootstrap level, with the level-indexed $\Lambda^{\text{eff}}$ formula applied directly to each region via the local structure density. Derive the expansion-rate-vs-density relation analytically. Compare to observed mean void profile (stacked-void analysis). Estimated scope: 2–4 weeks.

**Route B (simulation, mid-term).** Run an N-body simulation with modified gravity rule reflecting the framework's coherence-density-gradient picture ([Gravity](../site/src/content/derivations/spacetime/gravity.md)) plus level-indexed $\Lambda^{\text{eff}}$ varying with local structure. Compare large-scale structure output to standard $\Lambda$CDM + observed galaxy distribution. Estimated scope: 2–4 months plus substantial compute resources.

**Route C (observational, quickest test).** Skip the derivation; directly cross-correlate observed void expansion rates with adjacent filament density using existing void-catalog data. If the correlation is absent or has the wrong functional form, the program stops early. If the correlation is present, proceed to derive the specific functional form from framework content. Estimated scope: 1–2 months for the observational analysis; feeds into Route A.

**Recommended order**: Route C → Route A → Route B (if A suggests a matter-sector modification that requires simulation).

## Specific predictions

If the program succeeds:

1. **Correlation existence.** Void expansion rate correlates with adjacent filament density. Qualitatively: higher adjacent filament density → larger void expansion rate.

2. **Functional form.** The relation follows from $\Lambda^{\text{eff}} \propto 1/S$: void-side $\Lambda^{\text{eff}}$ scales inversely with void-side entropy, which in turn scales with the void-side's fraction of the total Cauchy-slice coherence. Since clumping concentrates coherence in filaments, void-side entropy decreases, and void-side $\Lambda^{\text{eff}}$ increases.

3. **Specific gradient magnitude.** Computable from the framework's cosmological-constant hierarchy, the observed mean void-filament density contrast, and the structure-level assignment from Challenge 1 above.

4. **Scale dependence.** Different bootstrap levels project different $\Lambda^{\text{eff}}$; the correspondence may depend on void size (which bootstrap level a void of given size corresponds to).

5. **$\Lambda$CDM consistency.** The total (volume-averaged) $\Lambda$ should match the observed $\Lambda \approx 1.1\times 10^{-52}\,\text{m}^{-2}$. Local variations compatible with CMB and BAO measurements.

## What would falsify or require postulating

1. **No correlation.** If observed void expansion is uncorrelated with adjacent filament density (beyond standard $\Lambda$CDM prediction), the coherence-accounting-driven-expansion mechanism is empirically absent. Strong negative result. Would require revising either the level-indexed $\Lambda^{\text{eff}}$ formula or the continuous-discrete duality framing.

2. **Wrong functional form.** If a correlation exists but doesn't match the $\Lambda^{\text{eff}} = 3\pi/(S^{(n)}\ell_P^2)$ prediction, the specific formula is wrong. Could indicate errors in Observer Loop Viability Step 8's derivation or in the spatial-application generalization.

3. **Level-indexing failure.** If the observed correlation doesn't show the expected scale-dependence (i.e., is approximately scale-invariant rather than bootstrap-level-indexed), the level-indexed $\Lambda^{\text{eff}}$ structure is probably wrong and should be revised.

4. **Causal-language failure.** If the rigorous derivation turns out to *require* temporal causation (clumping in past produces expansion in future) rather than simultaneous consistency, the framework's "projections are consistency solutions" framing has a subtle problem. This would be structurally informative — it would suggest that coherence conservation alone is not the full story and some additional temporal structure is needed.

5. **Overconstrained against $\Lambda$CDM.** If the framework predicts local $\Lambda$ variations large enough to conflict with CMB/BAO/SN data, the framework's cosmological structure is in trouble. Unlikely, because the void-expansion variations would be at small relative amplitude, but worth verifying.

## Formalization path

Concrete steps from target to derivation. Expected scope is 2–4 months for the full program including observational test; 1 month for the minimal analytical derivation.

### 1. Observational scoping (Route C)

**Task**: Determine empirically whether void expansion rates correlate with adjacent filament density in existing surveys. If no correlation → halt program and report. If correlation → proceed.

**Tools**: BOSS, DES, DESI void catalogs; Hamaus et al.'s stacked-void methodology; filament-identification algorithms (DisPerSE, Nexus+).

**Output**: Correlation coefficient ± functional form estimate for void-wall expansion vs. adjacent filament density.

### 2. Framework-internal derivation of level-indexed $\Lambda^{\text{eff}}(x)$

**Task**: Generalize Observer Loop Viability Step 8's global $\Lambda_n^{\text{eff}} = 3\pi/(S^{(n)}\ell_P^2)$ to a spatially-resolved version $\Lambda^{\text{eff}}(x)$. Requires:
- Local entropy decomposition: how does the Cauchy-slice total $S^{(n)}$ partition spatially?
- Structural assignment: which spatial regions correspond to which bootstrap level?
- Consistency with Axiom 1 Proposition 5.4 (Cauchy-slice conservation, global).

**Tools**: Observer Loop Viability Step 8; Coherence Conservation Prop 5.4 + Cor 5.5a; Continuous-Discrete Duality; Gravity derivation for the density-gradient → curvature link.

**Output**: Explicit expression for $\Lambda^{\text{eff}}(x)$ given a local structure-density field.

### 3. Toy-model filament-void derivation (Route A)

**Task**: In a simple analytical setup (spherical filament in isotropic void), compute the predicted void expansion profile from the Step-2 expression. Compare to observed mean void profiles.

**Tools**: Step-2 output; standard void-profile theory (Hamaus et al. 2014); FLRW with spatially-varying $\Lambda^{\text{eff}}$.

**Output**: Predicted void-wall expansion rate as a function of adjacent filament density. Compared to observed value (from Step 1).

### 4. Cosmic-consistency verification

**Task**: Verify that the predicted local $\Lambda^{\text{eff}}$ variation is compatible with global cosmological measurements (CMB, BAO, SN Ia). Compute volume-averaged $\Lambda$ from the predicted $\Lambda^{\text{eff}}(x)$ and check against observation.

**Tools**: Standard cosmological-parameter fits (Planck 2018); predicted $\Lambda^{\text{eff}}(x)$ from Step 3.

**Output**: Pass/fail verdict on cosmological consistency. If pass, the framework-internal prediction is observationally viable; if fail, the program has uncovered a tension that must be resolved.

### 5. N-body simulation (Route B, optional)

**Task**: If Steps 3–4 suggest a matter-sector modification, run a modified-gravity N-body simulation to test whether the framework's coherence-density-gradient picture reproduces observed large-scale structure.

**Tools**: GADGET or equivalent N-body code; modified gravity implementation; Planck-calibrated initial conditions.

**Output**: Predicted matter power spectrum compared to observed; pass/fail on large-scale structure.

### 6. Consolidation

**Task**: Consolidate Steps 1–5 findings into framework-level derivation(s). Expected shape: one new derivation (`cosmology/coherence-accounting-void-expansion.md` or similar), updates to [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Step 8 (generalizing to spatially-resolved form), and possibly updates to [Cosmological Constant](../site/src/content/derivations/cosmology/cosmological-constant.md) and [Dark Energy Equation of State](../site/src/content/derivations/cosmology/dark-energy-equation-of-state.md).

**Output**: New framework content matching standard derivation style; research target retained as historical record.

## Current status

**Formally articulated**: yes (this document).

**Formalized**: no. Prerequisite framework content ([Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md), [Continuous-Discrete Duality](../site/src/content/derivations/foundation/continuous-discrete-duality.md)) is in place; spatial generalization of $\Lambda^{\text{eff}}$ and observational cross-check are the remaining work.

**Tractability**: moderate. Route C (observational) is low-risk and short-scoped; Route A (analytical toy model) is medium-risk but well-scoped; Route B (simulation) is higher-risk but highest-payoff. The program has clean pass/fail checkpoints at the end of Steps 1 and 4, allowing early termination if the framework prediction is incompatible with observation.

**Primary risk**: The level-indexed $\Lambda^{\text{eff}}$ formula is global, not spatially-resolved. Generalizing it locally (Step 2) may require framework-internal structural work beyond what's currently derived — potentially requiring the hierarchical-geometry functor formalization as a prerequisite. If so, this program depends on that separate target and becomes multi-month.

**Secondary risks**: (a) observed void kinematics may simply not correlate strongly with adjacent density (Route C pass/fail); (b) if they do correlate, the functional form may not match the framework's prediction; (c) the bootstrap-level assignment for cosmic structure may not be unique or well-defined.

**Primary payoff**: a quantitative cosmological prediction testable against existing data, cleanly distinguishing framework phenomenology from standard $\Lambda$CDM.

## Related framework material

**Derivations directly relevant**:

- [Coherence Conservation](../site/src/content/derivations/axioms/coherence-conservation.md) — Axiom 1; Proposition 5.4 (Cauchy-slice conservation); Corollary 5.5a (integer quantization).
- [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) — Step 8 (level-indexed $\Lambda_n^{\text{eff}}$); Definition 8.2.
- [Continuous-Discrete Duality](../site/src/content/derivations/foundation/continuous-discrete-duality.md) — co-formation principle; the structural coupling between clustered discrete structure and continuous metric.
- [Observer-Projected Spacetime](../site/src/content/derivations/foundation/observer-projected-spacetime.md) — presheaf structure; cosmological-constant hierarchy as obstruction class.
- [Gravity](../site/src/content/derivations/spacetime/gravity.md) — coherence-density-gradient → curvature mechanism.
- [Entropy](../site/src/content/derivations/thermodynamics/entropy.md) — entropy as inaccessible coherence; the $S$ in $\Lambda_n^{\text{eff}} = 3\pi/(S\ell_P^2)$.
- [Cosmological Constant](../site/src/content/derivations/cosmology/cosmological-constant.md) — existing framework content on $\Lambda$ (non-viable; retained with honest assessment).
- [Dark Energy Equation of State](../site/src/content/derivations/cosmology/dark-energy-equation-of-state.md) — $w = -1$ from coherence conservation; prior framework result relevant for this program's $\Lambda$ structure.

**Related research targets**:

- [hierarchical-geometry](../site/src/data/future-targets.json) — geometry functor formalization; potentially a prerequisite for Step 2 above. Joint progress may be natural.
- [Bootstrap fixed-point conjectures](../site/src/content/derivations/interactions/bootstrap.md) Conjectures 7.1–7.2 — long-term structural grounding for level-indexed $\Lambda^{\text{eff}}$.

## Context from the originating conversation (2026-04-21)

**User's initial framing**. The user described an intuition that coherence-conservation-like accounting should produce an expansion response to observed clumping: "if observer A projects observers $O_1, \ldots, O_n$ as clumping, conservation of distinguishability requires the projected space 'between' clumps to increase."

**Technical clarification**. The intuition names "conservation of distinguishability" but the framework's technical term refers to Čencov monotonicity (a local geometric theorem), not a global budget. The mechanism the intuition actually corresponds to is **coherence conservation** (Axiom 1, integral conservation on Cauchy slices) applied to structural redistribution via the bootstrap hierarchy — specifically the level-indexed $\Lambda_n^{\text{eff}}$ formula of Observer Loop Viability.

**User's causal-language observation**. The user noted that "any normal 'causal' language will fail here, since the projections and relations that 'are' the expansion are the result of consistency solutions." This is load-bearing: the program's deliverable is a *correlation theorem* (joint consistency solution of the coherence-conservation equations), not a *causal mechanism* (clumping produces expansion over time).

**Why this captures real framework content**. Three framework mechanisms align with the user's picture:
- Coherence density → curvature (Gravity): the gravitational piece, but direction is opposite (clumps attract rather than drive void expansion).
- Level-indexed $\Lambda_n^{\text{eff}}$ (Observer Loop Viability): the closest mechanism; clumping at level $n$ → larger $\Lambda$ at level $n+1$.
- Continuous-discrete duality: the structural coupling; if the discrete side clusters, the continuous side must adjust.

None of these individually delivers the "clumping-void-expansion correspondence" the user described, but they are the ingredients. Composing them is what this program does.

## Step 1 findings (2026-04-22) — Route C observational scoping

**Status**: Checkpoint passed (correlation exists), but with a structural reinterpretation.

### What was surveyed

Literature-based review of published stacked-void kinematics, void-galaxy cross-correlation analyses (BOSS DR12 through DESI DR1), and theoretical/observational work on void-environment correlations. Core references:

- Hamaus et al. 2014 (universal void density profile; velocity via linear theory)
- Hamaus et al. 2020 (BOSS DR12 precision cosmology from voids)
- Hamaus et al. 2022 (velocity profiles of matter and biased tracers)
- Sheth & van de Weygaert 2004 (two-barrier void-in-void / void-in-cloud framework)
- DESIVAST DR1 void catalog (low-redshift, ZOBOV + VoidFinder)
- Contarini et al. (void size function cosmology)
- Review: "Evolution of Cosmic Voids" (arXiv:2602.21292, 2026)
- "Void and Density Walls Inhomogeneous Cosmic Web and Dark Energy" (arXiv:2503.20912)

### Finding 1 — the correlation exists and is well-measured

**Void expansion rate correlates strongly with surrounding (compensation-wall) density**:

- **Voids-in-voids (R-type)**: embedded in underdense regions → large voids, coherent outflow, ~78–86% of galaxies moving outward, super-Hubble expansion, some grow without bound.
- **Voids-in-clouds (S-type)**: embedded in overdense regions → small voids, nearly flat velocity profiles (~50–80 km/s), 58–63% outward-moving, can collapse.

This is the observational confirmation of the Sheth–van de Weygaert two-barrier framework and is captured quantitatively by the Hamaus "universal density profile" — a two-parameter fit whose velocity profile follows from linear theory applied to the profile.

**Conclusion**: the Step 1 pass/fail checkpoint (*"if the correlation is absent, halt the program"*) passes. The correlation is not only present — it is **foundational to modern void cosmology**.

### Finding 2 — standard $\Lambda$CDM + linear theory already accounts for the correlation

This is the structural reinterpretation that changes the program's character:

- Hamaus et al. 2020 (BOSS DR12) measure $f/b = 0.540 \pm 0.091$ and $\Omega_m = 0.312 \pm 0.020$ from the void-galaxy cross-correlation — consistent with Planck $\Lambda$CDM to ~6%. The standard linear-theory continuity equation plus Newtonian gravity on an underdense region already predicts the observed velocity profile.
- The environmental dependence (large-voids vs small-voids, R-type vs S-type) is *not* an anomaly requiring new physics. It is the expected consequence of mass conservation: a deeper underdensity has more mass outflowing to compensate, driving faster-than-Hubble wall recession.
- Modified-gravity / inhomogeneous-cosmology programs (local voids, $\Lambda$LTB, backreaction) have been pursued and broadly constrained — "precision cosmology defeats void models for acceleration" is the current community consensus.

### Finding 3 — precision of existing void cosmology bounds any residual

Current void-based cosmology measurements constrain $f/b$ to ~17% and $\Omega_m$ to ~6% with BOSS DR12. DESI DR1 (DESIVAST) and Euclid will tighten these to ~5% and better. Any **residual** effect predicted by the framework beyond standard linear theory must fit within these precision envelopes.

### Finding 4 — one reported sub-anomaly

The review "Evolution of Cosmic Voids" (arXiv:2602.21292) notes one tension: observed voids contain a "non-zero central galaxy population" absent from $\Lambda$CDM predictions. Probably unrelated to the $\Lambda^{\text{eff}}(x)$ mechanism, but worth noting in case it connects to framework content at Step 2.

### Structural reassessment — the program's target changes shape

The target document as originally written anticipated that the framework might *predict* a novel void-expansion-vs-density correlation not present in standard cosmology. The observational picture is the reverse: the correlation is **the textbook result of void cosmology**, foundational and well-measured.

This does not halt the program. It changes what "framework prediction" means. Three viable routes remain:

**(A) Consistency relabeling**. The framework's coherence-conservation + level-indexed $\Lambda_n^{\text{eff}}$ account, applied spatially, should reproduce the linear-theory velocity profile as a *joint consistency solution* of the coherence-conservation equations. The deliverable is a framework-internal re-derivation of the standard result, demonstrating that the two accounts are compatible — exactly what the target document's "framing note" describes. Not a new observational prediction, but a structural consistency check that ties large-scale structure kinematics into the axiomatic backbone. This route is aligned with the "causal language fails" framing the user flagged as load-bearing.

**(B) Residual prediction within existing precision**. If the framework predicts a specific small departure from linear theory — e.g., a scale-dependent or bootstrap-level-indexed modification of the velocity–density relation — this could be constrained against the ~5–17% precision of existing void RSD measurements. The predicted residual would have to emerge naturally from Step 2's $\Lambda^{\text{eff}}(x)$ generalization rather than being added by hand.

**(C) Targeted qualitative discriminant**. Even if the mean correlation is reproduced, the framework may predict a signature with a qualitatively different functional form in one regime (e.g., scale-dependent bootstrap-level assignment, or a specific dependence on compensation-wall integer quantization from Corollary 5.5a). This would be the strongest outcome but requires the derivation in Step 2 to surface it.

### Decision point

The program cannot proceed to Step 2 without choosing an aim: (A) structural consistency check, (B) small residual prediction, or (C) qualitative discriminant. These require different framings in the Step-2 derivation and produce different deliverables. **Pausing here to discuss with the user** per the workflow precedent.

**Resolution**: user-selected route A (consistency relabeling), with routes B/C allowed to emerge naturally if the derivation surfaces them.

## Step 2 findings (2026-04-22) — Framework-internal derivation

**Status**: Structural reading complete. Key negative result: the spatial generalization $\Lambda^{\text{eff}}(x)$ anticipated in the original target is not what the framework supplies. The correct structure is a two-slot decomposition in the local Friedmann-like equation, with $\Lambda^{\text{eff}}$ remaining level-indexed (spatially uniform within a level) and spatial expansion-rate variation carried by the coherence-density field $\rho_\mathcal{C}(x)$.

### Framework reading — what actually generalizes

**Proposition 2.1 (Level-indexing is categorical, not spatial).** *The effective cosmological parameter $\Lambda_n^{\text{eff}} = 3\pi/(S^{(n)}\ell_P^2)$ of [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Definition 8.2 is spatially uniform within a given bootstrap level $n$. It does not vary with position inside the level's effective manifold.*

*Argument.* The inaccessible coherence $S^{(n)}$ is a per-level quantity: the coherence beyond level $n$'s epistemic horizon plus the coherence locked in composite observers at bootstrap levels above $n$ (Definition 8.1). By the constitutive-universality remark in [OLV](../site/src/content/derivations/cosmology/observer-loop-viability.md) Proposition 7.4, the Cauchy-slice budget $C_0$ takes the same value for all level-$n$ observers, so the partition $C_0 = \mathcal{C}^{(n)}_{\text{acc}} + S^{(n)}$ applies uniformly to every observer at that level. An observer embedded in a wall and another embedded in a void — both at human bootstrap level — share the same $\Lambda_N^{\text{eff}}$. $\square$

**Corollary 2.1a (What the target document called "$\Lambda^{\text{eff}}(x)$" does not exist at a fixed level).** *The challenge-3 generalization in the original target (a spatially-resolved $\Lambda^{\text{eff}}(x)$ at a given level) is not a well-defined framework object. Spatial generalization happens in a different slot.*

**Proposition 2.2 (The correct spatial slot is coherence density $\rho_\mathcal{C}(x)$).** *In the local Friedmann-like equation derived via the coherence Lagrangian + Einstein Equations chain,*
$$H_{\text{local}}^2(x, t) = \frac{8\pi G}{3}\,\rho_\mathcal{C}(x,t) + \frac{\Lambda_N^{\text{eff}}\, c^2}{3} - \frac{k c^2}{a^2(x,t)},$$
*the two "dark" slots are structurally distinct in their spatial behavior. $\Lambda_N^{\text{eff}}$ is uniform (Prop 2.1). The coherence density $\rho_\mathcal{C}(x)$ is a local field, and it is the slot that carries the spatial variation associated with clumping and voids.*

*Argument.* The [Einstein Equations](../site/src/content/derivations/spacetime/einstein-equations.md) derivation (Theorem 5.1) recovers $G_{\mu\nu} + \Lambda\,g_{\mu\nu} = (8\pi G/c^4) T_{\mu\nu}$ via Lovelock uniqueness from the coherence Lagrangian's self-consistency condition. The [Gravity](../site/src/content/derivations/spacetime/gravity.md) derivation identifies the matter side as the relational-invariant density $\rho_I(x)$ — equivalently the coherence density $\rho_\mathcal{C}(x)$ under the action-duality identification. The cosmological-constant side is $\Lambda_N^{\text{eff}}$ by the OLV Step 8 reading. An FLRW solution restricted to a spherical perturbation gives the linearized form above. $\square$

### Joint consistency framing — why "clumping causes expansion" is the wrong phrasing

**Proposition 2.3 (Void-wall kinematics as a joint Cauchy-slice solution).** *Given a Cauchy slice $\Sigma_n$ at bootstrap level $n$ with conserved total coherence $C_0^{(n)} = N^{(n)} \hbar \omega_0$ ([Coherence Conservation](../site/src/content/derivations/axioms/coherence-conservation.md) Corollary 5.5a), any admissible spatial distribution of coherence density $\rho_\mathcal{C}(x)$ on $\Sigma_n$ satisfies*
$$\int_{\Sigma_n} \rho_\mathcal{C}(x)\, d^3x = C_0^{(n)}.$$
*The Einstein equations with $\rho_\mathcal{C}$ as the matter source and $\Lambda_N^{\text{eff}}$ as the background then determine the metric on $\Sigma_n$, and hence the local expansion-rate field $H_{\text{local}}(x)$. The "clumping" (concentration of $\rho_\mathcal{C}$ in filaments) and the "void expansion" (large $H_{\text{local}}$ in underdense regions) are two aspects of the same Cauchy-slice configuration — mutually determined by the joint constraints (coherence conservation + Einstein equations), not sequentially caused.*

*Argument.* Coherence conservation (Prop 5.4) fixes the integral on $\Sigma_n$. Mass-energy conservation (an FLRW-local consequence) fixes the compensated-profile form: any underdensity must be balanced by an overdensity in the surrounding compensation region, so that $\int \delta_\mathcal{C}(x)\, d^3x = 0$ across a matched void-wall pair. Given this constraint, the linearized Einstein equations on $\Sigma_n$ determine the velocity field via Peebles' continuity relation (recovered as a special case of the Gravity derivation in the linear regime). No temporal ordering enters — the Cauchy slice is a single antichain in the dependency DAG, and the coherence-conservation constraint holds across it, not along a time axis. $\square$

**Corollary 2.3a (Causal language fails by construction, not by stylistic preference).** *Because Proposition 2.3 is formulated on a Cauchy slice (a spacelike antichain in the dependency DAG), neither the clumping nor the expansion is "prior." The observation that causal language fails — the load-bearing framing note at the top of this target — is now structurally underwritten: the two phenomena are co-determined aspects of a joint consistency solution, as the [Continuous-Discrete Duality](../site/src/content/derivations/foundation/continuous-discrete-duality.md) derivation asserts at the structural level.*

**Corollary 2.3b (Consistency with standard linear theory).** *For a compensated spherical void with density contrast $\delta_\mathcal{C}(r) = \rho_\mathcal{C}(r)/\bar{\rho}_\mathcal{C} - 1$, Proposition 2.3 reproduces the textbook linear-theory velocity profile*
$$v(r) = -\tfrac{1}{3}\, f(\Omega_m)\, H(z)\, r\, \bar{\delta}_\mathcal{C}(r),$$
*where $\bar{\delta}_\mathcal{C}(r) = (3/r^3)\int_0^r \delta_\mathcal{C}(r')\, r'^2\, dr'$ is the volume-averaged coherence-density contrast within radius $r$, and $f(\Omega_m) \approx \Omega_m^{0.55}$ is the linear growth rate. This matches the Hamaus universal void profile (Hamaus et al. 2014) and the BOSS DR12 measurement $f/b = 0.540 \pm 0.091$ (Hamaus et al. 2020) to the precision of current data.*

*Argument.* The [Einstein Equations](../site/src/content/derivations/spacetime/einstein-equations.md) derivation recovers standard GR exactly (Theorem 5.1). Standard linear theory applied to compensated spherical perturbations in GR gives the Peebles continuity result; the framework's coherence-density identification with stress-energy (via the Gravity derivation) transfers this result directly. No additional framework input is needed. $\square$

### What Step 2 establishes and does not establish

**Establishes** (Route A deliverable):
- The framework's coherence-conservation + level-indexed $\Lambda^{\text{eff}}$ + coherence-density-curvature chain reproduces standard void kinematics as a joint Cauchy-slice consistency solution.
- The "causal language fails" framing is structural, not merely interpretive: the derivation sits on a Cauchy slice and neither clumping nor expansion is prior.
- $\Lambda^{\text{eff}}$ does not vary spatially at a fixed bootstrap level; the original target's Challenge 3 ($\Lambda^{\text{eff}}(x)$) is a well-posed question with a negative answer.

**Does not establish**:
- A distinctive prediction beyond standard $\Lambda$CDM. At Route A level, the framework and $\Lambda$CDM agree on void kinematics to the precision of current measurements.
- A quantitative value for $\Lambda_N^{\text{eff}}$. The OLV Step 8 / Conjecture 8.9 double-saturation problem is upstream and not resolved by this program.

### Residual signatures (candidate routes B/C that surfaced)

Two candidate framework-distinctive signatures emerged during the derivation. Neither is forced by Route A; both are worth flagging as potential probes.

**(Route C candidate) Metallic-mean scale hierarchy in large-scale structure.** The [Aperiodic Order](../site/src/content/derivations/foundation/aperiodic-order.md) derivation constrains the observer network to a substitution tiling with metallic-mean inflation factor $\beta$. If the coarse-grained cosmic-web structure inherits this inflation factor as a scale hierarchy (void sizes, filament spacings), there would be a framework-distinctive self-similarity ratio $\beta = (n + \sqrt{n^2+4})/2$ between characteristic scales. The 2026 cosmic-void review notes unexplained environmental dependence of void properties; a search for metallic-mean scale ratios in DESIVAST / Euclid void catalogs would be a concrete test.

**(Route B candidate) Anomalous central-galaxy population in observed voids.** The "Evolution of Cosmic Voids" review (arXiv:2602.21292) reports non-zero galaxy populations in void interiors, absent from $\Lambda$CDM predictions. If this is real (not a void-finder artifact), it could connect to the Continuous-Discrete Duality's requirement that observer networks be boundaryless: a truly empty region would be inconsistent with the network's structural completeness. Testing this requires distinguishing finder artifacts from physical void-interior structure, which is an active observational question.

**Assessment**: neither candidate materialized as a sharp quantitative prediction during the Step 2 derivation. Both remain as future-work flags. Route A proceeds as the main deliverable.

## Closure (2026-04-22)

**Outcome**: no new framework content produced. The program is closed as a negative/clarifying result.

### Honest accounting of what the program established

Steps 1 and 2 produced four items, each of which is best understood as a clarification rather than a discovery:

1. **Observational status** (Step 1): the void-expansion-vs-wall-density correlation exists and is textbook. This was a real observational result *for the program* but not new to the wider literature.

2. **The target's Challenge 3 was mis-posed** (Step 2, Prop 2.1 / Cor 2.1a): a spatially-varying $\Lambda^{\text{eff}}(x)$ at a fixed bootstrap level is not a framework-native object. [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Definition 8.2 already makes it clear on rereading that level-indexing is categorical — the subscript $n$ in $\Lambda_n^{\text{eff}}$ ranges over bootstrap levels, not spatial positions. No framework update needed.

3. **The two-slot decomposition** (Step 2, Prop 2.2): the local Friedmann-like equation has $\rho_\mathcal{C}(x)$ on the matter side and $\Lambda_N^{\text{eff}}$ (uniform) on the cosmological-constant side. This is already how [Einstein Equations](../site/src/content/derivations/spacetime/einstein-equations.md) and [Gravity](../site/src/content/derivations/spacetime/gravity.md) work together; nothing new.

4. **Joint-consistency reframe on a Cauchy slice** (Step 2, Prop 2.3, Cor 2.3a): the user's "causal language fails" intuition is structurally underwritten — the derivation sits on a spacelike antichain, so neither clumping nor expansion is "prior." This is a conceptual reframe of standard GR void dynamics in Cauchy-slice language, not a new prediction.

The would-be Route A consistency derivation is a restatement of the framework's existing reduction to standard GR at the Einstein-Equations level, dressed in void-cosmology language. It does not warrant a new derivation file: it would only repeat content already carried by the Gravity and Einstein Equations derivations combined with OLV Step 8's level-indexing.

### Framework state unchanged

No derivations updated. No structural postulates affected. No new formal objects. No GitHub issues opened for the main program (it closed cleanly).

### Residual flags preserved for future programs

Two speculative signatures surfaced during Step 2; neither materialized as a sharp prediction within this program, but both are recorded here as potential seeds for future targets:

**(R1) Metallic-mean scale hierarchy in large-scale structure.** The [Aperiodic Order](../site/src/content/derivations/foundation/aperiodic-order.md) derivation constrains observer networks to substitution tilings with metallic-mean inflation factor $\beta$. If the coarse-grained cosmic web inherits this inflation factor as a scale hierarchy linking void sizes and filament spacings at different coarse-graining levels, there would be a framework-distinctive self-similarity ratio $\beta = (n + \sqrt{n^2+4})/2$ between characteristic structure scales. Test candidates: statistical scale-ratio analyses of DESIVAST / Euclid void catalogs. Open question: does the aperiodic-order structure actually propagate from the microscopic observer network to cosmic-web-scale coarse-graining, or is it washed out? No existing framework derivation answers this; a future program would need to address it.

**(R2) Void-interior galaxy populations.** The "Evolution of Cosmic Voids" review (arXiv:2602.21292) reports non-zero galaxy populations in void interiors, absent from $\Lambda$CDM predictions. Potential connection to the [Continuous-Discrete Duality](../site/src/content/derivations/foundation/continuous-discrete-duality.md) and [Multiplicity](../site/src/content/derivations/minimal-observer/multiplicity.md) requirements that the observer network be boundaryless. Test candidates: distinguishing void-finder artifacts from physical interior structure in DESI DR1+ catalogs. Open question: is the anomaly real, and if so does the framework's boundaryless-network requirement predict a specific residual galaxy density in void interiors? Neither question has been examined.

Neither flag is promoted to a stand-alone research target at this time. If a future conversation surfaces a concrete mechanism connecting aperiodic-order to LSS scale hierarchy, or a quantitative connection between the boundaryless-network requirement and void-interior galaxy density, a new target would be warranted.

## Intellectual origin

This target emerged from an exploratory conversation (2026-04-21) following the completion of the WKB bounce program. The user was probing the framework's interpretation of scale crossings and coincidences, and raised the question of whether conservation of distinguishability produces a geometric expansion response to observed clumping. The analysis distinguished the technical meaning of "conservation of distinguishability" (Čencov monotonicity) from the global-budget picture the user was describing (coherence conservation on Cauchy slices), and identified that the latter — combined with level-indexed $\Lambda^{\text{eff}}$ and continuous-discrete duality — does structurally support a derivation of void-expansion-vs-filament-density correspondence.

The target was formulated with explicit attention to the user's "causal language fails" observation: the result is framed as a joint consistency solution rather than a temporal mechanism. This framing is load-bearing and should be preserved throughout the derivation.
