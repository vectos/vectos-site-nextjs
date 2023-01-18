import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PrimaryButton } from './PrimaryButton';
import { EmailIcon } from '@chakra-ui/icons';

export default {
  title: 'Primitives/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PrimaryButton>;

const Template: ComponentStory<typeof PrimaryButton> = (args) => <PrimaryButton {...args} />;

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

export const LargeButtonWithIcon = Template.bind({});
LargeButtonWithIcon.args = {
  label: "Email",
  size: "lg",
  icon: (<EmailIcon/>)
};

