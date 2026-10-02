import { DomainPage } from '../components/domain/DomainPage';
import { projects } from '../data/projects';
import { domainTaglines } from '../data/site';
import { media } from '../data/media';

export function EnterpriseNetworking() {
  return (
    <DomainPage
      categoryId="enterprise-networking"
      eyebrow="Technology Supply · Enterprise Networking"
      title="Enterprise Network Technology & Infrastructure"
      subtitle="Reliable networking technology supplied and supported by experienced engineering professionals."
      productGroups={[
      {
        heading: 'Core Networking',
        items: [
        'Core and distribution switching',
        'Access switching',
        'Network resilience options']

      },
      {
        heading: 'Network Infrastructure',
        items: [
        'Cabinets and racks',
        'Patch panels and patching systems',
        'Containment and cable management']

      },
      {
        heading: 'Fibre Connectivity',
        items: [
        'Building and campus fibre backbone',
        'Fibre patching and termination',
        'Optical modules and jumpers']

      },
      {
        heading: 'Data Networking Equipment',
        items: [
        'Wireless infrastructure',
        'Network management elements',
        'Power and protection accessories']

      },
      {
        heading: 'Network Accessories',
        items: [
        'Copper and fibre patch cords',
        'Labelling and records materials',
        'Spares and replacement stock']

      },
      {
        heading: 'Structured Infrastructure',
        items: [
        'Structured cabling systems',
        'Outlet and floor schedules',
        'Certification test documentation']

      }]
      }
      solutions={[
      {
        title: 'Design',
        description:
        'Network and cabling design produced from the site and outlet requirement.'
      },
      {
        title: 'Installation',
        description:
        'Cabling, cabinet and equipment installation across office clusters.'
      },
      {
        title: 'Commissioning',
        description:
        'Configuration, certification testing and documented handover.'
      },
      {
        title: 'Maintenance',
        description:
        'Ongoing maintenance and technical support for deployed networks.'
      }]
      }
      engineering={['Design', 'Installation', 'Commissioning', 'Maintenance']}
      tagline={domainTaglines.enterpriseNetworking}
      divisionLogo={{
        src: media.enterpriseNetworksLogo,
        alt: 'Cybertec Enterprise Networks'
      }}
      featuredProject={projects.find(
        (project) => project.slug === 'ceb-colombo-city'
      )}
      relatedProjects={projects.filter(
        (project) =>
        project.categoryId === 'enterprise-networking' &&
        project.slug !== 'ceb-colombo-city'
      )} />);


}