import { Link } from 'react-router-dom';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { ActionLink } from '../ui/ActionLink';
import { PartnerCard } from '../cards/PartnerCard';
import { partners } from '../../data/partners';

export function PartnersShowcase() {
  const featured = partners.filter((partner) => partner.featured);
  const rest = partners.filter((partner) => !partner.featured);

  return (
    <Section tone="white">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          title="Representing Global Technology Leaders"
          subtitle="We connect local organisations with proven technology from established international manufacturers — with exclusive representation across Sri Lanka, Maldives and Nepal." />
        
        <ActionLink to="/partners" variant="secondary" withArrow className="shrink-0">
          View All Global Partners
        </ActionLink>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {featured.map((partner) =>
        <PartnerCard key={partner.id} partner={partner} featured />
        )}
      </div>

      <ul
        className="mt-6 flex snap-x gap-px overflow-x-auto border border-navy-900/10 bg-navy-900/10 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-7"
        aria-label="Other global technology partners">
        
        {rest.map((partner) =>
        <li key={partner.id} className="min-w-[180px] snap-start bg-white sm:min-w-0">
            <Link
            to={`/products?category=${partner.categoryId}`}
            className="flex h-full flex-col justify-between px-5 py-6 transition-colors duration-150 ease-smooth hover:bg-brand-50">
            
              <span className="font-display text-sm font-bold uppercase leading-tight tracking-[0.04em] text-navy-900">
                {partner.name}
              </span>
              <span className="mt-3 text-xs text-navy-900/55">{partner.area}</span>
            </Link>
          </li>
        )}
      </ul>
    </Section>);

}