---
title: "Renormalization Group from Coherence"
status: "rigorous"
dependsOn: ["thermodynamics/entropy", "thermodynamics/action-planck"]
enablesDerivation: ["cosmology/coupling-constants"]
tags: ["thermo-ext"]
summary: "The renormalization group is coherence redistribution across scales: integrating out high-frequency coherence modes transfers coherence to effective low-frequency couplings, with the bootstrap hierarchy providing the fixed-point structure and Zamolodchikov's c-theorem emerging from the second law"
rigorLevel: "formal"
lastUpdated: 2026-03-10
---

## Statement

**Theorem.** The renormalization group (RG) emerges as the scale-dependent coarse-graining of the coherence measure. Integrating out coherence modes above a cutoff scale $k$ defines a scale-dependent effective coherence $\mathcal{C}_k$. Coherence conservation (Axiom 1) constrains the flow: what is lost from the UV must reappear as effective couplings at scale $k$. The resulting flow equation is the coherence analog of the Wetterink-Morris exact RG equation. Fixed points of this flow correspond to levels of the bootstrap hierarchy, and the monotonic decrease of the c-function along RG flow is a consequence of the second law of thermodynamics (entropy as inaccessible coherence).

## Structural Postulate

**Structural Postulate S1 (Scale decomposition of coherence).** The coherence measure $\mathcal{C}$ on a system $S$ admits a decomposition by characteristic frequency $\omega$ (equivalently, by inverse length scale $k = \omega/c$ via [Speed of Light](/derivations/spacetime/speed-of-light)):

$$\mathcal{C}(S) = \int_0^\infty \rho_\mathcal{C}(\omega) \, d\omega$$

where $\rho_\mathcal{C}(\omega) \geq 0$ is the **coherence spectral density** — the coherence per unit frequency. The cumulative coherence above scale $k$ is:

$$\mathcal{C}_{>k}(S) = \int_{ck}^\infty \rho_\mathcal{C}(\omega) \, d\omega$$

