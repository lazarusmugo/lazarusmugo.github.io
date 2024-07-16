import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const NavDesktop = ({ isOpen, setIsOpen }) => {
  const [background, setBackground] = useState('transparent');

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setBackground('#4831d4'); 
    } else {
      setBackground('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hidden lg:flex fixed w-full top-0 left-0 z-50  items-center justify-center p-6" style={{ backgroundColor: background }}>
      <span className="text-white font-bold  text-2xl">Mugo Lazarus</span>
      <ul className="ml-auto  flex items-center gap-10 text-lg text-gray-100">
        <li>
          <a href="#introduction" onClick={() => setIsOpen(false)} className="hover:text-custom-orange transition-all">
            Introduction
          </a>
        </li>
        <li>
          <a href="#about-me" onClick={() => setIsOpen(false)} className="hover:text-custom-orange transition-all">
            About Me
          </a>
        </li>
        <li>
          <a href="#skills-and-technologies" onClick={() => setIsOpen(false)} className="hover:text-custom-orange transition-all">
            Skills & Technologies
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-custom-orange transition-all">
            Projects
          </a>
        </li>
        <li>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="hover:text-custom-orange transition-all">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#contact-me" onClick={() => setIsOpen(false)} className="hover:text-custom-orange transition-all">
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
};
