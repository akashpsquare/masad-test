import type { Meta, StoryObj } from "@storybook/react";
import  MessageContainer  from "./MessageContainer";

const meta = {
  title: "Components/Reusable/MessageContainer",
  component: MessageContainer,
} satisfies Meta<typeof MessageContainer>;

export default meta;
type Story = StoryObj<typeof MessageContainer>;

export const Primary: Story = {
  args: {
eventName: "Message",
message: "Lets got don't miss this deal"
  },
};

