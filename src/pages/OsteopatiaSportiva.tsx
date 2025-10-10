import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Dumbbell, Activity, Sparkles, Shield, Zap, Award } from "lucide-react";

const OsteopatiaSportiva = () => {
  const treatments = [
    {
      title: "Prevenzione Infortuni",
      description: "Valutazione biomeccanica e correzione degli squilibri prima che diventino infortuni. Identifico le zone a rischio e lavoro per ottimizzare la funzione muscolo-scheletrica."
    },
    {
      title: "Recupero Post-Infortunio",
      description: "Accelerazione del recupero dopo distorsioni, strappi muscolari, tendiniti e lesioni sportive. Riduco i tempi di ritorno all'attività e prevengo recidive."
    },
    {
      title: "Ottimizzazione Performance",
      description: "Miglioramento della biomeccanica del gesto sportivo specifico. Elimino le restrizioni che limitano la performance e lavoro sulla mobilità ottimale."
    },
    {
      title: "Gestione Sovraccarichi",
      description: "Trattamento di tendinopatie, periostiti, fasciti e sindromi da overuse. Gestisco le problematiche legate all'accumulo di stress ripetitivo."
    },
    {
      title: "Problemi Runner",
      description: "Trattamento specifico per runner: sindrome bandelletta ileo-tibiale, fascite plantare, periostiti, problemi al ginocchio. Ottimizzazione della biomeccanica della corsa."
    },
    {
      title: "Sport di Contatto",
      description: "Gestione di contusioni, traumi e problematiche tipiche di sport come calcio, rugby, arti marziali. Recupero rapido per tornare in campo."
    },
    {
      title: "Sport di Resistenza",
      description: "Supporto per ciclisti, triatleti, nuotatori. Gestione del sovraccarico, ottimizzazione della postura sport-specifica e prevenzione dei problemi cronici."
    },
    {
      title: "Preparazione Gare",
      description: "Ottimizzazione pre-gara per arrivare al meglio all'evento importante. Gestione di tensioni e piccoli fastidi dell'ultima settimana."
    }
  ];

  const benefits = [
    "Riduzione del rischio di infortuni",
    "Recupero più rapido",
    "Migliore performance sportiva",
    "Ottimizzazione biomeccanica",
    "Gestione del dolore senza farmaci",
    "Maggiore resistenza agli sforzi"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Dumbbell className="w-4 h-4" />
              <span className="text-sm font-medium">Per Atleti e Sportivi</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Osteopatia Sportiva</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              L'osteopatia sportiva è dedicata agli atleti professionisti e amatoriali. Lavoro sulla 
              prevenzione degli infortuni, sull'ottimizzazione delle performance e sul recupero veloce 
              dopo traumi o sovraccarichi. Comprendo le esigenze specifiche di ogni sport e adatto il 
              trattamento alla tua disciplina. Collaboro con runner, ciclisti, calciatori e atleti di 
              ogni livello.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Vantaggi per l'Atleta</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Performance</h3>
                <p className="text-sm text-muted-foreground">
                  Ottimizzazione della biomeccanica sportiva
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Prevenzione</h3>
                <p className="text-sm text-muted-foreground">
                  Riduzione significativa degli infortuni
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Recupero Veloce</h3>
                <p className="text-sm text-muted-foreground">
                  Ritorno più rapido all'attività sportiva
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Risultati Attesi</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Aree di Intervento</h2>
            <div className="space-y-6">
              {treatments.map((treatment, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-soft transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">{treatment.title}</h3>
                  <p className="text-muted-foreground">{treatment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Informazioni per Atleti</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Quando rivolgersi all'osteopata sportivo?</h3>
                <p className="text-muted-foreground">
                  Idealmente PRIMA che appaia il dolore! Una valutazione preventiva all'inizio della 
                  stagione può identificare squilibri biomeccanici che potrebbero causare infortuni. 
                  Consiglio visite regolari ogni 4-6 settimane per atleti che si allenano intensamente. 
                  Naturalmente, intervengo anche quando c'è già un problema o dopo un infortunio.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Differenza con la fisioterapia?</h3>
                <p className="text-muted-foreground">
                  L'osteopatia ha un approccio globale: non mi concentro solo sulla zona dolorante, 
                  ma cerco la causa primaria del problema. Spesso un dolore al ginocchio origina da 
                  un problema al bacino o alla caviglia. Lavoro sulla biomeccanica globale e sulla 
                  prevenzione. L'osteopatia e la fisioterapia sono complementari e possono essere 
                  integrate con ottimi risultati.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Posso continuare ad allenarmi?</h3>
                <p className="text-muted-foreground">
                  Dipende dalla situazione. In generale, dopo un trattamento osteopatico consiglio 24-48 
                  ore di riposo o allenamento leggero per permettere al corpo di integrare il lavoro 
                  fatto. Per infortuni acuti, potrebbe essere necessario modificare temporaneamente 
                  l'allenamento. L'obiettivo è sempre farti tornare al tuo sport il prima possibile, 
                  ma in sicurezza.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Lavoro con atleti di tutti i livelli</h3>
                <p className="text-muted-foreground">
                  Che tu sia un professionista, un amatore competitivo o uno sportivo del weekend, 
                  il mio approccio è personalizzato sulle tue esigenze. Comprendo le richieste specifiche 
                  di ogni sport: running, ciclismo, calcio, tennis, pallavolo, crossfit, nuoto, triathlon 
                  e molti altri. La mia esperienza include atleti di ogni disciplina.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Sport che Seguiamo</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Running", "Ciclismo", "Calcio", "Tennis",
                "Pallavolo", "Basket", "Nuoto", "Triathlon",
                "CrossFit", "Rugby", "Arti Marziali", "Golf"
              ].map((sport, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4 hover:shadow-soft transition-shadow">
                  <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-medium">{sport}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-8">E molti altri sport!</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Migliora le Tue Performance</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Prenota una valutazione sportiva e scopri come l'osteopatia può 
            aiutarti a raggiungere i tuoi obiettivi
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contatti">
              <Button size="lg" variant="secondary">
                Prenota Ora
              </Button>
            </Link>
            <Link to="/servizi">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                Altri Servizi
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OsteopatiaSportiva;
