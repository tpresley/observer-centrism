/-
  Sedenion Zero Divisor
  =====================

  Formalizes: Proposition 2.2 (part 1) of gauge/standard-model-group

  The sedenion algebra 𝕊 (dimension 16, obtained by Cayley-Dickson doubling
  of the octonions) contains zero divisors. Specifically:

    (e₃ + e₁₀)(e₆ - e₁₅) = 0

  where e_k denotes the k-th sedenion basis element (Moreno, 1998).

  Both factors are non-zero, yet their product vanishes. This proves that
  the sedenions are NOT a division algebra, establishing that the
  Cayley-Dickson hierarchy ℝ → ℂ → ℍ → 𝕆 terminates at the octonions
  as far as division algebras are concerned (Hurwitz's theorem).
-/

import ObserverCentrism.Algebra.CayleyDickson
import Mathlib.Data.Fintype.Basic

namespace ObserverCentrism.Gauge.SedenionZeroDivisor

open ObserverCentrism.Algebra.CayleyDickson

/-- The first factor: e₃ + e₁₀ -/
def factor1 : Sedenion := sedAdd (sedBasis ⟨3, by omega⟩) (sedBasis ⟨10, by omega⟩)

/-- The second factor: e₆ - e₁₅ -/
def factor2 : Sedenion := sedSub (sedBasis ⟨6, by omega⟩) (sedBasis ⟨15, by omega⟩)

/-- factor1 is non-zero (component 3 is 1) -/
theorem factor1_nonzero : factor1 ⟨3, by omega⟩ = 1 := by
  simp [factor1, sedAdd, sedBasis]

/-- factor2 is non-zero (component 6 is 1) -/
theorem factor2_nonzero : factor2 ⟨6, by omega⟩ = 1 := by
  simp [factor2, sedSub, sedBasis]

/-- The sedenion zero divisor: (e₃ + e₁₀)(e₆ - e₁₅) = 0.

  This is the main theorem. It verifies that every component of the
  product is zero by unfolding the Cayley-Dickson multiplication
  and computing. We use native_decide to evaluate the equality
  of all 16 rational components via compiled code.
-/
theorem sedenion_zero_divisor :
    sedMul factor1 factor2 = sedZero := by native_decide

end ObserverCentrism.Gauge.SedenionZeroDivisor
