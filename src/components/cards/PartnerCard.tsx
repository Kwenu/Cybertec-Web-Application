import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Partner } from '../../types/catalogue';

interface PartnerCardProps {
  partner: Partner;
  featured?: boolean;
}

export function PartnerCard({ partner, featured = false }: PartnerCardProps) {
  return (
    <article
      className={`flex h-full flex-col border bg-white p-6 sm:p-8 ${
      featured ? 'border-brand-400/40' : 'border-navy-900/10'}`
      }>
      
      <p className="font-display text-[10px] uppercase tracking-[0.2em] text-brand-600">
        Global Technology Partner
      </p>

      <div
        className={`mt-5 flex items-center justify-center border border-navy-900/10 bg-navy-900/[0.03] px-4 text-center ${
        featured ? 'h-28' : 'h-24'}`
        }>
        
        <span
          className={`font-display font-bold uppercase tracking-[0.04em] text-navy-900 ${
          partner.name.length > 18 ? 'text-lg' : 'text-2xl'}`
          }>
          
          {partner.name}
        </span>
      </div>

      <p className="mt-6 text-sm font-medium text-navy-900/55">{partner.area}</p>
      {partner.representation ?
      <p className="mt-2 inline-flex self-start rounded-sm bg-brand-500 px-2.5 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
          {partner.representation}
        </p> :
      null}
      <p className="mt-4 text-sm leading-relaxed text-navy-900/70">
        {partner.statement}
      </p>

      {featured &&
      <ul className="mt-5 space-y-2 border-t border-navy-900/10 pt-5">
          {partner.portfolio.map((item) =>
        <li key={item} className="flex items-start gap-2 text-sm text-navy-900/70">
              <span className="mt-2 h-1 w-1 shrink-0 bg-brand-500" aria-hidden="true" />
              {item}
            </li>
        )}
        </ul>
      }

      <Link
        to={`/products?category=${partner.categoryId}`}
        className="mt-auto flex items-center gap-2 pt-6 font-display text-sm font-semibold text-brand-600 transition-colors duration-150 ease-smooth hover:text-brand-700">
        
        {featured ? 'Explore Products' : 'View Portfolio'}
        <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>);

}