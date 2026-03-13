---
title: "Observer Loop Viability Bounds"
status: "draft"
dependsOn: ["spacetime/singularity-resolution", "holography/area-scaling", "minimal-observer/structure", "axioms/loop-closure", "minimal-observer/multiplicity", "thermodynamics/entropy", "interactions/bootstrap", "thermodynamics-ext/renormalization", "holography/er-epr"]
enablesDerivation: []
tags: ["cosmology", "quantum-gravity"]
summary: "The structural requirements of Axioms 2 and 3 yield a Planck-scale upper bound on |Λ|: observer loops cannot close if the cosmological horizon is sub-Planckian. Observer loops cannot survive Planck-density bounces (Λ < 0 cosmologies), but the axioms do not exclude Λ < 0 because observers can re-form between bounces. The sign of Λ is not constrained by the current axioms alone."
rigorLevel: "semi-formal"
lastUpdated: 2026-03-12
---

## Statement

**Theorem 1 (Planck-scale viability bound).** In de Sitter spacetime with cosmological constant $\Lambda > 0$, observer triples $(\Sigma, I, \mathcal{B})$ satisfying Axioms 2 and 3 can exist only if:

$$\boxed{\Lambda < \frac{3}{\ell_P^2} \approx 3.7 \times 10^{66}\;\text{cm}^{-2}}$$

This upper bound is 120 orders of magnitude above the observed value $\Lambda_{\text{obs}} \sim 10^{-56}\;\text{cm}^{-2}$.

**Theorem 2 (Bounce dissolution).** In a $\Lambda < 0$ FRW cosmology, the recollapse bounce at Planck density ($\rho = \rho_P$) destroys all observer triples. No observer loop can close when the available phase space vanishes. New observer triples form after the bounce with new Noether invariants.

**Proposition 3 (No sign constraint).** The current axioms do not exclude $\Lambda < 0$. Observers exist during the expanding and contracting phases between bounces. The bounce is a discontinuity in the interaction graph where no observers exist and time is undefined (Proposition 8.1); the axioms are inapplicable during the bounce but are satisfied within each epoch. The sign of $\Lambda$ is not determined.

## Derivation

### Step 1: Observer Viability in de Sitter Space

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

### Step 2: The Geometric Upper Bound

**Theorem 2.1 (Geometric bound).** *If $\Lambda > 3/\ell_P^2$, no observer triple can exist in de Sitter spacetime.*

*Proof.* A minimal observer has spatial extent $\geq \ell_P$ ([Minimal Observer Structure](/derivations/minimal-observer/structure), Theorem 3.1 — the coherence domain diameter is the Compton wavelength, bounded below by $\ell_P$ via [Area Scaling](/derivations/holography/area-scaling), Structural Postulate S1).

The observer must fit within the static patch: its spatial extent must be less than the horizon radius $R_H = \sqrt{3/\Lambda}$. Therefore:

$$\ell_P < R_H = \sqrt{\frac{3}{\Lambda}}$$

Squaring both sides:

$$\Lambda < \frac{3}{\ell_P^2}$$

If $\Lambda \geq 3/\ell_P^2$, the horizon radius is at most $\ell_P$. No observer — not even the minimal $U(1)$ oscillator on $S^1$ — fits within the static patch. No relational invariant crossings through $\mathcal{B}$ can occur, so no observer triple satisfying Axiom 2 can form. $\square$

### Step 3: The Holographic Budget Bound

**Proposition 3.1 (Coherence budget).** *The multiplicity requirement, combined with the holographic entropy bound, independently gives the same Planck-scale upper bound on $\Lambda$.*

*Proof.* The de Sitter horizon has area $A_H = 4\pi R_H^2 = 12\pi/\Lambda$. By [Holographic Entropy Bound](/derivations/holography/area-scaling) (Theorem 5.2), the maximum entropy (inaccessible coherence) associated with the horizon is:

$$S_H = \frac{A_H}{4\ell_P^2} = \frac{3\pi}{\Lambda\,\ell_P^2}$$

This bounds the information content accessible through the horizon. Within the static patch, the observer's coherence domain $\mathcal{D}_A$ ([Entropy](/derivations/thermodynamics/entropy), Definition 2.1) is bounded by the horizon. The number of independent relational invariant crossings through any surface within the static patch is bounded by $A/(4\ell_P^2)$ for boundary area $A$.

By Definition 1.1, at least two observers must coexist within the static patch, each with positive coherence. Each minimal observer requires at least one relational invariant crossing through its boundary $\mathcal{B}$ — one independent correlation with the non-self side ([Multiplicity](/derivations/minimal-observer/multiplicity), Proposition 4.1). The boundary of a minimal observer has area $A_{\mathcal{B}} \sim \ell_P^2$ ([Minimal Observer Structure](/derivations/minimal-observer/structure)), supporting $A_{\mathcal{B}}/(4\ell_P^2) \sim 1/4$ crossings. For at least one crossing:

$$A_{\mathcal{B}} \geq 4\ell_P^2 \implies \ell_O \geq 2\ell_P$$

where $\ell_O$ is the observer's linear extent. Two such observers within the static patch require $R_H > 2\ell_P$, giving $\Lambda < 3/(4\ell_P^2)$ — the same Planck-scale order as the geometric bound. $\square$

