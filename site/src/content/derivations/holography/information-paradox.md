---
title: "Black Hole Information Paradox Resolution"
status: "draft"
dependsOn: ["holography/hawking-radiation", "axioms/coherence-conservation"]
enablesDerivation: []
tags: ["holography"]
summary: "Information is globally conserved (coherence conservation) but locally inaccessible — the paradox dissolves when entropy is recognized as observer-indexed"
rigorLevel: "semi-formal"
sourceSection: "10-holography"
lastUpdated: 2026-03-08
---

## Statement

The black hole information paradox asks: if Hawking radiation is thermal and carries no information about the interior, is information destroyed when the black hole evaporates? In the framework, the answer is no. Coherence is globally conserved (Axiom 1). Information is not destroyed — it is encoded in correlations between successive Hawking quanta. The apparent paradox arises from conflating observer-indexed entropy with absolute information loss.

## Derivation

### Step 1: The Paradox Stated

The standard argument:

1. A pure quantum state collapses to form a black hole
2. The black hole emits thermal Hawking radiation (from [Hawking Radiation](/derivations/holography/hawking-radiation))
3. Thermal radiation is a mixed state — it carries no information about the initial pure state
4. When the black hole fully evaporates, the original pure state has evolved into a mixed state
5. This violates unitarity — information has been destroyed

This is a genuine contradiction in any framework where information is absolute. The observer-centric resolution: information is observer-indexed, and the apparent loss is a consequence of the observer's bounded coherence domain.

### Step 2: Coherence Conservation Is Absolute

Axiom 1 (Coherence Conservation) states that coherence cannot be created or destroyed. This is the framework's analogue of unitarity. Applied to black hole evaporation:

$$\mathcal{C}_{\text{total}}(t_{\text{before}}) = \mathcal{C}_{\text{total}}(t_{\text{after}})$$

The total coherence of the universe is conserved throughout the evaporation process. No coherence is lost. Period.

### Step 3: Where the Information Goes

The information about the black hole interior is encoded in **correlations between successive Hawking quanta**. Each coherence-dual pair produced at the horizon (Step 2 of the Hawking derivation) is entangled — the ingoing member and outgoing member share a relational invariant $I_{\text{in,out}}$.

As the black hole evaporates, these relational invariants accumulate:

$$I_1, I_2, \ldots, I_N$$

where $I_k$ is the relational invariant of the $k$-th coherence-dual pair. The complete set of relational invariants $\{I_k\}$ encodes all the information about the interior.

The catch: these relational invariants are **distributed across all the Hawking quanta**. No single quantum carries significant information. The information is in the correlations — the joint relational invariants between pairs of quanta.

### Step 4: Observer-Indexed Inaccessibility

From [Entropy as Inaccessible Coherence](/derivations/thermodynamics/entropy), entropy is observer-indexed. Different observers have different coherence domains and therefore different entropies for the same system.

**Observer A** (far from the black hole, collecting Hawking radiation one quantum at a time):
- Each individual quantum looks thermal — $A$ cannot access the inter-quantum correlations without collecting ALL the radiation
- $A$'s entropy of the radiation increases as more thermal quanta arrive
- This is the "information loss" that A perceives

**Observer B** (hypothetical observer collecting ALL Hawking radiation and measuring the correlations):
- $B$ can in principle reconstruct the complete set $\{I_k\}$ from the multi-quantum correlations
- $B$'s entropy of the combined system is **constant** — no information is lost
- The evolution is unitary from $B$'s perspective

The paradox dissolves: information loss is apparent from observer $A$'s bounded perspective, but coherence conservation ensures that $B$'s global perspective sees unitary evolution.

### Step 5: The Page Curve

The **Page curve** (Page, 1993) describes how the entanglement entropy of the radiation changes during evaporation:

- Initially, each new Hawking quantum is entangled with the interior. The radiation entropy increases.
- At the **Page time** (when roughly half the black hole has evaporated), the radiation contains enough quanta to begin encoding the inter-quantum correlations. The entropy begins decreasing.
- At complete evaporation, the radiation is in a pure state — all information is contained in the correlations.

In the framework, the Page curve follows from coherence conservation:

$$S_{\text{radiation}}(t) = \min\left(\mathcal{C}_{\text{emitted}}(t), \, \mathcal{C}_{\text{remaining}}(t)\right)$$

The entropy of the radiation is bounded by the smaller of the emitted and remaining coherence — exactly the Page curve.

### Step 6: No Firewall, No Remnant

Two proposed resolutions to the information paradox that the framework rejects:

**No firewall.** The firewall argument (AMPS, 2012) suggests that an infalling observer encounters high-energy quanta at the horizon. The framework rejects this: the horizon is locally smooth (the equivalence principle from [Gravity](/derivations/spacetime/gravity) holds), and the pair production mechanism does not create a wall of energy. Different observers have different coherence domains — what looks thermal to one observer is smooth to another.

**No stable remnant.** The framework does not require a stable Planck-mass remnant to store information. Information is distributed across the radiation, not stored in a remnant. The endpoint of evaporation is determined by the discrete structure at the Planck scale.

## Rigor Assessment

**What is established:**
- Coherence conservation → unitarity → information is not destroyed (this is axiomatic)
- The inter-quantum correlation mechanism is consistent with the Page curve
- The observer-indexed entropy resolves the apparent contradiction between thermal radiation and unitary evolution

**What needs work:**
- The mechanism by which correlations between Hawking quanta encode interior information needs explicit construction
- The Page curve derivation is schematic — a rigorous version needs the entanglement structure of the coherence-dual pairs
- The "no firewall" argument needs to address the AMPS paradox in detail

## Open Gaps

1. **Scrambling time**: How quickly does the black hole interior become encoded in the Hawking radiation? The scrambling time $t_s \sim \beta \log S$ (where $\beta = 1/T_H$ and $S$ is the entropy) should be derivable.
2. **Quantum error correction**: Recent work interprets the information encoding as quantum error correction (the interior is the "logical" qubits, the radiation is the "physical" qubits). The framework should connect to this perspective.
3. **Islands and entanglement wedges**: The island formula for entropy computations should be derivable from the coherence domain structure.
