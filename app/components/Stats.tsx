"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type Stat = { value: number; suffix?: string; label: string };

const stats: Stat[] = [
  { value: 25, suffix: "+", label: "Years of teaching" },
  { value: 2000, suffix: "+", label: "Alumni worldwide" },
  { value: 60, suffix: "+", label: "Faculty & mentors" },
  { value: 95, suffix: "%", label: "SEE pass rate" },
];

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="border-y border-line bg-paper">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <dl className="grid grid-cols-2 divide-x divide-line md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-4 py-10 text-center sm:py-14 ${
                i >= 2 ? "border-t border-line md:border-t-0" : ""
              } ${i % 2 === 1 ? "" : ""}`}
            >
              <dd className="font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-3 text-sm text-ink-soft">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
