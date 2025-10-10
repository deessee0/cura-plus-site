import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Activity, Sparkles, Shield, Wind } from "lucide-react";

const OsteopatiaViscerale = () => {
  const treatments = [
    {
      title: "Disturbi Digestivi",
      description: "Trattamento di reflusso gastroesofageo, gastrite, gonfiore addominale, stitichezza e colon irritabile. Ripristiniamo la mobilità degli organi digestivi per ottimizzare la funzione."
    },
    {
      title: "Problemi Respiratori",
      description: "Approccio per asma, bronchite cronica e difficoltà respiratorie. Lavoriamo sul diaframma e sulla mobilità della gabbia toracica per migliorare la capacità respiratoria."
    },
    {
      title: "Disturbi Urogenitali",
      description: "Trattamento di cistiti ricorrenti, dolori pelvici, disturbi del ciclo mestruale e problematiche della prostata. Tecniche delicate per riequilibrare il sistema urogenitale."
    },
    {
      title: "Dolori Addominali",
      description: "Gestione di dolori addominali cronici e tensioni viscerali. Identifichiamo e trattiamo le aderenze e le restrizioni che causano disagio."
    },
    {
      title: "Post-Chirurgico",
      description: "Supporto nel recupero dopo interventi addominali. Preveniamo e trattiamo aderenze post-operatorie per un recupero ottimale."
    },
    {
      title: "Stress Viscerale",
      description: "Trattamento delle somatizzazioni viscerali dello stress. La tensione emotiva si riflette spesso sugli organi interni, lavoriamo per rilasciarla."
    }
  ];

  const benefits = [
    "Miglioramento della digestione",
    "Riduzione del gonfiore addominale",
    "Ottimizzazione della funzione respiratoria",
    "Regolarizzazione del ciclo intestinale",
    "Riduzione dei dolori pelvici",
    "Miglioramento generale del benessere"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Trattamenti Dolci e Efficaci</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Osteopatia Viscerale</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              L'osteopatia viscerale utilizza tecniche delicate per migliorare la mobilità e la 
              funzionalità degli organi interni. Ogni organo ha una propria mobilità ritmica che, 
              se compromessa, può causare disturbi funzionali. Particolarmente efficace per problemi 
              digestivi, respiratori e disturbi del sistema urogenitale.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Benefici del Trattamento</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Funzionalità Ottimale</h3>
                <p className="text-sm text-muted-foreground">
                  Ripristino della corretta funzione viscerale
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wind className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Approccio Gentile</h3>
                <p className="text-sm text-muted-foreground">
                  Tecniche non invasive e ben tollerate
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Risultati Duraturi</h3>
                <p className="text-sm text-muted-foreground">
                  Miglioramenti stabili nel tempo
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
            <h2 className="text-3xl font-bold mb-8 text-center">Aree di Trattamento</h2>
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
            <h2 className="text-3xl font-bold text-center mb-12">Informazioni sul Trattamento</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Tariffe</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Visita osteopatica: €75</li>
                  <li>• Visita osteopatica di controllo: €65</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Come funziona?</h3>
                <p className="text-muted-foreground">
                  Attraverso palpazioni delicate, l'osteopata valuta la mobilità e la vitalità 
                  degli organi interni. Le tecniche viscerali utilizzano pressioni gentili e 
                  movimenti specifici per rilasciare tensioni, migliorare la circolazione e 
                  ripristinare la corretta funzionalità. È un approccio completamente indolore.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">È adatto a me?</h3>
                <p className="text-muted-foreground">
                  L'osteopatia viscerale è particolarmente indicata se soffri di disturbi digestivi, 
                  gonfiore addominale, problemi respiratori, dolori pelvici, disturbi del ciclo o 
                  hai avuto interventi chirurgici addominali. È adatta a tutte le età e molto ben 
                  tollerata anche da chi ha sensibilità particolari.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Quanto dura il trattamento?</h3>
                <p className="text-muted-foreground">
                  Una seduta tipica dura 45-60 minuti. I miglioramenti possono essere percepiti 
                  già dopo la prima seduta, ma di solito consigliamo un ciclo di 3-5 trattamenti 
                  per risultati ottimali e duraturi. La frequenza delle sedute viene stabilita 
                  in base alla risposta individuale.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Integrazione con altri trattamenti</h3>
                <p className="text-muted-foreground">
                  L'osteopatia viscerale si integra perfettamente con le terapie mediche convenzionali 
                  e può potenziarne gli effetti. Collaboriamo con il tuo medico quando necessario. 
                  Spesso combiniamo tecniche viscerali con trattamenti strutturali per un approccio 
                  olistico completo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ripristina l'Equilibrio Interno</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Prenota una valutazione viscerale e scopri come l'osteopatia può 
            aiutarti a ritrovare il benessere
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://www.miodottore.it/leonardo-michelin/osteopata/gorizia" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">
                Prenota su MioDottore
              </Button>
            </a>
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

export default OsteopatiaViscerale;
