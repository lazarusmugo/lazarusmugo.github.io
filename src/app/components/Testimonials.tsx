"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 5,
    name: "Anna M",
    role: "Founder",
    company: "Verse & Voice",
    content:
      "Mugo built Verse & Voice, my faith-based app that delivers personalized Bible verses and cinematic prayer experiences, and took it from an idea to a live app on both iOS and Android. He built and managed the whole backend, brought in AI video and voice, and worked through tricky subscription and app store problems with patience and real skill. Working with him was easy. He communicated clearly, explained things so I always knew what was going on, and when something broke, even right before a deadline, he stayed on it until it was fixed. What stood out most is how much he cared about getting it right. He felt like a true partner, not just a developer. Without Mugo, my app wouldn't exist. I'd recommend him to anyone who wants to bring an app idea to life.",
  },
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

const readingTimeMs = 14_000;
const controlClass =
  "inline-flex size-11 items-center justify-center rounded-full border border-main-purple/40 bg-main-purple/15 text-slate-900 hover:border-main-purple hover:bg-main-purple/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-purple";

function scrollToAdjacentCard(track: HTMLDivElement, direction: 1 | -1, reduceMotion: boolean) {
  const end = track.scrollWidth - track.clientWidth;
  const stops = Array.from(track.children, (card) => Math.min((card as HTMLElement).offsetLeft, end));
  const current = track.scrollLeft;
  const next = direction === 1
    ? stops.find((stop) => stop > current + 2)
    : stops.reverse().find((stop) => stop < current - 2);

  track.scrollTo({
    left: next ?? (direction === 1 ? 0 : end),
    behavior: reduceMotion || next === undefined ? "instant" : "smooth",
  });
}

export function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  const isInView = useInView(track, { amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const element = track.current;
    if (!element || !isInView || reduceMotion || focused) return;

    let timer: number;
    const restartTimer = () => {
      window.clearInterval(timer);
      timer = window.setInterval(() => scrollToAdjacentCard(element, 1, false), readingTimeMs);
    };

    restartTimer();
    element.addEventListener("scroll", restartTimer, { passive: true });
    return () => {
      window.clearInterval(timer);
      element.removeEventListener("scroll", restartTimer);
    };
  }, [isInView, reduceMotion, focused]);

  function moveBy(direction: 1 | -1) {
    if (!track.current) return;
    scrollToAdjacentCard(track.current, direction, Boolean(reduceMotion));
  }

  return (
    <section aria-labelledby="testimonial-heading" className="border-y border-neutral-100 bg-warm-background px-4 py-12 sm:px-8 md:py-16">
      <div className="mx-auto max-w-[1060px]">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 md:mb-8">
          <h2 id="testimonial-heading" className="text-3xl leading-tight font-bold tracking-tight text-slate-900 sm:text-4xl">
            What people say <span className="underline decoration-main-purple decoration-[0.12em] underline-offset-[0.16em]">about working with me</span>
          </h2>
          <div className="flex flex-wrap items-center gap-2">
            <button type="button" onClick={() => moveBy(-1)} className={controlClass} aria-label="Previous testimonial" aria-controls="testimonial-track">
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>
            <button type="button" onClick={() => moveBy(1)} className={controlClass} aria-label="Next testimonial" aria-controls="testimonial-track">
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
        <div
          ref={track}
          id="testimonial-track"
          role="region"
          aria-label="Client testimonials"
          tabIndex={0}
          onFocus={(event) => setFocused(event.currentTarget.matches(":focus-visible"))}
          onBlur={() => setFocused(false)}
          onKeyDown={(event) => {
            if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
            event.preventDefault();
            setFocused(true);
            moveBy(event.key === "ArrowLeft" ? -1 : 1);
          }}
          className="relative flex min-w-0 snap-x snap-mandatory items-stretch gap-4 overflow-x-auto rounded-2xl pb-2 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-purple md:gap-5"
        >
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex w-[min(100%,520px)] shrink-0 snap-start flex-col rounded-2xl border border-main-purple/25 bg-white p-5 shadow-sm sm:p-7 lg:w-[calc((100%-1.25rem)/2)]"
            >
              <blockquote className="flex flex-1 items-center leading-relaxed text-slate-700 md:text-[1.0625rem]">
                <p>“{testimonial.content}”</p>
              </blockquote>
              <figcaption className="mt-4 border-t border-slate-100 pt-3 text-sm text-slate-600">
                <span className="block font-bold text-slate-900">{testimonial.name}</span>
                <span className="mt-1 block text-slate-600">
                  {testimonial.role} · {testimonial.company}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <Link
          href="/recommend"
          className="mt-5 inline-flex min-h-11 items-center rounded-full border border-main-purple px-4 text-sm font-semibold text-slate-900 transition-colors hover:bg-main-purple/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-purple"
        >
          Share your experience
        </Link>
      </div>
    </section>
  );
}
