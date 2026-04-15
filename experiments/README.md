# Experiments

Numerical experiments and simulations supporting the observer-centrism framework. Unlike the formal derivations in `site/src/content/derivations/`, scripts here are exploratory — they compute approximate values, sanity-check predictions, or test conjectures numerically.

## Index

### `alpha_H_monte_carlo.py`

Prototype Monte Carlo estimate of the holographic noise amplitude coefficient `alpha_H` from Brightwell–Gregory longest-chain statistics on Poisson-sprinkled 4D Minkowski causal diamonds.

**Question it addresses.** The framework's prediction `Var(δL) = α_H · ℓ_P · L` involves an O(1) coefficient `α_H`. The natural target value `α_H ~ 1/4` from the holographic-bound heuristic substitution (Heuristic 2.3 of `causal-set-statistics.md`) sits in 3% tension with the Holometer experimental upper bound `α_H ≲ 0.24` under the `γ(α) = cos α` angular structure (Theorem 5.1 of `holographic-noise.md`). A first-principles causet calculation can determine whether the heuristic is correct or whether the true value is somewhat below the bound.

**What the script does.**

- Sprinkles a Poisson process at density 1 (Planck units) in 4D Minkowski causal diamonds of varying proper times `L`.
- For each sprinkling, computes the longest-chain length `L_max` from origin to target via dynamic programming on the induced causal poset.
- Uses the self-normalized BG length estimator `l_BG = L · L_max / E[L_max]` to extract `α_H = L · Var(L_max) / E[L_max]²`.
- Sweeps `L` over a range, checks for L-independence (verifying linear variance scaling), and reports a combined estimate.

**Status.** Prototype. Useful first answer to ~10–20% precision; not a publication-quality calculation. Edge effects and finite-N corrections are not handled rigorously. Validation against published causet results not yet done.

**Usage.**

```sh
python3 alpha_H_monte_carlo.py
```

Runtime: a few minutes on a laptop. Requires `numpy`.
