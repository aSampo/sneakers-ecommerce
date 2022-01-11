import { Box, Container, Stack, StackDivider } from "@chakra-ui/react"

import Nav from "./Nav"

function App() {
  return (
    <Container maxWidth="container.lg">
      <Stack spacing={0} divider={<StackDivider/>}>
        <Nav/>
        <Box marginTop={6}>Contenido</Box>
      </Stack>
    </Container>
  )
}

export default App
