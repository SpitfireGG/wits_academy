"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, item } from "./Reveal";

const tiles = [
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    alt: "Classroom learning",
    label: "In the classroom",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?auto=format&fit=crop&w=700&q=80",
    alt: "Library and reading",
    label: "Library",
    className: "col-span-2 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=700&q=80",
    alt: "Science experiments",
    label: "Science labs",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=700&q=80",
    alt: "Sports and games",
    label: "Sports",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80",
    alt: "Music and arts",
    label: "Arts & music",
    className: "col-span-2 row-span-1",
  },
];

export function CampusLife() {
  return (
    <section id="campus" className="relative overflow-hidden bg-ink py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow text-white/50">Campus life</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 max-w-lg font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
                Where learning comes alive.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-base leading-relaxed text-white/60">
              Bright classrooms, buzzing labs, sports fields and stages — every
              corner built for curiosity and joy.
            </p>
          </Reveal>
        </div>

        <RevealGroup
          className="mt-12 grid auto-rows-[150px] grid-cols-4 gap-3 sm:auto-rows-[200px] sm:gap-4"
          stagger={0.09}
        >
          {tiles.map((t) => (
            <motion.figure
              key={t.label}
              variants={item}
              className={`group relative overflow-hidden rounded-[4px] ${t.className}`}
            >
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 font-display text-sm font-semibold text-white">
                {t.label}
              </figcaption>
            </motion.figure>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
