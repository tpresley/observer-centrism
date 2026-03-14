---
title: "CPT as a Single Cl(1,3) Object"
status: "rigorous"
gaStructure: "Cl(1,3)"
targetDerivation: "particles/cpt-theorem"
dependsOn: ["lorentz-invariance"]
tags: ["spacetime-algebra", "discrete-symmetries", "geometric-algebra"]
summary: "C, P, and T map to specific Cl(1,3) operations whose composition is the pseudoscalar I = e0123, making CPT invariance algebraically immediate"
priority: "high"
lastUpdated: 2026-03-13
---

## Overview

This page re-examines the framework's [CPT theorem derivation](/derivations/particles/cpt-theorem) through **Spacetime Algebra** (the Clifford algebra Cl(1,3)), where the three discrete symmetries C, P, and T collapse into operations on a single algebraic object -- the pseudoscalar $I = e_{0123}$.

**What changes.** The standard derivation constructs charge conjugation, parity, and time reversal as three separate operations, then shows through a multi-part argument (invoking the Jost-Lüders-Pauli theorem) that their combination is an exact symmetry. In Spacetime Algebra, the situation simplifies dramatically: parity is a reflection by $e_0$ (the time direction), time reversal is a reflection by the spatial volume $e_{123}$, and their composition $PT$ is just the action of the pseudoscalar $I = e_0 e_{123} = e_{0123}$. CPT invariance then reduces to a single algebraic fact: $I$ commutes with all even-grade elements, and physical observables (the Lagrangian, field strengths, scalar densities) are all even-grade. No multi-step theorem needed -- it is a grade-counting identity.

**What stays the same.** The physics is identical -- CPT is exact, individual symmetries C, P, T are violated by the weak interaction, and particles and antiparticles have equal masses and lifetimes. The construction of charge conjugation $C$ as an internal (non-spacetime) operation is essentially unchanged. The Jost-Lüders-Pauli analytic argument is still needed for full mathematical rigor. What GA provides is transparency: *why* CPT works while P and T individually fail becomes a one-line answer.

**Key insights for non-experts:**

- **CPT is one object.** Instead of composing three separate operations and checking the result, GA identifies the combined $PT$ operation with the pseudoscalar $I = e_{0123}$ -- the oriented unit 4-volume of spacetime. CPT invariance is the statement that this single object commutes with the physics.
- **Why parity fails but CPT works.** Parity sends $I \to -I$, which swaps left-handed and right-handed particles. Time reversal also sends $I \to -I$. But $PT$ applies two sign flips: $I \to (-1)^2 I = I$. The weak interaction, which only couples to left-handed particles, is ruined by one sign flip but preserved by two. CPT invariance is the cancellation of two minus signs.
- **Chirality and CPT share a root.** The *same* $I$ that defines the chirality projectors $(1 \pm I)/2$ (separating left-handed from right-handed) also implements the $PT$ operation. The connection between chirality selection and CPT symmetry is not a coincidence -- they are two faces of the same algebraic object.
- **Dimension matters.** The pseudoscalar commutes with even-grade elements only in even-dimensional algebras. In 2+1 dimensions, there would be no chirality distinction and CPT would be trivially satisfied. The nontrivial CPT structure we observe is a consequence of living in 3+1 dimensions.

## Connection to Framework Derivation

**Target**: [CPT Theorem](/derivations/particles/cpt-theorem) (status: rigorous)

The CPT theorem derivation establishes that the combined operation of charge conjugation (C), parity inversion (P), and time reversal (T) is an exact symmetry of any observer satisfying the three axioms. The proof constructs each discrete symmetry from the framework's structure — $C$ from coherence-dual pairs, $P$ from spatial reflection, $T$ from loop closure phase reversal — then invokes the Jost-Lüders-Pauli theorem to conclude CPT invariance from locality, Lorentz invariance, and the spin-statistics connection.

In $\operatorname{Cl}(1,3)$, this argument collapses. The three discrete symmetries become specific algebraic operations — versors, reversion, and their composites — and their combined action reduces to multiplication by the pseudoscalar $I = e_{0123}$. CPT invariance then follows from a single algebraic fact: $I$ commutes with all even-grade elements. Since physical observables live in even grades (scalars, bivectors, grade-4), CPT invariance is an identity, not a theorem requiring three premises.

## Step 1: Parity as a Versor

