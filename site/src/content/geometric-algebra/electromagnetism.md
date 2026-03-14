---
title: "Maxwell Equations as ∇F = J"
status: "provisional"
gaStructure: "Cl(1,3)"
targetDerivation: "gauge/electromagnetism"
dependsOn: ["lorentz-invariance"]
tags: ["spacetime-algebra", "gauge-theory", "geometric-algebra"]
summary: "The electromagnetic field F = E + IB as a single STA bivector compresses Maxwell's four equations into one: ∇F = J"
priority: "high"
lastUpdated: 2026-03-13
---

## Connection to Framework Derivation

**Target**: [Electromagnetism](/derivations/gauge/electromagnetism) (status: rigorous)

The electromagnetism derivation establishes that the $U(1)$ gauge interaction arising from complex-number phase structure produces the full electromagnetic field, with Maxwell's equations emerging from gauge field dynamics and a uniqueness argument. The derivation proceeds: observer phases → local gauge redundancy → connection $A_\mu$ → curvature $F_{\mu\nu}$ → Bianchi identity → Maxwell equations → charge quantization → Lorentz force.

In STA, the field strength tensor $F_{\mu\nu}$ becomes a single bivector $F$, the four Maxwell equations collapse to one equation $\nabla F = J$, the Lorentz force becomes $f = qF \cdot v$, and electromagnetic duality is right-multiplication by the pseudoscalar $I$. This compression is not merely notational — it reveals the *grade structure* underlying electromagnetism: sourced equations live in the vector grade, sourceless equations live in the trivector grade, and duality is the grade-complement operation.

## Step 1: The Electromagnetic Bivector

**Definition 1.1 (Faraday bivector).** The electromagnetic field is a grade-2 element (bivector) of $\operatorname{Cl}(1,3)$:

$$F = \tfrac{1}{2}F_{\mu\nu}\, e^\mu \wedge e^\nu$$

This is a single object — 6 independent components, matching the 6 components of $F_{\mu\nu}$ (3 electric + 3 magnetic). It lives in the same 6-dimensional bivector space that houses the Lorentz generators (Step 2 of [Lorentz Group via STA Rotors](/geometric-algebra/lorentz-invariance)).

