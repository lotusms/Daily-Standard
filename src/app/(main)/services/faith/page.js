import FaithServicePage from "@/components/services/FaithServicePage";
import { orgLegalName } from "@/config";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Faith Coaching",
  description: `Faith-centered life coaching for men with ${orgLegalName}. Purpose, prayer, and spiritual discipline for everyday life.`,
  path: "/services/faith",
});

export default function FaithPage() {
  return <FaithServicePage />;
}
