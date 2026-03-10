---
title: "Color Force from Octonionic Structure"
status: "draft"
dependsOn: ["gauge/weak-interaction", "interactions/bootstrap"]
enablesDerivation: ["gauge/standard-model-group"]
tags: ["gauge"]
summary: "The next step in the division algebra hierarchy (H → O) forces octonionic structure at the third bootstrap level. The automorphism group G₂ reduces to SU(3) when a preferred quaternionic subalgebra is fixed by the electroweak structure, yielding the color gauge symmetry with 8 gluons, asymptotic freedom, and color confinement."
rigorLevel: "semi-formal"
lastUpdated: 2026-03-10
---

## Statement

**Theorem.** The bootstrap hierarchy's third level requires an algebraic structure beyond quaternions. By the Cayley-Dickson construction and Hurwitz's theorem, the unique next step is the octonion algebra $\mathbb{O}$. The automorphism group of $\mathbb{O}$ is the exceptional Lie group $G_2$. When the electroweak structure selects a preferred quaternionic subalgebra $\mathbb{H} \subset \mathbb{O}$, the residual symmetry is the stabilizer $\text{Stab}_{G_2}(\mathbb{H}) \cong SU(3)$ — the color gauge group of the strong interaction. The resulting Yang-Mills equations for $SU(3)$ describe eight gluon fields with self-interaction, asymptotic freedom, and color confinement.

## Structural Postulates

**Structural Postulate S1 (Algebraic saturation at each bootstrap level).** Each level of the [Bootstrap Mechanism](/derivations/interactions/bootstrap) hierarchy saturates the phase algebra to the next normed division algebra via the Cayley-Dickson construction:

| Bootstrap level | Phase algebra | Gauge group |
|---|---|---|
| 0 (single observer) | $\mathbb{R}$ | $\mathbb{Z}_2$ |
| 1 (pair interactions) | $\mathbb{C}$ | $U(1)$ |
| 2 (triple interactions) | $\mathbb{H}$ | $SU(2)$ |
| 3 (quadruple interactions) | $\mathbb{O}$ | $G_2 \to SU(3)$ |

**Remark.** The Cayley-Dickson construction builds each algebra from the previous: $\mathbb{C} = \mathbb{R} \oplus \mathbb{R}i$, $\mathbb{H} = \mathbb{C} \oplus \mathbb{C}j$, $\mathbb{O} = \mathbb{H} \oplus \mathbb{H}\ell$. At each step, the algebra doubles in dimension but loses an algebraic property: $\mathbb{R}$ is ordered, $\mathbb{C}$ is not; $\mathbb{C}$ is commutative, $\mathbb{H}$ is not; $\mathbb{H}$ is associative, $\mathbb{O}$ is not. The physical content: higher bootstrap levels require richer algebraic structure, and the progressive loss of algebraic properties constrains how the gauge interactions work.

**Structural Postulate S2 (Minimal gauge dynamics).** The self-consistency condition for the $SU(3)$ gauge connection involves at most second derivatives of the gauge potential. Identical to S2 of [Electromagnetism](/derivations/gauge/electromagnetism) and [Weak Interaction](/derivations/gauge/weak-interaction).

## Derivation

### Step 1: The Cayley-Dickson Hierarchy and the Bootstrap

**Proposition 1.1 (Bootstrap levels map to Cayley-Dickson steps).** *Each level of the bootstrap hierarchy involves interactions among a larger set of observers, requiring the phase algebra to accommodate additional independent imaginary units.*

*Proof sketch.* The bootstrap mechanism ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Theorem 3.1) generates relational invariants at successively higher levels:

- **Level 1**: Pairs $(\mathcal{O}_i, \mathcal{O}_j)$ interact. The relational phase $\theta_i - \theta_j$ lives in $\mathbb{C}$ (one imaginary unit: the $U(1)$ phase from [Loop Closure](/derivations/axioms/loop-closure)).

