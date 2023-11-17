import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { ComponentProps } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Link: ({ ...props }: ComponentProps<typeof Link>) => <Link {...props} />,
    ...components,
  };
}
