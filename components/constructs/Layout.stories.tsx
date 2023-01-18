import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Layout } from './Layout';
import { VectosHero } from './VectosHero';
import { VectosCard } from '../primitives/VectosCard';
import { Box } from '@chakra-ui/react';
import { VectosCardSelection } from './VectosCardSelection';

export default {
  title: 'Constructs/Layout',
  component: Layout,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const HomePage = Template.bind({})
HomePage.args = {
  title: "Home", 
  children: 
    <Box>
      <VectosHero />
      <VectosCardSelection title="Projects" subTitle="A selection of projects I've done ">
        <VectosCard title="My DHL Work" text="A single page web application used to onboard support couriers" href="#" image="/projects/dhl/logo.png" />
        <VectosCard title="Teevy" text="A single page web application to keep track of your television series" href="#" image="/projects/teevy/logo.png" />
        <VectosCard title="Teevy" text="A single page web application to keep track of your television series" href="#" image="/projects/teevy/logo.png" />
      </VectosCardSelection>
    </Box>
  
}
