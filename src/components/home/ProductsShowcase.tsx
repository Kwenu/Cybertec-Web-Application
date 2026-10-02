import React from "react";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { ActionLink } from "../ui/ActionLink";
import { CategoryCard } from "../cards/CategoryCard";
import { categories } from "../../data/categories";

const categoryRoutes: Record<string, string> = {
  telecommunication: "/telecommunication",
  broadcasting: "/broadcasting",
  "enterprise-networking": "/enterprise-networking",
  "solar-agriculture": "/solar-agriculture",
  infrastructure: "/products?category=infrastructure",
  specialized: "/products?category=specialized",
};

export function ProductsShowcase() {
  const [lead, ...others] = categories;

  return (
    <Section tone="light">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          title="Technology Products for Critical Infrastructure"
          subtitle="Source the technology your organisation needs through a trusted local technology partner."
        />

        <ActionLink to="/products" withArrow className="shrink-0">
          View Full Catalogue
        </ActionLink>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 lg:row-span-2">
          <CategoryCard
            category={lead}
            to={categoryRoutes[lead.id]}
            size="large"
          />
        </div>
        {others.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            to={categoryRoutes[category.id]}
          />
        ))}
      </div>

      <p className="mt-6 text-xs text-navy-900/50">
        Product availability and manufacturer portfolio may vary by project
        requirement.
      </p>
    </Section>
  );
}
