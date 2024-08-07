import React from "react";

export const H1 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<"h1">
>(({ children, className, ...props }, ref) => {
  return (
    <h1
      ref={ref}
      className={`font-caprasimo scroll-m-20 text-3xl md:text-4xl lg:text-5xl ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
});
H1.displayName = "H1";

export const H2 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<"h2">
>(({ children, className, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={`scroll-m-20 text-2xl md:text-3xl ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
});
H2.displayName = "H2";

export const H3 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<"h3">
>(({ children, className, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={`scroll-m-20 text-xl md:text-2xl font-caprasimo ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
});
H3.displayName = "H3";

export const H4 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<"h4">
>(({ children, className, ...props }, ref) => {
  return (
    <h4
      ref={ref}
      className={`scroll-m-20 text-lg md:text-xl font-caprasimo ${className}`}
      {...props}
    >
      {children}
    </h4>
  );
});
H4.displayName = "H4";

export const P = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<"p">
>(({ children, className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={`text-foreground text-lg leading-relaxed [&:not(:first-child)]:mt-4 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
});
P.displayName = "P";
