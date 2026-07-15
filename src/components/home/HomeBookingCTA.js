"use client";

import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import ScrollSlideIn from "@/components/ui/ScrollSlideIn";

const EXPECTATIONS = [
  "Honest conversation about nutrition, training, and faith",
  "Clear next steps — whether we work together or not",
  "Zoom link sent immediately after you book",
];

export default function HomeBookingCTA() {
  return (
    <section
      id="booking"
      aria-labelledby="booking-heading"
      className="relative z-10 w-full overflow-hidden bg-[#1c1814] py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 80% 60% at 8% 15%, rgba(187,126,59,0.32), transparent 55%)",
            "radial-gradient(ellipse 70% 55% at 92% 75%, rgba(194,101,42,0.22), transparent 52%)",
            "radial-gradient(ellipse 55% 45% at 55% 100%, rgba(228,176,73,0.12), transparent 55%)",
            "linear-gradient(165deg, #241c16 0%, #1c1814 42%, #161310 100%)",
          ].join(", "),
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <ScrollSlideIn direction="left">
          <p className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.36em] text-[#e4b049]">
            <span
              aria-hidden
              className="inline-block h-1 w-10 shrink-0 rounded-sm bg-linear-to-r from-[#bb7e3b] to-[#e4b049]"
            />
            Zoom coaching · One-on-one
          </p>

          <h2
            id="booking-heading"
            className="mt-5 font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-[#f7f6f3] sm:text-5xl"
          >
            Ready to raise your{" "}
            <span className="bg-linear-to-r from-[#bb7e3b] via-[#e4b049] to-[#c2652a] bg-clip-text text-transparent">
              daily standard
            </span>
            ?
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#f7f6f3]/72">
            Book a free discovery call on Zoom. We&apos;ll talk about your
            goals, your obstacles, and whether coaching is the right fit — no
            pitch deck, no pressure.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton href="/book">Schedule on Zoom</PrimaryButton>
            <SecondaryButton href="/contact" tone="dark">
              Send a message
            </SecondaryButton>
          </div>

          <p className="mt-6 text-sm text-[#f7f6f3]/45">
            30-minute discovery calls · Virtual sessions nationwide
          </p>
        </ScrollSlideIn>

        <ScrollSlideIn direction="right" delay={100}>
          <div className="relative overflow-hidden rounded-sm border border-[#bb7e3b]/30 bg-[#f7f6f3] p-8 shadow-[0_28px_70px_-28px_rgba(0,0,0,0.55)] sm:p-10">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#bb7e3b] via-[#e4b049] to-[#c2652a]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-14 -right-10 h-40 w-40 rounded-full bg-[#e4b049]/20 blur-3xl"
            />

            <p className="relative z-10 flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-[#bb7e3b]">
              <span
                aria-hidden
                className="inline-block h-px w-8 bg-linear-to-r from-[#bb7e3b] to-[#e4b049]"
              />
              What to expect
            </p>

            <ul className="relative z-10 mt-8 space-y-5">
              {EXPECTATIONS.map((item, i) => (
                <li key={item} className="flex gap-4">
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#bb7e3b]/40 bg-[#bb7e3b]/10 font-mono text-[0.65rem] font-bold tracking-wider text-[#bb7e3b]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-1.5 text-sm leading-7 text-[#2e2e2e]/80 sm:text-[0.95rem]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="relative z-10 mt-8 border-t border-[#bb7e3b]/15 pt-5 text-xs leading-relaxed tracking-wide text-slate-500">
              Free discovery call · No pitch deck · No pressure
            </p>
          </div>
        </ScrollSlideIn>
      </div>
    </section>
  );
}
