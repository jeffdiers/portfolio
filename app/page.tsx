import { HomeCard, HomeCardProps } from "@/components/home-card";
import { IconGamepadLine } from "@/components/icons";
import { H1 } from "@/components/ui/typography";
import {
  BlendingModeIcon,
  DashboardIcon,
  FileTextIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

const cardLinksData: Omit<HomeCardProps, "number">[] = [
  {
    href: "/about-me",
    icon: PersonIcon,
    title: "About Me",
    badges: ["Bio", "Contact", "My stack"],
  },
  {
    href: "/resume",
    icon: FileTextIcon,
    title: "Resume",
    badges: ["PDF", "Download"],
  },
  {
    href: "/drug-wars",
    icon: IconGamepadLine,
    title: "Drug Wars",
    badges: ["Game", "Development"],
  },
  {
    href: "/color-zen",
    icon: BlendingModeIcon,
    title: "Color Zen",
    badges: ["UI", "Design", "Development"],
  },
  {
    href: "/storybook",
    icon: DashboardIcon,
    title: "Storybook",
    badges: ["UI", "Design", "Development"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <div className="space-y-0 px-4 md:px-12">
        <H1>Hello, my name is Jeff.</H1>
        <span className="font-caprasimo text-lg lg:text-xl text-destructive">
          I am a Software Engineer based in NYC.
        </span>
      </div>

      {/* Card Links */}
      <div className="flex overflow-x-auto flex-row space-x-4 pt-1 md:pt-4 h-64 hide-scrollbar pr-4 md:pr-12">
        {cardLinksData.map((card, index) => (
          <HomeCard
            key={index}
            number={index + 1}
            href={card.href}
            icon={card.icon}
            title={card.title}
            badges={card.badges}
            className={
              index === 0
                ? "ml-4 md:ml-12"
                : index === cardLinksData.length - 1
                  ? "mr-4 md:mr-12"
                  : ""
            }
          />
        ))}
      </div>
    </div>
  );
}
