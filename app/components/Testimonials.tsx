"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { StarIcon, ArrowIcon } from "./icons";

const quotes = [
  {
    quote:
      "WITS gave my daughter more than good grades — it gave her confidence, discipline and a genuine love for learning. The teachers truly know each child by name.",
    name: "Sunita Shrestha",
    role: "Parent · Grade 8",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote:
      "The science labs and project work made me fall in love with engineering. I felt prepared and supported at every step toward my +2 and beyond.",
    name: "Aayush Tamang",
    role: "Alumnus · Class of 2023",
    avatar:
      "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=160&q=80",
  },
  {
    quote:
      "What I value most is the care. My son is safe, happy and challenged. WITS genuinely feels like an extension of our own family.",
    name: "Rabin Maharjan",
    role: "Parent · Grade 5",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = quotes[i];

  return (
    <section id="voices" className="relative bg-paper-2 py-20 sm:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow text-ink-soft">Voices of WITS</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
                Don&apos;t take our word for it.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xs text-base leading-relaxed text-ink-soft">
                The families who make up our community say it better than we ever
                could.
              </p>
            </Reveal>

            <div className="mt-8 flex items-center gap-3">
              <button
                aria-label="Previous"
                onClick={() => setI((v) => (v - 1 + quotes.length) % quotes.length)}
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                <ArrowIcon className="h-4 w-4 rotate-180" />
              </button>
              <button
                aria-label="Next"
                onClick={() => setI((v) => (v + 1) % quotes.length)}
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                <ArrowIcon className="h-4 w-4" />
              </button>
              <span className="ml-2 font-body text-sm text-ink-soft">
                {String(i + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-1 text-gold-500">
                  {[...Array(5)].map((_, s) => (
                    <StarIcon key={s} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-2xl font-medium leading-[1.35] tracking-tight text-ink sm:text-3xl sm:leading-[1.35]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image src={t.avatar} alt={t.name} fill sizes="48px" className="object-cover" />
                  </span>
                  <span>
                    <span className="block font-display text-base font-bold text-ink">
                      {t.name}
                    </span>
                    <span className="block text-sm text-ink-soft">{t.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
