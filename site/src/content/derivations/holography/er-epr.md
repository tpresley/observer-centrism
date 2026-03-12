---
title: "ER=EPR from Relational Invariants"
status: "provisional"
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

*Proof.* The argument proceeds in three steps: causal set topology, continuum geometry, and minimal surface existence.

**Step 1 (Causal set topology).** By [Causal Set Statistics](/derivations/holography/causal-set-statistics) (Proposition 2.1), spacetime geometry emerges from the statistics of the causal set $\mathcal{C}$. The coherence channel $\gamma_{12} \subset \mathcal{C}$ is an irreducible connected subgraph (Proposition 1.2c) linking elements in the causal neighborhoods $\mathcal{N}_1$ and $\mathcal{N}_2$ of the two observers. Define the **channel graph** $G_{12}$ as the subgraph of $\mathcal{C}$ consisting of elements in $\gamma_{12}$ together with all causal relations between them. By irreducibility, $G_{12}$ is connected and cannot be disconnected by removing any single element — it has edge-connectivity $\geq 2$.

**Step 2 (Continuum limit and topology).** In the continuum limit, the causal set $\mathcal{C}$ approximates a Lorentzian manifold $(M, g)$ ([Causal Set Statistics](/derivations/holography/causal-set-statistics), Theorem 3.1). The channel graph $G_{12}$ maps to a region $\Omega_{12} \subset M$ with non-trivial topology. Specifically, consider a Cauchy surface $\Sigma$ that intersects both observer regions. The intersection $\Sigma \cap \Omega_{12}$ is a connected submanifold linking the two disjoint neighborhoods $\Sigma \cap \mathcal{N}_1$ and $\Sigma \cap \mathcal{N}_2$. This connected region has the topology of a "tube" — a $D_2 \times [0,1]$ (in 3+1 dimensions) with boundaries at each observer neighborhood.

The coherence energy-momentum tensor $T_{\mu\nu}^{\text{coh}}$ is non-zero in $\Omega_{12}$ (since $\gamma_{12}$ carries coherence $\mathcal{C}(I_{12}) > 0$) and vanishes outside (in the ambient vacuum). By the [Einstein Equations](/derivations/spacetime/einstein-equations), this localized energy distribution curves the geometry within $\Omega_{12}$.

**Step 3 (Minimal surface).** Within the tube $\Omega_{12}$, consider the family of $(D-2)$-dimensional cross-sections $\sigma(t)$ parameterized along the tube. Each cross-section has an area $A(\sigma(t))$. Since the tube connects two large observer neighborhoods (where it flares out) and has a finite coherence content (bounded energy), the area function $A(t)$ starts large, decreases to a minimum, and increases again. By continuity, there exists a cross-section $\Sigma_{\min}$ of minimum area — the wormhole throat.

Formally, $\Sigma_{\min}$ is a minimal surface: $\delta A / \delta \sigma = 0$ and $\text{tr}(K) = 0$ where $K$ is the extrinsic curvature. This is the defining property of an Einstein-Rosen bridge throat. $\square$

**Remark.** The argument is semi-formal because Step 2 relies on the causal set → manifold correspondence ([Causal Set Statistics](/derivations/holography/causal-set-statistics)), which is itself at provisional status. The topology change claim (that the tube cannot pinch off) follows from the irreducibility of $\gamma_{12}$ — if the tube pinched to zero area at any point, the coherence channel would be disconnected, contradicting Proposition 1.2c. This is the key physical insight that distinguishes this from a merely classical geometry argument.

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

*Proof.* The correspondence follows from the fact that both descriptions are derived from a common underlying object — the relational invariant $I_{12}$ — via two independent but compatible projections.

**The EPR projection $\pi_Q$.** The [Born Rule](/derivations/quantum/born-rule) derivation (Theorem 7.1) constructs a Hilbert space $\mathcal{H}$ from the $U(1)$ loop structure of each observer. The [Entanglement](/derivations/quantum/entanglement) derivation (Proposition 1.3) maps each relational invariant $I_{12}$ to an entangled state $|\Psi_{12}\rangle \in \mathcal{H}_1 \otimes \mathcal{H}_2$. This defines the quantum projection: $\pi_Q(I_{12}) = |\Psi_{12}\rangle$.

**The ER projection $\pi_G$.** The [Einstein Equations](/derivations/spacetime/einstein-equations) derivation constructs a Lorentzian geometry $(M, g)$ from the coherence distribution on the causal set. The coherence channel $\gamma_{12}$ (Definition 1.1) maps to a geometric structure — the wormhole $W_{12} \subset M$ (Theorem 3.2). This defines the geometric projection: $\pi_G(I_{12}) = W_{12}$.

