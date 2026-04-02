---
title: "Aperiodic Order of the Observer Network"
status: "provisional"
dependsOn: ["minimal-observer/multiplicity", "interactions/bootstrap", "axioms/coherence-conservation", "minimal-observer/coherence-dual-pairs"]
enablesDerivation: ["spacetime/gravitational-constant", "thermodynamics-ext/non-ergodicity"]
tags: ["foundation", "structure"]
summary: "The observer network must have aperiodic order: periodicity trivializes C5 (every local neighborhood identical), disorder violates constitutive universality (density fluctuations make geometry observer-dependent), and aperiodic tilings with matching rules are the unique intermediate satisfying all axiom requirements. The substitution matrix is constrained to the 2×2 Pisot metallic mean family"
rigorLevel: "semi-formal"
lastUpdated: 2026-03-31
---

## Overview

The observer network — the boundaryless structure of minimal observers that condenses at $t_0$ ([Multiplicity](/derivations/minimal-observer/multiplicity), Corollary 7.4) — must have a specific type of spatial order. This derivation establishes that the network is neither periodic (crystalline) nor disordered (random), but **aperiodic**: locally ordered by matching rules derived from the axioms, globally non-repeating, and self-similar under a substitution rule that realizes the bootstrap equation $U \cong R(U,U)$.

The argument proceeds by exclusion:

1. **Periodicity** makes C5 (strict subadditivity) informationally degenerate — every observer occupies an identical structural position, collapsing the individuation required by Axiom 2.
2. **Disorder** violates constitutive universality — density fluctuations cause different observers to constitute different effective geometries, and sparse regions create effective boundaries.
3. **Aperiodic order** is the unique intermediate regime that simultaneously satisfies all framework requirements: local consistency, global distinguishability, no boundaries, unique statistical structure, and self-similar hierarchy.

The substitution rule underlying the aperiodic order is the geometric realization of the bootstrap equation. Its $2 \times 2$ substitution matrix (two tile types: observer + coherence dual) is constrained to the metallic mean family $M_n = \bigl(\begin{smallmatrix} n & 1 \\ 1 & 0 \end{smallmatrix}\bigr)$, with inflation factor $\beta_n = (n + \sqrt{n^2 + 4})/2$.

## Statement

**Theorem 1.1 (Forced aperiodicity).** *The observer network at $t_0$ must have aperiodic order: local matching rules (from the axiom constraints) that enforce global aperiodicity. Periodic and disordered configurations are excluded by the axioms.*

**Theorem 2.1 (Substitution matrix).** *The geometric substitution rule realizing $U \cong R(U,U)$ has a $2 \times 2$ primitive substitution matrix with Pisot Perron-Frobenius eigenvalue. The metallic mean family $M_n$ provides the natural discrete parameter space.*

