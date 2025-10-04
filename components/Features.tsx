import * as React from "react";

// Simple icon components to replace lucide-react
const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const Calendar = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const FileText = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const Clock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BarChart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const Smartphone = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
  </svg>
);

export function Features() {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Suivi médical complet",
      description: "Suivi dossier patients, nombres séances effectuées et restantes, montant total et montant payé et restant",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Gestion des rendez-vous",
      description: "Planning intelligent, rappels automatiques et système de réservation en ligne",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Facturation automatisée",
      description: "Génération automatique des factures, suivi des paiements et exports comptables",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration équipe",
      description: "Partage sécurisé d'informations entre professionnels et communication simplifiée",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité RGPD",
      description: "Chiffrement de bout en bout, hébergement français et conformité réglementaire",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Gain de temps",
      description: "Automatisation des tâches répétitives et optimisation des workflows quotidiens",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Analyses et rapports",
      description: "Tableaux de bord détaillés, statistiques d'activité et aide à la décision",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Application mobile",
      description: "Responsive mobile et tablet, synchronisation temps réel",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tout ce dont vous avez besoin
            <br />
            <span className="text-blue-600">pour votre cabinet</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une suite complète d'outils conçus spécialement pour les professionnels de santé. 
            Simplifiez votre quotidien et concentrez-vous sur l'essentiel : vos patients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
            >
              <div className={`${feature.bgColor} ${feature.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
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
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full text-blue-700 font-medium">
            <span>Et bien plus encore...</span>
            <span className="text-blue-400">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}