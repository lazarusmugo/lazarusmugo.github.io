// components/WorksPreview.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
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
    {
      id: 3,
      title: "Verse & Voice",
      category: "Web & Mobile Development",
      description:
        "Experience Scripture like never before. Jesus speaks your name with personalized 3D videos, emotional support, and daily prayers.",
      image: "/projects/verse.png",
      type: "mobile",
    },
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

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section className="py-20 px-4 bg-purple-50/30">
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
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {projects.map((project) => (
                <div key={project.id} className="min-w-full px-2">
                  <div className="relative bg-slate-100 rounded-2xl overflow-hidden aspect-[16/10] group">
                    {/* Project Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority={project.id === 1}
                      />
                    </div>

                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Hover overlay with purple tint */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <span className="inline-block px-3 py-1 bg-main-purple text-black rounded-full text-sm font-semibold mb-3">
                          {project.category}
                        </span>
                        <h3 className="text-3xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-white/90 mb-4">
                          {project.description}
                        </p>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-main-purple hover:text-purple-light transition-colors font-semibold"
                          >
                            View project
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Info (Always Visible) */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 group-hover:opacity-0 transition-opacity duration-300">
                      <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 rounded-full text-sm font-semibold mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white">
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
