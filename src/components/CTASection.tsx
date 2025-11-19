import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/80 py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase text-primary-foreground lg:text-4xl">
            Rejoignez le Mouvement
          </h2>
          
          <p className="mb-6 text-base text-primary-foreground/90">
            Ensemble, nous pouvons construire un avenir meilleur. Inscrivez-vous à notre newsletter 
            pour recevoir nos actualités et participer activement au changement.
          </p>
          
          <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Votre adresse email"
                className="h-11 bg-card pl-10 text-foreground"
              />
            </div>
            <Button 
              size="lg"
              className="h-11 bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              S'inscrire
            </Button>
          </div>
          
          <p className="mt-4 text-xs text-primary-foreground/80">
            En vous inscrivant, vous acceptez de recevoir nos communications. 
            Vous pouvez vous désinscrire à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
