"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { Project } from "../lib/projects";
import { DeviceMockup } from "./DeviceMockup";

export function ProjectGallery({ project }: { project: Project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { images, imageDescriptions, screenshotNote, title } = project;
  const isMobileApp = project.category === "Mobile App";
  const hasMultipleImages = images.length > 1;
  const currentImage = images[currentIndex];
  const description = imageDescriptions?.[currentImage] ?? `${title} screen ${currentIndex + 1}`;
  const arrowClass =
    "absolute top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-800 shadow-sm hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#555291] sm:size-11";

  function moveBy(direction: number) {
    setCurrentIndex((index) => (index + direction + images.length) % images.length);
  }

  return (
    <section
      aria-label={`${title} screenshots`}
      className="mb-12"
      tabIndex={hasMultipleImages ? 0 : undefined}
      onKeyDown={(event) => {
        if (!hasMultipleImages || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) return;
        event.preventDefault();
        moveBy(event.key === "ArrowLeft" ? -1 : 1);
      }}
    >
      {screenshotNote && <p className="mb-3 text-sm text-slate-600">{screenshotNote}</p>}

      <div className="relative overflow-hidden rounded-2xl bg-neutral-100">
        <motion.div
          key={currentImage}
          drag={hasMultipleImages ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.25}
          dragMomentum={false}
          onDragEnd={(_, { offset, velocity }) => {
            if (Math.abs(offset.x) >= 42 || (Math.abs(offset.x) >= 16 && Math.abs(velocity.x) >= 450)) {
              moveBy(offset.x < 0 ? 1 : -1);
            }
          }}
          className={hasMultipleImages ? "cursor-grab active:cursor-grabbing" : undefined}
        >
          {isMobileApp ? (
            <div className="flex justify-center py-5 sm:py-7">
              <DeviceMockup
                src={currentImage}
                alt={description}
                sizes="230px"
                className="w-[min(66%,230px)]"
              />
            </div>
          ) : (
            <div className="relative aspect-[16/10]">
              <Image
                src={currentImage}
                alt={description}
                fill
                sizes="(min-width: 1200px) 1152px, 100vw"
                draggable={false}
                className="select-none object-contain"
              />
            </div>
          )}
        </motion.div>

        {hasMultipleImages && (
          <>
            <button
              type="button"
              aria-label="Previous screenshot"
              onClick={() => moveBy(-1)}
              className={`${arrowClass} left-2 sm:left-4`}
            >
              <ChevronLeft aria-hidden="true" className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next screenshot"
              onClick={() => moveBy(1)}
              className={`${arrowClass} right-2 sm:right-4`}
            >
              <ChevronRight aria-hidden="true" className="size-5" />
            </button>
          </>
        )}
      </div>

      {hasMultipleImages && (
        <>
          <p aria-live="polite" className="mt-3 text-center text-sm text-slate-600">
            {currentIndex + 1} of {images.length}
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {images.map((image, index) => (
              <button
                type="button"
                key={image}
                aria-label={imageDescriptions?.[image] ? `Show ${imageDescriptions[image]}` : `Show screenshot ${index + 1}`}
                aria-pressed={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
                className={`relative size-11 overflow-hidden rounded-md border-2 bg-neutral-50 sm:size-14 ${index === currentIndex ? "border-[#555291]" : "border-neutral-200 hover:border-neutral-500"}`}
              >
                <Image src={image} alt="" fill sizes="56px" draggable={false} className="object-contain" />
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
