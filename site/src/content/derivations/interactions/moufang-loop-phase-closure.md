---
title: "Moufang-Loop Phase Closure"
status: "provisional"
dependsOn: ["axioms/loop-closure", "axioms/observer-definition", "minimal-observer/structure", "interactions/bootstrap", "interactions/bootstrap-division-algebras", "foundation/observer-holographic-equivalence"]
enablesDerivation: []
tags: ["foundation", "bootstrap", "algebra", "topology"]
summary: "Axiom 3 loop closure requires the phase space at each bootstrap level to admit a closed multiplication — a Moufang-loop structure for n = 3 (octonions) or a Lie group structure for n ≤ 2 (reals, complex, quaternions). This is available exactly for the four real composition algebras ℝ, ℂ, ℍ, 𝕆 (Hurwitz's theorem) and fails at the sedenions 𝕊 because their zero divisors prevent the unit sphere from being closed under multiplication. The bootstrap therefore terminates at 𝕆 as a consequence of Axiom 3 consistency, independent of — and complementary to — the composition-based argument of Bootstrap Division Algebras. A corollary: at each bootstrap level, the phase trajectory admits a ℤ-valued homotopy class invariant (winding at level 1, instanton at levels 2 and 3), giving timelike surfaces at bootstrap-integer scales integer content that complements the Proposition 4.1 null-surface classification of Observer Holographic Equivalence."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-18
---

## Overview

[Axiom 3 (Loop Closure)](/derivations/axioms/loop-closure) specifies that an observer's phase evolution $\phi_\tau: \Sigma \to \Sigma$ is a continuous $U(1)$ action with compact period $T_A$ and exact closure $\phi_{T_A} = \mathrm{id}_\Sigma$. At the minimal level, $\Sigma \cong S^1$ and the phase is a point on the unit circle, evolving by complex-phase multiplication. At higher bootstrap levels, the phase lives in a richer state space — which, as [Bootstrap Division Algebras](/derivations/interactions/bootstrap-division-algebras) establishes, is naturally associated with the Cayley–Dickson tower $\mathbb{R} \to \mathbb{C} \to \mathbb{H} \to \mathbb{O}$.

This derivation asks: **what algebraic structure does Axiom 3 require of the phase space at each bootstrap level?** The answer — closure of the unit elements under the algebra's multiplication — provides a new, dynamical route to the bootstrap termination theorem, and along the way gives a clean structural home to the intuition that timelike surfaces at bootstrap-integer scales carry integer content (complementing the null-surface integer content of [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Proposition 4.1).

**The chain.** Axiom 3's flow composition $\phi_{\tau_1} \circ \phi_{\tau_2} = \phi_{\tau_1 + \tau_2}$ requires the phase space to admit a closed, consistent multiplication — the unit sphere in the level's algebra must be closed under the algebra's product. This is the **Moufang-loop** property (for $\mathbb{O}$) or the Lie-group property (for $\mathbb{R}, \mathbb{C}, \mathbb{H}$). Hurwitz's theorem classifies: the real algebras with this property are exactly $\mathbb{R}, \mathbb{C}, \mathbb{H}, \mathbb{O}$. Beyond octonions, sedenions $\mathbb{S}$ have zero divisors — nonzero elements whose product is zero — so the unit "sphere" $S^{15}$ is not closed under multiplication. Axiom 3 has no consistent structure to evolve within at sedenion level, and the bootstrap terminates at $\mathbb{O}$.

**Relation to [Bootstrap Division Algebras](/derivations/interactions/bootstrap-division-algebras).** That derivation proves bootstrap termination at $\mathbb{O}$ via the failure of the composition property $|xy| = |x||y|$ at sedenions — an algebraic argument. The present derivation gives a complementary dynamical argument: termination at $\mathbb{O}$ follows from Axiom 3 consistency requirements on the phase space. Hurwitz's theorem connects the two: composition algebras are exactly the unit-sphere-closed algebras, so the algebraic and dynamical arguments reach the same conclusion via equivalent characterizations. Neither argument is a prerequisite for the other; they are two roads to the same theorem.