**Proposition 1.2 (Observer-dependent decomposition).** Relative to a timelike unit vector $e_0$ (an observer's rest frame), $F$ decomposes uniquely as:

$$F = \mathbf{E} + I\mathbf{B}$$

where $\mathbf{E}$ and $\mathbf{B}$ are spatial vectors (grade-1 elements of the $e_0$-relative space) defined by:

$$\mathbf{E} = F \cdot e_0 = (Fe_0 + e_0 F)/2, \qquad I\mathbf{B} = F \wedge e_0 = (Fe_0 - e_0 F)/2$$

*Proof.* Any bivector $F$ in $\operatorname{Cl}(1,3)$ can be split by commutation with $e_0$. The part that anticommutes with $e_0$ (timelike bivectors $e_{0k}$) gives the electric field; the part that commutes with $e_0$ (spacelike bivectors $e_{jk}$) gives the magnetic field dressed by $I$. Explicitly, for a pure electric field along $e_1$: $F = Ee_{01}$, so $F \cdot e_0 = Ee_1 = \mathbf{E}$. For a pure magnetic field along $e_3$: $F = Be_{12}$, and $e_{12} = Ie_{03} = Ie_0 e_3$, confirming $F = I\mathbf{B}$ with $\mathbf{B} = Be_3$. $\square$

**Remark (What this decomposition reveals).** In the standard treatment, the electric and magnetic fields $\mathbf{E}$ and $\mathbf{B}$ are separate 3-vectors that transform in a complicated way under Lorentz boosts (mixing with each other). In STA, both live inside a single bivector $F$ that transforms simply:

$$F \mapsto F' = RF\tilde{R}$$

under the boost rotor $R$ from [Lorentz Group via STA Rotors](/geometric-algebra/lorentz-invariance), Theorem 3.3. The "complicated mixing" of $\mathbf{E}$ and $\mathbf{B}$ is just the effect of projecting $RF\tilde{R}$ onto the new observer's time direction. The electromagnetic field itself does not mix — it is one object that different observers decompose differently.

## Step 2: The Vector Derivative

**Definition 2.1 (STA vector derivative).** The spacetime vector derivative is:

$$\nabla = e^\mu \partial_\mu = e^0 \partial_0 + e^1 \partial_1 + e^2 \partial_2 + e^3 \partial_3$$

where $e^\mu = \eta^{\mu\nu} e_\nu$ are the reciprocal basis vectors ($e^0 = e_0$, $e^k = -e_k$). This is a *vector-valued differential operator* — a grade-1 object that, when multiplied by a multivector using the geometric product, produces both inner and outer derivatives simultaneously.

**Proposition 2.2 (The vector derivative splits into divergence and curl).** For any bivector field $F$:

$$\nabla F = \nabla \cdot F + \nabla \wedge F$$

where $\nabla \cdot F = \langle \nabla F \rangle_1$ is a vector (grade 1) and $\nabla \wedge F = \langle \nabla F \rangle_3$ is a trivector (grade 3).

*Proof.* The geometric product of a grade-1 operator with a grade-2 field produces grades $|2-1| = 1$ and $2+1 = 3$. No other grades appear. $\square$

**Remark.** This is the key structural insight. When the geometric product $\nabla F$ is formed, the grade-1 (vector) part contains the *sourced* Maxwell equations and the grade-3 (trivector) part contains the *sourceless* equations. The two halves of Maxwell's system live in different grades of a single multivector — they are algebraically separated by the grade structure of $\operatorname{Cl}(1,3)$.

## Step 3: Maxwell's Single Equation

**Theorem 3.1 (Maxwell's equation in STA).** *All four of Maxwell's equations are contained in the single equation:*

$$\boxed{\nabla F = J}$$

*where $J = J^\mu e_\mu$ is the charge-current vector. This decomposes by grade into:*

*Grade 1 (vector): $\nabla \cdot F = J$ — the two sourced Maxwell equations.*

*Grade 3 (trivector): $\nabla \wedge F = 0$ — the two sourceless Maxwell equations.*

*Proof.* We verify both grade components.

**Grade-3 component** ($\nabla \wedge F = 0$). This is the Bianchi identity. In the target derivation (Proposition 4.4), it reads $\partial_{[\mu}F_{\nu\rho]} = 0$. In STA: $\nabla \wedge F = \nabla \wedge (\nabla \wedge A) = 0$ because the outer product of identical vectors vanishes ($\nabla \wedge \nabla = 0$, the GA analogue of $d^2 = 0$).

Splitting relative to $e_0$, the grade-3 equation $\nabla \wedge F = 0$ yields:

$$\boldsymbol{\nabla} \cdot \mathbf{B} = 0 \qquad \text{(no magnetic monopoles)}$$

$$\frac{\partial \mathbf{B}}{\partial t} + \boldsymbol{\nabla} \times \mathbf{E} = 0 \qquad \text{(Faraday's law)}$$

where $\boldsymbol{\nabla} = e^k \partial_k$ is the spatial part of $\nabla$.

**Grade-1 component** ($\nabla \cdot F = J$). This encodes the inhomogeneous (sourced) equations. In the target derivation (Theorem 6.1): $\partial_\mu F^{\mu\nu} = \mu_0 J^\nu$. Splitting relative to $e_0$:

$$\boldsymbol{\nabla} \cdot \mathbf{E} = \rho/\varepsilon_0 \qquad \text{(Gauss's law)}$$

$$\boldsymbol{\nabla} \times \mathbf{B} - \frac{1}{c^2}\frac{\partial \mathbf{E}}{\partial t} = \mu_0 \mathbf{J} \qquad \text{(Ampère-Maxwell law)}$$

These four equations are exactly the target derivation's Step 9 result. $\square$

**Proposition 3.2 (Charge conservation from grade consistency).** *The equation $\nabla F = J$ automatically implies charge conservation $\nabla \cdot J = 0$.*

*Proof.* Apply $\nabla$ to both sides: $\nabla(\nabla F) = \nabla J$. The left side is $\nabla^2 F = \square F$ (the d'Alembertian, a scalar operator acting on a bivector, producing a bivector). But $\nabla J = \nabla \cdot J + \nabla \wedge J$, where $\nabla \cdot J$ is a scalar (grade 0) and $\nabla \wedge J$ is a bivector (grade 2). For the equation to be consistent, the grade-0 part of the left side must vanish (a bivector has no scalar part). Therefore $\nabla \cdot J = 0$.

Alternatively: $\nabla \cdot J = \nabla \cdot (\nabla \cdot F) = \langle \nabla \nabla F \rangle_0 = 0$ because $\nabla \wedge F = 0$ implies $\nabla F = \nabla \cdot F$, and $\langle \nabla(\nabla \cdot F)\rangle_0 = \frac{1}{2}\nabla^2 \langle F \rangle_0 = 0$ since $F$ is pure grade-2.

This matches the target derivation's Theorem 5.2, but the STA proof is purely algebraic — charge conservation is a *grade-consistency condition* of the single equation $\nabla F = J$, not a separate physical requirement. $\square$

## Step 4: The Gauge Potential

**Definition 4.1 (STA gauge potential).** The electromagnetic potential is a spacetime vector:

$$A = A_\mu e^\mu$$

The Faraday bivector is its curl:

$$F = \nabla \wedge A = \langle \nabla A \rangle_2$$

which is the GA equivalent of $F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$.

**Proposition 4.2 (Gauge freedom in STA).** *Under a gauge transformation $A \mapsto A + \nabla \chi$ for any scalar $\chi$:*

$$F = \nabla \wedge A \mapsto \nabla \wedge (A + \nabla \chi) = \nabla \wedge A + \nabla \wedge \nabla \chi = F$$

*since $\nabla \wedge \nabla = 0$. This matches the target derivation's Proposition 3.3.*

**Proposition 4.3 (Bianchi identity is automatic).** *$\nabla \wedge F = \nabla \wedge (\nabla \wedge A) = 0$ identically (the outer product is nilpotent). The sourceless Maxwell equations are not dynamical — they are a geometric identity.*

*Remark.* In the target derivation, the Bianchi identity (Proposition 4.4) is derived from $dF = d^2A = 0$ using exterior calculus. The STA version is the same result expressed in geometric algebra: $\nabla \wedge (\nabla \wedge A) = 0$. The advantage is that this lives in the same algebraic framework as the sourced equations — one doesn't need to switch between differential forms and vector fields.

## Step 5: Electromagnetic Duality

**Proposition 5.1 (Duality as pseudoscalar multiplication).** *The Hodge dual of the Faraday bivector is:*

$$\star F = FI = F e_{0123}$$

*Right-multiplication by $I$ maps $F = \mathbf{E} + I\mathbf{B}$ to $FI = I\mathbf{E} - \mathbf{B}$, which corresponds to $\mathbf{E} \mapsto -\mathbf{B}$, $\mathbf{B} \mapsto \mathbf{E}$ — the standard electromagnetic duality rotation by $\pi/2$.*

*Proof.* Using $I^2 = -1$: $FI = (\mathbf{E} + I\mathbf{B})I = \mathbf{E}I + I\mathbf{B}I = I\mathbf{E} + I^2\mathbf{B} = I\mathbf{E} - \mathbf{B}$. This is the Faraday bivector with $\mathbf{E}' = -\mathbf{B}$ and $\mathbf{B}' = \mathbf{E}$. $\square$

**Proposition 5.2 (General duality rotation).** *A continuous duality rotation $F \mapsto Fe^{I\alpha} = F\cos\alpha + FI\sin\alpha$ mixes $\mathbf{E}$ and $\mathbf{B}$ smoothly. Maxwell's equation $\nabla F = J$ is invariant under this rotation if and only if $J = 0$ (vacuum).*

*Proof.* $\nabla(Fe^{I\alpha}) = (\nabla F)e^{I\alpha}$ since $e^{I\alpha}$ is a constant. This equals $Je^{I\alpha}$, which is a vector times a (scalar + pseudoscalar) — not a pure vector unless $\alpha = 0$ or $J = 0$. Therefore duality is a symmetry of the vacuum equations but not of the sourced equations.

The target derivation's Open Gap 2 asks why the framework excludes magnetic monopoles. In STA, the answer is structural: if magnetic charges existed, we would need $\nabla \wedge F = K$ for a magnetic current trivector $K$, and the full equation would be $\nabla F = J + K$. The trivector $K$ would be the Hodge dual of a magnetic current vector $J_m$: $K = J_m I$. The sourceless equations would become $\nabla \wedge F = J_m I$, breaking the Bianchi identity. Since $F = \nabla \wedge A$ requires $\nabla \wedge F = 0$, magnetic charges would force the gauge potential description to fail — no global $A$ exists. The framework's derivation from a $U(1)$ connection (Structural Postulate S1) therefore *inherently excludes* magnetic monopoles, because a gauge potential must exist. $\square$

## Step 6: The Lorentz Force

**Proposition 6.1 (Lorentz force in STA — recast of Theorem 8.1).** *The force on a charge $q$ with proper velocity $v = \dot{x}$ is:*

$$f = qF \cdot v = q\langle Fv \rangle_1$$

*This single expression replaces the standard $\mathbf{F} = q(\mathbf{E} + \mathbf{v} \times \mathbf{B})$.*

*Proof.* The geometric product $Fv$ of a bivector with a vector produces grade-1 and grade-3 parts. The grade-1 part is $F \cdot v$. Expanding relative to $e_0$: with $v = \gamma(e_0 + \boldsymbol{\beta})$ and $F = \mathbf{E} + I\mathbf{B}$:

$$Fv = (\mathbf{E} + I\mathbf{B})\gamma(e_0 + \boldsymbol{\beta})$$

The vector (grade-1) part extracts:

$$\langle Fv \rangle_1 = \gamma(\mathbf{E} + \boldsymbol{\beta} \times \mathbf{B}) + \gamma(\mathbf{E} \cdot \boldsymbol{\beta})e_0$$

The spatial part is $\gamma(\mathbf{E} + \mathbf{v}/c \times \mathbf{B})$, which is the Lorentz force (up to the $\gamma$ relating proper time to coordinate time). The temporal part $\gamma(\mathbf{E} \cdot \boldsymbol{\beta})$ is the power delivered by the field.

The equation of motion is $m\dot{v} = qF \cdot v$, matching the target derivation's Theorem 8.1. $\square$

**Remark.** The cross product $\mathbf{v} \times \mathbf{B}$ does not appear explicitly in $f = qF \cdot v$. The cross product is an artifact of the observer-dependent split $F = \mathbf{E} + I\mathbf{B}$; the Lorentz force in STA is manifestly covariant and involves no special 3D operation.

## Step 7: Holonomy and Charge Quantization

**Proposition 7.1 (Gauge potential as STA vector).** *The connection $A = A_\mu e^\mu$ is a spacetime vector. Under gauge transformation:*

$$A \mapsto A' = A + \nabla \chi$$

*The covariant derivative of the target derivation (Definition 3.2) becomes:*

$$D = \nabla + qA$$

*applied to the phase field. The coherence cost (action) per cycle from Theorem 8.1 of the target derivation is:*

$$\mathcal{S} = \int (mc|v| + qA \cdot v)\, d\tau$$

*where $A \cdot v$ is the STA inner product of two vectors — a scalar, as required for an action.*

**Proposition 7.2 (Holonomy as rotor).** *The phase accumulated around a closed spacetime loop $\gamma$ is:*

$$W(\gamma) = \exp\!\left(iq \oint_\gamma A \cdot dx\right) = \exp\!\left(iq \int_S F \cdot dS\right)$$

*where $S$ is any surface bounded by $\gamma$ and $dS$ is the bivector area element. The second equality is the STA form of Stokes' theorem (the target derivation's Proposition 4.3).*

*In STA, the Wilson loop is a $U(1)$ rotor: $W = e^{-B_{\text{int}}\theta/2}$ where $B_{\text{int}}$ is a bivector in the internal $U(1)$ space and $\theta = 2q\oint A \cdot dx$. Loop closure (Axiom 3) demands $W(\gamma) = e^{2\pi i n}$ for integer $n$, which is the charge quantization condition of the target derivation's Theorem 7.1.*

**Remark (Connecting to the framework).** The target derivation establishes charge quantization from the $U(1)$ topology of the observer's phase space (Theorem 7.1). In STA, this becomes visually concrete: the holonomy around any closed loop must be a *closed rotor path* in $U(1)$, which requires the accumulated phase to be an integer multiple of $2\pi$. This is the same closure condition as the rotor periodicity of [Lorentz Group via STA Rotors](/geometric-algebra/lorentz-invariance), Proposition 8.1 — there, spatial rotors close at $4\pi$ because the double cover adds a factor of 2; here, $U(1)$ phase rotors close at $2\pi$.

## Step 8: The Uniqueness Argument in STA

The target derivation's central structural result (Theorem 6.1) is that the inhomogeneous Maxwell equations are *uniquely determined* by Lorentz covariance, gauge invariance, and second-order locality.

**Proposition 8.1 (STA uniqueness).** *In STA, the uniqueness argument simplifies to: seek a vector-valued equation $\nabla \cdot F = J$ where the left side is a Lorentz vector built from one derivative of the gauge-invariant bivector $F$. There are only two candidates: $\nabla \cdot F$ and $\nabla \cdot (FI)$. The second is $\nabla \cdot (\star F) = 0$ by the Bianchi identity (already accounted for in the sourceless equations). Therefore $\nabla \cdot F = J$ is unique.*

*Proof.* The available grade-1 objects built from one $\nabla$ acting on a bivector $F$ are: $\nabla \cdot F$ (grade 1, from grade $2-1$) and $\nabla \cdot (FI)$ (grade 1, from the dual bivector $FI$). No other combination of one derivative, one $F$, and metric structure $\eta$ produces a Lorentz vector. The second candidate vanishes identically: $\nabla \cdot (FI) = (\nabla \wedge F)I = 0$ since $\nabla \wedge F = 0$. Therefore $\nabla \cdot F = J$ is unique. $\square$

**Remark.** The target derivation's uniqueness argument (Theorem 6.1) lists five conditions and works through representation theory. The STA argument reduces this to one sentence: the only non-trivially vanishing Lorentz vector built from one derivative of $F$ is $\nabla \cdot F$. The five conditions collapse because Lorentz covariance, gauge invariance, and derivative order are automatically satisfied by any expression written in STA — the geometric product handles all of them simultaneously.

## Step 9: Electromagnetic Waves in STA

**Proposition 9.1 (Wave equation — recast of Proposition 9.1).** *In vacuum ($J = 0$), $\nabla F = 0$ implies:*

$$\nabla^2 F = \square F = 0$$

*where $\nabla^2 = \nabla \cdot \nabla = \partial_t^2/c^2 - \boldsymbol{\nabla}^2$ is the d'Alembertian. Every component of $F$ satisfies the wave equation, propagating at $c$.*

*Proof.* $\nabla^2 F = \nabla(\nabla F) = \nabla(0) = 0$. More carefully: $\nabla^2 = \nabla \cdot \nabla$ is a scalar operator, so $\nabla^2 F$ has the same grade as $F$. Each component satisfies $\square F_{\mu\nu} = 0$. $\square$

**Proposition 9.2 (Plane wave solutions).** *A monochromatic plane wave in STA takes the form:*

$$F = F_0 e^{Ik \cdot x}$$

*where $k$ is a null vector ($k^2 = 0$), $F_0$ is a constant bivector, and $k \cdot x = k_\mu x^\mu$ is the phase. The null condition $k^2 = 0$ encodes both the dispersion relation $\omega = c|\mathbf{k}|$ and the transversality condition $k \cdot F_0 = 0$.*

## Assessment: What GA Genuinely Adds

**Genuine simplifications (not just notation):**

1. **Four equations → one.** The compression $\nabla F = J$ is real: sourced equations are the grade-1 part, sourceless equations are the grade-3 part. This is not a trivial repackaging — it reveals that the two halves of Maxwell's system are algebraically independent components of a single multivector equation. The standard formulation obscures this by splitting into separate $\mathbf{E}$ and $\mathbf{B}$ equations.

2. **Charge conservation as grade consistency** (Proposition 3.2). Conservation $\nabla \cdot J = 0$ follows from the algebraic structure of $\nabla F = J$ — the grade-0 part of $\nabla(\nabla F)$ must vanish because $\nabla F$ is a vector and $\nabla^2$ is a scalar operator. No separate physical argument needed.

3. **Uniqueness in one line** (Proposition 8.1). The target derivation's five-condition uniqueness theorem reduces to: $\nabla \cdot F$ is the only non-trivially vanishing Lorentz vector from one derivative of $F$.

4. **Duality is pseudoscalar multiplication** (Proposition 5.1). The Hodge star operation, which mixes $\mathbf{E}$ and $\mathbf{B}$, is simply right-multiplication by $I$. This makes the symmetry (and its breaking by charges) algebraically transparent.

5. **Lorentz force without cross products** (Proposition 6.1). The expression $f = qF \cdot v$ is manifestly covariant and involves only the geometric product. The cross product $\mathbf{v} \times \mathbf{B}$ is exposed as an artifact of the observer-dependent decomposition.

6. **Monopole exclusion from gauge structure** (Proposition 5.2). The STA analysis shows clearly why $F = \nabla \wedge A$ forces $\nabla \wedge F = 0$: magnetic monopoles would require abandoning the gauge potential, which contradicts the framework's derivation from a $U(1)$ connection. This partially addresses the target derivation's Open Gap 2.

**Limitations (honest assessment):**

1. **No new physics.** The STA reformulation produces exactly the same Maxwell equations, the same charge quantization, and the same Lorentz force. The derivation's physical content — that $U(1)$ gauge symmetry from loop closure forces electromagnetism — is unchanged.

2. **Coupling constant unchanged.** The target derivation's Open Gap 1 (the value of $\alpha_{em} \approx 1/137$) is not addressed by the STA reformulation. The coupling constant remains a free parameter.

3. **Coherence Lagrangian connection incomplete.** The target derivation's most interesting open direction — deriving $\nabla F = J$ directly from the coherence Lagrangian in STA form — is not completed here. The coherence cost $\int qA \cdot v\, d\tau$ appears naturally in STA (Proposition 7.1), but the full variational derivation of the field equations from a coherence-based action principle remains to be developed.

4. **Gauge quantization deeper structure.** While charge quantization maps cleanly to rotor closure (Proposition 7.2), the deeper question of *why* the $U(1)$ bundle is non-trivial (allowing non-zero charges) is a topological question not illuminated by the local algebraic structure of STA.

## Open Questions

1. **Coherence Lagrangian in STA form**: Can the framework's coherence Lagrangian be written as a single STA expression $\mathcal{L} = \langle F^2 \rangle_0 + qA \cdot J$, and does the variational principle $\delta \int \mathcal{L}\, d^4x = 0$ reproduce $\nabla F = J$ directly? The scalar part $\langle F^2 \rangle_0 = \frac{1}{2}(|\mathbf{E}|^2 - |\mathbf{B}|^2)$ is the standard electromagnetic Lagrangian density.

2. **Non-abelian extension**: The weak and color forces use $SU(2)$ and $SU(3)$ gauge groups. In STA, the $U(1)$ gauge transformation is $\psi \mapsto \psi e^{-I\alpha/2}$ (right-multiplication by a phase rotor). For $SU(2)$, this extends to $\psi \mapsto R\psi$ where $R$ is a general $\operatorname{Cl}^+(3,0)$ rotor. Can the full gauge hierarchy be expressed in a unified STA framework?

3. **Radiation as rotor dynamics**: Electromagnetic radiation corresponds to oscillating bivector fields propagating at $c$. Can the photon — the quantized excitation of $F$ — be interpreted as a *rotor wave* in $\operatorname{Cl}(1,3)$? This would connect the classical STA formulation to the quantum structure of the framework.

## Status

This page is **provisional**. The mathematical content is rigorous: the STA reformulation of Maxwell's equations (Theorem 3.1), charge conservation from grade consistency (Proposition 3.2), the uniqueness argument (Proposition 8.1), electromagnetic duality (Propositions 5.1–5.2), the Lorentz force (Proposition 6.1), and holonomy/charge quantization (Proposition 7.2) are all standard results of STA electrodynamics (Hestenes 1966, Doran & Lasenby 2003). The connections to the framework's derivation — particularly the monopole exclusion argument and the rotor closure interpretation of charge quantization — are structural observations that merit further formalization. Upgrading to rigorous would require: (a) completing the coherence Lagrangian derivation in STA form, and (b) formalizing the connection between holonomy closure and Axiom 3's loop closure as a precise theorem.
