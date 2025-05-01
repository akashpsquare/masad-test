import type { Meta, StoryObj } from "@storybook/react";
import  EmptyCard  from "./EmptyCard";

const meta = {
  title: "Components/Reusable/EmptyCard",
  component: EmptyCard,
} satisfies Meta<typeof EmptyCard>;

export default meta;
type Story = StoryObj<typeof EmptyCard>;

export const Primary: Story = {
  args: {
    
  },
};

