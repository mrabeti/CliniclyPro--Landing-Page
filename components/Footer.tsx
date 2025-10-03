import { Stethoscope, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "Agenda intelligent", href: "#features" },
        { name: "Gestion patients", href: "#features" },
        { name: "Facturation", href: "#features" },
        { name: "Téléconsultation", href: "#features" },
        { name: "Analytics", href: "#features" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Centre d'aide", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Formations", href: "#" },
        { name: "API", href: "#" },
        { name: "Statut système", href: "#" }
      ]
    },
    {
      title: "Entreprise", 
      links: [
        { name: "À propos", href: "#" },
        { name: "Blog médical", href: "#" },
        { name: "Partenaires", href: "#" },
        { name: "Carrières", href: "#" },
        { name: "Presse", href: "#" }
      ]
    },
    {
      title: "Conformité",
      links: [
        { name: "RGPD", href: "#" },
        { name: "Sécurité", href: "#" },
        { name: "Certifications", href: "#" },
        { name: "Mentions légales", href: "#" },
        { name: "CGU", href: "#" }
      ]
    }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
      </div>
      
      {/* Newsletter section */}
      <div className="bg-blue-600 relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Restez informé des nouveautés médicales
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Recevez nos conseils pratiques, nouveautés produits et actualités du secteur médical
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 font-medium">
                S'abonner
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Company info */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">CliniclyPro</span>
                <p className="text-sm text-gray-400">Gestion médicale</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              La solution de gestion médicale de nouvelle génération. 
              Conçue par des professionnels de santé, pour des professionnels de santé.
            </p>
            
            {/* Contact info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+33 1 42 86 83 85</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">contact@clinicly.pro</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">75008 Paris, France</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Lun-Ven 9h-18h</span>
              </div>
            </div>
            
            {/* Social links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Footer sections */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-4 gap-8">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-white mb-6 text-lg">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.href} 
                          className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-wrap items-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Certifié RGPD</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Données sécurisées</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Conforme HDS</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm">
              © 2024 CliniclyPro SAS. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}