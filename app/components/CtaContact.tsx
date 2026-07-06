"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { PinIcon, PhoneIcon, MailIcon, ArrowIcon, CheckIcon } from "./icons";

const contactItems = [
  { icon: PinIcon, label: "Visit", value: "Baudha, Kathmandu-6, Nepal" },
  { icon: PhoneIcon, label: "Call", value: "+977 1-4000000" },
  { icon: MailIcon, label: "Email", value: "admissions@witsacademy.edu.np" },
];

export function CtaContact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-20 text-paper sm:py-28">
      <div className="topo pointer-events-none absolute inset-0 opacity-[0.5] invert" />
      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div>
            <Reveal>
              <p className="eyebrow text-white/50">Admissions 2026</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 max-w-xl font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl">
                Let&apos;s talk about your child&apos;s next big step.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-white/60">
                Seats are limited. Book a campus visit or request a call back —
                our admissions team will guide you through every step.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-px overflow-hidden rounded-[4px] border border-white/10 bg-white/10 sm:grid-cols-3">
              {contactItems.map((c, i) => (
                <Reveal key={c.label} delay={0.15 + i * 0.07}>
                  <div className="h-full bg-ink p-5">
                    <c.icon className="h-6 w-6 text-forest-400" />
                    <p className="mt-3 text-[11px] uppercase tracking-wider text-white/40">
                      {c.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">{c.value}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Form */}
          <Reveal delay={0.15}>
            <div className="rounded-[6px] bg-paper p-7 text-ink sm:p-9">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[380px] flex-col items-center justify-center text-center"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-forest-50 text-forest-600">
                    <CheckIcon className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold">Thank you!</h3>
                  <p className="mt-2 max-w-xs text-sm text-ink-soft">
                    We&apos;ve received your enquiry. Our team will reach out
                    within one working day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm font-semibold text-forest-600 hover:text-forest-700"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-6"
                >
                  <h3 className="font-display text-xl font-bold">Request admission info</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Parent / Student name" htmlFor="name">
                      <input id="name" required placeholder="Full name" className="input-base" />
                    </Field>
                    <Field label="Phone number" htmlFor="phone">
                      <input id="phone" type="tel" required placeholder="98XXXXXXXX" className="input-base" />
                    </Field>
                  </div>
                  <Field label="Grade of interest" htmlFor="grade">
                    <select id="grade" required className="input-base" defaultValue="">
                      <option value="" disabled>Select a grade</option>
                      <option>Primary (1–5)</option>
                      <option>Secondary (6–10)</option>
                      <option>+2 Science</option>
                      <option>+2 Management</option>
                    </select>
                  </Field>
                  <Field label="Message (optional)" htmlFor="msg">
                    <textarea id="msg" rows={2} placeholder="Anything you'd like us to know…" className="input-base resize-none" />
                  </Field>
                  <button type="submit" className="btn-ink group w-full">
                    Submit enquiry
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-xs text-ink-soft">
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1 block text-xs font-medium uppercase tracking-wide text-ink-soft">
        {label}
      </span>
      {children}
    </label>
  );
}
