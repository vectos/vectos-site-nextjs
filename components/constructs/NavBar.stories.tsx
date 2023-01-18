import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavBar } from './NavBar';

export default {
  title: 'Constructs/NavBar',
  component: NavBar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar />;

export const Standard = Template.bind({});
