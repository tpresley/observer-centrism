---
title: "Holographic Noise with Causal Structure"
status: "quantitative"
testability: "near-future"
dependsOn: ["holography/area-scaling", "spacetime/gravity", "interactions/relational-invariants", "holography/causal-set-statistics"]
currentEvidence: "Holometer at Fermilab constrains the amplitude coefficient to α_H < 1; LISA Pathfinder demonstrated required sensitivity levels"
distinctiveness: "unique"
---

## Prediction

The discrete relational invariant network underlying continuum spacetime introduces irreducible position uncertainty at the Planck scale. This uncertainty manifests as **holographic noise** — random fluctuations in length measurements that cannot be eliminated by any improvement in measurement technology.

**The unique, testable signature:** the noise has a specific **anisotropic cross-correlation structure**. Two interferometers at relative angle $\beta$ show cross-correlated noise with overlap reduction function $\Gamma(\beta) = \cos\beta$. This angular dependence — not the absolute amplitude — is the framework's distinctive prediction and the key experimental target.

## Quantitative Summary

| Quantity | Formula | Value |
|---|---|---|
| Position uncertainty (length $L$) | $\Delta x = \sqrt{\alpha_H \ell_P L}$ | for $L = 4$ km at $\alpha_H = 1/4$ |
| Michelson strain PSD | $S_h^{(\text{Mich})} = 4\alpha_H \ell_P / c$ | $\lesssim 5.4 \times 10^{-44}$ Hz$^{-1}$ at Holometer bound |
| Amplitude coefficient | $\alpha_H$ | $\lesssim 0.24$ (Holometer, tight); natural target $\sim 1/4$ |
| Michelson cross-correlation | $\Gamma(\beta) = \cos\beta$ | Testable angular pattern |
| Single-arm cross-correlation | $\gamma(\alpha) = \cos\alpha$ | Between arms at angle $\alpha$, sharing a beamsplitter |
| Frequency spectrum | White (flat) for $f < c/(2L)$ | No frequency dependence |

## Derivation from Axioms

### Step 1: The Relational Invariant Network as a Causal Set

From the derivation chain: [Axioms](/derivations/axioms/coherence-conservation) → [Time as Phase Ordering](/derivations/thermodynamics/time) → [Speed of Light](/derivations/spacetime/speed-of-light) → [Gravity](/derivations/spacetime/gravity) → [Holographic Entropy Bound](/derivations/holography/area-scaling).

The microscopic structure of spacetime is a **labelled causal set** $(C, \prec, \lambda)$:

- $C$ is a locally finite set (relational invariant generation events from [Relational Invariants](/derivations/interactions/relational-invariants))
- $\prec$ is a partial order (the causal ordering from [Time](/derivations/thermodynamics/time))
- $\lambda: C \to \mathbb{R}^+$ labels each element with its coherence content

The causal set approximates a Lorentzian manifold $(M, g_{\mu\nu})$ at scales $\gg \ell_P$. The fundamental density of elements is one per Planck 4-volume:

$$\rho = \frac{1}{\ell_P^4} = \frac{c^3}{\hbar G} \approx 4.1 \times 10^{139} \text{ m}^{-4}$$

This follows from the [Holographic Entropy Bound](/derivations/holography/area-scaling): the maximum information density in any region is one bit per Planck cell.

### Step 2: Position Uncertainty from Discrete Structure

A spacetime point $P$ in the continuum description corresponds to a cluster of causal set elements. A **length measurement** between two points $P_1$ and $P_2$ along a null geodesic of spatial separation $L$ involves counting causal set elements along the geodesic.

**Proposition (Holographic scaling).** The number of independent causal set elements along a null geodesic of spatial length $L$ is:

$$N_{\text{null}} = \frac{L}{\ell_P}$$

Each element contributes an independent random displacement $\delta x_i$ with $\langle \delta x_i \rangle = 0$ and $\langle \delta x_i^2 \rangle = \alpha_H \ell_P^2$, where $\alpha_H$ is a dimensionless O(1) coefficient encoding the causal set statistics.

By the random walk:

$$\langle (\Delta x)^2 \rangle_{\text{null}} = N \cdot \alpha_H \ell_P^2 = \alpha_H \ell_P L$$

This is the **holographic scaling**: position uncertainty grows as $\sqrt{\ell_P L}$, not as $\ell_P$. The $\sqrt{\ell_P L}$ scaling is a rigorous consequence of CLT applied to Poisson cells ([Causal Set Statistics](/derivations/holography/causal-set-statistics), Proposition 2.2); the amplitude $\alpha_H$ depends on the specific length estimator and is not yet derived from first principles (see [Causal Set Statistics](/derivations/holography/causal-set-statistics), Heuristic 2.3).

### Step 3: The Shared-Origin Displacement and the Relational Invariant at the Beamsplitter

The key structural feature that makes holographic noise anisotropic at macroscopic arm lengths — and distinguishes this prediction from Hogan's isotropic model — is that the two arms of a Michelson share a **relational invariant** established at the beamsplitter. This is nonlocal by construction and is the mechanism behind the cross-correlation between arms.

**Proposition 3.1 (Beamsplitter as Type III interaction).** *When a coherent laser pulse is split by a 50/50 beamsplitter into two outgoing modes along arm directions $\hat{n}_a$ and $\hat{n}_b$, the splitting is a Type III interaction ([Three Interaction Types](/derivations/interactions/three-types)) that generates a relational invariant $I_{ab}$ between the two arm states.*

*Proof sketch.* A symmetric beamsplitter maps a single-mode coherent state onto the entangled two-mode state $(|a\rangle + |b\rangle)/\sqrt{2}$ — this is the textbook quantum-optics result. By [Entanglement](/derivations/quantum/entanglement) Proposition 1.3, any such entangled pair corresponds to a relational invariant $I_{ab}$ in the framework's coherence geometry, with coherence content $\mathcal{C}(I_{ab})$ equal to the entanglement entropy of the reduced state (Theorem 2.1 of the same derivation). The coherence channel $\gamma_{ab}^{\text{ch}}$ carrying $I_{ab}$ ([ER=EPR](/derivations/holography/er-epr) Definition 1.1) is anchored at the beamsplitter vertex. $\square$

