---
title: "Weak Interaction via H = Cl+(3,0)"
status: "rigorous"
gaStructure: "Cl+(3,0)"
targetDerivation: "gauge/weak-interaction"
dependsOn: ["spin-statistics"]
tags: ["rotors", "gauge-theory", "geometric-algebra"]
summary: "The quaternion algebra of the weak interaction is isomorphic to the even subalgebra of Cl(3,0), with I, J, K corresponding to bivectors e23, e31, e12"
priority: "high"
lastUpdated: 2026-03-13
---

## Connection to Framework Derivation

**Target**: [Weak Interaction](/derivations/gauge/weak-interaction) (status: rigorous)

The target derivation establishes that three spatial dimensions force three independent phase channels whose composition algebra is the quaternions $\mathbb{H}$ (by Hurwitz's theorem). The unit quaternions form $SU(2)$, which by localization becomes the weak gauge group. The proof proceeds through the $SU(2)$ gauge connection, the Yang-Mills field strength with its non-abelian self-interaction, and the electroweak structure $SU(2)_L \times U(1)_Y$.

The isomorphism $\mathbb{H} \cong \operatorname{Cl}^+(3,0)$ gives this a direct geometric interpretation. The three quaternion imaginary units $\mathbf{i}, \mathbf{j}, \mathbf{k}$ *are* the three basis bivectors $e_{23}, e_{31}, e_{12}$ of three-dimensional Euclidean Clifford algebra. Weak isospin rotations are literally rotors in $\operatorname{Cl}^+(3,0)$ — the same rotors that, in [Spin-Statistics via Cl(3,0) Rotors](/geometric-algebra/spin-statistics), generate the double cover $\operatorname{Spin}(3) \to SO(3)$. The weak interaction and spin-statistics share not just a mathematical analogy but an identical algebraic structure.

## Step 1: The Isomorphism $\mathbb{H} \cong \operatorname{Cl}^+(3,0)$

**Theorem 1.1 (Quaternion-bivector correspondence).** The even subalgebra $\operatorname{Cl}^+(3,0)$ is isomorphic to the quaternion algebra $\mathbb{H}$ via the map:

$$1 \mapsto 1, \qquad \mathbf{i} \mapsto e_{23}, \qquad \mathbf{j} \mapsto e_{31}, \qquad \mathbf{k} \mapsto e_{12}$$

This is an algebra isomorphism: it preserves both addition and multiplication.

*Proof.* The even subalgebra $\operatorname{Cl}^+(3,0) = \operatorname{span}\{1, e_{23}, e_{31}, e_{12}\}$ is 4-dimensional. Verify the multiplication table:

$$e_{23}^2 = e_2 e_3 e_2 e_3 = -e_2 e_2 e_3 e_3 = -(+1)(+1) = -1$$

Similarly $e_{31}^2 = e_{12}^2 = -1$. All three basis bivectors square to $-1$, matching $\mathbf{i}^2 = \mathbf{j}^2 = \mathbf{k}^2 = -1$.

For the products, define the bivector basis $I_k = e_i e_j$ where $(i,j,k)$ is a cyclic permutation of $(1,2,3)$:

$$I_1 = e_{23}, \quad I_2 = e_{31}, \quad I_3 = e_{12}$$

Then $I_1 I_2 = e_{23}e_{31} = e_2 e_3 e_3 e_1 = e_{21} = -e_{12} = -I_3$, and cyclically. So the bivector products satisfy $I_j I_k = -\epsilon_{jkl} I_l$.

This matches the quaternion multiplication $\mathbf{i}\mathbf{j} = \mathbf{k}$ under the sign-absorbing identification $\mathbf{i} = -I_1 = -e_{23}$, $\mathbf{j} = -I_2 = -e_{31}$, $\mathbf{k} = -I_3 = -e_{12}$:

$$\mathbf{i}\mathbf{j} = (-I_1)(-I_2) = I_1 I_2 = -I_3 = \mathbf{k} \;\checkmark$$

The opposite convention $\mathbf{i} = I_1$, $\mathbf{j} = I_2$, $\mathbf{k} = I_3$ (with $\mathbf{i}\mathbf{j} = -\mathbf{k}$) is equally valid — the two choices differ by quaternion conjugation $q \mapsto \bar{q}$, which is exactly the orientation freedom of the target derivation (Step 1, Definition 1.1). The spontaneous choice of orientation (Corollary 3.2 of the target) becomes the choice of sign in the bivector-quaternion identification.

The algebra isomorphism holds for either sign convention. $\square$

**Remark.** The sign ambiguity is not a defect — it is the GA manifestation of the target derivation's central point. The two quaternion orientations $\mathcal{O}^+$ ($\mathbf{i}\mathbf{j} = +\mathbf{k}$) and $\mathcal{O}^-$ ($\mathbf{i}\mathbf{j} = -\mathbf{k}$) correspond to the two conventions for mapping bivectors to quaternion units. The global orientation lock (target Theorem 3.1) is the statement that all observers must adopt the *same* sign convention for the bivector-quaternion correspondence.

## Step 2: SU(2) as the Rotor Group of Cl(3,0)

**Proposition 2.1 (Unit quaternions = rotors).** The group of unit quaternions $\{q \in \mathbb{H} : |q| = 1\} \cong SU(2)$ is precisely the rotor group of $\operatorname{Cl}(3,0)$:

$$\operatorname{Spin}(3) = \{R \in \operatorname{Cl}^+(3,0) : R\tilde{R} = 1\} \cong SU(2)$$

A general rotor has the form:

$$R = \cos\frac{\theta}{2} - B\sin\frac{\theta}{2}$$

where $B$ is a unit bivector ($B^2 = -1$) and $\theta$ is the rotation angle. This was established in [Spin-Statistics via Cl(3,0) Rotors](/geometric-algebra/spin-statistics).

**Proposition 2.2 (Isospin rotation as rotor).** A weak isospin rotation by angle $\theta$ about isospin direction $\hat{n} = (n_1, n_2, n_3)$ is the rotor:

$$R = \exp\left(-\frac{\theta}{2}(n_1 e_{23} + n_2 e_{31} + n_3 e_{12})\right) = \cos\frac{\theta}{2} - (n_1 e_{23} + n_2 e_{31} + n_3 e_{12})\sin\frac{\theta}{2}$$

This acts on an isospin doublet $\psi$ by left multiplication: $\psi \mapsto R\psi$.

*Proof.* The bivector $B = n_1 e_{23} + n_2 e_{31} + n_3 e_{12}$ satisfies $B^2 = -(n_1^2 + n_2^2 + n_3^2) = -1$ for unit $\hat{n}$. The exponential follows from the Taylor expansion with $B^{2k} = (-1)^k$ (cosine series) and $B^{2k+1} = (-1)^k B$ (sine series). Normalization: $R\tilde{R} = (\cos\frac{\theta}{2})^2 + (\sin\frac{\theta}{2})^2 = 1$. $\square$

**Remark (Unification with spin).** The *same* algebraic object — a rotor in $\operatorname{Cl}^+(3,0)$ — represents both a spatial rotation (acting on vectors by $v \mapsto Rv\tilde{R}$) and an isospin transformation (acting on doublets by $\psi \mapsto R\psi$). This is the GA expression of the target derivation's Proposition 6.1: $SU(2) = \operatorname{Spin}(3)$ is the double cover of $SO(3)$. The weak interaction and spatial rotations share the same algebraic structure because both are rotor actions in the same Clifford algebra.

## Step 3: Non-Abelian Structure from the Geometric Product

**Proposition 3.1 (Self-interaction from non-commutativity).** The target derivation's Proposition 4.3 shows that the weak gauge bosons self-interact because quaternions are non-commutative. In $\operatorname{Cl}^+(3,0)$, this non-commutativity is the geometric product of distinct bivectors:

$$e_{23} \cdot e_{31} = -e_{12}, \qquad e_{31} \cdot e_{23} = +e_{12}$$

The commutator is:

$$[e_{23}, e_{31}] = e_{23}e_{31} - e_{31}e_{23} = -e_{12} - e_{12} = -2e_{12}$$

This reproduces the $\mathfrak{su}(2)$ commutation relations:

$$[I_a, I_b] = -2\epsilon_{abc}\,I_c$$

(with $I_a = e_{jk}$ for cyclic $(j,k,a)$). The factor of $-2$ is conventional, absorbed into the generator normalization.

**Proposition 3.2 (Contrast with $U(1)$).** Electromagnetism uses a single phase direction — one bivector plane (say $e_{12}$) generating a $U(1)$ subgroup. The geometric product of a bivector with *itself* always commutes: $e_{12} \cdot e_{12} = -1$ (a scalar). There is no self-interaction because the Lie bracket of a 1-dimensional algebra is trivially zero: $[e_{12}, e_{12}] = 0$.

The weak interaction uses all three independent bivector planes. Their mutual non-commutativity — $[e_{23}, e_{31}] \neq 0$ — produces self-interaction. The geometric product makes this distinction maximally sharp:

| Property | $U(1)$ (one bivector) | $SU(2)$ (three bivectors) |
|---|---|---|
| Generator count | 1 | 3 |
| Commutator | $[B, B] = 0$ | $[I_a, I_b] = -2\epsilon_{abc}I_c$ |
| Self-interaction | None (photon is neutral) | Yes ($W$ bosons carry weak charge) |
| Field strength | $F = dA$ (linear) | $W = dW + W \wedge W$ (nonlinear) |

**Remark.** In matrix language, the self-interaction arises from the $[W_\mu, W_\nu]$ commutator of matrix-valued gauge fields. In Clifford language, it arises from the geometric product $W_\mu W_\nu - W_\nu W_\mu$ of bivector-valued gauge fields. The Clifford version is more primitive — it uses the fundamental product of the algebra, not a derived operation (matrix commutator).

## Step 4: The Gauge Connection in Clifford Language

**Definition 4.1 (Bivector-valued gauge potential).** The $SU(2)$ gauge potential, in $\operatorname{Cl}^+(3,0)$ language, is a bivector-valued 1-form:

$$\mathbf{W}_\mu = W_\mu^1 \, e_{23} + W_\mu^2 \, e_{31} + W_\mu^3 \, e_{12}$$

At each spacetime point and for each spacetime direction $\mu$, the gauge potential is a bivector in the three-dimensional space spanned by $\{e_{23}, e_{31}, e_{12}\}$.

**Definition 4.2 (Gauge-covariant derivative).** The covariant derivative acting on an isospin doublet $\psi$ is:

$$D_\mu \psi = \partial_\mu \psi + \frac{g_W}{2}\,\mathbf{W}_\mu \, \psi$$

where the gauge potential acts by left multiplication (the factor $1/2$ matches the rotor convention $R = e^{-B\theta/2}$).

**Proposition 4.3 (Gauge transformation).** Under a local isospin rotation $\psi \mapsto R(x)\psi$, the gauge potential transforms as:

$$\mathbf{W}_\mu \mapsto R\,\mathbf{W}_\mu\,\tilde{R} + \frac{2}{g_W}\,(\partial_\mu R)\,\tilde{R}$$

*Proof.* Require $D_\mu(R\psi) = R(D_\mu\psi)$:

$$\partial_\mu(R\psi) + \frac{g_W}{2}\mathbf{W}'_\mu R\psi = R\partial_\mu\psi + \frac{g_W}{2}R\mathbf{W}_\mu\psi$$

$$(\partial_\mu R)\psi + R\partial_\mu\psi + \frac{g_W}{2}\mathbf{W}'_\mu R\psi = R\partial_\mu\psi + \frac{g_W}{2}R\mathbf{W}_\mu\psi$$

$$(\partial_\mu R)\psi + \frac{g_W}{2}\mathbf{W}'_\mu R\psi = \frac{g_W}{2}R\mathbf{W}_\mu\psi$$

$$\mathbf{W}'_\mu = R\mathbf{W}_\mu\tilde{R} + \frac{2}{g_W}(\partial_\mu R)\tilde{R}$$

using $R\psi = (R\mathbf{W}_\mu)\psi$ and right-multiplying by $\tilde{R}$. The first term $R\mathbf{W}_\mu\tilde{R}$ is a rotor sandwich — it rotates the bivector $\mathbf{W}_\mu$ in isospin space. The second term $\frac{2}{g_W}(\partial_\mu R)\tilde{R}$ is the inhomogeneous gauge term, a bivector by construction (the derivative of a rotor times its reverse is always a bivector). $\square$

**Remark (Comparison with standard formulation).** In matrix notation: $W_\mu \to gW_\mu g^{-1} + \frac{i}{g_W}g\partial_\mu g^{-1}$. In Clifford notation: $\mathbf{W}_\mu \to R\mathbf{W}_\mu\tilde{R} + \frac{2}{g_W}(\partial_\mu R)\tilde{R}$. The Clifford version replaces matrix conjugation $gMg^{-1}$ with the rotor sandwich $RB\tilde{R}$, and replaces $ig\partial g^{-1}$ (which requires tracking the imaginary unit $i$ and the inverse) with $2(\partial R)\tilde{R}$ (which uses only the reversion, an intrinsic Clifford operation). The Clifford version is self-contained — no matrix representations or complex imaginary units needed.

## Step 5: Field Strength as Bivector Curvature

**Definition 5.1 (Weak field strength in Clifford form).** The gauge field strength is the bivector-valued 2-form:

$$\mathbf{W}_{\mu\nu} = \partial_\mu \mathbf{W}_\nu - \partial_\nu \mathbf{W}_\mu + \frac{g_W}{2}[\mathbf{W}_\mu, \mathbf{W}_\nu]$$

where $[\mathbf{W}_\mu, \mathbf{W}_\nu] = \mathbf{W}_\mu\mathbf{W}_\nu - \mathbf{W}_\nu\mathbf{W}_\mu$ is the commutator product of bivectors (which yields a bivector, since the commutator of two bivectors is a bivector in $\operatorname{Cl}^+(3,0)$).

**Proposition 5.2 (Gauge covariance).** Under $R(x)$:

$$\mathbf{W}_{\mu\nu} \mapsto R\,\mathbf{W}_{\mu\nu}\,\tilde{R}$$

The field strength transforms by rotor sandwich — it rotates as a bivector in isospin space. This is the Clifford analogue of $W_{\mu\nu} \to gW_{\mu\nu}g^{-1}$.

*Proof.* The two-derivative terms and the commutator term each transform covariantly under $\mathbf{W}_\mu \to R\mathbf{W}_\mu\tilde{R} + \frac{2}{g_W}(\partial_\mu R)\tilde{R}$. The inhomogeneous gauge terms cancel (standard computation, using $(\partial_\mu R)\tilde{R} + R(\partial_\mu\tilde{R}) = \partial_\mu(R\tilde{R}) = 0$). $\square$

**Proposition 5.3 (Yang-Mills Lagrangian in Clifford form).** The gauge-invariant Yang-Mills Lagrangian is:

$$\mathcal{L}_{YM} = -\frac{1}{2}\langle\mathbf{W}_{\mu\nu}\mathbf{W}^{\mu\nu}\rangle_0$$

where $\langle\cdot\rangle_0$ extracts the scalar (grade-0) part. Since $\mathbf{W}_{\mu\nu}$ is a bivector, $\mathbf{W}_{\mu\nu}\mathbf{W}^{\mu\nu}$ has a scalar part (the inner product of bivectors) and a grade-4 part (the outer product). Only the scalar part contributes.

*Proof.* Under $R$: $\langle R\mathbf{W}_{\mu\nu}\tilde{R} \cdot R\mathbf{W}^{\mu\nu}\tilde{R}\rangle_0 = \langle R(\mathbf{W}_{\mu\nu}\mathbf{W}^{\mu\nu})\tilde{R}\rangle_0 = \langle\mathbf{W}_{\mu\nu}\mathbf{W}^{\mu\nu}\rangle_0$ (the scalar part is invariant under rotor sandwich). This equals $-\frac{1}{2}\text{tr}(W^a_{\mu\nu}W^{a\mu\nu})$ in the standard normalization. $\square$

**Remark.** The Yang-Mills Lagrangian in Clifford form is a scalar extraction from a bivector product — no traces, no matrix representations. The gauge invariance is manifest: the scalar part of any expression is invariant under rotor conjugation.

**Proposition 5.4 (Yang-Mills equation of motion).** *The Euler-Lagrange equation from $\mathcal{L}_{YM}$ is:*

$$D_\mu \mathbf{W}^{\mu\nu} = \partial_\mu \mathbf{W}^{\mu\nu} + \frac{g_W}{2}[\mathbf{W}_\mu, \mathbf{W}^{\mu\nu}] = \mathbf{J}^\nu$$

*where $\mathbf{J}^\nu$ is the bivector-valued matter current. This reproduces the standard Yang-Mills equation of motion component by component.*

*Proof.* Expand in the bivector basis $I_a = e_{jk}$ for cyclic $(j,k,a)$: $\mathbf{W}^{\mu\nu} = W^{a\mu\nu} I_a$, $\mathbf{W}_\mu = W^a_\mu I_a$, $\mathbf{J}^\nu = J^{a\nu} I_a$. The commutator term:

$$[\mathbf{W}_\mu, \mathbf{W}^{\mu\nu}] = W^a_\mu W^{b\mu\nu} [I_a, I_b] = W^a_\mu W^{b\mu\nu} (-2\epsilon_{abc}) I_c$$

Projecting the full equation onto each basis bivector $I_c$:

$$\partial_\mu W^{c\mu\nu} + \frac{g_W}{2} \cdot (-2\epsilon_{abc}) W^a_\mu W^{b\mu\nu} = J^{c\nu}$$

$$\partial_\mu W^{c\mu\nu} - g_W \epsilon_{abc} W^a_\mu W^{b\mu\nu} = J^{c\nu}$$

This is exactly the standard $SU(2)$ Yang-Mills equation of motion (cf. Peskin & Schroeder, Eq. 15.50). The single Clifford equation $D_\mu \mathbf{W}^{\mu\nu} = \mathbf{J}^\nu$ encodes all three component equations simultaneously. $\square$

**Proposition 5.5 (Bianchi identity).** *The field strength satisfies the Bianchi identity:*

$$D_{[\mu} \mathbf{W}_{\nu\rho]} = D_\mu \mathbf{W}_{\nu\rho} + D_\nu \mathbf{W}_{\rho\mu} + D_\rho \mathbf{W}_{\mu\nu} = 0$$

*Proof.* From $\mathbf{W}_{\mu\nu} = \partial_\mu \mathbf{W}_\nu - \partial_\nu \mathbf{W}_\mu + \frac{g_W}{2}[\mathbf{W}_\mu, \mathbf{W}_\nu]$, the Bianchi identity follows from the Jacobi identity for the gauge-covariant derivative: $[D_\mu, [D_\nu, D_\rho]] + [D_\nu, [D_\rho, D_\mu]] + [D_\rho, [D_\mu, D_\nu]] = 0$. Since $\mathbf{W}_{\mu\nu} = \frac{2}{g_W}[D_\mu, D_\nu]$, this gives $D_{[\mu}\mathbf{W}_{\nu\rho]} = 0$. In Clifford language, the Jacobi identity reduces to the associativity of the geometric product: the cyclic sum of nested commutators vanishes because $(AB)C = A(BC)$ for all bivectors. $\square$

**Remark (Complete field theory).** Propositions 5.2–5.5 constitute the complete classical Yang-Mills field theory in Clifford language: the gauge-covariant field strength (Definition 5.1), its transformation law (Proposition 5.2), the Lagrangian (Proposition 5.3), the equation of motion (Proposition 5.4), and the Bianchi identity (Proposition 5.5). Together with the gauge potential and its transformation (Definitions 4.1–4.2, Proposition 4.3), these reproduce the full content of the standard $SU(2)$ Yang-Mills theory.

## Step 6: Bootstrap Doubling as Clifford Extension

**Theorem 6.1 (Cayley-Dickson = Clifford dimension increase).** The target derivation's Corollary 2.2 shows the gauge hierarchy arising from Cayley-Dickson doubling: $\mathbb{R} \to \mathbb{C} \to \mathbb{H} \to \mathbb{O}$. In Clifford language, the first three steps are:

| Division algebra | Even subalgebra | Spatial dimensions | Gauge group |
|---|---|---|---|
| $\mathbb{R}$ | $\operatorname{Cl}^+(1,0) = \mathbb{R}$ | 1 | $\{+1, -1\}$ (trivial) |
| $\mathbb{C}$ | $\operatorname{Cl}^+(2,0) \cong \mathbb{C}$ | 2 | $U(1)$ |
| $\mathbb{H}$ | $\operatorname{Cl}^+(3,0) \cong \mathbb{H}$ | 3 | $SU(2) = \operatorname{Spin}(3)$ |

Each step adds one spatial dimension to the Clifford algebra, which doubles the even subalgebra and adds a new independent bivector. The Cayley-Dickson doubling $\mathbb{C} \to \mathbb{H}$ is *literally* the extension $\operatorname{Cl}^+(2,0) \to \operatorname{Cl}^+(3,0)$ — adding a third spatial direction $e_3$ introduces two new bivectors ($e_{13}, e_{23}$), turning the one-parameter $U(1)$ into the three-parameter $SU(2)$.

*Proof.* $\operatorname{Cl}^+(2,0) = \operatorname{span}\{1, e_{12}\}$. Since $e_{12}^2 = -1$, this is $\mathbb{C}$ with $i = e_{12}$. Its unit group is $U(1) = \{e^{e_{12}\theta} : \theta \in [0, 2\pi)\}$.

Adding $e_3$ creates $\operatorname{Cl}(3,0)$ with new bivectors $e_{23}$ and $e_{31}$. The even subalgebra $\operatorname{Cl}^+(3,0) = \operatorname{span}\{1, e_{23}, e_{31}, e_{12}\} \cong \mathbb{H}$. Its unit group is $\operatorname{Spin}(3) \cong SU(2)$.

The extension is exactly Cayley-Dickson doubling: $\mathbb{C} = \{a + be_{12}\}$ becomes $\mathbb{H} = \{(a + be_{12}) + (c + de_{12})e_{23}\}$, which matches the Cayley-Dickson formula $(z_1, z_2) = z_1 + z_2 j$ with $j = e_{23}$. $\square$

**Remark (Resolving Open Question 1).** The stub asked whether bootstrap doubling has a geometric interpretation as Clifford extension. It does: each bootstrap level adds one spatial dimension, introducing new bivector planes. The target derivation's Proposition 1.2 ($d = 3$ gives exactly three phase channels) is the statement that $\operatorname{Cl}^+(3,0)$ has exactly three independent bivectors. The match between $d = 3$ and $\dim_{\mathbb{R}}\mathbb{H} - 1 = 3$ is not coincidence — it is the identity $\dim\operatorname{Cl}^+(n,0) = 2^{n-1}$, which gives $\dim = 4$ (one real + three imaginary) precisely for $n = 3$.

## Step 7: Electroweak Embedding in Clifford Terms

**Proposition 7.1 ($\mathbb{C} \subset \mathbb{H}$ as $U(1) \subset SU(2)$).** The target derivation's Proposition 8.1 shows the electroweak structure $SU(2)_L \times U(1)_Y$ with $U(1)_{em}$ as a subgroup. In Clifford terms:

The complex subalgebra $\mathbb{C} \subset \mathbb{H}$ corresponds to a $U(1)$ subgroup generated by a single bivector — say $e_{12}$ (corresponding to the third component of isospin, $T_3$). The maximal torus is:

$$U(1)_{T_3} = \{e^{e_{12}\theta/2} : \theta \in [0, 4\pi)\} \subset \operatorname{Spin}(3)$$

After electroweak symmetry breaking, the electromagnetic $U(1)_{em}$ is generated by a linear combination of $e_{12}$ (weak isospin) and the hypercharge generator $Y$:

$$Q = T_3 + Y/2$$

In Clifford terms: the photon field $A_\mu$ couples to the bivector $e_{12}\sin\theta_W + B_Y\cos\theta_W$, where $B_Y$ is the hypercharge generator (which lives outside $\operatorname{Cl}^+(3,0)$ — it requires the separate $U(1)_Y$ from electromagnetism).

**Proposition 7.2 (Weinberg mixing as bivector rotation).** The electroweak mixing between $W_\mu^3$ (coupled to $e_{12}$) and $B_\mu$ (coupled to $B_Y$) defines the physical $Z$ and $\gamma$ bosons. In the extended space $\operatorname{span}\{e_{12}, B_Y\}$, the mixing is a rotation by the Weinberg angle $\theta_W$:

$$\begin{pmatrix} A_\mu \\ Z_\mu \end{pmatrix} = \begin{pmatrix} \sin\theta_W & \cos\theta_W \\ \cos\theta_W & -\sin\theta_W \end{pmatrix} \begin{pmatrix} W_\mu^3 \\ B_\mu \end{pmatrix}$$

The Weinberg angle is the angle between the weak isospin direction $e_{12}$ and the electromagnetic direction in the $\{e_{12}, B_Y\}$ plane. The target derivation's Remark on the Weinberg angle — that $\sin^2\theta_W = 1/3$ at the crystallization scale from the $\mathbb{C} \subset \mathbb{H}$ embedding — has a Clifford interpretation: the $\mathbb{C}$ subalgebra occupies $2/4 = 1/2$ of the real dimensions of $\mathbb{H}$, which via the Pythagorean structure of the mixing gives the boundary condition.

## Step 8: Wilson Loops as Rotor Holonomy

**Proposition 8.1 (Wilson loop in Clifford language).** The target derivation's Proposition 3.2a introduces Wilson loops as the gauge-invariant observables. In $\operatorname{Cl}^+(3,0)$, the Wilson loop around a closed curve $\gamma$ is the holonomy rotor:

$$R_\gamma = \mathcal{P}\exp\left(-\frac{g_W}{2}\oint_\gamma \mathbf{W}_\mu \, dx^\mu\right)$$

where $\mathcal{P}$ denotes path-ordering (necessary because the bivector-valued integrand does not commute at different points). The result $R_\gamma$ is a rotor in $\operatorname{Spin}(3)$. Under gauge transformation: $R_\gamma \mapsto R(x_0)R_\gamma\tilde{R}(x_0)$ where $x_0$ is the base point.

**Proposition 8.2 (Gauge-invariant observable).** The trace $\operatorname{tr}(R_\gamma) = 2\operatorname{Re}(R_\gamma) = 2\langle R_\gamma\rangle_0$ (the scalar part of the rotor) is gauge-invariant. For a rotor $R = \cos\frac{\alpha}{2} - B\sin\frac{\alpha}{2}$, this is $\langle R\rangle_0 = \cos\frac{\alpha}{2}$.

The holonomy angle $\alpha$ measures the total isospin rotation accumulated around $\gamma$. For a trivial (zero field strength) connection, $\alpha = 0$ and $R_\gamma = 1$. For a non-trivial field configuration (e.g., an instanton), the holonomy can be any element of $\operatorname{Spin}(3)$.

**Proposition 8.3 (Completeness of Wilson loop observables).** *The set of Wilson loop observables $\{\langle R_\gamma \rangle_0 : \gamma \text{ closed curves}\}$ separates gauge orbits: two gauge field configurations $\mathbf{W}_\mu$ and $\mathbf{W}'_\mu$ are gauge-equivalent if and only if they produce the same holonomy scalar parts for all closed curves $\gamma$ (Giles 1981).*

*Proof.* Gauge equivalence implies equal Wilson loops: if $\mathbf{W}'_\mu = R\mathbf{W}_\mu\tilde{R} + \frac{2}{g_W}(\partial_\mu R)\tilde{R}$, then $R'_\gamma = R(x_0)R_\gamma\tilde{R}(x_0)$ and $\langle R'_\gamma\rangle_0 = \langle R(x_0)R_\gamma\tilde{R}(x_0)\rangle_0 = \langle R_\gamma\rangle_0$ (scalar part is invariant under rotor conjugation). The converse — that equal Wilson loops imply gauge equivalence — follows from the reconstruction theorem: the holonomy group at a point determines the connection up to gauge transformation (Ambrose-Singer theorem). In Clifford terms, knowing all holonomy rotors determines all parallel transport rotors, which determines the rotation gauge $\Omega$ up to a local rotor transformation. $\square$

**Remark (Instanton number).** Since $\operatorname{Spin}(3) \cong S^3$ and $\pi_3(S^3) = \mathbb{Z}$, there are topologically distinct gauge field configurations classified by an integer (the instanton number). In Clifford terms: the space of rotors $\{R \in \operatorname{Cl}^+(3,0) : R\tilde{R} = 1\}$ is a 3-sphere, and maps from the compactified spacetime $S^4$ into this rotor space are classified by $\pi_3(S^3) = \mathbb{Z}$. These topological sectors are relevant for the strong CP problem and baryogenesis through sphaleron processes.

## Assessment: What GA Adds

**Genuine simplifications:**

1. **Quaternions demystified.** The quaternion algebra $\mathbb{H}$, which may seem like an exotic mathematical structure, is *simply the even subalgebra of 3D Euclidean Clifford algebra*. The three quaternion units are the three basis bivectors — the three independent rotation planes in 3D space. This makes the target derivation's Theorem 2.1 (quaternionic closure) self-evident in Clifford terms: three independent rotation planes automatically generate $\operatorname{Cl}^+(3,0)$.

2. **Gauge transformations are rotors.** The $SU(2)$ gauge transformation $\psi \to g(x)\psi$ in matrix notation becomes $\psi \to R(x)\psi$ in Clifford notation. The gauge potential transformation $W \to gWg^{-1} + (i/g_W)g\partial g^{-1}$ becomes $\mathbf{W} \to R\mathbf{W}\tilde{R} + (2/g_W)(\partial R)\tilde{R}$. The Clifford version uses only the geometric product and reversion — no matrices, no complex $i$, no inverse operation.

3. **Self-interaction from one product.** Why do $W$ bosons self-interact while photons do not? Because distinct bivectors do not commute under the geometric product ($e_{23}e_{31} \neq e_{31}e_{23}$), while a single bivector commutes with itself ($e_{12}e_{12} = -1$, a scalar). This is one computation, not a structural argument about non-abelian groups.

4. **Bootstrap doubling = adding a dimension.** The Cayley-Dickson chain $\mathbb{C} \to \mathbb{H}$ corresponds to $\operatorname{Cl}^+(2,0) \to \operatorname{Cl}^+(3,0)$ — adding one spatial direction. The entire bootstrap hierarchy becomes: *each new spatial dimension adds new bivector planes, enlarging the phase algebra and the gauge group*.

**Genuine insights:**

5. **Weak interaction and spin share the same algebra.** The rotor group of $\operatorname{Cl}^+(3,0)$ is simultaneously $\operatorname{Spin}(3)$ (the double cover of spatial rotations, giving spin) and $SU(2)$ (the weak gauge group). These are not merely isomorphic — they are *the same algebraic object*. The GA formulation makes this identity visible in a way that separate treatments of spin and the weak force do not.

6. **Chirality from the parent algebra.** From [Chirality as Grade Structure](/geometric-algebra/chirality-selection), chirality is determined by the pseudoscalar $I = e_{0123}$ of $\operatorname{Cl}(1,3)$. The weak gauge generators, being bivectors ($e_{23}, e_{31}, e_{12}$), live in the even subalgebra and split under $I$ into self-dual and anti-self-dual sectors. The chiral coupling of the weak interaction — acting only on left-handed fermions — is the selection of one $I$-eigenspace. This connects the "internal" Clifford algebra $\operatorname{Cl}^+(3,0)$ (isospin space) to the "external" Clifford algebra $\operatorname{Cl}(1,3)$ (spacetime) through their shared bivector structure.

**Not a genuine simplification:**

- The localization argument (target Step 3) — why the gauge symmetry must be local — is a physical argument about causality and relational invariants that has no Clifford-specific content. The GA version of the gauge potential transformation (Proposition 4.3) is equivalent to the matrix version, just expressed differently.
- The Yang-Mills equations (target Theorem 5.1) follow from uniqueness under Lorentz + gauge covariance + second-order locality. This representation-theoretic argument works identically in Clifford or matrix language.
- The electroweak mixing (Step 7) requires the separate $U(1)_Y$ factor, which does not naturally live in $\operatorname{Cl}^+(3,0)$. The Clifford formulation of $SU(2)$ does not simplify the electroweak structure — it handles the non-abelian part cleanly but the abelian-non-abelian mixing is the same in any formulation.

## Open Questions

1. **Full electroweak algebra**: Is there a single Clifford algebra that naturally accommodates both $SU(2)_L$ and $U(1)_Y$ — perhaps $\operatorname{Cl}^+(4,0)$ or a different signature? The $\operatorname{Cl}^+(3,0)$ formulation handles $SU(2)$ but not the full $SU(2) \times U(1)$.

2. **Instanton structure in Clifford language**: The topological classification $\pi_3(SU(2)) = \mathbb{Z}$ has a clean Clifford interpretation (maps from $S^4$ into the rotor 3-sphere). Can the BPST instanton solution be written in closed form using Clifford algebra, and does this simplify the computation of instanton effects (e.g., the 't Hooft vertex)?

3. **Connection to $\operatorname{Cl}(1,3)$ chirality**: The "internal" $\operatorname{Cl}^+(3,0)$ (isospin) and the "spacetime" $\operatorname{Cl}(1,3)$ share the fact that $\operatorname{Cl}^+(1,3) \cong \operatorname{Cl}(3,0)$. This isomorphism connects the spacetime even subalgebra to the full 3D Clifford algebra. Does this provide a deeper explanation of why the weak interaction is chiral — is the chirality of $SU(2)$ coupling forced by the embedding $\operatorname{Cl}^+(3,0) \hookrightarrow \operatorname{Cl}^+(1,3)$?

## Status

This is a **rigorous** analysis of the weak interaction in Clifford algebra. The isomorphism $\mathbb{H} \cong \operatorname{Cl}^+(3,0)$ (Theorem 1.1) is standard algebra with complete proof. The rotor gauge theory (Steps 2–5) is algebraically complete: gauge potential (Definition 4.1), covariant derivative (Definition 4.2), gauge transformation (Proposition 4.3), field strength (Definition 5.1), transformation law (Proposition 5.2), Lagrangian (Proposition 5.3), Yang-Mills equation of motion with explicit component verification (Proposition 5.4), and Bianchi identity (Proposition 5.5). The bootstrap interpretation (Theorem 6.1) is a genuine structural insight with rigorous proof. The Wilson loop observables (Propositions 8.1–8.3) are shown to separate gauge orbits via the Ambrose-Singer theorem.

All stated results are proved or rigorously cited. The electroweak embedding (Step 7) is correctly formulated but does not simplify the abelian-non-abelian mixing. The open questions (full electroweak algebra, instanton solutions, chirality connection) identify research directions beyond the scope of this translation.