### Step 4: Local Stability in the Static Patch

**Proposition 4.1 (Time-independent local dynamics).** *In the static de Sitter patch, the local dynamics of an observer at $r \ll R_H$ is time-independent. The Lyapunov stability of the observer's loop closure is not directly affected by $\Lambda$.*

*Proof.* The static patch metric (Definition 1.2) is explicitly time-independent: $\partial_t g_{\mu\nu} = 0$. An observer at $r = 0$ experiences a Minkowski-like geometry (the metric reduces to $ds^2 = -c^2 dt^2 + dr^2 + r^2 d\Omega^2$ at $r = 0$).

The observer's loop closure ([Loop Closure](/derivations/axioms/loop-closure), Definition 3.1) is a dynamical system $\dot{\sigma} = F(\sigma)$ on the state space $\Sigma$. In the static patch, $F$ is time-independent, so the standard Lyapunov stability analysis applies without modification. If the loop closes with Lyapunov stability in Minkowski space, it closes with Lyapunov stability in the static de Sitter patch at $r \ll R_H$. $\square$

**Corollary 4.2 (Indefinite observer lifetime in de Sitter).** *For $\Lambda < 3/\ell_P^2$, an observer pair can persist indefinitely within the static patch. The cosmological expansion does not introduce an approximate-closure drift (in the sense of [Loop Closure](/derivations/axioms/loop-closure), Definition 5.1) for observers at fixed positions in the static patch.*

*Proof.* In static coordinates, both observers are at fixed positions $r_1, r_2 < R_H$. The metric is time-independent, and the Type III interactions between them across their shared boundary are time-independent. The loop closure is exact ($\varepsilon = 0$ in [Loop Closure](/derivations/axioms/loop-closure), Definition 5.1), and the observer lifetime $N_{\max} = \lfloor D_{\mathcal{B}}/\varepsilon \rfloor \to \infty$ ([Loop Closure](/derivations/axioms/loop-closure), Proposition 5.2). $\square$

**Remark.** The "expansion" of the de Sitter universe is a coordinate effect in the comoving frame. For the observer's local physics, the static patch provides the correct description. The expansion manifests as a horizon at $R_H$, beyond which the observer has no causal access — but it does not perturb the observer's own loop closure. This is a standard result of de Sitter physics reinterpreted in the framework's language.

### Step 5: Cosmological Redshift and Far-Field Interactions

**Proposition 5.1 (Redshift of non-self interactions).** *Type III interactions between an observer at $r = 0$ and a non-self observer at radial coordinate $r$ in the static patch are redshifted by the factor:*

$$z(r) = \frac{1}{\sqrt{1 - r^2/R_H^2}} - 1$$

*For $r \to R_H$, the redshift diverges: $z \to \infty$. Interactions with non-self observers near the horizon are exponentially suppressed.*

*Proof.* The redshift factor between static observers at $r_1 = 0$ and $r_2 = r$ in the de Sitter static patch is determined by the ratio of the metric components: $1 + z = \sqrt{g_{tt}(r_1)/g_{tt}(r_2)} = 1/\sqrt{1 - r^2/R_H^2}$. A phase signal emitted at frequency $\omega$ from the non-self observer at $r$ arrives at the central observer at frequency $\omega/(1+z)$. The effective rate of Type III interactions is reduced by this factor. $\square$

**Corollary 5.2 (Multiplicity within a sub-horizon region).** *The multiplicity requirement (Definition 1.1) is satisfied as long as the non-self observer is within a sub-horizon region $r < R_H$. Since the minimum separation is $\ell_P \ll R_H$ (when $\Lambda \ll 3/\ell_P^2$), the redshift between the pair is negligible for the observed $\Lambda$:*

$$z(\ell_P) = \frac{1}{\sqrt{1 - \Lambda\,\ell_P^2/3}} - 1 \approx \frac{\Lambda\,\ell_P^2}{6} \sim 10^{-122}$$

*The multiplicity constraint introduces no tightening beyond the geometric bound.*

### Step 6: Causal Horizons vs. Epistemic Horizons

**Definition 6.1.** The **causal horizon** of an observer in de Sitter space is the cosmological horizon at $R_H = \sqrt{3/\Lambda}$ — the boundary of the region from which signals can reach the observer. This is a geometric property of the spacetime, identical for all comoving observers.

**Definition 6.2.** The **epistemic horizon** of observer $A$ is the maximum information content accessible through $A$'s boundary $\mathcal{B}_A$. By [Holographic Entropy Bound](/derivations/holography/area-scaling) (Theorem 3.2), this is:

$$\mathcal{I}_A^{\max} = \frac{A_{\mathcal{B}}}{4\,\ell_P^2}$$

where $A_{\mathcal{B}}$ is the area of $A$'s self/non-self boundary. The epistemic horizon is observer-indexed: it depends on the observer's state space $\Sigma_A$ and spatial extent.

**Proposition 6.3 (Epistemic horizons are observer-specific).** *Different observers have vastly different epistemic horizons, determined by their spatial extent $\ell_A \sim \lambda_C = \hbar/(m_A c)$ ([Minimal Observer Structure](/derivations/minimal-observer/structure), Proposition 7.1):*

