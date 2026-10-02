import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from 'lucide-react';
import { categories } from '../../data/categories';

export function ProductFinder() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set('q', query.trim());
    if (category) params.set('category', category);
    navigate(`/products${params.toString() ? `?${params.toString()}` : ''}`);
  };

  return (
    <section className="bg-brand-50">
      <div className="mx-auto max-w-content px-6 py-12 lg:py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-lg">
            <h2 className="font-display text-2xl font-semibold leading-tight text-navy-900 sm:text-3xl">
              What technology are you looking for?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-navy-900/65">
              Search the catalogue by technology, category or application — or
              tell us the requirement and we will identify a suitable
              manufacturer route.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl"
            role="search"
            aria-label="Product finder">
            
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <label className="sr-only" htmlFor="finder-query">
                  Search products, technologies or solutions
                </label>
                <SearchIcon
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-900/40"
                  aria-hidden="true" />
                
                <input
                  id="finder-query"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search products, technologies or solutions..."
                  className="w-full rounded-sm border border-navy-900/15 bg-white py-3.5 pl-11 pr-4 text-sm text-navy-900 outline-none transition-[border-color,box-shadow] duration-150 ease-smooth placeholder:text-navy-900/40 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
                
              </div>
              <div className="sm:w-56">
                <label className="sr-only" htmlFor="finder-category">
                  Technology category
                </label>
                <select
                  id="finder-category"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="w-full rounded-sm border border-navy-900/15 bg-white px-4 py-3.5 text-sm text-navy-900 outline-none transition-[border-color,box-shadow] duration-150 ease-smooth focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20">
                  
                  <option value="">All categories</option>
                  {categories.map((item) =>
                  <option key={item.id} value={item.id}>
                      {item.shortTitle}
                    </option>
                  )}
                </select>
              </div>
              <button
                type="submit"
                className="rounded-sm bg-navy-900 px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 ease-smooth hover:bg-navy-800">
                
                Find Technology
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>);

}