import Link from "next/link";

import LegalPageShell from "@/components/legal/LegalPageShell";
import { orgInquiryEmail, siteDefaultUrl } from "@/config";
import { buildPageMetadata } from "@/lib/seo";

const BRAND = "Kevin Miller Coaching";
const LAST_UPDATED = "July 15, 2026";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${BRAND}. How we collect, use, and protect personal information when you visit our website, send a message, or book a coaching call.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      subtitle={`How ${BRAND} collects, uses, and protects information when you use this website, contact us, or schedule coaching.`}
    >
      <section className="space-y-4">
        <p>
          {BRAND} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This
          Privacy Policy describes the information we collect through this
          website, how we use it, and the choices you have. By using this site,
          you agree to the practices described here. If you do not agree, please
          do not use the site or submit personal information to us.
        </p>
        <p className="text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>
      </section>

      <section>
        <h2>Who we are</h2>
        <p className="mt-3">
          {BRAND} provides virtual men&apos;s life coaching — including support
          related to nutrition, exercise, mental fitness, and optional
          faith-centered coaching — delivered primarily through online
          conversations such as Zoom. This website is used to share information
          about our approach, answer questions, and help you book a discovery
          call or send a message.
        </p>
      </section>

      <section>
        <h2>Information we collect</h2>
        <p className="mt-3">We may collect the following categories of information:</p>
        <ul>
          <li>
            <strong>Information you provide.</strong> Name, email address, phone
            number (optional), preferred start or call timing, and the contents of
            messages you send through our contact form or by email.
          </li>
          <li>
            <strong>Scheduling information.</strong> When you book through our
            scheduling tool (for example, Calendly), we and that provider may
            receive details you enter to schedule a call, such as name, email,
            preferred time, time zone, and any notes you include. Meeting details
            may also involve Zoom or a similar video service.
          </li>
          <li>
            <strong>Technical and usage data.</strong> Standard log and device
            information common to websites, such as IP address, browser type,
            general location derived from IP, pages viewed, and referring URL.
            This may be processed by our hosting and security providers (for
            example, Vercel and bot-protection services such as Cloudflare
            Turnstile when enabled).
          </li>
        </ul>
        <p className="mt-4">
          You may browse much of the site without creating an account. We do not
          require you to purchase products through this marketing site, and we do
          not intentionally collect payment card numbers on this website.
        </p>
      </section>

      <section>
        <h2>How we use your information</h2>
        <p className="mt-3">We use personal information to:</p>
        <ul>
          <li>Respond to inquiries and provide coaching-related communication</li>
          <li>Schedule, confirm, and conduct discovery calls or coaching sessions</li>
          <li>Operate, maintain, secure, and improve this website</li>
          <li>Prevent spam, abuse, and fraudulent submissions</li>
          <li>Comply with applicable law and enforce our Terms of Use</li>
        </ul>
        <p className="mt-4">
          We do not sell your personal information. We do not share it with
          third parties for their own marketing.
        </p>
      </section>

      <section>
        <h2>How we share information</h2>
        <p className="mt-3">
          We may share information with trusted service providers who help us
          run the website and coaching practice, only as needed for their role.
          Examples include:
        </p>
        <ul>
          <li>Website hosting and delivery</li>
          <li>Email delivery for inquiry and transactional messages</li>
          <li>Scheduling platforms (such as Calendly)</li>
          <li>Video conferencing (such as Zoom)</li>
          <li>Security and bot-prevention tools when enabled</li>
        </ul>
        <p className="mt-4">
          These providers are expected to use your information only to perform
          services for us or as described in their own privacy policies. We may
          also disclose information if required by law, to protect rights and
          safety, or in connection with a business transfer (such as a merger or
          sale of assets), where permitted.
        </p>
      </section>

      <section>
        <h2>Cookies and similar technologies</h2>
        <p className="mt-3">
          This site and embedded third-party tools (including scheduling
          widgets) may use cookies or similar technologies that are necessary
          for core functionality, security, preferences, or analytics. You can
          control cookies through your browser settings. Blocking some cookies
          may affect how parts of the site or embeds work. When an embed
          (such as Calendly) includes its own cookie notice, that provider&apos;s
          practices also apply.
        </p>
      </section>

      <section>
        <h2>How we protect information</h2>
        <p className="mt-3">
          We use reasonable administrative, technical, and organizational
          measures appropriate to the nature of the information we handle —
          including encrypted transport (HTTPS) where available and access
          limitations among service providers. No method of transmission or
          storage is completely secure, and we cannot guarantee absolute
          security.
        </p>
      </section>

      <section>
        <h2>Retention</h2>
        <p className="mt-3">
          We retain personal information only as long as needed for the purposes
          described in this policy, including responding to you, maintaining
          coaching relationship records where appropriate, meeting legal
          obligations, and resolving disputes. Retention periods may vary by
          context (for example, a one-time inquiry versus ongoing coaching).
        </p>
      </section>

      <section>
        <h2>Children&apos;s privacy</h2>
        <p className="mt-3">
          This website and our coaching services are intended for adults. We do
          not knowingly collect personal information from children under 13. If
          you believe a child has provided information to us, contact us and we
          will take appropriate steps to delete it.
        </p>
      </section>

      <section>
        <h2>Your choices and rights</h2>
        <p className="mt-3">
          Depending on where you live, you may have rights to request access to,
          correction of, or deletion of personal information we hold about you,
          or to object to certain processing. To make a request, email us at the
          address below. We may need to verify your identity before responding.
          California residents: we do not sell personal information as that term
          is commonly understood under the CCPA, and we describe our practices
          in this policy.
        </p>
      </section>

      <section>
        <h2>Third-party sites and tools</h2>
        <p className="mt-3">
          Our site may link to or embed third-party services (for example,
          scheduling or video tools). Those services have their own privacy
          policies. We are not responsible for their practices. Review their
          policies before submitting information through their interfaces.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p className="mt-3">
          We may update this Privacy Policy from time to time. When we do, we
          will post the revised version on this page and update the &quot;Last
          updated&quot; date. Continued use of the site after changes means you
          accept the updated policy, to the extent permitted by law.
        </p>
      </section>

      <section>
        <h2>Related terms</h2>
        <p className="mt-3">
          Use of this website is also governed by our{" "}
          <Link href="/terms-of-use">Terms of Use</Link>.
        </p>
      </section>

      <section>
        <h2>Contact us</h2>
        <p className="mt-3">
          Questions about this Privacy Policy or our data practices may be sent
          to:
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
