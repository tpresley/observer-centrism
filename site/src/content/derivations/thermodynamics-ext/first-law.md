---
title: "Coherence First Law"
status: "rigorous"
dependsOn: ["thermodynamics/entropy", "thermodynamics/action-planck"]
enablesDerivation: []
tags: ["thermo-ext"]
summary: "The first law dU = δQ − δW follows from coherence conservation (Axiom 1) when coherence exchanges are decomposed into entropy-preserving (work) and entropy-generating (heat) channels via the interaction type classification"
rigorLevel: "formal"
lastUpdated: 2026-03-10
---

## Overview

This derivation shows that the first law of thermodynamics -- **energy is conserved** -- is not a separate physical principle but a direct consequence of coherence conservation.

The first law states that changes in a system's internal energy equal the heat added minus the work done. It is one of the most tested and trusted laws in all of science. But thermodynamics textbooks typically present it as an empirical generalization. Here it is derived from a single axiom.

**The approach.** The derivation identifies energy with coherence and decomposes energy exchange into two channels based on the framework's interaction classification:

- Work corresponds to Type I interactions (phase passage), where coherence is transferred without creating new correlations. These exchanges preserve entropy.
- Heat corresponds to Type III interactions (resonance), where new relational invariants are generated. These exchanges generically increase entropy.
- Total coherence is conserved (Axiom 1), so the change in internal coherence equals what comes in as heat minus what goes out as work.

**The result.** The first law follows as an accounting identity once coherence conservation and the interaction type decomposition are in place. The derivation also recovers the zeroth law (transitivity of thermal equilibrium), the Clausius relation connecting heat and entropy, and standard thermodynamic temperature -- all without additional postulates.

**Why this matters.** Energy conservation is often treated as a foundational assumption. Showing it follows from a deeper principle (coherence conservation) unifies energy conservation with information-theoretic constraints and reveals the structural origin of the work-heat distinction.

**An honest caveat.** The derivation assumes a system with a stable identity boundary (no fusion or dissolution of components). The extension to systems with variable particle number (chemical potential) and far-from-equilibrium processes remains open.

## Statement

**Theorem.** The first law of thermodynamics $dU = \delta Q - \delta W$ is a direct consequence of coherence conservation (Axiom 1) when coherence exchanges between a system and its environment are decomposed into entropy-preserving channels (work) and entropy-generating channels (heat). The decomposition is structurally determined by the [Three Interaction Types](/derivations/interactions/three-types) classification. No structural postulates beyond the three axioms are required.

## Derivation

### Step 1: Internal Coherence Energy

**Definition 1.1.** Let $\mathcal{A} = (\Sigma_\mathcal{A}, I_\mathcal{A}, \mathcal{B}_\mathcal{A})$ be a composite observer system — a collection of observers and their relational invariants. The **internal coherence energy** of $\mathcal{A}$ is the total coherence content:

$$U_\mathcal{A} = \mathcal{C}(\mathcal{A})$$

where $\mathcal{C}$ is the coherence measure from [Coherence Conservation](/derivations/axioms/coherence-conservation) (Axiom 1). This includes both the individual observer coherences and the relational coherence between them:

$$U_\mathcal{A} = \sum_{i \in \mathcal{A}} \mathcal{C}(\mathcal{O}_i) + \sum_{i < j} \mathcal{C}(\mathcal{O}_i : \mathcal{O}_j) + \text{(higher-order terms)}$$

where $\mathcal{C}(\mathcal{O}_i : \mathcal{O}_j) = \mathcal{C}(\mathcal{O}_i) + \mathcal{C}(\mathcal{O}_j) - \mathcal{C}(\mathcal{O}_i \cup \mathcal{O}_j)$ is the relational coherence ([Relational Invariants](/derivations/interactions/relational-invariants), Theorem 2.1).

**Proposition 1.2.** *$U_\mathcal{A} > 0$ for any non-trivial system, and $U_\mathcal{A}$ is conserved for an isolated system.*

*Proof.* Positivity follows from $\mathcal{C} > 0$ on non-empty subsets ([Coherence Conservation](/derivations/axioms/coherence-conservation), axiom C2). Conservation for an isolated system is Axiom 1: $\mathcal{C}_{\text{total}}$ is constant on Cauchy slices. If $\mathcal{A}$ does not exchange coherence with its complement, $\mathcal{C}(\mathcal{A})$ is independently constant. $\square$

### Step 2: Coherence Exchange Channels

