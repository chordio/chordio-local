import { redirect } from 'next/navigation';
import { getClone } from '@/lib/load-prototype';

export const dynamic = 'force-dynamic';

interface ClonePageProps {
  params: Promise<{ product: string; clone: string }>;
}

export default async function ClonePage({ params }: ClonePageProps) {
  const { product, clone: cloneName } = await params;
  const clone = getClone(product, cloneName);

  if (!clone || clone.states.length === 0) {
    redirect(`/${product}`);
  }

  // Redirect to first state
  redirect(`/${product}/clones/${cloneName}/${clone.states[0].id}`);
}
