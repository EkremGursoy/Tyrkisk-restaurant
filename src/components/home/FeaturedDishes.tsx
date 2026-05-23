import SectionHeading from "@/components/ui/SectionHeading";
import DishCard from "@/components/ui/DishCard";
import Button from "@/components/ui/Button";
import { featuredDishes } from "@/lib/data";

export default function FeaturedDishes() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          title="Featured Dishes"
          subtitle="Discover our most beloved plates — crafted with care and served with pride."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredDishes.map((dish, index) => (
            <DishCard key={dish.id} dish={dish} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/menu" variant="outline">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
