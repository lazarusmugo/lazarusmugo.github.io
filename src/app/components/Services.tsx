import { ArrowRight, Download, RefreshCw, Smartphone, Wrench } from "lucide-react";
import { FadeInText } from "./FadeInText";

const services = [
  {
    icon: Smartphone,
    category: "App development",
    title: "Build a new app",
    description: "Turn an idea into an Android and iOS app, from planning and interface design through development and release.",
    action: "Discuss a new app",
  },
  {
    icon: Wrench,
    category: "App improvements",
    title: "Improve an existing app",
    description: "Fix bugs, finish features, modernize older code, and make the app easier for your customers to use.",
    action: "Discuss an update",
  },
  {
    icon: RefreshCw,
    category: "App maintenance",
    title: "Keep your app up to date",
    description: "Keep your app working through platform updates, ongoing fixes, and new releases.",
    action: "Discuss ongoing support",
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
      <h2 className="text-center text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
        How I can help
      </h2>
      <div className="mt-9 grid gap-5 md:grid-cols-3 lg:mt-12 lg:gap-6">
        {services.map(({ icon: Icon, category, title, description, action }) => (
          <article
            key={title}
            className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-[translate,box-shadow,border-color] duration-200 hover:border-main-purple hover:shadow-lg focus-within:border-main-purple focus-within:shadow-lg motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1 motion-reduce:transition-none lg:p-7"
          >
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-neutral-800">
              <Icon aria-hidden="true" className="size-5" />
              {category}
            </p>
            <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-neutral-950">{title}</h3>
            <p className="mb-7 mt-3 flex-1 leading-relaxed text-neutral-800">{description}</p>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
            >
              {action}
              <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
            </a>
          </article>
        ))}
      </div>
      <p className="mt-6 leading-relaxed text-slate-700">
        I also build websites and web interfaces that support your product.
      </p>

      <div className="my-12 border-t border-neutral-200 py-12 md:my-16 md:py-16">
        <FadeInText />
      </div>

      <div className="border-t border-slate-200 pt-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
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
            <strong className="text-slate-900">Mobile</strong>{" · "}
            Kotlin, Kotlin Multiplatform, Jetpack Compose, Compose Multiplatform,
            and Swift for iOS bridging. Release automation for Google Play and
            the Apple App Store.
          </p>
          <p className="mt-1 text-sm leading-relaxed text-slate-700">
            <strong className="text-slate-900">Desktop</strong>{" · "}
            Desktop apps built with Kotlin Multiplatform and Compose Multiplatform.
            Published to the Microsoft Store for Windows and Snapcraft for Linux.
          </p>
          <p className="mt-1 text-sm leading-relaxed text-slate-700">
            <strong className="text-slate-900">Web</strong>{" · "}
            React, Next.js, Tailwind CSS, and TypeScript.
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
