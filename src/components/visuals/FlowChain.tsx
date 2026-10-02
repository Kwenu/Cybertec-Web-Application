import React from 'react';
import { ChevronRightIcon } from 'lucide-react';

interface FlowChainProps {
  steps: string[];
  tone?: 'light' | 'dark';
  highlightIndex?: number;
  className?: string;
}

export function FlowChain({
  steps,
  tone = 'light',
  highlightIndex = 0,
  className = ''
}: FlowChainProps) {
  const isDark = tone === 'dark';
  return (
    <ol className={`flex flex-wrap items-center gap-2 ${className}`}>
      {steps.map((step, index) =>
      <li key={step} className="flex items-center gap-2">
          <span
          className={`inline-flex items-center rounded-sm px-3 py-2 font-display text-[11px] font-semibold uppercase tracking-[0.14em] ${
          index === highlightIndex ?
          'bg-brand-500 text-white' :
          isDark ?
          'bg-white/8 text-white/70' :
          'bg-navy-900/5 text-navy-900/70'}`
          }>
          
            {step}
          </span>
          {index < steps.length - 1 &&
        <ChevronRightIcon
          className={`h-4 w-4 ${isDark ? 'text-white/30' : 'text-navy-900/30'}`}
          aria-hidden="true" />

        }
        </li>
      )}
    </ol>);

}