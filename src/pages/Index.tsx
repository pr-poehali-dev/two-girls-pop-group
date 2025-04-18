import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import AlbumSection from '@/components/AlbumSection';
import ConcertSchedule from '@/components/ConcertSchedule';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <ConcertSchedule />
        <AboutSection />
        <AlbumSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;