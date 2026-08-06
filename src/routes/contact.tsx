import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import heroContact from "@/assets/hero-contact.jpg";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { pageSeo } from "@/lib/seo";
import { CONTACT_EMAIL_DISPLAY, CONTACT_PHONE_DISPLAY } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageSeo({
      title: "Contact — MANO & Co. | Toronto Commercial Advisory",
      description:
        "Start a conversation with MANO & Co. Advisory mandates for boards, CEOs, and ownership groups across Canada, the U.S., the UK, and Europe.",
      path: "/contact",
    }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <Hero
        image={heroContact}
        imageAlt="Quiet professional setting for a confidential advisory conversation"
        eyebrow="Toronto, Ontario"
        title="Start a conversation"
        subtitle="For boards, CEOs, and ownership groups considering a commercial transformation, a value creation mandate, or an advisory relationship."
      />

      <section className="snap-section flex min-h-svh items-center bg-background py-20 sm:py-24">
        <div className="container-90 grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="eyebrow rule-accent text-bronze">Direct</p>
            <h2 className="mt-2 max-w-sm text-[clamp(1.75rem,3.2vw,2.8rem)] leading-[1.1]">
              Every enquiry is read by Nikhil.
            </h2>
            <ul className="mt-10 space-y-6 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={17} className="mt-0.5 shrink-0 text-bronze" aria-hidden="true" />
                <span>
                  <span className="sr-only">Email: </span>
                  {CONTACT_EMAIL_DISPLAY}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={17} className="mt-0.5 shrink-0 text-bronze" aria-hidden="true" />
                <span>
                  <span className="sr-only">Phone: </span>
                  {CONTACT_PHONE_DISPLAY}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Linkedin size={17} className="mt-0.5 shrink-0 text-bronze" aria-hidden="true" />
                <a
                  href="https://www.linkedin.com/in/ondhia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  linkedin.com/in/ondhia
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={17} className="mt-0.5 shrink-0 text-bronze" aria-hidden="true" />
                Toronto, Ontario, Canada — serving Canada, the U.S., the UK, and Europe.
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120}>
            {sent ? (
              <div className="border-t border-bronze pt-10" role="status" aria-live="polite">
                <h3 className="text-2xl">Thank you.</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Your note has been received. You will hear back directly, usually within one
                  business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="grid gap-7 border-t border-border pt-10"
                noValidate={false}
              >
                <Field id="name" label="Name" autoComplete="name" />
                <Field id="email" label="Email" type="email" autoComplete="email" />
                <Field id="company" label="Company" required={false} autoComplete="organization" />
                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs uppercase tracking-[0.16em] text-muted-foreground"
                  >
                    What are you working through?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    aria-required="true"
                    className="resize-none border-b border-input bg-transparent py-3 text-sm outline-none transition-colors duration-300 focus:border-bronze"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-dark justify-self-start px-9 py-4 text-xs uppercase tracking-[0.18em]"
                >
                  Send enquiry
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = true,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        aria-required={required}
        autoComplete={autoComplete}
        className="border-b border-input bg-transparent py-3 text-sm outline-none transition-colors duration-300 focus:border-bronze"
      />
    </div>
  );
}
