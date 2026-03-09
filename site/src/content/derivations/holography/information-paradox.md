---
title: "Black Hole Information Paradox Resolution"
status: "provisional"
dependsOn: ["holography/hawking-radiation", "axioms/coherence-conservation"]
enablesDerivation: []
tags: ["holography"]
summary: "Information is globally conserved (coherence conservation) but locally inaccessible — the paradox dissolves when entropy is recognized as observer-indexed"
rigorLevel: "formal"
sourceSection: "10-holography"
lastUpdated: 2026-03-08
---

## Statement

**Theorem.** The black hole information paradox is resolved by the observer-indexed structure of entropy. Coherence is globally conserved (Axiom 1) — information is never destroyed. The information about the black hole interior is encoded in correlations between successive Hawking quanta (inter-quantum relational invariants). The apparent paradox arises from conflating observer-indexed entropy (which increases for individual external observers collecting thermal radiation) with absolute information loss (which does not occur). The Page curve — the entanglement entropy of the radiation rising then falling — follows from coherence conservation. No firewall or stable remnant is required.

## Derivation

### Step 1: The Paradox Stated

**Definition 1.1 (The information paradox).** The standard argument:

1. A pure quantum state $|\Psi\rangle$ collapses to form a black hole
2. The black hole emits thermal Hawking radiation ([Hawking Radiation](/derivations/holography/hawking-radiation))
3. Thermal radiation is a mixed state $\rho_{\text{rad}}$ — it carries no information about $|\Psi\rangle$ beyond $(M, Q, J)$
4. When the black hole fully evaporates, $|\Psi\rangle$ has evolved into $\rho_{\text{rad}}$
5. A pure-to-mixed transition violates unitarity: information has been destroyed

**Proposition 1.2 (Logical structure).** *The paradox assumes that entropy/information is observer-independent. If entropy is observer-indexed, the paradox dissolves: what appears as information loss to one observer may be information preservation to another.*

### Step 2: Coherence Conservation Is Absolute

**Theorem 2.1 (No information loss).** *Total coherence is conserved throughout black hole evaporation:*

$$\mathcal{C}_{\text{total}}(t_{\text{before}}) = \mathcal{C}_{\text{total}}(t_{\text{after}})$$

*Proof.* This is Axiom 1 ([Coherence Conservation](/derivations/axioms/coherence-conservation)). The coherence measure $\mathcal{C}$ is conserved on every Cauchy slice of the dependency DAG. Black hole formation and evaporation are processes within the DAG — they do not create or destroy coherence. The total coherence of the universe (black hole interior + Hawking radiation + environment) is constant at all times. $\square$

**Corollary 2.2 (Unitarity).** *In the Hilbert space formulation ([Born Rule](/derivations/quantum/born-rule), Theorem 7.1), coherence conservation corresponds to unitary time evolution: $|\Psi(t)\rangle = U(t)|\Psi(0)\rangle$ for some unitary $U(t)$. The evolution from pure initial state to final state is unitary — the final state is pure, not mixed.*

### Step 3: Information in Inter-Quantum Correlations

**Theorem 3.1 (Correlation encoding).** *The information about the black hole interior is encoded in relational invariants between successive Hawking quanta.*

*Proof.* Each coherence-dual pair produced at the horizon ([Hawking Radiation](/derivations/holography/hawking-radiation), Theorem 2.1) generates a relational invariant $I_k$ connecting the ingoing member $\mathcal{O}_{\text{in}}^{(k)}$ to the outgoing member $\bar{\mathcal{O}}_{\text{out}}^{(k)}$. As the black hole evaporates, the ingoing members interact with the interior, creating new relational invariants among themselves:

$$I_{\text{interior}}^{(j,k)} = I(\mathcal{O}_{\text{in}}^{(j)}, \mathcal{O}_{\text{in}}^{(k)})$$

