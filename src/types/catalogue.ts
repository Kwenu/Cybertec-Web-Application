export type CategoryId =
'telecommunication' |
'broadcasting' |
'enterprise-networking' |
'solar-agriculture' |
'infrastructure' |
'specialized';

export interface ProductCategory {
  id: CategoryId;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  imagePosition?: string;
  scope: string[];
  note?: string;
  accent: 'blue' | 'green';
}

export interface Product {
  slug: string;
  name: string;
  categoryId: CategoryId;
  manufacturer: string;
  description: string;
  application: string;
  image: string;
  overview: string;
  features: string[];
  applications: string[];
  specifications?: {label: string;value: string;}[];
  featured?: boolean;
}

export interface Partner {
  id: string;
  name: string;
  area: string;
  categoryId: CategoryId;
  statement: string;
  portfolio: string[];
  representation?: string;
  featured?: boolean;
}

export interface Project {
  slug: string;
  client: string;
  title: string;
  year: string;
  categoryId: CategoryId;
  scope: string[];
  technology: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  manufacturer?: string;
  recent?: boolean;
  featured?: boolean;
}

export interface Industry {
  slug: string;
  name: string;
  requirement: string;
  products: string[];
  engineering: string;
}