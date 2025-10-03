import { Heart, Calendar, FileText, Users, Shield, Clock, BarChart, Smartphone } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Suivi médical complet",
      description: "Dossiers patients, antécédents, prescriptions et suivi des traitements en temps réel",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      borderColor: "border-red-200"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Agenda intelligent",
      description: "Planification automatique, rappels SMS/email et gestion des salles d'attente",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Facturation automatique",
      description: "Génération de factures, suivi des paiements et intégration des mutuelles",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Équipe collaborative",
      description: "Gestion multi-praticiens avec permissions et partage de dossiers sécurisé",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité maximale",
      description: "Conformité RGPD, chiffrement des données et sauvegardes automatiques",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-200"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Gain de temps",
      description: "Automatisation des tâches répétitives et optimisation des flux de travail",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analytics avancées",
      description: "Tableaux de bord détaillés, statistiques et reporting pour votre cabinet",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      borderColor: "border-teal-200"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile et web",
      description: "Accès depuis tous vos appareils avec synchronisation en temps réel",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
      borderColor: "border-pink-200"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Les outils essentiels pour votre cabinet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une suite complète d'outils conçus spécifiquement pour les professionnels de santé, 
            pour optimiser votre temps et améliorer la qualité des soins
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group bg-white p-8 rounded-2xl border-2 ${feature.borderColor} hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              <div className={`${feature.bgColor} ${feature.iconColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Découvrez comment CliniclyPro peut transformer votre pratique médicale
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl">
            Voir toutes les fonctionnalités
          </button>
        </div>
      </div>
    </section>
  );
}