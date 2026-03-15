---
title: "What Rigorous Means Here"
subtitle: "Structural argument, formal proof, and the epistemology of this framework"
order: 9
openingQuestion: "When a derivation is marked 'rigorous,' what does that actually mean? Is it a mathematical proof, a physical argument, or something else?"
physicsQuestions:
  - "What does 'rigorous' mean in the framework?"
  - "How does this differ from a formal mathematical proof?"
  - "What role do structural postulates play?"
  - "Which results have formal Lean proofs?"
relatedDerivations:
  - "axioms/coherence-conservation"
  - "interactions/bootstrap-division-algebras"
relatedPredictions: []
---

A fair question about any theoretical framework: when you call something "rigorous," what do you mean?

In pure mathematics, rigorous means formally proved — every step follows from axioms by rules of inference, checkable by machine. In physics, the standard is different. Einstein's field equations were used for 37 years before Choquet-Bruhat proved their well-posedness in 1952. The Dirac equation predicted the positron before anyone proved that the quantum field theory behind it was mathematically consistent. Physics routinely runs ahead of formal verification, and the results are no less real for it.

Observer-Centrism is a physics framework, not a mathematics paper. But it takes mathematical rigor seriously — more seriously than most physics — and it is explicit about where it achieves formal proof and where it relies on structural argument. This chapter explains the distinction.

## Three Tiers of Rigor

Every claim in the framework falls into one of three categories.

**Tier 1: Formal proof.** The statement follows from established mathematics — theorems with published proofs in the mathematical literature — combined with the three axioms. These results could be checked by a proof assistant. Examples:

- Hurwitz's theorem: the only normed division algebras over $\mathbb{R}$ are $\mathbb{R}$, $\mathbb{C}$, $\mathbb{H}$, $\mathbb{O}$ (1898)
- The fundamental group $\pi_1(SO(d))$ is $\mathbb{Z}_2$ for $d \geq 3$ (standard homotopy theory)
- Gleason's theorem: the unique probability measure on a Hilbert space of dimension $\geq 3$ is the Born rule (1957)
- Lieb–Ruskai strong subadditivity of von Neumann entropy (1973)
- Aczél's functional equation theorem: unique continuous solution to $f(rs) = f(r)f(s)$ is $f(r) = r^\alpha$ (1966)
- Lovelock's theorem: the unique second-order divergence-free tensor in 4 dimensions is the Einstein tensor (1971)

When the framework invokes these theorems, the rigor is borrowed from their original proofs. The framework's contribution is showing that the *premises* of these theorems are satisfied by the axioms.

**Tier 2: Rigorous given axioms.** The logical chain from axioms to conclusion is complete, with every step explicit, but one or more structural postulates are required as additional input. These postulates are not derived from the axioms — they are motivated assumptions about the mathematical setting (e.g., smooth manifold structure, symplectic geometry, locality).

The framework currently uses 14 active structural postulates. Each is:
- Named and numbered (e.g., "Electromagnetism S1: Locality of phase comparison")
- Stated precisely enough to check
- Motivated by physical reasoning
- Tracked on the [Structural Postulates](/postulates) page

Six former postulates have been promoted to theorems as the framework has developed. Promoting postulates to theorems — reducing the assumption count — is a primary form of progress.

**Tier 3: Structural argument.** The derivation identifies the unique mathematical structure compatible with the axiom constraints, using plausibility, analogy, or dimensional analysis alongside rigorous steps. The conclusion is well-supported but the argument is not a deductive proof.

Structural arguments are clearly marked. They typically appear in "Remarks" or carry qualifiers like "this motivates" or "the natural identification is." They are the physics — the insight that connects formal mathematics to the physical world — and they are the parts most in need of future formalization.

## What "Rigorous" Status Means

A derivation marked "rigorous" satisfies four criteria:

1. **Complete chain.** Every step from axioms to conclusion is written out, with no gaps marked "obvious" or "left to the reader."
2. **Dependencies explicit.** Every derivation lists its upstream dependencies (`dependsOn`). If derivation B depends on A, then A must itself be at least rigorous.
3. **Postulates explicit.** Every structural postulate used is named, numbered, and listed on the postulates page.
4. **Gaps documented.** Open gaps — places where the argument is incomplete or where a stronger result is conjectured — are listed in the "Open Gaps" section.

What it does *not* mean:
- It does not mean every step has a Lean proof
- It does not mean no structural postulates are used
- It does not mean the result is beyond challenge

The framework distinguishes status ("rigorous") from rigor level ("formal" / "semi-formal" / "informal"), acknowledging that a complete logical chain can still contain semi-formal steps.

## Lean Proofs

Selected propositions have formal Lean 4 proofs:

- **Hurwitz dimensions**: The only normed division algebras have dimension 1, 2, 4, or 8 (`ObserverCentrism.Algebra.HurwitzNormed`)
- **Sedenion non-division**: The sedenions ($\dim = 16$) are not a division algebra (`ObserverCentrism.Gauge.SedenionNonDivision`)

These cover specific algebraic facts — the inputs to the division algebra argument — not the full physical derivation. Extending Lean coverage is an ongoing project. The most valuable targets for formalization are the structural arguments in Tier 3 that would benefit most from mechanical verification.

## The Role of Structural Postulates

Structural postulates are the framework's most honest feature. Rather than hiding assumptions in notation or burying them in "it is well known that," each assumption beyond the three axioms is given a name, tracked, and targeted for promotion.

The trajectory has been one of steady reduction:
- Loop Closure S2 (Riemannian metric) was promoted to a theorem via Weyl averaging
- Lorentz Invariance S1 (homogeneity) was promoted to a theorem via position-independence of the axioms
- Gravity S1 (metric–density coupling) was promoted via action duality and coherence subadditivity
- Weak Interaction S1 and Color Force S1 were promoted via the division algebra bootstrap
- Born Rule S1 (amplitude–coherence identification) was promoted via the Cauchy multiplicative equation uniqueness argument

Each promotion reduces the assumption count and narrows the gap between "structural argument" and "formal proof." Fourteen active postulates remain. Whether all can eventually be promoted, or whether some represent genuinely independent input that the three axioms cannot determine, is itself an open question.

## What Would Strengthen the Framework

For the skeptic who finds structural arguments insufficient, the most productive challenges are:

1. **Formalize a structural argument.** Take a Tier 3 argument and either prove it rigorously or show it fails — both outcomes advance understanding.
2. **Derive a structural postulate.** Show that one of the 14 active postulates follows from the axioms, or prove it is independent. Independence results are as valuable as derivations.
3. **Extend the Lean coverage.** Formalize more propositions, particularly the composition and uniqueness arguments in the Born rule and bootstrap derivations.
4. **Find a counterexample.** Construct a model satisfying the three axioms (including Axiom 1's conditions C1–C5) but producing physics different from the Standard Model. This would show the axioms are insufficient and identify what additional structure is needed.

The framework welcomes all four. What it does not welcome is the conflation of "not formally proved" with "not rigorous." The distinction matters: Einstein's field equations were rigorous physics in 1915, even though they were not formally proved until 1952. The derivations in this framework are held to a comparable standard — complete logical chains with explicit assumptions, awaiting formal verification where it has not yet been achieved.
