import Link from "next/link";

import DailyStandardLogo from "@/components/brand/DailyStandardLogo";
import { orgInquiryEmail, orgName } from "@/config";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Connect",
  description: `Quick links to book a Zoom call, visit ${orgName}, or send an email.`,
  path: "/connect",
});

const buttonBase =
  "flex min-h-[3.75rem] w-full items-center justify-center rounded-2xl border px-6 py-4 text-center font-serif text-base font-semibold tracking-wide transition active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 sm:min-h-[4rem] sm:text-lg";

const primaryButton = `${buttonBase} border-yellow-500/50 bg-yellow-400 text-slate-900 shadow-sm hover:bg-yellow-300`;

const secondaryButton = `${buttonBase} border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50`;

const mutedButton = `${buttonBase} border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white`;

export default function ConnectPage() {
  return (
    <main className="relative z-10 mx-auto flex min-h-dvh w-full max-w-lg flex-col px-6 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-[max(2.5rem,env(safe-area-inset-top))] sm:px-8 sm:py-14">
      <div className="flex flex-col items-center text-center">
        <Link
          href="/"
          className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500/60"
          aria-label={`${orgName} — home`}
        >
          <DailyStandardLogo
            className="mx-auto max-w-[min(100%,14rem)]"
            title={orgName}
          />
        </Link>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          Tap a link below to book a call or get in touch.
        </p>
      </div>

      <nav
        aria-label="Quick connect links"
        className="mt-10 flex w-full flex-col gap-3 sm:mt-12 sm:gap-3.5"
      >
        <Link href="/book" className={primaryButton}>
          Book a Zoom call
        </Link>

        <Link href="/" className={secondaryButton}>
          Visit website
        </Link>

        <Link href="/contact" className={mutedButton}>
          Send a message
        </Link>

        <a href={`mailto:${orgInquiryEmail}`} className={mutedButton}>
          Email {orgInquiryEmail}
        </a>
      </nav>

      <p className="mt-auto pt-10 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {orgName}
      </p>
    </main>
  );
}
