import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { serviceAreaTagline } from "@/config";

const HERO_IMAGE = "/images/home-lens-hero-images/Hero_w_Ring.png";
const HERO_WIDTH = 1672;
const HERO_HEIGHT = 941;

const EYEBROW_PARTS = serviceAreaTagline
  .split("·")
  .map((part) => part.trim())
  .filter(Boolean);

function HeroAccentLine() {
  return (
    <div className="mt-5 flex max-w-md items-center gap-3" aria-hidden>
      <span className="h-1 w-14 shrink-0 rounded-sm bg-[#bb7e3b] sm:w-16" />
      <span className="h-px flex-1 border-t border-dashed border-slate-300" />
    </div>
  );
}

function HeroEyebrow() {
  return (
    <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-slate-500 sm:text-[0.7rem] sm:tracking-[0.36em]">
      {EYEBROW_PARTS.map((part, index) => (
        <span key={part} className="inline-flex items-center gap-2.5">
          {index > 0 ? (
            <span
              className="inline-block size-1.5 shrink-0 bg-[#bb7e3b]"
              aria-hidden
            />
          ) : null}
          <span>{part}</span>
        </span>
      ))}
    </p>
  );
}

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f6f3]">
      {/*
        Background photo behind copy on every breakpoint.
        Mobile: object-cover framed on the man + ring.
        Desktop: object-contain so the full frame fits.
      */}
      <div
        className="relative w-full min-h-[min(100svh,40rem)] lg:min-h-0"
        style={{
          // Tall viewport hero on small screens; natural photo ratio on large.
        }}
      >
        {/* Desktop height = photo aspect */}
        <div
          className="pointer-events-none hidden w-full lg:block"
          style={{ aspectRatio: `${HERO_WIDTH} / ${HERO_HEIGHT}` }}
          aria-hidden
        />

        <div className="absolute inset-0" aria-hidden>
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={88}
            className="object-cover object-[72%_40%] lg:object-contain lg:object-right lg:object-center"
          />

          <div
            className="absolute inset-0 lg:hidden"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #f7f6f3 0%, rgba(247,246,243,0.96) 22%, rgba(247,246,243,0.82) 48%, rgba(247,246,243,0.4) 70%, rgba(247,246,243,0.1) 88%, transparent 100%), linear-gradient(90deg, #f7f6f3 0%, rgba(247,246,243,0.75) 45%, transparent 100%)",
            }}
          />

          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #f7f6f3 0%, #f7f6f3 18%, rgba(247,246,243,0.94) 32%, rgba(247,246,243,0.5) 48%, rgba(247,246,243,0.12) 64%, transparent 80%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[min(100svh,40rem)] w-full max-w-7xl items-center px-5 pb-10 pt-[calc(6.5rem+env(safe-area-inset-top,0px))] sm:px-8 sm:pb-12 sm:pt-[calc(7rem+env(safe-area-inset-top,0px))] lg:absolute lg:inset-0 lg:min-h-0 lg:px-12 lg:pb-10 lg:pt-[calc(5.5rem+env(safe-area-inset-top,0px))]">
          <div className="max-w-xl text-left">
            <HeroEyebrow />

            <h1 className="mt-3 font-serif text-[1.85rem] font-bold leading-[1.08] tracking-[-0.03em] text-[#2e2e2e] sm:mt-4 sm:text-[2.45rem] sm:leading-[1.05] lg:text-[clamp(2.5rem,3.5vw,3.2rem)] lg:leading-[1.02]">
              Life coaching for men who want{" "}
              <span className="text-[#bb7e3b]">more than motivation</span>
            </h1>

            <HeroAccentLine />

            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-[1.65]">
              The Daily Standard helps you build a life of strength through
              nutrition, exercise, and faith — with honest accountability and
              one-on-one Zoom sessions that fit your real schedule.
            </p>

            <div className="mt-7 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
              <PrimaryButton
                href="/book"
                className="w-full justify-center !border-[#bb7e3b]/70 !bg-[#e4b049] !from-[#e8b84a] !via-[#e4b049] !to-[#bb7e3b] shadow-[0_12px_28px_-10px_rgba(187,126,59,0.55)] hover:!from-[#f0c14d] hover:!to-[#c89245] sm:w-auto"
              >
                Schedule on Zoom
              </PrimaryButton>
              <SecondaryButton
                href="/about"
                showChevron
                className="w-full justify-center border-slate-200 bg-white shadow-[0_8px_24px_-12px_rgba(15,23,42,0.25)] sm:w-auto"
              >
                Meet your coach
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
