# WKB Bounce Calculation in the Coherence Lagrangian

**Type**: Research target (planned, not yet formalized)
**Status**: Program complete. All steps delivered per revised (option-iii) scope: Steps 1–4 WKB identification and empirical consistency; Step 5 sharpening of `mass-hierarchy-s1`; Step 6 consolidation into two new framework derivations plus 5 updates to existing derivations.
**Last updated**: 2026-04-21

## The goal

**Compute explicit Euclidean bounce actions in the (now spinor-complete) Coherence Lagrangian to derive the per-level crystallization exponents $c_k$ in Mass Hierarchy's $\Lambda_k \sim \Lambda_{k-1}\, e^{-c_k/g_k^2}$ from first principles, enabling quantitative Standard Model fermion mass ratio predictions and, if successful, promoting `mass-hierarchy-s1` (tunneling–crystallization correspondence) from an active structural postulate to a theorem.**

[Mass Hierarchy](../site/src/content/derivations/particles/mass-hierarchy.md) currently identifies the crystallization-as-tunneling correspondence as its Structural Postulate S1 in a tightened-irreducible form. The postulate asserts that the mass-generating transitions between bootstrap levels are WKB tunneling events of the Coherence Lagrangian; it does not *compute* the tunneling exponents. This program compiles the WKB machinery that converts that identification into explicit numerical $c_k$ values, evaluated against the derived Lagrangian of [Coherence Lagrangian](../site/src/content/derivations/foundation/coherence-lagrangian.md) + [Spinor Coherence Lagrangian](../site/src/content/derivations/foundation/spinor-coherence-lagrangian.md).

## Why the target is plausible

**Five framework commitments stand at the bounce level, each supplying a piece of the computation:**

1. **Full Lagrangian is now available.** The scalar + gauge + gravity sectors of the Coherence Lagrangian have been derived since [Coherence Lagrangian](../site/src/content/derivations/foundation/coherence-lagrangian.md); the spinor sector is derived as of [Spinor Coherence Lagrangian](../site/src/content/derivations/foundation/spinor-coherence-lagrangian.md) (2026-04-21). Together they cover the full Standard Model fermion and boson content, eliminating the "scalar-only caveat" that previously blocked quantitative fermion-mass work.

2. **The tunneling–crystallization correspondence is structurally derived.** [Mass Hierarchy](../site/src/content/derivations/particles/mass-hierarchy.md) Theorem 3.1 (WKB crystallization) and [Three Generations](../site/src/content/derivations/particles/three-generations.md) Theorem 4.2 (misalignment-angle tunneling factors $y_k \sim e^{-\alpha_k/g_{EW}^2}$) already commit the framework to the per-generation exponential-of-inverse-coupling form. What is missing is the explicit $c_k$ (or $\alpha_k$) computation from a first-principles bounce integral.

3. **Euclidean continuation on observer-projected spacetime is routinely available.** [Observer-Projected Spacetime](../site/src/content/derivations/foundation/observer-projected-spacetime.md) Theorem 3.1 gives each observer a static de Sitter patch $M_A$ with a preferred static Killing vector generating the Gibbons–Hawking thermal structure. The same Killing vector fixes the Wick rotation $t \to -i\tau$ unambiguously on the patch — the standard operation for thermal/Euclidean field theory on de Sitter carries through.

4. **Bounce machinery is standard.** Coleman (1977) and Callan–Coleman (1977) developed the semiclassical bounce formalism. The framework-internal content is about *which* Lagrangian to Euclideanize (now fully specified) and *which* tunneling observables correspond to the crystallization events (already identified by Mass Hierarchy S1); the semiclassical apparatus itself is textbook.

5. **Bootstrap-level couplings $g_k$ are partially specified.** [Coupling Constants](../site/src/content/derivations/cosmology/coupling-constants.md) supplies scale-dependent couplings at each crystallization scale (with s1 still active — an irreducible structural postulate that will *not* be retired by this program but whose presence does not block the WKB computation's relative outputs).

The research-program diagnosis is therefore: this is a *tractable, well-scoped* quantitative computation with two distinct payoffs (mass-ratio predictions; mass-hierarchy-s1 promotion) and one standard-QFT technical core.

## What the target buys

**B1. Quantitative SM fermion mass-ratio predictions.** Per-generation $c_k$ computed from explicit bounce actions give dimensionless ratios $m_{k'}/m_k = e^{-(c_{k'} - c_k)/g^2}$ that can be compared to observation. The $e:\mu:\tau$ and up-type and down-type quark hierarchies become tests of the framework rather than inputs.

**B2. Promotion of `mass-hierarchy-s1`.** The tunneling–crystallization correspondence, currently one of the five active structural postulates, becomes a theorem once the tunneling exponents are explicitly computed and shown to identify with the crystallization mass gaps. This reduces the active postulate count from 5 to 4 and is the largest-payoff postulate promotion available to the framework at the current state.

**B3. Addresses Observer Viability Open Gap 2 (common-saddle analysis).** The tripartite viability theorem of [Observer Viability: Formation, Preservation, and Detection](../site/src/content/derivations/foundation/formation-and-preservation.md) asserts that (F) ∧ (P) ∧ (D) are all required for an observer to exist. The open question is whether these three viability conditions arise as different boundary-condition regimes of one Coherence Lagrangian calculation — a shared-saddle view. Explicit bounce saddles of the Lagrangian are the object against which this question can be tested.

**B4. Framework-internal seesaw ratio.** The Majorana sector of Spinor Coherence Lagrangian Theorem 5.3 supplies a distinct tunneling channel for neutrinos. The ratio $M_R/m_D$ in the seesaw mass matrix of [Neutrino Masses](../site/src/content/derivations/particles/neutrino-masses.md) becomes a WKB-computable quantity rather than a $\sim v_{\mathrm{EW}}$-scale estimate.

**B5. Prerequisite for quantitative early-universe program.** Coherence-Lagrangian bounces are the natural objects for modeling bootstrap-level crystallization events in cosmological history ([Geometric Inflation](../site/src/content/derivations/cosmology/geometric-inflation.md), [Baryogenesis](../site/src/content/derivations/cosmology/baryogenesis.md), [Leptogenesis](../site/src/content/derivations/cosmology/leptogenesis.md)). A quantitative WKB bounce program would unlock a new generation of cosmological predictions with explicit rate formulas.

