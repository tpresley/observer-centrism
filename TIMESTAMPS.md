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
