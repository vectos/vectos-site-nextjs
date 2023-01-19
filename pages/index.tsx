import { Layout } from "@/components/constructs/Layout";
import { VectosHero } from "@/components/constructs/VectosHero";
import { VectosSelection } from "@/components/primitives/VectosSelection";
import { VectosShowcaseCard } from "@/components/primitives/VectosShowcaseCard";
import { VectosSummaryCard } from "@/components/primitives/VectosSummaryCard";
import { getAllPosts } from "@/lib/api";
import { Box, SimpleGrid } from "@chakra-ui/react";

interface Post {
  slug: string,
  title: string,
  intro: string,
  banner: string
}

interface Props {
  posts: Post[]
}

export default function Home(props: Props) {
  console.log(props);
  return (
    <Layout title="Home">
      <Box>
        <VectosHero />
        <VectosSelection title="Projects" subTitle="A selection of projects I've done">
          <SimpleGrid columns={3} spacing={1}>
            <VectosShowcaseCard title="My DHL Work" intro="A single page web application used to onboard support couriers" href="#" banner="/img/projects/mdw/logo.png" />
            <VectosShowcaseCard title="Teevy" intro="A single page web application to keep track of your television series" href="#" banner="/img/projects/teevy/banner.png" />
          </SimpleGrid>
        </VectosSelection>
        <VectosSelection title="Clients" subTitle="The clients I've served the past few years">
          <SimpleGrid columns={2} spacing={4}>
            <VectosSummaryCard title="DHL" text="DHL German international courier, package delivery and express mail service. I've worked at DHL on several high-end web applications." image="/img/companies/dhl.png" />
            <VectosSummaryCard title="ING" text="The ING Group is a Dutch multinational banking and financial services corporation. I've worked at ING on approval software." image="/img/companies/ing.png" />
            <VectosSummaryCard title="Veon" text="VEON is a Dutch-domiciled multinational telecommunication services. It predominantly operates services in the regions of Asia, Africa and Europe. I've worked at VEON on the top up transactional systems." image="/img/companies/veon.png" />
            <VectosSummaryCard title="Malmberg" text="Malmberg is a Dutch company which creates educational software and books for schools. I've worked on Malmberg on a content management system (CMS) for eductional software. " image="/img/companies/malmberg.svg" />
          </SimpleGrid>
        </VectosSelection>
        <VectosSelection title="Certified" subTitle=" Driven to keep up with latest trends and technologies">
          <SimpleGrid columns={2} spacing={4}>
            <VectosSummaryCard title="Nielsen Norman / Interaction design" text="Nielsen Norman Group, an elite firm dedicated to improving the everyday experience of using technology. I took courses on interaction design with the focus on apps." image="/img/cert/nielsen-norman.png" />
            <VectosSummaryCard title="Machine Learning by Andrew Ng" text="Machine learning is the science of getting computers to act without being explicitly programmed. In the past decade, machine learning has given us self-driving cars, speech recognition, web search, etc." image="/img/cert/coursera.png" />
            <VectosSummaryCard title="CKAD - Certified Kubernetes Application Developer" text="Be able to define application resources and use core primitives to build, monitor, and troubleshoot scalable applications and tools in Kubernetes." image="/img/cert/ckad.png" />
          </SimpleGrid>
        </VectosSelection>
        <VectosSelection title="Tech blog" subTitle="The latest tech blog articles">
          <SimpleGrid columns={3} spacing={1}>
            {props.posts?.map(item => <VectosShowcaseCard key={item.slug} {...item} href={`/posts/${item.slug}`} />)}
          </SimpleGrid>
        </VectosSelection>
      </Box>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = getAllPosts(['slug', 'title', 'intro', 'banner'])
  
  return {
    props: { posts },
  }
}

