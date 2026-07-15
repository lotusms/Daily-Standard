"use client";

import Card from "@/components/ui/Card";
import { cardTitleClassForVariant } from "@/lib/cardTitle";

/**
 * @param {{ lines: string[]; embedded?: boolean }} props — `embedded`: body only (no outer `Card`); for use inside the contact form.
 */
export default function ContactHelpfulDetailsCard({ lines, embedded = false }) {
  const titleClass = cardTitleClassForVariant("inset");
  const introMt = embedded ? "mt-5" : "mt-8";

  const listBlock = (
    <>
      <p className={`${introMt} text-sm leading-7 text-site-fg/90`}>
        A few details help the first reply land better. You don’t need a polished
        plan — just enough context so the conversation can start where you are.
      </p>
      <ul className="mt-5 space-y-4 text-sm leading-4 text-site-fg/90">
        {lines.map((line) => (
          <li key={line} className="flex gap-3">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e4b049] shadow-[0_0_8px] shadow-[#e4b049]/35"
              aria-hidden
            />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </>
  );

  if (embedded) {
    return (
      <>
        <h4 className={`${titleClass} font-serif font-bold`}>What to share in your note</h4>
        {listBlock}
      </>
    );
  }

  return (
    <Card
      variant="inset"
      title="What to share in your note"
      titleTag="h4"
      className="min-w-0 w-full"
    >
      {listBlock}
      <p className="mt-8 border-t border-site-fg/10 px-12 pt-6 text-center text-xs uppercase tracking-[0.22em] text-neutral-200/90">
        Virtual coaching · Nutrition · Exercise · Faith
      </p>
    </Card>
  );
}
