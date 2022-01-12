import { Text, Container, Stack, StackDivider, Heading, Badge } from "@chakra-ui/react"

import Nav from "./Nav"

function App() {
  return (
    <Container maxWidth="container.md">
      <Stack spacing={0} divider={<StackDivider />}>
        <Nav />
        <Stack marginTop={6} direction="row" alignItems="center" justifyContent="center">
          <Text flex={1}>Parte izquierda</Text>
          <Stack flex={1}>
            <Text fontWeight="bold"
              letterSpacing={2}
              textTransform="uppercase"
              fontSize="sm"
              color="primary.500">
              Sneaker company
            </Text>
            <Heading>Fall limited edition sneakers</Heading>
            <Text color="gray.500">These sneakers blabla These sneakers blabla These sneakers blabla These sneakers blabla These sneakers blabla These sneakers blabla These sneakers blabla
            </Text>
            <Stack>
              <Stack spacing={4} direction="row" alignItems="center">
                <Text fontSize="2xl" fontWeight={700}>$125.00</Text>
                <Badge colorScheme="primary" color="primary.500" fontSize="md" borderRadius="md" paddingX={2}>50%</Badge>
              </Stack>
              <Text fontWeight={700} color="gray.400" textDecoration="line-through">$250.00</Text>
            </Stack>
            <Stack direction="row">Parte derecha</Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}

export default App
