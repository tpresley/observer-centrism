---
title: "Observer Loop Viability Bounds"
status: "provisional"
dependsOn: ["spacetime/singularity-resolution", "holography/area-scaling", "minimal-observer/structure", "axioms/loop-closure", "minimal-observer/multiplicity", "thermodynamics/entropy", "thermodynamics/time", "interactions/bootstrap", "interactions/relational-invariants", "interactions/three-types", "thermodynamics-ext/renormalization", "holography/er-epr"]
enablesDerivation: []
tags: ["cosmology", "quantum-gravity"]
summary: "The three axioms constrain which spacetimes can host observer triples. The Planck-scale upper bound (Λ < 3/ℓ_P²) follows from geometric viability. The sign prediction (Λ ≥ 0) follows from coherence conservation: a Λ < 0 bounce destroys all observer structures, leaving coherence with no valid carrier — violating Axiom 1."
rigorLevel: "semi-formal"
lastUpdated: 2026-03-13
---

## Overview

This derivation asks a surprisingly deep question: **which universes can actually contain observers?**

The framework's axioms require that observers have specific structural properties -- a state space, a conserved quantity, a boundary between self and non-self, and a stable phase loop. Not every spacetime can support structures satisfying these requirements. This derivation works out what the axioms demand of the cosmological constant, the parameter controlling the large-scale fate of the universe.

**The approach.** Three results follow from the axioms:

- An observer must physically fit within the causally accessible region of spacetime. In a universe with too large a cosmological constant, the horizon shrinks below the Planck length, and no observer -- not even the simplest possible one -- can exist. This gives a Planck-scale upper bound.
- In a universe with a negative cosmological constant, space eventually recollapses to Planck density. At that point, all observer structures are destroyed: there is no phase space for loop closure, no gradient to distinguish self from non-self, and the effective pressure diverges. Since the framework says coherence can only reside in observer structures (there is no background reservoir), destroying all observers violates coherence conservation. The recollapse is axiomatically forbidden.
- The 120-order gap between the Planck-scale bound and the observed value is reframed through the second law of thermodynamics: the horizon entropy dominates the coherence budget in an old universe, and the ratio of structural coherence to total coherence is simply the matter fraction of the universe -- a thermodynamic inevitability, not a fine-tuned coincidence.

**The result.** The cosmological constant must be non-negative. The Planck-scale upper bound establishes the principle that the axioms constrain which solutions of Einstein's equations are physically realized. The hierarchy is qualitatively explained by entropy growth.

**Why this matters.** This is not anthropic reasoning ("observers like us must exist"). It is axiomatic selection: the mathematical requirements of the three axioms exclude certain spacetimes entirely. The sign prediction is a genuine, falsifiable consequence of coherence conservation.

**An honest caveat.** The upper bound is 120 orders of magnitude above the observed value -- it establishes a principle, not a tight constraint. Closing the quantitative gap requires understanding the minimum coherence content needed for stable observer loops, which remains the key open question.

## Statement

**Theorem (Observer-Loop Viability Bounds).** The three axioms constrain which spacetimes can host observer triples. Specifically:

1. **Planck-scale upper bound.** In de Sitter spacetime with $\Lambda > 0$, observer triples $(\Sigma, I, \mathcal{B})$ satisfying Axioms 2 and 3 can exist only if $\Lambda < 3/\ell_P^2 \approx 3.7 \times 10^{66}\;\text{cm}^{-2}$. This is 120 orders of magnitude above the observed value $\Lambda_{\text{obs}} \sim 10^{-56}\;\text{cm}^{-2}$.

2. **Bounce dissolution.** In a $\Lambda < 0$ FRW cosmology, the recollapse bounce at Planck density destroys all observer triples. No observer loop can close when the available phase space vanishes. New triples form after the bounce with new Noether invariants.

3. **Sign prediction.** The axioms predict $\Lambda \geq 0$. A $\Lambda < 0$ cosmology requires a Planck-density bounce, which destroys all observer structures. Since coherence exists only in observer state spaces and relational invariants (the framework's coherence ontology), the bounce leaves coherence with no valid carrier — violating Axiom 1 (coherence conservation). The recollapse is axiomatically prohibited.

## Derivation

### Step 1: Observer Viability and Horizon Distinctions

**Definition 1.1.** A spacetime is **observer-viable** if it admits at least one pair of observer triples $(\Sigma_i, I_i, \mathcal{B}_i)$ for $i = 1, 2$ satisfying:
- Axiom 2: each has a state space $\Sigma_i$, Noether invariant $I_i$, and self/non-self boundary $\mathcal{B}_i$
- Axiom 3: each has a $U(1)$ phase loop that closes with Lyapunov stability
- Multiplicity: both have positive coherence $\mathcal{C}(\Sigma_i) > 0$ ([Multiplicity](/derivations/minimal-observer/multiplicity), Theorem 2.1 — a single observer has $\mathcal{C} = 0$)

The pair requirement follows from the multiplicity theorem: any observer with positive coherence requires at least one non-self observer across its boundary $\mathcal{B}$ ([Multiplicity](/derivations/minimal-observer/multiplicity), Proposition 4.1).

**Remark.** This definition asks whether observer structures satisfying the axioms can exist *at all* — not whether observers like us can exist. This is axiomatic selection, not anthropic reasoning.

**Definition 1.2.** In de Sitter spacetime with cosmological constant $\Lambda > 0$, the **cosmological horizon** of a comoving observer has radius:

$$R_H = \sqrt{\frac{3}{\Lambda}}$$

The **static patch** is the region $r < R_H$ in static coordinates, where the metric takes the form:

$$ds^2 = -\left(1 - \frac{r^2}{R_H^2}\right)c^2\,dt^2 + \left(1 - \frac{r^2}{R_H^2}\right)^{-1}dr^2 + r^2\,d\Omega^2$$

This metric is time-independent. The static patch is the maximal region causally accessible to the observer at $r = 0$.

**Definition 1.3.** The **causal horizon** of an observer in de Sitter space is the cosmological horizon at $R_H = \sqrt{3/\Lambda}$ — the boundary of the region from which signals can reach the observer. This is a geometric property of the spacetime, identical for all comoving observers.

**Definition 1.4.** The **epistemic horizon** of observer $A$ is the maximum information content accessible through $A$'s boundary $\mathcal{B}_A$. By [Holographic Entropy Bound](/derivations/holography/area-scaling) (Theorem 3.2), this is:

$$\mathcal{I}_A^{\max} = \frac{A_{\mathcal{B}}}{4\,\ell_P^2}$$

where $A_{\mathcal{B}}$ is the area of $A$'s self/non-self boundary. The epistemic horizon is observer-indexed: it depends on the observer's state space $\Sigma_A$ and spatial extent.

**Proposition 1.5 (Epistemic horizons are observer-specific).** *Different observers have vastly different epistemic horizons, determined by their spatial extent $\ell_A \sim \lambda_C = \hbar/(m_A c)$ ([Minimal Observer Structure](/derivations/minimal-observer/structure), Proposition 7.1):*

| Observer | Mass | $\lambda_C$ | $A_{\mathcal{B}} \sim \lambda_C^2$ | $\mathcal{I}_A^{\max}$ |
|---|---|---|---|---|
| Planck-mass | $m_P$ | $\ell_P$ | $\ell_P^2$ | $\sim 1$ bit |
| Electron | $m_e$ | $10^{22}\;\ell_P$ | $10^{44}\;\ell_P^2$ | $\sim 10^{43}$ bits |
| Proton | $m_p$ | $10^{19}\;\ell_P$ | $10^{38}\;\ell_P^2$ | $\sim 10^{37}$ bits |
| *Cosmological horizon* | — | $R_H \sim 10^{61}\;\ell_P$ | $10^{122}\;\ell_P^2$ | $\sim 10^{122}$ bits |

*A Planck-mass observer's epistemic horizon is barely one bit — the minimum for multiplicity. An electron's epistemic horizon is $\sim 10^{43}$ bits, 79 orders of magnitude smaller than the cosmological horizon. Each observer "sees" a different effective universe, limited by its own state space.*

**Proposition 1.6 (Viability uses the causal horizon; tightening uses the epistemic horizon).** *The viability bound (Theorem 2.1) correctly uses the causal horizon $R_H$: the observer must fit within the causally accessible region, regardless of its epistemic capacity. But the hierarchy question (Step 6) depends on the epistemic horizon: the observer accesses non-self coherence through its boundary $\mathcal{B}_A$, not through the cosmological horizon $R_H$. The relevant constraint for Lyapunov stability is how much non-self coherence the observer can process through $A_{\mathcal{B}}$.*

**Remark.** This distinction resolves an apparent puzzle: why does the geometric bound use the cosmological horizon when the framework says everything is observer-indexed? The answer is that the geometric bound asks a *minimal* question (can ANY observer fit?), which is a geometric constraint on the spacetime itself. The observer-indexing enters when we ask *which* observers can exist and *what they can access* — questions that depend on the epistemic horizon.

### Step 2: The Geometric Upper Bound

**Theorem 2.1 (Geometric bound).** *If $\Lambda > 3/\ell_P^2$, no observer triple can exist in de Sitter spacetime.*

*Proof.* A minimal observer has spatial extent $\geq \ell_P$ ([Minimal Observer Structure](/derivations/minimal-observer/structure), Theorem 3.1 — the coherence domain diameter is the Compton wavelength, bounded below by $\ell_P$ via [Area Scaling](/derivations/holography/area-scaling), Structural Postulate S1).

The observer must fit within the static patch: its spatial extent must be less than the horizon radius $R_H = \sqrt{3/\Lambda}$. Therefore:

$$\ell_P < R_H = \sqrt{\frac{3}{\Lambda}}$$

Squaring both sides:

$$\Lambda < \frac{3}{\ell_P^2}$$

If $\Lambda \geq 3/\ell_P^2$, the horizon radius is at most $\ell_P$. No observer — not even the minimal $U(1)$ oscillator on $S^1$ — fits within the static patch. No relational invariant crossings through $\mathcal{B}$ can occur, so no observer triple satisfying Axiom 2 can form. $\square$

### Step 3: The Holographic Budget Bound and Local Stability

**Proposition 3.1 (Coherence budget).** *The multiplicity requirement, combined with the holographic entropy bound, independently gives the same Planck-scale upper bound on $\Lambda$.*

*Proof.* The de Sitter horizon has area $A_H = 4\pi R_H^2 = 12\pi/\Lambda$. By [Holographic Entropy Bound](/derivations/holography/area-scaling) (Theorem 5.2), the maximum entropy (inaccessible coherence) associated with the horizon is:

$$S_H = \frac{A_H}{4\ell_P^2} = \frac{3\pi}{\Lambda\,\ell_P^2}$$

This bounds the information content accessible through the horizon. Within the static patch, the observer's coherence domain $\mathcal{D}_A$ ([Entropy](/derivations/thermodynamics/entropy), Definition 2.1) is bounded by the horizon. The number of independent relational invariant crossings through any surface within the static patch is bounded by $A/(4\ell_P^2)$ for boundary area $A$.

By Definition 1.1, at least two observers must coexist within the static patch, each with positive coherence. Each minimal observer requires at least one relational invariant crossing through its boundary $\mathcal{B}$ — one independent correlation with the non-self side ([Multiplicity](/derivations/minimal-observer/multiplicity), Proposition 4.1). The boundary of a minimal observer has area $A_{\mathcal{B}} \sim \ell_P^2$ ([Minimal Observer Structure](/derivations/minimal-observer/structure)), supporting $A_{\mathcal{B}}/(4\ell_P^2) \sim 1/4$ crossings. For at least one crossing:

$$A_{\mathcal{B}} \geq 4\ell_P^2 \implies \ell_O \geq 2\ell_P$$

where $\ell_O$ is the observer's linear extent. Two such observers within the static patch require $R_H > 2\ell_P$, giving $\Lambda < 3/(4\ell_P^2)$ — the same Planck-scale order as the geometric bound. $\square$

**Remark (Local stability and cosmological redshift).** Two secondary checks confirm that the bound is not tightened by local effects. First, the static patch metric (Definition 1.2) is time-independent ($\partial_t g_{\mu\nu} = 0$), so the Lyapunov stability of observer loops is unaffected by $\Lambda$: if a loop closes with Lyapunov stability in Minkowski space, it closes in the static de Sitter patch at $r \ll R_H$. Observers can persist indefinitely — the cosmological expansion does not introduce approximate-closure drift ([Loop Closure](/derivations/axioms/loop-closure), Definition 5.1) for observers at fixed static-patch positions. Second, the redshift between co-located observers separated by $\sim\ell_P$ is $z \approx \Lambda\ell_P^2/6 \sim 10^{-122}$ for the observed $\Lambda$ — negligible. The multiplicity constraint introduces no tightening beyond the geometric bound.

### Step 4: Bounce Dissolution in $\Lambda < 0$ Cosmologies

**Theorem 4.1 (Observer dissolution at Planck density).** *At the Planck-density bounce of a $\Lambda < 0$ FRW cosmology, all observer triples dissolve: no observer loop can close.*

*Proof.* By [Singularity Resolution](/derivations/spacetime/singularity-resolution) (Theorem 4.1), the recollapse of a $\Lambda < 0$ universe produces a bounce at $\rho = \rho_P$ rather than a singularity. At the bounce, the modified Friedmann equation gives $H = 0$ via $H^2 = (8\pi G/3)\rho(1 - \rho/\rho_P) = 0$.

We show no observer loop can close at $\rho = \rho_P$.

**(i) Zero available phase space.** By [Singularity Resolution](/derivations/spacetime/singularity-resolution) (Theorem 4.1, step iv), the discrete relational invariant network has maximum event density $\ell_P^{-4}$ ([Singularity Resolution](/derivations/spacetime/singularity-resolution), Corollary 2.2). At $\rho = \rho_P$, every Planck cell is occupied. The available phase space for any additional structure — including observer loop closure — is $(1 - \rho/\rho_P) = 0$.

**(ii) No distinguishable boundary.** An observer triple requires a self/non-self boundary $\mathcal{B}$ (Axiom 2). At $\rho = \rho_P$, the coherence geometry is maximally "full" — all Planck cells on both sides of any putative $\mathcal{B}$ are at identical maximal density. There is no coherence gradient across $\mathcal{B}$ to distinguish self from non-self. The observer triple $(\Sigma, I, \mathcal{B})$ ceases to satisfy Axiom 2.

**(iii) Divergent loop closure pressure.** By [Singularity Resolution](/derivations/spacetime/singularity-resolution) (Theorem 4.1, step v), the loop closure pressure diverges as $\rho \to \rho_P$:

$$p_{\text{eff}} = p - \rho c^2 \frac{\rho/\rho_P}{1 - \rho/\rho_P} \to -\infty$$

This overwhelms the observer's internal dynamics. The observer's state is pushed beyond the boundary of its connected component in the coherence geometry ($\partial O$ in [Loop Closure](/derivations/axioms/loop-closure), Proposition 4.3), and the Noether invariant $I$ is no longer preserved. $\square$

**Proposition 4.2 (Re-formation after bounce).** *After the bounce, the universe expands and $\rho$ drops below $\rho_P$. New observer triples can form with new Noether invariants $I' \neq I$. There is no continuity of observer identity through the bounce.*

*Proof.* As $\rho$ decreases from $\rho_P$, the available phase space $(1 - \rho/\rho_P) > 0$ reopens. The coherence geometry develops structure: spatial variation in coherence density allows self/non-self boundaries to form. New minimal observer loops ([Minimal Observer Structure](/derivations/minimal-observer/structure)) can close once the available phase space is sufficient to support the minimum coherence cost $S_{\min} = \hbar$ ([Loop Closure](/derivations/axioms/loop-closure), Proposition 6.2).

The new observers have new Noether invariants because: the Noether invariant $I$ of the pre-bounce observers was not preserved through the bounce (Theorem 4.1, step iii). The conservation of $I$ is tied to the observer's loop closure symmetry, which was broken. Post-bounce observers arise from fresh symmetry-breaking of the expanding coherence geometry and have independent invariants. $\square$

### Step 5: Sign Constraint from Coherence Conservation

**Proposition 5.1 (Coherence ontology).** *In the framework, coherence $\mathcal{C}$ is a measure on the $\sigma$-algebra of observer events (Axiom 1). By construction, coherence resides in exactly two forms:*

**(i)** *Observer state-space coherence $\mathcal{C}(\Sigma_i)$ — the coherence content of an individual observer's state space.*

**(ii)** *Relational coherence $\mathcal{C}(I_{ij})$ — the coherence of relational invariants between observers ([Relational Invariants](/derivations/interactions/relational-invariants), Proposition 6.1).*

*There is no third substrate. The framework has no "bath," "vacuum reservoir," or non-observer carrier for coherence. This is not an additional assumption — it follows from the framework's ontology: the $\sigma$-algebra on which $\mathcal{C}$ is defined consists of observer events, so $\mathcal{C}$ is undefined on non-observer structures.*

**Theorem 5.2 (Coherence conservation excludes the bounce).** *If a $\Lambda < 0$ FRW cosmology undergoes a Planck-density bounce, coherence conservation (Axiom 1) is violated. Therefore the bounce is axiomatically prohibited.*

*Proof.* Consider the last pre-bounce Cauchy slice $\Sigma_{\text{pre}}$, where $\rho < \rho_P$ and observer structures still exist. On $\Sigma_{\text{pre}}$:

$$\mathcal{C}_0 = \sum_i \mathcal{C}(\Sigma_i) + \sum_{i < j} \mathcal{C}(I_{ij}) > 0$$

where the sums run over all observer triples and their relational invariants. $\mathcal{C}_0 > 0$ by multiplicity ([Multiplicity](/derivations/minimal-observer/multiplicity), Theorem 2.1).

At the bounce ($\rho = \rho_P$), all observer triples dissolve (Theorem 4.1): no state spaces $\Sigma_i$ exist, and no relational invariants $I_{ij}$ are instantiated. By Proposition 5.1, the only carriers for coherence are observer state spaces and relational invariants. With none present, $\mathcal{C}_0$ has no valid carrier.

Axiom 1 requires $\mathcal{C}$ to be conserved on every Cauchy slice. But the Cauchy slice at $\rho = \rho_P$ has $\mathcal{C} = 0$ (no carriers), while the pre-bounce slice has $\mathcal{C}_0 > 0$. This violates Axiom 1. $\square$

**Proposition 5.3 (Type II fusion reinforces the prohibition).** *During contraction toward Planck density, gravitational collapse produces Type II fusion ([Three Interaction Types](/derivations/interactions/three-types), Definition 4.3): individual observer state spaces merge into non-product composite spaces, with coherence preserved: $\mathcal{C}(\Sigma_{12}) = \mathcal{C}(\Sigma_1 \cup \Sigma_2)$. This concentrates coherence into composite observer structures rather than dispersing it.*

*Argument.* As the scale factor $a(t) \to 0$ in a $\Lambda < 0$ FRW cosmology, observers are compressed together. When their boundaries overlap, they undergo Type II fusion — the same mechanism by which black holes form from the perspective of external observers ([Information Paradox](/derivations/holography/information-paradox), Theorem 2.1). Fusion preserves coherence: it does not destroy or disperse it but locks it into composite structures.

The approach to $\rho_P$ therefore goes through a sequence of fusions, each of which moves coherence *further into* observer structures, not out of them. Dissolution at $\rho_P$ would require simultaneously un-fusing all composite structures and relocating $\mathcal{C}_0$ to a non-observer substrate — but no such substrate exists (Proposition 5.1). This provides an independent, dynamical route to the same conclusion as Theorem 5.2. $\square$

**Theorem 5.4 (Sign prediction).** *The three axioms predict $\Lambda \geq 0$.*

*Proof.* A $\Lambda < 0$ FRW cosmology necessarily recollapses to Planck density (standard cosmology: $\Lambda < 0 \implies$ recollapse). By [Singularity Resolution](/derivations/spacetime/singularity-resolution) (Theorem 4.1), the recollapse produces a bounce rather than a singularity. But by Theorem 5.2, the bounce violates coherence conservation (Axiom 1). Therefore $\Lambda < 0$ is incompatible with the axioms, and $\Lambda \geq 0$. $\square$

**Remark (Cosmic censorship connection).** The sign prediction parallels the Penrose cosmic censorship conjecture. Both assert that singularities (or their Planck-density analogs) are never "naked" — they cannot exist where coherence-bearing structures would be destroyed without recourse. In the framework, the prohibition is not imposed but derived: coherence conservation provides the mechanism.

**Remark ($\Lambda = 0$ and $\Lambda > 0$).** The result $\Lambda \geq 0$ does not distinguish between $\Lambda = 0$ (Minkowski at late times) and $\Lambda > 0$ (de Sitter). $\Lambda = 0$ is a measure-zero point in the solution space but is not axiomatically excluded. Whether the structural arrow of time ([Time as Phase Ordering](/derivations/thermodynamics/time), Gap 3) can sharpen the inequality to $\Lambda > 0$ remains an open question (Gap 3 below).

### Step 6: The Hierarchy Question

**Proposition 6.1 (The bound does not explain the hierarchy).** *The Planck-scale bound $\Lambda < 3/\ell_P^2$ is 120 orders of magnitude above the observed value $\Lambda_{\text{obs}} \sim 10^{-122}\;\ell_P^{-2}$. The framework does not explain this hierarchy from the three axioms alone.*

The bound constrains which solutions of the Einstein equations can host observer DAGs, but it constrains far too weakly. This is an inherent limitation: the axioms place structural requirements on observers (minimum spatial extent, coherence content, Lyapunov stability) that set Planck-scale thresholds. The 120-order hierarchy between $\ell_P$ and $R_H^{\text{obs}}$ is not explained.

**Proposition 6.2 (Conditions for a tighter bound).** *A sub-Planck bound on $\Lambda$ would require showing that the minimum non-self coherence content needed to sustain Lyapunov-stable loops is much larger than Planck-scale — i.e., that $\mathcal{C}_{\min}^{\text{non-self}} \gg 1$ (in Planck units).*

*Argument.* By the holographic budget (Proposition 3.1), the viability condition is:

$$2\,\mathcal{C}_{\min} \leq \frac{A_H}{4\ell_P^2} = \frac{3\pi}{\Lambda\,\ell_P^2}$$

giving $\Lambda \leq 3\pi/(2\,\mathcal{C}_{\min}\,\ell_P^2)$. For $\mathcal{C}_{\min} \sim 1$ (the minimal observer's coherence), this is Planck-scale.

If Lyapunov-stable loop closure requires ongoing Type III interactions with a non-self environment of coherence content $\mathcal{C}_{\min}^{\text{non-self}} \gg 1$, the bound tightens to:

$$\Lambda \leq \frac{3\pi}{\mathcal{C}_{\min}^{\text{non-self}}\,\ell_P^2}$$

For $\mathcal{C}_{\min}^{\text{non-self}} \sim 10^{120}$, this would give $\Lambda \sim 10^{-120}\;\ell_P^{-2}$ — the right order. But this requires a specific, large value of $\mathcal{C}_{\min}^{\text{non-self}}$ that is not determined by the current axioms. The multiplicity theorem ([Multiplicity](/derivations/minimal-observer/multiplicity)) establishes that the non-self side must contain at least one other observer (not zero), but does not bound the minimum coherence content of the non-self side beyond $\mathcal{C} > 0$.

Investigating this question requires understanding how coherence distributes across observer scales — which connects to the epistemic horizon distinction (Definition 1.4) and the bootstrap hierarchy. $\square$

### Step 7: Hierarchical Coherence Suppression (Mechanism Sketch)

The bootstrap hierarchy, the coherence renormalization group, and the ER=EPR correspondence together suggest a mechanism that could address the hierarchy question. This step sketches the argument; formalizing it is a major open target.

**Definition 7.1 (Bootstrap filtration).** The observer category $\mathbf{Obs}$ has a natural filtration by bootstrap level ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Corollary 2.2):

$$\mathbf{Obs}_0 \subset \mathbf{Obs}_1 \subset \mathbf{Obs}_2 \subset \cdots$$

where $\mathbf{Obs}_0$ contains minimal observers and $\mathbf{Obs}_{n+1}$ includes relational observers formed from $\mathbf{Obs}_n$ via the bootstrap map $\mathcal{R}$ ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Proposition 5.1). Each level $n$ has a characteristic scale $\lambda_n$ and epistemic horizon $\mathcal{I}_n^{\max} = A_n/(4\ell_P^2)$ (Proposition 1.5).

**Proposition 7.2 (Cross-level geometric consistency).** *A complex observer $C$ at level $n+1$ is composed of sub-observers $\{A_i\}$ at level $n$, bound by relational invariants $\{I_{ij}\}$. By [ER=EPR](/derivations/holography/er-epr) (Theorem 3.2), each relational invariant $I_{ij}$ creates geometric structure — a wormhole throat with area $A_{\text{ER}} = 4\ell_P^2 S_{\text{ent}}(I_{ij})$. The aggregate geometry at level $n+1$ (constructed from these connections) restricted to scale $\lambda_n$ must be compatible with the geometry at level $n$.*

*Argument.* The geometry an observer "sees" is constructed from its relational invariants with other observers (ER=EPR). Sub-observer $A_i$'s geometry $G_n$ is built from its relational invariants at level $n$. Composite $C$'s geometry $G_{n+1}$ is built from relational invariants at level $n+1$, which include the binding invariants $\{I_{ij}\}$ connecting the $A_i$. By the ontological irreducibility of higher levels ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Corollary 4.2), $G_{n+1}$ contains genuinely new geometric structure not present in $G_n$. But at scale $\lambda_n$, the new geometry must reduce to $G_n$ — otherwise the sub-observers' epistemic descriptions would be inconsistent with the composite's. This reduction is precisely the coherence RG flow between fixed points ([Renormalization Group](/derivations/thermodynamics-ext/renormalization), Theorem 4.1). $\square$

