/-
  Sedenion Non-Division Algebra
  =============================

  Formalizes: Theorem 7.1 (part) of interactions/bootstrap-division-algebras
              Corollary of Proposition 2.2 of gauge/standard-model-group

  Extends the zero-divisor proof (SedenionZeroDivisor.lean) to formally
  conclude that the sedenions cannot form a division algebra.

  A division algebra requires: if a ≠ 0 and b ≠ 0, then a * b ≠ 0.
  The sedenion zero divisor (e₃ + e₁₀)(e₆ - e₁₅) = 0 with both
  factors nonzero directly contradicts this requirement.

  This establishes that the Cayley-Dickson chain ℝ → ℂ → ℍ → 𝕆
  terminates at 𝕆 as a source of division algebras, which is the
  mathematical backbone of the gauge hierarchy argument.
-/

import ObserverCentrism.Gauge.SedenionZeroDivisor
import ObserverCentrism.Algebra.CayleyDickson

namespace ObserverCentrism.Gauge.SedenionNonDivision

open ObserverCentrism.Algebra.CayleyDickson
open ObserverCentrism.Gauge.SedenionZeroDivisor

/-- A division algebra property: for all a b, if a * b = 0 then a = 0 or b = 0. -/
def IsDivisionLike {α : Type*} (mul : α → α → α) (zero : α) : Prop :=
  ∀ a b, mul a b = zero → a = zero ∨ b = zero

/-- factor1 is not the zero sedenion (it has a nonzero component). -/
theorem factor1_ne_zero : factor1 ≠ sedZero := by native_decide

/-- factor2 is not the zero sedenion (it has a nonzero component). -/
theorem factor2_ne_zero : factor2 ≠ sedZero := by native_decide

/-- The sedenions are NOT a division algebra.
    There exist nonzero sedenions whose product is zero.
    (bootstrap-division-algebras Theorem 7.1, standard-model-group Proposition 2.2) -/
theorem sedenions_not_division : ¬ IsDivisionLike sedMul sedZero := by
  intro h
  have := h factor1 factor2 sedenion_zero_divisor
  cases this with
  | inl h1 => exact factor1_ne_zero h1
  | inr h2 => exact factor2_ne_zero h2

end ObserverCentrism.Gauge.SedenionNonDivision
