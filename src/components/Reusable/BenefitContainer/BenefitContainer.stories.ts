import type { Meta, StoryObj } from "@storybook/react";
import  BeneftitContainer  from "./BenefitContainer";

const meta = {
  title: "Components/Reusable/Buttons",
  component: BeneftitContainer,
} satisfies Meta<typeof BeneftitContainer>;

export default meta;
type Story = StoryObj<typeof BeneftitContainer>;

export const Primary: Story = {
  args: {
   
  },
};
