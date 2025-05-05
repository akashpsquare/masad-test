import type { Meta, StoryObj } from "@storybook/react";
import {IconButton} from "./IconButton";

const meta = {
  title: "Components/Reusable/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const ContainedSmall: Story = {
  args: {
    variant: "contained",
    size: "small",
    iconColor: "#fff",
  },
};

export const OutlineMedium: Story = {
  args: {
    variant: "outline",
    size: "medium",
    iconColor: "#4B180F",
  },
};

export const ContainedLarge: Story = {
  args: {
    variant: "contained",
    size: "large",
    iconColor: "#fff",
  },
};

export const CustomColor: Story = {
  args: {
    variant: "outline",
    size: "medium",
    iconColor: "#4B180F",
  },
};
