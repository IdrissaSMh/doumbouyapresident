import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072')] bg-cover bg-center opacity-10" />
      
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <h1 className="text-5xl font-bold leading-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Le Renouveau pour la Patrie
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl">
            Ensemble, construisons un avenir où chaque citoyen peut s'épanouir dans la dignité, la justice et la prospérité.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="group bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Découvrir le Programme
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
    </section>
  );
};

export default HeroSection;
