/-
  Black Hole Arithmetic
  =====================

  Formalizes coefficient arithmetic from the holography derivation chain:
  - holography/area-scaling (Theorem 7.1)
  - holography/hawking-radiation (Theorem 3.1, Proposition 5.1, Corollary 5.2)
  - holography/black-hole-entropy (Proposition 5.1)
  - holography/information-paradox (Corollary 5.2)

  These verify the multi-step algebraic simplifications that produce
  the Hawking temperature, Stefan-Boltzmann luminosity, evaporation
  timescale, and Page time from first principles.
-/

import Mathlib.Tactic.NormNum
import Mathlib.Data.Rat.Defs

namespace ObserverCentrism.Holography.BlackHoleArithmetic

/-- Schwarzschild area coefficient: A = 4π·R_S² with R_S = 2GM/c².
    The factor 4·(2)² = 16 appears in A = 16πG²M²/c⁴.
    (area-scaling Theorem 7.1) -/
theorem schwarzschild_area_coeff : (4 : ℚ) * 2 ^ 2 = 16 := by norm_num

/-- Hawking temperature coefficient: T_H = ℏκ/(2πck_B) with κ = c⁴/(4GM).
    The denominator factor: 4 · 2 = 8, giving T_H = ℏc³/(8πGMk_B).
    (hawking-radiation Theorem 3.1) -/
theorem hawking_temp_coeff : (1 : ℚ) / (4 * 2) = 1 / 8 := by norm_num

/-- Stefan-Boltzmann luminosity coefficient.
    From L = σ·T⁴·A with the Hawking temperature:
    The coefficient 16/(60·8⁴) = 16/(60·4096) = 1/15360
    appears in L = ℏc⁶/(15360πG²M²).
    (hawking-radiation Proposition 5.1) -/
theorem stefan_boltzmann_coeff :
    (16 : ℚ) / (60 * 8 ^ 4) = 1 / 15360 := by norm_num

/-- Evaporation timescale from mass-loss integration.
    ∫₀ᴹ M² dM = M³/3, so the coefficient 15360/3 = 5120
    gives t_evap = 5120πG²M³/(ℏc⁴).
    (hawking-radiation Corollary 5.2) -/
theorem evaporation_coeff : (15360 : ℚ) / 3 = 5120 := by norm_num

/-- Page time is half the evaporation time: 5120/2 = 2560.
    At the Page time, the entanglement entropy of the radiation
    begins to decrease (the "Page curve" turnover).
    (information-paradox Corollary 5.2) -/
theorem page_time_coeff : (5120 : ℚ) / 2 = 2560 := by norm_num

/-- Bekenstein-Hawking entropy thermodynamic integration:
    ∫₀ᴹ (dM'/T_H) with T_H = ℏc³/(8πGM'k_B) gives
    S = (8π/2)·GM²k_B/(ℏc) = 4πGM²k_B/(ℏc).
    The factor 8/2 = 4 connects T_H to the Bekenstein-Hawking formula.
    (black-hole-entropy Proposition 5.1) -/
theorem bh_entropy_integration_coeff : (8 : ℚ) / 2 = 4 := by norm_num

end ObserverCentrism.Holography.BlackHoleArithmetic
