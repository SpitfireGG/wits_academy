import Image from "next/image";
import { PinIcon, PhoneIcon, MailIcon } from "./icons";

const columns = [
  { title: "School", links: ["About WITS", "Our Approach", "Leadership", "Careers"] },
  { title: "Academics", links: ["Primary Wing", "Secondary (SEE)", "+2 Science", "+2 Management"] },
  { title: "Community", links: ["Admissions", "Campus Life", "Events", "Alumni"] },
];

const socials = ["Facebook", "Instagram", "YouTube", "TikTok"];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-paper">
      <div className="mx-auto max-w-[88rem] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-paper">
                <Image
                  src="/schoollogo.jpg"
                  alt="WITS Academy crest"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-base font-bold">WITS Academy</span>
                <span className="block text-xs text-white/50">Secondary School</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Education for Civilization. Nurturing confident, compassionate
              learners in Baudha, Kathmandu since 1999.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-white/60">
              <li className="flex items-center gap-2.5">
                <PinIcon className="h-4 w-4 text-forest-400" /> Baudha, Kathmandu-6, Nepal
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="h-4 w-4 text-forest-400" /> +977 1-4000000
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon className="h-4 w-4 text-forest-400" /> info@witsacademy.edu.np
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow text-white/40">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/70 transition-colors hover:text-paper">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-center text-xs text-white/50 sm:text-left">
            © {new Date().getFullYear()} WITS Academy Secondary School. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                className="rounded-full border border-white/15 px-4 py-1.5 text-xs text-white/70 transition-colors hover:border-white/40 hover:text-paper"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
