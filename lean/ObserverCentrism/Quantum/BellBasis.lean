/-
  Bell Basis Completeness
  =======================

  Formalizes: Theorem 2.2 of quantum/teleportation

  The four Bell states form a basis for the two-qubit Hilbert space ℚ⁴.
  This is the mathematical foundation of quantum teleportation: any
  two-qubit state can be expanded in the Bell basis.

  The Bell states (over ℚ, unnormalized for simplicity):
    |Φ⁺⟩ = |00⟩ + |11⟩
    |Φ⁻⟩ = |00⟩ - |11⟩
    |Ψ⁺⟩ = |01⟩ + |10⟩
    |Ψ⁻⟩ = |01⟩ - |10⟩

  We prove:
  1. The Bell states are linearly independent (the matrix determinant is nonzero)
  2. Any two-qubit state can be expressed as a linear combination of Bell states
-/

import Mathlib.Tactic.NormNum
import Mathlib.Tactic.Ring
import Mathlib.Tactic.Linarith
import Mathlib.Tactic.FinCases
import Mathlib.Data.Rat.Defs
import Mathlib.Data.Fintype.Basic

namespace ObserverCentrism.Quantum.BellBasis

/-- A two-qubit state as a 4-component rational vector -/
abbrev TwoQubit := Fin 4 → ℚ

/-- Bell state |Φ⁺⟩ = |00⟩ + |11⟩ -/
def bellPhiPlus : TwoQubit
  | 0 => 1 | 1 => 0 | 2 => 0 | 3 => 1

/-- Bell state |Φ⁻⟩ = |00⟩ - |11⟩ -/
def bellPhiMinus : TwoQubit
  | 0 => 1 | 1 => 0 | 2 => 0 | 3 => -1

/-- Bell state |Ψ⁺⟩ = |01⟩ + |10⟩ -/
def bellPsiPlus : TwoQubit
  | 0 => 0 | 1 => 1 | 2 => 1 | 3 => 0

/-- Bell state |Ψ⁻⟩ = |01⟩ - |10⟩ -/
def bellPsiMinus : TwoQubit
  | 0 => 0 | 1 => 1 | 2 => -1 | 3 => 0

/-- Determinant of a 4×4 matrix (cofactor expansion along first row) -/
def det4 (m : Fin 4 → Fin 4 → ℚ) : ℚ :=
  m 0 0 * (m 1 1 * (m 2 2 * m 3 3 - m 2 3 * m 3 2) -
           m 1 2 * (m 2 1 * m 3 3 - m 2 3 * m 3 1) +
           m 1 3 * (m 2 1 * m 3 2 - m 2 2 * m 3 1)) -
  m 0 1 * (m 1 0 * (m 2 2 * m 3 3 - m 2 3 * m 3 2) -
           m 1 2 * (m 2 0 * m 3 3 - m 2 3 * m 3 0) +
           m 1 3 * (m 2 0 * m 3 2 - m 2 2 * m 3 0)) +
  m 0 2 * (m 1 0 * (m 2 1 * m 3 3 - m 2 3 * m 3 1) -
           m 1 1 * (m 2 0 * m 3 3 - m 2 3 * m 3 0) +
           m 1 3 * (m 2 0 * m 3 1 - m 2 1 * m 3 0)) -
  m 0 3 * (m 1 0 * (m 2 1 * m 3 2 - m 2 2 * m 3 1) -
           m 1 1 * (m 2 0 * m 3 2 - m 2 2 * m 3 0) +
           m 1 2 * (m 2 0 * m 3 1 - m 2 1 * m 3 0))

/-- The Bell matrix: rows are components, columns are Bell states -/
def bellMatrix : Fin 4 → Fin 4 → ℚ
  | 0, 0 => 1  | 0, 1 => 1  | 0, 2 => 0  | 0, 3 => 0
  | 1, 0 => 0  | 1, 1 => 0  | 1, 2 => 1  | 1, 3 => 1
  | 2, 0 => 0  | 2, 1 => 0  | 2, 2 => 1  | 2, 3 => -1
  | 3, 0 => 1  | 3, 1 => -1 | 3, 2 => 0  | 3, 3 => 0

/-- The determinant of the Bell matrix is 4 (nonzero).
    Nonzero determinant proves the four Bell states are linearly independent
    and therefore form a basis for ℚ⁴.
    (teleportation Theorem 2.2) -/
theorem bell_matrix_det : det4 bellMatrix = 4 := by native_decide

/-- The Bell states form a basis: any two-qubit state v can be written as
    v = a · |Φ⁺⟩ + b · |Φ⁻⟩ + c · |Ψ⁺⟩ + d · |Ψ⁻⟩
    with explicit rational coefficients.
    (teleportation Theorem 2.2) -/
theorem bell_expansion (v : TwoQubit) :
    ∃ a b c d : ℚ,
      ∀ i : Fin 4,
        v i = a * bellPhiPlus i + b * bellPhiMinus i +
              c * bellPsiPlus i + d * bellPsiMinus i := by
  refine ⟨(v 0 + v 3) / 2, (v 0 - v 3) / 2,
          (v 1 + v 2) / 2, (v 1 - v 2) / 2, ?_⟩
  intro i
  fin_cases i
  · simp [bellPhiPlus, bellPhiMinus, bellPsiPlus, bellPsiMinus]; linarith
  · simp [bellPhiPlus, bellPhiMinus, bellPsiPlus, bellPsiMinus]; linarith
  · simp [bellPhiPlus, bellPhiMinus, bellPsiPlus, bellPsiMinus]; linarith
  · simp [bellPhiPlus, bellPhiMinus, bellPsiPlus, bellPsiMinus]; linarith

end ObserverCentrism.Quantum.BellBasis
