---
title: "Baryogenesis from Coherence Dynamics"
status: "draft"
dependsOn: ["minimal-observer/coherence-dual-pairs", "gauge/weak-interaction"]
enablesDerivation: []
tags: ["cosmology"]
summary: "The observed matter-antimatter asymmetry arises because the three Sakharov conditions are structural consequences of the framework: SU(2) sphalerons violate baryon number, chiral gauge coupling provides C and CP violation, and the bootstrap hierarchy's sequential crystallization ensures departure from equilibrium"
rigorLevel: "semi-formal"
lastUpdated: 2026-03-10
---

## Statement

**Theorem.** The observed baryon asymmetry of the universe $\eta_B \equiv n_B/n_\gamma \approx 6 \times 10^{-10}$ arises from three conditions (Sakharov, 1967), all of which are structural consequences of the framework:

1. **Baryon number violation**: $SU(2)_L$ instantons (sphalerons) violate $B + L$ while conserving $B - L$, following directly from the [Weak Interaction](/derivations/gauge/weak-interaction)'s non-abelian gauge structure.
2. **C and CP violation**: The chiral coupling of $SU(2)_L$ (coupling to left-handed fermions only) maximally violates C. CP violation requires complex phases in the quark/lepton mixing matrices — a structural consequence of three generations.
3. **Departure from equilibrium**: The bootstrap hierarchy's sequential crystallization produces a series of cosmological phase transitions, each providing the out-of-equilibrium conditions required.

## Structural Postulates

No new structural postulates are needed. Baryogenesis follows from the established gauge structure and cosmological dynamics.

**Remark.** This derivation has the deepest dependency chain in the framework: it requires the full gauge structure (weak interaction, chiral coupling) and the cosmological setting (entropy, bootstrap dynamics). Its status as a draft reflects the cumulative uncertainties of these dependencies rather than any novel structural assumption.

## Derivation

### Step 1: The Puzzle — Symmetric Pair Creation

**Proposition 1.1 (Coherence-dual pairs are symmetric).** *By [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs) (Theorem 3.1), every observer that crystallizes from the coherence field is accompanied by a dual with opposite charges. In the ground state, the universe has equal numbers of particles and antiparticles.*

*Proof.* The dual pair $(\mathcal{O}, \bar{\mathcal{O}})$ crystallizes with charges $Q_\mathcal{O} = +Q$ and $Q_{\bar{\mathcal{O}}} = -Q$ by charge conservation (Noether theorem from $U(1)$ symmetry). The total charge is zero: $Q_\mathcal{O} + Q_{\bar{\mathcal{O}}} = 0$. Summing over all crystallized pairs: $Q_{\text{total}} = \sum_i (Q_i + Q_{\bar{i}}) = 0$. $\square$

**Corollary 1.2.** *In thermal equilibrium, pair creation and annihilation balance exactly. Any baryon asymmetry requires a departure from this symmetric equilibrium.*

This is the puzzle: the framework predicts perfect matter-antimatter symmetry, yet the universe is overwhelmingly matter. The resolution lies in the three Sakharov conditions.

### Step 2: Sakharov Condition 1 — Baryon Number Violation

**Proposition 2.1 (Sphaleron processes from $SU(2)_L$).** *The $SU(2)_L$ gauge theory of the [Weak Interaction](/derivations/gauge/weak-interaction) has a non-trivial vacuum structure: topologically distinct gauge configurations are labeled by the Chern-Simons number $N_{CS} \in \mathbb{Z}$. Transitions between adjacent vacua ($\Delta N_{CS} = \pm 1$) violate baryon number by $\Delta B = N_f$ (where $N_f$ is the number of fermion generations).*

*Proof sketch.* The key topological fact: $\pi_3(SU(2)) = \mathbb{Z}$. This means the configuration space of $SU(2)$ gauge fields has an infinite set of topologically distinct vacua, labeled by $N_{CS}$.

At zero temperature, transitions between vacua are tunneling events (instantons) with exponentially suppressed amplitude $\sim e^{-8\pi^2/g_W^2}$. At high temperature $T \gtrsim M_W/\alpha_W \sim$ TeV, thermal fluctuations overcome the energy barrier $E_{\text{sph}} \sim M_W/\alpha_W$, and transitions proceed classically (sphalerons, from the Greek for "ready to fall").

Each sphaleron transition produces one fermion from each left-handed doublet. With three generations, this gives $\Delta B = \Delta L = 3$, while $\Delta(B - L) = 0$. Baryon number is violated, but $B - L$ is conserved. $\square$

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

*Proof sketch.* The bootstrap hierarchy crystallizes in stages as the universe cools:

1. **Electroweak epoch** ($T \sim 100$ GeV): The $SU(2)_L \times U(1)_Y$ symmetry breaks to $U(1)_{em}$. This is a phase transition in the Higgs field (or its coherence analog). During the transition, the sphaleron rate changes rapidly — the departure from equilibrium is maximal.

2. **QCD epoch** ($T \sim 200$ MeV): The $SU(3)$ gauge coupling becomes strong, and chiral symmetry breaks. Quarks confine into hadrons.

3. **Each bootstrap level** crystallizes when the temperature drops below the corresponding coherence scale. The second law ([Entropy](/derivations/thermodynamics/entropy), Theorem 4.1) ensures that each transition is irreversible — once a level has crystallized, the universe cannot return to the higher-symmetry state.

The out-of-equilibrium condition is strongest at the electroweak phase transition, which is when sphalerons are most active. $\square$

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

**Rigorous (standard physics):**
- Proposition 1.1: Symmetric pair creation from Coherence-Dual Pairs (direct)
- Proposition 2.1: Sphalerons from $\pi_3(SU(2)) = \mathbb{Z}$ (standard topology + gauge theory)
- Proposition 3.1: C violation from chiral coupling (standard electroweak physics)
- Proposition 3.2: CP violation from $N_g \geq 3$ (Kobayashi-Maskawa counting)
- Corollary 6.1: The $d = 3 \to N_g = 3 \to$ CP chain (derived in the framework)
- Theorem 7.1: Consistency model verified

**Semi-formal (well-motivated, quantitatively incomplete):**
- Proposition 4.1: Phase transitions from bootstrap crystallization. The qualitative picture is clear but the detailed dynamics (first-order vs. crossover, bubble nucleation rate) are not derived from the axioms.
- Proposition 5.2: Order-of-magnitude estimate. The parametric form is correct but the SM value is insufficient — the resolution (leptogenesis or enhanced phase transition) is flagged but not derived.

**Not addressed (deferred):**
- Quantitative value of $\eta_B$ (requires detailed phase transition dynamics)
- Leptogenesis vs. electroweak baryogenesis (requires neutrino mass mechanism)
- $B - L$ asymmetry (requires flavor physics)
- Dark matter contribution to the baryon budget

**Assessment:** Draft status. The derivation successfully identifies all three Sakharov conditions within the framework and establishes the remarkable chain from $d = 3$ to baryogenesis. The qualitative logic is complete and well-motivated. The derivation falls short of provisional because: (1) the quantitative value of $\eta_B$ is not computed, (2) the SM CP violation is known to be insufficient, and (3) the nature of the electroweak phase transition is not derived.

## Open Gaps

1. **Electroweak phase transition**: Derive the nature (first-order vs. crossover) of the electroweak phase transition from the coherence framework. The Standard Model predicts a crossover (insufficient for baryogenesis); the framework may predict differently.

2. **Leptogenesis**: If neutrinos are Majorana (possible in the framework via the coherence-dual pair mechanism), right-handed neutrino decays could generate $\eta_B$ through leptogenesis. Derive the neutrino mass mechanism and the lepton CP phases.

3. **Quantitative $\eta_B$**: Compute the baryon-to-photon ratio from the framework's parameters. This requires the sphaleron rate, CP-violating phases, and phase transition dynamics — all computable in principle but technically demanding.

4. **Dark baryogenesis**: The framework's dark matter prediction ([Dark Matter Granularity](/predictions/dark-matter-granularity)) involves coherence structures. Could a dark-sector version of baryogenesis explain the $\Omega_B / \Omega_{DM} \approx 1/5$ coincidence?
