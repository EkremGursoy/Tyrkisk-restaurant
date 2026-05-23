import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import MissionSection from "@/components/about/MissionSection";
import ValuesSection from "@/components/about/ValuesSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Memili — our story, mission, and values. Authentic Turkish cuisine with modern hospitality in Oslo.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <MissionSection />
      <ValuesSection />
    </>
  );
}
