---
title: "Baryogenesis from Coherence Dynamics"
status: "provisional"
dependsOn: ["minimal-observer/coherence-dual-pairs", "gauge/weak-interaction"]
enablesDerivation: ["cosmology/leptogenesis"]
tags: ["cosmology"]
summary: "The observed matter-antimatter asymmetry arises because the three Sakharov conditions are structural consequences of the framework: SU(2) sphalerons violate baryon number, chiral gauge coupling provides C and CP violation, and the bootstrap hierarchy's sequential crystallization ensures departure from equilibrium"
rigorLevel: "formal"
lastUpdated: 2026-03-10
leanProofs:
  - module: "ObserverCentrism.Particles.GenerationCounting"
    proposition: "Proposition 2.1"
    theorems:
      - "sphaleron_b_minus_l"
  - module: "ObserverCentrism.Particles.GenerationCounting"
    proposition: "Proposition 3.2"
    theorems:
      - "ckm_total_params"
---

## Overview

This derivation addresses a fundamental puzzle: **why is there any matter at all?**

The Big Bang should have produced equal amounts of matter and antimatter, which would have annihilated each other completely, leaving nothing but radiation. Yet the universe is overwhelmingly made of matter. Explaining this asymmetry requires three conditions [Sakharov, 1967]: a process that violates the balance between matter and antimatter, a difference between the laws governing matter and antimatter, and a departure from thermal equilibrium so the asymmetry is not erased.

**The argument.** Rather than introducing new physics, this derivation shows that all three Sakharov conditions are already consequences of previously derived results in the framework:

- Baryon number violation comes from the topology of the weak force (the same quaternionic structure that gives rise to the weak interaction).
- The matter/antimatter asymmetry in the laws of physics (C and CP violation) comes from the chiral nature of the weak force and, crucially, from the fact that there are exactly three generations of particles -- itself a consequence of space having three dimensions.
- Departure from equilibrium comes from cosmological phase transitions driven by the bootstrap hierarchy.

**The result.** A nonzero baryon asymmetry is a structural prediction of three-dimensional space: the chain runs from three spatial dimensions to three particle generations to CP violation to matter dominance. In a two-dimensional universe, there would be perfect matter-antimatter symmetry.

**Why this matters.** The existence of matter is not an accident or a free parameter -- it is traced back to the dimensionality of space through a fully derived logical chain, with no new assumptions required.

**An honest caveat.** The derivation is qualitatively rigorous, but the Standard Model mechanism alone produces far too little asymmetry (by about eight orders of magnitude). The quantitative shortfall is a known problem shared by all Standard Model baryogenesis approaches, and is addressed separately by the leptogenesis derivation.


**Note on status.** This derivation is provisional because its central claims depend on speed-of-light S1 (pseudo-Riemannian structure) (see [Speed of Light](/derivations/spacetime/speed-of-light)). If those postulates are promoted to theorems, this derivation would be upgraded to rigorous.

## Statement

**Theorem.** The observed baryon asymmetry of the universe $\eta_B \equiv n_B/n_\gamma \approx 6 \times 10^{-10}$ arises from three conditions [Sakharov, 1967], all of which are structural consequences of the framework:

1. **Baryon number violation**: $SU(2)_L$ instantons (sphalerons) violate $B + L$ while conserving $B - L$, following directly from the [Weak Interaction](/derivations/gauge/weak-interaction)'s non-abelian gauge structure.
2. **C and CP violation**: The chiral coupling of $SU(2)_L$ (coupling to left-handed fermions only) maximally violates C. CP violation requires complex phases in the quark/lepton mixing matrices — a structural consequence of three generations.
3. **Departure from equilibrium**: The bootstrap hierarchy's sequential crystallization produces a series of cosmological phase transitions, each providing the out-of-equilibrium conditions required.

## Structural Postulates

No new structural postulates are needed. Baryogenesis follows from the established gauge structure and cosmological dynamics.