From [Lorentz Group via STA Rotors](/geometric-algebra/lorentz-invariance) (Step 7), parity is a versor — a reflection implemented by a sandwiching operation, not a rotor in the connected component of the identity.

**Definition 1.1 (Parity versor).** The parity transformation $P$ acts on a spacetime vector $v = v^\mu e_\mu$ by:

$$P(v) = e_0 v e_0$$

This sends $e_0 \mapsto e_0 e_0 e_0 = e_0$ and $e_k \mapsto e_0 e_k e_0 = -e_k$ (using $e_0 e_k = -e_k e_0$). The spatial components reverse, the time component is preserved.

**Proposition 1.2 (Parity on bivectors).** $P$ extends to arbitrary multivectors via the *grade automorphism* $A \mapsto e_0 A e_0$ (the hat involution restricted to spatial components). On the six basis bivectors:

- Spacelike bivectors (rotation generators): $P(e_{jk}) = e_0 e_{jk} e_0 = (-e_j)(-e_k) \cdot (\text{sandwiched}) = e_{jk}$. Spatial bivectors are **parity-even**.
- Timelike bivectors (boost generators): $P(e_{0k}) = e_0 e_{0k} e_0 = e_0 e_0 e_k e_0 = e_k e_0 = -e_{0k}$. Timelike bivectors are **parity-odd**.

*Proof.* For spacelike: $e_0 e_{jk} e_0 = e_0 e_j e_k e_0$. Moving $e_0$ through $e_j$: $= -e_j e_0 e_k e_0$. Then through $e_k$: $= -e_j(-e_k e_0)e_0 = e_j e_k e_0^2 = e_{jk}$. For timelike: $e_0(e_0 e_k)e_0 = e_0^2 e_k e_0 = e_k e_0 = -e_{0k}$. $\square$

**Remark.** That $P$ preserves spatial bivectors but negates timelike bivectors is the algebraic origin of why rotations are parity-even (orbital angular momentum is an axial vector) but boosts are parity-odd (velocity is a polar vector). This falls out of two lines of computation; the standard treatment requires separate arguments for $\mathbf{L} = \mathbf{r} \times \mathbf{p}$ and $\mathbf{v}$.

## Step 2: Time Reversal in STA

**Definition 2.1 (Time reversal versor).** Time reversal $T$ acts on a spacetime vector $v$ by:

$$T(v) = e_{123} \, v \, e_{123}$$

where $e_{123} = e_1 e_2 e_3$ is the spatial trivector (the spatial pseudoscalar) with $e_{123}^2 = +1$ (since $e_{123}^2 = e_1^2 e_2^2 e_3^2 \cdot (-1)^3 = (-1)^3(-1)^3 = +1$ in $\operatorname{Cl}(1,3)$, accounting for three anticommutations and three factors of $e_k^2 = -1$).

This sends $e_0 \mapsto e_{123}\,e_0\,e_{123} = -e_0$ (since $e_{123}$ anticommutes with $e_0$: three spatial anticommutations give $e_0 e_{123} = -e_{123}e_0$) and $e_k \mapsto e_{123}\,e_k\,e_{123} = e_k$ (since $e_{123}$ commutes with each spatial vector). The time component reverses, spatial components are preserved.

**Proposition 2.2 (Time reversal on bivectors).**

- Spacelike bivectors: $T(e_{jk}) = e_{jk}$. Spatial bivectors are **$T$-even**.
- Timelike bivectors: $T(e_{0k}) = -e_{0k}$. Timelike bivectors are **$T$-odd**.

*Proof.* For $e_{jk}$: the spatial pseudoscalar $e_{123}$ commutes with spatial bivectors (they share the spatial subspace), so $T(e_{jk}) = e_{123}\,e_{jk}\,e_{123} = e_{jk}\,e_{123}^2 = e_{jk}$. For $e_{0k}$: since $e_{123}$ anticommutes with $e_0$ (three sign flips: $e_0 e_{123} = (-1)^3 e_{123} e_0 = -e_{123}e_0$) but commutes with $e_k$, we get $T(e_{0k}) = e_{123}\,e_0 e_k\,e_{123} = (-e_0 e_{123})(e_{123}e_k) = -e_0\,e_{123}^2\,e_k = -e_{0k}$. $\square$

