"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import tocbot from "tocbot";

export function TableOfContents() {
  const pathname = usePathname();

  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".content",
      headingSelector: "h2, h3",
      listClass: "flex flex-col gap-1",
      listItemClass: "w-fit",
      activeLinkClass: "font-medium text-foreground",
      headingsOffset: 160,
      scrollSmooth: false,
      hasInnerContainers: true,
    });

    return () => tocbot.destroy();
  }, [pathname]);

  return (
    <div className="hidden w-80 xl:block">
      <aside className="sticky top-24 flex flex-col gap-1 px-8 text-sm">
        <span className="font-semibold">On this page</span>
        <div className="toc text-muted-foreground"></div>
      </aside>
    </div>
  );
}
