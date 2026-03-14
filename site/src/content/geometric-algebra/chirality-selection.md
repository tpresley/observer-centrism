---
title: "Chirality as Grade Structure"
status: "provisional"
gaStructure: "Cl(1,3)"
targetDerivation: "gauge/chirality-selection"
dependsOn: ["lorentz-invariance"]
tags: ["spacetime-algebra", "chirality", "geometric-algebra"]
summary: "The pseudoscalar I = e0123 defines chirality projection, making the weak interaction's left-handedness a statement about grade eigenspaces"
priority: "high"
lastUpdated: 2026-03-13
---

## Connection to Framework Derivation

**Target**: [Chirality Selection](/derivations/gauge/chirality-selection) (status: rigorous)

The target derivation proves that the weak interaction couples to exactly one chirality as an algebraic consequence of three facts: quaternion multiplication requires a cyclic orientation ($IJ = K$ vs. $IJ = -K$), relational invariants between observers require shared orientation, and coherence conservation propagates this choice globally. The result is maximal parity violation — zero coupling to the non-selected chirality — while $U(1)$ (commutative) and $SU(3)$ (orientation-inheriting) remain vector-like.

In $\operatorname{Cl}(1,3)$, the entire chirality story is encoded in the pseudoscalar $I = e_{0123}$. Chirality is the $I$-eigenvalue of a spinor. The two chiralities are the two eigenspaces of $I$ in the even subalgebra. The weak interaction selects one eigenspace. Parity violation is the fact that $P$ maps $I \to -I$, swapping eigenspaces. The connection between the target derivation's quaternionic orientation and the STA pseudoscalar is that both are manifestations of the same algebraic structure: the non-commutativity of the even subalgebra's internal decomposition.

## Step 1: The Chirality Operator

**Definition 1.1 (Chirality operator in STA).** The *chirality operator* in the Spacetime Algebra is the pseudoscalar:

$$\gamma_5 \equiv I = e_{0123}$$

satisfying $I^2 = -1$. In the standard Dirac matrix formalism, $\gamma_5 = i\gamma^0\gamma^1\gamma^2\gamma^3$; in STA, the factor of $i$ is unnecessary because $I$ itself squares to $-1$.

**Definition 1.2 (Chirality projectors).** The left and right chirality projectors are:

$$P_L = \frac{1}{2}(1 - I), \qquad P_R = \frac{1}{2}(1 + I)$$

These satisfy the projector algebra:

$$P_L^2 = P_L, \quad P_R^2 = P_R, \quad P_L P_R = 0, \quad P_L + P_R = 1$$

*Proof.* Since $I^2 = -1$ in $\operatorname{Cl}(1,3)$, the naive projectors $\frac{1}{2}(1 \pm I)$ do not satisfy idempotence: $(1-I)^2 = 1 - 2I + I^2 = -2I \neq 2(1-I)$. The resolution is that the physical chirality projectors require complexification. Defining $\gamma_5 = iI$ (where $i$ is the scalar imaginary), we have $(iI)^2 = -I^2 = +1$, and the correct projectors are:

$$P_L = \frac{1}{2}(1 - iI), \qquad P_R = \frac{1}{2}(1 + iI)$$

These satisfy idempotence: $P_L^2 = \frac{1}{4}(1 - 2iI + (iI)^2) = \frac{1}{4}(1 - 2iI + 1) = \frac{1}{2}(1 - iI) = P_L$. Similarly $P_R^2 = P_R$, and $P_LP_R = \frac{1}{4}(1 - iI)(1 + iI) = \frac{1}{4}(1 - (iI)^2) = 0$.

In the real STA formalism (Doran, Lasenby, Hestenes), the Dirac equation avoids complexification entirely: chirality acts through the spin-plane bivector $e_{12}$ rather than $\gamma_5$, with the real projector $\frac{1}{2}(1 \mp e_{12}e_3) = \frac{1}{2}(1 \mp Ie_0)$. We adopt the complexified convention to maintain direct contact with the target derivation's notation and standard QFT. The physical content is identical. $\square$

