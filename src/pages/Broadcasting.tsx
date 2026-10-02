import { DomainPage } from '../components/domain/DomainPage';
import { projects } from '../data/projects';
import { domainTaglines } from '../data/site';

export function Broadcasting() {
  return (
    <DomainPage
      categoryId="broadcasting"
      eyebrow="Technology Supply · Broadcasting"
      title="Broadcast Technology & Transmission Solutions"
      subtitle="Technology solutions for reliable broadcast, transmission and digital media infrastructure."
      productGroups={[
      {
        heading: 'Broadcast Infrastructure',
        items: [
        'Broadcast infrastructure equipment',
        'Racks, patching and distribution',
        'Signal monitoring elements']

      },
      {
        heading: 'Digital Video',
        items: [
        'Digital video systems',
        'SDI routing and distribution',
        'Conversion and processing elements']

      },
      {
        heading: 'Digital Audio',
        items: [
        'Digital audio systems',
        'Audio distribution and embedding',
        'Studio interconnection']

      },
      {
        heading: 'Transmission',
        items: [
        'Transmission systems',
        'Studio to transmitter links',
        'Redundant path options']

      },
      {
        heading: 'Broadcast Networking',
        items: [
        'Broadcast networking equipment',
        'Media over IP infrastructure',
        'Network timing and control']

      },
      {
        heading: 'Fibre Media Transport',
        items: [
        'Fibre-based media transport',
        'Digital video / audio transport over fibre',
        'Long-haul contribution links']

      }]
      }
      solutions={[
      {
        title: 'System Design',
        description:
        'Signal path and infrastructure design for studio and transmission facilities.'
      },
      {
        title: 'Installation',
        description:
        'Rack build, cabling and equipment installation at studio and transmitter sites.'
      },
      {
        title: 'Commissioning',
        description:
        'Signal testing, configuration and on-air readiness verification.'
      },
      {
        title: 'Maintenance',
        description:
        'Technical support and maintenance for broadcast infrastructure.'
      }]
      }
      engineering={[
      'System Design',
      'Installation',
      'Commissioning',
      'Technical Support']
      }
      tagline={domainTaglines.broadcasting}
      featuredProject={projects.find(
        (project) => project.slug === 'slrc-compression'
      )}
      relatedProjects={projects.filter(
        (project) =>
        project.categoryId === 'broadcasting' &&
        project.slug !== 'slrc-compression'
      )} />);


}