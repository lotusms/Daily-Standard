import NutritionServicePage from "@/components/services/NutritionServicePage";
import { orgLegalName } from "@/config";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Nutrition Coaching",
  description: `Nutrition coaching for men with ${orgLegalName}. Simple, sustainable eating habits — no fad diets, no shame.`,
  path: "/services/nutrition",
});

export default function NutritionPage() {
  return <NutritionServicePage />;
}
