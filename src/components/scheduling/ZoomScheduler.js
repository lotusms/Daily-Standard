import Link from "next/link";

import PrimaryButton from "@/components/ui/PrimaryButton";
import { orgInquiryEmail, zoomSchedulingUrl } from "@/config";

export default function ZoomScheduler() {
  if (zoomSchedulingUrl) {
    return (
      <div className="space-y-6">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <iframe
            title="Schedule a Zoom call"
            src={zoomSchedulingUrl}
            className="h-[min(72vh,640px)] w-full border-0"
            loading="lazy"
          />
        </div>
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
    <div className="rounded-2xl border border-dashed border-yellow-400/60 bg-yellow-50/50 p-8 text-center sm:p-12">
      <p className="font-mono text-xs tracking-[0.3em] text-yellow-700">
        ZOOM SCHEDULER
      </p>
      <h2 className="mt-4 font-serif text-2xl font-semibold text-slate-800">
        Scheduling opens soon
      </h2>
      <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-600">
        Add your Zoom Scheduler link to{" "}
        <code className="rounded bg-white px-1.5 py-0.5 text-xs text-slate-700">
          NEXT_PUBLIC_ZOOM_SCHEDULING_URL
        </code>{" "}
        in <code className="rounded bg-white px-1.5 py-0.5 text-xs text-slate-700">.env.local</code>{" "}
        and this page will embed your booking calendar automatically.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <PrimaryButton href={`mailto:${orgInquiryEmail}`}>
          Email to schedule
        </PrimaryButton>
        <Link
          href="/contact"
          className="inline-flex items-center text-sm font-semibold text-slate-700 underline-offset-4 hover:underline"
        >
          Contact form →
        </Link>
      </div>
    </div>
  );
}
