"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { DeviceMockup } from "./DeviceMockup";

interface LayeredPhoneMockupsProps {
  screenshots: [string, string, string]; // Left, Right, Center
}

export function LayeredPhoneMockups({ screenshots }: LayeredPhoneMockupsProps) {
  const [activeCard, setActiveCard] = useState<"left" | "center" | "right">("center");

  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center select-none">
      {/* Bounded Container */}
      <div className="relative w-full max-w-[400px] md:max-w-[480px] lg:max-w-[600px] h-full flex items-center justify-center">
        {/* Left Mockup */}
        <motion.div
          className={`absolute left-0 w-[110px] sm:w-[130px] md:w-[200px] lg:w-[260px] z-10 cursor-pointer origin-bottom ${
            activeCard === "left" ? "z-40" : ""
          }`}
          animate={
            activeCard === "left"
              ? { rotate: -4, x: "5%", y: "-2%", scale: 1.06, zIndex: 30 }
              : { rotate: -15, x: "15%", y: "4%", scale: 0.9, zIndex: 10 }
          }
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onMouseEnter={() => setActiveCard("left")}
          onMouseLeave={() => setActiveCard("center")}
          onClick={(e) => {
             e.preventDefault();
             e.stopPropagation();
             setActiveCard("left");
          }}
        >
          <DeviceMockup
            screenshotUrl={screenshots[0]}
            placeholderText="Left Mockup"
            className="w-full"
          />
        </motion.div>

        {/* Right Mockup */}
        <motion.div
          className={`absolute right-0 w-[110px] sm:w-[130px] md:w-[200px] lg:w-[260px] z-20 cursor-pointer origin-bottom ${
            activeCard === "right" ? "z-40" : ""
          }`}
          animate={
            activeCard === "right"
              ? { rotate: 4, x: "-5%", y: "-2%", scale: 1.06, zIndex: 30 }
              : { rotate: 15, x: "-15%", y: "4%", scale: 0.9, zIndex: 10 }
          }
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onMouseEnter={() => setActiveCard("right")}
          onMouseLeave={() => setActiveCard("center")}
          onClick={(e) => {
             e.preventDefault();
             e.stopPropagation();
             setActiveCard("right");
          }}
        >
          <DeviceMockup
            screenshotUrl={screenshots[1]}
            placeholderText="Right Mockup"
            className="w-full"
          />
        </motion.div>

        {/* Center Mockup */}
        <motion.div
          className={`relative z-30 w-[140px] sm:w-[160px] md:w-[240px] lg:w-[320px] cursor-pointer drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)] ${
            activeCard === "center" ? "z-40" : ""
          }`}
          animate={
            activeCard === "center"
              ? { rotate: 0, x: 0, y: 0, scale: 1.05, zIndex: 25 }
              : { rotate: 0, x: 0, y: "3%", scale: 0.95, zIndex: 20 }
          }
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onMouseEnter={() => setActiveCard("center")}
          onClick={(e) => {
             e.preventDefault();
             e.stopPropagation();
             setActiveCard("center");
          }}
        >
          <DeviceMockup
            screenshotUrl={screenshots[2]}
            placeholderText="Center Mockup"
            className="w-full"
          />
        </motion.div>
      </div>
    </div>
  );
}