| Observer | Mass | $\lambda_C$ | $A_{\mathcal{B}} \sim \lambda_C^2$ | $\mathcal{I}_A^{\max}$ |
|---|---|---|---|---|
| Planck-mass | $m_P$ | $\ell_P$ | $\ell_P^2$ | $\sim 1$ bit |
| Electron | $m_e$ | $10^{22}\;\ell_P$ | $10^{44}\;\ell_P^2$ | $\sim 10^{43}$ bits |
| Proton | $m_p$ | $10^{19}\;\ell_P$ | $10^{38}\;\ell_P^2$ | $\sim 10^{37}$ bits |
| *Cosmological horizon* | — | $R_H \sim 10^{61}\;\ell_P$ | $10^{122}\;\ell_P^2$ | $\sim 10^{122}$ bits |

*A Planck-mass observer's epistemic horizon is barely one bit — the minimum for multiplicity. An electron's epistemic horizon is $\sim 10^{43}$ bits, 79 orders of magnitude smaller than the cosmological horizon. Each observer "sees" a different effective universe, limited by its own state space.*

**Proposition 6.4 (Viability uses the causal horizon; tightening uses the epistemic horizon).** *The viability bound (Theorem 2.1) correctly uses the causal horizon $R_H$: the observer must fit within the causally accessible region, regardless of its epistemic capacity. But the tightening question (Step 9, Proposition 9.2 below) depends on the epistemic horizon: the observer accesses non-self coherence through its boundary $\mathcal{B}_A$, not through the cosmological horizon $R_H$. The relevant constraint for Lyapunov stability is how much non-self coherence the observer can process through $A_{\mathcal{B}}$.*

**Remark.** This distinction resolves an apparent puzzle: why does the geometric bound use the cosmological horizon when the framework says everything is observer-indexed? The answer is that the geometric bound asks a *minimal* question (can ANY observer fit?), which is a geometric constraint on the spacetime itself. The observer-indexing enters when we ask *which* observers can exist and *what they can access* — questions that depend on the epistemic horizon.

### Step 7: Bounce Dissolution in $\Lambda < 0$ Cosmologies

**Theorem 7.1 (Observer dissolution at Planck density).** *At the Planck-density bounce of a $\Lambda < 0$ FRW cosmology, all observer triples dissolve: no observer loop can close.*

*Proof.* By [Singularity Resolution](/derivations/spacetime/singularity-resolution) (Theorem 4.1), the recollapse of a $\Lambda < 0$ universe produces a bounce at $\rho = \rho_P$ rather than a singularity. At the bounce, the modified Friedmann equation gives $H = 0$ via $H^2 = (8\pi G/3)\rho(1 - \rho/\rho_P) = 0$.

We show no observer loop can close at $\rho = \rho_P$.

**(i) Zero available phase space.** By [Singularity Resolution](/derivations/spacetime/singularity-resolution) (Theorem 4.1, step iv), the discrete relational invariant network has maximum event density $\ell_P^{-4}$ ([Singularity Resolution](/derivations/spacetime/singularity-resolution), Corollary 2.2). At $\rho = \rho_P$, every Planck cell is occupied. The available phase space for any additional structure — including observer loop closure — is $(1 - \rho/\rho_P) = 0$.

**(ii) No distinguishable boundary.** An observer triple requires a self/non-self boundary $\mathcal{B}$ (Axiom 2). At $\rho = \rho_P$, the coherence geometry is maximally "full" — all Planck cells on both sides of any putative $\mathcal{B}$ are at identical maximal density. There is no coherence gradient across $\mathcal{B}$ to distinguish self from non-self. The observer triple $(\Sigma, I, \mathcal{B})$ ceases to satisfy Axiom 2.

**(iii) Divergent loop closure pressure.** By [Singularity Resolution](/derivations/spacetime/singularity-resolution) (Theorem 4.1, step v), the loop closure pressure diverges as $\rho \to \rho_P$:

$$p_{\text{eff}} = p - \rho c^2 \frac{\rho/\rho_P}{1 - \rho/\rho_P} \to -\infty$$

This overwhelms the observer's internal dynamics. The observer's state is pushed beyond the boundary of its connected component in the coherence geometry ($\partial O$ in [Loop Closure](/derivations/axioms/loop-closure), Proposition 4.3), and the Noether invariant $I$ is no longer preserved. $\square$

**Proposition 7.2 (Re-formation after bounce).** *After the bounce, the universe expands and $\rho$ drops below $\rho_P$. New observer triples can form with new Noether invariants $I' \neq I$. There is no continuity of observer identity through the bounce.*

*Proof.* As $\rho$ decreases from $\rho_P$, the available phase space $(1 - \rho/\rho_P) > 0$ reopens. The coherence geometry develops structure: spatial variation in coherence density allows self/non-self boundaries to form. New minimal observer loops ([Minimal Observer Structure](/derivations/minimal-observer/structure)) can close once the available phase space is sufficient to support the minimum coherence cost $S_{\min} = \hbar$ ([Loop Closure](/derivations/axioms/loop-closure), Proposition 6.2).

The new observers have new Noether invariants because: the Noether invariant $I$ of the pre-bounce observers was not preserved through the bounce (Theorem 7.1, step iii). The conservation of $I$ is tied to the observer's loop closure symmetry, which was broken. Post-bounce observers arise from fresh symmetry-breaking of the expanding coherence geometry and have independent invariants. $\square$