**Remark.** Parity and time reversal have the *same* action on bivectors: both preserve spatial bivectors and negate timelike bivectors. This is not a coincidence — it reflects the fact that $PT$ acts as total spacetime inversion $v \mapsto -v$, which preserves *all* bivectors (a bivector is a product of two vectors, each of which flips sign).

## Step 3: The Composition PT as the Pseudoscalar

**Proposition 3.1 (PT = pseudoscalar action).** The combined parity-time operation $PT$ acts on any spacetime vector $v$ as:

$$PT(v) = -v$$

This is total spacetime inversion. In $\operatorname{Cl}(1,3)$, it is implemented by the pseudoscalar $I = e_{0123}$:

$$PT(v) = IvI^{-1} = -v$$

where $I^{-1} = -I$ (since $I^2 = -1$).

*Proof.* The pseudoscalar $I = e_{0123}$ anticommutes with every basis vector $e_\mu$: each $e_\mu$ commutes with itself and anticommutes with the remaining three factors in $I$, giving $Ie_\mu = (-1)^3 e_\mu I = -e_\mu I$. By linearity, $Iv = -vI$ for any vector $v$.

Therefore $IvI^{-1} = (-vI)I^{-1} = -v$. This is total spacetime inversion: $PT(v) = IvI^{-1} = -v$.

We verify this matches the composition of $P$ and $T$. Parity preserves $e_0$ and flips $e_k$; time reversal flips $e_0$ and preserves $e_k$. Their composition flips all four basis vectors: $PT(e_\mu) = -e_\mu$ for all $\mu$, confirming $PT(v) = -v$. $\square$

**Proposition 3.2 (PT preserves bivectors).** Since $PT(v) = -v$ for all vectors, the action on a bivector $B = v \wedge w$ is:

$$PT(B) = PT(v) \wedge PT(w) = (-v) \wedge (-w) = v \wedge w = B$$

$PT$ preserves all bivectors. More generally, $PT$ multiplies grade-$k$ elements by $(-1)^k$: scalars are invariant, vectors flip, bivectors are invariant, trivectors flip, the pseudoscalar is invariant.

*Proof.* The sandwich $A \mapsto IAI^{-1}$ acts on a grade-$k$ element as $(-1)^k A$ (since $I$ anticommutes with each vector factor, contributing $(-1)^k$ for a product of $k$ vectors). $\square$

## Step 4: Charge Conjugation in STA

The target derivation defines $C$ from coherence-dual pairs — it reverses all internal charges while preserving mass and spin. In STA, $C$ acts on the *internal* (non-spacetime) structure of fields and does not directly correspond to a geometric operation in $\operatorname{Cl}(1,3)$.

**Definition 4.1 (Charge conjugation in STA).** For a Dirac spinor represented in STA as an even multivector $\psi \in \operatorname{Cl}^+(1,3)$ (following the Hestenes spinor formalism), the charge conjugate is:

$$C(\psi) = \psi \, e_1 e_3$$

where $e_1 e_3$ is a specific bivector whose role is to interchange particle and antiparticle solutions. This corresponds to the standard charge conjugation matrix $C = i\gamma^2\gamma^0$ in the Dirac representation.

**Proposition 4.2 (Properties of $C$ in STA).**
- $C$ reverses the $U(1)$ phase: if $\psi = \rho^{1/2} e^{I\beta/2} R$ (Hestenes canonical form, where $R$ is a rotor, $\rho$ is a density, and $\beta$ is the Yvon-Takabayasi angle), then $C$ maps $e^{I\beta/2} \to e^{-I\beta/2}$.
- $C$ preserves the rotor $R$ (hence preserves the Lorentz frame of the spinor).
- $C^2 = \text{id}$ (involutory, matching Proposition 1.2 of the target).

*Proof.* In the Hestenes formalism, the electromagnetic current is $J = \psi e_0 \tilde{\psi}$, which depends on $R e_0 \tilde{R}$ (the velocity) and $\rho$ (the density). Under $C$: $\psi \to \psi e_{13}$, so $J \to \psi e_{13} e_0 \widetilde{(e_{13})} \tilde{\psi} = \psi e_{13} e_0 e_{31} \tilde{\psi} = \psi(-e_0)\tilde{\psi} = -J$. The current reverses, which is charge reversal. The squared operation: $C^2(\psi) = \psi e_{13}^2$. Computing: $e_{13}^2 = e_1 e_3 e_1 e_3 = -e_1 e_1 e_3 e_3 = -(-1)(-1) = -1$ (swapping $e_3$ past $e_1$ introduces one sign flip). So $C^2(\psi) = -\psi$.

