/-
  Anomaly Cancellation for the Standard Model
  =============================================

  Formalizes: Proposition 5.1 of gauge/standard-model-group

  The Standard Model fermion content is anomaly-free: all gauge anomalies
  cancel within each generation. The hypercharge assignments are fixed by
  the Cl(6) decomposition (Proposition 4.1), making anomaly cancellation
  a mathematical identity rather than an independent constraint.

  Each theorem below verifies one of the four independent anomaly conditions
  using exact rational arithmetic.
-/

import Mathlib.Tactic.NormNum
import Mathlib.Data.Rat.Defs

namespace ObserverCentrism.Gauge.AnomalyCancellation

/-! ## Standard Model hypercharges (one generation)

  Left-handed doublets:
  - Q_L (quark doublet):  Y = 1/6,  color triplet (×3), weak doublet (×2)
  - L_L (lepton doublet): Y = -1/2, color singlet (×1), weak doublet (×2)

  Right-handed singlets:
  - u_R (up-type):    Y = 2/3,  color triplet (×3)
  - d_R (down-type):  Y = -1/3, color triplet (×3)
  - e_R (electron):   Y = -1,   color singlet (×1)
-/

/-- U(1)³ anomaly cancellation.
    Left:  3 × 2 × (1/6)³ + 2 × (-1/2)³ = -2/9
    Right: 3 × (2/3)³ + 3 × (-1/3)³ + (-1)³ = -2/9 -/
theorem u1_cubed_anomaly_cancellation :
    3 * 2 * ((1 : ℚ) / 6) ^ 3 + 2 * (-(1 : ℚ) / 2) ^ 3 =
    3 * ((2 : ℚ) / 3) ^ 3 + 3 * (-(1 : ℚ) / 3) ^ 3 + (-(1 : ℚ)) ^ 3 := by
  norm_num

/-- SU(3)² × U(1) anomaly cancellation.
    Only colored fermions contribute. Per color:
    Left:  2 × (1/6) = 1/3
    Right: (2/3) + (-1/3) = 1/3 -/
theorem su3_sq_u1_anomaly_cancellation :
    2 * ((1 : ℚ) / 6) = ((2 : ℚ) / 3) + (-(1 : ℚ) / 3) := by
  norm_num

/-- SU(2)² × U(1) anomaly cancellation.
    Only SU(2) doublets contribute:
    3 × (1/6) + (-1/2) = 0 -/
theorem su2_sq_u1_anomaly_cancellation :
    3 * ((1 : ℚ) / 6) + (-(1 : ℚ) / 2) = 0 := by
  norm_num

/-- Mixed gravitational anomaly: U(1) × [gravity]².
    Left-handed:  3 × 2 × (1/6) + 2 × (-1/2) = 0 -/
theorem grav_anomaly_cancellation_left :
    3 * 2 * ((1 : ℚ) / 6) + 2 * (-(1 : ℚ) / 2) = 0 := by
  norm_num

/-- Mixed gravitational anomaly: U(1) × [gravity]².
    Right-handed: 3 × (2/3) + 3 × (-1/3) + (-1) = 0 -/
theorem grav_anomaly_cancellation_right :
    3 * ((2 : ℚ) / 3) + 3 * (-(1 : ℚ) / 3) + (-(1 : ℚ)) = 0 := by
  norm_num

end ObserverCentrism.Gauge.AnomalyCancellation
