import Header from "@/components/Header";
import ProgramSection from "@/components/ProgramSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Programme = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ProgramSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Programme;
