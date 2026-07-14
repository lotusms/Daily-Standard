import Link from "next/link";

import DailyStandardLogo from "@/components/brand/DailyStandardLogo";
import { orgName } from "@/config";

const footerLinks = [
  { href: "/book", label: "Book a Call" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
];

const linkClass =
  "text-xs font-medium uppercase tracking-[0.24em] text-slate-500 transition hover:text-slate-800";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 mt-auto w-full border-t border-slate-200 bg-white/80 py-8 backdrop-blur-md sm:py-9">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row sm:px-10 lg:px-12">
        <Link
          href="/"
          className="group shrink-0 transition-opacity duration-300 hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500/60"
          aria-label={`${orgName} — home`}
        >
          <DailyStandardLogo
            variant="compact"
            className="w-auto max-w-72"
            title={orgName}
          />
        </Link>

        <nav
          aria-label="Footer"
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-end"
        >
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <p className="mx-auto mt-6 max-w-7xl px-6 text-center text-[0.65rem] uppercase tracking-[0.32em] text-slate-400 sm:px-10 lg:px-12">
        © {new Date().getFullYear()} {orgName} · Men&apos;s life coaching
      </p>
    </footer>
  );
}
