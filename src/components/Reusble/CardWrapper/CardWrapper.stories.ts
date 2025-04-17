import type { Meta, StoryObj } from "@storybook/react";
import  CardWrapper  from "./CardWrapper";
import "../../../index.css"


const meta = {
  title: "Components/Reusable/CardWrapper",
  component: CardWrapper,
} satisfies Meta<typeof CardWrapper>;

export default meta;
type Story = StoryObj<typeof CardWrapper>;

export const Primary: Story = {
  args: {
   
  },
};