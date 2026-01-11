import Link from "next/link";

import {
  ModalPage,
  ModalPageTitle,
  ModalScrollBody,
} from "@/components/modal-page";
import { Resume } from "@/components/resume";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  return (
    <ModalPage>
      <ModalPageTitle title="Resume" />
      <ModalScrollBody>
        <Button asChild variant="outline" className="text-xl">
          <Link href="/Jeff_Diers-Resume-2026.pdf" download>
            📄 Download PDF
          </Link>
        </Button>
        <div className="rounded-lg p-4 mt-8 border">
          <Resume />
        </div>
      </ModalScrollBody>
    </ModalPage>
  );
}
