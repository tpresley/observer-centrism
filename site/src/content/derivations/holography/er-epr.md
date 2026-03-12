---
title: "ER=EPR from Relational Invariants"
status: "draft"
dependsOn: ["quantum/entanglement", "holography/area-scaling", "holography/causal-set-statistics", "spacetime/einstein-equations"]
enablesDerivation: []
tags: ["holography", "entanglement", "wormhole", "ER-EPR"]
summary: "Relational invariants between spatially separated observers manifest as both entanglement (EPR) and non-traversable wormholes (ER). The duality is exact because relational invariants are the fundamental objects underlying both quantum correlations and spacetime geometry. The wormhole throat area satisfies A = 4ℓ_P² S_ent, and non-traversability follows from the no-signaling property of relational invariants."
rigorLevel: "semi-formal"
sourceSection: "10-holography"
lastUpdated: 2026-03-11
---

## Statement

**Theorem (ER=EPR Correspondence).** For any two observers $\mathcal{O}_1, \mathcal{O}_2$ sharing a relational invariant $I_{12}$, the coherence channel associated with $I_{12}$ has dual descriptions:

1. **Quantum (EPR)**: $I_{12}$ produces entangled states in $\mathcal{H}_1 \otimes \mathcal{H}_2$ with entanglement entropy $S_{\text{ent}} = \mathcal{C}(I_{12})$ ([Entanglement](/derivations/quantum/entanglement), Theorem 2.1).

2. **Geometric (ER)**: The coherence concentration along the channel curves spacetime ([Einstein Equations](/derivations/spacetime/einstein-equations)), producing a non-traversable Einstein-Rosen bridge whose throat area is:

$$A_{\text{ER}} = 4\,\ell_P^2\,S_{\text{ent}}(I_{12})$$

These are not two independent phenomena connected by a conjecture — they are the same underlying structure (the relational invariant) viewed in two different descriptions.

## 1. Relational Invariants as Coherence Channels

**Definition 1.1 (Coherence channel).** Let $\mathcal{O}_1$ and $\mathcal{O}_2$ be spatially separated observers who have previously interacted via a Type III interaction ([Three Interaction Types](/derivations/interactions/three-types)), generating a relational invariant $I_{12}$. The **coherence channel** $\gamma_{12}$ is the set of causal set elements that carry the conserved coherence associated with $I_{12}$.

**Proposition 1.2 (Channel properties).** The coherence channel $\gamma_{12}$ satisfies:

(a) **Conservation**: The total coherence $\mathcal{C}(\gamma_{12}) = \mathcal{C}(I_{12})$ is conserved (Axiom 1) along every Cauchy slice that intersects $\gamma_{12}$.

(b) **Non-locality**: $\gamma_{12}$ extends between the two observers' worldlines, connecting spatially separated regions.

(c) **Irreducibility**: $\gamma_{12}$ cannot be decomposed into channels between $\mathcal{O}_1$ and an intermediary plus channels between the intermediary and $\mathcal{O}_2$. This is the channel analogue of irreducibility of the relational invariant ([Relational Invariants](/derivations/interactions/relational-invariants), Theorem 4.1).

*Proof.* (a) follows directly from coherence conservation (Axiom 1), since $I_{12}$ is a Noether invariant with a definite coherence content. (b) follows from the definition: the observers are spatially separated, and $I_{12}$ depends jointly on both their states. (c) follows from the irreducibility of $I_{12}$: if $\gamma_{12}$ were decomposable, then $I_{12} = f(\sigma_1, \sigma_M) + g(\sigma_M, \sigma_2)$ for some intermediary $M$, contradicting Theorem 4.1 of [Relational Invariants](/derivations/interactions/relational-invariants). $\square$

## 2. The Quantum (EPR) Description

**Proposition 2.1 (Entanglement from the channel).** The coherence channel $\gamma_{12}$ produces an entangled quantum state $|\Psi\rangle_{12} \in \mathcal{H}_1 \otimes \mathcal{H}_2$ with entanglement entropy $S_{\text{ent}} = \mathcal{C}(I_{12})$.

*Proof.* This is Theorem 2.1 of [Entanglement](/derivations/quantum/entanglement). The relational invariant $I_{12}$ maps to an entangled state (Proposition 1.3 of Entanglement), and the coherence of the relational invariant equals the von Neumann entropy of the reduced state (Theorem 2.1 of Entanglement): $\mathcal{C}(I_{12}) = S(\rho_1) = -\text{Tr}(\rho_1 \ln \rho_1)$. $\square$

