---
title: "Weak Interaction from Quaternionic Structure"
status: "draft"
dependsOn: ["gauge/electromagnetism", "dimensions/three-dimensions", "particles/spin-statistics"]
enablesDerivation: ["gauge/chirality-selection", "gauge/standard-model-group", "flavor/mixing-angles", "cosmology/baryogenesis"]
tags: ["gauge"]
summary: "In three spatial dimensions, maintaining phase coherence along three orthogonal axes forces quaternionic structure by Hurwitz's theorem. The unit quaternions form SU(2), yielding the weak gauge field, non-abelian field strength, and Yang-Mills equations. The Z₂ winding classes from spin-statistics provide the topological distinction between the two chiralities."
rigorLevel: "semi-formal"
lastUpdated: 2026-03-10
---

## Statement

**Theorem.** In three spatial dimensions, the requirement that observers maintain phase coherence simultaneously along three orthogonal axes forces the phase algebra to be quaternionic ($\mathbb{H}$). The group of unit quaternions is $SU(2)$, which by the same localization argument as [Electromagnetism](/derivations/gauge/electromagnetism) (Theorem 2.1) introduces a local $SU(2)$ gauge connection $W^a_\mu$ ($a = 1, 2, 3$). The curvature of this connection is the weak field strength $W^a_{\mu\nu}$, and the field equations are the Yang-Mills equations — uniquely determined by Lorentz covariance, gauge invariance, and second-order locality. The $\mathbb{Z}_2$ winding classes from [Spin and Statistics](/derivations/particles/spin-statistics) provide a topological distinction between left- and right-handed spinors, giving the structural basis for chiral coupling.

## Structural Postulates

**Structural Postulate S1 (Algebraic completeness of phase structure).** The observer's phase algebra $\mathcal{A}$ forms a normed division algebra over $\mathbb{R}$: for all $a, b \in \mathcal{A}$, $|ab| = |a| \cdot |b|$ (the norm is multiplicative). Combined with the requirement of three independent imaginary units (one per spatial axis), this selects $\mathcal{A} = \mathbb{H}$.

**Remark.** This postulate packages three physical requirements: (i) phase composition is bilinear (linearity of quantum mechanics), (ii) phase composition preserves coherence (the norm condition, from Axiom 1), and (iii) every non-zero phase has an inverse (dynamics are reversible). These three conditions define a normed division algebra. The postulate's content is that the phase algebra respects these properties — it is the gauge-theory analog of S1 in [Electromagnetism](/derivations/gauge/electromagnetism) (locality of phase comparison), now applied to a richer algebraic structure.

**Structural Postulate S2 (Minimal non-abelian gauge dynamics).** The self-consistency condition for the $SU(2)$ gauge connection involves at most second derivatives of $W^a_\mu$ — equivalently, at most first derivatives of the field strength $W^a_{\mu\nu}$.

**Remark.** Identical in motivation to S2 of [Electromagnetism](/derivations/gauge/electromagnetism) and S1 of [Einstein Field Equations](/derivations/spacetime/einstein-equations).

## Derivation

### Step 1: Three Orthogonal Phase Channels

**Definition 1.1.** In $d = 3$ spatial dimensions, an observer $\mathcal{O}$ at point $x$ has three orthogonal spatial axes $\hat{e}_1, \hat{e}_2, \hat{e}_3$. Along each axis $\hat{e}_a$, the observer maintains a $U(1)$ phase cycle $\theta_a(x)$ (from [Loop Closure](/derivations/axioms/loop-closure), Corollary 2.3, applied to the spatial component along axis $a$). These are the **phase channels**: the three independent directions in which the observer's coherence loop can wind.

**Proposition 1.2 (Three independent phase channels).** *In $d = 3$, an observer requires exactly three independent phase channels.*

*Proof.* By [Three Spatial Dimensions](/derivations/dimensions/three-dimensions) (Proposition 3.1), $\pi_1(SO(3)) = \mathbb{Z}_2$, and $\dim SO(3) = 3$. The Lie algebra $\mathfrak{so}(3)$ has dimension 3, corresponding to rotations about three independent axes. Each axis defines a $U(1) \subset SO(3)$ subgroup — a phase channel. Since $\dim \mathfrak{so}(3) = 3$, there are exactly three independent generators and hence three independent phase channels. $\square$

