import Link from "next/link";

import drugWarsScreenshot from "@/public/drug_wars_screenshot.webp";

import { IconGithub } from "@/components/icons";
import {
  ModalPageHeroImage,
  ModalPageTitle,
  ModalScrollBody,
} from "@/components/modal-components";
import { ModalPage } from "@/components/modal-page";
import { TECH_STACK_NAME, TechBadge } from "@/components/tech-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { H3, P } from "@/components/ui/typography";

const FEATURES = [
  { emoji: "💊", text: "Buy and sell drugs" },
  { emoji: "🔫", text: "Buy guns" },
  { emoji: "👮‍♂️", text: "Run from the cops" },
  { emoji: "🏰", text: "Grow your empire" },
  { emoji: "💰", text: "Make a fortune" },
  { emoji: "👑", text: "Become the kingpin" },
];

function Feature({ emoji, text }: { emoji: string; text: string }) {
  return (
    <Badge variant="secondary" className="text-sm">
      {emoji}
      <span className="ml-2 italic">{text}</span>
    </Badge>
  );
}

const TECH_STACK: TECH_STACK_NAME[] = [
  "react",
  "redux",
  "typescript",
  "jest",
  "netlify",
];

export default function DrugWarsPage() {
  return (
    <ModalPage>
      <ModalPageTitle
        title="Drug Wars"
        ctaHref="https://drug-wars.netlify.app/"
        ctaText="Play Now"
      />
      <ModalScrollBody>
        <ModalPageHeroImage
          src={drugWarsScreenshot}
          alt="Drug Wars game screenshot"
        />

        <H3 className="mt-8">About the Game</H3>
        <P>
          Drug Wars is a turn-based strategy game that puts you in the shoes of
          a drug dealer. You start with a small amount of money and a few drugs,
          and you must make strategic decisions to grow your empire. This game
          has been around since the 1980s and has been played by millions of
          people around the world. This is my take on the classic.
        </P>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {FEATURES.map((feature, index) => (
            <Feature key={index} emoji={feature.emoji} text={feature.text} />
          ))}
        </div>

        <H3 className="mt-8">Gameplay</H3>
        <P>
          The game is played in rounds, with each round representing a day. The
          object is to pay off your debt to the loan shark and make a fortune.
          You can buy and sell drugs, but if you deal too heavily in drugs you
          might run into the police. The goal is to become the most powerful
          drug lord in the city.
        </P>

        <H3 className="mt-8">Technologies Used</H3>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {TECH_STACK.map((badge) => (
            <TechBadge key={badge} type={badge} variant="secondary" />
          ))}
        </div>

        <Button asChild variant="outline" className="mt-8">
          <Link href="https://github.com/jeffdiers/drugwars" target="_blank">
            <IconGithub className="mr-1 h-4 w-4" /> View GitHub
          </Link>
        </Button>
      </ModalScrollBody>
    </ModalPage>
  );
}