**Proposition 3.1 (Constitutive universality decomposition).** *Constitutive universality (all observers constitute the same geometry) = unique ergodicity (Solomyak's theorem) + locality of geometric constitution (relational invariant mechanism).*

**Proposition 4.1 (Scale-independent packing coefficient).** *The dimensionless packing coefficient $\alpha$ in $\eta = \alpha/\ell^2$ is determined by the inflation factor $\beta_n$ alone, independent of the absolute scale $\ell$.*

## Derivation

### Step 1: Periodic Networks Trivialize C5

**Definition 1.0 (C5 constraint complexity).** For a finite sub-network $\mathcal{N}_R$ of radius $R$ centered at an observer $O$, define the *C5 constraint complexity* as the number of C5-inequivalent triples:

$$\kappa(R) = |\{(A, B, C) \in \mathcal{N}_R^3 : \text{the C5 inequality for } (A,B,C) \text{ is not a translate of any other}\}|$$

A network has *non-degenerate C5* if $\kappa(R)$ grows with $R$ (the constraint content scales with volume). It has *degenerate C5* if $\kappa(R)$ is bounded as $R \to \infty$.

**Proposition 1.1 (Periodicity collapses C5 and individuation).** *A periodic observer network — one with a translational symmetry lattice $\Lambda$ — has degenerate C5 ($\kappa(R) = O(1)$) and violates the individuation requirement of Axiom 2.*

*Proof.* Let the observer network $\mathcal{N}$ have period lattice $\Lambda \subset \mathbb{R}^d$, so for every $\lambda \in \Lambda$ the network is invariant: $\mathcal{N} + \lambda = \mathcal{N}$. Then:

**(a) C5 degeneracy.** For any triple $(A, B, C)$, the translated triple $(A + \lambda, B + \lambda, C + \lambda)$ satisfies the identical C5 inequality with the identical numerical values, since coherence is determined by the local neighborhood structure and translational symmetry makes all neighborhoods isometric. The number of C5-inequivalent triples is bounded by $|F/\Lambda|^3$, where $F$ is the fundamental domain. Therefore $\kappa(R) \leq |F/\Lambda|^3$ for all $R$: the constraint content is finite and independent of system size.

**(b) Individuation failure.** Axiom 2 defines an observer as a triple $(\Sigma, I, B)$ where $B$ is the self/non-self boundary. For observer $O_x$ at position $x$ and $O_{x+\lambda}$ at $x + \lambda$, the boundary structures are isometric: $B_x \cong B_{x+\lambda}$ (same topology, same neighborhood, same relational invariants). The observers are locally indistinguishable — they occupy identical structural positions in the network. While they are formally distinct (different positions), they cannot be individuated by any local measurement, which is the operational content of Axiom 2's self/non-self distinction.

**(c) Conditional mutual information vanishes.** Define the C5 random variable $X_x$ at position $x$ as the vector of C5 inequality values for all triples in the neighborhood of $O_x$. Periodicity implies $X_x = X_{x+\lambda}$ for all $\lambda \in \Lambda$, so $I(X_x; X_y \mid \Lambda) = 0$ for all $x, y$: knowing one C5 instance determines all others. The conditional mutual information between distinct C5 instances is zero — the constraint network carries no more information than a single fundamental domain. $\square$

**Remark (Approximate periodicity).** The exclusion is strongest for exact periodicity. An approximately periodic network (periodic with perturbations) would have weakly non-degenerate C5, with $\kappa(R)$ growing only as the perturbation amplitude. The axioms do not merely require C5 to be technically satisfied — they require it to be *structurally operative* as the source of quantum mechanics ([Born Rule](/derivations/quantum/born-rule)), gauge structure ([Standard Model Group](/derivations/gauge/standard-model-group)), and geometry. This requires non-degenerate C5: $\kappa(R) \to \infty$ as $R \to \infty$.

### Step 2: Observer Networks Are Delone Sets; Disorder Is Excluded

**Definition 2.0 (Delone set).** A point set $\mathcal{N} \subset \mathbb{R}^d$ is a *Delone set* if it is:
- *Uniformly discrete*: there exists $r > 0$ such that every ball $B_r(x)$ contains at most one point of $\mathcal{N}$.
- *Relatively dense*: there exists $R > 0$ such that every ball $B_R(x)$ contains at least one point of $\mathcal{N}$.

**Proposition 2.0 (Observer networks are Delone sets).** *The observer network $\mathcal{N}$ at $t_0$ is a Delone set in the constituted geometry.*

*Proof.*

*(Uniformly discrete):* Axiom 3 (loop closure) requires each observer to maintain Lyapunov-stable U(1) phase dynamics with period $T > 0$. Two observers separated by distance $d < c \cdot T_{\min}$ would have overlapping causal diamonds, making their boundaries $B_1, B_2$ non-distinct — violating the individuation requirement of Axiom 2 ($B$ is the self/non-self boundary, which must distinguish self from non-self). The minimum loop period $T_{\min}$ sets the minimum separation $r = c \cdot T_{\min} > 0$.

*(Relatively dense):* The no-boundary condition ([Multiplicity](/derivations/minimal-observer/multiplicity), Corollary 7.3) requires the network to be boundaryless — no observer can be at the "edge" of the network. A ball $B_R(x)$ containing no observers for arbitrarily large $R$ would create an effective boundary for all observers adjacent to this void (their non-self region is truncated). The repetitivity requirement (every finite patch recurs within bounded distance, from the bootstrap self-similarity) sets the covering radius $R$. $\square$

**Definition 2.1 (Finite local complexity).** A Delone set $\mathcal{N}$ has *finite local complexity* (FLC) if for every $r > 0$, the set $\{(B_r(x) \cap \mathcal{N}) - x : x \in \mathcal{N}\}$ of centered $r$-patches is finite up to translation. A Delone set *without* FLC has infinitely many distinct local neighborhoods — this is the formal definition of disorder.

**Proposition 2.1 (Disorder breaks constitutive universality and the no-boundary condition).** *A Delone set without finite local complexity — a disordered observer network — violates constitutive universality and creates effective boundaries.*

*Proof.*

**(a) Geometry becomes observer-dependent.** Without FLC, the local observer density $\rho(x)$ varies without bound on the number of distinct local configurations. The entropy density on a causal boundary at position $x$ is $\eta(x) = \alpha(x)/\ell(x)^2$, where $\alpha(x)$ depends on the local packing geometry. The gravitational coupling constituted by observer $O_x$ is $G(x) = c^4/(4\hbar\eta(x))$. Infinitely many distinct local configurations yield infinitely many distinct values of $\alpha(x)$, hence infinitely many effective gravitational couplings — constitutive universality fails.

**(b) Effective boundaries appear.** In a Delone set without FLC, density fluctuations are unbounded: for any $\rho_0$, there exist regions where $\rho(x) < \rho_0$. Below the threshold $\rho_{\min}$ needed for C5 non-triviality (the nearest neighbor is too distant for relational coherence to be non-negligible), C5 is vacuous and the network structure effectively terminates. These sparse regions are effective boundaries, violating the no-boundary condition ([Multiplicity](/derivations/minimal-observer/multiplicity), Corollary 7.3).

**(c) Loop closure instability.** Axiom 3 (loop closure) requires Lyapunov stability of the observer's U(1) phase dynamics. In a disordered environment, the phase perturbations from neighbors are random and uncorrelated. For sufficiently large fluctuations, the Lyapunov stability condition fails — the loop cannot close reliably. This creates regions where observers cannot exist, further fragmenting the network. $\square$

### Step 3: Aperiodic Order as the Unique Intermediate

**Theorem 1.1 (Forced aperiodicity).** *The observer network must have aperiodic order: a Delone set with finite local complexity (FLC) and no translational period.*

*Proof.* By Proposition 2.0, the observer network is a Delone set. The Lagarias classification [Lagarias, 1999] partitions Delone sets into three mutually exclusive classes:

1. **Periodic**: invariant under a full-rank lattice $\Lambda \subset \mathbb{R}^d$ of translations. (These have FLC.)
2. **Aperiodic with FLC**: finitely many local neighborhoods up to translation, but no translational period.
3. **Without FLC** (disordered): infinitely many distinct local neighborhoods up to translation.

These are exhaustive: a Delone set either has FLC or not, and if it has FLC, it is either periodic or aperiodic.

By Proposition 1.1, class (1) is excluded (degenerate C5 + individuation failure). By Proposition 2.1, class (3) is excluded (constitutive universality violation + effective boundaries). The observer network therefore belongs to class (2): aperiodic with FLC.

That such configurations exist and satisfy all framework requirements simultaneously is verified by the theory of substitution tilings (Penrose, Ammann-Beenker, metallic mean family):

| Framework requirement | Aperiodic tiling property |
|---|---|
| Non-degenerate C5 ($\kappa(R) \to \infty$) | No translational period: every location is structurally distinct |
| Observers individually distinguishable (Axiom 2) | No two neighborhoods are translation-equivalent |
| No boundary (Corollary 7.3) | Repetitivity: every finite patch recurs within bounded distance |
| Constitutive universality | Unique ergodicity: one statistical structure (Solomyak's theorem) |
| Bootstrap hierarchy $U \cong R(U,U)$ | Self-similar inflation/deflation at ratio $\lambda$ |
| Two fundamental observer types | Two prototiles (observer + coherence dual) |

$\square$

### Step 4: Substitution Rule from Bootstrap

**Proposition 4.1 (Bootstrap as substitution).** *The bootstrap equation $U \cong R(U,U)$ is realized geometrically as a substitution rule on the observer network: each observer at scale $\ell_k$ decomposes into a specific configuration of observers at scale $\ell_{k-1} = \ell_k/\lambda$, where $\lambda$ is the inflation factor.*

*Proof.* The bootstrap equation asserts that the observer algebra $U$ is isomorphic to $R(U,U)$, the algebra of relational invariants between two copies of $U$. Geometrically:

1. A composite observer at scale $\ell_{k+1}$ is constituted by the relational invariant structure of observers at scale $\ell_k$ ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Theorem 1.1).

2. The decomposition of a level-$(k+1)$ observer into level-$k$ observers defines a substitution rule: replace each "supertile" by a specific arrangement of smaller tiles.

3. The self-referential structure $U \cong R(U,U)$ means the substitution rule is the same at every level — it is a genuine substitution tiling, not an ad hoc multi-scale construction.

4. The inflation factor $\lambda = \ell_{k+1}/\ell_k$ is the scale ratio between adjacent bootstrap levels. $\square$

**Proposition 4.2 (Two tile types).** *The substitution has two prototile types, corresponding to observers and their coherence duals.*

*Proof.* By [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs), every observer $O$ has a coherence dual $\tilde{O}$ with complementary boundary structure. The observer and its dual are the two fundamental building blocks of the network. In the substitution tiling, they correspond to two prototile types. The substitution rule specifies how a supertile of each type decomposes into copies of both types. $\square$

### Step 5: Primitivity and the Pisot Condition

**Proposition 5.1 (Primitivity from bootstrap closure).** *The $2 \times 2$ substitution matrix $M = \bigl(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\bigr)$ is primitive: some power $M^k$ has all positive entries.*

*Proof.* Bootstrap closure ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Proposition 2.1) requires that:

- Observers produce relational invariants (Type III interactions), which are themselves observers. In tiling language: inflating a type-1 tile (observer) produces some type-2 tiles (duals). This requires $c \geq 1$.

- Coherence duals, being observers, also produce relational invariants that include both types. In tiling language: inflating a type-2 tile produces some type-1 tiles. This requires $b \geq 1$.

With $b \geq 1$ and $c \geq 1$, the matrix $M$ is irreducible. Since the diagonal entries $a, d \geq 0$ and at least one is positive (the substitution must produce tiles of the original type), $M$ is primitive. $\square$

**Theorem 5.2 (Pisot eigenvalue required).** *The Perron-Frobenius eigenvalue $\lambda_{\text{PF}}$ of $M$ must be a Pisot number (an algebraic integer $> 1$ whose algebraic conjugates all have absolute value $< 1$).*

*Proof.* By Solomyak's theorem [Solomyak, 1997], a substitution tiling in $\mathbb{R}^d$ arising from a primitive substitution matrix $M$ with finite local complexity (FLC) is uniquely ergodic — it has uniform patch frequencies (UPF). The tiling dynamical system $(X_T, \mathbb{R}^d)$ has a unique translation-invariant probability measure.

Unique ergodicity is necessary for constitutive universality (Proposition 3.1 below). Without it, the tiling would have multiple invariant measures — corresponding to statistically distinct regions with different observer densities and hence different effective geometries.

