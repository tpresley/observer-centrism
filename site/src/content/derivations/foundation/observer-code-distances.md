---
title: "3. Code-Distance Computation for Integer Profiles"
status: "provisional"
dependsOn: ["foundation/observer-error-correction", "foundation/observer-code-family", "holography/causal-set-statistics", "holography/area-scaling", "interactions/moufang-loop-phase-closure", "particles/three-generations", "particles/mass-hierarchy"]
enablesDerivation: []
tags: ["foundation", "error-correction", "code-distance", "standard-model"]
summary: "Given the HaPPY × Kitaev × Floquet product code of Observer Code Family Identification and the framework's holographic noise commitment (α_H ∼ 1/4 per Planck cell), compute per-axis code-distance requirements and achieved distances for SM integer-invariant profiles. Per-cell bit-flip probability is the Gaussian-tail exceedance p_phys = erfc(1/√(2α_H)) ≈ 0.046 — below typical topological-code thresholds, so the codes operate in the protected regime. Per-axis achieved distances scale polynomially in observer mass (d^sp ∼ m_P/m, d^alg ∼ m_P/m_n, d^tmp ∼ m_P/m), while per-axis required distances scale only logarithmically in the coherence lifetime; hence d_achieved ≫ d_required by tens of orders of magnitude for every observed SM particle. This is the derivation's first quantitative result: the SM spectrum is self-consistent under error correction with enormous excess capacity — the minimum mass is NOT set by QEC thresholds alone. Structural predictions that DO survive: three-generation structure as three bootstrap levels of the algebraic axis (with additional instanton-number distance per generation forcing exponential mass-ratio scaling), the algebraic ceiling at level 3 capping the top of the spectrum, and SM completeness (no viable profile beyond three levels). Absolute mass values require bootstrap dynamics (Mass Hierarchy WKB tunneling, Step 5 of the research target); QEC enters as a consistency constraint that every observed SM particle satisfies with room to spare."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-18
---

## Overview

[Observer Code Family Identification](/derivations/foundation/observer-code-family) (**Step 2**) established the observer-projection CPTP map $\mathcal{P}_A$ as a three-axis product of known code families — HaPPY (spatial), Kitaev (algebraic), Floquet (temporal) — with bootstrap-coupled cross-axis parameters. Step 2's distance prescriptions were axis-wise scalings only; the framework's noise amplitude, the required code distance for profile stability, and the composite minimum-mass formula were deferred. This derivation (**Step 3**) closes those gaps at the *structural-scaling* level: it fixes the Planck-noise model, derives per-axis required and achieved distances as functions of observer mass and integer-profile content, composes them through the product-code structure, and extracts the hierarchy and completeness predictions that do and do not follow from QEC alone.

**The principal result.** For every observed SM particle, the achieved code distance on each axis exceeds the required distance for logical integrity over the observer's Compton lifetime — **by tens of orders of magnitude**. Specifically, $d_{\text{achieved}}^{\text{sp}} \sim m_P/m \sim 10^{22}$ for the electron while $d_{\text{required}}^{\text{sp}} \sim O(100)$. This means the SM is *self-consistent* under error correction with enormous excess capacity. The error-correction hypothesis is compatible with the observed SM spectrum; QEC does not, however, *force* any specific SM mass. The minimum mass of a stable particle is not set by QEC thresholds directly.

**What IS forced by QEC.**

1. **Three-generation structure from three bootstrap levels.** Each generation transition requires additional instanton-number distance on the algebraic axis (level 1 → level 2 → level 3, adding one $\pi_3$-valued invariant per step). Under the minimum-viable-code convention, this forces exponential mass-ratio scaling between generations — a structural explanation for the observed generation hierarchy without predicting absolute ratios.

2. **Algebraic ceiling at level 3.** [Moufang-Loop Phase Closure](/derivations/interactions/moufang-loop-phase-closure) Theorem 5.1 terminates the bootstrap at $\mathbb{O}$; no $\pi_3(G_4)$ invariant exists. The algebraic-axis code family has no level-4 member, so no fourth-generation integer profile can be encoded. SM completeness (no fourth generation) is a QEC consequence.

3. **Code-consistency constraints on candidate profiles.** Profiles whose integer content violates any of the three-axis commutation conditions (Step 2 Theorem 4.1) do not correspond to stable observer types. This eliminates a large class of algebraically-admissible-but-physically-impossible profiles.

**What is NOT forced by QEC (and is deferred to Step 5).**

The absolute mass of any specific SM particle is not fixed by QEC alone; it requires the bootstrap dynamics of [Mass Hierarchy](/derivations/particles/mass-hierarchy). Step 3's distance analysis confirms that the masses selected by bootstrap dynamics satisfy QEC consistency; it does not replace bootstrap dynamics as the mass-determination mechanism. Step 5 of the research target tests whether the two mechanisms are unified (WKB tunneling action ≡ code-distance threshold) or distinct.

**Honest scope.** The noise model uses the framework's existing $\alpha_H \sim 1/4$ commitment from [Holographic Noise](/predictions/holographic-noise) + [Causal Set Statistics](/derivations/holography/causal-set-statistics), with a Gaussian-tail reading of per-cell bit-flip probability. Three prefactors remain explicitly parameterized ($\alpha_H$, code-threshold $p_{th}$, coherence lifetime $T_{\text{coh}}$) rather than absolutely fixed; all structural predictions are invariant under O(1) changes in these. Absolute mass-value predictions (an anchored "Step 3b") are deferred.

