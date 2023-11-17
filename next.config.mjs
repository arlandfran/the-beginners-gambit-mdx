import createMDX from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  swcMinify: true,
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      // Configure frontmatter data export to meta e.g. meta.title
      [remarkMdxFrontmatter, { name: "meta" }],
    ],
  },
});

export default withMDX(nextConfig);
