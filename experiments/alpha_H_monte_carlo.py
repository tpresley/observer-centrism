#!/usr/bin/env python3
"""
Monte Carlo estimate of the holographic noise amplitude coefficient alpha_H
from Brightwell-Gregory longest-chain statistics on Poisson-sprinkled
4D Minkowski causal diamonds.

Background
----------
The framework predicts that geodesic length estimates on a Poisson causal
set have variance Var(delta L) = alpha_H * ell_P * L, where alpha_H is an
O(1) coefficient. The natural target value from the holographic-bound
heuristic substitution (Heuristic 2.3 of causal-set-statistics.md) is
alpha_H ~ 1/4. The Holometer experiment (Chou et al. 2017) constrains
alpha_H <~ 0.24 under the gamma(alpha) = cos(alpha) angular structure
derived in Theorem 5.1 of holographic-noise.md. The natural target sits in
3% tension with this experimental upper bound, demanding a first-principles
calculation.

Method
------
- Set ell_P = 1 (Planck units, sprinkling density rho = 1 per unit 4-volume).
- Sprinkle a Poisson process in 4D Minkowski causal diamonds between
  origin (0,0,0,0) and target (L, 0, 0, 0) for several values of L.
- For each sprinkling, compute the longest-chain length L_max from origin
  to target by dynamic programming on the induced causal poset.
- Self-normalize the BG length estimator l_BG = L * L_max / E[L_max] so
  that E[l_BG] = L exactly. The variance is then
        Var(l_BG) = (L / E[L_max])^2 * Var(L_max)
  Identifying with Var(delta L) = alpha_H * ell_P * L (with ell_P = 1):
        alpha_H = L * Var(L_max) / E[L_max]^2
- alpha_H should be approximately L-independent if the linear scaling of
  the variance with L holds. Sweep L over a range and check.

Notes on interpretation
-----------------------
- The BG estimator measures variance for *timelike* intervals. The
  framework's prediction concerns *null-path* length measurements made by
  an interferometer arm. The two are expected to give the same alpha_H up
  to an O(1) coefficient because both are determined by the same Poisson
  causet statistics. A factor-of-order-unity discrepancy between this
  measurement and the heuristic target is consistent with the heuristic's
  intrinsic precision.
- This script is a prototype. Useful first answer to ~10-20% precision;
  publication-quality result requires careful edge-effect handling, larger
  N, more trials, and validation against published causet results.

Usage
-----
    python3 alpha_H_monte_carlo.py

Author: Generated 2026-04-14 in the holographic noise prediction audit.
"""

import numpy as np
import time
import sys


def sample_diamond(L, rng):
    """Sample a Poisson sprinkling in a 4D Minkowski causal diamond of
    proper time L between origin (0,0,0,0) and target (L,0,0,0).

    The diamond is the intersection of the future cone of origin and the
    past cone of target:
        {(t, x): 0 < t < L, |x|^2 < t^2, |x|^2 < (L-t)^2}
    Its 4-volume is V = pi * L^4 / 24.

    Returns
    -------
    events : (N+2, 4) ndarray
        Row 0 is origin, rows 1..N are sprinkled events (Poisson(V) of them),
        row N+1 is target.
    """
    V = np.pi * L**4 / 24.0
    N = rng.poisson(V)

    if N == 0:
        return np.array([[0.0, 0.0, 0.0, 0.0],
                         [L,   0.0, 0.0, 0.0]])

    # Rejection sampling in the bounding box [0,L] x [-L/2,L/2]^3.
    # Acceptance ratio is V_diamond / V_box = pi/24 ~= 0.131.
    accepted = np.empty((N, 4))
    n_accepted = 0
    while n_accepted < N:
        # Oversample to compensate for ~13% acceptance rate
        batch_size = max(int((N - n_accepted) / 0.131 * 1.5) + 50, 100)
        t = rng.uniform(0.0, L, batch_size)
        x = rng.uniform(-L / 2.0, L / 2.0, (batch_size, 3))
        r2 = (x * x).sum(axis=1)
        in_diamond = (t * t > r2) & ((L - t) * (L - t) > r2)
        idx = np.where(in_diamond)[0]
        n_take = min(len(idx), N - n_accepted)
        for k in range(n_take):
            i = idx[k]
            accepted[n_accepted, 0] = t[i]
            accepted[n_accepted, 1] = x[i, 0]
            accepted[n_accepted, 2] = x[i, 1]
            accepted[n_accepted, 3] = x[i, 2]
            n_accepted += 1

    origin = np.array([[0.0, 0.0, 0.0, 0.0]])
    target = np.array([[L,   0.0, 0.0, 0.0]])
    return np.vstack([origin, accepted, target])


