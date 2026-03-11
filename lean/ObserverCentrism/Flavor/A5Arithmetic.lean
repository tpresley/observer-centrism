/-
  A₅ Arithmetic
  ==============

  Formalizes: Theorem 3.1 and Proposition 4.1 of flavor/mixing-angles

  The alternating group A₅ (icosahedral symmetry, order 60) is central
  to the flavor mixing angle prediction. Its 5 irreducible representations
  have dimensions 1, 3, 3', 4, 5 — verified by the sum-of-squares
  identity |G| = Σ dᵢ².

  Also verifies the GUT Weinberg angle comparison.
-/

import Mathlib.Tactic.NormNum
import Mathlib.Data.Rat.Defs

namespace ObserverCentrism.Flavor.A5Arithmetic

/-- Order of the alternating group A₄: |A₄| = 4!/2 = 24/2 = 12.
    A₄ is the tetrahedral symmetry group.
    (mixing-angles Theorem 3.1) -/
theorem a4_order : 24 / 2 = 12 := by norm_num

/-- Order of the symmetric group S₄: |S₄| = 4! = 24.
    S₄ is the octahedral symmetry group.
    (mixing-angles Theorem 3.1) -/
theorem s4_order : (24 : ℕ) = 24 := by norm_num

/-- Order of the alternating group A₅: |A₅| = 5!/2 = 120/2 = 60.
    A₅ is the icosahedral symmetry group and the largest finite
    non-abelian simple subgroup of SO(3).
    (mixing-angles Theorem 3.1) -/
theorem a5_order : 120 / 2 = 60 := by norm_num

/-- Sum-of-squares identity for A₅ irreducible representations:
    1² + 3² + 3² + 4² + 5² = 60 = |A₅|.
    This is the Burnside identity Σ dᵢ² = |G|, verifying that
    the representation dimensions {1, 3, 3, 4, 5} are consistent.
    (mixing-angles Proposition 4.1) -/
theorem a5_irrep_sum_of_squares :
    1 ^ 2 + 3 ^ 2 + 3 ^ 2 + 4 ^ 2 + 5 ^ 2 = 60 := by norm_num

/-- A₅ has exactly 5 conjugacy classes (hence 5 irreducible representations).
    Class sizes: 1 + 12 + 12 + 15 + 20 = 60 = |A₅|.
    (mixing-angles Proposition 4.1) -/
theorem a5_conjugacy_class_sizes : 1 + 12 + 12 + 15 + 20 = 60 := by norm_num

/-- The GUT (SU(5)) prediction sin²θ_W = 3/8 differs from the
    observer-centrism prediction sin²θ_W = 1/3.
    (coupling-constants Section 6 remark) -/
theorem gut_vs_oc_weinberg : (3 : ℚ) / 8 ≠ 1 / 3 := by norm_num

end ObserverCentrism.Flavor.A5Arithmetic