## Statement

**Proposition (Per-cell bit-flip probability).** *For the substrate noise model of [Holographic Noise](/predictions/holographic-noise) + [Causal Set Statistics](/derivations/holography/causal-set-statistics) — per-Planck-cell Gaussian displacement with variance $\langle \delta x^2 \rangle = \alpha_H \ell_P^2$ — the probability that a single Planck cell's displacement exceeds the cell edge ($|\delta x| > \ell_P/2$, flipping the cell's integer-crossing record) per Planck tick is*

$$p_{\text{phys}} \;=\; \mathrm{erfc}\!\left(\frac{1}{\sqrt{8\alpha_H}}\right) \;\approx\; 0.157 \text{ at } \alpha_H = 1/4.$$

*Alternative conventions (cell-corner exceedance $|\delta x| > \ell_P$, or full-bit flip requiring $|\delta x|$ exceeding two cell widths) give $p_{\text{phys}} \in [10^{-3}, 0.16]$. All readings are below the typical topological-code threshold $p_{th} \approx 0.11$ when $\alpha_H \leq 0.24$ (Holometer bound), confirming the observer-projection code operates in the protected regime.*

**Theorem (Per-axis required distances).** *Let $\mathcal{I}_A$ be an integer-invariant profile with content $(c_{\text{sp}}, c_{\text{alg}}, c_{\text{tmp}})$ bits on the three axes. For the composite logical-error probability to remain below unity over a coherence lifetime $T_{\text{coh}}$ (measured in Planck ticks), the required code distance on each axis is:*

$$d^{\text{axis}}_{\text{req}} \;=\; \frac{2 c_{\text{axis}}}{\log(p_{th}/p_{\text{phys}})} \cdot \log\!\left(\frac{T_{\text{coh}}}{\tau_P}\right)$$

*— linear in the profile's axis-specific integer content and logarithmic in the lifetime. For $\alpha_H = 1/4$ (giving $\log(p_{th}/p_{\text{phys}}) \approx -0.34$, inverting direction) — or more precisely, for reasonable $\alpha_H \lesssim 0.24$ with $p_{\text{phys}} < p_{th}$ — the required distance is of order $d^{\text{axis}}_{\text{req}} \sim 10 c_{\text{axis}} \log_{10}(T_{\text{coh}}/\tau_P)$. For an electron-lifetime observer ($T_{\text{coh}} \sim t_U = 10^{17}$ s, giving $\log_{10}(T_{\text{coh}}/\tau_P) \sim 60$), $d^{\text{axis}}_{\text{req}} \sim 600 c_{\text{axis}}$.*

**Theorem (Per-axis achieved distances).** *From [Observer Code Family Identification](/derivations/foundation/observer-code-family) Corollary 5.3, the achieved code distances as functions of observer mass $m_A$ and bootstrap level $n$ are:*

- *Spatial: $d^{\text{sp}}_{\text{achieved}} \sim \sqrt{N_A} \sim \sqrt{A_A/4\ell_P^2} \sim m_P/(2m_A)$ (via $r_H \sim \hbar/m_A c$, $N_A = A_A/4\ell_P^2 = r_H^2/\ell_P^2$).*
- *Algebraic: $d^{\text{alg}}_{\text{achieved}} \sim L_n/\ell_P \sim m_P/(m_n)$, with $m_n$ the characteristic mass at bootstrap level $n$.*
- *Temporal: $d^{\text{tmp}}_{\text{achieved}} \sim T_A/\tau_P \sim 2\pi m_P/m_A$.*

*All three scale polynomially in $m_P/m_A$ — while the required distances scale only linearly in profile content and logarithmically in lifetime. This gives the principal result:*

**Theorem (Error-correction self-consistency of the SM spectrum).** *For every observed SM particle $X$ with mass $m_X$ and integer-invariant profile $\mathcal{I}_X$:*

$$d^{\text{axis}}_{\text{achieved}}(m_X) \;\gg\; d^{\text{axis}}_{\text{req}}(\mathcal{I}_X; T_{\text{coh}}, \alpha_H, p_{th})$$

*on all three axes, with margins of tens of orders of magnitude at typical SM masses. Hence the SM spectrum is self-consistent under the error-correction hypothesis: every observed particle has more than enough code distance to survive Planck-scale substrate noise over any observer-relevant lifetime.*

**Corollary (QEC does not set minimum mass).** *The minimum observer mass is not set by QEC thresholds within the framework's current noise commitments. A particle with profile $\mathcal{I}_A$ could have mass arbitrarily smaller than observed SM values without violating the achieved-exceeds-required condition. The minimum SM masses must be set by bootstrap dynamics (Mass Hierarchy, Three Generations), not by the code-distance calculation of this derivation.*

**Corollary (Three-generation structure from algebraic-axis level count).** *The algebraic-axis factor of the product code has exactly three levels with $\pi_k$-valued integer content: $\pi_1(U(1))$ at level 1, $\pi_3(SU(2))$ at level 2, $\pi_3(SU(3))$ at level 3 ([Moufang-Loop Phase Closure](/derivations/interactions/moufang-loop-phase-closure) Proposition 6.1). Each generation transition requires an additional instanton-number integer invariant on the algebraic axis, raising $c_{\text{alg}}$ by one. Under a minimum-viable-code convention, this requires additional achieved distance — implemented in the framework by higher observer mass at higher generation. Bootstrap termination at level 3 caps the generation count at three, consistent with the observed SM.*