**Remark.** In $d = 2$, there is only one rotation axis, giving one phase channel ($U(1)$ alone — hence only electromagnetism). In $d \geq 4$, $\dim SO(d) = d(d-1)/2 > 3$, and the phase algebra would need more structure. The match between $d = 3$ and the quaternionic structure ($\dim \mathbb{H} = 4 = 1 + 3$, with 3 imaginary units) is not coincidence but follows from $\mathfrak{su}(2) \cong \mathfrak{so}(3)$.

### Step 2: Why Quaternions, Not Three Copies of U(1)

**Theorem 2.1 (Quaternionic closure is forced).** *The three phase channels cannot be independent copies of $U(1)$. Their closure under coherence-preserving composition is the quaternion algebra $\mathbb{H}$.*

*Proof.* Consider two observers $\mathcal{O}_A$ and $\mathcal{O}_B$ whose relative orientation involves rotations about two different axes — say $\hat{e}_1$ and $\hat{e}_2$. The relational invariant between them involves the composition of phases from both channels: $\mathcal{O}_A$ transports its phase to $\mathcal{O}_B$ via a path that rotates about $\hat{e}_1$, then about $\hat{e}_2$.

If the channels were independent ($U(1)^3$), this composition would commute: rotating by $\alpha$ about $\hat{e}_1$ then $\beta$ about $\hat{e}_2$ would equal rotating by $\beta$ about $\hat{e}_2$ then $\alpha$ about $\hat{e}_1$. But rotations in $SO(3)$ do not commute for distinct axes — this is the non-abelian structure of the rotation group.

Formally: the three generators $T_a$ of the phase channels must satisfy the same commutation relations as $\mathfrak{so}(3)$:

$$[T_a, T_b] = \varepsilon_{abc} T_c$$

This is the Lie algebra of $SU(2) \cong$ unit quaternions.

Now apply Structural Postulate S1: the phase algebra must form a normed division algebra with three independent imaginary units. By **Hurwitz's theorem** (1898), the only normed division algebras over $\mathbb{R}$ are $\mathbb{R}$ (dim 1), $\mathbb{C}$ (dim 2), $\mathbb{H}$ (dim 4), and $\mathbb{O}$ (dim 8). An algebra with exactly 3 imaginary units has dimension 4, selecting $\mathbb{H}$ uniquely.

The quaternion algebra $\mathbb{H}$ has basis $\{1, I, J, K\}$ with:
$$I^2 = J^2 = K^2 = IJK = -1$$
$$IJ = K, \quad JK = I, \quad KI = J$$

These relations reproduce the $\mathfrak{su}(2)$ commutation relations under the identification $T_a = -\frac{i}{2}\sigma_a$ (Pauli matrices), confirming that the forced algebra is indeed $SU(2)$. $\square$

**Corollary 2.2 (Division algebra hierarchy).** *The gauge groups arising from the Cayley-Dickson construction of normed division algebras are:*

| Algebra | Dim | Imaginary units | Unit group | Gauge symmetry |
|---|---|---|---|---|
| $\mathbb{R}$ | 1 | 0 | $\{+1, -1\}$ | $\mathbb{Z}_2$ (charge conjugation) |
| $\mathbb{C}$ | 2 | 1 | $U(1)$ | Electromagnetism |
| $\mathbb{H}$ | 4 | 3 | $SU(2)$ | Weak interaction |
| $\mathbb{O}$ | 8 | 7 | — | [Color Force](/derivations/gauge/color-force) |

*The tower terminates at $\mathbb{O}$ by Hurwitz's theorem.*

### Step 3: The SU(2) Gauge Connection

**Definition 3.1 (Non-abelian connection).** The $SU(2)$ gauge connection is a Lie-algebra-valued 1-form:

$$W_\mu = W^a_\mu T_a = W^a_\mu \frac{\sigma_a}{2i}$$

