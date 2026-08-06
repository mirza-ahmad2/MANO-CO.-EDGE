/** Site-wide constants for SEO, contact, and branding. */
export const SITE_NAME = "MANO & Co.";
export const SITE_URL = "https://manoandco.com";

export const SITE_DESCRIPTION =
  "Boutique commercial advisory for multi-site, partner-led businesses. Founded by Nikhil Ondhia — commercial operating systems designed to compound.";

export const SITE_KEYWORDS = [
  "MANO & Co",
  "commercial advisory",
  "Nikhil Ondhia",
  "Toronto",
  "multi-site business",
  "partner economics",
  "brand governance",
  "commercial operating system",
  "franchise advisory",
  "network performance",
  "value creation",
].join(", ");

/** Placeholders until final contact details are confirmed. */
export const CONTACT_EMAIL_DISPLAY = "Add here";
export const CONTACT_PHONE_DISPLAY = "Add here";

export type AppPath = "/" | "/about" | "/contact" | "/services" | "/track-record";

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}
