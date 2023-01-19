import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VectosSummaryCard } from './VectosSummaryCard';

export default {
  title: 'Primitives/VectosSummaryCard',
  component: VectosSummaryCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof VectosSummaryCard>;

const Template: ComponentStory<typeof VectosSummaryCard> = (args) => <VectosSummaryCard {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  title: "DHL",
  text: "DHL German international courier, package delivery and express mail service. I've worked at DHL on several high-end web applications. ",
  image: "/img/companies/dhl.png"
};