where $\sigma_a$ are the Pauli matrices and $T_a = \sigma_a / 2i$ are the $\mathfrak{su}(2)$ generators.

**Proposition 3.2 (Local quaternionic phase independence).** *The same localization argument that establishes the local $U(1)$ gauge symmetry in [Electromagnetism](/derivations/gauge/electromagnetism) (Theorem 2.1) extends to $SU(2)$: the quaternionic phase convention at each spacetime point is independent, yielding a local $SU(2)$ gauge redundancy.*

*Proof.* The argument is identical in structure to the $U(1)$ case:

1. By [Relational Invariants](/derivations/interactions/relational-invariants) (R1), physical observables depend on *relative* quaternionic phases, not absolute ones.
2. By [Speed of Light](/derivations/spacetime/speed-of-light) (Proposition 4.2), finite signal propagation prevents global coordination of quaternionic phase conventions.
3. Therefore the local quaternionic phase is a gauge degree of freedom:

$$\psi(x) \to g(x) \, \psi(x), \quad g(x) \in SU(2)$$

for arbitrary smooth $g: \mathcal{M} \to SU(2)$. $\square$

**Proposition 3.3 (Covariant derivative).** *The covariant derivative that compensates for the local $SU(2)$ gauge transformation is:*

$$D_\mu = \partial_\mu - ig_W W_\mu = \partial_\mu - ig_W W^a_\mu T_a$$

*where $g_W$ is the weak coupling constant.*

**Proposition 3.4 (Gauge transformation law).** *Under $\psi \to g\psi$, the connection transforms as:*

$$W_\mu \to g W_\mu g^{-1} + \frac{i}{g_W} g \, \partial_\mu g^{-1}$$

*This is the standard non-abelian gauge transformation.*

*Proof.* Requiring $D_\mu(g\psi) = g(D_\mu\psi)$ gives:

$$(\partial_\mu g)\psi + g\partial_\mu\psi - ig_W W'_\mu g\psi = g\partial_\mu\psi - ig_W g W_\mu\psi$$

Solving: $W'_\mu = g W_\mu g^{-1} + \frac{i}{g_W}(\partial_\mu g)g^{-1} = g W_\mu g^{-1} + \frac{i}{g_W} g\partial_\mu g^{-1}$. $\square$

### Step 4: The Weak Field Strength

**Definition 4.1.** The **weak field strength tensor** is:

$$W^a_{\mu\nu} = \partial_\mu W^a_\nu - \partial_\nu W^a_\mu + g_W \varepsilon^{abc} W^b_\mu W^c_\nu$$

*Equivalently, in matrix form:*

$$\mathbf{W}_{\mu\nu} = \partial_\mu \mathbf{W}_\nu - \partial_\nu \mathbf{W}_\mu - ig_W [\mathbf{W}_\mu, \mathbf{W}_\nu]$$

**Proposition 4.2 (Gauge covariance).** *$\mathbf{W}_{\mu\nu}$ transforms covariantly: $\mathbf{W}_{\mu\nu} \to g \, \mathbf{W}_{\mu\nu} \, g^{-1}$.*

*Proof.* Direct computation from Definition 4.1 and Proposition 3.4. The non-abelian structure contributes the $[W_\mu, W_\nu]$ term, which transforms correctly because the commutator is equivariant under conjugation. $\square$

**Remark (Contrast with electromagnetism).** The key difference from the $U(1)$ case: $F_{\mu\nu}$ is gauge-*invariant*, but $W^a_{\mu\nu}$ is only gauge-*covariant* (it transforms by conjugation). This is because $SU(2)$ is non-abelian — the field strength carries a gauge index. Physical observables must be traces: $\text{tr}(\mathbf{W}_{\mu\nu}\mathbf{W}^{\mu\nu})$ is gauge-invariant.

**Proposition 4.3 (Self-interaction).** *The non-abelian field strength contains self-interaction terms:*

$$W^a_{\mu\nu} = \underbrace{(\partial_\mu W^a_\nu - \partial_\nu W^a_\mu)}_{\text{abelian part}} + \underbrace{g_W \varepsilon^{abc} W^b_\mu W^c_\nu}_{\text{self-coupling}}$$