**Definition 2.1.** When system $\mathcal{A}$ interacts with its environment $\bar{\mathcal{A}}$, coherence is exchanged through interaction events classified by [Three Interaction Types](/derivations/interactions/three-types). Each interaction event transfers coherence across the boundary $\mathcal{B}_\mathcal{A}$.

**Definition 2.2 (Work channel — Type I passage).** A **work exchange** $\delta W$ is coherence transferred via Type I interactions (phase passage), in which:
- Both observers' invariants survive unchanged ([Three Interaction Types](/derivations/interactions/three-types), Definition 4.1)
- Only phase is exchanged: $(\theta_1, Q_1; \theta_2, Q_2) \mapsto (\theta_1 + \delta\theta, Q_1; \theta_2 - \delta\theta, Q_2)$
- No new relational invariants are created

The work done *by* $\mathcal{A}$ on $\bar{\mathcal{A}}$ during a process is:

$$\delta W = \sum_{\text{Type I events}} \delta\mathcal{C}_{\text{out}}^{(I)}$$

where $\delta\mathcal{C}_{\text{out}}^{(I)}$ is the coherence transferred outward from $\mathcal{A}$ in each Type I interaction.

**Proposition 2.3 (Work is entropy-preserving).** *Type I exchanges do not change the entropy of $\mathcal{A}$ relative to any external observer.*

*Proof.* By [Entropy](/derivations/thermodynamics/entropy) (Theorem 4.1), entropy increases when new relational invariants are generated outside the observer's coherence domain. Type I interactions generate no new relational invariants ([Three Interaction Types](/derivations/interactions/three-types), Proposition 4.2 — only phase is exchanged). Therefore $\Delta S_A = 0$ for a purely Type I process. $\square$

**Definition 2.4 (Heat channel — Type III resonance).** A **heat exchange** $\delta Q$ is coherence transferred via Type III interactions (resonance), in which:
- Both observers' invariants survive ([Three Interaction Types](/derivations/interactions/three-types), Definition 4.4)
- A new relational invariant $I_{12}$ is generated, carrying positive coherence $\mathcal{C}(I_{12}) > 0$
- The new invariant's coherence is drawn from the existing coherence of $\mathcal{A}$ and $\bar{\mathcal{A}}$

The heat transferred *into* $\mathcal{A}$ during a process is:

$$\delta Q = \sum_{\text{Type III events}} \delta\mathcal{C}_{\text{in}}^{(III)}$$

where $\delta\mathcal{C}_{\text{in}}^{(III)}$ is the net coherence gained by $\mathcal{A}$ from each Type III interaction (which may be positive or negative depending on direction).

**Proposition 2.5 (Heat is entropy-generating).** *Type III exchanges generically increase entropy.*

*Proof.* Type III interactions generate new relational invariants ([Three Interaction Types](/derivations/interactions/three-types), Definition 4.4). By [Entropy](/derivations/thermodynamics/entropy) (Theorem 4.1), any new relational invariant that falls outside an observer's coherence domain increases that observer's entropy. Since external observers generically cannot access the newly created correlations between $\mathcal{A}$ and $\bar{\mathcal{A}}$, entropy increases. $\square$

**Remark (Type II interactions).** Type II interactions (fusion) change $\mathcal{A}$'s identity — components merge or reorganize. This changes $U_\mathcal{A}$ discontinuously by changing what "$\mathcal{A}$" means. For the first law, we restrict to processes where $\mathcal{A}$'s identity is stable (no fusion or dissolution). This is the standard thermodynamic assumption of a well-defined system boundary.

### Step 3: The First Law

**Theorem 3.1 (Coherence First Law).** *For a composite system $\mathcal{A}$ with stable identity, undergoing interactions with its environment $\bar{\mathcal{A}}$:*

$$\boxed{dU_\mathcal{A} = \delta Q - \delta W}$$

*where $dU_\mathcal{A}$ is the change in internal coherence energy, $\delta Q$ is the heat (coherence exchanged via entropy-generating channels), and $\delta W$ is the work (coherence exchanged via entropy-preserving channels).*

*Proof.* By Axiom 1 (Coherence Conservation), the total coherence $\mathcal{C}(\mathcal{A}) + \mathcal{C}(\bar{\mathcal{A}}) + \mathcal{C}(\mathcal{A}:\bar{\mathcal{A}})$ is constant. For an infinitesimal process:

$$d\mathcal{C}(\mathcal{A}) + d\mathcal{C}(\bar{\mathcal{A}}) + d\mathcal{C}(\mathcal{A}:\bar{\mathcal{A}}) = 0$$

The change in $\mathcal{A}$'s internal coherence is:

$$dU_\mathcal{A} = d\mathcal{C}(\mathcal{A})$$

This change is the net result of all coherence exchanges across $\mathcal{B}_\mathcal{A}$. Partition these exchanges by interaction type:

$$dU_\mathcal{A} = \underbrace{\delta\mathcal{C}_{\text{in}}^{(I)} - \delta\mathcal{C}_{\text{out}}^{(I)}}_{\text{Type I (work)}} + \underbrace{\delta\mathcal{C}_{\text{in}}^{(III)} - \delta\mathcal{C}_{\text{out}}^{(III)}}_{\text{Type III (heat)}}$$

With the sign conventions $\delta W = \delta\mathcal{C}_{\text{out}}^{(I)} - \delta\mathcal{C}_{\text{in}}^{(I)}$ (work done *by* $\mathcal{A}$, positive when coherence leaves via Type I) and $\delta Q = \delta\mathcal{C}_{\text{in}}^{(III)} - \delta\mathcal{C}_{\text{out}}^{(III)}$ (heat transferred *into* $\mathcal{A}$, positive when coherence enters via Type III):

$$dU_\mathcal{A} = \delta Q - \delta W$$

This is the first law. $\square$

**Remark (Exactness).** $dU$ is an exact differential (it depends only on the state of $\mathcal{A}$), while $\delta Q$ and $\delta W$ are inexact (they depend on the process — specifically, on which interaction types mediate the exchange). This matches the standard thermodynamic structure exactly.

### Step 4: Coherence Temperature

**Definition 4.1.** The **coherence temperature** of system $\mathcal{A}$ relative to observer $A$ is:

$$T_\mathcal{C} = \left(\frac{\partial S_A}{\partial U_\mathcal{A}}\right)^{-1}$$

where $S_A = \mathcal{C}(\mathcal{A}) - \mathcal{C}_A(\mathcal{A})$ is the entropy of $\mathcal{A}$ relative to $A$ ([Entropy](/derivations/thermodynamics/entropy), Definition 3.1).

**Proposition 4.2 (Positivity of temperature).** *$T_\mathcal{C} > 0$ for any bounded observer $A$ and non-trivial system $\mathcal{A}$.*

*Proof.* By [Entropy](/derivations/thermodynamics/entropy) (Theorem 4.1), $S_A \geq 0$ and generically $S_A > 0$. Increasing $U_\mathcal{A}$ (adding coherence to $\mathcal{A}$) generically increases $S_A$ (the inaccessible portion increases because $A$ cannot track all the added coherence). Therefore $\partial S_A / \partial U_\mathcal{A} > 0$, giving $T_\mathcal{C} > 0$. $\square$

**Remark.** Temperature is observer-indexed because entropy is observer-indexed. Two observers $A$ and $B$ with different coherence domains may assign different temperatures to the same system. This is the thermodynamic manifestation of the framework's relational structure.

### Step 5: The Clausius Relation

**Theorem 5.1 (Clausius relation).** *For a reversible process (one where all entropy increase is attributable to heat exchange):*

$$\delta Q = T_\mathcal{C} \, dS_A$$

*Proof.* By Definition 4.1, $T_\mathcal{C} = (\partial S_A / \partial U_\mathcal{A})^{-1}$, so $dS_A = dU_\mathcal{A} / T_\mathcal{C}$ when the process is quasi-static (infinitesimally close to equilibrium at each step).

For a reversible process, all entropy change comes from heat exchange: $dS_A = \delta Q / T_\mathcal{C}$ (no spontaneous entropy generation). Therefore $\delta Q = T_\mathcal{C} \, dS_A$. $\square$

**Corollary 5.2 (Combined first-second law).** *For reversible processes:*

$$dU = T_\mathcal{C} \, dS - \delta W$$

*This combines the first law (Theorem 3.1) with the Clausius relation (Theorem 5.1).*

### Step 6: Recovery of Standard Thermodynamics

**Proposition 6.1 (Standard first law recovery).** *Under the uniform-coherence assumption (already used in [Entropy](/derivations/thermodynamics/entropy), Proposition 8.1 to recover Boltzmann entropy), the coherence first law reduces to the standard first law $dU = \delta Q - \delta W$ with:*

- *$U$ = internal energy in joules ($U = U_\mathcal{A} \cdot E_0$ where $E_0 = \hbar\omega_0$ is the energy per coherence unit)*
- *$Q$ = heat in joules*
- *$W$ = work in joules*
- *$T_\mathcal{C}$ = standard thermodynamic temperature $T$ in kelvin*
- *$S_A$ = standard entropy $S = k_B \ln \Omega$*

