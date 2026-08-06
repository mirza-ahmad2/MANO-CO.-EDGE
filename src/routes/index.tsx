import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass, Network, ShieldCheck, TrendingUp } from "lucide-react";

import heroHome from "@/assets/hero-home.jpg";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { Stat } from "@/components/Stat";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageSeo({
      title: "MANO & Co. — Commercial Operating Systems That Compound",
      description:
        "Boutique commercial advisory for multi-site, partner-led businesses. Founded by Nikhil Ondhia — 25+ years leading billion-dollar commercial organizations.",
      path: "/",
    }),
  component: Home,
});

const pillars = [
  {
    icon: Network,
    title: "Commercial Operating System Design",
    copy: "One architecture for how demand, margin, and partner performance move across every site.",
  },
  {
    icon: ShieldCheck,
    title: "Brand Governance",
    copy: "Standards that hold at scale — centralized intent, local execution, measurable compliance.",
  },
  {
    icon: TrendingUp,
    title: "Partner Economics",
    copy: "Restructured economics that make the right behaviour the profitable behaviour.",
  },
  {
    icon: Compass,
    title: "Network Performance",
    copy: "Multi-site transformation grounded in P&L ownership, not slideware.",
  },
];

function Home() {
  return (
    <>
      <Hero
        image={heroHome}
        imageAlt="Premium commercial network and partner operations atmosphere"
        eyebrow="Toronto · Canada · U.S. · UK · Europe"
        title={
          <>
            Commercial systems built to <em className="italic text-bronze-soft">compound</em>
          </>
        }
        subtitle="MANO & Co. is a boutique commercial advisory for multi-site, partner-led businesses — designing the operating systems that turn scale into durable margin."
        primaryCta={{ label: "Start a Conversation", to: "/contact" }}
        secondaryCta={{ label: "See the Track Record", to: "/track-record" }}
      />

      <section className="snap-section flex min-h-svh items-center bg-background py-20 sm:py-24">
        <div className="container-90 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow rule-accent text-bronze">Evidence, first</p>
            <h2 className="mt-2 max-w-md text-[clamp(1.85rem,3.6vw,3.2rem)] leading-[1.08]">
              Built by an operator who has run the systems he advises on.
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
              Twenty-five years leading billion-dollar commercial organizations across
              Mercedes-Benz, Jaguar Land Rover, and BMW Group — in Canada, the UK, and at global
              headquarters.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:gap-x-10 lg:grid-cols-3">
              <Stat value="$194M" label="P&L led at Mercedes-Benz Canada" />
              <Stat value="384+" label="Partner sites across mandates" />
              <Stat value="NPS 95" label="Record partner satisfaction, JLR Canada" />
              <Stat value="#1" label="CPO programme in market" />
              <Stat value="10" label="European market CEOs aligned" />
              <Stat value="25+" label="Years of commercial leadership" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="snap-section flex min-h-svh items-center bg-graphite py-20 text-primary-foreground sm:py-24">
        <div className="container-90">
          <Reveal className="max-w-2xl">
            <p className="eyebrow rule-accent text-bronze">Core pillars</p>
            <h2 className="mt-2 text-[clamp(1.85rem,3.6vw,3.2rem)] leading-[1.08]">
              Four disciplines, one operating system.
            </h2>
          </Reveal>
          <ul className="mt-16 grid gap-px border-t border-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={100 * i}>
                <div className="group h-full border-b border-primary-foreground/15 py-10 pr-6 transition-colors duration-500 hover:bg-primary-foreground/[0.03] sm:border-b-0 sm:pr-8">
                  <p.icon
                    size={22}
                    strokeWidth={1.25}
                    className="text-bronze transition-transform duration-500 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                  <h3 className="mt-8 text-xl leading-snug">{p.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">
                    {p.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200}>
            <Link
              to="/services"
              preload="intent"
              className="link-underline mt-14 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-bronze-soft"
            >
              All capabilities <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="snap-section flex min-h-svh items-center bg-background py-20 sm:py-24">
        <div className="container-90 text-center">
          <Reveal>
            <p className="eyebrow text-bronze">Start a conversation</p>
            <h2 className="mx-auto mt-6 max-w-3xl text-balance text-[clamp(2rem,4.6vw,4rem)] leading-[1.06]">
              If your network is running, but not compounding — that is the work.
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
              Advisory and transformation mandates for boards, CEOs, and ownership groups across
              premium consumer, franchise, hospitality, mobility, and multi-site businesses.
            </p>
            <Link
              to="/contact"
              preload="intent"
              className="btn-dark mt-11 inline-flex min-h-12 items-center gap-3 px-9 py-4 text-xs uppercase tracking-[0.18em]"
            >
              Begin the conversation <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
