import Navbar from '@/app/components/Navbar';
import HeroSection from '@/app/components/HeroSection';
import ServicesSection from '@/app/components/ServicesSection';
import OdooModulesSection from '@/app/components/OdooModulesSection';
// import TestimonialsSection from '@/app/components/TestimonialsSection';
// import NewsletterSection from '@/app/components/NewsletterSection';
// import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <HeroSection />
        <ServicesSection />
        <OdooModulesSection />
        {/* <TestimonialsSection />
        <NewsletterSection />
        <Footer /> */}
      </main>
    </>
  );
}