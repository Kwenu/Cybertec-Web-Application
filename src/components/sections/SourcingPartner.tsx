import React from 'react';
import { GlobeIcon, TargetIcon, TruckIcon, WrenchIcon } from 'lucide-react';
import { Section } from '../ui/Section';
import { ActionLink } from '../ui/ActionLink';
import { sourcingBenefits } from '../../data/site';

const icons = [GlobeIcon, TargetIcon, TruckIcon, WrenchIcon];

const IMAGE = "/a321aa6a-8254-4cb9-93a9-eb9f109a57a6.jpg";


export function SourcingPartner() {
  return (
    <Section tone="white">
      <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <p className="font-display text-[11px] uppercase tracking-[0.22em] text-brand-600">
            Procurement &amp; Sourcing
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.12] tracking-[-0.01em] text-navy-900 sm:text-4xl">
            Your Technology Sourcing Partner
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-900/70">
            Finding the right technology for a critical infrastructure project
            can be complex. Cybertec helps organisations identify suitable
            products and technology solutions from its network of global
            manufacturers.
          </p>

          <div className="mt-9 overflow-hidden border border-navy-900/10">
            <img
              src={IMAGE}
              alt="Interior of an orderly technology distribution warehouse with boxed equipment on high racking."
              loading="lazy"
              className="h-64 w-full object-cover" />
            
          </div>
        </div>

        <div>
          <div className="grid gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2">
            {sourcingBenefits.map((benefit, index) => {
              const Icon = icons[index];
              return (
                <div key={benefit.title} className="bg-white p-7">
                  <Icon className="h-6 w-6 text-brand-500" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-base font-semibold text-navy-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/65">
                    {benefit.description}
                  </p>
                </div>);

            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink to="/quote" withArrow>
              Discuss Your Requirement
            </ActionLink>
            <ActionLink to="/products" variant="secondary">
              Browse the Catalogue
            </ActionLink>
          </div>
        </div>
      </div>
    </Section>);

}