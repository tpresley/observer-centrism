---
title: "Biological Non-Ergodicity"
status: "provisional"
dependsOn: ["thermodynamics-ext/non-ergodicity", "thermodynamics/entropy", "minimal-observer/structure", "minimal-observer/multiplicity", "interactions/bootstrap", "axioms/loop-closure", "axioms/observer-definition", "thermodynamics/action-planck", "thermodynamics/time"]
enablesDerivation: []
tags: ["thermo-ext"]
summary: "Living systems are non-ergodic because the observer boundary B constrains phase-space exploration — connecting the observer definition to the hallmark features of biological organization: self-maintenance, memory, and adaptive expansion of coherence domains"
rigorLevel: "semi-formal"
lastUpdated: 2026-04-22
---

## Overview

This derivation addresses a long-standing puzzle at the intersection of physics and biology: **why do living systems explore only a vanishing fraction of their configuration space, and how does this connect to the observer definition?**

Living systems are the most conspicuously non-ergodic systems in nature. A bacterium does not randomly sample protein configurations; it maintains specific molecular arrangements against thermal disruption. An organism does not diffuse through phase space — it actively constrains its trajectory to a tiny subset of configurations compatible with continued function. This is not merely a quantitative deviation from ergodicity; it is a qualitative departure that persists indefinitely.

The framework's observer definition — the triple $(\Sigma, I, B)$ of state space, Noether invariant, and self/non-self boundary — provides a natural explanation. The boundary $B$ creates a topological partition of phase space that is structurally identical to the non-ergodic partition derived in [Non-Ergodicity and Conditional Thermalization](/derivations/thermodynamics-ext/non-ergodicity). Living systems are observers whose boundary $B$ is actively maintained by coherence cycling, confining the system to the observer-compatible sector of phase space.

**The approach.**

1. Identify the observer boundary $B$ with the organizational boundary of a living system (membrane, immune system, metabolic closure).
2. Show that maintaining $B$ requires continuous coherence expenditure (the loop closure cost $\hbar\omega$ per cycle), which constrains the system to the $B$-compatible sector of phase space.
3. Show that the $B$-compatible sector is non-ergodic in the full configuration space but conditionally ergodic within itself — the living system explores configurations compatible with maintaining $B$, but never configurations that would dissolve $B$.
4. Derive the hallmark features of biological organization as consequences: self-maintenance (coherence cycling), memory (non-ergodic sector selection), adaptation (expansion of the coherence domain within the sector).

**Why this matters.** If correct, this derivation connects the abstract observer definition to the concrete features of living systems, suggesting that biology is not an accident of chemistry but a necessary consequence of the observer axioms. Any system satisfying the three axioms — coherence conservation, the observer triple, and loop closure — will exhibit the organizational features we associate with life.

**An honest caveat.** This derivation establishes structural identifications between the observer triple and biological features, and shows that biological non-ergodicity follows from the boundary-maintenance mechanism applied to the upstream [Non-Ergodicity and Conditional Thermalization](/derivations/thermodynamics-ext/non-ergodicity) partition. Quantitative biological predictions — metabolic scaling with hierarchy depth, dimension of the $B$-compatible sector as a function of organism complexity, abiogenesis conditions — remain as open gaps (below).

