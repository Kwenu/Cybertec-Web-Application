import { Link, useParams } from 'react-router-dom';
import { CheckIcon } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { Section } from '../components/ui/Section';
import { ActionLink } from '../components/ui/ActionLink';
import { ProductCard } from '../components/cards/ProductCard';
import { RequirementForm } from '../components/forms/RequirementForm';
import { FlowChain } from '../components/visuals/FlowChain';
import { productBySlug, products } from '../data/products';
import { categoryById } from '../data/categories';

export function ProductDetail() {
  const { slug = '' } = useParams();
  const product = productBySlug(slug);

  if (!product) {
    return (
      <main>
        <PageHero
          eyebrow="Catalogue"
          title="Product not found"
          subtitle="This solution type is no longer listed. Browse the catalogue or send us the requirement directly."
          breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Products', to: '/products' }]}>
          
          <ActionLink to="/products" withArrow>
            Back to Products
          </ActionLink>
        </PageHero>
      </main>);

  }

  const category = categoryById(product.categoryId);
  const related = products.
  filter(
    (item) =>
    item.categoryId === product.categoryId && item.slug !== product.slug
  ).
  slice(0, 3);

  return (
    <main>
      <Section tone="light" size="compact">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-navy-900/50">
            <li>
              <Link to="/" className="hover:text-navy-900">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to="/products" className="hover:text-navy-900">
                Products
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-navy-900/75">{product.name}</li>
          </ol>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div className="overflow-hidden border border-navy-900/10 bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-[4/3] w-full object-cover" />
            
          </div>

          <div>
            <p className="font-display text-[11px] uppercase tracking-[0.2em] text-brand-600">
              {category?.title}
            </p>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-[-0.01em] text-navy-900 sm:text-4xl">
              {product.name}
            </h1>

            <dl className="mt-7 grid gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2">
              <div className="bg-white p-5">
                <dt className="text-[11px] uppercase tracking-[0.14em] text-navy-900/45">
                  Manufacturer
                </dt>
                <dd className="mt-1.5 text-sm text-navy-900/85">
                  {product.manufacturer}
                </dd>
              </div>
              <div className="bg-white p-5">
                <dt className="text-[11px] uppercase tracking-[0.14em] text-navy-900/45">
                  Technology category
                </dt>
                <dd className="mt-1.5 text-sm text-navy-900/85">
                  {category?.shortTitle}
                </dd>
              </div>
            </dl>

            <h2 className="mt-9 font-display text-lg font-semibold text-navy-900">
              Overview
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-navy-900/70">
              {product.overview}
            </p>

            <FlowChain
              className="mt-8"
              steps={['Supply', 'Install', 'Commission', 'Support']} />
            

            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink to="/quote" withArrow>
                Request Product Information
              </ActionLink>
              <ActionLink to="/contact" variant="secondary">
                Contact Our Team
              </ActionLink>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-900">
              Key Features
            </h2>
            <ul className="mt-6 space-y-3">
              {product.features.map((feature) =>
              <li key={feature} className="flex items-start gap-3">
                  <CheckIcon
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                  aria-hidden="true" />
                
                  <span className="text-sm leading-relaxed text-navy-900/75">
                    {feature}
                  </span>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-900">
              Applications
            </h2>
            <ul className="mt-6 grid gap-px border border-navy-900/10 bg-navy-900/10">
              {product.applications.map((application) =>
              <li key={application} className="bg-white px-5 py-4 text-sm text-navy-900/80">
                  {application}
                </li>
              )}
            </ul>

            {product.specifications && product.specifications.length > 0 &&
            <div className="mt-10">
                <h2 className="font-display text-2xl font-semibold text-navy-900">
                  Technical Specifications
                </h2>
                <dl className="mt-6 divide-y divide-navy-900/10 border border-navy-900/10">
                  {product.specifications.map((spec) =>
                <div key={spec.label} className="flex gap-4 px-5 py-4">
                      <dt className="w-40 shrink-0 text-sm text-navy-900/50">
                        {spec.label}
                      </dt>
                      <dd className="text-sm text-navy-900/85">{spec.value}</dd>
                    </div>
                )}
                </dl>
              </div>
            }
          </div>
        </div>
      </Section>

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
              Request Product Information
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-navy-900/65">
              Send us the requirement and our supply team will confirm
              manufacturer options, availability and pricing, along with any
              engineering support needed for deployment.
            </p>
          </div>
          <RequirementForm
            variant="product"
            defaultProduct={product.name}
            submitLabel="Request Product Information" />
          
        </div>
      </Section>

      {related.length > 0 &&
      <Section tone="white">
          <h2 className="font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
            Related Products
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) =>
          <ProductCard key={item.slug} product={item} />
          )}
          </div>
        </Section>
      }
    </main>);

}