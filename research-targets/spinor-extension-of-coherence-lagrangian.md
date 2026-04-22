# Spinor Extension of the Coherence Lagrangian

**Type**: Research target (in progress)
**Status**: Program complete. All six steps delivered.
**Last updated**: 2026-04-21

## The goal

**Extend the [Coherence Lagrangian](../site/src/content/derivations/foundation/coherence-lagrangian.md) to include spinor (Dirac) fields. Identify which quantum Fisher metric the framework selects for spinor state spaces, derive the Dirac kinetic term from that metric, and propagate the consequences to downstream derivations.**

The current Coherence Lagrangian covers scalar matter fields, gauge bosons, and the gravitational sector. Fermion kinetics is flagged as Open Gap 5 there and as Open Gap 2 of [Observer Pattern Signal](../site/src/content/derivations/foundation/observer-pattern-signal.md). This program closes that gap by deriving the Dirac-form kinetic term for spinor observers within the framework's observer-centric formalism.

## Why the target is plausible

**Four framework commitments already stand at the spinor level:**

1. **Spin-Statistics is already derived.** [Spin and Statistics](../site/src/content/derivations/particles/spin-statistics.md) establishes fermionic exchange behavior from Axiom 3 on configuration space (Laidlaw-DeWitt). The framework already commits that spin-1/2 matter exists and has the correct exchange statistics. What's missing is the explicit Lagrangian dynamics.

2. **Pauli Exclusion is already derived.** [Pauli Exclusion](../site/src/content/derivations/particles/pauli-exclusion.md) is rigorous. Consistency with a Dirac-form Lagrangian is expected but not explicitly verified.

3. **Three Generations is already derived.** [Three Generations](../site/src/content/derivations/particles/three-generations.md) classifies fermions by winding-direction classification in $\mathfrak{so}(3)$; Theorem 4.2 gives misalignment-angle tunneling factors $y_k \sim e^{-\alpha_k/g_{EW}^2}$ for each generation. The masses it yields are fermion masses — requiring a Dirac Lagrangian to compute from first principles.

4. **CPT Theorem is already derived.** [CPT Theorem](../site/src/content/derivations/particles/cpt-theorem.md) for spinor matter holds. Compatibility with the spinor Lagrangian is expected.

Each of these is a framework theorem that assumes spinor structure without deriving its Lagrangian realization. The spinor extension fills in the missing kinetic-term derivation and should recover each of these as structural consequences.

## What the target buys

**B1. Framework completeness at the Lagrangian level.** The current Coherence Lagrangian covers scalars + gauge bosons + gravity. Adding fermions gives a Lagrangian-complete framework that claims the Standard Model + Einstein-Hilbert as its consistency model in full, not with a "scalar approximation" caveat.

**B2. Unblocks ~5–10 downstream derivations.** Observer Pattern Signal, Profile-Dependent Edges, Observer Viability (for fermion profiles), Chirality Selection, Neutrino Masses (Majorana treatment), Weinberg Angle, Leptogenesis — each currently carries a scalar caveat or pattern-signal gap that the spinor extension would remove in one stroke.

**B3. Prerequisite for quantitative WKB bounce results.** The natural next work (see [Related targets](#related-targets) below) is computing Euclidean bounce actions in the Coherence Lagrangian to derive $c_k$ in the Mass Hierarchy $e^{-c_k/g_k^2}$ crystallization scales. The *qualitative* WKB machinery works for bosons; the *quantitative* payoff — matching observed SM fermion masses — requires the spinor Lagrangian.

**B4. Structural illumination of Fisher-metric selection.** The Petz family non-uniqueness (Section "The central challenge" below) forces the framework to commit to *which* selection argument narrows to a specific quantum Fisher metric. Working this out is interesting in itself: it identifies what framework commitments beyond Čencov's classical theorem carry load, exposing the framework's implicit structural content.

**B5. Possible promotion of chirality-selection-s1.** [Chirality Selection](../site/src/content/derivations/gauge/chirality-selection.md) currently has structural postulate s1 for the left-handed nature of weak interactions. If the spinor extension derives the Dirac representation split $\Psi = \Psi_L + \Psi_R$ from the Fisher-metric structure plus other framework commitments, s1 may be tightened or promoted.

**B6. Makes Majorana vs Dirac neutrino treatment explicit.** [Neutrino Masses](../site/src/content/derivations/particles/neutrino-masses.md) uses pseudo-real $SU(2)$ representation structure. The Majorana form $\nu_R = \nu_R^c$ should emerge from the framework's specific spinor Lagrangian rather than being imposed.

## The central challenge: Petz family non-uniqueness

The scalar Coherence Lagrangian's kinetic term was derived via Čencov's theorem — classical Fisher information is the *unique* monotone Riemannian metric on a statistical manifold (up to positive constant). This gave [Coherence Lagrangian](../site/src/content/derivations/foundation/coherence-lagrangian.md) Theorem 1.2 a sharp selection argument.

**Quantum Fisher information does not have the same uniqueness.** On density-matrix state spaces, there is an entire **Petz family** of monotone Riemannian metrics, each arising from a different operator-monotone function $f: \mathbb{R}^+ \to \mathbb{R}^+$. Members of the family include:

- **SLD (Bures-Helstrom) metric** — from $f(x) = (x+1)/2$. Most common in quantum estimation theory. Gives the Bures distance on pure states.
- **KMB (right-logarithmic-derivative) metric** — from $f(x) = x$.
- **Wigner-Yanase skew information** — from $f(x) = (\sqrt{x} + 1)^2/4$.
- **Bogoliubov-Kubo-Mori metric** — from $f(x) = (x-1)/\ln x$.
- A continuum of others parameterized by the operator-monotone $f$.

All are monotone under CPTP maps (this is precisely the quantum generalization of Fisher's monotonicity property). Čencov's uniqueness does not carry through. So the framework cannot simply invoke "monotone metric ⟹ Fisher" — an additional selection criterion is required to single out a specific spinor Fisher metric.

## Candidate selection arguments

Five framework commitments could potentially narrow the Petz family:

**(1) Coherence Conservation on restricted channel class.** Monotonicity is a condition on all CPTP maps. If the framework's coherence-preserving operations are a *proper subset* of CPTP — for instance, if they exclude measurement channels that destroy off-diagonal coherences — the Petz family restricted to this narrower class may collapse to a unique metric.

**(2) Born rule compatibility.** [Born Rule](../site/src/content/derivations/quantum/born-rule.md) Theorem 6c.1 uniquely forces $C(|\psi\rangle) = \langle\psi|\psi\rangle$ from U(1) invariance + channel additivity + composition + continuity. The spinor Fisher metric must be compatible with this amplitude structure, which may narrow the Petz family.

**(3) Spin-statistics consistency.** The Dirac operator arising from the metric must commute with the Laidlaw-DeWitt spin-statistics structure of [Spin and Statistics](../site/src/content/derivations/particles/spin-statistics.md). This constrains the metric's behavior under exchange, potentially selecting a specific family member.

**(4) Bootstrap hierarchy compatibility.** The spinor kinetic term must behave correctly under the Cayley-Dickson chain $\mathbb{R} \to \mathbb{C} \to \mathbb{H} \to \mathbb{O}$. At bootstrap level $n$, spinors naturally live in specific Clifford-algebra representations of $\mathrm{Cliff}(n)$. Compatibility with these representations — specifically with the bootstrap's integer-invariant propagation — may narrow the Petz family.

**(5) Observer-projected geometry consistency.** The framework commits that geometry is observer-projected, not observer-independent ([Observer-Projected Spacetime](../site/src/content/derivations/foundation/observer-projected-spacetime.md)). The Dirac operator on $M_A$ must be constructed from the observer's own projection, not a background. This imposes a self-consistency constraint between the Fisher metric on spinor states and the spacetime metric in which the Dirac operator acts.

**Expected outcome**: some combination of (1)–(5) narrows to a unique metric, probably SLD/Bures (the most common in standard quantum information). The selection argument itself — showing explicitly that the framework's commitments force this specific choice — is the interesting derivation content.

**Risk**: If (1)–(5) jointly fail to narrow to a unique metric, a new structural postulate for spinor-fisher-s1 must be introduced. This would be a real result (identifying what's irreducibly additional in spinor dynamics beyond scalar dynamics) but not the "full derivation" payoff we'd hope for.

## Specific predictions

If the spinor extension succeeds:

1. **Dirac Lagrangian kinetic term emerges structurally.** $\mathcal{L}_{\text{kin}}^{\text{spinor}} = i\bar\psi\gamma^\mu\partial_\mu\psi$ follows from the selected Fisher metric plus Euler-Lagrange variation.

2. **Mass term from Identification 5.3 analog.** The $m\bar\psi\psi$ mass term emerges from the observer's coherence content analogously to the scalar $m^2|\phi|^2$, with $m$ the spinor observer's rest-cycle frequency.

3. **Dirac equation as Euler-Lagrange.** Euler-Lagrange on the full spinor Lagrangian gives $(i\gamma^\mu\partial_\mu - m)\psi = 0$.

4. **Chirality split from representation decomposition.** $\Psi = \Psi_L + \Psi_R$ via $P_L = (1 - \gamma^5)/2$, $P_R = (1 + \gamma^5)/2$, with the pseudo-real / complex / real structure of the level-$n$ Clifford representation dictating which chirality couples to which gauge channel.

5. **Spin-statistics and Pauli exclusion fall out.** The framework's existing theorems should be re-derivable as consequences of the spinor Lagrangian, not imposed from outside.

6. **CPT invariance follows.** [CPT Theorem](../site/src/content/derivations/particles/cpt-theorem.md)'s structure should be consistent with the derived Lagrangian without additional input.

## What would falsify or require postulating

1. **Petz family doesn't narrow.** If none of candidate arguments (1)–(5) — nor any other framework commitment — narrows to a unique metric, a new structural postulate (**spinor-fisher-s1**) is required. The specific form of the postulate characterizes what's irreducible about spinor kinetics. This is the most likely "partial success" outcome.

2. **Selected metric doesn't reproduce Dirac kinetic term.** If the narrowed metric leads to a Lagrangian other than $i\bar\psi\gamma^\mu\partial_\mu\psi$, the framework's consistency with the Standard Model is in question. This would be a genuine negative result requiring framework revision.

3. **Inconsistency with spin-statistics.** If the derived Dirac operator doesn't commute with the Laidlaw-DeWitt structure, something is misaligned between the existing spin-statistics derivation and the Lagrangian-level treatment.

4. **Chirality split doesn't emerge.** If the Clifford-algebra representation structure doesn't yield left- and right-handed projection operators naturally, Chirality Selection's structural postulate s1 cannot be promoted via this path.

5. **Bootstrap-level incompatibility.** If the metric at bootstrap level $n$ is inconsistent with the level-$(n+1)$ spinor structure under Cayley-Dickson extension, the framework's cross-level integer restriction (Corollary 7.1 of Observer Holographic Equivalence) doesn't hold in the Lagrangian treatment.

## Formalization path

Concrete steps from target to derivation. Expected scope is 2–4 weeks for the core derivation; downstream propagation to affected derivations adds ~1–2 weeks.

### 1. Fisher metric on spinor state spaces — survey and selection

**Task**: Enumerate the relevant members of the Petz family. For each, identify the known Lagrangian it produces (the Dirac case should arise from a specific member). Apply candidate selection arguments (1)–(5) above; determine which narrow the family and which do not.

**Tools**: Standard quantum-information geometry references (Petz 2008, Hayashi 2017). Framework-internal tools: [Fisher Information Metric](../site/src/content/derivations/thermodynamics-ext/fisher-metric.md), [Coherence Conservation](../site/src/content/derivations/axioms/coherence-conservation.md), [Born Rule](../site/src/content/derivations/quantum/born-rule.md).

**Output**: Either (a) a unique metric identified by intersection of (1)–(5), or (b) a family of 1–3 candidates surviving all applicable arguments, requiring further selection or postulation. State which framework commitment ultimately narrows the family.

#### Step 1 findings (2026-04-21)

**Result: intersection narrows to a unique metric — BKM (Bogoliubov–Kubo–Mori).** This diverges from the a priori expectation of SLD/Bures. Argument-by-argument narrowing:

| Argument | Narrows to | Confidence |
|---|---|---|
| (1) Coherence conservation on restricted channel class | {BKM} via C5/entropy-Hessian reading; all Petz read narrowly | medium-high |
| (2) Born rule compatibility | {BKM} via coherence-operational $\mathcal{C} \leftrightarrow S_{\mathrm{vN}}$ | high |
| (3) Spin-statistics consistency | all Petz (consistency check, not selection) | n/a |
| (4) Bootstrap/Cayley–Dickson reality | {BKM, SLD, WY, …} at levels 1–2; octonion level shared failure | mild, reinforces via integer-$\hbar\omega_0$ quantization |
| (5) Observer-projected geometry / KMS / Gibbons–Hawking | {BKM} via Kubo–Mori = modular-flow-compatible metric | high |

**Why BKM, not SLD.** SLD saturates the Cramér–Rao bound (estimation theory) and is standard in quantum information. The framework's Fisher metric plays a different role: it is the **Hessian of the coherence functional** (cf. [Fisher Information Metric](../site/src/content/derivations/thermodynamics-ext/fisher-metric.md) Proposition 4.1, where $g = \hbar G$ derives from Action–Planck). Under the coherence-operational identification ([Coherence Operational](../site/src/content/derivations/axioms/coherence-operational.md)) $\mathcal{C} \leftrightarrow S_{\mathrm{vN}} = -\operatorname{Tr}(\rho\log\rho)$, the Hessian is the Kubo–Mori form, i.e. BKM. Argument (5) independently selects BKM: observer-projected spacetime gives each observer a Gibbons–Hawking thermal (KMS) state on its static de Sitter patch, and BKM is the unique Petz metric whose modular flow agrees with the KMS flow.

**Structural complication: two-metric / two-role picture.** The detection-noise-vs-preservation-noise distinction from the pattern-edges program (see [Observer Edges and Mutual Opacity](../site/src/content/derivations/foundation/observer-edges-and-mutual-opacity.md)) reappears as a two-metric structure:

- **BKM** — for the Lagrangian / kinetic-term derivation (Hessian of coherence functional; natural on KMS thermal states on $M_A$). *This is the metric Step 2 uses.*
- **SLD** — for detection resolution (Cramér–Rao saturation; inter-observer distinguishability edges). *This is the metric the mutual-opacity and pattern-signal work uses implicitly.*

The two metrics agree on pure states and on classical (diagonal) submanifolds, so the existing pattern-edges derivations are not retroactively invalidated. They differ on genuinely mixed spinor states, where they play distinct physical roles. This is a cleaner outcome than the research-target document anticipated: the framework is not making an arbitrary choice within a family but is implicitly using *two* Petz metrics, each selected by separate framework commitments.

**Spinor-fisher-s1 postulate verdict: not needed.** The intersection is a singleton; no new structural postulate is required.

**Residual open points for later steps.**
1. **Non-associativity at level 3 ($\mathbb{O}$).** BKM requires $\log\rho$, which is not unambiguously defined on octonionic density operators. Restrict to levels 1–2, flag octonion sector as separate open problem.
2. **KMS-flow uniqueness of BKM.** Standard in statistical mechanics (Petz–Toth; Streater) but should be cited explicitly in Step 2.
3. **Superselection sector behavior.** Spinor state spaces have $\mathbb{Z}_2$ fermion-number superselection. BKM respects this (trace decomposes additively), but should be verified explicitly.

**Recommendations carrying into Step 2.**
1. Proceed with BKM as the spinor kinetic-term Fisher metric.
2. Flag "Fisher metric = Hessian of coherence functional" as a structural commitment carrying over from the scalar chain, not a novel derivation step.
3. State explicitly the two-metric picture (BKM for Lagrangians, SLD for detection edges).
4. No new spinor-fisher-s1 postulate.

### 2. Dirac kinetic term from selected metric

**Task**: Show that the selected Petz metric, applied to spinor-valued observer state spaces with coherence content $\mathcal{C}(\Sigma_A)$, produces the Lagrangian density $\mathcal{L}_{\text{kin}}^{\text{spinor}} = i\bar\psi\gamma^\mu\partial_\mu\psi$. Include the mass term from Identification 5.3 analog.

**Tools**: Step 1 output; [Coherence Lagrangian](../site/src/content/derivations/foundation/coherence-lagrangian.md) Theorem 1.2 as structural template; standard variational calculus.

**Output**: An explicit spinor sector added to the Coherence Lagrangian, with kinetic and mass terms derived. Compatibility verification with Euler-Lagrange → Dirac equation.

#### Step 2 findings (2026-04-21)

**Result: the Dirac kinetic term is derived** as the unique Lorentz-scalar Lagrangian compatible with five framework-internal constraints. The spinor sector of the Coherence Lagrangian is:

$$\mathcal{L}_{\text{spinor}} = i\hbar\,\bar\psi\gamma^\mu\nabla_\mu\psi - mc^2\,\bar\psi\psi$$

with $\nabla_\mu = \partial_\mu + \tfrac14\omega_\mu^{ab}\gamma_a\gamma_b + igA_\mu$ the full $M_A$-covariant derivative (spin + gauge connection). Euler–Lagrange variation gives the Dirac equation on $M_A$: $(i\gamma^\mu\nabla_\mu - m)\psi = 0$.

**Structural path BKM → Dirac.** The non-trivial step is that BKM pulled back along spacetime-varying field configurations gives a *quadratic* form $|\nabla\psi|^2$, not the first-order Dirac form. The first-order form is forced by:

1. **Proposition 2.1 (BKM pullback).** Gives quadratic form $\hbar\langle\nabla_\mu\psi|\nabla_\nu\psi\rangle g_A^{\mu\nu}$ — the "Klein–Gordon-like" spinor kinetic content.
2. **Proposition 2.2 (Ostrogradsky).** Coherence Lagrangian Thm 6.0 excludes higher derivatives but does not discriminate between quadratic and linear forms in $\nabla\psi$.
3. **Proposition 2.3 (Spin-statistics forces linear-in-$\nabla\psi$).** A quadratic kinetic term yields bosonic commutators on canonical quantization; [Spin and Statistics](../site/src/content/derivations/particles/spin-statistics.md) requires fermionic anticommutators. First-order-in-$\nabla\psi$ Lagrangian yields a constrained system (second-class primary constraint $\pi_\psi \propto \psi^\dagger$) whose Dirac brackets quantize to $\{\psi,\psi^\dagger\}=\delta$ — this is the load-bearing step.
4. **Theorem 2.4 (Uniqueness).** Among first-order, bilinear, Lorentz-scalar, hermitian, minimally coupled Lagrangians, $i\bar\psi\gamma^\mu\nabla_\mu\psi$ is the unique choice (spinor-bilinear classification: only $\bar\psi\gamma^\mu\psi$ carries a single vector index).
5. **Proposition 2.5 (Clifford factorization).** $(i\gamma^\mu\nabla_\mu)^2 = -\nabla^\mu\nabla_\mu + R$-terms (Lichnerowicz). The first-order Dirac operator is the "square root" of the BKM quadratic form up to curvature pieces that are handled in Step 4.
6. **Proposition 2.6 (Mass term).** Identification 5.3 ($\mathcal{C}(\Sigma) = \|I\|$ per cycle = $mc^2$ per proper time) combined with spinor-bilinear enumeration gives $-mc^2\bar\psi\psi$ uniquely.

**Framework-faithfulness.** The derivation treats $\psi$ as a section of the spinor bundle over *each* observer's projected patch $M_A$, not over a single shared background. The flat Dirac form is the leading-order result in a local Lorentz frame near $\gamma_A$; inter-observer consistency becomes a presheaf condition on the family $\{\psi_A\}$, paralleling [Observer Pattern Signal](../site/src/content/derivations/foundation/observer-pattern-signal.md) Remarks 2.4–2.5 for the scalar case.

**Status of the five candidate selection arguments after Step 2.** Argument (2) (Born rule) and (5) (KMS / observer projection) carried the BKM selection in Step 1. Argument (3) (spin-statistics), which was a null selector in Step 1, becomes load-bearing in Step 2: it is the constraint that forces first-order-in-$\nabla\psi$, picking the Dirac representative of the BKM-pullback-modulo-Clifford-factorization equivalence class.

**Open points carried to Step 3 (updated, see below):**
1. Majorana sector at bootstrap level 2 ($\mathbb{H}$) — charge-conjugation-constrained spinor with pseudo-real Clifford representation → Majorana mass term $\tfrac12 m(\psi^T C\psi + \text{h.c.})$.
2. Chirality split $\psi = \psi_L + \psi_R$ via Clifford projection $P_{L/R} = (1\mp\gamma^5)/2$; framework-internal origin tied to Cayley–Dickson level structure.
3. Weitzenböck–Lichnerowicz $R$-terms (curvature coupling) as Step 4 consistency check against Einstein–Dirac coupling.
4. Spin-statistics re-derivation: Step 4 must verify that Theorem 2.7's Lagrangian *reproduces* spin-statistics as a consequence (Prop 2.3 used it as input; closing the circle is a Step 4 task).
5. Octonionic sector (level 3, $\mathbb{O}$): non-associativity breaks both BKM operator-mean and the standard $\gamma^\mu$ algebra. Restrict Steps 2–4 to levels 1–2; flag level 3 as a separate open problem.

**No new structural postulate introduced in Step 2.** All steps use already-derived framework content (Axiom 3 via Ostrogradsky; Spin and Statistics via Laidlaw–DeWitt; Observer Definition Identification 5.3; Action–Planck; BKM from Step 1).

### 3. Chirality, Clifford representations, and bootstrap-level structure

**Task (refined after Steps 1–2)**: Derive the left/right-handed chirality decomposition $\Psi = \Psi_L + \Psi_R$ from the Clifford-algebra representation structure and the framework's bootstrap/Cayley–Dickson commitments. Specifically:

- **Level 1 ($\mathbb{C}$, complex, Dirac).** Standard Dirac spinors $\psi \in \mathbb{C}^4$; chirality projections $P_{L/R} = (1\mp\gamma^5)/2$; irreducible Weyl components $\psi_L, \psi_R \in \mathbb{C}^2$. Show the split is forced by the reducibility of the complex Clifford representation under the spin group's maximal abelian subgroup, and by the bootstrap's requirement that interactions carry chirality-sensitive content at level 1.
- **Level 2 ($\mathbb{H}$, quaternionic, pseudo-real).** Majorana-type constraint $\psi^c = \psi$ forced by the quaternionic reality structure: the anti-involution $J$ with $J^2 = -1$ commuting with $\rho$ gives the charge-conjugation operator $C$ and the Majorana condition. Derive the Majorana mass term $\tfrac12 m(\psi^T C\psi + \text{h.c.})$ — this is the explicit derivation target [Neutrino Masses](../site/src/content/derivations/particles/neutrino-masses.md) Open Gap has been waiting for.
- **Level 3 ($\mathbb{O}$, octonionic).** Out of scope for Step 3. Non-associativity breaks both the BKM operator-mean construction (Step 1) and the standard $\gamma^\mu$ Clifford algebra (this step). Flag as a separate open problem; do not block Step 3 on it. Note a possible connection to the octonion/color-force structure in [Bootstrap Division Algebras](../site/src/content/derivations/interactions/bootstrap-division-algebras.md) — level 3 may correspond to color rather than to a new spinor sector.
- **Chirality-selection-s1 promotion.** [Chirality Selection](../site/src/content/derivations/gauge/chirality-selection.md) s1 asserts the left-handed preference of weak interactions. If the split $\psi = \psi_L + \psi_R$ emerges from Clifford reducibility plus the bootstrap-level gauge assignment (each Weyl component couples to a distinct bootstrap level's gauge content), s1 becomes a theorem. This is the second potential postulate promotion of the program, after Step 1's retiring of spinor-fisher-s1.

**Tools**: [Bootstrap Division Algebras](../site/src/content/derivations/interactions/bootstrap-division-algebras.md); [Chirality Selection](../site/src/content/derivations/gauge/chirality-selection.md); [Neutrino Masses](../site/src/content/derivations/particles/neutrino-masses.md); standard Clifford representation theory (Atiyah–Bott–Shapiro mod-8 periodicity; Lawson–Michelsohn).

**Output**: (i) Derivation of $\psi = \psi_L + \psi_R$ from Clifford reducibility at level 1; (ii) Majorana constraint derivation at level 2; (iii) verdict on chirality-selection-s1 promotion; (iv) explicit open-problem flag for level 3 (octonion).

#### Step 3 findings (2026-04-21)

**Result: all three level-1 and level-2 targets derived at the Lagrangian level; level 3 flagged open.** No new structural postulates introduced.

**Content delivered.**

1. **Kinematic chirality split at level 1 (Prop 3.1–3.4).** The Dirac spinor decomposes as $\psi = \psi_L + \psi_R$ via the Clifford $\mathbb{Z}_2$ grading generated by $\gamma^5 = i\gamma^0\gamma^1\gamma^2\gamma^3$. The kinetic term splits block-diagonally ($i\bar\psi\gamma^\mu\nabla_\mu\psi = i\psi_L^\dagger\bar\sigma^\mu\nabla_\mu\psi_L + i\psi_R^\dagger\sigma^\mu\nabla_\mu\psi_R$); the mass term mixes chiralities ($\bar\psi\psi = \psi_L^\dagger\psi_R + \psi_R^\dagger\psi_L$). Standard representation theory; no framework-specific content beyond Step 2's Lagrangian.

2. **Two-phenomena clarification (Prop 3.5).** The *kinematic* chirality split (above) is present for every Dirac spinor, including pure-QED electrons with vector-like coupling. The separate phenomenon of *gauge-coupling chirality* — that $SU(2)$ couples only to $\psi_L$ — is the content of [Chirality Selection](../site/src/content/derivations/gauge/chirality-selection.md) via the global quaternionic orientation lock. Step 3 wires this in: the $SU(2)$-gauge-covariant derivative $\nabla_\mu$ in Theorem 2.7 carries $W^a_\mu$ only in the selected Weyl sector. The Standard Model's "by hand" $P_L$ projector on weak vertices becomes framework-derived.

3. **Majorana form at level 2 (Prop 3.6–3.8).** The $SU(2)_L$ fundamental representation carries a canonical quaternionic (anti-linear) structure $J_\epsilon\psi = \epsilon\psi^*$ with $\epsilon = i\sigma_2$, $J_\epsilon^2 = -1$. This is the bootstrap level-2 quaternionic identification. For $SU(2)_L$-doublets with no other distinguishing charges (neutrinos), $J_\epsilon$-invariance gives the Majorana condition $\nu^c = \nu$, and the unique Lorentz-scalar non-derivative bilinear consistent with this invariance is the Majorana mass term $\tfrac12 m_\nu(\nu^T C\nu + \text{h.c.})$. This supplies the Lagrangian-level embedding that [Neutrino Masses](../site/src/content/derivations/particles/neutrino-masses.md) Theorem 1.3 previously supplied only structurally.

4. **Three-generation replication (Prop 3.9).** [Three Generations](../site/src/content/derivations/particles/three-generations.md) Theorem 0.1 gives exactly three winding-direction classes; the Lagrangian-level content is replication of Theorem 2.7 over generation index $k \in \{1,2,3\}$ with masses $m_k$ determined by Three Generations Theorem 4.2.

5. **Level 3 ($\mathbb{O}$) flagged open (Prop 3.10).** Non-associativity breaks BKM operator-means, standard $\gamma^\mu$ algebra, and the $\gamma^5 = i\gamma^0\gamma^1\gamma^2\gamma^3$ $\mathbb{Z}_2$ grading. Important remark: within the framework, level-3 content appears as $SU(3)$ color charge attached to level-1 Dirac spinors ([Color Force](../site/src/content/derivations/gauge/color-force.md)), not as a distinct spinor kinematic level. This removes the need for a level-3 spinor generalization *for Standard Model purposes*. Formalizing the bootstrap level-to-gauge-group map is a future research target.

**Correction to research target B5.** The program was framed around possibly promoting "chirality-selection-s1." Postulate-database inspection confirms that [Chirality Selection](../site/src/content/derivations/gauge/chirality-selection.md) carries *no* active s1 — its central claims already derive from bootstrap-division-algebras (a theorem) plus relational-invariants s1 (upstream, not addressed by this program). The *actual* chirality-related active s1 is `chiral-symmetry-breaking-s1` (vacuum coherence minimization in the QCD confining phase — `gauge/chiral-symmetry-breaking.md`), which is a distinct QCD-level postulate not targeted by this program. So the B5 promotion target was a misidentification; **no postulate promotion on this axis**. What Step 3 *does* deliver is a clean Lagrangian-level separation of the kinematic chirality split from gauge-coupling chirality — content previously conflated in the literature.

**No new structural postulates introduced in Step 3.** All five deliverables trace to already-derived framework content (Clifford representation theory; Chirality Selection Theorem 3.1 + Prop 4.1; Neutrino Masses Theorem 1.3; Three Generations Theorem 0.1 + 4.2).

**Open points carried to Step 4 (updated).**
1. Spin-statistics re-derivation from the final Lagrangian (closing the logical circle that Step 2 Prop 2.3 opened).
2. Weitzenböck–Lichnerowicz curvature check against Einstein–Dirac coupling from the gravity sector of Coherence Lagrangian Theorem 3.1.
3. CPT invariance of the composite Dirac + Majorana + 3-generation Lagrangian.
4. Pauli exclusion from fermionic Fock-space construction on the derived Lagrangian.

### 4. Consistency verification with existing fermion-level theorems

**Task (refined after Steps 2–3)**: Verify that Spin-Statistics, Pauli Exclusion, CPT Theorem, and Three Generations are consistent with the composite Dirac + Majorana + 3-generation Lagrangian (Theorems 2.7, 3.8, Prop 3.9). Where possible, re-derive each as a downstream consequence.

**Four specific verification targets:**

1. **Spin-Statistics re-derivation (closing the Prop 2.3 circle).** Step 2 Proposition 2.3 used spin-statistics as *input* to force first-order-in-$\nabla\psi$. Step 4 must verify that the canonical quantization of the derived Lagrangian (Theorem 2.7) *reproduces* anticommutators $\{\psi(x),\psi^\dagger(y)\} = \delta(x-y)$, closing the logical circle: Axiom 3 → Laidlaw–DeWitt ([Spin and Statistics](../site/src/content/derivations/particles/spin-statistics.md)) → spinor Lagrangian → canonical quantization → anticommutators (matching spin-statistics). This is the load-bearing consistency check.

2. **Weitzenböck–Lichnerowicz curvature check.** Proposition 2.5 of Step 2 notes $(i\gamma^\mu\nabla_\mu)^2 = -\nabla^\mu\nabla_\mu + R\text{-terms}$. Verify the $R$-terms (Einstein–Dirac coupling $\tfrac14 R\bar\psi\psi$) agree with the gravity sector of [Coherence Lagrangian](../site/src/content/derivations/foundation/coherence-lagrangian.md) Theorem 3.1 under variation with respect to $g^{\mu\nu}$. This confirms the observer-projected spacetime framing (Prop 2.9) is consistent with the existing gravitational sector.

3. **CPT Theorem re-derivation.** The composite Lagrangian (Dirac + Majorana + 3 generations) is CPT-invariant by the Pauli–Lüders construction (standard result). Verify this matches [CPT Theorem](../site/src/content/derivations/particles/cpt-theorem.md). Specifically: (a) C acts as $\psi \to C\bar\psi^T$; (b) P acts as $\psi(\vec x, t) \to \gamma^0\psi(-\vec x, t)$; (c) T acts antilinearly via $\psi(\vec x, t) \to T\psi(\vec x, -t)$; (d) the product CPT leaves $\mathcal{L}_{\text{spinor}}$ invariant; (e) the Majorana sector is CPT-consistent (Majorana fermions satisfy CPT automatically; verify this is not circular with the pseudo-reality input).

4. **Pauli Exclusion.** Follows directly from spin-statistics (item 1 above) plus antisymmetry of fermionic Fock states (standard). Verify explicitly that [Pauli Exclusion](../site/src/content/derivations/particles/pauli-exclusion.md) is re-derivable as a corollary of item 1; this should be near-mechanical.

**Items moved out of Step 4 scope:**

- Three Generations consistency — already verified in Step 3 Proposition 3.9 (direct-sum replication).
- Spinor-fisher-s1 promotion — retired in Step 1 (no such postulate needed).
- Chirality-selection-s1 promotion — retired in Step 3 (no such postulate exists; research target B5 was mislabeled).

**Tools**: [Spin and Statistics](../site/src/content/derivations/particles/spin-statistics.md), [Pauli Exclusion](../site/src/content/derivations/particles/pauli-exclusion.md), [CPT Theorem](../site/src/content/derivations/particles/cpt-theorem.md), [Coherence Lagrangian](../site/src/content/derivations/foundation/coherence-lagrangian.md) Theorem 3.1 (gravity sector), Henneaux–Teitelboim *Quantization of Gauge Systems* (Dirac-bracket details for item 1), Lichnerowicz 1963 (item 2), standard Pauli–Lüders CPT (item 3).

**Output**: Consistency checks for each; explicit re-derivation of spin-statistics and Pauli exclusion from the Lagrangian (not just consistency); Lichnerowicz curvature formula verified against framework gravity sector; CPT invariance verified for the composite Lagrangian; identification of any points where the Lagrangian treatment sharpens the existing theorem.

#### Step 4 findings (2026-04-21)

**Result: all four consistency targets pass.** No framework revisions required. The composite spinor Lagrangian (Dirac + Majorana + 3-generation) is fully consistent with the pre-existing fermion-level theorems. No new postulates introduced.

**Content delivered.**

1. **Spin-statistics re-derivation (Prop 4.1) closes the logical circle from Step 2 Prop 2.3.** Canonical Hamiltonian analysis of the first-order Lagrangian produces a second-class primary constraint $\pi_\psi - i\hbar\psi^\dagger \approx 0$; Dirac-bracket reduction leaves a bracket compatible with either commutators or anticommutators. Energy positivity under Axiom 3 (Lyapunov stability) forces the fermionic choice: bosonic quantization gives $H \propto \sum\omega(a^\dagger a - b^\dagger b)$ (unbounded below via antiparticle modes); fermionic quantization gives $H \propto \sum\omega(a^\dagger a + b^\dagger b) + E_0$ (bounded below). This is the Pauli (1940) version of spin-statistics, structurally distinct from the framework's existing Laidlaw–DeWitt route. Both routes land on fermionic; the framework is self-consistent.

2. **Lichnerowicz curvature check (Prop 4.2–4.3).** $(i\gamma^\mu\nabla_\mu)^2 = -g_A^{\mu\nu}\nabla_\mu\nabla_\nu + R_A/4$ (Lichnerowicz 1963). Variation of Theorem 2.7 with respect to $g^{\mu\nu}$ gives the standard Einstein–Dirac stress-energy tensor; the $R/4$ term is an *on-shell* consequence of squaring the Dirac operator, not a Lagrangian-level non-minimal coupling. This is consistent with Coherence Lagrangian Theorem 3.1(v) prohibiting free-parameter scalar-curvature couplings.

3. **CPT invariance (Prop 4.4).** The composite Lagrangian is CPT-invariant term by term: kinetic, Dirac mass, Majorana mass, and chiral $SU(2)$ coupling each pass the Pauli–Lüders check. The Majorana sector is CPT-invariant automatically (Majorana fermions are their own CPT conjugates). Matches [CPT Theorem](../site/src/content/derivations/particles/cpt-theorem.md) Proposition 4.1.

4. **Pauli exclusion (Prop 4.5).** Fermionic Fock space construction on the derived anticommutators gives $(a^\dagger_{p,s})^2 = 0$ directly. Matches [Pauli Exclusion](../site/src/content/derivations/particles/pauli-exclusion.md) Theorem; provides an independent derivation route alongside the existing algebraic-antisymmetry route.

**Sharpenings delivered by Step 4.**
- Spin-statistics now has *two independent* framework routes (topological Laidlaw–DeWitt; energy-positivity Pauli). Both land on the same conclusion, confirming framework self-consistency.
- Pauli exclusion now has *two independent* framework routes (antisymmetry identity; Fock space anticommutators). Same conclusion.
- Majorana CPT-automatic-invariance is now explicit at the Lagrangian level, closing a conceptual gap in [Neutrino Masses](../site/src/content/derivations/particles/neutrino-masses.md).
- The Lichnerowicz $R/4$ term is confirmed as on-shell only, not a Lagrangian-level coupling — consistent with the framework's ban on free-parameter curvature terms.

**No new structural postulates introduced in Step 4.**

### 5. Consolidation into framework-level derivations

**Task**: Consolidate the exploratory content of Steps 1–4 into one or more new framework-level derivations, presented in the framework's standard style (no process narration; no "we find that…" meta-commentary; direct theorem-and-proof presentation). Update existing derivations that now reference the consolidated material.

**Rationale**: The four preceding Steps are research-phase exploratory content mixing results, reasoning paths, and self-reflection. The framework convention (following the pattern-edges-and-mutual-opacity consolidation of 2026-04-20) is that the stable output becomes one or more standalone derivations written as the framework's current understanding, without narration of how we got there.

**Tools**: The Steps 1–4 findings above; the style and structure of the existing derivations in `site/src/content/derivations/`.

**Output**: Proposed list of new derivation files and update-targets for existing derivations, for explicit review before writing. Once the list is agreed, each new derivation is written in sequence, with existing-derivation updates applied in the final commit of the consolidation phase.

**Decision point**: Before writing any new derivation file, pause to review the proposed consolidation shape.

### 6. Downstream derivation propagation

**Task**: Update affected derivations to replace scalar caveats with proper spinor treatment. Specifically:

- [Observer Pattern Signal](../site/src/content/derivations/foundation/observer-pattern-signal.md) Open Gap 2 — spinor Yukawa signal.
- [Profile-Dependent Edges and Confinement](../site/src/content/derivations/foundation/profile-dependent-edges-and-confinement.md) — fermion-profile edges.
- [Observer Viability: Formation, Preservation, and Detection](../site/src/content/derivations/foundation/formation-and-preservation.md) — triplet verification for each SM fermion.
- [Weinberg Angle](../site/src/content/derivations/gauge/weinberg-angle.md) — fermion electroweak currents.
- [Neutrino Masses](../site/src/content/derivations/particles/neutrino-masses.md) — explicit Majorana derivation.
- [Leptogenesis](../site/src/content/derivations/particles/leptogenesis.md) — spinor-level treatment.

**Output**: Each affected derivation updated with scalar caveat removed; framework-level consistency maintained throughout.

## Current status

**Formally articulated**: yes (this document).

**Formalized**: All six steps complete (2026-04-21).

- **Step 1 complete**: BKM Fisher metric selected by intersection of arguments (2) + (5), reinforced by (1). No spinor-fisher-s1 postulate required. Two-metric picture identified: BKM for Lagrangians, SLD for detection edges.
- **Step 2 complete**: Dirac kinetic term $i\hbar\bar\psi\gamma^\mu\nabla_\mu\psi$ derived from BKM pullback + spin-statistics (forcing first-order) + Lorentz scalar uniqueness. Mass term $-mc^2\bar\psi\psi$ derived from Identification 5.3. No new postulates introduced.
- **Step 3 complete**: Kinematic chirality split $\psi = \psi_L + \psi_R$ from Clifford $\mathbb{Z}_2$ grading. Gauge-coupling chirality wired in from existing Chirality Selection. Majorana mass term $\tfrac12 m(\nu^T C\nu + \text{h.c.})$ at level 2 from $J_\epsilon$-invariance. Three-generation replication via $\mathfrak{so}(3)$ winding classes. Level 3 ($\mathbb{O}$) flagged open (but color is level-1-with-color-factor, not a level-3 spinor, so not blocking). Research target B5 corrected: no `chirality-selection-s1` exists on the active postulate list. No new postulates introduced.
- **Step 4 complete**: All four consistency targets pass. Spin-statistics circle closed via energy positivity (Prop 4.1); Lichnerowicz $R/4$ confirmed as on-shell only (Prop 4.2–4.3); CPT invariance of composite Lagrangian verified (Prop 4.4); Pauli exclusion re-derived from Fock construction (Prop 4.5). No new postulates introduced.
- **Step 5 complete**: Two new derivations consolidated into the framework: [Quantum Fisher Metric](../site/src/content/derivations/thermodynamics-ext/quantum-fisher-metric.md) (derived, closes Open Research Direction 2 of Fisher Information Metric) and [Spinor Coherence Lagrangian](../site/src/content/derivations/foundation/spinor-coherence-lagrangian.md) (derived, closes Open Gap 5 of Coherence Lagrangian). Existing derivations updated with cross-references: Coherence Lagrangian, Fisher Information Metric. Sidebar, derivations index, and dependency graph extended. Knowledge index regenerated clean.
- **Step 6 complete**: Downstream propagation to six affected derivations. Addressed-gap entries added to: [Observer Pattern Signal](../site/src/content/derivations/foundation/observer-pattern-signal.md) (Open Gap 2 retired; scalar caveat removed from Overview), [Profile-Dependent Edges and Confinement](../site/src/content/derivations/foundation/profile-dependent-edges-and-confinement.md) (fermion-profile edges), [Observer Viability](../site/src/content/derivations/foundation/formation-and-preservation.md) (triplet verification prerequisite), [Weinberg Angle](../site/src/content/derivations/gauge/weinberg-angle.md) (fermion EW currents), [Neutrino Masses](../site/src/content/derivations/particles/neutrino-masses.md) (Majorana Lagrangian embedding), [Leptogenesis](../site/src/content/derivations/cosmology/leptogenesis.md) (spinor-level foundations).

**Tractability (updated)**: Steps 1–2 took one session; Step 3 looks tractable at similar scope. Consistency checks (Step 4) should be mostly verification but include one non-trivial closing-the-circle task (spin-statistics re-derivation from the Lagrangian). Downstream propagation (Step 5) is mechanical but broad.

**Primary risk (retired)**: Petz family narrowed to BKM in Step 1. No new postulate needed for Fisher-metric selection.

**Remaining risk**: Octonionic sector (level 3) breaks both BKM and standard Clifford algebra; a complete level-3 treatment is outside the current program's scope. This affects the "complete Standard Model" framing but not the core derivation, since Standard Model fermions all live at levels 1–2 in the bootstrap scheme.

## Related framework material

**Derivations directly relevant**:

- [Coherence Lagrangian](../site/src/content/derivations/foundation/coherence-lagrangian.md) — the derivation this extension targets. Open Gap 5 is the explicit call for the spinor extension.
- [Fisher Information Metric](../site/src/content/derivations/thermodynamics-ext/fisher-metric.md) — Čencov's theorem for the classical case; the point of departure.
- [Observer Definition](../site/src/content/derivations/axioms/observer-definition.md) — Identification 5.3 ($\mathcal{C}(\Sigma) = \|I\|$) used for source-strength scaling.
- [Born Rule](../site/src/content/derivations/quantum/born-rule.md) — selection candidate (2).
- [Coherence Conservation](../site/src/content/derivations/axioms/coherence-conservation.md) — selection candidate (1).
- [Spin and Statistics](../site/src/content/derivations/particles/spin-statistics.md) — selection candidate (3) + consistency target.
- [Bootstrap Division Algebras](../site/src/content/derivations/interactions/bootstrap-division-algebras.md) — selection candidate (4) + chirality structure.
- [Observer-Projected Spacetime](../site/src/content/derivations/foundation/observer-projected-spacetime.md) — selection candidate (5).
- [Chirality Selection](../site/src/content/derivations/gauge/chirality-selection.md) — s1 potentially promotable.
- [Neutrino Masses](../site/src/content/derivations/particles/neutrino-masses.md) — Majorana treatment derivable.
- [CPT Theorem](../site/src/content/derivations/particles/cpt-theorem.md) — consistency target.
- [Three Generations](../site/src/content/derivations/particles/three-generations.md) — Theorem 4.2 spinor mass-generation structure.

**Derivations carrying explicit scalar caveat to be updated**:

- [Observer Pattern Signal](../site/src/content/derivations/foundation/observer-pattern-signal.md) Open Gap 2.
- [Profile-Dependent Edges and Confinement](../site/src/content/derivations/foundation/profile-dependent-edges-and-confinement.md).
- [Observer Viability: Formation, Preservation, and Detection](../site/src/content/derivations/foundation/formation-and-preservation.md) — fermion-profile verification.

<a id="related-targets"></a>
## Related research targets

**[pattern-edges-and-mutual-opacity.md](pattern-edges-and-mutual-opacity.md)** — completed 2026-04-20. Consolidated into the four derivations in the Observer Patterns and Viability section. Its scalar treatment of observer pattern signals is the immediate upstream for Step 5 (downstream propagation). The pattern-edges program's detection-noise-vs-preservation-noise distinction applies directly to fermions.

**WKB bounce calculation in the Coherence Lagrangian** — identified as the natural next program *after* the spinor extension completes. Sequencing: spinor extension first (this document); WKB bounce second, built on the completed Lagrangian. The WKB bounce program aims to compute the per-level crystallization exponents $c_k$ in Mass Hierarchy's $\Lambda_k \sim \Lambda_{k-1} e^{-c_k/g_k^2}$ from Euclidean bounce actions, enabling specific mass predictions and potentially promoting mass-hierarchy-s1. WKB bounce's quantitative payoff (matching observed SM fermion masses) requires the spinor Lagrangian this program delivers.

## Context from current conversation (2026-04-21)

The following is context from the session in which this target was formulated, which may not be obvious from scanning the framework alone.

**Decision chain leading to this target.** The completion of the pattern-edges-and-mutual-opacity research program (2026-04-20) consolidated four new derivations covering observer signal, edges, mutual opacity, confinement, and the tripartite viability theorem. A natural follow-on was identified: either (A) compute WKB bounce actions in the Coherence Lagrangian to derive per-level $c_k$, or (B) extend the Coherence Lagrangian to include spinors. Comparison concluded that (B) is more valuable because: it addresses a foundation-layer gap (Coherence Lagrangian Open Gap 5); it unblocks ~5–10 downstream derivations; it is a prerequisite for the quantitative phase of (A) (SM mass content is mostly fermionic). Sequencing: (B) before (A).

**The detection/preservation noise distinction.** During the pattern-edges program, an important structural distinction was sharpened: **detection noise** $m_A c^2$ (the observer's own Cramér-Rao / Fisher-information resolution limit, used for inter-observer detection — [Observer Edges and Mutual Opacity](../site/src/content/derivations/foundation/observer-edges-and-mutual-opacity.md)) versus **preservation noise** $p_{\mathrm{phys}}^{\mathrm{eff}}$ (substrate bit-flip rate on the observer's QEC code, used for code survival — [Substrate Noise and Profile-Dependent Coupling Modulation](../site/src/content/derivations/foundation/substrate-noise-and-profile-coupling.md)). These are operationally distinct and should not be conflated. For the spinor extension, the same distinction will apply: detection noise for spinor observers remains $m_A c^2$ (the fermion's own rest energy); preservation noise is profile-dependent via gauge-coupling content. Fisher-metric selection work for detection noise may be separate from, or integrated with, Fisher-metric selection for preservation noise — investigate during Step 1.

**The observer-projected spacetime framing.** A late-session discussion about geometry-from-relations raised the concern that the Coherence Lagrangian appears to presuppose a background spacetime. This concern was resolved in [Observer Pattern Signal](../site/src/content/derivations/foundation/observer-pattern-signal.md) Remarks 2.4–2.5 for the scalar case: the Lagrangian is on the observer's projected dual $M_A$, not on a background. The spinor extension must preserve this: spinor fields live on $M_A$, the Dirac operator is constructed from $M_A$'s Clifford bundle, and the flat-space Dirac form is the approximately-flat leading-order result within $M_A$. This is structurally the same as for scalars; confirm it explicitly in Step 2.

**Tripartite viability framing.** [Observer Viability: Formation, Preservation, and Detection](../site/src/content/derivations/foundation/formation-and-preservation.md) was established 2026-04-21. Under this framework, every SM fermion must satisfy all three conditions. The spinor extension's Step 4 consistency verification should confirm this tripartite satisfaction for each fermion explicitly, not just verify isolated properties. The triplet framing also suggests a potential "common-saddle" structural connection between the spinor Lagrangian's different boundary conditions and the three viability conditions — one of the open threads from Observer Viability.

**Consolidation pattern worth replicating.** The pattern-edges program consolidated five exploratory research-program derivations (numbered 01–05) into four standalone framework derivations with expanded existing-derivation updates. The spinor extension program is expected to produce a similar shape: exploratory step-wise derivations during the research phase, consolidated at completion into framework-level content. Specifically, if the program succeeds cleanly, expected consolidation targets are: (i) an updated [Coherence Lagrangian](../site/src/content/derivations/foundation/coherence-lagrangian.md) with the spinor sector added, (ii) possible new derivation for Clifford-representation-to-chirality structure if substantial, (iii) updates to ~5–10 downstream derivations. Alternatively, if the Petz family narrows unsatisfactorily, a new structural postulate (spinor-fisher-s1) will be added to the postulate inventory.

**On matching standard quantum information geometry literature.** The Petz family and quantum Fisher metrics are a well-developed area of mathematical physics. Standard references (Petz, Hayashi, Hasegawa) cover most of the structural background needed. The framework's selection argument is where the novel content lies — the Petz family itself and its monotonicity properties are standard mathematics.

**On the WKB bounce sequel.** When the spinor extension completes, the next program is WKB bounce in the Coherence Lagrangian. Key deliverables anticipated there: (a) explicit Euclidean bounce action at each bootstrap level; (b) per-level $c_k$ values; (c) cross-check against observed SM masses (now fermionic-inclusive due to spinor extension); (d) possible promotion of mass-hierarchy-s1; (e) integration with Observer Viability's Open Gap 2 (Coherence Lagrangian common-saddle analysis). The bounce program should take ~2–4 weeks once the spinor Lagrangian is in place.

## Intellectual origin

This target emerged from an April 21, 2026 conversation following the completion of the pattern-edges-and-mutual-opacity research program. The conversation identified Mass Hierarchy s1 as the natural next postulate-promotion target, and proposed computing WKB bounce actions in the Coherence Lagrangian as the direct path. Discussion of the prerequisites for that computation surfaced the fermion-kinetic-term gap (Open Gap 5 of Coherence Lagrangian) as a structural limitation affecting both the quantitative phase of the WKB bounce program and ~5–10 downstream derivations throughout the framework. Comparison of the two directions concluded that the spinor extension is more foundationally valuable and should be executed first; this document articulates that program.

The specific shape of the central challenge — Petz family non-uniqueness at the quantum Fisher level vs. Čencov uniqueness at the classical Fisher level — was identified as the crux. The five candidate selection arguments were drafted during the same conversation; their ordering reflects decreasing confidence in each standing alone. The expectation is that some combination of (1)–(5) narrows to SLD/Bures (the framework's most likely selected metric), but this is not yet established.
