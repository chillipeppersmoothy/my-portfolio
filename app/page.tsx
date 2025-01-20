import Projects from "@/components/Projects";
import GetInTouch from "@/components/GetInTouch";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticleCanvas from "../components/ParticleCanvas";

export default function Home() {
  return (
    <main className="min-h-screen">
      
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Experience Timeline */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <GetInTouch />

      <Footer />
      <ParticleCanvas />
    </main>
  );
}
