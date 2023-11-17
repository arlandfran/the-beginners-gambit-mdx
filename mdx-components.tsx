import { Callout } from "@/components/callout";
import { Skeleton } from "@/components/ui/skeleton";
import type { MDXComponents } from "mdx/types";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ComponentProps } from "react";

const Chessboard = dynamic(() => import("@/components/chessboard"), {
  ssr: false,
  loading: () => <Skeleton className="h-96 w-96 rounded-lg" />,
});

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    Chessboard,
    Link: ({ ...props }: ComponentProps<typeof Link>) => <Link {...props} />,
    ...components,
    Skeleton,
  };
}