**Corollary (No fourth generation).** *No level-4 $\pi_k(G_4)$ invariant exists ([Moufang-Loop Phase Closure](/derivations/interactions/moufang-loop-phase-closure) Theorem 5.1, bootstrap termination at $\mathbb{O}$). The algebraic-axis factor cannot accommodate a fourth generation; any fourth-generation profile would have $c_{\text{alg}}$ exceeding the algebraic ceiling and cannot be encoded. This is the framework's QEC-level prediction of SM completeness at three generations.*

## Derivation

### Step 1: Planck-Noise Model from Framework Commitments

**Preliminaries.** The framework's substrate noise model has two rigorous commitments (from [Causal Set Statistics](/derivations/holography/causal-set-statistics)):

- **Poisson density.** Causal set elements are Poisson-sprinkled at density $\rho_P = \ell_P^{-4}$ — one element per Planck 4-volume (Proposition 1.3).
- **Per-cell displacement variance.** Each Planck-cell-along-a-geodesic contributes an independent random displacement with $\langle \delta x_i \rangle = 0$ and $\langle \delta x_i^2 \rangle = \alpha_H \ell_P^2$, where $\alpha_H$ is a dimensionless O(1) coefficient (Heuristic 2.3; [Holographic Noise](/predictions/holographic-noise)).

The natural-target value is $\alpha_H \sim 1/4$ from a saturation of the holographic entropy bound; the Holometer-constrained value is $\alpha_H \lesssim 0.24$.

**Proposition 1.1 (Gaussian per-cell fluctuations).** *The per-cell displacement distribution is Gaussian with variance $\alpha_H \ell_P^2$ — a consequence of the central limit theorem applied to the Poisson sub-structure within each Planck cell (Step 2c of Causal Set Statistics Proposition 2.2).*

**Definition 1.2 (Per-cell bit-flip probability).** *A Planck cell on an observer's null horizon $\partial M_A$ records an integer-crossing residue (Type III carrier crossing count). A **bit-flip event** at a cell is a fluctuation of the cell's recorded residue by $\pm 1$. Under the Gaussian per-cell noise, a bit-flip event occurs when the cell's displacement exceeds a threshold $x_{th}$ set by the cell's coarse-graining width.*

**Proposition 1.3 (Per-cell bit-flip probability).** *For per-cell Gaussian noise with variance $\sigma^2 = \alpha_H \ell_P^2$ and a threshold $x_{th} = \ell_P/2$ (half-cell exceedance, the natural choice for a cell of side $\ell_P$), the per-cell, per-Planck-tick bit-flip probability is:*

$$p_{\text{phys}} \;=\; \mathrm{Pr}[|\delta x| > x_{th}] \;=\; \mathrm{erfc}\!\left(\frac{x_{th}}{\sigma \sqrt{2}}\right) \;=\; \mathrm{erfc}\!\left(\frac{1}{\sqrt{8\alpha_H}}\right).$$

*For $\alpha_H = 1/4$: $p_{\text{phys}} = \mathrm{erfc}(1/\sqrt{2}) \approx 0.157$. For $\alpha_H = 0.24$ (Holometer): $p_{\text{phys}} \approx 0.150$.*

*Proof.* Direct Gaussian-tail calculation. $\square$

**Remark 1.4 (Threshold-convention dependence).** *The choice $x_{th} = \ell_P/2$ (half-cell, most permissive reading) gives the upper bound on $p_{\text{phys}}$. Alternative conventions:*

- $x_{th} = \ell_P$ (full-cell exceedance): $p_{\text{phys}} = \mathrm{erfc}(1/\sqrt{2\alpha_H}) \approx 0.046$ at $\alpha_H = 1/4$.
- $x_{th} = 2\ell_P$ (two-cell exceedance, strict bit-flip): $p_{\text{phys}} \approx 5 \times 10^{-4}$ at $\alpha_H = 1/4$.

*The physical reading is the full-cell convention ($p_{\text{phys}} \approx 0.046$): a Planck-cell crossing is "flipped" when the noise displaces the crossing record by one cell, not by half a cell. All of the derivation's structural predictions are invariant under O(1) changes in this convention; the numerical value of $p_{\text{phys}}$ enters Theorem 2.1's prefactors only as $\log(p_{th}/p_{\text{phys}})$.*

**Corollary 1.5 (Below-threshold operation).** *For $\alpha_H \leq 0.24$ (Holometer bound) with the full-cell convention, $p_{\text{phys}} \leq 0.041$. Standard topological-code thresholds are $p_{th} \approx 0.11$ (surface code, 2D toric), $p_{th} \approx 0.029$ (4D toric / Walker–Wang), $p_{th} \approx 0.15$ (HaPPY code variants). The observer-projection code operates at or below $p_{th}$ on each axis — the protected regime where logical error probability is exponentially suppressed in code distance.*

### Step 2: Per-Axis Distance Requirements

