import dynamic from 'next/dynamic';
import HeadText from './landing-page-components/HeadText/HeadText';
import Navbar from './landing-page-components/Navbar/Navbar';
import BuiltAndShipsWith from './landing-page-components/Sections/BuiltAndShipsWith/BuiltAndShipsWith';
import FeaturesSection from './landing-page-components/Sections/Features/FeaturesSection';
import UserReviews from './landing-page-components/Sections/UserReviews/UseReviews';
import FAQSection from './landing-page-components/Sections/FAQs/FAQSection';
import Footer from './landing-page-components/Footer/Footer';

import { Provider } from 'react-redux';
import store from '@/redux/store';

const VideoSection = dynamic(() => import('./landing-page-components/Sections/VideoSection/VideoSection'), {
  ssr: false,
});

const videoId: string = 'dQw4w9WgXcQ';

export default function Home() {
  return (

    <div className="flex flex-col min-h-screen px-8 bg-white dark:bg-[#2d3748] text-black dark:text-[#e2e8f0] font-Virgil">
        <Navbar />
        <div className='p-8 py-31'>
          <HeadText />
          <VideoSection videoId={videoId} />
        </div>
        <BuiltAndShipsWith />
        <main className="flex-grow">
          <section id="section1" className="min-h-screen flex items-center justify-center">
            <FeaturesSection />
          </section>

          <section id="section2" className="min-h-screen flex items-center justify-center">
            <UserReviews />
          </section>

          <section id="section3" className="min-h-screen flex items-center justify-center">
            <FAQSection />
          </section>
        </main>
        <Footer />
      </div>
  );
}