### Step 8: Sign Constraint Assessment

**Proposition 8.1 (No time during the bounce).** *At the Planck-density bounce, no observers exist (Theorem 7.1). By [Time as Phase Ordering](/derivations/thermodynamics/time) (Proposition 8.1), a universe with no observers has no interaction graph and no partial order. Therefore time does not exist during the bounce — not in the sense that time passes but is unmeasured, but in the framework's sense that the ordering structure constituting time has no elements.*

*Proof.* Time is the partial order $(V, \preceq)$ on the interaction graph $\mathcal{G}$ ([Time as Phase Ordering](/derivations/thermodynamics/time), Theorem 4.2). The vertices of $\mathcal{G}$ are interaction events between observers (Definition 1.1 of [Time as Phase Ordering](/derivations/thermodynamics/time)). At $\rho = \rho_P$, no observer triples exist (Theorem 7.1), so no interactions between observers can occur, and $\mathcal{G}$ has no vertices in the bounce region. The partial order has a **discontinuity**: pre-bounce events form one connected component, post-bounce events form another, with no directed path connecting them through the bounce. $\square$

**Corollary 8.2 (Pre- and post-bounce epochs are not temporal continuations).** *The pre-bounce and post-bounce epochs are not connected by time. They are connected by relational invariant persistence — the relational invariants generated before the bounce are permanent ([Relational Invariants](/derivations/interactions/relational-invariants), Proposition 6.1) and are inherited by post-bounce observers. This is informational continuity, not temporal continuity.*

**Proposition 8.3 (Coherence conservation does not span the bounce).** *Axiom 1 (Coherence Conservation) requires conservation on Cauchy slices of the relational invariant graph. A Cauchy slice is a maximal antichain — a set of events intersecting every maximal chain. If the interaction graph has a discontinuity (no events during the bounce), no Cauchy slice spans the gap. Therefore Axiom 1 does not guarantee coherence conservation across the bounce.*

*Remark.* The effective description (Einstein equations + singularity resolution) is continuous through the bounce — the modified Friedmann equation smoothly transitions through $H = 0$. But the effective description is a continuum approximation valid at scales $\gg \ell_P$. At the fundamental level of the interaction graph, the bounce is a discontinuity that the axioms do not bridge. The "bounce duration $\sim t_P$" is a feature of the effective description, not of the fundamental partial order.

**Proposition 8.4 (Axioms do not exclude $\Lambda < 0$).** *Despite the complications above, the three axioms do not exclude $\Lambda < 0$ cosmologies.*

*Proof.* In a $\Lambda < 0$ FRW cosmology with bounces, each epoch between bounces is a connected component of the interaction graph. Within each epoch:

**(i) Axiom 1** is satisfied: coherence is conserved on Cauchy slices within the epoch. $\checkmark$

**(ii) Axiom 2** is satisfied: observer triples exist during the expanding and contracting phases. $\checkmark$

**(iii) Axiom 3** is satisfied: observer loops close with Lyapunov stability during each epoch. $\checkmark$

The bounce itself is outside the axioms' domain of application — the partial order has no events there, and the axioms have no domain to constrain. The axioms are neither satisfied nor violated during the bounce; they are simply inapplicable. $\square$

**Remark.** The $\Lambda < 0$ case is nevertheless epistemically distinctive. No observer can describe the "cycle" of a bouncing cosmology, because: (1) no observer survives through the bounce (Theorem 7.1); (2) no time connects the epochs (Proposition 8.1); (3) coherence conservation is not guaranteed across the bounce (Proposition 8.3). Each epoch is, from any observer's perspective, a self-contained universe. The "cyclic" nature of the cosmology is a feature of the effective description that no observer within the framework can verify.

A sign constraint ($\Lambda > 0$) might follow from the cosmological arrow ([Time as Phase Ordering](/derivations/thermodynamics/time), Gap 3): if the structural arrow (increasing relational invariant depth) requires monotonically growing "room" in the coherence geometry, this would imply expansion and thus $\Lambda > 0$. However, this connection is not established — the structural arrow is a property of the interaction graph, not of the spatial geometry, and new relational invariants can be generated even in contracting spacetimes. The cosmological arrow remains an open gap.

### Step 9: The Hierarchy Question

**Proposition 9.1 (The bound does not explain the hierarchy).** *The Planck-scale bound $\Lambda < 3/\ell_P^2$ is 120 orders of magnitude above the observed value $\Lambda_{\text{obs}} \sim 10^{-122}\;\ell_P^{-2}$. The framework does not explain this hierarchy from the three axioms alone.*

The bound constrains which solutions of the Einstein equations can host observer DAGs, but it constrains far too weakly. This is an inherent limitation: the axioms place structural requirements on observers (minimum spatial extent, coherence content, Lyapunov stability) that set Planck-scale thresholds. The 120-order hierarchy between $\ell_P$ and $R_H^{\text{obs}}$ is not explained.

**Proposition 9.2 (Conditions for a tighter bound).** *A sub-Planck bound on $\Lambda$ would require showing that the minimum non-self coherence content needed to sustain Lyapunov-stable loops is much larger than Planck-scale — i.e., that $\mathcal{C}_{\min}^{\text{non-self}} \gg 1$ (in Planck units).*

*Argument.* By the holographic budget (Proposition 3.1), the viability condition is:

