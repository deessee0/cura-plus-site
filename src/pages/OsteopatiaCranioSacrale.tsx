import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Activity, Brain, Moon, Sparkles, Shield, Heart } from "lucide-react";

const OsteopatiaCranioSacrale = () => {
  const treatments = [
    {
      title: "Cefalee ed Emicranie",
      description: "Trattamento specifico per mal di testa tensivi, emicranie croniche e cefalee a grappolo. Lavoriamo sul sistema cranio-sacrale per ridurre frequenza e intensità degli episodi."
    },
    {
      title: "Disturbi del Sonno",
      description: "Approccio per insonnia, sonno disturbato e difficoltà nell'addormentamento. Le tecniche cranio-sacrali favoriscono un profondo rilassamento del sistema nervoso."
    },
    {
      title: "Stress e Ansia",
      description: "Tecniche delicate per ridurre tensioni del sistema nervoso, ansia e stress cronico. Promuoviamo il rilassamento profondo e il riequilibrio emotivo."
    },
    {
      title: "Problemi TMJ (ATM)",
      description: "Trattamento dei disturbi dell'articolazione temporo-mandibolare: bruxismo, click mandibolari, dolori alla mascella e difficoltà di masticazione."
    },
    {
      title: "Post-Trauma Cranico",
      description: "Supporto nel recupero dopo traumi cranici, colpi di frusta o commozioni. Ripristiniamo la corretta mobilità delle ossa craniche."
    },
    {
      title: "Disturbi dell'Orecchio",
      description: "Trattamento di vertigini, acufeni, otiti ricorrenti e problemi dell'equilibrio. Lavoriamo sulla mobilità delle ossa temporali e sul sistema vestibolare."
    }
  ];

  const benefits = [
    "Riduzione di mal di testa ed emicranie",
    "Miglioramento della qualità del sonno",
    "Riduzione di stress e ansia",
    "Rilassamento profondo del sistema nervoso",
    "Miglioramento della concentrazione",
    "Equilibrio emotivo"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Brain className="w-4 h-4" />
              <span className="text-sm font-medium">Tecniche Delicate e Profonde</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Osteopatia Cranio-Sacrale</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              L'osteopatia cranio-sacrale è un approccio estremamente delicato che lavora sul 
              sistema formato da cranio, colonna vertebrale e sacro. Attraverso tocchi leggeri, 
              stimola le capacità di autoguarigione del corpo, promuovendo un profondo rilassamento 
              e riequilibrio. Ideale per cefalee, disturbi del sonno, stress e tensioni.
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
                  <Moon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Rilassamento Profondo</h3>
                <p className="text-sm text-muted-foreground">
                  Riduzione dello stress a livello neurologico
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Non Invasivo</h3>
                <p className="text-sm text-muted-foreground">
                  Tocchi estremamente delicati e sicuri
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Equilibrio Globale</h3>
                <p className="text-sm text-muted-foreground">
                  Riequilibrio di corpo, mente ed emozioni
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
                <h3 className="text-xl font-semibold mb-3">Come si svolge?</h3>
                <p className="text-muted-foreground">
                  Durante il trattamento, riposerai comodamente sul lettino completamente vestito. 
                  L'osteopata applica tocchi delicatissimi (circa 5 grammi di pressione) su punti 
                  specifici del cranio, della colonna e del sacro. Molti pazienti entrano in uno 
                  stato di profondo rilassamento o addirittura si addormentano.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">È scientificamente validato?</h3>
                <p className="text-muted-foreground">
                  Sì, numerosi studi scientifici confermano l'efficacia dell'osteopatia cranio-sacrale 
                  per mal di testa, disturbi del sonno e riduzione dello stress. Il ritmo cranio-sacrale 
                  è stato documentato e misurato scientificamente. Questa tecnica è riconosciuta e 
                  praticata in tutto il mondo.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Cosa posso aspettarmi?</h3>
                <p className="text-muted-foreground">
                  Dopo il trattamento è comune sentirsi profondamente rilassati. Alcuni pazienti 
                  sperimentano miglioramenti immediati, altri notano i benefici nelle ore o giorni 
                  successivi. È normale sentire il bisogno di riposare dopo una seduta. I risultati 
                  sono cumulativi e migliorano con il proseguire del trattamento.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Per chi è particolarmente indicato?</h3>
                <p className="text-muted-foreground">
                  Questa tecnica è ideale per chi soffre di cefalee croniche, disturbi del sonno, 
                  stress e ansia. È particolarmente indicata per persone sensibili che preferiscono 
                  approcci delicati. Ottimi risultati anche con neonati e bambini. È la tecnica 
                  d'elezione per chi cerca un profondo rilassamento e riequilibrio del sistema nervoso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Scopri il Potere del Rilassamento Profondo</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Prenota una seduta cranio-sacrale e sperimenta un benessere che va 
            oltre il fisico
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

export default OsteopatiaCranioSacrale;
