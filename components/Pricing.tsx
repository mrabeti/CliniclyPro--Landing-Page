import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check, Star, Zap, Crown, ArrowRight } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Essai",
      price: "0€",
      period: "14 jours gratuits", 
      description: "Découvrez CliniclyPro",
      icon: <Star className="w-6 h-6" />,
      features: [
        "Accès complet 14 jours",
        "Jusqu'à 50 patients",
        "Agenda intelligent",
        "Support par email",
        "Formation incluse"
      ],
      buttonText: "Commencer l'essai",
      buttonVariant: "outline" as const,
      popular: false,
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200"
    },
    {
      name: "Professionnel",
      price: "39€",
      period: "/mois",
      description: "Le plus choisi",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Patients illimités",
        "Agenda avancé + rappels",
        "Facturation automatique",
        "Téléconsultation",
        "Support prioritaire",
        "Sauvegarde automatique",
        "Statistiques détaillées"
      ],
      buttonText: "Choisir Pro",
      buttonVariant: "default" as const,
      popular: true,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-500"
    },
    {
      name: "Cabinet",
      price: "79€",
      period: "/mois",
      description: "Pour les équipes",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Tout du plan Pro",
        "Multi-praticiens illimités",
        "Gestion des rôles",
        "API complète",
        "Analytics avancées",
        "Support téléphone",
        "Formation personnalisée",
        "Intégrations tierces"
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
                    className={`w-full py-3 text-lg font-medium transition-all duration-200 group ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl' 
                        : 'border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600'
                    }`}
                    variant={plan.buttonVariant}
                    size="lg"
                  >
                    {plan.buttonText}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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