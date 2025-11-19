import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Briefcase, Sprout, Shield } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useState } from "react";
import pilier1 from "@/assets/pilier-1.png";
import pilier2 from "@/assets/pilier-2.png";
import pilier3 from "@/assets/pilier-3.png";
import pilier4 from "@/assets/pilier-4.png";
import pilier5 from "@/assets/pilier-5.png";

const ProgramSection = () => {
  const [selectedPillar, setSelectedPillar] = useState<{ image: string; title: string; description: string } | null>(null);

  const programs = [
    {
      icon: Briefcase,
      title: "Économie & Emploi",
      description: "Créer 500 000 emplois en 5 ans à travers un plan d'investissement massif dans les secteurs porteurs.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: GraduationCap,
      title: "Éducation",
      description: "Garantir une éducation de qualité gratuite pour tous, avec des enseignants mieux formés et mieux payés.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Heart,
      title: "Santé",
      description: "Assurer l'accès universel aux soins de santé avec des hôpitaux modernes dans chaque région.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Sprout,
      title: "Agriculture & Environnement",
      description: "Soutenir nos agriculteurs et protéger notre environnement pour les générations futures.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Shield,
      title: "Sécurité & Justice",
      description: "Renforcer l'État de droit avec une justice indépendante et une police de proximité efficace.",
      color: "bg-primary/10 text-primary",
    },
  ];

  const simandouPillarsData = [
    {
      image: pilier1,
      title: "1. Agriculture, Industrie Alimentaire & Commerce",
      description: "Développement d'infrastructures modernes incluant le port en eaux profondes, le chemin de fer transguinéen et les routes d'accès stratégiques.",
    },
    {
      image: pilier2,
      title: "2. Éducation & Culture",
      description: "Transformation locale des ressources minières avec la création de zones industrielles et de raffineries pour maximiser la valeur ajoutée.",
    },
    {
      image: pilier3,
      title: "3. Infrastructures, Transports & Technologies",
      description: "Formation de 100 000 cadres guinéens dans les métiers miniers et industriels pour assurer l'autonomie technologique du pays.",
    },
    {
      image: pilier4,
      title: "4. Économie, Finance & Assurance",
      description: "Amélioration des conditions de vie des communautés locales avec des écoles, hôpitaux et programmes de développement durable.",
    },
    {
      image: pilier5,
      title: "5. Santé & Bien-être",
      description: "Utilisation des revenus miniers pour développer l'agriculture, le tourisme et les PME afin de créer une économie résiliente et diversifiée.",
    },
  ];

  return (
    <section id="programme" className="bg-muted/30 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">
            Notre Programme
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-secondary" />
          <p className="text-lg text-muted-foreground">
            Des engagements concrets pour transformer notre pays et améliorer la vie de tous les citoyens.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={index}
                className="group cursor-pointer border-2 transition-all hover:border-primary hover:shadow-lg"
              >
                <CardContent className="flex flex-col items-start space-y-4 p-6">
                  <div className={`rounded-xl p-4 ${program.color} transition-transform group-hover:scale-110`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground">
                    {program.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {program.description}
                  </p>
                  
                  <button className="font-medium text-primary transition-colors hover:text-primary/80">
                    En savoir plus →
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Projet Simandou 2040 */}
        <div className="mt-24">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h3 className="mb-4 text-3xl font-extrabold uppercase text-foreground lg:text-4xl">
              LES 5 PILIERS DU PROJET SIMANDOU 2040
            </h3>
            <div className="mx-auto mb-6 h-1 w-20 bg-primary" />
            <p className="text-lg text-muted-foreground">
              Les 5 piliers stratégiques pour faire de la Guinée une puissance minière et industrielle
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {simandouPillarsData.map((pillar, index) => (
              <Card 
                key={index}
                className="group border-2 border-primary/20 bg-card transition-all duration-300 hover:border-primary hover:shadow-2xl hover:scale-105 animate-fade-in overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedPillar(pillar)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h4 className="mb-3 text-lg font-bold text-primary group-hover:text-primary/80 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Modal pour visualiser l'image en grand */}
          <Dialog open={!!selectedPillar} onOpenChange={() => setSelectedPillar(null)}>
            <DialogContent className="max-w-4xl p-0">
              <DialogTitle className="sr-only">
                {selectedPillar?.title || "Pilier"}
              </DialogTitle>
              {selectedPillar && (
                <div className="relative">
                  <button
                    onClick={() => setSelectedPillar(null)}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                    aria-label="Fermer"
                  >
                    <X size={24} />
                  </button>
                  <img
                    src={selectedPillar.image}
                    alt={selectedPillar.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  <div className="p-6 bg-card">
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {selectedPillar.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {selectedPillar.description}
                    </p>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
