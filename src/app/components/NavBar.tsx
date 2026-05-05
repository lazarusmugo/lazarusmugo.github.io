"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const socialLinks = [
  { icon: Github, href: "https://github.com/lazarusmugo", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/lazarus-mugo/",
    label: "LinkedIn",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const router = useRouter();

  const isWorksPage = pathname === "/works";

  // Track active section via scroll — only on home
  useEffect(() => {
    if (isWorksPage) return;

    const sectionIds = ["hero", "about", "testimonials", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname, isWorksPage]);

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    {
      label: "Home",
      id: "hero",
      action: () => scrollToSection("hero"),
    },
    {
      label: "About Me",
      id: "about",
      action: () => scrollToSection("about"),
    },
    {
      label: "Works",
      id: "works",
      action: () => {
        router.push("/works");
        setIsOpen(false);
      },
    },
    {
      label: "Testimonials",
      id: "testimonials",
      action: () => scrollToSection("testimonials"),
    },
    {
      label: "Contact",
      id: "contact",
      action: () => scrollToSection("contact"),
    },
  ];

  const isItemActive = (id: string) => {
    if (id === "works") return isWorksPage;
    if (isWorksPage) return false;
    return activeSection === id;
  };

  return (
    <>
      {/* ── DESKTOP ── */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50
                   bg-white/80 backdrop-blur-xl rounded-full shadow-lg
                   border border-slate-200/50 px-6 py-2.5
                   items-center gap-10"
      >
        <Image
          src="/me/logo_transparent.png"
          alt="Logo"
          width={64}
          height={64}
          className="shrink-0"
        />
        <div className="h-5 w-px bg-slate-200" />
        <div className="flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = isItemActive(item.id);
            return (
              <motion.button
                key={item.label}
                onClick={item.action}
                className={`text-sm font-medium transition-colors duration-200 relative
                  ${isActive ? "text-main-purple" : "text-slate-600 hover:text-main-purple"}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="desktop-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-main-purple"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.nav>

      {/* ── MOBILE ── */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="md:hidden fixed top-4 left-4 right-4 z-50"
      >
        {/* Collapsed pill */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white/80 backdrop-blur-xl rounded-full shadow-lg
                       border border-slate-200/50 px-6 py-3
                       flex items-center justify-between"
          >
            <Image
              src="/me/logo_transparent.png"
              alt="Logo"
              width={60}
              height={60}
            />
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </motion.div>
        )}

        {/* Expanded menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg
                       border border-slate-200/50 px-6 py-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-2">
              <Image
                src="/me/logo_transparent.png"
                alt="Logo"
                width={72}
                height={72}
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav items */}
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = isItemActive(item.id);
                return (
                  <button
                    key={item.label}
                    onClick={item.action}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium
                                transition-colors duration-200
                                ${
                                  isActive
                                    ? "text-main-purple bg-main-purple/10"
                                    : "text-slate-700 hover:text-main-purple hover:bg-slate-50"
                                }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Social links */}
            <div className="flex  gap-6 mt-4 pt-4 border-t border-slate-200 px-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-main-purple transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
