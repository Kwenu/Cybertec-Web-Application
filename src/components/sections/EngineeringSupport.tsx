import { asset } from "../../utils/asset";
import { Section } from '../ui/Section';
import { ActionLink } from '../ui/ActionLink';
import { engineeringServices } from '../../data/site';

const IMAGE = asset("WhatsApp_Image_2026-09-10_at_20.34.13.jpg");


export function EngineeringSupport() {
  return (
    <Section tone="light">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="font-display text-[11px] uppercase tracking-[0.22em] text-navy-900/45">
            Supporting capability
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.12] tracking-[-0.01em] text-navy-900 sm:text-4xl">
            Engineering Expertise Behind the Technology
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-900/70">
            Beyond supplying technology, Cybertec provides the engineering
            capability required to install, commission and support critical
            infrastructure.
          </p>
          <div className="mt-8">
            <ActionLink to="/engineering-services" variant="secondary" withArrow>
              Engineering Services
            </ActionLink>
          </div>
          <div className="mt-8 overflow-hidden border border-navy-900/10">
            <img
              src={IMAGE}
              alt="Optical distribution frame and fibre cable drum during Cybertec site works for AASL."
              loading="lazy"
              className="h-72 w-full object-cover object-top" />
            
          </div>
        </div>

        <ul className="grid gap-px border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2">
          {engineeringServices.map((service) =>
          <li key={service.title} className="bg-white p-7">
              <h3 className="font-display text-base font-semibold text-navy-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-900/65">
                {service.description}
              </p>
            </li>
          )}
        </ul>
      </div>
    </Section>);

}