/-
  QCD Beta Function
  =================

  Formalizes: Proposition 7.1 of gauge/color-force

  The one-loop QCD beta function coefficient determines whether QCD
  is asymptotically free. For SU(Nc) with Nf quark flavors:

    β₀ = (11/3)·Nc - (2/3)·Nf

  With Nc = 3 (colors) and Nf = 6 (quarks), β₀ = 7 > 0,
  confirming asymptotic freedom.
-/

import Mathlib.Tactic.NormNum
import Mathlib.Data.Rat.Defs

namespace ObserverCentrism.Gauge.BetaFunction

/-- One-loop QCD beta function coefficient for SU(3) with 6 flavors.
    β₀ = (11/3)·3 - (2/3)·6 = 11 - 4 = 7.
    (color-force Proposition 7.1) -/
theorem beta_0_qcd : (11 : ℚ) / 3 * 3 - (2 : ℚ) / 3 * 6 = 7 := by norm_num

/-- β₀ > 0 establishes asymptotic freedom for QCD -/
theorem beta_0_positive : (0 : ℚ) < (11 : ℚ) / 3 * 3 - (2 : ℚ) / 3 * 6 := by norm_num

/-- Asymptotic freedom requires Nf < (11/2)·Nc.
    For Nc = 3: Nf < 33/2 = 16.5, so up to 16 flavors preserve asymptotic freedom.
    The SM has 6 flavors, well within the bound. -/
theorem asymptotic_freedom_bound : (6 : ℚ) < (11 : ℚ) / 2 * 3 := by norm_num

end ObserverCentrism.Gauge.BetaFunction
