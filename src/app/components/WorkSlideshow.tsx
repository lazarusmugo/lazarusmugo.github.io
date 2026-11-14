"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

const controlClass =
  "grid size-10 place-items-center rounded-full border border-neutral-300 bg-white text-neutral-900 transition-colors hover:border-main-purple hover:bg-main-purple focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900";

export function WorkSlideshow({ children, count }: { children: ReactNode; count: number }) {
  const track = useRef<HTMLDivElement>(null);
  const isInView = useInView(track, { amount: 0.35 });
  const reduceMotion = useReducedMotion();
  const [columns, setColumns] = useState(1);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const pageCount = Math.ceil(count / columns);

  useEffect(() => {
    const element = track.current;
    if (!element) return;

    const resize = new ResizeObserver(() => {
      setColumns(Number(getComputedStyle(element).getPropertyValue("--work-columns")) || 1);
    });
    resize.observe(element);
    return () => resize.disconnect();
  }, []);

  useEffect(() => {
    const element = track.current;
    if (!element || !isInView || paused || hovered || focused || reduceMotion || pageCount < 2) return;

    const timeout = window.setTimeout(() => {
      const next = (page + 1) % pageCount;
      const card = element.children.item(next * columns) as HTMLElement | null;
      if (card) element.scrollTo({ left: card.offsetLeft, behavior: next === 0 ? "instant" : "smooth" });
    }, 4000);

    return () => window.clearTimeout(timeout);
  }, [columns, focused, hovered, isInView, page, pageCount, paused, reduceMotion]);

  function goTo(next: number) {
    const target = (next + pageCount) % pageCount;
    const element = track.current;
    const card = element?.children.item(target * columns) as HTMLElement | null;
    if (!element || !card) return;
    element.scrollTo({ left: card.offsetLeft, behavior: reduceMotion || Math.abs(target - page) > 1 ? "instant" : "smooth" });
  }

  function updatePage(element: HTMLDivElement) {
    const maxScroll = element.scrollWidth - element.clientWidth;
    if (maxScroll > 0) setPage(Math.round((element.scrollLeft / maxScroll) * (pageCount - 1)));
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div
        ref={track}
        id="selected-work-slides"
        tabIndex={0}
        role="region"
        aria-label="Selected projects slideshow"
        onScroll={(event) => updatePage(event.currentTarget)}
        onKeyDown={(event) => {
          if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
          event.preventDefault();
          goTo(page + (event.key === "ArrowLeft" ? -1 : 1));
        }}
        className="selected-work-track relative grid snap-x snap-mandatory grid-flow-col overflow-x-auto rounded-2xl pb-2 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-purple"
      >
        {children}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show project group ${index + 1}`}
              aria-pressed={index === page}
              aria-controls="selected-work-slides"
              onClick={() => goTo(index)}
              className="grid size-8 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-main-purple"
            >
              <span className={`h-2 rounded-full transition-[width,background-color] motion-reduce:transition-none ${index === page ? "w-6 bg-main-purple" : "w-2 bg-neutral-400"}`} />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={paused ? "Resume project slideshow" : "Pause project slideshow"}
            aria-controls="selected-work-slides"
            onClick={() => setPaused(!paused)}
            className={`${controlClass} motion-reduce:hidden`}
          >
            {paused ? <Play aria-hidden="true" className="size-4" /> : <Pause aria-hidden="true" className="size-4" />}
          </button>
          <button
            type="button"
            aria-label="Previous projects"
            aria-controls="selected-work-slides"
            onClick={() => goTo(page - 1)}
            className={controlClass}
          >
            <ChevronLeft aria-hidden="true" className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next projects"
            aria-controls="selected-work-slides"
            onClick={() => goTo(page + 1)}
            className={controlClass}
          >
            <ChevronRight aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
