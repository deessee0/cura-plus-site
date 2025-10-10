import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import Servizi from "./pages/Servizi";
import OsteopatiaStrutturale from "./pages/OsteopatiaStrutturale";
import OsteopatiaViscerale from "./pages/OsteopatiaViscerale";
import OsteopatiaCranioSacrale from "./pages/OsteopatiaCranioSacrale";
import OsteopatiaPediatrica from "./pages/OsteopatiaPediatrica";
import OsteopatiaSportiva from "./pages/OsteopatiaSportiva";
import TrattamentiAnziani from "./pages/TrattamentiAnziani";
import YogaTerapeutico from "./pages/YogaTerapeutico";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import Contatti from "./pages/Contatti";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chi-siamo" element={<ChiSiamo />} />
              <Route path="/servizi" element={<Servizi />} />
              <Route path="/osteopatia-strutturale" element={<OsteopatiaStrutturale />} />
              <Route path="/osteopatia-viscerale" element={<OsteopatiaViscerale />} />
              <Route path="/osteopatia-cranio-sacrale" element={<OsteopatiaCranioSacrale />} />
              <Route path="/osteopatia-pediatrica" element={<OsteopatiaPediatrica />} />
              <Route path="/osteopatia-sportiva" element={<OsteopatiaSportiva />} />
              <Route path="/trattamenti-anziani" element={<TrattamentiAnziani />} />
              <Route path="/yoga-terapeutico" element={<YogaTerapeutico />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogArticle />} />
              <Route path="/contatti" element={<Contatti />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
