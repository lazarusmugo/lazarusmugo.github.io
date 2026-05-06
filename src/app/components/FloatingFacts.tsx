"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FactLink = {
  href: string;
  label: string;
  type?: "internal" | "external";
};

type Fact = {
  text: string;
  link?: FactLink;
};

const handleLinkClick = (e: React.MouseEvent, link: FactLink) => {
  e.stopPropagation();

  if (link.type === "internal") {
    const el = document.querySelector(link.href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    return;
  }

  window.open(link.href, "_blank", "noopener,noreferrer");
};

const workFacts: Fact[] = [
  {
    text: "4+ years shipping production apps to Play Store, App Store Microsoft Store and Snapcraft Store",
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
      type: "internal",
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
    text: "Car enthusiast. My dad's a doctor of cars, so I grew up around a garage. Now I'm working my way to becoming {link} (just need the rich part first).",
    link: {
      href: "https://www.youtube.com/@MatArmstrongbmx",
      label: "Mat Armstrong",
      type: "external",
    },
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
      type: "internal",
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
    cursor: pointer;
    z-index: 10;
    border-radius: 14px;
  }

  /* ─── MOBILE ─── */
  .fact-work {
    width: 130px;
    bottom: -78px;
    left: -88px;
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
    right: -88px;
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

  /* ─── DESKTOP ─── */
  @media (min-width: 768px) {
    .fact-work {
      width: 152px;
      top: 56px;
      left: auto;
      right: -168px;
      bottom: auto;
    }
    .fact-work::after {
      bottom: auto;
      right: auto;
      top: 14px;
      left: -8px;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-right: 8px solid #ffffff;
      border-left: none;
    }
    .fact-work::before {
      bottom: auto;
      right: auto;
      top: 13px;
      left: -10px;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-right: 9px solid rgba(0,0,0,0.07);
      border-left: none;
    }

    .fact-fun {
      width: 152px;
      bottom: 72px;
      right: -168px;
      top: auto;
      left: auto;
    }
    .fact-fun::after {
      top: auto;
      left: -8px;
      bottom: 14px;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-right: 8px solid var(--color-main-purple, #a78bfa);
      border-left: none;
    }
  }
`;

function FactCard({
  facts,
  label,
  className,
  animDelay,
  hintVariant,
}: {
  facts: Fact[];
  label: string;
  className: string;
  animDelay?: string;
  hintVariant: "dark" | "white";
}) {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % facts.length);
  const fact = facts[index];

  const pillStyle =
    hintVariant === "dark"
      ? {
          background: "#1A1917",
          color: "#ffffff",
        }
      : {
          background: "#ffffff",
          color: "#1A1917",
        };

  return (
    <motion.div
      className={`fact-card ${className}`}
      style={{ animationDelay: animDelay }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={next}
    >
      <div className="flex flex-col gap-1 p-2.5 md:gap-1.5 md:p-3">
        <p className="text-[9px] md:text-[10px] font-semibold uppercase tracking-widest text-[#1A1917] opacity-40">
          {label}
        </p>
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="text-[12px] leading-relaxed text-[#1A1917] md:text-[12px] md:leading-snug"
          >
            {fact.link && fact.text.includes("{link}") ? (
              <>
                {fact.text.split("{link}")[0]}
                <a
                  href={fact.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="underline underline-offset-2 opacity-70 hover:opacity-100"
                >
                  {fact.link.label}
                </a>
                {fact.text.split("{link}")[1]}
              </>
            ) : (
              <>
                {fact.text}
                {fact.link && (
                  <>
                    {" "}
                    <span
                      onClick={(e) => handleLinkClick(e, fact.link!)}
                      className="underline underline-offset-2 opacity-70 hover:opacity-100 cursor-pointer"
                    >
                      {fact.link.label}
                    </span>
                  </>
                )}
              </>
            )}
          </motion.p>
        </AnimatePresence>

        {/* Pill hint */}
        <div className="mt-0.5">
          <span
            style={{
              ...pillStyle,
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              padding: "2px 8px",
              borderRadius: "999px",
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            tap to explore
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function FloatingFacts() {
  return (
    <>
      <style>{STYLES}</style>
      <FactCard
        facts={workFacts}
        label="Work"
        className="fact-work"
        hintVariant="dark"
      />
      <FactCard
        facts={funFacts}
        label="Fun"
        className="fact-fun"
        animDelay="0.7s"
        hintVariant="white"
      />
    </>
  );
}