**Proposition 3.2 (Shared-origin displacement structure).** *The length fluctuations in the two arms are projections of a single random vector displacement $\delta\mathbf{X}$ at the beamsplitter vertex, shared by both arms through the relational invariant $I_{ab}$:*

$$\delta L_a = -\hat{n}_a \cdot \delta\mathbf{X}, \qquad \delta L_b = -\hat{n}_b \cdot \delta\mathbf{X}$$

*The sign convention reflects that moving the beamsplitter vertex toward a mirror by $\hat{n}_a \cdot \delta\mathbf{X}$ shortens arm $a$ by the same amount. By rotational and translational invariance of the observer network ([Lorentz Invariance](/derivations/spacetime/lorentz-invariance)), the covariance of $\delta\mathbf{X}$ is isotropic:*

$$\langle \delta X_i \, \delta X_j \rangle = \frac{1}{3}\,\langle |\delta\mathbf{X}|^2\rangle \, \delta_{ij}$$

**The structure is shared, not local.** The cross-correlation between arms cannot arise from independent local sampling along disjoint paths: two arms from a common origin share only the origin cell at scales $L \gg \ell_P$, which would give zero cross-correlation. The cross-correlation exists because the two arms are linked by the relational invariant $I_{ab}$ generated at the beamsplitter — a genuinely nonlocal coherence-topological connection, the same structural object that underlies entanglement and its ER=EPR dual. The shared structure does not require spatial overlap of the arms' spacetime neighborhoods; it requires only that both arms originate from a common Type III interaction at the beamsplitter.

**Setting the amplitude.** The holographic position uncertainty at distance $L$ from a reference point is $\sqrt{\alpha_H \ell_P L}$ (from [Causal Set Statistics](/derivations/holography/causal-set-statistics) Proposition 2.2, rigorous $\sqrt{\ell_P L}$ scaling). Identifying the beamsplitter as the reference vertex and the mirror as the measurement endpoint:

$$\frac{1}{3}\,\langle |\delta\mathbf{X}|^2\rangle = 2\alpha_H\,\ell_P\,L$$

(the factor of 2 comes from the round-trip path; see Step 4). This matches the single-arm variance and ensures consistency across Steps 2, 4, and 5.

### Step 4: Single-Arm Noise Power

For a single interferometer arm of length $L$ along direction $\hat{n}$, light travels out and back. The total path is $2L$. The single-arm variance is:

$$\langle (\delta L)^2 \rangle = 2\alpha_H \ell_P L$$

This follows equivalently from the projection of the shared-origin displacement $\delta\mathbf{X}$ in Step 3 (with the normalization fixed there), or from a direct integration over Planck cells along the round-trip path via CLT on Poisson sprinklings ([Causal Set Statistics](/derivations/holography/causal-set-statistics), Proposition 2.2). The two descriptions are consistent because the relational invariant connecting the beamsplitter to the mirror is the same coherence-channel object that the causal-set elements along the round-trip null path carry ([ER=EPR](/derivations/holography/er-epr) Definition 1.1). The random variable can be attributed to the beamsplitter vertex or distributed along the arm path — both attributions describe the same relational invariant and give the same single-arm variance.

The **strain** is $h = \delta L / L$, with variance:

$$\langle h^2 \rangle = \frac{2\alpha_H \ell_P}{L}$$

The strain **power spectral density** (one-sided, for frequencies $f < c/(2L)$):

$$\boxed{S_h^{(\text{arm})}(f) = \frac{2\alpha_H \ell_P}{c}}$$

**Key point:** This is the same for all arm orientations. Single-arm noise power is isotropic because each arm probes the causal set along its own null direction.

### Step 5: Cross-Correlation Between Arms — The Angular Signature

The **anisotropy** appears in the cross-correlation between two arms. Let arms $a$ and $b$ share a common beamsplitter vertex and be oriented along $\hat{n}_a$ and $\hat{n}_b$ at angle $\alpha$.

**Theorem 5.1 (Single-arm cross-correlation).** *The noise cross-spectrum between two arms at relative angle $\alpha$ is:*

$$\boxed{C_{ab}(f) = \frac{2\alpha_H \ell_P}{c} \cdot \cos\alpha}$$

*or equivalently, the overlap reduction function at the single-arm level is:*

$$\gamma(\alpha) = \frac{\langle \delta L_a \, \delta L_b \rangle}{\langle \delta L_a^2 \rangle} = \cos\alpha$$

*Proof.* From Step 3 (Proposition 3.2), the two arms share a single isotropic random displacement $\delta\mathbf{X}$ at the beamsplitter vertex, with $\delta L_a = -\hat{n}_a \cdot \delta\mathbf{X}$ and $\delta L_b = -\hat{n}_b \cdot \delta\mathbf{X}$. Direct computation:

$$\langle \delta L_a\,\delta L_b\rangle = \hat{n}_a^i \hat{n}_b^j \langle \delta X_i\,\delta X_j\rangle = \frac{1}{3}\langle|\delta\mathbf{X}|^2\rangle\,(\hat{n}_a \cdot \hat{n}_b) = \frac{1}{3}\langle|\delta\mathbf{X}|^2\rangle\,\cos\alpha$$

using isotropy $\langle \delta X_i \delta X_j\rangle = \tfrac{1}{3}\langle|\delta\mathbf{X}|^2\rangle\,\delta_{ij}$ from Proposition 3.2. Similarly, $\langle \delta L_a^2\rangle = \tfrac{1}{3}\langle|\delta\mathbf{X}|^2\rangle$, so the ratio is $\cos\alpha$. With the normalization $\tfrac{1}{3}\langle|\delta\mathbf{X}|^2\rangle = 2\alpha_H\ell_P L$ from Step 3, the cross-spectrum follows. $\square$

**Angular values.**

- Parallel ($\alpha = 0$): $\gamma = 1$ — complete correlation (identical projection)
- Perpendicular ($\alpha = \pi/2$): $\gamma = 0$ — uncorrelated (orthogonal projections)
- Anti-parallel ($\alpha = \pi$): $\gamma = -1$ — fully anti-correlated (opposite projections of the same displacement)

**Remark (why rotational invariance forces this shape).** For any rank-1 vector noise field with rotationally-invariant 2-point function, the cross-correlation between two arms from a common origin is $a + b\cos\alpha$ for some constants $a, b$. The pure $\cos\alpha$ form corresponds to the minimal assumption — no rotationally-invariant scalar "breathing mode" component. A scalar component would shift $a$ without affecting the cos β harmonic in Step 7, so the distinctive angular signature $\Gamma(\beta) = \cos\beta$ is robust to this choice. Under the simplest (vector-only) model, $a = 0$ and the formula is exact.

