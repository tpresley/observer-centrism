---
title: "Cosmology"
subtitle: "Dark energy constraints, the cosmological constant problem, singularity resolution, and baryogenesis from observer structure"
order: 2
relatedDerivations:
  - "cosmology/observer-loop-viability"
  - "cosmology/dark-energy-equation-of-state"
  - "cosmology/cosmological-constant"
  - "cosmology/geometric-inflation"
  - "cosmology/baryogenesis"
  - "cosmology/leptogenesis"
  - "cosmology/coupling-constants"
  - "cosmology/geometric-substrate"
  - "cosmology/cyclic-cosmology"
  - "cosmology/cosmological-arrow"
  - "spacetime/singularity-resolution"
  - "spacetime/gravitational-constant"
relatedPredictions:
  - "no-phantom-dark-energy"
  - "dark-matter-granularity"
  - "holographic-noise"
  - "coupling-non-convergence"
---

## The Landscape

Cosmology has a parameter problem. The Standard Model of cosmology ($\Lambda$CDM) fits the data remarkably well, but its key parameters &mdash; the cosmological constant, the matter-antimatter asymmetry, the dark matter fraction, the number of e-folds of inflation &mdash; are inputs, not outputs. Why $\Lambda \sim 10^{-122}$ in Planck units? Why $\eta_B \sim 10^{-10}$? Why does inflation produce the right spectrum? These are among the sharpest open questions in physics.

The framework does not solve all of them. The specific numerical value of $\Lambda$ at our observer level remains open &mdash; it awaits the computation of a categorical-cohomology obstruction class rather than a brute-force formula. But the framework does far more than might be expected from three axioms about observers: it derives the sign of $\Lambda$, a Planck-scale upper bound, the equation of state $w = -1$, the absence of a vacuum catastrophe, resolves the Big Bang singularity, explains baryogenesis from structural requirements, and reframes the 120-order hierarchy as the obstruction class of an observer-indexed spacetime sheaf rather than a fine-tuning puzzle.

## Dark Energy and the Cosmological Constant

This is where the framework's most distinctive cosmological contributions lie. The results build on each other:

### The Sign of $\Lambda$

The axioms predict $\Lambda \geq 0$. The argument: a universe with $\Lambda < 0$ necessarily recollapses to Planck density. At Planck density, all observer structures are destroyed &mdash; divergent effective pressure exceeds any finite observer energy, phase space saturates, and no self/non-self boundary can be maintained. Since coherence resides only in observer structures and relational invariants (there is no background reservoir), destroying all carriers violates coherence conservation. The recollapse is axiomatically forbidden.

This is not anthropic reasoning. It does not say "observers like us cannot exist in a $\Lambda < 0$ universe." It says the mathematical structure of the axioms is inconsistent with a $\Lambda < 0$ spacetime.

**Formal derivation:** [Observer Loop Viability Bounds](/derivations/cosmology/observer-loop-viability) (Theorem 5.4)

### No Phantom Dark Energy

The dark energy equation of state satisfies $w \geq -1$. Phantom energy ($w < -1$) produces a Big Rip at finite time, tearing apart all bound structures and destroying all coherence carriers &mdash; the expansion-side mirror of the bounce dissolution that excludes $\Lambda < 0$. The same conservation law excludes both cosmological catastrophes.

The preferred value is $w = -1$ exactly: among all permitted equations of state, only the cosmological constant gives a time-independent coherence partition, exact Lyapunov stability for observer loops, and zero coherence flux across the horizon. Quintessence ($w > -1$) is not excluded but is structurally disfavored.

**Formal derivation:** [Dark Energy Equation of State](/derivations/cosmology/dark-energy-equation-of-state) (Theorems 2.1 and 3.1)

### The Hierarchy Problem, Reframed

The 120-order gap between the Planck-scale $\Lambda_0 \sim 1/\ell_P^2$ and the observed $\Lambda_N \sim H^2$ is not a fine-tuning puzzle in this framework. It is a structural invariant:

The continuous dual of the observer network is observer-indexed, not a single global spacetime. Each bootstrap level $n$ projects its own de Sitter static patch with radius $L_n = c T_n/2$ and effective cosmological constant $\Lambda_n = 12/(c T_n)^2$. Two observers at very different levels cannot share a single de Sitter background &mdash; their projections have incompatible radii. The ratio $\Lambda_0 / \Lambda_N \sim (T_N/T_0)^2 \sim 10^{122}$ quantifies this disagreement: it is the **obstruction class** of the observer-indexed spacetime sheaf's failure to reduce to a single manifold across levels.

The level-indexed coherence-entropy decomposition $\mathcal{C}_0 = \mathcal{C}_\text{acc}^{(n)} + S^{(n)}$ is the coherence-theoretic face of this same observer-indexing: cross-level comparisons mix quantities belonging to different projections. The framework converts the problem from "why is a single constant so small?" to "compute the obstruction class" &mdash; a concrete categorical-cohomology target rather than an inaccessible free parameter. Whether this computation yields a unique value at a given observer level is the key open question.