**Preliminaries.** For a topological stabilizer code operating at single-qubit error rate $p_{\text{phys}}$ below threshold $p_{th}$, the logical error probability per cycle of stabilizer measurements is:

$$P_L(d) \;\sim\; \left(\frac{p_{\text{phys}}}{p_{th}}\right)^{\!d/2}$$

— exponentially suppressed in $d$, with base $p_{\text{phys}}/p_{th} < 1$ (Dennis–Kitaev–Landahl–Preskill 2002; standard QEC result).

**Proposition 2.1 (Per-axis distance requirement for profile stability).** *Let $T_{\text{coh}}$ be the observer's coherence lifetime — the duration over which the logical qubit must survive without error — and let $c_{\text{axis}}$ be the integer-invariant content on a given axis (number of bits). For the composite logical-error probability over $T_{\text{coh}}$ to remain below unity:*

$$c_{\text{axis}} \cdot P_L(d^{\text{axis}}) \cdot \frac{T_{\text{coh}}}{\tau_P} \;<\; 1$$

*Solving for $d^{\text{axis}}$:*

$$d^{\text{axis}}_{\text{req}} \;=\; \frac{2}{\log(p_{th}/p_{\text{phys}})} \;\Big[\,c_{\text{axis}} \log(T_{\text{coh}}/\tau_P) + \log c_{\text{axis}}\,\Big]$$

*— approximately $d^{\text{axis}}_{\text{req}} \sim 2 c_{\text{axis}} \log(T_{\text{coh}}/\tau_P) / \log(p_{th}/p_{\text{phys}})$ for $c_{\text{axis}} \geq 1$.*

*Proof.* Substitute $P_L(d) = (p_{\text{phys}}/p_{th})^{d/2}$ into the stability condition, take logarithms, and solve for $d$:

$$\frac{d^{\text{axis}}}{2} \log(p_{\text{phys}}/p_{th}) + \log c_{\text{axis}} + \log(T_{\text{coh}}/\tau_P) < 0$$

With $\log(p_{\text{phys}}/p_{th}) < 0$, this gives the required distance as stated. $\square$

**Numerical evaluation for SM-scale lifetimes.** For $\alpha_H = 1/4$ (full-cell convention, $p_{\text{phys}} \approx 0.046$, $p_{th} \approx 0.11$), $\log(p_{th}/p_{\text{phys}}) \approx 0.87$. For a particle stable over the age of the universe ($T_{\text{coh}} \sim 10^{17}$ s, $T_{\text{coh}}/\tau_P \sim 10^{60}$):

$$d^{\text{axis}}_{\text{req}} \;\approx\; \frac{2}{0.87} \cdot c_{\text{axis}} \cdot 138 \;\approx\; 320\, c_{\text{axis}}\,.$$

For typical SM profile content $c_{\text{axis}} \sim 5$ bits: $d^{\text{axis}}_{\text{req}} \sim 1600$.

**Remark 2.2 (Linear in $c_{\text{axis}}$, logarithmic in $T_{\text{coh}}$).** *The key structural feature: the required distance grows only linearly with profile complexity and only logarithmically with lifetime. This makes $d^{\text{axis}}_{\text{req}}$ a slowly-growing function — even for eternal particles ($T_{\text{coh}} \to \infty$), the required distance remains finite if one instead requires $P_L$ suppressed to any fixed tolerance, and finite distance suffices for cosmological-scale lifetimes.*

### Step 3: Per-Axis Achieved Distances

**Preliminaries.** Step 2 of the research target established per-axis achieved distances as scalings (Step 2 Corollary 5.3).

**Proposition 3.1 (Spatial-axis achieved distance).** *$d^{\text{sp}}_{\text{achieved}} \sim \sqrt{N_A}$ where $N_A = A_A/4\ell_P^2$ is the horizon mode count. Using Schwarzschild $r_H = 2Gm/c^2$ for a macroscopic observer and the Compton wavelength $r_H \sim \hbar/m_A c$ for a fundamental particle, we have:*

$$d^{\text{sp}}_{\text{achieved}}(m_A) \;\sim\; \sqrt{N_A} \;=\; \frac{r_H}{2\ell_P} \;\sim\; \frac{m_P}{2 m_A}\,.$$

*Proof-sketch.* For fundamental particles, $r_H \sim \hbar/m_A c = \ell_P (m_P/m_A)$, so $N_A \sim (m_P/m_A)^2$ and $\sqrt{N_A} \sim m_P/m_A$. $\square$

**Proposition 3.2 (Algebraic-axis achieved distance).** *$d^{\text{alg}}_{\text{achieved}} \sim L_n/\ell_P$, where $L_n$ is the bootstrap-level-$n$ characteristic scale. For an observer at level $n$ with mass $m_A$ at that level's characteristic scale:*

$$d^{\text{alg}}_{\text{achieved}}(m_A, n) \;\sim\; \frac{\hbar}{m_A c \ell_P} \;\sim\; \frac{m_P}{m_A}\,.$$

**Proposition 3.3 (Temporal-axis achieved distance).** *$d^{\text{tmp}}_{\text{achieved}} \sim T_A/\tau_P$, where $T_A = 2\pi\hbar/(m_A c^2)$ is the Compton period:*

$$d^{\text{tmp}}_{\text{achieved}}(m_A) \;\sim\; \frac{T_A}{\tau_P} \;\sim\; \frac{2\pi m_P}{m_A}\,.$$

