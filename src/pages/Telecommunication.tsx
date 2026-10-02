import { DomainPage } from '../components/domain/DomainPage';
import { projects } from '../data/projects';
import { domainTaglines } from '../data/site';

export function Telecommunication() {
  return (
    <DomainPage
      categoryId="telecommunication"
      eyebrow="Technology Supply · Telecommunication"
      title="Telecommunication Technology & Infrastructure"
      subtitle="Technology products and infrastructure solutions for modern communication networks."
      productGroups={[
      {
        heading: 'Equipment',
        items: [
        'Telecommunication infrastructure equipment',
        'Distribution frame systems',
        'Site and rack infrastructure']

      },
      {
        heading: 'Connectivity',
        items: [
        'Network connectivity equipment',
        'Copper and fibre patching',
        'Connectors and accessories']

      },
      {
        heading: 'Transmission',
        items: [
        'Transmission equipment',
        'Optical transport platforms',
        'Capacity expansion technology']

      },
      {
        heading: 'Fibre Infrastructure',
        items: [
        'Fibre optic cable and closures',
        'Optical distribution boxes',
        'Termination and testing accessories']

      },
      {
        heading: 'Communication Technology',
        items: [
        'Communication systems',
        'Access network equipment',
        'Network monitoring elements']

      },
      {
        heading: 'Supply Coordination',
        items: [
        'Consolidated bills of materials',
        'Phased delivery to site programmes',
        'Documentation and handover records']

      }]
      }
      solutions={[
      {
        title: 'System Design',
        description:
        'Site and network design translating supplied technology into a build-ready package.'
      },
      {
        title: 'Installation',
        description:
        'Installation of frames, cabling and equipment at exchange and site level.'
      },
      {
        title: 'Commissioning',
        description:
        'Testing, configuration and documented handover of delivered infrastructure.'
      },
      {
        title: 'Maintenance',
        description:
        'Planned and corrective maintenance across deployed telecom infrastructure.'
      }]
      }
      engineering={[
      'System Design',
      'Installation',
      'Commissioning',
      'Maintenance']
      }
      tagline={domainTaglines.telecommunication}
      partnerCategories={['telecommunication', 'infrastructure']}
      featuredProject={projects.find(
        (project) => project.slug === 'airport-aviation-mdf'
      )}
      relatedProjects={projects.
      filter(
        (project) =>
        (project.categoryId === 'telecommunication' ||
        project.slug === 'rda-commscope') &&
        project.slug !== 'airport-aviation-mdf'
      ).
      slice(0, 6)} />);


}