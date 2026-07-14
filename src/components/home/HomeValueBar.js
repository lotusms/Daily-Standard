import Link from "next/link";

const PILLARS = [
  {
    title: "Nutrition",
    subtext: "Eat with purpose, not guilt.",
    href: "/services/nutrition",
  },
  {
    title: "Exercise",
    subtext: "Train for life, not just looks.",
    href: "/services/exercise",
  },
  {
    title: "Faith",
    subtext: "Anchor your why in truth.",
    href: "/services/faith",
  },
];

export default function HomeValueBar({ className = "" }) {
  return (
    <div
      className={`relative z-10 border-y border-slate-200/70 bg-white ${className}`.trim()}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200/70 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {PILLARS.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="group px-6 py-5 text-center transition hover:bg-[#f7f6f3] sm:px-8 sm:py-6 lg:text-left"
          >
            <p className="font-serif text-sm font-bold uppercase tracking-[0.22em] text-[#2e2e2e] sm:text-base">
              <span className="mr-2 inline-block h-2 w-2 bg-[#bb7e3b] align-middle" />
              {item.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {item.subtext}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
