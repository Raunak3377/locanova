export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  industry: "institute" | "real-estate" | "general";
  date: string;
  body: string;
  html: string;
}

const modules = import.meta.glob("./blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const escapeHtml = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const formatInlineMarkdown = (text: string) => {
  const escaped = escapeHtml(text);
  return escaped
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-300 underline hover:text-blue-200">$1</a>');
};

const markdownToHtml = (markdown: string) => {
  const lines = markdown.split("\n");
  const html: string[] = [];
  let inList = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      continue;
    }

    if (trimmed.startsWith("### ")) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push(`<h3 class="text-xl sm:text-2xl font-bold text-white mt-8 mb-3">${formatInlineMarkdown(trimmed.slice(4))}</h3>`);
      continue;
    }

    if (trimmed.startsWith("## ")) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push(`<h2 class="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4">${formatInlineMarkdown(trimmed.slice(3))}</h2>`);
      continue;
    }

    if (trimmed.startsWith("# ")) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      html.push(`<h1 class="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">${formatInlineMarkdown(trimmed.slice(2))}</h1>`);
      continue;
    }

    if (trimmed.startsWith("- ")) {
      if (!inList) {
        html.push('<ul class="list-disc list-inside space-y-2 text-white/80 my-4">');
        inList = true;
      }
      html.push(`<li>${formatInlineMarkdown(trimmed.slice(2))}</li>`);
      continue;
    }

    if (inList) {
      html.push("</ul>");
      inList = false;
    }
    html.push(`<p class="text-white/75 leading-relaxed">${formatInlineMarkdown(trimmed)}</p>`);
  }

  if (inList) html.push("</ul>");
  return html.join("\n");
};

const parseFrontmatter = (raw: string) => {
  const normalized = raw.replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) {
    return { meta: {}, body: normalized };
  }

  const end = normalized.indexOf("\n---\n", 4);
  if (end === -1) {
    return { meta: {}, body: normalized };
  }

  const metaBlock = normalized.slice(4, end);
  const body = normalized.slice(end + 5);
  const meta: Record<string, string> = {};

  metaBlock.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");
    if (!key || valueParts.length === 0) return;
    meta[key.trim()] = valueParts.join(":").trim().replace(/^"(.*)"$/, "$1");
  });

  return { meta, body };
};

export const blogPosts: BlogPost[] = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = path.split("/").pop()?.replace(".md", "") ?? "";
    const { meta, body } = parseFrontmatter(raw);
    const industry = (meta.industry as BlogPost["industry"]) || "general";

    return {
      slug,
      title: meta.title || slug.replace(/-/g, " "),
      description: meta.description || "Locanova growth strategy article.",
      date: meta.date || "2026-01-01",
      industry,
      body,
      html: markdownToHtml(body),
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const getBlogBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug);
