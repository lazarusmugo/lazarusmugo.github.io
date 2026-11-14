import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { featuredProjectIds } from "../lib/projects";
import { WorkCard } from "./WorksGrid";
import { WorkSlideshow } from "./WorkSlideshow";

export function WorksPreview() {
  return (
    <section className="bg-[#F7F5F0] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Selected work
          </h2>
          <Link
            href="/works"
            className="inline-flex items-center gap-2 rounded-full border border-transparent bg-main-purple px-5 py-2.5 text-sm font-bold text-neutral-900 transition-colors hover:border-neutral-900"
          >
            View all work <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
        <WorkSlideshow count={featuredProjectIds.length}>
          {featuredProjectIds.map((id) => (
            <WorkCard key={id} id={id} featured />
          ))}
        </WorkSlideshow>
      </div>
    </section>
  );
}