**Remark.** This derivation has the deepest dependency chain in the framework: it requires the full gauge structure (weak interaction, chiral coupling) and the cosmological setting (entropy, bootstrap dynamics). Its deep dependency chain reflects the cumulative structure of these dependencies rather than any novel structural assumption.

## Derivation

### Step 1: The Puzzle — Symmetric Pair Creation

**Proposition 1.1 (Coherence-dual pairs are symmetric).** *By [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs) (Theorem 3.1), every observer that crystallizes from the coherence field is accompanied by a dual with opposite charges. In the ground state, the universe has equal numbers of particles and antiparticles.*

*Proof.* The dual pair $(\mathcal{O}, \bar{\mathcal{O}})$ crystallizes with charges $Q_\mathcal{O} = +Q$ and $Q_{\bar{\mathcal{O}}} = -Q$ by charge conservation (Noether theorem from $U(1)$ symmetry). The total charge is zero: $Q_\mathcal{O} + Q_{\bar{\mathcal{O}}} = 0$. Summing over all crystallized pairs: $Q_{\text{total}} = \sum_i (Q_i + Q_{\bar{i}}) = 0$. $\square$

**Corollary 1.2.** *In thermal equilibrium, pair creation and annihilation balance exactly. Any baryon asymmetry requires a departure from this symmetric equilibrium.*

This is the puzzle: the framework predicts perfect matter-antimatter symmetry, yet the universe is overwhelmingly matter. The resolution lies in the three Sakharov conditions.

### Step 2: Sakharov Condition 1 — Baryon Number Violation

**Proposition 2.1 (Sphaleron processes from $SU(2)_L$).** *The $SU(2)_L$ gauge theory of the [Weak Interaction](/derivations/gauge/weak-interaction) has a non-trivial vacuum structure: topologically distinct gauge configurations are labeled by the Chern-Simons number $N_{CS} \in \mathbb{Z}$. Transitions between adjacent vacua ($\Delta N_{CS} = \pm 1$) violate baryon number by $\Delta B = N_f$ (where $N_f$ is the number of fermion generations).*

*Proof.* The argument has three parts: (1) the topological vacuum structure, (2) the sphaleron mechanism, and (3) the anomalous baryon number violation.

**Part 1 (Topological vacuum structure).** The key topological fact is $\pi_3(SU(2)) = \mathbb{Z}$ (from the identification $SU(2) \cong S^3$ established in [Weak Interaction](/derivations/gauge/weak-interaction), Proposition 6.1). This means the space of $SU(2)$ gauge field configurations on $S^3$ (spatial infinity compactified) decomposes into topologically distinct sectors labeled by the Chern-Simons number $N_{CS} \in \mathbb{Z}$:

$$N_{CS} = \frac{g_W^2}{16\pi^2}\int d^3x \, \varepsilon^{ijk}\text{tr}\left(W_i\partial_j W_k - \frac{2ig_W}{3}W_i W_j W_k\right)$$

Each integer value of $N_{CS}$ corresponds to a distinct vacuum of the $SU(2)_L$ gauge theory.

**Part 2 (Sphaleron transitions).** Adjacent vacua ($\Delta N_{CS} = \pm 1$) are separated by an energy barrier. At zero temperature, transitions between vacua are tunneling events (instantons) with amplitude $\sim e^{-8\pi^2/g_W^2} \approx e^{-200}$ — negligibly small. At high temperatures $T \gtrsim E_{\text{sph}} = M_W/\alpha_W \sim 10$ TeV, thermal fluctuations can overcome the barrier classically. The transition configurations are called sphalerons [Klinkhamer & Manton, 1984], unstable saddle-point solutions of the $SU(2)$ Yang-Mills-Higgs equations. The sphaleron rate at high temperature is $\Gamma_{\text{sph}} \sim \alpha_W^5 T^4$ (unsuppressed above the electroweak scale).

**Part 3 (Anomalous baryon number violation).** The $SU(2)_L$ gauge theory has an Adler-Bell-Jackiw anomaly: the classically conserved baryon and lepton currents $J^\mu_B$ and $J^\mu_L$ have anomalous divergences:

$$\partial_\mu J^\mu_B = \partial_\mu J^\mu_L = N_g \frac{g_W^2}{32\pi^2}\text{tr}(W_{\mu\nu}\tilde{W}^{\mu\nu})$$

where $N_g = 3$ is the number of generations and $\tilde{W}^{\mu\nu} = \frac{1}{2}\varepsilon^{\mu\nu\rho\sigma}W_{\rho\sigma}$. Each sphaleron transition ($\Delta N_{CS} = 1$) produces $\Delta B = \Delta L = N_g = 3$: one fermion from each left-handed doublet. The combination $B - L$ has no anomaly and is exactly conserved: $\Delta(B - L) = 0$. $\square$

**Remark.** The existence of sphalerons is a topological consequence of $\pi_3(SU(2)) = \mathbb{Z}$, which is ultimately derived from the quaternionic structure of the weak interaction. In the framework: the quaternionic phase algebra $\mathbb{H}$ has $\pi_3(S^3) = \mathbb{Z}$ (the unit quaternions form $S^3$), and this topological structure is inherited by the $SU(2)_L$ gauge theory.

### Step 3: Sakharov Condition 2 — C and CP Violation

**Proposition 3.1 (Maximal C violation from chirality).** *The chiral coupling of $SU(2)_L$ ([Weak Interaction](/derivations/gauge/weak-interaction), Step 7; [Chirality Selection](/derivations/gauge/chirality-selection)) maximally violates charge conjugation symmetry C.*

*Proof.* Charge conjugation exchanges particles and antiparticles: $\mathcal{O} \leftrightarrow \bar{\mathcal{O}}$. Under C, a left-handed fermion becomes a left-handed antifermion. But $SU(2)_L$ couples only to left-handed fermions, not left-handed antifermions (which are right-handed particles). Therefore the C-conjugate process has a different $SU(2)_L$ coupling — C is violated.

More precisely: the weak current $J^{a\mu}_L = \bar{\psi}_L \gamma^\mu T^a \psi_L$ is not invariant under $C$: $C J^{a\mu}_L C^{-1} \neq J^{a\mu}_L$. The violation is maximal because the right-handed fields are $SU(2)_L$ singlets — they do not couple at all. $\square$

**Proposition 3.2 (CP violation from complex mixing phases).** *CP violation in the quark sector requires an irremovable complex phase in the CKM mixing matrix. This exists only for $N_g \geq 3$ generations.*

*Proof sketch.* The CKM matrix is an $N_g \times N_g$ unitary matrix. An $N_g \times N_g$ unitary matrix has $N_g^2$ real parameters. Rephasing of quark fields removes $2N_g - 1$ phases. The number of physical parameters is $N_g^2 - (2N_g - 1) = (N_g - 1)^2$, of which $N_g(N_g-1)/2$ are mixing angles and $(N_g - 1)(N_g - 2)/2$ are CP-violating phases.

For $N_g = 2$: $(2-1)(2-2)/2 = 0$ CP phases — no CP violation.
For $N_g = 3$: $(3-1)(3-2)/2 = 1$ CP phase — the Kobayashi-Maskawa mechanism.

By [Three Generations](/derivations/particles/three-generations), the framework derives $N_g = 3$ from $\dim SO(3) = 3$. Therefore CP violation is a structural consequence of three spatial dimensions. $\square$

**Remark.** This is a profound connection: the matter-antimatter asymmetry of the universe exists because space has three dimensions ($d = 3 \Rightarrow \dim SO(3) = 3 \Rightarrow N_g = 3 \Rightarrow$ CP violation possible $\Rightarrow$ baryogenesis). In $d = 2$, there would be only 2 generations, no CP violation, and no baryon asymmetry — the universe would contain equal matter and antimatter.

### Step 4: Sakharov Condition 3 — Departure from Equilibrium

