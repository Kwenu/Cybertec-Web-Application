import React from 'react';
import {
  GlobeIcon,
  MapPinnedIcon,
  TargetIcon,
  PackageIcon,
  WrenchIcon,
  LifeBuoyIcon } from
'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { whyCybertec } from '../../data/site';

const icons = [
GlobeIcon,
MapPinnedIcon,
TargetIcon,
PackageIcon,
WrenchIcon,
LifeBuoyIcon];


export function WhyCybertec() {
  return (
    <Section tone="navy">
      <SectionHeading
        tone="dark"
        title="Why Organizations Work With Cybertec"
        subtitle="A single partner across sourcing, supply and technical deployment — with accountability that continues after handover." />
      

      <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {whyCybertec.map((item, index) => {
          const Icon = icons[index];
          return (
            <div key={item.title} className="bg-navy-900 p-7 lg:p-8">
              <Icon className="h-6 w-6 text-brand-300" aria-hidden="true" />
              <h3 className="mt-5 font-display text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {item.description}
              </p>
            </div>);

        })}
      </div>
    </Section>);

}