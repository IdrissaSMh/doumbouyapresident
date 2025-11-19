import { Button } from "@/components/ui/button";
import heroImage from "@/assets/candidate-hero.jpg";
import logoAdp from "@/assets/logo-adp.png";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl space-y-12 text-center">
          {/* Logo Section */}
          <div className="flex justify-center">
            <div className="relative flex h-48 w-48 items-center justify-center md:h-56 md:w-56">
              <div className="absolute inset-0 animate-pulse rounded-full bg-white/20 blur-2xl" />
              <img 
                src={logoAdp} 
                alt="ADP Alliance Doumbouya Président" 
                className="relative h-full w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="text-secondary drop-shadow-lg">DOUMBOUYA</span>
              <br />
              <span className="text-primary drop-shadow-lg">PRÉSIDENT</span>
            </h1>
            
            <p className="mx-auto max-w-3xl text-xl font-semibold text-white drop-shadow-lg md:text-2xl lg:text-3xl">
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