**Note on status.** This derivation is provisional because several of its central claims depend on speed-of-light S1 (pseudo-Riemannian structure, inherited via the upstream non-ergodicity derivation's use of coherence geometry) (see [Speed of Light](/derivations/spacetime/speed-of-light)).

## Statement

**Theorem (structural).** *A system satisfying the observer axioms $(\Sigma, I, B)$ with active loop closure is non-ergodic in the full configuration space $\Gamma$ and conditionally ergodic within the $B$-compatible sector $\Gamma_B \subsetneq \Gamma$. Maintaining $\Gamma_B$ requires continuous coherence expenditure of at least $\hbar\omega$ per loop-closure cycle, where $\omega$ is the loop-closure frequency ([Loop Closure](/derivations/axioms/loop-closure), Corollary 4.3).*

**Corollary.** *Living systems are physical realizations of the observer triple at the biochemical hierarchy level. Their characteristic non-ergodicity — self-maintenance, memory, and adaptive behavior — follows from boundary maintenance, non-ergodic sector confinement, and coherence-domain expansion respectively.*

**Remark on sector size.** *The informal expectation that $\dim(\Gamma_B)$ relative to $\dim(\Gamma)$ decreases with the complexity of $B$ (number of self/non-self distinctions maintained) is plausible — each distinction adds a constraint — but is not proved here and is listed as an open gap below.*

## Derivation

### Step 1: The Observer Boundary as Phase-Space Partition

**Definition 1.1.** For an observer $\mathcal{O} = (\Sigma, I, B)$, the **$B$-compatible sector** is the set of configurations in which the boundary $B$ is maintained:

$$\Gamma_B = \{\gamma \in \Gamma : B(\gamma) \text{ separates self from non-self}\}$$

Configurations in $\Gamma \setminus \Gamma_B$ are those in which $B$ is dissolved — the observer ceases to exist as a distinct entity.

**Proposition 1.2 (Topological partition).** *$\Gamma_B$ is a proper subset of $\Gamma$ whose complement $\Gamma \setminus \Gamma_B$ has strictly positive measure. The boundary between $\Gamma_B$ and its complement is the set of configurations in which $B$ is marginally maintained.*

*Argument.* The boundary $B$ is a topological structure — it defines a partition of the degrees of freedom into "self" (inside $B$) and "non-self" (outside $B$). Dissolving $B$ is a topological change (analogous to tearing a membrane), not a continuous deformation. The set of configurations with $B$ intact and the set with $B$ dissolved are therefore topologically distinct sectors of $\Gamma$, separated by a codimension-$\geq 1$ boundary. $\square$

### Step 2: Maintenance Cost and Coherence Cycling

**Proposition 2.1 (Maintenance cost).** *Maintaining the observer boundary $B$ requires continuous coherence expenditure. The minimum cost per cycle is $\hbar\omega$, where $\omega$ is the loop-closure frequency ([Loop Closure](/derivations/axioms/loop-closure), Corollary 4.3).*

*Argument.* The boundary $B$ is maintained by the observer's loop closure — the periodic cycling through internal states that constitutes the observer as a persistent entity. Each cycle has coherence cost $\geq \hbar$ ([Action and Planck's Constant](/derivations/thermodynamics/action-planck), Theorem 3.1). If the cycling stops, the observer's internal phase ceases to advance, the boundary $B$ is no longer actively maintained, and thermal fluctuations will eventually dissolve it. The maintenance cost is therefore at least $\hbar\omega$ per unit time, where $\omega = 2\pi/T$ is the cycling frequency.

In biological terms: metabolism is the macroscopic manifestation of coherence cycling. An organism that stops metabolizing loses its organizational boundary and decays to equilibrium — the $B$-dissolved sector $\Gamma \setminus \Gamma_B$. $\square$

**Remark 2.2.** The minimum coherence expenditure $\hbar\omega$ is for a minimal observer. A complex biological observer at a high bootstrap hierarchy level $\ell$ requires coherence cycling at all levels $1$ through $\ell$, giving a total maintenance cost that scales with the hierarchy depth. This connects to the observation that metabolic rate scales with organism complexity.

### Step 3: Non-Ergodicity from Boundary Maintenance

**Theorem 3.1 (Biological non-ergodicity).** *An observer with maintained boundary $B$ is non-ergodic in $\Gamma$. Its trajectory is confined to $\Gamma_B$ for as long as the loop closure is active.*

*Proof sketch.* The trajectory $\gamma(t) \in \Gamma$ is generated by the phase-ordered dynamics ([Time as Phase Ordering](/derivations/thermodynamics/time)). At each time step, the observer's loop closure advances the internal phase and maintains $B$. For $\gamma(t)$ to leave $\Gamma_B$, the boundary $B$ would have to dissolve, which requires either (a) the loop closure to fail (cessation of coherence cycling — death) or (b) a fluctuation of amplitude $\geq \hbar$ to disrupt $B$ (barrier crossing). While the loop closure is active, it continuously repairs fluctuations in $B$ (each cycle re-establishes the self/non-self distinction), so the trajectory remains in $\Gamma_B$. $\square$

