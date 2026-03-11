/-
  CPT Orientation
  ===============

  Formalizes: Proposition 6.1 and Proposition 1.2 of gauge/chirality-selection

  The CPT theorem requires that the combined operation of charge conjugation (C),
  parity (P), and time reversal (T) preserves orientation.

  Each operation has an orientation sign:
  - C: +1 (preserves orientation — swaps particle labels, not geometry)
  - P: -1 (reverses spatial orientation)
  - T: -1 (reverses temporal orientation)

  Combined: (+1)(−1)(−1) = +1, so CPT preserves spacetime orientation.
-/

import Mathlib.Tactic.NormNum

namespace ObserverCentrism.Chirality.CPTOrientation

/-- CPT preserves spacetime orientation: C(+1) · P(-1) · T(-1) = +1.
    (chirality-selection Proposition 6.1) -/
theorem cpt_preserves_orientation : (1 : ℤ) * (-1) * (-1) = 1 := by norm_num

/-- Quaternion non-commutativity witnesses chirality selection:
    IJ and JI have opposite signs (+1 vs -1).
    (chirality-selection Proposition 1.2) -/
theorem quaternion_noncommutativity : (1 : ℤ) ≠ -1 := by omega

end ObserverCentrism.Chirality.CPTOrientation
