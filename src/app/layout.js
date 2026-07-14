import { Geist, Geist_Mono } from "next/font/google";
import ScrollToTopOnLoad from "@/components/ScrollToTopOnLoad";
import { orgLegalName, orgName } from "@/config";
import { ACTIVE_THEME_ID } from "@/theme";
import { absoluteUrl, buildPageMetadata, getSiteUrl } from "@/lib/seo";
import "./globals.css";
import "@/theme/themes.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

const defaultDescription = `${orgLegalName} — life coaching for men through nutrition, exercise, and faith. Book a one-on-one Zoom discovery call.`;

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  ...buildPageMetadata({
    title: orgName,
    description: defaultDescription,
    path: "/",
  }),
  title: {
    default: orgName,
    template: `%s | ${orgName}`,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: absoluteUrl("/favicon/site.webmanifest"),
  category: "business",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme={ACTIVE_THEME_ID}
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body
        className="flex min-h-dvh flex-col overflow-x-clip bg-site-bg font-sans text-site-fg"
        suppressHydrationWarning
      >
        <ScrollToTopOnLoad />
        {children}
      </body>
    </html>
  );
}
