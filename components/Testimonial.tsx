import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1759350075177-eeb89d507990?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRvY3RvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTQxNTc5MHww&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "CliniclyPro a révolutionné la gestion de mon cabinet. L'interface intuitive et les fonctionnalités avancées me font économiser plus de 2 heures par jour. Mes patients adorent la prise de rendez-vous en ligne !",
      name: "Dr. Sarah Martin",
      title: "Médecin généraliste",
      location: "Paris",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU5NDM5MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "Depuis que j'utilise CliniclyPro, la gestion de mon cabinet pluridisciplinaire est devenue un jeu d'enfant. La synchronisation entre praticiens et la facturation automatique sont exceptionnelles.",
      name: "Dr. Thomas Dubois", 
      title: "Directeur médical",
      location: "Lyon",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjB3b21hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTk0MzkzNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "La transition vers CliniclyPro s'est faite en douceur grâce à l'équipe support exceptionnelle. Les fonctionnalités de téléconsultation intégrées ont été un game-changer pendant la pandémie.",
      name: "Dr. Marie Lefevre",
      title: "Pédiatre", 
      location: "Marseille",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ils ont choisi CliniclyPro et en parlent
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez pourquoi plus de 500 cabinets médicaux nous font confiance pour leur gestion quotidienne
          </p>
        </div>
        
        <div className="relative">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Quote decoration */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote className="w-16 h-16 text-blue-600" />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
                {/* Profile */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className="relative">
                    <ImageWithFallback
                      src={current.image}
                      alt={current.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto lg:mx-0 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-2">
                      <Star className="w-5 h-5 text-white fill-current" />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-900">{current.name}</h3>
                    <p className="text-blue-600 font-medium">{current.title}</p>
                    <p className="text-gray-500 text-sm">{current.location}</p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start items-center mb-6">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium italic mb-8">
                    "{current.quote}"
                  </blockquote>
                  
                  {/* Verified badge */}
                  <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Avis vérifié
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-12">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ArrowRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Cabinets utilisateurs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Note moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Taux de satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}