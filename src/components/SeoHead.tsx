import { useEffect } from "react";

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  image?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
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

export const SeoHead = ({ title, description, canonicalPath, image = "/images/preview.jpg", schema }: SeoHeadProps) => {
  useEffect(() => {
    const canonicalHref = `${SITE_URL}${canonicalPath}`;
    document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", "High Quality Leads with Conversion Systems");
    upsertMeta("property", "og:description", "Ads, CRM, WhatsApp - built for real results.");
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", canonicalHref);

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);

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
  }, [title, description, canonicalPath, image, schema]);

  return null;
};
