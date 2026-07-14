import Link from "next/link";

import PrimaryButton from "@/components/ui/PrimaryButton";
import ScrollSlideIn from "@/components/ui/ScrollSlideIn";

const STEPS = [
  {
    step: "01",
    title: "Book a discovery call",
    body: "Pick a time on Zoom. No pressure — just a conversation about where you are and where you want to go.",
  },
  {
    step: "02",
    title: "Build your standard",
    body: "Together we design simple habits around nutrition, training, and spiritual rhythm that fit your life.",
  },
  {
    step: "03",
    title: "Show up weekly",
    body: "Accountability calls keep you honest. Adjust the plan as your season changes — because it will.",
  },
];

export default function HomePillarsSection() {
  return (
    <section
      aria-labelledby="approach-heading"
      className="relative z-10 w-full overflow-hidden py-14 sm:py-16 lg:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 8% 12%, rgba(187,126,59,0.18), transparent 42%), radial-gradient(ellipse at 92% 40%, rgba(228,176,73,0.16), transparent 45%), radial-gradient(ellipse at 50% 100%, rgba(194,101,42,0.1), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.36em] text-[#bb7e3b]">
            <span
              aria-hidden
              className="inline-block h-1 w-10 shrink-0 rounded-sm bg-linear-to-r from-[#bb7e3b] to-[#e4b049]"
            />
            The approach
          </p>
          <h2
            id="approach-heading"
            className="mt-4 font-serif text-3xl font-semibold tracking-[-0.02em] text-[#2e2e2e] sm:text-4xl lg:text-5xl"
          >
            Three pillars.{" "}
            <span className="bg-linear-to-r from-[#bb7e3b] via-[#c2652a] to-[#e4b049] bg-clip-text text-transparent">
              One standard.
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Most men don&apos;t need another app or hype speech. They need a
            coach who tells the truth, holds the line, and walks with them
            through nutrition, exercise, and faith.
          </p>
        </div>

        <div className="relative mt-12 grid gap-6 sm:grid-cols-3 sm:gap-6 lg:gap-8">
          <div
            aria-hidden
            className="pointer-events-none absolute top-[2.35rem] right-[16%] left-[16%] hidden h-px bg-linear-to-r from-[#bb7e3b]/20 via-[#e4b049]/55 to-[#c2652a]/20 sm:block"
          />

          {STEPS.map((item, i) => (
            <ScrollSlideIn key={item.step} delay={i * 80}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-[#bb7e3b]/20 bg-white/90 p-6 shadow-[0_12px_40px_-20px_rgba(46,46,46,0.35)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#bb7e3b]/55 hover:shadow-[0_18px_44px_-18px_rgba(187,126,59,0.45)] sm:p-8">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#bb7e3b] via-[#e4b049] to-[#c2652a] opacity-90 transition duration-300 group-hover:opacity-100"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -bottom-8 h-28 w-28 rounded-full bg-[#e4b049]/10 blur-2xl transition duration-500 group-hover:bg-[#bb7e3b]/18"
                />

                <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#e4b049]/50 bg-linear-to-br from-[#bb7e3b] to-[#c2652a] font-mono text-[0.7rem] font-bold tracking-wider text-white shadow-[0_8px_20px_-8px_rgba(187,126,59,0.7)] transition duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_24px_-6px_rgba(194,101,42,0.75)]">
                  {item.step}
                </span>
                <h3 className="relative z-10 mt-5 font-serif text-xl font-semibold text-[#2e2e2e] transition group-hover:text-[#bb7e3b]">
                  {item.title}
                </h3>
                <p className="relative z-10 mt-3 text-sm leading-7 text-slate-600">
                  {item.body}
                </p>
              </article>
            </ScrollSlideIn>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-end gap-5">
          <Link
            href="/services/nutrition"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#bb7e3b] underline-offset-4 transition hover:text-[#c2652a] hover:underline"
          >
            Explore the pillars
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
          <PrimaryButton href="/book">Book your first call</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