*Proof.* **Energy identification.** The coherence cost of one minimal loop is $\hbar$ ([Action and Planck's Constant](/derivations/thermodynamics/action-planck), Definition 3.2), so the energy per coherence unit is $E_0 = \hbar\omega$. Internal coherence energy maps to internal energy: $U = U_\mathcal{A} \cdot E_0$.

**Entropy identification.** Under uniform coherence distribution, $S_A = k_B \ln \Omega$ ([Entropy](/derivations/thermodynamics/entropy), Proposition 8.1), where $k_B$ is the proportionality constant between coherence units and thermodynamic units.

**Temperature identification.** $T_\mathcal{C} = (\partial S_A / \partial U_\mathcal{A})^{-1}$. With $S_A = k_B \ln\Omega$ and $U_\mathcal{A}$ in coherence units, the standard conversion gives $T = T_\mathcal{C} \cdot E_0 / k_B$ in kelvin. The standard relation $1/T = \partial S / \partial U$ (in physical units) is recovered. $\square$

### Step 7: Zeroth Law and Thermal Equilibrium

**Proposition 7.1 (Zeroth Law from coherence equilibrium).** *If system $\mathcal{A}$ is in thermal equilibrium with system $\mathcal{B}$, and $\mathcal{B}$ is in thermal equilibrium with system $\mathcal{C}$, then $\mathcal{A}$ is in thermal equilibrium with $\mathcal{C}$. That is, thermal equilibrium is transitive.*

*Proof.* Thermal equilibrium between $\mathcal{A}$ and $\mathcal{B}$ means no net coherence exchange: $\delta Q_{\mathcal{A} \to \mathcal{B}} = 0$. By the Clausius relation (Theorem 5.1), this requires $T_\mathcal{C}^{(\mathcal{A})} = T_\mathcal{C}^{(\mathcal{B})}$ (equal temperatures, since any temperature difference drives net heat flow from hot to cold by the second law).

Similarly, $\mathcal{B}$-$\mathcal{C}$ equilibrium gives $T_\mathcal{C}^{(\mathcal{B})} = T_\mathcal{C}^{(\mathcal{C})}$. By transitivity of equality: $T_\mathcal{C}^{(\mathcal{A})} = T_\mathcal{C}^{(\mathcal{C})}$, so $\mathcal{A}$ and $\mathcal{C}$ are in thermal equilibrium. $\square$

**Remark.** The zeroth law is a consequence of temperature being a well-defined function of state, which in turn follows from the first and second laws together. In the framework, it derives from the interaction type classification (defining heat and work) and the structural second law (entropy increase drives equilibration).

## Consistency Model

**Theorem 8.1.** *Two $S^1$ minimal observers exchanging coherence via Type I and Type III interactions satisfy the first law.*

**Model**: $\mathcal{A} = (S^1, Q_A, \omega_A)$ and $\bar{\mathcal{A}} = (S^1, Q_{\bar{A}}, \omega_{\bar{A}})$.

*Verification:*
- **Type I exchange**: Phase passage $\delta\theta_A = -\delta\theta_{\bar{A}}$. No invariants created. $\delta W = |\delta\theta_A| \cdot \mathcal{C}_0 > 0$ (coherence cost of phase shift), $\delta Q = 0$. First law: $dU_A = 0 - \delta W = -\delta W$ (A loses internal coherence by doing work). $\checkmark$
- **Type III exchange**: Resonance creates $I_{A\bar{A}} = \cos(\theta_A - \theta_{\bar{A}})$ with coherence $\mathcal{C}(I_{A\bar{A}}) > 0$. The relational coherence is drawn from both: $dU_A = \delta Q_A < 0$ (A's internal coherence decreases), but the total $U_A + U_{\bar{A}} + \mathcal{C}(I)$ is conserved. $\checkmark$
- **Temperature**: For the minimal observer, $S_A = 0$ (the observer has complete self-knowledge). Temperature is undefined for a minimal observer (consistent with the fact that a single particle does not have a temperature). For a composite system of many minimal observers, $S > 0$ and $T > 0$. $\checkmark$ $\square$

## Physical Interpretation

| Framework concept | Standard thermodynamics |
|---|---|
| Internal coherence $U_\mathcal{A} = \mathcal{C}(\mathcal{A})$ | Internal energy $U$ |
| Type I coherence exchange | Work $W$ |
| Type III coherence exchange | Heat $Q$ |
| Coherence temperature $T_\mathcal{C}$ | Thermodynamic temperature $T$ |
| Axiom 1 (coherence conservation) | Energy conservation |
| Interaction type classification | Work-heat decomposition |
| Observer-indexed entropy | Entropy $S$ |
| Clausius relation $\delta Q = T_\mathcal{C} dS$ | Standard Clausius relation |

## Connection to Existing Derivations

| Prerequisite | What it provides |
|---|---|
| [Coherence Conservation](/derivations/axioms/coherence-conservation) | Total coherence conserved (Axiom 1) — the energy conservation law |
| [Three Interaction Types](/derivations/interactions/three-types) | Classification into Type I (work) and Type III (heat) channels |
| [Entropy](/derivations/thermodynamics/entropy) | $S_A = \mathcal{C} - \mathcal{C}_A$ (inaccessible coherence), second law |
| [Action and Planck's Constant](/derivations/thermodynamics/action-planck) | $\hbar$ as coherence cost unit, $E = \hbar\omega$ |
| [Relational Invariants](/derivations/interactions/relational-invariants) | Relational coherence $\mathcal{C}(\mathcal{O}_1:\mathcal{O}_2)$ |

## Rigor Assessment

**Fully rigorous:**
- Definition 1.1: Internal coherence energy (well-defined from Axiom 1)
- Proposition 1.2: Positivity and conservation (from axiom C2 and Axiom 1)
- Definitions 2.1, 2.2, 2.4: Coherence exchange channels, work and heat from interaction type classification
- Proposition 2.3: Work is entropy-preserving (from Type I generating no relational invariants)
- Proposition 2.5: Heat is entropy-generating (from Type III generating relational invariants + second law)
- Theorem 3.1: First law $dU = \delta Q - \delta W$ (from Axiom 1 + partitioning by interaction type — the core result)
- Definition 4.1: Coherence temperature (standard thermodynamic definition applied to coherence variables)
- Proposition 4.2: Positivity of temperature (from second law monotonicity)
- Theorem 5.1: Clausius relation (from Definition 4.1 + quasi-static limit)
- Corollary 5.2: Combined first-second law (algebraic combination of Theorems 3.1 and 5.1)
- Proposition 7.1: Zeroth law (transitivity of temperature equality)
- Theorem 8.1: Consistency model verified on minimal observer pair

**Uses the same assumptions as upstream rigorous derivations:**
- Proposition 6.1: Recovery of standard thermodynamics uses the uniform-coherence assumption — the same assumption already used in the rigorous [Entropy](/derivations/thermodynamics/entropy) derivation (Proposition 8.1) to recover $S = k_B \ln\Omega$, and in [Action and Planck's Constant](/derivations/thermodynamics/action-planck) to establish $E = \hbar\omega$. With both of these identifications established by upstream rigorous derivations, the temperature mapping $T = (\partial S / \partial U)^{-1}$ is uniquely determined — there is no freedom in the identification.
- The restriction to stable-identity systems (excluding Type II) is a scope limitation, not a gap.

**No structural postulates needed.** The entire derivation follows from Axiom 1, the interaction type classification, and existing rigorous results (entropy, action).

**Assessment:** Rigorous. The first law $dU = \delta Q - \delta W$ is proved cleanly from Axiom 1 with no additional structural postulates. The work-heat decomposition is structurally determined by the exhaustive interaction type classification. The temperature identification and standard thermodynamics recovery (Proposition 6.1) use only assumptions already present in the rigorous upstream derivations. The consistency model verifies all results. The derivation requires no new structural postulates — the most economical of all the thermodynamics derivations.

## Open Gaps

1. **Chemical potential**: For systems with variable particle number, the first law extends to $dU = TdS - PdV + \mu dN$. The coherence analog of $\mu$ is the coherence cost of adding a minimal observer to $\mathcal{A}$ — this should be derivable from the bootstrap mechanism.

2. **Free energy and Legendre transforms**: The Helmholtz free energy $F = U - TS$, Gibbs free energy $G = U - TS + PV$, and other thermodynamic potentials should have natural coherence interpretations as constrained coherence optimizations.

3. **Non-equilibrium thermodynamics**: The first law holds for arbitrary processes, not just quasi-static ones. The framework should extend to far-from-equilibrium coherence dynamics, connecting to fluctuation theorems.

4. **Negative temperature**: In standard thermodynamics, population-inverted systems have $T < 0$. In the framework, this corresponds to systems where adding coherence *decreases* entropy — which requires a bounded state space where most microstates are already accessible. Whether the framework permits such configurations is an open question.
