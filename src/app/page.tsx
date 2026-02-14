
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import TeamAndInvestSection from '@/components/TeamAndInvestSection';
import TabsSection from '@/components/TabsSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      <Hero />

      <Stats />

      {/* Team Photos, Quotes, Financial Review */}
      <TeamAndInvestSection />

      {/* Research Services & Business Banners + Grid */}
      <ServicesSection />

      {/* The Interactive Carousel Section (Five-image set) */}
      <TabsSection />

      <Footer />
    </main>
  );
}