*This means the weak gauge bosons carry weak charge and interact with each other — unlike photons, which are electrically neutral. This is a direct consequence of the non-commutativity of $\mathbb{H}$: the quaternionic product $IJ = K \neq JI = -K$ generates cross-terms.*

### Step 5: Yang-Mills Equations by Uniqueness

**Theorem 5.1 (Yang-Mills equations).** *The unique field equations for the $SU(2)$ gauge field satisfying Lorentz covariance, gauge covariance, and at most first derivatives of $W^a_{\mu\nu}$ (Structural Postulate S2) are the Yang-Mills equations:*

$$D_\mu W^{a\mu\nu} = g_W J^{a\nu}$$

*where $D_\mu W^{a\mu\nu} = \partial_\mu W^{a\mu\nu} + g_W \varepsilon^{abc} W^b_\mu W^{c\mu\nu}$ is the gauge-covariant divergence and $J^{a\nu}$ is the weak isospin current.*

*Proof.* The argument parallels [Electromagnetism](/derivations/gauge/electromagnetism) (Theorem 6.1):

1. **Building blocks**: $W^a_{\mu\nu}$ (covariant tensor), $g_{\mu\nu}$ (metric), $J^{a\nu}$ (source current), $D_\mu$ (covariant derivative), $\varepsilon_{\mu\nu\rho\sigma}$ (Levi-Civita).

2. **Lorentz + gauge vector**: We need an equation $\mathcal{E}^{a\nu} = 0$ that transforms as a Lorentz vector with an adjoint gauge index. The unique object with one derivative of $W^a_{\mu\nu}$ is the covariant divergence $D_\mu W^{a\mu\nu}$.

3. **Bianchi identity**: $D_{[\mu} W^a_{\nu\rho]} = 0$ (the non-abelian Bianchi identity), analogous to $\partial_{[\mu}F_{\nu\rho]} = 0$ in electromagnetism.

4. **Consistency**: The covariant divergence of the source satisfies $D_\nu J^{a\nu} = 0$ (covariantly conserved weak isospin current), guaranteed by the Bianchi identity and the antisymmetry of $W^{a\mu\nu}$.

5. **Coupling constant**: $g_W$ sets the strength of the weak interaction (free parameter at this stage). $\square$

**Corollary 5.2 (Gauge boson self-coupling).** *The Yang-Mills equations contain cubic ($W^3$) and quartic ($W^4$) self-interaction terms. This is the field-equation manifestation of the gauge bosons carrying weak charge.*

### Step 6: Spinorial Structure and the SU(2)–SO(3) Connection

**Proposition 6.1 (SU(2) as the double cover of SO(3)).** *The weak gauge group $SU(2)$ is the universal cover of the spatial rotation group $SO(3)$:*

$$1 \to \mathbb{Z}_2 \to SU(2) \xrightarrow{2:1} SO(3) \to 1$$

*Proof.* This is the covering map established in [Spin and Statistics](/derivations/particles/spin-statistics) (Proposition 1.2). The kernel $\{I, -I\} \cong \mathbb{Z}_2$ corresponds to the two winding classes in $\pi_1(SO(3)) = \mathbb{Z}_2$. $\square$

**Corollary 6.2 (Spinor representations).** *The fundamental representation of $SU(2)$ is 2-dimensional (the doublet), acting on spinors $\psi = \binom{\psi_1}{\psi_2}$. Under a $2\pi$ rotation, spinors acquire a sign: $\psi \to -\psi$. This is the defining property of half-integer spin — the $[1]$ winding class of [Spin and Statistics](/derivations/particles/spin-statistics).*

**Remark.** The deep connection: the weak interaction acts on *spinors* because $SU(2)$ = unit quaternions = double cover of $SO(3)$. The framework derives $SO(3)$ from three spatial dimensions and $SU(2)$ from the quaternionic phase algebra. These are the same mathematical object viewed from two sides — topological (winding classes) and algebraic (division algebra). The weak interaction and spin are unified at their root.

### Step 7: Chirality — The Left-Handed Puzzle

