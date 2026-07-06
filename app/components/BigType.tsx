import { Reveal } from "./Reveal";
import { ArrowIcon } from "./icons";

const rows = [
  {
    index: "01",
    word: "Learn",
    note: "Rigorous academics that build genuine understanding — not just marks.",
  },
  {
    index: "02",
    word: "Grow",
    note: "Sport, art, music and debate that stretch every kind of talent.",
  },
  {
    index: "03",
    word: "Lead",
    note: "Character, empathy and confidence to step forward and make a difference.",
  },
];

export function BigType() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow text-white/50">What a WITS education gives</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight sm:text-4xl">
              Three promises we keep for every student.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              These aren&apos;t slogans on a wall. They shape our timetable, our
              teachers, and the way a child feels walking through our gate.
            </p>
          </Reveal>
        </div>

        <div>
          {rows.map((r, i) => (
            <Reveal key={r.word} delay={i * 0.08}>
              <div className="group flex items-center gap-6 border-b border-white/10 py-8 sm:gap-10 sm:py-10">
                <span className="font-body text-sm font-medium text-white/40">
                  {r.index}
                </span>
                <h3 className="flex-1 font-display text-[3.4rem] font-bold leading-[0.9] tracking-tight text-paper transition-colors sm:text-8xl">
                  {r.word}
                </h3>
                <p className="hidden max-w-xs text-sm leading-relaxed text-white/60 md:block">
                  {r.note}
                </p>
                <ArrowIcon className="hidden h-8 w-8 shrink-0 text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-forest-400 sm:block" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
