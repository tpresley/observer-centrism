---
title: "What Derived Means Here"
subtitle: "Structural argument, formal proof, and the epistemology of this framework"
order: 9
openingQuestion: "When a derivation is marked 'derived,' what does that actually mean? Is it a mathematical proof, a physical argument, or something else?"
physicsQuestions:
  - "What does 'derived' mean in the framework?"
  - "How does this differ from a formal mathematical proof?"
  - "What role do structural postulates play?"
  - "Which results have formal Lean proofs?"
relatedDerivations:
  - "axioms/coherence-conservation"
  - "interactions/bootstrap-division-algebras"
relatedPredictions: []
---

When the framework marks a result as "derived," it means the derivation chain from axioms to conclusion is complete — every step is written out, every dependency is listed, and no additional structural postulates are required. It does not mean the result has been formally verified by a proof assistant, and it does not mean the result is beyond challenge. It means the *argument* is complete: any error must lie in the axioms themselves or in an upstream derivation, not in a missing step.

This is a developing research project, not established science. The framework takes mathematical rigor seriously — more seriously than most theoretical physics — but it is also honest about the difference between a complete derivation chain and a formal proof. This chapter explains the distinction and the framework's classification system.

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

**Tier 2: Complete chain given postulates.** The logical chain from axioms to conclusion is complete, with every step explicit, but one or more structural postulates are required as additional input. These postulates are not derived from the axioms — they are motivated assumptions about the mathematical setting (e.g., smooth manifold structure, symplectic geometry, locality).

The framework currently uses {{activePostulateCount}} active structural postulates. Each is:
- Named and numbered (e.g., "Electromagnetism S1: Locality of phase comparison")
- Stated precisely enough to check
- Motivated by physical reasoning
- Tracked on the [Structural Postulates](/postulates) page

{{nowTheoremCount}} former postulates have been promoted to theorems as the framework has developed. Promoting postulates to theorems — reducing the assumption count — is a primary form of progress.

**Tier 3: Structural argument.** The derivation identifies the unique mathematical structure compatible with the axiom constraints, using plausibility, analogy, or dimensional analysis alongside rigorous steps. The conclusion is well-supported but the argument is not a deductive proof.

Structural arguments are clearly marked. They typically appear in "Remarks" or carry qualifiers like "this motivates" or "the natural identification is." They are the physics — the insight that connects formal mathematics to the physical world — and they are the parts most in need of future formalization.

## What "Derived" Status Means

A derivation marked "derived" satisfies four criteria:

1. **Complete chain.** Every step from axioms to conclusion is written out, with no gaps marked "obvious" or "left to the reader."
2. **Dependencies explicit.** Every derivation lists its upstream dependencies (`dependsOn`). If derivation B depends on A, then A must itself be at least derived.
3. **Postulates explicit.** Every structural postulate used is named, numbered, and listed on the postulates page.
4. **Gaps documented.** Open gaps — places where the argument is incomplete or where a stronger result is conjectured — are listed in the "Open Gaps" section.

What it does *not* mean:
- It does not mean every step has a Lean proof
- It does not mean no structural postulates are used
- It does not mean the result is beyond challenge

A "derived" result has a complete derivation chain from the three axioms with no additional structural postulates required. This does not mean the result is certainly correct — it means the *argument* is complete, and any error must lie in the axioms themselves or in an upstream derivation, not in a missing step.

The framework distinguishes status ("derived") from rigor level ("formal" / "semi-formal" / "informal"), acknowledging that a complete logical chain can still contain semi-formal steps.

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

Each promotion reduces the assumption count and narrows the gap between "structural argument" and "formal proof." {{activePostulateCount}} active postulates remain. Whether all can eventually be promoted, or whether some represent genuinely independent input that the three axioms cannot determine, is itself an open question.

## What "Exists" Means Here

The framework's structure — in which observers, geometry, and the coherence measure are all fundamental and none reduces to the others — implies that "exists" is not a single category. The framework naturally produces three distinct modes of existence:

- **Ontic-structural**: the relational invariant network. Conserved, definite, constraining — but never fully observable by any finite observer. The physical state.
- **Epistemic-constitutive**: geometry, measurement outcomes. Not "out there" independently — constituted by the consistency requirements of accessible relational invariants at a specific observer level. Observer-dependent but not subjective (the consistency solution is unique). Deconstitutes when its observers dissolve.
- **Descriptive-mathematical**: the continuous coherence topology. Indispensable for expressing gauge symmetry, field equations, and smooth dynamics — but not a physical carrier of coherence. The language in which the physical state is most completely expressed.

These are not a hierarchy (none is "more real"). They are complementary aspects of a reality that has physical content, observer-constituted structure, and mathematical form. Collapsing them into a single binary — "exists" vs. "doesn't exist" — produces the debates that physics has been having for a century about wavefunctions, spacetime, and holographic duals.

For the full treatment, see [On Existence](/on-existence).

## What Would Strengthen the Framework

For the skeptic who finds structural arguments insufficient, the most productive challenges are:

1. **Formalize a structural argument.** Take a Tier 3 argument and either prove it rigorously or show it fails — both outcomes advance understanding.
2. **Derive a structural postulate.** Show that one of the {{activePostulateCount}} active postulates follows from the axioms, or prove it is independent. Independence results are as valuable as derivations.
3. **Extend the Lean coverage.** Formalize more propositions, particularly the composition and uniqueness arguments in the Born rule and bootstrap derivations.
4. **Find a counterexample.** Construct a model satisfying the three axioms (including Axiom 1's conditions C1–C5) but producing physics different from the Standard Model. This would show the axioms are insufficient and identify what additional structure is needed.

The framework welcomes all four. Progress happens when assumptions are reduced, arguments are tightened, and the gap between structural argument and formal proof narrows. The label "derived" is a claim about the completeness of the argument, not a claim about its certainty. The framework puts its reasoning on the table — explicitly, traceably, with every assumption named — and invites scrutiny.
