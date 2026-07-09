import PageLayout from "@/components/PageLayout";
import ServicePageBody from "@/components/services/ServicePageBody";
import { orgLegalName } from "@/config";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Exercise Coaching",
  description: `Exercise coaching for men with ${orgLegalName}. Strength, conditioning, and consistency — built around your life.`,
  path: "/services/exercise",
});

const lead = [
  "The gym isn't the problem. Consistency is. And consistency dies when your program doesn't respect your recovery, your job, or the fact that you're not 22 anymore.",
  "Exercise coaching here is practical: lift, move, recover. We build a training standard you can hit three or four days a week — in a gym, garage, or hotel room — and we track what matters: strength, energy, and showing up.",
];

const inclusions = {
  title: "What we cover",
  items: [
    "Training plan matched to your equipment and schedule",
    "Strength progressions that build real-world capacity",
    "Cardio that supports heart health without burning you out",
    "Recovery, sleep, and mobility basics men actually do",
    "Form checks via Zoom when you need them",
    "Accountability when you'd rather skip leg day",
  ],
};

const process = {
  steps: [
    {
      title: "Assess",
      body: "Current fitness, injuries, time available, and what 'strong' means for your season of life.",
    },
    {
      title: "Program",
      body: "A written plan with clear sessions — not a random workout generator.",
    },
    {
      title: "Train",
      body: "Weekly calls review your log, adjust loads, and keep you from spinning your wheels.",
    },
    {
      title: "Progress",
      body: "Measure what counts: reps, miles, energy, confidence — not just the mirror.",
    },
  ],
};

const cta = {
  primaryHref: "/book",
  primaryLabel: "Book a discovery call",
  secondaryHref: "/services/faith",
  secondaryLabel: "Explore faith coaching",
};

export default function ExercisePage() {
  return (
    <PageLayout
      eyebrow="Approach / Exercise"
      title="Exercise"
      subtitle="Train for life — strength you can use, energy you can trust, and a body that serves your calling."
      width="full"
    >
      <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <ServicePageBody
          lead={lead}
          inclusions={inclusions}
          process={process}
          pullQuote="Discipline in the gym spills into discipline everywhere else. That's the point."
          cta={cta}
        />
      </div>
    </PageLayout>
  );
}
