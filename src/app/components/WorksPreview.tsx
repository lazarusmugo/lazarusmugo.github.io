// components/WorksPreview.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  type: "web" | "mobile";
}

export function WorksPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "TAJJI - Boma & Jirani",
      category: "Web & Mobile Development",
      description:
        "Complete real estate platform. Boma for property management, Jirani for renters.",
      image: "/projects/tajji.png",
      type: "mobile",
    },
    {
      id: 2,
      title: "Fleurdah",
      category: "Web & Mobile Development",
      description:
        "AI-powered nail design app with 3D visualization. Design, try on, and share nail art. Includes client management for nail techs.",
      image: "/projects/fleurdah.png",
      type: "mobile",
    },
    // {
    //   id: 3,
    //   title: "Verse & Voice",
    //   category: "Web & Mobile Development",
    //   description:
    //     "Experience Scripture like never before. Jesus speaks your name with personalized 3D videos, emotional support, and daily prayers.",
    //   image: "/projects/verse.png",
    //   type: "mobile",
    // },
    {
      id: 4,
      title: "City Homes Kenya",
      category: "Web Development",
      description:
        "Luxury travel and accommodation platform. Airbnb-style bookings with curated tours and premium destinations.",
      image: "/projects/cityhomes.png",
      type: "web",
    },
  ];

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Auto-play — start on mount, clear on unmount
  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [projects.length]);

  // Touch swipe handlers — pause autoplay while user is swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    stopAutoPlay();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) >= 40) {
      if (delta > 0) {
        setActiveIndex((prev) => (prev + 1) % projects.length);
      } else {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
      }
    }
    touchStartX.current = null;
    // Resume autoplay 1s after the swipe settles
    setTimeout(startAutoPlay, 1000);
  };

  return (
    <section className="py-20 px-4" style={{ background: "#F7F5F0" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium border border-purple-200 text-main-purple mb-4">
                Portfolio
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4"
            >
              Selected Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 max-w-2xl"
            >
              Real projects, real impact. From cross-platform mobile apps to
              modern web experiences.
            </motion.p>
          </div>

          <Link href="/works">
            <motion.button
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-main-purple border-2 border-black text-black hover:bg-black hover:text-white rounded-full font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View all work
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>

        {/* Slider */}
        <div className="relative">
          <div
            className="overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {projects.map((project) => (
                <div key={project.id} className="min-w-full px-2">
                  <div className="relative rounded-2xl overflow-hidden" style={{ background: "#F7F5F0" }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                      priority={project.id === 1}
                    />

                    {/* Bottom gradient for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Category + title only */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 rounded-full text-xs md:text-sm font-semibold mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-main-purple"
                    : "w-2 bg-main-purple/30 hover:bg-main-purple/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile View All Button */}
        <Link href="/works">
          <motion.button
            className="md:hidden w-full mt-8 flex items-center justify-center gap-2 px-6 py-4 bg-main-purple text-black rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View all work
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </Link>
      </div>
    </section>
  );
}