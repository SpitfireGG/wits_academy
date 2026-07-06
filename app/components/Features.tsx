"use client";

import { motion } from "framer-motion";
import { Reveal, RevealGroup, item } from "./Reveal";
import {
  BookIcon,
  FlaskIcon,
  UsersIcon,
  TrophyIcon,
  HeartIcon,
  SparkIcon,
} from "./icons";

const features = [
  { icon: BookIcon, title: "Experienced faculty", desc: "Qualified teachers who mentor students as individuals, not just a class." },
  { icon: FlaskIcon, title: "Modern science labs", desc: "Hands-on physics, chemistry, biology and computing that turn theory into discovery." },
  { icon: UsersIcon, title: "Small class sizes", desc: "Focused attention so no child is ever left behind or unseen." },
  { icon: TrophyIcon, title: "Sports & ECA", desc: "From football to debate, robotics to music — talent finds room to shine." },
  { icon: HeartIcon, title: "Values-based care", desc: "A safe, respectful environment where character grows beside grades." },
  { icon: SparkIcon, title: "Future-ready skills", desc: "Critical thinking, creativity and technology woven through the curriculum." },
];

export function Features() {
  return (
    <section id="why" className="relative bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow text-ink-soft">Why WITS</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Everything a child needs to thrive.
            </h2>
          </Reveal>
        </div>

        <RevealGroup
          className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group relative bg-paper p-8 transition-colors duration-300 hover:bg-paper-2"
            >
              <div className="flex items-start justify-between">
                <f.icon className="h-8 w-8 text-forest-600" />
                <span className="font-body text-xs text-ink-soft/60">
                  0{features.indexOf(f) + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.desc}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