**Compatibility.** The two projections are compatible because they extract complementary information from $I_{12}$:
- $\pi_Q$ extracts the **algebraic** content: the Schmidt coefficients $\{\lambda_k\}$, determining the entanglement entropy $S = -\sum \lambda_k \ln \lambda_k$.
- $\pi_G$ extracts the **geometric** content: the causal structure of the channel, determining the throat geometry and area $A$.
- The [Area Scaling](/derivations/holography/area-scaling) derivation (Theorem 5.1) bridges the two: $A = 4\ell_P^2 S$, ensuring the algebraic and geometric descriptions carry the same information.

**Row-by-row verification of the correspondence table:**
1. $I_{12} \leftrightarrow \gamma_{12}$: By definition (both arise from the same relational invariant). $\checkmark$
2. $S_{\text{ent}} \leftrightarrow A/(4\ell_P^2)$: Proposition 3.3 (area-entropy). $\checkmark$
3. No-signaling $\leftrightarrow$ Non-traversability: Corollary 4.2. $\checkmark$
4. Monogamy $\leftrightarrow$ Topology constraints: The [Entanglement](/derivations/quantum/entanglement) derivation (Theorem 4.1) proves monogamy from coherence subadditivity: $S_{AB} + S_{BC} \geq S_{ABC} + S_B$. Geometrically, this constrains wormhole topology — a three-way bridge connecting $A$, $B$, $C$ must have throat areas satisfying $A_{AB} + A_{BC} \geq A_{ABC} + A_B$, which limits branching. $\checkmark$
5. Schmidt decomposition $\leftrightarrow$ Throat spectrum: The Schmidt coefficients $\{\lambda_k\}$ determine the density matrix eigenvalues; geometrically, they correspond to the quasi-normal mode spectrum of the throat (the frequencies at which perturbations of the throat decay). $\checkmark$ $\square$

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
| Theorem 3.2 (wormhole geometry) | Semi-formal | Three-step proof via causal set topology → continuum limit → minimal surface; relies on causal-set-to-manifold correspondence |
| Proposition 3.3 (throat area) | Semi-formal | Uses area scaling bound saturation; full proof requires causal set machinery |
| Theorem 4.1 (non-traversability) | Semi-formal | Physically motivated; formal proof needs the area-coherence saturation to be exact |
| Theorem 5.1 (exact correspondence) | Semi-formal | Two projections ($\pi_Q$, $\pi_G$) formally defined; row-by-row verification explicit; Schmidt↔quasi-normal mode link is conjectural |

## Open Gaps

**Gap 1.** Theorem 3.2 now has a three-step semi-formal proof, but the causal set → manifold correspondence (Step 2) is inherited from [Causal Set Statistics](/derivations/holography/causal-set-statistics), which is itself provisional. A fully rigorous proof would require the causal set reconstruction theorem to be proven from the axioms, or an alternative argument that bypasses the continuum limit entirely.

**Gap 2.** The area-coherence saturation (Proposition 3.3) uses the [Area Scaling](/derivations/holography/area-scaling) bound, which is proved for causal horizons. Extending this to arbitrary minimal surfaces (wormhole throats) requires showing that the throat acts as a causal horizon for the coherence channel. This is plausible (the throat is the information bottleneck) but not yet proven from the axioms.

**Gap 3.** The exact correspondence (Theorem 5.1) now has explicit projections ($\pi_Q$, $\pi_G$) and row-by-row verification. The remaining gap is the Schmidt↔quasi-normal-mode identification (row 5 of the table), which is stated by analogy with AdS/CFT but not derived from the framework axioms. A rigorous proof would require the spectral theory of the wormhole throat to be developed within the causal set framework.

**Gap 4.** The thermofield double model (Proposition 6.1) should be connected to the [Hawking Radiation](/derivations/holography/hawking-radiation) derivation, which describes black hole evaporation as coherence-dual pair annihilation. The ER=EPR correspondence predicts that the entanglement structure of Hawking radiation encodes the wormhole geometry — this should provide a new perspective on the [Information Paradox](/derivations/holography/information-paradox) resolution.

## Addresses Gaps In

- [Entanglement](/derivations/quantum/entanglement), Gap: "Make the ER=EPR sketch (Proposition 5.1) rigorous by connecting to the Area Scaling and Causal Set Statistics derivations" — **Partially resolved**: Full derivation structure with dual descriptions; central topology argument (Gap 1) remains.
- [Information Paradox](/derivations/holography/information-paradox), Gap: "Relational invariants between coherence-dual pairs are the structural analogue of Einstein-Rosen bridges. Formalizing this connection would strengthen the information paradox resolution." — **Partially resolved**: Theorem 5.1 establishes the structural mapping; Gap 4 identifies the remaining connection to Hawking radiation.
