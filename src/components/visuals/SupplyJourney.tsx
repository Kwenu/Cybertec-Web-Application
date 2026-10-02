import { motion, useReducedMotion } from 'framer-motion';
import {
  FactoryIcon,
  PackageCheckIcon,
  TruckIcon,
  WrenchIcon,
  HeadphonesIcon } from
'lucide-react';
import { journeyStages } from '../../data/site';

const icons = [FactoryIcon, PackageCheckIcon, TruckIcon, WrenchIcon, HeadphonesIcon];

export function SupplyJourney() {
  const reduce = useReducedMotion();

  return (
    <ol className="relative grid gap-4 lg:grid-cols-5 lg:gap-0">
      {journeyStages.map((stage, index) => {
        const Icon = icons[index];
        const isSupply = index === 1;
        return (
          <motion.li
            key={stage.label}
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1], delay: index * 0.05 }}
            className="relative lg:px-3">
            
            <div
              className={`h-full border p-6 ${
              isSupply ?
              'border-brand-400/60 bg-brand-500/15' :
              'border-white/12 bg-white/[0.04]'}`
              }>
              
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-sm ${
                  isSupply ? 'bg-brand-500 text-white' : 'bg-white/10 text-brand-200'}`
                  }>
                  
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-display text-[11px] uppercase tracking-[0.2em] text-white/35">
                  {`0${index + 1}`}
                </span>
              </div>
              <p className="mt-5 font-display text-lg font-semibold text-white">
                {stage.label}
              </p>
              <p className="mt-1 text-sm text-white/60">{stage.detail}</p>
            </div>

            {index < journeyStages.length - 1 &&
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-full h-4 w-px -translate-x-1/2 bg-white/20 lg:left-auto lg:right-0 lg:top-1/2 lg:h-px lg:w-6 lg:translate-x-1/2 lg:-translate-y-1/2" />

            }
          </motion.li>);

      })}
    </ol>);

}