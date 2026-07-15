/**
 * Site-wide values — The Daily Standard (men's life coaching).
 */

export const orgName = "The Daily Standard";

export const orgLegalName = "The Daily Standard";

export const orgPhoneTel = "";
export const orgPhoneLabel = "";

/** Inquiries — contact form and mailto links */
export const orgInquiryEmail = "connect@kevinmillercoaching.com";

/** Canonical production URL — override with NEXT_PUBLIC_SITE_URL in env. */
export const siteDefaultUrl = "https://www.kevinmillercoaching.com";

/** Calendly booking page — set NEXT_PUBLIC_CALENDLY_URL in .env.local (Zoom as location). */
export const calendlyUrl =
  typeof process !== "undefined"
    ? process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() || ""
    : "";

/** @deprecated Prefer calendlyUrl — kept for any leftover Zoom Scheduler embeds */
export const zoomSchedulingUrl =
  typeof process !== "undefined"
    ? process.env.NEXT_PUBLIC_ZOOM_SCHEDULING_URL?.trim() || ""
    : "";

/** Public social profiles */
export const instagramUrl = "";
export const facebookPageUrl = "";
/** Google review / profile page — set NEXT_PUBLIC_GOOGLE_REVIEW_URL in .env.local */
export const googleReviewUrl =
  typeof process !== "undefined"
    ? process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL?.trim() || ""
    : "";

/**
 * Contact form recipients — `id` is submitted with the form; `email` is the delivery address.
 */
export const contactRecipients = [
  {
    id: "general",
    label: "General inquiry",
    email: "connect@kevinmillercoaching.com",
    description: "Questions about coaching, programs, or scheduling.",
  },
];

/** @type {Record<string, (typeof contactRecipients)[number]>} */
export const contactRecipientById = Object.fromEntries(
  contactRecipients.map((entry) => [entry.id, entry]),
);

/** @param {string} id */
export function contactRecipientForId(id) {
  const key = String(id ?? "").trim();
  return contactRecipientById[key] ?? contactRecipientById.general;
}

/** Coaching is virtual — nationwide via Zoom. */
export const serviceAreaProse = "men across the United States";

export const serviceAreaTagline = "Virtual coaching · Nutrition · Exercise · Faith";

/**
 * Primary site navigation.
 */
export const mainNav = [
  { href: "/", label: "Home" },
  {
    label: "Approach",
    pathPrefix: "/services",
    children: [
      {
        href: "/services/nutrition",
        label: "Nutrition",
        description: "Fuel your body with clarity, not confusion.",
      },
      {
        href: "/services/exercise",
        label: "Exercise",
        description: "Strength and discipline you can sustain.",
      },
      {
        href: "/services/faith",
        label: "Faith",
        description: "Ground your purpose in something greater.",
      },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/**
 * @param {string} segment Page title segment (e.g. "About", "Contact")
 * @returns {string} e.g. "About | The Daily Standard"
 */
export function sitePageTitle(segment) {
  const s = String(segment ?? "").trim();
  if (!s) return orgName;
  return `${s} | ${orgName}`;
}

/**
 * @param {string} segment Page title segment (e.g. "Privacy Policy")
 * @returns {string} e.g. "Privacy Policy | The Daily Standard"
 */
export function siteLegalPageTitle(segment) {
  const s = String(segment ?? "").trim();
  if (!s) return orgLegalName;
  return `${s} | ${orgLegalName}`;
}
