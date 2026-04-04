import { useEffect } from "react";

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  image?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  keywords?: string;
}

const SITE_URL = "https://locanova.in";

const upsertMeta = (key: "name" | "property", value: string, content: string) => {
  let tag = document.head.querySelector(`meta[${key}="${value}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(key, value);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const upsertLink = (rel: string, href: string, type?: string) => {
  let link = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
  if (type) link.setAttribute("type", type);
};

export const SeoHead = ({ title, description, canonicalPath, image = "/images/preview.jpg", schema, keywords }: SeoHeadProps) => {
  useEffect(() => {
    const canonicalHref = `${SITE_URL}${canonicalPath}`;
    document.title = title;

    // Primary SEO Meta Tags
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", "index, follow");
    upsertMeta("name", "language", "English");
    if (keywords) {
      upsertMeta("name", "keywords", keywords);
    }

    // Open Graph Tags (for social sharing and Google rich snippets)
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonicalHref);
    upsertMeta("property", "og:site_name", "Locanova");

    // Twitter Card Tags
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);
    upsertMeta("name", "twitter:site", "@locanova");

    // Additional SEO Meta Tags
    upsertMeta("name", "author", "Locanova");
    upsertMeta("name", "viewport", "width=device-width, initial-scale=1.0");

    // Favicon Links
    upsertLink("icon", "/logo.ico", "image/x-icon");
    upsertLink("shortcut icon", "/logo.ico", "image/x-icon");
    upsertLink("apple-touch-icon", "/logo.png");

    // Canonical URL
    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);

    // JSON-LD Schema Markup
    const existingSchema = document.getElementById("dynamic-schema-jsonld");
    if (existingSchema) existingSchema.remove();

    if (schema) {
      const script = document.createElement("script");
      script.id = "dynamic-schema-jsonld";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const dynamicSchema = document.getElementById("dynamic-schema-jsonld");
      if (dynamicSchema) dynamicSchema.remove();
    };
  }, [title, description, canonicalPath, image, schema, keywords]);

  return null;
};
