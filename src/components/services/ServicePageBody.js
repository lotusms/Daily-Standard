"use client";

import PrimaryButton from "@/components/ui/PrimaryButton";
import PullQuote from "@/components/ui/PullQuote";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function ServicePageBody({
  lead,
  inclusions,
  process,
  pullQuote,
  cta,
}) {
  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-24">
      {lead.length > 0 ? (
        <section className="max-w-3xl space-y-5">
          {lead.map((paragraph, i) => (
            <p
              key={i}
              className={`text-base leading-8 text-slate-600 ${i === 0 ? "text-slate-800" : ""}`}
            >
              {paragraph}
            </p>
          ))}
        </section>
      ) : null}

      <section>
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-slate-500">
          {inclusions.title ?? "What's included"}
        </p>
        <ul className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {inclusions.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-4 border-t border-slate-200 pt-5"
            >
              <span
                aria-hidden
                className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-500"
              />
              <span className="text-sm leading-7 text-slate-600">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-slate-500">
          {process.title ?? "How it works"}
        </p>
        <ol className="mt-8 grid gap-10 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-8">
          {process.steps.map((step, i) => (
            <li key={step.title} className="border-t border-slate-200 pt-6">
              <p className="font-mono text-xs tabular-nums tracking-[0.3em] text-yellow-600">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-lg font-bold tracking-[-0.02em] text-slate-800">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {pullQuote ? <PullQuote quote={pullQuote} /> : null}

      <section className="flex flex-col items-start gap-6 border-t border-slate-200 pt-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-md">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-slate-500">
            Next step
          </p>
          <p className="mt-3 font-serif text-2xl font-bold tracking-[-0.02em] text-slate-800">
            Book your discovery call.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Pick a time on Zoom. We&apos;ll talk about your goals and whether
            coaching is the right fit — no pressure.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <PrimaryButton href={cta.primaryHref}>{cta.primaryLabel}</PrimaryButton>
          {cta.secondaryHref && cta.secondaryLabel ? (
            <SecondaryButton href={cta.secondaryHref}>
              {cta.secondaryLabel}
            </SecondaryButton>
          ) : null}
        </div>
      </section>
    </div>
  );
}
