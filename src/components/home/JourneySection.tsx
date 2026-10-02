import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { SupplyJourney } from '../visuals/SupplyJourney';

export function JourneySection() {
  return (
    <Section tone="deep">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          tone="dark"
          title="From Global Manufacturers to Your Project"
          subtitle="One continuous route from the manufacturer's factory floor to a commissioned, supported installation." />
        
        <p className="max-w-xs font-display text-[11px] uppercase leading-relaxed tracking-[0.18em] text-brand-300">
          Supply leads. Engineering follows.
        </p>
      </div>

      <div className="mt-14">
        <SupplyJourney />
      </div>
    </Section>);

}