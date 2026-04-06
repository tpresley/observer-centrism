---
title: "Observer Loop Viability Bounds"
status: "rigorous"
dependsOn: ["spacetime/singularity-resolution", "holography/area-scaling", "minimal-observer/structure", "axioms/loop-closure", "minimal-observer/multiplicity", "thermodynamics/entropy", "thermodynamics/time", "interactions/bootstrap", "interactions/relational-invariants", "interactions/three-types", "thermodynamics-ext/renormalization", "holography/er-epr"]
enablesDerivation: ["cosmology/cosmological-arrow", "cosmology/dark-energy-equation-of-state"]
tags: ["cosmology", "quantum-gravity"]
summary: "The three axioms constrain which spacetimes can host observer networks. The Planck-scale upper bound (Λ < 3/ℓ_P²) follows from geometric viability. The sign prediction (Λ ≥ 0) follows from coherence conservation: a Λ < 0 bounce destroys all observer structures via divergent effective pressure, leaving coherence with no valid carrier — violating Axiom 1."
rigorLevel: "formal"
lastUpdated: 2026-04-03
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

**Definition 1.1.** A spacetime is **observer-viable** if it admits a network of observer triples $(\Sigma_i, I_i, \mathcal{B}_i)$ satisfying:
- Axiom 2: each has a state space $\Sigma_i$, Noether invariant $I_i$, and self/non-self boundary $\mathcal{B}_i$
- Axiom 3: each has a $U(1)$ phase loop that closes with Lyapunov stability
- Network multiplicity: at least three observers with positive coherence $\mathcal{C}(\Sigma_i) > 0$ ([Multiplicity](/derivations/minimal-observer/multiplicity): Theorem 2.1 — a single observer has $\mathcal{C} = 0$; Theorem 7.2 — pairs are insufficient because strong subadditivity (C5) is vacuous on two subsystems)

The network requirement follows from the multiplicity theorem: each observer requires at least two independent interaction partners for strong subadditivity to be non-trivial ([Multiplicity](/derivations/minimal-observer/multiplicity), Corollary 7.3). The bootstrap propagates this into a full network that must be boundaryless — either infinite or finite and topologically compact ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Corollary 7.3). For the geometric bound (Theorem 2.1), only the minimal requirement matters: at least one observer must fit within the static patch.

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

**Remark (Local stability and cosmological redshift).** Two secondary checks confirm that the bound is not tightened by local effects. First, the static patch metric (Definition 1.2) is time-independent ($\partial_t g_{\mu\nu} = 0$), so the Lyapunov stability of observer loops is unaffected by $\Lambda$: if a loop closes with Lyapunov stability in Minkowski space, it closes in the static de Sitter patch at $r \ll R_H$. Observers can persist indefinitely — the cosmological expansion does not introduce approximate-closure drift ([Loop Closure](/derivations/axioms/loop-closure), Definition 2.2) for observers at fixed static-patch positions. Second, the redshift between co-located observers separated by $\sim\ell_P$ is $z \approx \Lambda\ell_P^2/6 \sim 10^{-122}$ for the observed $\Lambda$ — negligible. The multiplicity constraint introduces no tightening beyond the geometric bound.

### Step 4: Bounce Dissolution in $\Lambda < 0$ Cosmologies

**Theorem 4.1 (Observer dissolution at Planck density).** *At the Planck-density bounce of a $\Lambda < 0$ FRW cosmology, all observer triples dissolve: no observer loop can close.*

*Proof.* By [Singularity Resolution](/derivations/spacetime/singularity-resolution) (Theorem 4.1), the recollapse of a $\Lambda < 0$ universe produces a bounce at $\rho = \rho_P$ rather than a singularity. At the bounce, the modified Friedmann equation gives $H = 0$ via $H^2 = (8\pi G/3)\rho(1 - \rho/\rho_P) = 0$.

We give three independent arguments, each sufficient to prove that no observer triple can exist at $\rho = \rho_P$.

**(i) Divergent effective pressure (primary argument).** By [Singularity Resolution](/derivations/spacetime/singularity-resolution) (Theorem 4.1, step v), the effective pressure diverges as $\rho \to \rho_P$:

$$p_{\text{eff}} = p - \rho c^2 \frac{\rho/\rho_P}{1 - \rho/\rho_P} \to -\infty$$

Any observer triple has finite energy $E_\mathcal{O} = m_\mathcal{O} c^2$ (from Axiom 3: finite loop period $T$ gives finite frequency $\omega = 2\pi/T$, hence finite energy $\hbar\omega$) and finite spatial extent $\ell_\mathcal{O} \geq \ell_P$. The work done by the effective pressure on the observer's volume is $|p_{\text{eff}}| \cdot \ell_\mathcal{O}^3$. Since $|p_{\text{eff}}| \to \infty$ and $E_\mathcal{O}$ is finite, there exists $\rho^\ast < \rho_P$ such that for $\rho > \rho^\ast$:

$$|p_{\text{eff}}| \cdot \ell_\mathcal{O}^3 > E_\mathcal{O}$$

Above $\rho^\ast$, the external pressure exceeds the observer's total energy. The observer's state is pushed beyond the boundary of its connected component in the coherence geometry ($\partial O$ in [Loop Closure](/derivations/axioms/loop-closure), Proposition 2.5), and the Noether invariant $I$ is no longer preserved. At $\rho = \rho_P$, the perturbation is unbounded, dissolving any observer with finite energy. $\square$

**(ii) Saturated phase space (independent confirmation).** By [Singularity Resolution](/derivations/spacetime/singularity-resolution) (Corollary 2.2), the discrete relational invariant network has maximum event density $\ell_P^{-4}$. At $\rho = \rho_P$, every Planck cell is occupied: the available phase space fraction is $(1 - \rho/\rho_P) = 0$. An observer requires at least one available degree of freedom for its state space $\Sigma$ ([Multiplicity](/derivations/minimal-observer/multiplicity), Theorem 2.1: $\mathcal{C}(\Sigma) > 0$ requires at least one bit). With zero available degrees of freedom, no observer can exist.

