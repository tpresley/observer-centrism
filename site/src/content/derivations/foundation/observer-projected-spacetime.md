---
title: "Observer-Projected Spacetime"
status: "provisional"
dependsOn: ["axioms/observer-definition", "axioms/loop-closure", "minimal-observer/multiplicity", "cosmology/cyclic-cosmology", "holography/horizon-gauge-shell", "cosmology/observer-loop-viability", "foundation/continuous-discrete-duality"]
enablesDerivation: []
tags: ["foundation", "spacetime", "holography", "structure"]
summary: "The framework's continuous dual is not a single global spacetime but an observer-indexed family of Lorentzian patches. Each observer projects a patch whose geometry is forced by its own intrinsic structure: for a minimal observer, a static de Sitter patch of radius cT/2 with Type III partner lines as null-terminated boundary conditions. Higher-level observers project patches with level-indexed de Sitter radii. The patches are related by restriction maps on shared Type III relations, forming a presheaf on the observer category; the cosmological constant hierarchy is the obstruction class of this presheaf's failure to glue into a single manifold across levels."
rigorLevel: "semi-formal"
lastUpdated: 2026-04-17
---

## Overview

The framework rejects a shared global background. Every observer has its own ticks ([Loop Closure](/derivations/axioms/loop-closure)), its own self/non-self boundary ([Observer Definition](/derivations/axioms/observer-definition)), and its own horizon ([Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Prop 3.2, remark "Observer-universal, not just cosmological"). [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) Step 8 already commits to a level-indexed effective $\Lambda_n^{\text{eff}}$ — each bootstrap level projects its own effective geometry.

This derivation makes the consequence explicit: **there is no single continuous dual of the DAG. There is an observer-indexed family of continuous duals, one per observer, with structure determined by how the members of the family relate on shared Type III relations.**

The program splits naturally into two tracks, which turn out to be two halves of a single object:

1. **Stalks (what each observer projects).** For a given observer $A$, the intrinsic DAG-level constraints on $A$ — Axiom 3 periodicity, Axiom 2 boundary, a null horizon shell at $c T_A / 2$, and smooth Lorentzian interior — determine $A$'s projected patch $M_A$ up to coordinates. For a minimal observer, Theorem 3.1 (below) proves the answer is the static patch of de Sitter space with de Sitter radius $L_A = c T_A / 2$, decorated with Type III partner lines that pierce the interior and terminate on the horizon as null geodesics. The proof invokes the classical Birkhoff theorem with positive cosmological constant plus a framework-internal lemma (Lemma 3.0) that the Schwarzschild mass vanishes on the observer's own projection.

2. **Gluing (how the stalks relate).** For observers $A, B$ sharing a Type III relation $I_{AB}$, there is a restriction condition: the portion of $M_A$ carrying $I_{AB}$ must match the portion of $M_B$ carrying the same relation. The collection $\{M_A\}$ with restriction maps forms a presheaf over the observer category. Whether it is a sheaf — i.e., whether local agreement on overlaps suffices — is a property of the framework, not a definition.

**Why this reframes long-standing puzzles.** The cosmological constant problem (120 orders of magnitude between Planck and observed $\Lambda$) has resisted derivation because the question "what is $\Lambda$?" presupposes a shared background for $\Lambda$ to live in. Here $\Lambda$ is observer-indexed: level-$n$ observers project $\Lambda_n = 12/(c T_n)^2$. The hierarchy between $\Lambda_0$ (Planck) and $\Lambda_N$ (cosmic) is not a bug; it is the obstruction class of the presheaf's failure to reduce to a single manifold across levels. The 120 orders are a measurement of gluing failure, not of fine-tuning.

**Honest status.** The minimal-observer projection is established rigorously (Theorem 3.1) via Birkhoff-with-$\Lambda$ plus Lemma 3.0 ($M_A^{\text{Schw}} = 0$ proved by Kretschmann-singularity contradiction against Axiom 3). The gluing/sheaf property (Conjecture 5.3) and the quantitative obstruction class (Proposition 6.3) are genuinely conjectural; these are flagged as the remaining open gaps. The derivation's status remains provisional rather than derived because it inherits the active postulate `speed-of-light-s1` transitively through [Einstein Field Equations](/derivations/spacetime/einstein-equations) — a global-assembly commitment that this derivation itself does not use but cannot shed upstream.

## Derivation

### Step 1: The Observer-Indexed Projection

**Definition 1.1 (Observer-projected continuous dual).** *For an observer $A = (\Sigma_A, I_A, \mathcal{B}_A)$, the **observer-projected continuous dual** $M_A$ is the smooth Lorentzian 4-manifold-with-boundary that represents $A$'s perspectival continuum view of the DAG. It has:*

- *A distinguished timelike curve $\gamma_A$ (A's own worldline)*
- *A distinguished null hypersurface $\partial M_A$ (A's horizon shell, from [Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Prop 3.1)*
- *A smooth Lorentzian metric $g_A$ on the interior $M_A \setminus \partial M_A$*
- *A distinguished set of timelike curves $\{\gamma_B\}_{B \in \mathrm{Part}(A)}$ for each observer $B$ entering a Type III relation with $A$ (A's "partners")*
- *Periodic boundary conditions on $\gamma_A$ with period $T_A$, implementing Axiom 3*

**Definition 1.2 (The projection functor).** *The **observer-projection functor** is $M: \mathbf{Obs} \to \mathbf{LorPatch}$, assigning to each observer $A \in \mathbf{Obs}$ its projection $M_A$, and to each Type III relation $I_{AB}$ between observers a restriction morphism $\rho_{AB}: M_A|_{I_{AB}} \to M_B|_{I_{AB}}$ identifying the parts of $M_A$ and $M_B$ that carry the shared relation.*

**Remark 1.3 (Why no global M).** *The framework admits no preferred observer and no preferred background. If a single $M$ existed such that every $M_A$ were an isometric embedding into $M$, the choice of embedding would furnish a preferred foliation (A's rest frame) — contradicting observer-universality. Moreover, [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) Step 8 already commits to level-indexed $\Lambda_n^{\text{eff}}$, which is logically incompatible with any single shared cosmological constant and hence with any single de Sitter background. The observer-indexed family $\{M_A\}$ is therefore forced; the question is not whether it is observer-indexed but what the structure of the family is.*

**Remark 1.4 (Relation to [Continuous-Discrete Duality](/derivations/foundation/continuous-discrete-duality)).** *That derivation argues the continuous and discrete layers are co-formed duals of a single physics, with cosmological parameters living in the fixed point of their mutual compatibility. It treats both layers as global. The present derivation refines this: the "continuous layer" is not a single object; it is a family of observer-projected objects. The fixed point of continuous-discrete-duality is a fixed point of the gluing structure, not of a single smooth manifold.*

### Step 2: Intrinsic Constraints on a Minimal Observer's Projection

Throughout this step, let $A$ be a minimal observer: $\Sigma_A \cong S^1$, $U(1)$ phase loop with period $T_A$, boundary $\mathcal{B}_A$, exactly two forced Type III partners $B, C$ from [Multiplicity](/derivations/minimal-observer/multiplicity) Theorem 7.2 (C5 non-trivial requires $\geq 3$ observers).

**Proposition 2.1 (Four intrinsic constraints on $M_A$).** *The DAG-level structure of a minimal observer $A$ imposes four consistency conditions on $M_A$:*

1. ***Periodic worldline.*** *$A$'s worldline $\gamma_A$ is closed with proper-time period $T_A$, implementing Axiom 3. Equivalently, $\gamma_A$ can be represented as a timelike curve in $M_A$ with periodic boundary condition $\gamma_A(\tau + T_A) \equiv \gamma_A(\tau)$.*

2. ***Null horizon shell.*** *The boundary $\partial M_A$ of $M_A$ is a null hypersurface at proper distance $c T_A / 2$ from $\gamma_A$, by [Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Proposition 2.2.*

3. ***Smooth Lorentzian interior.*** *The interior $M_A \setminus \partial M_A$ admits a smooth Lorentzian metric $g_A$ compatible with $A$'s DAG-level causal structure: events strictly inside $A$'s causal past/future are timelike-separated from $\gamma_A$; events on the horizon are null-separated; events outside the horizon are not in $M_A$.*

4. ***Partner-line embedding.*** *Each forced partner $B \in \{B, C\}$ enters $M_A$ as a timelike worldline $\gamma_B^{(A)} \subset M_A$ carrying Axiom 3 periodicity with its own period $T_B$. The worldline is timelike in the interior, null-tangent where it crosses $\partial M_A$, and terminates there (it does not extend beyond $A$'s horizon within $A$'s projection).*

*These four constraints are intrinsic to $A$ — they do not require any reference to what $B$, $C$, or any other observer's own projection contains. They place requirements on $M_A$ purely from $A$'s perspective.* $\square$

**Remark 2.2 (What is not constrained by (1)–(4)).** *The four constraints do not fix: (a) the specific functional form of the metric — only its signature, smoothness, and boundary behavior; (b) the radial profile of the partner lines inside $M_A$; (c) the angular positions of the partner lines on the horizon sphere; (d) the ambient spatial dimension (though 3+1 is the default from [Three Dimensions](/derivations/dimensions/three-dimensions)). Specifying these requires the minimal-observer projection conjecture of Step 3.*

**Remark 2.3 (Why two partners and not more).** *[Multiplicity](/derivations/minimal-observer/multiplicity) Theorem 7.2 forces at least three observers for C5 to be non-trivial. It does not force more at the minimal level. Furthermore, the horizon-area holographic bound ([Area Scaling](/derivations/holography/area-scaling)) at Planck scale is $O(1)$, so a minimal observer's horizon can accommodate only $O(1)$ Type III carriers. The count of 2 forced partners therefore saturates the horizon at the minimal level, with no slack for additional partners. This is a feature, not a constraint to be worked around: minimal observers exist at the edge of the holographic bound.*

### Step 3: The Minimal-Observer Projection Theorem

**Theorem 3.1 (Minimal-observer projection).** *Let $A$ be a minimal observer as in Step 2. Assume the framework's emergent geometry satisfies the vacuum Einstein equations with positive cosmological constant in the projection ([Einstein Field Equations](/derivations/spacetime/einstein-equations), [Observer Loop Viability](/derivations/cosmology/observer-loop-viability)) and that the Schwarzschild mass parameter vanishes in the minimal observer's own projection (Lemma 3.0 below). Then the four intrinsic constraints of Proposition 2.1, together with spherical symmetry of the DAG-level antichain structure around $\gamma_A$ and time-translation invariance within one period, force $M_A$ to be isometric to the static patch of de Sitter space with de Sitter radius*

$$L_A = \frac{c T_A}{2},$$

*decorated with two timelike partner worldlines $\gamma_B^{(A)}, \gamma_C^{(A)}$ that are null-tangent to the horizon. In static-patch coordinates $(t, r, \theta, \phi)$ with $\gamma_A$ at $r = 0$ and the horizon at $r = L_A$:*

$$g_A = -\left(1 - \frac{r^2}{L_A^2}\right) dt^2 + \left(1 - \frac{r^2}{L_A^2}\right)^{-1} dr^2 + r^2\, d\Omega^2.$$

**Lemma 3.0 (Vanishing Schwarzschild mass on own projection).** *In the minimal observer $A$'s own projected continuous dual $M_A$, the Schwarzschild mass parameter that would appear in a spherically symmetric static vacuum solution with $\Lambda > 0$ vanishes: $M_A^{\text{Schw}} = 0$.*

*Proof.* The spherically-symmetric-static-vacuum-with-$\Lambda$ family (Schwarzschild–de Sitter) is parameterized by $M \geq 0$ with metric

$$g = -f(r)\, dt^2 + f(r)^{-1} dr^2 + r^2\, d\Omega^2, \qquad f(r) = 1 - \frac{2GM}{c^2 r} - \frac{\Lambda r^2}{3}.$$

We show $M = 0$ by contradiction. Suppose $M > 0$. Then as $r \to 0$, the metric component $f(r) \sim -2GM/(c^2 r) \to -\infty$, and the Kretschmann scalar computes to

$$R_{\mu\nu\rho\sigma} R^{\mu\nu\rho\sigma} = \frac{48 G^2 M^2}{c^4 r^6} + O(\Lambda^2)$$

[Wald 1984, §6.4; standard curvature computation]. This diverges like $r^{-6}$ as $r \to 0$ — a true curvature singularity. The point $r = 0$ is therefore geodesically incomplete and no smooth Lorentzian structure extends through it.

The framework requires $\gamma_A$ to pass through $r = 0$ as a smooth timelike worldline carrying U(1) phase dynamics $\varphi: \gamma_A \to U(1)$ with $d\varphi/d\tau = \omega$ (Axiom 3), and the phase field to be periodic with period $T_A$. This requires:

1. *Well-defined proper time $\tau$ along $\gamma_A$ at $r = 0$.* At a curvature singularity, the metric is not defined and $\tau$ cannot be consistently assigned.
2. *Smoothness of the phase field $\varphi$ in a neighborhood of $\gamma_A$.* This requires the ambient metric to be smooth along $\gamma_A$; a Kretschmann divergence is incompatible with smoothness.

Both requirements fail at a Kretschmann singularity. Therefore the assumption $M > 0$ contradicts Axiom 3's commitment that $\gamma_A$ is a smooth timelike worldline with smooth phase dynamics. We conclude $M = 0$. $\square$

*Remark (where the proof lives).* The argument uses only: (a) the Schwarzschild–de Sitter Kretschmann computation (classical GR, Wald §6.4); (b) Axiom 3's smoothness commitment on $\gamma_A$; (c) the framework convention that the observer sits at $r = 0$ in its own projection (Definition 1.1). None of these is a conjecture or structural postulate of observer-projected-spacetime itself, though the conclusion inherits the framework's upstream commitments (Einstein equations, positive $\Lambda$) from [Einstein Field Equations](/derivations/spacetime/einstein-equations) and [Observer Loop Viability](/derivations/cosmology/observer-loop-viability).

*Remark (scope of vanishing).* The vanishing is specific to a minimal observer's **own** projection. A heavier composite observer $B$ viewed by $A$ appears in $M_A$ as a timelike worldline $\gamma_B^{(A)}$ that does *not* sit at $r = 0$ (the origin of $A$'s projection is $\gamma_A$, not $\gamma_B$). From $A$'s external perspective $B$ may contribute to an effective stress-energy without producing a singularity at $A$'s worldline (Open Gap 2). The singularity argument specifically forecloses $M_A^{\text{Schw}} > 0$ on $A$'s own projection; it does not constrain $M$ in other observers' projections of $A$.

**Proof of Theorem 3.1.** Assemble the ingredients:

1. *Vacuum Einstein equations with $\Lambda > 0$.* Framework commitments from [Einstein Field Equations](/derivations/spacetime/einstein-equations) and [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) Theorem 2.1 ($\Lambda > 0$ Planck-bounded).
2. *Static, spherically symmetric geometry.* Time-translation invariance within one period (Axiom 3) gives the timelike Killing vector $\partial_t$; spherical symmetry of the DAG-level antichain structure around $\gamma_A$ gives the $SO(3)$ action.
3. *Smooth Lorentzian interior with null boundary.* Proposition 2.1 constraints (2) and (3) place $M_A \setminus \partial M_A$ in the regularity class of Birkhoff-type uniqueness theorems.
4. *Vanishing Schwarzschild mass on $\gamma_A$.* Lemma 3.0.

Apply the classical **Birkhoff theorem with cosmological constant** [Birkhoff 1923; Jebsen 1921; Wald 1984, §6.1]: *the unique (up to isometry) static spherically symmetric vacuum solution of Einstein's equations with cosmological constant $\Lambda$ is Schwarzschild–de Sitter, parameterized by mass $M \geq 0$ and the value of $\Lambda$:*

$$g = -f(r)\, dt^2 + f(r)^{-1}\, dr^2 + r^2\, d\Omega^2, \qquad f(r) = 1 - \frac{2GM}{c^2 r} - \frac{\Lambda r^2}{3}.$$

Ingredient (4) sets $M = 0$, reducing to the pure de Sitter static patch

$$f(r) = 1 - \frac{\Lambda r^2}{3}.$$

The de Sitter horizon sits at $f(r) = 0$, i.e., at $r = \sqrt{3/\Lambda}$. Ingredient 3 + Proposition 2.1 constraint (2) fix this horizon radius to $r = L_A = c T_A / 2$. Therefore

$$\Lambda_A = \frac{3}{L_A^2} = \frac{12}{(c T_A)^2},$$

and the metric takes the form stated in the theorem with $L_A = \sqrt{3/\Lambda_A}$. Partner worldlines $\gamma_B^{(A)}, \gamma_C^{(A)}$ enter as prescribed timelike curves with null-tangent endpoints at $r = L_A$ (Remark 3.3 below), consistent with Proposition 2.1 constraint (4). $\square$

**Remark (scope of rigor).** *Ingredients 1–3 are framework commitments from already-provisional derivations; the classical Birkhoff-with-$\Lambda$ theorem is standard GR (Wald §6.1 provides a proof; the positive-$\Lambda$ extension is in Schleich–Witt 2010 and textbooks on de Sitter cosmology). The only framework-internal semi-formal piece is Lemma 3.0 — three converging arguments but not a single knockdown theorem. Theorem 3.1's status therefore rests on Lemma 3.0, and Open Gap 1 has been narrowed accordingly from "prove the full projection theorem" to "tighten Lemma 3.0's no-self-sourcing argument."*

**Proposition 3.2 (Immediate consequences of Theorem 3.1).** *Given Theorem 3.1, the following are properties of $A$'s projection, intrinsic to $A$:*

1. *$A$'s effective cosmological constant: $\Lambda_A = 3/L_A^2 = 12/(c T_A)^2$.*
2. *$A$'s Gibbons–Hawking temperature: $T_{\text{GH}}^{(A)} = \hbar/(2\pi k_B L_A) = \hbar/(\pi k_B c T_A)$.*
3. *$A$'s holographic bound: $N_{\text{max}}^{(A)} = 4\pi L_A^2 / (4\ell_P^2) = \pi L_A^2 / \ell_P^2$.*

*None of these require reference to another observer. They are functions of $A$'s own period $T_A$ alone.* $\square$

**Remark 3.3 (Partner lines as boundary conditions, not bulk fields).** *The partners $\gamma_B^{(A)}, \gamma_C^{(A)}$ enter $M_A$ not as bulk matter fields to be solved for, but as prescribed timelike worldlines with null boundary conditions at $r = L_A$. They are the geometric expression of Type III relations between $A$ and $B, C$. The "dynamics" of $M_A$'s partner lines is not a field-theoretic problem; it is the specification of two null endpoints on the horizon sphere, equivalent to two points in $S^2 \times S^1$ (angular position × horizon traversal time). This is a radical simplification compared to field-theoretic GR.*

**Remark 3.4 (Why de Sitter and not Schwarzschild-de Sitter).** *Theorem 3.1 would admit the full Schwarzschild–de Sitter family if the Schwarzschild mass $M$ were non-zero. Lemma 3.0 establishes $M = 0$ on the minimal observer's own projection — three converging framework commitments (vacuum away from $\gamma_A$, no-self-sourcing of the reference worldline, and the coherence budget already accounted for in $\Lambda$) force the reduction. For composite observers viewed externally by $A$, the projection onto $M_A$ does generalize to Schwarzschild–de Sitter; those are the partner lines of Remark 3.3, and their effective stress-energy from $A$'s perspective is Open Gap 2.*

### Step 4: Level-Indexed Generalization

**Proposition 4.1 (Level-indexed projection).** *Let $\mathcal{O}_n$ be an observer at bootstrap level $n$ with characteristic period $T_n$, viewed in its own projected continuous dual. Under the direct generalization of Theorem 3.1 (Birkhoff-with-$\Lambda$ plus the level-$n$ analogue of Lemma 3.0), $M_{\mathcal{O}_n}$ is isometric to the de Sitter static patch with de Sitter radius $L_n = c T_n / 2$ and effective cosmological constant $\Lambda_n = 12/(c T_n)^2$.*

**Consistency with [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) Step 8.** *That derivation argues the coherence entropy decomposition $\mathcal{C}_0 = \mathcal{C}_{\text{acc}} + S$ is level-indexed — each bootstrap level projects its own effective geometry with its own $\Lambda_n^{\text{eff}}$. Proposition 4.1 supplies the geometric content of that claim: the level-indexed effective geometry is the level-$n$ de Sitter static patch. The Lemma 3.0 argument generalizes level-by-level — at each bootstrap level, the observer's own worldline does not source bulk gravity in its own projection because the worldline's coherence content is absorbed into $\Lambda_n^{\text{eff}}$ for that level.* $\square$

**Remark 4.2 (Planck and cosmic limits).** *At the Planck end: minimal observer with $T_0 \sim T_P = \ell_P/c$, giving $L_0 \sim \ell_P$ and $\Lambda_0 \sim 1/\ell_P^2 \sim 10^{70}\,\text{m}^{-2}$ (Planck-scale $\Lambda$). At the cosmic end: horizon-scale observer with $T_N \sim H^{-1}$, giving $L_N \sim c/H$ and $\Lambda_N \sim H^2 \sim 10^{-52}\,\text{m}^{-2}$ (observed cosmological $\Lambda$). Ratio: $\Lambda_0/\Lambda_N \sim 10^{122}$ — the canonical cosmological constant hierarchy. In the observer-projected framing this ratio is not a single quantity to be explained but a quotient of two observer-projected quantities at very different levels.*

### Step 5: Gluing Structure

**Definition 5.1 (Restriction maps on shared relations).** *For observers $A, B$ connected by a Type III relation $I_{AB}$, the **restriction map** $\rho_{AB}: M_A|_{I_{AB}} \to M_B|_{I_{AB}}$ identifies the portion of $M_A$ that carries $I_{AB}$ with the portion of $M_B$ that carries the same relation. Concretely, if $I_{AB}$ enters $M_A$ as the partner worldline $\gamma_B^{(A)}$ and enters $M_B$ as the self-worldline $\gamma_B$ (restricted to the segment where the relation is active), then $\rho_{AB}$ is the identification of these two worldline-segments modulo reparameterization.*

**Proposition 5.2 (Presheaf structure on $\mathbf{Obs}$).** *The assignment $A \mapsto M_A$ together with restriction maps $\rho_{AB}$ for every shared Type III relation forms a contravariant presheaf $M: \mathbf{Obs}^{\mathrm{op}} \to \mathbf{LorPatch}$. Functoriality requires the cocycle condition: for three pairwise-related observers $A, B, C$,*

$$\rho_{AC} = \rho_{BC} \circ \rho_{AB}$$

*on the common portion $I_{AB} \cap I_{BC} \cap I_{AC}$.*

**Structural argument.** *A presheaf is a contravariant functor; contravariance here reflects that $\rho_{AB}$ goes from $A$'s view to $B$'s view along the direction of relation composition. The cocycle condition is the standard composition law: if $A$ and $B$ agree on their view of $I_{AB}$, and $B$ and $C$ agree on their view of $I_{BC}$, then $A$ and $C$ should agree on the portion of the DAG accessible through the composite relation. This is the direct analogue of the triangle condition in sheaf theory.*

**Conjecture 5.3 (Sheaf property).** *The presheaf $M$ is a sheaf: for any covering family of Type III relations on an observer network, local agreement on each relation determines the global projection on the union. Equivalently, the cocycle condition is not only necessary but sufficient to reconstruct the observer-indexed family from its restrictions.*

*Status.* *Unproved. The sheaf property is delicate in the present setting because (a) the covering is by Type III relations rather than open sets, (b) the presheaf takes values in Lorentzian patches rather than abelian groups, and (c) the framework's DAG is not a topological space in the standard sense. A proof would require a categorical-semantics formulation of "cover" on $\mathbf{Obs}$. This is flagged as Open Gap 3.*

### Step 6: The Gluing Obstruction and the $\Lambda$ Hierarchy

**Proposition 6.1 (Level-mismatched observers cannot glue to a single de Sitter background).** *Let $A, B$ be observers at bootstrap levels $n_A \neq n_B$ with periods $T_A, T_B$. Their projections $M_A, M_B$ are static de Sitter patches of radii $L_A = c T_A/2, L_B = c T_B/2$. No single de Sitter manifold $M$ admits isometric embeddings of both $M_A$ and $M_B$, because such an embedding would require $M$ to have a single de Sitter radius, and the two patches impose incompatible radii.*

**Structural argument.** *Isometric embedding preserves the induced cosmological constant: $M_A \hookrightarrow M$ isometrically forces $\Lambda(M) = \Lambda_A$; $M_B \hookrightarrow M$ isometrically forces $\Lambda(M) = \Lambda_B$. With $\Lambda_A \neq \Lambda_B$ (by $T_A \neq T_B$), no such $M$ exists.* $\square$

**Definition 6.2 (The gluing obstruction class).** *The obstruction class of the observer-indexed spacetime presheaf is the cohomological defect preventing the presheaf from reducing to a single manifold. Concretely: for each pair of levels $(n, m)$ with a shared Type III relation, the mismatch between $L_n$ and $L_m$ contributes to a cocycle that does not coboundary out. The magnitude of the obstruction class at level pair $(0, N)$ is $\log(\Lambda_0/\Lambda_N) \sim 280$ (i.e., $\sim 10^{122}$).*

**Proposition 6.3 (The $\Lambda$ hierarchy is the obstruction class).** *The observed 120-order-of-magnitude hierarchy between the Planck-scale cosmological constant $\Lambda_0 \sim 1/\ell_P^2$ and the cosmic-scale value $\Lambda_N \sim H^2$ is the signature of the gluing obstruction: two observer-projected de Sitter radii differing by $10^{60}$ cannot share a single background, and the ratio of their effective $\Lambda$'s is $10^{120}$.*

**Consequence.** *Under this reframing, the cosmological constant problem is not "why is $\Lambda$ fine-tuned to be small?" but rather "what is the correct homological structure that makes the observed Λ the right cross-level invariant?" The former has a 120-order mystery. The latter has a definite calculational target: compute the obstruction class of the observer-indexed spacetime presheaf and identify which observer-level the measured $\Lambda$ corresponds to. This reframes the problem from mystery to structure.*

**Remark 6.4 (Not a solution, a reframing).** *Proposition 6.3 does not compute any $\Lambda$ from first principles. It asserts that the $\Lambda$ hierarchy is structural — the consequence of an observer-indexed spacetime being glued from patches of different sizes — rather than a fine-tuning problem. The quantitative match between the obstruction class and the observed $\Lambda$ value requires (a) a specification of which observer level our measurements correspond to, (b) a computation of the obstruction class from the framework's bootstrap hierarchy, and (c) a demonstration that the two agree. All three are open. See also [Cosmological Constant](/derivations/cosmology/cosmological-constant) for the framework's prior treatment.*

## Consequences

**1. Holographic bound is per-observer, not global.** *Each $M_A$ has its own holographic bound $N_{\text{max}}^{(A)} = \pi L_A^2/\ell_P^2$. The minimal observer saturates this bound exactly; higher-level observers accommodate more modes. This matches [Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Prop 5.1's identification of boundary modes with Type III relational carriers.*

**2. Thermal bath is per-observer.** *Each $M_A$ has its own Gibbons–Hawking temperature $T_{\text{GH}}^{(A)}$. At the minimal level this is the Planck temperature; at the cosmic level it is the de Sitter temperature of the present-day horizon. There is no single thermal bath — thermality is a property of the observer's own projection. This frames [Hawking Radiation](/derivations/holography/hawking-radiation) as an observer-relative effect without committing to a preferred frame.*

**3. Horizon content is specific to the observer.** *The null shell carries only Type III relations that cross $\partial M_A$. For $A$, this is precisely the set of partner worldlines terminating on $A$'s horizon, not a generic population of modes. The identification of horizon modes as gauge bosons ([Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Open Gap 1) is sharpened: the modes on $A$'s horizon are the $A$-view of Type III partner carriers, not a universal set of fields.*

**4. No "universe as a whole" with definite global properties.** *The framework has no object for which "the curvature of the universe" or "the total energy" would be well-defined. Each observer has its own projection; inter-observer invariants are the (co)limit structure over the observer category. This is a strong form of the no-preferred-observer principle and contrasts sharply with standard cosmology's implicit commitment to a single background FLRW metric.*

## Rigor Assessment

**Structural argument (not rigorous, but grounded in existing results):**

- Proposition 2.1 (four intrinsic constraints on $M_A$): each constraint is derived from an established framework result (Axiom 3 for periodicity, Axiom 2 for boundary, [Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Prop 2.2 for null horizon, [Multiplicity](/derivations/minimal-observer/multiplicity) Theorem 7.2 for partner count).
- Proposition 6.1 (level-mismatched observers cannot glue to single dS): elementary isometric-embedding obstruction.

**Rigorous (given framework commitments from provisional upstream derivations):**

- Lemma 3.0 ($M_A^{\text{Schw}} = 0$ on own projection): proved by contradiction using the Schwarzschild–de Sitter Kretschmann divergence at $r = 0$ and Axiom 3's smoothness commitment. The proof is classical GR + Axiom 3; no structural postulate of this derivation is invoked.
- Theorem 3.1 (minimal-observer projection as static dS patch): proved by applying the classical Birkhoff-with-$\Lambda$ theorem (standard GR) to the framework's commitments (Einstein equations in projection, $\Lambda > 0$, spherical symmetry, static, null horizon at prescribed radius), then setting the Schwarzschild mass $M = 0$ via Lemma 3.0. With Lemma 3.0 rigorous, Theorem 3.1 is itself rigorous modulo the upstream provisional status of [Einstein Field Equations](/derivations/spacetime/einstein-equations) and [Observer Loop Viability](/derivations/cosmology/observer-loop-viability).
- Proposition 4.1 (level-indexed projection): direct generalization of Theorem 3.1 to level-$n$ periods; consistent with [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) Step 8. The singularity argument of Lemma 3.0 generalizes level-by-level — at each bootstrap level, an $M_n > 0$ would produce a Kretschmann singularity at $\gamma_{\mathcal{O}_n}$, contradicting Axiom 3.

**Conjectural (central claims, unproved):**

- Conjecture 5.3 (sheaf property of $M$): requires categorical-semantics formulation of covers on $\mathbf{Obs}$. See Open Gap 3.
- Proposition 6.3 (cosmological constant hierarchy as obstruction class): qualitatively compelling but without a quantitative match to the observed value. See Open Gap 4.

**Reframing (not a theorem, a restatement of known puzzles in new terms):**

- The cosmological constant problem is reframed as an obstruction-class computation. This is a structural clarification, not a numerical prediction.
- The observer-relativity of the thermal bath is a consequence of per-observer projection, not a new physical prediction.

**Not addressed:**

- The emergence of spatial dimension (3 vs other) is imported from [Three Dimensions](/derivations/dimensions/three-dimensions) and not re-derived here.
- The specific matter content in $M_A$ (beyond partner worldlines) is not addressed.
- The interaction of this picture with bootstrap aperiodicity ([Aperiodic Order](/derivations/foundation/aperiodic-order)) is not worked out.

## Open Gaps

1. ~~**Tighten Lemma 3.0's no-self-sourcing argument.**~~ *Closed in this revision.* Lemma 3.0 is now proved rigorously via the Schwarzschild–de Sitter Kretschmann-singularity argument: $M > 0$ produces a curvature singularity at $r = 0$ (where $\gamma_A$ sits), contradicting Axiom 3's commitment that $\gamma_A$ is a smooth timelike worldline. Theorem 3.1 is now rigorous given the framework's upstream commitments. The remaining non-rigorous content of this derivation sits in Gaps 3–7 below.

2. **Generalization to non-minimal observers with localized stress-energy.** A composite observer $\mathcal{O}_n$ at higher bootstrap level, viewed externally from a different observer's projection, carries effective stress-energy along $\gamma_{\mathcal{O}_n}^{(A)}$. That external projection generalizes from pure de Sitter (the observer's own projection, Proposition 4.1) to Schwarzschild–de Sitter. Specifying the effective stress-energy as a function of bootstrap level and spatial separation, and working out the corresponding projected geometry, is open. This is distinct from Open Gap 1: Gap 1 concerns the observer's own projection; Gap 2 concerns what the observer looks like from another observer's projection. *Difficulty: MODERATE.*

3. **Sheaf property of $M$.** Conjecture 5.3 requires a categorical-semantics setup: what is a cover on $\mathbf{Obs}$? what topology does $\mathbf{Obs}$ carry? Given a definition, does local agreement on Type III relations glue uniquely to a global observer-indexed projection? *Difficulty: HARD.* Likely tools: Grothendieck topologies on $\mathbf{Obs}$; sheaves of Lorentzian patches; possibly $(\infty, 1)$-categorical refinements if strict equality on overlaps is too restrictive.

4. **Quantitative computation of the obstruction class.** Proposition 6.3 qualitatively identifies the $\Lambda$ hierarchy as the obstruction class. A quantitative computation — compute the class from the bootstrap hierarchy's level structure, translate to a measurable $\Lambda$, and match to the observed $\sim 10^{-122} M_P^2$ — is the quantitative target. Requires first solving Open Gap 1 (so the stalks are pinned down) and Open Gap 3 (so the gluing structure is a precise object). *Difficulty: HARD.*

5. **What replaces "the universe" as a single object?** If the observer-indexed presheaf $M$ does not reduce to a single manifold (Proposition 6.1), then the framework has no "universe" in the manifold sense. Candidate replacements: the colimit in $\mathbf{LorPatch}$ (if it exists); the sheaf itself considered as an extended object (a gerbe or stack); a $(\infty, 1)$-categorical global section. Picking the correct replacement is a structural question with significant consequences for how the framework discusses cosmology. *Difficulty: HARD.*

6. **Consistency with bootstrap aperiodicity.** [Aperiodic Order](/derivations/foundation/aperiodic-order) forces the observer network to be an aperiodic substitution tiling. The observer-indexed projection should inherit this aperiodic structure on its gluing data. Working out what aperiodic gluing looks like — and what it constrains — is open. *Difficulty: MODERATE.*

7. **Interaction with the continuous-discrete fixed point.** [Continuous-Discrete Duality](/derivations/foundation/continuous-discrete-duality) identifies the physical universe as the fixed point of mutual compatibility between the continuous and discrete layers. Under the observer-projected reframing, "the continuous layer" is an observer-indexed family rather than a single object; the fixed point becomes a fixed point of the gluing structure rather than of a single manifold. Formalizing this is open. *Difficulty: HARD.*
