import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoAdp from "@/assets/logo-adp.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "LE CANDIDAT", href: "/candidat" },
    { label: "L'ALLIANCE", href: "/alliance" },
    { label: "LE PROGRAMME", href: "/programme" },
    { label: "LES COMMUNIQUÉS", href: "/communiques" },
    { label: "L'ACTUALITÉ", href: "/actualites" },
    { label: "ÉVÉNEMENTS", href: "/evenements" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 transition-opacity hover:opacity-80 cursor-pointer">
            <img 
              src={logoAdp} 
              alt="ADP Alliance Doumbouya Président" 
              className="h-12 w-12 object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold text-secondary sm:text-xl">DOUMBOUYA</span>
              <span className="text-lg font-bold text-primary sm:text-xl">PRÉSIDENT</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-semibold uppercase text-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="border-t border-border py-4 lg:hidden">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-semibold uppercase text-foreground transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
