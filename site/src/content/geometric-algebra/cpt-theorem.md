---
title: "CPT as a Single Cl(1,3) Object"
status: "stub"
gaStructure: "Cl(1,3)"
targetDerivation: "particles/cpt-theorem"
tags: ["spacetime-algebra", "discrete-symmetries", "geometric-algebra"]
summary: "C, P, and T map to specific Cl(1,3) operations whose composition is the pseudoscalar I = e0123, making CPT invariance algebraically immediate"
priority: "high"
lastUpdated: 2026-03-13
---

## Connection to Framework Derivation

**Target**: [CPT Theorem](/derivations/particles/cpt-theorem) (status: rigorous)

The CPT theorem derivation establishes that the combined operation of charge conjugation (C), parity inversion (P), and time reversal (T) is an exact symmetry of any observer satisfying the three axioms. The proof proceeds by showing that each discrete symmetry corresponds to a specific transformation of the observer's coherence structure, and their composition leaves all physical observables invariant.

In $\operatorname{Cl}(1,3)$, the three discrete symmetries map to specific algebraic operations, and their composition is simply the pseudoscalar $I = e_{0123}$. CPT invariance reduces to the statement that $I$ commutes with all even-grade elements -- and since all physical observables are even-grade (scalars, bivectors, or grade-4), CPT invariance becomes an algebraic identity rather than a theorem requiring proof.

## GA Structure

Primary algebra: $\operatorname{Cl}(1,3)$ with pseudoscalar $I = e_{0123}$, satisfying $I^2 = -1$.

Key objects to develop:

1. **Parity (P)**: Spatial inversion $e_0 \mapsto e_0$, $e_k \mapsto -e_k$. In GA, this is the grade automorphism restricted to vectors: $P(v) = e_0 v e_0$ for spacetime vectors $v$.
2. **Time reversal (T)**: Temporal inversion $e_0 \mapsto -e_0$, $e_k \mapsto e_k$. In GA: $T(v) = -e_0 v e_0$ applied with an additional sign convention for spinor fields.
3. **Charge conjugation (C)**: Reversal of internal phase, mapping a spinor $\psi$ to its charge conjugate. In STA, this corresponds to reversion combined with right-multiplication by a fixed element.
4. **CPT composition**: The combined operation $CPT$ acts on multivectors as multiplication by $I = e_{0123}$. Since $I$ is the pseudoscalar, it maps each grade-$k$ element to a grade-$(4-k)$ element (Hodge duality).
5. **Invariance of observables**: Physical observables (scalars $\langle \cdot \rangle_0$ and bivector field strengths $\langle \cdot \rangle_2$) satisfy $I M \tilde{I} = M$ for even-grade $M$, because $I$ commutes with even elements in $\operatorname{Cl}(1,3)$.

## Open Questions

1. **CPT from pseudoscalar properties**: If CPT invariance is equivalent to the algebraic properties of $I = e_{0123}$, can the GA formulation identify *which* properties of $I$ are doing the work? Specifically, is it $I^2 = -1$, the commutation with even elements, or the duality operation that is essential?

2. **Individual symmetry violation**: C, P, and T are individually violable (the weak interaction violates P and CP). In GA terms, this means the individual operations $e_0 v e_0$, etc., do not separately commute with the interaction bivectors. Can GA make the pattern of individual violation more transparent?

3. **Connection to chirality**: The pseudoscalar $I$ also defines the chirality projectors $(1 \pm I)/2$. The fact that the same algebraic object governs both CPT invariance and chirality selection suggests a deep connection. Does the GA formulation make this connection explicit?

## Status

This is a **stub** -- an initial assessment identifying the GA connection and key questions. Full development would translate the CPT proof into STA operations and evaluate whether the pseudoscalar formulation provides genuine insight into why CPT is exact while its individual components are not.
