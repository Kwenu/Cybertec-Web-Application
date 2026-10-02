import React from 'react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { ActionLink } from '../ui/ActionLink';
import { ProductCard } from '../cards/ProductCard';
import { featuredProducts } from '../../data/products';

export function FeaturedTechnology() {
  return (
    <Section>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          title="Featured Technology"
          subtitle="A selection of solution types supplied through Cybertec's manufacturer network. Manufacturer details are confirmed at quotation." />
        
        <ActionLink to="/products" variant="secondary" withArrow className="shrink-0">
          All Products
        </ActionLink>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProducts.slice(0, 6).map((product) =>
        <ProductCard key={product.slug} product={product} />
        )}
      </div>
    </Section>);

}