import {
  ModalPage,
  ModalPageTitle,
  ModalScrollBody,
} from "@/components/modal-page";
import { Resume } from "@/components/resume";

export default function ResumePage() {
  return (
    <ModalPage>
      <ModalPageTitle
        title="Resume"
        ctaHref="/Jeff_Diers-Resume-2026.pdf"
        ctaText="📄 Download PDF"
        isDownload
      />
      <ModalScrollBody>
        <Resume />
      </ModalScrollBody>
    </ModalPage>
  );
}
