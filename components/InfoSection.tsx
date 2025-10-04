import { Button } from "./ui/button";
import { YouTubePopup } from "./YouTubePopup";
import { useState } from "react";

// Custom SVG icon components to replace lucide-react
const Clock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Award = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const Play = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M6 20l4-16m6 16l4-16" />
  </svg>
);

const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const BookOpen = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export function InfoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Stats badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Clock className="w-5 h-5 text-blue-200" />
            <span className="text-white font-medium">15 min</span>
            <span className="text-blue-200">de formation</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Award className="w-5 h-5 text-green-300" />
            <span className="text-white font-medium">Certifié</span>
            <span className="text-blue-200">médical</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Star className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-medium">4.9/5</span>
            <span className="text-blue-200">satisfaction</span>
          </div>
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Prêt à l'utilisation
        </h2>
        
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
          Commencez immédiatement à programmer vos rendez-vous, suivre vos patients et générer vos factures.
        </p>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <Play className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Vidéos interactives</h3>
            <p className="text-blue-100">Tutoriels step-by-step pour chaque fonctionnalité</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <Users className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Support personnalisé</h3>
            <p className="text-blue-100">Accompagnement dédié pendant 30 jours</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <BookOpen className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Documentation complète</h3>
            <p className="text-blue-100">Guides pratiques et FAQ détaillée</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 group">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScfdwFIXZNu-dMj3weoffTCxipt7f-wQAOTcZweMzGVvOYUGA/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="flex items-center">
              Commencer ma formation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-3 text-lg transition-all duration-200"
            onClick={() => setIsVideoOpen(true)}
          >
            <Play className="w-5 h-5 mr-2" />
            Voir la démo
          </Button>
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