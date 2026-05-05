"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  // {
  //   id: 2,
  //   name: "Chris Smith Dunn",
  //   role: "Director",
  //   company: "MyLifePool",
  //   content:
  //     "Working with Lazarus was a game-changer for our platform. He completely modernized our mobile stack from legacy Ionic to Kotlin Multiplatform, setting us up for UK-wide expansion. His architectural decisions and DevOps expertise saved us months of development time.",
  //   rating: 5,
  // },
  {
    id: 3,
    name: "Emmanuel",
    role: "Founder",
    company: "City Homes Kenya",
    content:
      "Lazarus delivered an exceptional platform that beautifully showcases our luxury properties. His frontend work with SvelteKit resulted in a fast, elegant website that our clients love. He's professional, creative, and consistently delivers beyond expectations.",
    rating: 5,
  },
  {
    id: 4,
    name: "Arnold Opiyo",
    role: "Data Engineer",
    company: "Adanian Labs",
    content:
      "Mugo is one of the best frontend developers I've worked with. His code is clean, maintainable, and always well-documented. The collaboration was seamless—he understands the full stack and makes integration effortless. I'd work with him again in a heartbeat.",
    rating: 5,
  },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);
  const [duration, setDuration] = useState(80);

  // Calculate the exact pixel width of one set so the loop is seamless,
  // and slow down on mobile so cards are actually readable.
  useEffect(() => {
    function measure() {
      const isMobile = window.innerWidth < 768;
      // card width + gap: mobile=288+24=312, desktop=500+24=524
      const cardW = isMobile ? 288 : 500;
      const gap = 24;
      const oneSet = testimonials.length * (cardW + gap);
      setTranslateX(-oneSet);
      // mobile: ~40s, desktop: ~80s
      setDuration(isMobile ? 40 : 80);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section className="py-20 px-4 bg-linear-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium border border-purple-200 text-main-purple mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            What people say about me
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here are a few lines from people I've worked with
          </p>
        </motion.div>
      </div>

      <div className="relative" ref={trackRef}>
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, translateX] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration,
              ease: "linear",
            },
          }}
        >
          {/* Three copies for a seamless loop */}
          {[...testimonials, ...testimonials, ...testimonials].map(
            (testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                // w-72 on mobile (288px), w-[500px] on desktop
                className="shrink-0 w-72 md:w-[500px]"
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-slate-700 mb-6 leading-relaxed text-sm md:text-base">
                    "{testimonial.content}"
                  </p>

                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600">
                      {testimonial.role}
                    </p>
                    <p className="text-xs md:text-sm text-main-purple font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}