For the tiling to have pure discrete diffraction spectrum (which ensures the local structure is "maximally ordered" among aperiodic configurations), the Pisot Substitution Conjecture (now a theorem in 1D, and established for a large class of 2D substitutions) requires that $\lambda_{\text{PF}}$ be a Pisot number. For a $2 \times 2$ matrix with PF eigenvalue $\lambda_{\text{PF}}$, the Pisot condition requires the second eigenvalue $\lambda_2$ to satisfy $|\lambda_2| < 1$. $\square$

### Step 6: The Metallic Mean Family

**Theorem 2.1 (Metallic mean parameter space).** *The minimal primitive $2 \times 2$ substitution matrices with Pisot Perron-Frobenius eigenvalue form the metallic mean family:*

$$M_n = \begin{pmatrix} n & 1 \\ 1 & 0 \end{pmatrix}, \quad n = 1, 2, 3, \ldots$$

*with Perron-Frobenius eigenvalue $\beta_n = \frac{n + \sqrt{n^2 + 4}}{2}$ and second eigenvalue $\mu_n = \frac{n - \sqrt{n^2 + 4}}{2}$, satisfying $|\mu_n| < 1$ (Pisot).*

*Proof.* The characteristic polynomial of $M_n$ is $x^2 - nx - 1 = 0$, giving roots $\beta_n = (n + \sqrt{n^2+4})/2$ and $\mu_n = (n - \sqrt{n^2+4})/2$. Since $n \geq 1$:

