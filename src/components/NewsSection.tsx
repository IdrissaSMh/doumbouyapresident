import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      title: "Grand meeting à Dakar : Plus de 50 000 personnes réunies",
      date: "15 Mars 2024",
      image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1000",
      excerpt: "Un succès historique qui démontre l'adhésion massive des citoyens à notre projet de société.",
    },
    {
      title: "Lancement du programme 'Jeunesse d'Avenir'",
      date: "10 Mars 2024",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000",
      excerpt: "Un plan ambitieux pour former et accompagner 100 000 jeunes vers l'emploi et l'entrepreneuriat.",
    },
    {
      title: "Rencontre avec les acteurs économiques",
      date: "5 Mars 2024",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000",
      excerpt: "Des échanges fructueux pour co-construire une économie prospère et inclusive.",
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
              className="group cursor-pointer overflow-hidden transition-all hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <CardContent className="space-y-3 p-6">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {item.excerpt}
                </p>
                
                <button className="font-medium text-primary transition-colors hover:text-primary/80">
                  Lire la suite →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
