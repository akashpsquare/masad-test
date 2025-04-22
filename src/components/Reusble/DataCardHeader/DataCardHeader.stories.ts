import type { Meta, StoryObj } from "@storybook/react";
import DataCardHeader  from "./DataCardHeader";
import "../../../index.css"
import PlugIcon from '../DataCard/PlugIcon.svg'
const meta = {
  title: "Components/Reusble/DataCardHeader/DataCardHeader",
  component:  DataCardHeader,
} satisfies Meta<typeof  DataCardHeader>;

export default meta;
type Story = StoryObj<typeof  DataCardHeader>;

export const Story = {
  args: {
    label: "Hydrolic lift",
    icon: 'fa',
    labelTag: 'faaa',
   
  },
};


