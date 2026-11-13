import { ChevronDown } from "lucide-react";

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
    answer: "We’ll agree on ownership, account access, and handover before work starts. I can work with your existing repository and app store accounts.",
  },
  {
    question: "Can you help after launch?",
    answer: "Yes. We can agree on ongoing maintenance for fixes, platform updates, and future releases, or scope support as needed.",
  },
];

export function ProjectFAQs() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        Questions before we start
      </h2>
      <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
        {questions.map(({ question, answer }) => (
          <details key={question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
              {question}
              <ChevronDown aria-hidden="true" className="size-5 shrink-0 transition-transform group-open:rotate-180" />
            </summary>
            <p className="pb-4 leading-relaxed text-slate-700">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
