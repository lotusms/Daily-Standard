/**
 * Soft gold fade rule for spacing between sections.
 * Reusable: import from `@/components/ui/HomeSectionDivider`.
 * (Uses a div — Tailwind preflight zeroes `<hr>` height.)
 */
export default function HomeSectionDivider({ className = "" }) {
  return (
    <div
      aria-hidden
      role="presentation"
      className={`relative z-20 mx-auto block h-px w-full max-w-5xl shrink-0 bg-linear-to-r from-transparent via-[#bb7e3b]/70 to-transparent ${className}`.trim()}
    />
  );
}