## Step 2: Bivector Decomposition and Chirality

The connection between chirality and the pseudoscalar becomes algebraically transparent through the bivector decomposition.

**Proposition 2.1 (Self-dual and anti-self-dual bivectors).** The pseudoscalar $I$ acts on bivectors by the Hodge dual: $B \mapsto IB$. Since $I^2 = -1$ on bivectors, the eigenvalues of $I$-action are $\pm i$ (in the complexified algebra). The six-dimensional bivector space splits into two three-dimensional eigenspaces:

$$\Lambda^2 \otimes \mathbb{C} = \Lambda^2_+ \oplus \Lambda^2_-$$

where $\Lambda^2_+$ (self-dual) has $IB = -iB$ and $\Lambda^2_-$ (anti-self-dual) has $IB = +iB$.

Explicitly, defining complex combinations:

$$\Sigma_k^{\pm} = \frac{1}{2}(e_{0k} \mp i\,\epsilon_{kjl}\,e_{jl})$$

the self-dual bivectors $\{\Sigma_1^+, \Sigma_2^+, \Sigma_3^+\}$ span $\Lambda^2_+$ and the anti-self-dual bivectors $\{\Sigma_1^-, \Sigma_2^-, \Sigma_3^-\}$ span $\Lambda^2_-$.

**Proposition 2.2 (Lorentz algebra decomposition).** The two eigenspaces form independent Lie subalgebras under the commutator bracket:

$$[\Sigma_j^+, \Sigma_k^+] = \epsilon_{jkl}\,\Sigma_l^+, \qquad [\Sigma_j^-, \Sigma_k^-] = \epsilon_{jkl}\,\Sigma_l^-, \qquad [\Sigma_j^+, \Sigma_k^-] = 0$$

This is the Lorentz algebra decomposition:

$$\mathfrak{so}(1,3) \otimes \mathbb{C} \;\cong\; \mathfrak{su}(2)_L \oplus \mathfrak{su}(2)_R$$

The self-dual bivectors generate $\mathfrak{su}(2)_L$ and the anti-self-dual bivectors generate $\mathfrak{su}(2)_R$.

*Proof.* From [Lorentz Group via STA Rotors](/geometric-algebra/lorentz-invariance) (Proposition 2.2), the six bivectors $\{J_k, K_k\}$ satisfy $[J_j, J_k] = 2\epsilon_{jkl}J_l$, $[J_j, K_k] = 2\epsilon_{jkl}K_l$, $[K_j, K_k] = -2\epsilon_{jkl}J_l$.

Define complexified generators $N_k^{\pm} = \frac{1}{2}(J_k \pm iK_k)$. Expanding the commutator:

$$[N_j^+, N_k^+] = \frac{1}{4}\bigl([J_j,J_k] + i[J_j,K_k] + i[K_j,J_k] - [K_j,K_k]\bigr)$$

Substituting: $[K_j, J_k] = -[J_k, K_j] = -2\epsilon_{kjl}K_l = 2\epsilon_{jkl}K_l$ (using antisymmetry of $\epsilon$). Therefore:

$$= \frac{1}{4}\bigl(2\epsilon_{jkl}J_l + 2i\epsilon_{jkl}K_l + 2i\epsilon_{jkl}K_l + 2\epsilon_{jkl}J_l\bigr) = \frac{1}{4}\bigl(4\epsilon_{jkl}J_l + 4i\epsilon_{jkl}K_l\bigr) = \epsilon_{jkl}(J_l + iK_l) = 2\epsilon_{jkl}N_l^+$$

This gives $\mathfrak{su}(2)$ commutation relations (the factor of 2 matches the $[J,J]$ normalization). Similarly $[N_j^-, N_k^-] = 2\epsilon_{jkl}N_l^-$. For the cross-bracket: $[N_j^+, N_k^-] = \frac{1}{4}([J_j,J_k] - i[J_j,K_k] + i[K_j,J_k] + [K_j,K_k]) = \frac{1}{4}(2\epsilon_{jkl}J_l - 2\epsilon_{jkl}J_l) = 0$, since the $K$-terms and $J$-terms each cancel. $\square$

