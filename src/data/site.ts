import { Industry } from '../types/catalogue';

export const BRAND_LINES = ['Global Technology.', 'Trusted Supply.', 'Engineering Excellence.'];

export const trustIndicators = [
'Established 2000',
'17 Global Technology Principals',
'Exclusive Representation — Sri Lanka, Maldives & Nepal',
'Technology & Equipment Supply',
'Engineering Support'];


export const supplySteps = [
{
  number: '01',
  title: 'Requirement',
  description: 'Understand the customer’s technology requirement.'
},
{
  number: '02',
  title: 'Solution Matching',
  description: 'Identify the appropriate technology and manufacturer.'
},
{
  number: '03',
  title: 'Quotation',
  description: 'Prepare the required commercial proposal.'
},
{
  number: '04',
  title: 'Supply',
  description: 'Coordinate equipment sourcing and delivery.'
},
{
  number: '05',
  title: 'Deployment',
  description:
  'Engineering support for installation and commissioning where required.'
},
{
  number: '06',
  title: 'After-Sales Support',
  description: 'Technical assistance and maintenance.'
}];


export const journeyStages = [
{ label: 'Source', detail: 'Global Manufacturer' },
{ label: 'Supply', detail: 'Cybertec Enterprises' },
{ label: 'Deliver', detail: 'Local Customer' },
{ label: 'Deploy', detail: 'Engineering Support' },
{ label: 'Support', detail: 'Technical Services' }];


export const sourcingBenefits = [
{
  title: 'Global Manufacturer Access',
  description:
  'Sourcing routes to established international technology manufacturers.'
},
{
  title: 'Technology Matching',
  description:
  'Specification review to identify technology suited to the requirement.'
},
{
  title: 'Local Supply Coordination',
  description:
  'Ordering, documentation and delivery coordinated against the project programme.'
},
{
  title: 'Engineering Support',
  description:
  'Installation, commissioning and technical support where required.'
}];


export const whyCybertec = [
{
  title: 'Global Technology Access',
  description:
  'Access technology from established international manufacturers.'
},
{
  title: 'Local Market Expertise',
  description: 'A local partner who understands project requirements.'
},
{
  title: 'Technology Matching',
  description:
  'Helping customers identify suitable technology for their requirements.'
},
{
  title: 'Integrated Supply',
  description: 'From product sourcing to delivery.'
},
{
  title: 'Engineering Capability',
  description: 'Technical deployment support when required.'
},
{
  title: 'Long-Term Support',
  description: 'Maintenance and technical assistance.'
}];


export const engineeringServices = [
{
  title: 'System Design',
  description:
  'Translating the supplied technology into a workable site design and bill of materials.'
},
{
  title: 'Installation',
  description:
  'Physical installation of supplied equipment, cabling and infrastructure.'
},
{
  title: 'Commissioning',
  description:
  'Configuration, testing and handover of the delivered technology.'
},
{
  title: 'Maintenance',
  description:
  'Planned and corrective maintenance for deployed infrastructure.'
},
{
  title: 'Technical Support',
  description:
  'Ongoing technical assistance for the supplied technology over its service life.'
},
{
  title: 'Product Training',
  description:
  'Training at factory or customer site by experts from our global principals.'
}];


