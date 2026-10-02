import React from 'react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { supplySteps } from '../../data/site';

export function SupplyProcess() {
  return (
    <Section tone="light">
      <SectionHeading
        title="How We Supply"
        subtitle="A supply relationship first — with engineering brought in at the point of deployment and retained for long-term support." />
      

      <ol className="mt-14 grid gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-3">
        {supplySteps.map((step, index) => {
          const isEngineering = index >= 4;
          return (
            <li key={step.number} className="bg-white p-7 lg:p-8">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-3xl font-bold tracking-[-0.02em] text-navy-900/15">
                  {step.number}
                </span>
                <span
                  className={`font-display text-[10px] font-semibold uppercase tracking-[0.16em] ${
                  isEngineering ? 'text-navy-900/40' : 'text-brand-600'}`
                  }>
                  
                  {isEngineering ? 'Engineering' : 'Supply'}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-900/65">
                {step.description}
              </p>
            </li>);

        })}
      </ol>
    </Section>);

}