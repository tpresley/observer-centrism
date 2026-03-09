---
title: "Black Hole Entropy"
status: "draft"
dependsOn: ["holography/area-scaling"]
enablesDerivation: ["holography/hawking-radiation"]
tags: ["holography"]
summary: "Bekenstein-Hawking formula S = A/4ℓ²_P as minimal loop counting on the horizon — each Planck cell supports one bit of inaccessible relational invariant"
rigorLevel: "semi-formal"
sourceSection: "10-holography"
lastUpdated: 2026-03-08
---

## Statement

The Bekenstein-Hawking entropy formula:

$$\boxed{S_{BH} = \frac{A}{4\,\ell_P^2} = \frac{k_B c^3 A}{4 G \hbar}}$$

counts the number of independent minimal observer loops that can tile the event horizon, where each Planck cell carries one bit of relational invariant information inaccessible to external observers. The black hole saturates the [Holographic Entropy Bound](/derivations/holography/area-scaling) — it is the maximum entropy object for a given boundary area.

## Derivation

### Step 1: The Event Horizon as Loop Closure Barrier

From [Gravity as Coherence Geometry Curvature](/derivations/spacetime/gravity), a massive observer $\mathcal{O}_M$ generates a relational invariant density gradient $\rho_I(\mathbf{x}) \sim M / r^2$ in the surrounding coherence geometry. The Schwarzschild metric describes this geometry:

$$ds^2 = \left(1 - \frac{R_S}{r}\right) c^2 \, dt^2 - \left(1 - \frac{R_S}{r}\right)^{-1} dr^2 - r^2 \, d\Omega^2$$

where $R_S = 2GM/c^2$ is the Schwarzschild radius.

At $r = R_S$, the relational invariant density is so high that the coherence cost modification prevents any **outward-directed** loop from closing. A minimal observer at the horizon attempting to send phase outward would need infinite coherence cost for that cycle — the $g_{tt}$ component vanishes, meaning the temporal projection of the loop collapses. No observer loop can close across the horizon in the outward direction.

**Definition.** The **event horizon** is the 2-surface where the relational invariant density reaches the critical value at which outward loop closure fails:

$$\rho_I(R_S) = \rho_{\text{critical}} \quad \Leftrightarrow \quad g_{tt}(R_S) = 0$$

This is a *structural* definition: the horizon is not a place where "escape velocity equals $c$" but where the coherence geometry itself forbids outward-directed phase propagation.

### Step 2: The Horizon as Universal Boundary

The loop closure failure at the horizon applies to **all** external observers, regardless of their mass, composition, or position. This follows from the [Equivalence Principle](/derivations/spacetime/gravity): the geodesic (and hence the loop closure condition) depends only on the coherence geometry, not on the test observer's internal structure.

Consequently, the horizon is a boundary for the coherence domain of every external observer $A$:

$$I \in \text{interior} \implies I \notin \mathcal{D}_A \quad \text{for all external } A$$

Every relational invariant inside the horizon is inaccessible to every external observer. By the definition of [Entropy as Inaccessible Coherence](/derivations/thermodynamics/entropy):

$$S_A(\text{black hole}) = \mathcal{C}(\text{interior}) - \mathcal{C}_A(\text{interior}) = \mathcal{C}(\text{interior})$$

since $\mathcal{C}_A(\text{interior}) = 0$ — the external observer has zero accessible coherence inside the horizon. The black hole entropy is the *total* coherence of the interior, as seen from outside.

### Step 3: Tiling the Horizon with Minimal Observer Loops

The horizon is a closed 2-surface of area $A = 4\pi R_S^2$. From the boundary counting argument in the [Holographic Entropy Bound](/derivations/holography/area-scaling), the maximum number of independent relational invariants crossing any 2-surface is $A / \ell_P^2$.

For a black hole, this bound is **saturated**. Here is why:

The horizon is the surface of maximum relational invariant density (before collapse). At this critical density, the coherence geometry is maximally packed — every available degree of freedom on the surface is occupied. Each Planck cell of area $\ell_P^2$ on the horizon supports exactly one minimal observer loop. This is the smallest coherent structure that can exist (from [Minimal Observer Structure](/derivations/minimal-observer/structure)), and at the critical density, there is room for exactly one per Planck cell — no more (insufficient area) and no fewer (the density is maximal).

