"use client";

import { useEffect, useState } from "react";
import { PropsWithChildren } from "react";

import { useRouter } from "next/navigation";

import { useHistory } from "@/lib/history-context";

import { Dialog, DialogContent } from "@/components/ui/dialog";

export function ModalPage({ children }: PropsWithChildren) {
  const router = useRouter();
  const history = useHistory();
  const path = "/";
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // Set the dialog to be open by default, only on the client side
  useEffect(() => {
    // eslint-disable-next-line
    setIsDialogOpen(true);
  }, []);

  const handleClose = () => {
    setIsDialogOpen(false);
    setTimeout(() => {
      if (!history) {
        router.push(path);
      } else {
        router.push(path, { scroll: false });
      }
    }, 300);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleClose} modal>
      <DialogContent className="flex h-full w-screen max-w-3xl flex-col gap-0 rounded-none border-0 p-0 sm:h-[90vh] sm:w-[90vw] sm:rounded-2xl sm:border">
        {children}
      </DialogContent>
    </Dialog>
  );
}
