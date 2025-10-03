import { Button } from "./ui/button";
import { Clock, Award, Star, Play, Users, BookOpen, ArrowRight } from "lucide-react";

export function InfoSection() {
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
          Formations interactives incluses
        </h2>
        
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
          Maîtrisez rapidement CliniclyPro grâce à nos formations personnalisées. 
          Support vidéo, guides pratiques et accompagnement personnalisé pour une prise en main optimale.
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
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 group">
            Commencer ma formation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg transition-all duration-200">
            <Play className="w-5 h-5 mr-2" />
            Voir la démo
          </Button>
        </div>
      </div>
    </section>
  );
}