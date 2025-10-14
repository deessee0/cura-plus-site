import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Award, Clock, Sparkles, Star, Quote } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-osteopathy.jpg";
const Home = () => {
  const services = [{
    icon: Heart,
    title: "Osteopatia Strutturale",
    description: "Manipolazione vertebrale e riequilibrio posturale per artrosi, discopatia e dolori articolari.",
    link: "/osteopatia-strutturale"
  }, {
    icon: Users,
    title: "Osteopatia Viscerale",
    description: "Manipolazione viscerale per disturbi digestivi e dolore addominale.",
    link: "/osteopatia-viscerale"
  }, {
    icon: Award,
    title: "Osteopatia Cranio-Sacrale",
    description: "Terapia cranio sacrale per cefalee, coccigodinia e disturbi del sonno.",
    link: "/osteopatia-cranio-sacrale"
  }, {
    icon: Sparkles,
    title: "Osteopatia Pediatrica",
    description: "Trattamenti delicati per neonati e bambini.",
    link: "/osteopatia-pediatrica"
  }];
  return <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <img src={heroImage} alt="Studio di osteopatia PiùCura Roma - Trattamenti osteopatici professionali" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Il Tuo Benessere è la Nostra Priorità
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">Studio di osteopatia a Monfalcone e Gorizia specializzato in trattamenti personalizzati per ritrovare equilibrio e salute attraverso tecniche manuali efficaci.</p>
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
            {services.map((service, index) => <ServiceCard key={index} {...service} />)}
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Cosa Dicono i Nostri Pazienti</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              58 recensioni verificate su MioDottore
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
              <span className="ml-2 text-lg font-semibold">5.0</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            <div className="bg-card border border-border rounded-lg p-6 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-muted-foreground mb-4">
                "Mi sono recata dal dottor Michelin per dolori cervicali che non riuscivo a risolvere in alcun modo. Ho trovato un medico attento, gentile, professionale e super preparato che è riuscito, in un paio di sedute, a spiegare la causa del problema e a risolverlo. Super consigliato!"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold">Elisa V.</p>
                <p className="text-sm text-muted-foreground">Visita osteopatica</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-muted-foreground mb-4">
                "Il dottor Michelin oltre ad essere molto professionale ed attento, è anche molto empatico e mette a proprio agio i pazienti, anche più piccolini. Il trattamento è stato efficace"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold">Federica</p>
                <p className="text-sm text-muted-foreground">Osteopatia pediatrica</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-muted-foreground mb-4">
                "Sono suo cliente da anni e ogni volta che ho un problema o dolore me lo risolve. Lo consiglio a tutti"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold">D.C.</p>
                <p className="text-sm text-muted-foreground">Visita di controllo</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-muted-foreground mb-4">
                "Molto attento dolce e calmo, scrupoloso nelle spiegazioni. Consigliatissimo!!!"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold">Camilla</p>
                <p className="text-sm text-muted-foreground">Osteopatia pediatrica</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-muted-foreground mb-4">
                "Il Dottor Michelin è molto attento, disponibile e cordiale. Spiega in maniera chiara ed esaustiva quello che è l&apos;osteopatia e tutto ciò che andrà a fare per aiutare i pazienti a stare bene. Lo consiglio a tutti."
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold">Giovanna D&apos;Orlandi</p>
                <p className="text-sm text-muted-foreground">Visita osteopatica</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-muted-foreground mb-4">
                "Professionista sempre al top! Serietà e competenza."
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold">Michele</p>
                <p className="text-sm text-muted-foreground">Visita osteopatica</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="https://www.miodottore.it/leonardo-michelin/osteopata/gorizia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">
              Leggi tutte le 58 recensioni su MioDottore
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Perché Scegliere Leonardo Michelin</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Formazione Internazionale</h3>
                  <p className="text-muted-foreground">
                    Formazione presso prestigiose istituzioni: I.E.M.O. Genova, C.E.E.S.O. Parigi e S.I.O.P. Firenze. Competenze all&apos;avanguardia validate a livello europeo.
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
                  <h3 className="text-xl font-semibold mb-2">Esperienza Ospedaliera</h3>
                  <p className="text-muted-foreground">
                    Tirocini presso Ospedale Meyer, Ospedale Rizzoli e C.E.E.S.O. Clinique Ostéopatique. Esperienza clinica rigorosa e multidisciplinare.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Sparkles className="text-accent" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ricerca Scientifica</h3>
                  <p className="text-muted-foreground">
                    Autore di studi sul sistema glinfatico e glaucoma presentati a congressi nazionali, europei e mondiali. Approccio basato su evidenze scientifiche.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">58 Recensioni Verificate</h3>
                  <p className="text-muted-foreground">
                    Valutazione 5.0 stelle su MioDottore. Pazienti soddisfatti testimoniano professionalità, empatia e risultati concreti.
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
    </div>;
};
export default Home;