"use client";
import React, { useState, useRef } from "react";
import { Carousel } from "@material-tailwind/react";

export function CarouselCustomNavigation({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const PrevArrow = ({ loop, handlePrev, activeIndex, firstIndex }) => (
    <button
      className="absolute top-1/2 transform -translate-y-1/2 left-4  bg-custom-blue hover:bg-custom-green p-2 rounded-full shadow-md"
      onClick={handlePrev}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white hover:text-custom-blue"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );

  const NextArrow = ({ loop, handleNext, activeIndex, lastIndex }) => (
    <button
      className="absolute top-1/2 transform -translate-y-1/2 right-4  bg-custom-blue hover:bg-custom-green p-2 rounded-full shadow-md"
      onClick={handleNext}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white hover:text-custom-blue"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );

  return (
    <div className="relative overflow-hidden">
      <Carousel
        className="rounded-xl"
        prevArrow={PrevArrow}
        nextArrow={NextArrow}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        autoplay
        autoplayDelay={3000}
        transition={{ type: "tween", duration: 0.5 }}
        loop
        activeIndex={activeIndex}
        onChange={(index) => setActiveIndex(index)}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`project-image-${index}`}
            className="h-full w-full object-cover"
          />
        ))}
      </Carousel>
    </div>
  );
}
