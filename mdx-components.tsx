import { Callout } from "@/components/callout";
import { Castling } from "@/components/chess/castling";
import { EnPassant } from "@/components/chess/en-passant";
import { PlayMoves } from "@/components/chess/play-moves";
import { Promotion } from "@/components/chess/promotion";
import { Skeleton } from "@/components/ui/skeleton";
import type { MDXComponents } from "mdx/types";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ComponentProps, HTMLAttributes } from "react";

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
    EnPassant,
    Link: ({ ...props }: ComponentProps<typeof Link>) => <Link {...props} />,
    // Chessboard Markers
    CircleMarker: ({ slot, ...props }: HTMLAttributes<SVGElement>) => (
      <div slot={slot}>
        <svg
          viewBox="0 0 10 10"
          stroke="green"
          strokeWidth="0.5"
          fill="none"
          {...props}
        >
          <ellipse cx="5" cy="5" rx="4" ry="4" />
        </svg>
      </div>
    ),
    CheckMarker: ({ slot, ...props }: HTMLAttributes<HTMLDivElement>) => (
      <div slot={slot} className="check-marker" {...props} />
    ),
    MoveMarker: ({ slot, ...props }: HTMLAttributes<SVGElement>) => (
      <div slot={slot}>
        <svg viewBox="0 0 10 10" {...props}>
          <ellipse cx="5" cy="5" rx="2" ry="2" opacity="0.6" />
        </svg>
      </div>
    ),
    DangerMarker: ({ slot, ...props }: HTMLAttributes<HTMLDivElement>) => (
      <div slot={slot} className="h-full w-full bg-red-400/75" {...props} />
    ),
    PlayMoves,
    Promotion,
    Skeleton,
    ...components,
  };
}