**Remark (The key connection).** The target derivation's Proposition 4.1 states that the quaternionic orientation $\mathcal{O}^{\pm}$ corresponds to the chirality of spinors via $\mathfrak{su}(2)_L \oplus \mathfrak{su}(2)_R$. In STA, this decomposition is the *self-dual/anti-self-dual split of the bivector algebra induced by the pseudoscalar*. The quaternionic orientation $\mathcal{O}^+$ ($IJ = K$) maps to the self-dual sector $\Lambda^2_+$ (where the Hodge dual acts as $-i$), and $\mathcal{O}^-$ ($IJ = -K$) maps to $\Lambda^2_-$. The pseudoscalar $I = e_{0123}$ *is* the algebraic object that distinguishes the two orientations.

## Step 3: Weyl Spinors in the Even Subalgebra

**Definition 3.1 (Dirac spinor in STA).** In the Hestenes formalism, a Dirac spinor is an even multivector $\psi \in \operatorname{Cl}^+(1,3)$. The even subalgebra is 8-dimensional (1 scalar + 6 bivectors + 1 pseudoscalar), matching the 8 real components of a 4-component complex Dirac spinor.

**Proposition 3.2 (Chiral decomposition of the even subalgebra).** The pseudoscalar $I$ splits $\operatorname{Cl}^+(1,3)$ into two invariant subspaces under right-multiplication:

$$\operatorname{Cl}^+(1,3) = \operatorname{Cl}^+_L \oplus \operatorname{Cl}^+_R$$

where $\operatorname{Cl}^+_L = \{\psi \in \operatorname{Cl}^+(1,3) : \psi I = -i\psi\}$ and $\operatorname{Cl}^+_R = \{\psi \in \operatorname{Cl}^+(1,3) : \psi I = +i\psi\}$ (in the complexified algebra).

Each subspace is 4-dimensional (over $\mathbb{R}$), corresponding to a Weyl spinor.

*Proof.* The even subalgebra $\operatorname{Cl}^+(1,3)$ has basis $\{1, e_{01}, e_{02}, e_{03}, e_{23}, e_{31}, e_{12}, I\}$. Right-multiplication by $I$ maps:
- $1 \mapsto I$, $I \mapsto I^2 = -1$ (so $1$ and $I$ mix)
- $e_{0k} \mapsto e_{0k}I$ and $e_{jl} \mapsto e_{jl}I$ (bivectors map to bivectors)

The self-dual combinations $\sigma_k^+ = \frac{1}{2}(e_{0k} - i e_{jl})$ and the scalar-pseudoscalar combination $\frac{1}{2}(1 - iI)$ form a 4-dimensional (real) invariant subspace: the left-handed Weyl spinor space. Similarly for the anti-self-dual combinations. $\square$

**Remark.** In STA, a Weyl spinor is not a separate mathematical object — it is a Dirac spinor restricted to one eigenspace of $I$. The left-handed Weyl spinor $\psi_L = \psi P_L$ lives in $\operatorname{Cl}^+_L$, the right-handed $\psi_R = \psi P_R$ lives in $\operatorname{Cl}^+_R$. The full Dirac spinor is the sum $\psi = \psi_L + \psi_R$, and the two halves transform independently under Lorentz transformations (since the self-dual and anti-self-dual bivectors act independently).

## Step 4: Parity and Chirality — Why P Swaps Eigenspaces

**Theorem 4.1 (Parity exchanges chirality).** The parity operation $P$ acts on the pseudoscalar as $P(I) = -I$ (from [CPT as a Single Cl(1,3) Object](/geometric-algebra/cpt-theorem), Proposition 6.2). Consequently:

$$P(P_L) = P_R, \qquad P(P_R) = P_L$$

Parity swaps the two chirality eigenspaces. A left-handed spinor becomes right-handed under parity.

