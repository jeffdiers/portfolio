"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useHistory } from "@/lib/history-context";
import { useRouter } from "next/navigation";
import React from "react";
import { PropsWithChildren, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UrlObject } from "url";

export function ModalPageTitle({
  title,
  ctaHref,
  ctaText,
}: {
  title: string;
  ctaHref?: string | UrlObject;
  ctaText?: string;
}) {
  return (
    <DialogHeader className="px-6 py-3 flex-row justify-between items-center mr-12">
      <DialogTitle>{title}</DialogTitle>
      {ctaHref && ctaText && (
        <Button asChild variant="outline" className="font-sans">
          <Link href={ctaHref} target="_blank">
            {ctaText}
          </Link>
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
      "flex flex-col items-center text-center h-full overflow-y-auto p-2 sm:px-16 pb-12",
      className
    )}
    {...props}
  />
));
ModalScrollBody.displayName = "ModalScrollBody";

export function ModalPage({ children }: PropsWithChildren) {
  const router = useRouter();
  const history = useHistory();

  const path = `/`;

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Set the dialog to be open by default, only on the client side
  useEffect(() => {
    setIsDialogOpen(true);
  }, []);

  const handleClose = () => {
    setIsDialogOpen(false);
    setTimeout(() => {
      if (!history) {
        router.push(`${path}`); // if no history scroll to the segment
      } else {
        router.push(path, { scroll: false });
      }
    }, 300); // 500 milliseconds delay for animation
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleClose} modal>
      <DialogContent className="flex flex-col p-0 sm:w-[90vw] sm:h-[90vh] h-full w-screen max-w-3xl border-0 sm:border gap-0">
        {children}
      </DialogContent>
    </Dialog>
  );
}
