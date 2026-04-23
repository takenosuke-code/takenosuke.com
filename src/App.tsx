import { Analytics } from "@vercel/analytics/react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/sections/Hero";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] relative">
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
