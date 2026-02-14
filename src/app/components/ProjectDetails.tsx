"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { ComingSoonPlaceholder } from "./ComingSoonPlaceholder";

interface ProjectDetailsProps {
  project: {
    title: string;
    category: string;
    description: string;
    longDescription: string;
    images: string[];
    tech: {
      [key: string]: string[];
    };
    status: string;
    links?: {
      live?: string;
      github?: string;
    };
  };
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  };

  return (
    <main className="pt-32 px-4 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <Link href="/works">
          <motion.button
            className="flex items-center gap-2 text-slate-600 hover:text-main-purple transition-colors mb-8"
            whileHover={{ x: -4 }}
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Works
          </motion.button>
        </Link>
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-purple-100 text-main-purple rounded-full text-sm font-semibold">
              {project.category}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                project.status === "Live"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {project.status}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-slate-600 mb-6">{project.description}</p>

          {/* Links */}
          {project.links && (
            <div className="flex gap-4">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-main-purple text-black rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit Live Site
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-slate-900 text-slate-900 rounded-full font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              )}
            </div>
          )}
        </div>
        {/* Image Gallery */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[16/10]">
            {project.images[currentImageIndex] === "placeholder" ? (
              <ComingSoonPlaceholder />
            ) : (
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
            )}

            {/* Navigation arrows - only show if more than 1 image and not all placeholders */}
            {project.images.length > 1 &&
              project.images[0] !== "placeholder" && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

            {/* Image counter - only show if not placeholder */}
            {project.images[0] !== "placeholder" &&
              project.images.length > 1 && (
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 text-white rounded-full text-sm">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              )}
          </div>

          {/* Thumbnail navigation - only show if not placeholder */}
          {project.images.length > 1 && project.images[0] !== "placeholder" && (
            <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex
                      ? "border-main-purple"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              About This Project
            </h2>
            <div className="prose prose-slate max-w-none">
              {project.longDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-slate-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Tech Stack Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-50 rounded-2xl p-6 sticky top-32">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Tech Stack
              </h3>
              <div className="space-y-6">
                {Object.entries(project.tech).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-white text-slate-700 rounded-lg text-sm border border-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Related Projects CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Interested in more projects?
          </h3>
          <Link href="/works">
            <motion.button
              className="px-8 py-4 bg-main-purple text-black rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Works
            </motion.button>
          </Link>
        </div>
      </div>
    </main>
  );
}
