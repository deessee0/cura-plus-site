import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Award, Clock, Sparkles } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-osteopathy.jpg";

const Home = () => {
  const services = [
    {
      icon: Heart,
      title: "Osteopatia Strutturale",
      description: "Manipolazione vertebrale e riequilibrio posturale per artrosi, discopatia e dolori articolari.",
      link: "/osteopatia-strutturale",
    },
    {
      icon: Users,
      title: "Osteopatia Viscerale",
      description: "Manipolazione viscerale per disturbi digestivi e dolore addominale.",
      link: "/osteopatia-viscerale",
    },
    {
      icon: Award,
      title: "Osteopatia Cranio-Sacrale",
      description: "Terapia cranio sacrale per cefalee, coccigodinia e disturbi del sonno.",
      link: "/osteopatia-cranio-sacrale",
    },
    {
      icon: Sparkles,
      title: "Osteopatia Pediatrica",
      description: "Trattamenti delicati per neonati e bambini.",
      link: "/osteopatia-pediatrica",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <img 
          src={heroImage} 
          alt="Studio di osteopatia PiùCura Roma - Trattamenti osteopatici professionali"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Il Tuo Benessere è la Nostra Priorità
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Studio di osteopatia a Gorizia specializzato in trattamenti personalizzati 
              per ritrovare equilibrio e salute attraverso tecniche manuali efficaci.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.miodottore.it/leonardo-michelin/osteopata/gorizia" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group">
                  Prenota una Visita
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </a>
              <Link to="/servizi">
                <Button variant="outline" size="lg">
                  Scopri i Servizi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Anni di Esperienza</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3000+</div>
              <div className="text-muted-foreground">Pazienti Trattati</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Soddisfazione</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24h</div>
              <div className="text-muted-foreground">Risposta Prenotazioni</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">I Nostri Servizi</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Offriamo trattamenti osteopatici completi e personalizzati per ogni tua esigenza
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/servizi">
              <Button variant="outline" size="lg">
                Vedi Tutti i Servizi
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Perché Scegliere PiùCura</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professionisti Certificati</h3>
                  <p className="text-muted-foreground">
                    Il nostro team è composto da osteopati certificati con anni di esperienza e formazione continua.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Heart className="text-secondary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Approccio Personalizzato</h3>
                  <p className="text-muted-foreground">
                    Ogni trattamento è studiato su misura per te, considerando la tua storia clinica e i tuoi obiettivi.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Clock className="text-accent" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Orari Flessibili</h3>
                  <p className="text-muted-foreground">
                    Aperti dal lunedì al sabato con orari pensati per adattarsi alle tue esigenze.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Team Multidisciplinare</h3>
                  <p className="text-muted-foreground">
                    Collaboriamo con specialisti di diverse discipline per offrirti un supporto completo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Pronto a Prenderti Cura di Te?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Prenota la tua prima visita su MioDottore e inizia il tuo percorso verso il benessere
          </p>
          <a href="https://www.miodottore.it/leonardo-michelin/osteopata/gorizia" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary" className="group">
              Prenota su MioDottore
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
