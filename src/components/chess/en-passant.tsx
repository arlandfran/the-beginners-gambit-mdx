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

export function EnPassant() {
  const game = new Chess(
    "rnbqkbnr/ppp2ppp/4p3/3pP3/8/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2",
  );
  const [fen, setFen] = useState(game.fen());
  const [interactive, setInteractive] = useState(true);
  const [error, setError] = useState(false);

  function handleMoveStart(e: Event) {
    const { detail } = e as CustomEvent<MoveStartEvent>;
    detail.setTargets(
      game.moves({ square: detail.from, verbose: true }).map((m) => m.to),
    );
  }

  function handleMoveEnd(e: Event) {
    const { detail } = e as CustomEvent<MoveEndEvent>;
    if (detail.from !== "e5") {
      e.preventDefault();
      setError(true);
      return;
    }
    const move = game.move({
      from: detail.from,
      to: detail.to,
    });
    if (move === null) {
      e.preventDefault();
    }
    setError(false);
  }

  function handleMoveFinished() {
    setFen(game.fen());
    setInteractive(false);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <Callout title="Try me!" icon={<HandIcon />} className="my-0 w-full">
        Drag the white pawn from E5 to D6 to capture the black D5 pawn.
      </Callout>
      <Chessboard
        fen={fen}
        interactive={interactive}
        turn="white"
        onMoveStart={handleMoveStart}
        onMoveEnd={handleMoveEnd}
        onMoveFinished={handleMoveFinished}
      >
        {error && <div slot="e5" className="h-full w-full bg-yellow-400/75" />}
      </Chessboard>
      <Button
        variant="outline"
        className="w-fit"
        onClick={() => {
          game.undo();
          setFen(game.fen());
          setInteractive(true);
          setError(false);
        }}
      >
        Reset
      </Button>
    </div>
  );
}