**Proposition 7.1 (Topological basis for chirality).** *The two $\mathbb{Z}_2$ winding classes of $\pi_1(SO(3))$ provide a topological distinction between left-handed and right-handed spinors.*

*Proof.* In four-dimensional spacetime, the Lorentz group $SO(3,1)$ has a double cover $SL(2, \mathbb{C})$, whose Lie algebra decomposes as:

$$\mathfrak{sl}(2, \mathbb{C}) \cong \mathfrak{su}(2)_L \oplus \mathfrak{su}(2)_R$$

The two copies of $\mathfrak{su}(2)$ correspond to left-handed and right-handed Weyl spinors. The decomposition arises because:

$$\mathfrak{so}(3,1)_{\mathbb{C}} = \mathfrak{so}(4, \mathbb{C}) \cong \mathfrak{sl}(2, \mathbb{C}) \oplus \mathfrak{sl}(2, \mathbb{C})$$

The weak $SU(2)_W$ is identified with $SU(2)_L$ — it acts only on the left-handed component. The right-handed component transforms as a singlet under $SU(2)_W$.

The $\mathbb{Z}_2$ winding class from [Spin and Statistics](/derivations/particles/spin-statistics) distinguishes the two chiralities: a spinor is either in the $(1/2, 0)$ or $(0, 1/2)$ representation of $SU(2)_L \times SU(2)_R$. $\square$

**Remark (Honest assessment).** Proposition 7.1 establishes that the *mathematical structure* for chirality exists — the Lorentz group's decomposition into left and right $SU(2)$'s. The *selection* of one chirality over both is addressed in [Chirality Selection](/derivations/gauge/chirality-selection), which shows that non-commutativity of $\mathbb{H}$ combined with coherence conservation forces a global orientation lock — all quaternionically-coupled observers must share the same cyclic ordering $I \to J \to K$, producing maximal parity violation. The choice of $L$ vs. $R$ is spontaneous.

### Step 8: The Electroweak Connection

**Proposition 8.1 (Electroweak structure).** *The full gauge group of the electroweak sector is $SU(2)_L \times U(1)_Y$, where:*

- *$SU(2)_L$ is the quaternionic gauge group of Step 3 (acting on left-handed doublets)*
- *$U(1)_Y$ is the hypercharge group — a $U(1)$ subgroup distinct from electromagnetism*
- *The electromagnetic $U(1)_{em}$ is the diagonal subgroup after symmetry breaking:*

$$U(1)_{em} \subset SU(2)_L \times U(1)_Y$$

*with the electric charge given by $Q = T_3 + Y/2$ (Gell-Mann–Nishijima formula), where $T_3$ is the third component of weak isospin and $Y$ is hypercharge.*

*Proof sketch.* The quaternionic algebra $\mathbb{H}$ contains $\mathbb{C}$ as a subalgebra (generated by any one imaginary unit, say $I$). The $U(1)$ electromagnetism of [Electromagnetism](/derivations/gauge/electromagnetism) corresponds to this $\mathbb{C} \subset \mathbb{H}$. The full structure $SU(2) \supset U(1)$ means that the electromagnetic $U(1)$ is embedded in the weak $SU(2)$.

However, the *physical* electromagnetic $U(1)_{em}$ is not simply $U(1) \subset SU(2)_L$. It is a *mixture* of the $T_3$ generator of $SU(2)_L$ and an independent $U(1)_Y$ (hypercharge). The mixing is parameterized by the Weinberg angle $\theta_W$:

$$A_\mu = W^3_\mu \sin\theta_W + B_\mu \cos\theta_W$$
$$Z_\mu = W^3_\mu \cos\theta_W - B_\mu \sin\theta_W$$

where $B_\mu$ is the $U(1)_Y$ gauge field and $A_\mu$ is the photon field. $\square$

**Remark (Status of the Weinberg angle).** The Weinberg angle $\sin^2\theta_W \approx 0.231$ at the $Z$ mass is an empirical parameter at this stage. Its value should ultimately follow from the [Coupling Constants](/derivations/cosmology/coupling-constants) derivation. The framework does not yet predict $\theta_W$.

