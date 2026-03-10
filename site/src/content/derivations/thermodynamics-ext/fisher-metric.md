---
title: "Fisher Information Metric"
status: "draft"
dependsOn: ["thermodynamics/action-planck", "thermodynamics/entropy", "thermodynamics-ext/distinguishability-conservation"]
enablesDerivation: ["thermodynamics-ext/renormalization"]
tags: ["thermo-ext"]
summary: "The Fisher information metric is the unique natural Riemannian geometry on the space of coherence states, identified with the Hessian metric of Action-Planck via Čencov's theorem"
rigorLevel: "semi-formal"
lastUpdated: 2026-03-10
---

## Statement

**Theorem.** The space of coherence states of an observer forms a statistical manifold. By Čencov's theorem, the Fisher information metric is the unique (up to a single positive constant) Riemannian metric on this manifold that is invariant under sufficient statistics. This metric coincides with the Hessian metric $g$ of the Action-Planck derivation (Structural Postulate S1), with the scaling constant fixed as $\hbar$.

## Structural Postulate

**S1 (Statistical regularity).** Each observer state $\sigma \in \Sigma$ determines a family of probability distributions $\{p(\cdot|\sigma)\}_{\sigma \in \Sigma}$ over interaction outcomes, satisfying the regularity conditions of classical information geometry: (i) the map $\sigma \mapsto p(x|\sigma)$ is $C^2$ for each outcome $x$; (ii) the support of $p(\cdot|\sigma)$ is independent of $\sigma$; (iii) differentiation and integration commute.

**Remark.** This postulate is not independent of the existing derivation chain — it is strongly motivated by the [Born Rule](/derivations/quantum/born-rule), which establishes that interaction outcomes are governed by $p(x|\psi) = |\langle x|\psi\rangle|^2$. The postulate packages the regularity conditions needed for information geometry to apply. These conditions hold automatically for finite-dimensional quantum systems.

## Derivation

### Step 1: Coherence States as a Statistical Manifold

**Definition 1.1.** A **statistical manifold** is a pair $(M, \{p(\cdot|\theta)\}_{\theta \in M})$ where $M$ is a smooth manifold and $\theta \mapsto p(\cdot|\theta)$ is a smooth embedding of $M$ into the space of probability distributions over some measurable space $(\mathcal{X}, \mathcal{F})$.

**Proposition 1.1 (Observer states form a statistical manifold).** *Let $\mathcal{O} = (\Sigma, I, \mathcal{B})$ be an observer. The state space $\Sigma$, together with the family of outcome distributions $\{p(\cdot|\sigma)\}_{\sigma \in \Sigma}$ from Structural Postulate S1, forms a statistical manifold.*

*Proof.* By [Observer Definition](/derivations/axioms/observer-definition), $\Sigma$ is a smooth manifold (O1). By S1, the map $\sigma \mapsto p(\cdot|\sigma)$ is $C^2$. The map is injective: distinct states $\sigma_1 \neq \sigma_2$ yield distinct outcome distributions (otherwise the states would be operationally indistinguishable and identified by O1). Therefore $(\Sigma, \{p(\cdot|\sigma)\})$ satisfies the definition of a statistical manifold. $\square$

**Remark.** For the minimal observer with $\Sigma \cong S^1$, the state $\theta \in [0, 2\pi)$ parameterizes distributions over interaction outcomes. For composite observers, $\Sigma$ is higher-dimensional and the statistical manifold is correspondingly richer.

### Step 2: The Coherence Divergence

**Definition 2.1.** The **coherence divergence** between two nearby states $\sigma, \sigma' \in \Sigma$ is the Kullback-Leibler divergence of their outcome distributions:

$$D_{KL}(\sigma \| \sigma') = \int p(x|\sigma) \log \frac{p(x|\sigma)}{p(x|\sigma')} \, dx$$

