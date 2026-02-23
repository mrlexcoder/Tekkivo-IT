import TopHeader from '@/Components/TopHeader';
import Footer from '@/Components/Footer/Footer';
import SingleCaseStudy from '@/Components/Pages/allcases/SingleCaseStudy';
import { caseStudiesData, createSlug } from '@/data/caseStudiesData';

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // In Next.js 15+, params is a Promise — must be awaited
  const { slug } = await params;

  // Find the case study by slug
  const caseStudy = caseStudiesData.find(
    (caseItem) =>
      caseItem.slug === slug || createSlug(caseItem.title) === slug
  );

  // If case study not found, return 404
  if (!caseStudy) {
    return (
      <>
        <TopHeader />
        <div style={{ padding: '100px 20px', textAlign: 'center' }}>
          <h1>Case Study Not Found</h1>
          <p>The case study you&apos;re looking for doesn&apos;t exist.</p>
          <a href="/allcases" style={{ color: '#3b82f6', textDecoration: 'underline' }}>
            Back to Cases
          </a>
        </div>
        <Footer />
      </>
    );
  }

  // Get related cases (same category, excluding current)
  const relatedCases = caseStudiesData
    .filter((item) => item.category === caseStudy.category && item.id !== caseStudy.id)
    .slice(0, 8);

  // If not enough related cases, pad with others
  if (relatedCases.length < 8) {
    const additionalCases = caseStudiesData
      .filter(
        (item) =>
          item.id !== caseStudy.id && !relatedCases.find((r) => r.id === item.id)
      )
      .slice(0, 8 - relatedCases.length);
    relatedCases.push(...additionalCases);
  }

  return (
    <>
      <TopHeader />
      <SingleCaseStudy caseStudy={caseStudy} relatedCases={relatedCases} />
      <Footer />
    </>
  );
}

// Pre-render all case study pages at build time for SEO
export async function generateStaticParams() {
  return caseStudiesData.map((caseItem) => ({
    slug: caseItem.slug,
  }));
}
