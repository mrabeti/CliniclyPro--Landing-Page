import { Button } from "./ui/button";

export function StatsSection() {
  const stats = [
    {
      number: "2h",
      label: "Gain de temps par jour",
      description: ""
    },
    {
      number: "500+",
      label: "Cabinets nous font confiance",
      description: ""
    },
    {
      number: "98%",
      label: "Taux de satisfaction",
      description: ""
    }
  ];

  return (
    <section className="py-16 px-4 bg-blue-600">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Rejoignez les lilles de cliniques des clients fidèles
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-xl text-blue-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            Essai gratuit
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            Planifier une démo
          </Button>
        </div>
      </div>
    </section>
  );
}