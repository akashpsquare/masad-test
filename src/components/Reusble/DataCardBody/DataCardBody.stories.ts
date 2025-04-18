import type { Meta, StoryObj } from "@storybook/react";
import DataCardBody from "./DataCardBody";
// import "../../../index.css"

const meta: Meta<typeof DataCardBody> = {
  title: "Components/Reusable/DataCardBody",
  component: DataCardBody,
};

export default meta;

type Story = StoryObj<typeof DataCardBody>;

export const Default: Story = {
  args: {
    data:[

        {
            id: 1,
            name: "John Doe",
            price: 1000,
        },
        
        {
            id: 1,
            name: "John Doe",
            price: 1000,
        },
        {
            id: 1,
            name: "John Doe",
            price: 1000,
        },
        {
            id: 1,
            name: "John Doe",
            price: 1000,
        }

    ]
    // count: 7, // Uncomment if needed
  },
};
