"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { ComingSoonPlaceholder } from "./ComingSoonPlaceholder";
import { DeviceMockup } from "./DeviceMockup";
import { LayeredPhoneMockups } from "./LayeredPhoneMockups";

interface Project {
  id: string;
  title: string;
  category: "Mobile App" | "Website" | "Open Source Library";
  description: string;
  image: string;
  tags: string[];
  status: "Live" | "In Development";
  links?: {
    live?: string;
    github?: string;
  };
}

export function WorksGrid() {
  const projects: Project[] = [
    {
      id: "tajji",
      title: "Tajji Website",
      category: "Website",
      description:
        "Complete real estate platform connecting landlords and renters across Kenya.",
      image: "/projects/tajji.png",
      tags: ["SvelteKit", "TypeScript", "Tailwind CSS"],
      status: "Live",
      links: {
        live: "https://tajji.io",
      },
    },

    {
      id: "verse-app",
      title: "Verse & Voice App",
      category: "Mobile App",
      description:
        "Verse & Voice is a Bible app featuring personalized emotional devotions. Hear scripture read aloud, and access guided prayers and emotion-specific devotions customized with your name.",
      image: "/projects/vnv-app/homescreen.png",
      tags: ["Kotlin Multiplatform", "Compose Multiplatform", "3D Rendering"],
      status: "Live",
      links: {
        live: "https://verseandvoice.app",
      },
    },

    {
      id: "verse-website",
      title: "Verse & Voice Website",
      category: "Website",
      description:
        "Experience Scripture with personalized 3D videos and AI-generated narration.",
      image: "/projects/verse.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      status: "Live",
      links: {
        live: "https://verseandvoice.app",
      },
    },

    {
      id: "givetobetterlives",
      title: "Give To Better Lives",
      category: "Website",
      description:
        "Charity website for a Kenya-based nonprofit focused on providing clothing, shoes, and learning materials to families in need.",
      image: "/projects/gtbl.png",
      tags: ["SvelteKit", "TypeScript", "Tailwind CSS"],
      status: "Live",
      links: {
        live: "https://givetobetterlives.com",
      },
    },
    {
      id: "bomaos",
      title: "BomaOS",
      category: "Mobile App",
      description:
        "Property management app for landlords — structured operations, rent tracking, work orders and tenant communications.",
      image: "placeholder",
      tags: ["Kotlin Multiplatform", "Compose Multiplatform", "Android", "iOS"],
      status: "Live",
    },
    {
      id: "jirani",
      title: "Jirani",
      category: "Mobile App",
      description:
        "Tenant app for managing leases and tenancy experiences all in one place.",
      image: "placeholder",
      tags: ["Kotlin Multiplatform", "Compose Multiplatform", "Android", "iOS"],
      status: "Live",
    },
    {
      id: "fleurdah-website",
      title: "Fleurdah Website",
      category: "Website",
      description:
        "AI-powered nail design platform with 3D visualization and booking system.",
      image: "/projects/fleurdah.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      status: "Live",
      links: {
        live: "https://fleurdah.com",
      },
    },
    {
      id: "fleurdah-app",
      title: "Fleurdah Mobile App",
      category: "Mobile App",
      description:
        "Design and try on nails in 3D, powered by AI. Track your style and book appointments.",
      image: "placeholder",
      tags: ["Kotlin Multiplatform", "Compose Multiplatform", "AI/ML"],
      status: "In Development",
    },

    {
      id: "cityhomes",
      title: "City Homes Kenya",
      category: "Website",
      description:
        "Luxury travel and accommodation platform with Airbnb-style bookings and curated tours.",
      image: "/projects/cityhomes.png",
      tags: ["SvelteKit", "TypeScript", "Tailwind CSS"],
      status: "Live",
      links: {
        live: "https://cityhomeskenya.com",
      },
    },
    {
      id: "mylifepool",
      title: "MyLifePool",
      category: "Mobile App",
      description:
        "Community support platform rebuilt from the ground up for scalability and UK-wide expansion.",
      image: "placeholder",
      tags: ["Kotlin Multiplatform", "Compose Multiplatform", "CI/CD"],
      status: "Live",
    },
    {
      id: "glossarist",
      title: "Glossarist",
      category: "Open Source Library",
      description:
        "Type-safe i18n library for Kotlin Multiplatform with automatic validation and clean API.",
      image: "/projects/glossarist.png",
      tags: ["Kotlin", "KMP", "Library", "Open Source"],
      status: "In Development",
      links: {
        github: "https://github.com/lazarusmugo/Glossarist",
      },
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={`/works/${project.id}`}>
            <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-main-purple transition-all duration-300 hover:shadow-xl cursor-pointer">
              {/* Image — reduced height */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 flex items-center justify-center">
                {project.image === "placeholder" ? (
                  <ComingSoonPlaceholder />
                ) : project.id === "verse-app" ? (
                  <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500 py-4">
                    <div className="scale-[0.65] origin-center w-full h-full">
                      <LayeredPhoneMockups
                        screenshots={[
                          "/projects/vnv-app/daily-prayers.png",
                          "/projects/vnv-app/emotion-prayer.png",
                          "/projects/vnv-app/homescreen.png",
                        ]}
                      />
                    </div>
                  </div>
                ) : project.category === "Mobile App" ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 group-hover:scale-105 transition-transform duration-500 py-4">
                    <div className="w-[180px] h-[390px] scale-[0.65] origin-center flex items-center justify-center">
                      <DeviceMockup
                        screenshotUrl={project.image}
                        placeholderText={project.title}
                        className="w-full"
                      />
                    </div>
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "Live"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-semibold text-main-purple uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-2 group-hover:text-main-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                {project.links && (
                  <div className="flex gap-3 pt-4 border-t border-slate-100">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-slate-600 hover:text-main-purple transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-slate-600 hover:text-main-purple transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
