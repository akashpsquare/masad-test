import { Meta, StoryObj } from "@storybook/react";
import AddForm from "./AddForm";

const meta: Meta<typeof AddForm> = {
  title: "Components/Reusable/AddForm",
  component: AddForm,
  argTypes: {
    label: { control: "text" },
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    status: {
      control: "select",
      options: ["default", "update", "delete"],
    },
    headingLabel: { control: "text" },
    summaryContent: { control: "text" },
    isSummary: { control: "boolean" },
    isDiscard: { control: "boolean" },
    inputError: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof AddForm>;

export const DefaultAddForm: Story = {
  args: {
    label: "Add",
    variant: "primary",
    status: "default",
    headingLabel: "Benefits",
    summaryContent: "Benefits",
    isSummary: false,
    isDiscard: false,
    inputError: false,
    onCancel: () => alert("Cancel clicked"),
    onAdd: () => alert("Add clicked"),
    onClose: () => alert("Close clicked"),
    // setIsSummary: (value: boolean) => console.log("Set isSummary:", value),
    // setIsDiscard: (value: boolean) => console.log("Set isDiscard:", value),
    validateError: () => {
      alert("Validation error occurred");
      return false;
    },
    validateIsEmpty: () => {
      alert("Validation for empty fields occurred");
      return false;
    },
  },
};

export const UpdateAddForm: Story = {
  args: {
    ...DefaultAddForm.args,
    status: "update",
    headingLabel: "Update Vendor",
    summaryContent: "vendor details",
  },
};

export const DeleteAddForm: Story = {
  args: {
    ...DefaultAddForm.args,
    status: "delete",
    headingLabel: "Delete Vendor",
    summaryContent: "vendor details",
  },
};