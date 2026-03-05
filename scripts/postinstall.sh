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

if [ -z "$PROXY_NAME" ]; then
  exit 0
fi

if [ -d "$SERVER_DIR/.next/node_modules/$PROXY_NAME" ]; then
  exit 0
fi

# Find the real esbuild — npm may hoist it above the package directory
ESBUILD_DIR=$(node -e "console.log(require.resolve('esbuild').replace(/\/lib\/main\.js$/, ''))" 2>/dev/null) || true

if [ -z "$ESBUILD_DIR" ] || [ ! -d "$ESBUILD_DIR" ]; then
  echo "Warning: postinstall could not locate esbuild. Prototype rendering may not work." >&2
  exit 0
fi

mkdir -p "$SERVER_DIR/.next/node_modules"
ln -s "$ESBUILD_DIR" "$SERVER_DIR/.next/node_modules/$PROXY_NAME"
