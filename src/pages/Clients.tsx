import { PageHero } from '../components/layout/PageHero';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ActionLink } from '../components/ui/ActionLink';
import { ProjectCard } from '../components/cards/ProjectCard';
import { clients, clientMatchers, recentProjects, projects } from '../data/projects';

export function Clients() {
  return (
    <main>
      <PageHero
        eyebrow="Major Clients"
        title="Organisations We Have Supplied"
        subtitle="Telecom operators, broadcasters, utilities, aviation authorities and government bodies that source technology through Cybertec."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Major Clients' }]} />
      

      <Section tone="white">
        <ul className="grid gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => {
            const names = clientMatchers[client] ?? [client];
            const clientProjects = projects.filter((project) =>
            names.includes(project.client)
            );
            return (
              <li key={client} className="bg-white p-7">
                <h2 className="font-display text-lg font-semibold leading-snug text-navy-900">
                  {client}
                </h2>
                <ul className="mt-4 space-y-2">
                  {clientProjects.map((project) =>
                  <li key={project.slug} className="flex items-start gap-2 text-sm text-navy-900/65">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-brand-500" aria-hidden="true" />
                      {project.title}
                    </li>
                  )}
                </ul>
              </li>);

          })}
        </ul>
      </Section>

      <Section tone="light">
        <SectionHeading
          title="Recent Engagements"
          subtitle="Supply-led projects delivered through to installation and commissioning." />
        
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentProjects.slice(0, 3).map((project) =>
          <ProjectCard key={project.slug} project={project} />
          )}
        </div>
        <div className="mt-10">
          <ActionLink to="/projects" variant="secondary" withArrow>
            View All Project Experience
          </ActionLink>
        </div>
      </Section>
    </main>);

}