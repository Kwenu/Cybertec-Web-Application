import React from 'react';
import { PageHero } from '../components/layout/PageHero';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ActionLink } from '../components/ui/ActionLink';
import { FlowChain } from '../components/visuals/FlowChain';
import { engineeringServices, valueAddedServices } from '../data/site';
import { media } from '../data/media';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/cards/ProjectCard';

const HERO = "/0bc23635-1bd3-4e3d-ac48-3b7703e92a27.jpg";


const chain = ['Supply', 'Install', 'Configure', 'Commission', 'Support'];

export function EngineeringServices() {
  const deployed = projects.filter((project) =>
  project.scope.some((item) => item.toLowerCase().includes('commission'))
  );

  return (
    <main>
      <PageHero
        eyebrow="Supporting Capability"
        title="Engineering Expertise Behind the Technology"
        subtitle="Beyond supplying technology, Cybertec provides the engineering capability required to install, commission and support critical infrastructure."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Engineering Services' }]}
        image={HERO}
        imageAlt="">
        
        <div className="flex flex-wrap gap-3">
          <ActionLink to="/products" withArrow>
            Explore Products First
          </ActionLink>
          <ActionLink to="/quote" variant="onDark">
            Request a Quote
          </ActionLink>
        </div>
      </PageHero>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              title="Engineering Follows Supply"
              subtitle="Engineering services exist to make the supplied technology work — from first design through to its service life." />
            
            <FlowChain className="mt-8" steps={chain} highlightIndex={0} />
          </div>

          <ol className="grid gap-px border border-navy-900/10 bg-navy-900/10">
            {chain.map((step, index) =>
            <li key={step} className="flex items-start gap-5 bg-white p-6">
                <span className="font-display text-sm font-bold text-navy-900/25">
                  {`0${index + 1}`}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-navy-900">
                    {step}
                  </h3>
                  <p className="mt-1 text-sm text-navy-900/65">
                    {index === 0 ?
                  'Equipment sourced and delivered against the confirmed requirement.' :
                  index === 1 ?
                  'Physical installation of supplied equipment and infrastructure.' :
                  index === 2 ?
                  'Configuration of the delivered technology to the site design.' :
                  index === 3 ?
                  'Testing, verification and documented handover.' :
                  'Maintenance and technical assistance over the service life.'}
                  </p>
                </div>
              </li>
            )}
          </ol>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          title="Engineering Services"
          subtitle="Available with supplied technology, or as standalone support for existing infrastructure." />
        
        <div className="mt-12 grid gap-px border border-navy-900/10 bg-navy-900/10 md:grid-cols-2 lg:grid-cols-3">
          {engineeringServices.map((service) =>
          <article key={service.title} className="bg-white p-7">
              <h3 className="font-display text-lg font-semibold text-navy-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-900/65">
                {service.description}
              </p>
            </article>
          )}
        </div>
      </Section>

      <Section tone="white">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              title="Turnkey Solutions & Product Training"
              subtitle="Turnkey project solutions through engineering capability and product training from our global principals. All equipment we supply is offered with installation and commissioning." />
            
            <div className="mt-8 overflow-hidden border border-navy-900/10">
              <img
                src={media.aaslFibreSite}
                alt="Optical distribution frame and fibre cable drum during Cybertec site works for AASL."
                className="h-72 w-full object-cover object-top" />
              
            </div>
          </div>
          <ul className="grid gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2">
            {valueAddedServices.map((service) =>
            <li key={service.title} className="bg-white p-7">
                <h3 className="font-display text-base font-semibold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/65">
                  {service.description}
                </p>
              </li>
            )}
          </ul>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          title="Engineering Delivered Alongside Supply"
          subtitle="Projects where Cybertec supplied the technology and carried it through to commissioning." />
        
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deployed.slice(0, 3).map((project) =>
          <ProjectCard key={project.slug} project={project} />
          )}
        </div>
        <div className="mt-10">
          <ActionLink to="/projects" variant="secondary" withArrow>
            View Project Experience
          </ActionLink>
        </div>
      </Section>
    </main>);

}