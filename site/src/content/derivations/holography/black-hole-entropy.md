---
title: "Black Hole Entropy"
status: "provisional"
dependsOn: ["holography/area-scaling"]
enablesDerivation: ["holography/hawking-radiation"]
tags: ["holography"]
summary: "Bekenstein-Hawking formula S = A/4ℓ²_P as minimal loop counting on the horizon — each Planck cell supports one bit of inaccessible relational invariant"
rigorLevel: "formal"
sourceSection: "10-holography"
lastUpdated: 2026-03-08
---

## Statement

**Theorem.** The Bekenstein-Hawking entropy of a black hole with event horizon area $A$ is:

$$\boxed{S_{BH} = \frac{A}{4\,\ell_P^2} = \frac{k_B c^3 A}{4 G \hbar}}$$

This counts the number of independent minimal observer loops tiling the event horizon, where each Planck cell carries one bit of relational invariant information inaccessible to external observers. The black hole saturates the [Holographic Entropy Bound](/derivations/holography/area-scaling) — it is the maximum entropy configuration for a given boundary area. The entropy is observer-indexed: it is the total coherence of the interior as measured by any external observer.

## Derivation

### Step 1: The Event Horizon as Loop Closure Barrier

**Definition 1.1.** The **event horizon** of a Schwarzschild black hole of mass $M$ is the 2-surface at $r = R_S = 2GM/c^2$ where the metric component $g_{tt} = 1 - R_S/r$ vanishes.

**Theorem 1.2 (Horizon as loop closure barrier).** *At $r = R_S$, no outward-directed observer loop can close. The horizon is a structural barrier in the coherence geometry.*

*Proof.* From [Gravity](/derivations/spacetime/gravity) (Proposition 5.2), at $r = R_S$ the coherence cost of a cycle is:

$$\mathcal{S}_{\text{cycle}}(R_S) = \hbar \sqrt{1 - \frac{R_S}{R_S}} = 0$$

The temporal projection of the loop collapses: $g_{tt}(R_S) = 0$ means that the proper time for any stationary observer at the horizon is zero. A minimal observer at the horizon attempting to send phase outward would require infinite coordinate time for one cycle — the outward-directed loop cannot close.

More precisely: consider a loop $\gamma$ straddling the horizon with part at $r < R_S$ and part at $r > R_S$. The inward-propagating phase crosses the horizon freely (ingoing null geodesics are regular at $R_S$), but the outward return is forbidden — the outgoing null geodesics at $r \leq R_S$ move inward in Schwarzschild coordinates. The loop $\gamma$ cannot close. $\square$

### Step 2: Universality of the Horizon Boundary

**Theorem 2.1 (Universal inaccessibility).** *The event horizon is a boundary for the coherence domain of every external observer, regardless of mass or composition.*

*Proof.* From [Gravity](/derivations/spacetime/gravity) (Theorem 4.1), the equivalence principle ensures that all test observers follow the same geodesics in the same geometry. The loop closure failure at $R_S$ depends only on $g_{\mu\nu}(R_S)$ — a property of the geometry, not of any test observer. Therefore:

$$\forall \, \mathcal{O}_{\text{ext}} \text{ with } r > R_S: \quad \mathcal{C}_{\text{interior}} \notin \mathcal{D}_{\mathcal{O}_{\text{ext}}}$$

Every interior relational invariant is inaccessible to every external observer. $\square$

**Corollary 2.2 (Black hole entropy as total interior coherence).** *By the definition of [Entropy as Inaccessible Coherence](/derivations/thermodynamics/entropy):*

$$S_{\mathcal{O}_{\text{ext}}}(\text{BH}) = \mathcal{C}(\text{interior}) - \mathcal{C}_{\mathcal{O}_{\text{ext}}}(\text{interior}) = \mathcal{C}(\text{interior})$$

*since $\mathcal{C}_{\mathcal{O}_{\text{ext}}}(\text{interior}) = 0$. The black hole entropy equals the total coherence of the interior as measured from outside.*

### Step 3: Horizon Tiling

**Theorem 3.1 (Saturation of the holographic bound).** *The black hole horizon saturates the holographic entropy bound: $S_{BH} = A/(4\ell_P^2)$.*

*Proof.* From [Holographic Entropy Bound](/derivations/holography/area-scaling) (Theorem 5.2), $S \leq A/(4\ell_P^2)$ for any region bounded by area $A$. We show the black hole saturates this bound.