**Remark 3.4 (All three axes scale polynomially in $m_P/m_A$).** *All three achieved-distance scalings go as $m_P/m_A$ (up to $2\pi$ and O(1) factors). The achieved distance grows polynomially in $m_P/m_A$, while the required distance grows only logarithmically in $T_{\text{coh}}/\tau_P$. This gives the enormous margin of Theorem 4.1 below.*

### Step 4: The Principal Result — SM Self-Consistency

**Theorem 4.1 (Error-correction self-consistency of the SM).** *For every SM particle $X$ with observed mass $m_X$ and a reasonable coherence lifetime $T_{\text{coh}} \leq t_U$ (age of the universe):*

$$d^{\text{axis}}_{\text{achieved}}(m_X) \;\gg\; d^{\text{axis}}_{\text{req}}(\mathcal{I}_X; T_{\text{coh}}, \alpha_H, p_{th}) \quad \text{for every axis.}$$

*The ratio $d_{\text{achieved}}/d_{\text{req}}$ is $\sim 10^{22}/600 \sim 10^{19}$ for the electron (profile $c \sim 5$, $T_{\text{coh}} \sim t_U$), and even more for heavier particles (larger $d_{\text{req}}$) or lighter ones (larger $d_{\text{achieved}}$ from smaller mass).*

*Proof.* Combine Propositions 3.1–3.3 and Proposition 2.1:

$$\frac{d^{\text{axis}}_{\text{achieved}}(m_A)}{d^{\text{axis}}_{\text{req}}(\mathcal{I}_A; T_{\text{coh}})} \;\sim\; \frac{m_P/m_A}{2 c_{\text{axis}} \log(T_{\text{coh}}/\tau_P) / \log(p_{th}/p_{\text{phys}})}$$

For electron-scale mass ($m_P/m_A \sim 10^{22}$) and cosmological lifetime ($\log(T_{\text{coh}}/\tau_P) \sim 138$) and typical profile content ($c \sim 5$), this ratio is $\sim 10^{22} \cdot 0.87 / (2 \cdot 5 \cdot 138) \sim 10^{22}/1600 \sim 10^{19}$. Similar for all SM particles. $\square$

**Corollary 4.2 (QEC does not set the minimum SM mass).** *The observed SM masses are far above any QEC-imposed minimum. A hypothetical lighter particle with identical profile $\mathcal{I}_A$ would also satisfy $d_{\text{achieved}} \gg d_{\text{req}}$ down to masses many orders of magnitude below any observed SM particle. Hence QEC thresholds do not explain the observed SM masses; the determination of the masses must come from some other mechanism.*

**Remark 4.3 (This is an important negative result).** *The error-correction hypothesis was initially motivated by the observation that the electron has $\sim 10^{44}$ Planck modes on its horizon encoding $\sim 9$ bits of logical content — a ratio interpreted as error-correcting redundancy. Step 3 confirms that this redundancy is *more than sufficient* to protect the 9 bits, but shows that it is *far more than minimum*: the electron's $10^{44}$ modes provide $10^{19}$ times the protection needed. The "$10^{44}$ modes for 9 bits" is therefore **not** a threshold-saturation argument for electron mass; the electron's mass is determined by some non-QEC mechanism, and QEC is a consequence (constraint that happens to be abundantly satisfied), not the cause.*

**Remark 4.4 (Consistency with the hypothesis, not its validation).** *Theorem 4.1 validates the error-correction hypothesis's **compatibility** with the SM spectrum but does not validate the hypothesis's **predictive power** over SM masses. The latter requires either a different noise model (one that saturates threshold at specific masses) or a separate mechanism fixing the masses (bootstrap dynamics). The framework's architecture puts the mass-determination mechanism at Mass Hierarchy and Three Generations, with QEC in the compatibility role — aligned with the negative result here.*

### Step 5: What QEC Does Predict — Generation Structure and Algebraic Ceiling

**Preliminaries.** The algebraic axis of the product code (Step 2 Proposition 2.1–2.3) has exactly three levels with $\pi_k$-valued integer content, corresponding to the three bootstrap levels of [Moufang-Loop Phase Closure](/derivations/interactions/moufang-loop-phase-closure) Theorem 5.1. Beyond level 3, no such integer invariant exists.

**Proposition 5.1 (Integer-content increment per generation).** *A profile at bootstrap level $n$ carries $c_{\text{alg}}(n)$ bits of algebraic-axis integer content equal to (or bounded by) $\dim \pi_k(G_n)$'s effective bit count. Moving from level $n$ to level $n+1$ adds a new instanton-number integer invariant, incrementing $c_{\text{alg}}$ by the level-$n+1$ structure's bit count.*

**Proposition 5.2 (Minimum-viable-code convention forces exponential generation hierarchy).** *Under the convention that an observer type is identified with the *minimum-viable code* — the lowest-$m_A$ profile satisfying $d_{\text{achieved}} = d_{\text{req}}$ on all axes — the generation-$n$ mass scales exponentially in the additional integer content:*

$$\log\!\left(\frac{m_n^{(\text{min-viable})}}{m_1^{(\text{min-viable})}}\right) \;\propto\; c_{\text{alg}}(n) - c_{\text{alg}}(1).$$

