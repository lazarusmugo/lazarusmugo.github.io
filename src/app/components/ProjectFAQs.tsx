"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    question: "How much does a project cost?",
    answer: "I provide an estimate after we review the work together. For an existing app, I may need to see the code or reproduce the issue before quoting.",
  },
  {
    question: "How long will it take?",
    answer: "The timeline depends on the scope, the state of any existing app, and the release requirements. We’ll agree on milestones before work begins.",
  },
  {
    question: "Can you work on an app someone else built?",
    answer: "Yes. I can review the existing app, understand what you need to change, and propose a scope for the fixes or features.",
  },
  {
    question: "Who owns the code and store accounts?",
    answer: "You own the code I write for your project and keep control of your app store accounts. I’ll hand over the source code at delivery.",
  },
  {
    question: "Can you help after launch?",
    answer: "Yes. We can agree on ongoing maintenance for fixes, platform updates, and future releases, or scope support as needed.",
  },
  {
    question: "Can you help publish my app?",
    answer: "Yes. I can prepare the release builds, help with the store listings, and submit the app through your Apple and Google developer accounts.",
  },
];

export function ProjectFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="project-faq-heading" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="project-faq-heading" className="text-4xl font-semibold tracking-tight text-neutral-950 md:text-5xl lg:text-6xl">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          What to expect when we build, improve, or maintain your app.
        </p>
      </div>
      <div className="mt-9 grid md:mt-12 md:grid-cols-2">
        {questions.map(({ question, answer }, index) => {
          const isOpen = index === openIndex;
          const panelId = `project-faq-answer-${index}`;

          return (
            <article
              key={question}
              className="min-w-0 border-b border-neutral-200 md:odd:border-r md:odd:pr-8 md:even:pl-8"
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-purple md:py-6"
                >
                  {question}
                  <motion.span
                    aria-hidden="true"
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.2 }}
                    className="shrink-0 text-slate-600"
                  >
                    <ChevronDown className="size-4" />
                  </motion.span>
                </button>
              </h3>
              <div id={panelId} aria-hidden={!isOpen}>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-6 leading-relaxed text-slate-700">{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </article>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <p className="text-slate-700">Have another question about your project?</p>
        <a
          href="#contact"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
        >
          Get in touch <ArrowRight aria-hidden="true" className="size-4" />
        </a>
      </div>
    </section>
  );
}
