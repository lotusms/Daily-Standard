import Link from "next/link";
import {
  ExerciseWatermark,
  FaithWatermark,
  NutritionWatermark,
} from "@/components/home/HomeValueBarWatermarks";

const PILLARS = [
  {
    title: "Nutrition",
    subtext: "Eat with purpose, not guilt.",
    href: "/services/nutrition",
    Watermark: NutritionWatermark,
    // Opposite the copy: right on all breakpoints (copy is left).
    watermarkClass: "right-3 top-1/2 -translate-y-1/2 min-[991px]:right-4",
  },
  {
    title: "Exercise",
    subtext: "Train for life, not just looks.",
    href: "/services/exercise",
    Watermark: ExerciseWatermark,
    // Below 991px: copy right → watermark left. 991px+: copy left → watermark right.
    watermarkClass:
      "left-3 top-1/2 -translate-y-1/2 min-[991px]:left-auto min-[991px]:right-4",
  },
  {
    title: "Faith",
    subtext: "Anchor your why in truth.",
    href: "/services/faith",
    Watermark: FaithWatermark,
    watermarkClass: "right-3 top-1/2 -translate-y-1/2 min-[991px]:right-4",
  },
];

export default function HomeValueBar({ className = "" }) {
  return (
    <div
      className={`relative z-10 bg-[#2e2e2e] text-white ${className}`.trim()}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 0%, rgba(187,126,59,0.35), transparent 55%), radial-gradient(ellipse at 80% 100%, rgba(228,176,73,0.2), transparent 50%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 min-[991px]:grid-cols-3">
        {PILLARS.map((item, i) => {
          const staggerRight = i === 1;
          const { Watermark } = item;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`group relative flex min-h-[5.75rem] w-full items-center gap-4 overflow-hidden px-5 py-7 transition duration-300 hover:bg-[#bb7e3b]/15 min-[991px]:min-h-[6.5rem] min-[991px]:flex-row min-[991px]:justify-start min-[991px]:px-8 min-[991px]:py-8 ${
                staggerRight
                  ? "flex-row-reverse justify-start"
                  : "flex-row justify-start"
              } ${
                i > 0
                  ? "border-t border-white/10 min-[991px]:border-t-0 min-[991px]:border-l"
                  : ""
              }`}
            >
              <Watermark
                className={`pointer-events-none absolute h-[calc(100%-1.75rem)] max-h-[4.25rem] w-auto text-[#e4b049] opacity-[0.12] transition duration-500 group-hover:opacity-[0.2] min-[991px]:h-[calc(100%-2.25rem)] min-[991px]:max-h-[5rem] ${item.watermarkClass}`}
              />

              <span
                aria-hidden
                className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e4b049]/50 bg-[#bb7e3b]/20 font-mono text-[0.65rem] font-bold tracking-wider text-[#e4b049] transition duration-300 group-hover:scale-105 group-hover:border-[#e4b049] group-hover:bg-[#bb7e3b]/35"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <span
                className={`relative z-10 min-w-0 ${
                  staggerRight ? "text-right min-[991px]:text-left" : "text-left"
                }`}
              >
                <span className="block font-serif text-sm font-bold uppercase tracking-[0.22em] text-white transition group-hover:text-[#e4b049] min-[991px]:text-[0.95rem]">
                  {item.title}
                </span>
                <span className="mt-0.5 block text-[0.8rem] leading-snug text-white/65 transition group-hover:text-white/85">
                  {item.subtext}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
