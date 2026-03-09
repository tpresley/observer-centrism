---
title: "Three Interaction Types"
status: "draft"
dependsOn: ["minimal-observer/multiplicity"]
enablesDerivation: ["interactions/relational-invariants", "thermodynamics/time", "thermodynamics/entropy"]
tags: ["dynamics"]
summary: "Classification of observer interactions by invariant outcome: Passage, Fusion, Resonance"
rigorLevel: "semi-formal"
sourceSection: "04-interaction-bootstrap"
lastUpdated: 2026-03-08
---

## Statement

When two observers interact, the interaction is fully classified by what happens to each observer's invariant. There are exactly **three** physically distinct interaction types.

## Derivation

### Setup

Let $\mathcal{O}_1 = (\Sigma_1, I_1, \mathcal{B}_1)$ and $\mathcal{O}_2 = (\Sigma_2, I_2, \mathcal{B}_2)$ be two observers. An **interaction** is a transformation $T_{12}$ acting on the joint state space $\Sigma_1 \times \Sigma_2$ that is not decomposable into independent transformations on $\Sigma_1$ and $\Sigma_2$ alone:

$$T_{12} \neq T_1 \otimes T_2$$

After the interaction, each invariant either survives or does not. This gives four logical possibilities:

| | $I_2$ survives | $I_2$ destroyed |
|---|---|---|
| $I_1$ survives | Case A | Case B |
| $I_1$ destroyed | Case C | Case D |

### Case D: Both Destroyed (Not a Stable Type)

If both $I_1$ and $I_2$ are destroyed, the coherence they carried must go somewhere (by Axiom 1). Two sub-cases:

- **D1**: The coherence dissipates into the substrate without forming new stable structure. This is not an interaction between observers — it is the *dissolution* of both. No observer persists, so there is no interaction outcome to classify.
- **D2**: The coherence reorganizes into one or more new observers. But then those new observers' invariants *do* survive the interaction. This reduces to one of the other cases, with the new observers as outputs.

Case D is therefore not an independent interaction type.

### Cases B and C: One Destroyed (Reduces to Case A or Case D)

By symmetry, B and C are equivalent up to labeling. Consider Case B: $I_1$ survives, $I_2$ is destroyed. The coherence from $I_2$ either:

- Is absorbed into $\mathcal{O}_1$, modifying its invariant to some $I_1'$. If $I_1' = I_1$, this is Case A. If $I_1' \neq I_1$, then $I_1$ did not truly survive — it was replaced. This is actually Case D2.
- Dissipates into the substrate. Then $\mathcal{O}_2$ simply dissolved in the presence of $\mathcal{O}_1$. This is dissolution, not a symmetric interaction.

The asymmetric cases reduce to the symmetric cases under analysis. This leaves three independent types from Case A.

### Case A: Both Survive — Three Sub-Cases

When both $I_1$ and $I_2$ survive the interaction, three structurally distinct outcomes are possible, distinguished by the **joint state space** after interaction:

**Type I (Passage).** The joint state space after interaction is the same as before: $\Sigma_1 \times \Sigma_2$ with no new structure. The observers pass through each other. The only quantity that can be exchanged without altering either invariant is **phase** — the position in each observer's internal cycle.

*Why only phase?* Any exchange of invariant-carrying structure would, by definition, alter the invariant of at least one observer. Phase is the conjugate variable to the invariant (by the Noether structure of each observer's $U(1)$ loop). It is the unique quantity that can be transferred between observers without changing either's conserved charge.

$$T_{12}^{(I)}: (\theta_1, Q_1; \theta_2, Q_2) \mapsto (\theta_1 + \delta\theta_1, Q_1; \theta_2 + \delta\theta_2, Q_2)$$

with $\delta\theta_1 + \delta\theta_2 = 0$ (phase conservation).

**Type II (Fusion).** The individual invariants $I_1, I_2$ dissolve, but a new composite invariant $I_{12}$ forms on a new state space $\Sigma_{12}$ that is not the product $\Sigma_1 \times \Sigma_2$. The original observers cease to exist; a new composite observer $\mathcal{O}_{12} = (\Sigma_{12}, I_{12}, \mathcal{B}_{12})$ replaces them.

$$T_{12}^{(II)}: (\Sigma_1, I_1) \times (\Sigma_2, I_2) \mapsto (\Sigma_{12}, I_{12})$$

This is "both survive" in the sense that the coherence content survives — total coherence is conserved — but the individual observer identities do not. Coherence is reorganized, not destroyed.

**Type III (Resonance).** Both $I_1$ and $I_2$ survive, *and* a new invariant $I_{12}$ appears on the joint space. The joint state space acquires new structure: $\Sigma_1 \times \Sigma_2 \to \Sigma_1 \times \Sigma_2 \times \Sigma_{12}$, where $\Sigma_{12}$ carries the relational invariant.

$$T_{12}^{(III)}: \text{generates } I_{12} \text{ with } I_{12} \neq f(I_1) + g(I_2) \text{ for any } f, g$$

The new invariant is **irreducibly relational** — it cannot be attributed to either observer alone.

### Exhaustiveness

The classification is exhaustive because it partitions all possibilities:

1. Every interaction either preserves both individual invariants or does not
2. If not, it reduces to dissolution or fusion (as shown above)
3. If both are preserved, the joint space either gains new structure (Type III) or does not (Type I)
4. If neither preserves and new composite forms, that is fusion (Type II)

There is no fifth case.

## Physical Identification

| Type | Framework description | Physics |
|---|---|---|
| **I (Passage)** | Phase transfer only; invariants unchanged | Scattering, wave interference, photon exchange |
| **II (Fusion)** | Individual invariants dissolve into composite | Bound state formation, pair annihilation, confinement |
| **III (Resonance)** | New relational invariant generated | Entanglement, chemical bonding, causal correlation |

**Wave behavior is structural, not mysterious.** Type I interactions transfer only phase. This is why quantum systems exhibit wave-like behavior: the only coherence-preserving mode of transient interaction between observers maintaining distinct invariants is phase transfer. Interference patterns emerge from phase relationships between interacting observer loops.

## Rigor Assessment

**What is established:**
- The 2×2 case analysis (both survive / one destroyed / both destroyed) is logically exhaustive
- The reduction of asymmetric cases to symmetric ones follows from coherence conservation
- The Type I restriction to phase transfer follows from the Noether structure (phase is conjugate to charge)

**What needs work:**
- The Case B reduction argument (one invariant destroyed) is informal — the "absorbed or dissipated" dichotomy needs formalization
- Type II is somewhat loosely placed under "both survive" — it's really a distinct case where individual invariants reorganize. The classification scheme could be cleaner.
- The irreducibility condition for Type III ($I_{12} \neq f(I_1) + g(I_2)$) needs a precise functional form

## Open Gaps

1. The rate or probability of each interaction type occurring between specific observers is not addressed. This likely requires the full quantum formalism (Born rule, path integral).
2. Whether mixed interactions (e.g., partial fusion + resonance) are possible needs investigation. The classification assumes clean types, but real interactions may be superpositions.
3. The relationship between interaction type and energy scale needs development — at what energy does Type I give way to Type II?
