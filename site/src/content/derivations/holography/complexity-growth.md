---
title: "Complexity Growth and the Second Law of Complexity"
status: "draft"
dependsOn: ["axioms/coherence-conservation", "thermodynamics/time", "holography/black-hole-entropy", "holography/er-epr", "foundation/observer-edges-and-mutual-opacity", "foundation/substrate-noise-and-profile-coupling", "interactions/bootstrap", "cosmology/observer-loop-viability"]
enablesDerivation: []
tags: ["holography", "complexity", "second-law"]
summary: "Substrate complexity κ(t) defined as DAG-depth on the inaccessible-coherence subgraph beneath an epistemic horizon. Three derivable results: (1) Lloyd-rate Theorem κ-dot ≤ Sω₀ from a direct count of horizon-DOF observers and Type III interactions per natural cycle, (2) integer-step substructure κ ∈ ℤ at substrate scale (framework-distinctive vs. CV/CA real-valued holographic complexity), (3) bootstrap-recurrence saturation at κ_max when the substrate reaches its fixed point. Second Law of Complexity (Susskind/Aaronson) follows as a one-paragraph corollary of Time as Phase Ordering Theorem 3.1. The Susskind two-timescale puzzle (exterior thermalization at t_s ~ β log S vs. interior complexity growth at t_c ~ e^S) resolves structurally to the detection-noise vs. preservation-noise distinction: external thermalization saturates detection-accessible relational invariants; interior κ continues on preservation-side substrate."
rigorLevel: "semi-formal"
lastUpdated: 2026-05-10
---

## Overview

This derivation packages existing framework content into a treatment of the Susskind complexity-growth program: **what does the substrate do after a black hole reaches external thermal equilibrium?**

The Susskind structural puzzle is that two timescales are very different orders of magnitude. The scrambling time $t_s \sim \beta \log S$ characterizes exterior thermalization — after $t_s$, an external observer extracts no further information from the horizon. But *something* continues to evolve on the interior for a vastly longer time $t_c \sim e^S$. Susskind identifies this with quantum complexity (minimum gate count), which grows linearly and saturates at $e^S$, corresponding geometrically to the volume behind the horizon (CV conjecture) or the Wheeler-DeWitt patch action (CA conjecture).

**The framework's account is not a separate hypothesis.** The two-timescale puzzle is structurally identical to the [detection-noise vs. preservation-noise distinction](/derivations/foundation/observer-edges-and-mutual-opacity) established in the pattern-edges program. External thermalization saturates detection-accessible relational invariants on the horizon. The substrate beneath the horizon continues generating relational invariants via Type III interactions — these are not detection-accessible to any external observer (the horizon is the framework's epistemic boundary, [Black Hole Entropy](/derivations/holography/black-hole-entropy) Theorem 2.1) but are *preservation-relevant*: they advance the substrate's coherence accounting and the QEC code's logical content.

**The result.** Define $\kappa(t)$ as the depth function $d(v)$ ([Time as Phase Ordering](/derivations/thermodynamics/time)) on the inaccessible-coherence subgraph beneath the epistemic horizon, measured relative to a reference initial state. Then:

1. $\kappa(t) \in \mathbb{Z}_{\geq 0}$ at all times, by Cauchy-slice integer quantization ([Coherence Conservation](/derivations/axioms/coherence-conservation) Corollary 5.5a). **The framework's complexity functional is integer-valued at the substrate scale** — distinct from CV/CA conjectures, which give $C \in \mathbb{R}_{\geq 0}$.

2. $\dot\kappa(t) \leq S \cdot \omega_0$ where $S = A/(4\ell_P^2)$ is the horizon entropy and $\omega_0$ is the natural frequency of the substrate DOF. This is Lloyd's bound, derived here as a direct count of Type III interactions per natural cycle rather than an asserted thermodynamic limit.

