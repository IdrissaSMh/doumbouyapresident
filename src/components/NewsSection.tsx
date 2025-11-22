import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      title: "L'Alliance Doumbouya Président organise sa convention nationale au siège de l'UFC",
      date: "20 Novembre 2025",
      excerpt: "L'Alliance Doumbouya Président (ADP) a tenu ce jeudi 20 novembre 2025 sa convention nationale au siège de l'Union des Forces du Changement (UFC), situé à Kipé Dadia. Placée sous la présidence de M. Aboubacar Sylla, leader de l'UFC et de l'ADP, la rencontre a mobilisé des représentants d'une trentaine de partis politiques, des organisations de la société civile et près d'une centaine de mouvements de soutien.",
      fullContent: `L'Alliance Doumbouya Président (ADP) a tenu ce jeudi 20 novembre 2025 sa convention nationale au siège de l'Union des Forces du Changement (UFC), situé à Kipé Dadia. Placée sous la présidence de M. Aboubacar Sylla, leader de l'UFC et de l'ADP, la rencontre a mobilisé des représentants d'une trentaine de partis politiques, des organisations de la société civile et près d'une centaine de mouvements de soutien.

Cette convention constitue une étape clé dans la mise en place d'une stratégie nationale en vue de l'élection présidentielle prévue pour le 28 décembre 2025.

Créée pour rassembler plusieurs forces politiques et sociales, l'ADP vise une mobilisation populaire « massive et structurée » autour de la candidature du président Mamadi Doumbouya. La diversité des organisations présentes traduit, selon les initiateurs, une volonté de bâtir un front politique et citoyen en faveur du Candidat de la Génération de la Modernité pour le Développement (GMD).

Dans son discours, le président de l'Alliance, M. Aboubacar Sylla, a souligné les enjeux de cette mobilisation nationale. Il a insisté sur la nécessité d'obtenir une victoire « claire, démocratique et incontestable » lors du scrutin présidentiel.

« Notre mission est de mobiliser, d'organiser et de rassembler le peuple guinéen autour de la candidature du président Mamadi Doumbouya. Nous devons unir nos forces, structurer notre action et multiplier les initiatives de proximité pour garantir la victoire le 28 décembre 2025 », a-t-il déclaré, dans une intervention chaleureusement applaudie.

Le Président de l'Alliance a également appelé les structures membres à renforcer leur présence sur l'ensemble du territoire, invitant à intensifier les actions de terrain.

Les travaux ont permis de réaffirmer la vision politique défendue par l'Alliance, dont la charte projette l'avènement d'une Guinée nouvelle à l'horizon 2040.

En clôturant la rencontre, le président de l'ADP a invité les militants à « faire de cette présidentielle un moment d'unité et de sursaut national », tout en rappelant que « la Guinée se trouve à un tournant décisif de son histoire ».`,
    },
    {
      title: "Formation officielle de l'Alliance Doumbouya Président",
      date: "Novembre 2025",
      excerpt: "Signature historique de l'accord entre les principales formations politiques guinéennes pour soutenir la candidature du Président Mamadi Doumbouya.",
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
