export interface NavChild {
  label: string;
  to: string;
  note?: string;
}

export interface NavItem {
  label: string;
  to: string;
  children?: NavChild[];
  emphasis?: boolean;
}

export const navigation: NavItem[] = [
{ label: 'Home', to: '/' },
{
  label: 'Products',
  to: '/products',
  emphasis: true,
  children: [
  { label: 'All Products', to: '/products', note: 'Full technology catalogue' },
  { label: 'Telecommunication', to: '/telecommunication', note: 'Infrastructure & transmission' },
  { label: 'Broadcasting', to: '/broadcasting', note: 'Media transport & transmission' },
  { label: 'Enterprise Networking', to: '/enterprise-networking', note: 'Core networks & cabling' },
  { label: 'Solar & Agriculture', to: '/solar-agriculture', note: 'Solar technology for farms' },
  { label: 'Other Technology Solutions', to: '/products?category=specialized', note: 'Sourced per requirement' }]

},
{ label: 'Global Partners', to: '/partners', emphasis: true },
{ label: 'Solutions', to: '/solutions' },
{ label: 'Engineering', to: '/engineering-services' },
{ label: 'Projects', to: '/projects' },
{ label: 'Clients', to: '/clients' },
{ label: 'About', to: '/about' },
{ label: 'Contact', to: '/contact' }];


export const mobileNavigation: NavChild[] = [
{ label: 'Home', to: '/' },
{ label: 'Products', to: '/products' },
{ label: 'Telecommunication', to: '/telecommunication' },
{ label: 'Broadcasting', to: '/broadcasting' },
{ label: 'Enterprise Networking', to: '/enterprise-networking' },
{ label: 'Solar & Agriculture', to: '/solar-agriculture' },
{ label: 'Global Partners', to: '/partners' },
{ label: 'Solutions', to: '/solutions' },
{ label: 'Engineering Services', to: '/engineering-services' },
{ label: 'Project Experience', to: '/projects' },
{ label: 'Major Clients', to: '/clients' },
{ label: 'About Us', to: '/about' },
{ label: 'Contact', to: '/contact' }];