**Proposition 2.2 (No-signaling from relational invariants).** The entanglement associated with $I_{12}$ cannot be used to transmit information between $\mathcal{O}_1$ and $\mathcal{O}_2$.

*Proof.* Relational invariants are conserved quantities that depend jointly on both observers' states. Local operations by $\mathcal{O}_1$ (unitary transformations $U_1 \otimes \mathbf{1}_2$) change $\mathcal{O}_1$'s state but preserve the relational invariant $I_{12}$ (by Noether conservation). Therefore, the reduced state $\rho_2 = \text{Tr}_1(|\Psi\rangle\langle\Psi|)$ is invariant under local operations on $\mathcal{O}_1$:

$$\text{Tr}_1\big[(U_1 \otimes \mathbf{1})|\Psi\rangle\langle\Psi|(U_1^\dagger \otimes \mathbf{1})\big] = \text{Tr}_1\big[|\Psi\rangle\langle\Psi|\big] = \rho_2$$

This is the quantum no-signaling theorem, here derived from the conservation law of the relational invariant. $\square$

## 3. The Geometric (ER) Description

**Proposition 3.1 (Coherence concentration curves spacetime).** The [Einstein Equations](/derivations/spacetime/einstein-equations) derivation establishes that coherence concentration produces spacetime curvature: $G_{\mu\nu} = 8\pi G\,T_{\mu\nu}^{\text{coh}}$, where $T_{\mu\nu}^{\text{coh}}$ is the coherence energy-momentum tensor.

The coherence channel $\gamma_{12}$ carries a non-zero coherence density $\rho_{\text{coh}}(\gamma_{12}) = \mathcal{C}(I_{12}) / V(\gamma_{12})$ distributed along its extent. By the Einstein equations, this density generates spacetime curvature concentrated near $\gamma_{12}$.

**Theorem 3.2 (Wormhole geometry from coherence channel).** The geometry sourced by the coherence channel $\gamma_{12}$ between two separated observers contains a minimal surface $\Sigma_{\min}$ (the wormhole throat) connecting the two observer regions.

*Proof sketch.* Consider the geometry sourced by the coherence channel in the observers' rest frame. The coherence density is localized along a tube connecting the two observer worldlines. By the [Einstein Equations](/derivations/spacetime/einstein-equations), this tube of coherence energy produces a region of spacetime curvature.

The key topological observation: the coherence channel $\gamma_{12}$ is irreducible (Proposition 1.2c) and connects two spatially separated regions. The causal set elements in $\gamma_{12}$ form a connected subgraph of the causal set that links the two observer neighborhoods. In the continuum limit ([Causal Set Statistics](/derivations/holography/causal-set-statistics)), this connected subgraph produces a non-trivial spatial topology — a "bridge" between the two regions.

More precisely: consider the region $\Omega$ between the two observer neighborhoods, partitioned into "inside $\gamma_{12}$" and "outside $\gamma_{12}$". The coherence density inside $\gamma_{12}$ exceeds the ambient density, producing an enhanced curvature that prevents the tube from pinching off. The minimal-area cross-section of this tube is the wormhole throat $\Sigma_{\min}$. $\square$

**Proposition 3.3 (Throat area from area scaling).** The throat area satisfies:

$$A(\Sigma_{\min}) = 4\,\ell_P^2\,S_{\text{ent}}(I_{12})$$

*Proof.* By the [Area Scaling](/derivations/holography/area-scaling) derivation (Theorem 5.1), the coherence associated with any causal horizon is bounded by $\mathcal{C} \leq A/(4\ell_P^2)$. The minimal surface $\Sigma_{\min}$ acts as a causal horizon for the coherence channel: it is the bottleneck through which all coherence of $\gamma_{12}$ must flow.

The bound is saturated because $\gamma_{12}$ is an irreducible channel carrying exactly $\mathcal{C}(I_{12}) = S_{\text{ent}}$ of coherence. By the same argument as the black hole entropy derivation ([Black Hole Entropy](/derivations/holography/black-hole-entropy), Theorem 4.1), a channel that carries exactly $S$ units of coherence through a minimal surface of area $A$ satisfies $A = 4\ell_P^2 S$. Therefore $A(\Sigma_{\min}) = 4\ell_P^2\,S_{\text{ent}}$. $\square$

## 4. Non-Traversability

**Theorem 4.1 (The wormhole is non-traversable).** The Einstein-Rosen bridge associated with the coherence channel $\gamma_{12}$ does not permit the transmission of independent information between $\mathcal{O}_1$ and $\mathcal{O}_2$.

*Proof.* The argument proceeds by contradiction. Suppose the wormhole were traversable — i.e., an independent signal (not encoded in $I_{12}$) could propagate through it from $\mathcal{O}_1$ to $\mathcal{O}_2$.

**Step 1.** Such a signal would carry additional coherence $\delta\mathcal{C} > 0$ through the throat, increasing the total coherence flux to $\mathcal{C}(I_{12}) + \delta\mathcal{C}$.

**Step 2.** By the area-coherence saturation (Proposition 3.3), the throat area $A = 4\ell_P^2\,\mathcal{C}(I_{12})$ is exactly matched to the coherence of the relational invariant. Additional coherence would require $A' = 4\ell_P^2(\mathcal{C} + \delta\mathcal{C}) > A$.

**Step 3.** But the throat area is determined by the Einstein equations sourced by $\gamma_{12}$'s coherence density. The independent signal is not part of $\gamma_{12}$ (it carries new information, not the conserved relational invariant), so it does not contribute to the source that maintains the throat geometry. The throat cannot accommodate coherence beyond $\mathcal{C}(I_{12})$.

**Step 4.** Therefore, independent signals cannot traverse the wormhole. The only "information" that passes through is the relational invariant itself — which, by Proposition 2.2, cannot be used for signaling. $\square$

**Corollary 4.2 (Consistency with no-signaling).** The geometric non-traversability (Theorem 4.1) and the quantum no-signaling (Proposition 2.2) are dual descriptions of the same constraint: relational invariants cannot transmit independent information.

## 5. The Exact Correspondence

**Theorem 5.1 (ER=EPR is exact).** The quantum (EPR) and geometric (ER) descriptions of a relational invariant are exact duals — not approximate or emergent, but structurally identical:

| EPR (quantum) | ER (geometric) |
|---|---|
| Relational invariant $I_{12}$ | Coherence channel $\gamma_{12}$ |
| Entanglement entropy $S_{\text{ent}}$ | Throat area $A/(4\ell_P^2)$ |
| No-signaling theorem | Non-traversability |
| Entanglement monogamy | Topology constraints on wormhole branching |
| Schmidt decomposition | Wormhole throat spectrum |

*Proof sketch.* Both descriptions derive from the same underlying object — the relational invariant $I_{12}$ in the causal set. The EPR description arises when this object is projected onto the Hilbert space structure (via [Born Rule](/derivations/quantum/born-rule)), while the ER description arises when it is projected onto the geometric structure (via [Einstein Equations](/derivations/spacetime/einstein-equations)). Since the projections are onto complementary aspects of the same causal set element, the correspondence is structurally exact.

The monogamy-topology correspondence: the [Entanglement](/derivations/quantum/entanglement) derivation (Theorem 4.1) establishes entanglement monogamy from coherence subadditivity. The geometric dual is that the wormhole topology is constrained — one cannot create a three-way bridge with more entanglement than the subadditivity bound allows. $\square$

## 6. The Thermofield Double

**Proposition 6.1 (Thermofield double as maximal ER=EPR).** The thermofield double state

$$|\text{TFD}\rangle = \frac{1}{\sqrt{Z}} \sum_n e^{-\beta E_n / 2} |n\rangle_L \otimes |n\rangle_R$$

is the maximally entangled state (for a given temperature $T = 1/\beta$) between two copies of a quantum system. In the ER description, this corresponds to the eternal AdS-Schwarzschild black hole — the maximally extended wormhole geometry with two asymptotic regions.

*Proof sketch.* The entanglement entropy of the thermofield double is the thermal entropy $S = -\text{Tr}(\rho \ln \rho)$ where $\rho = e^{-\beta H}/Z$. By Proposition 3.3, the corresponding throat area is $A = 4\ell_P^2 S$, which is exactly the Bekenstein-Hawking area-entropy relation for a black hole of temperature $T$. The thermal state in each exterior is the maximally mixed state consistent with the energy constraint — the geometric manifestation of maximal entanglement at fixed temperature. $\square$