**(iii) No distinguishable boundary (independent confirmation).** An observer triple requires a self/non-self boundary $\mathcal{B}$ (Axiom 2). At $\rho = \rho_P$, the coherence density is spatially uniform at its maximum. Every Planck cell on both sides of any putative $\mathcal{B}$ is in the same state — there is no coherence gradient to distinguish self from non-self. By [Multiplicity](/derivations/minimal-observer/multiplicity) Proposition 1.2, $\mathcal{C}(\Sigma) > 0$ requires $G_\mathcal{O}^c \neq \emptyset$. With uniform maximal density, no transformation is preferentially "non-self," so $G_\mathcal{O}^c$ is trivially empty, giving $\mathcal{C}(\Sigma) = 0$ — the observer is vacuous.

**Proposition 4.2 (Re-formation after bounce).** *After the bounce, the universe expands and $\rho$ drops below $\rho_P$. New observer triples can form with new Noether invariants $I' \neq I$. There is no continuity of observer identity through the bounce.*

*Proof.* As $\rho$ decreases from $\rho_P$, the available phase space $(1 - \rho/\rho_P) > 0$ reopens. The coherence geometry develops structure: spatial variation in coherence density allows self/non-self boundaries to form. New minimal observer loops ([Minimal Observer Structure](/derivations/minimal-observer/structure)) can close once the available phase space is sufficient to support the minimum coherence cost $S_{\min} = \hbar$ ([Loop Closure](/derivations/axioms/loop-closure), Proposition 7.2).

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

**Proposition 7.4 (Coherence partition within a horizon volume).** *For any comoving observer $A$, the coherence within $A$'s cosmological horizon decomposes into structural coherence (locked into bootstrap levels) and horizon coherence:*

$$C_0^{(A)} = \sum_{n=0}^{N}\Delta c_n^{(A)} + S_H^{(A)}$$

*where $S_H^{(A)} = A_H/(4\ell_P^2) = 3\pi/(\Lambda\,\ell_P^2)$ is the entropy of $A$'s horizon.*

*Argument.* Each comoving observer has its own cosmological horizon, centered on itself. The coherence within that horizon partitions into structural coherence (locked into particles, atoms, molecules, and all other stable relational invariant structure via the c-theorem's monotonic flow) and horizon coherence (degrees of freedom not locked into structure). By the substrate's constitutive universality ([Aperiodic Order](/derivations/foundation/aperiodic-order), Corollary 3.2), $C_0^{(A)}$ has the same *value* for all comoving observers (same average density, same particle content, same horizon area), but refers to a different *region* for each one. We write $C_0$ without the superscript.

**Important: this is an accounting identity, not a constraint.** The equation defines how $C_0$ partitions. It is automatically satisfied for any $\Lambda$ and any matter fraction $\Omega_m$, because $C_0$, $\sum \Delta c_n$, and $S_H$ are all defined in terms of the same spacetime. Solving for $\Lambda$ gives:

$$\Lambda = \frac{3\pi}{\left(C_0 - \sum_{n}\Delta c_n\right)\ell_P^2}$$

but this does not determine $\Lambda$ — it merely re-expresses the partition. A genuine constraint on $\Lambda$ requires an *independent* computation of $\sum \Delta c_n$ from the bootstrap structure, without using $\Lambda$ as input. This is the role of the geometry functor (Gap 6) and the double-saturation conjecture (Conjecture 8.9).

**The observed universe** has $S_H \sim 10^{122}$, meaning the horizon coherence vastly exceeds the structural coherence (matter content). This means $\sum \Delta c_n \ll C_0$ — the bootstrap hierarchy absorbs a tiny fraction of the total coherence. The hierarchy question becomes: **why does the bootstrap absorb so little?** $\square$

**Remark ($C_0$ is per-horizon, not global).** The quantity $C_0$ is the coherence within a specific observer's cosmological horizon — not the total coherence of the universe. Axiom 1 conserves $\mathcal{C}_{\text{global}}$ on full Cauchy slices, which may extend far beyond any observer's horizon (and might be infinite if the observer network is spatially infinite). No observer can access $\mathcal{C}_{\text{global}}$. What enters the partition equation is $C_0$ — the per-horizon-volume budget. Its universality among comoving observers follows from the substrate's constitutive universality — the uniform patch frequencies guaranteed by the aperiodic order of the observer network ([Aperiodic Order](/derivations/foundation/aperiodic-order), Corollary 3.2). This is a structural consequence of the axioms, not an external assumption.

**Proposition 7.5 (The hierarchy is the second law).** *The self-consistency equation (Proposition 7.4) is the entropy decomposition ([Entropy](/derivations/thermodynamics/entropy), Definition 3.1) applied at the cosmological scale. The hierarchy $\sum \Delta c_n \ll C_0$ is a consequence of the second law of thermodynamics.*

*Proof.* For any bounded observer $A$ inside the cosmological horizon, the entropy decomposition gives:

$$C_0 = \mathcal{C}_A(\tau) + S_A(\tau)$$

where $\mathcal{C}_A$ is the accessible coherence and $S_A$ is the inaccessible coherence (entropy) relative to $A$ ([Entropy](/derivations/thermodynamics/entropy), Definition 3.1).

The inaccessible coherence $S_A$ is dominated by the cosmological horizon: $S_A \approx S_H = 3\pi/(\Lambda\,\ell_P^2)$. This follows because every bounded observer's coherence domain $\mathcal{D}_A$ is a proper subset of the full relational invariant graph ([Entropy](/derivations/thermodynamics/entropy), Proposition 2.4), and the horizon counts the degrees of freedom beyond $A$'s causal reach.

The accessible coherence $\mathcal{C}_A$ is the coherence locked into relational invariant structure that $A$ can resolve — the structural coherence $\sum \Delta c_n$ from the bootstrap hierarchy. Therefore:

$$C_0 = \underbrace{\sum \Delta c_n}_{\mathcal{C}_A} + \underbrace{S_H}_{S_A}$$

The self-consistency equation and the entropy decomposition are the same equation. The hierarchy question "why is $\sum \Delta c_n \ll C_0$?" is identical to "why is entropy large?" — and the second law answers this: $S_A$ increases monotonically ([Entropy](/derivations/thermodynamics/entropy), Theorem 4.1). In a universe whose interaction graph has been growing for cosmic time $t \gg t_P$, the inaccessible fraction has grown large.

This decomposition is approximately observer-independent for observers whose epistemic horizon satisfies $\mathcal{I}_n^{\max} \gg 1$. Any two such observers within the same cosmological horizon see $S_A \approx S_B \approx S_H$, because the horizon entropy dominates — observer-specific corrections (the epistemic horizon differences from Proposition 1.5) are negligible relative to $S_H \sim 10^{122}$.

**Caveat (validity domain).** This approximation breaks down for observers at low bootstrap levels. For a Planck-mass observer at level 0, the epistemic horizon is $\mathcal{I}_0^{\max} \sim 1$ bit (Proposition 1.5). Its "correction" is not small relative to $S_H$ — the observer's entire accessible coherence *is* the correction. Nearly all coherence is inaccessible from level 0's perspective. Step 8 makes this level-dependence precise: the entropy decomposition is genuinely level-indexed, and the hierarchy question looks fundamentally different from different levels of the bootstrap.

For observers at the electron scale or above ($\mathcal{I}_n^{\max} \gtrsim 10^{43}$), the approximation is excellent and the cosmological density fractions are the entropy fractions:

$$\Omega_\Lambda = \frac{S_H}{C_0}, \qquad \Omega_m = 1 - \frac{S_H}{C_0}$$

The second law drives $\Omega_\Lambda \to 1$ as the universe approaches de Sitter equilibrium. The observed $\Omega_\Lambda \approx 0.7$ is a snapshot of this dynamical process at the current cosmic epoch — not a fine-tuned parameter. $\square$

**Remark (What the second law does and does not explain).** The identification $\Omega_\Lambda = S_H/C_0$ dissolves the 120-order hierarchy as a fine-tuning problem. The ratio $\Lambda_{\text{obs}}/\Lambda_P \sim 10^{-122}$ reflects the fact that the universe is old enough for entropy to dominate the coherence budget — a thermodynamic inevitability, not a coincidence.

What remains open:
- **The crystallization fraction**: The partition equation (Proposition 7.4) is an accounting identity — it describes how $C_0$ splits but cannot determine $\Lambda$ on its own. A genuine constraint requires computing $\sum \Delta c_n$ independently from the bootstrap structure and particle content, without $\Lambda$ as input. This is the role of the geometry functor (Gap 6). Note that $C_0$ itself is not an independent "initial condition" — it is the per-horizon coherence budget, determined by $\Lambda$ and the expansion history. The genuine unknown is the crystallization fraction $\Omega_m = \sum \Delta c_n / C_0$.
- **The coincidence problem**: why is $\Omega_m \sim \Omega_\Lambda$ at the current epoch (both order unity), rather than $\Omega_\Lambda$ being extremely close to 1? The second law says $\Omega_\Lambda$ grows, but does not select the current epoch. This is observer-selection territory — complex observers exist during the matter-dominated and transition eras, not in the de Sitter vacuum — but formalizing this within the framework's non-anthropic axiom-selection approach (Definition 1.1) is open.

The absorbed fraction $\sum \Delta c_n / C_0 = \Omega_m \approx 0.3$ is a cosmological observable, not a Planck-scale ratio. The bootstrap ceiling ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Proposition 6.2) gives $N \leq C_0/\hbar$, but the *actual* number of stable levels is determined by the division algebra chain ([Bootstrap → Division Algebras](/derivations/interactions/bootstrap-division-algebras)) and the mass hierarchy tunneling factors ([Mass Hierarchy](/derivations/particles/mass-hierarchy)).