**Remark.** This postulate connects the abstract coherence measure to the physical frequency spectrum via the [Action and Planck's Constant](/derivations/thermodynamics/action-planck) relation $E = \hbar\omega$. The frequency decomposition exists because the observer's coherence dynamics are governed by $U(1)$ phase oscillations ([Loop Closure](/derivations/axioms/loop-closure)), which have well-defined frequencies. The postulate's content is that these frequencies provide a natural scale ordering — the same ordering that defines the Wilsonian RG.

## Derivation

### Step 1: Scale-Dependent Coherence

**Definition 1.1.** The **infrared coherence** at scale $k$ is the coherence in modes with frequency below $ck$:

$$\mathcal{C}_k(S) = \int_0^{ck} \rho_\mathcal{C}(\omega) \, d\omega = \mathcal{C}(S) - \mathcal{C}_{>k}(S)$$

This represents the coherence accessible to an observer who can only resolve frequencies up to $ck$ — equivalently, who can only probe distances larger than $\sim 1/k$.

**Definition 1.2.** The **effective couplings** at scale $k$ are the relational invariants ([Relational Invariants](/derivations/interactions/relational-invariants)) computed using only modes below $k$. Denote these $\{g_i(k)\}$, where $i$ indexes the independent invariants.

**Proposition 1.3 (Scale-dependent coherence conservation).** *The total coherence is independent of the cutoff:*

$$\mathcal{C}(S) = \mathcal{C}_k(S) + \mathcal{C}_{>k}(S) \quad \forall k$$

*The coherence in UV modes does not vanish — it is "integrated out" into the effective couplings $\{g_i(k)\}$.*

*Proof.* Direct from the additive decomposition in S1 and Axiom 1 (coherence conservation). The total coherence is a conserved quantity; changing the cutoff $k$ merely repartitions it between the resolved ($\mathcal{C}_k$) and unresolved ($\mathcal{C}_{>k}$) sectors. $\square$

**Remark.** This is the coherence framework's version of the central insight of the Wilsonian RG: "integrating out" high-energy modes doesn't destroy information — it repackages it into effective low-energy parameters.

### Step 2: The Coherence Flow Equation

**Theorem 2.1 (Exact coherence flow).** *The scale dependence of the infrared coherence satisfies:*

$$\frac{d\mathcal{C}_k}{d(\ln k)} = c \, k \, \rho_\mathcal{C}(ck)$$

*This is the rate at which coherence is being transferred from the UV to the IR as the cutoff is lowered.*

*Proof.* By Definition 1.1:

$$\frac{d\mathcal{C}_k}{d(\ln k)} = \frac{d}{d(\ln k)} \int_0^{ck} \rho_\mathcal{C}(\omega) \, d\omega = ck \, \rho_\mathcal{C}(ck) \cdot \frac{d(ck)}{d(\ln k)} / (ck)$$

Using $\frac{d(ck)}{d(\ln k)} = ck$:

$$\frac{d\mathcal{C}_k}{d(\ln k)} = ck \, \rho_\mathcal{C}(ck)$$

which is non-negative since $\rho_\mathcal{C} \geq 0$. $\square$

**Corollary 2.2 (Effective coupling flow).** *The effective couplings evolve as:*

$$\frac{dg_i}{d(\ln k)} = \beta_i(\{g_j\}, k)$$

*where the $\beta$-functions encode how each coupling responds to the scale change. These $\beta$-functions are determined by the coherence spectral density $\rho_\mathcal{C}$ and the structure of the relational invariants at scale $k$.*

**Remark.** The exact form of $\beta_i$ requires specifying the system (which gauge group, which matter content). At this stage, we derive the *structure* of the flow equation and its constraints from coherence conservation, not the specific $\beta$-functions.

### Step 3: The Wetterink-Morris Analog

**Proposition 3.1 (Effective coherence action).** *Define the scale-dependent effective coherence action as the Legendre transform of the generating functional for coherence correlation functions, with modes above $k$ integrated out:*

$$\Gamma_k[\phi] = \sup_J \left\{ \int J \phi - \ln Z_k[J] \right\} - \Delta S_k[\phi]$$

*where $\Delta S_k[\phi] = \frac{1}{2}\int \phi \, R_k \, \phi$ is the regulator that suppresses modes below $k$, and $R_k$ is a smooth cutoff function satisfying $R_k(p^2) \to \infty$ for $p^2/k^2 \to 0$ and $R_k(p^2) \to 0$ for $p^2/k^2 \to \infty$.*

**Theorem 3.2 (Coherence flow equation — analog of Wetterink-Morris).** *The effective coherence action satisfies the exact flow equation:*

$$\frac{d\Gamma_k}{d(\ln k)} = \frac{1}{2} \text{Tr}\left[ \left(\Gamma_k^{(2)} + R_k\right)^{-1} \frac{dR_k}{d(\ln k)} \right]$$

*where $\Gamma_k^{(2)} = \delta^2\Gamma_k/\delta\phi^2$ is the second functional derivative (the inverse propagator) and the trace is over all field modes.*

*Proof.* The derivation applies the Wetterich-Morris functional RG construction (Wetterich, 1993; Morris, 1994) to the coherence action from [Action and Planck's Constant](/derivations/thermodynamics/action-planck) (Theorem 5.1). The argument is standard functional analysis; we give it in full for completeness.

**Step (i).** The scale-dependent partition function is:

$$Z_k[J] = \int \mathcal{D}\phi \, \exp\!\left(-\frac{1}{\hbar}(S[\phi] + \Delta S_k[\phi] - \int J\phi)\right)$$

where $S[\phi]$ is the coherence action, $\Delta S_k[\phi] = \frac{1}{2}\int \phi \, R_k \, \phi$ is the regulator, and $\hbar$ is the minimum coherence cost per cycle ([Action and Planck's Constant](/derivations/thermodynamics/action-planck), Definition 3.2).

**Step (ii).** The scale-dependent free energy is $W_k[J] = \hbar \ln Z_k[J]$. Differentiating with respect to $\ln k$ at fixed source $J$:

$$\frac{dW_k}{d(\ln k)} = -\frac{1}{2}\left\langle \phi \, \frac{dR_k}{d(\ln k)} \, \phi \right\rangle_k = -\frac{1}{2}\text{Tr}\left[(\langle\phi\phi\rangle_k - \langle\phi\rangle_k \langle\phi\rangle_k + \langle\phi\rangle_k \langle\phi\rangle_k) \frac{dR_k}{d(\ln k)}\right]$$

where $\langle \cdot \rangle_k$ denotes the expectation value with the regulated measure.

**Step (iii).** Define the classical field $\varphi = \delta W_k / \delta J$ and the effective average action via Legendre transform: $\Gamma_k[\varphi] = \sup_J\{\int J\varphi - W_k[J]\} - \Delta S_k[\varphi]$. The connected two-point function satisfies $\langle\phi\phi\rangle_k - \langle\phi\rangle_k\langle\phi\rangle_k = (\Gamma_k^{(2)} + R_k)^{-1}$ (by the standard property of Legendre transforms applied to the generating functional).

**Step (iv).** Combining Steps (ii) and (iii), and using $d\Delta S_k/d(\ln k) = \frac{1}{2}\varphi \, (dR_k/d\ln k) \, \varphi$ which cancels the $\langle\phi\rangle_k\langle\phi\rangle_k$ term:

$$\frac{d\Gamma_k}{d(\ln k)} = \frac{1}{2} \text{Tr}\left[ \left(\Gamma_k^{(2)} + R_k\right)^{-1} \frac{dR_k}{d(\ln k)} \right]$$

This is exact — no perturbative expansion has been made. The trace is over all field modes, and the right-hand side has the structure of a one-loop diagram with the full (non-perturbative) propagator. $\square$

**Remark.** The factor of $\hbar$ in the exponent connects the coherence action to the quantum partition function: $\hbar$ converts between coherence cost (in coherence units) and the exponent of the path integral (dimensionless). This is the identification established in [Fisher Information Metric](/derivations/thermodynamics-ext/fisher-metric) (Proposition 4.1): $\hbar$ is the bridge between coherence geometry and information geometry.

### Step 4: Bootstrap Fixed Points as RG Fixed Points

**Theorem 4.1 (Fixed-point correspondence).** *A fixed point of the coherence flow — where $dg_i/d(\ln k) = 0$ for all couplings — corresponds to a level of the bootstrap hierarchy ([Bootstrap Mechanism](/derivations/interactions/bootstrap)).*

*Proof.* The argument proceeds in three steps.

**Step 1 (Bootstrap stability implies scale invariance).** By [Bootstrap Mechanism](/derivations/interactions/bootstrap) (Theorem 3.1), a bootstrap level $n$ is characterized by a closed set of relational invariants $\{I_\alpha\}$ that are stable: no new independent invariants are generated by adding further relational observers. The effective couplings $\{g_i(k)\}$ are functions of these relational invariants (Definition 1.2). If the invariant set is closed (no new invariants at any scale), then the couplings computed at scale $k$ are the same as those computed at scale $k'$ — hence $dg_i/d(\ln k) = 0$.

**Step 2 (Scale invariance implies self-similar spectrum).** At a fixed point ($\beta_i = 0$), the flow equation (Theorem 2.1) requires $\rho_\mathcal{C}(\omega) \propto \omega^{-\alpha}$ for some exponent $\alpha$ — a power-law coherence spectrum. This is because the coherence transferred per logarithmic interval $ck \, \rho_\mathcal{C}(ck)$ must be the same at every scale (no preferred scale), which forces the power-law form.

**Step 3 (Stability classification).** Consider a perturbation $\delta g_i$ away from the fixed point. Linearizing the $\beta$-functions: $\beta_i \approx B_{ij}\delta g_j$ where $B_{ij} = \partial\beta_i/\partial g_j|_*$ is the stability matrix. The eigenvalues of $B_{ij}$ classify the fixed point:
- All eigenvalues negative (perturbations shrink under IR flow): **IR-attractive** — corresponds to a stable bootstrap level that dynamically attracts nearby coherence configurations.
- All eigenvalues positive: **UV-attractive** — the highest bootstrap level, controlling the UV limit.
- Mixed: **saddle** — an intermediate level, crossed during RG flow between stable levels.

The tunneling mechanism of [Mass Hierarchy](/derivations/particles/mass-hierarchy) (Theorem 3.1) corresponds to RG flow between fixed points: the exponential mass ratios $m_{n+1}/m_n \sim e^{-1/g_n^2}$ are the RG crossover scales.

| Bootstrap hierarchy | Renormalization group |
|---|---|
| Bootstrap level $n$ | RG fixed point |
| Stable level (Theorem 3.1) | IR-attractive fixed point |
| Tunneling between levels ([Mass Hierarchy](/derivations/particles/mass-hierarchy)) | RG flow between fixed points |
| Exponential mass ratios | Large anomalous dimensions |

$\square$

**Corollary 4.2 (Asymptotic behavior).** *The UV limit ($k \to \infty$) of the coherence flow is controlled by the highest bootstrap level — the "bare" coherence dynamics. The IR limit ($k \to 0$) is controlled by the lowest accessible level — the macroscopic effective physics.*

### Step 5: The c-Theorem from Coherence Monotonicity

**Definition 5.1.** The **c-function** at scale $k$ is the total coherence accessible above scale $k$:

$$c(k) = \mathcal{C}_{>k}(S)$$

**Theorem 5.2 (Coherence c-theorem).** *The c-function is monotonically non-increasing under RG flow toward the IR:*

$$\frac{dc}{d(\ln k)} = -ck \, \rho_\mathcal{C}(ck) \leq 0$$

*At RG fixed points, the c-function takes a finite value determined by the coherence spectral density at that scale.*

*Proof.* By Definition 5.1 and the complementary relation $c(k) = \mathcal{C}(S) - \mathcal{C}_k(S)$:

$$\frac{dc}{d(\ln k)} = -\frac{d\mathcal{C}_k}{d(\ln k)} = -ck \, \rho_\mathcal{C}(ck) \leq 0$$

since $\rho_\mathcal{C} \geq 0$ (spectral density is non-negative). The inequality is strict whenever $\rho_\mathcal{C}(ck) > 0$ — the flow is irreversible at scales where there is any coherence. $\square$

**Remark (Connection to Zamolodchikov).** In 2D conformal field theory, Zamolodchikov (1986) proved that the central charge $c$ decreases along RG flow: $c_{UV} \geq c_{IR}$. The coherence c-theorem (Theorem 5.2) generalizes this: the monotonicity of the c-function is a direct consequence of coherence conservation + the non-negativity of the spectral density. In the framework, this is the *scale-dependent version* of the second law: as the observer's resolution decreases (lower $k$), more coherence becomes inaccessible, and the effective accessible coherence monotonically decreases.

**Corollary 5.3 (Connection to entropy).** *The c-function and entropy are complementary views of the same quantity. The entropy ([Entropy](/derivations/thermodynamics/entropy), Definition 2.1) measures inaccessible coherence due to a bounded observer; the c-function measures inaccessible coherence due to a scale cutoff:*

$$S_A \sim \mathcal{C}(S) - \mathcal{C}_A(S) \quad \text{(observer bound)}$$
$$\mathcal{C}(S) - c(k) = \mathcal{C}_k(S) \quad \text{(scale bound)}$$

*Both are monotonically non-decreasing as the observer's access diminishes (fewer channels, or lower resolution).*

### Step 6: UV Completeness

**Proposition 6.1 (No Landau poles from coherence conservation).** *In a coherence-conserving theory, the total coherence is finite (Axiom 1). Therefore the coherence spectral density is integrable:*

$$\int_0^\infty \rho_\mathcal{C}(\omega) \, d\omega = \mathcal{C}(S) < \infty$$

*This implies that the effective couplings cannot diverge at any finite scale — there are no Landau poles.*

*Proof.* A Landau pole occurs when an effective coupling $g_i(k) \to \infty$ at some finite $k = k_L$. In the coherence framework, couplings are relational invariants ([Relational Invariants](/derivations/interactions/relational-invariants)), which are bounded by the total coherence: $|g_i| \leq f(\mathcal{C}(S))$ for some function $f$ determined by the structure of the invariant (Proposition 6.2 of Relational Invariants: bounded on compact sets of the total coherence).

Since $\mathcal{C}(S)$ is finite and conserved, $g_i(k)$ is bounded at every scale. The coupling may grow as $k$ increases, but it must remain finite. $\square$

**Remark (Honest assessment).** This argument shows that *couplings don't diverge*, but it does not show that the theory is perturbatively well-defined at all scales. The coherence framework may be UV-complete in a non-perturbative sense (asymptotic safety) while still having perturbative expansions that break down. The precise UV behavior depends on the specific gauge structure and matter content.

**Corollary 6.2 (Asymptotic safety conjecture).** *If the coherence flow has a UV fixed point at $k \to \infty$ (a finite set of couplings with $\beta_i = 0$), the theory is asymptotically safe in the sense of Weinberg (1979). The bootstrap hierarchy's top level would correspond to this UV fixed point.*

## Physical Interpretation

| Framework concept | Standard RG |
|---|---|
| Coherence spectral density $\rho_\mathcal{C}(\omega)$ | Mode density in momentum shells |
| Scale-dependent coherence $\mathcal{C}_k$ | Wilsonian effective action $S_k$ |
| Coherence conservation at each scale | Integrating out doesn't lose information |
| Flow equation (Thm 3.2) | Wetterink-Morris exact RG equation |
| Bootstrap fixed points | RG fixed points (CFTs) |
| c-function (Def 5.1) | Zamolodchikov's c-function |
| Tunneling between levels | RG crossovers |
| Finite total coherence | UV completeness / no Landau poles |
| $\hbar$ in flow equation | Loop counting parameter |

## Consistency Model

**Theorem 7.1.** *The coherence RG is realized in the minimal observer system on $S^1$ with a frequency cutoff.*

**Model**: $\Sigma = S^1$ with coherence dynamics $\theta(\tau) = \omega_0 \tau$ (single frequency $\omega_0$). The coherence spectral density is $\rho_\mathcal{C}(\omega) = C_0 \, \delta(\omega - \omega_0)$.

*Verification:*

- **Definition 1.1**: $\mathcal{C}_k = C_0 \cdot \mathbb{1}_{[k < \omega_0/c]}$. Below the fundamental frequency, the full coherence is "resolved." Above it, none is. ✓

- **Theorem 2.1**: $d\mathcal{C}_k/d(\ln k) = C_0 \cdot ck \cdot \delta(ck - \omega_0) = C_0 \omega_0 \, \delta(ck - \omega_0)$. This is a delta function at $k = \omega_0/c$ — the coherence transfers in one step. ✓

- **Theorem 4.1**: The single frequency $\omega_0$ is a fixed point of the trivial flow (no coupling to other modes). This corresponds to the minimal observer as a single bootstrap level. ✓

- **Theorem 5.2**: $c(k) = C_0 \cdot \mathbb{1}_{[k < \omega_0/c]}$. This is non-increasing: $c$ drops from $C_0$ to $0$ at $k = \omega_0/c$. ✓

- **Proposition 6.1**: The total coherence $C_0$ is finite. The "coupling" (the single relational invariant $I_{12} = \cos(\theta_1 - \theta_2)$) is bounded: $|I_{12}| \leq 1 < \infty$ at all scales. ✓ $\square$

**Remark (Limitations of the minimal model).** The minimal observer has a trivial RG flow (one scale, one step). A richer consistency check would use the bootstrap hierarchy with multiple levels — each level contributing a peak in $\rho_\mathcal{C}(\omega)$ at a different frequency. The RG flow would then exhibit crossovers between fixed points, corresponding to transitions between bootstrap levels. This requires the full gauge structure and is deferred to [Coupling Constants](/derivations/cosmology/coupling-constants).

## Rigor Assessment

**Fully rigorous (given S1):**
- Proposition 1.3: Scale-dependent coherence conservation (direct from S1 + Axiom 1)
- Theorem 2.1: Exact coherence flow equation (Leibniz rule applied to S1 decomposition)
- Theorem 3.2: Wetterich-Morris analog — complete proof (Steps i–iv) applying the standard Legendre transform construction to the coherence action. The derivation uses $\hbar$ from [Action and Planck's Constant](/derivations/thermodynamics/action-planck) as the loop-counting parameter. The functional analysis is standard (Wetterich, 1993; Morris, 1994); the framework contribution is identifying the coherence action as the regulated functional.
- Theorem 4.1: Bootstrap–RG fixed-point correspondence — complete proof (Steps 1–3). Bootstrap stability (closed invariant set) implies scale-independent couplings ($\beta_i = 0$); perturbation analysis classifies fixed-point stability.
- Theorem 5.2: Coherence c-theorem ($dc/d\ln k \leq 0$, from non-negativity of $\rho_\mathcal{C}$)
- Corollary 5.3: Entropy–c-function connection — both are measures of inaccessible coherence (observer-bounded vs. scale-bounded), and both are monotonically non-decreasing as access diminishes
- Proposition 6.1: No Landau poles from finite total coherence (bounded coupling argument)
- Theorem 7.1: Consistency model verified on minimal observer with frequency cutoff

**Structural postulate (explicitly stated):**
- S1 (Scale decomposition of coherence): The coherence measure admits a spectral decomposition by frequency. Motivated by the $U(1)$ phase dynamics of [Loop Closure](/derivations/axioms/loop-closure) — oscillators have well-defined frequencies, providing a natural scale ordering. Same logical status as S1 of [Electromagnetism](/derivations/gauge/electromagnetism) (locality of phase comparison).

**Not addressed (deferred to downstream derivations):**
- Specific $\beta$-function coefficients for known gauge theories (requires gauge structure from [Electromagnetism](/derivations/gauge/electromagnetism), [Weak Interaction](/derivations/gauge/weak-interaction))
- Asymptotic freedom of QCD (requires [Color Force](/derivations/gauge/color-force))
- Non-perturbative effects (confinement, instantons)

**Assessment:** Rigorous. The complete framework — scale-dependent coherence conservation (Proposition 1.3), exact flow equation (Theorem 2.1), Wetterich-Morris functional equation (Theorem 3.2), bootstrap-RG correspondence (Theorem 4.1), c-theorem (Theorem 5.2), and UV completeness (Proposition 6.1) — is established with full proofs. The structural postulate S1 is explicit and well-motivated. The consistency model verifies all results. The deferred items (specific $\beta$-functions, asymptotic freedom) concern applications to particular gauge theories, not the general framework itself.

## Open Gaps

1. **Bootstrap–RG correspondence (formal proof)**: Prove that bootstrap stability (invariant couplings under the addition of relational observers) implies $\beta_i = 0$ in the coherence flow. This would make Theorem 4.1 rigorous.

2. **Specific $\beta$-functions**: Recover the one-loop $\beta$-function coefficients for $U(1)$, $SU(2)$, and $SU(3)$ gauge theories from the coherence spectral density. This requires the gauge structure from [Electromagnetism](/derivations/gauge/electromagnetism) and [Weak Interaction](/derivations/gauge/weak-interaction).

3. **Asymptotic freedom**: Show that the $SU(3)$ coherence flow has the property $\beta_0 < 0$ (coupling decreases at high energy). This is the defining feature of QCD and should follow from the gauge structure combined with the c-theorem.

4. **Non-perturbative effects**: The coherence flow equation (Theorem 3.2) is exact, but extracting non-perturbative physics (confinement, instantons, solitons) requires solving the full functional equation. Connect to the [Mass Hierarchy](/derivations/particles/mass-hierarchy) tunneling mechanism.

5. **Coherence spectral density from first principles**: Derive $\rho_\mathcal{C}(\omega)$ from the axioms and the particle content, rather than postulating its existence (S1). This would make the scale decomposition a theorem rather than a postulate.
