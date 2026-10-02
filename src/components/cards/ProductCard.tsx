import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Product } from '../../types/catalogue';
import { categoryById } from '../../data/categories';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const category = categoryById(product.categoryId);

  return (
    <article className="group flex h-full flex-col border border-navy-900/10 bg-white transition-[border-color,transform] duration-200 ease-smooth hover:border-navy-900/30">
      <div className="aspect-[4/3] overflow-hidden bg-navy-900/5">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-smooth group-hover:scale-[1.03]" />
        
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-display text-[11px] uppercase tracking-[0.16em] text-brand-600">
          {category?.shortTitle}
        </p>
        <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-navy-900">
          {product.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-navy-900/65">
          {product.description}
        </p>
        <dl className="mt-5 space-y-2 border-t border-navy-900/10 pt-5 text-sm">
          <div className="flex gap-3">
            <dt className="w-24 shrink-0 text-navy-900/45">Manufacturer</dt>
            <dd className="text-navy-900/80">{product.manufacturer}</dd>
          </div>
          <div className="flex gap-3">
            <dt className="w-24 shrink-0 text-navy-900/45">Application</dt>
            <dd className="text-navy-900/80">{product.application}</dd>
          </div>
        </dl>
        <Link
          to={`/products/${product.slug}`}
          className="mt-auto flex items-center gap-2 pt-6 font-display text-sm font-semibold text-brand-600 transition-colors duration-150 ease-smooth hover:text-brand-700">
          
          Request Information
          <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>);

}