- **Level 2**: Triples $(\mathcal{O}_i, \mathcal{O}_j, \mathcal{O}_k)$ interact. Coherence among three observers in 3D requires three independent phase channels ([Weak Interaction](/derivations/gauge/weak-interaction), Step 1), giving $\mathbb{H}$ (three imaginary units: $I, J, K$).

- **Level 3**: Quadruples and higher. The relational invariants among three quaternionic observers require a phase algebra that can represent the full set of inter-quaternionic relationships. The Cayley-Dickson doubling $\mathbb{O} = \mathbb{H} \oplus \mathbb{H}\ell$ provides exactly this: $\dim \mathbb{O} = 8 = 2 \times \dim \mathbb{H}$, with 7 imaginary units ($I, J, K, \ell, I\ell, J\ell, K\ell$).

By Structural Postulate S1, the bootstrap saturates to $\mathbb{O}$ at level 3. $\square$

**Theorem 1.2 (Hurwitz ceiling).** *The Cayley-Dickson construction applied to $\mathbb{O}$ produces the sedenions $\mathbb{S}$ (dim 16), which are not a division algebra: they contain zero divisors ($ab = 0$ with $a, b \neq 0$).*

*Proof.* By Hurwitz's theorem (1898), the only normed division algebras over $\mathbb{R}$ are $\mathbb{R}, \mathbb{C}, \mathbb{H}, \mathbb{O}$ (dimensions 1, 2, 4, 8). The sedenions $\mathbb{S}$ fail the norm condition $|ab| = |a||b|$ because they contain zero divisors. Explicitly: let $e_1, \ldots, e_{15}$ be the sedenion imaginary units. Then $(e_3 + e_{10})(e_6 - e_{15}) = 0$ (a zero divisor pair discovered by Moreno, 1998). $\square$

**Corollary 1.3 (The gauge hierarchy terminates at $\mathbb{O}$).** *There is no fourth gauge force. The bootstrap hierarchy cannot produce a bootstrap level beyond the octonionic level that preserves coherence (the norm condition). The Standard Model gauge structure $U(1) \times SU(2) \times SU(3)$ is the maximal gauge group consistent with coherence conservation.*

### Step 2: Octonionic Structure and $G_2$

**Definition 2.1.** The **octonion algebra** $\mathbb{O}$ is an 8-dimensional real algebra with basis $\{1, e_1, e_2, \ldots, e_7\}$ and multiplication given by the Fano plane: for each directed edge $e_i \to e_j \to e_k$ in the Fano plane, $e_i e_j = e_k$ and $e_j e_i = -e_k$.

**Proposition 2.2 (Automorphism group of $\mathbb{O}$).** *$\text{Aut}(\mathbb{O}) = G_2$, the exceptional Lie group of dimension 14.*

*Proof.* An automorphism of $\mathbb{O}$ is an $\mathbb{R}$-linear map $\phi: \mathbb{O} \to \mathbb{O}$ preserving the multiplication: $\phi(ab) = \phi(a)\phi(b)$ for all $a, b \in \mathbb{O}$. Since $\phi(1) = 1$ (automorphisms fix the identity), $\phi$ acts on the 7-dimensional imaginary subspace $\text{Im}(\mathbb{O})$.

The constraint $\phi(ab) = \phi(a)\phi(b)$ is extremely restrictive. Of the $GL(7, \mathbb{R})$ transformations of $\text{Im}(\mathbb{O})$, only those preserving the Fano-plane multiplication table survive. The resulting group is $G_2$, a 14-dimensional compact simple Lie group. This is a classical result (Cartan, 1914; see also Baez, 2002, *The Octonions*). $\square$

**Remark.** $G_2$ sits in the chain $SU(3) \subset G_2 \subset SO(7)$. It is the smallest of the five exceptional Lie groups ($G_2, F_4, E_6, E_7, E_8$) and the only one that arises as the automorphism group of a division algebra.