### Step 9: Weak Isospin Current and Charge

**Definition 9.1.** The **weak isospin current** is the Noether current associated with the local $SU(2)_L$ symmetry:

$$J^{a\mu}_L = \bar{\psi}_L \gamma^\mu T^a \psi_L$$

where $\psi_L = \frac{1}{2}(1 - \gamma_5)\psi$ is the left-handed projection.

**Theorem 9.2 (Weak isospin conservation).** *$D_\mu J^{a\mu}_L = 0$ (covariantly conserved).*

*Proof.* This follows from the $SU(2)_L$ gauge symmetry by Noether's theorem, in exact parallel with charge conservation in [Electromagnetism](/derivations/gauge/electromagnetism) (Theorem 5.2). Coherence conservation (Axiom 1) applied to the $SU(2)$ Noether charges gives local conservation. $\square$

**Proposition 9.3 (Weak boson spectrum).** *The $SU(2)_L \times U(1)_Y$ gauge structure requires four gauge bosons:*

| Boson | Generator | Charge | Mass (before breaking) |
|---|---|---|---|
| $W^1_\mu, W^2_\mu$ | $T_1, T_2$ | $\pm 1$ | 0 |
| $W^3_\mu$ | $T_3$ | 0 | 0 |
| $B_\mu$ | $Y$ | 0 | 0 |

*After electroweak symmetry breaking, $W^{1,2}$ combine into charged $W^\pm$ (massive), $W^3$ and $B$ mix into $Z^0$ (massive) and $\gamma$ (massless).*

## Physical Interpretation

| Framework concept | Standard physics |
|---|---|
| Three spatial axes | Three $\mathfrak{su}(2)$ generators |
| Quaternionic phase algebra ($\mathbb{H}$) | $SU(2)$ gauge symmetry |
| Non-commutativity of $\mathbb{H}$ | Self-interaction of weak bosons |
| $SU(2)$ = double cover of $SO(3)$ | Weak force acts on spinors |
| $\mathbb{C} \subset \mathbb{H}$ | $U(1)_{em} \subset SU(2)_L$ |
| Hurwitz's theorem | Gauge group is constrained, not arbitrary |
| $\mathbb{Z}_2$ winding classes | Chirality (left/right distinction) |
| Coherence conservation + $SU(2)$ Noether | Weak isospin conservation |

## Consistency Model

**Theorem 10.1.** *The quaternionic gauge structure is realized in the system of two minimal observers in $\mathbb{R}^3$ with internal phase space $S^3 \cong SU(2)$.*

**Model**: Replace the $S^1$ phase of the minimal observer with $S^3$ (the unit quaternions). The observer $\mathcal{O} = (S^3, I, \mathcal{B})$ has state space $\Sigma = S^3$ parameterized by unit quaternion $q = q_0 + q_1 I + q_2 J + q_3 K$ with $|q| = 1$.

*Verification:*

- **Proposition 1.2**: $S^3$ has three independent rotation axes (the left-regular action of $SU(2)$ on itself), corresponding to the three imaginary quaternion directions. ✓

- **Theorem 2.1**: The $U(1)$ subgroup generated by $I$ does not commute with the $U(1)$ subgroup generated by $J$: $e^{I\alpha} \cdot e^{J\beta} \neq e^{J\beta} \cdot e^{I\alpha}$ for generic $\alpha, \beta$. The composition generates all of $SU(2)$. ✓

- **Definition 3.1**: A trivial $SU(2)$ bundle $P = \mathbb{R}^{3,1} \times SU(2)$ with zero connection $W^a_\mu = 0$ satisfies all definitions. ✓

- **Proposition 4.2**: $W^a_{\mu\nu} = 0$ transforms covariantly (trivially). ✓

- **Proposition 6.1**: The covering map $\pi: S^3 \to SO(3)$ given by $q \mapsto R_q$ (rotation by conjugation $v \mapsto qvq^{-1}$) is exactly 2:1 with kernel $\{1, -1\}$. ✓

- **Corollary 6.2**: The fundamental representation $\psi = (q_0 + q_3 i, q_2 + q_1 i)^T$ transforms under $SU(2)$ as a doublet. Under $2\pi$ rotation: $q \to -q$, so $\psi \to -\psi$. ✓ $\square$