$$2\,\mathcal{C}_{\min} \leq \frac{A_H}{4\ell_P^2} = \frac{3\pi}{\Lambda\,\ell_P^2}$$

giving $\Lambda \leq 3\pi/(2\,\mathcal{C}_{\min}\,\ell_P^2)$. For $\mathcal{C}_{\min} \sim 1$ (the minimal observer's coherence), this is Planck-scale.

If Lyapunov-stable loop closure requires ongoing Type III interactions with a non-self environment of coherence content $\mathcal{C}_{\min}^{\text{non-self}} \gg 1$, the bound tightens to:

$$\Lambda \leq \frac{3\pi}{\mathcal{C}_{\min}^{\text{non-self}}\,\ell_P^2}$$

For $\mathcal{C}_{\min}^{\text{non-self}} \sim 10^{120}$, this would give $\Lambda \sim 10^{-120}\;\ell_P^{-2}$ — the right order. But this requires a specific, large value of $\mathcal{C}_{\min}^{\text{non-self}}$ that is not determined by the current axioms. The multiplicity theorem ([Multiplicity](/derivations/minimal-observer/multiplicity)) establishes that the non-self side must contain at least one other observer (not zero), but does not bound the minimum coherence content of the non-self side beyond $\mathcal{C} > 0$.

Whether there exists a mechanism within the framework that forces $\mathcal{C}_{\min}^{\text{non-self}} \gg 1$ — perhaps from the stability of the observer DAG as a whole, or from the requirement that the structural arrow of time can be sustained — is the key open question. $\square$

### Step 10: Hierarchical Coherence Suppression (Mechanism Sketch)

The bootstrap hierarchy, the coherence renormalization group, and the ER=EPR correspondence together suggest a mechanism that could address the hierarchy question. This step sketches the argument; formalizing it is a major open target.

**Definition 10.1 (Bootstrap filtration).** The observer category $\mathbf{Obs}$ has a natural filtration by bootstrap level ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Corollary 2.2):

$$\mathbf{Obs}_0 \subset \mathbf{Obs}_1 \subset \mathbf{Obs}_2 \subset \cdots$$

where $\mathbf{Obs}_0$ contains minimal observers and $\mathbf{Obs}_{n+1}$ includes relational observers formed from $\mathbf{Obs}_n$ via the bootstrap map $\mathcal{R}$ ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Proposition 5.1). Each level $n$ has a characteristic scale $\lambda_n$ and epistemic horizon $\mathcal{I}_n^{\max} = A_n/(4\ell_P^2)$ (Step 6, Proposition 6.3).

**Proposition 10.1 (Cross-level geometric consistency).** *A complex observer $C$ at level $n+1$ is composed of sub-observers $\{A_i\}$ at level $n$, bound by relational invariants $\{I_{ij}\}$. By [ER=EPR](/derivations/holography/er-epr) (Theorem 3.2), each relational invariant $I_{ij}$ creates geometric structure — a wormhole throat with area $A_{\text{ER}} = 4\ell_P^2 S_{\text{ent}}(I_{ij})$. The aggregate geometry at level $n+1$ (constructed from these connections) restricted to scale $\lambda_n$ must be compatible with the geometry at level $n$.*

*Argument.* The geometry an observer "sees" is constructed from its relational invariants with other observers (ER=EPR). Sub-observer $A_i$'s geometry $G_n$ is built from its relational invariants at level $n$. Composite $C$'s geometry $G_{n+1}$ is built from relational invariants at level $n+1$, which include the binding invariants $\{I_{ij}\}$ connecting the $A_i$. By the ontological irreducibility of higher levels ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Corollary 4.2), $G_{n+1}$ contains genuinely new geometric structure not present in $G_n$. But at scale $\lambda_n$, the new geometry must reduce to $G_n$ — otherwise the sub-observers' epistemic descriptions would be inconsistent with the composite's. This reduction is precisely the coherence RG flow between fixed points ([Renormalization Group](/derivations/thermodynamics-ext/renormalization), Theorem 4.1). $\square$

**Proposition 10.2 (Coherence absorption at bootstrap levels).** *Each bootstrap level (RG fixed point) absorbs coherence into stable relational invariants. By the c-theorem ([Renormalization Group](/derivations/thermodynamics-ext/renormalization), Theorem 5.2), the accessible coherence $c(k) = \mathcal{C}_{>k}$ is monotonically non-increasing under IR flow: $dc/d(\ln k) \leq 0$. At each fixed point, coherence is locked into the geometric structure of that level (ER=EPR: $A_{\text{ER}} = 4\ell_P^2 S_{\text{ent}}$), reducing the coherence available at larger scales.*

*Argument.* When relational invariants form at level $n$, their coherence content $\mathcal{C}(I_{ij})$ is locked into wormhole throat geometry at scale $\lambda_n$. This coherence does not contribute to the effective vacuum energy at the IR scale — it is "spent" on structure at scale $\lambda_n$. The c-theorem guarantees that the through-coherence (coherence available to source larger-scale geometry) strictly decreases at each level. After $N$ levels, the residual coherence at the IR is:

$$c_{\text{IR}} \leq c_{\text{UV}} - \sum_{n=0}^{N} \Delta c_n$$

