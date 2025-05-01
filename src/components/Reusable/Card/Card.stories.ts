import type { Meta, StoryObj } from "@storybook/react";
import Card  from "./Card";
import "../../../index.css"

const meta = {
  title: "Components/Reusble/Card",
  component:  Card,
} satisfies Meta<typeof  Card>;

export default meta;
type Story = StoryObj<typeof  Card>;

export const Story = {
  args: {
  
  
  },
};


