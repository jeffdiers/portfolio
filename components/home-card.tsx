import { cn } from "@/lib/utils";

import { IconType } from "./icons/types";
import { Badge } from "./ui/badge";
import { CardContent, CardHeader, CardLink, CardTitle } from "./ui/card";

export interface HomeCardProps {
  number: string | number;
  href: string;
  icon: IconType;
  title: string;
  badges: string[];
  className?: string;
}

export function HomeCard({
  number,
  href,
  icon: IconComponent,
  title,
  badges,
  className,
}: HomeCardProps) {
  return (
    <CardLink href={href} className={cn(className, "min-w-64 h-56")}>
      <CardHeader className="grow">
        <div className="flex justify-between items-start">
          <span className="font-caprasimo text-3xl">0{number}.</span>
          <div className="flex flex-col items-end text-right w-[65px] gap-y-2">
            <IconComponent className="h-5 w-5 " />
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col">
        <CardTitle>{title}</CardTitle>
        <div className="flex flex-wrap gap-1 my-2 w-full">
          {badges.map((badge, index) => (
            <Badge key={index} variant="secondary">
              {badge}
            </Badge>
          ))}
        </div>
      </CardContent>
    </CardLink>
  );
}