**B6. Structural content for the bootstrap fixed-point conjecture.** [Bootstrap Mechanism](../site/src/content/derivations/interactions/bootstrap.md) Conjectures 7.1 and 7.2 (fixed-point existence and uniqueness) are framework conjectures whose resolution would promote `area-scaling-s1` to a theorem. The cross-level bounce consistency structure is a probe of the fixed-point solution's content: bounces that converge uniformly across levels are evidence of the uniqueness structure; bounces that fail to converge are diagnostic of where uniqueness breaks. Informative for the fixed-point conjecture whether the program succeeds or fails at the quantitative layer.

## The central challenge: three technical obstacles, all tractable

**Obstacle 1 (Wick rotation).** The observer-projected spacetime $M_A$ is Lorentzian. The standard Wick rotation $t \to -i\tau$ requires a global timelike Killing vector with unambiguous Euclidean continuation; $M_A$'s static Killing vector provides it locally, but the cross-observer consistency of Euclidean continuations (required for bootstrap consistency of bounces) has not been established. Expected to be tractable (the presheaf structure of Observer-Projected Spacetime Definition 1.2 constrains the continuations to agree on shared Type III relations), but needs explicit verification.

**Obstacle 2 (Effective-potential specification).** A WKB bounce requires the effective potential on each bootstrap level after integrating out the modes at lower levels (including fermion-determinantal contributions). The Coherence Lagrangian supplies the tree-level Lagrangian; the effective action at one-loop including the derived Dirac + Majorana + 3-generation sector is not yet spelled out. Technical, not structural — standard one-loop QFT applied to the framework Lagrangian.

**Obstacle 3 (Coupling-constant input).** The dimensionless exponent $c_k/g_k^2$ depends on $g_k$ at the $\Lambda_k$ scale. [Coupling Constants](../site/src/content/derivations/cosmology/coupling-constants.md) supplies these with s1 still active. The WKB program's outputs are *conditioned* on the Coupling Constants s1 input; it does not resolve that postulate. If `coupling-constants-s1` is ever promoted to a theorem, the WKB bounce program's predictions become fully first-principles.

None of these is structural; all are expected to resolve within the program's natural flow.

## Candidate instanton classes

Four instanton classes from standard QFT are candidates for the relevant bounces:

**(1) Vacuum-to-vacuum tunneling (Coleman bounce).** A scalar field on Euclidean spacetime tunneling from a false to true vacuum of the coherence potential. Expected to be the dominant channel for inter-level crystallization events where the coherence potential has metastable structure.

**(2) Gauge-theory instantons (BPST).** $SU(2)$ Yang–Mills instantons in 4D Euclidean space carry integer topological charge and contribute $e^{-8\pi^2/g^2}$-suppressed tunneling amplitudes. Relevant at bootstrap level 2 (electroweak) and level 3 (color) via the existing gauge-field structure of the Coherence Lagrangian.

**(3) Observer-state bounces (framework-specific).** Direct tunneling in the observer state-space $\Sigma_A$, treating the minimal observer's $U(1)$ phase as the WKB coordinate. This is the "most native" instanton class to the framework: the coherence-geometric Fisher distance supplies the kinetic term; the observer's coherence potential supplies the barrier. Previously not constructable without the Lagrangian; now constructable with spinor-inclusive coherence content.

**(4) Gravitational instantons on $M_A$.** Instantons of the Euclidean Einstein–Hilbert action on the Euclideanized de Sitter patch. Likely relevant for cosmological-scale bounces (early-universe crystallization) rather than for fermion mass generation but included for completeness.

Expected: (3) is the primary channel for crystallization exponents (framework-native, directly corresponds to Mass Hierarchy Theorem 3.1); (1) and (2) contribute standard-QFT corrections; (4) is cosmological.

## Specific predictions

If the program succeeds:

1. **Per-generation exponents $c_k$ for $k = 1, 2, 3$** computed from explicit bounce integrals. Values expected of order $c_k \sim O(1\text{–}100)$ based on the rough phenomenology of Yukawa hierarchy.

2. **Lepton mass ratios.** $m_\mu/m_e \approx 207$ and $m_\tau/m_\mu \approx 17$ become WKB-computable ratios. Match within the Coupling Constants s1 uncertainty would be strong framework evidence.

3. **Seesaw ratio for neutrinos.** The ratio $M_R/m_D$ from Majorana bounces of Theorem 5.3 becomes a specific prediction, cross-checked against the electroweak-scale estimate of Neutrino Masses Theorem 3.1.

4. **Cross-sector mass relation.** If the bounce exponents share structural content between the lepton and quark sectors (they should, if the bootstrap-level structure is universal), the framework predicts a relation between lepton and quark mass hierarchies from common bounce-action content modulated by generation-specific coupling input.

5. **Qualitative prediction: mass ordering.** The framework should reproduce the observed normal ordering of generation masses (lighter-to-heavier), not an inverted one. Failure would indicate the tunneling–crystallization correspondence is signed incorrectly.

6. **Vacuum stability.** Euclidean bounces in the coherence-Higgs sector should respect the observed metastability/stability of the electroweak vacuum. An instability prediction at the wrong scale would be a framework-level anomaly.

## What would falsify or require postulating

1. **Computed $c_k$'s do not reproduce observed mass ratios.** If the bounce integrals give mass hierarchies incompatible with observation even accounting for Coupling Constants s1 uncertainty, the tunneling–crystallization correspondence is in tension with observation — either Mass Hierarchy S1 needs refinement or the Lagrangian needs revision. Strong negative result.

2. **Wick rotation on $M_A$ is genuinely ambiguous.** If cross-observer Euclidean continuations fail to agree on shared Type III relations, a new structural postulate asserting the continuation would be required. Unlikely given the static Killing structure but possible.

3. **Effective potential is not bounded below after fermion-inclusion.** Radiative corrections from the fermion sector could destabilize the coherence potential's quartic form (Coherence Lagrangian Theorem 2.2). If the destabilization cannot be controlled by framework-consistent mechanisms, the Coherence Lagrangian's boundedness assumption fails — a foundational problem.

4. **No bounce saddles exist for some generation.** If the path-integral saddle for some $k$ fails to exist (e.g., runaway behavior, no stationary point), the tunneling–crystallization identification is incomplete and mass-hierarchy-s1 cannot be promoted.

