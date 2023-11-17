"use client";

import { buttonVariants } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  return (
    <ToggleGroup
      type="single"
      defaultValue="system"
      aria-label="Theme toggle"
      onValueChange={(value) => setTheme(value)}
    >
      <ToggleGroupItem
        className={buttonVariants({
          variant: "outline",
          size: "icon",
          class:
            "rounded-l-md rounded-r-none border-none focus:relative data-[state=on]:bg-accent",
        })}
        value="light"
        aria-label="Light theme"
      >
        <SunIcon />
      </ToggleGroupItem>
      <ToggleGroupItem
        className={buttonVariants({
          variant: "outline",
          size: "icon",
          class:
            "rounded-none border-none focus:relative data-[state=on]:bg-accent",
        })}
        value="dark"
        aria-label="Dark theme"
      >
        <MoonIcon />
      </ToggleGroupItem>
      <ToggleGroupItem
        className={buttonVariants({
          variant: "outline",
          size: "icon",
          class:
            "rounded-l-none rounded-r-md border-none focus:relative data-[state=on]:bg-accent",
        })}
        value="system"
        aria-label="System theme"
      >
        <DesktopIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
