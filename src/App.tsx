import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Dictaphone } from "./components/Dictaphone"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Dictaphone />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
