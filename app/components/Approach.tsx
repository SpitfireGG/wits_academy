"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

// ── Fixed design stage; scaled to fit any width so mobile === desktop ──
const STAGE_W = 1020;
const STAGE_H = 770;
const CX = 500;
const CY = 375;
const R = 185;
const NODE_R = 23;
const CARD_HW = 111; // card half-width
const CARD_HH = 62; // card half-height (approx)

const pt = (deg: number): [number, number] => {
  const r = (deg * Math.PI) / 180;
  return [CX + R * Math.cos(r), CY - R * Math.sin(r)];
};

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
  { num: "1", title: "Foundation", desc: "Early years built on care, play and the joy of first discoveries.", node: pt(72), card: [557, 40] },
  { num: "2", title: "Discovery", desc: "Hands-on, project-based learning that turns questions into understanding.", node: pt(147), card: [118, 250] },
  { num: "3", title: "Mastery", desc: "Academic rigour and the discipline that leads to SEE and +2 excellence.", node: pt(222), card: [214, 662] },
  { num: "4", title: "Character", desc: "Empathy, integrity and leadership woven into everyday school life.", node: pt(297), card: [722, 678] },
  { num: "5", title: "Future", desc: "Guidance toward top universities, careers and a life of contribution.", node: pt(12), card: [902, 228] },
];

// Wire endpoints: a dot just outside the node and a dot just outside the card
// (the line never touches the card).
function connector([nx, ny]: [number, number], [cx, cy]: [number, number]) {
  const dx = cx - nx;
  const dy = cy - ny;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const start: [number, number] = [nx + (NODE_R + 4) * ux, ny + (NODE_R + 4) * uy];
  const t = Math.min(CARD_HW / (Math.abs(dx) || 1e-6), CARD_HH / (Math.abs(dy) || 1e-6));
  const edge: [number, number] = [cx - t * dx, cy - t * dy];
  const end: [number, number] = [edge[0] - 13 * ux, edge[1] - 13 * uy];
  return { start, end };
}

const nodeStyle: React.CSSProperties = {
  background: "radial-gradient(circle at 50% 32%, #8b908c 0%, #4c514e 55%, #2b2f2d 100%)",
  boxShadow:
    "inset 0 2px 3px rgba(255,255,255,0.5), inset 0 -4px 7px rgba(0,0,0,0.6), 0 8px 16px -4px rgba(22,25,26,0.5)",
};

export function Approach() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setScale(Math.min(el.clientWidth / STAGE_W, 1));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

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

        {/* Scalable stage — identical layout on every screen */}
        <div
          ref={wrapRef}
          className="relative mx-auto mt-6 w-full max-w-[1020px]"
          style={{ height: STAGE_H * scale }}
        >
          <div
            className="absolute left-1/2 top-0"
            style={{
              width: STAGE_W,
              height: STAGE_H,
              transform: `translateX(-50%) scale(${scale})`,
              transformOrigin: "top center",
            }}
          >
            {/* SVG: tube, wires, dots */}
            <svg
              width={STAGE_W}
              height={STAGE_H}
              viewBox={`0 0 ${STAGE_W} ${STAGE_H}`}
              className="pointer-events-none absolute inset-0 overflow-visible"
              aria-hidden
            >
              <defs>
                <linearGradient id="tube-face" x1="0" y1="150" x2="0" y2="660" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#f4f3ef" />
                  <stop offset="0.5" stopColor="#d6d4cc" />
                  <stop offset="1" stopColor="#adaba1" />
                </linearGradient>
                <filter id="tube-shadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#16191a" floodOpacity="0.22" />
                </filter>
              </defs>

              {/* wires + end dots */}
              {steps.map((s, i) => {
                const { start, end } = connector(s.node, s.card);
                return (
                  <motion.g
                    key={s.num}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.9 + i * 0.12 }}
                  >
                    <line
                      x1={start[0]}
                      y1={start[1]}
                      x2={end[0]}
                      y2={end[1]}
                      stroke="rgba(146,136,122,0.7)"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeDasharray="2 8"
                    />
                    <circle cx={start[0]} cy={start[1]} r={6} fill="#9c9284" />
                    <circle cx={end[0]} cy={end[1]} r={6} fill="#9c9284" />
                  </motion.g>
                );
              })}

              {/* tube base */}
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
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* tube highlight */}
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
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>

            {/* Center content */}
            <div
              className="absolute text-center"
              style={{ left: CX, top: CY, width: 210, transform: "translate(-50%,-50%)" }}
            >
              <p className="eyebrow text-forest-600">Our approach</p>
              <p className="mt-2 font-display text-xl font-bold leading-tight text-ink">
                Every stage, with intention.
              </p>
            </div>

            {/* Nodes */}
            {steps.map((s) => (
              <div
                key={s.num}
                className="absolute grid place-items-center rounded-full font-display text-lg font-semibold text-white"
                style={{
                  left: s.node[0],
                  top: s.node[1],
                  width: NODE_R * 2,
                  height: NODE_R * 2,
                  transform: "translate(-50%,-50%)",
                  ...nodeStyle,
                }}
              >
                {s.num}
              </div>
            ))}

            {/* Cards */}
            {steps.map((s, i) => (
              <div
                key={s.num}
                className="absolute"
                style={{ left: s.card[0], top: s.card[1], width: 222, transform: "translate(-50%,-50%)" }}
              >
                <motion.div
                  className="rounded-2xl bg-white p-5 shadow-[0_1px_2px_rgba(22,25,26,0.04),0_24px_50px_-24px_rgba(22,25,26,0.45)] ring-1 ring-black/[0.03]"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="font-display text-base font-bold text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
