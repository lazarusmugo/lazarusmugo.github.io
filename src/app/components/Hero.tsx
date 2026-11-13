"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FloatingFacts } from "./FloatingFacts";
import { bookingUrl } from "../lib/contact";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-warm-background">
      {/* ── MAIN CONTENT ── */}
      <div className="mx-auto max-w-[86rem] px-6 pb-10 pt-28 md:px-10 md:pb-16 md:pt-32 lg:px-12 xl:px-16">
        <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-10 xl:gap-12">
          {/* ── LEFT ── */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col gap-2"
            >
              <span className="text-lg font-medium text-[#6B6860]">
                Mobile App Developer & Consultant
              </span>
              <h1 className="mt-2 text-balance text-4xl font-bold leading-[1.12] tracking-tight text-[#1A1917] sm:text-5xl lg:text-[3.5rem] xl:text-[4.25rem]">
                I build and improve apps for Android and iOS.
              </h1>
            </motion.div>

            {/* Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="max-w-[62ch] text-pretty text-base leading-relaxed text-[#6B6860] md:text-lg"
            >
              I’m Lazarus Mugo. I help founders, small businesses, and product
              teams build new mobile apps, improve existing products, and
              maintain them after launch. You work directly with me from planning
              and design through development and release.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href={bookingUrl}
                className="inline-flex items-center gap-2 rounded-full bg-main-purple px-5 py-3 text-sm font-bold text-[#1A1917] transition-colors hover:bg-purple-light"
              >
                Book a free intro call
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
              <a
                href="#works"
                className="rounded-full border border-[#bbb7ad] px-5 py-3 text-sm font-semibold text-[#1A1917] transition-colors hover:bg-white"
              >
                Explore my work
              </a>
            </motion.div>
          </div>

          {/* ── MOBILE photo + facts ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="relative lg:hidden"
            style={{ paddingTop: "24px", paddingBottom: "84px" }}
          >
            <div className="relative mx-auto h-64 w-48">
              <div className="absolute inset-0 overflow-hidden rounded-t-[120px] bg-[#E0DDD5]">
                <Image
                  src="/me/pro.jpg"
                  alt="Lazarus Mugo"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <FloatingFacts />
            </div>
          </motion.div>

          {/* ── RIGHT: photo desktop ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative hidden items-end justify-center self-end lg:flex lg:h-[495px]"
          >
            {/* Pill + facts share this relative container */}
            <div className="relative h-[455px] w-[310px]">
              <div className="absolute inset-0 overflow-hidden rounded-t-[200px] bg-[#E0DDD5]">
                <Image
                  src="/me/pro.jpg"
                  alt="Lazarus Mugo"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <FloatingFacts /> {/* now positioned relative to the pill box */}
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
