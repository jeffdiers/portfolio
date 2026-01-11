"use client";

import { UrlObject } from "url";

import React from "react";
import { PropsWithChildren } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useHistory } from "@/lib/history-context";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function ModalPageTitle({
  title,
  ctaHref,
  ctaText,
  isDownload,
}: {
  title: string;
  ctaHref?: string | UrlObject;
  ctaText?: string;
  isDownload?: boolean;
}) {
  return (
    <DialogHeader className="flex-row items-center justify-between border-b px-6 py-3 pr-24">
      <DialogTitle>{title}</DialogTitle>
      {ctaHref && ctaText && (
        <Button asChild variant="outline" className="font-sans">
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

export const ModalScrollBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-full flex-col items-center overflow-y-auto p-2 pb-12 text-center sm:px-16",
      className,
    )}
    {...props}
  />
));
ModalScrollBody.displayName = "ModalScrollBody";

export function ModalPage({ children }: PropsWithChildren) {
  const router = useRouter();
  const history = useHistory();

  const path = `/`;

  const handleClose = (open: boolean) => {
    if (open) return; // only handle close

    setTimeout(() => {
      if (!history) {
        router.push(path); // if no history scroll to the segment
      } else {
        router.push(path, { scroll: false });
      }
    }, 300);
  };

  return (
    <Dialog defaultOpen onOpenChange={handleClose} modal>
      <DialogContent className="flex h-full w-screen max-w-3xl flex-col gap-0 border-0 p-0 sm:h-[90vh] sm:w-[90vw] sm:border">
        {children}
      </DialogContent>
    </Dialog>
  );
}
