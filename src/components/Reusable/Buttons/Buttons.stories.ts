import type { Meta, StoryObj } from "@storybook/react";
import Buttons from "./Buttons";
import BackIcon from "../../../assets/Icons/BackIcon.svg"

const meta = {
  title: "Components/Reusable/Button",
  component: Buttons,
} satisfies Meta<typeof Buttons>;

export default meta;
type Story = StoryObj<typeof Buttons>;

export const Primary: Story = {
  args: {
    label: "Primary Button", 
    icon: BackIcon,
    variant: "primary", 
    iconPosition: "left", 
    onClick: () => alert("Button clicked!"),
  },
};

export const secondary: Story = {
  args: {
    variant: "secondary", 
    label: "Button", 
    icon: BackIcon,
    iconPosition: "left", 
    onClick: () => alert("Button clicked!"),
  },
};
