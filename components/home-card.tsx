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
    <CardLink prefetch href={href} className={cn(className, "h-56 min-w-64")}>
      <CardHeader className="grow">
        <div className="flex items-start justify-between">
          <span className="font-caprasimo text-3xl">0{number}.</span>
          <div className="flex w-16.25 flex-col items-end gap-y-2 text-right">
            <IconComponent className="h-5 w-5" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col">
        <CardTitle>{title}</CardTitle>
        <div className="my-2 flex w-full flex-wrap gap-1">
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
