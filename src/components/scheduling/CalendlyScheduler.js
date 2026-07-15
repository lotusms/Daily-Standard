"use client";

import Link from "next/link";
import { InlineWidget } from "react-calendly";

import PrimaryButton from "@/components/ui/PrimaryButton";
import { calendlyUrl, orgInquiryEmail } from "@/config";

export default function CalendlyScheduler() {
  if (calendlyUrl) {
    return (
      <div className="space-y-6">
        <InlineWidget
          url={calendlyUrl}
          styles={{
            width: "100%",
            height: "750px",
            minWidth: "320px",
          }}
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            hideGdprBanner: true,
            primaryColor: "bb7e3b",
            textColor: "2e2e2e",
          }}
          iframeTitle="Schedule a discovery call"
        />
        <p className="text-center text-sm text-slate-500">
          Prefer email?{" "}
          <a
            href={`mailto:${orgInquiryEmail}`}
            className="font-medium text-slate-700 underline-offset-2 hover:underline"
          >
            {orgInquiryEmail}
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-sm border border-dashed border-[#bb7e3b]/45 bg-[#f7f6f3] p-8 text-center sm:p-12">
      <p className="font-mono text-xs tracking-[0.3em] text-[#bb7e3b]">
        CALENDLY
      </p>
      <h2 className="mt-4 font-serif text-2xl font-semibold text-[#2e2e2e]">
        Connect your Calendly link
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-600">
        Create a Calendly event with Zoom as the location, then set{" "}
        <code className="rounded bg-white px-1.5 py-0.5 text-xs text-slate-700">
          NEXT_PUBLIC_CALENDLY_URL
        </code>{" "}
        in{" "}
        <code className="rounded bg-white px-1.5 py-0.5 text-xs text-slate-700">
          .env.local
        </code>{" "}
        to your event URL (for example{" "}
        <code className="rounded bg-white px-1.5 py-0.5 text-xs text-slate-700">
          https://calendly.com/your-name/discovery-call
        </code>
        ). Restart the dev server after saving.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <PrimaryButton href={`mailto:${orgInquiryEmail}`}>
          Email to schedule
        </PrimaryButton>
        <Link
          href="/contact"
          className="inline-flex items-center text-sm font-semibold text-[#bb7e3b] underline-offset-4 hover:underline"
        >
          Contact form →
        </Link>
      </div>
    </div>
  );
}
