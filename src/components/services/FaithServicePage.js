import Image from "next/image";
import Link from "next/link";

import { FaithWatermark } from "@/components/home/HomeValueBarWatermarks";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import ScrollSlideIn from "@/components/ui/ScrollSlideIn";

const FAITH_FACTS = [
  {
    title: "A rooted why",
    body: "Diet and training fade when they float on willpower alone. Faith gives improvements a deeper reason — so discipline has somewhere to land when motivation disappears.",
  },
  {
    title: "Quieter mind",
    body: "Prayer and reflection interrupt the noise. A few honest minutes with God each day lower baseline anxiety and make hard days feel less like free fall.",
  },
  {
    title: "Identity under pressure",
    body: "Titles, income, and body composition shift. A spiritual standard anchors who you are when the scoreboard of life feels hostile or empty.",
  },
  {
    title: "Integrity at home",
    body: "Your family feels the difference between a man who performs religion and one who actually walks it. Faith coaching closes the gap between Sunday and Tuesday night.",
  },
  {
    title: "Hope in dry seasons",
    body: "Doubt, burnout, and silence aren't failures — they're part of the path. Having language and practices for those seasons keeps you from abandoning what still matters.",
  },
  {
    title: "Whole-life alignment",
    body: "Body, mind, and spirit aren't three separate projects. Faith ties nutrition and exercise to calling — so the whole man moves in one direction.",
  },
];

const STEPS = [
  {
    title: "Listen",
    body: "Where are you with God honestly — not where you think you should be.",
  },
  {
    title: "Anchor",
    body: "Identify truths and practices that ground you when motivation fails.",
  },
  {
    title: "Practice",
    body: "Small daily standards: prayer, reading, reflection — tracked with grace.",
  },
  {
    title: "Lead",
    body: "Carry what you've built into your work, marriage, and community.",
  },
];

const HERO = "/images/services/faith/hero.png";
const DEVOTION = "/images/services/faith/devotion.png";
const HANDS = "/images/services/faith/hands.png";

export default function FaithServicePage() {
  return (
    <main className="relative z-10 w-full">
      {/* Immersive hero */}
      <section className="relative isolate min-h-[min(92svh,44rem)] overflow-hidden">
        <Image
          src={HERO}
          alt="An open Bible on a wooden desk in warm dawn light"
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
            Approach / Faith
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl font-semibold tracking-[-0.03em] text-[#f7f6f3] sm:text-6xl lg:text-7xl">
            Faith
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#f7f6f3]/80 sm:text-lg">
            Ground your purpose in something greater. Build spiritual discipline
            that strengthens every other area of your life.
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
              Without a rooted why
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-[-0.02em] text-[#2e2e2e] sm:text-4xl">
              Every improvement{" "}
              <span className="bg-linear-to-r from-[#bb7e3b] via-[#c2652a] to-[#e4b049] bg-clip-text text-transparent">
                eventually drifts.
              </span>
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p className="text-[#2e2e2e]">
                A man&apos;s body and habits matter — but faith coaching
                isn&apos;t about performing religion for an audience. It&apos;s
                about building a daily spiritual rhythm that holds when life
                gets loud.
              </p>
              <p>
                Whether you&apos;re returning to faith, deepening a walk
                you&apos;ve neglected, or trying to lead your family with
                integrity, we integrate Scripture, prayer, and honest
                conversation into your coaching — always respectful, never
                preachy.
              </p>
            </div>
          </ScrollSlideIn>

          <ScrollSlideIn direction="right" delay={80}>
            <div className="relative">
              <div className="relative aspect-4/3 overflow-hidden rounded-sm shadow-[0_28px_70px_-36px_rgba(46,46,46,0.55)] ring-1 ring-[#bb7e3b]/25">
                <Image
                  src={DEVOTION}
                  alt="A quiet morning devotion setup with journal, coffee, and soft light"
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
              <FaithWatermark className="pointer-events-none absolute -right-4 -bottom-6 h-32 w-32 text-[#bb7e3b] opacity-[0.12] sm:h-40 sm:w-40" />
            </div>
          </ScrollSlideIn>
        </div>
      </section>

      {/* Why faith matters — facts */}
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
              Why faith matters
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-[-0.02em] text-[#f7f6f3] sm:text-4xl">
              The foundation under every other standard
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#f7f6f3]/65 sm:text-base">
              Faith shapes how a man handles pressure, leads at home, and stays
              whole when willpower alone isn&apos;t enough.
            </p>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {FAITH_FACTS.map((item, i) => (
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

      {/* Pull quote + hands image */}
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
                You can&apos;t out-train a life that&apos;s spiritually adrift.
                Start with the soul.
              </blockquote>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.32em] text-[#bb7e3b]">
                — The Daily Standard
              </p>
            </div>
          </ScrollSlideIn>
          <ScrollSlideIn direction="right" delay={80}>
            <div className="relative min-h-[22rem] overflow-hidden lg:rounded-r-sm">
              <Image
                src={HANDS}
                alt="A man's hands resting on an open Bible in warm lamplight"
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
              From honest listening to leading well
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
            href="/services/nutrition"
            className="text-[#e4b049] underline-offset-4 hover:underline"
          >
            Nutrition
          </Link>{" "}
          and{" "}
          <Link
            href="/services/exercise"
            className="text-[#e4b049] underline-offset-4 hover:underline"
          >
            Exercise
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
