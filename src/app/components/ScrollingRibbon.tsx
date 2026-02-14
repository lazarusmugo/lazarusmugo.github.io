"use client";
import { motion } from "framer-motion";

export function ScrollingRibbon() {
  const services = [
    "MOBILE APP DEVELOPMENT",
    "FRONTEND DEVELOPMENT",
    "LIBRARY DEVELOPMENT",
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-75 md:h-115 ">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[160vw] -rotate-10 bg-black py-10">
            <motion.div
              className="flex gap-12 whitespace-nowrap"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
            >
              {[...services, ...services, ...services].map((service, index) => (
                <div key={index} className="flex items-center gap-12">
                  <span className="text-4xl md:text-8xl font-medium text-white font-heading">
                    {service}
                  </span>
                  <span className="text-4xl md:text-6xl text-main-purple">
                    ✦
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
