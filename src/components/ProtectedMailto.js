"use client";

/**
 * Builds a mailto link only on user interaction so the address is not a
 * scrapeable `mailto:` in server HTML. Parts are encoded, not plain text.
 * Opens the mail client without navigating away from this tab.
 */
export default function ProtectedMailto({ className = "", children }) {
  // "info" @ "lotuswebsites.com" — encoded so HTML scrapers don't see a clear address
  const user = atob("aW5mbw==");
  const domain = atob("bG90dXN3ZWJzaXRlcy5jb20=");

  function openMail(e) {
    e.preventDefault();
    const address = `${user}@${domain}`;
    const mail = document.createElement("a");
    mail.href = `mailto:${address}`;
    mail.target = "_blank";
    mail.rel = "noopener noreferrer";
    mail.style.display = "none";
    document.body.appendChild(mail);
    mail.click();
    mail.remove();
  }

  return (
    <a
      href="#technical-support"
      className={className}
      onClick={openMail}
      rel="nofollow"
      aria-label="Email technical support"
    >
      {children}
    </a>
  );
}
