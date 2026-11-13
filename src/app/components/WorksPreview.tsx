import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { featuredProjectIds } from "../lib/projects";
import { WorksGrid } from "./WorksGrid";

export function WorksPreview() {
  return (
    <section className="bg-[#F7F5F0] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Selected work
          </h2>
          <Link
            href="/works"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white"
          >
            View all work <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
        <WorksGrid ids={featuredProjectIds} showExternalLinks={false} />
      </div>
    </section>
  );
}
