import { marked } from "marked";

// Function to parse frontmatter
const parseFrontmatter = (content: string) => {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  if (match) {
    const frontmatter = match[1];
    const body = match[2];
    const metadata: Record<string, string> = {};
    frontmatter.split('\n').forEach(line => {
      const [key, ...value] = line.split(': ');
      if (key && value.length) {
        metadata[key.trim()] = value.join(': ').trim();
      }
    });
    return { metadata, body };
  }
  return { metadata: {}, body: content };
};

// auto import ALL markdown files in this folder
const modules = import.meta.glob("./*.md", { as: "raw", eager: true });

export const blogPosts = Object.entries(modules).map(([path, content]) => {
  // extract filename → slug
  const slug = path.split("/").pop()?.replace(".md", "") || "";

  // optional: clean slug (recommended)
  const cleanSlug = slug.toLowerCase();

  const { metadata, body } = parseFrontmatter(content as string);

  return {
    slug: cleanSlug,
    title: metadata.title || cleanSlug.replace(/-/g, " "),
    description: metadata.description || "Blog article",
    industry: metadata.industry || "institute", // change later if needed
    html: marked(body),
  };
});

// function used in your page
export const getBlogBySlug = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug);
};