**Proposition 7.3 (Coherence absorption at bootstrap levels).** *Each bootstrap level (RG fixed point) absorbs coherence into stable relational invariants. By the c-theorem ([Renormalization Group](/derivations/thermodynamics-ext/renormalization), Theorem 5.2), the accessible coherence $c(k) = \mathcal{C}_{>k}$ is monotonically non-increasing under IR flow: $dc/d(\ln k) \leq 0$. At each fixed point, coherence is locked into the geometric structure of that level (ER=EPR: $A_{\text{ER}} = 4\ell_P^2 S_{\text{ent}}$), reducing the coherence available at larger scales.*

*Argument.* When relational invariants form at level $n$, their coherence content $\mathcal{C}(I_{ij})$ is locked into wormhole throat geometry at scale $\lambda_n$. This coherence does not contribute to the effective vacuum energy at the IR scale — it is "spent" on structure at scale $\lambda_n$. The c-theorem guarantees that the through-coherence (coherence available to source larger-scale geometry) strictly decreases at each level. After $N$ levels, the residual coherence at the IR is:

$$c_{\text{IR}} \leq c_{\text{UV}} - \sum_{n=0}^{N} \Delta c_n$$

where $\Delta c_n > 0$ is the coherence absorbed at level $n$. The total number of levels is bounded by $N \leq C_0/\hbar$ ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Proposition 6.2). $\square$