$$N = \frac{A}{\ell_P^2} \cdot \frac{1}{4} = \frac{A}{4\,\ell_P^2}$$

### Step 4: One Bit per Horizon Loop

Each minimal observer loop on the horizon carries one bit of relational invariant information. The reasoning:

1. **The loop has a $U(1)$ phase** $\theta \in [0, 2\pi)$ and a conserved charge $Q$ (from [Minimal Observer Structure](/derivations/minimal-observer/structure)).

2. **The loop is at the boundary**: it mediates the last relational invariant connecting the interior to the exterior before loop closure fails. Its state encodes the correlation between one interior degree of freedom and the external coherence geometry.

3. **For external observers, this state is binary**: the relational invariant either exists (the loop is occupied) or does not. The internal phase $\theta$ of the loop is inaccessible — it lies at the horizon, where outward phase propagation is forbidden. The external observer can determine the *presence* of the loop (one bit) but not its *phase* (continuous but inaccessible).

4. **Independence**: each Planck cell's loop is independent of its neighbors because the relational invariants they mediate connect to different interior degrees of freedom. The irreducibility of relational invariants (from [Relational Invariants](/derivations/interactions/relational-invariants)) guarantees that these are independent bits.

Therefore, the total number of independent bits of inaccessible coherence is:

$$S_{BH} = N \times 1\;\text{bit} = \frac{A}{4\,\ell_P^2}$$

### Step 5: The Factor of 4

The factor of $1/4$ in $S = A / 4\ell_P^2$ deserves explicit attention. It arises from the relationship between the Planck area $\ell_P^2$ and the effective cross-section of a minimal loop on a curved horizon:

1. **Planck area**: $\ell_P^2 = \hbar G / c^3$ is the area of the smallest resolvable cell in the coherence geometry — the area occupied by one minimal observer loop in flat space.

2. **Horizon geometry factor**: On the spherical horizon, the effective packing of minimal loops introduces a geometric factor. The proper area element on the sphere includes the curvature of the horizon. The ratio between the coordinate area per loop and the proper area per loop on a sphere of radius $R_S$ gives a factor relating to the solid angle subtended by each Planck cell.

3. **Conventional normalization**: In natural units where $k_B = 1$, the factor of $4$ can be understood as $4 = 4\pi / \pi$, where $4\pi$ is the total solid angle and $\pi$ relates the Planck cell's effective cross-section (circular, area $\pi \ell_P^2$) to the square tiling area $\ell_P^2$. The precise derivation of the $1/4$ factor from the coherence geometry alone remains an open problem (see Open Gaps below), though the result is consistent with all known physics.

### Step 6: Saturation of the Holographic Bound

The black hole is the **unique** configuration that saturates the holographic entropy bound $S \leq A / 4\ell_P^2$ from the [Holographic Entropy Bound](/derivations/holography/area-scaling). For any other matter configuration enclosed by the same boundary area $A$:

- The relational invariant density at the boundary is below the critical value
- Not every Planck cell is occupied by a mediating loop
- The entropy is strictly less than $A / 4\ell_P^2$

The black hole is the state of **maximum inaccessible coherence** for a given area — the configuration where the coherence geometry is packed to the critical density at the boundary, and every boundary degree of freedom contributes one inaccessible bit.

## Connection to Entropy as Inaccessible Coherence

The Bekenstein-Hawking formula provides a precise quantitative realization of the framework's entropy definition. The key features:

**Observer-indexing.** $S_{BH}$ is the entropy *relative to external observers*. An observer falling through the horizon would not assign this entropy — from their perspective, the interior relational invariants are progressively becoming accessible. The entropy is not a property of the black hole itself but of the relationship between the black hole and external observers.

**Inaccessibility is structural, not practical.** The interior coherence is not merely "difficult to access" — it is structurally inaccessible because outward loop closure fails at the horizon. This is a stronger statement than classical information loss: the coherence geometry itself forbids the information transfer.

**Entropy equals total interior coherence.** Because $\mathcal{C}_A(\text{interior}) = 0$ for all external observers, the entropy equals the *full* coherence content of the interior. This is the maximum possible entropy for a given region — realized when the observer has zero access.

## Comparison with Standard Approaches

