"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

// ── Geometry (SVG user space 800×800) ────────────────────────────
const CX = 400;
const CY = 400;
const R = 205;
const pt = (deg: number): [number, number] => {
  const r = (deg * Math.PI) / 180;
  return [CX + R * Math.cos(r), CY - R * Math.sin(r)];
};

// Open arc: 72° → 372° (gap at top-right), traversing all five nodes.
const arcPath = (() => {
  const A0 = 72;
  const A1 = 372;
  const N = 120;
  let d = "";
  for (let i = 0; i <= N; i++) {
    const a = A0 + ((A1 - A0) * i) / N;
    const [x, y] = pt(a);
    d += (i ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1) + " ";
  }
  return d;
})();

type Step = {
  num: string;
  title: string;
  desc: string;
  node: [number, number];
  card: [number, number];
};

const steps: Step[] = [
  { num: "1", title: "Foundation", desc: "Early years built on care, play and the joy of first discoveries.", node: pt(72), card: [706, 150] },
  { num: "2", title: "Discovery", desc: "Hands-on, project-based learning that turns questions into understanding.", node: pt(147), card: [64, 232] },
  { num: "3", title: "Mastery", desc: "Academic rigour and the discipline that leads to SEE and +2 excellence.", node: pt(222), card: [96, 742] },
  { num: "4", title: "Character", desc: "Empathy, integrity and leadership woven into everyday school life.", node: pt(297), card: [664, 748] },
  { num: "5", title: "Future", desc: "Guidance toward top universities, careers and a life of contribution.", node: pt(12), card: [776, 452] },
];

const pct = (v: number) => `${(v / 800) * 100}%`;

const nodeStyle: React.CSSProperties = {
  background: "radial-gradient(circle at 50% 32%, #8b908c 0%, #4c514e 55%, #2b2f2d 100%)",
  boxShadow:
    "inset 0 2px 3px rgba(255,255,255,0.5), inset 0 -4px 7px rgba(0,0,0,0.6), 0 8px 16px -4px rgba(22,25,26,0.5)",
};

export function Approach() {
  return (
    <section id="approach" className="relative overflow-hidden bg-paper-2 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow text-ink-soft">The WITS way</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              How we grow a child, step by step
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-ink-soft">
              A deliberate journey — each stage building on the last, from a
              child&apos;s first day to their first step into the world.
            </p>
          </Reveal>
        </div>

        {/* ── 3D tube diagram (xl+) ── */}
        <div className="mt-4 hidden xl:block">
          <div className="relative mx-auto aspect-square w-full max-w-[780px]">
            {/* SVG: tube + dotted connectors (behind the HTML) */}
            <svg viewBox="0 0 800 800" className="absolute inset-0 h-full w-full overflow-visible">
              <defs>
                <linearGradient id="tube-face" x1="0" y1="80" x2="0" y2="720" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#f4f3ef" />
                  <stop offset="0.5" stopColor="#d6d4cc" />
                  <stop offset="1" stopColor="#adaba1" />
                </linearGradient>
                <filter id="tube-shadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#16191a" floodOpacity="0.22" />
                </filter>
              </defs>

              {/* dotted connectors */}
              {steps.map((s, i) => (
                <motion.line
                  key={s.num}
                  x1={s.node[0]}
                  y1={s.node[1]}
                  x2={s.card[0]}
                  y2={s.card[1]}
                  stroke="rgba(22,25,26,0.5)"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeDasharray="2 7"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.12 }}
                />
              ))}

              {/* tube — base */}
              <motion.path
                d={arcPath}
                fill="none"
                stroke="url(#tube-face)"
                strokeWidth={44}
                strokeLinecap="round"
                filter="url(#tube-shadow)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* tube — specular highlight */}
              <motion.path
                d={arcPath}
                fill="none"
                stroke="rgba(255,255,255,0.55)"
                strokeWidth={10}
                strokeLinecap="round"
                transform="translate(0,-7)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>

            {/* Center content */}
            <div className="absolute left-1/2 top-1/2 w-48 -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="eyebrow text-forest-600">Our approach</p>
              <p className="mt-2 font-display text-xl font-bold leading-tight text-ink">
                Every stage, with intention.
              </p>
            </div>

            {/* Nodes */}
            {steps.map((s) => (
              <div
                key={s.num}
                className="absolute grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full font-display text-lg font-semibold text-white"
                style={{ left: pct(s.node[0]), top: pct(s.node[1]), ...nodeStyle }}
              >
                {s.num}
              </div>
            ))}

            {/* Cards */}
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                className="absolute w-48 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-5 shadow-[0_1px_2px_rgba(22,25,26,0.04),0_24px_50px_-24px_rgba(22,25,26,0.45)] ring-1 ring-black/[0.03]"
                style={{ left: pct(s.card[0]), top: pct(s.card[1]) }}
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="font-display text-base font-bold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Vertical stepper (below xl) ── */}
        <div className="mt-12 xl:hidden">
          <ol className="relative mx-auto max-w-xl space-y-6 before:absolute before:left-[23px] before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-line">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.num} delay={i * 0.06} className="relative flex gap-5">
                <div
                  className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full font-display text-lg font-semibold text-white"
                  style={nodeStyle}
                >
                  {s.num}
                </div>
                <div className="flex-1 rounded-2xl bg-white p-5 shadow-[0_1px_2px_rgba(22,25,26,0.04),0_20px_40px_-24px_rgba(22,25,26,0.4)] ring-1 ring-black/[0.03]">
                  <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
