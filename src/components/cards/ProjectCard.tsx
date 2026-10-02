import React from "react";
import { Project } from "../../types/catalogue";
import { categoryById } from "../../data/categories";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const category = categoryById(project.categoryId);

  return (
    <article className="flex h-full flex-col border border-navy-900/10 bg-white">
      {project.image && (
        <div className="aspect-[4/3] overflow-hidden border-b border-navy-900/10 bg-navy-950">
          <img
            src={project.image}
            alt={project.imageAlt ?? project.title}
            loading="lazy"
            className="h-full w-full object-fixed "
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <p className="font-display text-[11px] uppercase tracking-[0.16em] text-brand-600">
            {category?.shortTitle}
          </p>
          <p className="text-right text-xs text-navy-900/45">{project.year}</p>
        </div>

        <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-navy-900">
          {project.client}
        </h3>
        <p className="mt-1 text-sm font-medium text-navy-900/60">
          {project.title}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-navy-900/70">
          {project.summary}
        </p>

        <div className="mt-6 border-t border-navy-900/10 pt-5">
          <p className="text-xs uppercase tracking-[0.14em] text-navy-900/40">
            Technology
          </p>
          <p className="mt-1.5 text-sm text-navy-900/80">
            {project.technology}
            {project.manufacturer && (
              <span className="text-navy-900/50">
                {" "}
                · {project.manufacturer}
              </span>
            )}
          </p>
        </div>

        <div className="mt-auto pt-5">
          <p className="text-xs uppercase tracking-[0.14em] text-navy-900/40">
            Scope
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {project.scope.map((item) => (
              <li
                key={item}
                className={`rounded-sm px-2.5 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.1em] ${
                  item.toLowerCase().includes("supply")
                    ? "bg-brand-500 text-white"
                    : "bg-navy-900/5 text-navy-900/65"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
