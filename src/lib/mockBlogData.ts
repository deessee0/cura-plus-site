// Mock data structure ready for CMS integration (Strapi/Contentful)
// Replace this with actual API calls when CMS is connected

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "I Benefici dell'Osteopatia per il Mal di Schiena Cronico",
    excerpt: "Scopri come l'osteopatia può aiutare a ridurre il dolore lombare cronico attraverso tecniche manuali mirate e un approccio olistico al benessere.",
    content: `
      <p>Il mal di schiena cronico è una delle problematiche più comuni nella popolazione moderna. Stress, posture scorrette e vita sedentaria contribuiscono a creare tensioni e disfunzioni che, se non trattate, possono diventare persistenti.</p>
      
      <h2>Cosa Causa il Mal di Schiena Cronico?</h2>
      <p>Le cause possono essere molteplici: problemi posturali, tensioni muscolari, disfunzioni articolari, problemi viscerali o stress emotivo. L'osteopatia considera tutti questi aspetti per trovare la causa primaria del dolore.</p>
      
      <h2>Come Aiuta l'Osteopatia</h2>
      <p>L'osteopata utilizza tecniche manuali dolci per:</p>
      <ul>
        <li>Ripristinare la mobilità delle vertebre</li>
        <li>Ridurre le tensioni muscolari</li>
        <li>Migliorare la circolazione locale</li>
        <li>Riequilibrare la postura globale</li>
      </ul>
      
      <h2>Risultati Attesi</h2>
      <p>Molti pazienti riportano un miglioramento significativo già dopo le prime sedute. L'approccio personalizzato permette di trattare non solo il sintomo, ma la causa alla radice del problema.</p>
      
      <p>Se soffri di mal di schiena cronico, contattaci per una valutazione gratuita.</p>
    `,
    author: "Dott.ssa Maria Rossi",
    date: "15 Marzo 2024",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=500&fit=crop",
    category: "Osteopatia Strutturale",
    readTime: "5 min",
  },
  {
    id: "2",
    title: "Osteopatia Pediatrica: Quando Portare il Neonato dall'Osteopata",
    excerpt: "Una guida completa sui benefici dell'osteopatia per neonati e bambini, e quali segnali indicano che potrebbe essere utile una visita osteopatica.",
    content: `
      <p>L'osteopatia pediatrica è una specializzazione che si occupa del benessere dei più piccoli, dal neonato all'adolescente. Le tecniche utilizzate sono estremamente delicate e sicure.</p>
      
      <h2>Quando è Consigliata?</h2>
      <p>L'osteopatia pediatrica può aiutare in caso di:</p>
      <ul>
        <li>Coliche infantili persistenti</li>
        <li>Difficoltà nell'allattamento</li>
        <li>Plagiocefalia (testa piatta)</li>
        <li>Reflusso gastroesofageo</li>
        <li>Disturbi del sonno</li>
        <li>Asimmetrie posturali</li>
      </ul>
      
      <h2>Come si Svolge la Seduta</h2>
      <p>La seduta inizia sempre con un colloquio con i genitori per comprendere la storia del bambino, comprese eventuali complicazioni durante il parto. Il trattamento è gentile e rispettoso dei tempi del bambino.</p>
      
      <h2>Sicurezza e Benefici</h2>
      <p>L'osteopatia pediatrica è riconosciuta come sicura ed efficace. Molti disturbi dei primi mesi di vita possono essere alleviati significativamente con poche sedute.</p>
    `,
    author: "Dott.ssa Maria Rossi",
    date: "8 Marzo 2024",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=500&fit=crop",
    category: "Osteopatia Pediatrica",
    readTime: "6 min",
  },
  {
    id: "3",
    title: "Prevenire gli Infortuni Sportivi con l'Osteopatia",
    excerpt: "Come l'osteopatia può aiutare gli atleti a prevenire infortuni, migliorare le performance e recuperare più velocemente dopo l'allenamento.",
    content: `
      <p>Gli atleti, sia professionisti che amatoriali, sottopongono il corpo a stress intensi. L'osteopatia sportiva lavora sulla prevenzione degli infortuni e sull'ottimizzazione delle performance.</p>
      
      <h2>Valutazione Posturale e Funzionale</h2>
      <p>L'osteopata sportivo valuta la biomeccanica del movimento specifico per lo sport praticato, identificando eventuali squilibri o limitazioni che potrebbero portare a infortuni.</p>
      
      <h2>Benefici per l'Atleta</h2>
      <ul>
        <li>Prevenzione di infortuni da sovraccarico</li>
        <li>Miglioramento della mobilità articolare</li>
        <li>Recupero più rapido dopo l'allenamento</li>
        <li>Ottimizzazione della performance</li>
        <li>Gestione del dolore senza farmaci</li>
      </ul>
      
      <h2>Quando Rivolgersi all'Osteopata Sportivo</h2>
      <p>Idealmente, l'atleta dovrebbe fare visite preventive regolari, non solo quando appare il dolore. Un corpo bilanciato performa meglio e si infortuna meno.</p>
      
      <p>Collaboriamo con atleti di diverse discipline: running, ciclismo, calcio, tennis, pallavolo e molte altre.</p>
    `,
    author: "Dott. Marco Bianchi",
    date: "1 Marzo 2024",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
    category: "Osteopatia Sportiva",
    readTime: "7 min",
  },
  {
    id: "4",
    title: "Stress e Tensioni: Come l'Osteopatia Può Aiutarti",
    excerpt: "Scopri la connessione tra stress emotivo e tensioni fisiche, e come l'osteopatia cranio-sacrale può aiutare a ritrovare l'equilibrio.",
    content: `
      <p>Lo stress emotivo ha sempre un riflesso sul corpo. Tensioni al collo, cefalee, disturbi digestivi e problemi del sonno sono spesso manifestazioni fisiche di uno stato di tensione psicologica.</p>
      
      <h2>La Connessione Mente-Corpo</h2>
      <p>L'osteopatia riconosce l'unità tra corpo e mente. Quando siamo stressati, il sistema nervoso simpatico rimane in uno stato di allerta costante, causando tensioni muscolari croniche.</p>
      
      <h2>Osteopatia Cranio-Sacrale per lo Stress</h2>
      <p>Le tecniche cranio-sacrali sono particolarmente efficaci per:</p>
      <ul>
        <li>Ridurre le tensioni del sistema nervoso</li>
        <li>Migliorare la qualità del sonno</li>
        <li>Alleviare cefalee da tensione</li>
        <li>Promuovere un profondo rilassamento</li>
      </ul>
      
      <h2>Un Approccio Globale</h2>
      <p>Oltre al trattamento, l'osteopata può consigliarti esercizi di respirazione e tecniche di gestione dello stress da integrare nella vita quotidiana.</p>
      
      <p>Se ti senti sopraffatto dallo stress e noti tensioni croniche, l'osteopatia può essere un valido supporto nel tuo percorso di benessere.</p>
    `,
    author: "Dott.ssa Maria Rossi",
    date: "22 Febbraio 2024",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop",
    category: "Benessere",
    readTime: "5 min",
  },
];

// Function to simulate API call - replace with actual API when CMS is integrated
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return blogPosts;
};

export const getBlogPost = async (id: string): Promise<BlogPost | undefined> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return blogPosts.find(post => post.id === id);
};