**Formal derivations:** [Cosmological Constant](/derivations/cosmology/cosmological-constant) (Step 6), [Observer-Projected Spacetime](/derivations/foundation/observer-projected-spacetime) (Step 6), [Observer Loop Viability Bounds](/derivations/cosmology/observer-loop-viability) (Step 8)

### Bounded Eternal Expansion

The combined results constrain the universe to a narrow class of behaviors:

| Constraint | Result | Source |
|---|---|---|
| $\Lambda \geq 0$ | No Big Crunch | Observer-loop-viability Thm 5.4 |
| $w \geq -1$ | No Big Rip | Dark energy Thm 2.1 |
| $\Lambda < 3/\ell_P^2$ | Bounded expansion rate | Observer-loop-viability Thm 2.1 |
| $w = -1$ preferred | Unique equilibrium | Dark energy Thm 3.1 |
| $\Omega_\Lambda \geq 0.5$ | Dark-energy-dominated | Holographic bound on structural coherence |

The physically realized spacetimes are those that expand forever at a bounded rate, asymptoting to de Sitter.

## Spacetime as Geometric Substrate

The framework provides a concrete physical picture of what dark energy *is*. Spacetime geometry is constituted by a network of $\sim 10^{122}$ Planck-scale observers whose relational invariants form the geometric fabric (via ER=EPR). Standard Model particles are coherence *crystallized out of* this fabric &mdash; stable resonances of the substrate, not objects placed within it. An electron is to the geometric substrate what a phonon is to a crystal lattice.

The self-consistency equation $C_0 = \sum \Delta c_n + S_H$ becomes substrate accounting: total substrate = crystallized coherence + remaining fabric. The cosmological density fractions are crystallization fractions: $\Omega_m \approx 0.3$ means 30% of the coherence has crystallized into particles, and $\Omega_\Lambda \approx 0.7$ means 70% remains in the geometric fabric. Dark energy is not a mysterious substance &mdash; it is the coherence content of the un-crystallized spacetime itself.

Crucially, the statistical homogeneity underlying this accounting is not an external assumption. The observer network's aperiodic order ([Aperiodic Order](/derivations/foundation/aperiodic-order), Corollary 3.2) guarantees constitutive universality: uniform patch frequencies everywhere in the network. When geometry emerges from this network, it inherits this uniformity. Every observer's horizon volume has the same statistical content &mdash; the same crystallization fraction, the same $C_0$ &mdash; not because space was made homogeneous, but because the pre-geometric network has this property intrinsically. The cosmological principle is derived, not assumed.

The "great desert" between the Planck and electroweak scales is not empty &mdash; it is filled by the collective substrate. The electron's $\sim 10^{43}$ bits of epistemic capacity reflects the $\sim 10^{43}$ Planck-scale substrate elements its boundary contacts. The "jump" from 1 bit (individual Planck observer) to $10^{43}$ bits (electron) is the transition from individual to collective, not empty to full.

This picture unifies three apparently separate predictions: holographic noise (the discrete substrate fluctuating at Planck scale), the dark energy equation of state (the substrate in equilibrium), and the holographic bound on crystallization ($\Omega_\Lambda \geq 0.5$ &mdash; you cannot crystallize more coherence than the fabric contains). All three flow from the same underlying structure.

**Formal derivation:** [Geometric Substrate and Coherence Crystallization](/derivations/cosmology/geometric-substrate)

## The Big Bang Singularity

The framework resolves the Big Bang singularity without invoking quantum gravity in the traditional sense. The discrete relational invariant network has a maximum event density of $\ell_P^{-4}$, which bounds curvature at the Planck scale. The Penrose-Hawking singularity theorems require the energy conditions to hold everywhere &mdash; but at Planck density, the effective equation of state includes a repulsive term from the curvature bound, violating the strong energy condition. By contraposition: curvature bound $\to$ no singularity $\to$ energy conditions must fail $\to$ Raychaudhuri defocusing $\to$ bounce.

The Big Bang is replaced by a coherence bounce at Planck density. This is model-independent &mdash; it follows from the curvature bound alone, without assuming a specific quantum gravity theory.

**Formal derivation:** [Singularity Resolution](/derivations/spacetime/singularity-resolution) (Theorem 4.1)

## Inflation Without an Inflaton

Cosmic inflation is reinterpreted as the emergence of geometric description from a sparse post-bounce observer network. In the immediate aftermath of the bounce, few relational invariants exist &mdash; the observer network is sparse. As the bootstrap hierarchy assembles, the number of relational invariants grows rapidly, and the geometry they define (via ER=EPR) expands correspondingly. This period of rapid geometric emergence plays the role of inflation, dissolving the horizon and flatness problems without requiring an inflaton field or a specific potential.

