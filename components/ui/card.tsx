import * as React from "react";

import Link, { LinkProps } from "next/link";

import { cn } from "@/lib/utils";

const CardLink = React.forwardRef<
  HTMLAnchorElement,
  React.PropsWithChildren<
    LinkProps & {
      className?: string;
    }
  >
>(({ className, href, children, ...props }, ref) => (
  <Link
    ref={ref}
    href={href}
    className={cn(
      "group flex h-64 w-64 max-w-full flex-col rounded-xl bg-card/50 text-card-foreground shadow-md sm:rounded-2xl", // default card styles
      "hover:border-border-hover cursor-pointer text-left transition-all duration-300 hover:ring-2 hover:ring-ring hover:ring-offset-2 hover:ring-offset-background",
      className,
    )}
    {...props}
  >
    {children}
  </Link>
));
CardLink.displayName = "CardLink";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border bg-card text-card-foreground shadow-2xl sm:rounded-lg",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex w-full flex-col space-y-1 p-3", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "scroll-m-20 font-caprasimo text-2xl leading-tight tracking-tight",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  CardLink,
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