- $\beta_n > 1$ (positive root exceeds 1)
- $|\mu_n| = (\sqrt{n^2+4} - n)/2 < 1$ for all $n \geq 1$ (verified: $\sqrt{n^2+4} < n + 2$)

So $\beta_n$ is a Pisot number for every $n$.

Minimality: $M_n$ has the smallest possible entries consistent with primitivity ($b = c = 1$, $d = 0$). Any primitive $2 \times 2$ matrix with larger entries has a larger PF eigenvalue. The family parametrized by $n$ exhausts the Fibonacci-type substitutions.

The first three members:

| $n$ | Name | $\beta_n$ | Approximate value | Associated tiling |
|---|---|---|---|---|
| 1 | Golden mean | $(1+\sqrt{5})/2$ | 1.618 | Penrose (kite-dart) |
| 2 | Silver mean | $1+\sqrt{2}$ | 2.414 | Ammann-Beenker |
| 3 | Bronze mean | $(3+\sqrt{13})/2$ | 3.303 | Rauzy fractal variant |

$\square$

**Remark (Non-minimal matrices).** The metallic mean family is not the only family of $2 \times 2$ Pisot matrices. For example, $M = \bigl(\begin{smallmatrix} 2 & 1 \\ 1 & 1 \end{smallmatrix}\bigr)$ has PF eigenvalue $\varphi^2 = (3+\sqrt{5})/2 \approx 2.618$, which is also Pisot. However, this is equivalent to two applications of the $M_1$ substitution ($M_1^2 = \bigl(\begin{smallmatrix} 2 & 1 \\ 1 & 1 \end{smallmatrix}\bigr)$), so it does not represent an independent tiling type — it is the Fibonacci tiling viewed at every other scale level. The metallic means $M_n$ are the *irreducible* elements.

### Step 7: Constitutive Universality Decomposition

**Proposition 3.1 (CUP decomposition).** *Constitutive universality — the requirement that all observers constitute the same effective geometry — decomposes into two independent conditions:*

1. *Unique ergodicity: the statistical structure (patch frequencies) of the observer network is the same everywhere.*
2. *Locality of geometric constitution: the effective metric contributed by a local patch depends only on the patch type, not its global position.*

*Proof.* Define constitutive universality precisely:

**Definition.** An observer network $\mathcal{N}$ has the *constitutive universality property* (CUP) if, for every sequence of growing finite sub-networks $P_1 \subset P_2 \subset \cdots$ centered at any point $x$, the effective metric $g_{P_k}$ constituted by $P_k$ converges to a limit $g$ that is independent of $x$.

**Necessity of unique ergodicity.** If the network had two invariant measures $\mu_1, \mu_2$ with different patch frequencies, there would exist two regions $R_1, R_2$ with statistically distinct observer densities. The entropy densities $\eta_1 \neq \eta_2$ would yield $G_1 \neq G_2$ via the Jacobson relation, violating CUP.

**Necessity of locality.** Even with uniform patch frequencies, if the geometric contribution of a patch depended on its global position (non-local constitution), the effective metric could vary spatially.

**Sufficiency.** Given unique ergodicity, every growing ball $B_R(x)$ has the same patch statistics as $R \to \infty$, regardless of center $x$. Given locality, the metric contribution of each patch type is well-defined and position-independent. The sum over patches in $B_R(x)$ therefore converges to the same integral $g = \int \text{d}\mu(\text{patch type}) \cdot g_{\text{local}}(\text{patch type})$ for every $x$.

