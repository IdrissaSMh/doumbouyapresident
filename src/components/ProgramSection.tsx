import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Briefcase, Sprout, Shield } from "lucide-react";

const ProgramSection = () => {
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
      </div>
    </section>
  );
};

export default ProgramSection;
