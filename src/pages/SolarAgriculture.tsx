import React from 'react';
import { DomainPage } from '../components/domain/DomainPage';

export function SolarAgriculture() {
  return (
    <DomainPage
      categoryId="solar-agriculture"
      accent="green"
      eyebrow="Technology Supply · Solar & Agriculture"
      title="Solar Technology for Smarter Agricultural Operations"
      subtitle="Potential product categories and solution areas for solar-powered agricultural operations, supplied through global manufacturer relationships."
      note="Potential product categories only. These are not presented as currently supplied products — availability and manufacturer portfolio will be confirmed before any supply commitment."
      productGroups={[
      {
        heading: 'Potential Product Categories — Generation',
        items: ['Solar panels', 'Mounting and structure components']
      },
      {
        heading: 'Potential Product Categories — Conversion',
        items: ['Solar inverters', 'Solar controllers']
      },
      {
        heading: 'Potential Product Categories — Water',
        items: ['Solar pumping systems', 'Pump controllers']
      },
      {
        heading: 'Potential Product Categories — Energy',
        items: ['Energy management solutions', 'Monitoring elements']
      }]
      }
      applications={{
        heading: 'Solution Areas',
        items: [
        'Solar irrigation',
        'Water pumping',
        'Farm power',
        'Remote agricultural facilities',
        'Agricultural processing']

      }}
      solutions={[]}
      engineering={[
      'Site Assessment',
      'System Design',
      'Installation',
      'Commissioning',
      'Maintenance']
      } />);


}