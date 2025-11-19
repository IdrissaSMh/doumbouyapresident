import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Scale, Users2, CheckCircle2 } from "lucide-react";
import presidentAllianceImg from "@/assets/president-alliance.jpg";

const AllianceSection = () => {
  const visionPoints = [
    "Une souveraineté nationale renforcée",
    "La prospérité partagée et le développement durable",
    "La justice et l'état de droit",
    "L'unité nationale et la réconciliation",
  ];

  const structures = [
    "Union des Forces du Changement",
    "Parti Démocratique de Guinée – Rassemblement Démocratique Africain",
    "ADC-BOC",
  ];

  const achievements = [
    {
      period: "2006",
      title: "Ministre de l'Information et de la Communication",
      items: [
        "Mise en opération de la RTG KOLOMA",
        "Libéralisation des ondes et signature des premiers agréments de presse",
        "Signature des Conventions d'Établissement de RFI et BBC",
      ],
    },
    {
      period: "2010",
      title: "Ministre de la Communication et Porte-parole du gouvernement",
      items: ["Sous la transition du Président Sékouba KONATE"],
    },
    {
      period: "2018",
      title: "Ministre d'État, Ministre des Transports",
      items: [
        "Relance du transport urbain avec le train 'CONAKRY EXPRESS' et les Bus",
        "Installation des panneaux de signalisation et feux de circulation à Conakry",
        "Modernisation du port de Conakry (concession ALBAYRAQ)",
        "Création de l'Agence Guinéenne de Sécurité Routière (AGUISER)",
        "Création de l'Agence Guinéenne de Navigation fluviaux aérienne",
        "Rénovation de l'aérogare régionale de Boké",
        "Modernisation du service de Météo",
        "Réforme du code de la route et de l'aviation civile",
      ],
    },
    {
      period: "2021",
      title: "Ministre de l'Enseignement Supérieur et de la Recherche Scientifique",
      items: [
        "Réformes structurelles et institutionnelles dans les Institutions d'Enseignement Supérieur",
      ],
    },
  ];

  return (
    <section id="alliance" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold uppercase text-foreground lg:text-5xl">
            L'Alliance
          </h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-secondary" />
        </div>

        {/* Mission et Vision */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <Card className="border-2 transition-all hover:border-primary hover:shadow-lg">
            <CardContent className="p-8">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">Mission</h3>
              <p className="text-muted-foreground">
                La mission de l'ADP est de mobiliser, organiser et rallier le peuple guinéen autour de la candidature 
                et du projet de société du Président Mamadi Doumbouya, afin d'assurer sa victoire à l'élection 
                présidentielle du 28 décembre 2025.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 transition-all hover:border-primary hover:shadow-lg">
            <CardContent className="p-8">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">Vision</h3>
              <p className="mb-4 text-muted-foreground">
                La vision de l'ADP est de voir émerger une "Guinée Nouvelle" à l'horizon 2040, caractérisée par :
              </p>
              <ul className="space-y-2">
                {visionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Structures Alliées */}
        <div className="mb-20">
          <h3 className="mb-8 text-center text-3xl font-bold text-foreground">
            Structures Alliées
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {structures.map((structure, index) => (
              <Card key={index} className="border-2 transition-all hover:border-accent hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users2 className="mx-auto mb-3 h-10 w-10 text-accent" />
                  <p className="font-semibold text-foreground">{structure}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Président de l'Alliance */}
        <div className="bg-muted/30 rounded-lg p-8 lg:p-12">
          <h3 className="mb-12 text-center text-3xl font-bold text-foreground lg:text-4xl">
            Le Président de l'Alliance
          </h3>
          
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Photo et Intro */}
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-6 overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={presidentAllianceImg}
                    alt="Aboubacar SYLLA"
                    className="h-auto w-full max-w-md object-cover"
                  />
                </div>
                <h4 className="mb-2 text-3xl font-bold text-foreground">
                  Aboubacar SYLLA
                </h4>
                <p className="mb-4 text-xl font-semibold text-primary">
                  Ingénieur de Mines
                </p>
                <p className="text-lg text-muted-foreground">
                  Homme d'État guinéen et Président fondateur du Parti Union des Forces du Changement (UFC) depuis 2009
                </p>
              </div>

              {/* Biographie */}
              <div>
                <h5 className="mb-4 text-xl font-bold text-foreground">Parcours Remarquable</h5>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Il incarne et continue d'incarner le parcours remarquable d'un Homme d'État de la vie politique et 
                  administrative à travers un parcours exceptionnellement remarquable depuis 1981 à nos jours. Son 
                  parcours et son bilan illustrent la transformation de la Gouvernance en Guinée passant de technocrate 
                  hors pair, à un ministre réformateur puis en acteur politique le tout orienté vers le service public 
                  et l'engagement politique.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Il débute sa carrière dans le secteur public en 1981 comme chef de division au Ministère de l'Industrie.
                </p>
              </div>
            </div>

            {/* Parcours Ministériel */}
            <div className="mb-12">
              <h5 className="mb-6 text-2xl font-bold text-foreground">Parcours Ministériel et Bilan</h5>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="rounded-full bg-primary px-4 py-1 text-sm font-bold text-primary-foreground">
                          {achievement.period}
                        </span>
                        <h6 className="text-lg font-bold text-foreground">{achievement.title}</h6>
                      </div>
                      <ul className="space-y-2">
                        {achievement.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Scale className="mt-1 h-5 w-5 shrink-0 text-primary" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Activités Privées */}
            <Card className="mb-8 border-2 border-accent/20">
              <CardContent className="p-8">
                <h5 className="mb-4 text-xl font-bold text-foreground">Activités dans le Secteur Privé</h5>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Fort d'une expérience administrative et politique, le Président Aboubacar SYLLA a d'abord bâti sa 
                  réputation dans le privé au même moment qu'il gravissait toutes les étapes au sein de l'administration publique.
                </p>
                <p className="mb-4 text-muted-foreground">En évoluant dans le privé, il a pu créer des emplois à travers :</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-muted-foreground">
                      La création du groupe de presse (l'Indépendant, le Démocrate, l'Indépendant Plus, le Républicain, 
                      le Nimba, le magazine Carrefour Magazine et l'Imprimerie du sud) en 1992
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-muted-foreground">
                      La création du Complexe Scolaire SYLLA LAMINE composé de trois établissements scolaires en 1999 à Conakry
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Projet de Société */}
            <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent">
              <CardContent className="p-8 text-center">
                <h5 className="mb-4 text-2xl font-bold text-foreground">
                  Projet de Société pour une Guinée Meilleure
                </h5>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Soucieux de l'avenir de la Guinée et du devenir des guinéens, le Président Aboubacar SYLLA ambitionne 
                  de promouvoir à travers l'UFC, le développement en faisant des femmes et des jeunes le socle du 
                  véritable changement qu'aspire profondément la nation Guinéenne.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllianceSection;