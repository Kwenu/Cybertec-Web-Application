import { asset } from "../utils/asset";
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchIcon, XIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { Section } from '../components/ui/Section';
import { ActionLink } from '../components/ui/ActionLink';
import { ProductCard } from '../components/cards/ProductCard';
import { FlowChain } from '../components/visuals/FlowChain';
import { categories } from '../data/categories';
import { products } from '../data/products';

const HERO = asset("83d2479a-ffdc-43f9-9bd8-6df71e357106.jpg");


export function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') ?? 'all';
  const [query, setQuery] = useState(searchParams.get('q') ?? '');

  const filters = useMemo(
    () => [
    { id: 'all', label: 'All' },
    ...categories.map((category) => ({
      id: category.id,
      label: category.shortTitle
    }))],

    []
  );

  const setCategory = (id: string) => {
    const next = new URLSearchParams(searchParams);
    if (id === 'all') next.delete('category');else
    next.set('category', id);
    setSearchParams(next, { replace: true });
  };

  const visible = products.filter((product) => {
    const matchesCategory =
    activeCategory === 'all' || product.categoryId === activeCategory;
    const term = query.trim().toLowerCase();
    const matchesQuery =
    !term ||
    [
    product.name,
    product.description,
    product.application,
    product.categoryId,
    product.manufacturer].

    join(' ').
    toLowerCase().
    includes(term);
    return matchesCategory && matchesQuery;
  });

  return (
    <main>
      <PageHero
        eyebrow="Technology Catalogue"
        title="Technology Products & Solutions"
        subtitle="Explore technology categories supplied through Cybertec's global manufacturer network."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Products' }]}
        image={HERO}
        imageAlt="Fibre optic cable spools, closures and connector assemblies arranged on a dark surface.">
        
        <FlowChain
          tone="dark"
          steps={['Source', 'Supply', 'Deliver', 'Deploy', 'Support']} />
        
      </PageHero>

      <Section tone="white">
        <div className="flex flex-col gap-6 border-b border-navy-900/10 pb-8 lg:flex-row lg:items-center lg:justify-between">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter products by category">
            
            {filters.map((filter) => {
              const isActive = activeCategory === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setCategory(filter.id)}
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

          <div className="relative lg:w-80">
            <label className="sr-only" htmlFor="catalogue-search">
              Search the catalogue
            </label>
            <SearchIcon
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-900/40"
              aria-hidden="true" />
            
            <input
              id="catalogue-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products or applications..."
              className="w-full rounded-sm border border-navy-900/15 bg-white py-3 pl-11 pr-10 text-sm text-navy-900 outline-none transition-[border-color,box-shadow] duration-150 ease-smooth placeholder:text-navy-900/40 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
            
            {query &&
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-900/40 hover:text-navy-900"
              aria-label="Clear search">
              
                <XIcon className="h-4 w-4" />
              </button>
            }
          </div>
        </div>

        <p className="mt-6 text-sm text-navy-900/55">
          Showing {visible.length} of {products.length} solution types
        </p>

        {visible.length > 0 ?
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((product) =>
          <ProductCard key={product.slug} product={product} />
          )}
          </div> :

        <div className="mt-8 border border-dashed border-navy-900/20 bg-navy-900/[0.02] p-12 text-center">
            <h2 className="font-display text-xl font-semibold text-navy-900">
              No matching solution types
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-navy-900/65">
              The catalogue is expanding as manufacturer portfolios are
              confirmed. Send us the specification and we will identify a
              suitable technology route.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <ActionLink to="/quote" withArrow>
                Request a Quote
              </ActionLink>
              <button
              type="button"
              onClick={() => {
                setQuery('');
                setCategory('all');
              }}
              className="rounded-sm border border-navy-900/20 px-6 py-3 font-display text-sm font-semibold text-navy-900 transition-colors duration-150 ease-smooth hover:border-navy-900/50">
              
                Reset filters
              </button>
            </div>
          </div>
        }

        <div className="mt-14 border border-navy-900/10 bg-navy-900/[0.03] p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <h2 className="font-display text-xl font-semibold text-navy-900">
              Can’t find the technology you need?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy-900/65">
              Manufacturer and product details are confirmed at quotation.
              Describe the requirement and our team will match it to a suitable
              manufacturer and prepare a proposal.
            </p>
          </div>
          <ActionLink to="/quote" className="mt-6 shrink-0 lg:mt-0" withArrow>
            Request a Quote
          </ActionLink>
        </div>
      </Section>
    </main>);

}