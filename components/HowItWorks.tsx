import { UserPlus, Calendar, BarChart3, ArrowRight, Clock } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <UserPlus className="w-10 h-10" />,
      title: "Inscription rapide",
      description: "Créez votre compte en 2 minutes. Configuration automatique de votre cabinet avec vos informations professionnelles.",
      time: "2 min",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      number: "02", 
      icon: <Calendar className="w-10 h-10" />,
      title: "Configuration de l'agenda",
      description: "Personnalisez vos créneaux, vos tarifs et activez la réservation en ligne pour vos patients.",
      time: "5 min",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      number: "03",
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Première consultation",
      description: "Commencez à utiliser CliniclyPro pour vos consultations et découvrez tous les outils disponibles.",
      time: "Immédiat",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Démarrez avec CliniclyPro en quelques minutes seulement. Un processus simple et guidé pour une prise en main immédiate.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center relative">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 mx-8 rounded-full"></div>
              <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              <div className="flex-1 h-1 bg-gradient-to-r from-green-600 to-purple-600 mx-8 rounded-full"></div>
              <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Mobile arrow */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
                
                <div className={`group bg-white p-8 rounded-2xl border-2 ${step.borderColor} hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden`}>
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${step.bgColor} rounded-full transform translate-x-16 -translate-y-16 opacity-50`}></div>
                  
                  {/* Step number */}
                  <div className="absolute top-4 left-6">
                    <span className={`text-3xl font-bold ${step.iconColor} opacity-20`}>
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Icon */}
                  <div className={`${step.bgColor} ${step.iconColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    {step.icon}
                  </div>
                  
                  {/* Time badge */}
                  <div className="inline-flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{step.time}</span>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Prêt à commencer ?
              </h3>
              <p className="text-gray-600">
                Rejoignez plus de 500 cabinets qui nous font confiance
              </p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 group">
              <span>Essai gratuit 14 jours</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}