/-
  Lie Algebra Dimensions
  ======================

  Dimension formulas for Lie algebras and groups used across derivations.

  dim(so(d)) = d(d-1)/2    — antisymmetric matrices
  dim(su(n)) = n²-1        — traceless anti-Hermitian matrices

  Verified for the specific values appearing in:
  - dimensions/three-dimensions (Proposition 3.1)
  - spacetime/lorentz-invariance (Theorem 4.2, Theorem 7.1)
  - gauge/weak-interaction (Proposition 1.2)
-/

import Mathlib.Tactic.NormNum

namespace ObserverCentrism.Dimensions.LieAlgebraDim

/-- dim(so(3)) = 3·2/2 = 3: the rotation group has 3 generators.
    (three-dimensions Proposition 3.1, weak-interaction Proposition 1.2) -/
theorem dim_so_3 : 3 * (3 - 1) / 2 = 3 := by norm_num

/-- dim(so(3,1)) = 4·3/2 = 6: the Lorentz group has 6 generators
    (3 rotations + 3 boosts).
    (lorentz-invariance Theorem 4.2) -/
theorem dim_so_3_1 : 4 * (4 - 1) / 2 = 6 := by norm_num

/-- dim(su(2)) = 2²-1 = 3: SU(2) has 3 generators (Pauli matrices).
    (weak-interaction Proposition 1.2) -/
theorem dim_su_2 : 2 ^ 2 - 1 = 3 := by norm_num

/-- dim(su(3)) = 3²-1 = 8: SU(3) has 8 generators (Gell-Mann matrices).
    (color-force Proposition 4.2) -/
theorem dim_su_3 : 3 ^ 2 - 1 = 8 := by norm_num

/-- The Poincaré group has 4 translations + 6 Lorentz generators = 10 generators.
    (lorentz-invariance Theorem 7.1) -/
theorem dim_poincare : 4 + 6 = 10 := by norm_num

/-- The Lorentz group decomposes as 3 rotations + 3 boosts = 6 generators.
    (lorentz-invariance Theorem 4.2) -/
theorem lorentz_decomposition : 3 + 3 = 6 := by norm_num

end ObserverCentrism.Dimensions.LieAlgebraDim
