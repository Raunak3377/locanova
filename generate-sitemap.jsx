import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname = "https://locanova.in";

const routes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/services", priority: "0.9", changefreq: "weekly" },
  { path: "/pricing", priority: "0.9", changefreq: "monthly" },
  { path: "/seo-services", priority: "0.8", changefreq: "weekly" },
  { path: "/social-media-marketing", priority: "0.8", changefreq: "weekly" },
  { path: "/ppc-lead-generation", priority: "0.8", changefreq: "weekly" },
  { path: "/gmb-setup-management", priority: "0.8", changefreq: "weekly" },
  { path: "/ecommerce-shopify", priority: "0.8", changefreq: "weekly" },
  { path: "/real-estate-marketing", priority: "0.8", changefreq: "weekly" },
  { path: "/influencer-marketing", priority: "0.8", changefreq: "weekly" },
  { path: "/growth-consulting", priority: "0.8", changefreq: "weekly" },
  { path: "/blog", priority: "0.7", changefreq: "daily" },
  { path: "/contact", priority: "0.6", changefreq: "monthly" },
];

const generateSitemap = async () => {
  try {
    const urls = routes
      .map(
        (route) => `
  <url>
    <loc>${hostname}${route.path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
      )
      .join("");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>
${urls}
</urlset>`;

    const distDir = path.join(__dirname, "dist");
    await mkdir(distDir, { recursive: true });

    const filePath = path.join(distDir, "sitemap.xml");
    await writeFile(filePath, sitemap, "utf8");

    console.log("✅ sitemap.xml generated successfully in /dist");
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
  }
};

generateSitemap();
