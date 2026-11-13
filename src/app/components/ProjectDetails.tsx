"use client";

import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "../lib/projects";
import { DeviceMockup } from "./DeviceMockup";

export function ProjectDetails({ project }: { project: Project }) {
  const [currentImage, setCurrentImage] = useState(0);
  const isMobileApp = project.category === "Mobile App";
  const { images, links } = project;
  const imagesPerPage = isMobileApp ? 2 : 1;
  const lastPage = Math.floor((images.length - 1) / imagesPerPage) * imagesPerPage;
  const productLinks = [
    { href: links?.appStore, label: "View on the App Store", icon: ExternalLink },
    { href: links?.playStore, label: "View on Google Play", icon: ExternalLink },
    { href: links?.live, label: "Visit website", icon: ExternalLink },
    { href: links?.github, label: "View on GitHub", icon: Github },
  ];

  return (
    <main className="px-6 pb-20 pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/works"
          className="mb-8 inline-flex items-center gap-2 text-slate-700 hover:underline"
        >
          <ChevronLeft aria-hidden="true" className="size-5" />
          Back to work
        </Link>

        <header className="mb-10">
          <p className="font-semibold text-[#555291]">{project.category}</p>
          <h1 className="mb-3 mt-2 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            {project.title}
          </h1>
          <p className="max-w-3xl text-xl text-slate-700">{project.description}</p>
          {project.availability && (
            <p className="mt-3 text-sm text-slate-600">{project.availability}</p>
          )}
          <div className="mt-5 flex flex-wrap gap-3">
            {productLinks.map(({ href, label, icon: Icon }) =>
              href && (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[#f8f7fd] px-4 py-2.5 text-sm font-semibold text-slate-900 hover:border-purple-dark"
                >
                  <Icon aria-hidden="true" className="size-4" />
                  {label}
                </a>
              ),
            )}
          </div>
        </header>

        {images.length > 0 && (
          <section aria-label={`${project.title} screenshots`} className="mb-12">
            {project.screenshotNote && (
              <p className="mb-3 text-sm text-slate-600">{project.screenshotNote}</p>
            )}
            {isMobileApp ? (
              <div className="flex justify-center gap-3 rounded-2xl bg-[#f8f7fd] px-4 py-6 sm:gap-8">
                {images.slice(currentImage, currentImage + imagesPerPage).map((image, offset) => (
                  <DeviceMockup
                    key={image}
                    screenshotUrl={image}
                    placeholderText={project.imageDescriptions?.[image] ?? `${project.title} app screen ${currentImage + offset + 1}`}
                    className="w-full min-w-0 max-w-[230px]"
                  />
                ))}
              </div>
            ) : (
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={images[currentImage]}
                  alt={`${project.title} screen ${currentImage + 1}`}
                  fill
                  sizes="(min-width: 1200px) 1152px, 100vw"
                  className="object-contain"
                />
              </div>
            )}

            {images.length > 1 && (
              <div className="mt-4 flex items-center gap-2">
                {images.length > imagesPerPage && (
                  <button
                    type="button"
                    aria-label="Previous screenshots"
                    onClick={() => setCurrentImage((index) => index === 0 ? lastPage : index - imagesPerPage)}
                    className="shrink-0 rounded-full border border-slate-200 p-2 text-slate-700 hover:bg-slate-100"
                  >
                    <ChevronLeft aria-hidden="true" className="size-5" />
                  </button>
                )}
                <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto px-1 py-1">
                  {images.map((image, index) => (
                    <button
                      type="button"
                      key={image}
                      aria-label={project.imageDescriptions?.[image] ? `Show ${project.imageDescriptions[image]}` : `Show screenshot ${index + 1}`}
                      aria-pressed={index >= currentImage && index < currentImage + imagesPerPage}
                      onClick={() => setCurrentImage(Math.floor(index / imagesPerPage) * imagesPerPage)}
                      className={`relative size-14 shrink-0 overflow-hidden rounded-md border-2 bg-slate-50 ${index >= currentImage && index < currentImage + imagesPerPage ? "border-[#555291]" : "border-slate-200 hover:border-purple-dark"}`}
                    >
                      <Image src={image} alt="" fill sizes="56px" className="object-contain" />
                    </button>
                  ))}
                </div>
                {images.length > imagesPerPage && (
                  <button
                    type="button"
                    aria-label="Next screenshots"
                    onClick={() => setCurrentImage((index) => index === lastPage ? 0 : index + imagesPerPage)}
                    className="shrink-0 rounded-full border border-slate-200 p-2 text-slate-700 hover:bg-slate-100"
                  >
                    <ChevronRight aria-hidden="true" className="size-5" />
                  </button>
                )}
              </div>
            )}
          </section>
        )}

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <section>
            <h2 className="mb-4 text-3xl font-bold text-slate-900">About the project</h2>
            <div className="space-y-4 leading-relaxed text-slate-700">
              {project.longDescription.split("\n\n").map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <aside className="self-start rounded-2xl bg-slate-50 p-6">
            <h2 className="mb-4 text-xl font-bold text-slate-900">Technology</h2>
            <dl className="space-y-4">
              {Object.entries(project.tech).map(([category, items]) => (
                <div key={category}>
                  <dt className="font-semibold text-slate-700">{category}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-slate-600">{items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <Link href="/#contact" className="mt-12 inline-flex items-center gap-2 rounded-full bg-main-purple px-5 py-3 font-semibold text-slate-900 hover:bg-purple-light">
          Discuss your project <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </main>
  );
}
