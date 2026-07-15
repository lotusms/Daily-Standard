import Image from "next/image";
import Link from "next/link";

import { NutritionWatermark } from "@/components/home/HomeValueBarWatermarks";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import ScrollSlideIn from "@/components/ui/ScrollSlideIn";

const NUTRITION_FACTS = [
  {
    title: "Steadier mood",
    body: "Blood sugar swings fuel irritability and low drive. Consistent meals keep your emotional baseline more even — so you're less at the mercy of the next snack or skipped lunch.",
  },
  {
    title: "Clearer focus",
    body: "Your brain runs on what you feed it. Steady protein, smart carbs, and hydration sharpen attention for work, decisions, and conversations that matter.",
  },
  {
    title: "Stronger recovery",
    body: "Training only pays off if you rebuild. Adequate protein and nutrients turn hard sessions into strength instead of chronic fatigue.",
  },
  {
    title: "Deeper sleep",
    body: "Heavy late-night eating and caffeine chaos wreck rest. A cleaner evening pattern supports deeper sleep — and the discipline that follows a good night.",
  },
  {
    title: "Sharper hormones",
    body: "Energy, libido, and drive aren't separate from dinner. Body fat, micronutrients, and meal timing all influence how a man feels in his own skin.",
  },
  {
    title: "Performance under pressure",
    body: "When life gets loud — deadlines, kids, travel — nutrition is the quiet lever. Fuel well and you show up calm, capable, and hard to knock off course.",
  },
];

const STEPS = [
  {
    title: "Discovery",
    body: "Book a Zoom call. We talk about your schedule, your history, and what you've already tried.",
  },
  {
    title: "Plan",
    body: "You get a clear, written nutrition standard — simple enough to follow on your worst week.",
  },
  {
    title: "Execute",
    body: "Weekly check-ins keep you honest. We adjust as life changes, because it always does.",
  },
  {
    title: "Own it",
    body: "The goal is independence: you know how to fuel yourself without a coach on speed dial forever.",
  },
];

const HERO = "/images/services/nutrition/hero.png";
const MEAL_PREP = "/images/services/nutrition/meal-prep.png";
const PREP_HANDS = "/images/services/nutrition/prep-hands.png";

