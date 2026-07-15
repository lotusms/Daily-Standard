import Image from "next/image";
import Link from "next/link";

import {
  FaithWatermark,
  MentalFitnessWatermark,
  NutritionWatermark,
} from "@/components/home/HomeValueBarWatermarks";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import ScrollSlideIn from "@/components/ui/ScrollSlideIn";
import { orgName } from "@/config";

const FITNESS_AREAS = [
  {
    number: "01",
    label: "Physical fitness",
    title: "Total Fitness",
    body: "Nutrition and exercise working together — fuel that supports training, training that supports a life you can sustain. Strength, energy, and habits you can keep without living in a spreadsheet or a gym app.",
    href: "/services/nutrition",
    hrefLabel: "Explore nutrition",
    hrefSecondary: "/services/exercise",
    hrefSecondaryLabel: "Explore exercise",
    Watermark: NutritionWatermark,
    watermarkClass:
      "pointer-events-none absolute inset-0 m-auto h-[92%] w-[92%] text-[#e4b049] opacity-[0.04] transition duration-300 group-hover:opacity-[0.07]",
  },
  {
    number: "02",
    label: "Mental fitness",
    title: "Mental Fitness",
    body: "Clearer thinking, steadier mood, and practical steps that protect your headspace — accountability, honest conversation, and habits that reduce overwhelm so you show up present for work and family.",
    href: "/book",
    hrefLabel: "Talk it through",
    Watermark: MentalFitnessWatermark,
    watermarkClass:
      "pointer-events-none absolute inset-0 m-auto h-[92%] w-[92%] text-[#e4b049] opacity-[0.04] transition duration-300 group-hover:opacity-[0.07]",
  },
  {
    number: "03",
    label: "Spiritual fitness",
    title: "Spiritual Fitness",
    body: "For many men, a deeper sense of purpose and meaning holds everything else together. We offer faith-centered coaching for those who want it — respectful of where you are, never pressure to believe a certain way, and always optional within the wider standard.",
    href: "/services/faith",
    hrefLabel: "Explore faith coaching",
    Watermark: FaithWatermark,
    // Smaller bible mark — the full artwork felt oversized vs nutrition/mental.
    watermarkClass:
      "pointer-events-none absolute inset-0 m-auto h-[62%] w-[62%] text-[#e4b049] opacity-[0.04] transition duration-300 group-hover:opacity-[0.07]",
  },
];

const PRINCIPLES = [
  {
    title: "Truth over hype",
    body: "No toxic positivity. No miracle promises. Honest coaching about what change costs — and grace when you miss the mark.",
  },
  {
    title: "Standards, not streaks",
    body: "We build daily standards you can return to after a bad week. Perfection isn't the goal. Consistency over years is.",
  },
  {
    title: "One life, integrated",
    body: "Physical, mental, and spiritual fitness aren't rival projects. They're dimensions of the same man — coached as a whole, not as silos.",
  },
];

export default function AboutPageContent() {
  return (
    <main className="relative z-10 w-full">
      {/* Intro hero — editorial, not full-bleed dark like Approaches */}
      <section className="relative overflow-hidden pt-[calc(6.5rem+env(safe-area-inset-top,0px))] pb-16 sm:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 12% 0%, rgba(187,126,59,0.18), transparent 42%), radial-gradient(ellipse at 88% 30%, rgba(228,176,73,0.12), transparent 45%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-end gap-12 px-6 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-12">
          <div>
            <p className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.36em] text-[#bb7e3b]">
              <span
                aria-hidden
                className="inline-block h-1 w-10 shrink-0 rounded-sm bg-linear-to-r from-[#bb7e3b] to-[#e4b049]"
              />
              About
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-[-0.03em] text-[#2e2e2e] sm:text-5xl lg:text-6xl">
              About {orgName}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              For men who are tired of starting over. We coach toward a fuller
              state of fitness — physical, mental, and spiritual — one Zoom call
              at a time.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href="/book">Book a discovery call</PrimaryButton>
              <SecondaryButton href="#fitness">The three areas</SecondaryButton>
            </div>
          </div>

          <ScrollSlideIn direction="right">
            <div className="relative aspect-4/3 overflow-hidden rounded-sm shadow-[0_28px_70px_-36px_rgba(46,46,46,0.45)] ring-1 ring-[#bb7e3b]/25">
              <Image
                src="/images/about/coach.png"
                alt="A coach in a quiet workspace with notebook and coffee"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 40vw"
                quality={88}
                className="object-cover object-[center_20%]"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#bb7e3b] via-[#e4b049] to-[#c2652a]"
              />
            </div>
          </ScrollSlideIn>
        </div>
      </section>

      {/* Mission */}
      <section className="relative border-y border-[#bb7e3b]/15 bg-[#f7f6f3]/80 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs tracking-[0.3em] text-[#bb7e3b]">
              The mission
            </p>
            <p className="mt-5 font-serif text-2xl leading-snug text-[#2e2e2e] sm:text-3xl">
              Most men don&apos;t need more information. They need a coach who
              tells the truth, holds the line, and meets them where they are.
            </p>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Sessions happen on Zoom — after the kids are in bed, or on a lunch
              break between meetings. Accountability is real. The standard is
              daily. {orgName} helps men get stronger in body, clearer in mind,
              and more grounded in purpose — without shame, and without
              one-size-fits-all programs.
            </p>
          </div>
        </div>
      </section>

      {/* Three areas of fitness */}
      <section
        id="fitness"
        className="relative scroll-mt-28 overflow-hidden bg-[#1c1814] py-16 sm:py-20 lg:py-24"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 0%, rgba(187,126,59,0.26), transparent 45%), radial-gradient(ellipse at 90% 90%, rgba(228,176,73,0.12), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.36em] text-[#e4b049]">
              <span
                aria-hidden
                className="inline-block h-1 w-10 shrink-0 rounded-sm bg-linear-to-r from-[#bb7e3b] to-[#e4b049]"
              />
              A better state of fitness
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-[-0.02em] text-[#f7f6f3] sm:text-4xl">
              Three areas. One integrated life.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#f7f6f3]/65 sm:text-base">
              We believe a man&apos;s fitness is more than the gym or the plate.
              Lasting change usually needs attention in three areas — physical,
              mental, and spiritual — weighted differently for each person.
            </p>
          </div>

          <ul className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
            {FITNESS_AREAS.map((area, i) => {
              const { Watermark } = area;
              return (
                <li key={area.title} className="h-full">
                  <ScrollSlideIn delay={i * 70} className="h-full">
                    <article className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-[#bb7e3b]/25 bg-[#241c16]/85 p-7 transition duration-300 hover:border-[#e4b049]/45">
                      <Watermark className={area.watermarkClass} />
                      <span className="relative z-10 font-mono text-[0.65rem] tracking-[0.28em] text-[#e4b049]">
                        {area.number}
                      </span>
                      <p className="relative z-10 mt-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#bb7e3b]/90">
                        {area.label}
                      </p>
                      <h3 className="relative z-10 mt-2 font-serif text-2xl font-semibold text-[#f7f6f3]">
                        {area.title}
                      </h3>
                      <p className="relative z-10 mt-4 flex-1 text-sm leading-7 text-[#f7f6f3]/65">
                        {area.body}
                      </p>
                      <div className="relative z-10 mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-5 text-sm font-semibold">
                        <Link
                          href={area.href}
                          className="text-[#e4b049] underline-offset-4 transition hover:underline"
                        >
                          {area.hrefLabel} →
                        </Link>
                        {area.hrefSecondary ? (
                          <Link
                            href={area.hrefSecondary}
                            className="text-[#f7f6f3]/55 underline-offset-4 transition hover:text-[#e4b049] hover:underline"
                          >
                            {area.hrefSecondaryLabel} →
                          </Link>
                        ) : null}
                      </div>
                    </article>
                  </ScrollSlideIn>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Principles */}
      <section className="relative py-16 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 80% 20%, rgba(228,176,73,0.1), transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <p className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.36em] text-[#bb7e3b]">
            <span
              aria-hidden
              className="inline-block h-1 w-10 shrink-0 rounded-sm bg-linear-to-r from-[#bb7e3b] to-[#e4b049]"
            />
            How we coach
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-[-0.02em] text-[#2e2e2e] sm:text-4xl">
            Principles we won&apos;t bend
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {PRINCIPLES.map((item, i) => (
              <li key={item.title}>
                <ScrollSlideIn delay={i * 60}>
                  <article className="h-full rounded-sm border border-[#bb7e3b]/20 bg-white/90 p-6 shadow-[0_16px_40px_-28px_rgba(46,46,46,0.35)] sm:p-7">
                    <h3 className="font-serif text-xl font-semibold text-[#2e2e2e]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.body}
                    </p>
                  </article>
                </ScrollSlideIn>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#1c1814] py-16 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 15% 40%, rgba(187,126,59,0.22), transparent 50%)",
          }}
        />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-xl">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.36em] text-[#e4b049]">
              Next step
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#f7f6f3] sm:text-4xl">
              Ready to raise your standard?
            </h2>
            <p className="mt-4 text-base leading-8 text-[#f7f6f3]/70">
              Book a free discovery call. We&apos;ll talk about where you are,
              what you want, and which areas of fitness matter most right now —
              no pitch deck, no pressure.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton href="/book">Book a discovery call</PrimaryButton>
            <SecondaryButton href="/contact" tone="dark">
              Send a message
            </SecondaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}