**Corollary 3.2 (Conditional ergodicity within $\Gamma_B$).** *Within $\Gamma_B$, the observer's dynamics satisfy conditional ergodicity (Theorem 5.2 of [Non-Ergodicity](/derivations/thermodynamics-ext/non-ergodicity)). The observer explores configurations compatible with maintaining $B$, but never configurations that would dissolve $B$.*

### Step 4: Memory as Sector Selection

**Proposition 4.1 (Structural memory).** *The observer's Noether invariant $I$ selects a specific sub-sector within $\Gamma_B$. Since different values of $I$ correspond to different sub-sectors, the observer's history (which determined $I$) constrains its future trajectory. This is structural memory: the system's past is encoded in the sector it occupies.*

*Argument.* The Noether invariant $I$ is conserved by the observer's dynamics ([Observer Definition](/derivations/axioms/observer-definition)). It labels a conserved quantity associated with the loop closure symmetry. Different observers (or the same observer at different points in its history) have different values of $I$, selecting different sub-sectors of $\Gamma_B$. The observer cannot move between sub-sectors without changing $I$, which requires an interaction that breaks the loop closure symmetry. This is the structural analog of biological memory: the organism's current state constrains its future states, not because of explicit information storage, but because the non-ergodic sector structure prevents exploration of configurations incompatible with the organism's history. $\square$

### Step 5: Adaptation as Coherence-Domain Expansion

**Proposition 5.1 (Adaptive expansion).** *An observer can expand its coherence domain $\mathcal{D}_\mathcal{A}$ ([Entropy as Inaccessible Coherence](/derivations/thermodynamics/entropy), Definition 2.1) through structured interactions that bring previously inaccessible coherence within reach.*

*Argument.* The coherence domain $\mathcal{D}_\mathcal{A}$ is the set of states whose coherence is accessible to observer $\mathcal{A}$. By constructing new interaction channels (forming relational invariants with previously unrelated observers, [Interactions: Three Types](/derivations/interactions/three-types)), $\mathcal{A}$ can bring coherence that was outside $\mathcal{D}_\mathcal{A}$ into it. The relational coherence $\mathcal{C}(\mathcal{A}:\mathcal{B}) > 0$ created by the new channel is accessible to both observers (by symmetry of the relational coherence functional); prior to the channel, this shared content was inaccessible to $\mathcal{A}$.

