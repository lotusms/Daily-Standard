import ContactPageContent from "@/components/contact/ContactPageContent";
import { orgLegalName } from "@/config";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact",
  description: `Contact ${orgLegalName}. Questions about men's life coaching, nutrition, exercise, and faith — or help scheduling a Zoom call.`,
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
