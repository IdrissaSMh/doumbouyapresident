import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { X, Play } from "lucide-react";
import infrastructure1 from "@/assets/infrastructure-1.jpeg";
import infrastructure2 from "@/assets/infrastructure-2.jpg";
import visiteChantier from "@/assets/visite-chantier.jpeg";
import route1 from "@/assets/route-1.jpeg";
import route2 from "@/assets/route-2.jpeg";

type Category = "all" | "infrastructure" | "events" | "diplomacy";
type MediaType = "image" | "video";

interface GalleryItem {
  id: number;
  title: string;
  category: Category;
  type: MediaType;
  image?: string;
  video?: string;
  thumbnail?: string;
  description: string;
  date: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Échangeur Autoroutier Conakry",
    category: "infrastructure",
    type: "image",
    image: infrastructure1,
    description: "Infrastructure routière moderne avec échangeur autoroutier au cœur de Conakry, améliorant la fluidité du trafic",
    date: "2024"
  },
  {
    id: 2,
    title: "Échangeur Moderne de Conakry",
    category: "infrastructure",
    type: "image",
    image: infrastructure2,
    description: "Construction d'un échangeur autoroutier multi-niveaux pour désengorger le trafic urbain",
    date: "2024"
  },
  {
    id: 3,
    title: "Visite de Chantier Présidentielle",
    category: "events",
    type: "image",
    image: visiteChantier,
    description: "Le Président Mamadi Doumbouya en visite d'inspection sur les chantiers de développement national",
    date: "2024"
  },
  {
    id: 4,
    title: "Réhabilitation des Routes Urbaines",
    category: "infrastructure",
    type: "image",
    image: route1,
    description: "Travaux de réfection et modernisation des voies urbaines pour améliorer la mobilité",
    date: "2024"
  },
  {
    id: 5,
    title: "Construction de Routes Modernes",
    category: "infrastructure",
    type: "image",
    image: route2,
    description: "Chantier de construction routière avec équipements modernes pour des infrastructures durables",
    date: "2024"
  },
  {
    id: 6,
    title: "Plan Simandou 2040",
    category: "infrastructure",
    type: "video",
    video: "/videos/simandou-2040.mp4",
    thumbnail: infrastructure1,
    description: "Présentation complète du projet Simandou 2040 pour la transformation des ressources nationales de la Guinée",
    date: "2024"
  },
  {
    id: 7,
    title: "Inauguration du Pont de Tanènè",
    category: "events",
    type: "video",
    video: "/videos/pont-tanene-inauguration.mp4",
    thumbnail: infrastructure2,
    description: "Cérémonie d'inauguration du pont unique à péage et pesage de Tanènè, infrastructure moderne pour le développement",
    date: "2024"
  },
  {
    id: 8,
    title: "Doumbouya inaugure le Pont de Tanènè",
    category: "events",
    type: "video",
    video: "/videos/pont-tanene-doumbouya.mp4",
    thumbnail: visiteChantier,
    description: "Le Président Mamadi Doumbouya procède à l'inauguration officielle du pont à péage de Tanènè",
    date: "2024"
  }
];

const categories = [
  { value: "all" as Category, label: "Toutes" },
  { value: "infrastructure" as Category, label: "Infrastructures" },
  { value: "events" as Category, label: "Événements Officiels" },
  { value: "diplomacy" as Category, label: "Rencontres Diplomatiques" }
];

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="galerie" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Les réalisations de Président Mamadi Doumbouya
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez en images les actions concrètes et les réalisations majeures 
            du Président Mamadi DOUMBOUYA pour la transformation de la Guinée
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value)}
              className="rounded-full px-6"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Grille de médias (photos et vidéos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg"
              onClick={() => setSelectedImage(item)}
            >
              {item.type === "video" ? (
                <div className="relative w-full h-64 bg-black">
                  <video
                    src={item.video}
                    className="w-full h-full object-cover"
                    muted
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center animate-pulse">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    VIDÉO
                  </div>
                </div>
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal pour voir le média en grand */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0">
            <DialogTitle className="sr-only">
              {selectedImage?.title || "Média"}
            </DialogTitle>
            {selectedImage && (
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                  aria-label="Fermer"
                >
                  <X size={24} />
                </button>
                {selectedImage.type === "video" ? (
                  <video
                    src={selectedImage.video}
                    controls
                    autoPlay
                    className="w-full h-auto max-h-[80vh] bg-black"
                  >
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                ) : (
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                )}
                <div className="p-6 bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold text-foreground">
                        {selectedImage.title}
                      </h3>
                      {selectedImage.type === "video" && (
                        <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                          VIDÉO
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {selectedImage.date}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;