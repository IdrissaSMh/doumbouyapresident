import Header from "@/components/Header";
import CommuniquesSection from "@/components/CommuniquesSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Communiques = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <CommuniquesSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Communiques;
