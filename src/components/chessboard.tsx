"use client";

import { createComponent } from "@lit/react";
import { GChessBoardElement } from "gchessboard";
import * as React from "react";

const GChessboard = createComponent({
  tagName: "g-chess-board",
  elementClass: GChessBoardElement,
  react: React,
});

export default function Chessboard({
  className,
  ...props
}: React.ComponentProps<typeof GChessboard>) {
  return (
    <div className="w-fit max-w-md overflow-hidden rounded-lg">
      <GChessboard coordinates="outside" {...props} />
    </div>
  );
}
