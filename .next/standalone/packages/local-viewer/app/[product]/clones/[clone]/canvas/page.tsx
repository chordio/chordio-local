import { notFound } from 'next/navigation';
import { getClone } from '@/lib/load-prototype';
import { CanvasView } from '@/components/CanvasView';

export const dynamic = 'force-dynamic';

interface CloneCanvasPageProps {
  params: Promise<{ product: string; clone: string }>;
  searchParams: Promise<{ from?: string }>;
}

export default async function CloneCanvasPage({ params, searchParams }: CloneCanvasPageProps) {
  const { product, clone: cloneName } = await params;
  const { from } = await searchParams;

  const clone = getClone(product, cloneName);
  if (!clone || clone.states.length === 0) {
    notFound();
  }

  const basePath = `/${product}/clones/${cloneName}`;

  const states = clone.states;

  // Validate the ?from= state ID
  const initialStateId = from && states.some((s) => s.id === from) ? from : states[0].id;

  return (
    <CanvasView
      product={product}
      prototype={cloneName}
      states={states}
      basePath={basePath}
      initialStateId={initialStateId}
    />
  );
}