where $\Delta c_n > 0$ is the coherence absorbed at level $n$. The total number of levels is bounded by $N \leq C_0/\hbar$ ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Proposition 6.2). $\square$

**Proposition 10.3 (Residual coherence and the effective $\Lambda$).** *The cosmological constant, as a property of the IR geometry, is sourced by the residual coherence that has not been absorbed by any bootstrap level. If the coherence absorption across all levels is nearly complete, the residual — and hence $\Lambda$ — is strongly suppressed relative to the Planck scale.*

*Argument.* In the holographic budget (Proposition 3.1), the effective $\Lambda$ is related to the coherence content of the cosmological horizon:

$$S_H = \frac{3\pi}{\Lambda\,\ell_P^2}$$

The horizon entropy $S_H$ counts the total degrees of freedom within the static patch. If the vast majority of the total coherence $C_0$ is locked into bootstrap structure (particles, atoms, molecules, etc.) via the c-theorem's monotonic flow, then $S_H \sim c_{\text{IR}} \ll C_0$, giving:

$$\Lambda \sim \frac{3\pi}{c_{\text{IR}}\,\ell_P^2} \gg \Lambda_{\text{Planck}}$$

Wait — this gives $\Lambda$ too *large*, not too small. The argument inverts: if $S_H$ counts accessible IR coherence, then a large $S_H$ (small $\Lambda$) means the IR has *more* accessible coherence, not less.

The correct framing is not that $\Lambda$ is sourced by the residual coherence, but that **the IR geometry's capacity (encoded by $\Lambda$) must be consistent with the coherence budget after the bootstrap hierarchy has formed**. The self-consistency condition is:

$$\text{(total coherence)} = \text{(coherence in bootstrap structure)} + \text{(coherence accessible through } R_H\text{)}$$

$$C_0 = \sum_{n=0}^{N}\Delta c_n + \frac{A_H}{4\ell_P^2} = \sum_{n=0}^{N}\Delta c_n + \frac{3\pi}{\Lambda\,\ell_P^2}$$

Solving for $\Lambda$:

$$\Lambda = \frac{3\pi}{\left(C_0 - \sum_{n}\Delta c_n\right)\ell_P^2}$$

If nearly all the coherence is locked into structure ($\sum \Delta c_n \to C_0$), then $\Lambda \to \infty$ (no room for a horizon). If very little is locked ($\sum \Delta c_n \to 0$), then $\Lambda \sim 3\pi/(C_0\,\ell_P^2)$ — minimum $\Lambda$, maximum horizon.

**The observed universe** has $S_H \sim 10^{122}$, meaning the horizon coherence vastly exceeds the structural coherence (matter content). This means $\sum \Delta c_n \ll C_0$ — the bootstrap hierarchy absorbs a tiny fraction of the total coherence. The hierarchy question becomes: **why does the bootstrap absorb so little?**

**Remark (Reframing the hierarchy question).** The hierarchical coherence argument does not directly solve the cosmological constant problem, but it *reframes* it in framework-native terms. Instead of asking "why is $\Lambda$ so small?" (which compares to the Planck scale), the question becomes "why does the bootstrap hierarchy absorb such a small fraction of $C_0$?" This is answerable in principle: the bootstrap ceiling ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Proposition 6.2) gives $N \leq C_0/\hbar$, but the *actual* number of stable levels is determined by the structure of the division algebra chain ([Bootstrap → Division Algebras](/derivations/interactions/bootstrap-division-algebras)) and the mass hierarchy tunneling factors ([Mass Hierarchy](/derivations/particles/mass-hierarchy)). The absorbed fraction is:

$$\frac{\sum \Delta c_n}{C_0} = \frac{\text{structural coherence (matter)}}{\text{total coherence}} \sim \frac{\rho_{\text{matter}}}{\rho_{\text{total}}} \sim \Omega_m \approx 0.3$$

This is the matter fraction $\Omega_m$ — a cosmological observable, not a Planck-scale ratio. The 120-order hierarchy is thus repackaged: it comes from the ratio $C_0/\Delta c_{\text{total}} \sim 1/\Omega_\Lambda \sim 1.4$, not from a Planck-scale comparison. The actual hard problem becomes: why is $C_0$ so large in Planck units? This connects to the cosmological initial conditions question ([Cosmological Constant](/derivations/cosmology/cosmological-constant), §Root Cause) — but now it is a single number ($C_0$) rather than a coincidence between two unrelated scales.

**Remark (The geometry functor).** Formalizing this argument requires a **geometry functor** $G: \mathbf{Obs} \to \mathbf{Geom}$ that maps each observer's epistemic horizon to an effective geometry, such that $G$ is compatible with the bootstrap map $\mathcal{R}$ (functoriality across levels). The existing gap in [Bootstrap Mechanism](/derivations/interactions/bootstrap) about promoting $\mathcal{R}$ to a full functor on morphisms is the key prerequisite. A proof that this functor's consistency constrains the relationship between $C_0$, the bootstrap structure, and $\Lambda$ would be a major result.

## Consistency Check

The observed universe has $\Lambda_{\text{obs}} \sim 10^{-122}\;\ell_P^{-2}$, giving $R_H \sim 10^{61}\;\ell_P$. The viability bound $\Lambda < 3/\ell_P^2$ is easily satisfied.