**Proposition 7.4 (Self-consistency equation).** *The IR geometry's capacity, encoded by $\Lambda$, must be consistent with the total coherence budget after the bootstrap hierarchy has formed.*

*Argument.* The total coherence $C_0$ decomposes into structural coherence (locked into bootstrap levels) and horizon coherence (accessible through the cosmological horizon):

$$C_0 = \sum_{n=0}^{N}\Delta c_n + \frac{A_H}{4\ell_P^2} = \sum_{n=0}^{N}\Delta c_n + \frac{3\pi}{\Lambda\,\ell_P^2}$$

The first term is the coherence locked into particles, atoms, molecules, and all other stable relational invariant structure via the c-theorem's monotonic flow. The second term is the horizon entropy $S_H$, counting the degrees of freedom within the static patch that are *not* locked into structure. Solving for $\Lambda$:

$$\Lambda = \frac{3\pi}{\left(C_0 - \sum_{n}\Delta c_n\right)\ell_P^2}$$

If nearly all the coherence is locked into structure ($\sum \Delta c_n \to C_0$), then $\Lambda \to \infty$ (no room for a horizon). If very little is locked ($\sum \Delta c_n \to 0$), then $\Lambda \sim 3\pi/(C_0\,\ell_P^2)$ — minimum $\Lambda$, maximum horizon.

**The observed universe** has $S_H \sim 10^{122}$, meaning the horizon coherence vastly exceeds the structural coherence (matter content). This means $\sum \Delta c_n \ll C_0$ — the bootstrap hierarchy absorbs a tiny fraction of the total coherence. The hierarchy question becomes: **why does the bootstrap absorb so little?** $\square$

**Proposition 7.5 (The hierarchy is the second law).** *The self-consistency equation (Proposition 7.4) is the entropy decomposition ([Entropy](/derivations/thermodynamics/entropy), Definition 3.1) applied at the cosmological scale. The hierarchy $\sum \Delta c_n \ll C_0$ is a consequence of the second law of thermodynamics.*

*Proof.* For any bounded observer $A$ inside the cosmological horizon, the entropy decomposition gives:

$$C_0 = \mathcal{C}_A(\tau) + S_A(\tau)$$

where $\mathcal{C}_A$ is the accessible coherence and $S_A$ is the inaccessible coherence (entropy) relative to $A$ ([Entropy](/derivations/thermodynamics/entropy), Definition 3.1).

