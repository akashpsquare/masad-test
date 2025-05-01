import type { Meta, StoryObj } from "@storybook/react";
import Buttons from "./Buttons";

const meta = {
  title: "Components/Reusable/Button",
  component: Buttons,
} satisfies Meta<typeof Buttons>;

export default meta;
type Story = StoryObj<typeof Buttons>;

export const Primary: Story = {
  args: {
    label: "Primary Button", 
    variant: "primary", 
    iconPosition: "left", 
    onClick: () => alert("Button clicked!"),
  },
};
