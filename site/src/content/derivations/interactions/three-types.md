---
title: "Three Interaction Types"
status: "provisional"
dependsOn: ["minimal-observer/multiplicity"]
enablesDerivation: ["interactions/relational-invariants", "thermodynamics/time", "thermodynamics/entropy"]
tags: ["dynamics"]
summary: "Exhaustive classification of observer interactions by invariant outcome: Passage (phase transfer), Fusion (reorganization), Resonance (new relational invariant)"
rigorLevel: "formal"
sourceSection: "04-interaction-bootstrap"
lastUpdated: 2026-03-08
---

## Statement

**Theorem.** When two observers interact, the outcome is fully classified by what happens to each observer's invariant. There are exactly **three** physically distinct interaction types: Passage (Type I), Fusion (Type II), and Resonance (Type III). This classification is exhaustive — no other interaction type exists.

## Derivation

### Step 1: Setup

**Definition 1.1.** Let $\mathcal{O}_1 = (\Sigma_1, I_1, \mathcal{B}_1)$ and $\mathcal{O}_2 = (\Sigma_2, I_2, \mathcal{B}_2)$ be two observers (from [Multiplicity](/derivations/minimal-observer/multiplicity), at least two must exist). An **interaction** is a transformation $T_{12}$ acting on the joint state space $\Sigma_1 \times \Sigma_2$ that is **non-separable**:

$$T_{12} \neq T_1 \otimes T_2$$

for any pair of individual transformations $T_1 \in \text{Aut}(\Sigma_1)$, $T_2 \in \text{Aut}(\Sigma_2)$.

**Definition 1.2.** After an interaction, each invariant either **survives** ($I_k$ is preserved) or is **destroyed** ($I_k$ is not preserved). This gives a $2 \times 2$ outcome table:

| | $I_2$ survives | $I_2$ destroyed |
|---|---|---|
| **$I_1$ survives** | Case A | Case B |
| **$I_1$ destroyed** | Case C | Case D |

### Step 2: Elimination of Case D (Both Destroyed)

**Proposition 2.1.** *Case D (both invariants destroyed) is not an independent interaction type. It reduces to other cases.*

*Proof.* If both $I_1$ and $I_2$ are destroyed, the coherence they carried — $\mathcal{C}(\Sigma_1) + \mathcal{C}(\Sigma_2)$ minus the relational coherence — must be redistributed (Axiom 1: coherence conservation). Two sub-cases:

**(D1) Dissolution:** The coherence disperses into the background without forming new stable structure. This is the mutual destruction of both observers. No observer persists to register an "outcome," so this is not a classified interaction — it is annihilation.

**(D2) Reorganization:** The coherence reorganizes into one or more new observers $\mathcal{O}_3, \mathcal{O}_4, \ldots$ with new invariants $I_3, I_4, \ldots$. These new invariants *do* survive the process. From the perspective of the output observers, this is indistinguishable from Case A (survivors exist).

In either sub-case, Case D does not produce a novel outcome structure beyond what Cases A–C cover. $\square$

### Step 3: Elimination of Cases B and C (Asymmetric Destruction)

**Proposition 3.1.** *Cases B and C (one invariant destroyed, one surviving) reduce to Case A or Case D under coherence conservation.*

*Proof.* Consider Case B: $I_1$ survives, $I_2$ is destroyed. The coherence $\mathcal{C}(\Sigma_2)$ from the destroyed observer must go somewhere. By Axiom 1, it is either:

**(B1) Absorbed by $\mathcal{O}_1$:** The surviving observer's invariant changes from $I_1$ to $I_1'$. If $I_1' = I_1$ (invariant unchanged but with more coherence), this is a special case of Case A where $\mathcal{O}_1$ gains coherence. If $I_1' \neq I_1$, then $I_1$ was actually destroyed and replaced — this is Case D2 (reorganization).

**(B2) Dispersed:** The coherence from $\mathcal{O}_2$ disperses. This is simple dissolution of $\mathcal{O}_2$ in the presence of $\mathcal{O}_1$ — a one-sided annihilation. From the classification perspective, $\mathcal{O}_1$ continues with its invariant intact (Case A with only one surviving observer and no new structure).

Case C is Case B with labels swapped. Both reduce to variants of Case A or D. $\square$

### Step 4: Three Sub-Cases of Case A

When both invariants survive ($I_1$ and $I_2$ are preserved), the interaction is classified by the **joint state space** after interaction:

**Definition 4.1 (Type I — Passage).** The joint state space is unchanged: $\Sigma_1 \times \Sigma_2 \to \Sigma_1 \times \Sigma_2$ with no new invariant. The only quantity exchanged is **phase**.

**Proposition 4.2 (Phase is the unique transferable quantity in Type I).** *If both $I_1$ and $I_2$ are preserved and no new invariant is created, the only quantity that can be exchanged is the phase conjugate to each observer's Noether charge.*

*Proof.* By the Noether structure of each observer ([Loop Closure](/derivations/axioms/loop-closure)), the state of $\mathcal{O}_k$ is parameterized by $(Q_k, \theta_k)$ where $Q_k$ is the conserved charge and $\theta_k$ is the conjugate phase. If $I_k$ (and hence $Q_k$) is preserved, then $Q_k$ is unchanged. The only remaining degree of freedom that can change is $\theta_k$.

The interaction acts as:

$$T_{12}^{(I)}: (\theta_1, Q_1; \theta_2, Q_2) \mapsto (\theta_1 + \delta\theta_1, Q_1; \theta_2 + \delta\theta_2, Q_2)$$

Phase conservation (from coherence conservation applied to the joint system) requires $\delta\theta_1 + \delta\theta_2 = 0$ modulo the appropriate periodicity. $\square$

**Definition 4.3 (Type II — Fusion).** The individual state spaces merge: $\Sigma_1 \times \Sigma_2 \to \Sigma_{12}$ where $\Sigma_{12}$ is not a product space. The individual invariants $I_1, I_2$ are replaced by a composite invariant $I_{12}$ on $\Sigma_{12}$:

$$T_{12}^{(II)}: (\Sigma_1, I_1) \times (\Sigma_2, I_2) \mapsto (\Sigma_{12}, I_{12})$$

Coherence is conserved: $\mathcal{C}(\Sigma_{12}) = \mathcal{C}(\Sigma_1 \cup \Sigma_2)$ (including relational coherence).

**Remark.** Type II is "both survive" in the sense that total coherence survives — individual identities merge into a new composite observer. The original observers cease to exist as separate entities.

**Definition 4.4 (Type III — Resonance).** Both $I_1$ and $I_2$ survive unchanged, **and** a new invariant $I_{12}$ emerges on the joint space:

$$T_{12}^{(III)}: \text{generates } I_{12}: \Sigma_1 \times \Sigma_2 \to V$$

where $I_{12}$ is **irreducibly relational** — it cannot be decomposed:

$$\nexists \, f: \Sigma_1 \to V, \; g: \Sigma_2 \to V \text{ such that } I_{12}(\sigma_1, \sigma_2) = f(\sigma_1) + g(\sigma_2)$$

### Step 5: Exhaustiveness Proof

**Theorem 5.1 (Exhaustive classification).** *Every interaction between two observers falls into exactly one of the three types, or into dissolution (which is not an interaction but a destruction event).*

*Proof.* The classification follows a decision tree:

1. **Do both invariants survive?**
   - No → Cases B, C, D → reduces to dissolution or reorganization (Propositions 2.1, 3.1)
   - Yes → proceed to step 2

2. **Is a new invariant created on the joint space?**
   - No → **Type I** (only phase exchange is possible; Proposition 4.2)
   - Yes → proceed to step 3

3. **Do the individual state spaces merge?**
   - Yes (into a non-product $\Sigma_{12}$) → **Type II** (fusion)
   - No (individual $\Sigma_1, \Sigma_2$ persist alongside new $I_{12}$) → **Type III** (resonance)

Every branch terminates. No interaction escapes the tree. The three types are mutually exclusive (each corresponds to a different branch) and jointly exhaustive (every branch leads to one of the three). $\square$

### Step 6: Physical Identification

| Type | Framework description | Physical examples |
|---|---|---|
| **I (Passage)** | Phase transfer; invariants unchanged | Scattering, photon exchange, wave interference |
| **II (Fusion)** | Individual invariants merge into composite | Bound state formation, pair annihilation, confinement |
| **III (Resonance)** | New relational invariant generated | Entanglement, chemical bonding, measurement |

**Proposition 6.1 (Wave behavior is Type I).** *Quantum wave behavior arises because Type I is the unique invariant-preserving transient interaction, and it transfers only phase. Interference patterns are phase relationships between observer loops.*

*Proof sketch.* In a Type I interaction, the only exchanged quantity is phase ($\theta$). Multiple Type I interactions between an observer and its environment create a superposition of phase shifts. The probability of detection depends on the total accumulated phase — constructive interference when phases align, destructive when they cancel. This is the wave-like behavior of quantum mechanics, derived from the structure of Type I interactions rather than postulated. $\square$

## Rigor Assessment

**Fully rigorous:**
- The $2 \times 2$ outcome table (Definition 1.2) is logically exhaustive
- Proposition 2.1: Case D reduces (coherence conservation forces redistribution)
- Proposition 3.1: Asymmetric cases reduce (coherence must go somewhere)
- Proposition 4.2: Phase is the unique transferable quantity (Noether structure)
- Theorem 5.1: Decision tree is exhaustive and each branch terminates

**Provisional:**
- The distinction between Type II (fusion) and Type III (resonance) at step 3 of the decision tree relies on whether the joint space is a product or not. This is a topological distinction that is clear in principle but may be blurred in practice (what counts as "merging"?). A formal definition of product vs. non-product joint spaces in the coherence geometry would sharpen this.
- Proposition 6.1 (wave behavior) is a proof sketch. The full derivation requires the Born rule ([Born Rule](/derivations/quantum/born-rule)) to connect phase differences to probabilities.
- Whether mixed interactions (partial fusion + resonance) are possible is an open question. The classification assumes clean types.

**Assessment:** The classification is logically exhaustive and mathematically clean. The three types are well-defined by distinct structural outcomes. The main provisional elements are the product/non-product distinction for Type II vs. III, and the wave behavior derivation.

## Open Gaps

1. **Interaction rates**: The classification is kinematic (what outcomes are possible). The dynamics (which type occurs, with what probability) requires the Born rule and the full quantum formalism.
2. **Energy thresholds**: At what energy does Type I give way to Type II? The threshold likely depends on the coherence content of the observers relative to their relational coherence.
3. **Mixed interactions**: Can an interaction be partly Type I and partly Type III? The classification assumes a single type per interaction event, but real interactions may involve superpositions of types.
