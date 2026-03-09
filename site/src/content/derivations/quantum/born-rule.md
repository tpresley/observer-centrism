---
title: "Born Rule from Coherence Conservation"
status: "draft"
dependsOn: ["interactions/relational-invariants", "thermodynamics/time"]
enablesDerivation: ["quantum/preferred-basis"]
tags: ["quantum"]
summary: "Probability = |amplitude|² is the unique measure consistent with coherence conservation and the U(1) phase structure"
rigorLevel: "semi-formal"
sourceSection: "12-quantum-mechanics"
lastUpdated: 2026-03-08
---

## Statement

The Born rule -- the prescription that the probability of measurement outcome $k$ is $P(k) = |\psi_k|^2 = |\langle k | \psi \rangle|^2$ -- follows from coherence conservation and the $U(1)$ phase structure of observers. It is the **unique** probability assignment compatible with unitarity, the phase structure of observer loops, and the composition rule for sequential measurements.

## Derivation

### Step 1: Amplitudes from Coherence-Weighted Path Sums

From [Action and Planck's Constant](/derivations/thermodynamics/action-planck), physical trajectories are selected by coherence resonance: the amplitude for a transition between interaction events is a sum over all paths, each weighted by its coherence phase:

$$\psi(B|A) = \sum_{\text{paths } \gamma: A \to B} e^{i S[\gamma]/\hbar}$$

where $S[\gamma]$ is the coherence cost (action) of path $\gamma$, and $\hbar$ is the minimal cycle cost. This sum ranges over all admissible paths in the interaction graph $\mathcal{G}$ connecting events $A$ and $B$.

The amplitude $\psi(B|A)$ is a complex number whose phase encodes the net coherence relationship between events $A$ and $B$, and whose modulus encodes the degree of coherence reinforcement across paths.

### Step 2: The Measurement Setup

Consider an observer $\mathcal{O}$ (the measurer) interacting with a system $S$ via a [Type III interaction](/derivations/interactions/three-types). Before the interaction, $S$ is described (relative to $\mathcal{O}$) by the amplitude distribution:

$$|\psi\rangle = \sum_k \psi_k |k\rangle$$

where $\{|k\rangle\}$ are the possible outcomes -- the basis determined by the [relational invariant structure](/derivations/interactions/relational-invariants) of the $\mathcal{O}$-$S$ interaction (to be formalized in [Preferred Basis from Relational Invariants](/derivations/quantum/preferred-basis)).

We seek the probability $P(k)$ that $\mathcal{O}$ registers outcome $k$ after the interaction.

### Step 3: Constraints from Coherence Conservation

The probability assignment $P(k)$ must satisfy three constraints, each rooted in the axioms:

**Constraint 1: Normalization (from coherence conservation).** The total coherence flowing into the measurement interaction must equal the total coherence flowing out. Since exactly one outcome must occur:

$$\sum_k P(k) = 1, \qquad P(k) \geq 0$$

This is unitarity restated as a probability condition. It follows from [Coherence Conservation](/derivations/axioms/coherence-conservation) (Axiom 1): coherence is neither created nor destroyed, so the total probability weight is conserved.

**Constraint 2: Phase covariance (from $U(1)$ structure).** Each minimal observer has a $U(1)$ loop structure. The probability of an outcome cannot depend on the absolute phase of the observer or system -- only on phase **differences** encoded in relational invariants. Formally: if $|\psi\rangle \mapsto e^{i\alpha}|\psi\rangle$ (a global phase rotation), then $P(k)$ must be unchanged.

This requires $P(k)$ to depend on $\psi_k$ only through a phase-invariant quantity. The simplest such quantity is $|\psi_k|^2 = \psi_k^* \psi_k$.

**Constraint 3: Composition rule (from interaction graph structure).** For sequential measurements -- first measuring at an intermediate stage $B$, then at a final stage $C$ -- the probabilities must compose consistently. The probability of reaching $C$ from $A$ via all possible intermediate outcomes $B$ must satisfy:

$$P(A \to C) = \sum_B P(A \to B) \cdot P(B \to C)$$

At the amplitude level, this is the composition of path sums:

$$\psi(C|A) = \sum_B \psi(C|B) \cdot \psi(B|A)$$

The probability rule must be consistent with this amplitude composition.

### Step 4: Uniqueness of the Born Rule

**Claim.** The unique probability assignment satisfying all three constraints is:

$$\boxed{P(k) = |\psi_k|^2 = |\langle k | \psi \rangle|^2}$$

*Argument.*

From Constraint 2, $P(k) = f(|\psi_k|^2)$ for some function $f: [0, \infty) \to [0, 1]$.

From Constraint 1, $\sum_k f(|\psi_k|^2) = 1$ for all valid amplitude distributions (all $\{\psi_k\}$ with $\sum_k |\psi_k|^2 = 1$, which itself follows from coherence conservation applied to the state).

From Constraint 3, $f$ must satisfy the composition rule. Consider a two-stage measurement with an intermediate basis $\{|b\rangle\}$. The amplitude from $|a\rangle$ to $|c\rangle$ via $|b\rangle$ is $\psi(c|a) = \sum_b \psi(c|b)\psi(b|a)$. The probability rule must give:

$$f(|\psi(c|a)|^2) = f\!\left(\left|\sum_b \psi(c|b)\psi(b|a)\right|^2\right)$$

and this must be consistent with:

$$P(a \to c) = \sum_b P(a \to b) \cdot P(b \to c) = \sum_b f(|\psi(b|a)|^2) \cdot f(|\psi(c|b)|^2)$$

For these to agree for **all** choices of amplitudes, $f$ must be the identity: $f(x) = x$. Any nonlinear $f$ would fail the composition rule for generic amplitude distributions, because the cross-terms from $|\sum_b \cdot|^2$ would not be captured by $\sum_b f(\cdot) \cdot f(\cdot)$.

Therefore $P(k) = |\psi_k|^2$.

### Step 5: Why the State Space Is a Hilbert Space

The preceding argument assumes that the amplitudes $\psi_k$ live in a complex vector space with an inner product -- i.e., a Hilbert space. The framework derives this structure rather than postulating it:

1. **Complex amplitudes**: Each observer has a $U(1)$ phase, so amplitudes carry phase information. The natural algebraic structure for $U(1)$-valued quantities summed over paths is $\mathbb{C}$.

2. **Linearity**: The path sum $\psi(B|A) = \sum_\gamma e^{iS[\gamma]/\hbar}$ is linear in the sense that amplitudes from disjoint sets of paths add. This linearity of coherence superposition gives the vector space structure.

3. **Inner product**: Coherence conservation requires that the total coherence $\sum_k |\psi_k|^2$ is preserved under the transformations corresponding to observer interactions. This preservation condition defines a positive-definite sesquilinear form -- an inner product -- making the state space a Hilbert space.

The Born rule is therefore not an additional postulate layered onto Hilbert space quantum mechanics. The Hilbert space structure and the Born rule emerge together from the same source: coherence conservation on a network of $U(1)$-structured observers.

### Step 6: Connection to Gleason's Theorem

Gleason's theorem (1957) provides independent mathematical confirmation: in a Hilbert space of dimension $\geq 3$, the **only** probability measure on the lattice of closed subspaces that is additive over orthogonal subspaces is the Born rule $P(k) = \text{Tr}(\rho \, |k\rangle\langle k|)$.

The framework's contribution is not to reprove Gleason's theorem, but to answer the question Gleason's theorem leaves open: **why is the state space a Hilbert space in the first place?** The answer (Step 5) is that Hilbert space structure is forced by coherence conservation combined with the $U(1)$ loop structure of observers.

The logical chain is:

$$\text{Axioms} \to U(1) \text{ loops} \to \mathbb{C}\text{-amplitudes} \to \text{Hilbert space} \xrightarrow{\text{Gleason}} \text{Born rule}$$

Steps 3-4 above provide the physical derivation; Gleason's theorem provides the mathematical guarantee that no alternative is possible.

### Step 7: The Frequency Interpretation

For repeated measurements on identically prepared systems, the law of large numbers applied to the Born rule gives the frequency interpretation: in $N$ trials, the fraction of outcomes $k$ converges to $|\psi_k|^2$ as $N \to \infty$.

This is a standard probabilistic result, but the framework gives it a structural interpretation: each trial is an independent Type III interaction generating a relational invariant between observer and system. The fraction $|\psi_k|^2$ represents the proportion of total coherence that flows through the $k$-th channel. Over many trials, the statistical distribution of relational invariants reflects the coherence distribution.

## Rigor Assessment

**What is established:**
- The three constraints (normalization, phase covariance, composition) are physically well-motivated from the axioms
- The uniqueness argument for $f(x) = x$ follows from the composition constraint, and is supported by Gleason's theorem as an independent mathematical proof
- The $U(1)$ loop structure of observers forces complex amplitudes, which is the entry point to Hilbert space structure

**What needs work:**
- The uniqueness argument in Step 4 is presented at the level of plausibility rather than full proof. A rigorous version would need to handle degenerate cases (e.g., $\psi_k = 0$) and infinite-dimensional Hilbert spaces
- The derivation of the inner product from coherence conservation (Step 5, point 3) relies on the identification of $\sum_k |\psi_k|^2$ as coherence content, which needs the coherence measure $\mathcal{C}$ to be made explicit
- Gleason's theorem requires dimension $\geq 3$. The framework should explain why physical Hilbert spaces satisfy this condition (likely from the [multiplicity of minimal observers](/derivations/minimal-observer/multiplicity))

## Open Gaps

1. **Two-dimensional systems**: Gleason's theorem fails in dimension 2 (qubits). The framework needs to address whether the Born rule for qubits follows from the axioms by a separate argument, or whether qubits are always embedded in higher-dimensional spaces (e.g., as subsystems).
2. **Continuous observables**: The derivation uses discrete outcomes $\{|k\rangle\}$. Extension to continuous spectra (position, momentum) requires the measure-theoretic version: $dP = |\psi(x)|^2 dx$. This should follow from the same coherence arguments in the continuum limit.
3. **Mixed states and density matrices**: The derivation addresses pure states. For mixed states $\rho$, the Born rule generalizes to $P(k) = \text{Tr}(\rho \, |k\rangle\langle k|)$. This should follow from the [entropy derivation](/derivations/thermodynamics/entropy), where mixed states arise from inaccessible coherence.
4. **Non-projective measurements (POVMs)**: General quantum measurements are described by positive operator-valued measures, not just projective measurements. The framework should derive the POVM formalism as a consequence of partial Type III interactions (where the observer does not fully resolve the system's state).
