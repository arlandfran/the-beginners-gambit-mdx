"use client";

import { createComponent } from "@lit/react";
import { GChessBoardElement } from "gchessboard";
import * as React from "react";

const GChessboard = createComponent({
  tagName: "g-chess-board",
  elementClass: GChessBoardElement,
  react: React,
  events: {
    onMoveStart: "movestart",
    onMoveEnd: "moveend",
    onMoveFinished: "movefinished",
    onMoveCancel: "movecancel",
  },
});

export default function Chessboard({
  className,
  ...props
}: React.ComponentProps<typeof GChessboard>) {
  return (
    <div className="mx-auto w-fit max-w-sm overflow-hidden rounded-lg">
      <GChessboard {...props} />
    </div>
  );
}
