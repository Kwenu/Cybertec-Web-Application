import { asset } from "../../utils/asset";
import { motion, useReducedMotion } from 'framer-motion';
import { ActionLink } from '../ui/ActionLink';
import { trustIndicators } from '../../data/site';

const HERO_IMAGE = asset("2de9d861-7ec9-4f4a-8968-1b531e44772a.jpg");

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
  reduce ?
  {} :
  {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] as const, delay }
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-550">
        <img
          src={HERO_IMAGE}
          alt="Boxed and crated technology equipment staged beside rows of network racks in a distribution facility, with a container port visible beyond the glass wall."
          className="absolute inset-0 h-full w-full object-cover" />
        
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-navy-950/55" />
        

        <div className="relative mx-auto max-w-content px-6 py-24 lg:py-21">
          <div className="max-w-2xl">
            <motion.p
              {...fade(0)}
              className="font-display text-[11px] uppercase tracking-[0.24em] text-brand-100">
              
              Technology &amp; Equipment Supply · Manufacturer Representation
            </motion.p>

            <motion.h1
              {...fade(0.05)}
              className="mt-6 font-display text-4xl font-semibold leading-[1.06] tracking-[-0.02em] text-white sm:text-5xl lg:text-[62px]">
              
              Global Technology.
              <br />
              Supplied with Confidence.
            </motion.h1>

            <motion.p
              {...fade(0.1)}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              
              Connecting organisations with world-class technology manufacturers
              and dependable local engineering expertise.
            </motion.p>

            <motion.p
              {...fade(0.14)}
              className="mt-4 max-w-xl text-sm leading-relaxed text-white/90">
              
              Cybertec Enterprises supplies technology and infrastructure
              solutions from global manufacturers across telecommunications,
              broadcasting, enterprise networking and emerging energy
              applications.
            </motion.p>

            <motion.div {...fade(0.18)} className="mt-9 flex flex-wrap gap-3">
              <ActionLink to="/products" withArrow>
                Explore Products
              </ActionLink>
              <ActionLink to="/partners" variant="onDark">
                Meet Our Global Partners
              </ActionLink>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="border-b border-navy-900/10 bg-navy-900">
        <ul className="mx-auto flex max-w-content flex-wrap items-center gap-x-8 gap-y-3 px-6 py-4">
          {trustIndicators.map((item) =>
          <li
            key={item}
            className="font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
            
              {item}
            </li>
          )}
        </ul>
      </div>
    </>);
}