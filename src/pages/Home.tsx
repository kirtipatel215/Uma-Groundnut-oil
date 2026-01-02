import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import QualitySection from "@/components/sections/QualitySection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ContactSection from "@/components/sections/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Home = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      <Navigation />

      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <QualitySection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>

      <WhatsAppButton variant="floating" />
      <Footer />
    </div>
  );
};

export default Home;