The inaccessible coherence $S_A$ is dominated by the cosmological horizon: $S_A \approx S_H = 3\pi/(\Lambda\,\ell_P^2)$. This follows because every bounded observer's coherence domain $\mathcal{D}_A$ is a proper subset of the full relational invariant graph ([Entropy](/derivations/thermodynamics/entropy), Proposition 2.4), and the horizon counts the degrees of freedom beyond $A$'s causal reach.

The accessible coherence $\mathcal{C}_A$ is the coherence locked into relational invariant structure that $A$ can resolve — the structural coherence $\sum \Delta c_n$ from the bootstrap hierarchy. Therefore:

$$C_0 = \underbrace{\sum \Delta c_n}_{\mathcal{C}_A} + \underbrace{S_H}_{S_A}$$

The self-consistency equation and the entropy decomposition are the same equation. The hierarchy question "why is $\sum \Delta c_n \ll C_0$?" is identical to "why is entropy large?" — and the second law answers this: $S_A$ increases monotonically ([Entropy](/derivations/thermodynamics/entropy), Theorem 4.1). In a universe whose interaction graph has been growing for cosmic time $t \gg t_P$, the inaccessible fraction has grown large.

This decomposition is approximately observer-independent for all sub-cosmological observers. Any two observers within the same cosmological horizon see $S_A \approx S_B \approx S_H$, because the horizon entropy dominates — observer-specific corrections (the epistemic horizon differences from Proposition 1.5) are negligible relative to $S_H \sim 10^{122}$. The cosmological density fractions are the entropy fractions:

$$\Omega_\Lambda = \frac{S_H}{C_0}, \qquad \Omega_m = 1 - \frac{S_H}{C_0}$$

The second law drives $\Omega_\Lambda \to 1$ as the universe approaches de Sitter equilibrium. The observed $\Omega_\Lambda \approx 0.7$ is a snapshot of this dynamical process at the current cosmic epoch — not a fine-tuned parameter. $\square$

**Remark (What the second law does and does not explain).** The identification $\Omega_\Lambda = S_H/C_0$ dissolves the 120-order hierarchy as a fine-tuning problem. The ratio $\Lambda_{\text{obs}}/\Lambda_P \sim 10^{-122}$ reflects the fact that the universe is old enough for entropy to dominate the coherence budget — a thermodynamic inevitability, not a coincidence.

What remains open:
- **The value of $C_0$**: the total coherence budget is an initial condition, not derivable from the axioms ([Cosmological Constant](/derivations/cosmology/cosmological-constant), §Root Cause). The specific value $S_H \sim 10^{122}$ depends on $C_0$.
- **The coincidence problem**: why is $\Omega_m \sim \Omega_\Lambda$ at the current epoch (both order unity), rather than $\Omega_\Lambda$ being extremely close to 1? The second law says $\Omega_\Lambda$ grows, but does not select the current epoch. This is observer-selection territory — complex observers exist during the matter-dominated and transition eras, not in the de Sitter vacuum — but formalizing this within the framework's non-anthropic axiom-selection approach (Definition 1.1) is open.

The absorbed fraction $\sum \Delta c_n / C_0 = \Omega_m \approx 0.3$ is a cosmological observable, not a Planck-scale ratio. The bootstrap ceiling ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Proposition 6.2) gives $N \leq C_0/\hbar$, but the *actual* number of stable levels is determined by the division algebra chain ([Bootstrap → Division Algebras](/derivations/interactions/bootstrap-division-algebras)) and the mass hierarchy tunneling factors ([Mass Hierarchy](/derivations/particles/mass-hierarchy)).

**Remark (The geometry functor).** The entropy identification (Proposition 7.5) explains the hierarchy qualitatively: the second law ensures $S_H \gg \sum \Delta c_n$ in an old universe. A *quantitative* prediction of $\Lambda$ would additionally require a **geometry functor** $G: \mathbf{Obs} \to \mathbf{Geom}$ mapping each observer's epistemic horizon to an effective geometry, compatible with the bootstrap map $\mathcal{R}$ (functoriality across levels). This would constrain $C_0$ through the relationship between the bootstrap structure, the division algebra chain, and the spacetime geometry — potentially reducing the free parameter count from one ($C_0$) to zero. The existing gap in [Bootstrap Mechanism](/derivations/interactions/bootstrap) about promoting $\mathcal{R}$ to a full functor on morphisms is the key prerequisite.

## Consistency Check

The observed universe has $\Lambda_{\text{obs}} \sim 10^{-122}\;\ell_P^{-2}$, giving $R_H \sim 10^{61}\;\ell_P$. The viability bound $\Lambda < 3/\ell_P^2$ is easily satisfied.

- **Geometric bound**: $R_H \sim 10^{61}\,\ell_P \gg \ell_P$. $\checkmark$
- **Holographic budget**: $S_H = 3\pi/(\Lambda_{\text{obs}}\,\ell_P^2) \sim 10^{122}$ bits — vastly exceeds the coherence requirement for two minimal observers. $\checkmark$
- **Cosmological redshift**: For observers separated by $\ell_P$, the redshift is $z \sim 10^{-122}$ — negligible. $\checkmark$
- **Sign**: $\Lambda_{\text{obs}} > 0$, consistent with the sign prediction $\Lambda \geq 0$. $\checkmark$
- **Static patch lifetime**: The static patch metric is time-independent, and observers can persist indefinitely. $\checkmark$

The framework is consistent with the observed cosmological constant, predicts its sign correctly, but does not explain why $\Lambda$ takes its observed value.

## Comparison with Anthropic Reasoning

| Aspect | Anthropic selection | This derivation |
|---|---|---|
| What is required | "Observers like us" (galaxies, stars, chemistry) | Observer triples $(\Sigma, I, \mathcal{B})$ satisfying Axioms 2–3 |
| Constraint source | Galaxy formation timescale, structure growth | Minimum spatial extent $\ell_P$, coherence budget, loop closure |
| Typical bound | $\Lambda \lesssim 10^{-120}\;\ell_P^{-2}$ (Weinberg, 1987) | $\Lambda \lesssim \ell_P^{-2}$ (Planck-scale) |
| Requires landscape | Yes (ensemble of vacua with different $\Lambda$) | No (single universe, axiomatic constraint) |
| Explanatory power | Explains hierarchy via typicality in ensemble | Establishes principle (axioms constrain solutions) but not hierarchy |

