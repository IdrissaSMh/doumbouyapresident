import { Card } from "@/components/ui/card";
import candidateImage from "@/assets/candidate-hero.jpg";

const AboutSection = () => {
  return (
    <section id="candidat" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <Card className="overflow-hidden">
              <img
                src={candidateImage}
                alt="Mamadi Doumbouya, Candidat Président"
                className="h-full w-full object-cover"
              />
            </Card>
          </div>

          {/* Content */}
          <div className="order-1 flex flex-col justify-center space-y-6 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold uppercase text-foreground lg:text-5xl">
                Le Candidat
              </h2>
              <div className="h-1 w-20 bg-secondary" />
            </div>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                <strong>Mamadi DOUMBOUYA</strong>, né le 05 Décembre 1984 à Kankan, est un expert en Sécurité qui depuis le 05 Septembre 2021, a pris ses responsabilités pour assurer les destinées du pays alors secoué par les gabegies financières et le clientélisme.
              </p>
              <p>
                A sa prise de pouvoir en 2021, le Président de la République alors Colonel de son état, a promis de rendre à la Guinée et au peuple guinéen sa dignité qu'elle avait perdue depuis 2011 par le biais de certains cadres insoucieux de l'avenir et du développement de notre pays.
              </p>
              <p>
                Durant sa gestion pendant ces quatre (4) dernières années, le Président de la République Mamadi DOUMBOUYA a posé des actes forts dans plusieurs domaines notamment :
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>La réconciliation du peuple avec son histoire à travers des concertations et des assises nationales organisées</li>
                <li>La réhabilitation des victimes des manifestations du régime déchu</li>
                <li>La mise en place de la Cour de Répression Économique et Financière (CRIEF)</li>
                <li>La mise en place d'un Bureau de Suivi des Propriétés Présidentielles (BSPP) pour la réalisation des infrastructures socioéconomiques de bases</li>
                <li>La relance des Programmes fondamentaux d'électrification des zones urbaines et de l'interconnectivité entre la Guinée-Côte d'Ivoire, Guinée-Sénégal</li>
                <li>La réintégration de la Guinée dans le concert des Nations à travers l'envoi des Missions diplomatiques dans les pays d'accréditations</li>
              </ul>
              <p>
                Fort de tous ces acquis, son Excellence Monsieur le Président de la République en liant la parole à l'acte pour un retour à l'ordre constitutionnel a doté la Guinée d'une nouvelle Constitution dont le peuple de Guinée a été acteur dans tout le processus depuis ses consultations à son adoption.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="space-y-2 text-center">
                <div className="text-3xl font-bold text-primary">2021</div>
                <div className="text-sm text-muted-foreground">Prise de pouvoir</div>
              </div>
              <div className="space-y-2 text-center">
                <div className="text-3xl font-bold text-secondary">4 ans</div>
                <div className="text-sm text-muted-foreground">De réalisations</div>
              </div>
              <div className="space-y-2 text-center">
                <div className="text-3xl font-bold text-accent">1</div>
                <div className="text-sm text-muted-foreground">Nouvelle Constitution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
