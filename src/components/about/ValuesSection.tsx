import SectionHeading from "@/components/ui/SectionHeading";
import ValueCard from "@/components/ui/ValueCard";
import { aboutValues } from "@/lib/data";

export default function ValuesSection() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading
          title="Our Values"
          subtitle="The principles that guide everything we do at Memili."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutValues.map((value, index) => (
            <ValueCard key={value.id} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
