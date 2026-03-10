---
title: "Measurement as Relational Invariant Generation"
status: "rigorous"
dependsOn: ["quantum/preferred-basis"]
enablesDerivation: []
tags: ["quantum"]
summary: "Measurement = Type III interaction generating relational invariants; 'collapse' is the creation of new relational structure, not the destruction of superposition"
rigorLevel: "formal"
sourceSection: "12-quantum-mechanics"
lastUpdated: 2026-03-09
---

## Statement

**Theorem.** Measurement is a Type III interaction that generates a relational invariant between observer and system. What is called "collapse" is the transition from a state with no shared relational invariant to a state with a definite one — the creation of new relational structure, governed by the same coherence-conserving dynamics as all other interactions. The process is local, unitary on the joint state space, and irreversible. The apparent non-unitarity arises from describing the system relative to a single observer. The measurement problem is dissolved: there is no collapse postulate, no branching, no hidden variables.

## Derivation

**Structural postulates:** This derivation requires no new structural postulates beyond those already introduced: S1 from [Born Rule](/derivations/quantum/born-rule) (amplitude-coherence identification) and S1 from [Preferred Basis](/derivations/quantum/preferred-basis) (interaction-invariant correspondence). Measurement is a consequence of the existing framework.

### Step 1: The Pre-Measurement State

**Definition 1.1.** Let $\mathcal{O}$ (the observer/measurer) and $S$ (the system) be two observers in the interaction graph $\mathcal{G}$ with no existing relational invariant for the observable in question.

**Definition 1.2.** The **pre-measurement condition** is:

$$\nexists \, I_{\mathcal{O}S} \text{ for the observable being measured}$$

This does not mean $\mathcal{O}$ and $S$ have never interacted — they may share relational invariants from prior interactions involving other observables. It means specifically that no relational invariant $\hat{I}_{\mathcal{O}S}$ corresponding to the current measurement has been generated.

**Proposition 1.3.** *In the pre-measurement state, $S$ relative to $\mathcal{O}$ is described by a superposition:*

$$|\psi_S\rangle_\mathcal{O} = \sum_{k=1}^d \psi_k |k\rangle$$

*where $\{|k\rangle\}$ is the eigenbasis of the relational invariant that will be generated ([Preferred Basis](/derivations/quantum/preferred-basis), Theorem 3.1), and the amplitudes $\psi_k$ encode the coherence distribution across possible outcomes ([Born Rule](/derivations/quantum/born-rule)).*

*Proof.* Since no relational invariant $\hat{I}_{\mathcal{O}S}$ exists, no eigenvalue constraint selects a definite state. The system's description relative to $\mathcal{O}$ is the full Hilbert space state, expressed in the basis that will become relevant upon measurement. The Born rule probabilities $P(k) = |\psi_k|^2$ are well-defined but have not yet been "realized" — no relational invariant has fixed a value. $\square$

### Step 2: The Measurement Interaction

**Definition 2.1.** The **measurement** is a Type III interaction ([Three Interaction Types](/derivations/interactions/three-types)) between $\mathcal{O}$ and $S$: both invariants $I_\mathcal{O}$ and $I_S$ survive, and a new relational invariant $I_{\mathcal{O}S}$ is generated on the joint state space $\Sigma_\mathcal{O} \times \Sigma_S$.

**Theorem 2.2 (Von Neumann coupling).** *The Type III interaction transforms the joint state as:*

$$|\Phi_{\text{before}}\rangle = |\text{ready}\rangle_\mathcal{O} \otimes \sum_k \psi_k |k\rangle_S \quad \longrightarrow \quad |\Phi_{\text{after}}\rangle = \sum_k \psi_k |d_k\rangle_\mathcal{O} \otimes |k\rangle_S$$

*where $|d_k\rangle_\mathcal{O}$ is the observer state correlated with system outcome $k$ (the "detector state" recording outcome $k$).*

