"use client";

import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { useSelectedLayoutSegments } from "next/navigation";

export function Breadcrumbs() {
  const segments = useSelectedLayoutSegments();

  // if 404
  if (segments[0] === "__DEFAULT__") {
    return null;
  }

  // if '/' route
  if (segments.length === 0) {
    return (
      <div className="mb-4 flex items-center gap-2">
        Docs
        <ChevronRightIcon />
        <span className="font-bold">Introduction</span>
      </div>
    );
  }

  return (
    <div className="mb-4 flex gap-2 capitalize">
      {segments.map((segment, index) => {
        return (
          <span
            key={index}
            className={cn(
              "flex items-center gap-2",
              index === segments.length - 1 ? "font-bold" : "",
            )}
          >
            {segment.split("-").join(" ")}
            {index !== segments.length - 1 ? <ChevronRightIcon /> : null}
          </span>
        );
      })}
    </div>
  );
}
