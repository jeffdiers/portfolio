import * as React from "react";

import Link, { LinkProps } from "next/link";

import { cn } from "@/lib/utils";

type CardLinkProps = React.PropsWithChildren<
  LinkProps & {
    className?: string;
  }
>;

const CardLink = React.forwardRef<HTMLAnchorElement, CardLinkProps>(
  ({ className, href, children, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          "group flex h-64 w-64 max-w-full flex-col rounded-xl border bg-card/75 text-card-foreground shadow-md sm:rounded-2xl",
          "cursor-pointer text-left",

          // Glow + ring
          "transition-all duration-300 hover:ring-2 hover:ring-ring hover:ring-offset-2 hover:ring-offset-transparent",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:outline-hidden",

          // Springy motion
          "active:translate-y-0 active:scale-[0.98]",

          className,
        )}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

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
