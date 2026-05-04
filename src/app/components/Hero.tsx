"use client";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 100;
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const scrollToWorks = () => {
    const element = document.getElementById("works");
    if (element) {
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F7F5F0]">
      {/* ── MAIN CONTENT ── */}
      <div className="px-6 pb-10 pt-28 md:px-16 md:pb-16 md:pt-32">
        <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 items-end gap-8 md:grid-cols-[1fr_420px]">
          {/* ── LEFT ── */}
          <div className="flex flex-col gap-10">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col gap-2"
            >
              <span className="text-base text-[#8A8680]">Hey, I'm</span>
              <h1 className="text-6xl font-semibold leading-none tracking-tight text-[#1A1917] md:text-7xl lg:text-8xl">
                Lazarus Mugo
              </h1>
            </motion.div>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="max-w-xl text-base leading-relaxed text-[#6B6860] md:text-lg"
            >
              I build cross-platform mobile and desktop apps using Kotlin
              Multiplatform and Compose Multiplatform — one codebase running on
              Android, iOS, and desktop. On the web side, I work with Next.js,
              SvelteKit, and Tailwind to ship fast, modern frontends.
            </motion.p>

            {/* Purple CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <div className="flex w-fit flex-col gap-5 rounded-2xl bg-main-purple p-6">
                <p className="text-base font-medium leading-snug text-[#1A1917]">
                  Building something interesting?
                  <br />
                  Let's talk.
                </p>
                <motion.button
                  onClick={scrollToContact}
                  className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#1A1917] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Mobile photo — below CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="relative h-72 w-full overflow-hidden rounded-2xl bg-[#E0DDD5] md:hidden"
            >
              <Image
                src="/me/pro.jpg"
                alt="Lazarus Mugo"
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>
          </div>

          {/* ── RIGHT: photo desktop ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative hidden items-end justify-center self-end md:flex md:h-[540px]"
          >
            <div className="relative h-[500px] w-[340px] overflow-hidden rounded-t-[200px] bg-[#E0DDD5]">
              <Image
                src="/me/pro.jpg"
                alt="Lazarus Mugo"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="absolute right-2 top-8 animate-float-slow rounded-2xl border border-black/10 bg-white px-4 py-3">
              <p className="text-2xl font-semibold leading-none text-[#1A1917]">
                5+
              </p>
              <p className="mt-1.5 text-[11px] uppercase tracking-wider text-[#8A8680]">
                Yrs shipping
              </p>
            </div>

            <div className="absolute left-2 top-40 animate-float-fast rounded-2xl bg-[#1A1917] px-4 py-3">
              <p className="text-2xl font-semibold leading-none text-white">
                3
              </p>
              <p className="mt-1.5 text-[11px] uppercase tracking-wider text-[#6B6860]">
                Platforms
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── CURVED BOTTOM + SCROLL CTA ── */}
      <div className="relative h-36 md:h-44">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 176"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,176 L0,60 Q720,176 1440,60 L1440,176 Z" fill="#ffffff" />
        </svg>

        <div className="absolute inset-x-0 top-4 flex justify-center">
          <motion.button
            onClick={scrollToWorks}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="group flex flex-col items-center gap-2"
          >
            <span className="text-[11px] font-medium uppercase tracking-widest text-[#1A1917] transition-colors group-hover:text-main-purple">
              See what I've built
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm transition-shadow group-hover:shadow-md"
            >
              <ChevronDown className="h-4 w-4 text-[#1A1917] hover:text-main-purple" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
