#!/usr/bin/env node
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const viewerRoot = path.resolve(__dirname, '..');
const userCwd = process.cwd();

// Resolve products dir: env var override, or CWD/products
const productsDir = path.resolve(
  process.env.CHORDIO_PRODUCTS_DIR || path.join(userCwd, 'products')
);

if (!fs.existsSync(productsDir)) {
  console.error('Error: No products/ directory found.');
  console.error(`Looked in: ${productsDir}`);
  console.error('Run this from your workbench root, or set CHORDIO_PRODUCTS_DIR.');
  process.exit(1);
}

const PORT = process.env.PORT || 5555;

console.log(`Products directory: ${productsDir}`);
console.log(`Starting viewer on http://localhost:${PORT}`);

// In pnpm monorepos, standalone output preserves workspace structure.
// When installed via npm, it's a flat structure.
const monorepoPath = path.join(viewerRoot, '.next', 'standalone', 'packages', 'local-viewer', 'server.js');
const flatPath = path.join(viewerRoot, '.next', 'standalone', 'server.js');
const serverPath = fs.existsSync(monorepoPath) ? monorepoPath : flatPath;

if (!fs.existsSync(serverPath)) {
  console.error('Error: Built server not found.');
  console.error('Checked:', monorepoPath);
  console.error('Checked:', flatPath);
  console.error('The package may not have been built correctly.');
  process.exit(1);
}

const child = spawn('node', [serverPath], {
  cwd: viewerRoot,
  stdio: 'inherit',
  env: {
    ...process.env,
    CHORDIO_PRODUCTS_DIR: productsDir,
    PORT: String(PORT),
  },
});
child.on('exit', (code) => process.exit(code ?? 0));
