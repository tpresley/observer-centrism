/-
  No-Cloning Theorem
  ==================

  Formalizes: Theorem 3.1 of quantum/entanglement

  The no-cloning theorem states that no linear operation can duplicate
  an arbitrary quantum state. More precisely: there is no linear map
  that acts as |ψ⟩ ↦ |ψ⟩ ⊗ |ψ⟩ for all |ψ⟩.

  The proof is elementary: linearity + cloning on a basis leads to a
  contradiction when applied to a superposition. If cloning works on
  |0⟩ and |1⟩ individually, then applying it to |0⟩ + |1⟩ gives
  (|0⟩ + |1⟩) ⊗ (|0⟩ + |1⟩) by the cloning hypothesis, but
  |0⟩ ⊗ |0⟩ + |1⟩ ⊗ |1⟩ by linearity. These are different.

  We formalize this over ℚ for decidability in the simplest setting:
  ℚ² (a qubit space).
-/

import Mathlib.Tactic.Ring
import Mathlib.Tactic.Linarith
import Mathlib.Tactic.NormNum
import Mathlib.Data.Rat.Defs

namespace ObserverCentrism.Quantum.NoCloning

/-- A 2-dimensional state space (qubit). -/
abbrev Qubit := Fin 2 → ℚ

/-- A 4-dimensional space (two-qubit tensor product). -/
abbrev TwoQubit := Fin 4 → ℚ

/-- Basis state |0⟩ -/
def ket0 : Qubit := fun i =>
  match i with
  | 0 => 1
  | 1 => 0

/-- Basis state |1⟩ -/
def ket1 : Qubit := fun i =>
  match i with
  | 0 => 0
  | 1 => 1

/-- Product state |a⟩ ⊗ |b⟩ in the computational basis.
    Maps (i,j) to a(i) * b(j) via the lexicographic encoding
    0↦(0,0), 1↦(0,1), 2↦(1,0), 3↦(1,1). -/
def tensorProduct (a b : Qubit) : TwoQubit := fun k =>
  match k with
  | 0 => a 0 * b 0
  | 1 => a 0 * b 1
  | 2 => a 1 * b 0
  | 3 => a 1 * b 1

/-- Vector addition in the 4-dimensional space -/
def twoQubitAdd (a b : TwoQubit) : TwoQubit := fun i => a i + b i

/-- A cloning map is a function from single-qubit states to two-qubit states
    that is linear (preserves addition) and clones (maps |ψ⟩ to |ψ⟩⊗|ψ⟩). -/
def IsCloner (f : Qubit → TwoQubit) : Prop :=
  -- Linearity (additivity suffices for the contradiction)
  (∀ a b : Qubit, f (fun i => a i + b i) = twoQubitAdd (f a) (f b)) ∧
  -- Cloning property
  (∀ ψ : Qubit, f ψ = tensorProduct ψ ψ)

/-- The no-cloning theorem: no linear map can clone arbitrary quantum states.

    Proof: Assume f is a linear cloner.
    - f(|0⟩ + |1⟩) = f(|0⟩) + f(|1⟩)       by linearity
                     = |00⟩ + |11⟩             by cloning on basis states
    - f(|0⟩ + |1⟩) = (|0⟩+|1⟩) ⊗ (|0⟩+|1⟩)  by cloning on the sum
                     = |00⟩ + |01⟩ + |10⟩ + |11⟩

    Component 1 (|01⟩): LHS = 0, RHS = 1. Contradiction.

    (entanglement Theorem 3.1) -/
theorem no_cloning : ¬ ∃ f : Qubit → TwoQubit, IsCloner f := by
  intro ⟨f, hlin, hclone⟩
  -- Apply linearity: f(ket0 + ket1) = f(ket0) + f(ket1)
  have h_linear := hlin ket0 ket1
  -- Apply cloning to the sum directly
  have h_clone_sum := hclone (fun i => ket0 i + ket1 i)
  -- Substitute cloning of basis states into the linearity equation
  rw [hclone ket0, hclone ket1] at h_linear
  -- Now: f(sum) = twoQubitAdd (tensorProduct ket0 ket0) (tensorProduct ket1 ket1)
  -- And: f(sum) = tensorProduct sum sum
  -- So: tensorProduct sum sum = twoQubitAdd (tensorProduct ket0 ket0) (tensorProduct ket1 ket1)
  have contra := h_clone_sum.symm.trans h_linear
  -- Extract component 1 (the |01⟩ slot):
  -- LHS: (ket0 0 + ket1 0) * (ket0 1 + ket1 1) = (1+0)*(0+1) = 1
  -- RHS: ket0 0 * ket0 1 + ket1 0 * ket1 1 = 1*0 + 0*1 = 0
  have h := congrFun contra (1 : Fin 4)
  simp only [tensorProduct, twoQubitAdd, ket0, ket1] at h
  norm_num at h

end ObserverCentrism.Quantum.NoCloning
