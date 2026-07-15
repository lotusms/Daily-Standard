/**
 * Shared shell for Privacy Policy / Terms of Use — matches site chrome
 * (max-w-7xl padding, readable prose column, brand typography).
 */
export default function LegalPageShell({
  eyebrow = "Legal",
  title,
  subtitle,
  children,
}) {
  return (
    <main className="relative z-10 w-full">
      <section className="relative overflow-hidden pt-[calc(6.5rem+env(safe-area-inset-top,0px))] pb-16 sm:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 12% 0%, rgba(187,126,59,0.14), transparent 42%), radial-gradient(ellipse at 88% 20%, rgba(228,176,73,0.08), transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <p className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.36em] text-[#bb7e3b]">
            <span
              aria-hidden
              className="inline-block h-1 w-10 shrink-0 rounded-sm bg-linear-to-r from-[#bb7e3b] to-[#e4b049]"
            />
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-[-0.03em] text-[#2e2e2e] sm:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {subtitle}
            </p>
          ) : null}

          <div className="mt-12 space-y-10 text-base leading-8 text-slate-700 [&_a]:font-semibold [&_a]:text-[#bb7e3b] [&_a]:underline-offset-4 hover:[&_a]:underline [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:text-[#2e2e2e] [&_li]:leading-7 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}
