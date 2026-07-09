import Link from "next/link";

const PILLARS = [
  {
    title: "Nutrition",
    subtext: "Eat with purpose, not guilt.",
    href: "/services/nutrition",
    emoji: "🥗",
    accent: "yellow",
  },
  {
    title: "Exercise",
    subtext: "Train for life, not just looks.",
    href: "/services/exercise",
    emoji: "💪",
    accent: "slate",
  },
  {
    title: "Faith",
    subtext: "Anchor your why in truth.",
    href: "/services/faith",
    emoji: "✝",
    accent: "yellow",
  },
];

export default function HomeValueBar({ className = "" }) {
  return (
    <div
      className={`relative z-10 border-t border-slate-200/80 bg-white/90 backdrop-blur-md ${className}`.trim()}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {PILLARS.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group flex flex-col items-center gap-2 px-4 py-6 text-center transition hover:bg-yellow-50/50 sm:px-6 lg:flex-row lg:items-center lg:gap-4 lg:text-left"
          >
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl transition group-hover:bg-yellow-100"
              aria-hidden
            >
              {item.emoji}
            </span>
            <div className="min-w-0">
              <p className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-slate-800 sm:text-base">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-slate-500">{item.subtext}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
