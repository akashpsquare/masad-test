import type { Meta, StoryObj } from "@storybook/react";
import  Datacard  from "./DataCard";

const meta = {
  title: "Components/Reusable/DataCard",
  component: Datacard,
} satisfies Meta<typeof Datacard>;

export default meta;
type Story = StoryObj<typeof Datacard>;

export const Primary: Story = {
  args: {
   
  },
};

