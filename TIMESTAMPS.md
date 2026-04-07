# Provenance Timestamps

This project uses [OpenTimestamps](https://opentimestamps.org/) to create immutable, Bitcoin-anchored proofs of existence for key commits. Each `.ots` file in the `timestamps/` directory is a cryptographic proof that the corresponding git commit hash existed before a specific Bitcoin block was mined.

## How It Works

A git commit hash is a SHA-1 digest of the entire repository state — every file, every line, the full history. Timestamping a commit hash proves that the complete content of the repository at that point existed no later than the timestamp date.

## Verifying Timestamps

Anyone can independently verify these proofs:

```bash
pip3 install opentimestamps-client

# Recreate the hash file and verify against it
HASH="<commit hash>"
echo -n "$HASH" > /tmp/verify_hash
ots verify -f /tmp/verify_hash timestamps/$HASH.ots
```

Or use the web verifier at https://opentimestamps.org/ — upload the `.ots` file to confirm the timestamp against the Bitcoin blockchain.

## Timestamp Log

| Date | Commit | Description |
|------|--------|-------------|
| 2026-03-14 | [ff85ef3](https://github.com/tpresley/observer-centrism/commit/ff85ef3ea731528d4ec27a33df2876c37ea09daf) | Initial provenance record — 61 derivations (59 rigorous, 1 provisional, 1 non-viable), 10 predictions, 9 Lean-verified theorems, CC BY 4.0 |
| 2026-03-22 | [2431d7e](https://github.com/tpresley/observer-centrism/commit/2431d7e0d506b1ecc182dbcdd0fb8f00b12ba284) | Full 64-derivation validation complete, mysteries section expanded — 64 derivations (60 rigorous, 1 provisional, 2 draft, 1 non-viable), 11 predictions, 26 Lean-verified theorems |
| 2026-04-06 | [9f7d9c7](https://github.com/tpresley/observer-centrism/commit/9f7d9c7d99016723c4b9b25f2a0886f14f0e8291) | Major session: continuous-discrete duality, geometric substrate, cyclic cosmology, S1 promotions (loop-closure manifold → theorem, three-generations → theorem), honest rigor reclassification, domain pages, demystification framing, experimental brief — 74 derivations (26 rigorous, 43 provisional, 1 non-viable), 12 predictions, 26 Lean-verified theorems, 5 active structural postulates |
