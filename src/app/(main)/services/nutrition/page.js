import PageLayout from "@/components/PageLayout";
import ServicePageBody from "@/components/services/ServicePageBody";
import { orgLegalName } from "@/config";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Nutrition Coaching",
  description: `Nutrition coaching for men with ${orgLegalName}. Simple, sustainable eating habits — no fad diets, no shame.`,
  path: "/services/nutrition",
});

const lead = [
  "Most men know what they should eat. The gap isn't information — it's structure, honesty, and someone who will call you on your excuses without making you feel like a failure.",
  "Nutrition coaching at The Daily Standard is built for real life: work travel, family dinners, late nights, and seasons when motivation disappears. We focus on habits you can keep for decades, not a 30-day challenge you'll abandon.",
];

const inclusions = {
  title: "What we cover",
  items: [
    "Honest food audit — what's working, what's sabotaging you",
    "Simple meal frameworks, not obsessive calorie counting",
    "Protein, hydration, and energy for training and long workdays",
    "Navigating restaurants, travel, and social eating",
    "Supplement guidance without the hype",
    "Weekly accountability and adjustments that stick",
  ],
};

const process = {
  title: "How it works",
  steps: [
    {
      title: "Discovery",
      body: "Book a Zoom call. We talk about your schedule, your history, and what you've already tried.",
    },
    {
      title: "Plan",
      body: "You get a clear, written nutrition standard — simple enough to follow on your worst week.",
    },
    {
      title: "Execute",
      body: "Weekly check-ins keep you honest. We adjust as life changes, because it always does.",
    },
    {
      title: "Own it",
      body: "The goal is independence: you know how to fuel yourself without a coach on speed dial forever.",
    },
  ],
};

const cta = {
  primaryHref: "/book",
  primaryLabel: "Book a discovery call",
  secondaryHref: "/contact",
  secondaryLabel: "Ask a question",
};

export default function NutritionPage() {
  return (
    <PageLayout
      eyebrow="Approach / Nutrition"
      title="Nutrition"
      subtitle="Fuel your body with clarity. Eat like a man who takes his life seriously — without living in a spreadsheet."
      width="full"
    >
      <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <ServicePageBody
          lead={lead}
          inclusions={inclusions}
          process={process}
          pullQuote="You don't need a perfect diet. You need a standard you keep on ordinary Tuesdays."
          cta={cta}
        />
      </div>
    </PageLayout>
  );
}