3. $\kappa(t)$ saturates at $\kappa_{\max}$ when the substrate beneath the horizon reaches the [bootstrap fixed point](/derivations/interactions/bootstrap). Saturation is exact and integer-counted, identified with the bootstrap-fixed-point recurrence rather than statistical Poincaré recurrence.

4. **Second Law of Complexity**: $\kappa(t)$ is monotone non-decreasing. This is a one-paragraph corollary of the structural-arrow theorem ([Time as Phase Ordering](/derivations/thermodynamics/time) Theorem 3.1) restricted to the inaccessible subgraph.

**Why this matters.** Susskind's "second law of complexity" is empirically asserted but not derived from a single physical principle. Here it is a direct consequence of Coherence Conservation + the structural-arrow theorem. Lloyd's bound is currently a thermodynamic-uncertainty assertion; here it is a count of substrate Type III events. The integer-step substructure is a framework-distinctive prediction below the experimental reach for actual black holes but a sharp structural commitment about what complexity *is*.

**An honest caveat.** This draft establishes the rate bound, the integer substructure, and the Second Law as corollaries of existing framework content. The agreement of substrate $\kappa$ with the operational "minimum gate count" definition (Step 1 Remark), the identification of $\kappa \cdot \hbar\omega_0$ with the CV volume at level-0 substrate (Step 6), and the precise determination of effective $m$ in the Lloyd-rate bound (Step 2) are listed as open gaps. The draft status reflects that these gaps remain.

**Note on status.** This derivation is `draft` rather than `provisional` because Steps 1, 2, and 6 contain explicit open gaps. The Second Law of Complexity (Step 5) and the integer-step substructure (Step 3) are corollaries of upstream rigorous results and are robust to the open gaps elsewhere. Promotion to `provisional` depends on closing G1 (operational complexity identification) and G3 (effective $m$ in Lloyd bound).

## Statement

**Theorem (Substrate Complexity Growth).** *Let $\mathcal{O}$ be an external observer with epistemic horizon $\partial\mathcal{H}$ enclosing a substrate region with horizon area $A$ and entropy $S = A/(4\ell_P^2)$. Define the substrate-complexity functional*
$$\kappa(t) := d(v_t) - d(v_0)$$
*where $v_t$ is the substrate node at proper time $t$ (relative to $\mathcal{O}$), $v_0$ is a reference initial node, and $d(\cdot)$ is the DAG-depth function ([Time as Phase Ordering](/derivations/thermodynamics/time) Theorem 3.1) restricted to the inaccessible-coherence subgraph beneath $\partial\mathcal{H}$. Then:*

1. **(Integer-valued)** *$\kappa(t) \in \mathbb{Z}_{\geq 0}$ for all $t$.*

2. **(Lloyd-rate bound)** *$\dot\kappa(t) \leq S \cdot \omega_0$ where $\omega_0$ is the natural frequency of the substrate DOF on the horizon.*

3. **(Bootstrap-recurrence saturation)** *There exists $\kappa_{\max} \leq C_0^{(0)}/(\hbar\omega_0)$, equal to the per-observer integer coherence capacity, such that $\kappa(t) \to \kappa_{\max}$ as the substrate reaches the bootstrap fixed point, and $\kappa(t) = \kappa_{\max}$ for all subsequent $t$.*

4. **(Second Law of Complexity)** *$\kappa(t)$ is monotone non-decreasing: $\kappa(t_2) \geq \kappa(t_1)$ whenever $t_2 \geq t_1$.*

## 1. Substrate-Complexity Functional

**Definition 1.1 (Inaccessible-coherence subgraph).** Let $\mathcal{O}$ be an observer with epistemic horizon $\partial\mathcal{H}$ at a given proper time. The **inaccessible-coherence subgraph** $\mathcal{G}_{\text{in}}$ is the subgraph of the global dependency DAG ([Time as Phase Ordering](/derivations/thermodynamics/time) Definition 2.2) consisting of:

