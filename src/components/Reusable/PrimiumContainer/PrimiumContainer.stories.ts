import type { Meta, StoryObj } from "@storybook/react";
import  PrimiumContainer  from "./PrimiumContainer";


const meta = {
  title: "Components/Reusable/PrimiumContainer",
  component: PrimiumContainer,
} satisfies Meta<typeof PrimiumContainer>;

export default meta;
type Story = StoryObj<typeof PrimiumContainer>;

export const Primary: Story = {
  args: {
  
  },
};