## Consistency Model

**Model:** Bell pair $|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|0\rangle|0\rangle + |1\rangle|1\rangle)$ between two observers.

**EPR side:**
- Entanglement entropy: $S = \ln 2$ $\checkmark$ (maximally entangled for a qubit pair)
- No-signaling: $\rho_2 = \frac{1}{2}\mathbf{I}$ independent of $\mathcal{O}_1$'s operations $\checkmark$
- Monogamy: A third party $\mathcal{O}_3$ cannot be maximally entangled with both $\mathcal{O}_1$ and $\mathcal{O}_2$ $\checkmark$

**ER side:**
- Throat area: $A = 4\ell_P^2 \ln 2$ (a Planck-scale wormhole for a single Bell pair) $\checkmark$
- Non-traversability: The single Bell pair's coherence channel carries exactly $\ln 2$ of coherence; no room for additional information $\checkmark$
- The Planck-scale throat is consistent with the minimal possible wormhole (a single quantum of entanglement)

**Duality check:** EPR entropy = $\ln 2$ = ER entropy = $A/(4\ell_P^2)$ $\checkmark$

## Rigor Assessment

| Result | Status | Notes |
|---|---|---|
| Proposition 1.2 (channel properties) | Semi-formal | Follows from relational invariant properties; causal set realization is structural |
| Proposition 2.1 (entanglement) | Rigorous | Direct import from Entanglement derivation |
| Proposition 2.2 (no-signaling) | Rigorous | Standard quantum mechanics; framework reinterpretation |
| Theorem 3.2 (wormhole geometry) | Sketch | Central gap: topology change from coherence density not rigorously derived |
| Proposition 3.3 (throat area) | Semi-formal | Uses area scaling bound saturation; full proof requires causal set machinery |
| Theorem 4.1 (non-traversability) | Semi-formal | Physically motivated; formal proof needs the area-coherence saturation to be exact |
| Theorem 5.1 (exact correspondence) | Sketch | Structural argument; formal proof would require full causal set ↔ geometry dictionary |

## Open Gaps

**Gap 1.** Theorem 3.2 (wormhole geometry from coherence channel) is the key gap. Rigorously showing that the coherence density along $\gamma_{12}$ produces a topology change ($\mathbb{R}^3 \to \mathbb{R}^3 \# \mathbb{R}^3$) requires the full machinery of the [Causal Set Statistics](/derivations/holography/causal-set-statistics) derivation applied to the channel's causal structure. This is the hardest open problem in the derivation.

**Gap 2.** The area-coherence saturation (Proposition 3.3) uses the [Area Scaling](/derivations/holography/area-scaling) bound, which is proved for causal horizons. Extending this to arbitrary minimal surfaces (wormhole throats) requires showing that the throat acts as a causal horizon for the coherence channel. This is plausible (the throat is the information bottleneck) but not yet proven from the axioms.

**Gap 3.** The exact correspondence (Theorem 5.1) is presented as a structural mapping between two descriptions. Making this mathematically precise requires defining the "projection" from the causal set to Hilbert space vs. to geometry, and showing these projections are complementary (jointly exhaustive and individually consistent). This is related to the broader question of how the geometric and quantum descriptions emerge from the causal set.

**Gap 4.** The thermofield double model (Proposition 6.1) should be connected to the [Hawking Radiation](/derivations/holography/hawking-radiation) derivation, which describes black hole evaporation as coherence-dual pair annihilation. The ER=EPR correspondence predicts that the entanglement structure of Hawking radiation encodes the wormhole geometry — this should provide a new perspective on the [Information Paradox](/derivations/holography/information-paradox) resolution.

## Addresses Gaps In

- [Entanglement](/derivations/quantum/entanglement), Gap: "Make the ER=EPR sketch (Proposition 5.1) rigorous by connecting to the Area Scaling and Causal Set Statistics derivations" — **Partially resolved**: Full derivation structure with dual descriptions; central topology argument (Gap 1) remains.
- [Information Paradox](/derivations/holography/information-paradox), Gap: "Relational invariants between coherence-dual pairs are the structural analogue of Einstein-Rosen bridges. Formalizing this connection would strengthen the information paradox resolution." — **Partially resolved**: Theorem 5.1 establishes the structural mapping; Gap 4 identifies the remaining connection to Hawking radiation.
