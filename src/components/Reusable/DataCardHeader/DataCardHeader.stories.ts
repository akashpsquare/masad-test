import type { Meta, StoryObj } from "@storybook/react";
import DataCardHeader from "./DataCardHeader";
import "../../../index.css";
// import PlusIcon from "../../../assets/Icons/PlusIcon.svg";
import HeartIcon from "../../../assets/Icons/HeartIcon.svg"
import FormIcon from "../../../assets/Icons/Form.svg"
const meta: Meta<typeof DataCardHeader> = {
  title: "Components/Reusable/DataCardHeader",
  component: DataCardHeader,
};

export default meta;

type Story = StoryObj<typeof DataCardHeader>;

export const Product: Story = {
  args: {
    variant: "product",
    headericon: HeartIcon,
    headertitle: "Product Header",
    headerlabel: "This is a product header label",
    headercount: 5,
    headerlabeltag: "Product Tag",
    handelAddButton: () => alert("Add button clicked!"),
  },
};

export const Benefit: Story = {
  args: {
    variant: "benefit",
    headericon: HeartIcon,
    headertitle: "Benefit Header",
    headerlabel: "This is a benefit header label",
    headercount: 3,
    headerlabeltag: "Benefit Tag",
    handelAddButton: () => alert("Add button clicked!"),
  },
};

export const Service: Story = {
  args: {
    variant: "service",
    headericon: HeartIcon,
    headertitle: "Service Header",
    headerlabel: "This is a service header label",
    headercount: 10,
    headerlabeltag: "Service Tag",
  },
};

export const Form: Story = {
  args: {
    variant: "form",
    headericon: FormIcon,
    headertitle: "Form Header",
    headerlabel: "This is a form header label",
  },
};

export const Discount: Story = {
  args: {
    variant: "discount",
    headericon: HeartIcon,
    headertitle: "Discount Header",
    headerlabel: "This is a discount header label",
    headercount: 2,
    headerlabeltag: "Discount Tag",
    handelAddButton: () => alert("Discount button clicked!"),
  },
};