"use client";

import { siteLinks } from "@/config/links";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-w-fit gap-4 p-8 sm:flex sm:flex-col">
      {siteLinks.map((item, index) => (
        <section key={index} className="flex flex-col gap-1">
          <h4 className="text-sm font-semibold">{item.title}</h4>
          {item.items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "w-fit text-sm hover:underline",
                pathname === item.href
                  ? "font-medium text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {item.title}
            </Link>
          ))}
        </section>
      ))}
    </aside>
  );
}
