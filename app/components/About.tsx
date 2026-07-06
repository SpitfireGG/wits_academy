import Image from "next/image";
import { Reveal } from "./Reveal";
import { TorchIcon, GlobeIcon, ShieldIcon } from "./icons";

const pillars = [
  {
    icon: TorchIcon,
    title: "Knowledge",
    desc: "The torch of learning that lights every path.",
  },
  {
    icon: GlobeIcon,
    title: "Civilization",
    desc: "Global citizens rooted in community.",
  },
  {
    icon: ShieldIcon,
    title: "Character",
    desc: "Integrity and empathy in daily life.",
  },
];

export function About() {
  return (
    <section id="about" className="relative bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Image */}
          <Reveal className="relative order-last lg:order-first">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80"
                alt="Students on the WITS Academy campus"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <p className="eyebrow text-ink-soft">Our story</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 max-w-xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
                A school built on one quietly radical idea.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
                For over two decades in Baudha, Kathmandu, WITS Academy has
                believed that education is more than exams — it is the
                foundation of a thoughtful, compassionate society. Every symbol
                in our crest, from the torch of knowledge to the globe of
                citizenship, carries that promise forward.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-3">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={0.15 + i * 0.08}>
                  <div className="h-full bg-paper p-6">
                    <p.icon className="h-7 w-7 text-forest-600" />
                    <h3 className="mt-4 font-display text-lg font-bold text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
