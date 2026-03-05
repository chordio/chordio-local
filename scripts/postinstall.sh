#!/usr/bin/env bash
# Turbopack externalizes esbuild under a hashed name (esbuild-<hash>).
# The proxy module that maps this name to the real esbuild lives in
# .next/node_modules/ which npm strips during install. Recreate it as
# a symlink to the npm-installed esbuild so the server can find it.
set -euo pipefail

PKG_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SERVER_DIR="$PKG_DIR/.next/standalone/packages/local-viewer"

# Extract the hashed esbuild module name from the server chunks
PROXY_NAME=$(grep -roh '"esbuild-[a-f0-9]\+"' "$SERVER_DIR/.next/server/chunks/" 2>/dev/null | head -1 | tr -d '"')

if [ -n "$PROXY_NAME" ] && [ ! -d "$SERVER_DIR/.next/node_modules/$PROXY_NAME" ]; then
  mkdir -p "$SERVER_DIR/.next/node_modules"
  ln -s "$PKG_DIR/node_modules/esbuild" "$SERVER_DIR/.next/node_modules/$PROXY_NAME"
fi