5. **Three-generation exponents degenerate.** If $c_1 = c_2 = c_3$ at the bounce level (contradicting Three Generations Theorem 4.2's structural hierarchy), the framework's claim of per-generation distinctness breaks down at the Lagrangian level. Would require revisiting the Lagrangian-to-generation mapping.

## Formalization path

Concrete steps from target to derivation. Expected scope is 3–4 weeks.

### 1. Euclidean continuation of the Coherence Lagrangian on $M_A$

**Task**: Establish that Wick rotation $t \to -i\tau$ on the observer-projected static de Sitter patch $M_A$ is (a) unambiguous, fixed by the static Killing vector; (b) consistent across observers, agreeing on shared Type III relations via the presheaf restriction maps of Observer-Projected Spacetime Definition 1.2; (c) well-behaved on the Coherence Lagrangian and the Spinor Coherence Lagrangian, producing a positive-definite Euclidean action for suitable field configurations.

**Tools**: [Observer-Projected Spacetime](../site/src/content/derivations/foundation/observer-projected-spacetime.md) Theorem 3.1; standard de Sitter Euclidean continuation (Gibbons–Hawking 1977); [Coherence Lagrangian](../site/src/content/derivations/foundation/coherence-lagrangian.md) Theorem 3.1; [Spinor Coherence Lagrangian](../site/src/content/derivations/foundation/spinor-coherence-lagrangian.md) Theorem 2.7.

**Output**: Explicit Euclidean Coherence Lagrangian $\mathcal{L}_E$ including the spinor sector (Grassmann Euclidean fields), with the Wick rotation formalized as a mapping between observer-indexed Lorentzian patches $\{M_A\}$ and their Euclidean continuations $\{M_A^E\}$.

**Expected difficulty**: Easy. Standard de Sitter thermal field theory + direct application to the framework's Lagrangian.

#### Step 1 findings (2026-04-21)

**Result: Step 1 complete with no structural blockers.** The Euclidean Coherence Lagrangian (bosonic + fermionic sectors) is explicit on each observer's Euclidean patch $M_A^E$.

**Content delivered.**

1. **Wick rotation unambiguous (Prop 1.1).** $t \to -i\tau$ is fixed by the static Killing vector $\xi_A = \partial_t$ of $M_A$; Euclidean metric positive-definite on $r < L_A$.

2. **Gibbons–Hawking period (Prop 1.2).** $\beta_A = 2\pi L_A/c = \pi T_A$ from conical-singularity avoidance. Temperature $T_{\mathrm{GH},A} = \hbar/(\pi k_B T_A)$.

3. **Euclidean bosonic Lagrangian (Prop 1.3).** Standard Wick rotation of scalar ($\tfrac12\hbar|\partial\phi|^2 + V$), gauge ($\tfrac14 F_E^2$), and gravity ($R_E/16\pi G$) sectors; positive-definite contributions to the action.

4. **Euclidean fermionic Lagrangian (Prop 1.4).** $\bar\psi(\gamma^\mu_E\nabla_\mu + m)\psi$ with Grassmann $\bar\psi, \psi$ independent; $\tau$-anti-periodic boundary conditions; $\{\gamma^\mu_E, \gamma^\nu_E\} = 2\delta^{\mu\nu}$.

5. **Euclidean Lichnerowicz (Prop 1.5).** $(\gamma^\mu_E\nabla_\mu)^2 = \Box_E - R_E/4 = \Box_E - 3/L_A^2$ on Euclidean de Sitter.

6. **Cross-observer compatibility (Prop 1.6).** Inherits from the Observer-Projected Spacetime presheaf structure; no additional postulate required. The relational content (which is all that enters bounce-action integrals) is invariantly defined across observers.

7. **Bosonic action bounded below (Prop 1.7).** Modulo the standard Gibbons–Hawking–Perry conformal-mode treatment.

**Minor finding flagged and fixed.** The [Quantum Fisher Metric](../site/src/content/derivations/thermodynamics-ext/quantum-fisher-metric.md) derivation (written during the spinor-extension consolidation) had a Gibbons–Hawking temperature formula missing a factor of 2 and $k_B$: was written as $T_{\mathrm{GH}} = \hbar/(2\pi c T_A)$, should read $T_{\mathrm{GH},A} = \hbar c/(2\pi k_B L_A) = \hbar/(\pi k_B T_A)$. Fixed 2026-04-21 during this Step. Cosmetic — structural argument of QFM Theorem 4.1 unaffected.

**No new postulates introduced in Step 1.**

### 2. Fermion-inclusive effective action on each bootstrap level

**Task**: Compute the one-loop effective action $\Gamma[\phi]$ of the Coherence Lagrangian on each bootstrap level, including fermion-determinantal contributions from the Spinor Coherence Lagrangian sector. This gives the effective potential $V_{\mathrm{eff}}[\phi]$ whose metastable/stable structure determines bounce saddles.

**Tools**: Standard one-loop effective-action machinery (Coleman–Weinberg 1973); Grassmann Gaussian integration (Pfaffian); [Coupling Constants](../site/src/content/derivations/cosmology/coupling-constants.md) for $g_k$ at each $\Lambda_k$.

**Output**: Explicit $V_{\mathrm{eff}}^{(k)}[\phi]$ at each level $k$, including fermion-loop corrections; boundedness verification; identification of metastable minima (false vacua) that serve as bounce false-vacuum endpoints.

**Expected difficulty**: Moderate. Straightforward one-loop QFT once the tree Lagrangian is fixed; the framework-specific content is in the bootstrap-level structure.

#### Step 2 findings (2026-04-21)

**Result: Step 2 complete with no structural blockers; one clarifying finding that extends Step 3 scope.**

**Content delivered.**

1. **One-loop effective action with fermion determinant (Props 2.2–2.3).** Dirac: $\Gamma_1^{\text{fermion}} = -\tfrac\hbar2\operatorname{Tr}\ln[-\Box_E + m^2 + R_E/4]$; Majorana: extra factor of 1/2 (Pfaffian).

2. **Coleman–Weinberg on $M_A^E$ (Theorem 2.4).** $V_{\mathrm{eff}}(\phi) = V_{\mathrm{tree}} + \tfrac{1}{64\pi^2}\sum_i n_i m_i^4[\ln(m_i^2/\mu^2) - c_i] + V_{\mathrm{curv}}(\phi, L_A)$ with $n_i = +1, +3, -4, -2$ for scalar/gauge/Dirac/Majorana.

3. **Two-potential bootstrap-level structure (Prop 2.6).** Two distinct bounce classes identified:
   - **Class A (within-level):** winding-angle configuration space $\theta_k \in \mathfrak{so}(3)$; per-generation bounces $\alpha_k$ from Three Generations Theorem 4.2.
   - **Class B (level-to-level):** scalar/coherence-geometry configuration space; level-transition bounces $c_n$ from Mass Hierarchy Theorem 3.1.

4. **False/true vacuum structure (Props 2.7, 2.8).** Identified in both sectors.

5. **Boundedness verified (Prop 2.9).** After fermion inclusion, $V_{\mathrm{eff}}$ bounded below in the regime relevant for bounces.

6. **Framework-parameter identification (Prop 2.10).** $c_n$ and $\alpha_k$ identified with explicit bounce/WKB actions — the `mass-hierarchy-s1` promotion target.

**Scope-clarifying finding.** The research-target document's Step 3 phrasing conflated Class A and Class B bounces. Both are tractable with Step 2's formalism but they are structurally distinct phenomena. User approved extending Step 3 scope to include both classes.

**No new postulates introduced in Step 2.**

### 3. Dirac bounce instantons for charged leptons and quarks

**Task**: Construct explicit bounce solutions to the Euclidean equations of motion for the crystallization transitions generating the electron, muon, and tau Dirac masses (and similarly for up-type and down-type quarks). Compute the bounce action $S_E^{(k)}$ for each generation.

**Tools**: Coleman 1977 bounce formalism; Callan–Coleman 1977 for the fermion contribution; the derived $V_{\mathrm{eff}}^{(k)}$ from Step 2; the Clifford representation structure from Spinor Coherence Lagrangian Propositions 4.1–4.6.

**Output**: $S_E^{(k)}$ values for $k = 1, 2, 3$ (leptons) and $k = 1, 2, 3$ (quarks, separately for up- and down-type). Per-generation $c_k = S_E^{(k)} / \text{(natural scale)}$ dimensionless exponents.

**Expected difficulty**: Moderate-hard. The saddle-finding is standard but the specific bounce structure depends on $V_{\mathrm{eff}}^{(k)}$'s detailed form, which emerges from Step 2.

#### Step 3 findings (2026-04-21)

**Result: Class A succeeds at the WKB-identification level; Class B reveals a structural finding that blocks `mass-hierarchy-s1` promotion as originally scoped.** The program's primary flagship payoff (postulate promotion) is not achievable via Step 3 alone; an exploratory extension (option (ii) below) is being attempted.

**Class A content delivered (Propositions 3.1–3.4):**

- **Proposition 3.1 (Within-level bounce action).** $S_E^{(k,\text{winding})} = \alpha_k/g_{EW}^2$; Yukawa coupling $y_k = \exp(-\alpha_k/g_{EW}^2)$ identified as WKB tunneling amplitude.
- **Proposition 3.2 (Generation ordering).** Observed mass ordering $m_e \ll m_\mu \ll m_\tau$ requires $\alpha_e \gg \alpha_\mu \gg \alpha_\tau$.
- **Proposition 3.3 (Lepton mass-ratio predictions).** $m_\mu/m_e = \exp((\alpha_e - \alpha_\mu)/g_{EW}^2)$, etc. Using $g_{EW}^2 \approx 0.42$ at $M_Z$ and observed ratios: $\alpha_e - \alpha_\mu \approx 2.23$; $\alpha_\mu - \alpha_\tau \approx 1.19$.
- **Proposition 3.4 (Quark analog).** Same formula applies to up/down-type quark generations. Top-quark $y_t \approx 1$ suggests $\alpha_t \approx 0$ (pre-aligned configuration).

**Honest assessment of Class A.** The program's Step 3 Class A deliverable is the *identification* of the misalignment-angle bounce with an explicit WKB Euclidean action; it is not a first-principles computation of the individual $\alpha_k$ values. Specific $\alpha_k$ values require the winding-angle coherence-potential shape from Three Generations Theorem 4.2, which structurally characterizes but does not numerically fix $\alpha_k$. A complete first-principles mass-ratio derivation would require an explicit computation of the winding-angle coherence-potential functional that is outside this program's scope.

**Class B structural finding (load-bearing):**

Initial setup: I attempted to construct a level-to-level scalar-field Coleman-bounce in the Coherence Lagrangian's quartic potential $V(\phi) = m^2|\phi|^2 + \lambda|\phi|^4$. *This potential does not admit a standard bounce:*

- $m^2 > 0$: single minimum at $\phi = 0$ (no false vacuum).
- $m^2 < 0$: minimum at $|\phi| = v$, $\phi = 0$ is a *local maximum* (second-order transition, no barrier).

Loop/thermal corrections can generate first-order structure in some regimes, but this is not the generic behavior of the tree-level Coherence Lagrangian.

Resolution via [Mass Hierarchy](../site/src/content/derivations/particles/mass-hierarchy.md) Theorem 3.1 proof: the tunneling there is explicitly a **1D WKB through a coherence-geometric barrier**, *not* a 4D $O(4)$-symmetric Euclidean bounce in the scalar field. Quoting Theorem 3.1's proof:

> "For the bootstrap, the barrier height is $V \sim \Lambda_{k-1}/g_k^2$ (the coherence cost of a virtual relational invariant, suppressed by the coupling squared) and the width is $a \sim 1/\Lambda_{k-1}$ (the inverse of the scale). Therefore: $P_{\text{tunnel}} \sim e^{-c_k/g_k^2}$"

This is textbook 1D WKB tunneling applied to a *coherence-geometric* barrier. Class A and Class B are *both* WKB but of different types:
- Class A: 4D $O(4)$-symmetric Euclidean bounce in winding-angle space.
- Class B: 1D WKB through a coherence-geometric barrier in the bootstrap-composition configuration.

**Class B content delivered (Propositions 3.5–3.7):**

- **Proposition 3.5 (Level-to-level WKB exponent).** Given the barrier parameters from Theorem 3.1's proof, the WKB exponent is $c_n/g_n^2$ with $c_n$ an $O(1)$ geometric prefactor.
- **Proposition 3.6 (Formal line integral for $c_n$).** $c_n = \int du\,\sqrt{2\tilde V(u)}$ over a dimensionless barrier profile $\tilde V(u)$, where $u$ parameterizes the coherence-geometric barrier. Specific value depends on barrier shape, not derived here.
- **Proposition 3.7 (Partial promotion of `mass-hierarchy-s1`).** Re-states the structure: WKB form is theorem (per Mass Hierarchy's Remark (1)); identification of bootstrap crystallization with a *specific* coherence-geometric barrier is the postulate.

**Critical finding: `mass-hierarchy-s1` is not promotable by Step 3 alone.**

[Mass Hierarchy](../site/src/content/derivations/particles/mass-hierarchy.md)'s Remark (Tightened content) explicitly decomposes S1 into:
1. **WKB form** ($P \sim e^{-V\cdot a/\hbar}$): *theorem* already (semi-classical analysis of any Lagrangian system).
2. **The identification** (bootstrap crystallization IS barrier tunneling through the specific barrier $V, a$ described in the proof): *postulate*, irreducible content.

Step 3's computation assumes the barrier shape from part (2); it does not derive it. Therefore Step 3's WKB work cannot promote the postulate — the postulate's irreducible content is the *barrier identification*, which is upstream of the WKB calculation.

**Implication for the program.** The research-target document's primary flagship payoff — `mass-hierarchy-s1` promotion reducing active postulates from 5 to ≤ 4 — is *not achievable* by the WKB bounce program as originally scoped. The phenomenological payoff (per-generation mass ratios via Class A) remains available but requires conditional framework inputs (the winding-angle coherence-potential shape from Three Generations, which is itself structural).

**Three options considered at the end of Step 3:**

**(i) Accept revised scope.** Complete the program without postulate promotion. Step 3 delivers WKB identification for both classes; Step 4 delivers Majorana WKB identification; Step 5 documents that `mass-hierarchy-s1` is *not* promotable (distinguishing the theorem-level WKB form from the postulate-level barrier identification more cleanly than Mass Hierarchy's current phrasing); Step 6 consolidates. Smaller structural payoff than originally advertised.

**(ii) Extend scope to derive the coherence-geometric barrier shape.** Attempt to derive the specific barrier shape $\tilde V(u)$ and width $a \sim 1/\Lambda_{n-1}$ from framework content (bootstrap composition mechanism, Quantum Fisher Metric, coherence-conservation axioms). If successful, promotes `mass-hierarchy-s1`'s identification from postulate to theorem. Speculative, adds ~2–3 weeks, may hit walls.

**(iii) Pivot the program's flagship.** Reframe the program's deliverable as "WKB identification + sharpening of what's irreducible about `mass-hierarchy-s1`" rather than "postulate promotion." Matches reality; complete as (i) + deliberate reframing of the consolidation documents.

**User decision (2026-04-21):** Record all findings to allow pivot to (iii) if needed; exploratory push toward (ii) attempted first. If (ii) hits a wall or reveals significant structural issues, pivot to (iii).

**Work log for (ii) follows in a new section below ("Step 3a").**

### 3a. Option (ii) exploration: derive the coherence-geometric barrier shape

**Task**: Attempt to derive the barrier shape $\tilde V(u)$ and width $a \sim 1/\Lambda_{n-1}$ from framework content. Specifically: identify a first-principles structural argument that determines the coherence-geometric barrier separating adjacent bootstrap levels, using framework commitments (bootstrap mechanism, quantum Fisher metric, coherence conservation).

**Tools**: [Bootstrap Mechanism](../site/src/content/derivations/interactions/bootstrap.md); [Bootstrap Division Algebras](../site/src/content/derivations/interactions/bootstrap-division-algebras.md); [Quantum Fisher Metric](../site/src/content/derivations/thermodynamics-ext/quantum-fisher-metric.md); [Coherence Conservation](../site/src/content/derivations/axioms/coherence-conservation.md) (particularly Corollary 5.5a: Cauchy-slice integer quantization); [Coherence Lagrangian](../site/src/content/derivations/foundation/coherence-lagrangian.md).

**Success criteria**: either (a) produce a clean structural argument fixing $\tilde V(u)$ and $a$ with O(1) precision (full promotion of `mass-hierarchy-s1`), or (b) hit a specific wall that justifies pivoting to option (iii).

**Output**: either (a) the barrier-shape derivation, enabling Step 5 postulate promotion, or (b) a documented wall with pivot-to-(iii) justification.

#### Step 3a findings (2026-04-21)

**Result: wall reached as expected. Pivot to option (iii) executed.**

The exploratory push identified four candidate structural arguments for the barrier shape, each with its own wall:

1. **Fisher-distance scaling.** Plausibly derivable if adjacent bootstrap fixed points are separated by Fisher distance $\sim 1/g_n$ — requires resolving Conjectures 7.1–7.2 to pin down the fixed-point structure.

2. **Integer-quantization via Cauchy-slice integers (Coherence Conservation Cor 5.5a).** Structurally promising but *produces the wrong sign*: level-$n$ relational observers carry *less* coherence than level-$(n-1)$ constituents ($N_n \leq N_{n-1}$), so the virtual state passes *below* the stable integer rather than above. Not a standard barrier.

3. **RG reinterpretation.** Mass Hierarchy's exponential form $\Lambda_n/\Lambda_{n-1} = e^{-c_n/g_n^2}$ is functionally identical to standard RG dimensional transmutation (e.g., $\Lambda_{QCD} \sim M_Z e^{-c/\alpha_s}$). If bootstrap iteration $\mathcal{R}$ is structurally an RG flow step, the "WKB tunneling" interpretation in `mass-hierarchy-s1` may be a reparaphrase of RG running rather than a distinct mechanism. This is a potential *structural revision* of the postulate, independent of promotion.

4. **Reduction to Conjectures 7.1–7.2.** `mass-hierarchy-s1` can in principle be reduced to the same fixed-point conjectures that `area-scaling-s1` is reduced to — giving a partial tightening where two active postulates share a single joint dependency. Requires the geometry functor $G: \mathbf{Obs} \to \mathbf{Geom}$ to be formalized first (currently informal; [future-targets.json](../site/src/data/future-targets.json) `hierarchical-geometry` entry).

**The wall.** All four routes require substantial independent research programs: the fixed-point conjectures (multi-month Scott domain theory work); the geometry functor formalization (separate target); or RG-$\beta$-function derivation from framework content (technically non-trivial). Each is a valid future research target but none is achievable within this WKB bounce program's remaining scope.

**Partial progress preserved.**

1. **Sharpened postulate analysis.** `mass-hierarchy-s1`'s irreducible content is now explicitly demarcated: the barrier *identification* (height $V$ and width $a$) is the postulate; the WKB *form* ($e^{-Va/\hbar}$) is already theorem via Mass Hierarchy's Remark (1).

2. **Three concrete promotion routes cataloged.** Fisher-distance scaling, integer-quantization, RG reinterpretation. Each is a distinct research direction.

3. **Structural connection identified.** `mass-hierarchy-s1` and `area-scaling-s1` are *jointly* reducible to Conjectures 7.1–7.2. This is a significant structural observation: resolution of the fixed-point uniqueness conjecture would retire *two* postulates together, not just one. This is documentation-worthy independent of this program.

4. **RG reinterpretation flagged as future research target.** The possibility that Mass Hierarchy's "tunneling" language is an RG reparaphrase is a structural question independent of promotion. Should be investigated in a separate research program.

**Pivot to option (iii): program flagship reframed.**

The WKB bounce program's deliverable changes from "`mass-hierarchy-s1` promotion" to:
- WKB identification for both bounce classes (Steps 3 Class A and Class B — done).
- Majorana WKB identification (Step 4 — as originally scoped).
- Sharpened analysis of `mass-hierarchy-s1`'s irreducible content with three candidate promotion routes documented (Step 5, revised from promotion verdict to sharpening).
- Consolidation into framework derivations (Step 6).

**No new postulates introduced in Step 3a. No existing postulates retired, but two are jointly shown to depend on the fixed-point conjectures.**

### 4. Majorana bounce identification for neutrinos

**Task**: Construct the analogous bounce solutions for the Majorana mass term of Spinor Coherence Lagrangian Theorem 5.3. Compute the seesaw ratio $M_R/m_D$ from bounce-action ratios.

**Tools**: Bounce formalism adapted to the pseudo-real $SU(2)_L$ doublet structure ([Neutrino Masses](../site/src/content/derivations/particles/neutrino-masses.md) Theorem 1.3 for the pseudo-reality input); Majorana Grassmann path integration.

**Output**: Majorana bounce actions; prediction for $M_R/m_D$; cross-check against the electroweak-scale estimate of Neutrino Masses Theorem 3.1.

**Expected difficulty**: Moderate. Builds on Step 3 with the Majorana projection.

#### Step 4 findings (2026-04-21)

**Result: Step 4 complete with no structural surprises.** Majorana WKB identification follows Step 3 Class A structurally; seesaw ratio identified; level-2 crystallization consistency-checked against Mass Hierarchy Proposition 4.1.

**Content delivered.**

1. **Majorana configuration space (Prop 4.1).** $J_\epsilon$-invariant level-2 winding space from Spinor Coherence Lagrangian Prop 5.1.

2. **Majorana WKB bounce action (Prop 4.2).** $S_E^{(\text{Majorana})} = \alpha_\nu^{(M)}/g_{EW}^2$; $M_R = v\,e^{-\alpha_\nu^{(M)}/g_{EW}^2}$.

3. **Seesaw ratio (Prop 4.3).** $M_R/m_D = \exp((\alpha_\nu^{(D)} - \alpha_\nu^{(M)})/g_{EW}^2)$; consistent with Neutrino Masses Theorem 3.1's electroweak-scale estimate ($\alpha_\nu^{(M)} \lesssim g_{EW}^2 \approx 0.42$, level-2 Majorana "close to aligned").

4. **Level-2 crystallization $c_{EW}$ (Prop 4.4).** From $\Lambda_1/\Lambda_2 \sim 10^{14}$ and $g_{EW}^2 \approx 0.42$, $c_{EW} \approx 13$ — $O(1)$ but sizable, consistent with Mass Hierarchy's "order 1" claim (with $2\pi$ factors).

5. **CPT automatic (Prop 4.5).** Spinor Coherence Lagrangian Prop 7.3 carries through to bounce level.

**Same structural status as Step 3 Class A/B:** WKB identification clean; specific $\alpha_\nu^{(M)}$ and $c_{EW}$ values conditional on level-2 coherence-potential shape and barrier structure (same structural dependencies as for Dirac/leptons).

**No new postulates introduced in Step 4.**

### 5. Sharpening of `mass-hierarchy-s1` (revised from promotion verdict)

**Task (revised after Step 3a)**: Produce a sharpened statement of `mass-hierarchy-s1` that distinguishes its theorem-level content from its postulate-level content, documents the three candidate promotion routes identified in Step 3a, and makes explicit the joint dependency on Conjectures 7.1–7.2 shared with `area-scaling-s1`. This is a *sharpening* rather than a *promotion*: the active postulate count remains 5, but the postulate's structural role is clarified.

**Specific deliverables:**

1. **Explicit theorem/postulate decomposition.** Restate Mass Hierarchy Theorem 3.1 to make clear:
   - WKB form (theorem, from Mass Hierarchy Remark (1) — semi-classical analysis of any Lagrangian system).
   - Barrier identification (postulate, irreducible content of `mass-hierarchy-s1`).
   - Specific identification: the barrier has height $V \sim \Lambda_{n-1}/g_n^2$ and width $a \sim 1/\Lambda_{n-1}$, with $O(1)$ prefactors determined by the bootstrap fixed-point structure (Conjectures 7.1–7.2).

2. **Three candidate promotion routes documented.**
   - Route 1 (Fisher-distance scaling via BKM on fixed-point manifold).
   - Route 2 (Integer-quantization via Cauchy-slice integers — currently produces wrong sign; requires further work).
   - Route 3 (RG reinterpretation — bootstrap iteration as RG flow step; potential *restatement* of the postulate, not just promotion).

3. **Joint dependency with `area-scaling-s1` flagged.** Both postulates reduce to Conjectures 7.1–7.2. Resolution of the fixed-point uniqueness conjecture would retire both together.

4. **RG reinterpretation flagged as independent future research target.** The question of whether Mass Hierarchy's tunneling language is structurally equivalent to RG dimensional transmutation is a separate research program warranting its own target document.

**Tools**: [Mass Hierarchy](../site/src/content/derivations/particles/mass-hierarchy.md) Theorem 3.1 + Remark (Tightened content); Steps 3/3a findings above; structural-postulate audit methodology from the 2026-03-22 audit.

**Output**: Revised Mass Hierarchy derivation text (for Step 6 consolidation) with sharpened postulate statement; documentation of three promotion routes; joint-dependency note with `area-scaling-s1`; future-targets.json entry for RG reinterpretation.

**Expected difficulty**: Easy. Document-level synthesis of Steps 3/3a findings.

#### Step 5 findings (2026-04-21)

**Result: Step 5 complete. Four deliverables ready for Step 6 consolidation.**

1. **Sharpened `mass-hierarchy-s1` text.** Three-part decomposition: (1) WKB form as theorem; (2) barrier identification as irreducible postulate content; (3) structural connection to Conjectures 7.1–7.2 (joint dependency with `area-scaling-s1`).

2. **Three candidate promotion routes documented.** Fisher-distance scaling (Route 1, 1–3 months); integer-quantization (Route 2, 2–4 months, currently blocked by sign mismatch); RG reinterpretation (Route 3, 2–6 months, potential restatement rather than promotion).

3. **Joint dependency note with `area-scaling-s1`.** Two of five active postulates reduce to the same Conjectures 7.1–7.2. Resolution retires both together.

4. **Future-targets.json entry** for RG reinterpretation as independent research program.

**No new postulates. No postulates promoted. Active postulate count unchanged (5), but structural role sharpened.**

### 6. Consolidation into framework-level derivations

**Task**: Consolidate the exploratory Step 1–5 content into new framework-level derivations in the canonical framework style. Update affected existing derivations.

**Expected consolidation shape:**

*New derivation(s):*
- `foundation/euclidean-coherence-lagrangian.md` — Wick rotation of the Coherence Lagrangian + Spinor Coherence Lagrangian on $M_A$; Euclidean effective action machinery.
- `particles/coherence-bounces.md` — explicit bounce instantons for Dirac and Majorana mass generation; per-generation $c_k$ computation; seesaw ratio.

*Updates to existing derivations:*
- [Mass Hierarchy](../site/src/content/derivations/particles/mass-hierarchy.md) — sharpen S1 statement per Step 5 revised task. Document the three candidate promotion routes; flag joint dependency with `area-scaling-s1` on Conjectures 7.1–7.2.
- [Three Generations](../site/src/content/derivations/particles/three-generations.md) — cross-reference the explicit WKB identification of Theorem 4.2's per-generation tunneling factors.
- [Neutrino Masses](../site/src/content/derivations/particles/neutrino-masses.md) — add cross-reference to the Majorana WKB identification for the seesaw ratio.
- [Observer Viability: Formation, Preservation, and Detection](../site/src/content/derivations/foundation/formation-and-preservation.md) — Open Gap 7 (common-saddle analysis) addressed.

*future-targets.json additions* (documenting spin-offs):
- `rg-reinterpretation-of-bootstrap-iteration` — investigate RG-flow interpretation of $\mathcal{R}$.
- `fisher-distance-on-bootstrap-fixed-point-manifold` — derive $c_n$ prefactor.
- (`hierarchical-geometry` entry already exists; update with the `mass-hierarchy-s1` / `area-scaling-s1` joint-dependency finding.)

*Infrastructure:*
- Sidebar + derivations index entries for the new derivations.
- Dependency graph updates.
- Knowledge index regeneration.

**Output**: Clean framework-level presentation matching the style of [Spinor Coherence Lagrangian](../site/src/content/derivations/foundation/spinor-coherence-lagrangian.md); research target retained as historical record.

## Current status

**Formally articulated**: yes (this document).

**Formalized**: Steps 1–3a complete (2026-04-21). Steps 4–6 in progress.

- **Step 1 complete**: Euclidean Coherence Lagrangian on $M_A^E$ (bosonic + fermionic sectors) explicit; QFM temperature typo fixed. No structural surprises.
- **Step 2 complete**: One-loop effective action with fermion determinant; Coleman–Weinberg potential on $M_A^E$; two-potential bootstrap-level structure identified; identifies Class A (within-level) and Class B (level-to-level) as distinct bounce classes. No new postulates.
- **Step 3 complete**: Class A WKB identification clean (per-generation bounce action $S_E^{(k,\text{winding})} = \alpha_k/g_{EW}^2$ from Three Generations Theorem 4.2). Class B WKB identification via Mass Hierarchy Theorem 3.1's 1D coherence-geometric barrier. Mass-hierarchy-s1 irreducible content = barrier identification; WKB form is already theorem.
- **Step 3a complete** (option (ii) exploration): four candidate promotion routes identified (Fisher-distance scaling, integer-quantization, RG reinterpretation, reduction to Conjectures 7.1–7.2). All require substantial independent research programs. Wall reached as expected. Program pivots to option (iii).
- **Step 4 complete**: Majorana bounce identification; seesaw ratio; level-2 crystallization $c_{EW} \approx 13$ as consistency check.
- **Step 5 complete**: sharpened `mass-hierarchy-s1` text; three promotion routes documented; joint-dependency with `area-scaling-s1` made explicit.
- **Step 6 complete**: two new framework derivations — [Euclidean Coherence Lagrangian](../site/src/content/derivations/foundation/euclidean-coherence-lagrangian.md) (derived) and [Coherence Bounces](../site/src/content/derivations/particles/coherence-bounces.md) (provisional, with empirical-consistency section confirming all six structural checks pass). Existing derivations updated: Mass Hierarchy (sharpened S1), Area Scaling (joint-dependency reference), Three Generations (WKB identification cross-ref), Neutrino Masses (seesaw-ratio identification cross-ref), Formation-and-Preservation (Open Gap 7 partial address), Coherence Lagrangian (Euclidean cross-ref). Sidebar, index, dependency graph, and future-targets.json updated. Knowledge index regenerated clean.

**Tractability (post-pivot)**: Steps 4–6 well-scoped at ~1 week total. Step 4 is a WKB-identification analog of Step 3 Class A. Step 5 is document-level synthesis. Step 6 is standard consolidation pattern from the spinor extension program.

**Primary payoff (revised)**: sharpened analysis of `mass-hierarchy-s1`'s irreducible content; three candidate promotion routes documented; structural connection between `mass-hierarchy-s1` and `area-scaling-s1` via joint dependency on Conjectures 7.1–7.2; RG reinterpretation flagged as independent future research target. Active postulate count unchanged (5), but framework self-understanding improves meaningfully.

**Spin-off research targets surfaced by this program** (to be logged as future-targets after completion):
- **Geometry functor formalization** ($G: \mathbf{Obs} \to \mathbf{Geom}$). Necessary prerequisite for rigorous reduction of `mass-hierarchy-s1` and `area-scaling-s1` to fixed-point conjectures.
- **RG reinterpretation of bootstrap iteration**. Investigates whether $\mathcal{R}$ is structurally an RG flow step; if so, Mass Hierarchy's tunneling formulation may need restatement.
- **Fisher-distance on bootstrap fixed-point manifold**. Specific route-1 investigation: if Fisher distance between adjacent fixed points scales as $1/g_n$, derive $c_n$ prefactor from fixed-point structure.

## Related framework material

**Derivations directly relevant**:

- [Mass Hierarchy](../site/src/content/derivations/particles/mass-hierarchy.md) — the derivation this program targets. S1 is the postulate-promotion target.
- [Coherence Lagrangian](../site/src/content/derivations/foundation/coherence-lagrangian.md) — scalar + gauge + gravity sectors; Theorem 6.0 (Ostrogradsky); Theorem 3.1 (full Lagrangian).
- [Spinor Coherence Lagrangian](../site/src/content/derivations/foundation/spinor-coherence-lagrangian.md) — spinor sector; Theorem 2.7 (Dirac); Theorem 5.3 (Majorana); Proposition 6.1 (three-generation replication). Prerequisite, complete.
- [Three Generations](../site/src/content/derivations/particles/three-generations.md) — Theorem 0.1 (three winding classes); Theorem 4.2 (misalignment-angle tunneling factors $y_k$).
- [Observer-Projected Spacetime](../site/src/content/derivations/foundation/observer-projected-spacetime.md) — Theorem 3.1 (minimal-observer de Sitter patch); Definition 1.2 (projection functor with restriction maps).
- [Coupling Constants](../site/src/content/derivations/cosmology/coupling-constants.md) — bootstrap-level couplings $g_k$; s1 still active (irreducible input).
- [Neutrino Masses](../site/src/content/derivations/particles/neutrino-masses.md) — Majorana mass structure (Theorems 1.3, 2.2, 3.1) — target for seesaw cross-check.
- [Action and Planck's Constant](../site/src/content/derivations/thermodynamics/action-planck.md) — Fisher-metric scaling; sets the natural bounce-action scale.
- [Quantum Fisher Metric](../site/src/content/derivations/thermodynamics-ext/quantum-fisher-metric.md) — BKM as the Hessian of the coherence functional; relevant to the Euclidean effective-action construction.
- [Observer Viability: Formation, Preservation, and Detection](../site/src/content/derivations/foundation/formation-and-preservation.md) — Open Gap 7 (common-saddle analysis) addressed by the bounce saddles.

**Structural postulate status relevant to this program**:

- `mass-hierarchy-s1` (tunneling–crystallization correspondence): target of promotion.
- `coupling-constants-s1` (algebraic coupling normalization): **not** addressed; remains active. WKB outputs are modulo this input.
- `area-scaling-s1` (bootstrap fixed-point uniqueness): informationally probed by cross-level bounce consistency, but not targeted for promotion.

## Related research targets

**[spinor-extension-of-coherence-lagrangian.md](spinor-extension-of-coherence-lagrangian.md)** — completed 2026-04-21. The prerequisite for this program. Its consolidation into [Spinor Coherence Lagrangian](../site/src/content/derivations/foundation/spinor-coherence-lagrangian.md) + [Quantum Fisher Metric](../site/src/content/derivations/thermodynamics-ext/quantum-fisher-metric.md) makes the WKB bounce program's Lagrangian inputs fully specified.

**[pattern-edges-and-mutual-opacity.md](pattern-edges-and-mutual-opacity.md)** — completed 2026-04-20. Unrelated to WKB bounce directly, but the pattern — exploratory research program followed by consolidation into standalone framework derivations — is the template this program follows.

## Context for future sessions

**Sequencing rationale.** This program was selected as the natural next step following the spinor extension's completion. The sequencing analysis was: three obstacles remained to quantitative WKB bounce work — (i) Wick rotation on $M_A$, (ii) effective-potential specification, (iii) coupling-constant input. Obstacles (i) and (ii) are tractable as Step 1 and Step 2 of this program rather than as separate precursors; a "Euclidean Coherence Lagrangian" standalone precursor was considered and rejected as unnecessary fragmentation. Obstacle (iii) is genuinely orthogonal (tied to Coupling Constants s1) and is accepted as a conditional input.

**Why mass-hierarchy-s1 first rather than other remaining postulates.** Of the 5 active structural postulates at current framework state (speed-of-light, preferred-basis, mass-hierarchy, chiral-symmetry-breaking, area-scaling), `mass-hierarchy-s1` is the most tractable for promotion because its irreducible content ("crystallization = tunneling identification") is *computationally* accessible via explicit bounce integrals. `preferred-basis-s1`, `area-scaling-s1`, and `chiral-symmetry-breaking-s1` have irreducible content that is structural rather than computational. `speed-of-light-s1` is tied to global-assembly questions about the observer-projected presheaf structure — a different problem-class.

**Two-metric picture carries through.** The [Quantum Fisher Metric](../site/src/content/derivations/thermodynamics-ext/quantum-fisher-metric.md) two-metric picture (BKM for Lagrangian / Hessian roles; SLD for detection edges) applies at the WKB bounce level as well: the bounce action is a Hessian-type object (second-order variation around the saddle), so the relevant Fisher metric is BKM. No reformulation of the Fisher-metric content is expected to be required.

**Potential for further structural insights.** The bounce program may incidentally shed light on the bootstrap fixed-point conjecture (Bootstrap Mechanism Conjectures 7.1–7.2) via cross-level bounce consistency, even though that conjecture is not the program's primary target. This is an opportunistic upside rather than a committed deliverable.

## Intellectual origin

This target emerged from the 2026-04-21 assessment following the completion of the spinor extension program. The specific sequencing — WKB bounce directly rather than via a Euclidean-Coherence-Lagrangian precursor — was determined by weighing the (low) risk of Wick-rotation ambiguity on observer-projected spacetime against the (real) cost of fragmenting the program into a sequential precursor + main-computation pair. The integrated scoping was judged preferable based on the expected routine nature of Wick rotation on the static de Sitter patch and on preserving the framework's established pattern of one-program-one-consolidation.

The program's primary payoff target — `mass-hierarchy-s1` promotion — was identified as the largest-value single-postulate-promotion opportunity at the current framework state via postulate-database inspection: the other four active postulates (speed-of-light, preferred-basis, chiral-symmetry-breaking, area-scaling) each have irreducible content that is structural rather than computational, making them less tractable via a bounded computational program.
