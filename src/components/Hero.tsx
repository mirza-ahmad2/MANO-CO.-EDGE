import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import type { AppPath } from "@/lib/site";

export function Hero({
  image,
  imageAlt,
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  children,
}: {
  image: string;
  imageAlt?: string;
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  primaryCta?: { label: string; to: AppPath };
  secondaryCta?: { label: string; to: AppPath };
  children?: ReactNode;
}) {
  return (
    <section className="snap-section relative flex min-h-svh items-center justify-center overflow-hidden bg-graphite">
      <img
        src={image}
        alt={imageAlt ?? ""}
        aria-hidden={imageAlt ? undefined : true}
        width={1920}
        height={1088}
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full scale-105 object-cover motion-safe:animate-hero-zoom"
      />
      <div className="hero-overlay pointer-events-none absolute inset-0" />
      <div className="container-hero relative z-10 py-28 text-center sm:py-32">
        <p className="eyebrow animate-fade-in text-bronze-soft">{eyebrow}</p>
        <h1 className="mx-auto mt-6 max-w-5xl text-balance font-display text-[clamp(2.4rem,6.4vw,5.4rem)] leading-[1.03] text-primary-foreground motion-safe:animate-fade-up">
          {title}
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/75 motion-safe:animate-fade-up sm:text-lg [animation-delay:80ms]">
          {subtitle}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-11 flex flex-col items-center justify-center gap-3 motion-safe:animate-fade-up sm:flex-row sm:gap-4 [animation-delay:140ms]">
            {primaryCta && (
              <Link
                to={primaryCta.to}
                preload="intent"
                className="btn-primary inline-flex min-h-12 min-w-[12rem] items-center justify-center px-8 py-4 text-xs font-medium uppercase tracking-[0.18em]"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                to={secondaryCta.to}
                preload="intent"
                className="btn-ghost inline-flex min-h-12 min-w-[12rem] items-center justify-center px-8 py-4 text-xs font-medium uppercase tracking-[0.18em]"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
