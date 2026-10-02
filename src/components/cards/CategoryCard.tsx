import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { ProductCategory } from "../../types/catalogue";

interface CategoryCardProps {
  category: ProductCategory;
  to: string;
  size?: "default" | "large";
}

export function CategoryCard({
  category,
  to,
  size = "default",
}: CategoryCardProps) {
  const isLarge = size === "large";

  return (
    <Link
      to={to}
      className="group relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden border border-navy-900/10 bg-navy-900/80"
    >
      <img
        src={category.image}
        alt=""
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover opacity-45 transition-[opacity,transform] duration-300 ease-smooth group-hover:scale-[1.03] group-hover:opacity-60 ${
          category.imagePosition ?? "object-center"
        }`}
      />

      <span className="absolute inset-0 bg-navy-950/55" aria-hidden="true" />

      <div className="relative p-6 sm:p-8">
        <span className="font-display text-[11px] uppercase tracking-[0.24em] text-brand-300">
          {category.number}
        </span>
        <h3
          className={`mt-3 font-display font-semibold leading-tight text-white ${
            isLarge ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {category.title}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">
          {category.description}
        </p>

        {isLarge && (
          <ul className="mt-5 grid gap-1.5 sm:grid-cols-2">
            {category.scope.slice(0, 4).map((item) => (
              <li key={item} className="text-sm text-white/60">
                {item}
              </li>
            ))}
          </ul>
        )}

        <span className="mt-6 flex items-center gap-2 font-display text-sm font-semibold text-white">
          Explore Products
          <ArrowRightIcon
            className="h-4 w-4 transition-transform duration-200 ease-smooth group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
