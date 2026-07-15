import Link from "next/link";

import ContactInquiryForm from "@/components/contact/ContactInquiryForm";
import PrimaryButton from "@/components/ui/PrimaryButton";
import ScrollSlideIn from "@/components/ui/ScrollSlideIn";
import { orgInquiryEmail, orgName } from "@/config";

const HELPFUL = [
  "What you’re hoping to change — nutrition, exercise, faith, or how they fit together",
  "Your typical week and time zone",
  "Whether you’ve worked with a coach before",
  "Anything useful to know up front — injuries, dietary needs, or where you stand with faith",
];

export default function ContactPageContent() {
  return (
    <main className="relative z-10 w-full">
      <section className="relative overflow-hidden pt-[calc(6.5rem+env(safe-area-inset-top,0px))] pb-12 sm:pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 12% 0%, rgba(187,126,59,0.18), transparent 42%), radial-gradient(ellipse at 88% 30%, rgba(228,176,73,0.12), transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <p className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.36em] text-[#bb7e3b]">
            <span
              aria-hidden
              className="inline-block h-1 w-10 shrink-0 rounded-sm bg-linear-to-r from-[#bb7e3b] to-[#e4b049]"
            />
            Contact
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold tracking-[-0.03em] text-[#2e2e2e] sm:text-5xl lg:text-6xl">
            Send a message
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Have a question before booking? {orgName} reads every note personally.
            Prefer to talk live? Schedule a free discovery call on Zoom.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
            <PrimaryButton href="/book">Book a discovery call</PrimaryButton>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#bb7e3b]/70">
              or
            </span>
            <a
              href={`mailto:${orgInquiryEmail}`}
              className="break-all text-sm font-semibold text-[#bb7e3b] underline-offset-4 transition hover:text-[#c2652a] hover:underline sm:text-base"
            >
              {orgInquiryEmail}
            </a>
          </div>
        </div>
      </section>

      <section className="relative pb-16 sm:pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-12">
          <ScrollSlideIn direction="left" className="lg:pt-2">
            <p className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#bb7e3b]">
              <span
                aria-hidden
                className="inline-block h-px w-8 bg-linear-to-r from-[#bb7e3b] to-[#e4b049]"
              />
              Before you write
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-[#2e2e2e] sm:text-3xl">
              A few details help the first reply land better
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              You don’t need a polished plan — just enough context so the conversation
              can start where you are.
            </p>
            <ul className="mt-8 space-y-4">
              {HELPFUL.map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-6 text-[#2e2e2e]/80">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#bb7e3b]"
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 border-t border-[#bb7e3b]/20 pt-6 text-sm leading-7 text-slate-500">
              Faster path:{" "}
              <Link
                href="/book"
                className="font-semibold text-[#bb7e3b] underline-offset-4 transition hover:text-[#c2652a] hover:underline"
              >
                book a Zoom discovery call
              </Link>
              . Replies usually land within a couple of business days.
            </p>
          </ScrollSlideIn>

          <ScrollSlideIn direction="right" delay={80}>
            <ContactInquiryForm />
          </ScrollSlideIn>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1c1814] py-16 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 15% 40%, rgba(187,126,59,0.22), transparent 50%)",
          }}
        />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="max-w-xl">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.36em] text-[#e4b049]">
              Prefer Zoom?
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#f7f6f3] sm:text-4xl">
              Skip the form — book the call
            </h2>
            <p className="mt-4 text-base leading-8 text-[#f7f6f3]/70">
              A free 30-minute discovery call is the quickest way to see if coaching
              fits. Honest conversation, clear next steps, no pitch deck.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <PrimaryButton href="/book">Schedule on Zoom</PrimaryButton>
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#e4b049]/70">
              or
            </span>
            <a
              href={`mailto:${orgInquiryEmail}`}
              className="break-all text-sm font-semibold text-[#e4b049] underline-offset-4 transition hover:underline sm:text-base"
            >
              {orgInquiryEmail}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
