"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";

export function FadeInText() {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const text =
    "I build websites and mobile apps that actually work. No fluff, no filler—just clean design, fast code, and solutions that help your business grow. Let's make something great together.";

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
            href="/Lazarus_Mugo.pdf"
            download="Lazarus_Mugo_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-main-purple text-slate-900 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
