import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

export function ImageCards() {
  const cards = [
    {
      image: "https://images.unsplash.com/photo-1581982231900-6a1a46b744c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMHJlY2VwdGlvbiUyMGFyZWElMjBjbGVhbnxlbnwxfHx8fDE3NTk0Mzc3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Cabinet médical moderne",
      title: "Espaces modernes",
      description: "Des environnements médicaux adaptés"
    },
    {
      image: "https://images.unsplash.com/photo-1700832082200-af7deeb63d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwc3RldGhvc2NvcGV8ZW58MXx8fHwxNzU5MzIzODI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Équipement médical professionnel",
      title: "Équipements de pointe",  
      description: "Technologies médicales avancées"
    },
    {
      image: "https://images.unsplash.com/photo-1758691462749-a95ce1bd7f96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwY29uc3VsdGF0aW9uJTIwbW9kZXJuJTIwY2xpbmljfGVufDF8fHx8MTc1OTQzNzc1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Consultation médicale personnalisée",
      title: "Soins personnalisés",
      description: "Une approche centrée sur le patient"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            L'excellence médicale au quotidien
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez comment CliniclyPro s'adapte parfaitement à tous types de pratiques médicales
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {card.description}
                </p>
                <div className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm font-medium mr-2">En savoir plus</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600 rounded-2xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}