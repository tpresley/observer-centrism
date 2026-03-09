---
title: "Hawking Radiation"
status: "provisional"
dependsOn: ["holography/black-hole-entropy", "minimal-observer/coherence-dual-pairs"]
enablesDerivation: ["holography/information-paradox"]
tags: ["holography"]
summary: "Loop closure at horizons forces coherence-dual pair production — one falls in, one radiates out; thermal spectrum from maximal entropy"
rigorLevel: "formal"
sourceSection: "10-holography"
lastUpdated: 2026-03-08
---

## Statement

**Theorem.** Minimal observer loops straddling a black hole horizon cannot close — the horizon prevents the outward-directed part of the loop from returning. The loop closure axiom (Axiom 3) and coherence conservation (Axiom 1) together force a resolution: a coherence-dual pair is produced at the horizon. One member falls inward; the other propagates outward as Hawking radiation. The outgoing radiation has a thermal (Planck) spectrum at the Hawking temperature $T_H = \hbar\kappa/(2\pi c k_B)$, where $\kappa$ is the surface gravity. The thermal character follows from the maximal-entropy nature of the horizon state.

## Derivation

### Step 1: Broken Loops at the Horizon

**Definition 1.1.** A **horizon-straddling loop** is a minimal observer loop $\gamma$ in the coherence geometry whose spatial extent includes points both inside and outside the event horizon at $r = R_S$.

**Theorem 1.2 (Loop breaking).** *Every horizon-straddling loop is broken: it cannot satisfy the loop closure condition.*

*Proof.* By [Black Hole Entropy](/derivations/holography/black-hole-entropy) (Theorem 1.2), no outward-directed loop can close at $r = R_S$. A horizon-straddling loop $\gamma$ has a portion at $r < R_S$ and a portion at $r > R_S$. The inward-propagating phase crosses the horizon freely (ingoing null geodesics are regular at $R_S$ in Eddington-Finkelstein coordinates). However, the outward return is forbidden: at $r \leq R_S$, all future-directed causal curves move inward. Therefore $\gamma$ cannot close — its inward portion cannot return outward. $\square$

**Proposition 1.3 (Axiom conflict).** *A broken loop violates both Axiom 3 (Loop Closure) and, if left unresolved, Axiom 1 (Coherence Conservation). The coherence carried by the loop must be accounted for.*

### Step 2: Resolution via Coherence-Dual Pair Production

**Theorem 2.1 (Pair production at the horizon).** *The broken loop resolves into a coherence-dual pair $(\mathcal{O}_{\text{in}}, \bar{\mathcal{O}}_{\text{out}})$:*

$$\text{vacuum loop at horizon} \to \mathcal{O}_{\text{in}} + \bar{\mathcal{O}}_{\text{out}}$$

*where $\mathcal{O}_{\text{in}}$ falls through the horizon and $\bar{\mathcal{O}}_{\text{out}}$ propagates outward as radiation.*

*Proof.* By Proposition 1.3, the broken loop must be resolved consistently with Axioms 1 and 3. From [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs):

**(i) Equal mass.** The pair members have equal mass (Theorem 2.1 of [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs)): they satisfy the same variational equation for loop closure.

**(ii) Conjugate charges.** The pair members carry conjugate charges $Q_{\text{in}} + Q_{\text{out}} = 0$ (Theorem 3.1 of [Coherence-Dual Pairs](/derivations/minimal-observer/coherence-dual-pairs)), so the total charge of the vacuum is preserved.

**(iii) Loop closure restored.** Each member independently closes its own loop: $\mathcal{O}_{\text{in}}$ completes its cycle inside the horizon (where loop closure is permitted in all directions); $\bar{\mathcal{O}}_{\text{out}}$ completes its cycle outside (where outward propagation is free). Both satisfy Axiom 3.

**(iv) Coherence conservation.** The total coherence is conserved: the energy of the outgoing radiation is extracted from the gravitational field of the black hole — the coherence geometry itself supplies the energy. The black hole mass decreases by the energy of the outgoing quantum. $\square$

### Step 3: The Hawking Temperature

**Theorem 3.1 (Hawking temperature).** *The characteristic energy of the outgoing radiation is determined by the surface gravity $\kappa$ of the horizon:*

$$T_H = \frac{\hbar \kappa}{2\pi c k_B}$$

*For a Schwarzschild black hole: $\kappa = c^4/(4GM)$, giving:*

$$T_H = \frac{\hbar c^3}{8\pi G M k_B}$$

