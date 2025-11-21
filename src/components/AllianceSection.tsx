import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Scale, Users2, CheckCircle2 } from "lucide-react";
import presidentAllianceImg from "@/assets/president-alliance.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import alliance1 from "@/assets/alliance-1.jpg";
import alliance2 from "@/assets/alliance-2.jpg";
import alliance3 from "@/assets/alliance-3.jpg";
import alliance4 from "@/assets/alliance-4.jpg";
import alliance5 from "@/assets/alliance-5.jpg";
import alliance6 from "@/assets/alliance-6.jpg";
import alliance7 from "@/assets/alliance-7.jpg";
import alliance8 from "@/assets/alliance-8.jpg";
import alliance9 from "@/assets/alliance-9.jpg";
import alliance10 from "@/assets/alliance-10.jpg";
import alliance11 from "@/assets/alliance-11.jpg";
import alliance12 from "@/assets/alliance-12.jpg";
import alliance13 from "@/assets/alliance-13.jpg";
import alliance14 from "@/assets/alliance-14.jpg";
import alliance15 from "@/assets/alliance-15.jpg";
import alliance16 from "@/assets/alliance-16.jpg";
import alliance17 from "@/assets/alliance-17.jpg";
import alliance18 from "@/assets/alliance-18.jpg";
import alliance19 from "@/assets/alliance-19.jpg";
import alliance20 from "@/assets/alliance-20.jpg";

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

        {/* Galerie Photo */}
        <div className="mb-20">
          <h3 className="mb-12 text-center text-3xl font-bold text-foreground lg:text-4xl">
            Galerie Photo de l'Alliance
          </h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto w-full max-w-6xl"
          >
            <CarouselContent>
              {[
                alliance1,
                alliance2,
                alliance3,
                alliance4,
                alliance5,
                alliance6,
                alliance7,
                alliance8,
                alliance9,
                alliance10,
                alliance11,
                alliance12,
                alliance13,
                alliance14,
                alliance15,
                alliance16,
                alliance17,
                alliance18,
                alliance19,
                alliance20,
              ].map((img, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="overflow-hidden border-2 transition-all hover:shadow-xl hover:scale-105">
                      <CardContent className="p-0">
                        <img
                          src={img}
                          alt={`Alliance ${index + 1}`}
                          className="aspect-square w-full object-cover transition-transform duration-300"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
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

        {/* Liste des formations politiques et mouvements */}
        <div className="mt-20">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h3 className="mb-4 text-3xl font-extrabold uppercase text-foreground lg:text-4xl">
              LA LISTE DES FORMATIONS POLITIQUES ET MOUVEMENTS
            </h3>
            <div className="mx-auto mb-6 h-1 w-20 bg-primary" />
          </div>

          {/* Partis Politiques */}
          <div className="mb-16">
            <h4 className="mb-6 text-2xl font-bold text-primary uppercase">PARTIS POLITIQUES</h4>
            <div className="overflow-x-auto rounded-lg border border-border shadow-lg">
              <table className="w-full bg-card">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">N°</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">FORMATIONS POLITIQUES</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">SIGLE</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">NOMS DES LEADERS</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">CONTACTS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 text-sm">1</td>
                    <td className="px-4 py-3 text-sm font-medium">Union des Forces du Changement</td>
                    <td className="px-4 py-3 text-sm">UFC</td>
                    <td className="px-4 py-3 text-sm">Aboubacar SYLLA</td>
                    <td className="px-4 py-3 text-sm">622 16 64 69</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 text-sm">2</td>
                    <td className="px-4 py-3 text-sm font-medium">Parti Démocratique de Guinée</td>
                    <td className="px-4 py-3 text-sm">PDG-RDA</td>
                    <td className="px-4 py-3 text-sm">Mangamory BANGOURA</td>
                    <td className="px-4 py-3 text-sm">621 44 06 87</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 text-sm">3</td>
                    <td className="px-4 py-3 text-sm font-medium">Alternance Démocratique pour le Changement-Bloc de l'Opposition Constructive</td>
                    <td className="px-4 py-3 text-sm">ADC-BOC</td>
                    <td className="px-4 py-3 text-sm">Ibrahima Sory DIALLO</td>
                    <td className="px-4 py-3 text-sm">622 13 97 37</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 text-sm">4</td>
                    <td className="px-4 py-3 text-sm font-medium">Parti Républicain et de la Renaissance</td>
                    <td className="px-4 py-3 text-sm">PRR</td>
                    <td className="px-4 py-3 text-sm">-</td>
                    <td className="px-4 py-3 text-sm">-</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 text-sm">5</td>
                    <td className="px-4 py-3 text-sm font-medium">Union Nationale Démocratique de Guinée</td>
                    <td className="px-4 py-3 text-sm">UNDG</td>
                    <td className="px-4 py-3 text-sm">Dr Younoussa KOITA</td>
                    <td className="px-4 py-3 text-sm">622 20 10 24</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 text-sm">6</td>
                    <td className="px-4 py-3 text-sm font-medium">Parti de l'Union pour le Développement Intégré de la Guinée</td>
                    <td className="px-4 py-3 text-sm">PUDIG</td>
                    <td className="px-4 py-3 text-sm">Dr Souleymane BANGOURA</td>
                    <td className="px-4 py-3 text-sm">625 73 97 47</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 text-sm">7</td>
                    <td className="px-4 py-3 text-sm font-medium">Nouvel Avenir de Guinée</td>
                    <td className="px-4 py-3 text-sm">NAG</td>
                    <td className="px-4 py-3 text-sm">Alsény Kolia SYLLA</td>
                    <td className="px-4 py-3 text-sm">628 54 68 69</td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 text-sm">8</td>
                    <td className="px-4 py-3 text-sm font-medium">Union des Forces Nouvelles de Guinée</td>
                    <td className="px-4 py-3 text-sm">UFNG</td>
                    <td className="px-4 py-3 text-sm">Aboubacar Sénateur DIALLO</td>
                    <td className="px-4 py-3 text-sm">622 42 48 50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mouvements et Associations */}
          <div>
            <h4 className="mb-6 text-2xl font-bold text-secondary uppercase">MOUVEMENTS ET ASSOCIATIONS</h4>
            <div className="overflow-x-auto rounded-lg border border-border shadow-lg">
              <table className="w-full bg-card">
                <thead className="bg-secondary text-secondary-foreground">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">N°</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">MOUVEMENTS</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">SIGLE</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">NOMS DES LEADERS</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">CONTACTS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { n: 1, nom: "Centre de Réflexions pour le Développement de Macenta", sigle: "CREDEM", leader: "Alain BILIVOGUI", contact: "627 80 80 58" },
                    { n: 2, nom: "Mouvement Guinée Unie", sigle: "-", leader: "-", contact: "-" },
                    { n: 3, nom: "Coordination des Jeunes Diplomates", sigle: "CJD", leader: "Mohamed KAMANO", contact: "627 22 74 56" },
                    { n: 4, nom: "Guinée Wakhonfé pour le progrès", sigle: "GWP", leader: "Mohamed Lamine BANGOURA", contact: "621 38 77 17" },
                    { n: 5, nom: "Mouvement des Patriotes de Guinée", sigle: "MPG", leader: "Noumandjan TRAORE", contact: "628 59 34 76" },
                    { n: 6, nom: "Alliance pour la Bonne Cause", sigle: "ABG", leader: "Mamady TERE", contact: "628 18 77 89" },
                    { n: 7, nom: "Coalition des sèrès et associations pour le Développement", sigle: "COSADEN", leader: "Sekouba CONDE", contact: "628 81 70 21" },
                    { n: 8, nom: "Bloc des Mouvements", sigle: "BM", leader: "Pierre LENO", contact: "612 54 54 19" },
                    { n: 9, nom: "Groupe Madame SOUMAH", sigle: "-", leader: "Marie José BANGOURA", contact: "629 33 95 82" },
                    { n: 10, nom: "Président Mamadi DOUMBOUYA Soboty", sigle: "-", leader: "Marissa BANGOURA", contact: "622 21 13 40" },
                    { n: 11, nom: "Groupe Kakimbo KIPE", sigle: "-", leader: "Mariame CISSE", contact: "628 18 55 88" },
                    { n: 12, nom: "Groupe Fatou BARRY", sigle: "-", leader: "Fatou BARRY", contact: "629 84 97 85" },
                    { n: 13, nom: "Groupe Baga Guinè", sigle: "-", leader: "Céline BANGOURA", contact: "627 49 87 38" },
                    { n: 14, nom: "Les Femmes Dynamiques", sigle: "-", leader: "Hadja Mariama ciré CAMARA", contact: "625 95 69 76" },
                    { n: 15, nom: "To Sogué Mamadi na non mah", sigle: "-", leader: "Mariame BANGOURA", contact: "621 57 54 19" },
                    { n: 16, nom: "Groupe Salé DIALLO", sigle: "-", leader: "Salématou DIALLO", contact: "625 03 80 13" },
                    { n: 17, nom: "Groupe M'Balia CAMARA", sigle: "-", leader: "M'Balia CAMARA", contact: "627 17 90 16" },
                    { n: 18, nom: "Groupe Tanti Fèntèhi", sigle: "-", leader: "Hadjiratou CAMARA", contact: "623 04 93 12" },
                    { n: 19, nom: "Groupe Cimembossiah", sigle: "-", leader: "Kadiatou BANGOURA", contact: "628 28 67 85" },
                    { n: 20, nom: "Groupe Langni Gnonwou", sigle: "-", leader: "Fatoumata NABE", contact: "612 32 56 81" },
                    { n: 21, nom: "LA Beauté", sigle: "-", leader: "M'Mah SYLLA", contact: "625 56 93 58" },
                    { n: 22, nom: "Agir pour le Développement Durable", sigle: "-", leader: "M'mah CISSE", contact: "621 09 95 30" },
                    { n: 23, nom: "Groupe Oumou Malick CAMARA", sigle: "-", leader: "Oumou Malick CAMARA", contact: "622 61 65 01" },
                    { n: 24, nom: "Les Femmes Leaders de Madina", sigle: "-", leader: "Fanta DIALLO", contact: "621 89 95 18" },
                    { n: 25, nom: "Groupe Rosaline THEA", sigle: "-", leader: "Rosaline THEA", contact: "620 42 10 58" },
                    { n: 26, nom: "Association des filles d'El hadj Aboubacar KEIRA", sigle: "-", leader: "Aicha CAMARA", contact: "620 61 67 96" },
                    { n: 27, nom: "Si c'est pas lui, c'est qui ?", sigle: "-", leader: "Marie AGNES", contact: "628 16 88 97" },
                    { n: 28, nom: "RATOMAFEE", sigle: "-", leader: "Aminata SAKHO", contact: "625 27 71 98" },
                    { n: 29, nom: "Coordination Dynamiques des guinéens pour le soutien des actions du chef de l'Etat", sigle: "-", leader: "Mamadou Saliou KEITA", contact: "629 77 45 71" },
                    { n: 30, nom: "Groupe Mafèrin KEITA", sigle: "-", leader: "Mafèrin KEITA", contact: "625 59 33 60" },
                    { n: 31, nom: "Groupe Foulématou CAMARA", sigle: "-", leader: "Foulématou CAMARA", contact: "625 48 94 65" },
                    { n: 32, nom: "Groupe Fatou BANGOURA", sigle: "-", leader: "Fatou BANGOURA", contact: "622 85 62 55" },
                    { n: 33, nom: "Groupe DG", sigle: "-", leader: "Doussou GUILAVOGUI", contact: "628 73 50 61" },
                    { n: 34, nom: "Groupe AMINATA CAMARA", sigle: "-", leader: "AMINATA CAMARA", contact: "628 05 86 17" },
                    { n: 35, nom: "Lumière de la République", sigle: "LDR", leader: "Seny CAMARA", contact: "624 50 08 43" },
                    { n: 36, nom: "Jeunes Leaders de Kipé", sigle: "JLK", leader: "Ibrahima Sory CONDE", contact: "626 27 92 09" },
                    { n: 37, nom: "Mouvement des Jeunes Patriotes la Refondation", sigle: "-", leader: "Aboubacar CONTE", contact: "612 93 76 48" },
                    { n: 38, nom: "Mouvement des Dynamiques de la BELLEVUE", sigle: "-", leader: "Mohamed Lamine Fodé BANGOURA", contact: "625 51 88 81" },
                    { n: 39, nom: "Base LENO", sigle: "-", leader: "Sanoussy KALABANE", contact: "626 11 74 26" },
                    { n: 40, nom: "Association Familly", sigle: "-", leader: "Mohamed Lamine CAMARA", contact: "611 72 01 52" },
                    { n: 41, nom: "Mouvement des Leaders Yimbayah", sigle: "-", leader: "Alsény CONTE", contact: "627 23 54 33" },
                    { n: 42, nom: "Wakilily KIPE", sigle: "-", leader: "Mabinty CAMARA", contact: "623 99 73 14" },
                    { n: 43, nom: "Femmes Leaders de Sambaya", sigle: "-", leader: "Mariama Sadjo BARRY", contact: "620 45 55 84" },
                    { n: 44, nom: "Taouya ma Fierté", sigle: "-", leader: "Fatou DOUMBOUYA", contact: "622 05 41 09" },
                    { n: 45, nom: "Etats-Unis de Ratoma", sigle: "-", leader: "Yaya KEITA", contact: "610 29 55 22" },
                    { n: 46, nom: "Mouvement Dabondy 2", sigle: "-", leader: "Alsény DIALLO", contact: "622 55 51 89" },
                    { n: 47, nom: "Groupe Fatou SOUMAH", sigle: "-", leader: "Fatou SOUMAH", contact: "622 97 34 93" },
                    { n: 48, nom: "Star Unie", sigle: "-", leader: "Djibril Gongoly SOUMAH", contact: "629 49 58 03" },
                    { n: 49, nom: "Banc Bleu", sigle: "-", leader: "Alphonse YOMBA", contact: "623 59 42 69" },
                    { n: 50, nom: "Base CASSIA", sigle: "-", leader: "Sékou CAMARA", contact: "625 21 43 47" },
                    { n: 51, nom: "Mouvement Sama de Yimbaya", sigle: "-", leader: "Sékou KABA", contact: "624 24 68 65" },
                    { n: 52, nom: "Mouvement Soleil de Sangoyah", sigle: "-", leader: "Ousmane SOUMAH", contact: "627 65 23 06" },
                    { n: 53, nom: "Femmes capables", sigle: "-", leader: "Aicha CAMARA", contact: "625 49 17 03" },
                    { n: 54, nom: "Base Tougoubougny", sigle: "-", leader: "Hamidou TRAORE", contact: "626 41 66 44" },
                    { n: 55, nom: "Tout TAOUYAH", sigle: "-", leader: "Hadja Gata SOUMAH", contact: "629 27 29 77" },
                    { n: 56, nom: "Mouvement TKC", sigle: "-", leader: "Kabinet KABA", contact: "611 13 43 37" },
                    { n: 57, nom: "Groupement Avaria", sigle: "-", leader: "Mamassa Avaria SOUMAH", contact: "622 63 55 98" },
                    { n: 58, nom: "Groupe Friperie", sigle: "-", leader: "M'Balou KABA", contact: "623 64 57 22" },
                    { n: 59, nom: "Doymbouya na non mah", sigle: "-", leader: "Oumar KABA", contact: "620 10 72 71" },
                    { n: 60, nom: "Mouvement Batomba wax", sigle: "-", leader: "Hadja Mariama Ciré CISSE", contact: "628 92 92 96" },
                    { n: 61, nom: "Mouvement Africof", sigle: "-", leader: "Mamassata SOUMAH", contact: "624 39 02 74" },
                    { n: 62, nom: "Mouvement des femmes Leaders de KIPE", sigle: "-", leader: "Hilal Bintou KEITA", contact: "622 39 57 02" },
                  ].map((item, idx) => (
                    <tr key={idx} className="hover:bg-muted/50 transition-colors">
                      <td className="px-4 py-3 text-sm">{item.n}</td>
                      <td className="px-4 py-3 text-sm font-medium">{item.nom}</td>
                      <td className="px-4 py-3 text-sm">{item.sigle}</td>
                      <td className="px-4 py-3 text-sm">{item.leader}</td>
                      <td className="px-4 py-3 text-sm">{item.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Contact et Événements */}
        <div className="mt-20">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h3 className="mb-4 text-3xl font-extrabold uppercase text-foreground lg:text-4xl">
              INFORMATIONS & CONTACT
            </h3>
            <div className="mx-auto mb-6 h-1 w-20 bg-primary" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Siège */}
            <Card className="border-2 transition-all hover:border-primary hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-primary/10">
                  <Users2 className="h-8 w-8 text-primary" />
                </div>
                <h4 className="mb-4 text-xl font-bold text-foreground">Siège de l'Alliance</h4>
                <p className="text-muted-foreground font-medium">
                  Kipé Dadia – C/Ratoma
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-2 transition-all hover:border-primary hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-secondary/10">
                  <Scale className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="mb-4 text-xl font-bold text-foreground">Contact</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p className="font-medium">+224 628 60 66 75</p>
                  <p className="font-medium">+224 624 37 21 24</p>
                  <p className="text-sm italic mt-4">E-mail : contact@adp-guinee.org</p>
                </div>
              </CardContent>
            </Card>

            {/* Événement à venir */}
            <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent transition-all hover:border-accent hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-accent/10">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                </div>
                <h4 className="mb-4 text-xl font-bold text-foreground">Événement à venir</h4>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-accent">Lancement des activités</p>
                  <p className="text-muted-foreground font-medium">Jeudi 20 Novembre 2025</p>
                  <p className="text-muted-foreground">À partir de 9h</p>
                  <p className="text-sm text-muted-foreground italic mt-2">Au siège de l'Alliance</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllianceSection;