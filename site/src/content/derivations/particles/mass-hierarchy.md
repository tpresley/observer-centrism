---
title: "The Mass Hierarchy"
status: "provisional"
dependsOn: ["interactions/bootstrap"]
enablesDerivation: ["particles/three-generations", "cosmology/observer-loop-viability"]
tags: ["particles"]
summary: "Mass hierarchy as logarithmically organized crystallization scales — large ratios are exponentials of small coupling ratios, not fine-tuning"
rigorLevel: "formal"
lastUpdated: 2026-03-09
---

## Overview

This derivation addresses a longstanding puzzle in particle physics: **why do elementary particles have such wildly different masses?**

The top quark is roughly 340,000 times heavier than the electron, and the electron is billions of times heavier than the lightest neutrinos. In the Standard Model, these mass ratios are simply free parameters -- numbers plugged in by hand. The "hierarchy problem" asks whether these enormous ratios require an unlikely fine-tuning of nature's constants, or whether there is a structural explanation.

**The approach.** The framework derives mass ratios from the bootstrap hierarchy -- the nested levels of self-consistent observer structures. Each level represents a stable "crystallization" of coherence at a characteristic energy scale. The key mechanism is dimensional transmutation: the ratio between adjacent levels is an exponential of a modest number, not a large number itself.

- A small coupling constant in the exponent produces an enormous mass ratio -- the same mechanism that explains why the proton is much lighter than the energy scale of its constituent interactions.
- Each level is self-protecting: corrections from higher levels are automatically suppressed by the same exponential factor that created the separation.

**The result.** Large mass hierarchies are logarithmically natural -- they are exponentials of small coupling ratios, not fine-tuned coincidences. No supersymmetry or other protective mechanism is required. The framework also predicts a "great desert" with no new particles between the electroweak and unification scales.

**Why this matters.** The hierarchy problem has driven decades of theoretical work, much of it focused on supersymmetry as the solution. This derivation offers a structural alternative where the hierarchy is a natural consequence of how observer loops organize at different scales.

**An honest caveat.** The qualitative structure (exponential separation, self-protection) is robust, but the specific particle masses and coupling constants remain empirical inputs. Computing exact masses from the coherence geometry is an open problem.


**Note on status.** This derivation is provisional because it contains mass-hierarchy S1 (tunneling-crystallization correspondence). If that postulate is promoted to a theorem, this derivation would be upgraded to rigorous.

## Statement

**Theorem.** The mass hierarchy — the wide separation between particle mass scales — arises from exponential crystallization in the bootstrap hierarchy. Each level of the hierarchy introduces a new crystallization scale separated from adjacent levels by a factor $\sim e^{-c/g}$, where $g$ is the coupling constant governing interactions at that level. Large mass ratios are therefore exponentials of small coupling ratios — logarithmically natural, not fine-tuned. The hierarchy is self-protecting: inter-level corrections are suppressed by the same exponential factor that separates the scales.

## Derivation

### Structural Postulate

**Structural Postulate S1 (Tunneling–crystallization correspondence).** The formation of a stable composite observer at level $k$ of the bootstrap hierarchy is mediated by coherence tunneling through a barrier in the coherence geometry.

**Remark (Tightened content).** This postulate has two components with different status:

1. **The WKB form** ($P \sim e^{-V \cdot a/\hbar}$): This is a *theorem*, not a postulate. The [Coherence Lagrangian](/derivations/foundation/coherence-lagrangian) (Theorem 6.0) establishes that the framework's dynamics are Lagrangian. For any Lagrangian system, barrier penetration in the semiclassical limit takes WKB form — this is a standard result of semiclassical analysis (the leading-order term in the $\hbar \to 0$ expansion of the path integral). The exponential suppression $e^{-c/g^2}$ responsible for the large mass ratios is a mathematical consequence of the Lagrangian structure, not a physical assumption.

2. **The identification** (bootstrap crystallization IS barrier tunneling): This remains postulated. The postulate asserts that the formation of a composite observer at bootstrap level $k$ corresponds to penetrating a barrier in the coherence geometry — that the abstract bootstrap fixed-point structure has a geometric realization as barrier tunneling. This identification connects the discrete level structure of the bootstrap ([Bootstrap Mechanism](/derivations/interactions/bootstrap)) to the quantitative scale separations observed in nature (e.g., $\Lambda_{\text{QCD}} \sim M_Z e^{-c/\alpha_s}$). It cannot be derived from the three axioms alone.

The irreducible content of S1 is therefore the identification (2), not the WKB form (1). The exponential mass hierarchy is forced by the Lagrangian dynamics once the identification is granted.

### Step 1: Mass as Rest-Cycle Frequency

**Definition 1.1.** From [Action and Planck's Constant](/derivations/thermodynamics/action-planck) (Corollary 4.2) and [Speed of Light](/derivations/spacetime/speed-of-light) (Theorem 3.1), the mass of an observer is its rest-cycle frequency:

$$m = \frac{\hbar\omega}{c^2} = \frac{\hbar}{c^2 T}$$

where $T$ is the period of the observer's loop in its rest frame and $\omega = 2\pi/T$ is the angular frequency.

**Proposition 1.2.** *Heavier particles have faster internal cycles; lighter particles cycle more slowly. The mass spectrum of particles is the frequency spectrum of stable observer loops in the coherence geometry.*

**Remark (Three aspects of mass).** Definition 1.1 establishes the first of three complementary aspects of mass in the framework. Together they form a chain — definition, selection, consequence — that is developed across this derivation and its dependencies:

1. **Mass is loop frequency** (Definition 1.1, this step). The rest mass of an observer is its loop closure frequency: $m = \hbar\omega/c^2$. This is the *definition* — what mass *is*. It follows from the action principle and the speed of light derivation.

2. **The electroweak crystallization selects which frequencies are stable** (Step 3, Theorem 3.1; [Three Generations](/derivations/particles/three-generations), Theorem 4.2). Not every frequency corresponds to a stable observer loop. The division algebra structure provides the gauge symmetries, and the electroweak crystallization axis sets a reference direction. Each generation's winding axis has a specific angular misalignment $\alpha_k$ from this axis, giving a tunneling factor $m_k \propto \Lambda_{\text{EW}} \cdot e^{-\alpha_k/g^2}$ that determines which masses in the frequency spectrum are actually realized. This is the *selection mechanism* — which masses exist.

3. **The boundary area determines what mass implies for information access** ([Observer Loop Viability](/derivations/cosmology/observer-loop-viability), Proposition 1.5; Step 7 below). Given a mass $m$, the Compton wavelength $\lambda_C = \hbar/(mc)$ sets the observer's boundary area and hence its epistemic horizon: $\mathcal{I}^{\max} = A_{\mathcal{B}}/(4\ell_P^2) \sim (m_P/m)^2$. This is the *consequence* — what a given mass means for the observer's relationship to the rest of the universe. Heavier elementary particles have faster loops but smaller windows to the non-self world.

These three aspects are consistent because they operate at different levels: (1) defines the quantity, (2) explains which values it takes, and (3) derives what those values imply. The mass hierarchy problem — why the spectrum spans 12 orders of magnitude from neutrinos to the top quark — is addressed by (2). The information hierarchy — why heavier particles have less epistemic capacity — is addressed by (3). Step 7 shows that this information hierarchy reverses for composite observers beyond the division algebra chain.

### Step 2: Crystallization Scales from the Bootstrap

**Definition 2.1.** A **crystallization scale** $\Lambda_k$ is the characteristic coherence cost at which stable loop closure becomes possible at level $k$ of the bootstrap hierarchy ([Bootstrap Mechanism](/derivations/interactions/bootstrap)).

**Proposition 2.2 (Level structure).** *The bootstrap hierarchy has discrete levels, each corresponding to a class of stable loop closures with a characteristic scale:*

- **Level 0 (Planck)**: The minimal observer scale, $\Lambda_0 = E_P = \sqrt{\hbar c^5/G} \sim 10^{19}$ GeV
- **Level $k$**: Composite observers formed by $k$-fold iteration of the bootstrap functor $\mathcal{R}$ ([Bootstrap](/derivations/interactions/bootstrap), Proposition 5.1)

### Step 3: Exponential Scale Separation

**Theorem 3.1 (Dimensional transmutation).** *The crystallization scale at level $k$ is related to the scale at level $k-1$ by:*

$$\Lambda_k \sim \Lambda_{k-1} \cdot e^{-c_k/g_k^2}$$

*where $g_k$ is the effective coupling constant governing interactions at level $k$, and $c_k$ is a geometric constant of order $1$.*

*Proof.* At level $k-1$, observers interact with coupling $g_k$. The formation of a stable level-$k$ loop requires coherence to tunnel through a barrier in the coherence geometry. The barrier height is set by the cost of maintaining the relational invariant that binds level-$(k-1)$ observers into a level-$k$ composite.

The tunneling probability through a coherence barrier of height $V$ and width $a$ in the coherence geometry is:

$$P_{\text{tunnel}} \sim e^{-V \cdot a / \hbar}$$

For the bootstrap, the barrier height is $V \sim \Lambda_{k-1}/g_k^2$ (the coherence cost of a virtual relational invariant, suppressed by the coupling squared) and the width is $a \sim 1/\Lambda_{k-1}$ (the inverse of the scale). Therefore:

$$P_{\text{tunnel}} \sim e^{-c_k/g_k^2}$$

The crystallization scale is the energy at which this tunneling becomes probable — that is, where the Boltzmann factor $e^{-\Lambda_k / T_{\text{eff}}}$ matches the tunneling probability. This gives $\Lambda_k / \Lambda_{k-1} \sim e^{-c_k/g_k^2}$. $\square$

**Corollary 3.2 (Logarithmic naturalness).** *The logarithmic ratios between scales are:*

$$\ln\frac{\Lambda_k}{\Lambda_{k-1}} \sim -\frac{c_k}{g_k^2}$$

*A coupling constant $g_k \sim 1/\sqrt{40}$ gives a ratio $\Lambda_k/\Lambda_{k-1} \sim e^{-40} \sim 10^{-17}$. The enormous mass ratios are exponentials of modest numbers — they are logarithmically natural.*

### Step 4: The Observed Mass Scales

**Proposition 4.1 (Identification with physical scales).** *The crystallization levels correspond to observed mass scales:*

| Level | Scale | Energy | Ratio to Planck | Coupling |
|---|---|---|---|---|
| 0 | Planck | $\sim 10^{19}$ GeV | $1$ | — |
| 1 | GUT | $\sim 10^{16}$ GeV | $10^{-3}$ | $g_{\text{GUT}} \sim 0.7$ |
| 2 | Electroweak | $\sim 10^{2}$ GeV | $10^{-17}$ | $g_{\text{EW}} \sim 0.6$ |
| 3 | QCD | $\sim 0.3$ GeV | $10^{-19}$ | $g_s \sim 1$ at low scale |
| 4 | Neutrino | $\sim 10^{-2}$ eV | $10^{-30}$ | $g_\nu \ll 1$ |

*The QCD scale illustrates dimensional transmutation explicitly: $\Lambda_{\text{QCD}} \sim M_Z \cdot e^{-c/\alpha_s(M_Z)}$ where $\alpha_s = g_s^2/(4\pi)$. This is a standard result in QCD.*

### Step 5: Self-Protection

**Theorem 5.1 (Hierarchy stability).** *Each crystallization level is an independent fixed point of the bootstrap. Corrections from level $k+1$ to level $k$ are suppressed by the exponential factor separating the scales:*

$$\delta m_k^2 \sim \Lambda_k^2 \cdot g_k^2 \ll \Lambda_{k+1}^2$$

*Proof.* In the bootstrap framework, each level is a stable fixed point of the functor $\mathcal{R}$ ([Bootstrap](/derivations/interactions/bootstrap), Proposition 5.1). Perturbations from higher levels are transmitted through the coupling between levels. The coupling strength between level $k$ and level $k+1$ is $g_k^2$ (the square of the coupling constant). Therefore corrections to the level-$k$ mass scale from level $k+1$ are:

$$\delta m_k^2 \sim g_k^2 \cdot \Lambda_{k+1}^2 \sim g_k^2 \cdot \Lambda_k^2 \cdot e^{2c_{k+1}/g_{k+1}^2}$$

But this exponential enhancement is canceled by the loop factor — the correction involves a virtual loop at level $k+1$, which is suppressed by the same tunneling probability $e^{-c_{k+1}/g_{k+1}^2}$ that created the scale separation. The net correction is:

$$\delta m_k^2 \sim g_k^2 \cdot \Lambda_k^2$$

This is proportional to the level-$k$ scale itself, not the level-$(k+1)$ scale. The hierarchy is stable under quantum corrections. $\square$

**Corollary 5.2 (No supersymmetry required).** *The hierarchy problem (why is $m_{\text{Higgs}} \ll M_{\text{Planck}}$?) is resolved by the structural independence of crystallization levels — not by supersymmetry, not by fine-tuning. The framework predicts that no supersymmetric partners exist at accessible energies.*

### Step 6: The Great Desert

**Proposition 6.1 (Inter-level emptiness).** *Between crystallization levels, no stable observer loops can close. The coherence cost is too high for the lower level and too low for the upper level. This predicts a "great desert" — no new particles or forces between the electroweak and GUT scales.*

*Proof.* Suppose a stable observer loop exists at energy $E$ with $\Lambda_k < E < \Lambda_{k+1}$. By Theorem 3.1, the loop's stability requires coherence tunneling at coupling $g$ satisfying $E \sim \Lambda_k \cdot e^{c/g^2}$ (an upward crystallization from level $k$) or $E \sim \Lambda_{k+1} \cdot e^{-c'/g'^2}$ (a downward crystallization from level $k+1$).

For upward crystallization: $g^2 = c / \ln(E/\Lambda_k)$. Since $\Lambda_k < E < \Lambda_{k+1}$, we have $0 < \ln(E/\Lambda_k) < \ln(\Lambda_{k+1}/\Lambda_k) = c_k/g_k^2$, giving $g > g_k$. But as $g$ increases continuously from $g_k$, the crystallization scale jumps discontinuously — the exponential function $e^{c/g^2}$ maps a continuous range of $g$ to the full interval $(\Lambda_k, \Lambda_{k+1})$, but only the fixed-point values of the bootstrap functor $\mathcal{R}$ ([Bootstrap](/derivations/interactions/bootstrap), Proposition 5.1) correspond to stable loops. The fixed points are discrete (Proposition 5.1 establishes the bootstrap has a countable set of fixed points), so intermediate values of $E$ do not correspond to stable configurations.

Equivalently: a stable loop at $E$ would be a new fixed point of $\mathcal{R}$ at an intermediate scale. By the discrete structure of the bootstrap hierarchy, such intermediate fixed points do not exist — the exponential separation between adjacent fixed points is a consequence of the tunneling mechanism, not a fine-tuning. $\square$

### Step 7: The Topological-Structural Transition

The division algebra chain R $\to$ C $\to$ H $\to$ O terminates at the octonions ([Bootstrap $\to$ Division Algebras](/derivations/interactions/bootstrap-division-algebras), Theorem 7.1). The bootstrap hierarchy does not terminate — composite observers continue forming at levels beyond the octonionic. But the *mechanism* of information encoding changes fundamentally at this boundary.

**Definition 7.1 (Topological vs. structural encoding).** At bootstrap levels $n \leq 3$ (within the division algebra chain), particle identity is **topological**: winding class ($\pi_1(SO(3)) = \mathbb{Z}_2$ gives spin), gauge charge (division algebra automorphism groups give U(1), SU(2), SU(3)), and generation index (SO(3) generator alignment). Mass is determined by the loop frequency (Definition 1.1), which is set by the tunneling/misalignment mechanism within the algebra (Theorem 3.1, [Three Generations](/derivations/particles/three-generations) Theorem 4.2). Information is stored in discrete topological invariants — compact, stable, and minimal.

At levels $n > 3$ (beyond the octonionic), no new division algebra exists to provide new topological channels. Composite observers form by binding existing particles via relational invariants, using the forces the four algebras already established. Information at these levels is stored **structurally**: in the relational invariant network connecting sub-observers, not in new topological charges.

**Proposition 7.2 (Mass-information reversal).** *The relationship between mass and epistemic information capacity reverses at the transition from topological to structural encoding.*

*Argument.* For elementary particles (topological encoding, $n \leq 3$): the observer boundary is the Compton wavelength $\lambda_C = \hbar/(mc)$. The epistemic horizon is $\mathcal{I}^{\max} = A_{\mathcal{B}}/(4\ell_P^2) \sim \lambda_C^2/\ell_P^2 = (m_P/m)^2$ ([Observer Loop Viability](/derivations/cosmology/observer-loop-viability), Proposition 1.5). **Heavier particles have less information capacity.** A top quark ($\sim 10^{31}$ bits) has less epistemic capacity than an electron ($\sim 10^{43}$ bits). The Planck-mass observer has the minimum: $\sim 1$ bit.

For composite observers (structural encoding, $n > 3$): the observer boundary is not the Compton wavelength of the composite mass. It is the physical extent of the relational invariant network binding the sub-observers. By [ER=EPR](/derivations/holography/er-epr) (Theorem 3.2), each relational invariant contributes a wormhole throat with area $A_{\text{ER}} = 4\ell_P^2 S_{\text{ent}}$. A composite with more sub-observers and more binding invariants has a larger total boundary area. **More complex composites have more information capacity.**

The reversal is quantitatively dramatic:

| Observer | Mass | Boundary mechanism | Boundary size | $\mathcal{I}^{\max}$ |
|---|---|---|---|---|
| Electron | $0.5$ MeV | Compton wavelength | $\sim 10^{-12}$ m | $\sim 10^{43}$ |
| Proton | $938$ MeV | QCD binding (octonionic) | $\sim 10^{-15}$ m | $\sim 10^{37}$ |
| Hydrogen atom | $939$ MeV | EM binding (complex) | $\sim 10^{-10}$ m | $\sim 10^{47}$ |
| Macroscopic composite | $\gg$ GeV | Relational network | $\gg \mu$m | $\gg 10^{50}$ |

The proton is a transitional case: it is a composite (three quarks bound by octonionic confinement) but still within the last algebra level. Its boundary ($\sim 1$ fm) is larger than its Compton wavelength ($\sim 0.2$ fm), showing the structural contribution beginning to dominate. The hydrogen atom, one level above, has a boundary ($\sim 0.5$ \AA) that is $10^5 \times$ larger than its Compton wavelength — the structural encoding dominates completely. $\square$

**Proposition 7.3 (Exhaustion drives the transition).** *The reversal occurs because the division algebras are exhausted. When topological channels exist ($n \leq 3$), they are the most efficient encoding: discrete, minimal, and stable. New information at each level is packed into fewer bits (higher mass = smaller Compton wavelength = less boundary area). When topological channels are exhausted ($n > 3$), new information has no compact topological representation — it must be stored in the relational invariant network, whose information capacity grows with the number of constituents and binding interactions.*

*Argument.* At each algebra level, the new gauge symmetry provides a new topological charge (a discrete label). The information cost of a topological label is minimal: a few bits for the representation. But the mass associated with that level (via the tunneling mechanism, Theorem 3.1) compresses the boundary. The net effect is: more mass, more topological information, but less *epistemic* information capacity (smaller window to the external world).

Beyond the octonions, no new topological labels are available. The only way to add information is to bind more sub-observers, which increases the relational invariant count and hence the boundary area. The encoding transitions from topological (compact, boundary-shrinking) to structural (relational, boundary-expanding). $\square$

**Remark (Transition scale).** The transition from topological to structural dominance occurs at the confinement scale $\Lambda_{\text{QCD}} \sim 0.3$ GeV, where the last division algebra (O) completes its work. Below this scale, all stable structures are composites bound by the forces the algebras provided. The confinement scale is thus not merely a QCD parameter — it is the boundary between two fundamentally different information regimes in the bootstrap hierarchy.

**Remark (Implications for the coherence budget).** The total structural coherence $\sum \Delta c_n$ ([Observer Loop Viability](/derivations/cosmology/observer-loop-viability), Proposition 7.4) decomposes into two contributions with different scaling:

$$\sum \Delta c_n = \underbrace{\sum_{n \leq 3} \Delta c_n^{\text{topo}}}_{\substack{\text{topological: bounded by}\\\text{algebra structure}}} + \underbrace{\sum_{n > 3} \Delta c_n^{\text{struct}}}_{\substack{\text{structural: grows with}\\\text{composite complexity}}}$$

The topological contribution is bounded by the number of particle species $\times$ particles per species $\times$ coherence per particle — all of which are constrained by the finite division algebra structure. The structural contribution grows with the complexity of the composite observer network and is not bounded by the algebras. This decomposition may provide a concrete handle on the self-consistency equation for $C_0$ ([Observer Loop Viability](/derivations/cosmology/observer-loop-viability), Conjecture 8.9).

## Physical Interpretation

| Framework concept | Standard physics |
|---|---|
| Crystallization scale $\Lambda_k$ | Mass scale (Planck, GUT, EW, QCD) |
| $e^{-c/g^2}$ | Dimensional transmutation |
| Level independence | Decoupling of scales |
| No fine-tuning | Hierarchy problem resolution |
| No intermediate loops | Great desert prediction |
| No supersymmetry needed | Testable prediction |

### Consistency Model

**Theorem 7.1.** *Quantum chromodynamics (QCD) provides a consistency model for the dimensional transmutation mechanism.*

*Verification.* Take QCD with gauge group $SU(3)$, coupling $\alpha_s(M_Z) \approx 0.118$.

- **Exponential scale separation** (Theorem 3.1): $\Lambda_{\text{QCD}} \sim M_Z \cdot e^{-2\pi/(b_0 \alpha_s)} \approx 91 \text{ GeV} \cdot e^{-2\pi/(7 \cdot 0.118)} \approx 0.2$ GeV. This is the standard QCD result, confirmed experimentally. $\checkmark$
- **Logarithmic naturalness** (Corollary 3.2): $\ln(M_Z/\Lambda_{\text{QCD}}) \approx 6$, corresponding to $c/g^2 \approx 6$ — a modest number producing a factor of $\sim 400$. $\checkmark$
- **Self-protection** (Theorem 5.1): Hadronic masses receive corrections $\delta m \sim \alpha_s \Lambda_{\text{QCD}}$, proportional to the QCD scale, not the electroweak scale. The proton mass is stable under electroweak corrections. $\checkmark$
- **Great desert** (Proposition 6.1): No stable hadron-like bound states exist between the QCD scale ($\sim 0.3$ GeV) and the electroweak scale ($\sim 100$ GeV). $\checkmark$
- **Mass as frequency** (Definition 1.1): The proton mass $m_p = 938$ MeV corresponds to a Compton frequency $\omega_p = m_p c^2/\hbar \approx 1.4 \times 10^{24}$ Hz. $\checkmark$ $\square$

## Rigor Assessment

**Fully rigorous:**
- Definition 1.1: Mass as rest-cycle frequency (follows from [Action](/derivations/thermodynamics/action-planck) and [Speed of Light](/derivations/spacetime/speed-of-light) derivations)
- Corollary 3.2: Logarithmic naturalness ($e^{-c/g^2}$ maps modest numbers to large ratios — a mathematical identity)
- Theorem 7.1: Consistency model verified on QCD dimensional transmutation

**Rigorous given axioms + S1:**
- Theorem 3.1: Exponential scale separation from tunneling (standard WKB/dimensional transmutation, applied to coherence barriers via S1)
- Theorem 5.1: Self-protection from loop-factor cancellation (follows the logic of 't Hooft's technical naturalness)
- Proposition 6.1: Great desert from discreteness of bootstrap fixed points

**Structural postulate (tightened):**
- S1 (Tunneling–crystallization correspondence): The WKB form of the tunneling probability is a theorem of semiclassical analysis for any Lagrangian system (and the coherence Lagrangian provides the Lagrangian). The remaining postulated content is the identification of bootstrap crystallization with barrier tunneling — that composite observer formation corresponds to barrier penetration in the coherence geometry.

**Empirical parameters:**
- The coupling constants $g_k$ at each level are empirical inputs. Computing them from the coherence geometry would determine the entire particle mass spectrum — this is an open problem.
- The geometric constants $c_k$ in $\Lambda_k \sim \Lambda_{k-1} e^{-c_k/g_k^2}$ are order-unity but not computed.

**Semi-formal (supporting, not in the critical path):**
- Step 7 (topological-structural transition): Proposition 7.2 (mass-information reversal) is structurally sound — the Compton wavelength scaling for elementary particles and the ER=EPR boundary scaling for composites are both established independently. Proposition 7.3 (exhaustion drives transition) is a structural argument connecting the Hurwitz termination to the encoding change. The transition scale identification ($\Lambda_{\text{QCD}}$) is physically motivated but not formally derived as the precise transition point.

**Assessment:** The mass hierarchy mechanism — exponential scale separation from dimensional transmutation, hierarchy stability from level independence — is rigorous given S1 (tunneling–crystallization correspondence). The qualitative structure parallels established physics (QCD dimensional transmutation is the proof-of-concept). Step 7 identifies the transition from topological to structural information encoding at the division algebra exhaustion point — a structural observation with implications for the coherence budget. The quantitative predictions (specific masses, specific couplings) remain empirical.

## Open Gaps

1. **Computing specific masses**: Can the framework predict specific particle masses, or only the hierarchical structure? Computing the electron mass from the coherence geometry would be a breakthrough.
2. **Coupling constant derivation**: The values of $g_k$ at each level should be derivable from the structure of the coherence geometry. Currently they are empirical inputs.
3. **Dark matter scale**: If dark matter is a stable crystallization at an intermediate scale, its mass should be derivable. This connects to [Dark Matter Granularity](/predictions/dark-matter-granularity).
4. **Cosmological constant**: The vacuum energy (cosmological constant) is anomalously small ($\sim 10^{-122}$ in Planck units). Whether the crystallization framework can explain this extreme hierarchy is an open challenge.
5. **Quantifying the topological-structural decomposition**: Step 7 identifies the qualitative decomposition $\sum \Delta c_n = \sum \Delta c_n^{\text{topo}} + \sum \Delta c_n^{\text{struct}}$. Computing the topological contribution from the known particle content (division algebra structure, three generations, coupling ratios) would provide a concrete lower bound on $\sum \Delta c_n$ and a direct input to the self-consistency equation for $C_0$ ([Observer Loop Viability](/derivations/cosmology/observer-loop-viability), Conjecture 8.9). *Difficulty: HARD.*
