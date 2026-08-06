import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import brandLogo from "@/assets/brand-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "What We Do" },
  { to: "/track-record", label: "Track Record" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        scrolled || open
          ? "bg-graphite/95 shadow-[0_1px_0_0_rgba(184,149,80,0.12)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-bronze focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-[0.18em] focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="container-90 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 sm:gap-6 sm:py-5"
      >
        <Link
          to="/"
          preload="intent"
          className="group flex min-w-0 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
          aria-label="MANO & Co. home"
        >
          <img
            src={brandLogo}
            alt="MANO & Co."
            width={48}
            height={48}
            className="h-10 w-10 rounded-sm object-cover shadow-[0_0_0_1px_rgba(184,149,80,0.25)] transition-transform duration-500 group-hover:scale-[1.03] sm:h-11 sm:w-11"
            decoding="async"
          />
          <span className="min-w-0 font-display text-base tracking-[0.16em] text-bronze uppercase sm:text-lg">
            Mano <span className="text-bronze-soft">&</span> Co.
          </span>
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          <ul className="flex items-center gap-8">
            {links.slice(1).map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  preload="intent"
                  activeOptions={{ exact: l.to === "/" }}
                  className="link-underline text-xs uppercase tracking-[0.16em] text-primary-foreground/75 transition-colors duration-300 hover:text-bronze-soft data-[status=active]:text-bronze-soft"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            preload="intent"
            className="btn-outline shrink-0 px-6 py-3 text-[0.6875rem] uppercase tracking-[0.18em]"
          >
            Start a Conversation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="min-h-11 min-w-11 shrink-0 touch-manipulation p-2 text-bronze transition-colors hover:text-bronze-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze lg:hidden"
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        hidden={!open}
        className={`border-t border-bronze/15 bg-graphite/98 backdrop-blur-md lg:hidden ${open ? "block" : ""}`}
      >
        <ul className="container-90 flex flex-col py-4">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                preload="intent"
                activeOptions={{ exact: l.to === "/" }}
                className="block border-b border-primary-foreground/10 py-4 text-sm uppercase tracking-[0.16em] text-primary-foreground/80 transition-colors hover:text-bronze-soft data-[status=active]:text-bronze-soft"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-5">
            <Link
              to="/contact"
              preload="intent"
              className="btn-primary block px-6 py-4 text-center text-xs uppercase tracking-[0.18em]"
            >
              Start a Conversation
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
