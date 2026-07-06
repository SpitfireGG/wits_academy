"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon, ArrowIcon } from "./icons";

export function AnnouncementWidget() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Floating button — left edge, vertically centred */}
      <button
        type="button"
        aria-label="Read our latest announcement"
        onClick={() => setOpen(true)}
        className="group fixed left-3 top-1/2 z-40 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-paper-2 shadow-[0_12px_30px_-8px_rgba(22,25,26,0.35)] ring-1 ring-black/10 transition-transform hover:scale-105 sm:h-14 sm:w-14"
      >
        <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-forest-500 ring-2 ring-paper-2" />
        </span>
        <Image
          src="/notice-icon.png"
          alt=""
          width={26}
          height={26}
          className="h-[22px] w-[22px] object-contain transition-transform group-hover:-rotate-12 sm:h-6 sm:w-6"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-ink/45 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="announce-title"
              className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-paper shadow-[0_40px_90px_-30px_rgba(22,25,26,0.6)] ring-1 ring-black/5"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="topo pointer-events-none absolute inset-0 opacity-70" />

              <div className="relative p-7 text-center sm:p-9">
                {/* Crest lockup */}
                <div className="flex items-center justify-center gap-2.5">
                  <Image
                    src="/schoollogo.jpg"
                    alt="WITS Academy crest"
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain"
                  />
                  <span className="font-display text-lg font-extrabold tracking-tight text-ink">
                    WITS Academy
                  </span>
                </div>

                <div className="mx-auto mt-6 h-px w-16 bg-line" />

                <h2
                  id="announce-title"
                  className="mt-6 font-display text-2xl font-bold tracking-tight text-ink sm:text-[26px]"
                >
                  🎉 Admissions Open for 2026!
                </h2>

                <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
                  Applications for the <span className="font-semibold text-ink">2026 intake</span> are
                  now open. Give your child a place in a school built on twenty-five years of{" "}
                  <span className="font-semibold text-forest-700">Education for Civilization</span>.
                </p>
                <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
                  Visit us at Baudha, Kathmandu-6, or apply online. We can&apos;t wait to welcome
                  your family to the WITS community.
                </p>

                <div className="mt-8 flex flex-col-reverse items-center justify-center gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="btn-ghost !py-3"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="btn-ink group !py-3"
                  >
                    Apply now
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              <button
                type="button"
                aria-label="Close announcement"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-ink-soft transition-colors hover:bg-black/5 hover:text-ink"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
