"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChatIcon, CloseIcon, PhoneIcon, MailIcon, ArrowIcon } from "./icons";

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Chat with WITS Academy"
            className="w-[19rem] overflow-hidden rounded-3xl bg-paper shadow-[0_30px_70px_-24px_rgba(22,25,26,0.55)] ring-1 ring-black/5"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-forest-700 px-5 py-4 text-white">
              <p className="font-display text-base font-bold">Chat with WITS</p>
              <p className="mt-0.5 text-xs text-white/70">We usually reply within a day</p>
            </div>

            <div className="p-5">
              <div className="rounded-2xl rounded-tl-sm border border-line bg-white p-3.5 text-sm leading-relaxed text-ink">
                Hi there! 👋 Questions about admissions, fees or a campus visit? We&apos;re happy to
                help.
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="tel:+97714000000"
                  className="flex items-center gap-3 rounded-xl border border-line px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
                >
                  <PhoneIcon className="h-5 w-5 text-forest-600" />
                  Call admissions
                  <ArrowIcon className="ml-auto h-4 w-4 text-ink-soft" />
                </a>
                <a
                  href="mailto:admissions@witsacademy.edu.np"
                  className="flex items-center gap-3 rounded-xl border border-line px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
                >
                  <MailIcon className="h-5 w-5 text-forest-600" />
                  Email us
                  <ArrowIcon className="ml-auto h-4 w-4 text-ink-soft" />
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-ink group mt-1 w-full !py-3 !text-sm"
                >
                  Request admission info
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-label={open ? "Close chat" : "Chat with us"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="grid h-14 w-14 place-items-center self-end rounded-full bg-forest-600 text-white shadow-[0_14px_34px_-10px_rgba(31,92,51,0.8)] ring-1 ring-white/10 transition-transform hover:scale-105"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "x" : "chat"}
            initial={{ opacity: 0, rotate: -30, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 30, scale: 0.6 }}
            transition={{ duration: 0.18 }}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <ChatIcon className="h-6 w-6" />}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}
