import { ArrowRight, ChevronLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import type { Project } from "../lib/projects";
import { ProjectGallery } from "./ProjectGallery";

export function ProjectDetails({ project }: { project: Project }) {
  const { links } = project;
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

        {project.images.length > 0 && <ProjectGallery project={project} />}

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
