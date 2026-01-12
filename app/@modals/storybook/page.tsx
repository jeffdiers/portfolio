import { ModalPageTitle, ModalScrollBody } from "@/components/modal-components";
import { ModalPage } from "@/components/modal-page";

export default function StorybookPage() {
  return (
    <ModalPage>
      <ModalPageTitle
        title="Storybook"
        ctaHref="https://main--66a50784f23a062eb31464f4.chromatic.com/"
        ctaText="View Storybook"
      />
      <ModalScrollBody>
        <p className="mt-8">
          Here is a link to my Storybook where you can view some of the
          components I used to build this site. Storybook is a tool for
          developing UI components in isolation. It streamlines UI development,
          testing, and documentation. Storybook runs outside of your app. This
          allows you to develop UI components in isolation, which can improve
          component reuse, testability, and development speed.
        </p>
      </ModalScrollBody>
    </ModalPage>
  );
}
