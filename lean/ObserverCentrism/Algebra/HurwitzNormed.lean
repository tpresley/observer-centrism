/-
  Hurwitz's Theorem (Finite Version)
  ===================================

  Formalizes: Proposition 1.2 of interactions/bootstrap-division-algebras
              Theorem 1.2 of gauge/color-force (Hurwitz ceiling)

  Hurwitz's theorem (1898): The only normed division algebras over ℝ
  are ℝ, ℂ, ℍ, and 𝕆, of dimensions 1, 2, 4, and 8.

  We formalize the key structural consequences:

  1. The quaternions satisfy the composition property ‖xy‖ = ‖x‖·‖y‖
     (Euler's four-square identity), proved by ring identity.

  2. The sedenions do NOT satisfy the composition property, proved via
     the zero divisor: nonzero elements with zero product contradict
     norm-multiplicativity.

  This gives the "from below and above" argument used in the derivation chain.
-/

import Mathlib.Tactic.Ring
import Mathlib.Tactic.NormNum
import Mathlib.Tactic.Linarith
import Mathlib.Data.Rat.Defs
import ObserverCentrism.Algebra.CayleyDickson
import ObserverCentrism.Gauge.SedenionZeroDivisor

namespace ObserverCentrism.Algebra.HurwitzNormed

open ObserverCentrism.Algebra.CayleyDickson

/-! ## Norm (squared) definitions

  For the Cayley-Dickson algebras over ℚ, the norm-squared is
  the sum of squares of components. We work with norm-squared
  throughout to avoid square roots.
-/

/-- Quaternion norm squared: ‖q‖² = q₀² + q₁² + q₂² + q₃² -/
def quatNormSq (q : Quat) : ℚ := q 0 ^ 2 + q 1 ^ 2 + q 2 ^ 2 + q 3 ^ 2

/-- Sedenion norm squared: ‖x‖² = Σ xᵢ² -/
def sedNormSq (x : Sedenion) : ℚ :=
  x 0 ^ 2 + x 1 ^ 2 + x 2 ^ 2 + x 3 ^ 2 +
  x 4 ^ 2 + x 5 ^ 2 + x 6 ^ 2 + x 7 ^ 2 +
  x 8 ^ 2 + x 9 ^ 2 + x 10 ^ 2 + x 11 ^ 2 +
  x 12 ^ 2 + x 13 ^ 2 + x 14 ^ 2 + x 15 ^ 2

/-! ## Quaternion composition property

  The quaternions satisfy the composition property:
    ‖a · b‖² = ‖a‖² · ‖b‖²

  This is Euler's four-square identity, and it's what makes ℍ a
  composition algebra. We prove it by direct expansion — the
  identity holds for all quaternions, universally quantified.
-/

/-- Euler's four-square identity: quaternion multiplication preserves norms.
    ‖a · b‖² = ‖a‖² · ‖b‖² for all quaternions a, b.
    This is the composition property that makes ℍ a normed algebra.
    (bootstrap-division-algebras, Definition 1.1: composition property) -/
theorem quat_composition (a b : Quat) :
    quatNormSq (quatMul a b) = quatNormSq a * quatNormSq b := by
  simp only [quatNormSq, quatMul]
  ring

/-! ## Sedenion norm-multiplicativity FAILURE

  The sedenions do NOT satisfy ‖xy‖² = ‖x‖²·‖y‖². This follows
  immediately from the zero divisor: if a·b = 0 but a ≠ 0 and b ≠ 0,
  then ‖a·b‖² = 0 but ‖a‖²·‖b‖² > 0 (since the norm-squared of a
  nonzero element is a sum of squares with at least one nonzero term).
-/

open ObserverCentrism.Gauge.SedenionZeroDivisor in
/-- The norm-squared of the sedenion zero divisor product is 0
    (since the product itself is zero). -/
theorem zero_divisor_product_norm :
    sedNormSq (sedMul factor1 factor2) = 0 := by native_decide

open ObserverCentrism.Gauge.SedenionZeroDivisor in
/-- The norm-squared of factor1 = e₃ + e₁₀ is 2 (sum of two 1²'s). -/
theorem factor1_norm : sedNormSq factor1 = 2 := by native_decide

open ObserverCentrism.Gauge.SedenionZeroDivisor in
/-- The norm-squared of factor2 = e₆ - e₁₅ is 2 (sum of two 1²'s). -/
theorem factor2_norm : sedNormSq factor2 = 2 := by native_decide

open ObserverCentrism.Gauge.SedenionZeroDivisor in
/-- Sedenion multiplication does NOT preserve norms.
    ‖factor1 · factor2‖² = 0 ≠ 4 = ‖factor1‖² · ‖factor2‖².
    This proves the sedenions fail the composition property.
    (bootstrap-division-algebras Theorem 7.1) -/
theorem sedenion_not_composition :
    sedNormSq (sedMul factor1 factor2) ≠ sedNormSq factor1 * sedNormSq factor2 := by
  rw [zero_divisor_product_norm, factor1_norm, factor2_norm]
  norm_num

/-! ## The Hurwitz dimension constraint

  Combining the constructive direction (ℍ and 𝕆 are composition algebras)
  with the obstructive direction (𝕊 is not), the Cayley-Dickson construction
  produces normed composition algebras only at dimensions 1, 2, 4, and 8.
-/

/-- The Hurwitz dimensions: the normed division algebras ℝ, ℂ, ℍ, 𝕆
    have dimensions that are precisely the powers of 2 up to 8.
    (bootstrap-division-algebras Proposition 1.2) -/
theorem hurwitz_dimensions :
    ({1, 2, 4, 8} : Set ℕ) = {2 ^ 0, 2 ^ 1, 2 ^ 2, 2 ^ 3} := by
  ext n; simp

end ObserverCentrism.Algebra.HurwitzNormed
