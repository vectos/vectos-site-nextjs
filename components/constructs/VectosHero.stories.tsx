import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VectosHero } from './VectosHero';

export default {
  title: 'Constructs/Hero',
  component: VectosHero,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof VectosHero>;

const Template: ComponentStory<typeof VectosHero> = (args) => <VectosHero />;

export const Standard = Template.bind({});
