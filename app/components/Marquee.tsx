const items = [
  "SEE Board Excellence",
  "STEM & Robotics",
  "District Sports Champions",
  "Music & Fine Arts",
  "Values-Based Learning",
  "Global Citizenship",
  "Reading for Life",
  "Debate & Public Speaking",
];

export function Marquee() {
  return (
    <section className="border-b border-line bg-paper py-5">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center">
          {[...items, ...items].map((it, i) => (
            <span key={i} className="flex items-center whitespace-nowrap">
              <span className="font-display text-lg font-medium text-ink/80 sm:text-xl">
                {it}
              </span>
              <span className="mx-7 text-forest-500">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
