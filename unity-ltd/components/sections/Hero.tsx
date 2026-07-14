"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion } from "motion/react";
import { CheckCircle } from "lucide-react";

import { heroSlides } from "@/data/heroSlides";
import { fadeUp, staggerContainer } from "../animations/variants";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          initial={{
            opacity: 0,
            scale: 1.1,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.05,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title.join(" ")}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-16 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="max-w-3xl"
          >
            {/* Slide Counter */}
            <motion.span
              variants={fadeUp}
              className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-white backdrop-blur-md"
            >
              {String(currentSlide + 1).padStart(2, "0")} /{" "}
              {String(heroSlides.length).padStart(2, "0")}
            </motion.span>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl xl:text-8xl"
            >
              {slide.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-base leading-8 text-slate-200 md:text-lg"
            >
              {slide.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href={slide.primaryBtn.href}
                className="rounded-full bg-[#7AC943] px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:scale-105"
              >
                {slide.primaryBtn.text}
              </Link>

              <Link
                href={slide.secondaryBtn.href}
                className="rounded-full border border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-slate-900"
              >
                {slide.secondaryBtn.text}
              </Link>
            </motion.div>

            {/* Slide Navigation */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex items-center gap-3"
            >
              {heroSlides.map((hero, index) => {
                const active = currentSlide === index;

                return (
                  <motion.button
                    key={hero.id}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentSlide(index)}
                    className={`flex h-12 w-12 items-center justify-center rounded-full border text-sm font-semibold transition-all duration-300 ${
                      active
                        ? "border-[#7AC943] bg-[#7AC943] text-slate-900"
                        : "border-white/30 bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={fadeUp}
              className="mt-10 space-y-4"
            >
              {slide.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-white"
                >
                  <CheckCircle
                    size={20}
                    className="text-[#7AC943]"
                  />

                  <span className="text-base">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}