import { asset } from "../utils/asset";
import { Product } from '../types/catalogue';

const GENERIC = asset("e90a25e8-7051-4928-91d1-27171bb8fcd8.jpg");

const TELECOM = asset("3375e836-9ae9-459c-913c-8bb2301ba363.jpg");

const BROADCAST = asset("2275d752-b30e-4ec8-bb13-9efdc692bf8b.jpg");

const NETWORK = asset("8126f08d-b35f-4e6d-b78c-6ea7d945246b.jpg");

const SOLAR = asset("283d1c79-7202-468a-9033-b197f0f5b2e8.jpg");

const INFRA = asset("83d2479a-ffdc-43f9-9bd8-6df71e357106.jpg");

const SPECIAL = asset("1d2bc14a-94da-444d-8035-8c4e550e2b15.jpg");


/**
 * Solution types mapped to Cybertec's published principals. No model numbers
 * are asserted — exact models are confirmed at quotation.
 */
export const products: Product[] = [
{
  slug: 'optical-fibre-cable',
  name: 'Optical Fibre Cable',
  categoryId: 'infrastructure',
  manufacturer: 'Sterlite Optical Technologies',
  description:
  'Backbone, distribution and access fibre cable — the cable behind SLT’s national fibre ring and sub-rings.',
  application: 'Backbone & Access Networks',
  image: INFRA,
  overview:
  'Cybertec represents Sterlite Optical Technologies exclusively in Sri Lanka and holds a 70% share of the local optical fibre cable market. Sri Lanka Telecom’s fibre optic ring and sub-rings were supplied by Cybertec.',
  features: [
  'Exclusive Sri Lankan representation',
  'Backbone, duct, aerial and access constructions',
  'Proven on national operator networks',
  'Installation and testing support available'],

  applications: [
  'National and regional fibre rings',
  'FTTH and access networks',
  'Enterprise and campus backbones'],

  featured: true
},
{
  slug: 'main-distribution-frame-solution',
  name: 'Main Distribution Frame (MDF) Solution',
  categoryId: 'telecommunication',
  manufacturer: 'KRONE',
  description:
  'Copper distribution frame systems for exchange, campus and turnkey MDF requirements.',
  application: 'Exchange & Access Infrastructure',
  image: TELECOM,
  overview:
  'Cybertec represents ADC KRONE exclusively in Sri Lanka, Maldives and Nepal. KRONE MDF solutions have been delivered for Sri Lanka Telecom’s NGN programmes and the Katunayake International Airport expansion.',
  features: [
  'Exclusive representation — Sri Lanka, Maldives & Nepal',
  'Frame sizing to current and forecast line counts',
  'Protection modules and structured labelling',
  'Turnkey design, supply and installation'],

  applications: [
  'Telephone exchanges and NGN sites',
  'Airport and large campus distribution rooms',
  'Access network aggregation points'],

  featured: true
},
{
  slug: 'fibre-network-accessories',
  name: 'Fibre Network Accessories',
  categoryId: 'infrastructure',
  manufacturer: 'CommScope · TE Connectivity · CyberLink',
  description:
  'Closures, distribution boxes, patch panels, pigtails and PON accessories for fibre builds.',
  application: 'Passive Fibre Infrastructure',
  image: INFRA,
  overview:
  'Complete passive component sets for fibre networks, consolidated into a single supply schedule. Currently supplied to the Road Development Authority (CommScope) and to Sri Lanka Telecom under a one-year fibre accessories contract.',
  features: [
  'Sealing, connecting and protecting components',
  'Indoor, outdoor and aerial variants',
  'PON / FTTH accessories',
  'Delivery coordinated to installation programme'],

  applications: [
  'Operator fibre rollouts',
  'Highway and road infrastructure networks',
  'FTTH last-mile networks'],

  featured: true
},
{
  slug: 'digital-signal-cross-connect',
  name: 'Digital Signal Cross-Connect (DSX)',
  categoryId: 'telecommunication',
  manufacturer: 'ADC KRONE',
  description:
  'Cross-connect and interconnect arrangements for testing, jumpering and monitoring transmission networks.',
  application: 'Transmission Backhaul',
  image: GENERIC,
  overview:
  'DSX-1 digital signal cross-connect arrangements, as deployed at Lanka Bell’s radio transmission backhaul hub for testing, jumpering and real-time monitoring.',
  features: [
  'Test, jumper and monitor access points',
  'Rack-mounted modular panels',
  'Installation and commissioning support'],

  applications: ['Transmission hubs', 'Operator backhaul networks']
},
{
  slug: 'surge-lightning-protection',
  name: 'Lightning & Surge Protection',
  categoryId: 'telecommunication',
  manufacturer: 'Sankosha — Japan',
  description:
  'Protection devices for power, telecommunication and railway networks.',
  application: 'Network Protection',
  image: GENERIC,
  overview:
  'Sankosha’s protection technology safeguards critical infrastructure — electric power, telecommunication and railway networks — against lightning and other natural hazards.',
  features: [
  'Telecom line and equipment protection',
  'Power and signal surge protection',
  'Site-specific selection'],

  applications: ['Exchanges and base stations', 'Transmission sites', 'Railway signalling']
},
{
  slug: 'video-compression-distribution',
  name: 'Video Compression & Distribution',
  categoryId: 'broadcasting',
  manufacturer: 'Harmonic · ATEME · Synamedia',
  description:
  'Encoding, compression and distribution platforms for broadcast and service-provider video.',
  application: 'Broadcast Headend',
  image: BROADCAST,
  overview:
  'Video compression and distribution technology from Cybertec’s broadcast principals. Cybertec completed SLRC’s content compression and distribution project on Harmonic equipment.',
  features: [
  'Broadcast-grade encoding and compression',
  'Distribution to terrestrial, satellite and IP',
  'Deployment and commissioning support'],

  applications: ['National broadcasters', 'Service-provider video platforms', 'Contribution networks'],
  featured: true
},
{
  slug: 'vhf-tv-transmitters',
  name: 'VHF TV Transmitters',
  categoryId: 'broadcasting',
  manufacturer: 'GatesAir',
  description:
  'Television transmitters supplied with operator training for national broadcast networks.',
  application: 'Terrestrial Transmission',
  image: GENERIC,
  overview:
  'GatesAir VHF TV transmitters, supplied by Cybertec to the national broadcaster together with product training.',
  features: [
  'Supply with product training',
  'Transmitter site integration',
  'Maintenance support available'],

  applications: ['Transmitter sites', 'Regional relay infrastructure']
},
{
  slug: 'digital-video-audio-transport-system',
  name: 'Digital Video / Audio Transport System',
  categoryId: 'broadcasting',
  manufacturer: 'Scientific Atlanta (Cisco BV)',
  description:
  'Fibre-based transport of digital video and audio between studio, contribution and transmission sites.',
  application: 'Broadcast Contribution',
  image: BROADCAST,
  overview:
  'Cybertec represents Cisco BV (Scientific Atlanta) exclusively in Sri Lanka, Maldives and Nepal. Fibre video/audio transport has been delivered for MBC Network and for the SDI network used in the 10th South Asian Games.',
  features: [
  'Broadcast-quality digital transport over fibre',
  'No digital-to-analogue conversion in the path',
  'Redundant path options'],

  applications: ['Studio to transmitter links', 'Live event contribution', 'Multi-site broadcast networks']
},
{
  slug: 'core-network-switching-platform',
  name: 'Ethernet Switching & Routing',
  categoryId: 'enterprise-networking',
  manufacturer: 'Cisco · Huawei',
  description:
  'Core, distribution and access switching plus routing for enterprise and government networks.',
  application: 'Enterprise Core Network',
  image: NETWORK,
  overview:
  'Switching and routing platforms sized to port count, throughput and resilience. Recent deployments include CEB Colombo City and the KDU core upgrade. Cybertec is a listed Huawei system integrator in Sri Lanka.',
  features: [
  'Resilient core and distribution topologies',
  'Design, supply, training and commissioning',
  'Listed Huawei system integrator'],

  applications: [
  'Utility and corporate office clusters',
  'University campus networks',
  'Government networks'],

  featured: true
},
{
  slug: 'ip-communication-systems',
  name: 'IP Communication Systems',
  categoryId: 'enterprise-networking',
  manufacturer: 'Confirmed per project',
  description:
  'IP-based communication systems with the fibre and structured infrastructure to support them.',
  application: 'Enterprise Communications',
  image: NETWORK,
  overview:
  'IP communication platforms delivered with optical distribution, cabling and commissioning — as completed for the AASL IP communication system upgrade.',
  features: [
  'IP communication platform supply',
  'Optical distribution frames and fibre cabling',
  'Commissioning and handover'],

  applications: ['Airports and aviation facilities', 'Large campuses', 'Government facilities']
},
{
  slug: 'fibre-optic-test-equipment',
  name: 'Fibre Optic Test Equipment',
  categoryId: 'specialized',
  manufacturer: 'ShinewayTech · Grandway',
  description:
  'Fibre optic testers, with RF and IP test capability for network build and maintenance teams.',
  application: 'Test & Measurement',
  image: SPECIAL,
  overview:
  'Test instruments for fibre network construction and maintenance, including FTTH last-mile testing.',
  features: ['Fibre optic testers', 'RF and IP testing options', 'Product training available'],
  applications: ['Operator maintenance teams', 'Fibre installation contractors'],
  featured: true
},
{
  slug: 'mobile-load-bank-tester',
  name: 'Mobile Load Bank Tester (624 kVA)',
  categoryId: 'specialized',
  manufacturer: 'Confirmed per project',
  description:
  'Trailer-mounted load bank testing for generators and power systems, supplied with installation and commissioning.',
  application: 'Power System Testing',
  image: SPECIAL,
  overview:
  'High-performance mobile 624 kVA load bank testers for on-site testing of standby power systems — currently being supplied, installed and commissioned for the government sector.',
  features: [
  '624 kVA on-site testing capacity',
  'Trailer-mounted for multi-site use',
  'Supply, installation and commissioning'],

  applications: ['Government facilities', 'Standby generator testing', 'Critical power sites']
},
{
  slug: 'solar-pumping-system',
  name: 'Solar Pumping System',
  categoryId: 'solar-agriculture',
  manufacturer: 'Manufacturer portfolio being finalised',
  description:
  'Solution area: solar-powered water pumping for irrigation and remote agricultural sites.',
  application: 'Solar Irrigation',
  image: SOLAR,
  overview:
  'A solution area under development. Panel, controller and pump sizing would be established from water requirement, head and site irradiation data before any supply commitment is made.',
  features: [
  'Sizing from water demand and site conditions',
  'Controller and inverter options',
  'Site assessment before specification'],

  applications: ['Irrigation schemes', 'Livestock and farm water supply', 'Remote agricultural facilities']
},
{
  slug: 'solar-power-generation-package',
  name: 'Solar Power Generation Package',
  categoryId: 'solar-agriculture',
  manufacturer: 'Manufacturer portfolio being finalised',
  description: 'Solution area: panels, inverters and controllers for farm and facility power.',
  application: 'Farm Power',
  image: SOLAR,
  overview:
  'A potential product category covering generation and conversion equipment for agricultural facilities. Availability is subject to confirmed manufacturer arrangements.',
  features: ['Panel, inverter and controller selection', 'Load profile based sizing', 'Energy management options'],
  applications: ['Agricultural processing facilities', 'Off-grid and weak-grid farm sites']
}];


export const productBySlug = (slug: string): Product | undefined =>
products.find((product) => product.slug === slug);

export const featuredProducts = products.filter((product) => product.featured);