import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Work from "./components/Work";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useReveal } from "./hooks/useReveal";
import { LanguageProvider } from "./hooks/useLanguage";

export default function App() {
  useReveal();

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Process />
          <Work />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
