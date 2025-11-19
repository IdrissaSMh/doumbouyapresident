import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <GallerySection />
        <CTASection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
