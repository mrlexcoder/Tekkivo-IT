import TopHeader from '@/Components/TopHeader';
import Footer from '@/Components/Footer/Footer';

export default function Home() {
  return (
    <>
      <TopHeader />
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <main className="text-center">
          <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Tekkivo Hello
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Welcome to Tekkivo-IT
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
}
