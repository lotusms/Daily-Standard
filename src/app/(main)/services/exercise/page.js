import ExerciseServicePage from "@/components/services/ExerciseServicePage";
import { orgLegalName } from "@/config";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Exercise Coaching",
  description: `Exercise coaching for men with ${orgLegalName}. Strength, conditioning, and consistency — built around your life.`,
  path: "/services/exercise",
});

export default function ExercisePage() {
  return <ExerciseServicePage />;
}
