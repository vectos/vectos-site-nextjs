import VectosTheme from "../components/VectosTheme"
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/react";

export const decorators = [
  (Story => (
    <ThemeProvider theme={{...VectosTheme}}>
      <CSSReset />
      <Box m='4'>
        <Story />
      </Box>
    </ThemeProvider>
  ))
];
