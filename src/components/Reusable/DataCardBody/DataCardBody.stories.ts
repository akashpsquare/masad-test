import type { Meta, StoryObj } from "@storybook/react";
import DataCardBody from "./DataCardBody";

const meta: Meta<typeof DataCardBody> = {
  title: "Components/Reusable/DataCardBody",
  component: DataCardBody,
};

export default meta;

type Story = StoryObj<typeof DataCardBody>;

export const Product: Story = {
  args: {
    variant: "product",
    data: [
      { id: 1, name: "Cool Sneakers", price: 59.99 },
      { id: 2, name: "Cool Watch", price: 129.99 },
      { id: 3, name: "Nothing", price: 59.99 },
    ],
  },
};

export const Service: Story = {
  args: {
    variant: "service",
    data: [
      { id: 1, name: "Priority Service", price: 99.99 },
      { id: 2, name: "Extended Warranty", price: 199.99 },
    ],
    serviceMessage: 'Get priority scheduling for service requests and maintenance visits.'
  },
};

export const Reminder: Story = {
  args: {
    variant: "reminder",
    reminderdata: [
      { days: 5, time: "10:00 AM", message: "Service Reminder" },
      { days: 2, time: "2:00 PM", message: "Payment Reminder" },
    ],
  },
};

export const Benefit: Story = {
  args: {
    variant: "benefit",
    benefitdata: [
      "Free Shipping",
      "Priority Support",
      "Exclusive Discounts",
    ],
  },
};

export const Discount: Story = {
  args: {
    variant: "discount",
    discountdata: [
      {
        eventName: "Holiday Sale",
        message: "Up to 50% off on all items!",
        startDate: "2025-05-01",
        endDate: "2025-05-10",
        startTime: "9:00 AM",
        endTime: "11:59 PM",
        currency: "$",
        offerExpiry: "50",
        expiryMessage: "Hurry! Offer ends soon.",
      },  {
        eventName: "Holiday Sale",
        message: "Up to 50% off on all items!",
        startDate: "2025-05-01",
        endDate: "2025-05-10",
        startTime: "9:00 AM",
        endTime: "11:59 PM",
        currency: "$",
        offerExpiry: "50",
        expiryMessage: "Hurry! Offer ends soon.",
      },  {
        eventName: "Holiday Sale",
        message: "Up to 50% off on all items!",
        startDate: "2025-05-01",
        endDate: "2025-05-10",
        startTime: "9:00 AM",
        endTime: "11:59 PM",
        currency: "$",
        offerExpiry: "50",
        expiryMessage: "Hurry! Offer ends soon.",
      },
    ],
  },
};