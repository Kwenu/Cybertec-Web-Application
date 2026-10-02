import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { industries } from '../../data/site';

export function IndustriesGrid() {
  return (
    <Section>
      <SectionHeading
        title="Industries We Support"
        subtitle="Technology requirements differ by sector. Cybertec supplies against the specification, then supports deployment where required." />
      

      <div className="mt-14 grid gap-px border border-navy-900/10 bg-navy-900/10 md:grid-cols-2 xl:grid-cols-3">
        {industries.map((industry) =>
        <article key={industry.slug} className="flex flex-col bg-white p-7">
            <h3 className="font-display text-lg font-semibold text-navy-900">
              {industry.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-900/65">
              {industry.requirement}
            </p>

            <div className="mt-6 border-t border-navy-900/10 pt-5">
              <p className="text-[11px] uppercase tracking-[0.14em] text-brand-600">
                Relevant products
              </p>
              <ul className="mt-2 space-y-1.5">
                {industry.products.map((product) =>
              <li key={product} className="text-sm text-navy-900/75">
                    {product}
                  </li>
              )}
              </ul>
            </div>

            <div className="mt-auto border-t border-navy-900/10 pt-5">
              <p className="text-[11px] uppercase tracking-[0.14em] text-navy-900/40">
                Engineering support
              </p>
              <p className="mt-2 text-sm text-navy-900/70">
                {industry.engineering}
              </p>
            </div>
          </article>
        )}
      </div>
    </Section>);

}