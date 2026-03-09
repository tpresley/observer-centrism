---
title: "Speed of Light from Loop Closure"
status: "draft"
dependsOn: ["thermodynamics/action-planck", "axioms/loop-closure"]
enablesDerivation: ["spacetime/lorentz-invariance"]
tags: ["geometry"]
summary: "The loop closure condition in space+time simultaneously forces L = cT, deriving c as the universal phase propagation speed"
rigorLevel: "semi-formal"
sourceSection: "06-geometry"
lastUpdated: 2026-03-08
---

## Statement

The loop closure condition requires that an observer's loop close in both space and time simultaneously. This constraint fixes a universal relationship $L = cT$ between the spatial extent $L$ and temporal period $T$ of any observer loop, where $c$ is the phase propagation speed through the coherence geometry. The speed of light is not an empirical constant — it is structurally determined.

## Derivation

### Step 1: Spatial and Temporal Aspects of Loop Closure

A minimal observer $\mathcal{O} = (\Sigma, I, \mathcal{B})$ executes a closed cycle in its state space $\Sigma$. The interaction graph $\mathcal{G}$ from [Time as Phase Ordering](/derivations/thermodynamics/time) provides a temporal structure (the partial order $\prec$), and the observer occupies a region of the coherence geometry during each cycle.

The observer's cycle has two projections:

- **Temporal projection**: the cycle advances through $\Delta n = 1$ complete loop, costing coherence $\hbar$ (from [Action and Planck's Constant](/derivations/thermodynamics/action-planck)). This takes a duration $T$ in the interaction graph's ordering.
- **Spatial projection**: during this cycle, the observer's boundary encloses a region of spatial extent $L$ in the coherence geometry.

These two projections are not independent. The loop must close in both projections simultaneously — the phase that advances temporally is the same phase that propagates spatially through the coherence geometry.

### Step 2: Phase Propagation Speed

**Definition.** The **phase propagation speed** $c$ is the rate at which phase advances through the coherence geometry, measured as spatial distance per unit temporal ordering:

$$c = \frac{L}{T}$$

**Claim.** $c$ is universal — the same for all observers.

*Argument.* The phase propagation speed is determined by the coherence geometry $\mathcal{H}$ itself, not by the properties of any particular observer. An observer's phase is a $U(1)$ variable conjugate to its conserved charge. The rate at which this phase propagates through $\mathcal{H}$ depends only on the local structure of $\mathcal{H}$ — specifically, on the relationship between the coherence measure $\mathcal{C}$ in spatial and temporal directions.

If different observers had different phase propagation speeds $c_1 \neq c_2$, their Type I interactions (phase transfer) would require a conversion factor between spatial coherence units. But phase transfer is a direct coupling — there is no room for a conversion factor in the $U(1) \times U(1) \to U(1) \times U(1)$ structure of Type I interactions with phase conservation $\delta\theta_1 + \delta\theta_2 = 0$. Therefore $c$ must be universal.

### Step 3: Loop Closure Forces $L = cT$

For any observer, the loop closure condition requires:

$$L = cT$$

This is not a dynamical equation — it is a **constraint** from the requirement that the spatial and temporal aspects of the loop close simultaneously. An observer whose spatial extent is $L$ must complete its cycle in exactly $T = L/c$.

**Consequence for clocks and rods.** A clock (an observer whose phase count is readable) and a rod (an observer whose spatial extent is readable) are structurally identical:

- A clock of period $T$ is a rod of length $L = cT$
- A rod of length $L$ is a clock of period $T = L/c$

Space and time are not independent — they are two projections of the single loop closure geometry, related by the universal constant $c$.

### Step 4: The Coherence Metric

The loop closure condition $L = cT$ determines the signature of the coherence geometry's metric. For an observer at rest (no spatial motion relative to the coherence geometry), the coherence cost of one cycle is:

$$\mathcal{S} = \hbar = \int_0^T \mathcal{L} \, dt$$

For an observer in spatial motion with velocity $v$, the loop must still close with the same cost $\hbar$ (the minimum cycle cost is universal). The spatial and temporal path lengths satisfy:

$$ds^2 = c^2 \, dT^2 - dL^2$$

The minus sign arises because spatial and temporal extents are conjugate aspects of the same loop: increasing spatial extent at fixed total coherence cost necessarily decreases temporal extent. This is the **Minkowski metric signature** $(-,+,+,+)$ (or equivalently $(+,-,-,-)$).

**The Minkowski metric is the coherence geometry of observer loops.** It is not postulated — it emerges from the requirement that loops close in both space and time with universal phase propagation speed $c$.

### Step 5: $c$ Is Not a Free Parameter

In standard physics, $c = 299{,}792{,}458$ m/s is measured empirically. In the framework:

$$c = \frac{\text{coherence distance per cycle}}{\text{coherence time per cycle}}$$

Its value is fixed by the structure of the coherence geometry $\mathcal{H}$. Together with $\hbar$ (the coherence cost quantum), $c$ establishes the conversion between spatial and temporal coherence units. The numerical value of $c$ in SI units reflects the human choice of spatial and temporal measurement standards, not a property of the framework.

## Comparison with Standard Physics

| Standard physics | Observer-centrism |
|---|---|
| $c$ is a measured constant | $c$ is structurally fixed by loop closure |
| Minkowski metric is postulated | Minkowski signature derived from conjugate space/time projections |
| Space and time are independent | Space and time are two projections of the loop closure geometry |
| Clock = time-measuring device | Clock = observer whose phase count is readable |
| Rod = spatial reference | Rod = observer whose coherence extent is readable |

## Rigor Assessment

**What is established:**
- The requirement that loops close in both space and time simultaneously is a direct consequence of Axiom 3
- The universality argument (all observers share the same $c$) follows from the structure of Type I interactions
- The identification of space and time as conjugate projections is clean

**What needs work:**
- The argument that the Minkowski signature arises from conjugate projections is stated but not rigorously derived — it needs the full structure of the coherence Lagrangian
- The universality argument assumes Type I interactions are the only mechanism for comparing phase propagation speeds across observers — this needs verification
- The transition from the discrete interaction graph to the continuous Minkowski metric requires the continuum limit argument

## Open Gaps

1. **Why $c$ is finite**: The framework establishes that $c$ is universal but does not explain why it is finite (rather than infinite). This may connect to the discrete structure of the interaction graph — $c$ is the maximum rate at which directed paths can traverse $\mathcal{G}$.
2. **$c$ from $\hbar$ and $G$**: Whether $c$ is independently fixed or derivable from $\hbar$ and $G$ is a key question. The three constants $\hbar$, $c$, $G$ may be reducible to fewer independent quantities.
3. **Massless observers**: Photons propagate at $c$ — they are observers whose loop closure saturates the $L = cT$ bound with zero rest energy. The framework should derive the existence of such massless observers.
