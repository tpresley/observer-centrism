/-
  Observer-Centrism: Lean 4 Formal Verification
  ===============================================

  Machine-verified mathematical claims from the observer-centrism derivations.
  See lean/README.md for documentation.
-/

-- Algebra infrastructure
import ObserverCentrism.Algebra.CayleyDickson

-- Gauge theory
import ObserverCentrism.Gauge.AnomalyCancellation
import ObserverCentrism.Gauge.SedenionZeroDivisor
import ObserverCentrism.Gauge.BetaFunction
import ObserverCentrism.Gauge.BosonCounting

-- Cosmology
import ObserverCentrism.Cosmology.CouplingRatios

-- Dimensions and spacetime
import ObserverCentrism.Dimensions.LieAlgebraDim

-- Particles
import ObserverCentrism.Particles.GenerationCounting
import ObserverCentrism.Particles.SpinStatistics

-- Holography
import ObserverCentrism.Holography.BlackHoleArithmetic

-- Flavor
import ObserverCentrism.Flavor.A5Arithmetic

-- Chirality
import ObserverCentrism.Chirality.CPTOrientation
