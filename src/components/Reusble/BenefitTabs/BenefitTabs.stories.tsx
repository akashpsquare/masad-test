import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BenefitTabs, Benefit } from "./BenefitTabs";


export default {
  title: "Components/BenefitList",
  component: BenefitTabs,
} as ComponentMeta<typeof BenefitTabs>;

const Template: ComponentStory<typeof BenefitTabs> = (args : any) => {
  const [data, setData] = useState<Benefit[]>(args.benefits);
  return <BenefitTabs {...args} benefits={data} onChange={setData} />;
};

export const Recent = Template.bind({});
Recent.args = {
  type: "Recent",
  benefits: [
    {
      id: 1,
      text: "Enjoy exclusive priority scheduling for all your service requests",
      deleted: false,
    },
  ],
};

export const Existing = Template.bind({});
Existing.args = {
  type: "Existing",
  benefits: [
    {
      id: 1,
      text: "Enjoy exclusive priority scheduling for all your service requests",
      deleted: false,
    },
    {
      id: 2,
      text: "Get priority scheduling for service requests and maintenance visits.",
      deleted: false,
    },
  ],
};
