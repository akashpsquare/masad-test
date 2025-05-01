import type { Meta, StoryObj } from "@storybook/react";
import  EmptyCard  from "./EmptyCard";
import Icon from '../../../assets/Icons/PlusIcon.svg'
const meta = {
  title: "Components/Reusable/EmptyCard",
  component: EmptyCard,
} satisfies Meta<typeof EmptyCard>;

export default meta;
type Story = StoryObj<typeof EmptyCard>;

export const Primary: Story = {
  args: {
    icon: Icon,
    label: 'Add Products to the list'
  },
};