**Remark (The geometry functor and level-indexed $\Lambda$).** The entropy identification (Proposition 7.5) explains the hierarchy qualitatively: the second law ensures $S_H \gg \sum \Delta c_n$ in an old universe. A *quantitative* prediction of $\Lambda$ would additionally require a **geometry functor** $G: \mathbf{Obs} \to \mathbf{Geom}$ mapping each observer's epistemic horizon to an effective geometry, compatible with the bootstrap map $\mathcal{R}$ (functoriality across levels). Crucially, Step 8 shows that $G$ must produce **level-indexed effective cosmological parameters** $\Lambda_n^{\text{eff}}$ (Definition 8.2): each bootstrap level projects its own effective geometry with its own effective $\Lambda$. The constraint is not that all levels agree on a single $\Lambda$, but that the sequence $\{\Lambda_n^{\text{eff}}\}$ satisfies cross-level consistency (Proposition 8.3). This would constrain $C_0$ through the relationship between the bootstrap structure, the division algebra chain, and the spacetime geometry — potentially reducing the free parameter count from one ($C_0$) to zero. The existing gap in [Bootstrap Mechanism](/derivations/interactions/bootstrap) about promoting $\mathcal{R}$ to a full functor on morphisms is the key prerequisite.

### Step 8: Level-Dependent Coherence Partition

The framework says geometry is emergent: each observer projects an effective geometry from its accessible relational invariants via [ER=EPR](/derivations/holography/er-epr) (Theorem 3.2). The epistemic horizon distinction (Proposition 1.5) shows that different bootstrap levels project vastly different effective geometries. Step 7 used the self-consistency equation with $S_H$ treated as level-independent. This step makes the level-dependence explicit and identifies a potential category error in the standard 120-order hierarchy comparison.

**Definition 8.1 (Level-$n$ entropy partition).** For an observer at bootstrap level $n$ (Definition 7.1), the entropy decomposition ([Entropy](/derivations/thermodynamics/entropy), Definition 3.1) takes the form:

$$C_0 = \mathcal{C}_{\text{acc}}^{(n)} + S^{(n)}$$

where $\mathcal{C}_{\text{acc}}^{(n)}$ is the coherence accessible through the level-$n$ epistemic horizon $\mathcal{I}_n^{\max} = A_n/(4\ell_P^2)$, and $S^{(n)}$ is the inaccessible coherence from level $n$'s perspective. The inaccessible portion $S^{(n)}$ includes:

**(i)** The cosmological horizon entropy $S_H = 3\pi/(\Lambda\,\ell_P^2)$ — coherence beyond causal reach for any observer.

