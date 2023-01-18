import { Layout } from "@/components/constructs/Layout";
import { VectosCardSelection } from "@/components/constructs/VectosCardSelection";
import { VectosHero } from "@/components/constructs/VectosHero";
import { VectosCard } from "@/components/primitives/VectosCard";
import { Box } from "@chakra-ui/react";


export default function Home() {
  return (
    <Layout title="Home">
      <Box>
        <VectosHero />
        <VectosCardSelection title="Projects" subTitle="A selection of projects I've done ">
          <VectosCard title="My DHL Work" text="A single page web application used to onboard support couriers" href="#" image="/projects/dhl/logo.png" />
          <VectosCard title="Teevy" text="A single page web application to keep track of your television series" href="#" image="/projects/teevy/logo.png" />
          <VectosCard title="Teevy" text="A single page web application to keep track of your television series" href="#" image="/projects/teevy/logo.png" />
        </VectosCardSelection>
      </Box>
    </Layout>
  )
}
