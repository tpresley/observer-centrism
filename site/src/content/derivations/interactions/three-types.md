---
title: "Three Interaction Types"
status: "derived"
dependsOn: ["minimal-observer/multiplicity"]
enablesDerivation: ["interactions/relational-invariants", "thermodynamics/time", "quantum/teleportation"]
tags: ["dynamics"]
summary: "Exhaustive classification of observer interactions by invariant outcome: Passage (phase transfer), Fusion (reorganization), Resonance (new relational invariant), with formal treatment of reverse processes (decay, decoherence, dissolution) and their coherence accounting"
rigorLevel: "formal"
lastUpdated: 2026-03-27
---

## Overview

This derivation answers a classification question: **when two observers interact, what are the possible outcomes?**

In standard physics, interactions are categorized by force type (electromagnetic, weak, strong, gravitational). Here, the classification is more fundamental -- it is based on what happens to the conserved quantities (invariants) of the two observers involved, regardless of which force mediates the interaction.

**The argument.** The derivation constructs an exhaustive decision tree:

- After an interaction, each observer's invariant either survives or is destroyed. This gives a two-by-two table of possibilities.
- Coherence conservation eliminates the cases where invariants are destroyed without replacement -- the coherence must go somewhere.
- The surviving cases split into exactly three types based on what changes in the joint system: (1) only phase is exchanged, (2) the observers merge into a composite, or (3) both observers persist but a new relational invariant is created between them.

**The result.** Every interaction between two observers falls into exactly one of three types: Passage (phase transfer, like scattering), Fusion (merging into a bound state), or Resonance (creating a new relational structure, like entanglement). No fourth type exists. The classification is exhaustive and the types are mutually exclusive.

Each forward type has a well-defined reverse: Passage is its own reverse, Fusion reverses to Decay (a composite splitting apart), and Resonance reverses to Decoherence (a relational invariant dissolving). Dissolution -- an observer ceasing to exist entirely -- completes the picture. Coherence conservation guarantees exact accounting in every case: coherence is redistributed, never created or destroyed.

**Why this matters.** This three-way classification is the kinematic foundation for the entire interaction chain. The bootstrap mechanism (which generates complexity) depends specifically on Type III (Resonance) interactions. The reverse processes explain how structure dissolves: decay produces radiation (carrying away binding coherence), decoherence redistributes quantum correlations across the remaining observer network, and dissolution returns an observer's coherence to the other observers on the Cauchy slice.

**An honest caveat.** This classification tells you *what can happen*, not *how often* or *at what energy*. The dynamics -- which type occurs and with what probability -- requires the Born rule and the full quantum formalism, which are derived elsewhere.

## Statement

**Theorem.** When two observers interact, the outcome is fully classified by what happens to each observer's invariant. There are exactly **three** physically distinct interaction types: Passage (Type I), Fusion (Type II), and Resonance (Type III). This classification is exhaustive — no other interaction type exists. Each type has a well-defined reverse process (decay, decoherence) consistent with coherence conservation.

## Derivation

### Step 1: Setup

**Definition 1.1.** Let $\mathcal{O}_1 = (\Sigma_1, I_1, \mathcal{B}_1)$ and $\mathcal{O}_2 = (\Sigma_2, I_2, \mathcal{B}_2)$ be two observers (from [Multiplicity](/derivations/minimal-observer/multiplicity), Theorem 3.1, at least two must exist). An **interaction** is a smooth map $T_{12}: \Sigma_1 \times \Sigma_2 \to \Sigma_1 \times \Sigma_2$ satisfying:

**(I1) Non-separability:** $T_{12}$ cannot be factored as a product of individual transformations:

$$T_{12} \neq T_1 \times T_2 \quad \text{for any } T_1 \in \text{Aut}(\Sigma_1), \; T_2 \in \text{Aut}(\Sigma_2)$$

**(I2) Coherence conservation:** $T_{12}$ preserves total coherence: $\mathcal{C}(T_{12}(\sigma_1, \sigma_2)) = \mathcal{C}(\sigma_1, \sigma_2)$ for all $(\sigma_1, \sigma_2) \in \Sigma_1 \times \Sigma_2$.

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

**Definition 4.3 (Type II — Fusion).** The individual state spaces merge into a non-product space: there exists a smooth manifold $\Sigma_{12}$ and a surjection $\pi: \Sigma_1 \times \Sigma_2 \to \Sigma_{12}$ with $\dim(\Sigma_{12}) < \dim(\Sigma_1) + \dim(\Sigma_2)$, such that $T_{12}^{(II)}$ factors through $\pi$. The individual invariants $I_1, I_2$ are replaced by a composite invariant $I_{12}$ on $\Sigma_{12}$:

$$T_{12}^{(II)}: (\Sigma_1, I_1) \times (\Sigma_2, I_2) \mapsto (\Sigma_{12}, I_{12})$$

Coherence is conserved: $\mathcal{C}(\Sigma_{12}) = \mathcal{C}(\Sigma_1 \cup \Sigma_2)$ (including relational coherence). The formal criterion for fusion is that the **effective joint state space loses dimensions** — the observers become entangled in a way that eliminates independent degrees of freedom.

**Remark.** Type II is "both survive" in the sense that total coherence survives — individual identities merge into a new composite observer. The original observers cease to exist as separate entities.

**Definition 4.4 (Type III — Resonance).** Both $I_1$ and $I_2$ survive unchanged, the individual state spaces $\Sigma_1$ and $\Sigma_2$ remain as independent factors, **and** a new invariant $I_{12}$ emerges on the joint space:

$$T_{12}^{(III)}: \text{generates } I_{12}: \Sigma_1 \times \Sigma_2 \to V$$

where $V$ is a normed vector space and $I_{12}$ is **irreducibly relational** — it cannot be decomposed:

$$\nexists \, f: \Sigma_1 \to V, \; g: \Sigma_2 \to V \text{ such that } I_{12}(\sigma_1, \sigma_2) = f(\sigma_1) + g(\sigma_2)$$

The formal criterion distinguishing Type III from Type II is that the product structure of $\Sigma_1 \times \Sigma_2$ is **preserved**: both factors retain their individual identity and dynamics, while a new conserved quantity is added on the joint space.

**Remark (Composite observer is a level-of-description term).** The phrase "composite observer" is used in the framework at two structurally distinct levels, only one of which is an interaction-type term. The diagnostic criterion is *constituent state-space restructuring vs. preservation*, not binding strength, stability, or whether the bound system is colloquially called a "particle." The two cases are:

| | **Type II composite** (Definition 4.3) | **Type III composite** (Definition 4.4) |
|---|---|---|
| Constituent state spaces | Restructured: $\dim \Sigma_C < \sum_k \dim \Sigma_k$ via the projection $\pi$ | Preserved as independent factors $\Sigma_1, \Sigma_2$ |
| Observer ledger after fusion | One new observer $\mathcal{O}_C = (\Sigma_C, I_C, \mathcal{B}_C)$ replaces the constituents | Both constituents remain on the ledger; the relational invariant $I_{12}$ is added |
| Status of "composite" label | Genuinely new observer with its own $(\Sigma, I, \mathcal{B})$ triple | Informal shorthand for the bound pair — no new triple |
| External Type III interactions reach | Only $\mathcal{O}_C$ (constituents are off-ledger; clock-paused per Theorem 5.1 of [Memory-Persistence Tradeoff](/derivations/thermodynamics-ext/memory-persistence-tradeoff)) | Either constituent (both still on ledger; their individual clocks tick) |
| Decay channels | Only $\mathcal{O}_C$'s decay channels are admissible (Corollary 5.2 of [Memory-Persistence Tradeoff](/derivations/thermodynamics-ext/memory-persistence-tradeoff)) | Each constituent retains its individual decay channels alongside the joint invariant |
| Standard examples | Hadrons (confined quarks), nuclei (bound nucleons), atoms (electron rewritten into discrete orbitals), molecules-as-rigid-bodies, black holes (extremal limit) | Entangled pairs, system + measurement apparatus post-measurement, weak chemical bonds where both atomic state spaces remain operative, atoms-as-loose-aggregates |

The same physical system can sometimes be described at either level — a diatomic molecule treated as a rigid rotor (Type II composite, with an effective $\Sigma$ for rotational/vibrational modes) versus the same molecule treated as two atoms with a bonding invariant (Type III composite, with both atomic state spaces still in play). The choice of description is not arbitrary: it is fixed by which approximation is appropriate to the question being asked, and the formal classification follows from whether the relevant degrees of freedom on either side have been geometrically eliminated by $\pi$ or are still independently addressable.

This level-of-description distinction interacts with the Type-I-as-currency / Type-III-as-accounting reading of the next Remark (Step 6): Type II composite formation is internal reorganization of constituents into a smaller joint manifold; Type III composite formation is the addition of a relational invariant atop preserved factors, and is what is typically meant by "two observers becoming entangled."

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

**Proposition 6.1 (Type I transfers only phase).** *Type I is the unique interaction type that preserves both individual invariants without creating new structure. All Type I interactions are phase exchanges.*

*Proof.* This is a restatement of Proposition 4.2: if both invariants survive and no new invariant is created, the only changeable quantity is the phase conjugate to each conserved charge. The uniqueness of Type I follows from the exhaustive classification (Theorem 5.1). $\square$

