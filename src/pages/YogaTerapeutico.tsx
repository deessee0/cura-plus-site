import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Heart, Moon, Sun, Sparkles, Wind } from "lucide-react";

const YogaTerapeutico = () => {
  const octoberSessions = [
    {
      date: "2",
      title: "Programmazione e Yoga Posturale",
      description: "Lezione dedicata al rilassamento e all'assestamento di mente e corpo per riconoscere la pratica di yoga terapeutico"
    },
    {
      date: "9",
      title: "Equilibrio e Coordinazione - Yoga del Respiro",
      description: "Focus sulle GINOCCHIA, yoga per la CONCENTRAZIONE e per il RESPIRO. Lavoriamo sulla sicurezza, il focus point, equilibrio in piedi e da seduti. Danza del guerriero per la coordinazione. Esercizi incrociati e riscaldamento delle giunture. Rilassiamo la cervicale e facciamo il respiro diaframmatico."
    },
    {
      date: "16",
      title: "Yoga Posturale e Yoga per le Anche e Bacino - Psoas e Allungamenti",
      description: "Lavoriamo sui tre centri di energia del corpo (anche, busto e testa). Introduciamo i principali blocchi energetici per il reindirizzamento della forza nel corpo. Lavoriamo nel POSTURALE per comprendere e rilasciare. Rilascio della tensione addominale. Respirazione controllata Apana Pranayama."
    },
    {
      date: "23",
      title: "Yoga Articolare - Riduzione delle Infiammazioni e Cambio Stagione",
      description: "Detox, mi preparo al cambio stagione diminuendo le infiammazioni del corpo. Rendiamo il corpo e le gambe leggere, lavoriamo con la circolazione e con il liquido sinoviale. Una lezione fluida per apprendere come muoversi con scioltezza. Mobilità e lubrificazione delle articolazioni anche attraverso il respiro. Movimenti per artrite e artrosi. Contatto con il sistema nervoso di regolazione per rilassare. Respiro reindirizzato nel corpo e viloma."
    },
    {
      date: "30",
      title: "Yoga per la Schiena e per le Anche - Focus su Lombalgia e Allungamenti",
      description: "Lombalgia e apertura delle anche. Rilassamento - flessibilità - allungamento della colonna. POSTURALE. Respirazione quadrata e conteggio del respiro per portare consapevolezza. Rilascio dell'addome per fare spazio e tonificare i muscoli della schiena."
    }
  ];

  const novemberSessions = [
    {
      date: "6",
      title: "Yoga per la Schiena e per le Anche",
      description: "Scoliosi ed ernia, troviamo le modificazioni alle pose e miglioriamo la postura per stare bene. Introduzione al bacino e alla relazione con lo psoas. Respirazione che allunga la schiena."
    },
    {
      date: "13",
      title: "Rituale del Mattino - Yoga Riattivatore per Aumentare le Energie",
      description: "Creiamo una lezione fissa da fare a casa, per riattivare il sistema. Parliamo del ritmo circadiano e la relazione tra serotonina e melatonina nella ghiandola pineale. Eliminiamo le tossine e riattiviamo la mente e il metabolismo. Ricarica energetica dalla tradizione di Paramhansa Yogananda, doppio respiro."
    },
    {
      date: "20",
      title: "Yoga per Dormire Meglio - Yoga della Sera",
      description: "Insonnia e sistema nervoso, stimolazione del rilascio della melanina, introduciamo e diamo una lezione fissa da fare a casa per il rilassamento. Meditazione verso i centri alti del corpo. Respirazione quadrata e anulom vilom (narici alternate). Om"
    },
    {
      date: "27",
      title: "Yoga per Aumentare le Difese Immunitarie",
      description: "Focus sul timo e sulle aperture del petto, aumentiamo la circolazione e lavoriamo con il sistema linfatico - utilizzo i linfonodi nella pratica di yoga e apro i meridiani laterali del corpo. Uno sguardo allo stress! Detox, sono preparato al cambio stagione. Respirazione vittoriosa ujjayi e bhastrika pranayama."
    }
  ];

  const decemberSessions = [
    {
      date: "4",
      title: "Yoga Addominale nell'Equilibrio e la Regolarità",
      description: "Movimenti per un'attivazione metabolica e per il rilascio della pesantezza addominale. Focus su costipazione e regolarità. In questa lezione distendiamo anche la colonna e alleggeriamo il peso. Stimoliamo le ghiandole surrenali. Uddiyana Bandha."
    },
    {
      date: "11",
      title: "Psicologia Fisica di Stress ed Ansia",
      description: "Focus sul controllo volontario e la personalità, il lavoro sul riconoscere i tre punti di attivazione (testa, petto, stomaco). Uno sguardo allo yoga di Patanjali e al pensiero incessante controllato, il respiro modifica la mente. Relazione tra stress e corpo, il cortisolo. Posizioni di rilascio emotivo e movimento somatico fluido. Lezione di rilassamento generale. Lo yoga nidra. Respiro quadrato, chandra bedha pranayama, brahmari."
    },
    {
      date: "18",
      title: "Yoga per Problemi Digestivi",
      description: "Somatizzare i problemi allo stomaco. Focus sui blocchi emotivi legati alla digestione. Tecniche specifiche per migliorare il sistema digestivo attraverso movimenti mirati e respirazione consapevole."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Programma Ottobre - Dicembre 2025</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Yoga Terapeutico</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Un percorso completo di benessere attraverso la pratica dello yoga terapeutico. 
              Ogni sessione è progettata per affrontare specifiche esigenze fisiche ed emotive, 
              combinando posture, respirazione e tecniche di rilassamento.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Sessioni settimanali</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary" />
                <span>Approccio olistico</span>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="w-4 h-4 text-primary" />
                <span>Tecniche di respirazione</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Benefici del Programma</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Benessere Fisico</h3>
                <p className="text-sm text-muted-foreground">
                  Migliora postura, flessibilità e mobilità articolare
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Moon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Equilibrio Mentale</h3>
                <p className="text-sm text-muted-foreground">
                  Riduce stress e ansia, migliora la qualità del sonno
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Energia Vitale</h3>
                <p className="text-sm text-muted-foreground">
                  Aumenta le energie e rinforza il sistema immunitario
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* October Program */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="text-primary">Ottobre</span> - Le Fondamenta
            </h2>
            <div className="space-y-6">
              {octoberSessions.map((session, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-soft transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold">
                        {session.date}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{session.title}</h3>
                      <p className="text-muted-foreground">{session.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* November Program */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="text-primary">Novembre</span> - Approfondimento
            </h2>
            <div className="space-y-6">
              {novemberSessions.map((session, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-soft transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold">
                        {session.date}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{session.title}</h3>
                      <p className="text-muted-foreground">{session.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* December Program */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="text-primary">Dicembre</span> - Integrazione
            </h2>
            <div className="space-y-6">
              {decemberSessions.map((session, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-soft transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold">
                        {session.date}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{session.title}</h3>
                      <p className="text-muted-foreground">{session.description}</p>
                    </div>
                  </div>
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
            <h2 className="text-3xl font-bold text-center mb-12">Informazioni Pratiche</h2>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Chi può partecipare?</h3>
                <p className="text-muted-foreground">
                  Il programma è adatto a tutti i livelli, dai principianti agli studenti più esperti. 
                  Ogni pratica può essere adattata alle esigenze individuali.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Cosa portare?</h3>
                <p className="text-muted-foreground">
                  Abbigliamento comodo, tappetino yoga (disponibili anche presso lo studio), 
                  una coperta e un cuscino per il rilassamento finale.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Durata delle sessioni</h3>
                <p className="text-muted-foreground">
                  Ogni sessione dura circa 75-90 minuti, includendo pratica fisica, 
                  respirazione e rilassamento guidato.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Approccio terapeutico</h3>
                <p className="text-muted-foreground">
                  Ogni lezione integra tecniche di yoga classico con approcci terapeutici specifici, 
                  lavorando su aspetti fisici, emotivi ed energetici per un benessere completo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Inizia il Tuo Percorso di Benessere</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Unisciti al nostro programma di Yoga Terapeutico e scopri i benefici 
            di una pratica consapevole e personalizzata
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://www.miodottore.it/leonardo-michelin/osteopata/gorizia" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary">
                Prenota la Tua Sessione
              </Button>
            </a>
            <Link to="/servizi">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                Scopri Altri Servizi
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YogaTerapeutico;
