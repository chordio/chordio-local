import { notFound } from 'next/navigation';
import { getResearchContent, getResearchDocs } from '@/lib/load-research';
import { getProduct } from '@/lib/load-product';
import { Header } from '@/components/Header';
import { MarkdownRenderer } from '@/components/MarkdownRenderer';

export const dynamic = 'force-dynamic';

interface ResearchDocPageProps {
  params: Promise<{ product: string; doc: string }>;
}

export default async function ResearchDocPage({ params }: ResearchDocPageProps) {
  const { product: productName, doc: docSlug } = await params;
  const product = getProduct(productName);
  const content = getResearchContent(productName, docSlug);

  if (!product || !content) {
    notFound();
  }

  const docs = getResearchDocs(productName);
  const docMeta = docs.find((d) => d.slug === docSlug);
  const title = docMeta?.title || docSlug;

  return (
    <main className="min-h-screen bg-page">
      <Header
        breadcrumbs={[
          { label: product.displayName, href: `/${product.path}` },
          { label: title },
        ]}
      />
      <article className="max-w-[820px] mx-auto px-12 py-10">
        <MarkdownRenderer content={content} />
      </article>
    </main>
  );
}
