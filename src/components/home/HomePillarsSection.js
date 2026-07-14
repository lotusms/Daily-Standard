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
      className="relative z-10 w-full py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.36em] text-slate-500">
            The approach
          </p>
          <h2
            id="approach-heading"
            className="mt-4 font-serif text-3xl font-semibold tracking-[-0.02em] text-slate-800 sm:text-4xl lg:text-5xl"
          >
            Three pillars. One standard.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Most men don&apos;t need another app or hype speech. They need a
            coach who tells the truth, holds the line, and walks with them
            through nutrition, exercise, and faith.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {STEPS.map((item, i) => (
            <ScrollSlideIn key={item.step} delay={i * 80}>
              <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#bb7e3b]/45 hover:shadow-md sm:p-8">
                <p className="font-mono text-xs tracking-[0.3em] text-[#bb7e3b]">
                  {item.step}
                </p>
                <h3 className="mt-4 font-serif text-xl font-semibold text-slate-800">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.body}
                </p>
              </article>
            </ScrollSlideIn>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <PrimaryButton href="/book">Book your first call</PrimaryButton>
          <Link
            href="/services/nutrition"
            className="inline-flex items-center text-sm font-semibold text-slate-700 underline-offset-4 hover:text-slate-900 hover:underline"
          >
            Explore the pillars →
          </Link>
        </div>
      </div>
    </section>
  );
}
