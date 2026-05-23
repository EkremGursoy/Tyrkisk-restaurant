import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          title="What Our Guests Say"
          subtitle="Hear from those who have experienced Memili."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
