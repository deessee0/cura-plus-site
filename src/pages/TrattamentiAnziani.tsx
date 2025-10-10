import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Heart, Sparkles, Shield, Activity, Smile } from "lucide-react";

const TrattamentiAnziani = () => {
  const treatments = [
    {
      title: "Artrosi e Rigidità Articolare",
      description: "Trattamento per ridurre il dolore artrosico e migliorare la mobilità articolare. Lavoriamo gentilmente sulle articolazioni per mantenere la funzionalità e la qualità di vita."
    },
    {
      title: "Dolori Cronici",
      description: "Gestione del dolore cronico alla schiena, alle anche, alle ginocchia e alle spalle. Approccio olistico per ridurre il dolore e la dipendenza da farmaci antidolorifici."
    },
    {
      title: "Problemi di Equilibrio",
      description: "Miglioramento dell'equilibrio e della propriocezione per prevenire le cadute. Lavoriamo sul sistema vestibolare e sulla coordinazione neuromuscolare."
    },
    {
      title: "Problemi Posturali",
      description: "Correzione delle alterazioni posturali legate all'età: ipercifosi (gobba), iperlordosi, scoliosi. Miglioramento della postura globale per ridurre i dolori."
    },
    {
      title: "Circolazione e Gonfiore",
      description: "Tecniche per migliorare la circolazione sanguigna e linfatica. Riduzione del gonfiore agli arti inferiori e miglioramento del ritorno venoso."
    },
    {
      title: "Disturbi del Sonno",
      description: "Supporto per insonnia e sonno disturbato attraverso tecniche cranio-sacrali. Miglioramento della qualità del riposo notturno."
    },
    {
      title: "Mobilità Quotidiana",
      description: "Miglioramento delle attività quotidiane: alzarsi dalla sedia, salire le scale, camminare. Manteniamo l'autonomia e l'indipendenza."
    },
    {
      title: "Post-Fratture e Interventi",
      description: "Supporto nel recupero dopo fratture, protesi articolari o interventi chirurgici. Acceleriamo il recupero funzionale e preveniamo complicazioni."
    }
  ];

  const benefits = [
    "Riduzione del dolore cronico",
    "Miglioramento della mobilità",
    "Maggiore autonomia nelle attività",
    "Migliore equilibrio e coordinazione",
    "Riduzione del rischio di cadute",
    "Miglioramento della qualità di vita"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Cure Dedicate alla Terza Età</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Trattamenti per Anziani</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              L'osteopatia per anziani utilizza tecniche delicate e rispettose, adattate alle esigenze 
              specifiche della terza età. L'obiettivo è migliorare la qualità di vita, mantenere 
              l'autonomia e gestire i dolori cronici. Lavoro su artrosi, rigidità articolare, problemi 
              di equilibrio e dolori legati all'età, con un approccio gentile e personalizzato.
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
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Approccio Gentile</h3>
                <p className="text-sm text-muted-foreground">
                  Tecniche adattate e rispettose dell'età
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Autonomia</h3>
                <p className="text-sm text-muted-foreground">
                  Mantenimento dell'indipendenza quotidiana
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smile className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Qualità di Vita</h3>
                <p className="text-sm text-muted-foreground">
                  Miglioramento del benessere generale
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
                <h3 className="text-xl font-semibold mb-3">Perché l'osteopatia per anziani?</h3>
                <p className="text-muted-foreground">
                  Con l'età, il corpo accumula tensioni e compensi che possono causare dolori e 
                  limitazioni. L'osteopatia lavora per ripristinare la mobilità, ridurre il dolore 
                  e migliorare la funzionalità globale. Non possiamo fermare l'invecchiamento, ma 
                  possiamo sicuramente migliorare come lo viviamo. Molti pazienti anziani riferiscono 
                  di sentirsi "più giovani" dopo i trattamenti.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">È sicuro alla mia età?</h3>
                <p className="text-muted-foreground">
                  Assolutamente sì! Le tecniche sono completamente adattate all'età e alla condizione 
                  fisica del paziente. Non utilizziamo mai manipolazioni aggressive. Il trattamento è 
                  dolce, rispettoso e molto ben tollerato. Prima di iniziare, valuto sempre la tua 
                  storia clinica e le eventuali controindicazioni (osteoporosi severa, fratture recenti, 
                  etc.). La sicurezza è la priorità.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Posso ridurre i farmaci?</h3>
                <p className="text-muted-foreground">
                  Molti pazienti riescono a ridurre l'uso di antidolorifici e antinfiammatori grazie 
                  all'osteopatia. NON sostituisco mai le terapie mediche prescritte dal tuo medico, 
                  ma le integro. Ogni cambiamento nella terapia farmacologica deve essere discusso 
                  con il tuo medico curante. Collaboro sempre con i professionisti che ti seguono.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Con che frequenza venire?</h3>
                <p className="text-muted-foreground">
                  Dipende dalla situazione. Inizialmente, potrebbero servire trattamenti più ravvicinati 
                  (ogni 1-2 settimane) per "sbloccare" la situazione. Successivamente, molti pazienti 
                  anziani beneficiano di trattamenti di mantenimento mensili o bimestrali per prevenire 
                  il peggioramento e mantenere i risultati ottenuti. L'obiettivo è sempre la tua 
                  qualità di vita.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Posso venire anche se ho protesi o pacemaker?</h3>
                <p className="text-muted-foreground">
                  Sì, nella maggior parte dei casi. Le protesi articolari (anca, ginocchio) non sono 
                  una controindicazione, anzi, l'osteopatia può aiutare a mantenere la mobilità e 
                  ridurre i compensi. Anche con pacemaker, by-pass o altre condizioni mediche, 
                  possiamo lavorare in sicurezza adattando le tecniche. Fammi sempre sapere tutte 
                  le tue condizioni mediche nella prima visita.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Migliora la Tua Qualità di Vita</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Prenota una valutazione osteopatica e scopri come possiamo aiutarti 
            a vivere meglio ogni giorno
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

export default TrattamentiAnziani;
