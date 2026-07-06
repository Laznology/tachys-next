"use client";

import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";

export const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className={className || "h-9 w-9 rounded-full"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icon
        icon="ph:sun-bold"
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Icon
        icon="ph:moon-bold"
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
