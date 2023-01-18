import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Hero } from './Hero';

export default {
  title: 'Constructs/Hero',
  component: Hero,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero />;

export const Standard = Template.bind({});
