import { Project } from '../types/catalogue';
import { media } from './media';

/**
 * Project experience from Cybertec's published case studies and recent
 * project announcements. `recent` marks the latest announcements.
 */
export const projects: Project[] = [
{
  slug: 'aasl-ip-communication',
  client: 'Airport & Aviation Services Sri Lanka',
  title: 'IP Communication System Upgrade',
  year: 'Recent',
  categoryId: 'enterprise-networking',
  scope: ['Supply', 'Installation', 'Commissioning'],
  technology: 'IP communication system and fibre distribution',
  summary:
  'Cybertec Enterprise Networks completed the IP communication system upgrade for AASL, including optical distribution frame and fibre cabling works on site.',
  image: media.aaslIpCommunication,
  imageAlt: 'Announcement: Cybertec completes IP communication system upgrade for AASL.',
  recent: true,
  featured: true
},
{
  slug: 'ceb-colombo-city',
  client: 'Ceylon Electricity Board',
  title: 'Ethernet Switches & Routers — CEB Colombo City',
  year: 'Recent',
  categoryId: 'enterprise-networking',
  scope: ['Design', 'Supply', 'Training', 'Installation', 'Commissioning'],
  technology: 'Enterprise Ethernet switching and routing',
  summary:
  'Successful completion of the design, supply, training, installation and commissioning of Ethernet switches and routers for the CEB Colombo City office cluster.',
  image: media.cebColomboCity,
  imageAlt: 'Announcement: Cybertec completes Ethernet switches and routers for CEB Colombo City.',
  recent: true,
  featured: true
},
{
  slug: 'kdu-core-upgrade',
  client: 'General Sir John Kotelawala Defence University',
  title: 'Network Core Upgrade — KDU',
  year: 'Recent',
  categoryId: 'enterprise-networking',
  scope: ['Supply', 'Installation', 'Commissioning'],
  technology: 'Campus core network switching',
  summary:
  'Core network upgrade for Kotelawala Defence University, delivered by Cybertec Enterprise Networks.',
  image: media.kduCoreUpgrade,
  imageAlt: 'Announcement: network core upgrade for Kotelawala Defence University.',
  recent: true
},
{
  slug: 'rda-commscope',
  client: 'Road Development Authority',
  title: 'CommScope Fibre Network Accessories',
  year: 'Recent',
  categoryId: 'infrastructure',
  scope: ['Supply'],
  technology: 'Fibre network accessories',
  manufacturer: 'CommScope',
  summary:
  'Cybertec is supplying CommScope fibre network accessories to the Road Development Authority.',
  image: media.commscopeRda,
  imageAlt: 'Announcement: Cybertec supplying CommScope fibre network accessories to the Road Development Authority.',
  recent: true,
  featured: true
},
{
  slug: 'slt-fibre-accessories',
  client: 'Sri Lanka Telecom',
  title: 'Fibre Optic Accessories — One-Year Supply Contract',
  year: 'Recent',
  categoryId: 'telecommunication',
  scope: ['Supply'],
  technology: 'Fibre optic accessories',
  summary:
  'Sri Lanka Telecom (SLT-Mobitel) contracted Cybertec for the supply of fibre optic accessories over a one-year period.',
  image: media.sltFibreAccessories,
  imageAlt: 'Announcement: Sri Lanka Telecom contracts Cybertec for supply of fibre optic accessories.',
  recent: true
},
{
  slug: 'slrc-compression',
  client: 'Sri Lanka Rupavahini Corporation',
  title: 'Content Compression & Distribution Project',
  year: 'Recent',
  categoryId: 'broadcasting',
  scope: ['Supply', 'Installation', 'Commissioning'],
  technology: 'Video compression and distribution',
  manufacturer: 'Harmonic',
  summary:
  'Cybertec successfully completed the content compression and distribution project for SLRC, based on Harmonic video processing equipment.',
  image: media.slrcCompression,
  imageAlt: 'Announcement: Cybertec completes content compression and distribution project for SLRC.',
  recent: true,
  featured: true
},
{
  slug: 'gatesair-vhf',
  client: 'Sri Lanka Rupavahini Corporation',
  title: 'VHF TV Transmitters — Supply & Training',
  year: 'Recent',
  categoryId: 'broadcasting',
  scope: ['Supply', 'Training'],
  technology: 'VHF television transmitters',
  manufacturer: 'GatesAir',
  summary:
  'Cybertec to supply and provide training for GatesAir VHF TV transmitters to the national broadcaster.',
  image: media.gatesairTransmitters,
  imageAlt: 'Announcement: Cybertec to supply and provide training for GatesAir VHF TV transmitters to Rupavahini.',
  recent: true
},
{
  slug: 'mattala-high-mast',
  client: 'Mattala Rajapaksa International Airport',
  title: 'High Mast Systems Upgrade',
  year: 'Contract secured',
  categoryId: 'infrastructure',
  scope: ['Supply', 'Upgrade'],
  technology: 'Airport apron high mast systems',
  summary:
  'Cybertec secured the contract to upgrade the high mast systems at Mattala Rajapaksa International Airport.',
  image: media.mattalaHighMast,
  imageAlt: 'Announcement: Cybertec secures contract to upgrade high mast systems at Mattala Rajapaksa International Airport.',
  recent: true
},
{
  slug: 'load-bank-testers',
  client: 'Government Sector',
  title: 'Mobile 624 kVA Load Bank Testers',
  year: 'Agreement signed',
  categoryId: 'specialized',
  scope: ['Supply', 'Installation', 'Commissioning'],
  technology: 'Mobile 624 kVA load bank testing',
  summary:
  'Agreement signed to supply, install and commission mobile 624 kVA load bank testers for the government sector.',
  image: media.loadBankTesters,
  imageAlt: 'Announcement: Cybertec signs agreement to supply, install and commission mobile 624 kVA load bank testers.',
  recent: true
},
{
  slug: 'airport-aviation-mdf',
  client: 'Airport & Aviation Services Sri Lanka',
  title: 'Turnkey MDF Solution — KIA Expansion',
  year: 'December 2008',
  categoryId: 'telecommunication',
  scope: ['Design', 'Supply', 'Installation'],
  technology: 'KRONE main distribution frame',
  manufacturer: 'KRONE',
  summary:
  'Design, supply and installation of a turnkey MDF solution for the Katunayake International Airport expansion project at the AASL communications complex, based on KRONE equipment.',
  image: media.aaslFibreSite,
  imageAlt: 'Optical distribution frame and fibre cable drum on site at an AASL facility.'
},
{
  slug: 'maldives-nic',
  client: 'Finance Ministry of Maldives',
  title: 'National Identity Card Project',
  year: 'Five-year contract',
  categoryId: 'infrastructure',
  scope: ['Supply', 'Implementation', 'Maintenance'],
  technology: 'Smart-chip identity cards with holographic overlay',
  summary:
  'A five-year contract under which Cybertec implements, maintains and supplies all equipment and consumables for the Maldives National Identity Card, featuring smart chip and holographic overlay.'
},
{
  slug: 'slt-ngn-iii',
  client: 'Sri Lanka Telecom',
  title: 'MDF Solutions — NGN Phase III B & III C',
  year: 'January 2011',
  categoryId: 'telecommunication',
  scope: ['Supply', 'Implementation'],
  technology: 'Main distribution frame systems',
  summary:
  'Sri Lanka Telecom awarded Cybertec the supply of MDF solutions for its flagship NGN Phase III B & III C programme.'
},
{
  slug: 'slt-ngn-ii',
  client: 'Sri Lanka Telecom',
  title: 'NGN Network Phase II',
  year: 'May 2009',
  categoryId: 'telecommunication',
  scope: ['Supply', 'Installation'],
  technology: 'Next generation network distribution',
  summary:
  'Supply for Sri Lanka Telecom’s NGN Network Phase II, alongside the Southern NGN project main distribution arrangement.'
},
{
  slug: 'lanka-bell-base-stations',
  client: 'Lanka Bell',
  title: 'Turnkey Base Station Sites',
  year: 'Tele-Infrastructure Division',
  categoryId: 'telecommunication',
  scope: ['Design', 'Supply', 'Installation'],
  technology: '70 m and 50 m tower sites and equipment shelters',
  summary:
  '28 stand-alone base station sites completed, covering design, manufacture, supply, tower foundation, erection and site development — plus a turnkey contract for 20 equipment shelters.'
},
{
  slug: 'lanka-bell-dsx',
  client: 'Lanka Bell',
  title: 'Digital Signal Cross Connect Project',
  year: 'Transmission backhaul',
  categoryId: 'telecommunication',
  scope: ['Supply', 'Installation'],
  technology: 'ADC DSX-1 digital signal cross-connect',
  manufacturer: 'ADC KRONE',
  summary:
  'ADC DSX-1 digital signal cross-connect/interconnect arrangements for testing, jumpering and real-time monitoring of Lanka Bell’s radio transmission backhaul hub.'
},
{
  slug: 'mbc-fibre-transport',
  client: 'MBC Network Sri Lanka',
  title: 'Digital Video / Audio Transport over Fibre Optics',
  year: 'With Sri Lanka Telecom',
  categoryId: 'broadcasting',
  scope: ['Supply', 'Installation', 'Commissioning'],
  technology: 'Broadcast-quality digital video and audio over fibre',
  summary:
  'Delivered with SLT: broadcast-quality digital audio and video transport over optical fibre, interconnecting MTV/MBC studios, transmission stations and head office.'
},
{
  slug: 'sdi-south-asian-games',
  client: 'Sri Lanka Rupavahini Corporation',
  title: 'SDI Video Network — 10th South Asian Games',
  year: 'With Sri Lanka Telecom',
  categoryId: 'broadcasting',
  scope: ['Supply', 'Installation', 'Commissioning'],
  technology: 'Fibre-based SDI digital video transmission',
  summary:
  'The first live telecast by a Sri Lankan TV station over a fibre optic link — SDI digital video from the games venue to SLRC studios.'
}];


export const recentProjects = projects.filter((project) => project.recent);
export const projectHistory = projects.filter((project) => !project.recent);
export const featuredProjects = projects.filter((project) => project.featured);

export const clients: string[] = [
'Airport & Aviation Services Sri Lanka',
'Sri Lanka Telecom (SLT-Mobitel)',
'Sri Lanka Rupavahini Corporation',
'Ceylon Electricity Board',
'Road Development Authority',
'General Sir John Kotelawala Defence University',
'Mattala Rajapaksa International Airport',
'Lanka Bell',
'MBC Network Sri Lanka',
'Finance Ministry of Maldives'];


export const clientMatchers: Record<string, string[]> = {
  'Sri Lanka Telecom (SLT-Mobitel)': ['Sri Lanka Telecom']
};