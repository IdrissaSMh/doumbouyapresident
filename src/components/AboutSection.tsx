import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="candidat" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000"
                alt="Candidat"
                className="h-full w-full object-cover"
              />
            </Card>
          </div>

          {/* Content */}
          <div className="order-1 flex flex-col justify-center space-y-6 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold uppercase text-foreground lg:text-5xl">
                Le Candidat
              </h2>
              <div className="h-1 w-20 bg-secondary" />
            </div>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Notre mouvement est né d'une conviction profonde : notre nation mérite mieux. 
                Mieux que les promesses non tenues, mieux que les divisions artificielles, 
                mieux que l'immobilisme.
              </p>
              <p>
                Nous croyons en une politique qui place l'humain au centre, qui respecte 
                la dignité de chaque citoyen, et qui construit des ponts plutôt que des murs.
              </p>
              <p>
                Notre projet s'appuie sur trois piliers fondamentaux : la justice sociale, 
                le développement économique durable, et la transparence démocratique.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="space-y-2 text-center">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
              <div className="space-y-2 text-center">
                <div className="text-3xl font-bold text-secondary">1000+</div>
                <div className="text-sm text-muted-foreground">Projets réalisés</div>
              </div>
              <div className="space-y-2 text-center">
                <div className="text-3xl font-bold text-accent">100k+</div>
                <div className="text-sm text-muted-foreground">Adhérents</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