## Rigor Assessment

**Rigorous (standard mathematics):**
- Proposition 1.2: Three phase channels from $\dim \mathfrak{so}(3) = 3$ (Lie group theory)
- Hurwitz's theorem: $\mathbb{R}, \mathbb{C}, \mathbb{H}, \mathbb{O}$ are the only normed division algebras (published, peer-reviewed)
- Proposition 3.4: Gauge transformation law (standard computation)
- Proposition 4.2: Gauge covariance of field strength (standard)
- Theorem 5.1: Yang-Mills equations from uniqueness (representation theory)
- Proposition 6.1: $SU(2) \to SO(3)$ double cover (standard topology)
- Theorem 10.1: Consistency model verified

**Semi-formal (physically motivated, not fully proven):**
- Theorem 2.1: The argument that non-commutativity of rotations forces quaternionic structure is physically compelling but relies on Structural Postulate S1 (normed division algebra property). Without S1, one could imagine more exotic algebraic structures. S1 is well-motivated but not derived from axioms.
- Proposition 3.2: Local $SU(2)$ gauge invariance by the same localization argument as electromagnetism — inherits the same limitation (physical reasoning rather than mathematical theorem).
- Proposition 7.1: The topological basis for chirality is rigorous; the *selection* of $SU(2)_L$ over $SU(2)_R$ is now addressed in [Chirality Selection](/derivations/gauge/chirality-selection) via the orientation-consistency theorem.
- Proposition 8.1: The electroweak structure is presented but the mixing mechanism (Weinberg angle) is not derived.

**Not addressed (deferred):**
- Electroweak symmetry breaking (Higgs mechanism or analog)
- Weinberg angle value ($\sin^2\theta_W \approx 0.231$)
- Weak coupling constant $g_W$
- Massive $W^\pm$ and $Z^0$ bosons
- CKM and PMNS mixing (deferred to [Flavor Mixing](/derivations/flavor/mixing-angles))

**Assessment:** Draft status. The core argument (3D → quaternions → $SU(2)$ → Yang-Mills) is clean, well-motivated, and follows the same template as the electromagnetism derivation. The structural postulate S1 (normed division algebra) is explicit and physically justified. Chirality selection is now addressed by [Chirality Selection](/derivations/gauge/chirality-selection) (non-commutativity + coherence conservation → orientation lock). The derivation falls short of provisional because: (1) electroweak symmetry breaking is not addressed, and (2) the Weinberg angle is a free parameter.

## Open Gaps

1. **Chirality selection** *(partially resolved)*: Why does $SU(2)_W$ couple to left-handed spinors only? Addressed by [Chirality Selection](/derivations/gauge/chirality-selection): non-commutativity of $\mathbb{H}$ forces orientation consistency on quaternionic relational invariants, and coherence conservation propagates this globally. The choice of $L$ vs. $R$ is spontaneous. Remaining sub-gaps: anomaly cancellation from coherence conservation, and detailed CPT analysis.

2. **Electroweak symmetry breaking**: The $W^\pm$ and $Z^0$ bosons are massive ($M_W \approx 80$ GeV, $M_Z \approx 91$ GeV), requiring spontaneous breaking of $SU(2)_L \times U(1)_Y \to U(1)_{em}$. The Higgs mechanism (or its coherence-framework analog) has not been derived.

3. **Weinberg angle**: $\sin^2\theta_W \approx 0.231$ is empirical. It should follow from the algebraic structure ($\mathbb{C} \subset \mathbb{H}$ embedding) and the division-algebra normalization, but this calculation has not been completed.

4. **Weak coupling constant**: $g_W$ is a free parameter, related to $\alpha_{em}$ via $g_W = e/\sin\theta_W$. Its value should follow from the [Coupling Constants](/derivations/cosmology/coupling-constants) derivation.

5. **Anomaly cancellation**: The Standard Model is free of gauge anomalies, which constrains the fermion content. The framework should reproduce this constraint from coherence conservation, but this has not been checked.
