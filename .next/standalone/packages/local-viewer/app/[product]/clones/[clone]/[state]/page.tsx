import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getClone, getCloneState } from '@/lib/load-prototype';
import { getProduct } from '@/lib/load-product';
import { loadSourceFiles } from '@/lib/load-source-files';
import { BottomPill } from '@/components/BottomPill';
import { PrototypeRenderer } from '@/components/PrototypeRenderer';
import { CanvasEmbedGate } from '@/components/CanvasEmbedGate';

export const dynamic = 'force-dynamic';

interface CloneStatePageProps {
  params: Promise<{ product: string; clone: string; state: string }>;
}

export default async function CloneStatePage({ params }: CloneStatePageProps) {
  const { product, clone: cloneName, state: stateId } = await params;

  const clone = getClone(product, cloneName);
  const state = getCloneState(product, cloneName, stateId);
  const productData = getProduct(product);

  if (!clone || !state) {
    notFound();
  }

  // Check if source components exist
  const sourceFiles = loadSourceFiles(product, 'clones', cloneName);
  const hasComponents = sourceFiles !== null;

  const hashBase = `/api/prototype-hash/${product}/clones/${cloneName}`;

  return (
    <main style={{ minHeight: '100vh' }}>
      <PrototypeRenderer
        product={product}
        prototype={cloneName}
        state={state}
        hasComponents={hasComponents}
        isClone={true}
        basePath={`/${product}/clones/${cloneName}`}
        activeVariationIds={undefined}
        hashApiPath={hashBase}
      />
      <Suspense fallback={null}>
        <CanvasEmbedGate>
          <BottomPill
            product={product}
            prototype={cloneName}
            productDisplayName={productData?.displayName}
            prototypeDisplayName={clone.name}
            states={clone.states}
            currentStateId={stateId}
            basePath={`/${product}/clones/${cloneName}`}
          />
        </CanvasEmbedGate>
      </Suspense>
    </main>
  );
}
