---
title: "Electron Stability from Charge Conservation and Lepton Mass Ordering"
status: "provisional"
dependsOn: ["interactions/three-types", "thermodynamics-ext/memory-persistence-tradeoff", "particles/mass-hierarchy", "gauge/electromagnetism", "gauge/standard-model-group"]
enablesDerivation: []
tags: ["particles"]
summary: "The electron is decay-immune: every conceivable Type II reverse channel is forbidden by exact electric-charge conservation combined with the electron being the lightest electrically charged particle. The lifetime is dissolution-limited only, with a saturation ceiling vastly exceeding the age of the universe in the present epoch."
rigorLevel: "formal"
lastUpdated: 2026-04-25
---

## Overview

This derivation addresses a question whose answer is so familiar from the Standard Model that the underlying structural reason can be missed: **why is the electron stable?**

The Standard Model gives the answer in two lines: electric charge is exactly conserved by all gauge interactions, and the electron is the lightest electrically charged particle. The conjunction means every kinematically and dynamically allowed final state for an electron decay would either violate charge conservation or be heavier than the parent — both are forbidden. The electron is therefore stable against any local decay channel.

The framework reproduces this answer and places it in a sharper structural context. The Standard Model treats charge conservation as an unviolated symmetry but does not explain *why* it is exact rather than approximate. The framework's gauge group derivation forces $U(1)_{\text{em}}$ to be the unique abelian factor in the complete gauge group, with no embedding into a larger structure that could break charge conservation at high energies. There is no GUT-scale mechanism for charge violation in the framework, and there is therefore no high-energy regime where the electron's stability fails.

**The argument.** The electron's stability follows from the shared stability template ([Three Interaction Types](/derivations/interactions/three-types) §7, [Memory-Persistence Tradeoff](/derivations/thermodynamics-ext/memory-persistence-tradeoff) Theorem 4.1):

1. **Identify all candidate Type II reverse channels.** Any decay must produce a set of product observers with total electric charge $-e$, total lepton number conserved (mod gauge anomalies), and total energy at most the electron rest energy $m_e c^2 \approx 0.511$ MeV.
2. **Show every channel is forbidden.** Charge conservation eliminates all-neutral final states. The lightest-charged-lepton condition eliminates all charged-lepton final states. The remaining options (charged hadrons, exotic states) are all heavier than the electron.
3. **Apply the dissolution-limited template.** With no admissible decay channel, the electron's lifetime is bounded above only by the saturation ceiling $\tau_{\text{ceil}} = \mathcal{K}_e / \dot{\mathcal{C}}_{\text{III}}(e)$.

**The result.** The electron is decay-immune. Its lifetime in the present cosmological epoch is set by the Type III interaction rate in its environment (overwhelmingly the CMB bath, where Type III rates are exponentially suppressed below the inelastic Compton threshold $\hbar\omega \gtrsim m_e c^2$). The current experimental lower bound $\tau_e > 6.6 \times 10^{28}$ yr (Borexino, 2015, on $e^- \to \nu_e + \gamma$) is consistent with both the framework prediction and the Standard Model — and indeed, the framework's prediction is that the channel Borexino searched for (which violates charge conservation) does not exist at any rate.

**Why this matters.** The electron and the proton are the two stable charged building blocks of all observable matter. Their stability — together with the Type-II clock-pause that protects them inside atoms ([Memory-Persistence Tradeoff](/derivations/thermodynamics-ext/memory-persistence-tradeoff) Theorem 5.1) — is the structural reason matter persists over cosmological timescales. Both particles instantiate the same shared template: no admissible Type II reverse channel, dissolution-limited only, with the floor far below the ceiling.

**An honest caveat.** The argument is structurally airtight given the framework's gauge group derivation and the lepton mass ordering, but it does not predict $\tau_e$ quantitatively beyond the dimensional scaling of the saturation ceiling. The status is provisional because the lepton mass ordering depends on [Mass Hierarchy](/derivations/particles/mass-hierarchy) S1 (tunneling-crystallization correspondence), which remains a structural postulate. If that postulate is promoted to a theorem, this derivation upgrades to derived.

## Statement