### Step 6: Michelson Interferometer — Differential Measurement

A Michelson interferometer with perpendicular arms along $\hat{x}$ and $\hat{y}$ measures the differential strain:

$$h_{\text{Mich}} = \frac{\delta L_x - \delta L_y}{L}$$

The noise power, using $C_{xy} = (2\alpha_H\ell_P/c)\cos(\pi/2) = 0$ from Theorem 5.1:

$$S_h^{(\text{Mich})} = S_{xx} + S_{yy} - 2C_{xy} = \frac{2\alpha_H \ell_P}{c} + \frac{2\alpha_H \ell_P}{c} - 0 = \frac{4\alpha_H \ell_P}{c}$$

**Result:** A single Michelson sees holographic noise at $S_h^{(\text{Mich})} = 4\alpha_H \ell_P/c$, independent of its orientation in space. The two perpendicular arms contribute independently because $\gamma(\pi/2) = 0$ — orthogonal projections of an isotropic random vector are uncorrelated.

### Step 7: The Overlap Reduction Function — Two Interferometers

**Theorem (Michelson-to-Michelson cross-correlation).** Two co-located Michelson interferometers at relative angle $\beta$ have cross-correlated noise:

$$\boxed{\Gamma(\beta) = \cos\beta}$$

*Derivation.* Let interferometer 1 have arms along $(\hat{x}, \hat{y})$ and interferometer 2 have arms along $(\hat{x}', \hat{y}')$ where $\hat{x}' = \cos\beta\,\hat{x} + \sin\beta\,\hat{y}$.

$$\langle h_1 h_2 \rangle L^2 = \langle \delta L_x \delta L_{x'}\rangle - \langle \delta L_x \delta L_{y'}\rangle - \langle \delta L_y \delta L_{x'}\rangle + \langle \delta L_y \delta L_{y'}\rangle$$

Using $C_{ab} = (2\alpha_H\ell_P/c)\cos(\alpha_{ab})$ from Theorem 5.1 with angles:
- $\hat{x}$ to $\hat{x}'$: $\beta$, giving $\cos\beta$
- $\hat{x}$ to $\hat{y}'$: $\pi/2 + \beta$, giving $-\sin\beta$
- $\hat{y}$ to $\hat{x}'$: $\pi/2 - \beta$, giving $\sin\beta$
- $\hat{y}$ to $\hat{y}'$: $\beta$, giving $\cos\beta$

$$\langle h_1 h_2 \rangle L^2 = \frac{2\alpha_H\ell_P}{c}\Big[\cos\beta - (-\sin\beta) - \sin\beta + \cos\beta\Big] = \frac{2\alpha_H\ell_P}{c}\cdot 2\cos\beta = \frac{4\alpha_H\ell_P}{c}\cos\beta$$

Normalizing by $S_h^{(\text{Mich})} = 4\alpha_H\ell_P/c$:

$$\Gamma(\beta) = \frac{\langle h_1 h_2 \rangle}{S_h^{(\text{Mich})}} = \cos\beta \quad \square$$

| Relative angle $\beta$ | $\Gamma(\beta)$ | Configuration |
|---|---|---|
| $0°$ | $1.00$ | Parallel (Holometer) |
| $30°$ | $0.87$ | |
| $45°$ | $0.71$ | |
| $60°$ | $0.50$ | LISA arm pairs |
| $90°$ | $0.00$ | Perpendicular |
| $180°$ | $-1.00$ | Anti-parallel arm 1 |

#### Symmetries and Sanity Checks

**Arm convention.** Throughout Steps 3–7 an "arm" is a *directed* line from the beamsplitter vertex to a mirror, parameterized by a unit direction vector $\hat{n}$. The length fluctuation projects the shared-origin displacement onto the arm direction: $\delta L_{\hat{n}} = -\hat{n} \cdot \delta\mathbf{X}$. Reversing the arm direction reverses the sign of the projection: $\delta L_{-\hat{n}} = -\delta L_{\hat{n}}$. Physically, "arm along $-\hat{n}$" means the mirror sits at $-L\hat{n}$ rather than $+L\hat{n}$, which is a different physical configuration (the mirror is on the opposite side of the beamsplitter), not a relabeling of the same arm.

**Behavior under physical rotations of Mich 2.** Let Mich 2's "arm 1" make angle $\beta$ with Mich 1's "arm 1" (so its arm 2 is at $\beta + \pi/2$). Three rotation cases:

- **Rotation by $\pi/2$**: New arm 1 is at $\beta + \pi/2$, new arm 2 is at $\beta + \pi$, which equals $-(\text{old arm 1})$. The new differential strain becomes
  $$h_2^{\text{new}} = \delta L_{\hat n_2} - \delta L_{-\hat n_1} = \delta L_{\hat n_2} + \delta L_{\hat n_1}$$
  which is the *sum* (not difference) of the original projections. The cross-correlation works out (using $C_{ab} = (2\alpha_H\ell_P/c)\cos\alpha_{ab}$) to $\Gamma_{\text{new}}(\beta) = -\sin\beta = \cos(\beta + \pi/2)$, consistent with simply replacing $\beta \to \beta + \pi/2$ in the master formula.

- **Rotation by $\pi$**: New arms are $-\hat n_1, -\hat n_2$, so $h_2^{\text{new}} = -\delta L_{\hat n_1} + \delta L_{\hat n_2} = -h_2$. Therefore $\Gamma(\beta + \pi) = -\Gamma(\beta)$, consistent with $\cos(\beta + \pi) = -\cos\beta$.

- **Rotation by $2\pi$**: Trivially $\Gamma(\beta + 2\pi) = \Gamma(\beta)$, consistent with $\cos(\beta + 2\pi) = \cos\beta$.

The full period of $\Gamma(\beta)$ is $2\pi$. There is no shorter period — in particular, $\Gamma$ does NOT return to itself under $\beta \to \beta + \pi/2$.

**Independent check at $\beta = \pi/2$.** A direct calculation that does not invoke the $\gamma(\alpha) = \cos\alpha$ formula: at $\beta = \pi/2$, Mich 2's arms are $\hat y$ and $-\hat x$. Then
$$h_2 = \delta L_{\hat y} - \delta L_{-\hat x} = \delta L_{\hat y} + \delta L_{\hat x}$$
and
$$\langle h_1 h_2\rangle L^2 = \langle (\delta L_{\hat x} - \delta L_{\hat y})(\delta L_{\hat x} + \delta L_{\hat y})\rangle = \langle \delta L_{\hat x}^2\rangle - \langle \delta L_{\hat y}^2\rangle = 0$$
by isotropy of the shared-origin displacement ($\langle \delta X_i \delta X_j\rangle \propto \delta_{ij}$, so $\langle \delta L_{\hat n}^2\rangle$ is the same for any unit $\hat n$). The cross-terms $\delta L_{\hat x}\delta L_{\hat y}$ and $\delta L_{\hat y}\delta L_{\hat x}$ are equal and cancel exactly. The vanishing of $\Gamma(\pi/2)$ therefore follows from isotropy alone, providing a sanity check independent of the cosine formula.

**Comparison with a stochastic gravitational-wave background.** The angular pattern $\Gamma(\beta) = \cos\beta$ is the response of an interferometer to a vector noise field — a rank-1 (dipolar) object. A standard isotropic stochastic gravitational-wave background, by contrast, is a rank-2 (spin-2 / quadrupolar) tensor field, and its overlap reduction function for two co-located Michelsons has period $\pi/2$ in the relative angle (returning to its starting value when one detector is rotated by $\pi/2$, because GW strain transforms in the spin-2 representation of $SO(2)$). Holographic noise distinguishes itself from a GW background by its *period*: dipolar (period $2\pi$, with a sign flip at $\pi$) rather than quadrupolar (period $\pi/2$). This is a clean qualitative discriminator independent of the absolute amplitude — even a low-statistics measurement of the angular pattern can rule out one or the other.

### Step 8: Separated Detectors

The derivation of $\gamma(\alpha) = \cos\alpha$ in Step 5 relies on the two arms of a Michelson sharing a single random displacement $\delta\mathbf{X}$ at a common beamsplitter vertex. For two interferometers whose beamsplitter vertices are separated by spatial distance $d$, the relevant question is: how do the random displacements at two distinct vertices $\delta\mathbf{X}_1$ and $\delta\mathbf{X}_2$ correlate?

**Theorem 8.1 (Separated-vertex zero cross-correlation).** *For two beamsplitter vertices at macroscopic spatial separation $d \gg \ell_P$, the random displacements generated by the Type III interactions at each vertex are uncorrelated at leading order:*

$$\boxed{\langle \delta X_i^{(1)}(t_1)\,\delta X_j^{(2)}(t_2) \rangle = O\!\left(\frac{\ell_P^3}{d^3}\right) \cdot \text{(isotropic tensor)}}$$

*independent of frequency. Consequently the overlap reduction function between separated Michelson interferometers is zero to leading order, regardless of their relative orientation:*

$$\Gamma_{\text{sep}}(\beta, d) \approx 0 \qquad (d \gg \ell_P).$$

*Proof.* By [Relational Invariants](/derivations/interactions/relational-invariants) Theorem 2.1, a Type III interaction generates a relational invariant $I$ anchored at the spacetime event of that interaction. By Theorem 4.1 of the same derivation, $I$ is irreducible — it cannot be decomposed as a sum $f(\sigma_1) + g(\sigma_2)$ of independent contributions from separate upstream sources. By [Entanglement](/derivations/quantum/entanglement) Proposition 1.3, the relational invariant corresponds to an entangled coherence structure anchored at that event.

The shared-origin displacement of Step 3 works because both output arms of a single beamsplitter inherit from **one** relational invariant generated at **one** Type III interaction. The covariance $\langle \delta X_i\,\delta X_j \rangle$ for the same-vertex case follows from the irreducibility of that single invariant plus rotational invariance of the coherence measure.

Two distinct beamsplitter events at distinct vertices are two distinct Type III interactions and therefore generate two distinct, independent relational invariants $I^{(1)}$ and $I^{(2)}$. The irreducibility property applies to each invariant separately; there is no framework-level mechanism that links them into a single joint invariant at leading order.

Possible subleading channels, each strictly subdominant at macroscopic $d$:

**(i) Poisson cell overlap.** The reconstruction of each vertex's position from the local causal set samples a volume of Planck cells near the vertex. By the independence of Planck cells in a Poisson sprinkling ([Causal Set Statistics](/derivations/holography/causal-set-statistics)), cells near vertex 1 and cells near vertex 2 at separation $d \gg \ell_P$ are independent. The contribution to the cross-covariance from the (measure-zero in the limit, $O(\ell_P^3/d^3)$ at finite $d$) overlap region of near-vertex cells is negligible for any macroscopic $d$.

**(ii) Shared ambient observers in the broader hierarchy.** Both beamsplitters sit within a higher-level observer (e.g., Earth or the local cosmic web at bootstrap level $> N_{\text{BS}}$), which contributes to both vertices' local coherence environments. This is a shared *upstream* relational invariant, but it manifests as a **global metric perturbation** at the two vertices — the same class of effect as a passing gravitational wave, **not** as shared holographic noise. The framework's definition of holographic noise (rank-1 vector fluctuation from Planck-scale causal set structure, Step 2) explicitly excludes such large-scale metric correlations, which belong to the GW sector.

**(iii) Optical coherence of the laser line.** A common laser source feeding both beamsplitters establishes **classical phase correlation** in the input coherent states, not a shared geometric relational invariant. The beamsplitter-generated invariants $I^{(1)}$ and $I^{(2)}$ are created *at* each beamsplitter event from the local substrate, not inherited from the laser source in a way that mixes their geometric displacements.

Each channel contributes at most $O(\ell_P^3/d^3)$ relative to the single-vertex variance $O(\alpha_H \ell_P L)$. For any macroscopic $d$ of experimental interest, the leading-order cross-correlation is zero. $\square$

**Corollary 8.2 (Separated vs. co-located: a qualitative discriminator).** *The holographic-noise signature is qualitatively different between co-located and separated detector configurations:*

| Configuration | Holographic noise | Spin-2 GW background |
|---|---|---|
| Co-located, relative angle $\beta$ | $\Gamma(\beta) = \cos\beta$ (period $2\pi$) | $\Gamma_{\text{GW}}(\beta)$ quadrupolar (period $\pi/2$) |
| Separated by $d \gg \ell_P$ | $\Gamma_{\text{sep}} = 0$ (to leading order) | $\Gamma_{\text{GW}}(d, \beta) \neq 0$ (standard overlap reduction function) |

*The separated-detector behavior is a sharper discriminator than the angular pattern alone: a GW background exhibits a specific non-zero overlap reduction function between separated detectors (e.g., Flanagan's curve for LIGO H–L), while holographic noise predicts approximately zero. This is because GWs are propagating fields that reach both detectors coherently, whereas holographic noise is a local property of each vertex's relational invariant.*

**Causality argument (weaker, still instructive).** Independent of Theorem 8.1, causality alone provides a necessary condition: two beamsplitter vertices at spatial separation $d$ are causally disconnected over time intervals shorter than $d/c$, so frequency components above $f_{\text{coh}} \sim c/(2\pi d)$ cannot maintain phase coherence between the two vertices for *any* underlying noise model. Theorem 8.1 shows that the framework's structure is stricter: cross-correlation is zero at *all* frequencies, not just above $f_{\text{coh}}$.

**Implication for LIGO Hanford–Livingston** ($d \approx 3000$ km, $\beta \approx 90°$): no holographic-noise cross-correlation at leading order — sharper than the causality-only conclusion. The LIGO H–L pair is not a useful probe of this prediction.

**Implication for LISA** (arm length $L = d \approx 2.5 \times 10^9$ m, TDI channels anchored at different spacecraft vertices): no cross-correlation between TDI channels at leading order — sharper than the causality-only conclusion, which at LISA's observation band ($\sim 1$ mHz $\ll f_{\text{coh}} \approx 0.02$ Hz) would have predicted approximately full $\cos 60°$ transmission. The framework-specific prediction is null.

## Confrontation with the Holometer

### The Holometer Experiment

The Holometer [Chou et al., 2017] operated two co-located, co-aligned ($\beta = 0°$) 40-meter Michelson interferometers, searching for correlated length fluctuations at 1–13 MHz.

**Published constraint:** $S_L < 8.4 \times 10^{-41}$ m²/Hz at 95% CL.

### Comparison with the Prediction

The predicted displacement power spectrum for $\beta = 0$:

$$S_L = L^2 \cdot \Gamma(0) \cdot S_h^{(\text{Mich})} = L^2 \cdot \frac{4\alpha_H\ell_P}{c}$$

With $L = 40$ m:

$$S_L = (40)^2 \times \frac{4\alpha_H \times 1.616 \times 10^{-35}}{3 \times 10^8} = 3.45 \times 10^{-40}\,\alpha_H \text{ m}^2\text{/Hz}$$

The Holometer constraint gives:

$$\alpha_H < \frac{8.4 \times 10^{-41}}{3.45 \times 10^{-40}} \approx 0.24$$

**Result:** The Holometer constrains $\alpha_H \lesssim 0.24$. The framework's natural target from the holographic bound heuristic is $\alpha_H \sim 1/4 = 0.25$ (see [Causal Set Statistics](/derivations/holography/causal-set-statistics) Heuristic 2.3). The prediction therefore sits **essentially at the Holometer bound** — the natural target value is marginally disfavored (at $\sim 3\%$ tension) and any value $\alpha_H \lesssim 0.24$ is consistent. The framework is in a **knife-edge** regime: a Holometer-class experiment with a factor-2 improvement in sensitivity would directly confirm or rule out the natural target.

### Why $\alpha_H \sim 1/4$ Is a Natural Target (Not a Theorem)

The holographic bound suggests $\alpha_H \sim 1/4$ as a natural value via the following heuristic: the maximal causal diamond containing a length-$L$ geodesic has boundary area $A_{\max} = L \cdot \ell_P$, which by Bekenstein–Hawking encodes at most $N_{\text{eff}} = A_{\max}/(4\ell_P^2) = L/(4\ell_P)$ independent bits — a factor of $4$ below the naive bulk count. *If* one equates each independent bit with $\ell_P^2$ of length variance, this gives $\delta L^2 = \ell_P L/4$ and therefore $\alpha_H = 1/4$.

**This is a suggestive target, not a derivation.** The Bekenstein–Hawking bound constrains *information content*, not the variance of a geometric estimator; the "one bit ↔ $\ell_P^2$ variance" bridge rule is not derived from the framework. A rigorous value for $\alpha_H$ requires computing the variance of a specific causet length estimator (Brightwell–Gregory longest-chain or Myrheim–Meyer interval-count) on a Poisson sprinkling — a well-defined mathematical problem with partial results in the causet literature, but not yet completed in this framework (see [Causal Set Statistics](/derivations/holography/causal-set-statistics), Heuristic 2.3 and Open Gap 1).

**Current status.** The Holometer constrains $\alpha_H \lesssim 0.24$, essentially at the natural target $\alpha_H \sim 1/4 = 0.25$. At the natural target value, the Michelson PSD is:

$$S_h^{(\text{Mich})} = \frac{\ell_P}{c} \approx 5.4 \times 10^{-44} \text{ Hz}^{-1}$$

which sits at the Holometer bound (marginally 3% above the published 95% CL, within theoretical uncertainty on the natural target). The framework is in a **knife-edge regime**: a Holometer-class experiment with factor-2 improved sensitivity at $\beta = 0$ would directly test the natural target. Test 1 below (rotatable cross-correlation) provides an independent probe of the distinctive $\Gamma(\beta) = \cos\beta$ angular pattern, free of the absolute amplitude uncertainty.

## Experimental Tests

### Test 1: Rotatable Cross-Correlation (The Definitive Test)

**Configuration:** Two co-located Michelson interferometers, one rotatable relative to the other.

**Protocol:**
1. Measure cross-correlated noise $S_{12}(\beta)$ at relative angles $\beta = 0°, 30°, 45°, 60°, 90°$
2. Fit the angular dependence to $S_{12}(\beta) = S_0 \cdot \cos\beta$

**Predictions:**

$$\frac{S_{12}(0°)}{S_{12}(45°)} = \frac{1}{\cos 45°} = \sqrt{2} \approx 1.41$$

$$S_{12}(90°) = 0 \quad \text{(null test)}$$

**Key advantage:** The angular RATIO is independent of $\alpha_H$. **This matters especially because $\alpha_H$ itself is currently an O(1) parameter, not a rigorously derived constant** (see "Why $\alpha_H \sim 1/4$" above). The $\cos\beta$ shape is the true experimental target — it tests the structural prediction of the framework without depending on the undetermined amplitude coefficient. Isotropic noise (e.g., Hogan's model) gives $\Gamma = 1$ for all $\beta$; the framework predicts $\Gamma = \cos\beta$. A measured ratio $S_{12}(0°)/S_{12}(45°) = \sqrt{2}$ and null at $90°$ would support the prediction regardless of what absolute amplitude emerges.

**Required sensitivity:** To detect $S_h^{(\text{Mich})} = \ell_P/c$ (at $\alpha_H = 1/4$) in cross-correlation with SNR = 5 over $T = 1$ year at bandwidth $\Delta f = 1$ MHz:

$$\text{SNR} = \frac{|\Gamma| \cdot S_h^{(\text{Mich})}}{\sqrt{S_1 S_2}} \cdot \sqrt{2T\Delta f}$$

With $S_1 = S_2 = S_n$ (instrumental noise):

$$S_n < \frac{|\Gamma| \cdot S_h^{(\text{Mich})} \cdot \sqrt{2T\Delta f}}{5} = \frac{1 \times 5.4\times10^{-44} \times \sqrt{2 \times 3.15\times10^7 \times 10^6}}{5}$$

$$= \frac{5.4\times10^{-44} \times 7.9\times10^6}{5} = 8.6 \times 10^{-38} \text{ Hz}^{-1}$$

$$\sqrt{S_n} < 2.9 \times 10^{-19} \text{ /}\sqrt{\text{Hz}}$$

This is achievable with current technology (the Holometer achieved $\sim 10^{-18}$ m/√Hz displacement sensitivity with 40m arms).

### Test 2: LISA Angular Channels

**Configuration:** LISA's three arms at $60°$ form three Michelson-equivalent channels via Time Delay Interferometry (TDI).

**Predicted cross-channel structure:** Each TDI channel is anchored at a different spacecraft beamsplitter vertex at spatial separation $d = 2.5 \times 10^9$ m. By Theorem 8.1, separated beamsplitter vertices generate independent relational invariants at leading order, so the cross-correlation between TDI channels is **null** for holographic noise:

$$\Gamma_{12} = \Gamma_{23} = \Gamma_{13} \approx 0 \qquad (\text{leading order})$$

This is **stronger** than the causality-only bound, which at LISA's 1 mHz band ($\ll f_{\text{coh}} \approx 0.02$ Hz) would have allowed approximately full $\cos 60° = 0.5$ transmission. The framework's Type-III-interaction structure forces zero regardless of frequency.

**Consequence for holographic-noise detection with LISA:** LISA is **not** a useful probe of holographic noise via cross-channel correlation. The three TDI channels should have independent holographic-noise contributions at the single-channel (auto-correlation) level $S_h^{(\text{Mich})} = 4\alpha_H\ell_P/c$, but cross-channel stacking provides no SNR improvement. LISA's auto-correlation sensitivity at 1 mHz ($\sqrt{S_n} \sim 10^{-20}/\sqrt{\text{Hz}}$) is many orders of magnitude above the predicted $\sqrt{S_h^{(\text{Mich})}} \sim 7 \times 10^{-22}/\sqrt{\text{Hz}}$ amplitude, so LISA cannot detect holographic noise even in auto-correlation.

**Diagnostic use:** if an excess correlated signal *is* detected in LISA's TDI cross-correlations, it cannot be holographic noise — the framework predicts zero. This turns LISA into a potential *falsifier* of interpretations that would attribute LISA cross-correlations to holographic origin, but not a probe of the signal itself.

### Test 3: LIGO-Virgo-KAGRA Network (Stochastic Background Search)

The existing gravitational-wave detector network can search for an isotropic stochastic background. Holographic noise contributes a correlated signal between co-located detectors but, by Theorem 8.1, zero correlation between separated detectors at leading order — stronger than the causality-only cutoff and independent of the causality coherence frequency $f_{\text{coh}} \sim c/(2\pi d)$.

**Predicted cross-correlations across the network:** For all current LIGO–Virgo–KAGRA pairs (separations $\sim 1000$–$10000$ km), holographic noise gives $\Gamma \approx 0$ at leading order. Any correlated stochastic signal detected in cross-correlation between separated detectors therefore **cannot** be holographic noise under the framework.

**The qualitative diagnostic:** If an excess stochastic signal is found in the network, the framework's separated-vertex null makes this a clean distinguishing test:

| Observed signal | Consistent with |
|---|---|
| Non-zero cross-correlation between separated detectors (e.g., H–L, H–V, L–V) | GW background, instrumental correlation, astrophysical foreground — **not** holographic noise |
| Zero cross-correlation plus elevated auto-correlation at the $S_h^{(\text{Mich})} = 4\alpha_H\ell_P/c$ level | Consistent with holographic noise (though auto-correlation alone is hard to distinguish from instrumental noise) |

The holographic-noise rank-1 vector field is, per Theorem 8.1, a local-vertex fluctuation — it does not propagate between detectors the way a spin-2 GW field does. This is a sharper test than the angular-period discriminator of Step 7: the separated-detector null is model-independent given the framework's Type III structure.

### Test 4: Next-Generation Dedicated Experiment

**Optimal configuration for the framework's prediction:**

| Parameter | Value | Rationale |
|---|---|---|
| Arm length | $L = 40$ m | Matches Holometer; maximizes SNR at MHz |
| Number of interferometers | 3 | One fixed, two at different angles |
| Angles | $0°$, $45°$, $90°$ | Probes $\Gamma = 1$, $0.71$, $0$ |
| Frequency band | 1–10 MHz | White noise, above seismic |
| Strain sensitivity | $< 10^{-19}$/√Hz | Factor 10 beyond Holometer |
| Integration time | 1 year | SNR ∝ √T |

**Expected outcome:** The $90°$ channel provides a null measurement (control); the $0°$ and $45°$ channels should show a ratio of $\sqrt{2}$ in cross-correlation amplitude if the prediction is correct.

## Comparison with Competing Predictions

| Feature | Observer-centrism | Hogan holographic noise | LQG spacetime foam | String theory |
|---|---|---|---|---|
| Noise amplitude | $\sqrt{\alpha_H \ell_P L}$ | $\sqrt{\ell_P L}$ | $\sim (\ell_P/L)^n$, $n > 1$ | No prediction |
| Angular dependence | $\Gamma(\beta) = \cos\beta$ | Isotropic ($\Gamma = 1$) | Isotropic | N/A |
| Frequency spectrum | White ($f < c/2L$) | White | Model-dependent | N/A |
| Co-located null | $\Gamma(90°) = 0$ | No null angle | No null angle | N/A |
| Separated-vertex correlation | **Zero** ($d \gg \ell_P$; Theorem 8.1) | Isotropic — no separation dependence | Model-dependent | N/A |
| Holometer status | $\alpha_H \lesssim 0.24$ (knife-edge) | **Excluded** | Amplitude too small | Not falsifiable |
| **Decisive test** | **Rotate baseline** | Already tested | Needs $10^3\times$ sensitivity | None |

**Critical distinction:** Hogan's holographic noise model predicts isotropic cross-correlation ($\Gamma = 1$) and was ruled out by the Holometer. The observer-centrism prediction has the same amplitude scaling but ANISOTROPIC cross-correlation ($\Gamma(\beta) = \cos\beta$), making it consistent with the Holometer null result at $\alpha_H \lesssim 0.24$ and testable by a rotatable configuration. The natural target $\alpha_H \sim 1/4$ sits essentially at the Holometer bound, making the framework highly predictive: a factor-2 sensitivity improvement at $\beta = 0$ would be decisive.

## Numerical Reference

**Fundamental constants:**

| Constant | Value |
|---|---|
| $\ell_P = \sqrt{\hbar G/c^3}$ | $1.616 \times 10^{-35}$ m |
| $t_P = \ell_P/c$ | $5.391 \times 10^{-44}$ s |
| $\ell_P/c$ | $5.391 \times 10^{-44}$ Hz$^{-1}$ |

**Predicted noise levels (at $\alpha_H = 1/4$, using $S_h^{(\text{Mich})} = 4\alpha_H\ell_P/c = \ell_P/c$):**

| Quantity | Formula | Value |
|---|---|---|
| Michelson strain PSD | $S_h^{(\text{Mich})} = \ell_P/c$ | $5.4 \times 10^{-44}$ Hz$^{-1}$ |
| Strain amplitude | $\sqrt{S_h^{(\text{Mich})}}$ | $7.3 \times 10^{-22}$ /√Hz |
| Displacement PSD ($L = 40$ m) | $L^2 S_h^{(\text{Mich})}$ | $8.6 \times 10^{-41}$ m²/Hz |
| Displacement PSD ($L = 4$ km) | $L^2 S_h^{(\text{Mich})}$ | $8.6 \times 10^{-35}$ m²/Hz |
| Position uncertainty ($L = 4$ km) | $\sqrt{\alpha_H \ell_P L}$ | $1.27 \times 10^{-16}$ m |
| Position uncertainty ($L = 2.5 \times 10^6$ km) | $\sqrt{\alpha_H \ell_P L}$ | $1.0 \times 10^{-13}$ m |

## Derivation Chain Status

The derivation chain threads through axioms (derived), multiple rigorous intermediate results, and three structural postulates. Status per step:

1. [Coherence Conservation](/derivations/axioms/coherence-conservation) (Axiom 1) — **derived**
2. [Observer Definition](/derivations/axioms/observer-definition) (Axiom 2) — **derived**
3. [Loop Closure](/derivations/axioms/loop-closure) (Axiom 3) — **derived**
4. [Minimal Observer](/derivations/minimal-observer/structure) → discrete structure — **derived**
5. [Relational Invariants](/derivations/interactions/relational-invariants) → network — **derived**
6. [Time](/derivations/thermodynamics/time) → causal ordering — **derived**
7. [Speed of Light](/derivations/spacetime/speed-of-light) → null structure — **provisional** (depends on speed-of-light-s1)
8. [Gravity](/derivations/spacetime/gravity) → Planck scale — **provisional**
9. [Holographic Entropy Bound](/derivations/holography/area-scaling) → area scaling — **provisional** (depends on area-scaling-s1)
10. [Causal Set Statistics](/derivations/holography/causal-set-statistics) → amplitude coefficient $\alpha_H$ — **provisional** (inherits from 7, 9; $\alpha_H$ itself is an O(1) coefficient with natural target $\sim 1/4$ from a heuristic holographic substitution — not rigorously derived)
11. [Entanglement](/derivations/quantum/entanglement) + [ER=EPR](/derivations/holography/er-epr) → nonlocal shared-origin structure at the beamsplitter — **derived** (these derivations are already at rigorous status)
12. Rotational invariance of the shared-origin displacement → $\gamma(\alpha) = \cos\alpha$ → angular pattern $\Gamma(\beta) = \cos\beta$ — **derived** (Theorem 5.1): the single-arm cross-correlation is rigorously obtained from the isotropic covariance of the displacement at the beamsplitter vertex, which is itself grounded in the relational invariant generated by the Type III interaction at the beamsplitter (Proposition 3.1)
13. Irreducibility of distinct relational invariants ([Relational Invariants](/derivations/interactions/relational-invariants) Theorem 4.1) → $\Gamma_{\text{sep}}(\beta, d) \approx 0$ for separated vertices (Theorem 8.1) — **derived**: separated Type III interactions generate independent relational invariants, forcing zero cross-correlation at leading order $O(\ell_P^3/d^3)$ for $d \gg \ell_P$. Stronger than the causality-only cutoff.

**This prediction inherits the provisional status of its upstream dependencies at steps 7–10.** One open item remains load-bearing:

- **$\alpha_H$ amplitude**: The $\sqrt{\ell_P L}$ *shape* is rigorous; the *amplitude* is an O(1) parameter constrained by Holometer to $\alpha_H \lesssim 0.24$, with $\sim 1/4$ as the natural target from Heuristic 2.3 of [Causal Set Statistics](/derivations/holography/causal-set-statistics). A first-principles value requires a causet length-estimator calculation (tracked in [future-targets.json](site/src/data/future-targets.json) as `holographic-noise-amplitude`).

## Rigor Assessment

**Rigorously established:**
- Holographic $\sqrt{\ell_P L}$ *scaling* (CLT on Poisson causet cells, [Causal Set Statistics](/derivations/holography/causal-set-statistics) Proposition 2.2)
- White spectrum for $f < c/(2L)$ (from independence of Planck cells at different round trips)
- **Single-arm cross-correlation $\gamma(\alpha) = \cos\alpha$** (Theorem 5.1): derived from the isotropic covariance of the shared displacement $\delta\mathbf{X}$ at the beamsplitter vertex, which is itself established by the relational invariant generated at the Type III interaction of the beamsplitter (Proposition 3.1 via [Entanglement](/derivations/quantum/entanglement) Proposition 1.3 and [ER=EPR](/derivations/holography/er-epr) Definition 1.1).
- **Michelson overlap reduction $\Gamma(\beta) = \cos\beta$** (Step 7): follows by direct algebraic computation from $\gamma(\alpha) = \cos\alpha$.
- **Separated-vertex zero cross-correlation** (Theorem 8.1): $\Gamma_{\text{sep}}(\beta, d) \approx 0$ for $d \gg \ell_P$ at leading order, independent of frequency. Derived from the irreducibility of relational invariants at distinct Type III interactions ([Relational Invariants](/derivations/interactions/relational-invariants) Theorem 4.1) plus the three subleading-channel analysis (Poisson cell independence, GW-sector separation of ambient-observer effects, optical-vs-geometric coherence distinction).
- Holometer consistency: the numerical comparison at $\alpha_H \lesssim 0.24$ is sound (predicted $S_L \lesssim 8.4 \times 10^{-41}$ m²/Hz matches bound).

**Heuristic / natural-target (not derived):**
- The amplitude coefficient $\alpha_H \sim 1/4$ — a suggestive value from a heuristic substitution in [Causal Set Statistics](/derivations/holography/causal-set-statistics) Heuristic 2.3. This target sits right at the Holometer bound, placing the framework in a highly predictive knife-edge regime. A first-principles value requires a causet length-estimator calculation.

**Modeling assumptions (reasonable but not uniquely forced):**
- The shared-origin displacement $\delta\mathbf{X}$ is modeled as a pure vector (rank-1). A rotationally-invariant scalar "breathing mode" component would shift $\gamma(\alpha)$ from pure $\cos\alpha$ to affine $a + b\cos\alpha$, without changing the distinctive $\Gamma(\beta) = \cos\beta$ signature. The specific coefficients $a, b$ would require a more detailed model of beamsplitter-substrate interaction; only $\gamma(\alpha) = \cos\alpha$ is used in quantitative estimates.

**Separated-vertex cross-correlation** (previously open, now derived at Theorem 8.1): cross-correlation between displacements at two distinct beamsplitter vertices at macroscopic separation $d \gg \ell_P$ is zero at leading order ($O(\ell_P^3/d^3)$), independent of frequency. This is stronger than the causality-only cutoff and gives Tests 2 (LISA) and 3 (LIGO network) a **null prediction** rather than a quantitative non-zero cross-correlation. The result is forced by the irreducibility of relational invariants at distinct Type III interactions ([Relational Invariants](/derivations/interactions/relational-invariants) Theorem 4.1).

**Open:**
- The transition from discrete causal set to continuum noise correlation requires a coarse-graining calculation
- The coherence labels $\lambda$ on causal set elements may modify the correlation structure
- Cosmological corrections (the noise prediction assumes flat spacetime)
- The frequency cutoff behavior near $f = c/(2L)$ requires the cavity response function

## Open Gaps

1. **Exact amplitude from causal set statistics**: The first-principles $\alpha_H$ question is structural rather than computational. The framework's $\sqrt{\ell_P L}$ scaling and $\alpha_H \sim 1/4$ both presuppose a count-based estimator (Planck-thickness tube of cells along the path), where the sum-of-independents variance gives $\alpha_H = 1$ trivially and the holographic substitution rule of [Causal Set Statistics](/derivations/holography/causal-set-statistics) Heuristic 2.3 reduces it to $1/4$. Resolving $\alpha_H$ requires either deriving the holographic substitution rule from the framework's axioms or constructing a non-Poisson causet model with explicit holographic correlations. The natural Brightwell–Gregory longest-chain Monte Carlo on Poisson-sprinkled 4D Minkowski is not a route to $\alpha_H$ — the longest-chain length is an extreme-value statistic with sub-linear variance, not a sum-of-independents. See [Causal Set Statistics](/derivations/holography/causal-set-statistics) Open Gap 1 for the current framing.
2. **Formalize the beamsplitter-as-Type III-interaction lemma**: Proposition 3.1 asserts that a 50/50 beamsplitter generates a relational invariant with the specific shared-displacement structure used in Step 5. This is grounded in standard quantum optics plus the Entanglement and ER=EPR derivations, but a short explicit lemma tying the three together (coherent input → beamsplitter unitary → entangled output → relational invariant with isotropic vector structure) would sharpen the foundation of the γ(α) = cos α result.
3. **Scalar vs. vector composition of the shared displacement**: The current derivation uses a pure rank-1 vector model (Proposition 3.2), giving $\gamma(\alpha) = \cos\alpha$ exactly. A rotationally-invariant scalar component would produce $\gamma(\alpha) = a + b\cos\alpha$ with $a > 0$. Both give the same $\Gamma(\beta) = \cos\beta$ at the Michelson level, but distinguishing them requires a more detailed substrate model.
4. **Higher-order correlations**: The prediction focuses on two-point correlations. Higher-point statistics (three-point, four-point) of the holographic noise would provide additional model-independent tests.
5. **Cosmological corrections**: In an expanding universe with Hubble parameter $H$, the causal structure is modified. The noise PSD may acquire a correction $\sim (H\ell_P/c)$ at cosmological baselines.
6. **Curved spacetime generalization**: Near massive bodies, the noise should be modified by the local curvature. The prediction in Schwarzschild spacetime would be relevant for tests using GPS or pulsar timing.
7. **Connection to gravitational wave memory**: Holographic noise at very low frequencies ($f \to 0$) might contribute to a stochastic gravitational wave background with specific polarization properties distinguishable from astrophysical sources.

<!-- References -->
[Chou et al., 2017]: /references#chou-2017