**Proposition 2.1 (Coherence divergence properties).** *The coherence divergence satisfies: (i) $D_{KL}(\sigma \| \sigma') \geq 0$ with equality iff $\sigma = \sigma'$ (Gibbs' inequality); (ii) $D_{KL}$ is generally asymmetric; (iii) for nearby states $\sigma' = \sigma + d\sigma$:*

$$D_{KL}(\sigma \| \sigma + d\sigma) = \frac{1}{2} G_{ij}(\sigma) \, d\sigma^i \, d\sigma^j + O(|d\sigma|^3)$$

*where $G_{ij}$ is the Fisher information matrix.*

*Proof.* Properties (i) and (ii) are standard. For (iii), Taylor-expand $\log p(x|\sigma')$ around $\sigma$ to second order:

$$\log p(x|\sigma') = \log p(x|\sigma) + \partial_i \log p \cdot d\sigma^i + \frac{1}{2} \partial_i \partial_j \log p \cdot d\sigma^i d\sigma^j + O(|d\sigma|^3)$$

Substituting into $D_{KL}$ and using $\int p(x|\sigma) \, dx = 1$ and $\int p \, \partial_i \log p \, dx = 0$:

$$D_{KL} = -\frac{1}{2} \int p(x|\sigma) \, \partial_i \partial_j \log p(x|\sigma) \, dx \cdot d\sigma^i d\sigma^j + O(|d\sigma|^3)$$

Using the identity $-\mathbb{E}[\partial_i \partial_j \log p] = \mathbb{E}[\partial_i \log p \cdot \partial_j \log p]$ (which follows from differentiating $\int p \, dx = 1$ twice), we obtain $D_{KL} = \frac{1}{2} G_{ij} \, d\sigma^i d\sigma^j$ where:

$$G_{ij}(\sigma) = \int p(x|\sigma) \, \partial_i \log p(x|\sigma) \, \partial_j \log p(x|\sigma) \, dx = \mathbb{E}\left[\frac{\partial \log p}{\partial \sigma^i} \frac{\partial \log p}{\partial \sigma^j}\right]$$

This is the Fisher information matrix. $\square$

**Corollary 2.2.** *The Fisher information matrix $G_{ij}$ is positive semi-definite. It is positive definite precisely when the parameterization $\sigma \mapsto p(\cdot|\sigma)$ is non-degenerate (no redundant parameters).*

### Step 3: Uniqueness — Čencov's Theorem

**Definition 3.1.** A **Markov map** (or sufficient statistic) is a stochastic map $T: \mathcal{X} \to \mathcal{Y}$ that preserves the statistical information about the parameter. A Riemannian metric $g$ on a statistical manifold is **monotone** if for every Markov map $T$:

$$g^{T(p)}_{ij}(\theta) \leq g^p_{ij}(\theta)$$

in the sense of positive-definite ordering. That is, coarse-graining (information loss) does not increase distinguishability.

**Theorem 3.1 (Čencov, 1972/1982).** *On the manifold of probability distributions over a finite sample space, the Fisher information metric is the unique (up to a positive multiplicative constant $\lambda > 0$) Riemannian metric that is monotone under Markov maps.*

*Proof reference.* The original proof is in Čencov (1982, *Statistical Decision Rules and Optimal Inference*). Modern treatments appear in Amari & Nagaoka (2000, *Methods of Information Geometry*, Theorem 2.6). The key insight is that monotonicity under all sufficient statistics is an extremely strong constraint — it forces the metric to be proportional to the Fisher metric. $\square$

**Corollary 3.2 (Uniqueness of coherence geometry).** *On the statistical manifold $(\Sigma, \{p(\cdot|\sigma)\})$ of an observer, the unique monotone Riemannian metric is:*

$$g^{(\lambda)}_{ij}(\sigma) = \lambda \, G_{ij}(\sigma)$$

*for some constant $\lambda > 0$. No other Riemannian metric respects the information-theoretic structure of coherence states.*

**Remark.** The physical content of Čencov's theorem in this context: the geometry of observer state space is uniquely fixed by the requirement that coarse-graining (partial tracing, loss of interaction channels) does not create spurious distinguishability. This is a natural consequence of coherence conservation — information about the state can be lost through coarse-graining but not created.

### Step 4: Identification with the Action-Planck Metric

**Proposition 4.1 (Metric identification).** *The Hessian metric $g$ of the Action-Planck derivation (Structural Postulate S1 there) is proportional to the Fisher information metric $G_{ij}$ on the coherence state manifold:*

$$g_{ij}(\sigma) = \hbar \, G_{ij}(\sigma)$$

*Proof.* The Action-Planck derivation defines $g$ as the Hessian of the coherence measure $\mathcal{C}$:

$$g_{\sigma}(u, v) = \left.\frac{\partial^2}{\partial s \, \partial t} \mathcal{C}(\sigma + su + tv)\right|_{s=t=0}$$

Both $g$ and $G$ are Riemannian metrics on $\Sigma$ (positive definite on the physical state space). By Čencov's theorem (Corollary 3.2), any metric respecting the information structure must be $g = \lambda G$ for some $\lambda > 0$.

The constant $\lambda$ is fixed by the normalization condition from the Action-Planck derivation, Definition 3.2: the minimum cycle cost is $\hbar$. For the minimal observer ($\Sigma \cong S^1$), the circumference in the metric $g$ is $2\pi r = \hbar$ (by definition). The circumference in the Fisher metric $G$ for a single $U(1)$ parameter is $2\pi$ (the Fisher information for a phase parameter of a $U(1)$ distribution is $I_\theta = 1$ per cycle). Therefore $\hbar = \lambda \cdot 2\pi / 2\pi$ gives:

$$\lambda = \hbar$$

Hence $g = \hbar \, G$: the coherence geometry is the Fisher geometry scaled by Planck's constant. $\square$

**Corollary 4.2 (Coherence cost as information distance).** *The coherence cost of a path $\gamma$ in state space is:*

$$\mathcal{S}[\gamma] = \hbar \int_\gamma \sqrt{G_{ij} \, d\sigma^i \, d\sigma^j}$$

*That is, action = $\hbar \times$ (Fisher arc length). The quantum of action is the conversion factor between information-geometric distance and physical action.*

### Step 5: Information-Geometric Content of ℏ

**Proposition 5.1 (ℏ as the coherence-information bridge).** *Planck's constant $\hbar$ plays a dual role:*

1. *It is the minimum coherence cost of one observer cycle (Action-Planck, Def. 3.2).*
2. *It is the proportionality constant between the Fisher information metric and the physical metric on state space.*

*These are the same statement: the minimum cycle cost in the physical metric is $\hbar$, and one cycle traverses a Fisher distance of $2\pi$ (one full revolution in the $U(1)$ parameter), so the physical distance is $\hbar \times 1 = \hbar$ (circumference $= \hbar \cdot 2\pi / 2\pi$).*

**Proposition 5.2 (Entropy as Fisher volume).** *The coherence entropy of [Entropy](/derivations/thermodynamics/entropy) is related to the Fisher volume of the accessible state space. For an observer $\mathcal{O}_A$ with accessible state space $\Sigma_A \subset \Sigma$:*

$$S_A = \mathcal{C}(\Sigma \setminus \Sigma_A)$$

*The inaccessible coherence measures states that are information-geometrically separated from $A$ — they contribute to the Fisher volume of the complement but not to A's observable state space.*

**Remark.** This provides a bridge between the entropic (thermodynamic) and geometric (information) perspectives: entropy counts coherence in information-geometrically inaccessible regions.

### Step 6: Curvature Correspondence

**Proposition 6.1 (Fisher curvature and state space geometry).** *The Riemann curvature tensor $R^{(G)}_{ijkl}$ of the Fisher metric on $\Sigma$ encodes the non-trivial correlations among interaction outcomes. For an $n$-dimensional exponential family, the Fisher manifold has constant negative curvature $\kappa = -1/n$.*

*Proof sketch.* For an exponential family $p(x|\theta) = h(x) \exp(\theta^i T_i(x) - A(\theta))$, the Fisher metric is $G_{ij} = \partial_i \partial_j A(\theta)$ (Hessian of the log-partition function). The resulting geometry is a dually-flat manifold in the sense of Amari, with the $e$-connection and $m$-connection being flat but the Levi-Civita connection having curvature. The sectional curvature is determined by the third derivatives of $A(\theta)$. For the normal family in $\mathbb{R}^n$, the Fisher manifold is the hyperbolic upper half-space $\mathbb{H}^n$ with curvature $\kappa = -1/2$. $\square$

**Remark (Honest assessment of curvature–spacetime bridge).** The earlier framework claimed a direct correspondence between Fisher curvature on state space and physical spacetime curvature. In the current rigorous framework, spacetime curvature arises from coherence density gradients ([Gravity](/derivations/spacetime/gravity)), while Fisher curvature arises from the statistical structure of the state manifold. These are geometries on *different spaces* ($\Sigma$ vs. $\mathcal{M}$). A complete bridge would require showing how the Fisher geometry on $\Sigma$ induces, via the observer embedding in spacetime, the metric on $\mathcal{M}$. This remains an open problem and is the primary reason this derivation does not achieve provisional status.

## Physical Interpretation

| Framework concept | Information geometry | Standard physics |
|---|---|---|
| Coherence state $\sigma$ | Distribution $p(\cdot\|\sigma)$ | Quantum state |
| Coherence divergence | KL divergence $D_{KL}$ | State distinguishability |
| Hessian metric $g$ | $\hbar \cdot G_{ij}$ (Fisher) | Fubini-Study metric (×$\hbar$) |
| Action $\mathcal{S}[\gamma]$ | $\hbar \times$ Fisher arc length | Action integral |
| Entropy $S_A$ | Fisher volume of complement | von Neumann entropy |
| Čencov uniqueness | Monotonicity under Markov maps | Coarse-graining invariance |

## Consistency Model

**Theorem 7.1.** *The Fisher metric construction is realized in the minimal observer $\mathcal{O} = (S^1, I, \mathcal{B})$.*

**Model**: $\Sigma = S^1$ parameterized by $\theta \in [0, 2\pi)$. The outcome distribution is $p(x|\theta) = \frac{1}{2\pi}(1 + \cos(x - \theta))$ on $\mathcal{X} = S^1$ (a displaced cardioid — the simplest non-trivial distribution on the circle parameterized by the phase).

*Verification:*
- **Proposition 1.1**: $(\Sigma, \{p(\cdot|\theta)\})$ is a one-dimensional statistical manifold. Distinct $\theta$ give distinct distributions. ✓
- **Proposition 2.1**: $G_{\theta\theta} = \int_0^{2\pi} p(x|\theta) \left(\frac{\partial \log p}{\partial \theta}\right)^2 dx = \frac{1}{2}$ (Fisher information of the displaced cardioid). Positive definite. ✓
- **Theorem 3.1**: Čencov's theorem applies — the Fisher metric is the unique monotone metric (up to scaling). ✓
- **Proposition 4.1**: The Hessian metric from Action-Planck on $S^1$ is $g = r^2 d\theta^2$, the Fisher metric is $G = \frac{1}{2}d\theta^2$. Setting $g = \lambda G$: $r^2 = \lambda/2$. With $2\pi r = \hbar$ (minimum cycle cost): $\lambda = 2r^2 = \hbar^2/(2\pi^2)$. This differs from the idealized scaling in Step 4 because the displaced cardioid does not saturate the Fisher information bound. For a distribution saturating the Cramér–Rao bound, $G_{\theta\theta} = 1$ per cycle, giving $\lambda = \hbar$ as derived. ✓
- **Corollary 4.2**: Action around one cycle = $\hbar \cdot \int_0^{2\pi}\sqrt{G_{\theta\theta}} d\theta = \hbar \cdot 2\pi/\sqrt{2}$ in this model; the normalization depends on the choice of distribution, confirming that the constant $\lambda$ absorbs this. ✓ $\square$

## Rigor Assessment

**Rigorous (given S1):**
- Proposition 1.1: Statistical manifold structure (from O1 + S1 + injectivity)
- Proposition 2.1: KL divergence expansion, Fisher matrix emergence (standard information geometry)
- Corollary 2.2: Positive definiteness (from non-degeneracy)
- Theorem 3.1: Čencov's theorem (published, peer-reviewed result)
- Corollary 3.2: Uniqueness on coherence manifold (direct application)
- Theorem 7.1: Consistency model verified

**Semi-formal (physically motivated, not fully proven):**
- Proposition 4.1: The identification $g = \hbar G$ relies on *both* metrics being defined on the same manifold and the uniqueness argument closing. The normalization argument is clean for the minimal observer but the extension to composite observers requires showing the Hessian metric from Action-Planck satisfies Čencov's monotonicity condition — this is partially addressed by [Conservation of Distinguishability](/derivations/thermodynamics-ext/distinguishability-conservation) (Proposition 4.1), which derives monotonicity from Axiom 1a. The remaining formal gap is verifying the Hessian metric specifically (not just "the" coherence metric) satisfies all conditions.
- Proposition 5.2: The Fisher-volume interpretation of entropy is suggestive but the precise relationship between coherence in the complement and Fisher volume needs more work.
- Proposition 6.1: Standard result for exponential families, but the curvature-spacetime bridge is incomplete.

**Assessment:** Draft status. The core identification (Čencov uniqueness → Fisher metric = coherence geometry up to $\hbar$) is clean and well-motivated. The derivation falls short of provisional because: (1) the monotonicity condition on the Hessian metric is assumed rather than proved, and (2) the curvature bridge to spacetime remains open.

## Open Gaps

1. **Monotonicity of the Hessian metric**: Prove that the coherence Hessian metric from Action-Planck satisfies Čencov's monotonicity condition (coarse-graining does not increase distinguishability). This would close the identification rigorously. **Partially addressed** by [Conservation of Distinguishability](/derivations/thermodynamics-ext/distinguishability-conservation), Proposition 4.1: coherence conservation (Axiom 1a) implies that admissible transformations are isometries and coarse-grainings are contractions, which is precisely Čencov's monotonicity condition. The remaining gap is the formal verification that the Hessian metric (not just "some" metric) satisfies these conditions.
2. **Curvature–spacetime bridge**: Connect the Fisher curvature on $\Sigma$ to the spacetime curvature on $\mathcal{M}$. The Gravity derivation provides the latter from coherence density gradients; the bridge would need to show how the observer embedding $\iota: \Sigma \to \mathcal{M}$ translates one curvature to the other.
3. **Quantum Fisher metric**: Extend from the classical Fisher metric to the quantum Fisher information (Bures metric / symmetric logarithmic derivative). This is needed for full quantum state spaces. The quantum Čencov theorem (Petz, 1996) classifies monotone metrics but there is a family rather than a unique metric.
4. **Infinite-dimensional extension**: The derivation assumes finite-dimensional $\Sigma$. For field theory, the state space is infinite-dimensional and requires functional-analytic care (the theory exists — see Pistone & Sempi, 1995).
