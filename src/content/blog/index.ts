import { marked } from "marked";

// auto import ALL markdown files in this folder
const modules = import.meta.glob("./*.md", { as: "raw", eager: true });

export const blogPosts = Object.entries(modules).map(([path, content]) => {
  // extract filename → slug
  const slug = path.split("/").pop()?.replace(".md", "") || "";

  // optional: clean slug (recommended)
  const cleanSlug = slug.toLowerCase();

  return {
    slug: cleanSlug,
    title: cleanSlug.replace(/-/g, " "),
    description: "Blog article",
    industry: "institute", // change later if needed
    html: marked(content as string),
  };
});

// function used in your page
export const getBlogBySlug = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug);
};