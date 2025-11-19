import { MessageCircle, FileText, Users, Newspaper } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImpliquezVousDialog from "./ImpliquezVousDialog";

const FloatingActions = () => {
  const [isImpliquezVousOpen, setIsImpliquezVousOpen] = useState(false);
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open("https://wa.me/224628606675", "_blank");
  };

  const handleDocuments = () => {
    navigate("/communiques");
  };

  const handleRejoindre = () => {
    setIsImpliquezVousOpen(true);
  };

  const handleActualites = () => {
    navigate("/actualites");
  };

  const actions = [
    { icon: MessageCircle, color: "bg-[#25D366] hover:bg-[#128C7E]", label: "WhatsApp", onClick: handleWhatsApp },
    { icon: FileText, color: "bg-[#8B6914] hover:bg-[#6B4E11]", label: "Documents", onClick: handleDocuments },
    { icon: Users, color: "bg-[#A62A2A] hover:bg-[#8B1F1F]", label: "Rejoindre", onClick: handleRejoindre },
    { icon: Newspaper, color: "bg-[#C53030] hover:bg-[#9B2C2C]", label: "Actualités", onClick: handleActualites },
  ];

  return (
    <>
      <div className="fixed bottom-20 right-6 z-40 flex flex-col space-y-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              onClick={action.onClick}
              className={`group flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 ${action.color}`}
              aria-label={action.label}
            >
              <Icon className="h-6 w-6 text-white" />
            </button>
          );
        })}
      </div>
      <ImpliquezVousDialog open={isImpliquezVousOpen} onOpenChange={setIsImpliquezVousOpen} />
    </>
  );
};

export default FloatingActions;
