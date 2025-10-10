import ServiceCard from "@/components/ServiceCard";
import { Bone, Heart, Baby, Dumbbell, Users, Activity, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import treatmentImage from "@/assets/treatment-osteopathy.jpg";

const Servizi = () => {
  const services = [
    {
      icon: Bone,
      title: "Osteopatia Strutturale",
      description: "Manipolazione vertebrale e riequilibrio posturale per trattare artrosi, discopatia, dolori alla schiena, cervicalgia, problemi articolari e disturbi posturali. Tecniche manuali per ripristinare la mobilità articolare.",
      link: "/osteopatia-strutturale",
    },
    {
      icon: Heart,
      title: "Osteopatia Viscerale",
      description: "Manipolazione viscerale per migliorare la mobilità degli organi interni. Efficace per disturbi digestivi, dolore addominale nelle donne, problemi respiratori e disfunzioni del sistema urogenitale.",
      link: "/osteopatia-viscerale",
    },
    {
      icon: Activity,
      title: "Osteopatia Cranio-Sacrale",
      description: "Terapia cranio sacrale per ristabilire l'equilibrio del sistema nervoso. Ideale per mal di testa, emicranie, coccigodinia, disturbi del sonno, stress e tensioni cranio-facciali.",
      link: "/osteopatia-cranio-sacrale",
    },
    {
      icon: Baby,
      title: "Osteopatia Pediatrica",
      description: "Trattamenti specializzati per neonati e bambini. Approccio delicato per coliche infantili, plagiocefalie, disturbi del sonno, reflusso gastroesofageo e problemi legati al parto.",
      link: "/osteopatia-pediatrica",
    },
    {
      icon: Sparkles,
      title: "Yoga Terapeutico",
      description: "Programma completo di yoga terapeutico. Sessioni dedicate a equilibrio, postura, respiro, gestione dello stress e benessere completo per specifiche esigenze fisiche ed emotive.",
      link: "/yoga-terapeutico",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">I Nostri Servizi</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Offriamo una gamma completa di trattamenti osteopatici per rispondere 
              alle diverse esigenze di salute e benessere. Ogni servizio è personalizzato 
              in base alla tua condizione specifica.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Come Funziona una Seduta</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={treatmentImage}
                  alt="Trattamento osteopatico"
                  className="rounded-lg shadow-soft w-full"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <h3 className="text-xl font-semibold">Anamnesi</h3>
                  </div>
                  <p className="text-muted-foreground ml-11">
                    Raccogliamo la tua storia clinica e discutiamo i tuoi sintomi e obiettivi.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <h3 className="text-xl font-semibold">Valutazione</h3>
                  </div>
                  <p className="text-muted-foreground ml-11">
                    Effettuiamo test specifici per identificare le disfunzioni del corpo.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <h3 className="text-xl font-semibold">Trattamento</h3>
                  </div>
                  <p className="text-muted-foreground ml-11">
                    Applichiamo tecniche manuali mirate per ripristinare l'equilibrio.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      4
                    </div>
                    <h3 className="text-xl font-semibold">Follow-up</h3>
                  </div>
                  <p className="text-muted-foreground ml-11">
                    Ti forniamo consigli e pianifichiamo eventuali sedute successive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Domande Frequenti</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Quanto dura una seduta?</h3>
              <p className="text-muted-foreground">
                Una seduta tipica dura circa 45-60 minuti. La prima visita può richiedere più tempo 
                per l'anamnesi completa e la valutazione iniziale.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Quante sedute sono necessarie?</h3>
              <p className="text-muted-foreground">
                Il numero di sedute varia in base alla problematica. Problemi acuti possono risolversi 
                in 2-3 sedute, mentre condizioni croniche potrebbero richiedere un ciclo più lungo. 
                Definiamo sempre un piano personalizzato dopo la prima visita.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">L'osteopatia è dolorosa?</h3>
              <p className="text-muted-foreground">
                I trattamenti osteopatici sono generalmente ben tollerati. Alcune tecniche possono 
                causare un lieve fastidio momentaneo, ma lavoriamo sempre nel rispetto della tua soglia 
                di dolore. L'obiettivo è il tuo benessere, non il disagio.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Serve prescrizione medica?</h3>
              <p className="text-muted-foreground">
                No, l'osteopatia è una professione sanitaria autonoma. Puoi rivolgerti direttamente 
                al nostro studio senza prescrizione. Tuttavia, collaboriamo volentieri con il tuo 
                medico curante quando necessario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Pronto a Iniziare?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Prenota la tua prima visita su MioDottore e scoprire come l'osteopatia 
            può aiutarti a ritrovare il benessere
          </p>
          <a href="https://www.miodottore.it/leonardo-michelin/osteopata/gorizia" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary">
              Prenota su MioDottore
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Servizi;
