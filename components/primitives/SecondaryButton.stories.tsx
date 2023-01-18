import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SecondaryButton } from './SecondaryButton';

export default {
  title: 'Primitives/SecondaryButton',
  component: SecondaryButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SecondaryButton>;

const Template: ComponentStory<typeof SecondaryButton> = (args) => <SecondaryButton {...args} />;

export const LargeButton = Template.bind({});
LargeButton.args = {
  label: "Login",
  size: "lg"
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  label: "Login",
  size: "md"
};

