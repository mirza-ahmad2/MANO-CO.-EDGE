import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

import brandLogo from "@/assets/brand-logo.png";
import { CONTACT_EMAIL_DISPLAY, CONTACT_PHONE_DISPLAY } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Nikhil" },
  { to: "/services", label: "What We Do" },
  { to: "/track-record", label: "Track Record" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="snap-section bg-graphite text-primary-foreground">
      <div className="container-90 grid gap-14 py-16 sm:py-20 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link
            to="/"
            preload="intent"
            className="inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
            aria-label="MANO & Co. home"
          >
            <img
              src={brandLogo}
              alt="MANO & Co."
              width={44}
              height={44}
              className="h-11 w-11 rounded-sm object-cover"
              decoding="async"
              loading="lazy"
            />
            <span className="font-display text-xl uppercase tracking-[0.16em] text-bronze sm:text-2xl">
              Mano <span className="text-bronze-soft">&</span> Co.
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/60">
            Boutique commercial advisory for multi-site, partner-led businesses. Commercial
            operating systems designed to compound — not just run.
          </p>
          <p className="mt-6 flex items-center gap-2 text-sm text-primary-foreground/60">
            <MapPin size={15} className="shrink-0 text-bronze" aria-hidden="true" />
            Toronto, Ontario, Canada
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow text-bronze">Navigate</p>
          <ul className="mt-6 space-y-3">
            {nav.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  preload="intent"
                  className="link-underline text-sm text-primary-foreground/70 transition-colors duration-300 hover:text-bronze-soft"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow text-bronze">Connect</p>
          <ul className="mt-6 space-y-3 text-sm text-primary-foreground/70">
            <li>
              <a
                href="https://www.linkedin.com/in/ondhia/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-2 transition-colors duration-300 hover:text-bronze-soft"
              >
                <Linkedin size={15} className="text-bronze" aria-hidden="true" />
                LinkedIn — /in/ondhia
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <Mail size={15} className="text-bronze" aria-hidden="true" />
              <span>
                <span className="sr-only">Email: </span>
                {CONTACT_EMAIL_DISPLAY}
              </span>
            </li>
            <li className="inline-flex items-center gap-2">
              <Phone size={15} className="text-bronze" aria-hidden="true" />
              <span>
                <span className="sr-only">Phone: </span>
                {CONTACT_PHONE_DISPLAY}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-90 flex flex-col gap-3 py-7 text-xs text-primary-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} MANO &amp; Co. All rights reserved.</p>
          <p>
            This website is powered by{" "}
            <a
              href="https://theinnovations.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-bronze-soft transition-colors hover:text-bronze"
            >
              The Innovations (https://theinnovations.tech/)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
