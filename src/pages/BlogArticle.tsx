import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogPost, BlogPost } from "@/lib/mockBlogData";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const BlogArticle = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This will be replaced with actual API call to CMS (Strapi/Contentful)
    const loadPost = async () => {
      if (!id) return;
      
      try {
        const data = await getBlogPost(id);
        setPost(data || null);
      } catch (error) {
        console.error("Error loading blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[600px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Articolo Non Trovato</h1>
        <p className="text-xl text-muted-foreground mb-8">
          L'articolo che stai cercando non esiste o è stato rimosso.
        </p>
        <Link to="/blog">
          <Button>
            <ArrowLeft className="mr-2" size={20} />
            Torna al Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <article>
      {/* Hero Image */}
      <div className="w-full h-[400px] md:h-[500px] relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto -mt-20 relative z-10">
          {/* Back Button */}
          <Link to="/blog" className="inline-block mb-8">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2" size={16} />
              Torna al Blog
            </Button>
          </Link>

          {/* Article Header */}
          <div className="bg-card rounded-lg shadow-soft p-8 md:p-12 mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime} di lettura</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none mb-20"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              lineHeight: "1.8",
            }}
          />

          {/* CTA Section */}
          <div className="bg-gradient-hero text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Hai Bisogno di una Consulenza?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Contattaci per prenotare la tua visita osteopatica
            </p>
            <Link to="/contatti">
              <Button size="lg" variant="secondary">
                Prenota Ora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogArticle;
