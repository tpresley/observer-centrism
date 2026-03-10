---
title: "Cosmological Constant"
status: "non-viable"
dependsOn: ["spacetime/einstein-equations", "holography/area-scaling"]
enablesDerivation: []
tags: ["cosmology", "blocked"]
summary: "Non-viable: the cosmological constant cannot be derived from the current framework — it depends on cosmological initial conditions that are boundary data, not derivable quantities"
rigorLevel: "informal"
lastUpdated: 2026-03-10
---

## Status: Non-Viable

> **This derivation target has been assessed as not feasible within the current framework.** Both proposed routes were analyzed and found to be either circular or reducible to dimensional analysis. The cosmological constant depends on cosmological initial conditions (horizon size, total entropy) that the framework treats as boundary data, not derivable quantities. See the full assessment below.

## Target

**Derive the value (or at least the parametric scaling) of the cosmological constant $\Lambda$ from the framework's axioms and holographic bound.**

The cosmological constant problem is one of the sharpest puzzles in physics: quantum field theory predicts a vacuum energy density $\sim M_{\text{Pl}}^4$, while the observed value is $\sim 10^{-120} M_{\text{Pl}}^4$. The Einstein Equations derivation includes $\Lambda$ via Lovelock's uniqueness theorem (it is the only additional term allowed) but does not compute its value. The framework flags this as an open question (source document §15.3).

## Prior Work

The earlier whitepaper (idea #24) proposed that the average coherence density $\rho_{\text{info}} \propto \tau^{-4}$ predicts a nearly constant cosmological energy density consistent with dark energy. The earlier extension paper on plateau equivalence (idea #25) proposed that on the divergence-free surface $\Sigma^*$, net coherence flux into the vacuum vanishes, suppressing zero-point divergence.

The transferable insight: $\Lambda$ is not a free parameter or a fine-tuned coincidence, but a self-consistency condition. The universe as a whole is an observer (the holographic self-encoding from the information paradox resolution), and $\Lambda$ is the coherence cost of this global self-reference.

## Proposed Routes (Both Failed)

### Route 1: Holographic constraint — CIRCULAR

1. **Area scaling**: The holographic entropy bound (Area Scaling derivation) gives $S \leq A/(4\ell_P^2)$.
2. **Cosmic horizon**: In a de Sitter universe, the cosmological horizon has area $A_H = 4\pi/\Lambda$ (in Planck units).
3. **Self-consistency**: The total entropy within the horizon must equal the holographic bound. If the coherence structure fixes the entropy density, this constrains $\Lambda$.
4. **Parametric prediction**: $\Lambda \sim 1/R_H^2 \sim H_0^2/c^2$, which is the observed scaling. The challenge is getting the coefficient right.

**Why it fails:** The argument is circular. Writing $S \sim A_H / 4\ell_P^2$ and $A_H = 4\pi / \Lambda$ gives $\Lambda = 3\pi / (S \cdot \ell_P^2)$ — this just inverts the holographic bound rather than independently deriving $\Lambda$. To close the argument, one would need an independent computation of the total entropy $S$ within the horizon. But the framework's entropy derivation ([Entropy](/derivations/thermodynamics/entropy)) defines entropy as inaccessible coherence relative to a given observer — it does not fix the total amount, which depends on the number and distribution of observers (i.e., the initial conditions of the universe).

The "observed scaling" $\Lambda \sim H_0^2/c^2$ is just the tautological statement that the cosmological horizon radius is $R_H \sim c/H_0$, which is the definition of a de Sitter horizon.

### Route 2: Coherence self-reference — DIMENSIONAL ANALYSIS ONLY

1. **Universe as observer**: The information paradox resolution establishes that the complete coherence dependency graph is the block universe. The universe observes itself.
2. **Minimal cycle cost**: By Action and Planck's Constant, each self-referential cycle has a minimum cost $\hbar$. The universe's self-observation cycle has a characteristic timescale $\sim 1/H_0$.
3. **Vacuum energy**: $\Lambda \sim \hbar H_0 / c^2$ (dimensional analysis with the self-consistency constraint).

**Why it fails:** This is dimensional analysis dressed up as a derivation. The "universe as observer" concept from the information paradox resolution gives a self-consistency condition on information preservation, not a computable constraint on vacuum energy. The characteristic timescale $1/H_0$ is an observed quantity, not a predicted one. The argument does not explain why the universe has the Hubble parameter it does — it takes $H_0$ as input and returns $\Lambda \sim H_0^2$, which is the Friedmann equation, not a prediction.

## Root Cause of Non-Viability

The framework derives the *existence* of $\Lambda$ as the unique additional term in the Einstein equations (via Lovelock's theorem in [Einstein Field Equations](/derivations/spacetime/einstein-equations)). This is a genuine result.

However, the *value* of $\Lambda$ depends on cosmological initial conditions:
- The total coherence budget of the universe
- The horizon size (equivalently, the age of the universe)
- The matter/radiation content that determines the expansion history

These are **boundary data** in the framework — they specify which solution of the Einstein equations describes our universe, but they are not derivable from the three axioms. The axioms constrain the dynamics (what equations govern evolution) but not the initial state (what the universe started with).

This is analogous to how Newton's laws determine $F = ma$ but do not predict where any particular planet is — that requires initial conditions.

## What the Framework *Can* Say About $\Lambda$

1. **Existence**: $\Lambda$ is the unique dimension-0 term in the gravitational action, guaranteed by Lovelock's theorem. ✓ (Already derived)
2. **Sign**: The framework does not predict $\Lambda > 0$. Both signs are consistent with the axioms. ✗
3. **Constancy**: Coherence conservation (Axiom 1) applied globally suggests $\Lambda$ does not vary in time, since it enters the Einstein equations as a geometric constant, not a dynamical field. This is weakly supportive of $w = -1$ but is not a rigorous derivation. ~
4. **No vacuum catastrophe**: The framework does not suffer from the QFT vacuum energy divergence because coherence is fundamentally finite (bounded by the total coherence budget). The "problem" of $\Lambda$ being $10^{120}$ times smaller than naive QFT expectations does not arise — the framework never predicts a Planck-scale vacuum energy. ✓

## Connection to Existing Derivations

| Prerequisite | What it provides |
|---|---|
| [Einstein Field Equations](/derivations/spacetime/einstein-equations) | $\Lambda$ as Lovelock-allowed term |
| [Holographic Entropy Bound](/derivations/holography/area-scaling) | $S \leq A/(4\ell_P^2)$ |
| [Information Paradox](/derivations/holography/information-paradox) | Universe as self-consistent observer |
| [Action and Planck's Constant](/derivations/thermodynamics/action-planck) | Minimal cycle cost |

## What Would Unblock This

A derivation of $\Lambda$ would require one of:
1. **A principle that fixes cosmological initial conditions** — something beyond the three axioms that constrains the total coherence budget and horizon size. This would be a fourth axiom or a cosmological selection principle.
2. **A dynamical mechanism** — showing that $\Lambda$ is not a free parameter but is driven to its observed value by some attractor in the coherence dynamics. This would require understanding the framework's cosmological solutions in detail.
3. **A statistical argument** — showing that the observed value is typical in some ensemble of coherence-consistent universes. This would require a theory of the ensemble itself.

None of these are currently available within the framework.