- Substrate nodes whose relational invariants are not in $\mathcal{O}$'s detection-accessible content (i.e., no Type II/III interaction between the node and $\mathcal{O}$ exists),
- Together with all causal-set edges entirely within this set of nodes.

By [Black Hole Entropy](/derivations/holography/black-hole-entropy) Theorem 2.1, this subgraph is well-defined whenever $\partial\mathcal{H}$ is a horizon (event horizon, apparent horizon, or cosmological horizon) — the universal-inaccessibility theorem guarantees that the same nodes are inaccessible to all external observers in the same connected component.

**Definition 1.2 (Substrate complexity).** Fix a reference substrate node $v_0$ at time $t = 0$. For $t \geq 0$, the **substrate complexity** is
$$\kappa(t) := d(v_t) - d(v_0)$$
where $v_t$ is the substrate node corresponding to the same code-subspace observer at time $t$, and $d(\cdot)$ is the DAG-depth function on $\mathcal{G}_{\text{in}}$.

**Proposition 1.3 (Integer-valued).** $\kappa(t) \in \mathbb{Z}_{\geq 0}$ for all $t \geq 0$.

*Proof.* The DAG-depth $d(v)$ is defined as the length of the longest path from a root to $v$ ([Time as Phase Ordering](/derivations/thermodynamics/time) Definition 2.3), which is integer-valued. By Cauchy-slice integer quantization ([Coherence Conservation](/derivations/axioms/coherence-conservation) Corollary 5.5a), the coherence count $N^{(n)}$ at every bootstrap level is integer-valued, which in turn forces the DAG to have discrete nodes (one per relational invariant). The difference of two integer-valued functions is integer-valued; the non-negativity follows from the structural-arrow theorem (Section 5 below). $\square$

**Remark on operational complexity (Open Gap G1).** $\kappa$ is defined intrinsically as DAG-depth on substrate coherence. The operational definition of quantum complexity is the minimum gate count over circuits preparing a given state from a reference. These should agree at leading order — each Type III interaction event is the framework analogue of a "two-qubit gate" — but the identification has not been verified explicitly. A rigorous identification requires (a) defining a canonical mapping from substrate Type III events to gate operations on the boundary Hilbert space, (b) proving optimality of this mapping in the operational sense. This is the principal open gap in the present draft.

## 2. Lloyd-Rate Theorem

**Theorem 2.1 (Lloyd-rate bound).** *The growth rate of substrate complexity is bounded by horizon entropy times the natural substrate frequency:*
$$\dot\kappa(t) \leq S \cdot \omega_0 = \frac{A}{4\ell_P^2} \cdot \omega_0$$
*where $\omega_0$ is the natural frequency of the substrate DOF on the horizon.*

*Proof.* The bound is a direct count over horizon DOF.

**Step 1 (Horizon DOF as observer nodes).** By [Black Hole Entropy](/derivations/holography/black-hole-entropy) Proposition 5.1, the horizon carries $N_\text{H} = A/(4\ell_P^2)$ Planck-area cells, each corresponding to one minimal observer node at substrate resolution. By [Black Hole Entropy](/derivations/holography/black-hole-entropy) Theorem 3.1, $N_\text{H} = S$ in natural units. Each horizon DOF is therefore an observer satisfying Axioms 1–3 at substrate resolution.

**Step 2 (Loop closure bounds Type III interaction rate per DOF).** By Axiom 3 ([Loop Closure](/derivations/axioms/loop-closure)), each observer has a finite positive period $T_\mathcal{O} = 2\pi/\omega_0$. Each loop closure of an observer can generate at most one new relational invariant (Type III interaction) per cycle — a second invariant generated within the same cycle would split into two sub-cycles, redefining $\omega_0$. The per-DOF Type III rate is therefore bounded by $\omega_0/(2\pi)$ in cycles per unit proper time, or equivalently $\omega_0$ in radians per unit time. Each new relational invariant increments $\kappa$ by exactly $1$ (Proposition 1.3).

