/-
  Observer-Centrism: Lean 4 Formal Verification
  ===============================================

  Machine-verified mathematical claims from the observer-centrism derivations.
  See lean/README.md for documentation.

  Every proof here verifies a non-trivial mathematical claim — not arithmetic
  that a human could check at a glance, but structural results where mechanical
  verification adds genuine confidence.
-/

-- Algebra infrastructure and Hurwitz theory
import ObserverCentrism.Algebra.CayleyDickson
import ObserverCentrism.Algebra.HurwitzNormed

-- Gauge theory: division algebra obstructions and anomaly cancellation
import ObserverCentrism.Gauge.AnomalyCancellation
import ObserverCentrism.Gauge.SedenionZeroDivisor
import ObserverCentrism.Gauge.SedenionNonDivision

-- Quantum mechanics: no-cloning and Bell basis
import ObserverCentrism.Quantum.NoCloning
import ObserverCentrism.Quantum.BellBasis

-- Particles: spin-statistics core and generation counting
import ObserverCentrism.Particles.GenerationCounting
import ObserverCentrism.Particles.SpinStatistics