export const industries: Industry[] = [
{
  slug: 'telecommunications',
  name: 'Telecommunications',
  requirement: 'Access, transport and distribution infrastructure at scale.',
  products: ['Distribution frames', 'Fibre connectivity', 'Transmission equipment'],
  engineering: 'Site installation, commissioning and maintenance.'
},
{
  slug: 'broadcasting',
  name: 'Broadcasting',
  requirement: 'Reliable contribution, transport and transmission chains.',
  products: ['Video / audio transport', 'SDI networking', 'Fibre media transport'],
  engineering: 'Studio and transmitter site deployment support.'
},
{
  slug: 'enterprise',
  name: 'Enterprise & Corporate',
  requirement: 'Resilient office and campus networks with clean cabling.',
  products: ['Core switching', 'Structured cabling', 'Cabinets and patching'],
  engineering: 'Design, installation and certification testing.'
},
{
  slug: 'government',
  name: 'Government & Public Infrastructure',
  requirement: 'Procurement-compliant supply for public sector programmes.',
  products: ['Network infrastructure', 'Connectivity equipment', 'System infrastructure'],
  engineering: 'Structured deployment and documented handover.'
},
{
  slug: 'energy',
  name: 'Energy',
  requirement: 'Communications and monitoring across distributed assets.',
  products: ['Networking equipment', 'Fibre infrastructure', 'Solar technology'],
  engineering: 'Installation and commissioning at operational sites.'
},
{
  slug: 'agriculture',
  name: 'Agriculture',
  requirement: 'Power and water solutions for remote operations.',
  products: ['Solar panels', 'Controllers and inverters', 'Solar pumping systems'],
  engineering: 'Site assessment, installation and maintenance.'
},
{
  slug: 'infrastructure',
  name: 'Infrastructure',
  requirement: 'Long-life passive infrastructure for critical facilities.',
  products: ['Fibre optic solutions', 'Connectivity components', 'Containment'],
  engineering: 'Deployment support and long-term technical services.'
}];


export const contactDetails = {
  company: 'Cybertec Enterprises (Pvt) Ltd',
  established: '2000',
  email: 'crm@cybertecent.com',
  phones: ['+94 11 259 7696', '+94 11 259 8033'],
  website: 'www.cybertecent.com',
  address: 'No 10, St Joseph Place, Mabola, Wattala, Sri Lanka',
  country: 'Sri Lanka',
  markets: 'Sri Lanka, Maldives & Nepal'
};

/** Company facts published on cybertecent.com (About Us). */
export const companyFacts = [
{ value: '2000', label: 'Established' },
{ value: '17', label: 'Global technology principals' },
{ value: '3', label: 'Markets — Sri Lanka, Maldives & Nepal' },
{ value: '70%', label: 'Share of Sri Lanka’s optical fibre cable market' }];


export const teamFacts = [
'Permanent staff strength of 18',
'Over 40 contracted technical staff',
'Equipment supply through principals represented in Sri Lanka, Maldives & Nepal',
'Installation, commissioning and maintenance offered locally'];


/** Value-added services published on the original Services page. */
export const valueAddedServices = [
{
  title: 'Stock Holding',
  description: 'Ex-stock delivery of popular equipment.'
},
{
  title: 'Product Training',
  description:
  'Product training at factory or customer site by experts from our global principals.'
},
{
  title: 'Technology Presentations & Seminars',
  description: 'Cutting-edge technology presentations and seminars for clients.'
},
{
  title: 'Infrastructure Development',
  description:
  'Turnkey infrastructure for telcos and broadcasters, from site development to equipment shelters.'
}];


export const groupCompanies = [
{
  name: 'Cybertec Computers Ltd',
  established: '1995',
  description:
  'Import and assembly of desktop computers marketed under the Cybertec brand, with field networking, repair and maintenance services since 1999. Over 8,800 corporate and residential clients.'
},
{
  name: 'Design Technologies',
  established: '1997',
  description:
  'Industrial electronics R&D company developing operational automation interfaces. Office and production facility in Kalutara.'
},
{
  name: 'Prinrite Ltd',
  established: '1998',
  description: 'Printing and publishing — offset and letterpress. Press and office in Wattala.'
},
{
  name: 'Sypro International (Pvt) Ltd',
  established: '2002',
  description: 'Energy management company in collaboration with SYPRO Australia.'
}];


export const domainTaglines = {
  telecommunication: 'Your Voice, Our Network, Limitless Possibilities.',
  broadcasting: 'Tune In to a World of Endless Possibilities.',
  enterpriseNetworking:
  'Empowering Connections, Elevating Enterprise: Where Networking Meets Innovation.'
};