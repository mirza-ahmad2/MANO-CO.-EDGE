import { createFileRoute } from "@tanstack/react-router";

import heroAbout from "@/assets/hero-about.jpg";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { Stat } from "@/components/Stat";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageSeo({
      title: "About Nikhil Ondhia — Founder, MANO & Co.",
      description:
        "Nikhil Ondhia: 25+ years across Mercedes-Benz Canada, Global HQ and UK, Jaguar Land Rover Canada, and BMW Group Canada. Kellogg Executive Scholar.",
      path: "/about",
    }),
  component: About,
});

const arc = [
  {
    org: "Mercedes-Benz Canada",
    role: "Aftersales & commercial leadership",
    detail:
      "Led a $194M P&L across 59 sites, rebuilding the commercial engine behind parts, service, and retention.",
  },
  {
    org: "Jaguar Land Rover Canada",
    role: "Partner network & economics",
    detail: "Rebuilt partner economics across 34 sites, delivering a record network NPS of 95.",
  },
  {
    org: "Mercedes-Benz Global HQ",
    role: "Centralized governance",
    detail:
      "Aligned 10 European market CEOs on a single centralized governance model for retail standards.",
  },
  {
    org: "Mercedes-Benz UK",
    role: "National portfolio strategy",
    detail:
      "Led national portfolio strategy across 140 retail sites, taking the mid-size segment to #1.",
  },
  {
    org: "BMW Group Canada",
    role: "Brand building",
    detail:
      "Built the MINI brand launch in Canada and led the #1 luxury model in BMW Group Canada's line-up.",
  },
];

function About() {
  return (
    <>
      <Hero
        image={heroAbout}
        imageAlt="Professional leadership portrait atmosphere for Nikhil Ondhia"
        eyebrow="Founder"
        title="Nikhil Ondhia"
        subtitle="Twenty-five years running the commercial systems most advisors only study — across three premium automotive groups, four markets, and hundreds of partner sites."
        primaryCta={{ label: "Start a Conversation", to: "/contact" }}
      />

      <section className="snap-section flex min-h-svh items-center bg-background py-20 sm:py-24">
        <div className="container-90 grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow rule-accent text-bronze">Philosophy</p>
            <h2 className="mt-2 text-[clamp(1.85rem,3.6vw,3.2rem)] leading-[1.08]">
              Distributed businesses fail at the seams, not the centre.
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              In multi-site, partner-led organizations, strategy rarely fails in the boardroom. It
              fails in the space between headquarters intent and site-level economics — where
              incentives, governance, and data stop agreeing with one another.
            </p>
            <p>
              The work is to design one commercial operating system: a shared architecture for how
              demand is created, how margin is protected, how partners are paid, and how performance
              is governed. Systems that compound do not depend on heroics. They depend on alignment
              that holds when nobody is watching.
            </p>
            <p className="text-foreground">
              Kellogg Executive Scholar in Growth &amp; Innovation — invited back to speak to
              subsequent cohorts.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="snap-section flex min-h-svh items-center bg-graphite py-20 text-primary-foreground sm:py-24">
        <div className="container-90">
          <Reveal>
            <p className="eyebrow rule-accent text-bronze">Career arc</p>
            <h2 className="mt-2 max-w-xl text-[clamp(1.85rem,3.6vw,3.2rem)] leading-[1.08]">
              Four markets. Three premium groups. One consistent result.
            </h2>
          </Reveal>
          <ul className="mt-14 border-t border-primary-foreground/15">
            {arc.map((item, i) => (
              <Reveal as="li" key={item.org} delay={70 * i}>
                <div className="group grid gap-3 border-b border-primary-foreground/15 py-7 transition-colors duration-500 hover:bg-primary-foreground/[0.04] md:grid-cols-[minmax(0,0.9fr)_minmax(0,0.8fr)_minmax(0,1.6fr)] md:items-baseline md:gap-8">
                  <p className="text-lg">{item.org}</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-bronze">{item.role}</p>
                  <p className="text-sm leading-relaxed text-primary-foreground/60">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="snap-section flex min-h-svh items-center bg-background py-20 sm:py-24">
        <div className="container-90 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="eyebrow rule-accent text-bronze">Personal</p>
            <h2 className="mt-2 max-w-lg text-[clamp(1.85rem,3.6vw,3.2rem)] leading-[1.08]">
              “The answer to doubt is results.”
            </h2>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground">
              A first-generation Canadian who learned early that credibility is not granted, it is
              demonstrated. That belief still sets the standard of the work: precise, evidenced, and
              measured by what changed in the P&amp;L — not by the size of the deck.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:gap-x-10">
              <Stat value="$194M" label="P&L owned" />
              <Stat value="140" label="UK retail sites under strategy" />
              <Stat value="59" label="Sites, Mercedes-Benz Canada" />
              <Stat value="34" label="Sites, JLR Canada network" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