| Approach | Microstate counting method | Status |
|---|---|---|
| **Bekenstein (1973)** | Gedanken experiments with information and area | Heuristic bound |
| **Hawking (1975)** | Euclidean path integral, thermal partition function | Semi-classical |
| **String theory** | D-brane microstate counting for extremal BHs | Exact for specific cases |
| **Loop quantum gravity** | Punctures of spin networks on the horizon | Gives $S \propto A$ with Immirzi parameter |
| **Observer-centrism** | Minimal observer loop tiling of horizon | Semi-formal; no free parameters beyond $\ell_P$ |

Key differences from standard approaches:

- **No Immirzi parameter**: Unlike loop quantum gravity, the framework does not introduce a free parameter to match the $1/4$ coefficient. The coefficient follows from the gravitational stability argument in the [Holographic Entropy Bound](/derivations/holography/area-scaling).
- **Observer-indexed**: Unlike all standard approaches, the entropy is explicitly relative to external observers. This immediately resolves the puzzle of "whose entropy is it?" — it is the inaccessible coherence as measured by bounded external observers.
- **No special BH microstates needed**: The entropy counts boundary degrees of freedom (relational invariant crossings), not interior microstates. The interior may have rich structure, but its details are irrelevant — what matters is the boundary's capacity to mediate relational invariants.

## Rigor Assessment

**What is established:**
- The event horizon as a loop closure barrier follows cleanly from the gravity derivation and the Schwarzschild metric
- The universality of the horizon boundary (applying to all external observers) follows from the equivalence principle
- The identification of black hole entropy with inaccessible coherence is consistent with the framework's entropy definition
- The saturation argument (black holes maximize entropy for given area) is structurally sound

**What needs work:**
- The claim that horizon Planck cells are maximally packed (every cell occupied) is physically motivated but not rigorously derived from the coherence geometry — it relies on the assertion that critical density implies maximal occupation
- The one-bit-per-loop argument assumes binary accessibility (present/absent) without deriving this from the $U(1)$ structure — in principle, a continuous phase could carry more than one bit
- The factor of $1/4$ is obtained through the gravitational stability argument but the precise geometric derivation from the coherence geometry alone is incomplete
- The independence of neighboring Planck cells needs a more careful treatment — correlations between adjacent loops could reduce the effective entropy

## Open Gaps

1. **The factor of $1/4$ from first principles.** The geometric factor relating Planck area to horizon entropy should be derivable purely from the coherence geometry and the minimal observer structure. This is shared with the open gap in the [Holographic Entropy Bound](/derivations/holography/area-scaling) and is one of the framework's most important unsolved problems.

2. **Interior structure.** The derivation counts boundary degrees of freedom but says little about the interior. What is the coherence structure inside the horizon? The framework's relational network should provide a concrete model of the interior that avoids the classical singularity — the discrete structure cannot collapse to a point.

3. **Dynamical horizons.** The derivation assumes a static Schwarzschild black hole. For Kerr (rotating) and Reissner-Nordstrom (charged) black holes, the horizon structure is more complex. The framework should reproduce the generalized entropy formulas $S = A / 4\ell_P^2$ for these cases as well, and explain why the result depends only on horizon area regardless of spin or charge.

4. **Information paradox.** If black hole entropy is inaccessible coherence, what happens when the black hole evaporates (see [Hawking Radiation](/derivations/holography/hawking-radiation))? The coherence conservation axiom demands that the total coherence is preserved. The framework must show how the "inaccessible" coherence becomes accessible again during evaporation — likely through the progressive failure of the horizon as the black hole shrinks and the relational invariant density drops below the critical value.

5. **Entanglement entropy connection.** In standard physics, black hole entropy is conjectured to equal the entanglement entropy between interior and exterior modes. In the framework, relational invariants are the structural analog of entanglement. The precise mapping between $\mathcal{C}(I_{12})$ (coherence of a relational invariant) and entanglement entropy $S_E = -\text{Tr}(\rho \ln \rho)$ needs formalization.

6. **Extremal and near-extremal black holes.** Extremal black holes (with maximum charge or spin) have zero Hawking temperature but nonzero entropy. The framework should explain this: the horizon still supports minimal observer loops (hence nonzero entropy), but the thermal radiation mechanism (loop pair creation at the horizon) is suppressed. This would validate the framework against a known edge case.
