import { asset } from "../utils/asset";
import { ProductCategory } from '../types/catalogue';

export const categories: ProductCategory[] = [
{
  id: 'telecommunication',
  number: '01',
  title: 'Telecommunication',
  shortTitle: 'Telecommunication',
  description:
  'Distribution frames, connectivity, access and protection technology from KRONE, TE Connectivity, LG-Ericsson and Sankosha.',
  image: asset("3375e836-9ae9-459c-913c-8bb2301ba363.jpg"),

  scope: [
  'Telecommunication infrastructure equipment',
  'Network connectivity equipment',
  'Fibre optic infrastructure',
  'Transmission equipment',
  'Communication systems'],

  accent: 'blue'
},
{
  id: 'broadcasting',
  number: '02',
  title: 'Broadcasting',
  shortTitle: 'Broadcasting',
  description:
  'Compression, transport and transmission technology from Harmonic, GatesAir, Scientific Atlanta, ATEME and more.',
  image: asset("2275d752-b30e-4ec8-bb13-9efdc692bf8b.jpg"),

  scope: [
  'Broadcast infrastructure',
  'Digital video systems',
  'Digital audio systems',
  'Transmission systems',
  'Broadcast networking',
  'Fibre-based media transport'],

  accent: 'blue'
},
{
  id: 'enterprise-networking',
  number: '03',
  title: 'Enterprise Networking',
  shortTitle: 'Enterprise Networking',
  description:
  'Switching, routing and IP communication systems from Cisco and Huawei for utility, government and campus networks.',
  image: asset("8126f08d-b35f-4e6d-b78c-6ea7d945246b.jpg"),

  scope: [
  'Core networking',
  'Network infrastructure',
  'Fibre connectivity',
  'Data networking equipment',
  'Network accessories',
  'Structured infrastructure'],

  accent: 'blue'
},
{
  id: 'solar-agriculture',
  number: '04',
  title: 'Solar & Agricultural Technology',
  shortTitle: 'Solar & Agriculture',
  description:
  'Potential product categories and solution areas for solar-powered agricultural operations.',
  image: asset("283d1c79-7202-468a-9033-b197f0f5b2e8.jpg"),

  scope: [
  'Solar panels',
  'Solar controllers',
  'Solar inverters',
  'Solar pumping systems',
  'Agricultural energy solutions'],

  note:
  'Product availability and manufacturer portfolio may vary by project requirement.',
  accent: 'green'
},
{
  id: 'infrastructure',
  number: '05',
  title: 'Infrastructure & Connectivity',
  shortTitle: 'Infrastructure',
  description:
  'Optical fibre cable, fibre accessories and passive infrastructure — including Sterlite, CommScope and CyberLink.',
  image: asset("WhatsApp_Image_2026-09-10_at_20.34.13.jpg"),

  imagePosition: 'object-top',
  scope: [
  'Optical fibre cable',
  'Fibre optic solutions',
  'Network infrastructure',
  'Connectivity equipment',
  'Technical infrastructure components'],

  accent: 'blue'
},
{
  id: 'specialized',
  number: '06',
  title: 'Specialized Technology',
  shortTitle: 'Specialized Solutions',
  description:
  'Test and measurement, power-system testing and project-specific technology sourced on request.',
  image: asset("1d2bc14a-94da-444d-8035-8c4e550e2b15.jpg"),

  scope: [
  'Project-specific technology sourcing',
  'Emerging technology lines',
  'Specialised systems and modules'],

  note:
  'Categories are extended as manufacturer portfolios are confirmed.',
  accent: 'blue'
}];


export const categoryById = (id: string): ProductCategory | undefined =>
categories.find((category) => category.id === id);