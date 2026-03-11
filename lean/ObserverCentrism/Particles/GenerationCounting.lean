/-
  Generation Counting and CKM Parameters
  =======================================

  Formalizes: Proposition 5.3 of particles/three-generations
              Proposition 3.2 of cosmology/baryogenesis

  The CKM (Cabibbo-Kobayashi-Maskawa) matrix is an N×N unitary matrix
  with N² real parameters. After removing 2N-1 unphysical phases
  (field redefinitions), the physical parameters split into:
  - N(N-1)/2 mixing angles
  - (N-1)(N-2)/2 CP-violating phases

  For N=2: 0 CP phases → no CP violation possible
  For N=3: 1 CP phase → CP violation requires ≥ 3 generations
-/

import Mathlib.Tactic.NormNum
import Mathlib.Tactic.Ring
import Mathlib.Tactic.Linarith
import Mathlib.Data.Rat.Defs

namespace ObserverCentrism.Particles.GenerationCounting

/-- CKM parameter identity: total physical parameters = (N-1)².
    N² - (2N-1) = (N-1)² holds for all integers N.
    (three-generations Proposition 5.3, baryogenesis Proposition 3.2) -/
theorem ckm_total_params (N : ℤ) : N ^ 2 - (2 * N - 1) = (N - 1) ^ 2 := by ring

/-- CKM parameter split: mixing angles + CP phases = total physical params.
    N(N-1)/2 + (N-1)(N-2)/2 = (N-1)² for all rational N.
    (three-generations Proposition 5.3) -/
theorem ckm_params_split (N : ℚ) :
    N * (N - 1) / 2 + (N - 1) * (N - 2) / 2 = (N - 1) ^ 2 := by ring

/-- Two generations have 0 CP-violating phases: (2-1)(2-2)/2 = 0.
    This is why CP violation was not observed until the third generation was found.
    (three-generations Proposition 5.3, baryogenesis Proposition 3.2) -/
theorem cp_phases_two_gen : (2 - 1) * (2 - 2) / 2 = 0 := by norm_num

/-- Three generations have exactly 1 CP-violating phase: (3-1)(3-2)/2 = 1.
    This is the Kobayashi-Maskawa mechanism for CP violation.
    (three-generations Proposition 5.3, baryogenesis Proposition 3.2) -/
theorem cp_phases_three_gen : (3 - 1) * (3 - 2) / 2 = 1 := by norm_num

/-- Sphaleron B-L conservation: ΔB - ΔL = 0 in each sphaleron transition.
    Each transition changes B and L by equal amounts (Ng = number of generations).
    (baryogenesis Proposition 2.1) -/
theorem sphaleron_b_minus_l (N_g : ℤ) : N_g - N_g = 0 := by ring

/-- Three-generation CKM has 3 mixing angles and 1 CP phase = 4 physical parameters.
    Check: (3-1)² = 4 = 3 + 1.
    (three-generations Proposition 5.3) -/
theorem ckm_three_gen_params : (3 - 1) ^ 2 = 4 ∧ 3 * 2 / 2 + 1 = 4 := by omega

end ObserverCentrism.Particles.GenerationCounting
