import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import VectosTheme from '@/components/VectosTheme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={{...VectosTheme}}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
