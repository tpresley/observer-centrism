# Cosmological Arrow and the Sign of $\Lambda$

**Type**: Research target (closed — resolved 2026-04-22)
**Status**: Closed. Resolved by strengthening of [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Theorem 5.4 to strict positivity via new Theorem 8.10 and Corollary 8.11. [Time as Phase Ordering](../site/src/content/derivations/thermodynamics/time.md) Gap 3 (cosmological arrow) was simultaneously closed by the same argument, with a new "Cosmological Arrow" section added to that derivation cross-referencing Observer Loop Viability Theorem 8.10.
**Last updated**: 2026-04-22

## Goal (as originally scoped)

The framework had derived $\Lambda \geq 0$ via bounce dissolution ([Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Theorem 5.4). The remaining question was whether the strict inequality $\Lambda > 0$ could be established — equivalently, whether $\Lambda = 0$ was ruled out by the axioms. The same question appeared in two places:

- Observer Loop Viability Gap 3 — "Sharpening to $\Lambda > 0$"
- Time Gap 3 — "Cosmological arrow"

Both asked the same structural question: does the monotone structural arrow of time ($d(v)$ non-decreasing) force the global cosmological arrow (eternal expansion)?

## Resolution (summary)

$\Lambda > 0$ strictly, with a framework-computable lower bound $\Lambda \geq 3\pi/(C_0\ell_P^2)$.

The argument combines three ingredients already present in the framework at the time of resolution:

1. **Integer quantization of the Cauchy-slice total** ([Coherence Conservation](../site/src/content/derivations/axioms/coherence-conservation.md) Corollary 5.5a): $C_0^{(n)} = N^{(n)} \hbar\omega_0$ with $N^{(n)} \in \mathbb{Z}_{\geq 0}$. Integer means finite.

2. **Per-observer structure of $C_0$** ([Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Proposition 7.4 Remark): $C_0$ is a per-observer quantity, same value for all by constitutive universality but not a global total. Combined with the holographic bound on each observer's epistemic horizon (Proposition 1.5), this makes per-observer $C_0$ finite regardless of global spatial extent of the interaction graph.

3. **Level-indexed cosmological parameter** ([Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Definitions 8.1 and 8.2): $\Lambda_n^{\text{eff}} = 3\pi/(S^{(n)}\ell_P^2)$ with $S^{(n)} \leq C_0^{(n)}$. At the highest bootstrap level, $\Lambda_N^{\text{eff}} = \Lambda$.

Combining: $\Lambda_n^{\text{eff}} \geq 3\pi/(C_0^{(n)}\ell_P^2) > 0$ at every level; hence $\Lambda > 0$ strictly.

With $C_0 \approx 4.6 \times 10^{122}\,\hbar\omega_0$ from Proposition 8.7, the lower bound is $\Lambda \gtrsim 2 \times 10^{-122}\,\ell_P^{-2}$ — coinciding with the level-0 projection $\Lambda_0^{\text{eff}}$ of the same proposition. The observed value lies at factor $\sim 1/\Omega_\Lambda \approx 1.43$ above this bound.

The cosmological arrow question (Time Gap 3) falls out as a corollary: strict positivity of $\Lambda$ gives eternal de Sitter expansion asymptotically, whose Gibbons-Hawking bath supplies persistent event generation at constant rate per Hubble volume. Matter-dominated $\Lambda = 0$ cosmologies would give a convergent total event count per comoving volume (integrated two-body rate $\propto t^{-2}$) and hence a saturating structural arrow. Strict positivity identifies the global cosmological arrow (eternal expansion) with the structural arrow (unbounded $d(v)$).

## Historical record — exploration that led to the resolution

The initial exploratory pass (recorded for process-level interest, not as framework content) considered five candidate arguments. All but one failed:

- **Loop Closure (Axiom 3) requires unbounded phase cycles**: insufficient, because phase cycles of a single isolated observer do not generate new relational invariants, so $d(v)$ can stay constant on an isolated observer's worldline.
- **Multiplicity (C5) requires ongoing interactions**: insufficient, because C5 is a structure constraint, not a production rule; dispersed observers satisfy C5 trivially.
- **Bootstrap hierarchy must extend**: insufficient, because no axiom requires new bootstrap levels to continue forming.
- **Coherence conservation forces persistent activity**: insufficient, because Proposition 5.4 is a state statement about Cauchy-slice totals, not a flow statement.
- **Continuous-discrete fixed point requires persistent substrate**: plausible, but requires formalizing an aperiodic-tiling substrate-density lower bound that was not in hand.

A sharper argument via event-generation rates (matter dilution in $\Lambda = 0$ gives finite integrated new events; Gibbons-Hawking bath in $\Lambda > 0$ gives divergent integrated events) was clean, but depended on proving the axioms force the arrow to be *strictly* eternal — which the earlier exploration could not establish from any of the candidate routes.

The resolution came from a different direction: recognizing that [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Definition 8.2 together with the finiteness of per-observer $C_0$ (Corollary 5.5a + Proposition 7.4 Remark + holographic bound) already gives strict positivity directly, without needing to argue about arrow eternality at all. The cosmological arrow then follows as a corollary of $\Lambda > 0$, rather than being the mechanism that forces it.

The key conceptual point that enabled the resolution: the framework's accounting is constitutively per-observer, not global. An abstract "DAG with infinite vertices" at the coherence-topological layer may exist mathematically but is not in the framework's accounting of physical predictions — each observer's epistemically accessible content is bounded by its holographic capacity. This is the framework's position in [Observer-Projected Spacetime](../site/src/content/derivations/foundation/observer-projected-spacetime.md), [Time as Phase Ordering](../site/src/content/derivations/thermodynamics/time.md) Proposition 8.1, and [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md) Proposition 7.4. Under this per-observer epistemic frame, $C_0$ is always finite, and the chain closes.

## Framework changes made in resolution

- [Observer Loop Viability](../site/src/content/derivations/cosmology/observer-loop-viability.md): frontmatter summary, Statement part 3, and Consistency Check updated to reflect strict positivity. New Theorem 8.10 (Strict positivity of $\Lambda$) and Corollary 8.11 (Numerical lower bound) added at the end of Step 8. New Remark on the connection to the cosmological arrow of time. Rigor Assessment updated to list the new theorem and corollary. Open Gaps renumbered (former Gap 3 removed; former Gaps 4, 5, 6 renumbered to 3, 4, 5).
- [Time as Phase Ordering](../site/src/content/derivations/thermodynamics/time.md): Gap 3 (cosmological arrow) removed from Open Gaps. New "Cosmological Arrow" section added after Open Gaps, explaining how the global arrow follows from Observer Loop Viability Theorem 8.10.
- `site/src/data/future-targets.json`: `cosmological-arrow` target marked `COMPLETED 2026-04-22`.

## Intellectual origin

Scoped during the 2026-04-22 framework exploration session. Initial exploratory pass identified five candidate arguments, all of which were either insufficient on their own or required formalizing machinery not yet in hand. The resolution emerged from a clarifying question about whether the holographic bound constrains event count in a 4-volume; this prompted a re-examination of the framework's per-observer structure (Proposition 7.4 Remark), which revealed that the chain Corollary 5.5a + Proposition 7.4 Remark + Definition 8.2 directly forces strict positivity — a result already implicit in the existing framework but not previously made explicit as a theorem.
