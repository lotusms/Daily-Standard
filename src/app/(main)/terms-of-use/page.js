import Link from "next/link";

import LegalPageShell from "@/components/legal/LegalPageShell";
import { orgInquiryEmail, siteDefaultUrl } from "@/config";
import { buildPageMetadata } from "@/lib/seo";

const BRAND = "Kevin Miller Coaching";
const LAST_UPDATED = "July 15, 2026";

export const metadata = buildPageMetadata({
  title: "Terms of Use",
  description: `Terms of Use for ${BRAND}. Rules for using this website and engaging with our men's life coaching services.`,
  path: "/terms-of-use",
});

export default function TermsOfUsePage() {
  return (
    <LegalPageShell
      title="Terms of Use"
      subtitle={`Please read these terms carefully before using the ${BRAND} website or booking a coaching conversation.`}
    >
      <section className="space-y-4">
        <p>
          These Terms of Use (&quot;Terms&quot;) govern your access to and use of
          the website operated by {BRAND} (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;), including any pages, forms, scheduling tools, and
          related online content we make available. By browsing or using this
          site, submitting a contact form, or booking a call, you agree to these
          Terms. If you do not agree, do not use the site.
        </p>
        <p className="text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>
      </section>

      <section>
        <h2>About our services</h2>
        <p className="mt-3">
          {BRAND} offers virtual men&apos;s life coaching and related educational
          content focused on areas such as nutrition, exercise, mental fitness,
          and optional faith-centered coaching. Sessions are typically conducted
          online (for example, via Zoom). Information on this website is for
          general informational purposes and to help you decide whether to get
          in touch or book a discovery call.
        </p>
      </section>

      <section>
        <h2>Eligibility</h2>
        <p className="mt-3">
          You must be at least 18 years old to use this website to request
          coaching, book a call, or submit personal information for those
          purposes. If you are under 18, you may view publicly available
          educational content only with a parent or guardian&apos;s involvement
          as appropriate, and you should not submit personal information through
          our forms.
        </p>
      </section>

      <section>
        <h2>Not medical, mental-health, or legal advice</h2>
        <p className="mt-3">
          Coaching is not psychotherapy, medical care, dietetics, personal
          training licensure, pastoral counseling as a formal clinical service,
          or legal advice. Nothing on this website or in a coaching conversation
          creates a doctor–patient, therapist–client, or attorney–client
          relationship. Always consult qualified professionals for medical,
          mental-health, nutritional, legal, or other clinical concerns. If you
          are in crisis or need emergency help, contact local emergency services
          or a crisis hotline immediately — do not rely on this website or email
          for urgent support.
        </p>
      </section>

      <section>
        <h2>No guarantee of results</h2>
        <p className="mt-3">
          Coaching outcomes vary. We do not guarantee specific results related
          to health, fitness, weight, performance, relationships, income, faith,
          or any other life area. You remain responsible for your decisions and
          for how you apply any suggestions discussed.
        </p>
      </section>

      <section>
        <h2>Booking and communications</h2>
        <p className="mt-3">
          Discovery calls and sessions may be scheduled through third-party
          tools (such as Calendly) and held on video platforms (such as Zoom).
          Those tools are subject to their own terms and privacy policies. You
          agree to provide accurate contact information and to treat scheduling
          and calls respectfully (including canceling or rescheduling according
          to any instructions we provide). We may decline or end a coaching
          relationship if it is not a good fit or if these Terms are violated.
        </p>
      </section>

      <section>
        <h2>License to use this website</h2>
        <p className="mt-3">
          Unless otherwise stated, {BRAND} and/or its licensors own the
          intellectual property rights in this website and the materials on it
          (including text, branding, graphics, and layout). We grant you a
          limited, non-exclusive, non-transferable license to access and use the
          site for personal, non-commercial purposes consistent with these
          Terms.
        </p>
        <p className="mt-3">You may not:</p>
        <ul>
          <li>Republish material from this website without our prior written permission</li>
          <li>Sell, rent, or sublicense website material</li>
          <li>Reproduce site content for commercial purposes</li>
          <li>Copy, modify, or redistribute our branding or materials except as allowed by law or with our written consent</li>
          <li>Attempt to interfere with the site&apos;s security or normal operation</li>
        </ul>
      </section>

      <section>
        <h2>Acceptable use</h2>
        <p className="mt-3">
          You must not use this website in any way that is unlawful, harmful,
          fraudulent, or abusive; that harasses others; that introduces malware;
          that scrapes or overloads the site unreasonably; or that attempts to
          gain unauthorized access to systems or data. You must not submit false
          or misleading information through our forms.
        </p>
      </section>

      <section>
        <h2>User submissions</h2>
        <p className="mt-3">
          If you send us messages, form responses, or other content, you grant
          us a non-exclusive right to use that information as needed to respond
          to you and operate our practice. Do not submit content you do not have
          the right to share, or content that is illegal, defamatory, or
          infringing.
        </p>
      </section>

      <section>
        <h2>Third-party links and embeds</h2>
        <p className="mt-3">
          The site may contain links to or embeds of third-party services. We do
          not control those services and are not responsible for their content,
          availability, or policies. Your use of them is at your own risk and
          subject to their terms.
        </p>
      </section>

      <section>
        <h2>Disclaimer of warranties</h2>
        <p className="mt-3">
          This website and its content are provided on an &quot;as is&quot; and
          &quot;as available&quot; basis without warranties of any kind, whether
          express or implied, including but not limited to warranties of
          merchantability, fitness for a particular purpose, title, or
          non-infringement. We do not warrant that the site will be uninterrupted,
          error-free, or free of harmful components.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p className="mt-3">
          To the fullest extent permitted by law, {BRAND} and its owners,
          coaches, contractors, and affiliates will not be liable for any
          indirect, incidental, special, consequential, or punitive damages, or
          any loss of profits, data, goodwill, or other intangible losses,
          arising out of or related to your use of (or inability to use) this
          website or reliance on any content or coaching-related communications.
          Our total liability for any claim arising out of these Terms or the
          site will not exceed the greater of (a) the amounts you paid us for
          coaching services in the twelve months before the claim, if any, or
          (b) one hundred U.S. dollars ($100), except where liability cannot be
          limited under applicable law.
        </p>
      </section>

      <section>
        <h2>Indemnity</h2>
        <p className="mt-3">
          You agree to indemnify and hold harmless {BRAND} and its owners,
          coaches, and affiliates from claims, damages, losses, and expenses
          (including reasonable attorneys&apos; fees) arising from your misuse
          of the site, your violation of these Terms, or your violation of any
          third-party rights.
        </p>
      </section>

      <section>
        <h2>Privacy</h2>
        <p className="mt-3">
          Our collection and use of personal information is described in our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>, which is
          incorporated into these Terms by reference.
        </p>
      </section>

      <section>
        <h2>Changes</h2>
        <p className="mt-3">
          We may update these Terms from time to time by posting a revised
          version on this page and updating the &quot;Last updated&quot; date.
          Your continued use of the site after changes become effective
          constitutes acceptance of the revised Terms, to the extent permitted
          by law.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p className="mt-3">
          These Terms are governed by applicable laws of the United States and
          the state in which {BRAND} principally operates, without regard to
          conflict-of-law principles. Courts in that jurisdiction will have
          exclusive venue for disputes arising from these Terms or the site,
          except where prohibited by law.
        </p>
      </section>

      <section>
        <h2>Contact us</h2>
        <p className="mt-3">
          Questions about these Terms of Use may be sent to:
        </p>
        <p className="mt-3">
          {BRAND}
          <br />
          <a href={siteDefaultUrl}>{siteDefaultUrl.replace(/^https?:\/\//, "")}</a>
          <br />
          <a href={`mailto:${orgInquiryEmail}`}>{orgInquiryEmail}</a>
          <br />
          Or use our <Link href="/contact">contact form</Link>.
        </p>
      </section>
    </LegalPageShell>
  );
}
