import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import heroTrack from "@/assets/hero-track-record.jpg";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/track-record")({
  head: () =>
    pageSeo({
      title: "Track Record — Case Highlights | MANO & Co.",
      description:
        "Mercedes-Benz Canada aftersales P&L turnaround, JLR Canada partner network rebuild (NPS 95), Mercedes-Benz UK portfolio strategy, Maison Mercedes, MINI Canada launch.",
      path: "/track-record",
    }),
  component: TrackRecord,
});

const cases = [
  {
    org: "Mercedes-Benz Canada",
    title: "Aftersales P&L turnaround",
    metric: "$194M",
    metricLabel: "P&L across 59 sites",
    copy: "Ownership of a national aftersales commercial organization — rebuilding the margin architecture, retention model, and site-level accountability behind a $194M P&L.",
  },
  {
    org: "Jaguar Land Rover Canada",
    title: "Partner network rebuild",
    metric: "NPS 95",
    metricLabel: "Record network satisfaction",
    copy: "Restructured partner economics across 34 sites, resetting the relationship between the importer and its network and delivering a record partner NPS of 95.",
  },
  {
    org: "Mercedes-Benz UK",
    title: "National portfolio strategy",
    metric: "#1",
    metricLabel: "Mid-size segment position",
    copy: "Led national portfolio strategy across 140 retail sites, taking the mid-size segment to the number one position in market.",
  },
  {
    org: "Mercedes-Benz",
    title: "Maison Mercedes",
    metric: "CMA Gold",
    metricLabel: "Award-winning brand platform",
    copy: "An award-winning brand experience platform — proof that brand-building and commercial performance are the same discipline when the system is designed correctly.",
  },
  {
    org: "BMW Group Canada",
    title: "MINI brand launch",
    metric: "#1",
    metricLabel: "Luxury model in the line-up",
    copy: "Built the MINI brand launch in Canada and led the number one luxury model in BMW Group Canada's portfolio.",
  },
];

function TrackRecord() {
  return (
    <>
      <Hero
        image={heroTrack}
        imageAlt="Evidence of commercial performance across premium partner networks"
        eyebrow="Case highlights"
        title="Results that held"
        subtitle="Selected mandates from twenty-five years inside premium, multi-site commercial organizations — each measured by what changed in the network, not in the narrative."
        primaryCta={{ label: "Start a Conversation", to: "/contact" }}
      />

      <section className="snap-section flex min-h-svh items-center bg-background py-20 sm:py-24">
        <div className="container-90">
          <Reveal className="max-w-2xl">
            <p className="eyebrow rule-accent text-bronze">Selected work</p>
            <h2 className="mt-2 text-[clamp(1.85rem,3.6vw,3.2rem)] leading-[1.08]">
              Five mandates, one pattern: economics first, then performance.
            </h2>
          </Reveal>

          <ul className="mt-14 border-t border-border">
            {cases.map((c, i) => (
              <Reveal as="li" key={c.title} delay={60 * i}>
                <article className="group grid gap-6 border-b border-border py-10 transition-colors duration-500 hover:bg-secondary/60 md:grid-cols-[minmax(0,0.7fr)_minmax(0,0.6fr)_minmax(0,1.5fr)] md:items-start md:gap-10">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {c.org}
                    </p>
                    <h3 className="mt-3 text-2xl leading-snug">{c.title}</h3>
                  </div>
                  <div>
                    <p className="font-display text-[clamp(2rem,3vw,2.8rem)] leading-none text-bronze">
                      {c.metric}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {c.metricLabel}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="snap-section flex min-h-svh items-center bg-graphite py-20 text-primary-foreground sm:py-24">
        <div className="container-90 text-center">
          <Reveal>
            <p className="eyebrow text-bronze">Next</p>
            <h2 className="mx-auto mt-6 max-w-3xl text-balance text-[clamp(2rem,4.6vw,4rem)] leading-[1.06]">
              The same discipline, applied to your network.
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/65">
              Advisory and transformation mandates across premium consumer, franchise, hospitality,
              mobility, and multi-site organizations in Canada, the U.S., the UK, and Europe.
            </p>
            <Link
              to="/contact"
              preload="intent"
              className="btn-primary mt-11 inline-flex min-h-12 items-center gap-3 px-9 py-4 text-xs uppercase tracking-[0.18em]"
            >
              Start a conversation <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