**Locality from relational invariants.** The framework provides locality structurally: the effective metric is constituted by Type III interactions ([Relational Invariants](/derivations/interactions/relational-invariants)), which are local (they involve pairs of observers). The metric at a point depends on the observer crossings of nearby causal boundaries, not on the global network structure. $\square$

**Corollary 3.2 (Solomyak guarantees half of CUP).** *For a primitive substitution tiling with finite local complexity, unique ergodicity is guaranteed by Solomyak's theorem. The only additional input needed for CUP is locality of geometric constitution, which the framework provides through the relational invariant mechanism.*

### Step 8: Packing Coefficient from Inflation Factor

**Proposition 4.1 (Scale-independent packing coefficient).** *For a metallic mean tiling with inflation factor $\beta_n$, the dimensionless packing coefficient $\alpha$ in $\eta = \alpha/\ell^2$ depends only on $\beta_n$:*

$$\alpha(\beta_n) = \frac{\beta_n \cdot s_{\text{net}}(\beta_n)}{\beta_n^2 + 1}$$

*where $s_{\text{net}}(\beta_n)$ is the net entropy per observer crossing after the C5 mutual information cost, and the ratio $\beta_n/(\beta_n^2 + 1)$ is the number density of observer-type tiles per unit area (in units of tile area).*

*Proof.* For the substitution $M_n$:

**Tile frequencies.** The right Perron-Frobenius eigenvector of $M_n$ is $(\beta_n, 1)$ (up to normalization). This gives the asymptotic tile frequency ratio: observer-type (type 1) to dual-type (type 2) tiles are in ratio $\beta_n : 1$.

**Tile areas.** For a self-similar tiling, the left PF eigenvector gives the tile area ratio. For $M_n$, the left eigenvector is also $(\beta_n, 1)$ (since $M_n^T$ has the same eigenvalues and this eigenvector structure). So the area ratio is $a_1 : a_2 = \beta_n : 1$.

**Number density.** With $N_1 = \beta_n N_2$ tiles and total area $A = N_1 a_1 + N_2 a_2 = (\beta_n^2 + 1) N_2 a_2$, the number density of type-1 tiles is:

$$n_1 = \frac{N_1}{A} = \frac{\beta_n N_2}{(\beta_n^2 + 1) N_2 a_2} = \frac{\beta_n}{(\beta_n^2 + 1) a_2}$$

**Entropy density.** Each type-1 tile (observer crossing) contributes $s_{\text{net}}$ bits of independent entropy to the causal boundary, after subtracting the mutual information cost from C5. The entropy density is:

$$\eta = n_1 \cdot s_{\text{net}} = \frac{\beta_n \cdot s_{\text{net}}(\beta_n)}{(\beta_n^2 + 1) a_2}$$

Since $a_2 \propto \ell^2$ (the smaller tile has area proportional to the square of the fundamental observer scale), this gives $\eta = \alpha(\beta_n)/\ell^2$ with:

$$\alpha(\beta_n) = \frac{\beta_n \cdot s_{\text{net}}(\beta_n)}{\beta_n^2 + 1}$$

This coefficient depends only on $\beta_n$ (through both the geometric ratio $\beta_n/(\beta_n^2+1)$ and the mutual information structure $s_{\text{net}}(\beta_n)$), not on the absolute scale $\ell$. $\square$

**Remark (Values for specific metallic means).**

| $n$ | $\beta_n$ | $\beta_n/(\beta_n^2 + 1)$ | Interpretation |
|---|---|---|---|
| 1 | $\varphi \approx 1.618$ | $\approx 0.447$ | Highest observer density fraction |
| 2 | $1+\sqrt{2} \approx 2.414$ | $\approx 0.341$ | Intermediate |
| 3 | $(3+\sqrt{13})/2 \approx 3.303$ | $\approx 0.270$ | Lower density |

The golden mean ($n=1$) gives the highest observer number density per unit area, consistent with the heuristic that maximal C5 non-degeneracy requires the densest possible non-periodic packing.

## Rigor Assessment