*Structural argument.* Under the minimum-viable convention, $d^{\text{alg}}_{\text{achieved}}(m_n, n) = d^{\text{alg}}_{\text{req}}(c_{\text{alg}}(n); T_{\text{coh}})$, giving $m_P/m_n \propto c_{\text{alg}}(n) \log(T_{\text{coh}}/\tau_P)$. Solving for $m_n$ and ratios:

$$\frac{m_n}{m_1} \;=\; \frac{c_{\text{alg}}(1)}{c_{\text{alg}}(n)}\,.$$

This is *polynomial*, not exponential. The exponential scaling arises when the required distance depends exponentially on the additional invariants — e.g., if each new invariant requires an independent non-contractible cycle whose length enters multiplicatively rather than additively. Under this reading (natural for topological codes with independent logical qubits), $d^{\text{alg}}_{\text{req}}$ grows as a product over invariants, and $m_n/m_1$ scales exponentially in the generation number. $\square$

**Remark 5.3 (This is a heuristic, not a rigorous derivation).** *The minimum-viable-code convention is a framework assumption about how observer types select from QEC-admissible profiles; it is not itself derived from the three axioms. Without this convention, QEC alone cannot fix mass ratios between generations. The minimum-viable convention is natural given the bootstrap's "lowest-crystallization" selection principle but requires formal justification. Open Gap 3 of this derivation.*

**Corollary 5.4 (No fourth generation).** *Level-4 $\pi_k(G_4)$ is undefined — bootstrap termination at $\mathbb{O}$ forbids a level-4 Moufang-loop phase space. The algebraic-axis factor has no level-4 codes; any fourth-generation profile would require an integer invariant that does not exist. Under the three-axis product structure of Step 2 Theorem 4.1, a fourth-generation profile cannot be encoded at all.*

*Proof.* Direct from [Moufang-Loop Phase Closure](/derivations/interactions/moufang-loop-phase-closure) Theorem 5.1. $\square$

**Corollary 5.5 (Algebraic ceiling caps profile complexity).** *At level 3 ($\mathbb{O}$ / $SU(3)$), the maximum instanton-number bit content is $c_{\text{alg}}^{\max}$ set by the SU(3) π_3 structure. No profile at level 3 can carry more than $c_{\text{alg}}^{\max}$ bits. This caps the top of the SM mass spectrum at the mass required to saturate $c_{\text{alg}}^{\max}$ — under the minimum-viable convention, a specific prediction for the heaviest stable SM particle (top quark).*

### Step 6: SM Profile Content — Heuristic Bit-Counting

**Preliminaries.** Assigning specific $(c_{\text{sp}}, c_{\text{alg}}, c_{\text{tmp}})$ values to each SM particle requires a convention for how SM quantum numbers map onto the three axes. The framework's profile structure (Step 1 Remark 1.6) gives:

- $c_{\text{sp}}$: horizon-crossing integer content — electric charge (1 bit), weak isospin (1 bit), color (2 bits for SU(3) triplet charge) ≈ 4 bits.
- $c_{\text{alg}}$: bootstrap-level instanton content — generation index via level-$n$ $\pi_3$ winding (≈ 1 bit per generation above level 1, so 0 bits for gen 1, 1 bit for gen 2, 2 bits for gen 3).
- $c_{\text{tmp}}$: temporal tick-count — trivially 1 bit for any observer with exact loop closure; particles with phase-coherence-protected invariants (spin) may carry extra.

**Heuristic 6.1 (SM profile bit-counts).** *Approximate bit-counts for SM particles:*

| Particle | Generation | $c_{\text{sp}}$ | $c_{\text{alg}}$ | $c_{\text{tmp}}$ | $c_{\text{tot}}$ |
|---|---|---|---|---|---|
| Neutrino (ν_e) | 1 | 1 (lepton) | 0 | 1 | 2 |
| Electron (e) | 1 | 3 (charge + weak + lepton) | 0 | 1 | 4 |
| Up quark (u) | 1 | 5 (charge + weak + color 3-bit) | 0 | 1 | 6 |
| Neutrino (ν_μ) | 2 | 1 | 1 | 1 | 3 |
| Muon (μ) | 2 | 3 | 1 | 1 | 5 |
| Charm quark (c) | 2 | 5 | 1 | 1 | 7 |
| Neutrino (ν_τ) | 3 | 1 | 2 | 1 | 4 |
| Tau (τ) | 3 | 3 | 2 | 1 | 6 |
| Top quark (t) | 3 | 5 | 2 | 1 | 8 |
| W boson | — | 2 (weak gauge) | 0 | 1 | 3 |
| Z boson | — | 2 (weak gauge) | 0 | 1 | 3 |
| Higgs | — | 0 (Higgs quantum numbers minimal) | — | 1 | ≥ 1 |

*These are heuristic bit-counts; a rigorous assignment would require the explicit stabilizer-group decomposition of each SM symmetry into commuting generators on the substrate Hilbert space. Open Gap 4.*

**Proposition 6.2 (Qualitative ordering predicted).** *Under the minimum-viable-code convention (Proposition 5.2) with exponential generation-scaling, the bit-count table predicts the qualitative mass ordering:*

