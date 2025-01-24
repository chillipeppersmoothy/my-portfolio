import Projects from "@/components/Projects";
import GetInTouch from "@/components/GetInTouch";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";
import TechnicalSkills from "@/components/TechnicalSkills";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ParticleCanvas />
      <Header />

      <Hero />

      <Experience />

      <Projects />

      <TechnicalSkills />

      <Education />

      <GetInTouch />

      <Footer />
    </main>
  );
}
