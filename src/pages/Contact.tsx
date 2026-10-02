import React from 'react';
import { MailIcon, GlobeIcon, MapPinIcon, ClockIcon, PhoneIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { Section } from '../components/ui/Section';
import { ActionLink } from '../components/ui/ActionLink';
import { RequirementForm } from '../components/forms/RequirementForm';
import { contactDetails } from '../data/site';

export function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Talk to Our Technology Supply Team"
        subtitle="Send us a specification, a product enquiry or a project requirement — we will respond with suitable technology options."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}>
        
        <ActionLink to="/quote" variant="onDark" withArrow>
          Request a Quote
        </ActionLink>
      </PageHero>

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-900">
              {contactDetails.company}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-navy-900/65">
              Technology and equipment supply, global manufacturer
              representation and engineering services. Established{' '}
              {contactDetails.established}.
            </p>

            <ul className="mt-8 grid gap-px border border-navy-900/10 bg-navy-900/10">
              <li className="flex items-start gap-4 bg-white p-6">
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm font-semibold text-navy-900">
                    Email
                  </p>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="mt-1 block text-sm text-brand-600 hover:text-brand-700">
                    
                    {contactDetails.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 bg-white p-6">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm font-semibold text-navy-900">
                    Phone
                  </p>
                  {contactDetails.phones.map((phone) =>
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="mt-1 block text-sm text-brand-600 hover:text-brand-700">
                    
                      {phone}
                    </a>
                  )}
                </div>
              </li>
              <li className="flex items-start gap-4 bg-white p-6">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm font-semibold text-navy-900">
                    Head Office
                  </p>
                  <p className="mt-1 text-sm text-navy-900/70">
                    {contactDetails.address}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 bg-white p-6">
                <GlobeIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm font-semibold text-navy-900">
                    Markets
                  </p>
                  <p className="mt-1 text-sm text-navy-900/70">
                    {contactDetails.markets} · {contactDetails.website}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 bg-white p-6">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden="true" />
                <div>
                  <p className="font-display text-sm font-semibold text-navy-900">
                    Enquiries
                  </p>
                  <p className="mt-1 text-sm text-navy-900/70">
                    Product, supply and engineering enquiries are handled by our
                    technology supply team.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-900">
              Send Your Requirement
            </h2>
            <p className="mt-3 text-sm text-navy-900/65">
              The more detail you provide about the specification and quantity,
              the more precise our response.
            </p>
            <div className="mt-8">
              <RequirementForm submitLabel="Submit Requirement" />
            </div>
          </div>
        </div>
      </Section>
    </main>);

}