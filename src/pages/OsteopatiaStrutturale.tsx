import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bone, Activity, Sparkles, Heart, Shield } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const OsteopatiaStrutturale = () => {
  const treatments = [
    {
      title: "Trattamento della Colonna Vertebrale",
      description: "Tecniche specifiche per ripristinare la mobilità vertebrale e alleviare dolori alla schiena, cervicalgia e lombalgia. Lavoriamo su ogni segmento vertebrale per ottimizzare la funzionalità del sistema nervoso."
    },
    {
      title: "Disfunzioni Articolari",
      description: "Trattamento delle limitazioni di movimento delle articolazioni periferiche: spalle, gomiti, polsi, anche, ginocchia e caviglie. Ripristiniamo la corretta biomeccanica articolare."
    },
    {
      title: "Problemi Posturali",
      description: "Valutazione e correzione degli squilibri posturali che causano tensioni croniche. Lavoriamo sulla catena muscolare globale per un riequilibrio duraturo."
    },
    {
      title: "Tensioni Muscolari",
      description: "Tecniche mirate per rilasciare contratture e trigger points. Ripristiniamo l'elasticità muscolare e la corretta funzione dei tessuti molli."
    },
    {
      title: "Disturbi da Trauma",
      description: "Gestione osteopatica di colpi di frusta, distorsioni, contusioni e lesioni sportive. Acceleriamo il recupero e preveniamo complicazioni future."
    },
    {
      title: "Cefalee Muscolo-Tensive",
      description: "Trattamento delle cefalee originate da tensioni cervicali e problemi posturali. Approccio globale per risultati duraturi."
    }
  ];

  const benefits = [
    "Riduzione immediata del dolore",
    "Miglioramento della mobilità articolare",
    "Ottimizzazione della postura",
    "Prevenzione di recidive",
    "Miglioramento della qualità del sonno",
    "Riduzione delle tensioni muscolari"
  ];

  return (
    <div>
      <SEOHead 
        title="Osteopatia Strutturale a Gorizia | Mal di Schiena e Dolori Articolari"
        description="Trattamenti di osteopatia strutturale a Gorizia per mal di schiena, cervicalgia, lombalgia, artrosi e problemi posturali. Manipolazione vertebrale specializzata."
        canonical="https://piucura.it/osteopatia-strutturale"
        keywords="osteopatia strutturale gorizia, mal di schiena gorizia, cervicalgia, lombalgia, manipolazione vertebrale, dolori articolari gorizia"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Bone className="w-4 h-4" />
              <span className="text-sm font-medium">Trattamenti Manuali Specializzati</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Osteopatia Strutturale</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              L'osteopatia strutturale si concentra sul sistema muscolo-scheletrico, utilizzando 
              tecniche manuali precise per ripristinare la mobilità articolare, alleviare il dolore 
              e riequilibrare la postura. Particolarmente efficace per dolori alla schiena, 
              cervicalgia e problemi articolari.
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
                <h3 className="font-semibold mb-2">Mobilità Articolare</h3>
                <p className="text-sm text-muted-foreground">
                  Ripristino completo della funzionalità articolare
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Prevenzione</h3>
                <p className="text-sm text-muted-foreground">
                  Riduzione del rischio di infortuni futuri
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Benessere Globale</h3>
                <p className="text-sm text-muted-foreground">
                  Miglioramento della qualità della vita
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
                <h3 className="text-xl font-semibold mb-3">Come si svolge la seduta?</h3>
                <p className="text-muted-foreground">
                  Iniziamo con un'anamnesi approfondita e una valutazione posturale. Successivamente, 
                  attraverso test specifici, identifichiamo le disfunzioni e applichiamo tecniche manuali 
                  mirate. Il trattamento è personalizzato in base alle tue esigenze specifiche.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Quante sedute servono?</h3>
                <p className="text-muted-foreground">
                  Il numero di sedute varia in base alla problematica. Per problemi acuti, 
                  solitamente bastano 2-4 sedute. Per condizioni croniche o complesse, 
                  potrebbe essere necessario un ciclo più lungo. Definiamo un piano terapeutico 
                  personalizzato dopo la prima valutazione.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">È doloroso?</h3>
                <p className="text-muted-foreground">
                  Le tecniche strutturali possono causare un lieve fastidio momentaneo, ma sempre 
                  nei limiti della tua tolleranza. Comunichiamo costantemente durante il trattamento 
                  per assicurarci del tuo comfort. Molti pazienti provano un senso di sollievo immediato.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Indicazioni e controindicazioni</h3>
                <p className="text-muted-foreground mb-3">
                  L'osteopatia strutturale è indicata per mal di schiena, cervicalgia, lombalgia, 
                  problemi articolari, tensioni muscolari, disturbi posturali e cefalee muscolo-tensive.
                </p>
                <p className="text-muted-foreground">
                  Controindicato in caso di fratture recenti, infezioni acute, tumori ossei, 
                  osteoporosi severa. In caso di dubbi, la prima visita include sempre una 
                  valutazione completa della tua idoneità al trattamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ritrova il Tuo Benessere</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Prenota una valutazione osteopatica e inizia il tuo percorso verso 
            una vita senza dolore
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

export default OsteopatiaStrutturale;