- **Geometric bound**: $R_H \sim 10^{61}\,\ell_P \gg \ell_P$. $\checkmark$
- **Holographic budget**: $S_H = 3\pi/(\Lambda_{\text{obs}}\,\ell_P^2) \sim 10^{122}$ bits — vastly exceeds the coherence requirement for two minimal observers. $\checkmark$
- **Cosmological redshift**: For observers separated by $\ell_P$, the redshift is $z \sim 10^{-122}$ — negligible. $\checkmark$
- **Static patch lifetime**: The static patch metric is time-independent, and observers can persist indefinitely. $\checkmark$

The framework is consistent with the observed cosmological constant, but it does not explain why $\Lambda$ takes its observed value.

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
- Corollary 4.2 (indefinite lifetime): follows from the time-independence of the static de Sitter metric — standard GR.

**Semi-formal:**
- Proposition 3.1 (holographic budget): uses the holographic entropy bound (rigorous) applied to the de Sitter horizon. The application to the multiplicity requirement involves interpreting the bound as a coherence budget, which is semi-formal (the holographic bound is proved for static boundaries; the de Sitter horizon is static in the static patch, so this applies, but the connection between the entropy bound and the coherence budget for *interior* observers involves assumptions from [Entropy](/derivations/thermodynamics/entropy) that are not explicitly formalized for cosmological horizons).
- Proposition 6.3 (epistemic horizons): the observer-specific information capacity follows rigorously from the holographic bound applied to the observer's boundary. The table entries are standard dimensional analysis.
- Theorem 7.1 (bounce dissolution): the conclusion follows from the singularity resolution (rigorous), but the identification of "zero available phase space" with "no loop closure" involves a physical argument (step i) that is not reduced to a formal theorem. Step ii (no distinguishable boundary) is a physical argument about the homogeneity at Planck density. Step iii (divergent pressure) follows rigorously from the effective Friedmann equation.
- Proposition 8.1 (no time during bounce): follows directly from [Time as Phase Ordering](/derivations/thermodynamics/time) (Proposition 8.1) combined with Theorem 7.1 (no observers at the bounce). The argument is logically rigorous given the upstream derivations.
- Proposition 8.3 (coherence conservation gap): the observation that no Cauchy slice spans the discontinuity is a logical consequence of the DAG structure. This is a novel result that deserves further investigation.
- Proposition 8.4 (axioms don't exclude $\Lambda < 0$): the argument that the axioms are satisfied within each epoch and inapplicable during the bounce is logically sound.

**Conjectural / open:**
- Proposition 9.2 (conditions for tighter bound): the key open question. No mechanism is known within the framework to force $\mathcal{C}_{\min}^{\text{non-self}} \gg 1$.
- The sign prediction ($\Lambda > 0$ from the cosmological arrow) is flagged as an open gap, not a result.
- Step 10 (hierarchical coherence suppression): a mechanism sketch connecting bootstrap, c-theorem, and ER=EPR. Propositions 10.1–10.3 are physically motivated arguments, not formal proofs. The self-consistency equation relating $C_0$, bootstrap absorption, and $\Lambda$ is the most concrete result, but it reframes the hierarchy question rather than solving it: the 120-order hierarchy becomes the question of why $C_0$ is large in Planck units.

**Assessment:** Draft. The Planck-scale upper bound (Theorem 2.1) is the strongest result — essentially rigorous given the upstream derivations. The epistemic horizon distinction (Step 6) clarifies which horizon enters which argument. The bounce analysis (Steps 7–8) is significantly strengthened by properly handling the partial order discontinuity: the bounce is not a brief temporal interval but a gap in the interaction graph where time itself is undefined (Proposition 8.1), coherence conservation is not guaranteed (Proposition 8.3), and the pre/post-bounce epochs are informationally but not temporally connected (Corollary 8.2). The hierarchical coherence argument (Step 10) identifies a mechanism for addressing the hierarchy through the bootstrap structure but is currently at the sketch level. The sign question and hierarchy question are honestly assessed as open.

## Open Gaps

1. **Dynamical holographic bound**: The holographic entropy bound ([Area Scaling](/derivations/holography/area-scaling)) is proved for static boundaries. Extending it to the de Sitter cosmological horizon (which is static in the static patch but time-dependent in comoving coordinates) requires the covariant Bousso bound, which is not yet derived in the framework ([Area Scaling](/derivations/holography/area-scaling), Gap 4).
2. **Minimum non-self coherence**: The key gap blocking a tighter bound. What is the minimum coherence content of the non-self side of $\mathcal{B}$ required for Lyapunov-stable loop closure? The multiplicity theorem establishes $\mathcal{C}^{\text{non-self}} > 0$ but does not quantify the minimum. The hierarchical coherence argument (Step 10) suggests this connects to the bootstrap structure: a complex observer requires sub-observers at every level of the hierarchy, each absorbing coherence. Whether this quantitatively constrains $\mathcal{C}_{\min}^{\text{non-self}}$ depends on formalizing the geometry functor (Gap 6).
3. **Sign from the cosmological arrow**: Does the structural arrow of time (monotonically increasing relational invariant depth) require spatial expansion? This connects to [Time as Phase Ordering](/derivations/thermodynamics/time), Gap 3. A positive result would predict $\Lambda > 0$, upgrading the [Cosmological Constant](/derivations/cosmology/cosmological-constant) assessment (item 2) from $\times$ to $\checkmark$.
4. **Coherence conservation across the bounce**: Proposition 8.3 shows that Axiom 1 does not span the bounce discontinuity — no Cauchy slice connects the pre- and post-bounce epochs. Whether a generalized conservation principle extends across the partial order gap is open. This connects to the persistence of relational invariants through observer-free intervals ([Relational Invariants](/derivations/interactions/relational-invariants), Proposition 6.1) and to whether the effective description's smooth transition through $H = 0$ has a fundamental counterpart.
5. **Gibbons-Hawking stability**: The de Sitter horizon radiates at the Gibbons-Hawking temperature $T_{GH} = \hbar H/(2\pi k_B)$. Whether this thermal background destabilizes observer loops depends on the detailed interaction between GH radiation and the observer's loop closure — specifically, whether photon absorption changes the observer's Noether invariant $I$. For a minimal $U(1)$ oscillator, phase perturbations are Lyapunov-stable (the oscillator is neutrally stable on $S^1$), but energy-changing interactions (Type III absorption of GH quanta) could disrupt the invariant. A mass-dependent viability condition $mc^2 > k_B T_{GH}$ would give $\Lambda < 12\pi^2 m^2 c^2/\hbar^2$, which tightens the bound for light observers but remains Planck-scale for the minimal observer ($m = m_P$).
6. **Geometry functor and cross-level consistency**: The hierarchical coherence argument (Step 10) requires formalizing a geometry functor $G: \mathbf{Obs} \to \mathbf{Geom}$ that maps each observer's epistemic horizon to an effective geometry, compatible with the bootstrap map $\mathcal{R}$. This requires promoting $\mathcal{R}$ to a full functor on morphisms ([Bootstrap Mechanism](/derivations/interactions/bootstrap), §Remark after Proposition 5.1) and proving that functoriality constrains the relationship between $C_0$, the bootstrap structure, and $\Lambda$. Connects to [ER=EPR](/derivations/holography/er-epr) (geometry from relational invariants) and [Renormalization Group](/derivations/thermodynamics-ext/renormalization) (c-theorem, fixed-point structure).

## Dependencies

| Prerequisite | What it provides |
|---|---|
| [Minimal Observer Structure](/derivations/minimal-observer/structure) | Minimum spatial extent $\ell_P$, coherence cost $S_O$ |
| [Loop Closure](/derivations/axioms/loop-closure) | Lyapunov stability (Def 4.1), approximate closure (Def 5.1), drift bound (Prop 5.2), dissolution (Prop 4.3), coherence cost $S_{\min} = \hbar$ (Prop 6.2) |
| [Multiplicity](/derivations/minimal-observer/multiplicity) | Single observer has $\mathcal{C} = 0$ (Thm 2.1), mutually defining pair (Prop 4.1), coherence budget (Prop 5.1) |
| [Holographic Entropy Bound](/derivations/holography/area-scaling) | $S \leq A/(4\ell_P^2)$; maximum coherence within a horizon |
| [Singularity Resolution](/derivations/spacetime/singularity-resolution) | Planck-density bounce (Thm 4.1), effective Friedmann equation, loop closure pressure |
| [Entropy](/derivations/thermodynamics/entropy) | Bounded observer theorem (Prop 2.4), coherence domains (Def 2.1) |
| [Time as Phase Ordering](/derivations/thermodynamics/time) | Structural arrow (Thm 6.1), cosmological arrow (Gap 3) |
| [Bootstrap Mechanism](/derivations/interactions/bootstrap) | Hierarchy levels (Cor 2.2), necessity (Thm 3.1), irreducibility (Cor 4.2), ceiling $N \leq C_0/\hbar$ (Prop 6.2), bootstrap map $\mathcal{R}$ (Prop 5.1) |
| [Renormalization Group](/derivations/thermodynamics-ext/renormalization) | c-theorem (Thm 5.2), bootstrap=RG fixed points (Thm 4.1), coherence flow equation (Thm 3.2) |
| [ER=EPR](/derivations/holography/er-epr) | Geometry from relational invariants (Thm 3.2), throat area $A = 4\ell_P^2 S_{\text{ent}}$ (Prop 3.3) |

## Connection to Cosmological Constant

This derivation addresses [Cosmological Constant](/derivations/cosmology/cosmological-constant), Route 3 ("An observer-existence constraint"). Results:

- **Upper bound on $|\Lambda|$**: Established at Planck scale (Theorem 2.1). This establishes the principle that the axioms constrain the solution space of the Einstein equations — not just the dynamics, but the allowed solutions. Even at Planck scale, this is a nontrivial result: the axioms have physical content beyond determining equations of motion.
- **Sign prediction**: Not achieved. The axioms do not exclude $\Lambda < 0$ (Proposition 8.4). A sign prediction would require either the cosmological arrow (Gap 3) or an independent argument.
- **Hierarchy**: Not yet explained, but a mechanism is identified (Step 10). The bootstrap hierarchy, combined with the c-theorem and ER=EPR, suggests that $\Lambda$ is determined by a self-consistency condition relating the total coherence $C_0$, the coherence absorbed into bootstrap structure, and the horizon entropy. This reframes the hierarchy from a Planck-scale comparison to a cosmological question about $C_0$. Formalizing this requires the geometry functor (Gap 6).
