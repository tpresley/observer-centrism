---
title: "Action and Planck's Constant"
status: "draft"
dependsOn: ["axioms/loop-closure", "thermodynamics/time"]
enablesDerivation: ["spacetime/speed-of-light", "holography/area-scaling"]
tags: ["dynamics"]
summary: "Action is the coherence cost of transformation; ℏ is the minimum cost of one observer cycle — the quantum of action"
rigorLevel: "semi-formal"
sourceSection: "05-time-entropy-action"
lastUpdated: 2026-03-08
---

## Statement

Action is the coherence cost of a transformation. Planck's constant $\hbar$ is the minimum coherence cost of one observer cycle — the irreducible quantum of action, fixed by the structure of the minimal observer loop. The principle of stationary action and the uncertainty principle both follow.

## Derivation

### Step 1: Coherence Cost

Every transformation that an observer undergoes has a **coherence cost**: the minimum coherence required to execute the transformation while maintaining the observer's invariant.

**Definition.** Let $\mathcal{O} = (\Sigma, I, \mathcal{B})$ be an observer and let $\gamma: [0, 1] \to \Sigma$ be a path in its state space. The **coherence cost** of $\gamma$ is:

$$\mathcal{S}[\gamma] = \int_0^1 \mathcal{L}(\gamma(t), \dot{\gamma}(t)) \, dt$$

where $\mathcal{L}$ is the **coherence Lagrangian** — the instantaneous rate of coherence expenditure along the path, determined by the coherence geometry of $\mathcal{H}$.

The coherence cost must be **positive** for any non-trivial path:

$$\mathcal{S}[\gamma] > 0 \quad \text{for } \gamma \neq \text{const}$$

*Why positive?* A transformation with $\mathcal{S} < 0$ would extract coherence from the path — it would be a coherence source, violating the closure of the coherence budget (Axiom 1, no external reservoir). A transformation with $\mathcal{S} = 0$ would be trivial (the identity). Therefore all non-trivial transformations cost positive coherence.

### Step 2: The Minimal Cycle Cost

The loop closure condition requires each observer to complete a cycle — a closed path $\gamma_{\text{cycle}}$ in $\Sigma$ with $\gamma_{\text{cycle}}(0) = \gamma_{\text{cycle}}(1)$. The coherence cost of one cycle is:

$$\mathcal{S}_{\text{cycle}} = \oint \mathcal{L} \, dt > 0$$

The **minimal observer** (from [Minimal Observer Structure](/derivations/minimal-observer/structure)) has the smallest possible cycle cost. This minimum exists because:

1. The coherence cost is positive for any non-trivial cycle
2. The set of admissible cycles is bounded below in cost (by the structure of $\mathcal{H}$)
3. The infimum is achieved (by compactness of the minimal state space)

**Definition.** Planck's constant is the coherence cost of the minimal observer cycle:

$$\boxed{\hbar \equiv \mathcal{S}_{\min} = \min_{\gamma_{\text{cycle}}} \oint \mathcal{L} \, dt}$$

This is the **quantum of action** — the irreducible minimum cost of any coherence-preserving cyclic transformation.

### Step 3: Action and the Stationary Action Principle

For a general observer traversing path $\gamma$ between two interaction events, the **action** is:

$$S[\gamma] = \int_{\gamma} \mathcal{L} \, dt$$

**Claim.** Physical paths are those with **stationary action** — paths where $\delta S = 0$ under small variations.

*Argument from coherence resonance.* Consider all paths connecting two events in the interaction graph. Each path has a coherence cost $S[\gamma]$ and an associated phase $\phi = S[\gamma]/\hbar$. The physical trajectory is determined by coherence resonance:

- Paths whose phases are aligned (constructive interference) reinforce each other
- Paths whose phases cancel (destructive interference) suppress each other
- The reinforced paths are those in the neighborhood of the stationary point $\delta S = 0$

This is precisely the logic of Feynman's path integral: the classical path emerges as the stationary-phase approximation to the sum over all paths weighted by $e^{iS/\hbar}$. The framework derives this by identifying the path integral as the coherence resonance selection mechanism operating across the observer network.

### Step 4: The Uncertainty Principle

The minimal observer has a $U(1)$ phase structure (from [Loop Closure](/derivations/axioms/loop-closure)). The two conjugate variables are:

- **Phase** $\theta \in [0, 2\pi)$: the position in the observer's cycle
- **Cycle count** $n$: the number of completed cycles (proportional to the conserved charge $Q$)

These are Fourier-conjugate variables on the $U(1)$ group. The standard uncertainty relation for Fourier-conjugate variables gives:

$$\Delta\theta \cdot \Delta n \geq \frac{1}{2}$$

Multiplying by $\hbar$ (coherence cost per cycle) and using the identification $E = n \cdot \hbar\omega$ (energy = cycles $\times$ cost per cycle $\times$ frequency), $p = \hbar k$ (momentum = coherence per unit path length):

$$\Delta x \cdot \Delta p \geq \frac{\hbar}{2}$$

$$\Delta E \cdot \Delta t \geq \frac{\hbar}{2}$$

The uncertainty principle is not a limitation of measurement technology. It is the structural consequence of phase and cycle count being conjugate aspects of the $U(1)$ coherence unit. Knowing the phase precisely makes the cycle count indeterminate, and vice versa.

### Step 5: ℏ Is Not a Free Parameter

In standard physics, $\hbar$ is measured empirically ($\hbar \approx 1.055 \times 10^{-34}$ J·s). In the framework, $\hbar$ is determined by the coherence geometry:

$$\hbar = \min_{\gamma_{\text{cycle}}} \oint \mathcal{L} \, dt$$

Its value is fixed by the structure of the minimal observer loop in the coherence geometry. It is a derived quantity, not a free parameter. However, computing its numerical value requires the full mathematical formalization of $\mathcal{L}$ and the coherence geometry — which remains an open problem.

In practice, $\hbar$ sets the **unit of coherence cost**. All other quantities are measured in units of $\hbar$: energies as $\hbar\omega$, momenta as $\hbar k$, actions as multiples of $\hbar$.

## Rigor Assessment

**What is established:**
- Positivity of coherence cost from Axiom 1 (no external reservoir)
- Existence of a minimum cycle cost (assuming compactness of minimal state space)
- The uncertainty relation from $U(1)$ Fourier conjugacy is a standard mathematical result
- The path integral connection via stationary phase is well-known physics

**What needs work:**
- The coherence Lagrangian $\mathcal{L}$ is introduced but not constructed from first principles — it needs to be derived from the coherence measure $\mathcal{C}$
- The compactness assumption for the minimal state space needs justification
- The transition from the phase/cycle-count uncertainty to position/momentum uncertainty uses identifications ($E = n\hbar\omega$, $p = \hbar k$) that rely on the spacetime derivation

## Open Gaps

1. **Constructing $\mathcal{L}$**: The coherence Lagrangian should be derivable from the coherence measure $\mathcal{C}$ restricted to paths. This is the key missing link between the abstract framework and concrete physics.
2. **Quantization**: The existence of a minimum action quantum $\hbar$ implies that the admissible observer cycles are quantized (only integer multiples of $\hbar$ are allowed). This should connect to the quantization of energy levels.
3. **$\hbar$ and $c$**: The relationship between $\hbar$ (coherence cost quantum) and $c$ (phase propagation speed) should determine whether $G$ (gravitational coupling) is derivable or constitutes an independent parameter.
