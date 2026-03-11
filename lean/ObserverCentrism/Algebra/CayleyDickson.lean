/-
  Cayley-Dickson Construction
  ============================

  The Cayley-Dickson doubling construction produces the tower of algebras:
    ℝ → ℂ → ℍ → 𝕆 → 𝕊 (sedenions)

  The multiplication rule for pairs (a, b) over an algebra A with
  conjugation is:
    (a, b) * (c, d) = (a*c - conj(d)*b, d*a + b*conj(c))

  We implement this over ℚ (rationals) for decidable computation,
  using a concrete representation as 2ⁿ-tuples.
-/

import Mathlib.Tactic.NormNum
import Mathlib.Data.Rat.Defs

namespace ObserverCentrism.Algebra.CayleyDickson

/-! ## Concrete representation as fixed-size tuples

  Rather than using a generic inductive Cayley-Dickson type (which leads to
  complex unfolding in proofs), we represent each level concretely:
  - Level 0 (ℝ):  ℚ                    (1 component)
  - Level 1 (ℂ):  ℚ × ℚ               (2 components)
  - Level 2 (ℍ):  Fin 4 → ℚ           (4 components)
  - Level 3 (𝕆):  Fin 8 → ℚ           (8 components)
  - Level 4 (𝕊):  Fin 16 → ℚ          (16 components)

  For the sedenion zero divisor proof, we only need level 4 (𝕊).
  We define sedenion multiplication via the recursive Cayley-Dickson rule,
  using octonionic multiplication at the previous level.
-/

/-- Sedenion: a 16-component vector over ℚ -/
abbrev Sedenion := Fin 16 → ℚ

/-- Octonion: an 8-component vector over ℚ -/
abbrev Octonion := Fin 8 → ℚ

/-- Quaternion: a 4-component vector over ℚ -/
abbrev Quat := Fin 4 → ℚ

/-! ## Quaternion multiplication

  Using the standard basis {1, i, j, k} with:
  i² = j² = k² = -1, ij = k, jk = i, ki = j
-/

/-- Quaternion multiplication -/
def quatMul (a b : Quat) : Quat := fun i =>
  match i with
  | 0 => a 0 * b 0 - a 1 * b 1 - a 2 * b 2 - a 3 * b 3
  | 1 => a 0 * b 1 + a 1 * b 0 + a 2 * b 3 - a 3 * b 2
  | 2 => a 0 * b 2 - a 1 * b 3 + a 2 * b 0 + a 3 * b 1
  | 3 => a 0 * b 3 + a 1 * b 2 - a 2 * b 1 + a 3 * b 0

/-- Quaternion conjugation: conj(a₀ + a₁i + a₂j + a₃k) = a₀ - a₁i - a₂j - a₃k -/
def quatConj (a : Quat) : Quat := fun i =>
  match i with
  | 0 => a 0
  | 1 => -(a 1)
  | 2 => -(a 2)
  | 3 => -(a 3)

/-! ## Octonion multiplication via Cayley-Dickson doubling of ℍ

  An octonion (a, b) with a, b : Quat.
  Multiplication: (a,b)*(c,d) = (a*c - conj(d)*b, d*a + b*conj(c))
  Conjugation: conj(a,b) = (conj(a), -b)

  We encode: octonion components 0-3 are the first quaternion,
  components 4-7 are the second quaternion.
-/

/-- Extract the first quaternion component of an octonion -/
def octFst (x : Octonion) : Quat := fun i => x ⟨i.val, by omega⟩

/-- Extract the second quaternion component of an octonion -/
def octSnd (x : Octonion) : Quat := fun i => x ⟨i.val + 4, by omega⟩

/-- Construct an octonion from two quaternions -/
def mkOct (a b : Quat) : Octonion := fun i =>
  if h : i.val < 4 then a ⟨i.val, h⟩ else b ⟨i.val - 4, by omega⟩

/-- Quaternion negation -/
def quatNeg (a : Quat) : Quat := fun i => -(a i)

/-- Quaternion subtraction -/
def quatSub (a b : Quat) : Quat := fun i => a i - b i

/-- Quaternion addition -/
def quatAdd (a b : Quat) : Quat := fun i => a i + b i

/-- Octonion multiplication via Cayley-Dickson -/
def octMul (x y : Octonion) : Octonion :=
  let a := octFst x
  let b := octSnd x
  let c := octFst y
  let d := octSnd y
  -- (a*c - conj(d)*b, d*a + b*conj(c))
  mkOct (quatSub (quatMul a c) (quatMul (quatConj d) b))
        (quatAdd (quatMul d a) (quatMul b (quatConj c)))

/-- Octonion conjugation: conj(a,b) = (conj(a), -b) -/
def octConj (x : Octonion) : Octonion :=
  mkOct (quatConj (octFst x)) (quatNeg (octSnd x))

/-! ## Sedenion multiplication via Cayley-Dickson doubling of 𝕆

  A sedenion (a, b) with a, b : Octonion.
  Multiplication: (a,b)*(c,d) = (a*c - conj(d)*b, d*a + b*conj(c))

  We encode: sedenion components 0-7 are the first octonion,
  components 8-15 are the second octonion.
-/

/-- Extract the first octonion component of a sedenion -/
def sedFst (x : Sedenion) : Octonion := fun i => x ⟨i.val, by omega⟩

/-- Extract the second octonion component of a sedenion -/
def sedSnd (x : Sedenion) : Octonion := fun i => x ⟨i.val + 8, by omega⟩

/-- Construct a sedenion from two octonions -/
def mkSed (a b : Octonion) : Sedenion := fun i =>
  if h : i.val < 8 then a ⟨i.val, h⟩ else b ⟨i.val - 8, by omega⟩

/-- Octonion negation -/
def octNeg (a : Octonion) : Octonion := fun i => -(a i)

/-- Octonion subtraction -/
def octSub (a b : Octonion) : Octonion := fun i => a i - b i

/-- Octonion addition -/
def octAdd (a b : Octonion) : Octonion := fun i => a i + b i

/-- Sedenion multiplication via Cayley-Dickson -/
def sedMul (x y : Sedenion) : Sedenion :=
  let a := sedFst x
  let b := sedSnd x
  let c := sedFst y
  let d := sedSnd y
  -- (a*c - conj(d)*b, d*a + b*conj(c))
  mkSed (octSub (octMul a c) (octMul (octConj d) b))
        (octAdd (octMul d a) (octMul b (octConj c)))

/-- The zero sedenion -/
def sedZero : Sedenion := fun _ => 0

/-! ## Basis elements

  e_k is the sedenion with 1 in position k and 0 elsewhere.
-/

/-- Sedenion basis element -/
def sedBasis (k : Fin 16) : Sedenion := fun i =>
  if i = k then 1 else 0

/-- Sedenion addition -/
def sedAdd (a b : Sedenion) : Sedenion := fun i => a i + b i

/-- Sedenion subtraction -/
def sedSub (a b : Sedenion) : Sedenion := fun i => a i - b i

end ObserverCentrism.Algebra.CayleyDickson
