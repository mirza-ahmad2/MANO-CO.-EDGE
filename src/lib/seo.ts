import { absoluteUrl, SITE_DESCRIPTION, SITE_KEYWORDS, SITE_NAME, SITE_URL } from "./site";

type PageSeoInput = {
  title: string;
  description?: string;
  path: string;
  keywords?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

/** Build TanStack Router `head` meta/links for a page. */
export function pageSeo({
  title,
  description = SITE_DESCRIPTION,
  path,
  keywords = SITE_KEYWORDS,
  image = "/og-image.png",
  type = "website",
  noIndex = false,
}: PageSeoInput) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: SITE_NAME },
      ...(noIndex
        ? [{ name: "robots", content: "noindex, nofollow" }]
        : [{ name: "robots", content: "index, follow, max-image-preview:large" }]),
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: imageUrl },
      { property: "og:locale", content: "en_CA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "en", href: url },
    ],
  };
}

export { SITE_URL, SITE_NAME, SITE_DESCRIPTION };
