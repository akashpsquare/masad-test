import type { Meta, StoryObj } from "@storybook/react";

import NavBar from './NavBar';

const meta = {
  title: "Components/Reusable/NavBar",
  component: NavBar,
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Primary: Story = {
  args: {
   
  },
};
