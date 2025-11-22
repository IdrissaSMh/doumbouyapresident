import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      title: "Formation officielle de l'Alliance Doumbouya Président",
      date: "Novembre 2025",
      excerpt: "Signature historique de l'accord entre les principales formations politiques guinéennes pour soutenir la candidature du Président Mamadi Doumbouya.",
    },
    {
      title: "Convention de l'Alliance prévue le 20 Novembre 2025",
      date: "20 Novembre 2025",
      excerpt: "Lancement officiel des activités de l'Alliance à Kipé Dadia, Commune de Ratoma. Un moment décisif pour la mobilisation nationale.",
    },
    {
      title: "Mobilisation massive des structures alliées",
      date: "Novembre 2025",
      excerpt: "Les formations politiques et mouvements de l'Alliance intensifient la mobilisation à travers tout le pays en vue de l'élection présidentielle.",
    },
  ];

  return (
    <section id="actualites" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">
            Actualités
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-secondary" />
          <p className="text-lg text-muted-foreground">
            Suivez nos dernières actions et événements sur le terrain.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 transition-all hover:border-primary hover:shadow-xl"
            >
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="font-semibold">{item.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
