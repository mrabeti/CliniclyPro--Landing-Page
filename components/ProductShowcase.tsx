import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Check, Clock, Users, FileText, ArrowRight } from "lucide-react";

export function ProductShowcase() {
  const features = [
    {
      icon: <Check className="w-6 h-6" />,
      title: "Interface intuitive",
      description: "Design pensé par et pour les professionnels de santé",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Gain de temps massif",
      description: "Automatisation complète des tâches répétitives",
      bgColor: "bg-blue-50", 
      iconColor: "text-blue-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Gestion multi-patients",
      description: "Dossiers centralisés et recherche instantanée",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Sécurité renforcée",
      description: "Conformité RGPD et chiffrement end-to-end",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Interface nouvelle génération
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Votre cabinet médical 
                <span className="text-blue-600"> réinventé</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Une interface moderne qui s'adapte à votre façon de travailler. 
                Accessible depuis tous vos appareils, synchronisé en temps réel.
              </p>
            </div>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className={`${feature.bgColor} ${feature.iconColor} p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200 group">
                Découvrir l'interface
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 px-8 py-3 text-lg hover:bg-gray-50">
                Voir la démo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            {/* Main dashboard mockup */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1OTQzNzc0OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dashboard médical moderne"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Floating feature cards */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Rendez-vous confirmé</p>
                  <p className="text-xs text-gray-500">Dr. Martin - 14h30</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">12 patients aujourd'hui</p>
                  <p className="text-xs text-gray-500">+3 que hier</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}