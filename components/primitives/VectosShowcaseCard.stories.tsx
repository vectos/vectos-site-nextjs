import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VectosShowcaseCard } from './VectosShowcaseCard';

export default {
  title: 'Primitives/VectosShowcaseCard',
  component: VectosShowcaseCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof VectosShowcaseCard>;

const Template: ComponentStory<typeof VectosShowcaseCard> = (args) => <VectosShowcaseCard {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  title: "Using oracles to test the service and data layer",
  text: "Getting rid of mocks in your service layer tests and test your database for real",
  href: "#",
  image: "/img/blog/test-oracle.png"
};