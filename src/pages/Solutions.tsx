import { PageHero } from '../components/layout/PageHero';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ActionLink } from '../components/ui/ActionLink';
import { CategoryCard } from '../components/cards/CategoryCard';
import { IndustriesGrid } from '../components/sections/IndustriesGrid';
import { SupplyProcess } from '../components/sections/SupplyProcess';
import { SourcingPartner } from '../components/sections/SourcingPartner';
import { FinalCTA } from '../components/sections/FinalCTA';
import { SupplyJourney } from '../components/visuals/SupplyJourney';
import { categories } from '../data/categories';

export function Solutions() {
  return (
    <main>
      <PageHero
        eyebrow="Integrated Technology Solutions"
        title="Technology Solutions, Supplied End to End"
        subtitle="Product sourcing, supply coordination and — where required — the engineering to deploy and support it."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Solutions' }]}>
        
        <div className="flex flex-wrap gap-3">
          <ActionLink to="/products" withArrow>
            Explore Products
          </ActionLink>
          <ActionLink to="/quote" variant="onDark">
            Request a Quote
          </ActionLink>
        </div>
      </PageHero>

      <Section tone="deep">
        <SectionHeading
          tone="dark"
          title="From Global Manufacturers to Your Project"
          subtitle="A single route from manufacturer to commissioned installation, with one point of accountability." />
        
        <div className="mt-12">
          <SupplyJourney />
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading
          title="Solution Areas"
          subtitle="Each area combines technology supply with the engineering support needed to bring it into service." />
        
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) =>
          <CategoryCard
            key={category.id}
            category={category}
            to={`/products?category=${category.id}`} />

          )}
        </div>
      </Section>

      <SupplyProcess />
      <IndustriesGrid />
      <SourcingPartner />
      <FinalCTA />
    </main>);

}