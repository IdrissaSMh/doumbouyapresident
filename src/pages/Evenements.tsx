import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const Evenements = () => {
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
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Evenements;
