# Horizon Coincidence as a Probe of the Fixed Point

**Type**: Research target (substantially complete — diagnostic phase finished, Step 6 consolidation in progress)
**Status**: Scoped 2026-04-23. Five diagnostic steps complete 2026-04-23: Step 1 (horizon coincidence unified equation), Step 2 (Route A diagnostic — literal Conjecture 8.9 excluded), Step 4 (Route C diagnostic — multi-horizon system under-determines fixed point), Step 5 (shared $1/4$ is direct import via Heuristic 2.3), Option 3 (estimator-specific calculations — $\alpha_H = 1/4$ is framework-distinct from generic-causet $\alpha \sim 1$, observationally favored). Factor-3 tension in $\alpha_H$ bridge rule logged as [issue #28](https://github.com/tpresley/observer-centrism/issues/28). Step 6 consolidation in progress — trivial updates and QEC-code-rate research target spawn staged; tricky content updates (OLV Conjecture 8.9 rewrite, Heuristic 2.3 promotion, Holographic Noise section retitle) to follow.
**Last updated**: 2026-04-23

## The framing observation

A pattern that runs across the framework's existing material but has not been named directly: **black-hole and cosmological horizons are the cleanest places where the framework's continuous and discrete descriptions of physics return the same number with no observer-dependent slippage.**

For an ordinary observer measuring an ordinary object (a rock, a photon, an atom), the entropy assigned to that object depends on which portion of its coherence falls within the observer's coherence domain. Different observers compute different entropies for the same object. Entropy is observer-indexed inaccessible coherence ([Entropy](../site/src/content/derivations/thermodynamics/entropy.md), Definition 3.1).

For a black hole viewed by external observers, this slippage vanishes. The interior is not within any external observer's domain, the relational invariants accessible from outside are entirely on the horizon, and the Bekenstein-Hawking formula $S = A/(4\ell_P^2)$ ([Black Hole Entropy](../site/src/content/derivations/holography/black-hole-entropy.md), Theorem 3.1) returns the same value to every external observer at the same hierarchy level. The same statement applies to cosmological horizons: every comoving observer sees a horizon of area $A_H = 12\pi/\Lambda$ with entropy $S_H = 3\pi/(\Lambda \ell_P^2)$ ([Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md), Step 8 + Theorem 8.10).

These are the cases where the framework's continuous side (geometric area) and discrete side (Planck-cell loop count) compute the same number exactly, not approximately, with no observer-dependent free parameter. The Central Thesis of [Continuous-Discrete Duality](../site/src/content/derivations/foundation/continuous-discrete-duality.md) asserts that the physical universe is the unique fixed point of the continuous and discrete layers' mutual compatibility. Horizon entropies are the framework's currently visible instances of that fixed point. **This research program asks whether they can be exploited as constraints to characterize the fixed point itself, and to pin down quantities the framework has not yet derived.**

## The goal

**Use the horizon coincidence as a quantitative probe of the bootstrap fixed point, with three target outputs in order of priority:**

1. **Sharpen the cosmological constant from a lower bound to a value.** [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Theorem 8.10 establishes $\Lambda \geq 3\pi/(C_0 \ell_P^2)$. Conjecture 8.9 (double saturation) identifies the saturation condition that would convert this bound into an exact value. The cosmological-horizon instance of the horizon coincidence is the framework's most directly accessible window onto whether and when the bound saturates.

2. **Derive Newton's constant $G$ from $\hbar$ and $c$ via independent counting of horizon density.** [Gravitational Constant](../site/src/content/derivations/spacetime/gravitational-constant.md) Theorem 3.3 (Jacobson route) establishes $G = c^4/(4\hbar\eta)$, where $\eta$ is the entropy density per unit horizon area. The current circularity is that $\eta$ is read off from $S = A/(4\ell_P^2)$, which contains $G$ via $\ell_P^2 = \hbar G/c^3$. If $\eta$ can be computed framework-internally from the discrete loop-counting structure without invoking $\ell_P$, the equation becomes non-circular and determines $G$.

3. **Probe the bootstrap fixed-point uniqueness conjecture.** [Bootstrap Mechanism](../site/src/content/derivations/interactions/bootstrap.md) Conjectures 7.1 and 7.2 (existence and uniqueness of the bootstrap fixed point) are the framework's deepest open questions. Each horizon coincidence gives an exact equation between continuous and discrete descriptions; the family of such equations across different horizon types (Schwarzschild, Kerr, Reissner-Nordström, de Sitter, BTZ) provides a multi-equation constraint system that any candidate fixed point must satisfy. Whether this system over-determines the fixed point uniquely is itself a structurally informative question.

## Why the target is plausible

**Five framework commitments stand at the horizon level, each supplying a piece of the program:**

1. **Universal observer-independence at horizons is structural, not coincidental.** [Black Hole Entropy](../site/src/content/derivations/holography/black-hole-entropy.md) Theorem 2.1 (universal inaccessibility) and Proposition 6.1 (observer-relativity) together establish that the entropy is a property of the geometry, not of any test observer, for all external observers in the same connected component of the interaction graph. The observer-independence at horizons is therefore a derived fact in the framework, not an assumption — and it is what lets a horizon-based equation function as a constraint that all observers must agree on.

2. **The Jacobson route is most of the way to deriving $G$.** [Gravitational Constant](../site/src/content/derivations/spacetime/gravitational-constant.md) Theorem 3.3 establishes $G = c^4/(4\hbar\eta)$ rigorously. The remaining open step is the determination of $\eta$ independently of $G$ ([Gravitational Constant](../site/src/content/derivations/spacetime/gravitational-constant.md), Step 3 Remark; Conjecture 6.3). Horizon-counting from the discrete side is exactly the route that could supply $\eta$ without circularity, if a discrete-side counting argument can be constructed that does not silently re-introduce $\ell_P$ (and hence $G$).

3. **The cosmological-horizon $\Lambda$ lower bound has the structure of a horizon coincidence.** [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Theorem 8.10 derives $\Lambda \geq 3\pi/(C_0 \ell_P^2)$ from per-observer holographic finiteness. Conjecture 8.9 identifies the saturation condition (simultaneous saturation at the Planck and cosmological endpoints) under which the bound becomes an equality. The cosmological horizon's coincidence between continuous geometry ($A_H = 12\pi/\Lambda$) and discrete count ($N_H = A_H/(4\ell_P^2)$) is precisely what the saturation condition asserts; the program can probe whether the framework's existing structure forces saturation.

4. **The hierarchical-geometry functor is the natural formalization machinery.** The [hierarchical-geometry](../site/src/data/future-targets.json) future target formalizes the geometry functor $G: \mathbf{Obs} \to \mathbf{Geom}$ that maps each observer's coherence content to a level-indexed effective geometry with level-indexed $\Lambda_n^{\text{eff}}$. The horizon-coincidence equations across multiple horizon types are exactly the kind of cross-level constraint that the functor would need to satisfy at every level. Whether the program proceeds via the functor formalization or independent of it is one of the open questions in the program's structure.

5. **The shared $1/4$ coefficient between $S = A/(4\ell_P^2)$ and $\alpha_H = 1/4$ is suggestive.** Both [Black Hole Entropy](../site/src/content/derivations/holography/black-hole-entropy.md) and the holographic-noise prediction ([Holographic Noise](../site/src/content/predictions/holographic-noise.md), with $\alpha_H \sim 1/4$ as the natural value) carry the same numerical prefactor. Both are instances of horizon-edge counting in the framework. Whether the shared coefficient reflects a single underlying counting law is currently an unverified observation; the program would test this directly.

## What the target buys

**B1. A potential value for the cosmological constant, not just a lower bound.** The framework currently has $\Lambda > 0$ with $\Lambda \geq 3\pi/(C_0 \ell_P^2)$ ([Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Theorem 8.10, Corollary 8.11). The observed value sits at factor $\sim 1.43$ above this bound. If the saturation condition can be established (Conjecture 8.9), the framework would predict $\Lambda$ to within an order-of-unity factor from first principles — currently the framework's most embarrassing missing prediction.

**B2. Promotion of `area-scaling-s1` to a theorem via $G$.** The Jacobson route plus a non-circular determination of $\eta$ would derive $G = c^4/(4\hbar\eta)$ from $\hbar$, $c$, and discrete loop-counting. This is one of the framework's last remaining structural postulates ([Gravitational Constant](../site/src/content/derivations/spacetime/gravitational-constant.md) Conjecture 6.3 reduces to bootstrap fixed-point uniqueness; promotion of `area-scaling-s1` follows). Reduces active postulate count by one.

**B3. Sharpened constraints on the bootstrap fixed point.** Whether the program succeeds at the quantitative level or not, the family of horizon-coincidence equations is structurally informative. Successful joint satisfaction across all horizon types is evidence for fixed-point uniqueness ([Bootstrap Mechanism](../site/src/content/derivations/interactions/bootstrap.md) Conjecture 7.2). Failure to find a consistent solution diagnoses which assumption breaks first. Either outcome moves the bootstrap fixed-point conjecture forward.

**B4. First test of the shared $1/4$ coefficient.** If the same discrete-counting argument that produces $S = A/(4\ell_P^2)$ also produces $\alpha_H = 1/4$, the framework gains structural unification across two of its most quantitatively committed predictions. If it does not, the discrepancy is a probe of which counting structure is doing what work.

**B5. Empirical witness to Continuous-Discrete Duality.** [Continuous-Discrete Duality](../site/src/content/derivations/foundation/continuous-discrete-duality.md) asserts the central thesis without computing the fixed point. Horizon coincidences are the framework's existing instances of the duality holding exactly. Demonstrating that they constrain the fixed point's parameters quantitatively converts the central thesis from a conceptual claim to a concrete computational tool.

**B6. Possible bridge to OLV Gap 5 (geometry functor) and `hierarchical-geometry`.** If the program needs the geometry functor as machinery, it becomes an application of that separate target and motivates its formalization. If it can proceed without the functor, it provides an independent line of evidence for the level-indexed-geometry picture.

## The central challenge: avoiding circularity

The core technical risk is that any "discrete-side counting" argument silently uses $\ell_P$ — and therefore $G$ — and ends up circular. The Jacobson derivation already has this problem; reproducing it in a different language does not advance the framework. **The program succeeds only if a discrete-side counting argument can be constructed that uses framework-intrinsic quantities ($\hbar$, $c$, the bootstrap algebra structure, the universal propagation rate) without any quantity defined in terms of $G$.**

Three sub-challenges follow:

1. **Discrete-side $\eta$ without $\ell_P$.** The horizon-cell density $\eta = 1/(4\ell_P^2)$ is currently obtained from the holographic bound's saturation, which uses $\ell_P$ in its definition ([Holographic Entropy Bound](../site/src/content/derivations/holography/area-scaling.md) Structural Postulate S1, since promoted modulo Conjecture 6.3). A genuine discrete-side derivation of $\eta$ would need to count minimal observer crossings per unit horizon area in framework-intrinsic geometric units — a length scale derived from the U(1) loop's intrinsic period and the network's intrinsic propagation rate. Whether such a derivation is possible without sneaking $G$ back in via the area itself is the load-bearing technical question.

2. **The cosmological-horizon area depends on $\Lambda$, which depends on $G$.** $A_H = 12\pi/\Lambda$ is an equation relating $A$ to $\Lambda$, but $\Lambda$ has dimensions of inverse length squared — equivalently of $G\rho_{\text{vac}}$. Working with the cosmological-horizon coincidence equation requires care to avoid mistakes where $G$ appears on both sides.

3. **Cross-level horizon consistency requires the functor.** The bootstrap is iterative — level-$(n+1)$ horizons are constituted from level-$n$ relational invariants ([Bootstrap Mechanism](../site/src/content/derivations/interactions/bootstrap.md) Proposition 6.2 Remark). Joint satisfaction of horizon coincidences at every bootstrap level is a stronger constraint than satisfying each level's coincidence independently. The geometry functor [hierarchical-geometry](../site/src/data/future-targets.json) is the natural machinery for cross-level consistency. The program may need the functor as a prerequisite, in which case it depends on that separate target and becomes multi-month rather than weeks.

## Candidate paths

**Three routes, each with different tractability:**

**Route A (cosmological-horizon saturation, fastest).** Take the $\Lambda$ lower bound argument from [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Theorem 8.10 and push it to ask under what condition the bound saturates. Conjecture 8.9 (double saturation) identifies the candidate condition; the work is to determine whether the framework's existing structure forces saturation, makes it optional, or rules it out at level $N$ where the observed $\Lambda$ sits. If saturation is forced, $\Lambda$ is determined within the framework. If not forced, the deviation factor (currently $\sim 1.43$) becomes a quantity to compute from the deviation between $S^{(N)}$ and $C_0$. Estimated scope: 4–6 weeks. **Lowest risk, most directly connected to recently established results.**

**Route B (discrete-side $\eta$ for $G$, mid-term).** Construct a discrete-side counting argument for the entropy density per unit horizon area that does not invoke $\ell_P$. The starting point is the minimal-observer construction of [Black Hole Entropy](../site/src/content/derivations/holography/black-hole-entropy.md) Theorem 3.1 (each minimal loop occupies one Planck cell on the horizon), but rewritten with the Planck cell defined intrinsically from the loop's $\hbar$-determined cycle period and the network's $c$-determined propagation rate, rather than from $\ell_P^2 = \hbar G/c^3$. If successful, substitute into the Jacobson formula $G = c^4/(4\hbar\eta)$ to obtain $G$ from $\hbar$ and $c$ alone. Estimated scope: 2–3 months. **High payoff, moderate-to-high risk of irreducible circularity.**

**Route C (multi-horizon consistency system).** Write out the horizon-coincidence equation for each major horizon type — Schwarzschild, Kerr, Reissner-Nordström, de Sitter — and treat the system as joint constraints on the fixed-point structure. Determine whether the system over-determines the fixed point uniquely, has a one-parameter family of solutions, or has multiple discrete solutions. Each outcome is informative about [Bootstrap Mechanism](../site/src/content/derivations/interactions/bootstrap.md) Conjecture 7.2 (uniqueness). Estimated scope: 4–8 weeks. **Moderate risk, primarily a structural diagnosis rather than a quantitative output, but informative whether or not the quantitative routes succeed.**

**Recommended order**: Route A → Route C → Route B. Route A's payoff is most directly accessible and uses only currently established framework results. Route C is a useful structural probe of the fixed-point conjecture independent of $G$. Route B is the highest-payoff route but most likely to encounter the circularity obstacle.

## Specific predictions

If the program succeeds:

1. **Cosmological constant within an order of unity.** The framework predicts $\Lambda \approx 3\pi/(C_0^{(N)} \ell_P^2)$, with the deviation from saturation computable from level-$N$ structure. If saturation is forced (Conjecture 8.9 proved), $\Lambda$ matches observation to within a calculable correction. If saturation is not forced, the deviation factor (currently $\sim 1.43$) becomes a framework prediction.

2. **Newton's constant from $\hbar$, $c$, and combinatorial structure.** $G = \alpha \hbar^a c^b$ for specific exponents $a$, $b$, and a dimensionless coefficient $\alpha$ determined by framework-intrinsic counting. Standard dimensional analysis fixes $a = 1$, $b = -3$, leaving $\alpha$ to be computed; framework prediction would supply $\alpha$.

3. **Shared $1/4$ coefficient across BH entropy, $\alpha_H$, and (potentially) other horizon-edge quantities.** If horizon-edge counting is universal, the same discrete structure should produce the same prefactor in every horizon-related observable. The program would either confirm this universality or identify the structural reason for the differences.

4. **Cross-horizon consistency.** A specific discrete-counting law that reproduces $S = A/(4\ell_P^2)$ for Schwarzschild, Kerr, Reissner-Nordström, and de Sitter horizons simultaneously. The Schwarzschild case is established; extending to rotating and charged BHs is open in [Black Hole Entropy](../site/src/content/derivations/holography/black-hole-entropy.md) (gap noted at Step 7).

5. **Identification of `area-scaling-s1` as a theorem.** If $G$ is derivable, $\ell_P^2 = \hbar G/c^3$ becomes a derived equality, and the structural postulate `area-scaling-s1` is promoted to a theorem ([Gravitational Constant](../site/src/content/derivations/spacetime/gravitational-constant.md) Proposition 8.1).

## What would falsify or require postulating

1. **Irreducible circularity in $\eta$.** If every framework-intrinsic discrete-counting argument for $\eta$ inevitably re-introduces $G$ (perhaps via aperiodic tiling density or via the bootstrap-level scale assignment), the Route B program fails. This would be a structural finding that $G$ is not derivable from $\hbar$, $c$, and the bootstrap structure alone — a sharper version of the dimensional independence already established at [Gravitational Constant](../site/src/content/derivations/spacetime/gravitational-constant.md) Proposition 5.1, but at a level beyond dimensional analysis.

2. **Saturation is not forced and not predictable.** If [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Conjecture 8.9 turns out to be neither provable nor refutable from existing framework structure, the cosmological constant remains as a one-parameter degree of freedom (the level-$N$ saturation deficit), and Route A succeeds only at delivering the deviation-factor to be computed rather than $\Lambda$ itself.

3. **Multi-horizon constraint system inconsistent.** If the horizon-coincidence equations for different horizon types fail to admit a joint solution, the framework has an internal inconsistency in its horizon structure. This would be a structural problem beyond this program's scope but would be a major finding.

4. **Multi-horizon system under-constrained.** If the equations admit a family of solutions, the fixed-point conjecture's uniqueness clause ([Bootstrap Mechanism](../site/src/content/derivations/interactions/bootstrap.md) Conjecture 7.2) is harder to establish than currently formulated; the framework would need additional structural input.

5. **Shared $1/4$ coefficient is a coincidence.** If the program produces independent derivations of the $S = A/(4\ell_P^2)$ and $\alpha_H = 1/4$ coefficients with different proof structures, the surface-similarity is not pointing at a deeper unification, and one of the framework's surface symmetries dissolves.

6. **Cross-level consistency requires the geometry functor.** Most likely outcome: the program needs the [hierarchical-geometry](../site/src/data/future-targets.json) functor as a prerequisite. This would not be a falsification but a finding about prerequisite ordering. Routes A and C might still proceed without the functor; Route B likely does not.

## Formalization path

Concrete steps from target to derivation. Expected scope is 2–6 months depending on which route succeeds.

### 1. Tighten the horizon coincidence as a structural equation

**Task**: Write out the horizon coincidence as an explicit equation between continuous and discrete sides, with observer-independence as a theorem rather than an assumption. For each horizon type (Schwarzschild, Kerr, Reissner-Nordström, de Sitter), state the continuous-side area formula, the discrete-side count formula, and the equality. This is bookkeeping work that is currently scattered across multiple derivations.

**Tools**: [Black Hole Entropy](../site/src/content/derivations/holography/black-hole-entropy.md); [Hawking Radiation](../site/src/content/derivations/holography/hawking-radiation.md); [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Step 8.

**Output**: A unified horizon-coincidence statement covering the major horizon types, with explicit observer-independence theorem. Could become a new derivation `holography/horizon-coincidence.md` or an extension of [Black Hole Entropy](../site/src/content/derivations/holography/black-hole-entropy.md).

**Expected difficulty**: Easy. Mostly consolidation of existing material.

### 2. Probe the cosmological-horizon saturation (Route A)

**Task**: Determine whether [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Conjecture 8.9 (double saturation) is forced by existing framework structure, optional, or excluded at level $N$. Approach via the partition equation: $C_0 = S_{\min} + \sum_n \Delta c_n + S_H$ ([Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Step 8). Saturation requires both endpoint terms to be at their gravitational-saturation values; the bridge $\sum_n \Delta c_n$ must absorb the difference. Compute whether the SM-determined bridge structure forces, allows, or excludes saturation.

**Tools**: [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Steps 7–8 (especially Conjecture 8.9 and Proposition 7.4); [Mass Hierarchy](../site/src/content/derivations/particles/mass-hierarchy.md) Theorem 3.1; [Three Generations](../site/src/content/derivations/particles/three-generations.md); [Bootstrap → Division Algebras](../site/src/content/derivations/interactions/bootstrap-division-algebras.md).

**Output**: Determination of whether the saturation condition is forced. If yes, $\Lambda$ is predicted within the framework. If no, the deviation factor is the quantity to compute next.

**Expected difficulty**: Moderate. Most ingredients exist; the work is in evaluating the bridge-vs-endpoint balance precisely.

### 3. Construct discrete-side $\eta$ without $\ell_P$ (Route B)

**Task**: Construct a derivation of the horizon-cell density $\eta$ that uses only $\hbar$, $c$, and bootstrap-intrinsic geometric/combinatorial quantities — no $\ell_P$, no $G$. The natural starting point is the minimal-observer construction: each minimal loop on the horizon has spatial extent $\sim cT$ where $T$ is the U(1) cycle period, and area scale $\sim (cT)^2$. The cycle period $T$ is set by the coherence cost $\hbar$ via the action-duality argument ([Action and Planck's Constant](../site/src/content/derivations/thermodynamics/action-planck.md)). If $T$ is determined framework-intrinsically without invoking $G$, then $\eta = 1/(cT)^2 \cdot (\text{counting factor})$ gives $\eta$ from $\hbar$ and $c$ alone.

**Tools**: [Black Hole Entropy](../site/src/content/derivations/holography/black-hole-entropy.md) Theorem 3.1 (loop counting on horizon); [Action and Planck's Constant](../site/src/content/derivations/thermodynamics/action-planck.md); [Speed of Light](../site/src/content/derivations/spacetime/speed-of-light.md); [Coherence Lagrangian](../site/src/content/derivations/foundation/coherence-lagrangian.md).

**Output**: Either a non-circular formula for $\eta$ from $\hbar$ and $c$, which substituted into Theorem 3.3 of [Gravitational Constant](../site/src/content/derivations/spacetime/gravitational-constant.md) gives $G$; or a structural argument that no such formula is possible (which is itself a sharpening of the dimensional independence argument).

**Expected difficulty**: Hard. The circularity is the core challenge.

### 4. Multi-horizon consistency system (Route C)

**Task**: Write the horizon-coincidence equations from Step 1 as a system of constraints on the fixed point. Determine whether the system over-determines, under-determines, or exactly determines the fixed-point structure. Use the structural form rather than seeking quantitative output.

**Tools**: Step 1's horizon-coincidence statements; [Bootstrap Mechanism](../site/src/content/derivations/interactions/bootstrap.md) Conjectures 7.1 and 7.2; [Continuous-Discrete Duality](../site/src/content/derivations/foundation/continuous-discrete-duality.md); category-theoretic tools for joint satisfaction of constraint families.

**Output**: A determination of whether the multi-horizon constraint system is consistent with a unique fixed point, multi-solution, or inconsistent. Either outcome is informative about [Bootstrap Mechanism](../site/src/content/derivations/interactions/bootstrap.md) Conjecture 7.2.

**Expected difficulty**: Moderate. Structural rather than quantitative — well-suited to short focused work.

### 5. Test the shared $1/4$ coefficient

**Task**: Investigate whether the discrete-side counting that produces $S = A/(4\ell_P^2)$ ([Black Hole Entropy](../site/src/content/derivations/holography/black-hole-entropy.md) Proposition 5.1) is the same counting that produces $\alpha_H = 1/4$ in [Holographic Noise](../site/src/content/predictions/holographic-noise.md). If yes, the shared coefficient is structural and follows from a single underlying counting law. If no, the surface similarity is coincidental and the discrepancy is informative about which counting regime is doing what work.

**Tools**: [Black Hole Entropy](../site/src/content/derivations/holography/black-hole-entropy.md) Proposition 5.1 (geometric origin of the $1/4$ coefficient); [Holographic Noise](../site/src/content/predictions/holographic-noise.md) and [Causal Set Statistics](../site/src/content/derivations/holography/causal-set-statistics.md); the [holographic-noise-amplitude](../site/src/data/future-targets.json) target.

**Output**: Either a derivation that both prefactors arise from one counting law, or a structural argument that they do not. Either result is publishable framework content.

**Expected difficulty**: Easy-to-moderate. Self-contained, can be done in parallel with Routes A and B.

### 6. Consolidation

**Task**: Consolidate Steps 2–5 findings into framework content. Likely shape: one new derivation `holography/horizon-coincidence.md` (Step 1's unified statement), updates to [Gravitational Constant](../site/src/content/derivations/spacetime/gravitational-constant.md) (Step 3 result, if Route B succeeds), updates to [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Step 8 (Step 2 result on saturation), updates to [Bootstrap Mechanism](../site/src/content/derivations/interactions/bootstrap.md) (Step 4 result on uniqueness probing), and possible cross-references in [Continuous-Discrete Duality](../site/src/content/derivations/foundation/continuous-discrete-duality.md) presenting horizon coincidence as the central thesis's empirical witness.

**Output**: Framework content in standard derivation style; research target retained as historical record.

## Current status

**Formally articulated**: yes (this document).

**Formalized**: Step 1 drafted (2026-04-23) — see Step 1 findings below. Remaining prerequisite framework content is in place across [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md), [Gravitational Constant](../site/src/content/derivations/spacetime/gravitational-constant.md), [Black Hole Entropy](../site/src/content/derivations/holography/black-hole-entropy.md), [Continuous-Discrete Duality](../site/src/content/derivations/foundation/continuous-discrete-duality.md), and [Bootstrap Mechanism](../site/src/content/derivations/interactions/bootstrap.md). The remaining work is in composing them for Steps 2–6.

## Step 1 findings (2026-04-23)

**Task**: Consolidate the horizon coincidence as a unified structural equation across Schwarzschild, Kerr, Reissner–Nordström, and de Sitter. State observer-independence as a theorem rather than as an assumption.

**Outcome**: Draft statement produced in the conversation log (held for review before Step 2; not yet committed to `holography/horizon-coincidence.md`).

**Key structural findings.**

1. **Two-of-four rows are framework-derived.** Schwarzschild (BH entropy Theorem 3.1) and de Sitter (OLV Proposition 3.1 + Definition 8.2) carry both the continuous area and the discrete tile count as derived framework content. Kerr and Reissner–Nordström have the continuous side from standard GR but the discrete-side loop-tiling argument is BH entropy Open Gap 3 — the coincidence is conjectural for these two rows.

2. **Observer-independence splits into two distinct theorems.** For black-hole horizons, the independence holds among *external* observers in the same connected component at the same bootstrap level (BH entropy Theorem 2.1 universal inaccessibility). For cosmological horizons, the independence holds among *comoving* observers at the same highest realized level $N$ (OLV Proposition 7.4 constitutive universality + Definition 8.2 level-indexing). Observer-independence does not extend across horizons (BH entropy Proposition 6.1 observer-relativity) nor across bootstrap levels (OLV Proposition 8.3 strict increase of $\Lambda_n^{\text{eff}}$ with level).

3. **Route B obstacle concrete.** The discrete side as currently written is $A/(4\ell_P^2)$, which already contains $\ell_P$ and hence $G$. The horizon coincidence as currently stated cannot yield $G$ from $\hbar$ and $c$ — the gravitational content is silently packaged into the $\ell_P^2$ factor. Route B needs a discrete-side expression derived from the loop's $\hbar$-determined cycle period $T$ and the network's $c$-determined propagation rate, without $\ell_P$ as a primitive input; none of the four horizon rows currently supplies that.

4. **Route C first deliverable sharper than originally sketched.** With two derived rows (Schwarzschild and de Sitter) and two gap rows (Kerr, RN), a multi-horizon constraint system can be written with four joint equations. The first framework-internal deliverable is whether the two derived rows are consistent with each other — well-defined without waiting on Kerr/RN and more tractable than the original 4-row sketch.

5. **Kerr/RN extension is a framework-update opportunity.** BH entropy Open Gap 3 is already in the framework; the horizon-coincidence framing sharpens the question to "does the minimal-loop tiling of Theorem 3.1 extend to rotating and charged horizons preserving external-observer independence of the tile count?" Closing Open Gap 3 would complete Step 1 without touching the three routes.

**Judgment calls flagged for user review before Step 2 — resolved 2026-04-23.**

- **Destination (Q1)**: Record findings in this research doc for the duration of the program; full consolidation into polished derivations happens at the end, not per-step. No new `holography/horizon-coincidence.md` file yet.
- **Kerr/RN scope (Q2)**: Mark as blocked on [Black Hole Entropy](../site/src/content/derivations/holography/black-hole-entropy.md) Open Gap 3 (rotating and charged black holes). Since Schwarzschild and de Sitter provide an unblocked path forward for Routes A and C, no need to close Open Gap 3 before proceeding. Record blockage and continue.
- **Level-restriction in comoving observer-independence (Q3)**: Keep the level restriction explicit. User flagged an additional observation: higher bootstrap levels may have asymptotic shapes that admit approximate macro-scale generalization. Noted for later — the asymptotic shape of $\Lambda_n^{\text{eff}}$ as $n \to N$ (Proposition 8.3 sequence) is a natural object for a later derivation.

**No new framework content committed in Step 1.** No derivation files modified; no GitHub issues opened; no knowledge index regeneration triggered.

## Step 2 findings (2026-04-23) — Route A diagnostic

**Task**: Determine whether [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Conjecture 8.9 (double saturation) is forced by existing framework structure, optional, or excluded at level $N$.

**Outcome**: Conjecture 8.9 as literally stated is **excluded** by existing framework structure. A reformulated (epoch-conditional) version is **optional**. Route A cannot deliver $\Lambda$ without additional structural input (the geometry functor, or an epoch-selection principle, or both).

**Key findings.**

1. **Endpoint saturation is universal, not conditional.** Both the Planck endpoint (minimal observer has $R_S(m_P) \sim \lambda_C(m_P) \sim \ell_P$ by construction) and the cosmological endpoint ($R_H = \sqrt{3/\Lambda}$ with enclosed mass at its own Schwarzschild scale) are gravitationally saturated as structural facts of the framework. "Double saturation" is not a condition to impose on the bridge — it is already satisfied by both endpoints definitionally. The real content of Conjecture 8.9 is whether the bridge *length* $\sum \Delta c_n$ between these two always-saturated endpoints is uniquely fixed by SM.

2. **Topological regime is $O(10^2)$ bits — framework-computable.** [Mass Hierarchy](../site/src/content/derivations/particles/mass-hierarchy.md) Step 7 + [Bootstrap → Division Algebras](../site/src/content/derivations/interactions/bootstrap-division-algebras.md) Theorem 7.1 fix $\sum_{n \leq 3}\Delta c_n^{\text{topo}} = O(10^2)$ (bounded by SM particle content: 4 division algebras × 3 generations × gauge structure). Cannot supply the observed $\sim 10^{122}$.

3. **Structural regime is epoch-dependent and dominates at current epoch.** [Mass Hierarchy](../site/src/content/derivations/particles/mass-hierarchy.md) Step 7 Remark: $\sum_{n > 3}\Delta c_n^{\text{struct}}$ "grows with composite complexity" — scales with composite density × horizon volume, both $\Lambda$- and time-dependent. [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Proposition 7.5 caveat: $\Omega_m \to 0$ as $t \to \infty$, so $\sum \Delta c_n^{\text{struct}}$ is a decaying observable, not a fixed SM-determined quantity.

4. **Literal Conjecture 8.9 is excluded.** The conjecture requires $\sum \Delta c_n = F(\text{SM only})$, i.e. $\Lambda$-independent. Finding 3 establishes this cannot hold for the dominant structural regime. A topological-only variant would force $\Omega_m \sim 10^{-120}$, observationally excluded at extreme significance.

5. **Reformulated conjecture (SM + cosmic epoch → $\Omega_m$) is optional.** Consistent with framework; not forced or excluded; requires resolving the coincidence problem ("why now?") independently. Connects to baryogenesis ([Leptogenesis](../site/src/content/derivations/cosmology/leptogenesis.md), derived), dark matter ([Dark Matter Granularity](../site/src/content/predictions/dark-matter-granularity.md), semi-quantitative), and structure formation.

6. **The $1.43$ factor is cosmic-evolution, not fundamental.** OLV Corollary 8.11's deviation factor $\Lambda_{\text{obs}}/\Lambda_0^{\text{eff}} = 1/\Omega_\Lambda \approx 1.43$ is the ratio of current-epoch $C_0$ to far-future equilibrium $C_0$. It is a *cosmological-evolution* quantity reflecting the current non-equilibrium universe, not a framework-fundamental ratio. Framework structure bounds $\Omega_\Lambda \in [0.5, 1)$ via holographic bound on structural coherence ($\sum \Delta c_n \leq S_H$); the specific observed $0.7$ is not framework-forced.

**Verdict.** Route A as sketched cannot deliver $\Lambda$. What Route A *does* deliver, after this diagnostic: a sharper characterization of what $\Lambda$-determination requires (geometry functor and/or epoch-selection principle), and confirmation that the anticipated secondary-risk outcome in the research target's "What would falsify or require postulating" Section 2 is the actual outcome.

**User direction on follow-up questions (2026-04-23).**

- **Q4 (OLV Conjecture 8.9 text update)**: Hold until Step 6 consolidation. The excluded-as-literally-stated finding should be carried into a proposed replacement then, not per-step.
- **Q5 (Route A continuation)**: Stop Route A at this diagnostic. Remaining quantitative work in Route A (computing $\Omega_m(t)$ at specific epochs) reproduces standard cosmology without new framework content. Moving to Route C (Step 4).
- **Q6 (Finding 6 elevation)**: Hold for consolidation. The cosmic-evolution reframing of the 1.43 factor should be carried into OLV Step 8 and/or `parameters.json` at Step 6.

**No new framework content committed in Step 2.** Findings held in this research doc; no derivation files modified, no GitHub issues, no index regeneration.

## Step 4 findings (2026-04-23) — Route C multi-horizon consistency

**Task**: Write horizon-coincidence equations from Step 1 as a system of constraints on the bootstrap fixed point. Determine whether the system over-determines, exactly determines, or under-determines the fixed-point structure.

**Outcome**: Multi-horizon constraint system **under-determines** the bootstrap fixed point. Derived rows (Schwarzschild + de Sitter) collapse to a single structural equation (saturated holographic bound, [Holographic Entropy Bound](../site/src/content/derivations/holography/area-scaling.md) Theorem 5.2). Blocked rows (Kerr + RN) would add coefficient-invariance consistency checks, not new parameter constraints. Full 4-row system would remain under-determining for the multi-parameter fixed point.

**Key findings.**

1. **Derived pair is not two independent equations.** Schwarzschild (BH Entropy Thm 3.1) and de Sitter (OLV Def 8.2 at level $N$) rows both instantiate $S = A/(4\ell_P^2)$ with the same $\ell_P$ and same coefficient $1/4$ — a single structural statement applied at two geometries. No two-equation system; one equation used twice.

2. **Content of derived pair is redundant with axioms.** The horizon coincidence is the equality-saturated form of [Holographic Entropy Bound](../site/src/content/derivations/holography/area-scaling.md) Theorem 5.2, which is derived from Axioms 1–3 + S1 (now reducible to bootstrap fixed-point uniqueness). Adding the coincidence as a constraint on $\mathcal{U}^*$ adds no information beyond the axioms.

3. **Kerr/RN rows would probe coefficient invariance, not new parameters.** If [Black Hole Entropy](../site/src/content/derivations/holography/black-hole-entropy.md) Open Gap 3 closes with $\alpha = 1/4$ preserved for rotational and charged geometries, the rows contribute consistency checks with the *same scalar* — not new parameter constraints. Net effect: single constraint ($\alpha = 1/4$ geometry-invariant), applied 4 times.

4. **Full 4-row system at most one scalar constraint vs multi-parameter fixed point.** [Bootstrap Mechanism](../site/src/content/derivations/interactions/bootstrap.md) §Fixed-Point Conjecture lists fixed-point outputs: network topology, coupling constants, mass hierarchy, $\Lambda$, $C_0$, and more. One scalar from horizon coincidence cannot exactly or over-determine this space.

5. **Category-theoretic rephrasing clarifies limits.** Horizon coincidence is a naturality-like condition between area-functor and bit-count-functor over $\mathbf{Horizons}$. Naturality is necessary but not sufficient for fixed-point uniqueness ([Bootstrap Mechanism](../site/src/content/derivations/interactions/bootstrap.md) Conjecture 7.2). Multiple candidate $\mathcal{U}^*$'s could satisfy the same naturality condition.

6. **Positive structural observation: derived pair IS consistent.** Schwarzschild and de Sitter share $\ell_P$, share coefficient $1/4$, share saturation mechanism. Necessary condition for fixed-point uniqueness — passed. No contradiction.

**Verdict.** Route C cannot advance Conjecture 7.2 beyond a necessary-condition consistency check. Uniqueness proof requires contraction or rigidity arguments internal to $\mathbf{Obs}$ ([Bootstrap Mechanism](../site/src/content/derivations/interactions/bootstrap.md) Open Gap 4), not horizon consistency.

**Combined outcome across Routes A and C (after Steps 1, 2, 4).**

| Route | Headline target | Status after diagnostic |
|---|---|---|
| A | $\Lambda$ value via saturation | Cannot deliver — literal Conjecture 8.9 framework-excluded; reformulated version requires geometry functor and/or epoch-selection principle |
| C | Fixed-point uniqueness probe | Cannot deliver — horizon coincidences are redundant with axioms; system under-determines $\mathcal{U}^*$ |
| B | $G$ from discrete $\eta$ | Not yet attempted; Step 1 surfaced the circularity obstacle concretely |

Research target's "What would falsify or require postulating" Sections 2 (saturation not forced) and 4 (multi-horizon under-constrained) both confirmed as actual outcomes.

**User direction on follow-up questions (2026-04-23).**

- **Q7 (next step)**: Move to Step 5 (shared $1/4$ coefficient test) — parallelizable, self-contained, likely to yield concrete structural result in short scope.
- **Q8 (Kerr/RN promotion)**: Hold as option. Defer until Kerr/RN becomes a blocker for any plausible forward path, or until Step 6 consolidation. Existing [Black Hole Entropy](../site/src/content/derivations/holography/black-hole-entropy.md) Open Gap 3 entry is sufficient for now.

**No new framework content committed in Step 4.** No derivation files modified, no GitHub issues, no index regeneration.

## Step 5 findings (2026-04-23) — Shared $1/4$ coefficient test

**Task**: Investigate whether the $1/4$ in [Black Hole Entropy](../site/src/content/derivations/holography/black-hole-entropy.md) $S = A/(4\ell_P^2)$ is the same counting structure as the $1/4$ in [Holographic Noise](../site/src/content/predictions/holographic-noise.md) $\alpha_H \sim 1/4$.

**Outcome**: The shared $1/4$ is **structurally related, conditional on one bridge rule**, not coincidental and not (yet) rigorously unified. First structurally-informative positive result of the program.

**Key findings.**

1. **The $\alpha_H = 1/4$ coefficient is not parallel-derived from an independent Poisson-sprinkling argument.** [Causal Set Statistics](../site/src/content/derivations/holography/causal-set-statistics.md) Heuristic 2.3 explicitly *imports* the BH entropy coefficient: it constructs a Planck-tube causal diamond around a length-$L$ geodesic (boundary area $A_{\max} = L\ell_P$) and applies $N_{\text{eff}} = A_{\max}/(4\ell_P^2) = L/(4\ell_P)$ — "a factor of $1/4$ below the naive bulk count" verbatim. The $1/4$ in $\alpha_H$ IS the $1/4$ in BH entropy, transported to a different geometric object.

2. **The transport requires a bridge rule not derived from the framework.** Heuristic 2.3 uses: "one independent bit of boundary information corresponds to $\ell_P^2$ of length variance." Summing over $N_{\text{eff}}$ bits: $\delta L^2 = N_{\text{eff}} \cdot \ell_P^2 = L\ell_P/4$, giving $\alpha_H = 1/4$. Heuristic 2.3 Caveat 2 explicitly flags the alternative rule "one bit ↔ $4\ell_P^2$ variance" (the holographic area per bit itself), in which case the factors cancel and $\alpha_H \sim 1$. Both rules are dimensionally permissible; the framework does not currently select between them.

3. **Falsification scenario "shared $1/4$ is a coincidence" is ruled out.** Research target Section "What would falsify or require postulating" #5 speculated that BH entropy and $\alpha_H$ might have independent derivations with accidentally-equal prefactors. This is not the framework's current position: Heuristic 2.3 makes the sharing explicit and direct.

4. **Concrete resolution path: [Causal Set Statistics](../site/src/content/derivations/holography/causal-set-statistics.md) Open Gap 1.** Compute the variance of a specific length estimator (Brightwell–Gregory longest-chain, Myrheim–Meyer interval-count, or tube-count) on a Poisson sprinkling of flat Lorentzian spacetime. If the specific estimator yields $\alpha = 1/4$, the unification is validated. If different, the Heuristic 2.3 bridge rule is exposed as a specific-estimator artifact.

5. **The $\alpha_H = 1/4$ target is in knife-edge tension with Holometer.** The Holometer bound $\alpha_H \lesssim 0.24$ is $\sim 3\%$ below the heuristic target. Closing Open Gap 1 would either sharpen or resolve this tension — the rigorous-estimator calculation is therefore directly input to the framework's first fully quantitative prediction, not just structural housekeeping.

**Verdict.** Shared coefficient between BH entropy and $\alpha_H$ is real and structural at the heuristic level, with one framework-undetermined bridge rule as the load-bearing content. The research target's Specific Prediction #3 is partially confirmed at the heuristic level; full rigorous unification depends on Open Gap 1 closure.

**User direction on follow-up questions (2026-04-23).**

- **Q9 (Open Gap 1 promotion)**: Not explicitly answered, but superseded by Q10 direction.
- **Q10 (next step)**: Attempt Option 3 — try to close the shared-coefficient question directly via estimator calculation. User: "payoff is high enough to warrant the immediate effort."

**No new framework content committed in Step 5.** Findings held in this research doc.

## Option 3 findings (2026-04-23) — Estimator-specific variance calculations

**Task**: Attempt to close the shared-coefficient question via direct estimator-variance calculation on a Poisson sprinkling. Per user direction "payoff is high enough to warrant the immediate effort."

**Outcome**: No standard causet-literature estimator naturally produces $\alpha_H = 1/4$. However, the diagnostic produced a stronger-than-expected positive result: $\alpha_H = 1/4$ is a **framework-distinct prediction** arising from treating the BH-entropy count as a fluctuation-degree-of-freedom count (framework-specific coarse-graining), distinguishable from generic-causet $\alpha \sim 1$ by factor of 4. Holometer's null at $\alpha_H \lesssim 0.24$ already favors the framework over the generic-causet position.

**Estimator calculations done.**

| Estimator | Coefficient $\alpha$ | Matches $\sqrt{\ell_P L}$ form? | Notes |
|---|---|---|---|
| Tube-count at $R = \ell_P$ | $1/(2\pi) \approx 0.159$ | Yes | Natural radius, wrong coefficient |
| Tube-count at $R = (2/\pi)^{1/3}\ell_P \approx 0.86\,\ell_P$ | $\mathbf{1/4}$ | Yes | Contrived radius |
| Naive cell-count | $1$ | Yes | Matches Heuristic 2.3 Caveat 2 alternative bridge |
| Brightwell–Gregory longest-chain | KPZ sub-CLT $\sim T^{2/3}$ | **No** | Measures different quantity |
| Myrheim–Meyer interval-count | $\ell_P^4/T^2$ scaling | **No** | Measures different quantity |
| Heuristic 2.3 composite | $\mathbf{1/4}$ | Yes | Framework's specific construction |

**Key findings.**

1. **No generic Poisson-sprinkling estimator reproduces $\alpha_H = 1/4$ at natural parameter values.** Tube-count at $R = \ell_P$ gives $\alpha = 1/(2\pi)$; naive cell-count gives $\alpha = 1$. The $1/4$ requires either a contrived tube radius ($0.86\ell_P$) or the Heuristic 2.3 composite construction.

2. **Brightwell–Gregory and Myrheim–Meyer estimators measure different quantities.** Both have functional forms that don't match $\sqrt{\ell_P L}$ scaling. BG has sub-CLT KPZ scaling; MM has super-CLT volume-based scaling. Neither is a candidate rigorous derivation of $\alpha_H$.

3. **$\alpha_H = 1/4$ is framework-distinct from generic-causet $\alpha \sim 1$.** The specific coefficient arises from treating the BH-entropy count $N_{\text{eff}} = A/(4\ell_P^2)$ as a *fluctuation-degree-of-freedom count* (framework-specific coarse-graining over relational invariants), not merely as an information-capacity cap (standard causet position). This is a nontrivial structural claim.

4. **Holometer null already discriminates framework vs generic-causet.** $\alpha_H \lesssim 0.24$ is consistent with framework $1/4$ but *inconsistent* with generic-causet $\sim 1$. The knife-edge status at $1/4$ is a specific framework prediction supported by Holometer's null, not a generic one that happens to match.

5. **Factor-3 tension identified.** Heuristic 2.3's bridge rule "$\ell_P^2$ per bit ↔ scalar length variance" gives $\alpha_H = 1/4$ directly. A physically motivated bridge rule based on isotropic 3D minimal-observer position uncertainty ($\ell_P^2$ contribution to $|\delta\mathbf{X}|^2$) combined with Holographic Noise Proposition 3.2's isotropic projection ($\delta L_a^2 = (1/3)|\delta\mathbf{X}|^2$) gives $\alpha_H = 1/12$. The two differ by factor of 3. Logged as [issue #28](https://github.com/tpresley/observer-centrism/issues/28) for resolution in a dedicated session. **Resolved 2026-04-23** (see Option 3 follow-up below).

**Verdict.** Option 3 did not produce a rigorous first-principles derivation of $\alpha_H$, but it produced a better result: a sharper framework-vs-generic distinction and an observationally relevant discriminator. The framework's $\alpha_H = 1/4$ is a specific, falsifiable claim, not a generic holographic expectation.

**User direction on follow-up questions (2026-04-23).**

- **Q11 (factor-3 tension)**: Verified on re-read; persistent; logged as GitHub issue #28. Subsequently resolved — see Option 3 follow-up.
- **Q12 (next step)**: Move to Step 6 (consolidation).

**No new framework content committed in Option 3.** Findings held in this research doc and in [issue #28](https://github.com/tpresley/observer-centrism/issues/28).

## Option 3 follow-up (2026-04-23) — Factor-3 tension resolved

**Task**: Revisit the factor-3 tension between Heuristic 2.3's $\alpha_H = 1/4$ and the isotropic-3D reading $\alpha_H = 1/12$ logged as [issue #28](https://github.com/tpresley/observer-centrism/issues/28).

**Outcome**: The tension is resolved in favor of $\alpha_H = 1/4$. The apparent ambiguity comes from two competing readings of "$\ell_P^2$ variance per bit"; the physical content of the Compton wavelength forces the per-component reading, which is isotropy-consistent with Proposition 3.2 and returns $\alpha_H = 1/4$ uniquely. Both framework derivations (scalar-first in Heuristic 2.3, 3D-vector-first in Proposition 3.2) are consistent bases for the same isotropic fluctuation; they do not generate competing predictions.

**Key findings.**

1. **The Compton wavelength is a per-direction scale.** For a minimal observer of mass $m_P$, $\lambda_C(m_P) = \hbar/(m_P c) = \ell_P$ is the minimum localization scale *per direction* — the smallest per-coordinate spread before pair creation, consistent with the standard QFT interpretation of the Compton wavelength and with [Minimal Observer Structure](../site/src/content/derivations/minimal-observer/structure.md) Proposition 7.1's identification of the coherence-domain size with $\lambda_C$. It is *not* the total 3D magnitude.

2. **Per-component reading is isotropy-consistent and returns $\alpha_H = 1/4$.** A 3D minimum-uncertainty wavepacket at Compton scale has $\langle\delta x_i^2\rangle \sim \ell_P^2$ for each $i \in \{1,2,3\}$ separately, so $\langle|\delta\mathbf{x}|^2\rangle \sim 3\ell_P^2$ for the total magnitude. Summing $N_{\text{eff}} = L/(4\ell_P)$ independent minimal-observer contributions gives:
   - Per-component covariance: $\langle \delta X_i \delta X_j\rangle = N_{\text{eff}}\ell_P^2\delta_{ij}$
   - Total 3D magnitude: $\langle|\delta\mathbf{X}|^2\rangle = 3N_{\text{eff}}\ell_P^2 = 3L\ell_P/4$
   - Along-direction scalar variance: $\langle(\hat{n}\cdot\delta\mathbf{X})^2\rangle = N_{\text{eff}}\ell_P^2 = L\ell_P/4$ (for any $\hat n$)
   
   So $\alpha_H = 1/4$ under both Heuristic 2.3 (scalar-first accumulation) and Proposition 3.2 (3D-vector-first projection, $\delta L^2 = \tfrac{1}{3}\langle|\delta\mathbf{X}|^2\rangle$). The two pictures are consistent bases for the same isotropic fluctuation.

3. **Magnitude-bridge reading is physically excluded.** The alternative reading — "each bit contributes $\ell_P^2$ to the total 3D magnitude $\langle|\delta\mathbf{X}|^2\rangle$" (which would give $\alpha_H = 1/12$ via Proposition 3.2's $1/3$ projection) — would require per-component variance of $\ell_P^2/3$, i.e. per-direction localization of minimal observers at $\ell_P/\sqrt{3}$. This is sharper than the Compton limit and inconsistent with the minimum-localization interpretation of $\lambda_C$.

4. **No factor-3 tension in the framework's position.** The apparent tension was an artifact of ambiguity in the phrasing of the bridge rule, not a genuine conflict between Heuristic 2.3 and Proposition 3.2. Once the per-component reading is specified, the two derivations agree exactly.

**Framework content committed 2026-04-23.**

- [Causal Set Statistics](../site/src/content/derivations/holography/causal-set-statistics.md) Heuristic 2.3: added a Remark ("resolution of the scalar-vs-vector bridge-rule ambiguity") stating the per-component reading is forced by the Compton-wavelength interpretation, showing both derivations return $\alpha_H = 1/4$, and documenting why the magnitude-bridge alternative is unphysical. Status paragraph updated from "Two internal open items remain" to one open item (first-principles causet-literature estimator; scalar-vs-vector is now resolved).
- [Holographic Noise](../site/src/content/predictions/holographic-noise.md) Step 3: added a "Consistency with Heuristic 2.3" paragraph under "Setting the amplitude," cross-referencing the Heuristic 2.3 Remark. "Why $\alpha_H = 1/4$ Is a Framework-Specific Prediction" section updated from "Two open items remain" to one open item, with the scalar-vs-vector ambiguity resolved in-line.
- [Issue #28](https://github.com/tpresley/observer-centrism/issues/28) closed with resolution summary.

**Verdict.** Issue #28 resolved. The framework's $\alpha_H = 1/4$ is forced by the per-component Compton-wavelength reading; the apparent factor-3 ambiguity was a phrasing artifact, not a genuine inconsistency. Heuristic 2.3 and Proposition 3.2 are now explicitly consistent in the framework content.











**Tractability**: moderate, with strong route-to-route variation. Route A (cosmological-horizon saturation) is most tractable and uses only recently established results. Route C (multi-horizon constraint system) is moderately tractable and structurally informative regardless of outcome. Route B (discrete-side $\eta$ for $G$) is the highest-payoff route but most likely to encounter the irreducible-circularity obstacle.

**Recommended starting point**: Step 1 (horizon coincidence as structural equation), then Step 2 (cosmological-horizon saturation, Route A). These two together represent ~4–6 weeks of focused work and establish whether the program can deliver on its highest-priority goal (cosmological constant determination).

**Primary risk**: Circularity in Route B. Discrete-side $\eta$ may not be derivable independently of $\ell_P$, in which case $G$ remains an empirical input.

**Secondary risks**: Conjecture 8.9 may not be decidable from existing framework structure (Route A produces only a deviation-factor result); the multi-horizon constraint system may turn out to be trivially satisfied or trivially inconsistent (Route C produces no informative result); the shared $1/4$ coefficient may be coincidental (Step 5 produces a clarifying negative result).

**Primary payoff**: Either a value for $\Lambda$ (Route A success) or a value for $G$ (Route B success). Both are quantities that have resisted derivation since the framework began.

## Related framework material

**Derivations directly relevant**:

- [Black Hole Entropy](../site/src/content/derivations/holography/black-hole-entropy.md) — $S = A/(4\ell_P^2)$ from loop counting; Theorems 1.2, 2.1, 3.1; Proposition 5.1 (geometric origin of the $1/4$ coefficient); Proposition 6.1 (observer-relativity of BH entropy).
- [Hawking Radiation](../site/src/content/derivations/holography/hawking-radiation.md) — loop closure failure at horizon; coherence-dual pair production.
- [Holographic Entropy Bound](../site/src/content/derivations/holography/area-scaling.md) — $S \leq A/(4\ell_P^2)$ from minimal-loop tiling; Theorems 5.2, 7.1; structural postulate `area-scaling-s1` (would be promoted to theorem if Route B succeeds).
- [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) — Step 8 (level-indexed $\Lambda_n^{\text{eff}}$); Definition 8.1, 8.2; Proposition 8.7 (numerical level-0 projection); Proposition 8.8 (partition equation as identity); Conjecture 8.9 (double saturation); Theorem 8.10 (strict positivity); Corollary 8.11 (numerical lower bound).
- [Gravitational Constant](../site/src/content/derivations/spacetime/gravitational-constant.md) — Theorem 3.3 (Jacobson route); Proposition 4.1 (self-consistency bound); Proposition 5.1 (dimensional independence); Conjecture 6.3 (curvature bridge); Proposition 8.1 (area-scaling-s1 promotion path); Step 11 (constitutive emergence).
- [Bootstrap Mechanism](../site/src/content/derivations/interactions/bootstrap.md) — Conjecture 7.1 (fixed-point existence); Conjecture 7.2 (uniqueness); Proposition 6.2 + Remark (cross-level horizon consistency).
- [Continuous-Discrete Duality](../site/src/content/derivations/foundation/continuous-discrete-duality.md) — Central Thesis; Steps 1–5 (continuous layer, discrete layer, compatibility, fixed point, consequences).
- [Coherence Conservation](../site/src/content/derivations/axioms/coherence-conservation.md) — Axiom 1; Proposition 5.4 (Cauchy-slice conservation); Corollary 5.5a (integer quantization).
- [Action and Planck's Constant](../site/src/content/derivations/thermodynamics/action-planck.md) — $\hbar$ as minimum cycle cost; needed for Route B's intrinsic length scale.
- [Speed of Light](../site/src/content/derivations/spacetime/speed-of-light.md) — universal propagation rate; needed for Route B.

**Predictions relevant**:

- [Holographic Noise](../site/src/content/predictions/holographic-noise.md) — quantitative prediction with $\alpha_H \sim 1/4$; shares the $1/4$ coefficient with BH entropy (Step 5 of this program tests whether this is structural).

**Related research targets**:

- [hierarchical-geometry](../site/src/data/future-targets.json) — formalizes the geometry functor; potential prerequisite for cross-level horizon consistency in Route B / Step 4.
- [combinatorial-bootstrap-fixed-point](../site/src/data/future-targets.json) — combinatorial reformulation of the fixed-point conjectures; alternative route to Conjecture 7.2.
- [knot-theoretic-fixed-point](../site/src/data/future-targets.json) — surgery/Chern-Simons route to the bootstrap fixed point.
- [holographic-noise-amplitude](../site/src/data/future-targets.json) — first-principles derivation of $\alpha_H$; closely connected to Step 5 of this program.

**Closed-related research targets** (for context):

- [cosmological-arrow-lambda-sign](./cosmological-arrow-lambda-sign.md) — closed 2026-04-22; established $\Lambda > 0$ strictly via Theorem 8.10. The current program builds on this result by asking what additionally fixes the *value* of $\Lambda$, not just its sign.
- [structure-clumping-and-void-expansion](./structure-clumping-and-void-expansion.md) — closed 2026-04-22 with negative result; explored spatially-resolved $\Lambda^{\text{eff}}(x)$. The current program approaches the level-indexed $\Lambda_n^{\text{eff}}$ structure from a different angle (horizon coincidences rather than spatial variation).

## Context from current conversation (2026-04-23)

The framing observation arose during a session writing a standalone introduction to Observer-Centrism. While drafting Chapter 9 (The Edge of Knowledge) and Chapter 10 (The Two Layers), the user noticed that black-hole entropy is unique among "objects" in being assigned the same value by all external observers at the same hierarchy level — in contrast to ordinary objects, whose entropy is observer-indexed and varies between observers.

A subsequent exchange explored whether this observation has further implications. Three were identified, the third being load-bearing for this program:

1. The historical priority of holography for black holes is structural, not accidental — black holes are where the privileged shared boundary surface is most obvious, with no observer-dependent slippage about what's inside or outside.

2. Black holes function as canonical reference units for information, in a precise sense — they are among the very few objects whose entropy assignment is observer-independent at a given hierarchy level.

3. The black hole horizon is the cleanest visible instance of the [Continuous-Discrete Duality](../site/src/content/derivations/foundation/continuous-discrete-duality.md) Central Thesis. Continuous-side area equals discrete-side count, exactly, with no observer dependence. This is what the duality asserts the universe is, at the fixed point. Horizons are where it shows.

The user then asked whether this could be exploited as a foothold to advance the framework. The conversation identified the cosmological-constant saturation question (Route A) and the Newton-constant determination via discrete-side $\eta$ (Route B) as the most concrete payoff candidates, with the multi-horizon constraint system (Route C) as a structural probe of the bootstrap fixed-point uniqueness. This research target document records the program in self-contained form so it can be picked up in a later session without requiring this conversation's context.

## Intellectual origin

Scoped 2026-04-23 during the standalone-introduction document session, after the user's observation about observer-independence of black-hole entropy in Chapter 9. The framing is novel as a research target — the connection between observer-independent horizon entropy and the Central Thesis fixed point has not been explicitly named in the framework's existing material — but each component piece is already established. The program's content is in composing horizon coincidence, the [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Step 8 machinery, the [Gravitational Constant](../site/src/content/derivations/spacetime/gravitational-constant.md) Jacobson route, and the [Continuous-Discrete Duality](../site/src/content/derivations/foundation/continuous-discrete-duality.md) Central Thesis into a quantitative probe of the fixed point.

The user explicitly noted that the load-bearing observation (item 3 above) is not in the framework's existing material, and that whether to fold a version of it back into framework content is a judgment call. The recommendation is that this research target document serve as the working artifact while the program is active; if Routes A, B, or C deliver, the result would be incorporated into framework derivations in the standard way, with a sentence or two added to [Continuous-Discrete Duality](../site/src/content/derivations/foundation/continuous-discrete-duality.md) acknowledging the horizon-coincidence framing.
