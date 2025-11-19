import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ContactMap from "@/components/ContactMap";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, User, Newspaper } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold uppercase text-primary-foreground lg:text-5xl">
                Contactez-nous
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Nous sommes à votre écoute pour répondre à toutes vos questions
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Adresse */}
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full bg-primary/10 p-4">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Siège de l'Alliance
                      </h3>
                      <p className="text-muted-foreground">
                        Kipé Dadia – C/Ratoma
                        <br />
                        Conakry, Guinée
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Téléphone */}
              <Card className="border-secondary/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full bg-secondary/10 p-4">
                      <Phone className="h-8 w-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Téléphone
                      </h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+224628606675" className="hover:text-secondary transition-colors">
                          +224 628 60 66 75
                        </a>
                        <br />
                        <a href="tel:+224624372124" className="hover:text-secondary transition-colors">
                          +224 624 37 21 24
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="border-accent/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full bg-accent/10 p-4">
                      <Mail className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Email
                      </h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:contact@adp-guinee.org" className="hover:text-accent transition-colors">
                          contact@adp-guinee.org
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact pour interviews */}
        <section className="bg-muted/50 py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold uppercase text-foreground mb-4">
                  Contact Presse et Interviews
                </h2>
                <p className="text-muted-foreground">
                  Pour toute demande d'interview ou information presse
                </p>
              </div>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Mr Magassouba
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Responsable Communication
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-secondary/10 p-3">
                        <Phone className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Ligne Directe
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          <a href="tel:+224610010230" className="hover:text-secondary transition-colors">
                            +224 610 010 230
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-accent/10 p-3">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Email Presse
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          <a href="mailto:magassouba99@gmail.com" className="hover:text-accent transition-colors">
                            magassouba99@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Newspaper className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Disponibilité
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Lundi - Samedi: 9h - 18h
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">
                      Merci de nous contacter au moins 48 heures à l'avance pour toute demande d'interview.
                      Nous nous efforçons de répondre à toutes les demandes dans les meilleurs délais.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold uppercase text-foreground mb-4">
                  Notre Localisation
                </h2>
                <p className="text-muted-foreground">
                  Retrouvez-nous à notre siège à Kipé Dadia, Commune de Ratoma
                </p>
              </div>

              <ContactMap />

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  <strong>Accès:</strong> À proximité du marché de Kipé, accessible par transport en commun et taxi
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Contact;
