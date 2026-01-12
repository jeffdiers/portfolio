import { UrlObject } from "url";

import React, { ReactElement } from "react";

import Image, { type ImageProps } from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function ModalPageTitle({
  title,
  ctaHref,
  ctaText,
  isDownload,
}: {
  title: string | ReactElement;
  ctaHref?: string | UrlObject;
  ctaText?: string;
  isDownload?: boolean;
}) {
  return (
    <DialogHeader className="flex-row items-center justify-between border-b px-6 py-3 pr-12">
      <DialogTitle className="text-3xl">{title}</DialogTitle>
      {ctaHref && ctaText && (
        <Button asChild className="font-sans">
          {isDownload ? (
            <Link href={ctaHref} download>
              {ctaText}
            </Link>
          ) : (
            <Link href={ctaHref} target="_blank">
              {ctaText}
            </Link>
          )}
        </Button>
      )}
    </DialogHeader>
  );
}

export function ModalPageHeroImage({ className, alt, ...props }: ImageProps) {
  return (
    <Image
      {...props}
      className={cn("rounded-xl", className)}
      alt={alt}
      preload
      placeholder="blur"
    />
  );
}

export const ModalScrollBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-full flex-col items-center overflow-y-auto p-3 py-8 text-center sm:px-8",
      className,
    )}
    {...props}
  />
));
ModalScrollBody.displayName = "ModalScrollBody";
