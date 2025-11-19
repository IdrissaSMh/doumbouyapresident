import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import simandouLogo from "@/assets/simandou-2040-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-card">
      {/* Boutons d'action */}
      <div className="border-b border-border bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
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

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="text-xl font-bold text-primary-foreground">R</span>
              </div>
              <span className="text-lg font-bold text-foreground">Renouveau</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Un mouvement citoyen pour construire ensemble l'avenir de notre nation.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/candidat" className="text-muted-foreground transition-colors hover:text-foreground">
                  Le Candidat
                </a>
              </li>
              <li>
                <a href="/alliance" className="text-muted-foreground transition-colors hover:text-foreground">
                  L'Alliance
                </a>
              </li>
              <li>
                <a href="/programme" className="text-muted-foreground transition-colors hover:text-foreground">
                  Le Programme
                </a>
              </li>
              <li>
                <a href="/communiques" className="text-muted-foreground transition-colors hover:text-foreground">
                  Les Communiqués
                </a>
              </li>
              <li>
                <a href="/actualites" className="text-muted-foreground transition-colors hover:text-foreground">
                  L'Actualité
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Légal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Conditions d'utilisation
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            
            {/* Logo Simandou 2040 */}
            <div className="mt-6 pt-4 border-t border-border">
              <img 
                src={simandouLogo} 
                alt="Simandou 2040" 
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Doumbouya Président. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
