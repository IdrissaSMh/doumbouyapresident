import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Candidat = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Candidat;
