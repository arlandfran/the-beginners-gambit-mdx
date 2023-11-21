"use client";

import { buttonVariants } from "@/components/ui/button";
import { siteLinks } from "@/config/links";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

function getPager(slug: string | null): {
  prev: { title: string; href: string } | null;
  next: { title: string; href: string } | null;
} | null {
  const flattenedLinks = siteLinks.flatMap((obj) => obj.items);
  const activeIndex = flattenedLinks.findIndex((link) => slug === link.href);
  if (activeIndex === -1) {
    return null;
  }
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null;
  return {
    prev,
    next,
  };
}

export function Pager() {
  const pathname = usePathname();
  const pager = getPager(pathname);

  if (!pager) {
    return null;
  }

  return (
    <div className="mt-16 flex flex-row items-center justify-between">
      {pager?.prev?.href && (
        <Link
          href={pager.prev.href}
          className={buttonVariants({ variant: "outline" })}
        >
          <ChevronLeftIcon className="mr-2 h-4 w-4" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next?.href && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: "outline" }), "ml-auto")}
        >
          {pager.next.title}
          <ChevronRightIcon className="ml-2 h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
