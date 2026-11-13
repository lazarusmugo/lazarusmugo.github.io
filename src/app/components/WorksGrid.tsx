import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projectIds, projects } from "../lib/projects";
import { DeviceMockup } from "./DeviceMockup";

export function WorksGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {projectIds.map((id) => <WorkCard key={id} id={id} />)}
    </div>
  );
}

export function WorkCard({
  id,
  showExternalLinks = true,
}: {
  id: string;
  showExternalLinks?: boolean;
}) {
  const project = projects[id];
  const cover = project.cover ?? project.images[0];
  const isMobileApp = project.category === "Mobile App";
  const coverDescription = cover && (project.imageDescriptions?.[cover] ?? `${project.title} preview`);

  return (
    <article
      key={id}
      className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-[border-color,box-shadow] hover:border-main-purple hover:shadow-md focus-within:border-main-purple"
    >
      {cover && coverDescription && (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-neutral-200 bg-neutral-100">
          {isMobileApp ? (
            <div className="absolute inset-0 flex items-center justify-center py-3.5">
              <DeviceMockup
                src={cover}
                alt={coverDescription}
                sizes="120px"
                className="h-full"
              />
            </div>
          ) : (
            <Image
              src={cover}
              alt={coverDescription}
              fill
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          )}
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold leading-tight text-slate-900">
          <Link
            href={`/works/${id}`}
            className="after:absolute after:inset-0 focus-visible:after:ring-2 focus-visible:after:ring-inset focus-visible:after:ring-main-purple"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 leading-relaxed text-slate-700">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-main-purple px-3.5 py-2 font-bold text-neutral-900">
            View project
            <ArrowRight aria-hidden="true" className="size-4 transition-transform motion-safe:group-hover:translate-x-0.5" />
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
}
