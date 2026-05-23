import Hero from "@/components/home/Hero";
import WhyMemili from "@/components/home/WhyMemili";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import Experience from "@/components/home/Experience";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyMemili />
      <FeaturedDishes />
      <Experience />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
