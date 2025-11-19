import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommuniquesSection = () => {
  const communiques = [
    {
      title: "Déclaration sur la politique économique nationale",
      date: "18 Mars 2024",
      excerpt: "Notre vision pour une économie inclusive et prospère qui profite à tous les citoyens.",
    },
    {
      title: "Position sur la réforme de l'éducation",
      date: "12 Mars 2024",
      excerpt: "Nos propositions pour garantir un système éducatif de qualité accessible à tous.",
    },
    {
      title: "Communiqué sur la sécurité et la défense",
      date: "8 Mars 2024",
      excerpt: "Notre approche pour assurer la sécurité des citoyens et l'intégrité territoriale.",
    },
  ];

  return (
    <section id="communiques" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold uppercase text-foreground lg:text-5xl">
            Les Communiqués
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-secondary" />
          <p className="text-lg text-muted-foreground">
            Nos prises de position officielles sur les grands enjeux nationaux.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {communiques.map((item, index) => (
            <Card
              key={index}
              className="border-2 transition-all hover:border-primary hover:shadow-lg"
            >
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {item.excerpt}
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Télécharger
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommuniquesSection;
