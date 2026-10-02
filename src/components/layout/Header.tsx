import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { navigation, mobileNavigation } from "../../data/navigation";
import { Logo } from "./Logo";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="hidden bg-navy-900 lg:block">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-2">
          <p className="font-display text-[11px] uppercase tracking-[0.22em] text-brand-200">
            Global Technology · Trusted Supply · Engineering Excellence
          </p>
          <p className="text-[11px] tracking-[0.08em] text-white/60">
            <a href="tel:+94112597696" className="hover:text-white">
              +94 11 259 7696
            </a>
            <span className="mx-2 text-white/25">|</span>
            <a href="mailto:crm@cybertecent.com" className="hover:text-white">
              crm@cybertecent.com
            </a>
          </p>
        </div>
      </div>

      <div className="border-b border-navy-900/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-6 py-4">
          <Logo />

          <nav
            className="hidden items-center gap-1 xl:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setProductsOpen((open) => !open)}
                    aria-expanded={productsOpen}
                    className="flex items-center gap-1 rounded-sm px-3 py-2 font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-navy-900 transition-colors duration-150 ease-smooth hover:text-brand-600"
                  >
                    {item.label}
                    <ChevronDownIcon
                      className="h-3.5 w-3.5"
                      aria-hidden="true"
                    />
                  </button>
                  {productsOpen && (
                    <div className="absolute left-0 top-full w-[320px] border border-navy-900/10 bg-white p-2 shadow-xl shadow-navy-900/10">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          className="block rounded-sm px-3 py-2.5 transition-colors duration-150 ease-smooth hover:bg-brand-50"
                        >
                          <span className="block font-display text-sm font-semibold text-navy-900">
                            {child.label}
                          </span>
                          {child.note && (
                            <span className="mt-0.5 block text-xs text-navy-900/55">
                              {child.note}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-sm px-3 py-2 font-display text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-150 ease-smooth hover:text-brand-600 ${
                      isActive ? "text-brand-600" : "text-navy-900"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/quote"
              className="hidden rounded-sm bg-brand-500 px-10 py-3 font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 ease-smooth hover:bg-brand-600 sm:inline-flex"
            >
              Request a Quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-navy-900/15 text-navy-900 xl:hidden"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <XIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-navy-900/10 bg-white xl:hidden">
            <nav
              className="mx-auto grid max-w-content gap-1 px-6 py-4 sm:grid-cols-2"
              aria-label="Mobile navigation"
            >
              {mobileNavigation.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-sm px-3 py-3 font-display text-sm font-semibold ${
                      isActive
                        ? "bg-brand-50 text-brand-600"
                        : "text-navy-900 hover:bg-navy-900/5"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/quote"
                className="mt-6 inline-justify-center rounded-sm bg-brand-500 px-5 py-3 font-display text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 ease-smooth hover:bg-brand-600"
              >
                Request a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
