import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const Contatti = () => {

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Contattaci</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Siamo qui per rispondere a tutte le tue domande. Compila il form o contattaci 
              direttamente per prenotare la tua visita.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Informazioni di Contatto</h2>
                
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <CardTitle className="text-lg">Sede Gorizia</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-medium mb-2">
                    Via Antonio Canova 9, Gorizia
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Via+Antonio+Canova+9+Gorizia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm inline-block"
                  >
                    Visualizza su Google Maps
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <CardTitle className="text-lg">Sede Monfalcone</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-medium mb-2">
                    Via Roma 45, Monfalcone
                  </p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Via+Roma+45+Monfalcone" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm inline-block"
                  >
                    Visualizza su Google Maps
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Phone className="text-secondary" size={20} />
                    </div>
                    <CardTitle className="text-lg">Telefono</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href="tel:+390481375368" className="text-muted-foreground font-medium hover:text-primary transition-colors block mb-2">
                    0481 375368
                  </a>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-hero text-white">
              <CardContent className="p-8 text-center">
                <Mail className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-2">Email</h3>
                <a href="mailto:info@piucura.it" className="text-lg mb-6 block hover:underline">
                  info@piucura.it
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Prenota la Tua Visita</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Utilizza il nostro sistema di prenotazione online su MioDottore per scegliere data e orario più comodi per te
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

export default Contatti;
