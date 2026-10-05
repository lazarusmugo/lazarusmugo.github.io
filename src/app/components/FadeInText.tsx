"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";

export function FadeInText() {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const text =
    "I design, build, and ship mobile products from architecture to app store release. I combine clean Kotlin and reliable systems with a background in frontend and UI and UX design, giving me a keen eye for interfaces that feel polished and intuitive.";

  const words = text.split(" ");

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prev) => {
        if (prev < words.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="py-4 text-slate-600">How I Can Help</p>

        <p className="text-start text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
          {words.map((word, index) => (
            <motion.span
              key={index}
              className={`inline-block mr-3 md:mr-4 transition-all duration-500 ${
                index <= highlightedIndex
                  ? "text-slate-900 opacity-100"
                  : "text-slate-300 opacity-40"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </p>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12"
        >
          <a
            href="/Lazarus Mugo Mobile Engineer Resume.pdf"
            download="Lazarus Mugo Mobile Engineer Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-main-purple px-6 py-4 text-center text-sm font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:bg-black hover:text-white hover:shadow-xl md:px-8 md:text-base"
          >
            <Download className="w-5 h-5" />
            Download My Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
