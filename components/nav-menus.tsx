"use client";

import { useTheme } from "next-themes";

import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  GlobeIcon,
  HeartFilledIcon,
  LaptopIcon,
  LinkedInLogoIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <SunIcon className="mr-2 h-5 w-5" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <MoonIcon className="mr-2 h-5 w-5" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <LaptopIcon className="mr-2 h-5 w-5" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header() {
  const [brooklynTime, setBrooklynTime] = useState("");

  useEffect(() => {
    const updateBrooklynTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        hour: "numeric" as const,
        minute: "numeric",
        hour12: true,
        timeZone: "America/New_York",
      });
      setBrooklynTime(formatter.format(now));
    };

    updateBrooklynTime();
    const timer = setInterval(updateBrooklynTime, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <header className="sticky top-0 z-50 w-full items-center">
      <div className="container flex w-full items-center justify-end p-4 px-4 md:px-12">
        <div className="mr-2 flex items-center justify-center space-x-3 font-caprasimo italic">
          <span>Brooklyn, NY</span>
          <GlobeIcon className="h-5 w-5 text-secondary" />
          <span>{brooklynTime}</span>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <div className="sticky right-0 bottom-0 left-0">
      <div className="container flex flex-col items-center justify-between gap-x-4 p-4 px-4 font-caprasimo text-lg italic md:flex-row md:px-12">
        <div className="flex items-center gap-x-4">
          <span>Thank you for visiting</span>
          <HeartFilledIcon />
        </div>
        <div className="flex items-center gap-x-4">
          <span>Stay in touch</span>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="https://www.linkedin.com/in/jeff-diers/"
                  target="_blank"
                >
                  <Button variant="ghost" size="icon">
                    <LinkedInLogoIcon className="h-4 w-4" />
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="https://github.com/jeffdiers"
                  target="_blank"
                >
                  <Button variant="ghost" size="icon">
                    <GitHubLogoIcon className="h-4 w-4" />
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="mailto:jeff.diers@gmail.com"
                  target="_blank"
                >
                  <Button variant="ghost" size="icon">
                    <EnvelopeClosedIcon className="h-4 w-4" />
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}
