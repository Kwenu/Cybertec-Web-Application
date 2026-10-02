import React from 'react';
import { GlobeIcon, PackageIcon, WrenchIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ActionLink } from '../components/ui/ActionLink';
import { GlobalSupplyNetwork } from '../components/visuals/GlobalSupplyNetwork';
import { FinalCTA } from '../components/sections/FinalCTA';
import { clients } from '../data/projects';
import { media } from '../data/media';
import { companyFacts, teamFacts, groupCompanies } from '../data/site';

const pillars = [
{
  icon: GlobeIcon,
  title: 'Global Technology',
  description: 'Access to international technology manufacturers.'
},
{
  icon: PackageIcon,
  title: 'Local Supply',
  description: 'Technology sourcing and supply for local projects.'
},
{
  icon: WrenchIcon,
  title: 'Engineering Support',
  description: 'Installation, commissioning and technical services.'
}];


export function About() {
  return (
    <main>
      <PageHero
        eyebrow="About Cybertec Enterprises"
        title="Your Local Partner for Global Technology"
        subtitle="Established in 2000, supplying technology and infrastructure solutions across telecommunications, broadcasting and enterprise environments."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About Us' }]} />
      

      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-lg leading-relaxed text-navy-900/80">
              Established in 2000, Cybertec Enterprises has developed experience
              in supplying technology and infrastructure solutions across
              telecommunications, broadcasting and enterprise environments.
            </p>
            <p className="mt-6 text-base leading-relaxed text-navy-900/65">
              Cybertec combines access to technology manufacturers with local
              market knowledge and engineering capability. Equipment is supplied
              through the principals we represent in Sri Lanka, Maldives and
              Nepal, while installation, commissioning and maintenance are
              delivered locally by our own teams.
            </p>
            <ul className="mt-6 space-y-2">
              {teamFacts.map((fact) =>
              <li key={fact} className="flex items-start gap-2.5 text-sm text-navy-900/75">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-brand-500" aria-hidden="true" />
                  {fact}
                </li>
              )}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <ActionLink to="/products" withArrow>
                Explore Products
              </ActionLink>
              <ActionLink to="/partners" variant="secondary">
                Global Partners
              </ActionLink>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-center border border-navy-900/10 bg-white p-10">
              <img
                src={media.logo}
                alt="Cybertec Enterprises (Pvt) Ltd logo"
                className="h-28 w-auto" />
              
            </div>
            <div className="overflow-hidden border border-navy-900/10">
              <img
                src={media.aaslFibreSite}
                alt="Optical distribution frame and fibre cable works carried out by Cybertec for AASL."
                className="h-64 w-full object-cover object-top" />
              
            </div>
          </div>
        </div>

        <dl className="mt-16 grid gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-4">
          {companyFacts.map((fact) =>
          <div key={fact.label} className="flex flex-col bg-white p-7">
              <dt className="order-2 mt-2 text-sm text-navy-900/60">{fact.label}</dt>
              <dd className="font-display text-4xl font-semibold tracking-[-0.02em] text-navy-900">
                {fact.value}
              </dd>
            </div>
          )}
        </dl>
      </Section>

      <Section tone="light">
        <SectionHeading
          title="Three Capabilities, One Partner"
          subtitle="Supply leads the relationship; engineering makes it work; support keeps it working." />
        
        <div className="mt-12 grid gap-px border border-navy-900/10 bg-navy-900/10 lg:grid-cols-3">
          {pillars.map((pillar, index) =>
          <article key={pillar.title} className="bg-white p-8 lg:p-10">
              <div className="flex items-center justify-between">
                <pillar.icon className="h-7 w-7 text-brand-500" aria-hidden="true" />
                <span className="font-display text-[11px] uppercase tracking-[0.2em] text-navy-900/25">
                  {`0${index + 1}`}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-navy-900">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-900/65">
                {pillar.description}
              </p>
            </article>
          )}
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          tone="dark"
          title="Connecting Global Technology with Local Requirements"
          subtitle="One local partner between international manufacturers and the organisations that depend on their technology." />
        
        <div className="mt-12">
          <GlobalSupplyNetwork />
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          title="Trusted by Established Organisations"
          subtitle="Technology supplied to operators, broadcasters, utilities and government bodies." />
        
        <ul className="mt-10 grid gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) =>
          <li
            key={client}
            className="bg-white px-6 py-6 font-display text-sm font-semibold text-navy-900/80">
            
              {client}
            </li>
          )}
        </ul>
      </Section>

      <Section tone="light">
        <SectionHeading
          title="Divisions & Group Companies"
          subtitle="Cybertec Enterprises operates specialist divisions and sits within a wider group of technology businesses." />
        

        <div className="mt-12 grid items-center gap-8 border border-navy-900/10 bg-white p-8 lg:grid-cols-[160px_1fr] lg:p-10">
          <img
            src={media.enterpriseNetworksLogo}
            alt="Cybertec Enterprise Networks logo"
            className="h-36 w-36 object-contain" />
          
          <div>
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-brand-600">
              Division
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-navy-900">
              Cybertec Enterprise Networks
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-navy-900/70">
              Enterprise switching, routing and IP communication systems — recently
              delivering for CEB Colombo City, Kotelawala Defence University and
              Airport &amp; Aviation Services Sri Lanka.
            </p>
            <ActionLink
              to="/enterprise-networking"
              variant="ghost"
              withArrow
              className="mt-4">
              
              Enterprise Networking
            </ActionLink>
          </div>
        </div>

        <ul className="mt-6 grid gap-px border border-navy-900/10 bg-navy-900/10 md:grid-cols-2">
          {groupCompanies.map((company) =>
          <li key={company.name} className="bg-white p-7">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-base font-semibold text-navy-900">
                  {company.name}
                </h3>
                <span className="shrink-0 text-xs text-navy-900/45">
                  Est. {company.established}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-navy-900/65">
                {company.description}
              </p>
            </li>
          )}
        </ul>
      </Section>

      <FinalCTA />
    </main>);
}