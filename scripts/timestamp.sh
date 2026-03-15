#!/usr/bin/env bash
#
# Timestamp the current HEAD commit using OpenTimestamps.
#
# Usage:
#   ./scripts/timestamp.sh "Description of what this commit represents"
#
# Prerequisites:
#   pip3 install opentimestamps-client
#
# This script:
#   1. Gets the current HEAD commit hash
#   2. Creates an OpenTimestamps proof for that hash
#   3. Stores the .ots file in timestamps/
#   4. Appends an entry to TIMESTAMPS.md
#   5. Commits the proof and updated log
#
# The .ots proof is initially "pending" (submitted to calendar servers).
# After a few hours, run: ots upgrade timestamps/<hash>.ots
# to add the full Bitcoin blockchain attestation.

set -euo pipefail

cd "$(git rev-parse --show-toplevel)"

# Check prerequisites
if ! command -v ots &> /dev/null; then
    echo "Error: opentimestamps-client not installed."
    echo "Run: pip3 install opentimestamps-client"
    exit 1
fi

# Get description
DESC="${1:-Timestamp}"

# Get current commit
HASH=$(git rev-parse HEAD)
SHORT=$(git rev-parse --short HEAD)
DATE=$(date +%Y-%m-%d)

echo "Timestamping commit: $HASH"
echo "Description: $DESC"

# Create timestamps directory
mkdir -p timestamps

# Check if already timestamped
if [ -f "timestamps/$HASH.ots" ]; then
    echo "This commit is already timestamped."
    echo "To upgrade a pending timestamp: ots upgrade timestamps/$HASH.ots"
    exit 0
fi

# Write commit hash to a temp file and stamp it
HASHFILE=$(mktemp)
echo -n "$HASH" > "$HASHFILE"
ots stamp "$HASHFILE"

# Move the .ots file to timestamps/
mv "$HASHFILE.ots" "timestamps/$HASH.ots"
rm -f "$HASHFILE"

echo ""
echo "Timestamp proof created: timestamps/$HASH.ots"

# Append to TIMESTAMPS.md
echo "| $DATE | [$SHORT](https://github.com/tpresley/observer-centrism/commit/$HASH) | $DESC |" >> TIMESTAMPS.md

echo "Updated TIMESTAMPS.md"

# Commit the proof
git add "timestamps/$HASH.ots" TIMESTAMPS.md
git commit -m "$(cat <<EOF
Add OpenTimestamps proof for $SHORT

Timestamped commit $HASH
Description: $DESC

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
EOF
)"

echo ""
echo "Done. Proof committed."
echo ""
echo "IMPORTANT: After a few hours, upgrade the proof to include the"
echo "full Bitcoin blockchain attestation:"
echo ""
echo "  ots upgrade timestamps/$HASH.ots"
echo "  git add timestamps/$HASH.ots && git commit -m 'Upgrade OTS proof for $SHORT'"
echo ""
echo "To verify at any time:"
echo "  ots verify timestamps/$HASH.ots"
