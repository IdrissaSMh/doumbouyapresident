import Header from "@/components/Header";
import NewsSection from "@/components/NewsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Actualites = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <NewsSection />
        <GallerySection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Actualites;
