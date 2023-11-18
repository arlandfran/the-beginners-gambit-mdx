import { Callout } from "@/components/callout";
import { Castling } from "@/components/chess/castling";
import { Skeleton } from "@/components/ui/skeleton";
import type { MDXComponents } from "mdx/types";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ComponentProps } from "react";

const Chessboard = dynamic(() => import("@/components/chessboard"), {
  ssr: false,
  loading: () => (
    <Skeleton className="mx-auto aspect-square h-auto w-full max-w-sm" />
  ),
});

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    Castling,
    Chessboard,
    Link: ({ ...props }: ComponentProps<typeof Link>) => <Link {...props} />,
    Skeleton,
    ...components,
  };
}
