import React from 'react';
import { ActionLink } from '../ui/ActionLink';
import { FlowChain } from '../visuals/FlowChain';

export function FinalCTA() {
  return (
    <section className="bg-navy-900">
      <div className="mx-auto max-w-content px-6 py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.01em] text-white sm:text-4xl lg:text-[44px]">
              Looking for the Right Technology?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
              Tell us what you need. Our team can help you identify suitable
              technology, coordinate supply and provide engineering support when
              required.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink to="/quote" withArrow>
                Request a Quote
              </ActionLink>
              <ActionLink to="/contact" variant="onDark">
                Contact Our Team
              </ActionLink>
            </div>
          </div>

          <div className="border border-white/12 bg-white/[0.04] p-8">
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-brand-300">
              Our service ecosystem
            </p>
            <FlowChain
              tone="dark"
              className="mt-6"
              steps={['Product', 'Supply', 'Install', 'Commission', 'Support']} />
            
            <p className="mt-7 font-display text-lg font-semibold leading-snug text-white">
              Global Technology.
              <br />
              Trusted Supply.
              <br />
              Engineering Excellence.
            </p>
          </div>
        </div>
      </div>
    </section>);

}