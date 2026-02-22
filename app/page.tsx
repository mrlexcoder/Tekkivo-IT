import TopHeader from '@/Components/TopHeader';
import Footer from '@/Components/Footer/Footer';
import FirstSecHome from '@/Components/Pages/Homepage/FirstSecHome';
import SecSecHome from '@/Components/Pages/Homepage/SecSecHome';
import ThirdSecHome from '@/Components/Pages/Homepage/ThirdSecHome';
import FourthSecHome from '@/Components/Pages/Homepage/FourthSecHome';

export default function Home() {
  return (
    <>
      <TopHeader />
      <FirstSecHome />
      <SecSecHome />
      <ThirdSecHome />
      <FourthSecHome />
      <Footer />
    </>
  );
}
