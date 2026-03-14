---
title: "Lorentz Group via STA Rotors"
status: "stub"
gaStructure: "Cl(1,3)"
targetDerivation: "spacetime/lorentz-invariance"
tags: ["spacetime-algebra", "rotors", "geometric-algebra"]
summary: "Spacetime Algebra Cl(1,3) unifies boosts and rotations as rotors in the even subalgebra, making Lorentz invariance algebraically manifest"
priority: "high"
lastUpdated: 2026-03-13
---

## Connection to Framework Derivation

**Target**: [Lorentz Invariance](/derivations/spacetime/lorentz-invariance) (status: rigorous)

The Lorentz invariance derivation establishes that the symmetry group of spacetime is the Lorentz group $\mathrm{SO}^+(1,3)$, arising from the framework's axioms via the pseudo-Riemannian structure of the observer's state space. The proof constructs boosts and rotations as separate transformations and shows they form the proper orthochronous Lorentz group.

In Spacetime Algebra (STA), $\operatorname{Cl}(1,3)$, the distinction between boosts and rotations dissolves: both are rotors $R = e^{-B\theta/2}$ in the even subalgebra $\operatorname{Cl}^+(1,3) \cong \mathrm{Spin}^+(1,3)$. A spacelike bivector $B$ generates a spatial rotation; a timelike bivector generates a boost. The Lorentz group structure becomes a single algebraic statement about the rotor group.

## GA Structure

Primary algebra: $\operatorname{Cl}(1,3)$ with orthonormal basis $\{e_0, e_1, e_2, e_3\}$ where $e_0^2 = +1$ and $e_k^2 = -1$ for $k = 1,2,3$.

Key objects to develop:

1. **Bivector basis**: Six bivectors spanning the Lorentz algebra -- three spatial ($e_{23}, e_{31}, e_{12}$, generating rotations) and three temporal ($e_{01}, e_{02}, e_{03}$, generating boosts).
2. **Spatial rotor**: $R = e^{-e_{12}\theta/2}$ for a rotation by angle $\theta$ in the $e_1 e_2$-plane. Satisfies $R\tilde{R} = 1$ and $R^2_{2\pi} = -1$ (double cover).
3. **Boost rotor**: $R = e^{-e_{01}\phi/2}$ for a boost with rapidity $\phi$ along $e_1$. Since $e_{01}^2 = +1$, the exponential gives hyperbolic functions: $R = \cosh(\phi/2) - e_{01}\sinh(\phi/2)$.
4. **Lorentz transformation**: Any proper orthochronous Lorentz transformation acts as $x \mapsto Rx\tilde{R}$ on spacetime vectors $x = x^\mu e_\mu$.
5. **Velocity addition**: Composition of two boost rotors $R_1 R_2$ automatically produces Thomas-Wigner rotation, with the rotation angle readable from the bivector part of the product.

## Open Questions

1. **Algebraic derivation of signature**: The framework derives the Lorentz group from the axioms via structural postulate S1 (pseudo-Riemannian structure). Can the GA formulation provide a more direct route -- does the requirement that rotors form a group with both compact and non-compact generators constrain the signature to $(1,3)$ or $(3,1)$?

2. **Thomas precession from rotors**: Thomas-Wigner rotation emerges automatically from non-commutativity of boost rotors. Does this provide a cleaner derivation than the standard infinitesimal approach, and does it connect to the framework's coherence transport?

3. **Connection to loop closure**: The rotor $R = e^{-B\theta/2}$ returning to $\pm 1$ after a full period parallels the loop closure axiom. Is this coincidence or does GA make the connection between Lorentz structure and Axiom 3 more explicit?

## Status

This is a **stub** -- an initial assessment identifying the GA connection and key questions. Full development would rewrite the Lorentz invariance proof in STA language and evaluate whether the unified rotor treatment provides genuine simplification of the derivation steps.
