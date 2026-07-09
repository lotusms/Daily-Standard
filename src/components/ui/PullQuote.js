import { orgName } from "@/config";

export default function PullQuote({
  quote,
  attribution = orgName,
  className = "",
}) {
  return (
    <blockquote
      className={`relative border-l-2 border-yellow-400 pl-8 sm:pl-10 ${className}`.trim()}
    >
      <p className="font-serif text-xl italic leading-relaxed text-slate-700 lg:leading-snug">
        {quote}
      </p>
      <footer className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
        — {attribution}
      </footer>
    </blockquote>
  );
}
