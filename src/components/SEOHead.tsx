import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export const SEOHead = ({ 
  title = "PiùCura - Studio di Osteopatia a Gorizia e Monfalcone | Trattamenti Personalizzati",
  description = "Piucura è uno studio di osteopatia a Monfalcone e Gorizia del Dott. Leonardo Michelin, osteopata, che riceve su appuntamento.",
  keywords = "osteopatia gorizia, osteopata gorizia, osteopatia monfalcone, osteopata monfalcone, mal di schiena gorizia, dolori articolari, osteopatia pediatrica friuli, osteopatia strutturale, osteopatia viscerale, osteopatia cranio sacrale, leonardo michelin osteopata",
  canonical = "https://piucura.it",
  ogImage = "https://storage.googleapis.com/gpt-engineer-file-uploads/8o17uCneSvaHaLU7T5ENFt1MQ363/social-images/social-1760360573610-ChatGPT Image Oct 13, 2025, 03_02_48 PM.png"
}: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
