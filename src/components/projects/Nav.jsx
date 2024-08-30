"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";

const sectionStyles = {
  introduction: {
    backgroundColor: "bg-introduction-bg",
    textColor: "text-custom-blue",
    nameColor: "text-custom-green",
  },
  skills: {
    backgroundColor: "bg-about-me-bg",
    textColor: "text-custom-blue",
    nameColor: "text-custom-blue",
  },
  "about-me": {
    backgroundColor: "bg-about-me-bg",
    textColor: "text-custom-green",
    nameColor: "text-custom-green",
  },
  portfolio: {
    backgroundColor: "bg-skills-and-technologies-bg",
    textColor: "text-custom-blue",
    nameColor: "text-custom-blue",
  },
  "contact-me": {
    backgroundColor: "bg-contact-me-bg",
    textColor: "text-custom-blue",
    nameColor: "text-custom-blue",
  },
};

export const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const [dynamicStyles, setDynamicStyles] = useState({
    backgroundColor: "bg-transparent",
    textColor: "text-white",
    nameColor: "text-white",
  });

  useEffect(() => {
    const sections = Object.keys(sectionStyles);
    const observers = sections.map((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setCurrentSection(sectionId);
              }
            });
          },
          { threshold: 0.5 }
        );
        observer.observe(section);
        return observer;
      }
      return null;
    });
    return () => {
      observers.forEach((observer) => observer && observer.disconnect());
    };
  }, []);

  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      setDynamicStyles({
        backgroundColor: "bg-white",
        textColor: "text-custom-blue",
        nameColor: "text-custom-blue",
      });
    } else {
      if (currentSection) {
        setDynamicStyles(
          sectionStyles[currentSection] || {
            backgroundColor: "bg-default-bg",
            textColor: "text-custom-green",
            nameColor: "text-custom-green",
          }
        );
      } else {
        setDynamicStyles({
          backgroundColor: "bg-default-bg",
          textColor: "text-custom-green",
          nameColor: "text-custom-green",
        });
      }
    }

    if (window.innerWidth >= 768) {
      setDynamicStyles({
        backgroundColor: "bg-transparent",
        textColor: "text-custom-blue",
        nameColor: "text-custom-blue",
      });
    } else if (!isOpen) {
      setDynamicStyles({
        backgroundColor: "bg-custom-blue",
        textColor: "text-white",
        nameColor: "text-white",
      });
    }
  }, [isOpen, currentSection]);

  const { backgroundColor, textColor, nameColor } = dynamicStyles;

  return (
    <div
      className={`fixed w-full flex justify-between items-center p-3 lg:p-20 z-10 ${backgroundColor} ${textColor}`}
    >
      <span className={`font-bold text-xl lg:text-3xl ${nameColor}`}>
        Lazarus Mugo
      </span>
      <div className={`lg:hidden`}>
        <Hamburger toggled={isOpen} size={30} toggle={setOpen} />
      </div>
      <div className={`hidden lg:flex`}>
        <Hamburger toggled={isOpen} size={60} toggle={setOpen} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed left-0 right-0 top-[4.5rem] lg:left-[80%] lg:right-[5%] p-5 pt-0 bg-white max-h-screen text-custom-blue max-w-screen-sm"
          >
            <ul className="grid gap-0">
              <li>
                <Link href="/" className="block p-3 rounded-xl bg-white">
                  Home
                </Link>
              </li>
              {Object.keys(sectionStyles).map((sectionId) => (
                <li key={sectionId}>
                  <Link
                    href={`/#${sectionId}`}
                    className="block p-3 rounded-xl bg-white"
                    onClick={() => setOpen(false)}
                  >
                    {sectionId.charAt(0).toUpperCase() +
                      sectionId.slice(1).replace(/-/g, " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
