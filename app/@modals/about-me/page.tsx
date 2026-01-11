import meAndBernie from "@/public/me_and_bernie.webp";

import Image from "next/image";

import {
  ModalPage,
  ModalPageTitle,
  ModalScrollBody,
} from "@/components/modal-page";
import { MY_STACK, TechBadge } from "@/components/tech-badge";
import { H3, P } from "@/components/ui/typography";

export default function AboutMePage() {
  return (
    <ModalPage>
      <ModalPageTitle title="About Me" />
      <ModalScrollBody>
        <Image
          src={meAndBernie}
          alt="Picture of Jeff Diers and his dog Bernie"
          className="rounded-full"
          priority
          placeholder="blur"
        />

        <H3 className="mt-8">Jeff Diers</H3>

        <P>
          I’m a senior software engineer who loves building clean, scalable
          product experiences — especially the stuff that makes teams fast:
          design systems, thoughtful UI architecture, and the tooling that keeps
          quality high as a product grows. I’m full-stack capable, but I lean
          front-end when the work is about craft, performance, and consistency.
        </P>

        <div className="mt-8 mb-2 flex flex-col items-center gap-y-3">
          <H3>Technologies I Work With</H3>
          <div className="flex flex-wrap justify-center gap-2">
            {Object.keys(MY_STACK).map((badge) => (
              <TechBadge
                key={badge}
                type={badge as keyof typeof MY_STACK}
                variant="secondary"
              />
            ))}
          </div>
        </div>

        <P>
          I’m currently a Senior Software Engineer at Posh (since Dec 2024),
          where I build across web and mobile on a platform that helps people
          discover events, gather IRL, and manage ticketing at scale. A big part
          of my work is building and maintaining shared UI foundations —
          cross-platform component libraries, token-driven theming, and the
          TypeScript infrastructure that keeps a large monorepo cohesive.
        </P>

        <P>
          I’ve worked across startups and larger orgs, shipping customer-facing
          features end-to-end and improving developer velocity through better
          patterns, performance wins, and strong collaboration with design and
          product. I care a lot about accessibility, polish, and building
          systems that don’t crumble when the team and codebase get bigger.
        </P>

        <P>
          Outside of work, I’m into city planning and walkable urban design,
          photography, and any excuse to go explore a new neighborhood. When I’m
          not coding, I’m probably hanging with my dog Bernie 🐶.
        </P>
      </ModalScrollBody>
    </ModalPage>
  );
}
