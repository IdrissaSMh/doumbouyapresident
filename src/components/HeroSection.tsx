import heroImage from "@/assets/candidate-hero-new.jpg";

const HeroSection = () => {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] flex-col overflow-hidden">
      {/* Image du candidat */}
      <div className="relative h-[60vh] w-full">
        <img 
          src={heroImage} 
          alt="Président Mamadi Doumbouya" 
          className="h-full w-full object-cover object-top"
        />
      </div>
      
      {/* Contenu en bas */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-secondary">DOUMBOUYA</span>
              <br />
              <span className="text-primary">PRÉSIDENT</span>
            </h1>
            
            <p className="mx-auto max-w-3xl text-lg font-semibold md:text-xl lg:text-2xl">
              POUR BÂTIR UNE GUINÉE ÉMERGENTE ET PROSPÈRE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
