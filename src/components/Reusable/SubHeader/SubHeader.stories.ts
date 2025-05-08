import type { Meta, StoryObj } from "@storybook/react";
import membership from '../../../assets/Icons/primiumLogo.svg'
import edit from '../../../assets/Icons/EditIcon.svg'
import SubHeader from './SubHeader';

const meta = {
  title: "Components/Reusable/SubHeader",
  component: SubHeader,
} satisfies Meta<typeof SubHeader>;

export default meta;
type Story = StoryObj<typeof SubHeader>;

export const Primary: Story = {
  args: {
    label: 'Non Comperhansive',
    description: 'kasdlkflk lkadf asdfndof aoijdf oiajoi ujfoifjsdoi fjsoid soijasdpoijfoiasd s-oi fa-osidj foij puas oaisdf ',
    month: 10,
    memberType: 'yellow',
    price: 22,
    memberIcon: membership,
    editIcon: edit, 
  },
};
