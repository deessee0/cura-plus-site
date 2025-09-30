import { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
import { getBlogPosts, BlogPost } from "@/lib/mockBlogData";
import { Loader2 } from "lucide-react";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This will be replaced with actual API call to CMS (Strapi/Contentful)
    const loadPosts = async () => {
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error loading blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Approfondimenti, consigli e novità dal mondo dell'osteopatia. 
              Scopri come prenderti cura del tuo benessere naturalmente.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          )}

          {!loading && posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Nessun articolo disponibile al momento. Torna presto per nuovi contenuti!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