**Step 3 (Sum over horizon DOF).** The total complexity growth rate is the sum of per-DOF rates:
$$\dot\kappa(t) \leq \sum_{i=1}^{N_\text{H}} \omega_0 = N_\text{H} \cdot \omega_0 = S \cdot \omega_0.$$

The inequality is saturated when every horizon DOF generates a new invariant within every natural cycle. $\square$

**Remark on $\omega_0$ (Open Gap G3).** The natural frequency $\omega_0$ for horizon substrate DOF is, to leading order, the Planck frequency $\omega_P = c^5/(\hbar G)^{1/2}$. The external observer measures rates as redshifted by the Tolman factor at the horizon — for a black hole of surface gravity $\kappa_\text{surf}$, the effective external rate is $\dot\kappa_\text{ext} = \kappa_\text{surf}/(2\pi) \cdot S$. The coordinate-invariant formulation in terms of surface gravity is the natural framework statement, but the precise mapping from substrate $\omega_0$ to observed rate requires the geometry-functor formalization ([hierarchical-geometry future target](/research-targets/horizon-coincidence-fixed-point-probe)) and is here left implicit.

**Corollary 2.2 (Recovery of Lloyd's bound).** *Substituting $S = E/(k_B T)$ at thermal equilibrium and $\hbar\omega_0 \sim k_B T$ gives the canonical Lloyd bound $\dot{C} \lesssim E/(\hbar)$.*

*Proof.* Algebra. The framework recovers Lloyd's bound but with a microscopic mechanism: each horizon DOF participates in at most one Type III event per natural cycle. $\square$

## 3. Integer-Step Substructure

**Proposition 3.1 (Framework-distinctive prediction).** *At resolution finer than $\omega_0^{-1}$, $\kappa(t)$ advances stepwise in integer increments rather than smoothly. Each step corresponds to one Type III interaction event creating one new relational invariant.*

*Proof.* By Proposition 1.3, $\kappa \in \mathbb{Z}_{\geq 0}$. By the Type III interaction dynamics ([Three Interaction Types](/derivations/interactions/three-types) Theorem 5.1), each interaction event creates exactly one new relational invariant in a finite (substrate-Planck-scale) interval. Between events, $\kappa$ is constant. The function $\kappa(t)$ is therefore a step function with unit step size and step spacing bounded below by the natural cycle period $2\pi/\omega_0$. $\square$

**Remark on comparison to CV/CA conjectures.** The Complexity = Volume conjecture predicts $C(t) = V_{\text{behind horizon}}(t) / (\ell\, G_N)$ where $\ell$ is an arbitrary length scale; the Complexity = Action conjecture predicts $C(t) = I_{\text{Wheeler-DeWitt}}(t)/(\pi\hbar)$. Both give real-valued $C \in \mathbb{R}_{\geq 0}$. **The framework predicts $\kappa \in \mathbb{Z}_{\geq 0}$ at substrate resolution.** This is a sharp structural commitment, not a coarse-graining artifact: the integer count traces directly to [Coherence Conservation](/derivations/axioms/coherence-conservation) Corollary 5.5a (Cauchy-slice integer quantization), which is one of the framework's foundational corollaries. At coarse-grained resolution ($\Delta t \gg \omega_0^{-1}$), $\kappa(t)$ appears smoothly linear with slope bounded by Theorem 2.1, indistinguishable from CV/CA at that scale. At fine resolution, framework and CV/CA part company.

This is not currently testable for actual black holes — $\omega_0^{-1}$ at the horizon is Planck-scale. It may become testable in analog systems: cold-atom holographic simulators or tensor-network simulations where the substrate frequency is set by hand, and where direct counting of "complexity gates" should reveal integer substructure if the framework's identification is correct.

## 4. Bootstrap-Recurrence Saturation

**Theorem 4.1 (Bootstrap-fixed-point saturation).** *There exists $\kappa_{\max} \leq C_0^{(0)}/(\hbar\omega_0)$ such that $\kappa(t) \to \kappa_{\max}$ as the substrate reaches the bootstrap fixed point. For all subsequent $t$, $\kappa(t) = \kappa_{\max}$.*

*Argument.* The bound $\kappa_{\max} \leq C_0^{(0)}/(\hbar\omega_0)$ follows from per-observer coherence finiteness: each substrate observer has finite per-observer $C_0^{(0)}$ ([Observer Loop Viability](/derivations/cosmology/observer-loop-viability) Proposition 7.4 Remark + holographic bound on epistemic horizon), and each relational invariant carries one $\hbar\omega_0$ quantum. The DAG depth on the inaccessible subgraph is bounded above by the total integer count of substrate relational invariants, which is $C_0^{(0)}/(\hbar\omega_0)$.

When the substrate reaches the [bootstrap fixed point](/derivations/interactions/bootstrap), the Type III interaction rate among substrate observers produces only redundant invariants — invariants tautologically implied by existing relational structure rather than new content. By the constraint-saturation argument (currently in the cyclic-closure findings of the [knot-theoretic exploration](/derivations/foundation/knot-theoretic-bootstrap), pending formalization), additional Type III events at the fixed point do not increment $d(v)$. The fixed point is identified with the configuration where $\dim\mathcal{H}_{\text{sat}} = \exp(S)$ accessible states have been exhausted ([Scrambling](/derivations/holography/scrambling) Theorem 4.1).

**Saturation time.** Combining the Lloyd-rate bound (Theorem 2.1) with the capacity bound $\kappa_{\max} \sim e^S$ (number of distinguishable substrate configurations within the saturated sector, [Scrambling](/derivations/holography/scrambling) Proposition 1.2):
$$t_c \sim \frac{\kappa_{\max}}{\dot\kappa_{\max}} \sim \frac{e^S}{S\omega_0} \sim \omega_0^{-1} \cdot \frac{e^S}{S}.$$

In natural units this is the Susskind $t_c \sim e^S$ scale. $\square$

**Remark on the structural-vs-statistical distinction.** Standard quantum-mechanical arguments give Poincaré recurrence time $t_{\text{Poincaré}} \sim e^{e^S}$, which is much longer than $t_c \sim e^S$. The Susskind/Aaronson account explains complexity saturation as a combinatorial property of the unitary group on the saturated sector — distinct from statistical recurrence in the full Hilbert space. **The framework recovers this distinction with a single mechanism**: the saturated sector is the bootstrap fixed point, an exact structural object; the integer-count exhaustion within the sector is exact, not statistical. This is the deepest structural payoff of the present derivation: a known empirical regularity (complexity saturates much sooner than statistical recurrence would suggest) is reduced to a single framework primitive.

## 5. Second Law of Complexity

**Theorem 5.1 (Second Law of Complexity).** *$\kappa(t)$ is monotone non-decreasing: for all $t_2 \geq t_1$, $\kappa(t_2) \geq \kappa(t_1)$.*

*Proof.* By [Time as Phase Ordering](/derivations/thermodynamics/time) Theorem 3.1 (Structural Arrow), the DAG-depth function $d(v)$ on the global dependency DAG is monotone non-decreasing along any worldline. The proof there proceeds by Coherence Conservation: each new relational invariant generated at a node $v$ increments $d(v')$ for downstream $v'$, and no operation reduces $d$.

Restricting the structural arrow to the inaccessible-coherence subgraph $\mathcal{G}_{\text{in}}$ requires only that the restriction preserves monotonicity. This follows because $\mathcal{G}_{\text{in}}$ is closed under the causal-set partial order: if $u \prec v$ in $\mathcal{G}_{\text{in}}$, then $u \prec v$ in the global DAG, and the depth increment $d(v) - d(u) \geq 0$ inherits. The restriction $d|_{\mathcal{G}_\text{in}}$ is therefore monotone non-decreasing, hence $\kappa(t) = d(v_t) - d(v_0)$ is monotone non-decreasing. $\square$

**Remark on Susskind's empirical assertion.** Susskind and Aaronson have argued that quantum complexity tends to grow in time as a kind of "second law of complexity," parallel to but distinct from the second law of thermodynamics. Their argument is operational: in the absence of fine-tuning, an evolving quantum state passes through complexity classes of increasing measure, so complexity tends to increase. This is an empirical/measure-theoretic argument, not a derivation from first principles.

**The framework provides the missing derivation.** $\kappa(t) \geq 0$ monotonically by a one-paragraph corollary of Coherence Conservation (Axiom 1) + the structural-arrow theorem. The framework has no additional postulate for the second law of complexity — it is a structural fact about DAG depth on the substrate, derived from the same axiom that gives the ordinary second law of thermodynamics via [Entropy](/derivations/thermodynamics/entropy).

## 6. Comparison to CV and CA Conjectures

**The structural identification (Open Gap G2).** The Complexity = Volume (CV) and Complexity = Action (CA) conjectures predict that complexity equals a specific bulk geometric quantity computed from the gravitational dual. For an asymptotically AdS black hole, CV gives $C_\text{V}(t) \sim V_\text{behind horizon}(t)/(\ell\, G_N)$ and CA gives $C_\text{A}(t) \sim I_\text{WdW}(t)/(\pi\hbar)$.

**The framework's $\kappa$ is candidate-equivalent to CV up to factor.** Heuristic argument: at level-0 substrate, the inaccessible-coherence subgraph beneath the horizon has cell count $\sim V_\text{interior}/(\ell_P^3)$. Each cell carries one $\hbar\omega_0$ of coherence and contributes one to DAG depth at leading order. So $\kappa(t) \cdot \hbar\omega_0 \sim V_\text{interior}(t) \cdot \rho_\text{Planck}$, where $\rho_\text{Planck}$ is the Planck-scale energy density. This matches CV to leading order in $\ell_P$. A rigorous identification requires the [hierarchical-geometry](/research-targets/horizon-coincidence-fixed-point-probe) geometry functor $G: \mathbf{Obs} \to \mathbf{Geom}$ to be formalized; the present draft asserts the identification at the heuristic level only.

**The framework appears to disagree with CA at the integer-substructure level.** CA gives $C_\text{A} \in \mathbb{R}$ via an action integral, with no natural integer substructure. The framework predicts $\kappa \in \mathbb{Z}$ at substrate resolution (Proposition 3.1). If integer substructure is verifiable in analog systems or via specific holographic models, this distinguishes the framework from CA. The disagreement is structural, not merely numerical — it pertains to the nature of complexity rather than its value.

**Where CV/CA and the framework can be cross-checked.** Three places where measurable differences could arise:

1. **Discreteness at fine resolution.** Framework: integer steps. CV/CA: smooth.

2. **Saturation mechanism.** Framework: bootstrap fixed point (structural). CV: bulk volume reaches a finite limit when the interior approaches a thermal state. CA: action stops growing when the Wheeler-DeWitt patch geometry stabilizes. The three mechanisms make qualitatively similar predictions for the saturation time ($\sim e^S$) but the framework's mechanism is integer-counted and the CV/CA mechanisms are continuous.

3. **Behavior near the bootstrap fixed point.** Framework: $\kappa$ is exactly constant once the fixed point is reached (no further increments). CV/CA: $C_\text{V,A}$ may continue to fluctuate by Poincaré recurrence, but at vastly slower rates. The exact-constancy prediction is sharper than CV/CA.

## Falsifiability

**Sub-horizon complexity beyond bootstrap fixed point.** If a system at the bootstrap fixed point can be shown to continue generating distinguishable substrate configurations indefinitely (without resetting), the bootstrap-recurrence saturation (Theorem 4.1) is falsified. This is testable in principle in analog systems where the substrate frequency is set by hand and the system can be observed past its saturation time.

**Non-integer complexity at substrate scale.** If a high-resolution complexity measurement reveals smooth real-valued complexity growth rather than integer steps (in any system where the substrate scale is accessible), Proposition 3.1 is falsified.

**Complexity growth rate exceeding $S\omega_0$.** If any system is observed with $\dot{C} > S\omega_0$ for a regime where the Lloyd-rate bound should hold, Theorem 2.1 is falsified. This is the cleanest direct test but is currently not accessible for actual black holes.

**No second law of complexity violation.** Conversely, the framework predicts $\kappa$ never decreases (Theorem 5.1). Observation of $\kappa(t_2) < \kappa(t_1)$ for $t_2 > t_1$ in a closed system would falsify the structural arrow (and with it, Axiom 1 — Coherence Conservation).

## Open Gaps

**G1. Operational complexity identification.** $\kappa$ is defined as DAG-depth on substrate coherence. The operational definition is minimum gate count. These should agree at leading order, but the rigorous identification — including the canonical mapping from substrate Type III events to gates on the boundary Hilbert space, and optimality of this mapping — has not been verified. This is the principal open gap for upgrade from `draft` to `provisional`.

**G2. CV identification at level-0 substrate.** Section 6's identification $\kappa \cdot \hbar\omega_0 \sim V_\text{interior} \cdot \rho_\text{Planck}$ is heuristic. A rigorous derivation requires the geometry functor $G: \mathbf{Obs} \to \mathbf{Geom}$ to be formalized — overlap with the [hierarchical-geometry](/research-targets/horizon-coincidence-fixed-point-probe) target. Until then, the framework's complexity functional $\kappa$ is independently defined; the agreement with CV is a structural conjecture rather than a derivation.

**G3. Effective $m$ / $\omega_0$ in the Lloyd-rate bound.** Theorem 2.1 uses the substrate natural frequency $\omega_0$. The coordinate-invariant formulation in terms of surface gravity (for external observers near a black hole) is the natural framework statement, but the precise mapping requires the geometry functor and the Tolman redshift relation. The present draft asserts the bound at the substrate frame and notes the redshift conversion as implicit.

**G4. Bootstrap fixed-point structural recurrence (upstream).** Theorem 4.1's saturation argument depends on the constraint-saturation property of the bootstrap fixed point, which is currently part of the cyclic-closure findings in the [knot-theoretic-fixed-point](/research-targets/horizon-coincidence-fixed-point-probe) exploration (specifically, the identification of $U \cong R(U,U)$ with a periodic orbit $\Phi_T(\text{state}) = \text{state}$). Closing this gap is a prerequisite for promoting the saturation theorem from semi-formal to formal.

## Rigor Assessment

- **Step 1 (Substrate-complexity functional)**: definition rigorous; integer-valuedness rigorous (corollary of Coherence Conservation Cor 5.5a + Time Definition 2.3). Operational identification heuristic (open gap G1).
- **Step 2 (Lloyd-rate Theorem)**: rigorous as a count over horizon DOF, modulo G3 (effective frequency).
- **Step 3 (Integer-step substructure)**: rigorous corollary of Proposition 1.3 + Three Interaction Types Theorem 5.1.
- **Step 4 (Bootstrap-recurrence saturation)**: semi-formal — argument is structural but depends on cyclic-closure findings (G4) not yet formalized in main derivation pages.
- **Step 5 (Second Law of Complexity)**: rigorous corollary of Time Theorem 3.1 + Coherence Conservation. This is the firmest step.
- **Step 6 (CV/CA comparison)**: heuristic — depends on geometry-functor formalization (G2).

Promotion to `provisional` requires closing G1; promotion to `derived` additionally requires closing G2 and G4 and verifying G3 in a coordinate-invariant form.