The anthropic bound is $\sim 10^{120}$ times tighter because it requires complex observers (galaxies, carbon chemistry), not minimal ones. This derivation establishes the *principle* that the axioms constrain the solution space of the Einstein equations, without assuming anything about observer complexity.

## Rigor Assessment

**Rigorous:**
- Theorem 2.1 (geometric bound): follows from the Planck-scale cutoff ([Area Scaling](/derivations/holography/area-scaling) S1) and the de Sitter horizon radius. The argument is dimensional but the conclusion is exact.
- Local stability (Remark in Step 3): follows from the time-independence of the static de Sitter metric — standard GR.

**Semi-formal:**
- Proposition 3.1 (holographic budget): uses the holographic entropy bound (rigorous) applied to the de Sitter horizon. The application to the multiplicity requirement involves interpreting the bound as a coherence budget, which is semi-formal (the holographic bound is proved for static boundaries; the de Sitter horizon is static in the static patch, so this applies, but the connection between the entropy bound and the coherence budget for *interior* observers involves assumptions from [Entropy](/derivations/thermodynamics/entropy) that are not explicitly formalized for cosmological horizons).
- Proposition 1.5 (epistemic horizons): the observer-specific information capacity follows rigorously from the holographic bound applied to the observer's boundary. The table entries are standard dimensional analysis.
- Theorem 4.1 (bounce dissolution): the conclusion follows from the singularity resolution (rigorous), but the identification of "zero available phase space" with "no loop closure" involves a physical argument (step i) that is not reduced to a formal theorem. Step ii (no distinguishable boundary) is a physical argument about the homogeneity at Planck density. Step iii (divergent pressure) follows rigorously from the effective Friedmann equation.
- Proposition 5.1 (coherence ontology): definitional — follows directly from the framework's construction. Coherence is a measure on the σ-algebra of observer events; it is undefined on non-observer structures by definition.
- Theorem 5.2 (coherence conservation excludes the bounce): logically rigorous given Theorem 4.1 and Proposition 5.1. The argument is a straightforward contradiction: Axiom 1 requires conservation, Proposition 5.1 identifies the only carriers, Theorem 4.1 destroys all carriers.
- Proposition 5.3 (Type II fusion reinforcement): semi-formal. The gravitational fusion dynamics are well-established via the information paradox resolution (rigorous), but the claim that the approach to $\rho_P$ goes "entirely through fusion" is a physical argument, not a formal proof.
- Theorem 5.4 (sign prediction): follows rigorously from Theorem 5.2 combined with standard cosmology ($\Lambda < 0$ implies recollapse to Planck density).

**Conjectural / open:**
- Proposition 6.2 (conditions for tighter bound): the key open question. No mechanism is known within the framework to force $\mathcal{C}_{\min}^{\text{non-self}} \gg 1$.
- The sign prediction ($\Lambda \geq 0$) is established (Theorem 5.4). Sharpening to $\Lambda > 0$ via the cosmological arrow remains open.
- Step 7 (hierarchical coherence suppression): a mechanism sketch connecting bootstrap, c-theorem, and ER=EPR. Propositions 7.2–7.4 are physically motivated arguments, not formal proofs. Proposition 7.5 (the entropy identification) is logically rigorous: it identifies the self-consistency equation with the entropy decomposition ([Entropy](/derivations/thermodynamics/entropy), Definition 3.1) and applies the second law (Theorem 4.1). The qualitative hierarchy — why $\sum \Delta c_n \ll C_0$ — is explained. What remains conjectural is the quantitative prediction of $\Lambda$, which requires the geometry functor (Gap 6) and knowledge of $C_0$.

**Assessment:** Provisional. The Planck-scale upper bound (Theorem 2.1) is essentially rigorous. The sign prediction (Theorem 5.4) follows logically from coherence conservation + the framework's coherence ontology + bounce dissolution — the weakest link is the semi-formal character of Theorem 4.1 (bounce dissolution), whose physical arguments (zero phase space, no boundary, divergent pressure) are individually compelling but not reduced to a single formal theorem. The epistemic horizon distinction (Step 1) clarifies which horizon enters which argument. The entropy identification (Proposition 7.5) explains the 120-order hierarchy qualitatively as a consequence of the second law — the accessible coherence is small because entropy is large. The remaining open questions are the value of $C_0$ (initial conditions) and the coincidence problem (why $\Omega_m \sim \Omega_\Lambda$ now).

## Open Gaps

