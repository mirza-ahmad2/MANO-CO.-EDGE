import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Gauge,
  Handshake,
  LineChart,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import heroServices from "@/assets/hero-services.jpg";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    pageSeo({
      title: "What We Do — Commercial Advisory | MANO & Co.",
      description:
        "Commercial operating system design, brand governance, partner economics, demand generation, CX strategy, and network performance transformation.",
      path: "/services",
    }),
  component: Services,
});

const services = [
  {
    icon: Network,
    title: "Commercial Operating System Design",
    copy: "A single architecture connecting demand, pricing, margin, and site-level accountability — so growth is repeatable rather than episodic.",
    proof: "$194M P&L rebuilt across 59 sites",
  },
  {
    icon: ShieldCheck,
    title: "Brand Governance",
    copy: "Standards, guardrails, and review cadence that keep a premium brand intact across every market and every partner.",
    proof: "10 European market CEOs aligned on one model",
  },
  {
    icon: Handshake,
    title: "Partner Economics Restructuring",
    copy: "Margin, bonus, and incentive design that makes the behaviour you need the behaviour that pays — for both sides of the table.",
    proof: "Record NPS of 95 across 34 partner sites",
  },
  {
    icon: LineChart,
    title: "Demand Generation Strategy",
    copy: "National-to-local demand systems: where volume comes from, what it costs, and which sites convert it.",
    proof: "#1 mid-size segment position, UK",
  },
  {
    icon: Sparkles,
    title: "CX & Brand Experience Strategy",
    copy: "Experience platforms that create commercial lift, not just recognition — designed to be operated, measured, and defended.",
    proof: "Maison Mercedes — CMA Gold Award",
  },
  {
    icon: Gauge,
    title: "Network & Multi-Site Performance",
    copy: "Portfolio review, site-level turnaround, and value creation mandates for boards and ownership groups.",
    proof: "140 retail sites under national strategy",
  },
];

function Services() {
  return (
    <>
      <Hero
        image={heroServices}
        imageAlt="Multi-site commercial network and brand operations"
        eyebrow="Capabilities"
        title="What we do"
        subtitle="Six disciplines that together form one commercial operating system — built for organizations where performance is distributed across partners, sites, and markets."
        primaryCta={{ label: "Discuss a Mandate", to: "/contact" }}
      />

      <section className="snap-section flex min-h-svh items-center bg-background py-20 sm:py-24">
        <div className="container-90">
          <Reveal className="max-w-2xl">
            <p className="eyebrow rule-accent text-bronze">The disciplines</p>
            <h2 className="mt-2 text-[clamp(1.85rem,3.6vw,3.2rem)] leading-[1.08]">
              Each engagement is scoped to the seam that is costing you the most.
            </h2>
          </Reveal>

          <ul className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-14">
            {services.map((s, i) => (
              <Reveal as="li" key={s.title} delay={80 * i}>
                <article className="group h-full border-t border-border pt-7 transition-[border-color,transform] duration-500 hover:-translate-y-0.5 hover:border-bronze">
                  <s.icon
                    size={22}
                    strokeWidth={1.25}
                    className="text-bronze transition-transform duration-500 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                  <h3 className="mt-7 text-xl leading-snug">{s.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                  <p className="mt-6 text-xs uppercase tracking-[0.16em] text-bronze">{s.proof}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="snap-section flex min-h-svh items-center bg-graphite py-20 text-primary-foreground sm:py-24">
        <div className="container-90 grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow rule-accent text-bronze">How we engage</p>
            <h2 className="mt-2 max-w-lg text-[clamp(1.85rem,3.6vw,3.2rem)] leading-[1.08]">
              Advisory that stays close to the operating reality.
            </h2>
            <Link
              to="/track-record"
              preload="intent"
              className="link-underline mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-bronze-soft"
            >
              See the case highlights <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <ol className="border-t border-primary-foreground/15">
              {[
                {
                  n: "01",
                  t: "Diagnostic",
                  d: "A structured read of demand, margin, governance, and partner economics — evidence before opinion.",
                },
                {
                  n: "02",
                  t: "System design",
                  d: "The operating model, incentives, and cadence written so it can be run by the organization, not by us.",
                },
                {
                  n: "03",
                  t: "Implementation leadership",
                  d: "Hands-on leadership through the change, with accountability held at board level.",
                },
                {
                  n: "04",
                  t: "Value creation mandate",
                  d: "Ongoing advisory for ownership groups where the outcome is measured in enterprise value.",
                },
              ].map((step) => (
                <li
                  key={step.n}
                  className="grid gap-2 border-b border-primary-foreground/15 py-7 transition-colors duration-500 hover:bg-primary-foreground/[0.03] sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-8"
                >
                  <span className="font-display text-lg text-bronze">{step.n}</span>
                  <div>
                    <p className="text-lg">{step.t}</p>
                    <p className="mt-2 text-sm leading-relaxed text-primary-foreground/60">
                      {step.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
    </>
  );
}
