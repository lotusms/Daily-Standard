import DailyStandardLogo from "@/components/brand/DailyStandardLogo";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { orgName, serviceAreaTagline } from "@/config";

function HeroAccentLine() {
  return (
    <div className="mt-5 flex max-w-md items-center gap-2" aria-hidden>
      <span className="h-1 w-12 shrink-0 bg-yellow-400 sm:w-16" />
      <span className="flex-1 border-t border-dashed border-slate-300" />
    </div>
  );
}

export default function HomeHero() {
  return (
    <div className="relative flex min-h-[min(88svh,44rem)] flex-1 flex-col overflow-hidden bg-linear-to-br from-slate-50 via-white to-yellow-50/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(234,179,8,0.22), transparent 42%), radial-gradient(circle at 10% 90%, rgba(148,163,184,0.25), transparent 40%)",
        }}
      />

      <div className="relative z-2 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-[calc(8rem+env(safe-area-inset-top,0px))] pb-16 sm:px-10 sm:pt-[calc(8.5rem+env(safe-area-inset-top,0px))] lg:px-12 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="max-w-xl text-left">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.36em] text-slate-500 sm:text-xs">
              {serviceAreaTagline}
            </p>

            <h1 className="mt-5 font-serif text-[2rem] font-bold leading-[1.08] tracking-[-0.03em] text-slate-800 sm:text-5xl lg:text-6xl">
              Life coaching for men who want{" "}
              <span className="text-yellow-500">more than motivation</span>
            </h1>

            <HeroAccentLine />

            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
              The Daily Standard helps you build a life of strength through
              nutrition, exercise, and faith — with honest accountability and
              one-on-one Zoom sessions that fit your real schedule.
            </p>

            <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start">
              <PrimaryButton href="/book" className="w-full justify-center sm:w-auto">
                Schedule on Zoom
              </PrimaryButton>
              <SecondaryButton
                href="/about"
                showChevron
                className="w-full justify-center sm:w-auto"
              >
                Meet your coach
              </SecondaryButton>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center lg:items-end">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_24px_64px_-24px_rgba(15,23,42,0.18)] sm:p-8">
              <DailyStandardLogo
                className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-md"
                title={orgName}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
