import PageLayout from "@/components/PageLayout";
import ZoomScheduler from "@/components/scheduling/ZoomScheduler";
import { orgLegalName } from "@/config";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Book a Call",
  description: `Schedule a free discovery call with ${orgLegalName}. One-on-one Zoom coaching for men — nutrition, exercise, and faith.`,
  path: "/book",
});

export default function BookPage() {
  return (
    <PageLayout
      eyebrow="Schedule"
      title="Book your discovery call"
      subtitle="Pick a time that works for you. We'll meet on Zoom for an honest conversation about your goals — no obligation, no hard sell."
      width="full"
    >
      <div className="mx-auto max-w-3xl px-6 pb-16 sm:px-10 lg:px-12">
        <ZoomScheduler />
      </div>
    </PageLayout>
  );
}
