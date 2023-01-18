import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Page } from './Page';
import { Hero } from './Hero';

export default {
  title: 'Constructs/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page title='Home'><Hero /></Page>;

export const Standard = Template.bind({});
