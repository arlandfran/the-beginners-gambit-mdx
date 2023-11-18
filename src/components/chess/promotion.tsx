"use client";

import { Callout } from "@/components/callout";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { HandIcon } from "@radix-ui/react-icons";
import { PopoverAnchor } from "@radix-ui/react-popover";
import { Chess, PieceSymbol, Square } from "chess.js";
import { MoveEndEvent, MoveStartEvent } from "gchessboard";
import dynamic from "next/dynamic";
import { useState } from "react";

const Chessboard = dynamic(() => import("@/components/chessboard"), {
  ssr: false,
  loading: () => (
    <Skeleton className="mx-auto aspect-square h-auto w-full max-w-sm" />
  ),
});

export function Promotion() {
  const game = new Chess("4r3/3P4/8/8/1k4K1/8/8/8 w - - 0 1");
  const [fen, setFen] = useState(game.fen());
  const [interactive, setInteractive] = useState(true);
  const [showPromotionDialog, setShowPromotionDialog] = useState(false);
  const [pendingPromotion, setPendingPromotion] = useState<[Square, Square]>();

  function handleMoveStart(e: Event) {
    const { detail } = e as CustomEvent<MoveStartEvent>;
    detail.setTargets(
      game.moves({ square: detail.from, verbose: true }).map((m) => m.to),
    );
  }

  function handleMoveEnd(e: Event) {
    const { detail } = e as CustomEvent<MoveEndEvent>;
    const isPromotion = game
      .moves({ verbose: true })
      .some(
        (move) => move.flags.indexOf("p") !== -1 && move.from === detail.from,
      );
    if (isPromotion) {
      setPendingPromotion([detail.from, detail.to]);
      setShowPromotionDialog(true);
    }
    const move = game.move({
      from: detail.from,
      to: detail.to,
      promotion: "q",
    });
    if (move === null) {
      e.preventDefault();
    }
  }

  function handleMoveFinished() {
    setFen(game.fen());
    setInteractive(false);
  }

  function handlePromotion(piece: Exclude<PieceSymbol, "p" | "k">) {
    if (pendingPromotion) {
      game.undo();
      game.move({
        from: pendingPromotion[0],
        to: pendingPromotion[1],
        promotion: piece,
      });
      setFen(game.fen());
      setPendingPromotion(undefined);
    }
    setShowPromotionDialog(false);
  }

  return (
    <Popover open={showPromotionDialog}>
      <Callout title="Try me!" icon={<HandIcon />} className="w-full">
        Promote the pawn by moving it to the end of the board or capturing the
        rook.
      </Callout>
      <PopoverAnchor asChild>
        <div className="relative flex flex-col items-center gap-4">
          <Chessboard
            fen={fen}
            interactive={interactive}
            turn="white"
            onMoveStart={handleMoveStart}
            onMoveEnd={handleMoveEnd}
            onMoveFinished={handleMoveFinished}
            animationDuration={0}
          />
          <Button
            variant="outline"
            className="w-fit self-center"
            onClick={() => {
              game.undo();
              setFen(game.fen());
              setInteractive(true);
            }}
          >
            Reset
          </Button>
        </div>
      </PopoverAnchor>
      <PopoverContent
        side="top"
        sideOffset={-80}
        className="flex w-fit animate-none gap-2"
      >
        <Button onClick={() => handlePromotion("q")} variant="outline">
          Queen
        </Button>
        <Button onClick={() => handlePromotion("r")} variant="outline">
          Rook
        </Button>
        <Button onClick={() => handlePromotion("n")} variant="outline">
          Knight
        </Button>
        <Button onClick={() => handlePromotion("b")} variant="outline">
          Bishop
        </Button>
      </PopoverContent>
    </Popover>
  );
}
