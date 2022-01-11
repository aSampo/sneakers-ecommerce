import { Text, Container, Stack, StackDivider } from "@chakra-ui/react"

import Nav from "./Nav"

function App() {
  return (
    <Container maxWidth="container.lg">
      <Stack spacing={0} divider={<StackDivider />}>
        <Nav />
        <Stack marginTop={6} direction="row">
          <Text flex={1}>Parte izquierda</Text>
          <Stack flex={1}>
            <Text fontWeight="bold" letterSpacing={2} textTransform="uppercase" fontSize="sm" color="primary.500">Sneaker company</Text>
            <Text>Parte derecha</Text>
            <Text>Parte derecha</Text>
            <Text>Parte derecha</Text>
            <Text>Parte derecha</Text>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}

export default App