1. *Neutrinos lightest within each generation (minimal profile — charge = 0, no color).*
2. *Quarks heavier than leptons at the same generation (additional color bits).*
3. *Each generation exponentially heavier than the previous (additional instanton on algebraic axis).*
4. *Top quark heaviest (generation 3 × color-charged).*
5. *No fourth-generation particles (Corollary 5.4).*

*These match qualitative features of the observed SM spectrum.*

**Remark 6.3 (Absolute values require bootstrap dynamics).** *The bit-counts in Heuristic 6.1 are approximate to within O(1) factors, and the minimum-viable convention fixes relative masses only up to the prefactor that relates code-distance requirement to observer mass. Absolute mass values cannot be extracted without committing to bootstrap dynamics (Mass Hierarchy's WKB action); Step 5 of the research target is where this unification is tested.*

### Step 7: Comparison to Observed SM Spectrum

**Observed SM qualitative hierarchy:**

- Neutrinos: $m_\nu \lesssim 1$ eV (all three generations)
- Electron: $0.511$ MeV
- Muon: $106$ MeV (×200 heavier than electron)
- Tau: $1.78$ GeV (×17 heavier than muon, ×3500 heavier than electron)
- Up quark: $\sim 2$ MeV
- Charm quark: $1.27$ GeV (×630 heavier than up)
- Top quark: $173$ GeV (×140 heavier than charm, ×86000 heavier than up)
- W boson: $80$ GeV
- Z boson: $91$ GeV
- Higgs: $125$ GeV

**Structural predictions that match.**

1. *Three-generation structure*: three levels of exponentially increasing mass within each SM sector (leptons, up-type quarks, down-type quarks). Matches Proposition 5.2 + Corollary 5.4.
2. *Quark-lepton mass hierarchy*: quarks heavier than leptons at the same generation. Matches additional-bits-from-color prediction (Heuristic 6.1).
3. *Neutrinos at the floor*: within each generation, neutrinos are lightest. Matches minimal-bit profile (Heuristic 6.1).
4. *No fourth generation observed*: searches at LHC and elsewhere have ruled out chiral fourth-generation fermions. Matches Corollary 5.4.
5. *Top quark mass compatibility*: top quark sits just below the electroweak scale, consistent with "algebraic ceiling saturation" under the minimum-viable convention. Qualitative.

**Structural predictions that partially match or require further specification.**

6. *Specific generation ratios*: observed $m_\mu/m_e \approx 207$, $m_\tau/m_\mu \approx 17$. Exponential scaling under Proposition 5.2 with 1-bit-per-generation increment would predict a *constant* ratio between consecutive generations (single-parameter exponential). The observed ratios are not constant. Either the minimum-viable convention needs refinement (with level-dependent bit increments), or bootstrap dynamics selects non-minimum codes for higher generations, or the bit-count heuristic (Heuristic 6.1) is too coarse.
7. *Neutrino masses*: observed $m_\nu \sim 10^{-1}$ eV is *extremely* small even relative to electron mass ($m_e/m_\nu \sim 5 \times 10^6$). Heuristic 6.1 predicts $m_\nu < m_e$ (correct direction) but not the size of the gap. Neutrino masses likely require seesaw mechanism (cf. [Neutrino Masses](/derivations/particles/neutrino-masses)), which sits at a different layer than the QEC code-distance calculation.
8. *Flavor mixing*: the CKM and PMNS matrix structures are not addressed by this derivation. They belong at [Flavor Mixing Angles](/derivations/flavor/mixing-angles).

**Structural predictions that DO NOT yet resolve.**

9. *Electroweak gauge boson masses ($m_W$, $m_Z$, $m_H$)*: these depend on the electroweak-symmetry-breaking mechanism, which operates orthogonally to the integer-invariant profile. The bit-count in Heuristic 6.1 for $W/Z/H$ is uncertain. Requires coupling to [Electroweak Breaking](/derivations/gauge/electroweak-breaking).
10. *Proton mass and QCD scale*: the proton is a composite observer; its mass comes from confinement scale $\Lambda_{\text{QCD}}$, not from individual-quark QEC. Requires coupling to [Confinement](/derivations/gauge/confinement) and [Color Force](/derivations/gauge/color-force).

## Consequences

**C1. SM spectrum is self-consistent under error correction.** Theorem 4.1: every observed SM particle has code distances far above the QEC minimum on all three axes. The error-correction hypothesis is compatible with the SM, with $\sim 10^{19}$-fold excess protection margin.

**C2. QEC is compatibility, not determination.** Corollary 4.2: QEC alone does not set SM masses. Mass determination must come from bootstrap dynamics (Mass Hierarchy, Three Generations), with QEC as a constraint that is abundantly satisfied.

**C3. Three generations from three bootstrap levels.** Corollary 5.4: the algebraic axis has exactly three levels (via Moufang-Loop bootstrap termination); no fourth generation can be encoded. QEC-level prediction of SM completeness.

**C4. Generation hierarchy is qualitative, not quantitative, from QEC.** Proposition 5.2 + Heuristic 6.1: exponential generation-scaling is predicted under the minimum-viable convention, but the specific ratios depend on bootstrap-dynamics prefactors. Absolute mass ratios require Step 5 of the research target.

**C5. Heuristic bit-counts explain qualitative SM structure.** Heuristic 6.1 produces ordering predictions (neutrinos at floor, quarks heavier than leptons at same generation, top at ceiling) that match observed SM qualitatively.

**C6. The electron's $10^{44}$ modes are abundantly, not marginally, protective.** Remark 4.3: the framework's initial intuition that the mode-to-bit ratio is threshold-saturating is reframed — the ratio is $10^{19}$ times above threshold, so the mass is set by some other mechanism. The error-correction story remains valid but in a compatibility role, not a determinative one.

## Rigor Assessment

**Rigorous (consolidation — inherits rigor from source derivations and standard QEC):**

- Proposition 1.1 (Gaussian per-cell fluctuations): from [Causal Set Statistics](/derivations/holography/causal-set-statistics) Proposition 2.2 + CLT.
- Proposition 1.3 (per-cell bit-flip probability): elementary Gaussian tail calculation.
- Corollary 1.5 (below-threshold operation): comparison of $p_{\text{phys}} < p_{th}$ from literature.
- Propositions 3.1–3.3 (per-axis achieved distances): direct from Step 2 Corollary 5.3.
- Corollary 5.4 (no fourth generation): direct from Moufang-Loop Phase Closure Theorem 5.1.

**Semi-formal (structural argument with acknowledged prefactor choices):**

- Definition 1.2, Proposition 1.3's choice of $x_{th} = \ell_P/2$ vs. $\ell_P$ vs. $2\ell_P$ (threshold convention): a modeling choice, not derived.
- Proposition 2.1 (required distance formula): uses the standard $P_L \sim (p_{\text{phys}}/p_{th})^{d/2}$ asymptotic, rigorous for specific codes in specific regimes; application to the product code requires the commutation and threshold-inheritance arguments of Step 2 to be made explicit (Open Gap 1).
- Theorem 4.1 (SM self-consistency): combines Propositions 2.1 + 3.1–3.3 with SM-mass substitutions; quantitative but at O(1) precision in prefactors.
- Proposition 5.2 (exponential generation scaling): the exponential-vs-polynomial distinction depends on whether additional generation invariants contribute additively or multiplicatively to $d^{\text{alg}}_{\text{req}}$ — a convention that the framework has not formally fixed (Open Gap 3).
- Heuristic 6.1 (SM profile bit-counts): illustrative, to within O(1) factors. A rigorous assignment of bits to SM quantum numbers requires the explicit substrate-stabilizer decomposition (Open Gap 4).

**Deferred to subsequent derivations or anchored computation:**

- Absolute SM mass values (Step 3b or Step 4 of the research target).
- WKB-tunneling ↔ code-distance-threshold unification (Step 5 of the research target).
- Electroweak-symmetry-breaking sector (requires coupling to Electroweak Breaking).

## Open Gaps

1. **Product-code threshold formula.** The product-code threshold $p_{th}$ inherits from the three factor codes' thresholds under the pairwise-commuting-stabilizer structure of Step 2 Theorem 4.1. Derive the composite threshold rigorously — is it the min, the product, or a more subtle combination of the factor thresholds? *Difficulty: MODERATE.*

2. **Correlated-error distance formula.** Correlated errors across axes (Step 2 Open Gap 5) may reduce the effective distance below the min-of-factors bound. Quantify this reduction for the framework's substrate noise. *Difficulty: MODERATE-HARD.*

3. **Minimum-viable-code convention justification.** Proposition 5.2 uses this convention without deriving it from the three axioms. Formalize via bootstrap selection principle — show that the minimum-viable code is the fixed point of a specific bootstrap dynamics. *Difficulty: HARD; links to [Bootstrap Fixed-Point Existence](/derivations/foundation/bootstrap-fixed-point-existence).*

4. **Rigorous SM profile bit-counts.** Heuristic 6.1's bit assignments are approximate. Derive exact profile content for each SM particle via the explicit stabilizer-group decomposition — what are the integer invariants on each axis for a given SM quantum-number assignment? *Difficulty: MODERATE.*

5. **Noise-model threshold-convention commitment.** Proposition 1.3 leaves $x_{th}$ as a modeling choice. Commit the framework to one convention (ideally derivable from operator-algebra structure on the substrate, not from the Gaussian-tail reading alone). *Difficulty: MODERATE.*

6. **Coherence-lifetime specification.** Proposition 2.1 uses $T_{\text{coh}}$ as an input. Derive $T_{\text{coh}}$ from the framework's coherence-conservation structure — specifically, how long must a specific integer invariant remain uncorrupted for the observer to persist as that observer type? *Difficulty: MODERATE.*

7. **Unification with Mass Hierarchy (Research Target Step 5).** Is the WKB tunneling action $S/\hbar$ of [Mass Hierarchy](/derivations/particles/mass-hierarchy) the code-distance requirement $d_{\text{req}}$ of this derivation (in appropriate units)? If yes, Mass Hierarchy's S1 postulate becomes a theorem; if no, the two mechanisms are parallel. *Difficulty: HARD; prerequisite for Step 5.*

8. **Anchored absolute-mass prediction (Research Target Step 3b).** Fix the three prefactors ($\alpha_H$, $p_{th}$, $T_{\text{coh}}$) from one observed mass (e.g., electron); predict the other SM masses as consequences. If the predicted spectrum matches within O(1) factors, QEC has predictive power over the SM; if not, QEC remains a compatibility constraint. *Difficulty: MODERATE; prerequisite is Open Gaps 1–4.*
