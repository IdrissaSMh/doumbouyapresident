import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072')] bg-cover bg-center opacity-5" />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl space-y-12 text-center">
          {/* Logo Section */}
          <div className="flex justify-center">
            <div className="relative flex h-32 w-32 items-center justify-center">
              <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-accent via-primary to-accent opacity-30 blur-xl" />
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-accent via-primary to-accent p-1">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                  <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary text-white">
                    <span className="text-xs font-bold uppercase">Doumbouya</span>
                    <span className="text-2xl font-bold">2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
              <span className="text-secondary">DOUMBOUYA</span>
              <br />
              <span className="text-primary">PRÉSIDENT</span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              Un leadership fort et visionnaire pour bâtir une nation prospère, juste et unie. 
              Ensemble, construisons l'avenir de notre patrie.
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
