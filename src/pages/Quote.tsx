import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { Section } from '../components/ui/Section';
import { RequirementForm } from '../components/forms/RequirementForm';
import { supplySteps } from '../data/site';

export function Quote() {
  return (
    <main>
      <PageHero
        eyebrow="Technology Supply"
        title="Request a Quote"
        subtitle="Tell us the requirement. We will identify suitable technology from our manufacturer network, quote the supply and confirm any engineering support needed."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Request a Quote' }]} />
      

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr]">
          <RequirementForm />

          <aside>
            <h2 className="font-display text-lg font-semibold text-navy-900">
              What happens next
            </h2>
            <ol className="mt-6 space-y-5 border-l border-navy-900/10 pl-6">
              {supplySteps.slice(0, 4).map((step) =>
              <li key={step.number} className="relative">
                  <span
                  className="absolute -left-[26px] top-1.5 h-2 w-2 bg-brand-500"
                  aria-hidden="true" />
                
                  <p className="font-display text-sm font-semibold text-navy-900">
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm text-navy-900/65">
                    {step.description}
                  </p>
                </li>
              )}
            </ol>

            <div className="mt-10 border border-navy-900/10 bg-navy-900/[0.03] p-6">
              <p className="font-display text-[11px] uppercase tracking-[0.18em] text-brand-600">
                Good to know
              </p>
              <p className="mt-3 text-sm leading-relaxed text-navy-900/70">
                Manufacturer and product details are confirmed at quotation
                stage against the specification supplied. Engineering support for
                installation, commissioning and maintenance can be quoted
                alongside the supply.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </main>);

}