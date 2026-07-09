import ContactInquiryForm from "@/components/contact/ContactInquiryForm";
import PageLayout from "@/components/PageLayout";
import { orgLegalName, orgName } from "@/config";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact",
  description: `Contact ${orgLegalName}. Questions about men's life coaching, nutrition, exercise, and faith — or help scheduling a Zoom call.`,
  path: "/contact",
});

const checklist = [
  "What you're hoping to change — health, habits, faith, or all three",
  "Your typical weekly schedule and time zone",
  "Whether you've worked with a coach before",
  "Any injuries, dietary needs, or faith background worth mentioning",
  "Your preferred way to connect — email reply or a link to book Zoom",
];

export default function ContactPage() {
  return (
    <PageLayout
      eyebrow="Get in touch"
      title="Send a message"
      subtitle={`Have a question before booking? ${orgName} reads every message personally. For the fastest path to a conversation, use the scheduler on the Book a Call page.`}
      width="full"
    >
      <div className="mx-auto max-w-3xl px-6 pb-16 sm:px-10 lg:px-12">
        <ContactInquiryForm lines={checklist} />
      </div>
    </PageLayout>
  );
}
