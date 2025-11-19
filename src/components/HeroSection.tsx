import { Button } from "@/components/ui/button";
import heroImage from "@/assets/candidate-hero-new.jpg";
import logoAdp from "@/assets/logo-adp.png";

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
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          {/* Logo ADP */}
          <div className="flex justify-center">
            <div className="relative flex h-32 w-32 items-center justify-center md:h-40 md:w-40">
              <div className="absolute inset-0 animate-pulse rounded-full bg-primary/10 blur-2xl" />
              <img 
                src={logoAdp} 
                alt="ADP Alliance Doumbouya Président" 
                className="relative h-full w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

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
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto sm:min-w-[200px]"
            >
              S'IMPLIQUER
            </Button>
            
            <Button 
              size="lg" 
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 sm:w-auto sm:min-w-[200px]"
            >
              FAIRE UN DON
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
