import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { X } from "lucide-react";
import infrastructure1 from "@/assets/infrastructure-1.jpeg";
import infrastructure2 from "@/assets/infrastructure-2.jpg";
import visiteChantier from "@/assets/visite-chantier.jpeg";
import route1 from "@/assets/route-1.jpeg";
import route2 from "@/assets/route-2.jpeg";

type Category = "all" | "infrastructure" | "events" | "diplomacy";

interface GalleryItem {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
  date: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Échangeur Autoroutier Conakry",
    category: "infrastructure",
    image: infrastructure1,
    description: "Infrastructure routière moderne avec échangeur autoroutier au cœur de Conakry, améliorant la fluidité du trafic",
    date: "2024"
  },
  {
    id: 2,
    title: "Échangeur Moderne de Conakry",
    category: "infrastructure",
    image: infrastructure2,
    description: "Construction d'un échangeur autoroutier multi-niveaux pour désengorger le trafic urbain",
    date: "2024"
  },
  {
    id: 3,
    title: "Visite de Chantier Présidentielle",
    category: "events",
    image: visiteChantier,
    description: "Le Président Mamadi Doumbouya en visite d'inspection sur les chantiers de développement national",
    date: "2024"
  },
  {
    id: 4,
    title: "Réhabilitation des Routes Urbaines",
    category: "infrastructure",
    image: route1,
    description: "Travaux de réfection et modernisation des voies urbaines pour améliorer la mobilité",
    date: "2024"
  },
  {
    id: 5,
    title: "Construction de Routes Modernes",
    category: "infrastructure",
    image: route2,
    description: "Chantier de construction routière avec équipements modernes pour des infrastructures durables",
    date: "2024"
  },
  {
    id: 6,
    title: "Autoroute Conakry-Kindia",
    category: "infrastructure",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    description: "Construction de l'autoroute moderne reliant Conakry à Kindia, facilitant le commerce et les déplacements",
    date: "2023"
  },
  {
    id: 7,
    title: "Centrale Électrique de Souapiti",
    category: "infrastructure",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
    description: "Barrage hydroélectrique de Souapiti pour l'autonomie énergétique de la Guinée",
    date: "2024"
  },
  {
    id: 8,
    title: "Hôpital National de Référence",
    category: "infrastructure",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    description: "Réhabilitation et modernisation des infrastructures hospitalières",
    date: "2023"
  },
  {
    id: 9,
    title: "Assises Nationales",
    category: "events",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    description: "Organisation des Assises Nationales pour la réconciliation et l'unité",
    date: "2022"
  },
  {
    id: 10,
    title: "Cérémonie d'Investiture",
    category: "events",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
    description: "Cérémonie officielle d'investiture du Président de la République",
    date: "2021"
  },
  {
    id: 11,
    title: "Fête de l'Indépendance 2024",
    category: "events",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&h=600&fit=crop",
    description: "Célébration du 63ème anniversaire de l'indépendance de la Guinée",
    date: "2024"
  },
  {
    id: 12,
    title: "Sommet Union Africaine",
    category: "diplomacy",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=600&fit=crop",
    description: "Participation au Sommet de l'Union Africaine à Addis-Abeba",
    date: "2024"
  },
  {
    id: 13,
    title: "Rencontre avec le Président Sénégalais",
    category: "diplomacy",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
    description: "Entretien bilatéral pour renforcer les relations Guinée-Sénégal",
    date: "2023"
  },
  {
    id: 14,
    title: "Visite d'État en Côte d'Ivoire",
    category: "diplomacy",
    image: "https://images.unsplash.com/photo-1505778276668-26b3ff7af103?w=800&h=600&fit=crop",
    description: "Mission officielle pour le projet d'interconnexion électrique",
    date: "2023"
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

        {/* Grille de photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal pour voir l'image en grand */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0">
            <DialogTitle className="sr-only">
              {selectedImage?.title || "Image"}
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
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="p-6 bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      {selectedImage.title}
                    </h3>
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