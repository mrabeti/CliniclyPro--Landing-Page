import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play, Star, CheckCircle, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-indigo-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Trust badges */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="font-medium">4.9/5</span>
                <span>(500+ avis)</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Certifié médical</span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Gérez votre
              <br />
              <span className="text-blue-600 relative">
                cabinet médical
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
                  <path d="M3 9C118.5 1.5 259.5 1.5 297 9" stroke="#2563eb" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
              <br />
              en toute simplicité
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              La solution complète de gestion médicale utilisée par plus de 500 cabinets. 
              Rendez-vous, dossiers patients, facturation - tout en un seul endroit.
            </p>
            
            {/* Features preview */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Installation en 5 min</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Support 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Données sécurisées</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Sans engagement</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200 group">
                Essai gratuit 14 jours
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 px-8 py-4 text-lg hover:bg-gray-50 group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Voir la démo (2 min)
              </Button>
            </div>
            
            {/* Social proof */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Déjà utilisé par :</p>
              <div className="flex items-center space-x-8 text-gray-400">
                <span className="font-semibold">Cabinet Médical +</span>
                <span className="font-semibold">Clinique Moderne</span>
                <span className="font-semibold">MediCenter Pro</span>
              </div>
            </div>
          </div>
          
          <div className="relative lg:pl-8">
            {/* Main image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-2xl opacity-20"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691462749-a95ce1bd7f96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwY29uc3VsdGF0aW9uJTIwbW9kZXJuJTIwY2xpbmljfGVufDF8fHx8MTc1OTQzNzc1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Consultation médicale moderne"
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">+2h économisées</p>
                  <p className="text-sm text-gray-500">par jour en moyenne</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">98% satisfaction</p>
                  <p className="text-sm text-gray-500">de nos utilisateurs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}