*Proof.* The energy of the outgoing partner $\bar{\mathcal{O}}_{\text{out}}$ is determined by the coherence cost of the broken loop at the horizon. The loop is broken at $r = R_S$, where the gravitational potential gradient is characterized by the surface gravity:

$$\kappa = \lim_{r \to R_S} \left(\frac{c^4}{4GM} \cdot \frac{1}{\sqrt{1 - R_S/r}}\right) \cdot \sqrt{1 - R_S/r} = \frac{c^4}{4GM}$$

(for Schwarzschild; this is the proper acceleration needed for a stationary observer at $R_S$, redshifted to infinity.)

The coherence cost of the broken loop is set by $\kappa$: the energy scale at which the geometry "tears" the vacuum loop is $E \sim \hbar\kappa/c$. The $2\pi$ factor arises from the $U(1)$ periodicity of the phase: a complete thermal cycle at the horizon requires $2\pi$ units of phase, each costing $\hbar\kappa/c$, giving the characteristic thermal energy $k_B T_H = \hbar\kappa/(2\pi c)$.

Equivalently: the Euclidean (Wick-rotated) Schwarzschild metric has a conical singularity at $r = R_S$ unless the Euclidean time coordinate has period $\beta = 2\pi c/\kappa$. The absence of a conical singularity is the geometric statement that the loop closure is smooth — the same condition as Axiom 3. The period $\beta = 1/(k_B T_H)$ gives the Hawking temperature. $\square$

**Corollary 3.2 (Inverse mass dependence).** *Smaller black holes are hotter: $T_H \propto 1/M$. A solar-mass black hole has $T_H \sim 6 \times 10^{-8}$ K (far below the CMB). A Planck-mass black hole has $T_H \sim 10^{32}$ K.*

### Step 4: Thermal Spectrum

**Theorem 4.1 (Planck spectrum).** *The outgoing radiation has a thermal (Planck) spectrum at temperature $T_H$.*

*Proof.* The thermal spectrum follows from the maximal-entropy character of the horizon:

**(i)** From [Black Hole Entropy](/derivations/holography/black-hole-entropy) (Theorem 3.1), the horizon is a surface of maximum entropy for its area — it saturates the holographic bound.

**(ii)** A maximum-entropy state in thermal equilibrium radiates with a thermal spectrum — this is the definition of thermal equilibrium (maximum entropy subject to fixed mean energy). The radiation is determined by $T_H$ alone.

**(iii)** The spectrum is independent of the black hole's formation history: the no-hair theorem (the black hole is characterized only by $M$, $Q$, $J$) ensures that all black holes of the same mass radiate identically.

Formally, the number of particles emitted per mode with frequency $\omega$ is:

$$\langle n_\omega \rangle = \frac{\Gamma_\omega}{e^{\hbar\omega/(k_B T_H)} - 1}$$

where $\Gamma_\omega$ is the greybody factor (the transmission coefficient through the effective potential barrier surrounding the black hole). For $\Gamma_\omega = 1$ (perfect transmission), this is the Planck distribution. $\square$

**Corollary 4.2 (No interior information).** *The thermal spectrum carries no information about the black hole's interior beyond $M$, $Q$, and $J$. This is the origin of the information paradox — addressed in [Information Paradox](/derivations/holography/information-paradox).*

### Step 5: Black Hole Evaporation

**Proposition 5.1 (Mass loss rate).** *The outgoing radiation carries energy, reducing the black hole mass:*

$$\frac{dM}{dt} = -\frac{\hbar c^6}{15360 \pi G^2 M^2}$$

*Proof sketch.* The total luminosity of a black body of temperature $T$ and area $A$ is $L = \sigma T^4 A$ (Stefan-Boltzmann law). For a Schwarzschild black hole: $T = T_H$, $A = 4\pi R_S^2 = 16\pi G^2 M^2/c^4$. Substituting:

$$L = \sigma \left(\frac{\hbar c^3}{8\pi G M k_B}\right)^4 \cdot \frac{16\pi G^2 M^2}{c^4}$$

Using $\sigma = \pi^2 k_B^4/(60\hbar^3 c^2)$ and simplifying gives $dM/dt = -L/c^2 = -\hbar c^6/(15360\pi G^2 M^2)$. (The exact coefficient includes greybody factors and species counting.) $\square$

**Corollary 5.2 (Evaporation timescale).** *The evaporation time scales as $M^3$:*

$$t_{\text{evap}} \sim \frac{5120 \pi G^2 M^3}{\hbar c^4}$$