export default function NutritionServicePage() {
  return (
    <main className="relative z-10 w-full">
      {/* Immersive hero */}
      <section className="relative isolate min-h-[min(92svh,44rem)] overflow-hidden">
        <Image
          src={HERO}
          alt="A high-protein plate with steak, greens, and vegetables on a dark wooden table"
          fill
          priority
          sizes="100vw"
          quality={88}
          className="object-cover object-[center_40%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-r from-[#1c1814]/92 via-[#1c1814]/72 to-[#1c1814]/35"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-[#1c1814] via-transparent to-[#1c1814]/40"
        />

        <div className="relative z-10 mx-auto flex min-h-[min(92svh,44rem)] max-w-7xl flex-col justify-end px-6 pb-14 pt-[calc(7rem+env(safe-area-inset-top,0px))] sm:px-10 sm:pb-16 lg:px-12 lg:pb-20">
          <p className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.36em] text-[#e4b049]">
            <span
              aria-hidden
              className="inline-block h-1 w-10 shrink-0 rounded-sm bg-linear-to-r from-[#bb7e3b] to-[#e4b049]"
            />
            Approach / Nutrition
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl font-semibold tracking-[-0.03em] text-[#f7f6f3] sm:text-6xl lg:text-7xl">
            Nutrition
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#f7f6f3]/80 sm:text-lg">
            Fuel your body with clarity. Eat like a man who takes his life
            seriously — without living in a spreadsheet.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PrimaryButton href="/book">Book a discovery call</PrimaryButton>
            <SecondaryButton href="#how-it-works" tone="dark">
              See how it works
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* Intro + image */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 90% 10%, rgba(228,176,73,0.14), transparent 42%), radial-gradient(ellipse at 5% 80%, rgba(187,126,59,0.1), transparent 48%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <ScrollSlideIn direction="left">
            <p className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.36em] text-[#bb7e3b]">
              <span
                aria-hidden
                className="inline-block h-1 w-10 shrink-0 rounded-sm bg-linear-to-r from-[#bb7e3b] to-[#e4b049]"
              />
              The gap isn&apos;t information
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-[-0.02em] text-[#2e2e2e] sm:text-4xl">
              Structure. Honesty.{" "}
              <span className="bg-linear-to-r from-[#bb7e3b] via-[#c2652a] to-[#e4b049] bg-clip-text text-transparent">
                No shame.
              </span>
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p className="text-[#2e2e2e]">
                Most men know what they should eat. The gap isn&apos;t
                information — it&apos;s structure, honesty, and someone who will
                call you on your excuses without making you feel like a failure.
              </p>
              <p>
                Nutrition coaching at The Daily Standard is built for real life:
                work travel, family dinners, late nights, and seasons when
                motivation disappears. We focus on habits you can keep for
                decades, not a 30-day challenge you&apos;ll abandon.
              </p>
            </div>
          </ScrollSlideIn>

          <ScrollSlideIn direction="right" delay={80}>
            <div className="relative">
              <div className="relative aspect-4/3 overflow-hidden rounded-sm shadow-[0_28px_70px_-36px_rgba(46,46,46,0.55)] ring-1 ring-[#bb7e3b]/25">
                <Image
                  src={MEAL_PREP}
                  alt="Organized meal prep containers with chicken, grains, and vegetables"
                  fill
                  sizes="(max-width: 1024px) 92vw, 44vw"
                  quality={80}
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#bb7e3b] via-[#e4b049] to-[#c2652a]"
                />
              </div>
              <NutritionWatermark className="pointer-events-none absolute -right-6 -bottom-8 h-36 w-36 text-[#bb7e3b] opacity-[0.12] sm:h-44 sm:w-44" />
            </div>
          </ScrollSlideIn>
        </div>
      </section>

      {/* Why nutrition matters — facts */}
      <section className="relative bg-[#1c1814] py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 15% 0%, rgba(187,126,59,0.28), transparent 45%), radial-gradient(ellipse at 85% 100%, rgba(228,176,73,0.14), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.36em] text-[#e4b049]">
              <span
                aria-hidden
                className="inline-block h-1 w-10 shrink-0 rounded-sm bg-linear-to-r from-[#bb7e3b] to-[#e4b049]"
              />
              Why nutrition matters
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-[-0.02em] text-[#f7f6f3] sm:text-4xl">
              Fuel for your mind, body, and standard
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#f7f6f3]/65 sm:text-base">
              What you eat doesn&apos;t just change the scale — it shapes mood,
              focus, recovery, and how you perform when it counts.
            </p>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {NUTRITION_FACTS.map((item, i) => (
              <li key={item.title}>
                <ScrollSlideIn delay={i * 50}>
                  <article className="group relative h-full overflow-hidden rounded-sm border border-[#bb7e3b]/25 bg-[#241c16]/80 p-6 transition duration-300 hover:border-[#e4b049]/45 hover:bg-[#2a211a]">
                    <span className="font-mono text-[0.65rem] tracking-[0.28em] text-[#e4b049]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-serif text-xl font-semibold text-[#f7f6f3] transition group-hover:text-[#e4b049]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#f7f6f3]/65">
                      {item.body}
                    </p>
                  </article>
                </ScrollSlideIn>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pull quote + portrait image */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-stretch gap-0 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-0 lg:px-12">
          <ScrollSlideIn direction="left">
            <div className="flex h-full flex-col justify-center border border-[#bb7e3b]/20 bg-[#f7f6f3] px-8 py-12 sm:px-12 sm:py-14 lg:rounded-l-sm lg:border-r-0">
              <p
                aria-hidden
                className="font-serif text-7xl leading-none text-[#bb7e3b]/30 sm:text-8xl"
              >
                &ldquo;
              </p>
              <blockquote className="-mt-6 font-serif text-2xl leading-snug text-[#2e2e2e] sm:text-3xl">
                You don&apos;t need a perfect diet. You need a standard you keep
                on ordinary Tuesdays.
              </blockquote>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.32em] text-[#bb7e3b]">
                — The Daily Standard
              </p>
            </div>
          </ScrollSlideIn>
          <ScrollSlideIn direction="right" delay={80}>
            <div className="relative min-h-[22rem] overflow-hidden lg:rounded-r-sm">
              <Image
                src={PREP_HANDS}
                alt="Hands preparing fresh ingredients on a wooden cutting board"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={80}
                className="object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-[#1c1814]/35 to-transparent"
              />
            </div>
          </ScrollSlideIn>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="relative scroll-mt-28 overflow-hidden py-16 sm:py-20 lg:py-24"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 0%, rgba(187,126,59,0.12), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.36em] text-[#bb7e3b]">
              <span
                aria-hidden
                className="inline-block h-1 w-10 shrink-0 rounded-sm bg-linear-to-r from-[#bb7e3b] to-[#e4b049]"
              />
              How it works
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-[-0.02em] text-[#2e2e2e] sm:text-4xl">
              From first call to lasting habits
            </h2>
          </div>

          <ol className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            <div
              aria-hidden
              className="pointer-events-none absolute top-8 right-[12%] left-[12%] hidden h-px bg-linear-to-r from-[#bb7e3b]/15 via-[#e4b049]/50 to-[#c2652a]/15 lg:block"
            />
            {STEPS.map((step, i) => (
              <li key={step.title}>
                <ScrollSlideIn delay={i * 70}>
                  <article className="relative h-full rounded-sm border border-[#bb7e3b]/20 bg-white/80 p-6 shadow-[0_16px_40px_-28px_rgba(46,46,46,0.4)] backdrop-blur-sm transition hover:border-[#bb7e3b]/45">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e4b049]/50 bg-linear-to-br from-[#bb7e3b] to-[#c2652a] font-mono text-[0.7rem] font-bold tracking-wider text-white shadow-[0_8px_20px_-8px_rgba(187,126,59,0.7)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-5 font-serif text-xl font-semibold text-[#2e2e2e]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.body}
                    </p>
                  </article>
                </ScrollSlideIn>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-[#1c1814] py-20 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 20% 30%, rgba(187,126,59,0.26), transparent 50%), radial-gradient(ellipse at 90% 80%, rgba(194,101,42,0.18), transparent 48%)",
          }}
        />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-xl">
            <p className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.36em] text-[#e4b049]">
              <span
                aria-hidden
                className="inline-block h-1 w-10 shrink-0 rounded-sm bg-linear-to-r from-[#bb7e3b] to-[#e4b049]"
              />
              Next step
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-[-0.02em] text-[#f7f6f3] sm:text-4xl">
              Book your discovery call
            </h2>
            <p className="mt-4 text-base leading-8 text-[#f7f6f3]/70">
              Pick a time on Zoom. We&apos;ll talk about your goals and whether
              coaching is the right fit — no pressure.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <PrimaryButton href="/book">Book a discovery call</PrimaryButton>
            <SecondaryButton href="/contact" tone="dark">
              Ask a question
            </SecondaryButton>
          </div>
        </div>
        <p className="relative mx-auto mt-10 max-w-7xl px-6 text-sm text-[#f7f6f3]/40 sm:px-10 lg:px-12">
          Also explore{" "}
          <Link
            href="/services/exercise"
            className="text-[#e4b049] underline-offset-4 hover:underline"
          >
            Exercise
          </Link>{" "}
          and{" "}
          <Link
            href="/services/faith"
            className="text-[#e4b049] underline-offset-4 hover:underline"
          >
            Faith
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
