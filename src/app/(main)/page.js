import HomeSectionDivider from "@/components/ui/HomeSectionDivider";
import HomeBookingCTA from "@/components/home/HomeBookingCTA";
import HomePillarsSection from "@/components/home/HomePillarsSection";
import HomeTestimonialWheel from "@/components/home/HomeTestimonialWheel";
import HomeHero from "@/components/home/HomeHero";
import HomeValueBar from "@/components/home/HomeValueBar";
import { orgLegalName } from "@/config";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: orgLegalName,
  description:
    "The Daily Standard — life coaching for men through nutrition, exercise, and faith. Book a one-on-one Zoom discovery call today.",
  path: "/",
});

export default function Home() {
  return (
    <main>
      <section className="relative -mt-16 flex flex-col">
        <div className="relative flex flex-col">
          <HomeHero />
          <HomeValueBar />
        </div>
      </section>

      <HomePillarsSection />

      <HomeSectionDivider className="my-10" />

      <HomeTestimonialWheel />

      <HomeSectionDivider className="my-10" />

      <HomeBookingCTA />
    </main>
  );
}