*Proof.* From the CPT analysis: $P(I) = e_0 I e_0 = -I$ (three anticommutations). Then $P(\frac{1}{2}(1 - iI)) = \frac{1}{2}(1 - i(-I)) = \frac{1}{2}(1 + iI) = P_R$. $\square$

**Corollary 4.2 (Parity violation from eigenspace selection).** If a gauge interaction couples only to the left eigenspace of $I$ (only to spinors $\psi_L$ satisfying $\psi_L I = -i\psi_L$), then parity maps the interacting sector to the non-interacting sector. The interaction is maximally parity-violating.

This is the STA restatement of the target derivation's Corollary 4.2. The GA formulation makes the mechanism transparent: parity flips the sign of $I$, which swaps the eigenspaces. An interaction coupled to one eigenspace has *zero* coupling to the other — not suppressed, but exactly zero.

**Proposition 4.3 (Time reversal also exchanges chirality).** From the CPT analysis: $T(I) = -I$ as well. Therefore $T$ also swaps $P_L \leftrightarrow P_R$. But $PT(I) = I$, so the combined $PT$ *preserves* chirality. And $CPT(I) = I$ (since $C$ preserves $I$ — it acts on internal structure, not spacetime). This reproduces the target derivation's Proposition 6.1: $C$ preserves orientation (eigenvalue $+1$), $P$ reverses ($-1$), $T$ reverses ($-1$), CPT preserves ($+1$).

## Step 5: Quaternionic Orientation as Pseudoscalar Sign

This step connects the target derivation's algebraic argument (quaternionic orientation) to the GA formulation (pseudoscalar eigenspaces).

**Theorem 5.1 (Orientation ↔ pseudoscalar eigenspace).** The target derivation's quaternionic orientation $\mathcal{O}^+$ ($IJ = K$) corresponds to the self-dual eigenspace $\Lambda^2_+$ of $I$, and $\mathcal{O}^-$ ($IJ = -K$) corresponds to the anti-self-dual eigenspace $\Lambda^2_-$. The correspondence is:

$$\text{Quaternionic orientation } \mathcal{O}^{\pm} \;\longleftrightarrow\; \text{Pseudoscalar eigenspace } \Lambda^2_{\pm} \;\longleftrightarrow\; \text{Chirality } L/R$$

*Proof.* The target derivation's Proposition 4.1 identifies the quaternionic orientation with the Lorentz decomposition: $\mathcal{O}^+$ generates $\mathfrak{su}(2)_L$ and $\mathcal{O}^-$ generates $\mathfrak{su}(2)_R$. From Proposition 2.2 above, $\mathfrak{su}(2)_L$ is spanned by self-dual bivectors $N_k^+$ and $\mathfrak{su}(2)_R$ by anti-self-dual $N_k^-$. The self-dual condition $IB = -iB$ is the defining property of $\Lambda^2_+$. The chirality projector $P_L = \frac{1}{2}(1 - iI)$ projects onto the sector that transforms under $\mathfrak{su}(2)_L$ (self-dual bivectors act non-trivially, anti-self-dual act trivially).

Therefore: choosing quaternionic orientation $\mathcal{O}^+$ = selecting the self-dual eigenspace = selecting left-chirality spinors. The three descriptions are algebraically equivalent. $\square$

**Remark.** This is the central bridge between the target derivation and the GA formulation. The target derivation's argument is: *non-commutativity forces an orientation, which propagates globally, selecting one $\mathfrak{su}(2)$ factor*. The GA reformulation is: *the pseudoscalar $I$ splits the bivector algebra into two eigenspaces, and the global orientation lock selects one*. Both describe the same physics, but the GA version makes the role of the pseudoscalar explicit.

## Step 6: The Weak Interaction Selects One Eigenspace

**Proposition 6.1 (Gauge coupling to one eigenspace).** The target derivation's Theorem 2.1 shows that quaternionic relational invariants require shared orientation. In STA, this translates to: the $SU(2)$ gauge field $W_\mu^a$ couples to spinors through the self-dual bivectors $N_k^+$:

$$D_\mu \psi = \partial_\mu \psi + \frac{g}{2} W_\mu^a N_a^+ \psi$$

The anti-self-dual bivectors $N_k^-$ do not appear. Since $N_k^+$ acts non-trivially only on $\psi_L$ (the $P_L$-projected component) and trivially on $\psi_R$, the covariant derivative modifies only the left-handed sector:

$$D_\mu \psi_L = \partial_\mu \psi_L + \frac{g}{2} W_\mu^a N_a^+ \psi_L, \qquad D_\mu \psi_R = \partial_\mu \psi_R$$

**Proposition 6.2 (Maximal violation is exact zero).** The coupling of $W_\mu^a$ to $\psi_R$ vanishes exactly — not as an approximation, but as an algebraic identity:

$$N_a^+ \psi_R = N_a^+ (\psi P_R) = (N_a^+ \psi) P_R = 0$$

The last step follows because $N_a^+$ (a self-dual bivector) maps the right-chiral subspace to zero when composed with the right-chiral projector. This is the STA version of the target derivation's Corollary 4.2: the coupling is exactly zero because the two eigenspaces are *algebraically orthogonal* — they are the two summands of a direct sum decomposition.

**Remark.** In the standard formalism, maximal parity violation is stated as: the weak interaction Lagrangian contains $\bar{\psi}_L \gamma^\mu W_\mu \psi_L$ but not $\bar{\psi}_R \gamma^\mu W_\mu \psi_R$. This is typically presented as an empirical fact to be accepted. In STA, the absence of the right-handed coupling is a *structural consequence* of the gauge field living in the self-dual bivector subspace. It is not that the $\psi_R$ coupling is small or suppressed — the self-dual and anti-self-dual sectors are orthogonal subspaces that do not communicate.

## Step 7: Mass, Chirality Mixing, and the Higgs

**Proposition 7.1 (Mass terms mix chiralities).** A Dirac mass term in STA takes the form:

$$m\bar{\psi}\psi = m(\bar{\psi}_L\psi_R + \bar{\psi}_R\psi_L)$$

This couples the two $I$-eigenspaces. In STA, the mass term is a *cross-term between the self-dual and anti-self-dual sectors* of the even subalgebra.

*Proof.* The Dirac bilinear $\bar{\psi}\psi$ is a scalar (grade 0). Decomposing $\psi = \psi_L + \psi_R$:

$$\bar{\psi}\psi = \bar{\psi}_L\psi_L + \bar{\psi}_L\psi_R + \bar{\psi}_R\psi_L + \bar{\psi}_R\psi_R$$

The terms $\bar{\psi}_L\psi_L$ and $\bar{\psi}_R\psi_R$ vanish for Weyl spinors (they project to the pseudoscalar component, which is absent in a pure mass term). The surviving cross-terms $\bar{\psi}_L\psi_R + \bar{\psi}_R\psi_L$ couple the two eigenspaces. $\square$

**Proposition 7.2 (Why mass requires electroweak breaking — GA perspective).** The weak $SU(2)$ gauge symmetry acts only on $\psi_L$ (Proposition 6.1). A bare mass term $m\bar{\psi}_L\psi_R$ is *not gauge invariant* — it transforms non-trivially under the $SU(2)$ that acts on $\psi_L$ but not on $\psi_R$.

Therefore: massive fermions are forbidden by the $SU(2)_L$ gauge symmetry. Mass generation requires *simultaneously* breaking $SU(2)_L$ (to allow the cross-chirality coupling) and providing the coupling itself (the Yukawa interaction with the Higgs field).

In STA, this is transparent: the Higgs field $\phi$ transforms under $SU(2)_L$ (self-dual bivector transformations), and its vacuum expectation value $\langle\phi\rangle \neq 0$ breaks the self-dual/anti-self-dual separation. The Yukawa coupling $y\bar{\psi}_L\phi\psi_R$ is gauge-invariant because $\phi$ carries the compensating $SU(2)$ transformation.

