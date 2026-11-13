import { Hero } from "./components/Hero";
import { Navbar } from "./components/NavBar";
import { Services } from "./components/Services";
import { ProjectFAQs } from "./components/ProjectFAQs";
import { WorksPreview } from "./components/WorksPreview";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div id="hero" className="scroll-mt-24">
          <Hero />
        </div>
        <div id="works" className="scroll-mt-24">
          <WorksPreview />
        </div>
        <div id="about" className="scroll-mt-24">
          <Services />
        </div>
        <div id="testimonials" className="scroll-mt-24">
          <Testimonials />
        </div>
        <ProjectFAQs />
        <div id="contact" className="scroll-mt-24">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