def longest_chain(events):
    """Compute the longest-chain length from event 0 (origin) to the last
    event (target) on the causal poset induced by 4D Minkowski causality.

    Uses dynamic programming in time order:
        chain_length[v] = 1 + max(chain_length[u] : u causally precedes v
                                  and is reachable from origin)

    Returns the number of *links* in the longest chain (so a direct link
    from origin to target with no intermediate events gives 1).
    """
    N = len(events)
    t = events[:, 0]
    x = events[:, 1:]

    # Topological order = time order. Origin is at index 0 with t=0,
    # target at index N-1 with t=L, sprinkled events have intermediate t.
    order = np.argsort(t, kind='stable')

    chain_length = np.full(N, -1, dtype=np.int64)
    chain_length[0] = 0  # zero links from origin to itself

    target_idx = N - 1

    for v in order:
        if v == 0:
            continue
        dt = t[v] - t
        diff = x[v] - x
        dr2 = (diff * diff).sum(axis=1)
        # Predecessors: causally precede v AND reachable from origin
        precedes = (dt > 0.0) & (dt * dt > dr2) & (chain_length >= 0)
        if precedes.any():
            chain_length[v] = 1 + chain_length[precedes].max()

    return chain_length[target_idx]


def run_trials(L, n_trials, rng, progress=False):
    """Run n_trials sprinklings at proper time L, return ndarray of L_max samples."""
    samples = np.empty(n_trials, dtype=np.int64)
    for i in range(n_trials):
        events = sample_diamond(L, rng)
        samples[i] = longest_chain(events)
        if progress and (i + 1) % max(1, n_trials // 10) == 0:
            print(f"    [{i+1}/{n_trials}]", file=sys.stderr, flush=True)
    return samples


def main():
    rng = np.random.default_rng(seed=42)

    # Sweep L (proper time between origin and target, in Planck units).
    # Larger L = larger N (~ pi L^4 / 24) = better statistics but slower.
    # Per-trial cost scales roughly as N^2 ~ L^8 due to the longest-chain DP.
    # Reduce n_trials for the larger L values to keep total runtime manageable.
    sweep = [
        (4.0,  200),
        (6.0,  200),
        (8.0,  200),
        (10.0, 200),
        (12.0, 200),
        (14.0, 200),
        (16.0, 150),
        (18.0, 100),
    ]

    print("# Monte Carlo estimate of alpha_H from Brightwell-Gregory longest-chain statistics")
    print("# Sprinkling density rho = 1 (Planck units, ell_P = 1)")
    print()
    print(f"{'L':>6}  {'trials':>7}  {'<N>':>7}  {'<L_max>':>9}  {'Var(L_max)':>11}  {'Var/L':>9}  {'m_d':>6}  {'alpha_H':>9}  {'SE':>8}  {'time(s)':>9}")
    print("-" * 100)

    results = []
    total_t0 = time.time()
    for L, n_trials in sweep:
        t0 = time.time()
        samples = run_trials(L, n_trials, rng, progress=False)
        elapsed = time.time() - t0

        mean = float(samples.mean())
        var = float(samples.var(ddof=1))
        std = float(np.sqrt(var))
        m_d = mean / L  # effective BG constant
        var_per_L = var / L  # diagnostic: should be constant if Var ~ L
        alpha_H = L * var / mean**2
        # Approximate standard error of variance (assuming roughly normal samples):
        se = alpha_H * np.sqrt(2.0 / (n_trials - 1))

        N_expected = np.pi * L**4 / 24.0
        results.append({
            'L': L, 'mean': mean, 'var': var, 'std': std,
            'm_d': m_d, 'alpha_H': alpha_H, 'se': se,
            'N_expected': N_expected, 'time': elapsed,
            'n_trials': n_trials, 'var_per_L': var_per_L,
        })

        print(f"{L:6.1f}  {n_trials:7d}  {N_expected:7.0f}  {mean:9.3f}  {var:11.4f}  "
              f"{var_per_L:9.5f}  {m_d:6.3f}  {alpha_H:9.4f}  {se:8.4f}  {elapsed:9.1f}")
        sys.stdout.flush()

    total_elapsed = time.time() - total_t0

    print()
    print(f"Total elapsed: {total_elapsed:.1f}s")
    print()

    # Combined estimate: inverse-variance weighted average across L values.
    # This is OK if alpha_H is genuinely L-independent. If results show drift
    # with L, the combined value is misleading and we should report the
    # large-L extrapolation instead.
    weights = np.array([1.0 / r['se']**2 for r in results])
    alphas = np.array([r['alpha_H'] for r in results])
    alpha_combined = float((weights * alphas).sum() / weights.sum())
    se_combined = float(1.0 / np.sqrt(weights.sum()))

    print("Combined estimate (inverse-variance weighted across L):")
    print(f"    alpha_H = {alpha_combined:.4f} +/- {se_combined:.4f}")
    print()

    # Check L-dependence: if alpha_H drifts with L, the linear scaling is
    # not yet asymptotic and finite-N corrections matter.
    alpha_min = min(alphas)
    alpha_max = max(alphas)
    drift = (alpha_max - alpha_min) / alpha_combined
    print(f"L-dependence check: alpha_H ranges from {alpha_min:.4f} to {alpha_max:.4f}")
    print(f"    Relative spread: {drift:.1%}")
    if drift > 0.5:
        print("    WARNING: large drift suggests Var(L_max) does not scale linearly with L")
        print("             (extreme-value statistics give sub-linear variance)")
    elif drift > 0.2:
        print("    NOTE: moderate drift; consider larger L for cleaner extrapolation")
    else:
        print("    Drift is within expected statistical scatter for this n_trials.")
    print()

    # Diagnostic: Var(L_max)/L should be constant if Var ~ L (the framework's
    # CLT-based prediction). If Var ~ const, then Var/L ~ 1/L.
    print("Variance scaling diagnostic: Var(L_max)/L should be constant if Var ~ L")
    print("    (the framework's CLT prediction); decreasing with L would indicate")
    print("    sub-linear scaling characteristic of extreme-value statistics.")
    for r in results:
        print(f"    L={r['L']:5.1f}  Var={r['var']:.4f}  Var/L={r['var_per_L']:.5f}")
    print()
    # Fit log(Var) vs log(L) to extract the scaling exponent
    log_L = np.log(np.array([r['L'] for r in results]))
    log_var = np.log(np.array([r['var'] for r in results]))
    slope, intercept = np.polyfit(log_L, log_var, 1)
    print(f"    Power-law fit: Var(L_max) ~ L^{slope:.3f}")
    print(f"    (slope = 1 would mean linear scaling; slope = 0 would mean constant)")
    print()

    print("Reference values for comparison:")
    print("    Heuristic 2.3 natural target:  alpha_H = 1/4 = 0.2500")
    print("    Holometer 95% CL upper bound:  alpha_H <~ 0.24")
    print()

    # Diagnostic: m_d = E[L_max]/L should converge to the BG constant for d=4.
    # Published value (Bachmat 2007; numerical causet literature) is m_4 ~ 2.62.
    print("Diagnostic: m_d = <L_max>/L should approach the BG constant m_4")
    for r in results:
        print(f"    L={r['L']:5.1f}  m_d={r['m_d']:.4f}")
    print("    Published reference: m_4 ~ 2.62 (asymptotic)")


if __name__ == "__main__":
    main()
