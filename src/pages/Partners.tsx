import { PageHero } from '../components/layout/PageHero';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ActionLink } from '../components/ui/ActionLink';
import { PartnerCard } from '../components/cards/PartnerCard';
import { GlobalSupplyNetwork } from '../components/visuals/GlobalSupplyNetwork';
import { partners } from '../data/partners';
import { categories } from '../data/categories';

export function Partners() {
  return (
    <main>
      <PageHero
        eyebrow="Manufacturer Representation"
        title="Global Technology Partners"
        subtitle="Connecting local requirements with trusted international technology manufacturers."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Global Partners' }]}>
        
        <div className="flex flex-wrap gap-3">
          <ActionLink to="/products" withArrow>
            Explore Products
          </ActionLink>
          <ActionLink to="/quote" variant="onDark">
            Request a Quote
          </ActionLink>
        </div>
      </PageHero>

      <Section tone="white">
        <dl className="grid gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-3">
          <div className="bg-white p-6">
            <dt className="text-xs uppercase tracking-[0.14em] text-navy-900/45">Principals</dt>
            <dd className="mt-2 font-display text-3xl font-semibold text-navy-900">
              {partners.length}
            </dd>
          </div>
          <div className="bg-white p-6">
            <dt className="text-xs uppercase tracking-[0.14em] text-navy-900/45">
              Exclusive representation
            </dt>
            <dd className="mt-2 font-display text-lg font-semibold text-navy-900">
              KRONE · Sterlite · Cisco BV
            </dd>
          </div>
          <div className="bg-white p-6">
            <dt className="text-xs uppercase tracking-[0.14em] text-navy-900/45">Markets</dt>
            <dd className="mt-2 font-display text-lg font-semibold text-navy-900">
              Sri Lanka · Maldives · Nepal
            </dd>
          </div>
        </dl>

        {categories.map((category) => {
          const group = partners.filter(
            (partner) => partner.categoryId === category.id
          );
          if (group.length === 0) return null;
          return (
            <div key={category.id} className="mt-16 first:mt-12">
              <div className="flex flex-col gap-3 border-b border-navy-900/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-display text-[11px] uppercase tracking-[0.2em] text-brand-600">
                    {category.number}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-navy-900">
                    {category.title}
                  </h2>
                </div>
                <ActionLink
                  to={`/products?category=${category.id}`}
                  variant="ghost"
                  withArrow>
                  
                  View products
                </ActionLink>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.map((partner) =>
                <PartnerCard key={partner.id} partner={partner} />
                )}
              </div>
            </div>);

        })}
      </Section>

      <Section tone="navy">
        <SectionHeading
          tone="dark"
          title="How the Partnership Model Works"
          subtitle="Manufacturers gain a local representative with technical capability; customers gain a single accountable supplier." />
        
        <div className="mt-12">
          <GlobalSupplyNetwork />
        </div>
      </Section>

      <Section tone="light">
        <div className="flex flex-col gap-6 border border-navy-900/10 bg-white p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-xl font-semibold text-navy-900">
              Are you a manufacturer seeking local representation?
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-navy-900/65">
              Cybertec represents international technology manufacturers in Sri
              Lanka, combining supply coordination with in-house engineering
              capability.
            </p>
          </div>
          <ActionLink to="/contact" className="shrink-0" withArrow>
            Contact Our Team
          </ActionLink>
        </div>
      </Section>
    </main>);

}