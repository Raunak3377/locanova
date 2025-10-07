import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostname = "https://locanova.in";

// Define all routes with their SEO properties
const routes = [
  { 
    path: "/", 
    priority: "1.0", 
    changefreq: "weekly",
    description: "Home page - Digital marketing agency services"
  },
  { 
    path: "/services", 
    priority: "0.9", 
    changefreq: "weekly",
    description: "Our digital marketing services overview"
  },
  { 
    path: "/pricing", 
    priority: "0.9", 
    changefreq: "monthly",
    description: "Digital marketing pricing and packages"
  },
  { 
    path: "/seo-services", 
    priority: "0.8", 
    changefreq: "weekly",
    description: "SEO services and search engine optimization"
  },
  { 
    path: "/social-media-marketing", 
    priority: "0.8", 
    changefreq: "weekly",
    description: "Social media marketing services"
  },
  { 
    path: "/ppc-lead-generation", 
    priority: "0.8", 
    changefreq: "weekly",
    description: "PPC advertising and lead generation services"
  },
  { 
    path: "/gmb-setup-management", 
    priority: "0.8", 
    changefreq: "weekly",
    description: "Google My Business setup and management"
  },
  { 
    path: "/ecommerce-shopify", 
    priority: "0.8", 
    changefreq: "weekly",
    description: "E-commerce and Shopify development services"
  },
  { 
    path: "/real-estate-marketing", 
    priority: "0.8", 
    changefreq: "weekly",
    description: "Real estate digital marketing services"
  },
  { 
    path: "/influencer-marketing", 
    priority: "0.8", 
    changefreq: "weekly",
    description: "Influencer marketing and brand partnerships"
  },
  { 
    path: "/growth-consulting", 
    priority: "0.8", 
    changefreq: "weekly",
    description: "Business growth consulting and strategy"
  },
  { 
    path: "/blog", 
    priority: "0.7", 
    changefreq: "daily",
    description: "Digital marketing blog and insights"
  },
  { 
    path: "/contact", 
    priority: "0.6", 
    changefreq: "monthly",
    description: "Contact us for digital marketing services"
  },
];

const generateSitemap = async () => {
  try {
    console.log("🚀 Generating sitemap for", routes.length, "pages...");
    
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

    // Create dist directory if it doesn't exist
    const distDir = path.join(__dirname, "dist");
    await mkdir(distDir, { recursive: true });

    // Write sitemap to dist folder
    const distFilePath = path.join(distDir, "sitemap.xml");
    await writeFile(distFilePath, sitemap, "utf8");

    // Also write to public folder for development
    const publicDir = path.join(__dirname, "public");
    const publicFilePath = path.join(publicDir, "sitemap.xml");
    await writeFile(publicFilePath, sitemap, "utf8");

    console.log("✅ sitemap.xml generated successfully!");
    console.log("📁 Files created:");
    console.log("   - /dist/sitemap.xml (for production)");
    console.log("   - /public/sitemap.xml (for development)");
    console.log("🌐 Sitemap URL: https://locanova.in/sitemap.xml");
    
    // Display route summary
    console.log("\n📊 Route Summary:");
    routes.forEach(route => {
      console.log(`   ${route.path} (Priority: ${route.priority}, Update: ${route.changefreq})`);
    });
    
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
    process.exit(1);
  }
};

// Run the generator
generateSitemap();