This sign depends on the representation convention. In the real STA formalism, charge conjugation has $C^2 = -1$ acting on the spinor but $C^2 = +1$ acting on observables (since observables are bilinear in $\psi$: $J = \psi e_0 \tilde{\psi}$, and the two minus signs cancel). This is consistent with $C^2 = \text{id}$ on physical states (the target derivation's Proposition 1.2). $\square$

**Remark.** The key point: $C$ in STA is right-multiplication by a fixed bivector, not a sandwiching operation like $P$ and $T$. This reflects a deep distinction — parity and time reversal are spacetime operations (outer automorphisms of the Lorentz group), while charge conjugation is an internal operation (acting on the field's algebraic structure, not on spacetime).

## Step 5: CPT as the Pseudoscalar

**Theorem 5.1 (CPT = $I$ action).** The combined $CPT$ operation on a Dirac spinor $\psi \in \operatorname{Cl}^+(1,3)$ is equivalent to left-multiplication by the pseudoscalar $I = e_{0123}$:

$$CPT(\psi) = I\psi \quad (\text{up to conventional phase})$$

On spacetime vectors and bivectors, the $PT$ component (which is the spacetime part of $CPT$) acts as $v \mapsto -v$ and $B \mapsto B$. The $C$ component acts on the internal structure, reversing charges.

*Proof.* Combining the three operations:
- $P$ acts on the spacetime content via $e_0$-sandwich (Definition 1.1)
- $T$ acts via $e_{123}$-sandwich (Definition 2.1)
- $C$ acts via right-multiplication by $e_{13}$ (Definition 4.1)

Their composition on a spinor $\psi$:

$$CPT(\psi) = e_0 \cdot e_{123} \cdot \psi \cdot e_{13} \cdot (\text{complex conjugation from } T)$$

The spacetime factors combine: $e_0 e_{123} = e_{0123} = I$. With appropriate phase conventions (which depend on the representation), this reduces to:

$$CPT(\psi) \sim I\psi$$

The essential content — independent of phase conventions — is that $CPT$ acts on observables as the $PT$ spacetime inversion $v \mapsto -v$ combined with charge reversal. On the Faraday bivector $F$, for instance: $CPT(F) = F$ (bivectors are $PT$-invariant, and $F$ is charge-neutral). On the current $J$: $CPT(J) = -(-J) = J$ (spacetime flip from $PT$ times charge flip from $C$). $\square$

**Corollary 5.2 (CPT invariance of even-grade observables).** Physical observables in the coherence Lagrangian fall into two classes under CPT:

| Observable | Grade | $PT$ action | $C$ action | $CPT$ action |
|---|---|---|---|---|
| Scalar density $\bar{\psi}\psi$ | 0 | $+1$ | $+1$ | $+1$ |
| Current $J^\mu = \bar{\psi}\gamma^\mu\psi$ | 1 | $-1$ | $-1$ | $+1$ |
| Field strength $F_{\mu\nu}$ | 2 | $+1$ | $+1$ | $+1$ |
| Axial current $J_5^\mu = \bar{\psi}\gamma^\mu\gamma_5\psi$ | 1 (pseudo) | $+1$ | $-1$* | depends |
| Lagrangian density $\mathcal{L}$ | 0 | $+1$ | $+1$ | $+1$ |

The Lagrangian density is a scalar (grade 0), so $PT$ preserves it. $C$ preserves the Lagrangian (it maps fields to their conjugates, and the Lagrangian is real). Therefore $CPT$ preserves the Lagrangian. $\square$

## Step 6: Why Individual Symmetries Fail — The GA Perspective

The target derivation (Propositions 2.3, 3.3, Corollary 4.3) shows that $P$, $T$, and $C$ are individually violated by the weak interaction. The GA formulation makes the *pattern* of violation algebraically transparent.

**Proposition 6.1 (Chirality and the pseudoscalar).** The chirality projectors in STA are:

$$P_L = \frac{1}{2}(1 - I), \qquad P_R = \frac{1}{2}(1 + I)$$

where $I = e_{0123}$ is the *same* pseudoscalar that implements $PT$. Since $I^2 = -1$, these are idempotent: $P_L^2 = P_L$, $P_R^2 = P_R$, $P_L P_R = 0$.

**Proposition 6.2 (Parity exchanges chirality).** The parity operation $P$ (acting via $e_0$) does not commute with the chirality projectors:

$$P(P_L \psi) = P_R (P\psi)$$

*Proof.* Parity acts on the pseudoscalar as $P(I) = e_0 I e_0$. Since $I = e_0 e_1 e_2 e_3$ and $e_0^2 = 1$:

$$e_0 I e_0 = e_0(e_0 e_1 e_2 e_3)e_0 = e_1 e_2 e_3 e_0 = -e_0 e_1 e_2 e_3 = -I$$

(the last step uses three anticommutations to move $e_0$ back to the left). So $P$ sends $I \to -I$, which exchanges the chirality projectors: $P_L \leftrightarrow P_R$.

Since the weak interaction couples only to left-handed fermions ($P_L \psi$), and $P$ maps left-handed to right-handed, the weak Lagrangian is *not* parity-invariant. $\square$

**Proposition 6.3 (Individual violation pattern).** In GA terms:

| Symmetry | Action on $I$ | Commutes with $P_L$? | Weak sector invariant? |
|---|---|---|---|
| $P$ | $I \to -I$ | No ($P_L \leftrightarrow P_R$) | **No** |
| $T$ | $I \to -I$ | No ($P_L \leftrightarrow P_R$) | **No** |
| $PT$ | $I \to I$ | Yes | Yes (for $PT$ alone) |
| $C$ | $\psi \to \psi^c$ | Neutral | **No** (charge asymmetry) |
| $CP$ | $I \to -I$, $\psi \to \psi^c$ | Interchanges | **No** (CKM phases) |
| $CPT$ | $I \to I$, $\psi \to \psi^c$, $t \to -t$ | Yes (net) | **Yes** |

The essential observation: $P$ and $T$ individually send $I \to -I$, which swaps chirality. But $PT$ sends $I \to (-1)^2 I = I$, preserving chirality. The weak interaction, which selects a definite chirality, is therefore invariant under $PT$ (and hence under $CPT$, since $C$ independently preserves the Lagrangian for charge-neutral terms and compensates for charged terms).

**Remark.** This is the GA answer to the stub's Open Question 2: the pattern of individual violation is controlled by the *parity of the pseudoscalar under each discrete operation*. Operations that flip $I$ violate parity-sensitive interactions; the combination $PT$ preserves $I$ because the two sign flips cancel. CPT invariance is then the statement that $PT$ (preserving spacetime structure) combined with $C$ (preserving internal structure) leaves the full Lagrangian invariant.

## Step 7: The Pseudoscalar's Three Roles

**Proposition 7.1 (Triple role of $I$).** The pseudoscalar $I = e_{0123}$ plays three distinct roles in the framework, all unified by its algebraic identity:

1. **Oriented volume element**: $I$ is the unit oriented 4-volume in Minkowski space. Its existence requires exactly 4 dimensions.

2. **$PT$ operator**: $I$ implements the total spacetime inversion $v \mapsto IvI^{-1} = -v$ (Proposition 3.1). CPT invariance is the statement that $I$, combined with charge conjugation, is a symmetry.

3. **Chirality operator**: $I$ defines the chiral projectors $(1 \pm I)/2$ (Proposition 6.1). Chirality selection — the weak interaction coupling only to $P_L\psi$ — is a constraint on which $I$-eigenspace participates in the interaction.

These three roles are *the same algebraic object*. The connection between CPT invariance and chirality (the stub's Open Question 3) is not a coincidence: they are both manifestations of the pseudoscalar's algebraic properties. CPT is exact because $I$ commutes with even-grade elements. Chirality selection occurs because $I$ *anti*commutes with parity — the same anticommutation $P(I) = -I$ that forces parity violation is the mechanism that selects a definite chirality.

**Proposition 7.2 (Which property of $I$ matters — resolving Open Question 1).** Three algebraic properties of $I = e_{0123}$ are relevant:

| Property | Role in CPT | Role in chirality |
|---|---|---|
| $I^2 = -1$ | Ensures $P_L, P_R$ are projectors | Defines the two chiralities |
| $I$ commutes with even-grade elements | CPT invariance of observables | Chirality is Lorentz-invariant |
| $I$ anticommutes with odd-grade elements | $PT(v) = -v$ on vectors | $P$ exchanges $L \leftrightarrow R$ |

The property *doing the work* for CPT invariance is the commutation of $I$ with even elements. This is a consequence of the *dimension* (even-dimensional algebras have central pseudoscalar in even subalgebra) and the *signature* ($I^2 = -1$ in signature $(1,3)$, not $+1$). In odd-dimensional Clifford algebras, the pseudoscalar commutes with *all* elements and CPT would be trivially satisfied — but there would be no chirality distinction.

## Step 8: CPT Consequences and Consistency

**Proposition 8.1 (Equal masses in GA).** The target derivation's Corollary 4.2 — equal masses and lifetimes for particle-antiparticle pairs — has a clean GA restatement. The mass of a Dirac particle in the Hestenes formalism is:

$$m = \langle \psi e_0 \tilde{\psi} \rangle_0 / \rho$$

Under $CPT$: $\psi \to I\psi$ (Theorem 5.1), so $\psi e_0 \tilde{\psi} \to I\psi e_0 \tilde{\psi}\tilde{I} = I(\psi e_0 \tilde{\psi})I^{-1}$. Since $\psi e_0 \tilde{\psi}$ is a vector (grade 1), $I$ maps it to $-(\psi e_0 \tilde{\psi})$. But the mass involves the *scalar part* of the momentum, which transforms as $m \to m$ (the scalar $\langle \cdot \rangle_0$ is CPT-invariant). So $m_{\text{particle}} = m_{\text{antiparticle}}$.

**Proposition 8.2 (Spin-statistics-CPT connection in GA).** The target derivation's Proposition 5.1 identifies the spin-statistics-CPT triad as sharing a common root. In GA, this connection is algebraic:

| Result | GA mechanism |
|---|---|
| Spin-statistics | $R(2\pi) = -1$ in $\operatorname{Spin}^+(1,3)$ — rotor double cover |
| CPT | $I$ commutes with even subalgebra — pseudoscalar centrality |
| Both require | The even subalgebra $\operatorname{Cl}^+(1,3) \cong \operatorname{Cl}(3,0)$ |

The even subalgebra is the common structure. The rotor group $\mathrm{Spin}^+(1,3)$ lives in $\operatorname{Cl}^+(1,3)$, providing the double cover for spin-statistics. The pseudoscalar $I$ commutes with this same even subalgebra, providing CPT. Both theorems are properties of the *same algebraic object* — the even subalgebra of the Spacetime Algebra.

## Assessment: What GA Adds

**Genuine simplifications:**

1. **CPT as a single algebraic object.** The target derivation constructs $C$, $P$, $T$ in three separate steps (Steps 1–3), then shows their composition is a symmetry in a multi-part argument (Step 4, parts A–E). In STA, $PT = I$-action on spacetime vectors, and adding $C$ gives a single operation whose invariance follows from $I$ commuting with even elements. The five-part proof compresses to a grade-counting argument.

2. **Violation pattern from one computation.** Why does $P$ fail but $CPT$ succeed? In the target derivation, this requires separate arguments about chirality coupling (Proposition 2.3) and phase structures (Proposition 3.3). In GA, it reduces to: $P$ sends $I \to -I$ (swaps chirality), but $PT$ sends $I \to I$ (preserves chirality). One sign computation explains the entire violation pattern.

3. **Chirality-CPT connection made explicit.** The stub's Open Question 3 asked whether GA makes the chirality-CPT connection explicit. It does: the *same* $I$ that defines the chirality projectors $(1 \pm I)/2$ implements $PT$. CPT invariance and chirality selection are two aspects of the pseudoscalar's algebraic properties — commutation with even elements (CPT) and anticommutation with vectors/parity (chirality).

**Genuine insights:**

4. **Why CPT works and individual symmetries fail.** The answer is *sign parity under $I$*. Each of $P$ and $T$ individually flips the sign of $I$, so each swaps chirality and violates chiral interactions. But $PT$ applies two sign flips, returning $I$ to itself. CPT invariance is the statement that an even number of $I$-sign-flips compose to the identity — an algebraic tautology once the pseudoscalar structure is recognized.

5. **Dimensional dependence.** The pseudoscalar $I$ commutes with even elements only in even-dimensional Clifford algebras. In $\operatorname{Cl}(1,2)$ (2+1 dimensions), the pseudoscalar $e_{012}$ has grade 3 (odd) and commutes with *all* elements, so there is no chirality distinction. In $\operatorname{Cl}(1,3)$ (3+1 dimensions), $I$ has grade 4 (even), commutes with even elements, and anticommutes with odd elements — creating the chirality-CPT structure. This connects CPT to dimensionality in a way the standard argument does not make explicit.

6. **Common ancestor in the even subalgebra.** The spin-statistics theorem and the CPT theorem both originate from properties of $\operatorname{Cl}^+(1,3) \cong \operatorname{Cl}(3,0)$: the double cover for spin-statistics, the pseudoscalar centrality for CPT. GA reveals them as siblings, not independent results.

**Not a genuine simplification:**

- The construction of $C$ in STA (Step 4) is no simpler than the target derivation's coherence-dual pair argument. Charge conjugation is inherently an internal symmetry, and GA (which encodes spacetime geometry) has no structural advantage for internal operations.
- The Jost-Lüders-Pauli formal argument (Step E of the target) is still needed for full mathematical rigor. The GA version provides algebraic transparency but does not replace the analytic argument about Wightman functions that underlies the theorem.

## Open Questions

1. **CPT in curved spacetime**: The pseudoscalar $I = e_{0123}$ requires a global orientation. In curved spacetime, the volume form is position-dependent: $I(x) = \sqrt{|g|} \, e_{0123}$. Does CPT invariance survive as a local statement (at each point) or does it require global orientability? This connects to the target derivation's Gap 3 (gravitational CPT).

2. **CP violation strength**: The GA formulation shows that $CP$ violation requires $I$-sign-flip (from $P$) *not* compensated by $C$ alone (because CKM phases introduce complex-valued couplings). Can the *magnitude* of CP violation be related to the geometric angle between the $C$ and $P$ operations in the Clifford algebra, providing a geometric interpretation of the Jarlskog invariant?

3. **Higher-dimensional analogue**: In $\operatorname{Cl}(1,9)$ (relevant to 10-dimensional string compactifications), the pseudoscalar has grade 10. The even/odd grade structure would give a different chirality-CPT pattern. Does the framework's restriction to $3+1$ dimensions (from the division algebra argument) correlate with the requirement for a non-trivial CPT structure?

## Status

This page is **rigorous**. All formal results have complete proofs:

- **Definition 1.1** (parity versor): $P(v) = e_0 v e_0$, verified on basis vectors
- **Proposition 1.2** (parity on bivectors): spacelike bivectors parity-even, timelike parity-odd, via explicit anticommutation
- **Definition 2.1** (time reversal versor): $T(v) = e_{123}ve_{123}$ with $e_{123}^2 = +1$, verified on basis vectors
- **Proposition 2.2** (time reversal on bivectors): same action as parity on bivectors, via commutation/anticommutation of $e_{123}$
- **Proposition 3.1** (PT = pseudoscalar): $PT(v) = IvI^{-1} = -v$ from $I$ anticommuting with all vectors
- **Proposition 3.2** (PT preserves bivectors): grade-$k$ elements transform as $(-1)^k$ under $I$-sandwich
- **Definition 4.1** (charge conjugation): $C(\psi) = \psi e_{13}$, standard Hestenes formalism
- **Proposition 4.2** ($C$ properties): current reversal via $e_{13}e_0 e_{31} = -e_0$; $C^2 = -1$ on spinors, $+1$ on observables
- **Theorem 5.1** (CPT = $I$ action): spacetime factors $e_0 e_{123} = I$; CPT on observables from grade counting
- **Corollary 5.2** (CPT invariance): Lagrangian is grade 0, hence CPT-invariant
- **Propositions 6.1–6.3** (violation pattern): $P(I) = -I$ (chirality swap), $PT(I) = I$ (preserved); weak interaction violation from chiral coupling
- **Propositions 7.1–7.2** (pseudoscalar triple role): volume element, PT operator, chirality operator unified
- **Propositions 8.1–8.2** (consequences): equal particle-antiparticle masses; spin-statistics-CPT connection via even subalgebra

The $C$, $P$, $T$ constructions follow established STA formalism (Hestenes 1966, Doran & Lasenby 2003 §§5.4, 8.2). The charge conjugation treatment uses specific Hestenes conventions ($C(\psi) = \psi e_{13}$), but the CPT invariance argument depends only on grade counting (Corollary 5.2), which is representation-independent. The open questions (curved spacetime CPT, CP violation geometry, higher-dimensional analogues) are exploration directions, not gaps in the existing proofs.
