import TopHeader from '@/Components/TopHeader';
import Footer from '@/Components/Footer/Footer';
import PerformersPage from '@/Components/Pages/performers/PerformersPage';
import { getCompanies, slugToLabel } from '@/data/performersData';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ category: string; city: string }>;
}) {
    const { category, city } = await params;
    const cat = slugToLabel(category);
    const cityL = slugToLabel(city);
    return {
        title: `Top ${cat} Companies in ${cityL} | Tekkivo IT`,
        description: `Find the best ${cat} in ${cityL}. Browse rankings, reviews, portfolio and case studies.`,
    };
}

export default async function PerformersRoute({
    params,
}: {
    params: Promise<{ category: string; city: string }>;
}) {
    const { category, city } = await params;
    const companies = getCompanies(category, city);

    return (
        <>
            <TopHeader />
            <PerformersPage
                categorySlug={category}
                citySlug={city}
                companies={companies}
            />
            <Footer />
        </>
    );
}