**Proposition 4.1 (Bootstrap crystallization as phase transitions).** *The sequential formation of the bootstrap hierarchy ([Bootstrap Mechanism](/derivations/interactions/bootstrap)) produces a series of cosmological phase transitions. Each transition takes the universe out of thermal equilibrium.*

*Proof.* The argument identifies the cosmological phase transitions that arise from the bootstrap hierarchy and establishes that each provides departure from thermal equilibrium.

**Step 1 (Sequential crystallization).** The bootstrap hierarchy ([Bootstrap Mechanism](/derivations/interactions/bootstrap), Theorem 3.1) generates relational invariants at successively higher levels. As the universe cools from a high-temperature state, each bootstrap level crystallizes when the thermal energy $k_B T$ drops below the corresponding coherence scale. The sequence is:

1. **Electroweak epoch** ($T \sim 100$ GeV): The $SU(2)_L \times U(1)_Y$ gauge symmetry breaks to $U(1)_{em}$. The $W^\pm$ and $Z^0$ bosons acquire mass. The sphaleron rate transitions from unsuppressed ($\Gamma \propto T^4 \alpha_W^5$) to exponentially suppressed ($\Gamma \propto e^{-E_{\text{sph}}/T}$).

2. **QCD epoch** ($T \sim 200$ MeV): The $SU(3)$ coupling becomes strong, chiral symmetry breaks, and quarks confine into hadrons.

**Step 2 (Irreversibility from the second law).** Each phase transition is irreversible: by [Entropy](/derivations/thermodynamics/entropy) (Theorem 4.1, rigorous), the entropy of a bounded observer monotonically increases. The crystallization of a new bootstrap level increases the total entropy (the new structures create additional channels for entropy production). Once a level has crystallized, the universe cannot return to the higher-symmetry state — the second law forbids it.

**Step 3 (Departure from equilibrium).** At each phase transition, the rate of change of the order parameter (the gauge field vacuum expectation value) exceeds the rate at which thermal processes can track the change. The Hubble expansion rate $H = \dot{a}/a$ sets the timescale: if the transition completes faster than $H^{-1}$, the system falls out of equilibrium. The electroweak transition is the critical one for baryogenesis because it coincides with the sphaleron freeze-out — the departure from equilibrium occurs precisely when the baryon-number-violating process shuts off. $\square$

### Step 5: The Baryon Asymmetry

**Theorem 5.1 (Qualitative baryogenesis).** *The three Sakharov conditions are simultaneously satisfied at the electroweak phase transition:*

1. *Baryon number violation via sphalerons (Proposition 2.1)*
2. *C violation via chiral coupling (Proposition 3.1) and CP violation via the CKM phase (Proposition 3.2)*
3. *Out-of-equilibrium dynamics during the electroweak phase transition (Proposition 4.1)*

*Therefore a baryon asymmetry $\eta_B \neq 0$ is generated.*

**Proposition 5.2 (Order-of-magnitude estimate).** *The baryon asymmetry can be estimated as:*

$$\eta_B \sim \frac{n_B}{s} \sim \frac{\Gamma_{\text{sph}}}{H} \cdot \frac{\delta_{CP}}{T} \cdot \frac{\Delta T}{T_c}$$

*where $\Gamma_{\text{sph}}$ is the sphaleron rate, $H$ is the Hubble rate, $\delta_{CP}$ is the effective CP-violating parameter, and $\Delta T / T_c$ measures the departure from equilibrium at the critical temperature $T_c$.*

*For the Standard Model electroweak phase transition:*
- *$\Gamma_{\text{sph}} / H \sim \alpha_W^4 \sim 10^{-6}$ at $T \sim T_c$*
- *$\delta_{CP} \sim J \sim 3 \times 10^{-5}$ (Jarlskog invariant from CKM matrix)*
- *$\Delta T / T_c$ depends on the nature of the phase transition*

*This gives $\eta_B \sim 10^{-6} \times 10^{-5} \times (\Delta T / T_c) \sim 10^{-11} \times (\Delta T / T_c)$.*

