"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import { useState } from "react";

const Chessboard = dynamic(() => import("@/components/chessboard"), {
  ssr: false,
  loading: () => (
    <Skeleton className="mx-auto aspect-square h-auto w-full max-w-sm" />
  ),
});

export function PlayMoves(moves: string[]) {
  const [fen, setFen] = useState(moves[0]);
  const [movesIndex, setMovesIndex] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <Chessboard fen={fen} interactive={false} />
      <div className="flex gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            setFen(moves[movesIndex - 1]);
            setMovesIndex((movesIndex) => movesIndex - 1);
          }}
          disabled={movesIndex === 0}
        >
          <ArrowLeftIcon />
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setFen(moves[0]);
            setMovesIndex(0);
          }}
        >
          Reset
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            setFen(moves[movesIndex + 1]);
            setMovesIndex((movesIndex) => movesIndex + 1);
          }}
          disabled={movesIndex === Object.keys(moves).length - 1}
        >
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );
}
