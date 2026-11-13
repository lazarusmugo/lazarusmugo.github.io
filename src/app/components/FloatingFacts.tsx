"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";

type Fact = {
  text: string;
  link?: { href: string; label: string };
};

const workFacts: Fact[] = [
  {
    text: "4+ years shipping apps to Google Play, the App Store, Microsoft Store, and Snapcraft.",
  },
  { text: "Shipped 7 mobile SDKs at Tajji — my favourite kind of work" },
  { text: "Led teams that shipped cross-platform apps users rely on daily" },
  { text: "Architect of BomaOS & Jirani — Tajji's core products" },
  { text: "Built complete DevOps pipelines from scratch" },
  { text: "Currently learning Swift for native iOS development" },
  {
    text: "Was once a UI/UX designer — retired to focus on mobile and frontend development",
  },
  { text: "Contributes to open source projects (See github)" },
  { text: "KMP: one codebase, Android + iOS + desktop" },
  {
    text: "Exploring React Native, but I like KMP better for cross-platform work",
  },
  {
    text: "You've probably seen enough to know if we should work together — let's talk.",
    link: {
      href: "#contact",
      label: "reach out",
    },
  },
];

const funFacts: Fact[] = [
  {
    text: "Rugby prop — XVs. Scrums on weekends, code on weekdays. (I naturally dislike Bronco Tests)",
  },
  {
    text: "My dad had a full beard at 19. Mine's still in beta — v0.0.7 ( 7 strands, faith-driven development).",
  },
  {
    text: "Used to be a good dancer, idk what happened, maybe its the extra kg's (haha)",
  },
  {
    text: "I'm in my rock/metal erra —  System Of A Down,Metallica and Ozzy Osbourne are rocking my gym sessions these days",
  },
  {
    text: "You've probably seen enough to know if we should work together — let's talk.",
    link: {
      href: "#contact",
      label: "reach out",
    },
  },
];

const STYLES = `
  @keyframes floatA {
    0%,100% { transform: translateY(0px); }
    50%      { transform: translateY(-6px); }
  }
  @keyframes floatB {
    0%,100% { transform: translateY(0px); }
    50%      { transform: translateY(-5px); }
  }

  .fact-card {
    position: absolute;
    z-index: 10;
    border-radius: 14px;
  }

  /* ─── MOBILE ─── */
  .fact-work {
    width: 130px;
    bottom: -78px;
    left: -52px;
    top: auto;
    right: auto;
    background: #ffffff;
    border: 1px solid rgba(0,0,0,0.08);
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    animation: floatA 4s ease-in-out infinite;
  }
  .fact-work::after {
    content: '';
    position: absolute;
    top: -8px;
    right: 16px;
    width: 0; height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 8px solid #ffffff;
  }
  .fact-work::before {
    content: '';
    position: absolute;
    top: -10px;
    right: 15px;
    width: 0; height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 9px solid rgba(0,0,0,0.07);
  }

  .fact-fun {
    width: 130px;
    bottom: -78px;
    right: -52px;
    background: var(--color-main-purple, #a78bfa);
    animation: floatB 3.5s ease-in-out infinite;
    animation-delay: 0.7s;
  }
  .fact-fun::after {
    content: '';
    position: absolute;
    top: -8px;
    left: 16px;
    width: 0; height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 8px solid var(--color-main-purple, #a78bfa);
  }

  @media (min-width: 1024px) {
    .fact-work {
      width: 148px;
      left: -24px;
      bottom: -35px;
    }

    .fact-fun {
      width: 148px;
      right: -24px;
      bottom: -35px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .fact-card {
      animation: none;
    }
  }
`;

function FactCard({
  facts,
  label,
  className,
  rotationInterval,
}: {
  facts: Fact[];
  label: string;
  className: string;
  rotationInterval: number;
}) {
  const card = useRef<HTMLDivElement>(null);
  const isInView = useInView(card, { amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const fact = facts[index];

  useEffect(() => {
    if (!isInView || reduceMotion || isHovered || isFocused) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % facts.length);
    }, rotationInterval);

    return () => window.clearInterval(timer);
  }, [facts.length, isFocused, isHovered, isInView, reduceMotion, rotationInterval]);

  return (
    <div
      ref={card}
      className={`fact-card ${className} flex flex-col gap-1.5 p-3`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#1A1917]/70">
        {label}
      </p>
      <AnimatePresence initial={false} mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -3 }}
          transition={{ duration: reduceMotion ? 0 : 0.4 }}
          className="text-xs leading-relaxed text-[#1A1917]"
        >
          {fact.text}
          {fact.link && (
            <>
              {" "}
              <a href={fact.link.href} className="underline underline-offset-2">
                {fact.link.label}
              </a>
            </>
          )}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export function FloatingFacts() {
  return (
    <>
      <style>{STYLES}</style>
      <FactCard facts={workFacts} label="Work" className="fact-work" rotationInterval={9000} />
      <FactCard facts={funFacts} label="Fun" className="fact-fun" rotationInterval={11000} />
    </>
  );
}
