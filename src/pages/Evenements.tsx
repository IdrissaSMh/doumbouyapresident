import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, History } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import alliance1 from "@/assets/alliance-1.jpg";
import alliance2 from "@/assets/alliance-2.jpg";
import alliance5 from "@/assets/alliance-5.jpg";
import alliance6 from "@/assets/alliance-6.jpg";
import alliance8 from "@/assets/alliance-8.jpg";
import alliance10 from "@/assets/alliance-10.jpg";
import alliance11 from "@/assets/alliance-11.jpg";
import alliance14 from "@/assets/alliance-14.jpg";
import alliance16 from "@/assets/alliance-16.jpg";
import alliance18 from "@/assets/alliance-18.jpg";

const Evenements = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pastEvents = [
    {
      title: "Formation de l'Alliance Doumbouya Président",
      date: "Octobre 2025",
      description: "Signature historique de l'accord portant création de l'Alliance Doumbouya Président entre les principales formations politiques du pays.",
      images: [alliance1, alliance2, alliance5],
    },
    {
      title: "Réunions stratégiques de coordination",
      date: "Novembre 2025",
      description: "Séries de rencontres entre les leaders des différentes structures alliées pour coordonner les actions et la stratégie électorale.",
      images: [alliance6, alliance8, alliance10],
    },
    {
      title: "Mobilisation et sensibilisation",
      date: "Novembre 2025",
      description: "Campagnes de sensibilisation et de mobilisation à travers différentes préfectures pour rassembler les militants autour du projet commun.",
      images: [alliance11, alliance14, alliance16, alliance18],
    },
  ];

  const events = [
    {
      date: "Jeudi 20 Novembre 2025",
      time: "9 heures",
      title: "Convention de l'Alliance Doumbouya Président",
      location: "Kipé Dadia – C/Ratoma",
      description: "Lancement officiel des activités de l'Alliance",
    },
    {
      date: "Samedi 22 Novembre 2025",
      time: "À confirmer",
      title: "Réunion stratégique de planification de la Campagne électorale",
      location: "Siège de l'Alliance",
      description: "Planification et coordination des activités de campagne",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-extrabold uppercase text-foreground lg:text-6xl">
                Événements à venir
              </h1>
              <div className="mx-auto mb-8 h-1 w-20 bg-primary" />
              <p className="text-lg text-muted-foreground">
                Retrouvez tous les événements importants de l'Alliance Doumbouya Président
              </p>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl space-y-8">
              {events.map((event, index) => (
                <Card
                  key={index}
                  className="border-2 transition-all hover:border-primary hover:shadow-xl"
                >
                  <CardContent className="p-8">
                    <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                      {/* Date Badge */}
                      <div className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-6 text-center md:min-w-[200px]">
                        <Calendar className="mb-3 h-10 w-10 text-primary" />
                        <p className="text-sm font-semibold uppercase text-muted-foreground">
                          Date
                        </p>
                        <p className="mt-2 text-lg font-bold text-foreground">
                          {event.date}
                        </p>
                        <div className="mt-3 flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-5 w-5" />
                          <span className="font-medium">{event.time}</span>
                        </div>
                      </div>

                      {/* Event Details */}
                      <div className="flex flex-col justify-center space-y-4">
                        <h3 className="text-2xl font-bold text-foreground">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground">{event.description}</p>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-5 w-5 text-primary" />
                          <span className="font-medium">{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              {/* Section Header */}
              <div className="mb-16 text-center">
                <div className="mb-4 flex items-center justify-center gap-3">
                  <History className="h-10 w-10 text-secondary" />
                  <h2 className="text-4xl font-extrabold uppercase text-foreground lg:text-5xl">
                    Événements Passés
                  </h2>
                </div>
                <div className="mx-auto mb-6 h-1 w-20 bg-secondary" />
                <p className="text-lg text-muted-foreground">
                  Retour sur les moments clés qui ont marqué l'histoire de l'Alliance
                </p>
              </div>

              {/* Past Events Timeline */}
              <div className="space-y-12">
                {pastEvents.map((event, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden border-2 transition-all hover:border-secondary hover:shadow-xl"
                  >
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <div className="mb-2 inline-block rounded-full bg-secondary/10 px-4 py-1">
                          <span className="text-sm font-bold text-secondary">
                            {event.date}
                          </span>
                        </div>
                        <h3 className="mb-3 text-2xl font-bold text-foreground">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {event.description}
                        </p>
                      </div>

                      {/* Event Images */}
                      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                        {event.images.map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg transition-all hover:scale-105 hover:shadow-lg"
                            onClick={() => setSelectedImage(image)}
                          >
                            <img
                              src={image}
                              alt={`${event.title} - Photo ${imgIndex + 1}`}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Image Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-7xl w-[95vw] p-0 bg-black/95 border-none">
            {selectedImage && (
              <div className="relative flex items-center justify-center min-h-[50vh] max-h-[85vh] p-8">
                <img
                  src={selectedImage}
                  alt="Événement"
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Evenements;
