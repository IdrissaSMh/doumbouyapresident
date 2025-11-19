import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Briefcase, Sprout, Shield } from "lucide-react";
import pilier1 from "@/assets/pilier-1.png";
import pilier2 from "@/assets/pilier-2.png";
import pilier3 from "@/assets/pilier-3.png";
import pilier4 from "@/assets/pilier-4.png";
import pilier5 from "@/assets/pilier-5.png";

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

  const simandouPillars = [
    {
      title: "1. Infrastructure & Logistique",
      description: "Développement d'infrastructures modernes incluant le port en eaux profondes, le chemin de fer transguinéen et les routes d'accès stratégiques.",
    },
    {
      title: "2. Industrialisation",
      description: "Transformation locale des ressources minières avec la création de zones industrielles et de raffineries pour maximiser la valeur ajoutée.",
    },
    {
      title: "3. Capital Humain",
      description: "Formation de 100 000 cadres guinéens dans les métiers miniers et industriels pour assurer l'autonomie technologique du pays.",
    },
    {
      title: "4. Développement Local",
      description: "Amélioration des conditions de vie des communautés locales avec des écoles, hôpitaux et programmes de développement durable.",
    },
    {
      title: "5. Diversification Économique",
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
          {/* Images des 5 piliers */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            <div className="animate-fade-in">
              <img src={pilier1} alt="Pilier 1 - Agriculture" className="w-full h-auto rounded-lg shadow-lg transition-transform hover:scale-105" />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <img src={pilier2} alt="Pilier 2 - Éducation" className="w-full h-auto rounded-lg shadow-lg transition-transform hover:scale-105" />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <img src={pilier3} alt="Pilier 3 - Infrastructures" className="w-full h-auto rounded-lg shadow-lg transition-transform hover:scale-105" />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <img src={pilier4} alt="Pilier 4 - Économie" className="w-full h-auto rounded-lg shadow-lg transition-transform hover:scale-105" />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <img src={pilier5} alt="Pilier 5 - Santé" className="w-full h-auto rounded-lg shadow-lg transition-transform hover:scale-105" />
            </div>
          </div>

          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h3 className="mb-4 text-3xl font-extrabold uppercase text-foreground lg:text-4xl">
              LES 5 PILIERS DU PROJET SIMANDOU 2040
            </h3>
            <div className="mx-auto mb-6 h-1 w-20 bg-primary" />
            <p className="text-lg text-muted-foreground">
              Les 5 piliers stratégiques pour faire de la Guinée une puissance minière et industrielle
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {simandouPillars.map((pillar, index) => (
              <Card
                key={index}
                className="border-2 border-primary/20 bg-card transition-all hover:border-primary hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <h4 className="mb-3 text-lg font-bold text-primary">
                    {pillar.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {pillar.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
