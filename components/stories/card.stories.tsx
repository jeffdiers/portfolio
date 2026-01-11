import type { Meta, StoryObj } from "@storybook/nextjs";

import { BellIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardLink,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "../ui/badge";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

/**
 * Displays a card with header, content, and footer.
 */
const meta = {
  title: "ui/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    className: "w-96",
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default CardLink
 */
export const DefaultCardLink: Story = {
  render: () => (
    <CardLink href="jeffdiers.com">
      <CardHeader className="grow">
        <div className="flex items-start justify-between">
          <span className="font-caprasimo text-3xl">01.</span>
          <div className="flex w-16.25 flex-col items-end gap-y-2 text-right">
            <BellIcon className="h-5 w-5" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col">
        <CardTitle>Hello</CardTitle>
        <div className="my-2 flex w-full flex-wrap gap-1">
          <Badge variant="secondary">Fun badge</Badge>
        </div>
      </CardContent>
    </CardLink>
  ),
};

/**
 * The default form of the card.
 */
export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {notifications.map((notification, index) => (
          <div key={index} className="flex items-center gap-4">
            <BellIcon className="size-6" />
            <div>
              <p>{notification.title}</p>
              <p className="text-foreground/60">{notification.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button variant="link">Close</Button>
      </CardFooter>
    </Card>
  ),
};