**Remark.** This resolves the stub's Open Question 2: the GA formulation does illuminate why mass generation must simultaneously break electroweak symmetry and mix chiralities. Both are the *same* operation — breaking the orthogonality of the two $I$-eigenspaces. The Higgs mechanism is the minimal mechanism for doing this while preserving $U(1)_{\text{EM}}$.

## Step 8: Why U(1) and SU(3) Are Vector-Like

**Proposition 8.1 ($U(1)$ is vector-like because the pseudoscalar commutes with $U(1)$ generators).** The $U(1)$ gauge field $A_\mu$ couples to the electromagnetic current $J^\mu = \bar{\psi}\gamma^\mu\psi$, which includes both chiralities. In STA: the $U(1)$ generator is a scalar (grade 0) phase rotation $\psi \mapsto e^{i\alpha}\psi$. Since $I$ commutes with scalars ($I \cdot 1 = 1 \cdot I$), the $U(1)$ transformation does not distinguish between the two $I$-eigenspaces. Both $\psi_L$ and $\psi_R$ transform identically under $U(1)$.

This is the STA restatement of the target derivation's Remark on $U(1)$: commutativity of $\mathbb{C}$ means the orientation distinction is irrelevant. In GA language: the $U(1)$ generator is grade-0 (commutes with $I$), while the $SU(2)$ generators are grade-2 (split into $I$-eigenspaces). The chirality distinction arises *only* for generators that are affected by the self-dual/anti-self-dual split — which means only bivector generators.

**Proposition 8.2 ($SU(3)$ is vector-like because it preserves the orientation).** The target derivation's Proposition 5.1 shows that $SU(3) = \text{Stab}_{G_2}(\mathbb{H})$ — it preserves the quaternionic subalgebra and hence its orientation. In STA terms: the $SU(3)$ generators act on the $\mathbb{O}/\mathbb{H}$ complement (the color directions), which is *orthogonal* to the $\mathbb{H}$ directions that define the self-dual/anti-self-dual split. An $SU(3)$ transformation commutes with the chirality projectors:

$$[SU(3)\text{ generator}, P_L] = 0, \qquad [SU(3)\text{ generator}, P_R] = 0$$

Both chiralities carry the same color charge and transform in the same $\mathbf{3}$ representation.

**Summary table:**

| Gauge group | Generator type in STA | Relation to $I$-eigenspaces | Chirality coupling |
|---|---|---|---|
| $U(1)$ | Grade-0 scalar phase | Commutes with $I$ → same action on both | **Vector-like** |
| $SU(2)_L$ | Self-dual bivectors $N_k^+$ | Lives in one $I$-eigenspace | **Chiral (left only)** |
| $SU(3)$ | Orthogonal to $\mathbb{H}$ directions | Commutes with chirality projectors | **Vector-like** |

## Assessment: What GA Adds

**Genuine simplifications:**

1. **Chirality from one algebraic object.** The target derivation builds chirality through a chain: non-commutative quaternions → orientation → relational invariant consistency → global lock → Lorentz decomposition → chirality. In STA, chirality is defined by a single object: the pseudoscalar $I = e_{0123}$. Left-handed = one $I$-eigenspace, right-handed = the other. The pseudoscalar *is* the orientation.

2. **Parity violation in one line.** Why does parity violate chirality? Because $P(I) = -I$ (three anticommutations in $e_0 I e_0$). This swaps $I$-eigenspaces, hence swaps chirality. No further argument needed — it is a single algebraic computation.

3. **Mass-chirality connection.** The mass term couples the two $I$-eigenspaces. Electroweak symmetry breaking must occur because the $SU(2)$ gauge invariance forbids this cross-coupling. The GA formulation compresses the Higgs mechanism's raison d'être to: *the Higgs breaks the orthogonality of $I$-eigenspaces*.

**Genuine insights:**

