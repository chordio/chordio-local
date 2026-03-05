import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';
import { resolveProductsDir } from '@/lib/paths';

/**
 * Screenshot serving route for clone/prototype screenshots.
 *
 * URL pattern: /api/screenshots/{product}/{clones|prototypes}/{name}/{file}
 * Maps to:     products/{product}/{clones|prototypes}/{name}/screenshots/{file}
 *
 * Kept separate from /api/assets to avoid breaking existing font-loading URLs.
 * Only serves from clones/ and prototypes/ directories within products/.
 * Whitelisted extensions prevent serving arbitrary files.
 */

const MIME_TYPES: Record<string, string> = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
};

const ALLOWED_EXTENSIONS = new Set(Object.keys(MIME_TYPES));
const ALLOWED_TYPES = new Set(['clones', 'prototypes']);

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const segments = (await params).path;

  // Minimum: product/type/name/file
  if (segments.length < 4) {
    return NextResponse.json({ error: 'Invalid path' }, { status: 400 });
  }

  const [product, type, name, ...rest] = segments;

  // Validate type is clones or prototypes
  if (!ALLOWED_TYPES.has(type)) {
    return NextResponse.json({ error: 'Invalid asset type' }, { status: 400 });
  }

  // Validate extension
  const filename = rest[rest.length - 1];
  const ext = path.extname(filename).toLowerCase();
  if (!ALLOWED_EXTENSIONS.has(ext)) {
    return NextResponse.json({ error: 'File type not allowed' }, { status: 403 });
  }

  // Build the file path: products/{product}/{type}/{name}/screenshots/{rest...}
  const productsDir = resolveProductsDir();
  const filePath = path.join(productsDir, product, type, name, 'screenshots', ...rest);

  // Path traversal prevention: resolved path must be within productsDir
  const resolvedPath = path.resolve(filePath);
  if (!resolvedPath.startsWith(productsDir)) {
    return NextResponse.json({ error: 'Invalid path' }, { status: 403 });
  }

  try {
    const data = await readFile(resolvedPath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    return new NextResponse(data, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