1. **Dynamical holographic bound**: The holographic entropy bound ([Area Scaling](/derivations/holography/area-scaling)) is proved for static boundaries. Extending it to the de Sitter cosmological horizon (which is static in the static patch but time-dependent in comoving coordinates) requires the covariant Bousso bound, which is not yet derived in the framework ([Area Scaling](/derivations/holography/area-scaling), Gap 4).
2. **Minimum non-self coherence**: The key gap blocking a tighter bound. What is the minimum coherence content of the non-self side of $\mathcal{B}$ required for Lyapunov-stable loop closure? The multiplicity theorem establishes $\mathcal{C}^{\text{non-self}} > 0$ but does not quantify the minimum. The hierarchical coherence argument (Step 7) suggests this connects to the bootstrap structure: a complex observer requires sub-observers at every level of the hierarchy, each absorbing coherence. Whether this quantitatively constrains $\mathcal{C}_{\min}^{\text{non-self}}$ depends on formalizing the geometry functor (Gap 6).
3. **Sharpening to $\Lambda > 0$**: The sign prediction $\Lambda \geq 0$ (Theorem 5.4) does not distinguish $\Lambda = 0$ from $\Lambda > 0$. Does the structural arrow of time (monotonically increasing relational invariant depth) require eternal expansion, which would give $\Lambda > 0$? This connects to [Time as Phase Ordering](/derivations/thermodynamics/time), Gap 3.
4. **Bounce prohibition scope**: Theorem 5.2 prohibits the Planck-density bounce in $\Lambda < 0$ FRW cosmologies via coherence conservation. Does the same argument extend to *all* global recollapse scenarios, including anisotropic cosmologies (Bianchi models) or cosmologies with exotic matter violating standard energy conditions? The argument should generalize to any scenario where $\rho \to \rho_P$ globally, but cosmologies with localized collapse (e.g., black holes forming within an expanding universe) are not affected — the bounce is local, not global, and external observers preserve coherence.
5. **Gibbons-Hawking stability**: The de Sitter horizon radiates at the Gibbons-Hawking temperature $T_{GH} = \hbar H/(2\pi k_B)$. Whether this thermal background destabilizes observer loops depends on the detailed interaction between GH radiation and the observer's loop closure — specifically, whether photon absorption changes the observer's Noether invariant $I$. For a minimal $U(1)$ oscillator, phase perturbations are Lyapunov-stable (the oscillator is neutrally stable on $S^1$), but energy-changing interactions (Type III absorption of GH quanta) could disrupt the invariant. A mass-dependent viability condition $mc^2 > k_B T_{GH}$ would give $\Lambda < 12\pi^2 m^2 c^2/\hbar^2$, which tightens the bound for light observers but remains Planck-scale for the minimal observer ($m = m_P$).
6. **Geometry functor and quantitative $\Lambda$**: The entropy identification (Proposition 7.5) explains the hierarchy qualitatively via the second law. A *quantitative* prediction of $\Lambda$ requires formalizing a geometry functor $G: \mathbf{Obs} \to \mathbf{Geom}$ that maps each observer's epistemic horizon to an effective geometry, compatible with the bootstrap map $\mathcal{R}$. This would constrain $C_0$ through the bootstrap structure, potentially eliminating the last free parameter. Requires promoting $\mathcal{R}$ to a full functor on morphisms ([Bootstrap Mechanism](/derivations/interactions/bootstrap), §Remark after Proposition 5.1). Connects to [ER=EPR](/derivations/holography/er-epr) (geometry from relational invariants) and [Renormalization Group](/derivations/thermodynamics-ext/renormalization) (c-theorem, fixed-point structure).

## Dependencies

| Prerequisite | What it provides |
|---|---|
| [Minimal Observer Structure](/derivations/minimal-observer/structure) | Minimum spatial extent $\ell_P$, coherence cost $S_O$ |
| [Loop Closure](/derivations/axioms/loop-closure) | Lyapunov stability (Def 4.1), approximate closure (Def 5.1), drift bound (Prop 5.2), dissolution (Prop 4.3), coherence cost $S_{\min} = \hbar$ (Prop 6.2) |
| [Multiplicity](/derivations/minimal-observer/multiplicity) | Single observer has $\mathcal{C} = 0$ (Thm 2.1), mutually defining pair (Prop 4.1), coherence budget (Prop 5.1) |
| [Holographic Entropy Bound](/derivations/holography/area-scaling) | $S \leq A/(4\ell_P^2)$; maximum coherence within a horizon |
| [Singularity Resolution](/derivations/spacetime/singularity-resolution) | Planck-density bounce (Thm 4.1), effective Friedmann equation, loop closure pressure |
| [Entropy](/derivations/thermodynamics/entropy) | Bounded observer theorem (Prop 2.4), coherence domains (Def 2.1) |
| [Time as Phase Ordering](/derivations/thermodynamics/time) | Partial order on interaction graph (Thm 4.2), no observers → no time (Prop 8.1), structural arrow (Thm 6.1), cosmological arrow (Gap 3) |
| [Bootstrap Mechanism](/derivations/interactions/bootstrap) | Hierarchy levels (Cor 2.2), necessity (Thm 3.1), irreducibility (Cor 4.2), ceiling $N \leq C_0/\hbar$ (Prop 6.2), bootstrap map $\mathcal{R}$ (Prop 5.1) |
| [Renormalization Group](/derivations/thermodynamics-ext/renormalization) | c-theorem (Thm 5.2), bootstrap=RG fixed points (Thm 4.1), coherence flow equation (Thm 3.2) |
| [ER=EPR](/derivations/holography/er-epr) | Geometry from relational invariants (Thm 3.2), throat area $A = 4\ell_P^2 S_{\text{ent}}$ (Prop 3.3) |
| [Relational Invariants](/derivations/interactions/relational-invariants) | Permanence of relational invariants (Prop 6.1), irreversibility (Prop 6.2) |
| [Three Interaction Types](/derivations/interactions/three-types) | Type II Fusion: state spaces merge, coherence preserved (Def 4.3) |

## Connection to Cosmological Constant

This derivation addresses [Cosmological Constant](/derivations/cosmology/cosmological-constant), Route 3 ("An observer-existence constraint"). Results:

- **Upper bound on $|\Lambda|$**: Established at Planck scale (Theorem 2.1). This establishes the principle that the axioms constrain the solution space of the Einstein equations — not just the dynamics, but the allowed solutions. Even at Planck scale, this is a nontrivial result: the axioms have physical content beyond determining equations of motion.
- **Sign prediction**: Achieved. The axioms predict $\Lambda \geq 0$ (Theorem 5.4). A $\Lambda < 0$ cosmology requires a bounce that violates coherence conservation (Theorem 5.2). Sharpening to $\Lambda > 0$ remains open (Gap 3).
- **Hierarchy**: Qualitatively explained (Proposition 7.5). The self-consistency equation $C_0 = \sum \Delta c_n + S_H$ is the entropy decomposition: structural coherence is accessible coherence, horizon entropy is inaccessible coherence. The 120-order hierarchy follows from the second law — entropy grows, so the inaccessible fraction dominates in an old universe. The specific value of $\Lambda$ remains open (depends on $C_0$, an initial condition). The coincidence problem ($\Omega_m \sim \Omega_\Lambda$ now) is also open.