**Remark (Wave behavior).** The connection from phase-only exchange (Type I) to quantum wave behavior — interference, superposition, diffraction — requires the coherence path sum and the Born rule ([Born Rule](/derivations/quantum/born-rule)). The structural content at this level is: Type I interactions transfer the same quantity ($\theta$) that enters the coherence phase $e^{i\mathcal{S}/\hbar}$ in the path integral formulation ([Action and Planck's Constant](/derivations/thermodynamics/action-planck), Theorem 5.1). The full derivation of wave-particle duality is deferred to the quantum derivation chain.

**Remark (Memory accumulation is Type III only).** The Type I/Type III distinction has a sharp downstream consequence for observer persistence. Only Type III interactions generate new relational invariants (Definition 4.4), so only Type III interactions contribute to the irreversible state-space expansion of [Relational Invariants](/derivations/interactions/relational-invariants), Proposition 6.2. Type I phase exchange traverses the existing loop without enlarging it; an observer's "internal" interactions (gluon exchange in a proton, virtual photon dressing of an electron) are Type I and do not accumulate as memory. The [Memory-Persistence Tradeoff](/derivations/thermodynamics-ext/memory-persistence-tradeoff) (Proposition 2.3) uses this distinction to reconcile observed particle stability with the structural inevitability of dissolution: stable particles persist because their environment makes Type III interactions vanishingly rare, not because they lack memory in principle. The framework's analog of mass renormalization — re-closure at a nearby bootstrap fixed point — applies precisely to the Type I sector.

**Remark (Type II fusion pauses the constituent's Type III clock).** Definitions 1.1 and 4.3 together imply that interactions are maps between the state spaces of *currently ledgered* observers, not between the historical constituents that fed into a fusion. A Type II composite $\mathcal{O}_C$ presents the single state space $\Sigma_C$ to the rest of the slice; its constituents $\mathcal{O}_k$ have had their factors $\Sigma_k$ pushed through the projection $\pi: \prod_k \Sigma_k \to \Sigma_C$ (Definition 4.3) and are no longer admissible targets for any external interaction. External Type III interactions therefore reach the composite, never the constituent. The [Memory-Persistence Tradeoff](/derivations/thermodynamics-ext/memory-persistence-tradeoff) (Theorem 5.1) develops the consequence: the Type III memory-accumulation rate of any constituent is identically zero for the duration of fusion, the composite carries the ledger, and on decay (reverse Type II, Definition 7.2) the released constituent re-enters the slice with its individual Type III content unchanged from the moment of fusion. This is the structural reason the universe's elementary fermions persist over cosmological timescales: nearly all of them ride paused clocks inside nested Type II composites (quarks in hadrons, nucleons in nuclei, electrons in atoms).

**Remark (Type I as currency, Type III as accounting).** A single physical process is generally described at two distinct levels: Type I describes the *mechanism* — what propagates between observers at the kinematic level — while Type III describes the *accounting* — what irreducibly relational invariant is left at the observer endpoints once the propagation has settled. The two are not alternatives: most physically realized Type III correlations are produced through Type I-mediated traffic. The Type I quanta are the *currency* that crosses between observers; the Type III invariant is the *paired ledger entry* on either side after the transfer clears. Conflating the levels — picturing a propagating quantum as itself a Type III mediator — misreads the classification. By Definition 4.4 the Type III object is the new conserved relational invariant, which is a property of the joint state space of the endpoint observers, not a property of any third object that traveled between them.

**Worked example (atom-emits-photon as multi-level process).** Consider a hydrogen atom $H^*$ in an excited state at site $A$ that emits a photon $\gamma$ which is later absorbed by an atom $H_B$ at site $B$.

*At the emitter, internal Type II reorganization.* The atom $H^*$ is a Type II composite of an electron and a proton, bound at one bootstrap fixed point (the excited orbital). The emission rearranges this composite to a different fixed point (the ground orbital), with the binding-coherence excess released to the slice. This is internal Type II reorganization on $H^*$'s own state space — not yet any cross-observer Type III event with anything else. Compare Proposition 7.3 (decay coherence accounting) for the analogous pattern at the composite-decay scale.

*Between emitter and absorber, Type I phase transfer.* The released quantum $\gamma$ propagates and eventually engages $H_B$. Throughout propagation, the only currency in flight is phase — the photon is a Type I quantum (the existing memory-accumulation remark above already classifies virtual photon dressing of an electron as Type I). No new Type III invariant has yet been registered between any two endpoint observers; there is only mechanism in transit.

*At the absorber, the second internal Type II reorganization.* The Type I quantum is absorbed by $H_B$, which undergoes its own internal Type II reorganization in the opposite direction: re-fusion at a higher-energy fixed point.

*The Type III accounting between emitter and absorber.* What has now changed between $H^*$ (now the de-excited atom $H'$) and $H_B$ (now $H_B^*$) is that their energy histories carry a paired correlation: $H'$ lost exactly the $\hbar \omega$ that $H_B^*$ gained. This is a new conserved quantity on the joint state space $\Sigma_{H'} \times \Sigma_{H_B^*}$ that cannot be reduced to a property of either individually. By Definition 4.4 it is a Type III relational invariant. The invariant is the *receipt* of the transfer — it lives at both endpoints simultaneously, as the framework's analog of which-path information in interferometric setups. The photon does not carry the entanglement; the entanglement is the post-transfer configuration of the two atoms' ledgers.

This three-layer reading — internal Type II reorganization at each endpoint, Type I phase transfer in the middle, Type III invariant left at the endpoints — is the standard pattern for any "interaction-mediated" entanglement event in the framework. The mediating quantum is currency; the lasting correlation is the entry. ([Memory-Persistence Tradeoff](/derivations/thermodynamics-ext/memory-persistence-tradeoff) Proposition 2.3 uses this same separation to explain why mediating-quantum exchange does not by itself accumulate observer memory — only the Type III accounting does.)

### Step 7: Reverse Processes

**Remark.** Coherence conservation (Axiom 1) guarantees that every forward interaction has a well-defined reverse: the coherence accounting works in both directions. Admissible transformations are invertible (Definition 3.1 of [Coherence Conservation](/derivations/axioms/coherence-conservation)), so any coherence-conserving process can in principle run backward. The question is not whether reverses *exist* but what they look like and where the coherence goes.

**Proposition 7.1 (Passage is self-reverse).** *Type I (Passage) is symmetric under reversal. If $T_{12}^{(I)}$ transfers phase $\delta$ from $\mathcal{O}_1$ to $\mathcal{O}_2$, the reverse $(T_{12}^{(I)})^{-1}$ transfers phase $\delta$ from $\mathcal{O}_2$ to $\mathcal{O}_1$. This is itself a Type I interaction.*

*Proof.* The forward map is $(\theta_1, \theta_2) \mapsto (\theta_1 + \delta, \theta_2 - \delta)$. The inverse is $(\theta_1, \theta_2) \mapsto (\theta_1 - \delta, \theta_2 + \delta)$, which has the same form — a phase transfer with $\delta' = -\delta$. Both invariants are preserved in both directions. No new invariant is created. By the exhaustive classification (Theorem 5.1), this is Type I. $\square$

**Definition 7.2 (Decay — Reverse Type II).** A **decay** is the reverse of Fusion: a composite observer $(\Sigma_{12}, I_{12})$ splits into product observers $(\Sigma_1, I_1) \times (\Sigma_2, I_2)$ (or more generally into $n \geq 2$ products). The effective state space undergoes dimension *increase*:

$$(\Sigma_{12}, I_{12}) \to (\Sigma_1, I_1) \times (\Sigma_2, I_2) \quad \text{with } \dim(\Sigma_1) + \dim(\Sigma_2) > \dim(\Sigma_{12})$$

**Proposition 7.3 (Decay coherence accounting).** *In a decay process, the binding coherence of the composite — the difference between the composite's coherence and the coherence of the separated products — must be emitted or redistributed. Formally:*

$$\mathcal{C}_{\text{binding}} \equiv \mathcal{C}(\Sigma_1) + \mathcal{C}(\Sigma_2) - \mathcal{C}(\Sigma_1 : \Sigma_2) - \mathcal{C}(\Sigma_{12})$$

*must satisfy $\mathcal{C}_{\text{binding}} = \mathcal{C}(\text{emitted})$, where the emitted coherence is carried by one or more new observers (radiation).*

*Proof.* Let $\{\mathcal{O}_k\}$ denote the other observers on the Cauchy slice. Before decay, the total coherence on the slice is:

$$C_0 = \mathcal{C}(\Sigma_{12}) + \sum_k \mathcal{C}(\Sigma_k) + \text{(relational terms)}$$

After decay, the products $\Sigma_1, \Sigma_2$ exist as separate subsystems. By subadditivity (C4), $\mathcal{C}(\Sigma_1 \cup \Sigma_2) \leq \mathcal{C}(\Sigma_1) + \mathcal{C}(\Sigma_2)$. The coherence that was structurally internal to the composite — binding the product degrees of freedom into a lower-dimensional manifold — is released when the binding is broken. By Axiom 1, this coherence cannot vanish. It must either:

**(i)** become relational coherence $\mathcal{C}(\Sigma_1 : \Sigma_2)$ between the products (the products emerge correlated), or

**(ii)** be carried away by new observers — typically minimal observers (photons, other radiation).

In practice, both channels operate: the products emerge with some mutual correlation, and the remainder is emitted as radiation. The total coherence is conserved:

$$\mathcal{C}(\Sigma_{12}) = \mathcal{C}(\Sigma_1 \cup \Sigma_2) + \mathcal{C}(\text{emitted})$$

This is why particle decay generically produces radiation: the binding coherence must be carried away by something. $\square$

**Definition 7.4 (Decoherence — Reverse Type III).** A **decoherence** is the reverse of Resonance: a relational invariant $I_{12}$ between observers $\mathcal{O}_1$ and $\mathcal{O}_2$ ceases to be well-defined, while both individual observers persist with their invariants $I_1, I_2$ intact. The relational coherence $\mathcal{C}(\Sigma_1 : \Sigma_2)$ decreases.

**Proposition 7.5 (Decoherence coherence accounting).** *Relational coherence lost between $\mathcal{O}_1$ and $\mathcal{O}_2$ is redistributed into relational coherence with the remaining observers $\{\mathcal{O}_k\}$ on the Cauchy slice. The total relational coherence across all subsystems is conserved. Formally, let $R = \bigcup_k \Sigma_k$ denote the remaining observers. If the relational coherence decreases by $\Delta$:*

$$\mathcal{C}(\Sigma_1 : \Sigma_2) \to \mathcal{C}(\Sigma_1 : \Sigma_2) - \Delta$$

*then the relational coherence with the remaining observers increases by the same amount:*

$$\mathcal{C}(\Sigma_1 : R) + \mathcal{C}(\Sigma_2 : R) \to \mathcal{C}(\Sigma_1 : R) + \mathcal{C}(\Sigma_2 : R) + \Delta$$

*Proof.* The relational coherence $\mathcal{C}(\Sigma_1 : \Sigma_2) = \mathcal{C}(\Sigma_1) + \mathcal{C}(\Sigma_2) - \mathcal{C}(\Sigma_1 \cup \Sigma_2)$ is determined by the coherence values of $\Sigma_1$, $\Sigma_2$, and their union. By Axiom 1(i), admissible transformations preserve all coherence values. If Type I interactions with the remaining observers $\{\mathcal{O}_k\}$ cause $\mathcal{C}(\Sigma_1 \cup \Sigma_2)$ to increase (reducing the relational coherence between $\Sigma_1$ and $\Sigma_2$), then by conservation on the full system $\Sigma_1 \cup \Sigma_2 \cup R$, the coherence of the complement must decrease correspondingly — i.e., the remaining observers become more coherently correlated with $\mathcal{O}_1$ and $\mathcal{O}_2$ individually.

The two-body correlation between $\mathcal{O}_1$ and $\mathcal{O}_2$ is not *lost* but *delocalized* into many-body correlations across the observer network. Decoherence is coherence redistribution, not coherence destruction. $\square$

**Remark.** The physical content of Proposition 7.5 matches the standard quantum decoherence picture (Zurek, 1991; Schlosshauer, 2007), but with an important distinction: standard treatments posit an "environment" as an external bath with unspecified degrees of freedom. Here, the mechanism is explicit — the relational coherence between $\mathcal{O}_1$ and $\mathcal{O}_2$ is redistributed into relational coherence with *specific other observers* $\{\mathcal{O}_k\}$ via Type I interactions. There is no bath or sink; there are only observers exchanging phase.

**Definition 7.6 (Dissolution).** An observer $\mathcal{O} = (\Sigma, I, \mathcal{B})$ **dissolves** when its loop closure condition fails — the dynamics ceases to return to the initial state, and the invariant $I$ is no longer maintained. The observer ceases to exist as a structured entity.

**Proposition 7.7 (Dissolution coherence accounting).** *When an observer dissolves, its coherence $\mathcal{C}(\Sigma) > 0$ is redistributed among the remaining observers on the Cauchy slice. The total coherence $C_0$ is unchanged.*

*Proof.* By Axiom 1(ii) (Cauchy slice conservation), the total coherence on every Cauchy slice is $C_0$. Before dissolution, the observer contributes $\mathcal{C}(\Sigma)$ to this total. After dissolution, the coherence that was structured as the observer is redistributed across the remaining observers on the slice — absorbed into their state spaces and relational coherences. The total $C_0$ is invariant.

Dissolution is not an interaction in the sense of Definition 1.1 (it does not involve two observers exchanging coherence). It is a *failure mode*: the observer's approximate closure parameter $\epsilon$ exceeds the critical value $D_\mathcal{B}$ ([Loop Closure](/derivations/axioms/loop-closure), Proposition 2.3), and the drift carries the state beyond $\partial\mathcal{O}$. $\square$

#### Three-mechanism end-of-existence taxonomy

Definitions 7.2, 7.4, and 7.6 isolate three formally distinct end-of-existence mechanisms. They share the surface feature "an observer or correlation ceases to exist," but their formal definitions, drivers, rate determinants, and accounting are different. Conflating them — particularly conflating Decay with Dissolution — misreads the framework's claims about persistence.

| Mechanism | Formal definition | Primary driver | Rate determinant | Observer fate |
|---|---|---|---|---|
| **Decay** (Type II reverse) | Def 7.2 | Composite at a non-fixed-point configuration with an admissible decay channel | Channel barrier × available phase space | Composite splits into products; binding coherence emitted as radiation (Prop 7.3) |
| **Decoherence** (Type III reverse) | Def 7.4 | Type I traffic with the surrounding observer network | Coupling strength × number of participating third-party observers | Both observers persist; shared relational invariant delocalizes across the network (Prop 7.5) |
| **Dissolution** (loop-closure failure) | Def 7.6 | Cumulative $\Sigma$-perturbation from absorbed Type III invariants exceeds the memory capacity $\mathcal{K}$ | Type III interaction rate × remaining capacity ([Memory-Persistence Tradeoff](/derivations/thermodynamics-ext/memory-persistence-tradeoff), Theorem 4.1) | Observer ceases as a structured entity; coherence redistributes across the slice (Prop 7.7) |

**Remark (Ceiling and floor of observer lifetime).** Dissolution is a universal *ceiling* — every observer with $\dim \Sigma > 1$ and nonzero memory capacity $\mathcal{K} > 0$ has a finite saturation lifetime $\tau_{\text{ceil}} \sim \mathcal{K}/\dot{\mathcal{C}}_{\text{III}}$ (Theorem 4.1 of memory-persistence-tradeoff). The minimal observer is the unique exception ($\mathcal{K} = 0$, no perturbations to saturate). Decay is the typical *floor* — most composites have at least one specific Type II-reverse channel whose timescale is shorter, often by many orders of magnitude, than the saturation ceiling. The actual lifetime is the minimum of the floor and the ceiling, and is dominated by the floor whenever a decay channel exists. The framework's structural inevitability of dissolution does not contradict the empirical fact that observers die of specific proximate causes (Decay) long before reaching their saturation limit (Dissolution); the ceiling sets what is possible at most, the floor sets what happens in fact.

**Worked examples.**

*Decay.* The free neutron has $\tau \approx 880\,\text{s}$ via $n \to p + e^- + \bar{\nu}_e$. This is Definition 7.2: the neutron is a composite (uud-system bound by Type II fusion at the strong scale), the configuration $udd$ is not at a stable bootstrap fixed point against the lower-mass proton channel, and the binding-coherence excess is carried away by the lepton pair. The neutron's saturation lifetime $\tau_{\text{ceil}}$ is set by its memory capacity in the CMB bath (vastly longer than 880 s); the floor — the weak-channel decay — wins by many orders of magnitude. This is the standard pattern for unstable particles.

*Decoherence.* A Bell pair $|\psi^-\rangle = (|01\rangle - |10\rangle)/\sqrt{2}$ between two electrons is a Type III relational invariant (Definition 4.4) on $\Sigma_1 \times \Sigma_2$. Place the pair in a thermal photon bath. Type I (elastic) photon scatters off each electron redistribute relational coherence into $\mathcal{C}(\Sigma_k : R)$ with the bath observers $R$ (Proposition 7.5). The shared invariant decoheres on a timescale $\tau_D \sim \hbar/(g^2 N k_B T)$ depending on coupling $g$ and bath particle count $N$. Both electrons persist throughout — this is Definition 7.4, not Decay or Dissolution. The two-body correlation has been delocalized into many-body correlations with the bath.

*Dissolution.* Consider a hypothetical maximally-protected composite at an exact fixed point (no decay channel) immersed in a low-energy environment (no decoherence partners) and watch its memory budget against rare Type III absorptions. After time $\tau_{\text{ceil}} \sim \mathcal{K}/\dot{\mathcal{C}}_{\text{III}}$, the cumulative perturbation exceeds the boundary diameter $D_\mathcal{B}$, the loop fails to re-close at any nearby fixed point, and the observer dissolves (Definition 7.6, Proposition 7.7). For a stable atom in the CMB bath the timescale is enormous — Type III rates are exponentially suppressed below the relevant inelastic thresholds — but it is finite. This is the universal mode that operates only when the floor channels (Decay, Decoherence) are unavailable or saturated.

The three mechanisms are independent: an observer can be subject to all three, and its actual disappearance is determined by which timescale is shortest in its specific environment. Particle physics is dominated by Decay (every quoted lifetime is a decay timescale); quantum-information experiments are dominated by Decoherence (every quoted decoherence time is mechanism 2); the cosmological dissolution phase ([Cyclic Cosmology](/derivations/cosmology/cyclic-cosmology)) is the regime where mechanism 3 finally dominates because the universe's accelerating expansion has stripped the floor channels.

#### Cycle count $\tau/T$ as observer characterization metric

The framework provides a natural intrinsic clock for any observer: the loop closure period $T$ ([Loop Closure](/derivations/axioms/loop-closure) Theorem 3.1), set by the Compton period $T = 2\pi\hbar / (mc^2)$ for a mass-$m$ observer. The lifetime $\tau$ of the observer against whichever end-of-existence mechanism is shortest, divided by $T$, gives a dimensionless quantity:

$$N_{\text{cycles}}(\mathcal{O}) \equiv \frac{\tau(\mathcal{O})}{T(\mathcal{O})}$$

This is the number of internal loop traversals the observer completes before disappearing. Unlike $\tau$ (which conflates observer-intrinsic structure with environmental factors and unit choice) and unlike $T$ alone (which says nothing about persistence), $N_{\text{cycles}}$ is a framework-intrinsic measure of how observer-like the entity actually is over its existence. An entity that lasts for many internal cycles has time to act as a persistent unit on the observer ledger; an entity that lasts for one or two cycles barely satisfies the loop-closure condition before disappearing.

**Tabulation for selected SM observers.**

| Observer | Mass / energy | $T = 2\pi\hbar/(mc^2)$ | Lifetime $\tau$ | $N_{\text{cycles}} = \tau/T$ |
|---|---:|---:|---:|---:|
| W boson | $\sim 80.4$ GeV | $\sim 5 \times 10^{-26}$ s | $\sim 3 \times 10^{-25}$ s | $\sim 6$ |
| Z boson | $\sim 91.2$ GeV | $\sim 4.5 \times 10^{-26}$ s | $\sim 2.6 \times 10^{-25}$ s | $\sim 6$ |
| Higgs boson | $\sim 125$ GeV | $\sim 3.3 \times 10^{-26}$ s | $\sim 1.6 \times 10^{-22}$ s | $\sim 5{,}000$ |
| Free neutron | $\sim 940$ MeV | $\sim 4.4 \times 10^{-24}$ s | $\sim 880$ s | $\sim 2 \times 10^{26}$ |
| Electron | $\sim 0.511$ MeV | $\sim 8 \times 10^{-21}$ s | $\geq 6.6 \times 10^{28}$ yr | $\geq 2.5 \times 10^{56}$ |
| Proton | $\sim 938$ MeV | $\sim 4.4 \times 10^{-24}$ s | $> 10^{34}$ yr (gravitational $> 10^{64}$ yr) | $> 7 \times 10^{64}$ |

**Three regimes.** The values above cluster naturally into three regimes separated by many orders of magnitude — gaps that the framework reads as structural rather than incidental:

| Regime | Range of $N_{\text{cycles}}$ | Dominant end-of-existence mechanism | SM examples |
|---|---|---|---|
| **Ephemeral** | $N_{\text{cycles}} \lesssim 10^2$ | Decay (mechanism 1, Definition 7.2) — the floor channel is so accessible that the observer barely completes a few internal cycles before splitting | W, Z, top quark, $\Delta$ resonance, most hadronic resonances |
| **Persistent** | $10^2 \lesssim N_{\text{cycles}} \lesssim 10^{40}$ | Decay (mechanism 1) — an admissible Type II reverse channel exists, but the channel barrier or phase-space suppression spreads the lifetime across many internal cycles | Higgs, free neutron, muon, charged pion, unstable nuclei, atomic excited states |
| **Effectively stable** | $N_{\text{cycles}} \gtrsim 10^{40}$ | Dissolution (mechanism 3) — no admissible decay channel; lifetime against the saturation ceiling vastly exceeds the age of the universe in the present epoch | Electron, proton (and bound atoms by Type II clock-pause, [Memory-Persistence Tradeoff](/derivations/thermodynamics-ext/memory-persistence-tradeoff) Theorem 5.1) |

The boundaries are not sharp natural-units thresholds but heuristic separations between regimes where qualitatively different physics dominates. The structural content the framework attaches to them is:

- *Ephemeral observers* sit in the regime where the end-of-existence mechanism (Decay, mechanism 1) operates on a timescale comparable to the loop period itself. The "floor and ceiling" gap (three-mechanism taxonomy above) is essentially closed; the floor decay channel saturates the observer's existence almost immediately.

- *Persistent observers* sit where the floor channel is open but slow. The observer completes many internal cycles before its specific Type II reverse channel fires. This is the regime where most of conventional particle physics lives — every quoted lifetime in the PDG of an unstable particle is a decay timescale in this regime.

- *Effectively stable observers* sit where no floor channel exists at all and the saturation ceiling is the only operative mechanism. By the stability template ([Proton Stability](/derivations/gauge/proton-stability) Step 0, [Electron Stability](/derivations/particles/electron-stability) Step 0), this is the regime of the lightest carrier of an exactly conserved charge.

**Remark (cycle-count distinguishes structurally distinct entities sharing a context).** The W/Z/Higgs cluster illustrates the metric's resolving power. All three are produced at the electroweak scale, all three have masses within a factor of two of each other, all three are bosons. By any of mass, production scale, or spin-statistics, the three look like a coherent family. The cycle-count metric separates them by three orders of magnitude: W and Z each at $N_{\text{cycles}} \sim 6$ (deep in the ephemeral regime), the Higgs at $N_{\text{cycles}} \sim 5{,}000$ (squarely in the persistent regime). Whatever the eventual ontological classification of these particles, the metric records that the W and Z barely satisfy loop closure before disappearing, whereas the Higgs persists across thousands of internal cycles before its decay channels fire. The three live in qualitatively different cycle-count regimes despite their shared electroweak origin, and the metric makes this difference visible directly from observable lifetimes and masses without requiring commitment to deeper structural identifications.

**Connection to the three-mechanism taxonomy.** The cycle-count regime correlates predictively with which mechanism dominates the disappearance:

- An observer in the ephemeral regime is necessarily Decay-dominated: $N_{\text{cycles}} \lesssim 10^2$ rules out the saturation-ceiling timescales achievable by mechanism 3 in any ordinary environment.
- An observer in the persistent regime is Decay-dominated unless its decay channels are environmentally suppressed; in that case Decoherence (mechanism 2) can become operative through external coupling.
- An observer in the effectively stable regime cannot be Decay-dominated by definition (no floor channel exists); its $N_{\text{cycles}}$ is set by the saturation ceiling against the available Type III rate.

The cycle-count metric and the mechanism taxonomy thus offer two complementary classifications of the same observer population. The metric reads off the gap between the floor and the ceiling for each observer; the mechanism taxonomy says which mechanism is operative when the gap collapses.

### Step 8: Thermodynamic Asymmetry

The forward and reverse processes are kinematically symmetric — coherence conservation permits both directions equally. The asymmetry between them is thermodynamic.

Entropy in the framework is inaccessible coherence relative to a particular observer ([Entropy](/derivations/thermodynamics/entropy), Definition 2.1). An interaction that changes the observer configuration — creating $\mathcal{O}_{12}$ where $\mathcal{O}_1$ and $\mathcal{O}_2$ were, or vice versa — changes which observers exist and therefore which entropy assignments are defined. The thermodynamic content of such a transition is what a third observer $\mathcal{O}_3$, persisting across the interaction, can measure before and after.

**Proposition 8.1 (Concentration vs. distribution).** *Let $\mathcal{O}_3$ be an observer that persists across an interaction between $\mathcal{O}_1$ and $\mathcal{O}_2$. Forward processes (Fusion, Resonance) concentrate coherence into fewer independently accessible subsystems from $\mathcal{O}_3$'s perspective. Reverse processes (Decay, Decoherence) distribute coherence across more independently accessible subsystems. The second law ([Entropy](/derivations/thermodynamics/entropy)), applied to what $\mathcal{O}_3$ can measure, determines which direction is thermodynamically favored.*

*Proof sketch.* From $\mathcal{O}_3$'s perspective:

*Fusion (Type II):* Before the interaction, $\mathcal{O}_3$ can independently probe $\mathcal{O}_1$ and $\mathcal{O}_2$ — two subsystems with separate invariants. After fusion, $\mathcal{O}_3$ sees a single composite $\mathcal{O}_{12}$. By strong subadditivity (C5), $S_{\mathcal{O}_3}(\mathcal{O}_{12}) \leq S_{\mathcal{O}_3}(\mathcal{O}_1) + S_{\mathcal{O}_3}(\mathcal{O}_2)$. Fusion concentrates coherence into fewer degrees of freedom.

*Decay (reverse Type II):* A single composite splits into multiple products plus emitted radiation — more independently accessible subsystems. The entropy $\mathcal{O}_3$ assigns to the region increases.

*Resonance (Type III):* Two observers develop a relational invariant $I_{12}$. Information that was distributed across $\mathcal{O}_3$'s separate measurements of $\mathcal{O}_1$ and $\mathcal{O}_2$ concentrates into a two-body correlation accessible only through joint measurement.

*Decoherence (reverse Type III):* The relational invariant dissolves. The two-body correlation redistributes across many-body correlations with other observers — more subsystems carry partial information, and $\mathcal{O}_3$'s accessible entropy increases.

The second law — applied to $\mathcal{O}_3$'s coarse-grained description — favors the reverse processes (Decay, Decoherence, Dissolution) in isolation. Structure-building (Fusion, Resonance) requires an external source of low entropy driving the interaction, consistent with the framework's derivation of the second law from coherence conservation and coarse-graining. $\square$

**Remark.** This asymmetry follows from the entropy derivation ([Entropy](/derivations/thermodynamics/entropy)), which itself follows from coherence conservation (Axiom 1) and the coarse-graining inherent in finite observers. Forward processes concentrate coherence into fewer structures; reverse processes distribute it across more. The tendency of coherence to spread across the observer network, absent a process that actively concentrates it, is what a persistent witness measures as entropy increase.

## Consistency Model

**Theorem 9.1.** *The three interaction types are realized in the product coherence space $\mathcal{H} = S^1 \times S^1$ with observers $\mathcal{O}_1 = (S^1_1, I_1, \mathcal{B}_1)$ and $\mathcal{O}_2 = (S^1_2, I_2, \mathcal{B}_2)$.*

**Type I model:** $T_{12}^{(I)}(\theta_1, \theta_2) = (\theta_1 + \delta, \theta_2 - \delta)$ for small $\delta$. Both invariants ($U(1)$ winding numbers) are preserved. Phase is redistributed: $\delta\theta_1 = +\delta$, $\delta\theta_2 = -\delta$, total $\delta\theta_1 + \delta\theta_2 = 0$. No new invariant is created. ✓

**Type II model:** $\pi: S^1 \times S^1 \to S^1$ defined by $\pi(\theta_1, \theta_2) = \theta_1 + \theta_2$. The joint state space collapses from the torus $T^2$ to a single $S^1$. The composite invariant is the total winding number. Individual invariants are absorbed into the composite. $\dim(\Sigma_{12}) = 1 < 2 = \dim(\Sigma_1) + \dim(\Sigma_2)$. ✓

**Type III model:** $I_{12}(\theta_1, \theta_2) = \cos(\theta_1 - \theta_2)$. This is conserved under joint phase shifts ($\theta_1 \to \theta_1 + \alpha$, $\theta_2 \to \theta_2 + \alpha$) but is irreducible: $\cos(\theta_1 - \theta_2) \neq f(\theta_1) + g(\theta_2)$ for any $f, g$ (since the cosine of a difference is not additively separable). Both individual $S^1$ factors are preserved, and the product structure remains. ✓ $\square$

## Rigor Assessment

**Fully rigorous:**
- Definition 1.1: Interaction defined with explicit conditions (I1) non-separability, (I2) coherence conservation
- Definition 1.2: $2 \times 2$ outcome table is logically exhaustive
- Proposition 2.1: Case D reduces (coherence conservation forces redistribution)
- Proposition 3.1: Asymmetric cases reduce (coherence conservation + invariant tracking)
- Definition 4.1 + Proposition 4.2: Type I defined and phase as unique transferable quantity proved from Noether structure
- Definition 4.3: Type II formalized with dimension-reduction criterion ($\dim \Sigma_{12} < \dim \Sigma_1 + \dim \Sigma_2$)
- Definition 4.4: Type III formalized with product-preservation and irreducibility conditions
- Theorem 5.1: Decision tree is exhaustive, each branch terminates, types are mutually exclusive
- Proposition 6.1: Type I uniqueness (restatement of Proposition 4.2)
- Proposition 7.1: Passage is self-reverse (direct from map inversion)
- Proposition 7.3: Decay coherence accounting (from subadditivity + Axiom 1)
- Proposition 7.5: Decoherence coherence accounting (from conservation on full system)
- Proposition 7.7: Dissolution coherence accounting (from Cauchy slice conservation)
- Proposition 8.1: Thermodynamic asymmetry (proof sketch from entropy derivation + subadditivity)
- Theorem 9.1: Consistency model verified for all three types

**Deferred to later derivations:**
- Wave behavior from Type I (requires Born rule + action/path integral)
- Interaction rates and probabilities (requires Born rule + quantum formalism)
- Energy thresholds for type transitions (requires action-Planck + spacetime geometry)
- Quantitative decoherence rates (requires specific models of observer coupling)

**Assessment:** The classification is logically exhaustive, mathematically clean, and each type is formally distinguished by a precise criterion (invariant survival, dimension reduction, product preservation). The reverse processes (decay, decoherence, dissolution) are shown to be consistent with coherence conservation, with exact accounting for where coherence goes in each case. The thermodynamic asymmetry between forward and reverse processes follows from the entropy derivation. The consistency model verifies all three forward types in the minimal setting.

## Open Gaps

1. **Interaction rates**: The classification is kinematic (what outcomes are possible). The dynamics (which type occurs, with what probability) requires the Born rule and the full quantum formalism.
2. **Energy thresholds**: At what energy does Type I give way to Type II? The threshold likely depends on the coherence content of the observers relative to their relational coherence. Similarly, what determines whether a composite decays vs. remains stable?
3. **Mixed interactions**: The classification assigns a single type per interaction event. Whether superpositions of interaction types are physical (e.g., an interaction that is partly Type I and partly Type III) depends on the quantum formalism — specifically, whether the decision tree branches correspond to orthogonal sectors of the coherence path sum.
4. **Quantitative decoherence rates**: Proposition 7.5 establishes the coherence accounting for decoherence but does not give a rate. The timescale depends on the coupling strength between the pair and the surrounding observers, and on the number of observers participating in the redistribution.
5. **Decay selection rules**: Which composites are stable and which decay? The framework predicts that stability requires exact loop closure of the composite ($\epsilon = 0$), but the conditions under which a composite's closure parameter degrades from zero are not yet formalized.
