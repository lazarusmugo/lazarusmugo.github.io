import { Hero } from "./components/Hero";
import { Navbar } from "./components/NavBar";
import { ScrollingRibbon } from "./components/ScrollingRibbon";
import { FadeInText } from "./components/FadeInText";
import { WorksPreview } from "./components/WorksPreview";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <FadeInText />
        <ScrollingRibbon />
      </div>
      <div id="works">
        <WorksPreview />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}