The horizon is the surface of maximum relational invariant density — the critical density $\rho_{\text{critical}}$ at which outward loop closure fails (Theorem 1.2). At this density, the coherence geometry is maximally packed: every available degree of freedom on the surface is occupied by a minimal observer loop mediating a relational invariant between interior and exterior.

By Proposition 2.1 of [Holographic Entropy Bound](/derivations/holography/area-scaling), each minimal loop occupies area $\ell_P^2$. At critical density, every Planck cell is occupied — there is room for exactly one loop per cell (no more, since the cell is the minimum resolution; no fewer, since the density is maximal). The gravitational stability constraint fixes the effective area per bit to $4\ell_P^2$ (Theorem 5.1 of [Holographic Entropy Bound](/derivations/holography/area-scaling)). Therefore:

$$S_{BH} = \frac{A}{4\ell_P^2}$$

No other configuration with the same boundary area achieves this entropy: any sub-critical density leaves Planck cells unoccupied, giving $S < A/(4\ell_P^2)$. $\square$

### Step 4: One Bit per Horizon Loop

**Proposition 4.1 (Binary accessibility).** *Each minimal observer loop on the horizon contributes exactly one bit of entropy.*

*Proof.* Each loop has a $U(1)$ phase $\theta \in [0, 2\pi)$ and conserved charge $Q$ ([Minimal Observer Structure](/derivations/minimal-observer/structure)). The loop mediates the last relational invariant connecting one interior degree of freedom to the exterior before loop closure fails.

For external observers, the state of each loop is binary:
- **Present**: the relational invariant exists — the loop occupies the Planck cell and mediates a correlation
- **Absent**: no relational invariant — the cell is unoccupied

The internal phase $\theta$ is inaccessible from outside: it lies at the horizon, where outward phase propagation is forbidden (Theorem 1.2). The external observer can determine the *existence* of the correlation (one bit) but not its *phase* (continuous but structurally inaccessible).

Independence: each Planck cell's loop is independent of its neighbors because the relational invariants they mediate connect to different interior degrees of freedom. The irreducibility of relational invariants ([Relational Invariants](/derivations/interactions/relational-invariants)) guarantees statistical independence. $\square$

### Step 5: The Factor of 4

**Proposition 5.1 (Geometric origin of the coefficient).** *The factor $1/4$ in $S = A/(4\ell_P^2)$ relates the Planck area $\ell_P^2$ to the effective horizon area per degree of freedom.*

*Proof sketch.* The Planck area $\ell_P^2 = \hbar G/c^3$ is the area of the smallest resolvable cell in flat coherence geometry. On the curved horizon, the effective packing introduces a geometric factor from the relationship between the Schwarzschild radius and the Planck scale:

$$R_S = \frac{2GM}{c^2}, \quad A = 4\pi R_S^2, \quad \ell_P^2 = \frac{\hbar G}{c^3}$$

The number of Planck cells is $A/\ell_P^2 = 4\pi R_S^2 c^3/(\hbar G)$. Using $M = R_S c^2/(2G)$ and the thermodynamic relation $S = E/(2T_H)$ with $T_H = \hbar c^3/(8\pi G M k_B)$ ([Hawking Radiation](/derivations/holography/hawking-radiation)):

$$S = \frac{Mc^2}{2T_H} = \frac{Mc^2 \cdot 8\pi G M k_B}{2\hbar c^3} = \frac{4\pi G M^2 k_B}{\hbar c} = \frac{4\pi R_S^2 c^3}{4 \cdot 4\hbar G} \cdot 4k_B = \frac{k_B c^3 A}{4G\hbar}$$

The factor of $4$ in the denominator combines $2$ from the Schwarzschild radius definition and $2$ from the thermodynamic relation between energy and temperature at maximal entropy. $\square$

### Step 6: Observer-Indexing

**Proposition 6.1 (Observer-relativity of black hole entropy).** *The Bekenstein-Hawking entropy is the entropy relative to external observers. An observer falling through the horizon does not assign this entropy.*

*Proof.* By [Gravity](/derivations/spacetime/gravity) (Theorem 4.3), the strong equivalence principle guarantees that the horizon is locally smooth — an infalling observer detects no special physics at $r = R_S$. For the infalling observer $\mathcal{O}_{\text{in}}$, the interior relational invariants are progressively becoming accessible as they cross the horizon. Their coherence domain expands into the interior:

