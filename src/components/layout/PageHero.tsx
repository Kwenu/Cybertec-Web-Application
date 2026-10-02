import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumb?: {label: string;to?: string;}[];
  children?: React.ReactNode;
  image?: string;
  imageAlt?: string;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  children,
  image,
  imageAlt = ''
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900">
      {image &&
      <>
          <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover" />
        
          <span aria-hidden="true" className="absolute inset-0 bg-navy-950/85" />
        </>
      }
      <div className="relative mx-auto max-w-content px-6 py-16 lg:py-24">
        {breadcrumb &&
        <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/50">
              {breadcrumb.map((crumb, index) =>
            <li key={crumb.label} className="flex items-center gap-1.5">
                  {crumb.to ?
              <Link
                to={crumb.to}
                className="transition-colors duration-150 ease-smooth hover:text-white">
                
                      {crumb.label}
                    </Link> :

              <span className="text-white/75">{crumb.label}</span>
              }
                  {index < breadcrumb.length - 1 &&
              <ChevronRightIcon className="h-3 w-3" aria-hidden="true" />
              }
                </li>
            )}
            </ol>
          </nav>
        }

        <p className="font-display text-[11px] uppercase tracking-[0.24em] text-brand-300">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle &&
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            {subtitle}
          </p>
        }
        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>);

}