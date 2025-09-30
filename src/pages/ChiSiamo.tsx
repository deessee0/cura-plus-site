import TeamMember from "@/components/TeamMember";
import { Target, Eye, Heart } from "lucide-react";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";

const ChiSiamo = () => {
  const team = [
    {
      name: "Dott.ssa Maria Rossi",
      role: "Osteopata D.O.",
      bio: "Specializzata in osteopatia pediatrica e cranio-sacrale, con oltre 15 anni di esperienza nel settore del benessere.",
      image: doctor1,
    },
    {
      name: "Dott. Marco Bianchi",
      role: "Osteopata D.O.",
      bio: "Esperto in osteopatia sportiva e strutturale, ha seguito atleti professionisti e amatori nel loro percorso di recupero.",
      image: doctor2,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Chi Siamo</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              PiùCura nasce dalla passione per l'osteopatia e dalla volontà di offrire trattamenti 
              di qualità in un ambiente accogliente e professionale. Il nostro studio è un punto di 
              riferimento a Roma per chi cerca un approccio naturale e personalizzato al benessere.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">I Nostri Valori</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Missione</h3>
              <p className="text-muted-foreground leading-relaxed">
                Aiutare ogni persona a ritrovare il proprio equilibrio psicofisico attraverso 
                trattamenti osteopatici efficaci e personalizzati.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Eye className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Visione</h3>
              <p className="text-muted-foreground leading-relaxed">
                Essere il punto di riferimento per l'osteopatia a Roma, riconosciuti per 
                professionalità, competenza e attenzione al paziente.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Passione</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mettiamo passione e dedizione in ogni trattamento, perché il tuo benessere 
                è la nostra più grande soddisfazione.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Il Nostro Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professionisti qualificati e appassionati, pronti ad accompagnarti nel tuo percorso di benessere
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">La Nostra Storia</h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                PiùCura nasce nel 2008 dalla visione di due giovani osteopati che, dopo anni di formazione 
                in Italia e all'estero, decidono di aprire uno studio dove l'eccellenza clinica si unisce 
                all'attenzione per la persona.
              </p>
              
              <p>
                Nel corso degli anni, abbiamo costruito una reputazione solida basata sulla fiducia dei 
                nostri pazienti e sull'efficacia dei nostri trattamenti. Ogni giorno accogliamo persone 
                di tutte le età con problematiche diverse, dalla semplice tensione muscolare ai disturbi 
                cronici più complessi.
              </p>
              
              <p>
                Il nostro studio si è evoluto, ma i principi fondamentali rimangono gli stessi: 
                ascolto attento, diagnosi accurata, trattamento personalizzato e formazione continua. 
                Crediamo che l'osteopatia sia molto più di una tecnica: è un approccio olistico che 
                considera la persona nella sua interezza.
              </p>
              
              <p>
                Oggi PiùCura è un punto di riferimento nel panorama osteopatico romano, con migliaia 
                di pazienti soddisfatti e una rete di collaborazioni con altri professionisti della salute.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChiSiamo;