*For a solar-mass black hole: $t_{\text{evap}} \sim 10^{67}$ years. For a Planck-mass black hole: $t_{\text{evap}} \sim t_P \sim 10^{-43}$ s.*

**Proposition 5.3 (Planck-scale endpoint).** *In the final stages, the black hole approaches the Planck scale ($M \to M_P$, $R_S \to \ell_P$) where the continuum approximation fails. The discrete relational invariant network takes over — the endpoint of evaporation requires the full discrete theory.*

### Step 6: Connection to the Unruh Effect

**Proposition 6.1 (Unruh equivalence).** *The Hawking effect is the gravitational analogue of the Unruh effect: an accelerating observer in flat spacetime perceives thermal radiation at temperature $T_U = \hbar a/(2\pi c k_B)$, where $a$ is the proper acceleration.*

*Proof sketch.* By the strong equivalence principle ([Gravity](/derivations/spacetime/gravity), Theorem 4.3), a stationary observer near a black hole horizon experiences proper acceleration $a = \kappa/\sqrt{1 - R_S/r}$. At $r \to R_S$, this diverges — the observer needs infinite acceleration to remain stationary. The locally perceived temperature is $T_U = \hbar a/(2\pi c k_B)$. Redshifting to infinity by the factor $\sqrt{1 - R_S/r}$ recovers $T_H = \hbar\kappa/(2\pi c k_B)$.

In the framework: acceleration creates an apparent (Rindler) horizon for the accelerating observer. This horizon breaks loops in exactly the same way as the black hole horizon (Theorem 1.2), producing coherence-dual pairs perceived as thermal radiation. The temperature is set by the acceleration, not by the existence of a black hole. $\square$

## Rigor Assessment

**Fully rigorous:**
- Theorem 1.2: Loop breaking at the horizon (follows from causal structure of Schwarzschild spacetime — standard GR)
- Theorem 3.1: Hawking temperature $T_H = \hbar\kappa/(2\pi c k_B)$ (the Euclidean periodicity argument is a standard derivation, established by Gibbons-Hawking 1977)
- Proposition 5.1: Stefan-Boltzmann mass loss rate (standard thermodynamics applied to a black body)

**Rigorous given axioms:**
- Theorem 2.1: Pair production from broken loops (forced by Axioms 1 + 3 + coherence-dual pair structure)
- Theorem 4.1: Thermal spectrum from maximal entropy (follows from horizon saturating the holographic bound)
- Proposition 6.1: Unruh equivalence (follows from strong equivalence principle)

**Provisional:**
- The "loop straddling the horizon" picture (Definition 1.1) is a semiclassical description. A rigorous version requires the quantum field theory in curved spacetime formalism — the Bogoliubov transformation between the in-vacuum and out-vacuum. The framework's loop-breaking mechanism is a physical re-interpretation of this standard calculation.
- The energy source ("extracted from the gravitational field") is stated but not quantitatively derived from the coherence geometry. In standard GR, the negative-energy partner (as measured at infinity) reduces the black hole mass via the Penrose process.
- The greybody factors $\Gamma_\omega$ (Theorem 4.1) depend on the effective potential barrier, which is computed from the Schwarzschild metric — standard GR, not derived from the coherence geometry.
- The trans-Planckian problem: modes near the horizon have arbitrarily high frequency (blue-shifted). The discrete framework should regulate this, but the mechanism is not specified.

**Assessment:** The Hawking radiation derivation is structurally sound: broken loops at horizons must produce pairs (from Axioms 1 + 3), with thermal spectrum (from maximal entropy). The temperature formula and evaporation dynamics match established results. The main provisional elements are the semiclassical nature of the loop-breaking picture and the trans-Planckian regulation.

## Open Gaps

1. **Trans-Planckian problem**: Modes near the horizon are blue-shifted to trans-Planckian frequencies. The discrete relational network should provide a natural cutoff, replacing the trans-Planckian modes with discrete loop structures.
2. **Greybody factors**: The actual spectrum deviates from perfect thermal due to the potential barrier. These corrections should be derivable from the coherence geometry.
3. **End state**: What happens at the endpoint of evaporation? A Planck-mass remnant? Complete evaporation? The answer depends on the discrete structure at the Planck scale.
4. **Species counting**: The total luminosity depends on the number of particle species that can be emitted. The framework should predict this from the bootstrap hierarchy.
5. **Rotating and charged black holes**: The Hawking temperature for Kerr ($T_H = \hbar\kappa/(2\pi c k_B)$ with modified $\kappa$) and Reissner-Nordström black holes should follow from the same loop-breaking mechanism applied to the modified horizon geometry.
