---
title: "Observer-Projected Spacetime"
status: "stub"
dependsOn: ["axioms/observer-definition", "axioms/loop-closure", "minimal-observer/multiplicity", "cosmology/cyclic-cosmology", "holography/horizon-gauge-shell", "cosmology/observer-loop-viability", "foundation/continuous-discrete-duality"]
enablesDerivation: []
tags: ["foundation", "spacetime", "holography", "structure"]
summary: "The framework's continuous dual is not a single global spacetime but an observer-indexed family of Lorentzian patches. Each observer projects a patch whose geometry is forced by its own intrinsic structure: for a minimal observer, a static de Sitter patch of radius cT/2 with Type III partner lines as null-terminated boundary conditions. Higher-level observers project patches with level-indexed de Sitter radii. The patches are related by restriction maps on shared Type III relations, forming a presheaf on the observer category; the cosmological constant hierarchy is the obstruction class of this presheaf's failure to glue into a single manifold across levels."
rigorLevel: "informal"
lastUpdated: 2026-04-16
---

## Overview

The framework rejects a shared global background. Every observer has its own ticks ([Loop Closure](/derivations/axioms/loop-closure)), its own self/non-self boundary ([Observer Definition](/derivations/axioms/observer-definition)), and its own horizon ([Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Prop 3.2, remark "Observer-universal, not just cosmological"). [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) Step 8 already commits to a level-indexed effective $\Lambda_n^{\text{eff}}$ — each bootstrap level projects its own effective geometry.

This derivation makes the consequence explicit: **there is no single continuous dual of the DAG. There is an observer-indexed family of continuous duals, one per observer, with structure determined by how the members of the family relate on shared Type III relations.**

The program splits naturally into two tracks, which turn out to be two halves of a single object:

1. **Stalks (what each observer projects).** For a given observer $A$, the intrinsic DAG-level constraints on $A$ — Axiom 3 periodicity, Axiom 2 boundary, a null horizon shell at $c T_A / 2$, and smooth Lorentzian interior — largely determine $A$'s projected patch $M_A$ up to coordinates. For a minimal observer, the conjectured answer is the static patch of de Sitter space with de Sitter radius $L_A = c T_A / 2$, decorated with Type III partner lines that pierce the interior and terminate on the horizon as null geodesics.

2. **Gluing (how the stalks relate).** For observers $A, B$ sharing a Type III relation $I_{AB}$, there is a restriction condition: the portion of $M_A$ carrying $I_{AB}$ must match the portion of $M_B$ carrying the same relation. The collection $\{M_A\}$ with restriction maps forms a presheaf over the observer category. Whether it is a sheaf — i.e., whether local agreement on overlaps suffices — is a property of the framework, not a definition.

**Why this reframes long-standing puzzles.** The cosmological constant problem (120 orders of magnitude between Planck and observed $\Lambda$) has resisted derivation because the question "what is $\Lambda$?" presupposes a shared background for $\Lambda$ to live in. Here $\Lambda$ is observer-indexed: level-$n$ observers project $\Lambda_n = 12/(c T_n)^2$. The hierarchy between $\Lambda_0$ (Planck) and $\Lambda_N$ (cosmic) is not a bug; it is the obstruction class of the presheaf's failure to reduce to a single manifold across levels. The 120 orders are a measurement of gluing failure, not of fine-tuning.

**Honest status.** This is a stub. It identifies the right structural object, states the intrinsic constraints on a minimal observer's projection, conjectures the specific form (static de Sitter patch), and characterizes the gluing obstruction. It does not prove the minimal-observer projection theorem (Step 3 below) nor quantitatively compute the obstruction class. Both are flagged as the central open gaps.

## Step 1: The Observer-Indexed Projection

**Definition 1.1 (Observer-projected continuous dual).** *For an observer $A = (\Sigma_A, I_A, \mathcal{B}_A)$, the **observer-projected continuous dual** $M_A$ is the smooth Lorentzian 4-manifold-with-boundary that represents $A$'s perspectival continuum view of the DAG. It has:*

- *A distinguished timelike curve $\gamma_A$ (A's own worldline)*
- *A distinguished null hypersurface $\partial M_A$ (A's horizon shell, from [Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Prop 3.1)*
- *A smooth Lorentzian metric $g_A$ on the interior $M_A \setminus \partial M_A$*
- *A distinguished set of timelike curves $\{\gamma_B\}_{B \in \mathrm{Part}(A)}$ for each observer $B$ entering a Type III relation with $A$ (A's "partners")*
- *Periodic boundary conditions on $\gamma_A$ with period $T_A$, implementing Axiom 3*

**Definition 1.2 (The projection functor).** *The **observer-projection functor** is $M: \mathbf{Obs} \to \mathbf{LorPatch}$, assigning to each observer $A \in \mathbf{Obs}$ its projection $M_A$, and to each Type III relation $I_{AB}$ between observers a restriction morphism $\rho_{AB}: M_A|_{I_{AB}} \to M_B|_{I_{AB}}$ identifying the parts of $M_A$ and $M_B$ that carry the shared relation.*

**Remark 1.3 (Why no global M).** *The framework admits no preferred observer and no preferred background. If a single $M$ existed such that every $M_A$ were an isometric embedding into $M$, the choice of embedding would furnish a preferred foliation (A's rest frame) — contradicting observer-universality. Moreover, [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) Step 8 already commits to level-indexed $\Lambda_n^{\text{eff}}$, which is logically incompatible with any single shared cosmological constant and hence with any single de Sitter background. The observer-indexed family $\{M_A\}$ is therefore forced; the question is not whether it is observer-indexed but what the structure of the family is.*

**Remark 1.4 (Relation to [Continuous-Discrete Duality](/derivations/foundation/continuous-discrete-duality)).** *That derivation argues the continuous and discrete layers are co-formed duals of a single physics, with cosmological parameters living in the fixed point of their mutual compatibility. It treats both layers as global. The present derivation refines this: the "continuous layer" is not a single object; it is a family of observer-projected objects. The fixed point of continuous-discrete-duality is a fixed point of the gluing structure, not of a single smooth manifold.*

## Step 2: Intrinsic Constraints on a Minimal Observer's Projection

Throughout this step, let $A$ be a minimal observer: $\Sigma_A \cong S^1$, $U(1)$ phase loop with period $T_A$, boundary $\mathcal{B}_A$, exactly two forced Type III partners $B, C$ from [Multiplicity](/derivations/minimal-observer/multiplicity) Theorem 7.2 (C5 non-trivial requires $\geq 3$ observers).

**Proposition 2.1 (Four intrinsic constraints on $M_A$).** *The DAG-level structure of a minimal observer $A$ imposes four consistency conditions on $M_A$:*

1. ***Periodic worldline.*** *$A$'s worldline $\gamma_A$ is closed with proper-time period $T_A$, implementing Axiom 3. Equivalently, $\gamma_A$ can be represented as a timelike curve in $M_A$ with periodic boundary condition $\gamma_A(\tau + T_A) \equiv \gamma_A(\tau)$.*

2. ***Null horizon shell.*** *The boundary $\partial M_A$ of $M_A$ is a null hypersurface at proper distance $c T_A / 2$ from $\gamma_A$, by [Horizon Gauge Shell](/derivations/holography/horizon-gauge-shell) Proposition 2.2.*

3. ***Smooth Lorentzian interior.*** *The interior $M_A \setminus \partial M_A$ admits a smooth Lorentzian metric $g_A$ compatible with $A$'s DAG-level causal structure: events strictly inside $A$'s causal past/future are timelike-separated from $\gamma_A$; events on the horizon are null-separated; events outside the horizon are not in $M_A$.*

4. ***Partner-line embedding.*** *Each forced partner $B \in \{B, C\}$ enters $M_A$ as a timelike worldline $\gamma_B^{(A)} \subset M_A$ carrying Axiom 3 periodicity with its own period $T_B$. The worldline is timelike in the interior, null-tangent where it crosses $\partial M_A$, and terminates there (it does not extend beyond $A$'s horizon within $A$'s projection).*

*These four constraints are intrinsic to $A$ — they do not require any reference to what $B$, $C$, or any other observer's own projection contains. They place requirements on $M_A$ purely from $A$'s perspective.* $\square$

**Remark 2.2 (What is not constrained by (1)–(4)).** *The four constraints do not fix: (a) the specific functional form of the metric — only its signature, smoothness, and boundary behavior; (b) the radial profile of the partner lines inside $M_A$; (c) the angular positions of the partner lines on the horizon sphere; (d) the ambient spatial dimension (though 3+1 is the default from [Three Dimensions](/derivations/dimensions/three-dimensions)). Specifying these requires the minimal-observer projection conjecture of Step 3.*

**Remark 2.3 (Why two partners and not more).** *[Multiplicity](/derivations/minimal-observer/multiplicity) Theorem 7.2 forces at least three observers for C5 to be non-trivial. It does not force more at the minimal level. Furthermore, the horizon-area holographic bound ([Area Scaling](/derivations/holography/area-scaling)) at Planck scale is $O(1)$, so a minimal observer's horizon can accommodate only $O(1)$ Type III carriers. The count of 2 forced partners therefore saturates the horizon at the minimal level, with no slack for additional partners. This is a feature, not a constraint to be worked around: minimal observers exist at the edge of the holographic bound.*

## Step 3: The Minimal-Observer Projection Conjecture

**Conjecture 3.1 (Minimal-observer projection).** *Let $A$ be a minimal observer as in Step 2. The four intrinsic constraints of Proposition 2.1, combined with spherical symmetry of the DAG-level antichain structure around $\gamma_A$ and time-translation invariance within one period, imply that $M_A$ is diffeomorphic to the static patch of de Sitter space with de Sitter radius*

$$L_A = \frac{c T_A}{2}$$

*decorated with two timelike partner worldlines $\gamma_B^{(A)}, \gamma_C^{(A)}$ that are null-tangent to the horizon. In static-patch coordinates $(t, r, \theta, \phi)$ with $\gamma_A$ at $r = 0$ and the horizon at $r = L_A$:*

$$g_A = -\left(1 - \frac{r^2}{L_A^2}\right) dt^2 + \left(1 - \frac{r^2}{L_A^2}\right)^{-1} dr^2 + r^2\, d\Omega^2$$

**Structural argument.** (1) Periodic worldline + smooth Lorentzian interior + null boundary at finite proper distance is the defining collection of features of a static horizon patch. (2) Spherical symmetry reduces the metric to a function of $r$ alone on an angularly isotropic 2-sphere. (3) The requirement that the horizon be null at $r = L_A$ forces $g_{tt}(L_A) = 0$. (4) The requirement of smoothness and Ricci-flatness away from matter sources picks out the de Sitter form over alternatives. (5) The remaining free constant is fixed by $L_A = c T_A / 2$ from Prop 2.1 (2). A rigorous proof requires a uniqueness theorem for static spherically symmetric null-bounded Lorentzian patches with a prescribed horizon radius. This is flagged as Open Gap 1.

**Proposition 3.2 (Immediate consequences of Conjecture 3.1).** *Conditional on Conjecture 3.1, the following are properties of $A$'s projection, intrinsic to $A$:*

1. *$A$'s effective cosmological constant: $\Lambda_A = 3/L_A^2 = 12/(c T_A)^2$.*
2. *$A$'s Gibbons–Hawking temperature: $T_{\text{GH}}^{(A)} = \hbar/(2\pi k_B L_A) = \hbar/(\pi k_B c T_A)$.*
3. *$A$'s holographic bound: $N_{\text{max}}^{(A)} = 4\pi L_A^2 / (4\ell_P^2) = \pi L_A^2 / \ell_P^2$.*

*None of these require reference to another observer. They are functions of $A$'s own period $T_A$ alone.* $\square$

**Remark 3.3 (Partner lines as boundary conditions, not bulk fields).** *The partners $\gamma_B^{(A)}, \gamma_C^{(A)}$ enter $M_A$ not as bulk matter fields to be solved for, but as prescribed timelike worldlines with null boundary conditions at $r = L_A$. They are the geometric expression of Type III relations between $A$ and $B, C$. The "dynamics" of $M_A$'s partner lines is not a field-theoretic problem; it is the specification of two null endpoints on the horizon sphere, equivalent to two points in $S^2 \times S^1$ (angular position × horizon traversal time). This is a radical simplification compared to field-theoretic GR.*

**Remark 3.4 (Why de Sitter and not Schwarzschild-de Sitter or general static).** *The minimal observer has no bulk mass content — it is a single $U(1)$ phase loop, not a gravitating body. Its projection is therefore vacuum Einstein with a cosmological constant, and the unique spherically symmetric static vacuum solution with a null horizon at finite proper distance is de Sitter. If the minimal observer were modeled as having a localized energy-momentum content at $\gamma_A$, the projection would generalize to Schwarzschild-de Sitter. The framework's minimal observer has no such localized content in the standard sense — its "mass" is 1 bit of epistemic freedom, not a rest energy in the Einstein-equation sense — and so the de Sitter form is the natural identification at leading order. Generalizations once $\gamma_A$ carries effective stress-energy are flagged as Open Gap 2.*

## Step 4: Level-Indexed Generalization

**Proposition 4.1 (Level-indexed projection).** *Let $\mathcal{O}_n$ be an observer at bootstrap level $n$ with characteristic period $T_n$. Its projected continuous dual $M_{\mathcal{O}_n}$ has, under the direct generalization of Conjecture 3.1, de Sitter radius $L_n = c T_n / 2$ and effective cosmological constant $\Lambda_n = 12/(c T_n)^2$.*

**Consistency with [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) Step 8.** *That derivation argues the coherence entropy decomposition $\mathcal{C}_0 = \mathcal{C}_{\text{acc}} + S$ is level-indexed — each bootstrap level projects its own effective geometry with its own $\Lambda_n^{\text{eff}}$. Proposition 4.1 supplies the geometric content of that claim: the level-indexed effective geometry is the level-$n$ de Sitter static patch.* $\square$

**Remark 4.2 (Planck and cosmic limits).** *At the Planck end: minimal observer with $T_0 \sim T_P = \ell_P/c$, giving $L_0 \sim \ell_P$ and $\Lambda_0 \sim 1/\ell_P^2 \sim 10^{70}\,\text{m}^{-2}$ (Planck-scale $\Lambda$). At the cosmic end: horizon-scale observer with $T_N \sim H^{-1}$, giving $L_N \sim c/H$ and $\Lambda_N \sim H^2 \sim 10^{-52}\,\text{m}^{-2}$ (observed cosmological $\Lambda$). Ratio: $\Lambda_0/\Lambda_N \sim 10^{122}$ — the canonical cosmological constant hierarchy. In the observer-projected framing this ratio is not a single quantity to be explained but a quotient of two observer-projected quantities at very different levels.*

## Step 5: Gluing Structure

**Definition 5.1 (Restriction maps on shared relations).** *For observers $A, B$ connected by a Type III relation $I_{AB}$, the **restriction map** $\rho_{AB}: M_A|_{I_{AB}} \to M_B|_{I_{AB}}$ identifies the portion of $M_A$ that carries $I_{AB}$ with the portion of $M_B$ that carries the same relation. Concretely, if $I_{AB}$ enters $M_A$ as the partner worldline $\gamma_B^{(A)}$ and enters $M_B$ as the self-worldline $\gamma_B$ (restricted to the segment where the relation is active), then $\rho_{AB}$ is the identification of these two worldline-segments modulo reparameterization.*

**Proposition 5.2 (Presheaf structure on $\mathbf{Obs}$).** *The assignment $A \mapsto M_A$ together with restriction maps $\rho_{AB}$ for every shared Type III relation forms a contravariant presheaf $M: \mathbf{Obs}^{\mathrm{op}} \to \mathbf{LorPatch}$. Functoriality requires the cocycle condition: for three pairwise-related observers $A, B, C$,*

$$\rho_{AC} = \rho_{BC} \circ \rho_{AB}$$

*on the common portion $I_{AB} \cap I_{BC} \cap I_{AC}$.*

**Structural argument.** *A presheaf is a contravariant functor; contravariance here reflects that $\rho_{AB}$ goes from $A$'s view to $B$'s view along the direction of relation composition. The cocycle condition is the standard composition law: if $A$ and $B$ agree on their view of $I_{AB}$, and $B$ and $C$ agree on their view of $I_{BC}$, then $A$ and $C$ should agree on the portion of the DAG accessible through the composite relation. This is the direct analogue of the triangle condition in sheaf theory.*

**Conjecture 5.3 (Sheaf property).** *The presheaf $M$ is a sheaf: for any covering family of Type III relations on an observer network, local agreement on each relation determines the global projection on the union. Equivalently, the cocycle condition is not only necessary but sufficient to reconstruct the observer-indexed family from its restrictions.*

*Status.* *Unproved. The sheaf property is delicate in the present setting because (a) the covering is by Type III relations rather than open sets, (b) the presheaf takes values in Lorentzian patches rather than abelian groups, and (c) the framework's DAG is not a topological space in the standard sense. A proof would require a categorical-semantics formulation of "cover" on $\mathbf{Obs}$. This is flagged as Open Gap 3.*

## Step 6: The Gluing Obstruction and the $\Lambda$ Hierarchy

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
- Proposition 4.1 (level-indexed projection): direct generalization of Conjecture 3.1 to level-$n$ periods; consistent with [Observer Loop Viability](/derivations/cosmology/observer-loop-viability) Step 8.
- Proposition 6.1 (level-mismatched observers cannot glue to single dS): elementary isometric-embedding obstruction.

**Conjectural (central claims, unproved):**

- Conjecture 3.1 (minimal-observer projection as static dS patch): structurally motivated but requires a uniqueness theorem for static spherically symmetric null-bounded Lorentzian patches with given horizon radius. See Open Gap 1.
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

1. **Minimal-observer projection theorem.** Conjecture 3.1 needs a rigorous proof: given the four intrinsic constraints of Proposition 2.1 plus spherical symmetry and time-translation invariance, show that $M_A$ is isometric to the static patch of de Sitter space with $L_A = c T_A / 2$. A proof requires a uniqueness theorem for static spherically symmetric null-bounded Lorentzian patches with prescribed horizon radius. *Difficulty: MODERATE.* Likely tools: Birkhoff-style uniqueness arguments adapted to finite static patches; Eddington–Finkelstein coordinates near the horizon; standard vacuum Einstein with $\Lambda$.

2. **Generalization to non-minimal observers with localized stress-energy.** A composite observer $\mathcal{O}_n$ at higher bootstrap level may carry effective stress-energy along $\gamma_{\mathcal{O}_n}$. The projection generalizes from pure de Sitter to Schwarzschild–de Sitter (or more general dressed geometries). Specifying the effective stress-energy as a function of bootstrap level and working out the corresponding projected geometry is open. *Difficulty: MODERATE.*

3. **Sheaf property of $M$.** Conjecture 5.3 requires a categorical-semantics setup: what is a cover on $\mathbf{Obs}$? what topology does $\mathbf{Obs}$ carry? Given a definition, does local agreement on Type III relations glue uniquely to a global observer-indexed projection? *Difficulty: HARD.* Likely tools: Grothendieck topologies on $\mathbf{Obs}$; sheaves of Lorentzian patches; possibly $(\infty, 1)$-categorical refinements if strict equality on overlaps is too restrictive.

4. **Quantitative computation of the obstruction class.** Proposition 6.3 qualitatively identifies the $\Lambda$ hierarchy as the obstruction class. A quantitative computation — compute the class from the bootstrap hierarchy's level structure, translate to a measurable $\Lambda$, and match to the observed $\sim 10^{-122} M_P^2$ — is the quantitative target. Requires first solving Open Gap 1 (so the stalks are pinned down) and Open Gap 3 (so the gluing structure is a precise object). *Difficulty: HARD.*

5. **What replaces "the universe" as a single object?** If the observer-indexed presheaf $M$ does not reduce to a single manifold (Proposition 6.1), then the framework has no "universe" in the manifold sense. Candidate replacements: the colimit in $\mathbf{LorPatch}$ (if it exists); the sheaf itself considered as an extended object (a gerbe or stack); a $(\infty, 1)$-categorical global section. Picking the correct replacement is a structural question with significant consequences for how the framework discusses cosmology. *Difficulty: HARD.*

6. **Consistency with bootstrap aperiodicity.** [Aperiodic Order](/derivations/foundation/aperiodic-order) forces the observer network to be an aperiodic substitution tiling. The observer-indexed projection should inherit this aperiodic structure on its gluing data. Working out what aperiodic gluing looks like — and what it constrains — is open. *Difficulty: MODERATE.*

7. **Interaction with the continuous-discrete fixed point.** [Continuous-Discrete Duality](/derivations/foundation/continuous-discrete-duality) identifies the physical universe as the fixed point of mutual compatibility between the continuous and discrete layers. Under the observer-projected reframing, "the continuous layer" is an observer-indexed family rather than a single object; the fixed point becomes a fixed point of the gluing structure rather than of a single manifold. Formalizing this is open. *Difficulty: HARD.*
