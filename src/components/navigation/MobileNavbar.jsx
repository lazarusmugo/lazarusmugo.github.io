import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";

const sectionStyles = {
  introduction: { backgroundColor: "bg-introduction-bg", textColor: "text-custom-purple" },
  "about-me": { backgroundColor: "bg-about-me-bg", textColor: "text-custom-green" },
  "skills-and-technologies": { backgroundColor: "bg-skills-and-technologies-bg", textColor: "text-custom-purple" },
  projects: { backgroundColor: "bg-projects-bg", textColor: "text-custom-green" },
  testimonials: { backgroundColor: "bg-testimonials-bg", textColor: "text-custom-purple" },
  "contact-me": { backgroundColor: "bg-contact-me-bg", textColor: "text-custom-green" }
};


export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const [dynamicStyles, setDynamicStyles] = useState({
    backgroundColor: "bg-transparent",
    textColor: "text-custom-purple"
  });

  

  useEffect(() => {
    const sections = Object.keys(sectionStyles);
    const observers = sections.map(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setCurrentSection(sectionId);
            }
          });
        }, { threshold: 0.5 });
        observer.observe(section);
        return observer;
      }
      return null;
    });
    return () => {
      observers.forEach(observer => observer && observer.disconnect());
    };
  }, []);

  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
    
      setDynamicStyles({
        backgroundColor: "bg-gray-100",
        textColor: "text-custom-purple"
      });
    } else {
 
      if (currentSection) {
        setDynamicStyles(sectionStyles[currentSection] || {
          backgroundColor: "bg-default-bg",
          textColor: "text-custom-green"
        });
      } else {
        setDynamicStyles({
          backgroundColor: "bg-default-bg",
          textColor: "text-custom-green"
        });
      }
    }
  }, [isOpen, currentSection]);

  const { backgroundColor, textColor } = dynamicStyles;

  return (
    <div className={`fixed w-full flex justify-between items-center p-3 lg:p-6 ${backgroundColor} ${textColor}`}>
      <span className="font-bold text-lg lg:mx-[3%] lg:text-4xl ">Lazarus Mugo</span>
      <div className={`${textColor} flex lg:hidden`}>
        <Hamburger toggled={isOpen} size={30} toggle={setOpen} />
      </div>
      <div className={`${textColor} lg:mx-[3%]  hidden lg:flex`}>
        <Hamburger toggled={isOpen} size={60} toggle={setOpen} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed  left-0 right-0 top-[4.5rem] lg:left-[80%] lg:right-[5%] p-5 pt-0 bg-gray-100 border-b border-b-gray-300 text-custom-blue max-w-screen-sm"
          >
            <ul className="grid gap-0">
              {Object.keys(sectionStyles).map(sectionId => (
                <li key={sectionId}>
                  <a href={`#${sectionId}`} onClick={() => setOpen(false)} className="block p-3 rounded-xl bg-gray-100">
                    {sectionId.charAt(0).toUpperCase() + sectionId.slice(1).replace(/-/g, ' ')}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
  
};



