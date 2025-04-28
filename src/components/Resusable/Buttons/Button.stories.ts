import type { Meta, StoryObj } from "@storybook/react";
import  Button  from "./Buttons";

const meta = {
  title: "Components/Reusable/Buttons",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
   
  },
};

