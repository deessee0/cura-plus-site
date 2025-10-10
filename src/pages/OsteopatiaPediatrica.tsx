import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Baby, Heart, Sparkles, Shield, Smile, Moon } from "lucide-react";

const OsteopatiaPediatrica = () => {
  const treatments = [
    {
      title: "Coliche Infantili",
      description: "Trattamento delicato per ridurre le coliche del neonato. Lavoriamo sulla mobilità diaframmatica e sul sistema digestivo per alleviare il disagio del bambino e migliorare il suo benessere."
    },
    {
      title: "Plagiocefalia e Asimmetrie Craniche",
      description: "Correzione gentile delle asimmetrie craniche (testa piatta o deformata). Interveniamo precocemente per favorire uno sviluppo armonico della forma del cranio."
    },
    {
      title: "Difficoltà nell'Allattamento",
      description: "Supporto per problemi di suzione, attacco al seno difficile e tensioni che impediscono un allattamento sereno. Aiutiamo mamma e bambino in questo momento delicato."
    },
    {
      title: "Reflusso Gastroesofageo",
      description: "Tecniche specifiche per ridurre il reflusso e migliorare la digestione. Lavoriamo sulla mobilità dello stomaco e del diaframma con tocchi estremamente delicati."
    },
    {
      title: "Disturbi del Sonno",
      description: "Aiutiamo i bambini che dormono poco o male. Riduciamo le tensioni del sistema nervoso e favoriamo un sonno più tranquillo e ristoratore."
    },
    {
      title: "Post-Parto Complicato",
      description: "Trattamento dopo parti difficili, cesarei, uso di ventosa o forcipe. Rilasciamo le tensioni create durante il parto per favorire uno sviluppo ottimale."
    },
    {
      title: "Otiti Ricorrenti",
      description: "Prevenzione e supporto per otiti ricorrenti. Miglioriamo il drenaggio dell'orecchio medio attraverso tecniche cranio-sacrali delicate."
    },
    {
      title: "Sviluppo Psicomotorio",
      description: "Supporto per ritardi nello sviluppo motorio, problemi di coordinazione e difficoltà posturali. Favoriamo uno sviluppo armonico del bambino."
    }
  ];

  const benefits = [
    "Riduzione delle coliche e del pianto",
    "Miglioramento del sonno",
    "Sviluppo armonico del cranio",
    "Migliore allattamento",
    "Riduzione del reflusso",
    "Prevenzione di problemi futuri"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Baby className="w-4 h-4" />
              <span className="text-sm font-medium">Cure Delicate per i Più Piccoli</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Osteopatia Pediatrica</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              L'osteopatia pediatrica utilizza tecniche estremamente delicate e sicure per aiutare 
              neonati e bambini. Il parto, anche se fisiologico, può creare tensioni nel corpo del 
              neonato. Interveniamo precocemente per favorire uno sviluppo armonico e prevenire 
              problemi futuri. Particolarmente efficace per coliche, plagiocefalie e disturbi del sonno.
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
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Sicuro e Delicato</h3>
                <p className="text-sm text-muted-foreground">
                  Tecniche appositamente studiate per i più piccoli
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smile className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Benessere Immediato</h3>
                <p className="text-sm text-muted-foreground">
                  I bambini si rilassano durante il trattamento
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Prevenzione</h3>
                <p className="text-sm text-muted-foreground">
                  Intervento precoce per uno sviluppo ottimale
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
            <h2 className="text-3xl font-bold text-center mb-12">Informazioni per i Genitori</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Quando portare il neonato?</h3>
                <p className="text-muted-foreground">
                  È consigliabile una visita osteopatica nelle prime settimane di vita, soprattutto 
                  se il parto è stato difficile, lungo, o se c'è stato uso di ventosa, forcipe o 
                  manovre particolari. Anche dopo un parto naturale fisiologico, una valutazione 
                  può essere utile per prevenire problemi futuri. Non è mai troppo presto!
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">È sicuro per il mio bambino?</h3>
                <p className="text-muted-foreground">
                  Assolutamente sì. L'osteopatia pediatrica utilizza tocchi delicatissimi, 
                  comparabili al peso di una moneta (circa 5 grammi di pressione). Le tecniche sono 
                  specificamente studiate per i neonati e i bambini. Non ci sono manipolazioni brusche. 
                  Molti bambini si rilassano e si addormentano durante il trattamento.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Come si svolge la visita?</h3>
                <p className="text-muted-foreground">
                  La prima visita dura circa 45-60 minuti. Iniziamo con un colloquio approfondito 
                  sulla gravidanza e il parto. Il bambino può rimanere vestito o in pannolino. 
                  I genitori sono sempre presenti e possono tenere in braccio il bambino se 
                  necessario. Rispettiamo i tempi del bambino: se ha fame o sonno, facciamo una pausa.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Quante sedute servono?</h3>
                <p className="text-muted-foreground mb-3">
                  Dipende dal problema. Per le coliche, spesso bastano 2-3 sedute per vedere 
                  miglioramenti significativi. Per le plagiocefalie, il numero di sedute dipende 
                  dalla severità e dall'età del bambino (prima si interviene, meglio è).
                </p>
                <p className="text-muted-foreground">
                  Generalmente consigliamo un ciclo di 3-5 trattamenti, con valutazioni regolari 
                  per monitorare i progressi. Ogni bambino risponde in modo diverso.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Collaborazione con il pediatra</h3>
                <p className="text-muted-foreground">
                  Collaboriamo sempre con il vostro pediatra di fiducia. L'osteopatia non sostituisce 
                  le cure mediche ma le integra. In caso di dubbi o patologie specifiche, vi 
                  indirizzeremo sempre verso lo specialista appropriato. Il benessere del bambino 
                  è la nostra priorità.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Prenditi Cura del Tuo Bambino</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Prenota una valutazione osteopatica per il tuo bambino e offrigli 
            il miglior inizio possibile
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

export default OsteopatiaPediatrica;
