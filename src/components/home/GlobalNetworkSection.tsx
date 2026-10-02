import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { GlobalSupplyNetwork } from '../visuals/GlobalSupplyNetwork';

export function GlobalNetworkSection() {
  return (
    <Section tone="navy">
      <SectionHeading
        tone="dark"
        align="center"
        title="Connecting Global Technology with Local Requirements"
        subtitle="International manufacturers, consolidated through one local supply partner, delivered to organisations across Sri Lanka." />
      
      <div className="mt-12">
        <GlobalSupplyNetwork />
      </div>
      <p className="mt-6 text-center text-xs text-white/40">
        Illustrative diagram. Manufacturer locations are generalised.
      </p>
    </Section>);

}