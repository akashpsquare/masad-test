import type { Meta, StoryObj } from "@storybook/react";
import BeneftitContainer from "./BenefitContainer";

const meta = {
  title: "Components/Reusable/BeneftitContainer",
  component: BeneftitContainer,
} satisfies Meta<typeof BeneftitContainer>;

export default meta;
type Story = StoryObj<typeof BeneftitContainer>;

export const Primary: Story = {
  args: {
    benefit: ["Free Shipping", "24/7 Support", "Exclusive Discounts"], 
    count: 3, 
    label: 'Benefit'
  },
};

