import React from 'react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { ActionLink } from '../ui/ActionLink';
import { ProjectCard } from '../cards/ProjectCard';
import { featuredProjects } from '../../data/projects';

export function ProjectsPreview() {
  return (
    <Section tone="light">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          title="Technology Delivered. Projects Completed."
          subtitle="Selected project experience across telecommunication, broadcast and enterprise infrastructure." />
        
        <ActionLink to="/projects" variant="secondary" withArrow className="shrink-0">
          View Project Experience
        </ActionLink>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {featuredProjects.slice(0, 3).map((project) =>
        <ProjectCard key={project.slug} project={project} />
        )}
      </div>
    </Section>);

}