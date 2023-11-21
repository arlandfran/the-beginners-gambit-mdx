"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteLinks } from "@/config/links";
import { EnterIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "./ui/button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={buttonVariants({
          variant: "ghost",
          size: "icon",
          class: "sm:hidden",
        })}
      >
        <EnterIcon />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="ml-6 gap-4">
          <SheetTitle className="text-left" aria-label="The Beginner's Gambit">
            The Beg<span className="font-serif">&#9823;&#xFE0E;</span>
            nner&apos;s Gambit
          </SheetTitle>
          <SheetDescription asChild>
            <div className="flex flex-col gap-6 text-left">
              {siteLinks.map((item, index) => (
                <section key={index} className="flex flex-col gap-2">
                  <h4 className="text-base font-medium">{item.title}</h4>
                  {item.items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="w-fit text-foreground hover:underline"
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </section>
              ))}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
