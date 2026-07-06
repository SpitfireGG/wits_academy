"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon, MenuIcon } from "./icons";

const links = [
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Academics", href: "#academics" },
  { label: "Campus", href: "#campus" },
  { label: "Voices", href: "#voices" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-line bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/schoollogo.jpg"
              alt="WITS Academy crest"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />
            <span className="leading-none">
              <span className="block font-display text-[17px] font-bold tracking-tight text-ink">
                WITS Academy
              </span>
              <span className="mt-0.5 block text-[11px] tracking-wide text-ink-soft">
                Secondary School
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-forest-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <a href="#contact" className="btn-ink hidden !px-5 !py-2.5 !text-sm sm:inline-flex">
              Apply Now
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink lg:hidden"
            >
              {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 top-[70px] z-40 bg-ink/20 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute inset-x-3 top-[74px] z-50 overflow-hidden rounded-3xl border border-line bg-paper p-3 shadow-lift lg:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line/70 px-3 py-4 font-display text-xl font-semibold text-ink last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-ink mt-3 w-full"
              >
                Apply Now
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
