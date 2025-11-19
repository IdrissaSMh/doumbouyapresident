import { MessageCircle, FileText, Users, Newspaper, Music } from "lucide-react";

const FloatingActions = () => {
  const actions = [
    { icon: MessageCircle, color: "bg-[#25D366] hover:bg-[#128C7E]", label: "WhatsApp", link: "#whatsapp" },
    { icon: FileText, color: "bg-[#8B6914] hover:bg-[#6B4E11]", label: "Documents", link: "#documents" },
    { icon: Users, color: "bg-[#A62A2A] hover:bg-[#8B1F1F]", label: "Rejoindre", link: "#rejoindre" },
    { icon: Newspaper, color: "bg-[#C53030] hover:bg-[#9B2C2C]", label: "Actualités", link: "#actualites" },
    { icon: Music, color: "bg-[#3B82F6] hover:bg-[#2563EB]", label: "Hymne", link: "#hymne" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <a
            key={index}
            href={action.link}
            className={`group flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 ${action.color}`}
            aria-label={action.label}
          >
            <Icon className="h-6 w-6 text-white" />
          </a>
        );
      })}
    </div>
  );
};

export default FloatingActions;
