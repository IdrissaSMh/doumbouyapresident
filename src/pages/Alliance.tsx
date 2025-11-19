import Header from "@/components/Header";
import AllianceSection from "@/components/AllianceSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Alliance = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AllianceSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Alliance;
