"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowIcon } from "./icons";

const BUILDING =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80";
const SKY =
  "linear-gradient(180deg,#a9c9e6 0%,#c3d6e6 30%,#dfe1dc 60%,#f4f2ec 100%)";

/* Full-viewport SVG: a solid paper layer with WITS / ACADEMY cut out of it. */
function MaskLayer() {
  return (
    <svg className="h-full w-full" aria-hidden>
      <defs>
        <mask id="wits-cutout">
          <rect width="100%" height="100%" fill="white" />
          <text
            x="50%"
            y="46%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="black"
            className="font-display"
            style={{ fontSize: "clamp(5rem,25vw,28rem)", fontWeight: 800, letterSpacing: "-0.04em" }}
          >
            WITS
          </text>
          <text
            x="50%"
            y="64%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="black"
            className="font-display"
            style={{ fontSize: "clamp(1.3rem,5vw,4rem)", fontWeight: 700, letterSpacing: "0.38em" }}
          >
            ACADEMY
          </text>
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="#f4f2ec" mask="url(#wits-cutout)" />
    </svg>
  );
}

/* Thin white outline that appears just before the solid mask. */
function OutlineLayer() {
  const common = {
    x: "50%",
    textAnchor: "middle" as const,
    dominantBaseline: "middle" as const,
    fill: "none",
    className: "font-display",
  };
  return (
    <svg className="h-full w-full" aria-hidden>
      <text
        {...common}
        y="46%"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth={1.4}
        style={{ fontSize: "clamp(5rem,25vw,28rem)", fontWeight: 800, letterSpacing: "-0.04em" }}
      >
        WITS
      </text>
      <text
        {...common}
        y="64%"
        stroke="rgba(255,255,255,0.75)"
        strokeWidth={1}
        style={{ fontSize: "clamp(1.3rem,5vw,4rem)", fontWeight: 700, letterSpacing: "0.38em" }}
      >
        ACADEMY
      </text>
    </svg>
  );
}

function Clouds({ variant }: { variant: "far" | "near" }) {
  if (variant === "far") {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[8%] left-[8%] h-[26vh] w-[45%] rounded-[50%] bg-white/45 blur-3xl" />
        <div className="absolute top-[2%] right-[6%] h-[24vh] w-[42%] rounded-[50%] bg-white/40 blur-3xl" />
      </div>
    );
  }
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -bottom-28 left-[-12%] h-[24vh] w-[70%] rounded-[50%] bg-white/35 blur-3xl" />
      <div className="absolute -bottom-32 right-[-10%] h-[26vh] w-[65%] rounded-[50%] bg-white/30 blur-3xl" />
      <div className="absolute -bottom-10 left-1/2 h-[18vh] w-[80%] -translate-x-1/2 rounded-[50%] bg-white/25 blur-3xl" />
    </div>
  );
}

function HeroCopy({ onDark = false }: { onDark?: boolean }) {
  return (
    <>
      <p className={`eyebrow mb-4 ${onDark ? "text-white/80" : "text-ink-soft"}`}>
        Est. 1999 · Baudha, Kathmandu
      </p>
      <h1
        className={`mx-auto max-w-5xl font-display text-4xl font-extrabold leading-[1] tracking-[-0.03em] sm:whitespace-nowrap sm:text-5xl lg:text-6xl ${
          onDark ? "text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]" : "text-ink"
        }`}
      >
        Where bright minds take flight.
      </h1>
      <p className={`mx-auto mt-5 max-w-md text-base sm:text-lg ${onDark ? "text-white/85" : "text-ink-soft"}`}>
        A values-driven secondary school — twenty-five years of turning
        curiosity into confidence.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="#contact"
          className={
            onDark
              ? "group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-ink transition-transform hover:-translate-y-0.5"
              : "btn-ink group"
          }
        >
          Apply for 2026
          <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href="#academics"
          className={
            onDark
              ? "inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-4 text-base font-medium text-white transition-colors hover:border-white hover:bg-white/10"
              : "btn-ghost"
          }
        >
          Explore academics
        </a>
      </div>
    </>
  );
}

function ScrollHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: p } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(p, [0, 0.24], [1, 0]);
  const heroY = useTransform(p, [0, 0.24], [0, -110]);
  const bScale = useTransform(p, [0, 1], [1, 3.9]);
  const cloudNearY = useTransform(p, [0, 1], [0, 170]);
  const outlineOpacity = useTransform(p, [0.32, 0.48, 0.62], [0, 1, 0]);
  const maskOpacity = useTransform(p, [0.5, 0.8], [0, 1]);
  const hintOpacity = useTransform(p, [0, 0.07], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[350vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ background: SKY }}>
        {/* Building — FULLSCREEN at rest, zooms further on scroll */}
        <motion.div
          className="absolute inset-0 z-20 origin-center will-change-transform"
          style={{ scale: bScale }}
        >
          <Image src={BUILDING} alt="The WITS Academy campus" fill priority sizes="100vw" className="object-cover" />
        </motion.div>

        {/* Legibility scrim behind the headline */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[25] h-1/2 bg-gradient-to-b from-black/45 via-black/15 to-transparent" />

        {/* Near clouds (foreground parallax fog at the base) */}
        <motion.div className="absolute inset-0 z-30" style={{ y: cloudNearY }}>
          <Clouds variant="near" />
        </motion.div>

        {/* Hero copy — parallax up + fade */}
        <motion.div
          className="absolute inset-x-0 top-[26%] z-40 px-5 text-center"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <HeroCopy onDark />
        </motion.div>

        {/* Outline reveal */}
        <motion.div className="absolute inset-0 z-50" style={{ opacity: outlineOpacity }}>
          <OutlineLayer />
        </motion.div>

        {/* Masking climax — paper layer with the letters cut out */}
        <motion.div className="absolute inset-0 z-[60]" style={{ opacity: maskOpacity }}>
          <MaskLayer />
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-7 left-1/2 z-[70] -translate-x-1/2 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.4)]">
            Scroll
          </p>
          <motion.div
            aria-hidden
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto mt-2 h-8 w-5 rounded-full border border-white/70 p-1"
          >
            <span className="mx-auto block h-1.5 w-1 rounded-full bg-white/80" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* Static fallback: mobile / reduced-motion / no-JS. */
function StaticHero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-28 text-center"
      style={{ background: SKY }}
    >
      <Clouds variant="far" />
      <div className="relative z-10">
        <HeroCopy />
      </div>
      <div className="relative z-10 mt-10 h-[38vh] w-full max-w-3xl overflow-hidden rounded-t-[2rem]">
        <Image src={BUILDING} alt="The WITS Academy campus" fill sizes="100vw" className="object-cover object-top" />
      </div>
    </section>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const [enhanced, setEnhanced] = useState(false);

  // Animate on every screen size; only reduced-motion users get the static hero.
  useEffect(() => {
    setEnhanced(!reduce);
  }, [reduce]);

  return enhanced ? <ScrollHero /> : <StaticHero />;
}