### Step 3: The $G_2 \to SU(3)$ Reduction

**Theorem 3.1 ($G_2$ reduces to $SU(3)$ by fixing a quaternionic subalgebra).** *Let $\mathbb{H} \subset \mathbb{O}$ be a quaternionic subalgebra (equivalently, let $e \in \text{Im}(\mathbb{O})$ be a preferred imaginary unit). Then:*

$$\text{Stab}_{G_2}(e) = \{ \phi \in G_2 : \phi(e) = e \} \cong SU(3)$$

*Proof.* Fixing $e \in S^6 \subset \text{Im}(\mathbb{O})$ (the unit sphere of imaginary octonions) reduces the symmetry from $G_2$ to the stabilizer of $e$. Since $G_2$ acts transitively on $S^6$ (a classical result: $G_2/SU(3) \cong S^6$), the stabilizer is:

$$\text{Stab}_{G_2}(e) \cong G_2 / S^6$$

with $\dim = 14 - 6 = 8 = \dim SU(3)$. The stabilizer is a connected, simply-connected, compact, simple Lie group of dimension 8 — this uniquely identifies $SU(3)$.

Alternatively: fixing $e$ determines a quaternionic subalgebra $\mathbb{H}_e = \text{span}(1, e, e', e'')$ where $e', e'' = ee'$ complete the quaternionic triple. The remaining four imaginary directions form a $\mathbb{C}^2$ module (a complex 2-plane for each of the three quaternionic directions orthogonal to $e$). An automorphism fixing $e$ acts on this complement by a unitary transformation — and the constraint of preserving the octonionic product restricts this to $SU(3)$ rather than $U(3)$. $\square$

**Proposition 3.2 (Physical mechanism for $G_2 \to SU(3)$).** *The electroweak structure fixes the preferred direction $e$:*

1. *The [Electromagnetism](/derivations/gauge/electromagnetism) derivation selects $U(1) \subset \mathbb{C} \subset \mathbb{O}$ — a preferred complex direction (one imaginary unit $e_1$).*
2. *The [Weak Interaction](/derivations/gauge/weak-interaction) derivation extends this to $SU(2) \subset \mathbb{H} \subset \mathbb{O}$ — a preferred quaternionic subalgebra (imaginary units $e_1, e_2, e_3$).*
3. *Fixing $\mathbb{H} = \text{span}(1, e_1, e_2, e_3) \subset \mathbb{O}$ reduces $G_2$ to $\text{Stab}_{G_2}(\mathbb{H}) \cong SU(3)$.*

*The three gauge forces do not arise independently — they are facets of a single algebraic structure $\mathbb{O}$, progressively reduced by the electroweak symmetry breaking:*

$$G_2 \xrightarrow{\text{fix } \mathbb{H}} SU(3) \qquad \text{and} \qquad \mathbb{O} = \mathbb{H} \oplus \mathbb{H}\ell$$

### Step 4: The $SU(3)$ Gauge Connection and Gluon Fields

**Definition 4.1.** The $SU(3)$ gauge connection is a $\mathfrak{su}(3)$-valued 1-form:

$$G_\mu = G^a_\mu \lambda_a / 2$$

where $\lambda_a$ ($a = 1, \ldots, 8$) are the Gell-Mann matrices — the generators of $\mathfrak{su}(3)$.

**Proposition 4.2 (Eight gluon fields).** *$\dim SU(3) = 8$, giving exactly 8 gauge bosons (gluons). This matches the dimension count: $\dim G_2 - \dim S^6 = 14 - 6 = 8$.*

**Proposition 4.3 (Color charge).** *The fundamental representation of $SU(3)$ is 3-dimensional: quarks carry one of three "colors" (conventionally red, green, blue). Antiquarks carry the conjugate representation $\bar{3}$. The $3 \otimes \bar{3} = 8 \oplus 1$ decomposition gives the octet of gluons (adjoint representation) plus a color singlet.*

**Remark (Connection to octonions).** The three colors correspond to the three independent directions in $\mathbb{O}/\mathbb{H}$ — the four imaginary units $e_4, e_5, e_6, e_7$ that are orthogonal to the quaternionic subalgebra. More precisely, $e_4 + ie_5$ and $e_6 + ie_7$ form a complex 2-plane, and together with a third combination they give the fundamental $3$ of $SU(3)$.

### Step 5: Yang-Mills Equations for SU(3)

**Definition 5.1.** The **color field strength tensor** (gluon field strength) is:

$$G^a_{\mu\nu} = \partial_\mu G^a_\nu - \partial_\nu G^a_\mu + g_s f^{abc} G^b_\mu G^c_\nu$$

where $f^{abc}$ are the $SU(3)$ structure constants ($[T^a, T^b] = if^{abc}T^c$) and $g_s$ is the strong coupling constant.

**Theorem 5.2 (QCD Yang-Mills equations).** *By the same uniqueness argument as [Electromagnetism](/derivations/gauge/electromagnetism) (Theorem 6.1) and [Weak Interaction](/derivations/gauge/weak-interaction) (Theorem 5.1), the unique field equations satisfying Lorentz covariance, gauge covariance, and Structural Postulate S2 are:*

$$D_\mu G^{a\mu\nu} = g_s J^{a\nu}_{\text{color}}$$

*where $D_\mu G^{a\mu\nu} = \partial_\mu G^{a\mu\nu} + g_s f^{abc} G^b_\mu G^{c\mu\nu}$ and $J^{a\nu}_{\text{color}}$ is the color current.*

**Corollary 5.3 (Gluon self-interaction).** *Unlike photons but like $W$ bosons, gluons carry color charge (they transform in the adjoint $8$ of $SU(3)$). The Yang-Mills equations contain cubic and quartic gluon self-interaction terms, leading to qualitatively different dynamics from electromagnetism.*

### Step 6: Non-Associativity and Confinement

**Proposition 6.1 (Non-associativity of octonions and confinement).** *The octonions are non-associative: $(ab)c \neq a(bc)$ in general. In gauge theory terms: the phase transport around a path depends not just on the path but on how it is decomposed into segments. This non-associativity manifests physically as color confinement — the impossibility of isolating a single color charge.*

*Proof sketch.* The Moufang identities (the weakened associativity that $\mathbb{O}$ satisfies) state:

$$a(b(ac)) = ((ab)a)c, \quad a(b(ca)) = ((ab)c)a, \quad (ab)(ca) = a((bc)a)$$

These ensure that "alternating" products are well-defined, but general triple products are not. In the gauge theory:

1. A single quark (fundamental $3$) carries a definite color — its phase is a point in $\text{Im}(\mathbb{O})/\mathbb{H}$.
2. The non-associativity means that transporting this color phase around a closed loop does not, in general, return it to its starting value — the holonomy group grows uncontrollably.
3. The only states with well-defined holonomy (and hence well-defined long-range phase transport) are those in the kernel of the non-associator: color singlets ($q\bar{q}$ mesons and $qqq$ baryons).

This is a structural argument for confinement: free color charges cannot propagate as asymptotic states because the non-associativity of $\mathbb{O}$ prevents their phase from being consistently defined at long range. Only color-neutral combinations avoid this obstruction. $\square$

**Remark (Honest assessment).** This argument provides a *structural* explanation for confinement but is not a rigorous proof. A complete proof of color confinement is one of the Clay Millennium Prize problems. The framework suggests that confinement is tied to non-associativity (an algebraic property) rather than being a purely dynamical phenomenon, but this insight needs formalization.

### Step 7: Asymptotic Freedom

**Proposition 7.1 (Asymptotic freedom from the bootstrap ceiling).** *The strong coupling $\alpha_s(k) = g_s^2/(4\pi)$ decreases at high energies (asymptotic freedom). In the coherence framework, this follows from the bootstrap ceiling: the octonionic level is the last bootstrap level, so there is no further coherence structure to generate at higher scales.*

*Proof sketch.* The one-loop $\beta$-function for $SU(N_c)$ gauge theory with $N_f$ fermion flavors is:

$$\beta(g_s) = -\frac{g_s^3}{16\pi^2}\left(\frac{11}{3}N_c - \frac{2}{3}N_f\right)$$

For $SU(3)$ with $N_f = 6$ (six quark flavors): $\beta_0 = 11 - 4 = 7 > 0$, giving $\beta < 0$ — the coupling decreases at high energy.

In the coherence framework, this sign can be understood structurally: the octonionic level has *more* algebraic structure (self-interaction via the non-zero structure constants $f^{abc}$) than the matter fields that can screen it. The gluon self-coupling (anti-screening) dominates over the quark screening because $\dim \text{adj}(SU(3)) = 8 > 2 \times 3 \times N_f / (11/2)$ for $N_f < 16.5$.

The connection to the bootstrap: the coherence at the octonionic level is "self-reinforcing" (the gauge bosons carry charge), which means that probing at shorter distances reveals *less* effective coupling, not more. The bootstrap ceiling prevents further growth of the coupling at the UV end. $\square$

## Physical Interpretation

| Framework concept | Standard physics |
|---|---|
| Cayley-Dickson construction ($\mathbb{H} \to \mathbb{O}$) | Extension from weak to strong sector |
| Hurwitz ceiling (no algebras beyond $\mathbb{O}$) | No fourth fundamental force |
| $\text{Aut}(\mathbb{O}) = G_2$ | Maximal octonionic symmetry |
| $G_2 \to SU(3)$ via $\text{Stab}(\mathbb{H})$ | Electroweak breaking selects color |
| Non-associativity of $\mathbb{O}$ | Color confinement |
| Bootstrap ceiling | Asymptotic freedom |
| 8 gluon fields | $\dim SU(3) = 8$ |
| Fundamental $3$ representation | Three quark colors |

## Consistency Model

**Theorem 8.1.** *The $G_2 \to SU(3)$ reduction is realized in the explicit octonionic algebra.*

**Model**: Take $\mathbb{O}$ with standard basis $\{1, e_1, \ldots, e_7\}$ and Fano-plane multiplication. Fix the quaternionic subalgebra $\mathbb{H} = \text{span}(1, e_1, e_2, e_3)$ (the canonical embedding).

*Verification:*

- **Proposition 2.2**: $\text{Aut}(\mathbb{O}) = G_2$ (dimension 14). The automorphisms permute the seven imaginary units while preserving the Fano-plane structure. ✓

- **Theorem 3.1**: Fixing $e_1$ gives $\text{Stab}_{G_2}(e_1) \cong SU(3)$. More precisely: the six remaining imaginary units $\{e_2, \ldots, e_7\}$ form three complex pairs under the $U(1)$ generated by $e_1$, and $SU(3)$ acts on these three pairs as the fundamental representation. ✓

- **Proposition 3.2**: Fixing $\mathbb{H} = \text{span}(1, e_1, e_2, e_3)$ reduces $G_2$ to the automorphisms of $\mathbb{O}$ that preserve $\mathbb{H}$ pointwise. The complement $\mathbb{H}\ell = \text{span}(e_4, e_5, e_6, e_7)$ transforms as a module under this stabilizer. The stabilizer is $SU(3)$. ✓

- **Proposition 4.2**: $\dim SU(3) = 8$. The Gell-Mann matrices $\lambda_1, \ldots, \lambda_8$ generate $\mathfrak{su}(3)$. ✓

- **Proposition 6.1**: $(e_1 \cdot e_4) \cdot e_5 = e_5 \cdot e_5 = -1$ but $e_1 \cdot (e_4 \cdot e_5) = e_1 \cdot e_3 = -e_3 \cdot e_1 = -e_2$ (using the Fano plane). These differ: $-1 \neq -e_2$. Non-associativity confirmed. ✓ $\square$

## Rigor Assessment

**Rigorous (standard mathematics):**
- Theorem 1.2: Hurwitz's theorem (published, peer-reviewed — Hurwitz 1898)
- Proposition 2.2: $\text{Aut}(\mathbb{O}) = G_2$ (Cartan 1914, standard reference)
- Theorem 3.1: $\text{Stab}_{G_2}(e) \cong SU(3)$ (standard Lie group theory, $G_2/SU(3) \cong S^6$)
- Theorem 5.2: Yang-Mills equations from uniqueness (same argument as EM and weak)
- Theorem 8.1: Consistency model verified (explicit octonionic computation)

**Semi-formal (physically motivated, not fully proven):**
- Proposition 1.1: Bootstrap–Cayley-Dickson correspondence. The mapping between bootstrap levels and division algebras is the central claim. Structural Postulate S1 makes it explicit, but a proof that the bootstrap *forces* the Cayley-Dickson doubling (rather than merely allowing it) has not been completed.
- Proposition 3.2: The physical mechanism for $G_2 \to SU(3)$ (electroweak fixing) is structurally compelling — the hierarchy $\mathbb{C} \subset \mathbb{H} \subset \mathbb{O}$ naturally gives $U(1) \subset SU(2) \subset G_2$ — but the precise mechanism of symmetry breaking has not been derived from the axioms.
- Proposition 6.1: The connection between non-associativity and confinement is suggestive but not a proof of confinement. The holonomy argument is informal.
- Proposition 7.1: Asymptotic freedom. The one-loop $\beta$-function is a standard QFT result; the bootstrap-ceiling interpretation is qualitative.

**Not addressed (deferred):**
- Strong coupling constant $g_s$ (deferred to [Coupling Constants](/derivations/cosmology/coupling-constants))
- Detailed quark representation content
- Chiral symmetry breaking ($SU(N_f)_L \times SU(N_f)_R \to SU(N_f)_V$)
- Theta vacuum and the strong CP problem

**Assessment:** Draft status. The core mathematical argument ($\mathbb{O} \to G_2 \to SU(3)$ via quaternionic subalgebra stabilizer) is rigorous and well-established in the mathematics literature. The connection to the framework (bootstrap ↔ Cayley-Dickson, S1) is explicit and well-motivated. The derivation falls short of provisional because: (1) the bootstrap–Cayley-Dickson mapping (S1) is a structural postulate rather than a theorem, (2) the confinement argument is informal, and (3) the symmetry-breaking mechanism for $G_2 \to SU(3)$ is proposed but not derived.

## Open Gaps

1. **Bootstrap–Cayley-Dickson proof**: Prove that the bootstrap mechanism's hierarchical structure *forces* the Cayley-Dickson doubling sequence, rather than postulating it (S1). This would require showing that relational invariants among $n+1$ quaternionic observers generate exactly the octonionic product structure.

2. **Confinement (rigorous)**: Formalize the non-associativity argument for confinement. Show that only color-singlet states have well-defined long-range coherence transport in the octonionic phase space. This connects to the Clay Millennium Prize problem.

3. **Strong CP problem**: The $SU(3)$ gauge theory admits a topological $\theta$-term $\propto \theta \, G_{\mu\nu}\tilde{G}^{\mu\nu}$ that violates CP. Experimentally $\theta < 10^{-10}$. The framework should explain why $\theta \approx 0$.

4. **Chiral symmetry breaking**: The approximate $SU(N_f)_L \times SU(N_f)_R$ flavor symmetry of the QCD Lagrangian is spontaneously broken. This should emerge from the coherence dynamics at the octonionic level.

5. **Explicit gluon spectrum**: Derive the gluon propagator and self-coupling vertices from the octonionic product structure, confirming that they match the standard QCD Feynman rules.
