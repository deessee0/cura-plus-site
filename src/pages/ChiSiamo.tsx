import TeamMember from "@/components/TeamMember";
import { Target, Eye, Heart } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";

const ChiSiamo = () => {
  const team = [
    {
      name: "Leonardo Michelin",
      role: "Osteopata D.O.",
      bio: "Formazione presso I.E.M.O. Genova, C.E.E.S.O. Parigi e S.I.O.P. Firenze. Tirocini presso Ospedale Meyer, Ospedale Rizzoli e C.E.E.S.O. Clinique Ostéopatique. Competenze linguistiche: Italiano, Inglese, Francese. Autore di studi sul sistema glinfatico e glaucoma presentati a congressi nazionali, europei e mondiali.",
      image: doctor1,
    },
  ];

  return (
    <div>
      <SEOHead 
        title="Chi Siamo - PiùCura | Osteopata Leonardo Michelin a Gorizia"
        description="Scopri lo studio osteopatico PiùCura a Gorizia: formazione internazionale, esperienza ospedaliera e ricerca scientifica. Osteopata D.O. Leonardo Michelin."
        canonical="https://piucura.it/chi-siamo"
        keywords="osteopata gorizia, leonardo michelin, studio osteopatia gorizia, formazione osteopatia, chi siamo piucura"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Chi Siamo</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Studio di osteopatia a Gorizia specializzato in trattamenti personalizzati. 
              Offriamo un approccio professionale e attento alle esigenze di ogni paziente, 
              combinando competenze internazionali con un'attenzione particolare al benessere individuale.
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
                Essere un punto di riferimento per l'osteopatia a Gorizia, riconosciuti per 
                professionalità, competenza internazionale e attenzione al paziente.
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
                Studio osteopatico fondato sulla base di una solida formazione internazionale. 
                La formazione presso istituzioni prestigiose come I.E.M.O. Genova, C.E.E.S.O. Parigi 
                e S.I.O.P. Firenze garantisce competenze all'avanguardia.
              </p>
              
              <p>
                L'esperienza maturata attraverso tirocini presso l'Ospedale Meyer, l'Ospedale Rizzoli 
                e la C.E.E.S.O. Clinique Ostéopatique ha consolidato un approccio clinico rigoroso 
                e attento alle esigenze di ogni paziente.
              </p>
              
              <p>
                L'attività di ricerca, con particolare focus sul sistema glinfatico e le sue implicazioni 
                sul glaucoma, testimonia l'impegno costante nell'innovazione e nell'approfondimento scientifico. 
                Gli studi sono stati presentati a congressi nazionali, europei e mondiali.
              </p>
              
              <p>
                Oggi lo studio a Gorizia rappresenta un punto di riferimento per chi cerca trattamenti 
                osteopatici professionali, basati su evidenze scientifiche e personalizzati per ogni paziente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChiSiamo;
