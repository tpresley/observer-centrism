---
title: "Chirality as Grade Structure"
status: "stub"
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

The chirality selection derivation establishes that the weak interaction couples exclusively to left-handed fermions (and right-handed antifermions). The proof shows that the bootstrap mechanism at the quaternionic level generates a gauge coupling that respects a chirality projection, and that the choice of handedness is a spontaneous symmetry breaking of a topological orientation.

In $\operatorname{Cl}(1,3)$, chirality is governed by the pseudoscalar $I = e_{0123}$. The standard chirality projectors $P_L = \tfrac{1}{2}(1 - \gamma_5)$ and $P_R = \tfrac{1}{2}(1 + \gamma_5)$ become $P_L = \tfrac{1}{2}(1 - I)$ and $P_R = \tfrac{1}{2}(1 + I)$ in STA. These project onto the two eigenspaces of the pseudoscalar, which correspond to self-dual and anti-self-dual components of spinor fields. The weak interaction's left-handedness becomes the statement that it couples to one eigenspace of $I$ and not the other.

## GA Structure

Primary algebra: $\operatorname{Cl}(1,3)$ with pseudoscalar $I = e_{0123}$, satisfying $I^2 = -1$.

Key objects to develop:

1. **Chirality operator**: $I = e_{0123}$ acting on spinors via right-multiplication (in the STA formulation). Its eigenvalues are $\pm i$ (or $\pm 1$ depending on convention), defining left and right chiral subspaces.
2. **Chirality projectors**: $P_L = \tfrac{1}{2}(1 - I)$ and $P_R = \tfrac{1}{2}(1 + I)$, satisfying $P_L^2 = P_L$, $P_R^2 = P_R$, $P_L P_R = 0$, $P_L + P_R = 1$. These decompose any spinor into chiral components.
3. **Chiral spinor decomposition**: A Dirac spinor $\psi$ splits as $\psi = \psi_L + \psi_R$ where $\psi_L = P_L \psi$ and $\psi_R = P_R \psi$. In the massless limit, these components decouple and satisfy separate equations of motion.
4. **Weak coupling restriction**: The $\mathrm{SU}(2)_L$ gauge connection acts only on $\psi_L$: the covariant derivative is $D_\mu \psi_L = \partial_\mu \psi_L + \tfrac{g}{2}W_\mu^a \sigma_a \psi_L$, while $\psi_R$ sees only $\mathrm{U}(1)_Y$.
5. **Orientation and spontaneous choice**: The choice of $P_L$ over $P_R$ corresponds to choosing an orientation of the pseudoscalar ($I$ vs $-I$). This is a topological choice -- the two orientations of $\operatorname{Cl}(1,3)$ are algebraically equivalent, so the selection is spontaneous.

## Open Questions

1. **Chirality from grade eigenspaces**: In GA, the pseudoscalar $I$ defines a $\mathbb{Z}_2$-grading of the algebra into self-dual and anti-self-dual parts. Is the weak interaction's chirality selection a statement that the gauge coupling is restricted to one part of this $\mathbb{Z}_2$-grading? If so, does this restriction follow from the algebraic structure, or is it an independent physical input?

2. **Mass and chirality mixing**: Fermion masses mix left and right chiralities ($m\bar{\psi}\psi = m\bar{\psi}_L\psi_R + m\bar{\psi}_R\psi_L$). In GA, this mixing is a coupling between the two $I$-eigenspaces. Does the GA formulation illuminate why mass generation (Higgs mechanism) must simultaneously break electroweak symmetry and mix chiralities?

3. **CPT and chirality**: The pseudoscalar $I$ governs both CPT (as shown in the [CPT stub](/geometric-algebra/cpt-theorem)) and chirality. This double role suggests a deep connection. Does the GA formulation make explicit why CPT is exact while chirality selection is spontaneous?

## Status

This is a **stub** -- an initial assessment identifying the GA connection and key questions. Full development would translate the chirality selection derivation into STA language and evaluate whether the pseudoscalar formulation provides genuine insight into the origin of maximal parity violation.
