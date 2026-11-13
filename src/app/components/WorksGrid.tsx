import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projectIds, projects } from "../lib/projects";

export function WorksGrid({
  ids = projectIds,
  showExternalLinks = true,
}: {
  ids?: string[];
  showExternalLinks?: boolean;
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {ids.map((id) => {
        const project = projects[id];
        const cover = project.cover ?? project.images[0];
        const isMobileApp = project.category === "Mobile App";

        return (
          <article
            key={id}
            className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-md"
          >
            {cover && (
              <div className="relative aspect-[16/9] overflow-hidden border-b border-neutral-200 bg-neutral-100">
                <Image
                  src={cover}
                  alt={project.imageDescriptions?.[cover] ?? `${project.title} preview`}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  className={isMobileApp ? "object-contain p-3" : "object-cover"}
                />
              </div>
            )}
            <div className={`flex flex-1 flex-col p-6 ${cover ? "" : "bg-[#f8f7fd]"}`}>
              <p className="text-sm font-medium text-[#555291]">{project.category}</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                <Link
                  href={`/works/${id}`}
                  className="after:absolute after:inset-0 focus-visible:after:ring-2 focus-visible:after:ring-inset focus-visible:after:ring-[#555291]"
                >
                  {project.title}
                </Link>
              </h3>
              <p className="mt-2 flex-1 leading-relaxed text-slate-700">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#49457e]">
                  View project <ArrowRight aria-hidden="true" className="size-4" />
                </span>
                {showExternalLinks && project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-10 inline-flex items-center gap-1.5 text-slate-700 hover:underline"
                    aria-label={`Visit ${project.title} website`}
                  >
                    <ExternalLink aria-hidden="true" className="size-4" />
                    Website
                  </a>
                )}
                {showExternalLinks && project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-10 inline-flex items-center gap-1.5 text-slate-700 hover:underline"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github aria-hidden="true" className="size-4" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