Consistency with the second law ([Entropy](/derivations/thermodynamics/entropy), Theorem 4.2): the global inaccessible coherence is monotone non-decreasing. Domain expansion by $\mathcal{A}$ transfers content from "inaccessible to $\mathcal{A}$, accessible to environment" into "accessible to $\mathcal{A}$ and to shared partner" — a redistribution within the already-accessible portion of global coherence, not a decrease of global inaccessibility. The new channel simultaneously produces observer-environment correlations that are globally inaccessible (by the monotonicity of the [Entropy](/derivations/thermodynamics/entropy) derivation's Step 4), balancing the ledger.

In biological terms: an organism that develops a new sensory modality, learns a new skill, or evolves a new metabolic pathway is expanding its coherence domain. It can now access (and therefore control) aspects of its environment that were previously beyond its reach. $\square$

### Step 6: The C5 Requirement and Ecological Networks

**Proposition 6.1 (Obligate sociality).** *The subadditivity requirement C5, which is vacuous for pairs but non-trivial for $\geq 3$ observers ([Multiplicity](/derivations/minimal-observer/multiplicity), Step 7), implies that biological observers cannot exist in isolation. At least three mutually interacting observers are required for C5 to impose non-trivial constraints, and the resulting network must be boundaryless (every observer interacts with at least two others).*

*Argument.* This follows directly from the multiplicity derivation. For a single observer, C5 is a self-consistency condition. For a pair, C5 reduces to $\mathcal{C}(A \cup B) \leq \mathcal{C}(A) + \mathcal{C}(B)$, which is automatically satisfied. For three or more observers, C5 constrains the joint coherence in a way that requires non-trivial correlations, forcing the observers into a network. The network must be boundaryless (no observer has only one interaction partner) because a boundary observer would be effectively isolated, reducing to the trivial pair case.

In biological terms: organisms exist in ecosystems, not in isolation. The minimum viable biology is not a single organism but a community of at least three mutually interacting species. This is consistent with the observed fact that no known organism is self-sufficient — all depend on networks of other organisms. $\square$

## Comparison with Standard Approaches

| Feature | Standard biophysics | Observer-centrism |
|---|---|---|
| Non-ergodicity source | Kinetic trapping, free energy barriers | Observer boundary $B$ + coherence cycling |
| Self-maintenance | Dissipative structure (Prigogine) | Loop closure maintenance of $B$ |
| Memory | Information storage in molecules | Sector selection by Noether invariant $I$ |
| Adaptation | Natural selection on replicators | Coherence domain expansion |
| Minimum viable unit | Single cell | Network of $\geq 3$ observers (C5) |
| Death | System failure | Loop closure cessation → $\Gamma_B$ exit |

## Rigor Assessment

**Rigorous given upstream derivations:**
- Steps 1–3: The topological partition (Prop 1.2), the maintenance cost lower bound (Prop 2.1, from [Loop Closure](/derivations/axioms/loop-closure) Cor 4.3 + [Action and Planck's Constant](/derivations/thermodynamics/action-planck) Thm 3.1), and the non-ergodicity confinement (Thm 3.1) are structural consequences of the axioms and [Non-Ergodicity](/derivations/thermodynamics-ext/non-ergodicity) Thm 5.2.
- Step 4: Memory as sector selection by the Noether invariant is a direct application of [Observer Definition](/derivations/axioms/observer-definition).
- Step 5: Coherence-domain expansion is consistent with the second law ([Entropy](/derivations/thermodynamics/entropy), Thm 4.2) by the ledger-balance argument given.
- Step 6: Obligate sociality follows from [Multiplicity](/derivations/minimal-observer/multiplicity) Step 7 + [Bootstrap](/derivations/interactions/bootstrap) Cor 7.3.

**Structural (identification without quantitative characterization):**
- The mapping of the observer triple onto biological features (metabolism ↔ loop-closure maintenance, organismal boundary ↔ $B$, ecosystem ↔ C5 network) is a well-motivated identification; the framework does not yet produce quantitative biological predictions from it.

## Open Gaps

1. **Metabolic scaling**: Derive the scaling of maintenance cost with hierarchy level $\ell$. If the cost scales as $\ell \cdot \hbar\omega_\ell$ where $\omega_\ell$ is the cycling frequency at level $\ell$, this should connect to Kleiber's law (metabolic rate $\propto M^{3/4}$) through the relationship between hierarchy depth and organism mass.
2. **$\Gamma_B$ dimension scaling**: The Statement's remark flags that $\dim(\Gamma_B)/\dim(\Gamma)$ plausibly decreases with the complexity of $B$ but this is not proved. A rigorous argument would characterize the codimension added per self/non-self distinction.
3. **Autopoiesis connection**: Make the relationship to Maturana and Varela's autopoiesis theory precise. The observer triple $(\Sigma, I, B)$ with active loop closure appears to be a formal version of autopoietic organization; this should be either confirmed or shown to be a distinct concept.
4. **Evolutionary dynamics**: If adaptation is coherence-domain expansion, natural selection should emerge as the process by which observers compete for coherence access. This would connect to the Fisher-Price equation via the Fisher metric on the observer state space.
5. **Abiogenesis**: The transition from non-observer chemistry to observer biology is the formation of the first $B$ boundary with active loop closure. The framework should predict conditions under which this transition is favorable (coherence landscape of pre-biotic chemistry).
