import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users2, HandshakeIcon } from "lucide-react";

const AllianceSection = () => {
  const partners = [
    {
      icon: Shield,
      title: "Unité Nationale",
      description: "Rassembler tous les citoyens autour d'un projet commun de développement et de prospérité.",
    },
    {
      icon: Target,
      title: "Objectifs Partagés",
      description: "Des priorités claires et mesurables pour transformer notre pays en profondeur.",
    },
    {
      icon: Users2,
      title: "Coalition Large",
      description: "Une alliance de toutes les forces vives : partis politiques, société civile, secteur privé.",
    },
    {
      icon: HandshakeIcon,
      title: "Engagement Collectif",
      description: "Travailler ensemble pour le bien commun et l'intérêt supérieur de la nation.",
    },
  ];

  return (
    <section id="alliance" className="bg-muted/30 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold uppercase text-foreground lg:text-5xl">
            L'Alliance
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-secondary" />
          <p className="text-lg text-muted-foreground">
            Une coalition forte et déterminée pour porter le changement. Unis dans la diversité, 
            nous formons un mouvement citoyen au service de la nation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <Card
                key={index}
                className="border-2 transition-all hover:border-primary hover:shadow-lg"
              >
                <CardContent className="flex flex-col items-center space-y-4 p-6 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground">
                    {partner.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {partner.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AllianceSection;