These interior correlations are transmitted to the outgoing radiation through a chain of relational invariants: the $k$-th outgoing quantum is correlated with the $k$-th ingoing quantum (by $I_k$), which is correlated with all other ingoing quanta (by $I_{\text{interior}}$), which are correlated with all other outgoing quanta (by their respective $I_j$'s).

The complete information is therefore encoded in the **joint** relational invariants among all outgoing quanta:

$$\{I_k\}_{k=1}^N \cup \{I_{\text{interior}}^{(j,k)}\}_{j<k} \to \{I_{\text{radiation}}^{(j,k)}\}_{j<k}$$

No single outgoing quantum carries significant information — the information is distributed across the multi-quantum correlations. $\square$

### Step 4: Observer-Indexed Resolution

**Theorem 4.1 (Observer-dependent entropy).** *Different observers assign different entropies to the evaporating black hole system. The paradox arises only for observers with bounded coherence domains.*

*Proof.* Consider two observers:

**Observer $\mathcal{O}_A$** (far from the black hole, collecting Hawking quanta one at a time):
- $\mathcal{O}_A$'s coherence domain includes the individual quanta but not the inter-quantum correlations (accessing correlations requires joint measurements on all quanta simultaneously)
- Each individual quantum appears thermal: $\rho_k = \sum_\omega p_\omega |\omega\rangle\langle\omega|$ with $p_\omega = e^{-\hbar\omega/(k_BT_H)}/Z$
- $\mathcal{O}_A$'s entropy of the radiation increases monotonically: $S_A(t) \uparrow$
- This is the "information loss" that $\mathcal{O}_A$ perceives — a consequence of their bounded coherence domain, not a property of the physics

**Observer $\mathcal{O}_B$** (collecting ALL Hawking radiation and measuring multi-quantum correlations):
- $\mathcal{O}_B$'s coherence domain includes the complete set of relational invariants $\{I_{\text{radiation}}^{(j,k)}\}$
- $\mathcal{O}_B$ can in principle reconstruct the initial state $|\Psi\rangle$ from the correlations
- $\mathcal{O}_B$'s entropy of the combined system is constant: $S_B = 0$ (the state remains pure)
- No information is lost from $\mathcal{O}_B$'s perspective

The paradox dissolves: $\mathcal{O}_A$ sees information loss because their coherence domain is bounded; $\mathcal{O}_B$ sees unitary evolution because their coherence domain encompasses the full system. Both descriptions are correct for their respective observers. $\square$

**Corollary 4.2.** *"Is information lost?" is not a well-posed question without specifying the observer. The answer is observer-dependent — information is locally inaccessible but globally conserved.*

### Step 5: The Page Curve

**Theorem 5.1 (Page curve from coherence conservation).** *The entanglement entropy of the Hawking radiation follows the Page curve:*

$$S_{\text{radiation}}(t) = \min\left(\mathcal{C}_{\text{emitted}}(t), \, \mathcal{C}_{\text{remaining}}(t)\right)$$

*Proof.* By Axiom 1, $\mathcal{C}_{\text{emitted}}(t) + \mathcal{C}_{\text{remaining}}(t) = \mathcal{C}_{\text{total}} = \text{const}$.

**Phase 1** (early evaporation, $t < t_{\text{Page}}$): $\mathcal{C}_{\text{emitted}} < \mathcal{C}_{\text{remaining}}$. Each new Hawking quantum is entangled with the interior. The radiation entropy equals the emitted coherence: $S \approx \mathcal{C}_{\text{emitted}}(t)$, which increases.

**Page time** ($t = t_{\text{Page}}$): $\mathcal{C}_{\text{emitted}} = \mathcal{C}_{\text{remaining}} = \mathcal{C}_{\text{total}}/2$. The entropy reaches its maximum: $S_{\max} = \mathcal{C}_{\text{total}}/2$.

**Phase 2** (late evaporation, $t > t_{\text{Page}}$): $\mathcal{C}_{\text{emitted}} > \mathcal{C}_{\text{remaining}}$. The radiation now contains enough quanta to encode the inter-quantum correlations. Each new quantum carries information about previous quanta, reducing the net entropy: $S \approx \mathcal{C}_{\text{remaining}}(t)$, which decreases.

**Final state** ($t = t_{\text{evap}}$): $\mathcal{C}_{\text{remaining}} = 0$. The radiation is in a pure state: $S = 0$. All information is encoded in the correlations among the Hawking quanta. $\square$

**Corollary 5.2 (Page time).** *The Page time is approximately half the evaporation time:*

$$t_{\text{Page}} \sim \frac{t_{\text{evap}}}{2} \sim \frac{2560\pi G^2 M^3}{\hbar c^4}$$

### Step 6: No Firewall

**Theorem 6.1 (No firewall).** *The framework rejects the firewall hypothesis (AMPS, 2012).*

*Proof.* The firewall argument claims that unitarity requires breaking the entanglement between a late Hawking quantum and the interior, creating a "wall" of high-energy quanta at the horizon. In the framework:

**(i)** The strong equivalence principle ([Gravity](/derivations/spacetime/gravity), Theorem 4.3) guarantees that the horizon is locally smooth for an infalling observer. This is a structural consequence of the coherence geometry — it cannot be violated without abandoning the axioms.

**(ii)** The resolution of the AMPS paradox is observer-indexing: the monogamy of entanglement (a late quantum cannot be maximally entangled with both the interior and early radiation) is an artifact of assuming observer-independent entanglement. For the infalling observer, the quantum is entangled with the interior; for the external observer, it is correlated with the early radiation. These are different relational invariants in different coherence domains — not contradictory.

**(iii)** The pair production mechanism ([Hawking Radiation](/derivations/holography/hawking-radiation), Theorem 2.1) does not create a firewall: the coherence-dual pairs are produced with energies $\sim k_B T_H$, which is negligible for macroscopic black holes. $\square$

### Step 7: No Stable Remnant

**Proposition 7.1 (No remnant).** *The framework does not require a stable Planck-mass remnant to store information.*

*Proof sketch.* Information is distributed across the Hawking radiation (Theorem 3.1), not stored in a remnant. As the black hole evaporates, the coherence that was inaccessible (behind the horizon) becomes progressively accessible: the horizon area shrinks, reducing the number of mediating loops and hence the structural inaccessibility. At the Planck scale, the continuum description breaks down and the discrete relational network governs the final stages.

The framework does not predict whether the endpoint is a Planck-mass remnant or complete evaporation — this depends on the discrete structure. However, the information has already been transferred to the radiation by the Page time, so no remnant is needed for information preservation. $\square$

## Physical Identification

| Framework concept | Standard physics |
|---|---|
| Coherence conservation (Axiom 1) | Unitarity of quantum evolution |
| Inter-quantum relational invariants | Multi-particle entanglement in Hawking radiation |
| Observer-indexed entropy | Observer-dependent description of information |
| Page curve from $\min(\mathcal{C}_{\text{emit}}, \mathcal{C}_{\text{rem}})$ | Page curve from entanglement entropy |
| No firewall (equivalence principle) | Smooth horizon for infalling observers |
| Observer-indexing resolves AMPS | Complementarity / ER=EPR-type resolution |

## Rigor Assessment

**Fully rigorous:**
- Theorem 2.1: Coherence conservation throughout evaporation (axiomatic — this is Axiom 1)
- Corollary 2.2: Unitarity follows from conservation (standard equivalence between conserved measures and unitary evolution)
- Theorem 4.1: Observer-dependent entropy descriptions (direct application of observer-indexed entropy from [Entropy](/derivations/thermodynamics/entropy))

**Rigorous given axioms:**
- Theorem 3.1: Information in inter-quantum correlations (follows from the structure of coherence-dual pair production and relational invariant accumulation)
- Theorem 5.1: Page curve from coherence conservation (follows from $\mathcal{C}_{\text{emit}} + \mathcal{C}_{\text{rem}} = \text{const}$ and entropy as the minimum of subsystem coherences)
- Theorem 6.1: No firewall (follows from strong equivalence principle + observer-indexing)

**Provisional:**
- The explicit mechanism by which inter-quantum correlations encode interior information (Theorem 3.1) is structural, not computational. A rigorous version would require constructing the quantum error-correcting code that maps interior degrees of freedom to radiation correlations — connecting to recent work on the island formula and entanglement wedge reconstruction.
- The Page curve derivation (Theorem 5.1) uses $S = \min(\mathcal{C}_{\text{emit}}, \mathcal{C}_{\text{rem}})$, which is the correct scaling for a random bipartite pure state (Page's theorem, 1993). The derivation assumes the Hawking radiation + black hole system is in a typical pure state — this typicality assumption is well-motivated (maximum entropy at the horizon) but not derived from first principles.
- The resolution of the AMPS paradox (Theorem 6.1, part (ii)) invokes observer-indexing to dissolve the monogamy-of-entanglement argument. This is conceptually clear but needs formal development: specifically, showing that the relational invariants for the infalling and external observers are different invariants, not the same invariant viewed from different perspectives.
- The endpoint of evaporation (Proposition 7.1) is acknowledged as depending on the discrete structure, which is not yet developed.

**Assessment:** The resolution is structurally complete: Axiom 1 guarantees no information loss; observer-indexed entropy explains the apparent paradox; the Page curve follows from coherence conservation. The main provisional elements are the explicit information-encoding mechanism and the formal resolution of the AMPS monogamy argument.

## Open Gaps

1. **Scrambling time**: How quickly does the black hole interior become encoded in the Hawking radiation? The scrambling time $t_s \sim (M/M_P)^2 \cdot t_P \cdot \log(S_{BH})$ (Sekino-Susskind, 2008) should be derivable from the rate of relational invariant propagation through the interior network.
2. **Quantum error correction**: The encoding of interior information in radiation correlations should be formalizable as a quantum error-correcting code (Almheiri-Dong-Harlow, 2015). The relational invariant structure should map onto the code subspace.
3. **Island formula**: The island formula for entropy ($S = \min \text{ext}[A(\partial I)/(4G\hbar) + S_{\text{matter}}(I \cup R)]$) should be derivable from the coherence domain structure, with "islands" corresponding to regions where the external observer's coherence domain extends inside the horizon through the radiation correlations.
4. **ER=EPR connection**: The Maldacena-Susskind conjecture (ER=EPR) — that entangled particles are connected by non-traversable wormholes — has a natural interpretation in the framework: relational invariants between coherence-dual pairs are the structural analogue of Einstein-Rosen bridges. Formalizing this connection would strengthen the information paradox resolution.
5. **Observational signatures**: The information encoding in Hawking radiation correlations is in principle observable but requires collecting an astronomically large number of quanta. Are there more accessible signatures of the resolution — for example, in analog black hole experiments?
