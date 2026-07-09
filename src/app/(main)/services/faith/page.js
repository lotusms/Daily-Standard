import PageLayout from "@/components/PageLayout";
import ServicePageBody from "@/components/services/ServicePageBody";
import { orgLegalName } from "@/config";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Faith Coaching",
  description: `Faith-centered life coaching for men with ${orgLegalName}. Purpose, prayer, and spiritual discipline for everyday life.`,
  path: "/services/faith",
});

const lead = [
  "A man's body and habits matter — but without a rooted why, every improvement eventually drifts. Faith coaching isn't about performing religion for an audience. It's about building a daily spiritual rhythm that holds when life gets loud.",
  "Whether you're returning to faith, deepening a walk you've neglected, or trying to lead your family with integrity, we integrate Scripture, prayer, and honest conversation into your coaching — always respectful, never preachy.",
];

const inclusions = {
  title: "What we cover",
  items: [
    "Morning and evening rhythms that fit your household",
    "Scripture reading plans you can actually finish",
    "Prayer as conversation, not guilt-driven checklist",
    "Leading at home without hypocrisy",
    "Navigating doubt, burnout, and dry seasons",
    "Connecting body, mind, and spirit as one life",
  ],
};

const process = {
  steps: [
    {
      title: "Listen",
      body: "Where are you with God honestly — not where you think you should be.",
    },
    {
      title: "Anchor",
      body: "Identify truths and practices that ground you when motivation fails.",
    },
    {
      title: "Practice",
      body: "Small daily standards: prayer, reading, reflection — tracked with grace.",
    },
    {
      title: "Lead",
      body: "Carry what you've built into your work, marriage, and community.",
    },
  ],
};

const cta = {
  primaryHref: "/book",
  primaryLabel: "Book a discovery call",
  secondaryHref: "/services/nutrition",
  secondaryLabel: "Explore nutrition coaching",
};

export default function FaithPage() {
  return (
    <PageLayout
      eyebrow="Approach / Faith"
      title="Faith"
      subtitle="Ground your purpose in something greater. Build spiritual discipline that strengthens every other area of your life."
      width="full"
    >
      <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-12">
        <ServicePageBody
          lead={lead}
          inclusions={inclusions}
          process={process}
          pullQuote="You can't out-train a life that's spiritually adrift. Start with the soul."
          cta={cta}
        />
      </div>
    </PageLayout>
  );
}