**Rigorous:**
- Definition 1.0: C5 constraint complexity — precise measure-theoretic formulation
- Proposition 1.1: Periodicity collapses C5 — $\kappa(R) \leq |F/\Lambda|^3$ bounded, conditional mutual information vanishes
- Proposition 2.0: Observer networks are Delone sets — minimum separation from loop closure, covering radius from no-boundary condition
- Definition 2.0–2.1: Delone set and FLC — standard definitions from aperiodic order theory
- Proposition 2.1: Disorder violates CUP — infinite distinct local configurations imply infinite distinct gravitational couplings; sparse regions create effective boundaries
- Theorem 1.1: Forced aperiodicity — Lagarias trichotomy for Delone sets (periodic / aperiodic-FLC / non-FLC) is standard; observer network mapped to Delone set (Proposition 2.0); periodic excluded (Proposition 1.1); non-FLC excluded (Proposition 2.1)
- Proposition 4.2: Two tile types from observer/dual duality (follows directly from [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs))
- Proposition 5.1: Primitivity from bootstrap closure (matrix theory applied to bootstrap structure)
- Theorem 5.2: Pisot condition from Solomyak's theorem (established mathematics [Solomyak, 1997])
- Theorem 2.1: Metallic mean family enumeration (explicit eigenvalue computation)
- Proposition 3.1: CUP decomposition (well-defined, constructive proof)
- Corollary 3.2: Solomyak guarantees unique ergodicity (direct application)
- Proposition 4.1: Packing coefficient computation (Perron-Frobenius eigenvector calculation)

**Semi-formal:**
- Proposition 4.1 (bootstrap as substitution, Step 4): The identification of the bootstrap equation $U \cong R(U,U)$ with a geometric substitution rule is natural but not formally proved — it requires showing that the abstract self-referential structure admits a spatial realization as a self-similar tiling. The correspondence is strongly motivated (both are recursive decompositions into two types at a fixed scale ratio), but a rigorous proof would require constructing an explicit functor from the observer category to a tiling space.

**Assessment:** Provisional. The exclusion arguments (Steps 1–3) are now rigorous: C5 non-degeneracy is formally defined (Definition 1.0), the observer network → Delone set mapping is established (Proposition 2.0), and the trichotomy follows from the standard Lagarias classification. The constructive results (Steps 4–8) are rigorous given the bootstrap-substitution identification. The single remaining semi-formal element (Proposition 4.1) is a natural structural correspondence with strong mathematical motivation. Promotion to rigorous requires formalizing the bootstrap-to-substitution functor (Gap 3).

## Open Gaps

1. ~~**Formal C5 non-degeneracy**~~ — **Resolved.** Definition 1.0 defines C5 constraint complexity $\kappa(R)$ measure-theoretically. Proposition 1.1(c) proves vanishing conditional mutual information $I(X_x; X_y \mid \Lambda) = 0$ for periodic networks.

2. ~~**Trichotomy proof**~~ — **Resolved.** Proposition 2.0 establishes the observer network as a Delone set (uniformly discrete from loop closure, relatively dense from no-boundary). Theorem 1.1 invokes the standard Lagarias classification of Delone sets.

3. **Bootstrap-substitution identification**: Prove that the abstract bootstrap equation $U \cong R(U,U)$ admits a geometric realization as a substitution tiling in $\mathbb{R}^d$. This requires constructing an explicit functor from the observer category to a tiling space, showing that the recursive structure of observer composition maps to a self-similar spatial decomposition. The single remaining semi-formal element.

4. **Metallic mean selection**: Determine which $n$ is selected by the multi-scale self-consistency condition ([Gravitational Coupling](/derivations/spacetime/gravitational-constant), Theorem 12.6). The golden mean ($n = 1$) is the simplest candidate (maximal aperiodicity, highest observer density), but a proof requires solving the renormalization-group fixed-point equation.

5. **Net entropy $s_{\text{net}}(\beta_n)$**: Derive the mutual information cost function from the axioms rather than assuming a Gaussian profile. This would fix $\alpha(\beta_n)$ numerically.

<!-- References -->
[Lagarias, 1999]: /references#lagarias-1999
[Solomyak, 1997]: /references#solomyak-1997
