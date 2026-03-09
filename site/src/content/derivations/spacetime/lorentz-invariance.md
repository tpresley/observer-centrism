---
title: "Lorentz Invariance"
status: "draft"
dependsOn: ["spacetime/speed-of-light"]
enablesDerivation: ["spacetime/gravity"]
tags: ["geometry"]
summary: "Lorentz contraction and time dilation as loop projection effects — the Lorentz group is the symmetry group of loop closure in the coherence geometry"
rigorLevel: "semi-formal"
sourceSection: "06-geometry"
lastUpdated: 2026-03-08
---

## Statement

A loop tilted in the coherence geometry projects differently onto the spatial and temporal axes of any given observer. Lorentz contraction and time dilation are one effect — the projection of a tilted loop. The Lorentz group $SO(3,1)$ is the symmetry group of the coherence geometry's loop closure condition.

## Derivation

### Step 1: Loops in the Coherence Geometry

From [Speed of Light](/derivations/spacetime/speed-of-light), the coherence geometry has the metric:

$$ds^2 = c^2 \, dt^2 - dx^2 - dy^2 - dz^2$$

Every observer loop must close in this geometry. An observer "at rest" (relative to a reference frame in the coherence geometry) has a loop oriented purely in the temporal direction — its spatial projection is a fixed point, and its temporal projection covers one period $T$.

An observer "in motion" at velocity $v$ relative to the reference frame has a loop tilted in the $(t, x)$ plane. The loop still closes — it must — but the tilt changes how the loop projects onto the reference frame's spatial and temporal axes.

### Step 2: The Tilt and Its Projections

Consider observer $\mathcal{O}'$ moving at velocity $v$ relative to observer $\mathcal{O}$. In $\mathcal{O}$'s frame, $\mathcal{O}'$'s loop traces a helical path through spacetime — advancing in $x$ by $v \, \Delta t$ per unit time while simultaneously cycling.

The coherence cost of one cycle is universal: $\hbar$. The proper time experienced by $\mathcal{O}'$ per cycle — the time in $\mathcal{O}'$'s own rest frame — is $T_0$. In $\mathcal{O}$'s frame, the cycle's temporal extent is $T$ and spatial extent is $vT$.

The Minkowski metric gives the invariant interval:

$$c^2 T_0^2 = c^2 T^2 - v^2 T^2 = (c^2 - v^2) T^2$$

Solving:

$$T = \frac{T_0}{\sqrt{1 - v^2/c^2}} = \gamma T_0$$

where $\gamma = (1 - v^2/c^2)^{-1/2}$ is the Lorentz factor.

**Time dilation**: $\mathcal{O}$ measures $\mathcal{O}'$'s cycle as taking longer than $T_0$ by the factor $\gamma$. This is not a distortion — it is the geometric projection of a tilted loop.

### Step 3: Length Contraction

The spatial extent of $\mathcal{O}'$'s loop in the direction of motion, as measured by $\mathcal{O}$, is contracted:

$$L = \frac{L_0}{\gamma}$$

*Why?* $\mathcal{O}'$'s loop closes in its rest frame with spatial extent $L_0 = c T_0$. In $\mathcal{O}$'s frame, the simultaneous spatial extent of the loop (the extent measured at a single $t$ slice) is contracted because the loop is tilted. The temporal tilt "uses up" some of the loop's extent, leaving less for the spatial projection.

This is the same effect as time dilation — both follow from the single geometric fact that the Minkowski interval $ds^2 = c^2 dt^2 - dx^2$ is preserved.

### Step 4: The Lorentz Group

**Definition.** A **Lorentz transformation** is any linear transformation of spacetime coordinates $(t, x, y, z)$ that preserves the Minkowski interval $ds^2$.

**Claim.** The group of such transformations is $SO(3,1)$ — the Lorentz group.

*Structural argument.* The loop closure condition requires $ds^2$ to be invariant (the coherence cost per cycle is universal). Any transformation that maps valid loops to valid loops must preserve $ds^2$. The set of all such transformations forms the Lorentz group:

- **Rotations** $SO(3)$: reorient the loop in space without tilting it in time — the coherence geometry is isotropic
- **Boosts**: tilt the loop in the $(t, x_i)$ planes — change the observer's velocity

The Lorentz group is not a postulate. It is the **symmetry group of loop closure** in the coherence geometry.

### Step 5: Why $v < c$

A boost by velocity $v$ requires $|v| < c$. At $v = c$, the Lorentz factor $\gamma \to \infty$: the loop's temporal projection diverges. The spatial extent contracts to zero. This is the **null limit** — the loop degenerates to a point moving at $c$ with zero proper time per cycle.

At $v > c$, the Minkowski interval becomes spacelike — $c^2 dt^2 - dx^2 < 0$ — and the loop cannot close in the temporal direction. The observer would fail to complete a cycle.

Therefore: **massive observers (those with $T_0 > 0$) cannot reach $c$**. This is not an energy limitation — it is a topological constraint on loop closure.

Massless observers ($T_0 = 0$) travel at exactly $c$. Their loops are null — zero proper time per cycle, zero rest spatial extent. They exist at the boundary of the loop closure condition.

## Comparison with Standard Physics

| Standard physics | Observer-centrism |
|---|---|
| Lorentz invariance is postulated (2nd postulate of SR) | Lorentz invariance is the symmetry group of loop closure |
| Time dilation is a physical effect | Time dilation is a projection effect of a tilted loop |
| Length contraction is a physical effect | Length contraction is the same projection effect |
| $v < c$ follows from energy considerations | $v < c$ follows from loop closure topology |
| The Lorentz group is the spacetime symmetry | The Lorentz group is the coherence geometry's isometry group |

## Rigor Assessment

**What is established:**
- The derivation of time dilation and length contraction from the Minkowski metric is standard
- The identification of the Lorentz group as the invariance group of $ds^2$ is a mathematical fact
- The $v < c$ constraint from loop closure is a clean structural argument

**What needs work:**
- The argument that the coherence geometry's metric has *exactly* the Minkowski form (rather than, say, Finsler geometry or some other Lorentzian structure) relies on the speed-of-light derivation
- The connection between "loop tilt" and "relative velocity" needs to be made more precise — what exactly determines the tilt angle?
- The massless limit ($T_0 = 0$) needs justification that such observers exist and are stable

## Open Gaps

1. **Acceleration**: This derivation covers inertial (constant velocity) observers. Accelerated observers require the full machinery of curved coherence geometry — connecting to [Gravity](/derivations/spacetime/gravity).
2. **Poincaré group**: Adding translations to the Lorentz group gives the full Poincaré group $ISO(3,1)$. The translation symmetry should follow from spatial and temporal homogeneity of the coherence geometry.
3. **CPT symmetry**: The discrete symmetries (charge conjugation, parity, time reversal) of the Lorentz group should connect to the coherence-dual pair structure of [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs).