**Theorem.** The electron is absolutely decay-immune in the framework's gauge structure: no Type II reverse channel is admissible. Every conceivable decay product set is forbidden by exact electric-charge conservation combined with the electron being the lightest electrically charged particle. The electron's lifetime is therefore dissolution-limited only ([Three Interaction Types](/derivations/interactions/three-types) §7 ceiling/floor framing), with a saturation ceiling $\tau_{\text{ceil}} = \mathcal{K}_e / \dot{\mathcal{C}}_{\text{III}}(e) \gg 10^{30}$ yr in the present cosmological environment. This matches and refines the Standard Model conclusion: the framework derives the gauge structure that enforces exact charge conservation, rather than positing it.

## Derivation

### Step 0: Stability Template

The electron's persistence is an instance of the shared structural template that applies to any observer with no accessible decay channel ([Three Interaction Types](/derivations/interactions/three-types) §7 three-mechanism taxonomy):

> **Stability template.** *An observer is decay-immune (mechanism 1, Definition 7.2 of [Three Interaction Types](/derivations/interactions/three-types)) if no Type II reverse channel is admissible — i.e., every possible split into product observers is forbidden by conservation laws or kinematics. A decay-immune observer is dissolution-limited only: its lifetime is bounded above by the saturation timescale $\tau_{\text{ceil}} = \mathcal{K}/\dot{\mathcal{C}}_{\text{III}}$ ([Memory-Persistence Tradeoff](/derivations/thermodynamics-ext/memory-persistence-tradeoff) Theorem 4.1), which is the universal ceiling. In a low-energy environment that suppresses Type III interactions, $\tau_{\text{ceil}}$ may vastly exceed the age of the universe, in which case the observer is practically immortal.*

This is the same template instantiated by [Proton Stability](/derivations/gauge/proton-stability) (Step 0). The two stable charged leptons-or-baryons that compose ordinary matter (the electron and the proton) both occupy the no-decay-channel boundary of the template, for structurally analogous reasons (the lightest carrier of an exactly conserved charge cannot decay).

The remaining steps establish the template's premises for the electron specifically: enumerate all candidate Type II reverse channels (Step 1), show each is forbidden (Step 2), and conclude dissolution-limited only (Step 3).

### Step 1: Candidate Type II Reverse Channels

**Definition 1.1 (Admissibility).** A Type II reverse channel for the electron $e^-$ is a transition $e^- \to X_1 + X_2 + \cdots + X_n$ ($n \geq 1$) into product observers $\{X_k\}$ on the Cauchy slice ([Three Interaction Types](/derivations/interactions/three-types) Definition 7.2). The channel is *admissible* iff:

**(K)** Kinematics: $\sum_k m_k c^2 \leq m_e c^2 \approx 0.511$ MeV (the products' rest energy does not exceed the electron rest energy).

**(C)** Conservation: every locally conserved quantum number balances — electric charge $Q$, energy-momentum, angular momentum, lepton-family numbers (modulo gauge anomalies). In the framework these conservation laws follow from the gauge group structure ([Standard Model Gauge Group](/derivations/gauge/standard-model-group)) and the relational invariant content of the electron's state space.

**Proposition 1.2 (Enumeration of candidate final states).** *Every candidate final-state set $\{X_k\}$ satisfying (K) belongs to one of three exclusive classes:*

*(a) All-neutral final state: every $X_k$ has $Q(X_k) = 0$.*

*(b) Final state containing at least one charged lepton.*

*(c) Final state containing at least one charged non-lepton (charged hadron, charged composite, or hypothetical exotic with $Q \neq 0$).*

*Proof.* By (K), $\sum_k m_k c^2 \leq 0.511$ MeV. By (C), $\sum_k Q(X_k) = -e$. The classes are exhaustive: if no $X_k$ is charged, the channel is in (a) — but then $\sum Q = 0 \neq -e$, so (a) is automatically eliminated by (C) and is listed only as a logical placeholder. Otherwise at least one $X_k$ carries charge, and is either a lepton (b) or a non-lepton (c). $\square$

The remaining task is to show that (b) and (c) are also empty under the framework's gauge structure and mass ordering.

### Step 2: Every Channel is Forbidden

**Theorem 2.1 (Charge conservation excludes all-neutral channels).** *Class (a) of Proposition 1.2 contains no admissible channel.*

*Proof.* Electric charge is the Noether charge of the $U(1)_{\text{em}}$ gauge factor in the framework's complete gauge group $G_{\text{SM}} = U(1) \times SU(2) \times SU(3)$ ([Standard Model Gauge Group](/derivations/gauge/standard-model-group) Theorem 2.1, [Electromagnetism](/derivations/gauge/electromagnetism)). Charge is exactly conserved by every gauge interaction:

- $U(1)_{\text{em}}$ couples to charge and conserves it by gauge invariance.
- $SU(2)_L$ acts on weak doublets whose total charge balances per vertex.
- $SU(3)_c$ is colour-blind on charge.

By Theorem 1.1 of [Proton Stability](/derivations/gauge/proton-stability) (gauge group completeness), no additional gauge factor exists to mediate charge violation. The Hurwitz ceiling on division algebras forbids embedding $G_{\text{SM}}$ in a simple GUT group containing charge-violating bosons. Therefore total charge is conserved by every admissible interaction map, and the electron's $Q = -e$ cannot become $\sum Q(X_k) = 0$ under any decay. Class (a) is empty. $\square$

**Theorem 2.2 (Lightest-charged-lepton condition excludes charged-lepton channels).** *Class (b) of Proposition 1.2 contains no admissible channel.*

*Proof.* The known charged leptons are $e^-, \mu^-, \tau^-$ with masses $m_e \approx 0.511$ MeV, $m_\mu \approx 105.66$ MeV, $m_\tau \approx 1776.86$ MeV. The framework's mass-hierarchy derivation ([Mass Hierarchy](/derivations/particles/mass-hierarchy)) places the electron at the lightest crystallization fixed point in the lepton tower, with $m_\mu / m_e \sim 207$ and $m_\tau / m_e \sim 3477$ as ratios fixed by the bootstrap level structure.

Any final state in class (b) must contain at least one of $\{\mu^\pm, \tau^\pm\}$ (an electron in the final state would just relabel the original electron, not represent a decay). Whichever charged lepton appears, $m_X c^2 \gg m_e c^2$, violating (K). Antiparticles have the same mass as their particles by [CPT Theorem](/derivations/particles/cpt-theorem), so $e^+$ in the final state requires charge balance with another charge-$-2e$ state, which does not exist among elementary particles. Class (b) is empty. $\square$

**Theorem 2.3 (Mass-gap condition excludes charged-non-lepton channels).** *Class (c) of Proposition 1.2 contains no admissible channel.*

*Proof.* The lightest electrically charged non-lepton known to exist is the charged pion $\pi^\pm$ with $m_{\pi} c^2 \approx 139.57$ MeV. All charged hadrons and charged composites have masses substantially exceeding $m_e c^2$. The framework forbids any hypothetical lighter charged particle: such a particle would have to occupy a bootstrap level lighter than the electron, contradicting the mass-hierarchy ordering that places the electron at the lightest charged fixed point in the lepton tower (and below all hadronic states because the hadronic confinement scale $\Lambda_{\text{QCD}} \gg m_e$). Therefore every $X \in$ class (c) has $m_X c^2 > m_e c^2$, violating (K). Class (c) is empty. $\square$

**Corollary 2.4 (Decay-immunity).** *Combining Proposition 1.2 with Theorems 2.1–2.3: every admissibility class is empty. No Type II reverse channel for the electron is admissible.*

### Step 3: Dissolution-Limited Lifetime

**Theorem 3.1 (Electron lifetime is dissolution-limited).** *The electron has no Decay (mechanism 1) channel; the only admissible end-of-existence mechanism is Dissolution (mechanism 3, Definition 7.6 of [Three Interaction Types](/derivations/interactions/three-types)). The lifetime is bounded:*

$$\tau_e \geq \tau_{\text{ceil}}(e) = \frac{\mathcal{K}_e}{\dot{\mathcal{C}}_{\text{III}}(e)}$$

*where $\mathcal{K}_e$ is the electron's memory capacity (Definition 3.1 of [Memory-Persistence Tradeoff](/derivations/thermodynamics-ext/memory-persistence-tradeoff)) and $\dot{\mathcal{C}}_{\text{III}}(e)$ is the Type III interaction rate in the electron's environment.*

*Proof.* By Corollary 2.4, no decay-channel rate contributes to the electron's disappearance. Decoherence (mechanism 2) does not destroy the electron — it redistributes shared invariants without dissolving either party (Proposition 7.5 of [Three Interaction Types](/derivations/interactions/three-types)). Only dissolution remains; its timescale is the saturation bound from Theorem 4.1 of [Memory-Persistence Tradeoff](/derivations/thermodynamics-ext/memory-persistence-tradeoff). $\square$

**Proposition 3.2 (Type III rate in the present epoch).** *In the present cosmological environment, $\dot{\mathcal{C}}_{\text{III}}(e)$ for free electrons is dominated by inelastic Compton scattering, which requires $\hbar\omega \gtrsim m_e c^2$. The CMB bath has $T \approx 2.7$ K, so the typical photon energy $k_B T \sim 2 \times 10^{-4}$ eV is roughly $10^{10}$ times below the inelastic threshold. The effective Type III rate is exponentially suppressed by the Boltzmann factor $\exp(-m_e c^2 / k_B T)$, which for the CMB is $\exp(-2 \times 10^{9})$ — operationally zero.*

*Proof sketch.* Compton scattering below the inelastic threshold is Type I (elastic phase exchange — Proposition 2.3 of [Memory-Persistence Tradeoff](/derivations/thermodynamics-ext/memory-persistence-tradeoff)), not Type III, and does not contribute to memory accumulation. Above threshold, pair-production-type channels open and contribute to Type III, but the Boltzmann suppression makes the effective rate negligible in the CMB bath. Higher-rate environments (stellar cores, cosmic ray showers, accelerator beams) remove this suppression, but free electrons in the bulk of the universe are well-modeled by the CMB-only estimate. $\square$

**Corollary 3.3 (Practical immortality in the present epoch).** *With $\dot{\mathcal{C}}_{\text{III}}(e)$ effectively zero in the bulk environment, $\tau_{\text{ceil}}(e)$ vastly exceeds the age of the universe. The electron is practically immortal in the present cosmological epoch. The lifetime is bounded only by the eventual cosmological evolution that eliminates the low-energy environment (the dissolution phase of [Cyclic Cosmology](/derivations/cosmology/cyclic-cosmology) — and even there, it is the geometric collapse, not the electron itself, that provides the eventual dissolution mechanism).*

### Step 4: Connection to the Three-Mechanism Taxonomy

The three-mechanism taxonomy of [Three Interaction Types](/derivations/interactions/three-types) §7 distinguishes Decay (mechanism 1, Type II reverse), Decoherence (mechanism 2, Type III reverse), and Dissolution (mechanism 3, loop-closure failure). The electron's status with respect to each:

| Mechanism | Available to free electron? | Observed in nature? |
|---|---|---|
| Decay (Type II reverse) | **No** (Corollary 2.4 — no admissible channel) | Never observed; current bound $\tau_e > 6.6 \times 10^{28}$ yr |
| Decoherence (Type III reverse) | Yes — environmental decoherence acts on electron-environment correlations, but does not destroy the electron | Routine in quantum-information experiments |
| Dissolution (saturation) | Yes — universal ceiling, but practically infinite in present epoch (Corollary 3.3) | Not observed (timescale far exceeds Hubble time) |

The shared template used by the proton ([Proton Stability](/derivations/gauge/proton-stability) Step 0) and the electron is the same: no Type II reverse channel exists, so the lifetime is dissolution-limited only. The structural reason differs in detail — the proton's protection comes from baryon-number conservation plus its position as the lightest baryon, the electron's from charge conservation plus its position as the lightest charged lepton — but the template is identical. Both are observers at the *no-decay-channel boundary* of the template; their lifetimes are measured against the saturation ceiling, not a decay floor.

## Consistency Check

**Direct experimental constraints.** Borexino (2015) searched for $e^- \to \nu_e + \gamma$ and bounded the rate at $\tau_e > 6.6 \times 10^{28}$ yr. This channel violates electric-charge conservation (the final state has $Q = 0$, the initial state $Q = -e$). The framework's prediction is that this channel does not exist at any rate, consistent with the null observation. $\checkmark$

Other searches ($e^- \to \nu_e \nu_e \bar{\nu}_e$, etc.) similarly constrain charge-violating channels and similarly find nothing, also consistent. $\checkmark$

**Consistency with the proton stability bound.** The electron and proton are the two stable charged building blocks of ordinary matter. Both are decay-immune by the same template. The combined stability of $e^-$ and $p$ ensures hydrogen — and therefore all higher chemistry — is structurally protected over cosmological timescales. $\checkmark$

**Consistency with bound-electron persistence.** Per [Memory-Persistence Tradeoff](/derivations/thermodynamics-ext/memory-persistence-tradeoff) Theorem 5.1, an electron bound in an atom is doubly protected: its individual Type III clock is paused (Type II clock-pause), and the atom inherits the electron's gauge-protected stability. Atoms are stable over cosmological timescales because both the proton and the electron are individually stable, and the atomic binding pauses both individual clocks. $\checkmark$

**Consistency with positron stability.** By [CPT Theorem](/derivations/particles/cpt-theorem), the positron $e^+$ has the same lifetime as the electron in vacuum. The same argument applies with all charges reversed: the positron is the lightest positively charged lepton, and any decay would violate charge conservation. $\checkmark$ (In matter-dominated environments the positron annihilates with an electron via Type II fusion at electromagnetic scale — but that is not decay; the disappearance of an isolated positron in the cosmic plasma is fusion-limited, not decay-limited.)

## Rigor Assessment

**Fully rigorous given upstream postulates:**
- Definition 1.1: Admissibility (kinematic + conservation, standard)
- Proposition 1.2: Three-class enumeration (exhaustive, as proved)
- Theorem 2.1: Charge conservation excludes all-neutral channels (from gauge group completeness, Theorem 1.1 of [Proton Stability](/derivations/gauge/proton-stability))
- Theorem 2.2: Lepton mass ordering excludes charged-lepton channels (from [Mass Hierarchy](/derivations/particles/mass-hierarchy) — under S1)
- Theorem 2.3: Mass-gap condition excludes charged-non-lepton channels (from mass hierarchy and known particle masses)
- Corollary 2.4: Decay-immunity (combination)
- Theorem 3.1: Dissolution-limited lifetime (from three-mechanism taxonomy and decay-immunity)
- Proposition 3.2: Type III rate in present epoch (standard kinematic + Boltzmann argument)
- Corollary 3.3: Practical immortality (combination)

**Postulate dependence:** Like [Proton Stability](/derivations/gauge/proton-stability), this derivation inherits provisional status from upstream dependence on [Mass Hierarchy](/derivations/particles/mass-hierarchy) S1 (tunneling-crystallization correspondence). The lepton mass ordering used in Theorem 2.2 follows from the bootstrap-level structure under S1; if S1 is promoted to a theorem, this derivation upgrades to derived. The pure gauge-structure portion (Theorem 2.1) is rigorous independently of any structural postulate.

**Assessment.** The derivation is structurally airtight given the gauge group derivation and lepton mass ordering. It does not predict $\tau_e$ quantitatively beyond the dimensional scaling of the saturation ceiling, because the present-epoch Type III rate for free electrons is dominated by environmental factors rather than intrinsic electron physics. The qualitative prediction — no electron decay at any rate — is sharp and falsifiable.

## Open Gaps

1. **Quantitative saturation ceiling for the electron.** Computing $\tau_{\text{ceil}}(e) = \mathcal{K}_e / \dot{\mathcal{C}}_{\text{III}}(e)$ as a precise number requires the perturbation theory of bootstrap fixed points under relational-invariant absorption — the same gap flagged in [Memory-Persistence Tradeoff](/derivations/thermodynamics-ext/memory-persistence-tradeoff) Open Gap 1. The qualitative result (vastly larger than the age of the universe in the present epoch) is robust; the precise numerical value is not yet computable.

2. **Charge violation by gravitational effects.** Like proton decay, electron decay through non-perturbative gravitational topology change (virtual black holes, wormholes) would be the only channel consistent with the framework's gauge structure. The dimensional estimate $\tau_e^{\text{grav}} \sim M_P^4 / m_e^5 \approx 10^{84}$ yr (using $m_e$ in place of $m_p$) is far beyond any conceivable observation. Whether such a channel actually exists depends on the unsettled question of whether gravity respects the global symmetries of the gauge sector — a question that interacts with the [Information Paradox](/derivations/holography/information-paradox) resolution.

3. **Status promotion conditional on Mass Hierarchy S1.** Theorem 2.2's lepton mass ordering is the only step that depends on a structural postulate. If [Mass Hierarchy](/derivations/particles/mass-hierarchy) S1 is promoted (the irreducible content is the tunneling-crystallization identification), this derivation upgrades to derived alongside [Proton Stability](/derivations/gauge/proton-stability).
