import { useState } from 'react';
import { PageHero } from '../components/layout/PageHero';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ActionLink } from '../components/ui/ActionLink';
import { ProjectCard } from '../components/cards/ProjectCard';
import { projects } from '../data/projects';
import { categories } from '../data/categories';

const filterIds = [
'all',
'telecommunication',
'broadcasting',
'enterprise-networking',
'infrastructure',
'specialized'] as
const;

export function Projects() {
  const [active, setActive] = useState<string>('all');

  const filters = filterIds.map((id) => ({
    id,
    label:
    id === 'all' ?
    'All' :
    categories.find((category) => category.id === id)?.shortTitle ?? id
  }));

  const matches = (categoryId: string) => active === 'all' || categoryId === active;
  const recent = projects.filter((project) => project.recent && matches(project.categoryId));
  const history = projects.filter((project) => !project.recent && matches(project.categoryId));

  return (
    <main>
      <PageHero
        eyebrow="Project Experience"
        title="Project Experience"
        subtitle="Technology supplied, engineered and deployed across critical infrastructure projects."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Project Experience' }]} />
      

      <Section tone="light">
        <div
          className="flex flex-wrap gap-2 border-b border-navy-900/10 pb-8"
          role="group"
          aria-label="Filter projects by technology area">
          
          {filters.map((filter) => {
            const isActive = active === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActive(filter.id)}
                aria-pressed={isActive}
                className={`rounded-sm px-4 py-2.5 font-display text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors duration-150 ease-smooth ${
                isActive ?
                'bg-navy-900 text-white' :
                'bg-navy-900/5 text-navy-900/70 hover:bg-navy-900/10'}`
                }>
                
                {filter.label}
              </button>);

          })}
        </div>

        {recent.length > 0 &&
        <div className="mt-12">
            <SectionHeading
            title="Recent Projects & Announcements"
            subtitle="The latest supply contracts and completed deployments." />
          
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recent.map((project) =>
            <ProjectCard key={project.slug} project={project} />
            )}
            </div>
          </div>
        }

        {history.length > 0 &&
        <div className="mt-20">
            <SectionHeading
            title="Project History"
            subtitle="Case studies from Cybertec's track record with operators, broadcasters and government since 2000." />
          
            <ol className="mt-10 divide-y divide-navy-900/10 border-y border-navy-900/10">
              {history.map((project) =>
            <li
              key={project.slug}
              className="grid gap-4 py-7 lg:grid-cols-[220px_1fr_260px] lg:gap-10">
              
                  <div>
                    <p className="font-display text-[11px] uppercase tracking-[0.16em] text-brand-600">
                      {categories.find((c) => c.id === project.categoryId)?.shortTitle}
                    </p>
                    <p className="mt-2 text-sm text-navy-900/50">{project.year}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy-900">
                      {project.client} — {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-900/70">
                      {project.summary}
                    </p>
                  </div>
                  <ul className="flex flex-wrap content-start gap-2">
                    {project.scope.map((item) =>
                <li
                  key={item}
                  className={`rounded-sm px-2.5 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.1em] ${
                  item.toLowerCase().includes('supply') ?
                  'bg-brand-500 text-white' :
                  'bg-navy-900/5 text-navy-900/65'}`
                  }>
                  
                        {item}
                      </li>
                )}
                  </ul>
                </li>
            )}
            </ol>
          </div>
        }

        {recent.length === 0 && history.length === 0 &&
        <p className="mt-12 text-sm text-navy-900/60">
            No projects listed in this area yet.
          </p>
        }

        <div className="mt-14 flex flex-col gap-6 border border-navy-900/10 bg-navy-900/[0.03] p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-xl font-semibold text-navy-900">
              Planning a similar project?
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-navy-900/65">
              We can identify suitable technology, quote the supply and deploy it
              with our engineering team.
            </p>
          </div>
          <ActionLink to="/quote" className="shrink-0" withArrow>
            Request a Quote
          </ActionLink>
        </div>
      </Section>
    </main>);

}