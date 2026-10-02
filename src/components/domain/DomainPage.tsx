import React from 'react';
import { CheckIcon } from 'lucide-react';
import { PageHero } from '../layout/PageHero';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { ActionLink } from '../ui/ActionLink';
import { ProductCard } from '../cards/ProductCard';
import { PartnerCard } from '../cards/PartnerCard';
import { FlowChain } from '../visuals/FlowChain';
import { products } from '../../data/products';
import { ProjectCard } from '../cards/ProjectCard';
import { partners } from '../../data/partners';
import { categoryById } from '../../data/categories';
import { CategoryId, Project } from '../../types/catalogue';

interface DomainPageProps {
  categoryId: CategoryId;
  partnerCategories?: CategoryId[];
  tagline?: string;
  divisionLogo?: {src: string;alt: string;};
  relatedProjects?: Project[];
  heroImage?: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  productGroups: {heading: string;items: string[];}[];
  solutions: {title: string;description: string;}[];
  engineering: string[];
  featuredProject?: Project;
  accent?: 'blue' | 'green';
  note?: string;
  applications?: {heading: string;items: string[];};
}

export function DomainPage({
  categoryId,
  eyebrow,
  title,
  subtitle,
  productGroups,
  solutions,
  engineering,
  featuredProject,
  accent = 'blue',
  note,
  applications,
  partnerCategories,
  tagline,
  divisionLogo,
  relatedProjects,
  heroImage
}: DomainPageProps) {
  const category = categoryById(categoryId);
  const domainProducts = products.filter(
    (product) => product.categoryId === categoryId
  );
  const partnerScope = partnerCategories ?? [categoryId];
  const domainPartners = partners.filter((partner) =>
  partnerScope.includes(partner.categoryId)
  );
  const accentText = accent === 'green' ? 'text-solar-500' : 'text-brand-600';
  const accentBg = accent === 'green' ? 'bg-solar-500' : 'bg-brand-500';

  return (
    <main>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        breadcrumb={[
        { label: 'Home', to: '/' },
        { label: 'Products', to: '/products' },
        { label: category?.shortTitle ?? '' }]
        }
        image={heroImage ?? category?.image}
        imageAlt="">
        
        <div className="flex flex-wrap items-center gap-4">
          <ActionLink to={`/products?category=${categoryId}`} withArrow>
            Explore Products
          </ActionLink>
          <ActionLink to="/quote" variant="onDark">
            Request a Quote
          </ActionLink>
        </div>
        {(tagline || divisionLogo) &&
        <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-white/15 pt-6">
            {divisionLogo &&
          <img
            src={divisionLogo.src}
            alt={divisionLogo.alt}
            className="h-16 w-16 rounded-sm bg-white object-contain" />

          }
            {tagline &&
          <p className="max-w-xl font-display text-base italic text-brand-100/85">
                “{tagline}”
              </p>
          }
          </div>
        }
      </PageHero>

      {/* 1. Products first */}
      <Section tone="white">
        <SectionHeading
          title="Products & Technology"
          subtitle="What we supply in this technology area, sourced through our global manufacturer network." />
        

        <div className="mt-12 grid gap-px border border-navy-900/10 bg-navy-900/10 md:grid-cols-2 lg:grid-cols-3">
          {productGroups.map((group) =>
          <div key={group.heading} className="bg-white p-7">
              <h3 className={`font-display text-base font-semibold ${accentText}`}>
                {group.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) =>
              <li key={item} className="flex items-start gap-2.5">
                    <span
                  className={`mt-2 h-1 w-1 shrink-0 ${accentBg}`}
                  aria-hidden="true" />
                
                    <span className="text-sm leading-relaxed text-navy-900/75">
                      {item}
                    </span>
                  </li>
              )}
              </ul>
            </div>
          )}
        </div>

        {note && <p className="mt-6 text-xs text-navy-900/50">{note}</p>}

        {domainProducts.length > 0 &&
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {domainProducts.map((product) =>
          <ProductCard key={product.slug} product={product} />
          )}
          </div>
        }
      </Section>

      {/* 2. Technology partners */}
      {domainPartners.length > 0 &&
      <Section tone="light">
          <SectionHeading
          title="Technology Partners"
          subtitle="Manufacturer relationships behind the technology supplied in this area." />
        
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {domainPartners.map((partner) =>
          <PartnerCard key={partner.id} partner={partner} />
          )}
          </div>

        </Section>
      }

      {/* 3. Solutions / applications */}
      <Section tone="white">
        <SectionHeading
          title={applications ? applications.heading : 'Solutions'}
          subtitle="How the supplied technology is applied in real deployments." />
        

        {applications ?
        <ul className="mt-12 grid gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-3">
            {applications.items.map((item) =>
          <li key={item} className="bg-white px-6 py-6 text-sm text-navy-900/80">
                {item}
              </li>
          )}
          </ul> :

        <div className="mt-12 grid gap-px border border-navy-900/10 bg-navy-900/10 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) =>
          <div key={solution.title} className="bg-white p-7">
                <h3 className="font-display text-base font-semibold text-navy-900">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/65">
                  {solution.description}
                </p>
              </div>
          )}
          </div>
        }
      </Section>

      {/* 4. Engineering deployment */}
      <Section tone="navy">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="font-display text-[11px] uppercase tracking-[0.22em] text-brand-300">
              Supporting capability
            </p>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.12] text-white sm:text-4xl">
              Engineering &amp; Deployment
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
              Supplied technology can be deployed and supported by our own
              engineering team, from site design through to long-term
              maintenance.
            </p>
            <FlowChain
              tone="dark"
              className="mt-8"
              steps={['Supply', 'Install', 'Commission', 'Support']} />
            
            <div className="mt-8">
              <ActionLink to="/engineering-services" variant="onDark" withArrow>
                Engineering Services
              </ActionLink>
            </div>
          </div>

          <ul className="grid gap-px self-start bg-white/10 sm:grid-cols-2">
            {engineering.map((item) =>
            <li key={item} className="flex items-start gap-3 bg-navy-900 p-6">
                <CheckIcon
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-300"
                aria-hidden="true" />
              
                <span className="font-display text-sm font-semibold text-white">
                  {item}
                </span>
              </li>
            )}
          </ul>
        </div>
      </Section>

      {featuredProject &&
      <Section tone="light">
          <div className="border border-navy-900/10 bg-white p-8 lg:p-12">
            <p className="font-display text-[11px] uppercase tracking-[0.22em] text-brand-600">
              Featured project
            </p>
            <div
            className={`mt-6 grid gap-10 ${
            featuredProject.image ?
            'lg:grid-cols-[0.9fr_1.1fr_1fr]' :
            'lg:grid-cols-[1.1fr_1fr]'}`
            }>
            
              {featuredProject.image &&
            <div className="overflow-hidden border border-navy-900/10 bg-navy-950">
                  <img
                src={featuredProject.image}
                alt={featuredProject.imageAlt ?? featuredProject.title}
                className="aspect-square w-full object-contain" />
              
                </div>
            }
              <div>
                <h2 className="font-display text-2xl font-semibold leading-snug text-navy-900 sm:text-3xl">
                  {featuredProject.client}
                </h2>
                <p className="mt-2 text-base text-navy-900/60">
                  {featuredProject.title}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-navy-900/70">
                  {featuredProject.summary}
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-navy-900/40">
                  Project scope
                </p>
                <ul className="mt-4 grid gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2">
                  {featuredProject.scope.map((item) => {
                  const isSupply = item.toLowerCase().includes('supply');
                  return (
                    <li
                      key={item}
                      className={`px-5 py-4 font-display text-sm font-semibold ${
                      isSupply ?
                      'bg-brand-500 text-white' :
                      'bg-white text-navy-900/75'}`
                      }>
                      
                        {item}
                      </li>);

                })}
                </ul>
                <p className="mt-4 text-xs text-navy-900/50">
                  Technology: {featuredProject.technology}
                </p>
              </div>
            </div>
          </div>
        </Section>
      }

      {relatedProjects && relatedProjects.length > 0 &&
      <Section tone={featuredProject ? 'white' : 'light'}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
            title="Project Experience"
            subtitle="Technology supplied and delivered in this area." />
          
            <ActionLink to="/projects" variant="secondary" withArrow className="shrink-0">
              All Projects
            </ActionLink>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((project) =>
          <ProjectCard key={project.slug} project={project} />
          )}
          </div>
        </Section>
      }

      <Section tone="white" size="compact">
        <div className="flex flex-col gap-6 border border-navy-900/10 bg-navy-900/[0.03] p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-xl font-semibold text-navy-900">
              Need this technology for a project?
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-navy-900/65">
              Share the specification and we will confirm manufacturer options,
              supply timelines and any engineering support required.
            </p>
          </div>
          <ActionLink to="/quote" className="shrink-0" withArrow>
            Request a Quote
          </ActionLink>
        </div>
      </Section>
    </main>);

}