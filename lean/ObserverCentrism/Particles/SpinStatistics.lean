/-
  Spin-Statistics Arithmetic
  ==========================

  Formalizes mathematical cores from:
  - particles/pauli-exclusion (Theorem 4.1, Corollary 4.2)
  - particles/spin-statistics (Theorem 6.1, Proposition 3.1)

  The Pauli exclusion principle follows from a simple algebraic fact:
  if exchanging two identical fermions gives a minus sign (antisymmetry)
  but they're in the same state (exchange = identity), then the state
  must be zero.

  SU(2) representation dimensions follow dim(Vₛ) = 2s + 1.
-/

import Mathlib.Tactic.NormNum
import Mathlib.Tactic.Ring
import Mathlib.Tactic.Linarith
import Mathlib.Data.Rat.Defs

namespace ObserverCentrism.Particles.SpinStatistics

/-- Core of the Pauli exclusion principle:
    If x = -x (fermion antisymmetry + identical state), then x = 0.
    (pauli-exclusion Theorem 4.1) -/
theorem pauli_exclusion_core (x : ℚ) (h : x = -x) : x = 0 := by linarith

/-- Antisymmetric self-product vanishes: v ∧ v = v ⊗ v - v ⊗ v = 0.
    (pauli-exclusion Corollary 4.2) -/
theorem wedge_self_zero (x : ℚ) : x - x = 0 := by ring

/-- SU(2) spin-0 representation dimension: 2·0 + 1 = 1 (scalar). -/
theorem dim_spin_0 : 2 * (0 : ℚ) + 1 = 1 := by norm_num

/-- SU(2) spin-1/2 representation dimension: 2·(1/2) + 1 = 2 (spinor).
    (spin-statistics Proposition 3.1) -/
theorem dim_spin_half : 2 * ((1 : ℚ) / 2) + 1 = 2 := by norm_num

/-- SU(2) spin-1 representation dimension: 2·1 + 1 = 3 (vector).
    (spin-statistics Proposition 3.1) -/
theorem dim_spin_1 : 2 * (1 : ℚ) + 1 = 3 := by norm_num

/-- SU(2) spin-3/2 representation dimension: 2·(3/2) + 1 = 4. -/
theorem dim_spin_three_half : 2 * ((3 : ℚ) / 2) + 1 = 4 := by norm_num

/-- SU(2) spin-2 representation dimension: 2·2 + 1 = 5 (graviton). -/
theorem dim_spin_2 : 2 * (2 : ℚ) + 1 = 5 := by norm_num

/-- Integer spin: (-1)^(2s) = +1 for s = 0, 1, 2 (bosons).
    (spin-statistics Proposition 3.2) -/
theorem integer_spin_sign : (-1 : ℤ) ^ (2 * 0) = 1 ∧
    (-1 : ℤ) ^ (2 * 1) = 1 ∧ (-1 : ℤ) ^ (2 * 2) = 1 := by decide

/-- Half-integer spin: (-1)^(2s) = -1 for 2s = 1, 3 (fermions).
    (spin-statistics Proposition 3.2) -/
theorem half_integer_spin_sign : (-1 : ℤ) ^ 1 = -1 ∧ (-1 : ℤ) ^ 3 = -1 := by decide

end ObserverCentrism.Particles.SpinStatistics
