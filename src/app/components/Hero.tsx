"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center space-y-8">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium text-slate-900 leading-tight"
          >
            Hey, I'm Mugo
          </motion.h1>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed space-y-6"
          >
            <p>
              A Mobile and Frontend Engineer who architects cross-platform
              applications and modern web experiences. My work centers on Kotlin
              Multiplatform, Compose Multiplatform, and the modern web stack —
              building systems that are maintainable, scalable, and actually
              ship.
            </p>

            <p>
              Currently at TAJJI, I build internal libraries that power
              production apps across Android, iOS, and desktop. I've architected
              platform-agnostic SDKs, established complete DevOps pipelines, and
              led teams in shipping cross-platform applications that users rely
              on daily.
            </p>

            <p>If you're building something interesting, let's talk.</p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-6"
          >
            <motion.button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-main-purple text-slate-900 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