4. **The chirality pattern reflects grade structure.** $U(1)$ is vector-like because its generator is grade-0 (commutes with $I$). $SU(2)$ is chiral because its generators are grade-2 bivectors (split by $I$ into eigenspaces). $SU(3)$ is vector-like because its generators are orthogonal to the splitting direction. The chirality pattern across the gauge hierarchy is a *grade structure* pattern — a classification by how generators relate to the pseudoscalar.

5. **Pseudoscalar unifies chirality and CPT.** As developed in [CPT as a Single Cl(1,3) Object](/geometric-algebra/cpt-theorem), the same $I$ that defines chirality also implements $PT$. The fact that CPT is exact while chirality selection is spontaneous has a clean GA explanation: CPT invariance follows from $I$ commuting with even-grade observables (always true), while chirality selection follows from the *global choice* of which $I$-eigenspace the gauge coupling inhabits (spontaneously chosen). These are logically independent properties of the same algebraic object.

6. **Why $d = 3+1$ is special for chirality.** In $\operatorname{Cl}(1,3)$, the pseudoscalar has grade 4 (even), so $I$ commutes with the even subalgebra and defines a non-trivial chiral decomposition. In $\operatorname{Cl}(1,2)$ (2+1 dimensions), the pseudoscalar has grade 3 (odd), commutes with *all* elements (it is central), and the self-dual/anti-self-dual decomposition collapses — there is no chirality distinction. In $\operatorname{Cl}(1,1)$ (1+1 dimensions), the pseudoscalar has grade 2 (even), but the Lorentz group is abelian ($SO(1,1) \cong \mathbb{R}$) — there is no non-abelian gauge structure to select a chirality. The 3+1-dimensional case is the *minimal* dimension with both a non-trivial chiral decomposition and a non-abelian Lorentz group.

**Not a genuine simplification:**

- The quaternionic orientation argument (Steps 1–3 of the target derivation) is fundamentally about non-commutativity, which is not specific to STA. The GA reformulation translates this into pseudoscalar language but does not shorten the argument — the non-commutativity must still be demonstrated.
- The global orientation lock (target Step 3) uses coherence conservation and the interaction graph, which are framework-specific concepts with no GA equivalent. The GA version adds no insight to this step.

## Open Questions

1. **Anomaly cancellation in GA**: The chiral fermion content must satisfy anomaly cancellation conditions for consistency. In STA, anomalies involve traces of products of self-dual bivector generators. Can the GA trace structure simplify the anomaly computation, or reveal why the Standard Model fermion content is the unique anomaly-free assignment?

2. **Chirality at finite temperature**: At temperatures above the electroweak scale, the Higgs expectation value vanishes and fermions are massless. The chirality projectors $P_{L,R}$ are then exact symmetries of the free Lagrangian. Does the GA formulation provide insight into the chiral phase transition — the restoration of the $I$-eigenspace orthogonality at high temperature?

3. **Chirality and the Yvon-Takabayasi angle**: In the Hestenes formalism, a Dirac spinor has the canonical form $\psi = \rho^{1/2}e^{I\beta/2}R$ where $\beta$ is the Yvon-Takabayasi angle. Pure left-handed or right-handed spinors correspond to $\beta = \pm\pi/2$. Does the Y-T angle provide a geometric interpretation of chirality as a *rotation* in the scalar-pseudoscalar plane of the even subalgebra?

## Status

This is a **provisional** analysis — a substantive development of chirality selection in Spacetime Algebra with the full bivector decomposition, chirality projectors, parity exchange mechanism, mass-chirality connection, and the correspondence between quaternionic orientation and pseudoscalar eigenspaces. The bivector decomposition (Propositions 2.1–2.2) is rigorous (standard Lie algebra). The parity-chirality argument (Theorem 4.1) is algebraically complete. The bridge to the target derivation (Theorem 5.1) is structural. Upgrading to rigorous would require: (a) a fully representation-independent treatment of the chiral projectors in the real STA (avoiding the complexification), and (b) an explicit computation verifying that the $SU(2)$ gauge field equations in STA reduce to the standard chiral coupling when restricted to the self-dual eigenspace.
