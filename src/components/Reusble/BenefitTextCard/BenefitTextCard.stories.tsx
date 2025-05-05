import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BenefitTextCard } from './BenefitTextCard';

export default {
  title: 'Components/BenefitTextCard',
  component: BenefitTextCard,
} as ComponentMeta<typeof BenefitTextCard>;

const Template: ComponentStory<typeof BenefitTextCard> = (args : any) => (
  <BenefitTextCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Benefit 1',
  text: 'Enjoy exclusive priority scheduling for all your service requests',
};

export const Updated = Template.bind({});
Updated.args = {
  title: 'Benefit 2',
  text: 'Enjoy exclusive priority scheduling for all your service requests',
  variant: 'updated',
};

export const Discarded = Template.bind({});
Discarded.args = {
  title: 'Benefit 3',
  text: 'Enjoy exclusive priority scheduling for all your service requests',
  variant: 'discarded',
};
