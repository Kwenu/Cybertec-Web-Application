import { Partner } from '../types/catalogue';

/**
 * Principals as published on cybertecent.com (Our Partners), plus Harmonic and
 * GatesAir, confirmed through Cybertec's own project announcements.
 */
export const partners: Partner[] = [
{
  id: 'krone',
  name: 'KRONE',
  area: 'Copper & Fibre Connectivity',
  categoryId: 'telecommunication',
  statement:
  'Global leader in copper/fibre network connectivity and wireless technologies.',
  portfolio: [
  'Main distribution frame (MDF) systems',
  'Copper and fibre connectivity',
  'DSX digital signal cross-connect'],

  representation: 'Exclusive — Sri Lanka, Maldives & Nepal',
  featured: true
},
{
  id: 'sterlite',
  name: 'Sterlite Optical Technologies',
  area: 'Optical Fibre Cable',
  categoryId: 'infrastructure',
  statement:
  'The largest cable manufacturer in South Asia. Cybertec holds a 70% share of Sri Lanka’s optical fibre cable market, and supplied SLT’s national fibre ring and sub-rings.',
  portfolio: [
  'Optical fibre cable',
  'National backbone fibre rings',
  'Access and distribution cable'],

  representation: 'Exclusive — Sri Lanka',
  featured: true
},
{
  id: 'scientific-atlanta',
  name: 'Scientific Atlanta',
  area: 'Video & Broadcasting',
  categoryId: 'broadcasting',
  statement:
  'A Cisco company and global leader in video and broadcasting technology.',
  portfolio: [
  'Video headend systems',
  'Broadcast video processing',
  'Digital video distribution'],

  representation: 'Exclusive (Cisco BV) — Sri Lanka, Maldives & Nepal',
  featured: true
},
{
  id: 'huawei',
  name: 'Huawei',
  area: 'Enterprise & Carrier Networking',
  categoryId: 'enterprise-networking',
  statement: 'Cybertec is a listed system integrator for Huawei in Sri Lanka.',
  portfolio: ['Enterprise networking', 'Carrier network equipment', 'System integration'],
  representation: 'Listed System Integrator — Sri Lanka'
},
{
  id: 'cisco',
  name: 'Cisco',
  area: 'Networking & Security',
  categoryId: 'enterprise-networking',
  statement:
  'A worldwide technology leader across networking, security and computing.',
  portfolio: ['Switching and routing', 'Network security', 'Computing']
},
{
  id: 'commscope',
  name: 'CommScope',
  area: 'Network Connectivity',
  categoryId: 'infrastructure',
  statement:
  'Connectivity solutions used by network operators worldwide — supplied by Cybertec to the Road Development Authority.',
  portfolio: ['Fibre network accessories', 'Fibre connectivity', 'Structured infrastructure']
},
{
  id: 'te-connectivity',
  name: 'TE Connectivity',
  area: 'Telecom Network Products',
  categoryId: 'telecommunication',
  statement:
  'A comprehensive range of telecommunication products that seal, connect and protect telecom networks.',
  portfolio: ['Sealing and closures', 'Connectivity products', 'Network protection']
},
{
  id: 'lg-ericsson',
  name: 'LG-Ericsson',
  area: 'Access Networks',
  categoryId: 'telecommunication',
  statement:
  'Network convergence technology for access network applications and solutions.',
  portfolio: ['Access network equipment', 'Convergence solutions']
},
{
  id: 'sankosha',
  name: 'Sankosha — Japan',
  area: 'Lightning & Surge Protection',
  categoryId: 'telecommunication',
  statement:
  'Protecting electric power, telecommunication and railway networks from lightning and other natural hazards.',
  portfolio: ['Surge protection', 'Lightning protection', 'Network protection devices']
},
{
  id: 'harmonic',
  name: 'Harmonic',
  area: 'Video Compression & Delivery',
  categoryId: 'broadcasting',
  statement:
  'Video compression and distribution technology — deployed by Cybertec for SLRC’s content compression and distribution project.',
  portfolio: ['Video encoders', 'Content compression', 'Distribution platforms']
},
{
  id: 'gatesair',
  name: 'GatesAir',
  area: 'TV & Radio Transmission',
  categoryId: 'broadcasting',
  statement:
  'Broadcast transmitters — Cybertec supplies and provides training for VHF TV transmitters to the national broadcaster.',
  portfolio: ['VHF TV transmitters', 'Transmission systems', 'Factory-level training']
},
{
  id: 'imagine',
  name: 'Imagine Communications',
  area: 'Television Technology',
  categoryId: 'broadcasting',
  statement:
  'Strategies and tools for broadcasters keeping pace with a rapidly evolving television industry.',
  portfolio: ['Playout and delivery', 'Broadcast infrastructure']
},
{
  id: 'ateme',
  name: 'ATEME',
  area: 'Video Delivery',
  categoryId: 'broadcasting',
  statement: 'Fully integrated solutions for video delivery.',
  portfolio: ['Video compression', 'Video delivery platforms']
},
{
  id: 'synamedia',
  name: 'Synamedia',
  area: 'Video Software',
  categoryId: 'broadcasting',
  statement: 'Service provider video software solutions (SPVSS).',
  portfolio: ['Video software', 'Service provider platforms']
},
{
  id: 'cyberlink',
  name: 'CyberLink',
  area: 'Passive Optical Networks',
  categoryId: 'infrastructure',
  statement: 'Passive optical network (PON) accessories.',
  portfolio: ['PON accessories', 'FTTH components']
},
{
  id: 'fujikura',
  name: 'Fujikura / Grandway',
  area: 'FTTH & Fibre Testing',
  categoryId: 'infrastructure',
  statement: 'FTTH last-mile network, testing and solutions.',
  portfolio: ['FTTH solutions', 'Fibre testing']
},
{
  id: 'shinewaytech',
  name: 'ShinewayTech',
  area: 'Test & Measurement',
  categoryId: 'specialized',
  statement:
  'Fibre optic test equipment, expanding into RF and IP testing.',
  portfolio: ['Fibre optic testers', 'RF testing', 'IP testing']
}];


export const featuredPartners = partners.filter((partner) => partner.featured);