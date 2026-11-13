import { Download, RefreshCw, Smartphone, Wrench } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Build a new app",
    description: "Turn an idea into an Android and iOS app, from planning and interface design through development and release.",
  },
  {
    icon: Wrench,
    title: "Improve an existing app",
    description: "Fix bugs, finish features, modernize older code, and make the app easier for your customers to use.",
  },
  {
    icon: RefreshCw,
    title: "Maintain your product",
    description: "Keep your app working through platform updates, ongoing fixes, and new releases.",
  },
];

const steps = [
  {
    title: "Discuss the project",
    description: "Tell me what you want to build, who it’s for, and where things stand today.",
  },
  {
    title: "Agree on scope and milestones",
    description: "We’ll define what needs to ship, how we’ll review it, and what it will take to deliver.",
  },
  {
    title: "Build, review, and release",
    description: "I’ll share progress and working builds so you can give feedback before launch.",
  },
];

export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
        How I can help
      </h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {services.map(({ icon: Icon, title, description }) => (
          <article key={title} className="rounded-2xl border border-purple-100 bg-[#f8f7fd] p-6">
            <Icon aria-hidden="true" className="size-6 text-[#555291]" />
            <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>
            <p className="mt-2 leading-relaxed text-slate-700">{description}</p>
          </article>
        ))}
      </div>
      <p className="mt-6 leading-relaxed text-slate-700">
        I also build websites and web interfaces that support your product.
      </p>

      <div className="mt-16 border-t border-slate-200 pt-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          How we’ll work together
        </h2>
        <ol className="mt-7 grid gap-6 md:grid-cols-3">
          {steps.map(({ title, description }) => (
            <li key={title} className="border-l-2 border-main-purple pl-4">
              <h3 className="font-bold text-slate-900">{title}</h3>
              <p className="mt-2 leading-relaxed text-slate-700">{description}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-12 rounded-2xl bg-[#F7F5F0] p-6 md:flex md:items-center md:justify-between md:gap-8">
        <div>
          <h3 className="font-bold text-slate-900">Technical expertise</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-700">
            Kotlin, Kotlin Multiplatform, Jetpack Compose, Compose Multiplatform,
            and mobile release automation.
          </p>
        </div>
        <a
          href="/Lazarus%20Mugo%20Mobile%20Engineer%20Resume.pdf"
          download
          className="mt-4 inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white md:mt-0"
        >
          <Download aria-hidden="true" className="size-4" />
          Download résumé
        </a>
      </div>
    </section>
  );
}
