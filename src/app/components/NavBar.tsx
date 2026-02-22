// components/NavBar.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { usePathname, useRouter } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", action: () => scrollToSection("hero") },
    { label: "About Me", action: () => scrollToSection("about") },
    { label: "Works", action: () => router.push("/works") },
    { label: "Testimonials", action: () => scrollToSection("testimonials") },
    { label: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <>
      {/* Desktop: Floating Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-full shadow-lg border border-slate-200/50 px-8 py-3">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={item.action}
                className="text-md font-medium text-slate-700 transition-all duration-300 hover:text-main-purple"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile: Floating Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="md:hidden fixed top-4 left-4 right-4 z-50"
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white/80 backdrop-blur-xl rounded-full shadow-lg border border-slate-200/50 px-6 py-3 flex items-center justify-between gap-3"
            >
              <motion.span
                className="text-xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👋
              </motion.span>

              <motion.button
                onClick={() => setIsOpen(true)}
                className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Menu className="w-5 h-5 text-main-purple" />
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-200/50 px-6 py-6 space-y-2"
            >
              {/* Header with close button */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="text-sm font-semibold text-slate-700">
                  Navigation
                </span>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-main-purple" />
                </motion.button>
              </div>

              {/* Nav Items */}
              <div className="space-y-1">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <motion.button
                      onClick={item.action}
                      className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-slate-700 transition-all duration-300 hover:text-main-purple hover:bg-slate-50"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