**Formal derivation:** [Geometric Inflation](/derivations/cosmology/geometric-inflation) (provisional)

## Matter-Antimatter Asymmetry

Baryogenesis is derived from structural requirements of the framework. The three Sakharov conditions &mdash; baryon number violation, C and CP violation, departure from equilibrium &mdash; are all consequences of the axioms:

- **B violation**: SU(2) sphalerons (from the quaternionic bootstrap level) violate baryon number
- **C and CP violation**: the chiral gauge coupling (from the handedness of the quaternionic structure) provides both
- **Departure from equilibrium**: the bootstrap hierarchy's sequential crystallization ensures the early universe passes through non-equilibrium transitions

The quantitative asymmetry $\eta_B \sim 10^{-10}$ is reproduced via leptogenesis: the framework's prediction of Majorana neutrinos provides heavy right-handed neutrino decays whose CP-violating phases generate a lepton asymmetry, converted to the observed baryon asymmetry by sphalerons.

**Formal derivations:** [Baryogenesis](/derivations/cosmology/baryogenesis), [Leptogenesis](/derivations/cosmology/leptogenesis)

## Gauge Coupling Evolution

The division algebra structure constrains coupling constant ratios at the algebraic scale: $\alpha_1 : \alpha_2 : \alpha_3 = 4 : 2 : 1$. The Weinberg angle is determined by the $\mathbb{C} \subset \mathbb{H}$ embedding: $\sin^2\theta_W = 1/3$ at the algebraic normalization scale, evolving to $\sim 0.21$ at $M_Z$ after two-loop RG running (measured: 0.231).

The framework predicts that the three gauge couplings **do not converge** to a single GUT point at any energy &mdash; a falsifiable prediction that contradicts all grand unified theories.

**Formal derivation:** [Coupling Constants](/derivations/cosmology/coupling-constants)

## What's Testable

**No phantom dark energy** ($w \geq -1$): a hard prediction. Any confirmed detection of $w < -1$ would falsify coherence conservation. Current data: $w = -1.03 \pm 0.04$ (consistent). Euclid and Rubin Observatory will test to $\sim 1\%$.

**Gauge coupling non-convergence**: the three couplings should not meet at a single point. Current precision is consistent; higher-energy measurements would sharpen the test.

**Dark matter granularity**: loop closure pressure creates a minimum halo mass $M_J \propto m_{\text{DM}}^{-3/2}$ with a Gaussian power-spectrum cutoff steeper than warm dark matter. Testable with strong lensing and satellite galaxy counts.

**Holographic noise**: strain PSD $S_h = 2\alpha_H \ell_P/c$ with angular structure $\Gamma(\beta) = \cos\beta$. Measurable with co-located interferometers.

## The Fate of the Universe

The framework's axioms have a surprising consequence for the ultimate fate of the universe: **heat death is axiomatically forbidden.**

The second law drives the universe toward de Sitter equilibrium &mdash; all complex structure dissolved, only minimal observers remaining. But relational invariants are permanent (Axiom 1). Every interaction in cosmic history generated correlations that cannot be thermalized away. Complete equilibrium would require their destruction, which violates coherence conservation.

The resolution: minimal observers must continue interacting (C5 never switches off), generating new relational invariants that accumulate as real geometric structure invisible to their 1-bit epistemic capacity. When enough structure has accumulated, the bootstrap can produce a new composite observer level &mdash; a perceptual phase transition where complex observers re-emerge at a higher level of description, perceiving low entropy in structure that was always present but invisible from below.

This is a framework-native cyclic cosmology: complexification &rarr; dissolution &rarr; invisible accumulation &rarr; re-complexification. The second law holds at every level (no observer ever sees entropy decrease). The "rebirth" is the emergence of a new observer level that accesses structure invisible to the previous level.

**Formal derivation:** [Observer-Centric Cyclic Cosmology](/derivations/cosmology/cyclic-cosmology)

## What's Honestly Open

**The value of $\Lambda$**: The numerical value depends on the total coherence budget $C_0$, which is boundary data. The double-saturation conjecture (Conjecture 8.9) identifies the structural condition that would determine $C_0$, but proving it requires the geometry functor program &mdash; a major open target.

**Quantitative $\eta_B$**: The Standard Model sphaleron rate gives $\eta_B$ too small by $\sim 8$ orders of magnitude. Leptogenesis fixes this, but the precise value depends on heavy neutrino masses and CP phases that are not yet computed from first principles.

**Inflation details**: The geometric inflation picture is provisional. The specific power spectrum (spectral index $n_s$, tensor-to-scalar ratio $r$) is not yet derived.

**Cosmological arrow**: Why expansion correlates with entropy increase is partially addressed (non-ergodic elaboration of the hierarchy) but the derivation is draft status.
