import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Chi Siamo", path: "/chi-siamo" },
    { name: "Servizi", path: "/servizi" },
    { name: "Contatti", path: "/contatti" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">PiùCura</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive(item.path)
                    ? "text-primary font-medium bg-muted"
                    : "text-foreground hover:text-primary hover:bg-muted/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a href="https://www.miodottore.it/leonardo-michelin/osteopata/gorizia" target="_blank" rel="noopener noreferrer">
              <Button className="ml-4">Prenota Ora</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md transition-colors ${
                  isActive(item.path)
                    ? "text-primary font-medium bg-muted"
                    : "text-foreground hover:text-primary hover:bg-muted/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a href="https://www.miodottore.it/leonardo-michelin/osteopata/gorizia" target="_blank" rel="noopener noreferrer" className="block mt-4">
              <Button className="w-full" onClick={() => setIsOpen(false)}>
                Prenota Ora
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
