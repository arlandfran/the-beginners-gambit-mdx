import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="hidden font-semibold sm:block"
          aria-label="The Beginner's Gambit"
        >
          The Beg<span className="font-serif">&#9823;&#xFE0E;</span>
          nner&apos;s Gambit
        </Link>
        <MobileNav />
        <div className="flex h-9 items-center gap-2">
          <a
            href="https://github.com/arlandfran/the-beginners-gambit"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <GitHubLogoIcon />
          </a>
          <Separator orientation="vertical" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
