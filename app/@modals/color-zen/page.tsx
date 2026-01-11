import colorZenScreenshot from "@/public/color_zen_screenshot.webp";

import Image from "next/image";
import Link from "next/link";

import { IconGithub } from "@/components/icons";
import {
  ModalPage,
  ModalPageTitle,
  ModalScrollBody,
} from "@/components/modal-page";
import { TECH_STACK_NAME, TechBadge } from "@/components/tech-badge";
import { Button } from "@/components/ui/button";
import { H3 } from "@/components/ui/typography";

const TECH_STACK: TECH_STACK_NAME[] = [
  "react",
  "nextjs",
  "typescript",
  "tailwind",
  "prisma",
];

export default function ColorZenPage() {
  return (
    <ModalPage>
      <ModalPageTitle
        title="Color Zen"
        ctaHref="https://color-zen-cyan.vercel.app/"
        ctaText="View Color Zen"
      />
      <ModalScrollBody>
        <Image
          src={colorZenScreenshot}
          alt="Color Zen screenshot"
          className="rounded-xl"
          priority
          placeholder="blur"
        />

        <H3 className="mt-8">About the Project</H3>
        <p className="mt-8">
          Color Zen is a color palette generator that I built using React,
          Prisma, Tailwind, and Next.js. It is a very basic app that generates a
          random palette of colors and save it. The application is built with a
          mobile-first design in mind and is fully responsive. The app is hosted
          on Vercel.
        </p>

        <H3 className="mt-8">Technologies Used</H3>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {TECH_STACK.map((badge) => (
            <TechBadge key={badge} type={badge} variant="secondary" />
          ))}
        </div>

        <Button asChild variant="outline" className="mt-8">
          <Link href="https://github.com/jeffdiers/color-zen" target="_blank">
            <IconGithub className="mr-1 h-4 w-4" /> View GitHub
          </Link>
        </Button>
      </ModalScrollBody>
    </ModalPage>
  );
}