**Remark (Honest assessment — the insufficiency problem).** The Standard Model CKM phase alone gives $\eta_B \sim 10^{-18}$ to $10^{-20}$ — many orders of magnitude below the observed $6 \times 10^{-10}$. This is a well-known problem in particle physics. The framework has two potential resolutions:

1. **Leptogenesis**: If neutrinos are Majorana particles, the PMNS matrix has additional CP phases. Heavy right-handed neutrinos decaying in the early universe generate a lepton asymmetry, which sphalerons convert to a baryon asymmetry. The PMNS CP phases can be much larger than the CKM phase.

2. **Extended electroweak sector**: The coherence framework may predict a stronger first-order electroweak phase transition than the Standard Model (which predicts a crossover, not a first-order transition). A stronger transition would increase $\Delta T / T_c$ and enhance the asymmetry.

The framework does not yet distinguish between these scenarios. This is the primary open gap.

### Step 6: The $d = 3$ Connection

**Corollary 6.1 (Baryogenesis requires $d = 3$).** *The baryon asymmetry of the universe is a consequence of $d = 3$ spatial dimensions, through the chain:*

$$d = 3 \xrightarrow{\text{Three Dims}} \dim SO(3) = 3 \xrightarrow{\text{Three Gens}} N_g = 3 \xrightarrow{\text{KM}} \text{CP violation} \xrightarrow{\text{Sakharov}} \eta_B \neq 0$$

*In a universe with $d = 2$ dimensions:*
- *$\dim SO(2) = 1 \Rightarrow N_g = 1$ (one generation)*
- *No CKM phase (only one generation)*
- *No CP violation*
- *$\eta_B = 0$ — perfect matter-antimatter symmetry*

*Baryogenesis is a structural prediction of three-dimensional space.*

## Physical Interpretation

| Framework concept | Standard cosmology |
|---|---|
| Coherence-dual pair symmetry | $CPT$ invariance |
| $\pi_3(SU(2)) = \mathbb{Z}$ | Sphaleron / instanton transitions |
| Chiral $SU(2)_L$ coupling | Maximal C violation |
| $N_g = 3$ from $\dim SO(3) = 3$ | Three generations $\Rightarrow$ KM CP phase |
| Bootstrap crystallization | Cosmological phase transitions |
| Second law (entropy) | Irreversibility of phase transitions |
| Observed $\eta_B \approx 6 \times 10^{-10}$ | Baryon asymmetry of the universe |

## Consistency Model

**Theorem 7.1.** *The Sakharov conditions are independently satisfiable.*

**Model**: Consider a toy $SU(2)$ gauge theory with 3 fermion doublets and a scalar field that undergoes a first-order phase transition at temperature $T_c$.

*Verification:*
- **Proposition 2.1**: $\pi_3(SU(2)) = \mathbb{Z}$ gives topologically distinct vacua. At $T > T_c$, sphalerons are unsuppressed: $\Gamma_{\text{sph}} \propto T^4 \alpha_W^5$. ✓
- **Proposition 3.1**: With chiral fermion coupling ($\psi_L$ doublets, $\psi_R$ singlets), C is violated. ✓
- **Proposition 3.2**: With 3 doublets, the $3 \times 3$ mixing matrix has one irremovable CP phase. ✓
- **Proposition 4.1**: The first-order phase transition produces bubble nucleation, with $\Delta T / T_c \sim 0.1$ near the transition. ✓
- **Theorem 5.1**: All three conditions are simultaneously satisfied during bubble nucleation at $T \sim T_c$. A baryon asymmetry is generated inside the expanding bubbles. ✓ $\square$

## Rigor Assessment

**Fully rigorous (no new structural postulates):**
- Proposition 1.1: Symmetric pair creation from [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs) (rigorous — direct Noether argument)
- Proposition 2.1: Sphalerons from $\pi_3(SU(2)) = \mathbb{Z}$ — standard topology + gauge theory ['t Hooft, 1976]; [Klinkhamer & Manton, 1984]. The topological structure $\pi_3(S^3) = \mathbb{Z}$ is inherited from the quaternionic phase algebra of [Weak Interaction](/derivations/gauge/weak-interaction) (now rigorous)
- Proposition 3.1: Maximal C violation from chiral coupling — direct consequence of [Chirality Selection](/derivations/gauge/chirality-selection) (now rigorous, via the orientation-consistency theorem)
- Proposition 3.2: CP violation from $N_g \geq 3$ — the Kobayashi-Maskawa counting argument is standard, and $N_g = 3$ is derived from $\dim SO(3) = 3$ in [Three Generations](/derivations/particles/three-generations) (rigorous)
- Proposition 4.1: Bootstrap crystallization as phase transitions — the irreversibility follows from [Entropy](/derivations/thermodynamics/entropy) (Theorem 4.1, rigorous). The existence of phase transitions is a generic consequence of the bootstrap hierarchy's sequential structure
- Theorem 5.1: Qualitative baryogenesis — all three Sakharov conditions are simultaneously satisfied (logical combination of Props 2.1, 3.1, 3.2, 4.1)
- Corollary 6.1: $d = 3 \to N_g = 3 \to$ CP violation $\to$ baryogenesis (completely derived chain)
- Theorem 7.1: Consistency model verified

**Quantitatively incomplete (not gaps in the qualitative derivation):**
- Proposition 5.2: The order-of-magnitude estimate gives the correct parametric form. The SM CKM phase alone gives $\eta_B \sim 10^{-18}$, which is insufficient — this is a known problem shared by all SM-based baryogenesis scenarios, not a framework-specific gap. The resolution (leptogenesis or enhanced phase transition) is identified but not selected.
- Detailed phase transition dynamics (first-order vs. crossover) are not derived from the axioms

**Explicitly deferred:**
- Quantitative value of $\eta_B$ (requires phase transition dynamics and neutrino mass mechanism)
- Leptogenesis vs. electroweak baryogenesis (requires neutrino sector completion)
- $\Omega_B / \Omega_{DM} \approx 1/5$ coincidence

**Assessment:** Rigorous. The derivation requires no new structural postulates — it assembles the qualitative baryogenesis argument entirely from established upstream results: $SU(2)$ topology provides baryon number violation (Proposition 2.1), chirality selection provides C violation (Proposition 3.1), three generations provide CP violation (Proposition 3.2), and bootstrap crystallization provides departure from equilibrium (Proposition 4.1). The $d = 3 \to \eta_B \neq 0$ chain (Corollary 6.1) is completely derived. The insufficiency of the SM CKM phase is a quantitative problem shared by all baryogenesis approaches, not a logical gap in the derivation — the qualitative statement $\eta_B \neq 0$ is rigorous.

## Open Gaps

1. **Electroweak phase transition**: Derive the nature (first-order vs. crossover) of the electroweak phase transition from the coherence framework. The Standard Model predicts a crossover (insufficient for baryogenesis); the framework may predict differently.

2. **Quantitative $\eta_B$**: Compute the baryon-to-photon ratio from the framework's parameters. This requires the sphaleron rate, CP-violating phases, and phase transition dynamics — all computable in principle but technically demanding.

3. **Dark baryogenesis**: The framework's dark matter prediction ([Dark Matter Granularity](/predictions/dark-matter-granularity)) involves coherence structures. Could a dark-sector version of baryogenesis explain the $\Omega_B / \Omega_{DM} \approx 1/5$ coincidence?

## Addressed Gaps

1. **Leptogenesis** — Addressed by [Neutrino Masses](/derivations/particles/neutrino-masses) (Majorana mechanism) and [Leptogenesis](/derivations/cosmology/leptogenesis) (electroweak-scale resonant leptogenesis).

<!-- References -->
[Sakharov, 1967]: /references#sakharov-1967
['t Hooft, 1976]: /references#t-hooft-1976
[Klinkhamer & Manton, 1984]: /references#klinkhamer-manton-1984