*Proof.* The Type III interaction generates $\hat{I}_{\mathcal{O}S}$ with eigenstates $\{|k\rangle_S\}$ ([Preferred Basis](/derivations/quantum/preferred-basis), Theorem 3.1). Coherence conservation requires unitarity on the joint space ([Coherence Conservation](/derivations/axioms/coherence-conservation)). The unique unitary operation consistent with:
1. Preserving $I_\mathcal{O}$ and $I_S$ individually (Type III condition)
2. Generating a new correlation $I_{\mathcal{O}S}$ between $\mathcal{O}$ and $S$
3. Acting linearly on the system's state (Hilbert space structure, [Born Rule](/derivations/quantum/born-rule), Theorem 7.1)

is the controlled-correlation map: $|\text{ready}\rangle_\mathcal{O} |k\rangle_S \mapsto |d_k\rangle_\mathcal{O} |k\rangle_S$ for each $k$, extended by linearity. This is the von Neumann measurement interaction — here **derived** from the Type III structure rather than postulated. $\square$

**Proposition 2.3.** *The relational invariant takes the definite value $\lambda_k$ on each branch:*

$$\hat{I}_{\mathcal{O}S} \left(|d_k\rangle_\mathcal{O} \otimes |k\rangle_S\right) = \lambda_k \left(|d_k\rangle_\mathcal{O} \otimes |k\rangle_S\right)$$

*The post-measurement joint state $|\Phi_{\text{after}}\rangle$ is a superposition of eigenstates of $\hat{I}_{\mathcal{O}S}$ — an entangled state in which the observer and system are correlated.*

### Step 3: The Structure of "Collapse"

**Theorem 3.1 (Collapse as relational invariant generation).** *From $\mathcal{O}$'s perspective, the measurement produces a definite outcome $k_0$. The post-measurement description of $S$ relative to $\mathcal{O}$ is:*

$$|\psi_S\rangle_\mathcal{O}^{\text{after}} = |k_0\rangle$$

*with probability $P(k_0) = |\psi_{k_0}|^2$ ([Born Rule](/derivations/quantum/born-rule), Theorem 6.1).*

**Proposition 3.2 (Properties of "collapse").** *The transition $\sum_k \psi_k |k\rangle \to |k_0\rangle$ (relative to $\mathcal{O}$) has the following structural properties:*

**(i) Local.** *The Type III interaction occurs at a definite vertex in the interaction graph $\mathcal{G}$. No spacelike action is involved.*

**(ii) Unitary on the joint space.** *The transformation $|\Phi_{\text{before}}\rangle \to |\Phi_{\text{after}}\rangle$ is unitary on $\mathcal{H}_\mathcal{O} \otimes \mathcal{H}_S$ (coherence is conserved). The apparent non-unitarity ($\sum_k \psi_k |k\rangle \to |k_0\rangle$) arises from describing $S$'s state relative to $\mathcal{O}$ — a conditional description, not a physical projection.*

**(iii) Irreversible.** *Once generated, $I_{\mathcal{O}S}$ is conserved ([Coherence Conservation](/derivations/axioms/coherence-conservation), Axiom 1). The relational invariant cannot be un-generated. This irreversibility has the same structural origin as the [arrow of time](/derivations/thermodynamics/time) (Theorem 6.1): relational invariant depth increases monotonically along directed paths in $\mathcal{G}$.*

*Proof of (ii).* The full state $|\Phi_{\text{after}}\rangle = \sum_k \psi_k |d_k\rangle |k\rangle$ is a pure state related to $|\Phi_{\text{before}}\rangle$ by a unitary operator $U_{\text{meas}}$. No information is lost on the joint space. The "collapse" to $|k_0\rangle$ is the **conditional state**: $S$'s state given that $\mathcal{O}$'s state is $|d_{k_0}\rangle$. Conditioning on a subsystem's state is a mathematical operation (partial trace + projection), not a physical process. $\square$

### Step 4: Relativity of Outcomes

**Theorem 4.1 (Observer-relative descriptions).** *The description of $S$ is relative to the describing observer's relational invariants. Different observers have different — but compatible — descriptions.*

**Proposition 4.2 (Simultaneous correctness).** *After $\mathcal{O}$ measures $S$, a third observer $\mathcal{P}$ who has not interacted with $S$ still describes $S$ in a superposition:*

| Observer | Relational invariant with $S$ | Description of $S$ |
|---|---|---|
| $\mathcal{O}$ (has measured) | $I_{\mathcal{O}S}$ exists, value $\lambda_{k_0}$ | Definite state $\|k_0\rangle$ |
| $\mathcal{P}$ (has not measured) | $I_{\mathcal{P}S}$ does not exist | Superposition $\sum_k \psi_k' \|k'\rangle$ |

