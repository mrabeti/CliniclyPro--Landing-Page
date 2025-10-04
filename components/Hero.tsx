import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { YouTubePopup } from "./YouTubePopup";
import { useState } from "react";

// Custom SVG icon components to replace lucide-react
const Play = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M6 20l4-16m6 16l4-16" />
  </svg>
);

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
                <span>(+10 avis)</span>
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
              La solution complète de gestion médicale utilisée par plus de 10 cabinets. 
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
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-200 group">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScfdwFIXZNu-dMj3weoffTCxipt7f-wQAOTcZweMzGVvOYUGA/viewform" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Essai gratuit 14 jours
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 px-8 py-4 text-lg hover:bg-gray-50 group"
                onClick={() => setIsVideoOpen(true)}
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Voir la démo (2 min)
              </Button>
            </div>
            

          </div>
          
          <div className="relative lg:pl-8">
            {/* Main image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-2xl opacity-20"></div>
              <ImageWithFallback
                src="https://www.flowww.com/hs-fs/hubfs/2024_EN/subsector/health/physiotherapy/Smart%20appointment%20management%20in%20your%20physiotherapy%20clinic.webp?width=1347&height=873&name=Smart%20appointment%20management%20in%20your%20physiotherapy%20clinic.webp"
                alt="Gestion intelligente des rendez-vous"
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
      
      <YouTubePopup
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=Vq0coQIJQ7U&pp=ygUVa2luZXNpdGhlcmFwaWUgdXNlZnVs"
      />
    </section>
  );
}