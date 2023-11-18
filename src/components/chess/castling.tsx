"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { HandIcon } from "@radix-ui/react-icons";
import { Chess } from "chess.js";
import { MoveEndEvent, MoveStartEvent } from "gchessboard";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Callout } from "../callout";

const Chessboard = dynamic(() => import("@/components/chessboard"), {
  ssr: false,
  loading: () => <Skeleton className="aspect-square h-auto w-full max-w-sm" />,
});

export function Castling() {
  const game = new Chess("3k4/8/8/8/8/8/8/R3K2R w KQ - 0 1");
  const [fen, setFen] = useState(game.fen());
  const [interactive, setInteractive] = useState(true);

  function handleMoveStart(e: Event) {
    const { detail } = e as CustomEvent<MoveStartEvent>;
    detail.setTargets(["c1", "g1"]);
  }

  function handleMoveEnd(e: Event) {
    const { detail } = e as CustomEvent<MoveEndEvent>;
    const move = game.move({
      from: detail.from,
      to: detail.to,
    });
    if (move === null) {
      e.preventDefault();
    }
  }

  function handleMoveFinished() {
    setFen(game.fen());
    setInteractive(false);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <Callout title="Try me!" icon={<HandIcon />} className="my-0 w-full">
        Drag the king to C1 or G1 to castle in that direction
      </Callout>
      <Chessboard
        fen={fen}
        interactive={interactive}
        turn="white"
        onMoveStart={handleMoveStart}
        onMoveEnd={handleMoveEnd}
        onMoveFinished={handleMoveFinished}
      />
      <Button
        variant="outline"
        className="w-fit"
        onClick={() => {
          game.undo();
          setFen(game.fen());
          setInteractive(true);
        }}
      >
        Reset
      </Button>
    </div>
  );
}
