import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AllianceSection from "@/components/AllianceSection";
import ProgramSection from "@/components/ProgramSection";
import CommuniquesSection from "@/components/CommuniquesSection";
import NewsSection from "@/components/NewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AllianceSection />
        <ProgramSection />
        <CommuniquesSection />
        <NewsSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
