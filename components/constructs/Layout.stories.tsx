import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Layout } from './Layout';
import { VectosHero } from './VectosHero';
import { VectosShowcaseCard } from '../primitives/VectosShowcaseCard';
import { Box, SimpleGrid, Stack } from '@chakra-ui/react';
import { VectosSelection } from '../primitives/VectosSelection';
import { VectosSummaryCard } from '../primitives/VectosSummaryCard';

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
    <>
      <VectosHero />
      <VectosSelection title="Projects" subTitle="A selection of projects I've done">
        <SimpleGrid columns={{base: 1, md: 3}} spacing={3}>
          <VectosShowcaseCard title="My DHL Work" intro="A single page web application used to onboard support couriers" href="#" banner="/img/projects/mdw/logo.png" />
          <VectosShowcaseCard title="Teevy" intro="A single page web application to keep track of your television series" href="#" banner="/img/projects/teevy/banner.png" />
        </SimpleGrid>
      </VectosSelection>
      <VectosSelection title="Clients" subTitle="The clients I've served the past few years">
        <SimpleGrid columns={{base: 1, md: 2}} spacing={4}>
          <VectosSummaryCard title="DHL" text="DHL German international courier, package delivery and express mail service. I've worked at DHL on several high-end web applications." image="/img/companies/dhl.png" />
          <VectosSummaryCard title="ING" text="The ING Group is a Dutch multinational banking and financial services corporation. I've worked at ING on approval software." image="/img/companies/ing.png" />
          <VectosSummaryCard title="Veon" text="VEON is a Dutch-domiciled multinational telecommunication services. It predominantly operates services in the regions of Asia, Africa and Europe. I've worked at VEON on the top up transactional systems." image="/img/companies/veon.png" />
          <VectosSummaryCard title="Malmberg" text="Malmberg is a Dutch company which creates educational software and books for schools. I've worked on Malmberg on a content management system (CMS) for eductional software. " image="/img/companies/malmberg.svg" />
        </SimpleGrid>
      </VectosSelection>
      <VectosSelection title="Certified" subTitle="Driven to keep up with latest trends and technologies">
        <SimpleGrid columns={{base: 1, md: 2}} spacing={4}>
          <VectosSummaryCard title="Nielsen Norman / Interaction design" text="Nielsen Norman Group, an elite firm dedicated to improving the everyday experience of using technology. I took courses on interaction design with the focus on apps." image="/img/cert/nielsen-norman.png" />
          <VectosSummaryCard title="Machine Learning by Andrew Ng" text="Machine learning is the science of getting computers to act without being explicitly programmed. In the past decade, machine learning has given us self-driving cars, speech recognition, web search, etc." image="/img/cert/coursera.png" />
          <VectosSummaryCard title="CKAD - Certified Kubernetes Application Developer" text="Be able to define application resources and use core primitives to build, monitor, and troubleshoot scalable applications and tools in Kubernetes." image="/img/cert/ckad.png" />
        </SimpleGrid>
      </VectosSelection>
      <VectosSelection title="Tech blog" subTitle="The latest tech blog articles">
        <SimpleGrid columns={{base: 1, md: 3}} spacing={3}>
          <VectosShowcaseCard title="Using oracles to test the service and data layer" intro="Getting rid of mocks in your service layer tests and test your datatabase for real" href="#" banner="/img/blog/test-oracle.png" />
          <VectosShowcaseCard title="Tracing with cats-tagless and ZIO" intro="Tracing can be a good tool to gain in-depth insights in problems you might have in your application" href="#" banner="/img/blog/tracing/trace.png" />
          <VectosShowcaseCard title="A functional ecosystem" intro="At DHL I built a microservice using cats, cats-effect, cats-tagless, refined, doobie, http4s and ZIO" href="#" banner="/img/blog/banner_functional_scala.jpg" />
        </SimpleGrid>
      </VectosSelection>
    </>

}
