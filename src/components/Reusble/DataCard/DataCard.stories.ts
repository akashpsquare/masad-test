import type { Meta, StoryObj } from "@storybook/react";
import  DataCard  from "./DataCard";
import "../../../index.css"
const meta = {
  title: "Components/Reusable/DataCard",
  component: DataCard,
} satisfies Meta<typeof DataCard>;

export default meta;
type Story = StoryObj<typeof DataCard>;

export const Primary: Story = {
  args: {
   
  },
};