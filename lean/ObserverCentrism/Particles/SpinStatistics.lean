/-
  Spin-Statistics Core
  ====================

  Formalizes the algebraic core of:
  - particles/pauli-exclusion (Theorem 4.1)
  - particles/spin-statistics (Theorem 6.1)

  The Pauli exclusion principle reduces to a clean algebraic fact:
  if exchanging two identical fermions gives a minus sign (antisymmetry)
  but they're in the same state (exchange = identity), then the state
  must be zero. This is the essential mathematical content — all the
  physics is in establishing why fermions have antisymmetric exchange.

  The spin-statistics connection follows from the sign rule:
  (-1)^(2s) distinguishes integer spin (bosons, +1) from
  half-integer spin (fermions, -1).
-/

import Mathlib.Tactic.Linarith

namespace ObserverCentrism.Particles.SpinStatistics

/-- Core of the Pauli exclusion principle:
    If x = -x (fermion antisymmetry applied to the same state), then x = 0.
    This is the mathematical heart of exclusion — proved algebraically,
    not by numerical evaluation.
    (pauli-exclusion Theorem 4.1) -/
theorem pauli_exclusion_core (x : ℚ) (h : x = -x) : x = 0 := by linarith

/-- Integer spin sign rule: (-1)^(2s) = +1 for s ∈ {0, 1, 2}.
    Bosons have symmetric exchange.
    (spin-statistics Proposition 3.2) -/
theorem integer_spin_sign : (-1 : ℤ) ^ (2 * 0) = 1 ∧
    (-1 : ℤ) ^ (2 * 1) = 1 ∧ (-1 : ℤ) ^ (2 * 2) = 1 := by decide

/-- Half-integer spin sign rule: (-1)^(2s) = -1 for 2s ∈ {1, 3}.
    Fermions have antisymmetric exchange.
    (spin-statistics Proposition 3.2) -/
theorem half_integer_spin_sign : (-1 : ℤ) ^ 1 = -1 ∧ (-1 : ℤ) ^ 3 = -1 := by decide

end ObserverCentrism.Particles.SpinStatistics