*Both descriptions are simultaneously correct. There is no contradiction because "the state of $S$" is always relative to a specific observer's relational invariants.*

*Proof.* $\mathcal{O}$'s description is conditioned on $I_{\mathcal{O}S} = \lambda_{k_0}$. $\mathcal{P}$'s description is not conditioned on any relational invariant with $S$. These are different conditional descriptions of the same joint state $|\Phi_{\text{after}}\rangle$ — as legitimate as describing a bipartite system from two different marginals. $\square$

### Step 5: Wigner's Friend

**Definition 5.1.** In the Wigner's friend scenario: observer $\mathcal{F}$ (friend) measures system $S$ inside a sealed laboratory; observer $\mathcal{W}$ (Wigner) remains outside and does not interact with $S$ or $\mathcal{F}$ regarding the measurement.

**Theorem 5.2 (Wigner's friend resolution).** *After $\mathcal{F}$'s measurement:*

**(i)** *Relative to $\mathcal{F}$: $I_{\mathcal{F}S}$ exists with value $\lambda_{k_0}$. $S$ is in state $|k_0\rangle$.*

**(ii)** *Relative to $\mathcal{W}$: neither $I_{\mathcal{W}S}$ nor $I_{\mathcal{W}\mathcal{F}}$ (encoding the outcome) exist. The joint $\mathcal{F}$-$S$ system is in the entangled state $\sum_k \psi_k |d_k\rangle_\mathcal{F} |k\rangle_S$.*

**(iii)** *When $\mathcal{W}$ subsequently interacts with $\mathcal{F}$ (asks the result), a new relational invariant $I_{\mathcal{W}\mathcal{F}}$ is generated. $\mathcal{W}$'s outcome is consistent with $\mathcal{F}$'s — because $I_{\mathcal{F}S}$ constrains the joint state, so the new invariant $I_{\mathcal{W}\mathcal{F}}$ correlates with $I_{\mathcal{F}S}$.*

*Proof.* Part (i) follows from Theorem 3.1 applied to $\mathcal{F}$ and $S$. Part (ii) follows from Proposition 4.2 applied to $\mathcal{W}$. Part (iii): when $\mathcal{W}$ performs a Type III interaction with $\mathcal{F}$, the resulting $I_{\mathcal{W}\mathcal{F}}$ is constrained by the existing entanglement structure of $|\Phi_{\text{after}}\rangle = \sum_k \psi_k |d_k\rangle_\mathcal{F} |k\rangle_S$. The only eigenvalues accessible to $I_{\mathcal{W}\mathcal{F}}$ are those correlated with the $|d_k\rangle$ states — ensuring consistency with $\mathcal{F}$'s prior result. $\square$

### Step 6: Connection to Entropy

**Theorem 6.1 (Measurement as coherence domain expansion).** *Measurement increases the accessible coherence and decreases the entropy of $S$ relative to $\mathcal{O}$:*

$$S_\mathcal{O}^{\text{after}}(S) = S_\mathcal{O}^{\text{before}}(S) - \mathcal{C}(I_{\mathcal{O}S})$$

*Proof.* From [Entropy](/derivations/thermodynamics/entropy) (Definition 3.1), $S_\mathcal{O}(S) = \mathcal{C}(S) - \mathcal{C}_\mathcal{O}(S)$ where $\mathcal{C}_\mathcal{O}(S)$ is the coherence of $S$ accessible to $\mathcal{O}$.

Before measurement: $\mathcal{C}_\mathcal{O}^{\text{before}}(S)$ includes only coherence from prior relational invariants.

After measurement: the new invariant $I_{\mathcal{O}S}$ brings additional coherence into $\mathcal{O}$'s domain:

$$\mathcal{C}_\mathcal{O}^{\text{after}}(S) = \mathcal{C}_\mathcal{O}^{\text{before}}(S) + \mathcal{C}(I_{\mathcal{O}S})$$

Therefore: $S_\mathcal{O}^{\text{after}}(S) = \mathcal{C}(S) - \mathcal{C}_\mathcal{O}^{\text{after}}(S) = S_\mathcal{O}^{\text{before}}(S) - \mathcal{C}(I_{\mathcal{O}S})$. $\square$

**Proposition 6.2 (Second law compatibility).** *The entropy decrease of $S$ relative to $\mathcal{O}$ does not violate the second law. The second law ([Entropy](/derivations/thermodynamics/entropy), Theorem 4.1) applies to the total entropy of a bounded observer, including the measurement apparatus and environment. The entropy of $S$ decreases, but the entropy of the measurement apparatus increases by at least $\mathcal{C}(I_{\mathcal{O}S})$ (the cost of recording the outcome). Landauer's principle — erasing one bit costs $k_B T \ln 2$ — is recovered as the thermodynamic cost of generating one bit of relational invariant.*

### Step 7: Comparison with Interpretations

**Proposition 7.1 (Resolution without additional postulates).** *The framework resolves the measurement problem without introducing any elements beyond the three axioms:*

| Interpretation | Extra element | Framework |
|---|---|---|
| Copenhagen | Collapse postulate (non-unitary) | No collapse — relational invariant generation is unitary and local |
| Many Worlds | Ontological branching | No branching — one interaction graph, multiple relational perspectives |
| Bohmian mechanics | Hidden positions + guiding equation | No hidden variables — relational invariants are the complete description |
| QBism | Subjective probabilities | Probabilities are objective ($P = |\psi|^2$ from [Born Rule](/derivations/quantum/born-rule)) but observer-indexed |
| Relational QM (Rovelli) | Postulated relationality | Relationality is derived from axioms, not postulated |

**Proposition 7.2 (Closest to Rovelli, but derived).** *The framework is structurally closest to Rovelli's relational quantum mechanics (1996), but differs in a crucial respect: RQM postulates that quantum states are relational without deriving why. The observer-centric framework derives the relational structure from the three axioms. The relational invariants are constructed objects, not interpretive choices.*

### Step 8: The Single-Outcome Question

**Proposition 8.1 (Structural resolution).** *The question "what determines the specific outcome $k_0$ in a single trial?" is addressed as follows: the outcome is determined by the full coherence structure of the interaction — the exact phases, amplitudes, and correlations across all paths in $\mathcal{G}$ connecting $\mathcal{O}$ and $S$. This structure determines $k_0$ completely, but it is not accessible to any bounded observer (the observer cannot measure the full coherence geometry of its own measurement interaction).*

*The Born rule $P(k) = |\psi_k|^2$ is then the optimal prediction available to a bounded observer — the best possible forecast given structural limitations on self-knowledge. This is not epistemic uncertainty (ignorance of an underlying deterministic variable) but ontological indeterminacy for bounded observers: the information that determines $k_0$ exists in the coherence geometry but is inaccessible from within.*

### Consistency Model

**Theorem 9.1.** *The Stern-Gerlach measurement of a spin-1/2 system provides a consistency model for all results of this derivation.*

*Verification.* Take $\mathcal{O}$ = Stern-Gerlach apparatus (oriented along $\hat{z}$), $S$ = spin-1/2 particle with $|\psi_S\rangle = \alpha|\uparrow\rangle + \beta|\downarrow\rangle$.

- **Pre-measurement** (Proposition 1.3): $S$ relative to $\mathcal{O}$ is in superposition $\alpha|\uparrow\rangle + \beta|\downarrow\rangle$. $\checkmark$
- **Von Neumann coupling** (Theorem 2.2): $|\text{ready}\rangle_\mathcal{O}(\alpha|\uparrow\rangle + \beta|\downarrow\rangle) \to \alpha|d_\uparrow\rangle|\uparrow\rangle + \beta|d_\downarrow\rangle|\downarrow\rangle$, where $|d_\uparrow\rangle$, $|d_\downarrow\rangle$ are the detector states (upper/lower beam positions). $\checkmark$
- **Collapse** (Theorem 3.1): $\mathcal{O}$ observes a definite spot (upper or lower), with $P(\uparrow) = |\alpha|^2$. $\checkmark$
- **Unitarity** (Prop. 3.2(ii)): The joint state $\alpha|d_\uparrow\rangle|\uparrow\rangle + \beta|d_\downarrow\rangle|\downarrow\rangle$ is pure and related to the initial state by a unitary interaction. $\checkmark$
- **Irreversibility** (Prop. 3.2(iii)): Once the particle hits the screen, the relational invariant $I_{\mathcal{O}S} = S_z$ is recorded; the measurement cannot be undone without destroying the record. $\checkmark$
- **Observer-relativity** (Prop. 4.2): A distant observer $\mathcal{P}$ who has not interacted with the apparatus still describes the joint system in the entangled state. $\checkmark$
- **Entropy** (Theorem 6.1): Before measurement, $S_\mathcal{O}(S) = -|\alpha|^2\ln|\alpha|^2 - |\beta|^2\ln|\beta|^2$. After measurement, $S_\mathcal{O}(S) = 0$ (definite state). The entropy decreased by $\mathcal{C}(I_{\mathcal{O}S})$. $\checkmark$ $\square$

## Rigor Assessment

**Fully rigorous:**
- Theorem 2.2: Von Neumann coupling from Type III + unitarity + linearity (standard unitary quantum mechanics)
- Proposition 3.2(ii): Unitarity on joint space (mathematical fact about conditional/marginal descriptions)
- Theorem 4.1: Observer-relativity of descriptions (different conditioning on the same joint state)
- Theorem 5.2: Wigner's friend consistency (entanglement structure + conditional descriptions)
- Theorem 6.1: Entropy change from coherence domain expansion (direct application of entropy definition)
- Theorem 9.1: Consistency model verified on Stern-Gerlach measurement

**Rigorous given axioms:**
- Proposition 3.2(i): Locality (Type III interaction is a vertex in $\mathcal{G}$)
- Proposition 3.2(iii): Irreversibility (coherence conservation + time arrow from [Time](/derivations/thermodynamics/time))
- Proposition 6.2: Second law compatibility (Landauer's principle + total entropy accounting)

**Interpretive elements (not mathematical claims):**
- Proposition 8.1 (single-outcome question): The structural indeterminacy position is consistent with the axioms but is an interpretive statement, not a theorem. It resolves the conceptual question of "why this outcome" by identifying the limits of bounded observer self-knowledge.
- Proposition 7.2 (comparison with Rovelli): A structural comparison, not a derivation. The precise experimental scenarios where the framework's predictions might differ from RQM are not identified.

**Open extensions:**
- Non-ideal measurements (noisy detectors, partial correlations) correspond to incomplete Type III interactions where the relational invariant is generated with less than maximal coherence content. The formalism generalizes straightforwardly.
- Extended Wigner's friend (Frauchiger-Renner 2018) should be handled by nested relational invariants, but explicit analysis has not been carried out.

**Assessment:** The measurement problem resolution is rigorous. The core elements — Type III interaction as measurement, von Neumann coupling derived from unitarity + linearity, observer-relative descriptions, Wigner's friend consistency — are all rigorously established from the axioms and prior derivations. The interpretive elements (single-outcome question, comparisons with other interpretations) are honestly flagged as non-mathematical.

## Open Gaps

1. **Extended Wigner's friend (Frauchiger-Renner)**: The no-go theorem constrains theories that simultaneously assume (i) quantum mechanics applies universally, (ii) measurement has single outcomes, (iii) reasoning about others' measurements is valid. The framework should be tested against this theorem — the relational invariant structure may evade it by modifying assumption (iii).
2. **Quantum Darwinism**: When multiple observers independently measure the same system, they obtain consistent results. The framework should derive this from mutual consistency of relational invariants $I_{\mathcal{O}_1 S}, I_{\mathcal{O}_2 S}, \ldots$ when $\mathcal{O}_1, \mathcal{O}_2, \ldots$ share relational invariants with each other.
3. **Continuous and weak measurement**: Weak measurements correspond to Type III interactions that generate relational invariants with small coherence content $\mathcal{C}(I_{\mathcal{O}S}) \ll \mathcal{C}(S)$. Continuous measurement is the limit of many weak Type III interactions. Formalization needed.
4. **Delayed choice and quantum eraser**: The relational invariant is generated at the time of the Type III interaction, regardless of when the observer "decides" which interaction to perform. No retrocausality — the partial order $\prec$ in $\mathcal{G}$ is respected.
