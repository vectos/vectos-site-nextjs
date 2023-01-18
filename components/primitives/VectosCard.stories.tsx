import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VectosCard } from './VectosCard';
import { EmailIcon } from '@chakra-ui/icons';

export default {
  title: 'Primitives/VectosCard',
  component: VectosCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof VectosCard>;

const Template: ComponentStory<typeof VectosCard> = (args) => <VectosCard {...args} />;

export const LargeButton = Template.bind({});
LargeButton.args = {
  title: "Using oracles to test the service and data layer",
  text: "Getting rid of mocks in your service layer tests and test your database for real",
  href: "#",
  image: "/posts/test-oracle.png"
};