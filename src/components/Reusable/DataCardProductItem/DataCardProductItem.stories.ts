import type { Meta, StoryObj } from "@storybook/react";
import  DataCardProductItem  from "./DataCardProductItem";

const meta = {
  title: "Components/Reusable/DataCardProductItem",
  component: DataCardProductItem,
} satisfies Meta<typeof DataCardProductItem>;

export default meta;
type Story = StoryObj<typeof DataCardProductItem>;

export const Primary: Story = {
  args: {
   id: 1,
   name: 'Passenger',
   price: '100',
  },
};