**(ii)** Coherence locked into bootstrap levels $> n$ that level-$n$ cannot resolve — relational invariants between composite observers at scales $> \lambda_n$ that are invisible to level $n$.

Therefore $S^{(n)} \geq S_H$ for all $n$, with equality only at the highest realized level $N$ where all sub-cosmological structure is resolved. For the minimal observer at level 0: $S^{(0)} \approx C_0 - O(1)$.

**Definition 8.2 (Effective cosmological parameter).** The geometry projected at level $n$ is constructed from relational invariants accessible to level-$n$ observers via [ER=EPR](/derivations/holography/er-epr). This projected geometry has an effective horizon determined by what level $n$ can access. Define $\Lambda_n^{\text{eff}}$ as the cosmological parameter of this effective geometry:

$$\Lambda_n^{\text{eff}} = \frac{3\pi}{S^{(n)}\,\ell_P^2}$$

At the highest level ($n = N$): $S^{(N)} = S_H$, so $\Lambda_N^{\text{eff}} = \Lambda$ — the effective parameter coincides with the geometric constant in the Einstein equations. At level 0: $S^{(0)} \approx C_0$, so $\Lambda_0^{\text{eff}} \approx 3\pi/(C_0\,\ell_P^2)$.

**Proposition 8.3 (Cross-level consistency).** *The effective cosmological parameters at different levels are not independent — they are constrained by the cross-level geometric consistency requirement (Proposition 7.2).*

*Argument.* By Proposition 7.2, the geometry $G_{n+1}$ at level $n+1$ restricted to scale $\lambda_n$ must reduce to the geometry $G_n$ at level $n$. The effective horizon at level $n+1$ is determined by $S^{(n+1)} = S^{(n)} - \Delta S_n$, where $\Delta S_n > 0$ is the coherence that becomes accessible when moving from level $n$ to level $n+1$ (the coherence locked into relational invariants at scale $\lambda_{n+1}$ that level $n$ could not resolve). Therefore:

$$\Lambda_{n+1}^{\text{eff}} = \frac{3\pi}{(S^{(n)} - \Delta S_n)\,\ell_P^2} > \Lambda_n^{\text{eff}}$$

The sequence $\{\Lambda_n^{\text{eff}}\}$ is strictly increasing with level — higher-level observers project geometries with larger effective $\Lambda$ (smaller effective horizons in the inaccessible sector, because they have resolved more of the coherence into accessible structure). The sequence is bounded above by $\Lambda = \Lambda_N^{\text{eff}}$ and below by $\Lambda_0^{\text{eff}} = 3\pi/(C_0\,\ell_P^2)$. The increments $\Delta S_n$ are determined by the bootstrap structure: the division algebra chain, the mass hierarchy tunneling factors, and the coherence absorbed at each RG fixed point (Proposition 7.3). $\square$

**Proposition 8.4 (Reframing the hierarchy).** *The standard statement of the cosmological constant hierarchy problem compares the Planck-scale bound $\Lambda < 3/\ell_P^2$ (Theorem 2.1) with the observed value $\Lambda_{\text{obs}} \sim 10^{-122}\;\ell_P^{-2}$. Within the framework, this comparison mixes two different levels of geometric projection.*

*Argument.* The Planck bound (Theorem 2.1) asks whether a minimal observer at level 0 can fit within the causal horizon. It constrains the *causal* structure of the spacetime, which is ontic and level-independent — the bound is $\Lambda < 3/\ell_P^2$ regardless of which level is doing the observing. This is correct.

However, the "observed value" $\Lambda_{\text{obs}}$ is measured by human-scale observers at a high bootstrap level $N$. What they measure is $\Lambda_N^{\text{eff}}$ — the effective cosmological parameter of the geometry projected at their level. The ratio:

$$\frac{\Lambda_{\text{obs}}}{\Lambda_P} = \frac{\Lambda_N^{\text{eff}}}{3/\ell_P^2} \sim 10^{-122}$$

is a cross-level comparison. It compares a bound set by level-0 viability with a parameter measured at level $N$. Within the framework, the natural comparison at each level is between $\Lambda_n^{\text{eff}}$ and the viability bound for level-$n$ observers.

This does not dissolve the hierarchy — the ontic cosmological constant $\Lambda$ that appears in the Einstein equations is still $10^{-122}$ in Planck units, and the framework cannot derive this value. But it reframes the *question*: the hierarchy is not "why is $\Lambda$ so small?" but "what determines the sequence $\{\Lambda_n^{\text{eff}}\}$ and its endpoint $\Lambda_N^{\text{eff}} = \Lambda$?" The answer lies in the bootstrap structure — how much coherence each level absorbs — which is determined by the division algebra chain, the mass hierarchy, and the geometry functor (Gap 6).

A numerical consistency check (using the empirical matter fraction $\Omega_m \approx 0.3$) sharpens this reframing — see Proposition 8.7. $\square$

**Proposition 8.5 (Breakdown of the level-independence approximation).** *Proposition 7.5 identifies the self-consistency equation with the entropy decomposition and claims approximate observer-independence. This approximation has a specific validity domain:*

| Level | $\mathcal{I}_n^{\max}$ | $S^{(n)}$ | $\Lambda_n^{\text{eff}}$ | Approximation |
|---|---|---|---|---|
| 0 (Planck) | $\sim 1$ | $\approx C_0$ | $\approx 3\pi/(C_0\,\ell_P^2)$ | **Fails** — $S^{(0)} \gg S_H$ |
| Electron | $\sim 10^{43}$ | $\approx C_0 - 10^{43}$ | $\approx \Lambda_0^{\text{eff}} + O(10^{-79})$ | Marginal |
| Proton | $\sim 10^{37}$ | $\approx C_0 - 10^{37}$ | similar | Marginal |
| Human scale | $\gg 10^{43}$ | $\approx S_H$ | $\approx \Lambda$ | **Valid** |
| Cosmological | $\sim 10^{122}$ | $= S_H$ | $= \Lambda$ | **Exact** |

