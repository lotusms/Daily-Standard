"use client";

import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import ScrollSlideIn from "@/components/ui/ScrollSlideIn";

export default function HomeBookingCTA() {
  return (
    <section
      id="booking"
      aria-labelledby="booking-heading"
      className="relative z-10 w-full overflow-hidden border-t border-slate-200 bg-linear-to-br from-yellow-50/80 via-white to-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <ScrollSlideIn direction="left">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.36em] text-slate-500">
            Zoom coaching · One-on-one
          </p>

          <h2
            id="booking-heading"
            className="mt-5 font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-slate-800 sm:text-5xl"
          >
            Ready to raise your{" "}
            <span className="text-yellow-500">daily standard</span>?
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
            Book a free discovery call on Zoom. We&apos;ll talk about your
            goals, your obstacles, and whether coaching is the right fit — no
            pitch deck, no pressure.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton href="/book">Schedule on Zoom</PrimaryButton>
            <SecondaryButton href="/contact">Send a message</SecondaryButton>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            30-minute discovery calls · Virtual sessions nationwide
          </p>
        </ScrollSlideIn>

        <ScrollSlideIn direction="right" delay={100}>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg sm:p-10">
            <p className="font-mono text-xs tracking-[0.3em] text-yellow-600">
              WHAT TO EXPECT
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <li className="flex gap-3">
                <span className="text-yellow-500" aria-hidden>—</span>
                Honest conversation about nutrition, training, and faith
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500" aria-hidden>—</span>
                Clear next steps — whether we work together or not
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-500" aria-hidden>—</span>
                Zoom link sent immediately after you book
              </li>
            </ul>
          </div>
        </ScrollSlideIn>
      </div>
    </section>
  );
}