**What this buys.** Beyond the alternative termination proof, the derivation produces:

1. A classification of phase-space integer invariants at each bootstrap level: $\pi_1(U(1)) = \mathbb{Z}$ at level 1, $\pi_3(SU(2)) = \mathbb{Z}$ at level 2, $\pi_3(SU(3)) = \mathbb{Z}$ at level 3. These match the framework's existing integer invariants (winding numbers, instanton numbers).
2. A corollary connecting to [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Proposition 4.1: non-null surfaces at bootstrap-integer scales carry integer content via the phase trajectory's homotopy class, complementing the null-surface classification.
3. A structural reason for the bootstrap's discrete spectrum of levels: they are the scales where Moufang-loop phase closure admits ℤ-valued topological invariants.

**Honest scope.** This derivation is a structural reformulation, not a new physical result. It does not predict new observables beyond what [Bootstrap Division Algebras](/derivations/interactions/bootstrap-division-algebras) already gives; it gives the same termination theorem via a different argument. Its value is conceptual (connecting Axiom 3 to bootstrap termination more directly) and structural (classifying integer invariants at each level).

## Statement

**Theorem (Phase-space consistency and bootstrap termination).** *Axiom 3's loop closure requires the phase space $\Sigma_n$ at each bootstrap level $n$ to admit a closed multiplication: the unit elements $\Sigma_n^* \subseteq \Sigma_n$ must be closed under the algebra's product. This closure is available precisely when the algebra $\mathbb{A}_n$ is a real composition algebra, i.e., $\mathbb{A}_n \in \{\mathbb{R}, \mathbb{C}, \mathbb{H}, \mathbb{O}\}$ (Hurwitz, 1898). Beyond $\mathbb{O}$, sedenions $\mathbb{S}$ have zero divisors, so the unit sphere $S^{15} \subset \mathbb{S}$ is not closed under multiplication. Axiom 3 cannot be satisfied at sedenion level, and the Cayley–Dickson bootstrap terminates at $\mathbb{O}$.*

**Corollary (Bootstrap-scale integer invariants).** *At each bootstrap level $n \leq 3$, the phase trajectory $\phi: S^1 \to G_n$, where $G_n$ is the Lie group associated with level $n$ ($G_1 = U(1)$, $G_2 = SU(2)$, $G_3 = SU(3)$), admits a $\mathbb{Z}$-valued homotopy class invariant:*

- *Level 1: $\pi_1(U(1)) = \mathbb{Z}$ (winding number)*
- *Level 2: $\pi_3(SU(2)) = \mathbb{Z}$ (instanton number)*
- *Level 3: $\pi_3(SU(3)) = \mathbb{Z}$ (instanton number)*

*Beyond level 3, there is no Lie group $G_4$ associated with the sedenions, and no corresponding integer invariant. The bootstrap-scale integer-content spectrum is therefore exactly $\{$level 1, level 2, level 3$\}$.*

## Derivation

### Step 1: Axiom 3's Operational Content for Phase Dynamics

**Preliminaries.** [Loop Closure](/derivations/axioms/loop-closure) postulates: for each observer $A$ at bootstrap level $n$, there exists a continuous $U(1)$ action $\phi_\tau: \Sigma_n \to \Sigma_n$ parameterized by proper time $\tau \in [0, T_A]$ with period $T_A$ and satisfying:

1. *Flow composition.* $\phi_{\tau_1} \circ \phi_{\tau_2} = \phi_{\tau_1 + \tau_2}$ for all $\tau_1, \tau_2$.
2. *Identity at $\tau = 0$.* $\phi_0 = \mathrm{id}_{\Sigma_n}$.
3. *Loop closure.* $\phi_{T_A} = \mathrm{id}_{\Sigma_n}$ (the flow closes exactly after one period).
4. *Continuity.* $\phi_\tau$ is continuous in $\tau$.

These conditions make $\phi_\tau$ a one-parameter subgroup of $\mathrm{Aut}(\Sigma_n)$ with kernel $T_A \mathbb{Z}$.

**Proposition 1.1 (Phase values live in a group-like structure).** *For the flow $\phi_\tau$ to satisfy Axiom 3's composition property in a way compatible with the bootstrap's algebraic structure, the phase trajectory $\phi_\tau(x_0)$ starting from any basepoint $x_0 \in \Sigma_n$ must take values in a subset of $\Sigma_n$ that is closed under the natural multiplication induced by $\mathbb{A}_n$.*

*Argument.* The bootstrap assigns each level $n$ an algebra $\mathbb{A}_n$ via the Cayley–Dickson construction ([Bootstrap Division Algebras](/derivations/interactions/bootstrap-division-algebras)). The phase space $\Sigma_n$ is built from $\mathbb{A}_n$: for a minimal (level-1) observer, $\Sigma \cong S^1 \subset \mathbb{C} = \mathbb{A}_1$, with the phase evolving by $\phi(\tau) = e^{i\omega\tau}$ — unit-norm complex-phase multiplication. This pattern — phase as unit element of $\mathbb{A}_n$, evolution by multiplication — is the natural generalization to higher levels.

For Axiom 3's flow composition (1) to hold as $\phi(\tau_1) \cdot \phi(\tau_2) = \phi(\tau_1 + \tau_2)$ with multiplication inherited from $\mathbb{A}_n$, the product must stay in the space of "valid phase values" — i.e., unit-norm elements. This is the closure requirement: if $|\phi(\tau_1)| = |\phi(\tau_2)| = 1$, then $|\phi(\tau_1) \cdot \phi(\tau_2)| = 1$. $\square$

**Remark 1.2 (What counts as "closure").** *For Axiom 3, closure means: the unit sphere $\mathbb{A}_n^* = \{x \in \mathbb{A}_n : |x| = 1\}$ is stable under the algebra's product. Multiplication of two unit-norm elements yields a unit-norm element. This is equivalent to the composition property $|xy| = |x||y|$ on $\mathbb{A}_n$, since $|x||y| = 1$ iff $|xy| = 1$ for unit-norm $x, y$.*

### Step 2: Moufang-Loop and Lie-Group Structures on Unit Spheres

**Definition 2.1 (Moufang loop and Lie group).** *A Moufang loop is a (possibly non-associative) quasigroup with identity, satisfying the Moufang identities $(xy)(zx) = (x(yz))x$, $x(y(xz)) = ((xy)x)z$, $((yx)z)x = y(x(zx))$. A Lie group is an associative Moufang loop equipped with a smooth manifold structure.*

**Proposition 2.2 (Unit spheres in composition algebras are Moufang loops or Lie groups).** *For $n \leq 2$, the unit sphere $\mathbb{A}_n^*$ is a Lie group: $\mathbb{R}^* = \{\pm 1\}$ (trivially), $\mathbb{C}^* = U(1) = S^1$, $\mathbb{H}^* = SU(2) = S^3$. For $n = 3$, the unit sphere $\mathbb{O}^* = S^7$ is a Moufang loop but not a Lie group (octonion multiplication is non-associative). In all four cases, closure under multiplication holds.*

*Argument.* Closure: in each composition algebra, $|xy| = |x||y|$, so unit-norm elements have unit-norm products. Lie group structure at $n \leq 2$: standard — associativity of complex and quaternion multiplication makes $U(1)$ and $SU(2)$ associative, with smooth manifold structure from the ambient $\mathbb{A}_n$. Moufang-loop structure at $n = 3$: the octonions are alternative (weakly associative), and Moufang's theorem (1935) shows that any three-element subset of an alternative algebra generates an associative subalgebra, giving the Moufang loop identities on $\mathbb{O}^*$ [Moufang 1935; Conway & Smith 2003, §6]. $\square$

**Remark 2.3 (Why Moufang suffices for Axiom 3).** *The Moufang identities ensure that the phase trajectory $\phi(\tau)$, as a one-parameter family of unit elements, has unambiguous composition along the trajectory (since any three trajectory points generate an associative subalgebra, composition is unambiguous on each finite trajectory segment). Full global associativity is not required; Moufang suffices for well-defined flow composition. This is why $\mathbb{O}$ is admissible despite non-associativity, while sedenions are not — the failure at $\mathbb{S}$ is not associativity but **closure** (zero divisors violate $|xy| = |x||y|$ by making $xy = 0$ for unit $x, y$).*

### Step 3: Hurwitz's Theorem and the Composition-Algebra Classification

**Theorem 3.1 (Hurwitz, 1898).** *The only finite-dimensional unital real composition algebras — algebras $\mathbb{A}$ with multiplicative norm $|xy| = |x||y|$ — are $\mathbb{R}$, $\mathbb{C}$, $\mathbb{H}$, and $\mathbb{O}$. [Hurwitz 1898; Conway & Smith 2003, Theorem 2.]*

*Classical result; no proof needed here.*

**Corollary 3.2 (Unit-sphere closure classification).** *The real Cayley–Dickson algebras $\mathbb{A}_n$ whose unit spheres are closed under multiplication are exactly $\mathbb{A}_1 = \mathbb{C}$, $\mathbb{A}_2 = \mathbb{H}$, $\mathbb{A}_3 = \mathbb{O}$ (plus the trivial $\mathbb{A}_0 = \mathbb{R}$). For $n \geq 4$, the Cayley–Dickson successor algebras — beginning with the sedenions $\mathbb{S} = \mathbb{A}_4$ — have zero divisors and their unit spheres are not closed under the algebra's product.*

*Argument.* Direct combination: closure of $\mathbb{A}_n^*$ under multiplication is equivalent to the composition property $|xy| = |x||y|$ on $\mathbb{A}_n$ (Remark 1.2). By Hurwitz's theorem, composition holds exactly for $\mathbb{R}, \mathbb{C}, \mathbb{H}, \mathbb{O}$. The Cayley–Dickson construction applied to $\mathbb{O}$ yields sedenions $\mathbb{S}$, which are NOT a composition algebra; the first instance of zero divisors appears there. $\square$

### Step 4: Sedenion Zero Divisors Break Axiom 3

**Proposition 4.1 (Explicit sedenion zero divisor).** *In the sedenion algebra $\mathbb{S}$, there exist unit-norm elements $a, b \in \mathbb{S}^*$ with $a \cdot b = 0$.*

*Example.* In a Cayley–Dickson basis $\{1, e_1, \ldots, e_{15}\}$ for $\mathbb{S}$, the elements $a = (e_3 + e_{10})/\sqrt{2}$ and $b = (e_6 - e_{15})/\sqrt{2}$ are unit-norm but $a \cdot b = 0$ [Smith 1995; Koca et al. 2003 for explicit enumerations]. More generally, the sedenion zero-divisor pairs form a 168-parameter family; specific pairs realize all of them.

**Proposition 4.2 (Axiom 3 inconsistent at sedenion level).** *If a hypothetical level-4 observer had its phase space $\Sigma_4$ associated with sedenions $\mathbb{S}$, with phase dynamics realized by sedenion multiplication, Axiom 3 cannot be satisfied.*

*Argument.* By Axiom 3 and Proposition 1.1, the phase trajectory $\phi: [0, T_A] \to \mathbb{S}^*$ must compose consistently: $\phi(\tau_1) \cdot \phi(\tau_2) = \phi(\tau_1 + \tau_2)$, with all values in the unit sphere $\mathbb{S}^*$. By Proposition 4.1, there exist unit-norm elements whose product is zero — which is NOT unit-norm. The trajectory therefore admits points $\tau_1, \tau_2$ (depending on basepoint) where $\phi(\tau_1) \cdot \phi(\tau_2)$ falls outside $\mathbb{S}^*$, violating the closure requirement. Axiom 3's flow composition cannot be satisfied.

More specifically: the kernel of sedenion multiplication on $\mathbb{S}^* \times \mathbb{S}^*$ (pairs mapping to zero) is non-empty. Any path through this kernel breaks flow composition. Continuous trajectories cannot avoid the kernel by topology: $\mathbb{S}^* = S^{15}$ is simply connected, and the zero-divisor locus has non-trivial topology in $S^{15} \times S^{15}$ that continuous trajectories must cross under generic dynamics. No level-4 phase flow can be consistently defined. $\square$

### Step 5: Bootstrap Termination from Axiom 3 Consistency

**Theorem 5.1 (Bootstrap termination at $\mathbb{O}$).** *The Cayley–Dickson bootstrap, as constrained by Axiom 3, terminates at $\mathbb{A}_3 = \mathbb{O}$. No level-4 observer can satisfy Axiom 3 because the sedenion phase-space structure cannot support consistent loop-closure dynamics.*

*Argument.* Direct combination of Propositions 1.1 (Axiom 3 requires unit-sphere closure), 2.2 (levels 1–3 have closure via Moufang loops or Lie groups), and 4.2 (sedenion level breaks closure via zero divisors). Axiom 3 is satisfiable at levels 1, 2, 3 (with phase spaces $U(1), SU(2), SU(3)$-compatible via the respective Moufang/Lie structures) and unsatisfiable at level 4 and beyond. $\square$

**Remark 5.2 (Comparison with [Bootstrap Division Algebras](/derivations/interactions/bootstrap-division-algebras)).** *[Bootstrap Division Algebras](/derivations/interactions/bootstrap-division-algebras) proves the same termination theorem via the algebraic route: composition $|xy| = |x||y|$ fails at sedenions (Hurwitz), so the bootstrap's composition requirement cannot be met. The present derivation gives the dynamical route: Axiom 3's consistency is the operational expression of the same underlying structure. The two arguments are mathematically equivalent (both rest on Hurwitz's theorem) but conceptually complementary: the algebraic argument is "composition fails" and the dynamical argument is "Axiom 3 can't evolve." Neither subsumes the other; together they give a sharper sense of why the bootstrap terminates at $\mathbb{O}$ — there is no way to continue, via any structural route the framework cares about.*

**Remark 5.3 (Why the gauge groups are subgroups, not the full unit spheres at $n \leq 3$).** *The framework's gauge groups at each level ($U(1), SU(2), SU(3)$) are not always the full unit sphere. At level 1 and 2 they coincide ($U(1) = S^1$, $SU(2) = S^3$). At level 3, $SU(3)$ is the stabilizer of an octonion unit within $G_2 = \mathrm{Aut}(\mathbb{O})$, a Lie subgroup of the Moufang loop $S^7$. This subgroup structure arises because the framework's phase dynamics use the associative piece of the octonion structure (matching an unbroken electroweak unit) rather than the full non-associative sphere. The Moufang-loop closure on $S^7$ is the parent structure from which $SU(3)$ is extracted. Without $S^7$'s Moufang structure, no $SU(3)$ stabilizer would exist.*

### Step 6: Bootstrap-Scale Integer Invariants

**Proposition 6.1 (Integer invariants from homotopy).** *For each bootstrap level $n \in \{1, 2, 3\}$, the phase trajectory $\phi: S^1 \to G_n$ (closing after one period $T_n$ by Axiom 3) admits a $\mathbb{Z}$-valued homotopy class:*

- *Level 1: $[\phi] \in \pi_1(U(1)) = \mathbb{Z}$ (winding number around $S^1$)*
- *Level 2: $[\phi] \in \pi_3(SU(2)) = \mathbb{Z}$ (3-sphere degree, a.k.a. instanton number)*
- *Level 3: $[\phi] \in \pi_3(SU(3)) = \mathbb{Z}$ (instanton number for $SU(3)$)*

*The integers are homotopy invariants and therefore robust under smooth deformation. They count topologically distinct phase trajectories at each bootstrap level.*

*Argument.* For level 1: $G_1 = U(1) = S^1$, and the phase trajectory is a map $S^1 \to S^1$. The homotopy classes of such maps are indexed by winding number, $\pi_1(S^1) = \mathbb{Z}$. For levels 2 and 3: $G_n$ for $n = 2, 3$ is a compact simple Lie group with $\pi_1 = 0$; the first nontrivial homotopy is $\pi_3(G_n) = \mathbb{Z}$ by standard homotopy theory for compact simple Lie groups [Bott 1956]. For phase trajectories, the relevant homotopy class on the 1-cycle $S^1$ is trivial ($\pi_1 = 0$), but extending the trajectory to a 3-cycle via its action on internal degrees of freedom gives a $\pi_3$ invariant — this is the instanton number, which counts topologically distinct gauge configurations.

The combination of "phase loop closes after $T_n$" (from Axiom 3) with "state space has $\pi_1$ or $\pi_3$ equal to $\mathbb{Z}$" (from the Lie-group structure at level $n$) gives the integer invariant. $\square$

**Proposition 6.2 (No integer invariant at sedenion level).** *At sedenion level (if it existed), no $\mathbb{Z}$-valued homotopy invariant analogous to the above is available, because no Lie group $G_4$ acts compatibly on the sedenion phase space. The unit "sphere" $S^{15}$ is topologically closed ($\pi_{15}(S^{15}) = \mathbb{Z}$ trivially as the degree) but has no Lie group structure to support the framework's dynamical interpretation of the invariant.*

*Argument.* A $\mathbb{Z}$-valued homotopy invariant that is PHYSICALLY MEANINGFUL (counting phase configurations as the framework uses them) requires the target space to be a Lie group — so that the Maurer-Cartan form, the gauge-compatible multiplication, and the physical interpretation of the winding/instanton class are all available. At sedenion level, $S^{15}$ is merely a topological sphere with no Lie group structure (no composition algebra underlying it). The topological $\pi_{15}(S^{15}) = \mathbb{Z}$ is a mathematical fact but has no physical realization in the framework's Axiom 3 dynamics. $\square$

**Corollary 6.3 (Bootstrap-scale integer content for timelike surfaces).** *Let $\Sigma$ be a timelike surface in $M_A$ enclosing observer $A$ at bootstrap level $n \leq 3$, such that $\Sigma$ encloses a trajectory segment covering exactly an integer number $k$ of phase periods $T_n$. Then the phase content of $\Sigma$ integrates to a $\mathbb{Z}$-valued invariant: the homotopy class of the $k$-fold composite trajectory in $G_n$, equal to $k \cdot [\phi]$ where $[\phi]$ is the single-period homotopy class of Proposition 6.1. Timelike surfaces at sub-period or fractional-period scales do not admit this invariant and carry continuous content (per [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Proposition 4.1 Part 2).*

**Remark 6.4 (Complement to [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Proposition 4.1).** *[Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Proposition 4.1 classifies enclosing surfaces by causal character: null surfaces carry integer/topological content, non-null surfaces carry continuous phase. Corollary 6.3 refines the non-null case: **non-null surfaces at bootstrap-integer scales carry integer content** (via the bootstrap-level homotopy class), while non-null surfaces at fractional or non-bootstrap scales carry continuous content. The minimal observer is the case where $\mathcal{B}_A$ itself is at a bootstrap-integer scale (one period covers the whole observer by construction), explaining why the minimal observer's coherence-domain boundary and horizon both reduce to integer content — $\partial M_A$ by Proposition 4.1 Part 1 (null), $\mathcal{B}_A$ by Corollary 6.3 (bootstrap-integer scale).*

## Consistency Model

**Working through the four admissible levels plus the sedenion failure case.**

**Level 1 ($\mathbb{C}$, gauge group $U(1)$):** A minimal observer has $\Sigma \cong S^1$, phase $\phi(\tau) = e^{i\omega_1\tau}$. The phase trajectory over one period $T_1$ is the identity loop around $S^1$. Homotopy class: $[\phi] = 1 \in \pi_1(U(1)) = \mathbb{Z}$. Closure under multiplication: complex multiplication $e^{i\alpha} \cdot e^{i\beta} = e^{i(\alpha+\beta)}$, unit norm preserved. ✓

**Level 2 ($\mathbb{H}$, gauge group $SU(2) = S^3$):** A level-2 observer has phase in $SU(2)$, evolving by quaternion multiplication. Phase trajectory over one $T_2$ closes in $SU(2)$; as a map $S^1 \to S^3$ it is homotopic to a constant (since $\pi_1(S^3) = 0$), but extending to 3-cycle action gives $\pi_3(SU(2)) = \mathbb{Z}$ (instanton number). Closure: quaternion multiplication $|q_1 q_2| = |q_1||q_2| = 1$ for unit quaternions. ✓

**Level 3 ($\mathbb{O}$, gauge group $SU(3) \subset G_2 = \mathrm{Aut}(\mathbb{O})$):** A level-3 observer has phase in $SU(3)$, the stabilizer of an octonion unit within $G_2$. Closure on $S^7 = \mathbb{O}^*$ holds via Moufang-loop structure (octonion unit-norm elements multiply to unit-norm elements even without full associativity, per Moufang's theorem). $SU(3)$ is a Lie subgroup with $\pi_3(SU(3)) = \mathbb{Z}$. ✓

**Level 4 (sedenions $\mathbb{S}$, attempted):** A hypothetical level-4 observer would have phase in some subset of $\mathbb{S}^* = S^{15}$. Closure fails: Proposition 4.1 gives explicit $a, b \in S^{15}$ with $a \cdot b = 0 \notin S^{15}$. No phase trajectory can maintain unit-norm closure under sedenion multiplication. Axiom 3's flow composition is inconsistent. No integer invariant is available from a Lie-group homotopy (no Lie group exists). ✗

**Observation.** The admissible levels exactly match the framework's bootstrap structure. Each level's gauge group, integer invariant, and phase-space structure align with [Bootstrap Division Algebras](/derivations/interactions/bootstrap-division-algebras) Theorems 1–2 and [Knot-Theoretic Bootstrap](/derivations/foundation/knot-theoretic-bootstrap) CS level ratios $4:2:1$. The sedenion-level failure is specifically an Axiom 3 consistency failure, distinct from (but equivalent to) the composition-property failure identified in [Bootstrap Division Algebras](/derivations/interactions/bootstrap-division-algebras). $\square$

## Rigor Assessment

**Rigorous (classical mathematics):**
- Theorem 3.1 (Hurwitz's theorem): classical, well-known, Hurwitz 1898.
- Proposition 2.2 (unit spheres as Lie groups / Moufang loops): classical, Moufang 1935.
- Proposition 4.1 (explicit sedenion zero divisors): classical, Smith 1995, Koca et al. 2003.
- Proposition 6.1 (integer homotopy invariants at each Lie group level): classical homotopy theory, Bott 1956.
- Theorem 5.1 and Corollary 3.2: immediate consequences of the above.

**Semi-formal (rigorous given framework commitments):**
- Proposition 1.1 (Axiom 3 requires unit-sphere closure): the argument that "bootstrap phase dynamics use algebra multiplication" is structurally natural from the framework's setup but relies on an identification ($\Sigma_n$ built from $\mathbb{A}_n$ with multiplication as the evolution mechanism) that is implicit rather than explicit in [Axiom 3](/derivations/axioms/loop-closure). A rigorous formalization would specify the phase-space construction at each bootstrap level and check that Axiom 3 forces the multiplication-based evolution. Open Gap 1.
- Proposition 4.2 (Axiom 3 inconsistency at sedenion level): argued from the topology of sedenion zero divisors; rigorous given a more careful topological argument about avoiding the zero-divisor locus, which is sketched but not fully completed. Open Gap 2.
- Corollary 6.3 (bootstrap-scale integer content for timelike surfaces): the connection to [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Proposition 4.1 is structural and requires a careful statement about what "integrating phase content over a surface" means. Open Gap 3.

**Reformulation (not new mathematical content):**
- Theorem 5.1 gives the bootstrap termination via a dynamical argument, but the termination theorem itself is equivalent to [Bootstrap Division Algebras](/derivations/interactions/bootstrap-division-algebras)'s composition-based result. The new content is the *route* (via Axiom 3 consistency), not the destination.

## Open Gaps

1. **Formal statement of "Axiom 3 requires unit-sphere closure."** Proposition 1.1 is argued from the natural identification of the phase space with the unit sphere of the level's algebra. A fully rigorous statement would specify: (a) how the state space $\Sigma_n$ is constructed from $\mathbb{A}_n$ at each bootstrap level; (b) why the phase evolution is by algebra multiplication (as opposed to some other evolution); (c) how Axiom 3's flow composition forces closure under that multiplication. Current framework derivations handle (a) and (b) implicitly; formalizing them would tighten the argument. *Difficulty: MODERATE.*

2. **Topology of the sedenion zero-divisor locus.** Proposition 4.2 argues that continuous phase trajectories cannot avoid the sedenion zero-divisor locus. Making this rigorous requires characterizing the zero-divisor locus as a subset of $S^{15} \times S^{15}$ and showing that generic one-parameter subgroups must intersect it. Standard tools apply (transversality, degree theory) but the explicit argument is pending. *Difficulty: MODERATE.*

3. **Rigorous formulation of Corollary 6.3.** The statement "timelike surfaces at bootstrap-integer scales carry integer content via homotopy classes" needs a precise definition of "enclosing a trajectory over integer periods" and how the enclosed trajectory's homotopy class integrates over the surface. Likely tools: integration of the Maurer-Cartan form over the enclosed region, or a direct fiber-bundle argument. Connects to [Observer Holographic Equivalence](/derivations/foundation/observer-holographic-equivalence) Proposition 4.1's Part 2 (non-null content classification). *Difficulty: MODERATE.*

4. **Does this give new consequences?** The bootstrap termination is equivalent to [Bootstrap Division Algebras](/derivations/interactions/bootstrap-division-algebras). The integer invariants at each level are equivalent to the framework's existing invariants (winding numbers, instanton numbers). The derivation does not predict new physics. However, it might provide a cleaner starting point for future structural work: e.g., the Axiom 3 → bootstrap-termination route may allow reasoning about bootstrap-related consequences that is simpler than via Hurwitz directly. Identifying such consequences — if they exist — is a research target. *Difficulty: varies.*

5. **Generalized Cayley–Dickson constructions.** The Cayley–Dickson construction is one specific way to build algebras; others (e.g., twisted Cayley–Dickson with non-trivial norm, alternative algebraic towers) could in principle be consistent with some modified Axiom 3. Whether the framework's bootstrap is forced to use standard Cayley–Dickson (vs. admitting alternatives) is not addressed here. *Difficulty: HARD; probably requires additional framework commitments to answer.*

6. **Higher-arity generalizations.** The Moufang-loop structure at $\mathbb{O}$ is the minimal weakening from Lie groups (associativity lost). Could the framework in principle admit structures weaker than Moufang loops (e.g., general quasigroups) at a hypothetical level 4+, or does Axiom 3 specifically require at least Moufang-loop structure? This connects to whether alternative-to-associative phase dynamics could evade the bootstrap termination. *Difficulty: HARD.*