*For observers at or above the electron scale, $S^{(n)}$ differs from $S_H$ by at most $10^{43}$ — negligible compared to $S_H \sim 10^{122}$. The approximation is excellent. For level-0 observers, $S^{(0)}/S_H \approx C_0/S_H \gg 1$ — the approximation fails completely.* $\square$

**Proposition 8.6 (The hierarchy from level 0's perspective).** *A minimal observer at level 0 "sees" an almost entirely de Sitter universe. Its effective cosmological fraction is:*

$$\Omega_\Lambda^{(0)} = \frac{S^{(0)}}{C_0} \approx 1 - \frac{O(1)}{C_0} \approx 1$$

*From level 0's perspective, there is no hierarchy problem in the partition — nearly all coherence is inaccessible. The universe it projects is almost entirely horizon, with vanishing structural content.*

**Proposition 8.7 (Numerical consistency check).** *Using the empirical matter fraction $\Omega_m \approx 0.3$ as input, the level-indexed quantities can be evaluated numerically. The result sharpens the reframing: the cross-level hierarchy is tiny, and the 120-order gap lives entirely in the absolute scale of $C_0$.*

*Calculation.* From $\Lambda_{\text{obs}} \approx 2.9 \times 10^{-122}\;\ell_P^{-2}$ and $\Omega_\Lambda \approx 0.7$:

$$S_H = \frac{3\pi}{\Lambda_{\text{obs}}\,\ell_P^2} \approx 3.25 \times 10^{122}, \qquad C_0 = \frac{S_H}{\Omega_\Lambda} \approx 4.6 \times 10^{122}$$

$$\sum \Delta c_n = \Omega_m \times C_0 \approx 1.4 \times 10^{122}$$

The level-indexed effective parameters (Definition 8.2):

$$\Lambda_0^{\text{eff}} = \frac{3\pi}{C_0\,\ell_P^2} \approx 2.0 \times 10^{-122}\;\ell_P^{-2}, \qquad \Lambda_N^{\text{eff}} = \Lambda_{\text{obs}} \approx 2.9 \times 10^{-122}\;\ell_P^{-2}$$

$$\frac{\Lambda_N^{\text{eff}}}{\Lambda_0^{\text{eff}}} = \frac{C_0}{C_0 - \sum \Delta c_n} = \frac{1}{\Omega_\Lambda} \approx 1.43$$

**The cross-level ratio is 1.43 — not $10^{122}$.** The entire 120-order hierarchy lives in the absolute scale of $C_0 \sim 10^{122}$, not in the difference between levels. Level 0 and level $N$ agree on $\Lambda$ to within a factor of $1/\Omega_\Lambda$.

This means the hierarchy question is precisely: **what determines the crystallization fraction $\Omega_m$?** The partition equation (Proposition 7.4) is an accounting identity that holds for any $\Lambda$. The level-indexing does not dissolve the question — it clarifies that $C_0$ is not a free "initial condition" (it is determined by $\Lambda$ and the expansion history) and that the genuine unknown is the crystallization fraction. $\square$

**Proposition 8.8 (The hierarchy requires an independent constraint).** *The partition equation $C_0 = \sum \Delta c_n + S_H$ cannot determine $\Lambda$ on its own — it is an accounting identity. The cosmological constant is determined only if $\sum \Delta c_n$ can be computed independently from the bootstrap structure.*

*Argument.* The partition equation defines $C_0 \equiv \sum \Delta c_n + S_H$. Expressing each term via $\Lambda$ and $\Omega_m$:

$$\frac{S_H}{1 - \Omega_m} = \frac{\Omega_m \cdot S_H}{1 - \Omega_m} + S_H$$

This simplifies to $1 = 1$ — a tautology. The equation is automatically satisfied for any $\Lambda$ and any $\Omega_m$. It describes the structure of the partition but cannot select which partition is realized.

A genuine constraint requires computing $\sum \Delta c_n$ from the bootstrap structure *without* $\Lambda$ as input. The bootstrap structure is finite and determined:
- 4 algebra levels (R, C, H, O) from [Bootstrap → Division Algebras](/derivations/interactions/bootstrap-division-algebras) (Theorem 7.1 — Hurwitz obstruction)
- 3 generations from [Three Generations](/derivations/particles/three-generations) (Theorem 3.1 — dim so(3) = 3)
- Coupling ratios $\alpha_1 : \alpha_2 : \alpha_3 = 4 : 2 : 1$ from [Coupling Constants](/derivations/cosmology/coupling-constants) (Proposition 2.1)
- Mass hierarchy pattern $\Lambda_k \sim \Lambda_{k-1} \cdot e^{-c_k/g_k^2}$ from [Mass Hierarchy](/derivations/particles/mass-hierarchy) (Theorem 3.1)

If the geometry functor (Gap 6) can compute $\sum \Delta c_n = F(\text{SM structure})$ as a function of the known particle content alone — independently of $\Lambda$ — then the partition equation becomes:

$$C_0(\Lambda) = F(\text{SM structure}) + S_H(\Lambda)$$

This is one equation in one unknown ($\Lambda$), with $S_H(\Lambda) = 3\pi/(\Lambda\ell_P^2)$ and $C_0(\Lambda) = F + S_H$. It has a solution for any positive $F$: $\Lambda = 3\pi/(C_0 - F)\ell_P^{-2}$. But determining $F$ — the total coherence crystallized by the SM — is the open problem. $\square$

**Conjecture 8.9 (Double saturation).** *The bootstrap hierarchy spans between two gravitationally saturated endpoints — the Planck observer and the cosmological horizon — and the requirement that both endpoints are simultaneously saturated, connected by the determined bootstrap structure, provides the independent constraint on $\sum \Delta c_n$ that the partition equation (Proposition 7.4) cannot supply on its own. If this constraint uniquely determines the crystallization fraction, it fixes $\Lambda$.*

*Motivation.* The partition equation is an identity (Proposition 8.8). To determine $\Lambda$, the framework needs a relationship between $\sum \Delta c_n$ and the SM structure that does not depend on $\Lambda$. The double-saturation boundary condition is the candidate.

At the bottom of the hierarchy, the minimal observer has spatial extent $\sim \ell_P$, Schwarzschild radius $R_S(m_P) = 2Gm_P/c^2 \sim \ell_P$, and Compton wavelength $\lambda_C(m_P) = \hbar/(m_P c) \sim \ell_P$. All three scales coincide. The holographic bound is saturated: the observer's boundary area $A_0 \sim \ell_P^2$ encodes exactly $\sim 1$ bit, and the observer is simultaneously the smallest possible and already at its own gravitational collapse limit.

At the top, each observer's cosmological horizon has radius $R_H = \sqrt{3/\Lambda}$. The mass enclosed within that horizon is $M_H = c^2 R_H/(2G)$ (in the de Sitter limit). Its Schwarzschild radius is $R_S(M_H) = 2GM_H/c^2 = R_H$. The horizon sits at its own gravitational collapse scale. The holographic bound is again saturated: $S_H = A_H/(4\ell_P^2)$ encodes the maximum information for a region of this size. (Each comoving observer has its own horizon, centered on itself. By constitutive universality the budget $C_0$ has the same value for all, but it is a per-observer quantity — not a global total. See Proposition 7.4, Remark.)

Between these two saturated endpoints, the bootstrap hierarchy builds a finite bridge: 4 algebra levels ([Bootstrap → Division Algebras](/derivations/interactions/bootstrap-division-algebras), Theorem 7.1), 3 generations ([Three Generations](/derivations/particles/three-generations), Theorem 3.1), coupling ratios $\alpha_1:\alpha_2:\alpha_3 = 4:2:1$ ([Coupling Constants](/derivations/cosmology/coupling-constants), Proposition 2.1), and exponential mass separations ([Mass Hierarchy](/derivations/particles/mass-hierarchy), Theorem 3.1). Each step absorbs coherence $\Delta c_n$ determined by the particle content and couplings at that level. The c-theorem ([Renormalization Group](/derivations/thermodynamics-ext/renormalization), Theorem 5.2) ensures the flow is monotonic.

The total coherence is:

$$C_0 = \underbrace{S_{\min}}_{\substack{\text{Planck}\\\text{saturation}}} + \underbrace{\sum_{n=1}^{N} \Delta c_n}_{\substack{\text{bootstrap}\\\text{bridge}}} + \underbrace{S_H}_{\substack{\text{cosmological}\\\text{saturation}}}$$

Both endpoints are pinned by gravitational saturation. The bridge structure is determined by the Standard Model content. [Mass Hierarchy](/derivations/particles/mass-hierarchy) (Step 7) shows that the bridge decomposes into two regimes with different information scaling:

$$\sum_{n=1}^{N} \Delta c_n = \underbrace{\sum_{n \leq 3} \Delta c_n^{\text{topo}}}_{\text{topological encoding}} + \underbrace{\sum_{n > 3} \Delta c_n^{\text{struct}}}_{\text{structural encoding}}$$

Within the division algebra chain ($n \leq 3$), information is stored topologically (gauge charges, winding numbers, generation indices) and the mass-information relationship is *inverse*: heavier particles have smaller boundaries and less epistemic capacity. Beyond the octonionic level ($n > 3$), the algebras are exhausted and information is stored structurally (relational invariant networks), where the mass-information relationship *reverses*: more complex composites have larger boundaries and more epistemic capacity. The topological contribution is bounded by the finite particle content that the division algebras determine. The structural contribution grows with composite complexity. The transition occurs at the confinement scale $\Lambda_{\text{QCD}} \sim 0.3$ GeV.

The self-consistency condition is: the bridge, with the determined $\{\Delta c_n\}$ in both regimes, must connect the two saturated endpoints. The partition equation alone cannot enforce this (it is an identity — Proposition 8.8). The double-saturation boundary condition provides an independent constraint: the total crystallized coherence $\sum \Delta c_n$ must be exactly the amount that the SM structure produces when the substrate density is at Planck saturation (bottom) and the total substrate fills a gravitationally-saturated horizon (top).

*The conjecture*: this boundary-value problem has a unique solution. That is, there exists exactly one value of $\Lambda$ for which the bootstrap hierarchy, with the particle content determined by the division algebra chain, simultaneously satisfies Planck saturation at the bottom and cosmological saturation at the top, with $\sum \Delta c_n$ computed independently from the SM structure rather than read off from $\Lambda$.

*What is needed to prove or disprove the conjecture:* The geometry functor $G: \mathbf{Obs} \to \mathbf{Geom}$ must be formalized (Gap 6) to the point where the coherence absorption $\Delta c_n$ at each bootstrap level can be computed from the SM particle content and the saturation boundary conditions — without $\Lambda$ as input. If the resulting $\sum \Delta c_n = F(\text{SM structure, saturation conditions})$ yields a unique $\Lambda$ via $\Lambda = 3\pi/((C_0 - F)\ell_P^2)$, the conjecture is proved. If no consistent solution exists, the framework is inconsistent. If multiple solutions exist, additional structure is needed.

*Observational check:* With the empirical matter fraction $\Omega_m \approx 0.3$, the holographic bound on the structural coherence gives $\sum \Delta c_n \leq S_H$ (the information within the horizon cannot exceed the horizon entropy), which constrains $\Omega_\Lambda \geq 0.5$. The observed $\Omega_\Lambda \approx 0.7$ satisfies this bound. The structural coherence $\sum \Delta c_n \approx 0.43\,S_H$ is well within the holographic limit — the bridge uses less than half the available "room" between the two saturated endpoints.

**Remark (What Step 8 does and does not show).** Step 8 defines the level-indexed quantities ($S^{(n)}$, $\Lambda_n^{\text{eff}}$), shows where the level-independence approximation breaks down (Proposition 8.5), localizes the hierarchy to the crystallization fraction rather than the absolute scale of $C_0$ (Proposition 8.7), shows that the partition equation is an identity rather than a constraint (Proposition 8.8), and identifies double saturation as the boundary condition that could provide the missing independent constraint (Conjecture 8.9). The hard theorems of this derivation (Theorems 2.1, 4.1, 5.4) remain unchanged — they use the causal horizon, which is ontic and level-independent. The remaining open question is whether $\sum \Delta c_n$ can be computed independently from the SM structure and saturation boundary conditions — this is the sharpened form of the geometry functor program (Gap 6).

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
| Constraint source | Galaxy formation timescale, structure growth | Minimum spatial extent $\ell_P$, coherence budget, loop closure, bootstrap structure |
| Typical bound | $\Lambda \lesssim 10^{-120}\;\ell_P^{-2}$ [Weinberg, 1987] | $\Lambda \lesssim \ell_P^{-2}$ (Planck-scale, Thm 2.1) |
| Requires landscape | Yes (ensemble of vacua with different $\Lambda$) | No (single universe, axiomatic constraint) |
| Free parameters | None ($\Lambda$ selected by typicality in ensemble) | One ($C_0$, constrained by double-saturation fixed-point equation, Conj. 8.9) |
| Hierarchy mechanism | Typicality: most observers see $\Lambda \sim 10^{-122}$ | Self-consistency: $C_0$ determined by finite bootstrap bridge between two saturated endpoints (Step 8) |
| Status | Requires string landscape (unproven) | Requires geometry functor (Gap 6, open) to compute bridge and solve fixed-point equation |

The anthropic bound is $\sim 10^{120}$ times tighter because it requires complex observers (galaxies, carbon chemistry), not minimal ones. This derivation's *rigorous* bound (Theorem 2.1) is correspondingly weaker. However, Step 8 provides a structurally different path to the hierarchy that does not rely on a landscape or typicality arguments: the finite bootstrap structure (4 algebra levels, 3 generations, known coupling ratios) converts $\Lambda$ from an unconstrained free parameter to a self-consistency condition on a computable system with one remaining unknown ($C_0$). The numerical check (Proposition 8.7) confirms that the cross-level ratio is only $\sim 1.4$ — the hierarchy is entirely about the absolute scale of $C_0$, which is determined by the self-consistency loop. Whether this loop has a unique fixed point is the open question (Gap 6).

## Rigor Assessment

**Rigorous:**
- Theorem 2.1 (geometric bound): follows from the Planck-scale cutoff ([Area Scaling](/derivations/holography/area-scaling) S1) and the de Sitter horizon radius. The argument is dimensional but the conclusion is exact.
- Local stability (Remark in Step 3): follows from the time-independence of the static de Sitter metric — standard GR.
- Theorem 4.1 (bounce dissolution): three independent arguments. Argument (i) (divergent effective pressure) is rigorous: the effective pressure diverges from the modified Friedmann equation (singularity-resolution Theorem 4.1), and a divergent external perturbation exceeds any finite observer energy — the conclusion follows from the fact that every observer has finite energy (Axiom 3, finite loop period). Arguments (ii) and (iii) provide independent confirmations via phase space saturation and boundary indistinguishability respectively.
- Proposition 5.1 (coherence ontology): definitional — follows directly from the framework's construction. Coherence is a measure on the $\sigma$-algebra of observer events; it is undefined on non-observer structures by construction.
- Theorem 5.2 (coherence conservation excludes the bounce): logically rigorous given Theorem 4.1 and Proposition 5.1. The argument is a straightforward contradiction: Axiom 1 requires conservation, Proposition 5.1 identifies the only carriers, Theorem 4.1 destroys all carriers.
- Theorem 5.4 (sign prediction): follows rigorously from Theorem 5.2 combined with standard cosmology ($\Lambda < 0$ implies recollapse to Planck density).

**Semi-formal (supporting results, not in the critical path):**
- Proposition 1.5 (epistemic horizons): the observer-specific information capacity follows rigorously from the holographic bound applied to the observer's boundary. The table entries are standard dimensional analysis.
- Proposition 3.1 (holographic budget): uses the holographic entropy bound (rigorous) applied to the de Sitter horizon. The application to the multiplicity requirement involves interpreting the bound as a coherence budget (the de Sitter horizon is static in the static patch, so the bound applies, but the connection to the coherence budget for interior observers involves assumptions from [Entropy](/derivations/thermodynamics/entropy) not explicitly formalized for cosmological horizons). This is an independent confirmation of the Planck-scale bound, not in the critical path.
- Proposition 5.3 (Type II fusion reinforcement): the gravitational fusion dynamics are well-established via the information paradox resolution (rigorous), but the claim that the approach to $\rho_P$ goes "entirely through fusion" is a physical argument. This reinforces the sign prediction but is not required for it.
- Proposition 7.5 (entropy identification): logically rigorous — identifies the self-consistency equation with the entropy decomposition and applies the second law. The qualitative hierarchy explanation ($\sum \Delta c_n \ll C_0$) follows. Propositions 7.2–7.4 are mechanism sketches (physically motivated, not formal proofs).
- Step 8 (level-dependent coherence partition): defines level-indexed quantities ($S^{(n)}$, $\Lambda_n^{\text{eff}}$) and identifies where Proposition 7.5's level-independence approximation breaks down. Propositions 8.3–8.6 are structurally sound but the cross-level constraints are not derived quantitatively. Not in the critical path.

**Conjectural / open:**
- Proposition 6.2 (conditions for tighter bound): the key open question. No mechanism is known within the framework to force $\mathcal{C}_{\min}^{\text{non-self}} \gg 1$.
- The sign prediction ($\Lambda \geq 0$) is established (Theorem 5.4). Sharpening to $\Lambda > 0$ via the cosmological arrow remains open.
- Step 7 (hierarchical coherence suppression): a mechanism sketch connecting bootstrap, c-theorem, and ER=EPR. The quantitative prediction of $\Lambda$ requires the geometry functor (Gap 6) and knowledge of $C_0$.
- Conjecture 8.9 (double saturation): identifies the boundary condition (both endpoints of the hierarchy at gravitational saturation) that would close the self-consistency loop and determine $C_0$. The conjecture is well-motivated by the framework's structure but proving it requires computing the coherence absorption at each bootstrap level — the geometry functor program.

**Assessment:** Rigorous. The core results form a rigorous chain: the geometric upper bound (Theorem 2.1) follows from the Planck cutoff and de Sitter geometry; the bounce dissolution (Theorem 4.1) follows from the divergent effective pressure exceeding any finite observer energy; the sign prediction (Theorem 5.4) follows from coherence conservation excluding the bounce. The supporting results (holographic budget, epistemic horizons, Type II fusion, hierarchy mechanism) are semi-formal but not in the critical path — the core claims hold independently. The entropy identification (Proposition 7.5) explains the 120-order hierarchy qualitatively as a consequence of the second law. The remaining open questions are the value of $C_0$ (initial conditions) and the coincidence problem (why $\Omega_m \sim \Omega_\Lambda$ now).

## Open Gaps

1. **Dynamical holographic bound**: The holographic entropy bound ([Area Scaling](/derivations/holography/area-scaling)) is proved for static boundaries. Extending it to the de Sitter cosmological horizon (which is static in the static patch but time-dependent in comoving coordinates) requires the covariant Bousso bound, which is not yet derived in the framework ([Area Scaling](/derivations/holography/area-scaling), Gap 4).
2. **Minimum non-self coherence**: The key gap blocking a tighter bound. What is the minimum coherence content of the non-self side of $\mathcal{B}$ required for Lyapunov-stable loop closure? The multiplicity theorem establishes $\mathcal{C}^{\text{non-self}} > 0$ but does not quantify the minimum. The hierarchical coherence argument (Step 7) suggests this connects to the bootstrap structure: a complex observer requires sub-observers at every level of the hierarchy, each absorbing coherence. Whether this quantitatively constrains $\mathcal{C}_{\min}^{\text{non-self}}$ depends on formalizing the geometry functor (Gap 6). **Partial progress**: [Dark Energy Equation of State](/derivations/cosmology/dark-energy-equation-of-state) (Proposition 4.3–4.4) provides a concrete mechanism — the minimum is set by the distinguishability of relational invariants characterized by the Gibbons-Hawking temperature $T_{\text{GH}}$. The observer must extract at least one distinguishable bit per loop period from its non-self network; in de Sitter equilibrium, this gives a two-sided bound on $\Lambda$ in terms of observer parameters. The bound is Planck-scale for minimal observers but could tighten when applied to the full bootstrap hierarchy.
3. **Sharpening to $\Lambda > 0$**: The sign prediction $\Lambda \geq 0$ (Theorem 5.4) does not distinguish $\Lambda = 0$ from $\Lambda > 0$. Does the structural arrow of time (monotonically increasing relational invariant depth) require eternal expansion, which would give $\Lambda > 0$? This connects to [Time as Phase Ordering](/derivations/thermodynamics/time), Gap 3.
4. **Bounce prohibition scope**: Theorem 5.2 prohibits the Planck-density bounce in $\Lambda < 0$ FRW cosmologies via coherence conservation. Does the same argument extend to *all* global recollapse scenarios, including anisotropic cosmologies (Bianchi models) or cosmologies with exotic matter violating standard energy conditions? The argument should generalize to any scenario where $\rho \to \rho_P$ globally, but cosmologies with localized collapse (e.g., black holes forming within an expanding universe) are not affected — the bounce is local, not global, and external observers preserve coherence.
5. **Gibbons-Hawking stability**: The de Sitter horizon radiates at the Gibbons-Hawking temperature $T_{GH} = \hbar H/(2\pi k_B)$. Whether this thermal background destabilizes observer loops depends on the detailed interaction between GH radiation and the observer's loop closure — specifically, whether photon absorption changes the observer's Noether invariant $I$. For a minimal $U(1)$ oscillator, phase perturbations are Lyapunov-stable (the oscillator is neutrally stable on $S^1$), but energy-changing interactions (Type III absorption of GH quanta) could disrupt the invariant. A mass-dependent viability condition $mc^2 > k_B T_{GH}$ would give $\Lambda < 12\pi^2 m^2 c^2/\hbar^2$, which tightens the bound for light observers but remains Planck-scale for the minimal observer ($m = m_P$).
6. **Continuous-discrete fixed point and quantitative $\Lambda$**: Step 8 defines the level-indexed quantities ($\Lambda_n^{\text{eff}}$, $S^{(n)}$) and the cross-level consistency constraint (Proposition 8.3). Conjecture 8.9 identifies the boundary condition (double saturation). [Continuous-Discrete Duality](/derivations/foundation/continuous-discrete-duality) reformulates the problem: the cosmological parameters are not computed by a functor mapping one layer to the other — they are properties of the **fixed point** where the continuous coherence manifold (Fisher metric, Lagrangian) and the discrete observer network (aperiodic order, substitution rule) are simultaneously satisfied. The partition equation (Proposition 7.4) is an accounting identity, not a constraint; the genuine constraint is the compatibility condition between these two co-formed layers. The packing coefficient $\alpha(\beta)$ from [Aperiodic Order](/derivations/foundation/aperiodic-order) bridges the layers by translating the substitution rule (discrete) into an entropy density (continuous). Solving for the fixed point requires characterizing which smooth manifolds admit the required aperiodic tilings — a problem in geometric topology. Connects to [ER=EPR](/derivations/holography/er-epr) (geometry from relational invariants) and [Renormalization Group](/derivations/thermodynamics-ext/renormalization) (c-theorem, fixed-point structure).

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
- **Hierarchy**: Qualitatively explained (Proposition 7.5). The self-consistency equation $C_0 = \sum \Delta c_n + S_H$ is the entropy decomposition: structural coherence is accessible coherence, horizon entropy is inaccessible coherence. The 120-order hierarchy follows from the second law — entropy grows, so the inaccessible fraction dominates in an old universe. Step 8 further shows that the entropy decomposition is level-indexed: each bootstrap level projects its own effective geometry with its own effective $\Lambda_n^{\text{eff}}$, and the 120-order comparison between $\Lambda_P$ and $\Lambda_{\text{obs}}$ is a cross-level comparison that mixes the viability bound (level 0) with the measured parameter (level $N$). The specific value of $\Lambda = \Lambda_N^{\text{eff}}$ remains open (depends on $C_0$ and the bootstrap structure). The coincidence problem ($\Omega_m \sim \Omega_\Lambda$ now) is also open.

<!-- References -->
[Weinberg, 1987]: /references#weinberg-1987
