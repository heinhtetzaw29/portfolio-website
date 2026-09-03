import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
