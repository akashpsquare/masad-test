import type { Meta, StoryObj } from "@storybook/react";
import DataValue  from "./DataValue";
import Card from './../Card/Card';

const meta = {
  title: "Components/Reusable/DataValue",
  component: DataValue,
} satisfies Meta<typeof DataValue>;

export default meta;
type Story = StoryObj<typeof DataValue>;

export const Primary: Story = {
  args: {
   data: 'Start Date',
   value: "2025-04-23"
  },
};

export const secondary: Story = {
    args: {
     data: 'Start Date',
     value: "2025-04-23",
     customStyle: "custom_style"
    },
  };
