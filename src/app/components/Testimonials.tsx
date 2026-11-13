"use client";

import { Pause, Play } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kambi Victor",
    role: "CTO",
    company: "Tajji Real Estate",
    content:
      "Mugo is a sharp, capable engineer who picks up new technologies fast and applies them well. He joined as an intern and grew into our Chief Product Officer and mobile lead, a trajectory that says a lot about his drive and range. He's absorbed and put to real use things like OAuth, OIDC, SvelteKit, Kotlin Multiplatform, and Gradle in short order. It's been a pleasure working with him across design, web, and mobile. His instincts on security and architectural trade offs, especially as the app moved from early stage to scale, were a real asset. I'd work with him again without hesitation.",
  },
  {
    id: 3,
    name: "Emmanuel",
    role: "Founder",
    company: "City Homes Kenya",
    content:
      "Lazarus delivered an exceptional platform that beautifully showcases our luxury properties. His frontend work with SvelteKit resulted in a fast, elegant website that our clients love. He's professional, creative, and consistently delivers beyond expectations.",
  },
  {
    id: 4,
    name: "Arnold Opiyo",
    role: "Data Engineer",
    company: "Adanian Labs",
    content:
      "Mugo is one of the best frontend developers I've worked with. His code is clean, maintainable, and always well-documented. The collaboration was seamless—he understands the full stack and makes integration effortless. I'd work with him again in a heartbeat.",
  },
];

export function Testimonials() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="border-y border-neutral-100 bg-warm-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            What people say about working with me
          </h2>
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-2 text-sm font-semibold text-neutral-700 hover:border-main-purple motion-reduce:hidden lg:hidden"
            aria-controls="testimonial-track"
          >
            {paused ? <Play aria-hidden="true" className="size-4" /> : <Pause aria-hidden="true" className="size-4" />}
            {paused ? "Resume" : "Pause"}
          </button>
        </div>
        <div
          role="region"
          aria-label="Client testimonials"
          tabIndex={0}
          className="testimonial-window mt-8 overflow-hidden rounded-lg p-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-purple"
        >
          <div id="testimonial-track" className="testimonial-track flex w-max motion-reduce:w-full" data-paused={paused}>
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1 ? true : undefined}
                className={`flex shrink-0 gap-5 pr-5 ${copy === 1 ? "motion-reduce:hidden" : "motion-reduce:grid motion-reduce:w-full motion-reduce:pr-0 md:motion-reduce:grid-cols-3"}`}
              >
                {testimonials.map((testimonial) => (
                  <figure
                    key={testimonial.id}
                    className="flex w-[min(79vw,390px)] shrink-0 flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm motion-reduce:w-full md:p-7"
                  >
                    <blockquote className="flex-1 leading-relaxed text-slate-700">
                      <p>“{testimonial.content}”</p>
                    </blockquote>
                    <figcaption className="mt-5 border-t border-slate-100 pt-4 text-sm text-slate-600">
                      <span className="block font-bold text-slate-900">{testimonial.name}</span>
                      <span className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span>{testimonial.role}</span>
                        <span className="rounded-full bg-main-purple/25 px-2.5 py-0.5 font-semibold text-neutral-900">
                          {testimonial.company}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
        <Link
          href="/recommend"
          className="mt-6 inline-flex rounded-full border border-main-purple px-4 py-2 text-sm font-semibold text-neutral-900 transition-colors hover:bg-main-purple"
        >
          Share your experience
        </Link>
      </div>
    </section>
  );
}
