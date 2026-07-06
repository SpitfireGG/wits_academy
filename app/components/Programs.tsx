"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, item } from "./Reveal";
import { ArrowIcon } from "./icons";

const programs = [
  {
    tag: "Grades 1–5",
    title: "Primary Wing",
    desc: "A joyful, activity-rich foundation where reading, numbers and curiosity take root.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80",
  },
  {
    tag: "Grades 6–10 · SEE",
    title: "Secondary School",
    desc: "Rigorous academics meet real-world projects, preparing students to excel in the SEE.",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=80",
  },
  {
    tag: "+2 · Science & Management",
    title: "Higher Secondary",
    desc: "Specialised streams and expert mentors guiding students toward top universities.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
  },
];

export function Programs() {
  return (
    <section id="academics" className="relative bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-line pb-10 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow text-ink-soft">Academics</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 max-w-lg font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
                A pathway for every stage of growth.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-base leading-relaxed text-ink-soft">
              From first letters to final exams — programs designed to challenge,
              inspire and support every learner.
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mt-12 grid gap-8 md:grid-cols-3" stagger={0.12}>
          {programs.map((p, i) => (
            <motion.article key={p.title} variants={item} className="group">
              <a href="#contact" className="block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[4px]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale-[35%] transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-ink/5" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow text-forest-600">
                      {String(i + 1).padStart(2, "0")} · {p.tag}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
                      {p.desc}
                    </p>
                  </div>
                  <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                    <ArrowIcon className="h-4 w-4 -rotate-45 transition-transform group-hover:rotate-0" />
                  </span>
                </div>
              </a>
            </motion.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
