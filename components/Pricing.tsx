import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

// Custom SVG icon components to replace lucide-react
const Check = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const Zap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Crown = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l5.5 7L16 3l.5 13.5H4.5L5 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6L8 10l4 4 4-4-4-4z" />
  </svg>
);

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export function Pricing() {
  const plans = [
    {
      name: "Essai – Gratuit",
      price: "0€",
      period: " / 14 jours",
      description: "Pour tester sans risque",
      icon: <Star className="w-6 h-6" />,
      features: [
        "Accès complet 14 jours",
        "Jusqu'à 30 patients",
        "Agenda intelligent (planning simple)",
        "Création factures & devis PDF (limité)",
        "Support par email"
      ],
      buttonText: "Commencer l'essai gratuit",
      buttonVariant: "outline" as const,
      popular: false,
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200"
    },
    {
      name: "Pro – Indépendant",
      price: "19€",
      period: "/mois",
      description: "Idéal pour un kiné seul",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Patients illimités",
        "Agenda avancé (rendez-vous + rappels WhatsApp automatiques)",
        "Factures & devis illimités (PDF pro validés assurance)",
        "Suivi des paiements (reçus / reste à payer)",
        "Statistiques simples (patients/mois, revenus/mois)",
        "Support prioritaire"
      ],
      buttonText: "Choisir Pro",
      buttonVariant: "default" as const,
      popular: true,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-500"
    },
    {
      name: "Cabinet – Équipe",
      price: "39€",
      period: "/mois",
      description: "Parfait pour cabinets multi-praticiens",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Tout du plan Pro",
        "Multi-utilisateurs (kinés + assistants)",
        "Gestion des rôles et accès (admin, assistant, praticien)",
        "Synchronisation multi-appareils (mobile + desktop)",
        "Statistiques avancées (revenus par praticien, séances restantes, suivi assurance)",
        "Support dédié (email + téléphone)"
      ],
      buttonText: "Choisir Cabinet",
      buttonVariant: "outline" as const,
      popular: false,
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choisissez le plan adapté à votre cabinet
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des tarifs transparents et sans engagement. Changez de plan à tout moment selon vos besoins.
          </p>
        </div>
        
        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button className="px-4 py-2 rounded-md text-sm font-medium bg-white text-gray-900 shadow-sm">
              Mensuel
            </button>
            <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900">
              Annuel <span className="text-green-600 text-xs">(-20%)</span>
            </button>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative ${plan.popular ? 'lg:scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Le plus populaire
                  </span>
                </div>
              )}
              
              <Card className={`h-full ${plan.bgColor} ${plan.borderColor} border-2 ${plan.popular ? 'shadow-xl' : 'shadow-lg'} hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                {/* Header with icon */}
                <CardHeader className="text-center pb-6 relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto ${plan.popular ? 'bg-blue-600 text-white' : 'bg-white border-2 border-gray-200 text-gray-600'}`}>
                    {plan.icon}
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-600 text-lg ml-1">{plan.period}</span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 font-medium">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild
                    className={`w-full py-3 text-lg font-medium transition-all duration-200 group ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl' 
                        : 'border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600'
                    }`}
                    variant={plan.buttonVariant}
                    size="lg"
                  >
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScfdwFIXZNu-dMj3weoffTCxipt7f-wQAOTcZweMzGVvOYUGA/viewform" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      {plan.buttonText}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Additional info */}
        <div className="text-center mt-16 space-y-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Sans engagement</h4>
              <p className="text-gray-600 text-sm">Annulation possible à tout moment</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Activation immédiate</h4>
              <p className="text-gray-600 text-sm">Démarrez en moins de 5 minutes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Crown className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Support premium</h4>
              <p className="text-gray-600 text-sm">Équipe dédiée pour vous accompagner</p>
            </div>
          </div>
          
          <p className="text-gray-600">
            Vous hésitez ? <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Contactez notre équipe</a> pour une démonstration personnalisée
          </p>
        </div>
      </div>
    </section>
  );
}