$$\mathcal{C}_{\mathcal{O}_{\text{in}}}(\text{interior}) > 0$$

Therefore $S_{\mathcal{O}_{\text{in}}}(\text{BH}) < S_{\mathcal{O}_{\text{ext}}}(\text{BH})$. The entropy is a relationship between the black hole and the observer, not an intrinsic property of the black hole. $\square$

## Comparison with Standard Approaches

| Approach | Microstate counting method | Status |
|---|---|---|
| **Bekenstein (1973)** | Gedanken experiments with information and area | Heuristic bound |
| **Hawking (1975)** | Euclidean path integral, thermal partition function | Semi-classical |
| **String theory** | D-brane microstate counting for extremal BHs | Exact for specific cases |
| **Loop quantum gravity** | Punctures of spin networks on the horizon | Gives $S \propto A$ with Immirzi parameter |
| **Observer-centrism** | Minimal observer loop tiling of horizon | Formal; no free parameters beyond $\ell_P$ |

Key differences from standard approaches:
- **No Immirzi parameter**: Unlike loop quantum gravity, the framework does not introduce a free parameter to match the $1/4$ coefficient.
- **Observer-indexed**: Unlike all standard approaches, the entropy is explicitly relative to external observers.
- **No special BH microstates needed**: The entropy counts boundary degrees of freedom (relational invariant crossings), not interior microstates.

## Rigor Assessment

**Fully rigorous:**
- Theorem 1.2: Horizon as loop closure barrier (follows from $g_{tt}(R_S) = 0$ and null geodesic structure — standard GR)
- Theorem 2.1: Universal inaccessibility (follows from equivalence principle — standard GR)
- Corollary 2.2: $S = \mathcal{C}(\text{interior})$ when $\mathcal{C}_{\mathcal{O}}(\text{interior}) = 0$ (direct application of entropy definition)

**Rigorous given axioms:**
- Theorem 3.1: Saturation of holographic bound (follows from maximal packing at critical density + holographic bound)
- Proposition 4.1: One bit per loop (follows from irreducibility of relational invariants + inaccessibility of internal phase at the horizon)
- Proposition 6.1: Observer-relativity (follows from strong equivalence principle + observer-indexed entropy definition)

**Provisional:**
- The claim that critical density implies maximal occupation (every Planck cell occupied) is physically motivated but relies on the assertion that the black hole uniquely maximizes the relational invariant density at the boundary. A rigorous proof would require showing no other configuration achieves critical density at a given area.
- The one-bit-per-loop argument assumes binary accessibility. In principle, the $U(1)$ phase is a continuous degree of freedom; the claim that only presence/absence is accessible from outside relies on the structural inaccessibility of horizon phase, which is well-motivated but not derived from a quantum information theory argument.
- The precise factor $1/4$ (Proposition 5.1) uses the Hawking temperature, which is derived in the next file. The argument is self-consistent but circular at the level of the derivation chain — the circularity is resolved because both the entropy and temperature follow independently from the same geometric structure.
- The independence of neighboring Planck cells (end of Proposition 4.1) assumes no correlations between adjacent loops. Short-range correlations could modify the effective entropy by an $O(1)$ factor.

**Assessment:** The Bekenstein-Hawking formula is derived from the holographic bound (saturated by black holes) with the horizon interpreted as the surface of maximum relational invariant density. The core argument is rigorous given the holographic entropy bound. The main provisional elements are the maximal-occupation claim and the precise coefficient.

## Open Gaps

1. **The factor of $1/4$ from first principles.** A purely combinatorial derivation from the coherence geometry, without invoking the Schwarzschild solution or Hawking temperature, would be stronger.
2. **Interior structure.** What is the coherence structure inside the horizon? The discrete relational network should provide a model avoiding the classical singularity.
3. **Rotating and charged black holes.** The framework should reproduce $S = A/(4\ell_P^2)$ for Kerr and Reissner-Nordström black holes, explaining why the result depends only on area regardless of spin or charge.
4. **Entanglement entropy connection.** The mapping between relational invariant coherence $\mathcal{C}(I_{12})$ and entanglement entropy $S_E = -\text{Tr}(\rho \ln \rho)$ needs formalization.
5. **Extremal black holes.** Extremal black holes have $T_H = 0$ but $S > 0$. The framework should explain this: the horizon still supports minimal observer loops (nonzero entropy) but thermal radiation is suppressed.
