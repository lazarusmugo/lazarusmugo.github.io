"use client";

import { motion, useReducedMotion } from "framer-motion";

const text =
  "I bring an eye for interface design to mobile engineering. I care about how an app feels to use and how easy it is for the next person to maintain.";
const words = text.split(" ");

export function FadeInText() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.p
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? "shown" : "hidden"}
      whileInView="shown"
      viewport={{ amount: 0.35 }}
      variants={{
        shown: { transition: { delayChildren: reduceMotion ? 0 : 0.2, staggerChildren: reduceMotion ? 0 : 0.12 } },
      }}
      className="w-full text-balance text-center text-[clamp(2rem,4.4vw,4.25rem)] font-semibold leading-[1.16] tracking-tight text-neutral-900"
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block whitespace-pre motion-reduce:opacity-100!"
            variants={{
              hidden: { opacity: 0.45, transition: { duration: 0 } },
              shown: { opacity: 1, transition: { duration: reduceMotion ? 0 : 0.45 } },
            }}
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </motion.span>
        ))}
      </span>
    </motion.p>
  );
}
