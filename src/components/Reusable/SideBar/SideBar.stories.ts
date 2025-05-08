import type { Meta, StoryObj } from "@storybook/react";
import  SideBar  from "./SideBar";

const meta = {
  title: "Components/Reusable/SideBar",
  component: SideBar,
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Primary: Story = {
  args: {
   
  },
};

/* These code blocks are defining different stories for the `EmptyCard` component with various
configurations. Each `export const` block is creating a different story variation that can be
displayed in a component library like Storybook. */
// export const Secondary: Story = {
//   args: {
//     label: "Button",
//   },
// };

// export const Large: Story = {
//   args: {
//     size: "storybook_button_large",
//     label: "Button",
//   },
// };

// export const Small: Story = {
//   args: {
//     size: "storybook_button_small",
//     label: "Button",
//   },
// };
