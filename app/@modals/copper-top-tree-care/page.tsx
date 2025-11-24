"use client";

import {
  ModalPage,
  ModalPageTitle,
  ModalScrollBody,
} from "@/components/modal-page";
import { TECH_STACK_NAME, TechBadge } from "@/components/tech-badge";
import { Button } from "@/components/ui/button";
import { H3 } from "@/components/ui/typography";
import Image from "next/image";
import copperTopTreeCareScreenshot from "@/public/copper_top_tree_care_screenshot.webp";

const TECH_STACK: TECH_STACK_NAME[] = [
  "react",
  "nextjs",
  "typescript",
  "tailwind",
];

export default function CopperTopTreeCarePage() {
  return (
    <ModalPage>
      <ModalPageTitle>Copper Top Tree Care</ModalPageTitle>
      <ModalScrollBody>
        <Button asChild variant="outline" className="text-xl">
          <a href="https://www.coppertoptreecare.com/" target="_blank">
            🌳 View Website
          </a>
        </Button>

        <Image
          src={copperTopTreeCareScreenshot}
          alt="Copper Top Tree Care screenshot"
          width={1550}
          height={912}
          className="rounded-xl mt-8"
        />

        <p className="mt-8">
          Copper Top Tree Care is a website I built for a local tree care
          company. It is a simple website that allows the company to showcase
          their services and contact them.
        </p>

        <H3 className="mt-8">Technologies Used</H3>
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {TECH_STACK.map((badge) => (
            <TechBadge key={badge} type={badge} variant="secondary" />
          ))}
        </div>
      </ModalScrollBody>
    </ModalPage>
  );
}
