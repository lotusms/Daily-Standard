import PageLayout from "@/components/PageLayout";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { orgLegalName, orgName } from "@/config";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About",
  description: `About ${orgLegalName} — life coaching for men through nutrition, exercise, and faith. Virtual sessions via Zoom.`,
  path: "/about",
});

const principles = [
  {
    title: "Truth over hype",
    body:
      "No toxic positivity. No miracle promises. Just honest coaching about what it takes to change — and grace when you miss the mark.",
  },
  {
    title: "Standards, not streaks",
    body:
      "We build daily standards you can return to after a bad week. Perfection isn't the goal. Consistency over years is.",
  },
  {
    title: "Body, mind, soul",
    body:
      "Nutrition, exercise, and faith aren't separate projects. They're one life. Coaching here connects all three.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout
      eyebrow="About"
      title={`About ${orgName}`}
      subtitle="The Daily Standard exists for men who are tired of starting over. We coach through nutrition, exercise, and faith — one Zoom call at a time."
      width="full"
    >
      <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="font-mono text-xs tracking-[0.3em] text-yellow-600">
              THE MISSION
            </p>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Most men don&apos;t need more information. They need a coach who
              tells the truth, holds the line, and meets them where they are —
              on a laptop after the kids are in bed, or on a lunch break between
              meetings.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              {orgName} is virtual coaching for men who want to get stronger,
              eat with purpose, and live with spiritual intention. Sessions
              happen on Zoom. Accountability is real. The standard is daily.
            </p>
            <div className="mt-8">
              <PrimaryButton href="/book">Book a discovery call</PrimaryButton>
            </div>
          </div>

          <div className="space-y-6">
            {principles.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="font-serif text-xl font-semibold text-slate-800">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-16 max-w-2xl border-l-2 border-yellow-400 pl-6 text-sm leading-8 text-slate-600 sm:mt-20">
          This is a temporary brand identity while the visual design evolves.
          The yellow and slate wordmark reflects the standard we coach toward:
          warmth with backbone.
        </p>
      </div>
    </PageLayout>
  );
}
