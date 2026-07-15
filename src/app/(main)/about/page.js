import AboutPageContent from "@/components/about/AboutPageContent";
import { orgLegalName } from "@/config";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "About",
  description: `About ${orgLegalName} — coaching for men toward physical, mental, and spiritual fitness. Virtual sessions via Zoom.`,
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
