import { Button } from "./ui/button";
import { Menu, X, Stethoscope } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Fonctionnalités", href: "#features" },
    { name: "Comment ça marche", href: "#how-it-works" },
    { name: "Tarifs", href: "#pricing" },
    { name: "Témoignages", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-600">CliniclyPro</h1>
              <p className="text-xs text-gray-500 leading-none">Gestion médicale</p>
            </div>
          </div>
          
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
          
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" className="text-gray-700 hover:text-blue-600 hover:bg-blue-50">
              Se connecter
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200">
              Essai gratuit 14 jours
            </Button>
          </div>
          
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-blue-50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-3 py-3 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3 border-t border-gray-100 mt-4">
                <Button variant="ghost" className="w-full justify-start hover:bg-blue-50">
                  Se connecter
                </Button>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Essai gratuit 14 jours
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}