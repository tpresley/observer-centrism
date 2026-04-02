---
title: "Cosmological Arrow of Time"
status: "draft"
dependsOn: ["thermodynamics/time", "thermodynamics/entropy", "thermodynamics-ext/non-ergodicity", "interactions/bootstrap", "cosmology/observer-loop-viability", "cosmology/geometric-inflation"]
enablesDerivation: []
tags: ["cosmology"]
summary: "The cosmological arrow (expansion correlating with entropy increase) is not explained by an improbable initial condition but by the non-ergodic elaboration of the bootstrap hierarchy — the accessible phase space grows as new hierarchy levels become available, making the 'low-entropy early universe' natural rather than fine-tuned"
rigorLevel: "semi-formal"
lastUpdated: 2026-04-01
---

## Overview

This derivation addresses one of the deepest puzzles in cosmology: **why does the universe have a thermodynamic arrow of time that aligns with its expansion?**

The standard account (Boltzmann, Penrose, Carroll) treats the arrow of time as a consequence of an extraordinarily improbable initial condition — the "past hypothesis." The early universe was in a state of very low gravitational entropy, and the second law drives the system toward higher entropy as it expands. But this raises an immediate question: *why* was the initial state so special? The probability of such a state in the Liouville measure of gravitational phase space is roughly $\exp(-10^{120})$ (Penrose's estimate), which is widely regarded as the deepest fine-tuning problem in physics.

The framework dissolves this puzzle by showing that **the early universe was not improbable** — the concept of "improbable relative to the full phase space" is inapplicable because the system was never ergodic in the first place.

**The argument.** The non-ergodicity derivation ([Non-Ergodicity and Conditional Thermalization](/derivations/thermodynamics-ext/non-ergodicity)) shows that the accessible phase space is partitioned by bootstrap hierarchy level, aperiodic matching rules, and coherence correlations. In the early universe, the bootstrap hierarchy was at its simplest — few levels, tight matching rules, strong correlations. The accessible phase space was correspondingly small. As the universe expanded and cooled, new hierarchy levels became available (new bound states could form), the matching rules relaxed (more configurations became compatible), and correlations weakened (subsystems decoupled). The accessible phase space *grew*.

This means the "low entropy" of the early universe is not a statement about an improbable microstate — it is a statement about a small accessible phase space. The universe was in a typical state *of the sector available to it at that time*. The entropy increased not because the system moved to a more probable region of a fixed phase space, but because the phase space itself expanded as the hierarchy elaborated.

**The result.** The cosmological arrow of time is the direction of bootstrap hierarchy elaboration — the direction in which new hierarchy levels become accessible, the matching rules relax, and the accessible phase space grows. This direction coincides with cosmic expansion because expansion provides the spatial volume and thermal conditions for new bound states to form. The arrow is structural, not statistical.

**Why this matters.** This eliminates the need for the past hypothesis. The early universe does not require a special explanation because it was not improbable — it was a typical state of a small sector that subsequently grew. The $\exp(-10^{120})$ fine-tuning problem is dissolved: that number compared an early-universe state to the full (late-universe) phase space, which is the wrong comparison because the system never had access to the full phase space.

**An honest caveat.** The identification of hierarchy elaboration with cosmic expansion (Step 4) is a structural argument, not a quantitative derivation. A fully rigorous result would require computing the rate of phase-space growth from the hierarchy dynamics and showing it matches the expansion rate. The relationship between the structural arrow (from [Time as Phase Ordering](/derivations/thermodynamics/time)) and the cosmological arrow (this derivation) is established qualitatively but not proven to be unique — there could be other contributions to the cosmological arrow not captured by hierarchy elaboration alone.

## Statement

**Theorem (structural).** *The cosmological arrow of time — the alignment of entropy increase with cosmic expansion — is a consequence of bootstrap hierarchy elaboration. The accessible phase space $\Gamma_{\text{acc}}(\tau)$ is a monotonically non-decreasing function of cosmic time $\tau$, and the entropy $S(\tau) = \ln\text{vol}(\Gamma_{\text{acc}}(\tau))$ increases because the phase space grows, not because the system moves to a more probable region of a fixed phase space.*

**Corollary (Past hypothesis dissolution).** *The "low-entropy initial condition" of the early universe requires no special explanation. The initial state was typical of the accessible sector $\Gamma_{\text{acc}}(\tau_0)$, which was small because the bootstrap hierarchy was at its simplest.*

## Derivation

### Step 1: The Phase-Space Growth Mechanism

**Definition 1.1.** The **accessible phase space** at cosmic time $\tau$ is:

$$\Gamma_{\text{acc}}(\tau) = \bigcup_{\ell=1}^{L(\tau)} \Gamma_\ell(\tau) \cap \Omega_{\mathcal{T}(\tau)} \cap \mathcal{M}_{\text{corr}}(\tau)$$

where $L(\tau)$ is the number of available bootstrap hierarchy levels at time $\tau$, $\Gamma_\ell(\tau)$ is the level-$\ell$ configuration space, $\Omega_{\mathcal{T}(\tau)}$ is the matching-rule hull, and $\mathcal{M}_{\text{corr}}(\tau)$ is the correlated submanifold (all from [Non-Ergodicity](/derivations/thermodynamics-ext/non-ergodicity)).

**Proposition 1.2 (Phase-space growth).** *$\text{vol}(\Gamma_{\text{acc}}(\tau))$ is monotonically non-decreasing in $\tau$. The growth has three independent contributions:*

1. *New hierarchy levels: $L(\tau)$ increases as the universe cools and new bound states become stable.*
2. *Matching-rule relaxation: $\text{vol}(\Omega_{\mathcal{T}(\tau)})$ increases as the tiling hull admits more configurations at lower density.*
3. *Correlation weakening: $\dim(\mathcal{M}_{\text{corr}}(\tau))$ increases as subsystems decouple (expansion reduces interaction strength).*

*Proof sketch.* (1) The bootstrap hierarchy level $\ell$ requires bound states of $\ell-1$ sub-observers. A bound state is stable when its binding energy exceeds the thermal energy: $E_{\text{bind}}(\ell) > k_B T(\tau)$. As the universe cools ($T(\tau)$ decreases with expansion), successively higher binding energies become stable, so $L(\tau)$ increases. This is the cosmic analog of the freeze-out sequence in Big Bang nucleosynthesis and recombination.

(2) The matching rules constrain the spatial arrangement of observers. At high density (early universe), the rules are maximally constraining — there are few ways to pack observers into a small volume while satisfying the aperiodic tiling constraints. As the universe expands, the available volume grows, the packing constraints relax, and more configurations become compatible with the matching rules.

(3) The coherence correlations between subsystems are maintained by interactions. As the universe expands, the interaction strength between distant observers decreases (dilution + redshift). Weakened interactions mean weaker correlations, which increase the effective dimension of $\mathcal{M}_{\text{corr}}$. $\square$

### Step 2: Entropy Growth from Phase-Space Growth

**Theorem 2.1 (Cosmological entropy growth).** *The Boltzmann entropy $S_B(\tau) = \ln\text{vol}(\Gamma_{\text{acc}}(\tau))$ is monotonically non-decreasing. This is compatible with but distinct from the structural second law (Theorem 4.1 of [Entropy as Inaccessible Coherence](/derivations/thermodynamics/entropy)).*

*Proof sketch.* The structural second law says that the inaccessible coherence $S_A = \mathcal{C}(S) - \mathcal{C}_A(S)$ is non-decreasing for any bounded observer $A$. This is a statement about a fixed phase space with a fixed total coherence. The cosmological entropy growth is a different (compatible) effect: the phase space itself is growing, so even if the observer's coherence domain tracked perfectly with the total coherence, the number of accessible microstates would increase.

The two effects are additive: $dS_{\text{total}}/d\tau = dS_{\text{structural}}/d\tau + dS_{\text{phase-space}}/d\tau \geq 0$. The structural contribution is always $\geq 0$ by Theorem 4.1 of [Entropy as Inaccessible Coherence](/derivations/thermodynamics/entropy). The phase-space contribution is $\geq 0$ by Proposition 1.2. $\square$

**Remark 2.2.** The standard past hypothesis asks: "why was $S$ low at early times?" The answer here is: because $\Gamma_{\text{acc}}(\tau_0)$ was small. The microstate was typical of $\Gamma_{\text{acc}}(\tau_0)$ — it was not an improbable member of $\Gamma_{\text{acc}}(\tau_{\text{now}})$. The comparison to the late-universe phase space is illegitimate because the system never had access to $\Gamma_{\text{acc}}(\tau_{\text{now}})$ at time $\tau_0$.

### Step 3: The Bootstrap Freeze-Out Sequence

**Proposition 3.1 (Hierarchy elaboration timeline).** *The bootstrap hierarchy elaborates in a sequence determined by the binding energies at each level:*

| Epoch | $T$ | New hierarchy level | Physical content |
|---|---|---|---|
| Planck | $\sim 10^{19}$ GeV | $\ell = 1$ | Minimal observers (Planck-scale loops) |
| GUT | $\sim 10^{16}$ GeV | $\ell = 2$ | Gauge bosons, quarks (first bound states) |
| Electroweak | $\sim 10^2$ GeV | $\ell = 3$ | Hadrons, leptons (electroweak bound states) |
| QCD | $\sim 0.2$ GeV | $\ell = 4$ | Nucleons (QCD confinement) |
| Nuclear | $\sim 1$ MeV | $\ell = 5$ | Nuclei (nuclear binding) |
| Atomic | $\sim 1$ eV | $\ell = 6$ | Atoms (electromagnetic binding) |
| Molecular | $\sim 0.01$ eV | $\ell = 7+$ | Molecules, condensed matter, life |

*At each transition, $L(\tau)$ increases by one and $\Gamma_{\text{acc}}$ grows discontinuously. Between transitions, $\Gamma_{\text{acc}}$ grows continuously from matching-rule relaxation and correlation weakening.*

**Remark 3.2.** This sequence is not derived here from first principles — it uses the known particle physics hierarchy. A fully autonomous derivation would require computing the binding energies at each bootstrap level from the axioms alone, which is beyond the current scope. The point is that the framework *explains* why this sequence produces an arrow of time: each freeze-out opens new phase space.

### Step 4: Expansion and Hierarchy Elaboration Are Coupled

**Proposition 4.1 (Expansion enables elaboration).** *Cosmic expansion is necessary for bootstrap hierarchy elaboration. Without expansion, the universe remains at thermal equilibrium at a fixed temperature, and no new hierarchy levels become accessible.*

*Argument.* In a static universe at temperature $T$, the hierarchy is frozen: levels with binding energy $E_{\text{bind}} > k_B T$ are occupied, and levels with $E_{\text{bind}} < k_B T$ are thermally disrupted. No new levels become available because $T$ is constant. Expansion lowers $T$, enabling the freeze-out of successively lower binding-energy levels. Therefore, the direction of hierarchy elaboration (increasing $L$) coincides with the direction of expansion (increasing scale factor $a$). $\square$

**Corollary 4.2 (Arrow alignment).** *The cosmological arrow (expansion), the thermodynamic arrow (entropy increase), and the structural arrow (relational invariant accumulation, from [Time as Phase Ordering](/derivations/thermodynamics/time), Theorem 6.1) all point in the same direction. This alignment is not a coincidence but a consequence of the coupling between expansion and hierarchy elaboration:*

- *Expansion $\to$ cooling $\to$ new hierarchy levels $\to$ larger $\Gamma_{\text{acc}}$ $\to$ higher $S$ (thermodynamic arrow)*
- *Expansion $\to$ more interaction events $\to$ deeper relational invariant DAG $\to$ increasing $d(v)$ (structural arrow)*

### Step 5: Dissolution of the Fine-Tuning Problem

**Theorem 5.1 (No fine-tuning).** *The Penrose fine-tuning measure $\exp(-10^{120})$ is inapplicable because it compares the initial state to the wrong reference measure. The correct comparison is to the conditional measure on $\Gamma_{\text{acc}}(\tau_0)$, with respect to which the initial state is typical.*

*Argument.* Penrose estimates the probability of the initial state by computing its Liouville measure relative to the full gravitational phase space at fixed total energy. This gives $\sim \exp(-S_{\text{max}}) \sim \exp(-10^{120})$. But the non-ergodicity theorem shows that the full phase space was never accessible. At time $\tau_0$, the accessible sector $\Gamma_{\text{acc}}(\tau_0)$ had volume $\sim \exp(S(\tau_0))$, and the initial state was a typical member of this sector. The "improbability" $\exp(-10^{120})$ is an artifact of conditioning on the wrong measure.

More precisely: the Penrose argument assumes ergodicity (the system could in principle explore $\Gamma_{\text{full}}$). The non-ergodicity theorem denies this. Therefore the Liouville measure on $\Gamma_{\text{full}}$ is not the appropriate measure for typicality judgments, and the fine-tuning number is meaningless. $\square$

**Remark 5.2.** This is not the anthropic argument. The anthropic argument says: "the initial conditions had to be special for us to exist." This argument says: "the initial conditions were not special — they were typical of the only sector that was accessible. The question 'why were they special?' presupposes an ergodicity that the framework rejects."

### Step 6: Relationship to the Structural Arrow

**Proposition 6.1 (Structural arrow as local limit).** *The structural arrow of time (Theorem 6.1 of [Time as Phase Ordering](/derivations/thermodynamics/time)) is the local limit of the cosmological arrow. The structural arrow describes the direction of relational invariant accumulation within a fixed hierarchy level; the cosmological arrow describes the direction of hierarchy elaboration across levels. In a sufficiently old, sufficiently large universe, both arrows point in the same direction.*

*Argument.* The structural arrow is defined on the interaction graph: it points from events of lower relational depth $d(v)$ to events of higher depth. This is local — it depends only on the structure of the DAG in a neighborhood. The cosmological arrow depends on the global hierarchy: it points from epochs with fewer hierarchy levels to epochs with more. At any given epoch, the structural arrow operates *within* the hierarchy levels available at that time. As new levels open (cosmological arrow), new vertices with higher depth become accessible (structural arrow advances). The two arrows are consistent because hierarchy elaboration creates the events whose depths define the structural ordering. $\square$

**Remark 6.2.** This resolves Open Gap 3 of [Time as Phase Ordering](/derivations/thermodynamics/time): "The structural arrow (increasing $d(v)$) is local. The global cosmological arrow (expansion) may require boundary conditions on the fixed-point solution." The resolution is that the cosmological arrow does not require boundary conditions — it follows from the non-ergodic growth of the accessible phase space, which is determined by the bootstrap hierarchy dynamics, not by initial or boundary conditions.

## Comparison with Standard Approaches

| Feature | Past hypothesis (Penrose/Carroll) | Observer-centrism |
|---|---|---|
| Initial state | Extraordinarily improbable ($\sim e^{-10^{120}}$) | Typical of the accessible sector |
| Fine-tuning | Deep mystery; requires explanation | Dissolved: wrong reference measure |
| Arrow mechanism | Entropy increase from special initial conditions | Phase-space growth from hierarchy elaboration |
| Ergodicity assumed | Yes (Liouville measure on full phase space) | No (fundamental non-ergodicity) |
| Expansion role | Provides room for entropy to grow | Enables hierarchy elaboration (causal) |
| Structural arrow | Separate from cosmological arrow | Local limit of cosmological arrow |

## Rigor Assessment

**What is rigorous:**
- Steps 2, 5: The entropy growth theorem and fine-tuning dissolution follow logically from the non-ergodicity framework ([Non-Ergodicity](/derivations/thermodynamics-ext/non-ergodicity)).
- Step 6: The relationship between structural and cosmological arrows follows from the definitions.

**What is semi-formal:**
- Step 1: Phase-space growth (Proposition 1.2) is argued from three independent mechanisms, each plausible but not quantitatively computed.
- Step 3: The freeze-out sequence uses known particle physics; a first-principles derivation is not attempted.
- Step 4: The coupling between expansion and hierarchy elaboration is argued qualitatively.

## Open Gaps

1. **Quantitative phase-space growth rate**: Compute $d\ln\text{vol}(\Gamma_{\text{acc}})/d\tau$ from the bootstrap dynamics and show it matches the observed entropy growth rate. This requires the binding energies at each hierarchy level, which in turn require the full gauge coupling derivation chain.
2. **Inflation and the arrow**: The geometric inflation derivation ([Geometric Inflation](/derivations/cosmology/geometric-inflation)) provides the initial expansion. The relationship between the inflationary epoch and the first hierarchy elaboration (Planck → GUT) should be made precise: is inflation the process by which the first hierarchy level becomes available?
3. **De Sitter equilibrium**: In the far future, the universe approaches de Sitter space with constant temperature $T_{dS} \sim \sqrt{\Lambda}$. At this point, no further hierarchy levels become available (the temperature stops decreasing). Does the cosmological arrow cease? This connects to the de Sitter equilibrium question and the Boltzmann brain problem.
4. **Arrow reversal**: Can the cosmological arrow reverse (in a contracting phase)? The framework predicts no, because contraction would heat the universe, disrupting higher hierarchy levels and *reducing* $\Gamma_{\text{acc}}$ — the accessible phase space would shrink, which is inconsistent with the second law (both structural and phase-space-growth). This is consistent with the $\Lambda \geq 0$ prediction of [Observer Loop Viability](/derivations/cosmology/observer-loop-viability).
5. **Relationship to Gap 3 of [Time as Phase Ordering](/derivations/thermodynamics/time)**: This derivation claims to resolve Gap 3. The resolution should be verified: does hierarchy elaboration fully account for the cosmological arrow, or are there additional contributions from boundary conditions on the fixed-point solution?
