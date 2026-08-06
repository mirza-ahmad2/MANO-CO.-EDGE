export function Stat({
  value,
  label,
  tone = "dark",
}: {
  value: string;
  label: string;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={`border-t pt-6 ${
        tone === "light" ? "border-primary-foreground/20" : "border-border"
      }`}
    >
      <p className="font-display text-[clamp(2.2rem,4vw,3.4rem)] leading-none text-bronze">
        {value}
      </p>
      <p
        className={`mt-4 text-xs uppercase tracking-[0.16em] ${
          tone === "light" ? "text-primary-foreground/60" : "text-muted-foreground"
        }`}
      >
        {label}
      </p>
    </div>
  );
}
