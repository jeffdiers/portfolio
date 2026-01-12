"use client";

import copperTopTreeCareScreenshot from "@/public/copper_top_tree_care_screenshot.webp";

import {
  ModalPageHeroImage,
  ModalPageTitle,
  ModalScrollBody,
} from "@/components/modal-components";
import { ModalPage } from "@/components/modal-page";
import { TECH_STACK_NAME, TechBadge } from "@/components/tech-badge";
import { H3 } from "@/components/ui/typography";

const TECH_STACK: TECH_STACK_NAME[] = [
  "react",
  "nextjs",
  "typescript",
  "tailwind",
];

export default function CopperTopTreeCarePage() {
  return (
    <ModalPage>
      <ModalPageTitle
        title="Copper Top Tree Care"
        ctaHref="https://www.coppertoptreecare.com/"
        ctaText="View Website"
      />
      <ModalScrollBody>
        <ModalPageHeroImage
          src={copperTopTreeCareScreenshot}
          alt="Copper Top Tree Care screenshot"
        />

        <p className="mt-8">
          Copper Top Tree Care is a website I built for a local tree care
          company. It is a simple website that allows the company to showcase
          their services and contact them.
        </p>

        <H3 className="mt-8">Technologies Used</H3>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {TECH_STACK.map((badge) => (
            <TechBadge key={badge} type={badge} variant="secondary" />
          ))}
        </div>
      </ModalScrollBody>
    </ModalPage>
  );
}
