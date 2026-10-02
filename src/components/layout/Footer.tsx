import { asset } from "../../utils/asset";
import { Link } from "react-router-dom";
import { MailIcon, GlobeIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { categories } from "../../data/categories";
import { contactDetails } from "../../data/site";
import { Logo } from "./Logo";

const company = [
  { label: "About Us", to: "/about" },
  { label: "Global Partners", to: "/partners" },
  { label: "Solutions", to: "/solutions" },
  { label: "Engineering Services", to: "/engineering-services" },
  { label: "Project Experience", to: "/projects" },
  { label: "Major Clients", to: "/clients" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-white-950 text-white">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-black/50">
              Cybertec Enterprises supplies technology and infrastructure
              solutions from global manufacturers, and provides the engineering
              capability required to deploy and support them.
            </p>
            <p className="mt-6 font-display text-sm font-semibold text-brand-400">
              Global Technology. Trusted Supply. Engineering Excellence.
            </p>
          </div>

          <div>
            <h2 className="font-display text-[11px] uppercase tracking-[0.2em] text-black/100">
              Technology
            </h2>
            <ul className="mt-5 space-y-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/products?category=${category.id}`}
                    className="text-sm text-black/50 transition-colors duration-150 ease-smooth hover:text-black"
                  >
                    {category.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-[11px] uppercase tracking-[0.2em] text-black/100">
              Company
            </h2>
            <ul className="mt-5 space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-black/50 transition-colors duration-150 ease-smooth hover:text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-[11px] uppercase tracking-[0.2em] text-black/100">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-black/50">
              <li className="flex items-start gap-3">
                <MailIcon
                  className="mt-0.5 h-4 w-4 text-brand-300"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="transition-colors duration-150 ease-smooth hover:text-black"
                >
                  {contactDetails.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-300"
                  aria-hidden="true"
                />
                <span className="flex flex-col">
                  {contactDetails.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="transition-colors duration-150 ease-smooth hover:text-black"
                    >
                      {phone}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-300"
                  aria-hidden="true"
                />
                <span>{contactDetails.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <GlobeIcon
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-300"
                  aria-hidden="true"
                />
                <span>Serving {contactDetails.markets}</span>
              </li>
            </ul>
            <Link
              to="/quote"
              className="mt-6 inline-flex rounded-sm bg-brand-500 px-5 py-3 font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 ease-smooth hover:bg-brand-600"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-black/10 pt-6 text-xs text-black/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {contactDetails.company}. Established{" "}
            {contactDetails.established}.
          </p>
          <p>
            Technology supplier · Manufacturer representation · Engineering
            services
          </p>
          <div className="flex items-center gap-2 ml-0 sm:ml-4">
            <span className="text-xs text-black/80">
              Designed & Developed by
            </span>
            <a
              href="https://wa.me/94754841586"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Lingo"
              className="inline-flex items-center"
            >
              <img
                src={asset("Lingo.png")}
                alt="Lingo"
                className="h-9 w-auto mr-3 ml-[-8px] object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
