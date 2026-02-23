import TopHeader from '@/Components/TopHeader';
import Footer from '@/Components/Footer/Footer';
import AllCasesPage from '@/Components/Pages/allcases/AllCasesPage';

export const metadata = {
    title: 'Cases of IT Companies | Tekkivo',
    description: 'Browse real case studies from top IT agencies — SEO, PPC, SMM, branding, web development, and more.',
};

export default function AllCasesRoute() {
    return (
        <>
            <TopHeader />
            <AllCasesPage />
            <Footer />
        </>
    );
}
